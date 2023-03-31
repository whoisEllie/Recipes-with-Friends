import {redirect} from "@sveltejs/kit";

export const actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData())

		console.log(body);

		try {
			await locals.pb.collection('users').create({...body})
			//await locals.pb.collection('users').requestVerification(body.email)
		} catch (error) {
			console.log('Error:', error)
			throw error(500, 'Something went wrong')
		}
			
		throw redirect(303, '/login')
	}
} 
