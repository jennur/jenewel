import gql from 'graphql-tag'

const allProductsInCategory = ($categorySlug) => gql`
    query {
      allProduct(where: { slug: { current: { eq: $categorySlug}}}) {
        title
        slug {
          current
        }
        body{
          enRaw,
          nbRaw
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

export default allProductsInCategory;
