<template>
  <div>
      <div class="copyright">
            2018 © XXXXXX信息中心版权所有
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.copyright{
    text-align: left;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: #EEEEEE;
    width: 97%;
    height: 30px;
    padding-left: 3%;
    line-height: 30px;
    font-size: 12px
}
</style>