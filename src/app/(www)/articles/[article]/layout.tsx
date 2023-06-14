import Container from "@/components/container";
import Link from "next/link";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-7xl flex-1">
      <div className="m-4 max-w-7xl rounded-2xl border border-zinc-400 bg-gray-100 p-4 dark:border-zinc-800 dark:bg-zinc-950/70 md:m-8 md:p-8">
        {/* <Link href="/articles">Back</Link> */}
        {children}
      </div>
    </div>
  );
}
