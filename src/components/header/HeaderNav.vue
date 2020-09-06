<template>
  <nav class="flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-shrink-0 mr-6">
      <router-link to="/"><img src="https://bikewalkroll.org/img/logo-v2.png" alt="BikeWalkRoll Logo" /></router-link>
    </div>
    <!-- <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        @click="toggle"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div> -->
    <!-- <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">LINK ONE!</a>
            </div>
        </div>
        <div>
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>-->
    <div>
      <router-link to="/about">About Test</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HeaderNav extends Vue {
  private open: boolean = false;
  public toggle(): void {
    this.open = !this.open;
  }
}
</script>