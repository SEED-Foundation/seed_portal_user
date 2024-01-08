import { redirect, type Handle,} from '@sveltejs/kit';
const routeRegex = new RegExp(/^\/[^.]*([?#].*)?$/);

export const handle: Handle = async ({ event, resolve }) => {
	const { url, request } = event;
	const { pathname, origin } = url;
	

	if (routeRegex.test(pathname)) {
		// check if the default url
		// if so, redirect to the default url
		if (pathname === '/') {
			return redirect(303, '/auth');
		} else {
			// if not, check if the request is a data request
			// if so, redirect to the default url
			return resolve(event);
		}
	}

	return resolve(event);
};
