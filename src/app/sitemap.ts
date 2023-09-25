import { type MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/about",
    "/projects",
    "/",
    "/articles",
    "/links",
    "/contact",
  ].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
