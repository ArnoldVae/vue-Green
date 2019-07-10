<template>
	<!--查看详情弹窗-->
	<div class="backplane">
		<div class="page-tabs">
			<el-radio-group v-model="isCollapse" size="medium">
				<el-radio-button label="caseRegister" v-if="myData.caseRegister==true" >案件基本信息</el-radio-button>
				<el-radio-button label="caseAcceptPage" v-if="myData.caseAcceptPage==true" >案件受理</el-radio-button>
				<el-radio-button label="appealReconsideration" v-if="myData.appealReconsideration==true" >申诉复议</el-radio-button>
				<el-radio-button label="appealCheck" v-if="myData.appealCheck==true" >申诉复查</el-radio-button>
				<el-radio-button label="meetingDeliberation" v-if="myData.meetingDeliberation==true" >会议审议</el-radio-button>
			</el-radio-group>
		</div>
		<div class="backplane-Content">
				<div v-show="isCollapse=='caseRegister'" >
					<AppalRegister pageFlag="details"></AppalRegister>
				</div>
				<div v-show="isCollapse=='caseAcceptPage'" >
					<CaseAcceptPage pageFlag="details" ></CaseAcceptPage>
				</div>
				<div v-show="isCollapse=='appealReconsideration'" >
					<ExamineGroup pageFlag="details" appeal="01"></ExamineGroup>
				</div>
				<div v-show="isCollapse=='appealCheck'" >
					<ExamineGroup pageFlag="details" appeal="02"></ExamineGroup>
				</div>
				<div v-show="isCollapse=='meetingDeliberation'" >
					<MeetingDeliberation pageFlag="details"></MeetingDeliberation>
				</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import AppalRegister from '../evocatoryRes/modal/appalRegister.vue';//案件详情
	import CaseAcceptPage from  "../pubicMAndC/modal/openCasesingNew.vue";//案件受理
	import ExamineGroup from "../pubicMAndC/modal/examineGroup.vue";
	import MeetingDeliberation from '../pubicMAndC/modal/reviewSessionSS.vue'

	@Component({
		props: ['myData'],
		components: {
			AppalRegister,
			CaseAcceptPage,
			ExamineGroup,
			MeetingDeliberation
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