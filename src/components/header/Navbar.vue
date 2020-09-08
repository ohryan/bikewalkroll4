<template>
  <header class="py-3 px-2 sm:flex sm:justify-between sm:items-center">
    <div class="flex items-center justify-between">
      <div>
        <router-link to="/"><img src="https://bikewalkroll.org/img/logo-v2.png" alt="BikeWalkRoll Logo" /></router-link>
      </div>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-default hover:text-green focus:text-green focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>      
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="sm:flex">
        <ul>
          <li v-for="n in nav" :key="n.routeName" class="px-2 hover:text-green sm:inline-block">
            <router-link :to="{name: n.routeName}">{{ n.title }}</router-link>
          </li>
        </ul>
    </nav>
    <div class="flex justify-between space-x-1 mt-2 sm:mt-0">
      <button class="btn-sm btn-green flex-1 sm:flex-auto">Sign Up</button>
      <button class="btn-sm btn-green-invert flex-1 sm:flex-auto">Sign In</button>
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
