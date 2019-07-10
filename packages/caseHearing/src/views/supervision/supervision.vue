<template>
<div style="width: 95%;margin: 0 auto;">
    <div class="title">案件监督</div>

    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
        <el-menu-item index="1">
            <el-badge :value="beAccepted.length" class="item">
                <div class="meau-item">审理一部</div>
            </el-badge>
        </el-menu-item>
        <el-menu-item index="2">
            <el-badge :value="accept.length" class="item">
                <div class="meau-item">审理二部</div>
            </el-badge>
        </el-menu-item>
        
    </el-menu>
    <div class="menu-item">
        <el-row :gutter="20">
            <el-col :span="7" v-for="(item,index) in showcase" :key="index">
                <el-card class="box-card" >
                    <div slot="header" class="clearfix">
                        <img src="img/user.png">
                        <span>{{item.personName}}</span>
                    </div>
                    <div class="case_content">
                        <div class="img">
                            <img class="" src="img/cases.png" style="width:80px;">
                        </div>
                        <div class="button_groups">
                            <div class="inlien-btn"><el-button @click="showBeAppect">待受理</el-button><div class="line"></div> <span>{{item.beAccept}}</span>件</div>
                            <div class="inlien-btn"><el-button @click="showAppected">受理中</el-button><div class="line"></div> <span>{{item.accepted}}</span>件</div>
                            <div class="inlien-btn"><el-button @click="showCompleted">已办结</el-button><div class="line"></div> <span>{{item.completed}}</span>件</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    // 声明此类为vue的一个组件
    @Component({
        components: {

        },
        data() {
            return {
                activeIndex: '1',
            }
        },

        created(){

        },
        mounted(){
        	this.showBeAppect();
        	this.showAppected();
        	this.showCompleted();
        },
        methods: {
        	showBeAppect(){
        		this.$router.push({path:"./beAccept"});
        	},
        	showAppected(){
        		this.$router.push({path:"./accepted"});
        	},
        	showCompleted(){
        		this.$router.push({path:"./completedCase"});
        	}
        }
    })
    export default class petitionLetter extends Vue {
        showcase = [];
        //人员信息数据
        allperson: any = [
            {
                ids:"0012",
                personName:"李某某",
                beAccept:"2",
                accepted:"3",
                completed:"5",
                regionCode:'001'
            },
            {
                ids:"0012",
                personName:"刘某某",
                beAccept:"2",
                accepted:"3",
                completed:"5",
                regionCode:'001'
            },
            {
                ids:"0012",
                personName:"李凡",
                beAccept:"2",
                accepted:"3",
                completed:"5",
                regionCode:'002'
            },
            {
                ids:"0012",
                personName:"张铭",
                beAccept:"2",
                accepted:"3",
                completed:"5",
                regionCode:'002'
            },
            {
                ids:"0012",
                personName:"李某某",
                beAccept:"2",
                accepted:"3",
                completed:"5",
                regionCode:'001'
            }
            
        ];
        beAccepted = [];
        accept = [];        
        
        handleSelect(key) {
            if (key == 1) {
                this.showcase = this.beAccepted;
            }else 
            if(key == 2){
            	this.showcase = this.accept;
            }
        }
         mounted() {
            this.showcase = this.allperson;
            this.allperson.forEach(item => {
             if (item.regionCode == "001") {
                 this.beAccepted.push(item);
             } else {
                 this.accept.push(item);
             }
            });
        }
    }
</script>
<style <style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/card.scss";
@import "~@/styles/common.scss";
    .title {
        text-align: left;
        font-size: 30px;
        padding-left: 40px;
        color: #000;
        font-weight: 500;
        margin-top: 25px;
    }
    .menu-title{
        float: left;
        width: 95%;
        left: 40px;
        position: relative;
    }
    .el-menu-demo{
         margin: 20px 20px 0px 20px;
        /deep/.el-menu-item {
            font-size: 20px;
            color: #121312;
        }
        .meau-item {
            padding: 0 20px;
        }
        /deep/el-badge__content {
            top: 15px;
            background-color: red;
        }
    }
    .el-card__header{
    	height: 55px;
    }
    .clearfix{
    	position: relative;
    	/deep/ img{
    		width: 37px;
    		margin: 10px;
    	}
    	/deep/ span{
    		position: relative;
		    top: -18px;
		    font-size: 16px;
    	}
    }
    .menu-item{
    	/deep/ .img{
    		width: 25%;
    		
		    display: inline-block;
		    position: relative;
		    top: -18px;
    	}
    	/deep/ .button_groups{
    		display: inline-block;
    		width: 75%;
    		/deep/ .inlien-btn{
    			margin: 10px auto;
    			display: block;
    			 
    		}
    		.inlien-btn > span{
    			font-size: 20px;
    		}
    		/deep/ .line{
    			margin: 3px 10px;
			    width: 45%;
			    display: inline-block;
			    border: 0.5px dashed rgba(0, 0, 0, 0.28);
    		}
    		
    	}
    }
</style>
