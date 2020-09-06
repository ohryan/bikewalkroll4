import axios from 'axios';

const API_URL = 'https://api.bikewalkroll.org/api/';

export const fetchMapMarkers = async (ne, sw) => {
        return axios
            .get(API_URL + 'search-schools/locationBounds?ne=' + ne + '&sw=' + sw)
            .then((res) => res.data)
            .catch((e) => {
                console.error(e);
                return {};
            });
};
