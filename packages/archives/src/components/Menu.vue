<template>
    <!-- <h1>{{ msg }}</h1> -->
    <div class="menuDesktop" >
       <div class="close" @click="close"> <i style="cursor:pointer" class='el-icon-close'></i> </div>
        <div v-for="(menu,index) in menus" :key="index">
           <el-row class="menuBorder">
            <el-col :span="3" style="margin-top: 5px;cursor:pointer "> <span @click="goBuessuss(menu.url)" >{{menu.name}} </span></el-col>
            <el-col :span="20" style="text-align:left; border-left: 1px solid white;"> 
               <span type="flex" justify="start" v-for="(menulevel,index) in menu.menulevels" :key="index">
                   <a size="mini" style="margin-left:20px;margin-top:5px;cursor:pointer "><span @click="goBuessuss(menu.url)">{{menulevel.name}}</span></a>
               </span>
            </el-col>
          </el-row>
        </div>
    </div>
</template>

<script >
 import _ from "lodash";
import { Component, Prop, Vue } from 'vue-property-decorator';


 export default  {
 props: {
      msg: {
          type: Object,
          default: () => {
              return { 
                  state:false
              }
          },
      },
    },
 data() {
    return {
       menus:[
         {
           name:'信访举报',
           url:'http://127.0.0.1/view_xfjb/index.1.html',
           menulevels:[
             {
               name:'举报受理',
               url:''
             },
             {
               name:'综合办理',
               url:''
             },
             {
               name:'文书档案',
               url:''
             },
             {
               name:'督查督办',
               url:''
             },
             {
               name:'廉政审核',
               url:''
             },
             {
               name:'查询统计',
               url:''
             },
             {
               name:'业务分析',
               url:''
             },
             {
               name:'业务设置',
               url:''
             },
           ]
         },
         {
           name:'监督检查管理',
           url:'http://127.0.0.1/view_jdjc/index.1.html',
           menulevels:[
             {
               name:'线索管理',
               url:''
             },
             {
               name:'XXX级以上干部问题线索库',
               url:''
             },
             {
               name:'监督检查',
               url:''
             },
             {
               name:'监督检查',
               url:''
             },
             {
               name:'涉案人员',
               url:''
             },
             {
               name:'“四种形态”运用情况分析',
               url:''
             },
             {
               name:'业务设置',
               url:''
             },
             {
               name:'款物登记',
               url:''
             },
             {
               name:'款物保管',
               url:''
             },
             {
               name:'款物处理',
               url:''
             },
             {
               name:'处置执行',
               url:''
             },
             {
               name:'主动上交',
               url:''
             },
           ]
         },
         {
           name:'审查调查',
            url:'http://127.0.0.1/view_scdc/index.1.html',
           menulevels:[
             {
               name:'初核管理',
               url:''
             },
             {
               name:'立案管理',
               url:''
             },
             {
               name:'审查人员管理',
               url:''
             },
             {
               name:'查询统计',
               url:''
             },
             {
               name:'业务设置',
               url:''
             },
           ]
         },
         {
           name:'巡视巡察工作',
            url:'http://127.0.0.1/view_xsxc/index.1.html',
           menulevels:[
             {
               name:'巡视组织',
               url:''
             },
             {
               name:'法规规划',
               url:''
             },
             {
               name:'巡视准备',
               url:''
             },
             {
               name:'成果运用',
               url:''
             },
             {
               name:'了解监督',
               url:''
             },
             {
               name:'文书档案',
               url:''
             },
             {
               name:'查询统计',
               url:''
             },
             {
               name:'业务设置',
               url:''
             },
             {
               name:'业务分析',
               url:''
             },
           ]
         },
         {
           name:'案件审理',
            url:'http://127.0.0.1:8010/departUser/loginNew?personEname=zs&userPwd=123',
           menulevels:[
                {
               name:'移送案件登记',
               url:''
             },
             {
               name:'自办案件管理',
               url:''
             },
             {
               name:'报备案件管理',
               url:''
             },
             {
               name:'申诉复查管理',
               url:''
             },
             {
               name:'案件监督督导',
               url:''
             },
             {
               name:'智能辅助管理',
               url:''
             },
             {
               name:'查询统计分析',
               url:''
             },
             {
               name:'审理业务设置',
               url:''
             },
             {
               name:'审理文书设置',
               url:''
             },
             {
              name:'案件授权管理',
              url:''
            },
            {
              name:'系统功能设置',
              url:''
            },

           ]
         },
         {
           name:'案件审理档案',
             url:'http://127.0.0.1/view_slda/index.1.html',
           menulevels:[
             {
               name:'归档设置',
               url:''
             },
             {
               name:'电子归档',
               url:''
             },
             {
               name:'归档调阅',
               url:''
             },
             {
               name:'查询统计',
               url:''
             },
           ]
         },
         {
           name:'作风建设督查',
            url:'http://127.0.0.1/view_zfjsdc/index.1.html',
           menulevels:[
             {
               name:'联系点工作管理',
               url:''
             },
             {
               name:'工作记录管理',
               url:''
             },
             {
               name:'情况汇总分析',
               url:''
             },
             {
               name:'文书档案管理',
               url:''
             },
             {
               name:'查询统计',
               url:''
             },
             {
               name:'业务设置',
               url:''
             },
           ]
         },
         {
           name:'案件审理档案',
            url:'http://127.0.0.1/view_slda/index.1.html',
           menulevels:[
             {
               name:'归档设置',
               url:'',
             },
             {
               name:'电子归档',
               url:'',
             },
             {
               name:'归档调阅',
               url:'',
             },
             {
               name:'查询统计',
               url:'',
             },
           ]
         },
         {
           name:'某队伍建设',
            url:'http://127.0.0.1/view_jdjjjc/index.1.html',
           menulevels:[
             {
               name:'XXX设置',
               url:''
             },
             {
               name:'党风党纪教育',
               url:''
             },
             {
               name:'专项表彰',
               url:''
             },
             {
               name:'查询统计',
               url:''
             },
             {
               name:'业务培训',
               url:''
             },
             {
               name:'XXXXXX人才库',
               url:''
             },
             {
               name:'业务设置',
               url:''
             },
             {
               name:'党建工作',
               url:''
             },
             {
               name:'反腐倡廉教育',
               url:''
             },
           ]
         },
         {
           name:'业务支撑',
              url:'http://192.168.216.181/xxpt?username=admin',
           menulevels:[
             {
               name:'组织人员',
               url:''
             },
             {
               name:'统一基础代码',
               url:''
             },
             {
               name:'服务总线',
               url:''
             },
             {
               name:'统一授权',
               url:''
             },
             {
               name:'统一安全审计',
               url:''
             },
             {
               name:'监督对象',
               url:''
             },
             {
               name:'法规资料库',
               url:''
             },
             {
               name:'应用资源',
               url:''
             },
             {
               name:'统一数据交换',
               url:''
             },
           ]
         },
        
       ],
       ModalData:{
          state:false
       }
    }
  },
  created() {
    console.log('123'+this.msg.state)
    this.ModalData.state =_.cloneDeep(this.msg.state)
  },
  methods: {
    close(){
      this.msg.state = false
    },
    goBuessuss(url){
     window.open(url, "_blank");
  }

  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menuDesktop{
    box-shadow: 0px 5px 37px #767272; 
    color: white;
    background: RGB(37, 34, 34,0.95);
    position: fixed;
    width: 100%;
    z-index: 9999;
    border-radius: 5px;
    padding-bottom: 17px;
}
.close{
    text-align: right;
    padding-right: 30px;
    font-size: 41px;
}
.menuBorder{
  margin: 10px 0px!important;
  border-bottom:1px solid #302d2d;;
  padding-bottom: 15px;
}
</style>
