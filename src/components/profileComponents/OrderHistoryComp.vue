<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'OrderHistoryComp',
})

</script>

<template>
  <!-- TODO: hacer que este item de order history sea uno solo y reautilizarlo en el cart y uitar en esta version el poder agregar o quitar elementos xq solo deberia mostrar cuantos ya se habian comprado en el pasado -->
  <div class="">
    <h3 class="text-center">Order History</h3>
    <div class="d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <p>img</p>
        <div class="ml-4">
          <p>Shoe Name</p>
          <p>Size:</p>
        </div>
      </div>
      <div class="d-flex">
        <v-btn icon="mdi-plus" variant="flat" density="compact" color="var(--light-green)" class="mx-2" />
        <p class="amount">0</p>
        <v-btn icon="mdi-minus" variant="flat" density="compact" color="var(--light-green)" class="mx-2" />
        <v-icon class="icon ml-4">mdi-delete</v-icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.amount {
  width: 2rem;
  text-align: center;
}
</style>
