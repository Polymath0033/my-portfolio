<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <header class="flex justify-between w-full border-b border-border items-center ">
        <nav class="flex items-center h-full">
            <p
                class="text-base px-3 py-2 text-[#607B96] border border-border rounded-tl-lg border-t-0 border-b-0 border-l-0 w-[250px]">
                yusuf-olosan</p>
            <nav class="flex h-full">
                <RouterLink to="/" class="py-2 px-3 border border-border border-t-0 border-b-0">_hello</RouterLink>
                <RouterLink to="/about-me" class="py-2 px-3 border border-border border-t-0 border-b-0">_about-me
                </RouterLink>
                <RouterLink to="/experiences" class="py-2 px-3 border border-border border-t-0 border-b-0">_experiences
                </RouterLink>
                <RouterLink to="projects" class="py-2 px-3 border border-border border-t-0 border-b-0">_projects
                </RouterLink>
            </nav>
        </nav>
        <RouterLink to="contact-me"
            class="text-[#607B96] px-4 text-base border border-border py-2 w-[160px] rounded-tr-lg border-t-0 border-b-0">
            _contact-me
        </RouterLink>
    </header>
</template>
<style lang="css" scoped>
header a {
    color: #607B96;
}

header a.router-link-exact-active {
    color: #fff;
    border-bottom-width: 3px;
    border-bottom-color: #FEA55F;
}
</style>