<template>
<!-- 审核意见 -->
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
      <div class="box_content">
        <ul class="steps">
            <li @click="focusStep(step)" :id="step.id" :class="{'step-active' : step.active}"  v-for="(step ,index) in steps"  :key="index">{{step.name}}</li>
        </ul>
      </div>
    </div>
    <div class="foot">
         <el-button type="primary" plain round>上一步</el-button>
         <el-button type="primary" plain round>下一步</el-button>
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
  }
}
</script>
<style scoped>
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
.foot{
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: 80px;
  width: 100%;
  background: white;
  line-height: 80px;
  text-align: center;
}

/* 步骤 */
.steps {
  position: relative;
  margin-bottom: 30px;
  counter-reset: step;  /*创建步骤数字计数器*/
}
/*步骤描述*/
.steps li {
  list-style-type: none;
  font-size: 12px;
  text-align: center;
  width: 12%;
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


</style>