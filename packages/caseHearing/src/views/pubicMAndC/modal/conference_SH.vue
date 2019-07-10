<template style="background: #f1f1f1">
<!-- 会议审议弹窗-审理案件 -->
  	<div>
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
                                    <!--<el-option v-for="(option,index) in metttingType" :key="index"
                                    v-bind:label="option.value"
                                    v-bind:value="option.code"></el-option>-->
                                    	<el-option
                                            label="军委纪委书记专题会议"
                                            value="1">
                                        </el-option>
                                    </el-select>
                                    </el-form-item>
                                    </el-col>
                        
                            <!-- <el-col :span="8">
                                <el-form-item label="审议结果:" >
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
                            <el-row v-show="value=='2'">
                                <el-col :span="24">
                                    <el-form-item label="审核意见：" >
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
		</el-collapse>
           <!-- <el-collapse  class="body-footer jwjw-tabs" v-bind:class="[pageFlag ? 'body-footer-center' : 'body-footer']"  >
               <div class="footer-btn-grunp">
                   <el-button type="primary" @click="stateTrans">提交</el-button>
                   <el-button type="primary" plain>保存</el-button>
                   <el-button>重置</el-button>
               </div>
           </el-collapse> -->
      <div  class="body-footer jwjw-tabs"  v-show="pageFlag!='total'" v-bind:class="[pageFlag? 'body-footer-center1' : 'body-footer']"  >
          <div class="footer-btn-grunp">
              <el-button type="primary" v-if="form.resource=='02'" @click="stateTrans">提交</el-button>
              <el-button type="success" >保存</el-button>
              <el-button @click='close()'>关闭</el-button>
          </div>
      </div>
      <el-dialog class="mc-dialog-medium" title="历次审议记录" :visible.sync="dialogFlag.viewResults" width="80%"  top="13%" append-to-body center>
	      <ViewResults></ViewResults>
	      <div slot="footer" class="dialog-footer">
		      <!-- <el-button type="primary"  size="small">保存</el-button> -->
                 <el-button size="small">关闭</el-button>     
		  </div>
    	</el-dialog>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ViewResults from "../../pubicMAndC/modal/viewResults.vue";//重启审理 
 const selectData = require("store/selectData.json");
 //import TakeAdvice from "./takeAdvice.vue"
@Component({
    props:['pageFlag'],
    selectData:selectData,
  components: {ViewResults},
  data() {
    return {
        options: [{
          value: '1',
          label: '同意审核意见'
        }, {
          value: '2',
          label: '改变审核意见'
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
             metttingType:'1',//会议类型
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
	          this.$parent.$emit('submitEvent','HYSY')
	        }).catch(() => {
	                  
		    });
    }
    close(){
        this.$parent.$emit('submitEvent','HYSY');
    }
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/common.scss";
    /*控制表单项的公有样式*/
@import "~@/styles/commonJWJW.scss";
</style>