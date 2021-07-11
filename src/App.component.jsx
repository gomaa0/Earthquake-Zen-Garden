import React from 'react';
import Header from './shared/components/Header/Header.component';
// eslint-disable-next-line no-unused-vars
import {defaultProps as headerDefaultProps} from './shared/components/Header/Header.component';
import './App.styles.scss';

function App() {
  return (
    <>
      <Header /*{...headerDefaultProps}*/ />
      <main></main>
    </>
  );
}

export default App;
