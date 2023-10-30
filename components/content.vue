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
          <svg
            height="200px"
            width="200px"
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xml:space="preserve"
            fill="#000000"
            class="h-10 w-10 aspect-square"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path
                  class="st0"
                  d="M341.601,0H170.397c-29.29,0-53.12,23.828-53.12,53.121v405.758c0,29.29,23.83,53.121,53.12,53.121h171.204 c29.292,0,53.121-23.832,53.121-53.117V53.121C394.722,23.828,370.893,0,341.601,0z M255.999,480.622 c-11.869,0-21.526-9.658-21.526-21.526c0-11.871,9.656-21.526,21.526-21.526c11.869,0,21.526,9.655,21.526,21.526 C277.525,470.964,267.868,480.622,255.999,480.622z M363.274,67.271v340.156h-214.55V67.271H363.274z"
                ></path>
              </g>
            </g>
          </svg>
          <p class="ms-5 text-white font-semibold text-lg">(+66) 83 962 1222</p>
        </a>
        <a
          class="flex items-center justify-start bg-slate-500 px-10 py-5 rounded-2xl xl:transition xl:hover:scale-110"
          href="mailto:jessada.d@icloud.com"
        >
          <svg
            viewBox="0 -3.5 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            fill="#000000"
            class="h-10 aspect-square"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>mail</title>
              <desc>Created with Sketch Beta.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                sketch:type="MSPage"
              >
                <g
                  id="Icon-Set-Filled"
                  sketch:type="MSLayerGroup"
                  transform="translate(-414.000000, -261.000000)"
                  fill="#000000"
                >
                  <path
                    d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"
                    id="mail"
                    sketch:type="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </g>
          </svg>

          <p class="ms-5 text-white font-semibold text-lg">jessada.d@icloud.com</p>
        </a>
        <a
          class="flex items-center justify-start bg-slate-500 p-5 rounded-2xl xl:transition xl:hover:scale-110"
          href="https://github.com/Jess4da"
          target="_blank"
        >
          <svg
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000000"
            class="h-10 aspect-square"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>github [#142]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -7559.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      id="github-[#142]"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>

          <p class="ms-5 text-white font-semibold text-lg">github.com/Jess4da</p>
        </a>
        <a
          class="flex items-center justify-start bg-slate-500 p-5 rounded-2xl xl:transition xl:hover:scale-110"
          href="https://www.linkedin.com/in/jessada-d"
          target="_blank"
        >
          <svg
            fill="#000000"
            height="200px"
            width="200px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="-143 145 512 512"
            xml:space="preserve"
            class="h-10 w-10 aspect-square"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "
              ></path>
            </g>
          </svg>

          <p class="ms-5 text-white font-semibold text-lg">linkedin.com/in/jessada-d</p>
        </a>
        <a
          class="flex lg:justify-self-center lg:col-span-2 lg:w-1/2 items-center justify-start bg-slate-500 px-10 py-5 rounded-2xl xl:transition xl:hover:scale-110"
          href="https://github.com/Jess4da/Jess4da.github.io/releases/latest/download/Resume.pdf"
          target="_blank"
          ><svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 aspect-square"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V12.1893L14.4697 10.4697C14.7626 10.1768 15.2374 10.1768 15.5303 10.4697C15.8232 10.7626 15.8232 11.2374 15.5303 11.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L11.25 12.1893V7C11.25 6.58579 11.5858 6.25 12 6.25ZM8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
          <p class="ms-5 text-white font-semibold text-lg">Download Resume</p>
        </a>
      </div>
      <div class="flex justify-center items-center w-[80%] lg:w-[70%] mb-5">
        <div class="w-full self-center h-1 rounded-full bg-[#FFEF63] my-10"></div>
      </div>
    </div>
  </div>
  <div class="inset-0 bottom-0 text-center m-5 text-white">Copyright ©2023 Jess4da</div>
</template>
