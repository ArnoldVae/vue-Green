<template>
	<div class="backplane">
		<div class="backplane-Content">
			<el-form ref="detailsForm" :model="detailsTab" :rules="rules" class="form-label-top">
				<el-collapse v-model="activeNames" class="collapse">
					<!--=========================================================办理方式分割线====================================================	-->
					<el-collapse-item id="menu1" name="1">
						<template slot="title">
							<i class="header-icon el-icon-info"></i>
							办理方式
						</template>
						
						<div class="form-content">
							<el-row :gutter="20">
								<el-col :span="24">
									<el-form-item label="办理方式:" prop="dealTypeName">
										<el-radio-group v-model="detailsTab.dealTypeName" @change="dealTypeNameFlagChange">
											<el-radio :label="1">本级直查</el-radio>
											<el-radio :label="2">转下级调查</el-radio>
											<el-radio :label="3">转其他单位</el-radio>
										</el-radio-group>
									</el-form-item>
								</el-col>
							</el-row>

							<div id="dividingLine"></div>
							<!-- =====================================分割线================================= -->
							<!-- 办理方式:本级直查 -->
							<el-row :gutter="20" v-if="otherOptionsFlag == 1">
								<el-col :span="6">
									<el-form-item label="办理单位:" prop="receiveUintName" style="width: 90%;">
										<el-input v-model="detailsTab.receiveUintName" :readonly="true"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="会同单位:" prop="jointlyWithUnit" style="width: 90%;">
										<el-input v-model="detailsTab.jointlyWithUnit"></el-input>
									</el-form-item>
								</el-col>
							</el-row>

							<!-- 办理方式:转下级调查 -->
							<el-row :gutter="20" v-if="otherOptionsFlag == 2">
								<el-col :span="6">
									<el-form-item label="办理单位:" prop="receiveUintName" style="width: 90%;">
										<el-select v-model="detailsTab.receiveUintName" placeholder="请选择">
											<el-option v-for="item in receiveUintNameOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="会同单位:" prop="jointlyWithUnit" style="width: 90%;">
										<el-input v-model="detailsTab.jointlyWithUnit"></el-input>
									</el-form-item>
								</el-col>
							</el-row>

							<!-- 办理方式:转其他单位 -->
							<el-row :gutter="20" v-if="otherOptionsFlag == 3">
								<el-col :span="24">
									<el-form-item label="办理单位:" prop="receiveUintName" style="display: inline-block;width: 500px;">
										<el-radio-group v-model="detailsTab.receiveUintName" @change="otherUnitInputFlagChange">
											<el-radio :label="1">XXXXXX</el-radio>
											<el-radio :label="2">地方XXX</el-radio>
											<el-radio :label="3">XXX事检察机关</el-radio>
											<el-radio :label="4">其他单位</el-radio>
										</el-radio-group>
									</el-form-item>
									<el-form
										label-position="top"
										ref="detailsChildForm"
										:model="detailsTab"
										:rules="rules"
										hide-required-asterisk
										style="display: inline-block;width: 21%;"
										v-if="otherUnitInputFlag"
									>
										<el-form-item label=" " prop="transferDestination"><el-input v-model="detailsTab.transferDestination"></el-input></el-form-item>
									</el-form>
									<el-form-item label="会同单位:" prop="jointlyWithUnit" style="display: inline-block;width: 21%;margin-left: 50px;">
										<el-input v-model="detailsTab.jointlyWithUnit"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
						</div>
					</el-collapse-item>

					<!--=========================================================处置方式分割线====================================================	-->

					<el-collapse-item id="menu2" name="2" v-if="handleTypeNameFoldingBoxFlag">
						<template slot="title">
							<i class="header-icon el-icon-info"></i>
							处置信息
						</template>
						<div class="form-content">
							<el-row :gutter="20">
								<el-col :span="24">
									<el-form-item label="处置方式:" prop="handleTypeName">
										<el-radio-group v-model="detailsTab.handleTypeName" @change="handleTypeNameFlagChange">
											<el-radio :label="1">初步核实</el-radio>
											<el-radio :label="2">调查核实</el-radio>
											<el-radio :label="3">谈话</el-radio>
											<el-radio :label="4">函询</el-radio>
											<el-radio :label="5">立案调查</el-radio>
											<el-radio :label="6" v-if="handleTypeNameFlag">侧面了解</el-radio>
											<el-radio :label="7" v-if="!handleTypeNameFlag">阅处</el-radio>
											<el-radio :label="8">暂存待查</el-radio>
											<el-radio :label="9">予以了结</el-radio>
										</el-radio-group>
									</el-form-item>
								</el-col>
							</el-row>
							<!-- ====================================================处置二级分类分割线==================================================== -->
							<el-row :gutter="20">
								<!-- 第一种: -->
								<el-col :span="24" v-if="handleSubTypeNameFlag == 1">
									<el-form-item label="处置二级分类:" prop="handleSubTypeName">
										<el-radio-group v-model="detailsTab.handleSubTypeName">
											<el-radio :label="1">直接核实</el-radio>
											<el-radio :label="2">委托了解和查询等</el-radio>
										</el-radio-group>
									</el-form-item>
								</el-col>
								<!-- 第二种: -->
								<el-col :span="24" v-if="handleSubTypeNameFlag == 2">
									<el-form-item label="处置二级分类:" prop="handleSubTypeName">
										<el-radio-group v-model="detailsTab.handleSubTypeName">
											<el-radio :label="3">分管领导或室领导与其谈话</el-radio>
											<el-radio :label="4">请党委主要负责人与其谈话</el-radio>
											<el-radio :label="5">委托下级XXXXXX机关谈话</el-radio>
										</el-radio-group>
									</el-form-item>
								</el-col>
								<!-- 第三种: -->
								<el-col :span="24" v-if="handleSubTypeNameFlag == 3">
									<el-form-item label="处置二级分类:" prop="handleSubTypeName">
										<el-radio-group v-model="detailsTab.handleSubTypeName">
											<el-radio :label="6">因时机等因素不便马上核查</el-radio>
											<el-radio :label="7">重要涉案人一时难以找到</el-radio>
											<el-radio :label="8">曾初核或谈话函询尚不能否定问题存在</el-radio>
											<el-radio :label="9">被反映人年纪过大</el-radio>
											<el-radio :label="10">问题久远且没有新问题举报</el-radio>
											<el-radio :label="11">其他</el-radio>
										</el-radio-group>
									</el-form-item>
								</el-col>
								<!-- 第四种: -->
								<el-col :span="24" v-if="handleSubTypeNameFlag == 4">
									<el-form-item label="处置二级分类:" prop="handleSubTypeName">
										<el-radio-group v-model="detailsTab.handleSubTypeName">
											<el-radio :label="12">经过初核失实</el-radio>
											<el-radio :label="13">经过谈话函询问题未能认定</el-radio>
											<el-radio :label="14">适当处理</el-radio>
											<el-radio :label="15">被反映人已离休或去世</el-radio>
											<el-radio :label="11">其他</el-radio>
										</el-radio-group>
									</el-form-item>
								</el-col>
							</el-row>

							<!-- ====================================================反馈方式分割线==================================================== -->

							<el-row :gutter="20">
								<el-col :span="24" v-if="feedbackWayFlag">
									<el-form-item label="反馈方式:" prop="feedbackWay">
										<el-radio-group v-model="detailsTab.feedbackWay">
											<el-radio :label="1">查报结果</el-radio>
											<el-radio :label="2">反馈情况</el-radio>
											<el-radio :label="3">无需反馈</el-radio>
										</el-radio-group>
									</el-form-item>
								</el-col>
							</el-row>
						</div>
					</el-collapse-item>

					<!--=========================================================报批信息分割线====================================================	-->

					<el-collapse-item id="menu3" name="3">
						<template slot="title">
							<i class="header-icon el-icon-info"></i>
							报批信息
						</template>
						<div class="form-content">
							<el-row :gutter="20">
								<!-- 报批信息左侧 -->
								<el-col :span="16">
									<el-row :gutter="20">
										<el-col :span="12">
											<el-form-item label="呈批件文号:" prop="certifedSymbol">
												<el-input type="text" v-model="detailsTab.certifedSymbol"></el-input>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="呈批件标题:" prop="certifedTitle">
												<el-input type="text" v-model="detailsTab.certifedTitle"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-col :span="12">
											<el-form-item label="批准人:" prop="certifedPerson"><el-input type="text" v-model="detailsTab.certifedPerson"></el-input></el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="批准时间:" prop="certifedDate">
												<el-date-picker v-model="detailsTab.certifedDate" type="date" value-format="yyyy-MM-dd">></el-date-picker>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-col :span="24">
											<el-form-item label="处置意见:" prop="manageOpinion">
												<el-input size="medium" resize="none" type="textarea" :rows="4" v-model="detailsTab.manageOpinion"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
								</el-col>
								<!-- 报批信息右侧 -->
								<el-col :span="8" style="text-align: left;" class="approval-info">
									<!-- 历次报批信息栏 -->
									<el-collapse-item name="5">
										<template slot="title">
											<el-col :span="24" style="text-align: left;">
												<i class="header-icon el-icon-info"></i>
												历次报批信息
											</el-col>
										</template>
										<ul v-for="item in previouApprovalInfo" style="font-size: 17px;">
											<li style="list-style-type:none;">
												<a href="javascript:;" @click="echoData($event)">{{ item.value }}</a>
											</li>
										</ul>
									</el-collapse-item>
								</el-col>
							</el-row>
						</div>
					</el-collapse-item>

					<!--=========================================================领导批示分割线==================================================================================================================	-->

					<el-collapse-item id="menu4" name="4">
						<template slot="title">
							<i class="header-icon el-icon-info"></i>
							领导批示
						</template>
						<div class="form-content">
							<div class="edit-tabs">
								<el-button type="primary" plain class="add-tab-btn" size="mini" @click="addTab()">添加批示领导信息</el-button>
								<el-tabs v-model="creadTab" ref="tabs" type="card" closable @tab-remove="removeTab">
									<el-tab-pane v-for="(item, index) in editableTabs" :key="item.name" :label="item.title" :name="item.name" ref="pane">
										<el-form ref="newCaseForm" :model="item.newCaseForm" class="form-label-top">
											<!-- 领导批示表格 -->
											<el-row :gutter="20">
												<el-col :span="16">
													<!-- 第一行 -->
													<el-row :gutter="20">
														<el-col :span="12">
															<el-form-item label="批示领导:" prop="instructionLeader">
																<el-input type="text" v-model="item.newCaseForm.instructionLeader"></el-input>
															</el-form-item>
														</el-col>
														<el-col :span="12">
															<el-form-item label="批示时间:" prop="instructionDate">
																<el-date-picker v-model="item.newCaseForm.instructionDate" type="date" value-format="yyyy-MM-dd">></el-date-picker>
															</el-form-item>
														</el-col>
													</el-row>
													<!-- 第二行 -->
													<el-row :gutter="20">
														<el-col :span="24">
															<el-form-item label="批示内容:" prop="instructionDesc">
																<el-input resize="none" type="textarea" :rows="4" v-model="item.newCaseForm.instructionDesc"></el-input>
															</el-form-item>
														</el-col>
													</el-row>
												</el-col>
											</el-row>
										</el-form>
									</el-tab-pane>
								</el-tabs>
							</div>
						</div>
					</el-collapse-item>
				</el-collapse>
			</el-form>

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
import { State, Action, Getter } from 'vuex-class';
@Component({
	components: {},
	data() {
		return {
			rules: {
				dealTypeName: [{ required: true, message: '请选择办理方式', trigger: 'change' }],
				receiveUintName: [{ required: true, message: '办理单位不能为空' }],
				transferDestination: [{ required: true, message: '请输入其他单位名称', trigger: 'change' }],
				handleTypeName: [{ required: true, message: '请选择处置方式', trigger: 'change' }],
				handleSubTypeName: [{ required: true, message: '请选择处置二级分类', trigger: 'change' }],
				feedbackWay: [{ required: true, message: '请选择反馈方式', trigger: 'change' }],
				certifedSymbol: [{ required: true, message: '呈批件文号不能为空' }],
				certifedTitle: [{ required: true, message: '呈批件标题不能为空' }],
				certifedPerson: [{ required: true, message: '批准人不能为空' }],
				certifedDate: [{ required: true, message: '批准时间不能为空' }],
				manageOpinion: [{ required: true, message: '处置意见不能为空' }]
			},
			receiveUintNameOptions: [
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
			activeNames: ['1', '2', '3', '4', '5'],
			//添加选项卡初始化数据
			creadTab: '1',
			tabIndex: 1, //默认的一个tab页
			otherUnitInputFlag: false, //是否展示 <其他单位输入框> 标记
			otherOptionsFlag: '1', //用于判断办理单位展示的方式
			handleTypeNameFoldingBoxFlag: true, //是否展示处置方式折叠框
			handleTypeNameFlag: true, //是否展示处置方式中 <侧面了解\阅处> 标记
			handleSubTypeNameFlag: '', //是否展示 <处置二级分类的内容> 标记
			feedbackWayFlag: false, //是否展示 <反馈方式> 标记
			//历次报批信息
			previouApprovalInfo: [
				{ key: '张领导', value: '关于张某某违纪的线索1' },
				{ key: '李领导', value: '关于张某某违纪的线索2' },
				{ key: '刘领导', value: '关于张某某违纪的线索3' },
				{ key: '孔领导', value: '关于张某某违纪的线索4' }
			],
			detailsTab: {
				dealTypeName: '', //办理方式
				transferDestination: '', //转送去向
				receiveUintName: '', //办理单位
				jointlyWithUnit: '', //会同单位
				handleTypeName: '', //处置方式
				handleSubTypeName: '', //处置二级分类
				feedbackWay: '', //反馈方式
				certifedSymbol: '', //呈批件文号
				certifedTitle: '', //呈批件标题
				certifedPerson: '', //批准人
				certifedDate: '', //批准时间
				manageOpinion: '', //处置意见
				clueInstructionInfos: [] //编辑表选项卡的对象集合
			},
			//编辑表选项卡
			editableTabs: [
				{
					//选项卡属性
					title: '批示领导信息1',
					name: '1',
					content: '',
					//选项卡form表单数据
					newCaseForm: {
						instructionLeader: '', //领导批示
						instructionDate: '', //批示时间
						instructionDesc: '' //批示内容
					}
				}
			],
			//添加成功后返回的信息
			message: ''
		};
	},
	created() {},
	mounted() {
		this.detailsTab.dealTypeName = 1;
		this.detailsTab.receiveUintName = 'XXXXXX监委';
	},
	methods: {
		//判断是否展示其他单位input框
		otherUnitInputFlagChange(receiveUintNameKey) {
			if (receiveUintNameKey == 4) {
				this.otherUnitInputFlag = true;
			} else {
				this.otherUnitInputFlag = false;
			}
		},
		//办理方式标记改变
		dealTypeNameFlagChange(dealTypeNameKey) {
			console.log('调用办理方式标记改变方法');
			this.detailsTab.handleTypeName = '';
			this.detailsTab.handleSubTypeName = '';
			this.handleSubTypeNameFlag = '';
			if (dealTypeNameKey == 1) {
				this.otherOptionsFlag = 1;
				this.otherUnitInputFlag = false;
				var that = this;
				setTimeout(function() {
					that.detailsTab.receiveUintName = 'XXXXXX监委';
					console.log(that.detailsTab.receiveUintName);
				}, 2);
				console.log(this.detailsTab.receiveUintName);
				this.handleTypeNameFoldingBoxFlag = true;
			} else {
				this.detailsTab.receiveUintName = '';
			}
			if (dealTypeNameKey == 2) {
				this.otherOptionsFlag = 2;
				this.handleTypeNameFlag = false;
				this.otherUnitInputFlag = false;
				this.handleTypeNameFoldingBoxFlag = true;
			} else {
				this.detailsTab.receiveUintName = '';
				this.handleTypeNameFlag = true;
			}
			if (dealTypeNameKey == 3) {
				this.otherOptionsFlag = 3;
				this.handleTypeNameFoldingBoxFlag = false;
			}
		},
		//处置方式标记改变
		handleTypeNameFlagChange(handleTypeNameKey) {
			//判断是本级直查还是转下级调查
			if (this.detailsTab.dealTypeName == 1) {
				//表示为本级直查
				if (this.detailsTab.handleTypeName == 1 || this.detailsTab.handleTypeName == 2) {
					this.handleSubTypeNameFlag = '1';
				} else if (this.detailsTab.handleTypeName == 3) {
					this.handleSubTypeNameFlag = '2';
				} else if (this.detailsTab.handleTypeName == 8) {
					this.handleSubTypeNameFlag = '3';
				} else if (this.detailsTab.handleTypeName == 9) {
					this.handleSubTypeNameFlag = '4';
				} else {
					this.handleSubTypeNameFlag = '';
				}
			} else if (this.detailsTab.dealTypeName == 2) {
				//表示转下级调查
				if (this.detailsTab.handleTypeName == 1 || this.detailsTab.handleTypeName == 2) {
					this.handleSubTypeNameFlag = '1';
					this.feedbackWayFlag = true;
				} else if (this.detailsTab.handleTypeName == 3) {
					this.handleSubTypeNameFlag = '2';
					this.feedbackWayFlag = true;
				} else if (this.detailsTab.handleTypeName == 4) {
					this.handleSubTypeNameFlag = '';
					this.feedbackWayFlag = true;
				} else if (this.detailsTab.handleTypeName == 5) {
					this.feedbackWayFlag = true;
				} else if (this.detailsTab.handleTypeName == 8) {
					this.handleSubTypeNameFlag = '3';
				} else if (this.detailsTab.handleTypeName == 9) {
					this.handleSubTypeNameFlag = '4';
				} else {
					this.handleSubTypeNameFlag = '';
					this.feedbackWayFlag = false;
				}
			}
		},
		//历次领导批示(通过点击展示的数据,给表单中对应的属性赋值)
		echoData(event) {
			//下列方式仅限于测试
			//获取展示数据中的内容
			let title = event.target.innerHTML.trim();
			//截取内容的最后一个字符
			let num = title.substring(title.length - 1);
			//根据字符确定回显的信息
			this.detailsTab.certifedPerson = this.previouApprovalInfo[num - 1].key;
			this.detailsTab.certifedTitle = this.previouApprovalInfo[num - 1].value;
		},
		//提交数据
		submit() {
			let that = this;

			// 定义一个标记,用于判断两个表单是否都校验成功
			let formType = false;

			//如果otherUnitInputFlag(是否显示其他单位输入框)为true表示显示,则校验两个表单,如果都为填写了,则进行提交
			if (this.otherUnitInputFlag == true) {
				//其他单位输入框 对应的 表单检验
				that.$refs.detailsChildForm.validate(valid => {
					if (valid) {
						formType = true;
					} else {
						formType = false;
					}
				});
				//大表单 对应的 表单检验
				that.$refs.detailsForm.validate(valid => {
					if (valid) {
						formType = true;
					} else {
						formType = false;
					}
				});

				//判断两个表单是否都校验通过
				if (formType == true) {
					//提示信息
					that.$message({
						showClose: true,
						message: '提交成功',
						type: 'success'
					});
					//提交方法写在此处
					//将tabs标签页中的表单对象放入大表单对象中
					that.editableTabs.forEach(function(e) {
						that.detailsTab.clueInstructionInfos.push(e.newCaseForm);
					});
					//发送请求
					console.log(that.detailsTab);
					this.addDisposalInforMation();
					this.$parent.$parent.dialogFormVisible = false;
				} else {
					that.$message({
						showClose: true,
						message: '温馨提示：有信息不符合要求,请重新确认信息',
						type: 'error'
					});
				}
			} else {
				this.$refs.detailsForm.validate(valid => {
					if (valid) {
						//将tabs标签页中的表单对象放入大表单对象中
						that.editableTabs.forEach(function(e) {
							that.detailsTab.clueInstructionInfos.push(e.newCaseForm);
						});

						//提示信息
						that.$message({
							showClose: true,
							message: '提交成功',
							type: 'success'
						});
						//发送请求
						console.log(that.detailsTab);
						this.addDisposalInforMation();
						this.$parent.$parent.dialogFormVisible = false;
					} else {
						that.$message({
							showClose: true,
							message: '温馨提示：有信息不符合要求,请重新确认信息',
							type: 'error'
						});
					}
				});
			}
		},
		//保存数据
		save() {
			//提示信息
			this.$message({
				showClose: true,
				message: '保存成功',
				type: 'success'
			});
			this.$parent.$parent.dialogFormVisible = false;
		},
		//清空数据
		clearForm() {
			this.$refs.detailsForm.resetFields();
			this.$refs.newCaseForm.forEach(function(e) {
				e.resetFields();
			});
			this.editableTabs = [];
		},
		//添加tab--
		addTab(targetName) {
			let newTabName = ++this.tabIndex + '';
			this.editableTabs.push({
				title: '批示领导信息' + newTabName,
				name: newTabName,
				content: '',
				//选项卡form数据
				newCaseForm: {
					instructionLeader: '', //领导批示
					instructionDate: '', //批示时间
					instructionDesc: '' //批示内容
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
				this.$parent.$parent.dialogFormVisible = false;
			}).catch(() => {});
		}
	}
})
export default class caseSupplement extends Vue {
	@Action AddDisposalInforMation: any;

	addDisposalInforMation() {
		var _params = {
			params: this.detailsTab,
			auth: {
				operateButton: '查询',
				operateMenu: '系统管理-菜单管理',
				operateDesc: '查询菜单具体描述'
			}
		};
		console.log(_params);

		this.AddDisposalInforMation(_params)
			.then(res => {
				this.message = res.resMessage;
				this.$message({
					showClose: true,
					message: this.message,
					type: 'success'
				});
			})
			.catch(() => {
				this.$message({
					showClose: true,
					message: '提交失败!',
					type: 'error'
				});
			});
	}
}
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
//历次报批信息外边线
.approval-info {
	/deep/.el-collapse-item__content {
		border: 1px solid #dee1e7;
		border-bottom-right-radius: 12px;
		border-bottom-left-radius: 12px;
	}
}

//折叠面板
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

//form表单样式
.form-content {
	border: 1px solid #dee1e7;
	padding: 26px;
	border-top: navajowhite;
	border-top-style: none;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
	text-align: left;
}

//tabs页新增按钮样式
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

//分割线
#dividingLine {
	border-color: #e6e6e6;
	border-top-width: 1px;
	border-top-style: solid;
}

// ======公共样式开始======
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
