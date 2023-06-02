import Link from "next/link";

export default function Header() {
  return (
    <div className="relative mx-4 px-4">
      <header className="absolute left-1/2 top-8 z-10 w-full max-w-screen-xl -translate-x-1/2 rounded-md bg-white/5 p-2">
        <div className="flex items-center justify-between">
          <span className="text-4xl">&lt;A&gt;</span>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
            <li>
              <Link href="/articles">Articles</Link>
            </li>
            <li>
              <Link href="/links">Links</Link>
            </li>
          </ul>
          <button>social</button>
        </div>
      </header>
    </div>
  );
}
