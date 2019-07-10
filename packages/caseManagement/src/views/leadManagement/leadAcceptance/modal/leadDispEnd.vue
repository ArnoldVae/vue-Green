<template>
	<div class="query-box">
		<div class="el-main bg-layout">
			<div class="block search-Item">
				<!-- 查询条件 -->
				<el-collapse v-model="activeNames">
					<el-collapse-item name="1">
						<el-row class="title" slot="title">检索查询</el-row>
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
			<!-- 查询结果 -->
			<div class="block search-result">
				<el-row class="title" slot="title">
					检索结果</el-row>
				<div class="table">
					<el-table :data="
								tableData.slice(
									(currentPage - 1) * pagesize,
									currentPage * pagesize
								)
							"
					 border :row-class-name="'table-header-bg1'" :header-cell-class-name="'table-header-bg'" :cell-class-name="'tableContent-bg'">
						<el-table-column type="index" label="序号" align="center" width="60px"></el-table-column>
						<el-table-column prop="leadName" show-overflow-tooltip label="线索名称" min-width="15%" align="center"></el-table-column>
						<el-table-column prop="name" label="姓名" align="center" min-width="10%"></el-table-column>
						<el-table-column prop="departmentLv" show-overflow-tooltip label="部职别(工作单位)" min-width="15%" align="center"></el-table-column>
						<el-table-column prop="subjectionOrg" show-overflow-tooltip label="现隶属单位" min-width="15%" align="center"></el-table-column>
						<el-table-column prop="acceptedDate" label="受理时间" min-width="15%" align="center"></el-table-column>
						<el-table-column prop="leadSource" show-overflow-tooltip label="线索来源名称" min-width="15%" align="center"></el-table-column>
						<el-table-column prop="leadState" show-overflow-tooltip label="当前状态" min-width="15%" align="center"></el-table-column>
						<el-table-column label="操作区" align="center" width="150px">
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
						<div class="page-positton-scoped">
							<el-pagination style="text-align: right;" @size-change="handleSizeChange" @current-change="handleCurrentChange"
							 :pager-count="5" :page-sizes="[2, 4, 6, 8, 10]" :current-page="currentPage" :page-size="pagesize" small
							 background layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
							</el-pagination>
						</div>
					</el-row>
				</div>
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
		<!-- dialog弹框 -->
		<el-dialog v-if="dialogDisLook" class="mc-dialog-big" width="100%" top="0" title="线索信息查看" lock-scroll :modal="false"
		 :visible.sync="dialogDisLook" :close-on-click-modal="false" @closed="dialogClose()">
			<leadInfoLook ref="leadInfoLook" :dialogDisLookFlag="dialogDisLook"></leadInfoLook>
		</el-dialog>
	</div>

</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from "vuex-class";
import leadInfoLook from '../../modal/leadInfoLook.vue';
@Component({
	components: {
		leadInfoLook
	},
	data() {
		return {
			dialogDisLook:false,
			activeNames: '1',
			currentPage: 1,
			pagesize: 2,
			tableData: [],
			keyWords: {
				leadNum: '',
				personnelName: '',
				acceptedDate: { startDate: '', endDate: '' },
				leadSource: ''
			},
			leadSourceOptions: [],
			formLabelWidth: '20%',
			leadTabList: {},
			tabRow: []
		};
	},
	created() {},
	mounted() {
		this.getDisEndTableList();
		this.getLeadSourceOptions();
	},
	methods: {
		handleSizeChange(size) {
			this.pagesize = size;
		},
		handleCurrentChange(currentPage) {
			this.currentPage = currentPage;
		},
		//dialog关闭时初始化处置信息中的数据
		dialogClose() {},
		//关闭页面
		closeDig(){
			this.$parent.$parent.dialogFormVisible2=false;
		},
	},
	props: []
})
export default class leadDisposeEnd extends Vue {
	@Action GetDisEndTableList: any;
	@Action GetLeadSourceOptions: any;
	@State $leadDisEndList:any;
	
	getDisEndTableList():void{
		this.GetDisEndTableList().then(res => {
			this.tableData = res.data.tableData;
		});
	}
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
	.block-scope{
		.backplane{
			height: 0%;
		}
	}
	
	.block {
		//按钮间距
		.el-button {
			margin: 0px 7px 0px 7px;
		}
		.table-btn {
			margin: 0px 7px 12px 7px;
		}
	}
 
</style>
