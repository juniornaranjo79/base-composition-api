import axios from "axios"
import { ref } from "vue"

const usePokemon = ( pokemonId = '1') =>{
    const pokemon = ref()
    const isLoading = ref(false)
    const errorMgs = ref()

    const searchPokemon = async( id ) => {
        
        if( !id ) return
        
        isLoading.value = true
        pokemon.value = null

        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`)
            pokemon.value = data
            errorMgs.value = null

            console.log(data);
        } catch (error) {
            errorMgs.value = 'No se pudo cargar ese pokemon'
        }

        isLoading.value = false
    }

    searchPokemon( pokemonId )

    return {
        pokemon,
        isLoading,
        errorMgs,
        searchPokemon,
    }
}

export default usePokemon