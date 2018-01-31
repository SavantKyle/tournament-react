import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { StripeProvider } from 'react-stripe-elements';
import STRIPE_PUBLISHABLE from './constants/stripe';
import HomePage from './Components/Home/HomePage';
import Navigation from './Components/Navigation/Navigation';
import CausePage from './Components/Cause/CausePage';
import InformationPage from './Components/Information/InformationPage';
import SponsorPage from './Components/Sponsors/SponsorsPage';
import RegistrationPage from './Components/Register/RegistrationPage';
import PaymentSuccessPage from './Components/PaymentSuccess/PaymentSuccessPage';

class App extends React.Component {
    render() {
        return (
            <StripeProvider apiKey={STRIPE_PUBLISHABLE}>
                <Router>
                    <div className="container-fluid">
                        <div className="navbar-default">
                            <Navigation />
                        </div>
                        <div className="body-content">
                            <Switch>
                                <Route exact path="/home" component={HomePage} />
                                <Route path="/cause" component={CausePage} />
                                <Route path="/sponsors" component={SponsorPage} />
                                <Route path="/information" component={InformationPage} />
                                <Route path="/register" component={RegistrationPage} />
                                <Route path="/success" component={PaymentSuccessPage} />
                                <Route path="/" render={() => <Redirect to="/home" />} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </StripeProvider>
        );
    }
}

export default App;