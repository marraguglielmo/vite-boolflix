<script>
// import {store} from '../../data/store';
    export default {
        props:{
            key: 'String',
            title: 'String',
            originalTitle: 'String',
            lang: 'String',
            vote: 'String'
        }
    }
</script>

<template>
    <div class="col">
        <div class="gm_card">
            <div class="card_gm_title">
                
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.col{
    .gm_card_title{
        font-weight: bold;
    }
}
</style>