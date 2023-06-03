"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

let navList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Articles",
    href: "/articles",
  },
];

export default function NavBar() {
  return (
    <nav className="rounded-lg bg-white/[0.08] p-3">
      <Navigation navLinks={navList} />
    </nav>
  );
}

function Navigation({ navLinks }: any) {
  const pathname = usePathname();

  return (
    <ul className="flex space-x-1">
      {navLinks.map((link: any) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.name}>
            <Link
              className={`${
                isActive
                  ? ""
                  : "transition-opacity duration-300 hover:opacity-50"
              } relative rounded-full px-3 py-1.5 text-sm font-medium outline-2 outline-sky-400 focus-visible:outline`}
              href={link.href}
            >
              {isActive ? (
                <motion.div
                  layoutId="active-pill"
                  style={{
                    borderRadius: 9999,
                  }}
                  className="absolute inset-0 bg-[#EAFF96]"
                />
              ) : null}
              <span className="relative z-10 mix-blend-exclusion">
                {link.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
