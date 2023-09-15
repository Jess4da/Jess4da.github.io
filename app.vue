<script setup lang="ts">
const { width, height } = useWindowSize();
</script>
<template>
  <Desktop v-if="width > 1420"></Desktop>
  <Mobile v-else></Mobile>
</template>
<style>
html {
  @apply bg-gradient-to-br from-[#151E27] to-slate-800 scroll-smooth snap-y snap-mandatory;
}
</style>
