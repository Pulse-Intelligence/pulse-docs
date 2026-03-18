import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';
import Image from 'next/image';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <>
            <Image src="/logo.svg" alt="" width={24} height={24} aria-hidden />
            <span className="font-semibold">Pulse Docs</span>
          </>
        ),
        url: '/docs',
      }}
      githubUrl="https://github.com/Pulse-Intelligence/pulse-docs"
    >
      {children}
    </DocsLayout>
  );
}
