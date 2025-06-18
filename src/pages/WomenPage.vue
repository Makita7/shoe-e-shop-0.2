<script setup lang="ts">
import { defineComponent } from 'vue'
import CardComp from '@/components/CardComp.vue';

defineComponent({
  name: 'WomenPage',
})

</script>

<template>
  <div class="d-flex flex-wrap">
    <CardComp v-for="i in 5" :key="i" title="women" />
  </div>
</template>
