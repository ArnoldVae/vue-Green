<template>
	<div class="query-box">
		<!-- 查询列展示 -->
		<div class="el-main bg-layout">
			<div class="block search-Item">
				<el-collapse v-model="activeNames">
					<el-collapse-item name="1">
						<el-row slot="title" class="title">检索查询</el-row>
						<el-form :inline="true" :model="accepForm" ref="accepForm" class="form-label-right-query">
							<el-row>
								<el-col :span="12">
									<el-form-item label="受理时间:" prop="acceptedDate">
										<el-date-picker class="date_picker" v-model="accepForm.accepTime" type="daterange" range-separator="至"
										 start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item>
										<el-button size="mini" type="primary" icon="el-icon-search">
											查询
										</el-button>
										<el-button size="mini" @click="resetForm('keyWords')" class="searchBtn" icon="el-icon-refresh">
											重置
										</el-button>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row>
								<div class="dis_tip_span">
									<span>已处置:</span>
									<el-button>{{getClueDisSum}}</el-button>
									<span>件</span>
									<span style="margin-left: 3%;">未处置:</span>
									<el-button>{{getUnClueDisSum}}</el-button>
									<span style="margin-right: 3%;">件</span>
								</div>
							</el-row>
						</el-form>
					</el-collapse-item>
				</el-collapse>
			</div>
			<div class="margin-top evocatory">
				<div class="case-content">
					<el-row>
						<el-col :span="6">
							<el-card class="box-card">
								<el-row slot="header" class="clearfix card-header" style="background: #1A9CFC;">
									<span>
										<i class="el-icon-document"></i>
										{{clueBasicInfo1.info0.clueSourceName}}
									</span>
								</el-row>
								<el-row class="case_content" style="">
									<el-col :span="12" class="case-num" @click.native="goCaseDistributing()">
										<div>
											<span class="num">{{clueBasicInfo1.info0.disposalNum}}</span>
											件
										</div>
										<div class="name">已处置</div>
									</el-col>
									<el-col :span="12" class="case-num case-num2" @click.native="goCaseDistributed()">
										<div>
											<span class="num">{{clueBasicInfo1.info0.undisposedNum}}</span>
											件
										</div>
										<div class="name">未处置</div>
									</el-col>
								</el-row>
								<el-row>
									<div class="card-footer-div" @click="dialogFormVisible = true">
										<span>
											<i class="el-icon-plus"></i>
											线索登记
										</span>
									</div>
								</el-row>
							</el-card>
						</el-col>

						<el-col :span="6">
							<el-card class="box-card">
								<el-row slot="header" class="clearfix card-header" style="background: #00D189;">
									<span>
										<i class="el-icon-document"></i>
										{{clueBasicInfo1.info1.clueSourceName}}
									</span>
								</el-row>
								<el-row class="case_content" style="">
									<el-col :span="12" class="case-num" @click.native="goCaseDistributing()">
										<div>
											<span class="num">{{clueBasicInfo1.info1.disposalNum}}</span>
											件
										</div>
										<div class="name">已处置</div>
									</el-col>
									<el-col :span="12" class="case-num case-num2" @click.native="goCaseDistributed()">
										<div>
											<span class="num">{{clueBasicInfo1.info1.undisposedNum}}</span>
											件
										</div>
										<div class="name">未处置</div>
									</el-col>
								</el-row>
								<el-row>
									<div class="card-footer-div" @click="dialogFormVisible = true">
										<span>
											<i class="el-icon-plus"></i>
											线索登记
										</span>
									</div>
								</el-row>
							</el-card>
						</el-col>

						<el-col :span="6">
							<el-card class="box-card">
								<el-row slot="header" class="clearfix card-header" style="background: #FEC051;">
									<span>
										<i class="el-icon-document"></i>
										{{clueBasicInfo1.info2.clueSourceName}}
									</span>
								</el-row>
								<el-row class="case_content" style="">
									<el-col :span="12" class="case-num" @click.native="goCaseDistributing()">
										<div>
											<span class="num">{{clueBasicInfo1.info2.disposalNum}}</span>
											件
										</div>
										<div class="name">已处置</div>
									</el-col>
									<el-col :span="12" class="case-num case-num2" @click.native="goCaseDistributed()">
										<div>
											<span class="num">{{clueBasicInfo1.info2.undisposedNum}}</span>
											件
										</div>
										<div class="name">未处置</div>
									</el-col>
								</el-row>
								<el-row>
									<div class="card-footer-div" @click="dialogFormVisible = true">
										<span>
											<i class="el-icon-plus"></i>
											线索登记
										</span>
									</div>
								</el-row>
							</el-card>
						</el-col>

						<el-col :span="6">
							<el-card class="box-card">
								<el-row slot="header" class="clearfix card-header" style="background: #2DA6C3;">
									<span>
										<i class="el-icon-document"></i>
										{{clueBasicInfo1.info3.clueSourceName}}
									</span>
								</el-row>
								<el-row class="case_content" style="">
									<el-col :span="12" class="case-num" @click.native="goCaseDistributing()">
										<div>
											<span class="num"> {{clueBasicInfo1.info3.disposalNum}}</span>
											件
										</div>
										<div class="name">已处置</div>
									</el-col>
									<el-col :span="12" class="case-num case-num2" @click.native="goCaseDistributed()">
										<div>
											<span class="num">{{clueBasicInfo1.info3.undisposedNum}}</span>
											件
										</div>
										<div class="name">未处置</div>
									</el-col>
								</el-row>
								<el-row>
									<div class="card-footer-div" @click="dialogFormVisible = true">
										<span>
											<i class="el-icon-plus"></i>
											线索登记
										</span>
									</div>
								</el-row>
							</el-card>
						</el-col>
					</el-row>
					<el-row>

						<el-col :span="6">
							<el-card class="box-card">
								<el-row slot="header" class="clearfix card-header" style="background: #F46F82;">
									<span>
										<i class="el-icon-document"></i>
										{{clueBasicInfo1.info4.clueSourceName}}
									</span>
								</el-row>
								<el-row class="case_content" style="">
									<el-col :span="12" class="case-num" @click.native="goCaseDistributing()">
										<div>
											<span class="num"> {{clueBasicInfo1.info4.disposalNum}}</span>
											件
										</div>
										<div class="name">已处置</div>
									</el-col>
									<el-col :span="12" class="case-num case-num2" @click.native="goCaseDistributed()">
										<div>
											<span class="num">{{clueBasicInfo1.info4.undisposedNum}}</span>
											件
										</div>
										<div class="name">未处置</div>
									</el-col>
								</el-row>
								<el-row>
									<div class="card-footer-div" @click="dialogFormVisible = true">
										<span>
											<i class="el-icon-plus"></i>
											线索登记
										</span>
									</div>
								</el-row>
							</el-card>
						</el-col>

						<el-col :span="6">
							<el-card class="box-card">
								<el-row slot="header" class="clearfix card-header" style="background: #A770FF;">
									<span>
										<i class="el-icon-document"></i>
										{{clueBasicInfo1.info5.clueSourceName}}
									</span>
								</el-row>
								<el-row class="case_content" style="">
									<el-col :span="12" class="case-num" @click.native="goCaseDistributing()">
										<div>
											<span class="num">{{clueBasicInfo1.info5.disposalNum}}</span>
											件
										</div>
										<div class="name">已处置</div>
									</el-col>
									<el-col :span="12" class="case-num case-num2" @click.native="goCaseDistributed()">
										<div>
											<span class="num"> {{clueBasicInfo1.info5.undisposedNum}}</span>
											件
										</div>
										<div class="name">未处置</div>
									</el-col>
								</el-row>
								<el-row>
									<div class="card-footer-div" @click="dialogFormVisible = true">
										<span>
											<i class="el-icon-plus"></i>
											线索登记
										</span>
									</div>
								</el-row>
							</el-card>
						</el-col>

						<el-col :span="6">
							<el-card class="box-card">
								<el-row slot="header" class="clearfix card-header" style="background: #42A994;">
									<span>
										<i class="el-icon-document"></i>
										{{clueBasicInfo1.info6.clueSourceName}}
									</span>
								</el-row>
								<el-row class="case_content" style="">
									<el-col :span="12" class="case-num" @click.native="goCaseDistributing()">
										<div>
											<span class="num"> {{clueBasicInfo1.info6.disposalNum}}</span>
											件
										</div>
										<div class="name">已处置</div>
									</el-col>
									<el-col :span="12" class="case-num case-num2" @click.native="goCaseDistributed()">
										<div>
											<span class="num">{{clueBasicInfo1.info6.undisposedNum}}</span>
											件
										</div>
										<div class="name">未处置</div>
									</el-col>
								</el-row>
								<el-row>
									<div class="card-footer-div" @click="dialogFormVisible = true">
										<span>
											<i class="el-icon-plus"></i>
											线索登记
										</span>
									</div>
								</el-row>
							</el-card>
						</el-col>

						<el-col :span="6">
							<el-card class="box-card">
								<el-row slot="header" class="clearfix card-header" style="background: #5C6FE5;">
									<span>
										<i class="el-icon-document"></i>
										{{clueBasicInfo1.info7.clueSourceName}}
									</span>
								</el-row>
								<el-row class="case_content" style="">
									<el-col :span="12" class="case-num" @click.native="goCaseDistributing()">
										<div>
											<span class="num">{{clueBasicInfo1.info7.disposalNum}}</span>
											件
										</div>
										<div class="name">已处置</div>
									</el-col>
									<el-col :span="12" class="case-num case-num2" @click.native="goCaseDistributed()">
										<div>
											<span class="num">{{clueBasicInfo1.info7.undisposedNum}}</span>
											件
										</div>
										<div class="name">未处置</div>
									</el-col>
								</el-row>

								<el-row>
									<div class="card-footer-div" @click="dialogFormVisible = true">
										<span>
											<i class="el-icon-plus"></i>
											线索登记
										</span>
									</div>
								</el-row>
							</el-card>
						</el-col>
						<el-col :span="6">
							<el-card class="box-card">
								<el-row slot="header" class="clearfix card-header" style="background: rgb(74, 79, 255);">
									<span>
										<i class="el-icon-document"></i>
										{{clueBasicInfo1.info8.clueSourceName}}
									</span>
								</el-row>
								<el-row class="case_content" style="">
									<el-col :span="12" class="case-num" @click.native="goCaseDistributing()">
										<div>
											<span class="num"> {{clueBasicInfo1.info8.disposalNum}}</span>
											件
										</div>
										<div class="name">已处置</div>
									</el-col>
									<el-col :span="12" class="case-num case-num2" @click.native="goCaseDistributed()">
										<div>
											<span class="num"> {{clueBasicInfo1.info8.undisposedNum}}</span>
											件
										</div>
										<div class="name">未处置</div>
									</el-col>
								</el-row>
								<el-row>
									<div class="card-footer-div" @click="dialogFormVisible = true">
										<span>
											<i class="el-icon-plus"></i>
											线索登记
										</span>
									</div>
								</el-row>
							</el-card>
						</el-col>
					</el-row>
				</div>
			</div>
			<el-dialog title="详细线索登记" class="mc-dialog-big" :visible.sync="dialogFormVisible" width="100%" top="0" id="caseMsg">
				<lead-register :dialogFormVisible="dialogFormVisible"></lead-register>
			</el-dialog>
			<el-dialog title="线索已处置" class="mc-dialog-big" :visible.sync="dialogFormVisible2" width="100%" top="0" id="caseMsg1">
				<lead-Disp-End ref="dispEnd"></lead-Disp-End>
			</el-dialog>
			<el-dialog title="线索未处置" class="mc-dialog-big" :visible.sync="dialogFormVisible3" width="100%" top="0" id="caseMsg2">
				<leadNotDisp ref="leadNotDisp"></leadNotDisp>
			</el-dialog>
		</div>
	</div>
