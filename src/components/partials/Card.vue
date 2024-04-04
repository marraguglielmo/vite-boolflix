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
            }
        },

        mounted(){
            this.flagLang();
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
                <img v-if="this.isIt === true" src="../../../it.png" alt="">
                <img v-else-if="this.isEn === true" src="../../../en.png" alt="">
                <div v-else> {{ this.lang }}</div>
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
        .card_gm_lang img{
            width: 10%;
        }    
    }
}
</style>