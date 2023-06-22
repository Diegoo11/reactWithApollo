import React from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      name
      city
    }
  }
`;

function FindPerson() {
  const [getPerson, result] = useLazyQuery(FIND_PERSON);

  return (
    <div />
  );
}

export default FindPerson;
