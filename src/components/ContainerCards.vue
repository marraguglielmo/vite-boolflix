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
    <h1 class="text-left mb-4 fw-bold">{{ title }}</h1>
    <div class="container-fluid p-3">
        <div class="row row-cols-4">
            
            <Card 
            v-for="card in store[type]"
            :key="card.id"
            :cardObj="card"
            />
            
        </div>
    </div>
</template>

<style lang="scss" scoped>


</style>