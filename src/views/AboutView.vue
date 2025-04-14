<script setup lang="ts">
import SideLayout from '@/components/layouts/side-layout.vue';
</script>
<template>
  <main class="relative w-full h-[calc(100%_-_83.64px)] flex">
    <side-layout>
    <div class="w-full flex" >Hello word</div>
    </side-layout>
    <section class=" flex flex-col md:w-[calc(100%_-_220px)] min-[1100px]:w-[calc(100%_-_270px)] h-full relative   " ><h1>This is an about page</h1></section>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
