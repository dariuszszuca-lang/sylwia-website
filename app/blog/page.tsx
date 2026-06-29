import { SubpageLayout } from "@/components/SubpageLayout";
import { BlogCard, BlogCardSoon } from "@/components/BlogCard";
import { posts } from "./posts";

export const metadata = {
  title: "Blog · Sylwia Wróblewska",
  description:
    "Szczery głos z rynku nieruchomości. O prowizjach, etyce zawodu, współpracy agentów i o tym, co naprawdę dzieje się w branży.",
};

export default function BlogPage() {
  return (
    <SubpageLayout
      kicker="Blog"
      title={
        <>
          Szczery głos <span className="italic text-fuchsia-700">z rynku.</span>
        </>
      }
      intro="O prowizjach, etyce zawodu, współpracy agentów i o tym, co naprawdę dzieje się w nieruchomościach. Bez owijania w bawełnę, z perspektywy kogoś, kto robi to od 17 lat."
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
          <BlogCardSoon label="Następny artykuł już w przygotowaniu" />
          <BlogCardSoon label="Kolejny temat z rynku off-market" />
        </div>
      </div>
    </SubpageLayout>
  );
}
