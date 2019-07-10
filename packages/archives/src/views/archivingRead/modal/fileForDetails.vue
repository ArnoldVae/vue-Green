<template>
	<div style="height: 100%;">
		<el-form
			:model="form"
			ref="form"
			:rules="rules"
			class="form-label-top"
			label-position="top">
			<!-- 第一行 -->
			<el-row >
				<el-col :span="8">
					<el-form-item label="案件名称：" required>
						<el-input v-model="form.caseName" :readonly="true"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="档案位置：" required>
						<el-input v-model="form.registrantName" :readonly="true"></el-input>
					</el-form-item>
				</el-col>
                 <el-col :span="8">
                    <el-form-item label="归还日期：" required>
                        <el-date-picker
						v-model="form.borrowDate"
						type="date"
						placeholder="选择日期"
						></el-date-picker>
                    </el-form-item>
                </el-col>
			</el-row>
			<!-- 第二行 -->
			<el-row >
                    <el-col :span="8">
                         <el-form-item label="归还人单位：" required >
                            <el-input v-model="form.name5" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="归还人：" required>
                            <el-input v-model="form.name6" autocomplete="off"></el-input>
                        </el-form-item>
                	</el-col>
                	<el-col :span="8">
                        <el-form-item label="经办人：" required>
                            <el-input v-model="form.name7" autocomplete="off"></el-input>
                        </el-form-item>
                	</el-col>
			</el-row>
			<!-- 备注 -->
			<el-row >
				<el-col :span="24">
					 <el-form-item label="归还备注：" >
						<el-input
							v-model="form.returnRemark"
							:rows="4"
							type="textarea"
						></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			
		</el-form>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {validator,getVeriCode} from '@/utils'
@Component({
	components: {},
	data() {
		return {
			form: {
					id: '1', //序号
					caseName: '程某某违纪案件', //案件标题
					registrantName: '3号柜01', //案件位置
					borrower: '沈某某', //借阅人(单位)
					borrowNum: '10', //借阅卷数
					borrowPurposes: '', //借阅目的
					borrowScope: '', //借阅范围
					borrowType: '0', //借阅类型
					isCopyTakeAway: '0', //复印带走
					borrowDate: new Date(), //借阅日期
					returnPeople: '', //归还人(单位)
					returnReceiver: '', //归还接收人
					returnDate: '', //归还日期
					returnRemark: '' //归还备注
			},
			rules : {
				name: [
				{ required: true, message: "请输入", trigger: "blur" }
				],
				//idNum: [{ validator: validate.checkIdCardNo, trigger: "blur" }],
			},
		};
	},
	created() {},
	mounted() {},
	methods: {}
})
export default class fileForDetails extends Vue {
	
}
</script>

<style ref="stylesheet/scss" lang="scss" scoped>

</style>
