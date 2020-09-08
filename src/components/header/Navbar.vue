<template>
  <header class="py-3 px-6 lg:flex lg:justify-between lg:items-center">
    <div class="flex items-center justify-between">
      <div class="lg:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-default hover:text-green focus:text-green focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>      
      </div>      
      <div>
        <router-link to="/" @click.native="isOpen = false"><img src="https://bikewalkroll.org/img/logo-v2.png" alt="BikeWalkRoll Logo" /></router-link>
      </div>
      <div class="lg:hidden">
        <router-link to="/" class="py-3 font-thin text-green">Sign In</router-link>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="lg:flex mt-3 lg:mt-0">
        <ul class="lg:space-x-3">
          <li v-for="n in nav" :key="n.routeName" class="hover:text-green lg:inline-block">
            <router-link :to="{name: n.routeName}" @click.native="isOpen = false" class="py-2">{{ n.title }}</router-link>
          </li>
        </ul>
    </nav>
    <div class="hidden lg:flex justify-between space-x-1 mt-0">
      <button class="btn-sm btn-green flex-1 lg:flex-auto">Create an Accont</button>
      <button class="btn-sm btn-green-invert flex-1 lg:flex-auto">Sign In</button>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  private isOpen: boolean = false;
  get nav() {
    return [
      {routeName: 'schoolsList', title: 'Schools'},
      {routeName: 'organizationLlist', title: 'Organizations' },
      {routeName: 'divisionsList', title: 'Divisions/Boards'},
      {routeName: 'faq', title: 'Support'},
      {routeName: 'about', title: 'About'},
    ];
  }
}
</script>
