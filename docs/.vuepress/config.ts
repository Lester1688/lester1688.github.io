import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Hello VuePress',
      description: 'Just playing around',
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      title: '你好，VuePress',
      description: '只是玩玩而已'
    },
    '/zh-TW/': {
      lang: 'zh-TW',
      title: '你好，VuePress',
      description: '只是玩玩而已'
    },
  },

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',

    navbar: [
      { text: "Github", link: "https://github.com/Lester1688/lester1688.github.io" }
    ],

    sidebar: false,
    // toggleSidebar: 'sss',
    locales: {
      '/': {
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        
      },
      '/zh-CN/': {
        selectLanguageText: '选择语言',
        selectLanguageName: '中文简体',
        contributorsText: '贡献者',
        lastUpdatedText: '最后更新'
      },
      '/zh-TW/': {
        selectLanguageText: '選擇語言',
        selectLanguageName: '中文繁體',
        contributorsText: '貢獻者',
        lastUpdatedText: '最後更新'
      }
    }
  },
})