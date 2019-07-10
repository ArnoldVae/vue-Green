<template>
	<!-- 案件登记 -->
	<div class="backplane">
		<div class="backplane-Content">
			<div>
				<el-container>
					<el-aside width="220px"   class="el-select-tab ">
                        <el-timeline class="pointer-Item">
                            <el-timeline-item
                                    style="margin-left: 3px"
                                    size="large"
                                    :type="activity.active?'primary ':''"
                                    v-for="(activity, index) in subMenuItem"
                                    :key="index"
                            >
                                <span :id="activity.eleId"  @click="menuGo(activity)" :class="[activity.active ? 'active_class' : '']">{{activity.title}}</span>
                               
                            </el-timeline-item>
                        </el-timeline>
                    </el-aside>
					<el-main>
						<el-collapse v-model="activeNames" @change="closeItem" class="collapse">
							<el-collapse-item id="menu1" name="1" v-show="!hideMenuList.step01">
								<template slot="title">
									<i class="header-icon el-icon-info"></i>申诉案件基本情况信息
								</template>
								<div class="form-content">
									<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
										<el-row :gutter="20">
											<el-col :span="6">
												<el-form-item label="案件名称：" prop="name4">
													<el-input v-model="form.name"></el-input>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="申诉来源：" prop="name5">
													<el-select v-model="form.name5" placeholder="请选择" class="form_select">
														<el-option label="信访部门转来" value="1"></el-option>
														<el-option label="下级部门报批" value="2"></el-option>
														<el-option label="本级部门登记" value="3"></el-option>
													</el-select>
												</el-form-item>
											</el-col>

											<el-col :span="6">
												<el-form-item label="申诉事项：" prop="name7">
													<el-select v-model="form.appealItem" placeholder="请选择" class="form_select">
														<el-option label="对党纪处分不服" value="01"></el-option>
														<el-option label="对军纪处分不服" value="02"></el-option>
														<el-option label="对违纪事实不认同" value="03"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="是否重复申诉：" prop="name6">
													<el-radio-group v-model="form.isRepeat">
														<el-radio label="01">是</el-radio>
														<el-radio label="02">否</el-radio>
													</el-radio-group>
												</el-form-item>
											</el-col>
										</el-row>
										<el-row :gutter="20">
											<el-col :span="6">
												<el-form-item label="申诉时间：">
													<el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="接收时间：">
													<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="关联案件：" prop="name5">
													<el-input v-model="form.assoCase" autocomplete="off" placeholder="请选择">
														<template slot="append">选择</template>
													</el-input>
												</el-form-item>
											</el-col>
										</el-row>
									</el-form>
								</div>
							</el-collapse-item>
							<el-collapse-item id="menu2" v-show="!hideMenuList.step02" name="2">
								<template slot="title">
									<i class="header-icon el-icon-document"></i>申诉人基本情况信息
								</template>
								<div class="form-content">
									<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
										<el-row :gutter="20">
											<el-col :span="6">
												<el-form-item label="申诉人：">
													<el-input v-model="form.personNamee"></el-input>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="人员类别：">
													<el-cascader expand-trigger="hover" :options="personnelCategory" class="form_select" v-model="form.category"></el-cascader>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="出生日期：">
													<el-date-picker type="date" placeholder="选择日期" v-model="form.borthday" style="width: 100%;"></el-date-picker>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="政治面貌：">
													<el-select v-model="form.poliStatus" placeholder="请选择" class="form_select">
														<el-option v-for="(option,index)  in poliStatus" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
										</el-row>
										<el-row :gutter="20">
											<el-col :span="12">
												<el-form-item label="部职别：">
													 <el-input placeholder="请输入职务" v-model="form.departGrade" >
                                                        <el-select v-model="form.transDepart" slot="prepend" placeholder="请选择" style=" width: 290px;">
                                                            <el-option v-for="(option,index) in transDepart" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code">
                                                            </el-option>
                                                        </el-select>
                                                    </el-input>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="职级：">
													<el-select v-model="form.professionRank" placeholder="请选择" class="form_select">
														<el-option v-for="(option,index) in professionRank" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="军衔：">
													<el-select class="form_select" v-model="form.rank" placeholder="请选择">
														<el-option v-for="(option,index) in rank" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
										</el-row>
										<el-row :gutter="20">
											<el-col :span="6">
												<el-form-item label="参加工作时间：">
													<el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="入伍时间：">
													<el-date-picker type="date" placeholder="选择日期" v-model="form.date3" style="width: 100%;"></el-date-picker>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="入党(团)时间：">
													<el-date-picker type="date" placeholder="选择日期" v-model="form.partyTime" style="width: 100%;"></el-date-picker>
												</el-form-item>
											</el-col>

										</el-row>

									</el-form>
								</div>
							</el-collapse-item>
							<el-collapse-item id="menu3" v-show="!hideMenuList.step03" name="3">
								<template slot="title">
									<i class="header-icon el-icon-info"></i>主要违纪事实
									<el-button type="text" class="tab-btn-new" @click="addBreach">+新增</el-button>

								</template>

								<div class="form-content">
									<div>

									</div>
									<div class="form-content-box" v-for="(item,i) in breachList" :key="i">
										<div class="form-content-box-title">
											<el-form class="form-label-right" label-position='right' :model="form" :rules="rules">
												<el-row>
													<el-col :span="1">
														<el-tag class="opacity_0">0{{index+1}}</el-tag>
													</el-col>
													<el-col :span="10">
														<el-form-item style="font-weight: normal !important;left: -4.5%" label="问题类别:">
															<el-select v-model="item.problemType" style="left: 4.5%" placeholder="请选择" class="form_select">
																<el-option v-for="(option,index) in discipBehavior" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
													<el-col :span="13">
														<el-button type="text" @click="addBreachSubList(item,i)">+增加事实</el-button>
													</el-col>
												</el-row>
											</el-form>
										</div>
										<div class="form-content-box-body">
											<div class="form-content-box-body-item">
												<el-form class="form-label-right" label-position='right' :model="form" :rules="rules" v-for="(s,index) in item.subList" :key="index">
													<el-row>
														<el-col :span="1">
															<el-tag>0{{index+1}}</el-tag>
														</el-col>
														<el-col :span="10">
															<el-form-item label="违反事项：">
																<el-select v-model="s.subDiscipBehavior" placeholder="请选择" class="form_select">
																	<el-option v-for="(option,index) in subDiscipBehavior" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
																</el-select>
															</el-form-item>
														</el-col>
														<el-col :span="10">
															<el-form-item label="行业领域：">
																<el-select v-model="s.industryField" placeholder="请选择" class="form_select">
																	<el-option v-for="(option,index) in industryField" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
																</el-select>
															</el-form-item>
														</el-col>
														<el-col :span="1">
															<el-button type="text" style="margin-left: 20px" @click="removeSubItem(item,index)"><i class="el-icon-error color-red font-size-24" style="margin-top: -5px"></i></el-button>
														</el-col>
													</el-row>
													<el-row>
														<el-col :span="1">
															<el-tag class="opacity_0"> 01</el-tag>
														</el-col>
														<el-col :span="20">
															<el-form-item label="主要事实：">
																<el-input class="area" type="textarea" v-model="s.area" :row="3" placeholder="请输入内容">
																</el-input>
															</el-form-item>

														</el-col>
													</el-row>
													<hr style="background-color:#efefef;border: none;height: 1px;">
												</el-form>

											</div>

										</div>

									</div>
								</div>
							</el-collapse-item>
							<el-collapse-item id="menu4" v-show="!hideMenuList.step04" name="4">
								<template slot="title">
                                    <i class="header-icon el-icon-document"></i>
                                    <span>处分情况</span>
                                </template>
								<div class="form-content">
									<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
										<el-row gutter="20">
											<el-col :span="6">
												<el-form-item label="党纪处分:">
													<el-select v-model="form.partyPunish" placeholder="请选择" class="form_select">
														<el-option v-for="(option,index) in partyPunish" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="批准时间:">
													<el-date-picker type="date" placeholder="选择日期" v-model="form.date4" style="width: 100%;"></el-date-picker>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="审批权限:">
													<el-select v-model="form.auditLimited" placeholder="请选择" class="form_select">
														<el-option v-for="(option,index) in auditLimited" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="原呈报处分单位:">
													<el-input v-model="form.originalUnit"></el-input>
												</el-form-item>
											</el-col>
										</el-row>
										<el-row gutter="20">
											<el-col :span="6">
												<el-form-item label="军纪处分:">
													<el-select v-model="form.armyPunish" placeholder="请选择" class="form_select">
														<el-option v-for="(option,index) in armyPunish" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
													</el-select>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="批准时间:">
													<el-date-picker type="date" placeholder="选择日期" v-model="form.date5" style="width: 100%;"></el-date-picker>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="审批权限:">
													<el-select v-model="form.auditLimited2" placeholder="请选择" class="form_select">
														<el-option v-for="(option,index) in auditLimited" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
													</el-select>
												</el-form-item>
											</el-col>

										</el-row>
									</el-form>
								</div>

							</el-collapse-item>
						</el-collapse>
					</el-main>
				</el-container>
				<el-dialog title="其他人员信息" class="mc-dialog-medium" append-to-body :visible.sync="dialogFormVisible3">
					<other-person></other-person>
				</el-dialog>
			</div>
			<el-dialog title="问题类别" class="mc-dialog-big" width="100%" top="0" append-to-body :visible.sync="issueItemFlag">
				<IssueItem @transferCheckArr="transferCheckArr"></IssueItem>
			</el-dialog>
		</div>
		<div  class="backplane-footer-center" v-if="pageFlag!='details'">
				<el-button type="primary" @click="submitForm()">提交</el-button>
				<el-button type="success" @click="saveForm()">保存</el-button>
				<el-button @click="closeForm()">返回</el-button>
		</div>
	</div>
