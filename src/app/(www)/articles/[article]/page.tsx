import NewBlog from "../new-blog.mdx";
import HelloWorld from "@/app/hello.mdx";

export default function page({ params }: { params: { article: string } }) {
  return (
    <div className="w-full">
      page Artcle
      {decodeURI(params.article.replace(/(\/index)?\.mdx$/, ""))}
      <div className="mdx dark:mdx-invert mx-auto max-w-3xl p-8">
        <NewBlog />
        <HelloWorld />
      </div>
    </div>
  );
}
