<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const ip = ref('載入中...');

onMounted(async () => {
  try {
    const { data } = await useFetch('/api/get-ip');
    if(data.value?.ip !== undefined) {
      ip.value = data.value.ip;
    } else {
      ip.value = '無法取得 IP 地址';
      console.log(data.value);
    }
  } catch (error) {
    ip.value = '錯誤 無法取得 IP 地址';
  }
});
</script>

<template>
  <div class="font-mono">{{ ip }}</div>
</template>
