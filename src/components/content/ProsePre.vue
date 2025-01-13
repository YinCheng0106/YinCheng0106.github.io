<script setup lang="ts">
defineProps({
    code: {
        type: String,
        default: '',
    },
    language: {
        type: String,
        default: null,
    },
    filename: {
        type: String,
        default: null,
    },
    highlights: {
        type: Array as () => number[],
        default: () => [],
    },
    meta: {
        type: String,
        default: null,
    },
    class: {
        type: String,
        default: null,
    },
});
</script>

<template>
    <div>
    <div v-if="$props.filename" class="bg-gray-300 font-mono text-sm border
        border-gray-400 py-2 px-3 rounded-t-md text-black dark:bg-gray-900 dark:text-white dark:border-gray-800 dark:border">
        {{ $props.filename }}
    </div>
    <pre :class="{
        [$props.class as string]: true,
        'mt-0 rounded-t-none': $props.filename,
    }"><slot /></pre>
    </div>
</template>

<style>
pre code .line {
    display: block;
}
</style>