<template>
	<div class="query-box">
		<div class="el-main bg-layout">
			<div class="block search-Item">
				<!-- 查询条件 -->
				<el-collapse v-model="activeNames">
					<el-collapse-item name="1">
						<el-row slot="title" class="title">检索查询</el-row>
						<el-form :inline="true" :model="keyWords" ref="keyWords" class="form-label-right-query">
							<el-row>
								<!-- <el-col :span="6">
									<el-form-item label="线索编号:" prop="clueNo"><el-input v-model="keyWords.clueNo" placeholder="线索编号"></el-input></el-form-item>
								</el-col> -->
								<el-col :span="6">
									<el-form-item label="姓名:" prop="personName">
										<el-input v-model="keyWords.personName" placeholder="姓名"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="线索来源:" prop="clueSourceCode">
										<el-select v-model="keyWords.clueSourceCode" placeholder="请选择">
											<el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="11">
									<el-form-item label="受理时间:" prop="acceptDate">
										<el-date-picker
											v-model="keyWords.acceptDate"
											type="daterange"
											range-separator="至"
											start-placeholder="开始日期"
											end-placeholder="结束日期"
											value-format="yyyy-MM-dd"
										></el-date-picker>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row>
								<el-col>
									<el-form-item>
										<el-button size="mini" type="primary" @click="queryMainList()" icon="el-icon-search">查询</el-button>
										<el-button size="mini" @click="resetForm('keyWords')" icon="el-icon-refresh">重置</el-button>
									</el-form-item>
								</el-col>
							</el-row>
						</el-form>
					</el-collapse-item>
				</el-collapse>
			</div>
			<!-- 检索结果 -->
			<div class="block search-result">
				<el-row class="title">检索结果</el-row>
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">
						<el-badge :value="notDisposalTable.length" class="not-disposal-tab"><div class="meau-item">待处置</div></el-badge>
					</el-menu-item>
					<el-menu-item index="2">
						<el-badge :value="hasDisposalTable.length" class="has-disposal-tab"><div class="meau-item">已处置</div></el-badge>
					</el-menu-item>
				</el-menu>
				
				<div class="table">
					<!-- 未处置表格开始 -->
					<div class="not-disposal-tab" v-show="isChecked == true">
						<el-table
							:data="notDisposalTable.slice((pageIndex - 1) * pageSize, pageIndex * pageSize)"
							border
							:row-class-name="'table-header-bg1'"
							:header-cell-class-name="'table-header-bg'"
							:cell-class-name="'tableContent-bg'"
						>
						
							<el-table-column type="index" label="序号" width="60px" align="center" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column prop="clueName" label="线索名称" align="center" min-width="25%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column prop="personName" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column prop="ministryPositionLevelName" label="部职别(工作单位)" align="center" min-width="20%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column prop="happenUnitName" label="现隶属单位" align="center" min-width="15%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column prop="acceptDate" label="受理时间" align="center" min-width="15%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column prop="clueSourceName" label="线索来源" align="center" min-width="15%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column label="操作区" align="center" width="180px">
								<template slot-scope="scope">
									<el-button type="text" size="small" @click="editDisposeForm(scope.row.clueNo)" style="padding: 0px;">
										<i class="el-icon-edit"></i>
										处置
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
									:current-page="pageIndex"
									:page-size="pageSize"
									small
									background
									layout="total, sizes, prev, pager, next, jumper"
									:total="notDisposalTable.length"
								></el-pagination>
							</div>
						</el-row>
					</div>
					<!-- 未处置表格结束 -->

					<!-- 已处置表格开始 -->
					<div class="not-disposal-tab" v-show="isChecked == false">
						<el-row :gutter="20">
							<el-col :span="16" style="text-align: left;padding-left: 2px;margin-bottom: 10px;">
								<el-button>{{ sameLevelQueryCountShow }}</el-button>
								<el-button>{{ turnJuniorQueryCountShow }}</el-button>
								<el-button>{{ turnRestsUnitCountShow }}</el-button>
							</el-col>
						</el-row>
						<el-table
							:data="hasDisposalTable.slice((pageIndex - 1) * pageSize, pageIndex * pageSize)"
							border
							:row-class-name="'table-header-bg1'"
							:header-cell-class-name="'table-header-bg'"
							:cell-class-name="'tableContent-bg'"
						>
							<el-table-column type="index" label="序号" width="60px" align="center"></el-table-column>
							<el-table-column prop="clueName" label="线索名称" align="center" min-width="20%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column prop="personName" label="姓名" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column prop="ministryPositionLevelName" label="部职别(工作单位)" align="center" min-width="20%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column prop="acceptDate" label="受理时间" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column prop="clueSourceName" label="线索来源" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column prop="dealTypeName" label="办理方式" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column prop="handleTypeName" label="处置方式" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column prop="currentActiveName" label="当前状态" align="center" min-width="10%" :show-overflow-tooltip="true"></el-table-column>
							<el-table-column label="操作区" align="center" width="90px">
								<template slot-scope="scope">
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
									:current-page="pageIndex"
									:page-size="pageSize"
									small
									background
									layout="total, sizes, prev, pager, next, jumper"
									:total="hasDisposalTable.length"
								></el-pagination>
							</div>
						</el-row>
					</div>
					<!-- 已处置表格结束 -->
				</div>
			</div>
		</div>
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

		<!-- dialog弹框 -->
		<el-dialog class="mc-dialog-big" width="100%" top="0" title="处置信息" lock-scroll :visible.sync="dialogFormVisible" :close-on-click-modal="false" v-if="dialogFormVisible">
			<leadDisposeEdit></leadDisposeEdit>
		</el-dialog>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import leadDisposeEdit from '@/views/leadManagement/leadDispose/modal/leadDisposeEdit.vue';
