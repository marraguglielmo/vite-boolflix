<script>
  import {store} from './data/store';
  import axios from 'axios';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Searchbar from './components/partials/Searchbar.vue';
  import ContainerCards from './components/ContainerCards.vue';
  export default{
    components:{
      Header,
      Searchbar,
      ContainerCards,
      Footer
    },

    methods:{
      getApi(type){
        axios.get(`${store.apiUrl}${type}?api_key=${store.api_key}`, {
          params:{
            query: store.nameToSearch,
            language: 'it-IT',
          }
        })
          .then(result =>{
            store[type] = result.data.results
          })
          .catch(error =>{
            console.log('errore');
          })
      }
    },

    mounted(){
      this.getApi('movie')
      this.getApi('tv')
    }
  }
</script>

<template>

  <Header />
  <Searchbar @search="getApi" class="mb-4"/>
  <ContainerCards type="movie"/>
  <ContainerCards type="tv"/>
  <Footer />
  
</template>

<style lang="scss">

</style>
