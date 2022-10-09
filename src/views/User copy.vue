<template>
    <div>
        <h2 v-if="isLoading">Espere por favor...</h2>
        <h2 v-else>Usuarios</h2>
        <h5 v-if="errorMge">{{ errorMge }}</h5>
        <div v-if="users.length > 0" class="info-users">
          <ul>
              <li v-for="user in users" :key="user.id">
                  <h4>{{ user.first_name }} {{ user.last_name }}</h4>
                  <h6>{{ user.email }}</h6>
              </li>
          </ul>
        </div>
        <button @click="prevPage">Atras</button>
        <button @click="nextPage">Siguiente</button>
        <span>Página: {{ currentPage }}</span>
    </div>
</template>

<script>
import { ref } from 'vue'    
import axios from 'axios'
import useUser from '@/composables/useUsers'

export default {
    setup () {
        const users = ref([])
        const isLoading = ref(true)
        const currentPage = ref(1)
        const errorMge = ref('')


        const getUsers = async( page = 1 ) => {
            if(page <= 0) page = 1
            isLoading.value = true
            const { data } = await axios.get('https://reqres.in/api/users',{
                params: {
                    page: page
                }
            })
            if( data.data.length > 0 ){
                users.value = data.data
                currentPage.value = page
                errorMge.value = null
            }
            else if ( currentPage.value > 0 ) {
                errorMge.value = 'No hay mas usuarios'
            }
            isLoading.value = false
        } 

        getUsers()
        return{
            users,
            isLoading,
            currentPage,
            errorMge,

            nextPage: () => getUsers( currentPage.value + 1 ),
            prevPage: () => getUsers( currentPage.value - 1 ),
        }
    }
}
</script>

<style scoped>
h2{
    text-align: center;
    width: 100%;
}
div.info-users{
    display: flex;
    justify-content: center;
    text-align: center;
}
ul{
    width: 250px;
}
</style>