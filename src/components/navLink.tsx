import { cn } from "@/utils/tailwind-merge";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export default function NavLink({ href, children, className }: NavLinkProps) {
  const path = usePathname();
  const isActive = href === "/" ? path === href : path.startsWith(href);

  return (
    <Link
      className={cn(
        !isActive && "transition-colors duration-300 hover:bg-white/10",
        "relative rounded-full px-3 py-1.5 text-sm font-medium outline-2 focus-visible:outline",
        className
      )}
      href={href}
    >
      {isActive ? (
        <motion.div
          layoutId="active-pill"
          style={{
            borderRadius: 9999,
          }}
          className="absolute inset-0 bg-accent-200"
        />
      ) : null}
      <span className="relative z-10 dark:mix-blend-exclusion">{children}</span>
    </Link>
  );
}
