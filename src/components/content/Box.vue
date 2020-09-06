<template>
    <div class="content-box" :id=cssId>
        <h4>{{ title }}</h4>
        <div class="bg-white p-6 mt-2 mb-6">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentBox',
    props: {
        title: null,
        cssId: '',
    },
};
</script>