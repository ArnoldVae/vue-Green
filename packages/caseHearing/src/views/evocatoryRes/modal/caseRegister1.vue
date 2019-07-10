<!--案件受理demo-->
<template>
    <div class="backplane">
        <div class="backplane-Content">
            <div v-show="tabs1=='1'">
                <el-container>
                    <el-aside width="220px" class="el-select-tab">
                        <el-timeline class="pointer-Item">
                            <el-timeline-item
                                    style="margin-left: 3px"
                                    size="large"
                                    :type="activity.active?'primary ':''"
                                    v-for="(activity, index) in subMenuItem"
                                    :key="index"
                            >
                                <span :id="activity.eleId" @click="menuGo(activity)" :class="[activity.active ? 'active_class' : '']">{{activity.title}}</span>

                            </el-timeline-item>
                        </el-timeline>
                    </el-aside>
                    <el-main>
                        <el-collapse v-model="activeNames" class="collapse" @change="closeItem">
                            <el-collapse-item id="menu1"  name="1">
                                <template slot="title">
                                    <span class="iconfont iconfont-title ">&#xe609;</span><span class="title">案件基本情况信息</span>
                                </template>
                                <div class="form-content">
                                    <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                                        <el-row :gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="案件名称：" prop="name4">
                                                    <el-input v-model="form.name"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="案件类型：" prop="name5">
                                                    <el-select v-model="form.name5" placeholder="请选择" class="form_select">
                                                        <el-option v-if="myData == 'SL' || myData == 'TQJR'" label="直查案件" value="1"></el-option>
                                                        <el-option v-if="myData == 'SL'" label="报批案件" value="2"></el-option>
                                                        <el-option v-if="myData == 'SH'" label="直查后通报下级单位" value="1"></el-option>
                                                        <el-option v-if="myData == 'SH' || myData == 'TQJR'" label="下级单位调查" value="2"></el-option>
                                                        <el-option v-if="myData == 'SH' || myData == 'SL'" label="司法移送案件" value="3"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-form-item label="案件涉密等级：" prop="name6">
                                                    <el-radio-group v-model="form.secretGrade">
                                                        <el-radio label="01">绝密</el-radio>
                                                        <el-radio label="02">机密</el-radio>
                                                        <el-radio label="03">秘密</el-radio>
                                                        <el-radio label="04">不涉密</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="20">

                                            <el-col :span="6">
                                                <el-form-item label="移送部门：" prop="name7">
                                                    <el-select class="form_select" v-model="form.transDepart" placeholder="请选择" >
                                                        <el-option v-for="(option,index) in transDepart" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="接收时间：" prop="name5">
                                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" :default-value="timeDefaultShow"
                                                                    format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6" v-if="myData == 'SH'">
                                                <el-form-item label="是否呈报上级审核：" prop="namew">
                                                    <el-radio-group v-model="form.isValide">
                                                        <el-radio label="01">是</el-radio>
                                                        <el-radio label="02">否</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                    </el-form>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item id="menu2" v-show="!hideMenuList.step02" name="2">
                                <template slot="title">
                                    <i class="header-icon el-icon-document"></i>
                                    <span>处分对象基本情况信息</span>
                                </template>
                                <div class="form-content">
                                    <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                                        <el-row :gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="姓名：" prop="name">
                                                    <el-input v-model="form.name1"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-form-item label="部职别：" prop="name1">
                                                    <el-input placeholder="请输入职务" v-model="form.departGrade" >
                                                        <el-select v-model="form.transDepart2" slot="prepend" placeholder="请选择" style=" width: 290px;">
                                                            <el-option v-for="(option,index) in transDepart" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code">
                                                            </el-option>
                                                        </el-select>
                                                    </el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="人员类别：">
                                                    <el-cascader expand-trigger="hover" :options="personnelCategory" v-model="form.category"></el-cascader>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="身份证号码：" prop="idNum">
                                                    <el-input v-model="form.idNum" @change="changeIdNo"></el-input>
                                                </el-form-item>
                                            </el-col>

                                            <el-col :span="6">
                                                <el-form-item label="性别：">
                                                    <el-radio-group v-model="form.sex">
                                                        <el-radio label="1" size="medium">男</el-radio>
                                                        <el-radio label="2" size="medium">女</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="民族：">
                                                    <el-select v-model="form.nation" filterable placeholder="请选择">
                                                        <el-option
                                                                v-for="(option,index) in nation"
                                                                :key="index"
                                                                v-bind:label="option.value"
                                                                v-bind:value="option.code">
                                                        </el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="学历：">
                                                    <el-select class="form_select" v-model="form.region" placeholder="请选择">
                                                        <el-option v-for="(option,index) in educationList" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="职级：">
                                                    <el-select v-model="form.professionRank" placeholder="请选择" class="form_select">
                                                        <el-option v-for="(option,index) in professionRank" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="技术等级：" >
                                                    <el-select v-model="form.techGrade" placeholder="请选择" class="form_select">
                                                        <el-option v-for="(option,index) in techGrade" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="单位类型：">
                                                    <el-select v-model="form.departCategory" placeholder="请选择" class="form_select">
                                                        <el-option v-for="(option,index) in departCategory" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="单位任务类型：">
                                                    <el-select v-model="form.taskCategory" placeholder="请选择" class="form_select">
                                                        <el-option v-for="(option,index) in taskCategory" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="军衔(文职级)：">
                                                    <el-select class="form_select" v-model="form.rank" placeholder="请选择">
                                                        <el-option v-for="(option,index) in rank" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="籍贯：">
                                                    <el-select class="form_select" v-model="form.nativePalce" placeholder="请选择">
                                                        <el-option v-for="(option,index) in nativePalce" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="政治面貌：">
                                                    <el-select v-model="form.poliStatus" placeholder="请选择" class="form_select">
                                                        <el-option v-for="(option,index)  in poliStatus" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="是否主官：">
                                                    <el-radio-group v-model="form.isManager">
                                                        <el-radio label="1" size="medium">是</el-radio>
                                                        <el-radio label="2" size="medium">否</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>

                                        </el-row>
                                        <el-row :gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="出生日期：">
                                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.borthday"
                                                                    style="width: 100%;"></el-date-picker>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="参加工作时间：">
                                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date2"
                                                                    style="width: 100%;"></el-date-picker>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="入伍时间：">
                                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date3"
                                                                    style="width: 100%;"></el-date-picker>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="入党(团)时间：">
                                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.partyTime" style="width: 100%;"></el-date-picker>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="人大代表级别：">
                                                    <el-select v-model="form.npcNmember" placeholder="请选择" class="form_select">
                                                        <el-option v-for="(option,index) in npcNmember" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="政协委员级别：">
                                                    <el-select v-model="form.cppcc" placeholder="请选择" class="form_select">
                                                        <el-option v-for="(option,index) in cppcc" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                    </el-form>
                                </div>

                            </el-collapse-item>

                            <el-collapse-item id="menu3"  v-show="!hideMenuList.step03"  name="3">
                                 <template slot="title">
                                    <i class="header-icon el-icon-document"></i>
                                    <span>案件来源及调查情况</span>
                                </template>
                                <div class="form-content">
                                    <el-form class="form-label-top"  label-position='top' :model="form" :rules="rules">
                                        <el-row :gutter="20">
                                            <el-col :span="24">
                                                <el-form-item label="案件来源及调查情况：">
                                                    <el-input v-model="form.caseSource"  :autosize="{ minRows: 4}" class="area" type="textarea" placeholder="请输入内容">

                                                    </el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                    </el-form>
                                </div>

                            </el-collapse-item>
                            <el-collapse-item id="menu4"  v-show="!hideMenuList.step04" name="4">
                                <template slot="title">
                                    <i class="header-icon el-icon-info"></i><span class="title" style="    display: contents;">主要违纪事实</span>
                                    <el-button type="text" class="tab-btn-new" @click="addBreach">+新增</el-button>

                                </template>

                                <div class="form-content">
                                    <div>

                                    </div>
                                    <div class="form-content-box" v-for="(item,i) in breachList" :key="i">
                                        <div class="form-content-box-title">
                                            <el-form class="form-label-right"  label-position='right' :model="form" :rules="rules">
                                                <el-row>
                                                    <el-col :span="1">
                                                        <el-tag class="opacity_0">0{{index+1}}</el-tag>
                                                    </el-col>
                                                    <el-col :span="10">
                                                        <el-form-item style="font-weight: normal !important;left: -1%" label="问题类别:">
                                                            <el-select v-model="item.problemType" style="left: 4.5%" placeholder="请选择" class="form_select">
                                                                <el-option v-for="(option,index) in discipBehavior" :key="index"
                                                                           v-bind:label="option.value"
                                                                           v-bind:value="option.code"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="13">
                                                        <el-button type="text" @click="addBreachSubList(item,i)">+增加事实</el-button>
                                                        <el-button type="text" style="margin-left: 20px" @click="removeItem(item,i)"><i class="el-icon-error color-red font-size-24"></i></el-button>

                                                    </el-col>
                                                </el-row>
                                            </el-form>


                                        </div>
                                        <div class="form-content-box-body">
                                            <div class="form-content-box-body-item" >
                                                <el-form class="form-label-right"  label-position='right' :model="form" :rules="rules" v-for="(s,index) in item.subList" :key="index">
                                                    <el-row>
                                                        <el-col :span="1">
                                                            <el-tag>0{{index+1}}</el-tag>
                                                        </el-col>
                                                        <el-col :span="10">
                                                            <el-form-item label="违反事项：">
                                                                <el-select v-model="s.subDiscipBehavior" placeholder="请选择" class="form_select">
                                                                    <el-option v-for="(option,index) in subDiscipBehavior" :key="index"
                                                                               v-bind:label="option.value"
                                                                               v-bind:value="option.code"></el-option>
                                                                </el-select>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :span="10">
                                                            <el-form-item label="行业领域：">
                                                                <el-select v-model="s.industryField" placeholder="请选择" class="form_select">
                                                                    <el-option v-for="(option,index) in industryField" :key="index"
                                                                               v-bind:label="option.value"
                                                                               v-bind:value="option.code"></el-option>
                                                                </el-select>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :span="1">
                                                            <el-button type="text" style="margin-left: 20px" @click="removeSubItem(item,index)"><i class="el-icon-error color-red font-size-24" style="margin-top: -5px"></i></el-button>
                                                        </el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="1">
                                                            <el-tag class="opacity_0"> 01</el-tag>
                                                        </el-col>
                                                        <el-col :span="20">
                                                            <el-form-item label="主要事实：">
                                                                <el-input class="area"  :autosize="{ minRows: 4}" type="textarea" v-model="s.area" :row="3" placeholder="请输入内容">
                                                                </el-input>
                                                            </el-form-item>

                                                        </el-col>
                                                    </el-row>
                                                    <hr>
                                                </el-form>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </el-main>
                </el-container>
            </div>
            <div v-show="tabs1=='2'">
                <CasesAcceptedNew></CasesAcceptedNew>
            </div>




        </div>
        <div class="backplane-footer-center" v-if="pageFlag!='details'">
            <el-button type="primary"  v-show="pageFlag!='trialOpinionPageFlag'" @click="submitForm()">提交</el-button>
            <el-button type="success"  @click="saveForm()" >保存</el-button>
            <el-button @click="closeForm()">返回</el-button>
            <el-button  v-show="pageFlag=='trialOpinionPageFlag'" @click="goNext" >下一步</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    const selectData = require("store/selectData.json");
    const validate = require("../../../utils/validate.js");
    import CasesAcceptedNew from '../../pubicMAndC/modal/casesAcceptedNew.vue'



    @Component({
        props: ['pageFlag','myData'],
        components: {CasesAcceptedNew},
        data() {
            return {
                borthday: "",
                form: {
                    name: "",
                    name5:'',
                    secretGrade:'01',
                    transDepart:'',//移送部门
                    transDepart2:'',//部职别
                    date1: '',
                    name1:'',
                    departGrade:'',
                    category:'',//人员类别
                    idNum:'',
                    sex: "1",
                    nation:'',//民族
                    region: "",
                    professionRank:'',//职级
                    techGrade:'',
                    selectedOptionss:'',
                    positionGrade:'',//技术职务等级
                    rank:'',//军衔
                    nativePalce:'',//籍贯
                    poliStatus:'',//政治面貌
                    isManager:'1',//是否主管
                    borthday: "2019-01-01",
                    date2: '',
                    date3: '',
                    partyTime:'',
                    supervisedPersion:'01',
                    departCategory:'',
                    taskCategory:'',
                    npcNmember:'',//人大代表
                    cppcc:'',// 政协委员
                    industryField:'',//行业领域
                    discipBehavior:'',//违纪行为
                    subDiscipBehavior:'',//违纪行为子类
                    armySpecies:'',//军兵种
                    gender:'01',
                    identify:'',//身份证号码
                    isValide:'',
                    secretGrades:'',//审批权限
                    orgCategory:'',
                    caseSource:''
                },
                nation:selectData.nation,//民族
                nativePalce:selectData.nativePalce,//籍贯
                personnelCategory:selectData.personnelCategory,//人员类别
                transDepart:selectData.transDepart,//移送部门
                industryField:selectData.industryField,//行业领域
                professionRank:selectData.professionRank,//职级
                educationList:selectData.educationList,//学历
                rank:selectData.rank,//军衔
                npcNmember:selectData.npcNmember,//人大代表
                poliStatus:selectData.poliStatus,//政治面貌
                discipBehavior:selectData.discipBehavior,//违纪行为
                subDiscipBehavior:selectData.subDiscipBehavior,//违纪行为子类
                positionGrade:selectData.positionGrade,//技术职务等级
                departCategory:selectData.departCategory,//单位类别
                techGrade:selectData.techGrade,//技术等级
                taskCategory:selectData.taskCategory,//机关类别
                options:selectData.selectedOptions, //
                armySpecies:selectData.armySpecies, // 军兵种
                cppcc:selectData.cppcc,//政协委员级别
                formData:selectData.form,
                timeDefaultShow:new Date(),
                formLabelAlign: {

                },
                hideMenuList:{step01:false,step02:false,step03:false,step04:false,step05:false,step06:false,step07:false,step08:false},
                hideTabTreeFlag:false,

                //用于新增违纪行为
                discipBehaviorList: [{discipBehavior: ""}],
                activeNames: ['1', '2', '3', '4', '5', '6', '7', '8'],

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
        fileList:Array= [{name: '阅卷笔录材料1', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '阅卷笔录材料2', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        index=1
        subMenuItem: Array = [
            {
                title: "案件基本情况信息",
                active: true,
                id: 'menu1',
                eleBtnId: "eleBtnId1",
                eleId: 'menuName1'
            },
            {
                title: "处分对象基本情况信息",
                active: false,
                id: 'menu2',
                eleBtnId: "eleBtnId2",
                eleId: 'menuName2'
            },
            {
                title: "案件来源及调查情况",
                active: false,
                id: 'menu3',
                eleBtnId: "eleBtnId3",
                eleId: 'menuName3'
            },
            {
                title: "主要违纪事实",
                active: false,
                id: 'menu4',
                eleBtnId: "eleBtnId4",
                eleId: 'menuName4'
            }
        ]
        tabs1:string = '1';
//        tabs2:string = '1';
        rules = {
            name: [
                { required: true, message: "请输入活动名称", trigger: "blur" },
                { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
            ],
            idNum: [{ validator: validate.checkIdCardNo, trigger: "blur" }]
        };
        form={
            name: "",
            name5:'',
            secretGrade:'01',
            transDepart:'',//移送部门
            date1: '',
            name1:'',
            departGrade:'',
            category:'',//人员类别
            idNum:'',
            sex: "1",
            nation:'',//民族
            region: "",
            professionRank:'',//职级
            techGrade:'',
            selectedOptionss:'',
            positionGrade:'',//技术职务等级
            rank:'',//军衔
            nativePalce:'',//籍贯
            poliStatus:'',//政治面貌
            isManager:'1',//是否主管
            borthday: "2019-01-01",
            date2: '',
            date3: '',
            partyTime:'',
            supervisedPersion:'01',
            departCategory:'',
            taskCategory:'',
            npcNmember:'',//人大代表
            cppcc:'',// 政协委员
            industryField:'',//行业领域
            discipBehavior:'',//违纪行为
            subDiscipBehavior:'',//违纪行为子类
            armySpecies:'',//军兵种
            gender:'01',
            identify:'',//身份证号码
            isValide:'',
            secretGrades:'',//审批权限
            orgCategory:'',
            caseSource:''
        }
        hideMenuList={step01:false,step02:false,step03:false,step04:false,step05:false,step06:false,step07:false,step08:false}

        options = [
            {
                value: "选项1",
                label: "黄金糕"
            },
            {
                value: "选项2",
                label: "双皮奶"
            },
            {
                value: "选项3",
                label: "蚵仔煎"
            },
            {
                value: "选项4",
                label: "龙须面"
            },
            {
                value: "选项5",
                label: "北京烤鸭"
            }
        ];


        issueItem=''
//        disciplineList:[{code:"01", value:"违反政治纪律行为"}, {code:"01", value:"违反组织纪律行为"}, {code:"01", value:"违反廉洁纪律行为"},{code:"01", value:"违反群众纪律行为"}]
        breachList=[
            {
                problemType:"",
                test:'',
                subList:[
                    {
                        test:''
                    },
                    {
                        test:''
                    }
                ]
            }
        ]
        breachList1=[
            {
                problemType:"违反政治纪律行为",
                test:'',
                subList:[{subDiscipBehavior:"对抗组织审查",industryField:"经费管理",test:'',
                    area:" 2002年2月至2010年3月,xxx在组织对其问题线索进行初步核实、对其立案调查期间，多次与涉案人员串通、订立攻守同盟，转移藏匿脏款赃物。"}
                ]
            },
            {
                problemType:"违反政治纪律行为",
                test:'',
                subList:[{subDiscipBehavior:"对抗组织审查",industryField:"经费管理",test:'',
                    area:" 2002年2月至2010年3月,xxx在组织对其问题线索进行初步核实、对其立案调查期间，多次与涉案人员串通、订立攻守同盟，转移藏匿脏款赃物。"}
                ]
            }
        ]

        dialogFormVisible3:boolean=false
        issueItemFlag:boolean=false
        // 附件列表
        visaForm: object = {
            registerFiles: [], // 移送审理案件材料交接登记表
            batchFiles: [], // 案件移送审理呈批表

        }
        subMenuItem: Array = [
            {
                title: "案件基本情况信息",
                active: true,
                id: 'menu1',
                eleBtnId: "eleBtnId1",
                eleId: 'menuName1'
            },
            {
                title: "处分对象基本情况信息",
                active: false,
                id: 'menu2',
                eleBtnId: "eleBtnId2",
                eleId: 'menuName2'
            },
            {
                title: "案件来源及调查情况",
                active: false,
                id: 'menu3',
                eleBtnId: "eleBtnId3",
                eleId: 'menuName3'
            },
            {
                title: "主要违纪事实",
                active: false,
                id: 'menu4',
                eleBtnId: "eleBtnId4",
                eleId: 'menuName4'
            }
        ]


        menuGo(item) {
            item.active = true;
            for (let i = 1; i < 5; i++) {
                document.getElementById('menuName' + i).setAttribute('class', '')
//                document.getElementById('eleBtnId' + i).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')
            }
            this.subMenuItem.forEach(function (v) {
                if (v.id === item.id) {
                    v.active = true

                } else {
                    v.active = false
                }

            })
            document.getElementById(item.id).scrollIntoView();
        }

        // 获取附件信息
        setRegisterFiles(file, fileList) {
            this.visaForm.registerFiles.push(file)
            const date = new Date()
            for (let i = 0; i < this.visaForm.registerFiles.length; i++) {
                this.visaForm.registerFiles[i].documentname = this.visaForm.registerFiles[i].name
                this.visaForm.registerFiles[i].filesize = this.visaForm.registerFiles[i].size
                this.visaForm.registerFiles[i].documentdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
            }
        }

        setBatchFiles(file, fileList) {
            this.visaForm.batchFiles.push(file)
            const date = new Date()
            for (let i = 0; i < this.visaForm.batchFiles.length; i++) {
                this.visaForm.batchFiles[i].documentname = this.visaForm.batchFiles[i].name
                this.visaForm.batchFiles[i].filesize = this.visaForm.batchFiles[i].size
                this.visaForm.batchFiles[i].documentdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
            }
        }

        // 删除附件
        delBatchFiles(index) {
            this.visaForm.batchFiles.splice(index, 1)
        }

        delRegisterFiles(index) {
            this.visaForm.registerFiles.splice(index, 1)
        }
        /**
         * 身份证号码带出出生年月
         *
         */
        changeIdNo() {
            this.form.borthday = validate.strIdNumBorthday(
                this.form.idNum
            ).borthday;
            this.form.sex = validate.strIdNumBorthday(
                this.form.idNum
            ).sex;
        }
//      问题类别带出
        transferCheckArr(item){
            console.log(item)
            this.issueItem=item.join(',')
        }
//        增加违反事实
        addBreach(){
            this.breachList.push(
                {
                    test:'',
                    subList:[
                        {
                            test:'',
                        }
                    ]
                }
            )
        }
//        增加事实
        addBreachSubList(item,index){
            this.breachList[index].subList.push(
                {
                    test:'',
                }
            )
        }
        closeItem(){
            this.activeNames=['1','2','3','4']
        }
        //        删除违纪事实大类
        removeItem(item,index){
            this.$confirm('此操作将删除该条目, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.breachList.splice(index,1)
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
//        删除违纪行为
        removeSubItem(item,index){
            this.$confirm('此操作将删除该条目, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                item.subList.splice(index,1)
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });

        }
        getItemData(item){
            this.echoDetails(item);
            this.form.transDepart=item.workUnit
            this.form.date1=item.date
        }
        //表单回显
        echoDetails(item){
            this.form=this.formData;
            this.form.name5=item.caseSource;
            this.form.name=item.caseName;
            //  this.form.date1=item.receiveTime;
            this.form.name1=item.personName;
            this.breachList=this.breachList1;
        }
        goNext(){
            this.$emit('goNextPage')
        }
        mounted(){
            let subMenuItem=this.subMenuItem
            //给页面绑定滑轮滚动事件
            if (window.addEventListener) {//firefox
                window.addEventListener('scroll', function (e) {
                    console.log('aaa')
                    e = e || window.event;
                    for (let i = 1; i < 5; i++) {
                        if (document.getElementById('menu' + i) && document.getElementById('menu' + i).getBoundingClientRect()) {
                            if (document.getElementById('menu' + i).getBoundingClientRect().top > -900 && document.getElementById('menu' + i).getBoundingClientRect().top < 200) {
                                if (i > 1) {
                                    document.getElementById('menuName' + (i - 1)).setAttribute('class', '')

                                }
                                document.getElementById('menuName' + i).setAttribute('class', 'active_class')
                                subMenuItem.forEach((item,index)=>{
                                    if(i==index+1){
                                        item.active=true
                                    }else{
                                        item.active=false
                                    }
                                })
                            } else {
                                document.getElementById('menuName' + i).setAttribute('class', '')
                            }
                        }

                    }
//
                }, true);
            }
        }
        closeForm(){
            this.$emit("closePage");
        }
        saveForm(){
            this.$emit("closePage");
            this.$message({
			  type: "success",
			  message: "保存成功!"
			});
        }
        submitForm(){
            this.$confirm("确定提交该案件?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
            }).then(() => {
                this.$emit("closePage");
                this.$message({
                type: "success",
                message: "已提交!"
                });
            }).catch();
        }
    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>

</style>