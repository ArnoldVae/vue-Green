<template>
	<!-- 会议审议弹窗-审理案件 -->
	<div class="backplane">
		<div class="page-tabs">
			<el-radio-group v-model="isCollapse" size="medium">
				<el-radio-button label="left">征求意见</el-radio-button>
				<el-radio-button label="other">集体审议</el-radio-button>
				<el-radio-button label="right">会议审议</el-radio-button>
			</el-radio-group>
		</div>
		<div class="backplane-Content">
			<div v-if="isCollapse=='left'">
				<AskForOpinionPage pageFlag="review"></AskForOpinionPage>
			</div>
			<div v-if="isCollapse=='right'">
				<ReviewSession pageFlag="review"></ReviewSession>
			</div>
			<div v-if="isCollapse=='other'">
				<CollectiveIdeaPage pageFlag="review"></CollectiveIdeaPage>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	const selectData = require("store/selectData.json");
	import AskForOpinionPage from "./askForOpinionPage.vue" //征求意见
	import CollectiveIdeaPage from "./collectiveIdeaPage.vue" //集体审议
	import ReviewSession from "./meetingDeliberationPage.vue"  //会议审议
	@Component({
		props: ['pageFlag'],
		selectData: selectData,
		components: {
			AskForOpinionPage,
			CollectiveIdeaPage,
			ReviewSession
		},
		data() {
			return {
				options: [{
					value: '1',
					label: '同意审理意见'
				}, {
					value: '2',
					label: '改变审理意见'
				}],
				value: '',
				textarea: '',
				visaObj: {},
				activeNames: ['1', '2', '3', '4', '5', '6', '7', '8'],
				form: {
					metttingType: '', //会议类型
					partyDiscip: '', //党纪处分
					militaryDiscip: '', //军纪处分
					fileRecord: '01',
					name: '',
					region: '',
					date1: '',
					date2: '',
					type: [],
					resource: '01',
					resource1: '01',
					resource2: '01',
					desc: '',
					depart: []
				},
				partyDiscip: selectData.partyDiscip, //党纪处分
				militaryDiscip: selectData.militaryDiscip, //军纪处分
				metttingType: selectData.metttingType, //会议类型
				rules: {
					name: [{
						required: true,
						message: '请输入',
						trigger: 'blur'
					}],
				}
			};
		},

		created() {},
		mounted() {
			if(this.pageFlag == "leader") {

				this.isCollapse = 'left'
			}

		},
		methods: {

		}
	})
	export default class caseSupplement extends Vue {

		isCollapse = 'right'
		// 附件列表
		visaForm: object = {
			registerFiles: [], // 移送审理案件材料交接登记表
			batchFiles: [] // 案件移送审理呈批表
		}
		showFlag: boolean = false;
		dialogFlag = {
			allPrevious: false,
		}
		allPrevious(item) {
			this.dialogFlag[item] = true
		}
		handleChange(val) {
			this.activeNames = ['1', '2']
		}

		// 获取附件信息
		setRegisterFiles(file, fileList) {
			this.visaForm.registerFiles.push(file)
			const date = new Date()
			for(let i = 0; i < this.visaForm.registerFiles.length; i++) {
				this.visaForm.registerFiles[i].documentname = this.visaForm.registerFiles[i].name
				this.visaForm.registerFiles[i].filesize = this.visaForm.registerFiles[i].size
				this.visaForm.registerFiles[i].documentdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
			}
		}
		setBatchFiles(file, fileList) {
			this.visaForm.batchFiles.push(file)
			const date = new Date()
			for(let i = 0; i < this.visaForm.batchFiles.length; i++) {
				this.visaForm.batchFiles[i].documentname = this.visaForm.batchFiles[i].name
				this.visaForm.batchFiles[i].filesize = this.visaForm.batchFiles[i].size
				this.visaForm.batchFiles[i].documentdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
			}
		}
		// 删除附件
		delBatchFiles(index) {
			this.visaForm.batchFiles.splice(index, 1)
		}
		delRegisterFiles(index) {
			this.visaForm.registerFiles.splice(index, 1)
		}

		stateTrans() {
			this.$confirm('提交后将进入案件执行环节，确定提交？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				//父页面调用方法
				this.$emit('submitEvent', 'HYSY')
			}).catch(() => {

			});
		}
	}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>

</style>