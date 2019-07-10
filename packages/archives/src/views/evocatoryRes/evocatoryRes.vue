
<template >
   <div class="el-main">
       <!--案件审理-->
       <div>
           <div>
               <div class="margin_left_down-82">案件登记</div>
               <hr class="title-hr">
           </div>
           <el-row :gutter="20" >
               <el-card v-for="item in caseList" class="box-card case_card case_card1" >

                   <div slot="header" class="clearfix">
                       <span>{{item.caseTitle}}</span>
                   </div>
                   <el-container class="caseCardCon">
                       <el-aside width="200px">
                           <i v-bind:class="item.caseInc" class="font_size_120"></i>
                       </el-aside>
                       <el-main>
                           <div  class="text item">
                               <el-badge v-bind:value="item.sendedCount" class="item" type="primary">
                                   <el-button size="small" @click="goEd">已分发</el-button>
                               </el-badge>
                           </div>
                           <div  class="text item">
                               <el-badge v-bind:value="item.noSendCount"  class="item">
                                   <el-button size="small" @click="goIng">待分发</el-button>
                               </el-badge>
                           </div></el-main>
                   </el-container>

                   <div class="card-footer-div" @click="dialogFormVisible2 = true">
                       <span>+详细案件登记</span>
                       <!--<el-button type="primary" plain  @click="dialogFormVisible = true">+简易案件登记</el-button>-->
                       <!--<el-button style="float: right;  margin-right: 15%" type="text" plain >+详细案件登记</el-button>-->
                   </div>
               </el-card>
           </el-row>
       </div>
       <!--申诉复查-->
       <div>
           <el-row :gutter="20">
               <el-card v-for="item in appealLsit" class="box-card case_card"  >
                   <div slot="header" class="clearfix">
                       <span class="card-hearder-title">{{item.caseTitle}}</span>
                   </div>
                   <el-container class="caseCardCon">
                       <el-aside width="200px">
                           <i v-bind:class="item.caseInc" class="font_size_120"></i>
                       </el-aside>
                       <el-main>
                           <div  class="text item">
                               <el-badge v-bind:value="item.sendedCount" class="item" type="primary">
                                   <el-button size="small">已分发</el-button>
                               </el-badge>
                           </div>
                           <div  class="text item">
                               <el-badge v-bind:value="item.noSendCount" class="item">
                                   <el-button size="small">待分发</el-button>
                               </el-badge>
                           </div></el-main>
                   </el-container>

                   <div class="card-footer-div" @click="dialogFormVisible2 = true">
                       <span>+详细案件登记</span>
                   </div>
               </el-card>
           </el-row>
       </div>

        <el-dialog title="详细案件登记" :visible.sync="dialogFormVisible2" width="100%" top="0" id="caseMsg" >
             <case-register></case-register>
        </el-dialog>
       <!-- <el-dialog title="其他人员信息"  :visible.sync="dialogFormVisible3">
           <el-form ref="form" :model="form" label-width="120px" class="form_submit">
               <el-form-item label="主要被审查调查人员姓名*:">
                   <el-input v-model="form.name"></el-input>
               </el-form-item>
               <el-form-item label="性别">
                   <el-radio-group v-model="form.resource">
                       <el-radio label="男"></el-radio>
                       <el-radio label="女"></el-radio>
                       <el-radio label="不详"></el-radio>
                   </el-radio-group>
               </el-form-item>
               <el-form-item label="政治面貌" class="form_select">
                   <el-select v-model="form.region" placeholder="请选择">
                       <el-option v-for="option in faceList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                   </el-select>
               </el-form-item>
               <el-form-item label="工作单位">
                   <el-input v-model="form.name"></el-input>
               </el-form-item>
               <el-form-item label="企业性质" class="form_select">
                   <el-select v-model="form.region" placeholder="请选择">
                       <el-option v-for="option in businessNatureList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                   </el-select>
               </el-form-item>
               <el-form-item label="职级" class="form_select">
                   <el-select v-model="form.region" placeholder="请选择">
                       <el-option v-for="option in rankList" v-bind:label="option.value" v-bind:value="option.code"></el-option>

                   </el-select>
               </el-form-item>
               <el-table
                       :data="caseList"
                       style="width: 100%">
                   <el-table-column
                           prop="caseInc"
                           label="涉案人员"
                           width="180">
                   </el-table-column>
                   <el-table-column
                           prop="name"
                           label="性别"
                           width="180">
                   </el-table-column>
                   <el-table-column
                           prop="address"
                           label="企业性质">
                   </el-table-column>
                   <el-table-column
                           prop="address"
                           label="政治面貌">
                   </el-table-column>
                   <el-table-column
                           prop="address"
                           label="工作单位">
                   </el-table-column>
                   <el-table-column
                           prop="address"
                           label="操作">
                   </el-table-column>

               </el-table>


               <div  class="margin_top_4 margin_left_0">
                   <el-button type="primary" plain>保存</el-button>
               </div>
           </el-form>
       </el-dialog> -->
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Store from './store'
import route from '../../router/index'
import caseRegister from "./modal/caseRegister.vue";
@Component({
  components: {
    caseRegister
  },
  data() {
    return {
        dialogFormVisible:false,
        dialogFormVisible2:false,
        dialogFormVisible3:false,
        caseList:[
            {
                caseTitle:"查看案件",
                caseInc:"el-icon-document",
                sendedCount:1,
                noSendCount:7,
            },
            {
                caseTitle:"报批案件",
                caseInc:"el-icon-tickets",
                sendedCount:2,
                noSendCount:8,
            },
            {
                caseTitle:"备案案件",
                caseInc:"el-icon-goods",
                sendedCount:3,
                noSendCount:9
            }
        ],
        appealLsit:[
            {
                caseTitle:"申诉信件",
                caseInc:"el-icon-message",
                sendedCount:4,
                noSendCount:5,
            },
            {
                caseTitle:"申诉案件",
                caseInc:"el-icon-star-on",
                sendedCount:7,
                noSendCount:3,
            },
            {
                caseTitle:"申诉事项",
                caseInc:"el-icon-goods",
                sendedCount:10,
                noSendCount:2
            }

        ],
       
        activeName:{

        },
        form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            type: [],
            resource: '',
            desc: ''
        },
        formLabelWidth: '20%'

    }
  },

  created(){

  },
  mounted(){
  },
  watch :{},
  methods: {
      tapTargetLingt:function (target) {
          this.subMenuItem.forEach(function (v) {
              if(v.id===target){
                  v.active=true

              }else {
                  v.active=false
              }

          })
      },
      handleRemove(file, fileList) {
          this.fileList=fileList;
      },
      handlePreview(file) {
          console.log(file);
      },
      handleExceed(files, fileList) {
          console.log(fileList)
          this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      upSuccess:function (response,file,fileList) {
          this.fileList=fileList;
      },
      beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
      },

      
      goEd:function () {
          this.$router.push({  //核心语句
              path:'./caseDistributed',   //跳转的路径
          })
      },
      goIng:function () {
          this.$router.push({  //核心语句
              path:'./caseDistributing',   //跳转的路径
          })

      },
     
      goAnchor(selector) {

      },
      onSubmit:function () {

      },
      next() {
          console.log('aaaaa')
      }

    
  },

})


