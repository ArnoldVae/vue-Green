<template>
	<!--查看详情弹窗-->
	<div class="backplane">
		<div class="page-tabs">
			<el-radio-group v-model="isCollapse" size="medium">
				<el-radio-button label="caseRegister" v-if="myData.caseRegister==true" >案件基本信息</el-radio-button>
				<el-radio-button label="caseAcceptPage" v-if="myData.caseAcceptPage==true" >案件受理</el-radio-button>
				<el-radio-button label="firstAuditPage" v-if="myData.firstAuditPage==true" >初步审核</el-radio-button>
				<el-radio-button label="trialOpinionPage" v-if="myData.trialOpinionPage==true" >审理意见</el-radio-button>
				<el-radio-button label="trialTalkPage" v-if="myData.trialTalkPage==true" >审理谈话</el-radio-button>
				<el-radio-button label="askForOpinionPage" v-if="myData.askForOpinionPage==true" >征求意见</el-radio-button>
				<el-radio-button label="collectiveIdeaPage" v-if="myData.collectiveIdeaPage==true" >集体审议</el-radio-button>
				<el-radio-button label="meetingDeliberationPage" v-if="myData.meetingDeliberationPage==true" >会议审议</el-radio-button>
			</el-radio-group>
		</div>
		<div class="backplane-Content">
				<div v-show="isCollapse=='caseRegister'" >
					<CaseRegister pageFlag="details" ref="caseReg" myData="SL"></CaseRegister>
				</div>
				<div v-show="isCollapse=='caseAcceptPage'" >
					<CaseAcceptPage pageFlag="details"></CaseAcceptPage>
				</div>
				<div v-show="isCollapse=='firstAuditPage'" >
					<FirstAuditPage pageFlag="details"></FirstAuditPage>
				</div>
				<div v-show="isCollapse=='trialOpinionPage'" >
					<TrialOpinionPage pageFlag="details"></TrialOpinionPage>
				</div>
				<div v-show="isCollapse=='trialTalkPage'">
					<TrialTalkPage pageFlag="details"></TrialTalkPage>
				</div>
				<div v-show="isCollapse=='askForOpinionPage'" >
					<AskForOpinionPage pageFlag="details"></AskForOpinionPage>
				</div>
				<div v-show="isCollapse=='collectiveIdeaPage'" >
					<CollectiveIdeaPage pageFlag="details"></CollectiveIdeaPage>
				</div>
				<div v-show="isCollapse=='meetingDeliberationPage'" >
					<MeetingDeliberationPage pageFlag="details"></MeetingDeliberationPage>
				</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import CaseRegister from '../evocatoryRes/modal/caseRegister1.vue';//案件详情
	import CaseAcceptPage from './caseAccept/modal/caseAcceptPage.vue';//案件受理
	import FirstAuditPage from './firstAudit/modal/firstAuditPage.vue';//初步审核
	import TrialOpinionPage from './auditDeliberation/modal/trialOpinionPage.vue' //审理意见page
	import TrialTalkPage from './auditDeliberation/modal/trialTalkPage.vue' //审理谈话page
	import AskForOpinionPage from './auditDeliberation/modal/askForOpinionPage.vue' 
	import CollectiveIdeaPage from './auditDeliberation/modal/collectiveIdeaPage.vue' 
	import MeetingDeliberationPage from './auditDeliberation/modal/meetingDeliberationPage.vue'

	@Component({
		props: ['myData'],
		components: {
			CaseRegister,
			CaseAcceptPage,
			FirstAuditPage,
			TrialOpinionPage,
			TrialTalkPage,
			AskForOpinionPage,
			CollectiveIdeaPage,
			MeetingDeliberationPage
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
			});
		}

	}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>

</style>