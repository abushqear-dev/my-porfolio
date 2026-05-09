import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { estimateReadingTime } from "@/lib/utils";
import Image from "next/image";

export async function generateStaticParams() {
  try {
    const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
    
    if (!posts || posts.length === 0) {
      return [{ slug: 'welcome' }];
    }

    const paths = posts.map((post: { slug: string }) => ({
      slug: post.slug,
    }));

    return paths;
  } catch (error) {
    console.error("Error fetching paths for generation:", error);
    return [{ slug: 'welcome' }];
  }
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const monoFont = "font-[family-name:var(--font-mono)]";
  


  if (slug === 'welcome') {
    return (
      <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px] animate-float motion-reduce:animate-none" />
          <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-accent-2/20 blur-[160px] animate-float animate-delay-300 motion-reduce:animate-none" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-10 lg:grid-cols-[360px_1fr] lg:gap-16 lg:px-10 lg:py-16">
          <Sidebar />
          <div className="space-y-16">
            <article className="space-y-8 animate-fade-up motion-reduce:animate-none">
              <header className="space-y-4">
                <Link
                  href="/blog"
                  className={`text-xs uppercase tracking-[0.35em] text-muted hover:text-accent transition ${monoFont}`}
                >
                  ← Back to Blog
                </Link>
                <h1 className="text-3xl font-semibold text-heading lg:text-4xl text-pretty">
                  Welcome to my Blog
                </h1>
                <p className="text-muted">No posts found yet. Check back soon!</p>
              </header>
            </article>
          </div>
        </div>
      </main>
    );
  }



  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      ...,
      "mainImage": mainImage.asset->url
    }`,
    { slug }
  );

  if (!post) {
    notFound();
  }

  const PortableTextComponents = {
    types: {
      image: ({ value }: { value: any }) => {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { urlFor } = require("@/sanity/lib/image");
        return (
          <div className="relative my-8 aspect-video w-full overflow-hidden rounded-xl">
             <Image
              src={urlFor(value).url()}
              alt={value.alt || "Post image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            />
          </div>
        );
      },
    },
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        const target = !value.href.startsWith("/") ? "_blank" : undefined;
        return (
          <a href={value.href} rel={rel} target={target}>
            {children}
          </a>
        );
      },
    },
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px] animate-float motion-reduce:animate-none" />
        <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-accent-2/20 blur-[160px] animate-float animate-delay-300 motion-reduce:animate-none" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-10 lg:grid-cols-[360px_1fr] lg:gap-16 lg:px-10 lg:py-16">
        <Sidebar />

        <div className="space-y-16 min-w-0">
            <article className="space-y-12 animate-fade-up motion-reduce:animate-none">
              <header className="space-y-8 border-b border-border/40 pb-10">
                <Link
                  href="/blog"
                  className={`group inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-muted transition hover:text-accent ${monoFont}`}
                >
                  <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                  Back to Blog
                </Link>
                
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold leading-tight text-heading lg:text-5xl text-pretty">
                    {post.title}
                  </h1>
                  
                  <div className="flex items-center gap-4 text-sm text-muted">
                    <span className={`uppercase tracking-wider ${monoFont}`}>
                      {post.publishedAt ? (
                        new Date(post.publishedAt).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })
                      ) : (
                        "Recently Published"
                      )}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-accent/50" />
                    <span>{estimateReadingTime(post.body as any)} min read</span>
                  </div>
                </div>

                {post.mainImage && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/5 bg-surface-2/50">
                    <Image
                      src={post.mainImage}
                      alt={post.title || "Post cover image"}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </div>
                )}
              </header>

              <div className="prose prose-lg prose-invert max-w-none break-words
                prose-headings:font-semibold prose-headings:text-heading prose-headings:tracking-tight
                prose-p:leading-relaxed prose-p:text-muted-foreground
                prose-a:text-accent prose-a:no-underline prose-a:transition-colors hover:prose-a:text-accent/80
                prose-strong:text-foreground prose-strong:font-semibold
                prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-sm
                prose-pre:bg-surface-2/30 prose-pre:border prose-pre:border-white/5 prose-pre:backdrop-blur-sm
                prose-li:text-muted-foreground
                prose-ul:list-disc prose-ul:pl-6
                prose-ol:list-decimal prose-ol:pl-6
                prose-blockquote:border-l-accent prose-blockquote:bg-accent/5 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:text-muted-foreground"
              >
                <PortableText value={post.body} components={PortableTextComponents} />
              </div>
            </article>
        </div>
      </div>
    </main>
  );
}
