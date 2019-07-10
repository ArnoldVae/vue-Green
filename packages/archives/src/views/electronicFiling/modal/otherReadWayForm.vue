<template>
<!--申请其他调阅方式-->
   <div >
        <div class="modal-body">
                <el-form
                        class="form-label-top apprForm"
                        :rules="rules"
                        label-position="top"
                        :model="formLabelAlign">
                    <el-row>
                         <el-col :span="24">
                            <el-form-item label="调阅方式：" prop="name">
															<el-select v-model="form.name" placeholder="请选择" class="form_select">
																		<el-option v-for="(option,index) in readMethod" :key="index"
																					v-bind:label="option.value"
																					v-bind:value="option.code"></el-option>
															</el-select>                          
														</el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
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
   
     
        form: {
            name: ''
				},
				readMethod: [ {code: "01", value: "电子调阅"}, 
											{code: "02", value: "纸质阅览"}, 
											{code: "03",value: "复印"}, 
											{code: "04", value: "摘抄"}, 
											{code: "05", value: "借出"}, 
											{code: "06", value: "其他"} ],
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
  methods: {}
})
export default class caseSupplement extends Vue {
      
    
    
}
</script>
<style lang="scss" scoped>
   .apprForm{
         padding-left: 15px;
    }
</style>