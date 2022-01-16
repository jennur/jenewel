import gql from 'graphql-tag'

const mainCategories = gql`
    query {
      allCategory (where: { main: { eq: true }}){
        title
        slug {
          current
        }
      }
    }
`

export default mainCategories;
