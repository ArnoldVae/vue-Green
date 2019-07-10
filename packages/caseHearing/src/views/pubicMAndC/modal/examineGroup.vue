<!--案件受理demo-->
<template>
    <div class="backplane">
        <div class="page-tabs">
        <div class="backplane-Content">
            <el-steps :active="active" align-center  v-show="showExamineFlag=='02'">
                <el-step title="阅卷"><span slot="icon" class="iconfont iconfont-title " >&#xe66c;</span></el-step>
                <el-step  title="补充调查"><span slot="icon" class="iconfont iconfont-title ">&#xe616;</span></el-step>
                <el-step title="集体审议"><span slot="icon" class="iconfont iconfont-title ">&#xe62f;</span></el-step>
                <el-step title="复查意见"><span slot="icon" class="iconfont iconfont-title ">&#xe64b;</span></el-step>
                <el-step title="申诉谈话"><span slot="icon" class="iconfont iconfont-title ">&#xe654;</span></el-step>
            </el-steps>
            <el-steps :active="active" align-center v-show="showExamineFlag=='01'">
                <el-step title="阅卷"><span slot="icon" class="iconfont iconfont-title ">&#xe66c;</span></el-step> 
                <el-step title="集体审议"><span slot="icon" class="iconfont iconfont-title ">&#xe62f;</span></el-step>
                <el-step title="复议意见"><span slot="icon" class="iconfont iconfont-title ">&#xe64b;</span></el-step>
                <el-step title="申诉谈话"><span slot="icon" class="iconfont iconfont-title ">&#xe654;</span></el-step>
            </el-steps>
             </div>                         
             </div>
             <div class="backplane-Content">
            <!--阅卷-->
            <div class="min-height-400" v-show="active=='0'">
                <newInspection ></newInspection>
            </div>
            <!--补充调查-->
            <div class="min-height-400"  v-show="active=='1'&&showExamineFlag=='02'">
                <newSupplementSurvey ></newSupplementSurvey>
            </div>
            <!-- 申诉复议--集体审议 -->
            <div class="min-height-400"  v-show="active=='1'&&showExamineFlag=='01'">
                <newDeliberations ></newDeliberations>
            </div>
            <!-- 复议意见-->
            <div class="min-height-400"  v-show="active=='2'&&showExamineFlag=='01'">
                <reviewOpinions></reviewOpinions>
            </div>
            <!-- 申诉复查--集体审议 -->
             <div class="min-height-400"  v-show="active=='2'&&showExamineFlag=='02'">
                <newDeliberations pageFlag="audit"></newDeliberations>
            </div>
            <!-- 申诉谈话 -->
            <div  class="min-height-400"  v-show="active=='3'&&showExamineFlag=='01'">
                <HearingTalk pageFlag="audit"></HearingTalk>
            </div>
            <!-- 复查意见 -->
            <div  class="min-height-400"  v-show="active=='3'&&showExamineFlag=='02'">
                <checkOpinions ></checkOpinions>
            </div>
            <div  class="min-height-400"  v-show="active=='4'">
                <HearingTalk></HearingTalk>
            </div>
        </div>
        

          <div class="backplane-footer-center">
            <el-button @click="lastStep">上一步</el-button>
            <el-button @click="nextStep" >下一步</el-button>
            <el-button type="success" v-if="pageFlag!='details'"  @click="saveForm()">保存</el-button>
            <el-button type="primary" v-if="(showExamineFlag=='01'&&active=='3')||showExamineFlag=='02'&&active=='4'"  @click="saveForm()">提交</el-button>

        </div> 
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import newInspection from '../../pubicMAndC/modal/new_Inspection.vue'
    import newSupplementSurvey from '../../pubicMAndC/modal/new_supplementSurvey.vue'
    import newDeliberations from '../../pubicMAndC/modal/new_deliberations.vue'
    import newAuditTalk from '../../pubicMAndC/modal/new_auditTalk.vue'
    import HearingTalk from '../../pubicMAndC/modal/hearingTalk.vue';
    import reviewOpinions from '../../pubicMAndC/modal/reviewOpinions.vue';
    import checkOpinions from '../../pubicMAndC/modal/checkOpinions.vue';

    
    @Component({
        props: ['appeal','pageFlag'],
        components: {newInspection,newSupplementSurvey,newDeliberations,HearingTalk,reviewOpinions,checkOpinions},
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
        tabs1:string = '0';
        active= 0
        showExamineFlag:string=this.appeal?this.appeal:'01';

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
        nextStep() {
            let indexof=this.showExamineFlag=='01'?3:4
            if(this.active==indexof)
                return
            if (this.active++ > indexof-1) {
                this.active = 0;
            }

        }
        lastStep() {

            if(this.active==0)
                return
            if (this.active-- < 1) {
                this.active = 2;
            }

        }
//        外部调用初始化modal
        initModal(target){
            this.active=0
            this.showExamineFlag=target

        }
        saveForm(){
            this.$emit("closePage");
            this.$message({
			  type: "success",
			  message: "保存成功!"
			});
        }
    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
// 图标的边框去掉examineGroup.vue 
/deep/.el-step__icon.is-text {
     border: 0 ; 
     
}
/deep/.iconfont-title {
    font-size: 38px;
}
.iconfont{
    background:#fff;
}
.testClass{
    color:#C0C4CC;
    /deep/.el-step__title.is-process{
        color: #C0C4CC;
        font-weight: normal;
    }
}
</style>