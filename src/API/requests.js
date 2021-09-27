const API_KEY = "0a7891ec8bc6b4a702de4a5c5385095d";

const requests = {
    fetchNetflixOriginals: `/discover/tv?&language=pt-BR&api_key=${API_KEY}&with_networks=213`,
    fetchTrending: `/trending/all/week?&language=pt-BR&api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?&language=pt-BR&api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?&language=pt-BR&api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?&language=pt-BR&api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?&language=pt-BR&api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?&language=pt-BR&api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?&language=pt-BR&api_key=${API_KEY}&with_genres=99`,
}

export default requests;