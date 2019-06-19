<template>
  <div class="home">
    <button @click="click('get')">get</button>
    <button @click="click('post')">post</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    click(type) {
      if (type === "get") {
        $http.get("abccc", { a: 1, b: 2 });
      } else if (type === "post") {
        $http.post("postDemo", { a: 1, b: 2 });
      }
    }
  }
};
</script>
<style>
button {
  height: 100px;
  width: 100px;
  margin: 100px;
  font-size: 30px;
}
</style>

