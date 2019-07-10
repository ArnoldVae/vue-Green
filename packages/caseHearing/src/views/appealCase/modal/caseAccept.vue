<template>
<!-- 案件登记 -->
  <div class="dialog">
    
      <el-main style="width:80%;margin: 0 auto;">
            <el-collapse v-model="activeNames">
                <el-collapse-item  id="menu1"  name="1" >
                	<template slot="title">
                        <i class="header-icon el-icon-info"></i>受理审核意见
                      
                    </template>
                    <div class="form-content">
                        <el-form label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                
                              <el-col :span="6">
                                    <el-form-item label="受理人:" prop="name">
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                            
                                <el-col :span="6">
                                    <el-form-item label="受理时间:" prop="name">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>

                                </el-row>
                                      <el-row :gutter="20">
                                    <el-col :span="24">
                                        <el-form-item label="受理审核意见:" prop="name">
                                            <el-input type="textarea" :row="3" placeholder="请输入内容">

                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>
            
                 
                   <el-collapse-item  id="menu1"  name="1" >
                	<template slot="title">
                        <i class="header-icon el-icon-info"></i>指定审核人
                    </template>
                    <div class="form-content">
                        <el-form label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                
                               <el-col :span="6">
                                        <el-form-item label="主审核人员:">
                                            <el-select class="form_select" v-model="form.region" placeholder="请选择">
                                                <el-option v-for="(option,index) in nativeList" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                 </el-col>
                                <el-col :span="6">
                                    <el-form-item label="辅助审核人员:" prop="name">
                                        <el-input v-model="form.name"> </el-input> 
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <div class="addAider"><div style="font-size: 14px; font-weight: bold;color: #0664a9">+添加辅助审核人员</div></div>
                                </el-col>
                             </el-row>
                             <el-row :gutter="20">
                                   <el-col :span="6">
                                        <el-form-item label="案件办理期限(天数):" prop="name">
                                            <el-input v-model="form.name"> </el-input> 
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="红色预警期限(天数):" prop="name">
                                            <el-input v-model="form.name"> </el-input> 
                                        </el-form-item>
                                    </el-col>
                                     <el-col :span="6">
                                        <el-form-item label="黄色预警期限(天数):" prop="name">
                                            <el-input v-model="form.name"> </el-input> 
                                        </el-form-item>
                                    </el-col>
                                     <el-col :span="6">
                                        <el-form-item label="蓝色预警期限(天数):" prop="name">
                                            <el-input v-model="form.name"> </el-input> 
                                        </el-form-item>
                                    </el-col>
                                  
                            </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>         
            </el-collapse>
         <div  class="margin_top_4 margin_left_0" style="text-align:center;">
                <el-button type="primary" >提交</el-button>
                <el-button type="success" >保存</el-button>
                <el-button >关闭</el-button>
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
         nativeList: [{code: "01", value: "汉族"}, {code: "01", value: "蒙古族"}, {
                    code: "01",
                    value: "回族"
                }, {code: "01", value: "维吾尔族"}],

        disciplineList:[{code:"01", value:"违反政治纪律行为"}, {code:"01", value:"违反组织纪律行为"}, {code:"01", value:"违反廉洁纪律行为"},{code:"01", value:"违反群众纪律行为"}],
        disciplineObjList:[{code:"01", value:"违反政治纪律行为",test:""}],
        activeNames:['1','2','3','4','5','6','7','8'],
        
         form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            type: [],
            resource: '',
            desc: ''
        },
        rules: {
            name: [
                { required: true, message: '请输入', trigger: 'blur' }
            ],
        }
    };
  },

    created() {},
    mounted(){},
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
        min-height:70px!important;
    }
  }
  .tab-content{
        border: 1px solid #dee1e7;
        padding: 26px;
        border-top: navajowhite;
        border-top-style: none;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        text-align: left
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
 .el-collapse-item{
        /deep/.el-collapse-item__header{
            padding-left: 2%;
            font-size: 14px;
            border: 1px solid #dee1e7;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            color: #2f76dd;
        }
    }
   .el-tabs{
   	.el-select .el-input input{
      width: 300px;
  }
  .el-tabs__active-bar.is-top > div{
  	background: palevioletred;
  }
   .el-tabs__item.is-active {
      color: #ffffff;
      background: #1c51ab!important;
      text-align: center;
    }
    .el-tabs__nav-wrap::after{
      background-color: #1c51ab;
    }
    .el-tabs__nav /deep/ .el-tabs__active-bar{
      background-color: #1c51ab!important;
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
   } 
   .addAider{
        margin-top: 8px;
        width: 300px;
        margin-left: 4px;
        border: 3px dashed #d7d7d7;
        height: 100px;
        line-height: 50px;
        border-radius: 10px;
        background-color: #e9fcff;
        cursor: pointer;
        div{
                width: 140px;
                height: 40px;
                margin-left: 81px;
                margin-top: 20px;
        }
   }
</style>