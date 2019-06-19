<template>
  <div id="app">
    <router-view />
    <Loading ref="loading"></Loading>
  </div>
</template>
<script>
import Loading from "@/components/Loading";
export default {
  data() {
    return {};
  },
  created() {
    window.__LOADING__ = this.showLoading;
  },
  methods: {
    showLoading(val) {
      this.$ref["loading"].showLoading = val;
    }
  },
  components: { Loading }
};
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
