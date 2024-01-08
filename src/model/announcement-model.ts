import type { Models } from 'appwrite';

export class AnnouncementModel {
	$id: string;
	title: string;
	description: string;
	image_url: string;
	constructor(data: Models.Document) {
		this.$id = data.$id;
		this.title = data.title;
		this.description = data.description;
		this.image_url = data.image_url;
	}
}


