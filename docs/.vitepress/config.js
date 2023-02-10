import autoGetSidebarOptionBySrcDir from "./sidebar";
const path = require("path");

module.exports = {
  title: "谈畅的个人博客",
  description: "Front end project and tips sharing",
  lang: "cn-ZH",
  base: "/",
  themeConfig: {
    siteTitle: "谈畅的个人博客",
    logo: "/联合政府_画板 1.png",
    //顶部
    nav: [
      { text: "介绍", link: "/articles/basic/index" },
      {
        text: "🔥 前端",
        items: [
          { text: "CSS高级", link: "/articles/basic/index" },
          { text: "JavaScript", link: "/articles/web3d/index" },
          { text: "Vue-Cli", link: "/articles/vue/00.什么是Vue" },
          { text: "Element", link: "/articles/electron/index" },
          // { text: "微信小程序", link: "/articles/mini/index" },
          {
            items: [
              { text: "TypeScript", link: "/articles/react/index" },
              { text: "React", link: "/articles/react/index" },
              { text: "VitePress", link: "/articles/other/vitepress/01.vitepress的搭建" },]
          },
        ],
      },
      { text: "💭 开源项目", link: "/intent/" },
      // { text: "算法", link: "/leetcode/LEET_CODE题解/47. 全排列 II" },
      {
        text: "更多", items: [
          //使用items做分隔栏
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
      "/articles/basic": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/basic"),
        "介绍"
      ),
      "/articles/vue": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/vue"),
        "VUE"
      ),
      "/articles/react": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/react"),
        "React"
      ),
      "/articles/mini": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/mini"),
        "小程序"
      ),
      "/articles/electron": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/electron"),
        "electron"
      ),
      "/articles/web3d": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/web3d"),
        "3D"
      ),
      "/articles/other": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/other/vitepress")
      ),
      "/leetcode": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../leetcode")
      ),
    },

    //社交
    socialLinks: [{ icon: "github", link: "https://github.com/aiai0603" }],
  },
};
