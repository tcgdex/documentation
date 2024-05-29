import type { APIRoute } from 'astro'

/**
 * Plausible proxy
 */
export const GET: APIRoute = async () => {
	const res = await fetch('https://plausible.io/js/script.outbound-links.tagged-events.js')
	return new Response(await res.text(), {
		status: 200
	})
}
