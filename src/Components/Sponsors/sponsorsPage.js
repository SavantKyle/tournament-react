import React from 'react';
import {
    kickstandsKitchenLogo, sushiMasaLogo, theLondonerLogo, pinnacleLogo, raisingCanesLogo, louisianaFishFryLogo,
    chimesLogo, cokeLogo, mansursLogo, ruffinosLogo, flemingsLogo, transformyxLogo, americanFactoryDirectLogo,
    calandroLogo, natashaEngleLogo, sonicLogo, republicFinanceLogo, laMadeleineLogo, deltaPhysicalTherapyLogo,
    reginellisLogo, miPadresLogo
} from '../../assets/logos';

const sponsorPage = () => {
    const styles = {
        kickstands: { width: "200px" },
        sushiMasa: { width: "80%", marginTop: "70px", marginBottom: "60px" },
        theLondoner: { width: "300px", marginTop: "20px" },
        pinnacle: { width: "375px" },
        flemings: { width: "400px" },
        raisingCanes: { width: "300px", marginTop: "40px" },
        chimes: { width: "350px", marginTop: "40px" },
        louisianaFishFry: { width: "300px", marginTop: "20px" },
        coke: { width: "300px", marginTop: "50px", marginBottom: "40px" },
        mansurs: { width: "400px", marginTop: "60px" },
        ruffinos: { width: "450px", marginTop: "0px" },
        calandro: { width: "300", marginTop: "80px" },
        transformyx: { width: "900px" },
        natashaEngle: { width: "400px", marginTop: "0px" },
        americanFactoryDirect: { width: "550px", marginTop: "110px" },
        delta: { width: "500px", marginTop: "20px" },
        sonic: { width: "400px", marginTop: "60px" },
        republicFinance: { width: "500px", marginTop: "40px" },
        laMadeleine: { width: "400px", marginTop: "40px" },
        reginelli: { width: "400px", marginTop: "40px" },
        miPadres: { width: "400px", marginTop: "40px" }
    }

    return (
        <div className="col-md-12 container-fluid">
            <div className="text-center">
                <h2>A very special thanks to all of the sponsors which help to make this event a success!</h2>
                <h3>Please click on logo to help support these great businesses!</h3>
                <br /><br />
                <p>Interested in becoming a sponsor? Please contact Kelly at (225)202-3048.</p>
            </div>
            <div className="panel panel-default text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Presenting Sponsors</h2>
                <div className="panel-body">
                    <div className="col-md-12">
                        <a href="http://www.transformyx.com/" target="_blank" rel="noopener noreferrer">
                            <img src={transformyxLogo} alt="" style={styles.transformyx} className="img-responsive center-block" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="panel panel-danger text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Rose Level Sponsors</h2>
                <div className="panel-body">
                    <div className="col-md-12">
                        <div className="col-md-4">
                            <a href="https://www.facebook.com/Kickstandskitchen/" target="_blank" rel="noopener noreferrer">
                                <img src={kickstandsKitchenLogo} alt="" style={styles.kickstands} className="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="http://www.thepinnacleroof.com" target="_blank" rel="noopener noreferrer">
                                <img src={pinnacleLogo} alt="" style={styles.pinnacle} className="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://www.flemingssteakhouse.com/" target="_blank" rel="noopener noreferrer">
                                <img src={flemingsLogo} alt="" style={styles.flemings} class="img-responsive center-block" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-4">
                            <a href="https://www.thechimes.com/" target="_blank" rel="noopener noreferrer">
                                <img src={chimesLogo} alt="" style={styles.chimes} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="http://www.louisianafishfry.com" target="_blank" rel="noopener noreferrer">
                                <img src={louisianaFishFryLogo} alt="" style={styles.louisianaFishFry} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="http://www.republicfinance.com/" target="_blank" rel="noopener noreferrer">
                                <img src={republicFinanceLogo} alt="" style={styles.republicFinance} class="img-responsive center-block" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel panel-warning text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Bronze Level Sponsors</h2>
                <div className="panel-body">
                    <div className="col-md-12">
                        <div className="col-md-4">
                            <a href="http://www.natashaengle.com" target="_blank" rel="noopener noreferrer">
                                <img src={natashaEngleLogo} alt="" style={styles.natashaEngle} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="http://www.afd-furniture.com/" target="_blank" rel="noopener noreferrer">
                                <img src={americanFactoryDirectLogo} alt="" style={styles.americanFactoryDirect} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://deltabatonrouge.com/" target="_blank" rel="noopener noreferrer">
                                <img src={deltaPhysicalTherapyLogo} alt="" style={styles.delta} class="img-responsive center-block" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="col-xs-offset-4 col-md-4">
                            <a href="https://www.sonicdrivein.com" target="_blank" rel="noopener noreferrer">
                                <img src={sonicLogo} alt="" style={styles.sonic} class="img-responsive center-block" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel panel-info text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Other Sponsors</h2>
                <div className="panel-body">
                    <div className="col-md-12">
                        <div className="col-md-4">
                            <a href="http://www.calandros.com/" target="_blank" rel="noopener noreferrer">
                                <img src={calandroLogo} alt="" style={styles.calandro} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="http://www.ruffinosrestaurant.com/" target="_blank" rel="noopener noreferrer">
                                <img src={ruffinosLogo} alt="" style={styles.ruffinos} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://mansursontheboulevard.com" target="_blank" rel="noopener noreferrer">
                                <img src={mansursLogo} alt="" style={styles.mansurs} class="img-responsive center-block" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel panel-success text-center">
                <h2 className="panel-heading" style={{ margin: "0px" }}>Food and Refreshments Provided By</h2>
                <div className="panel-body">
                    <div className="col-md-12">
                        <div className="col-md-4">
                            <a href="https://lamadeleine.com/" target="_blank" rel="noopener noreferrer">
                                <img src={laMadeleineLogo} alt="" style={styles.laMadeleine} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://www.raisingcanes.com" target="_blank" rel="noopener noreferrer">
                                <img src={raisingCanesLogo} alt="" style={styles.raisingCanes} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="http://londonerbr.com" target="_blank" rel="noopener noreferrer">
                                <img src={theLondonerLogo} alt="" style={styles.theLondoner} class="img-responsive center-block" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-4">
                            <a href="http://www.sushimasabatonrouge.com" target="_blank" rel="noopener noreferrer">
                                <img src={sushiMasaLogo} alt="" style={styles.sushiMasa} className="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://www.reginellis.com/" target="_blank" rel="noopener noreferrer">
                                <img src={reginellisLogo} alt="" style={styles.reginelli} class="img-responsive center-block" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://www.reginellis.com/" target="_blank" rel="noopener noreferrer">
                                <img src={miPadresLogo} alt="" style={styles.miPadres} class="img-responsive center-block" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="col-xs-offset-4 col-md-4">
                            <a href="https://us.coca-cola.com/" target="_blank" rel="noopener noreferrer">
                                <img src={cokeLogo} alt="" style={styles.coke} class="img-responsive center-block" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default sponsorPage;