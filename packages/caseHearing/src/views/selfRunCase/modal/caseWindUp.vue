<template>
<!-- 结案登记 -->
  <div class="dialog">
      <el-main style="width:80%;margin: 0 auto;">
            <el-collapse v-model="activeNames">
                <el-collapse-item  id="menu1"  name="1" >
                	<template slot="title">
                        <i class="header-icon el-icon-info"></i>结案登记信息
                    </template>
                    <div class="form-content">
                        <el-form label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="审理时间:" prop="dataTime">
                                        <el-date-picker type="date"  placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="结案时间:" prop="dataTime">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="归档时间:" prop="dataTime">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date3" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="违纪数额（万元）:" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="挽回经济损失（万元）:" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row style="margin: 10px auto;">
                               <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane label="呈报单位意见" name="first">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-tab-pane>
                                <el-tab-pane label="本级领导意见" name="second">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-tab-pane>
                                <el-tab-pane label="上级机关批准意见" name="third">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-tab-pane>
                                <el-tab-pane label="处分决定执行情况" name="fourth">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-tab-pane>
                                <el-tab-pane label="涉案款物处理情况" name="fifth">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-tab-pane>
                                <el-tab-pane label="主要错误事实和结论" name="sixth">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-tab-pane>
                                <el-tab-pane label="备注" name="seventh">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-tab-pane>
                              </el-tabs> 
                            </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <div  class="margin_top_4 margin_left_0" style="text-align: center;margin-top: 0%;">
                <el-button type="primary" >提交</el-button>
                <el-button type="primary" plain>保存</el-button>
                <el-button type="warning" plain>关闭</el-button>
            </div>
      </el-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
  data() {
    return {
      activeName: 'first',
      activeNames: ['1'],
      steps:[
        {id:'step01',active:true,name:'案件审查/调查基本信息'},
        {id:'step02',active:false,name:'被审查调查人员'},
        {id:'step03',active:false,name:'违纪行为'},
        {id:'step04',active:false,name:'案件审查/调查基本情况'},
        {id:'step05',active:false,name:'涉案款物基本情况'},
        {id:'step06',active:false,name:'潜逃终止情况'},
        {id:'step07',active:false,name:'案件分发信息'},
        {id:'step08',active:false,name:'上传材料信息'},
      ],
      formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
         form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            date3: '',
            type: [],
            resource: '',
            desc: ''
        },
        rules: {
            name: [
                { required: true, message: '请输入', trigger: 'blur' }
            ],
            dataTime:[
                {required: true, message: '请选择时间范围', trigger: 'change' }
            ],
        }
    };
  },

    created() {},
    mounted(){
//给页面绑定滑轮滚动事件
      
    //   window.onmousewheel = window.onmousewheel = scrollFunc;
  },
  methods: {}
})
export default class caseSupplement extends Vue {
    // 附件列表
    visaForm :object = {
        registerFiles : [], // 移送审理案件材料交接登记表
        batchFiles : [] // 案件移送审理呈批表
    }
    subMenuItem:Array = [
            {
                title:"案件审查/调查基本信息",
                active:true,
                id:'menu1',
                eleBtnId:"eleBtnId1",
                eleId:'menuName1'
            },
            {
                title:"被调查人员",
                active:false,
                id:'menu2',
                eleBtnId:"eleBtnId2",
                eleId:'menuName2'
            },
            {
                title:"违纪行为",
                active:false,
                id:'menu3',
                eleBtnId:"eleBtnId3",
                eleId:'menuName3'
            },
            {
                title:"案件审核/调查基本情况",
                active:false,
                id:'menu4',
                eleBtnId:"eleBtnId4",
                eleId:'menuName4'
            },
            {
                title:"涉案款物基本情况",
                active:false,
                id:'menu5',
                eleBtnId:"eleBtnId5",
                eleId:'menuName5'
            }, {
                title:"潜逃终止情况",
                active:false,
                id:'menu6',
                eleBtnId:"eleBtnId6",
                eleId:'menuName6'
            },
            {
                title:"案件分发情况",
                active:false,
                eleBtnId:"eleBtnId7",
                id:'menu7',
                eleId:'menuName7'
            },
            {
                title:"上传材料信息",
                active:false,
                eleBtnId:"eleBtnId8",
                id:'menu8',
                eleId:'menuName8'
            }
        ]
    addDisciplineObjList(){
        // this.disciplineObjList.push({
        //     test:""
        // })
    }
    menuGo(item) {
          item.active=true;
          for ( let i=1;i<9;i++){
              document.getElementById('menuName'+ i).setAttribute('class','')
              document.getElementById('eleBtnId'+ i).setAttribute('class','el-button tab-btn el-button--default el-button--small is-circle')
          }
          this.subMenuItem.forEach(function (v) {
              if(v.id===item.id){
                  v.active=true

              }else {
                  v.active=false
              }

          })
          document.getElementById(item.id).scrollIntoView();
    }
      
    
    
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
  .el-textarea{
    /deep/ textarea{
        min-height: 330px!important;
    }
  }
  .tab-content{
        border: 1px solid #dee1e7;
        padding: 26px;
        border-top: navajowhite;
        border-top-style: none;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        text-align: left;
    }
  .form-content{
        border: 1px solid #dee1e7;
        padding: 26px;
        border-top: navajowhite;
        border-top-style: none;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        text-align: left;
        /deep/.el-form-item__label{
            font-size: 16px;
            font-weight: bold;
        }
    }
  .el-select .el-input input{
      width: 300px;
  }
  .el-collapse-item__header{
        background: #1c51ab;
        color: white;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        padding-left: 2%;

    }
    .el-tabs__item.is-active {
      color: #ffffff;
      background: #1c51ab;
      text-align: center;
    }
    .el-tabs__nav-wrap::after{
      background-color: #1c51ab;
    }
    .el-tabs__active-bar{
      background-color: #1c51ab;
    }
    .el-tabs__item.is-top{
      min-width: 120px;
      text-align: center;
      padding: 0px 10px;
      border-radius: 5px 5px 0px 0px;
    }
    .el-tabs__item.is-top::after{
      content: "";
      width: 1px;
      position: absolute;
      height: 22px;
      background: #999999;
      right: 0px;
      top: 8px;
    }
    .el-tabs__item.is-top:last-child::after{
      width:0px;
    }
    .el-tabs__item.is-active::after{
      width:0px;
    }
</style>