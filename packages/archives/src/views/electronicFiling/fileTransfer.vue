<template>
	<div class="el-main bg-layout">
		<!-- 弹出表单---档案移交操作 -->
		<el-dialog
			class="mc-dialog-medium"
			title="档案移交"
			:visible.sync="isfileOpFlag"
			width="60%"
			:close-on-click-modal="false"
			center
		>
			<el-form
				:model="ruleForm"
				class="checkDalogForm"
				:inline="true"
				label-position="left"
				label-width="50%"
			>
				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item label="案件标题：" class="caseName">
							<el-input
								v-model="ruleForm.caseName"
								readonly
								class="caseNameInput"
								autocomplete="off"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="年份：">
							<el-input readonly v-model="ruleForm.yea" autocomplete="off"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="结案时间：">
							<el-date-picker
								v-model="ruleForm.endDate"
								type="date"
								style="width:100%"
								readonly
								placeholder="选择日期"
							></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item label="档号：">
							<el-input
								readonly
								v-model="ruleForm.fileId"
								autocomplete="off"
							></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="8">
						<el-form-item label="档案管理人：" class="rightInput">
							<el-input
								readonly
								v-model="ruleForm.managePerson"
								autocomplete="off"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="保管期限：">
							<el-date-picker
								v-model="ruleForm.storageTime"
								type="date"
								style="width:100%"
								readonly
								placeholder="选择日期"
							></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item label="库存位置：">
							<el-input
								readonly
								v-model="ruleForm.putInLocation"
								autocomplete="off"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="入库时间：" class="rightInput">
							<el-date-picker
								v-model="ruleForm.putInTime"
								type="date"
								readonly
								style="width:100%"
								placeholder="选择日期"
							></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item label="接收人：">
							<el-input
								v-model="ruleForm.deliverPerson"
								autocomplete="off"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="接收单位：" class="rightInput">
							<el-input
								v-model="ruleForm.acceptOrganization"
								autocomplete="off"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="接收时间：" class="rightInput">
							<el-date-picker
								v-model="ruleForm.acceptTime"
								type="date"
								style="width:100%"
								placeholder="选择日期"
							></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item label="移交人：">
							<el-input
								v-model="ruleForm.deliverPerson"
								class="rightInput"
								autocomplete="off"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="移交时间：">
							<el-date-picker
								style="width:100%"
								v-model="ruleForm.deliverDate"
								type="date"
								placeholder="选择日期"
							></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-col>
						<el-form-item label="移交信息:" style="width:100%">
							<el-input
								type="textarea"
								style="width:98%"
								:rows="2"
								placeholder="请输入移交信息"
								v-model="ruleForm.deliverInfo"
							></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="isfileOpFlag = false">保 存</el-button>
				<el-button type="primary" @click="isfileOpFlag = false">返 回</el-button>
			</div>
		</el-dialog>

		<!-- 弹出表单---批量移交操作 -->
		<el-dialog
			class="mc-dialog-medium"
			title="档案批量移交"
			:visible.sync="isBatchTransFlag"
			width="60%"
			:close-on-click-modal="false"
			center
		>
			<el-form
				:model="ruleForm"
				class="checkDalogForm"
				:inline="true"
				label-position="left"
				label-width="50%"
			>
				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item label="接收人：">
							<el-input
								v-model="ruleForm.deliverPerson"
								autocomplete="off"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="接收单位：" class="rightInput">
							<el-input
								v-model="ruleForm.acceptOrganization"
								autocomplete="off"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="接收时间：" class="rightInput">
							<el-date-picker
								style="width:100%"
								v-model="ruleForm.acceptTime"
								type="date"
								placeholder="选择日期"
							></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item label="移交人：">
							<el-input
								v-model="ruleForm.deliverPerson"
								class="rightInput"
								autocomplete="off"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="移交时间：" class="caseName">
							<el-date-picker
								style="width:100%"
								v-model="ruleForm.deliverDate"
								type="date"
								placeholder="选择日期"
							></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-form-item label="移交信息:" style="width:100%">
						<el-input
							type="textarea"
							style="width:100%"
							:rows="2"
							placeholder="请输入移交信息"
							v-model="ruleForm.deliverInfo"
						></el-input>
					</el-form-item>
				</el-row>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="isBatchTransFlag = false">保 存</el-button>
				<el-button type="primary" @click="isBatchTransFlag = false">返 回</el-button>
			</div>
		</el-dialog>

		<!-- 查询条件 -->
		<div class="block">
			<el-row class="title">移交查询</el-row>
			<el-form
				:inline="true"
				:model="keyWords"
				ref="keyWords"
				class="demo-form-inline search"
			>
				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item label="案件名称:" prop="caseName">
							<el-input v-model="keyWords.caseName" placeholder="案件名称"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="归档日期:" prop="accusedName">
							<el-date-picker
								v-model="value6"
								style="width:100%;"
								type="daterange"
								range-separator="-"
								start-placeholder="开始日期"
								end-placeholder="结束日期"
							></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="4">
						<el-form-item>
							<el-button
								type="primary"
								size="small"
								@click="search()"
								icon="el-icon-search"
							>
								查询
							</el-button>
							<el-button size="small" @click="resetForm('formInline')">
								重置
							</el-button>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</div>
		<!-- 查询结果 -->
		<div class="block margin-top">
			<el-row class="title">
				移交列表

				<!-- 导出excel标签 -->
				<download-excel
					class="export-excel-wrapper"
					:data="json_data"
					:fields="json_fields"
					style="display: none;visibility:hidden;"
					name="导出案件清单.xls"
					id="excelDownload"
				>
					<!-- 隐藏组件,方法模拟点击触发导出excel -->
				</download-excel>

				<el-button
					style="float: right;margin-top:5px"
					size="small"
					@click="excelDownload()"
					type="primary"
				>
					导出移交清单
				</el-button>

				<el-button
					style="float: right; margin-right: 16px; margin-top:5px"
					@click="isBatchTransFlag = true"
					type="primary"
					size="small"
				>
					批量移交
				</el-button>
			</el-row>
			<div class="table">
				<el-table
					:data="tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
					border
					:height="200"
					:row-class-name="'table-header-bg1'"
					:header-cell-class-name="'table-header-bg'"
					:cell-class-name="'tableContent-bg'"
					@selection-change="handleSelectionChange"
				>
					<el-table-column type="selection" width="50"></el-table-column>
					<el-table-column type="index" label="序号" width="60"></el-table-column>
					<el-table-column
						prop="caseName"
						label="案件名称"
						align="center"
					></el-table-column>
					<el-table-column
						prop="id"
						label="档号"
						align="center"
						show-overflow-tooltip
					></el-table-column>
					<el-table-column prop="date" label="归档日期" align="center"></el-table-column>
					<el-table-column
						prop="acceptPerson"
						label="归档人"
						align="center"
					></el-table-column>
					<el-table-column fixed="right" label="操作" align="center" width="120">
						<template slot-scope="scope">
							<el-button type="text" size="small" @click="isfileOpFlag = true">
								档案移交
							</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-row>
					<div class="block page-positton">
						<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="currentPage"
							:page-sizes="[5, 10, 20, 30]"
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
	</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Store from './store';
