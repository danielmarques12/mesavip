import React, { useState } from 'react';
import { api } from '../../services/api';
import {
  Container,
  Form,
  Input,
  SubmitInput,
  Text,
  Separator,
  CreateAccountLink,
} from './styles';

export default function SignUp() {
  const [user, setUser] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    return api.post('users/create', user).then(() => {
      window.location.href = '/signin';
    });
  };

  return (
    <Container>
      <Text>
        <h3>
          <span>MESAVIP</span> helps you making reservations in your favorite
          restaurants.
        </h3>
      </Text>

      <Form onSubmit={handleSubmit}>
        <Input
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
          placeholder="Name"
          type="text"
        />

        <Input
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
          placeholder="Email"
          type="email"
        />

        <Input
          value={user.cpf}
          onChange={(event) => setUser({ ...user, cpf: event.target.value })}
          placeholder="CPF"
          type="text"
        />

        <Input
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
          placeholder="Password"
          type="password"
        />

        <SubmitInput type="submit" value="Sign up" />

        <Separator />

        <CreateAccountLink>
          <a href="/signin"> Already have an account? Sign in </a>
        </CreateAccountLink>
      </Form>
    </Container>
  );
}
