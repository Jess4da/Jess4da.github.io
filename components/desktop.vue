<script setup lang="ts">
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

const router = useRouter();

const hash_inView = computed(() => {
  for (const k in visibility) {
    if (visibility[k as keyof typeof visibility].value) {
      router.replace({ name: "/", hash: `#${k}` });
      return k;
    }
  }
});
</script>
<template>
  <div class="sticky inset-0 h-0">
    <div class="flex justify-end font-semibold">
      <div
        class="bg-gradient-to-r from-[#5a547e] to-[#54767e] w-fit h-20 rounded-es-3xl drop-shadow-lg flex justify-center items-center"
      >
        <div class="flex justify-around text-white text-3xl px-10">
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
  </div>
  <div class="h-[510vh] w-full">
    <div ref="div_home" id="home" class="flex select-none snap-always snap-start h-[100vh] w-full">
      <div class="flex justify-center h-full w-[60%]">
        <div class="flex flex-col items-center justify-end">
          <div class="bg-[#FFEF63] w-[80%] h-[70%] rounded-[25%]"></div>
          <img class="-mt-[90%] w-[850px] h-[850px]" src="~/assets/img/profile.png" />
        </div>
      </div>
      <div class="flex justify-center h-full w-[30%] font-semibold">
        <div class="flex flex-col justify-center items-center text-center">
          <div class="flex items-center text-center">
            <p class="text-6xl text-white">I'm</p>
            <p class="text-8xl text-[#FFEF63] p-5">Jessada</p>
          </div>
          <div class="flex items-center text-center bg-white rounded-full px-6 py-3 ">
            <p class="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              SOFTWARE ENGINEER
            </p>
          </div>
        </div>
      </div>
    </div>
    <div ref="div_about" id="about" class="snap-always snap-start h-[100vh] w-full my-1 bg-white bg-opacity-[0.01]">About</div>
    <div ref="div_portfolio" id="portfolio" class="snap-always snap-start h-[200vh] w-full my-1">
      Portfolio
    </div>
    <div ref="div_contact" id="contact" class="snap-always snap-start h-[100vh] w-full my-1">
      Contact
    </div>
  </div>
</template>

