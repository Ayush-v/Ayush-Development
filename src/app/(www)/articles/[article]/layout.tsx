import Container from "@/components/container";
import Link from "next/link";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto p-8">
      <div className="m-8 max-w-7xl rounded-2xl bg-gray-100 p-8 dark:bg-zinc-950/70">
        {/* <Link href="/articles">Back</Link> */}
        {children}
      </div>
    </section>
  );
}
