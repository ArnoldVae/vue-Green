<template>
  <div class="header">
    <div class="header_left" :class="{leader:isLeader}">
      <img v-if="isLeader" src="../assets/img/patrol_logo_leader.png" width="100" alt="">
      <img v-if="!isLeader" src="../assets/img/patrol_logo.png" width="100" alt="">
      <!-- <div class="header_title">
        <span class="wz">某机关信息系统 | 巡视巡察</span>
        <br/>
        <span class="py">JUNDUI JIJIAN JIANCHA XINXI XITONG</span>
      </div> -->
    </div>
    <div style="flex:4">
      <slot name="title_tab"></slot>
    </div>
    <div class="header_right">
      <slot name="title_user"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.desk .header {
  display: flex;
  height: 72px;
  background-image: url('../assets/img/header.png');
  background-size:cover;
  color: #fff;
  padding: 0 40px;
}
.desktopLeader .header {
  display: flex;
  height: 72px;
  color: #fff;
  padding: 0 40px;
  // background-color: #2851BD
}
.header .header_left{
  flex: 2;
  height: 100%;
}
.header .header_left img{
    width: 100%;
    margin-top: 5px;
    margin-left: -10%;
}
.header .header_left.leader img{
    width: 70%;
    margin-top: 5px;
    margin-left: -35%;
}
.header .header_left .header_title{
  text-align: left;
  width: 300px;
  float: left;
  padding:20px 5px;
}
.header .header_left .header_title .wz{
  font-size: 24px;
}
.header .header_left .header_title .py{
  font-size: 15px;
  color: #b3b3b3;
}
.header .header_right{
  flex: 2;
  height: 100%;
}
.header .header_right .headPortrait{
  float: right;
  width: 40px;
  height: 40px;
  margin-top: 20px;
  background-image: url('../assets/img/user_logo.png');
  background-size:cover;
  border-radius: 50%;
}
.header .header_right .loginStatus{
  line-height: 74px;
  padding: 2px 15px;
  float: left;
}
.headPortrait_leader{
  float: right;
  width: 40px;
  height: 40px;
  margin-top: 20px;
  background-image: url('../assets/img/user_logo.png');
  background-size:cover;
    cursor:pointer;
} 
.header .header_right .menu{
  margin-left: 20px;
  line-height: 80px;
  cursor: pointer;
}
</style>
