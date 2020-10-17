import axios from 'axios';
import { scoreCssClass } from '@/utils/helpers';

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

export const fetchLatestSchools = async() => {
    // note: api needs a pagination limit
    return axios
        .get(API_URL + 'search-schools/list?sort=created&direction=desc')
        .then((res) => res.data.data.slice(0, 10).map((i) => {
            i.scoreCss = scoreCssClass(i.BWRScore);
            return i;
        }))
        .catch((e) => {
            console.error(e);
            return {};
        });
};

export const fetchDivisions = async() => {
    // TODO: implement this as an api call
    return [
        {id: 1, school: 'Home School', city: 'Winnipeg', region: 'Manitoba', country: 'Canada'},
        {id: 2, school: 'Fun School', city: 'Toronto', region: 'Ontario', country: 'Canada'},
    ]
}
