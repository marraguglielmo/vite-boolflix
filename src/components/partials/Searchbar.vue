<script>
import {store} from '../../data/store'
    export default {
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="d-flex justify-content-center w-50 m-auto">
        <input
            class="form-control w-75"
            v-model.trim="store.nameToSearch"
        >
        <button class="btn btn-primary">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>

</style>