import React, { Component } from 'react';
import { InputText, InputRadio } from './../Common/InputComponents';

class TeamInfo extends Component {
    handleDivisionChange = (ntrp) => {
        const team = { ...this.props.teamInfo };
        team.ntrp = ntrp;
        this.props.onTeamChange(team);
    }

    handleGenderChange = (gender) => {
        const team = { ...this.props.teamInfo };
        team.gender = gender;
        this.props.onTeamChange(team);
    }

    handleTeamNameChange = (name) => {
        const team = { ...this.props.teamInfo };
        team.name = name;
        this.props.onTeamChange(team);
    }

    render() {
        const { name } = {...this.props.teamInfo};
        return (
            <div className="col-md-12">
                <div className="form-group text-center">
                    <div className="col-md-4">
                        <InputRadio name="gender" label="Team Gender" values={["Male", "Female"]} onChange={this.handleGenderChange} />
                    </div>
                    <div className="col-md-4">
                        <label className="control-label" htmlFor="teamName">Team Name</label>
                        <InputText name="name" value={name} placeholder="Team Name" onChange={this.handleTeamNameChange} validate={{ required: true }} />
                    </div>
                    <div className="col-md-4">
                        <InputRadio name="ntrp" label="Team Division" values={["4.5", "4.0", "3.5", "3.0"]} onChange={this.handleDivisionChange} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamInfo;