<template>
<!-- 案件登记 -->
  <div class="dialog">
    <div class="openLaw_case">
      <img title="案件法规" src="img/Regulations.png">
    </div>
    <div class="box">
       <div class="box_title">
        <el-radio-group v-model="isCollapse" style="margin-top: 10px; background: #f6f6f6;">
          <el-radio-button :label="false">阅卷笔录</el-radio-button>
          <el-radio-button :label="true">文书信息</el-radio-button>
        </el-radio-group>
      </div>
      <div class="box_content" style="text-align:center;">
    <div onscroll="scrollFunc()" style="text-align: center;margin-left: 10%; margin-right:10%">
      <el-main >
          <el-collapse v-model="activeNames">
          <el-collapse-item  id="menu1" title="阅卷笔录信息" name="1" >
                    <div class="form-content">
                        <el-form label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                
                              <el-col :span="6">
                                    <el-form-item label="案件名称:" prop="name">
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                                 <el-col :span="6">
                                    <el-form-item label="阅卷人:" prop="name">
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                            
                                <el-col :span="6">
                                    <el-form-item label="阅卷时间:" prop="name">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>

                                <el-col :span="6">
                                     <el-form-item label="阅卷地点:" prop="name">
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                                </el-row>
                                      <el-row :gutter="20">
                                    <el-col :span="24">
                                        <el-form-item label="阅卷意见:" prop="name">
                                            <el-input type="textarea" :row="3" placeholder="请输入内容">

                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>
            
                   <el-collapse-item id="menu8" title="上传阅卷笔录" name="8">
                        <div class="tab-content">
                            <h3>阅卷笔录</h3>
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
         <div  class="margin_top_4 margin_left_0" style="text-align:center;">
                <el-button type="primary" >提交</el-button>
                <el-button type="primary" plain>保存</el-button>
                <el-button type="warning" plain>取消</el-button>
            </div>
      </el-main>
      </div>
      </div>
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
    mounted(){},
  methods: {}
})
export default class caseSupplement extends Vue {
   isCollapse: boolean = false;
    focusStep(item){
      this.steps.forEach((el,index) => {
          el.active = false
      });
      item.active = true
    }
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
  .dialog {
  background: #f6f6f6;
  height: 100%;
}
.box {
  background: #fff;
  width: 1314px;
  margin: 0 auto;
}
.box_title {
  background: #f6f6f6;
  font-size: 18px;
}
.openLaw_case {
  cursor: pointer;
  position: fixed;
  right: 9px;
  top: 63px;
  z-index: 99999998;
}
.box_content{
    background: white;
    height: 700px;
}
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
   .el-tabs{
   	.el-select .el-input input{
      width: 300px;
  }
  .el-tabs__active-bar.is-top > div{
  	background: palevioletred;
  }
   .el-tabs__item.is-active {
      color: #ffffff;
      background: #1c51ab!important;
      text-align: center;
    }
    .el-tabs__nav-wrap::after{
      background-color: #1c51ab;
    }
    .el-tabs__nav /deep/ .el-tabs__active-bar{
      background-color: #1c51ab!important;
    }
    .el-tabs__item.is-top{
      min-width: 120px;
      text-align: center;
      padding: 0px 10px;
      border-radius: 5px 5px 0px 0px;
    }
    .el-tabs__item.is-top::after{
      content: "";
      width: 1px;
      position: absolute;
      height: 22px;
      background: #999999;
      right: 0px;
      top: 8px;
    }
    .el-tabs__item.is-top:last-child::after{
      width:0px;
    }
    .el-tabs__item.is-active::after{
      width:0px;
    }
   } 
</style>