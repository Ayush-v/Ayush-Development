import Link from "next/link";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <Link href="/articles" className="underline">
        Back
      </Link>
      {children}
    </div>
  );
}
