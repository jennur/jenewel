<template>

<section>
        <div v-for="product in products" :key="product.name">
          {{ product.title }}
        </div>
</section>
</template>

<script>
import { groq } from "@nuxtjs/sanity";

import Logo from '~/assets/jenewel-logo.svg';

export default {
  components: {
    Logo
  },
  async asyncData({ $sanity }) {
    const query = groq`*[_type == "product"]`;
    const products = await $sanity.fetch(query).catch(error => console.log("Error:", error));
    return { products };
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

.logo img {
  width: inherit;
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

.button {
  display: block;
  width: max-content;
  background-color: #BAF4D8;
  color: #292929;
  padding: 12px 24px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 24px;
}

.button:hover {
  border-bottom: none;
  background-color: #b3f1d3;
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
