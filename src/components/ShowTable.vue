<template>
  <table class="shows-table">
    <tbody>
      <tr>
        <td class="first" width="150">
          <div class="date-container">
            <div class="date-container__text">
              <span class="month">{{ show.date.month }} </span>
              <span class="day">{{ show.date.day }}</span>
            </div>
          </div>
        </td>
        <td width="250" class="venue-name">
          <a
            :href="show.venue.website"
            target="_blank"
            referrerpolicy="no-referrer"
            >{{ show.venue.name }}</a
          >
        </td>
        <td width="300">{{ show.time }}</td>
        <td>{{ show.location }}</td>
        <td class="last" align="right">
          <a
            v-if="show.eventLink"
            :href="show.eventLink"
            target="_blank"
            referrerpolicy="no-referrer"
            ><i class="fab fa-facebook"></i
          ></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps<{
  show: {
    date: {
      month: string;
      day: string;
    };
    venue: {
      name: string;
      website: string;
    };
    time: string;
    location: string;
    eventLink: string | null;
  };
}>();
</script>

<style lang="scss" scoped>
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
    border: 5px solid var(--color-secondary);
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
</style>
