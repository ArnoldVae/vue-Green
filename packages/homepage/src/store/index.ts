import Vue from 'vue';
import Vuex from 'vuex';
import product from '@/views/demo/product/store'
import productCopy from '@/views/demo/productCopy/store'
import getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    $product: product,
    $productCopy: productCopy
  },
  getters,
});
