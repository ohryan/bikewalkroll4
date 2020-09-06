<template>
    <div class="map"></div>
</template>

<script>
import gmapsInit from '@/utils/gmaps';
import schooMap from '@/utils/schoolMap';
import { fetchMapMarkers } from '@/utils/api';
import schoolMap from '@/utils/schoolMap';

// TO DO
// 1. Setup map params = existing site - DONE
// 2. get results from API based on bounds - DONE
// 3. re-implement custom culstering - DONE
// 4. re-implement fullsize view - DONE
// 5. re-implement loader
// 6. re-implement search box
// 7. get lat/lng from browser - DONE
// 8. re-implement infoboxes

export default {
  name: 'Map',
  props: {
      lat: null,
      lng: null,
  },
  methods: {
    async getGeolocation() {
      return new Promise((resolve, reject) => {

        if (!('geolocation' in navigator)) {
          reject(new Error('Geolocation is not available.'));
        }

        navigator.geolocation.getCurrentPosition((pos) => {
          resolve(pos);
        }, (err) => {
          reject(err);
        });

      });
    },
  },
  async mounted() {
    try {
      const google = await gmapsInit();
      const location = await this.getGeolocation();
      const sm = new schoolMap(this.$el, {
        lat: this.lat ?? location.coords.latitude,
        lng: this.lng ?? location.coords.longitude,
        zoomControl: true,
        fullscreenControl: true,
        idleCallback: async () => {
          const markers = await fetchMapMarkers(sm.neFormatted, sm.swFormatted);
          sm.addMarkers(markers);
        },
      });
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
