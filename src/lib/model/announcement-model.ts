import type { Models } from 'appwrite';

export class AnnouncementModel {
	$id: string;
	title: string;
	description_html?: string;
	description_json?: string;
	image_id: string;
	image_url: string;
	constructor(data: Models.Document) {
		this.$id = data.$id;
		this.title = data.title;
	 
		this.image_id = data.image_id;
		this.image_url = data.image_url;
		this.description_html = data.description_html;
		this.description_json = data.description_json;
	}
}
