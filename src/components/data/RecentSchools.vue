<template>
    <ContentBox
    title="Schools Recently Joined"
    cssId="recently-joined"
    >
    <ul class="school-list">
        <li v-for="school in schools">
            <router-link :to="{name: 'school', params: {id: school.id}}">
                <span>{{ school.name }} - {{ school.city }}</span>
                <span :class="['float-right', school.scoreCss]">{{ school.BWRScore || '?' }}</span>
            </router-link>
        </li>
    </ul>
    </ContentBox>
</template>

<script>
import ContentBox from '@/components/content/Box.vue';
import { fetchLatestSchools } from '@/utils/api';

export default {
    name: 'RecentSchools',
    components: {
        ContentBox,
    },
    data() {
        return {
            schools: [],
        };
    },
    async mounted() {
        this.schools = await fetchLatestSchools();
        console.log(this.schools);
    },
};
</script>