<template>
    <diV>
        <h3>卷宗目录</h3>
        <div class="grid-content bg-purple">
            <el-collapse v-model="activeNames" @change="handleChange">
                <div v-for="list in lists" :key="list.name" class="v-col--auto">
                    <el-collapse-item :title="list.title" :name="list.name" class="66677">
                        <div class="panel__body">
                            <vddl-list class="panel__body--list" :list="list.item" :horizontal="false">
                                <vddl-draggable class="panel__body--item" v-for="(item, index) in list.item" :key="item.id"
                                                :draggable="item"
                                                :index="index"
                                                :wrapper="list"
                                                :dragend="handleDragend"
                                                effect-allowed="move">
                                    <vddl-handle
                                            :handle-left="20"
                                            :handle-top="20"
                                            class="handle">
                                    </vddl-handle>
                                    {{item.label}}
                                </vddl-draggable>
                                <vddl-placeholder class="red">--》放至此处《--</vddl-placeholder>
                            </vddl-list>
                        </div>
                    </el-collapse-item>
                </div>

            </el-collapse>
        </div>
        <div>
            <el-collapse v-for="list in data6" :key="list.id" v-model="activeNames" @change="handleChange">

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

                            :allow-drop="allowDrop"
                            :allow-drag="allowDrag">
                    </el-tree>
                </el-collapse-item>
            </el-collapse>
        </div>
    </diV>
</template>

<script>
    import Vue from 'vue';
    import Vddl from 'vddl';
    Vue.use(Vddl);
    export default {
        data() {
            return {
                value5: [],
                activeNames: ['1','2'],
                lists: [
                    {
                        "title":"正卷",
                        "name":"name1",
                        "item":[
                            {
                                "id":1,
                                "label":"正卷1.pdf"
                            },
                            {
                                "id":2,
                                "label":"正卷2.pdf"
                            },
                        ],
                    },
                    {
                        "title":"副卷",
                        "name":"name2",
                        "item":[
                            {
                                "id":1,
                                "label":"副卷1.pdf"
                            },
                            {
                                "id":2,
                                "label":"副卷2.pdf"
                            },
                        ],
                    },
                    {
                        "title":"其他卷",
                        "name":"name3",
                        "item":[
                            {
                                "id":1,
                                "label":"其他卷1.pdf"
                            },
                            {
                                "id":2,
                                "label":"其他卷2.pdf"
                            },
                        ],
                    }
                ],
                data6: [{
                    id: 1,
                    label: '正卷',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '副卷',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '其他卷',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2',
                        children: [{
                            id: 11,
                            label: '三级 3-2-1'
                        }, {
                            id: 12,
                            label: '三级 3-2-2'
                        }, {
                            id: 13,
                            label: '三级 3-2-3'
                        }]
                    }]
                }]
            };
        },
        methods: {
        },
        comments:{

        },
        components: {
        }
    }
</script>

<style scoped>
    .vddl-list {
        min-height: 44px;
    }
    .red{
        color:red;
    }
    .panel__body{
        padding: 3px 10px 3px 10px;
    }
</style>