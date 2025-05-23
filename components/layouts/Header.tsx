import Link from 'next/link';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex h-[var(--header-height)] items-center">
        <Link href="/" className="text-xl font-semibold">
          <span className="font-bold">GK-BLOG</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link href="/blog" className="hover:text-primary font-medium">
            Blog
          </Link>
          <Link href="/about" className="hover:text-primary font-medium">
            About
          </Link>
        </nav>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
