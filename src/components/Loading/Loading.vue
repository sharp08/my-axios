<template>
  <transition name="fade">
    <div class="loading-container" v-if="showLoading">
      <slot>
        <img src="./img2.gif" alt="">
      </slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {
      showLoading: false
    };
  },
  created() {
    window.__LOADING__ = val => {
      if (Object.prototype.toString.call(val) !== "[object Boolean]") {
        console.warn("__LOADING__() 方法传入参数应为 Boolean 类型");
      }
      this.showLoading = val;
    };
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
