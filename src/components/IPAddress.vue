<script lang="ts" setup>
const ip = ref('Loading...');

onMounted(async () => {
  try {
    const data = await $fetch('/api/get-ip');
    if(data.ip !== null) {
      ip.value = data.ip;
      console.log("S: ", data.ip);
    } else {
      ip.value = '無法取得 IP 地址';
      console.log("E: ", data);
    }
  } catch (error) {
    ip.value = '錯誤 無法取得 IP 地址';
  }
});
</script>

<template>
  <div class="font-mono">{{ ip }}</div>
</template>
