// 队伍建设
const teamManagementUrl = require("../../../common/api/teamManagement/url") //队伍建设-url-模板
const teamManagementDemo = require("./demo");//队伍建设-模块数据-模板

//--------------------暂扣涉案财物-------------------
module.exports={
    paramList:[
        {
            webUrl:teamManagementUrl.getMenuList,
            response:teamManagementDemo.getMenuList
        }
    ]
}