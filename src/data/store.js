import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/',
    api_key: 'dc8f12bdaa6fd1e6b34f8ad134ef00c5',
    movie: [],
    tv: [],
    nameToSearch: '',
    tmdbUrl: 'https://image.tmdb.org/t/p/',
    netflixPng: 'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
})