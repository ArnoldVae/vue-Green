
<template>
    <div>
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
        >
            <el-menu-item index="1">
                <el-badge class="item" :class="{displayNone : allCases.length==0}">
                    <div class="meau-item">审核中({{trialIngCases.length}})</div>
                </el-badge>
            </el-menu-item>
            <el-menu-item index="2">
                <el-badge
                        class="bottom18"
                        :class="{displayNone : unWaitAcceptanceCases.length==0}"
                >
                    <div class="meau-item">中止审核({{unWaitAcceptanceCases.length}})</div>
                </el-badge>
            </el-menu-item>
            <el-menu-item index="4">
                <el-badge  class="item" :class="{displayNone : allCases.length==0}">
                    <div class="meau-item">全部案件({{allCases.length}})</div>
                </el-badge>
            </el-menu-item>
        </el-menu>
        <div class="cards2">
            <el-row :gutter="20">
                <el-card class="box-card2" v-for="(item,index) in showCases" :key="index">
                    <div class="title_state" v-if="item.caseSource == '1'"><img src="img/corner.png" alt="">
                        <span>直查后通报</span></div>
                    <div class="title_state" v-if="item.caseSource == '2'"><img src="img/corner.png" alt="">
                        <span>下级单位调查</span></div>
                    <div class="title_state" v-if="item.caseSource == '3'"><img src="img/corner.png" alt="">
                        <span>司法移送</span></div>
                    <div slot="header" class="clearfix">
                    <span>
                      <el-button type="primary" style="border: none;margin-left: -10px;height: 24px; width: 24px;" plain size="small" icon="el-icon-document" circle></el-button>
                      {{item.caseTitle}}
                    </span>
                    </div>
                    <div class="case_content">
                        <el-form ref="form" :model="form" label-width="120px"  >
                        	<div v-if="item.caseState == '4' || item.caseState =='1' || item.caseState =='3'" class="card-stateImg" style="background-image: url(img/review.png);"></div>
                        	<div v-if="item.caseState == '2'" class="card-stateImg" style="background-image: url(img/suspend.png);"></div>
                            <el-form-item label="被审查调查人员"  style="margin-bottom: 0">
                                {{item.personnel}}
                            </el-form-item>
                            <el-form-item label="案件受理时间" style="margin-bottom: 0">
                                {{item.registrationTime}}
                            </el-form-item>
                            <el-form-item label="剩余受理天数" style="margin-bottom: 0">
                                {{item.term}}<div class="term_state" v-if="item.termState == '1'">正常</div>
                                <div class="term_state term_state_2" v-if="item.termState == '2'">红色预警</div>
                                <div class="term_state term_state_3" v-if="item.termState == '3'">黄色预警</div>
                                <div class="term_state term_state_4" v-if="item.termState == '4'">蓝色预警</div>
                            </el-form-item>

                        </el-form>


                    </div>
                    <div class="card-bottom-btn">
                        <el-row >
                            <el-col :span="8" style="margin: 5px 0"><el-button class="minist-btn" size="mini"  round @click="viewDetails('viewDetailsWindow')">查看详情</el-button></el-col>
                            <el-col :span="8" v-if="item.caseState == '4'" style="margin: 5px 0"><el-button class="minist-btn"  size="mini"  round @click="reviewSessionWindow('reviewSessionWindow')" >会议审议</el-button></el-col>
                            <el-col :span="8"  v-if="item.caseState == '1'" style="margin: 5px 0"><el-button class="minist-btn"  size="mini"  round @click="auditOpinionWindow('auditOpinionWindow')" >审核意见</el-button></el-col>
                            <el-col :span="8" v-if="item.caseState == '2'" style="margin: 5px 0"><el-button class="minist-btn"  size="mini"  round @click="restartHear('restartHearPage')" >重启审核</el-button></el-col>
                            <el-col :span="8" v-if="item.caseState == '4'" style="margin: 5px 0"><el-button class="minist-btn"  size="mini"  round @click="leaderShipWindow('leaderShipWindow')" >领导签批</el-button></el-col>							
                            <el-col :span="8"  v-if="item.caseState == '3'" style="margin: 5px 0"><el-button class="minist-btn"  size="mini"  round @click="submitAppr('submitApprPage')" >呈报审批</el-button></el-col>
                        </el-row>
                    </div>


                    <div class="card-bottom">
                        <img src="img/node.png" style=" position: relative;left: 12%;top: 8%;">
                        <span v-if="item.caseState == '1'||item.caseState=='2'" >当前节点：审核意见</span>
                        <el-button  v-if="item.caseState == '1'||item.caseState=='2'" type="primary" size="mini" round  @click="showStateLine('审核意见')">  审理进度 </el-button>
                        <span v-if="item.caseState == '3'" >当前节点：呈报审批</span>
                        <el-button v-if="item.caseState == '3'" type="primary" size="mini" round  @click="showStateLine('呈报审批')">  审理进度 </el-button>
                        <span v-if="item.caseState == '4'" >当前节点：会议审议</span>
                        <el-button v-if="item.caseState == '4'" type="primary" size="mini" round  @click="showStateLine('会议审议/领导签批')">  审理进度 </el-button>
                    </div>
                </el-card>

            </el-row>
        </div>
        <el-dialog class="mc-dialog-big"  title="案件基本情况" :visible.sync="dialogFlag.caseSupplement" width="100%" top="0">
            <CaseSupplement></CaseSupplement>
        </el-dialog>
        <el-dialog class="mc-dialog-big jwjw-dialog-big"  title="案件详情" :visible.sync="dialogFlag.viewDetailsWindow" width="100%" top="0">
            <ViewDetailsWindow  v-bind:myData="showTabs"></ViewDetailsWindow>
        </el-dialog>
        <el-dialog class="mc-dialog-big" title="会议审议" :visible.sync="dialogFlag.reviewSessionWindow" width="100%" top="0" style="background: #ffffff">
            <ReviewSessionWindow @submitEvent = closeFtn></ReviewSessionWindow>
        </el-dialog>
        <el-dialog class="mc-dialog-big " title="审核意见" :visible.sync="dialogFlag.auditOpinionWindow" width="100%" top="0" style="background: #ffffff">
            <AuditOpinionWindow pageFlag="auditCase" @submitEvent = closeFtn></AuditOpinionWindow>
        </el-dialog>
        <el-dialog class="mc-dialog-medium" title="重启审核" :visible.sync="dialogFlag.restartHearPage" width="50%"  top="13%" center>
            <RestartHearPage></RestartHearPage>
             <div slot="footer" class="dialog-footer">
                <el-button type="success"  size="small" @click="dialogFlag.restartHearPage=false">保存</el-button>
                 <el-button  size="small" @click="dialogFlag.restartHearPage=false">关闭</el-button>
             </div>
        </el-dialog>
        <el-dialog class="mc-dialog-big " title="领导签批" :visible.sync="dialogFlag.leaderShipWindow" width="100%" top="0" style="background: #ffffff">
            <LeaderShipWindow pageFlag="auditCase" @submitEvent = closeFtn></LeaderShipWindow>
        </el-dialog>
        <el-dialog class="mc-dialog-medium" :visible.sync="showStateLineFlag" width="98%" top="14%">
            <StateLine ref="stateLine"></StateLine>
        </el-dialog>
        <el-dialog class="mc-dialog-medium"  title="呈报审批" :visible.sync="dialogFlag.submitApprPage"  width="26%" top="13%"  center>
            <SubmitApprPage></SubmitApprPage>
             <div slot="footer" class="dialog-footer">
                    <el-button type="success" @click="dialogFlag.submitApprPage = false" size="small">保存</el-button>
                    <el-button  @click="dialogFlag.submitApprPage = false"  size="small">关闭</el-button>
             </div>
        </el-dialog>
        
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import ReviewSessionWindow from "./modal/reviewSessionWindow.vue";//会议审议
    import AuditOpinionWindow from "./modal/auditOpinionWindow.vue";//审核意见
    import RestartHearPage from "../../pubicMAndC/modal/restartHearPage.vue";//重启审理
    import LeaderShipWindow from "./modal/leaderShipWindow.vue";//领导签批
    import SubmitApprPage from "../../pubicMAndC/modal/submitApprPage.vue";//呈报审批

    import CaseSupplement from '../../evocatoryRes/modal/caseRegister1';//补充完善
    import Deliberations from "../../pubicMAndC/modal/deliberations.vue";//集体审议
    import FileRecord from "../../pubicMAndC/modal/fileRecord.vue";//阅卷笔录
    import StateLine from "../../pubicMAndC/modal/stateLine.vue";//详情 案件轨迹
    import ViewDetailsWindow from "../viewDetailsWindow.vue"; //案件详情
       
      
    @Component({
        name : "auditReview",
        components: { CaseSupplement,LeaderShipWindow,ReviewSessionWindow,Deliberations,FileRecord,AuditOpinionWindow,StateLine,SubmitApprPage,ViewDetailsWindow,RestartHearPage},
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
        showTabs ={
    		caseRegister:true,
    		caseAcceptPage:true,
    		preliminaryAuditPage:true,
    		auditOpinionPage:true
    	};
        showCases = [];
        //case
        allCases=[
            {
                caseTitle: "程**贪污犯罪案件",
                caseState: "1", // 1 审核中  2中止审核  4  会议审议和；领导签批 
                personnel: "程某某",
                registrationTime: "2019-02-25 15:31",
                link: "会议审议",
                term: "20天",
                btnFlag: '1',
                termState: "1",
                caseSource:'1'
            },
            {
                caseTitle: "刘**违法犯罪案件",
                caseState: "2",
                personnel: "刘某某",
                registrationTime: "2019-02-25 15:31",
                term: "3天",
                btnFlag: '1',
                link: "案件审核",
                termState: "2",
                caseSource:'3'
            },
            {
                caseTitle: "李**违纪案件",
                caseState: "4",
                personnel: "李某某",
                registrationTime: "2019-02-25 15:31",
                term: "8天",
                link: "会议审议",
                termState: "3",
                caseSource:'2'
            },
            {
                caseTitle: "刘**违纪案件",
                caseState: "3",
                personnel: "刘某某",
                registrationTime: "2019-02-25 15:31",
                term: "11天",
                link: "案件审核",
                termState: "4",
                caseSource:'1'
            },


            {
                caseTitle: "张**违纪违法案件",
                caseState: "4",
                personnel: "张某某",
                registrationTime: "2019-02-25 15:31",
                term: "22天",
                link: "会议审议",
                termState: "1",
                caseSource:'3'
            },
            {
                caseTitle: "李**贪污受贿案件",
                caseState: "4",
                personnel: "李某某",
                registrationTime: "2019-02-25 15:31",
                term: "5天",
                link: "会议审议",
                termState: "2",
                caseSource:'2'
            },
            {
                caseTitle: "刘**违法犯罪案件",
                caseState: "2",
                personnel: "刘某某",
                registrationTime: "2019-02-25 15:31",
                term: "10天",
                btnFlag: '1',
                link: "案件审核",
                termState: "3",
                caseSource:'3'
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
            viewDetailsWindow:false,
            consideration:false,
            marking:false,
            auditOpinion:false,
            conversation:false,
            audit:false,
            acceptance:false,
            fallbackRecord:false,
            material:false,
            zhebgQiu:false,
            reviewSessionWindow:false,
            deliberations:false,
            fileRecord:false,
            auditOpinionWindow:false,//审核意见
            auditTalk:false,
            submitApprPage:false,//呈报审批
            leaderShipWindow:false,//a领导签批
            restartHearPage:false//重启审核
        }
        showStateLineFlag: boolean = false;
        handleSelect(key) {
            if (key == 1) {
            	this.showCases = this.trialIngCases;
            } else if (key == 2) {
                this.showCases = this.unWaitAcceptanceCases;
            } else  if(key == 3){
                this.showCases = this.waitingReceiptCases;
            }else if(key == 4){
                this.showCases = this.allCases;
            }
        }
        FatherParam(msg){
            this.dialogFlag.huiYi=false
        }
        caseSupplement(item) {
            this.dialogFlag[item] = true
        }
        viewDetails(item){
        	this.dialogFlag[item] = true
        }
        showDialog(item){
            this.dialogFlag[item] = true
        }
        zhebgQiu(item){
            this.dialogFlag[item] = true
        }
        reviewSessionWindow(item){
            this.dialogFlag[item] = true
        }
        deliberations(item){
            this.dialogFlag[item] = true
        }
        fileRecord(item){
            this.dialogFlag[item] = true
        }
        //审核意见
        auditOpinionWindow(item){
            this.dialogFlag[item] = true
        }
        auditTalk(item){
            this.dialogFlag[item] = true
        }
        submitAppr(item){
        	this.dialogFlag[item] = true
        }
        restartHear(item){
        	this.dialogFlag[item] = true
        }
        leaderShipWindow(item){
        	this.dialogFlag[item] = true
        }
        showStateLine(val) {
            // this.show(val)
            let that = this;

            this.showStateLineFlag = true

            setTimeout(function () {
                that.$refs.stateLine.focusStep(val,'2')

            }, 1)
        }
        //关闭弹出框方法
		closeFtn(msg){
			if(msg == 'SHYJ'){ // 审理
        		this.dialogFlag.auditOpinionWindow = false;
        	}
        	if(msg == 'HYSY'){
        		this.dialogFlag.reviewSessionWindow = false;
        	}
        	if(msg== 'LDQP'){
        		this.dialogFlag.leaderShipWindow = false;
        	}
		}
        mounted() {
            this.showCases = this.trialIngCases;

            this.allCases.forEach(item => {
                if (item.caseState == "2") {
                    this.unWaitAcceptanceCases.push(item);
                }
                if (item.caseState == "3") {
                    this.waitingReceiptCases.push(item);
                }
                if (item.caseState == "4" || item.caseState == "1" || item.caseState == "3") {
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
            border-bottom: solid 3px #2F76DD;
            /deep/.el-menu-item {
                font-size: 14px;
                color: #121312;
                height:35px;
                line-height: 35px;
                width: 160px;
            }
            .meau-item {
                font-size: 16px;
            }
            li:after{
                content:"|";
                position: absolute;
                right: -2px;
                color: #dedede;
                font-size: 17px;
                
            }
            li:last-child:after{
                content:"";
            }
            
            /deep/.el-badge__content {
                top: 15px;
                background-color: red;
            }
            /deep/.el-menu-item.is-active{
                background-color: #2F76DD;
                border-bottom: 0;
                border-radius:4px 4px 0 0;
                color: #ffffff;
            }
        	/deep/.el-menu-item.is-active:after{
				content:"";
			}
        }
</style>