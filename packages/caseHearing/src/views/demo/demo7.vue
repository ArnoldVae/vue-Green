<template>
  <div class="query-box">
    <div class="el-main bg-layout">
      <div class="block search-Item">
        <el-form :inline="true" :model="keyWords" class="form-label-right-query" ref="keyWords">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="输入框一：" prop="caseName">
                <el-input  ref='idcardType' v-model="keyWords.name" placeholder="姓名" :required="false"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="部职别：" prop="caseName">
                <el-input placeholder="请输入内容" v-model="inputBZB1">
                  <el-cascader
                    slot="prepend"
                     ref='idcard2Type' 
                    :options="optionsBZB"
                    v-model="selectBZB1"
                    style=" width: 420px;"
                  ></el-cascader>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label prop="caseName">
                <el-button type="primary" size="mini" @click="queryItems()" icon="el-icon-search">查询</el-button>
                <el-button size="mini" icon="el-icon-refresh" @click="resetForm('formInline')">重置</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="1">
              <el-form-item label prop="caseName">
                <el-tooltip
                  v-show="!moreFlag"
                  class="item"
                  effect="dark"
                  content="更多查询项"
                  placement="top-end"
                >
                  <el-button type="text" size="small" @click="moreFlag=!moreFlag">
                    <span class="iconfont iconfont-title">&#xe673;</span>
                  </el-button>
                </el-tooltip>
                <el-tooltip
                  v-show="moreFlag"
                  class="item"
                  effect="dark"
                  content="收起查询项"
                  placement="top-end"
                >
                  <el-button type="text" size="small" @click="moreFlag=!moreFlag">
                    <span class="iconfont iconfont-title">&#xe671;</span>
                  </el-button>
                </el-tooltip>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20" v-show="moreFlag">
            <el-col :span="6">
              <el-form-item label="下拉：" prop="caseName">
                <el-select v-model="keyWords.region" placeholder="请选择" class="form_select">
                  <el-option label="直查案件" value="1"></el-option>
                  <el-option label="报批案件" value="2"></el-option>
                  <el-option label="直查后通报下级单位" value="4"></el-option>
                  <el-option label="下级单位调查" value="5"></el-option>
                  <el-option label="司法移送案件" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="问题类别：" prop="caseName">
                <el-input placeholder="请输入内容" v-model="inputWTLB">
                  <el-button slot="append" icon="icon-hand">选择</el-button>
                </el-input>
              </el-form-item>
            </el-col>
            <!--<el-col :span="6">-->
            <!--<el-form-item label="基本情况：" prop="caseName">-->
            <!--<el-input v-model="keyWords.name7" placeholder="请输入"></el-input>-->
            <!--</el-form-item>-->
            <!--</el-col>-->
          </el-row>
          <el-row :gutter="20" v-show="moreFlag">
            <el-col :span="6">
              <el-form-item label="下拉：" prop="caseName">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="基本情况：" prop="caseName">
                <el-input v-model="keyWords.name7" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="基本情况：" prop="caseName">
                <el-input v-model="keyWords.name7" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="block search-result">
        <el-row class="title">
          检索结果
          <span class="title-new-title">新增</span>
          <span class="el-icon-plus"></span>
        </el-row>
        <div class="table">
          <el-table
            :data="tableData.result"
            border
            :row-key="getRowKeys"
            ref="multipleTable"
            :header-cell-class-name="'table-header-bg'"
            :row-class-name="'table-header-bg1'"
            @selection-change="handleSelectionChange"
            :cell-class-name="'tableContent-bg'"
          >
            <el-table-column type="selection" :reserve-selection='true'    width="55"></el-table-column>
            <el-table-column label="序号" type="index" width="100" align="center"></el-table-column>
            <el-table-column
              v-for="(item,key) in columnsConfig"
              :key="key"
              :label="item.label"
              :width="item.width"
              align="center"
              :prop="item.prop"
            ></el-table-column>
            <el-table-column fixed="right" label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="text" size="mini" @click="caseSupplementFlag=true">查看详情</el-button>
                <el-button type="text" size="mini" @click="caseNote(item)">接收</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-row>
            <div class="block page-positton-insert">
              <el-pagination
                :page-sizes="[10, 20, 50, 100]"
                :page-size="tableData.pageSize"
                @prev-click='queryItems(tableData.allcount)'
                @next-click	='queryItems2(tableData.allcount)'
                @size-change="queryItems(tableData.allcount)"
                small
                background
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.allcount"
              ></el-pagination>
            </div>
          </el-row>
          <ul><li v-for="item in multipleSelection">
            {{item}}
            
            </li></ul>
          
        </div>
      </div>
     
    </div>
    <el-dialog
      title="案件基本情况"
      :visible.sync="caseSupplementFlag"
      class="mc-dialog-big"
      width="100%"
      top="0"
    >
      <caseRegister ref="caseReg"></caseRegister>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import caseRegister from "../evocatoryRes/modal/caseRegister1.vue";
// const tableSpanning = require("../../utils/tableSpanning");

@Component({
  name: "demo2",
  components: { caseRegister },
  data() {
    return {
      multipleSelection: [],
      columnsConfig: [
        {
          prop: "caseName",
          width: "120",
          label: "案件名称"
        },
        {
          prop: "number",
          label: "案件类型"
        },
        {
          prop: "caseSource",
          label: "案件来源"
        },
        {
          prop: "date",
          width: "150",
          label: "转送时间"
        },
        {
          prop: "workUnit",
          label: "转送单位"
        }
      ],
      inputWTLB: "",
      options: [
        {
          value: "1",
          label: "审理案件"
        },
        {
          value: "2",
          label: "审核案件"
        },
        {
          value: "3",
          label: "提前介入案件"
        }
      ],
      optionsBZB: [
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
        }
      ],
      value: "",
      value1: "",
      formLabelWidth: "20%"
    };
  },
  created() {},
  mounted() {
    console.log(this.$refs)
  },
  methods: {}
})
export default class Demo extends Vue {
  @Action GetItems: any;
  @Action GetItems2: any;

  moreFlag: boolean = false;
  caseSupplementFlag: boolean = false;
  selectBZB1 = "";
  inputBZB1 = "";
  tableData = [];

  //        案件签收
  caseNote(item) {
    this.$confirm("您确定要接收当前案件？ 接收后不可退回!", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        this.$message({
          type: "success",
          message: "接收成功!"
        });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消接收"
        });
      });
  }

  // 在实例创建完成后被立即调用
  created() {
    console.log("demo created");
  }

  //搜索表单展开项
  collapseActive = ["1"];
  //表单对象
  selectForm = {};
  // 查询条件初始化
  keyWords: object = {
    name: "",
    registerDate: "",
    registerStartdate: "",
    registerEnddate: ""
  };
  
  queryItems(): void {
    this.GetItems().then(res => {
      this.tableData = res;
      // console.log(tableSpanning.get('demo'))
      // this.tableData=tableSpanning.selectedItem(this.tableData,tableSpanning.get('demo'),this.$refs.multipleTable)
    });
  }
  queryItems2(): void {
    this.GetItems2({}).then(res => {
      this.tableData = res;
      // console.log(tableSpanning.get('demo'))
      // this.tableData=tableSpanning.selectedItem(this.tableData,tableSpanning.get('demo'),this.$refs.multipleTable)
    });
  }

  handleSelectionChange(val) {
    this.multipleSelection = val;
    console.log(this.multipleSelection)
    // tableSpanning.set(this.multipleSelection, "demo");
  }
  getRowKeys(row){
     return row.orderid;
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/queryList.scss";
</style>
