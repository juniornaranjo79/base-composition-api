import { ref } from 'vue'
import axios from 'axios'

const useUsers = () => {
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
            getUsers,

            prevPage: () => getUsers( currentPage.value - 1 ),
            nextPage: () => getUsers( currentPage.value + 1 ),
        }
}

export default useUsers