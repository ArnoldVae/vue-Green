<template>
    <!-- 结案登记-->
    <div class="form-main">
        <div class="form-container" id="test01" >
            <div class="form-container-title">
                <span>案件档案借阅审批单</span>
            </div>
            <div class="form-container-base">
                <div class="form-container-base-div border_bottom_none border-right_none"><span>姓名</span></div>
                <div class="form-container-base-div border_bottom_none border-right_none "><span></span></div>
                <div class="form-container-base-div border_bottom_none border-right_none"><span>单位</span></div>
                <div class="form-container-base-div1 border_bottom_none"><span></span></div>
            </div>
            <div class="form-container-text-area">
                <div class="form-container-text-area-st border-right_none border_bottom_none"><span><br><br>文<br><br><br>档<br><br><br>名<br><br><br>称</span></div>
                <div class="form-container-text-area-ed border_bottom_none"><span></span></div>
            </div>
            <div class="form-container-text-area">
                <div class="form-container-text-area-st border-right_none border_bottom_none"><span><br><br>领<br><br>导<br><br>审<br><br>批<br><br>意<br><br>见</span></div>
                <div class="form-container-text-area-ed border_bottom_none"><span>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</span></div>
            </div>
            <div class="form-container-text-area1">
                <div class="form-container-text-area-st border-right_none "><span><br><br>备<br><br><br>注</span></div>
                <div class="form-container-text-area-ed"><span></span></div>
            </div>

        </div>

        <div slot="footer" v-show="pageFlag!='total'" class="body-footer">
            <div class="footer-btn-grunp">
                <el-button type="primary" id="target" v-print="'#test01'">打印</el-button>
                <el-button type="success" >保存</el-button>
                <el-button >返回</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import Print from 'vue-print-nb'
    Vue.use(Print); //注册

    @Component({
        props:[],
        components: {},
        data() {
            return {
            };
        },

        created() {},
        mounted(){
            //   window.onmousewheel = window.onmousewheel = scrollFunc;
        },
        methods: {}
    })
    export default class caseSupplement extends Vue {
        mounted(){
        }
        goPrint(){
            this.$emit('closeCommonPrint','')
//            setTimeout(()=>{
//                document.getElementById('target').click()
//                this.$emit('closeCommonPrint','')
//            },1)
        }


    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/common.scss";
    @import "~@/styles/dialogBox.scss";
    /*控制表单项的公有样式*/
    @import "~@/styles/commonJWJW.scss";
    /deep//deep/.jwjw-el-tabs{
        .el-tabs__header{
            position: relative !important;

        }
    }
    .form-container{
        background: #ffffff;
        height: 1280px;
        width: 1000px;
        padding: 10px;
        .form-container-title{
            margin-top: 10px;
            text-align: center;
            span{
                font-size: 36px;
                font-weight: bold;
            }
        }
        .form-container-base{
            .form-container-base-div{
                float: left;
                width: 15%;
                border: 1px solid #000000;
                height: 80px;
                span{
                    font-size: 24px;
                    position: relative;
                    top: 36%;
                }
            }
            .form-container-base-div1{
                float: left;
                width: 55%;
                border: 1px solid #000000;
                height: 80px;
                span{
                    font-size: 24px;
                    position: relative;
                    top: 36%;
                }
            }
        }

        .form-container-text-area{
            .form-container-text-area-st{
                float: left;
                border: 1px solid #000000;
                width: 10%;
                span{
                    font-size: 24px;
                }
                height: 450px;

            }
            .form-container-text-area-ed{
                float: left;
                border: 1px solid #000000;
                width: 90%;
                span{
                    font-size: 24px;
                    position: relative;
                    top: 90%;
                    left: 28%;
                }
                height: 450px;
            }
        }
        .form-container-text-area1{
            .form-container-text-area-st{
                float: left;
                border: 1px solid #000000;
                width: 10%;
                height: 250px;
                span{
                    font-size: 24px;
                }

            }
            .form-container-text-area-ed{
                float: left;
                border: 1px solid #000000;
                width: 90%;
                height: 250px;
            }
        }
    }
    .form-main{
        padding: 0;
        background: #FFFFFF;
    }
    .file_title{
        margin: 30px;

    }

</style>