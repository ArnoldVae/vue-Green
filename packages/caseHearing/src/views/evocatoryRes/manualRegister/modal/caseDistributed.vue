<template>
  <div class="query-box-scroll">
    <div class="el-main bg-layout">
      <div class="block search-Item">
        <el-collapse v-model="collapseActive">
          <el-collapse-item name="1">
            <el-row slot="title" class="title">检索查询</el-row>
            <el-form
              :inline="true"
              :model="keyWords"
              ref="keyWords"
              class="form-label-right-query"
              style="margin-top: 10px;"
            >
              <el-row :gutter="20">
                <el-col :span="6">
                  <el-form-item label="案件名称：" prop="caseName">
                    <el-input v-model="formInline.caseName" placeholder="案件名称"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="登记日期：">
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
                <el-col :span="6">
                  <el-form-item label="案件类别：">
                    <el-select v-model="formInline.case" placeholder="请选择" class="form_select">
                      <el-option
                        v-for="(option,index) in rankList"
                        :key="index"
                        v-bind:label="option.value"
                        v-bind:value="option.code"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6">
                  <el-form-item label="案件状态：" prop="caseName">
                    <el-radio-group v-model="formInline.state" @change="show">
                      <el-radio label="0" size="medium">待受理</el-radio>
                      <el-radio label="1" size="medium">已受理</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item>
                    <el-button type="primary" size="small">查询</el-button>
                    <el-button size="small" @click="resetForm('formInline')">重置</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="block margin-top">
        <el-row class="title">检索结果</el-row>
        <div class="table">
          <el-table
            :data="tableData"
            border
            height="auto"
            max-height="100%"
            :header-cell-class-name="'table-header-bg'"
            :row-class-name="'table-header-bg1'"
            :cell-class-name="'tableContent-bg'"
          >
            <!-- <el-table-column  type="selection"  width="40">  </el-table-column> -->
            <el-table-column prop="id" label="案件编号" width="180" align="center"></el-table-column>
            <el-table-column
              prop="caseName"
              label="案件名称"
              width="180"
              align="center"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column prop="date" label="登记时间" align="center"></el-table-column>
            <el-table-column prop="name" label="被调查人姓名" align="center"></el-table-column>
            <el-table-column prop="acceptDept" label="承办部门" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column prop="acceptPerson" label="承办人" align="center"></el-table-column>
            <el-table-column prop="caseState" label="案件状态" align="center"></el-table-column>
            <el-table-column fixed="right" label="操作" align="center" width="120">
              <template slot-scope="scope">
                <el-button type="text" size="medium">查看</el-button>
                <el-button type="text" size="medium">编辑</el-button>
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
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Store from './store'
@Component({
  components: {},
  data() {
    return {
      tableData: [],
      tableData0: [],
      tableData1: [
        {
          id: "00000000000020190010",
          caseName: "测试自办案件01",
          date: "2019-02-25 12:01:49",
          name: "李某某",
          acceptDept: "审理一处",
          acceptPerson: "测试四",
          caseState: "待受理"
        },
        {
          id: "00000000000020190010",
          caseName: "测试自办案件01",
          date: "2019-02-25 12:01:49",
          name: "李某某",
          acceptDept: "审理一处",
          acceptPerson: "测试四",
          caseState: "待受理"
        },
        {
          id: "00000000000020190010",
          caseName: "测试自办案件01",
          date: "2019-02-25 12:01:49",
          name: "李某某",
          acceptDept: "审理一处",
          acceptPerson: "测试四",
          caseState: "待受理"
        },
        {
          id: "00000000000020190010",
          caseName: "测试自办案件01",
          date: "2019-02-25 12:01:49",
          name: "李某某",
          acceptDept: "审理一处",
          acceptPerson: "测试四",
          caseState: "待受理"
        },
        {
          id: "00000000000020190010",
          caseName: "测试自办案件01",
          date: "2019-02-25 12:01:49",
          name: "李某某",
          acceptDept: "审理一处",
          acceptPerson: "测试四",
          caseState: "待受理"
        }
      ],
      formInline: {
        caseName: "",
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        state: "0",
        case: "01"
      },
      rankList: [
        { code: "01", value: "审理案件" },
        { code: "02", value: "审核案件" },
        { code: "03", value: "提前介入审理案件" },
        { code: "04", value: "申诉复查案件" }
      ],
      value7: "",
      formLabelWidth: "20%"
    };
  },
  created() {
    console.log("hahaha");
  },
  mounted() {
    // console.log(Store)
    console.log("信访子系统首页");
    console.log(this.$route.params);
    let s = this.$route.params.state;
    this.formInline.state = s;
    this.formInline.case = this.$route.params.case;
    if (s == "0") {
      this.tableData = this.tableData0;
    } else {
      this.tableData = this.tableData1;
    }
  },
  methods: {}
})
export default class CaseDistributed extends Vue {
  $refs: {
    audio: HTMLAudioElement;
    lyricsLines: HTMLDivElement;
  };
  collapseActive = ["1"];
  // 查询条件初始化
  keyWords: object = {
    name: "",
    registerDate: ""
    // registerStartdate:"",
    // registerEnddate:""
  };
  resetForm(formName) {
    this.$refs[formName].resetFields();
  }
  handleCurrentChange() {}
  show() {
    if (this.formInline.state == "0") {
      this.tableData = this.tableData0;
    } else {
      this.tableData = this.tableData1;
    }
  }
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/queryList.scss";
</style>