import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import playerData from './data/data.json';
import Header from './Components/Header/Header';
import Player from './Components/Player/Player';
import Team from './Components/Team/Team'

function App() {
  const [player, setPlayer] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(()=>{
    setPlayer(playerData);
  }, []);

  const handleAddPlayer = (player) =>{
    const newTeam = [...team, player];
    setTeam(newTeam);
  }
  return (
    <div className="App">
      
        <Header></Header>
        
        <h1>Total Player: {player.length}</h1>
        <hr/>
        <div className="player">
          <div className="player-15">
            <h2>Players</h2>
              {
              playerData.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Player>)
              } 
          </div>
          <div className="team-selected">
              <Team team={team}></Team>
          </div>
        </div>
      
    </div>
  );
}

export default App;
