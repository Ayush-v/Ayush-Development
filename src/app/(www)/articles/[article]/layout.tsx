import Container from "@/components/container";
import Link from "next/link";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <nav></nav> */}
      <Container className="rounded-2xl bg-zinc-950/70">
        <Link href="/articles">Back</Link>
        {children}
      </Container>
    </section>
  );
}
