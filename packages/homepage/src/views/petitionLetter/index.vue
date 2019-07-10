<template>
    <div class="desktop">
      <el-collapse-transition>
            <Menu v-show="menuModal.state" :msg="menuModal"> </Menu>
      </el-collapse-transition>
      <div v-show="identity == 'worker'" class="staff">
        <!-- <el-container>
          <Header></Header>
          <el-main>Main</el-main>
        </el-container> -->
        <Header :goback="changeflag" :identity="identity"></Header>
        <div class="content">
          <el-card class="trendsCard" id="trendCard">
            <div slot="header" class="title">
              <div class="close" @click="closeTrends()"></div>
              <span>今日动态</span>
            </div>
            <ul class="todayTrends">
              <li class="trend">
                <img src="../../assets/img/email.png"/>
                <div class="trendinfo">
                  <div class="new">新收件</div>
                  <div>新收到5件已扫描未登记的举报件。</div>
                </div>
                <el-button type="primary" plain class="register">登记</el-button>
              </li>
              <li class="trend">
                <img src="../../assets/img/email.png"/>
                <div class="trendinfo">
                  <div class="new">新收件</div>
                  <div>新收到5件已扫描未登记的举报件。</div>
                </div>
                <el-button type="primary" plain class="register">登记</el-button>
              </li>
              <li class="trend">
                <img src="../../assets/img/email.png"/>
                <div class="trendinfo">
                  <div class="new">新收件</div>
                  <div>新收到5件已扫描未登记的举报件。</div>
                </div>
                <el-button type="primary" plain class="register">登记</el-button>
              </li>
              <li class="trend">
                <img src="../../assets/img/email.png"/>
                <div class="trendinfo">
                  <div class="new">新收件</div>
                  <div>新收到5件已扫描未登记的举报件。</div>
                </div>
                <el-button type="primary" plain class="register">登记</el-button>
              </li>
              <li class="trend">
                <img src="../../assets/img/email.png"/>
                <div class="trendinfo">
                  <div class="new">新收件</div>
                  <div>新收到5件已扫描未登记的举报件。</div>
                </div>
                <el-button type="primary" plain class="register">登记</el-button>
              </li>
              <li class="trend">
                <img src="../../assets/img/email.png"/>
                <div class="trendinfo">
                  <div class="new">新收件</div>
                  <div>新收到5件已扫描未登记的举报件。</div>
                </div>
                <el-button type="primary" plain class="register">登记</el-button>
              </li>
            </ul>
          </el-card>
          <div class="head">
            <div class="title">工作台</div>
            <div @click="showTrends()" style="cursor: pointer;">
              <div class="trends">
              今日动态
              </div>
              <el-badge is-dot class="item email">
                <img src="../../assets/img/email.png"/>
              </el-badge>
            </div>
          </div>
          <div class="body">
            <el-main class="card">
              <div class="chead">
                <span class="cheadtitle">待办任务</span>
                <div class="updown">
                  <el-button icon="el-icon-arrow-left" class="move" @click="move('up')"></el-button>
                  <el-button icon="el-icon-arrow-right" class="move" @click="move('down')"></el-button>
                </div>
              </div>
              <div class="cbody">
                <el-carousel trigger="click" height="330px" :autoplay="false" ref="carousel">
                  <el-carousel-item name="1">
                    <ul class="carouselitem">
                      <li v-for="task in tasks">
                        <div class="cards">
                          <img class="carimg" :src="task.icon"/>
                          <div class="cartext"><span class="carBigtext">{{task.number}}</span>件<div class="mes">{{task.title}}</div></div>
                        </div>
                      </li>
                    </ul>
                  </el-carousel-item>
                  <el-carousel-item name="2">
                    <ul class="carouselitem">
                      <li v-for="task in tasks">
                        <div class="cards">
                          <img class="carimg" :src="task.icon"/>
                          <div class="cartext"><span class="carBigtext">{{task.number}}</span>件<div class="mes">{{task.title}}</div></div>
                        </div>
                      </li>
                    </ul>
                  </el-carousel-item>
                  <el-carousel-item name="3">
                    <ul class="carouselitem">
                      <li v-for="task in tasks">
                        <div class="cards">
                          <img class="carimg" :src="task.icon"/>
                          <div class="cartext"><span class="carBigtext">{{task.number}}</span>件<div class="mes">{{task.title}}</div></div>
                        </div>
                      </li>
                    </ul>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </el-main>
            <el-row :gutter="20">
              <el-col :span="15">
                <el-main class="card">
                  <div class="chead">
                    <span class="cheadtitle">本月工作量</span>
                  </div>
                  <div class="cbody">
                    <ul class="workload">
                      <li style="height: 100%;">
                        <div id="circlePic1" style="height: 100%;"></div>
                      </li>
                      <li style="height: 100%;">
                        <div id="circlePic2" style="height: 100%;"></div>
                      </li>
                      <li style="height: 100%;">
                        <div id="circlePic3" style="height: 100%;"></div>
                      </li>
                    </ul>
                  </div>
                </el-main>
              </el-col>
              <el-col :span="9">
                <el-main class="card">
                  <div class="chead">
                    <span class="cheadtitle">督办预警</span>
                    <span class="morewarning"><i class="el-icon-arrow-right"></i></span>
                  </div>
                  <div class="cbody">
                    <ul class="warning" id="warnlist">
                      <li>
                        <el-row>
                          <div class="doc" style="background:red;"></div>
                          <el-col :span="13"><div class="event">【张三】 反映 【李斯】 的 【违反政治纪律问题】</div></el-col>
                          <el-col :span="8"><div class="status">扫描未登记</div></el-col>
                          <el-col :span="3"><el-button type="primary" plain class="warnningbtn">处理</el-button></el-col>
                        </el-row>
                      </li>
                      <li>
                        <el-row>
                          <div class="doc" style="background:orange;"></div>
                          <el-col :span="13"><div class="event">【张三】 反映 【李斯】 的 【违反政治纪律问题】</div></el-col>
                          <el-col :span="8"><div class="status">扫描未登记</div></el-col>
                          <el-col :span="3"><el-button type="primary" plain class="warnningbtn">处理</el-button></el-col>
                        </el-row>
                      </li>
                      <li>
                        <el-row>
                          <div class="doc" style="background:blue;"></div>
                          <el-col :span="13"><div class="event">【张三】 反映 【李斯】 的 【违反政治纪律问题】</div></el-col>
                          <el-col :span="8"><div class="status">扫描未登记</div></el-col>
                          <el-col :span="3"><el-button type="primary" plain class="warnningbtn">处理</el-button></el-col>
                        </el-row>
                      </li>
                      <li>
                        <el-row>
                          <div class="doc" style="background:yellow;"></div>
                          <el-col :span="13"><div class="event">【张三】 反映 【李斯】 的 【违反政治纪律问题】</div></el-col>
                          <el-col :span="8"><div class="status">扫描未登记</div></el-col>
                          <el-col :span="3"><el-button type="primary" plain class="warnningbtn">处理</el-button></el-col>
                        </el-row>
                      </li>
                      <li>
                        <el-row>
                          <div class="doc" style="background:green;"></div>
                          <el-col :span="13"><div class="event">【张三】 反映 【李斯】 的 【违反政治纪律问题】</div></el-col>
                          <el-col :span="8"><div class="status">扫描未登记</div></el-col>
                          <el-col :span="3"><el-button type="primary" plain class="warnningbtn">处理</el-button></el-col>
                        </el-row>
                      </li>
                    </ul>
                  </div>
                </el-main>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <!--                    leader            start        -->
      <div v-show="identity == 'leader'" class="leader">
        <el-header class="leader-header" height="78px">
          <div class="leader-header-icon">
            <img src="../../assets/img/xboss-header.png" alt="" style="height: 184px;left: 0px;float: left;position: absolute;top: 0px;">
          </div>
          <el-menu :default-active="leaderNavdefault" class="el-menu-demo leaderNav" mode="horizontal" @select="leaderNavSelect" active-text-color="#c2cae5">
            <el-menu-item class="nav-item" v-for="item in leaderNavs" :key="item.index" :index="item.index"><div v-show="leaderSelectIndex == item.index" class="nav-title"></div>
            <div style="font-size: 17px;">{{item.title}}</div>
            </el-menu-item>
          </el-menu>
          <div class='menu1'>
            <img src="../../assets/img/user-logo.png" alt="" style="height: 188px;height: 33px;margin-bottom: 2px;" @click="changeflag()">
          </div>
          <div class='menu2'>
            <span style="font-size:20px!important;margin-left: 10px;" @click='login'>返回系统</span>
          </div>
        </el-header>
        <el-container>
          <el-container class="container-left" direction="vertical">
            <el-main class="waitInstructions">
              <div class="main-header waitInstructions-header">
                | 待批示
                <a href="#">更多</a>
              </div>
              <div class="waitInstructions-container">
                <ul>
                  <li v-for="(item,index) in waitInstructions" :key="index">
                    <div class="waitInstructions-container-icon">
                      <img src="../../assets/img/wait-processing.png" alt="#">
                    </div>
                    <div class="waitInstructions-container-title">
                      {{item.title}}
                    </div>
                    <div class="waitInstructions-container-content">
                      {{item.content}}
                    </div>
                    <div class="waitInstructions-container-time">
                      {{item.time}}
                    </div>
                    <el-button round class="waitInstructions-container-operation">批示</el-button>
                  </li>
                </ul>
              </div>
            </el-main>
            <el-main class="supervision" style='padding-bottom: 0px;margin-top: 10px'>
              <div class="main-header">
                | 督察督办
              </div>
              <div class="supervision-container">
                <ul>
                  <li v-for="(item, index) in supervision" :key="index">
                    <el-row>
                      <el-col :span='5' class='font-size-30'>
                        <i class="iconfont icon-xinfengkai menuButton" style="font-size:40px!important;margin-top:9px"></i>
                      </el-col>
                      <el-col :span='19'>
                        <span style="font-size:48px;">{{item.number}}</span>件
                      </el-col>
                    </el-row>
                    <el-row type="flex" justify="end">
                      <el-col :span="19" class="supervision-container-state">{{item.state}}</el-col>
                    </el-row>
                    <!-- <div class="supervision-container-letter">
                      <div><i class="iconfont icon-daohang menuButton" style="font-size:40px!important;"></i></div>
                      <div class="supervision-container-number"><span style="font-size:48px;">{{item.number}}</span>件</div>
                    </div>
                    <div class="supervision-container-state">{{item.state}}</div> -->
                  </li>
                </ul>
              </div>
            </el-main>
          </el-container>
          <el-container class="container-right" direction="vertical">
            <el-main class="nowAnalysis">
              <div class="main-header">
                | 2018XXX等级受理情况
              </div>
              <div class="allAnalysis-container">
                <el-row>
                  <el-col :span="12" class="text-left">
                    <div class="font-size-20 allAnalysis-totle">自收信访总量 <span class="font-size-32">320</span>件次</div>
                    <div class="font-size-30 font-color-red"><i class="iconfont icon-jiantou "></i>25.3%</div>
                  </el-col>
                </el-row>
                <el-col :span="20"  class="text-left">
                  <div style="height: 275px">
                    <div id="examination4" style="height: 100%"></div>
                  </div>
                </el-col>
              </div>
            </el-main>
            <el-main class="allAnalysis" style="margin-top: 7px;padding-bottom: 8px;">
              <div class="main-header">
                | 2018全委受理情况
              </div>
              <div class="allAnalysis-container">
                <el-row>
                  <el-col :span="20" class="text-left">
                    <div class="font-size-20 allAnalysis-totle">信访举报总量 <span class="font-size-32">1920</span>件次</div>
                    <div class="font-size-30 font-color-green"> <i class="iconfont icon-jiantou-copy-copy"></i> 45.7%</div>
                  </el-col>
                </el-row>
                <el-col :span="20"  class="text-left" style="margin-top:20px;">
                  <div style="height: 250px">
                      <div id="styleSupervision2" style="height: 100%"></div>
                  </div>
                </el-col>
              </div>
            </el-main>
          </el-container>
        </el-container>
      </div>
      <!--                    leader            end          -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/petitionheader.vue';

