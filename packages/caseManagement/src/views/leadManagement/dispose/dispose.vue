<template>
	<div class="box">
		<el-container style="height:100%;">
			<div class="el-main bg-layout">
				<!-- =========================================左边部分========================================================================= -->
				<el-row>
					<el-col :span="3">
						<el-aside width="150px">
							<!-- 提前加载图片  解决首次切换闪动 -->
							<div class="icon-noscope-sed" style="display:none"></div>
							<div class="icon-outscope-sed" style="display:none"></div>
							<div class="icon-inscope" style="display:none"></div>
							<div class="row-box">
								<div
									@click="changImg(1)"
									id="inscopeImg"
									class="icon-box"
									:class="{ 'icon-inscope': !inscopeFlag, 'icon-inscope-sed': inscopeFlag }"
									rotate-flag="inscope"
								>
									<div class="rotate-box">
										<el-badge :value="inscopeCount" class="not-disposal-tab">
											<div class="img-div"><img src="../../../../public/img/bjc.png" /></div>
											<div class="font-info">本级直查</div>
										</el-badge>
									</div>
								</div>

								<div
									@click="changImg(2)"
									:class="{
										'icon-outscope': !outscopeFlag,
										'icon-outscope-sed': outscopeFlag
									}"
									class="icon-box"
									rotate-flag="outscope"
								>
									<div class="rotate-box">
										<el-badge :value="outscopeCount" class="not-disposal-tab">
											<div class="img-div"><img src="../../../../public/img/zxjc.png" /></div>
											<div class="font-info">转下级调查</div>
										</el-badge>
									</div>
								</div>
								<div @click="changImg(3)" :class="{ 'icon-noscope': !noscopeFlag, 'icon-noscope-sed': noscopeFlag }" class="icon-box" rotate-flag="noscope">
									<div class="rotate-box">
										<el-badge :value="noscopeCount" class="not-disposal-tab">
											<div class="img-div"><img src="../../../../public/img/zqtc.png" /></div>
											<div class="font-info">转其他单位</div>
										</el-badge>
									</div>
								</div>
							</div>
						</el-aside>
					</el-col>
					<!-- =========================================右边部分========================================================================= -->
					<el-col :span="21">
						<div>
							<!-- =========================================上半部分========================================================================= -->
							<div class="query-box">
								<div class="bg-layout">
									<div class="block search-Item">
										<!-- 查询条件 -->
										<el-collapse v-model="activeNames">
											<el-collapse-item name="1">
												<el-row slot="title" class="title">检索查询</el-row>
												<el-form :inline="true" :model="keyWords" ref="keyWords" class="form-label-right-query">
													<el-row>
														<el-col :span="7">
															<el-form-item label="线索名称:" prop="clueName">
																<el-input v-model="keyWords.clueName" placeholder="线索名称" style="width:200px"></el-input>
															</el-form-item>
														</el-col>
														<el-col :span="7">
															<el-form-item label="姓名:" prop="personnelName">
																<el-input v-model="keyWords.personnelName" placeholder="姓名" style="width:200px"></el-input>
															</el-form-item>
														</el-col>
														<el-col :span="10" :pull="2">
															<el-form-item>
																<el-button size="mini" type="primary" @click="selectSubmit" icon="el-icon-search">查询</el-button>
																<el-button size="mini" @click="resetForm('keyWords')" icon="el-icon-refresh">重置</el-button>
															</el-form-item>
														</el-col>
													</el-row>
												</el-form>
											</el-collapse-item>
										</el-collapse>
									</div>

									<!-- =========================================下半部分========================================================================= -->
									<!-- =========================================本级直查检索结果========================================= -->
									<div class="block margin-top" v-show="inscopeFlag">
										<el-row class="title">检索结果</el-row>
										<!-- 菜单栏切换样式 -->
										<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
											<el-menu-item index="1">
												<el-badge :value="inscope_preliminaryVerificationForm.length" class="not-disposal-tab">
													<div class="meau-item">初步核实</div>
												</el-badge>
											</el-menu-item>
											<el-menu-item index="2">
												<el-badge :value="inscope_InvestigationVerifyForm.length" class="has-disposal-tab"><div class="meau-item">调查核实</div></el-badge>
											</el-menu-item>
											<el-menu-item index="3">
												<el-badge :value="inscope_talkForm.length" class="not-disposal-tab"><div class="meau-item">谈话</div></el-badge>
											</el-menu-item>
											<el-menu-item index="4">
												<el-badge :value="inscope_applyLetterForm.length" class="has-disposal-tab"><div class="meau-item">函询</div></el-badge>
											</el-menu-item>
											<el-menu-item index="5">
												<el-badge :value="inscope_registerInvestigateForm.length" class="not-disposal-tab"><div class="meau-item">立案调查</div></el-badge>
											</el-menu-item>
											<el-menu-item index="6">
												<el-badge :value="inscope_sideUnderstandForm.length" class="has-disposal-tab"><div class="meau-item">侧面了解</div></el-badge>
											</el-menu-item>
										</el-menu>
										<div class="table">
											<!-- 初步核实表格开始 -->
											<div class="not-disposal-tab" v-show="isInscopeChecked == 1">
												<el-table
													:data="inscope_preliminaryVerificationForm.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
													border
													:row-class-name="'table-header-bg1'"
													:header-cell-class-name="'table-header-bg'"
													:cell-class-name="'tableContent-bg'"
												>
													<!-- <el-table-column type="selection" width="40"></el-table-column> -->
													<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="clueName"
														label="线索名称"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column prop="name" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="position"
														label="部职别(工作单位)"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="acceptDate"
														label="受理时间"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="clueSourceCode"
														label="线索来源"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="nowStatus"
														label="当前状态"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column label="操作区" align="center" width="200px">
														<template slot-scope="scope">
															<el-button type="text" size="small" @click="showModelFlag = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																初核方案
															</el-button>
															<el-button type="text" size="small" @click="dialogDisLook = true" style="padding: 0px;">
																<i class="el-icon-view"></i>
																查看
															</el-button>
															<el-button type="text" size="small" @click="showModelFlag4 = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																审理
															</el-button>
															<el-button type="text" size="small" @click="dialogFormVisible2 = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																结案报告
															</el-button>
															<el-button type="text" size="small" @click="showModelFlag3 = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																立案
															</el-button>
														</template>
													</el-table-column>
												</el-table>
												<!-- 分页 -->
												<el-row>
													<div class="block page-positton">
														<el-pagination
															style="text-align: right;"
															@size-change="handleSizeChange"
															@current-change="handleCurrentChange"
															:page-sizes="[5, 10, 15, 20, 25]"
															:current-page="currentPage"
															:page-size="pagesize"
															small
															background
															layout="total, sizes, prev, pager, next, jumper"
															:total="inscope_preliminaryVerificationForm.length"
														></el-pagination>
													</div>
												</el-row>
											</div>
											<!-- 初步核实表格结束 -->

											<!-- 调查核实表格开始 -->
											<div class="not-disposal-tab" v-show="isInscopeChecked == 2">
												<el-table
													:data="inscope_InvestigationVerifyForm.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
													border
													:row-class-name="'table-header-bg1'"
													:header-cell-class-name="'table-header-bg'"
													:cell-class-name="'tableContent-bg'"
												>
													<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="clueName"
														label="线索名称"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column prop="name" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="position"
														label="部职别(工作单位)"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="acceptDate"
														label="受理时间"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="clueSourceCode"
														label="线索来源"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="nowStatus"
														label="当前状态"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column label="操作区" align="center" width="200px">
														<template slot-scope="scope">
															<el-button type="text" size="small" @click="dialogFormVisible = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																调查报告
															</el-button>
															<el-button type="text" size="small" @click="dialogDisLook = true" style="padding: 0px;">
																<i class="el-icon-view"></i>
																查看
															</el-button>
														</template>
													</el-table-column>
												</el-table>
												<!-- 分页 -->
												<el-row>
													<div class="block page-positton">
														<el-pagination
															style="text-align: right;"
															@size-change="handleSizeChange"
															@current-change="handleCurrentChange"
															:page-sizes="[5, 10, 15, 20, 25]"
															:current-page="currentPage"
															:page-size="pagesize"
															small
															background
															layout="total, sizes, prev, pager, next, jumper"
															:total="inscope_InvestigationVerifyForm.length"
														></el-pagination>
													</div>
												</el-row>
											</div>
											<!-- 调查核实表格结束 -->

											<!-- 谈话表格开始 -->
											<div class="not-disposal-tab" v-show="isInscopeChecked == 3">
												<el-table
													:data="inscope_talkForm.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
													border
													:row-class-name="'table-header-bg1'"
													:header-cell-class-name="'table-header-bg'"
													:cell-class-name="'tableContent-bg'"
												>
													<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="clueName"
														label="线索名称"
														align="center"
														min-width="25%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column prop="name" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="position"
														label="部职别(工作单位)"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="acceptDate"
														label="受理时间"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="clueSourceCode"
														label="线索来源"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column label="操作区" align="center" width="200px">
														<template slot-scope="scope">
															<el-button type="text" size="small" @click="dialogFormVisible = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																谈话报告
															</el-button>
															<el-button type="text" size="small" @click="dialogDisLook = true" style="padding: 0px;">
																<i class="el-icon-view"></i>
																查看
															</el-button>
														</template>
													</el-table-column>
												</el-table>
												<!-- 分页 -->
												<el-row>
													<div class="block page-positton">
														<el-pagination
															style="text-align: right;"
															@size-change="handleSizeChange"
															@current-change="handleCurrentChange"
															:page-sizes="[5, 10, 15, 20, 25]"
															:current-page="currentPage"
															:page-size="pagesize"
															small
															background
															layout="total, sizes, prev, pager, next, jumper"
															:total="inscope_talkForm.length"
														></el-pagination>
													</div>
												</el-row>
											</div>
											<!-- 谈话表格结束 -->

											<!-- 函询表格开始 -->
											<div class="not-disposal-tab" v-show="isInscopeChecked == 4">
												<el-table
													:data="inscope_applyLetterForm.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
													border
													:row-class-name="'table-header-bg1'"
													:header-cell-class-name="'table-header-bg'"
													:cell-class-name="'tableContent-bg'"
												>
													<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="clueName"
														label="线索名称"
														align="center"
														min-width="25%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column prop="name" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="position"
														label="部职别(工作单位)"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="acceptDate"
														label="受理时间"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="clueSourceCode"
														label="线索来源"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column label="操作区" align="center" width="200px">
														<template slot-scope="scope">
															<el-button type="text" size="small" @click="dialogFormVisible = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																函询报告
															</el-button>
															<el-button type="text" size="small" @click="dialogDisLook = true" style="padding: 0px;">
																<i class="el-icon-view"></i>
																查看
															</el-button>
														</template>
													</el-table-column>
												</el-table>
												<!-- 分页 -->
												<el-row>
													<div class="block page-positton">
														<el-pagination
															style="text-align: right;"
															@size-change="handleSizeChange"
															@current-change="handleCurrentChange"
															:page-sizes="[5, 10, 15, 20, 25]"
															:current-page="currentPage"
															:page-size="pagesize"
															small
															background
															layout="total, sizes, prev, pager, next, jumper"
															:total="inscope_applyLetterForm.length"
														></el-pagination>
													</div>
												</el-row>
											</div>
											<!-- 函询表格结束 -->

											<!-- 立案调查表格开始 -->
											<div class="not-disposal-tab" v-show="isInscopeChecked == 5">
												<el-table
													:data="inscope_registerInvestigateForm.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
													border
													:row-class-name="'table-header-bg1'"
													:header-cell-class-name="'table-header-bg'"
													:cell-class-name="'tableContent-bg'"
												>
													<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="clueName"
														label="线索名称"
														align="center"
														min-width="25%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column prop="name" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="position"
														label="部职别(工作单位)"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="acceptDate"
														label="受理时间"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="clueSourceCode"
														label="线索来源"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column label="操作区" align="center" width="200px">
														<template slot-scope="scope">
															<el-button type="text" size="small" @click="dialogFormVisible = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																立案报告
															</el-button>
															<el-button type="text" size="small" @click="dialogDisLook = true" style="padding: 0px;">
																<i class="el-icon-view"></i>
																查看
															</el-button>
														</template>
													</el-table-column>
												</el-table>
												<!-- 分页 -->
												<el-row>
													<div class="block page-positton">
														<el-pagination
															style="text-align: right;"
															@size-change="handleSizeChange"
															@current-change="handleCurrentChange"
															:page-sizes="[5, 10, 15, 20, 25]"
															:current-page="currentPage"
															:page-size="pagesize"
															small
															background
															layout="total, sizes, prev, pager, next, jumper"
															:total="inscope_registerInvestigateForm.length"
														></el-pagination>
													</div>
												</el-row>
											</div>
											<!-- 立案调查表格结束 -->

											<!-- 侧面了解表格开始 -->
											<div class="not-disposal-tab" v-show="isInscopeChecked == 6">
												<el-table
													:data="inscope_sideUnderstandForm.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
													border
													:row-class-name="'table-header-bg1'"
													:header-cell-class-name="'table-header-bg'"
													:cell-class-name="'tableContent-bg'"
												>
													<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="clueName"
														label="线索名称"
														align="center"
														min-width="25%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column prop="name" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="position"
														label="部职别(工作单位)"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="acceptDate"
														label="受理时间"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="clueSourceCode"
														label="线索来源"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column label="操作区" align="center" width="200px">
														<template slot-scope="scope">
															<el-button type="text" size="small" @click="dialogFormVisible = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																了解报告
															</el-button>
															<el-button type="text" size="small" @click="dialogDisLook = true" style="padding: 0px;">
																<i class="el-icon-view"></i>
																查看
															</el-button>
														</template>
													</el-table-column>
												</el-table>
												<!-- 分页 -->
												<el-row>
													<div class="block page-positton">
														<el-pagination
															style="text-align: right;"
															@size-change="handleSizeChange"
															@current-change="handleCurrentChange"
															:page-sizes="[5, 10, 15, 20, 25]"
															:current-page="currentPage"
															:page-size="pagesize"
															small
															background
															layout="total, sizes, prev, pager, next, jumper"
															:total="inscope_sideUnderstandForm.length"
														></el-pagination>
													</div>
												</el-row>
											</div>
											<!-- 侧面了解表格结束 -->
										</div>
									</div>

									<!-- =========================================转下级调查检索结果========================================= -->

									<div class="block margin-top" v-show="outscopeFlag">
										<el-row class="title">检索结果</el-row>
										<!-- 菜单栏切换样式 -->
										<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
											<el-menu-item index="1">
												<el-badge :value="outscope_preliminaryVerificationForm.length" class="not-disposal-tab">
													<div class="meau-item">初步核实</div>
												</el-badge>
											</el-menu-item>
											<el-menu-item index="2">
												<el-badge :value="outscope_InvestigationVerifyForm.length" class="has-disposal-tab"><div class="meau-item">调查核实</div></el-badge>
											</el-menu-item>
											<el-menu-item index="3">
												<el-badge :value="outscope_talkForm.length" class="not-disposal-tab"><div class="meau-item">谈话</div></el-badge>
											</el-menu-item>
											<el-menu-item index="4">
												<el-badge :value="outscope_applyLetterForm.length" class="has-disposal-tab"><div class="meau-item">函询</div></el-badge>
											</el-menu-item>
											<el-menu-item index="5">
												<el-badge :value="outscope_registerInvestigateForm.length" class="not-disposal-tab"><div class="meau-item">立案调查</div></el-badge>
											</el-menu-item>
											<el-menu-item index="7">
												<el-badge :value="outscope_ReadingForm.length" class="has-disposal-tab"><div class="meau-item">阅处</div></el-badge>
											</el-menu-item>
										</el-menu>
										<div class="table">
											<!-- 初步核实表格开始 -->
											<div class="not-disposal-tab" v-show="isOutscopeChecked == 1">
												<el-table
													:data="outscope_preliminaryVerificationForm.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
													border
													:row-class-name="'table-header-bg1'"
													:header-cell-class-name="'table-header-bg'"
													:cell-class-name="'tableContent-bg'"
												>
													<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="clueName"
														label="线索名称"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column prop="name" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="position"
														label="部职别(工作单位)"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="acceptDate"
														label="受理时间"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="clueSourceCode"
														label="线索来源"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="nowStatus"
														label="当前状态"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column label="操作区" align="center" width="200px">
														<template slot-scope="scope">
															<el-button type="text" size="small" @click="dialogFormVisible = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																初核报告
															</el-button>
															<el-button type="text" size="small" @click="dialogDisLook = true" style="padding: 0px;">
																<i class="el-icon-view"></i>
																查看
															</el-button>
														</template>
													</el-table-column>
												</el-table>
												<!-- 分页 -->
												<el-row>
													<div class="block page-positton">
														<el-pagination
															style="text-align: right;"
															@size-change="handleSizeChange"
															@current-change="handleCurrentChange"
															:page-sizes="[5, 10, 15, 20, 25]"
															:current-page="currentPage"
															:page-size="pagesize"
															small
															background
															layout="total, sizes, prev, pager, next, jumper"
															:total="outscope_preliminaryVerificationForm.length"
														></el-pagination>
													</div>
												</el-row>
											</div>
											<!-- 初步核实表格结束 -->

											<!-- 调查核实表格开始 -->
											<div class="not-disposal-tab" v-show="isOutscopeChecked == 2">
												<el-table
													:data="outscope_InvestigationVerifyForm.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
													border
													:row-class-name="'table-header-bg1'"
													:header-cell-class-name="'table-header-bg'"
													:cell-class-name="'tableContent-bg'"
												>
													<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="clueName"
														label="线索名称"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column prop="name" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="position"
														label="部职别(工作单位)"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="acceptDate"
														label="受理时间"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="clueSourceCode"
														label="线索来源"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="nowStatus"
														label="当前状态"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column label="操作区" align="center" width="200px">
														<template slot-scope="scope">
															<el-button type="text" size="small" @click="dialogFormVisible = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																调查报告
															</el-button>
															<el-button type="text" size="small" @click="dialogDisLook = true" style="padding: 0px;">
																<i class="el-icon-view"></i>
																查看
															</el-button>
														</template>
													</el-table-column>
												</el-table>
												<!-- 分页 -->
												<el-row>
													<div class="block page-positton">
														<el-pagination
															style="text-align: right;"
															@size-change="handleSizeChange"
															@current-change="handleCurrentChange"
															:page-sizes="[5, 10, 15, 20, 25]"
															:current-page="currentPage"
															:page-size="pagesize"
															small
															background
															layout="total, sizes, prev, pager, next, jumper"
															:total="outscope_InvestigationVerifyForm.length"
														></el-pagination>
													</div>
												</el-row>
											</div>
											<!-- 调查核实表格结束 -->

											<!-- 谈话表格开始 -->
											<div class="not-disposal-tab" v-show="isOutscopeChecked == 3">
												<el-table
													:data="outscope_talkForm.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
													border
													:row-class-name="'table-header-bg1'"
													:header-cell-class-name="'table-header-bg'"
													:cell-class-name="'tableContent-bg'"
												>
													<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="clueName"
														label="线索名称"
														align="center"
														min-width="25%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column prop="name" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="position"
														label="部职别(工作单位)"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="acceptDate"
														label="受理时间"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="clueSourceCode"
														label="线索来源"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column label="操作区" align="center" width="200px">
														<template slot-scope="scope">
															<el-button type="text" size="small" @click="dialogFormVisible = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																谈话报告
															</el-button>
															<el-button type="text" size="small" @click="dialogDisLook = true" style="padding: 0px;">
																<i class="el-icon-view"></i>
																查看
															</el-button>
														</template>
													</el-table-column>
												</el-table>
												<!-- 分页 -->
												<el-row>
													<div class="block page-positton">
														<el-pagination
															style="text-align: right;"
															@size-change="handleSizeChange"
															@current-change="handleCurrentChange"
															:page-sizes="[5, 10, 15, 20, 25]"
															:current-page="currentPage"
															:page-size="pagesize"
															small
															background
															layout="total, sizes, prev, pager, next, jumper"
															:total="outscope_talkForm.length"
														></el-pagination>
													</div>
												</el-row>
											</div>
											<!-- 谈话表格结束 -->

											<!-- 函询表格开始 -->
											<div class="not-disposal-tab" v-show="isOutscopeChecked == 4">
												<el-table
													:data="outscope_applyLetterForm.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
													border
													:row-class-name="'table-header-bg1'"
													:header-cell-class-name="'table-header-bg'"
													:cell-class-name="'tableContent-bg'"
												>
													<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="clueName"
														label="线索名称"
														align="center"
														min-width="25%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column prop="name" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="position"
														label="部职别(工作单位)"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="acceptDate"
														label="受理时间"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="clueSourceCode"
														label="线索来源"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column label="操作区" align="center" width="200px">
														<template slot-scope="scope">
															<el-button type="text" size="small" @click="dialogFormVisible = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																函询报告
															</el-button>
															<el-button type="text" size="small" @click="dialogDisLook = true" style="padding: 0px;">
																<i class="el-icon-view"></i>
																查看
															</el-button>
														</template>
													</el-table-column>
												</el-table>
												<!-- 分页 -->
												<el-row>
													<div class="block page-positton">
														<el-pagination
															style="text-align: right;"
															@size-change="handleSizeChange"
															@current-change="handleCurrentChange"
															:page-sizes="[5, 10, 15, 20, 25]"
															:current-page="currentPage"
															:page-size="pagesize"
															small
															background
															layout="total, sizes, prev, pager, next, jumper"
															:total="outscope_applyLetterForm.length"
														></el-pagination>
													</div>
												</el-row>
											</div>
											<!-- 函询表格结束 -->

											<!-- 立案调查表格开始 -->
											<div class="not-disposal-tab" v-show="isOutscopeChecked == 5">
												<el-table
													:data="outscope_registerInvestigateForm.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
													border
													:row-class-name="'table-header-bg1'"
													:header-cell-class-name="'table-header-bg'"
													:cell-class-name="'tableContent-bg'"
												>
													<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="clueName"
														label="线索名称"
														align="center"
														min-width="25%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column prop="name" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="position"
														label="部职别(工作单位)"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="acceptDate"
														label="受理时间"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="clueSourceCode"
														label="线索来源"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column label="操作区" align="center" width="200px">
														<template slot-scope="scope">
															<el-button type="text" size="small" @click="dialogFormVisible = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																立案报告
															</el-button>
															<el-button type="text" size="small" @click="dialogDisLook = true" style="padding: 0px;">
																<i class="el-icon-view"></i>
																查看
															</el-button>
														</template>
													</el-table-column>
												</el-table>
												<!-- 分页 -->
												<el-row>
													<div class="block page-positton">
														<el-pagination
															style="text-align: right;"
															@size-change="handleSizeChange"
															@current-change="handleCurrentChange"
															:page-sizes="[5, 10, 15, 20, 25]"
															:current-page="currentPage"
															:page-size="pagesize"
															small
															background
															layout="total, sizes, prev, pager, next, jumper"
															:total="outscope_registerInvestigateForm.length"
														></el-pagination>
													</div>
												</el-row>
											</div>
											<!-- 立案调查表格结束 -->

											<!-- 阅处表格开始 -->
											<div class="not-disposal-tab" v-show="isOutscopeChecked == 7">
												<el-table
													:data="outscope_ReadingForm.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
													border
													:row-class-name="'table-header-bg1'"
													:header-cell-class-name="'table-header-bg'"
													:cell-class-name="'tableContent-bg'"
												>
													<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="clueName"
														label="线索名称"
														align="center"
														min-width="25%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column prop="name" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="position"
														label="部职别(工作单位)"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="acceptDate"
														label="受理时间"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="clueSourceCode"
														label="线索来源"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column label="操作区" align="center" width="200px">
														<template slot-scope="scope">
															<el-button type="text" size="small" @click="dialogFormVisible = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																阅处报告
															</el-button>
															<el-button type="text" size="small" @click="dialogDisLook = true" style="padding: 0px;">
																<i class="el-icon-view"></i>
																查看
															</el-button>
														</template>
													</el-table-column>
												</el-table>
												<!-- 分页 -->
												<el-row>
													<div class="block page-positton">
														<el-pagination
															style="text-align: right;"
															@size-change="handleSizeChange"
															@current-change="handleCurrentChange"
															:page-sizes="[5, 10, 15, 20, 25]"
															:current-page="currentPage"
															:page-size="pagesize"
															small
															background
															layout="total, sizes, prev, pager, next, jumper"
															:total="outscope_ReadingForm.length"
														></el-pagination>
													</div>
												</el-row>
											</div>
											<!-- 阅处表格结束 -->
										</div>
									</div>
									<!-- =========================================转其他单位调查检索结果========================================= -->
									<div class="block margin-top" v-show="noscopeFlag">
										<el-row class="title">检索结果</el-row>
										<!-- 菜单栏切换样式 -->
										<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
											<el-menu-item index="1">
												<el-badge :value="noscope_receivingFeedbackForm.length" class="not-disposal-tab"><div class="meau-item">接收反馈</div></el-badge>
											</el-menu-item>
										</el-menu>
										<div class="table">
											<!-- 接收反馈表格开始 -->
											<div class="not-disposal-tab">
												<el-table
													:data="noscope_receivingFeedbackForm.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
													border
													:row-class-name="'table-header-bg1'"
													:header-cell-class-name="'table-header-bg'"
													:cell-class-name="'tableContent-bg'"
												>
													<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="clueName"
														label="线索名称"
														align="center"
														min-width="25%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column prop="name" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
													<el-table-column
														prop="position"
														label="部职别(工作单位)"
														align="center"
														min-width="20%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="acceptDate"
														label="受理时间"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column
														prop="clueSourceCode"
														label="线索来源"
														align="center"
														min-width="10%"
														:show-overflow-tooltip="true"
													></el-table-column>
													<el-table-column label="操作区" align="center" width="200px">
														<template slot-scope="scope">
															<el-button type="text" size="small" @click="showModelFlag2 = true" style="padding: 0px;">
																<i class="el-icon-edit"></i>
																接收反馈
															</el-button>
															<el-button type="text" size="small" @click="dialogDisLook = true" style="padding: 0px;">
																<i class="el-icon-view"></i>
																查看
															</el-button>
														</template>
													</el-table-column>
												</el-table>
												<!-- 分页 -->
												<el-row>
													<div class="block page-positton">
														<el-pagination
															style="text-align: right;"
															@size-change="handleSizeChange"
															@current-change="handleCurrentChange"
															:page-sizes="[5, 10, 15, 20, 25]"
															:current-page="currentPage"
															:page-size="pagesize"
															small
															background
															layout="total, sizes, prev, pager, next, jumper"
															:total="noscope_receivingFeedbackForm.length"
														></el-pagination>
													</div>
												</el-row>
											</div>
											<!-- 接收反馈表格结束 -->
										</div>
									</div>
								</div>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
		</el-container>
		<!-- =================================================dialog弹框 =================================================-->

		<!-- =================================================初核方案dialog弹框开始================================================= -->
		<el-dialog
			title="初核方案"
			class="mc-dialog-medium"
			:visible.sync="showModelFlag"
			width="68.81%"
			top="3.5%"
			center
			:close-on-click-modal=false
			@close="initialCheckProgramClose('initialCheckProgramForm')"
		>
			<el-form class="form-label-top" :model="initialCheckProgramForm" ref="initialCheckProgramForm">
				<el-row>
					<el-col :span="24">
						<el-form-item label="方案标题:" prop="programTitle"><el-input v-model="initialCheckProgramForm.programTitle"></el-input></el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<el-form-item label="方案文号:" prop="programNum"><el-input v-model="initialCheckProgramForm.programNum"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="方案批准人:" prop="programApprovePeople"><el-input v-model="initialCheckProgramForm.programApprovePeople"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="方案批准时间:" prop="programApproveTime">
							<el-date-picker v-model="initialCheckProgramForm.programApproveTime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<el-form-item label="方案批准意见:" prop="programApproveOpinion">
							<el-input type="textarea" :rows="4" resize="none" v-model="initialCheckProgramForm.programApproveOpinion"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button size="small" type="primary" @click="initialCheckProgramSubmit()">提交</el-button>
				<el-button size="small" type="success" @click="initialCheckProgramSave()">保存</el-button>
				<el-button size="small" @click="showModelFlag = false">返回</el-button>
			</div>
		</el-dialog>

		<!-- =================================================立案dialog小弹框开始================================================= -->
		<el-dialog
			title="立案信息"
			class="mc-dialog-medium"
			:visible.sync="showModelFlag3"
			width="68.81%"
			top="3.5%"
			center
			:close-on-click-modal=false
			@close="filingInformationFormClose('filingInformationForm')"
		>
			<div style="padding-right: 20px">
				<el-form class="form-label-top" :model="filingInformationForm" ref="filingInformationForm">
					<el-row class="title">
						<i class="el-icon-info"></i>
						立案信息
					</el-row>
					<div class="form-content">
						<div style="padding: 0px 20px;">
							<el-row>
								<el-col :span="8">
									<el-form-item label="立案时间:" prop="filingTime">
										<el-date-picker v-model="filingInformationForm.filingInformation.filingTime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
									</el-form-item>
								</el-col>
								<el-col :span="16">
									<el-form-item label="采取措施:" prop="takeMeasures">
										<el-radio-group v-model="filingInformationForm.filingInformation.takeMeasures" @change="takeMeasuresFlagChange">
											<el-radio :label="0">留置</el-radio>
											<el-radio :label="1">集中组织谈话</el-radio>
											<el-radio :label="2">无</el-radio>
										</el-radio-group>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="8" v-if="takeMeasuresFlag == 0">
									<el-form-item label="采取留置时间:" prop="takeRetentionTime">
										<el-date-picker v-model="filingInformationForm.filingInformation.takeRetentionTime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
									</el-form-item>
								</el-col>
								<el-col :span="8" v-if="takeMeasuresFlag == 1">
									<el-form-item label="采取集中谈话时间:" prop="takeChatTime">
										<el-date-picker v-model="filingInformationForm.filingInformation.takeChatTime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
									</el-form-item>
								</el-col>
							</el-row>
						</div>
					</div>


					<el-row class="title" style="margin-top: 20px;">
						<i class="el-icon-info"></i>
						报批信息
					</el-row>
					<div class="form-content">
						<div style="padding: 0px 20px;">
							<el-row>
								<el-col :span="24">
									<el-form-item label="呈批件标题:" prop="certifedTitle">
										<el-input v-model="filingInformationForm.ApprovalInformation.certifedTitle"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="8">
									<el-form-item label="呈批件文号:" prop="certifedSymbol">
										<el-input v-model="filingInformationForm.ApprovalInformation.certifedSymbol"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="批准时间:" prop="certifedDate">
										<el-date-picker v-model="filingInformationForm.ApprovalInformation.certifedDate" type="date" value-format="yyyy-MM-dd"></el-date-picker>
									</el-form-item>
								</el-col>
								<el-col :span="8">
									<el-form-item label="批准人:" prop="certifedPerson">
										<el-input v-model="filingInformationForm.ApprovalInformation.certifedPerson"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="24">
									<el-form-item label="处置意见:" prop="manageOpinion">
										<el-input type="textarea" :rows="4" resize="none" v-model="filingInformationForm.ApprovalInformation.manageOpinion"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
						</div>
					</div>
				</el-form>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button size="small" type="primary" @click="filingInformationFormSubmit()">提交</el-button>
				<el-button size="small" type="success" @click="filingInformationFormSave()">保存</el-button>
				<el-button size="small" @click="showModelFlag3 = false">返回</el-button>
			</div>
		</el-dialog>

		<!-- =================================================审理dialog小弹框开始================================================= -->
		<el-dialog title="提前介入审理" class="mc-dialog-medium" :visible.sync="showModelFlag4" width="68.81%" top="3.5%" center :close-on-click-modal=false @close="hearingFormClose('hearingForm')">
			<el-form class="form-label-top" :model="hearingForm" ref="hearingForm">
				<el-row>
					<el-col :span="24">
						<el-form-item label="呈批件标题:" prop="certifedTitle"><el-input v-model="hearingForm.certifedTitle"></el-input></el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<el-form-item label="呈批件文号:" prop="certifedSymbol"><el-input v-model="hearingForm.certifedSymbol"></el-input></el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="批准时间:" prop="certifedDate">
							<el-date-picker v-model="hearingForm.certifedDate" type="date" value-format="yyyy-MM-dd"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="批准人:" prop="certifedPerson"><el-input v-model="hearingForm.certifedPerson"></el-input></el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<el-form-item label="处置意见:" prop="manageOpinion">
							<el-input type="textarea" :rows="4" resize="none" v-model="hearingForm.manageOpinion"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button size="small" type="primary" @click="hearingFormSubmit()">提交</el-button>
				<el-button size="small" type="success" @click="hearingFormSave()">保存</el-button>
				<el-button size="small" @click="showModelFlag4 = false">返回</el-button>
			</div>
		</el-dialog>

		<!-- =================================================接收反馈dialog弹框开始================================================= -->
		<el-dialog title="接收反馈" class="mc-dialog-medium" :close-on-click-modal=false :visible.sync="showModelFlag2" width="48.81%" top="6.5%" center @close="acceptFeedbackClose('acceptFeedbackForm')">
			<el-form class="form-label-top" :model="acceptFeedbackForm" ref="acceptFeedbackForm">
				<el-row>
					<el-col :span="16" :push="4">
						<el-form-item label="接收人:" prop="receivePerson"><el-input v-model="acceptFeedbackForm.receivePerson"></el-input></el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="16" :push="4">
						<el-form-item label="接收时间:" prop="receiveTime">
							<el-date-picker v-model="acceptFeedbackForm.receiveTime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="16" :push="4">
						<el-form-item label="接收单位联系方式:" prop="programTitle"><el-input v-model="acceptFeedbackForm.receiveUnitPhone"></el-input></el-form-item>
					</el-col>
				</el-row>
			</el-form>

			<div slot="footer" class="dialog-footer">
				<el-button size="small" type="primary" @click="acceptFeedbackSubmit()">提交</el-button>
				<el-button size="small" type="success"  @click="acceptFeedbackSave()">保存</el-button>
				<el-button size="small" @click="showModelFlag2 = false">返回</el-button>
			</div>
		</el-dialog>

		<!-- =================================================报告通用dialog弹框开始================================================= -->
		<el-dialog class="mc-dialog-big" width="100%" top="0" title="报告信息" lock-scroll :visible.sync="dialogFormVisible" :close-on-click-modal="false" v-if="dialogFormVisible">
			<currentReportEdit></currentReportEdit>
		</el-dialog>

		<!-- =================================================结案报告dialog弹框开始================================================= -->
		<el-dialog
			class="mc-dialog-big"
			width="100%"
			top="0"
			title="结案报告"
			lock-scroll
			:visible.sync="dialogFormVisible2"
			:close-on-click-modal="false"
			v-if="dialogFormVisible2"
		>
			<closingReportEdit></closingReportEdit>
		</el-dialog>

		<!-- =================================================线索信息查看================================================= -->
		<el-dialog
			v-if="dialogDisLook"
			class="mc-dialog-big"
			width="100%"
			top="0"
			title="线索信息查看"
			lock-scroll
			:modal="false"
			:visible.sync="dialogDisLook"
			:close-on-click-modal="false"
			@closed="dialogClose()"
		>
			<leadInfoLook ref="leadInfoLook" :dialogDisLookFlag="dialogDisLook"></leadInfoLook>
		</el-dialog>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from "vuex-class";
