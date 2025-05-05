// import Link from 'next/link';
// import { PostCard } from './PostCard';
// import { Post } from '@/types/blog';
// import { use } from 'react';
// import { useSearchParams } from 'next/navigation';

// interface PostListProps {
//   postsPromise: Promise<Post[]>;
// }

// export default function PostList({ postsPromise }: PostListProps) {
//   const initialPosts = use(postsPromise);
//   const searchParams = useSearchParams();
//   const tag = searchParams.get('tag';)
//   return (
//     <div className="grid gap-4">
//       {/* Blog Card Loop */}
//       {posts.map((post, index) => (
//         <Link href={`/blog/${post.slug}`} key={post.id}>
//           <PostCard post={post} isFirst={index === 0} />
//         </Link>
//       ))}
//     </div>
//   );
// }
