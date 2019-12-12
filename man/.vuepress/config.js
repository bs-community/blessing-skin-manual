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
    repo: 'bs-community/blessing-skin-manual',
    docsBranch: 'master',
    docsDir: 'man',
    editLinks: true,
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        docsDir: 'man',
        editLinkText: '帮助我们完善这个页面',
        lastUpdated: '最后更新 ',
        sidebar: [
          '/setup',
          '/faq',
          '/report',
          '/mod',
          '/env',
          '/build',
          '/versions',
          '/v3-to-v4',
          '/ui-text',
          '/update-sources',
          '/cdn',
          '/cli',
          '/css-js',
          '/i18n',
          '/bench',
          '/v3-changelog',
        ]
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        docsDir: 'man/en',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: [
          '/en/mod',
          '/en/v3-to-v4',
        ]
      },
    }
  },
}
