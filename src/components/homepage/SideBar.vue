<template>
  <el-menu
    :default-active="index"
    class="el-menu-vertical-demo"
    background-color="#fff"
    text-color="#000"
    active-text-color="#c20c0c"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>发现音乐</span>
      </template>
      <el-menu-item index="1-1" @click="goToRecommend">推荐</el-menu-item>
      <el-menu-item index="1-2">排行榜</el-menu-item>
      <el-menu-item index="1-3">歌单</el-menu-item>
      <el-menu-item index="1-4">主播电台</el-menu-item>
      <el-menu-item index="1-5">歌手</el-menu-item>
      <el-menu-item index="1-6">新碟上架</el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">我的音乐</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">朋友</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">音乐人</span>
    </el-menu-item>
    <el-menu-item index="5" @click="goToSearch">
      <i class="el-icon-search"></i>
      <span slot="title">搜索</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: {
    index: String,
  },
  methods: {
    goToRecommend() {
      this.$router.push({
        path: "/recommend",
      });
    },
    goToSearch() {
      this.$router.push({
        path: "/search",
      });
    },
  },
};
</script>

<style>
.el-submenu .el-menu-item {
  min-width: 100% !important;
}
</style>