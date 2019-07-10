<template>
  <div>
     <el-collapse-transition>
            <Menu v-show="menuModal.state" :msg="menuModal"> </Menu>
      </el-collapse-transition>
      <div class="header">
        <div class="header_left">
          <img src="../assets/img/worker-header.png" alt="">
        </div>
        <div class="header_right">
          <img src="../assets/img/user-logo.png" style="float: left;margin-top: 19.5px;margin-right: 10px;width: 33px;" @click="gorole()">
          <div class="loginStatus"></div>
          <div class="menu" @click="login">
            返回系统
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Menu from '@/components/Menu.vue';
@Component({
  components: {
    Menu
  },
    data() {
      return {
          menuModal:{
              state:false
          }
      }
    },
    methods:{
      gorole(){
        this.goback()
      },
      login(){
        window.open('http://127.0.0.1:1666/view_xfjb/index.1.html','_blank')
      },
    }
  })
export default class petitionheader extends Vue {
    @Prop() private goback:Function;
    @Prop() private identity:String;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 72px;
  background-image: url('../assets/img/header.png');
  color: #fff;
  padding: 0 40px;
}
.header .header_left{
  position:absolute;
  left: 0;
  height: 100%;
}
.header .header_left img{
  float: left;
  height: 64px;
  margin-top: 4px;
}
.header .header_left .header_title{
  text-align: left;
  width: 300px;
  float: left;
  padding:12px;
}
.header .header_left .header_title .wz{
  font-size: 24px;
}
.header .header_left .header_title .py{
  font-size: 15px;
  color: #b3b3b3;
}
.header .header_right{
  float: right;
  height: 100%;
}
.header .header_right .headPortrait{
  float: left;
  width: 40px;
  height: 40px;
  margin-top: 16px;
  background: url('../assets/img/photo.png') no-repeat;
  background-size: 100% 100%;
  border-radius: 50%;
}
.header .header_right .loginStatus{
  font-size: 10px;
  line-height: 72px;
  padding: 0 15px;
  float: left;
}
.header .header_right .menu{
  margin-left: 20px;
  line-height: 72px;
  float: left;
  cursor: pointer;
}
</style>
