import Link from "next/link";
import NewBlog from "../new-blog.mdx";
// import HelloWorld from "../hello.mdx";

export default function page({ params }: { params: { article: string } }) {
  return (
    <div className="relative mx-auto max-w-4xl">
      <Link
        href="/articles"
        className="relative inline-flex rounded-full border-zinc-400 dark:border-zinc-800 sm:absolute sm:-left-24 sm:-top-8 sm:border sm:bg-gray-100 sm:p-1.5 sm:dark:bg-zinc-950/70"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
      <h1 className="text-5xl font-bold underline underline-offset-8">
        {decodeURI(params.article.replace(/(\/index)?\.mdx$/, ""))}
      </h1>
      <div className="mdx dark:mdx-invert mx-auto mt-16 max-w-3xl">
        {/* <HelloWorld /> */}
        <NewBlog />
      </div>
    </div>
  );
}
