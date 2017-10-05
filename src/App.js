import React, {Component} from 'react';
import 'typeface-roboto';
import {ThemeProvider} from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import theme from './ThemeForStyledComponents';
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
                                <Route exact path="/" component={() => <h1>Home</h1>}/>
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
