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
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="navlink">
          <a @click="scrollTo('shows')">Shows</a>
        </li>
        <li class="navlink">
          <a @click="scrollTo('about')">About</a>
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
            ><i class="fab fa-facebook"></i
          ></a>
        </li>
      </ul>
      <i class="fas fa-bars menu-toggle" @click="toggleMenu"></i>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";

const showMenu = ref(true);
const windowWidth = ref(window.innerWidth);

const route = useRoute();
const router = useRouter();

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
  windowWidth.value >= 769 ? (showMenu.value = true) : (showMenu.value = false);
}

function toggleMenu(): void {
  showMenu.value = !showMenu.value;
}

async function scrollTo(section: string): Promise<void> {
  if (route.name === "home") {
    window.location.hash = "";
    window.location.hash = `#${section}Section`;
    if (windowWidth.value < 769) showMenu.value = false;
  } else {
    await router.push("/");
    window.location.hash = "";
    window.location.hash = `#${section}Section`;
    router.replace("/");
    if (windowWidth.value < 769) showMenu.value = false;
  }
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

  @media screen and (max-width: 430px) {
    height: 60px;
  }
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

    @media screen and (max-width: 430px) {
      font-size: 2rem;
    }

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
  @media screen and (max-width: 430px) {
    top: 3.95rem;
    width: 12rem;
    display: block;
  }

  .fa-facebook {
    font-size: 1.5rem;
    color: var(--color-primary);
  }
}

.menu-toggle {
  display: none;
  position: absolute;
  right: 2rem;
  opacity: 0.8;
  font-size: 2rem;
  color: var(--color-primary);

  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 430px) {
    right: 15px;
    font-size: 1.5rem;
  }
}
</style>
