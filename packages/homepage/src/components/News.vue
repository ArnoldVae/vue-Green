<template>
  <div class="news">
    <div class="news_item1">
      最新动态
    </div>
    <div :style="{height:height*lineNum + 'px'}" class="news_item2 rollScreen_container" id ="rollScreen_container">
      <ul class="rollScreen_list" :style = {transform:transform} :class="{rollScreen_list_unanim:num===0}">
        <li class="rollScreen_once" v-for="(item,index) in contentArr" :key=index :style="{height:height+'px',lineHeight:height+'px'}">
          <span>{{item}}</span>
        </li>
        <li class="rollScreen_once" v-for="(item,index) in contentArr" :key=index+contentArr.length :style="{height:height+'px',lineHeight:height+'px'}">
          <span>{{item}}</span>
        </li>
        <slot name="slide"></slot>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    height: {
      default: 50,
      type: Number,
    }, // 每行元素的高度
    lineNum: {
      default: 1,
      type: Number
    }, // 显示行数
    contentArr: {
      default: [],
      type: Array
    }, // 简单文本轮播
    dLength: {
      default: null,
      type: Number
    }, // 自定义插槽内容的时候必须传自定义内容的长度
    time: {
      default: 3000,
      type: Number // 定义轮播切换速度
    }
  },
  data: function () {
    return {
      num: 0,
      loopTime: 3000,
    }
  },
  computed: {
    transform: function () {
      return 'translateY(-' + this.num * this.height + 'px)'
    }
  },
  beforeCreate: function () {
  },
  created: function () {
    let _this = this
    if ((this.contentArr != null && this.contentArr.length < this.lineNum) || (this.dLength != null && this.dLength < this.lineNum)) {
      console.error('轮播显示行数不能超过数据总行数')
    } else {
      // 先判断轮播切换速度，如果小于动画播放时间则提示切换速度过快
      if (_this.loopTime <= 1000) {
        console.warn('轮播切换速度过快，至少大于1s')
        _this.loopTime = 1000
      }
      // 两种轮播 第一种contentArr！= null 第二种自定义插槽
      if (_this.contentArr !== null) {
        setInterval(function () {
          if (_this.num !== _this.contentArr.length) {
            _this.num++
          } else {
            _this.num = 0
            setTimeout(function () {
              _this.num++
            }, 50)
          }
        }, _this.loopTime)
      } else if (_this.dLength !== null) {
        setInterval(function () {
          if (_this.num !== _this.dLength) {
            _this.num++
          } else {
            _this.num = 0
            setTimeout(function () {
              _this.num++
            }, 50)
          }
        }, _this.loopTime)
      } else if (_this.dLength === null && _this.dLength === null) {
        console.error('contentArr 和 dLength 均为空，rollScreen组件运行出错')
      }
    }
  },
  mounted: function () {
    // 复制一份slot的节点，如果直接用同名slot会报错
    if (this.dLength !== null) {
      for (let i = 0; i < this.dLength; i++) {
        this.$el.childNodes[0].appendChild(this.$slots.slide[i].elm.cloneNode(true))
      }
    }
  }
})


export default class News extends Vue {
   @Prop contentArr:Array<string>;
   public num:number = 0;
   public heigh:number = 0;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .news{
    display: flex;
    width: 100%;
    height: 50px;
    background-image: url('../assets/img/bg_news.png');
    background-size:cover;
    line-height: 50px;
    position: absolute;
    bottom:0;
    align-items: center; 
    .news_item1{
      flex: 1;
      min-width: 100px;
      font-size: 32px;
      color:white;
      font-style: italic;
      font-weight: 600;
      justify-content: center;
    }
    .news_item2{
      flex: 9;
      text-align: left;
      padding-left: 5%;
      font-size: 30px;
    }
  }
    .rollScreen_container{
    display: inline-block;
    position:relative;
    overflow: hidden;
  }
  .rollScreen_list{
    transition: 1s linear;
    padding:0;
    margin:0;
    list-style: none;
  }
  .rollScreen_list_unanim{
    transition: none
  }
  .rollScreen_once{
    list-style: none;
  }

</style>