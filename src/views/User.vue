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
import useUser from '@/composables/useUsers'

export default {
    setup () {
        const {  users, isLoading, currentPage, errorMge, prevPage, nextPage } = useUser()
        return{
            users, 
            isLoading, 
            currentPage, 
            errorMge, 
            prevPage, 
            nextPage
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