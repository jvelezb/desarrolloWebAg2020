// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { domain, clientId,apiUri,audience } from './auth-config.json';
export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
    audience,
    scope: 'read:current_user',
     // Specify configuration for the interceptor

  }, httpInterceptor: {
      allowedList: [
      {
        // Match any request that starts 'https://dev-qz51ohsc.auth0.com/api/v2/' (note the asterisk)
        uri: 'https://dev-qz51ohsc.auth0.com/api/v2/*',
        tokenOptions: {
          // The attached token should target this audience
          audience: 'https://dev-qz51ohsc.auth0.com/api/v2/',

          // The attached token should have these scopes
          scope: 'read:current_user'
        }
      }
    ]
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
