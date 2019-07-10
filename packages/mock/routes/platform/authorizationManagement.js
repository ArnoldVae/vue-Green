module.exports = {
    pageQueryAuthorizations : {
    "code": 200,
    "msg": "成功",
    "pageIndex": 1,
    "pageSize": 20,
    "allcount": 3,
    "result": [
        {
            "personOid": "16fb4e6fdcf34dc4a581",
            "userEname": "test2",
            "userCname": "测试用户2",
            "orgCname": "测试机构",
            "invalidFlag": "未锁定",
            "roleName": "测试角色名2",
            "authorizationState": "已授权"
        },
        {
            "personOid": "9fafe6f0ac3f470a902c",
            "userEname": "test3",
            "userCname": "测试用户3",
            "orgCname": "测试机构",
            "invalidFlag": "已锁定",
            "roleName": "",
            "authorizationState": "未授权"
            
        },
        {
            "personOid": "f32fe7b92d614342a78c",
            "userEname": "test1",
            "userCname": "测试用户1",
            "orgCname": "测试机构",
            "invalidFlag": "未锁定",
            "roleName": "测试角色名1",
            "authorizationState": "已授权"
        }
    ]
},
    pageQueryRoles : {
        "code": 200,
        "msg": "成功",
        "pageIndex": 1,
        "pageSize": 20,
        "allcount": 2,
        "result": [
            {
                "regionName": "",
                "description": "管理员002",
                "invalidFlag": "",
                "oid": "214210651acd489bb35b",
                "operator": "",
                "regionCode": "",
                "customSystemName": "管理员002",
                "roleCode": "bm002",
                "visitUrl": "1",
                "roleName": "管理员002",
                "expireDate": null,
                "appSystem": "XXXXXXXXX队伍建设应用",
                "operateDate": {
                    "date": 10,
                    "hours": 16,
                    "seconds": 13,
                    "month": 3,
                    "timezoneOffset": -480,
                    "year": 119,
                    "minutes": 9,
                    "time": 1554883753000,
                    "day": 3
                }
            },
            {
                "regionName": "",
                "description": "管理员001",
                "invalidFlag": "",
                "oid": "d3646ef46a8a4d009efc",
                "operator": "",
                "regionCode": "",
                "customSystemName": "管理员001",
                "roleCode": "bm001",
                "visitUrl": "1",
                "roleName": "管理员001",
                "expireDate": null,
                "appSystem": "信访举报应用",
                "operateDate": {
                    "date": 10,
                    "hours": 16,
                    "seconds": 8,
                    "month": 3,
                    "timezoneOffset": -480,
                    "year": 119,
                    "minutes": 8,
                    "time": 1554883688000,
                    "day": 3
                }
            }
        ]
    },
    getAppSysName : {
        "code": 200,
        "msg": "查询成功",
        "result": [
            {
                "VALUE": "1",
                "LABEL": "信访举报应用"
            },
            {
                "VALUE": "2",
                "LABEL": "巡视巡查应用"
            },
            {
                "VALUE": "3",
                "LABEL": "案件审理应用"
            },
            {
                "VALUE": "4",
                "LABEL": "审查调查应用"
            },
            {
                "VALUE": "5",
                "LABEL": "监督检查应用"
            },
            {
                "VALUE": "6",
                "LABEL": "案件审理档案管理应用"
            },
            {
                "VALUE": "7",
                "LABEL": "XXXXXXXXX队伍建设应用"
            },
            {
                "VALUE": "8",
                "LABEL": "案件监督管理应用"
            },
            {
                "VALUE": "9",
                "LABEL": "业务支撑应用"
            }
        ]
    },
    getSystemJurisdiction : {
        "code": 200,
        "msg": "成功",
        "result": [
            {
                "dataDictionaryTree": [
                    {
                        "codeType": "xb",
                        "children": [
                            {
                                "code": "nan",
                                "codeType": "xb",
                                "orgCode": "001",
                                "dataType": "code",
                                "id": "1",
                                "label": "男",
                                "parentId": null
                            },
                            {
                                "code": "nv",
                                "codeType": "xb",
                                "orgCode": "001",
                                "dataType": "code",
                                "id": "2",
                                "label": "女",
                                "parentId": null
                            }
                        ],
                        "dataType": "type",
                        "id": "1",
                        "label": "性别"
                    },
                    {
                        "codeType": "wjxw",
                        "children": [
                            {
                                "code": "yzwj",
                                "codeType": "wjxw",
                                "children": [
                                    {
                                        "code": "yzwj-1",
                                        "codeType": "wjxw",
                                        "orgCode": "001",
                                        "dataType": "code",
                                        "id": "5",
                                        "label": "严重违纪-1",
                                        "parentId": "3"
                                    },
                                    {
                                        "code": "yzwj-2",
                                        "codeType": "wjxw",
                                        "children": [
                                            {
                                                "code": "yzwj-2-1",
                                                "codeType": "wjxw",
                                                "children": [
                                                    {
                                                        "code": "yzwj-2-1-1",
                                                        "codeType": "wjxw",
                                                        "orgCode": "001",
                                                        "dataType": "code",
                                                        "id": "11",
                                                        "label": "严重违纪-2-1-1",
                                                        "parentId": "10"
                                                    }
                                                ],
                                                "orgCode": "001",
                                                "dataType": "code",
                                                "id": "10",
                                                "label": "严重违纪-2-1",
                                                "parentId": "6"
                                            }
                                        ],
                                        "orgCode": "001",
                                        "dataType": "code",
                                        "id": "6",
                                        "label": "严重违纪-2",
                                        "parentId": "3"
                                    }
                                ],
                                "orgCode": "001",
                                "dataType": "code",
                                "id": "3",
                                "label": "严重违纪",
                                "parentId": null
                            },
                            {
                                "code": "ptwj",
                                "codeType": "wjxw",
                                "children": [
                                    {
                                        "code": "ptwj-1",
                                        "codeType": "wjxw",
                                        "children": [
                                            {
                                                "code": "ptwj-1-1",
                                                "codeType": "wjxw",
                                                "orgCode": "001",
                                                "dataType": "code",
                                                "id": "9",
                                                "label": "普通违纪-1-1",
                                                "parentId": "7"
                                            }
                                        ],
                                        "orgCode": "001",
                                        "dataType": "code",
                                        "id": "7",
                                        "label": "普通违纪-1",
                                        "parentId": "4"
                                    },
                                    {
                                        "code": "ptwj-2",
                                        "codeType": "wjxw",
                                        "orgCode": "001",
                                        "dataType": "code",
                                        "id": "8",
                                        "label": "普通违纪-2",
                                        "parentId": "4"
                                    }
                                ],
                                "orgCode": "001",
                                "dataType": "code",
                                "id": "4",
                                "label": "普通违纪",
                                "parentId": null
                            }
                        ],
                        "dataType": "type",
                        "id": "2",
                        "label": "违纪行为"
                    }
                ],
                "sys": [
                    {
                        "functionTreeRef": "functionTree_1",
                        "assetName": "信访举报应用",
                        "checked": false,
                        "id": "1",
                        "defaultCheckedKeysFunctionTreeData": [],
                        "functionTree": [
                            {
                                "menuIcon": null,
                                "parentOid": null,
                                "label": "功能菜单",
                                "operator": null,
                                "isShow": null,
                                "menuRemark": null,
                                "menuOrder": null,
                                "menuUrl": null,
                                "children": [
                                    {
                                        "menuIcon": null,
                                        "parentOid": "1",
                                        "label": "新增",
                                        "operator": null,
                                        "isShow": null,
                                        "menuRemark": null,
                                        "menuOrder": 1,
                                        "menuUrl": null,
                                        "children": [
                                            {
                                                "menuIcon": null,
                                                "parentOid": "2",
                                                "label": "新增-1",
                                                "operator": null,
                                                "isShow": null,
                                                "menuRemark": null,
                                                "menuOrder": 1,
                                                "menuUrl": null,
                                                "systemOid": "1",
                                                "menuType": null,
                                                "id": "5",
                                                "operateDate": null,
                                                "menuEname": null
                                            }
                                        ],
                                        "systemOid": "1",
                                        "menuType": null,
                                        "id": "2",
                                        "operateDate": null,
                                        "menuEname": null
                                    },
                                    {
                                        "menuIcon": null,
                                        "parentOid": "1",
                                        "label": "修改",
                                        "operator": null,
                                        "isShow": null,
                                        "menuRemark": null,
                                        "menuOrder": 2,
                                        "menuUrl": null,
                                        "systemOid": "1",
                                        "menuType": null,
                                        "id": "3",
                                        "operateDate": null,
                                        "menuEname": null
                                    },
                                    {
                                        "menuIcon": null,
                                        "parentOid": "1",
                                        "label": "删除",
                                        "operator": null,
                                        "isShow": null,
                                        "menuRemark": null,
                                        "menuOrder": 3,
                                        "menuUrl": null,
                                        "systemOid": "1",
                                        "menuType": null,
                                        "id": "4",
                                        "operateDate": null,
                                        "menuEname": null
                                    }
                                ],
                                "systemOid": "1",
                                "menuType": null,
                                "id": "1",
                                "operateDate": null,
                                "menuEname": ""
                            }
                        ]
                    },
                    {
                        "functionTreeRef": "functionTree_7",
                        "assetName": "XXXXXXXXX队伍建设应用",
                        "checked": false,
                        "id": "7",
                        "defaultCheckedKeysFunctionTreeData": []
                    },
                    {
                        "functionTreeRef": "functionTree_2",
                        "assetName": "巡视巡查应用",
                        "checked": false,
                        "id": "2",
                        "defaultCheckedKeysFunctionTreeData": []
                    },
                    {
                        "functionTreeRef": "functionTree_8",
                        "assetName": "案件监督管理应用",
                        "checked": false,
                        "id": "8",
                        "defaultCheckedKeysFunctionTreeData": []
                    },
                    {
                        "functionTreeRef": "functionTree_3",
                        "assetName": "案件审理应用",
                        "checked": false,
                        "id": "3",
                        "defaultCheckedKeysFunctionTreeData": []
                    },
                    {
                        "functionTreeRef": "functionTree_9",
                        "assetName": "业务支撑应用",
                        "checked": false,
                        "id": "9",
                        "defaultCheckedKeysFunctionTreeData": []
                    },
                    {
                        "functionTreeRef": "functionTree_4",
                        "assetName": "审查调查应用",
                        "checked": false,
                        "id": "4",
                        "defaultCheckedKeysFunctionTreeData": []
                    },
                    {
                        "functionTreeRef": "functionTree_5",
                        "assetName": "监督检查应用",
                        "checked": false,
                        "id": "5",
                        "defaultCheckedKeysFunctionTreeData": []
                    },
                    {
                        "functionTreeRef": "functionTree_6",
                        "assetName": "案件审理档案管理应用",
                        "checked": false,
                        "id": "6",
                        "defaultCheckedKeysFunctionTreeData": []
                    }
                ]
            }
        ]
    },
    getOrgTree : {
        "code":200,
        "resMessage":"成功",
        "result":[{
            id: 1,
            name: '北京',
            children: [{
                id: 2,
                name: '厅领导',
                children: [{
                    id: 3,
                    name: '张某某'
                },{
                    id: 4,
                    name: '李某某'
                }]
            },{
                id: 5,
                name: '办公室',
                children: [{
                    id: 6,
                    name: '赵某某'
                },{
                    id: 7,
                    name: '王某某'
                }]
            },{
                id:8,
                name:'政策法规处'
            },{
                id:9,
                name:'规划财务处'
            },{
                id: 10,
                name: '人事处',
                children: [{
                    id: 11,
                    name: '赵某'
                },{
                    id: 12,
                    name: '王某'
                }]
            },{
                id:13,
                name:'科技标准与产业发展处'
            },{
                id:14,
                name:'市环境保护督察办公室'
            },{
                id:15,
                name:'综合与监督处'
            },{
                id:16,
                name:'环境监测与调查处'
            },{
                id:17,
                name:'大气环境管理处'
            },{
                id:18,
                name:'土壤环境管理处'
            },{
                id:19,
                name:'水环境管理处'
            },{
                id:20,
                name:'自然生态保护处'
            }]
        }]
    },
    pageQueryAuthorizationStatus : {
        "code":200,
        "resMessage":"成功",
        "pageno":1,
        "pagesize":20,
        "totalcount":2,
        "result":[{
            id:'1',
            account:'zhangmou',
            userName:'张某',
            department:'市领导-北京',
            authorizationState:'已授权',
            checked:false
        },{
            id:'2',
            account:'limou',
            userName:'李某',
            department:'市领导-北京',
            authorizationState:'未授权',
            checked:false
        }]
    },
    getSystemResourceTree : {
        "code":200,
        "resMessage":"成功",
        "result":[{
            id: 1,
            name: '应用支撑系统',
            children: [{
                id: 2,
                name: '组织人员',
                children: [{
                    id: 3,
                    name: '人员账号'
                },{
                    id: 4,
                    name: '组织管理'
                }]
            },{
                id: 5,
                name: '映射同步',
                children: [{
                    id: 6,
                    name: '组织映射'
                }]
            }]
        }]
    }
}