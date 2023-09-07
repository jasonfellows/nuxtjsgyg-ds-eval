<template>
  <div>
    <span class="">
      Do you use a reservation system for your availability?
    </span>
    <Button unstyled class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100">
      This is a button in PrimeVue
    </Button>
  </div>
</template>
<script setup>
import PrimeVue from "primevue/config";
import Tailwind from "primevue/passthrough/tailwind";
import Button from "primevue/button";

const nuxtApp = useNuxtApp();
nuxtApp.vueApp.use(PrimeVue, {
  pt: Tailwind,
});

</script>