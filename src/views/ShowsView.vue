<template>
  <div class="view-container">
    <PageHeading>Upcoming Shows</PageHeading>

    <div class="shows-container">
      <div class="table-wrapper">
        <ShowTable v-for="show in shows" :key="show.id" :show="show" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";
import ShowTable from "@/components/ShowTable.vue";

const shows = [
  {
    id: 2,
    date: {
      month: "NOV",
      day: "23",
    },
    venue: {
      name: "American Legion",
      website:
        "https://www.facebook.com/Menzie-Reece-American-Legion-Post-258-PiercetonIN-146925249081400/",
    },
    time: "6:00 pm",
    location: "Pierceton, IN",
    eventLink: null,
  },
  {
    id: 3,
    date: {
      month: "NOV",
      day: "25",
    },
    venue: {
      name: "Bar 13",
      website: "https://www.facebook.com/bar13Pierceton",
    },
    time: "9:00 pm",
    location: "Pierceton, IN",
    eventLink: null,
  },
];
</script>

<style lang="scss" scoped>
:deep(h1) {
  color: var(--banner-color);
}
.view-container {
  padding-top: 6rem;
  background-color: var(--color-primary);

  @media screen and (max-width: 1024px) {
    background-attachment: scroll;
  }
}

.table-wrapper {
  width: var(--wrapper-width);
  margin: 1rem auto 0;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-top: 0rem;
  }
  @media screen and (max-width: 556px) {
    padding: 0 0 4rem;
  }
  @media screen and (max-width: 430px) {
    padding: 0 0 4rem;
  }
}
.shows-container {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding: 0 3rem 6rem;

  @media screen and (max-width: 768px) {
    padding: 0 2rem 4rem;
  }
  @media screen and (max-width: 430px) {
    padding: 0 1rem 4rem;
  }
}
</style>
