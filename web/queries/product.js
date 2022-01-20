import gql from 'graphql-tag'

const PRODUCT = gql`
    query Product($id: String){
      Product($id) {
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

export default PRODUCT;
