<template>
  <div class="container">

    <logo class="logo"/>
    <div class="info-splash">
      <div class="info-box">
        <h1>Nice to meet you! 💖 </h1>
        <p>
          I make all jewelry by hand with sterling silver and silver/gold plated findings. Check out my <a href="https://www.etsy.com/shop/JenewelCrafts">Etsy shop</a> and follow me on Instagram to see my latest work.
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
  background-color: #F8FFFC;
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
  max-width: 900px;
  padding: 24px;
  background-color: #F5F5FF;
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
}

.info-box p {
  max-width: 700px;
  margin-top: 12px;
}

a {
  color: #9292FF;
  text-decoration: none;
}

a:hover {
  border-bottom: 2px solid #BAF4D8;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  color: #9292FF;
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
  color: #9292FF;
  transition: 0.2s;
}

.contact-link:hover,
.contact-link:hover .fa-icon {
  color: #adadff;
  border-bottom: none;
}

.link-title {
  margin-left: 5px;
}

</style>
