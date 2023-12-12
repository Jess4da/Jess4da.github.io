<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";
import "boxicons";

AOS.init({
  mirror: true,
});
</script>
<template>
  <Content></Content>
</template>
<style>
html,
body {
  @apply bg-gradient-to-br from-[#151E27] to-slate-800 scroll-smooth bg-[#151E27];
}
</style>
