<!--案件受理弹框-提前介入-->
<template>
    <div class="backplane">
        <div class="page-tabs">
            <el-radio-group v-model="isCollapse"  size="medium">
                <el-radio-button label="left">案件受理</el-radio-button>
                <el-radio-button label="right">不予受理</el-radio-button>
            </el-radio-group>
        </div>
        <div class="backplane-Content">
            <div v-show="isCollapse=='left'">
                <CaseAcceptPage pageFlag="audit"></CaseAcceptPage>
            </div>
            <div v-show="isCollapse=='right'">
                <RefuseAcceptPage pageFlag="audit"></RefuseAcceptPage>
            </div>
        </div>
        <div class="backplane-footer-center">
            <el-button type="primary" @click="stateTrans">提交</el-button>
        	<el-button type="success"  @click="saveForm()">保存</el-button>
            <el-button  @click="closeForm()">返回</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import CaseAcceptPage from './caseAcceptPage.vue'//案件受理
    import RefuseAcceptPage from './refuseAcceptPage.vue'//不予受理
    @Component({
        props: ['pageFlag'],
        components: {CaseAcceptPage,RefuseAcceptPage},
        data() {
            return {
                isCollapse: "left",
            };
        },

        created() {
        },
        mounted() {
        },
        methods: {
             stateTrans(){
                this.$confirm('提交后将进入会议审议环节，确定提交？','提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //父页面调用方法
                    this.$emit('submitEvent','SSSL')
                }).catch(() => {

                });
            },
            close(){
                     this.$emit('submitEvent','SSSL')
            }
        }
    })
    export default class caseSupplement extends Vue {
     //   isCollapse: boolean = false;
      saveForm(){
            this.$emit("closePage");
            this.$message({
			  type: "success",
			  message: "保存成功!"
			});
        }
		
        closeForm(){
            this.$emit("closePage");
        }

    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
</style>