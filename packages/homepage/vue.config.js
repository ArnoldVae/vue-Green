<<<<<<< .mine
//vue.config.js
// const path = require('path')

// function resolve(dir){
//     return path.join(__dirname,dir)
// }

// module.exports = {
//   baseUrl: "", //部署应用包时的基本 URL，空值所有的资源都会被链接为相对路径
//   outputDir: "dist", //生成文件的目录名称（默认dist）,此处直接使用发布的文件名
//   lintOnSave: process.env.NODE_ENV === "production" ? false : true, //生产环境不使用，测试环境使用
//   productionSourceMap: false, //如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
//   devServer: {
//     host: "0.0.0.0",
//     port: 8001,
//     open: true //配置自动启动浏览器
//   },
//   chainWebpack: config => {
//     // 添加别名
//     config.resolve.alias
//       .set("menu", resolve("../common/components/Menu.vue"))
//   },
// };

const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    baseUrl: "", //部署应用包时的基本 URL，空值所有的资源都会被链接为相对路径
    outputDir: "dist", //生成文件的目录名称（默认dist）,此处直接使用发布的文件名
    lintOnSave: process.env.NODE_ENV === "production" ? false : true, //生产环境不使用，测试环境使用
    productionSourceMap: false, //如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    devServer: {
        host: "0.0.0.0",
        port: 8001,
        open: true //配置自动启动浏览器
    },
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set("menu", resolve("../common/components/Menu.vue"))
    },
}||||||| .r1546
//vue.config.js
const path = require('path')

function resolve(dir){
    return path.join(__dirname,dir)
}

module.exports = {
  baseUrl: "", //部署应用包时的基本 URL，空值所有的资源都会被链接为相对路径
  outputDir: "dist", //生成文件的目录名称（默认dist）,此处直接使用发布的文件名
  lintOnSave: process.env.NODE_ENV === "production" ? false : true, //生产环境不使用，测试环境使用
  productionSourceMap: false, //如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  devServer: {
    host: "0.0.0.0",
    port: 8001,
    open: true //配置自动启动浏览器
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("menu", resolve("../common/components/Menu.vue"))
  },
};
=======
//vue.config.js
const path = require('path')
const config = require('../common/config.ts')

function resolve(dir){
    return path.join(__dirname,dir)
}

module.exports = {
  publicPath: "", //部署应用包时的基本 URL，空值所有的资源都会被链接为相对路径
  outputDir: process.env.OUTPUT_DIR, //生成文件的目录名称（默认dist）,此处直接使用发布的文件名
  lintOnSave: process.env.NODE_ENV === "production" ? false : true, //生产环境不使用，测试环境使用
  productionSourceMap: false, //如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  devServer: {
    host: "0.0.0.0",
    port: 8001,
    open: true //配置自动启动浏览器
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("common", resolve("../common"))
  },
};
>>>>>>> .r1672
