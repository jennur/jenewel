<template>
  <div>
    <header>
      <div class="logo">
        <img src="~/assets/jenewel-logo.png" alt="jenewel-logo"/>
      </div>
    </header>

    <main>
      <nuxt />
    </main>

    <footer>
      <div class="content">
        <div class="footer-col">
          <h2>Contact</h2>
          <ul>
            <li>
              <a class="contact-link" target="_blank" href="https://instagram.com/jenewel_">
                <fa
                  class="fa-icon"
                  :icon="['fab', 'instagram']"
                />
                <span class="link-title">Instagram</span>
              </a>
            </li>
            <li>
              <a class="contact-link" href="mailto:contact@jenewel.com">
                <fa
                  class="fa-icon"
                  :icon="['far', 'envelope']"
                />
                <span class="link-title">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">

  header {
    display: block;
    width: 100%;
    height: 50px;
    background-color: transparent;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.05);
    position: fixed;

    &::before {
      content: '';
      display: block;
      width: 100px;
      height: 100px;
      background-image: -webkit-linear-gradient(transparent 65%, rgba($bgColor,0.85) 35%);
      border-radius: 100%;
      box-shadow: 0px 5px 10px rgba(0,0,0,0.05);
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      backdrop-filter: blur(2px);
      z-index: 0;
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba($bgColor, 0.85);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      backdrop-filter: blur(2px);
    }

    .logo {
      display: block;
      width: 80px;
      height: 80px;
      position: absolute;
      top: 15px;
      left: 50%;
      transform: translateX(-53%);
      z-index: 2;


      img {
        width: inherit;
      }
    }
  }

  main {
    padding: calc(2*$spacingXl) $spacingSm;
  }

  footer {
    width: 100%;
    min-height: 100px;
    background-color: $secondaryBgColor;
    font-size: $fontSizeSm;

    .content {
      max-width: $tabletWidth;
      margin: 0 auto;

      .footer-col {
        padding: $spacingMd;

        h2 {
          font-size: $fontSizeMd;
          margin-bottom: $spacingSm;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: $spacingXs 0;

          li:not(:first-child) {
            margin: $spacingSm 0;
          }

          li {
            padding: 0px;

            .contact-link {
              display: inline-flex;
              align-items: center;
              color: $secondaryColor;
              text-decoration: none;
              cursor: pointer;
              transition: 0.2s;
            }

            .fa-icon {
              font-size: 18px;
              color: $secondaryColor;
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
          }
        }
      }
    }
  }
</style>
