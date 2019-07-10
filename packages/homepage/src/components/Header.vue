<template>
  <div class="header" v-bind:class="{'header_back_woker':showflag,'header_back_boss':!showflag}">
    <div class="header_left">
      <img class="header_left_woker" v-if="showflag" src="../assets/img/woker-header.png" alt="">
      <img class="header_left_boss" v-if="!showflag" src="../assets/img/boss-header.png" alt="">
    </div>
    <div style="flex:5">
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
  @Prop() private showflag:string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.desktop .header {
  display: flex;
  height: 72px;
  background-size:cover;
  color: #fff;
  padding: 0 40px;
}
.header_back_woker {
  background-image: url('../assets/img/header.png');
}
.header_back_boss{
  background:rgb(26,50,128);
}
.desktopLeader .header {
  display: flex;
  height: 72px;
  color: #fff;
  padding: 0 40px;
}
.header .header_left{
  position: absolute;
  flex: 2;
  left: 0;
  height: 100%;
}
.header .header_left .header_left_woker{
  float: left;
  height: 70px;
}
.header .header_left .header_left_boss{
  float: left;
  height: 163px;
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
  height: 100%;
}
.header .header_right .headPortrait{
  float: left;
  width: 50px;
  height: 50px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 50%;
}
.header .header_right .loginStatus{
  font-size: 15px;
  line-height: 74px;
  padding: 0px 15px;
  float: left;
}
.header .header_right .menu{
  margin-left: 20px;
  line-height: 73px;
  float: left;
  cursor: pointer;
}
</style>
