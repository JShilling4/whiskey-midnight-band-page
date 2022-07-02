<template>
  <h1 class="page-heading">
    <slot></slot>
  </h1>
</template>

<style lang="scss" scoped>
h1 {
  /* background: var(--text-gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  font-weight: 400;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;
  font-size: 38px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
}
</style>
