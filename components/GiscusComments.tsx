'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function GiscusComments() {
  const { theme } = useTheme();
  return (
    <Giscus
      repo="gayoung-k/notion-blog-nextjs-gisc"
      repoId="R_kgDOOmv70w"
      category="Announcements"
      categoryId="DIC_kwDOOmv7084Cp69U"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === 'dark' ? 'dark' : 'light'}
      lang="en"
      loading="lazy"
    />
  );
}
