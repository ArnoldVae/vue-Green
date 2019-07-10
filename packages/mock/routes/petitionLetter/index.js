// 信访
const petitionLetterUrl =require("../../../common/api/petitionLetter/url"); //信访-url-模板
const petitionLetterDemo = require("./demo");//信访-模块数据-模板

//--------------------信访-------------------
module.exports={
    paramList:[
        
        {
            webUrl:petitionLetterUrl.getTables,
            para:petitionLetterDemo.getTables
        } ,
       
    ]
}