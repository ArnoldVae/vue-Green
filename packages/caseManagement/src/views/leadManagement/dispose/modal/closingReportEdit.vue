<template>
	<!-- 案件登记 -->
	<div class="backplane">
		<div class="backplane-Content">
			<el-form ref="currentReportForm" :model="currentReportForm" class="form-label-top">
				<el-collapse v-model="activeNames" class="collapse">
					<!--=========================================================报告描述分割线====================================================	-->

					<el-collapse-item id="menu1" name="1">
						<template slot="title">
							<i class="header-icon el-icon-info"></i>
							报告描述
						</template>
						<div class="form-content">
							<el-row :gutter="20">
								<el-col :span="24">
									<el-form-item label="报告描述:" prop="transactWay">
										<el-input type="textarea" :rows="4" v-model="currentReportForm.reportDescribe" resize="none"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row :gutter="20">
								<el-col :span="6">
									<el-form-item label="挽回经济损失:" prop="recoverAmountLoss">
										<el-input type="text" v-model="currentReportForm.recoverAmountLoss">
											<template slot="suffix">
												万元
											</template>
										</el-input>
									</el-form-item>
								</el-col>
							</el-row>
						</div>
					</el-collapse-item>

					<!--=========================================================涉案人员信息分割线====================================================	-->
					<el-collapse-item id="menu2" name="2">
						<template slot="title">
							<i class="header-icon el-icon-info"></i>
							涉案人员信息
						</template>
						<div class="form-content">
							<div class="edit-tabs">
								<el-button plain class="add-tab-btn" size="medium" @click="addTab()">新增涉案人员信息</el-button>
								<el-tabs v-model="creadTab" ref="tabs" type="card" closable @tab-remove="removeTab">
									<el-tab-pane v-for="(item, index) in editableTabs" :key="item.name" :label="item.title" :name="item.name" ref="pane">
										<el-form label-position="top" ref="newTabName" :data="item.name" :model="item.newCaseForm" :rules="rules">
											<!-- 涉案人员信息表单 -->
											<!-- 第一行 -->
											<el-row :gutter="20">
												<el-col :span="6">
													<el-form-item label="姓名:" prop="name"><el-input type="text" v-model="item.newCaseForm.name"></el-input></el-form-item>
												</el-col>
												<el-col :span="6">
													<el-form-item label="性别:" prop="sex">
														<el-radio-group v-model="item.newCaseForm.sex">
															<el-radio :label="1">男</el-radio>
															<el-radio :label="2">女</el-radio>
															<el-radio :label="3">不详</el-radio>
														</el-radio-group>
													</el-form-item>
												</el-col>
												<el-col :span="12">
													<el-form-item label="部职别(工作单位):" prop="position">
														<el-input type="text" v-model="item.newCaseForm.position" placeholder="请输入职务"></el-input>
													</el-form-item>
												</el-col>
											</el-row>
											<!-- 第三行 -->

											<el-row :gutter="20">
												<el-col :span="6">
													<el-form-item label="现隶属单位:" prop="nowUnit">
														<el-select v-model="item.newCaseForm.nowUnit" placeholder="请选择">
															<el-option v-for="item in nowUnitOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
														</el-select>
													</el-form-item>
												</el-col>
												<el-col :span="6">
													<el-form-item label="人员类别:" prop="personnelCategory">
														<el-select v-model="item.newCaseForm.personnelCategory" placeholder="请选择">
															<el-option
																v-for="item in personnelCategoryOptions"
																:key="item.value"
																:label="item.label"
																:value="item.value"
															></el-option>
														</el-select>
													</el-form-item>
												</el-col>
												<el-col :span="6">
													<el-form-item label="职务等级:" prop="jobRank">
														<el-select v-model="item.newCaseForm.jobRank" placeholder="请选择">
															<el-option v-for="item in jobRankOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
														</el-select>
													</el-form-item>
												</el-col>
												<el-col :span="6">
													<el-form-item label="在职状态:" prop="incumbencyType">
														<el-select v-model="item.newCaseForm.incumbencyType" placeholder="请选择">
															<el-option v-for="item in incumbencyTypeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
														</el-select>
													</el-form-item>
												</el-col>
											</el-row>
											<!-- 第四行 -->
											<el-row :gutter="20">
												<el-col :span="24">
													<el-form-item label="其他信息:" prop="otherInformation">
														<el-input type="textarea" :rows="4" v-model="item.newCaseForm.otherInformation" resize="none"></el-input>
													</el-form-item>
												</el-col>
											</el-row>
											<!-- ============================分割线============================ -->
											<div id="dividingLine"></div>
											<!-- ============================分割线============================ -->
											<!-- 第一行 -->
											<el-row :gutter="20">
												<el-col :span="12">
													<el-form-item label="问题发生时间:" prop="problemTime">
														<el-date-picker
															v-model="item.newCaseForm.problemTime"
															type="daterange"
															range-separator="至"
															start-placeholder="开始日期"
															end-placeholder="结束日期"
															value-format="yyyy-MM-dd"
														></el-date-picker>
													</el-form-item>
												</el-col>
												<el-col :span="6">
													<el-form-item label="违纪一级分类:" prop="violationFirLevelType">
														<el-select v-model="item.newCaseForm.violationFirLevelType" placeholder="请选择">
															<el-option
																v-for="item in violationFirLevelTypeOptions"
																:key="item.value"
																:label="item.label"
																:value="item.value"
															></el-option>
														</el-select>
													</el-form-item>
												</el-col>
												<!-- 第二行 -->
												<el-col :span="6">
													<el-form-item label="违纪二级分类:" prop="violationSecLevelType">
														<el-select v-model="item.newCaseForm.violationSecLevelType" placeholder="请选择">
															<el-option
																v-for="item in violationSecLevelTypeOptions"
																:key="item.value"
																:label="item.label"
																:value="item.value"
															></el-option>
														</el-select>
													</el-form-item>
												</el-col>
												<el-col :span="6">
													<el-form-item label="职务违法犯罪一级分类:" prop="jobCrimeFirLevelType">
														<el-select v-model="item.newCaseForm.jobCrimeFirLevelType" placeholder="请选择">
															<el-option
																v-for="item in jobCrimeFirLevelTypeOptions"
																:key="item.value"
																:label="item.label"
																:value="item.value"
															></el-option>
														</el-select>
													</el-form-item>
												</el-col>
												<el-col :span="6">
													<el-form-item label="职务违法犯罪二级分类:" prop="jobCrimeSecLevelType">
														<el-select v-model="item.newCaseForm.jobCrimeSecLevelType" placeholder="请选择">
															<el-option
																v-for="item in jobCrimeSecLevelTypeOptions"
																:key="item.value"
																:label="item.label"
																:value="item.value"
															></el-option>
														</el-select>
													</el-form-item>
												</el-col>
												<el-col :span="6">
													<el-form-item label="其他违法犯罪行为:" prop="otherCrimeType">
														<el-input type="text" v-model="item.newCaseForm.otherCrimeType"></el-input>
													</el-form-item>
												</el-col>
											</el-row>
											<!-- 第三行 -->
											<el-row :gutter="20">
												<el-col :span="24">
													<el-form-item label="主要问题情况:" prop="mainProblemSituation">
														<el-input type="textarea" :rows="4" v-model="item.newCaseForm.mainProblemSituation" resize="none"></el-input>
													</el-form-item>
												</el-col>
											</el-row>
											<!-- 第五行 -->
											<el-row :gutter="20">
												<el-col :span="24">
													<el-form-item label="审核处理意见:" prop="reviewProcessingOpinions">
														<el-input type="textarea" :rows="4" v-model="item.newCaseForm.reviewProcessingOpinions" resize="none"></el-input>
													</el-form-item>
												</el-col>
											</el-row>
										</el-form>
									</el-tab-pane>
								</el-tabs>
							</div>
						</div>
					</el-collapse-item>

					<!--=========================================================报告信息分割线====================================================	-->
					<el-collapse-item id="menu3" name="3">
						<template slot="title">
							<i class="header-icon el-icon-info"></i>
							报告信息
						</template>
						<div class="form-content">
							<el-row :gutter="20">
								<el-col :span="6">
									<el-form-item label="报告文号:" prop="reportSymbol"><el-input v-model="currentReportForm.reportSymbol"></el-input></el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="报告标题:" prop="reportTitle"><el-input v-model="currentReportForm.reportTitle"></el-input></el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="报告时间:" prop="reportDate">
										<el-date-picker v-model="currentReportForm.reportDate" type="date" value-format="yyyy-MM-dd"></el-date-picker>
									</el-form-item>
								</el-col>
							</el-row>
						</div>
					</el-collapse-item>
				</el-collapse>
			</el-form>
			<!-- 底部固定按钮 -->
			<div class="backplane-footer-center">
				<el-button type="primary" @click="submit()">提交</el-button>
				<el-button type="success" @click="save()">保存</el-button>
				<el-button plain @click="closeDialog()">返回</el-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	//data中的数据内容
	components: {},
	data() {
		return {
			//现隶属单位options
			nowUnitOptions: [
				{
					value: '东部战区',
					label: '东部战区'
				},
				{
					value: '南部战区',
					label: '南部战区'
				},
				{
					value: '西部战区',
					label: '西部战区'
				},
				{
					value: '北部战区',
					label: '北部战区'
				},
				{
					value: '中部战区',
					label: '中部战区'
				}
			],
			//人员类别options
			personnelCategoryOptions: [
				{
					value: 'XXX政后装XXX官',
					label: 'XXX政后装XXX官'
				},
				{
					value: '专业技术XXX官和专业技术文职干部',
					label: '专业技术XXX官和专业技术文职干部'
				},
				{
					value: '非专业技术文职干部',
					label: '非专业技术文职干部'
				}
			],
			//职务等级options
			jobRankOptions: [
				{
					value: '一级XXX（警）士长',
					label: '一级XXX（警）士长'
				},
				{
					value: '二级XXX（警）士长',
					label: '二级XXX（警）士长'
				},
				{
					value: '三级XXX（警）士长',
					label: '三级XXX（警）士长'
				},
				{
					value: '四级XXX（警）士长',
					label: '四级XXX（警）士长'
				}
			],
			//在职状态options
			incumbencyTypeOptions: [
				{
					value: '在职',
					label: '在职'
				},
				{
					value: '退休',
					label: '退休'
				},
				{
					value: '免职',
					label: '免职'
				},
				{
					value: '在押',
					label: '在押'
				}
			],
			//违纪一级分类options
			violationFirLevelTypeOptions: [
				{
					value: '违反政治纪律行为',
					label: '违反政治纪律行为'
				},
				{
					value: '违反组织纪律行为',
					label: '违反组织纪律行为'
				},
				{
					value: '违反廉洁纪律行为',
					label: '违反廉洁纪律行为'
				},
				{
					value: '违反群众纪律行为',
					label: '违反群众纪律行为'
				}
			],
			//违纪二级分类options
			violationSecLevelTypeOptions: [
				{
					value: '违反民主集中制原则',
					label: '违反民主集中制原则'
				},
				{
					value: '不按要求请示报告个人有关事项',
					label: '不按要求请示报告个人有关事项'
				},
				{
					value: '违规组织参加老乡会校友会战友会',
					label: '违规组织参加老乡会校友会战友会'
				},
				{
					value: '在投票和选举中搞非组织活动',
					label: '在投票和选举中搞非组织活动'
				}
			],
			//职务违法犯罪一级分类options
			jobCrimeFirLevelTypeOptions: [
				{
					value: '职务违法犯罪一级分类',
					label: '职务违法犯罪一级分类'
				},
				{
					value: '滥用职权类行为',
					label: '滥用职权类行为'
				},
				{
					value: '玩忽职守类行为',
					label: '玩忽职守类行为'
				},
				{
					value: '徇私舞弊类行为',
					label: '徇私舞弊类行为'
				}
			],
			//职务违法犯罪二级分类options
			jobCrimeSecLevelTypeOptions: [
				{
					value: '徇私舞弊低价折股、出售国有资产',
					label: '徇私舞弊低价折股、出售国有资产'
				},
				{
					value: '非法批准征收、征用、占用土地',
					label: '非法批准征收、征用、占用土地'
				},
				{
					value: '非法低价出让国有土地使用权',
					label: '非法低价出让国有土地使用权'
				},
				{
					value: '非法经营同类营业和为亲友非法牟利',
					label: '非法经营同类营业和为亲友非法牟利'
				}
			],
			activeNames: ['1', '2', '3'],
			//添加选项卡初始化数据
			creadTab: '1',
			tabIndex: 1, //默认的一个tab页
			currentReportForm: {
				reportDescribe: '', //报告描述
				recoverAmountLoss: '', //挽回损失金额
				//涉案人员信息
				InvolvedPersonnelInformation: [],
				reportSymbol: '', //报告文号
				reportTitle: '', //报告标题
				reportDate: '' //报告时间
			},
			//编辑表选项卡
			editableTabs: [
				{
					//选项卡属性
					title: '新增涉案人员1',
					name: '1',
					//选项卡form表单数据
					newCaseForm: {
						name: '', //姓名
						sex: '', //性别
						nowUnit: '', //现隶属单位
						position: '', //部职别
						personnelCategory: '', //人员类别
						jobRank: '', //职务等级
						incumbencyType: '', //在职状态
						otherInformation: '', //其他信息
						problemTime: '', //问题发生时间
						violationFirLevelType: '', //违纪一级分类
						violationSecLevelType: '', //违纪二级分类
						jobCrimeFirLevelType: '', //职务违法犯罪一级分类
						jobCrimeSecLevelType: '', //职务违法犯罪二级分类
						otherCrimeType: '', //其他违法犯罪分类
						mainProblemSituation: '', //主要问题情况
						reviewProcessingOpinions: '' //审核处理意见
					}
				}
			],
			//表单校验信息
			rules: {
				nowUnit: [{ required: true, message: '请选择现隶属单位', trigger: 'change' }],
				personnelCategory: [{ required: true, message: '请选择人员类别', trigger: 'change' }],
				jobRank: [{ required: true, message: '请选择职务等级', trigger: 'change' }],
				incumbencyType: [{ required: true, message: '请选择在职状态', trigger: 'change' }]
			}
		};
	},
	created() {},
	mounted() {},
	methods: {
		//提交数据
		submit() {
			// tabs标签页数组,用于提示后跳转到第一个校验失败的tabs页
			let tabPaneNums = [];
			/* 用于记录有多少个tabs页中的表单校验成功,如果成功则将标记valid放入数组,最后进行判断此数组的长度与tabs数组的长度是否相等
			 * 相等则进行提交,否则不进行提交.
			 */
			let validArr = [];
			let that = this;
			this.$refs.newTabName.forEach(function(e) {
				let tabPaneNum = e.$attrs.data;
				e.validate(valid => {
					if (valid) {
						//成功则将valid放入validArr数组中.
						validArr.push(valid);
					} else {
						tabPaneNums.push(tabPaneNum);
						that.creadTab = tabPaneNums[0];
						return false;
					}
				});
			});

			if (validArr.length == this.editableTabs.length) {
				that.$message({
					showClose: true,
					message: '提交成功',
					type: 'success'
				});
				//提交方法写在此处
				this.editableTabs.forEach(e => {
					//将tabs中的所有表单项放入要提交的大对象中
					that.currentReportForm.InvolvedPersonnelInformation.push(e.newCaseForm);
				});
				console.log(this.currentReportForm);
				console.log('提交成功!!!!!!!!!');
				this.closeDialog();
			} else {
				that.$message({
					showClose: true,
					message: '温馨提示：有信息不符合要求,请重新确认信息.',
					type: 'error'
				});
			}

			//将 tabs标签页数组清空
			tabPaneNums = [];
			//将validArr数组清空
			validArr = [];
		},
		//保存数据
		save() {
			//提示信息
			this.$message({
				showClose: true,
				message: '保存成功',
				type: 'success'
			});
			this.$parent.$parent.dialogFormVisible2 = false;
		},
		//清空数据
		clearForm() {
			this.$refs.currentReportForm.resetFields();
			this.editableTabs = [];
		},
		//添加tab--
		addTab(targetName) {
			let newTabName = ++this.tabIndex + '';
			this.editableTabs.push({
				title: '新增涉案人员' + newTabName,
				name: newTabName,
				//选项卡form数据
				newCaseForm: {
					name: '', //姓名
					sex: '', //性别
					nowUnit: '', //现隶属单位
					position: '', //部职别
					personnelCategory: '', //人员类别
					jobRank: '', //职务等级
					incumbencyType: '', //在职状态
					otherInformation: '', //其他信息
					problemTime: '', //问题发生时间
					violationFirLevelType: '', //违纪一级分类
					violationSecLevelType: '', //违纪二级分类
					jobCrimeFirLevelType: '', //职务违法犯罪一级分类
					jobCrimeSecLevelType: '', //职务违法犯罪二级分类
					otherCrimeType: '', //其他违法犯罪分类
					mainProblemSituation: '', //主要问题情况
					reviewProcessingOpinions: '' //审核处理意见
				}
			});
			this.creadTab = newTabName;
		},
		//移除tab
		removeTab(targetName) {
			let tabs = this.editableTabs;
			let activeName = this.creadTab;
			if (activeName === targetName) {
				tabs.forEach((tab, index) => {
					if (tab.name === targetName) {
						let nextTab = tabs[index + 1] || tabs[index - 1];
						if (nextTab) {
							activeName = nextTab.name;
						}
					}
				});
			}
			//tab为空重新命名
			if (this.editableTabs.length == 1) {
				this.tabIndex = [];
			}

			this.creadTab = activeName;
			this.editableTabs = tabs.filter(tab => tab.name !== targetName);
		},
		//关闭弹窗
		closeDialog() {
			this.$confirm('确定不保存并退出?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.clearForm();
				this.$parent.$parent.dialogFormVisible2 = false;
			}).catch(() => {});
		}
	}
})
export default class caseSupplement extends Vue {}
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
// tabs页新增按钮样式
.edit-tabs {
	.add-tab-btn {
		width: 165px;
		height: 35px;
		font-size: 16px;
		margin: 0;
		color: #2f76ff;
		background: #e6f3ff;
		border-color: #2f76dd;
		position: relative;
		float: right;
	}
}

