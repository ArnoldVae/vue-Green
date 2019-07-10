<template >
	<el-menu default-active="1-4-1" class="el-menu-vertical-demo">
		<!--<el-tooltip content="返回首页" placement="right" effect="light">-->
		  <li class="returnMain" @click="returnMain">
      		<img src="../../../../public/img/return.svg" /> <span>返回</span>
	  		</li>
		<!--</el-tooltip>-->
	  <!--:class="{'active':nowIndex == index}" -->
	  <router-link
	  	v-for="(menu,index) in form"
	  	:to="{path:menu.path}"
	  	:key="menu.path" 
	  	@click="selectStyle(menu,index) "
	  	active-class = "active"
	  	>
  		<!--<router-link :to="menu.path"> to apple</router-link>-->
  		<div class="circle"><i :class="menu.meta.icon"></i></div>
    	<div class="span-tip">{{menu.meta.title}}</div>
     </router-link> 
	</el-menu>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter } from "vuex-class";
//import archiveFile from '../electronicFiling/archiveFile/archiveFiling.vue'
//import archiveRead from '../archiveRead/archiveRead.vue'
    @Component({
        name: "common",
        components: {},//archiveFile,archiveRead},
        data() {
            return {
        		indexs:0,
            	isActive:true,
    			nowIndex:0, 
                //this.$route.params//
                menus:[],
            };
        },

        created() {
        	var storage=window.localStorage;
        	var routes = storage.getItem("routes");
			console.log(JSON.parse(routes));
			this.form = JSON.parse(routes); //
			//console.log(JSON.parse(this.$route.query.routes));
			//console.log(this.form)
			//this.menus = menu;
			//console.log(menus);
			//this.$router.push(this.form.path);
        },
        mounted() {
        	//selectStyle(menu, index);
        },
        methods: {
        	/*handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		      },
		      handleClose(key, keyPath) {	
		        console.log(key, keyPath);
		      },*/
        	selectStyle (menu,index) {
        		alert(index);
        		this.indexs = index
				this.isActive = !this.isActive;
				this.nowIndex = index; 
				//console.log(menu.component);
				//return this.$router.push('/appMain'); 
			 },
			 returnMain(){
			 	return this.$router.push('./'); 
			 }
		      
        }
    })
    export default class common extends Vue {
	 	  form: {};
	 	  linkActiveClass:'';
	 	  linkExactActiveClass:''
        
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
#app .el-menu-vertical-demo{
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;
    background: #e2e2e2;
    /deep/ .returnMain{
    	height: 56px;cursor:pointer;    width: 10%;display: inline-block;float: left;
    	/deep/ img{
    		margin-top: 10px;
		    position: relative;
		    float: left;left: 10px;
		    width: 30px;
    	}
    	/deep/ span{
    		position: relative;
		    float: left;
		    left: 10%;
		    line-height: 56px;
		    font-size: 1.2em;
		    font-family: 微软，雅黑;
		    color: #606266;
    	}
    }
    /deep/ a{
    	    min-height: 45px;
		    height: 45px;
		    width: 14%;
		    margin: 10px 10px;
		    border: 1px solid #dad8d8;
		    cursor: pointer;
		    overflow: hidden;
		    display: inline-block;
		    text-align: center;
		    background: #fff;
		    left: -30px;
    		position: relative;
    	/deep/ .span-tip{
    		position: relative;
		    font-size: 16px;
		    color: #666;
		    line-height: 45px;
		    display: inline-block;
		    
    		/*width: 30px;
		    text-align: center;
		    position: relative;
		    font-size: 18px;
		    margin: 0 auto;*/
    	}
    	/deep/ .circle{
		    position: relative;
		    display: inline-block;
		    width: 31px;
		    border-radius: 25px;
		    background: #efefef;
		    left: -10px;
		    /deep/ i{
		    	line-height: 31px;
			    color:#999999;;
			    font-size: 17px;
		    }
    	}
    	/deep/ .circle:before{
    		content: '';
    		border-top-left-radius: 0px;
		    border-bottom-left-radius: 44px;
		    transform: rotate(30deg);
		    -webkit-transform: rotate(50deg);
    	}
    	
    	
    }
    /deep/ a.router-link-exact-active.router-link-active{
	  	background: #1d62e4;
	    width: 67%;
	    color: #ffff;
    }
    /deep/ a.active {
    	/deep/ .circle{
		background: #1d62e4;
		
    	/*background: #1d62e4;
	    width: 100%;
	    color: #ffff;*/
    	}
    	/deep/ i{
    		color: #FFF;
    	}
    	/deep/.span-tip {
    		color: #1d62e4;
    	}
    }
  }
</style>