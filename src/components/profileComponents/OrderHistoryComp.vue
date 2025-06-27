<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'OrderHistoryComp',
})

</script>

<template>
  <!-- TODO: hacer que este item de order history sea uno solo y reautilizarlo en el cart y uitar en esta version el poder agregar o quitar elementos xq solo deberia mostrar cuantos ya se habian comprado en el pasado -->
  <div class="">
    <h3 class="text-center mb-2" style="color: var(--mid-green);">Order History</h3>

    <v-expansion-panels elevation="0" rounded="lg">
      <v-expansion-panel v-for="i in 4" :key="i">
        <v-expansion-panel-title>
          <v-row class="d-flex justify-space-between pr-8 align-center">
            <div>
              <p>Date:</p>
              <p>28/05/25</p>
            </div>
            <div>
              <p>Address:</p>
              <p>13th Street, New York, USA</p>
            </div>
            <p>Status: Delived</p>
            <p>Total: $9000</p>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text style="background-color: #f5f9f1;">
          <v-row class="align-center justify-space-between py-2 px-4">
            <p>img</p>
            <p>Shoe Name</p>
            <p>Size:</p>
          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>
.amount {
  width: 2rem;
  text-align: center;
}
</style>
