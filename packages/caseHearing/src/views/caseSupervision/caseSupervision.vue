<template>
	<div class="main-ajdd">
		<div class="tool-ajdd">
			<div slot="title" :default-active="activeIndex" index ref="homePage" class="constant">
				<el-button index='1' @click="handleSelect(1)" class="buttons" :class="{'actives':indexs == 1}">审理案件</el-button>
				<el-button index='2' @click="handleSelect(2)" class="buttons" :class="{'actives':indexs == 2}">审核案件</el-button>
				<el-button index='3' @click="handleSelect(3)" class="buttons" :class="{'actives':indexs == 3}">提前介入审理</el-button>
				<el-button index='4' @click="handleSelect(4)" class="buttons" :class="{'actives':indexs == 4}">申诉复查案件</el-button>
				<span @click="onclick">更多</span>
				<br />
				<div class="block search-Item">
					<el-form :inline="true" class="form-label-right-query" ref="keyWords">
						<el-row :gutter="20">
							<el-col :span="6">
								<el-form-item label="受理人：">
									<el-input placeholder="" :required="false"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="6">
								<el-form-item label="承办人：">
									<el-input placeholder="" :required="false"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="6">
								<el-form-item label="预警情况：">
									<el-input placeholder="" :required="false"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="3">
								<el-form-item>
									<el-button type="primary" size="mini" @click="search()" icon="el-icon-search">查询</el-button>
								</el-form-item>
							</el-col>
						</el-row>

					</el-form>
				</div>
			</div>

		</div>
		<div class="cards2 cards-ajdd">
			<el-row :gutter="20">
				<el-card class="box-card2" v-for="(item,index) in showCases" :key="index">

					<div slot="header" class="clearfix">
						<span>
                      <el-button type="primary" style="border: none;margin-left: -10px;height: 24px; width: 24px;" plain
                                 size="small" icon="el-icon-document" circle></el-button>
                      {{item.caseName}}
                    </span>
					</div>
					<div class="case_content">
						<el-form ref="form" :model="form" label-width="120px">

							<el-form-item label="被审查调查人员" class="card-form-item padding-top-10">
								{{item.personName}}
							</el-form-item>
							<el-form-item label="受理人" class="card-form-item padding-top-10">
								{{item.acceptName}}
							</el-form-item>
							<el-form-item label="受理时间" class="card-form-item padding-top-10">
								{{item.receiveTime}}
							</el-form-item>
							<el-form-item label="审核人" class="card-form-item padding-top-10">
								{{item.auditName}}
							</el-form-item>
							<el-form-item label="办理剩余天数" class="card-form-item padding-top-10">
								<span v-if="item.caseState == '1'">-{{item.caseSource}}天</span>
								<span v-if="item.caseState == '0'">{{item.caseSource}}天</span>
								<div class="term_state term_state_2" v-if="item.caseState == '1'">超期</div>
								<div class="term_state" v-if="item.caseState == '0'">正常</div>
							</el-form-item>
						</el-form>
					</div>
					<div class="card-bottom">
						<img src="img/node.png" style=" position: relative;left: 12%;top: 8%;">
						<span>当前节点：案件受理</span>
						<el-button type="primary" size="mini" round @click="showStateLine('案件受理')"> 详情 </el-button>

					</div>

				</el-card>

			</el-row>
		</div>

		<el-dialog title="轨迹详情" class="mc-dialog-medium" :visible.sync="showStateLineFlag" width="1230px" top="6%" center id="stateLine">
			<timeLine ref="stateLine" :goDetail= "goDetail"></timeLine>
		</el-dialog>

		<el-dialog class="mc-dialog-big jwjw-dialog-big"  title="案件详情" :visible.sync="caseTotalDetailFlag" width="100%" top="0">
            <ViewDetailsWindow  v-bind:myData="showTabs" ref="caseReg"></ViewDetailsWindow>
        </el-dialog>

	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import timeLine from "./modal/stateLine.vue";
	 import ViewDetailsWindow from "../hearCaseManage/viewDetailsWindow.vue"; //案件详情
	@Component({
		name: "formAudit",
		source: {},
		components: {
			timeLine,
			ViewDetailsWindow
		},
		data() {
			return {
				form: {},
				indexs: 1,
				thisFlag: true,
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
			trialTalkPage:true,
			askForOpinionPage:true,
			collectiveIdeaPage:true,
			meetingDeliberationPage:true
		};
		caseTotalDetailFlag:boolean = false
		//showFlag:'TQJRdal'
		showCases = [];
		//case
		allCases: any = [{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},
			{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},
			{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},
			{
				caseName: "张**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "张某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "5", //案件来源 1直查 2报批 3司法移送
				state: '1'
			},
			{
				caseName: "李**贪污案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "李某某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "0",
				caseSource: "1",
				state: '2'
			},
			{
				caseName: "王某某违纪案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "王某某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "0",
				caseSource: "3",
				state: '1'
			},
			{
				caseName: "宋某某违纪案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "宋某某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "1",
				state: '3'
			},
			{
				caseName: "李**违纪案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "宋某某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "1",
				state: '1'
			},
			{
				caseName: "李**违纪案", //案件名称
				receiveTime: '2019-02-25', //案件接收时间
				personName: "宋某某", //被调查人姓名
				acceptName: "刘某某", //受理人
				auditName: "李某某", //审核人
				caseState: "1",
				caseSource: "1",
				state: '4'
			}
		];
		hearCases: any = []; //审理案件 state= 1
		trialCases: any = []; // 审核案件 state = 2
		aheadCase: any = []; //提前介入案件 state= 3
		appealCase: any = []; //申诉复查案件 state = 4
		activeIndex: string = "1";
		caseSupplementFlag: boolean = false
		caseDetailsFlag: boolean = false
		formAuditFlag: boolean = false
		caseAcceptanceFlag: boolean = false
		rollbackRecordFlag: boolean = false
		showStateLineFlag: boolean = false
		caseAcceptWindow: boolean = false

		// 查看详情
		goDetail(){
			
			// 关闭轨迹详情弹窗
			this.showStateLineFlag = false
			// 打开详情
			this.caseTotalDetailFlag = true
			let that=this;
            setTimeout(function(){
                that.$refs.caseReg.echoDetails({"caseName":"李xx贪污违纪案件","caseState":"1","personName":"李某某","registrationTime":"2019-02-25 15:31","link":"会议审议","term":"22天","termState":"1","caseSource":"1"});
            },1);
			console.log('4444')
		}
		handleSelect(key) {
			// key = Number(key.index) + 1;
			if(key == 1) {
				this.showCases = this.hearCases;
				this.indexs = 1;
			} else if(key == 2) {
				this.showCases = this.trialCases;
				this.indexs = 2;
			} else if(key == 3) {
				this.showCases = this.aheadCase;
				this.indexs = 3;
			} else if(key == 4) {
				this.showCases = this.appealCase;
				this.indexs = 4;
			}
		}

		caseSupplement(val) {
			this.caseSupplementFlag = true
			this.source = "TQJR";
			let that = this;
			setTimeout(function() {
				that.$refs.caseReg.echoDetails(val);
			}, 1);
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

			setTimeout(function() {
				that.$refs.stateLine.focusStep(val, '3')

			}, 1)
		}
		fatherParm() {
			console.log(this)
			this.fistTrailModal = false;
		}
		handleClick() {

		}
		onclick() {
			//alert(this.thisFlag);
			if(this.thisFlag == true) {
				this.$refs.homePage.style.height = "120px";
				this.thisFlag = !this.thisFlag;
			} else if(this.thisFlag == false) {
				this.$refs.homePage.style.height = "";
				this.thisFlag = !this.thisFlag;
			}
		}
		mounted() {

			this.allCases.forEach(item => {
				if(item.state == "1") {
					this.hearCases.push(item);
				} else if(item.state == "2") {
					this.trialCases.push(item);
				} else if(item.state == "3") {
					this.aheadCase.push(item);
				} else if(item.state == "4") {
					this.appealCase.push(item);

				}
			});
			this.showCases = this.hearCases;
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	@import "~@/styles/dialogBox.scss";
	@import "~@/styles/card2.scss";
	@import "~@/styles/common.scss";
	.main-ajdd{
		background-color: #F5F6FA;
	    height: 100%;
	    overflow: hidden;
		.tool-ajdd{
			max-height:20%;
			min-height:10%;
		    margin-bottom: 20px;
		}
		.cards-ajdd{
			max-height:90%;
			min-height:80%;
			padding-bottom: 80px;
		}
		
	}

	
	#stateLine /deep/ .el-dialog__body {
		margin: 0px auto;
		padding: 16px;
		max-height: 441px;
	}
	
	.constant {
		position: relative;
		height: 59px;
		overflow: hidden;
		/deep/ span {
			cursor: pointer;
		}
	}
	
	.el-form {
		margin: 5px;
		/deep/ .el-form-item__label {
			line-height: 33px;
		}
		/deep/ .el-form-item__content {
			line-height: 30px;
		}
		/deep/.el-form-item {
			/deep/ .el-input input {
				border: 1px solid #F1F1F2;
				border-radius: 0px;
			}
		}
	}
	
	.block {
		margin: 0px auto;
		width: 90%;
		left: 60px;
		position: relative;
	}
	
	.case_content .card-form-item {
		margin-bottom: 0px;
	}
	
	.padding-top-10 {
		padding: 0px;
	}
	
	.cards2 /deep/ .box-card2 {
		width: 288px;
	}
	
	.buttons {
		width: 200px;
		height:45px;
		border: 1px solid #2f76dd;
		color: #2F76DD;
		margin: 10px 12.5px;
		border-radius: 0px;
	}
	
	.buttons.actives {
		background: #2F76DD;
		color: #fff;
	}
</style>