import NewBlog from "../new-blog.mdx";
import HelloWorld from "@/app/hello.mdx";

export default function page({ params }: { params: { article: string } }) {
  return (
    <div>
      page Artcle
      {decodeURI(params.article.replace(/(\/index)?\.mdx$/, ""))}
      <div className="mdx mx-auto max-w-3xl p-8 dark:mdx-invert">
        <NewBlog />
        <HelloWorld />
      </div>
    </div>
  );
}
