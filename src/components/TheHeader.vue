<template>
  <header class="outer-wrapper">
    <nav class="wrapper">
      <RouterLink class="logo" to="/">
        <!-- <img class="logo" src="@/assets/images/logo.png" alt="" /> -->
        <span class="logo__text"
          ><span class="txt-orange">W</span
          ><span class="txt-white">M</span></span
        >
      </RouterLink>
      <ul v-if="showMenu" class="navlink-container">
        <li class="navlink">
          <RouterLink to="/shows">Shows</RouterLink>
        </li>
        <li class="navlink">
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li class="navlink">
          <RouterLink to="/gallery">Gallery</RouterLink>
        </li>
        <li class="navlink">
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
        <li class="navlink fb">
          <a
            href="https://www.facebook.com/Whiskey-Midnight-103502742358240"
            target="_blank"
            rel="noreferrer"
            ><i class="fa-brands fa-facebook"></i
          ></a>
        </li>
      </ul>
      <i class="fas fa-bars menu-toggle" @click="toggleMenu"></i>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

const showMenu = ref(true);
const windowWidth = ref(window.innerWidth);

const route = useRoute();

watch(
  () => route.path,
  () => {
    if (windowWidth.value <= 768) showMenu.value = false;
  },
  { immediate: true }
);

onMounted((): void => {
  window.addEventListener("resize", onResize);
  if (windowWidth.value <= 768) showMenu.value = false;
});

onUnmounted((): void => {
  window.removeEventListener("resize", onResize);
});

function onResize(): void {
  windowWidth.value = window.innerWidth;
  console.log(window.innerWidth);
  windowWidth.value >= 769 ? (showMenu.value = true) : (showMenu.value = false);
}

function toggleMenu(): void {
  showMenu.value = !showMenu.value;
}
</script>

<style lang="scss" scoped>
.outer-wrapper {
  background-color: var(--banner-color);
  border-bottom: 3px solid var(--color-secondary);
}

.wrapper {
  position: relative;
  width: 100%;
  z-index: 100;
  height: 70px;
  margin: 0 auto;
  background-color: var(--banner-color);
}

.logo {
  position: absolute;
  top: 7px;
  left: 20px;
  color: #fff;
  opacity: 1;
  padding: 5px 10px;

  @media screen and (max-width: 430px) {
    left: 8px;
  }

  &__text {
    font-size: 2.5rem;

    .txt-white {
      background: var(--text-gradient-primary);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}

nav {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

.navlink-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 4.55rem;
    background-color: var(--banner-color);
    right: 0;
    padding: 1rem 0;
    height: unset;
    width: 10rem;
    display: block;
  }

  .navlink {
    position: relative;
    height: 100%;
    letter-spacing: 2px;
    font-weight: 300;
    font-size: 17px;
    text-align: right;

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
    }

    .router-link-active {
      position: relative;
      opacity: 1;

      &:after {
        position: absolute;
        content: "";
        top: 35px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999999;
        height: 2px;
        width: 60%;
        background-color: var(--orange);
        @media screen and (max-width: 768px) {
          right: 35px;
          left: initial;
          top: 38px;
          transform: initial;
        }
      }
    }

    &.fb {
      font-size: 25px;
    }
  }
}

.menu-toggle {
  display: none;
  position: absolute;
  right: 2rem;
  font-size: 2rem;
  color: var(--color-primary);

  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 430px) {
    right: 15px;
  }
}
</style>
