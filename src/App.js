import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './ThemeForStyledComponents';
import Header from './components/Header';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Header/>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
