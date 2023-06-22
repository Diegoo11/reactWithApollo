import { React } from 'react';
import './App.css';
import { useQuery } from '@apollo/client';
import Person from './Person/Person';
import PersonForm from './Person/PersonForm';
import { ALL_PERSONS } from './GraphPerson/queary';
import EditPhone from './Person/EditPhone';

function App() {
  const { loading, data } = useQuery(ALL_PERSONS);

  return (
    <>
      <div />
      <h1>ApolloClient + React</h1>
      {
        loading
          ? <p>Cargando</p>
          : <Person persons={data.allPersons} />
      }
      <EditPhone />
      <PersonForm />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
