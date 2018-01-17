import React from 'react';
import { kickstandsKitchenLogo, sushiMasaLogo, theLondonerLogo } from '../../assets/logos';

const sponsorPage = () => {
    const styles = {
        kickstands: { width: "200px" },
        sushiMasa: { width: "80%", marginTop: "90px", marginBottom: "60px" },
        theLondoner: { width: "300px", marginTop: "20px" }
    }

    return (
        <div className="col-md-12 container-fluid">
            <div className="text-center">
                <h2>A very special thanks to all of the sponsors which help to make this event a success!</h2>
                <h3>Please click on logo to help support these great businesses!</h3>
            </div>
            <div className="panel panel-danger text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Rose Level Sponsors</h2>
                <div className="panel-body">

                </div>
            </div>
            <div className="panel panel-warning text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Bronze Level Sponsors</h2>
                <div className="panel-body">

                </div>
            </div>
            <div className="panel panel-success text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Food Sponsors</h2>
                <div className="panel-body">
                    <div className="col-md-4">
                        <a href="https://www.facebook.com/Kickstandskitchen/" target="_blank" rel="noopener noreferrer">
                            <img src={kickstandsKitchenLogo} alt="" style={styles.kickstands} className="img-responsive center-block" />
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="http://www.sushimasabatonrouge.com" target="_blank" rel="noopener noreferrer">
                            <img src={sushiMasaLogo} alt="" style={styles.sushiMasa} className="img-responsive center-block" />
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="http://londonerbr.com" target="_blank" rel="noopener noreferrer">
                            <img src={theLondonerLogo} alt="" style={styles.theLondoner} class="img-responsive center-block" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="panel panel-info text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Other Sponsors</h2>
                <div className="panel-body">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default sponsorPage;