import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getPostBySlug } from '@/lib/notion';
import { formatDate } from '@/lib/date';
interface TableOfContentsItem {
  id: string;
  title: string;
  items?: TableOfContentsItem[];
}

const mockTableOfContents: TableOfContentsItem[] = [
  {
    id: 'intro',
    title: 'Introduction',
    items: [],
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      {
        id: 'prerequisites',
        title: 'Prerequisites',
        items: [
          {
            id: 'node-installation',
            title: 'Node.js Installation',
          },
          {
            id: 'npm-setup',
            title: 'NPM Setup',
          },
        ],
      },
      {
        id: 'project-setup',
        title: 'Project Setup',
        items: [
          {
            id: 'create-project',
            title: 'Create Project',
          },
          {
            id: 'folder-structure',
            title: 'Folder Structure',
          },
        ],
      },
    ],
  },
  {
    id: 'shadcn-ui-setup',
    title: 'Shadcn UI Setup',
    items: [
      {
        id: 'installation',
        title: 'Installation Method',
        items: [
          {
            id: 'cli-installation',
            title: 'CLI Tool Installation',
          },
          {
            id: 'component-setup',
            title: 'Component Setup',
          },
        ],
      },
      {
        id: 'configuration',
        title: 'Environment Setup',
        items: [
          {
            id: 'theme-setup',
            title: 'Theme Setup',
          },
          {
            id: 'typography',
            title: 'Typography',
          },
        ],
      },
    ],
  },
];

function TableOfContentsLink({ item }: { item: TableOfContentsItem }) {
  return (
    <div className="space-y-2">
      <Link
        key={item.id}
        href={`#${item.id}`}
        className={`hover:text-foreground text-muted-foreground block font-medium transition-colors`}
      >
        {item.title}
      </Link>
      {item.items && item.items.length > 0 && (
        <div className="space-y-2 pl-4">
          {item.items.map((subItem) => (
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

  return (
    <div className="container py-12">
      <div className="grid grid-cols-[240px_1fr_240px] gap-8">
        <aside>{/* add content later */}</aside>
        <section>
          {/* blog header */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                {post.tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}
              </div>
              <h1 className="text-4xl font-bold">{post.title}</h1>
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
              {/* <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div> */}
            </div>
          </div>

          <Separator className="my-8" />

          {/* blog content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="lead">
              Let&apos;s learn how to build a modern and beautiful blog using Next.js and Shadcn UI.
              This tutorial covers the entire process from basic setup to deployment.
            </p>

            <h2>Getting Started</h2>
            <p>
              Next.js is a full-stack React framework. It offers various rendering strategies like
              server-side rendering, static site generation, and more, while providing many features
              that enhance the developer experience.
            </p>

            <h2>Setting up Shadcn UI</h2>
            <p>
              Shadcn UI is a collection of reusable components that combines beautiful design and
              accessibility. It allows you to own the components and customize them freely.
            </p>
          </div>

          <Separator className="my-16" />

          {/* previous/next post navigation */}
          <nav className="grid grid-cols-2 gap-8">
            <Link href="/blog/previous-post">
              <Card className="group hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base font-medium">
                    <ChevronLeft className="h-4 w-4" />
                    <span>Getting Started</span>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    Learn how to start with Next.js, including project structure and basic setup.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/blog/next-post" className="text-right">
              <Card className="group hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center justify-end gap-2 text-base font-medium">
                    <span>Advanced Guide</span>
                    <ChevronRight className="h-4 w-4" />
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    Learn how to use advanced features of Next.js to create better web applications.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </nav>
        </section>
        <aside className="relative">
          <div className="sticky top-[var(--sticky-top)]">
            <div className="bg-muted/50 space-y-4 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">Table of Contents</h3>
              <nav className="space-y-3 text-sm">
                {mockTableOfContents.map((item) => (
                  <TableOfContentsLink key={item.id} item={item} />
                ))}
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
