<template>
  <div class="hello">
    <h1 @click="showMsg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "hello",
  props: {
    msg: String
  },
  methods:{
    showMsg(){
      alert(this.msg)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
