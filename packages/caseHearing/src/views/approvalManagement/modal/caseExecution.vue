<template>
<!-- 案件登记 -->
  <div class="dialog">
      <div class="openLaw_case">
      <img title="案件法规" src="img/Regulations.png">
    </div>
    <div onscroll="scrollFunc()" style="text-align: center;margin-left: 10%; margin-right:10%">
      <el-main >
            <el-collapse v-model="activeNames">
                
                <el-collapse-item id="menu2" title="涉案人员信息" name="2">
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
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="职级:" >
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="职务:" >
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>
                
               <el-collapse-item  id="menu1" title="处分执行反馈情况" name="1" >
                    <div class="form-content">
                        <el-form label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                              <el-col :span="6">
                                    <el-form-item label="送达人:" >
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                            
                                <el-col :span="6">
                                    <el-form-item label="送达时间:" >
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                
                                
                                <el-col :span="6">
                                    <el-form-item label="送达方式:" >
                                       <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="(option,index) in rankList" :key="index"  v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="政务处分送达时间:" >
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                </el-row>
                                 <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="司法移送时间:" >
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>  
                              <el-col :span="6">
                                    <el-form-item label="涉案款物执行送达时间:" >
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker> 
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="处分责任单位:" >
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="处分责任人:" >
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="6">
                                    <el-form-item label="处分责任领导:" >
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="党纪处分执行情况反馈时间:" >
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>  
                                <el-col :span="6">
                                    <el-form-item label="政务处分执行情况反馈时间:" >
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col> 
                                </el-row> 

                                <el-row style="margin: 10px auto;">
                                <el-tabs v-model="activeName" >
                                <el-tab-pane label="交送本人情况" >
                                    <input type="text" autocomplete="off" class="el-input__inner" style="height: 302px; width: 960px;">
                                </el-tab-pane>
                                <el-tab-pane label="宣布情况及范围">
                                    <input type="text" autocomplete="off" class="el-input__inner" style="height: 302px; width: 960px;">
                                </el-tab-pane>
                                </el-tabs>
                                 </el-row>
                           

                        </el-form>
                    </div>
                </el-collapse-item>
                
                <el-collapse-item id="menu8" title="上传附件" name="8">
                        <div class="tab-content">
                            <h3>人员交接单</h3>
                            <el-row>
                                <el-col :span="12" :offset="12" style="text-align: right;">
                                    <el-upload
                                            multiple
                                            :on-change="setRegisterFiles"
                                            :action="''"
                                            ref="changeFile"
                                            :auto-upload="false"
                                            :file-list="visaForm.registerFiles"
                                            :show-file-list="false"
                                            :data="visaObj">
                                        <el-button type="text" size="small" class="font-size-14"><i
                                                class="el-icon-upload2">&nbsp;</i>上传
                                        </el-button>
                                    </el-upload>
                                </el-col>
                            </el-row>
                            <el-row>
                                <div class="dev_show_table">
                                    <el-table highlight-current-row border
                                              :data="visaForm.registerFiles"
                                              size="small"
                                              :header-cell-style="{background:'#f3f3f3', 'text-align': 'center', color: '#666',fontSize:'13px',height:'35px',border:'0.5px solid #e5e5e5',padding:'6px 0',fontWeight:'500'}">
                                        <el-table-column type="index" label="序号" align="center" width="50"/>
                                        <el-table-column show-overflow-tooltip prop="documentname" label="附件"
                                                         header-align="center" align="center"/>
                                        <el-table-column prop="documentdate" align="center" label="上传时间" width="150px">
                                            <template slot-scope="scope">
                                                {{ scope.row.documentdate | formatDate }}
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="" align="center" label="操作" width="150px">
                                            <template slot-scope="scope">
                                                <el-button-group class="button_group">
                                                    <el-row :gutter="20">
                                                        <el-col :span="8">
                                                            <el-button type="text" size="small"
                                                                       @click="delRegisterFiles(scope.$index)">删除
                                                            </el-button>
                                                        </el-col>
                                                    </el-row>
                                                </el-button-group>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-row>
                            
                        </div>
                    </el-collapse-item>          
                  
            </el-collapse>
            
            <div  class="margin_top_4 margin_left_0">
                <el-button type="primary" >提交</el-button>
                <el-button type="success" >保存</el-button>
                <el-button >关闭</el-button>
            </div>
      </el-main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
  data() {
    return {
      steps:[
        {id:'step01',active:true,name:'案件审查/调查基本信息'},
        {id:'step02',active:false,name:'被审查调查人员'},
        {id:'step03',active:false,name:'违纪行为'},
        {id:'step04',active:false,name:'案件审查/调查基本情况'},
        {id:'step05',active:false,name:'涉案款物基本情况'},
        {id:'step06',active:false,name:'潜逃终止情况'},
        {id:'step07',active:false,name:'案件分发信息'},
        {id:'step08',active:false,name:'上传材料信息'},
      ],
      formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
//        企业性质（下拉）
        businessNatureList:[{code:"01", value:"国有或国有控股企业"}, {code:"01", value:"集体企业"}, {code:"01", value:"私营企业"},{code:"01", value:"其他内资企业"},{code:"01", value:"外商及港澳台资企业"}],
//        职级列表（下拉）
        rankList:[{code:"01", value:"正省部级"}, {code:"01", value:"副省部级"}, {code:"01", value:"正厅局级"},{code:"01", value:"副厅局级"},{code:"01", value:"正县处级"},{code:"01", value:"副县处级"}],
//        政治面貌下拉
        faceList:[{code:"01", value:"党组织"}, {code:"01", value:"中共党员"}, {code:"01", value:"共青团员"},{code:"01", value:"民主党派"},{code:"01", value:"无党派"},{code:"01", value:"其他"}],
//        承办处下拉
        undertakeList:[{code:"01", value:"审理一处"}, {code:"01", value:"审理一处附属办公室"}, {code:"01", value:"审理二处"},{code:"01", value:"中央测试"}],
//        承办人
        undertakerList:[{code:"01", value:"测试一"}, {code:"01", value:"测试二"}, {code:"01", value:"测试三"},{code:"01", value:"测试四"}],
//        民族下拉
        nationList:[{code:"01", value:"汉族"}, {code:"01", value:"蒙古族"}, {code:"01", value:"回族"},{code:"01", value:"维吾尔族"}],
//        籍贯下拉
        nativeList:[{code:"01", value:"北京市"}, {code:"01", value:"河北省"}, {code:"01", value:"天津市"},{code:"01", value:"浙江省"}],
//        学历下拉
        educationList:[{code:"01", value:"博士研究生"}, {code:"01", value:"硕士研究生"}, {code:"01", value:"大学本科"},{code:"01", value:"大专"},{code:"01", value:"中专"},{code:"01", value:"高中"},{code:"01", value:"其他"}],
//        人员身份（下拉）
        identityList:[{code:"01", value:"中管干部"}, {code:"01", value:"省管干部"}, {code:"01", value:"市管干部"},{code:"01", value:"县管干部"},{code:"01", value:"企业领导人员"},{code:"01", value:"中层管理人员"},{code:"01", value:"其他人员"}],
//        部门分类列表
        departmentList:[{code:"01", value:"党务机关"}, {code:"01", value:"政府机关"}, {code:"01", value:"人大机关"},{code:"01", value:"政协机关"},{code:"01", value:"审判机关"},{code:"01", value:"检查机关"},{code:"01", value:"人民团体"}],
//        身份类型下拉
        identityClassList:[{code:"01", value:"党务机关"}, {code:"01", value:"政府机关"}, {code:"01", value:"人大机关"},{code:"01", value:"政协机关"},{code:"01", value:"审判机关"},{code:"01", value:"检查机关"},{code:"01", value:"人民团体"}],
//        党代表级别下拉
        // identityClassList:[{code:"01", value:"全国"}, {code:"01", value:"省级"}, {code:"01", value:"市级"},{code:"01", value:"县级"}],
//        违纪行为下拉
        disciplineList:[{code:"01", value:"违反政治纪律行为"}, {code:"01", value:"违反组织纪律行为"}, {code:"01", value:"违反廉洁纪律行为"},{code:"01", value:"违反群众纪律行为"}],
        disciplineObjList:[{code:"01", value:"违反政治纪律行为",test:""}],
        activeNames:['1','2','3','4','5','6','7','8'],
        
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
                { required: true, message: '请输入', trigger: 'blur' }
            ],
        }
    };
  },

    created() {},
    mounted(){
//给页面绑定滑轮滚动事件
//       if (window.addEventListener) {//firefox
//           window.addEventListener('scroll', function (e) {
//               e = e || window.event;
//               for ( let i=1;i<9;i++){
//                   if(document.getElementById('menu'+ i)&&document.getElementById('menu'+ i).getBoundingClientRect()){
//                       if(document.getElementById('menu'+ i).getBoundingClientRect().top>-300&&document.getElementById('menu'+ i).getBoundingClientRect().top<150){
//                           if(i > 1){
//                               document.getElementById('menuName'+ (i-1)).setAttribute('class','')
//                               document.getElementById('eleBtnId'+ (i-1)).setAttribute('class','el-button tab-btn el-button--default el-button--small is-circle')

//                           }
//                           document.getElementById('menuName'+ i).setAttribute('class','active_class')
//                           document.getElementById('eleBtnId'+ i).setAttribute('class','active-btn-class el-button tab-btn el-button--default el-button--small is-circle')
//                       }else {
//                           document.getElementById('menuName'+ i).setAttribute('class','')
//                           document.getElementById('eleBtnId'+ i).setAttribute('class','el-button tab-btn el-button--default el-button--small is-circle')
//                       }
//                   }

//               }
// //
//           }, true);
//       }
    //   window.onmousewheel = window.onmousewheel = scrollFunc;
  },
  methods: {}
})
export default class caseSupplement extends Vue {
    // 附件列表
    visaForm :object = {
        registerFiles : [], // 移送审理案件材料交接登记表
        batchFiles : [] // 案件移送审理呈批表
    }
    subMenuItem:Array = [
            {
                title:"案件审查/调查基本信息",
                active:true,
                id:'menu1',
                eleBtnId:"eleBtnId1",
                eleId:'menuName1'
            },
            {
                title:"被调查人员",
                active:false,
                id:'menu2',
                eleBtnId:"eleBtnId2",
                eleId:'menuName2'
            },
            {
                title:"违纪行为",
                active:false,
                id:'menu3',
                eleBtnId:"eleBtnId3",
                eleId:'menuName3'
            },
            {
                title:"案件审核/调查基本情况",
                active:false,
                id:'menu4',
                eleBtnId:"eleBtnId4",
                eleId:'menuName4'
            },
            {
                title:"涉案款物基本情况",
                active:false,
                id:'menu5',
                eleBtnId:"eleBtnId5",
                eleId:'menuName5'
            }, {
                title:"潜逃终止情况",
                active:false,
                id:'menu6',
                eleBtnId:"eleBtnId6",
                eleId:'menuName6'
            },
            {
                title:"案件分发情况",
                active:false,
                eleBtnId:"eleBtnId7",
                id:'menu7',
                eleId:'menuName7'
            },
            {
                title:"上传材料信息",
                active:false,
                eleBtnId:"eleBtnId8",
                id:'menu8',
                eleId:'menuName8'
            }
        ]
    addDisciplineObjList(){
        // this.disciplineObjList.push({
        //     test:""
        // })
    }
    menuGo(item) {
          item.active=true;
          for ( let i=1;i<9;i++){
              document.getElementById('menuName'+ i).setAttribute('class','')
              document.getElementById('eleBtnId'+ i).setAttribute('class','el-button tab-btn el-button--default el-button--small is-circle')
          }
          this.subMenuItem.forEach(function (v) {
              if(v.id===item.id){
                  v.active=true

              }else {
                  v.active=false
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
    delBatchFiles(index){
        this.visaForm.batchFiles.splice(index, 1)
    }
    delRegisterFiles(index){
        this.visaForm.registerFiles.splice(index, 1)
    }
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/common.scss";
@import "~@/styles/common.scss";
.el-collapse-item{
        /deep/.el-collapse-item__header{
            background: #1c51ab !important;
            color: white;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            padding-left: 2%;
            font-size: 16px;
            font-weight: bold;
        }
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
    .openLaw_case {
            cursor: pointer;
            position: fixed;
            right: 9px;
            top: 63px;
            z-index: 99999998;
    }
  .tab-content{
        border: 1px solid #dee1e7;
        padding: 26px;
        border-top: navajowhite;
        border-top-style: none;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        text-align: left
    }
  .form-content{
        border: 1px solid #dee1e7;
        padding: 26px;
        border-top: navajowhite;
        border-top-style: none;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        text-align: left;
        /deep/.el-form-item__label{
            font-size: 16px;
            font-weight: bold;
        }
    }
  .el-select .el-input input{
      width: 300px;
  }
  
</style>