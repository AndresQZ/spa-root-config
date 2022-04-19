import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

import { ReplaySubject } from "rxjs";
// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

const authTokenSubject = new ReplaySubject(1);

/* registerApplication({
  name: "@web-taxco/spa-admin",
  app: () =>
    System.import(
      "@web-taxco/spa-admin"
    ),
  activeWhen: ["/admin"],
  customProps: {
    authTokenSubject
  }
});

registerApplication({
  name: "@web-taxco/spa-shop",
  app: () =>
    System.import(
      "@web-taxco/spa-shop"
    ),
  activeWhen: ["/shop"],
  customProps: {
    authTokenSubject
  }
}); */

const routes = constructRoutes(document.querySelector("#single-spa-layout"));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
start();

/* start({
  urlRerouteOnly: true,
}); */
