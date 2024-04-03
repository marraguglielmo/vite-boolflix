<script>
// import {store} from '../../data/store';
    export default {
        props:{
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
            <div class="card_gm_title border border-2">
                {{ title }}
                <div>{{ originalTitle }}</div>
            </div>
            <div class="card_gm_lang">
                {{ lang }}
            </div>
            <div class="card_gm_vote border border-1">
                {{ vote }}
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