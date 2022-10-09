<template>
  <div>
    <h1 v-if="!pokemon && !errorMgs">Buscando...</h1>
    <h1 v-else-if="errorMgs">{{ errorMgs }}</h1>

    <template v-else>
      <h3>{{ pokemon.name }}</h3>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
      <br>
      <router-link :to="{name: 'pokemon-search'}">Regresar</router-link>
    </template>
  </div>
</template>

<script>
import { watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '@/composables/usePokemon'
export default {
  setup(){
    const route = useRoute()
    console.log(route.params);

    const { pokemon, errorMgs, isLoading, searchPokemon } = usePokemon( route.params.id )

    watch(
      () => route.params.id,
      () => {
        searchPokemon(route.params.id)
      }
    )

    onBeforeRouteLeave(() => {
      const answer = window.confirm('¿Está seguro que desea salir?')

      if( !answer ) return false // False, bloquea la salida
    })


    return {
      pokemon,
      errorMgs,
      isLoading,
    }  
  }
}
</script>

<style>

</style>