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
      <div class="sm:flex justify-between space-x-2">
        <div class="my-3">
          <img src="/img/how-it-works-step1.jpg" alt="Find Your School" class="my-1 w-full sm:w-auto">
          <h4>1 - Find your School on the map above</h4>
          <p>Don't see it? <a href="/users/add?action=addschool">Add a school</a></p>
        </div>
        <div class="my-3">
          <img src="/img/how-it-works-step2.jpg" alt="Do a survey" class="my-1 w-full sm:w-auto">
          <h4>2 - Do a 30 second survey</h4>
          <p>It couldn't be simpler. <a href="#" data-toggle="modal" data-target="#surveyLearnModal">Learn about surveys</a></p>
        </div>
        <div class="my-3">
          <img src="/img/how-it-works-step3.jpg" alt="See your score!" class="my-1 w-full sm:w-auto">
          <h4>3 - See your BikeWalkRoll score</h4>
          <p><a href="#" data-toggle="modal" data-target="#scoresLearnModal">Learn how the score works</a></p>
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
