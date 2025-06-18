<script setup lang="ts">
import { defineComponent } from 'vue'
import CardComp from '@/components/CardComp.vue';

defineComponent({
  name: 'KidsPage',
})

</script>

<template>
  <div class="d-flex flex-wrap">
    <CardComp v-for="i in 6" :key="i" title="kids" />
  </div>
</template>
