<script setup lang="ts">
import { defineComponent } from 'vue'
import CardComp from '@/components/CardComp.vue';

defineComponent({
  name: 'UnisexPage',
})

</script>

<template>
  <div class="d-flex flex-wrap">
    <CardComp v-for="i in 3" :key="i" title="unisex" />
  </div>
</template>
