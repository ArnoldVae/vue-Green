module.exports = {
    pageQueryCodes : {
        "resMessage": "success",
        "code": 200,
        "pageno": 1,
        "pagesize": 20,
        "totalcount": 5,
        "result":[
            {
                id : '2',
                code : '01',
                name : '是',
                codeType : 'YESNO',
                codeTypeName : '是否',
                parentId : '',
                avaliable : '1',
                order : '1',
                description : ''
            },
            {
                id : '3',
                code : '02',
                name : '否',
                codeType : 'YESNO',
                codeTypeName : '是否',
                parentId : '',
                avaliable : '1',
                order : '1',
                description : ''
            },
            {
                id : '5',
                code : '01',
                name : '公共字典',
                codeType : 'ZDFZ',
                codeTypeName : '字典分组',
                parentId : '',
                avaliable : '1',
                order : '1',
                description : ''
            },
            {
                id : '6',
                code : '02',
                name : '信访字典',
                codeType : 'ZDFZ',
                codeTypeName : '字典分组',
                parentId : '',
                avaliable : '1',
                order : '1',
                description : ''
            },
            {
                id : '7',
                code : '03',
                name : '巡视字典',
                codeType : 'ZDFZ',
                codeTypeName : '字典分组',
                parentId : '',
                avaliable : '1',
                order : '1',
                description : ''
            },
        ]
      },
      getCodeTree : {
        resMessage: "success",
        code: 200,
        data: [
            {
              id : "2",
              name : "公共字典",
              children : [
                {
                  id : "3",
                  name : "是否",
                  codeType : 'YESNO',
                  children : [
                    {
                      id : "4",
                      code : '01',
                      name : "是",
                    },{
                      id : "5",
                      code : '02',
                      name : "否"
                    }
                  ]
                }
              ]
            },{
              id : "6",
              name : "信访字典",
              children : [
                {
                  id : "7",
                  name : "问题线索",
                  codeType : 'WTXS',
                  children : [
                    {
                      id : "8",
                      code : "01",
                      name : "1"
                    },{
                      id : "9",
                      code : "02",
                      name : "2"
                    }
                  ]
                }
              ]
            },{
              id : "10",
              name : "巡视字典",
              children : [
                {
                  id : "11",
                  name : "问题线索1",
                  codeType : 'WTXS1',
                  children : [
                    {
                      id : "12",
                      code : "01",
                      name : "1"
                    },{
                      id : "13",
                      code : "02",
                      name : "2"
                    }
                  ]
                }
              ]
            }
          ]
      },
      getCodeGroup : {
        resMessage: "success",
        code: 200,
        return: [
            {
                id : '1',
                code : '01',
                codeTypeName : '公共字典',
                codeType : 'ZDFZ',
                name : '字典分组',
                parentId : '',
                avaliable : '1',
                order : '1',
                description : '',
                isParent:''
            },
            {
                id : '2',
                code : '02',
                codeTypeName : '信访字典',
                codeType : 'ZDFZ',
                name : '字典分组',
                parentId : '',
                avaliable : '1',
                order : '1',
                description : '',
                isParent:''
            },
            {
                id : '3',
                code : '03',
                codeTypeName : '巡视字典',
                codeType : 'ZDFZ',
                name : '字典分组',
                parentId : '',
                avaliable : '1',
                order : '1',
                description : '',
                isParent:''
            },
        ]
      }
};