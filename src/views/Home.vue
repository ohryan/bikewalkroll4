<template>
  <div>
    <SubHeader 
      title="How did you get to school today?"
      subTitle="Our 30 second surveys help understand how students travel to school."
      buttonText=""
      buttonLink=""
    ></SubHeader>
    <Map></Map>
    <ContentMain
      title="Here's how it works"
      :dark="false"
    >
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/3">
          BOX ONE
        </div>
        <div class="w-full lg:w-1/3">
          BOX TWO
        </div>
        <div class="w-full lg:w-1/3">
          BOX THREE
        </div>
      </div>
    </ContentMain>
    <SubHeader 
      title="Try it now, do a 30-second practice survey"
      subTitle=""
      buttonText="Try a Practice Survey"
      buttonLink="https://google.com/"
    ></SubHeader>
    <ContentMain
      title=""
      :dark="true"
      >
      <div class="flex flex-wrap -mx-2">
        <div class="w-full lg:w-1/2 px-2">
          <recent-schools></recent-schools>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <latest-survey></latest-survey>
        </div>
      </div>
    </ContentMain>
  </div>
</template>

<script>
import SubHeader from '@/components/header/SubHeader.vue';
import ContentMain from '@/components/content/Main.vue';
import Map from '@/components/Map.vue';
import RecentSchools from '@/components/data/RecentSchools.vue';
import LatestSurvey from '@/components/data/LatestSurvey.vue';

export default {
  name: 'Home',
  components: {
    ContentMain,
    SubHeader,
    Map,
    RecentSchools,
    LatestSurvey,
  },
};
</script>
