import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 p-4 text-xs">
          •••
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-popover text-popover-foreground animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-800 bg-neutral-950 p-1 shadow-md">
        <DropdownMenu.Item className="focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <Link href="links">Link tree</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          Contact
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
