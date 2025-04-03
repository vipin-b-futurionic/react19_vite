import { useEffect, useState } from "react"

export const Picachu = () =>{
    const[apiData, setApiData] = useState(null)
    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    const fetchPokemon = () =>{
        fetch(API)
        .then((res) => res.json())
        .then((data) =>{
            setApiData(data)
        } )
        .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchPokemon();
    }, [])





if(apiData){
    return (
        <section>
            <header>
                <h1>Lets catch Pokemon</h1>
            </header>
            <ul>
                <li>
                    <figure>
                        <img 
                       src={apiData.sprites.other.dream_world.front_default}
                        alt={apiData.name}/>
                    </figure>
                    <h1>{apiData.name}</h1>

                </li>
            </ul>
        </section>
    )
}

}