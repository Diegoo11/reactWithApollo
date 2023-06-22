import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { EDIT_PHONE } from '../GraphPerson/mutation';

function EditPhone() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [editPhone, result] = useMutation(EDIT_PHONE);

  useEffect(() => {
    if (result.data && result.data.editPhone === null) {
      console.error('eror');
    }
  }, [result.data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    editPhone({
      variables: {
        name,
        phone,
      },
    });

    setPhone('');
    setName('');
  };
  return (
    <div>
      <h2>Edit phone by name</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" value={name} onChange={(evt) => setName(evt.target.value)} />
        <input placeholder="Phone" type="text" value={phone} onChange={(evt) => setPhone(evt.target.value)} />
        <button type="submit">Edit phone</button>
      </form>
    </div>
  );
}

export default EditPhone;
