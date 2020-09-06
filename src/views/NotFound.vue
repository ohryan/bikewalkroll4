<template>
  <div>
    <HeaderNav></HeaderNav>
    <div>
      <h1 class="font-serif">Not Found Sorry</h1>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import HeaderNav from '@/components/header/HeaderNav.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'NotFound',
  components: {
    HeaderNav,
  },
};
</script>
