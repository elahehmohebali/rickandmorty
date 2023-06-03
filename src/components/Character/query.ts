import { gql } from '@apollo/client';

export const QUERY_CHARACTER = gql`
  query Character ($id: ID!) {
    character(id:$id) {
      id
      name
      status     
      species
      type
      gender
      image
      location {
        id
        name
        type
        dimension
        created
      }
    }
  }
`;