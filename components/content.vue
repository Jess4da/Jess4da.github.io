<script setup lang="ts">
const router = useRouter();

const div_home = ref(null);
const div_about = ref(null);
const div_portfolio = ref(null);
const div_contact = ref(null);
const visibility = {
  home: useElementVisibility(div_home),
  about: useElementVisibility(div_about),
  portfolio: useElementVisibility(div_portfolio),
  contact: useElementVisibility(div_contact),
};
const hash_inView = computed(() => {
  for (const k in visibility) {
    if (visibility[k as keyof typeof visibility].value) {
      router.replace({ name: "/", hash: `#${k}` });
      return k;
    }
  }
});

const { data: info } = await useAsyncData("info", () => queryContent("/info").findOne());
</script>
<template>
  <nav class="sticky inset-0 h-0">
    <div class="flex justify-end font-semibold">
      <div
        class="bg-gradient-to-r from-[#5a547e] to-[#54767e] w-full lg:w-fit h-20 lg:rounded-es-3xl drop-shadow-lg flex justify-center items-center"
      >
        <div class="flex justify-around text-white text-lg xl:text-3xl px-10">
          <a
            class="mx-2 transition hover:scale-110"
            :class="hash_inView == 'home' ? 'text-[#FFEF63]' : ''"
            href="#home"
            >Home</a
          >
          <a
            class="mx-2 transition hover:scale-110"
            :class="hash_inView == 'about' ? 'text-[#FFEF63]' : ''"
            href="#about"
            >About</a
          >
          <a
            class="mx-2 transition hover:scale-110"
            :class="hash_inView == 'portfolio' ? 'text-[#FFEF63]' : ''"
            href="#portfolio"
            >Portfolio</a
          >
          <a
            class="mx-2 transition hover:scale-110"
            :class="hash_inView == 'contact' ? 'text-[#FFEF63]' : ''"
            href="#contact"
            >Contact</a
          >
        </div>
      </div>
    </div>
  </nav>
  <div class="h-fit w-full">
    <div
      ref="div_home"
      id="home"
      class="snap-always snap-start h-[100vh] w-full my-1 flex max-lg:flex-col-reverse"
    >
      <div class="flex items-end justify-center h-1/2 lg:h-full lg:w-[60%]">
        <div class="flex flex-col justify-end items-center h-full w-full">
          <div class="block aspect-square lg:bg-[#FFEF63] p-[20%] lg:p-[30%] rounded-[25%]"></div>
          <img class="block -mt-[50%] lg:-mt-[70%] h-[90%]" src="~/assets/img/profile.png" />
        </div>
      </div>
      <div class="flex justify-center font-semibold h-1/2 lg:h-full lg:w-[40%]">
        <div class="flex flex-col justify-center items-center text-center">
          <div class="flex items-center text-center mt-20">
            <p class="text-2xl xl:text-6xl text-white">I'm</p>
            <p class="text-4xl xl:text-8xl text-[#FFEF63] px-3 py-5">Jessada</p>
          </div>
          <div class="flex items-center text-center bg-white rounded-full px-6 py-3">
            <p
              class="text-xl xl:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
            >
              SOFTWARE ENGINEER
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      ref="div_about"
      id="about"
      class="flex justify-center items-start snap-always snap-start min-h-[100vh] h-fit w-full my-1"
    >
      <div class="flex justify-center items-start my-[15vh] lg:my-[5vh] xl:my-[10vh]">
        <div class="flex flex-col justify-center w-[70%]">
          <p class="text-white text-5xl lg:text-9xl mb-5 font-semibold">About</p>
          <div class="flex">
            <div class="bg-[#FFEF63] mt-5 rounded-full w-20 h-1 me-2"></div>
            <p class="text-white text-lg lg:text-3xl font-light">
              {{ info?.about.title }}
              <a class="text-[#FFEF63] font-semibold">love writing code</a>
              <a class="text-white">.</a>
            </p>
          </div>
          <p class="text-white text-3xl lg:text-5xl mt-10 font-semibold text-center">Skills</p>
          <div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2 lg:gap-5 mt-5">
            <div
              v-for="item in info?.about.skills"
              class="block aspect-square bg-slate-500 xl:hover:bg-[#FFEF63] rounded-2xl xl:transition xl:hover:scale-110"
            >
              <div class="p-9 lg:p-14 flex flex-col justify-center items-center h-full">
                <img :src="item.img" />
                <p class="text-white font-semibold text-md lg:text-2xl">{{ item.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="div_portfolio" id="portfolio" class="flex justify-center items-start snap-always snap-start min-h-[100vh] h-fit w-full my-1">
      Portfolio
    </div>
    <div
      ref="div_contact"
      id="contact"
      class="flex justify-center items-start snap-always snap-start min-h-[100vh] h-fit w-full my-1 "
    >
      Contact
    </div>
  </div>
</template>
