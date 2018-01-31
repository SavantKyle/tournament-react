import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { injectStripe } from 'react-stripe-elements';
import CardSection from './../StripeCheckout/CardSection';
import TeamInfo from '../Register/TeamInfo';
import PlayerList from '../Register/PlayerList';
import validation from '../../helpers/validation';
import axios from 'axios';

class RegistrationForm extends Component {
    state = {
        teamInfo: { name: "", gender: "", ntrp: "" },
        players: [
            { id: 1, firstName: "", lastName: "", email: "", phone: "", ntrp: "" },
            { id: 2, firstName: "", lastName: "", email: "", phone: "", ntrp: "" },
            { id: 3, firstName: "", lastName: "", email: "", phone: "", ntrp: "" },
            { id: 4, firstName: "", lastName: "", email: "", phone: "", ntrp: "" },
            { id: 5, firstName: "", lastName: "", email: "", phone: "", ntrp: "" },
            { id: 6, firstName: "", lastName: "", email: "", phone: "", ntrp: "" }
        ],
        formIsValid: true,
        formErrors: [],
        totalTeamCost: new Date() < new Date(2018, 2, 1) ? 450 : 510,
        success: false
    };

    handleSubmit = (event) => {
        event.preventDefault();

        let isValid = this.validateForm(this.state.teamInfo, this.state.players);

        if (!isValid) {
            return;
        }

        this.props.stripe.createToken().then(({ token }) => {
            console.log('Received Stripe token:', token);

            const teamAndPaymentInfo = {
                teamWithPlayers: {
                    name: this.state.teamInfo.name,
                    gender: this.state.teamInfo.gender,
                    ntrp: this.state.teamInfo.ntrp,
                    players: this.state.players
                },
                stripePaymentRequest: {
                    amount: this.state.totalTeamCost * 100,
                    description: `${this.state.teamInfo.name} - (${this.state.teamInfo.gender} ${this.state.teamInfo.ntrp})`,
                    receiptEmail: this.state.players[0].email,
                    tokenId: token.id
                }
            };

            axios.post('https://www.crawfishcuptennis.com/api/register/RegisterTeam', teamAndPaymentInfo)
                .then(response =>
                    this.setState({ success: true })
                )
                .catch(error => {
                    console.log(error)
                    alert('Something went wrong with your payment. If this continues to occur please notify Kyle at kyle.savant@outlook.com')
                });
        });
    }

    validateForm = (team, players) => {
        let formValidity = true;
        let errors = [];

        if (!validation.requiredIsValid(team.ntrp)) {
            formValidity = false;
            errors.push("Team division is required")
        }
        if (!validation.requiredIsValid(team.gender)) {
            formValidity = false;
            errors.push("Team gender is required");
        }
        if (!validation.requiredIsValid(team.name)) {
            formValidity = false;
            errors.push("Team name is required");
        }

        players.forEach(player => {
            if (!validation.requiredIsValid(player.firstName)) {
                formValidity = false;
                errors.push(`Player ${player.id} first name is required`);
            }
            if (!validation.requiredIsValid(player.lastName)) {
                formValidity = false;
                errors.push(`Player ${player.id} last name is required`);
            }
            if (!validation.requiredIsValid(player.email)) {
                formValidity = false;
                errors.push(`Player ${player.id} email is required`);
            }
            if (validation.requiredIsValid(player.email) && !validation.emailFormatIsValid(player.email)) {
                formValidity = false;
                errors.push(`Player ${player.id} email is not a valid email address`);
            }
            if (!validation.requiredIsValid(player.phone)) {
                formValidity = false;
                errors.push(`Player ${player.id} phone is required`);
            }
            if (validation.requiredIsValid(player.phone) && !validation.minLengthIsValid(player.phone, 13)) {
                formValidity = false;
                errors.push(`Player ${player.id} phone number must contain 10 digits`);
            }
            if (!validation.requiredIsValid(player.ntrp)) {
                formValidity = false;
                errors.push(`Player ${player.id} NTRP is required`);
            }
        });

        if (formValidity === false || formValidity !== this.state.formIsValid) {
            this.setState({ formIsValid: formValidity, formErrors: errors });
        }

        return formValidity;
    }

    updateTeam = (team) => {
        this.setState({ teamInfo: team });
    }

    updatePlayer = (player) => {
        const index = this.state.players.findIndex(x => { return x.id === player.id });
        const players = [...this.state.players];
        players[index] = player;

        this.setState({ players: players });
    }

    calculateCost = (players) => {
        let cost = 0;
        if (new Date() < new Date(2018, 2, 1)) {
            cost = (75 * 6) + ((players.length - 6) * 25);
        }
        else {
            cost = (85 * 6) + ((players.length - 6) * 25);
        }

        this.setState({ totalTeamCost: cost });
    }

    handleAddPlayerClick = () => {
        const ids = [];
        this.state.players.forEach(x => ids.push(x.id));
        const id = ids.reduce((a, b) => { return Math.max(a, b) });

        const player = { id: id + 1, firstName: "", lastName: "", email: "", phone: "", ntrp: "" };
        const players = [...this.state.players];
        players.push(player);
        this.calculateCost(players);
        this.setState({ players: players });
    }

    handleRemovePlayerClick = (playerId) => {
        const players = [...this.state.players];
        const playerIndex = players.findIndex(x => { return x.id === playerId });
        players.splice(playerIndex, 1);
        this.calculateCost(players);
        this.setState({ players: players });
    }

    render() {
        let redirect = null;
        if (this.state.success) {
            redirect = <Redirect to="/success" />
        }
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                {redirect}
                <fieldset>
                    <TeamInfo teamInfo={{ ...this.state.teamInfo }} onTeamChange={this.updateTeam} />
                    <PlayerList players={[...this.state.players]} onPlayerChange={this.updatePlayer} onRemovePlayerClick={this.handleRemovePlayerClick} />

                    <div className="col-md-12 text-center panel-heading">
                        <a style={{ cursor: "pointer" }} onClick={this.handleAddPlayerClick}><span className="fa fa-user-plus" style={{ cursor: "pointer" }}></span> Add player ($25 each)</a>
                    </div>

                    <div className="col-md-offset-3 col-md-6 text-center">
                        {this.state.formErrors.map(x => { return <p className="text-danger">{x}</p> })}
                    </div>

                    <div className="col-md-12 text-center">
                        <CardSection totalCost={this.state.totalTeamCost} />
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