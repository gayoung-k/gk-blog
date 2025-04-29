import Link from 'next/link';
import { PostCard } from '@/components/features/blog/PostCard';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { TagSection } from './_components/TagSection';
import { ProfileSection } from './_components/ProfileSection';
import { getPublishedPosts, getTags } from '@/lib/notion';

interface HomeProps {
  searchParams: Promise<{ tag?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { tag } = await searchParams;
  const selectedTag = tag || 'All';
  const [posts, tags] = await Promise.all([
    getPublishedPosts(selectedTag),
    getTags(),
  ]);

  return (
    <div className="container py-8">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        {/* left side */}
        <aside>
          <TagSection tags={tags} />
        </aside>
        <div className="space-y-8">
          {/* Section Title */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Blog</h2>
            <Select defaultValue="latest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Sorting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Blog Card Grid */}
          <div className="grid gap-4">
            {/* Blog Card Loop */}
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <PostCard post={post} />
              </Link>
            ))}
          </div>
        </div>
        {/* right side */}
        <aside>
          <ProfileSection />
        </aside>
      </div>
    </div>
  );
}
