import React from 'react';
import PlayerInfo from './PlayerInfo';

class PlayerList extends React.Component {
    getPlayer = (id) => {
        const playerIndex = this.props.players.findIndex(x => { return x.id === id });
        return { ...this.props.players[playerIndex] };
    }

    handleFirstNameChange = (firstName, id) => {
        const player = this.getPlayer(id);
        player.firstName = firstName;
        this.props.onPlayerChange(player);
    }

    handleLastNameChange = (lastName, id) => {
        const player = this.getPlayer(id);
        player.lastName = lastName;
        this.props.onPlayerChange(player);
    }

    handleEmailChange = (email, id) => {
        const player = this.getPlayer(id);
        player.email = email;
        this.props.onPlayerChange(player);
    }

    handlePhoneChange = (phone, id) => {
        const player = this.getPlayer(id);
        player.phone = phone;
        this.props.onPlayerChange(player);
    }

    handleNtrpChange = (ntrp, id) => {
        const player = this.getPlayer(id);
        player.ntrp = ntrp;
        this.props.onPlayerChange(player);
    }

    handleRemovePlayer = (playerId) => { 
        this.props.onRemovePlayerClick(playerId);
    }

    render() {
        const { players } = this.props;
        return (
            <React.Fragment>
                {
                    players.map(player => {
                        return <PlayerInfo
                            key={player.id} playerId={player.id} firstName={player.firstName}
                            lastName={player.lastName} email={player.email} ntrp={player.ntrp}
                            onFirstNameChange={this.handleFirstNameChange}
                            onLastNameChange={this.handleLastNameChange}
                            onEmailChange={this.handleEmailChange}
                            onPhoneChange={this.handlePhoneChange}
                            onNtrpChange={this.handleNtrpChange}
                            onRemovePlayerClick={this.handleRemovePlayer}
                        />
                    })
                }
            </React.Fragment>
        );
    };
}

export default PlayerList;