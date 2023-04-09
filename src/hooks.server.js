import PocketBase from 'pocketbase'
import dotenv from 'dotenv'
import { serializeNonPOJOs } from './lib/utils'

export const handle = async ({ event, resolve }) => {

	dotenv.config()
	let { URL } = process.env

	event.locals.pb = new PocketBase(URL);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} else {
		event.locals.user = undefined;
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))

	return response;
}
