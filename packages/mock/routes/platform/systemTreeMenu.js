module.exports = {
    getTreeMenus: {
      resMessage: "success",
      code: 200,
      data: {
        pageno:1,
        pageSize:10,
        totalcount:100,
        menuList: [{
            id : '01',
            menuCname: '组织人员',
            name: '组织人员',
            parentOid : '0',
            menuEname : 'zzry',
            menuUrl : '/zzry',
            menuIcon : 'el-icon-info',
            menuOrder : '10',
            isLeaf: false,
            menuType : 'parent',
            isShow : 'Y',
            children : [{
                id  : '011',
                menuCname: '组织管理',
                name: '组织管理',
                parentOid : '01',
                menuEname : 'zzgl',
                isLeaf: true,
                menuUrl : '/zzgl',
                menuIcon : 'el-icon-info',
                menuOrder : '11',
                menuType : 'child',
                isShow : 'Y'
            },{
                id  : '012',
                menuCname: '组织调整',
                name: '组织调整',
                parentOid : '01',
                isLeaf: true,
                menuEname : 'zztz',
                menuUrl : '/zztz',
                menuIcon : 'el-icon-info',
                menuOrder : '12',
                menuType : 'child',
                isShow : 'Y'
            },{
                id  : '013',
                menuCname: '人员账号',
                name: '人员账号',
                parentOid : '01',
                menuEname : 'ryzh',
                menuUrl : '/ryzh',
                menuIcon : 'el-icon-info',
                menuOrder : '13',
                menuType : 'child',
                isShow : 'Y'
            }]
        },{
            id : '02',
            menuCname: '映射同步',
            name: '映射同步',
            parentOid : '0',
            isLeaf: false,
            menuEname : 'ystb',
            menuUrl : '/ystb',
            menuIcon : 'el-icon-info',
            menuOrder : '20',
            menuType : 'parent',
            isShow : 'Y',
            children : [{
                id  : '021',
                menuCname: '组织映射',
                name: '组织映射',
                parentOid : '02',
                menuEname : 'zzys',
                menuUrl : '/zzys',
                menuIcon : 'el-icon-info',
                menuOrder : '21',
                menuType : 'child',
                isShow : 'Y'
            },{
                id  : '022',
                menuCname: '组织同步',
                name: '组织同步',
                parentOid : '02',
                menuEname : 'zztb',
                menuUrl : '/zztb',
                menuIcon : 'el-icon-info',
                menuOrder : '22',
                menuType : 'child',
                isShow : 'Y'
            },{
                id  : '023',
                menuCname: '账号同步',
                name: '账号同步',
                parentOid : '02',
                menuEname : 'zhtb',
                menuUrl : '/zhtb',
                menuIcon : 'el-icon-info',
                menuOrder : '23',
                menuType : 'child',
                isLeaf: true,
                isShow : 'Y'
            }] 
        },{
            id : '03',
            menuCname: '统一授权',
            name: '统一授权',
            parentOid : '0',
            isLeaf: false,
            menuEname : 'tysq',
            menuUrl : '/tysq',
            menuIcon : 'el-icon-info',
            menuOrder : '30',
            menuType : 'parent',
            isShow : 'Y',
            children : [{
                id  : '031',
                menuCname: '角色管理',
                name: '角色管理',
                parentOid : '03',
                menuEname : 'jsgl',
                menuUrl : '/jsgl',
                menuIcon : 'el-icon-info',
                menuOrder : '31',
                menuType : 'child',
                isShow : 'Y'
            },{
                id  : '032',
                menuCname: '授权管理',
                name: '授权管理',
                parentOid : '03',
                menuEname : 'sqgl',
                menuUrl : '/sqgl',
                menuIcon : 'el-icon-info',
                menuOrder : '32',
                menuType : 'child',
                isShow : 'Y'
            },{
                id  : '033',
                menuCname: '授权状态管理',
                name: '授权状态管理',
                parentOid : '03',
                menuEname : 'sqztgl',
                menuUrl : '/sqztgl',
                menuIcon : 'el-icon-info',
                menuOrder : '33',
                menuType : 'child',
                isShow : 'Y'
            }] 
        },{
            id : '04',
            menuCname: '系统资源',
            name: '系统资源',
            parentOid : '0',
            isLeaf: true,
            menuEname : 'xtzy',
            menuUrl : '/xtzy',
            menuIcon : 'el-icon-info',
            menuOrder : '40',
            menuType : 'parent',
            isShow : 'Y',
            children : [{
                id  : '041',
                menuCname: '设备资源管理',
                name: '设备资源管理',
                parentOid : '04',
                menuEname : 'sbzygl',
                menuUrl : '/sbzygl',
                menuIcon : 'el-icon-info',
                menuOrder : '41',
                menuType : 'child',
                isShow : 'Y'
            },{
                id  : '042',
                menuCname: '应用系统管理',
                name: '应用系统管理',
                parentOid : '04',
                menuEname : 'yyxtgl',
                menuUrl : '/yyxtgl',
                menuIcon : 'el-icon-info',
                menuOrder : '42',
                menuType : 'child',
                isShow : 'Y'
            },{
                id  : '043',
                menuCname: '数据字典管理',
                name: '数据字典管理',
                parentOid : '04',
                menuEname : 'sqztgl',
                menuUrl : '/sqztgl',
                menuIcon : 'el-icon-info',
                menuOrder : '43',
                menuType : 'child',
                isShow : 'Y'
            }]
        }]
      }
    }
  };
  