<template>
  <div class="wrapper">
    <h1 class="band-name">
      <div class="first-word">Whiskey</div>
      <div class="second-word">MIDNIGHT</div>
    </h1>
  </div>
  <div class="copy-banner">
    <p>
      Whiskey Midnight is a duo of long-time musicians Wes Creekmore and Justin
      Shilling. Performing with the sound and energy of a full band, they cover
      music from many genres and time periods to provide an exciting lineup of
      songs. Whether you are in the mood to relax and unwind or cut loose and
      hit the dance floor, Whiskey Midnight has a great show planned for you.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  height: 930px;
  /* background-image: url("@/assets/images/IMG_3438.JPG"); */
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),
    url("@/assets/images/IMG_3438.JPG");
  background-size: cover;
  background-position: center -100px;
  background-repeat: no-repeat;

  @media screen and (max-width: 1024px) {
    height: 800px;
    background-size: cover;
  }

  @media screen and (max-width: 430px) {
    height: 700px;
  }

  @media screen and (max-width: 430px) {
    height: 600px;
  }
}

.band-name {
  position: absolute;
  top: 8rem;
  left: 54%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  opacity: 1;
  font-size: 60px;
  font-weight: 400;
  z-index: 99999999;

  @media screen and (max-width: 430px) {
    top: 6rem;
  }

  .first-word {
    font-family: "Yesteryear";
    position: relative;
    bottom: 40px;
    font-size: 6rem;
    color: var(--orange);
    background: linear-gradient(#ebae58, var(--orange), var(--orange));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    /* text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2); */

    @media screen and (max-width: 430px) {
      font-size: 4rem;
    }
  }
  .second-word {
    color: #fff;
    background: var(--text-gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -4px;
    margin-top: -4rem;
    margin-left: -14px;

    @media screen and (max-width: 430px) {
      font-size: 2.7rem;
    }
  }
}

.copy-banner {
  width: 100%;
  margin: -8.9rem auto 0;
  position: relative;
  z-index: 200;
  min-height: 9rem;
  background-color: var(--banner-color);
  padding: 1rem 3rem;
  text-align: center;
  line-height: 1.75;
  font-weight: 300;
  border-top: 3px solid var(--color-secondary);

  @media screen and (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 556px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media screen and (max-width: 430px) {
    margin-top: -8rem;
    padding-top: 1rem;
  }
}

p {
  width: var(--wrapper-width);
  color: var(--color-primary);
  color: rgba(255, 255, 255, 0.605);
  margin: 0 auto;
  font-size: 17px;
  font-weight: 300;
  @media screen and (max-width: 430px) {
    font-weight: 300;
  }
}
</style>
