<template>
    <div>
        <h1>Counter View</h1>
        <h2>{{ counter }}</h2>

        <button @click="decrease">-1</button>
        <button @click="increase">+1</button>
    </div>
</template>

<script>
import useCounter from '@/composables/useCounter'

export default {
    name: 'counter',
    setup() {
        const { counter, increase, decrease } = useCounter()

        return {
            counter,
            decrease,
            increase
        }
    }
}
</script>

<style>

</style>