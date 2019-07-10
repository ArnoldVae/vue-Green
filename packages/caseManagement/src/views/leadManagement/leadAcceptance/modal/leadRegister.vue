<template>
	<!-- 线索登记 -->
	<div class="backplane">
		<div class="backplane-Content margin-0">
			<el-collapse v-model="activeNames" class="collapse">
				<el-collapse-item id="menu1" title="线索基本信息" name="1">
					<template slot="title">
						<i class="header-icon el-icon-info"></i>
						线索基本信息
					</template>
					<div class="form-content">
						<el-form label-position="top" class="form-label-top" :rules="rules" ref="form1" :model="leadRegistration.leadBasicInfo">
							<el-row :gutter="20">
								<el-col :span="6">
									<el-form-item label="线索名称:" prop="leadName">
										<el-input v-model="leadRegistration.leadBasicInfo.leadName"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="受理时间:" prop="acceptedDate">
										<el-date-picker v-model="leadRegistration.leadBasicInfo.acceptedDate" type="date" value-format="yyyy-MM-dd"
										 placeholder="选择日期">
										</el-date-picker>
									</el-form-item>
								</el-col>
								<el-col :span="12">
									<el-form-item label="问题发生时间:" prop="happenTime">
										<el-date-picker v-model="leadRegistration.leadBasicInfo.happenTime" type="daterange" format="yyyy-MM"
										 range-separator="至" value-format="yyyy-MM" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row :gutter="20">
								<el-col :span="6">
									<el-form-item label="线索来源:" prop="leadSource">
										<el-select class="form_select" v-model="leadRegistration.leadBasicInfo.leadSource" placeholder="请选择" @change="creadSele">
											<el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="涉及金额:" prop="relateMoney">
										<el-input v-model="leadRegistration.leadBasicInfo.relateMoney">
											<template slot="suffix">万元</template>
										</el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="发生单位:" prop="happenOrganization">
										<el-select class="form_select" v-model="leadRegistration.leadBasicInfo.happenOrganization" placeholder="请选择"
										 @change="creadSele">
											<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="行业领域:" prop="industry">
										<el-select class="form_select" v-model="leadRegistration.leadBasicInfo.industry" placeholder="请选择">
											<el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row :gutter="20">
								<el-col :span="6">
									<el-form-item label="是否单位:" prop="isOrganization">
										<el-radio-group v-model="leadRegistration.leadBasicInfo.isOrganization">
											<el-radio label="1">
												是
											</el-radio>
											<el-radio label="2">
												否
											</el-radio>
										</el-radio-group>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="涉及人数:" prop="peoperNum">
										<el-input v-model="leadRegistration.leadBasicInfo.peoperNum"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6" v-if="isShowSele">
									<el-form-item label="所涉案件:" prop="caseRelate">
										<el-select class="form_select" v-model="leadRegistration.leadBasicInfo.caseRelate" placeholder="请选择">
											<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
							</el-row>

							<el-row :gutter="20">
								<el-col :span="24">
									<el-form-item label="线索描述:" prop="leadDescribe">
										<el-input type="textarea" resize="none" :rows="2" placeholder="请输入内容" v-model="leadRegistration.leadBasicInfo.leadDescribe"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
						</el-form>
					</div>
				</el-collapse-item>

				<el-collapse-item id="menu2" name="2">
					<template slot="title">
						<i class="header-icon el-icon-info"></i>
						主要涉案人员信息
					</template>
					<div class="form-content">
						<div class="edit-tabs">
							<el-button type="primary" plain class="add-tab-btn" size="mini" @click="addTab()">添加涉案人员信息</el-button>
							<el-tabs v-model="creadTab" ref="tabs" type="card" closable @tab-remove="removeTab">
								<el-tab-pane v-for="(item, index) in editableTabs2" :key="item.name" :label="item.title" :name="item.name" ref="pane">

									<el-form ref="newCaseFom" class="form-label-top" :data="item.name" label-position="top" :rules="rules2" :model="item.newCaseFom">
										<el-row :gutter="20">
											<el-col :span="6">
												<el-form-item label="姓名:" prop="name">
													<el-input v-model="item.newCaseFom.name"></el-input>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="性别:" prop="sex">
													<div>
														<el-radio-group v-model="item.newCaseFom.sex">
															<el-radio label="男"></el-radio>
															<el-radio label="女"></el-radio>
															<el-radio label="不详"></el-radio>
														</el-radio-group>
													</div>
												</el-form-item>
											</el-col>

											<el-col :span="12">
												<el-form-item label="部职别(工作单位):" prop="departmentLv">
													<el-input v-model="item.newCaseFom.departmentLv"></el-input>
												</el-form-item>
											</el-col>
										</el-row>
										<el-row :gutter="20">
											<el-col :span="6">
												<el-form-item label="现隶属单位:" prop="subjectionOrg">
													<el-select v-model="item.newCaseFom.subjectionOrg" placeholder="请选择" class="form_select">
														<el-option v-for="(option, index) in depOps9" :key="index" v-bind:label="option.value" v-bind:value="option.value"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="人员类别:" prop="personnelCategory">
													<el-select v-model="item.newCaseFom.personnelCategory" placeholder="请选择" class="form_select">
														<el-option v-for="(option, index) in depOps10" :key="index" v-bind:label="option.value" v-bind:value="option.value"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="职务等级:" prop="jobLv">
													<el-select class="form_select" v-model="item.newCaseFom.jobLv" placeholder="请选择">
														<el-option v-for="(option, index) in depOps2" :key="index" v-bind:label="option.value" v-bind:value="option.value"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="在职状态:" prop="jobState">
													<el-select v-model="item.newCaseFom.jobState" placeholder="请选择" class="form_select">
														<el-option v-for="(option, index) in depOps3" :key="index" v-bind:label="option.value" v-bind:value="option.value"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
										</el-row>
										<el-row :gutter="20">
											<el-col :span="24">
												<el-form-item label="其他信息:" prop="otherInfo">
													<el-input type="textarea" resize="none" :rows="2" placeholder="请输入内容" v-model="item.newCaseFom.otherInfo"></el-input>
												</el-form-item>
											</el-col>
										</el-row>

										<div class="dividingLine"></div>

										<el-row :gutter="20">
											<el-col :span="12">
												<el-form-item label="问题发生时间:" prop="happTime">
													<el-date-picker v-model="leadRegistration.leadBasicInfo.happTime" type="daterange" format="yyyy-MM"
													 value-format="yyyy-MM" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="违纪一级分类:" prop="disciplinaryLv1">
													<el-select v-model="
																item.newCaseFom.disciplinaryLv1
															" placeholder="请选择"
													 class="form_select">
														<el-option v-for="(option, index) in depOps4" :key="index" v-bind:label="option.value" v-bind:value="option.value"></el-option>
													</el-select>
												</el-form-item>
											</el-col>

											<el-col :span="6">
												<el-form-item label="违纪二级分类:" prop="disciplinaryLv2">
													<el-select v-model="
																item.newCaseFom.disciplinaryLv2
															" placeholder="请选择"
													 class="form_select">
														<el-option v-for="(option, index) in depOps5" :key="index" v-bind:label="option.value" v-bind:value="option.value"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
										</el-row>
										<el-row :gutter="20">
											<el-col :span="6">
												<el-form-item label="职务违法犯罪一级分类:" prop="disOffenceLv1">
													<el-select v-model="item.newCaseFom.disOffenceLv1" placeholder="请选择" class="form_select">
														<el-option v-for="(option, index) in depOps6" :key="index" v-bind:label="option.value" v-bind:value="option.value"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="职务违法犯罪二级分类:" prop="disOffenceLv2">
													<el-select v-model="item.newCaseFom.disOffenceLv2" placeholder="请选择" class="form_select">
														<el-option v-for="(option, index) in depOps7" :key="index" v-bind:label="option.value" v-bind:value="option.value"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="其他违法犯罪行为:" prop="otherDis">
													<el-select v-model="item.newCaseFom.otherDis" placeholder="请选择" class="form_select">
														<el-option v-for="(option, index) in depOps8" :key="index" v-bind:label="option.value" v-bind:value="option.value"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
										</el-row>

										<el-row :gutter="20">
											<el-col :span="24">
												<el-form-item label="线索描述:" prop="leadDescribe">
													<el-input type="textarea" resize="none" :rows="2" placeholder="请输入内容" v-model="item.newCaseFom.leadDescribe"></el-input>
												</el-form-item>
											</el-col>
										</el-row>
									</el-form>
								</el-tab-pane>
							</el-tabs>
						</div>
					</div>
				</el-collapse-item>
				<el-collapse-item id="3" name="3">
					<template slot="title">
						<i class="header-icon el-icon-info"></i>
						来文单位
					</template>

					<div class="form-content">
						<el-form ref="fileForm" class="form-label-top" label-position="top" :model="leadRegistration.comInfo">
							<el-row :gutter="20">
								<el-col :span="6">
									<el-form-item label="来文单位:" prop="comeOrg">
										<el-input v-model="leadRegistration.comInfo.comeOrg"></el-input>
									</el-form-item>
								</el-col>

								<el-col :span="6">
									<el-form-item label="文件文号:" prop="fileId">
										<el-input v-model="leadRegistration.comInfo.fileId"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="来文时间:" prop="fileTime">
										<el-date-picker type="date" placeholder="选择日期" v-model="leadRegistration.comInfo.fileTime"></el-date-picker>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="文件标题:" prop="fileTitle">
										<el-input v-model="leadRegistration.comInfo.fileTitle"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
						</el-form>
					</div>
				</el-collapse-item>
				<el-collapse-item id="4" name="4">
					<template slot="title">
						<i class="header-icon el-icon-info"></i>
						备注
					</template>

					<div class="form-content">
						<el-form label-position="top" class="form-label-top" ref="formText" :model="leadRegistration.remarks">
							<el-row :gutter="20">
								<el-col :span="24">
									<el-form-item label="备注:" prop="remark">
										<el-input type="textarea" resize="none" :rows="2" placeholder="请输入内容" v-model="leadRegistration.remarks.remark"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
						</el-form>
					</div>
				</el-collapse-item>
			</el-collapse>
			<el-row style="margin-left:8%;">
				<el-form ref="formTip" :model="formTip" class="demo-form-inline">
					<el-col :span="6">
						<el-form-item label="处置时间:" prop="doTime">
							<el-input class="tip-iput" v-model="formTip.doTime" placeholder=""></el-input>
							<span class="span-tip">天</span>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<div class="tip-div-red"></div>
						<el-form-item label="红色预警:" prop="warningLv1">
							<el-input class="tip-iput" v-model="formTip.warningLv1" placeholder=""></el-input>
							<span class="span-tip">天</span>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<div class="tip-div-yel"></div>
						<el-form-item label="黄色预警:" prop="warningLv2">
							<el-input class="tip-iput" v-model="formTip.warningLv2" placeholder=""></el-input>
							<span class="span-tip">天</span>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<div class="tip-div-blue"></div>
						<el-form-item label="蓝色预警:" prop="warningLv3">
							<el-input class="tip-iput" v-model="formTip.warningLv3" placeholder=""></el-input>
							<span class="span-tip">天</span>
						</el-form-item>
					</el-col>
				</el-form>
			</el-row>
			<!-- 底部固定按钮 -->
			<div slot="footer" class="backplane-footer-center">
				<div class="footer-btn-grunp" style="text-align: center;">
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button type="success" @click="save()">保存</el-button>
					<el-button @click="closeDig()">返回</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import {
		Component,
		Vue
	} from 'vue-property-decorator';

	@Component({
		components: {},
		data() {
			return {
				leadRegistration: {
					//线索基本信息
					leadBasicInfo: {
						caseRelate: '', //所涉案件
						leadName: '', //线索名称
						acceptedDate: '', //受理时间
						leadSource: '', //线索来源
						happenTime: '', //发生时间
						relateMoney: '', //涉案金额
						happenOrganization: '', //发生单位
						industry: '', //行业领域
						isOrganization: '', //是否单位
						peoperNum: '', //涉案人数
						leadDescribe: '', //线索描述
						leadNum: '', //线索编号
					},
					//来文form表单数据
					comInfo: {
						comeOrg: '', //来文单位
						fileId: '', //文件编号
						fileTitle: '', //文件标题
						fileTime: '' //来文时间
					},
					//备注form
					remarks: {
						remark: '' //备注
					},

					involvedPerson: [] //新增涉案人员
				},
				//预警天数form
				formTip: {
					doTime: '10', //处置时间
					warningLv1: '2', //共色预警
					warningLv2: '10', //黄色预警
					warningLv3: '5' //蓝色预警
				},

				//线索基本信息表单校验	
				rules: {
					acceptedDate: [{
						required: true,
						message: '请输入受理时间',
						trigger: 'blur'
					}, ],
					happenOrganization: [{
						required: true,
						message: '请输入发生单位',
						trigger: 'change'
					}, ],
					industry: [{
						required: true,
						message: '请输入行业领域',
						trigger: 'change'
					}, ],
				},

				rules2: {
					subjectionOrg: [{
						required: true,
						message: '请选择现隶属单位',
						trigger: 'change'
					}, ],
					personnelCategory: [{
						required: true,
						message: '请输入人员类别',
						trigger: 'change'
					}, ],
					jobLv: [{
						required: true,
						message: '请选择职务等级',
						trigger: 'change'
					}, ],
					jobState: [{
						required: true,
						message: '请选择在职状态',
						trigger: 'change'
					}, ],
				},


				//折叠面板展示的标识
				activeNames: ['1', '2', '3', '4'],

				//判断选项标记
				isShowSele: false,
				//添加选项卡初始化数据
				creadTab: '1',
				editableTabs2: [{
					//选项卡属性
					title: '新增涉案人员1',
					name: '1',
					content: '',
					//选项卡form表单数据
					newCaseFom: {
						id: '',
						name: '',
						sex: '',
						subjectionOrg: '',
						jobLv: '',
						departmentLv: '',
						jobState: '',
						happTime: '',
						disciplinaryLv1: '',
						disciplinaryLv2: '',
						disOffenceLv1: '',
						disOffenceLv2: '',
						otherDis: '',
						personnelCategory: '', //人员类别
						otherInfo: '', //其他信息
						comment: '', //备注
						leadDescribe: '' //线索描述
					}
				}],
				tabIndex: 1,
				//线索来源下拉选数据
				options1: [{
						id: 'step01',
						active: true,
						value: '巡视移交'
					},
					{
						id: 'step02',
						active: false,
						value: '审计移送'
					},
					{
						id: 'step03',
						active: false,
						value: '违纪行为'
					},
					{
						id: 'step04',
						active: false,
						value: '审查调查发现'
					},
					{
						id: 'step05',
						active: false,
						value: '信访举报'
					},
					{
						id: 'step06',
						active: false,
						value: 'XXX事检察机关移送'
					},
					{
						id: 'step07',
						active: false,
						value: '领导批办'
					},
					{
						id: 'step08',
						active: false,
						value: 'XXXXXX和地方XXX移送'
					}
				],
				//发生单位
				options2: [{
						id: 'a01',
						active: true,
						value: '东部战区'
					},
					{
						id: 'a02',
						active: false,
						value: '南部战区'
					}
				],
				//行业领域下拉选
				options3: [{
						id: 'a01',
						active: true,
						value: '炮兵'
					},
					{
						id: 'a02',
						active: false,
						value: '后勤'
					}
				],
				depOps2: [{
						value: '正局级'
					},
					{
						value: '副局级'
					}
				],
				//在职状态下拉选
				depOps3: [{
					value: '离职'
				}, {
					value: '在职'
				}],
				//违纪一级分类
				depOps4: [{
						value: '违纪一级分类1'
					},
					{
						value: '违纪一级分类2'
					}
				],
				//违纪二级分类
				depOps5: [{
					value: '违纪二级分类1'
				}, ],
				//职务违法犯罪一级分类
				depOps6: [{
						value: '职务违法犯罪一级分类1'
					},
					{
						value: '职务违法犯罪一级分类2'
					}
				],
				//职务违法犯罪二级分类
				depOps7: [{
						value: '职务违法犯罪二级分类1'
					},
					{
						value: '职务违法犯罪二级分类'
					}
				],
				//其他犯罪分类
				depOps8: [{
						value: '其他犯罪分类1'
					},
					{
						value: '其他犯罪分类2'
					}
				],
				//现隶属单位
				depOps9: [{
						id: 'a01',
						active: true,
						value: '东部战区'
					},
					{
						id: 'a02',
						active: false,
						value: '南部战区'
					}
				],
				//人员类别下拉选
				depOps10: [{
						id: 'a01',
						active: true,
						value: '非专业技术文职干部'
					},
					{
						id: 'a02',
						active: false,
						value: '士官'
					}
				],
				saveFlag: false
			};
		},
		created() {},
		mounted() {
			this.editLead();
		},
		methods: {
			//登记完毕
			submit() {
				//提交数据
				let that = this;
				let form1Valid = false; //form1校验标记
				this.editableTabs2.forEach(function(e) {
					//新建涉案人员tab中取出数据
					that.leadRegistration.involvedPerson.push(e.newCaseFom)
				});

				this.$refs['form1'].validate((valid) => {
					if (valid) {
						form1Valid = true;
					}
				});
				let dataArr = []; //涉案人员form表单存放data属性数组
				let validArr = []; //存放校验通过的form表单校验成功布尔
				this.$refs.newCaseFom.forEach((e) => {
					e.validate((valid) => {
						if (valid) {
							validArr.push(valid)
						} else {
							dataArr.push(e.$attrs.data) //校验不通过的form,data属性放入数组
							that.creadTab = dataArr[0] //tabs组件选定校验不通过的form
							return false;
						}
					})
				})
				//涉案人员form校验数组的长度和form对象的长度相等并且form1校验通过,提交表单
				if (validArr.length == this.$refs.newCaseFom.length && form1Valid == true) {
					console.log(this.leadRegistration)
					this.$message({
						showClose: true,
						message: '登记完毕',
						type: 'success'
					});
					this.clearForm()
				} else {
					this.$message({
						showClose: true,
						message: '温馨提示：有信息不符合要求,请重新确认信息.',
						type: 'error'
					});
					return false;
				}

				dataArr = [];
				validArr = [];
				this.$parent.$parent.dialogDisEnd = false;
			},
			//保存方法
			save() {
				let that = this
				this.editableTabs2.forEach(function(e) {
					//新建涉案人员tab中取出数据
					that.leadRegistration.involvedPerson.push(e.newCaseFom)
				});
				console.log(this.leadRegistration)
				this.$message({
					showClose: true,
					message: '保存成功',
					type: 'success'
				});
				this.saveFlag = true;
				this.clearForm()
			},
			//清空数据
			clearForm() {
				this.$refs.form1.resetFields();
				this.$refs.fileForm.resetFields();
				this.$refs.formText.resetFields();
				this.$refs.newCaseFom.forEach(function(e) {
					e.resetFields()
				});
			},
			//修改线索回显数据
			editLead() {
				//修改子页面的保存标记
				this.saveFlag = false;
				if (this.dialogDisEnd) {
					let leadTabList = this.leadDisEndList;
					//分别赋值表单 对应字段
					let caseForm = this.editableTabs2[0].newCaseFom;
					let leadBasicInfo = this.leadRegistration.leadBasicInfo;

					leadBasicInfo.leadNum = leadTabList.leadNum;
					leadBasicInfo.leadSource = leadTabList.leadSource;
					leadBasicInfo.leadName = leadTabList.leadName;

					caseForm.id = leadTabList.id;
					caseForm.name = leadTabList.name;
					caseForm.subjectionOrg = leadTabList.subjectionOrg;
					caseForm.departmentLv = leadTabList.departmentLv;
					caseForm.id = leadTabList.id;
				}
			},
			//判断下拉选选项,显示涉案输入框
			creadSele(sle) {
				if (sle === '审查调查发现') {
					this.isShowSele = true;
				} else {
					this.isShowSele = false;
				}
			},
			//添加tab--
			addTab(targetName) {
				let newTabName = ++this.tabIndex + '';
				this.editableTabs2.push({
					title: '新增涉案人员' + newTabName,
					name: newTabName,
					//选项卡form数据
					newCaseFom: {
						name: '',
						sex: '',
						subjectionOrg: '',
						jobLv: '',
						departmentLv: '',
						jobState: '',
						happTime: '',
						disciplinaryLv1: '',
						disciplinaryLv2: '',
						disOffenceLv1: '',
						disOffenceLv2: '',
						otherDis: '',
						comment: ''
					}
				});
				this.creadTab = newTabName;
				console.log(this.$refs)
			},
			//移除tab
			removeTab(targetName) {
				let tabs = this.editableTabs2;
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
				if (this.editableTabs2.length == 1) {
					this.tabIndex = [];
				}

				this.creadTab = activeName;
				this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
			},
			//关闭弹窗
			closeDig() {
				if (this.saveFlag == false) {
					this.$confirm('确定不保存并退出?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						console.log(this.$parent.$parent.dialogFormVisible)
						this.$parent.$parent.dialogFormVisible = false;
						this.$parent.$parent.dialogDisEnd = false;
						this.clearForm();
					}).catch(() => {});

				} else {
					console.log(this.$parent.$parent.dialogFormVisible);
					this.$parent.$parent.dialogFormVisible = false;
					this.$parent
						.$parent.dialogDisEnd = false;
					this.clearForm();
				}
			}
		},
		props: ['dialogDisEnd', 'leadDisEndList']
	}) export default class caseSupplement extends Vue {}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
	//公共样式------
	.el-collapse-item {
		/deep/.el-collapse-item__header {
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


	//自定义样式------

	//底部预警天数样式
	.demo-form-inline {
		text-align: left;
		width: 100%;
		font-size: 14px;
		margin-top: 1%;

		/deep/.el-input__inner {
			height: 40px;
			background-color: #DEEFFF;
			border: 1px solid #85BEED;
			border-radius: 4px;
		}

		/deep/.span-tip {
			margin-left: 10px;
		}

		/deep/ .tip-div-yel {
			background: #ff9900;
			width: 20px;
			height: 15px;
			float: left;
			margin-top: 12px;
		}

		.tip-div-blue {
			background: #0000ff;
			width: 20px;
			height: 15px;
			float: left;
			margin-top: 12px;
		}

		.tip-div-red {
			background: red;
			width: 20px;
			height: 15px;
			float: left;
			margin-top: 12px;
		}
	}

	.tip-iput {
		width: 60px;
	}

	//tabs页新增按钮样式
	.edit-tabs {
		.add-tab-btn {
			right: 2%;
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

	/* 	//选项卡
	/deep/ .el-tabs__nav.is-top {
		margin-left: 5px;
	} */

	//input输入框后缀
	/deep/.el-input__suffix-inner {
		color: #606266;
	}

	//分割线
	.dividingLine {
		margin-top: 10px;
		margin-bottom: 10px;
		border: 1px dashed #e6e6e6;
	}

	// 	//底部固定的按钮样式
	// 	.body-footer {
	// 		right: 2px;
	// 		.el-button {
	// 			margin: 0px 8px 0px 8px;
	// 		}
	// 	}
</style>
