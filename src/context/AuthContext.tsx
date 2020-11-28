import React, { createContext, useCallback, useState } from 'react';
import api from '../services/apiClient';

interface AuthState {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    created_at: Date;
    updated_at: Date;
  };
}
interface SignCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: {
    id: string;
    name: string;
    email: string;
    created_at: Date;
    updated_at: Date;
  };
  signIn(credentials: SignCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    const { user, token } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
