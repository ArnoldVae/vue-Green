
<template>
    <div>
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
        >
            <el-menu-item index="3">
                <el-badge :value="waitingReceiptCases.length" class="item" :class="{displayNone : allCases.length==0}">
                    <div class="meau-item">待签收</div>
                </el-badge>
            </el-menu-item>
            <el-menu-item index="4">
                <el-badge :value="trialIngCases.length" class="item" :class="{displayNone : allCases.length==0}">
                    <div class="meau-item">审理中</div>
                </el-badge>
            </el-menu-item>
            <el-menu-item index="2">
                <el-badge
                        :value="unWaitAcceptanceCases.length"
                        class="bottom18"
                        :class="{displayNone : unWaitAcceptanceCases.length==0}"
                >
                    <div class="meau-item">暂停及中止审理</div>
                </el-badge>
            </el-menu-item>
            <el-menu-item index="1">
                <el-badge :value="allCases.length" class="item" :class="{displayNone : allCases.length==0}">
                    <div class="meau-item">全部案件</div>
                </el-badge>
            </el-menu-item>

        </el-menu>
        <div class="cards2">
            <el-row :gutter="20">
                <el-card class="box-card2" v-for="(item,index) in showCases" :key="index">
                    <div class="title_state" v-if="item.caseState == '3'"><img src="img/corner.png" alt=""> <span>待受理</span></div>
                    <div slot="header" class="clearfix">
                    <span>
                      <el-button type="primary" style="border: none;margin-left: -10px;height: 24px; width: 24px;" plain size="small" icon="el-icon-document" circle></el-button>
                      <span style="font-size: 13px">{{item.caseTitle}}</span>
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
                            <el-col :span="8" style="margin: 5px 0"><el-button class="minist-btn" size="mini"  round @click="caseSupplement(item)">补充完善</el-button></el-col>
                            <el-col :span="8" style="margin: 5px 0"><el-button class="minist-btn" size="mini"  round @click="caseDetails(item)">查看详情</el-button></el-col>
                            <el-col :span="8" v-if="item.caseState == '3'" style="margin: 5px 0"><el-button class="minist-btn" size="mini"  round @click="caseDetails(item)">受理签收</el-button></el-col>
                            <el-col :span="8" v-if="item.caseState == '2'||item.btnFlag=='1'" style="margin: 5px 0"><el-button class="minist-btn"  size="mini"  round @click="huiYi('huiYi')" >会议审议</el-button></el-col>


                            <el-col :span="8"  v-if="item.caseState == '4'&&item.btnFlag!='1'" style="margin: 5px 0"><el-button class="minist-btn"  size="mini"  round @click="auditAdvice('auditAdvice')" >审核意见</el-button></el-col>
                            <el-col :span="8" v-if="item.caseState == '2'||item.btnFlag=='1'" style="margin: 5px 0"><el-button class="minist-btn"  size="mini"  round @click="deliberations('deliberations')" >审议意见</el-button></el-col>

                            <el-col :span="8" v-if="item.caseState == '4'&&item.btnFlag!='1'" style="margin: 5px 0"><el-button class="minist-btn"  size="mini"  round @click="fileRecord('fileRecord')" >阅卷笔录</el-button></el-col>
                            <el-col :span="8" v-if="item.caseState == '2'||item.btnFlag=='1'" style="margin: 5px 0"><el-button class="minist-btn"  size="mini"  round @click="zhebgQiu('zhebgQiu')" >征求意见</el-button></el-col>

                            <el-col :span="8" v-if="item.caseState == '4'&&item.btnFlag!='1'" style="margin: 5px 0"><el-button class="minist-btn"  size="mini"  round @click="auditTalk('auditTalk')" >审理谈话</el-button></el-col>
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
        <el-dialog title="案件基本情况" :visible.sync="dialogFlag.caseSupplement" width="100%" top="0">
            <case-supplement></case-supplement>
        </el-dialog>
        <el-dialog title="查看详情" :visible.sync="dialogFlag.caseDetails" width="100%" top="0">
            <case-details></case-details>
        </el-dialog>
        <el-dialog title="形式审核" :visible.sync="dialogFlag.audit" width="100%" top="0">
            <CaseSupplement></CaseSupplement>
        </el-dialog>
        <el-dialog title="会议审议" :visible.sync="dialogFlag.huiYi" width="100%" top="0">
            <ReviewSession></ReviewSession>
        </el-dialog>
        <el-dialog title="征求意见" :visible.sync="dialogFlag.zhebgQiu" width="100%" top="0">
            <TakeAdvice></TakeAdvice>
        </el-dialog>
        <el-dialog title="案件受理" :visible.sync="dialogFlag.acceptance" width="100%" top="0">
            <CaseSupplement></CaseSupplement>
        </el-dialog>
        <el-dialog title="回退记录" :visible.sync="dialogFlag.fallbackRecord" width="100%" top="0">
            <CaseSupplement></CaseSupplement>
        </el-dialog>
        <el-dialog title="阅卷笔录" :visible.sync="dialogFlag.fileRecord" width="100%" top="0">
            <FileRecord></FileRecord>
        </el-dialog>
        <el-dialog title="审核意见" :visible.sync="dialogFlag.auditAdvice" width="100%" top="0">
            <AuditAdvice></AuditAdvice>
        </el-dialog>
        <el-dialog class="shenli" title="审理谈话" :visible.sync="dialogFlag.auditTalk" width="100%"  top="0">
            <AuditTalk></AuditTalk>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import CaseSupplement from "./modal/caseSupplement.vue";
    import CaseDetails from "./modal/caseDetails.vue";
    import Consideration from "./modal/caseSupplement.vue";
    import Marking from "./modal/caseSupplement.vue";
    import AuditOpinion from "./modal/caseSupplement.vue";
    import Conversation from "./modal/caseSupplement.vue";
    import Audit from "./modal/caseSupplement.vue";
    import Acceptance from "./modal/caseSupplement.vue";
    import FallbackRecord from "./modal/caseSupplement.vue";
    import Material from "./modal/caseSupplement.vue";
    import TakeAdvice from "./modal/takeAdvice.vue";
    import ReviewSession from "./modal/reviewSession.vue";
    import FileRecord from "./modal/fileRecord.vue";
    import AuditAdvice from "./modal/auditAdvice.vue";
    import AuditTalk from "./modal/auditTalk.vue";
    @Component({
        name : "auditReview",

        components: { CaseSupplement,CaseDetails,Consideration,Marking,AuditOpinion,Conversation,Audit,Acceptance,FallbackRecord,Material,TakeAdvice,ReviewSession,FileRecord,AuditAdvice,AuditTalk },
        data() {
            return {
                form:{}
            };
        },

        created() {},
        mounted() {},
        methods: {}
    })
    export default class formAudit extends Vue {
        showCases = [];
        //case
        allCases=[
            {
                caseTitle: "审核案件1",
                caseState: "2",
                personnel: "李某",
                registrationTime: "2019-02-25 15:31",
                link: "会议审议",
                term: "10天",
                termState: "1"
            },
            {
                caseTitle: "审核案件2",
                caseState: "2",
                personnel: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "10天",
                link: "案件审核",
                termState: "2"
            },
            {
                caseTitle: "审核案件3",
                caseState: "3",
                personnel: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "10天",
                link: "会议审议",
                termState: "1"
            },
            {
                caseTitle: "审核案件4",
                caseState: "3",
                personnel: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "10天",
                link: "案件审核",
                termState: "1"
            },
            {
                caseTitle: "审核案件5",
                caseState: "3",
                personnel: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "10天",
                link: "会议审议",
                termState: "1"
            },
            {
                caseTitle: "审核案件6",
                caseState: "4",
                personnel: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "10天",
                link: "案件审核",
                termState: "2"
            },
            {
                caseTitle: "审核案件7",
                caseState: "4",
                personnel: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "10天",
                link: "会议审议",
                termState: "2"
            },
            {
                caseTitle: "审核案件7",
                caseState: "4",
                btnFlag:'1',
                personnel: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "10天",
                link: "会议审议",
                termState: "8"
            }
        ];
        waitAcceptanceCases=[];
        unWaitAcceptanceCases=[];
        waitingReceiptCases=[];//待签收数据
        trialIngCases=[];//待签收数据
        form:{};

        activeIndex: string = "1";
        dialogFlag = {
            caseSupplement:false,
            caseDetails:false,
            consideration:false,
            marking:false,
            auditOpinion:false,
            conversation:false,
            audit:false,
            acceptance:false,
            fallbackRecord:false,
            material:false,
            zhebgQiu:false,
            huiYi:false,
            fileRecord:false,
            auditAdvice:false,
            auditTalk:false
        }
        handleSelect(key) {
            if (key == 1) {
                this.showCases = this.allCases;
            } else if (key == 2) {
                this.showCases = this.unWaitAcceptanceCases;
            } else  if(key == 3){
                this.showCases = this.waitingReceiptCases;
            }else if(key == 4){
                this.showCases = this.trialIngCases;
            }
        }
        showDialog(item){
            this.dialogFlag[item] = true
        }
        zhebgQiu(item){
            this.dialogFlag[item] = true
        }
        huiYi(item){
            this.dialogFlag[item] = true
        }

        fileRecord(item){
            this.dialogFlag[item] = true
        }
        auditAdvice(item){
            this.dialogFlag[item] = true
        }
        auditTalk(item){
            this.dialogFlag[item] = true
        }

        mounted() {
            this.showCases = this.allCases;
            this.allCases.forEach(item => {
                if (item.caseState == "2") {
                    this.unWaitAcceptanceCases.push(item);
                }
                if (item.caseState == "3") {
                    this.waitingReceiptCases.push(item);
                }
                if (item.caseState == "4") {
                    this.trialIngCases.push(item);
                }
            });
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/card2.scss";
    @import "~@/styles/common.scss";
    .el-menu-demo {
        margin: 5px 20px 0px 20px;
        /deep/.el-menu-item {
            font-size: 14px;
            color: #121312;
        }
        .meau-item {
            font-size: 14px;
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
    .shenli{
        margin-top:5%;
        margin-left:15%;
        height:73%;
        width:60%;
        /deep/.el-dialog__header{
            background: #fff;
            padding: 0px;
            width: 60%;
            z-index: 999;
        }

        .el-dialog{

            margin-left: 20%;
        }
    }

</style>