import gql from 'graphql-tag'

const MAIN_CATEGORIES = gql`
    query {
      allCategory (where: { main: { eq: true }}){
        title
        image {
          asset {
            url
          }
        }
        slug {
          current
        }
        children {
           title
           slug {
             current
           }
        }
      }
    }
`

export default MAIN_CATEGORIES;
