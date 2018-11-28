module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }, { text: 'Docs', link: '/components' }],
    sidebar: [
      {
        title: '组件',
        collapsable: false,
        children: ['/components/button']
      }
    ]
  }
}
