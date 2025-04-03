import { useEffect, useState } from "react"

export const Picachu = () =>{
    const[pokemon, setPokemon] = useState(null)
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(null)


    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    // const fetchPokemon = () => {
    //      fetch(API)
    //      .then((res) => res.json())
    //      .then((data) =>{
    //         setPokemon(data)
    //          setLoading(false)
    //         } )
    //      .catch((error) => {
    //          console.log(error)
    //          setError(error)
    //          setLoading(false)
    //     }) 
    // }// usining promises 

    const fetchPokemon = async () => {
        try {
            const res =  await fetch(API)
            const data = await res.json()
            setPokemon(data)
            setLoading(false)

            
        } catch (error) {
            setError(error)
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchPokemon();
    }, [])





    if(loading)
        return(
            <>
                <h1>Loading...</h1>
            </>
    )

    if(error)
        return(
            <div>
                <h1>Error: {error.message}</h1>
            </div>
    )

    return (
        <section>
            <header>
                <h1>Lets catch Pokemon</h1>
            </header>
            <ul>
                <li>
                    <figure>
                        <img 
                       src={pokemon.sprites.other.dream_world.front_default}
                        alt={pokemon.name}/>
                    </figure>
                    <h1>{pokemon.name}</h1>

                </li>
            </ul>
        </section>
    )


}