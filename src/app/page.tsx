import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-square">
      <div>
        <h1>Hello World</h1>
        <Link href="/links">Links</Link>
      </div>
    </main>
  );
}
