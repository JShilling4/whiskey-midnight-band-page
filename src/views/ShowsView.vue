<template>
  <div class="page-wrapper">
    <PageHeading>Upcoming Shows</PageHeading>

    <div class="shows-container">
      <table class="shows-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Venue</th>
            <th>Time</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="date-container">
                <div class="date-container__text">
                  <span class="month">AUG </span>
                  <span class="day">13</span>
                </div>
              </div>
            </td>
            <td class="venue-name">
              <a
                href="https://www.facebook.com/bar13Pierceton"
                target="_blank"
                referrerpolicy="no-referrer"
                >Bar 13</a
              >
            </td>
            <td>8-11pm</td>
            <td>Pierceton, IN</td>
            <td>
              <a
                href="https://www.facebook.com/events/568412051390453/?ref=newsfeed"
                target="_blank"
                referrerpolicy="no-referrer"
                ><i class="fab fa-facebook"></i
              ></a>
            </td>
          </tr>

          <tr>
            <td>
              <div class="date-container">
                <div class="date-container__text">
                  <span class="month">AUG </span>
                  <span class="day">27</span>
                </div>
              </div>
            </td>
            <td class="venue-name">
              <a
                href="https://www.facebook.com/lakelifebarandgrill"
                target="_blank"
                referrerpolicy="no-referrer"
                >Lakelife Bar & Grill</a
              >
            </td>
            <td>7-10pm</td>
            <td>Warsaw, IN</td>
            <td>
              <a
                href="https://www.facebook.com/events/345714774392893?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D"
                target="_blank"
                referrerpolicy="no-referrer"
                ><i class="fab fa-facebook"></i
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";
</script>

<style lang="scss" scoped>
.shows-container {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("@/assets/images/band-setup.jpg");
  background-size: cover;
  background-position: center center;
  padding: 0 3rem 12rem;
  .shows-table {
    border-collapse: collapse;
    margin-top: 4rem;
    text-align: left;
    width: 100%;

    @media screen and (max-width: 556px) {
      margin-top: 2rem;
    }

    th {
      padding-bottom: 1rem;
      font-size: 20px;
      text-transform: uppercase;
      border-bottom: 1px solid rgba(255, 255, 255, 0.8);
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      letter-spacing: 2px;
    }
    td {
      font-weight: 200;
      font-size: 18px;
      padding: 1rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);

      &.center {
        text-align: center;
      }

      .fa-calendar {
        font-size: 70px;
        opacity: 0.4;
        color: var(--color-secondary);
      }

      &.venue-name a {
        color: var(--color-primary);
        font-weight: 500;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    .date-container {
      display: inline-block;
      position: relative;
      background-color: var(--orange);
      /* padding: 5px 15px; */
      height: 60px;
      width: 60px;
      border-radius: 50%;
      &__text {
        position: absolute;
        top: 13px;
        width: 100%;
        text-align: center;
        .month {
          display: block;
          font-weight: 400;
          font-size: 15px;
        }
        .day {
          font-size: 15px;
          font-weight: 600;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    thead tr {
      display: none;
    }

    tr {
      margin-bottom: 3rem;
    }

    .shows-table td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid rgba(238, 238, 238, 0.3);
      position: relative;
      padding-left: 50%;
      width: 100%;
    }

    td:nth-of-type(1) {
      padding-left: 0;
    }

    td:not(:nth-of-type(1)):before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    td:nth-of-type(1):before {
      padding-left: 0;
    }
    td:nth-of-type(2):before {
      content: "Venue";
    }
    td:nth-of-type(3):before {
      content: "Time";
    }
    td:nth-of-type(4):before {
      content: "Location";
    }
  }
}
</style>
