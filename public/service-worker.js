if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const r=e=>c(e,a),t={module:{uri:a},exports:o,require:r};s[a]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(n(...e),o)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"fea629cece98c699ebe395625d5c597e"},{url:"/_next/static/8674-yzozvfyOHWhjywoc/_buildManifest.js",revision:"fd7ca382f0bb8dd82543f7e56be1c5e1"},{url:"/_next/static/8674-yzozvfyOHWhjywoc/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/13b76428-fb119cac1c6c3c2d.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/174-357a7bd6328940f0.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/247.e1553842e19d883c.js",revision:"e1553842e19d883c"},{url:"/_next/static/chunks/250-dbb610bfe495fc2d.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/266.cb25445afedb23f6.js",revision:"cb25445afedb23f6"},{url:"/_next/static/chunks/3070b2b9-31391c34f00ce1b4.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/363642f4.7ddbf2e4d5fee3e1.js",revision:"7ddbf2e4d5fee3e1"},{url:"/_next/static/chunks/3d9553d5-e5cd9819b28f1ad1.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/4509ffe6-cf4edbf409119325.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/475.40afba6330f481a2.js",revision:"40afba6330f481a2"},{url:"/_next/static/chunks/578-0a7452f2b6aa5605.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/610-d2356c65c2096037.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/616.91d704a212a34fbf.js",revision:"91d704a212a34fbf"},{url:"/_next/static/chunks/656.3993324e343dfb66.js",revision:"3993324e343dfb66"},{url:"/_next/static/chunks/70.4faaf4e0cbdde2bc.js",revision:"4faaf4e0cbdde2bc"},{url:"/_next/static/chunks/749-efb552927c962d89.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/776.19b710350fe05640.js",revision:"19b710350fe05640"},{url:"/_next/static/chunks/80-551e95f76286adea.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/870.0e7f0cc78d08952f.js",revision:"0e7f0cc78d08952f"},{url:"/_next/static/chunks/8ace8c09-fab32e4799fa76c2.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/902-635917d0e82ade6b.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/938-98e87bc6c61364f6.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/969c1769-4d2361cc273f7bac.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/app/(admin)/dashboard/%5B%5B...index%5D%5D/page-bbcaa90c85f946d2.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/app/(admin)/dashboard/layout-94f2699599ca75c8.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/app/(user)/best-free-vin-decoder/page-c6a7ee1f3a7221b7.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/app/(user)/blogs/page-48ae34c3f27909d4.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/app/(user)/european-vin-decoder/page-86556270b5ed0432.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/app/(user)/layout-131f2575dbd5d21a.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/app/(user)/page-21e84f14083fe0ba.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/app/(user)/post/%5Bslug%5D/page-c39a1c41d7353150.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/app/(user)/privacy-policy/page-d9c1187b97de41f8.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/app/(user)/vin-decoder/page-435f32059bf4d7a5.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/app/_not-found-8966dbb3b7603ff9.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/ccd63cfe-8e4c3daf21874138.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/fd9d1056-40ae0bddef8495db.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/framework-7fe49bd9cc6b0030.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/main-0e604b72a51edfdc.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/main-app-91eef0aef38675cc.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/pages/_app-abadec187a18aaa3.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/pages/_error-1dac2f00155be578.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/pages/sitemap.xml-8bda1e3edbf9f40c.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-31719b130e50e861.js",revision:"8674-yzozvfyOHWhjywoc"},{url:"/_next/static/css/9fe14b9c9f30d3ba.css",revision:"9fe14b9c9f30d3ba"},{url:"/apple-touch-icon-ipad-76x76.png",revision:"e8ab72c51588626b978084e88323e65e"},{url:"/apple-touch-icon-ipad-retina-152x152.png",revision:"18d2db252475a965e79295f82e43b202"},{url:"/apple-touch-icon-iphone-60x60.png",revision:"41b20e60381cc41bc7ffdcabd94a5fa9"},{url:"/apple-touch-icon-iphone-retina-120x120.png",revision:"21ab8e57f4755e47c883050a5212832b"},{url:"/arrow-down.svg",revision:"2c54f3605d1f4c09c73a61882d7db5bb"},{url:"/car-logo.svg",revision:"a8b0e344ef1a4f5dc35b90bcc3724170"},{url:"/check-is-vin.svg",revision:"8cf65c9c525c2da3d0a078a0de8824d9"},{url:"/chevron-up-down.svg",revision:"680b87ee6917d8ca0551f95281054f4b"},{url:"/close.svg",revision:"491c1a5d9c885391f83f3c2006f6a546"},{url:"/data-sharing-8673793-6933904.webp",revision:"cbdcff568b78d4865f84c7c2ca5f4406"},{url:"/discord.svg",revision:"6363ee53dededc9048ab6b51ae6822a4"},{url:"/facebook.svg",revision:"f25e9179e2ec6d0408df611707a27f02"},{url:"/gas.svg",revision:"a2dafb3c95de3fc1ec224da3ff55696c"},{url:"/get-vin-report.svg",revision:"757bf60908218eed66553048b84180f3"},{url:"/getimage.webp",revision:"22bbc23a22bb6b4e79ca1c8f13b34577"},{url:"/github.svg",revision:"fc47e6204bd85eba2db6145c361f5a20"},{url:"/heart-filled.svg",revision:"46ba335106035a4901c2136985856f80"},{url:"/heart-outline.svg",revision:"1f596946b2932dc4d58a417e0e1168c5"},{url:"/hero-bg-min.png",revision:"f14cf3e7b4878de91f11c053531c2d74"},{url:"/hero-bg.png",revision:"cfef66619f232f74fdfa387df218e5af"},{url:"/hero-min.png",revision:"c79e68bb0b67a5c78704f23615e18a2f"},{url:"/hero.png",revision:"c000aa8b2296a4f891c098ccb038b7c5"},{url:"/icon-192x192.png",revision:"2b692d6a667e46c3bfd3dedecc3d1318"},{url:"/icon-256x256.png",revision:"4817beefa01bda5f70f380959aa917a3"},{url:"/icon-384x384.png",revision:"b07c3657a58259f026afbf22e9094bf0"},{url:"/icon-512x512.png",revision:"605c90291040c4885dbcd329a8fd5181"},{url:"/linkedin.svg",revision:"49c6d1e03a1829888459ddff0ccb4337"},{url:"/logo.svg",revision:"ab2d6497dfe31de3eb8dacca434bdc1f"},{url:"/magnifying-glass.svg",revision:"5b4a0046cc41b21206de36689369a28d"},{url:"/manifest.webmanifest",revision:"b43459fa6ab7359cd5c689ea6e389cd9"},{url:"/model-icon.png",revision:"be60b656e454880a167c0f2c41564645"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pattern.png",revision:"46ce3c47929517d333f515d5885fed55"},{url:"/preview-feature.png",revision:"f2e82521336eca3a7838a324795c051f"},{url:"/right-arrow.svg",revision:"4cf1407e3c3ff66da313731d2bae89f3"},{url:"/robots.txt",revision:"c8aa92fd8f5e51aa1ed1243aa6ddb7e3"},{url:"/share-vin-report.svg",revision:"9d324cdbe60c7108e674c5d5c93bb4e2"},{url:"/steering-wheel.svg",revision:"e373a51635ee77dd54fe2288520e3aa8"},{url:"/tire.svg",revision:"eeaf16a38cca8d71c4a7a04a54729c2d"},{url:"/twitter.svg",revision:"ebd62a51ec2744a298bd8ab52e3e74cc"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/vin-car-look.svg",revision:"32c9851b2eebf84af14d947036be6fc3"},{url:"/vin-check-online-logo.svg",revision:"05924580269905fa43405910932e1c78"},{url:"/vin-check-online-logo512X512.png",revision:"4274da73382ded7d00c5fa3cea5dc485"},{url:"/vin-decoder.avif",revision:"4409db0e18d506b5d916cba49f2a0ad4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