import Store from './store'
import currentReportEdit from '@/views/leadManagement/dispose/modal/currentReportEdit.vue';
import closingReportEdit from '@/views/leadManagement/dispose/modal/closingReportEdit.vue';
closingReportEdit;
import leadInfoLook from '@/views/leadManagement/modal/leadInfoLook.vue';
@Component({
	components: {
		currentReportEdit, //通用报告
		closingReportEdit, //结案报告
		leadInfoLook
	},
	data() {
		return {
			dialogDisLook: false, //线索信息查看标记
			inscopeFlag: true, //本级直查 切换标识
			outscopeFlag: false, //转下级 切换标识
			noscopeFlag: false, //转其他  切换标识
			isInscopeChecked: '1', //默认本级直查展示初步核实表格内容
			isOutscopeChecked: '1', //默认转下级调查展示初步核实表格内容
			activeIndex: '1', //菜单栏默认打开的属性
			activeNames: ['1'], //折叠框名称
			currentPage: 1, //分页栏初始页面
			pagesize: 5, //分页栏初始每页展示条数
			isSelectCurrentLevelFlag: true, //判断是否是本级直查的标记,默认为true,表示不是
			isSelectTransferNextLevelFlag: true, //判断是否是转下级的标记,默认为true,表示不是
			//初核方案dialog标记
			showModelFlag: false,
			//接收反馈dialog标记
			showModelFlag2: false,
			//立案dialog标记
			showModelFlag3: false,
			//审理dialog标记
			showModelFlag4: false,
			//通用报告dialog标记
			dialogFormVisible: false,
			//结案报告dialog标记
			dialogFormVisible2: false,
			inscopeCount: '', //本级直查总数
			outscopeCount: '', //转下级调查总数
			noscopeCount: '', //转其他单位总数
			takeMeasuresFlag: 'false', //判断采取措施标记
			//检索查询form表单
			keyWords: {
				clueName: '',
				personnelName: ''
			},

			// // 本级直查-初步核实表单
			// inscope_preliminaryVerificationForm: [
			// 	{
			// 		id: '1', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '2', //序号
			// 		clueName: '2019XSXS00031SDF', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '李某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '3', //序号
			// 		clueName: '2019XSXS000DFG31', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '王某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	}
			// ],
			// //本级直查-调查核实表单
			// inscope_InvestigationVerifyForm: [
			// 	{
			// 		id: '1', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '2', //序号
			// 		clueName: '2015XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '3', //序号
			// 		clueName: '2019XSXS00031SDF', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '4', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '5', //序号
			// 		clueName: '2015XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '6', //序号
			// 		clueName: '2019XSXS00031SDF', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	}
			// ],
			// //本级直查-谈话表单
			// inscope_talkForm: [
			// 	{
			// 		id: '1', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	},
			// 	{
			// 		id: '2', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	},
			// 	{
			// 		id: '3', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	},
			// 	{
			// 		id: '4', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	}
			// ],
			// //本级直查-函询表单
			// inscope_applyLetterForm: [
			// 	{
			// 		id: '1', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '2', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '3', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '4', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '5', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '6', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	}
			// ],
			// //本级直查-立案调查表单
			// inscope_registerInvestigateForm: [
			// 	{
			// 		id: '1', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	},
			// 	{
			// 		id: '2', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	},
			// 	{
			// 		id: '3', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	},
			// 	{
			// 		id: '4', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	}
			// ],
			// //本级直查-侧面了解表单
			// inscope_sideUnderstandForm: [
			// 	{
			// 		id: '1', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '2', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '3', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '4', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	}
			// ],

			// //转下级调查-初步核实表单
			// outscope_preliminaryVerificationForm: [
			// 	{
			// 		id: '1', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '2', //序号
			// 		clueName: '2019XSXS00031SDF', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '李某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '3', //序号
			// 		clueName: '2019XSXS000DFG31', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '王某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	}
			// ],
			// //转下级调查-调查核实表单
			// outscope_InvestigationVerifyForm: [
			// 	{
			// 		id: '1', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '2', //序号
			// 		clueName: '2015XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '3', //序号
			// 		clueName: '2019XSXS00031SDF', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '4', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '5', //序号
			// 		clueName: '2015XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	},
			// 	{
			// 		id: '6', //序号
			// 		clueName: '2019XSXS00031SDF', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送', //线索来源
			// 		nowStatus: '线索分发' //当前状态
			// 	}
			// ],
			// //转下级调查-谈话表单
			// outscope_talkForm: [
			// 	{
			// 		id: '1', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	},
			// 	{
			// 		id: '2', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	},
			// 	{
			// 		id: '3', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	},
			// 	{
			// 		id: '4', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	}
			// ],
			// //转下级调查-函询表单
			// outscope_applyLetterForm: [
			// 	{
			// 		id: '1', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '2', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '3', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '4', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	}
			// ],
			// //转下级调查-立案调查表单
			// outscope_registerInvestigateForm: [
			// 	{
			// 		id: '1', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	},
			// 	{
			// 		id: '2', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	},
			// 	{
			// 		id: '3', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	},
			// 	{
			// 		id: '4', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '巡视移交' //线索来源
			// 	}
			// ],
			// //转下级调查-阅处表单
			// outscope_ReadingForm: [
			// 	{
			// 		id: '1', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '2', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '3', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	},
			// 	{
			// 		id: '4', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审计移送' //线索来源
			// 	}
			// ],

			// //转其他单位-接收反馈表单
			// noscope_receivingFeedbackForm: [
			// 	{
			// 		id: '1', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审查调查发现' //线索来源
			// 	},
			// 	{
			// 		id: '2', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审查调查发现' //线索来源
			// 	},
			// 	{
			// 		id: '3', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审查调查发现' //线索来源
			// 	},
			// 	{
			// 		id: '4', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审查调查发现' //线索来源
			// 	},
			// 	{
			// 		id: '5', //序号
			// 		clueName: '2018XSSCASDI7537', //线索编号
			// 		clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
			// 		name: '张某某', //姓名
			// 		position: '部职别1(工作单位)', //部职别
			// 		acceptDate: '2019-03-08', //受理时间
			// 		clueSourceCode: '审查调查发现' //线索来源
			// 	}
			// ],

			//初核方案弹框表单字段
			initialCheckProgramForm: {
				programNum: '', //方案文号
				programTitle: '', //方案标题
				programApproveTime: '', //方案批准时间
				programApprovePeople: '', //方案批准人
				programApproveOpinion: '' //方案批准意见
			},
			//接收反馈弹框表单字段
			acceptFeedbackForm: {
				receivePerson: '', //接收人
				receiveUnit: '', //接收单位
				receiveTime: '' //接收时间
			},
			//审理弹框表单字段
			hearingForm: {
				certifedSymbol: '', //呈批件文号
				certifedTitle: '', //呈批件标题
				certifedPerson: '', //批准人
				certifedDate: '', //批准时间
				manageOpinion: '' //处置意见
			},
			//立案信息表单
			filingInformationForm: {
				filingInformation: {
					filingTime: '', //立案时间
					takeMeasures: '', //采取措施
					takeRetentionTime: '', //采取留置时间
					takeChatTime: '' //采取集中谈话时间
				},
				ApprovalInformation: {
					certifedSymbol: '', //呈批件文号
					certifedTitle: '', //呈批件标题
					certifedPerson: '', //批准人
					certifedDate: '', //批准时间
					manageOpinion: '' //处置意见
				}
			}
		};
	},
	created() {},
	mounted() {
		//给左侧菜单栏右上角进行赋值
		
		this.getHandlingList();
		//this.tableNumCount();
	},
	methods: {
		//检索查询的表单提交方法
		selectSubmit() {
			console.log(JSON.stringify(this.keyWords));
		},
		//初核方案表单提交方法
		initialCheckProgramSubmit() {
			//提示信息
			this.$message({
				showClose: true,
				message: '提交成功',
				type: 'success'
			});
			console.log(JSON.stringify(this.initialCheckProgramForm));
			this.showModelFlag = false;
		},
		//初核方案表单保存方法
		initialCheckProgramSave() {
			//提示信息
			this.$message({
				showClose: true,
				message: '保存成功',
				type: 'success'
			});
			this.showModelFlag = false;
		},
		//初核方案表单关闭方法
		initialCheckProgramClose(formName) {
			this.$refs[formName].resetFields();
		},
		//接收反馈表单提交方法
		acceptFeedbackSubmit() {
			//提示信息
			this.$message({
				showClose: true,
				message: '提交成功',
				type: 'success'
			});
			console.log(JSON.stringify(this.acceptFeedbackForm));
			this.showModelFlag2 = false;
		},
		//接收反馈表单保存方法
		acceptFeedbackSave() {
			//提示信息
			this.$message({
				showClose: true,
				message: '保存成功',
				type: 'success'
			});
			this.showModelFlag2 = false;
		},
		//接收反馈表单关闭方法
		acceptFeedbackClose(formName) {
			this.$refs[formName].resetFields();
		},
		//审理弹框提交方法
		hearingFormSubmit() {
			//提示信息
			this.$message({
				showClose: true,
				message: '提交成功',
				type: 'success'
			});
			console.log(JSON.stringify(this.hearingForm));
			this.showModelFlag4 = false;
		},
		//审理弹框保存方法
		hearingFormSave() {
			//提示信息
			this.$message({
				showClose: true,
				message: '保存成功',
				type: 'success'
			});
			this.showModelFlag4 = false;
		},
		//审理弹框关闭方法hearingForm
		hearingFormClose(formName) {
			this.$refs[formName].resetFields();
		},
		//立案弹框提交方法
		filingInformationFormSubmit() {
			//提示信息
			this.$message({
				showClose: true,
				message: '提交成功',
				type: 'success'
			});
			console.log(JSON.stringify(this.filingInformationForm));
			this.showModelFlag3 = false;
		},
		//立案弹框保存方法
		filingInformationFormSave() {
			//提示信息
			this.$message({
				showClose: true,
				message: '保存成功',
				type: 'success'
			});
			this.showModelFlag3 = false;
		},
		//立案弹框关闭方法
		filingInformationFormClose(formName) {
			this.$refs[formName].resetFields();
		},
		//分页栏翻页的方法
		handleSizeChange(size) {
			this.pagesize = size;
		},
		handleCurrentChange(currentPage) {
			this.currentPage = currentPage;
		},
		//用于初始化给 本级直查总数\转下级调查总数\转其他单位总数 进行赋值
		tableNumCount() {
			let inscopeCount =
				this.inscope_preliminaryVerificationForm.length +
				this.inscope_InvestigationVerifyForm.length +
				this.inscope_talkForm.length +
				this.inscope_applyLetterForm.length +
				this.inscope_registerInvestigateForm.length +
				this.inscope_sideUnderstandForm.length;
			let outscopeCount =
				this.outscope_preliminaryVerificationForm.length +
				this.outscope_InvestigationVerifyForm.length +
				this.outscope_talkForm.length +
				this.outscope_applyLetterForm.length +
				this.outscope_registerInvestigateForm.length +
				this.outscope_ReadingForm.length;
			let noscopeCount = this.noscope_receivingFeedbackForm.length;
			this.inscopeCount = inscopeCount;
			this.outscopeCount = outscopeCount;
			this.noscopeCount = noscopeCount;
		},
		//切换 本级直查\转下级\转其他 三个图片的样式方法
		changImg(num) {
			if (num == 1) {
				this.inscopeFlag = true;
				this.outscopeFlag = false;
				this.noscopeFlag = false;
			}

			if (num == 2) {
				this.inscopeFlag = false;
				this.outscopeFlag = true;
				this.noscopeFlag = false;
			}

			if (num == 3) {
				this.inscopeFlag = false;
				this.outscopeFlag = false;
				this.noscopeFlag = true;
			}
		},
		//菜单栏切换方法
		handleSelect(key) {
			if (this.inscopeFlag == true) {
				if (key == 1) {
					this.isInscopeChecked = 1;
				} else if (key == 2) {
					this.isInscopeChecked = 2;
				} else if (key == 3) {
					this.isInscopeChecked = 3;
				} else if (key == 4) {
					this.isInscopeChecked = 4;
				} else if (key == 5) {
					this.isInscopeChecked = 5;
				} else if (key == 6) {
					this.isInscopeChecked = 6;
				}
			} else if (this.outscopeFlag == true) {
				if (key == 1) {
					this.isOutscopeChecked = 1;
				} else if (key == 2) {
					this.isOutscopeChecked = 2;
				} else if (key == 3) {
					this.isOutscopeChecked = 3;
				} else if (key == 4) {
					this.isOutscopeChecked = 4;
				} else if (key == 5) {
					this.isOutscopeChecked = 5;
				} else if (key == 7) {
					this.isOutscopeChecked = 7;
				}
			}
		},
		//重置检索查询的表单
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		//判断立案dialog弹框中采取措施的更变方法
		takeMeasuresFlagChange(takeMeasuresKey) {
			// takeMeasuresFlag
			let takeMeasuresNum = this.filingInformationForm.filingInformation.takeMeasures;
			if (takeMeasuresNum == 0) {
				this.takeMeasuresFlag = '0';
			}
			if (takeMeasuresNum == 1) {
				this.takeMeasuresFlag = '1';
			}
			if (takeMeasuresNum == 2) {
				this.takeMeasuresFlag = '2';
			}
		},
		getHandlingList(){
			this.GetHandlingList().then((res:any) => {				
				this.inscope_preliminaryVerificationForm=res.data
				this.inscope_InvestigationVerifyForm=res.data
				this.inscope_talkForm=res.data
				this.inscope_applyLetterForm=res.data
				this.inscope_registerInvestigateForm=res.data
				this.inscope_sideUnderstandForm=res.data
				this.outscope_preliminaryVerificationForm=res.data
				this.outscope_InvestigationVerifyForm=res.data
				this.outscope_talkForm=res.data
				this.outscope_applyLetterForm=res.data
				this.outscope_registerInvestigateForm=res.data
				this.outscope_ReadingForm=res.data
				this.noscope_receivingFeedbackForm=res.data
				this.tableNumCount();
         	})
		},
	}
})
export default class dispose extends Vue {
	 @Action GetHandlingList: any;
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
@import '~@/styles/queryList.scss';
@import '~@/styles/dialogBox.scss';

.block {
	.el-button {
		margin: 0px 7px 0px 7px;
	}
}
//修改badge标记样式
/deep/.el-badge__content {
	border-radius: 100%;
	height: 20px;
	width: 20px;
	padding: 0 2px;
	line-height: 18px;
}

//调整列表菜单栏上标记的位置
.margin-top {
	/deep/.el-badge__content.is-fixed {
		transform: translateY(-0%) translateX(100%);
	}
}

.modal-body {
	/deep/.el-form-item__label {
		padding: 0px 10px 0px 0px;
	}
}

//底部固定的按钮样式
.body-footer {
	.el-button {
		margin: 0px 8px 0px 8px;
	}
}

.rotate-box img {
	padding-top: 15px;
}

.img-div {
	width: 65px;
}

.row-box {
	margin: 30px 0 45px 20%;
}

.icon-inscope {
	background: url(../../../../public/img/bj.png) no-repeat;
	background-size: 100%;
}

.icon-inscope-sed {
	background: url(../../../../public/img/bj1.png) no-repeat;
	background-size: 100%;
}

.icon-outscope {
	background: url(../../../../public/img/zxj.png) no-repeat;
	background-size: 100%;
}

.icon-outscope-sed {
	background: url(../../../../public/img/zxj1.png) no-repeat;
	background-size: 100%;
}

.icon-noscope {
	background: url(../../../../public/img/zqt.png) no-repeat;
	background-size: 100%;
}

.icon-noscope-sed {
	background: url(../../../../public/img/zqt1.png) no-repeat;
	background-size: 100%;
}

.icon-box {
	width: 114px;
	height: 90px;
	margin-top: 40px;
	background-repeat: no-repeat;
	cursor: pointer;
}

.font-info {
	width: 95px;
	color: #fff;
	padding-top: 10px;
	margin-left: -15px;
}

.el-aside {
	text-align: center;
	line-height: 100%;
	background: #f5f5f5;
}

.el-main {
	text-align: center;
	line-height: 100%;
	background: whitesmoke;
	padding: 10px 5px 5px 5px;
}

.mc-dialog-medium {
	.title {
		font-weight: bold;
		border-bottom: 1px solid #dcdfe6;
		height: 45px;
		line-height: 45px;
		text-align: left;
		padding: 0;
		// padding: 0px 20px;
		font-size: 17px;
		color: #3479da;
	}
	//调整dialog弹窗高度
	/deep/.el-dialog__body {
		max-height: 450px;
	}	
}
</style>
