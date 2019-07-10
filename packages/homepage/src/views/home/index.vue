<template>
    <div class="desktop">
      <el-collapse-transition>
            <!-- <Menu v-show="menuModal.state" :msg="menuModal"> </Menu> -->
      </el-collapse-transition>
      <!-- 顶部信息 -->
      <div class="header">
           <el-row style="margin:0px">
                <img src="../../assets/img/logo.png" alt="">
                <el-col :span="8" :offset="8" style="margin-top: -5px;">
                    <el-menu id="head_title" :default-active="earlyWarning" mode="horizontal" class="head_tab" style="background:none">
                        <el-menu-item index="1" class="title_font">本年度</el-menu-item>
                        <el-menu-item index="2" class="title_font">十九大以来</el-menu-item>
                        <el-menu-item index="3" class="title_font">十八大以来</el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="8">
                    <el-col :span="20">
                        <!-- <div class="headPortrait"></div> -->
                    </el-col>
                    <el-col :span="4" :offset="20">
                        <div @click="menuModal.state=true" style="cursor:pointer;line-height: 76px;"> 
                            <i @click="goMenu()" class="el-icon-back menuButton"></i>
                        </div>
                    </el-col>
                </el-col>
            </el-row>
            <!-- 第二维度切换行 -->
             <el-row  style="margin-top:-10px"  class="options">
                <el-col :span='8' :offset='8'>
                   <el-radio-group v-model="switchDesktopGrade1" size="mini" text-color="#1FBEB4" fill="#05173F" @change="switchHomelevel1(switchDesktopGrade1)">
                        <el-radio-button label="DLFX" class="switchButtonlevel1">定量分析</el-radio-button>
                        <el-radio-button label="DXFX" class="switchButtonlevel1">定性分析</el-radio-button>
                        <el-radio-button label="FXBG" class="switchButtonlevel1">专题报告</el-radio-button>
                    </el-radio-group>
                </el-col>
                <el-col :span='8' style="text-align:left">
                    <el-radio-group v-model="switchDesktopGrade2" size="mini" text-color="#1FBEB4" fill="#05173F"  v-show="switchDesktopGrade1=='DLFX'">
                        <el-radio-button label="DLFXT" class="switchButtonlevel2"> <i class="iconfont icon-dabingtu iconfontRight"></i>图形</el-radio-button>
                        <el-radio-button label="DLFXW" class="switchButtonlevel2"> <i class="iconfont icon-wenzi iconfontRight"></i>文字</el-radio-button>
                    </el-radio-group>
                    <el-radio-group v-model="switchDesktopGrade2" size="mini" text-color="#1FBEB4" fill="#05173F" v-show="switchDesktopGrade1=='DXFX'" @change="switchHomelevel2(switchDesktopGrade2)">
                        <el-radio-button label="DXFXR" class="switchButtonlevel2"> <i class="iconfont icon-zhexiantu" iconfontRight></i>人员分析</el-radio-button>
                        <el-radio-button label="DXFXT" class="switchButtonlevel2" style="margin-left: 20px"> <i class="iconfont icon-diqiu" iconfontRight></i>态势分析</el-radio-button>
                    </el-radio-group>
                    <el-radio-group v-model="switchDesktopGrade2" size="mini" text-color="#1FBEB4" fill="#05173F" v-show="switchDesktopGrade1=='FXBG'">
                        <el-radio-button label="FXBGW" class="switchButtonlevel2"> <i class="iconfont icon-zhexiantu" iconfontRight></i>违反八大事项专题报告</el-radio-button>
                        <el-radio-button label="FXBGQ" class="switchButtonlevel2" style="margin-left: 150px;"> <i class="iconfont icon-diqiu" iconfontRight></i>全XXX信访举报形式分析</el-radio-button>
                    </el-radio-group>
                </el-col>
            </el-row>
      </div>
      <!-- 内容区域 -->
      <div style="margin-top:80px">
        <!-- 定量分析-图 -->
        <div  v-show="switchDesktopGrade1=='DLFX'&&switchDesktopGrade2=='DLFXT'" style="margin:85px 40px 0px 66px;">
            <el-row  :gutter="20" style="margin-top:-30px">
                <!-- 信访举报 -->
                <el-col :span="8" class='font-color-white blockBg'>
                    <div class='text-center font-size-18'>信访举报</div>
                    <div class="text-left font-size-14 ">总体概况</div>
                    <el-row >
                        <el-col :span="8" class="text-left">
                            <div class="font-size-14">信访总量 <span class="font-size-20">1920</span>件次</div>
                            <div class="font-size-20 font-color-green"> <i class="iconfont icon-jiantou-copy-copy"></i> 45.7%</div>
                        </el-col>
                        <el-col :span="8"  class="text-left">
                            <div class="font-size-12">检控类 <span class="font-size-20">1600</span>件次</div>
                            <div class="font-size-20 font-color-green"><i class="iconfont icon-jiantou-copy-copy"></i>30</div>
                        </el-col>
                        <el-col :span="8"  class="text-left">
                            <div class="font-size-12">初次举报 <span class="font-size-20">320</span>件次</div>
                            <div class="font-size-20 font-color-red"><i class="iconfont icon-jiantou "></i>25.3%</div>
                        </el-col>
                    </el-row>
                    <div >
                        <el-row>
                            <el-col :span='12'>
                                <div class="text-left font-size-9">突出问题排名TOP5</div>
                                <div id="letterReport1" key="1" style="height: 100%"></div>
                            </el-col>
                            <el-col :span='12'>
                                <div class="text-left font-size-9">行政级别分布情况</div>
                                <div id="letterReport2" key="1" style="height: 100%"></div>
                            </el-col>
                        </el-row>
                        <el-row >
                            <el-col :span='12' style="height: 141px">
                                <div class="text-left font-size-9">突出问题分布排名TOP5</div>
                                <div id="letterReport3" key="1" style="height: 100%"></div>
                            </el-col>
                            <el-col :span='12'>
                                <div class="text-left font-size-9">信件方式分析</div>
                                <div id="letterReport4" key="1" style="height: 100%"></div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <!-- 监督检查 -->
                <el-col :span="7"  class='font-color-white blockBg'>
                    <div class='text-center font-size-18'>监督检查</div>
                    <el-row style="height:250px">
                        <el-col :span='12'>
                            <div class="text-left font-size-14 ">总体概况</div>
                            <el-row >
                                <el-col :span="12" class="text-left">
                                    <div class="font-size-14"> <span class="font-size-20 font-color-green">3324</span>件次</div>
                                    <div class="font-size-12 op_7">收到问题线索总量</div>
                                </el-col>
                                <el-col :span="12"  class="text-left">
                                    <div class="font-size-14"> <span class="font-size-20 font-color-green">458</span>人</div>
                                    <div class="font-size-12 op_7">查出涉案人员</div>
                                </el-col>
                            </el-row>
                            <el-row style="margin:0px">
                                <div id="supervise1" style="height: 100%"></div>
                            </el-row>
                            <el-row style='height:134px'>
                                <div class="text-left font-size-9">突出问题排名TOP5</div>
                                <div id="supervise2" style="height: 100%"></div>
                            </el-row>
                        </el-col>
                        <el-col :span='12' style="margin-top: -15px;">
                            <el-row>
                                <div class="text-left font-size-9">线索来源分析</div>
                                <div id="supervise3" style="height: 100%"></div>
                            </el-row>
                            <el-row style="margin-top: -15px;">
                                <div class="text-left font-size-9">突出问题分布排名TOP5</div>
                                <div id="supervise4" style="height: 100%"></div>
                            </el-row>
                            <el-row>
                                <div class="text-left font-size-9">信件方式分析</div>
                                <div id="supervise5" style="height: 100%"></div>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
                <!-- 审查调查 -->
                <el-col :span="8"  class='font-color-white blockBg'>
                    <div class='text-center font-size-18'>审查调查</div>
                    <el-row>
                        <el-col :span='12'>
                            <el-row>
                                <div class="text-left font-size-14 ">总体概况</div>
                                <el-row style="margin: 10px 0px 33px 0px;">
                                    <el-col :span="11" class="text-left">
                                        <div class="font-size-14"> <span class="font-size-20 font-color-green">1794</span>件次</div>
                                        <div class="font-size-12 op_7">收到问题线索总量</div>
                                    </el-col>
                                    <el-col :span="13"  class="text-left">
                                        <div class="font-size-14"> <span class="font-size-20 font-color-green">85</span>种</div>
                                        <div class="font-size-12 op_7">使用审查调查措施手段</div>
                                    </el-col>
                                </el-row>
                            </el-row>
                            <el-row>
                                <div class="text-left font-size-9">审查初核情况</div>
                                <div id="examination1" style="height: 100%"></div>
                            </el-row>
                            <el-row style="margin-top: -31px;">
                                <div class="text-left font-size-9">留置对象情况</div>
                                <div id="examination2" style="height: 100%"></div>
                            </el-row>
                        </el-col>
                        <el-col :span='12'>
                            <el-row>
                                <div class="text-left font-size-14 ">违纪情况</div>
                                <el-row >
                                    <el-col :span="12" class="text-left">
                                        <div class="font-size-14"> <span class="font-size-20 font-color-green">48</span>件次</div>
                                        <div class="font-size-12 op_7">XXX职级以上违纪</div>
                                    </el-col>
                                    <el-col :span="12"  class="text-left">
                                        <div class="font-size-14"> <span class="font-size-20 font-color-green">12</span>种</div>
                                        <div class="font-size-12 op_7">一把手违纪</div>
                                    </el-col>
                                </el-row>
                            </el-row>
                            <el-row style="height:220px">
                                <div class="text-left font-size-9">案件属实程度分析</div>
                                <div id="examination3" style="height: 100%"></div>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row  :gutter="20">
                <!-- 案件审理 -->
                <el-col :span="8"  class='font-color-white blockBg'>
                    <div class='text-center font-size-18'>案件审理</div>
                    <el-row style="height:325px">
                        <el-col :span='12'>
                            <div class="text-left font-size-14 ">总体概况</div>
                            <el-row >
                                <el-col :span="15" class="text-left">
                                    <div class="font-size-14"> 案件总量<span class="font-size-20 font-color-green">4623</span>件次</div>
                                </el-col>
                            </el-row>
                            <el-row style='height:136px'>
                                <div id="caseTrial1" style="height: 100%"></div>
                            </el-row>
                            <el-row>
                                <div class="text-left font-size-9">信件方式分析</div>
                                <div id="caseTrial2" style="height: 100%"></div>
                            </el-row>
                        </el-col>
                        <el-col :span='12' style="margin-top:-15px">
                            <el-row>
                                <div class="text-left font-size-9">行政级别分布情况</div>
                                <div id="caseTrial3" style="height: 100%"></div>
                            </el-row>
                            <el-row style="margin-top:-11px">
                                <div class="text-left font-size-9">处分类型分析</div>
                                <div id="caseTrial4" style="height: 100%"></div>
                            </el-row>
                            <el-row  style="margin-top:-23px">
                                <div class="text-left font-size-9">不同年龄段处分案件数</div>
                                <div id="caseTrial5" style="height: 100%"></div>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
                <!-- 作风监督 -->
                <el-col :span="7"  class='font-color-white blockBg'>
                    <div class='text-center font-size-18'>作风监督</div>
                    <el-row>
                        <el-col :span='12'>
                            <div class="text-left font-size-14 ">总体概况</div>
                            <el-row style="height:150px">
                                <div id="styleSupervision1" style="height: 100%"></div>
                            </el-row>
                        </el-col>
                        <el-col :span='12'>
                            <div class="text-left font-size-14 ">线索核查情况</div>
                            <el-row style="height:170px;margin-top:0px">
                                <div id="styleSupervision2" style="height: 100%"></div>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span='24' style="margin-top: -16px;">
                        <div class="text-left font-size-14 ">突出问题分布排名TOP5</div>
                        <el-row style="height:100px">
                                <div id="styleSupervision3" style="height: 100%"></div>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
                <!-- 巡视巡察 -->
                <el-col :span="8"  class='font-color-white blockBg'>
                    <div class='text-center font-size-18'>巡视巡察 </div>
                    <el-row>
                        <el-col :span='12'>
                            <div class="text-left font-size-14 ">总体概况</div>
                            <el-row >
                                <el-col :span="9" class="text-left">
                                    <div class="font-size-14"> <span class="font-size-20 font-color-green">3324</span>件次</div>
                                    <div class="font-size-12 op_7">巡查工作</div>
                                </el-col>
                                <el-col :span="8"  class="text-left">
                                    <div class="font-size-14"> <span class="font-size-20 font-color-green">223</span>人</div>
                                    <div class="font-size-12 op_7">被巡查单位</div>
                                </el-col>
                                <el-col :span="7"  class="text-left">
                                    <div class="font-size-14"> <span class="font-size-20 font-color-green">184</span>人</div>
                                    <div class="font-size-12 op_7">发现问题</div>
                                </el-col>
                            </el-row>
                            <el-row style="height:120px">
                                <div id="patrol1" style="height: 100%"></div>
                            </el-row>
                        </el-col>
                        <el-col :span='12'>
                            <div class="text-left font-size-14 ">突出问题排名TOP5</div>
                            <el-row style="height:150px">
                                <div id="patrol2" style="height: 100%"></div>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span='24' style=" margin-top: -34px;">
                            <div class="text-left font-size-14 ">突出问题分布排名TOP5</div>
                            <el-row style="height:105px">
                                <div id="patrol3" style="height: 100%"></div>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <!-- 定量分析-文字 -->
        <div v-show="switchDesktopGrade1=='DLFX'&&switchDesktopGrade2=='DLFXW'">
             <el-carousel indicator-position="none" :interval="5000" :autoplay="true" :loop="true" height="800px" >
                <el-carousel-item :key="0">
                     <!-- 信访举报&监督检查 -->
                    <el-row class="font-color-white" style="top:15px">
                        <el-col :span="8" style="padding:15px">
                            <div  style="height: 600px">
                            <div>
                                <el-row  :gutter="1" align="middle" class="border-W" style="min-height:120px">
                                    <div class="font-size-26 headTitleDLW">信访举报</div>
                                    <div class="whead"></div>
                                    <div class="font-size-16 headTitle1">总体概况</div>
                                    <el-col :span="8" class="text-left">
                                        <div class="font-size-16">信访总量 <span class="font-size-24">1920</span>件次</div>
                                        <div class="font-size-24 font-color-green"> <i class="iconfont icon-jiantou-copy-copy"></i> 45.7%</div>
                                    </el-col>
                                    <el-col :span="8"  class="text-left">
                                        <div class="font-size-16">检控类 <span class="font-size-24">1600</span>件次</div>
                                        <div class="font-size-24 font-color-green"><i class="iconfont icon-jiantou-copy-copy"></i>30</div>
                                    </el-col>
                                    <el-col :span="8"  class="text-left">
                                        <div class="font-size-16">初次举报 <span class="font-size-24">320</span>件次</div>
                                        <div class="font-size-24 font-color-red"><i class="iconfont icon-jiantou "></i>25.3%</div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="12">
                                    <el-col :span="12">
                                        <div class=" border-W" style="min-height:260px">
                                            <div class="font-size-16 headTitle1">突出问题前五位</div>
                                            <div class="font-size-14 headContent1"><span class="isdot" style="background:#FC3157"></span> 违反生活纪律行为 <span class="font-size-24">150</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>违反组织纪律行为 <span class="font-size-24">130</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>违反群众纪律行为 <span class="font-size-24">90</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>违反工作纪律行为 <span class="font-size-24">90</span> 件次</div>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="border-W" style="min-height:260px">
                                            <div class="font-size-16 headTitle1">突出问题分布排行前五位</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#FC3157"></span> 国防大学 <span class="font-size-24">328</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>海XXX <span class="font-size-24">247</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>北部战区 <span class="font-size-24">331</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>南部战区 <span class="font-size-24">88</span> 件次</div>
                                        </div>
                                    </el-col>
                                </el-row >
                                <el-row :gutter="1" class="border-W" style="min-height:130px">
                                    <div class="font-size-16 headTitle1">信访方式分析</div>
                                    <el-col :span="6"  class="text-left4">
                                        <div class="font-size-16">来信 <span class="font-size-24">398</span>件次</div>
                                        <div class="font-size-24 font-color-green"> 12.7%</div>
                                    </el-col>
                                    <el-col :span="6"  class="text-left4">
                                        <div class="font-size-16">电话 <span class="font-size-24">498</span>件次</div>
                                        <div class="font-size-24 font-color-green">20.1%</div>
                                    </el-col>
                                    <el-col :span="6"  class="text-left4">
                                        <div class="font-size-16">来访 <span class="font-size-24">238</span>件次</div>
                                        <div class="font-size-24 font-color-green">11.9% </div>
                                    </el-col>
                                    <el-col :span="6" class="text-left4">
                                        <div class="font-size-16">网络 <span class="font-size-24">1600</span>件次</div>
                                        <div class="font-size-24 font-color-green">45% </div>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="1" class="border-W" style="min-height:120px">
                                <div class="font-size-16 headTitle1">行政级别分布情况</div>
                                    <el-col :span="4" class="text-left3">
                                        <div class="font-size-24">63 <span class="font-size-16">件次</span></div>
                                        <div class="font-size-14 op_07">正战区职 </div>
                                    </el-col>
                                    <el-col :span="4" class="text-left3">
                                        <div class="font-size-24">84 <span class="font-size-16">件次</span></div>
                                        <div class="font-size-14 op_07">副战区职 </div>
                                    </el-col>
                                    <el-col :span="4" class="text-left3">
                                        <div class="font-size-24">184 <span class="font-size-16">件次</span></div>
                                        <div class="font-size-14 op_07">正XXX职 </div>
                                    </el-col>
                                    <el-col :span="4" class="text-left3">
                                        <div class="font-size-24">171 <span class="font-size-16">件次</span></div>
                                        <div class="font-size-14 op_07">副XXX职 </div>
                                    </el-col>
                                    <el-col :span="4" class="text-left3">
                                        <div class="font-size-24">47 <span class="font-size-16">件次</span></div>
                                        <div class="font-size-14 op_07">XXX职以上 </div>
                                    </el-col>
                                </el-row>
                            </div>
                            </div>
                        </el-col>
                        <el-col :span="8" style="padding:17px" class="font-color-white">
                            <div style="height: 600px;">
                            <div>
                                <el-row :gutter="1" class="border-W" style="min-height:160px">
                                    <div class="font-size-26 headTitleDLW ">监督检查</div>
                                    <div class="whead"></div>
                                    <div class="font-size-16 headTitle1">总体概况</div>  
                                    <el-row style="text-align: left;margin:0;padding-left: 27px;">
                                        <div class="font-size-24 font-color-green">3324 <span class="font-size-16">件次</span></div>
                                        <div class="font-size-16">收到问题线索总量</div>
                                    </el-row>
                                    <el-row style="margin: 0 10px 0 20px;text-align:left">
                                        <el-col :span="4" >
                                            <div class="font-size-24">393 <span class="font-size-16">人</span></div>
                                            <div class="font-size-14 op_07">查处涉案人员</div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="font-size-24">96 <span class="font-size-16">人</span></div>
                                            <div class="font-size-14 op_07">正战区职</div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="font-size-24">78 <span class="font-size-16">人</span></div>
                                            <div class="font-size-14 op_07">副战区职</div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="font-size-24">14 <span class="font-size-16">人</span></div>
                                            <div class="font-size-14 op_07">正XXX职</div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="font-size-24">24 <span class="font-size-16">人</span></div>
                                            <div class="font-size-14 op_07">副XXX职</div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="font-size-24">25 <span class="font-size-16">人</span></div>
                                            <div class="font-size-14 op_07">XXX职以上</div>
                                        </el-col>
                                    </el-row>
                                </el-row>
                                <el-row :gutter="1" class="border-W" style="min-height:110px">
                                    <div class="font-size-16 headTitle1">线索来源分析</div>
                                    <el-row style="margin:0">
                                        <el-col :span="5" class="text-left3">
                                            <div class="font-size-24">3324 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-12 op_07">巡查期间发现问题</div>
                                        </el-col>
                                        <el-col :span="4" class="text-left3">
                                            <div class="font-size-24">223 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-12 op_07">信访举报</div>
                                        </el-col>
                                        <el-col :span="5" class="text-left3">
                                            <div class="font-size-24">184 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-12 op_07">监督检查发现问题</div>
                                        </el-col>
                                        <el-col :span="5" class="text-left3">
                                            <div class="font-size-24">96 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-12 op_07">审计中发现问题</div>
                                        </el-col>
                                        <el-col :span="5" class="text-left3">
                                            <div class="font-size-24">78 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-12 op_07">公检法机关移送</div>
                                        </el-col>
                                    </el-row>
                                </el-row>
                                <el-row :gutter="12">
                                    <el-col :span="12" >
                                    <div class="border-W " style="min-height:250px">
                                        <div class="font-size-16 headTitle1">突出问题前五位</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#FC3157"></span> 违反生活纪律行为 <span class="font-size-24">150</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>违反组织纪律行为 <span class="font-size-24">130</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>违反群众纪律行为 <span class="font-size-24">90</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>违反工作纪律行为 <span class="font-size-24">90</span> 件次</div>
                                    </div>
                                    </el-col>
                                    <el-col :span="12">
                                    <div class="border-W " style="min-height:250px">
                                        <div class="font-size-16 headTitle1">突出问题分布排行前五位</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#FC3157"></span> 国防大学 <span class="font-size-24">328</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>海XXX <span class="font-size-24">247</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>北部战区 <span class="font-size-24">331</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>南部战区 <span class="font-size-24">88</span> 件次</div>
                                    </div>
                                    </el-col>
                                </el-row >
                                <el-row :gutter="1" class="border-W" style="min-height:100px">
                                    <div class="font-size-16 headTitle1">信访方式分析</div>
                                    <el-col :span="6" class="text-left4">
                                        <div class="font-size-16">来信 <span class="font-size-24">398</span>件次</div>
                                        <div class="font-size-24 font-color-green"> 12.7%</div>
                                    </el-col>
                                    <el-col :span="6" class="text-left4">
                                        <div class="font-size-16">电话 <span class="font-size-24">498</span>件次</div>
                                        <div class="font-size-24 font-color-green">20.1%</div>
                                    </el-col>
                                    <el-col :span="6" class="text-left4">
                                        <div class="font-size-16">来访 <span class="font-size-24">238</span>件次</div>
                                        <div class="font-size-24 font-color-green">11.9% </div>
                                    </el-col>
                                    <el-col :span="6" class="text-left4">
                                        <div class="font-size-16">网络 <span class="font-size-24">1600</span>件次</div>
                                        <div class="font-size-24 font-color-green">45% </div>
                                    </el-col>
                                </el-row>
                            </div>
                            </div>
                        </el-col>
                       <el-col :span="8" style="padding:15px">
                            <div  style="height: 600px; ">
                                <div>
                                    <el-row  :gutter="1" align="middle" class="border-W" style="min-height:180px">
                                        <div class="font-size-26 headTitleDLW">案件审理</div>
                                        <div class="whead"></div>
                                        <div class="font-size-16 headTitle1">总体概况</div>
                                        <el-row >
                                            <el-col :span="5" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24 font-color-green">3324</span>件次</div>
                                                <div class="font-size-16 op_07">案件总量</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">223</span>件次</div>
                                                <div class="font-size-16 op_07">未结案</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">184</span>件次</div>
                                                <div class="font-size-16 op_07">已结案</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">96</span>件次</div>
                                                <div class="font-size-16 op_07">移送司法机关</div>
                                            </el-col>
                                        </el-row>
                                        <el-row >
                                            <el-col :span="5" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24">184</span>人</div>
                                                <div class="font-size-16 op_07">处理处分人数</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">96</span>人</div>
                                                <div class="font-size-16 op_07">党纪处分</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">78</span>人</div>
                                                <div class="font-size-16 op_07">政纪处分</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:110px">
                                        <div class="font-size-16 headTitle1">处分类型分析</div>
                                        <el-col :span="4"  class="text-left4">
                                            <div class="font-size-16"><span class="font-size-24">3324</span>人</div>
                                            <div class="font-size-16 op_07">警告</div>
                                        </el-col>
                                        <el-col :span="7"  class="text-left4">
                                            <div class="font-size-16"><span class="font-size-24">223</span>人</div>
                                            <div class="font-size-16 op_07">严重警告为轻处分</div>
                                        </el-col>
                                        <el-col :span="4"  class="text-left4">
                                            <div class="font-size-16"><span class="font-size-24">184</span>人</div>
                                            <div class="font-size-16 op_07">撤职</div>
                                        </el-col>
                                        <el-col :span="4"  class="text-left4">
                                            <div class="font-size-16"><span class="font-size-24">184</span>人</div>
                                            <div class="font-size-16 op_07">留档查看</div>
                                        </el-col>
                                        <el-col :span="5"  class="text-left4">
                                            <div class="font-size-16"><span class="font-size-24">184</span>人</div>
                                            <div class="font-size-16 op_07">开除为重处分</div>
                                        </el-col>
                                    </el-row>
                                    <el-row  :gutter="1" align="middle" class="border-W" style="min-height:110px">
                                        <div class="font-size-16 headTitle1">不同年龄段处分案件数</div>
                                        <el-col :span="8" class="text-left3">
                                            <div class="font-size-16"> <span class="font-size-24">3324</span>人</div>
                                            <div class="font-size-16 op_07">55岁以上</div>
                                        </el-col>
                                        <el-col :span="8"  class="text-left">
                                            <div class="font-size-16"><span class="font-size-24">223</span>人</div>
                                            <div class="font-size-16 op_07">50岁~55岁之间</div>
                                        </el-col>
                                        <el-col :span="8"  class="text-left">
                                            <div class="font-size-16"><span class="font-size-24">184</span>人</div>
                                            <div class="font-size-16 op_07">30岁~50岁之间</div>
                                        </el-col>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:120px">
                                        <div class="font-size-16 headTitle1">信访方式分析</div>
                                        <el-col :span="6"  class="text-left4">
                                            <div class="font-size-16">来信 <span class="font-size-24">398</span>件次</div>
                                            <div class="font-size-24 font-color-green"> 12.7%</div>
                                        </el-col>
                                        <el-col :span="6"  class="text-left4">
                                            <div class="font-size-16">电话 <span class="font-size-24">498</span>件次</div>
                                            <div class="font-size-24 font-color-green">20.1%</div>
                                        </el-col>
                                        <el-col :span="6"  class="text-left4">
                                            <div class="font-size-16">来访 <span class="font-size-24">238</span>件次</div>
                                            <div class="font-size-24 font-color-green">11.9% </div>
                                        </el-col>
                                        <el-col :span="6" class="text-left4">
                                            <div class="font-size-16">网络 <span class="font-size-24">1600</span>件次</div>
                                            <div class="font-size-24 font-color-green">45% </div>
                                        </el-col>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:100px">
                                        <div class="font-size-16 headTitle1">行政级别分布情况</div>
                                        <el-col :span="4" class="text-left3">
                                            <div class="font-size-24">63 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-14 op_07">正战区职 </div>
                                        </el-col>
                                        <el-col :span="4" class="text-left3">
                                            <div class="font-size-24">84 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-14 op_07">副战区职 </div>
                                        </el-col>
                                        <el-col :span="4" class="text-left3">
                                            <div class="font-size-24">184 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-14 op_07">正XXX职 </div>
                                        </el-col>
                                        <el-col :span="4" class="text-left3">
                                            <div class="font-size-24">171 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-14 op_07">副XXX职 </div>
                                        </el-col>
                                        <el-col :span="4" class="text-left3">
                                            <div class="font-size-24">47 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-14 op_07">XXX职以上 </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-carousel-item>
                <el-carousel-item :key="1">
                     <!-- 案件审理&巡视巡察 -->
                    <el-row class="font-color-white" style="top:15px">
                        <el-col :span="8" style="padding:15px">
                            <div  style="height: 600px; ">
                                <div>
                                    <el-row  :gutter="1" align="middle" class="border-W" style="min-height:150px">
                                        <div class="font-size-26 headTitleDLW">审查调查</div>
                                        <div class="whead"></div>
                                        <div class="font-size-16 headTitle1">总体概况</div>
                                        <el-row >
                                            <el-col :span="6" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24 font-color-green">3324</span>件次</div>
                                                <div class="font-size-16 op_07">问题线索总量</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">223</span>次</div>
                                                <div class="font-size-16 op_07">开展检查</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">184</span>次</div>
                                                <div class="font-size-16 op_07">民主会议</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">96</span>次</div>
                                                <div class="font-size-16 op_07">谈话</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">78</span>人</div>
                                                <div class="font-size-16 op_07">函询</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row  :gutter="1" align="middle" class="border-W" style="min-height:220px">
                                        <div class="font-size-16 headTitle1">线索核查情况</div>
                                        <el-row >
                                            <el-col :span="6" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24 font-color-green">3324</span>件次</div>
                                                <div class="font-size-16 op_07">案件总量</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">223</span>件次</div>
                                                <div class="font-size-16 op_07">未结案</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">184</span>件次</div>
                                                <div class="font-size-16 op_07">已结案</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">96</span>件次</div>
                                                <div class="font-size-16 op_07">移送司法机关</div>
                                            </el-col>
                                        </el-row>
                                        <el-row style="top:10px">
                                            <el-col :span="6" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24">184</span>人</div>
                                                <div class="font-size-16 op_07">处理处分人数</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">96</span>人</div>
                                                <div class="font-size-16 op_07">党纪处分</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">78</span>人</div>
                                                <div class="font-size-16 op_07">政纪处分</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="12">
                                        <el-col :span="24">
                                            <div class="border-W" style="min-height:280px">
                                                <div class="font-size-16 headTitle1">突出问题分布排行前五位</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#FC3157"></span> 国防大学 <span class="font-size-24">328</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>海XXX <span class="font-size-24">247</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>北部战区 <span class="font-size-24">331</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>南部战区 <span class="font-size-24">88</span> 件次</div>
                                            </div>
                                        </el-col>
                                    </el-row >
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="8" style="padding:15px">
                            <div  style="height: 600px; ">
                                <div>
                                    <el-row :gutter="1" class="border-W" style="min-height:120px">
                                        <div class="font-size-26 headTitleDLW">作风监督</div>
                                        <div class="whead"></div>
                                        <div class="font-size-16 headTitle1">总体概况</div>
                                        <el-row >
                                            <el-col :span="7" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24 font-color-green">1208</span>件次</div>
                                                <div class="font-size-16 op_07">收到问题线索总量</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">85</span>种</div>
                                                <div class="font-size-16 op_07">开展检查</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:120px">
                                        <div class="font-size-16 headTitle1">违纪情况</div>
                                        <el-row >
                                            <el-col :span="7" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24">124</span>人</div>
                                                <div class="font-size-16 op_07">XXX职级以上违纪</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">63</span>人</div>
                                                <div class="font-size-16 op_07">一把手违纪</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:130px">
                                        <div class="font-size-16 headTitle1">XXX初核情况</div>
                                        <el-row >
                                            <el-col :span="8" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24">472</span>件次</div>
                                                <div class="font-size-16 op_07">初核中</div>
                                            </el-col>
                                            <el-col :span="8"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">143</span>件次</div>
                                                <div class="font-size-16 op_07">初核结束</div>
                                            </el-col>
                                            <el-col :span="8"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">94</span>人</div>
                                                <div class="font-size-16 op_07">立案</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:130px">
                                        <div class="font-size-16 headTitle1">属实程度分析</div>
                                        <el-row >
                                            <el-col :span="6" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24">546</span>件次</div>
                                                <div class="font-size-16 op_07">属实</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">22433</span>件次</div>
                                                <div class="font-size-16 op_07">基本属实</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">124</span>次</div>
                                                <div class="font-size-16 op_07">部分属实</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">84</span>件次</div>
                                                <div class="font-size-16 op_07">不实</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:130px">
                                        <div class="font-size-16 headTitle1">留置对象情况</div>
                                        <el-row >
                                            <el-col :span="6" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24">2464</span>人</div>
                                                <div class="font-size-16 op_07">谈话</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">116</span>人</div>
                                                <div class="font-size-16 op_07">询问</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">78</span>人</div>
                                                <div class="font-size-16 op_07">询问</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">46</span>人</div>
                                                <div class="font-size-16 op_07">查询</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="8" style="padding:15px">
                            <div style="height: 600px; ">
                                <div>
                                    <el-row :gutter="1" class="border-W" style="min-height:150px">
                                        <div class="font-size-26 headTitleDLW">巡视巡察</div>
                                        <div class="whead"></div>
                                        <div class="font-size-16 headTitle1">总体概况</div>
                                        <div class="font-size-16 text-left4">2018年度共开展<span class="font-size-24 font-color-green">140</span>轮巡视巡察工作，总计巡视覆盖<span class="font-size-24 font-color-green">30</span>家被巡视单位。</div>
                                        <el-row>
                                            <el-col :span="4"  class="text-left3">
                                                <div class="font-size-16"><span class="font-size-24">140</span>次</div>
                                                <div class="font-size-16 op_07">常规巡视</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">223</span>次</div>
                                                <div class="font-size-16 op_07">专项巡视</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">300</span>次</div>
                                                <div class="font-size-16 op_07">机动巡视</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">80</span>次</div>
                                                <div class="font-size-16 op_07">回头看</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">536</span>件次</div>
                                                <div class="font-size-16 op_07">发现问题</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="12">
                                        <el-col :span="24">
                                            <div class=" border-W" style="min-height:250px">
                                                <div class="font-size-16 headTitle1">突出问题前五位</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#FC3157"></span> 违反生活纪律行为 <span class="font-size-24">150</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>违反组织纪律行为 <span class="font-size-24">130</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>违反群众纪律行为 <span class="font-size-24">90</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>违反工作纪律行为 <span class="font-size-24">90</span> 件次</div>
                                            </div>
                                        </el-col>
                                    </el-row >
                                    <el-row :gutter="12">
                                        <el-col :span="24">
                                            <div class="border-W" style="min-height:245px">
                                                <div class="font-size-16 headTitle1">突出问题分布排行前五位</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#FC3157"></span> 国防大学 <span class="font-size-24">328</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>海XXX <span class="font-size-24">247</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>北部战区 <span class="font-size-24">331</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>南部战区 <span class="font-size-24">88</span> 件次</div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-carousel-item>
                <el-carousel-item :key="2">
                     <!-- 信访举报&监督检查 -->
                    <el-row class="font-color-white" style="top:15px">
                        <el-col :span="8" style="padding:15px">
                            <div  style="height: 600px">
                            <div>
                                <el-row  :gutter="1" align="middle" class="border-W" style="min-height:120px">
                                    <div class="font-size-26 headTitleDLW">信访举报</div>
                                    <div class="whead"></div>
                                    <div class="font-size-16 headTitle1">总体概况</div>
                                    <el-col :span="8" class="text-left">
                                        <div class="font-size-16">信访总量 <span class="font-size-24">1920</span>件次</div>
                                        <div class="font-size-24 font-color-green"> <i class="iconfont icon-jiantou-copy-copy"></i> 45.7%</div>
                                    </el-col>
                                    <el-col :span="8"  class="text-left">
                                        <div class="font-size-16">检控类 <span class="font-size-24">1600</span>件次</div>
                                        <div class="font-size-24 font-color-green"><i class="iconfont icon-jiantou-copy-copy"></i>30</div>
                                    </el-col>
                                    <el-col :span="8"  class="text-left">
                                        <div class="font-size-16">初次举报 <span class="font-size-24">320</span>件次</div>
                                        <div class="font-size-24 font-color-red"><i class="iconfont icon-jiantou "></i>25.3%</div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="12">
                                    <el-col :span="12">
                                        <div class=" border-W" style="min-height:260px">
                                            <div class="font-size-16 headTitle1">突出问题前五位</div>
                                            <div class="font-size-14 headContent1"><span class="isdot" style="background:#FC3157"></span> 违反生活纪律行为 <span class="font-size-24">150</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>违反组织纪律行为 <span class="font-size-24">130</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>违反群众纪律行为 <span class="font-size-24">90</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>违反工作纪律行为 <span class="font-size-24">90</span> 件次</div>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="border-W" style="min-height:260px">
                                            <div class="font-size-16 headTitle1">突出问题分布排行前五位</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#FC3157"></span> 国防大学 <span class="font-size-24">328</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>海XXX <span class="font-size-24">247</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>北部战区 <span class="font-size-24">331</span> 件次</div>
                                            <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>南部战区 <span class="font-size-24">88</span> 件次</div>
                                        </div>
                                    </el-col>
                                </el-row >
                                <el-row :gutter="1" class="border-W" style="min-height:130px">
                                    <div class="font-size-16 headTitle1">信访方式分析</div>
                                    <el-col :span="6"  class="text-left4">
                                        <div class="font-size-16">来信 <span class="font-size-24">398</span>件次</div>
                                        <div class="font-size-24 font-color-green"> 12.7%</div>
                                    </el-col>
                                    <el-col :span="6"  class="text-left4">
                                        <div class="font-size-16">电话 <span class="font-size-24">498</span>件次</div>
                                        <div class="font-size-24 font-color-green">20.1%</div>
                                    </el-col>
                                    <el-col :span="6"  class="text-left4">
                                        <div class="font-size-16">来访 <span class="font-size-24">238</span>件次</div>
                                        <div class="font-size-24 font-color-green">11.9% </div>
                                    </el-col>
                                    <el-col :span="6" class="text-left4">
                                        <div class="font-size-16">网络 <span class="font-size-24">1600</span>件次</div>
                                        <div class="font-size-24 font-color-green">45% </div>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="1" class="border-W" style="min-height:120px">
                                <div class="font-size-16 headTitle1">行政级别分布情况</div>
                                    <el-col :span="4" class="text-left3">
                                        <div class="font-size-24">63 <span class="font-size-16">件次</span></div>
                                        <div class="font-size-14 op_07">正战区职 </div>
                                    </el-col>
                                    <el-col :span="4" class="text-left3">
                                        <div class="font-size-24">84 <span class="font-size-16">件次</span></div>
                                        <div class="font-size-14 op_07">副战区职 </div>
                                    </el-col>
                                    <el-col :span="4" class="text-left3">
                                        <div class="font-size-24">184 <span class="font-size-16">件次</span></div>
                                        <div class="font-size-14 op_07">正XXX职 </div>
                                    </el-col>
                                    <el-col :span="4" class="text-left3">
                                        <div class="font-size-24">171 <span class="font-size-16">件次</span></div>
                                        <div class="font-size-14 op_07">副XXX职 </div>
                                    </el-col>
                                    <el-col :span="4" class="text-left3">
                                        <div class="font-size-24">47 <span class="font-size-16">件次</span></div>
                                        <div class="font-size-14 op_07">XXX职以上 </div>
                                    </el-col>
                                </el-row>
                            </div>
                            </div>
                        </el-col>
                        <el-col :span="8" style="padding:17px" class="font-color-white">
                            <div style="height: 600px;">
                            <div>
                                <el-row :gutter="1" class="border-W" style="min-height:160px">
                                    <div class="font-size-26 headTitleDLW ">监督检查</div>
                                    <div class="whead"></div>
                                    <div class="font-size-16 headTitle1">总体概况</div>  
                                    <el-row style="text-align: left;margin:0;padding-left: 27px;">
                                        <div class="font-size-24 font-color-green">3324 <span class="font-size-16">件次</span></div>
                                        <div class="font-size-16">收到问题线索总量</div>
                                    </el-row>
                                    <el-row style="margin: 0 10px 0 20px;text-align:left">
                                        <el-col :span="4" >
                                            <div class="font-size-24">393 <span class="font-size-16">人</span></div>
                                            <div class="font-size-14 op_07">查处涉案人员</div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="font-size-24">96 <span class="font-size-16">人</span></div>
                                            <div class="font-size-14 op_07">正战区职</div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="font-size-24">78 <span class="font-size-16">人</span></div>
                                            <div class="font-size-14 op_07">副战区职</div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="font-size-24">14 <span class="font-size-16">人</span></div>
                                            <div class="font-size-14 op_07">正XXX职</div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="font-size-24">24 <span class="font-size-16">人</span></div>
                                            <div class="font-size-14 op_07">副XXX职</div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="font-size-24">25 <span class="font-size-16">人</span></div>
                                            <div class="font-size-14 op_07">XXX职以上</div>
                                        </el-col>
                                    </el-row>
                                </el-row>
                                <el-row :gutter="1" class="border-W" style="min-height:110px">
                                    <div class="font-size-16 headTitle1">线索来源分析</div>
                                    <el-row style="margin:0">
                                        <el-col :span="5" class="text-left3">
                                            <div class="font-size-24">3324 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-12 op_07">巡查期间发现问题</div>
                                        </el-col>
                                        <el-col :span="4" class="text-left3">
                                            <div class="font-size-24">223 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-12 op_07">信访举报</div>
                                        </el-col>
                                        <el-col :span="5" class="text-left3">
                                            <div class="font-size-24">184 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-12 op_07">监督检查发现问题</div>
                                        </el-col>
                                        <el-col :span="5" class="text-left3">
                                            <div class="font-size-24">96 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-12 op_07">审计中发现问题</div>
                                        </el-col>
                                        <el-col :span="5" class="text-left3">
                                            <div class="font-size-24">78 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-12 op_07">公检法机关移送</div>
                                        </el-col>
                                    </el-row>
                                </el-row>
                                <el-row :gutter="12">
                                    <el-col :span="12" >
                                    <div class="border-W " style="min-height:250px">
                                        <div class="font-size-16 headTitle1">突出问题前五位</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#FC3157"></span> 违反生活纪律行为 <span class="font-size-24">150</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>违反组织纪律行为 <span class="font-size-24">130</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>违反群众纪律行为 <span class="font-size-24">90</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>违反工作纪律行为 <span class="font-size-24">90</span> 件次</div>
                                    </div>
                                    </el-col>
                                    <el-col :span="12">
                                    <div class="border-W " style="min-height:250px">
                                        <div class="font-size-16 headTitle1">突出问题分布排行前五位</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#FC3157"></span> 国防大学 <span class="font-size-24">328</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>海XXX <span class="font-size-24">247</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>北部战区 <span class="font-size-24">331</span> 件次</div>
                                        <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>南部战区 <span class="font-size-24">88</span> 件次</div>
                                    </div>
                                    </el-col>
                                </el-row >
                                <el-row :gutter="1" class="border-W" style="min-height:100px">
                                    <div class="font-size-16 headTitle1">信访方式分析</div>
                                    <el-col :span="6" class="text-left4">
                                        <div class="font-size-16">来信 <span class="font-size-24">398</span>件次</div>
                                        <div class="font-size-24 font-color-green"> 12.7%</div>
                                    </el-col>
                                    <el-col :span="6" class="text-left4">
                                        <div class="font-size-16">电话 <span class="font-size-24">498</span>件次</div>
                                        <div class="font-size-24 font-color-green">20.1%</div>
                                    </el-col>
                                    <el-col :span="6" class="text-left4">
                                        <div class="font-size-16">来访 <span class="font-size-24">238</span>件次</div>
                                        <div class="font-size-24 font-color-green">11.9% </div>
                                    </el-col>
                                    <el-col :span="6" class="text-left4">
                                        <div class="font-size-16">网络 <span class="font-size-24">1600</span>件次</div>
                                        <div class="font-size-24 font-color-green">45% </div>
                                    </el-col>
                                </el-row>
                            </div>
                            </div>
                        </el-col>
                       <el-col :span="8" style="padding:15px">
                            <div  style="height: 600px; ">
                                <div>
                                    <el-row  :gutter="1" align="middle" class="border-W" style="min-height:180px">
                                        <div class="font-size-26 headTitleDLW">案件审理</div>
                                        <div class="whead"></div>
                                        <div class="font-size-16 headTitle1">总体概况</div>
                                        <el-row >
                                            <el-col :span="5" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24 font-color-green">3324</span>件次</div>
                                                <div class="font-size-16 op_07">案件总量</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">223</span>件次</div>
                                                <div class="font-size-16 op_07">未结案</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">184</span>件次</div>
                                                <div class="font-size-16 op_07">已结案</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">96</span>件次</div>
                                                <div class="font-size-16 op_07">移送司法机关</div>
                                            </el-col>
                                        </el-row>
                                        <el-row >
                                            <el-col :span="5" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24">184</span>人</div>
                                                <div class="font-size-16 op_07">处理处分人数</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">96</span>人</div>
                                                <div class="font-size-16 op_07">党纪处分</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">78</span>人</div>
                                                <div class="font-size-16 op_07">政纪处分</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:110px">
                                        <div class="font-size-16 headTitle1">处分类型分析</div>
                                        <el-col :span="4"  class="text-left4">
                                            <div class="font-size-16"><span class="font-size-24">3324</span>人</div>
                                            <div class="font-size-16 op_07">警告</div>
                                        </el-col>
                                        <el-col :span="7"  class="text-left4">
                                            <div class="font-size-16"><span class="font-size-24">223</span>人</div>
                                            <div class="font-size-16 op_07">严重警告为轻处分</div>
                                        </el-col>
                                        <el-col :span="4"  class="text-left4">
                                            <div class="font-size-16"><span class="font-size-24">184</span>人</div>
                                            <div class="font-size-16 op_07">撤职</div>
                                        </el-col>
                                        <el-col :span="4"  class="text-left4">
                                            <div class="font-size-16"><span class="font-size-24">184</span>人</div>
                                            <div class="font-size-16 op_07">留档查看</div>
                                        </el-col>
                                        <el-col :span="5"  class="text-left4">
                                            <div class="font-size-16"><span class="font-size-24">184</span>人</div>
                                            <div class="font-size-16 op_07">开除为重处分</div>
                                        </el-col>
                                    </el-row>
                                    <el-row  :gutter="1" align="middle" class="border-W" style="min-height:110px">
                                        <div class="font-size-16 headTitle1">不同年龄段处分案件数</div>
                                        <el-col :span="8" class="text-left3">
                                            <div class="font-size-16"> <span class="font-size-24">3324</span>人</div>
                                            <div class="font-size-16 op_07">55岁以上</div>
                                        </el-col>
                                        <el-col :span="8"  class="text-left">
                                            <div class="font-size-16"><span class="font-size-24">223</span>人</div>
                                            <div class="font-size-16 op_07">50岁~55岁之间</div>
                                        </el-col>
                                        <el-col :span="8"  class="text-left">
                                            <div class="font-size-16"><span class="font-size-24">184</span>人</div>
                                            <div class="font-size-16 op_07">30岁~50岁之间</div>
                                        </el-col>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:120px">
                                        <div class="font-size-16 headTitle1">信访方式分析</div>
                                        <el-col :span="6"  class="text-left4">
                                            <div class="font-size-16">来信 <span class="font-size-24">398</span>件次</div>
                                            <div class="font-size-24 font-color-green"> 12.7%</div>
                                        </el-col>
                                        <el-col :span="6"  class="text-left4">
                                            <div class="font-size-16">电话 <span class="font-size-24">498</span>件次</div>
                                            <div class="font-size-24 font-color-green">20.1%</div>
                                        </el-col>
                                        <el-col :span="6"  class="text-left4">
                                            <div class="font-size-16">来访 <span class="font-size-24">238</span>件次</div>
                                            <div class="font-size-24 font-color-green">11.9% </div>
                                        </el-col>
                                        <el-col :span="6" class="text-left4">
                                            <div class="font-size-16">网络 <span class="font-size-24">1600</span>件次</div>
                                            <div class="font-size-24 font-color-green">45% </div>
                                        </el-col>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:100px">
                                        <div class="font-size-16 headTitle1">行政级别分布情况</div>
                                        <el-col :span="4" class="text-left3">
                                            <div class="font-size-24">63 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-14 op_07">正战区职 </div>
                                        </el-col>
                                        <el-col :span="4" class="text-left3">
                                            <div class="font-size-24">84 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-14 op_07">副战区职 </div>
                                        </el-col>
                                        <el-col :span="4" class="text-left3">
                                            <div class="font-size-24">184 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-14 op_07">正XXX职 </div>
                                        </el-col>
                                        <el-col :span="4" class="text-left3">
                                            <div class="font-size-24">171 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-14 op_07">副XXX职 </div>
                                        </el-col>
                                        <el-col :span="4" class="text-left3">
                                            <div class="font-size-24">47 <span class="font-size-16">件次</span></div>
                                            <div class="font-size-14 op_07">XXX职以上 </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-carousel-item>
                <el-carousel-item :key="3">
                     <!-- 案件审理&巡视巡察 -->
                    <el-row class="font-color-white" style="top:15px">
                        <el-col :span="8" style="padding:15px">
                            <div  style="height: 600px; ">
                                <div>
                                    <el-row  :gutter="1" align="middle" class="border-W" style="min-height:150px">
                                        <div class="font-size-26 headTitleDLW">审查调查</div>
                                        <div class="whead"></div>
                                        <div class="font-size-16 headTitle1">总体概况</div>
                                        <el-row >
                                            <el-col :span="6" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24 font-color-green">3324</span>件次</div>
                                                <div class="font-size-16 op_07">问题线索总量</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">223</span>次</div>
                                                <div class="font-size-16 op_07">开展检查</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">184</span>次</div>
                                                <div class="font-size-16 op_07">民主会议</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">96</span>次</div>
                                                <div class="font-size-16 op_07">谈话</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">78</span>人</div>
                                                <div class="font-size-16 op_07">函询</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row  :gutter="1" align="middle" class="border-W" style="min-height:220px">
                                        <div class="font-size-16 headTitle1">线索核查情况</div>
                                        <el-row >
                                            <el-col :span="6" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24 font-color-green">3324</span>件次</div>
                                                <div class="font-size-16 op_07">案件总量</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">223</span>件次</div>
                                                <div class="font-size-16 op_07">未结案</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">184</span>件次</div>
                                                <div class="font-size-16 op_07">已结案</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">96</span>件次</div>
                                                <div class="font-size-16 op_07">移送司法机关</div>
                                            </el-col>
                                        </el-row>
                                        <el-row style="top:10px">
                                            <el-col :span="6" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24">184</span>人</div>
                                                <div class="font-size-16 op_07">处理处分人数</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">96</span>人</div>
                                                <div class="font-size-16 op_07">党纪处分</div>
                                            </el-col>
                                            <el-col :span="5"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">78</span>人</div>
                                                <div class="font-size-16 op_07">政纪处分</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="12">
                                        <el-col :span="24">
                                            <div class="border-W" style="min-height:280px">
                                                <div class="font-size-16 headTitle1">突出问题分布排行前五位</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#FC3157"></span> 国防大学 <span class="font-size-24">328</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>海XXX <span class="font-size-24">247</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>北部战区 <span class="font-size-24">331</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>南部战区 <span class="font-size-24">88</span> 件次</div>
                                            </div>
                                        </el-col>
                                    </el-row >
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="8" style="padding:15px">
                            <div  style="height: 600px; ">
                                <div>
                                    <el-row :gutter="1" class="border-W" style="min-height:120px">
                                        <div class="font-size-26 headTitleDLW">作风监督</div>
                                        <div class="whead"></div>
                                        <div class="font-size-16 headTitle1">总体概况</div>
                                        <el-row >
                                            <el-col :span="7" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24 font-color-green">1208</span>件次</div>
                                                <div class="font-size-16 op_07">收到问题线索总量</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">85</span>种</div>
                                                <div class="font-size-16 op_07">开展检查</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:120px">
                                        <div class="font-size-16 headTitle1">违纪情况</div>
                                        <el-row >
                                            <el-col :span="7" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24">124</span>人</div>
                                                <div class="font-size-16 op_07">XXX职级以上违纪</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">63</span>人</div>
                                                <div class="font-size-16 op_07">一把手违纪</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:130px">
                                        <div class="font-size-16 headTitle1">XXX初核情况</div>
                                        <el-row >
                                            <el-col :span="8" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24">472</span>件次</div>
                                                <div class="font-size-16 op_07">初核中</div>
                                            </el-col>
                                            <el-col :span="8"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">143</span>件次</div>
                                                <div class="font-size-16 op_07">初核结束</div>
                                            </el-col>
                                            <el-col :span="8"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">94</span>人</div>
                                                <div class="font-size-16 op_07">立案</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:130px">
                                        <div class="font-size-16 headTitle1">属实程度分析</div>
                                        <el-row >
                                            <el-col :span="6" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24">546</span>件次</div>
                                                <div class="font-size-16 op_07">属实</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">22433</span>件次</div>
                                                <div class="font-size-16 op_07">基本属实</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">124</span>次</div>
                                                <div class="font-size-16 op_07">部分属实</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">84</span>件次</div>
                                                <div class="font-size-16 op_07">不实</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="1" class="border-W" style="min-height:130px">
                                        <div class="font-size-16 headTitle1">留置对象情况</div>
                                        <el-row >
                                            <el-col :span="6" class="text-left3">
                                                <div class="font-size-16"> <span class="font-size-24">2464</span>人</div>
                                                <div class="font-size-16 op_07">谈话</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">116</span>人</div>
                                                <div class="font-size-16 op_07">询问</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">78</span>人</div>
                                                <div class="font-size-16 op_07">询问</div>
                                            </el-col>
                                            <el-col :span="6"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">46</span>人</div>
                                                <div class="font-size-16 op_07">查询</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="8" style="padding:15px">
                            <div style="height: 600px; ">
                                <div>
                                    <el-row :gutter="1" class="border-W" style="min-height:150px">
                                        <div class="font-size-26 headTitleDLW">巡视巡察</div>
                                        <div class="whead"></div>
                                        <div class="font-size-16 headTitle1">总体概况</div>
                                        <div class="font-size-16 text-left4">2018年度共开展<span class="font-size-24 font-color-green">140</span>轮巡视巡察工作，总计巡视覆盖<span class="font-size-24 font-color-green">30</span>家被巡视单位。</div>
                                        <el-row>
                                            <el-col :span="4"  class="text-left3">
                                                <div class="font-size-16"><span class="font-size-24">140</span>次</div>
                                                <div class="font-size-16 op_07">常规巡视</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">223</span>次</div>
                                                <div class="font-size-16 op_07">专项巡视</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">300</span>次</div>
                                                <div class="font-size-16 op_07">机动巡视</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">80</span>次</div>
                                                <div class="font-size-16 op_07">回头看</div>
                                            </el-col>
                                            <el-col :span="4"  class="text-left4">
                                                <div class="font-size-16"><span class="font-size-24">536</span>件次</div>
                                                <div class="font-size-16 op_07">发现问题</div>
                                            </el-col>
                                        </el-row>
                                    </el-row>
                                    <el-row :gutter="12">
                                        <el-col :span="24">
                                            <div class=" border-W" style="min-height:250px">
                                                <div class="font-size-16 headTitle1">突出问题前五位</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#FC3157"></span> 违反生活纪律行为 <span class="font-size-24">150</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>违反组织纪律行为 <span class="font-size-24">130</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>违反群众纪律行为 <span class="font-size-24">90</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>违反工作纪律行为 <span class="font-size-24">90</span> 件次</div>
                                            </div>
                                        </el-col>
                                    </el-row >
                                    <el-row :gutter="12">
                                        <el-col :span="24">
                                            <div class="border-W" style="min-height:245px">
                                                <div class="font-size-16 headTitle1">突出问题分布排行前五位</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#FC3157"></span> 国防大学 <span class="font-size-24">328</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#E96F4F"></span>海XXX <span class="font-size-24">247</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#F8E734"></span>违反廉洁纪律行为 <span class="font-size-24">100</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#26E0CF"></span>北部战区 <span class="font-size-24">331</span> 件次</div>
                                                <div class="font-size-16 headContent1"><span class="isdot" style="background:#33FD2E"></span>南部战区 <span class="font-size-24">88</span> 件次</div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-carousel-item>
            </el-carousel>
        </div>
         <!-- 定性分析-人员分析 -->
        <el-collapse-transition>
            <div v-show="switchDesktopGrade1=='DXFX'&&switchDesktopGrade2=='DXFXR' && !examineRelationship" style="padding-top: 30px;">
               <el-row class="font-color-white">
                 <!-- 时间 -->
                  <el-col :span="7" style="padding:15px">
                    <div  style=" background: rgba(0,0,0,0.1);">
                        <el-row  :gutter="1" align="middle" class="border-dx TcontentBg" style="padding-bottom:30px">
                            <div class="DborderTop"> 
                                <div style="height:20%;margin-top: 30px;" class="sttu_title">时间</div>
                            </div>
                            <div class="time_line" id="timeLineContent" style="height:610px">
                                <div class="cntl">
                                    <span class="cntl-bar cntl-center">
                                        <span class="cntl-bar-fill"></span>
                                    </span>
                                    <div class="cntl-states">
                                        <div class="cntl-state">
                                            <div class="cntl-content">
                                                吴德华严重违反政治纪律和政治规矩，丧失政治立场，与党XXX离心离德，购买、私存反动杂志，传播政治谣言，加入非法组织，企图自创歪理邪说，大搞封建迷信活动，热衷占卜打卦，对抗组织审查，严重违反XXX八项规定精神，长期收受下属礼金，经常出入私人会所，带坏当地政治生态，违反廉洁纪律，搞权钱，钱色交易，违反生活纪律
                                            </div>
                                            <div class="cntl-icon cntl-center"><span></span></div>
                                            <div class="cntl-image">2017/8/2~2018/5/9</div>
                                        </div>

                                        <div class="cntl-state">
                                            <div class="cntl-content">
                                                长寿区八颗街道曙光村党支部书记李树荣等人违规向危房改造户收费问题。2015年至2016年，李树荣与村委会主任何绍明、综合服务专干尹中兰，违规向D级危房改造户王某某收取1.5万元拟用于村务开发，后因群众举报退回。何绍明还存在其他违纪问题。2017年8月、9月，李树荣受到严重警告处分，何绍明受到撤销党内职务处分，尹中兰受到诫勉谈话处理。
                                            </div>
                                            <div class="cntl-icon cntl-center"><span></span></div>
                                            <div class="cntl-image">2015/2/2~2016/5/9</div>
                                        </div>

                                        <div class="cntl-state">
                                            <div class="cntl-content">
                                                涪陵区李渡街道新龙村党支部原书记汪传明骗取扶贫补助资金、收受贿赂等问题。2012年至2016年，汪传明在该村便民服务中心改造工程中，利用职务便利，通过伪造合同、虚报工程量等方式，骗取扶贫补助资金7万元；为工程承建商顺利完成扶贫工程验收和工程款划拨等，多次收受喻某某、翟某某贿赂款共计16.8万元。2017年9页，汪传明受到开除党籍处分，其涉嫌犯罪问题被移送司法机关处理
                                            </div>
                                            <div class="cntl-icon cntl-center"><span></span></div>
                                            <div class="cntl-image">2012/2/2~2016/9/1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             <!-- <el-row>
                                <div class='timeR'>
                                    <div style="margin-left: -200px; position: absolute; margin-top: 17px;"> <div>2017/08/02~2018/09/28</div> </div>
                                    <div style="width: 220px; margin-left: 50px; margin-top: 29px; height: 180px;  padding-top: 35px;"> 这是一段事件的简述这是一段事件的简介。 </div>
                                </div>
                                <div class='timeL'>
                                    <div style="margin-left: 269px; position: absolute; margin-top: 21px"> <div>2017/08/02~2018/09/28</div> </div>
                                    <div style="width: 220px; margin-left: -14px; padding-top: 50px;"> 这是一段事件的简述这是一段事件的简介。 </div>
                                </div>
                                <div class='timeR'>
                                    <div style="margin-left: -200px; position: absolute; margin-top: 17px;"> <div>2017/08/02~2018/09/28</div> </div>
                                    <div style="width: 220px; margin-left: 50px; height: 180px;  padding-top: 35px;"> 这是一段事件的简述这是一段事件的简介。 </div>
                                </div>
                                    <div class='timeL'>
                                    <div style="margin-left: 269px; position: absolute; margin-top: 21px"> <div>2017/08/02~2018/09/28</div> </div>
                                    <div style="width: 220px; margin-left: -14px; padding-top: 50px;"> 这是一段事件的简述这是一段事件的简介。 </div>
                                </div>
                             </el-row> -->
                        </el-row>
                    </div>
                  </el-col>
                  <!-- 地图-五大战区 -->
                  <el-col :span="10" style="padding:15px">
                    <div>
                       <div>
                         <el-row  :gutter="1" align="middle" style="min-height:400px">
                            <div class="map_contant">
                                <div class="example1">
                                    <div class="c1"></div>
                                    <div class="c2"></div>
                                    <div class="c3"></div>
                                </div>
                                <div class="example2">
                                    <div class="c1"></div>
                                    <div class="c2"></div>
                                    <div class="c3"></div>
                                </div>
                                <div class="example3">
                                    <div class="c1"></div>
                                    <div class="c2"></div>
                                    <div class="c3"></div>
                                </div>
                                <div class="example4">
                                    <div class="c1"></div>
                                    <div class="c2"></div>
                                    <div class="c3"></div>
                                </div>
                                <div class="example5">
                                    <div class="c1"></div>
                                    <div class="c2"></div>
                                    <div class="c3"></div>
                                </div>
                                <div class="example6">
                                    <div class="dot1"></div>
                                </div>
                                <div class="example7">
                                    <div class="dot1"></div>
                                </div>
                                <div class="example8">
                                    <div class="dot1"></div>
                                </div>
                                <div class="example9">
                                    <div class="dot1"></div>
                                </div>
                                <div class="example10">
                                    <div class="dot1"></div>
                                </div>
                                <div class="example11">
                                    <div class="dot1"></div>
                                </div>
                            </div>
                             <div  @click="examineAllRelationship" style="cursor: pointer;" >
                                 <div>查看关系汇总</div>
                                 <div class="dxfx_icon_down">
                                     <img src="../../assets/img/dxfx_icon_down.png" alt="">
                                 </div>
                             </div>
                         </el-row>
                       </div>
                    </div>
                  </el-col>
                  <!-- 事件&人员 -->
                 <el-col :span="7" style="padding:15px">
                       <div>
                            <el-row  :gutter="1" align="middle" class="border-dx TcontentBg" style="min-height:290px">
                                <div class="DborderTop" style="height:23%"> 
                                     <div style="height:20%;margin-top: 30px;" class="sttu_title">事件</div>
                                </div>
                                <div style="height: 300px">
                                    <div id="event" style="height: 100%"></div>
                                </div>
                             </el-row>
                            <el-row  :gutter="1" align="middle" class="border-dx TcontentBg" style="min-height:270px;margin-top: 90px;">
                                <div class="DborderTop"  style="height:23%"> 
                                     <div style="height:20%;margin-top: 30px;" class="sttu_title">人员</div>
                                </div>
                                <div style="height: 270px">
                                    <div id="personnel" style="height: 100%"></div>
                                </div>
                            </el-row>
                        </div>
                </el-col>
            </el-row>
        </div>
        </el-collapse-transition>

         <!-- 定性分析-态势分析 -->
        <el-collapse-transition>
            <div v-show="switchDesktopGrade1=='DXFX'&&switchDesktopGrade2=='DXFXT' ">
                <el-row class="font-color-white">
                <!-- <el-col v-if="false" :span="12" style="padding:15px">
                    <div style=" background: rgba(0,0,0,0.1);">
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <el-row>
                                    <div class="DborderTop" style="height:20%"></div>
                                    <div id="situation1" class="border-dx TcontentBg" style="height: 300px"></div>
                                </el-row>
                            </el-col>
                            <el-col :span="12">
                                <el-row>
                                    <div class="DborderTop" style="height:20%"> </div>
                                    <div id="situation2" class="border-dx TcontentBg" style="height: 300px"></div>
                                </el-row>
                            </el-col>
                        </el-row>
                    </div>
                    <div style=" background: rgba(0,0,0,0.1);">
                        <el-row :span="12"  :gutter="1" align="middle" class="border-dx TcontentBg" style="background: rgba(0,0,0,0.1);min-height:500px;margin-top: 50px;">
                            <div class="DborderTop" style="height:15%"> </div>
                            <div id="situation3" style="height: 500px;width:100%"></div>
                        </el-row>
                    </div>
                </el-col>
                <el-col v-if="false" :span="12" style="padding:15px">
                    <div  style=" background: rgba(0,0,0,0.1);">
                        <el-row :span="6"  :gutter="1" align="middle" class="TcontentBg" style="min-height:900px">
                            <div id="situation4" style="height: 700px;width:100%"></div>
                        </el-row>
                    </div>
                </el-col> -->
                <el-col :span='7' style="padding:15px;margin-top: -22px;">
                    <div style=" background: rgba(0,0,0,0.1);">
                        <div  class="sttu_title">案件分布情况分析</div>
                        <el-row :span="12"  :gutter="1" align="middle" class="border-dx TcontentBg" style="background: rgba(0,0,0,0.1);min-height:300px;margin-top: 80px;">
                            <div class="DborderTop" style="height:15%;margin-top:-44px"> </div>
                            <div id="situation1" style="height: 250px;width:100%"></div>
                        </el-row>
                    </div>
                    <div style=" background: rgba(0,0,0,0.1);">
                    <div class="sttu_title">突出问题管理分析</div>
                        <el-row :span="12"  :gutter="1" align="middle" class="border-dx TcontentBg" style="background: rgba(0,0,0,0.1);min-height:300px;margin-top: 80px;">
                            <div class="DborderTop" style="height:15%;margin-top:-44px"> </div>
                            <div id="situation3" style="height: 250px;width:100%"></div>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="10" style="padding:15px">
                    <div>
                        <el-row :span="6"  :gutter="1" align="middle">
                            <div id="situation4" style="height: 600px;width:100%"></div>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span='7' style="padding:15px">
                    <div style=" background: rgba(0,0,0,0.1);">
                    <div class="sttu_title">问题性质与行政级别关系</div>
                        <el-row :span="12"  :gutter="1" align="middle" class="border-dx TcontentBg" style="background: rgba(0,0,0,0.1);min-height:300px;margin-top: 57px;">
                            <div class="DborderTop" style="height:15%;margin-top:-44px"> </div>
                            <div id="situation5" style="height: 250px;width:100%;margin-top: 45px"></div>
                        </el-row>
                    </div>
                    <div style=" background: rgba(0,0,0,0.1);">
                    <div  class="sttu_title">年龄分布情况分析</div>
                        <el-row :span="12"  :gutter="1" align="middle" class="border-dx TcontentBg" style="background: rgba(0,0,0,0.1);min-height:300px;margin-top: 80px;">
                            <div class="DborderTop" style="height:15%;margin-top:-44px"> </div>
                            <div id="situation2" style="height: 250px;width:100%"></div>
                        </el-row>
                    </div>
                </el-col>
                </el-row>
            </div>
        </el-collapse-transition>
          <!--定性分析-查看关系汇总-->
          <el-collapse-transition>
              <div v-show="switchDesktopGrade1 == 'DXFX' && switchDesktopGrade2 =='DXFXR' && examineRelationship" style="padding-top: 20px">
                  <div >
                      <div class="text-left font-color-white"> 关系汇总</div>
                      <div style="cursor: pointer;color: #FFF;" @click="examineRelationship = false">
                          <span class="dxfx_icon_up font-size-30">
                              <img src="../../assets/img/dxfx_icon_up.png" alt="">
                          </span>
                      </div>
                      <div style="height: 800px">
                          <div id="relationship" style="height: 100%"></div>
                      </div>
                  </div>
              </div>
          </el-collapse-transition>

         <!-- 分析报告-违反精神问题情况分析报告 -->
         <div v-show="switchDesktopGrade1=='FXBG'&&switchDesktopGrade2=='FXBGW'" style="height:100%;width:98%">
            <iframe src="./mentalProblems.pdf" id='mentalProblems' ref='pdfiframe' frameborder="0"></iframe>
         </div>
         <!-- 分析报告-全XXX信访举报形式分析 -->
         <div v-show="switchDesktopGrade1=='FXBG'&&switchDesktopGrade2=='FXBGQ'" style="height:100%">
            <iframe src="./report.pdf" id='report' ref='pdfiframe' frameborder="0"></iframe>
         </div>

      </div>
      <News :contentArr="messages"></News>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/components/Menu.vue'; 
