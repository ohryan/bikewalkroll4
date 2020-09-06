<template>
    <div class="content flex justify-center">
        <div class="lg:flex">
            <div class="justify-center">
                <a href="http://greenactioncentre.ca/" target="_blank">
                    <img src="/img/logo-greenactioncentre.png" alt="Green Action Centre" style="width: 140px">
                </a>
                <img src="/img/logo-heartstroke.png" alt="Heart &amp; Stroke Foundation" style="width: 140px">
            </div>
            <div class="flex-1 p-6">
                <p class="text-sm">BikeWalkRoll is created by the Green Action Centre for everyone, everywhere.</p>
                <small class="text-xs">BikeWalkRoll.org includes GeoLite data created by MaxMind, available from <a href="https://www.maxmind.com" style="color: #ccc">http://www.maxmind.com</a></small>
            </div>
            <div class="flex">
                <Timeline id="bikewalkroll" sourceType="profile" :options="{ tweetLimit: '1' }"/>
            </div>
        </div>
    </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed';

export default {
  name: 'Footer',
  components: {
      Timeline,
  },
};
</script>