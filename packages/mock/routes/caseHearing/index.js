//案件审理模版模拟api



const caseHearingProduct = require("./product");//案件审理-模块数据-模板
const caseHearingUrl =require("../../../common/api/caseHearing/url"); //案件审理-url-模板
module.exports={
    paramList:[
        //demo实例
        {
            method:'post',
            webUrl:caseHearingUrl.getProducts,
            para:caseHearingProduct.getProducts
        },
        {
            method:'post',
            webUrl:caseHearingUrl.addProduct,
            para:caseHearingProduct.getProducts
        },
        {
            method:'post',
            webUrl:caseHearingUrl.delProduct,
            para:caseHearingProduct.getProducts
        },
        // demo7查询使用
        {
            method:'post',
            webUrl:caseHearingUrl.getDemoItem,
            para:caseHearingProduct.getDemoItem
        },
         // demo7查询使用
        {
            method:'post',
            webUrl:caseHearingUrl.getDemoItem2,
            para:caseHearingProduct.getDemoItem2
        },
    ]
}