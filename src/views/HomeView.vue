<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
const isOnline = ref(navigator.onLine);
const iframeSrc = ref('https://lottie.host/embed/807a7106-2bf0-4e71-a24a-b93f68f4debe/uJp3IFcj6v.json');

const updateConnectionStatus = () => {
  isOnline.value = navigator.onLine;
};

onMounted(() => {
  window.addEventListener('online', updateConnectionStatus);
  window.addEventListener('offline', updateConnectionStatus);
});

onBeforeUnmount(() => {
  window.removeEventListener('online', updateConnectionStatus);
  window.removeEventListener('offline', updateConnectionStatus);
});
</script>

<template>
  <main class="flex justify-center items-center h-[calc(100%_-_81px)] gap-4">
    <section class="w-full flex flex-col gap-0 md:pl-[200px] min-[1100px]:pl-[250px]">
      <p class="md:text-sm min-[1000px]:text-lg font-normal text-[#E5E9F0] mt-0 mb-0">Hi all. I am</p>
      <h2 class="text-[#E5E9F0] md:text-[40px] min-[1000px]:text-[62px] font-light mt-0 mb-0">Yusuf Olosan</h2>
      <h5 class="text-[#4D5BCE] text-[32px] mt-0 mb-0 flex gap-2 ">><span class="animated-text">Fullstack Developer</span></h5>
      <p class="text-[#607B96] text-base mt-8">// building intuitive <span class="text-[#E99287]">web</span> and <span class="text-[#E99287]">mobile</span> apps</p>
      <p class="text-[#607B96] text-base">// you can also see it on my Github page</p>
      <p class="text-sm font-normal text-[#4D5BCE]">const <span class="text-[#43D9AD]">githubLink</span> <span class="text-white">=</span> <a href="https://github.com/Polymath0033/my-portfolio" target="_blank"  class="text-[#E99287]">“https://github.com/Polymath0033/my-portfolio”</a></p>
    </section>
    <section class="relative md:pr-[100px] min-[1100px]:pr-[170px] hidden md:block">
       <img class="absolute -left-28 -top-32 z-10" src="../assets/Green.png" alt="green">
      <img class="absolute -right-28 -bottom-32 z-10"  src="../assets/Blue.png" alt="blue">
      <div class="md:w-[235px] md:h-[250px] min-[1100px]:w-[350px] min-[1100px]:h-[300px] border bg-gradient shadow-shadow-box z-30 relative border-[#0C1616] rounded-lg" >
        <img src="../assets/bolt-up-left.png" alt="bolt-up-left" class="absolute top-1 left-1">
        <img src="../assets/bolt-up-left.png" alt="bolt-up-left" class="absolute top-1 right-1">
        <img src="../assets/bolt-up-left.png" alt="bolt-up-left" class="absolute bottom-1 left-1">
        <img src="../assets/bolt-up-left.png" alt="bolt-up-left" class="absolute bottom-1 right-1">
     <iframe v-if="isOnline" class="!w-full !h-full" width="350" height="300" :src="iframeSrc"></iframe>
     <div v-else class="flex justify-center items-center w-full h-full">
    <img  src="../assets/developer_outline I_black.svg" class="w-[350px] h-[300px]" alt="Developer" />
     </div>

    </div> 
    </section>
    <!-- <TheWelcome /> -->
  </main>
</template>
<style lang="css" scoped>
.animated-text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.1em solid #fff;
  animation: typing 5s steps(20, end) 1s infinite, blink 0.7s step-end infinite alternate;
}

@keyframes typing {
  0% {
    width: 0;
  }
  50% {
    width: 390px;
  }
  100% {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

</style>
