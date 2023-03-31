import {redirect} from "@sveltejs/kit";

export const actions = {
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData())

		console.log(body);

		try {
			await locals.pb.collection('users').authWithPassword(body.email, body.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				}
			}
		
		} catch (error) {
			console.log('Error: ', error)
			throw error(500, 'Something went wrong')
		}

		throw redirect(303, '/')
	}
}
