import { gql } from '@apollo/client';

export const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      phone
      id
    }
  }
`;

export const PERSON_COUNT = gql`
query {
  personCount
}
`;

export const FIND_PERSON = gql`
query findPersonByName($nameToSearch: String!) {
  findPerson(name: $nameToSearch) {
    name
    city
    phone
    street
    address
  }
}
`;
