/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["CNRS.png","a1991be74556c1de3e3612ce39397eff"],["HUT.png","7a4cc0a1dda2567b45a2954f98754245"],["HUT_blanc.png","c2b987f9781baf6c5c22d5b43aa51861"],["LIFAM.jpg","adcd2234c818c25b0eeb8bed0dc0c2bb"],["LIRMM.png","a531567effa23df8979488344d444467"],["LogoMMM-B.png","60b8c43f266fd133acbbf47816533e03"],["MMM.png","84957159aff3775ffc2afff360b2578c"],["MOMA.png","c27d0e5fd6f6d169091e8bd5869cd50e"],["MRM.png","1e0a33e5de0f448f14749219f485e5f1"],["Thumbs.db","83493bd288dace0d1360d83f31d8eee8"],["UM.png","869b664056d1727335f56605afbf6d35"],["UM_noir.png","1e9f0e14479ab564334a78d7243f4e7b"],["aix.svg","b6563f500eafc924abaed7f02e862e4c"],["assets/font-awesome.min.css","a0e784c4ca94c271b0338dfb02055be6"],["assets/fontawesome.min.css","df69c21afb68372f92a75908d0d47bae"],["assets/imgs/Thumbs.db","7437a9a3c2ddfa93da4ea44ccf6c2546"],["assets/imgs/avatarDefault.png","032ee6fa96fda5cfa4f413e895530541"],["assets/imgs/default-avatar.jpg","a46d8ad49ea7012b6b15ba35aec53e57"],["assets/imgs/imgDefault.png","2a7eee969129a5fbf41be752bca47407"],["assets/imgs/profil copie.jpg","4e77029fdac008e0af5fc5d95e856f8c"],["assets/imgs/profil.jpg","5ebb8c9d53cad825406b65dc0ff38f6c"],["assets/tmp/img1.jpg","2bd2645a64c291434f6a935eb517a0fb"],["assets/tmp/img2.jpg","4b962fb6bfa4a7475dfe6fdec5a33067"],["assets/tmp/img3.jpg","634f43f1590dd6231f80c3dd5063fc7b"],["assets/tmp/img4.jpg","fe2af2a46bbebad61714349e4c04c531"],["assets/tmp/img5.jpg","7f9fde8db88be538e31dfab14be58ef1"],["assets/tmp/img6.jpg","f52ad9c7c34c3fd385578d14a5ece81e"],["dyndroit.jpg","f7097a6df9c8ba411f9bd5da85dc7fbb"],["euromov.png","3de18bf1112699157cd5af2e99e6b135"],["favicon.ico","c92b85a5b907c70211f4ec25e29a8c4a"],["hut_logo.ico","9623e588a37d85aae32dffe4b938cc2f"],["hut_logo.png","e73078d2887b0e68bf35e38d79416556"],["index.html","fe1818246e27ce60230122f570c65e86"],["manifest.json","d0fb69c9a922cdd4b31cdcbbbffd5c5c"],["muriel.png","cd4b8ec680b85753735f9b57b1d5cbf3"],["partenaires/3M/MMM_hauteur_bloc blanc_part_simple.png","57e150939bfc75074423fb2e34afca1d"],["partenaires/3M/MMM_hauteur_quadri.png","84957159aff3775ffc2afff360b2578c"],["partenaires/3M/MMM_largeur_bloc blanc_part.simple.png","f6781ca4b585695f5d7df13471fafb60"],["partenaires/3M/MMM_largeur_part.simple.ai","325756f04c5a3a887f609726c2289f12"],["partenaires/3M/Thumbs.db","a3ed4be50e4354a10c9210e9d1d2221f"],["partenaires/Aix.svg","b6563f500eafc924abaed7f02e862e4c"],["partenaires/DRAC.jpg","4d83cc991677ca4257cde6017eaf6f62"],["partenaires/DynDroit.jpg","f7097a6df9c8ba411f9bd5da85dc7fbb"],["partenaires/HUT.jpg","865932058a4f776d4a4fce21eb47f089"],["partenaires/LIFAM.jpg","adcd2234c818c25b0eeb8bed0dc0c2bb"],["partenaires/LIRMM.jpg","f3b630a4b331226965317156ce28bb61"],["partenaires/LOGOTYPE_BLANC_FONDBLEU.png","35fe7ddf28552a620e85926d58fe41bb"],["partenaires/LOGOTYPE_BLUE.png","a6a9f989640747369653e08887d84319"],["partenaires/Logo-PNG-24-SensDigital.png","5b3874985753580630faee176383a487"],["partenaires/Logo-vectoriel-SensDigital.pdf","d9e96e72ad9001487b7218453e65a6af"],["partenaires/Logo_HUT_VF -signature.jpg","5c366b10effb382685252003b91a27c7"],["partenaires/MMM.png","84957159aff3775ffc2afff360b2578c"],["partenaires/MSH-Sud.png","6fc8310e4c245153f184c07789f08238"],["partenaires/N&B-+-BaseLine-Noire-Fd-Blanc.jpg","59d387495500aed61964dc6705ec1b19"],["partenaires/NDG-+-BaseLine-Noire-Fd-Blanc.jpg","d41d8cd98f00b204e9800998ecf8427e"],["partenaires/Quadri-+-BaseLine-Noire-Fd-Blanc.jpg","1153842b73e3f76ba026c013486a98f1"],["partenaires/RVB_nexity_20cm.jpg","dc6d336032865b7622e7c36ff6e926e7"],["partenaires/Thumbs.db","8b0d1d05e0aa2d2b16ce0a30c848acc8"],["partenaires/UM.png","869b664056d1727335f56605afbf6d35"],["partenaires/UM_noir.png","1e9f0e14479ab564334a78d7243f4e7b"],["partenaires/cnrs.jpg","280d5c2d62afe699e6ecfaec9520b094"],["partenaires/ensam.png","b40a494bec49f9493edfdfdc033c5f68"],["partenaires/euromov.png","3de18bf1112699157cd5af2e99e6b135"],["partenaires/logo petit ENSAM 2013.png","b40a494bec49f9493edfdfdc033c5f68"],["partenaires/mrm.png","1e0a33e5de0f448f14749219f485e5f1"],["partenaires/polytech.jpg","8448dbb20997d2315effd13bfbdb493a"],["partenaires/praxiling.jpeg","4dd0ada8cec992ac09fccbbedef73840"],["partenaires/prism.png","102e273e22850bda8a791a67f542410c"],["partenaires/synox_horizontal_logo-transparent.png","d41d8cd98f00b204e9800998ecf8427e"],["polytech.svg","b8a2ae8cf5ae289a7e8be0fe9a8624b2"],["praxiling.jpeg","4dd0ada8cec992ac09fccbbedef73840"],["prism.png","102e273e22850bda8a791a67f542410c"],["robots.txt","735ab4f94fbcd57074377afca324c813"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







