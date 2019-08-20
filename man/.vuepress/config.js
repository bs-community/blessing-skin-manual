module.exports = {
  title: 'Blessing Skin 用户手册',
  shouldPrefetch: () => false,
  evergreen: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Blessing Skin 用户手册',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Blessing Skin Manual',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        sidebar: [
          '/setup',
          '/faq',
          '/report',
          '/mod',
          '/env',
          '/versions',
          '/v3-to-v4',
          '/update-sources',
          '/cdn',
          '/css-js',
          '/i18n',
          '/v3-changelog',
        ]
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        sidebar: [
          '/en/mod',
          '/en/v3-to-v4',
        ]
      },
    }
  },
}
