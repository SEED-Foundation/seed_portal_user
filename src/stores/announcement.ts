import { writable, type Subscriber, type Unsubscriber, get } from 'svelte/store';
import {
	appwriteBucketIdAnnouncement,
	appwriteClient,
	appwriteCollectionAnnouncements,
	appwriteCollectionSettings,
	appwriteDatabase,
	appwriteDatabaseID,
	appwriteStorage
} from '$lib/appwrite-config';
import { Query, type Models } from 'appwrite';
import { AnnouncementModel } from '../lib/model/announcement-model';

interface AnnouncementState {
	announcements?: AnnouncementModel[];

	duration?: number;
	error?: {
		message: string;
		code?: string;
		timestamp?: Date;
	};
	loading: boolean;
}

interface AnnouncementStore extends AnnouncementState {
	subscribe: (
		this: void,
		run: Subscriber<AnnouncementState>,
		invalidate?: (value?: AnnouncementState) => void
	) => Unsubscriber;
	get: () => void;
}

const createState = (): AnnouncementStore => {
	const initState: AnnouncementState = { loading: false };
	const { subscribe, set } = writable<AnnouncementState>(initState);

	const getAnnouncements = async () => {
		const prevAnnouncements = get(announcementState);
		set({ ...prevAnnouncements, loading: true });
		let announcementsDoc;
		try {
			announcementsDoc = await appwriteDatabase.listDocuments(
				appwriteDatabaseID,
				appwriteCollectionAnnouncements,
				[Query.equal('active', true), Query.equal('approve', true), Query.orderDesc('$createdAt')]
			);
		} catch (e: any) {
			set({
				...prevAnnouncements,
				loading: false,
				error: { message: e + ' appwriteCollectionAnnouncements' }
			});
		}

		// 	try {
		// 		durationModel = await appwriteDatabase.getDocument(
		// 			appwriteDatabaseID,
		// 			appwriteCollectionSettings,
		// 			'6562f4ee7323099bcd4e'
		// 		);
		//   console.log(durationModel);
		//   console.log('########@@@@@@@@@@@@')
		// 	} catch (e: any) {
		// 		console.log(e);
		// 		set({ ...prevAnnouncements, loading: false, error: { message: e  + ' appwriteCollectionSettings'} });
		// 	}

		const duration = 5;
		const announcements = announcementsDoc!.documents.map((doc: Models.Document) => {
			if (doc.image_id) {
				const image = appwriteStorage.getFilePreview(appwriteBucketIdAnnouncement, doc.image_id);
				console.log(image);
				doc.image_url = image.href;
			}
			return new AnnouncementModel(doc);
		});
		const announcementsData = { announcements, duration, loading: false };
		set(announcementsData);
	};

	return {
		subscribe,
		loading: true,
		get: async () => {
			// get all announcements

			appwriteClient.subscribe(
				`databases.${appwriteDatabaseID}.collections.${appwriteCollectionAnnouncements}.documents`,
				(payload) => {
					getAnnouncements();
				}
			);
			appwriteClient.subscribe(
				`databases.${appwriteDatabaseID}.collections.${appwriteCollectionSettings}.documents.6562f4ee7323099bcd4e`,
				(payload) => {
					getAnnouncements();
				}
			);
			getAnnouncements();
		}
	};
};

const announcementState = createState();
export { announcementState };
