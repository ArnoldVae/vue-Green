<template>
	<div>
	<el-form class="form-label-top"
		:model="fileForm">
		<el-row>
			<el-col :span="8" >
				<el-form-item label="来文单位:">
					<el-input v-model="fileForm.comeOrg"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="8" >
				<el-form-item label="文件文号:">
					<el-input v-model="fileForm.fileId"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="8">
				<el-form-item label="文件标题:">
					<el-input v-model="fileForm.fileTitle"></el-input>
				</el-form-item>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="8">
				<el-form-item label="来文时间:">
					<el-date-picker
						v-model="fileForm.fileTime"
						type="date"
						placeholder="选择日期"
					></el-date-picker>
				</el-form-item>
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
			fileForm: {
				comeOrg: '',
				fileId: '',
				fileTitle: '',
				fileTime: ''
			}
		};
	},

	created() {},
	mounted() {},
	methods: {
		getFileList() {
			console.log(this.fileForm);
		},
		clearList() {
			this.fileForm = {};
		}
	},
	props: []
})
export default class reception extends Vue {}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
</style>
