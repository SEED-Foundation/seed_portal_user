import {
	appwriteClient,
	appwriteCollectionSettings,
	appwriteDatabaseID
} from '$lib/appwrite-config';
import { writable, type Subscriber, type Unsubscriber, get } from 'svelte/store';
import type { SettingModel } from '../lib/model/setting-model';

interface UpdsateState {
	loading: boolean;
	version: string;
}

interface UpdateStore extends UpdsateState {
	subscribe: (
		this: void,
		run: Subscriber<UpdsateState>,
		invalidate?: (value?: UpdsateState) => void
	) => Unsubscriber;
	listentToUpdate: () => void;
}

const appwriteUpdateState = (): UpdateStore => {
	const initSate = { loading: false, version: '1.0.0' } as UpdsateState;
	const { subscribe, set } = writable(initSate);

	const listentToUpdate = async () => {
		appwriteClient.subscribe(
			`databases.${appwriteDatabaseID}.collections.${appwriteCollectionSettings}.documents.6562f4ee7323099bcd4e`,
			(payload: any) => {
				const setting = payload.payload as SettingModel;
				set({ version: setting.version, loading: false });
			}
		);
	};

	return {
		subscribe,
		loading: false,
		version: '1.0.0',
		listentToUpdate
	};
};

export const updateState = appwriteUpdateState();
