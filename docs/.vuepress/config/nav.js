// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      // {
      //   text: '前端文章',
      //   items: [
      //     { text: 'JavaScript' },
      //     // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
      //   ],
      // },
      {
        text: '学习笔记',
        items: [
          { text: '《ES6 教程》笔记', link: '/note/es6/' },
          { text: '《Vue》笔记', link: '/note/vue/' },
          { text: '《React》笔记', link: '/note/react/' },
        ],
      },
    ],
  },
  // {
  //   text: '页面',
  //   link: '/ui/',
  //   items: [
  //     { text: 'HTML', },
  //     { text: 'CSS', },
  //   ],
  // },
  // {
  //   text: '技术',
  //   link: '/technology/',
  //   items: [
  //     { text: '技术文档', },
  //     { text: 'GitHub技巧', },
  //     { text: '博客搭建', },
  //   ],
  // },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  // {
  //   text: '索引',
  //   link: '/archives/',
  //   items: [
  //     { text: '分类', link: '/categories/' },
  //     { text: '标签', link: '/tags/' },
  //     { text: '归档', link: '/archives/' },
  //   ],
  // },
]
