export class CarouselSetting {
	duration: number;
	image_width: number;
	image_height: number;
	text_width: number;
	text_height: number;
	constructor(data: any) {
		this.duration = data.duration;
		this.image_width = data.image_width;
		this.image_height = data.image_height;
		this.text_width = data.text_width;
		this.text_height = data.text_height;
	}
}
