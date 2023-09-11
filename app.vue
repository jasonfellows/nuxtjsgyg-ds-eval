<template>
  <Main />
</template>
<script setup>
import PrimeVue from "primevue/config";
import Tailwind from "primevue/passthrough/tailwind";
import Main from "./src/pages/main.vue";
import { usePassThrough } from "primevue/passthrough";

const CustomTailwind = usePassThrough(
  Tailwind,
  {
    button: {
      root: () => ({
        class: [
          "bg-interactive-primary rounded-3xl text-base font-sans",
        ]
      }),
    },
    radiobutton: {
      root: {
        class: ['relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6']
      },
      input: ({ props }) => ({
        class: [
          'flex justify-center items-center',
          'border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out',
          {
            'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80': props.value !== props.modelValue,
            'border-blue-500 dark:border-blue-400 dark:bg-blue-400': props.value == props.modelValue
          },
          {
            'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
            'cursor-default opacity-60': props.disabled
          }
        ]
      }),
      icon: ({ props }) => ({
        class: [
          'transform rounded-full',
          'block w-3 h-3 transition duration-200 dark:bg-gray-900 pi pi-check',
          {
            'backface-hidden scale-10 invisible': props.value !== props.modelValue,
            'bg-black': props.value == props.modelValue
          }
        ]
      })
    }
  },
  {
    mergeSections: true,
    mergeProps: false,
  }
);

const nuxtApp = useNuxtApp();
nuxtApp.vueApp.use(PrimeVue, {
  pt: CustomTailwind,
  unstyled: true,
});

</script>