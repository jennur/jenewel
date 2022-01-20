import gql from 'graphql-tag'

const ALL_DISPLAY_IMAGES = gql`
    query {
      allDisplayImage {
        text
        image {
          asset {
            url
          }
        }
      }
    }
`

export default ALL_DISPLAY_IMAGES;