// 导入excel内容转换插件
import JsonExcel from 'vue-json-excel';
Vue.component('downloadExcel', JsonExcel);
@Component({
	components: {},
	data() {
		return {
			tableData: [
				{
					id: '00000000000020190010',
					caseName: '自办案件01',
					date: '2019-02-1',
					accusedName: '李某某',
					acceptPerson: '孙某某'
				},
				{
					id: '00000000000020190306',
					caseName: '自办案件02',
					date: '2019-03-16',
					accusedName: '赵某某',
					acceptPerson: '张某某'
				},
				{
					id: '00000000000020190223',
					caseName: '自办案件03',
					date: '2019-02-23',
					acceptPerson: '刘某某'
				},
				{
					id: '00000000000020190010',
					caseName: '自办案件04',
					date: '2019-02-25',
					accusedName: '李某某',
					acceptPerson: '王某某'
				},
				{
					id: '00000000000020190122',
					caseName: '自办案件05',
					date: '2019-03-22',
					accusedName: '吴某某',
					acceptPerson: '王某某'
				},
				{
					id: '00000000000020190122',
					caseName: '自办案件06',
					date: '2019-03-22',
					accusedName: '吴某某',
					acceptPerson: '王某某'
				},
				{
					id: '00000000000020190122',
					caseName: '自办案件07',
					date: '2019-03-22',
					accusedName: '吴某某',
					acceptPerson: '王某某'
				},
				{
					id: '00000000000020190122',
					caseName: '自办案件08',
					date: '2019-03-22',
					accusedName: '吴某某',
					acceptPerson: '王某某'
				}
			],
			keyWords: {
				caseName: '',
				accusedName: ''
			},
			isfileOpFlag: false,
			isBatchTransFlag: false,
			isTabSelect: false,
			isExportExcelFlag: false,
			ruleForm: {
				caseName: '关于某某案件审核',
				yea: '2019',
				endDate: '2019-3-2',
				storageTime: '2019-3-1',
				fileId: 'axsaf154311',
				managePerson: '张某某',
				putInTime: '2019-2-1',

				putInLocation: '某某机关',
				deliverPerson: '',
				deliverDate: '',
				deliverInfo: '',
				acceptPerson: '',
				acceptTime: '',
				acceptOrganization: ''
			},
			currentPage: 1,
			pagesize: 5,
			//导出excel json数据
			json_fields: {
				案件名称: 'name',
				档号: 'fileId',
				年份: 'yea',
				结案时间: 'endTime',
				库存位置: 'putLocaltion',
				入库时间: 'putinTime'
			},
			json_data: [
				{
					name: '测试自办案件01',
					fileId: '00000000000020190010',
					yea: '2019',
					endTime: '2019/3/2',
					putLocaltion: '某某机关',
					putinTime: '2019/2/1'
				}
			],
			json_meta: [
				[
					{
						' key ': ' charset ',
						' value ': ' utf- 8 '
					}
				]
			]
		};
	},
	created() {},
	mounted() {
		console.log(Store);
		console.log('档案移交');
	},
	methods: {
		//判断tab是否选定
		handleSelectionChange(val) {
			console.log(val);
			if (val.length > 0) {
				this.$data.isTabSelect = true;
			} else {
				this.$data.isTabSelect = false;
			}
		},
		handleSizeChange(val) {
			this.pagesize = val;
			console.log(this.pagesize);
		},
		handleCurrentChange(val) {
			this.currentPage = val;
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePreview(file) {
			console.log(file);
		},

		//导出移交清单
		excelDownload() {
			let tabSelect = this.$data.isTabSelect;
			if (tabSelect == true) {
				document.getElementById('excelDownload').click();
				this.$message({
					showClose: true,
					message: '移交数据成功',
					type: 'success'
				});
			} else {
				this.$message({
					showClose: true,
					message: '未选择移交的数据'
				});
			}
		},
	}
})
export default class fileTransfer extends Vue {
	$refs: {
		audio: HTMLAudioElement;
		lyricsLines: HTMLDivElement;
	};
	resetForm(formName) {
		this.$refs[formName].resetFields();
	}
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
@import '~@/styles/queryList.scss';
</style>
