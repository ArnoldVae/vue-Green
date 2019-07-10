<template>
<!-- 步骤条 -->
  <div class="dialog" >
    
    <div class="box my-box">
   
        <div class="box_content">

          <ul class="steps">
            <li  :id="step.id" :class="{'step-active' : step.active}"  v-for="(step ,index) in steps"  :key="index">{{step.name}}</li>
          </ul>

        </div>

    </div>

   
 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
   props: ['paraObj'],
  data() {
    return {
      
      steps:[
        {id:'step01',active:true,name:'手动登记'},
        {id:'step02',active:false,name:'形式审核/受理'},
        {id:'step03',active:false,name:'受理签收'},
        {id:'step04',active:false,name:'审核意见'},
        {id:'step05',active:false,name:'会议审议'},
        {id:'step06',active:false,name:'案件执行'},
        {id:'step07',active:false,name:'结案登记'},
        
      ]
    };
  },

  created() {
    console.log(this.paraObj)
  },
  mounted() {},
  methods: {}
})
export default class StateLine extends Vue {
  
  
  focusStep(item: string){
     let a;
     this.steps.forEach((el,index) => {
        if(el.name==item){
            a=index;
        }
    });
    this.steps.forEach((el,index) => {
        if(index<=a){
            el.active = true;
        }else{
          el.active = false;
        }
       })
 
  }
}
</script>
<style  scoped>
  @import "~@/styles/dialogBox.scss";
  .el-aside{

  }
  .el-main{

  }
.dialog{
	height: 100%;
}
.box {
  background: #fff;
  height:100%;
  margin: -52px auto;
}

.box_content{
    background: white;
    height:100%;
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
  width: 13.5%;
  position: relative;
  float: left;
  cursor: pointer;
  margin-top: 3%;/*为了能居中临时调节一下*/
}
 
/*步骤数字*/
.steps li:before {
  display: block;
  content: counter(step); /*设定计数器内容*/
  counter-increment: step;  /*计数器值递增*/
  width: 40px;
  height: 40px;
  background-color: rgb(161, 158, 153);
  line-height: 40px;
  border-radius: 32px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin: 0 auto 8px auto;


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
 
/*连接线*/
.steps li ~ li:after {
  content: '';
  width: 66%;
  height: 2px;
  background-color: rgb(161, 158, 153);
  position: absolute;
  left: -33%;
  top: 19px;
  z-index: 0;
}




  .dialog{
    background: #ffffff;

  }
  /deep/.el-dialog__header{
    width: 50%;
  }
  .upList-modal>>>.el-dialog{
    position: relative;
    left: 25%;
    height: 500px;
  }







</style>