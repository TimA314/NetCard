import React, { useState } from 'react';

const Login = () => {
  const [privateKey, setPrivateKey] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Private Key:", privateKey);
  }
  
  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Private Key"
        value={privateKey}
        onChange={(e) => setPrivateKey(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;