import News from '@/components/News.vue'; 
import echarts from 'echarts';
import 'echarts-wordcloud/dist/echarts-wordcloud';
import 'echarts-wordcloud/dist/echarts-wordcloud.min';

import '../../assets/js/jquery.cntl/jquery-1.11.0.min'
import '../../assets/js/jquery.cntl/jquery.cntl.min'
import '../../assets/js/jquery.cntl/cntl.min.css'


@Component({
    components: {
            Menu,
            News
    },
    data() {
        return {
            menuModal:{
                state:false
            }
        }
    },
    created(){
        // alert(config.ip);
    },
    mounted(){
        let letterReport1:any = echarts.init(document.getElementById('letterReport1'))
        let letterReport2:any = echarts.init(document.getElementById('letterReport2'))
        let letterReport3:any = echarts.init(document.getElementById('letterReport3'))
        let letterReport4:any = echarts.init(document.getElementById('letterReport4'))
        let supervise1:any = echarts.init(document.getElementById('supervise1'))
        let supervise2:any = echarts.init(document.getElementById('supervise2'))
        let supervise3:any = echarts.init(document.getElementById('supervise3'))
        let supervise4:any = echarts.init(document.getElementById('supervise4'))
        let supervise5:any = echarts.init(document.getElementById('supervise5'))
        let examination1:any = echarts.init(document.getElementById('examination1'))
        let examination2:any = echarts.init(document.getElementById('examination2'))
        let examination3:any = echarts.init(document.getElementById('examination3'))
        let caseTrial1:any = echarts.init(document.getElementById('caseTrial1'))
        let caseTrial2:any = echarts.init(document.getElementById('caseTrial2'))
        let caseTrial3:any = echarts.init(document.getElementById('caseTrial3'))
        let caseTrial4:any = echarts.init(document.getElementById('caseTrial4'))
        let caseTrial5:any = echarts.init(document.getElementById('caseTrial5'))
        let styleSupervision1:any = echarts.init(document.getElementById('styleSupervision1'))
        let styleSupervision2:any = echarts.init(document.getElementById('styleSupervision2'))
        let styleSupervision3:any = echarts.init(document.getElementById('styleSupervision3'))
        let patrol1:any = echarts.init(document.getElementById('patrol1'))
        let patrol2:any = echarts.init(document.getElementById('patrol2'))
        let patrol3:any = echarts.init(document.getElementById('patrol3'))

        let letterReport1Option = {
            grid:{
                x:100,
                y:0,
                x2:40,
                y2:30,
                borderWidth:1
            },
            yAxis: {
                show:true,
                type: 'category',
                minInterval: 1,
                data: ['违反廉洁自律行为', '违反组织自律行为', '违反生活自律行为', '违反群众自律行为', '违反工作自律行为'],
                axisLine:{
                    lineStyle:{
                        color:'white',
                        fontSize:10,
                        width:1
                    }
                },
                splitLine:{
                　show:false
            　　},
                axisLabel : {//坐标轴刻度标签的相关设置。
                    interval:0,
                    rotate:"0",
                    fontSize:9
                    
                }
            },
            xAxis: {
                show:true,
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'white',
                        width:1
                    }
                },
                splitLine:{
                    show:false
                },
                axisLabel : {//坐标轴刻度标签的相关设置。
                    fontSize:9
                }
            },
            series: [{
                data: [100, 356, 298, 258, 195],
                type: 'bar',
                barCategoryGap:30,
                itemStyle: {
                normal: {
                    　color: function (params:any){
                    // 大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                        var colorList = [           
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',		    	                               
                                ];
                        var index=params.dataIndex;
                        return colorList[params.dataIndex]
                        },
                    },
                },
                barWidth : 6,//柱图宽度
                label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                color: 'white',
                                fontSize:9
                        },
                        formatter : function(data:any) { 
                            return data.value + '件次'; 
                            }
                    }
                }
            }],
        };
        let letterReport2Option = {
            tooltip : {
                trigger: 'axis'
            },
            grid:{
                x:35,
                y:10,
                x2:20,
                y2:40,
                borderWidth:1
            },
            calculable : true,
            xAxis : [
                {          
                    type : 'category',
                    boundaryGap : false,
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        rotate:"30",
                        fontSize:9
                    },
                    axisTick:{
                        length:0
                    },
                    data: ['XXX职以上','副XXX职','正XXX职','副战区值','正战区职'],
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color: ['RGB(11, 72, 170)'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        fontSize:9
                    },
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                            width:1
                        }
                    },
                },
                
            ],
            series : [
                {
                    name:'数据',
                    type:'line',
                    smooth:true,
                    lineStyle:{
                        color:'red'
                    },
                    itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'RGB(61, 186, 219)',
                            }  
                        }  
                    },  
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#31F5FD'},
                                        {offset: 1, color: '#20A5FC'}
                                    ]
                                )
                            }
                        },
                    data: [20, 275, 130, 650, 80],
                },
            ]
        };
        let letterReport3Option = {
            tooltip : {
                trigger: 'axis'
            },
            grid:{
                x:50,
                y:20,
                x2:30,
                y2:55,
                borderWidth:1
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        interval:0,
                        rotate:"15",
                        fontSize:9
                    },
                data: ['南部战区','北部战区','海XXX','北京XXX区善后办','国防大学'],
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color: ['RGB(11, 72, 170)'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        fontSize:9
                    },
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                            width:1
                        }
                    },
                },
                
            ],
            series : [
                {
                    name:'数据',
                    type:'line',
                    smooth:false,
                    lineStyle:{
                        color:'red'
                    },
                    itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'RGB(61, 186, 219)',
                            },
                            label :{
                                show: true
                                } 
                    },  
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'white',
                                fontSize : 9
                        },
                    }
                },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#8E63FB'},
                                        {offset: 1, color: '#209CFC'}
                                    ]
                                )
                            }
                        },
                data: [6, 3, 16, 7, 18],
                },
            ]
        };
        let letterReport4Option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
            },
            grid:{
                x:60,
                y:0,
                x2:20,
                y2:40,
                borderWidth:1
            },
            series : [
                {
                    type: 'pie',
                    radius : '60%',
                    center: ['50%', '60%'],
                    label : {
                        normal : {
                                textStyle : {
                                fontSize : 9
                                }
                            }
                        }, 
                    data:[
                        {value:35.1, name:'电话430件次占比35.1%'},
                        {value:23.1, name:'来访430件次占比23.1%'},
                        {value:14.5, name:'来信430件次占比14.5%'},
                        {value:55.1, name:'网络430件次占比55.1%'},
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
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',		    	                               
                                ];
                                return colorList[params.dataIndex]
                            }
                    },
                    labelLine:{
                        length:2,
                        length2:0
                    }
                }
            ]
        };
        let supervise1Option = {
            tooltip : {
                trigger: 'axis'
            },
            grid:{
                x:35,
                y:10,
                x2:20,
                y2:60,
                borderWidth:1
            },
            calculable : true,
            xAxis : [
                {          
                    type : 'category',
                    boundaryGap : false,
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        rotate:"30",
                        fontSize:9
                    },
                    axisTick:{
                        length:0
                    },
                    data: ['XXX职以上','副XXX职','正XXX职','副战区值','正战区职'],
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color: ['RGB(11, 72, 170)'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        fontSize:9
                    },
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                            width:1
                        }
                    },
                },
                
            ],
            series : [
                {
                    name:'数据',
                    type:'line',
                    smooth:true,
                    lineStyle:{
                        color:'red'
                    },
                    itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'RGB(61, 186, 219)',
                            }  
                        }  
                    },  
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#9C5EFB'},
                                        {offset: 1, color: '#2399FC'}
                                    ]
                                )
                            }
                        },
                    data: [20, 275, 130, 650, 80],
                },
            ]
        };
        let supervise2Option = {
            grid:{
                x:80,
                y:0,
                x2:40,
                y2:40,
                borderWidth:1
            },
            yAxis: {
                show:true,
                type: 'category',
                minInterval: 1,
                data: ['违反廉洁自律行为', '违反组织自律行为', '违反生活自律行为', '违反群众自律行为', '违反工作自律行为'],
                axisLine:{
                    lineStyle:{
                        color:'white',
                        fontSize:10,
                        width:1
                    }
                },
                splitLine:{
                　show:false
            　　},
                axisLabel : {//坐标轴刻度标签的相关设置。
                    interval:0,
                    rotate:"0",
                    fontSize:9
                    
                }
            },
            xAxis: {
                show:true,
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'white',
                        width:1
                    }
                },
                splitLine:{
                    show:false
                },
                axisLabel : {//坐标轴刻度标签的相关设置。
                    fontSize:9
                }
            },
            series: [{
                data: [100, 356, 298, 258, 195],
                type: 'bar',
                barCategoryGap:30,
                itemStyle: {
                normal: {
                    　color: function (params:any){
                    // 大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                        var colorList = [           
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	
                                ];
                        var index=params.dataIndex;
                        return colorList[params.dataIndex]
                        },
                    },
                },
                barWidth : 6,//柱图宽度
                label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                color: 'white',
                                fontSize:9
                        },
                        formatter : function(data:any) { 
                            return data.value + '件次'; 
                            }
                    }
                }
            }],
        };
        let supervise3Option = {
            grid:{
                x:50,
                y:0,
                x2:40,
                y2:0,
                borderWidth:1
            },
            tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
            calculable : true,
            series : [
                {
                    name:'面积模式',
                    type:'pie',
                    radius : [5, 25],
                    roseType : 'area',
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: '7',
                            },
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold'
                            }
                        },
                    
                    },
                    data:[
                        {value:10, name:'大搞封建迷信活动'},
                        {value:5, name:'对抗组织审查'},
                        {value:15, name:'购买、私存反动杂志'},
                        {value:35, name:'滥用职权谋取利益'},
                        {value:30, name:'谋取利益并收受财物'},
                        {value:40, name:'搞权钱、钱色交易'}
                    ],
                }
            
            ]
        };
        let supervise4Option = {
            tooltip : {
                trigger: 'axis'
            },
            grid:{
                x:50,
                y:10,
                x2:20,
                y2:30,
                borderWidth:1
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        interval:0,
                        rotate:"20",
                        fontSize:9
                    },
                data: ['南部战区','北部战区','海XXX','北京XXX区善后办','国防大学'],
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color: ['RGB(11, 72, 170)'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        fontSize:9
                    },
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                            width:1
                        }
                    },
                },
                
            ],
            series : [
                {
                    name:'数据',
                    type:'line',
                    smooth:false,
                    lineStyle:{
                        color:'red'
                    },
                    itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'RGB(61, 186, 219)',
                            },
                            label :{
                                show: true
                                } 
                    },  
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'white',
                                fontSize : 9
                        },
                    }
                },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#1267FB'},
                                        {offset: 1, color: '#26C0FC'}
                                    ]
                                )
                            }
                        },
                data: [6, 3, 16, 7, 18],
                },
            ]
        };
        let supervise5Option = {
        tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
            },
            grid:{
                x:35,
                y:0,
                x2:20,
                y2:0,
                borderWidth:1
            },
            series : [
                {
                    type: 'pie',
                    radius : '60%',
                    center: ['50%', '60%'],
                    label : {
                        normal : {
                                textStyle : {
                                fontSize : 8
                                }
                            }
                        }, 
                    data:[
                        {value:10.1, name:'电话430件次占比10.1%'},
                        {value:15.1, name:'来访430件次占比15.1%'},
                        {value:20.5, name:'来信430件次占比20.5%'},
                        {value:65, name:'网络430件次占比65.1%'},
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
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	
                                ];
                                return colorList[params.dataIndex]
                            }
                    },
                    labelLine:{
                        length:5,
                        length2:3
                    }
                }
                
            ]
        };
        let examination1Option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: true,
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: '9',
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '10',
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
                        {value:472, name:'初核中472件次'},
                        {value:143, name:'初核结束143件次'},
                        {value:94, name:'立案94件次'},
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
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	
                                ];
                                return colorList[params.dataIndex]
                            }
                    }
                }
            ]
        };
        let examination2Option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
            },
            series : [
                {
                    type: 'pie',
                    radius : '60%',
                    center: ['50%', '60%'],
                    data:[
                        {value:60, name:'查询84人'},
                        {value:10, name:'谈话67人'},
                        {value:20, name:'询问85人'},
                        {value:30, name:'讯问58人'},
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
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	   	                               
                                ];
                                return colorList[params.dataIndex]
                            }
                    }
                }
            ]
        };
        let examination3Option = {
                grid:{
                    x:25,
                    y:10,
                    x2:0,
                    y2:30,
                    borderWidth:1
                },
            xAxis: {
                type: 'category',
                data: ['属实', '基本属实', '部分属实', '不实'],
                axisLine:{
                    lineStyle:{
                        color:'white',
                        fontSize:10,
                        width:1
                    }
                },
                splitLine:{
                　show:false
            　　},
                axisLabel : {//坐标轴刻度标签的相关设置。
                    interval:0,
                    rotate:"0",
                    fontSize:9
                    
                }
            },
            yAxis: {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'white',
                        width:2
                    }
                },
                splitLine:{
                    show:false
                },
                axisLabel : {//坐标轴刻度标签的相关设置。g
                    fontSize:9
                }
            },
            series: [{
                data: [405, 356, 298, 258],
                type: 'bar',
                itemStyle: {
                    normal: {
                        　color: function (params:any){
                        // 大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                            var colorList = [           
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	
                                ];
                            var index=params.dataIndex;
                            return colorList[params.dataIndex]
                            },
                    },
                },
                barWidth : 20,//柱图宽度
                label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'white',
                                fontSize:9
                                
                        },
                        formatter : function(data:any) { 
                            return data.value + '件次'; 
                            }
                    }
                }
            }],
        };
        let caseTrial1Option = {
            grid:{
                    x:80,
                    y:0,
                    x2:15,
                    y2:55,
                    borderWidth:1
                },
            yAxis: {
                type: 'category',
                data: ['未结案', '已结案','移送司法机关', '处理处分人数','党纪处分','政纪处分'],
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
                    rotate:"0",
                    fontSize:9
                }
            },
            xAxis: {
                type: 'value',
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
                    fontSize:9
                }
            },
            series: [{
                data: [405, 356, 298, 258, 200,158],
                type: 'bar',
                itemStyle: {
                    normal: {
                        　color: function (params:any){
                        // 大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                            var colorList = [           
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	
                                ];
                            var index=params.dataIndex;
                            return colorList[params.dataIndex]
                            },
                    },
                },
                barWidth : 6,//柱图宽度
                label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                color: 'white',
                                fontSize:9
                        },
                        formatter : function(data:any) { 
                            return data.value + '件次'; 
                            }
                    }
                }
            }],
        };
        let caseTrial2Option = {
        tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
            },
            grid:{
                x:35,
                y:0,
                x2:20,
                y2:40,
                borderWidth:1
            },
            series : [
                {
                    type: 'pie',
                    radius : '60%',
                    center: ['50%', '60%'],
                    label : {
                        normal : {
                                textStyle : {
                                fontSize : 9
                                }
                            }
                        }, 
                    data:[
                        {value:10.1, name:'电话430件次占比10.1%'},
                        {value:15.1, name:'来访430件次占比15.1%'},
                        {value:20.5, name:'来信430件次占比20.5%'},
                        {value:65, name:'网络430件次占比65.1%'},
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
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	
                                ];
                                return colorList[params.dataIndex]
                            }
                    }
                }
            ]
        };
        let caseTrial3Option = {
            tooltip : {
                trigger: 'axis'
            },
            grid:{
                x:35,
                y:10,
                x2:20,
                y2:40,
                borderWidth:1
            },
            calculable : true,
            xAxis : [
                {          
                    type : 'category',
                    boundaryGap : false,
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        rotate:"30",
                        fontSize:9
                    },
                    axisTick:{
                        length:0
                    },
                    data: ['XXX职以上','副XXX职','正XXX职','副战区值','正战区职'],
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color: ['RGB(11, 72, 170)'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        fontSize:9
                    },
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                            width:1
                        }
                    },
                },
                
            ],
            series : [
                {
                    name:'数据',
                    type:'line',
                    smooth:true,
                    lineStyle:{
                        color:'red'
                    },
                    itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'RGB(61, 186, 219)',
                            }  
                        }  
                    },  
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#9C5EFB'},
                                        {offset: 1, color: '#2697FC'}
                                    ]
                                )
                            }
                        },
                    data: [20, 275, 130, 650, 80],
                },
            ]
        };
        let caseTrial4Option = {
            grid:{
                x:0,
                y:0,
                x2:0,
                y2:0,
                borderWidth:1
            },
        tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    type:'pie',
                    radius : [10, 40],
                    roseType : 'area',
                    avoidLabelOverlap: true,
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 9,
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: 10,
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
                        {value:24, name:'严重警告为轻处分 24人'},
                        {value:764, name:'警告 764人'},
                        {value:298, name:'开除为重处分298人'},
                        {value:387, name:'留档查看387人'},
                        {value:184, name:'撤职184人'}
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
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	
                                ];
                                return colorList[params.dataIndex]
                            }
                    }
                }
            ]
        };
        let caseTrial5Option = {
            grid:{
                x:20,
                y:15,
                x2:0,
                y2:20,
                borderWidth:1
            },
            xAxis: {
                type: 'category',
                data: ['55岁以上', '50岁~55岁','30岁~50岁'],
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
                    rotate:"0",
                    fontSize:9

                }
            },
            yAxis: {
                type: 'value',
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
                    rotate:"0",
                    fontSize:9

                }
            },
            series: [{
                data: [350, 1589, 4853],
                type: 'bar',
                itemStyle: {
                    normal: {
                        　color: function (params:any){
                        // 大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                            var colorList = [           
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	
                                ];
                            var index=params.dataIndex;
                            return colorList[params.dataIndex]
                            },
                    },
                },
                barWidth : 20,//柱图宽度
                label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'white',
                                fontSize:9
                        },
                        formatter : function(data:any) { 
                            return data.value + '人'; 
                            }
                    }
                }
            }],
        };
        let styleSupervision1Option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c}+ ({d}%)"
            },
            legend: {
            orient: 'horizontal',
            align:'left',
            data:['初核中','初核结束','立案'],
            itemWidth:10,
            itemHeight:5,
            textStyle:{
                color:'#F8F8F8',
                fontSize:9
            }
            },
            graphic:[{
                    type:'text',
                    left:'center',
                    top:'40%',
                    style:{
                        text:'问题线索总量',
                        fill:'#fff',
                        width:15,
                        height:15,
                        fontSize:9,
                    }
                },{
                    type:'text',
                    left:'center',
                    top:'50%',
                    style:{
                        text:'3324',
                        fill:'#29F6B7',
                        width:20,
                        height:20,
                        fontSize:13,
                    }
                }],
            series: [
                {
                    type:'pie',
                    radius : [30, 40],
                    avoidLabelOverlap: true,
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: '9',
                            },
                            formatter: '{c}'+'件次'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '10',
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
                        {value:472, name:'初核中'},
                        {value:143, name:'初核结束'},
                        {value:94, name:'立案'},
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
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	
                                ];
                                return colorList[params.dataIndex]
                            }
                    }
                }
            ]
        };
        let styleSupervision2Option = {
        tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c}+ ({d}%)"
            },
            legend: {
            orient: 'horizontal',
            align:'left',
            data:['属实','基本属实','部分属实','不实','审核通过','未通过','通报曝光'],
            itemGap:1,
            itemWidth:6,
            itemHeight:3,
            textStyle:{
                color:'#F8F8F8',
                fontSize:8
            }
            },
            series: [
                {
                    type:'pie',
                    radius : [30, 40],
                    avoidLabelOverlap: true,
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: '9',
                            },
                            formatter: '{c}'+'件次'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '10',
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
                        {value:83, name:'属实'},
                        {value:183, name:'基本属实'},
                        {value:196, name:'部分属实'},
                        {value:208, name:'不实'},
                        {value:76, name:'审核通过'},
                        {value:264, name:'未通过'},
                        {value:196, name:'通报曝光'},
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
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	
                                ];
                                return colorList[params.dataIndex]
                            }
                    }
                }
            ]
        };
        let styleSupervision3Option = {
        tooltip : {
                trigger: 'axis'
            },
            grid:{
                x:50,
                y:20,
                x2:40,
                y2:30,
                borderWidth:1
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        interval:0,
                        fontSize:9
                    },
                data: ['南部战区','北部战区','海XXX','北京XXX区善后办','国防大学'],
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color: ['RGB(11, 72, 170)'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        fontSize:9
                    },
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                            width:1
                        }
                    },
                },
                
            ],
            series : [
                {
                    name:'数据',
                    type:'line',
                    smooth:false,
                    lineStyle:{
                        color:'red'
                    },
                    itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'RGB(61, 186, 219)',
                            },
                            label :{
                                show: true
                                } 
                    },  
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'white',
                                fontSize : 9
                        },
                    }
                },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#1266FB'},
                                        {offset: 1, color: '#26C0FC'}
                                    ]
                                )
                            }
                        },
                data: [6, 3, 16, 7, 18],
                },
            ]
        };
        let patrol1Option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c}+ ({d}%)"
            },
            series: [
                {
                    type:'pie',
                    radius : [30, 40],
                    avoidLabelOverlap: true,
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: '9',
                            },
                            formatter: '{b}'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '10',
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
                        {value:210, name:'专项巡视210次'},
                        {value:387, name:'机动巡视387次'},
                        {value:482, name:'回头看482次'},
                        {value:140, name:'常规巡视140次'},
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
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	
                                ];
                                return colorList[params.dataIndex]
                            }
                    }
                }
            ]
        };
        let patrol2Option = {
            grid:{
                x:90,
                y:0,
                x2:35,
                y2:70,
                borderWidth:1
            },
            yAxis: {
                show:true,
                type: 'category',
                minInterval: 1,
                data: ['违反廉洁自律行为', '违反组织自律行为', '违反生活自律行为', '违反群众自律行为', '违反工作自律行为'],
                axisLine:{
                    lineStyle:{
                        color:'white',
                        fontSize:10,
                        width:1
                    }
                },
                splitLine:{
                　show:false
            　　},
                axisLabel : {//坐标轴刻度标签的相关设置。
                    interval:0,
                    rotate:"0",
                    fontSize:9
                    
                }
            },
            xAxis: {
                show:true,
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'white',
                        width:1
                    }
                },
                splitLine:{
                    show:false
                },
                axisLabel : {//坐标轴刻度标签的相关设置。
                    fontSize:9
                }
            },
            series: [{
                data: [100, 356, 298, 258, 195],
                type: 'bar',
                barCategoryGap:30,
                itemStyle: {
                normal: {
                    　color: function (params:any){
                    // 大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                        var colorList = [           
                                    '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                    '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	
                                ];
                        var index=params.dataIndex;
                        return colorList[params.dataIndex]
                        },
                    },
                },
                barWidth : 6,//柱图宽度
                label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                color: 'white',
                                fontSize:9
                        },
                        formatter : function(data:any) { 
                            return data.value + '件次'; 
                            }
                    }
                }
            }],
        };
        let patrol3Option = {
            tooltip : {
                trigger: 'axis'
            },
            grid:{
                x:35,
                y:10,
                x2:20,
                y2:20,
                borderWidth:1
            },
            calculable : true,
            xAxis : [
                {          
                    type : 'category',
                    boundaryGap : false,
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        fontSize:9
                    },
                    axisTick:{
                        length:0
                    },
                    data: ['XXX职以上','副XXX职','正XXX职','副战区值','正战区职'],
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color: ['RGB(11, 72, 170)'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                        fontSize:9
                    },
                    axisLine:{
                        lineStyle:{
                            color:'RGB(51, 148, 202)',
                            width:1
                        }
                    },
                },
                
            ],
            series : [
                {
                    name:'数据',
                    type:'line',
                    smooth:true,
                    lineStyle:{
                        color:'red'
                    },
                    itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'RGB(61, 186, 219)',
                            }  
                        }  
                    },  
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: 'RGB(43, 197, 252)'},
                                        {offset: 1, color: 'RGB(43, 197, 252,0.1)'}
                                    ]
                                )
                            }
                        },
                    data: [20, 275, 130, 650, 80],
                },
            ]
        };


        letterReport1.setOption(letterReport1Option, true);
        letterReport2.setOption(letterReport2Option, true);
        letterReport3.setOption(letterReport3Option, true);
        letterReport4.setOption(letterReport4Option, true);
        supervise1.setOption(supervise1Option, true);
        supervise2.setOption(supervise2Option, true);
        supervise3.setOption(supervise3Option, true);
        supervise4.setOption(supervise4Option, true);
        supervise5.setOption(supervise5Option, true);
        examination1.setOption(examination1Option, true);
        examination2.setOption(examination2Option, true);
        examination3.setOption(examination3Option, true);
        caseTrial1.setOption(caseTrial1Option, true);
        caseTrial2.setOption(caseTrial2Option, true);
        caseTrial3.setOption(caseTrial3Option, true);
        caseTrial4.setOption(caseTrial4Option, true);
        caseTrial5.setOption(caseTrial5Option, true);
        styleSupervision1.setOption(styleSupervision1Option, true);
        styleSupervision2.setOption(styleSupervision2Option, true);
        styleSupervision3.setOption(styleSupervision3Option, true);
        patrol1.setOption(patrol1Option, true);
        patrol2.setOption(patrol2Option, true);
        patrol3.setOption(patrol3Option, true);
        // 获取分析报告模块下pdf盒子的高度和宽度
        this.changeIframeBox()
        // 时间轴
        this.getTimeline()
    },
    methods: {
         switchHomelevel3(){

         },
         switchHomelevel4(){
             this.switchHomelevel3()
         }
        
    },
})
export default class Home extends Vue {
    private updateTime:string =  (new Date()).getFullYear()+"-0"+( (new Date()).getMonth()+1)+"-"+ (new Date()).getDate();
    private radio6:string = '文'
    private switchDesktopGrade1:string = 'DLFX'
    private switchDesktopGrade2:string = 'DLFXT'
    private examineRelationship:boolean = false
    private showMenu:boolean = false
    private earlyWarning:string = '1'
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
    private chartData:object =  {
            columns: ['日期', '访问用户'],
            rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '111111', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
            ]
        }
    private chartData2:object =  {
            columns: ['日期', '访问用户'],
            rows: [
                { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
            ]
            }
    private chartData3:object =  {
            columns: ['日期', '访问用户'],
            rows: [
                { '日期': '1/1', '访问用户': 1393 },
                { '日期': '1/2', '访问用户': 3530 },
                { '日期': '1/3', '访问用户': 2923 },
                { '日期': '1/4', '访问用户': 1723 },
                { '日期': '1/5', '访问用户': 3792 },
                { '日期': '1/6', '访问用户': 4593 }
            ]
            }
    private chartData4:object =  {
            columns: ['日期', '访问用户', '下单用户', '下单率'],
            rows: [
                { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
            ]
         }
    private punchhours = ['权利交易', '违反工作记录问题', '违反廉洁自律行为', '贪污受贿行为', '违法行为'];
    private punchdays = ['权利交易', '违反工作记录问题', '违反廉洁自律行为', '贪污受贿行为', '违法行为'];
    private data = [[0,0,400],[0,1,200],[0,2,300],[0,3,600],[0,4,500],[1,0,700],[1,1,200],[1,2,100],[1,3,400],[1,4,900],[2,0,100],[2,1,400],[2,2,800],[2,3,400],[2,4,700],[3,0,100],[3,1,1000],[3,2,300],[3,3,400],[3,4,300],[4,0,100],[4,1,200],[4,2,300],[4,3,900],[4,4,100]]
    private punchdata = this.data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });
    private eventOption:object = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable : true,
        series : [
            {
                name:'面积模式',
                type:'pie',
                radius : [30, 90],
                roseType : 'area',
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: '14',
                        },
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '17',
                            fontWeight: 'bold'
                        }
                    },
                
                },
                data:[
                    {value:10, name:'大搞封建迷信活动'},
                    {value:5, name:'对抗组织审查'},
                    {value:15, name:'购买、私存反动杂志'},
                    {value:35, name:'滥用职权谋取利益'},
                    {value:30, name:'谋取利益并收受财物'},
                    {value:40, name:'搞权钱、钱色交易'}
                ]
            }
        ]
    };
    private personnelOption:object = {
        tooltip : {
            trigger: 'item',
            formatter: '{a} : {b}'
        },
        lineStyle :{
            whdth:200,
            opacity : 1
        },
        series : [
            {
                type: 'graph',
                name: "内容",
                layout: 'force',
                ribbonType: false,
                symbolSize : 50,
                roam : 'move',
                legendHoverLink : true,//是否启用图例 hover(悬停) 时的联动高亮。
                draggable : true,
                force : { //力引导图基本配置
                            initLayout:'10',
                            repulsion : 50,//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
                            gravity : 0.03,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                            edgeLength :100,//边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
                            layoutAnimation : false
                        },
                label : { //=============图形上的文本标签
                    normal : {
                        show : true,//是否显示标签。
                        position : 'inside',//标签的位置。['50%', '50%'] [x,y]
                        textStyle : { //标签的字体样式
                            color : '#fff', //字体颜色
                            fontStyle : 'normal',//文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                            fontWeight : 'bold',//'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                            fontFamily : 'sans-serif', //文字的字体系列
                            fontSize : 12, //字体大小
                        }
                    },
                    emphasis : {//高亮状态

                    }
                },
                
                categories : [
                    {
                        name: '父亲'
                    },
                    {
                        name: '母亲'
                    },
                    {
                        name:'女儿'
                    }
                ],
                lineStyle : { //==========关系边的公用线条样式。
                        normal : {
                            color : '#fff',
                            width : '2',
                            type : 'dotted', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                            curveness : 0.1, //线条的曲线程度，从0到1
                            opacity : 1  // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                        },
                        emphasis : {//高亮状态

                        }
                    },
                itemStyle: {
                    normal: {
                        color :function(params:any) {
                        //自定义颜色
                        var colorList = [           
                                '#1264FB','#1E9EFC','#31F5FD','#9EFD32','#2FEB8F',                                    
                                '#9760FB','#F89033','#1E9EFC','#F3A43B','#9EFD32',	
                            ];
                            return colorList[params.dataIndex]
                        }
                    },
                    emphasis: {
                        label: {
                            show: false,
                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                        },
                        nodeStyle : {
                            //r: 30
                        },
                        linkStyle : {}
                    }
                },
                useWorker: false,
                minRadius : 100,
                maxRadius : 200,
                gravity: 1.1,
                scaling: 1.1,
                nodes:[
                    {category:0, name: '乔布斯', value : 5, label: '乔布斯\n（主要）'},
                    {category:1, name: '丽萨-乔布斯',value : 2},
                    {category:1, name: '保罗-乔布斯',value : 2},
                    {category:1, name: '克拉拉-乔布斯',value : 10},
                    {category:1, name: '那儿-乔布斯',value : 2},

                    {category:1, name: '盖茨',value : 2},
                    {category:1, name: '魏多尔',value : 2}, 
                    {category:1, name: '强森',value : 2},

                ],
                links : [
                    {source : '丽萨-乔布斯', target : '乔布斯', weight : 1,name: '儿子',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '保罗-乔布斯', target : '乔布斯', weight : 2, name: '父亲',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '克拉拉-乔布斯', target : '乔布斯', weight : 1,  name: '母亲',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '那儿-乔布斯', target : '乔布斯', weight : 1,  name: '女儿',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '那儿-乔布斯', target : '克拉拉-乔布斯', weight : 1,  name: '外婆',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '乔布斯', target : '盖茨', weight : 1,  name: '朋友',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '魏多尔', target : '盖茨', weight : 1,  name: '朋友',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '强森', target : '盖茨', weight : 1,  name: '朋友',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                ]
            }
        ]
    };
    private relationshipOption:object = {
        tooltip : {
            trigger: 'item',
            formatter: '{a} : {b}'
        },
        lineStyle :{
            width:600,
            opacity : 1
        },
        series : [
            {
                type: 'graph',
                name: "内容",
                layout: 'force',
                ribbonType: false,
                symbolSize : 90,
                roam : false,
                legendHoverLink : true,//是否启用图例 hover(悬停) 时的联动高亮。
                draggable : true,
                itemStyle:{
                    color :function(params:any) {
                        //自定义颜色
                        var colorList = [ '#75AEFC','#2AC8FC','#2DB475', '#184B8C','#1E9EFC','#2DB475','#1264FB','#1E9EFC','#DD9F38',
                                          '#75AEFC','#2AC8FC','#2DB475', '#184B8C','#1E9EFC','#2DB475','#1264FB','#1E9EFC','#DD9F38'
                                      ];
                            return colorList[params.dataIndex]
                    },
                },
                force : { //力引导图基本配置
                            repulsion :150,//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
                            gravity : 0.000001,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                            edgeLength :150,//边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
                            layoutAnimation : true
                        },
                label : { //=============图形上的文本标签
                    normal : {
                        show : true,//是否显示标签。
                        position : 'inside',//标签的位置。['50%', '50%'] [x,y]
                        textStyle : { //标签的字体样式
                            color : '#fff', //字体颜色
                            fontStyle : 'normal',//文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                            fontWeight : 'normal',//'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                            fontFamily : 'sans-serif', //文字的字体系列
                            fontSize : 12, //字体大小
                        }
                    },
                    emphasis : {//高亮状态

                    }
                },

                categories : [
                    {
                        name: '事件'
                    },
                    {
                        name: '地点'
                    },
                    {
                        name:'涉案人员'
                    },
                    {
                        name:'受害人'
                    },
                    {
                        name:'同事'
                    }
                ],
                lineStyle : { //==========关系边的公用线条样式。
                        normal : {
                            color : '#28EED6',
                            width : '1',
                            type : 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                            curveness : 0, //线条的线程度，从0到1
                            opacity : 1  // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                        },
                        emphasis : {//高亮状态

                        }
                    },
                useWorker: false,
                gravity: 0.2,
                scaling: 0.5,
                nodes:[
                    {category:1, name: '违规向危房改造户收费',"symbolSize": 130,value :5},
                    {category:0, name: '朝阳区',value :5,label: '朝阳区\n（主要）'},
                    {category:1, name: '李洪河',value : 2,},
                    {category:1, name: '长寿区',value : 2},
                    {category:1, name: '王晨阳',value : 2},
                    {category:1, name: '李海根',value : 2},
                    {category:1, name: '搞权钱、钱色交易',value : 2},
                    {category:1, name: '违法',"symbolSize": 60,value : 2},
                    {category:1, name: '违纪',"symbolSize": 60,value : 2},
                    {category:1, name: '胡广生',value : 2},
                    {category:1, name: '李海',value : 2},
                    {category:1, name: '王黔阳',value : 2},
                    {category:1, name: '海淀区',value : 2},
                    {category:1, name: '张三',value : 2},
                    {category:1, name: '李广生',value : 2},
                    {category:1, name: '贪污受贿',value :5,},
                    {category:1, name: '行贿',value : 2},
                    {category:1, name: '营私',value : 2},
                    {category:1, name: '西城区',value : 2},
                    {category:1, name: '舞弊',value : 2},


                ],
                links : [
                    {source : '2018.01', target : '违规向危房改造户收费', weight : 1,  name: '',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '朝阳区', target : '营私', weight : 1,  name: '事件',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '朝阳区', target : '违法', weight : 1,  name: '事件',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '长寿区', target : '2018.01', weight : 1,  name: '地点 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '违规向危房改造户收费', target : '长寿区', weight : 1,  name: '事件 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '2018.01', target : '长寿区', weight : 1,  name: '地点 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '李海根', target : '王晨阳', weight : 1,  name: '受害人 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '违纪', target : '王黔阳', weight : 1,  name: '受害人 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '违法', target : '长寿区', weight : 1,  name: '受害人 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '违法', target : '张三', weight : 1,  name: '受害人 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '搞权钱、钱色交易', target : '违法', weight : 1,  name: '受害人 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '李海', target : '搞权钱、钱色交易', weight : 1,  name: '受害人 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '李海', target : '2018.01', weight : 1,  name: '地点 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '海淀区', target : '违纪', weight : 1,  name: ' ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '贪污受贿', target : '海淀区', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '李广生', target : '李海', weight : 1,  name: '同事 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '李广生', target : '西城区', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '胡广生', target : '西城区', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '胡广生', target : '海淀区', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '胡广生', target : '舞弊', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '营私', target : '西城区', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '李广生', target : '营私', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '舞弊', target : '朝阳区', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '王晨阳', target : '张三', weight : 1,  name: '同事 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '舞弊', target : '王黔阳', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '张三', target : '行贿', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '李洪河', target : '贪污受贿', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '西城区', target : '李洪河', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '行贿', target : '王黔阳', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                    {source : '李海根', target : '违规向危房改造户收费', weight : 1,  name: '涉案人员 ',label: { normal: {show: true,formatter: function(x:any){return x.data.name;}}}},
                ]
            }
        ]
    };
    private situation1Option = {
            tooltip : {
                trigger: 'axis'
            },
            calculable : true,
            legend: {
                data:['案件增长','案件降低','平均率'],
                textStyle: {
                color: '#fff'
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisLabel:{
                    textStyle: {
                        color: '#fff'
                    }
                    }
                },
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '数量(件)',
                    axisLabel : {
                        formatter: '{value}',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    nameTextStyle:{
                        color: '#fff'
                    }
                },
                {
                    type : 'value',
                    name : '',
                    axisLabel : {
                        formatter: ''
                    }
                }
            ],
            series : [

                {
                    name:'案件增长',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    color:['rgb(92,188,175)'],
                },
                {
                    name:'案件降低',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    color:['rgb(68,146,240)'],
                },
                {
                    name:'平均率',
                    type:'line',
                    yAxisIndex: 1,
                    data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
                    color:['rgb(101,197,143)'],
                }
            ]
        };
    private situation2Option = {
        tooltip: {
                show: true,
                trigger: 'item',//提示框触发类型，item数据项图形触发，主要应用于无类目轴的图表（散点图、饼形图等）
                ormatter: function(params:any, ticket:any, callback:any) { //第一个参数数据集、第二个参数是异步回调标志、第三个参数是异步回调
                    return params.seriesName + ": " + params.value; //系列名称：数据值
                }    
            },
        legend: {
                // orient: 'horizontal',
                left: 'left',
                data: ['18岁以下','18岁-30岁','30岁-40岁','40岁-60岁','60岁以上'],
                x:'conter',
                textStyle: {
                    color: '#fff'
                }
            },
        series : [
            {
                name:'面积模式',
                type:'pie',
                radius : [30, 90],
                roseType : 'area',
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: '14',
                        },
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '17',
                            fontWeight: 'bold'
                        }
                    },
                
                },
                data:[
                    {value:10, name:'18岁以下',itemStyle: {normal: {color:'rgb(110,238,249)'},},},
                    {value:5, name:'18岁-30岁',itemStyle: {normal: {color:'rgb(87,193,246)'},},},
                    {value:15, name:'30岁-40岁',itemStyle: {normal: {color:'rgb(108,209,148)'},},},
                    {value:25, name:'40岁-60岁',itemStyle: {normal: {color:'rgb(30,90,246)'},},},
                    {value:20, name:'60岁以上',itemStyle: {normal: {color:'rgb(64,152,245)'},},}
                ]
            }
        ]
    };
    private situation3Option = {
      
        tooltip: {
            position: 'top'
        },
        animation: false,
        grid: {
            height: '50%',
            y: '10%',
            x:'130'
        },
        xAxis: {
            type: 'category',
            data: this.punchhours,
            splitArea: {
                show: true
            },
            axisLabel:{
            interval:0,  
            rotate:30 , 
            textStyle: {
                color: '#fff',
            }
            }
        },
        yAxis: {
            type: 'category',
            data: this.punchdays,
            splitArea: {
                show: true
            },
            axisLabel:{
            textStyle: {
                color: '#fff'
            }
            }
        },
        visualMap: {
            min: 100,
            max: 1000,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            //bottom: '15%',
            inRange: {
            color: ['rgb(76,175,248)','rgb(25,85,218)']
            },
            textStyle: {
            color: '#fff'
            }
        },
        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: this.punchdata,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    private situation5Option = {
        tooltip: {
            position: 'top'
        },
        animation: false,
        grid: {
            height: '50%',
            y: '10%',
            x:'130'
        },
        xAxis: {
            type: 'category',
            data: ['XXX职以上','副XXX职','正XXX职','副战区值','正战区职'],
            splitArea: {
                show: true
            },
            axisLabel:{
            interval:0,  
            rotate:0 , 
            textStyle: {
                color: '#fff',
            }
            }
        },
        yAxis: {
            type: 'category',
            data: this.punchdays,
            splitArea: {
                show: true
            },
            axisLabel:{
            textStyle: {
                color: '#fff'
            }
            }
        },
        visualMap: {
            min: 100,
            max: 1000,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            //bottom: '15%',
            inRange: {
            color: ['rgb(76,175,248)','rgb(25,85,218)']
            },
            textStyle: {
            color: '#fff'
            }
        },
        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: this.punchdata,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    maskimage:any = new Image();
 //maskimage.src = "data:image/png;base64,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"
        
    situation4Option = {
         tooltip: { 
             show: false
        },
        series: [{
            type: 'wordCloud',
            gridSize: 1,
            sizeRange: [14, 30],
            rotationRange: [90,-90],
            maskImage: this.maskimage,
            // grid:{
            //   x:'10%',
            //   y:45,
            //   top:'50%',
            //   left:'10%',
            //   right:'0',
            // },
            textStyle: {
            normal: {
            color: function() {
                return 'rgb(' +
                Math.round(Math.random() * 255) +
                ', ' + Math.round(Math.random() * 255) +
                ', ' + Math.round(Math.random() * 255) + ')'
                }
            }
            },
            //left: 'center',
            //top: '150px',
            width: '100%',
            height: '100%',
            // right: '100px',
            // bottom: null,
            data: [
                        
                        {
                            "name": "遵守八项规定",
                            "value": 200
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 80
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 78
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 200
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 123
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 40
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 10
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 40
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 30
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 80
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 10
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 20
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 10
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 70
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 30
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 50
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 10
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 70
                        },
                        {
                            "name": "发党言论",
                            "value": 60
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 200
                        },
                        {
                            "name": "举报",
                            "value": 20
                        },
                        {
                            "name": "组织建设",
                            "value": 80
                        },{
                            "name": "贪污",
                            "value": 9
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                        {
                            "name": "遵守八项规定",
                            "value": 483
                        },
                        {
                            "name": "发党言论",
                            "value": 128
                        },
                        {
                            "name": "反对建立组织建设",
                            "value": 105
                        },
                        {
                            "name": "举报",
                            "value": 483
                        },
                        {
                            "name": "组织建设",
                            "value": 128
                        },{
                            "name": "贪污",
                            "value": 128
                        },
                    ],
        }]
}
         //字符云字体颜色
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
    switchHomelevel2(item:string){
        this.switchHomelevel1()
         this.switchDesktopGrade2 = item||""


        switch (this.switchDesktopGrade2) {
            case 'DXFXT':
                     this.maskimage.src = "data:image/png;base64,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"
                     this.getTimeline()
                    setTimeout(() => {
                        let situation1:any = echarts.init(document.getElementById('situation1'))
                        let situation2:any = echarts.init(document.getElementById('situation2'))
                        let situation3:any = echarts.init(document.getElementById('situation3'))
                        let situation4:any = echarts.init(document.getElementById('situation4'))
                        let situation5:any = echarts.init(document.getElementById('situation5'))
                        situation1.setOption(this.situation1Option, true);
                        situation2.setOption(this.situation2Option, true);
                        situation3.setOption(this.situation3Option, true);
                        situation4.setOption(this.situation4Option, true);
                        situation5.setOption(this.situation5Option, true);
                    }, 20);
                break;
        
            default:
                break;
        }
       
    }
        
    switchHomelevel1(item1:string){
        this.switchDesktopGrade1 = item1
        switch (this.switchDesktopGrade1) {
            case 'DLFX':
                    this.switchDesktopGrade2 = 'DLFXT'
                break;
            case 'DXFX':
                    this.switchDesktopGrade2 = 'DXFXR'
                break;
            case 'FXBG':
                    this.switchDesktopGrade2 = 'FXBGW'
                break;
            default:
                break;
        }
        switch (this.switchDesktopGrade2) {
            case 'DXFXR':
                    setTimeout(() => {
                        let event:any = echarts.init(document.getElementById('event'))
                        let personnel:any = echarts.init(document.getElementById('personnel'))
                        event.setOption(this.eventOption, true);
                        personnel.setOption(this.personnelOption, true);


                    }, 50);
                break;
            default:
                  
                break;
        }
       
        this.$forceUpdate()
    }
    examineAllRelationship() {
        this.examineRelationship  = true
        setTimeout(()=>{
            let relationship:any = echarts.init(document.getElementById('relationship'))
            relationship.setOption(this.relationshipOption, true);
        },50)

    }
    private switchMenu() {
        this.showMenu = !this.showMenu
    }
    private changeDesktop() {
        console.log(this.switchDesktopGrade1)
    }
    private goMenu() {
       this.$router.push('/')
    }

    private changeIframeBox() {
      const mentalProblems: any = document.getElementById('mentalProblems')
      mentalProblems.style.width = (Number(document.documentElement.clientWidth)) + 'px'
      mentalProblems.style.height = (Number(document.documentElement.clientHeight)-200) + 'px'
      const report: any = document.getElementById('report')
      report.style.width = (Number(document.documentElement.clientWidth)) + 'px'
      report.style.height = (Number(document.documentElement.clientHeight)-200) + 'px'
    }
    // 时间轴
    private getTimeline() {
        $('document').ready(function(e){
            $('.cntl').cntl({
                revealbefore: 300,
                anim_class: 'cntl-animate',
                onreveal: function(e){
                    console.log('11',e);
                }
            });
        });

        // document.getElementById('timeLineContent').style.maxHeight = (Number(document.documentElement.clientHeight)-360) + 'px'
    }

    private messages:string[] = [
        'XXX在京第一组全国人大代表来浙视察',
        '习近平在京津冀考察 足迹 鲜明新特点',
        '天宫二号搭载“天极”望远镜实现预定目标',
    ]
}
</script>
<style scoped>
.sttu_title{
    margin-top: -28px;
    font-size: 17px;
    color: #28EED6;
    height: 20%;
    position: absolute;
    margin-left: 27px;
}
.sttu_title1{
  margin-top: 4px;
  margin-left: 21px;
}
.desktop {
  height: 100%;
  position: relative;
  width: 100%;
  background-color: #f5f7f9;
  background-image: url('../../assets/img/desktop.png');
  background-size:  100%;
  background-repeat: repeat-y;
  overflow:auto;
}
.TcontentBg{
    background: rgba(16, 29, 78, 0.2);
}
    .background-logo{
        width: 45%;
        height: 135px;
        background-size: 100% 100%;
        background-image: url('../../assets/img/logo.png');
    }
    .blockBg{
        background: RGB(68, 68, 68,0.4);
        border-radius: 20px!important;
        margin: 0px 10px
    }
  .header{
     /* position: fixed;
     width: 99%;
     height: 140px;
     background-repeat: no-repeat;
     -moz-background-size: 100% 100%;
     background-size: 100% 100%;
     z-index: 999; */
     height: 64px;
     margin-top: -10px;
     background: linear-gradient(to right, RGB(110, 8, 7) ,RGB(127, 74, 182),RGB(4, 13, 68));
     border-bottom:5px solid;
     border-image:linear-gradient(to right,RGB(241, 227, 33, 1) ,RGB(233, 168, 0, 0) ) 30 30; 
  }
  .header img{
        height: 165px;
        position:absolute;
        width: 16%;
        left: 1%;
  }
  .headPortrait{
    float: right;
    width: 40px;
    height:40px;
    margin-top: 17px;
    background-image: url('../../assets/img/dicision_user.png');
    background-size:cover;
    border-radius: 50%;
}  
.title_font{
  font-size: 20px;
}
  .menuButton{
    color: white;
    font-size: 33px!important;
    position: relative;
   
  }
  .head_tab{
    background: fixed;
    display: table;
    text-align: center;
    margin-top: 2%!important;
    margin: auto;
    }

.el-menu.el-menu--horizontal{
    border-bottom:none!important;
}
.el-menu--horizontal>.el-menu-item.is-active{
    border-bottom: 2px solid white!important;
    color: white!important;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background: none!important;
    color:white!important
}
.el-menu--horizontal>.el-menu-item{
    height:50px!important;
    line-height: 50px!important;
    font-size: 18px!important;
}
  .updateTime{
    color: white;
    position: absolute;
    margin-top: -27px;
    margin-left: 18px;
    font-size: 19px;
  }
  .switchButtonlevel2{
    border-radius: 23px;
    width: 93px;
    color: #28EED6;
  }
  .timeL{
    height: 200px;
    background-repeat: no-repeat;
    margin-left: 54px;
    margin-top: -10px;
    background-image: url('../../assets/img/timeL1.png');
  }
  .timeR{

   height: 200px;
    background-repeat: no-repeat;
    margin-left: 252px;
    margin-top: -10px;
    background-image: url('../../assets/img/timeR1.png');
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

  .whead{
    position: absolute;
    width: 100%;
    height: 130px;
    background-image: url('../../assets/img/Whead.png');
    background-repeat: no-repeat;
    background-size: 100% 21%;
    margin-top: -35px;
  }
  .chinaMap{
    background-image:url('../../assets/img/chinaMap.png');
    margin-top: 117px;
    height: 600px;
    background-repeat: no-repeat;
    margin-left: 21px;
    background-position: center;
  }
  .thead{
    position: absolute;
    width: 18.5%;
    height: 130px;
    background-image: url('../../assets/img/Thead.png');
    background-repeat: no-repeat;
    background-size: 60% 28%;
    margin-top: -31px;
    margin-left: 11%;
    z-index: 100;
  }
  .thead2{
    position: absolute;
    width: 31.5%;
    height: 130px;
     background-image: url('../../assets/img/Thead2.png');
    background-repeat: no-repeat;
    background-size: 60% 28%;
    margin-top: -30px;
    margin-left: 22%;
    z-index: 100;
  }
  .DXhead{
    background: rgb(19, 100, 251,0.1);
    height: 19px;
    text-align: left;
    padding: 18px;
  }
  .DborderTop{
    position: absolute;
    width: 101%;
    height: 10%;
    background-image: url('../../assets/img/Dhead.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: -65px;
    margin-left: -3px;
  }
  
  .headTitle{
    text-align: center;
    position: absolute;
    margin-top: -28px;
    margin-left: 14.5%;
    z-index: 101;
    font-size: 22px;
  }
  .headTitleDLW{
    text-align: center;
    position: absolute;
    margin-top: -51px;
    margin-left: 0.5%;
    z-index: 101;
    font-size: 22px;
  }
  .headTitle2{
    text-align: center;
    position: absolute;
    margin-top: -28px;
    margin-left: 29.5%;
    z-index: 101;
    font-size: 22px;
  }
  .headTitle1{
    text-align: left;
    padding: 12px 12px 3px 12px;
    opacity: .7;
  }
  .headContent1{
    text-align: left;
    padding: 0 0 8px 45px;
  }
  .text-left{
    text-align: left;
    padding-left: 7%!important;
  }
  .text-left3{
    text-align: left;
    padding-left: 3%!important;
  }
  .text-left4{
    text-align: left;
    padding-left: 4%!important;
  }
  .iconfontRight{
      margin-right:10px;
  }
  .isdot{
    height: 12px;
    width: 12px;
    background: red;
    display: block;
    border-radius: 20px;
    margin-top: 10px;
    position: absolute;
    margin-left: -26px;
  }
  .line{
    height: 3px;
    background: linear-gradient(to right, #6843B8, #1E87BA);
    margin: 40px 50px;
  }
  .line2{
    height: 3px;
    background: linear-gradient(to right, #6843B8, #1E87BA);
    margin: 20px 50px;
  }
  .line3{
    height: 3px;
    background: linear-gradient(to right, #6843B8, #1E87BA);
    margin: 55px 50px;
  }
  .transition-box {
    margin-bottom: 1px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple1 {
    background: red;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content0 {
    border-radius: 4px;
    min-height: 34px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 566px;
  }
  .grid-content1 {
    border-radius: 4px;
    min-height: 344px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .border-W{
    border: 1px solid #2AB0D9;
    background-color: RGB(7,62,11,.05);
  }
  .border-T{
    border: 2px solid rgb(41, 162, 221);
  }
  .border-dx{
    border: 1px solid #1256A4;
    border-top: none;
  }

  /* 重写样式 */
  .el-row {
    margin: 10px
  }
  .map_contant{
    width:100%;
    height:600px;
    background-image: url('../../assets/img/map_line.jpg');
    background-size:  100%;
    background-repeat: no-repeat
  }

.example1 {
    position: relative;
    width: 50px;
    height: 50px;
    left: 80%;
    top: 20%;
}
.example1:after {
  content:'北部战区';
  width: 100px;
  position: absolute;
  height: 30px;
  color: white;
  top: 0;
  left: 20px;
  font-size: 20px;
}
.example2 {
    position: relative;
    width: 50px;
    height: 50px;
    left: 20%;
    top: 30%;
}
.example2:after {
  content:'西部战区';
  width: 100px;
  position: absolute;
  height: 30px;
  color: white;
  top: 0;
  left: 5px;
  font-size: 20px;
}
.example3 {
    position: relative;
    width: 50px;
    height: 50px;
    left: 65%;
    top: 25%;
}
.example3:after {
  content:'中部战区';
  width: 100px;
  position: absolute;
  height: 30px;
  color: white;
  top: 0;
  left: 5px;
  font-size: 20px;
}
.example4 {
    position: relative;
    width: 50px;
    height: 50px;
    left: 70%;
    top: 50%;
}
.example4:after {
  content:'东部战区';
  width: 100px;
  position: absolute;
  height: 30px;
  color: white;
  top: 0;
  left: 5px;
  font-size: 20px;
}
.example5 {
    position: relative;
    width: 50px;
    height: 50px;
    left: 45%;
    top: 35%;
}
.example5:after {
  content:'南部战区';
  width: 100px;
  position: absolute;
  height: 30px;
  color: white;
  top: 0;
  left: 5px;
  font-size: 20px;
}
.dot:before{
    content:' ';
    position: absolute;
    z-index:2;
    left: -10px;
    top: -10px;
    width:20px;
    height:20px;
    background-color: #ff4200;
    border-radius: 50%;
}


</style>
<style>
.example6 {
    position: relative;
    width: 50px;
    height: 50px;
    left: 15%;
    top: 12%;
}
.dot1:before{
    content:' ';
    position: absolute;
    z-index:2;
    left: -10px;
    top: -10px;
    width:10px;
    height:10px;
    background-color: #ff4200;
    border-radius: 50%;
}
.example7 {
    position: relative;
    width: 50px;
    height: 50px;
    left: 35%;
    top: 12%;
}
.example8 {
    position: relative;
    width: 50px;
    height: 50px;
    left: 45%;
}
.example9 {
    position: relative;
    width: 50px;
    height: 50px;
    left: 25%;
    top: -25%;
}
.example10 {
    position: relative;
    width: 50px;
    height: 50px;
    left: 55%;
    top: -25%;
}

.example11 {
    position: relative;
    width: 50px;
    height: 50px;
    left: 50%;
    top: -5%;
}
.example1 div {
    position:absolute;
    top:50%;
    left:50%;
    background:#ff4200;
    width:90px;
    height:90px;
    margin-left:-45px;
    margin-top:-45px;
    opacity:0;
    border-radius:90px;
    -webkit-animation-duration:2s;
    -webkit-animation-timing-function:linear;
    -webkit-animation-iteration-count:infinite;
    -ms-animation-duration:2s;
    -ms-animation-timing-function:linear;
    -ms-animation-iteration-count:infinite;
    -moz-animation-duration:2s;
    -moz-animation-timing-function:linear;
    -moz-animation-iteration-count:infinite;
    -o-animation-duration:2s;
    -o-animation-timing-function:linear;
    -o-animation-iteration-count:infinite;
    animation-duration:2s;
    animation-timing-function:linear;
    animation-iteration-count:infinite;
}
.example1 div.c1 {
    width:20px;
    height:20px;
    margin-left:-10px;
    margin-top:-10px;
    opacity:1;
    border-radius:90px
}
.example1 div.c2 {
    -webkit-animation-name:c2;
    -webkit-animation-delay:1s;
    -ms-animation-name:c2;
    -ms-animation-delay:1s;
    -moz-animation-name:c2;
    -moz-animation-delay:1s;
    -o-animation-name:c2;
    -o-animation-delay:1s;
    /*! animation-name:c2; *//*! animation-delay:.6s */
}
.example1 div.c3 {
    -webkit-animation-name:c2;
    -webkit-animation-delay:2s;
    -ms-animation-name:c2;
    -ms-animation-delay:2s;
    -moz-animation-name:c2;
    -moz-animation-delay:2s;
    -o-animation-name:c2;
    -o-animation-delay:2s;
    /*! animation-name:c2; *//*! animation-delay:1.2s */
}

.example2 div {
    position:absolute;
    background:#ff4200;
    width:90px;
    height:90px;
    margin-left:-45px;
    margin-top:-45px;
    opacity:0;
    border-radius:90px;
    -webkit-animation-duration:1.4s;
    -webkit-animation-timing-function:linear;
    -webkit-animation-iteration-count:infinite;
    -ms-animation-duration:1.4s;
    -ms-animation-timing-function:linear;
    -ms-animation-iteration-count:infinite;
    -moz-animation-duration:1.4s;
    -moz-animation-timing-function:linear;
    -moz-animation-iteration-count:infinite;
    -o-animation-duration:1.4s;
    -o-animation-timing-function:linear;
    -o-animation-iteration-count:infinite;
    animation-duration:1.4s;
    animation-timing-function:linear;
    animation-iteration-count:infinite;
}
.example2 div.c1 {
    width:20px;
    height:20px;
    margin-left:-10px;
    margin-top:-10px;
    opacity:1;
    border-radius:90px
}
.example2 div.c2 {
    -webkit-animation-name:c2;
    -webkit-animation-delay:.7s;
    -ms-animation-name:c2;
    -ms-animation-delay:.7s;
    -moz-animation-name:c2;
    -moz-animation-delay:.7s;
    -o-animation-name:c2;
    -o-animation-delay:.7s;
    /*! animation-name:c2; *//*! animation-delay:.6s */
}
.example2 div.c3 {
    -webkit-animation-name:c2;
    -webkit-animation-delay:1.4s;
    -ms-animation-name:c2;
    -ms-animation-delay:1.4s;
    -moz-animation-name:c2;
    -moz-animation-delay:1.4s;
    -o-animation-name:c2;
    -o-animation-delay:1.4s;
    /*! animation-name:c2; *//*! animation-delay:1.2s */
}

.example3 div {
    position:absolute;
    background:#ff4200;
    width:90px;
    height:90px;
    margin-left:-45px;
    margin-top:-45px;
    opacity:0;
    border-radius:90px;
    -webkit-animation-duration:1.8s;
    -webkit-animation-timing-function:linear;
    -webkit-animation-iteration-count:infinite;
    -ms-animation-duration:1.8s;
    -ms-animation-timing-function:linear;
    -ms-animation-iteration-count:infinite;
    -moz-animation-duration:1.8s;
    -moz-animation-timing-function:linear;
    -moz-animation-iteration-count:infinite;
    -o-animation-duration:1.8s;
    -o-animation-timing-function:linear;
    -o-animation-iteration-count:infinite;
    animation-duration:1.8s;
    animation-timing-function:linear;
    animation-iteration-count:infinite;
}
.example3 div.c1 {
    width:20px;
    height:20px;
    margin-left:-10px;
    margin-top:-10px;
    opacity:1;
    border-radius:90px
}
.example3 div.c2 {
    -webkit-animation-name:c2;
    -webkit-animation-delay:.9s;
    -ms-animation-name:c2;
    -ms-animation-delay:.9s;
    -moz-animation-name:c2;
    -moz-animation-delay:.9s;
    -o-animation-name:c2;
    -o-animation-delay:.9s;
    /*! animation-name:c2; *//*! animation-delay:.6s */
}
.example3 div.c3 {
    -webkit-animation-name:c2;
    -webkit-animation-delay:1.8s;
    -ms-animation-name:c2;
    -ms-animation-delay:1.8s;
    -moz-animation-name:c2;
    -moz-animation-delay:1.8s;
    -o-animation-name:c2;
    -o-animation-delay:1.8s;
    /*! animation-name:c2; *//*! animation-delay:1.2s */
}

.example4 div {
    position:absolute;
    background:#ff4200;
    width:90px;
    height:90px;
    margin-left:-45px;
    margin-top:-45px;
    opacity:0;
    border-radius:90px;
    -webkit-animation-duration:.8s;
    -webkit-animation-timing-function:linear;
    -webkit-animation-iteration-count:infinite;
    -ms-animation-duration:1.2s;
    -ms-animation-timing-function:linear;
    -ms-animation-iteration-count:infinite;
    -moz-animation-duration:1.2s;
    -moz-animation-timing-function:linear;
    -moz-animation-iteration-count:infinite;
    -o-animation-duration:1.2s;
    -o-animation-timing-function:linear;
    -o-animation-iteration-count:infinite;
    animation-duration:.8s;
    animation-timing-function:linear;
    animation-iteration-count:infinite;
}
.example4 div.c1 {
    width:20px;
    height:20px;
    margin-left:-10px;
    margin-top:-10px;
    opacity:1;
    border-radius:90px
}
.example4 div.c2 {
    -webkit-animation-name:c2;
    -webkit-animation-delay:.4s;
    -ms-animation-name:c2;
    -ms-animation-delay:.4s;
    -moz-animation-name:c2;
    -moz-animation-delay:.4s;
    -o-animation-name:c2;
    -o-animation-delay:.4s;
    /*! animation-name:c2; *//*! animation-delay:.6s */
}
.example4 div.c3 {
    -webkit-animation-name:c2;
    -webkit-animation-delay:.8s;
    -ms-animation-name:c2;
    -ms-animation-delay:0.8s;
    -moz-animation-name:c2;
    -moz-animation-delay:.8s;
    -o-animation-name:c2;
    -o-animation-delay:.8s;
    /*! animation-name:c2; *//*! animation-delay:1.2s */
}

.example5 div {
    position:absolute;
    background:#ff4200;
    width:90px;
    height:90px;
    margin-left:-45px;
    margin-top:-45px;
    opacity:0;
    border-radius:90px;
    -webkit-animation-duration:1.2s;
    -webkit-animation-timing-function:linear;
    -webkit-animation-iteration-count:infinite;
    -ms-animation-duration:1.2s;
    -ms-animation-timing-function:linear;
    -ms-animation-iteration-count:infinite;
    -moz-animation-duration:1.2s;
    -moz-animation-timing-function:linear;
    -moz-animation-iteration-count:infinite;
    -o-animation-duration:1.2s;
    -o-animation-timing-function:linear;
    -o-animation-iteration-count:infinite;
    animation-duration:1.2s;
    animation-timing-function:linear;
    animation-iteration-count:infinite;
}
.example5 div.c1 {
    width:20px;
    height:20px;
    margin-left:-10px;
    margin-top:-10px;
    opacity:1;
    border-radius:90px
}
.example5 div.c2 {
    -webkit-animation-name:c2;
    -webkit-animation-delay:.6s;
    -ms-animation-name:c2;
    -ms-animation-delay:.6s;
    -moz-animation-name:c2;
    -moz-animation-delay:.6s;
    -o-animation-name:c2;
    -o-animation-delay:.6s;
    /*! animation-name:c2; *//*! animation-delay:.6s */
}
.example5 div.c3 {
    -webkit-animation-name:c2;
    -webkit-animation-delay:1.2s;
    -ms-animation-name:c2;
    -ms-animation-delay:1.2s;
    -moz-animation-name:c2;
    -moz-animation-delay:1.2s;
    -o-animation-name:c2;
    -o-animation-delay:1.2s;
    /*! animation-name:c2; *//*! animation-delay:1.2s */
}
@-webkit-keyframes c2 {
    0% {
        -webkit-transform:scale(.222);
        -ms-transform:scale(.222);
        -moz-transform:scale(.222);
        -o-transform:scale(.222);
        transform:scale(.222);
        opacity:1
    }
    50% {
        -webkit-transform:scale(.622);
        -ms-transform:scale(.622);
        -moz-transform:scale(.622);
        -o-transform:scale(.622);
        transform:scale(.622);
        opacity:.4
    }
    98% {
        -webkit-transform:scale(1);
        -ms-transform:scale(1);
        -moz-transform:scale(1);
        -o-transform:scale(1);
        transform:scale(1);
        opacity:.2
    }
    100% {
        opacity:0
    }
}
@keyframes c2 {
    0% {
        -webkit-transform:scale(.222);
        -ms-transform:scale(.222);
        -moz-transform:scale(.222);
        -o-transform:scale(.222);
        transform:scale(.222);
        opacity:1
    }
    50% {
        -webkit-transform:scale(.622);
        -ms-transform:scale(.622);
        -moz-transform:scale(.622);
        -o-transform:scale(.622);
        transform:scale(.622);
        opacity:.4
    }
    98% {
        -webkit-transform:scale(1);
        -ms-transform:scale(1);
        -moz-transform:scale(1);
        -o-transform:scale(1);
        transform:scale(1);
        opacity:.2
    }
    100% {
        opacity:0
    }
}


  /* 重写时间轴长度 */
  .time_line {
    /* margin-top: 9%; */
    padding-top: 3%;
    padding-left: 10px;
    padding-right: 10px;
    overflow: scroll;
  }
  .time_line::-webkit-scrollbar {
        display: none;
    }
  .time_line .cntl-bar {
    background-color: #007AFF;
    width: 8px;
  }
  .time_line .cntl-content {
    border-color: #007AFF;
    background: transparent;
  }
  .time_line .cntl-content, .time_line .cntl-image {
    font-size: 14px;
  }
  .time_line .cntl-icon {
    width: 48px;
    height: 48px;
    border: 4px solid #007AFF;
    background-color: #052F70;
  }
  .time_line .cntl-icon > span {
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background-color: #007AFF;
    display: block;
    margin: auto;
    margin-top: 20%;
  }
  .op_07{
    opacity: 0.7;
  }

    .el-carousel__arrow{
        width:100px!important;
        height:100px!important;
        font-size:50px!important;
        background-color: rgba(0, 0, 0, 0.3)!important;
    }
    .dxfx_icon_down{
        height:80px;
    }
    .dxfx_icon_up{
        height:80px;
    }
    .op_7{
        opacity: .7;
    }
</style>

