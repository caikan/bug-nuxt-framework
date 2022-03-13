<script setup>
const count = ref(0)
const inc = () => count.value++
</script>

<template lang="pug">
div
  div count: {{ count }}
  button(@click="inc")
    | inc
</template>