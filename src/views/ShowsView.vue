<template>
  <div class="view-container">
    <PageHeading>Upcoming Shows</PageHeading>

    <div class="shows-container">
      <div class="table-wrapper">
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
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";
</script>

<style lang="scss" scoped>
.view-container {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("@/assets/images/band-setup.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  padding-top: 6rem;
}

.table-wrapper {
  width: var(--wrapper-width);
  margin: 3rem auto 0;
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
  padding: 0 3rem 12rem;

  @media screen and (max-width: 768px) {
    padding: 0 2rem 4rem;
  }
  @media screen and (max-width: 430px) {
    padding: 0 1rem 4rem;
  }
  .shows-table {
    border-collapse: collapse;
    text-align: left;
    width: 100%;
    border-radius: 10px;
    padding: 1rem 2rem 0;

    @media screen and (max-width: 556px) {
      margin-top: 2rem;
    }
    @media screen and (max-width: 430px) {
      background-color: initial;
      padding: 0;
    }
    table {
      border-radius: 10px;
    }

    tr {
      @media screen and (max-width: 768px) {
        margin-bottom: 5rem;
      }
      background-color: rgba(0, 0, 0, 0.6);
    }

    th {
      padding: 2rem;
      font-size: 20px;
      text-transform: uppercase;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      letter-spacing: 2px;
      font-weight: 400;
    }
    td {
      font-weight: 200;
      font-size: 18px;
      padding: 2rem;
      /* border-bottom: 1px solid rgba(238, 238, 238, 0.3); */

      @media screen and (max-width: 430px) {
        padding: 1rem;
        /* border-bottom: none; */
      }

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

    tr td {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);

      /* @media screen and (max-width: 430px) {
        border-bottom: none;
      } */
    }

    tr:not(:last-child) td {
      border-bottom: none;

      @media screen and (max-width: 430px) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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

  td:nth-of-type(5) {
    font-size: 2rem;
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
      border: none;
      position: relative;
      padding-left: 50%;
      width: 100%;
    }

    td:nth-of-type(1) {
      padding-left: 30px;
      @media screen and (max-width: 430px) {
        padding-left: 15px;
      }
    }

    td:nth-of-type(5) {
      padding-left: 30px;
      border-bottom: none;
    }
    td:before {
      left: 30px;
    }

    td:not(:nth-of-type(1)):before {
      position: absolute;
      top: 50%;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      transform: translateY(-50%);
    }

    td:nth-of-type(2):before {
      content: "Venue:";
    }
    td:nth-of-type(3):before {
      content: "Time:";
    }
    td:nth-of-type(4):before {
      content: "Location:";
    }
  }
}
</style>
