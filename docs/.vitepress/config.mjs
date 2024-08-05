import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-docs',
  title: "WHOAMI的文档站点",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    outline: {
      label: '目录',
      level: [2, 6]
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      copyright: 'Copyright © 2024 WHOAMI'
    },

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
