import React from 'react';
import { InputText, InputEmail, InputPhone, InputRadio } from '../Common/InputComponents';
import './PlayerInfo.css';

class PlayerInfo extends React.Component {
    handleFirstNameChange = (value) => {
        this.props.onFirstNameChange(value, this.props.playerId);
    }

    handleLastNameChange = (value) => {
        this.props.onLastNameChange(value, this.props.playerId);
    }

    handleEmailChange = (value) => {
        this.props.onEmailChange(value, this.props.playerId);
    }

    handlePhoneChange = (value) => {
        this.props.onPhoneChange(value, this.props.playerId);
    }

    handleEmailChange = (value) => {
        this.props.onEmailChange(value, this.props.playerId);
    }

    handleNtrpChange = (value) => {
        this.props.onNtrpChange(value, this.props.playerId);
    }

    handlePlayerNumbering = () => {
        const playerId = this.props.playerId;
        return playerId === 1 ? playerId + " (Captain)" : playerId;
    }

    handleRemovePlayerClick = () => {
        this.props.onRemovePlayerClick(this.props.playerId);
    }

    render() {
        const { firstName, lastName, email, phone, playerId } = this.props;
        const removePlayer = playerId > 6 ? <div className="text-center"><span onClick={this.handleRemovePlayerClick} className="text-danger fa fa-remove" style={{cursor: "pointer"}}>Remove</span></div> : null;
        return (
            <div className="col-md-offset-3 col-md-6 Card well-lg">
                <h3 className="text-center">Player {this.handlePlayerNumbering()}</h3>
                <InputText name="firstName" value={firstName} placeholder="First Name" onChange={this.handleFirstNameChange} validate={{ required: true }} />
                <InputText name="lastName" value={lastName} placeholder="Last Name" onChange={this.handleLastNameChange} validate={{ required: true }} />
                <InputEmail name="email" value={email} placeholder="Email" onChange={this.handleEmailChange} validate={{ required: true }} />
                <InputPhone name="phone" value={phone} placeholder="Cell Phone (999)999-9999" onChange={this.handlePhoneChange} validate={{ required: true }} />
                <InputRadio name={`ntrp${playerId}`} label="NTRP Rating (Current)" values={["4.5", "4.0", "3.5", "3.0"]} onChange={this.handleNtrpChange} />
                <div className="text-center text-muted">
                    <small>
                        A self-rating may be used; please rate honestly
                    </small>
                </div>
                {removePlayer}
            </div>
        );
    }
}

export default PlayerInfo;