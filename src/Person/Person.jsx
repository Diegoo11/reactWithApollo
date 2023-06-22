/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { FIND_PERSON } from '../GraphPerson/queary';

function Person({ persons }) {
  const [getPerson, result] = useLazyQuery(FIND_PERSON);
  const [person, setPerson] = useState(null);

  const showPerson = (name) => {
    getPerson({
      variables: {
        nameToSearch: name,
      },
    });
  };

  useEffect(() => {
    if (result.data) {
      setPerson(result.data.findPerson);
    }
  }, [result]);

  if (person) {
    return (
      <div>
        <p>
          Name:
          {' '}
          {person.name}
        </p>
        <p>
          City:
          {' '}
          {person.city}
        </p>
        <p>
          Phone:
          {' '}
          {person.phone}
        </p>
        <p>
          Address:
          {' '}
          {person.address}
        </p>
        <button type="button" onClick={() => setPerson(null)}>Close</button>
      </div>
    );
  }

  if (persons === null) return null;

  return (
    <ul>
      {persons.map((p) => (
        <li key={p.id} onClick={() => { showPerson(p.name); }}>
          {p.name}
          {' '}
          {p.phone}
        </li>
      ))}
    </ul>
  );
}
export default Person;
