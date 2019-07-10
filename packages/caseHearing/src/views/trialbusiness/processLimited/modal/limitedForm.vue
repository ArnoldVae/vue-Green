<template>
<!-- 案件登记 -->
  <div class="dialog">
    
      <div class="page">
         <div class="container">
           
                  
                        <el-form  class="form-label-top" :model="form" :rules="rules">
                            <el-row :gutter="20">
                                
                              <el-col :span="12">
                                <el-form-item label="时限类型:" prop="name">
                                <el-select v-model="form.limitedType" clearable placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    ></el-option>
                                </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="是否有效:" prop="name">
                                <el-radio-group v-model="form.effect">
                                    <el-radio label="1">是</el-radio>
                                    <el-radio label="0">否</el-radio>
                                </el-radio-group>
                                </el-form-item>
                            </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <el-form-item label="办理期限:" prop="name">
                                        <el-input v-model="form.time"> </el-input> 
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                        <el-form-item label="红色预警期限(天数):" prop="name">
                                            <el-input v-model="form.red"> </el-input> 
                                        </el-form-item>
                                 </el-col>

                             </el-row>
                             <el-row :gutter="20">
                                     <el-col :span="12">
                                        <el-form-item label="黄色预警期限(天数):" prop="name">
                                            <el-input v-model="form.yellow" > </el-input> 
                                        </el-form-item>
                                    </el-col>
                                     <el-col :span="12">
                                        <el-form-item label="蓝色预警期限(天数):" prop="name">
                                            <el-input v-model="form.blue" > </el-input> 
                                        </el-form-item>
                                    </el-col>
                            
                                    
                            </el-row>
                        </el-form>
                    
              
         </div>
           <div   style="text-align:center;">
                    <el-button type="primary" size="small" @click="submit">提交</el-button>
                    <el-button type="primary" plain size="small">保存</el-button>
                    <el-button type="warning" plain size="small">取消</el-button>
                </div>
      </div>
 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
  props: {
      // submit: {
      //     type: Function,
      //     default: () => {
              
      //     },
      // },
    },
  data() {
    return {
     
        disciplineList:[{code:"01", value:"违反政治纪律行为"}, {code:"01", value:"违反组织纪律行为"}, {code:"01", value:"违反廉洁纪律行为"},{code:"01", value:"违反群众纪律行为"}],
        disciplineObjList:[{code:"01", value:"违反政治纪律行为",test:""}],
        activeNames:['1','2','3','4','5','6','7','8'],
        
         form: {
            limitedType: '',
            time: '',
            red: '',
            yellow: '',
            blue: '',
            effect: ''
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
    options = [
    {
      value: "1",
      label: "环节办理期限"
    },
    {
      value: "2",
      label: "案件办理期限"
    },
    {
      value: "3",
      label: "行政处分解除期限"
    },
    {
      value: "4",
      label: "行政处分解除期限"
    }
  ];
  value1 = "";
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
    submit(){
      this.$emit('qqq(123)')
    }
   
  
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
 
 .page {
  background: #f4f4f4;
  position: absolute;
  left: 0;
  right: 0;
  .title {
    font-size: 14px;
    color: #2f76dd;
  }
  .container {
    margin: 16px;
    padding: 8px 32px 16px 32px;
    background: #fff;
  }
  /deep/.el-collapse-item__wrap {
    border-bottom: none;
  }
  /deep/.el-collapse-item__header {
    border-bottom: none;
  }
}
  
</style>