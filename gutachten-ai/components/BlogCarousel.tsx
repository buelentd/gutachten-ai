"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
}

interface Props {
  posts: Post[];
  title: string;
  subtext: string;
  linkText: string;
}

export function BlogCarousel({ posts, title, subtext, linkText }: Props) {
  const [current, setCurrent] = useState(0);
  const total = posts.length;
  const visible = 3;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  useEffect(() => {
    if (total <= visible) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next, total]);

  const visiblePosts = Array.from({ length: Math.min(visible, total) }, (_, i) =>
    posts[(current + i) % total]
  );

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl font-medium text-on-surface mb-4">{title}</h2>
            <p className="text-on-surface-variant">{subtext}</p>
          </div>
          <Link href="/blog" className="hidden md:block text-primary text-sm font-medium hover:underline">
            {linkText}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visiblePosts.map((post, i) => (
            <Link
              key={`${post.slug}-${i}`}
              href={`/blog/${post.slug}`}
              className="group p-8 rounded-2xl border-[0.5px] border-outline bg-surface hover:border-primary/40 transition-all"
            >
              <span className="text-xs text-primary font-medium tracking-wider uppercase mb-4 block">
                {post.category}
              </span>
              <h3 className="text-lg font-medium text-on-surface mb-3 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
        {total > visible && (
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Blog-Beiträge Navigation">
            {posts.map((post, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Beitrag ${i + 1}: ${post.title}`}
                onClick={() => setCurrent(i)}
                className="relative flex items-center justify-center w-11 h-11"
              >
                <span
                  className={`block rounded-full transition-all ${
                    i === current ? "w-6 h-2 bg-button-bg" : "w-2 h-2 bg-outline"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
