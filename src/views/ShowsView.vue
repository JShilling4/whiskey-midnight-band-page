<template>
  <div class="view-container">
    <PageHeading>Upcoming Shows</PageHeading>

    <div class="shows-container">
      <div class="table-wrapper">
        <!-- <table class="shows-table">
          <tbody>
            <tr>
              <td class="first" width="150">
                <div class="date-container">
                  <div class="date-container__text">
                    <span class="month">AUG </span>
                    <span class="day">13</span>
                  </div>
                </div>
              </td>
              <td width="250" class="venue-name">
                <a
                  href="https://www.facebook.com/bar13Pierceton"
                  target="_blank"
                  referrerpolicy="no-referrer"
                  >Bar 13</a
                >
              </td>
              <td width="200">8-11pm</td>
              <td>Pierceton, IN</td>
              <td class="last" align="right">
                <a
                  href="https://www.facebook.com/events/568412051390453/?ref=newsfeed"
                  target="_blank"
                  referrerpolicy="no-referrer"
                  ><i class="fab fa-facebook"></i
                ></a>
              </td>
            </tr>
          </tbody>
        </table> -->

        <!-- <table class="shows-table">
          <tbody>
            <tr>
              <td class="first" width="150">
                <div class="date-container">
                  <div class="date-container__text">
                    <span class="month">AUG </span>
                    <span class="day">27</span>
                  </div>
                </div>
              </td>
              <td width="250" class="venue-name">
                <a
                  href="https://www.facebook.com/lakelifebarandgrill"
                  target="_blank"
                  referrerpolicy="no-referrer"
                  >Lakelife Bar & Grill</a
                >
              </td>
              <td width="200">7:30-10:30pm</td>
              <td>Warsaw, IN</td>
              <td class="last" align="right">
                <a
                  href="https://www.facebook.com/events/345714774392893?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D"
                  target="_blank"
                  referrerpolicy="no-referrer"
                  ><i class="fab fa-facebook"></i
                ></a>
              </td>
            </tr>
          </tbody>
        </table> -->

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
    id: 1,
    date: {
      month: "SEP",
      day: "3",
    },
    venue: {
      name: "Jellystone Park",
      website: "https://piercetonjellystone.com/weekend-activities/",
    },
    time: "8-11pm",
    location: "Pierceton, IN",
    eventLink: null,
  },
  {
    id: 2,
    date: {
      month: "NOV",
      day: "25",
    },
    venue: {
      name: "Bar 13",
      website: "https://www.facebook.com/bar13Pierceton",
    },
    time: "Time to be determined",
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
