export type LinkListType = {
  icon: JSX.Element;
  title: string;
  description: string;
  href: string;
};

export default function LinkList(link: LinkListType) {
  return (
    <div className="gradient-bg-to-b flex items-center rounded-lg px-4 py-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-md sm:h-20 sm:w-20">
        {link.icon}
      </div>
      <div className="ml-4 space-y-1 sm:ml-6">
        <h2 className="font-semibold capitalize">{link.title}</h2>
        <p className="opacity-60">{link.description}</p>
      </div>
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Link to ${link.title} page`}
        className="gradient-bg-to-b ml-auto  rounded-md p-3 sm:p-4"
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}
