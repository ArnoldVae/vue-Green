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
                <el-container>
                    <el-aside width="220px">
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
                        <!--<ul>-->
                            <!--<li v-for="(menu,index) in subMenuItem"-->
                                <!--:key="index" @click="menuGo(menu)">-->
                                <!--<el-button v-bind:id="menu.eleBtnId" v-bind:class="[menu.active ? 'active-btn-class' : '']"-->
                                           <!--class="tab-btn" circle size="small"></el-button>-->
                                <!--<h4 v-bind:id="menu.eleId"  v-bind:class="[menu.active ? 'active_class' : '']">{{index + 1}}{{menu.title}}</h4></li>-->
                        <!--</ul>-->
                    </el-aside>
                    <el-main>
                        <el-collapse v-model="activeNames1" class="collapse" >
                            <el-collapse-item id="menu1"  name="menu1">
                                <template slot="title">
                                    <i class="header-icon el-icon-info"></i>申诉基本情况信息
                                </template>
                                <div class="form-content">
                                    <el-form class="form-label-top" label-position='top' :model="formLabelAlign" :rules="rules">
                                        <el-row :gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="案件名称：" prop="name4">
                                                    <el-input v-model="formLabelAlign.name"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="申诉来源：" prop="name5">
                                                    <el-input v-model="formLabelAlign.departGrade"></el-input>
                                                </el-form-item>
                                            </el-col>

                                            <el-col :span="6">
                                                <el-form-item label="申诉事项：" prop="name7">
                                                    <el-input v-model="formLabelAlign.transDepart"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="是否重复申诉：" prop="name6">
                                                    <el-radio-group v-model="formLabelAlign.secretGrade">
                                                        <el-radio label="01">是</el-radio>
                                                        <el-radio label="02">否</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="关联案件：" prop="name5">
                                                    <el-input v-model="formLabelAlign.caseName" autocomplete="off" placeholder="请选择">
                                                        <template slot="append">选择</template>
                                                    </el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                    </el-form>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item id="menu2" name="menu2">
                                <template slot="title">
                                    <i class="header-icon el-icon-document"></i>申诉人基本情况信息
                                </template>
                                <div class="form-content">
                                    <el-form class="form-label-top" label-position='top' :model="formLabelAlign" :rules="rules">
                                        <el-row :gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="申诉人：" >
                                                    <el-input v-model="formLabelAlign.name"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="人员类别：">
                                                    <el-cascader expand-trigger="hover" class="form_select" v-model="formLabelAlign.category"></el-cascader>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="出生日期：">
                                                    <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.borthday"
                                                                    style="width: 100%;"></el-date-picker>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="政治面貌：">
                                                    <el-input v-model="formLabelAlign.name"></el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="20">
                                            <el-col :span="12">
                                                <el-form-item label="处分前部职别：" >
                                                    <el-input v-model="formLabelAlign.name"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-form-item label="处分后部职别：" prop="name1">
                                                    <el-input v-model="formLabelAlign.departGrade"></el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="20">

                                            <el-col :span="6">
                                                <el-form-item label="处分前职级：">
                                                    <el-input v-model="formLabelAlign.departGrade"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="处分后职级：">
                                                    <el-input v-model="formLabelAlign.name"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="处分前军衔：">
                                                    <el-input v-model="formLabelAlign.name"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="处分后军衔：">
                                                    <el-input v-model="formLabelAlign.name"></el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="参加工作时间：">
                                                    <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date2"
                                                                    style="width: 100%;"></el-date-picker>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="入伍时间：">
                                                    <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date3"
                                                                    style="width: 100%;"></el-date-picker>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="入党(团)时间：">
                                                    <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.partyTime" style="width: 100%;"></el-date-picker>
                                                </el-form-item>
                                            </el-col>



                                        </el-row>
                                    </el-form>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item id="menu3" name="menu3">
                                <template slot="title">
                                    <i class="header-icon el-icon-info"></i>主要违纪事实
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
                                                            <el-input v-model="formLabelAlign.departGrade"></el-input>
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
                                                <el-form class="form-label-right"  label-position='right' :model="formLabelAlign" :rules="rules" v-for="(s,index) in item.subList" :key="index">
                                                    <el-row>
                                                        <el-col :span="1">
                                                            <el-tag>0{{index+1}}</el-tag>
                                                        </el-col>
                                                        <el-col :span="10">
                                                            <el-form-item label="违反事项：">
                                                                <el-input v-model="formLabelAlign.departGrade"></el-input>
                                                            </el-form-item>
                                                        </el-col>
                                                        <el-col :span="10">
                                                            <el-form-item label="行业领域：">
                                                                <el-input v-model="formLabelAlign.departGrade"></el-input>
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
                                                                <el-input class="area" type="textarea" v-model="s.area" :row="3" placeholder="请输入内容">
                                                                </el-input>
                                                            </el-form-item>

                                                        </el-col>
                                                    </el-row>
                                                    <hr style="background-color:#efefef;border: none;height: 1px;">
                                                </el-form>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item id="menu4" title="处分情况" name="menu4">
                                <div class="form-content">
                                    <el-form class="form-label-top"  label-position='top' :model="formLabelAlign" :rules="rules">
                                        <el-row :gutter=20>
                                            <el-col :span="6">
                                                <el-form-item label="党纪处分:">
                                                    <el-input v-model="formLabelAlign.departGrade"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="批准时间:">
                                                    <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date"
                                                                    style="width: 100%;"></el-date-picker>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="审批权限:">
                                                    <el-input v-model="formLabelAlign.departGrade"></el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter=20>
                                            <el-col :span="6">
                                                <el-form-item label="军纪处分:">
                                                    <el-input v-model="formLabelAlign.departGrade"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="批准时间:">
                                                    <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date"
                                                                    style="width: 100%;"></el-date-picker>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="审批权限:">
                                                    <el-input v-model="formLabelAlign.departGrade"></el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                    </el-form>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item id="menu5"  name="menu5" >
                                <template slot="title" >
                                    <i class="header-icon el-icon-document"></i> <span class="title">受理情况</span>
                                </template>
                                <div class="form-content">
                                    <el-form class="form-label-top"  label-position='top' :model="formLabelAlign" :rules="rules">
                                        <el-row :gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="是否转送：" prop="namew">
                                                    <el-radio-group v-model="formLabelAlign.isValide">
                                                        <el-radio label="01">是</el-radio>
                                                        <el-radio label="02">否</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-form-item label="转送单位：" prop="name" v-if="formLabelAlign.isValide=='01'">
                                                    <el-input v-model="formLabelAlign.name"></el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="20" v-if="formLabelAlign.isValide=='02'">
                                            <el-col :span="6">
                                                <el-form-item label="受理时间：" prop="name4">
                                                    <el-date-picker v-model="formLabelAlign.date" type="date" placeholder="选择日期"></el-date-picker>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-form-item label="承办人：" prop="name5">
                                                    <el-input v-model="formLabelAlign.departGrade"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="审理方式：" prop="name5">
                                                    <el-input v-model="formLabelAlign.departGrade"></el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>

                                        <el-row :gutter="20" v-if="formLabelAlign.isValide=='02'">
                                            <el-col :span="6">
                                                <el-form-item label="受理期限(天数)：">
                                                    <el-input v-model="formLabelAlign.value2"></el-input>

                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="红色预警期限(天数)：" prop="value4">
                                                    <el-input v-model="formLabelAlign.value4"></el-input>

                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="黄色预警期限(天数)：" prop="value4">
                                                    <el-input v-model="formLabelAlign.value5"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="蓝色预警期限(天数)：" prop="value4">
                                                    <el-input v-model="formLabelAlign.value6"></el-input>

                                                </el-form-item>
                                            </el-col>
                                        </el-row>

                                        <el-row :gutter="20" v-if="formLabelAlign.isValide=='02'">
                                            <el-col :span="18">
                                                <el-form-item label="领导签批意见：">
                                                    <el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
                                                </el-form-item>
                                            </el-col>

                                        </el-row>
                                    </el-form>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item id="menu6"  name="menu6" v-if="formLabelAlign.isValide=='02'">
                                <template slot="title">
                                    <i class="header-icon el-icon-document"></i><span  class="title">上传材料信息</span>
                                </template>
                                <div class="form-content" style="padding: 0">
                                    <div class="my-file-table">
                                        <div class="item-main" >
                                            <el-row>
                                                <el-col :span="14" class="col-title"> <p>领导签批单</p></el-col>
                                                <el-col :span="3">
                                                    <el-upload
                                                            class="upload-demo"
                                                            action="https://jsonplaceholder.typicode.com/posts/"
                                                            :on-preview="handlePreview"
                                                            :on-remove="handleRemove"
                                                            :before-remove="beforeRemove"
                                                            multiple
                                                            :show-file-list="false"
                                                            :limit="3"
                                                            :on-exceed="handleExceed"
                                                            :file-list="fileList">
                                                        <el-button  size="small"  type="primary"><i class="el-icon-upload"></i> 本地上传</el-button>
                                                    </el-upload>
                                                </el-col>
                                                <el-col :span="3">
                                                    <el-upload
                                                            class="upload-demo"
                                                            action="https://jsonplaceholder.typicode.com/posts/"
                                                            :on-preview="handlePreview"
                                                            :on-remove="handleRemove"
                                                            :before-remove="beforeRemove"
                                                            multiple
                                                            :show-file-list="false"
                                                            :limit="3"
                                                            :on-exceed="handleExceed"
                                                            :file-list="fileList">
                                                        <el-button  size="small"  type="success"><i class="el-icon-printer"></i> 扫描上传</el-button>
                                                    </el-upload>
                                                </el-col>
                                                <el-col :span="3">
                                                    <el-upload
                                                            class="upload-demo"
                                                            action="https://jsonplaceholder.typicode.com/posts/"
                                                            :on-preview="handlePreview"
                                                            :on-remove="handleRemove"
                                                            :before-remove="beforeRemove"
                                                            multiple
                                                            :show-file-list="false"
                                                            :limit="3"
                                                            :on-exceed="handleExceed"
                                                            :file-list="fileList">
                                                        <el-button  size="small" type="warning"> <i class="el-icon-picture"></i>高拍仪上传</el-button>
                                                    </el-upload>
                                                </el-col>
                                            </el-row>
                                            <el-row v-for="(f,index) in fileList">
                                                <el-col :span="16" class="text-left"><span>文件{{index+1}}：{{f.name}}</span></el-col>
                                                <el-col :span="8" >
                                                    <el-button  size="small"><i class="el-icon-download"></i>下载</el-button>
                                                    <el-button  size="small"><i class="el-icon-search"></i>查看</el-button>
                                                    <el-button  size="small" @click="beforeRemove(index)"><i class="el-icon-delete"></i>删除</el-button>
                                                </el-col>
                                            </el-row>
                                            <hr>
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

        <div class="backplane-footer-center">
            <el-button type="primary" @click="stateTrans">提交</el-button>
            <el-button type="success" >保存</el-button>
            <el-button >取消</el-button>

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    const validate = require("../../../utils/validate.js");
    import CasesAcceptedNew from '../../pubicMAndC/modal/casesAcceptedNew.vue'



    @Component({
        props: [''],
        components: {CasesAcceptedNew},
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
        fileList:Array= [{name: '阅卷笔录材料1', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '阅卷笔录材料2', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        index=1
        subMenuItem: Array = [
            {
                title: "案件基本情况信息都市计划建设的",
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
        activeNames1:Array<string> =  ['menu1','menu2'];
        activeNames2:Array<string> =  ['menu3'];
        formLabelAlign = {
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
        rules = {
            name: [
                { required: true, message: "请输入活动名称", trigger: "blur" },
                { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
            ],
            idNum: [{ validator: validate.checkIdCardNo, trigger: "blur" }]
        };
        form={}
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
        stateTrans(){

        }
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
        addBreach(){

        }
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
        mounted(){
            let subMenuItem=this.subMenuItem;
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
//                                    document.getElementById('eleBtnId' + (i - 1)).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')
//                                    subMenuItem.forEach((item,index)=>{
//                                        if(i==index+2){
//                                            item.active=false
//                                        }
//                                    })
                                }
                                document.getElementById('menuName' + i).setAttribute('class', 'active_class')
                                subMenuItem.forEach((item,index)=>{
                                    if(i==index+1){
                                        item.active=true
                                    }else{
                                        item.active=false
                                    }
                                })

//                                document.getElementById('eleBtnId' + i).setAttribute('class', 'active-btn-class el-button tab-btn el-button--default el-button--small is-circle')
                            } else {
                                document.getElementById('menuName' + i).setAttribute('class', '')
//                                subMenuItem.forEach((item,index)=>{
//                                    if(i==index){
//                                        item.active=false
//                                    }
//                                })
//                                document.getElementById('eleBtnId' + i).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')
                            }
                        }

                    }
//
                }, true);
            }
        }

    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>

</style>