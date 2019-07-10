<template>
<!--案件归档-审理案件-->
   <div >
         <div class="modal-body">
                <el-form
                        class="form-label-right"
                        label-width="100px"
                        :rules="rules"
                        label-position="right"
                        :model="form"
                >
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="归档人：" prop="name">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                         <el-col :span="24">
                            <el-form-item label="归档时间：" prop="name">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" ></el-date-picker>
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
  methods: {}
})
export default class caseSupplement extends Vue {
      
    
    
}
</script>
<style lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";


</style>