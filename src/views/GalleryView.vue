<template>
  <div class="page-wrapper">
    <PageHeading>Gallery</PageHeading>
    <section class="photos">
      <h2>Photos</h2>
      <div class="row">
        <div class="column">
          <img src="@/assets/images/road.jpg" />
          <img src="@/assets/images/bar13/081322/bar13-81322-1.jpg" />
          <img src="@/assets/images/bar13/081322/bar13-81322-4.jpg" />
        </div>
        <div class="column">
          <img src="@/assets/images/bar13/081322/bar13-81322-2.jpg" />
          <img src="@/assets/images/both-stage1.jpg" />
          <img src="@/assets/images/bar13/081322/bar13-81322-6.jpg" />
        </div>
        <div class="column">
          <img src="@/assets/images/both-guitars-crp.jpg" />
          <img src="@/assets/images/bar13/081322/bar13-81322-3.jpg" />
        </div>
        <div class="column">
          <img src="@/assets/images/bar13/081322/bar13-81322-7.jpg" />
          <img src="@/assets/images/bar13/081322/bar13-81322-5.jpg" />
        </div>
      </div>
    </section>
    <section class="videos">
      <h2>Videos</h2>
      <div class="row">
        <div class="column">
          <iframe
            src="https://www.youtube.com/embed/xL7MGaitW38"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="column">
          <iframe
            src="https://www.youtube.com/embed/VStyO2zKt_Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="column">
          <iframe
            src="https://www.youtube.com/embed/8p1y4vyc9-o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="column">
          <iframe
            src="https://www.youtube.com/embed/KbrpYZJKtyk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <!-- <div style="padding: 56.25% 0 0 0; position: relative">
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
        </div> -->
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
  max-width: 1400px;
  width: initial;
}

section {
  padding: 2rem;
  margin-bottom: 2rem;
  &.photos {
    border: 2px solid var(--color-secondary);
    background-color: var(--banner-color);
    h2 {
      color: var(--color-primary);
    }
  }
  &.videos {
    border: 2px solid var(--color-secondary);
    background-color: var(--color-primary);
    color: var(--banner-color);

    .column {
      flex: 33%;
      max-width: 400px;
    }

    @media screen and (max-width: 1024px) {
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
  flex: 25%;
  /* max-width: 300px; */
  padding: 0 4px;
}

.column img,
.column iframe {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

iframe {
  height: 315px;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  section {
    padding: 2rem 1rem;
  }
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
