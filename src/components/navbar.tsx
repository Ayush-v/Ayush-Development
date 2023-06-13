"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Dropdown from "./dropdown";
import { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Icon from "./icons";
import { cn } from "@/utils/tailwind-merge";

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
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Articles",
    href: "/articles",
  },
];

export default function NavBar() {
  return (
    <div className="flex flex-1 justify-end md:justify-center">
      <Navigation className="hidden md:block" />
      <MobileNavigation className="block md:hidden" />
    </div>
  );
}

function Navigation({ className }: { className: string }) {
  return (
    <nav
      className={`${className} rounded-full border border-zinc-400 bg-gradient-to-b from-black/10 to-white/10 p-2 shadow-lg shadow-zinc-800/5 backdrop-blur dark:border-zinc-800 dark:from-black`}
    >
      <div className="flex items-center space-x-2">
        <ul className="flex space-x-1.5">
          {navList.map((link) => (
            <li key={link.name}>
              <NavItem href={link.href}>{link.name}</NavItem>
            </li>
          ))}
        </ul>
        <Dropdown />
      </div>
    </nav>
  );
}

function MobileNavigation({ className }: { className: string }) {
  return (
    <nav className={className}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
            Menu
            <Icon
              name="ChevronDown"
              className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
            />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="z-50 w-52 max-w-xs origin-top rounded-xl bg-white p-4 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
            sideOffset={5}
          >
            {/* <div className="flex flex-row-reverse items-center justify-between">
              <button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                <Icon name="Close" />
              </button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div> */}
            {navList.map((link) => (
              <DropdownMenu.Item key={link.name} className="mt-4 pr-4">
                <NavItem href={link.href} className="block text-sm font-medium">
                  {link.name}
                </NavItem>
              </DropdownMenu.Item>
            ))}
            <DropdownMenu.Item className="mt-4 pr-4">
              <NavItem href="/links" className="block text-sm font-medium">
                Links
              </NavItem>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="mt-4 pr-4">
              <NavItem href="/contact" className="block text-sm font-medium">
                Contact
              </NavItem>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
  );
}

type NavItemProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

function NavItem({ href, className, children }: NavItemProps) {
  const path = usePathname();
  const isActive = href === "/" ? path === href : path.startsWith(href);

  return (
    <>
      <Link
        // className={`${
        //   isActive ? "" : "transition-colors duration-300 hover:bg-white/10"
        // } relative rounded-full px-3 py-1.5 text-sm font-medium outline-2 outline-sky-400 focus-visible:outline`}
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
        <span className="relative z-10 dark:mix-blend-exclusion">
          {children}
        </span>
      </Link>
    </>
  );
}
