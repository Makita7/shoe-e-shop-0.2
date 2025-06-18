<script setup lang="ts">
import CardComp from '@/components/CardComp.vue';
import { defineComponent } from 'vue';

defineComponent({
  name: 'MenPage',
})

</script>

<template>
  <div class="d-flex flex-wrap">
    <CardComp v-for="i in 5" :key="i" title="men" />
  </div>
</template>
