import { source } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const pages = source.getPages();

  const lines = [
    '# Pulse Documentation',
    '',
    '> Pulse is an open-source platform for building LLM-powered applications with visual workflows, RAG pipelines, and plugin-based model management.',
    '',
    '## Pages',
    '',
  ];

  for (const page of pages) {
    const url = `https://pulse-docs-three.vercel.app${page.url}`;
    lines.push(`- [${page.data.title}](${url}): ${page.data.description ?? ''}`);
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
