"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

let na = [
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
    // <nav>
    //   <ul className="flex items-center space-x-4 rounded-md bg-white/5 px-6 py-3">
    //     <li>
    //       {/* <Link href="/">Home</Link> */}
    //       <NavLink href="/" name="Home" />
    //     </li>
    //     <li>
    //       <Link href="/">About</Link>
    //     </li>
    //     <li>
    //       <Link href="/">Projects</Link>
    //     </li>
    //     <li>
    //       <Link href="/articles">Articles</Link>
    //     </li>
    //     <li>
    //       <Link href="/links">Links</Link>
    //     </li>
    //   </ul>
    // </nav>
    // <nav>
    //   <ul className="flex space-x-1">
    //     <li>
    //       <Link href="/" className={isActive ? "text-blue-400" : "text-white"}>
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="/articles"
    //         className={isActive ? "text-blue-400" : "text-white"}
    //       >
    //         Articles
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
    <nav>
      <Navigation navLinks={na} />
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
                  : "transition-colors duration-300 hover:bg-white/20 hover:opacity-50"
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
