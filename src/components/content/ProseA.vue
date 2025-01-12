<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
    href: {
        type: String,
        default: ''
    },
    target: {
        type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
        default: undefined,
        required: false
    }
})
</script>

<template>
    <NuxtLink class="_link no-underline text-green-500" :href="props.href" :target="props.target">
        <slot />
    </NuxtLink>
</template>