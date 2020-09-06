<template>
    <div id="app">
        <HeaderNav></HeaderNav>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import HeaderNav from '@/components/header/HeaderNav.vue';
import Footer from '@/components/Footer.vue';
import { Component, Vue } from 'vue-property-decorator';

export default {
    name: 'App',
    components: {
        HeaderNav,
        Footer,
    },
};
</script>
