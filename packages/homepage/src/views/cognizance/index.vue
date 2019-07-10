<template>
    <div class="desktop" v-bind:class="{'desktop_back':!showflag}">
      <!-- 顶部信息 -->
       <el-collapse-transition>
            <Menu v-show="menuModal.state" :msg="menuModal"> </Menu>
       </el-collapse-transition>
       <Header :showflag='showflag'>
        <div slot="title_tab">
          <el-menu id="head_title" :default-active="earlyWarning" mode="horizontal" class="head_tab">
            <el-menu-item index="1" class="title_font">案件受理情况</el-menu-item>
            <el-menu-item index="2" class="title_font">案件统计分析</el-menu-item>
          </el-menu>
        </div>
        <div slot="title_user">
          <i v-show="showflag" style="font-size: 33px;margin-right: 25px;margin-top: 19.5px;width: 33px;height: 33px;float: left;" class="el-icon-bell"></i>
          <img src="../../assets/img/user-logo.png" style="float: left;margin-top: 19.5px;margin-right: 10px;width: 33px;" @click="gorole()">
          <div v-show="showflag" class="loginStatus"></div>
          <div class="menu" @click="gobess()">
            <!-- <i class="iconfont icon-daohang menuButton" style="font-size:40px!important;"></i> -->
            返回系统
          </div>
        </div>
      </Header>
      <!-- 内容区域 工作人员-->
      <div v-show="showflag">
          <el-row class="margin_left_5">
            <div class="desk">工作台</div>
            <el-col class="region1">
              <div class='content-title'>
                <span style="padding-left:16px">待办任务</span>
                <span class="left-flag">&nbsp;</span>
              </div>
              <el-row  type="flex"  justify="space-around" class='content content1'>
                <task-list v-for="task in tasklist" :task="task"></task-list>
              </el-row>
            </el-col>
            <el-col :span='17' class="region2">
              <div class='content-title'>
                <el-row type="flex" justify="space-between">
                  <el-col :span='12'>
                    <span style="padding-left:16px">案件跟踪</span>
                    <span class="left-flag">&nbsp;</span>
                  </el-col>
                  <el-col :span='4' class='select'>
                    <el-select style="text-aligin:right;" size="small" class='selectoption' v-model="textoption" placeholder="请选择">
                      <el-option
                        v-for="(item,index) in options"
                        :key="index"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
              <div class='content content2'>
                <el-col v-for="(region,index1) in region" :key='index1' :span='12' class="content-case">
                  <div>
                    <el-row>
                      <el-col :span="20" style='padding-left: 18px;font-size:18px'>{{region.name}}</el-col>
                      <el-col :span="4" style="font-size:14px">{{region.time}}</el-col>
                    </el-row>
                  </div>
                  <div style="margin-top:18px">
                    <el-row type="flex" class="row-bg" justify="space-between">
                      <el-col :span="12">
                        <el-steps :active='region.type' class="steps_back" align-center>
                          <el-step v-bind:class="{'steps_back_step':index===region.type&&index!==0&&index!==5,'steps_back_begin':index==0&&region.type==0,'steps_back_success':region.type==5,}" v-for="(item,index) in 5" :key="index"></el-step>
                          <!-- <el-step v-bind:class="{'steps_back_step':region.type==='1'}">{{region.type}}</el-step>
                          <el-step></el-step>
                          <el-step></el-step>
                          <el-step></el-step>
                          <el-step></el-step> -->
                        </el-steps>
                      </el-col>
                      <el-col :span="4">
                        <el-button size="small" v-if="region.type!=0&&region.type!=5" type="primary" plain>待批示</el-button>
                        <el-button size="small" v-if="region.type===5" type="success" plain>待批示</el-button>
                        <el-button size="small" v-if="region.type===0" type="danger" plain>待批示</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </div>
            </el-col>
            <el-col :span='6' class="region3" >
              <div class='content-title'>
                <span style="padding-left:16px">快捷操作</span>
                <span class="left-flag">&nbsp;</span>
              </div>
                <div class='content content3'>
                  <el-row>
                    <el-col :span='12' class='contentlist'>
                      <img class="shortout_img" src="../../assets/img/ajcx.png">
                      <div class="shortout_text">案件查询</div>
                    </el-col>
                    <el-col :span='12' class='contentlist'>
                      <img class="shortout_img" src="../../assets/img/qwss.png">
                      <div class="shortout_text">全文检索</div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span='12' class='contentlist'>
                      <img class="shortout_img" src="../../assets/img/wzbz.png">
                      <div class="shortout_text">文本编制</div>
                    </el-col>
                    <el-col :span='12' class='contentlist'>
                      <img class="shortout_img" src="../../assets/img/dxal.png">
                      <div class="shortout_text">典型案例</div>
                    </el-col>
                  </el-row>
                </div>
            </el-col>
          </el-row>
      </div>
      <!-- 内容区域 领导-->
      <div v-show="!showflag">
        <el-row class="leader_back" type="flex" justify="center">
          <el-col :span='8' class="leader_block1">
            <el-row>
              <!--自办受理总量-->
              <el-col class="leader_block1_col">
                <div style="height: 60px;line-height: 80px;"><span style="font-size:41px">13289</span>件次</div>
                <div style="font-size:10px;">自办案受理总量</div>
                <div style="height: 90px;line-height: 90px;">
                  同比<span class="font-size-30 font-color-green"> <i class="iconfont icon-jiantou-copy-copy" style="font-size: 26px;"></i> 35.5%</span>
                </div>
              </el-col>
              <!--申诉受理总量-->
              <el-col  class="leader_block1_col" style="margin-top:20px">
                <div style="height: 60px;line-height: 80px;"><span style="font-size:41px">802</span>件次</div>
                <div style="font-size:10px;">申诉案件受理总量</div>
                <div style="height: 90px;line-height: 90px;">
                  同比 <span class="font-size-30 font-color-red"><i class="iconfont icon-jiantou" style="font-size: 26px;"></i>17.5%</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <!--受重处分总量 扇形图-->
          <el-col :span="19" class="leader_block2">
            <div style="font-size:10px;text-align:left;padding-left:20px;height:60px;line-height: 77px">受重处分总量<span style="font-size:32px;">1920</span>件次</div>
            <div style="text-align:left;padding-left:20px">
              <span class="font-size-30 font-color-green"> <i class="iconfont icon-jiantou-copy-copy" style="font-size: 26px;"></i> 45.7%</span>
            </div>
            <div id="bight" style="width:753px;height:300px"></div>
          </el-col>
          <!--党纪处分总量 柱状图-->
          <el-col :span="19" class="leader_block3">
            <div style="font-size:10px;text-align:left;padding-left:20px;height: 60px;line-height: 77px">
              党纪处分总量
                <span style="font-size:32px;">
                  480
                </span>件次
            </div>
            <div style="text-align:left;padding-left:20px">
              <span class="font-size-30 font-color-green"> <i class="iconfont icon-jiantou-copy-copy" style="font-size: 26px;"></i> 12.5%</span>
            </div>
            <div id="histogram" style="width:753px;height:300px"></div>
          </el-col>
        </el-row>
        <!--案件预警-->
        <el-row class="file_all">
          <div class="file_title">
            <span style="padding-left:15px">案件预警情况</span>
            <div class="file_title_left">&nbsp;</div>
            <div style="float:right">
                  <el-button icon="el-icon-arrow-left" class="move" @click="move('up')"></el-button>
                  <el-button icon="el-icon-arrow-right" class="move" @click="move('down')"></el-button>
            </div>
          </div>
          <div style="margin-bottom:65px;margin-top:30px">
          <el-carousel trigger="click" arrow="never" indicator-position="none" :autoplay="false" ref="carousel">
            <el-carousel-item v-for="(item,index) in 4" :key="index">
                <file/>
            </el-carousel-item>
          </el-carousel>  
          </div>
        </el-row>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TaskList from '@/components/TaskList.vue';
