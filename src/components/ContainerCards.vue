<script>
import {store} from '../data/store';
import MovieCard from './partials/MovieCard.vue';
    export default {
        components:{
            MovieCard
        },

        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="container border border-1">

        <MovieCard 
            v-for="card in store.cardList"
            :key="card.id"
            :title="card.title"
            :originalTitle="card.original_title"
            :lang="card.language"
            :vote="card.vote_average"
        />

    </div>
</template>

<style lang="scss" scoped>

</style>