</template>

<script lang="ts">
	import {
		Component,
		Vue
	} from 'vue-property-decorator';
	import {
		State,
		Action,
		Getter
	} from "vuex-class";
	import leadRegister from './modal/leadRegister.vue';
	import leadNotDisp from './modal/leadNotDisp.vue';
	import leadDispEnd from './modal/leadDispEnd.vue';
	@Component({
		components: {
			leadRegister,
			leadNotDisp,
			leadDispEnd
		},
		data() {
			return {
				dialogFormVisible: false,
				dialogFormVisible2: false,
				dialogFormVisible3: false,
				accepForm: {
					accepTime: '',
				},
				activeNames: ['1'],
				clueBasicInfo: [], //线索来源基本信息和处置数量数组
				clueBasicInfo1: { //线索来源基本信息和处置数量
					info0: {
						clueSourceCode: "0",
						clueSourceName: "",
						undisposedNum: 0,
						disposalNum: 0
					},
					info1: {
						clueSourceCode: "0",
						clueSourceName: "",
						undisposedNum: 0,
						disposalNum: 0
					},
					info2: {
						clueSourceCode: "0",
						clueSourceName: "",
						undisposedNum: 0,
						disposalNum: 0
					},
					info3: {
						clueSourceCode: "0",
						clueSourceName: "",
						undisposedNum: 0,
						disposalNum: 0
					},
					info4: {
						clueSourceCode: "0",
						clueSourceName: "",
						undisposedNum: 0,
						disposalNum: 0
					},
					info5: {
						clueSourceCode: "0",
						clueSourceName: "",
						undisposedNum: 0,
						disposalNum: 0
					},
					info6: {
						clueSourceCode: "0",
						clueSourceName: "",
						undisposedNum: 0,
						disposalNum: 0
					},
					info7: {
						clueSourceCode: "0",
						clueSourceName: "",
						undisposedNum: 0,
						disposalNum: 0
					},
					info8: {
						clueSourceCode: "0",
						clueSourceName: "",
						undisposedNum: 0,
						disposalNum: 0
					},
				},

			};
		},

		created() {},
		computed: {
			//计算已处置总数量
			getClueDisSum: function() {
				let sum = 0;
				this.clueBasicInfo.forEach((e) => {
					sum += e.disposalNum;
				})
				return sum;
			},
			//计算未处置总数量
			getUnClueDisSum: function() {
				let sum = 0;
				this.clueBasicInfo.forEach((e) => {
					sum += e.undisposedNum;
				})
				return sum;
			}

		},
		mounted() {
			//初始化线受理索基本信息
			this.getCuleAcceptBasicInfo();
		},
		watch: {},
		methods: {},
	})
	export default class petitionLetter extends Vue {
		@Action GetCuleAcceptBasicInfo: any;
		@State $culeAcceptBasicInfo: any;

		getCuleAcceptBasicInfo(): void {
			let that = this
			this.GetCuleAcceptBasicInfo().then(res => {
				this.clueBasicInfo = res.result.countBySource;
				let clueBasicInfo1 = {};
				res.result.countBySource.forEach((e, index) => {
					clueBasicInfo1["info" + index] = e;
				})
				that.clueBasicInfo1 = clueBasicInfo1;
			});
		}

		goCaseDistributing() {
			this.dialogFormVisible2 = true;
		}
		goCaseDistributed() {
			this.dialogFormVisible3 = true;
		}
	}
