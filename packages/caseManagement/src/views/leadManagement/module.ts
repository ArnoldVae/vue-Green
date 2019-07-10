export default [
	{
		path: "/leadManagement",
		name: "leadManagement",
		meta: {
			title: '线索受理',
			icon: 'el-icon-menu',
			parentTitle: "线索管理",
			parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
			parentIcon: "el-icon-menu",
			isCollapse: false
		},
		component: () => import('./leadAcceptance/leadAcceptance.vue')
	},
	{
		path: "/leadDispose",
		name: "leadDispose",
		meta: {
			title: '线索处置',
			icon: 'el-icon-menu',
			parentTitle: "线索管理",
			parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
			parentIcon: "el-icon-menu",
			isCollapse: false
		},
		component: () => import('./leadDispose/leadDispose.vue')
	},
	{
		path: "/dispose",
		name: "dispose",
		meta: {
			title: '线索办理',
			icon: 'el-icon-menu',
			parentTitle: "线索管理",
			parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
			parentIcon: "el-icon-menu",
			isCollapse: false
		},
		component: () => import('./dispose/dispose.vue')
	}, {
		path: "/notificationFeedback",
		name: "notificationFeedback",
		meta: {
			title: '通报反馈',
			icon: 'el-icon-menu',
			parentTitle: "线索管理",
			parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
			parentIcon: "el-icon-menu",
			isCollapse: false
		},
		component: () => import('./notificationFeedback/notificationFeedback.vue')
	}, {
		path: "/leadDistributed",
		name: "leadDistributed",
		meta: {
			title: '线索分发',
			icon: 'el-icon-menu',
			parentTitle: "线索管理",
			parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
			parentIcon: "el-icon-menu"
		},
		component: () => import('./leadDistributed/leadDistributed.vue')
	}

];
