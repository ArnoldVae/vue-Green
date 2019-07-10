<template>
    <div :class="{'desktopLeader':isLeader,'desk':!isLeader}">
      <el-collapse-transition>
        <Menu v-show="menuModal.state" :msg="menuModal"> </Menu>
      </el-collapse-transition>
      <!-- 顶部信息 -->
      <Header v-show="isLeader" :isLeader="isLeader">
        <div slot="title_tab">
          <el-menu id="head_title" :default-active="earlyWarning" mode="horizontal" class="head_tab" style="background:none" @select="changeWarning">
            <el-menu-item index="1" class="title_font">本年度</el-menu-item>
            <el-menu-item index="2" class="title_font">十九大以来</el-menu-item>
            <el-menu-item index="3" class="title_font">十八大以来</el-menu-item>
          </el-menu>
        </div>
        <div slot="title_user">
           <div class="menu" style="font-size:20px!important;cursor:pointer;float:right" @click="goPage">返回系统</div>
          <div class="headPortrait_leader" @click="changePage"></div>
         
          <!-- <div class="menu" @click="menuModal.state=true" style="width:235px;text-align: right;"><i class="iconfont icon-daohang menuButton" style="font-size:40px!important;"></i></div> -->
        </div>
      </Header>
      <Header v-show="!isLeader" :isLeader="isLeader">
        <div slot="title_tab">
          <el-menu id="head_title" :default-active="earlyWarning" mode="horizontal" class="head_tab" @select="changeWarning">
            <el-menu-item index="1" class="title_font">本年度</el-menu-item>
            <el-menu-item index="2" class="title_font">十九大以来</el-menu-item>
            <el-menu-item index="3" class="title_font">十八大以来</el-menu-item>
          </el-menu>
        </div>
        <div slot="title_user">
          <div class="menu" style="font-size:20px!important;cursor:pointer;float:right" @click="goPage">返回系统</div>
          <div class="headPortrait_leader" @click="changePage"></div>
          <!-- <div @click="menuModal.state=true" class="menu"><i class="iconfont icon-daohang menuButton" style="font-size:40px!important;"></i></div> -->
        </div>
      </Header>
      <el-row style="margin-top:10px" class="options" v-show="isLeader" >
          <el-col :span='12' :offset='6'>
            <el-radio-group v-model="switchDesktopGrade1" text-color="#1FBEB4" fill="#05173F" >
                <el-radio-button label="DLFX" class="switchButtonlevel1">巡视情况</el-radio-button>
                <el-radio-button label="DXFX" class="switchButtonlevel1">现场了解</el-radio-button>
                <el-radio-button label="FXBG" class="switchButtonlevel1">整改落实</el-radio-button>
                <el-radio-button label="FXBG1" class="switchButtonlevel1">成果运用</el-radio-button>
            </el-radio-group>
          </el-col>
          <el-col :span='6' style="text-align:left">
            <el-radio-group v-model="switchDesktopGrade2" size="mini" text-color="#1FBEB4" fill="#05173F"  >
              <el-radio-button label="DLFXT" class="switchButtonlevel2"> <i class="iconfont icon-dabingtu iconfontRight"></i>图形</el-radio-button>
              <el-radio-button label="DLFXW" class="switchButtonlevel2"> <i class="iconfont icon-wenzi iconfontRight"></i>文字</el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
      <!-- 内容区域 -->
      <!-- 领导视图 -->
      <div v-show="isLeader">
        <el-row :gutter="20" style="margin:20px">
          <el-col :span='12'>
            <div class='leader_content'>
              <div id="coverCondition" style="height: 100%"></div>
            </div>
          </el-col>
          <el-col :span='12'>
            <div class='leader_content'>
              <div id="patrolTimes" style="height: 100%"></div>
            </div>
          </el-col>
          <el-col style="margin-top:10px;">
            <div class='leader_content'>
              <div id="patrolCondition" style="height: 100%"></div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 工作人员视图 -->
      <div v-show="!isLeader">
        <el-row class="margin_left_5" :gutter="20">
          <el-col :span='24'>
            <div class="desk">工作台</div>
          </el-col>
          <el-col :span='14' class="region1">
            <div class='content-title'>待办任务</div>
            <div class='content content1'>
              <el-row  type="flex" justify="space-around" style="margin-top:15px">
                <task-list v-for="task in tasks" :task="task"></task-list>
              </el-row>
            </div>
          </el-col>
          <el-col :span='10' class="region1">
            <div class='warning-title'>
              <el-menu :default-active="earlyWarning" mode="horizontal" @select="changeWarning">
                <el-menu-item index="1" class="title_font">督办预警</el-menu-item>
                <el-menu-item index="2" class="title_font">整改情况预警</el-menu-item>
              </el-menu>
            </div>
            <div class='content content1'>
              <el-table
                :data="tableData" 
                :cell-style="{'text-align':'center',padding:'0','border-color':'#ccc'}"
                :header-cell-style="{'text-align':'center','border-color':'#ccc!important'}"
                border style="width: 98%;margin:5px 5px 0 5px;border-color:#ccc!important">
                <el-table-column alert='center' prop="status" label="状态" width='60'>
                  <template slot-scope="scope">
                    <div v-show="scope.row.status=='1'" class="statusPoint1"></div>
                    <div v-show="scope.row.status=='2'" class="statusPoint2"></div>
                    <div v-show="scope.row.status=='3'" class="statusPoint3"></div>
                  </template>
                </el-table-column>
                <el-table-column prop="unit" label="整改单位"></el-table-column>
                <el-table-column prop="date" label="整改日期" width='120'></el-table-column>
                <el-table-column prop="term" label="整改期限" width='100'></el-table-column>
                <el-table-column prop="days" label="剩余天数" width='100'>
                  <template slot-scope="scope">
                    <span v-show="scope.row.status=='1'" style="color:rgb(250,44,22)">{{scope.row.days}}</span>
                    <span v-show="scope.row.status=='2'" style="color:rgb(54,179,39)">{{scope.row.days}}</span>
                    <span v-show="scope.row.status=='3'" style="color:rgb(251, 144, 67)">{{scope.row.days}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="options" label="操作" width='100'>
                  <template slot-scope="scope">
                    <el-button type="text">督办</el-button>
                    <el-button type="text">查看</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
          <el-col :span='12' class="region2">
            <div class='content-title'>
              <span>工作量统计</span>
            </div>
            <div class='content content2'>
              <el-row style="margin-top:20px">
                <el-col class="workItem">
                  <el-row style="height:30px;line-height:30px">
                    <el-col >
                      制定工作计划
                    </el-col>
                  </el-row>
                  <el-row style="height:50px">
                    <el-col style="color:#3FBC34">
                      <span class="fs_24" style="font-weight:500">15</span><span>份</span>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col class="workItem">
                  <el-row style="height:30px;line-height:30px">
                    <el-col >
                      组织动员培训
                    </el-col>
                  </el-row>
                  <el-row style="height:50px">
                    <el-col style="color:#2A52BB">
                      <span  class="fs_24" style="font-weight:500">32</span><span>次</span>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col class="workItem">
                  <el-row style="height:30px;line-height:30px">
                    <el-col >
                      发现问题数量
                    </el-col>
                  </el-row>
                  <el-row style="height:50px">
                    <el-col style="color:#FE451B">
                      <span  class="fs_24" style="font-weight:500">1232</span><span>个</span>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col class="workItem">
                  <el-row style="height:30px;line-height:30px">
                    <el-col >
                      发现问题单位
                    </el-col>
                  </el-row>
                  <el-row style="height:50px">
                    <el-col style="color:#EE6D6F">
                      <span  class="fs_24" style="font-weight:500">85</span><span>个</span>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col class="workItem">
                  <el-row style="height:30px;line-height:30px">
                    <el-col >
                      移交问题数量
                    </el-col>
                  </el-row>
                  <el-row style="height:50px">
                    <el-col style="color:#FDA253">
                      <span  class="fs_24" style="font-weight:500">547</span><span>个</span>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <div id="questionCensus" style="width:95%;height:300px"></div>
            </div>
          </el-col>
          <el-col :span='12' class="region3">
            <div class='content-title'>成果运用统计</div>
            <div class='content content3'>
              <el-container>
                <el-aside width="50%">
                  <el-row style="margin-top:20px">
                    <el-col class="workItem1">
                      <el-row style="height:30px;line-height:30px">
                        <el-col >
                          提出整改意见
                        </el-col>
                      </el-row>
                      <el-row style="height:50px">
                        <el-col style="color:#333">
                          <span  class="fs_24" style="font-weight:500">150</span><span>个</span>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col class="workItem1">
                      <el-row style="height:30px;line-height:30px">
                        <el-col >
                          整改落实数量
                        </el-col>
                      </el-row>
                      <el-row style="height:50px">
                        <el-col style="color:#333">
                          <span  class="fs_24" style="font-weight:500">100</span><span>个</span>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                  <div id="resultCensus" style="width:300px;height:300px;margin:auto"></div>
                </el-aside>
                <el-main>
                  <el-row >
                    <el-col class="workItem2">
                      <el-row style="height:30px;line-height:30px">
                        <el-col >
                          综合报告
                        </el-col>
                      </el-row>
                      <el-row style="height:50px">
                        <el-col style="color:#1781FF">
                          <span  class="fs_24" style="font-weight:500">32</span><span>个</span>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col class="workItem2">
                      <el-row style="height:30px;line-height:30px">
                        <el-col >
                          专题报告
                        </el-col>
                      </el-row>
                      <el-row style="height:50px">
                        <el-col style="color:#1781FF">
                          <span  class="fs_24" style="font-weight:500">32</span><span>个</span>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col class="workItem2">
                      <el-row style="height:30px;line-height:30px">
                        <el-col >
                          整改措施
                        </el-col>
                      </el-row>
                      <el-row style="height:50px">
                        <el-col style="color:#1781FF">
                          <span  class="fs_24" style="font-weight:500">32</span><span>个</span>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col class="workItem2">
                      <el-row style="height:30px;line-height:30px">
                        <el-col >
                          整改报告
                        </el-col>
                      </el-row>
                      <el-row style="height:50px">
                        <el-col style="color:#1781FF">
                          <span  class="fs_24" style="font-weight:500">32</span><span>个</span>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col class="workItem2">
                      <el-row style="height:30px;line-height:30px">
                        <el-col >
                          领导干部问题线索报告
                        </el-col>
                      </el-row>
                      <el-row style="height:50px">
                        <el-col style="color:#1781FF">
                          <span  class="fs_24" style="font-weight:500">32</span><span>个</span>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col class="workItem2">
                      <el-row style="height:30px;line-height:30px">
                        <el-col >
                          向巡视单位反馈
                        </el-col>
                      </el-row>
                      <el-row style="height:50px">
                        <el-col style="color:#1781FF">
                          <span  class="fs_24" style="font-weight:500">32</span><span>个</span>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-main>
              </el-container>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TaskList from '@/components/TaskList_patrol.vue';
import Header from '@/components/Header_patrol.vue';
import Menu from '@/components/Menu.vue';
import echarts from 'echarts';
import 'echarts-wordcloud/dist/echarts-wordcloud'
import 'echarts-wordcloud/dist/echarts-wordcloud.min'
// import config from 'common/config';
// import config from '../../../common/config';
@Component({
  components:{
    TaskList,
    Header,
    Menu
  },
  created(){
    // alert(config.ip);
    this.isLeader = this.$route.params.type=='leader'?true:false
  },
  mounted(){
    this.loadTable()
  },
  methods: {
    changeWarning(key, keyPath){
      console.log(key, keyPath);
    },
    loadTable(){
      if(this.isLeader){
        //覆盖情况
        let coverCondition:any = echarts.init(document.getElementById('coverCondition'))
        let patrolTimes:any = echarts.init(document.getElementById('patrolTimes'))
        let patrolCondition:any = echarts.init(document.getElementById('patrolCondition'))

        let coverConditionOption = {
          title:{
            text:'| 2018年各单位巡视覆盖情况',
            textStyle:{
              color:'white'
            },
            left:20,
            top:5
          },
          textStyle:{
            color:"white"
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          series: [
            {
              name:'2018年各单位类型巡视覆盖情况',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: true,
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: '16',
                  }
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: true
                }
              },
              data:[
                {value:32, name:'XXX区善后办'},
                {value:50, name:'院校'},
                {value:84, name:'战区'},
                {value:40, name:'XXX兵种'},
                {value:94, name:'XXX机关'},
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
                    '#18ED8C','#099CFF','#9BFF01','#15F5FF','#005EFF'
                  ];
                  return colorList[params.dataIndex]
                }
              }
            }
          ]
        };

        let patrolTimesOption = {
          title:{
            text:'| 2018年各巡视类型巡视次数',
            textStyle:{
              color:'white'
            },
            left:20,
            top:5
          },
          xAxis: {
            name:'',
            nameLocation:'end',
            nameTextStyle:{},
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'white',
                width:2
              }
            },
            splitLine:{
              show:false
          　}
          },
          tooltip: {
            trigger: 'item'
          },
          yAxis: {
            type: 'category',
            data: ['专项巡视','机动巡视','常规巡视','回头看'],
            axisLine:{
              lineStyle:{
                color:'white',
                width:1
              }
            },
            splitLine:{
        　　　　show:false
        　　 },
            nameGap:'1'
          },
          series: [{
            data: [ 401, 482, 532, 603],
            barWidth : 20,//柱图宽度
            type: 'bar',
              itemStyle: {
                normal: {
                　color: function (params:any){
                    // 大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                    var colorList = [
                      ['#9AE11F','#FDB628'],
                      ['#5DF490','#D8CC49'],
                      ['#67E0E3','#21CB88'],
                      ['#2293EC','#2AEAEC']
                    ];
                    var index=params.dataIndex;
                    if(params.dataIndex >= colorList.length){
                      index=params.dataIndex-colorList.length;
                    }
                    return new echarts.graphic.LinearGradient(0, 0, 1, 0,
                      [
                        {offset: 0, color: colorList[index][0]},
                        {offset: 1, color: colorList[index][1]},
                      ]
                    )
                  }
                }
              },
              label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                      color: 'white'
                    },
                    formatter : function(data:any) { 
                      return data.value+'件数'; 
                    }
                }
              }
          }]
        };
        let patrolConditionOption = {
          title:{
            text:'| 2018年各巡视组巡视覆盖情况',
            textStyle:{
              color:'white'
            },
            left:20,
            top:5
          },
          legend: {
            show:true,
            top:60,
            right:40,
            orient:'right',
            textStyle:{
              color:"white"
            },
            data:['第一巡视组','第二巡视组','第三巡视组','第四巡视组','第五巡视组','第六巡视组','第七巡视组','第八巡视组','第九巡视组']
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: {
            type: 'category',
            nameTextStyle:{
              fontSize:'16px'
            },
            data: ['第一轮巡视', '第二轮巡视','第三轮巡视'],
            axisLine:{
              lineStyle:{
                color:'white',
                width:2
              }
            }
          },
          yAxis: {
            type: 'value',
            nameTextStyle:{
              fontSize:'16px'
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
          },
          series: [
            {
              name:'第一巡视组',
              data: [3,3,3],
              type: 'bar',
              itemStyle: {
                normal: {
                　color: '#FF8463'
                },
              },
              barWidth : 20,//柱图宽度
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white'
                  }
                }
              }
            },
            {
              name:'第二巡视组',
              data: [3,3,3],
              type: 'bar',
              itemStyle: {
                normal: {
                　color: '#9BCA62'
                }
              },
              barWidth : 20,//柱图宽度
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white'
                  }
                }
              }
            },
            {
              name:'第三巡视组',
              data: [4,4,4],
              type: 'bar',
              itemStyle: {
                normal: {
                　color: '#FAD860'
                },
              },
              barWidth : 20,//柱图宽度
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white'
                  }
                }
              }
            },
            {
              name:'第四巡视组',
              data: [5,5,5],
              type: 'bar',
              itemStyle: {
                normal: {
              　  color: '#61C0DE'
                }
              },
              barWidth : 20,//柱图宽度
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white'
                  }
                }
              }
            },
            {
              name:'第五巡视组',
              data: [4,4,4],
              type: 'bar',
              itemStyle: {
                normal: {
                　color: '#9F87D3'
                },
              },
              barWidth : 20,//柱图宽度
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white'
                  }
                }
              }
            },
            {
              name:'第六巡视组',
              data: [3,3,3],
              type: 'bar',
              itemStyle: {
                normal: {
                　color: '#2D69FF'
                },
              },
              barWidth : 20,//柱图宽度
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white'
                  }
                }
              }
            },
            {
              name:'第七巡视组',
              data: [2,2,2],
              type: 'bar',
              itemStyle: {
                normal: {
                　color: '#EFAF43'
                },
              },
              barWidth : 20,//柱图宽度
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white'
                  }
                }
              }
            },
            {
              name:'第八巡视组',
              data: [4,4,4],
              type: 'bar',
              itemStyle: {
                normal: {
                　color: '#06B8AC'||function (params:any){
                  // 大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                    var colorList = [
                      ['#1891DC','#4263F1'],
                      ['#FED630','#FA9526'],
                      ['#6EE3E6','#1584DC'],
                      ['#FC9830','#F74429'],
                      ['#693CFD','#AB27FB']
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
              barWidth : 20,//柱图宽度
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white'
                  }
                }
              }
            },
            {
              name:'第九巡视组',
              data: [3,3,3],
              type: 'bar',
              itemStyle: {
                normal: {
                　color: "#AE55B1"
                },
                barWidth : 20,//柱图宽度
                label: {
                  normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      color: 'white'
                    }
                  }
                }
              }
            }
          ]
        };
      
        coverCondition.setOption(coverConditionOption, true);
        patrolTimes.setOption(patrolTimesOption, true);
        patrolCondition.setOption(patrolConditionOption, true);
      }else{
        let questionCensus:any = echarts.init(document.getElementById('questionCensus'))
        let resultCensus:any = echarts.init(document.getElementById('resultCensus'))

        let questionCensusOption = {
          title:{
            text:'其中问题数前五位',
            textStyle:{
              fontSize:18,
              fontWeight:'22'
            },
            left:20,
            top:20
          },
          tooltip: {
            trigger: 'item',
            formatter: "{b}: {c}"
          },
          xAxis: {
            name:'单位（个)',
            nameLocation:'end',
            nameTextStyle:{},
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'black',
                width:2
              }
            },
            splitLine:{
              show:false
          　}
          },
          yAxis: {
            type: 'category',
            data: ['南部战区','北部战区','海XXX','北京XXX区善后办','国防大学'],
            axisLine:{
              lineStyle:{
                color:'black',
                width:1
              }
            },
            splitLine:{
        　　　　show:false
        　　 },
            nameGap:'1'
          },
          series: [{
            data: [405, 358, 298, 258, 195],
            type: 'bar',
              itemStyle: {
                normal: {
                　color: function (params:any){
                    // 大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                    var colorList = [
                      ['#628FF4','#4263F1'],
                      ['#F9D68F','#FA9526'],
                      ['#9FFFE8','#1584DC'],
                      ['#DAC2FF','#F74429'],
                      ['#B8CCFF','#AB27FB']
                    ];
                    var index=params.dataIndex;
                    if(params.dataIndex >= colorList.length){
                      index=params.dataIndex-colorList.length;
                    }
                    return new echarts.graphic.LinearGradient(0, 0, 1, 0,
                      [
                        {offset: 0, color: colorList[index][0]},
                        {offset: 1, color: colorList[index][0]},
                      ]
                    )
                  }
                }
              },
              barWidth : 30,//柱图宽度
              label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                      color: 'black'
                    },
                    formatter : function(data:any) { 
                      return data.value; 
                    }
                }
              }
          }]
        };

        let resultCensusOption = {
          title:{
            show:true,
            text:80+'%',
            x:'center',
            y:'center',
            textStyle: {
              fontSize: '50',
              color:'black',
              fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{d}%"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            show:false
          },
          series: 
            {
              name:'',
              type:'pie',
              radius: ['55%', '70%'],
              avoidLabelOverlap: true,
              hoverAnimation:false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                　color: function (params:any){
                  // 大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                    var colorList = [
                      ['#9E5CFB','#39B2FC'],
                      ['#E6E6E6','#E6E6E6'],
                    ];
                    var index=params.dataIndex;
                    if(params.dataIndex >= colorList.length){
                      index=params.dataIndex-colorList.length;
                    }
                    return new echarts.graphic.LinearGradient(0, 0, 1, 0,
                      [
                        {offset: 0, color: colorList[index][0]},
                        {offset: 1, color: colorList[index][1]},
                      ]
                    )
                  },
                }
              },
              data:[
                {value:80, name:''},
                {value:100-80, name:''}
              ]
            }
        };

        questionCensus.setOption(questionCensusOption, true);
        resultCensus.setOption(resultCensusOption, true);
      }
    }
    
  },
  data() {
    return {
      menuModal:{
          state:false
      }
    }
  }
})
export default class Home extends Vue {
  private updateTime:string =  (new Date()).getFullYear()+"-0"+( (new Date()).getMonth()+1)+"-"+ (new Date()).getDate();
  private switchDesktopGrade1:string = 'DLFX'
  private switchDesktopGrade2:string = 'DLFXT'
  private showMenu:boolean = false;
  
