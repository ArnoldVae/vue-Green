<template>
	<div class="app-wrapper" ref="menuWrapper">
		<div class="main-container">
	<!--<div class="navbar">
    <el-row :gutter="20">
      <el-col class="log-wrapper" :span="9" >
      	
        <img class="logo" src="img/logo.png" alt>
        <span class="system-name">某机关信息系统  | <span style="font-size: 16px;">案件审理档案管理应用</span></span>
      	
      </el-col>
      <el-col class="more-wrapper" :span="4">
        <el-dropdown class="my">
          <img src="img/head_portrait.png" alt>
          <span class="el-dropdown-link">
            李建国
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>-->
  <div  class="menuMain">
  	<div class="logo">
  		<img  src="../../../public/img/military.png" alt=""/>
  		<div class="logoTitle">案件审理档案管理应用</div>
  	</div>
  	<div class="content-case">
  		<el-row :gutter="20">
  		<div class="item-title pigeon"  @click="electronic()">
  			<div>
  			<img src="../../../public/img/pigeonhole.svg"/>
  			<div calss="">电子归档</div>
  			</div>
  		</div>
  		<div class="item-title analysis" @click="archivingRead()">
  			<div>
  			<img src="../../../public/img/statistics.svg"/>
  			<div>档案调阅</div>
  			</div>
  		</div>
  		<div class="item-title statistics"  @click="archivesRead()">
  			<div>
  			<img src="../../../public/img/analysis.svg"/>
  			<div>档案阅览</div>
  			</div>
  		</div>
  		<div class="item-title search"  @click="query()">
  			<div>
  			<img src="img/search.svg"/>
  			<div>查询分析</div>
  			</div>
  		</div>
  		</el-row>
  	</div>
  	<!--<div class="footer-btn-grunp">
  		<img class="left-flag" src="../../../public/img/stars.png">
  		<img class="rigth-flag" src="../../../public/img/stars.png">
  	</div>-->
  </div>
  
  
  	<el-dialog title="档案阅览" :visible.sync="dialogFormVisible" width="22%" top="12%">
  		<template>
			<div>
		  <el-form :model="form" ref="dialogForm">
		    <el-form-item label="请输入调阅码" >
		      <el-input v-model="form.code" autocomplete="off"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    
		    <el-button type="primary" size="medium" @click="dialogFormVisible = false;submitBtn()">确 定</el-button>
		    <el-button size="medium" @click="dialogFormVisible = false">返 回</el-button>
		  </div>
		 </div>
		</template>
	</el-dialog>
	<el-dialog class="mc-dialog-big pdf-show-window"  title="档案阅览" :visible.sync="archivesFlag" width="100%" top="0">
        <archivesForm v-bind:myData="paramsData"></archivesForm>
    </el-dialog>
  </div>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter } from "vuex-class";
