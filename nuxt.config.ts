// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "@nuxthub/core"],

	content: {
		build: {
			markdown: {
				toc: {
					depth: 3, // include h3 headings
				},
			},
		},
	},

	hub: {
		// NuxtHub options
	},
});
