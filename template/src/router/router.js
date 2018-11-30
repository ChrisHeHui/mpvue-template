module.exports = [
  {
    path: 'pages/index'{{#if_eq lintConfig "airbnb"}},{{/if_eq}} // 页面路径，同时是 vue 文件相对于 src 的路径
  },{{#vuex}}
  {
    path: 'pages/counter'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{/vuex}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
