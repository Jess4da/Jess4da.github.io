<script setup lang="ts"></script>
<template>
  <div class="sticky inset-0 h-0">
    <div class="flex justify-end">
      <div
        class="bg-gradient-to-r from-[#5a547e] to-[#54767e] w-fit h-20 rounded-es-3xl drop-shadow-lg flex justify-center items-center"
      >
        <div class="flex justify-around text-white text-3xl px-10">
          <a class="mx-2 hover:underline" href="#home">Home</a>
          <a class="mx-2 hover:underline" href="#skills">Skills</a>
          <a class="mx-2 hover:underline" href="#experiences">Experiences</a>
          <a class="mx-2 hover:underline" href="#educations">Educations</a>
          <a class="mx-2 hover:underline" href="#contacts">Contacts</a>
          <span>{{ $route.hash }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="h-[500vh] w-full">
    <div id="home" class="snap-always snap-start h-[100vh] w-full">
      <div class="flex justify-center h-full w-[60%]">
        <div class="flex flex-col items-center justify-end">
          <div class="bg-[#FFEF63] w-[700px] h-[700px] rounded-[25%]"></div>
          <img class="-mt-[90%]" src="~/assets/img/profile.png" width="850" height="850" />
        </div>
      </div>
    </div>
    <div id="skills" class="snap-always snap-start h-[100vh] w-full">Skills</div>
    <div id="experiences" class="snap-always snap-start h-[100vh] w-full">Experiences</div>
    <div id="educations" class="snap-always snap-start h-[100vh] w-full">Educations</div>
    <div id="contacts" class="snap-always snap-start h-[100vh] w-full">Contacts</div>
  </div>
</template>
<style>
html {
  @apply bg-[#151E27] scroll-smooth snap-y snap-mandatory;
}
</style>
