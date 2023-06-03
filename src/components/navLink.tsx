"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLink({ href, name }: { href: string; name: string }) {
  const pathname = usePathname();

  const isActive = pathname.startsWith(href);
  return (
    <>
      <Link className={isActive ? "text-blue-500" : "text-black"} href={href}>
        {name}
      </Link>
    </>
  );
}
