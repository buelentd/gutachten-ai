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
    <section className="py-24 bg-[#0F1218]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl font-medium text-[#F0EDE6] mb-4">{title}</h2>
            <p className="text-[#8A9BB0]">{subtext}</p>
          </div>
          <Link href="/blog" className="hidden md:block text-[#E8631A] text-sm font-medium hover:underline">
            {linkText}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visiblePosts.map((post, i) => (
            <Link
              key={`${post.slug}-${i}`}
              href={`/blog/${post.slug}`}
              className="group p-8 rounded-2xl border-[0.5px] border-[#2A3344] bg-[#151B27] hover:border-[#E8631A]/40 transition-all"
            >
              <span className="text-xs text-[#E8631A] font-medium tracking-wider uppercase mb-4 block">
                {post.category}
              </span>
              <h3 className="text-lg font-medium text-[#F0EDE6] mb-3 group-hover:text-[#E8631A] transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-[#8A9BB0] leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
        {total > visible && (
          <div className="flex justify-center gap-2 mt-8">
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-[#E8631A] w-6" : "bg-[#2A3344]"}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
