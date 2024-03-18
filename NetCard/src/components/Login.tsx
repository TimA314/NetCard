import { Key } from '@mui/icons-material';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { setPrivateKey } from '../stores/userStore';

const Login = () => {
  const [privateKeyInput, setPrivateKeyInput] = useState('');
  
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Private Key:", privateKeyInput);
    setPrivateKey(privateKeyInput);
  }
  
  return (

    <Box 
      component="form"
      autoComplete="off"
      onSubmit={handleLogin}
      className="card">
        <h1>NETCARD</h1>
        <TextField
          id="privateKey"
          placeholder="Private Key"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Key />
              </InputAdornment>
            ),
          }}
          value={privateKeyInput}
          onChange={(e) => setPrivateKeyInput(e.target.value)}
        />
        <Button type="submit">Login</Button>
        <p className="read-the-docs">
        Powered By NOSTR
      </p>
    </Box>
  );
};

export default Login;