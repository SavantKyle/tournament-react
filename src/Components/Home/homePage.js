import React from 'react';
import crawfishCupLogo from '../../assets/crawfishCupLogo.jpg';

const HomePage = (props) => {
    return (
        <div>
            <div className="col-md-4">
                <img src={crawfishCupLogo} alt="img" className="img-responsive" />
            </div>
            <div className="col-md-6 lead">
                <h1 className="text-center">
                    Welcome to the 2018 Crawfish Cup
                </h1>
                <br />
                <p className="text-center">
                    Thank you for your interest in this year's Crawfish Cup Tennis Tournament benefitting the American Cancer Society.
                    This year's event is scheduled for <strong>April 6-8, 2018</strong> at Highland Road Tennis Center.<br /><br />

                    Unlike previous years, this event is not going to be a mixed doubles tournament. Rather, the format will now consist of
                    three doubles pairs on level (team format). Please see the <strong>"Rules & Info"</strong> page for more specific details.  <br /><br />

                    As always we will be serving Friday night dinner, Saturday lunch, Saturday night crawfish boil, and Sunday lunch. <br /><br />

                    We are looking forward to yet another great event!
                </p>
            </div >
        </div >
    );
}

export default HomePage;