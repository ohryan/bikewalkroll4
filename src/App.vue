<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '@/components/header/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { Component, Vue } from 'vue-property-decorator';

export default {
    name: 'App',
    components: {
        Navbar,
        Footer,
    },
};
</script>
