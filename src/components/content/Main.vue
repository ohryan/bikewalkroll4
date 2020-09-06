<template>
    <div :class="dark ? 'content-gray' : 'content'">
      <div class="max-w-screen-xl m-auto">
        <h2 class="text-current" v-if="title">{{ title }}</h2>
        <slot></slot>
      </div>
    </div>
</template>
<script>
export default {
  name: 'ContentMain',
  props: {
    dark: Boolean,
    title: String,
  },
};
</script>