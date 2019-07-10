<!--案件受理弹框-审核案件-->
<template>
    <div class="body-container-jwjw">
        <div class="body-container1">
            <el-radio-group v-model="isCollapse" style="margin-top: 10px; background: #f6f6f6;">
                <el-radio-button label="left">案件受理</el-radio-button>
                <el-radio-button label="right">不予受理</el-radio-button>
            </el-radio-group>
            <div v-show="isCollapse=='left'">
                <OpenCasesing pageFlag="audit"></OpenCasesing>
            </div>
            <div v-show="isCollapse=='right'">
                <CasesAccepted pageFlag="audit"></CasesAccepted>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import "../../../assets/ztree/js/jquery-1.4.4.min.js";
    import OpenCasesing from './openCasesing.vue'//案件受理
    import CasesAccepted from './casesAccepted.vue'//不予受理

    @Component({
        props: ['pageFlag'],
        components: {OpenCasesing,CasesAccepted},
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