import Header from '@/components/Header.vue';
import file from '@/components/file.vue';
import echarts from 'echarts';
// import Menu from 'Menu';
import Menu from '@/components/Menu.vue';
import 'echarts-wordcloud/dist/echarts-wordcloud'
import 'echarts-wordcloud/dist/echarts-wordcloud.min'
// import config from 'common/config';
// import config from '../../../common/config';

@Component({
  components: {
    TaskList,
    Header,
    file,
    Menu
  },
  created(){
    console.log(this.$route.params.type)
    this.showflag = this.$route.params.type==='worker'
  },
 mounted(){
   this.creadata()
  },
  methods: {
    creadata(){
       let bight:any = echarts.init(document.getElementById('bight'))
      let histogram:any = echarts.init(document.getElementById('histogram'))
      let histogramOption = {
          color: ['#4592E5','#F3B84B','#86DDE1','#DC7653','#D16AAB'],
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          textStyle: {
              color: '#fff'
            },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  data : ['开除党籍', '警告', '留党查看', '撤销党内职务', '严重警告'],
                  axisTick: {
                      alignWithLabel: false
                  },
                  axisLine:{
                    lineStyle: {
                        color: '#4C82D9'
                    }
                  }
              }
          ],
          yAxis : [
            {
              type : 'value',
              axisLine: {
                    lineStyle: {
                        color: '#4C82D9'
                    }
                },
                splitLine:{
                  show:false
                },
            },
          ],
          series : [
              {
                  name:'直接访问',
                  type:'bar',
                  barWidth: '60%',
                  data:[80, 52, 200, 334, 390],
                  itemStyle: {
                    normal: {
                      color:function(params:any) {
                  //自定义颜色
                  var colorList = [
                    ['rgb(69,147,229)','rgb(110,228,234)'],
                    ['rgb(241,185,75)','rgb(172,220,72)'],
                    ['rgb(132,220,221)','rgb(97,200,143)'],
                    ['rgb(139,238,155)','rgb(212,204,96)'],
                    ['rgb(171,164,77)','rgb(125,216,137)'],
                    ];
                        var index=params.dataIndex;
                        if(params.dataIndex >= colorList.length){
                                index=params.dataIndex-colorList.length;
                          }
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                          [
                            {offset: 0, color: colorList[index][0]},
                            {offset: 1, color: colorList[index][1]},
                          ])
                    },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'+'件次'+'\n'+'同比增长13.5%'+''
                        }
                    }
                },
              },
          ]
      };
      let bightOption = {
        tooltip: { //鼠标移动提示
            show:false,
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: { //图示
          orient: 'horizontal',
          y: 'bottom',
          itemGap:50,//图例之间的间隔
          data:['XXX区善后','战区','XXX兵部','院校','XXX机关'],
          textStyle:{
              color:'#F8F8F8',
              padding:[0,14]
            }
        },
        series : [
            {
                name: '123',
                type:'pie',
                center: ["50%","40%"], //移动圆形位置
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                color:['rgb(179,251,79)','rgb(110,233,149)','rgb(29,96,246)','rgb(66,155,248)','rgb(112,242,252)'],
                label: {
                    normal: {
                        formatter: '{c|{c}}'+'件次'+'\n  '+'同比增长12.3%'+'  ',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        textStyle: {
                              color: '#fff'
                          },
                        rich: {
                            a: {
                                color: '#fff',
                                lineHeight: 10,
                                align: 'conter'
                            },
                            f:{
                              content:'adsasd',
                            },
                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                fontSize: 16,
                                lineHeight: 33
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },
                labelLine:{  
                    normal:{  
                      length:30
                    },
                    textStyle: {
                      color: '#fff'
                    }
                },  
                data:[
                    {value:335, name:'XXX区善后'},
                    {value:310, name:'战区'},
                    {value:234, name:'XXX兵部'},
                    {value:135, name:'院校'},
                    {value:300, name:'XXX机关'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]};

      bight.setOption(bightOption, true);
      histogram.setOption(histogramOption, true);
    },
    move(flag){
      if(flag == 'up'){
        if(this.$refs.carousel.activeIndex == 0){
          this.$refs.carousel.setActiveItem("3");
        }else{
          this.$refs.carousel.setActiveItem(this.$refs.carousel.activeIndex-1);
        }
      }
      if(flag == 'down'){
        if(this.$refs.carousel.activeIndex == 2){
          this.$refs.carousel.setActiveItem("0");
        }else{
          this.$refs.carousel.setActiveItem(this.$refs.carousel.activeIndex+1);
        }
      }
    },
    gobess(){
      window.open('http://127.0.0.1:1222/departUser/loginNew?personEname=scssl&userPwd=123', "_blank")
    },
    gorole(){
      let that = this
      this.showflag?this.showflag=false:this.showflag=true
      this.$forceUpdate()
      setTimeout(function(){
        that.creadata()
      })
      // var str = window.location.href;
      // var index = str .lastIndexOf("\/");  
      // str .substring(index + 1, str .length)==='worker'?window.open(str .substring(0,index + 1)+'leader','_self'):window.open(str .substring(0,index + 1)+'worker','_self')
      // window.location.reload(true)
    }
  },
  data() {
    return {
      earlyWarning:'1',
      textoption:'1',
      flag:true,
      active: 3,
      tasklist: [{
          id: 'zb',
          url: require("../../assets/img/task_zb.png"),
          name: '自办案件',
          number: '123'
        }, {
          id: 'bp',
          url: require("../../assets/img/task_bp.png"),
          name: '报批案件',
          number: '45'
        }, {
          id: 'ba',
          url: require("../../assets/img/task_ba.png"),
          name: '备案案件',
          number: '74'
        }, {
          id: 'zqyj',
          url: require("../../assets/img/task_ssfc.png"),
          name: '征求意见案件',
          number: '21'
        }, {
          id: 'ssfc',
          url: require("../../assets/img/task_ba.png"),
          name: '申诉复查案件',
          number: '74'
        }
      ],
      contentlist: [{
          id:"ajcx",
          url:require("../../assets/img/ajcx.png"),
          name:"案件查询"
        },
        {
          id:"qwss",
          url:require("../../assets/img/qwss.png"),
          name:"全文搜索"
        },
        {
          id:"wzbz",
          url:require("../../assets/img/wzbz.png"),
          name:"文字编制"
        },
        {
          id:"dxal",
          url:require("../../assets/img/dxal.png"),
          name:"典型案例"
        }
      ],
      region:[
        {
          name:'关于赵某违法违纪案',
          time:'2018-11-12',
          type:5
        },
        {
          name:'关于高某违法违纪案',
          time:'2018-11-12',
          type:2
        },
        {
          name:'关于韩某违法违纪案',
          time:'2018-11-12',
          type:2
        },
        {
          name:'关于杨某违法违纪案',
          time:'2018-6-23',
          type:3
        },
        {
          name:'关于张某违法违纪案',
          time:'2018-11-12',
          type:2
          
        },
        {
          name:'关于李某违法违纪案',
          time:'2018-10-10',
          type:0
        },
        {
          name:'关于赵某违法违纪案',
          time:'2018-11-12',
          type:1
        },
        {
          name:'关于赵某违法违纪案',
          time:'2018-11-12',
          type:4
        },
      ],
      options: [{
          value: '1',
          label: '报批案件回复'
      }],
       menuModal:{
        state:false
      },
    }
  }
})
export default class cognizance extends Vue {
  private showflag:boolean = false
  private menuModal:Object = {state:false}
  private changeDesktop() { }
  $refs: {
    audio: HTMLAudioElement,
    lyricsLines: HTMLDivElement
  }
}
</script>
<style scoped>
.desktop{
  height:100%;
}
.desktop_back{
  background-image: url('../../assets/img/back.png')
}
.desk{
  float:left;
  margin:10px;
  font-weight: 500;
}
.margin_left_5{
  margin:10px 5% 15px 5%;
}
.leader_back{
  color:white;
  padding:0 1% 0 1%;
}
.content-title{
  line-height:33px;
  border: 1px solid #ccc;
  font-size:16px;
  font-weight:500;
  text-align: left;
  padding:12px 20px 12px 0px;
}
.left-flag{
  float: left;
  width:3px;
  background: rgb(80,120,244);
}
.content{
  width:100%;
}
.head_tab{
  background: fixed;
  display: table;
  text-align: center;
  margin-left: 44%;
  margin-top: 10px;
  /* margin: 10px auto auto; */
}
.content1{
  height:200px;
  border: 1px solid #ccc;
  border-top:none;
}
.content2{
  height:383px;
  border-left: 1px solid #ccc;
  border-top:none;
}
.content3{
  height:383px;
  border: 1px solid #ccc;
  border-top:none;
}
.content-case{
  padding-left:15px;
  padding-top:10px;
  text-align:left;
  height: 96px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.region1{

}
.region2{
  float: left;
  height:200px;
  margin-top:30px;
}
.region3{
  width: 28%;
  float: right;
  margin-top:30px;
  height:200px;
}
.tasklist{
  float: left;
  width: 14%;
  height: 75%;
  margin-left:35px;
  margin-top:20px;
  background-color: rgb(247, 248, 251)
}
.shortout{
  float: left;
  width:50%;
  margin-top:12%;
}
.contentlist{
  margin-top:13%;
}
.steps{
  background-color: brown
}
.step{
  background: yellow
}
.step>.el-step__head.is-success{
    background-color: brown

}
#head_title.el-menu::after, .el-menu::before{
  display:none
}
#head_title >>> .el-menu-item{
  color:rgb(125, 145, 213);
  background: none
}
#head_title >>> .el-menu-item:hover{
  color:white;
  background: none
}
#head_title >>> .el-menu-item.is-active{
  color:white;
  background: none
}
#head_title .el-menu-item{
  border-bottom:none
}
#head_title .el-menu-item.is-active{
  color:white;
  border-bottom:2px solid white!important
}
.el-menu.el-menu--horizontal{
  border: 0
}
.title_font{
  font-size: 20px;
}
.leader_block1{
  margin-top:1%;
  height:400px;
}
.leader_block1_row{
  background:hsla(219, 60%, 47%, 0.2);
}
.leader_block1_col{
  text-align: left;
  height:200px;
  background:hsla(219, 60%, 47%, 0.2);
  padding-left:20px;
}
.leader_block2{
  margin:1% 1%;
  height:420px;
  background:hsla(219, 60%, 47%, 0.2);
}
.leader_block3{
  margin-top:1%;
  height:420px;
  background:hsla(219, 60%, 47%, 0.2);;
}
.file{
  background:rgb(253,252,250);
  background-image: url('../../assets/img/cmap.png');
  height:250px;
}
.file_title{
  text-align: left;
  color: white;
  margin: 13px;
  font-size: 15pt;
  padding-left:10px;
}
.file_title_left{
  float: left;
  width:3px;
  background: #e4e4e4;
} 
.file_all{
  background:hsla(219, 60%, 47%, 0.2);
  margin:0 1%;

}
.move{
  background: transparent;
  padding: 0px!important;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.move >>> .el-icon-arrow-left:before{
  content: "\E600";
  color: white;
}
.move >>> .el-icon-arrow-right:before{
  content: "\E604";
  color: white;
}
.steps_back >>> .el-step__head.is-finish{
 color:white
}
.steps_back >>> .el-step__head.is-finish >.el-step__icon.is-text{
  background: #409EFF;
}
.steps_back >>> .el-step__head > .el-step__icon{
  width: 19px;
  height: 19px;
  font-size: 15px
}
.steps_back >>> .el-step__head > .el-step__line{
  margin-top: 2px;
}
.steps_back_step >>> .el-step__head{
  color: #409EFF !important;
}
.steps_back_step >>> .el-step__head >.el-step__icon.is-text{
  background: white !important;
  border-color: #409EFF !important;
}
.steps_back_begin >>> .el-step__head{
    color:white !important;
}
.steps_back_begin >>> .el-step__head >.el-step__icon.is-text{
  background: red !important;
  border-color: red !important;
}
.steps_back_success >>> .el-step__head >.el-step__icon.is-text{
  background: rgb(126,191,80) !important;
  border-color: rgb(126,191,80) !important;
}
.steps_back_success >>> .el-step__head.is-finish{
  border-color: rgb(126,191,80) !important;
}
.selectoption{
  width: 170px;
}
.selectoption >>> .el-input__inner{
      border: 1px solid #ccc;
}
.selectoption >>> .el-input__suffix > .el-input__suffix-inner i{ 
  color: #4e4b4b;
}
.selectoption >>> .el-input--suffix > .el-input__suffix{
  border-left: 1px solid;
}

</style>