export default class petitionLetter extends Vue {
  
}



</script>

<style >
@import "~@/styles/dialogBox.scss";
@import "~@/styles/card.scss";

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }
    .card-footer-title{
        margin: 0 50px;
        color: #009ABB;
    }
    .card-hearder-title{
        float: left;
    }
    .backgrund-color-blue{
        color: #6085c4;

    }
    .el-collapse-item{
        margin: 10px 0;
    }
    .el-collapse-item__header{
        font-size: 16px;
        font-weight: bold;
    }
    .form_select >> input{
        width: 320px;
    }
    .case_card > .el-card__header {
        background: #c2dbf9;
        
    }
    .caseCardCon{
        height: 132px;
    }
    .caseCardCon >.el-main{
        overflow-y: hidden;
    }
    .el-input input{
        width: 94%;
    }
    .el-date-editor{
        margin-left: 3%;
    }
    .el-select-tab{
        position: fixed;
    }
    .el-select-tab li{
        font-size: 16px;
        margin-bottom: 20%;
        text-align: left;
    }
    .active_class h4{
        color: #1c51ab;
        font-weight: normal;
    }
    .el-dialog{
        height: 100%;
        background: #ffffff;
    }
    .el-lable{
        text-align: left;
        margin-left: 1%;
    }
    .el-dialog__body{
        background: #ffffff;
    }
    .el-collapse-item__header{
        background: #1c51ab;
        color: white;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        padding-left: 2%;

    }
  
    .tab-btn{
        position: relative;
        margin-left: -18%;
        top: 42px;
    }
    .active-btn-class{
        background: royalblue;
    }
    .title-hr{
        width: 92%;
        margin-left: 7%;
    }
    .card-footer-div{
        text-align: center;
        margin-top: 3%;
        padding-top: 6%;
        border-top: 1px solid #edeff4;
        width: 110%;
        position: relative;
        left: -5%;
        color: #5199ee;
    }
    .upload-table-div{
        width: 90%;
        height: 50px;
        border: 1px solid #cccccc;
        margin-left: 6%;
        text-align: left;
        padding: 14px;

    }


</style>