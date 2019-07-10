<template>
<!-- 结案登记-->
<div class="body-container-jwjw">
    <div class="body-container">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item  id="menu1"  name="1" >
                	<template slot="title">
                        <i class="header-icon el-icon-info"></i>结案登记信息
                    </template>
                        <el-form  class="form-label-top" label-position='top' :model="form" :rules="rules">
                            <el-row >
                                <el-col :span="6">
                                    <el-form-item label="受理时间:">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="结案时间:">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date2"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                
                            </el-row>
                            <el-row>
                               <el-tabs v-model="activeName" @tab-click="handleClick" class="jwjw-el-tabs">
                                <el-tab-pane label="呈报单位意见" name="first">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-tab-pane>
                                <el-tab-pane label="本级领导意见" name="second">
                                    <el-input type="textarea" v-model="form.desc1"></el-input>
                                </el-tab-pane>
                                <el-tab-pane label="上级机关批准意见" name="third">
                                    <el-input type="textarea" v-model="form.desc2"></el-input>
                                </el-tab-pane>
                                <el-tab-pane label="处分决定执行情况" name="four">
                                    <el-input type="textarea" v-model="form.desc3"></el-input>
                                </el-tab-pane>
                                <el-tab-pane label="涉案款物处理情况" name="five">
                                    <el-input type="textarea" v-model="form.desc4"></el-input>
                                </el-tab-pane>
                                <el-tab-pane label="主要错误事实和结论" name="six">
                                    <el-input type="textarea" v-model="form.desc5"></el-input>
                                </el-tab-pane>
                                <el-tab-pane label="备注" name="seven">
                                    <el-input type="textarea" v-model="form.desc6"></el-input>
                                </el-tab-pane>
                              </el-tabs> 
                            </el-row>
                        </el-form>
                </el-collapse-item>
                
            </el-collapse>
            <el-collapse v-show="pageFlag=='total'" class="body-footer">
            	<div class="footer-btn-grunp">
	 				<el-button type="primary" >提交归档</el-button>
	                <el-button type="success" >保存</el-button>
	                <el-button >关闭</el-button>
            	</div>
            </el-collapse>
    </div>
    <div slot="footer" v-show="pageFlag!='total'" class="body-footer">
        <div class="footer-btn-grunp">
			<el-button type="primary" >提交归档</el-button>
            <el-button type="success" >保存</el-button>
            <el-button >关闭</el-button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    props:['pageFlag'],
  components: {},
  data() {
    return {
      activeName: 'first',
      activeNames: ['1','2'],
   
      formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
         form: {
            name: '',
            region: '',
            date1: '2019-03-21',
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
      handleChange(){
            this.activeNames=['1','2']

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
    @import "~@/styles/common.scss";
    @import "~@/styles/dialogBox.scss";
    /*控制表单项的公有样式*/
    @import "~@/styles/commonJWJW.scss";
    /deep//deep/.jwjw-el-tabs{
        .el-tabs__header{
            position: relative !important;

        }
    }
 
</style>