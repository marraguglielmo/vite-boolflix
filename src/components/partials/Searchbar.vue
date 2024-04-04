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
    <div class="d-flex justify-content-center w-50 m-auto">
        <input
            class="form-control w-75"
            placeholder="Cerca un film"
            v-model.trim="store.nameToSearch"
        >
        <button class="btn btn-primary"
                @click="search"
        >Cerca</button>
    </div>
</template>

<style lang="scss" scoped>

</style>