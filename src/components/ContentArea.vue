<template>
    <div :class="[{'content': !dark, 'content-gray': dark}]">
      <div class="max-w-screen-xl m-auto">
        <h2 class="text-current" v-if="title">{{ title }}</h2>
        <slot></slot>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ContentArea extends Vue {
    @Prop() public dark!: boolean;
    @Prop() public title!: string;
}
</script>