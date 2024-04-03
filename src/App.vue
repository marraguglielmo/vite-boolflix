<script>
  import {store} from './data/store';
  import axios from 'axios';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import ContainerCards from './components/ContainerCards.vue';
  import Footer from './components/Footer.vue';
  export default{
    components:{
      Header,
      Main,
      Footer,
      ContainerCards
    },

    methods:{
      getApi(){
        axios.get(`${store.apiUrlMovies}?api_key=${store.api_key}`, {
          params:{
            query: store.nameToSearch,
            language: 'it-IT'
          }
        })
        .then(result =>{
          console.log(result.data.results);
          store.cardList = result.data.results
          console.log(store.cardList);
        })
        .catch(error =>{
          console.log(error);
        })
      }
    },

    mounted(){
      this.getApi()
    }
  }
</script>

<template>

  <Header />
  <ContainerCards />
  <Main />
  <Footer />
  
</template>

<style lang="scss">

</style>
