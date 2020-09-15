<template>
  <div class="faq static-page">
    <SubHeader title="FAQ/Support"></SubHeader>
    <ContentMain title="" :dark=true>
      <div class="max-w-screen-lg m-auto p-6 bg-white">
        <h1><a href="https://docs.google.com/document/d/1OKxRiyW5r7A46xVaZ2SV2UZZl9jGlNYDQ_59E-Bfpvk/edit#heading=h.xn13qo8b11k0" target="_blank">View the QUICK START GUIDE for Teachers</a></h1>
        <p>This guide will help you get going fast and tell you the basics of how BikeWalkRoll works.</p>
        <h3><a href="https://docs.google.com/document/d/1esq0z5w0SqiV_ccq790NRG3hTVxohFG9iA7VVyaw60g/edit#heading=h.xn13qo8b11k0" target="_blank">View the FAQ and Troubleshooting guide</a></h3>
        <p>See frequently asked questions, get information on advanced stuff and find resolutions for common issues.</p>
        <h3><a href="https://docs.google.com/document/d/1jv6Gzc-glgp9pgv7ceE8ewFwITkGLm8JT3mBj0wlAJI" target="_blank">View the Champion tools guide</a></h3>
        <p>Learn about the tools available to those with champion accounts.</p>
        <h3><a href="/pdfs/Overview_of_BikeWalkRoll_Data_Collection_and_Management_March_2019.pdf" target="_blank">Download an Overview of BikeWalkRoll Data Management, Privacy and Permissions (PDF)</a></h3>
        <p>This document provides information regarding BikeWalkRoll data security and privacy. It may be helpful if you are required to seek approval from a school board/division/district to use BikeWalkRoll for school travel data collection.</p>
        <h4>Need more help or advice getting started?</h4>
        <p>To learn more about BikeWalkRoll and get friendly answers to common questions about school-based transportation and what we can do about it, talk to a local active school travel organization near you. There is a good chance they are familiar with BikeWalkRoll and can help you get started or answer common technical questions. It may be your local school administration, or an NGO working on children’s mobility. If you are part of a data collection campaign, contact the person who reached out to you. Have a look at this <a href="https://bikewalkroll.org/Organizations/">list of helpful organizations</a> for one near you! </p>
        <h4>Running into technical issues?</h4>
        <p>For basic technical support, please email <a href="mailto:Support@bikewalkroll.org">Support@bikewalkroll.org</a>.</p>
        <p>For urgent technical support questions, please send an email to <a href="mailto:UrgentSupport@BikeWalkRoll.org">UrgentSupport@BikeWalkRoll.org</a> describing your issue in detail. These inquiries will be prioritized.</p>
      </div>
    </ContentMain>
    
  </div>
</template>

<script>
import SubHeader from '@/components/header/SubHeader.vue';
import ContentMain from '@/components/content/Main.vue';

export default {
  name: 'Faq',
  components: {
    ContentMain,
    SubHeader,
  },
};
</script>
