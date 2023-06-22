import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ALL_PERSONS } from '../GraphPerson/queary';
import { CREATE_PERSON } from '../GraphPerson/mutation';

function PersonForm() {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createPerson({
      variables: {
        name,
        street,
        city,
        phone,
      },
    });

    setName('');
    setCity('');
    setStreet('');
    setPhone('');
  };

  return (
    <div>
      <h2>Create new person</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" value={name} onChange={(evt) => setName(evt.target.value)} />
        <input placeholder="Street" type="text" value={street} onChange={(evt) => setStreet(evt.target.value)} />
        <input placeholder="City" type="text" value={city} onChange={(evt) => setCity(evt.target.value)} />
        <input placeholder="Phone" type="text" value={phone} onChange={(evt) => setPhone(evt.target.value)} />
        <button type="submit">Add person</button>
      </form>
    </div>
  );
}

export default PersonForm;
