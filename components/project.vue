<script lang="ts" setup>
import { ref } from 'vue';
let id:number = 0;
const repos = ref([
    { id: id++, name: "YINLA", url: "https://github.com/YINLA-TEAM/YINLA", description: "這是一隻Discord的BOT，不定時會更新，主要功能是檢視天氣、檢視地震(含推播功能)、文字翻譯、查詢中油油價(含推播功能)以及查詢中華職棒相關的功能" },
    { id: id++, name: "YINLA", url: "https://github.com/YINLA-TEAM/YINLA", description: "這是一隻Discord的BOT，不定時會更新，主要功能是檢視天氣、檢視地震(含推播功能)、文字翻譯、查詢中油油價(含推播功能)以及查詢中華職棒相關的功能" },
])
</script>

<template>
    <div class="p-4 m-2 rounded-xl">
        <h1 class="text-3xl font-bold">REPOS</h1>
        <ul>
            <li v-for="r in repos" :key="r.id">
                <div class="grid grid-cols-1">
                    <a :href="r.url" target="_blank">
                        <div class="p-2 m-2 bg-neutral-500 rounded-xl hover:bg-neutral-700">
                            <h2 class="font-bold text-2xl">{{r.name}}</h2>
                            <p class="px-4 py-2 text-xs">{{r.description}}</p>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>