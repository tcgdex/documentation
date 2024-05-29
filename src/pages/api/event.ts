import type { APIRoute } from 'astro'

/**
 * Plausible proxy
 */
export const POST: APIRoute = async ({ request, clientAddress }) => {
	const res = await fetch('https://plausible.io/api/event', {
		method: 'POST',
		headers: {
			'User-Agent': request.headers.get('User-Agent') as string,
			'X-Forwarded-For': clientAddress,
			'Content-Type': 'application/json'
		},
		body: await request.text()
	})
	return new Response(await res.text(), {
		status: res.status
	})
}
