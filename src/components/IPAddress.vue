<script lang="ts" setup>
const ip = ref('Loading...');
const country = ref('Loading...');
const city = ref('Loading...');
const delay = ref('Loading...');
const currencyCode = ref('Loading...');
const currencyConverter = ref('Loading...');

onMounted(async () => {
  try {
    const data = await $fetch('/api/get-ip');
    if(data.ip === "127.0.0.1") {
      ip.value = "本機";
      console.log("Local: ", data.ip);
    } else if (data.ip) {
      ip.value = data.ip;
      console.log("S: ", data.ip);
      return;
    } else {
      ip.value = '無法取得 IP 地址';
      console.log("E: ", data);
      return;
    }
    const geoData = await $fetch(`http://www.geoplugin.net/json.gp?ip=${data.ip}`);
    console.log(geoData);
    country.value = geoData.geoplugin_countryName || '未知國家';
    city.value = geoData.geoplugin_city || '未知城市';
    delay.value = geoData.geoplugin_delay || '錯誤';
    currencyCode.value = geoData.geoplugin_currencyCode || '錯誤';
    currencyConverter.value = geoData.geoplugin_currencyConverter || '錯誤';
  } catch (error) {
    console.error('Error fetching IP or country:', error);
    country.value = 'Not Found';
    city.value = 'Not Found';
    delay.value = 'Not Found';
  }
});
</script>

<template>
  <div class="border-2 border-gray-300 m-4 rounded-lg">
    <h3 class="font-bold flex justify-center border-b">IP</h3>
    <div class="font-mono flex justify-center">{{ ip }}</div>
  </div>
  <div class="grid md:grid-cols-2 gap-4">
    <div class="border-2 border-gray-300 rounded-lg">
      <h3 class="font-bold flex justify-center border-b">國家</h3>
      <div class="font-mono flex justify-center">{{ country }}</div>
    </div>
    <div class="border-2 border-gray-300 rounded-lg">
      <h3 class="font-bold flex justify-center border-b">城市</h3>
      <div class="font-mono flex justify-center">{{ city }}</div>
    </div>
    <div class="border-2 border-gray-300 rounded-lg">
      <h3 class="font-bold flex justify-center border-b">貨幣代碼</h3>
      <div class="font-mono flex justify-center">{{ currencyCode }}</div>
    </div>
    <div class="border-2 border-gray-300 rounded-lg">
      <h3 class="font-bold flex justify-center border-b">匯率 (1美元)</h3>
      <div class="font-mono flex justify-center">{{ currencyConverter }}</div>
    </div>
  </div>
</template>
