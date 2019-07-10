<template>
	<!-- 案件著录 -->
	<div>
		 <el-container>
			<el-aside width="220px" class="el-select-tab">
                        <el-timeline class="pointer-Item">
                            <el-timeline-item
                                    style="margin-left: 3px"
                                    size="large"
                                    :type="activity.active?'primary ':''"
                                    v-for="(activity, index) in subMenuItem"
                                    :key="index"
                            >
                                <span :id="activity.eleId" @click="menuGo(activity)" :class="[activity.active ? 'active_class' : '']">{{activity.title}}</span>

                            </el-timeline-item>
                        </el-timeline>
			</el-aside>
			<el-main>
				<el-collapse v-model="activeNames" class="collapse">
					<el-collapse-item id="menu1" name="0">
						<template slot="title">
							<i class="header-icon el-icon-info"></i>归档基本信息
						</template>
						<div class="form-content">
							<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
								<el-row :gutter="20">
									<el-col :span="6">
										<el-form-item label="年度:" required>
											<el-date-picker type="year" placeholder="请选择" v-model="form.year" style="width: 100%;"></el-date-picker>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="全宗号:" required>
											<el-input v-model="form.bookNo"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="案件号:" required>
											<el-input v-model="form.bookNo2"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="档号:" required>
											<el-input v-model="form.bookNo3"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">	
									<el-col :span="6">
										<el-form-item label="单位名称:" required>
											<el-input v-model="form.bookNo4"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="密级:" required>
											<el-select class="form_select" v-model="form.secretGrade1" placeholder="请选择">
												<el-option label="绝密" value="01"></el-option>
												<el-option label="机密" value="02"></el-option>
												<el-option label="秘密" value="03"></el-option>
												<el-option label="不涉密" value="04"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="总卷数:" required>
											<el-input v-model="form.bookNo5"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="盒数:" required>
											<el-input v-model="form.bookNo6"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">	
									<el-col :span="6">
										<el-form-item label="总页数:">
											<el-input v-model="form.bookNo7"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="有无光盘:">
											<el-radio-group v-model="form.bookNo8">
												<el-radio label="1" size="medium">有</el-radio>
												<el-radio label="2" size="medium">无</el-radio>
											</el-radio-group>
										</el-form-item>
									</el-col>

								<el-col :span="6">
										<el-form-item label="光盘数量:">
											<el-input v-model="form.bookNo9"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="保管期限:">
											<el-radio-group v-model="form.bookNo10">
												<el-radio label="1" size="medium">永久</el-radio>
												<el-radio label="2" size="medium">长期</el-radio>
											</el-radio-group>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">	
									<el-col :span="6">
										<el-form-item label="档案管理人:" required>
											<el-input v-model="form.name11"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="归档人:" required>
											<el-input v-model="form.name12"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="归档部门:" required>
											<el-input v-model="form.fileDepart" placeholder="案审局"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="归档时间:" required>
											<el-date-picker type="date" placeholder="请选择" v-model="form.archiveDate" style="width: 100%;"></el-date-picker>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">	
									<el-col :span="6">
										<el-form-item label="库存位置:" required>
											<el-input v-model="form.name14"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20" >
									<el-col :span="24">
										<el-form-item label="备注:">
											<el-input type="textarea"  :autosize="{ minRows: 4}" v-model="form.name15" :row="3" placeholder="请输入内容">

											</el-input>
										</el-form-item>
									</el-col>
								</el-row>
							</el-form>
						</div>
					</el-collapse-item>
					<el-collapse-item id="menu2" name="1" v-show="!hideMenuList.step01">
						<template slot="title">
							<i class="header-icon el-icon-info"></i>案件基本情况信息
						</template>
						<div class="form-content">
							<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
								<el-row :gutter="20">
									<el-col :span="6">
										<el-form-item label="案件名称:" required>
											<el-input v-model="form.name"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="案件类型:" required>
											<el-select v-model="form.name5" placeholder="请选择" class="form_select">
												<el-option label="直查案件" value="1"></el-option>
												<el-option label="报批案件" value="2"></el-option>
												<el-option label="司法移送案件" value="3"></el-option>
												<el-option label="直查后通报大单位" value="4"></el-option>
												<el-option label="大单位调查" value="5"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="案件涉密等级:" required>
											<el-radio-group v-model="form.secretGrade">
												<el-radio label="01">秘密</el-radio>
												<el-radio label="02">机密</el-radio>
												<el-radio label="03">绝密</el-radio>
												<el-radio label="04">不涉密</el-radio>
											</el-radio-group>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">

									<el-col :span="6">
										<el-form-item label="移送部门:" required>
											<el-select class="form_select" v-model="form.transDepart" placeholder="请选择">
												<el-option v-for="(option,index) in transDepart" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="接收时间:" required>
											<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" :default-value="timeDefaultShow" format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
										</el-form-item>
									</el-col>
								</el-row>
							</el-form>
						</div>
					</el-collapse-item>
					<el-collapse-item id="menu3" v-show="!hideMenuList.step02" name="2">
										<template slot="title">
											<i class="header-icon el-icon-document"></i>
											<span>处分对象基本情况信息</span>
										</template>
										<div class="form-content">
											<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="姓名：" prop="name">
															<el-input v-model="form.name1"></el-input>
														</el-form-item>
													</el-col>
													<el-col :span="12">
														<el-form-item label="部职别：" prop="name1">
															<el-input placeholder="请输入职务" v-model="form.departGrade" >
																<el-select v-model="form.transDepart2" slot="prepend" placeholder="请选择" style=" width: 290px;">
																	<el-option v-for="(option,index) in transDepart" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code">
																	</el-option>
																</el-select>
															</el-input>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="人员类别：">
															<el-cascader expand-trigger="hover" :options="personnelCategory" v-model="form.category"></el-cascader>
														</el-form-item>
													</el-col>
												</el-row>
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="身份证号码：" prop="idNum">
															<el-input v-model="form.idNum" @change="changeIdNo"></el-input>
														</el-form-item>
													</el-col>

													<el-col :span="6">
														<el-form-item label="性别：">
															<el-radio-group v-model="form.sex">
																<el-radio label="1" size="medium">男</el-radio>
																<el-radio label="2" size="medium">女</el-radio>
															</el-radio-group>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="民族：">
															<el-select v-model="form.nation" filterable placeholder="请选择">
																<el-option
																		v-for="(option,index) in nation"
																		:key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code">
																</el-option>
															</el-select>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="学历：">
															<el-select class="form_select" v-model="form.region" placeholder="请选择">
																<el-option v-for="(option,index) in educationList" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
												</el-row>
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="职级：">
															<el-select v-model="form.professionRank" placeholder="请选择" class="form_select">
																<el-option v-for="(option,index) in professionRank" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="技术等级：" >
															<el-select v-model="form.techGrade" placeholder="请选择" class="form_select">
																<el-option v-for="(option,index) in techGrade" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="单位类型：">
															<el-select v-model="form.departCategory" placeholder="请选择" class="form_select">
																<el-option v-for="(option,index) in departCategory" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="单位任务类型：">
															<el-select v-model="form.taskCategory" placeholder="请选择" class="form_select">
																<el-option v-for="(option,index) in taskCategory" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
												</el-row>
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="XXX衔(文职级)：">
															<el-select class="form_select" v-model="form.rank" placeholder="请选择">
																<el-option v-for="(option,index) in rank" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="籍贯：">
															<el-select class="form_select" v-model="form.nativePalce" placeholder="请选择">
																<el-option v-for="(option,index) in nativePalce" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="政治面貌：">
															<el-select v-model="form.poliStatus" placeholder="请选择" class="form_select">
																<el-option v-for="(option,index)  in poliStatus" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="是否主官：">
															<el-radio-group v-model="form.isManager">
																<el-radio label="1" size="medium">是</el-radio>
																<el-radio label="2" size="medium">否</el-radio>
															</el-radio-group>
														</el-form-item>
													</el-col>

												</el-row>
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="出生日期：">
															<el-date-picker type="date" placeholder="选择日期" v-model="form.borthday"
																			style="width: 100%;"></el-date-picker>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="参加工作时间：">
															<el-date-picker type="date" placeholder="选择日期" v-model="form.date2"
																			style="width: 100%;"></el-date-picker>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="入伍时间：">
															<el-date-picker type="date" placeholder="选择日期" v-model="form.date3"
																			style="width: 100%;"></el-date-picker>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="入党(团)时间：">
															<el-date-picker type="date" placeholder="选择日期" v-model="form.partyTime" style="width: 100%;"></el-date-picker>
														</el-form-item>
													</el-col>
												</el-row>
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="人大代表级别：">
															<el-select v-model="form.npcNmember" placeholder="请选择" class="form_select">
																<el-option v-for="(option,index) in npcNmember" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="政协委员级别：">
															<el-select v-model="form.cppcc" placeholder="请选择" class="form_select">
																<el-option v-for="(option,index) in cppcc" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
												</el-row>
											</el-form>
										</div>

					</el-collapse-item>

					<el-collapse-item id="menu4" title="案件来源及调查情况" v-show="!hideMenuList.step03" name="3">
						<div class="form-content">
							<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
								<el-row :gutter="20">
									<el-col :span="24">
										<el-form-item label="案件来源及调查情况:">
											<el-input v-model="form.caseSource"  :autosize="{ minRows: 4}" type="textarea" :row="3" placeholder="请输入内容">

											</el-input>
										</el-form-item>
									</el-col>
								</el-row>
							</el-form>
						</div>

					</el-collapse-item>
					<el-collapse-item id="menu5"  v-show="!hideMenuList.step04" name="4">
										<template slot="title">
											<i class="header-icon el-icon-info"></i><span class="title" style="    display: contents;">主要违纪事实</span>
											<el-button type="text" class="tab-btn-new" @click="addBreach">+新增</el-button>

										</template>

										<div class="form-content">
											<div>

											</div>
											<div class="form-content-box" v-for="(item,i) in breachList" :key="i">
												<div class="form-content-box-title">
													<el-form class="form-label-right"  label-position='right' :model="form" :rules="rules">
														<el-row>
															<el-col :span="1">
																<el-tag class="opacity_0">0{{index+1}}</el-tag>
															</el-col>
															<el-col :span="10">
																<el-form-item style="font-weight: normal !important;left: -1%" label="问题类别:">
																	<el-select v-model="item.problemType" style="left: 4.5%" placeholder="请选择" class="form_select">
																		<el-option v-for="(option,index) in discipBehavior" :key="index"
																				v-bind:label="option.value"
																				v-bind:value="option.code"></el-option>
																	</el-select>
																</el-form-item>
															</el-col>
															<el-col :span="13">
																<el-button type="text" @click="addBreachSubList(item,i)">+增加事实</el-button>
																<el-button type="text" style="margin-left: 20px" @click="removeItem(item,i)"><i class="el-icon-error color-red font-size-24"></i></el-button>

															</el-col>
														</el-row>
													</el-form>


												</div>
												<div class="form-content-box-body">
													<div class="form-content-box-body-item" >
														<el-form class="form-label-right"  label-position='right' :model="form" :rules="rules" v-for="(s,index) in item.subList" :key="index">
															<el-row>
																<el-col :span="1">
																	<el-tag>0{{index+1}}</el-tag>
																</el-col>
																<el-col :span="10">
																	<el-form-item label="违反事项：">
																		<el-select v-model="s.subDiscipBehavior" placeholder="请选择" class="form_select">
																			<el-option v-for="(option,index) in subDiscipBehavior" :key="index"
																					v-bind:label="option.value"
																					v-bind:value="option.code"></el-option>
																		</el-select>
																	</el-form-item>
																</el-col>
																<el-col :span="10">
																	<el-form-item label="行业领域：">
																		<el-select v-model="s.industryField" placeholder="请选择" class="form_select">
																			<el-option v-for="(option,index) in industryField" :key="index"
																					v-bind:label="option.value"
																					v-bind:value="option.code"></el-option>
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
																		<el-input class="area"  :autosize="{ minRows: 4}" type="textarea" v-model="s.area" :row="3" placeholder="请输入内容">
																		</el-input>
																	</el-form-item>

																</el-col>
															</el-row>
															<hr>
														</el-form>

													</div>

												</div>

											</div>
										</div>
						</el-collapse-item>
					<el-collapse-item id="menu6" name="5" v-show="!hideMenuList.step01">
						<template slot="title">
							<i class="header-icon el-icon-info"></i>处分情况
						</template>
						<div class="form-content">
							<el-form class="form-label-top managerShow" label-position='top' :model="form" :rules="rules">
							<el-collapse v-model="activeNames1" @change="handleChange" class="collapse">	
								<el-collapse-item id="menu9" name="1" v-show="!hideMenuList.step01">
										<template slot="title">
											党纪处分
										</template>
										<div class="form-content">
											<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="党纪处分:">
															<el-select v-model="form.partyPunish" placeholder="请选择" class="form_select">
																<el-option v-for="(option,index) in partyPunish" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="批准时间:">
															<el-date-picker type="date" placeholder="选择日期" v-model="form.date9"
																			style="width: 100%;"></el-date-picker>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="处分时间:">
															<el-date-picker type="date" placeholder="选择日期" v-model="form.date10"
																			style="width: 100%;"></el-date-picker>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="批准机关:" required>
															<el-input v-model="form.name7"></el-input>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="作出处分决定机关:" required>
															<el-input v-model="form.name2"></el-input>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="党纪处分审批级别:">
															<el-select v-model="form.professionRank1" placeholder="请选择" class="form_select">
																<el-option label="上级审批" value="01"></el-option>
																<el-option label="本级审批" value="02"></el-option>
																<el-option label="下级审批" value="03"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
												</el-row>
											</el-form>
										</div>
								</el-collapse-item>
								<el-collapse-item id="menu9" name="2" v-show="!hideMenuList.step01">
										<template slot="title">
											XXX纪处分
										</template>
										<div class="form-content">
											<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="XXX纪处分:">
															<el-select v-model="form.armyPunish" placeholder="请选择" class="form_select">
																<el-option v-for="(option,index) in armyPunish" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="批准时间:">
															<el-date-picker type="date" placeholder="选择日期" v-model="form.date11"
																			style="width: 100%;"></el-date-picker>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="批准机关:" required>
															<el-input v-model="form.name3"></el-input>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="XXX纪处分审批级别:">
															<el-select v-model="form.professionRank2" placeholder="请选择" class="form_select">
																<el-option label="上级审批" value="01"></el-option>
																<el-option label="本级审批" value="02"></el-option>
																<el-option label="下级审批" value="03"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
												</el-row>
											</el-form>
										</div>
								</el-collapse-item>
								<el-collapse-item id="menu9" name="3" v-show="!hideMenuList.step01">
										<template slot="title">
											其他处理
										</template>
										<div class="form-content">
											<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="处理类型:">
															<el-select v-model="form.handleType" placeholder="请选择" class="form_select">
																<el-option v-for="(option,index) in handleType" :key="index"
																		v-bind:label="option.value"
																		v-bind:value="option.code"></el-option>
															</el-select>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="批准时间:">
															<el-date-picker type="date" placeholder="选择日期" v-model="form.date12"
																			style="width: 100%;"></el-date-picker>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="批准机关:" required>
															<el-input v-model="form.name4"></el-input>
														</el-form-item>
													</el-col>
												</el-row>
											</el-form>
										</div>
								</el-collapse-item>
								<el-collapse-item id="menu9" name="4" v-show="!hideMenuList.step01">
										<template slot="title">
											刑事处罚
										</template>
										<div class="form-content">
											<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="刑事处罚:" required>
															<el-input v-model="form.criminalPunishment"></el-input>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="判决时间:">
															<el-date-picker type="date" placeholder="选择日期" v-model="form.date13"
																			style="width: 100%;"></el-date-picker>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="审判机关:" required>
															<el-input v-model="form.adjudicationOrgan "></el-input>
														</el-form-item>
													</el-col>
												</el-row>
											</el-form>
										</div>
								</el-collapse-item>
							</el-collapse>
							</el-form>
						</div>
						<!-- <PunishSituation></PunishSituation> -->
					</el-collapse-item>
				</el-collapse>
			</el-main>
		 </el-container>
		
		
		<div class="backplane-footer-center" v-show="!hideTabTreeFlag&&pageFlag!=='total'">
			<el-button type="primary">直接入库</el-button>
			<el-button type="success">保存</el-button>
		</div>
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	 import PunishSituation from "./punishSituation.vue"; //处分情况
	const selectData = require("store/selectData.json");
	const validate = require("../../../utils/validate.js");
	@Component({
		components: {PunishSituation},
		selectData: selectData,
		props: ['pageFlag'],
		data() {
			return {
				borthday: "",
				 form: {
					"year":"",
					"bookNo":"",
					"bookNo2":"",
					"bookNo3":"",
					"secretGrade1":"",
					"bookNo4":"",
					"bookNo5":"",
					"bookNo6":"",
					"bookNo7":"",
					"bookNo8":"1",
					"bookNo9":"",
					"bookNo10":"1",
					"name11":"",
					"name12":"",
					"fileDepart":"",
					"archiveDate":"",
					"name14":"",
					"name15":"",
                    name: "",
                    name5:'',
                    secretGrade:'01',
                    transDepart:'',//移送部门
                    transDepart2:'',//部职别
                    date1: '',
                    name1:'',
                    departGrade:'',
                    category:'',//人员类别
                    idNum:'',
                    sex: "1",
                    nation:'',//民族
                    region: "",
                    professionRank:'',//职级
                    techGrade:'',
                    selectedOptionss:'',
                    positionGrade:'',//技术职务等级
                    rank:'',//XXX衔
                    nativePalce:'',//籍贯
                    poliStatus:'',//政治面貌
                    isManager:'1',//是否主管
                    borthday: "2019-01-01",
                    date2: '',
                    date3: '',
                    partyTime:'',
                    supervisedPersion:'01',
                    departCategory:'',
                    taskCategory:'',
                    npcNmember:'',//人大代表
                    cppcc:'',// 政协委员
                    industryField:'',//行业领域
                    discipBehavior:'',//违纪行为
                    subDiscipBehavior:'',//违纪行为子类
                    armySpecies:'',//XXX兵种
                    gender:'01',
                    identify:'',//身份证号码
                    isValide:'',
                    secretGrades:'',//审批权限
                    orgCategory:'',
					caseSource:'',
					partyPunish:'',
					armyPunish:'',
					date9:'',
					date10:'',
					name7:'',
					name2:'',
					professionRank1:'01',
					date11:'',
					name3:'',
					name4:'',
					professionRank2:'01',
					handleType:'01',
					date13:'',
					date12:'',
					criminalPunishment:'',
					adjudicationOrgan:''
					
                },
				nation: selectData.nation, //民族
				nativePalce: selectData.nativePalce, //籍贯
				personnelCategory: selectData.personnelCategory, //人员类别
				transDepart: selectData.transDepart, //移送部门
				industryField: selectData.industryField, //行业领域
				professionRank: selectData.professionRank, //职级
				educationList: selectData.educationList, //学历
				rank: selectData.rank, //XXX衔
				npcNmember: selectData.npcNmember, //人大代表
				poliStatus: selectData.poliStatus, //政治面貌
				discipBehavior: selectData.discipBehavior, //违纪行为
				subDiscipBehavior: selectData.subDiscipBehavior, //违纪行为子类
				positionGrade:selectData.positionGrade,
			    departCategory:selectData.departCategory,//单位类型
			    techGrade:selectData.techGrade,//技术级别
			    taskCategory:selectData.taskCategory,//单位任务类型
			    partyPunish:selectData.partyPunish,//党纪处分
			    armyPunish:selectData.armyPunish,//XXX纪处分
			    handleType:selectData.handleType,//处理类型
				formData:selectData.form,


				 timeDefaultShow: new Date(),
				
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

				//用于新增违纪行为    
				discipBehaviorList: [{
					test: ""
				}],
				activeNames: ['0', '1', '2', '3', '4', '5', '6', '7', '8','9','10','11'],
				activeNames1: [ '1', '2', '3', '4'],

				rules : {
						name: [
						{ required: true, message: "请输入", trigger: "blur" },
						{ min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
						],
						idNum: [{ validator: validate.checkIdCardNo, trigger: "blur" }],
						year:[{ type: 'year', required: true, message: '请选择日期', trigger: 'change' }]
					}
			};
		},

		created() {
			//console.log(selectData)
		},
		mounted() {
			
		},
		methods: {
			parentMethod(target: string, pageIndex: string) {
				if(target == 'caseSup') {
					console.log(this.hideMenuList);
					for(let key in this.hideMenuList) {
						if(key == pageIndex) {
							this.hideMenuList[key] = false;
						} else {
							this.hideMenuList[key] = true
						}
					}
				}

			},
			//新增违纪行为
			addDiscipBehavior() {
				this.discipBehaviorList.push({
					test: ""
				})
			},
		}
	})
	export default class caseSupplement extends Vue {
		subMenuItem: Array = [
            {
                title: "归档基本情况信息",
                active: true,
                id: 'menu1',
                eleBtnId: "eleBtnId1",
                eleId: 'menuName1'
            },
            {
                title: "案件基本情况信息",
                active: false,
                id: 'menu2',
                eleBtnId: "eleBtnId2",
                eleId: 'menuName2'
            },
            {
                title: "处分对象基本情况信息",
                active: false,
                id: 'menu3',
                eleBtnId: "eleBtnId3",
                eleId: 'menuName3'
            },
            {
                title: "案件来源及调查情况",
                active: false,
                id: 'menu4',
                eleBtnId: "eleBtnId4",
                eleId: 'menuName4'
            },
            {
                title: "主要违纪事实",
                active: false,
                id: 'menu5',
                eleBtnId: "eleBtnId5",
                eleId: 'menuName5'
            },
            {
                title: "处分情况",
                active: false,
                id: 'menu6',
                eleBtnId: "eleBtnId6",
                eleId: 'menuName6'
            }
        ]
		// 附件列表
		visaForm: object = {
			registerFiles: [], // 移送审理案件材料交接登记表
			batchFiles: [], // 案件移送审理呈批表

		}

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
		  handleChange(val) {
                this.activeNames1= [ '1', '2', '3', '4']
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
//        增加违反事实
        addBreach(){
            this.breachList.push(
                {
                    test:'',
                    subList:[
                        {
                            test:'',
                        }
                    ]
                }
            )
		}
		//        增加事实
        addBreachSubList(item,index){
            this.breachList[index].subList.push(
                {
                    test:'',
                }
            )
		}
		//        删除违纪事实大类
		removeItem(item,index){
            this.$confirm('此操作将删除该条目, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.breachList.splice(index,1)
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
		//        删除违纪行为
        removeSubItem(item,index){
            this.$confirm('此操作将删除该条目, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                item.subList.splice(index,1)
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
		 mounted(){
            let subMenuItem=this.subMenuItem
            //给页面绑定滑轮滚动事件
            if (window.addEventListener) {//firefox
                window.addEventListener('scroll', function (e) {
                    console.log('aaa')
                    e = e || window.event;
                    for (let i = 1; i < 7; i++) {
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
		    menuGo(item) {
            item.active = true;
            for (let i = 1; i < 7; i++) {
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
		//表单回显
        echoDetails(item){
            this.form=this.formData;
            this.form.name=item.personnel;
            //  this.form.date1=item.receiveTime;
            this.breachList=this.breachList1;
        }
		
	}
</script>

<style ref="stylesheet/scss" lang="scss" scoped>

</style>