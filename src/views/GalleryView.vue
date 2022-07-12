<template>
  <div class="page-wrapper">
    <PageHeading>Gallery</PageHeading>
    <section class="photos">
      <h2>Photos</h2>
      <div class="row">
        <div class="column">
          <img src="@/assets/images/road.jpg" />
          <img src="@/assets/images/band-setup.jpg" />
        </div>
        <div class="column">
          <img src="@/assets/images/both-stage1.jpg" />
        </div>
        <div class="column">
          <img src="@/assets/images/both-guitars-crp.jpg" />
        </div>
      </div>
    </section>
    <section class="videos">
      <h2>Videos</h2>
      <div>
        <div style="padding: 56.25% 0 0 0; position: relative">
          <iframe
            src="https://player.vimeo.com/video/729345636?h=e8717a0ae3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            title="Rehearsal Medley 1"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";
</script>

<style lang="scss" scoped>
.page-wrapper {
  min-height: calc(100vh - 22rem);
}

section {
  padding: 2rem;
  margin-bottom: 2rem;
  &.photos {
    background-color: var(--banner-color);
    h2 {
      color: var(--color-primary);
    }
  }
  &.videos {
    background-color: var(--color-primary);
    color: var(--banner-color);
  }
}
h2 {
  font-weight: 500;
  margin: 0 0 2rem;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    height: 3px;
    width: 6rem;
    left: 0;
    bottom: -10px;
    background-color: var(--orange);
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 33%;
  max-width: 33%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
