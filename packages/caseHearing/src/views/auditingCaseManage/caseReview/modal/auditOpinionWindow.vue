<template>
    <!-- 审核意见-审核案件 -->
    <div class="backplane">
        <div class="page-tabs">
            <el-radio-group v-model="isCollapse" size="medium">
                <el-radio-button label="left">审核意见</el-radio-button>
                <el-radio-button label="right">中止审核</el-radio-button>
            </el-radio-group>
        </div>
            <div class="backplane-Content">
            <div v-show="isCollapse=='left'">
                <AuditOpinionPage pageFlag="audit"></AuditOpinionPage>
            </div>
            <div v-show="isCollapse=='right'">
                <DiscontinueAuditPage pageFlag="audit"></DiscontinueAuditPage>
            </div>
            </div>
       
            <div class="backplane-footer-center">
                <el-button type="primary" @click="downLoadFile">导出审核报告文档</el-button>
                <el-button type="primary" @click="stateTrans">提交</el-button>
                <el-button type="success" >保存</el-button>
                <el-button @click="close">返回</el-button>
            </div>
        </div>
   
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import AuditOpinionPage from './auditOpinionPage.vue';//审核意见
    import DiscontinueAuditPage from './discontinueAuditPage.vue';//中止审核
    @Component({
        props: ['pageFlag'],
        components: {AuditOpinionPage,DiscontinueAuditPage},
        data() {
            return {
                options5: [{
                    value: '1',
                    label: '关键证据缺失'
                }, {
                    value: '2',
                    label: '发现新的违纪问题线索'
                }, {
                    value: '3',
                    label: '待同案违纪人员一并处理'
                }],
                value10: [],
                isCollapse: "left",
                activeName: 'third',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },

                activeNames: ['1'],

                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入', trigger: 'blur'}
                    ],
                }
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
                    this.$emit('submitEvent','SHYJ')
                }).catch(() => {

                });
            },
            close(){
                     this.$emit('submitEvent','SHYJ')
            }
        }
    })
    export default class caseSupplement extends Vue {
        isCollapse: boolean = false;

        downLoadFile() {
            var $eleForm = $("<form method='get'></form>");

            $eleForm.attr("action", "img/123.docx");

            $(document.body).append($eleForm);

            //提交表单，实现下载
            $eleForm.submit();

//        window.open('')
        }

    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
    /*控制表单项的公有样式*/
    @import "~@/styles/commonJWJW.scss";

</style>