  private isLeader:boolean;
  private earlyWarning:string = '1'
  private tableData:object[] = [
    {
      status:'1',
      unit:'沈阳XXX区善后办',
      date:'2018/1/1',
      term:'30天',
      days:'-20天'
    },
    {
      status:'2',
      unit:'沈阳XXX区善后办',
      date:'2018/1/1',
      term:'30天',
      days:'10天'
    },
    {
      status:'3',
      unit:'沈阳XXX区善后办',
      date:'2018/1/1',
      term:'30天',
      days:'5天'
    },
    {
      status:'1',
      unit:'中部战区',
      date:'2018/1/1',
      term:'30天',
      days:'-20天'
    }
  ]

  private tasks:object[]= [
    {
      num:'32',
      name:"信访受理",
      icon: require("../../assets/img/mession1.png")
    },
    {
      num:'45',
      name:"梳理分类",
      icon: require("../../assets/img/mession2.png")
    },
    {
      num:'74',
      name:"分类移交",
      icon: require("../../assets/img/mession3.png")
    },
    {
      num:'21',
      name:"移交督办",
      icon: require("../../assets/img/mession4.png")
    }
  ]

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
  private goPage(){
    window.open("http://127.0.0.1:1666/view_xsxc/index.1.html",'_blank')

    // if(this.isLeader){
    //    window.open("http://127.0.0.1:7888",'_blank')
    // }else{
    //    window.open("http://127.0.0.1:6888",'_blank')
    // }
   
  }
  
