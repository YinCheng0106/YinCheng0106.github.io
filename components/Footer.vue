<script setup>
    import DarkMode from "./DarkMode.vue";
</script>

<template>
    <div class="flex justify-between items-center p-4 border-t-2 border-neutral-400 text-sm">
        <p>© 2025 YinCheng.</p>
        <div class="flex flex-wrap gap-2">
            <NuxtLink class="_link" to="/about">關於</NuxtLink>
            <NuxtLink class="_link" to="/terms">條款</NuxtLink>
            <NuxtLink class="_link" to="https://github.com/YinCheng0106/YinCheng0106.github.io">GitHub</NuxtLink>
        </div>
        <DarkMode />
    </div>
</template>
