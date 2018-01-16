import React from 'react';

const style = { margin: "0px" };

const sponsorPage = () => {
    return (
        <div className="col-md-12 container-fluid">
            <div className="text-center">
                <h2>A very special thanks to all of the sponsors which help to make this event a success!</h2>
                <h3>Please click on logo to help support these great businesses!</h3>
            </div>
            <div className="panel panel-danger text-center">
                <h2 className="panel-heading" style={style}>Rose Level Sponsors</h2>
                <div className="panel-body">

                </div>
            </div>
            <div className="panel panel-warning text-center">
                <h2 className="panel-heading" style={style}>Bronze Level Sponsors</h2>
                <div className="panel-body">

                </div>
            </div>
            <div className="panel panel-success text-center">
                <h2 className="panel-heading" style={style}>Food Sponsors</h2>
                <div className="panel-body">

                </div>
            </div>
            <div className="panel panel-info text-center">
                <h2 className="panel-heading" style={style}>Other Sponsors</h2>
                <div className="panel-body">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default sponsorPage;