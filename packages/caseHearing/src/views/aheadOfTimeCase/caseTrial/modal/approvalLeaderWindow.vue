<template >
<!-- 报批领导弹窗-提前介入 -->
  <div class="backplane">
    <div class="page-tabs">
        <el-radio-group v-model="isCollapse" style="margin-top: 10px; background: #f6f6f6;">
            <el-radio-button label="left">集体审议</el-radio-button>
            <el-radio-button label="other">报批领导</el-radio-button>
        </el-radio-group>
    </div>
    <div class="backplane-Content">
        <div v-show="isCollapse=='left'">
            <GroupDeliberationsPage pageFlag="aheaad" ref="mychild"></GroupDeliberationsPage>
        </div>
        <div v-show="isCollapse=='other'">
            <GpprovalLeaderPage  pageFlag="aheaad"></GpprovalLeaderPage>
        </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GroupDeliberationsPage from "./groupDeliberationsPage.vue";//集体审议
import GpprovalLeaderPage from "./approvalLeaderPage.vue";//报批领导
@Component({
    props:['pageFlag'],
  components: {GroupDeliberationsPage,GpprovalLeaderPage},
  data() {
    return {
    };
  },

    created() {},
    mounted(){
		
  },
  methods: {
      submitBtn(){
      	this.$refs.mychild.stateTrans();
      }
  }
})
export default class caseSupplement extends Vue {

    isCollapse='left'
    
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
</style>