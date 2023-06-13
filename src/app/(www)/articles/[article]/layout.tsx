import Container from "@/components/container";
import Link from "next/link";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl p-8">
      <div className="m-8 max-w-7xl rounded-2xl border border-zinc-400 bg-gray-100 p-8 dark:border-zinc-800 dark:bg-zinc-950/70">
        {/* <Link href="/articles">Back</Link> */}
        {children}
      </div>
    </section>
  );
}
