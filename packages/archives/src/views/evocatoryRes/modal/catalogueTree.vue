<template>
    <diV>
        <h3>卷宗目录</h3>
        <div>
            <el-collapse v-for="list in caselist" :key="list.id" v-model="activeNames" @change="handleChange">

                <el-collapse-item :title="list.label" :name="list.id">
                    <el-tree
                            :data="list.children"
                            node-key="id"
                            default-expand-all
                            @node-drag-start="handleDragStart"
                            @node-drag-enter="handleDragEnter"
                            @node-drag-leave="handleDragLeave"
                            @node-drag-over="handleDragOver"
                            @node-drag-end="handleDragEnd"
                            @node-drop="handleDrop"
                            @node-click="showpdf"
                            :allow-drop="allowDrop"
                            :allow-drag="allowDrag">
                    </el-tree>
                </el-collapse-item>
            </el-collapse>
        </div>
        <el-button @click="closed">close</el-button>
    </diV>
</template>

<script>
    export default {
        data() {
            return {
                caselist: [{
                    id: 1,
                    label: '正卷',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        src:'http://127.0.0.1:8002/img/a.pdf',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1',
                            src:'http://127.0.0.1:8002/img/a.pdf',
                        }, {
                            id: 10,
                            label: '三级 1-1-2',
                            src:'http://127.0.0.1:8002/img/b.pdf'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '副卷',
                    children: [{
                        id: 5,
                        label: '二级 2-1',
                        src:'http://127.0.0.1:8002/img/a.pdf'
                    }, {
                        id: 6,
                        label: '二级 2-2',
                        src:'http://127.0.0.1:8002/img/a.pdf'
                    }]
                }, {
                    id: 3,
                    label: '其他卷',
                    children: [{
                        id: 7,
                        label: '二级 3-1',
                        src:'http://127.0.0.1:8002/img/a.pdf'
                    }, {
                        id: 8,
                        label: '二级 3-2',
                        src:'http://127.0.0.1:8002/img/a.pdf',
                        children: [{
                            id: 11,
                            label: '三级 3-2-1',
                            src:'http://127.0.0.1:8002/img/a.pdf'
                        }, {
                            id: 12,
                            label: '三级 3-2-2',
                            src:'http://127.0.0.1:8002/img/a.pdf'
                        }, {
                            id: 13,
                            label: '三级 3-2-3',
                            src:'http://127.0.0.1:8002/img/a.pdf'
                        }]
                    }]
                }]
            };
        },
        methods: {
            showpdf(data){
                if(!data.children){
                    console.log(data.src);
                    this.$emit('change-type', data.src) // 用来触发父组件定义的@change-type
                }else {
                    console.log(data.children)
                }


            },
            closed(){
                this.$emit('close')
            }
        },
        comments:{

        },
        components: {
        }
    }
</script>

<style scoped>
    .panel__body{
        padding: 3px 10px 3px 10px;
    }
</style>