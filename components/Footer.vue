<script setup>
    import DarkMode from "./DarkMode.vue";
</script>

<template>
    <div class="flex justify-between items-center p-4 border-t-2 border-neutral-400">
        <p>Copyright © 2025 YinCheng.</p>
        <div class="flex gap-2">
            <a href="/">首頁</a>
            <a href="/about">關於</a>
            <a href="/terms">條款</a>
        </div>
        <DarkMode />
    </div>
</template>
