import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { estimateReadingTime } from "@/lib/utils";

interface PostCardProps {
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
  body: any;
}

export function PostCard({ title, slug, publishedAt, summary, body }: PostCardProps) {
  const monoFont = "font-[family-name:var(--font-mono)]";

  return (
    <Link
      href={`/blog/${slug}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/10 hover:shadow-xl dark:border-white/5 dark:bg-white/5 dark:hover:border-accent/40 dark:hover:bg-white/10"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-medium uppercase tracking-wider text-muted-foreground ${monoFont}`}
            >
              {publishedAt ? (
                new Date(publishedAt).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })
              ) : (
                "Recently"
              )}
            </span>
            <span className="h-1 w-1 rounded-full bg-accent/30" />
            <span className={`text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60 ${monoFont}`}>
              {estimateReadingTime(body)} min read
            </span>
          </div>
        </div>

        <h3 className="line-clamp-2 text-xl font-semibold leading-tight text-foreground transition-colors group-hover:text-accent">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {summary}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Read Article
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
