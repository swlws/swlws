'use strict';

const config = {
  webpath: "/swlws",
  menus: [
    { title: '主页', url: '/home' },
    { title: 'Web Demo', url: '/webdemo' },
    { title: 'Blog', url: '/blog' },
    { title: '简历', url: '/resume' }
  ],
  detailNavs: [
    { title: 'Blog', desc: 'Web、Node.js、Java', url: '/blog', background: '#70c3ff' },
    { title: 'GitHub', nickName: '', desc: '开源代码贡献者——SWL', url: '/github', background: '#fd6a7f' },
    { title: 'Web Dmeo', nickName: '', desc: '一个不标准的Web Demo演示平台', url: '/webdemo', background: '#7f8ea0' }
  ]
}

export default config;