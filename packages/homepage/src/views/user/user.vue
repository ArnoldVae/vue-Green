<style lang="scss" scoped>
.page {
}
</style>

<template>
  <div class="page">
    <button @click="addUser">add</button>
    name:
    <input type="text" v-model="user.name">
    {{user.name}}
    <button @click="getUsers">getUsers</button>
    <ul v-show="isShow">
      <li v-for="(user,index) in users" :key="index">
        {{user.name}}
        <input type="text" v-model="user.name">
        <button @click="showUser(user)">show detail</button>
      </li>
    </ul>
    <button @click="isShow=!isShow">{{isShow?"hide":"show"}}</button>

    <p v-if="isShow">11111</p>
    <p v-else>222222</p>
    <button @click="goProduct">go product</button>
    {{$product}}
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter } from "vuex-class";

@Component({})
export default class User extends Vue {
  @Action GetUsers: any;
  @Action AddUser: any;
  @State $product: any;
  users = [];
  isShow = true;
  user = {
    name: "",
    id: 0
  };
  // 在实例创建完成后被立即调用
  created() {
    console.log("created");
    this.getUsers();
    console.log(this.$product)
  }
  mounted() {
    this.$nextTick(function() {
      console.log("mounted");
      // Code that will run only after the
      // entire view has been rendered
    });
  }
  // methods - 获取产品列表
  getUsers(): void {
    this.GetUsers().then(res => {
      this.users = res.data.userList;
    });
  }
  addUser(): void {
    console.log(this.user);
    this.AddUser(this.user).then(res => {
      this.users = res.data.userList;
    });
  }
  showUser(user) {
    console.log(user);
  }
  goProduct() {
    console.log('go')
    this.$router.push({
      name: 'product',
      params: {
        user: "123123"
      }
    });
  }
}
</script>

