<template>
<!-- 通报反馈主界面-->
  <div class="query-box">
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
                    <el-badge :value="currentLevelNum" class="not-disposal-tab">
                      <div class="img-div">
                        <img src="../../../../public/img/bjc.png">
                      </div>
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
                    <el-badge :value="subordinateNum" class="not-disposal-tab">
                      <div class="img-div">
                        <img src="../../../../public/img/zxjc.png">
                      </div>
                      <div class="font-info">转下级调查</div>
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
                        <el-row slot="title" class="title">检索查询 </el-row>
                        <el-form
                          :inline="true"
                          :model="keyWords"
                          ref="keyWords"
                          class="form-label-right-query"
                        >
                          <el-row>
                            <el-col :span="7">
                              <el-form-item label="线索名称:" prop="leadName">
                                <el-input
                                  v-model="keyWords.leadName"
                                  placeholder="线索名称"
                                  style="width:200px"
                                ></el-input>
                              </el-form-item>
                            </el-col>
                            <el-col :span="7">
                              <el-form-item label="姓名:" prop="personnelName">
                                <el-input
                                  v-model="keyWords.personnelName"
                                  placeholder="姓名"
                                  style="width:200px"
                                ></el-input>
                              </el-form-item>
                            </el-col>
                            <el-col :span="10" :pull="2">
                              <el-form-item>
                                <el-button
                                  type="primary"
                                  @click="selectSubmit"
                                  icon="el-icon-search"
                                  size="mini"
                                >查询</el-button>
                                <el-button
                                  @click="resetForm('keyWords')"
                                  size="mini"
                                  icon="el-icon-refresh"
                                >重置</el-button>
                              </el-form-item>
                            </el-col>
                          </el-row>
                        </el-form>
                      </el-collapse-item>
                    </el-collapse>
                  </div>
                  <!-- =========================================下半部分========================================================================= -->
                  <!-- =========================================本级直查检索结果========================================= -->
                  <div class="block margin-top" v-show="inscopeFlag == true">
                    <el-row class="title">检索结果</el-row>
                    <!-- 菜单栏切换样式 -->
                    <el-menu
                      :default-active="activeIndex"
                      class="el-menu-demo"
                      mode="horizontal"
                      @select="handleSelect"
                    >
                      <el-menu-item index="1">
                        <el-badge
                          :value="preliminaryVerificationForm.length"
                          class="not-disposal-tab"
                        >
                          <div class="meau-item">初步核实</div>
                        </el-badge>
                      </el-menu-item>
                      <el-menu-item index="2">
                        <el-badge :value="investigationVerifyForm.length" class="has-disposal-tab">
                          <div class="meau-item">调查核实</div>
                        </el-badge>
                      </el-menu-item>
                      <el-menu-item index="3">
                        <el-badge :value="talkForm.length" class="not-disposal-tab">
                          <div class="meau-item">谈话</div>
                        </el-badge>
                      </el-menu-item>
                      <el-menu-item index="4">
                        <el-badge :value="applyLetter.length" class="has-disposal-tab">
                          <div class="meau-item">函询</div>
                        </el-badge>
                      </el-menu-item>
                      <el-menu-item index="5">
                        <el-badge :value="registerInvestigateForm.length" class="not-disposal-tab">
                          <div class="meau-item">立案调查</div>
                        </el-badge>
                      </el-menu-item>
                      <el-menu-item index="6">
                        <el-badge :value="sideUnderstandForm.length" class="has-disposal-tab">
                          <div class="meau-item">侧面了解</div>
                        </el-badge>
                      </el-menu-item>
                    </el-menu>
                    <div class="table">
                      <!-- 初步核实表格开始 -->
                      <div class="not-disposal-tab" v-show="isChecked == 1">
                        <el-table
                          :data="
										preliminaryVerificationForm.slice(
											(currentPage - 1) * pagesize,
											currentPage * pagesize
										)
									"
                          border
                          :row-class-name="'table-header-bg1'"
                          :header-cell-class-name="'table-header-bg'"
                          :cell-class-name="'tableContent-bg'"
                        >
													
                         

                          <el-table-column
                            type="index"
                            label="序号"
                            width="60px"
                            align="center"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="leadName"
                            label="线索名称"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="name"
                            label="姓名"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="position"
                            label="部职别(工作单位)"
                            align="center"
                            min-width="15%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="acceptedDate"
                            label="受理时间"
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
                          <el-table-column fixed="right" label="操作区" align="center" min-width="20%">
                            <template slot-scope="scope">
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogFormVisible.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                移交信息
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisposeForm.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                通报处理
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogProcessFeedback.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                处理反馈
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisLook = true"
                                style="padding: 0px;"
                              >
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
                              :total="preliminaryVerificationForm.length"
                            ></el-pagination>
                          </div>
                        </el-row>
                      </div>
                      <!-- 初步核实表格结束 -->

                      <!-- 调查核实表格开始 -->
                      <div class="not-disposal-tab" v-show="isChecked == 2">
                        <el-table
                          :data="
										investigationVerifyForm.slice(
											(currentPage - 1) * pagesize,
											currentPage * pagesize
										)
									"
                          border
                          :row-class-name="'table-header-bg1'"
                          :header-cell-class-name="'table-header-bg'"
                          :cell-class-name="'tableContent-bg'"
                        >
                          
                         

                          <el-table-column
                            type="index"
                            label="序号"
                            width="60px"
                            align="center"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="leadName"
                            label="线索名称"
                            align="center"
                            min-width="10%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="name"
                            label="姓名"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="position"
                            label="部职别(工作单位)"
                            align="center"
                            min-width="15%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="acceptedDate"
                            label="受理时间"
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
                          <el-table-column fixed="right" label="操作区" align="center" min-width="20%">
                            <template slot-scope="scope">
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogFormVisible.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                移交信息
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisposeForm.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                通报处理
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogProcessFeedback.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                处理反馈
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisLook = true"
                                style="padding: 0px;"
                              >
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
                              :total="investigationVerifyForm.length"
                            ></el-pagination>
                          </div>
                        </el-row>
                      </div>
                      <!-- 调查核实表格结束 -->

                      <!-- 谈话表格开始 -->
                      <div class="not-disposal-tab" v-show="isChecked == 3">
                        <el-table
                          :data="
										talkForm.slice(
											(currentPage - 1) * pagesize,
											currentPage * pagesize
										)
									"
                          border
                          :row-class-name="'table-header-bg1'"
                          :header-cell-class-name="'table-header-bg'"
                          :cell-class-name="'tableContent-bg'"
                        >
                          
                          

                          <el-table-column
                            type="index"
                            label="序号"
                            width="60px"
                            align="center"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="leadName"
                            label="线索名称"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="name"
                            label="姓名"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="position"
                            label="部职别(工作单位)"
                            align="center"
                            min-width="15%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="acceptedDate"
                            label="受理时间"
                            align="center"
                            min-width="10%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>

                          <el-table-column fixed="right" label="操作区" align="center" min-width="20%">
                            <template slot-scope="scope">
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogFormVisible.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                移交信息
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisposeForm.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                通报处理
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogProcessFeedback.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                处理反馈
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisLook = true"
                                style="padding: 0px;"
                              >
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
                              :total="talkForm.length"
                            ></el-pagination>
                          </div>
                        </el-row>
                      </div>
                      <!-- 谈话表格结束 -->

                      <!-- 函询表格开始 -->
                      <div class="not-disposal-tab" v-show="isChecked == 4">
                        <el-table
                          :data="
										applyLetter.slice(
											(currentPage - 1) * pagesize,
											currentPage * pagesize
										)
									"
                          border
                          :row-class-name="'table-header-bg1'"
                          :header-cell-class-name="'table-header-bg'"
                          :cell-class-name="'tableContent-bg'"
                        >
                          

                          <el-table-column
                            type="index"
                            label="序号"
                            width="60px"
                            align="center"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="leadName"
                            label="线索名称"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="name"
                            label="姓名"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="position"
                            label="部职别(工作单位)"
                            align="center"
                            min-width="15%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="acceptedDate"
                            label="受理时间"
                            align="center"
                            min-width="10%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>

                          <el-table-column fixed="right" label="操作区" align="center" min-width="20%">
                            <template slot-scope="scope">
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogFormVisible.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                移交信息
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisposeForm.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                通报处理
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogProcessFeedback.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                处理反馈
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisLook = true"
                                style="padding: 0px;"
                              >
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
                              :total="applyLetter.length"
                            ></el-pagination>
                          </div>
                        </el-row>
                      </div>
                      <!-- 函询表格结束 -->

                      <!-- 立案调查表格开始 -->
                      <div class="not-disposal-tab" v-show="isChecked == 5">
                        <el-table
                          :data="
										registerInvestigateForm.slice(
											(currentPage - 1) * pagesize,
											currentPage * pagesize
										)
									"
                          border
                          :row-class-name="'table-header-bg1'"
                          :header-cell-class-name="'table-header-bg'"
                          :cell-class-name="'tableContent-bg'"
                        >
                          <el-table-column
                            type="index"
                            label="序号"
                            width="60px"
                            align="center"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="leadName"
                            label="线索名称"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="name"
                            label="姓名"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="position"
                            label="部职别(工作单位)"
                            align="center"
                            min-width="15%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="acceptedDate"
                            label="受理时间"
                            align="center"
                            min-width="10%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>

                          <el-table-column fixed="right" label="操作区" align="center" min-width="20%">
                            <template slot-scope="scope">
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogFormVisible.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                移交信息
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisposeForm.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                通报处理
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogProcessFeedback.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                处理反馈
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisLook = true"
                                style="padding: 0px;"
                              >
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
                              :total="registerInvestigateForm.length"
                            ></el-pagination>
                          </div>
                        </el-row>
                      </div>
                      <!-- 立案调查表格结束 -->

                      <!-- 侧面了解表格开始 -->
                      <div class="not-disposal-tab" v-show="isChecked == 6">
                        <el-table
                          :data="
										sideUnderstandForm.slice(
											(currentPage - 1) * pagesize,
											currentPage * pagesize
										)
									"
                          border
                          :row-class-name="'table-header-bg1'"
                          :header-cell-class-name="'table-header-bg'"
                          :cell-class-name="'tableContent-bg'"
                        >
                          <el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>

                          <el-table-column
                            type="index"
                            label="序号"
                            width="60px"
                            align="center"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="leadName"
                            label="线索名称"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="name"
                            label="姓名"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="position"
                            label="部职别(工作单位)"
                            align="center"
                            min-width="15%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="acceptedDate"
                            label="受理时间"
                            align="center"
                            min-width="10%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>

                          
                            <el-table-column fixed="right" label="操作区" align="center" min-width="20%">
                            <template slot-scope="scope">
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogFormVisible.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                移交信息
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisposeForm.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                通报处理
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogProcessFeedback.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                处理反馈
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisLook = true"
                                style="padding: 0px;"
                              >
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
                              :total="sideUnderstandForm.length"
                            ></el-pagination>
                          </div>
                        </el-row>
                      </div>
                      <!-- 侧面了解表格结束 -->
                    </div>
                  </div>
                  <!-- =========================================转下级调查检索列表========================================= -->
                  <div class="block margin-top" v-show="outscopeFlag == true">
                    <el-row class="title">检索列表</el-row>
                    <!-- 菜单栏切换样式 -->
                    <el-menu
                      :default-active="activeIndex"
                      class="el-menu-demo"
                      mode="horizontal"
                      @select="handleSelect"
                    >
                      <el-menu-item index="1">
                        <el-badge
                          :value="preliminaryVerificationForm.length"
                          class="not-disposal-tab"
                        >
                          <div class="meau-item">初步核实</div>
                        </el-badge>
                      </el-menu-item>
                      <el-menu-item index="2">
                        <el-badge :value="investigationVerifyForm.length" class="has-disposal-tab">
                          <div class="meau-item">调查核实</div>
                        </el-badge>
                      </el-menu-item>
                      <el-menu-item index="3">
                        <el-badge :value="talkForm.length" class="not-disposal-tab">
                          <div class="meau-item">谈话</div>
                        </el-badge>
                      </el-menu-item>
                      <el-menu-item index="4">
                        <el-badge :value="applyLetter.length" class="has-disposal-tab">
                          <div class="meau-item">函询</div>
                        </el-badge>
                      </el-menu-item>
                      <el-menu-item index="5">
                        <el-badge :value="registerInvestigateForm.length" class="not-disposal-tab">
                          <div class="meau-item">立案调查</div>
                        </el-badge>
                      </el-menu-item>
                      <el-menu-item index="7">
                        <el-badge :value="readingForm.length" class="has-disposal-tab">
                          <div class="meau-item">阅处</div>
                        </el-badge>
                      </el-menu-item>
                    </el-menu>
                    <div class="table">
                      <!-- 初步核实表格开始 -->
                      <div class="not-disposal-tab" v-show="isChecked == 1">
                        <el-table
                          :data="
										preliminaryVerificationForm.slice(
											(currentPage - 1) * pagesize,
											currentPage * pagesize
										)
									"
                          border
                          :row-class-name="'table-header-bg1'"
                          :header-cell-class-name="'table-header-bg'"
                          :cell-class-name="'tableContent-bg'"
                        >
                          <el-table-column
                            type="index"
                            label="序号"
                            width="60px"
                            align="center"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="leadName"
                            label="线索名称"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="name"
                            label="姓名"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="position"
                            label="部职别(工作单位)"
                            align="center"
                            min-width="15%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="acceptedDate"
                            label="受理时间"
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
                          <el-table-column fixed="right" label="操作区" align="center" min-width="20%">
                            <template slot-scope="scope">
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisposeForm.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                通报处理
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogProcessFeedback.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                处理反馈
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisLook = true"
                                style="padding: 0px;"
                              >
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
                              :total="preliminaryVerificationForm.length"
                            ></el-pagination>
                          </div>
                        </el-row>
                      </div>
                      <!-- 初步核实表格结束 -->

                      <!-- 调查核实表格开始 -->
                      <div class="not-disposal-tab" v-show="isChecked == 2">
                        <el-table
                          :data="
										investigationVerifyForm.slice(
											(currentPage - 1) * pagesize,
											currentPage * pagesize
										)
									"
                          border
                          :row-class-name="'table-header-bg1'"
                          :header-cell-class-name="'table-header-bg'"
                          :cell-class-name="'tableContent-bg'"
                        >
                          <el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>

                          <el-table-column
                            type="index"
                            label="序号"
                            width="60px"
                            align="center"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="leadName"
                            label="线索名称"
                            align="center"
                            min-width="10%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="name"
                            label="姓名"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="position"
                            label="部职别(工作单位)"
                            align="center"
                            min-width="15%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="acceptedDate"
                            label="受理时间"
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
                          <el-table-column fixed="right" label="操作区" align="center" min-width="20%">
                            <template slot-scope="scope">
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisposeForm.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                通报处理
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogProcessFeedback.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                处理反馈
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisLook = true"
                                style="padding: 0px;"
                              >
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
                              :total="investigationVerifyForm.length"
                            ></el-pagination>
                          </div>
                        </el-row>
                      </div>
                      <!-- 调查核实表格结束 -->

                      <!-- 谈话表格开始 -->
                      <div class="not-disposal-tab" v-show="isChecked == 3">
                        <el-table
                          :data="
										talkForm.slice(
											(currentPage - 1) * pagesize,
											currentPage * pagesize
										)
									"
                          border
                          :row-class-name="'table-header-bg1'"
                          :header-cell-class-name="'table-header-bg'"
                          :cell-class-name="'tableContent-bg'"
                        >
                          <el-table-column
                            type="index"
                            label="序号"
                            width="60px"
                            align="center"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="leadName"
                            label="线索名称"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="name"
                            label="姓名"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="position"
                            label="部职别(工作单位)"
                            align="center"
                            min-width="15%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="acceptedDate"
                            label="受理时间"
                            align="center"
                            min-width="10%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>

                          <el-table-column fixed="right" label="操作区" align="center" min-width="20%">
                            <template slot-scope="scope">
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisposeForm.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                通报处理
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogProcessFeedback.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                处理反馈
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisLook = true"
                                style="padding: 0px;"
                              >
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
                              :total="talkForm.length"
                            ></el-pagination>
                          </div>
                        </el-row>
                      </div>
                      <!-- 谈话表格结束 -->

                      <!-- 函询表格开始 -->
                      <div class="not-disposal-tab" v-show="isChecked == 4">
                        <el-table
                          :data="
										applyLetter.slice(
											(currentPage - 1) * pagesize,
											currentPage * pagesize
										)
									"
                          border
                          :row-class-name="'table-header-bg1'"
                          :header-cell-class-name="'table-header-bg'"
                          :cell-class-name="'tableContent-bg'"
                        >
                          <el-table-column
                            type="index"
                            label="序号"
                            width="60px"
                            align="center"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="leadName"
                            label="线索名称"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="name"
                            label="姓名"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="position"
                            label="部职别(工作单位)"
                            align="center"
                            min-width="15%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="acceptedDate"
                            label="受理时间"
                            align="center"
                            min-width="10%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>

                          <el-table-column fixed="right" label="操作区" align="center" min-width="20%">
                            <template slot-scope="scope">
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisposeForm.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                通报处理
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogProcessFeedback.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                处理反馈
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisLook = true"
                                style="padding: 0px;"
                              >
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
                              :total="applyLetter.length"
                            ></el-pagination>
                          </div>
                        </el-row>
                      </div>
                      <!-- 函询表格结束 -->

                      <!-- 立案调查表格开始 -->
                      <div class="not-disposal-tab" v-show="isChecked == 5">
                        <el-table
                          :data="
										registerInvestigateForm.slice(
											(currentPage - 1) * pagesize,
											currentPage * pagesize
										)
									"
                          border
                          :row-class-name="'table-header-bg1'"
                          :header-cell-class-name="'table-header-bg'"
                          :cell-class-name="'tableContent-bg'"
                        >
                          <el-table-column
                            type="index"
                            label="序号"
                            width="60px"
                            align="center"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="leadName"
                            label="线索名称"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="name"
                            label="姓名"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="position"
                            label="部职别(工作单位)"
                            align="center"
                            min-width="15%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="acceptedDate"
                            label="受理时间"
                            align="center"
                            min-width="10%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>

                          <el-table-column fixed="right" label="操作区" align="center" min-width="20%">
                            <template slot-scope="scope">
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisposeForm.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                通报处理
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogProcessFeedback.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                处理反馈
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisLook = true"
                                style="padding: 0px;"
                              >
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
                              :total="registerInvestigateForm.length"
                            ></el-pagination>
                          </div>
                        </el-row>
                      </div>
                      <!-- 立案调查表格结束 -->

                      <!-- 阅处表格开始 -->
                      <div class="not-disposal-tab" v-show="isChecked == 7">
                        <el-table
                          :data="
										readingForm.slice(
											(currentPage - 1) * pagesize,
											currentPage * pagesize
										)
									"
                          border
                          :row-class-name="'table-header-bg1'"
                          :header-cell-class-name="'table-header-bg'"
                          :cell-class-name="'tableContent-bg'"
                        >
                          <el-table-column
                            type="index"
                            label="序号"
                            width="60px"
                            align="center"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="leadName"
                            label="线索名称"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="name"
                            label="姓名"
                            align="center"
                            min-width="8%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="position"
                            label="部职别(工作单位)"
                            align="center"
                            min-width="15%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="acceptedDate"
                            label="受理时间"
                            align="center"
                            min-width="10%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column
                            prop="leadSource"
                            label="线索来源"
                            align="center"
                            min-width="10%"
                            :show-overflow-tooltip="true"
                          ></el-table-column>
                          <el-table-column fixed="right" label="操作区" align="center" min-width="20%">
                            <template slot-scope="scope">
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisposeForm.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                通报处理
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogProcessFeedback.state = true"
                                style="padding: 0px;"
                              >
                                <i class="el-icon-edit"></i>
                                处理反馈
                              </el-button>
                              <el-button
                                type="text"
                                size="small"
                                @click="dialogDisLook = true"
                                style="padding: 0px;"
                              >
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
                              :total="readingForm.length"
                            ></el-pagination>
                          </div>
                        </el-row>
                      </div>
                      <!-- 阅处表格结束 -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-container>

    <!-- dialog弹框 -->
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

    <el-dialog
      class="mc-dialog-big"
      title="移交信息"
      meta="{keepAlive: false}"
      :visible.sync="dialogFormVisible.state"
      width="100% "
      top="0"
      id="caseMsg"
    >
      <trun-over-info :data="dialogFormVisible"></trun-over-info>
    </el-dialog>
    <el-dialog
      class="mc-dialog-big"
      title="通报处理"
      meta="{keepAlive: false}"
      :visible.sync="dialogDisposeForm.state"
      width="100% "
      top="0"
      id="informDispose"
    >
      <inform-dispose v-bind:data="dialogDisposeForm"></inform-dispose>
    </el-dialog>
    <el-dialog
      class="mc-dialog-big"
      title="处理反馈"
      meta="{keepAlive: false}"
      :visible.sync="dialogProcessFeedback.state"
      width="100% "
      top="0"
      id="caseMsg"
    >
      <processFeedback :data="dialogProcessFeedback"></processFeedback>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import trunOverInfo from "./modal/trunOverInfo.vue";
