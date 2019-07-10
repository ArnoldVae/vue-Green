
<template>
   <div>
    <!-- 待办事项 -->
    <el-row class="title">
       <!-- <div class="mark-title"></div> -->
       <div is-dot > <i class="el-icon-document"></i> 待办事项</div>
    </el-row>
    <el-row :gutter="20">
       <el-col :span='6' style="margin-right: -28px;">
          <div>
             <el-row class="todo-types" :style="item.bgColor" v-for="(item,index) in todoTypes" :key="index" @click.native="showToDo(item)">
               <el-col :span="6">
                   <i  class="icon" :class="item.img"></i>
               </el-col>
               <el-col :span="14">
                  <div class="name" >{{item.name}}</div>
               </el-col>
            </el-row>
          </div>
       </el-col>
       <el-col :span="10" class="todos">
          <el-row >
             <el-col :span='4' v-for="(item,index) in todo" :key="index" style="margin-top: 1%;cursor:pointer">
               <el-badge :value="item.num">
                <div style="padding-bottom: 20px;">
                  <div class='todo-type'> <i class="el-icon-star-on icon"></i></div>
                  <div >{{item.name}}</div>
                </div>
               </el-badge>
             </el-col>
          </el-row>
       </el-col>
    </el-row>
    <!-- 重要通知 -->
    <el-row class="title" style="margin-top:13px">
      <!-- <div class="mark-title"></div> -->
       <div is-dot > <i class="el-icon-bell"></i> 重要通知</div>
    </el-row>
    <div class="notice-list">
      <el-row v-for="(item,index) in notice" :key="index" class="notice" :class="{notice1:index==0}">
        <el-col :span="1" v-if="index==0" ><div> <i class="el-icon-bell" style="font-size:22px"></i> </div></el-col>
        <el-col :span="1" v-if="index!=0" ><div class="notice-badge"></div></el-col>
        <el-col :span='20' class='text-ellipsis'>{{item.content}}</el-col>
        <el-col :span='2'>{{item.date}}</el-col>
        <el-col :span='1'><el-button type="text" class="detail-button">详情</el-button></el-col>
      </el-row>
    </div>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import copyright from '@/components/copyright.vue';
