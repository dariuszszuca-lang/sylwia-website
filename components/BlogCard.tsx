import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/app/blog/posts";

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-background-soft/70 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-fuchsia-300 hover:shadow-[var(--shadow-xl)]"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
          className="object-cover object-[center_top] transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="kicker">{post.dateLabel}</span>
        <h3 className="display-tight mt-3 text-2xl font-medium leading-tight text-foreground">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{post.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-fuchsia-700">
          Czytaj{" "}
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export function BlogCardSoon({ label }: { label: string }) {
  return (
    <div className="flex min-h-[18rem] flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-border bg-background-soft/40 p-8 text-center">
      <span className="font-display text-3xl italic text-champagne-300" aria-hidden>
        ✦
      </span>
      <p className="kicker mt-4">Wkrótce</p>
      <p className="mt-2 font-display text-lg italic leading-snug text-muted">{label}</p>
    </div>
  );
}
