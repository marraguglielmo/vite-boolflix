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
    <h1 class="text-center mb-4">{{ title }}</h1>
    <div class="container row row-cols-4 m-auto border-2">

        <Card 
            v-for="card in store[type]"
            :key="card.id"
            :cardObj="card"
            />

    </div>
</template>

<style lang="scss" scoped>

</style>