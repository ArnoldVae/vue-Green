<template>
<!-- 集体审议-提前介入 -->
    <div>
        <el-collapse class="collapse" v-model="activeNames" @change="handleChange">
            <el-collapse-item  id="menu1"  name="1" >
                <template slot="title">
                    <i class="header-icon el-icon-info"></i>集体审议
                </template>
                    <div class="form-content">
                        <el-form  class="form-label-top" label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20" >
                                <el-col :span="6">
                                    <el-form-item label="审议时间：">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-tabs v-model="activeName" @tab-click="handleClick" class="jwjw-el-tabs">
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
        <div class="backplane-footer-center"  v-if="pageFlag!='details'">
                <el-button type="success" >保存</el-button>
                <el-button  @click="close">返回</el-button>
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
      
  },
  methods: {
      close(){
                     this.$parent.$emit('closePage','LDQP')
            },
  	handleClick(){
  		
  	}
  }
})
export default class caseSupplement extends Vue {
    handleChange(){
        this.activeNames=['1'];
    }
    
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
 
</style>