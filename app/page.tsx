// import { TagSection } from './_components/TagSection';
// import { ProfileSection } from './_components/ProfileSection';
// import { getPublishedPosts, getTags } from '@/lib/notion';
// import HeaderSection from './_components/HeaderSection';
// import PostList from '@/components/features/blog/PostList client';
// interface HomeProps {
//   searchParams: Promise<{ tag?: string; sort?: string }>;

import { Metadata } from 'next';
import { redirect } from 'next/navigation';

// }
export const metadata: Metadata = {
  title: 'Home',
  description: 'It is a blog for sharing my thoughts and experiences.',
  alternates: {
    canonical: '/',
  },
};
export default function Home() {
  redirect('/blog');
}
