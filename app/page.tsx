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

const mockPosts = [
  {
    id: '1',
    title: 'Next.js 13으로 블로그 만들기',
    description: 'Next.js 13과 Notion API를 활용하여 개인 블로그를 만드는 방법을 알아봅니다.',
    coverImage: 'https://picsum.photos/800/400',
    tags: [
      { id: '1', name: 'Next.js', count: 10 },
      { id: '2', name: 'React', count: 20 },
    ],
    author: '짐코딩',
    date: '2024-02-01',
  },
  {
    id: '2',
    title: 'TypeScript 기초 다지기',
    description: 'TypeScript의 기본 문법과 실전에서 자주 사용되는 패턴들을 살펴봅니다.',
    coverImage: 'https://picsum.photos/800/401',
    tags: [
      { id: '3', name: 'TypeScript', count: 30 },
      { id: '4', name: 'JavaScript', count: 40 },
    ],
    author: '짐코딩',
    date: '2024-01-15',
  },
];
const mockTags = [
  { id: '1', name: 'Next.js', count: 10 },
  { id: '2', name: 'React', count: 20 },
  { id: '3', name: 'Typescript', count: 30 },
  { id: '4', name: 'Tailwind CSS', count: 40 },
  { id: '5', name: 'Node.js', count: 50 },
  { id: '6', name: 'Express', count: 60 },
];

export default function Home() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        {/* left side */}
        <aside>
          <TagSection tags={mockTags} />
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
            {[0, 1].map((i) => (
              <Link href={`/blog/${mockPosts[i].id}`} key={i}>
                <PostCard post={mockPosts[i]} />
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
