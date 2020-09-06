<template>
  <div>
      <SubHeader 
      title="Page Not Found"
      subTitle=""
      buttonText=""
      buttonLink=""
    ></SubHeader>
    <ContentMain
      title="Sorry About That"
      :dark=true
    >
      <p>Please try again </p>
    </ContentMain>
  </div>
</template>

<script>
import SubHeader from '@/components/header/SubHeader.vue';
import ContentMain from '@/components/content/Main.vue';

export default {
  name: 'NotFound',
  components: {
    SubHeader,
    ContentMain,
  },
};
</script>
