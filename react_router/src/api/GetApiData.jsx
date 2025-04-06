export const getMoviesData = async () => {
    try {
       const response =  await fetch("Api")
       const data = response.json()
       return data
        
    } catch (error) {
        console.log(error)
    }
}