<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>参数列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--视图卡片-->
    <el-card>
      <el-alert
        title="警告提示的文案"
        type="warning"
        :closable="false"
        show-icon>
      </el-alert>
      <el-row>
        <el-col>
          选择商品分类:
          <el-cascader
            v-model="value1"
            :options="options"
            :props="{ expandTrigger: 'hover' , value:'value' , label:'label' , children:'children' }"

            @change="handleChange" clearable>
          </el-cascader>
        </el-col>
      </el-row>
      <!-- tab 页签 -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="动态参数" name="first">
          <el-button type="primary" :disabled="is_TabShow" @click="openAddAttributeDialog">动态参数</el-button> 
          <el-table :data="tableData">
            <el-table-column  type="expand">
              <template slot-scope="scope">
                <el-input
                  class="input-new-tag"
                  v-model="inputValue"
                  ref="saveTagInput"
                  v-if="inputVisible"
                  size="small"
                >
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>  
              </template>
            </el-table-column>  
            <el-table-column label="#"  type="index"></el-table-column>
            <el-table-column label="参数名称" prop="attribute"></el-table-column>
            <el-table-column label="操作">
              <el-button type="success" icon="el-icon-edit" size="mini">编辑</el-button>
              <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
            </el-table-column>
          </el-table> 
        </el-tab-pane>
        <el-tab-pane label="静态属性" name="second">
         <el-button type="primary" :disabled="is_TabShow" @click="openAddAttributeDialog">静态属性</el-button> 
         <el-table :data="tableData">
            <el-table-column  type="expand">
              
            </el-table-column>  
            <el-table-column label="#"  type="index"></el-table-column>
            <el-table-column label="参数名称" prop="attribute"></el-table-column>
            <el-table-column label="操作">
              <el-button type="success" icon="el-icon-edit" size="mini">编辑</el-button>
              <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
            </el-table-column>
          </el-table> 
        </el-tab-pane>
      </el-tabs>
    </el-card>
    

    <!-- 添加对话框 -->
    <el-dialog
      :title="'添加'+addAttributeTitle"
      :visible.sync="addAttribute"
      width="30%">
      <!-- :before-close="handleClose"> -->
      <el-form ref="form" :model="form" label-width="80px" :rules="formRules">
        <el-form-item :label="addAttributeTitle"  prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addAttribute = false">取 消</el-button>
        <el-button type="primary" @click="addAttribute = false" >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Vue from 'vue'
import {Alert , Tabs , TabPane , Tag , Button , Input} from 'element-ui'
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Button)
Vue.use(Input)

export default {
  data(){
    return{
      options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
      value1:[],
      activeName:'first',
      tableData:[
        {
          attribute:'参数名称',
        }
      ],
      addAttribute:false,
      form:{
        name:''
      },
      formRules:{
        name:[
          {required:true , message:"请输入信息" , trigger:"blur"}
        ]
      },
      inputVisible: false,
      inputValue: ''
    }
  },
  methods:{
    handleChange(){
      console.log(this.value1)
    },
    handleClick(){
      console.log(this.activeName)
    },
    openAddAttributeDialog(){
      this.addAttribute = true
    },
    showInput() {
      this.inputVisible = !this.inputVisible
      console.log(this.inputVisible)
    },
    handleInputConfirm() {
       console.log('ok')
       this.inputVisible = !this.inputVisible
    }
  },
  computed:{
    is_TabShow(){
      console.log(this.value1)
      if(this.value1.length == 0){
        return true
      }else{
        return false
      }
    },
    addAttributeTitle(){
      if(this.activeName === 'first'){
        return '动态属性'
      }else{
        return '静态属性'
      }
    },
    
    
  }
}
</script>
<style lang="scss">
  .el-row{
    margin:15px 0 ;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>