//radio样式
.el-radio-group {
	float: left;
	width: 100%;
	line-height: 40px;
}

//分割线
#dividingLine {
	margin-top: 10px;
	margin-bottom: 10px;
	border: 1px dashed #e6e6e6;
}

//input输入框后缀
/deep/.el-input__suffix-inner {
	color: #606266;
}

// ======公共样式开始======
.el-collapse-item {
	/deep/.el-collapse-item__header {
		height: 45px;
		line-height: 45px;
		padding-left: 2%;
		font-size: 14px;
		border: 1px solid #dee1e7;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
		color: #2f76dd;
	}
}

.form-content {
	border: 1px solid #dee1e7;
	padding: 26px;
	border-top: navajowhite;
	border-top-style: none;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
	text-align: left;
}

.el-main {
	margin-left: 18%;
}

.active-btn-class {
	background: #2f76dd;
}
.el-select {
	width: 100%;
}
.el-select-tab {
	position: fixed;
}
.el-select-tab li {
	font-size: 14px;
	margin-bottom: 20%;
	text-align: left;
}
.tab-btn {
	position: relative;
	margin-left: -18%;
	top: 38px;
}
/deep/ textarea {
	height: 90px;
}
.el-icon-close {
	float: right;
	cursor: pointer;
	font-size: 20px;
}
/deep/ .tab-btn-new {
	margin-left: 80%;
}

/deep/ .form-content {
	.form-content-box {
		margin-bottom: 20px;
		border: 1px solid #eeeff2;
		.form-content-box-title {
			// .el-form-item__label{
			//     font-weight: normal !important;
			// }
			height: 58px;
			border-bottom: 1px solid #2f76dd;
			padding-top: 8px;
			padding-left: 16px;
			.el-col {
				text-align: right;
				button {
					margin-right: 10%;
				}
			}
		}
		.form-content-box-body {
			/*box-sizing:"",*/
			.form-content-box-body-item {
				padding-left: 10px;
				margin-top: 10px;
				// .el-form-item__label{
				//     font-weight: normal !important;
				// }
				.el-tag {
					position: relative;
					left: 36%;
					margin-top: 6px;
				}
			}
		}
	}
}
/*appalRegister.vue*/
.el-collapse-item:last-child {
	margin-bottom: 60px !important;
}
</style>
