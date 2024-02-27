import { writable, type Subscriber, type Unsubscriber } from 'svelte/store';
import { appwriteAccount, authRedirect } from '$lib/appwrite-config';
import type { UserModel } from '../lib/model/user-model';

interface AuthState {
	user?: UserModel;
	error?: {
		message: string;
		code?: string;
		timestamp?: Date;
	};
	loading: boolean;
}

interface AuthStore extends AuthState {
	subscribe: (
		this: void,
		run: Subscriber<AuthState>,
		invalidate?: (value?: AuthState) => void
	) => Unsubscriber;
	login: () => void;
}

const appwriteAuthState = (): AuthStore => {
	const initSate = { loading: true } as AuthState;
	const { subscribe, set } = writable(initSate);

	const login = async () => {
		set(initSate);
		await appwriteAccount.createOAuth2Session('google', authRedirect);
		const user = await appwriteAccount.get();
		if (user) {
			const userModel = {
				id: user.$id,
				email: user.email,
				name: user.name,
				phone: user.phone
			} as UserModel;
			set({ user: userModel, loading: false });
		}
	};

	return {
		subscribe,
		login,
		...initSate
	};
};

export const authStore = appwriteAuthState();
