const _ = require('vue-lodash')
const joint = require('jointjs')
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