import informDispose from "./modal/informDispose.vue";
import processFeedback from "./modal/processFeedback.vue";
import leadInfoLook from "../modal/leadInfoLook.vue";
//引入action
import { State, Action, Getter } from "vuex-class";
@Component({
  components: {
    trunOverInfo,
    informDispose,
    processFeedback,
    leadInfoLook
  },
  computed: {
    currentLevelNum() {
      return (
        this.preliminaryVerificationForm.length +
        this.investigationVerifyForm.length +
        this.talkForm.length +
        this.applyLetter.length +
        this.registerInvestigateForm.length +
        this.sideUnderstandForm.length
      );
    },
    subordinateNum() {
      return (
        this.preliminaryVerificationForm.length +
        this.investigationVerifyForm.length +
        this.talkForm.length +
        this.applyLetter.length +
        this.registerInvestigateForm.length +
        this.readingForm.length
      );
    }
  },
  data() {
    return {
      inscopeFlag: true, //本级直查 切换标识
      outscopeFlag: false, //转下级 切换标识
      isChecked: "1", //判断显示哪个表格的属性
      activeIndex: "1", //折叠框默认打开的属性
      activeNames: ["1"], //折叠框名称
      currentPage: 1, //分页栏初始页面
      pagesize: 5, //分页栏初始每页展示条数
      isSelectCurrentLevelFlag: true, //判断是否是本级直查的标记,默认为true,表示不是
      isSelectTransferNextLevelFlag: true, //判断是否是转下级的标记,默认为true,表示不是
      dialogFormVisible: { state: false }, //移交信息对话框显示
      dialogDisposeForm: { state: false }, //通报处理对话框信息显示
      dialogProcessFeedback: { state: false }, //处理反馈对话框信息显示
      dialogDisLook: false, //线索查看标记

      //检索查询form表单
      keyWords: {
        leadName: "",
        personnelName: ""
      },
      // 初步核实表单
      preliminaryVerificationForm: [],

      //调查核实表单
      investigationVerifyForm: [],

      //谈话表单
      talkForm: [],

      //函询表单
      applyLetter: [],

      //立案调查表单
      registerInvestigateForm: [],

      //侧面了解表单
      sideUnderstandForm: [],

      //阅处表单
      readingForm: []
    };
  },

  created() {},
  mounted() {
    this.getPreliminaryVerificationForm();
    this.getInvestigationVerifyForm();
    this.getTalkForm();
    this.getApplyLetter();
    this.getRegisterInvestigateForm();
    this.getSideUnderstandForm();
    this.getReadingForm();
  },
  methods: {}
})
export default class dispose extends Vue {
  //======================================从mock获取数据开始=================================================
  @Action GetPreliminaryVerificationForm;
  @Action GetInvestigationVerifyForm;
  @Action GetTalkForm;
  @Action GetApplyLetter;
  @Action GetRegisterInvestigateForm;
  @Action GetSideUnderstandForm;
  @Action GetReadingForm;

