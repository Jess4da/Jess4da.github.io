<script setup lang="ts">
import info from "~/assets/json/info.json";

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
  const visible: string[] = [];
  for (const k in visibility) {
    if (visibility[k as keyof typeof visibility].value) {
      router.replace({ name: "/", hash: `#${k}` });
      visible.push(k);
    }
  }
  return visible;
});
</script>
<template>
  <nav class="sticky inset-0 h-0 z-max">
    <div class="flex justify-end font-semibold">
      <div
        class="bg-gradient-to-r from-[#5a547e] to-[#54767e] w-full lg:w-fit h-20 lg:rounded-es-3xl drop-shadow-lg flex justify-center items-center"
      >
        <div class="flex justify-around text-white text-lg xl:text-3xl px-10">
          <a
            class="mx-2 transition hover:scale-110"
            :class="hash_inView.includes('home') ? 'text-[#FFEF63]' : ''"
            href="#home"
            >Home</a
          >
          <a
            class="mx-2 transition hover:scale-110"
            :class="hash_inView.includes('about') ? 'text-[#FFEF63]' : ''"
            href="#about"
            >About</a
          >
          <a
            class="mx-2 transition hover:scale-110"
            :class="hash_inView.includes('portfolio') ? 'text-[#FFEF63]' : ''"
            href="#portfolio"
            >Portfolio</a
          >
          <a
            class="mx-2 transition hover:scale-110"
            :class="hash_inView.includes('contact') ? 'text-[#FFEF63]' : ''"
            href="#contact"
            >Contact</a
          >
        </div>
      </div>
    </div>
  </nav>
  <div class="h-fit w-full">
    <div ref="div_home" id="home" class="h-[100vh] w-full mb-1 flex max-lg:flex-col-reverse">
      <div class="flex items-end justify-center h-1/3 lg:h-full lg:w-[60%]" data-aos="fade-right">
        <div class="flex flex-col justify-end items-center h-full w-full">
          <div class="aspect-square lg:bg-[#FFEF63] p-[20%] lg:p-[30%] rounded-[25%]"></div>
          <div class="aspect-square -mt-[50%] lg:-mt-[70%] h-[110%] lg:h-[90%]">
            <img class="h-full w-full" src="~/assets/img/profile.png" />
          </div>
        </div>
      </div>
      <div class="flex justify-center font-semibold h-2/3 lg:h-full lg:w-[40%]">
        <div class="flex flex-col justify-center items-center text-center" data-aos="fade-left">
          <div class="flex items-center text-center mt-20">
            <p class="text-4xl xl:text-6xl text-white">I'm</p>
            <p class="text-6xl xl:text-8xl text-[#FFEF63] px-3 py-5">Jessada</p>
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
      class="flex justify-center items-start min-h-[100vh] h-fit w-full my-1"
    >
      <div class="flex justify-center my-[15vh] lg:my-[5vh] xl:my-[10vh] w-full">
        <div class="flex flex-col justify-center w-[80%] lg:w-[70%]" data-aos="fade-up">
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
          <div
            class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 lg:gap-5 mt-5"
          >
            <div v-for="item in info?.about.skills" data-aos="flip-down">
              <div
                class="block aspect-square bg-slate-500 xl:hover:bg-[#FFEF63] rounded-2xl xl:transition xl:hover:scale-110"
              >
                <div
                  class="p-9 lg:p-14 flex flex-col justify-center items-center h-full text-white xl:hover:text-slate-800"
                >
                  <img :src="item.img" />
                  <p class="font-semibold text-md lg:text-2xl">{{ item.label }}</p>
                  <p class="font-normal text-[10px] lg:text-base">Since {{ item.since }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      ref="div_portfolio"
      id="portfolio"
      class="flex justify-center items-start min-h-[100vh] h-fit w-full my-1"
    >
      <div class="flex justify-center my-[15vh] lg:my-[5vh] xl:my-[10vh] w-full">
        <div class="flex flex-col w-[70%]">
          <p class="text-white text-4xl lg:text-6xl mb-5 font-semibold" data-aos="fade-up">
            Experience
          </p>
          <div
            class="flex justify-center"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <ol class="relative border-l border-gray-700 w-full xl:max-w-[60%]">
              <li v-for="item in info?.portfolio.experience" class="mb-10 ml-4">
                <div
                  class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border-none bg-[#FFEF63]"
                ></div>
                <div
                  class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border-none bg-[#FFEF63] animate-ping"
                ></div>
                <time class="mb-1 text-sm lg:text-base font-normal leading-none text-gray-500">{{
                  item.year
                }}</time>
                <h3 class="text-2xl lg:text-4xl font-semibold text-white">
                  {{ item.title }}
                </h3>
                <p class="text-base lg:text-lg font-normal text-gray-300">
                  {{ item.subtitle }}
                </p>
                <ul class="ms-10 list-disc text-sm lg:text-base font-light text-gray-400">
                  <li v-for="d in item.detail">
                    {{ d }}
                  </li>
                </ul>
                <p class="text-sm lg:text-base font-light text-gray-300">
                  Tech stack: <a class="font-semibold">{{ item.stack }}</a>
                </p>
              </li>
            </ol>
          </div>
          <div class="w-[80%] lg:w-[50%] self-center h-1 rounded-full bg-[#FFEF63] my-10"></div>
          <p class="text-white text-4xl lg:text-6xl mb-5 font-semibold" data-aos="fade-up">
            Project
          </p>
          <div
            class="flex justify-center"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <ol class="relative border-l border-gray-700 w-full xl:max-w-[60%]">
              <li v-for="item in info?.portfolio.project" class="mb-10 ml-4">
                <div
                  class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border-none bg-[#FFEF63]"
                ></div>
                <div
                  class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border-none bg-[#FFEF63] animate-ping"
                ></div>
                <time class="mb-1 text-sm lg:text-base font-normal leading-none text-gray-500">{{
                  item.year
                }}</time>
                <h3 class="text-2xl lg:text-4xl font-semibold text-white">
                  {{ item.title }}
                </h3>
                <p class="text-base lg:text-lg font-normal text-gray-300">
                  {{ item.subtitle }}
                </p>
                <ul class="ms-10 list-disc text-sm lg:text-base font-light text-gray-400">
                  <li v-for="d in item.detail">
                    {{ d }}
                  </li>
                </ul>
                <p class="text-sm lg:text-base font-light text-gray-300">
                  Tech stack: <a class="font-semibold">{{ item.stack }}</a>
                </p>
              </li>
            </ol>
          </div>
          <div class="w-[80%] lg:w-[50%] self-center h-1 rounded-full bg-[#FFEF63] my-10"></div>
          <p class="text-white text-4xl lg:text-6xl mb-5 font-semibold" data-aos="fade-up">
            Education
          </p>
          <div
            class="flex justify-center"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <ol class="relative border-l border-gray-700 w-full xl:max-w-[60%]">
              <li v-for="item in info?.portfolio.education" class="mb-10 ml-4">
                <div
                  class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border-none bg-[#FFEF63]"
                ></div>
                <div
                  class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border-none bg-[#FFEF63] animate-ping"
                ></div>
                <time class="mb-1 text-sm lg:text-base font-normal leading-none text-gray-500">{{
                  item.year
                }}</time>
                <h3 class="text-2xl lg:text-4xl font-semibold text-white">
                  {{ item.title }}
                </h3>
                <p class="text-base lg:text-lg font-normal text-gray-300">
                  {{ item.subtitle }}
                </p>
                <ul class="ms-10 list-disc text-sm lg:text-base font-light text-gray-400">
                  <li v-for="d in item.detail">
                    {{ d }}
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div
      ref="div_contact"
      id="contact"
      class="flex flex-col justify-start items-center h-fit w-full my-1 mb-10"
    >
      <div class="flex justify-center items-center w-[80%] lg:w-[70%] mb-5">
        <div class="w-[80%] lg:w-[50%] self-center h-1 rounded-full bg-[#FFEF63] my-10"></div>
        <p class="text-white mx-5 text-4xl lg:text-6xl font-semibold" data-aos="fade-up">Contact</p>
        <div class="w-[80%] lg:w-[50%] self-center h-1 rounded-full bg-[#FFEF63] my-10"></div>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5"
        data-aos="flip-right"
        data-aos-anchor-placement="bottom-bottom"
      >
        <a
          class="flex items-center justify-start bg-slate-500 px-10 py-5 rounded-2xl xl:transition xl:hover:scale-110"
          href="tel:+66839621222"
        >
          <box-icon name="mobile" size="lg" color="#151E27"></box-icon>
          <p class="ms-5 text-white font-semibold text-lg">(+66) 83 962 1222</p>
        </a>
        <a
          class="flex items-center justify-start bg-slate-500 px-10 py-5 rounded-2xl xl:transition xl:hover:scale-110"
          href="mailto:jessada.d@icloud.com"
        >
          <box-icon name="gmail" type="logo" size="lg" color="#151E27"></box-icon>
          <p class="ms-5 text-white font-semibold text-lg">jessada.d@icloud.com</p>
        </a>
        <a
          class="flex items-center justify-start bg-slate-500 p-5 rounded-2xl xl:transition xl:hover:scale-110"
          href="https://github.com/Jess4da"
          target="_blank"
        >
          <box-icon name="github" type="logo" size="lg" color="#151E27"></box-icon>
          <p class="ms-5 text-white font-semibold text-lg">github.com/Jess4da</p>
        </a>
        <a
          class="flex items-center justify-start bg-slate-500 p-5 rounded-2xl xl:transition xl:hover:scale-110"
          href="https://www.linkedin.com/in/jessada-d"
          target="_blank"
        >
          <box-icon name="linkedin" type="logo" size="lg" color="#151E27"></box-icon>
          <p class="ms-5 text-white font-semibold text-lg">linkedin.com/in/jessada-d</p>
        </a>
        <a
          class="flex lg:justify-self-center lg:col-span-2 lg:w-1/2 items-center justify-start bg-slate-500 px-10 py-5 rounded-2xl xl:transition xl:hover:scale-110"
          href="https://github.com/Jess4da/Jess4da.github.io/releases/latest/download/Resume.pdf"
          target="_blank"
        >
          <box-icon name="download" size="lg" color="#151E27"></box-icon>
          <p class="ms-5 text-white font-semibold text-lg">Download Resume</p>
        </a>
      </div>
      <div class="flex justify-center items-center w-[80%] lg:w-[70%] mb-5">
        <div class="w-full self-center h-1 rounded-full bg-[#FFEF63] my-10"></div>
      </div>
    </div>
  </div>
  <div class="inset-0 bottom-0 text-center m-5 text-white">
    <p class="inline-flex">
      <a>Copyright</a>
      <a><box-icon name="copyright" color="white" class="ms-2"></box-icon></a>
      <a>2023 Jess4da</a>
    </p>
  </div>
</template>
