<script setup lang="ts">
console.log('Hello from SideLayout');
</script>
<template>
    <aside class="md:w-[200px] min-[1100px]:w-[250px] border-r border-border h-full " >
        <slot/>
    </aside>
</template>