import React, {Component} from 'react';
import 'typeface-roboto';
import theme from './ThemeForStyledComponents';
import {ThemeProvider} from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    HashRouter
} from 'react-router-dom';
import AboutUsPage from './containers/AboutUsPage';
import BrandsPage from './containers/BrandsPage';
import HomePage from'./containers/HomePage';
import ContactsPage from'./containers/ContactsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const contacts = {
    phone: '+79602570045',
    email: 'brandandstock@gmail.com',
};

class App extends Component {
    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <div>
                        <HashRouter>
                            <div>
                                <Header
                                    firstLoadedRoute={window.location.href.replace(/(.+\w\/)(.+)/,"/$2")}
                                    contacts={contacts}
                                />

                                <Route exact path="/" component={() => <HomePage contacts={contacts} />} />
                                <Route exact path="/about-us" component={AboutUsPage}/>
                                <Route path="/contacts" component={() => <ContactsPage contacts={contacts}/> }/>
                                <Route path="/brands" component={BrandsPage}/>

                                <Footer
                                    contacts={contacts}
                                />
                            </div>
                        </HashRouter>
                    </div>
                </ThemeProvider>
            </div>
        );
    }
}

export default App;