</template>

<script lang="ts" scoped>
	import { Component, Vue } from "vue-property-decorator";
	import otherPerson from './othsersPersonModal';
	import IssueItem from '../../pubicMAndC/modal/issueTypeWindow.vue';
	const selectData = require("store/selectData.json");
	const validate = require("../../../utils/validate.js");
	@Component({
		components: {
			otherPerson,
			IssueItem
		},
		selectData: selectData,
		props: ['pageFlag', 'myData'],
		data() {
			return {
				borthday: "",
				form: {
							"name":"",
							"name5":"",
							"appealItem":"",
							"isRepeat":"01",
							"date":"",
							"date1":"",
							"assoCase":"",
							"personName":"",
							"category":"",
							"borthday":"",
							"poliStatus":"",
							"transDepart":"",
                            "transDepart2":"",
                            "departGrade":"",
							"professionRank":"",
							"rank":"",
							"date2":"",
							"date3":"",	
							"date4":"",	
							"date5":"",	
							"date10":"",	
							"partyTime":"",
							"partyPunish":"",
							"auditLimited":"",
							"auditLimited2":"",
							"originalUnit":"",
							"armyPunish":"",
							"isValide":'02',
							"othersHuman":"",
							"othersHuman1":"",
							"value2" :'30',
							"value4":'5',
							"value5":'10',
							"value6":'15',	
						},
				nation: selectData.nation, //民族
				nativePalce: selectData.nativePalce, //籍贯
				personnelCategory: selectData.personnelCategory, //人员类别
				transDepart: selectData.transDepart, //移送部门
				industryField: selectData.industryField, //行业领域
				professionRank: selectData.professionRank, //职级
				educationList: selectData.educationList, //学历
				rank: selectData.rank, //军衔
				npcNmember: selectData.npcNmember, //人大代表
				poliStatus: selectData.poliStatus, //政治面貌
				discipBehavior: selectData.discipBehavior, //违纪行为
				subDiscipBehavior: selectData.subDiscipBehavior, //违纪行为子类
				positionGrade: selectData.positionGrade, //技术职务等级
				departCategory: selectData.departCategory, //单位类别
				techGrade: selectData.techGrade, //技术等级
				taskCategory: selectData.taskCategory, //机关类别
				options: selectData.selectedOptions, // 
				armySpecies: selectData.armySpecies, // 军兵种
				cppcc: selectData.cppcc, //政协委员级别
				partyPunish: selectData.partyPunish, //党纪处分
				armyPunish: selectData.armyPunish, //军纪处分
				 formData:selectData.appealForm,

				timeDefaultShow: new Date(),
				formLabelAlign: {

				},
				auditLimited: [{
						"code": "01",
						"value": "中共中央"
					},
					{
						"code": "02",
						"value": "中央军委"
					},
					{
						"code": "03",
						"value": "军委纪委"
					},
					{
						"code": "04",
						"value": "大单位"
					}
				],
				auditLimited2: [{
						"code": "01",
						"value": "中共中央"
					},
					{
						"code": "02",
						"value": "军委纪委"
					},
					{
						"code": "03",
						"value": "大单位"
					}
				],
				hideMenuList: {
					step01: false,
					step02: false,
					step03: false,
					step04: false,
					step05: false,
					step06: false,
					step07: false,
					step08: false
				},
				hideTabTreeFlag: false,
				activeNames: ['1', '2', '3', '4', '5', '6', '7', '8'],

				rules: {
					name: [{
							required: true,
							message: "请输入活动名称",
							trigger: "blur"
						},
						{
							min: 3,
							max: 5,
							message: "长度在 3 到 5 个字符",
							trigger: "blur"
						}
					],
					idNum: [{
						validator: validate.checkIdCardNo,
						trigger: "blur"
					}]
				}
			};
		},

		created() {
			// console.log(this.myData)
		},
		mounted() {
			//            判断父组件标志

			if(this.pageFlag) {
				if(this.pageFlag == 'caseSup') {
					this.hideTabTreeFlag = true;
					this.hideMenuList = {
						step01: false,
						step02: true,
						step03: true,
						step04: true,
						step05: true,
						step06: true,
						step07: true,
						step08: true
					}
				}
			}
			//给页面绑定滑轮滚动事件
			if(window.addEventListener) { //firefox
				window.addEventListener('scroll', function(e) {
					e = e || window.event;
					for(let i = 1; i < 5; i++) {
						if(document.getElementById('menu' + i) && document.getElementById('menu' + i).getBoundingClientRect()) {
							if(document.getElementById('menu' + i).getBoundingClientRect().top > -900 && document.getElementById('menu' + i).getBoundingClientRect().top < 200) {
								if(i > 1) {
									document.getElementById('menuName' + (i - 1)).setAttribute('class', '')
									document.getElementById('eleBtnId' + (i - 1)).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')

								}
								document.getElementById('menuName' + i).setAttribute('class', 'active_class')
								document.getElementById('eleBtnId' + i).setAttribute('class', 'active-btn-class el-button tab-btn el-button--default el-button--small is-circle')
							} else {
								document.getElementById('menuName' + i).setAttribute('class', '')
								document.getElementById('eleBtnId' + i).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')
							}
						}

					}
					//
				}, true);
			}
			//   window.onmousewheel = window.onmousewheel = scrollFunc;
		},
		mounted(){
            let subMenuItem=this.subMenuItem
            //给页面绑定滑轮滚动事件
            if (window.addEventListener) {//firefox
                window.addEventListener('scroll', function (e) {
                    console.log('aaa')
                    e = e || window.event;
                    for (let i = 1; i < 4; i++) {
                        if (document.getElementById('menu' + i) && document.getElementById('menu' + i).getBoundingClientRect()) {
                            if (document.getElementById('menu' + i).getBoundingClientRect().top > -900 && document.getElementById('menu' + i).getBoundingClientRect().top < 200) {
                                if (i > 1) {
                                    document.getElementById('menuName' + (i - 1)).setAttribute('class', '')

                                }
                                document.getElementById('menuName' + i).setAttribute('class', 'active_class')
                                subMenuItem.forEach((item,index)=>{
                                    if(i==index+1){
                                        item.active=true
                                    }else{
                                        item.active=false
                                    }
                                })
                            } else {
                                document.getElementById('menuName' + i).setAttribute('class', '')
                            }
                        }

                    }
//
                }, true);
            }
        }
	})
	export default class caseSupplement extends Vue {
		issueItem = ''
		 breachList=[
            {
                problemType:"",
                test:'',
                subList:[
                    {
                        test:''
                    },
                    {
                        test:''
                    }
                ]
            }
		]
		 breachList1=[
            {
                problemType:"违反政治纪律行为",
                test:'',
                subList:[{subDiscipBehavior:"对抗组织审查",industryField:"经费管理",test:'',
                    area:" 2002年2月至2010年3月,xxx在组织对其问题线索进行初步核实、对其立案调查期间，多次与涉案人员串通、订立攻守同盟，转移藏匿脏款赃物。"}
                ]
            },
            {
                problemType:"违反政治纪律行为",
                test:'',
                subList:[{subDiscipBehavior:"对抗组织审查",industryField:"经费管理",test:'',
                    area:" 2002年2月至2010年3月,xxx在组织对其问题线索进行初步核实、对其立案调查期间，多次与涉案人员串通、订立攻守同盟，转移藏匿脏款赃物。"}
                ]
            }
        ]
		dialogFormVisible3: boolean = false
		issueItemFlag: boolean = false
		// 附件列表
		visaForm: object = {
			registerFiles: [], // 移送审理案件材料交接登记表
			batchFiles: [], // 案件移送审理呈批表

		}
		subMenuItem: Array = [{
				title: "申诉案件基本情况信息",
				active: true,
				id: 'menu1',
				eleBtnId: "eleBtnId1",
				eleId: 'menuName1'
			},
			{
				title: "申诉人基本情况信息",
				active: false,
				id: 'menu2',
				eleBtnId: "eleBtnId2",
				eleId: 'menuName2'
			},
			{
				title: "主要违纪事实",
				active: false,
				id: 'menu3',
				eleBtnId: "eleBtnId3",
				eleId: 'menuName3'
			},
			{
				title: "处分情况",
				active: false,
				id: 'menu4',
				eleBtnId: "eleBtnId4",
				eleId: 'menuName4'
			}
		]

		menuGo(item) {
            item.active = true;
            for (let i = 1; i < 4; i++) {
                document.getElementById('menuName' + i).setAttribute('class', '')
//                document.getElementById('eleBtnId' + i).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')
            }
            this.subMenuItem.forEach(function (v) {
                if (v.id === item.id) {
                    v.active = true

                } else {
                    v.active = false
                }

            })
            document.getElementById(item.id).scrollIntoView();
        }

		// 获取附件信息
		setRegisterFiles(file, fileList) {
			this.visaForm.registerFiles.push(file)
			const date = new Date()
			for(let i = 0; i < this.visaForm.registerFiles.length; i++) {
				this.visaForm.registerFiles[i].documentname = this.visaForm.registerFiles[i].name
				this.visaForm.registerFiles[i].filesize = this.visaForm.registerFiles[i].size
				this.visaForm.registerFiles[i].documentdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
			}
		}

		setBatchFiles(file, fileList) {
			this.visaForm.batchFiles.push(file)
			const date = new Date()
			for(let i = 0; i < this.visaForm.batchFiles.length; i++) {
				this.visaForm.batchFiles[i].documentname = this.visaForm.batchFiles[i].name
				this.visaForm.batchFiles[i].filesize = this.visaForm.batchFiles[i].size
				this.visaForm.batchFiles[i].documentdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
			}
		}

		// 删除附件
		delBatchFiles(index) {
			this.visaForm.batchFiles.splice(index, 1)
		}

		delRegisterFiles(index) {
			this.visaForm.registerFiles.splice(index, 1)
		}
		/**
		 * 身份证号码带出出生年月
		 *
		 */
		changeIdNo() {
			this.form.borthday = validate.strIdNumBorthday(
				this.form.idNum
			).borthday;
			this.form.sex = validate.strIdNumBorthday(
				this.form.idNum
			).sex;
		}
		//      问题类别带出
		transferCheckArr(item) {
			console.log(item)
			this.issueItem = item.join(',')
		}
		//        增加违反事实
		addBreach() {
			this.breachList.push({
				test: '',
				subList: [{
					test: '',
				}]
			})
		}
		//        增加事实
		addBreachSubList(item, index) {
			this.breachList[index].subList.push({
				test: '',
			})
		}
		closeItem() {
			this.activeNames = ['1', '2', '3', '4']
		}
		//        删除违纪行为
		removeSubItem(item, index) {
			this.$confirm('此操作将删除该条目, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				item.subList.splice(index, 1)
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
			});

		}
		getItemData(item) {
			console.log(item)
			this.form.name = item.caseName
			this.form.name5 = item.caseSource
			this.form.transDepart = item.workUnit
			this.form.date1 = item.date
		}
		echoDetails(item){
            this.form=this.formData;
            this.form.name5=item.caseSource;
            this.form.name=item.caseName;
            this.form.personName=item.personName;
            this.breachList=this.breachList1;
		}
		closeForm(){
            this.$emit("closePage()","SSAJ");
        }
        saveForm(){
            this.$emit("closePage","SSAJ");
            this.$message({
			  type: "success",
			  message: "保存成功!"
			});
        }
        submitForm(){
            this.$confirm("确定提交该案件?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
            }).then(() => {
                this.$emit("closePage","SSAJ");
                this.$message({
                type: "success",
                message: "已提交!"
                });
            }).catch();
        }
	}
</script>

<style ref="stylesheet/scss" lang="scss" scoped>

</style>