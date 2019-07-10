/**
 * 配置所有接口路径
 */
// const webUrl="http://localhost:18080" //自定义前缀
const webUrl = "" //使用默认前缀
module.exports = {

    // ---------模板----------
    addProduct: webUrl + "/addProduct",
    getProducts: webUrl + "/getProducts",
    delProduct: webUrl + "/delProduct",
    getDemoItem: webUrl + "/getDemoItem",
    getDemoItem2: webUrl + "/getDemoItem2",

    // ---------其他模块----------


}
