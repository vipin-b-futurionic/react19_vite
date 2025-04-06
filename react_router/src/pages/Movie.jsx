import { useLoaderData } from "react-router"
import { Card } from "../Components/UI/Card";

export const Movie = () => {
    const moviesData = useLoaderData()
    console.log(moviesData);
    

    return (
        <>
            <ul>
            {moviesData.Search.map((curMovie) =>{
                return <Card key = {curMovie.imdbID} curMovie = {curMovie} />
            })}
            </ul>
            
        </>
    )

}