import {
	type Article,
	type Person,
	type WebSite,
	type WithContext,
} from "schema-dts";
import avatar from "../assets/avatar.png";
import type { CollectionEntry } from "astro:content";

export const thoughtsWebsite: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: `${import.meta.env.SITE}/thoughts/`,
	name: "Jeremy Baum • Thoughts",
	description: "Thoughts, writings from Jeremy Baum",
	inLanguage: "en_US",
};

export const mainWebsite: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: import.meta.env.SITE,
	name: "Jeremy Baum",
	description: "Jeremy Baum's personal portfolio website",
	inLanguage: "en_US",
};

export const personSchema: WithContext<Person> = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Jeremy Baum",
	url: `${import.meta.env.SITE}`,
	image: `${import.meta.env.SITE}${avatar.src}`,
	sameAs: [
		"https://x.com/JBAUM_23",
		"https://www.linkedin.com/in/jeremy-baum-76874784/",
	],
};

export function getArticleSchema(post: CollectionEntry<"thoughts">) {
	const articleStructuredData: WithContext<Article> = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.data.title,
		url: `${import.meta.env.SITE}/thoughts/${post.slug}/`,
		image: {
			"@type": "ImageObject",
			url: `${import.meta.env.SITE}${post.data.cover.src}/`,
		},
		description: post.data.excerpt,
		datePublished: post.data.date.toString(),
		publisher: {
			"@type": "Person",
			name: "Jeremy Baum",
			url: import.meta.env.SITE,
			image: import.meta.env.SITE + avatar.src,
		},
		author: {
			"@type": "Person",
			name: "Jeremy Baum",
			url: import.meta.env.SITE,
			image: import.meta.env.SITE + avatar.src,
		},
	};
	return articleStructuredData;
}
