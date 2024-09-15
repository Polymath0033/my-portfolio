<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="flex justify-center items-center h-[calc(100%_-_81px)]">
    <section class="w-full flex flex-col gap-0 pl-[250px]">
      <p class="text-lg font-normal text-[#E5E9F0] mt-0 mb-0">Hi all. I am</p>
      <h2 class="text-[#E5E9F0] text-[62px] font-light mt-0 mb-0">Yusuf Olosan</h2>
      <h5 class="text-[#4D5BCE] text-[32px] mt-0 mb-0 flex gap-2 ">><span class="animated-text">Front-end Engineer</span></h5>
      <p class="text-[#607B96] text-base mt-8">//Building for web and mobile</p>
      <p class="text-[#607B96] text-base">// you can also see it on my Github page</p>
      <p class="text-sm font-normal text-[#4D5BCE]">const <span class="text-[#43D9AD]">githubLink</span> <span class="text-white">=</span> <span class="text-[#E99287]">“https://github.com/Polymath0033/my-portfolio”</span></p>
    </section>
    <section class="w- pr-[160px]">
      <div class="w-[350px] h-[350px] border">
     <!-- <iframe width="350" height="350" src="https://lottie.host/embed/807a7106-2bf0-4e71-a24a-b93f68f4debe/uJp3IFcj6v.json"></iframe>
     --> </div> 

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
