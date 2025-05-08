import { TagSection } from '../_components/TagSection';
import { ProfileSection } from '../_components/ProfileSection';
import { getPublishedPosts, getTags } from '@/lib/notion';
import HeaderSection from '../_components/HeaderSection';
// import PostListClient from '@/components/features/blog/PostList client';
import PostList from '@/components/features/blog/PostList client';

interface BlogProps {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function Blog({ searchParams }: BlogProps) {
  const { tag, sort } = await searchParams;
  const selectedTag = tag || 'All';
  const selectedSort = sort || 'latest';

  const tags = await getTags();
  const postsPromise = getPublishedPosts({ tag: selectedTag, sort: selectedSort });

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr_220px]">
        {/* left side */}
        <aside className="order-2 md:order-none">
          <TagSection tags={tags} />
        </aside>
        <div className="order-3 space-y-8 md:order-none">
          {/* Section Title */}
          <HeaderSection selectedTag={selectedTag} />
          {/* Blog Card Grid */}
          <PostList postsPromise={postsPromise} />
        </div>
        {/* right side */}
        <aside className="order-1 md:order-none">
          <ProfileSection />
        </aside>
      </div>
    </div>
  );
}
