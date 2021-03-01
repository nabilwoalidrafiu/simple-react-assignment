import React from 'react';
import css from '../Player/Player.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faMapMarker, faPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    
    const {image, name, role, country, salary} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="players-info">
            <div>
                <img src={image} alt=""/>
                <h4>{name}</h4>
                <h5>{role}</h5>
                <h6><FontAwesomeIcon icon={faMapMarker} fixedWidth />{country}</h6>
                <h5><FontAwesomeIcon icon={faDollarSign} fixedWidth />{salary}</h5>
                <Button onClick={() => handleAddPlayer(props.player) }><FontAwesomeIcon icon={faPlus} fixedWidth />Buy Player</Button>
            </div>
        </div>
    );
};

export default Player;