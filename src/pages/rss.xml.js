import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "../siteConfig";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection("blog");

  return rss({
    title: `${siteConfig.title}'s Blog`,
    description: siteConfig.description,
    site: context.site,
    trailingSlash: false,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
    })),
  });
}
