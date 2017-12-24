import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './Components/Home/homePage';
import Navigation from './Components/Navigation/navigationPage';
import CausePage from './Components/Cause/causePage';
import InformationPage from './Components/Information/informationPage';
import SponsorPage from './Components/Sponsors/sponsorsPage';
import NotFoundPage from './Components/NotFound/notFoundPage';

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
                            <Route exact path="/" component={HomePage} />
                            <Route path="/cause" component={CausePage} />
                            <Route path="/sponsors" component={SponsorPage} />
                            <Route path="/information" component={InformationPage} />
                            <Route path="/" component={NotFoundPage} /> 
                            {/* <Redirect from="/" to="/home" /> */}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;