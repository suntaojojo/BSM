<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>
      <el-table :data="tableDate">
        <!-- 展开列 -->
        <el-table-column type="expand">
          <!-- 这里面要展示响应的东西 -->
          <!-- 这里第一次展示的区域 -->
          <el-row :gutter="20" style="border-bottom:1px solid #eeee;">
            <el-col :span="5">
              <el-row style="margin-bottom:20px;">
                <el-tag type="success">标签1</el-tag>
              </el-row>
            </el-col>
            <el-col :span="19">
              <el-row style="border-bottom:1px solid red">
                <el-col :span="6">
                  <el-tag type="warning">标签1-1</el-tag>
                </el-col>
                <el-col :span="18">
                  <el-row style="border-bottom:1px solid blue;">
                    <el-tag type="danger">标签1-1-2</el-tag>
                    <el-tag type="danger">标签1-1-3</el-tag>
                    <el-tag type="danger">标签1-1-4</el-tag>
                  </el-row>
                  <el-row >
                    <el-tag type="danger">标签1-1-2</el-tag>
                    <el-tag type="danger">标签1-1-3</el-tag>
                    <el-tag type="danger">标签1-1-4</el-tag>
                  </el-row>
                </el-col>
              </el-row>
              <el-row style="border-bottom:1px solid #eeee">
                <el-tag type="warning">标签1-2</el-tag>
              </el-row>
              <el-row >
                <el-tag type="warning">标签1-3</el-tag>
              </el-row>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="border-bottom:1px solid #eeee;">
            <el-col :span="5">
              <el-row >
                <el-tag type="success" closable>标签2</el-tag>
              </el-row>
            </el-col>
            <el-col :span="19">
              <el-row style="border-bottom:1px solid #eeee">
                <el-tag type="warning">标签2</el-tag>
              </el-row>
              <el-row style="border-bottom:1px solid #eeee">
                <el-tag type="warning">标签2</el-tag>
              </el-row>
              <el-row >
                <el-tag type="warning">标签2</el-tag>
              </el-row>
            </el-col>
          </el-row>
        </el-table-column>
        <!-- 索引列 -->
        <el-table-column  type="index">
        </el-table-column>
        <el-table-column label="角色名称" prop="roleName">
        </el-table-column>
        <el-table-column label="角色描述" prop="roleDesc">
        </el-table-column>
        <el-table-column label="操作" prop="do" width="300px">
          <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
          <el-button size="mini" icon="el-icon-delete" type="danger">删除</el-button>
          <el-button size="mini" type="warning" icon="el-icon-setting">分配权限</el-button>

        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return {
      tableDate:[
        { roleName:"主管" , roleDesc:"技术负责人" },
        { roleName:"测试角色" , roleDesc:"考虑考虑" },
        { roleName:"测试角色2" , roleDesc:"阿三大苏打" },
        { roleName:"dad" , roleDesc:"尽快了解了" },
        { roleName:"大苏打" , roleDesc:"Jlkj" },
        { roleName:"阿松大" , roleDesc:"adda人" },
        { roleName:"请问" , roleDesc:"jlkjl" },
        { roleName:"kl" , roleDesc:"fafa" },
        { roleName:"adsd" , roleDesc:"1231" },
        { roleName:"asd" , roleDesc:"345" },
        { roleName:"ada" , roleDesc:"123" },
      ]
    }
  }
}
</script>
<style lang="stylus">

</style>