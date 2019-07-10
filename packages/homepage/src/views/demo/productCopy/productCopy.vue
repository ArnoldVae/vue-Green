




<style lang="scss" scoped>
.page {
  background: lightblue;
}
</style>

<template>
  <div class="page">
    <el-button @click="getProducts()" type="primary">获取产品列表</el-button>
    <br>
    <span>添加产品</span><input type="text" v-model="newProduct.riskName" @keyup.enter="addProduct()">
    <ul>
      <li v-for="(product,index) in products" :key="index">
        {{product.riskName}}-{{product.id}}-
        <button @click="deleteProduct(product.id)">delete</button>
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter } from "vuex-class";

@Component
export default class Product extends Vue {
  @Action GetProductsCopy: any;
  @Action DelProductCopy: any;
  @Action AddProductCopy: any;
  // 在实例创建完成后被立即调用
  created() {
    console.log("created");
  }
  // 定义页面数据
  products = [];
  newProduct = {
    riskName: "",
    id: 0
  };
  // methods - 获取产品列表
  getProducts(): void {
    this.GetProductsCopy().then(res => {
      this.products = res.data.productList;
    });
  }
  // methods - 删除产品
  deleteProduct(id) {
    const keywords = {
      id: id
    };
    this.DelProductCopy(keywords).then(res => {
      this.products = res.data.productList;
    });
  }
  // methods - 添加产品
  addProduct() {
    this.newProduct.id = this.products[this.products.length - 1].id + 1;
    this.AddProductCopy(this.newProduct).then(res => {
      this.products = res.data.productList;
    });
  }
}
</script>
