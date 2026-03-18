import { source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";

const REPO_URL =
  "https://github.com/Pulse-Intelligence/pulse-docs/edit/main/content/docs";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const filePath = params.slug ? params.slug.join("/") : "index";
  const editUrl = `${REPO_URL}/${filePath}.mdx`;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents()} />
        <a
          href={editUrl}
          rel="noreferrer noopener"
          target="_blank"
          className="mt-8 inline-flex items-center gap-1.5 w-fit border rounded-xl px-3 py-2 font-medium text-sm text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground hover:bg-fd-accent"
        >
          Edit on GitHub
        </a>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();
  return { title: page.data.title, description: page.data.description };
}
