import { gql } from '@apollo/client';

export const QUERY_CHARACTER_LIST = gql`
  query CharacterList ($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status     
        species
        type
        gender
        image
        created
      }
    }
  }
`;