import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		content: defineCollection({
			// Specify the type of content in this collection
			type: "page",
			// Load every file inside the `content` directory
			source: "**/*.md",
		}),
	},
});
