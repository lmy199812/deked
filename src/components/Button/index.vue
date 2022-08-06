<template>
  <el-button class="btn" size="small" :icon="icon">{{ name }}</el-button>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },

  created() {},

  methods: {}
}
</script>

<style scoped>
.btn {
  width: 80px;
  height: 36px;
  font-size: 14px;
  background-color: #ff7830;
  color: #fff;
}
</style>
