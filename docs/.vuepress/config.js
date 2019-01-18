module.exports = {
	title: 'TryUI',
	description: 'Try to make things',
	themeConfig: {
		nav: [{ text: 'Home', link: '/' }, { text: 'Docs', link: '/components' }],
		sidebar: [
			{
				title: '组件',
				collapsable: false,
				children: [
					'/components/button',
					'/components/input',
					'/components/layout',
					'/components/grid',
					'/components/toast',
					'/components/tabs',
					'/components/tooltip'
				]
			}
		]
	}
}
