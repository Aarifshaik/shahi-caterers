import { __esmMin as e } from "./rolldown-runtime.BAw5_7tg.mjs";
import {
  B as t,
  Ga as n,
  X as r,
  Z as i,
  d as a,
  init_client as o,
  init_npm_react_18_2 as s,
  init_npm_react_dom_18_2 as c,
  init_ssg_sandbox_shims as l,
  navigator as u,
  pe as d,
  r as f,
  te as p,
  ue as m,
  window as h,
  x as g,
  ye as _,
} from "./react.5yPobhy_.mjs";
import {
  ErrorPlaceholder as v,
  GracefullyDegradingErrorBoundary as y,
  LibraryFeaturesProvider as b,
  PageEffectsProvider as x,
  PageRoot as S,
  inferInitialRouteFromPath as C,
  init_framer_BTRNGHWV as w,
  installFlexboxGapWorkaroundIfNeeded as T,
  lazy as E,
  markHydrationStart as D,
  patchRoutesForABTesting as O,
  removeHiddenBreakpointLayersV2 as k,
  turnOffReactEventHandling as A,
  useCurrentRoute as j,
  useLocaleInfo as M,
  useRouter as N,
  withPerformanceMarks as P,
  yieldToMain as F,
} from "./framer.CK3DUZZB.mjs";
async function I({ routeId: e, pathVariables: i, localeId: a }) {
  let o = z[e].page.preload(),
    s = t(S, {
      isWebsite: !0,
      routeId: e,
      pathVariables: i,
      routes: z,
      collectionUtils: V,
      framerSiteId: H,
      notFoundPage: E(() => import(`./SitesNotFoundPage.js@1.4.GPfC4t84.mjs`)),
      isReducedMotion: void 0,
      localeId: a,
      locales: B,
      preserveQueryParams: void 0,
      siteCanonicalURL: `https://shahicaterers.aarifshaik.me/`,
      EditorBar:
        h === void 0
          ? void 0
          : (() => {
              let e = /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(u.userAgent);
              if (e) {
                console.log(`[Framer Editor Bar] Unavailable because navigator is bot`);
                return;
              }
              return E(async () => {
                let e = {
                  __version: 2,
                  framer: { useCurrentRoute: j, useLocaleInfo: M, useRouter: N },
                  react: {
                    createElement: t,
                    Fragment: g,
                    memo: r,
                    useCallback: p,
                    useEffect: m,
                    useRef: d,
                    useState: _,
                  },
                  "react-dom": { createPortal: n },
                };
                h.__framer_editorBarDependencies = e;
                let { createEditorBar: i } = await import(`../chunks/init.mjs`);
                return { default: i() };
              });
            })(),
    }),
    c = t(b, {
      children: s,
      value: {
        cssCollector: !1,
        editorBarDisableFrameAncestorsSecurity: !1,
        motionDivToDiv: !1,
        motionDivToDivBackgroundImage: !0,
        pauseOffscreen: !0,
        synchronousNavigationOnDesktop: !1,
        yieldOnTap: !1,
      },
    }),
    l = t(y, { children: c }),
    f = t(x, { children: l, value: { routes: {} } });
  return (await o, f);
}
function L() {
  U && h.__framer_events.push(arguments);
}
async function R(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || h.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:
`,
          e,
          r,
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:
`,
        e,
        r,
      );
    L(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, o, s, c;
    if (e) {
      let e = JSON.parse(t.dataset.framerHydrateV2);
      ((r = e.routeId), (o = e.localeId), (s = e.pathVariables), (c = e.breakpoints), (r = O(z, r)));
    } else {
      O(z, void 0);
      let e = C(z, decodeURIComponent(location.pathname), !0, B);
      ((r = e.routeId), (o = e.localeId), (s = e.pathVariables));
    }
    let l = I({ routeId: r, localeId: o, pathVariables: s });
    h !== void 0 &&
      (async () => {
        let e = z[r],
          t = B.find(({ id: e }) => (o ? e === o : e === `default`)).code,
          n = null;
        if (e?.collectionId && V) {
          let r = await V[e.collectionId]?.(),
            [i] = Object.values(s);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let i = Intl.DateTimeFormat().resolvedOptions(),
          a = i.timeZone,
          c = i.locale;
        (await new Promise((e) => {
          document.prerendering ? document.addEventListener(`prerenderingchange`, e, { once: !0 }) : e();
        }),
          h.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: H ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: h.location.href,
              hostname: h.location.hostname || null,
              pathname: h.location.pathname || null,
              hash: h.location.hash || null,
              search: h.location.search || null,
              timezone: a,
              locale: c,
            },
            `eager`,
          ]),
          await F({ priority: `background`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
          document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })));
      })();
    let u = await l;
    if (e) {
      P(`framer-rewrite-breakpoints`, () => {
        (k(c), h.__framer_onRewriteBreakpoints?.(c));
      });
      let e = i;
      e(() => {
        (D(), A(), a(t, u, { onRecoverableError: n }));
      });
    } else f(t, { onRecoverableError: n }).render(u);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var z,
  B,
  V,
  H,
  U,
  W,
  G = e(() => {
    (l(),
      w(),
      s(),
      c(),
      o(),
      (z = {
        q2dk3BipV: {
          elements: {
            A6ADIPD9a: `offer-trigger-1`,
            asHKOU9VK: `offer-trigger-4`,
            cWq8E8N32: `offer-4`,
            D40sWs3lC: `top-nav-1`,
            GGjCGYHHA: `images-trigger`,
            gXgBojMP3: `offer-trigger-6`,
            haRYq660O: `offer-1`,
            I1DMZPjPQ: `text`,
            IDQiTArAF: `footer`,
            JxIQAQa2s: `banner`,
            K0LRjcQFn: `about-us`,
            K6rmaSrnp: `our-services`,
            L9PjcGOZ9: `culinary-expertise`,
            ne2lpUwVx: `about-us-mob`,
            s3WMO8M4V: `top-nav`,
            svp6JP1aG: `offer-trigger-7`,
            t06iz6Ee5: `about-us-mob-2`,
            VNr_OVG1t: `offer-trigger-2`,
            vSv4BfooA: `about-us-1`,
            xMnl_Zm6f: `offer-trigger-5`,
            Y7uwoUJZU: `contact-us`,
            YsckXnXYl: `trigger`,
            ZEGJhNfTk: `offer-trigger-3`,
          },
          page: E(() => import(`./FOee_JJW28bhwDVI0sX0Xj9RtHawy-q0I-s9JzSggNQ.DVOWeA5_.mjs`)),
          path: `/`,
        },
        augiA20Il: {
          elements: {},
          page: E(() => import(`./TO7zDLOAfM1d_ow9RbY2kOVe9JF7GgE-8SW1Qmz3bbw.W5UBCATV.mjs`)),
          path: `/venuefirst-old-home`,
        },
        b_Wa9cjnQ: {
          elements: {
            BV1vIiwc2: `footer-1`,
            cJATWqwjt: `contact-us-1`,
            CZnsSbsUk: `contact-us-2`,
            L3QkkQFSo: `footer`,
            mblVZnJ_X: `footer-4`,
            MC_IqxBgS: `contact-us`,
            MDrXqOFfb: `footer-3`,
            OXQwpmPmo: `footer-2`,
            oyhKFxo98: `viewport1`,
          },
          page: E(() => import(`./SiSzqPK_b1wfk5yfbyuPYjY0OXaxtNYaAbloU8I2jbw.xKZAH1cK.mjs`)),
          path: `/about-us`,
        },
      }),
      (B = [{ code: `en-IN`, id: `default`, name: `English`, slug: `` }]),
      (V = {}),
      (H = `d33edcc362079e7e4ee014a54f6ec8e4edd3f11c901ab5db0d00cf083d541263`),
      (U = typeof document < `u`),
      U &&
        ((h.__framer_importFromPackage = (e, n) => () =>
          t(v, { error: `Package component not supported: "` + n + `" in "` + e + `"` })),
        (h.process = { ...h.process, env: { ...(h.process ? h.process.env : void 0), NODE_ENV: `production` } }),
        (h.__framer_events = h.__framer_events || []),
        T(),
        (W = document.getElementById(`main`)),
        `framerHydrateV2` in W.dataset ? R(!0, W) : R(!1, W)));
  });
G();
export { I as getPageRoot };
//# sourceMappingURL=script_main.Cq71dFtA.mjs.map
