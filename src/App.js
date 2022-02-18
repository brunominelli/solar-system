import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    const headline = 'Titulo';
    return (
      <>
        <Header />
        <SolarSystem />
        <Title headline={ headline } />
      </>
    );
  }
}

export default App;
