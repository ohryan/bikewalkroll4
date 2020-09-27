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
      lat: {
        default: null,
        type: Number,
      },
      lng: {
        default: null,
        type: Number,
      },
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
    drawMap(centerLat, centerLng) {
      const sm = new schoolMap(this.$el, {
        lat: centerLat,
        lng: centerLng,
        zoomControl: true,
        fullscreenControl: true,
        idleCallback: async () => {
          const markers = await fetchMapMarkers(sm.neFormatted, sm.swFormatted);
          sm.addMarkers(markers);
        },
      });
    },
  },
  async mounted() {
    try {
      const google = await gmapsInit();
      let centerLat = this.lat;
      let centerLng = this.lng;

      // no lat/lng not passed in as a prop
      if (centerLat === null && centerLng === null) {
        const location = await this.getGeolocation();
        centerLat = location.coords.latitude;
        centerLng = location.coords.longitude;
      }

      this.drawMap(centerLat, centerLng);

    } catch (error) {
      // draw the map in winipeg when there's an error.
      this.drawMap(49.895077, -97.138451);
      console.error(error);
    }
  },
};
</script>
