<template>
  <div class="menu-wrapper">menu-wrapper</div>
</template>

<script>

export default {
  name: 'SidebarItem',
  components: {},
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {

  }
}
</script>
