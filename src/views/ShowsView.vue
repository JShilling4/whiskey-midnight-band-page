<template>
  <div class="view-container">
    <PageHeading>Upcoming Shows</PageHeading>

    <div class="shows-container">
      <div class="table-wrapper">
        <table class="shows-table">
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
        </table>

        <table class="shows-table">
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
              <td width="200">7-10pm</td>
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
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";
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

  .shows-table {
    border-collapse: collapse;
    text-align: left;
    width: 100%;
    border-radius: 10px;
    padding: 1rem 2rem 0;
    margin-bottom: 2rem;
    font-family: Roboto, sans-serif;

    @media screen and (max-width: 768px) {
      padding: 2rem 2rem;
      margin-bottom: 0;
    }

    @media screen and (max-width: 556px) {
      margin-top: 2rem;
    }
    @media screen and (max-width: 430px) {
      padding: 0;
    }

    tr {
      margin-bottom: 2rem;
      background-color: var(--banner-color);
      @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
    }
    td.first {
      padding: 2rem;
    }
    td.last {
      padding-bottom: 2rem;
    }

    td {
      font-weight: 300;
      font-size: 18px;
      padding: 2rem;
      border: none;

      @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
        font-size: 20px;
      }

      @media screen and (max-width: 430px) {
        padding: 1rem;
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

    .date-container {
      display: inline-block;
      position: relative;
      background-color: var(--orange);
      font-family: Roboto, sans-serif;
      height: 60px;
      width: 60px;
      border-radius: 50%;

      @media screen and (max-width: 768px) {
        height: 100px;
        width: 100%;
        border-radius: 0;
      }
      &__text {
        position: absolute;
        top: 13px;
        width: 100%;
        text-align: center;
        font-size: 15px;

        @media screen and (max-width: 768px) {
          font-size: 25px;
          top: 21px;
        }

        .month {
          display: block;
          font-weight: 400;
        }
        .day {
          font-weight: 600;
        }
      }
    }
  }

  td:nth-of-type(5) {
    font-size: 2rem;
  }
}
</style>