  //获取初步核实列表
  getPreliminaryVerificationForm() {
    //调用的被声明的方法
    this.GetPreliminaryVerificationForm().then(res => {
      this.preliminaryVerificationForm = res.data.preliminaryVerificationForm;
    });
  }
  //获取调查核实列表
  getInvestigationVerifyForm() {
    //调用的被声明的方法
    this.GetInvestigationVerifyForm().then(res => {
      this.investigationVerifyForm = res.data.investigationVerifyForm;
    });
  }
  //获取谈话列表
  getTalkForm() {
    //调用的被声明的方法
    this.GetTalkForm().then(res => {
      this.talkForm = res.data.talkForm;
    });
  }
  //获取谈话列表
  getApplyLetter() {
    //调用的被声明的方法
    this.GetApplyLetter().then(res => {
      this.applyLetter = res.data.applyLetter;
    });
  }
  //获取立案调查列表
  getRegisterInvestigateForm() {
    //调用的被声明的方法
    this.GetRegisterInvestigateForm().then(res => {
      this.registerInvestigateForm = res.data.registerInvestigateForm;
    });
  }
  //获取侧面了解列表
  getSideUnderstandForm() {
    //调用的被声明的方法
    this.GetSideUnderstandForm().then(res => {
      this.sideUnderstandForm = res.data.sideUnderstandForm;
    });
  }
  //获取阅处列表
  getReadingForm() {
    //调用的被声明的方法
    this.GetReadingForm().then(res => {
      this.readingForm = res.data.readingForm;
    });
  }
  //======================================从mock获取数据结束=================================================

