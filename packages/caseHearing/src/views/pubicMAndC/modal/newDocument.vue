<template>
    <!-- 步骤条 -->
    <div class="dialog">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="档案类型1" name="1">
                <ul class="doc-ul">W
                    <li v-for="(c,index) in inputList">
                        <el-row>
                            <el-col :span="2">
                                <h4>文档{{index+1}}</h4>
                            </el-col>
                            <el-col :span="18">
                                <el-input type="text" v-model="c.title"></el-input>
                            </el-col>
                            <el-col :span="4">
                                <el-button type="info" @click="delDoc(index,'1')"  size="mini" icon="el-icon-minus" circle></el-button>
                            </el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row>
                            <el-col :span="2"  style="opacity: 0">
                                <h4>文档</h4>
                            </el-col>
                            <el-col :span="18"  style="opacity: 0">
                                <el-input type="text"></el-input>
                            </el-col>
                            <el-col :span="4">
                                <el-button type="primary" @click="newDoc('1')"  size="mini" icon="el-icon-plus" circle></el-button>
                            </el-col>
                        </el-row>

                    </li>
                </ul>

            </el-collapse-item>
            <el-collapse-item title="档案类型2" name="2">
                <ul class="doc-ul">
                    <li v-for="(c,index) in inputList2">
                        <el-row>
                            <el-col :span="2">
                                <h4>文档{{index+1}}</h4>
                            </el-col>
                            <el-col :span="18">
                                <el-input type="text" v-model="c.title"></el-input>
                            </el-col>
                            <el-col :span="4">
                                <el-button type="info" @click="delDoc(index,'2')"  size="mini" icon="el-icon-minus" circle></el-button>
                            </el-col>
                        </el-row>

                    </li>
                    <li>
                        <el-row>
                            <el-col :span="2"  style="opacity: 0">
                                <h4>文档</h4>
                            </el-col>
                            <el-col :span="18"  style="opacity: 0">
                                <el-input type="text"></el-input>
                            </el-col>
                            <el-col :span="4">
                                <el-button type="primary" @click="newDoc('2')"  size="mini" icon="el-icon-plus" circle></el-button>
                            </el-col>
                        </el-row>

                    </li>
                </ul>
            </el-collapse-item>
        </el-collapse>







    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {},
        data() {
            return {
            };
        },

        created() {

        },
        mounted() {
        },
        methods: {}
    })
    export default class StateLine extends Vue {
        activeNames=['1']
        inputList=[
            {
                id:'1',
                title:''
            },
            {
                id:'2',
                title:''
            }
        ]
        inputList2=[
            {
                id:'1',
                title:''
            }
        ]
        handleChange(){

        }

        /**
         *新增文档
         */
        newDoc(target){
            if(target=='1'){
                this.inputList.push({title:''})
            }else{
                this.inputList2.push({title:''})
            }

        }

        /**
         * 删除文档
         */
        delDoc(index,target){
            if(target=='1'){
                this.inputList.splice(index,1)
            }else {
                this.inputList2.splice(index,1)
            }

        }


    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/collapse.scss";


    .sub-title{

}
    .doc-ul{
        list-style:none;
        position: relative;
        li{
            margin: 8px 0;
            h4{
                font-size: 12px;
                font-weight: normal;
                margin-top: 8px;
                margin-left: 4px;
                color: #bbbbbb;
            }
        }
    }
    .doc-item-btn{
        text-align: right;
        padding-right: 5.5%;
        padding-bottom: 4px;
    }
    .el-col{
        text-align: center;
        button{
            margin-top: 6px;
        }
    }





</style>