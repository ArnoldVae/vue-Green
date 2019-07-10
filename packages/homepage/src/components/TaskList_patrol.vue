<template>
    <div class="task_list">
      <div class="task_box">
        <div class="box_left">
           <img class="task_img" :src="task.icon">
        </div>
        <div class="box_right">
          <div class="task_number"><span style="font-size:37px">{{task.num}}</span>件</div>
          <div class="task_type">{{task.name}}</div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TaskList extends Vue {
  @Prop() private msg!: string;
  @Prop() private task:Array;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.task_box{
  width:100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 150px;
  background-color: #e7e7ea;
  border: 1px solid rgb(247, 248, 251)
}
.task_box:hover{
  width:100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 150px;
  background-color: #e7e7ea;
  border: 1px solid #2A52BB
}
.box_left{
  flex: 1;
  align-self: center;
}
.box_right{
  flex: 1;
  align-self:center
}
.task_list {
  float: left;
  width: 205px;
  height: 150px;
  height: 80%;
  margin-top:20px;
  background-color: rgb(247, 248, 251)
}
.task_img{
  margin-left: 60%;
}
.task_number{
  margin-top:10%;
  margin-right:20%;
}
.task_type{
  margin-top: 3px;
  margin-right: 20%;
}
</style>
