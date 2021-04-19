<template>
  <div class="container">

    <logo class="logo"/>
    <div class="info-splash">
      <div class="info-box">
        <h1>Nice to meet you! 💖 </h1>
        <p>
          This site is under construction. In the meantime, follow my instagram account to see my work. 💎
        </p>
        <a class="contact-link" target="_blank" href="https://instagram.com/jenewel_">
          <fa
            class="fa-icon"
            :icon="['fab', 'instagram']"
          />
          <span class="link-title">Instagram</span>
        </a>

        <a class="contact-link" href="mailto:contact@jenewel.com">
          <fa
            class="fa-icon"
            :icon="['far', 'envelope']"
          />
          <span class="link-title">Contact</span>
        </a>

      </div>
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
@import url('https://fonts.googleapis.com/css2?family=Quattrocento+Sans&display=swap');

body {
  background-color: #f7ffff;
  color: #292929;
  font-family: 'Quattrocento Sans', sans-serif;
}

h1 {
  font-size: 24px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
}

.logo {
  display: block;
  width: 200px;
  margin-bottom: 40px;
  margin-left: -21px;
}

.info-box {
  padding: 24px;
  background-color: #EFFFF9;
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
}
.contact-link {
  display: inline-flex;
  align-items: center;
  color: #ffc500;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 24px;
  margin-right: 24px;
}

.fa-icon {
  font-size: 25px;
  color: #ffc500;
  transition: 0.2s;
}

.contact-link:hover,
.contact-link:hover .fa-icon {
  color: #FFDA88;
}

.link-title {
  margin-left: 5px;
}

</style>
