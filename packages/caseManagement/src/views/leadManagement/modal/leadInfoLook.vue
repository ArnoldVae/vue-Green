<template>
	<!-- 案件登记 -->
	<div class="backplane">
		<div class="backplane-Content">
			<el-container>
				<el-aside width="220px" class="el-select-tab">
					<ul>
						<li v-for="(menu,index) in subMenuItem" :key="index" @click="menuGo(menu)">
							<el-button v-bind:id="menu.eleBtnId" v-bind:class="[menu.active ? 'active-btn-class' : '']" class="tab-btn"
							 circle size="small"></el-button>
							<span v-bind:id="menu.eleId" v-bind:class="[menu.active ? 'active_class' : '']">{{index + 1}}{{menu.title}}</span>
						</li>
					</ul>
				</el-aside>

				<el-main>
					<!--线索基本信息============================-->
					<el-form label-position="top" class="form-disabled-label-top" ref="form1" :model="leadRegistration">
						<el-collapse v-model="activeNames" class="collapse">
							<el-collapse-item id="menu1" name="1">
								<template slot="title">
									<i class="header-icon el-icon-info"></i>
									线索基本信息
								</template>
								<div class="form-content">
									<el-form label-position="top" class="form-disabled-label-top">
										<el-row :gutter="20">
											<el-col :span="6">
												<el-form-item label="线索编号：" prop="leadNum">
													<div v-if="!disabled" class="label">{{leadRegistration.leadBasicInfo.leadNum}}</div>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="线索名称：" prop="leadName">
													<div v-if="!disabled" class="label">{{leadRegistration.leadBasicInfo.leadName}}</div>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="受理时间：" prop="acceptedDate">
													<div v-if="!disabled" class="label">{{leadRegistration.leadBasicInfo.acceptedDate}}</div>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="线索来源：" prop="leadSource">
													<div v-if="!disabled" class="label">{{leadRegistration.leadBasicInfo.leadSource}}</div>
												</el-form-item>
											</el-col>
										</el-row>
										<el-row :gutter="20">
											<el-col :span="12">
												<el-form-item label="问题发生时间：" prop="happenTime">
													<div v-if="!disabled" class="label">{{leadRegistration.leadBasicInfo.happenTime}}</div>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="涉及金额：" prop="relateMoney">
													<div v-if="!disabled" class="label">{{leadRegistration.leadBasicInfo.relateMoney}}万元</div>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="发生单位：" prop="happenOrganization">
													<div v-if="!disabled" class="label">{{leadRegistration.leadBasicInfo.happenOrganization}}</div>
												</el-form-item>
											</el-col>
										</el-row>
										<el-row :gutter="20">
											<el-col :span="6">
												<el-form-item label="行业领域：" prop="industry">
													<div v-if="!disabled" class="label">{{leadRegistration.leadBasicInfo.industry}}</div>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="是否单位：" prop="isOrganization">
													<div class="label">{{leadRegistration.leadBasicInfo.isCheckName}}</div>	
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="涉及人数：" prop="peoperNum">
													<div class="label">{{leadRegistration.leadBasicInfo.peoperNum}}</div>
												</el-form-item>
											</el-col>
										</el-row>
										<el-row :gutter="20">
											<el-col :span="24">
												<el-form-item label="线索描述：" prop="leadDescribe">
													<div v-if="!disabled" class="label">{{leadRegistration.leadBasicInfo.leadDescribe}}</div>
												</el-form-item>
											</el-col>
										</el-row>
									</el-form>
								</div>
							</el-collapse-item>
							<!--主要涉案人员信息============================-->
							<el-collapse-item name="2">
								<template slot="title">
									<i class="header-icon el-icon-info"></i>
									主要涉案人员信息
								</template>
								<div class="form-content">
									<div class="edit-tabs" >
										<el-form label-position="top" class="form-disabled-label-top">
										<el-tabs v-model="creadTab1" ref="tabs" type="card">
											<el-tab-pane v-for="(item, index) in editableTabs1" :key="item.name" :label="item.title" :name="item.name"
											 ref="pane">
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="姓名：" prop="name">
															<div class="label">{{item.newCaseFom.name}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="性别：" prop="sex">
															<el-radio-group v-model="item.newCaseFom.sex">
															<div class="label">{{item.newCaseFom.sex}}</div>
															</el-radio-group>
														</el-form-item>
													</el-col>
													<el-col :span="12">
														<el-form-item label="部职别(工作单位)：" prop="departmentLv">
															<div class="label">{{item.newCaseFom.departmentLv}}</div>
														</el-form-item>
													</el-col>
												</el-row>
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="现隶属单位：" prop="subjectionOrg">
															<div class="label">{{item.newCaseFom.subjectionOrg}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="职务等级：" prop="jobLv">
															<div class="label">{{item.newCaseFom.jobLv}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="在职状态：" prop="jobState">
															<div class="label">{{item.newCaseFom.jobState}}</div>
														</el-form-item>
													</el-col>
												</el-row>
												<el-row :gutter="20">
													<el-col :span="24">
														<el-form-item label="其他信息：" prop="otherInfo">
															<div class="label">{{item.newCaseFom.otherInfo}}</div>
														</el-form-item>
													</el-col>
												</el-row>

												<div class="dividingLine"></div>

												<el-row :gutter="20">
													<el-col :span="12">
														<el-form-item label="问题发生时间：" prop="happTime">
															<div class="label">{{item.newCaseFom.happTime}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="违纪一级分类：" prop="disciplinaryLv1">
															<div class="label">{{item.newCaseFom.disciplinaryLv1}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="违纪二级分类：" prop="disciplinaryLv2">
															<div class="label">{{item.newCaseFom.disciplinaryLv2}}</div>
														</el-form-item>
													</el-col>
												</el-row>
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="职务违法犯罪一级分类：" prop="disOffenceLv1">
															<div class="label">{{item.newCaseFom.disOffenceLv1}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="职务违法犯罪二级分类：" prop="disOffenceLv2">
															<div class="label">{{item.newCaseFom.disOffenceLv2}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="其他违法犯罪行为：" prop="otherDis">
															<div class="label">{{item.newCaseFom.otherDis}}</div>
														</el-form-item>
													</el-col>
												</el-row>
												<el-row :gutter="20">
													<el-col :span="24">
														<el-form-item label="备注：" prop="comment">
															<div class="label">{{item.newCaseFom.comment}}</div>
														</el-form-item>
													</el-col>
												</el-row>
											</el-tab-pane>
										</el-tabs>
										</el-form>
									</div>
								</div>
							</el-collapse-item>

							<!--来文单位============================-->
							<el-collapse-item name="3">
								<template slot="title">
									<i class="header-icon el-icon-info"></i>
									来文单位
								</template>
								<div class="form-content">
									<el-form label-position="top" class="form-disabled-label-top">
										<el-row :gutter="20">
											<el-col :span="6">
												<el-form-item label="来文单位：" prop="comeOrg">
													<div class="label">{{leadRegistration.comInfo.comeOrg}}</div>
												</el-form-item>
											</el-col>

											<el-col :span="6">
												<el-form-item label="文件文号：" prop="fileId">
													<div class="label">{{leadRegistration.comInfo.fileId}}</div>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="文件标题：" prop="fileTitle">
													<div class="label">{{leadRegistration.comInfo.fileTitle}}</div>
												</el-form-item>
											</el-col>
											<el-col :span="6">
												<el-form-item label="来文时间：" prop="fileTime">
													<div class="label">{{leadRegistration.comInfo.fileTime}}</div>
												</el-form-item>
											</el-col>
										</el-row>
									</el-form>
								</div>
							</el-collapse-item>

							<!--备注============================-->
							<el-collapse-item name="4">
								<template slot="title">
									<i class="header-icon el-icon-info"></i>
									备注
								</template>
								<div class="form-content" >
									<el-form label-position="top" class="form-disabled-label-top">
									<el-row :gutter="20">
										<el-col :span="24">
											<el-form-item label="备注：" prop="remark">
												<div class="label">{{leadRegistration.remarks.remark}}</div>
											</el-form-item>
										</el-col>
									</el-row>
									</el-form>
								</div>

								<div class="el-form-tip">
									<el-row>
										<el-col :span="6">
											<el-form-item label="处置时间：" prop="doTime">
												<div class="tip-iput">{{formTip.doTime}}天</div>
											</el-form-item>
										</el-col>
										<el-col :span="6">
											<div class="tip-div-red"></div>
											<el-form-item label="红色预警：" prop="warningLv1">
												<div class="tip-iput">{{formTip.warningLv1}}天</div>
											</el-form-item>
										</el-col>
										<el-col :span="6">
											<div class="tip-div-yel"></div>
											<el-form-item label="黄色预警：" prop="warningLv2">
												<div class="tip-iput">{{formTip.warningLv2}}天</div>
											</el-form-item>
										</el-col>
										<el-col :span="6">
											<div class="tip-div-blue"></div>
											<el-form-item label="蓝色预警：" prop="warningLv3">
												<div class="tip-iput">{{formTip.warningLv3}}天</div>
											</el-form-item>
										</el-col>
									</el-row>
								</div>
							</el-collapse-item>

							<!--线索处置信息-处置信息===============-->

							<el-collapse-item id="menu2" name="5">
								<template slot="title">
									<i class="header-icon el-icon-info"></i>
									处置信息
								</template>
								<div class="form-content">
									<el-row :gutter="20">
										<el-col :span="12">
											<el-form-item label="办理方式：" prop="fileTitle">
												<div>{{""}}</div>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="处置方式：" prop="fileTime">
												<div>{{""}}</div>
											</el-form-item>
										</el-col>
									</el-row>
								</div>
							</el-collapse-item>

							<!--线索处置信息-报批信息===============-->
							<el-collapse-item name="6">
								<template slot="title">
									<i class="header-icon el-icon-info"></i>
									报批信息
								</template>
								<div class="form-content">
									<el-row :gutter="20">
										<el-col :span="6">
											<el-form-item label="呈批件文号：" prop="fileTitle">
												<div>{{""}}</div>
											</el-form-item>
										</el-col>
										<el-col :span="6">
											<el-form-item label="呈批件标题：" prop="fileTime">
												<div>{{""}}</div>
											</el-form-item>
										</el-col>
										<el-col :span="6">
											<el-form-item label="批准人：" prop="fileTitle">
												<div>{{""}}</div>
											</el-form-item>
										</el-col>
										<el-col :span="6">
											<el-form-item label="批准时间：" prop="fileTime">
												<div>{{""}}</div>
											</el-form-item>
										</el-col>
									</el-row>

									<el-row :gutter="20">
										<el-col :span="24">
											<el-form-item label="处置意见：" prop="remark">
												<div>{{""}}</div>
											</el-form-item>
										</el-col>
									</el-row>
								</div>
							</el-collapse-item>

							<!--线索处置信息-	领导批示====================-->
							<el-collapse-item name="7">
								<template slot="title">
									<i class="header-icon el-icon-info"></i>
									领导批示
								</template>
								<div class="form-content">
									<div class="edit-tabs">
										<el-tabs v-model="creadTab2" ref="tabs" type="card">
											<el-tab-pane v-for="(item, index) in editableTabs2" :key="item.name" :label="item.title" :name="item.name"
											 ref="pane">

												<el-form ref="newCaseFom" class="form-label-top" label-position="top">
													<el-row :gutter="20">
														<el-col :span="6">
															<el-form-item label="批示领导：" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
														<el-col :span="6">
															<el-form-item label="批示时间：" prop="fileTime">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
													</el-row>
													<el-row :gutter="20">
														<el-col :span="24">
															<el-form-item label="批示内容：" prop="remark">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
													</el-row>
												</el-form>
											</el-tab-pane>
										</el-tabs>
									</div>
								</div>

							</el-collapse-item>

							<!--线索处置信息-	分发信息====================-->

							<el-collapse-item name="8">
								<template slot="title">
									<i class="header-icon el-icon-info"></i>
									分发信息
								</template>

								<div class="form-content">
									<el-row :gutter="20">
										<el-col :span="6">
											<el-form-item label="接收单位名称：" prop="fileTitle">
												<div>{{""}}</div>
											</el-form-item>
										</el-col>
										<el-col :span="6">
											<el-form-item label="分发时间：" prop="fileTime">
												<div>{{""}}</div>
											</el-form-item>
										</el-col>

										<el-col :span="6">
											<el-form-item label="接收单位联系人：" prop="fileTitle">
												<div>{{""}}</div>
											</el-form-item>
										</el-col>
										<el-col :span="6">
											<el-form-item label="接收单位联系方式：" prop="fileTitle">
												<div>{{""}}</div>
											</el-form-item>
										</el-col>
									</el-row>
								</div>
							</el-collapse-item>
							<!--线索办理信息=================================-->
							<el-collapse-item id="menu3" name="9">
								<template slot="title">
									<i class="header-icon el-icon-info"></i>
									线索办理信息
								</template>
								<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
									<el-menu-item index="1">
										<div class="meau-item">初核信息</div>
									</el-menu-item>
									<el-menu-item index="2">
										<div class="meau-item">立案</div>
									</el-menu-item>
									<el-menu-item index="3">
										<div class="meau-item">提前介入审理</div>
									</el-menu-item>
									<el-menu-item index="4">
										<div class="meau-item">结案报告</div>
									</el-menu-item>
								</el-menu>
								<div class="form-content">
									<!-- 初核信息=============== -->
									<div class="menu-content" v-if="isChecked1">
										<div class="menu-block">
											<el-row class="row-title">初核报告</el-row>
											<div class="form-content">
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="方案文号：" prop="fileTitle">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="方案标题：" prop="fileTitle">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="方案批准时间：" prop="fileTime">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="方案批准人：" prop="fileTitle">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
												</el-row>
												<el-row :gutter="20">
													<el-col :span="24">
														<el-form-item label="方案批准意见：" prop="remark">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
												</el-row>
											</div>
										</div>
									</div>

									<!-- 立案=============== -->
									<div v-if="isChecked2">
										<div class="menu-content">
											<div class="menu-block">
												<!-- 立案信息 -->
												<el-row class="row-title">立案信息</el-row>
												<div class="form-content">
													<el-row :gutter="20">
														<el-col :span="6">
															<el-form-item label="立案时间：" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
														<el-col :span="12">
															<el-form-item label="采取措施：" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
													</el-row>
												</div>
											</div>
											<div class="menu-block">
												<el-row class="row-title">报批信息</el-row>
												<div class="form-content">
													<el-row :gutter="20">
														<el-col :span="6">
															<el-form-item label="呈批件文号：" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
														<el-col :span="6">
															<el-form-item label="呈批件标题：" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
														<el-col :span="6">
															<el-form-item label="批准人:" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
														<el-col :span="6">
															<el-form-item label="批准时间：" prop="fileTime">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
													</el-row>
													<el-row :gutter="20">
														<el-col :span="24">
															<el-form-item label="处置意见：" prop="remark">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
													</el-row>
												</div>
											</div>
										</div>
									</div>

									<!-- 提前介入审理=============== -->

									<div class="menu-content" v-if="isChecked3">
										<div class="menu-block">
											<!-- 提前介入审理form -->
											<el-row class="row-title">提前介入审理</el-row>
											<div class="form-content">
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="呈批件文号：" prop="fileTitle">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="呈批件标题：" prop="fileTime">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="批准人：" prop="fileTitle">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="批准时间：" prop="fileTime">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
												</el-row>

												<el-row :gutter="20">
													<el-col :span="24">
														<el-form-item label="处置意见：" prop="remark">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
												</el-row>
											</div>
										</div>
									</div>

									<!-- 结案报告======================================= -->

									<div class="menu-content " v-if="isChecked4">
										<div class="menu-block ">
											<el-row slot="title" class="row-title">报告描述</el-row>
											<div class="form-content">
												<el-form label-position="top" class="form-disabled-label-top">
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="挽回经济损失：" prop="relateMoney">
															<div class="label">{{leadRegistration.leadBasicInfo.relateMoney}}万元</div>															
														</el-form-item>
													</el-col>
												</el-row>
												<el-row :gutter="20">
													<el-col :span="24">
														<el-form-item label="报告描述：" prop="remark">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
												</el-row>
												</el-form>
											</div>
										</div>
										<div class="menu-block ">
											<el-row slot="title" class="row-title">涉案人员信息</el-row>
											<div class="form-content">
												<div class="edit-tabs">
													<el-tabs v-model="creadTab3" ref="tabs" type="card" v-if="isShowArmyCasPer1">
														<el-tab-pane v-for="(item, index) in editableTabs3" :key="item.name" :label="item.title" :name="item.name"
														 ref="pane">
															<el-form :model="keyWords" ref="keyWords">
																<el-row :gutter="20">
																	<el-col :span="6">
																		<el-form-item label="姓名：" prop="name">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																	<el-col :span="6">
																		<el-form-item label="性别：" prop="sex">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																	<el-col :span="12">
																		<el-form-item label="部职别(工作单位)：" prop="departmentLv">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																</el-row>
																<el-row :gutter="20">
																	<el-col :span="6">
																		<el-form-item label="现隶属单位：" prop="subjectionOrg">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																	<el-col :span="6">
																		<el-form-item label="人员类别：" prop="jobLv">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																	<el-col :span="6">
																		<el-form-item label="职务等级:" prop="jobLv">
																		</el-form-item>
																	</el-col>
																	<el-col :span="6">
																		<el-form-item label="在职状态：" prop="jobState">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																</el-row>
																<el-row :gutter="20">
																	<el-col :span="24">
																		<el-form-item label="其他信息：" prop="comment">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																</el-row>
																<el-row :gutter="20">
																	<el-col :span="12">
																		<el-form-item label="问题发生时间：" prop="happTime">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																	<el-col :span="6">
																		<el-form-item label="违纪一级分类：" prop="disciplinaryLv1">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																	<el-col :span="6">
																		<el-form-item label="违纪二级分类：" prop="disciplinaryLv2">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																</el-row>
																<el-row :gutter="20">
																	<el-col :span="6">
																		<el-form-item label="职务违法犯罪一级分类：" prop="disOffenceLv1">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																	<el-col :span="6">
																		<el-form-item label="职务违法犯罪二级分类：" prop="disOffenceLv2">
																			<el-input readonly></el-input>
																		</el-form-item>
																	</el-col>
																	<el-col :span="6">
																		<el-form-item label="其他违法犯罪行为：" prop="otherDis">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																</el-row>
																<el-row :gutter="20">
																	<el-col :span="24">
																		<el-form-item label="主要问题情况：" prop="comment">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																</el-row>
																<el-row :gutter="20">
																	<el-col :span="24">
																		<el-form-item label="审核处理意见：" prop="comment">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																</el-row>
															</el-form>
														</el-tab-pane>
													</el-tabs>
												</div>
											</div>
										</div>
										<div class="menu-block ">
											<el-row slot="title" class="row-title">报告信息</el-row>
											<div class="form-content">
												<el-row :gutter="20">
													<el-col :span="6">
														<el-form-item label="报告文号：" prop="remark">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="报告时间：" prop="remark">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
													<el-col :span="6">
														<el-form-item label="报告标题：" prop="remark">
															<div>{{""}}</div>
														</el-form-item>
													</el-col>
												</el-row>
											</div>
										</div>
									</div>
								</div>
							</el-collapse-item>

							<el-collapse-item id="menu4" name="10">
								<template slot="title">
									<i class="header-icon el-icon-info"></i>
									通报反馈信息
								</template>
								<el-menu :default-active="activeIndex2" mode="horizontal" @select="notiFeedbackSel">
									<el-menu-item index="1">
										<div class="meau-item">通报处理</div>
									</el-menu-item>
									<el-menu-item index="2">
										<div class="meau-item">移交信息</div>
									</el-menu-item>
									<el-menu-item index="3">
										<div class="meau-item">处理反馈</div>
									</el-menu-item>
								</el-menu>
								<div class="form-content">
									<!-- 	通报反馈信息---通报处理 =====================-->
									<div class="menu-content" v-if="isShowfeedback1">
										<div class="menu-block">
											<!-- 通报处置信息 -->
											<el-row class="row-title">通报信息</el-row>
											<div class="form-content">
												<div class="edit-tabs">
													<el-tabs v-model="creadTab4" ref="tabs" type="card">
														<el-tab-pane v-for="(item, index) in editableTabs4" :key="item.name" :label="item.title" :name="item.name"
														 ref="pane">
															<el-form :model="keyWords" ref="keyWords">
																<el-row :gutter="20">
																	<el-col :span="6">
																		<el-form-item label="通报单位名称：" prop="name">
																			<div>{{item.newCaseFom.nam}}</div>
																		</el-form-item>
																	</el-col>
																	<el-col :span="6">
																		<el-form-item label="通报单位联系人：" prop="subjectionOrg">
																			<div>{{item.newCaseFom.subjectionOrg}}</div>
																		</el-form-item>
																	</el-col>
																	<el-col :span="6">
																		<el-form-item label="文件转送时间：" prop="departmentLv">
																			<div>{{""}}</div>
																		</el-form-item>
																	</el-col>
																	<el-col :span="6">
																		<el-form-item label=" 通报单位联系方式：" prop="sex">
																			<div>{{item.newCaseFom.sex}}</div>
																		</el-form-item>
																	</el-col>
																</el-row>
															</el-form>
															<div class="table" style="margin-top: 16px;">
																<el-table :data="tableData2.slice((currentPage - 1) * pagesize, currentPage * pagesize)" border
																 :row-class-name="'table-header-bg1'" :header-cell-class-name="'table-header-bg'" :cell-class-name="'tableContent-bg'">
																	<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
																	<el-table-column prop="Name" label="姓名" align="center" :show-overflow-tooltip="true"></el-table-column>
																	<el-table-column prop="position" label="部职别(工作单位)" align="center" :show-overflow-tooltip="true"></el-table-column>
																</el-table>
																<!-- 分页 -->
																<el-row>
																	<div class="block page-positton" style="padding: 10px;">
																		<el-pagination style="text-align: right;" @size-change="handleSizeChange" @current-change="handleCurrentChange"
																		 :page-sizes="[5, 10, 15, 20, 25]" :current-page="currentPage" :page-size="pagesize" small background
																		 layout="total, sizes, prev, pager, next, jumper" :total="tableData2.length"></el-pagination>
																	</div>
																</el-row>
															</div>
														</el-tab-pane>
													</el-tabs>
												</div>
											</div>
											<!-- 未处置表格开始 -->
										</div>
									</div>

									<div v-if="isShowfeedback2">
										<div class="menu-content">
											<div class="menu-block">
												<!-- 移交信息 -->
												<el-row class="row-title">移交案卷</el-row>
												<div class="form-content">
													<el-row :gutter="20">
														<el-col :span="6">
															<el-form-item label="移送时间：" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
														<el-col :span="6">
															<el-form-item label="接收人：" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
														<el-col :span="6">
															<el-form-item label="接收单位：" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
														<el-col :span="6">
															<el-form-item label="接收单位联系方式：" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
													</el-row>
												</div>
											</div>


											<div class="menu-block">
												<el-row class="row-title">移交款物</el-row>
												<div class="form-content">
													<el-row :gutter="20">
														<el-col :span="6">
															<el-form-item label="移送时间：" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
														<el-col :span="6">
															<el-form-item label="接收人：" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
														<el-col :span="6">
															<el-form-item label="接收单位：" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
														<el-col :span="6">
															<el-form-item label="接收单位联系方式：" prop="fileTitle">
																<div>{{""}}</div>
															</el-form-item>
														</el-col>
													</el-row>
												</div>
											</div>
										</div>
									</div>
									<!-- 	通报反馈信息---处理反馈 =====================-->
									<div v-if="isShowfeedback3">
										<el-menu :default-active="activeIndex3" class="el-menu-demo" mode="horizontal" @select="handleSelect3">
											<el-menu-item index="1">
												<div class="meau-item">东部海XXX</div>
											</el-menu-item>
											<el-menu-item index="2">
												<div class="meau-item">西部空XXX</div>
											</el-menu-item>
										</el-menu>
										<div class="menu-content margin-top">
											<div class="menu-block ">
												<el-row slot="title" class="row-title">涉案人员信息</el-row>
												<!--东部海XXX======================================================-->
												<div class="form-content">
													<div class="edit-tabs margin-top">
														<el-tabs v-model="creadTab5" ref="tabs" type="card" v-if="isShowArmyCasPer1">
															<el-tab-pane v-for="(item, index) in editableTabs5" :key="item.name" :label="item.title" :name="item.name"
															 ref="pane">
																<el-form :model="keyWords" ref="keyWords">
																	<el-row :gutter="20">
																		<el-col :span="6">
																			<el-form-item label="姓名：" prop="name">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="性别：" prop="sex">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="12">
																			<el-form-item label="部职别(工作单位)：" prop="departmentLv">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>

																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="6">
																			<el-form-item label="现隶属单位：" prop="subjectionOrg">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="职务等级：" prop="jobLv">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="在职状态：" prop="jobState">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="24">
																			<el-form-item label="其他信息：" prop="otherInfo">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>

																	<div class="dividingLine"></div>

																	<el-row :gutter="20">
																		<el-col :span="12">
																			<el-form-item label="问题发生时间：" prop="happTime">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="违纪一级分类：" prop="disciplinaryLv1">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="违纪二级分类：" prop="disciplinaryLv2">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="6">
																			<el-form-item label="职务违法犯罪一级分类：" prop="disOffenceLv1">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="职务违法犯罪二级分类：" prop="disOffenceLv2">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="其他违法犯罪行为：" prop="otherDis">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="24">
																			<el-form-item label="备注：" prop="comment">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="24">
																			<el-form-item label="党纪处分：" prop="comment">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="24">
																			<el-form-item label="党纪处分：" prop="comment">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="15">
																			<el-form-item label="组织处理：" prop="comment">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																</el-form>
															</el-tab-pane>
														</el-tabs>

														<!--西部空XXX======================================================-->
														<el-tabs v-model="creadTab6" ref="tabs" type="card" v-if="isShowArmyCasPer2">
															<el-tab-pane v-for="(item, index) in editableTabs6" :key="item.name" :label="item.title" :name="item.name"
															 ref="pane">
																<el-form :model="keyWords" ref="keyWords">
																	<el-row :gutter="20">
																		<el-col :span="6">
																			<el-form-item label="姓名：" prop="name">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="性别：" prop="sex">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="12">
																			<el-form-item label="部职别(工作单位)：" prop="departmentLv">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>

																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="6">
																			<el-form-item label="现隶属单位：" prop="subjectionOrg">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="职务等级：" prop="jobLv">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="在职状态：" prop="jobState">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="24">
																			<el-form-item label="其他信息：" prop="otherInfo">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>

																	<div class="dividingLine"></div>

																	<el-row :gutter="20">
																		<el-col :span="12">
																			<el-form-item label="问题发生时间：" prop="happTime">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="违纪一级分类：" prop="disciplinaryLv1">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="违纪二级分类：" prop="disciplinaryLv2">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="6">
																			<el-form-item label="职务违法犯罪一级分类：" prop="disOffenceLv1">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="职务违法犯罪二级分类：" prop="disOffenceLv2">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																		<el-col :span="6">
																			<el-form-item label="其他违法犯罪行为：" prop="otherDis">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="24">
																			<el-form-item label="备注：" prop="comment">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="24">
																			<el-form-item label="党纪处分：" prop="comment">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="24">
																			<el-form-item label="党纪处分：" prop="comment">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																	<el-row :gutter="20">
																		<el-col :span="15">
																			<el-form-item label="组织处理：" prop="comment">
																				<div>{{""}}</div>
																			</el-form-item>
																		</el-col>
																	</el-row>
																</el-form>
															</el-tab-pane>
														</el-tabs>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</el-collapse-item>
						</el-collapse>
					</el-form>
				</el-main>
			</el-container>
			<!-- 底部固定按钮 -->
			<div class="backplane-footer-center" style="text-align: center;">
				<el-button @click="closeDig()">返回</el-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { State, Action, Getter } from 'vuex-class';
	import {
		Component,
		Vue
	} from 'vue-property-decorator';
	@Component({
		components: {},
		data() {
			return {
				isShowBtn1: false,
				isShowText: false,
				keyWords: {},
				currentPage: 1, //分页初始页码
				pagesize: 5, //分页显示条数
				leadRegistration: {
					//线索基本信息
					leadBasicInfo: {
						leadNum: '', //线索编号
						leadName: '', //线索名称
						acceptedDate: '', //受理时间
						leadSource: '', //线索来源
						happenTime: '', //发生时间
						relateMoney: '', //所涉金额
						happenOrganization: '', //发生单位
						industry: '', //行业领域
						isOrganization: '', //是否单位
						peoperNum: '', //涉案人数
						leadDescribe: '', //线索描述
					},
					//来文form表单数据
					comInfo: {
						comeOrg: '', //来文单位
						fileId: '', //文件编号
						fileTitle: '', //文件标题
						fileTime: '' //来文时间
					},
					//线索基本信息备注
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

				//线索受理信息
				leadAcceptInfo: {
					//线索基本信息
					leadBasicInfo: {
						leadNum: '', //线索编号
						leadName: '', //线索名称
						leadSource: '', //线索来源
						happenTime: '', //发生时间
						relateMoney: '', //所涉金额
						happenOrganization: '', //发生单位
						industry: '', //行业领域
						isOrganization: '', //是否单位
						peoperNum: '', //涉案人数
						leadDescribe: '', //线索描述
						//----
						leadNum: '', //线索编号
						acceptedDate: '' //受理时间
					},
					//来文form表单数据
					comInfo: {
						comeOrg: '', //来文单位
						fileId: '', //文件编号
						fileTitle: '', //文件标题
						fileTime: '' //来文时间
					},
					//线索基本信息备注
					remarks: {
						remark: '' //备注
					},
					involvedPerson: [] //新增涉案人员信息
				},

				//线索处置信息
				leadDispInfo: {
					// 处置信息
					dispInfo: {
						handleWay: '', //办理方式
						disposalWay: '' //处置方式
					},
					//报批信息
					approvalInfo: {
						fileNum: '', //呈批文件号
						fileTitle: '', //呈批件标题
						authorizePerson: '', //批准人
						authorizeTime: '', //批准时间
						disposalOpinion: '' //处置意见
					},
					// 领导批示
					leaderInstInfo: {
						instructionLeader: '', //批示领导
						instructionTime: '', //批示时间
						instructionContent: '' //批示内容
					},
					//分发信息
					distributionInfo: {
						recUnitName: '', //接收单位名称
						recUnitContact: '', //接收单位联系人
						recUnitPhone: '', //接收单位联系方式
						distributionTime: '' //分发时间
					}
				},

				// 线索办理信息
				LeadProcesInfo: {
					// 初核信息
					preliCheckInfo: {
						planFileNum: '', //方案文号
						planTitle: '', //方案标题
						planAuthTime: '', //方案批准时间
						planAuthPerson: '', //方案批准人
						planAuthOpinion: '' //方案批准意见
					},
					// 立案信息
					registerInfo: {
						registerTime: '', //立案时间
						takeMeasures: '' //采取措施
					},
					//报批信息
					approvalInfo: {
						fileNum: '', //呈批文件号
						fileTitle: '', //呈批件标题
						authorizePerson: '', //批准人
						authorizeTime: '', //批准时间
						disposalOpinion: '' //处置意见
					},
					// 提前介入审理
					advaInterHearing: {
						fileNum: '', //呈批文件号
						fileTitle: '', //呈批件标题
						authorizePerson: '', //批准人
						authorizeTime: '', //批准时间
						disposalOpinion: '' //处置意见
					},
					// 结案报告
					caseEndReport: {
						reportDescription: '', //报告描述
						// 涉案人员信息:...
						involvedCasePerson: [],
						// 报告信息
						reportInfo: {
							reportFileNum: '', //报告文号
							reportTime: '', //报告时间
							reportTitle: '' //报告标题
						}
					}
				},
				// 通报反馈信息
				notificationFeedback: {
					// 1.通报信息
					notificationInfo: {
						bulletinUnitName: '', //通报单位名称
						bulletinUnitContact: '', //通报单位联系人
						bulletinUnitPhone: '', //通报单位联系方式
						fileTransferTime: '' //文件转送时间
					},
					// 2移交信息
					transferInfo: {
						// 移交案卷
						transferFile: {
							transferTime: '', //移交时间
							receivePerson: '', //接收人
							receiveUnit: '', //接收单位
							receiveUnitPhone: '' //接收单位联系方式
						},
						// 移交款物
						transferArticle: {
							transferTime: '', //移交时间
							receivePerson: '', //接收人
							receiveUnit: '', //接收单位
							receiveUnitPhone: '' //接收单位联系方式
						}
					},
					// --处理反馈
					handleFeedback: {
						//涉案人员信息--待增加
						involvedCasePerson: []
					}
				},

				//增涉案人员信息---添加选项卡初始化数据
				creadTab1: '1',
				creadTab2: '1',
				creadTab3: '1',
				creadTab4: '1',
				creadTab5: '1',
				creadTab6: '1',
				tabIndex: 1,
				editableTabs1: [{
					//选项卡属性
					title: '涉案人员1',
					name: '1',
					content: '',
					//选项卡form表单数据
					newCaseFom: {
						id: '',
						name: '王某某',
						sex: '男',
						subjectionOrg: '其他',
						jobLv: '未知',
						departmentLv: '退休',
						jobState: '？',
						happTime: '2000年10月1号',
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
				//领导批示
				editableTabs2: [{
						//选项卡属性
						title: '领导批示1',
						name: '1',
						//选项卡form表单数据
					},
					{
						//选项卡属性
						title: '领导批示2',
						name: '2',
						//选项卡form表单数据
					}
				],

				//结案报告涉案人员
				editableTabs3: [{
						//选项卡属性
						title: '涉案人员1',
						name: '1',
						content: '',
						//选项卡form表单数据
					},
					{
						//选项卡属性
						title: '涉案人员2',
						name: '2',
						content: '',
						//选项卡form表单数据
					}
				],

				//通报反馈信息-通报处理-新增通报信息
				editableTabs4: [{
					//选项卡属性
					title: '新增通报信息1',
					name: '1',
					content: '',
					//选项卡form表单数据
					newCaseFom: {
						id: '1',
						name: '谁',
						sex: '14',
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
				}],
				//通报反馈信息-处理反馈-涉案人员信息面板1
				editableTabs5: [{
						//选项卡属性
						title: '新增通报信息1-东部海XXX',
						name: '1',
						content: ''
						//选项卡form表单数据
					},
					{
						//选项卡属性
						title: '新增通报信息2-东部海XXX',
						name: '2',
						content: ''
						//选项卡form表单数据
					}
				],
				//通报反馈信息-处理反馈-涉案人员信息面板2
				editableTabs6: [{
						//选项卡属性
						title: '新增通报信息1-西部空XXX',
						name: '1',
						content: ''
						//选项卡form表单数据
					},
					{
						//选项卡属性
						title: '新增通报信息2-西部空XXX',
						name: '2',
						content: ''
						//选项卡form表单数据
					}
				],

				//通报反馈--处理反馈涉案人员tab
				tableData2: [{
						id: '1', //序号
						Name: '张某某', //姓名
						position: '部职别(工作单位)1' //部职别(工作单位)
					},
					{
						id: '2', //序号
						Name: '张某某', //姓名
						position: '部职别(工作单位)2' //部职别(工作单位)
					},
					{
						id: '3', //序号
						Name: '张某某', //姓名
						position: '部职别(工作单位)3' //部职别(工作单位)
					},
					{
						id: '4', //序号
						Name: '张某某', //姓名
						position: '部职别(工作单位)4' //部职别(工作单位)
					}
				],
				//线索办理导航标记
				isChecked1: true,
				isChecked2: false,
				isChecked3: false,
				isChecked4: false,
				//通报反馈信息导航标记
				isShowfeedback1: true,
				isShowfeedback2: false,
				isShowfeedback3: false,
				isShowArmyCasPer1: true, //通报反馈信息导航--处理反馈XXX区二级导航栏
				isShowArmyCasPer2: false, //通报反馈信息导航--处理反馈XXX区二级导航栏

				//下拉面板展示标识
				activeIndex2: '1', //通报反馈信息导航展示索引
				activeIndex3: '1', //通报反馈信息--处理反馈导航展示索引
				activeIndex4: '1', //通报反馈信息--处理反馈--涉案人员导航
				casePerMenuIndex: '1', //线索办理--结案报告内部内容导航展示索引
				activeIndex: '1', //线索办理信息导航展示索引
				activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
				activeName1: ['1', '2', '3'],
				activeName2: ['1', '2', '3'],

				//侧边滚轮菜单数据
				steps: [{
						id: 'step01',
						active: true,
						name: '线索基本信息'
					},
					{
						id: 'step02',
						active: false,
						name: '主要涉案人员信息'
					},
					{
						id: 'step03',
						active: false,
						name: '来文单位'
					},
					{
						id: 'step04',
						active: false,
						name: '备注'
					}
				],

				hideMenuList: {
					step01: false,
					step02: false,
					step03: false,
					step04: false,
					activeName2: ['1', '2', '3'],
					step04: false
				},
				queryArr: [], //侧边导航定义数组容器
			};

		},
		created() {},

		watch: {},
		methods: {
			controShowArea() {
				// debugger
				let newName = this.leadRegistration.leadBasicInfo.leadDescribe
				if (newName != "" && !this.isShowBtn1) {
					if (newName.length > 250) {
						this.isShowText = true;
					}
				} else {
					this.isShowText = false;
				}
			},

			//分页栏翻页的方法
			handleSizeChange(size) {
				this.pagesize = size;
			},
			handleCurrentChange(currentPage) {
				this.currentPage = currentPage;
			},
			submit() {
				//提交数据
				let that = this;
				this.editableTabs2.forEach(function(e) {
					//新建涉案人员tab中取出数据
					that.leadRegistration.involvedPerson.push(e.newCaseFom);
				});
				console.log(this.leadRegistration);
				this.$message({
					showClose: true,
					message: '保存成功',
					type: 'success'
				});
			},
			//清空数据
			clearForm() {},
			//线索办理导航选择
			handleSelect(key) {
				if (key == 1) {
					this.isChecked1 = true;
					this.isChecked2 = false;
					this.isChecked3 = false;
					this.isChecked4 = false;
				}
				if (key == 2) {
					this.isChecked2 = true;
					this.isChecked1 = false;
					this.isChecked3 = false;
					this.isChecked4 = false;
				}
				if (key == 3) {
					this.isChecked3 = true;
					this.isChecked1 = false;
					this.isChecked2 = false;
					this.isChecked4 = false;
				}
				if (key == 4) {
					this.isChecked4 = true;
					this.isChecked1 = false;
					this.isChecked2 = false;
					this.isChecked3 = false;
				}
			},
			//通报反馈导航选择
			notiFeedbackSel(key) {
				if (key == 1) {
					this.isShowfeedback1 = true;
					this.isShowfeedback2 = false;
					this.isShowfeedback3 = false;
				}
				if (key == 2) {
					this.isShowfeedback2 = true;
					this.isShowfeedback1 = false;
					this.isShowfeedback3 = false;
				}
				if (key == 3) {
					this.isShowfeedback3 = true;
					this.isShowfeedback1 = false;
					this.isShowfeedback2 = false;
				}
			},
			handleSelect3(key) {
				if (key == 1) {
					this.isShowArmyCasPer1 = true;
					this.isShowArmyCasPer2 = false;
				}
				if (key == 2) {
					this.isShowArmyCasPer1 = false;
					this.isShowArmyCasPer2 = true;
				}
			},

			//修改线索回显数据
			lookLead() {
				if (this.dialogDisLookFlag) {
					//线索基本信息
					let leadRegistration = {
						leadBasicInfo: {
							leadNum: '2019XSSC', //线索编号
							leadName: '线索名称1', //线索名称
							leadSource: 'XXX事检察机关移送', //线索来源
							happenTime: '2019-03 至 2019-04', //问题发生时间
							relateMoney: '15', //所涉金额
							happenOrganization: '西部战区', //发生单位
							industry: '干部任用、转业、招生提干、', //行业领域
							isOrganization: '1', //是否单位
							isCheckName:'是',
							peoperNum: '35', //涉案人数
							// leadDescribe: '了解线索描述级直查-侧面了了解线索描述级直查-侧面',
							leadDescribe: '豆花饭发盒饭刷卡缴费和大家可发货的纷纷开始看见华工科技恢复健康和反馈的几个号东方健康共和国很快就恢复健康负担和空间和地方艰苦奋斗华工科技地方护树罗锅还未公开黑鬼回公司开了个会你开个会是两个可好看的规划结婚更换的快感开发规划发过火对方过后电饭锅老客户桂林市科技馆临时工IE个畏头畏尾我威海卫和我一华为哦我华为环境规划的价格不坑人黑虎俄日和文化',
							acceptedDate: '2019-04-09' //受理时间
						},
						//来文form表单数据
						comInfo: {
							comeOrg: '来文单位:本级直查-侧面了解', //来文单位
							fileId: '来文单位:本级直查-侧面了解', //文件编号
							fileTitle: '来文单位:本级直查-侧面了解', //文件标题
							fileTime: '来文单位:本级直查-侧面了解' //来文时间
						},
						//备注form
						remarks: {
							remark: '备注:本级直查-侧面了解' //备注
						}
					};
					//选项卡form数据
					let newCaseFom = {
						name: '张某某',
						sex: '男',
						subjectionOrg: '',
						jobLv: '专业技术三级',
						departmentLv: '部职别（工作单位）:',
						jobState: '在职',
						happTime: '2019-3-26',
						disciplinaryLv1: '滥用职权类行为',
						disciplinaryLv2: '违反民主集中制原则',
						disOffenceLv1: '职务违法犯罪一级分类',
						disOffenceLv2: '国有企事业人员滥用职权',
						otherInfo: "做遵纪守法的好党员",
						otherDis: '其他违法犯罪行为:本级直查-侧面了解',
						comment: '其他信息:本级直查-侧面了解'
					};
					this.editableTabs2[0].newCaseFom = newCaseFom;
					this.leadRegistration = leadRegistration;
				}
			},
			//关闭弹窗
			closeDig() {
				this.$parent.$parent.dialogDisLook = false;
				this.clearForm();
			}
		},
		mounted() {
			this.lookLead();
			this.controShowArea();
			if (window.addEventListener) {
				window.addEventListener(
					'scroll',
					function(e) {
						e = e || window.event;
						for (let i = 1; i < 5; i++) {
							if (document.getElementById('menu' + i) && document.getElementById('menu' + i).getBoundingClientRect()) {
								if (
									document.getElementById('menu' + i).getBoundingClientRect().top > -1600 && //控制滚轮向下滚动切换位置
									document.getElementById('menu' + i).getBoundingClientRect().top < 300 //控制滚轮向上滚动切换位置
								) {
									if (i > 1) {
										document.getElementById('menuName' + (i - 1)).setAttribute('class', '');
										document.getElementById('eleBtnId' + (i - 1)).setAttribute('class',
											'el-button tab-btn el-button--default el-button--small is-circle');
									}
									document.getElementById('menuName' + i).setAttribute('class', 'active_class');
									document.getElementById('eleBtnId' + i).setAttribute('class',
										'active-btn-class el-button tab-btn el-button--default el-button--small is-circle');
								} else {
									document.getElementById('menuName' + i).setAttribute('class', '');
									document.getElementById('eleBtnId' + i).setAttribute('class',
										'el-button tab-btn el-button--default el-button--small is-circle');
								}
							}
						}
					},
					true
				);
			}
		},

		props: ['dialogDisLookFlag']
	})
	export default class caseSupplement extends Vue {
		subMenuItem: Array = [{
				title: '线索受理信息',
				active: true,
				id: 'menu1',
				eleBtnId: 'eleBtnId1',
				eleId: 'menuName1'
			},
			{
				title: '线索处置信息',
				active: false,
				id: 'menu2',
				eleBtnId: 'eleBtnId2',
				eleId: 'menuName2'
			},
			{
				title: ' 线索办理信息',
				active: false,
				id: 'menu3',
				eleBtnId: 'eleBtnId3',
				eleId: 'menuName3'
			},
			{
				title: '通报反馈信息',
				active: false,
				id: 'menu4',
				eleBtnId: 'eleBtnId4',
				eleId: 'menuName4'
			}
		];

		//滚轮导航点击定位
		menuGo(item) {
			item.active = true;
			for (let i = 1; i < 5; i++) {
				document.getElementById('menuName' + i).setAttribute('class', '');
				document.getElementById('eleBtnId' + i).setAttribute('class',
					'el-button tab-btn el-button--default el-button--small is-circle');
			}
			this.subMenuItem.forEach(function(v) {
				if (v.id === item.id) {
					v.active = true;
				} else {
					v.active = false;
				}
			});
			document.getElementById(item.id).scrollIntoView();
		}
	}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
	.backplane {
		.backplane-Content {

			//右侧内容外边距
			.el-main {
				margin-left: 160px;
				//文本域固定高度,隐藏滚动条
				/deep/.el-textarea__inner {
					overflow: hidden;
					height: 110px;
				}
				//展示文本按钮
				.show-text{
					color: #409EFF;
					text-align: center;
					
					span{
					cursor: pointer;
					}
				}
				
			}

			//左侧导航菜单外边距
			.el-aside {
				ul {
					margin-top: 20px;
				}
			}
		}
	}



	//预警天数样式
	.el-form-tip {
		text-align: left;
		width: 100%;
		font-size: 14px;
		margin-top: 1%;

		.el-col {
			padding: 0px 0px 12px 40px;
		}

		.tip-iput {
			width: 40px;
		}

		/deep/.el-input__inner {
			height: 40px;
			background-color: #deefff;
			border: 1px solid #85beed;
			border-radius: 4px;
		}

		/deep/.span-tip {
			margin-left: 10px;
		}

		/deep/ .el-form-item__label {
			font-size: 14px;
			color: #606266;
			margin-top: 3%;
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

	//input输入框后缀
	/deep/.el-input__suffix-inner {
		color: #606266;
	}

	//menu导航内容样式
	.menu-content {
		.menu-block {
			padding: 15px 0 20px 0;

			.row-title {
				margin: 0px;
				height: 45px;
				line-height: 45px;
				text-align: left;
				padding: 0;
				padding: 0px 20px;
				font-size: 16px;
				color: #2f76dd;
				border: 1px solid #dee1e7;

				span {
					float: right;
				}
			}
		}
	}

	//分割线样式
	.dividingLine {
		margin-top: 10px;
		margin-bottom: 10px;
		border: 1px dashed #e6e6e6;
	}
</style>
