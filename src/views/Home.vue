<template>
  <div>
    <HeaderNav></HeaderNav>
    <SubHeader 
      title="How did you get to school today?"
      subTitle="Our 30 second surveys help understand how students travel to school."
      buttonText=""
      buttonLink=""
    ></SubHeader>
    <Map></Map>
    <ContentArea
      title="Here's how it works"
      dark=false
    >
      <p>BOXES HERE!!!</p>
    </ContentArea>
    <SubHeader 
      title="Try it now, do a 30-second practice survey"
      subTitle=""
      buttonText="Try a Practice Survey"
      buttonLink="https://google.com/"
    ></SubHeader>
    <ContentArea
      title="" 
      dark=true>
      <p>OTHER BOXES GO HERE</p>
    </ContentArea>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderNav from '@/components/header/HeaderNav.vue';
import SubHeader from '@/components/header/SubHeader.vue';
import ContentArea from '@/components/ContentArea.vue';
import Footer from '@/components/Footer.vue';
import Map from '@/components/Map.vue';

export default {
  name: 'Home',
  components: {
    HeaderNav,
    ContentArea,
    SubHeader,
    Footer,
    Map,
  },
  data() {
    return {
    };
  },
};
</script>
