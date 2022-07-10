<template>
  <div class="page-wrapper">
    <PageHeading>About</PageHeading>

    <div class="content-container">
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
            Doobie Brothers. You'll get some alternative & grunge from the 90's
            from Stone Temple Pilots, Sublime, Red Hot Chili Peppers & Bush.
            They'll bring up the energy level with some hard rock from artists
            like Staind & Metallica. When it's time to relax with a drink you'll
            get some blues from Hendrix, John Mayer & SRV. They have also been
            known to bust out acoustic guitars and jam on some Jim Croce, Billy
            Joel & Eric Church. To sum up, you're going to get some variety!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";
</script>

<style lang="scss" scoped>
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
  }
}
.copy-container {
  margin-top: 3rem;
  font-size: 17px;
  line-height: 1.5;

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
    }
  }
}
</style>
