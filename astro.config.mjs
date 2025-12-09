// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ProcessSpy Docs',
            logo: {
                src: './src/assets/logo.png',
            },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/robert-v/ProcessSpy-public' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
                        { label: 'Introduction', slug: 'guides/introduction' },
						{ label: 'Interface Basics', slug: 'guides/interface_basics' },
                        { label: 'Table Columns', slug: 'guides/table_columns' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
