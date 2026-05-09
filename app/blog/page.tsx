import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { ArrowLeft } from "lucide-react";
import { PostCard } from "@/components/post-card";



interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
  body: any;
}

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(coalesce(publishedAt, "1970-01-01") desc) {
    title,
    "slug": slug.current,
    publishedAt,
    "summary": array::join(string::split(coalesce(pt::text(body), ""), "")[0..140], "") + "...",
    body
  }`;
  const posts = await client.fetch(query);
  return posts;
}

export default async function BlogIndex() {
  const posts = await getPosts();
  
  const monoFont = "font-[family-name:var(--font-mono)]";

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px] animate-float motion-reduce:animate-none" />
        <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-accent-2/20 blur-[160px] animate-float animate-delay-300 motion-reduce:animate-none" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-10 lg:grid-cols-[360px_1fr] lg:gap-16 lg:px-10 lg:py-16">
        <Sidebar />

        <div className="space-y-16">
          <section className="space-y-8 animate-fade-up motion-reduce:animate-none">
            <header className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p
                  className={`text-xs uppercase tracking-[0.35em] text-muted ${monoFont}`}
                >
                  Thoughts & Observations
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-heading lg:text-4xl">
                  Blog
                </h2>
              </div>
              <Link
                href="/"
                className="group flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span className={`uppercase tracking-[0.2em] ${monoFont}`}>
                  Portfolio
                </span>
              </Link>
            </header>

            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <PostCard
                  key={post.slug}
                  title={post.title}
                  slug={post.slug}
                  publishedAt={post.publishedAt}
                  summary={post.summary}
                  body={post.body}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
