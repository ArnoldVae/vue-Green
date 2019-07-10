<template>
    <div>
        <el-row :gutter="20">
            <el-col :span=12>
                 <el-tabs v-model="activeName1" type="card">
                    <el-tab-pane :label=item.label :name=item.label v-for="(item,index) in tabArr1" :key="index">
                        <el-transfer
                            style="text-align: left; display: inline-block"
                            v-model="item.transferValue"
                            :titles="['左边', '右边']"
                            @change="(value, direction, movedKeys)=> handleChange(value, direction, movedKeys,activeName1)"
                            :data="item.transferData">
                            <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
                        </el-transfer>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span=12>
                <el-tabs v-model="activeName2" type="card" >
                    <el-tab-pane :label=item.label :name=item.label v-for="(item,index) in tabArr2" :key="index">
                        <el-transfer
                            style="text-align: left; display: inline-block"
                            v-model="item.transferValue"
                            :titles="['左边', '右边']"
                            @change="(value, direction, movedKeys)=> handleChange(value, direction, movedKeys,activeName2)"
                            :data="item.transferData">
                            <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
                        </el-transfer>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
        <div>
            <el-button @click="getData">获取数据</el-button>
        </div>
        <el-row>
           <el-input type="textarea" :autosize="{ minRows: 4}" v-model="textarea"> </el-input>
        </el-row>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    @Component({
        name: "demo8",
        components: {},
        data() {
            return {
                 tabData:[
                    {key:'01',label:'备选项1',disabled:false},
                    {key:'02',label:'备选项2',disabled:false},
                    {key:'03',label:'备选项3',disabled:false},
                    {key:'04',label:'备选项4',disabled:false},
                    {key:'05',label:'备选项5',disabled:false},
                    {key:'06',label:'备选项6',disabled:false},
                    {key:'07',label:'备选项7',disabled:false},
                    {key:'08',label:'备选项8',disabled:false},
                    {key:'09',label:'备选项9',disabled:false},
                    {key:'10',label:'备选项10',disabled:false},
                    {key:'11',label:'备选项11',disabled:false},
                ],
                tabtransferValue:[]
            };
        },
        created() {
        },
        mounted() {
        },
        methods: {
        }
    })
    export default class Demo8 extends Vue {
        activeName1:String =  'leftTab1'
        activeName2:String =  'rightTab1'
        textarea:String =  ""
        tabArr1:Array<Object> = [
            {
                transferData:[
                    {key:'01',label:'备选项1',disabled:false},
                    {key:'02',label:'备选项2',disabled:false},
                    {key:'03',label:'备选项3',disabled:false},
                    {key:'04',label:'备选项4',disabled:false},
                    {key:'05',label:'备选项5',disabled:false},
                    {key:'06',label:'备选项6',disabled:false},
                    {key:'07',label:'备选项7',disabled:false},
                    {key:'08',label:'备选项8',disabled:false},
                    {key:'09',label:'备选项9',disabled:false},
                    {key:'10',label:'备选项10',disabled:false},
                    {key:'11',label:'备选项11',disabled:false},
                ],
                label:'leftTab1',
                transferValue:[],
            },
            {   transferData:[
                    {key:'01',label:'备选项1',disabled:false},
                    {key:'02',label:'备选项2',disabled:false},
                    {key:'03',label:'备选项3',disabled:false},
                    {key:'04',label:'备选项4',disabled:false},
                    {key:'05',label:'备选项5',disabled:false},
                    {key:'06',label:'备选项6',disabled:false},
                    {key:'07',label:'备选项7',disabled:false},
                    {key:'08',label:'备选项8',disabled:false},
                    {key:'09',label:'备选项9',disabled:false},
                    {key:'10',label:'备选项10',disabled:false},
                    {key:'11',label:'备选项11',disabled:false},
                ],
                label:'leftTab2',
                transferValue:[],
            },
            {   transferData:[
                    {key:'01',label:'备选项1',disabled:false},
                    {key:'02',label:'备选项2',disabled:false},
                    {key:'03',label:'备选项3',disabled:false},
                    {key:'04',label:'备选项4',disabled:false},
                    {key:'05',label:'备选项5',disabled:false},
                    {key:'06',label:'备选项6',disabled:false},
                    {key:'07',label:'备选项7',disabled:false},
                    {key:'08',label:'备选项8',disabled:false},
                    {key:'09',label:'备选项9',disabled:false},
                    {key:'10',label:'备选项10',disabled:false},
                    {key:'11',label:'备选项11',disabled:false},
                ],
                label:'leftTab3',
                transferValue:[],
            }
        ]
        tabArr2:Array<Object> = [
            {
                transferData:[
                    {key:'01',label:'备选项1',disabled:false},
                    {key:'02',label:'备选项2',disabled:false},
                    {key:'03',label:'备选项3',disabled:false},
                    {key:'04',label:'备选项4',disabled:false},
                    {key:'05',label:'备选项5',disabled:false},
                    {key:'06',label:'备选项6',disabled:false},
                    {key:'07',label:'备选项7',disabled:false},
                    {key:'08',label:'备选项8',disabled:false},
                    {key:'09',label:'备选项9',disabled:false},
                    {key:'10',label:'备选项10',disabled:false},
                    {key:'11',label:'备选项11',disabled:false},
                ],
                label:'rightTab1',
                transferValue:[],
            },
            {   transferData:[
                    {key:'01',label:'备选项1',disabled:false},
                    {key:'02',label:'备选项2',disabled:false},
                    {key:'03',label:'备选项3',disabled:false},
                    {key:'04',label:'备选项4',disabled:false},
                    {key:'05',label:'备选项5',disabled:false},
                    {key:'06',label:'备选项6',disabled:false},
                    {key:'07',label:'备选项7',disabled:false},
                    {key:'08',label:'备选项8',disabled:false},
                    {key:'09',label:'备选项9',disabled:false},
                    {key:'10',label:'备选项10',disabled:false},
                    {key:'11',label:'备选项11',disabled:false},
                ],
                label:'rightTab2',
                transferValue:[],
            },
            {   transferData:[
                    {key:'01',label:'备选项1',disabled:false},
                    {key:'02',label:'备选项2',disabled:false},
                    {key:'03',label:'备选项3',disabled:false},
                    {key:'04',label:'备选项4',disabled:false},
                    {key:'05',label:'备选项5',disabled:false},
                    {key:'06',label:'备选项6',disabled:false},
                    {key:'07',label:'备选项7',disabled:false},
                    {key:'08',label:'备选项8',disabled:false},
                    {key:'09',label:'备选项9',disabled:false},
                    {key:'10',label:'备选项10',disabled:false},
                    {key:'11',label:'备选项11',disabled:false},
                ],
                label:'rightTab3',
                transferValue:[],
            }
        ]
        getData(){
            this.textarea = JSON.stringify(this.tabArr1)
            console.log(this.tabArr1)
        }
        handleChange(checkedArr,direction,movedKeys,tabName){
            // 将各个tab的数据汇集到一个数组中
            let tabsArr = []
            tabsArr.push(...this.tabArr1,...this.tabArr2)
            // 接受两个参数，1,tabName-当前标签name, 2,checkedArr-当前已经选择的项集合
            // 根据当前tab的选择项，告诉其他tab禁止选择
            tabsArr.forEach(el => {
                if(el.label!=tabName){
                    el.transferData.forEach(el1 => {
                        checkedArr.forEach(el2 => {
                            if(el2==el1.key){
                                el1.disabled = true
                            }
                        });
                    });
                    if(direction=='left'){
                        el.transferData.forEach(el1 => {
                            movedKeys.forEach(el2 => {
                                if(el2==el1.key){
                                    el1.disabled = false
                                }
                            });
                        }); 
                    }
                }
            });
        }
    }
</script>
<style lang="scss" scoped>

</style>
