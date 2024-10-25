
export const getApi = async() => {
    const API_KEY = `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`
    try{
        const response = await fetch(API_KEY)
        const data = response.json();
        return data
    }
    catch(error){
        console.log(error)
    }
}