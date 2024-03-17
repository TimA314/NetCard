import { Key } from '@mui/icons-material';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';

const Login = () => {
  const [privateKey, setPrivateKey] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Private Key:", privateKey);
  }

  return (
    <Box 
      component="form"
      autoComplete="off"
      onSubmit={handleLogin}>
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
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
        />
        <Button type="submit">Login</Button>
    </Box>
  );
};

export default Login;