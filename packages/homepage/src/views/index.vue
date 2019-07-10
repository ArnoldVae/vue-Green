<template>
    <!-- <h1>{{ msg }}</h1> -->
    <div class="menuDesktop" >
        <!-- 图标 -->
        <div style="text-align: left;" >
            <img src="../assets/img/logo.png" alt="" style="cursor:pointer">
        </div>
       <!-- <div class="close" @click="close"> <i style="cursor:pointer" class='el-icon-close'></i> </div> -->
       <!-- <div style="margin-top:-4%">
            <div v-for="(menu,index) in menus" :key="index">
                <el-row class="menuBorder">
                    <el-col :span="3" style="cursor:pointer " class="font-size-19"> <span @click="goBuessuss(menu)" >{{menu.name}} </span></el-col>
                    <el-col :span="20" style="text-align:left; border-left: 1px solid white;">
                    <span type="flex" justify="start" v-for="(menulevel,index) in menu.menulevels" :key="index">
                        <a size="mini" style="margin-left:20px;margin-top:5px;cursor:pointer;color:#dad3d3"><span @click="goBuessuss(menu)">{{menulevel.name}}</span></a>
                    </span>
                    </el-col>
                </el-row>
            </div>
       </div> -->
       <!-- 菜单 -->
        <div style="height: 850px;margin-top:-3%">
           <el-row :gutter="18" type="flex" justify="center" >
               <el-col :span='6'>
                   <el-row  @click.native="goBuessuss({id:'SZJC'})"  style=" height: 420px;background: linear-gradient(to right, #D33D15 , #C9624A);padding-top: 22%;cursor: pointer">
                       <div> <img src="../assets/img/home/首长决策.png" style="width:30%" alt=""> </div>
                       <div > 首长决策</div>
                    </el-row>
                   <el-row   @click.native="goBuessuss({id:'XF',url:'http://127.0.0.1:1666/view_xfjb/index.1.html'})" class="paddingTop" style=" height: 200px;background: linear-gradient(to right, #00748A , #0098AA);margin-top: 19px;">
                       <div> <img src="../assets/img/home/信访举报.png" alt=""> </div>
                       <div> 信访举报</div>
                   </el-row>
               </el-col>
               <el-col :span='6'>
                   <el-row   @click.native="goBuessuss({id:'ZF',url:'http://127.0.0.1:1666/view_zfjsdc/index.1.html'})" class="paddingTop" style=" height: 200px;background: #008DA1;">
                       <div> <img src="../assets/img/home/作风建设督查.png" alt=""> </div>
                       <div> 作风建设督查</div>
                   </el-row>
                   <el-row   @click.native="goBuessuss({id:'XSXC',url:'http://127.0.0.1:1666/view_xsxc/index.1.html'})" class="paddingTop" style=" height: 200px;background: linear-gradient(to right, #1F66ED , #4A84E6);margin-top: 19px;">
                        <div> <img src="../assets/img/home/巡视巡察.png" alt=""> </div>
                        <div> 巡视巡察</div>
                   </el-row>
                   <el-row   style=" height: 200px;margin-top: 19px;">
                       <el-col  @click.native="goBuessuss({id:'SCDC',url:'http://127.0.0.1:1666/view_scdc/index.1.html'})" class="paddingTop" :span='12' style=" height: 200px;background: #049701;">
                            <div> <img src="../assets/img/home/审查调查.png" alt=""> </div>
                            <div> 审查调查</div>
                       </el-col>
                       <el-col  @click.native="goBuessuss({id:'AJSL',url:'http://127.0.0.1:1222/departUser/loginNew?personEname=scssl&userPwd=123'})" class="paddingTop" :span='11' style=" height: 200px;background: linear-gradient(to right, #800187 , #9D0AA6); margin-left: 18px;">
                            <div> <img src="../assets/img/home/案件审理.png" alt=""> </div>
                            <div> 案件审理</div>
                       </el-col>
                   </el-row>
               </el-col>
               <el-col :span='6'>
                   <el-row >
                       <el-col @click.native="goBuessuss({id:'AJSLDA',url:'http://127.0.0.1:1666/view_slda/index.1.html'})"  class="paddingTop" :span='12' style=" height: 200px;background: linear-gradient(to right, #462BA1 , #6747B8)">
                             <div> <img src="../assets/img/home/案件审理档案管理.png" alt=""> </div>
                             <div> 案件审理档案管理</div>
                       </el-col>
                       <el-col  @click.native="goBuessuss({id:'JDJC',url:'http://127.0.0.1:1666/view_jdjc/index.1.html'})" class="paddingTop" :span='11' style=" height: 200px;background: #3C1AB9;margin-left: 18px;">
                            <div> <img src="../assets/img/home/监督检查管理.png" alt=""> </div>
                             <div> 监督检查管理</div>
                       </el-col>
                   </el-row>
                   <el-row  @click.native="goBuessuss({id:'DWJS',url:'http://127.0.0.1:1666/view_jdjjjc/index.1.html'})" class="paddingTop" style=" height: 200px;background: #0093A5;margin-top: 19px;">
                        <div> <img src="../assets/img/home/队伍建设.png" alt=""> </div>
                        <div> 队伍建设</div>
                   </el-row>
                   <el-row  @click.native="goBuessuss({id:'PTZC',url:'http://127.0.0.1:1777/xxpt?username=admin'})" class="paddingTop" style=" height: 200px;background: linear-gradient(to right, #06820E , #04A201);margin-top: 19px;">
                        <div> <img src="../assets/img/home/应用支撑平台.png" alt=""> </div>
                        <div> 应用支撑平台</div>
                   </el-row>
               </el-col>

           </el-row>
        </div>


        <!-- <div>
            <div style="padding-left: 14%; margin-top: 4%;" class="grid">
                <el-row :gutter='20' >
                     <figure>
                        <div class='menuDesktop1'></div>
                        <figcaption>
                            <h3>首长决策</h3>
                            <span>Jacob Cummings</span>
                             <a href=" ">Take a look</a >
                        </figcaption>
                     </figure>
                    <el-col :span='4'> <div class='menu menuDesktop1'>首长决策</div> </el-col>
                    <el-col :span='4'><div class='menu menuDesktop2'>信访举报</div></el-col>
                    <el-col :span='4'><div class='menu menuDesktop3'>监督检查管理</div></el-col>
                    <el-col :span='4'><div class='menu menuDesktop4'>审查调查</div></el-col>
                    <el-col :span='4'><div class='menu menuDesktop5'>巡视巡察工作
                          <div class="menuLevel2">一级菜单</div>
                    </div></el-col>
                </el-row>
                <el-row  :gutter='20' style='margin-top:20px'>
                    <el-col :span='4'><div class='menu menuDesktop6'>案件审理</div></el-col>
                    <el-col :span='4'><div class='menu menuDesktop7'>案件审理档案</div></el-col>
                    <el-col :span='4' ><div class='menu menuDesktop8'>作风建设督查</div></el-col>
                    <el-col :span='4' ><div class='menu menuDesktop9'>业务支撑</div></el-col>
                    <el-col :span='4' ><div class='menu menuDesktop10'>XXXXXXXXX队伍建设
                        <div class="menuLevel2">一级菜单</div>

                    </div></el-col>
                </el-row>
            </div>
        </div> -->


        <!-- <div class="grid" style="margin-top:-3%"> -->
                <!-- <li class="cs-style-3">
                    <div class="SZJC">
                        <div @click="goBuessuss({})" style='cursor:pointer'>
                             <div class='level1Name' style="margin-top: 39%;  width: 90%;" >首长决策</div>
                             <img style="width: 100%;" src="../assets/img/entrance/业务入口_one.png" alt="">
                        </div>
                    </div>
                </li> -->
            <!-- <div class="cs-style-3" style="height: 300px; background: red;width:300px">
                <figure class="level">
                    <div @click="goBuessuss(menu)" style='cursor:pointer'>
                            <div class='level1Name' >11111 </div>
                    </div>
                        <figcaption >
                            <el-row class="font-color-white">
                                <el-col :span='8' style="cursor:pointer">工作1 </el-col>
                                <el-col :span='8' style="cursor:pointer">工作2 </el-col>
                                <el-col :span='8' style="cursor:pointer">工作3 </el-col>
                            </el-row>
                        </figcaption>
                </figure>
            </div>
          </div> -->
    </div>
