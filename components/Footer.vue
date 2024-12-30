<script setup>
    import DarkMode from "./DarkMode.vue";
</script>

<template>
    <div class="flex justify-between items-center p-4 border-t-2 border-neutral-400">
        <p>Copyright © 2025 YinCheng.</p>
        <div class="flex gap-2">
            <NuxtLink to="/">首頁</NuxtLink>
            <NuxtLink to="/about">關於</NuxtLink>
            <NuxtLink to="/terms">條款</NuxtLink>
        </div>
        <DarkMode />
    </div>
</template>
