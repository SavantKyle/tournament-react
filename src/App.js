import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './Components/Home/homePage';
import Navigation from './Components/Navigation/navigation';
import CausePage from './Components/Cause/causePage';
import InformationPage from './Components/Information/informationPage';
import SponsorPage from './Components/Sponsors/sponsorsPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="container-fluid">
                        <Navigation />
                    </div>
                    <div className="body-content">
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route path="/cause" component={CausePage} /> 
                            <Route path="/sponsors" component={SponsorPage} /> 
                            <Route path="/information" component={InformationPage} />
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;