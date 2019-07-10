<template>
	<div class="query-box">
		<div class="el-main bg-layout">
			<div class="block search-Item">
				<el-collapse v-model="activeNames">
					<el-collapse-item name="1">
						<el-row slot="title" class="title">检索查询</el-row>
						<el-form :inline="true" :model="keyWords" ref="keyWords" class="form-label-right-query">
							<el-row>
								<el-col :span="6">
									<el-form-item label="姓名:" prop="personnelName">
										<el-input v-model="keyWords.personnelName" placeholder="姓名"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="线索来源:" prop="leadSource">
										<el-select v-model="keyWords.leadSource" placeholder="请选择">
											<el-option v-for="item in leadSourceOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="11">
									<el-form-item label="受理时间:" prop="acceptedDate">
										<el-date-picker class="date_picker" v-model="keyWords.acceptedDate" type="daterange" range-separator="至"
										 start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row>
								<el-form-item>
									<el-button type="primary" size="mini" icon="el-icon-search">
										查询
									</el-button>
									<el-button class="searchBtn" icon="el-icon-refresh" size="mini">
										重置
									</el-button>
								</el-form-item>
							</el-row>
						</el-form>
					</el-collapse-item>
				</el-collapse>
			</div>
			<!-- 检索结果 -->
			<div class="block search-result">
				<el-row class="title" slot="title">
					检索结果
					<el-button type="primary" @click="batchInputInfo()" size="small" style="position:fixed;right:70px">
						批量录入来文信息
					</el-button>
				</el-row>
				<div class="table">
					<el-table :data="
								tableData.slice(
									(currentPage - 1) * pagesize,
									currentPage * pagesize
								)
							"
					 border :row-class-name="'table-header-bg1'" :header-cell-class-name="'table-header-bg'" :cell-class-name="'tableContent-bg'"
					 @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="40"></el-table-column>
						<el-table-column type="index" label="序号" align="center" width="60px"></el-table-column>
						<el-table-column prop="leadName" show-overflow-tooltip label="线索名称" min-width="15%" align="center"></el-table-column>
						<el-table-column prop="name" label="姓名" align="center" min-width="10%"></el-table-column>
						<el-table-column prop="departmentLv" show-overflow-tooltip label="部职别(工作单位)" min-width="15%" align="center"></el-table-column>
						<el-table-column prop="subjectionOrg" show-overflow-tooltip label="现隶属单位" min-width="15%" align="center"></el-table-column>
						<el-table-column prop="acceptedDate" label="受理时间" min-width="15%" align="center"></el-table-column>
						<el-table-column prop="leadSource" show-overflow-tooltip label="线索来源名称" min-width="15%" align="center"></el-table-column>
						<el-table-column prop="leadState" show-overflow-tooltip label="当前状态" min-width="15%" align="center"></el-table-column>
						<el-table-column prop="right" label="操作区" align="center" width="200px">
							<template slot-scope="scope">
								<el-button type="text" size="small" @click="editLead(scope.row)">
									<i class="el-icon-edit"></i>
									修改
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
						<div class="page-positton-scoped">
							<el-pagination :page-sizes="[2, 4, 6, 8, 10]" :current-page="currentPage" :page-size="pagesize" :pager-count="5"
							 small background layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
							</el-pagination>
						</div>
					</el-row>
				</div>
			</div>
			<div class="block-scope">
				<div class="backplane">
					<div class="backplane-footer-center">
						<el-button @click="closeDig()">
							返回
						</el-button>
					</div>
				</div>
			</div>
		</div>

		<el-dialog class="mc-dialog-medium" center top="8%" width="68.81%" title="批量录入来文信息" :visible.sync="comeFileDialog"
		 append-to-body>
			<come-File-Info ref="comeFileRef"></come-File-Info>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" size="small" @click="getBatComFile()">保存</el-button>
				<el-button size="small" @click="dialogFileClose()">返回</el-button>
			</div>
		</el-dialog>

		<!-- dialog弹框 -->
		<el-dialog class="mc-dialog-big" v-if="dialogDisEnd" width="100%" top="0" title="处置信息修改" lock-scroll :modal="false"
		 :visible.sync="dialogDisEnd" :close-on-click-modal="false">
			<lead-register ref="leadRegEditRef" :leadDisEndList="leadTabList" :dialogDisEnd="dialogDisEnd"></lead-register>
		</el-dialog>
		<!-- dialog弹框 -->
		<el-dialog class="mc-dialog-big" v-if="dialogDisLook" width="100%" top="0" title="线索信息查看" lock-scroll :modal="false"
		 :visible.sync="dialogDisLook" :close-on-click-modal="false" @closed="dialogClose()">
			<leadInfoLook ref="leadInfoLook" :dialogDisLookFlag="dialogDisLook"></leadInfoLook>
		</el-dialog>

	</div>


