<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      123
      <el-table :data="tableDate">
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column label="权限名称" prop="rightName">

        </el-table-column>
        <el-table-column label="路径" prop="path">
          
        </el-table-column>
        <el-table-column label="权限等级" prop="rightLeval">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.rightLeval==='0'">一级</el-tag>
            <el-tag type="warning" v-else-if="scope.row.rightLeval==='1'">二级</el-tag>
            <el-tag type="info"  v-show="scope.row.rightLeval==='2'" >三级</el-tag>
          </template>
        </el-table-column>
      </el-table>
       
    </el-card>
  </div>
</template>
<script>
import Vue from 'vue'
import {Tag} from 'element-ui'
Vue.use(Tag)

export default {
  data(){
    return {
      tableDate:[
        {rightName:'权限名称', path:"goods" , rightLeval:"0"},
        {rightName:'权限名称', path:"goods" , rightLeval:"1"},
        {rightName:'权限名称', path:"goods" , rightLeval:"0"},
        {rightName:'权限名称', path:"goods" , rightLeval:"2"},
        {rightName:'权限名称', path:"goods" , rightLeval:"0"},
        {rightName:'权限名称', path:"goods" , rightLeval:"1"},
        {rightName:'权限名称', path:"goods" , rightLeval:"2"},
        {rightName:'权限名称', path:"goods" , rightLeval:"2"},
        {rightName:'权限名称', path:"goods" , rightLeval:"1"},
        {rightName:'权限名称', path:"goods" , rightLeval:"0"},
        {rightName:'权限名称', path:"goods" , rightLeval:"1"},
      ]
    }
  }
}
</script>
<style lang="scss">

</style>