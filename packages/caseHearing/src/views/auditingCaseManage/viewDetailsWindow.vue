<template>
	<!--查看详情弹窗-->
	<div class="backplane">
		<div class="page-tabs">
			<el-radio-group v-model="isCollapse" size="medium">
				<el-radio-button label="caseRegister" v-if="myData.caseRegister==true" >案件基本信息</el-radio-button>
				<el-radio-button label="caseAcceptPage" v-if="myData.caseAcceptPage==true" >案件受理</el-radio-button>
				<el-radio-button label="preliminaryAuditPage" v-if="myData.preliminaryAuditPage==true" >初步审核</el-radio-button>
				<el-radio-button label="auditOpinionPage" v-if="myData.auditOpinionPage==true" >审核意见</el-radio-button>
				<el-radio-button label="groupDeliberationPage" v-if="myData.groupDeliberationPage==true" >集体审议</el-radio-button>
				<el-radio-button label="reviewSessionPage" v-if="myData.reviewSessionPage==true" >会议审议</el-radio-button>
			</el-radio-group>
		</div>
		<div class="backplane-Content">
				<div v-show="isCollapse=='caseRegister'" >
					<CaseRegister pageFlag="details" myData="SH" ref="caseReg"></CaseRegister>
				</div>
				<div v-show="isCollapse=='caseAcceptPage'" >
					<CaseAcceptPage pageFlag="details"></CaseAcceptPage>
				</div>
				<div v-show="isCollapse=='preliminaryAuditPage'" >
					<PreliminaryAuditPage pageFlag="details"></PreliminaryAuditPage>
				</div>
				<div v-show="isCollapse=='auditOpinionPage'" >
					<AuditOpinionPage pageFlag="details"></AuditOpinionPage>
				</div>
				<div v-show="isCollapse=='groupDeliberationPage'" >
					<GroupDeliberationPage pageFlag="details"></GroupDeliberationPage>
				</div>
				<div v-show="isCollapse=='reviewSessionPage'" >
					<ReviewSessionPage pageFlag="details"></ReviewSessionPage>
				</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import CaseRegister from '../evocatoryRes/modal/caseRegister1.vue';//案件详情
	import CaseAcceptPage from './caseAccept/modal/caseAcceptPage.vue';//案件受理
	import PreliminaryAuditPage from './preliminaryAudit/modal/preliminaryAuditPage.vue';//初步审核
	import AuditOpinionPage from './caseReview/modal/auditOpinionPage.vue' //审核意见
	import GroupDeliberationPage from './caseReview/modal/groupDeliberationPage.vue' //集体审议
	import ReviewSessionPage from './caseReview/modal/reviewSessionPage.vue'//会议审议

	@Component({
		props: ['myData'],
		components: {
			CaseRegister,
			CaseAcceptPage,
			PreliminaryAuditPage,
			AuditOpinionPage,
			GroupDeliberationPage,
			ReviewSessionPage
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

		echoDetails(item){
			   let that=this;
			   setTimeout(function(){
				   that.$refs.caseReg.echoDetails(item);
			   },1);
		}

	}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>

</style>