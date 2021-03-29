<template>
  <div class="container">

    <logo class="logo"/>
    <div class="info-splash">
      <a class="insta-link" target="_blank" href="https://instagram.com/jenewel_">
        <fa
          :icon="['fab', 'instagram']"
          style="font-size: 25px; color: #FFDA88;"
        />
      </a>
      <p>
        Welcome to Jenewel! 💖 This site is under construction. In the meantime, follow my instagram account to see my work. 💎
      </p>
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div class="elfsight-app-00371448-37cb-463f-8189-413991693bfd"></div>
    </div>
  </div>
</template>

<script>
import Logo from '~/assets/jenewel-logo.svg';

export default {
  components: {
    Logo
  }
}
</script>

<style>
body {
  background-color: #F2FFFF;

}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 40px auto;
}

.logo {
  display: block;
  width: 300px;
  margin-bottom: 40px;
  margin-left: -21px;
}

.insta-link {
  display: inline-block;
  margin-bottom: 20px;
}

</style>
