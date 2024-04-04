<script>
// import {store} from '../../data/store';
    export default {
        props:{
            cardObj: Object
        }
    }
</script>

<template>
    <div class="col">
        <div class="gm_card text-center d-flex flex-column justify-content-center ">
            <div class="card_gm_title fw-bold border border-2 fs-4">
                {{ cardObj.title || cardObj.name}}
                <div class="text-danger fs-6">{{ cardObj.original_title || cardObj.original_name }}</div>
            </div>
            <div class="card_gm_lang">
                {{ cardObj.original_language }}
            </div>
            <div class="card_gm_vote border border-1">
                vote: {{ cardObj.vote_count }}
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.col{
    .gm_card{
        min-height: 170px;
        border: 2px solid black;
        border-radius: 10px;
        overflow: hidden;
        // padding: 10px 15px;
        margin-bottom: 20px;
        .card_gm_title,
        .card_gm_lang,
        .card_gm_vote{
            padding: 1px;
        }
    }
}
</style>