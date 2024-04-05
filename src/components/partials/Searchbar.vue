<script>
import {store} from '../../data/store'
    export default {
        data(){
            return{
                store
            }
        },

        methods:{
            reset(){
                store.nameToSearch = ''
            },

            search(){
                this.$emit('search');
                this.reset();
            }
        }
    }
</script>

<template>
    <div class="container-fluid d-flex justify-content-between align-items-center m-auto pt-3">
        <div>
            <div class="text-center">
                <img class="w-75" src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix">
            </div>
        </div>
        <div class="d-flex h-25 justify-content-center">
            <input
            class="form-control w-75"
            placeholder="Cerca un film"
            v-model.trim="store.nameToSearch"
            >
            <button 
                class="btn btn-white"
                @click="search"
            >
            Cerca</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>