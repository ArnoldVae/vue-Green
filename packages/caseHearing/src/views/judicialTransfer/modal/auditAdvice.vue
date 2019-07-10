<template>
<!-- 案件登记 -->
  <div class="dialog">
    <div class="openLaw_case">
      <img title="案件法规" src="img/Regulations.png">
    </div>
    <div class="box">
       <div class="box_title">
        <el-radio-group v-model="isCollapse" style="margin-top: 10px; background: #f6f6f6;">
          <el-radio-button :label="false">审核意见</el-radio-button>
          <el-radio-button :label="true">文书信息</el-radio-button>
        </el-radio-group>
      </div>
      <div class="box_content">
    <div onscroll="scrollFunc()" style="text-align: center;margin-left: 10%; margin-right:10%">
      <el-main >
          <el-collapse v-model="activeNames">
          <el-collapse-item  id="menu1" title="案件审核" name="1" >
                    <div class="form-content">
                        <el-form label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                            
                              
                            
                                <el-col :span="6">
                                    <el-form-item label="初审时间:" prop="name">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>

                            
                             </el-row>
                            <el-row :gutter="20">
                                    <el-col :span="24">
                                         <el-tabs v-model="activeName">
                                            <el-tab-pane label="审理意见" name="first">
                                                <el-input type="textarea" v-model="form.desc"></el-input>
                                            </el-tab-pane>
                                            <el-tab-pane label="被调查人基本情况" name="second">
                                                <el-input type="textarea" v-model="form.desc"></el-input>
                                            </el-tab-pane>
                                            <el-tab-pane label="案件来源及调查情况" name="third">
                                                <el-input type="textarea" v-model="form.desc"></el-input>
                                            </el-tab-pane>
                                            <el-tab-pane label="主要错误事实和证据" name="fourth">
                                                <el-input type="textarea" v-model="form.desc"></el-input>
                                            </el-tab-pane>
                                            <el-tab-pane label="定性分析" name="five">
                                                <el-input type="textarea" v-model="form.desc"></el-input>
                                            </el-tab-pane>
                                            <el-tab-pane label="被调查人态度和认识" name="six">
                                                <el-input type="textarea" v-model="form.desc"></el-input>
                                            </el-tab-pane>
                                            <el-tab-pane label="处理意见可依据" name="seven">
                                                <el-input type="textarea" v-model="form.desc"></el-input>
                                            </el-tab-pane>
                                        </el-tabs>
                                    </el-col>
                            </el-row>
                        </el-form>
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
       activeName: 'second',
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
  
  .el-textarea{
    /deep/ textarea{
        min-height: 330px!important;
    }
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


</style>