</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from "vuex-class";
import leadRegister from './leadRegister.vue';
import leadInfoLook from '../../modal/leadInfoLook.vue';
import comeFileInfo from './comeFileInfo.vue';
@Component({
	components: {
		leadRegister,
		comeFileInfo,
		leadInfoLook
	},
	data() {
		return {
			activeNames: '1',
			currentPage: 1,
			pagesize: 2,
			dialogDisEnd: false,
			comeFileDialog: false,
			dialogDisLook: false,
			tableData: [
				{
						id: '1', //序号
						leadNum: '2019XSSC', //线索编号
						leadName: 'SJFD', //线索名称
						name: '张某某', //姓名
						subjectionOrg: 'A师DF团', //现隶属单位
						departmentLv: '部职别1', //部职别
						acceptedDate: '2019-03-08', //受理时间
						leadSource: '审查调查...', //线索来源
						leadState: '线索分发' //线索状态
					},
					{
						id: '2', //序号
						leadNum: '2019XSSX', //线索编号
						leadName: 'LKJL', //线索名称
						name: '刘某某', //姓名
						subjectionOrg: 'TL师XX团', //现隶属单位
						departmentLv: '部职别2', //部职别
						acceptedDate: '2019-03-08', //受理时间
						leadSource: '审查调查...', //线索来源
						leadState: '初核报告' //线索状态
					}
			],
			keyWords: {
				leadNum: '',
				personnelName: '',
				acceptedDate: { startDate: '', endDate: '' },
				leadSource: ''
			},
			leadSourceOptions: [],//线索来源下拉选
			formLabelWidth: '20%',
			leadTabList: {},
			tabRow: [],
			isTabSelect: false
		};
	},
	computed:{
	},
	created() {},
	mounted() {
		this.getLeadSourceOptions();
	},
	methods: {
		//判断tab是选定
		handleSelectionChange(val) {
			if (val.length > 0) {
				this.$data.isTabSelect = true;
			} else {
				this.$data.isTabSelect = false;
			}
		},
        //获取tab数据,打开修改页面
		editLead(row) {
			let that =this
			this.leadTabList = row;
			this.dialogDisEnd = true;
			//执行子页面回显方法
			setTimeout(function(){
				that.$refs.leadRegDialogRef.editLead()
			},2)
		},
		handleSizeChange(size) {
			this.pagesize = size;
		},
		handleCurrentChange(currentPage) {
			this.currentPage = currentPage;
		},
		batchInputInfo() {
			if (this.isTabSelect) {
				this.comeFileDialog = true;
			} else {
				this.$message('请选择一条数据');
			}
		},
		//dialog关闭时初始化处置信息中的数据
		dialogClose() {
			this.$refs.leadRegDialog.clearForm();
		},
		//清空批量来文数据
		dialogFileClose() {
			this.$refs.comeFileRef.clearList();
			this.comeFileDialog = false;
		},
		//打印批量来文数据
		getBatComFile() {
			this.$refs.comeFileRef.getFileList();
		},
			//关闭页面
		closeDig(){
			this.$parent.$parent.dialogFormVisible3=false;
		},
	},
	props: []
})
export default class leadDisEnd extends Vue {
	@Action GetLeadSourceOptions: any;
	
	getLeadSourceOptions():void{
		this.GetLeadSourceOptions().then(res => {
			this.leadSourceOptions = res.data.leadSourceOptions;
		});
	}
}
</script>

<style lang="scss" type="text/scss" scoped>
	@import '~@/styles/queryList.scss';
	@import "~@/styles/dialogBox.scss";

	

	.block-scope{
		.backplane{
			height: 0%;
		}
	}
	
	//覆盖公共样式,个性化分页
	.page-positton-scoped{
	    /deep/.el-pagination{
	        margin: 10px 16px 20px 16px;
	    }
	   height: 50px;
	   z-index: 777;
	   text-align: right;
	   position: fixed;
	   bottom: 0;
	   right: 45%;
	   width: 0%;
	}
	
</style>
