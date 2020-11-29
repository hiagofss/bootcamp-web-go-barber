import React from 'react';

import AppProvider from './hooks/index';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
        {/* <SignUp /> */}
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
