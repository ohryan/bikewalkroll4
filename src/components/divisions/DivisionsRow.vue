<template>
  <tr>
    <td class="px-4 py-2">{{ school }}</td>
    <td class="px-4 py-2">{{ city }}</td>
    <td class="px-4 py-2">{{ region}}</td>
    <td class="px-4 py-2">{{ country }}</td>
  </tr>
</template>

<script>
export default {
  name: 'divisions-row',
  props: ['school', 'city', 'region', 'country'],
};
</script>