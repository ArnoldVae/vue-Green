<template>
<!-- 案件登记 -->
  <div class="dialog" >
    <div  style="text-align: center;margin-left: 10%; margin-right:10%">
      <el-main >
            <el-row>
                <div @click="hidden(item)" class="border_state" >
                    <div class="title_state" ><img src="img/photo.png" alt="" ></div>
                    <h3 style="width:217px;margin-top: 0px;">提交办理结果</h3>
                    <el-checkbox-group v-model="checkList" class="check">
                        <el-checkbox label="党纪申诉办理结果"></el-checkbox>
                        <el-checkbox label="政务申诉办理结果"></el-checkbox>
                    </el-checkbox-group>
                </div>
            </el-row> 
            <el-row>
                <div class="border_state2">
                    <h3 style="width:180px;margin-top: 25px;">撤回申诉</h3>
                </div>
            </el-row> 
            <el-row>
                <el-button type="primary" round medium>确定</el-button>
            </el-row>
      </el-main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
  data() {
    return {
      checkList: ['选中且禁用','复选框 A'],
      formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
         form: {
            
        },
        rules: {
  
        }
    };
  },

    created() {},
    mounted(){

  },
  methods: {}
})
export default class caseSupplement extends Vue {
//  hidden(val){
//      this.hidden = true;
//   }  
      
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
  .tab-content{
       padding: 0px;
    }
  .el-select .el-input input{
      width: 300px;
  }
    .el-button{
      margin-top: 30px;
    }
    /deep/.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #fdb72b;
    border-color: #fdb72b;
}
  .border_state{
    border: solid #409EFF ;
    height: 106px;
    border-radius:14px;
    width: 426px;
    margin-top: 30px;
  }
  .border_state2{
    border: solid #409EFF ;
    height: 80px;
    border-radius:14px;
    width: 426px;
    margin-top: 30px;
  }
  .title_state{
    border-left-width: 100px;
    margin-left: 392px;
  }
</style>