<template>
    <!-- 案件登记 -->
    <div class="dialog">
        <div>
            <input type="text" v-model="inputObj.contacts">
            <input type="text" v-model="inputObj.address">
            <el-button @click="modifySubmit">测试</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    @Component({
        props:['tableData','selectObj'],
        components: {},
        data() {
            return {
                inputObj:{}


            };
        },

        created() {


        },
        mounted() {
            //   window.onmousewheel = window.onmousewheel = scrollFunc;

        },
        methods: {

        }
    })
    export default class caseSupplement extends Vue {
        inputObj:{
            caseName:""
        }

        pList=[
            {
                test:'1111111111111'
            }
        ]
        modifySubmit(){
            this.pList.forEach((item,index) =>{
                console.log(item)
                if(item.code==this.inputObj.code){
//                    item.caseName=this.inputObj.caseName

                    this.pList.splice(index,1,this.inputObj)
                }

            });
            this.$emit('modify',this.pList)
        }
        initPara(row){
            console.log(row)
            this.inputObj=JSON.parse(JSON.stringify(row))
            this.pList=JSON.parse(JSON.stringify(this.tableData))
        }




    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
</style>