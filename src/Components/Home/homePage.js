import React from 'react';
import crawfishCupLogo from '../../assets/2018_Crawfish_Cup_Logo.png';

const homePage = (props) => {
    return (
        <div>
            <div className="col-md-4">
                <img src={crawfishCupLogo} alt="img" className="img-responsive" />
            </div>
            <div className="col-md-6 lead">
                <h2 className="text-center text-danger">TOURNAMENT IS FULL</h2>
                <p className="text-center text-danger">
                    If you were intending on getting registered by the deadline but were unable to register please
                    send an email to <a href="mailto:kyle.savant@outlook.com">kyle.savant@outlook.com</a> and we will add your team to the waiting list.
                </p>
                <h1 className="text-center">
                    Welcome to the 2018 Crawfish Cup
                </h1>
                <br />
                <p className="text-center">
                    Thank you for your interest in this year's Crawfish Cup Tennis Tournament benefitting the American Cancer Society.
                    This year's event is scheduled for <strong>April 6-8, 2018</strong> at Highland Road Tennis Center.<br /><br />

                    Thanks to your support last year our tournament was honored with two awards <br />

                    <strong>Adult Tournament of the Year for the State of Louisiana </strong>
                    <br />
                    AND
                    <br />
                    <strong>Adult Tournament of the Year for the Southern Section</strong>

                    <br /><br />

                    As always we will be serving Friday night dinner, Saturday lunch, Saturday night crawfish boil, and Sunday lunch. <br /><br />

                    We really appreciate all of your participation and look forward to another fantastic tournament!
                </p>
            </div >
        </div >
    );
}

export default homePage;