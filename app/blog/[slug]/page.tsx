import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, User } from 'lucide-react';
import { getPostBySlug, getPublishedPosts } from '@/lib/notion';
import { formatDate } from '@/lib/date';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import { rehypePrettyCode } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { compile } from '@mdx-js/mdx';
import withSlugs from 'rehype-slug';
import withToc from '@stefanprobst/rehype-extract-toc';
import withTocExport from '@stefanprobst/rehype-extract-toc/mdx';
import GiscusComments from '@/components/GiscusComments';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ScrollToTop } from '@/components/features/blog/ScrollToTop';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post not found',
      description: 'The requested blog post was not found.',
    };
  }

  return {
    title: post.title,
    description: post.description || `${post.title} - GK Blog`,
    keywords: post.tags,
    authors: [{ name: post.author || 'Gayoung Kim' }],
    publisher: 'Gayoung Kim',
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modifiedDate,
      authors: post.author || 'Gayoung Kim',
      tags: post.tags,
    },
  };
}
interface TocEntry {
  value: string;
  depth: number;
  id?: string;
  children?: Array<TocEntry>;
}

export const generateStaticParams = async () => {
  const { posts } = await getPublishedPosts({
    pageSize: 100,
  });
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export const revalidate = 60;

function TableOfContentsLink({ item }: { item: TocEntry }) {
  return (
    <div className="space-y-2">
      <Link
        key={item.id}
        href={`#${item.id}`}
        className={`hover:text-foreground text-muted-foreground block font-medium transition-colors`}
      >
        {item.value}
      </Link>
      {item.children && item.children.length > 0 && (
        <div className="space-y-2 pl-4">
          {item.children.map((subItem) => (
            <TableOfContentsLink key={subItem.id} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
}

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const { markdown, post } = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  const { data } = await compile(markdown, {
    rehypePlugins: [withSlugs, rehypeSanitize, withToc, withTocExport],
  });

  return (
    <div className="container py-6 md:py-8 lg:py-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[240px_1fr_240px] md:gap-8">
        <aside className="hidden md:block">{/* add content later */}</aside>
        <section>
          {/* blog header */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                {post.tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">{post.title}</h1>
            </div>

            {/* meta information */}
            <div className="text-muted-foreground flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* table of contents for mobile */}
          <div className="sticky top-[var(--sticky-top)] mb-6 md:hidden">
            <details className="bg-muted/60 rounded-lg p-4 backdrop-blur-sm">
              <summary className="cursor-pointer text-lg font-semibold">Table of Contents</summary>
              <nav className="mt-3 space-y-3 text-sm">
                {data?.toc?.map((item) => <TableOfContentsLink key={item.id} item={item} />)}
              </nav>
            </details>
          </div>

          {/* blog content */}
          <div className="prose prose-slate dark:prose-invert prose-headings:scroll-mt-[var(--header-height)] max-w-none">
            <MDXRemote
              source={markdown}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug, rehypeSanitize, rehypePrettyCode],
                },
              }}
            />
          </div>

          <Separator className="my-16" />

          {/* comments */}
          <GiscusComments />

          {/* scroll to top button */}
          <ScrollToTop />
        </section>

        {/* table of contents for desktop */}
        <aside className="relative hidden md:block">
          <div className="sticky top-[var(--sticky-top)]">
            <div className="bg-muted/50 space-y-4 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">Table of Contents</h3>
              <nav className="space-y-3 text-sm">
                {data?.toc?.map((item) => <TableOfContentsLink key={item.id} item={item} />)}
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
