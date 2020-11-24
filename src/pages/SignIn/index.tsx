import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Password" />

          <button type="submit">Entrar</button>

          <a href="forgot-password">Esqueci minha senha</a>
        </form>
        <a href="forgot-password">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
