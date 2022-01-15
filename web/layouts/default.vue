<template>
  <div>
    <header>
      <div class="logo">
        <img src="~/assets/jenewel-logo.png" alt="jenewel-logo"/>
      </div>
    </header>
    <nuxt />

    <footer>
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
    </footer>
  </div>
</template>

<style>

</style>
