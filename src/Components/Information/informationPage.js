import React from 'react';

const InformationPage = () => {
    return (
        <div>
            <h1 className="text-center">Tournament Rules & Information</h1>
            <dl className="dl-horizontal lead text-justify">
                <dt>Contact Us:</dt>
                <dd>
                    <small>
                        Kelly Savant &nbsp;
                        <a href="mailto:kellyt515@gmail.com"><i className="fa fa-envelope-o"> kellyt515@gmail.com</i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="tel:1-225-202-3048"><i className="fa fa-mobile-phone"></i> 225-202-3048</a><br />
                        Kyle Savant &nbsp;
                        <a href="mailto:kyle.savant@outlook.com"><i className="fa fa-envelope-o"> kyle.savant@outlook.com</i></a>&nbsp;&nbsp;
                        <a href="tel:1-225-223-8809"><i className="fa fa-mobile-phone"></i> 225-223-8809</a>
                    </small>
                </dd>
                <dt>Event Date:</dt>
                <dd>
                    <small>
                        April 6-8, 2018
                    </small>
                </dd>
                <dt>Location:</dt>
                <dd>
                    <small>
                        Highland Road Tennis Center <br />
                        <a target="_blank" rel="noopener noreferrer" className="fa fa-map" href="https://www.google.com/maps/place/Highland+Road+Tennis+Center/@30.3524809,-91.0748524,17z/data=!3m1!4b1!4m5!3m4!1s0x8626a55d62dd2253:0x4137cae0263416c0!8m2!3d30.3524809!4d-91.0726637"> 14024 Highland Rd | Baton Rouge, LA | 70810</a>
                    </small>
                </dd>
                <dt>Deadline:</dt>
                <dd>
                    <small>
                        Registration Closes Friday, March 30, 2018 at midnight (or when full). <br />
                        This is an adult tournament so in order to participate you must be 18 years of age or older.
                    </small>
                </dd>
                <dt>Entry Fee:</dt>
                <dd>
                    <small>
                        $450 per team of 6 players ($75 per) through February 28th; $510 thereafter ($85 per). <br />
                        Additional players may be added for $25 per up to a max of 8 players. <br/>
                        Note: Only 6 awards are given to the winning team!
                    </small>
                </dd>
                <dt>Divisions:</dt>
                <dd>
                    <small>
                        Men / Women teams will compete in three doubles pairs. (This is <strong>not</strong> a mixed event) <br />
                        The team to win 2 out of 3 courts will win the match. <br />
                        2018 ratings will be used. The levels are: 3.0 or below, 3.5, 4.0 (with 4.5 allowances) <br />
                        &nbsp; <strong>**NOTE**</strong> 4.0 division may have two 4.5 players and are only allowed to play on court 1. <br />
                        Three matches will be guaranteed to each team with additional matches possible. <br />
                        Match play begins Friday night at 5:30pm and may continue through Sunday.
                    </small>
                </dd>
                <dt>Rules:</dt>
                <dd>
                    <small>
                        Tournament will follow standard USTA rules and guidelines. <br />
                        All matches are the best of two tie-break sets with a match tie-break in lieu of a 3rd set.
                    </small>
                </dd>
                <dt>Food / Drink:</dt>
                <dd>
                    <small>
                        Food will be provided Friday evening, Saturday lunch, Saturday dinner, and Sunday lunch. <br />
                        A beer truck will be available throughout the weekend. <br />
                        Bottled water will be availabe throughout the weekend with full water coolers on all courts for hydrating during the match. <br />
                        Soft drinks will be provided for the crawfish boil on Saturday night.
                    </small>
                </dd>
                <dt>Prizes:</dt>
                <dd>
                    <small>
                        Prizes will be rewarded to teams placing first in their division.
                        Note: Only 6 awards will be given to the winning team.
                    </small>
                </dd>
                <dt>Refunds:</dt>
                <dd>
                    <small>
                        If you must withdraw from the tournament you will need to find someone to take your place. <br />
                        If you need assistance finding a replacement please contact us. <br />
                        Refunds will not be given for withdrawing from the event.
                    </small>
                </dd>
            </dl>
        </div>
    );
}

export default InformationPage;