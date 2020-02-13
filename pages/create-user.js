/*eslint-disable*/
import { useState } from 'react';

export default function CreateUser() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    const bodyObj = {
      name,
      email,
      username,
      password,
    };

    fetch('/auth/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj),
    })
      .then((res) => res.json())
      .then((user_id) => {
        console.log('user ID: ', user_id);
      })
      .catch((err) => { 
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <div>
        <span>name: </span>
        <input 
          type="text"
          id="registerName"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <span>email: </span>
        <input
          type="text"
          id="registerEmail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <span>username: </span>
        <input
          type="text"
          id="registerUsername"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <span>password: </span>
        <input
          type="text"
          id="registerPassword"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>register</button>
    </div>
  );
}
