import gql from 'graphql-tag'

const ALL_PRODUCTS = gql`
    query {
      allProduct {
        title
        categories {
          title
          slug {
            current
          }
        }
        slug {
          current
        }
        defaultProductVariant {
          images {
            _key
            asset {
              url
            }
          }
          title
          price
        }
      }
    }
`

export default ALL_PRODUCTS;
