<template style="background: #f1f1f1">
    <div>
        <div class="cards2">
            <el-row :gutter="20">
                <el-card class="box-card2" v-for="(item,index) in showCases" :key="index">
                    <div class="title_state" v-if="item.caseState == '1'"><img src="img/corner.png" alt="">
                        <span>待审核</span></div>
                    <div class="title_state" v-if="item.caseState == '2'"><img src="img/corner.png" alt="">
                        <span>审核中</span></div>
                    <div slot="header" class="clearfix">
                    <span>
                      <el-button type="primary" style="border: none;margin-left: -10px;height: 24px; width: 24px;" plain
                                 size="small" icon="el-icon-document" circle></el-button>
                      {{item.caseTitle}}
                    </span>
                    </div>
                    <div class="case_content">
                        <el-form ref="form" :model="form" label-width="120px">
                            <el-form-item label="被审查调查人员" class="card-form-item">
                                {{item.personnel}}
                            </el-form-item>
                            <el-form-item label="案件登记时间" class="card-form-item">
                                {{item.registrationTime}}
                            </el-form-item>
                            <el-form-item label="形式审核期限" class="card-form-item">
                                {{item.term}}
                                <div class="term_state" v-if="item.termState == '1'">正常</div>
                                <div class="term_state term_state_2" v-if="item.termState == '2'">超期</div>
                            </el-form-item>
                            <el-form-item label="案件接收时间" class="card-form-item">
                                {{item.registrationTime}}
                            </el-form-item>

                        </el-form>
                    </div>
                    <div class="card-bottom-btn">
                        <el-row>
                            <el-col :span="8" style="margin: 5px 0">
                                <el-button class="minist-btn" size="mini" round @click="caseSupplement(item)">补充完善
                                </el-button>
                            </el-col>
                            <el-col :span="8" style="margin: 5px 0">
                                <el-button class="minist-btn" size="mini" round @click="caseDetails(item)">查看详情
                                </el-button>
                            </el-col>
                            <el-col :span="8" style="margin: 5px 0">
                                <el-button class="minist-btn" size="mini" round @click="formAudit(item)">形式审核
                                </el-button>
                            </el-col>
                        </el-row>
                    </div>


                    <div class="card-bottom">
                        <img src="img/node.png" style=" position: relative;left: 12%;top: 8%;">
                        <span>当前节点：形式审核</span>
                        <el-button type="primary" size="mini" round @click="showStateLine('案件执行')"> 详情  </el-button>

                    </div>


                </el-card>

            </el-row>
        </div>
        <el-dialog title="案件基本情况" :visible.sync="caseSupplementFlag" class="mc-dialog-big" width="100%" top="0">
            <CaseSupplement></CaseSupplement>
        </el-dialog>
        <el-dialog title="查看详情" :visible.sync="caseDetailsFlag" width="100%" top="0">
            <CaseSupplement></CaseSupplement>
        </el-dialog>
        <el-dialog class="mc-dialog-big" title="形式审核" :visible.sync="formAuditFlag" width="100%" top="0">
            <FormAuditFlag></FormAuditFlag>
        </el-dialog>
        <!--<el-dialog title="案件受理" :visible.sync="caseAcceptanceFlag" width="100%" top="0">
          <CaseSupplement></CaseSupplement>
        </el-dialog>-->
        <el-dialog title="回退记录" :visible.sync="rollbackRecordFlag" width="100%" top="0">
            <CaseSupplement></CaseSupplement>
        </el-dialog>
        <el-dialog class="mc-dialog-medium jindu" :visible.sync="showStateLineFlag" width="100%" top="0">
            <StateLine ref="stateLine"></StateLine>
        </el-dialog>
        <el-dialog class="mc-dialog-big"  title="初审情况" :visible.sync="fistTrailModal" width="100%" top="0" style="background: #ffffff">
            <FirstTrail></FirstTrail>

        </el-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import CaseSupplement from "./modal/caseSupplement.vue";
    import StateLine from "./modal/stateLine.vue";
    import FormAuditFlag from "./modal/caseFormAudit.vue";
    import FirstTrail from "./firstTrial.vue";

    @Component({
        name: "formAudit",
        components: {CaseSupplement, FormAuditFlag, StateLine,FirstTrail},
        data() {
            return {
                form: {}
            };
        },

        created() {
        },
        mounted() {
        },
        methods: {}
    })
    export default class formAudit extends Vue {
        showCases = [];
        //case
        allCases: any = [
            {
                caseTitle: "移送案件",
                caseState: "1",
                personnel: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "10天",
                termState: "1"
            },
            {
                caseTitle: "测试自办案件04",
                caseState: "1",
                personnel: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "10天",
                termState: "1"
            },
            {
                caseTitle: "测试自办案件05",
                caseState: "1",
                personnel: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "10天",
                termState: "1"
            },
            {
                caseTitle: "测试自办案件02",
                caseState: "2",
                personnel: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "10天",
                termState: "2"
            },
            {
                caseTitle: "测试自办案件03",
                caseState: "2",
                personnel: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "10天",
                termState: "1"
            }
        ];
        waitAcceptanceCases: any = [];
        unWaitAcceptanceCases: any = [];
        activeIndex: string = "1";
        caseSupplementFlag: boolean = false
        caseDetailsFlag: boolean = false
        formAuditFlag: boolean = false
        caseAcceptanceFlag: boolean = false
        rollbackRecordFlag: boolean = false
        showStateLineFlag: boolean = false
        fistTrailModal: boolean = false

        handleSelect(key) {
            key = Number(key.index) + 1;
            if (key == 1) {
                this.showCases = this.allCases;
            } else if (key == 2) {
                console.log(2);
                this.showCases = this.waitAcceptanceCases;
            } else if (key == 3) {
                this.showCases = this.unWaitAcceptanceCases;
            }
        }

        caseSupplement(val) {
            this.caseSupplementFlag = true
        }

        caseDetails(val) {
            this.caseDetailsFlag = true
        }

        formAudit(val) {
            this.formAuditFlag = true
        }

        caseAcceptance(val) {
            this.caseAcceptanceFlag = true
        }

        rollbackRecord(val) {
            this.rollbackRecordFlag = true
        }

        showStateLine(val) {
            // this.show(val)
            let that = this;

            this.showStateLineFlag = true

            setTimeout(function () {
                that.$refs.stateLine.focusStep(val)

            }, 1)
        }

        mounted() {

            this.showCases = this.allCases;
            this.allCases.forEach(item => {
                if (item.caseState == "1") {
                    this.waitAcceptanceCases.push(item);
                } else {
                    this.unWaitAcceptanceCases.push(item);
                }
            });
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/card2.scss";
    @import "~@/styles/common.scss";

    .my-badge-list {
        position: relative;
        top: 62px;
        right: 39.5%;

        .my-badge {
            padding: 2px 5px;
            line-height: 20px;
            text-align: center;
            background-color: red;
            color: white;
            font-size: 4px;
            font-weight: 700;
            border-radius: 50%;
            position: relative;
            bottom: 45px;
            left: -20px;

        }
        /deep/ .be3 {

        }
        /deep/ .be2 {

        }
    }

    .el-badge__content {
        position: relative;
    }

    .el-tabs {
        margin-left: 3%;
    }

    /deep/ .el-badge__content {
        position: relative;
        top: -72px;
        left: 9%;
    }

    .title {
        text-align: left;
        font-size: 16px;
        padding-left: 40px;
        color: #000;
        font-weight: 500;
        margin-top: 8px;
        margin-bottom: 10px;
        margin-left: -21px;
    }

    .el-menu-demo {
        margin: -6px 20px 0px 20px;
        /deep/ .el-menu-item {
            font-size: 16px;
            color: #121312;
            text-align: center;
            padding: 0;
        }
        .meau-item {
            padding: 0 20px;
            font-size: 13px;
        }
        /deep/ el-badge__content {
            background-color: red;
        }
    }

    .displayNone {
        /deep/ .el-badge__content {
            display: none;
        }
        #picture {
            margin-top: 50px;
            margin-left: 50px;
            width: 50px;
            height: 50px;
        }
        /deep/ .badge {
            padding: 2px 5px; /* 不需要定义height与width，添加合适的padding使圆圈随字符长短变化而改变 */
            line-height: 20px;
            text-align: center;
            background-color: red;
            color: white;
            font-size: 12px;
            font-weight: 700;
            border-radius: 50%;
            position: relative;
            bottom: 45px;
            left: -20px;
        }
    }

    .jindu {
     width: 65%;
     height: 17%;
     margin:auto auto;
      background: white;
    /deep/.el-dialog{
      height:100%;
    } 
    /deep/.el-dialog__body{
      padding:0px;
      height:71%;
       margin-top: -23px;
    }
   
  } 

</style>