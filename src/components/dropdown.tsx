import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex h-7 w-7 items-center justify-center rounded-full outline outline-1 outline-white/20">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
              fill="white"
            />
          </svg>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="bg-popover text-popover-foreground animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] divide-y divide-zinc-800 overflow-hidden rounded-md border border-zinc-800 bg-gradient-to-b from-white/5 via-black to-white/5 p-1 shadow-md backdrop-blur"
        sideOffset={5}
      >
        <DropdownMenu.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-white/10 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <Link href="/links" className="flex items-center space-x-2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.51206 3.00519C9.18842 2.54573 10.0436 2.53673 10.6789 2.95398C10.8232 3.04872 10.9773 3.19908 11.3891 3.61097C11.801 4.02286 11.9514 4.17693 12.0461 4.3212C12.4634 4.95654 12.4544 5.8117 11.9949 6.48806C11.8901 6.64242 11.7278 6.80789 11.3008 7.23489L10.682 7.85361C10.4868 8.04887 10.4868 8.36546 10.682 8.56072C10.8773 8.75598 11.1939 8.75598 11.3891 8.56072L12.0079 7.942L12.0508 7.89908C12.4204 7.52955 12.657 7.29308 12.8221 7.04999C13.4973 6.05601 13.5322 4.76231 12.882 3.77226C12.7234 3.53081 12.4923 3.29979 12.1409 2.9485L12.0963 2.90387L12.0516 2.85921C11.7003 2.50778 11.4693 2.27668 11.2279 2.11811C10.2378 1.46792 8.94411 1.50278 7.95013 2.17801C7.70703 2.34315 7.47056 2.57969 7.10102 2.94934L7.05812 2.99225L6.4394 3.61097C6.24414 3.80623 6.24414 4.12282 6.4394 4.31808C6.63466 4.51334 6.95124 4.51334 7.14651 4.31808L7.76522 3.69936C8.19223 3.27236 8.35769 3.11006 8.51206 3.00519ZM4.31808 7.14651C4.51334 6.95124 4.51334 6.63466 4.31808 6.4394C4.12282 6.24414 3.80623 6.24414 3.61097 6.4394L2.99225 7.05812L2.94934 7.10102C2.57969 7.47056 2.34315 7.70703 2.17801 7.95013C1.50278 8.94411 1.46792 10.2378 2.11811 11.2279C2.27668 11.4693 2.50779 11.7003 2.85922 12.0516L2.90386 12.0963L2.94849 12.1409C3.29979 12.4923 3.5308 12.7234 3.77226 12.882C4.76231 13.5322 6.05601 13.4973 7.04999 12.8221C7.29308 12.657 7.52955 12.4204 7.89908 12.0508L7.89909 12.0508L7.942 12.0079L8.56072 11.3891C8.75598 11.1939 8.75598 10.8773 8.56072 10.682C8.36546 10.4868 8.04887 10.4868 7.85361 10.682L7.23489 11.3008C6.80789 11.7278 6.64242 11.8901 6.48806 11.9949C5.8117 12.4544 4.95654 12.4634 4.3212 12.0461C4.17693 11.9514 4.02286 11.801 3.61097 11.3891C3.19908 10.9773 3.04872 10.8232 2.95397 10.6789C2.53673 10.0436 2.54573 9.18842 3.00519 8.51206C3.11006 8.35769 3.27236 8.19223 3.69936 7.76522L4.31808 7.14651ZM9.62184 6.08536C9.81711 5.8901 9.81711 5.57352 9.62184 5.37826C9.42658 5.183 9.11 5.183 8.91474 5.37826L5.3792 8.91379C5.18394 9.10905 5.18394 9.42564 5.3792 9.6209C5.57446 9.81616 5.89105 9.81616 6.08631 9.6209L9.62184 6.08536Z"
                fill="white"
              />
            </svg>
            <span className="text-md font-medium opacity-95">Link tree</span>
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-white/10 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <Link href="/contact" className="flex items-center space-x-2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.85357 3.85367L7.65355 3.05365C8.2981 2.40913 9.42858 1.96184 10.552 1.80137C11.1056 1.72229 11.6291 1.71737 12.0564 1.78136C12.4987 1.8476 12.7698 1.97708 12.8965 2.1037C13.0231 2.2303 13.1526 2.50137 13.2188 2.94369C13.2828 3.37098 13.2779 3.89451 13.1988 4.44813C13.0383 5.57151 12.591 6.702 11.9464 7.34657L7.49999 11.793L6.35354 10.6466C6.15827 10.4513 5.84169 10.4513 5.64643 10.6466C5.45117 10.8418 5.45117 11.1584 5.64643 11.3537L7.14644 12.8537C7.34171 13.0489 7.65829 13.0489 7.85355 12.8537L8.40073 12.3065L9.57124 14.2574C9.65046 14.3894 9.78608 14.4776 9.9389 14.4964C10.0917 14.5152 10.2447 14.4625 10.3535 14.3537L12.3535 12.3537C12.4648 12.2424 12.5172 12.0852 12.495 11.9294L12.0303 8.67691L12.6536 8.05367C13.509 7.1982 14.0117 5.82867 14.1887 4.58955C14.2784 3.96193 14.2891 3.3386 14.2078 2.79558C14.1287 2.2676 13.9519 1.74494 13.6035 1.39657C13.2552 1.04821 12.7325 0.871454 12.2045 0.792386C11.6615 0.711067 11.0382 0.721767 10.4105 0.811422C9.17143 0.988428 7.80189 1.49112 6.94644 2.34654L6.32322 2.9698L3.07071 2.50516C2.91492 2.4829 2.75773 2.5353 2.64645 2.64658L0.646451 4.64658C0.537579 4.75545 0.484938 4.90841 0.50375 5.06122C0.522563 5.21404 0.61073 5.34966 0.742757 5.42888L2.69364 6.5994L2.14646 7.14657C2.0527 7.24034 2.00002 7.36752 2.00002 7.50013C2.00002 7.63274 2.0527 7.75991 2.14646 7.85368L3.64647 9.35369C3.84173 9.54895 4.15831 9.54895 4.35357 9.35369C4.54884 9.15842 4.54884 8.84184 4.35357 8.64658L3.20712 7.50013L3.85357 6.85368L6.85357 3.85367ZM10.0993 13.1937L9.12959 11.5776L11.1464 9.56079L11.4697 11.8233L10.0993 13.1937ZM3.42251 5.87053L5.43935 3.85368L3.17678 3.53046L1.80638 4.90086L3.42251 5.87053ZM2.35356 10.3537C2.54882 10.1584 2.54882 9.84182 2.35356 9.64656C2.1583 9.4513 1.84171 9.4513 1.64645 9.64656L0.646451 10.6466C0.451188 10.8418 0.451188 11.1584 0.646451 11.3537C0.841713 11.5489 1.1583 11.5489 1.35356 11.3537L2.35356 10.3537ZM3.85358 11.8537C4.04884 11.6584 4.04885 11.3419 3.85359 11.1466C3.65833 10.9513 3.34175 10.9513 3.14648 11.1466L1.14645 13.1466C0.95119 13.3418 0.951187 13.6584 1.14645 13.8537C1.34171 14.0489 1.65829 14.0489 1.85355 13.8537L3.85358 11.8537ZM5.35356 13.3537C5.54882 13.1584 5.54882 12.8418 5.35356 12.6466C5.1583 12.4513 4.84171 12.4513 4.64645 12.6466L3.64645 13.6466C3.45119 13.8418 3.45119 14.1584 3.64645 14.3537C3.84171 14.5489 4.1583 14.5489 4.35356 14.3537L5.35356 13.3537ZM9.49997 6.74893C10.1897 6.74893 10.7488 6.18982 10.7488 5.50012C10.7488 4.81042 10.1897 4.2513 9.49997 4.2513C8.81026 4.2513 8.25115 4.81042 8.25115 5.50012C8.25115 6.18982 8.81026 6.74893 9.49997 6.74893Z"
                fill="white"
              />
            </svg>
            <span className="text-md font-medium opacity-95">Contact</span>
          </Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
