import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GuYong",
  description: "Personal Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Courses', link: '/courses' }
    ],
    footer: {
      message: 'Email: iguyong at outlook.com',
      copyright: 'Copyright © 2024-present Gu Yong'
    },
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
