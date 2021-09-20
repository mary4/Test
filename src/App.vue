<template>
  <div>
    <router-link to="/main" class="small-typo"
      >Get random joke about Chuck Norris!</router-link
    >
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.content {
  margin-top: 20px;
}
.small-typo {
  font-size: 15px;
  font-style: normal;
  color: black;
}
</style>
