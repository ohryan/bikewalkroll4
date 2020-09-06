import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import VueAnalytics from 'vue-analytics';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import School from '@/views/School.vue';
import { component } from 'vue/types/umd';

Vue.use(VueRouter);

// Vue.use(VueAnalytics, {
//   // id: ' UA-68945720-1',
// });

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'BikeWalkRoll | How Did You Get to School Today?',
    },
  },
  {
    path: '/school/:id(\\d+)',
    component: School,
    name: 'school',
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      title: 'Page Not Found | BikeWalkRoll',
      // I don't believe Vue Router is able to send a proper 404 header.
      // this blocks bots and should have the same effect.
      metaTags: [{
        name: 'robots',
        content: 'noindex',
      }],
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
    (el) => el.parentNode === null || el.parentNode.removeChild(el),
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) {
    return next();
  }

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map((tagDef: { [x: string]: string; }) => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach((key) => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach((tag: any) => document.head.appendChild(tag));

  next();
});

export default router;
