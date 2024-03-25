<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <div
        style="
          height: 60px;
          text-align: center;
          line-height: 60px;
          font-size: 24px;
          color: #666;
        "
      >
        qiankun基座
      </div>
      <el-menu :default-active="$route.path" router :default-openeds="['1', '3']">
        <el-menu-item index="/home">
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/vue2-app">vue2-app</el-menu-item>
        <el-menu-item index="/react-app">react-app</el-menu-item>
        <el-menu-item index="/umi-app">umi-app</el-menu-item>
        <el-submenu index="/vue-app">
          <template slot="title">vue3-app</template>
          <el-menu-item index="/vue-app/list">列表</el-menu-item>
          <el-menu-item index="/vue-app/detail">详情</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view />
        <div id="sub-app"></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import { start } from 'qiankun';
import { start } from '../micro-fe';
import route from '@/router'
export default {
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start({
        sandbox: {
          // strictStyleIsolation:true,
          experimentalStyleIsolation: true,
        }
      });
    }
  }
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
