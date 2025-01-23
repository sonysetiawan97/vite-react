import React, { useState } from 'react';
import { login } from '../services/loginService';
import { LoginRequest } from '../types/LoginRequest';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const request: LoginRequest = { username, password };

    try {
      const response = await login(request);
      console.log('Logged in successfully:', response);
    } catch (err) {
      setError('Invalid username or password');
      console.error('err:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};
