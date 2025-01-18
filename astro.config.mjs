import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeSlug from "rehype-slug";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";


// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [react(), tailwind(), mdx({
    syntaxHighlight: false,
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, {
      theme: "everforest-dark",
    }]]
  }), sitemap(), robotsTxt(), icon()],
  site: "https://jbaum53.github.io",
  base: "/jbaum53.github.io",
});