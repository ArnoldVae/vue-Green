<template >
    <div class="app-wrapper">
    	
		<div class="main-container">
			<!--
            	头部固定
            -->
			<div class="navbar">
		    <el-row :gutter="20">
		      <el-col class="log-wrapper" style="    width: 46%">
		      	<div class="system-name">
		        <img class="logo" src="img/logo.png" alt>
		        <span>某机关信息系统  | <span style="font-size: 20px;">案件审理档案管理应用</span></span>
		      	</div>
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
  			</div>
  			<el-row :span="20" class="row-title">
			  <el-col :span="24">
				<leftMenu/>
			  </el-col>
			</el-row>
			 <el-row :span="21" class="row-content"> 
			  <el-col :span="24">
			  	<appMain/>
			  	<!--<transition name="fade" mode="out-in" v-if="indexs == 0"> 
			     	<archiveFile/>
			    </transition>
			    <transition name="fade" mode="out-in" v-if="indexs == 1">
			     	<archiveRead/>
			    </transition>-->
  				<!--<archiveFile/>-->
			  </el-col>
			</el-row>
	    </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter } from "vuex-class";
import leftMenu from './modal/leftMenu.vue'
import appMain from './modal/AppMain.vue'

    @Component({
        name: "common",
        components: {leftMenu,appMain},
        data() {
            return {
            	//archiveFileFlag:boolean = false,
        		//archiveReadFlag:boolean = false,
        		indexs:0,
            	isActive:true,
                form: {},
                
            };
        },
        created() {
			//console.log(menu);
			
        },
        mounted() {
        	//selectStyle(menu, index);
        },
        methods: {
		      
        }
    })
    export default class common extends Vue {
	 	
        
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/common.scss";

    .row-content{
    	height: 900px;
    	/deep/ .el-col{
    		height: 100%;
    	}
    }
    .row-title{
    	height: 70px;
    	/deep/.el-col{
    		height: 100%;
    	}
    }
    @media screen and (max-width: 1370px){
      .row-content{
        height: 520px;
      }
    }
    .el-menu-vertical-demo {
	    width: 100%;
	    height: 100%;
	    /deep/ .li-title{
	    	min-height: 118px;
		    padding: 0px 10px;
		    width: 50%;
		    border: 1px solid #1d62e4;
		    margin: 0 auto;
		    color: #1d62e4;
		    display:flex;justify-content:center;align-items:center;
		    cursor:pointer;
	    	/deep/ .span-tip{
	    		width: 30px;
			    text-align: center;
			    position: relative;
			    font-size: 18px;
			    margin: 0 auto;
	    	}
	    }
	    .li-title.active{
		  	background: #1d62e4;
		    width: 67%;
		    color: #ffff;
	    }
	  }
	  #app .main-container .app-main{
	  	top: 0px;
	  }
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
    .logo{
    	position: relative;
	    height: 46px;
	    top: 50%;
	    margin-right: 16px;
	    margin-left: 20px;
	    -webkit-transform: translateY(-50%);
	    transform: translateY(-50%)
    }
    .system-name {
      color: #fff;
    font-size: 24px;
    font-weight: 700;
    position: relative;
    top: -3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 100%;
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
.menus {
  position: absolute;
  top: 72px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 120px;
  overflow: auto;
  box-shadow: darkgrey 3px 2px 10px 0px;
  .menu-top {
    height: 34px;
    color: #409eff;
    position: relative;
    i {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .menu-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 120px;
    overflow: auto;
    .menu {
      height: 100px;
      background: 120px;
      border-bottom: 1px solid #2d7ee2;
      color: #ffffff;
      padding: 23px 0;
      cursor: pointer;
      .icon {
        font-size: 35px;
      }
      .name {
        font-size: 12px;
      }
    }
    /*.router-link-active {
      background: $menuActiveBg;
    }*/
  }
}
</style>