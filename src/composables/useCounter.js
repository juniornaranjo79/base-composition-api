import { ref } from "vue"
const useCounter = ( initValue = 5 ) => {
    const counter = ref( initValue )
        //Funcion
       /*  const increase = () => {
            counter.value = counter.value + 1
            /* counter.value++ 
        } */
        /* const decrease = () => {
            counter.value = counter.value - 1
            /* counter.value--
        }*/

        return {
            counter,
            //Funciones
            decrease: () => counter.value--,
            increase: () => counter.value++
        }
}

export default useCounter