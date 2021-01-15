<template>
    <!-- 大容器 -->
    <el-container class="outerContainer">
      <!-- 头部 -->
      <el-header class="headerC">
        <div>
          <img src="../../assets/logo.png" alt="" width="50" height="50">
          电商后台管理系统
        </div>
          <el-button type="info" @click="back">退出</el-button>
      </el-header>
      <!-- 内部容器 -->
      <el-container class="innerC">
        <!-- 侧边栏 -->
        <el-aside :width="isCllopes ? '64px' :'200px'" class="aside">
        <!-- 导航一 -->
           <div class="aside-Button" @click="change"> |||| </div>
           <el-menu
            default-active="2"
            class="el-menu-vertical-demo" 
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#2DCC9F"
            :collapse="isCllopes"
            :collapse-transition="false"
            :router="true"
            >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="1-1">用户列表</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>管理权限</span>
              </template>
              <el-menu-item index="2-1">角色列表</el-menu-item>
              <el-menu-item index="2-2">权限列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="3-1">商品列表</el-menu-item>
              <el-menu-item index="3-2">分类参数</el-menu-item>
              <el-menu-item index="3-3">商品分类</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="4-1">商品列表</el-menu-item>
              <el-menu-item index="4-2">分类参数</el-menu-item>
              <el-menu-item index="4-3">商品分类</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
              <el-menu-item index="5-1">商品列表</el-menu-item>
              <el-menu-item index="5-2">分类参数</el-menu-item>
              <el-menu-item index="5-3">商品分类</el-menu-item>
            </el-submenu>
        </el-menu>
        </el-aside>
        <!-- 主内容区 -->
          <el-main>
            <router-view></router-view>
          </el-main>
      </el-container>
    </el-container>

</template>
<script>
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/fonts/iconfont.css'
import {Button , Container , Header , Aside , Main , Menu , MenuItem , Submenu , MenuItemGroup} from "element-ui"
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)

export default {
  data() {
      return {
        list:1,
        isCllopes:false
      }
  },
  methods:{
    back(){
      window.localStorage.setItem('_token' , '')
      this.$store.commit('global/setJwt' , '')
      this.$router.push('/login')
    },
    change(){
      this.isCllopes = !this.isCllopes
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-container{
    height:100%;
  }
  .aside{
    background:#313743;
    height:100%;
  }
  .main{
    background:#E9EDF1;
    height:100%;
  }
  .innerC{
    height:100%
  }
  .headerC{
    background:#363D40;
    display:flex;
    justify-content: space-between;
    padding:0;
    align-items: center;
    div{
      display:flex;
      align-items: center;
      color:white;
    }
  }
  .iconfont{
    width:100px;
  }
  .aside-Button{
    background:gray;
    text-align: center;
    letter-spacing: 3px;
  }

</style>