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

            fullStars(vote){
                return Math.floor(vote / 2);
            },

            emptyStars(vote){
                return Math.ceil(5 - (vote / 2));
            }

        },

        mounted(){
            this.flagLang();
        }
    }
</script>

<template>

    
    
    
    <!-- <div class="gm_card text-center d-flex flex-column justify-content-center ">
        <div class="card_gm_img">
            <img
            v-if="cardObj.backdrop_path === null"
            src="../../../roll.png"
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
                <i
                v-for="(fullStars, index) in fullStars(cardObj.vote_average)"
                :key="index"
                class="fa-solid fa-star"
                ></i>
                <i
                v-for="(emptyStars, index) in emptyStars(cardObj.vote_average)"
                :key="index"
                class="fa-regular fa-star"
                ></i>
            </div>
        </div> -->
        
        
        
        <!-- CARD PROVA -->
    <div class="col">
        
        <div class="card mb-2">
            <div class="image">
                <img
                v-if="cardObj.backdrop_path === null"
                src="../../../roll.png"
                :alt="cardObj.title || cardObj.name"
                />
                <img
                    v-else
                    :src="`${this.store.tmdbUrl}w400${cardObj.poster_path}`"
                    :alt="cardObj.title || cardObj.name"
                >
                </div>
            <div class="details">
                <div class="center">
                    <h1>{{ cardObj.title || cardObj.name}}</h1>
                    <p>{{ cardObj.overview }}</p>
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
                    <div class="text-danger" v-else> {{ this.lang }}</div>
                    <div class="card_gm_vote text-white py-1">
                        <i
                        v-for="(fullStars, index) in fullStars(cardObj.vote_average)"
                        :key="index"
                        class="fa-solid fa-star"
                        ></i>
                        <i
                        v-for="(emptyStars, index) in emptyStars(cardObj.vote_average)"
                        :key="index"
                        class="fa-regular fa-star"
                        ></i>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>


<style lang="scss" scoped>
img{
    max-width: 100%;
}

.col{
    width: calc(100% / 4);
}

.card {
    height: 535px;
    // background: #000;
}
.card .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.card .image img {
    width: 100%;
    transition: .5s;
}
.card:hover .image img {
    opacity: .5;
    transform: translateX(20%);/*100%*/
}
.card .details {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;/*100%*/
    height: 100%;
    background: black;
    transition: .5s;
    transform-origin: left;
    transform: perspective(2000px) rotateY(-90deg);
}
.card:hover .details {
    transform: perspective(2000px) rotateY(0deg);
}
.card .details .center {
    padding: 20px;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.card .details .center h1 {
    margin: 0;
    padding: 0;
    color: #ff3636;
    line-height: 20px;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
}

.card .details .center p {
    margin: 10px 0;
    padding: 0;
    color: white;
    overflow: hidden;
}

.card .details .center img{
    width: 10%;
}
</style>