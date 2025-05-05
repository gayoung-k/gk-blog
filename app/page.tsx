import { TagSection } from './_components/TagSection';
import { ProfileSection } from './_components/ProfileSection';
import { getPublishedPosts, getTags } from '@/lib/notion';
import HeaderSection from './_components/HeaderSection';
import PostList from '@/components/features/blog/PostList client';

interface HomeProps {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { tag, sort } = await searchParams;
  const selectedTag = tag || 'All';
  const selectedSort = sort || 'latest';

  const tags = await getTags();
  const postsPromise = getPublishedPosts({ tag: selectedTag, sort: selectedSort });

  return (
    <div className="container py-8">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        {/* left side */}
        <aside>
          <TagSection tags={tags} />
        </aside>
        <div className="space-y-8">
          {/* Section Title */}
          <HeaderSection selectedTag={selectedTag} />
          {/* Blog Card Grid */}
          <PostList postsPromise={postsPromise} />
        </div>
        {/* right side */}
        <aside>
          <ProfileSection />
        </aside>
      </div>
    </div>
  );
}
