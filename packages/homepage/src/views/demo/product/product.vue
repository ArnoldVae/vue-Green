<style lang="scss" scoped>
.page {
  background: lightblue;
  .get_product_btn {
    margin: 10px;
  }
}

</style>

<template>
  <div class="page">
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>

    <el-button class="get_product_btn" @click="getProducts()" type="primary">获取产品列表</el-button>
    <el-form ref="form" label-width="80px">
      <el-form-item label="添加产品">
        <el-input class="input" v-model="newProduct.name" @blur="addProduct()" type="primary"></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="products" style="width: 100%">
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column label="操作">
        <el-button slot-scope="scope" type="danger" @click="deleteProduct(scope.row.id)">删除</el-button>
      </el-table-column>

    </el-table>
    {{$product}}

    <hello :msg="hello"></hello>
    <hello msg="hello1"></hello>
    <hello msg="hello2"></hello>
    <hello msg="hello3"></hello>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Hello from "@/components/Hello.vue";
import { State, Action, Getter } from "vuex-class";

@Component({
  components: {
    Hello
  }
})
export default class Product extends Vue {
  @Action GetProducts: any;
  @Action DelProduct: any;
  @Action AddProduct: any;
  @State $product: any;
  // 在实例创建完成后被立即调用
  created() {
    console.log("created");
    console.log(this.$route.params.id)  }
  // 定义页面数据
  hello = 'martin';
  products = [];
  newProduct = {
    name: "",
    id: 0
  };
  // methods - 获取产品列表
  getProducts(): void {
    this.GetProducts().then(res => {
      this.products = res.data.productList;
    });
  }
  // methods - 删除产品
  deleteProduct(id) {
    this.$confirm("此操作将永久删除该产品, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        const keywords = {
          id: id
        };
        this.DelProduct(keywords).then(res => {
          this.products = res.data.productList;
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
  }
  // methods - 添加产品
  addProduct() {
    this.newProduct.id = this.products[this.products.length - 1].id + 1;
    this.AddProduct(this.newProduct).then(res => {
      this.products = res.data.productList;
    });
  }
}
</script>

