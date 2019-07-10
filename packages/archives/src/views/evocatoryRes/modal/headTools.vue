<template>
        <div class="grid-content bg-purple-dark">
            <el-button-group style="display: flex;justify-content: flex-end;">
                <el-popover
                        placement="bottom"
                        width="150"
                        trigger="click"
                        v-model="visible"
                >

                    <tree></tree>
                    <el-button slot="reference" type="primary">目录设置</el-button>
                </el-popover>

                <el-dropdown>
                    <el-button type="primary">
                        添加附件<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>高拍仪</el-dropdown-item>
                        <el-popover
                                placement="left"
                                width="300"
                                height="100"
                                trigger="click">

                            <el-upload
                                    :file-list="fileList"
                            >
                                <el-button type="primary">正卷</el-button>
                                <el-button type="primary">副卷</el-button>
                            </el-upload>

                            <el-dropdown-item slot="reference">本地</el-dropdown-item>
                        </el-popover>

                        <el-dropdown-item>扫描</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <el-button type="primary" @click="pzvalue">预览卷宗</el-button>
            </el-button-group>
            6666555:{{parentValue}}
        </div>
</template>

<script>
    export default {
        props:["parentValue"],
        data(){
            const generateData3 = _ => {
                const data=[
                    {
                        desc:"卷宗1",
                        value:1
                    },
                    {
                        desc:"卷宗2",
                        value:2
                    },
                    {
                        desc:"卷宗3",
                        value:3
                    },
                    {
                        desc:"卷宗4",
                        value:4
                    },
                ];
                console.log(data)
                return data;
            };
            return{
                data3: generateData3()
            }
        },
        methods:{
            pzvalue(){
                console.log(parentValue)
            }
        },
    }
</script>

<style scoped>

</style>