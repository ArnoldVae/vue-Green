<template>
<!-- 集体审议弹窗-案件审理 -->
    <div v-bind:class="[pageFlag&&pageFlag=='total'? 'body-container' : 'body-container1']">
            <el-collapse v-model="activeNames" @change="handleChange" class="collapse" ref="csElCoolapase">
                <el-collapse-item  id="menu1"  name="1" >
                	<template slot="title">
                        <i class="header-icon el-icon-info"></i>集体审议
                    </template>
                    <div class="form-content">
                        <el-form  class="form-label-top" label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="审议时间：">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                
                            </el-row>
                            <el-row :gutter="20">
                               <el-tabs v-model="activeName" @tab-click="handleClick">
	                                <el-tab-pane label="主审人员意见" name="first">
                                        <el-form-item>
	                                    <el-input type="textarea" :autosize="{ minRows: 4}" v-model="form.desc"></el-input>
                                        </el-form-item>
	                                </el-tab-pane>
	                                <el-tab-pane label="其他参会人员意见" name="second">
                                        <el-form-item>
	                                    <el-input type="textarea" :autosize="{ minRows: 4}" v-model="form.desc1"></el-input>
                                        </el-form-item>
	                                </el-tab-pane>
	                                <el-tab-pane label="最终审议意见" name="third">
                                        <el-form-item>
	                                    <el-input type="textarea" :autosize="{ minRows: 4}" v-model="form.desc2"></el-input>
                                        </el-form-item>
	                                </el-tab-pane>
                              </el-tabs> 
                            </el-row>
                        </el-form>
                        </div>
                </el-collapse-item>
                
            </el-collapse>
             
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
  methods: {
  	handleClick(){
  		
  	}
  }
})
export default class caseSupplement extends Vue {
    close(){
        this.$parent.$emit('submitEvent','HYSY');
    }
    handleChange(){
        this.activeNames=['1'];
    }
    
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
 
</style>