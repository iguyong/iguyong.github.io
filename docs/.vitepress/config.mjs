import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GuYong's Site",
  description: "Personal Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Courses', link: '/courses' }
    ],

    // sidebar: [
    //   {
    //     text: 'Courses',
    //     items: [
    //       { text: 'OS', link: '/markdown-examples' },
    //       { text: 'Deep Learning', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iguyong/iguyong.github.io' }
    ]
  }
})
