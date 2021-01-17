<template>
  <div> 
    商品分类
    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary" @click="showAddDialog">添加分类</el-button>
        </el-col>
      </el-row>
      <el-table
    :data="tableData"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="cart_delete"
      label="是否有效">
      <template slot-scope="scope">
        <i class="el-icon-success" style="color:green" v-if="scope.row.cart_delete===false"></i>
        <i class="el-icon-error" style="color:red" v-else-if="scope.row.cart_delete===true"></i>
      </template>
    </el-table-column>
    <el-table-column
      prop="cart_leave"
      label="等级">
      <template slot-scope="scope">
        <el-tag v-if="scope.row.cart_leave=== 0">标签一</el-tag>
        <el-tag type="success" v-else-if="scope.row.cart_leave===1">标签二</el-tag>
        <el-tag type="info" v-show="scope.row.cart_leave===2">标签三</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      width="200px">
      <!-- <template slot-scope="scope"> -->
        <el-button type="primary" size="mini">主要按钮</el-button>
        <el-button type="success" size="mini">成功按钮</el-button>
      <!-- </template> -->
    </el-table-column>
  </el-table>
  <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="10">
    </el-pagination>
    </el-card>
    <!-- 添加分类的对话框 -->
    <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->

    <el-dialog
      title="添加分类"
      :visible.sync="dialogVisible"
      width="30%"
      @close="closeAddSort"
    >
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
        <el-form-item
          label="分类"
          prop="addSort"
          :rules="[
            { required: true, message: '年龄不能为空'},
          ]"
        >
          <el-input  v-model="numberValidateForm.addSort" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="父类选择器">
          <!-- 
            options 数据源
            props 中的属性 value 对应在实际项目中应该是id   label 对应在实际项目中应该是显示的文字 children是子选项(也就是他的下一级)
           -->
          <el-cascader
            v-model="value1"
            :options="options"
            :props="{ expandTrigger: 'hover'  , value:'value' , label:'label' , children:'children' }"

            @change="handleChange" clearable></el-cascader>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCartList">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Vue from 'vue'
import {Dialog , Cascader} from 'element-ui'
Vue.use(Dialog)
Vue.use(Cascader)
export default {
  data(){
    return {
      value1:[],
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
        }]
      ,
      numberValidateForm:{
        addSort:'',
    },
      
      dialogVisible:false,
      tableData:[
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          cart_delete:false,
          cart_leave:0
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          cart_delete:true,
          cart_leave:1

        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          cart_delete:true,
          cart_leave:2,
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              cart_delete:true,
              cart_leave:3
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              cart_delete:true,
              cart_leave:2,
              children:[
                {
                  id: 33,
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄',
                  cart_delete:true,
                  cart_leave:3
                }
              ]
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          cart_delete:true,
          cart_leave:3
          
        }
      ]

    }
  },
  methods:{
    handleChange(value){
      console.log(this.value1 )
      console.log(value)
      // 如果是id我们就获取 最后的id 如果是等级我们就获取数组的长度就可以知道是第几级的了
      //  如果是 id 我们就要去最后一个选则的 id  如果是等级 那么我们就按照数组的长度进行选择
    },
    closeAddSort(){
      this.$refs.numberValidateForm.resetFields()
      this.value1 = []
    },
    addCartList(){

      this.$refs.numberValidateForm.validate(value=>{
        if(value){
          this.$message.success('....')
          console.log(123)
          this.dialogVisible = false
        }
      })
    },
    showAddDialog(){
      this.dialogVisible = true
      console.log(123)
    },
    handleSizeChange(newSize){
      /* 显示的条数 */
      /* 这里的每一次操作都需要重新从后端获取一下数据 */
      console.log(newSize)
    },
    handleCurrentChange(newPage){
      /* 显示的当前页码值 */
      /* 这里的每一次操作都需要重新从后端获取一下数据 , 重新渲染页面 */
      console.log(newPage)
    }
  }
}
</script>
<style lang="scss">

</style>