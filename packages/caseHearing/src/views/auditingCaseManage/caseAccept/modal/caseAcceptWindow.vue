<!--案件受理弹框-审核案件-->
<template>
    <div class="backplane">
        <div class="page-tabs">
            <el-radio-group v-model="tabs1" size="medium">
                <el-radio-button label="1">案件受理</el-radio-button>
                <el-radio-button label="2">不予受理</el-radio-button>
            </el-radio-group>
        </div>
        <div class="backplane-Content">
            <div v-show="tabs1=='1'">
                <CaseAcceptPage></CaseAcceptPage>
            </div>
            <div v-show="tabs1=='2'">
                <RefuseAcceptPage></RefuseAcceptPage>
            </div>
        </div>

        <div class="backplane-footer-center">
            <el-button type="primary" @click="stateTrans">提交</el-button>
            <el-button type="success" >保存</el-button>
            <el-button @click="close">返回</el-button>

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import CaseAcceptPage from './caseAcceptPage.vue'//案件受理
    import RefuseAcceptPage from './refuseAcceptPage.vue'//不予受理

    @Component({
        props: ['pageFlag'],
        components: {CaseAcceptPage ,RefuseAcceptPage},
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
            },
            close(){
                     this.$emit('submitEvent','SLYJ')
            }
        }
    })
    export default class caseSupplement extends Vue {
         tabs1:string = '1';
//        tabs2:string = '1';
        activeNames1:Array<string> =  ['menu1','menu2'];
        activeNames2:Array<string> =  ['menu3'];
        form = {
            name: "",
            region: "",
            type: "",
            borthday: "2019-01-01",
            sex: "1",
            nation:'',//民族
            nativePalce:'',//籍贯
            category:'',//人员类别
            transDepart:'',//移送部门
            industryField:'',//行业领域
            professionRank:'',//职级
            educationList:'',//学历
            rank:'',//军衔
            npcNmember:'',//人大代表
            poliStatus:'',//政治面貌
            discipBehavior:'',//违纪行为
            subDiscipBehavior:'',//违纪行为子类
            departGrade:'',
            secretGrade:'01',
            gender:'01',
            supervisedPersion:'01',
            date1: '',
            date2: '',
            partyTime:'',
            identify:'',//身份证号码
            positionGrade:'',//技术职务等级
            isValide:'',
            techGrade:'',
            isManager:'01',//是否主管
            departCategory:'',
            secretGrades:'',//审批权限
            orgCategory:'',
            taskCategory:'',
        };

    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>

</style>
