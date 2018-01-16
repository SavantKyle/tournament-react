import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';
import CardSection from './../StripeCheckout/CardSection';
import TeamInfo from '../Register/TeamInfo';
import PlayerList from '../Register/PlayerList';

class RegistrationForm extends Component {
    state = {
        errors: "",
        teamInfo: { name: "", gender: "", division: "" },
        players: [
            { id: 1, firstName: "", lastName: "", email: "", phone: "", ntrp: "" },
            { id: 2, firstName: "", lastName: "", email: "", phone: "", ntrp: "" },
            { id: 3, firstName: "", lastName: "", email: "", phone: "", ntrp: "" },
            { id: 4, firstName: "", lastName: "", email: "", phone: "", ntrp: "" },
            { id: 5, firstName: "", lastName: "", email: "", phone: "", ntrp: "" },
            { id: 6, firstName: "", lastName: "", email: "", phone: "", ntrp: "" }
        ]
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.stripe.createToken()
    }

    updateTeam = (team) => {
        this.setState({ TeamInfo: team });
    }

    updatePlayer = (player) => {
        const index = this.state.players.findIndex(x => { return x.id === player.id });
        const players = [...this.state.players];
        players[index] = player;

        this.setState({ players: players });
    }

    handleAddPlayerClick = () => {
        const ids = [];
        this.state.players.forEach(x => ids.push(x.id));
        const id = ids.reduce((a, b) => { return Math.max(a, b) }); 

        const player = { id: id + 1, firstName: "", lastName: "", email: "", phone: "", ntrp: "" };
        const players = [...this.state.players];
        players.push(player);
        this.setState({ players: players });
    }

    handleRemovePlayerClick = (playerId) => {
        const players = [...this.state.players];
        const playerIndex = players.findIndex(x => { return x.id === playerId });
        players.splice(playerIndex, 1);
        this.setState({ players: players });
    }

    style = {
        cursor: "pointer"
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <fieldset>
                    <TeamInfo team={{ ...this.state.teamInfo }} onTeamChange={this.updateTeam} />
                    <PlayerList players={[...this.state.players]} onPlayerChange={this.updatePlayer} onRemovePlayerClick={this.handleRemovePlayerClick} />

                    <div className="col-md-12 text-center panel-heading">
                        <a style={this.style} onClick={this.handleAddPlayerClick}><span className="fa fa-user-plus" style={this.style}></span> Add player ([$25 each] max 8)</a>
                    </div>

                    <div className="col-md-12 text-center">
                        <CardSection />
                    </div>

                    <div className="form-group col-md-12 text-center">
                        <button className="btn btn-lg btn-primary" type="submit">Accept & Pay</button>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default injectStripe(RegistrationForm);