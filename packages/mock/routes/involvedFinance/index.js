// 涉案财物
const involvedFinanceUrl =require("../../../common/api/involvedFinance/url"); //涉案财物-url-模板
const involvedFinanceDemo = require("./demo");//涉案财物-模块数据-模板

//--------------------暂扣涉案财物-------------------
module.exports={
    paramList:[
        {
            webUrl:involvedFinanceUrl.setRegister,
            para:involvedFinanceDemo.getDemoList
        },
        {
            webUrl:involvedFinanceUrl.searchList,
            para:involvedFinanceDemo.searchList
        },
        {
            webUrl:involvedFinanceUrl.getCodes,
            para:involvedFinanceDemo.getCodes
        } ,
        {
            webUrl:involvedFinanceUrl.showInfoView,
            para:involvedFinanceDemo.showInfoView
        }
    ]
}