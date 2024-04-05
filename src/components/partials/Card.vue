<script>
import {store} from '../../data/store';
    export default {
        props:{
            cardObj: Object
        },

        data(){
            return{
                store,
                isIt : false,
                isEn : false,
                lang : ''
            }
        },

        methods:{
            flagLang(){
                if(this.cardObj.original_language === 'it'){
                    this.isIt = true
                }else if (this.cardObj.original_language === 'en'){
                    this.isEn = true
                }else{
                    this.lang = this.cardObj.original_language
                }
            },

            ratingStars(vote){
                return Math.floor(vote / 2);
            },

        },

        mounted(){
            this.flagLang();
        }
    }
</script>

<template>
    <div class="col">
        <div class="gm_card text-center d-flex flex-column justify-content-center ">
            <div class="card_gm_img">
                <img
                    v-if="cardObj.backdrop_path === null"
                    src="../../../public/roll.png"
                    :alt="cardObj.title || cardObj.name"
                >
                <img
                    v-else
                    :src="`${this.store.tmdbUrl}w400${cardObj.poster_path}`"
                    :alt="cardObj.title || cardObj.name"
                >
            </div>
            <div class="card_gm_title fw-bold border border-2 fs-4">
                {{ cardObj.title || cardObj.name}}
                <div class="text-danger fs-6">{{ cardObj.original_title || cardObj.original_name }}</div>
            </div>
            <div class="card_gm_lang">
                <img
                    v-if="this.isIt === true"
                    src="../../../it.png"
                    alt=""
                >
                <img
                    v-else-if="this.isEn === true"
                    src="../../../en.png"
                    alt=""
                >
                <div v-else> {{ this.lang }}</div>
            </div>
            <div class="card_gm_vote border border-1">
                <!-- vote: {{ cardObj.vote_average }} -->
                <i
                    v-for="(star, index) in ratingStars(cardObj.vote_average)"
                    :key="index"
                    class="fa-solid fa-star"
                ></i>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
img{
    max-width: 100%;
}

.col{
    .gm_card{
        // background-color: whitesmoke;
        min-height: fit-content;
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
        .card_gm_lang img{
            width: 10%;
        }    
    }
}
</style>