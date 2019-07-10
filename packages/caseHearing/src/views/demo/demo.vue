<template>
  <div class="page">
    <div class="container">
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <span class="title">filter</span>
          </template>
          <div>
            {{"1" | code('sex')}}
            {{"2" | code('sex')}}
            {{"0" | code('boolean')}}
            {{"1" | code('boolean')}}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="container">
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <span class="title">form-label-top</span>
          </template>
          <el-form
            class="form-label-top"
            :rules="rules"
            :label-position="labelPosition"
            :model="formLabelAlign"
          >
            <el-row>
              <el-col :span="8">
                <el-form-item label="普通输入框" prop="name">
                  <el-input  prefix-icon="icon-yonghuming"	 v-model="formLabelAlign.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="日期">
                  <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="下拉框">
                  <el-select v-model="value4" clearable placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8">
                <el-form-item label="身份证号" prop="idNum">
                  <el-input v-model.lazy="formLabelAlign.idNum" @change="changeIdNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="出生日期">
                  <el-date-picker type="date" v-model="formLabelAlign.borthday" placeholder="选择日期"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="性别">
                  <el-radio-group v-model="formLabelAlign.sex">
                    <el-radio label="1">男</el-radio>
                    <el-radio label="2">女</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="基础多选" class="tree-select">
                  <el-select v-model="value5" multiple placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="树形多选框" class="tree-select">
                  <multiple-tree-select
                    class="content"
                    :data="trees"
                    showKey="name"
                    v-model="tree.checks"
                    placeholder="请选择"
                  ></multiple-tree-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="树形单选框" class="tree-select">
                  <multiple-tree-select
                      class="content"
                      type="radio"
                      :data="zNodes"
                      showKey="name"
                      v-model="tree.check"
                      placeholder="请选择"
                    ></multiple-tree-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="任意时间点">
                  <el-time-picker
                    v-model="value2"
                    :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
                    placeholder="任意时间点"
                  ></el-time-picker>
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="日期">
                  <el-date-picker
                    v-model="value7"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions2"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item style="width:50%" label="自定义宽">
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item style="min-height:32px" label="文本域">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="formLabelAlign.region"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="单选">
                  <el-radio-group v-model="formLabelAlign.type">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item  label="问题类别">
                    <el-input placeholder="请输入内容"  v-model="inputWTLB">
                      <el-button slot="append" icon="icon-hand">选择</el-button>
                    </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                {{selectBZB1}}
                <el-form-item  label="部职别">
                   <el-input placeholder="请输入内容" >
                      <el-cascader
                       slot="prepend"
                       :options="optionsBZB"
                       :props="optionProps"
                       v-model="selectBZB1"
                    
                       ref="cascader"
                       @change="test"
                    
                       style=" width: 420px;"
                    
                      >
                      </el-cascader>
                    </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item  label="部职别">
                   <el-input placeholder="请输入内容" v-model="inputBZB2" >
                      <el-select v-model="selectBZB2" slot="prepend" placeholder="请选择" style=" width: 400px;">
                        <el-option label="餐厅名" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                        <el-option label="用户电话" value="3"></el-option>
                      </el-select>
                    </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="container">
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <span class="title">form-label-right</span>
          </template>
          <el-form
            class="form-label-right"
            label-width="120px"
            :rules="rules"
            label-position="right"
            :model="formLabelAlign"
          >
            <el-row>
              <el-col :span="8">
                <el-form-item label="普通输入框" prop="name">
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="日期">
                  <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="下拉框">
                  <el-select v-model="value4" clearable placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="基础多选" class="tree-select">
                  <el-select v-model="value5" multiple placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="树形多选框" class="tree-select">
                  <multiple-tree-select
                    class="content"
                    :data="trees"
                    showKey="name"
                    v-model="tree.checks"
                    placeholder="请选择"
                  ></multiple-tree-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="级联下拉框">
                  <el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions2"></el-cascader>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="任意时间点">
                  <el-time-picker
                    v-model="value2"
                    :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
                    placeholder="任意时间点"
                  ></el-time-picker>
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="日期">
                  <el-date-picker
                    v-model="value7"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions2"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item style="width:80%" label="自定义宽">
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="文本域">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="formLabelAlign.region"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="单选">
                  <el-radio-group v-model="formLabelAlign.type">
                    <el-radio label="线上"></el-radio>
                    <el-radio label="线下"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="container">
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <span class="title">table-edit</span>
          </template>
        </el-collapse-item>
        <el-row>
          <el-col :offset="22" :span="2">
            <el-button icon="el-icon-circle-plus-outline" @click="addRow()">增加</el-button>
          </el-col>
        </el-row>
        <el-table
          :data="tableData"
          height="auto"
          max-height="100%"
          :header-cell-class-name="'table-header-bg'"
          :row-class-name="'table-header-bg1'"
          :cell-class-name="'tableContent-bg table-edit'"
        >
          <el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.name"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="地址" width="180" align="center">
            <template slot-scope="scope">
              <el-select v-model="scope.row.city" placeholder="请选择">
                <el-option
                  v-for="item in addrOptions"
                  :key="item.code"
                  :label="item.value"
                  :value="item.code"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="详细地址" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.address" :disabled="scope.row.city=='04'"></el-input>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" align="center" width="180">
            <template slot-scope="scope">
              <el-button type="text" @click="delRow(scope.$index)"><span class="danger">删除</span></el-button>
              <el-button type="text" @click="showDetail(scope.row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-collapse>
    </div>
    <div class="container">
      <el-collapse>
        <el-collapse-item>
          <template slot="title">
            <span class="title">el-dialog</span>
          </template>
        </el-collapse-item>
        <el-row>

          <el-col :span="3">
            <el-button @click="showModelFlag=true" size="small">小弹窗</el-button>
          </el-col>
          <el-col :span="3">
            <el-button @click="showModelFlag2=true" size="small">大弹窗</el-button>
          </el-col>
          <el-col :span="3">
            <el-button @click="resumeDiglog=true" size="small">人员简历</el-button>
          </el-col>
          <el-col :span="3">
            <el-button @click="demoDetailsDiglog=true;isDisabled=true" size="small">详细信息弹窗</el-button>
          </el-col>
          <el-col :span="3">
            <el-button @click="demoDetailsDiglog=true;isDisabled=false" size="small">编辑信息弹窗</el-button>
          </el-col>
          <el-col :span="3">
            <el-button @click="demoDetailsDiglog2=true" size="small">嵌套组件弹窗demo</el-button>
          </el-col>
          <el-col :span="3">
            <el-button @click="demoDetailsDiglog3=true" size="small">锚点弹窗</el-button>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="3">
            <el-button @click="goDemo('2')" size="small">查询内滚动</el-button>
          </el-col>
          <el-col :span="3">
            <el-button @click="goDemo('3')" size="small">树</el-button>
          </el-col>
          <el-col :span="3">
            <el-button @click="goDemo('4')" size="small">下拉树</el-button>
          </el-col>
          <el-col :span="3">
            <el-button @click="goDemo('5')" size="small">自定义流程图</el-button>
          </el-col>
          <el-col :span="3">
            <el-button @click="goDemo('6')" size="small">Pdf</el-button>
          </el-col>
          <el-col :span="3">
            <el-button @click="goDemo('7')" size="small">查询外滚动</el-button>
          </el-col>

          <el-col :span="3">
            <el-button @click="printDemo" size="small" v-print="'#test01'">审批单打印</el-button>
          </el-col>
          <el-col :span="3">
            <el-button @click="printDemo2" size="small" v-print="'#test02'">清单打印2</el-button>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="3">
            <el-button @click="goDemo('2')" size="small">查询内滚动</el-button>
          </el-col>
          <el-col :span="3">
            <el-button @click="goTabs" size="small">tabs穿梭框</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" size="mini">提交</el-button>
            <el-button type="success">保存</el-button>
            <el-button>返回<span class="icomoon icon-senior"></span></el-button>
            <el-button>重置</el-button>
            <el-button>其他</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
          </el-col>
        </el-row>
      </el-collapse>
    </div>
    <el-dialog
      title="标题测试"
      class="mc-dialog-medium"
      :visible.sync="showModelFlag"
      width="68.81%"
      top="10%"
      center
    >
      <SmallModal></SmallModal>
      <div slot="footer" class="dialog-footer">
        <el-button size='small'type="primary">保存</el-button>
        <el-button size='small' @click="centerDialogVisible = false">返回</el-button>
      </div>
    </el-dialog>
    <el-dialog
      class="mc-dialog-big"
      title="大弹窗"
      :visible.sync="showModelFlag2"
      width="100%"
      top="0"
    >
      <FirstTrail></FirstTrail>
    </el-dialog>
    <el-dialog
            class="mc-dialog-big"
            title="打印测试"
            :visible.sync="commonPrintFlag"
            width="100%"
            top="0"
    >
      <CommonPrint @closeCommonPrint="closeCommonPrint" ref="print"></CommonPrint>
    </el-dialog>
    <el-dialog
            class="mc-dialog-big"
            title="打印测试2"
            :visible.sync="commonPrintFlag2"
            width="100%"
            top="0"
    >
      <CommonPrintOther @closeCommonPrint="closeCommonPrint" ref="print"></CommonPrintOther>
    </el-dialog>


    <!--<el-dialog class="mc-dialog-big jwjw-dialog-big"  title="案件受理" :visible.sync="fistTrailModal" width="100%" top="0" style="background: #ffffff">-->
    <!---->
    <!--</el-dialog>-->
    <el-dialog
      title="小弹窗"
      class="mc-dialog-medium"
      :visible.sync="dialogTest"
      width="100%"
      id="caseMsg"
    >
      <ModalTest ref="modalPara" :tableData="tableData" :selectObj="selectObj" @modify="modifyTest"></ModalTest>
    </el-dialog>
    <el-dialog :title="isDisabled?'详细信息':'编辑信息'" :visible.sync="demoDetailsDiglog" class="mc-dialog-big" width="100%" top="0" >
      <demoDetails ref="modalPara" :disabled="isDisabled"  @modify="modifyTest"></demoDetails>
    </el-dialog>
    <el-dialog  title="可编辑弹窗" :visible.sync="demoDetailsDiglog2"  class="mc-dialog-big" width="100%" top="0" >
      <FirstTrail></FirstTrail>
    </el-dialog>
    <el-dialog  title="锚点弹窗" :visible.sync="demoDetailsDiglog3"  class="mc-dialog-big" width="100%" top="0" >
      <PointDemo></PointDemo>
    </el-dialog>
    <el-dialog  title="人员简历" :visible.sync="resumeDiglog"  class="mc-dialog-big" width="100%" top="0" >
      <Resume></Resume>
    </el-dialog>
    <el-dialog
            title="锚点外弹窗"
            class="mc-dialog-big"
            :visible.sync="showRegFlag"
            width="65%"
            top="0"
    >
      <RegistDemo> </RegistDemo>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ModalTest from "./modal/modalTest";
