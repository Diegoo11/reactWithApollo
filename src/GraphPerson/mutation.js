import { gql } from '@apollo/client';

export const CREATE_PERSON = gql`
  mutation($name: String!, $street: String!, $city: String!, $phone: String) {
    addPerson(
      name: $name,
      street: $street,
      city: $city,
      phone: $phone
    ) {
      name
      phone
    }
  }
`;

export const EDIT_PHONE = gql`
  mutation($name: String!, $phone: String!){
    editPhone(
      name: $name,
      phone: $phone
    ) {
      name
      phone
      id
    }
  }
`;
