<template>
  <div class="flex-col flex gap-8">
    <div class="flex flex-col gap-4 w-[512px]">
      <span class="text-lg font-bold text-label-primary">
        Do you use a reservation system for your availability?
      </span>
      <span class="text-base text-label-primary font-normal">
        Manage pricing and scheduling automatically on GetYourGuide by connecting your products to an external reservation system. Learn more.
      </span>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-3" v-for="value of values">
        <RadioButton v-model="selected" :name="value.name" :value="value.value" :id="value.id" />
        <label :for="value.id"> {{ value.name }} </label>
      </div>
    </div>
    <Button class="w-44">
      Save and Continue
    </Button>
  </div>
</template>
<script setup>
import Button from "primevue/button";
import RadioButton from "primevue/radiobutton";

const values = [
  { name: "No, I don’t", value: "false", id: "yes" },
  { name: "Yes, I use a reservation system", value: "true", id: "no" }
];

const selected = ref(null);
</script>