import demoDetails from "./modal/demoDetails";
import multipleTreeSelect from "../../components/multipleTreeSelect.vue";
import FirstTrail from "../pubicMAndC/modal/firstTrialModalingNew.vue";
import CommonPrint from "../pubicMAndC/modal/commonPrint.vue";
import CommonPrintOther from "../pubicMAndC/modal/commonPrint2.vue";
import RegistDemo from "./modal/register.vue";
import SmallModal from "./modal/smallModal.vue";
import PointDemo from "./modal/pointDemo.vue";
import Resume from "./modal/resume.vue";

import Print from 'vue-print-nb'
Vue.use(Print); //注册

const validate = require("../../utils/validate.js");

const trees = require("./multipleTreeJson.json");
@Component({
  name: "demo",
  components: { ModalTest,demoDetails, multipleTreeSelect, FirstTrail,CommonPrint,CommonPrintOther,RegistDemo,SmallModal,PointDemo,Resume},

  data() {
    return {
       
      optionProps:{value: {
        label: 'label',
        value:'value'


      }, label: 'label',children:'children'},

      selectBZB2:'',
      isDisabled:false,
      borthday: "",
      showModelFlag: false,
        showRegFlag: false,
      showModelFlag2: false,
        commonPrintFlag:false,
        commonPrintFlag2:false,
        demoDetailsDiglog2:false,
        demoDetailsDiglog3:false,
      tree: {
        checks: [],
        check:undefined
      },
      trees: trees,

      optionsBZB: [{
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
      tableData: [
        {
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788991",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
        },
        {
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788992",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
        },
        {
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788993",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
        },
        {
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788994",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
        },
        {
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788995",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
        }
      ],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        },
        {
          value: "ziyuan1",
          label: "资源111111111111111111111111",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
      selectedOptions2: [],
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      inputBZB1:'',
      inputBZB2:'',
      selectBZB1:[],
      selectBZB2:'',
      inputWTLB:'',
      formLabelWidth: "20%",
      zNodes:[
        {id:1, pId:0, name:"北京"},
        {id:2, pId:0, name:"天津"},
        {id:3, pId:0, name:"上海"},
        {id:6, pId:0, name:"重庆"},
        {id:4, pId:0, name:"河北省", open:true, nocheck:true},
        {id:41, pId:4, name:"石家庄"},
        {id:42, pId:4, name:"保定"},
        {id:43, pId:4, name:"邯郸"},
        {id:44, pId:4, name:"承德"},
        {id:5, pId:0, name:"广东省", open:true, nocheck:true},
        {id:51, pId:5, name:"广州"},
        {id:52, pId:5, name:"深圳"},
        {id:53, pId:5, name:"东莞"},
        {id:54, pId:5, name:"佛山"},
        {id:6, pId:0, name:"福建省", open:true, nocheck:true},
        {id:61, pId:6, name:"福州"},
        {id:62, pId:6, name:"厦门"},
        {id:63, pId:6, name:"泉州"},
        {id:64, pId:6, name:"三明"}
      ]
    };
  },
  created() {},
  mounted() {
    console.log(validate.strIdNumBorthday("130424199208261617"));
  },
  methods: {}
})
export default class Demo extends Vue {

  selectObj = {};
  dialogTest: boolean = false;
  demoDetailsDiglog: boolean = false;
  resumeDiglog: boolean = false;

  // 在实例创建完成后被立即调用
  created() {
    console.log("demo created");
  }

  labelPosition = "top";
  formLabelAlign = {
    name: "",
    region: "",
    type: "",
    borthday: "2019-01-01",
    sex: "1"
  };
  value1 = "";
  value2 = "";
  rules = {
    name: this.$rule.type1,
    idNum: this.$rule.type2
  };
  options = [
    {
      value: "选项1",
      label: "黄金糕"
    },
    {
      value: "选项2",
      label: "双皮奶"
    },
    {
      value: "选项3",
      label: "蚵仔煎"
    },
    {
      value: "选项4",
      label: "龙须面"
    },
    {
      value: "选项5",
      label: "北京烤鸭"
    }
  ];
  value4 = "";
  value5 = "";
  value7 = "";

  tableData = [
    {
      date: "2016-05-02",
      name: "王小虎",
      city: "01",
      address: ""
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      city: "02",
      address: ""
    },
    {
      date: "2016-05-01",
      name: "王小虎",
      city: "03",
      address: ""
    },
    {
      date: "2016-05-03",
      name: "王小虎",
      city: "04",
      address: ""
    }
  ];
  addrOptions = [
    {
      code: "01",
      value: "上海"
    },
    {
      code: "02",
      value: "北京"
    },
    {
      code: "03",
      value: "广州"
    },
    {
      code: "04",
      value: "其他"
    }
  ];
  //搜索表单展开项
  collapseActive = ["1"];
  //表单对象
  selectForm = {};
  // 查询条件初始化
  keyWords: object = {
    name: "",
    idNum: "",
    registerDate: "",
    registerStartdate: "",
    registerEnddate: ""
  };

  addRow() {
    let myDate = new Date();
    let obj = {
      date:
        myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate(),
      name: "",
      address: ""
    };
    this.tableData.push(obj);
  }
  goTabs(){
    this.$router.push({name:"demo8"})
  }
  delRow(index) {
    console.log(index);
    this.tableData.splice(index, 1);
  }

  showDetail(item) {
    alert(JSON.stringify(item));
  }

  revise(index, row) {
    this.selectObj = row;
    // this.show(val)
    let that = this;

    this.dialogTest = true;

    setTimeout(function() {
      that.$refs.modalPara.initPara(row);
    }, 1);
  }

  modifyTest(obj) {
    this.tableData = obj;
    this.dialogTest = false;
    console.log(obj);
  }

  /**
   * 身份证号码带出出生年月
   *
   */
  changeIdNo() {
    this.formLabelAlign.borthday = validate.strIdNumBorthday(
      this.formLabelAlign.idNum
    ).borthday;
    this.formLabelAlign.sex = validate.strIdNumBorthday(
      this.formLabelAlign.idNum
    ).sex;
  }
    /**
     * 关闭打印页面
     *
     */
    closeCommonPrint(){
        this.commonPrintFlag=false
        this.commonPrintFlag2=false
    }

    /**
     * 打印测试
     */
    printDemo(){
        this.commonPrintFlag=true
        let that=this;
        setTimeout(()=>{
            that.$refs.print.goPrint()
        },1)


    }
    /**
     * 打印测试2
     */
    printDemo2(){
        this.commonPrintFlag2=true
        let that=this;
        setTimeout(()=>{
            that.$refs.print.goPrint()
        },1)


    }
    goDemo(target){
        console.log('aaaaaaa')
        let url='demo'+target
        this.$router.push({name:url})
    }
    test(target,target1){
      console.log(target)
      console.log(this.$refs.cascader)
    }

}
</script>
<style lang="scss" scoped>
@import "~@/styles/dialogBox.scss";

.page {
  background: #f4f4f4;
  position: absolute;
  left: 0;
  right: 0;
  .title {
    font-size: 17px;
    font-weight: bold;
    color: #808080;
  }
  .container {
    margin: 16px;
    padding: 45px 32px 16px 32px;
		background: #fff;
		font-size:17px;
		.danger{
			color:#f7706c !important;
		}
  }
  /deep/ .el-collapse-item__wrap {
    border-bottom: none;
  }
  /deep/ .el-collapse-item__header {
    border-bottom: none;
	}

}
</style>

