<template>
  <div class="body-wrapper">
    <TheHeader />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
</script>

<style lang="scss">
@import "sass/styles";

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: "Roboto", sans-serif;
}

ul {
  list-style: none;
}

a {
  color: #fff;
  text-decoration: none;
}

.page-wrapper {
  width: var(--wrapper-width);
  margin: 6rem auto 0;
  color: #fff;
  padding: 0 4rem 8rem;

  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
  @media screen and (max-width: 430px) {
    padding: 0 1rem;
  }
}

.body-wrapper {
  min-height: 100vh;
  background: radial-gradient(
    var(--bg-secondary),
    var(--bg-secondary),
    var(--bg-primary)
  );
  background-size: cover;
}
</style>
