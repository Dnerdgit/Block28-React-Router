import { useState, useEffect } from 'react';
import { dogPlayers } from '../API'
import { useNavigate } from 'react-router-dom'
import SinglePlayer from './SinglePlayer'


export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    
    useEffect(() => {
        async function getAllPlayers() {
            const player = await dogPlayers();
    
            setPlayers(player);
        }
        getAllPlayers();
    }, []

    )
    console.log(players, "players");

    return (
        
        <div>
            {players.map((player) => {
               return  (
                <div key = {player.id}>
                    <SinglePlayer player={player}/>


                </div>)   
            })}

        </div>
        
    )

}