import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			width: {
				'4/6': '66.666667%',
				'2/6': '33.333333%',
				'120': '30rem'
			},
			minWidth: {
				'4/6': '66.666667%',
				'2/6': '33.333333%'
			},
			maxWidth: {
				'4/6': '66.666667%',
				'2/6': '33.333333%'
			},
			minHeight: {
				'4/6': '66.666667%',
				'2/6': '33.333333%'
			},
			height: {
				'4/6': '66.666667%',
				'5/6': '83.333333vh',
				'2/6': '33.333333%'
			}
		},
		colors: {
			primary: "#61b164",
			black: "#000000",
			transparent: "transparent",
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true
					}
				]
			}
		})
	]
} satisfies Config;
