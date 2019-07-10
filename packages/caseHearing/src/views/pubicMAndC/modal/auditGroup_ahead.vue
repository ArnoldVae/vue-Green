<template>
    <!-- 审理意见 -审理案件-->
    <div class="body-container-jwjw">
        <div class="body-container1">
            <el-radio-group v-model="isCollapse" style="margin-top: 10px; background: #f6f6f6;">
                <el-radio-button label="left">审理意见</el-radio-button>
                <el-radio-button label="other">审理谈话</el-radio-button>
                <!--<el-radio-button label="right">中止审理</el-radio-button>-->
            </el-radio-group>
            <div v-show="isCollapse=='left'">
                <AuditAdvice pageFlag="audit"></AuditAdvice>
            </div>
            <div v-show="isCollapse=='right'">
                <AuditSoutdown pageFlag="audit"></AuditSoutdown>
            </div>
            <div v-show="isCollapse=='other'">
                <AuditTalk pageFlag="audit"></AuditTalk>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import "../../../assets/ztree/js/jquery-1.4.4.min.js";
    import AuditAdvice from './auditAdvice.vue'
    import AuditSoutdown from './audit_Shoutdown.vue'
    import AuditTalk from './auditTalk.vue'

    @Component({
        props: ['pageFlag'],
        components: {AuditAdvice,AuditSoutdown,AuditTalk},
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
                    this.$emit('submitEvent','SLYJ')
                }).catch(() => {

                });
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