import { State, Action, Getter } from 'vuex-class';
import leadInfoLook from '../modal/leadInfoLook.vue';
@Component({
	components: {
		leadDisposeEdit,
		leadInfoLook
	},
	data() {
		return {
			dialogDisLook: false, //线索查看弹窗标记
			isChecked: true, //判断显示哪个表格的属性
			activeIndex: '1', //折叠框默认打开的属性
			activeNames: ['1'],
			pageIndex: 1,
			pageSize: 5,
			dialogFormVisible: false,//处置弹框标记
			//未处置列表
			notDisposalTable: [],
			//已处置列表
			hasDisposalTable: [],
			keyWords: {
				clueNo: '',
				personName: '',
				acceptDate: '',
				clueSourceCode: ''
			},
			options: [],
			sameLevelQueryCountShow: '', //本级直查数量对象
			turnJuniorQueryCountShow: '', //转下级查询对象
			turnRestsUnitCountShow: '', //转其他单位对象
		};
	},
	created() {},
	mounted() {
		this.queryMainList();
		this.queryCodeByType();
	},
	methods: {
		//菜单栏方法
		handleSelect(key) {
			if (key == 2) {
				this.isChecked = false;
			} else {
				this.isChecked = true;
			}
		},
		//分页栏翻页的方法
		handleSizeChange(size) {
			this.pageSize = size;
		},
		handleCurrentChange(pageIndex) {
			this.pageIndex = pageIndex;
		},
		//重置检索查询的表单
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		//编辑处置表单的方法
		editDisposeForm(clueNo) {
			this.dialogFormVisible = true;
		}
	}
})
export default class leadDispose extends Vue {
	@Action QueryMainList: any;
	@Action QueryCodeByType: any;
	@Action CountByDealType: any;
	@State $hasDisposalList: any;
	@State $disposalInforMation: any;
	
