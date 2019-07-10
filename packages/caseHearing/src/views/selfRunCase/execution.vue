
<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <el-badge :value="waitAcceptanceCases.length" class="item" :class="{displayNone : allCases.length==0}">
          <div class="meau-item">案件执行</div>
        </el-badge>
      </el-menu-item>
      <el-menu-item index="2">
        <el-badge
          :value="unWaitAcceptanceCases.length"
          class="bottom18"
          :class="{displayNone : unWaitAcceptanceCases.length==0}"
        >
          <div class="meau-item">结案登记</div>
        </el-badge>
      </el-menu-item>
    </el-menu>
    <div class="cards2">
      <el-row :gutter="20">
        <el-card class="box-card2" v-for="(item,index) in showCases" :key="index">
          <div class="title_state" v-if="item.caseState == '0'"><img src="img/corner.png" alt=""> <span>待受理</span></div>
          <div slot="header" class="clearfix">
                    <span>
                      <el-button type="primary" style="border: none;margin-left: -10px;height: 24px; width: 24px;" plain size="small" icon="el-icon-document" circle></el-button>
                      {{item.caseTitle}}
                    </span>
          </div>
          <div class="case_content">
            <el-form ref="form" :model="form" label-width="120px"  >
              <el-form-item label="被审查调查人员"  class="card-form-item">
                {{item.personnel}}
              </el-form-item>
              <el-form-item label="案件登记时间" class="card-form-item">
                {{item.registrationTime}}
              </el-form-item>
              <el-form-item label="案件受理期限" class="card-form-item">
                {{item.term}}<div class="term_state" v-if="item.termState == '1'">正常</div>
                <div class="term_state term_state_2" v-if="item.termState == '2'">超期</div>
              </el-form-item>

            </el-form>

          </div>
          <div  class="card-bottom-btn">
            <el-row >
              <el-col :span="8" style="margin: 10px 0"><el-button class="minist-btn" size="mini"  round @click="caseSupplement(item)">补充完善</el-button></el-col>
              <el-col :span="8" style="margin: 10px 0"><el-button class="minist-btn" size="mini"  round @click="caseDetails(item)">查看详情</el-button></el-col>
              <el-col :span="8" style="margin: 10px 0" v-if="item.caseState == '1'"><el-button class="minist-btn"  size="mini"  round @click="zhiXing(item)" > 案件执行</el-button></el-col>
              <el-col :span="8" style="margin: 10px 0" v-if="item.caseState != '1'"><el-button class="minist-btn" size="mini"  round @click="rollbackRecord(item)">结案登记</el-button></el-col>
            </el-row>
          </div>
          <div class="card-bottom">
            <img src="img/node.png" style=" position: relative;left: 12%;top: 8%;">
            <span>当前节点：案件执行</span>
            <el-button type="primary" size="mini" round >  详情  </el-button>

          </div>


        </el-card>

      </el-row>
    </div>
    <el-dialog title="案件基本情况"  class="mc-dialog-big" :visible.sync="caseSupplementFlag" width="100%" top="0">
      <CaseSupplement></CaseSupplement>
    </el-dialog>
    <el-dialog title="查看详情" :visible.sync="caseDetailsFlag" width="100%" top="0">
      <CaseSupplement></CaseSupplement>
    </el-dialog>
    <el-dialog class="mc-dialog-big jwjw-dialog-big" title="案件执行" :visible.sync="zhiXingFlag" width="100%" top="0">
      <CaseExecution></CaseExecution>
    </el-dialog>
    <el-dialog title="案件受理" :visible.sync="caseAcceptanceFlag" width="100%" top="0">
      <CaseSupplement></CaseSupplement>
    </el-dialog>
    <!--<el-dialog title="回退记录" :visible.sync="rollbackRecordFlag" width="100%" top="0">
      <CaseSupplement></CaseSupplement>
    </el-dialog>-->
    <el-dialog class="mc-dialog-big" title="结案登记" :visible.sync="rollbackRecordFlag" width="100%" top="0">
      <RollbackRecord></RollbackRecord>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CaseSupplement from "./modal/caseSupplement.vue";
import CaseExecution from "./modal/caseExecution.vue";
// import RollbackRecord from "./modal/caseWindUp.vue";
@Component({
  name : "execution",
  components: { CaseSupplement,CaseExecution },
  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {}
})
export default class formAudit extends Vue {
  showCases = [];
  //case
  allCases: any = [
    {
      caseTitle: "测试自办案件01",
      caseState: "1",
      personnel: "李某",
      registrationTime: "2019-02-25 15:31",
      link: "会议审议",
      term: "10天",
      termState: "1"
    },
    {
      caseTitle: "测试自办案件01",
      caseState: "1",
      personnel: "李某",
      registrationTime: "2019-02-25 15:31",
      term: "10天",
      link: "案件审核",
      termState: "1"
    },
    {
      caseTitle: "测试自办案件01",
      caseState: "2",
      personnel: "李某",
      registrationTime: "2019-02-25 15:31",
      term: "10天",
      link: "会议审议",
      termState: "1"
    },
  ];
  waitAcceptanceCases: any = [];
  unWaitAcceptanceCases: any = [];
  activeIndex: string = "1";
  caseSupplementFlag:boolean = false
  caseDetailsFlag:boolean = false
  formAuditFlag:boolean = false
  caseAcceptanceFlag:boolean = false
  rollbackRecordFlag:boolean = false
  zhiXingFlag:boolean = false
  
  handleSelect(key) {
    if (key == 1) {
      this.showCases = this.waitAcceptanceCases;
    } else if (key == 2) {
      this.showCases = this.unWaitAcceptanceCases;
    } 
  }
  caseSupplement(val) {
    this.caseSupplementFlag = true
  }
  caseDetails(val){
    this.caseDetailsFlag = true
  }
  zhiXing(val){
    this.zhiXingFlag = true
  }
  caseAcceptance(val){
    this.caseAcceptanceFlag = true
  }
  rollbackRecord(val){
    this.rollbackRecordFlag = true
  }
  mounted() {

    this.allCases.forEach(item => {
      if (item.caseState == "2") {
        this.unWaitAcceptanceCases.push(item);
      } else {
          this.waitAcceptanceCases.push(item)
      }
    });
      this.showCases = this.waitAcceptanceCases;
  }
}
</script>
<style <style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/card2.scss";
@import "~@/styles/common.scss";
@import "~@/styles/commonJWJW.scss";
.title {
    text-align: left;
    font-size: 30px;
    padding-left: 40px;
    color: #000;
    font-weight: 500;
    margin-top: 25px;
}
.el-menu-demo {
  margin: 5px 20px 0px 20px;
  /deep/.el-menu-item {
    font-size: 14px;
    color: #121312;
  }
  .meau-item {

 }
  /deep/.el-badge__content {
    top: 15px;
    background-color: red;
  }
}
.cards {
  text-align: left;
  height: 700px;
  overflow: auto;
}
.displayNone{
  /deep/.el-badge__content {
    display: none;
  }
  
}

</style>