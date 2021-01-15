<template>
  <div class="header">
    <div class="outer">
      <div class="login"> 
        <img src="../../assets/logo.png" alt="">
      </div>
      <el-form ref="loginReset" :model="loginform"  :rules="loginRules" label-width="60px" class="Login">
        <el-form-item label="账号" prop="mobile">
          <el-input prefix-icon="iconfont icon-renwu" v-model="loginform.mobile" ></el-input>
        </el-form-item>
        <el-form-item  label="密码" prop="password">
          <el-input prefix-icon="iconfont icon-mima" type="password" v-model="loginform.password" ></el-input>
        </el-form-item>
        <div class="button">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="primary" @click="resetFrom">重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {Form , FormItem , Input ,Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/fonts/iconfont.css'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
export default {
  data(){
    return {
      loginform:{
        mobile:"18512345678",
        password:"123456"
      },
      loginRules:{
        mobile:[
          {required:true , message:"请输入用户名" , trigger:'blur'},
          {min:3 , max:1011 , message:"请输入字符在3-51之间" , trigger:"blur"}
        ],
        password:[
          {required:true , message:"请输入密码" , trigger:"blur"},
          {min:5 , max:10 , message:"请输入5-10之间的密码" , trigger:"blur"}
        ]
      }
    }
  },
  methods:{
    resetFrom(){
      this.$refs.loginReset.resetFields()
    },
    login(){
      this.$refs.loginReset.validate(valid=>{
        console.log(valid , this.loginform)
        if(!valid) return
        this.$http.post("http://127.0.0.1:2004/login" , this.loginform).then(ret=>{
          console.log(ret)
          if(ret.error_code == 0){
            console.log('登录成功')
            this.$message('登录成功')
            this.$router.push('/home')
          }else{
            console.log('登录失败')
            this.$message.error('错了哦，这是一条错误消息');
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped >
  .header{
    height:100%;
    background:black;
    .outer{
      width:600px;
      height:400px;
      position:absolute;
      margin:auto;
      left:0;
      right:0;
      top:0;
      bottom:0;
      border-radius: 30px;
      background:white;
      .login{
        position:absolute;
        border-radius:50%;
        padding:10px;
        box-shadow: 0 0 10px white;
        left:50%;
        transform: translate(-50% , -50%);
        img{
          border-radius:50%;
          background:#eeee;
        }
      }
      .Login{
        position: absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        width:100%;
        box-sizing:border-box;
        padding:10px;        
        .button{
          display: flex;
          justify-content: flex-end;          
        }
      }
    }
  }
  
</style>