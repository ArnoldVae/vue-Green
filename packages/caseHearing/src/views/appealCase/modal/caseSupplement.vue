<template>
<!-- 补充完善 -->
  <div class="dialog">
    <div class="openLaw_case">
      <img title="案件法规" src="img/Regulations.png">
    </div>
    <div class="box">
      <div class="box_title">
        <el-radio-group v-model="isCollapse" style="margin-top: 10px; background: #f6f6f6;">
          <el-radio-button :label="false">补充完善</el-radio-button>
          <el-radio-button :label="true">移送材料</el-radio-button>
        </el-radio-group>
      </div>
      <div v-show="!isCollapse">
        <div class="box_content">

          <ul class="steps">
            <li @click="focusStep(step)" :id="step.id" :class="{'step-active' : step.active}"  v-for="(step ,index) in steps"  :key="index">{{step.name}}</li>
          </ul>

        </div>
        <div  class="tab-content">
          <case-register ref="caseReg" pageFlag="caseSup"></case-register>
        </div>
      </div>
      <div v-show="isCollapse">
        <el-container>
          <el-aside width="360px">
            <div class="file-Upload" @click="showUploadListFlag=true">
              <el-upload
                      class="upload-demo"
                      drag
                      disabled
                      action="https://jsonplaceholder.typicode.com/posts/"
                      multiple>
                <div class="el-upload__text"><em style="font-size: 14px; font-weight: bold;color: #0664a9">+上传案件材料</em><br><span style="position: relative;top: -25px;font-size: 15px;color: #8d8d8d;">单份文件大小请勿超过30M</span></div>
              </el-upload>
            </div>
            <div class="file-search">
              <div class="search-container">
                <div class="search-container-input">
                  <el-input placeholder="请输入内容" class="search-input" style=""><i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </div>

              </div>


            </div>
          </el-aside>
          <el-main>
            <div class="file-Item-container">


            </div>
          </el-main>
        </el-container>
      </div>



    </div>

    <div class="foot">
         <el-button type="primary" plain round>上一步</el-button>
         <el-button type="primary" plain round>下一步</el-button>
    </div>
    <el-dialog title="上传材料" :visible.sync="showUploadListFlag"   width="50%" top="0"  class="upList-modal" append-to-body>
      <div class="dialog">

        <el-table :data="form">
          <el-table-column property="date" label="日期" width="150"></el-table-column>
          <el-table-column property="name" label="姓名" width="200"></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
        <div class="foot">
          <el-button type="primary" plain round>上一步</el-button>
          <el-button type="primary" plain round>下一步</el-button>
          <el-button type="primary" plain round>上传文件</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import caseRegister from "../../evocatoryRes/modal/complaintLetter.vue";


@Component({
  components: {caseRegister},
  data() {
    return {
      showUploadListFlag :false,
      steps:[
        {id:'step01',active:true,name:'申诉基本信息'},
        {id:'step02',active:false,name:'申诉人基本信息'},
        {id:'step03',active:false,name:'原处理情况'},
        {id:'step04',active:false,name:'案件分发情况'},
      ]
    };
  },

  created() {},
  mounted() {},
  methods: {}
})
export default class caseSupplement extends Vue {
  isCollapse: boolean = false;
  focusStep(item){

    this.steps.forEach((el,index) => {
        el.active = false
    });
    item.active = true
    this.$refs.caseReg.parentMethod('caseSup',item.id)
  }
    showUploadList(){
      console.log('aadbhdjhjdhj')
    }
}
</script>
<style  scoped>
  @import "~@/styles/dialogBox.scss";
  .el-aside{

  }
  .el-main{

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
  text-align: left;
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
    height: 90px;
}

/* 步骤 */
.steps {
  position: relative;
  margin-bottom: 30px;
  counter-reset: step;  /*创建步骤数字计数器*/
  padding-left: 330px;
}
/*步骤描述*/
.steps li {
  list-style-type: none;
  font-size: 12px;
  text-align: center;
  width: 16%;
  position: relative;
  float: left;
  cursor: pointer;
  
} 
/*步骤数字*/
.steps li:before {
  display: block;
  content: counter(step); /*设定计数器内容*/
  counter-increment: step;  /*计数器值递增*/
  width: 40px;
  height: 40px;
  background-color: #FBB63D;
  line-height: 40px;
  border-radius: 32px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin: 0 auto 8px auto;
}
/*连接线*/
.steps li ~ li:after {
  content: '';
  width: 74%;
  height: 2px;
  background-color: #FBB63D;
  position: absolute;
  left: -37%;
  top: 19px;
  z-index: 0;
}
.step-active::before {
  display: block;
  content: counter(step); /*设定计数器内容*/
  counter-increment: step;  /*计数器值递增*/
  width: 32px;
  height: 32px;
  background-color: #559BEB!important;
  line-height: 32px;
  border-radius: 32px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin: 0 auto 8px auto;
}
  .el-main{
    margin: 0;
  }
  .dialog{
    background: #ffffff;

  }
  .dialog>.el-main{
    margin-left: 1%;
  }
  .dialog>>>.el-main{
    margin-left: 1%;
  }
  .file-Upload{
    height: 120px;
    padding: 10px;
  }
  .search-container{
    height: 500px;
    border: 1px solid #e7e2e2;
    width: 84%;
    margin-left: 30px;
  }
  /deep/.el-upload-dragger{
    height: 95px;
    width: 300px;
    margin-left: 20px;
    border: 3px dashed #1e9fff;
    height: 100px;
    line-height: 50px;
    border-radius: 10px;
    background-color: #e9fcff;
    cursor: pointer;
  }
  /deep/.el-upload-dragger >.el-upload__text{
    margin-top: 8px;
  }
  .search-container-input{
    height: 65px;
    background: #ecedf3;
  }
  .search-input{
    margin-top: 12px;width: 240px;margin-left: 28px;
  }
  .file-Item-container{
    height: 600px;
    border: 1px solid;
  }
  /deep/.el-dialog__header{
    width: 50%;
  }
  .upList-modal>>>.el-dialog{
    position: relative;
    left: 25%;
    height: 500px;
  }
.upList-modal{
  margin-top: 56px;
}
</style>