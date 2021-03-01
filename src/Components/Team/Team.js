import React from 'react';
import css from "../Team/Team.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Selected = (props) => {
    const team = props.team;
    const totalSalary = team.reduce((sum, player) => sum + player.salary,0);
    return (
        <div class="selected-team">
            <h2>Team</h2>
            <h4>Player Selected: {team.length}</h4>
            <h4>Total Salary: <FontAwesomeIcon icon={faDollarSign} fixedWidth />{totalSalary}</h4>
            <hr/>
            <hr/>
            <h2>Selected Player: </h2>
            {
                team.map(playerSelected => <div className="player-selected">
                    <img src={playerSelected.image} alt=""/>
                    <h5>{playerSelected.name}</h5>
                    <h5>{"Salary: $" + playerSelected.salary}</h5>
                </div>)
            }

        </div>
    );
};

export default Selected;