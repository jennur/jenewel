import gql from 'graphql-tag'

const ALL_CATEGORIES = gql`
    query {
      allCategory{
        title
        children {
          title
          slug {
            current
          }
        }
        slug {
          current
        }
      }
    }
`

export default ALL_CATEGORIES;