</script>

<style rel="text/stylesheet" lang="scss" scoped>
	@import "~@/styles/dialogBox.scss";
	@import "~@/styles/card.scss";
	@import '~@/styles/queryList.scss';

	.block {
		.el-button {
			margin: 0px 7px 0px 7px;
		}
	}

	.el-form {
		//处置数量提示
		.dis_tip_span {
			text-align: right;

			.el-button {
				font-size: 24px;
				color: #408fec;
				background: 0;
				border: 0;
				cursor: pointer;
			}
		}
	}

	.evocatory {
		.text {
			font-size: 14px;
		}

		.item {
			margin-bottom: 18px;
		}

		.card-footer-title {
			margin: 0 50px;
			color: #009ABB;
		}

		.card-hearder-title {
			float: left;
		}

		.backgrund-color-blue {
			color: #6085c4;

		}

		.el-collapse-item {
			margin: 10px 0;
		}

		.form_select {
			/deep/ input {
				width: 320px;
			}
		}

		.case_card>.el-card__header {
			background: #c2dbf9;

		}

		.caseCardCon {
			height: 132px;
		}

		.caseCardCon>.el-main {
			overflow-y: hidden;
			height: 100%;
		}

		.card-footer-div {
			border-top: 1px solid #edeff4;
			width: 110%;
			position: relative;
			color: #5199ee;
			text-align: center;
			margin-left: -15px;
			padding-top: 8px;
			font-size: 14px;
			font-weight: bold;
			cursor: pointer;
		}

		.case-content {
			background-color: white;
			padding-bottom: 30px;
		}

		.case-num {
			line-height: 37px;
			width: 50%;
			position: relative;
		}
	}

	@media screen and (max-width: 1370px) {
		.case-content {
			.el-col-6 {
				width: 25%;
			}
		}

		.evocatory /deep/ .box-card.el-card {
			height: 240px;
		}

		.evocatory /deep/ .box-card /deep/.el-card__body {
			height: 80%;
		}

		.evocatory /deep/ .case_content.el-row {
			height: 70%;
			padding: 30px 0px 0px 0px;
		}

		.evocatory /deep/ .num {
			font-size: 30px;
		}

		.evocatory .card-footer-div {
			padding-top: 20px;
			font-size: 14px;
		}
	}
</style>
