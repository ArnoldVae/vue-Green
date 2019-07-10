<!--案件受理demo-->
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
                <OpenCasesing ref="caseReg"></OpenCasesing>
            </div>
            <div v-show="tabs1=='2'">
                <CasesAcceptedNew></CasesAcceptedNew>
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
    import OpenCasesing from '../../pubicMAndC/modal/openCasesingNew.vue'
    import CasesAcceptedNew from '../../pubicMAndC/modal/casesAcceptedNew.vue'

    @Component({
        props: [''],
        components: {OpenCasesing,CasesAcceptedNew},
        data() {
            return {

            };
        },

        created() {
        },
        mounted() {
        },
        methods: {

        }
    })
    export default class DemoDetails extends Vue {
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
         echoDetails(val:any) {
            let that=this;
            setTimeout(function(){
                that.$refs.caseReg.echoDetails(val);
            },1);
        }
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