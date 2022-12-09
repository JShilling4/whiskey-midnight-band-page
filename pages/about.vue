<template>
  <div class="page-wrapper">
    <PageHeading>About</PageHeading>

    <div class="content-container">
      <p class="top-copy">
        Wes Creekmore and Justin Shilling began playing music together 10+ years
        ago and have been friends ever since. Justin is a native of Syracuse,
        Indiana and has extensive studio experience and began playing guitar at
        a young age. Wes was born and raised in Pierceton, Indiana and was
        inspired to pick up the guitar from his late father Charlie Creekmore.
        Wes has been influenced by many styles but has a love for outlaw and
        retro country whereas Justin got his start playing in bands primarily
        focused in the rock genre. This makes for a great combination with the
        ability to cover many styles and sounds. We hope you will join us at a
        show and become part of the Whiskey Midnight fan base.
      </p>
      <div class="hero-container">
        <img src="@/assets/images/road.jpg" alt="" />
      </div>

      <div class="copy-container">
        <div class="point">
          <p class="question">
            How do two guys perform with the sound & energy of a full band?
          </p>
          <p class="answer">
            Wes & Justin add live electric & acoustic guitar with vocals to
            tracks that they pre-record - arranged with bass guitar and drums.
            Using pro-quality gear & state of the art technology, Whiskey
            Midnight is able to bring a unique sound that is a cross between
            listening in on a live studio session and attending an all-out rock
            show.
          </p>
        </div>

        <div class="point">
          <p class="question">
            What kind of music can I expect to hear if I come to your show?
          </p>
          <p class="answer">
            Your going to get down to some outlaw country from the likes of
            Waylon Jennings, Johnny Cash & more. You'll be singing & dancing to
            classic rock from The Allman Brothers, Tom Petty, CCR, Skynyrd & The
            Doobie Brothers. You'll get some nostalgic 90's era alternative from
            Stone Temple Pilots, Sublime, Red Hot Chili Peppers & Bush. They'll
            kick up the energy level with some hard rock from artists like
            Staind, AC/DC & Metallica. When it's time to relax with a drink
            you'll get some blues from Hendrix, John Mayer & SRV. They have also
            been known to break out acoustic guitars and jam on some Jim Croce,
            Billy Joel & Eric Church. To sum up, you're going to get some
            variety!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";

const title = ref("Whiskey Midnight - About");
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
.top-copy {
  line-height: 2;
  font-weight: 300;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.856);

  @media screen and (max-width: 430px) {
    margin-bottom: 1rem;
  }
}
.hero-container {
  float: left;
  margin: 0 2rem 2rem 0;
  height: 402px;
  img {
    max-height: 100%;
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    float: none;
    height: initial;
    margin: 0;
  }
}
.copy-container {
  margin-top: 3rem;
  font-size: 17px;
  line-height: 1.5;

  @media screen and (max-width: 430px) {
    margin-top: 1rem;
  }

  .point {
    margin-bottom: 3rem;

    .question {
      color: var(--color-primary);
      font-weight: 500;
      letter-spacing: 1px;
      margin-bottom: 1rem;
      font-weight: 500;
      font-size: 20px;
    }

    .answer {
      font-weight: 300;
      line-height: 1.75;
      color: var(--copy-white-faded);
    }
  }
}
</style>