import archivesForm from "@/views/electronicFiling/modal/description.vue"
var storage = window.localStorage;
@Component({
  name: 'menuMain',
  components: {archivesForm},
  data() {
    return {
    	paramsData:"DY",
    	form:{
    		code:''
    	}
    }
  },
  computed: {
    cachedViews() {
      return this.$store.state.$tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  },
  methods: {
    electronic(){ //电子归档
    	const routes = [
    		{
  			name:'archiveFile',
  			path:'/archiveFile',
  			meta:{
 				title: '档案归档',
          		icon: 'el-icon-menu',
  			}
	  		},{
	 			name:'fileTransfer',
	 			path:'/fileTransfer',
	 			meta:{
	  				title: '档案移交',
	          		icon: 'el-icon-menu',
	  			}
	  		}
    	]
    	storage.setItem("routes",JSON.stringify(routes));
    	this.$router.push({
	    	path:'/archiveFile',
	    	name:'archiveFile'
    	})
    	},

	archivingRead(){
		
		const routes=[
			{
	    	name:"checkRegist",
	    	path:"/checkRegist",
	        meta:{
  				title: '档案调阅',
          		icon: 'el-icon-menu',
  			}
	      },
	      {
	        path:"/archiveRead",
	        name:"archiveRead",
	        meta:{
  				title: '档案归还',
          		icon: 'el-icon-menu',
  			}
	      },
	      {
	      	path : "/deliver",
    		name : "deliver",
    		meta:{
  				title: '调阅记录',
          		icon: 'el-icon-menu',
  			}
	      }
 		]
		
		storage.setItem("routes",JSON.stringify(routes));
		this.$router.push({
		name:'checkRegist',
    	path:'/checkRegist'/*,
    	query:{routes:JSON.stringify(routes)}*/
    	
    	})
    },
 query(){
 		const routes= [
 			{
  			name:'queryanalyze',
  			path:'/queryanalyze',
  			meta:{
 				title: '简单查询',
          		icon: 'el-icon-menu',
  			}
		    },
		      {
		  			name:'integratedQuery',
		  			path:'/integratedQuery',
		  			meta:{
		 				title: '业务查询',
		          		icon: 'el-icon-menu',
		  			}
		        },
		        {
		  			name:'searching',
		  			path:'/searching ',
		  			meta:{
		 				title: '检索查询',
		          		icon: 'el-icon-menu',
		  			}
		        }
 			]
 		storage.setItem("routes",JSON.stringify(routes));
      this.$router.push({
      path:'/queryanalyze',
      name:"queryanalyze"
      })
 },
 
}
})
export default class menuMain extends Vue {
	dialogFormVisible  =  false;
	archivesFlag = false;
	archivesRead(){ //档案阅览
 		this.dialogFormVisible = true
 	}
	submitBtn(){
		console.log(JSON.stringify(this.$refs.dialogForm.form));
		this.dialogFormVisible = false;
		
		this.archivesFlag = true;
		/*this.$router.push({
			name:'archivesReading',
	    	path:'/archivesReading',
	    	query: [
		    	{
		    	name:"archivesReading",
		    	path:"/archivesReading",
		        meta:{
	  				title: '档案阅览',
	          		icon: 'el-icon-menu',
	  			},
	  			component :'../archivesReading/archivesReading.vue'
		      }
		    ]
	    });*/
	}
	
}
</script>
<style lang="scss" scoped> 
/*index.vue页面样式*/
.navbar {
  position: relative;
  height: $navbarHeight;
  overflow: hidden;
  background: #1954af;
  background: url("../../../public/img/header_bg.png") no-repeat border-box 100%;
  .log-wrapper {
    position: relative;
    height: $navbarHeight;
    padding: 0 !important;
    text-align: left;
    left: 4%;
    .logo {
      position: relative;
      height: 46px;
      top: 50%;
      left: -29px;
      transform: translateY(-50%);
    }
    .system-name {
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      position: relative;
      top: -3px;
      right: 16px;
    }
  }
  .menu-wrapper {
    width: 120px;
    height: $navbarHeight;
    color: #ffffff;
    display: inline-block;
    position: relative;
    padding: 10px 0;
    .icon {
      font-size: 28px;
    }
    .name {
      margin-top: 5px;
      font-size: 14px;
    }
  }
  .more-wrapper {
    height: $navbarHeight;
        float: right;
    .el-dropdown-link {
      top: 34px;
      color: #fff;
    }
    .el-dropdown {
      position: relative;
      top: 37px;
      right: 50px;
    }
    .my {
      position: relative;
      top: 19px;
      right: 0px;
      line-height: 32px;
      img {
        vertical-align: bottom;
      }
    }
  }
  .active {
    background: $menuActiveBg;
  }
}

@media screen and (min-width: 1900px) { 
	.menuMain{
		height: 972px;
	}
	.logo{
	  position: relative;
    top: 11%;
   /* z-index: 111111;*/
	}
	.logoTitle{
		font-size: 3.5em;
	}
	.el-row{
		height: 37%;
	}
	.item-title{
		width: 17%;
	    height: 100%;
	    box-shadow: 11px 11px 27px -2px #403f3f70;
	    cursor:pointer;
	    display: inline-block;
    	position: relative;
    	float: left;
    	margin: 0px 30px;
	    /deep/ img{
	    	width: 45px;
	    	position: relative;
    		top: 33px;
	    }
	    /deep/ div{
	    	position: relative;
    		top: 33px;
	    }
	}
	.content-case{
		top:17%;	
	}
	.content-case > div{
    	font-size: 24px;
    	color: #ffff;
    	margin: 0 30px;
    	left: 10%;
    }
}
@media screen and (max-width: 1370px){
	.menuMain{
		height: 902px;
	}
	.logo{
	  position: relative;
    	top: 5%;
   		/deep/ img{
		    width: 10%;    	
    }
	}
	.logoTitle{
		font-size: 2.5em;
	}
	.el-row{
		height: 28%;
	}
	.item-title{
		width: 17%;
	    height: 100%;
	    box-shadow: 11px 11px 27px -2px #403f3f70;
	    cursor:pointer;
	    display: inline-block;
    	position: relative;
    	float: left;
    	margin: 0px 30px;
	    /deep/ img{
	    	width: 45px;
	    	position: relative;
    		top: 15px;
	    }
	    /deep/ div{
	    	position: relative;
    		top: 25px;
	    }
	}
	
	.content-case{
	  top: 11%;
	}
	.content-case > div{
    	font-size: 24px;
    	color: #ffff;
    	margin: 0 30px;
    	left: 7%;
    }
}

.logoTitle{
	/*text-shadow: 5px 2px 6px #333333;*/
	text-shadow:1px 1px 0 white;
	color: #ED2925;
	letter-spacing: 13px;
	font-family: "Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
	top: 15px;
  position: relative;
}
.menuMain{
	background: url('../../../public/img/backgroung.png') no-repeat;
    background-size: 103%;
}
.content-case{
	  height: 70%;
	  position: relative;
	  width: 100%;
}
.pigeon{
	background: url('../../../public/img/pigeon.png') no-repeat border-box 100%;
	background-size: 100%;
}
.analysis{
	background: url('../../../public/img/analysis.png') no-repeat border-box 100%;
	background-size: 100%;
}
.statistics{
	background: url('../../../public/img/statistics.png') no-repeat border-box 100%;
	background-size: 100%;
}
.search{
	background: url('../../../public/img/search.png') no-repeat border-box 100%;
	background-size: 100%;
}
.footer-btn-grunp{
	position: fixed;
	width: 100%;
	bottom: -7%;
	.left-flag{
		float: left;
    left: -4.5%;
    position: relative;
    width: 13%;
	}
	.rigth-flag{
		float: right;
    right: -4.5%;
    position: relative;
    width: 13%;
	}
	
}
.pdf-show-window{
	/deep/{
		.el-dialog__body{
			padding-top: 66px;
			overflow: hidden;
			/deep/{
				.el-col.el-col-9{
					height: 100%;
				}
				.el-col.el-col-9 .el-collapse{
					height: 100%;
				}
			}
		}
	}
}

</style>