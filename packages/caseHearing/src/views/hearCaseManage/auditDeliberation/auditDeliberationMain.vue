<!--案件审理-审理案件-->
<template>
	<div>
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1">
				<el-badge  class="item" :class="{displayNone : trialIngCases.length==0}">
					<div class="meau-item">审理中({{trialIngCases.length}})</div>
				</el-badge>
			</el-menu-item>
			<el-menu-item index="2">
				<el-badge  class="bottom18" :class="{displayNone : unWaitAcceptanceCases.length==0}">
					<div class="meau-item">中止审理({{unWaitAcceptanceCases.length}})</div>
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
					<div class="title_state" v-if="item.caseSource == '1'">
						<img src="img/corner.png" alt>
						<span>直查案件</span>
					</div>
					<div class="title_state" v-if="item.caseSource == '2'">
						<img src="img/corner.png" alt>
						<span>报批案件</span>
					</div>
					<div class="title_state" v-if="item.caseSource == '3'">
						<img src="img/corner.png" alt>
						<span>司法移送</span>
					</div>
					<div slot="header" class="clearfix">
						<span>
              <el-button
                type="primary"
                style="border: none;margin-left: -10px;height: 24px; width: 24px;"
                plain
                size="small"
                icon="el-icon-document"
                circle
              ></el-button>
              <span style="font-size: 17px">{{item.caseName}}</span>
						</span>
					</div>
					<div class="case_content">
						<el-form ref="form" :model="form" label-width="120px">
							<div v-if="item.caseState == '3'" class="card-stateImg" style="background-image: url(img/review.png);"></div>
							<div v-if="item.caseState == '1'" class="card-stateImg" style="background-image: url(img/review.png);"></div>
							<div v-if="item.caseState == '4'" class="card-stateImg" style="background-image: url(img/review.png);"></div>
							<div v-if="item.caseState == '2'" class="card-stateImg" style="background-image: url(img/suspend.png);"></div>
							<el-form-item label="被审查调查人员" style="margin-bottom: 0">{{item.personName}}</el-form-item>
							<el-form-item label="案件受理时间" style="margin-bottom: 0">{{item.registrationTime}}</el-form-item>
							<el-form-item label="剩余受理天数" style="margin-bottom: 0">
								{{item.term}}
								<div class="term_state" v-if="item.termState == '1'">正常</div>
								<div class="term_state term_state_2" v-if="item.termState == '2'">红色预警</div>
								<div class="term_state term_state_3" v-if="item.termState == '3'">黄色预警</div>
								<div class="term_state term_state_4" v-if="item.termState == '4'">蓝色预警</div>
							</el-form-item>
						</el-form>
					</div>
					<div class="card-bottom-btn">
						<el-row>
							<el-col :span="8" style="margin: 5px 0">
								<el-button class="minist-btn" size="mini" round @click="viewDetailsWindow(item)">查看详情</el-button>
							</el-col>
							<el-col :span="8" v-if="item.caseState == '3'||item.btnFlag=='1'" style="margin: 5px 0">
								<el-button class="minist-btn" size="mini" round @click="showDialog('huiYi')">会议审议</el-button>
							</el-col>
							<el-col :span="8" v-if="item.caseState == '4'&&item.btnFlag!='1'&&item.btnFlag!='2'" style="margin: 5px 0">
								<el-button class="minist-btn" size="mini" round @click="showDialog('auditAdvice')">审理意见</el-button>
							</el-col>
							<el-col :span="8" v-if="item.caseState == '2'" style="margin: 5px 0">
								<el-button class="minist-btn" size="mini" round @click="showDialog('restartHearPage')">重启审理</el-button>
							</el-col>
							<el-col :span="8" v-if="item.caseState == '4'&&item.btnFlag=='2'" style="margin: 5px 0">
								<el-button class="minist-btn" size="mini" round @click="dialogFlag.submitApprPage=true ">呈报审批</el-button>
							</el-col>
						</el-row>
					</div>

					<div class="card-bottom">
						<img src="img/node.png" style=" position: relative;left: 12%;top: 8%;">
						<span v-if="item.caseState == '4'&&item.btnFlag!='1'&&item.btnFlag!='2'||item.caseState == '2'">当前节点：审理意见</span>
						<el-button type="primary" size="mini" round @click="showStateLine('审理意见')" v-if="item.caseState == '4'&&item.btnFlag!='1'&&item.btnFlag!='2'||item.caseState == '2'">审理进度</el-button>

						<span v-if="item.caseState == '4'&&item.btnFlag=='2'">当前节点：呈报审批</span>
						<el-button type="primary" size="mini" round @click="showStateLine('呈报审批')" v-if="item.caseState == '4'&&item.btnFlag=='2'">审理进度</el-button>

						<span v-if="item.caseState == '3'||item.btnFlag=='1'">当前节点：会议审议</span>
						<el-button type="primary" size="mini" round @click="showStateLine('会议审议')" v-if="item.caseState == '3'||item.btnFlag=='1'">审理进度</el-button>
					</div>
				</el-card>
			</el-row>
		</div>


		<el-dialog class="mc-dialog-big " title="案件详情" :visible.sync="dialogFlag.viewDetailsWindow" width="100%" top="0">
			<ViewDetailsWindow v-bind:myData="showTabs" ref="caseReg"></ViewDetailsWindow>
		</el-dialog>
		<el-dialog class="mc-dialog-big " title="会议审议" :visible.sync="dialogFlag.huiYi" width="100%" top="0">
			<ReviewGroup  @closePage="closePage"></ReviewGroup>
		</el-dialog>


		<el-dialog class="mc-dialog-big " title="审理意见" :visible.sync="dialogFlag.auditAdvice" width="100%" top="0">
			<TrialOpinion  @closePage="closePage"></TrialOpinion>
		</el-dialog>

		<el-dialog class="mc-dialog-medium" title="重启审理" :visible.sync="dialogFlag.restartHearPage" width="50%" top="13%" center>
			<RestartHearPage></RestartHearPage>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" size="small" @click="dialogFlag.restartHearPage=false">保存</el-button>
				<el-button size="small"  @click="dialogFlag.restartHearPage=false">返回</el-button>
			</div>
		</el-dialog>
		<el-dialog class="mc-dialog-medium" :visible.sync="showStateLineFlag" width="98%" top="14%">
			<StateLine ref="stateLine"></StateLine>
		</el-dialog>
		<el-dialog class="mc-dialog-medium" title="呈报审批" :visible.sync="dialogFlag.submitApprPage" width="26%" top="13%" center>
			<SubmitApprPage></SubmitApprPage>
			<div slot="footer" class="dialog-footer">
				<el-button type="success" @click="dialogFlag.submitApprPage=false " size="small">保存</el-button>
				<el-button size="small" @click="dialogFlag.submitApprPage=false ">返回</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import ViewDetailsWindow from "../viewDetailsWindow.vue"; //查看详情
	import ReviewGroup from "./modal/reviewConferenceWindow.vue"; //会议审议
	import TrialOpinion from "./modal/trialOpinionWindow.vue"; //审理意见
	import StateLine from "../../pubicMAndC/modal/stateLine.vue"; //详情 案件轨迹
	import RestartHearPage from "../../pubicMAndC/modal/restartHearPage.vue"; //重启审理
	import SubmitApprPage from "../../pubicMAndC/modal/submitApprPage.vue"; //呈报审批
	@Component({
		name: "auditReview",
		components: {
			//TakeAdvice,
			ReviewGroup,
			//Deliberations,
			//FileRecord,
			TrialOpinion,
			//AuditTalk,
			StateLine,
			//CaseTotal,
			RestartHearPage,
			SubmitApprPage,
			ViewDetailsWindow
		},

		data() {
			return {
				form: {}
			};
		},

		created() {},
		mounted() {},
		methods: {}
	})
	export default class formAudit extends Vue {
		showTabs = {
				caseRegister:true, //案件基本情况
    		caseAcceptPage:true,  //案件受理
				firstAuditPage:true,
				trialOpinionPage:true,
				trialSuspendPage:true,
				trialTalkPage:true
		};
		showCases = [];
		//case
		allCases = [{
				caseName: "刘xx违法违纪案件",
				caseState: "2",

				personName: "刘某某",
				registrationTime: "2019-02-25 15:31",
				link: "会议审议",
				term: "20天",
				termState: "1",
				link: "012",
				caseSource: "1"
			},
			{
				caseName: "李xx贪污违纪案件",
				caseState: "2",

				personName: "李某某",
				registrationTime: "2019-02-25 15:31",
				term: "5天",
				link: "案件审核",
				termState: "2",
				link: "012",
				caseSource: "3"
			},
			{
				caseName: "张xx违纪违法案件",
				caseState: "4",

				personName: "张某某",
				registrationTime: "2019-02-25 15:31",
				term: "8天",
				link: "会议审议",
				termState: "3",
				caseSource: "2"
			},
			{
				caseName: "程xx贪污受贿案件",
				caseState: "4",

				personName: "程某某",
				registrationTime: "2019-02-25 15:31",
				term: "13天",
				link: "案件审核",
				termState: "4",
				caseSource: "2"
			},

			{
				caseName: "刘xx违纪案件",
				caseState: "4",

				personName: "刘某某",
				registrationTime: "2019-02-25 15:31",
				term: "4天",
				link: "会议审议",
				btnFlag: "2",
				termState: "2",
				caseSource: "1"
			},
			{
				caseName: "李xx犯罪违法案件",
				caseState: "4",

				personName: "李某某",
				registrationTime: "2019-02-25 15:31",
				term: "20天",
				btnFlag: "1",
				link: "会议审议",
				termState: "1",
				caseSource: "1"
			},
			{
				caseName: "李xx贪污违纪案件",
				caseState: "2",

				personName: "李某某",
				registrationTime: "2019-02-25 15:31",
				term: "3天",
				link: "案件审核",
				termState: "2",
				link: "012",
				caseSource: "3"
			}
		];
		waitAcceptanceCases = [];
		unWaitAcceptanceCases = [];
		waitingReceiptCases = []; //待签收数据
		trialIngCases = []; //待签收数据
		form: {};
		dialogFlag = {
			viewDetailsWindow: false,
			consideration: false,
			marking: false,
			auditOpinion: false,
			conversation: false,
			audit: false,
			acceptance: false,
			fallbackRecord: false,
			material: false,
			zhebgQiu: false,
			huiYi: false,
			deliberations: false,
			fileRecord: false,
			auditAdvice: false,
			auditTalk: false,
			restartHearPage: false,
			submitApprPage: false
		};
		activeIndex: string = "1";

		showStateLineFlag: boolean = false;
		handleSelect(key) {
			if(key == 1) {
				this.showCases = this.trialIngCases;
			} else if(key == 2) {
				this.showCases = this.unWaitAcceptanceCases;
			} else if(key == 3) {
				this.showCases = this.waitingReceiptCases;
			} else if(key == 4) {
				this.showCases = this.allCases;
			}
		}

		viewDetailsWindow(item) {
			this.dialogFlag.viewDetailsWindow = true;
			let that = this;
			setTimeout(function() {
				that.$refs.caseReg.echoDetails(item);
			}, 1);
		}
		showDialog(item) {
			this.dialogFlag[item] = true;
			let that = this;
			setTimeout(function() {
				that.$refs.caseReg.echoDetails(item);
			}, 1);
		}
		showStateLine(val) {
			// this.show(val)
			let that = this;

			this.showStateLineFlag = true;

			setTimeout(function() {
				that.$refs.stateLine.focusStep(val, "1");
			}, 1);
		}
		// 审理模块公用关闭弹窗页面方法
		mounted() {
			// this.showCases = this.allCases;
			this.showCases = this.trialIngCases;
			this.allCases.forEach(item => {
				if(item.caseState == "2") {
					this.unWaitAcceptanceCases.push(item);
				}
				if(item.caseState == "3") {
					this.waitingReceiptCases.push(item);
				}
				if(item.caseState == "4") {
					this.trialIngCases.push(item);
				}
			});
		}
		closePage(page){
			if(page=="HYSY"){
				this.dialogFlag.huiYi=false;
			}else{
				this.dialogFlag.auditAdvice=false;

			}
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