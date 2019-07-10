
<template>
  <div>
    <div class="demo-input-suffix">
      属性方式：
      <el-input
        placeholder="请选择日期"
        suffix-icon="el-icon-date"
        v-model="input2">
      </el-input>
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input21">
      </el-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name : "education",
  components: {},
  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {}
})
export default class auditReview extends Vue {
  showCases = [];
  //case
  allCases: any = [
    {
      caseTitle: "测试自办案件01",
      caseState: "1",
      personnel: "李某",
      registrationTime: "2019-02-25 15:31",
      term: "10天",
      termState: "1",
      caseLink: "会议审议"
    },
    {
      caseTitle: "测试自办案件01",
      caseState: "2",
      personnel: "李某",
      registrationTime: "2019-02-25 15:31",
      term: "10天",
      termState: "2",
      caseLink: "案件审核"
    }
  ];
  unWaitAcceptanceCases: any = [];
  activeIndex: string = "1";
  caseSupplementFlag = false;
  caseDetailsFlag:boolean = false
  handleSelect(key) {
    if (key == 1) {
      this.showCases = this.allCases;
    } else if (key == 2) {
      console.log(2);
      this.showCases = this.unWaitAcceptanceCases;
    }
  }
  caseSupplement(val) {
    this.caseSupplementFlag = true;
  }
  caseDetails(val){
    this.caseDetailsFlag = true
  }
  mounted() {
    this.showCases = this.allCases;
    this.allCases.forEach(item => {
      if (item.caseState == "1") {
      } else {
        this.unWaitAcceptanceCases.push(item);
      }
    });
  }
}
</script>
<style scoped>
@import "~@/styles/dialogBox.scss";
.title {
  text-align: left;
  font-size: 30px;
  padding-left: 40px;
  color: #000;
}
.el-menu-demo {
  margin: 20px;
}
.el-menu-demo >>> .el-menu-item {
  font-size: 20px;
  color: #121312;
}
.el-menu-demo .meau-item {
  padding: 0 20px;
}
.el-menu-demo >>> .el-badge__content {
  top: 15px;
  background-color: red;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.cards {
  text-align: left;
}
.box-card >>> .el-card__header {
  background: #c2dbf9;
  font-size: 21px;
  font-weight: bold;
}
.clearfix {
  position: relative;
}
.case-content .term-state {
  display: inline-block;
  height: 25px;
  padding: 0px 5px;
  left: 5%;
  top: 0;
  font-size: 14px;
  font-weight: bold;
  background: #4caf50;
  text-align: center;
  line-height: 25px;
  color: #fff;
  border-radius: 2px;
}
.clearfix .title-state {
  display: inline-block;
  width: 50px;
  height: 25px;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 14px;
  font-weight: bold;
  background: #ffb800;
  text-align: center;
  line-height: 25px;
  color: #fff;
  border-radius: 2px;
}

.box-card {
  width: 410px;
  height: 300px;
  text-align: left;
  margin-top: 30px;
  margin-left: 3.5%;
  display: inline-block;
}
.case-content {
  padding-left: 5px;
  font-size: 1em;
}
.case-btn {
  padding-top: 10px;
}
.case-btn .el-button {
  padding: 1px 11px;
  height: 25px;
}
.displayNone >>> .el-badge__content {
  display: none;
}
</style>