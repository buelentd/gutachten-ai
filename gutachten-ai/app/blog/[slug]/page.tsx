import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://gutachten-ai.de/blog/${params.slug}` },
    openGraph: { url: `https://gutachten-ai.de/blog/${params.slug}` },
  };
}

async function getPost(slug: string) {
  try {
    return await client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0]{ title, slug, category, publishedAt, excerpt, body }`,
      { slug }
    );
  } catch { return null; }
}

export async function generateStaticParams() {
  try {
    const posts = await client.fetch(groq`*[_type == "post"]{ "slug": slug.current }`);
    return posts.map((p: { slug: string }) => ({ slug: p.slug }));
  } catch { return []; }
}

const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-on-surface-variant leading-relaxed mb-6">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-medium text-on-surface mt-8 mb-3">{children}</h3>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-medium text-on-surface">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
  },
};

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" })
    : "";

  return (
    <main className="pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            {post.category && (
              <span className="text-[#E8631A] text-xs font-medium tracking-widest uppercase">{post.category}</span>
            )}
            {date && (
              <>
                <span className="text-on-surface-variant text-xs">•</span>
                <time className="text-on-surface-variant text-xs">{date}</time>
              </>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight text-on-surface mb-6">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-on-surface-variant leading-relaxed">{post.excerpt}</p>
          )}
        </div>

        {post.body && (
          <div className="space-y-2">
            <PortableText value={post.body} components={ptComponents} />
          </div>
        )}

        <div className="mt-16 p-8 rounded-xl border-[0.5px] border-[#E8631A]/40 bg-[#E8631A]/5">
          <h3 className="text-xl font-medium text-on-surface mb-3">Bereit für den nächsten Schritt?</h3>
          <p className="text-on-surface-variant mb-6">Testen Sie gutachten-ai.de kostenlos und unverbindlich.</p>
          <Link href="/kontakt" className="inline-block bg-[#E8631A] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all">
            Kostenlos anfragen
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t-[0.5px] border-technical-line">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#E8631A] hover:gap-4 transition-all">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Zurück zum Blog</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
