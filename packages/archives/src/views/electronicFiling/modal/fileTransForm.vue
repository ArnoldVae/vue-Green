<template>
	<div class="el-main bg-layout">
		<!-- 弹出表单---档案移交操作 -->
			<el-form
				:model="ruleForm"
				class="checkDalogForm"
				:inline="true"
				label-position="left"
				label-width="50%"
			>
				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item label="案件标题:" class="caseName">
							<el-input
								v-model="ruleForm.caseName"
								readonly
								class="caseNameInput"
								autocomplete="off"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="年份:">
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
					<el-col :span="8">
						<el-form-item label="接收人：">
							<el-input
								v-model="ruleForm.deliverPerson"
								autocomplete="off"
							></el-input>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					
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
					<el-col :span="8">
						<el-form-item label="移交人：">
							<el-input
								v-model="ruleForm.deliverPerson"
								class="rightInput"
								autocomplete="off"
							></el-input>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
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
								:rows="4"
								placeholder="请输入移交信息"
								v-model="ruleForm.deliverInfo"
							></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// 导入excel内容转换插件
@Component({
	components: {},
	data() {
		return {
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
		};
	},
	created() {},
	mounted() {
	},
	methods: {
		
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
@import "~@/styles/dialogBox.scss";
@import "~@/styles/card2.scss";
@import "~@/styles/common.scss";
    .el-form-item{
    	width: 85%;
    	/deep/ .el-form-item__content{
    		width: 85%;
    	}
    }
    .dialog-footer{
    	text-align: center;
    }
</style>
