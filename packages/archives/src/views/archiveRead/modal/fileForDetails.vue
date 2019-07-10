<template>
	<div>
		<el-form
			:inline="true"
			:model="formInline"
			class="checkDalogForm"
			label-position="left"
			label-width="50%"
		>
			<!-- 第一行 -->
			<el-row :gutter="20">
				<el-col :span="8">
					<el-form-item label="案件标题:">
						<el-input v-model="formInline.caseTitle" :readonly="true"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="登记人:">
						<el-input v-model="formInline.registrantName" :readonly="true"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="借阅人(单位):">
						<el-input v-model="formInline.borrower" :readonly="true"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<!-- 第二行 -->
			<el-row :gutter="20">
				<el-col :span="8">
					<el-form-item label="借阅卷数:">
						<el-input v-model="formInline.borrowNum" :readonly="true"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="借阅目的:">
						<el-select v-model="formInline.borrowPurposes" placeholder="目的">
							<el-option label="目的一" value="目的一"></el-option>
							<el-option label="目的二" value="目的二"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="借阅范围:">
						<el-select v-model="formInline.borrowScope" placeholder="请选择">
							<el-option label="范围一" value="范围一"></el-option>
							<el-option label="范围二" value="范围二"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
			</el-row>
			<!-- 第三行 -->
			<el-row :gutter="20">
				<el-col :span="8">
					<el-form-item label="借阅类型:">
						<el-radio v-model="formInline.borrowType" label="1">电子</el-radio>
						<el-radio v-model="formInline.borrowType" label="0">纸质</el-radio>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="复印带走:">
						<el-radio v-model="formInline.isCopyTakeAway" label="1">是</el-radio>
						<el-radio v-model="formInline.isCopyTakeAway" label="0">否</el-radio>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="借阅日期:">
						<el-date-picker
							v-model="formInline.borrowDate"
							type="date"
							placeholder="选择日期"
							:readonly="true"
						></el-date-picker>
					</el-form-item>
				</el-col>
			</el-row>
			<!-- 第四行 -->
			<el-row :gutter="20">
				<el-col :span="8">
					<el-form-item label="归还人(单位):">
						<el-input
							v-model="formInline.returnPeople"
							placeholder="归还人(单位)"
						></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="归还接收人:">
						<el-input
							v-model="formInline.returnReceiver"
							placeholder="归还接收人"
						></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="归还日期:">
						<el-date-picker
							v-model="formInline.returnDate"
							type="date"
							placeholder="选择日期"
						></el-date-picker>
					</el-form-item>
				</el-col>
			</el-row>

			<!-- 备注 -->
			<el-row style="padding: 0px 0px 10px;"><el-col :span="8">归还备注:</el-col></el-row>
			<el-row style="padding: 0px 0px 24px;">
				<el-col :span="24">
					<el-input
						v-model="formInline.returnRemark"
						:rows="2"
						type="textarea"
					></el-input>
				</el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
	components: {},
	data() {
		return {
			formInline: {
				id: '1', //序号
				caseTitle: '程某某违纪案件', //案件标题
				registrantName: '王某某', //登记人
				borrower: '沈某某', //借阅人(单位)
				borrowNum: '10', //借阅卷数
				borrowPurposes: '', //借阅目的
				borrowScope: '', //借阅范围
				borrowType: '0', //借阅类型
				isCopyTakeAway: '0', //复印带走
				borrowDate: '2019-03-05', //借阅日期
				returnPeople: '', //归还人(单位)
				returnReceiver: '', //归还接收人
				returnDate: '', //归还日期
				returnRemark: '' //归还备注
			}
		};
	},
	created() {},
	mounted() {},
	methods: {}
})
export default class fileForDetails extends Vue {
}
</script>

<style ref="stylesheet/scss" lang="scss" scoped></style>