  //分页栏翻页的方法
  handleSizeChange(size) {
    this.pagesize = size;
  }
  handleCurrentChange(currentPage) {
    this.currentPage = currentPage;
  }

  //切换 本级直查\转下级 两个图片的样式方法
  changImg(num) {
    console.log(num);
    if (num == 1) {
      if (this.isSelectCurrentLevelFlag) {
        this.isChecked = 1;
        console.log(this.isChecked);
        this.isSelectCurrentLevelFlag = false;
      }
      this.isSelectTransferNextLevelFlag = true;
      this.inscopeFlag = true;
      this.outscopeFlag = false;
    } else {
      this.isSelectCurrentLevelFlag = true;
    }

    if (num == 2) {
      if (this.isSelectTransferNextLevelFlag) {
        this.isChecked = 1;
        this.isSelectTransferNextLevelFlag = false;
      }
      this.isSelectCurrentLevelFlag = true;
      this.inscopeFlag = false;
      this.outscopeFlag = true;
    } else {
      this.isSelectTransferNextLevelFlag = true;
    }
  }

  //菜单栏切换方法
  handleSelect(key) {
    if (this.inscopeFlag == true) {
      if (key == 1) {
        this.isChecked = 1;
        console.log(this.isChecked);
      } else if (key == 2) {
        this.isChecked = 2;
        console.log(this.isChecked);
      } else if (key == 3) {
        this.isChecked = 3;
        console.log(this.isChecked);
      } else if (key == 4) {
        this.isChecked = 4;
        console.log(this.isChecked);
      } else if (key == 5) {
        this.isChecked = 5;
        console.log(this.isChecked);
      } else if (key == 6) {
        this.isChecked = 6;
        console.log(this.isChecked);
      } else {
        this.isChecked = 1;
      }
    } else if (this.outscopeFlag == true) {
      if (key == 1) {
        this.isChecked = 1;
        console.log(this.isChecked);
      } else if (key == 2) {
        this.isChecked = 2;
        console.log(this.isChecked);
      } else if (key == 3) {
        this.isChecked = 3;
        console.log(this.isChecked);
      } else if (key == 4) {
        this.isChecked = 4;
        console.log(this.isChecked);
      } else if (key == 5) {
        this.isChecked = 5;
        console.log(this.isChecked);
      } else if (key == 7) {
        this.isChecked = 7;
        console.log(this.isChecked);
      } else {
        this.isChecked = 1;
      }
    }
  }

  //重置检索查询的表单
  resetForm(formName) {
    this.$refs[formName].resetFields();
  }
  //检索查询的表单提交方法
  selectSubmit() {
    console.log(JSON.stringify(this.keyWords));
  }
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/queryList.scss";

.block {
  .el-button {
    margin: 0px 7px 0px 7px;
  }
  .table-btn {
    margin: 0px 7px 12px 7px;
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

//tabpan样式
.tabpan-content {
  /deep/ .el-tabs {
    /deep/ .el-tabs__header {
      margin-left: 2%;
    }
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
  background: whitesmoke;
}

//调整列表菜单栏上标记的位置
.margin-top {
  /deep/.el-badge__content.is-fixed {
    transform: translateY(-0%) translateX(100%);
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
</style>
