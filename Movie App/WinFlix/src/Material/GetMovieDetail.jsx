export const getMovieDetail = async({params}) => {
    const id = params.movieId
    const API_KEY = `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    try{
        const response = await fetch(API_KEY)
        const data = response.json();
        return data
    }
    catch(error){
        console.log(error)
    }
}