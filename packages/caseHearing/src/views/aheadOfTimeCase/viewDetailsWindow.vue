<template>
	<!--查看详情弹窗-->
	<div class="backplane">
		<div class="page-tabs">
			<el-radio-group v-model="isCollapse" size="medium">
				<el-radio-button label="caseRegister" v-if="myData.caseRegister==true" >案件基本信息</el-radio-button>
				<el-radio-button label="caseAcceptPage" v-if="myData.caseAcceptPage==true" >案件受理</el-radio-button>
				<el-radio-button label="trialOpinionPage" v-if="myData.trialOpinionPage==true" >审理意见</el-radio-button>
				<el-radio-button label="groupDeliberationsPage" v-if="myData.groupDeliberationsPage==true" >集体审议</el-radio-button>
				<el-radio-button label="approvalLeaderPage" v-if="myData.approvalLeaderPage==true" >报批领导</el-radio-button>
			</el-radio-group>
		</div>
		<div class="backplane-Content">
				<div v-show="isCollapse=='caseRegister'" >
					<CaseRegister pageFlag="details"></CaseRegister>
				</div>
				<div v-show="isCollapse=='caseAcceptPage'" >
					<CaseAcceptPage pageFlag="details"></CaseAcceptPage>
				</div>
				<div v-show="isCollapse=='trialOpinionPage'" >
					<trialOpinionPage pageFlag="details"></trialOpinionPage>
				</div>
				<div v-show="isCollapse=='groupDeliberationsPage'" >
					<GroupDeliberationsPage pageFlag="details"></GroupDeliberationsPage>
				</div>
				<div v-show="isCollapse=='approvalLeaderPage'" >
					<ApprovalLeaderPage pageFlag="details"></ApprovalLeaderPage>
				</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import CaseRegister from '../evocatoryRes/modal/caseRegister1.vue';//案件详情
	import CaseAcceptPage from './caseAccept/modal/caseAcceptPage.vue';//案件受理
	import TrialOpinionPage from './caseTrial/modal/trialOpinionPage.vue';
	import GroupDeliberationsPage from './caseTrial/modal/groupDeliberationsPage.vue' 
	import ApprovalLeaderPage from './caseTrial/modal/approvalLeaderPage.vue'

	@Component({
		props: ['myData'],
		components: {
			CaseRegister,
			CaseAcceptPage,
			TrialOpinionPage,
			GroupDeliberationsPage,
			ApprovalLeaderPage
		},
		data() {
			return{
				isCollapse: "caseRegister"
			}
			
		},

		created() {},
		mounted() {},
		methods: {}
	})
	export default class caseSupplement extends Vue {
		isCollapse: boolean = false;

		

	}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>

</style>