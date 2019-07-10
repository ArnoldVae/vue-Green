<template>
    <div>
        <div id="paper" class="paper"></div>

        <div class="modal fade searchpanel" id="detailModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="modalTitle">详细信息</h4>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import zTree from '../../components/tree.vue'
    // 暂时先写死模拟的tree数据
    const trees = require("./treeJson.json");
    const _ = require('vue-lodash')
    const joint = require('jointjs')
    console.log(_)

    @Component({
        name: "demo5",
        components: {
            zTree
        },
        data() {
            return {

            };
        },
        created() {},
        mounted() {
            console.log(joint)
        },
        methods: {}
    })
    export default class Demo extends Vue {
        mounted(){
            var graph = new joint.dia.Graph();

            var ElementView = joint.dia.ElementView.extend({
                pointerdown: function () {
                    this._click = true;
                    joint.dia.ElementView.prototype.pointerdown.apply(this, arguments);
                },
                pointermove: function(evt, x, y) {
                    this._click = false;
                    joint.dia.ElementView.prototype.pointermove.apply(this, arguments);
                },
                pointerup: function (evt, x, y) {
                    if (this._click) {
                        // triggers an event on the paper and the element itself
                        this.notify('cell:click', evt, x, y);
                    } else {
                        joint.dia.ElementView.prototype.pointerup.apply(this, arguments);
                    }
                }
            });
            var LinkView = joint.dia.LinkView.extend({
                addVertex: function(evt, x, y) {},
                removeVertex: function(endType) {},
                pointerdown:function(evt, x, y) {}
            });

            //定义画布
            var paper = new joint.dia.Paper({
                el: $('#paper'),
                width: 1200,
                height: 600,
                gridSize: 1,
                model: graph,
                elementView: ElementView,
                linkView:LinkView
            });
            //定义形状
            var state = function(x, y, shape, background, text){
                var cell;
                if(shape==="rect"){
                    cell = new joint.shapes.basic.Rect({
                        position: { x: x, y: y },//坐标
                        size: { width: 140, height: 40 },//宽高
                        attrs: {
                            rect: {
                                fill: {
                                    type: 'linearGradient',
                                    stops: [
                                        { offset: '0%', color: background },//渐变开始
                                        { offset: '100%', color: '#fe8550' }//渐变结束
                                    ],
                                    attrs: { x1: '0%', y1: '0%', x2: '0%', y2: '100%' }
                                },
                                stroke: background,//边框颜色
                                'stroke-width': 1//边框大小
                            },
                            text: { text: text } //显示文字
                        }
                    });
                } else if(shape==="ellipse"){
                    cell = new joint.shapes.basic.Ellipse({
                        position: { x: x, y: y },//坐标
                        size: { width: 140, height: 40 },//宽高
                        attrs: {
                            ellipse: {
                                fill: {
                                    type: 'linearGradient',
                                    stops: [
                                        { offset: '0%', color: background },//渐变开始
                                        { offset: '100%', color: '#FFFFFF' }//渐变结束
                                    ],
                                    attrs: { x1: '0%', y1: '0%', x2: '0%', y2: '100%' }
                                },
                                stroke: background,//边框颜色
                                'stroke-width': 1//边框大小
                            },
                            text: { text: text } //显示文字
                        }
                    });
                }
                graph.addCell(cell);
                return cell;
            };
            //定义连线
            function link(source, target, label){
                var cell = new joint.dia.Link({
                    source: { id: source.id },
                    target: { id: target.id },
                    labels: [{ position: 0.5, attrs: { text: { text: label || '', 'font-weight': 'bold' } } }],
                    router: { name: 'manhattan' },//设置连线弯曲样式 manhattan直角
                    attrs: {
                        '.connection': {
                            stroke: '#333333',//连线颜色
                            'stroke-width': 2//连线粗细
                        },
                        '.marker-target': {
                            fill: '#333333',//箭头颜色
                            d: 'M 10 0 L 0 5 L 10 10 z'//箭头样式
                        }
                    }
                });
                graph.addCell(cell);
                return cell;
            }
            //创建元素
            var start = state(100,100,"ellipse","#00FFFF", "视频播放成功率");
            var state1 = state(300,100,"rect","#f7a07b", "GET响应成功率");
            var state2 = state(500,100,"rect","#f7a07b", "HTTP错误码分析");
            var state3 = state(700,50,"rect","#f7a07b", joint.util.breakText("TCP异常和其他原因",{width:80}));
            var state4 = state(700,300,"rect","#f7a07b", "4XX、5XX分析");
            var state5 = state(900,100,"rect","#f7a07b", "接口以上分析");

            //创建连线
            link(start, state1, "");
            link(state1, state2, "");
            link(state2, state3, "");
            link(state2, state4, "");
            link(state4, state5, "");
            link(state3, state5, "");

            //给所有元素添加点击事件
            paper.on('cell:click', function (e) {
                $("#detailModal .modal-body").html("");
                var arr = $("#"+e.id+" tspan");
                if(arr.length===1){
                    $("#detailModal .modal-body").append($(arr).html());
                    $("#detailModal").modal();
                } else{
                    var tmp="";
                    $.each(arr, function(k,v){
                        tmp+=$(v).html();
                    });
                    $("#detailModal .modal-body").append(tmp);
                    $("#detailModal").modal();
                }

            });
        }

    }

</script>
<style lang="scss" scoped>
    @import "~@/styles/queryList.scss";
    @import "~@/styles/joint.css";
    .adapt-height{
        position: relative;
        height: 100%;
    }
</style>

