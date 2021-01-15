<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="7">
            <el-input placeholder="请输入内容" >
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="success" @click="dialogVisible=true">添加用户信息</el-button>
        </el-col>
      </el-row>
         <!-- 表格 -->
    <el-table
      :data="tableData"
      border
      stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="200">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="电话"
        width="200">
      </el-table-column>
       <el-table-column
        prop="role"
        label="角色"
        width="200">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="200">
        <el-switch
          v-model="tableData[1].status"
        >

        </el-switch>
      </el-table-column>
      <el-table-column
        prop="do"
        label="操作"
        width="200">
        <el-button type="primary" icon="el-icon-edit" size="mini" @click="upDate()"></el-button>
        <el-button type="danger" icon="el-icon-delete" size="mini" @click="open"></el-button>
         <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top" :enterable="false">
          <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
        </el-tooltip>
      </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="Page.currentPage4"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="1"
        layout="total, sizes, prev, pager, next, jumper"
        :total="6">
      </el-pagination>
    </el-card>
    <!-- 添加用户信息 -->
      <el-dialog
        title="添加用户"
        :visible.sync="dialogVisible"
        width="30%"
        @close="DialogText"
        >


        <el-form :model="ruleForm" :rules="rules" ref="ruleFormref" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
     
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        </el-form>
        <!--  -->


        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addUser">确 定</el-button>
        </span>
    </el-dialog>
    <!-- ////////////////////////// -->
          <el-dialog
        title="修改用户信息"
        :visible.sync="DialogUP"
        width="30%"
        @close="DialogText"
        >

          <el-form :model="ruleForm" :rules="rules" ref="ruleFormref" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" disabled></el-input>
        </el-form-item>
     
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        </el-form>



        <span slot="footer" class="dialog-footer">
          <el-button @click="DialogUP = false">取 消</el-button>
          <el-button type="primary" @click="DialogUP = false">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
import Vue from 'vue'
import {Breadcrumb , BreadcrumbItem ,Card , Select ,Row , Col , Table , TableColumn,Switch , Tooltip , Pagination ,Dialog ,FormItem , Form} from 'element-ui'
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(FormItem)
Vue.use(Form)
export default {
  data(){
    var checkEmail = (rule , value , cb)=>{
        let reg = /^[0-9]{6,8}$/
        if(reg.test(value)){
          return cb()
        }else{
          cb('请输入合法的邮箱')
        }
    }
    var checkMobile = (rule , value , cb)=>{
      let reg = /^[a-z]{1,2}$/i
      if(reg.test(value)){
        return cb()
      }else{
        cb('请输入正确的手机号')
      }
    }
    return{
      ruleForm:{
        username:'',
        password:'',

      },
      rules:{
        username:[
          {required:true,message:"输入",trigger:'blur'},
          {validator:checkEmail , trigger:'blur'}
        ],
        password:[
          {required:true,message:"输入",trigger:'blur'},
          {validator:checkMobile , trigger:'blur'}
        ],
        email:[
          {required:true,message:"输入",trigger:'blur'}
        ],
        
      },
      Page:
        {currentPage4:4}
      ,
      dialogVisible:false,
      DialogUP : false,
      tableData:[
        {
          name:'admin',
          email:'123@qq.com',
          mobile:1231231,
          role:'超级管理员',
          status:true,
          do:''
        },
        {
          name:'admin1',
          email:'123111@qq.com',
          mobile:1231111231,
          role:'管理员',
          status:false,
          do:''
        },
        {
          name:'admin1',
          email:'123111@qq.com',
          mobile:1231111231,
          role:'管理员',
          status:false,
          do:''
        },{
          name:'admin1',
          email:'123111@qq.com',
          mobile:1231111231,
          role:'管理员',
          status:false,
          do:''
        },{
          name:'admin1',
          email:'123111@qq.com',
          mobile:1231111231,
          role:'管理员',
          status:false,
          do:''
        },{
          name:'admin1',
          email:'123111@qq.com',
          mobile:1231111231,
          role:'管理员',
          status:false,
          do:''
        },
      ]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      DialogText(){
        console.log(123 , this.$refs.ruleFormref.resetFields())
        // this.$refs.ruleFormref.resetFields()
      },
      addUser(){
        this.$refs.ruleFormref.validate(value=>{
          if(value){
            this.$message('成功')
            /* 如果成功了就可以发送网络请求 */
          }else{
            /* 如果不成功就直接return就可以了 */
            return 
          }
        })
      },
      upDate(){
        this.DialogUP = true
      },
      open(){
      console.log('re')
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
    }
    },
    
  }
</script>
<style lang="scss">

</style>