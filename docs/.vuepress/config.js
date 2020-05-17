module.exports = {
  base: '/blog/',
  title: '曲董的博客',
  description: '谨以此，献给我日渐健忘的脑门儿！',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '导航', link: '/guide/' },
      { text: '日常爬坑', link: '/note/*.md' },
      { text: '最佳实践', link: '/best/one.md' },
      { text: '测试百度', link: 'https://www.baidu.com' }
    ],
    sidebar: [
      {
        title: '介绍',
        collapsable: false,
        children: ['/guide/']
      },
      {
        title: '日常爬坑',
        collapsable: false,
        children: [['/note/01.vant.md', 'vant ui 1.2 bug']]
      },
      {
        title: '最佳实践',
        collapsable: false,
        children: [['/best/one.md', 'ServiceWorker Update 最佳实践']]
      }
    ]
  }
}
