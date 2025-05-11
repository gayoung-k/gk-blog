// import { TagSection } from './_components/TagSection';
// import { ProfileSection } from './_components/ProfileSection';
// import { getPublishedPosts, getTags } from '@/lib/notion';
// import HeaderSection from './_components/HeaderSection';
// import PostList from '@/components/features/blog/PostList client';
// interface HomeProps {
//   searchParams: Promise<{ tag?: string; sort?: string }>;

import { Metadata } from 'next';

// }
export const metadata: Metadata = {
  title: 'Home',
  description: 'It is a blog for sharing my thoughts and experiences.',
  alternates: {
    canonical: '/',
  },
};
export default async function Home() {
  // const { tag, sort } = await searchParams;
  // const selectedTag = tag || 'All';
  // const selectedSort = sort || 'latest';

  // const tags = await getTags();
  // const postsPromise = getPublishedPosts({ tag: selectedTag, sort: selectedSort });

  return <div>Home</div>;
}
