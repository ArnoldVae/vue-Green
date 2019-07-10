<template>
    <el-col :span="4" class="task">
      <el-row type="flex" justify="center" class="task_list">
        <el-col :span='12'>
          <img class="task_img" :src="task.url"/>
       </el-col>
        <el-col :span='12'>
          <div class="task_number"><span style="font-size:37px">{{task.number}}</span>件</div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="end">
        <el-col :span='12' class="task_type">{{task.name}}</el-col>
      </el-row>
    </el-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  created(){
    console.log(this.task.url)
  },
  data(){
    return{
      url:'./../assets/img/task_zb.png'
    }
  }
})
export default class TaskList extends Vue {
  
  @Prop() private task: object;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.task {
  margin:33px 14px;
  background-color: #e7e7ea;
  // background-color: rgb(247, 248, 251)
}
.task:hover{
  border: 1px solid #2A52BB
}
.task_list{
  margin-top:10%;
}
.task_img{
  float: right;
  padding-right: 10px;
  // margin-left:20%;
  // margin-top:10%;
}
.task_number{
  text-align: left;
  // margin-top:10%;
  // margin-right:20%;
}
.task_type{

  font-size:14pt;
  text-align: left;
  // margin-top: 3px;
  // margin-right: 20%;
}
</style>
