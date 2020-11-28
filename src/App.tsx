import React from 'react';

import { AuthProvider } from './hooks/AuthContext';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
        {/* <SignUp /> */}
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
