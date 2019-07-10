<template style="background: #f1f1f1">
<!-- 会议审议弹窗-审理案件 -->
  <div class="body-container-jwjw">
       <div v-bind:class="[pageFlag&&pageFlag=='total'? 'body-container' : 'body-container1']">
           <el-collapse v-model="activeNames" @change="handleChange">
               <el-collapse-item  id="menu1"  name="1" >
                   <template slot="title">
                       <i class="header-icon el-icon-info"></i>本次会议审议信息
                       <el-button size="mini" type="primary" plain @click="viewResults('viewResults')" >查看历次审议记录</el-button>
                   </template>
                   <div class="form-content">
                       <el-form  class="form-label-top" label-position='top' :model="form" :rules="rules">
                           <el-row >
                               <el-col :span="6">
                                   <el-form-item label="会议时间：" prop="name">
                                       <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                   </el-form-item>
                               </el-col>

                               <el-col :span="6">
                                   <el-form-item label="会议类型：">
                                       <el-select class="form_select" v-model="form.metttingType" placeholder="请选择">
                                           <el-option v-for="(option,index) in metttingType" :key="index"
                                                      v-bind:label="option.value"
                                                      v-bind:value="option.code"></el-option>
                                       </el-select>
                                   </el-form-item>
                               </el-col>

                               <!-- <el-col :span="8">
                                   <el-form-item label="审议结果：" >
                                       <el-radio-group v-model="form.resource" @change="show">>
                                           <el-radio  label="01"> 审批不通过</el-radio>
                                           <el-radio  label="02">审批通过</el-radio>
                                       </el-radio-group>
                                   </el-form-item>
                               </el-col> -->
                               <el-col :span="6">
                                   <el-form-item label="审议结果：" >
                                       <el-select v-model="value" placeholder="请选择">
                                           <el-option
                                                   v-for="item in options"
                                                   :key="item.value"
                                                   :label="item.label"
                                                   :value="item.value">
                                           </el-option>
                                       </el-select>
                                   </el-form-item>
                               </el-col>
                               <el-col :span="6">
                                <el-form-item label="是否继续上会：" >
                                    <el-radio-group v-model="form.resource" >
                                        <el-radio  label="01"> 是</el-radio>
                                        <el-radio  label="02"> 否</el-radio>
                                    </el-radio-group> 
                                </el-form-item>
                            </el-col>
                           </el-row>
                           
                           <el-row>
                               <el-col :span="6">
                                   <el-form-item label="是否备案：" >
                                       <el-radio-group v-model="form.fileRecord">
                                           <el-radio label="01">否</el-radio>
                                           <el-radio label="02">是</el-radio>
                                       </el-radio-group>
                                   </el-form-item>
                               </el-col>
                               <el-col :span="6">
                                   <el-form-item label="是否需要报批：" >
                                       <el-radio-group v-model="form.resource2">
                                           <el-radio label="01">否</el-radio>
                                           <el-radio label="02">是</el-radio>
                                       </el-radio-group>
                                   </el-form-item>
                               </el-col>
                               <el-col :span="6" v-if="form.resource2=='02'">
                                   <el-form-item label="报批单位：">
                                       <el-select  v-model="form.depart"  placeholder="请选择" multiple>
                                           <el-option label="中共中央" value="01"></el-option>
                                           <el-option label="中央军委" value="02"></el-option>
                                       </el-select>
                                   </el-form-item>
                               </el-col>
                           </el-row>
                            <el-row v-show="value=='2'">
                               <el-col :span="24">
                                   <el-form-item label="审理意见：" >
                                       <el-input
                                               type="textarea"
                                               :rows="2"
                                               placeholder="请输入内容"
                                               v-model="textarea">
                                       </el-input>
                                   </el-form-item>
                               </el-col>
                           </el-row>
                       </el-form>
                   </div>
               </el-collapse-item>

               <el-collapse-item  id="menu1"  name="2" >
                   <template slot="title">
                       <i class="header-icon el-icon-info"></i>上传附件
                   </template>
                   <div class="my-file-table">
                   <div class="item-main" >
                       <el-row>
                           <el-col :span="14" class="col-title"> <p>会议纪要</p></el-col>
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
                           <el-col :span="14" class="text-left"><span>文件{{index+1}}：{{f.name}}</span></el-col>
                           <el-col :span="10" >
                               <el-button  size="small"><i class="el-icon-download"></i>下载</el-button>
                               <el-button  size="small"><i class="el-icon-search"></i>查看</el-button>
                               <el-button  size="small" @click="beforeRemove(index)"><i class="el-icon-delete"></i>删除</el-button>
                           </el-col>
                       </el-row>
                       <hr>
                   </div>


               </div>
               </el-collapse-item>
           </el-collapse>

       </div>
       <div  class="body-footer jwjw-tabs"  v-show="pageFlag!='total'" v-bind:class="[pageFlag? 'body-footer-center1' : 'body-footer']"  >
          <div class="footer-btn-grunp">
              <el-button type="primary" v-if="form.resource=='02'" @click="stateTrans">提交</el-button>
              <el-button type="success" >保存</el-button>
              <el-button @click="close()">关闭</el-button>
          </div>
      </div>

      <el-dialog class="mc-dialog-medium" title="历次审议记录" :visible.sync="dialogFlag.viewResults" width="80%"  top="7%" append-to-body center>
	      <ViewResults></ViewResults>
	      <div slot="footer" class="dialog-footer">
                 <el-button size="small" @click="dialogFlag.viewResults=false">关闭</el-button>     
		  </div>
    	</el-dialog>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ViewResults from "../../pubicMAndC/modal/viewResults.vue";//历次审议记录
 const selectData = require("store/selectData.json");
 import TakeAdvice from "./takeAdvice.vue"
 import Deliberations from "./deliberations.vue"
