<template>
  <aside class="side-bar">
    <nav>
      <h2>Categories</h2>

      <ul class="categories">
        <li class="category" v-for="category in allCategory" :key="category.title">

          <div class="expand-wrap">
            <nuxt-link class="link" :to="`/shop/${category.slug.current}`">
              {{ category.title }}
            </nuxt-link>

            <span v-if="category.children.length" class="expand-button" @click="openSubList(category.slug.current)">
              <fa class="fa-icon" :icon="['fas', 'plus']"/>
            </span>
          </div>

          <ul v-if="subOpen(category.slug.current)" class="sub-categories">
             <li v-for="subCategory in category.children" :key="subCategory.title">
              <nuxt-link class="link"
                         :to="{
                            name: 'shop-category-sub_category',
                            params: {
                              category: category.slug.current,
                              sub_category: subCategory.slug.current
                            }
                          }"
              >
                {{ subCategory.title }}
              </nuxt-link>
             </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import MAIN_CATEGORIES from '../../queries/mainCategories';

export default {
  name: "SideBar",
  components: {
  },
  props: [''],
  data() {
    return {
      allCategory: [],
      openCategoryLists: []
    }
  },
  methods: {
    subOpen: function(slug) {
      let openMenus = this.$store.state.sideMenu.openMenus;
      return openMenus.indexOf(slug) > -1;
    },
    openSubList: function(slug){
      this.$store.dispatch('SET_OPEN_SIDE_MENU_ITEMS', slug);
    }
  },
  apollo: {
    allCategory: MAIN_CATEGORIES
  }

}
</script>
<style lang="scss" scoped>
  .side-bar {
    padding-right: $spacingMd;

    h2 {
      margin-top: 0;
      font-weight: 200;
    }
    .categories {
      list-style-type: none;
      padding: 0;

      .category{
        padding-bottom: $spacingXs;
        margin-bottom: $spacingSm;
        border-bottom: 1px solid rgba($secondaryColor, 0.5);

        .link {
          color: $textColor;
          font-weight: 300;
          transition: 0.3s;

          &:hover {
            border-bottom: none;
            color: $secondaryColor;
          }
        }

        .expand-wrap {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;

          .expand-button {
            width: 100%;
            cursor: pointer;

            &:hover {
              .fa-icon {
                color: rgba($secondaryColor, 0.7);
              }
            }

            .fa-icon {
              float: right;
              color: rgba($secondaryColor, 0.5);
              transition: 0.3s;
            }

          }
        }

        .sub-categories {
          list-style-type: none;
          padding: $spacingSm $spacingMd;

          li {
            margin-bottom: $spacingXs;
          }
        }
      }

    }
  }
</style>
