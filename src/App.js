import React, {Component} from 'react';
import 'typeface-roboto';
import theme from './ThemeForStyledComponents';
import {ThemeProvider} from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import HomePage from'./containers/HomePage';
import Header from './components/Header';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <div>
                        <Router>
                            <div>
                                <Header
                                    firstLoadedRoute={window.location.href.replace(/(.+\w\/)(.+)/,"/$2")}
                                />
                                <Route exact path="/" component={HomePage}/>
                                <Route path="/about-us" component={AboutUs}/>
                            </div>
                        </Router>
                    </div>
                </ThemeProvider>
            </div>
        );
    }
}

export default App;
