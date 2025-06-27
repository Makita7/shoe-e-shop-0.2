<script setup lang="ts">
import { defineComponent, ref } from 'vue';

defineComponent({
  name: 'ProfileInfoComp',
})

const permitEdit = ref(true);

const data = ref({
  name: "Sofia",
  age: 30,
  gender: 'female',
  phoneNumber: 784382938,
  street: 'street name',
  streetNumber: 321,
  apartment: 4,
  floor: 7,
  postalCode: 5501,
  city: "Godoy Cruz",
  province: "Mendoza",
  country: "Argentina",
});

const name = ref(data.value.name);
const age = ref(data.value.age);
const gender = ref(data.value.gender);
const phone = ref(data.value.phoneNumber);

const street = ref(data.value.street);
const streetNumber = ref(data.value.streetNumber);
const apartment = ref(data.value.apartment);
const floor = ref(data.value.floor);


const postalCode = ref(data.value.postalCode);
const city = ref(data.value.city);
const province = ref(data.value.province);
const country = ref(data.value.country);

</script>

<template>
  <div class="text-capitalize">
    <h3 class="text-center mb-4" style="color: var(--mid-green);">Profile Information</h3>

    <div class="d-flex">
      <v-text-field v-model="name" label="Name" variant="outlined" width="50%" class="mr-2" :readonly="permitEdit"
        color="var(--green)" />
      <v-text-field v-model="age" label="Age" variant="outlined" width="50%" class="ml-2" :readonly="permitEdit"
        color="var(--green)" />
    </div>
    <div class="d-flex">
      <v-text-field v-model="gender" label="Gender" variant="outlined" width="50%" class="mr-2" :readonly="permitEdit"
        color="var(--green)" />
      <!-- TODO: Format number -->
      <v-text-field v-model="phone" label="Phone Number" variant="outlined" width="50%" class="ml-2"
        :readonly="permitEdit" color="var(--green)" />
    </div>
    <hr class="my-2" />
    <h4 class="text-center mt-4 mb-6 addressTitle">Address</h4>
    <div class="d-flex">
      <v-text-field v-model="street" label="Street" variant="outlined" width="50%" class="mr-2" :readonly="permitEdit"
        color="var(--green)" />
      <v-text-field v-model="streetNumber" label="streetNumber" variant="outlined" width="50%" class="mr-2"
        :readonly="permitEdit" color="var(--green)" />
      <v-text-field v-model="apartment" label="Apartment" variant="outlined" width="50%" class="ml-2"
        :readonly="permitEdit" color="var(--green)" />
      <v-text-field v-model="floor" label="Floor" variant="outlined" width="50%" class="ml-2" :readonly="permitEdit"
        color="var(--green)" />
    </div>
    <div class="d-flex">
      <v-text-field v-model="postalCode" label="postal Code" variant="outlined" width="50%" class="mr-2"
        :readonly="permitEdit" color="var(--green)" />
      <v-text-field v-model="city" label="City" variant="outlined" width="50%" class="ml-2" :readonly="permitEdit"
        color="var(--green)" />
    </div>
    <div class="d-flex">
      <v-text-field v-model="province" label="Province" variant="outlined" width="50%" class="mr-2"
        :readonly="permitEdit" color="var(--green)" />
      <v-text-field v-model="country" label="Country" variant="outlined" width="50%" class="ml-2" :readonly="permitEdit"
        color="var(--green)" />
    </div>

    <div class="d-flex justify-end">
      <v-btn @click="permitEdit = !permitEdit" class="mb-5" color="var(--light-green)" flat>Edit Information</v-btn>
    </div>
  </div>
</template>


<style scoped>
.addressTitle {
  font-size: 1.2rem;
  color: var(--mid-green);
}
</style>
