<template>
  <div class="query-box-scroll
">
    <div class="el-main bg-layout">
      <div class="block search-Item">
        <el-form :inline="true" :model="keyWords" class="form-label-right-query" ref="keyWords">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="案件名称：" prop="caseName">
                <el-input v-model="keyWords.name" placeholder="姓名" :required="false"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="转送时间：" prop="caseName">
                <el-date-picker
                  v-model="value7"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['00:00:00', '23:59:59']"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label prop="caseName">
                <el-button type="primary" size="mini" @click="search()" icon="el-icon-search">查询</el-button>
                <el-button size="mini" icon="el-icon-refresh" @click="resetForm('formInline')">重置</el-button>
                <el-button
                  v-show="!moreFlag"
                  type="text"
                  size="small"
                  @click="moreFlag=!moreFlag"
                  icon="el-icon-more"
                >高级查询</el-button>
                <el-button
                  v-show="moreFlag"
                  type="text"
                  size="small"
                  @click="moreFlag=!moreFlag"
                  icon="el-icon-more"
                >普通查询</el-button>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6" v-show="moreFlag">
              <el-form-item label="案件类型：" prop="caseName">
                <el-select v-model="keyWords.region" placeholder="请选择" class="form_select">
                  <el-option label="直查案件" value="1"></el-option>
                  <el-option label="报批案件" value="2"></el-option>
                  <el-option label="直查后通报下级单位" value="4"></el-option>
                  <el-option label="下级单位调查" value="5"></el-option>
                  <el-option label="司法移送案件" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" v-show="moreFlag">
              <el-form-item label="案件来源：" prop="caseName">
                <el-select v-model="keyWords.region1" placeholder="请选择" class="form_select">
                  <el-option label="司法机关移送" value="1"></el-option>
                  <el-option label="信访部门移交" value="2"></el-option>
                  <el-option label="审查调查移交" value="4"></el-option>
                  <el-option label="下级部门报批" value="4"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="block margin-top">
        <el-row class="title">检索结果</el-row>
        <div class="table">
          <el-table
            :data="tableData"
            border
            height="auto"
            :header-cell-class-name="'table-header-bg'"
            :row-class-name="'table-header-bg1'"
            :cell-class-name="'tableContent-bg'" >
            <el-table-column label="序号" type="index" width="100" align="center"></el-table-column>
            <el-table-column prop="caseName" label="案件名称" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column prop="caseSource" label="案件类型" align="center"></el-table-column>
            <el-table-column prop="date" label="转送时间" width="150" align="center"></el-table-column>
            <el-table-column prop="workUnit" label="转送单位" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column fixed="right" label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="text" size="mini" @click="caseSupplement(scope.row)">查看详情</el-button>
                <el-button type="text" size="mini" @click="caseNote(item)">案件受理</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-row>
            <div class="block page-positton">
              <el-pagination
                :page-sizes="[10, 20, 50, 100]"
                :page-size="10"
                small
                background
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length"
              ></el-pagination>
            </div>
          </el-row>
        </div>
      </div>
    </div>
    <el-dialog title="案件详情" :visible.sync="caseSupplementFlag" class="mc-dialog-big" width="100%" top="0">
      <caseRegister ref="caseReg" :myData="source"></caseRegister>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import caseRegister from "../modal/caseRegister1.vue";

@Component({
  name: "demo2",
  components: { caseRegister },
  data() {
    return {
      tableData: [
        {
          caseName: "张**贪污案", //案件名称
          number: "审理案件", //案件类型
          date: "2019-01-12", //转送时间
          workUnit: "本级**单位",
          caseSource: "直查案件",
          source:'SL',
          personName:'张某某'
        },
        {
          caseName: "李**贪污案",
          number: "审理案件", //案件类型
          date: "2019-01-22",
          workUnit: "本级**单位",
          caseSource: "直查案件",
          source:'SL',
          personName:'李某某'
        },
        {
          caseName: "韩**贪污案",
          number: "审理案件", //案件类型
          date: "2019-01-22",
          workUnit: "正师级单位机关",
          caseSource: "报批案件",
          source:'SL',
           personName:'韩某某'
        },
        {
          caseName: "张**贪污案",
          number: "审理案件", //案件类型
          date: "2019-01-22",
          workUnit: "旅团级单位机关",
          caseSource: "司法移送",
          source:'SL',
           personName:'张某某'
        },
        {
          caseName: "杜**贪污案",
          number: "审核案件",
          date: "2019-01-22",
          workUnit: "基层单位",
          caseSource: "直查后通报大单位",
          source:'SH',
           personName:'杜某某'
        },
        {
          caseName: "张**贪污案",
          number: "审核案件",
          date: "2019-01-22",
          workUnit: "副军级单位机关",
          caseSource: "下级单位调查",
          source:'SH',
           personName:'张某某'
        },
        {
          caseName: "杜**贪污案",
          number: "审核案件",
          date: "2019-01-22",
          workUnit: "基层单位",
          caseSource: "司法移送",
          source:'SH',
           personName:'杜某某'
        },
        {
          caseName: "张**贪污案",
          number: "提前介入审理",
          date: "2019-01-22",
          workUnit: "正军级单位机关",
          caseSource: "直查",
          source:'TQJR',
           personName:'张某某'
        },
        {
          caseName: "张**贪污案",
          number: "提前介入审理",
          date: "2019-01-22",
          workUnit: "正军级单位机关",
          caseSource: "下级单位调查",
          source:'TQJR',
           personName:'张某某'
        },
        {
          caseName: "张**贪污案",
          number: "提前介入审理",
          date: "2019-01-22",
          workUnit: "正军级单位机关",
          caseSource: "下级单位调查",
          source:'TQJR',
           personName:'张某某'
        }
      ],
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
      value: "",
      value1: "",
      value7: "", 
      formLabelWidth: "20%"
    };
  },
  created() {},
  mounted() {},
  methods: {}
})
export default class Demo extends Vue {
  source='';
  moreFlag: boolean = false;
  caseSupplementFlag: boolean = false;
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
  caseSupplement(item){
      this.source=item.source;
      this.caseSupplementFlag=true;
        let that=this;
            setTimeout(function(){
                that.$refs.caseReg.getItemData(item);
         },1);
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
}
</script>
<style lang="scss" scoped>
@import "~@/styles/queryList.scss";
</style>
