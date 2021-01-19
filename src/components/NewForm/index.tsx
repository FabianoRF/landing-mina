import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const url =
  'https://gmail.us7.list-manage.com/subscribe/post-json?u=b3a1a018004c07fe50d8bebfa&amp;id=830384d5b5';

const client = axios.create();

const NewForm: React.FC = () => {
  const [inputEmail, setInputEmail] = useState('');
  const history = useHistory();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log('iemail  ', inputEmail);

    const response = await client.post(`${url}&${inputEmail}&c=?`);

    console.log(response);

    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={inputEmail}
        onChange={e => setInputEmail(e.target.value)}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default NewForm;
