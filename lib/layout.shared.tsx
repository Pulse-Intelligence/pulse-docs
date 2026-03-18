import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="" width={28} height={28} aria-hidden />
          <span className="font-bold text-lg">Pulse Docs</span>
        </div>
      ),
      url: "/docs",
    },
    githubUrl: "https://github.com/Pulse-Intelligence/pulse-docs",
    links: [
      {
        text: "User Guide",
        url: "/docs/user-guide",
      },
      {
        text: "Contributing",
        url: "/docs/contributing",
      },
      {
        text: "Architecture",
        url: "/docs/architecture",
      },
    ],
  };
}
