<template>
    <div class="bg-green px-6" style="background-image: url(https://bikewalkroll.org/img/subhead-bg.jpg);">
        <div class="flex flex-wrap py-10 items-center max-w-screen-xl m-auto">
            <div class="w-full md:w-2/3 lg:3/4 text-left">
                <h1>{{ title }}</h1>
                <p class="text-white" v-if="subTitle">{{ subTitle }}</p>
            </div>
            <div class="w-full md:w-1/3 lg:1/4 text-right">
                <a 
                    v-if="buttonText && buttonLink"
                    :href=buttonLink
                    class="btn btn-transparent"
                >{{ buttonText }}</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SubHeader extends Vue {
    @Prop() public title!: string;
    @Prop() public subTitle!: string;
    @Prop() public buttonText!: string;
    @Prop() public buttonLink!: string;
}
</script>