@Component({
  name:"home",
  components: {
    copyright
  },
  data() {
    return {

    }
  },

  created(){
    this.showToDo(this.todoTypes[0])
  },
  mounted(){
    console.log('信访子系统首页')
  },
  methods: {

  }
})
export default class petitionLetter extends Vue {
  private todoTypes:Array =  [
    { name: '移送案件登记',img:'el-icon-edit',bgColor:{background:'#157CFB'},types: [
      {icon:'',name:'自办案件待分发',num:'',flag:''},
      {icon:'',name:'申诉事项待分发',num:'',flag:''},
      {icon:'',name:'报批案件待分发',num:'',flag:''},
      {icon:'',name:'备案案件待分发',num:'',flag:''},
      {icon:'',name:'申诉信件待分发',num:'',flag:''},
      {icon:'',name:'申诉案件待分发',num:'',flag:''},
      {icon:'',name:'案件登记',num:'',flag:''}]
    },
    { name: '自办案件管理',img:'el-icon-menu',bgColor:{background:'#F74B85'},types: [
      {icon:'',name:'形式审核',num:'',flag:''},
      {icon:'',name:'审核审议',num:'',flag:''},
      {icon:'',name:'案件执行',num:'',flag:''},
      {icon:'',name:'案件报备',num:'',flag:''},
      {icon:'',name:'回访教育',num:'',flag:''}]
    },
    { name: '报备案件管理',img:'el-icon-document',bgColor:{background:'#FDBA50'},ypes: [
      {icon:'',name:'案件受理',num:'',flag:''},
      {icon:'',name:'案件审核',num:'',flag:''},
      {icon:'',name:'案件执行',num:'',flag:''}]
    },
    { name: '申诉复查管理',img:'el-icon-view',bgColor:{background:'#6AC53C'},types: [
      {icon:'',name:'申诉受理',num:'',flag:''},
      {icon:'',name:'申诉审核',num:'',flag:''},
      {icon:'',name:'申诉执行',num:'',flag:''}]
    },
  ]
   private todo:Array =  []
   private notice:Array = [
     {id:'01',date:'2018-09-08',content:'陈岳峰违纪案件，情节较为严重，司法将会提前介入，相关审核人员尽快完善阅卷笔录信息'},
     {id:'02',date:'2018-09-08',content:'陈岳峰违纪案件，情节较为严重，司法将会提前介入，相关审核人员尽快完善阅卷笔录信息，相关审核人员尽快完善阅卷笔录信息，并提出相应的审核意见；针对该案件涉及的相关财务处理情况单独列出一份文件'},
     {id:'03',date:'2018-09-08',content:'陈岳峰违纪案件，情节较为严重，司法将会提前介入，相关审核人员尽快完善阅卷笔录信息，并提出相应的审核意见；针对该案件涉及的相关财务处理情况单独列出一份文件'},
     {id:'04',date:'2018-09-08',content:'陈岳峰违纪案件，情节较为严重，司法将会提前介入，相关审核人员尽快完善阅卷笔录信息，并提出相应的审核意见；针对该案件涉及的相关财务处理情况单独列出一份文件'},
     {id:'04',date:'2018-09-08',content:'陈岳峰违纪案件，情节较为严重，司法将会提前介入，相关审核人员尽快完善阅卷笔录信息，并提出相应的审核意见；针对该案件涉及的相关财务处理情况单独列出一份文件'},
     {id:'04',date:'2018-09-08',content:'陈岳峰违纪案件，情节较为严重，司法将会提前介入，相关审核人员尽快完善阅卷笔录信息，并提出相应的审核意见；针对该案件涉及的相关财务处理情况单独列出一份文件'},
     {id:'04',date:'2018-09-08',content:'陈岳峰违纪案件，情节较为严重，司法将会提前介入，相关审核人员尽快完善阅卷笔录信息，并提出相应的审核意见；针对该案件涉及的相关财务处理情况单独列出一份文件'},
     {id:'04',date:'2018-09-08',content:'陈岳峰违纪案件，情节较为严重，司法将会提前介入，相关审核人员尽快完善阅卷笔录信息，并提出相应的审核意见；针对该案件涉及的相关财务处理情况单独列出一份文件'},
     {id:'04',date:'2018-09-08',content:'陈岳峰违纪案件，情节较为严重，司法将会提前介入，相关审核人员尽快完善阅卷笔录信息，并提出相应的审核意见；针对该案件涉及的相关财务处理情况单独列出一份文件'},
     {id:'04',date:'2018-09-08',content:'陈岳峰违纪案件，情节较为严重，司法将会提前介入，相关审核人员尽快完善阅卷笔录信息，并提出相应的审核意见；针对该案件涉及的相关财务处理情况单独列出一份文件'},
     {id:'04',date:'2018-09-08',content:'陈岳峰违纪案件，情节较为严重，司法将会提前介入，相关审核人员尽快完善阅卷笔录信息，并提出相应的审核意见；针对该案件涉及的相关财务处理情况单独列出一份文件'},
     {id:'04',date:'2018-09-08',content:'陈岳峰违纪案件，情节较为严重，司法将会提前介入，相关审核人员尽快完善阅卷笔录信息，并提出相应的审核意见；针对该案件涉及的相关财务处理情况单独列出一份文件'},
     {id:'04',date:'2018-09-08',content:'陈岳峰违纪案件，情节较为严重，司法将会提前介入，相关审核人员尽快完善阅卷笔录信息，并提出相应的审核意见；针对该案件涉及的相关财务处理情况单独列出一份文件'},
   ]


   showToDo(item){
     console.log('123')
     this.todo = item.types ||[]
   }

}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .title{
    background: white;
    height: 47px;
    text-align: left;
    padding: 17px;
    font-size: 18px;
    font-weight: 500;
  }
  .todo-types{
    padding-top: 4px;
    width: 64%;
    height: 48px;
    border: none;
    border-radius: 2px;
    margin: 10px 0px;
    margin-left: 11%;
    line-height: 64px;
    cursor: pointer;
    cursor: pointer;
    .icon{
      color: white;
      font-size: 30px;
      margin-top: -16px;
    }
    .name{
      color: white;
      margin-left: -33%;
      margin-top: -3%;
    }
  }

  .todo-type{
    background: #EDF3F9;
    margin:0 auto;
    height: 70px;
    border: none;
    border-radius: 50px;
    width: 70px;
    .icon{
      font-size: 45px;
      margin-top: 10px;
      color:#7F8C92;
    }
  }
  .todos{
    height: 285px;
    border: 1px solid #ebebeb;
    padding: 20px 10px;
    margin-left: -9px;
    margin-top: 11px;
    width: 73.3%;
  }
  .text-ellipsis{
    overflow:hidden; /*内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    white-space:nowrap; /*不换行 */
    text-align: left;
    
  }
  .notice-list{
    overflow: auto;
    height: 260px;
    border: 1px solid #EBEBEB;
    margin: 20px 36px;
    .notice{
      height: 50px;
      line-height: 50px;
      .detail-button{
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
  .notice-badge{
    height: 13px;
    width: 13px;
    border-radius: 20px;
    background: #3479DA;
    margin-top: 19px;
    margin-left: 38%;
  }
  .notice1{
    background: #FEF5EB;
    color: #EAB365;
  }
  .mark-title{
    display: inline-block;
    background: rgb(251, 182, 61);
    width: 5px;
    height: 16px;
    border-radius: 10px;
    margin-right: 1%;
  }
</style>
