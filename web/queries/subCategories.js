import gql from 'graphql-tag'

const SUB_CATEGORIES = gql`
    query {
      allCategory (where: { main: { neq: true }}){
        title
        image {
          asset {
            url
          }
        }
        slug {
          current
        }
      }
    }
`

export default SUB_CATEGORIES;
