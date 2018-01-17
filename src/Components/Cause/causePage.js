import React from 'react';
import acsLogo from '../../assets/acs_logo.jpg';

const styles = {
    logo: {
        width: "200px"
    },
    paragraph: {
        "border-bottom": "dotted 2px"
    }
}

const causePage = (props) => {
    return (
        <div>
            <div>
                <img src={acsLogo} alt="img" style={styles.logo} className="img-responsive center-block" />
            </div>
            <div className="text-center">
                We are available 24 hours day, 7 days a week, at <a href="tel:1-800-227-2345"> 1-800-227-2345</a> or by visiting
                <a target="_blank" rel="noopener noreferrer" href="http://www.cancer.org"> Cancer.Org</a>
            </div>
            <div>
                <h1 className="text-center"><strong>What We Do</strong></h1>
                <p className="lead text-center">
                    While most people know us for our research, we do so much more. We attack cancer from every angle. We promote healthy lifestyles to help you prevent cancer. We research cancer and its causes to find more answers and better treatments. We fight for lifesaving policy changes. We provide everything from emotional support to the latest cancer information for those who have been touched by cancer. And we do it all 24 hours a day, 7 days a week.
                </p>
                <div style={styles.paragraph}></div>
                <div className="lead text-center">
                    <div className="col-md-6">
                        <h3><strong>Encouraging Prevention</strong></h3>
                        <p>We help you take steps to prevent cancer or find it at its earliest, most treatable stage.</p>
                    </div>
                    <div className="col-md-6">
                        <h3><strong>Providing Support</strong></h3>
                        <p>We are here for you every second of every day, to help you through every step of your cancer experience.</p>
                    </div>
                    <div className="col-md-6">
                        <h3><strong>Fostering Innovation</strong></h3>
                        <p>We fund and conduct lifesaving research that helps us better understand, prevent, and find cures for cancer.</p>
                    </div>
                    <div className="col-md-6">
                        <h3><strong>Fighting for What's Right</strong></h3>
                        <p>We work with lawmakers to pass laws to defeat cancer and rally communities worldwide to join our mission.</p>
                    </div>
                    <div className="col-md-6">
                        <h3><strong>Access to Care</strong></h3>
                        <p>We're working every day to free the world from the pain and suffering from cancer, but we can't continue our progress while millions of underinsured and uninsured Americans don't have access to lifesaving cancer care.</p>
                    </div>
                    <div className="col-md-6">
                        <h3><strong>Supporting Multicultural Communities</strong></h3>
                        <p>The American Cancer Society supports multicultural communities in a variety of ways to help reduce the risk of cancer.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default causePage;