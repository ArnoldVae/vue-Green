<template>
<!-- 案件登记 -->
  <div class="dialog">
    <div onscroll="scrollFunc()" style="text-align: center;margin-left: 10%; margin-right:10%">
      <!-- <el-aside width="220px" class="el-select-tab" >
          <ul style="list-style-type:none;height:800px">
              <li style="height: 20px;cursor: pointer;" v-bind:id="menu.eleId" v-bind:class="[menu.active ? 'active_class' : '']" v-for="(menu,index) in subMenuItem" :key="index" @click="menuGo(menu)"><el-button  v-bind:id="menu.eleBtnId"  v-bind:class="[menu.active ? 'active-btn-class' : '']"  class="tab-btn" circle size="small"></el-button><h4 >{{index+1}}{{menu.title}}</h4></li>
          </ul>
      </el-aside> -->
      <el-main >
            <el-collapse v-model="activeNames">
                <el-collapse-item  id="menu1" name="1" v-show="!hideMenuList.step01">
                    <template slot="title">
                            <i class="header-icon el-icon-info"></i>申诉基本信息
                        </template>
                    <div class="form-content">
                        <el-form label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="案件编号:" prop="name">
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="案件名称:" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="案件密级:" prop="name">
                                        <el-radio-group v-model="form.resource">
                                            <el-radio label="秘密"></el-radio>
                                            <el-radio label="机密"></el-radio>
                                            <el-radio label="绝密"></el-radio>
                                            <el-radio label="不涉密"></el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="接收时间:" prop="name">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item id="menu2" v-show="!hideMenuList.step02" name="2">
                    <template slot="title">
                            <i class="header-icon el-icon-document"></i>申诉人基本信息
                        </template>
                    <div class="form-content">
                        <el-form label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="姓名:" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="性别:" prop="name">
                                        <el-radio-group v-model="form.resource">
                                            <el-radio label="男" size="medium"></el-radio>
                                            <el-radio label="女" size="medium"></el-radio>
                                            <el-radio label="不详" size="medium"></el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="出生日期:" prop="name">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="民族:" prop="name">
                                    <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                        <el-option label="汉族" value="shanghai"></el-option>
                                    </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                 <el-col :span="6">
                                    <el-form-item label="处分前职级:">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="(option,index) in rankList" :key="index"  v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="处分前工作单位:">
                                    <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                        <el-option v-for="(option,index) in identityList" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                    </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="处分前职务:">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="(option,index)  in identityList" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="政治面貌:" prop="name">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="(option,index)  in faceList" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="处分后职级:">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="(option,index) in rankList" :key="index"  v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                
                                <el-col :span="6">
                                    <el-form-item label="处分后工作单位:">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="(option,index)  in rankList" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="处分后职务:">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="(option,index) in rankList" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>
               <el-collapse-item  id="menu1" v-show="!hideMenuList.step03" name="3">
                   <template slot="title">
                            <i class="header-icon el-icon-document"></i>原处理情况
                        </template>
                    <div class="form-content">
                        <el-form label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="移送司法:" >
                                        <el-radio-group v-model="form.resource">
                                            <el-radio label="是"></el-radio>
                                            <el-radio label="否"></el-radio>
                                        </el-radio-group> 
                                    </el-form-item>
                                </el-col>
                                
                              <el-col :span="6">
                                    <el-form-item label="司法情况处理:" >
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                            
                                <el-col :span="6">
                                    <el-form-item label="解除处分时间:" >
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                </el-row>
                                 <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="党纪处分:" >
                                       <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="(option,index) in rankList" :key="index"  v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                
                              <el-col :span="6">
                                    <el-form-item label="给予处分单位:" >
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="(option,index) in rankList" :key="index"  v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select> 
                                    </el-form-item>
                                </el-col>
                            
                                <el-col :span="6">
                                    <el-form-item label="给予处分时间:" >
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                </el-row>
                                 <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="政务处分:" >
                                       <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="(option,index) in rankList" :key="index"  v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                
                              <el-col :span="6">
                                    <el-form-item label="给予处分单位:" >
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="(option,index) in rankList" :key="index"  v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select> 
                                    </el-form-item>
                                </el-col>
                            
                                <el-col :span="6">
                                    <el-form-item label="给予处分时间:" >
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>
                            
               
               
               <el-collapse-item  id="menu1" title="案件分发信息" v-show="!hideMenuList.step04" name="4">
                    <div class="form-content">
                        <el-form label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="承办处:" >
                                       <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="(option,index) in rankList" :key="index"  v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                
                              <el-col :span="6">
                                    <el-form-item label="承办人:" prop="name">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="(option,index) in rankList" :key="index"  v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select> 
                                    </el-form-item>
                                </el-col>
                            
                                <el-col :span="6">
                                    <el-form-item label="签收天数:" prop="name">
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                                </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>
               
               
            </el-collapse>
            <div  class="margin_top_4 margin_left_0" v-show="!hideTabTreeFlag">
                <el-button type="primary" >分发</el-button>
                <el-button type="primary" plain>保存</el-button>
                <el-button type="warning" plain>取消</el-button>
            </div>
      </el-main>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {},
        props: ['pageFlag'],
        data() {
            return {
                steps:[
                        {id:'step01',active:true,name:'申诉基本信息'},
                        {id:'step02',active:false,name:'申诉人基本信息'},
                        {id:'step03',active:false,name:'原处理情况'},
                        {id:'step04',active:false,name:'分发信息'},
                    ],
                visaObj: {},
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },
                hideMenuList:{step01:false,step02:false,step03:false,step04:false,step05:false,step06:false,step07:false,step08:false},
                hideTabTreeFlag:false,
//        企业性质（下拉）
                businessNatureList: [{code: "01", value: "国有或国有控股企业"}, {code: "01", value: "集体企业"}, {
                    code: "01",
                    value: "私营企业"
                }, {code: "01", value: "其他内资企业"}, {code: "01", value: "外商及港澳台资企业"}],
//        职级列表（下拉）
                rankList: [{code: "01", value: "正省部级"}, {code: "01", value: "副省部级"}, {
                    code: "01",
                    value: "正厅局级"
                }, {code: "01", value: "副厅局级"}, {code: "01", value: "正县处级"}, {code: "01", value: "副县处级"}],
//        政治面貌下拉
                faceList: [{code: "01", value: "党组织"}, {code: "01", value: "中共党员"}, {
                    code: "01",
                    value: "共青团员"
                }, {code: "01", value: "民主党派"}, {code: "01", value: "无党派"}, {code: "01", value: "其他"}],
//        承办处下拉
                undertakeList: [{code: "01", value: "审理一处"}, {code: "01", value: "审理一处附属办公室"}, {
                    code: "01",
                    value: "审理二处"
                }, {code: "01", value: "中央测试"}],
//        承办人
                undertakerList: [{code: "01", value: "测试一"}, {code: "01", value: "测试二"}, {
                    code: "01",
                    value: "测试三"
                }, {code: "01", value: "测试四"}],
//        民族下拉
                nationList: [{code: "01", value: "汉族"}, {code: "01", value: "蒙古族"}, {
                    code: "01",
                    value: "回族"
                }, {code: "01", value: "维吾尔族"}],
//        籍贯下拉
                nativeList: [{code: "01", value: "北京市"}, {code: "01", value: "河北省"}, {
                    code: "01",
                    value: "天津市"
                }, {code: "01", value: "浙江省"}],
//        学历下拉
                educationList: [{code: "01", value: "博士研究生"}, {code: "01", value: "硕士研究生"}, {
                    code: "01",
                    value: "大学本科"
                }, {code: "01", value: "大专"}, {code: "01", value: "中专"}, {code: "01", value: "高中"}, {
                    code: "01",
                    value: "其他"
                }],
//        人员身份（下拉）
                identityList: [{code: "01", value: "中管干部"}, {code: "01", value: "省管干部"}, {
                    code: "01",
                    value: "市管干部"
                }, {code: "01", value: "县管干部"}, {code: "01", value: "企业领导人员"}, {
                    code: "01",
                    value: "中层管理人员"
                }, {code: "01", value: "其他人员"}],
//        部门分类列表
                departmentList: [{code: "01", value: "党务机关"}, {code: "01", value: "政府机关"}, {
                    code: "01",
                    value: "人大机关"
                }, {code: "01", value: "政协机关"}, {code: "01", value: "审判机关"}, {code: "01", value: "检查机关"}, {
                    code: "01",
                    value: "人民团体"
                }],
//        身份类型下拉
                identityClassList: [{code: "01", value: "党务机关"}, {code: "01", value: "政府机关"}, {
                    code: "01",
                    value: "人大机关"
                }, {code: "01", value: "政协机关"}, {code: "01", value: "审判机关"}, {code: "01", value: "检查机关"}, {
                    code: "01",
                    value: "人民团体"
                }],
//        党代表级别下拉
                // identityClassList:[{code:"01", value:"全国"}, {code:"01", value:"省级"}, {code:"01", value:"市级"},{code:"01", value:"县级"}],
//        违纪行为下拉
                disciplineList: [{code: "01", value: "违反政治纪律行为"}, {code: "01", value: "违反组织纪律行为"}, {
                    code: "01",
                    value: "违反廉洁纪律行为"
                }, {code: "01", value: "违反群众纪律行为"}],
                disciplineObjList: [{code: "01", value: "违反政治纪律行为", test: ""}],

                activeNames: ['1', '2', '3', '4', '5', '6', '7', '8'],

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
//            判断父组件标志
            if(this.pageFlag){
                if(this.pageFlag=='caseSup'){
                    this.hideTabTreeFlag=true;
                    this.hideMenuList= {step01:false,step02:true,step03:true,step04:true,step05:true,step06:true,step07:true,step08:true}
                }
            }
            //给页面绑定滑轮滚动事件
            if (window.addEventListener&&!this.hideTabTreeFlag) {//firefox
                window.addEventListener('scroll', function (e) {
                    e = e || window.event;
                    for (let i = 1; i < 9; i++) {
                        if (document.getElementById('menu' + i) && document.getElementById('menu' + i).getBoundingClientRect()) {
                            if (document.getElementById('menu' + i).getBoundingClientRect().top > -900 && document.getElementById('menu' + i).getBoundingClientRect().top < 200) {
                                if (i > 1) {
                                    document.getElementById('menuName' + (i - 1)).setAttribute('class', '')
                                    document.getElementById('eleBtnId' + (i - 1)).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')

                                }
                                document.getElementById('menuName' + i).setAttribute('class', 'active_class')
                                document.getElementById('eleBtnId' + i).setAttribute('class', 'active-btn-class el-button tab-btn el-button--default el-button--small is-circle')
                            } else {
                                document.getElementById('menuName' + i).setAttribute('class', '')
                                document.getElementById('eleBtnId' + i).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')
                            }
                        }

                    }
//
                }, true);
            }
            //   window.onmousewheel = window.onmousewheel = scrollFunc;
        },
        methods: {
            parentMethod(target:string,pageIndex:string) {
                if(target=='caseSup'){
                    console.log(this.hideMenuList);
                    for (let key in this.hideMenuList) {
                        if(key == pageIndex){
                            this.hideMenuList[key]=false;
                        }else{
                            this.hideMenuList[key]=true
                        }
                    }
                }

            }
        }
    })
    export default class caseSupplement extends Vue {


        // 附件列表
        visaForm: object = {
            registerFiles: [], // 移送审理案件材料交接登记表
            batchFiles: [], // 案件移送审理呈批表

        }
        subMenuItem: Array = [
            {
                title: "案件审查/调查基本信息",
                active: true,
                id: 'menu1',
                eleBtnId: "eleBtnId1",
                eleId: 'menuName1'
            },
            {
                title: "被调查人员",
                active: false,
                id: 'menu2',
                eleBtnId: "eleBtnId2",
                eleId: 'menuName2'
            },
            {
                title: "违纪行为",
                active: false,
                id: 'menu3',
                eleBtnId: "eleBtnId3",
                eleId: 'menuName3'
            },
            {
                title: "案件审核/调查基本情况",
                active: false,
                id: 'menu4',
                eleBtnId: "eleBtnId4",
                eleId: 'menuName4'
            },
            {
                title: "涉案款物基本情况",
                active: false,
                id: 'menu5',
                eleBtnId: "eleBtnId5",
                eleId: 'menuName5'
            }, {
                title: "潜逃终止情况",
                active: false,
                id: 'menu6',
                eleBtnId: "eleBtnId6",
                eleId: 'menuName6'
            },
            {
                title: "案件分发情况",
                active: false,
                eleBtnId: "eleBtnId7",
                id: 'menu7',
                eleId: 'menuName7'
            },
            {
                title: "上传材料信息",
                active: false,
                eleBtnId: "eleBtnId8",
                id: 'menu8',
                eleId: 'menuName8'
            }
        ]

        addDisciplineObjList() {
            console.log(this.disciplineObjList)
            this.disciplineObjList.push({
                test: ''
            })
        }

        menuGo(item) {
            item.active = true;
            for (let i = 1; i < 9; i++) {
                document.getElementById('menuName' + i).setAttribute('class', '')
                document.getElementById('eleBtnId' + i).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')
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
    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
    .el-collapse-item{
        /deep/.el-collapse-item__header{
            padding-left: 2%;
            font-size: 14px;
            border: 1px solid #dee1e7;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            color: #2f76dd;
        }
    }
    /*.el-dialog{*/
        /*/deep/.el-dialog__title span{*/
            /*color: #1c51ab;*/

        /*}*/
        /*/deep/.dialog{*/
            /*background: #f6f6f6;*/
            /*height:100%;*/
            /*margin: 0;*/
        /*}*/

    /*}*/


    .tab-content {
        border: 1px solid #dee1e7;
        padding: 26px;
        border-top: navajowhite;
        border-top-style: none;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        text-align: left
    }

    .form-content {
        border: 1px solid #dee1e7;
        padding: 26px;
        border-top: navajowhite;
        border-top-style: none;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        text-align: left;
        /deep/ .el-form-item__label {
            font-size: 16px;
            font-weight: bold;
        }
    }
    .el-main{
        margin-left: 15%;
    }
    .active_class h4{
        color: #2f76dd;
        font-weight: normal;
    }
    .active-btn-class{
        background: #2f76dd;
    }
</style>






