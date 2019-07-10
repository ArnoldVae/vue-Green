<template>
<!-- 案件登记 -->
  <div class="dialog">
      <div class="openLaw_case">
      <img title="案件法规" src="img/Regulations.png">
    </div>
    <div onscroll="scrollFunc()" style="text-align: center;margin-left: 10%; margin-right:10%">
      <el-main >
          <el-collapse v-model="activeNames">
          <el-collapse-item  id="menu1"  name="1" >
                	<template slot="title">
                        <i class="header-icon el-icon-info"></i>征求意见信息
                    </template>
                    <div class="form-content">
                        <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                            <el-row>
                              <el-col :span="6">
                                    <el-form-item label="征求意见单位:" prop="name">
                                        <!-- <el-input v-model="form.name"> </el-input>  -->
                                        <input type="text" autocomplete="off" class="el-input__inner" style="width: 212px;">
                                    </el-form-item>
                                </el-col>
                            
                                <el-col :span="6">
                                    <el-form-item label="征求意见时间:" >
                                        <el-date-picker type="date" placeholder="选择日期"  style="width: 212px"></el-date-picker>
                                    </el-form-item>
                                </el-col>  

                                <el-col :span="6">
                                    <el-form-item label="是否回复:" >
                                        <el-radio-group v-model="form.resource">
                                            <el-radio label="是"></el-radio>
                                            <el-radio label="否"></el-radio>
                                        </el-radio-group> 
                                    </el-form-item>
                                </el-col>
                                </el-row>

                            <el-row>
                                <div style="border:1px dashed #CCCCCC ;height: 102px;border-radius:3px 4px 5px 6px;  margin-bottom: 10px; width: 902px;margin-left: 40px; margin-top: 10px;">
                                    <div ><i class="el-icon-plus" style="padding-top: 45px;">新增征求意见</i></div>
                                </div>
                            </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>
            
                        <el-collapse-item  id="menu2"  name="2" >
                        <template slot="title">
                        <i class="header-icon el-icon-info"></i>上传附件
                    </template>
                        <div class="tab-content">
                            <h3>征求意见</h3>
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
                <el-button type="primary" plain>保存</el-button>
                <el-button type="warning" plain>取消</el-button>
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

  },
  methods: {}
})
export default class caseSupplement extends Vue {
    // 附件列表
    visaForm :object = {
        registerFiles : [], // 移送审理案件材料交接登记表
        batchFiles : [] // 案件移送审理呈批表
    }
    
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
  
</style>