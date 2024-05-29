import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: 'TCGdex API Docs',
		logo: {
			dark: './src/assets/logo-dark.svg',
			light: './src/assets/logo-light.svg',
			replacesTitle: true,
			alt: 'TCGdex logo'
		},
		customCss: [
			"./src/style/index.css"
		],
		favicon: '/favicon.svg',
		head: [{
			tag: 'script',
			attrs: {
				defer: '',
				'data-domain': 'tcgdex.dev',
				'src': '/js/script.js'
			}
		}, {
			tag: 'link',
			attrs: {
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png'
			}
		}, {
			tag: 'link',
			attrs: {
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			}
		}, {
			tag: 'link',
			attrs: {
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			}
		}, {
			tag: 'link',
			attrs: {
				href: '/site.webmanifest'
			}
		}],
		social: {
			discord: 'https://discord.gg/NehYTAhsZE',
			github: 'https://github.com/tcgdex',
		},
		editLink: {
			baseUrl: 'https://github.com/tcgdex/documentation/edit/master/'
		},
		defaultLocale: 'root',
		locales: {
			root: {
				label: 'English',
				lang: 'en'
			},
			fr: {
				label: 'Français',
				lang: 'fr'
			},
			de: {
				label: 'Deutsch',
				lang: 'de'
			},
			it: {
				label: 'Italiano',
				lang: 'it'
			},
			es: {
				label: 'Español',
				lang: 'es'
			},
			'pt-br': {
				label: 'Português (brasileiro)',
				lang: 'pt-br'
			},
			// 'pt': {
			// 	label: 'Português',
			// 	lang: 'pt'
			// },
			// 'nl': {
			// 	label: 'Nederlands',
			// 	lang: 'nl'
			// },
			// 'pl': {
			// 	label: 'Polski',
			// 	lang: 'pl'
			// },
			// 'ru': {
			// 	label: 'Русский',
			// 	lang: 'ru'
			// },
			// 'ja': {
			// 	label: '日本語',
			// 	lang: 'ja'
			// },
			// 'ko': {
			// 	label: '한국어',
			// 	lang: 'ko'
			// },
			// 'zh-tw': {
			// 	label: '中國傳統的',
			// 	lang: 'zh-tw'
			// },
			// 'id': {
			// 	label: 'Bahasa Indonesia',
			// 	lang: 'id'
			// },
			// 'th': {
			// 	label: 'แบบไทย',
			// 	lang: 'th'
			// },
			// 'zh-cn': {
			// 	label: '简体中文',
			// 	lang: 'zh-cn'
			// }
		},
		titleDelimiter: '-',
		sidebar: [{
			label: 'Assets Management',
			link: '/assets'
		}, {
			label: 'JSON REST API',
			autogenerate: {
				directory: 'rest'
			},
		}, {
			label: 'SDKs',
			autogenerate: {
				directory: 'sdks'
			}
		}, {
			label: 'Reference',
			autogenerate: {
				directory: 'reference'
			}
		}],
		lastUpdated: true
	}), tailwind()],

	// some settings to the build output
	build: {
		// the asset path
		assets: 'assets',

		// inline the stylesheet if it is small enough
		inlineStylesheets: 'auto'
	},

	// Compress the HTML output
	compressHTML: true,

	// prefetch links
	prefetch: {
		defaultStrategy: 'hover'
	},

	// the Output server
	server: {
		host: true,
		port: 3000
	},

	// Remove the trailing slash by default
	trailingSlash: 'never',

	// Dev Server
	vite: {
		server: {
			watch: {
				// Ignore some paths
				ignored: [],
				// support polling and WSL
				usePolling: !!(process.env.USE_POLLING ?? process.env.WSL_DISTRO_NAME)
			}
		}
	},

	site: 'https://tcgdex.dev'
});
