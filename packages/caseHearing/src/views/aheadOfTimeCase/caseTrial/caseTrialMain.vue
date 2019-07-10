
<template>
    <div>
        <div class="cards2">
            <el-row :gutter="20">
                <el-card class="box-card2" v-for="(item,index) in showCases" :key="index">
                    <div class="title_state" v-if="item.caseSource == '1'"><img src="img/corner.png" alt="">
                        <span>直查案件</span></div>
                    <div class="title_state" v-if="item.caseSource == '2'"><img src="img/corner.png" alt="">
                        <span>下级单位调查</span></div>
                    <div slot="header" class="clearfix">
                    <span>
                      <el-button type="primary" style="border: none;margin-left: -10px;height: 24px; width: 24px;" plain size="small" icon="el-icon-document" circle></el-button>
                      {{item.caseName}}
                    </span>
                    </div>
                    <div class="case_content">
                        <el-form ref="form" :model="form" label-width="120px"  >
                        	<!--<div v-if="item.caseState == '4' && item.btnFlag!='1'" class="card-stateImg" style="background-image: url(img/review.png);"></div>-->
                        	<!--<div v-if="item.caseState == '2'||item.btnFlag=='1'" class="card-stateImg" style="background-image: url(img/suspend.png);"></div>-->
                            <el-form-item label="被审查调查人员"  style="margin-bottom: 0">
                                {{item.personName}}
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
                            <el-col :span="8"  v-if="item.caseState == '2'" style="margin: 5px 0"><el-button class="minist-btn"  size="mini"  round @click="trialOpinionPage(item)" >审理意见</el-button></el-col>
                            <el-col :span="8" v-if="item.caseState == '4'" style="margin: 5px 0"><el-button class="minist-btn"  size="mini"  round @click="approvalLeaderWindow('approvalLeaderWindow')" >报批领导</el-button></el-col>
                        </el-row>
                    </div>


                    <div class="card-bottom">
                        <img src="img/node.png" style=" position: relative;left: 12%;top: 8%;">
                        <!-- <span v-if="item.caseState == '2'&&item.btnFlag!='1'" >当前节点：审理意见</span>
                        <span v-if="item.caseState == '2'||item.btnFlag=='1'" >当前节点：报批领导</span> -->
                        <span v-if="item.caseState == '2'" >当前节点：审理意见</span>
                        <el-button v-if="item.caseState == '2'" type="primary" size="mini" round  @click="showStateLine('审理意见')">  审理进度  </el-button>
                        <span v-if="item.caseState == '4'" >当前节点：报批领导</span>
                        <el-button v-if="item.caseState == '4'" type="primary" size="mini" round  @click="showStateLine('报批领导')">  审理进度  </el-button>

                    </div>


                </el-card>

            </el-row>
        </div>
        <el-dialog class="mc-dialog-big"  title="案件详情" :visible.sync="dialogFlag.viewDetailsWindow" width="100%" top="0">
            <ViewDetailsWindow  v-bind:myData="showTabs"></ViewDetailsWindow>
        </el-dialog>
        <el-dialog class="mc-dialog-big" title="报批领导" :visible.sync="dialogFlag.approvalLeaderWindow" width="100%" top="0">
            <ApprovalLeaderWindow pageFlag="aheaad" @closePage = closePage></ApprovalLeaderWindow>
        </el-dialog>
        <el-dialog class="mc-dialog-big " title="审理意见" :visible.sync="dialogFlag.trialOpinionPage" width="100%" top="0" >
            <CaseRegister v-show="!trialOpinionPageFlag" @goNextPage="goNextPage" pageFlag="trialOpinionPageFlag" myData="TQJR" ref="caseReg" @closePage = "closePage"></CaseRegister>
            <TrialOpinionPage v-if="trialOpinionPageFlag"  @goNextPage="goNextPage" pageFlag="trialOpinionPageFlag" @closePage = "closePage"></TrialOpinionPage>
        </el-dialog>
        <el-dialog class="mc-dialog-medium" :visible.sync="showStateLineFlag" width="90%" top="14%">
            <StateLine ref="stateLine"></StateLine>
        </el-dialog> 
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import CaseRegister from "../../evocatoryRes/modal/caseRegister1.vue"; 
    import ViewDetailsWindow from "../viewDetailsWindow.vue"; //案件详情
    import StateLine from "../../pubicMAndC/modal/stateLine.vue";//详情 案件轨迹
    import TrialOpinionPage from "./modal/trialOpinionPage.vue";//审理意见
    import ApprovalLeaderWindow from "./modal/approvalLeaderWindow.vue";//报批领导集体审议合并页面
    @Component({
        name : "auditDeliberation",
        components: {ViewDetailsWindow,StateLine,TrialOpinionPage,ApprovalLeaderWindow,CaseRegister},
        data() {
            return {
                form:{}
            };
        },

        created() {},
        mounted() {},
        methods: {}
    })
    export default class auditDeliberation extends Vue {
        showTabs ={
    	    caseRegister:true,//案件基本信息
    		caseAcceptPage:true,//案件受理
            trialOpinionPage:true//审理意见
    	};
        trialOpinionPageFlag:boolean=false
        showCases = [];
        //case
        allCases=[
            {
                caseName: "程某某贪污犯罪案件",
                caseState: "2",   // 审理意见状态 2 领导报批显示
                personName: "程某",
                registrationTime: "2019-02-25 15:31",
                link: "会议审议",
                term: "28天",
                termState: "1",
                link:'012',
                caseSource:'1'
            },
            {
                caseName: "刘某某违法犯罪案件",
                caseState: "2",
                personName: "刘某",
                registrationTime: "2019-02-25 15:31",
                term: "5天",
                link: "案件审核",
                termState: "2",
                link:'012',
                caseSource:'2'
            },
            {
                caseName: "李某某违纪案件",
                caseState: "2",
                personName: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "8天",
                link: "会议审议",
                termState: "3",
                caseSource:'1'
            },
            {
                caseName: "刘某某违纪案件",
                caseState: "4",
                personName: "刘某",
                registrationTime: "2019-02-25 15:31",
                term: "13天",
                link: "案件审核",
                termState: "4",
                caseSource:'2'
            },


            {
                caseName: "张某某违纪违法案件",
                caseState: "4",
                personName: "张某",
                registrationTime: "2019-02-25 15:31",
                term: "4天",
                link: "会议审议",
                termState: "2",
                caseSource:'1'
            },
            {
                caseName: "李某某贪污受贿案件",
                caseState: "4",
                personName: "李某",
                registrationTime: "2019-02-25 15:31",
                term: "21天",
                link: "会议审议",
                termState: "1",
                caseSource:'1'
            },
            {
                caseName: "蒋某某违法案件",
                caseState: "4",
                personName: "蒋某",
                registrationTime: "2019-02-25 15:31",
                term: "26天",
                link: "会议审议",
                termState: "1",
                caseSource:'2'
            }
        ];
        waitAcceptanceCases=[];
        unWaitAcceptanceCases=[];
        waitingReceiptCases=[];//待签收数据
        trialIngCases=[];//待签收数据
        form:{};

        activeIndex: string = "1";
        dialogFlag = {
            viewDetailsWindow:false,
            consideration:false,
            marking:false,
            auditOpinion:false,
            conversation:false,
            audit:false,
            acceptance:false,
            fallbackRecord:false,
            material:false,
            huiYi:false,
            trialOpinionPage:false,
            approvalLeaderWindow :false
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
        viewDetails(item){
        	this.dialogFlag[item] = true
        }
        approvalLeaderWindow(item){
            this.dialogFlag[item] = true
        }
        trialOpinionPage(item){
            this.dialogFlag.trialOpinionPage = true
            let that=this;
            setTimeout(function(){
                that.$refs.caseReg.echoDetails(item);
            },1);
        }
        showStateLine(val) {
            // this.show(val)
            let that = this;

            this.showStateLineFlag = true

            setTimeout(function () {
                that.$refs.stateLine.focusStep(val,'3')

            }, 1)
        }
        // 审理模块公用关闭弹窗页面方法
        closePage(msg){
        	if(msg == 'LDQP'){ //会议
        		this.dialogFlag.approvalLeaderWindow = false;
        	}else{
                this.dialogFlag.trialOpinionPage = false;
            }
        	
        }
        goNextPage(){
            this.trialOpinionPageFlag=!this.trialOpinionPageFlag

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
 

</style>