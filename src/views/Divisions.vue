<template>
  <div>
    <SubHeader title="Divisions"></SubHeader>
    <div class="content">
      <div class="sm:flex justify-between space-x-2">
        <table class="w-full table-fixed ">

          <thead>
          <tr>
            <th class="w-1/3 px-4 py-2 text-left">Name</th>
            <th class="px-4 py-2 text-left">City/Town</th>
            <th class="px-4 py-2 text-left">Region</th>
            <th class="px-4 py-2 text-left">Country</th>
          </tr>
          </thead>

          <tbody class="divide-y divide-gray-400">
          <DivisionsRow
              v-for="division in divisions"
              v-bind:key="division.id"
              v-bind:school="division.school"
              v-bind:city="division.city"
              v-bind:region="division.region"
              v-bind:country="division.country"
          ></DivisionsRow>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from '@/components/header/SubHeader';
import DivisionsRow from '@/components/divisions/DivisionsRow';
import { fetchDivisions } from '@/utils/api';

export default {
  name: 'Divisions',
  components: {DivisionsRow, SubHeader},
  data() {
    return {
      divisions: [],
    };
  },
  async mounted() {
    this.divisions = await fetchDivisions();
  },
};
</script>