import echarts from 'echarts';
import 'echarts-wordcloud/dist/echarts-wordcloud'
import 'echarts-wordcloud/dist/echarts-wordcloud.min'
// import config from 'common/config';
// import config from '../../../common/config';
import Menu from '@/components/Menu.vue';
@Component({
  components: {
    Header,
    Menu
  },
  data() {
    return {
        menuModal:{
              state:false
          },
        identity:''
          
    }
  },
 
  created(){
    // alert(config.ip);
    console.log(this.$route.params.type)
    if(this.$route.params.type){
      this.identity = this.$route.params.type
    }
    
  },
 mounted(){
   this.creatdata()   
  },
  methods: {
    showTrends(){
      var card = document.getElementById('trendCard');
      card.style.right = '0';
    },
    closeTrends(){
      var card = document.getElementById('trendCard');
      card.style.right = '-410px';
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
    changeflag(){
      let that = this
      this.identity = this.identity=='worker'?'leader':'worker'
      this.$forceUpdate();
      setTimeout(function(){
        that.creatdata()
      },100)
    },
    login(){
      window.open('http://127.0.0.1:1666/view_xfjb/index.1.html','_blank')
    },
    creatdata(){
     if(this.identity=='leader'){
        let styleSupervision2:any = echarts.init(document.getElementById('styleSupervision2'))
        let examination4:any = echarts.init(document.getElementById('examination4'))

        let styleSupervision2Option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c}+ ({d}%)"
            },
            legend: {
              orient: 'horizontal',
              data:['初次举报','检举控告类','谈话函询'],
              align:'left',
              textStyle:{
                color:'#F8F8F8',
                padding:[0,14]
              }
            },
            series: [
                {
                    type:'pie',
                    radius: ['30%', '45%'],
                    avoidLabelOverlap: true,
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                color: '#fff'
                            },
                            rich:{
                              up:{
                                color:'#01e5aa'
                              }
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        },
                      
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data:[
                        {value:213, name:'初次举报',label:{normal:{formatter:'213件次 \n 共600人次'}}},
                        {value:300, name:'检举控告类' , label:{normal:{formatter:'300件次 \n 同比增长30%'}}},
                        {value:200, name:'谈话函询' , label:{normal:{formatter:'200件次 \n 同比下降40%'}}},
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                          color:function(params:any) {
                      //自定义颜色
                      var colorList = [
                                    '#6BE8E7','#4DA9F8','#6EE995'
                          ];
                          return colorList[params.dataIndex]
                        }
                    }
                }
            ]
        };
        let examination4Option = {
          xAxis: {
              type: 'category',
              data: ['初次举报', '检举控告类', '署名举报', 'XXX级以上人员'],
              axisLine:{
                  lineStyle:{
                      color:'white',
                      width:2
                  }
              },
              splitLine:{
                　show:false
            　　},
              axisLabel : {//坐标轴刻度标签的相关设置。
                  interval:0,
                  rotate:"0"
              }
          },
          yAxis: [{
              type: 'value',
              name:'件次',
              nameTextStyle:{
                padding: [0, 18, 0, 0]
              },
              axisLine:{
                  lineStyle:{
                      color:'white',
                      width:2
                  }
              },
              splitLine:{
                  show:false
              }
          }
          ],
          series: [{
              data: [{value:400,name:'初次举报',label:{normal:{formatter:'{lh|400件次 \n 同比增长30%}',rich:{lh:{color:'white',lineHeight: 15,align:'center'}}}}}, 
              {value:330,name:'检举控告类',label:{normal:{formatter:'{lh|330件次 \n 同比增长30%}',rich:{lh:{color:'white',lineHeight: 15,align:'center'}}}}}, 
              {value:280,name:'署名举报',label:{normal:{formatter:'{lh|280件次 \n 同比降低21%}',rich:{lh:{color:'white',lineHeight: 15,align:'center'}}}}}, 
              {value:217,name:'XXX级以上人员',label:{normal:{formatter:'{lh|217件次 \n 同比降低18%}',rich:{lh:{color:'white',lineHeight: 15,align:'center'}}}}}], 
              type: 'bar',
                itemStyle: {
                  normal: {
                      　color: function (params:any){
                        // 大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                            var colorList = [
                              ['#4696DC','#6FE6EA'],
                              ['#ACDA4C','#F1B94B'],
                              ['#ACC84C','#8AEF99'],
                              ['#61C890','#84C8DE']
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
                  },
              },
                barWidth : 48,//柱图宽度
                label: {
                  normal: {
                      show: true,
                      position: 'top',
                      textStyle: {
                        color: 'white'
                      },
                      formatter : function(data:any) { 
                            return data.value + '件次'; 
                          }
                  }
                }
          }],
          grid:{
            left : '10%',
            right : '0%',
          }
        };
        styleSupervision2.setOption(styleSupervision2Option, true);
        examination4.setOption(examination4Option, true);
      }else{
      let circlePic1:any = echarts.init(document.getElementById('circlePic1'))
      let circlePicOption1 = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          icon: 'pin',
          top: 190,
          left: 'center',
          data:['信访件303件','来访303件','电话303件','网络303件']
        },
        color:['#3fbc34','#fda253','#2a52bb','#ee6d6f'],
        graphic:[
          {
              type:'text',
              left:'center',
              top: '22%',
              style:{
                  text:'受理',
                  textAlign:'center',
                  fill:'#7a7a7a',
              }
          },
          {
              type:'text',
              left:'center',
              top: '35%',
              style:{
                  text:'1212件',
                  textAlign:'center',
                  fill:'#000',
                  fontSize: 27
              }
          }
        ],
        series: [
          {
              name:'本月工作量',
              type:'pie',
              hoverAnimation:false,
              radius: ['50%', '60%'],
              center: ['50%', '35%'],
              label: {
                  normal: {
                      show: false,
                      position: 'center'
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:303, name:'信访件303件'},
                  {value:303, name:'来访303件'},
                  {value:303, name:'电话303件'},
                  {value:303, name:'网络303件'},
              ]
          }
        ]
      };
      circlePic1.setOption(circlePicOption1, true);

      let circlePic2:any = echarts.init(document.getElementById('circlePic2'))
      let circlePicOption2 = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          icon: 'pin',
          top: 190,
          left: 'center',
          data:['移送到其他相关部门125件','转送下级250件','谈话函询125件']
        },
        color:['#3fbc34','#2a52bb','#ee6d6f'],
        graphic:[
          {
              type:'text',
              left:'center',
              top: '22%',
              style:{
                  text:'办理',
                  textAlign:'center',
                  fill:'#7a7a7a',
              }
          },
          {
              type:'text',
              left:'center',
              top: '35%',
              style:{
                  text:'500件',
                  textAlign:'center',
                  fill:'#000',
                  fontSize: 27
              }
          }
        ],
        series: [
          {
              name:'本月工作量',
              type:'pie',
              hoverAnimation:false,
              radius: ['50%', '60%'],
              center: ['50%', '35%'],
              label: {
                  normal: {
                      show: false,
                      position: 'center'
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:125, name:'移送到其他相关部门125件'},
                  {value:250, name:'转送下级250件'},
                  {value:125, name:'谈话函询125件'},
              ]
          }
        ]
      };
      circlePic2.setOption(circlePicOption2, true);

      let circlePic3:any = echarts.init(document.getElementById('circlePic3'))
      let circlePicOption3 = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          icon: 'pin',
          top: 190,
          left: 'center',
          data:['移送到其他相关部门450件','其他50件']
        },
        color:['#2a52bb','#ee6d6f'],
        graphic:[
          {
              type:'text',
              left:'center',
              top: '22%',
              style:{
                  text:'了结',
                  textAlign:'center',
                  fill:'#7a7a7a',
              }
          },
          {
              type:'text',
              left:'center',
              top: '35%',
              style:{
                  text:'500件',
                  textAlign:'center',
                  fill:'#000',
                  fontSize: 27
              }
          }
        ],
        series: [
          {
              name:'本月工作量',
              type:'pie',
              hoverAnimation:false,
              radius: ['50%', '60%'],
              center: ['50%', '35%'],
              label: {
                  normal: {
                      show: false,
                      position: 'center'
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:450, name:'移送到其他相关部门450件'},
                  {value:50, name:'其他50件'},
              ]
          }
        ]
      };
      circlePic3.setOption(circlePicOption3, true);
      }
    }
},
})
export default class petitionLetter extends Vue {
  private updateTime:string =  (new Date()).getFullYear()+"-0"+( (new Date()).getMonth()+1)+"-"+ (new Date()).getDate();
  private radio6:string = '文'
  private switchDesktopGrade1:string = 'DXFXT'
  private switchDesktopGrade2:string = 'DLFXT'
  private showMenu:boolean = false
  private identity:any = 'worker' //worker  leader
  private chartSettings:any = {
        level: [
          [],
          ['111111', '1/5']
        ]
    }
  private chartSettings3:object = {
          roseType: 'radius'
    }
  private chartSettings4:object = {
         stack: { '用户': ['访问用户', '下单用户'] },
        area: true
    }
  createRandomItemStyle(){
      return {
          normal: {
              color: 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
              ].join(',') + ')'
          }
      };
    }
  private switchMenu() {
      this.showMenu = !this.showMenu
  }
  private changeDesktop() {
    console.log(this.switchDesktopGrade1)
  }


  //leader ----------------------------------------------------------------------------------------------------------- start
  //导航列表
  private leaderNavs:Array<object> = [{
    title:'年度信访情况',
    index: '1'
    },{
    title:'年度举报趋势',
    index: '2'
    },{
    title:'XXX级以上举报情况',
    index: '3'
    },{
    title:'举报问题分析',
    index: '4'
  }]
  //默认导航
  leaderNavdefault:string = '1'
  leaderSelectIndex:string = '1'
  //待批示列表
  waitInstructions:Array<object> = [
    {
      title:'王五提交的拟办批示',
      content:'【张三】反应【李四】的【违反政治纪律】问题',
      time:'2018-09-09'
    },
    {
      title:'王五提交的拟办批示',
      content:'【张三】反应【李四】的【违反政治纪律】问题',
      time:'2018-09-09'
    },
    {
      title:'王五提交的拟办批示',
      content:'【张三】反应【李四】的【违反政治纪律】问题',
      time:'2018-09-09'
    },
    {
      title:'王五提交的拟办批示',
      content:'【张三】反应【李四】的【违反政治纪律】问题',
      time:'2018-09-09'
    },
    {
      title:'王五提交的拟办批示',
      content:'【张三】反应【李四】的【违反政治纪律】问题',
      time:'2018-09-09'
    }
  ]
  //督察督办列表
  supervision:Array<object> = [
    {
      number: '5',
      type:'举报件',
      color:'2',
      state:'举报件已超期'
    },
    {
      number: '6',
      type:'举报件',
      color:'2',
      state:'举报件即将超期'
    },
    {
      number: '7',
      type:'移送件',
      color:'1',
      state:'超期未反馈结果'
    },
    {
      number: '6',
      type:'转办件',
      color:'2',
      state:'超期未签收'
    },
    {
      number: '16',
      type:'转办件',
      color:'2',
      state:'下级超期未签收'
    }
  ]

  tasks:Array<object> = [
    {
      icon: require("../../assets/img/mession1.png"),
      number: 123,
      title: "信访登记"
    },
    {
      icon: require("../../assets/img/mession2.png"),
      number: 45,
      title: "接收受理"
    },
    {
      icon: require("../../assets/img/mession3.png"),
      number: 74,
      title: "审阅批示"
    },
    {
      icon: require("../../assets/img/mession4.png"),
      number: 21,
      title: "信访处理"
    },
    {
      icon: require("../../assets/img/mession3.png"),
      number: 74,
      title: "审阅批示"
    },
    {
      icon: require("../../assets/img/mession4.png"),
      number: 21,
      title: "信访处理"
    },
    {
      icon: require("../../assets/img/mession5.png"),
      number: 24,
      title: "谈话函询"
    },
    {
      icon: require("../../assets/img/mession6.png"),
      number: 18,
      title: "下级报告"
    },
    {
      icon: require("../../assets/img/mession7.png"),
      number: 3,
      title: "本委反馈"
    },
    {
      icon: require("../../assets/img/mession8.png"),
      number: 8,
      title: "信访归档"
    },
    {
      icon: require("../../assets/img/mession7.png"),
      number: 3,
      title: "本委反馈"
    },
    {
      icon: require("../../assets/img/mession8.png"),
      number: 8,
      title: "信访归档"
    }
  ]
  

  //leader信访首页导航切换
  private leaderNavSelect(key:any , keyPath:any){
    this.leaderSelectIndex = key
  }
  //leader------------------------------------------------------------------------------------------------------------ end

}
</script>
<style>
.leader{
  background-image: url('../../assets/img/back.png');
  background-repeat: no-repeat;
  font-size: 14px;
  width: 100%;
  height: 100%;
  color: #e1e9f6;
  overflow: hidden;
}
.leader .menu1{
  position: absolute;
  top: 20px;
  right: 7%;
}
.leader .menu2{
  position: absolute;
  top: 25px;
  right: 2%;
}
.leader .el-menu{
  background: none;
}
.leader .leader-header{
  background-color: #162E7B;
  padding: 20px 50px;;
  text-align: left;
}
.leader .header_title{
  text-align: left;
  float: left;
  padding:20px 15px;
}
.leader .header_title .wz{
  font-size: 20px;
}
.leader .header_title .py{
  font-size: 15px;
  color: #b3b3b3;
}
.leader ul{
  padding: 0;
  margin: 0;
  text-align: left;
}
.leader .leaderNav{
  border-bottom-width: 0px!important;
  display: inline-block;
  margin-left: 44%;
}
.leader ul li{
  list-style: none;
  text-align: left;
}
.leader .leader-header-icon{
  float: left;
  height: 100%;
  display: inline-block;
  text-align: left;
}
.leader .el-menu::after{
  display : none;
}
.leader .el-menu-item{
  padding: 0 30px;
}
.leader .el-menu-item:not(.is-disabled):hover{
  background: rgb(0,0,0,0) !important;
  background-color: rgb(0,0,0,0) !important;
  color: #fff!important;
}
.leader .el-menu-item:not(.is-disabled):focus{
  background: rgb(0,0,0,0) !important;
  background-color: rgb(0,0,0,0) !important;
}
.leader .nav-item{
  position: relative;
  border: none !important;
  font-size: 16px;
}
.leader .nav-title{
  position: absolute;
  display: inline-block;
  bottom: 5px;
  width: 60px;
  height: 4px;
  border-radius: 10px;
  margin-left: 16%;
  background: #fff;
}
.leader .container-left{
  padding-left: 20px;
  width: 70%
}
.leader .container-right{
  padding: 20px 10px 0px 10px;
  padding-top: 0;
  width: 25%;
  overflow: hidden;
}
.leader .el-main{
  border-radius: 10px;
  margin:0 5px 8px 5px;
  background-color: rgb(30,82,182,0.2);
  color: #fff;
  flex:none;
}
.leader .waitInstructions{
  height: auto;
  margin-top: 26px;
  padding-bottom: 0px;
}
.leader .supervision{
  height: auto;
}
.leader .allAnalysis{
  height: auto;
}
.leader .nowAnalysis{
  height: auto;
  margin-top: 26px;
}
.leader .main-header{
  position: relative;
  text-align: left;
}
.leader .waitInstructions-header a{
  position: absolute;
  right: 10px;
  font-size: 14px;
  text-decoration: none;
  color: #04e9f6;
}
.leader .waitInstructions-container li{
  position: relative;
  list-style: none;
  text-align: left;
  height: 112px;
  padding: 15px 15px 22px 15px;
  border-bottom: 1px solid #4d5ca9;
}
.leader .waitInstructions-container li:last-child{
  border: none;
}
.leader .waitInstructions-container-icon{
  height: 50px;
  width: 50px;
  position: absolute;
  left: 0;
  margin-top: 10px;
}
.leader .waitInstructions-container-title{
  position: absolute;
  display: inline-block;
  font-size: 16px;
  width: 80%;
  margin-left: 4%;
}
.leader .waitInstructions-container-content{
  position: absolute;
  display: inline-block;
  width: 80%;
  margin-top: 40px;
  margin-left: 4%;
  opacity: 0.5;
}
.leader .waitInstructions-container-time{
  padding-top: 11px;
  position: absolute;
  margin-left: 92%;
}
.leader .waitInstructions-container-operation{
  height: 33px;
  border-radius: 20px !important;
  padding: 8px 24px !important;
  position: absolute;
  margin-left: 92%;
  margin-top: 40px;
  background: none;
  color: #fff!important;
}
.leader .el-button:focus,.leader .el-button:hover{
  background: none!important;
  background-color: none!important;
}
.leader .supervision-container{
  padding: 47px 0;
}
.leader .supervision-container li{
  display: inline-block;
  /* padding: 30px 90px; */
  width: 250px;
  height: 100px;
  position: relative;
}
.leader .supervision-container-letter{
  position: relative;
}
.leader .supervision-container-img{
  position: absolute;
}
.leader .supervision-container-number{

}
.leader .supervision-container-type{
  position: absolute;
  margin-top: 38%;
  margin-left: 18%;
}
.leader .supervision-container-state{

}
.leader .allAnalysis-container{
  text-align: left;
  padding: 0 10px;
}
.leader .allAnalysis-totle{
  width: 300px;
  padding-top: 10px;
  text-align: left;
  font-size: 14px;
}
.color_e86b5b{
  color: #e86b5b;
}
.color_6c95e6{
  color: #6c95e6;
}
.staff{
  width: 100%;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: hidden;
}
.staff .content{
  padding: 0 50px 0px 50px;
  position: relative;
}
.staff .content .trendsCard{
  position: absolute;
  top: 0;
  bottom: 0;
  right: -410px;
  width: 400px;
  z-index: 999999;
}
.staff .content .trendsCard .title{
  text-align: left;
  margin-top: 30px;
  color: #858585;
}
.staff .content .trendsCard .title .close{
  width:0;
  height:0;
  border-width:8px 0 8px 8px;
  border-style:solid;
  border-color:transparent transparent transparent #2a52bb;/*透明 透明 透明 灰*/
  position:absolute;
  cursor: pointer;
  top: 15px;
}
.staff .content .trendsCard .todayTrends{
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
}
.staff .content .trendsCard .todayTrends li.trend{
  width: 100%;
  height: 80px;
}
.staff .content .trendsCard .todayTrends li.trend img{
  float:left;
}
.staff .content .trendsCard .todayTrends li.trend .register{
  padding: 5px 18px;
  margin-top: 35px;
  float: left;
  border-radius: 15px;
  border-color: #4977fc;
  background-color: #ffffff;
  color: #4977fc;
}
.staff .content .trendsCard .todayTrends li.trend .trendinfo{
  position: relative;
  padding: 0 10px;
  text-align: left;
  float:left;
  width: 230px;
  font-size: 14px;
}
.staff .content .trendsCard .todayTrends li.trend .trendinfo .new{
  padding: 10px 0;
  color: #a2a2a2
}
.staff .content .head{
  height: 60px;
  line-height: 60px;
  position: relative;
}
.staff .content .head .title{
  float: left;
  font-size: 22px;
  color: #666666;
}
.staff .content .head .trends{
  float: right;
  font-size: 20px;
  color: #adadad;
}
.staff .content .head .email{
  float: right;
  margin-top: 10px;
  margin-right: 5px;
  cursor: pointer;
}
.staff .content .head .email sup{
  top: 10px!important;
  right: 13px!important;
}
.staff .content .body{
  width: 100%;
  position: relative;
}
.staff .content .body .card{
  overflow: unset;
  width: 100%;
  border: 1px solid #ccc;
  color: #5c5c5c;
  padding: 0;
  margin-bottom: 15px;
}
.staff .content .body .card .chead{
  padding: 20px;
  border-bottom: 1px solid #ccc;
  text-align: left;
}
.staff .content .body .card .chead .cheadtitle{
  position: relative;
}
.staff .content .body .card .chead .cheadtitle::before{
  content: "";
  position: absolute;
  height: 27px;
  width: 4px;
  left: -20px;
  background-color: #1c47b7;
}
.staff .content .body .card .chead .morewarning{
  float: right;
  cursor: pointer;
}
.staff .content .body .card .chead .updown{
  float: right;
}
.staff .content .body .card .chead .updown button.move{
  padding: 0px!important;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.staff .content .body .card .cbody{
  padding: 20px;
}
.staff .content .body .card .cbody ul{
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.staff .content .body .card .cbody ul.carouselitem li{
  box-sizing: border-box;
  width: 14%;
  height: 120px;
  float: left;
  margin: 16px 1.3% 0 1.3%;
  background-color: #e7e7ea;
  cursor: pointer;
  position: relative;
}
.staff .content .body .card .cbody ul.carouselitem li .cards{
  position: absolute;
  top: 25%;
  left: 25%;
}
.staff .content .body .card .cbody ul.carouselitem li:hover{
  border: 1px solid #2a52bb;
}
.staff .content .body .card .cbody ul.carouselitem li .carimg{
  position: absolute;
}
.staff .content .body .card .cbody ul.carouselitem li .cartext{
  width:80px;
  text-align: left;
  color: #666666;
  font-size: 15px;
  position: absolute;
  left: 55px;
}
.staff .content .body .card .cbody ul.carouselitem li .cartext .carBigtext{
  font-size: 30px;
  color: #000000;
}
.staff .content .body .card .cbody ul.carouselitem li .cartext .mes{
  padding: 5px 0;
}
.staff .content .body .card .cbody>ul.workload{
  height: 250px;
}
.staff .content .body .card .cbody>ul.workload>li{
  display: inline-block;
  width: 33%;
}
.staff .content .body .card .cbody ul.workload li .circle{
  margin: 0 auto;
  width: 150px;
  height: 150px;
  background-color: orange;
  border-radius: 50%;
  position: relative;
}
.staff .content .body .card .cbody ul.workload li .circle .text{
  position: absolute;
  width: 130px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
  color: #7a7a7a;
  font-size: 14px;
}
.staff .content .body .card .cbody ul.workload li .circle .text .item{
  display: block;
  padding: 25px 0 18px 0;
}
.staff .content .body .card .cbody ul.workload li .circle .text .itemnum{
  color: #000000;
  font-size: 24px;
}
.staff .content .body .card .cbody ul.workload li ul.message{
  list-style: none;
  padding: 0;
  width: 100%;
  height: 50px;
  margin-top: 30px;
  text-align: center;
  padding-left: 35px;
}
.staff .content .body .card .cbody ul.workload li ul.message li{
  float: left;
  position: relative;
  padding-right: 10px;
  font-size: 15px;
}
.staff .content .body .card .cbody ul.workload li ul.message li span{
  padding-left: 7px;
  font-size: 18px;
  font-weight: bold;
  color: #0071bc;
}
.staff .content .body .card .cbody ul.warning{
  height: 250px;
  width: 100%;
}
.staff .content .body .card .cbody ul.warning li{
  width: 100%;
  padding-bottom: 20px;
  position: relative;
  overflow: hidden;
}
.staff .content .body .card .cbody ul.warning li .doc{
  width: 12px;
  height: 12px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: 5px;
}
.staff .content .body .card .cbody ul.warning li .event{
  padding-left: 0px;
  font-size: 14px;
  color: #666666;
}
.staff .content .body .card .cbody ul.warning li .status{
  font-size: 14px;
  color: #666666;
}
.staff .content .body .card .cbody ul.warning li .warnningbtn{
  padding: 5px 20px!important;
}
.staff .content .body .card .cbody .el-carousel .el-carousel__button{
  background-color: #999999!important;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.staff .content .body .card .cbody .el-carousel .el-carousel__arrow{
  display: none;
}
</style>