	//获取数据列表
	queryMainList(): void {
		let acceptDateStartTime = '';
		let acceptDateEndTime = ''; 
		let dateTime = this.keyWords.acceptDate;
		for(let i = 0;i<dateTime.length;i++){
			if(i == 0){
				acceptDateStartTime = dateTime[i];
			}else if(i == 1){
				acceptDateEndTime = dateTime[i];
			}
		};
		
		let hasDisposalListParam = {};
		let notDisposalListParam = {};
		let countByDealTypeParam = {};
		
		//封装查询已处置表格数据入参
		hasDisposalListParam.clueNo = this.keyWords.clueNo;
		hasDisposalListParam.personName = this.keyWords.personName;
		hasDisposalListParam.acceptDateStartTime = acceptDateStartTime;
		hasDisposalListParam.acceptDateEndTime = acceptDateEndTime;
		hasDisposalListParam.clueSourceCode = this.keyWords.clueSourceCode;
		hasDisposalListParam.disposalState = 'true';
		hasDisposalListParam.notInActiveNo = '0001';
		//封装查询未处置表格数据入参
		notDisposalListParam.clueNo = this.keyWords.clueNo;
		notDisposalListParam.personName = this.keyWords.personName;
		notDisposalListParam.acceptDateStartTime = acceptDateStartTime;
		notDisposalListParam.acceptDateEndTime = acceptDateEndTime;
		notDisposalListParam.clueSourceCode = this.keyWords.clueSourceCode;
		notDisposalListParam.disposalState = 'false';
		notDisposalListParam.notInActiveNo = '0001';
		notDisposalListParam.atEdit = '0';
		//封装获取线索处置类型总数的入参
		countByDealTypeParam.clueNo = this.keyWords.clueNo;
		countByDealTypeParam.personName = this.keyWords.personName;
		countByDealTypeParam.acceptDateStartTime = acceptDateStartTime;
		countByDealTypeParam.acceptDateEndTime = acceptDateEndTime;
		countByDealTypeParam.clueSourceCode = this.keyWords.clueSourceCode;
		
		var hasDisposalList_params = {
			pageIndex: 1,
			pageSize: 10,
		    params: hasDisposalListParam,
		    auth: {}
		};
		var notDisposalList_params = {
			pageIndex: 1,
			pageSize: 10,
		    params: notDisposalListParam,
		    auth: {}
		};
		var countByDealType_param = {
		    params: countByDealTypeParam,
		    auth: {}
		};
		
		//获取已处置数据列表
		this.QueryMainList(hasDisposalList_params).then(res => {
			this.hasDisposalTable = res.data.hasDisposalList;
		});
		//获取未处置数据列表
		this.QueryMainList(notDisposalList_params).then(res => {
			this.notDisposalTable = res.data.notDisposalList;
			this.pageIndex = res.pageIndex;
			this.pageSize = res.pageSize;
		});
		
		//获取线索处置类型总数countByDealType
		let that = this;
		this.CountByDealType(countByDealType_param).then(res => {
			res.data.result.forEach(e => {
				if(e.dealTypeCode == '01'){
					that.sameLevelQueryCountShow = e.dealTypeName + e.disposalNum + '件';
				}else if(e.dealTypeCode == '02'){
					that.turnJuniorQueryCountShow = e.dealTypeName + e.disposalNum + '件';
				}else if(e.dealTypeCode == '03'){
					that.turnRestsUnitCountShow = e.dealTypeName + e.disposalNum + '件';
				}
			});
		})
	}

	//获取线索来源options下拉选数据
	queryCodeByType(): void {
		var _params = {
		    params: {
				codeTypes: 'XSLY',
				_: 1554867316638
			},
		    auth: {}
		};
		this.QueryCodeByType(_params).then(res => {
			this.options = res.result.XSLY;
		});
	}
}
</script>

<style rel="text/stylesheet" lang="scss" scoped>
@import '~@/styles/queryList.scss';
@import '~@/styles/dialogBox.scss';

.block {
	.el-button {
		margin: 0px 7px 0px 7px;
	}
	.table-btn {
		margin: 0px 7px 12px 7px;
	}
}

//修改badge标记样式
/deep/.el-badge__content {
	border-radius: 100%;
	height: 20px;
	width: 20px;
	padding: 0 2px;
	line-height: 17px;
}

//调整菜单栏上标记的位置
/deep/.el-badge__content.is-fixed {
	transform: translateY(-0%) translateX(100%);
}

</style>
