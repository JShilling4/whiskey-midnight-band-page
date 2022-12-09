<template>
  <div class="wrapper">
    <h1 class="band-name">
      <div class="first-word">Whiskey</div>
      <div class="second-word">MIDNIGHT</div>
    </h1>
  </div>
  <div class="copy-banner">
    <p>
      Whiskey Midnight is a duo of long-time musicians Wes Creekmore and Justin
      Shilling. Performing with the sound and energy of a full band, they cover
      music from many genres and time periods to provide an exciting lineup of
      songs. Whether you are in the mood to relax and unwind or cut loose and
      hit the dance floor, Whiskey Midnight has a great show planned for you.
    </p>
  </div>
  <div id="showsSection">
    <ShowsView />
  </div>
</template>

<script setup lang="ts">
import ShowsView from "@/components/ShowsView.vue";

const title = ref("Whiskey Midnight");
const description = ref(
  "Whiskey Midnight is a duo of long-time musicians Wes Creekmore and Justin Shilling. Performing with the sound and energy of a full band, they cover music from many genres and time periods to provide an exciting lineup of songs."
);

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  height: 900px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),
    url("@/assets/images/stage-main.jpg");
  background-size: cover;
  background-position: center -50px;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media screen and (max-width: 1024px) {
    display: block;
    height: 950px;
    background-attachment: scroll;
  }

  @media screen and (max-width: 768px) {
    height: 800px;
  }

  @media screen and (max-width: 556px) {
    height: 715px;
    background-position: center center;
  }

  @media screen and (max-width: 430px) {
    height: 600px;
  }
}

.band-name {
  position: absolute;
  top: 8rem;
  left: 53%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  opacity: 1;
  font-size: 68px;
  font-weight: 400;
  z-index: 99999999;

  @media screen and (max-width: 1024px) {
    position: static;
    transform: initial;
    padding: 6rem 0 0 7rem;
  }

  @media screen and (max-width: 768px) {
    top: 6rem;
    padding-left: 2rem;
    padding-top: 4rem;
    font-size: 60px;
  }

  @media screen and (max-width: 430px) {
    left: 54%;
    top: 3rem;
  }

  .first-word {
    font-family: "Yesteryear";
    position: relative;
    bottom: 40px;
    font-size: 7rem;
    color: var(--orange);
    background: linear-gradient(#ebae58, var(--orange), var(--orange));
    background-repeat: no-repeat;
    background-origin: content-box;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 768px) {
      font-size: 6rem;
    }

    @media screen and (max-width: 430px) {
      font-size: 4rem;
    }
  }
  .second-word {
    color: #fff;
    background: var(--text-gradient-primary);
    background-repeat: no-repeat;
    background-origin: content-box;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -4px;
    margin-top: -4rem;
    margin-left: -14px;

    @media screen and (max-width: 430px) {
      font-size: 2.7rem;
    }
  }
}

.copy-banner {
  width: 100%;
  margin: -9.5rem auto 0;
  position: relative;
  z-index: 200;
  /* min-height: 9rem; */
  background-color: var(--banner-color-faded);
  padding: 2rem 3rem;
  text-align: center;
  line-height: 1.75;
  font-weight: 300;
  border-top: 3px solid var(--color-secondary);

  @media screen and (max-width: 1024px) {
    background-color: var(--banner-color);
  }

  @media screen and (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: -16rem;
  }

  @media screen and (max-width: 556px) {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: -7rem;
  }

  @media screen and (max-width: 430px) {
    margin-top: -8rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 15px;
  }
}

p {
  width: var(--wrapper-width);
  color: var(--color-primary);
  margin: 0 auto;
  font-size: 17px;
  font-weight: 300;
  @media screen and (max-width: 430px) {
    font-weight: 300;
    font-size: 15px;
    opacity: 0.8;
  }
}

#aboutSection {
  background: radial-gradient(
    var(--bg-secondary),
    var(--bg-secondary),
    var(--bg-primary)
  );
  background-size: cover;
}
</style>
