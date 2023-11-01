import Link from "next/link";
import NewBlog from "../new-blog.mdx";
// import HelloWorld from "../hello.mdx";

export default function page({ params }: { params: { article: string } }) {
  return (
    <div className="rounded-md border-zinc-400 dark:border-zinc-800 border bg-gray-100 dark:bg-zinc-950/70 px-6 py-10">
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
