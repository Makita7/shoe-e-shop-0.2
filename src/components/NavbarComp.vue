<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { RouterLink } from 'vue-router';

defineComponent({
  name: 'NavbarComp',
})

const cartDialog = ref(false);

const toggleCart = () => {
  cartDialog.value = !cartDialog.value;
  closeHover.value = false;
};

const closeHover = ref(false);

</script>

<template>
  <header class="d-flex justify-between align-center">
    <v-col>
      <RouterLink class="pl-1 links logo prevent-select" to="/" active-class="active-link">E-SHOP</RouterLink>
    </v-col>
    <nav class="d-flex">
      <RouterLink class="links" to="/" active-class="active-link">Start</RouterLink>
      <RouterLink class="links" to="/men" active-class="active-link">Men</RouterLink>
      <RouterLink class="links" to="/women" active-class="active-link">Women</RouterLink>
      <RouterLink class="links" to="/unisex" active-class="active-link">Unisex</RouterLink>
      <RouterLink class="links" to="/kids" active-class="active-link">Kids</RouterLink>
    </nav>
    <v-col class="d-flex justify-end">
      <v-icon @click="toggleCart" class="icon ml-4">mdi-cart</v-icon>
      <div v-if="cartDialog" class="overlay">
        <v-card class="dialogCard" width="30rem" elevation="0">
          <v-card-title class="d-flex justify-space-between">
            Cart:
            <div class="d-flex align-center">
              <p v-if="closeHover" class="mb-0" :class="{ hoverStyle: closeHover }">Close</p>
              <v-icon @click="toggleCart" @mouseover="closeHover = true" @mouseout="closeHover = false" class="icon"
                style="font-size: 1.5rem;">mdi-close</v-icon>
            </div>
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center justify-space-between mt-2">
              <div class="d-flex align-center">
                <p>img</p>
                <div class="ml-4">
                  <p>Shoe Name</p>
                  <p>Size:</p>
                </div>
              </div>
              <div class="d-flex align-center">
                <v-btn icon="mdi-plus" variant="flat" density="compact" color="var(--light-green)" class="mx-2" />
                <p class="amount">0</p>
                <v-btn icon="mdi-minus" variant="flat" density="compact" color="var(--light-green)" class="mx-2" />
                <v-icon class="icon ml-4">mdi-delete</v-icon>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>

      <RouterLink to="/profile/profileInfo">
        <v-icon class="icon ml-4">mdi-account</v-icon>
      </RouterLink>
    </v-col>
  </header>
</template>

<style scoped>
header {
  border-bottom: solid 1px var(--borders);
}

.logo {
  font-size: 1.5rem;
  margin-bottom: 0;
  font-weight: bold;
}

.links {
  text-decoration: none;
  color: black;
  padding: 0 0.5rem;
}

.links:hover {
  color: var(--mid-green);
}

.active-link {
  font-weight: bold;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.2);
  /* dark tint */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: +2;
}


.dialogCard {
  position: absolute;
  min-height: 10rem;
  z-index: +4;
  top: 12%;
  right: 10%;
  background-color: white;
}

.amount {
  width: 2rem;
  text-align: center;
}

.hoverStyle {
  color: gray;
  font-size: 0.9rem;
}
</style>
