// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'ProcessSpy Docs',
          logo: {
              src: './src/assets/logo.png',
          },
          favicon: '/favicon.ico',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/robert-v/ProcessSpy-public' }],
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Introduction', slug: 'guides/introduction' },
                      { label: 'Interface Basics', slug: 'guides/interface-basics' },
                      { label: 'Table Columns', slug: 'guides/table-columns' },
                      { label: 'Bottom Pane', slug: 'guides/bottom-pane' },
                      { label: 'Quicksearch', slug: 'guides/quicksearch' },
                      { label: 'Context Menus', slug: 'guides/context-menus' },
                      { label: 'Settings', slug: 'guides/settings' },
                      { label: 'User Filters', slug: 'guides/user-filters' },
                      { label: 'History Recording', slug: 'guides/history-recording' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
      }),
	],

  adapter: vercel({
      webAnalytics: {
          enabled: true,
      }
  }),
    site: 'https://docs.process-spy.app',
});