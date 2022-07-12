<template>
  <div class="body-wrapper">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import { RouterView } from "vue-router";
</script>

<style lang="scss">
@import "sass/styles";

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: Verdana, sans-serif;
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
  margin: 3rem auto 0;
  color: #fff;
  padding: 4rem 4rem 6rem;

  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
  @media screen and (max-width: 556px) {
    padding: 0 2rem 4rem;
  }
  @media screen and (max-width: 430px) {
    padding: 0 1.5rem 2rem;
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

.navlink {
  font-family: Roboto, sans-serif;
  position: relative;
  height: 100%;
  letter-spacing: 2px;
  font-weight: 300;
  font-size: 16px;
  text-align: right;
  cursor: pointer;

  &:hover a {
    opacity: 1;
  }

  a {
    display: inline-block;
    padding: 10px 35px;
    opacity: 0.7;
    color: var(--color-primary);
    transition: opacity 0.3s;

    @media screen and (max-width: 768px) {
      padding: 15px 35px;
    }
    @media screen and (max-width: 430px) {
      padding: 15px 15px;
    }
  }

  &.fb {
    font-size: 25px;
  }
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) var(--banner-color);
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  background: var(--banner-color);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--color-primary);
  outline: 1px solid slategrey;
  border-radius: 10px;
}
</style>