@Component({
    props:['pageFlag'],
    selectData:selectData,
  components: {TakeAdvice,Deliberations,ViewResults},
  data() {
    return {
        options: [{
          value: '1',
          label: '同意审理意见'
        }, {
          value: '2',
          label: '改变审理意见'
        }],
        value: '',
        textarea: '',
        visaObj:{},
      formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        activeNames:['1','2','3','4','5','6','7','8'],
         form: {
             metttingType:'',//会议类型
             partyDiscip:'',//党纪处分
             militaryDiscip:'',//军纪处分
             fileRecord:'01',
            name: '',
            region: '',
            date1: '',
            date2: '',
            type: [],
            resource: '01',
            resource1: '01',
            resource2: '01',
            desc: '',
            depart:[]
        },
        partyDiscip:selectData.partyDiscip,//党纪处分
        militaryDiscip:selectData.militaryDiscip,//军纪处分
        metttingType:selectData.metttingType,//会议类型
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
  methods: {
      
  }
})
export default class caseSupplement extends Vue {
    fileList:Array= [{name: '军委纪委书记专题会议纪要', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '中央政治局常务会议纪要', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]


    isCollapse='right'
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
    showFlag:boolean = false;
      dialogFlag = {
            allPrevious:false,
            viewResults:false,
        }
         viewResults(item){
            this.dialogFlag[item] = true
        }
    allPrevious(item) {
            this.dialogFlag[item] = true
        }
         handleChange(val) {
                this.activeNames=['1','2']
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
    
    stateTrans(){
    	this.$confirm('提交后将进入案件执行环节，确定提交？','提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	        	//父页面调用方法
	          this.$emit('submitEvent','HYSY')
	        }).catch(() => {
	                  
		    });
    }
    close(){
        this.$parent.$emit('submitEvent','HYSY');
    }
    handlePreview(){}
    handleRemove(){}
    beforeRemove(){}
    handleExceed(){}
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/common.scss";
    /*控制表单项的公有样式*/
@import "~@/styles/commonJWJW.scss";
</style>