---
title: Mrciro梁的博客
layout: home

hero:
  name: MicroDocs
  text: Comes from 550W
  tagline: 审美佳，技术强，脾气好，是哪个程序员这么宝藏？
  image:
    src: /MainPage.jpg
    alt: logo
  actions:
    - theme: brand
      text: Rush →
      link: /articles/other/00.介绍
    # - theme: alt
    #   text: 开源项目
    #   link: /intent/index
    # - theme: alt
    #   text: 介绍
    - theme: alt
      text: About me
    - theme: alt
      text: View on Gitee
features:
  - icon: ⚡️
    title: 知识点分享
    details: 语法或者配置时的防踩坑贴士，还有从零开始的项目搭建过程
  - icon: 🧦
    title: 算法分享
    details: 用JS举一反三
  - icon: 🛠️
    title: 项目分享
    details: 开源简单的前端技术DEMO以及开箱即用的代码
  - icon: 🛠️
    title: 集成功能
    details: 集成vue项目、项目目录下导入生成、类似于vuepress的tab：：：代码块、网站部署、全局搜索
---

<style>

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
</style>

<script setup>
import { VPTeamPage,  VPTeamPageTitle,  VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: '只爭朝夕不負韶華',
    title: '负责人'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      前端参与开发人员
    </template>
    <template #lead>
      CSDN
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>