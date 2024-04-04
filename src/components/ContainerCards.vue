<script>
import {store} from '../data/store';
import Card from './partials/Card.vue';
    export default {
        components:{
            Card
        },

        props:{
            type: String
        },

        data(){
            return{
                store
            }
        },

        computed:{
            title(){
                return this.type === 'movie' ? 'Film' : 'Serie TV'
            }
        }
    }
</script>

<template>
    <h1 class="text-center">{{ title }}</h1>
    <div class="container row row-cols-4 border border-1 m-auto border-danger border-2">

        <Card 
            v-for="card in store[type]"
            :key="card.id"
            :cardObj="card"
            />
            <!-- :title="card.title"
            :originalTitle="card.original_title"
            :lang="card.original_language"
            :vote="card.vote_average" -->

    </div>
</template>

<style lang="scss" scoped>

</style>