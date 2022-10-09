<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Cambiar titulo</button>
  </div>
</template>

<script>
import { ref, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount, onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated, onDeactivated, } from 'vue'
export default {
  setup() {

    const title = ref('About Page')

    onMounted(() =>{
      console.log('onMounted');
    })
    onUpdated(() =>{
      console.log('onUpdated');
    })
    onUnmounted(() =>{
      console.log('onUnmounted');
    })
    onBeforeMount(() =>{
      console.log('onBeforeMount');
    })
    onBeforeUpdate(() =>{
      console.log('onBeforeUpdate');
    })
    onBeforeUnmount(() =>{
      console.log('onBeforeUnmount');
    })
    onErrorCaptured(() =>{
      console.log('onErrorCaptured');
    })
    onRenderTracked(() =>{
      console.log('onRenderTracked');
    })
    onRenderTriggered(() =>{
      console.log('onRenderTriggered');
    })
    onActivated(() =>{
      console.log('onActivated');
    })
    onDeactivated(() =>{
      console.log('onDeactivated');
    })

    return {
      title, 

      changeTitle: () => title.value = 'New About'
    }
  }
}
</script>