  private changePage(){
    this.isLeader = !this.isLeader
    let that = this;
    this.$forceUpdate()
    setTimeout(function(){
      that.loadTable()
    },100)
  }
}
</script>
<style scoped>
.desk{
  float:left;
  font-weight: 500;
  font-size: 20px;
}
.desktopLeader{
  height: 100%;
  position: fixed;
  width: 100%;
  background-color: #f5f7f9;
  background-image: url('../../assets/img/back.png');
  background-size:  100%;
  background-repeat: repeat-y;
  overflow:auto;
}
.content-left{
  width:1px;
  color: blue
}
.margin_left_5{
  margin:10px 10px 15px 30px!important
}
.content-title{
  font-size:16px;
  font-weight:500;
  border:1px solid #ccc;
  border-bottom: 0;
  text-align: left;
  padding:10px 20px;
  height: 50px;
}
.content-title::before{
  content:' ';
  background: #1C47B7;
  border:3px solid #1C47B7;
  margin: 0 20px 0 -20px;
}
.title_font{
  font-size: 20px;
}
.warning-title{
  font-size:16px;
  font-weight:500;
  border:1px solid #ccc;
  border-bottom: 0;
  text-align: left;
}
.content{
  border:1px solid #ccc;
}
.content1{
  height:230px;
}
.content2{
  height:450px;
}
.content3{
  height:450px;
}
.content-case{
  padding-left:15px;
  padding-top:10px;
  text-align:left;
  height: 100px;
  border-bottom: 1px solid rgb(247, 248, 251);
  border-left: 1px solid rgb(247, 248, 251);
}
.region2{
  float: left;
  height:200px;
  margin-top:20px;
}
.region3{
  float: right;
  margin-top:20px;
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
.statusPoint1{
  width: 10px;
  height: 10px;
  border:5px solid rgb(250,44,22);
  border-radius: 5px;
  margin: auto;
}
.statusPoint2{
  width: 10px;
  height: 10px;
  border:5px solid rgb(54,179,39);
  border-radius: 5px;
  margin: auto;
}
.statusPoint3{
  width: 10px;
  height: 10px;
  border:5px solid rgb(251, 144, 67);
  border-radius: 5px;
  margin: auto;
}
.workItem{
  width: 18%;
  height: 100px;
  margin: 1%;
  background-color: rgb(240, 246, 252)
}
.workItem1{
  width: 48%;
  height: 100px;
  margin: 1%;
}
.workItem2{
  width: 48%;
  height: 100px;
  margin: 1%;
  background-color: rgb(240, 246, 252)
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
  border: 0;
  background: none
}
.head_tab{
  background: fixed;
  display: table;
  text-align: center;
  margin: 10px auto auto;
}
.warning-title .el-menu--horizontal>.el-menu-item{
  float: left;
  height: 50px;
  line-height: 50px;
  margin: 0;
  font-size: 18px;
}
.leader_content{
  border: 1px solid white;
  border-radius: 5px;
  background-color:rgba(255,255,255,0.1);
  height:360px;
}
.switchButtonlevel1{
  margin-left:20px;
  border-radius: 4px;
  /* border: 3px solid #2391B6; */
}
.switchButtonlevel1 >>>.el-radio-button__inner{
  line-height: 1;
  white-space: nowrap;
  background: none!important;
  border: 1px solid #2391B6;
  font-weight: 500;
  color:white;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  cursor: pointer;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  /* padding: 13px 20px; */
  /* font-size: 14px; */
  border-radius: 0;
width: 80px;
padding: 10px;
font-size: 12px;
box-shadow:none!important;
}
.switchButtonlevel1 >>> .el-radio-button__orig-radio:checked+.el-radio-button__inner {
  background-color: rgb(5, 23, 63);
  color: rgb(31, 190, 180);
  border: 1px solid #2BF3E9!important;
  font-weight: bold;
    width: 80px;
    padding: 10px;
    font-size: 12px;
box-shadow:none!important;
}
.switchButtonlevel1>>>.el-radio-button:first-child:checked>>>span.el-radio-button__inner{
  border: 1px solid #2BF3E9!important;
}
.el-radio-button:first-child >>>span.el-radio-button__inner{
  border: 1px solid #2391B6!important;
}

.switchButtonlevel2:first-child>>>span.el-radio-button__inner {
  border: 0px !important;
  border-radius: 4px 0 0 4px;
  box-shadow: none!important;
  min-width:80px;
    font-size: 13px;
}

.switchButtonlevel2>>> .el-radio-button__inner{
  /* line-height: 1; */
  white-space: nowrap;
  background: none!important;
  font-weight: 500;
  border: 0!important;
  color: #fcfdfe;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  cursor: pointer;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  padding: 5px 10px!important;
  font-size: 13px;
  border-radius: 0;
  min-width:80px;
}
.switchButtonlevel2>>> .el-radio-button__orig-radio:checked+.el-radio-button__inner {
  color: #3FBDAE!important;
  background: none!important;
  border-color: #409EFF;
  border: 1px solid #28EED6!important;
  border-radius: 20px;
  padding:5px 10px!important;
  min-width:80px;
    font-size: 13px;
}
 .iconfontRight{
      margin-right:10px;
  }
  .fs_24{
    font-size: 32px
  }

  .el-menu--horizontal>.el-menu-item{
    height:50px;
    font-size: 18px!important;
  }
  .warning-title .el-menu--horizontal>.el-menu-item{
    height:50px;
    font-size: 16px!important;
  }
  .el-table--border{  
    border-right: 1px solid #ccc!important;
    border-bottom: 1px solid #ccc!important;
  }
</style>

