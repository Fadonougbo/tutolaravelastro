import { n as decodeKey } from './chunks/astro/server_C60Hc5iY.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Cm2KQ-a-.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/gautier/perso/tutolaravelastro/frontendastro/","cacheDir":"file:///home/gautier/perso/tutolaravelastro/frontendastro/node_modules/.astro/","outDir":"file:///home/gautier/perso/tutolaravelastro/frontendastro/dist/","srcDir":"file:///home/gautier/perso/tutolaravelastro/frontendastro/src/","publicDir":"file:///home/gautier/perso/tutolaravelastro/frontendastro/public/","buildClientDir":"file:///home/gautier/perso/tutolaravelastro/frontendastro/dist/client/","buildServerDir":"file:///home/gautier/perso/tutolaravelastro/frontendastro/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"author/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/author","isIndex":true,"type":"page","pattern":"^\\/author\\/?$","segments":[[{"content":"author","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/author/index.astro","pathname":"/author","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"home/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/home","isIndex":false,"type":"page","pattern":"^\\/home\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home.astro","pathname":"/home","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.2.3_jiti@1.21.7_rollup@4.34.0_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.wxfF36Oy.css"}],"routeData":{"route":"/[...user]","isIndex":true,"type":"page","pattern":"^(?:\\/(.*?))?\\/?$","segments":[[{"content":"...user","dynamic":true,"spread":true}]],"params":["...user"],"component":"src/pages/[...user]/index.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/gautier/perso/tutolaravelastro/frontendastro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/gautier/perso/tutolaravelastro/frontendastro/src/pages/[...user]/index.astro",{"propagation":"none","containsHead":true}],["/home/gautier/perso/tutolaravelastro/frontendastro/src/pages/author/[...author]/index.astro",{"propagation":"none","containsHead":true}],["/home/gautier/perso/tutolaravelastro/frontendastro/src/pages/author/index.astro",{"propagation":"none","containsHead":true}],["/home/gautier/perso/tutolaravelastro/frontendastro/src/pages/author/[color]/[page]/index.astro",{"propagation":"none","containsHead":true}],["/home/gautier/perso/tutolaravelastro/frontendastro/src/pages/home.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/author/[color]/[page]/index@_@astro":"pages/author/_color_/_page_.astro.mjs","\u0000@astro-page:src/pages/author/index@_@astro":"pages/author.astro.mjs","\u0000@astro-page:src/pages/author/[...author]/index@_@astro":"pages/author/_---author_.astro.mjs","\u0000@astro-page:src/pages/home@_@astro":"pages/home.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[...user]/index@_@astro":"pages/_---user_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.2.3_jiti@1.21.7_rollup@4.34.0_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CQejqGuV.mjs","/home/gautier/perso/tutolaravelastro/frontendastro/node_modules/.pnpm/astro@5.2.3_jiti@1.21.7_rollup@4.34.0_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dzgj5Tbg.mjs","/home/gautier/perso/tutolaravelastro/frontendastro/src/pages/[...user]/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","@astrojs/react/client.js":"_astro/client.BNC2RHkt.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/gautier/perso/tutolaravelastro/frontendastro/src/pages/[...user]/index.astro?astro&type=script&index=0&lang.ts",""]],"assets":["/_astro/background.BPKAcmfN.svg","/_astro/astro.Dm8K3lV8.svg","/_astro/index.wxfF36Oy.css","/favicon.svg","/index.css","/index.js","/mark_ronson_uptown_funk_ft._bruno_mars_mp3_82844.mp3","/_astro/client.BNC2RHkt.js","/author/index.html","/home/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"kKLxCS4KHoUNtLpUaNmPQjoht7jieqQBuqqE6ncZkoA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
