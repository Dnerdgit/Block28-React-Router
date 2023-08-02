import { useState, useEffect } from 'react';
import { dogPlayers } from '../API'


export default function SinglePlayer({player}) {
    const [singleDog, SetSingleDog] = useState("");

    return (
        <div>
            <h4>{player.breed} </h4>
            <h4>{player.status}</h4>
            <h4>{player.teamId} </h4>
            <img src= {`${player.imageUrl}`} />
            
            {/* <button onClick={getAllPlayers}></button> */}
        </div>
    )
}



