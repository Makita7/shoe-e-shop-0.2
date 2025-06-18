<script setup lang="ts">
import { defineComponent, defineProps } from 'vue';

defineComponent({
  name: 'CardComp',
})

defineProps({
  title: String,
})

</script>

<template>
  <div class="card">
    {{ title }}
  </div>
</template>

<style scoped>
.card {
  width: 33.3%;
  height: 25rem;
  border-right: solid gray 2px;
  border-bottom: solid gray 2px;
  padding: 1rem;
}
</style>
