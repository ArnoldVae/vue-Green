<template>
	<div class="el-main bg-layout">
		<!-- 查询条件 -->
		<div class="block">
			<el-row class="title">调阅查询</el-row>
			<el-form
				:inline="true"
				:model="keyWords"
				ref="keyWords"
				class="demo-form-inline search"
			>
				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item label="案件标题:" prop="caseTitle">
							<el-input
								v-model="keyWords.caseTitle"
								placeholder="案件名称"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="被调查人:" prop="respondentName">
							<el-input
								v-model="keyWords.respondentName"
								placeholder="被调查人"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="4">
						<el-form-item>
							<el-button
								type="primary"
								@click="selectSubmit"
								icon="el-icon-search"
								size="small"
							>
								搜索
							</el-button>
							<el-button @click="resetForm('keyWords')" size="small">重置</el-button>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</div>

		<!-- 查询结果 -->
		<div class="block margin-top">
			<el-row class="title" type="flex" style="color:#2479e0">调阅列表</el-row>
			<div class="table">
				<el-table
					:data="tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
					border
					:height="200"
					:row-class-name="'table-header-bg1'"
					:header-cell-class-name="'table-header-bg'"
					:cell-class-name="'tableContent-bg'"
				>
					<!-- <el-table-column type="selection" width="40"></el-table-column> -->
					<el-table-column type="index" label="序号" width="60px"></el-table-column>
					<el-table-column
						prop="fileName"
						label="案件名称"
						align="center"
					></el-table-column>
					<el-table-column
						prop="fileNum"
						label="档号"
						align="center"
					></el-table-column>
					<el-table-column
						prop="borrower"
						label="借阅人"
						align="center"
					></el-table-column>
					<el-table-column prop="borrowDate" label="借阅时间" align="center"></el-table-column>
					<el-table-column
						prop="borrowPeriod"
						label="借阅期限"
						align="center"
					></el-table-column>
					<el-table-column
						prop="registrant"
						label="登记人"
						align="center"
					></el-table-column>
					<el-table-column
						prop="borrowStatus"
						label="借阅状态"
						align="center"
					></el-table-column>
					<el-table-column prop="right" label="操作" align="center" width="120">
						<template slot-scope="scope">
							<el-button type="text" size="small" @click="dialogFormVisible = true">
								详情
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
							:page-sizes="[2, 4, 6, 8, 10]"
							:current-page="currentPage"
							:page-size="pagesize"
							small
							background
							layout="total, sizes, prev, pager, next, jumper"
							:total="tableData.length"
						></el-pagination>
					</div>
				</el-row>
			</div>
		</div>

		<!-- dialog弹框 -->
		<el-dialog
			class="mc-dialog-medium"
			title="调阅归还"
			lock-scroll
			:visible.sync="dialogFormVisible"
			width="60%"
			:close-on-click-modal="false"
			center
		>
			<fileForDetails ref="fileForDetails"></fileForDetails>
			<!-- 归还按钮 -->
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="returnForm()">归 还</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Store from './store';
import fileForDetails from './modal/fileForDetails.vue';
@Component({
	components: {
		fileForDetails
	},
	data() {
		return {
			currentPage: 1,
			pagesize: 2,
			dialogFormVisible: false,
			tableData: [
				{
					id: '1', //序号
					fileName: '程某某违纪案件', //案件名称
					fileNum: '2016060812345', //档号
					borrower: '李某某', //借阅人
					borrowDate: '2018-05-17', //借阅时间
					borrowPeriod: '2018-05-17 至 2018-05-27', //借阅期限
					registrant: '黄某某', //登记人
					borrowStatus: '借阅中' //借阅状态
				},
				{
					id: '2', //序号
					fileName: '张某某违纪案件', //案件名称
					fileNum: '2017060954321', //档号
					borrower: '牛某某', //借阅人
					borrowDate: '2018-10-21', //借阅时间
					borrowPeriod: '2018-10-21 至 2018-10-23', //借阅期限
					registrant: '孔某某', //登记人
					borrowStatus: '已归还' //借阅状态
				},
				{
					id: '3', //序号
					fileName: '刘某某违纪案件', //案件名称
					fileNum: '2015081934534', //档号
					borrower: '范某某', //借阅人
					borrowDate: '2018-05-27', //借阅时间
					borrowPeriod: '2018-05-27 至 2018-05-13', //借阅期限
					registrant: '赵某某', //登记人
					borrowStatus: '已超期' //借阅状态
				},
				{
					id: '4', //序号
					fileName: '蔡某某违纪案件', //案件名称
					fileNum: '2013040284567', //档号
					borrower: '梁某某', //借阅人
					borrowDate: '2019-03-06', //借阅时间
					borrowPeriod: '2019-03-06 至 2019-03-07', //借阅期限
					registrant: '贾某某', //登记人
					borrowStatus: '借阅中' //借阅状态
				},
				{
					id: '5', //序号
					fileName: '牛某某违纪案件', //案件名称
					fileNum: '2013040284567', //档号
					borrower: '李某某', //借阅人
					borrowDate: '2018-05-17', //借阅时间
					borrowPeriod: '2018-05-17 至 2018-05-27', //借阅期限
					registrant: '王某某', //登记人
					borrowStatus: '借阅中' //借阅状态
				},
				{
					id: '6', //序号
					fileName: '高某某违纪案件', //案件名称
					fileNum: '2012301242245', //档号
					borrower: '赵某某', //借阅人
					borrowDate: '2018-05-17', //借阅时间
					borrowPeriod: '2018-05-17 至 2018-05-27', //借阅期限
					registrant: '孙某某', //登记人
					borrowStatus: '已归还' //借阅状态
				},
				
			],
			keyWords: {
				caseTitle: '',
				respondentName: ''
			},
			formLabelWidth: '20%'
		};
	},
	created() {},
	mounted() {
		console.log(Store);
		console.log('信访子系统首页');
	},
	methods: {
		handleSizeChange(size) {
			this.pagesize = size;
		},
		handleCurrentChange(currentPage) {
			this.currentPage = currentPage;
		}
	}
})
export default class archiveRead extends Vue {
	$refs: {
		audio: HTMLAudioElement;
		lyricsLines: HTMLDivElement;
	};
	resetForm(formName) {
		this.$refs[formName].resetFields();
	}
	selectSubmit() {
		console.log(JSON.stringify(this.keyWords));
	}
	returnForm() {
		console.log(JSON.stringify(this.$refs.fileForDetails.formInline));
		this.dialogFormVisible = false;
	}
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
@import '~@/styles/queryList.scss';
</style>
