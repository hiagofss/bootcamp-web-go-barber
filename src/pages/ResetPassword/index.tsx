import React, { useCallback, useRef } from 'react';
import { FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().min(6, 'Senha obrigatória'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password')],
            'Confirmação incorreta',
          ),
        });

        await schema.validate(data, { abortEarly: false });

        history.push('/');

        addToast({
          type: 'success',
          title: 'Seja bem vindo!',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao resetar senha',
          description:
            'Ocorreu um erro ao resetar a sua senha, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar senha</h1>
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Nova senha"
            />

            <Input
              icon={FiLock}
              name="password_confirmation"
              type="password"
              placeholder="Confirmação de senha"
            />

            <Button type="submit">Alterar senha</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default ResetPassword;
