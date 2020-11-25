import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      {/* <SignIn /> */}
      <SignUp />
      <GlobalStyle />
    </>
  );
};

export default App;
