//巡视巡查模版模拟api



const patrolUrl =require("./url") //巡视巡查-url-模板
const patrolDemo = require("./patrolaccount");//巡视巡查-模块数据-模板

// const patrolUrlapi =require("../../common/api/patrol/url"); //巡视巡查-url
// const patrolBuild1 = require("./patrolBuild");
// const groupLeader = require("./groupLeader");
module.exports={
    paramList:[
        //demo例
        {
            webUrl:patrolUrl.getList,
            para:patrolDemo.getDemoList
        }
        // ,
        // {
        //     webUrl:patrolUrlapi.getGroupLeaders,
        //     para:groupLeader.getGroupLeaders
        // },
        // {
        //     webUrl:patrolUrlapi.getPatrolBuildList,
        //     para:patrolBuild1.getPatrolBuild
        // }

    ]
}