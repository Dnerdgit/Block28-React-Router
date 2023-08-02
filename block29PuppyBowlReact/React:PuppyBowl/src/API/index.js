const cohort ="2302-acc-ct-web-pt-a";
const API = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}`;


export async function dogPlayers() {
        try {
            const response = await fetch(`${API}/players`);
            const result = await response.json();
            console.log(result.data.players);
            return result.data.players;
            
        } catch(error) {
            console.log('Error received! Invalid data.', error);        
        }
    }
    