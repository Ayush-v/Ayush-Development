import Link from "next/link";
import Icon from "./icons";

export default function Header() {
  return (
    <div className="relative mx-4">
      <header className="absolute left-1/2 top-8 z-10 w-full max-w-screen-xl -translate-x-1/2 px-4">
        <div className="flex items-center justify-between overflow-hidden">
          <span className="text-4xl">&lt;A&gt;</span>
          <ul className="flex items-center space-x-4 rounded-md bg-white/5 px-6 py-3">
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
          <div className="flex gap-4">
            <Icon name="Github" size="20" />
            <Icon name="Moon" size="20" />
          </div>
        </div>
      </header>
    </div>
  );
}
