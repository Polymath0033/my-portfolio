<script setup lang="ts">
console.log("Hello from SideLayout");
defineProps<{ className?: string }>();
</script>
<template>
  <aside
    :class="[
      'relative left-0 z-50 md:w-[220px] min-[1100px]:w-[270px] border-r border-border h-full',
      className,
    ]"
  >
    <slot />
  </aside>
</template>
