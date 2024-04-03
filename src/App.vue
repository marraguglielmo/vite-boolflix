<script>
  import {store} from './data/store';
  import axios from 'axios';
  import Header from './components/Header.vue';
  import Searchbar from './components/partials/Searchbar.vue';
  import Main from './components/Main.vue';
  import ContainerCards from './components/ContainerCards.vue';
  import Footer from './components/Footer.vue';
import SearchbarVue from './components/partials/Searchbar.vue';
  export default{
    components:{
      Header,
      Searchbar,
      Main,
      Footer,
      ContainerCards
    },

    methods:{
      getApi(){
        axios.get(`${store.apiUrlMovies}?api_key=${store.api_key}`, {
          params:{
            query: store.nameToSearch,
            language: 'it-IT',
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
  <Searchbar @search="getApi" class="mb-4"/>
  <ContainerCards />
  <Main />
  <Footer />
  
</template>

<style lang="scss">

</style>
