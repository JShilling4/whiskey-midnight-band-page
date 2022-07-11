<template>
  <footer>
    <div class="content-wrapper">
      <i class="fab fa-facebook icon"></i>
      <ul>
        <li class="navlink"><a @click="scrollTo('about')">About</a></li>
        <li class="navlink"><RouterLink to="/gallery">Gallery</RouterLink></li>
        <li class="navlink"><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>

      <div class="bottom-bar">
        <p>Booking/Info: <span>redcabin44@gmail.com</span></p>
        <p>
          &copy; {{ new Date().getFullYear() }} All Rights Reserved - Whiskey
          Midnight
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

async function scrollTo(section: string): Promise<void> {
  if (route.name === "home") {
    window.location.hash = "";
    window.location.hash = `#${section}Section`;
  } else {
    await router.push("/");
    window.location.hash = "";
    window.location.hash = `#${section}Section`;
    router.replace("/");
  }
}
</script>

<style lang="scss">
footer {
  background-color: var(--banner-color);
  padding: 2rem 0 0;
  border-top: 2px solid var(--color-secondary);
}

.content-wrapper {
  text-align: center;

  .icon {
    color: var(--color-primary);
    font-size: 1.75rem;
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 1rem 0 1rem;
  }

  .bottom-bar {
    background-color: var(--color-primary);
    padding: 1rem 0 2rem;
    color: var(--banner-color);

    p:first-child {
      margin-bottom: 1rem;
      font-weight: 500;

      span {
        color: var(--orange);
      }
    }
    p:last-child {
      font-size: 12px;
    }
  }
}

.navlink {
  font-size: 14px !important;

  /* a {
    padding: 10px 25px !important;
  } */
}
</style>