</template>

<script >
 import _ from "lodash";
import { Component, Prop, Vue } from 'vue-property-decorator';
// import  "./js/modernizr.custom.js";



 export default  {
 data() {
    return {
       menus:[
        //     {
        //    id:'SZJC',
        //    name:'首长决策',
        //    url:'http://127.0.0.1/view_xfjb/index.1.html',
        //    img:require('../assets/img/entrance/业务入口_one.png'),
        //    menulevels:[]
        //  },
         {
           id:'XF',
           name:'信访举报',
           url:'http://127.0.0.1/view_xfjb/index.1.html',
           img:require('../assets/img/entrance/业务入口_two.png'),
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
           img:require('../assets/img/entrance/业务入口_three.png'),
           menulevels:[
             {
               name:'线索管理',
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
           ]
         },
         {
           name:'审查调查',
           url:'http://127.0.0.1/view_scdc/index.1.html',
            img:require('../assets/img/entrance/业务入口_four.png'),
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
           id:'XS',
           name:'巡视巡察工作',
            url:'http://127.0.0.1/view_xsxc/index.1.html',
            img:require('../assets/img/entrance/业务入口_five.png'),
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
           id:'SL',
           name:'案件审理',
            url:'http://127.0.0.1:8010/departUser/loginNew?personEname=zs&userPwd=123',
            img:require('../assets/img/entrance/业务入口_six.png'),
           menulevels:[
            {
               name:'审理业务',
               url:''
             },
             {
               name:'自办案件',
               url:''
             },
           ]
         },
         {
           name:'作风建设督查',
            url:'http://127.0.0.1/view_zfjsdc/index.1.html',
            img:require('../assets/img/entrance/业务入口_seven.png'),
           menulevels:[
             {
               name:'联系点工作',
               url:''
             },
             {
               name:'工作记录',
               url:''
             },
           ]
         },
         {
           name:'案件审理档案',
            url:'http://127.0.0.1/view_slda/index.1.html',
            img:require('../assets/img/entrance/业务入口_eight.png'),
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
           name:'XXXXXXXXX队伍建设',
            url:'http://127.0.0.1/view_jdjjjc/index.1.html',
            img:require('../assets/img/entrance/业务入口_nine.png'),
           menulevels:[
             {
               name:'XXX设置',
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
           ]
         },
         {
            name:'业务支撑',
            url:'http://192.168.216.181/xxpt?username=admin',
            img:require('../assets/img/entrance/业务入口_ten.png'),
           menulevels:[
             {
               name:'组织人员',
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
               name:'法规资料库',
               url:''
             },
             {
               name:'应用资源',
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
    console.log(this.$route.params)

    // console.log('123'+this.msg.state)
    // this.ModalData.state =_.cloneDeep(this.msg.state)
  },
  methods: {

    goSZJC(){
        let item = this.$router.resolve({ name: '/home/'});
        item.href = item.href+'home'
        window.open(item.href, '_blank');
    },
    close(){
    //   this.msg.state = false
    },
    goBuessuss(obj){
        console.log('123')
         let routeData  = {}
      switch (obj.id) {
            case 'SZJC':
                   routeData = this.$router.resolve({ name: '/home/'});
                   routeData.href = routeData.href+'home'
                   window.open(routeData.href, '_blank');
             break;
            default:
                 window.open(obj.url,'_blank')
              break;
        }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/jq22.css';
.menuDesktop{
    height: 1080px;
    box-shadow: 0px 5px 37px #767272;
    color: white;
    // background: RGB(37, 34, 34,0.95);
    background-image: url('../assets/img/back.png');
    background-size:  100%;
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

.menu{
    height: 265px;
    line-height: 220px;
    font-size: 24px;
    // transition: font-size 2s;
}
.menu:hover{
    font-size: 15px;
}
.menu:hover .menuLeve2{
    height: 200px;
}

.menuLevel{
//    background:RGB(255, 255, 255,0.1);
    /* border: 2px solid #738fa5; */
    // border: 2px solid red;
}
.menuLeve2{
    transition: height 2s;
    height: 0px;
    background: red;
}

.level1Name{
    position: absolute;
    width: 100%;
    z-index: 1;
    margin-top: 44%;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    transition: font-size 2s;
    transition:  margin-top 1s;
}
.level:hover .level1Name{
    font-size: 28px;
    margin-top: 80px;
}
.SZJC{
    height: 95px;
    width: 100%;

}
.paddingTop{
   padding-top: 41px;
   cursor: pointer
}

</style>
