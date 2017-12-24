import React from 'react';
import { Link } from 'react-router-dom'

const NavigationPage = () => (
        <nav className="navbar-default">
            <ul className="nav nav-pills nav-justified navbar-static-top">
                <li><Link to="/" activeClassName="active"><span className="fa fa-home"></span> Home</Link></li>
                <li><Link to="/cause" activeClassName="active"><span className="fa fa-heartbeat"></span> The Cause</Link></li>
                <li><Link to="/sponsors" activeClassName="active"><span className="fa fa-star"></span> Sponsors</Link></li>
                <li><Link to="/information" activeClassName="active"><span className="fa fa-info-circle"></span> Rules & Info</Link></li>
                <li>
                    <a href="http://www.facebook.com/groups/crawfishcuptennis" rel="noopener noreferrer" target="_blank">
                        <span class="fa fa-facebook-square"></span> Follow Us
                    </a>
                </li>
            </ul>
        </nav>
)
export default NavigationPage
