import autoGetSidebarOptionBySrcDir from "./sidebar";
const path = require("path");

module.exports = {
  title: "liang14658fox",
  description: "Front end project and tips sharing",
  dest: './dist',
  lang: "cn-ZH",
  base: "/",
  markdown: {
    lineNumbers: true
  },//为所有代码启动行号
  themeConfig: {
    siteTitle: "liang14658fox",
    logo: "/联合政府_画板 1.png",
    nav: [
      { text: "介绍", link: "/articles/other/00.介绍" },
      {
        text: "🔥 前端",
        items: [
          { text: "CSS高级", link: "/articles/css/00.目录" },
          { text: "JavaScript", link: "/articles/JavaScript/对象" },
          { text: "Vue-Cli", link: "/articles/vue/00.什么是Vue" },
          { text: "Element", link: "/articles/element/00.目录" },
          {
            items: [
              { text: "TypeScript", link: "/articles/typescript/00.什么是TypeScript" },
              { text: "React", link: "/articles/react/00.什么是React" },
              { text: "VitePress", link: "/articles/vitepress/01.vitepress的搭建" },]
          },
        ],
      },
      { text: "💭 开源项目", link: "/intent/" },
      {
        text: "更多", items: [
          {
            items: [
              { text: "关于我", link: "/articles/basic/index" },
              { text: "Github", link: "/articles/basic/index" },
              { text: "Gitee", link: "/articles/basic/index" },
            ]
          },
          {
            items: [
              { text: "辅助工具", link: "/articles/basic/index" },
              { text: "chatGPT", link: "/articles/basic/index" },
              { text: "MineCraft", link: "/articles/basic/index" },
            ]
          },
        ],
      },
    ],

    //侧边栏
    sidebar: {
      //跟原来不一样，这里写了一个函数来引入该文件夹下的所有文件并根据名称生成目录
      "/articles/css": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/css"),
        "CSS高级"
      ),
      "/articles/element": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/element"),
        "Element"
      ),
      "/articles/JavaScript": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/JavaScript"),
        "JavaScript"
      ),
      "/articles/other": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/other")
      ),
      "/articles/react": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/react"),
        "React"
      ),
      "/articles/typescript": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/typescript"),
        "TypeScript"
      ),
      "/articles/vitepress": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/vitepress"),
        "VitePress"
      ),
      "/articles/vue": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/vue"),
        "VUE"
      ),
    },

    //社交
    socialLinks: [{ icon: "github", link: "https://github.com/aiai0603" }],
    footer: {
      message: 'CSDN只爭朝夕不負韶華',
      copyright: 'Copyright © 2022-present CSDN'
    }
  },
};
