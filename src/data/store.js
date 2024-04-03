import {reactive} from 'vue';

export const store = reactive({
    apiUrlMovies:  'https://api.themoviedb.org/3/search/movie',
    api_key: 'dc8f12bdaa6fd1e6b34f8ad134ef00c5',
    cardList: [],
    nameToSearch: 'array'
})