/*eslint-disable*/
import { useState } from 'react';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    const bodyObj = {
      username,
      password,
    }

    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj),
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <span>username: </span>
        <input
          type="text"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <span>password: </span>
        <input
          type="text"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleLogin}>submit</button>
    </div>
  );
}
