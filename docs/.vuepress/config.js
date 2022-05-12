module.exports = {
  title: '闲言碎语记',
  description: '闲言碎语记记录',
  base: '',
  dest: 'dist',
  themeConfig: {
    nav: [],
    sidebar: [
      {
        collapsable: false,
        children: [
          '/doc/HTML',
          '/doc/CSS',
          '/doc/JS',
          '/doc/NET',
          '/doc/DataStructure',
          '/doc/Browser',
          '/doc/NODEJS',
          '/doc/DESIGN',
          '/doc/LowCode',
          '/doc/MicroFront',
        ]
      }
    ],
    // sidebar: 'auto',
    sidebarDepth: 2
  },
  plugins: []
}
