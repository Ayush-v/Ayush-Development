import Dropdown from "./dropdown";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Icon from "./icons";
import NavLink from "./navLink";

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
    <nav className={`${className} gradient-bg-to-b rounded-full p-2`}>
      <div className="flex items-center space-x-2">
        <ul className="flex space-x-1.5">
          {navList.map((link) => (
            <li key={link.name}>
              <NavLink href={link.href}>{link.name}</NavLink>
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
                <NavLink href={link.href} className="block text-sm font-medium">
                  {link.name}
                </NavLink>
              </DropdownMenu.Item>
            ))}
            <DropdownMenu.Item className="mt-4 pr-4">
              <NavLink href="/links" className="block text-sm font-medium">
                Links
              </NavLink>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="mt-4 pr-4">
              <NavLink href="/contact" className="block text-sm font-medium">
                Contact
              </NavLink>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
  );
}
