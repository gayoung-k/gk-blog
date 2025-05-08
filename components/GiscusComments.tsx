'use client';
import Giscus from '@giscus/react';
export default function GiscusComments() {
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
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}

// <script src="https://giscus.app/client.js"
//         data-repo="gayoung-k/notion-blog-nextjs-gisc"
//         data-repo-id="R_kgDOOmv70w"
//         data-category="Announcements"
//         data-category-id="DIC_kwDOOmv7084Cp69U"
//         data-mapping="pathname"
//         data-strict="0"
//         data-reactions-enabled="1"
//         data-emit-metadata="0"
//         data-input-position="top"
//         data-theme="preferred_color_scheme"
//         data-lang="ko"
//         crossorigin="anonymous"
//         async>
// </script>
