import { __esmMin as e } from "./rolldown-runtime.BAw5_7tg.mjs";
import {
  Ga as t,
  Y as n,
  ae as r,
  ie as i,
  init_jsx_runtime as ee,
  init_npm_react_18_2 as te,
  init_npm_react_dom_18_2 as ne,
  l as a,
  p as o,
  pe as s,
  u as c,
  ue as re,
  x as l,
} from "./react.5yPobhy_.mjs";
import {
  AnimatePresence as ie,
  LayoutGroup as ae,
  init_framer_motion_5EXT2AMG as u,
  motion as d,
} from "./motion.B5kiQUnY.mjs";
import {
  ComponentViewportProvider as f,
  Container as p,
  FormContainer as m,
  FormPlainTextInput2 as h,
  GeneratedComponentContext as oe,
  Image2 as g,
  Link as _,
  PropertyOverrides2 as v,
  ResolveLinks as se,
  RichText as y,
  SVG as b,
  addFonts as ce,
  cx as x,
  getFonts as S,
  getFontsFromSharedStyle as le,
  getLoadingLazyAtYPosition as C,
  init_framer_BTRNGHWV as ue,
  useActiveVariantCallback as de,
  useComponentViewport as fe,
  useCustomCursors as pe,
  useHydratedBreakpointVariants as me,
  useIsOnFramerCanvas as he,
  useLocaleInfo as ge,
  useOverlayState as _e,
  useRouteElementId as w,
  useRouter as ve,
  withCSS as ye,
  withFX as T,
  withOptimizedAppearEffect as be,
} from "./framer.CK3DUZZB.mjs";
import {
  FramerImOhXeRcM as E,
  FramerLogBUlavO as D,
  Icon as O,
  SmoothScroll as xe,
  className as Se,
  css as Ce,
  fonts as we,
  init_Iconoir as Te,
  init_ImOhXeRcM as Ee,
  init_LogBUlavO as k,
  init_Qu7GZfWqZ as A,
  init_SmoothScroll_Prod as j,
} from "./Qu7GZfWqZ._gouOARo.mjs";
import { init_b_Wa9cjnQ as De, metadata as Oe } from "./b_Wa9cjnQ.B0btHa-8.mjs";
let M;
  let N;
  let P;
  let F;
  let I;
  let L;
  let R;
  let z;
  let ke;
  let B;
  let Ae;
  let je;
  let Me;
  let Ne;
  let V;
  let H;
  let U;
  let W;
  let Pe;
  let G;
  let Fe;
  let K;
  let Ie;
  let Le;
  let q;
  let Re;
  let J;
  let ze;
  let Y;
  let X;
  let Z;
  let Q;
  let $;
  let Be;
  const Ve = e(() => {
    (ee(),
      ue(),
      u(),
      te(),
      ne(),
      k(),
      j(),
      Te(),
      Ee(),
      A(),
      De(),
      (M = S(xe)),
      (N = S(E)),
      (P = be(d.div)),
      (F = be(g)),
      (I = T(g)),
      (L = T(d.div)),
      (R = S(O)),
      (z = S(D)),
      (ke = {
        C9tpTcJrY: `(max-width: 809px)`,
        dP8hXCQ_u: `(min-width: 1920px)`,
        ipclDTqxD: `(min-width: 1440px) and (max-width: 1659px)`,
        Nz0RXJHRH: `(min-width: 1660px) and (max-width: 1919px)`,
        TlatadeZ0: `(min-width: 810px) and (max-width: 1439px)`,
      }),
      (B = () => typeof document < `u`),
      (Ae = `framer-zHexW`),
      (je = {
        C9tpTcJrY: `framer-v-4k4wy9`,
        dP8hXCQ_u: `framer-v-tmsleu`,
        ipclDTqxD: `framer-v-1inth7g`,
        Nz0RXJHRH: `framer-v-1frjzya`,
        TlatadeZ0: `framer-v-rkemn2`,
      }),
      (Me = () =>
        document.querySelector(`#template-overlay`) ??
        document.querySelector(`#overlay`) ??
        document.body),
      (Ne = ({ children: e, blockDocumentScrolling: t, enabled: n = !0 }) => {
        const [r, i] = _e({ blockDocumentScrolling: t });
        return e({
          hide: () => i(!1),
          show: () => i(!0),
          toggle: () => i(!r),
          visible: n && r,
        });
      }),
      (V = { delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (H = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: V,
        x: 0,
        y: 0,
      }),
      (U = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (W = {
        delay: 0,
        duration: 0.8,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Pe = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: W,
        x: 0,
        y: 0,
      }),
      (G = {
        delay: 0,
        duration: 1.5,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Fe = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: G,
        x: 0,
        y: 0,
      }),
      (K = { delay: 0, duration: 2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ie = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: K,
        x: 0,
        y: 0,
      }),
      (Le = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (q = (e, t, n) => {
        switch (e.state) {
          case `success`:
            return t.success ?? n;
          case `pending`:
            return t.pending ?? n;
          case `error`:
            return t.error ?? n;
          case `incomplete`:
            return t.incomplete ?? n;
        }
      }),
      (Re = ({ value: e }) => {
        const t = he();
        return t
          ? null
          : o(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            });
      }),
      (J = {
        "Desktop 2": `Nz0RXJHRH`,
        Desktop: `dP8hXCQ_u`,
        Laptop: `ipclDTqxD`,
        Phone: `C9tpTcJrY`,
        Tablet: `TlatadeZ0`,
      }),
      (ze = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: J[r.variant] ?? r.variant ?? `dP8hXCQ_u`,
      })),
      (Y = n(function (e, n) {
        const ee = s(null);
          const te = n ?? ee;
          const ne = r();
          const { activeLocale: u, setLocale: ce } = ge();
          const S = fe();
          const {
            style: le,
            className: ue,
            layoutId: he,
            variant: _e,
            ...ye
          } = ze(e);
        (re(() => {
          const e = Oe(void 0, u);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [void 0, u]),
          i(() => {
            const e = Oe(void 0, u);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, u]));
        const [T, be] = me(_e, ke, !1);
          const { activeVariantCallback: Ce, delay: we } = de(void 0);
          const Te = ({ overlay: e, loadMore: t }) =>
            Ce(async (...t) => {
              e.toggle();
            });
          const Ee = [Se];
          const k = x(Ae, ...Ee);
          const A = () => !!(!B() || [`TlatadeZ0`, `C9tpTcJrY`].includes(T));
        ve();
        const j = () => (B() ? ![`TlatadeZ0`, `C9tpTcJrY`].includes(T) : !0);
          const De = w(`oyhKFxo98`);
          const M = s(null);
          const N = () => (B() ? T !== `C9tpTcJrY` : !0);
          const R = w(`MC_IqxBgS`);
          const z = s(null);
          const V = () => !B() || T === `Nz0RXJHRH`;
          const W = w(`L3QkkQFSo`);
          const G = s(null);
          const K = () =>
            B()
              ? ![`Nz0RXJHRH`, `ipclDTqxD`, `TlatadeZ0`, `C9tpTcJrY`].includes(
                  T
                )
              : !0;
          const J = w(`BV1vIiwc2`);
          const Y = s(null);
          const X = () => !B() || T === `ipclDTqxD`;
          const Z = w(`OXQwpmPmo`);
          const Q = s(null);
          const $ = () => !B() || T === `TlatadeZ0`;
          const Be = w(`MDrXqOFfb`);
          const Ve = s(null);
          const He = w(`cJATWqwjt`);
          const Ue = s(null);
          const We = () => !B() || T === `C9tpTcJrY`;
          const Ge = w(`mblVZnJ_X`);
          const Ke = s(null);
          const qe = w(`CZnsSbsUk`);
          const Je = s(null);
        return (
          pe({}),
          o(oe.Provider, {
            value: { primaryVariantId: `dP8hXCQ_u`, variantClassNames: je },
            children: c(ae, {
              id: he ?? ne,
              children: [
                o(Re, {
                  value: `html body { background: var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255)); }`,
                }),
                c(d.div, {
                  ...ye,
                  className: x(k, `framer-tmsleu`, ue),
                  ref: te,
                  style: { ...le },
                  children: [
                    o(f, {
                      children: o(p, {
                        className: `framer-17c926v-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `qVLzWCbKv`,
                        scopeId: `b_Wa9cjnQ`,
                        children: o(v, {
                          breakpoint: T,
                          overrides: {
                            C9tpTcJrY: { style: { width: `100%` } },
                            TlatadeZ0: { style: { width: `100%` } },
                          },
                          children: o(xe, {
                            height: `100%`,
                            id: `qVLzWCbKv`,
                            intensity: 24,
                            layoutId: `qVLzWCbKv`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    A() &&
                      o(Ne, {
                        children: (e) =>
                          o(a, {
                            children: o(se, {
                              links: [
                                {
                                  href: {
                                    hash: `:ne2lpUwVx`,
                                    webPageId: `q2dk3BipV`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:K6rmaSrnp`,
                                    webPageId: `q2dk3BipV`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:L9PjcGOZ9`,
                                    webPageId: `q2dk3BipV`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:Y7uwoUJZU`,
                                    webPageId: `q2dk3BipV`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:ne2lpUwVx`,
                                    webPageId: `q2dk3BipV`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:K6rmaSrnp`,
                                    webPageId: `q2dk3BipV`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:L9PjcGOZ9`,
                                    webPageId: `q2dk3BipV`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:Y7uwoUJZU`,
                                    webPageId: `q2dk3BipV`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:ne2lpUwVx`,
                                    webPageId: `q2dk3BipV`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:K6rmaSrnp`,
                                    webPageId: `q2dk3BipV`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:L9PjcGOZ9`,
                                    webPageId: `q2dk3BipV`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:Y7uwoUJZU`,
                                    webPageId: `q2dk3BipV`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (n) =>
                                o(v, {
                                  breakpoint: T,
                                  overrides: {
                                    C9tpTcJrY: {
                                      height: 100,
                                      width: S?.width || `100vw`,
                                    },
                                    TlatadeZ0: {
                                      height: 100,
                                      width: S?.width || `100vw`,
                                    },
                                  },
                                  children: o(f, {
                                    children: c(p, {
                                      className: `framer-1xjaihl-container hidden-tmsleu hidden-1frjzya hidden-1inth7g`,
                                      id: `1xjaihl`,
                                      nodeId: `PBicZMtI8`,
                                      scopeId: `b_Wa9cjnQ`,
                                      children: [
                                        o(v, {
                                          breakpoint: T,
                                          overrides: {
                                            C9tpTcJrY: {
                                              EWWB4AZmK: n[10],
                                              gsQx14FRC: n[9],
                                              leYVePuI9: n[8],
                                              rvnUxmeBE: n[11],
                                            },
                                            TlatadeZ0: {
                                              EWWB4AZmK: n[6],
                                              gsQx14FRC: n[5],
                                              leYVePuI9: n[4],
                                              rvnUxmeBE: n[7],
                                            },
                                          },
                                          children: o(E, {
                                            Don9rPm4t: `CULINARY EXPERTISE`,
                                            EWWB4AZmK: n[2],
                                            gsQx14FRC: n[1],
                                            height: `100%`,
                                            id: `PBicZMtI8`,
                                            layoutId: `PBicZMtI8`,
                                            leYVePuI9: n[0],
                                            nbpUZHzLI: Te({ overlay: e }),
                                            R9rVfKm5A: `CONTACT US`,
                                            rvnUxmeBE: n[3],
                                            style: { width: `100%` },
                                            tXGFQVaIt: `OUR SERVICES`,
                                            variant: e.visible
                                              ? `XP2pQwNGw`
                                              : `coeWLBEnn`,
                                            width: `100%`,
                                            XCOyJnKTR: 1,
                                            Y7ZoV_ppK: `ABOUT US`,
                                          }),
                                        }),
                                        o(ie, {
                                          children:
                                            e.visible &&
                                            o(a, {
                                              children: t(
                                                o(l, {
                                                  children: o(
                                                    d.div,
                                                    {
                                                      animate: {
                                                        opacity: 1,
                                                        transition: {
                                                          delay: 0,
                                                          duration: 0,
                                                          ease: [
                                                            0.5, 0, 0.88, 0.77,
                                                          ],
                                                          type: `tween`,
                                                        },
                                                      },
                                                      className: x(
                                                        k,
                                                        `framer-1m4hyq7`
                                                      ),
                                                      "data-framer-portal-id": `1xjaihl`,
                                                      exit: {
                                                        opacity: 0,
                                                        transition: {
                                                          delay: 0,
                                                          duration: 0,
                                                          ease: [
                                                            0.12, 0.23, 0.5, 1,
                                                          ],
                                                          type: `tween`,
                                                        },
                                                      },
                                                      initial: { opacity: 0 },
                                                      onTap: () => e.hide(),
                                                    },
                                                    `v5Gq2OzXC`
                                                  ),
                                                }),
                                                Me()
                                              ),
                                            }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                            }),
                          }),
                      }),
                    j() &&
                      o(se, {
                        links: [
                          {
                            href: {
                              hash: `:K0LRjcQFn`,
                              webPageId: `q2dk3BipV`,
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: `:K6rmaSrnp`,
                              webPageId: `q2dk3BipV`,
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: `:L9PjcGOZ9`,
                              webPageId: `q2dk3BipV`,
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: `:Y7uwoUJZU`,
                              webPageId: `q2dk3BipV`,
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: `:K0LRjcQFn`,
                              webPageId: `q2dk3BipV`,
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: `:K6rmaSrnp`,
                              webPageId: `q2dk3BipV`,
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: `:L9PjcGOZ9`,
                              webPageId: `q2dk3BipV`,
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: `:Y7uwoUJZU`,
                              webPageId: `q2dk3BipV`,
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: `:K0LRjcQFn`,
                              webPageId: `q2dk3BipV`,
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: `:K6rmaSrnp`,
                              webPageId: `q2dk3BipV`,
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: `:L9PjcGOZ9`,
                              webPageId: `q2dk3BipV`,
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: `:Y7uwoUJZU`,
                              webPageId: `q2dk3BipV`,
                            },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          o(f, {
                            height: 100,
                            width: S?.width || `100vw`,
                            y: (S?.y || 0) + 0 + 200,
                            children: o(p, {
                              className: `framer-1npan3-container hidden-rkemn2 hidden-4k4wy9`,
                              nodeId: `yaGKGlCWU`,
                              scopeId: `b_Wa9cjnQ`,
                              children: o(v, {
                                breakpoint: T,
                                overrides: {
                                  ipclDTqxD: {
                                    EWWB4AZmK: e[10],
                                    gsQx14FRC: e[9],
                                    leYVePuI9: e[8],
                                    rvnUxmeBE: e[11],
                                  },
                                  Nz0RXJHRH: {
                                    EWWB4AZmK: e[6],
                                    gsQx14FRC: e[5],
                                    leYVePuI9: e[4],
                                    rvnUxmeBE: e[7],
                                  },
                                },
                                children: o(E, {
                                  Don9rPm4t: `CULINARY EXPERTISE`,
                                  EWWB4AZmK: e[2],
                                  gsQx14FRC: e[1],
                                  height: `100%`,
                                  id: `yaGKGlCWU`,
                                  layoutId: `yaGKGlCWU`,
                                  leYVePuI9: e[0],
                                  R9rVfKm5A: `CONTACT US`,
                                  rvnUxmeBE: e[3],
                                  style: { width: `100%` },
                                  tXGFQVaIt: `OUR SERVICES`,
                                  variant: `ZD3Yxe0Uv`,
                                  width: `100%`,
                                  XCOyJnKTR: 1,
                                  Y7ZoV_ppK: `ABOUT US`,
                                }),
                              }),
                            }),
                          }),
                      }),
                    c(`div`, {
                      className: `framer-y3imd`,
                      "data-framer-name": `About`,
                      id: De,
                      ref: M,
                      children: [
                        c(P, {
                          animate: H,
                          className: `framer-110y1y8`,
                          "data-framer-appear-id": `110y1y8`,
                          "data-framer-name": `About Shahi Caterers Container`,
                          initial: U,
                          optimized: !0,
                          children: [
                            o(v, {
                              breakpoint: T,
                              overrides: {
                                C9tpTcJrY: {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    pixelHeight: 1184,
                                    pixelWidth: 1680,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `119px`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 1680w`,
                                  },
                                },
                                ipclDTqxD: {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    loading: C(
                                      (S?.y || 0) + 0 + 300 + 226.2 + -83
                                    ),
                                    pixelHeight: 1184,
                                    pixelWidth: 1680,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `232px`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 1680w`,
                                  },
                                },
                                Nz0RXJHRH: {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    loading: C(
                                      (S?.y || 0) + 0 + 300 + 226.2 + -89
                                    ),
                                    pixelHeight: 1184,
                                    pixelWidth: 1680,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `243px`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 1680w`,
                                  },
                                },
                                TlatadeZ0: {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    pixelHeight: 1184,
                                    pixelWidth: 1680,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `163px`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 1680w`,
                                  },
                                },
                              },
                              children: o(g, {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  loading: C(
                                    (S?.y || 0) + 0 + 300 + 226.2 + -149
                                  ),
                                  pixelHeight: 1184,
                                  pixelWidth: 1680,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `326px`,
                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png`,
                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/WMTf27LxuYBOYLeqKeAMW_x5rccx.png 1680w`,
                                },
                                className: `framer-tqd1hm`,
                                "data-framer-name": `Logo Container`,
                              }),
                            }),
                            o(v, {
                              breakpoint: T,
                              overrides: {
                                C9tpTcJrY: {
                                  children: o(l, {
                                    children: o(`h1`, {
                                      style: {
                                        "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                        "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                        "--framer-font-size": `50px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-19f0cf76-e3cf-4fb6-a3c2-0172f7e6d9e1, rgb(140, 95, 69))`,
                                      },
                                      children: `About Shahi Caterers`,
                                    }),
                                  }),
                                },
                                TlatadeZ0: {
                                  children: o(l, {
                                    children: o(`h1`, {
                                      style: {
                                        "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                        "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                        "--framer-font-size": `64px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-19f0cf76-e3cf-4fb6-a3c2-0172f7e6d9e1, rgb(140, 95, 69))`,
                                      },
                                      children: `About Shahi Caterers`,
                                    }),
                                  }),
                                },
                              },
                              children: o(y, {
                                __fromCanvasComponent: !0,
                                children: o(l, {
                                  children: o(`h1`, {
                                    style: {
                                      "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                      "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                      "--framer-font-size": `76px`,
                                      "--framer-line-height": `1.1em`,
                                      "--framer-text-color": `var(--token-19f0cf76-e3cf-4fb6-a3c2-0172f7e6d9e1, rgb(140, 95, 69))`,
                                    },
                                    children: `About Shahi Caterers`,
                                  }),
                                }),
                                className: `framer-1253vnq`,
                                "data-framer-name": `Title`,
                                fonts: [`CUSTOM;Perpetua Regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            o(v, {
                              breakpoint: T,
                              overrides: {
                                C9tpTcJrY: {
                                  children: c(l, {
                                    children: [
                                      o(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                          "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                          "--framer-font-variation-axes": `"wght" 400`,
                                          "--framer-line-height": `1.6em`,
                                          "--framer-text-color": `var(--token-a0bdd9d5-b385-4c7d-912f-5b605fcd5455, rgb(39, 31, 25))`,
                                        },
                                        children: `At Shahi Caterers, we understand that perfection lies in the details—especially when it comes to curating gourmet experiences for life’s most cherished celebrations. With a commitment to flawless execution, we meticulously plan every element of your event to ensure it unfolds seamlessly.`
                                      }),
                                      o(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                          "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                          "--framer-font-variation-axes": `"wght" 400`,
                                          "--framer-line-height": `1.6em`,
                                          "--framer-text-color": `var(--token-a0bdd9d5-b385-4c7d-912f-5b605fcd5455, rgb(39, 31, 25))`,
                                        },
                                        children: `Rooted in over 7 years of expertise and refined craftsmanship, Shahi Caterers blends timeless Indian traditions with global sophistication. From the first consultation to the final plated masterpiece, we leave no detail untouched—creating celebrations that are not only unforgettable but unmistakably Shahi Caterers.`,
                                      }),
                                    ],
                                  }),
                                },
                              },
                              children: o(y, {
                                __fromCanvasComponent: !0,
                                children: c(l, {
                                  children: [
                                    o(`p`, {
                                      style: {
                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `var(--token-a0bdd9d5-b385-4c7d-912f-5b605fcd5455, rgb(39, 31, 25))`,
                                      },
                                      children: `At Shahi Caterers, we understand that perfection lies in the details—especially when it comes to curating gourmet experiences for life’s most cherished celebrations. With a commitment to flawless execution, we meticulously plan every element of your event to ensure it unfolds seamlessly.`,
                                    }),
                                    o(`p`, {
                                      style: {
                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `var(--token-a0bdd9d5-b385-4c7d-912f-5b605fcd5455, rgb(39, 31, 25))`,
                                      },
                                      children: `Rooted in over 7 years of expertise and refined craftsmanship, Shahi Caterers blends timeless Indian traditions with global sophistication. From the first consultation to the final plated masterpiece, we leave no detail untouched—creating celebrations that are not only unforgettable but unmistakably Shahi Caterers.`,
                                    }),
                                  ],
                                }),
                                className: `framer-1s7nrf9`,
                                "data-framer-name": `Description`,
                                fonts: [`FS;Montserrat-variable`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            o(v, {
                              breakpoint: T,
                              overrides: {
                                C9tpTcJrY: {
                                  children: o(l, {
                                    children: o(`p`, {
                                      style: {
                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `var(--token-e6740672-e51a-4a94-8ab3-ba42a8aca3cb, rgb(140, 95, 69))`,
                                      },
                                      children: `Our mission is to be India’s most prestigious luxury curating brand, catering exceptional gastronomy, seamless execution, and personalised celebrations.`,
                                    }),
                                  }),
                                },
                                TlatadeZ0: {
                                  children: o(l, {
                                    children: o(`p`, {
                                      style: {
                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `var(--token-e6740672-e51a-4a94-8ab3-ba42a8aca3cb, rgb(140, 95, 69))`,
                                      },
                                      children: `Our mission is to be India’s most prestigious luxury curating brand, catering exceptional gastronomy, seamless execution, and personalised celebrations.`,
                                    }),
                                  }),
                                },
                              },
                              children: o(y, {
                                __fromCanvasComponent: !0,
                                children: o(l, {
                                  children: c(`p`, {
                                    style: {
                                      "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                      "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                      "--framer-font-size": `18px`,
                                      "--framer-font-variation-axes": `"wght" 400`,
                                      "--framer-line-height": `1.6em`,
                                      "--framer-text-color": `var(--token-19f0cf76-e3cf-4fb6-a3c2-0172f7e6d9e1, rgb(140, 95, 69))`,
                                    },
                                    children: [
                                      `Our mission is to be India’s most prestigious luxury curating `,
                                      o(`span`, {
                                        style: {
                                          "--framer-text-color": `rgb(102, 102, 102)`,
                                        },
                                        children: o(`br`, {}),
                                      }),
                                      `brand, catering exceptional gastronomy, seamless execution, and personalised celebrations.`,
                                    ],
                                  }),
                                }),
                                className: `framer-6g21rl`,
                                "data-framer-name": `Mission Statement`,
                                fonts: [`FS;Montserrat-variable`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        c(`div`, {
                          className: `framer-6vosmt`,
                          "data-framer-name": `Image Container`,
                          children: [
                            c(`div`, {
                              className: `framer-2hmvxq`,
                              children: [
                                o(v, {
                                  breakpoint: T,
                                  overrides: {
                                    C9tpTcJrY: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 1660,
                                        pixelWidth: 1136,
                                        sizes: `max((${S?.width || `100vw`} - 72px) / 2, 1px)`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png 700w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png 1136w`,
                                      },
                                    },
                                    ipclDTqxD: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: C(
                                          (S?.y || 0) +
                                            0 +
                                            300 +
                                            170 +
                                            0 +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 1660,
                                        pixelWidth: 1136,
                                        sizes: `max(((${S?.width || `100vw`} - 200px) * 0.4 - 8px) / 2, 1px)`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png 700w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png 1136w`,
                                      },
                                    },
                                    Nz0RXJHRH: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: C(
                                          (S?.y || 0) +
                                            0 +
                                            300 +
                                            170 +
                                            0 +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 1660,
                                        pixelWidth: 1136,
                                        sizes: `max(((${S?.width || `100vw`} - 320px) * 0.4 - 8px) / 2, 1px)`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png 700w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png 1136w`,
                                      },
                                    },
                                    TlatadeZ0: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 1660,
                                        pixelWidth: 1136,
                                        sizes: `max((${S?.width || `100vw`} - 136px) / 2, 1px)`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png 700w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png 1136w`,
                                      },
                                    },
                                  },
                                  children: o(F, {
                                    animate: Pe,
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: C(
                                        (S?.y || 0) + 0 + 300 + 170 + 0 + 0 + 0
                                      ),
                                      pixelHeight: 1660,
                                      pixelWidth: 1136,
                                      sizes: `max(((${S?.width || `100vw`} - 400px) * 0.4 - 8px) / 2, 1px)`,
                                      src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png`,
                                      srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png 700w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/xj4zWlvtuk6TjKCfcxDYsp_ssdzmp.png 1136w`,
                                    },
                                    className: `framer-aeeg9u`,
                                    "data-framer-appear-id": `aeeg9u`,
                                    "data-framer-name": `Image`,
                                    initial: U,
                                    optimized: !0,
                                  }),
                                }),
                                o(v, {
                                  breakpoint: T,
                                  overrides: {
                                    C9tpTcJrY: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 4032,
                                        pixelWidth: 3024,
                                        sizes: `max((${S?.width || `100vw`} - 72px) / 2, 1px)`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 768w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 1536w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 3024w`,
                                      },
                                    },
                                    ipclDTqxD: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: C(
                                          (S?.y || 0) +
                                            0 +
                                            300 +
                                            170 +
                                            0 +
                                            0 +
                                            354
                                        ),
                                        pixelHeight: 4032,
                                        pixelWidth: 3024,
                                        sizes: `max(((${S?.width || `100vw`} - 200px) * 0.4 - 8px) / 2, 1px)`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 768w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 1536w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 3024w`,
                                      },
                                    },
                                    Nz0RXJHRH: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: C(
                                          (S?.y || 0) +
                                            0 +
                                            300 +
                                            170 +
                                            0 +
                                            0 +
                                            354
                                        ),
                                        pixelHeight: 4032,
                                        pixelWidth: 3024,
                                        sizes: `max(((${S?.width || `100vw`} - 320px) * 0.4 - 8px) / 2, 1px)`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 768w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 1536w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 3024w`,
                                      },
                                    },
                                    TlatadeZ0: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 4032,
                                        pixelWidth: 3024,
                                        sizes: `max((${S?.width || `100vw`} - 136px) / 2, 1px)`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 768w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 1536w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 3024w`,
                                      },
                                    },
                                  },
                                  children: o(F, {
                                    animate: Fe,
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: C(
                                        (S?.y || 0) +
                                          0 +
                                          300 +
                                          170 +
                                          0 +
                                          0 +
                                          354
                                      ),
                                      pixelHeight: 4032,
                                      pixelWidth: 3024,
                                      sizes: `max(((${S?.width || `100vw`} - 400px) * 0.4 - 8px) / 2, 1px)`,
                                      src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg`,
                                      srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 768w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 1536w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/e6C9U6MkBIHor19a75PclU3_rngrwm.jpg 3024w`,
                                    },
                                    className: `framer-1gn1pz1`,
                                    "data-framer-appear-id": `1gn1pz1`,
                                    "data-framer-name": `Image`,
                                    initial: U,
                                    optimized: !0,
                                  }),
                                }),
                              ],
                            }),
                            o(v, {
                              breakpoint: T,
                              overrides: {
                                C9tpTcJrY: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    pixelHeight: 4096,
                                    pixelWidth: 2731,
                                    sizes: `max((${S?.width || `100vw`} - 72px) / 2, 1px)`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 682w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 1365w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 2731w`,
                                  },
                                },
                                ipclDTqxD: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: C((S?.y || 0) + 0 + 300 + 170 + 0),
                                    pixelHeight: 4096,
                                    pixelWidth: 2731,
                                    sizes: `max(((${S?.width || `100vw`} - 200px) * 0.4 - 8px) / 2, 1px)`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 682w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 1365w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 2731w`,
                                  },
                                },
                                Nz0RXJHRH: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: C((S?.y || 0) + 0 + 300 + 170 + 0),
                                    pixelHeight: 4096,
                                    pixelWidth: 2731,
                                    sizes: `max(((${S?.width || `100vw`} - 320px) * 0.4 - 8px) / 2, 1px)`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 682w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 1365w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 2731w`,
                                  },
                                },
                                TlatadeZ0: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    pixelHeight: 4096,
                                    pixelWidth: 2731,
                                    sizes: `max((${S?.width || `100vw`} - 136px) / 2, 1px)`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 682w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 1365w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 2731w`,
                                  },
                                },
                              },
                              children: o(F, {
                                animate: Ie,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: C((S?.y || 0) + 0 + 300 + 170 + 0),
                                  pixelHeight: 4096,
                                  pixelWidth: 2731,
                                  sizes: `max(((${S?.width || `100vw`} - 400px) * 0.4 - 8px) / 2, 1px)`,
                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg`,
                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 682w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 1365w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/dFWMjNCKQEzUWeGfFGKLpil_ojhtbs.jpg 2731w`,
                                },
                                className: `framer-1kjnm5n`,
                                "data-framer-appear-id": `1kjnm5n`,
                                "data-framer-name": `Image`,
                                initial: U,
                                optimized: !0,
                              }),
                            }),
                          ],
                        }),
                        N() &&
                          c(`div`, {
                            className: `framer-xeo1nr hidden-4k4wy9`,
                            "data-framer-name": `Titik-titik`,
                            children: [
                              o(`div`, {
                                className: `framer-lij20n`,
                                "data-framer-name": `Rectangle 3 Copy 19`,
                              }),
                              o(`div`, {
                                className: `framer-1payo95`,
                                "data-framer-name": `Rectangle 3 Copy 18`,
                              }),
                              o(`div`, {
                                className: `framer-1v0gnco`,
                                "data-framer-name": `Rectangle 3 Copy 17`,
                              }),
                              o(`div`, {
                                className: `framer-1k3j333`,
                                "data-framer-name": `Rectangle 3 Copy 16`,
                              }),
                              o(`div`, {
                                className: `framer-qskupl`,
                                "data-framer-name": `Rectangle 3 Copy 15`,
                              }),
                              o(`div`, {
                                className: `framer-1orp26b`,
                                "data-framer-name": `Rectangle 3 Copy 14`,
                              }),
                              o(`div`, {
                                className: `framer-uyn2ab`,
                                "data-framer-name": `Rectangle 3 Copy 13`,
                              }),
                              o(`div`, {
                                className: `framer-5xatl6`,
                                "data-framer-name": `Rectangle 3 Copy 12`,
                              }),
                              o(`div`, {
                                className: `framer-ma1bjx`,
                                "data-framer-name": `Rectangle 3 Copy 11`,
                              }),
                              o(`div`, {
                                className: `framer-uorsjq`,
                                "data-framer-name": `Rectangle 3 Copy 10`,
                              }),
                              o(`div`, {
                                className: `framer-1p7d8ov`,
                                "data-framer-name": `Rectangle 3 Copy 29`,
                              }),
                              o(`div`, {
                                className: `framer-9fet29`,
                                "data-framer-name": `Rectangle 3 Copy 28`,
                              }),
                              o(`div`, {
                                className: `framer-1vdymwm`,
                                "data-framer-name": `Rectangle 3 Copy 27`,
                              }),
                              o(`div`, {
                                className: `framer-1l2qonl`,
                                "data-framer-name": `Rectangle 3 Copy 26`,
                              }),
                              o(`div`, {
                                className: `framer-1r43pq8`,
                                "data-framer-name": `Rectangle 3 Copy 25`,
                              }),
                              o(`div`, {
                                className: `framer-voyeyp`,
                                "data-framer-name": `Rectangle 3 Copy 24`,
                              }),
                              o(`div`, {
                                className: `framer-3npsr4`,
                                "data-framer-name": `Rectangle 3 Copy 23`,
                              }),
                              o(`div`, {
                                className: `framer-1hweklu`,
                                "data-framer-name": `Rectangle 3 Copy 22`,
                              }),
                              o(`div`, {
                                className: `framer-grs0ob`,
                                "data-framer-name": `Rectangle 3 Copy 21`,
                              }),
                              o(`div`, {
                                className: `framer-1hhnmjr`,
                                "data-framer-name": `Rectangle 3 Copy 20`,
                              }),
                              o(`div`, {
                                className: `framer-1trvatj`,
                                "data-framer-name": `Rectangle 3 Copy 39`,
                              }),
                              o(`div`, {
                                className: `framer-11wnbdy`,
                                "data-framer-name": `Rectangle 3 Copy 38`,
                              }),
                              o(`div`, {
                                className: `framer-7atqgo`,
                                "data-framer-name": `Rectangle 3 Copy 37`,
                              }),
                              o(`div`, {
                                className: `framer-m61jjj`,
                                "data-framer-name": `Rectangle 3 Copy 36`,
                              }),
                              o(`div`, {
                                className: `framer-107getz`,
                                "data-framer-name": `Rectangle 3 Copy 35`,
                              }),
                              o(`div`, {
                                className: `framer-u4emav`,
                                "data-framer-name": `Rectangle 3 Copy 34`,
                              }),
                              o(`div`, {
                                className: `framer-wcs7qk`,
                                "data-framer-name": `Rectangle 3 Copy 33`,
                              }),
                              o(`div`, {
                                className: `framer-enntdt`,
                                "data-framer-name": `Rectangle 3 Copy 32`,
                              }),
                              o(`div`, {
                                className: `framer-6b0ull`,
                                "data-framer-name": `Rectangle 3 Copy 31`,
                              }),
                              o(`div`, {
                                className: `framer-1o5x791`,
                                "data-framer-name": `Rectangle 3 Copy 30`,
                              }),
                              o(`div`, {
                                className: `framer-bzpqyw`,
                                "data-framer-name": `Rectangle 3 Copy 49`,
                              }),
                              o(`div`, {
                                className: `framer-2k6ks9`,
                                "data-framer-name": `Rectangle 3 Copy 48`,
                              }),
                              o(`div`, {
                                className: `framer-rq3xsy`,
                                "data-framer-name": `Rectangle 3 Copy 47`,
                              }),
                              o(`div`, {
                                className: `framer-13syn6s`,
                                "data-framer-name": `Rectangle 3 Copy 46`,
                              }),
                              o(`div`, {
                                className: `framer-10mqeip`,
                                "data-framer-name": `Rectangle 3 Copy 45`,
                              }),
                              o(`div`, {
                                className: `framer-18asiuz`,
                                "data-framer-name": `Rectangle 3 Copy 44`,
                              }),
                              o(`div`, {
                                className: `framer-12izjhl`,
                                "data-framer-name": `Rectangle 3 Copy 43`,
                              }),
                              o(`div`, {
                                className: `framer-168vmu`,
                                "data-framer-name": `Rectangle 3 Copy 42`,
                              }),
                              o(`div`, {
                                className: `framer-1mf9bzx`,
                                "data-framer-name": `Rectangle 3 Copy 41`,
                              }),
                              o(`div`, {
                                className: `framer-dlob8k`,
                                "data-framer-name": `Rectangle 3 Copy 40`,
                              }),
                              o(`div`, {
                                className: `framer-1orelkv`,
                                "data-framer-name": `Rectangle 3 Copy 59`,
                              }),
                              o(`div`, {
                                className: `framer-1u3tfou`,
                                "data-framer-name": `Rectangle 3 Copy 58`,
                              }),
                              o(`div`, {
                                className: `framer-19kt18q`,
                                "data-framer-name": `Rectangle 3 Copy 57`,
                              }),
                              o(`div`, {
                                className: `framer-7cvifo`,
                                "data-framer-name": `Rectangle 3 Copy 56`,
                              }),
                              o(`div`, {
                                className: `framer-lploi3`,
                                "data-framer-name": `Rectangle 3 Copy 55`,
                              }),
                              o(`div`, {
                                className: `framer-17ztvsj`,
                                "data-framer-name": `Rectangle 3 Copy 54`,
                              }),
                              o(`div`, {
                                className: `framer-1v2n1kh`,
                                "data-framer-name": `Rectangle 3 Copy 53`,
                              }),
                              o(`div`, {
                                className: `framer-1862wsz`,
                                "data-framer-name": `Rectangle 3 Copy 52`,
                              }),
                              o(`div`, {
                                className: `framer-1tabtb3`,
                                "data-framer-name": `Rectangle 3 Copy 51`,
                              }),
                              o(`div`, {
                                className: `framer-177ovkv`,
                                "data-framer-name": `Rectangle 3 Copy 50`,
                              }),
                              o(`div`, {
                                className: `framer-160efmf`,
                                "data-framer-name": `Rectangle 3 Copy 69`,
                              }),
                              o(`div`, {
                                className: `framer-ktpurp`,
                                "data-framer-name": `Rectangle 3 Copy 68`,
                              }),
                              o(`div`, {
                                className: `framer-z0slwi`,
                                "data-framer-name": `Rectangle 3 Copy 67`,
                              }),
                              o(`div`, {
                                className: `framer-fsmtqm`,
                                "data-framer-name": `Rectangle 3 Copy 66`,
                              }),
                              o(`div`, {
                                className: `framer-bwybul`,
                                "data-framer-name": `Rectangle 3 Copy 65`,
                              }),
                              o(`div`, {
                                className: `framer-hk9mvt`,
                                "data-framer-name": `Rectangle 3 Copy 64`,
                              }),
                              o(`div`, {
                                className: `framer-knlvvj`,
                                "data-framer-name": `Rectangle 3 Copy 63`,
                              }),
                              o(`div`, {
                                className: `framer-1q4v7v7`,
                                "data-framer-name": `Rectangle 3 Copy 62`,
                              }),
                              o(`div`, {
                                className: `framer-egyq5d`,
                                "data-framer-name": `Rectangle 3 Copy 61`,
                              }),
                              o(`div`, {
                                className: `framer-1ne5n1h`,
                                "data-framer-name": `Rectangle 3 Copy 60`,
                              }),
                              o(`div`, {
                                className: `framer-3bc86d`,
                                "data-framer-name": `Rectangle 3 Copy 79`,
                              }),
                              o(`div`, {
                                className: `framer-dhmd86`,
                                "data-framer-name": `Rectangle 3 Copy 80`,
                              }),
                              o(`div`, {
                                className: `framer-1prxleh`,
                                "data-framer-name": `Rectangle 3 Copy 90`,
                              }),
                              o(`div`, {
                                className: `framer-1d96neb`,
                                "data-framer-name": `Rectangle 3 Copy 100`,
                              }),
                              o(`div`, {
                                className: `framer-11gi7jj`,
                                "data-framer-name": `Rectangle 3 Copy 78`,
                              }),
                              o(`div`, {
                                className: `framer-en0755`,
                                "data-framer-name": `Rectangle 3 Copy 81`,
                              }),
                              o(`div`, {
                                className: `framer-aerad9`,
                                "data-framer-name": `Rectangle 3 Copy 91`,
                              }),
                              o(`div`, {
                                className: `framer-jtjxu6`,
                                "data-framer-name": `Rectangle 3 Copy 101`,
                              }),
                              o(`div`, {
                                className: `framer-jizmbi`,
                                "data-framer-name": `Rectangle 3 Copy 77`,
                              }),
                              o(`div`, {
                                className: `framer-1wj1yg9`,
                                "data-framer-name": `Rectangle 3 Copy 82`,
                              }),
                              o(`div`, {
                                className: `framer-gu1cp7`,
                                "data-framer-name": `Rectangle 3 Copy 92`,
                              }),
                              o(`div`, {
                                className: `framer-okh0gn`,
                                "data-framer-name": `Rectangle 3 Copy 102`,
                              }),
                              o(`div`, {
                                className: `framer-1gpu6zf`,
                                "data-framer-name": `Rectangle 3 Copy 76`,
                              }),
                              o(`div`, {
                                className: `framer-1lygi00`,
                                "data-framer-name": `Rectangle 3 Copy 83`,
                              }),
                              o(`div`, {
                                className: `framer-hvary9`,
                                "data-framer-name": `Rectangle 3 Copy 93`,
                              }),
                              o(`div`, {
                                className: `framer-5j3mox`,
                                "data-framer-name": `Rectangle 3 Copy 103`,
                              }),
                              o(`div`, {
                                className: `framer-4y9h24`,
                                "data-framer-name": `Rectangle 3 Copy 75`,
                              }),
                              o(`div`, {
                                className: `framer-1l5mgdx`,
                                "data-framer-name": `Rectangle 3 Copy 84`,
                              }),
                              o(`div`, {
                                className: `framer-v3nlh8`,
                                "data-framer-name": `Rectangle 3 Copy 94`,
                              }),
                              o(`div`, {
                                className: `framer-1jfoze9`,
                                "data-framer-name": `Rectangle 3 Copy 104`,
                              }),
                              o(`div`, {
                                className: `framer-1l0f6gj`,
                                "data-framer-name": `Rectangle 3 Copy 74`,
                              }),
                              o(`div`, {
                                className: `framer-1qf7bx6`,
                                "data-framer-name": `Rectangle 3 Copy 85`,
                              }),
                              o(`div`, {
                                className: `framer-136v26e`,
                                "data-framer-name": `Rectangle 3 Copy 95`,
                              }),
                              o(`div`, {
                                className: `framer-18q7ntb`,
                                "data-framer-name": `Rectangle 3 Copy 105`,
                              }),
                              o(`div`, {
                                className: `framer-1cy604n`,
                                "data-framer-name": `Rectangle 3 Copy 73`,
                              }),
                              o(`div`, {
                                className: `framer-1vchqio`,
                                "data-framer-name": `Rectangle 3 Copy 86`,
                              }),
                              o(`div`, {
                                className: `framer-ba0ph0`,
                                "data-framer-name": `Rectangle 3 Copy 96`,
                              }),
                              o(`div`, {
                                className: `framer-17leyvn`,
                                "data-framer-name": `Rectangle 3 Copy 106`,
                              }),
                              o(`div`, {
                                className: `framer-deyfz`,
                                "data-framer-name": `Rectangle 3 Copy 72`,
                              }),
                              o(`div`, {
                                className: `framer-ybqq5z`,
                                "data-framer-name": `Rectangle 3 Copy 87`,
                              }),
                              o(`div`, {
                                className: `framer-17514hk`,
                                "data-framer-name": `Rectangle 3 Copy 97`,
                              }),
                              o(`div`, {
                                className: `framer-1udvq51`,
                                "data-framer-name": `Rectangle 3 Copy 107`,
                              }),
                              o(`div`, {
                                className: `framer-vrnor8`,
                                "data-framer-name": `Rectangle 3 Copy 71`,
                              }),
                              o(`div`, {
                                className: `framer-1fjn85p`,
                                "data-framer-name": `Rectangle 3 Copy 88`,
                              }),
                              o(`div`, {
                                className: `framer-4vpdwv`,
                                "data-framer-name": `Rectangle 3 Copy 98`,
                              }),
                              o(`div`, {
                                className: `framer-19nw9bg`,
                                "data-framer-name": `Rectangle 3 Copy 108`,
                              }),
                              o(`div`, {
                                className: `framer-1p1sdj5`,
                                "data-framer-name": `Rectangle 3 Copy 70`,
                              }),
                              o(`div`, {
                                className: `framer-1fujmvy`,
                                "data-framer-name": `Rectangle 3 Copy 89`,
                              }),
                              o(`div`, {
                                className: `framer-tijuyh`,
                                "data-framer-name": `Rectangle 3 Copy 99`,
                              }),
                              o(`div`, {
                                className: `framer-1f09x7h`,
                                "data-framer-name": `Rectangle 3 Copy 109`,
                              }),
                            ],
                          }),
                      ],
                    }),
                    c(`div`, {
                      className: `framer-4h89k7`,
                      "data-framer-name": `Main`,
                      children: [
                        j() &&
                          c(L, {
                            __framer__adjustPosition: !1,
                            __framer__offset: 0,
                            __framer__parallaxTransformEnabled: !0,
                            __framer__speed: 104,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-afqxgq hidden-rkemn2 hidden-4k4wy9`,
                            "data-framer-name": `Image`,
                            children: [
                              o(v, {
                                breakpoint: T,
                                overrides: {
                                  ipclDTqxD: {
                                    background: {
                                      alt: ``,
                                      fit: `stretch`,
                                      loading: C(
                                        (S?.y || 0) + 0 + 1340 + 291.8 + -20
                                      ),
                                      pixelHeight: 2644,
                                      pixelWidth: 2188,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `calc((${S?.width || `100vw`} - 200px) * 0.32 + 203px)`,
                                      src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png`,
                                      srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 847w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 1694w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 2188w`,
                                    },
                                  },
                                  Nz0RXJHRH: {
                                    background: {
                                      alt: ``,
                                      fit: `stretch`,
                                      loading: C(
                                        (S?.y || 0) + 0 + 1340 + 291.8 + -20
                                      ),
                                      pixelHeight: 2644,
                                      pixelWidth: 2188,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `calc((${S?.width || `100vw`} - 320px) * 0.32 + 203px)`,
                                      src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png`,
                                      srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 847w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 1694w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 2188w`,
                                    },
                                  },
                                },
                                children: o(I, {
                                  __framer__adjustPosition: !1,
                                  __framer__offset: 0,
                                  __framer__parallaxTransformEnabled: !0,
                                  __framer__speed: 106,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  background: {
                                    alt: ``,
                                    fit: `stretch`,
                                    loading: C(
                                      (S?.y || 0) + 0 + 1340 + 291.8 + -20
                                    ),
                                    pixelHeight: 2644,
                                    pixelWidth: 2188,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `calc((${S?.width || `100vw`} - 400px) * 0.32 + 203px)`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 847w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 1694w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 2188w`,
                                  },
                                  className: `framer-56vyve`,
                                  "data-framer-name": `Bg IMage`,
                                }),
                              }),
                              c(`div`, {
                                className: `framer-xo5jd3`,
                                "data-framer-name": `Beyond Taste Container`,
                                children: [
                                  o(v, {
                                    breakpoint: T,
                                    overrides: {
                                      ipclDTqxD: {
                                        children: o(l, {
                                          children: o(`h3`, {
                                            style: {
                                              "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                              "--framer-font-family": `"Red Rose", sans-serif`,
                                              "--framer-font-size": `28px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `0.04em`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                                            },
                                            children: `Beyond Taste.`,
                                          }),
                                        }),
                                      },
                                      Nz0RXJHRH: {
                                        children: o(l, {
                                          children: o(`h3`, {
                                            style: {
                                              "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                              "--framer-font-family": `"Red Rose", sans-serif`,
                                              "--framer-font-size": `30px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `0.04em`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                                            },
                                            children: `Beyond Taste.`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(l, {
                                        children: o(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `34px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `0.04em`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                          },
                                          children: `Beyond Taste.`,
                                        }),
                                      }),
                                      className: `framer-cf9hxy`,
                                      "data-framer-name": `Title`,
                                      fonts: [`GF;Red Rose-500`],
                                      verticalAlignment: `center`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(l, {
                                      children: o(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                          "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                          "--framer-font-variation-axes": `"wght" 300`,
                                          "--framer-line-height": `1.6em`,
                                          "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                        },
                                        children: `Not just about food, but artistry, presentation, and exclusivity.`,
                                      }),
                                    }),
                                    className: `framer-1qcvame`,
                                    "data-framer-name": `Description`,
                                    fonts: [`FS;Montserrat-variable`],
                                    verticalAlignment: `center`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        c(`div`, {
                          className: `framer-vh07b9`,
                          "data-framer-name": `Container`,
                          children: [
                            c(`div`, {
                              className: `framer-u4pbnh`,
                              "data-framer-name": `Quote Container`,
                              children: [
                                o(v, {
                                  breakpoint: T,
                                  overrides: {
                                    C9tpTcJrY: {
                                      children: o(l, {
                                        children: c(`h1`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                            "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                            "--framer-font-size": `50px`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-color": `var(--token-19f0cf76-e3cf-4fb6-a3c2-0172f7e6d9e1, rgb(140, 95, 69))`,
                                          },
                                          children: [
                                            `Beyond Taste,`,
                                            o(`span`, {
                                              style: {
                                                "--framer-text-color": `rgb(0, 0, 0)`,
                                              },
                                              children: o(`br`, {}),
                                            }),
                                            `Experience`,
                                          ],
                                        }),
                                      }),
                                    },
                                    Nz0RXJHRH: {
                                      children: o(l, {
                                        children: c(`h1`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                            "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                            "--framer-font-size": `76px`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-color": `var(--token-e6740672-e51a-4a94-8ab3-ba42a8aca3cb, rgb(140, 95, 69))`,
                                          },
                                          children: [
                                            `Beyond Taste,`,
                                            o(`span`, {
                                              style: {
                                                "--framer-text-color": `rgb(0, 0, 0)`,
                                              },
                                              children: o(`br`, {}),
                                            }),
                                            `Experience`,
                                          ],
                                        }),
                                      }),
                                    },
                                    TlatadeZ0: {
                                      children: o(l, {
                                        children: c(`h1`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                            "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                            "--framer-font-size": `62px`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-color": `var(--token-e6740672-e51a-4a94-8ab3-ba42a8aca3cb, rgb(140, 95, 69))`,
                                          },
                                          children: [
                                            `Beyond Taste,`,
                                            o(`span`, {
                                              style: {
                                                "--framer-text-color": `rgb(0, 0, 0)`,
                                              },
                                              children: o(`br`, {}),
                                            }),
                                            `Experience`,
                                          ],
                                        }),
                                      }),
                                    },
                                  },
                                  children: o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(l, {
                                      children: c(`h1`, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `76px`,
                                          "--framer-line-height": `1.1em`,
                                          "--framer-text-color": `var(--token-19f0cf76-e3cf-4fb6-a3c2-0172f7e6d9e1, rgb(140, 95, 69))`,
                                        },
                                        children: [
                                          `Beyond Taste,`,
                                          o(`span`, {
                                            style: {
                                              "--framer-text-color": `rgb(0, 0, 0)`,
                                            },
                                            children: o(`br`, {}),
                                          }),
                                          `Experience`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-14udgbo`,
                                    "data-framer-name": `Quote Text`,
                                    fonts: [`CUSTOM;Perpetua Regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(v, {
                                  breakpoint: T,
                                  overrides: {
                                    C9tpTcJrY: {
                                      children: o(l, {
                                        children: o(`p`, {
                                          style: {
                                            "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                            "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                            "--framer-font-size": `14px`,
                                            "--framer-font-variation-axes": `"wght" 400`,
                                            "--framer-letter-spacing": `-0.02em`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-color": `var(--token-5bd2304c-b80e-4e35-9d41-797c902855f2, rgb(51, 51, 51))`,
                                          },
                                          children: `A luxury culinary journey that goes beyond just flavors—  it’s about the full immersive experience of\xA0gourmet\xA0dining.`,
                                        }),
                                      }),
                                    },
                                    TlatadeZ0: {
                                      children: o(l, {
                                        children: o(`p`, {
                                          style: {
                                            "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                            "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-font-variation-axes": `"wght" 400`,
                                            "--framer-letter-spacing": `-0.02em`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-color": `var(--token-34a5c68a-d574-4093-a29b-c3acb58a97e3, rgb(51, 51, 51))`,
                                          },
                                          children: `A luxury culinary journey that goes beyond just flavors— it’s about the full immersive experience of\xA0gourmet\xA0dining.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(l, {
                                      children: o(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                          "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                          "--framer-font-size": `22px`,
                                          "--framer-font-variation-axes": `"wght" 400`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-line-height": `1.6em`,
                                          "--framer-text-color": `var(--token-34a5c68a-d574-4093-a29b-c3acb58a97e3, rgb(51, 51, 51))`,
                                        },
                                        children: `A luxury culinary journey that goes beyond just flavors— it’s about the full immersive experience of\xA0gourmet\xA0dining.`,
                                      }),
                                    }),
                                    className: `framer-20j5nz`,
                                    "data-framer-name": `Quote Description`,
                                    fonts: [`FS;Montserrat-variable`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            c(L, {
                              __framer__adjustPosition: !1,
                              __framer__offset: 0,
                              __framer__parallaxTransformEnabled: !0,
                              __framer__speed: 102,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-anb070`,
                              "data-framer-name": `Image`,
                              children: [
                                o(v, {
                                  breakpoint: T,
                                  overrides: {
                                    C9tpTcJrY: {
                                      __framer__speed: 102,
                                      background: {
                                        alt: ``,
                                        fit: `stretch`,
                                        pixelHeight: 2644,
                                        pixelWidth: 2348,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `calc(max(${S?.width || `100vw`} - 64px, 1px) + 66px)`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 909w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 1818w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 2348w`,
                                      },
                                    },
                                    ipclDTqxD: {
                                      background: {
                                        alt: ``,
                                        fit: `stretch`,
                                        loading: C(
                                          (S?.y || 0) +
                                            0 +
                                            1340 +
                                            140 +
                                            0 +
                                            363.6 +
                                            -42
                                        ),
                                        pixelHeight: 2644,
                                        pixelWidth: 2348,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `calc((${S?.width || `100vw`} - 200px) * 0.3128 + 193px)`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 909w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 1818w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 2348w`,
                                      },
                                    },
                                    Nz0RXJHRH: {
                                      background: {
                                        alt: ``,
                                        fit: `stretch`,
                                        loading: C(
                                          (S?.y || 0) +
                                            0 +
                                            1340 +
                                            140 +
                                            0 +
                                            363.6 +
                                            640 -
                                            707
                                        ),
                                        pixelHeight: 2644,
                                        pixelWidth: 2348,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `calc((${S?.width || `100vw`} - 320px) * 0.3128 + 193px)`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 909w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 1818w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 2348w`,
                                      },
                                    },
                                    TlatadeZ0: {
                                      __framer__speed: 104,
                                      background: {
                                        alt: ``,
                                        fit: `stretch`,
                                        pixelHeight: 2644,
                                        pixelWidth: 2348,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `707px`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 909w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 1818w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 2348w`,
                                      },
                                    },
                                  },
                                  children: o(I, {
                                    __framer__adjustPosition: !1,
                                    __framer__offset: 0,
                                    __framer__parallaxTransformEnabled: !0,
                                    __framer__speed: 106,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: ``,
                                      fit: `stretch`,
                                      loading: C(
                                        (S?.y || 0) +
                                          0 +
                                          1340 +
                                          140 +
                                          0 +
                                          363.6 +
                                          640 -
                                          707
                                      ),
                                      pixelHeight: 2644,
                                      pixelWidth: 2348,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `calc((${S?.width || `100vw`} - 400px) * 0.3128 + 193px)`,
                                      src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png`,
                                      srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 909w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 1818w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MG1WGZkvcq01dSL84CHwIS_yb9csc.png 2348w`,
                                    },
                                    className: `framer-11vlqq`,
                                    "data-framer-name": `Bg IMage`,
                                  }),
                                }),
                                c(`div`, {
                                  className: `framer-ue34o6`,
                                  "data-framer-name": `Experience Container`,
                                  children: [
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        C9tpTcJrY: {
                                          children: o(l, {
                                            children: o(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0.04em`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                                              },
                                              children: `Experience.`,
                                            }),
                                          }),
                                        },
                                        ipclDTqxD: {
                                          children: o(l, {
                                            children: o(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-size": `28px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0.04em`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                                              },
                                              children: `Experience.`,
                                            }),
                                          }),
                                        },
                                        Nz0RXJHRH: {
                                          children: o(l, {
                                            children: o(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-size": `30px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0.04em`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                                              },
                                              children: `Experience.`,
                                            }),
                                          }),
                                        },
                                        TlatadeZ0: {
                                          children: o(l, {
                                            children: o(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-size": `26px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0.04em`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                                              },
                                              children: `Experience.`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(l, {
                                          children: o(`h3`, {
                                            style: {
                                              "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                              "--framer-font-family": `"Red Rose", sans-serif`,
                                              "--framer-font-size": `34px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `0.04em`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                            },
                                            children: `Experience.`,
                                          }),
                                        }),
                                        className: `framer-5xppgl`,
                                        "data-framer-name": `Title`,
                                        fonts: [`GF;Red Rose-500`],
                                        verticalAlignment: `center`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(l, {
                                        children: o(`p`, {
                                          style: {
                                            "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                            "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                            "--framer-font-variation-axes": `"wght" 300`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                          },
                                          children: `Elevating dining into a sensory and memorable luxury event.`,
                                        }),
                                      }),
                                      className: `framer-1k5x0jw`,
                                      "data-framer-name": `Description`,
                                      fonts: [`FS;Montserrat-variable`],
                                      verticalAlignment: `center`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            A() &&
                              c(L, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 104,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-p0unnd hidden-tmsleu hidden-1frjzya hidden-1inth7g`,
                                "data-framer-name": `Image`,
                                children: [
                                  o(v, {
                                    breakpoint: T,
                                    overrides: {
                                      C9tpTcJrY: {
                                        __framer__speed: 102,
                                        background: {
                                          alt: ``,
                                          fit: `stretch`,
                                          pixelHeight: 2644,
                                          pixelWidth: 2188,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `calc(max(${S?.width || `100vw`} - 64px, 1px) + 45px)`,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 847w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 1694w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 2188w`,
                                        },
                                      },
                                      TlatadeZ0: {
                                        __framer__speed: 104,
                                        background: {
                                          alt: ``,
                                          fit: `stretch`,
                                          pixelHeight: 2644,
                                          pixelWidth: 2188,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `calc(max(${S?.width || `100vw`} - 128px, 1px) + 50px)`,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 847w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 1694w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 2188w`,
                                        },
                                      },
                                    },
                                    children: o(I, {
                                      __framer__adjustPosition: !1,
                                      __framer__offset: 0,
                                      __framer__parallaxTransformEnabled: !0,
                                      __framer__speed: 106,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      background: {
                                        alt: ``,
                                        fit: `stretch`,
                                        pixelHeight: 2644,
                                        pixelWidth: 2188,
                                        positionX: `center`,
                                        positionY: `center`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 847w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 1694w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/iWTQvCCVANpTRMaCKsJdkw0_muphfx.png 2188w`,
                                      },
                                      className: `framer-sql734`,
                                      "data-framer-name": `Bg IMage`,
                                    }),
                                  }),
                                  c(`div`, {
                                    className: `framer-1h3bmf8`,
                                    "data-framer-name": `Beyond Taste Container`,
                                    children: [
                                      o(v, {
                                        breakpoint: T,
                                        overrides: {
                                          C9tpTcJrY: {
                                            children: o(l, {
                                              children: o(`h3`, {
                                                style: {
                                                  "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                  "--framer-font-family": `"Red Rose", sans-serif`,
                                                  "--framer-font-size": `24px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-letter-spacing": `0.04em`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                                                },
                                                children: `Beyond Taste.`,
                                              }),
                                            }),
                                          },
                                          TlatadeZ0: {
                                            children: o(l, {
                                              children: o(`h3`, {
                                                style: {
                                                  "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                  "--framer-font-family": `"Red Rose", sans-serif`,
                                                  "--framer-font-size": `26px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-letter-spacing": `0.04em`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                                                },
                                                children: `Beyond Taste.`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: o(y, {
                                          __fromCanvasComponent: !0,
                                          children: o(l, {
                                            children: o(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-size": `34px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0.04em`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                              },
                                              children: `Beyond Taste.`,
                                            }),
                                          }),
                                          className: `framer-1mbibbx`,
                                          "data-framer-name": `Title`,
                                          fonts: [`GF;Red Rose-500`],
                                          verticalAlignment: `center`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(l, {
                                          children: o(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                            },
                                            children: `Not just about food, but artistry, presentation, and exclusivity.`,
                                          }),
                                        }),
                                        className: `framer-1rnm83g`,
                                        "data-framer-name": `Description`,
                                        fonts: [`FS;Montserrat-variable`],
                                        verticalAlignment: `center`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                        c(`div`, {
                          className: `framer-uy48b1`,
                          "data-framer-name": `Titik-titik`,
                          children: [
                            o(`div`, {
                              className: `framer-12zpxpj`,
                              "data-framer-name": `Rectangle 3 Copy 19`,
                            }),
                            o(`div`, {
                              className: `framer-1se79hy`,
                              "data-framer-name": `Rectangle 3 Copy 18`,
                            }),
                            o(`div`, {
                              className: `framer-yxjmjd`,
                              "data-framer-name": `Rectangle 3 Copy 17`,
                            }),
                            o(`div`, {
                              className: `framer-18xdbkw`,
                              "data-framer-name": `Rectangle 3 Copy 16`,
                            }),
                            o(`div`, {
                              className: `framer-dom9lc`,
                              "data-framer-name": `Rectangle 3 Copy 15`,
                            }),
                            o(`div`, {
                              className: `framer-hjg3ur`,
                              "data-framer-name": `Rectangle 3 Copy 14`,
                            }),
                            o(`div`, {
                              className: `framer-wj5wge`,
                              "data-framer-name": `Rectangle 3 Copy 13`,
                            }),
                            o(`div`, {
                              className: `framer-1ucomnd`,
                              "data-framer-name": `Rectangle 3 Copy 12`,
                            }),
                            o(`div`, {
                              className: `framer-1cwjf4d`,
                              "data-framer-name": `Rectangle 3 Copy 11`,
                            }),
                            o(`div`, {
                              className: `framer-r1eyq0`,
                              "data-framer-name": `Rectangle 3 Copy 10`,
                            }),
                            o(`div`, {
                              className: `framer-1nrkl3q`,
                              "data-framer-name": `Rectangle 3 Copy 29`,
                            }),
                            o(`div`, {
                              className: `framer-1tqav7z`,
                              "data-framer-name": `Rectangle 3 Copy 28`,
                            }),
                            o(`div`, {
                              className: `framer-y7pefu`,
                              "data-framer-name": `Rectangle 3 Copy 27`,
                            }),
                            o(`div`, {
                              className: `framer-h0cud6`,
                              "data-framer-name": `Rectangle 3 Copy 26`,
                            }),
                            o(`div`, {
                              className: `framer-1u1cyke`,
                              "data-framer-name": `Rectangle 3 Copy 25`,
                            }),
                            o(`div`, {
                              className: `framer-1nq94dv`,
                              "data-framer-name": `Rectangle 3 Copy 24`,
                            }),
                            o(`div`, {
                              className: `framer-k4ifbs`,
                              "data-framer-name": `Rectangle 3 Copy 23`,
                            }),
                            o(`div`, {
                              className: `framer-1qq4fxh`,
                              "data-framer-name": `Rectangle 3 Copy 22`,
                            }),
                            o(`div`, {
                              className: `framer-yyuvug`,
                              "data-framer-name": `Rectangle 3 Copy 21`,
                            }),
                            o(`div`, {
                              className: `framer-1n9d52z`,
                              "data-framer-name": `Rectangle 3 Copy 20`,
                            }),
                            o(`div`, {
                              className: `framer-10y8vzz`,
                              "data-framer-name": `Rectangle 3 Copy 39`,
                            }),
                            o(`div`, {
                              className: `framer-1g3r424`,
                              "data-framer-name": `Rectangle 3 Copy 38`,
                            }),
                            o(`div`, {
                              className: `framer-1pwhppu`,
                              "data-framer-name": `Rectangle 3 Copy 37`,
                            }),
                            o(`div`, {
                              className: `framer-gkt1ms`,
                              "data-framer-name": `Rectangle 3 Copy 36`,
                            }),
                            o(`div`, {
                              className: `framer-1u0uap0`,
                              "data-framer-name": `Rectangle 3 Copy 35`,
                            }),
                            o(`div`, {
                              className: `framer-1aqpuzx`,
                              "data-framer-name": `Rectangle 3 Copy 34`,
                            }),
                            o(`div`, {
                              className: `framer-p0koxo`,
                              "data-framer-name": `Rectangle 3 Copy 33`,
                            }),
                            o(`div`, {
                              className: `framer-1nals8e`,
                              "data-framer-name": `Rectangle 3 Copy 32`,
                            }),
                            o(`div`, {
                              className: `framer-1mwx0bp`,
                              "data-framer-name": `Rectangle 3 Copy 31`,
                            }),
                            o(`div`, {
                              className: `framer-2cmxjp`,
                              "data-framer-name": `Rectangle 3 Copy 30`,
                            }),
                            o(`div`, {
                              className: `framer-beyci7`,
                              "data-framer-name": `Rectangle 3 Copy 49`,
                            }),
                            o(`div`, {
                              className: `framer-uaqpf2`,
                              "data-framer-name": `Rectangle 3 Copy 48`,
                            }),
                            o(`div`, {
                              className: `framer-1h9u6fy`,
                              "data-framer-name": `Rectangle 3 Copy 47`,
                            }),
                            o(`div`, {
                              className: `framer-1bymljk`,
                              "data-framer-name": `Rectangle 3 Copy 46`,
                            }),
                            o(`div`, {
                              className: `framer-11dltsl`,
                              "data-framer-name": `Rectangle 3 Copy 45`,
                            }),
                            o(`div`, {
                              className: `framer-xub6ep`,
                              "data-framer-name": `Rectangle 3 Copy 44`,
                            }),
                            o(`div`, {
                              className: `framer-1hqhv86`,
                              "data-framer-name": `Rectangle 3 Copy 43`,
                            }),
                            o(`div`, {
                              className: `framer-1b0j3sw`,
                              "data-framer-name": `Rectangle 3 Copy 42`,
                            }),
                            o(`div`, {
                              className: `framer-13c1g8q`,
                              "data-framer-name": `Rectangle 3 Copy 41`,
                            }),
                            o(`div`, {
                              className: `framer-4cunyd`,
                              "data-framer-name": `Rectangle 3 Copy 40`,
                            }),
                            o(`div`, {
                              className: `framer-1rjyv3n`,
                              "data-framer-name": `Rectangle 3 Copy 59`,
                            }),
                            o(`div`, {
                              className: `framer-k9ciol`,
                              "data-framer-name": `Rectangle 3 Copy 58`,
                            }),
                            o(`div`, {
                              className: `framer-1263ihv`,
                              "data-framer-name": `Rectangle 3 Copy 57`,
                            }),
                            o(`div`, {
                              className: `framer-1di79zc`,
                              "data-framer-name": `Rectangle 3 Copy 56`,
                            }),
                            o(`div`, {
                              className: `framer-pml5cd`,
                              "data-framer-name": `Rectangle 3 Copy 55`,
                            }),
                            o(`div`, {
                              className: `framer-1dbvqe2`,
                              "data-framer-name": `Rectangle 3 Copy 54`,
                            }),
                            o(`div`, {
                              className: `framer-ev7qv8`,
                              "data-framer-name": `Rectangle 3 Copy 53`,
                            }),
                            o(`div`, {
                              className: `framer-12zdgp1`,
                              "data-framer-name": `Rectangle 3 Copy 52`,
                            }),
                            o(`div`, {
                              className: `framer-1fj1s9s`,
                              "data-framer-name": `Rectangle 3 Copy 51`,
                            }),
                            o(`div`, {
                              className: `framer-1xwo4uu`,
                              "data-framer-name": `Rectangle 3 Copy 50`,
                            }),
                            o(`div`, {
                              className: `framer-1qwn0ev`,
                              "data-framer-name": `Rectangle 3 Copy 69`,
                            }),
                            o(`div`, {
                              className: `framer-1a1johf`,
                              "data-framer-name": `Rectangle 3 Copy 68`,
                            }),
                            o(`div`, {
                              className: `framer-1bq0ygr`,
                              "data-framer-name": `Rectangle 3 Copy 67`,
                            }),
                            o(`div`, {
                              className: `framer-18p0d57`,
                              "data-framer-name": `Rectangle 3 Copy 66`,
                            }),
                            o(`div`, {
                              className: `framer-1relc74`,
                              "data-framer-name": `Rectangle 3 Copy 65`,
                            }),
                            o(`div`, {
                              className: `framer-1xogk2k`,
                              "data-framer-name": `Rectangle 3 Copy 64`,
                            }),
                            o(`div`, {
                              className: `framer-efjrnk`,
                              "data-framer-name": `Rectangle 3 Copy 63`,
                            }),
                            o(`div`, {
                              className: `framer-ncwgdr`,
                              "data-framer-name": `Rectangle 3 Copy 62`,
                            }),
                            o(`div`, {
                              className: `framer-hxrvxx`,
                              "data-framer-name": `Rectangle 3 Copy 61`,
                            }),
                            o(`div`, {
                              className: `framer-12j4876`,
                              "data-framer-name": `Rectangle 3 Copy 60`,
                            }),
                            o(`div`, {
                              className: `framer-gt5fo5`,
                              "data-framer-name": `Rectangle 3 Copy 79`,
                            }),
                            o(`div`, {
                              className: `framer-o2radx`,
                              "data-framer-name": `Rectangle 3 Copy 80`,
                            }),
                            o(`div`, {
                              className: `framer-10hx8up`,
                              "data-framer-name": `Rectangle 3 Copy 90`,
                            }),
                            o(`div`, {
                              className: `framer-df78j`,
                              "data-framer-name": `Rectangle 3 Copy 100`,
                            }),
                            o(`div`, {
                              className: `framer-g4q56e`,
                              "data-framer-name": `Rectangle 3 Copy 78`,
                            }),
                            o(`div`, {
                              className: `framer-1kun3fg`,
                              "data-framer-name": `Rectangle 3 Copy 81`,
                            }),
                            o(`div`, {
                              className: `framer-1by1hg8`,
                              "data-framer-name": `Rectangle 3 Copy 91`,
                            }),
                            o(`div`, {
                              className: `framer-1xvktfw`,
                              "data-framer-name": `Rectangle 3 Copy 101`,
                            }),
                            o(`div`, {
                              className: `framer-11s6yq6`,
                              "data-framer-name": `Rectangle 3 Copy 77`,
                            }),
                            o(`div`, {
                              className: `framer-1qa3is4`,
                              "data-framer-name": `Rectangle 3 Copy 82`,
                            }),
                            o(`div`, {
                              className: `framer-34f3ri`,
                              "data-framer-name": `Rectangle 3 Copy 92`,
                            }),
                            o(`div`, {
                              className: `framer-iamevk`,
                              "data-framer-name": `Rectangle 3 Copy 102`,
                            }),
                            o(`div`, {
                              className: `framer-8nz6ox`,
                              "data-framer-name": `Rectangle 3 Copy 76`,
                            }),
                            o(`div`, {
                              className: `framer-1eanb4k`,
                              "data-framer-name": `Rectangle 3 Copy 83`,
                            }),
                            o(`div`, {
                              className: `framer-1mdflil`,
                              "data-framer-name": `Rectangle 3 Copy 93`,
                            }),
                            o(`div`, {
                              className: `framer-tzcnis`,
                              "data-framer-name": `Rectangle 3 Copy 103`,
                            }),
                            o(`div`, {
                              className: `framer-7jctc5`,
                              "data-framer-name": `Rectangle 3 Copy 75`,
                            }),
                            o(`div`, {
                              className: `framer-1kedpg0`,
                              "data-framer-name": `Rectangle 3 Copy 84`,
                            }),
                            o(`div`, {
                              className: `framer-1qtuqur`,
                              "data-framer-name": `Rectangle 3 Copy 94`,
                            }),
                            o(`div`, {
                              className: `framer-1vmkklw`,
                              "data-framer-name": `Rectangle 3 Copy 104`,
                            }),
                            o(`div`, {
                              className: `framer-gk3i90`,
                              "data-framer-name": `Rectangle 3 Copy 74`,
                            }),
                            o(`div`, {
                              className: `framer-cefhp7`,
                              "data-framer-name": `Rectangle 3 Copy 85`,
                            }),
                            o(`div`, {
                              className: `framer-c00533`,
                              "data-framer-name": `Rectangle 3 Copy 95`,
                            }),
                            o(`div`, {
                              className: `framer-1jk89my`,
                              "data-framer-name": `Rectangle 3 Copy 105`,
                            }),
                            o(`div`, {
                              className: `framer-ntsi5q`,
                              "data-framer-name": `Rectangle 3 Copy 73`,
                            }),
                            o(`div`, {
                              className: `framer-o381c5`,
                              "data-framer-name": `Rectangle 3 Copy 86`,
                            }),
                            o(`div`, {
                              className: `framer-1rm78fq`,
                              "data-framer-name": `Rectangle 3 Copy 96`,
                            }),
                            o(`div`, {
                              className: `framer-4mcwl8`,
                              "data-framer-name": `Rectangle 3 Copy 106`,
                            }),
                            o(`div`, {
                              className: `framer-1yfsy13`,
                              "data-framer-name": `Rectangle 3 Copy 72`,
                            }),
                            o(`div`, {
                              className: `framer-9f01qk`,
                              "data-framer-name": `Rectangle 3 Copy 87`,
                            }),
                            o(`div`, {
                              className: `framer-trzxuj`,
                              "data-framer-name": `Rectangle 3 Copy 97`,
                            }),
                            o(`div`, {
                              className: `framer-sb3glf`,
                              "data-framer-name": `Rectangle 3 Copy 107`,
                            }),
                            o(`div`, {
                              className: `framer-ckdgxq`,
                              "data-framer-name": `Rectangle 3 Copy 71`,
                            }),
                            o(`div`, {
                              className: `framer-9mieen`,
                              "data-framer-name": `Rectangle 3 Copy 88`,
                            }),
                            o(`div`, {
                              className: `framer-9ielyp`,
                              "data-framer-name": `Rectangle 3 Copy 98`,
                            }),
                            o(`div`, {
                              className: `framer-1mgzdqd`,
                              "data-framer-name": `Rectangle 3 Copy 108`,
                            }),
                            o(`div`, {
                              className: `framer-1uu2bo3`,
                              "data-framer-name": `Rectangle 3 Copy 70`,
                            }),
                            o(`div`, {
                              className: `framer-ve52sf`,
                              "data-framer-name": `Rectangle 3 Copy 89`,
                            }),
                            o(`div`, {
                              className: `framer-1g8xon7`,
                              "data-framer-name": `Rectangle 3 Copy 99`,
                            }),
                            o(`div`, {
                              className: `framer-6jfc7x`,
                              "data-framer-name": `Rectangle 3 Copy 109`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    c(`div`, {
                      className: `framer-oee90q`,
                      "data-framer-name": `Main`,
                      children: [
                        c(`div`, {
                          className: `framer-33dad0`,
                          "data-framer-name": `Container`,
                          children: [
                            c(`div`, {
                              className: `framer-js7hdx`,
                              "data-framer-name": `Founder Container`,
                              children: [
                                o(v, {
                                  breakpoint: T,
                                  overrides: {
                                    C9tpTcJrY: {
                                      children: o(l, {
                                        children: o(`h1`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                            "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                            "--framer-font-size": `50px`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-color": `var(--token-02d563c9-e8b4-4d3b-9c6b-a36d4645892e, rgb(76, 51, 36))`,
                                          },
                                          children: `Mohammad Shafeeq`,
                                        }),
                                      }),
                                    },
                                    TlatadeZ0: {
                                      children: o(l, {
                                        children: o(`h1`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                            "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                            "--framer-font-size": `64px`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-color": `var(--token-02d563c9-e8b4-4d3b-9c6b-a36d4645892e, rgb(76, 51, 36))`,
                                          },
                                          children: `Mohammad Shafeeq`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(l, {
                                      children: o(`h1`, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `76px`,
                                          "--framer-line-height": `1.1em`,
                                          "--framer-text-color": `var(--token-02d563c9-e8b4-4d3b-9c6b-a36d4645892e, rgb(76, 51, 36))`,
                                        },
                                        children: `Mohammad Shafeeq`,
                                      }),
                                    }),
                                    className: `framer-1fgdwwy`,
                                    "data-framer-name": `Founder Name`,
                                    fonts: [`CUSTOM;Perpetua Regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(v, {
                                  breakpoint: T,
                                  overrides: {
                                    C9tpTcJrY: {
                                      children: o(l, {
                                        children: o(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `22px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-color": `var(--token-19f0cf76-e3cf-4fb6-a3c2-0172f7e6d9e1, rgb(140, 95, 69))`,
                                          },
                                          children: `Founder of Shahi Caterers`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(l, {
                                      children: o(`h3`, {
                                        style: {
                                          "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                          "--framer-font-family": `"Red Rose", sans-serif`,
                                          "--framer-font-size": `24px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `var(--token-19f0cf76-e3cf-4fb6-a3c2-0172f7e6d9e1, rgb(140, 95, 69))`,
                                        },
                                        children: `Founder of Shahi Caterers`,
                                      }),
                                    }),
                                    className: `framer-rdr4df`,
                                    "data-framer-name": `Founder Name`,
                                    fonts: [`GF;Red Rose-500`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            o(`div`, {
                              className: `framer-1rqvylz`,
                              "data-framer-name": `Founder Description Container`,
                              children: o(v, {
                                breakpoint: T,
                                overrides: {
                                  C9tpTcJrY: {
                                    children: o(l, {
                                      children: c(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                          "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                          "--framer-font-variation-axes": `"wght" 400`,
                                          "--framer-line-height": `1.6em`,
                                          "--framer-text-color": `var(--token-34a5c68a-d574-4093-a29b-c3acb58a97e3, rgb(51, 51, 51))`,
                                        },
                                        children: [
                                          `With over 15 years of expertise in business management, hospitality, events, and marketing, Mohammad Shafeeq is the visionary behind Shahi Caterers. His journey began at 19, and by 2017, he had expanded into venue bookings, destination weddings, and luxury catering—driven by a passion for curating world-class fine dining experiences. Recognized as the "Debutante Business of the Year" by Economic Times in 2018, he has managed bookings for over 2,500 venues and collaborated with esteemed luxury hotel chains, including Taj-IHCL, Hyatt, Marriott International, Hilton, Accor, ITC, and Leela Hotels.`,
                                          c(`span`, {
                                            style: {
                                              "--framer-text-color": `rgb(102, 102, 102)`,
                                            },
                                            children: [
                                              o(`br`, {}),
                                              o(`br`, {}),
                                            ],
                                          }),
                                          `Shafeeq's vision blends grassroots authenticity with premium cuisines, ensuring every plate delights with authentic flavors and meticulous attention to detail. His expertise in managing high-profile events ensures impeccable execution, elevating every celebration with timeless elegance. Committed to redefining hospitality, he continuously enhances and simplifies experiences for clients and partners alike. Beyond his professional pursuits, he is passionate about travel, connecting with inspiring individuals, and embracing fitness and adventure sports.`,
                                        ],
                                      }),
                                    }),
                                  },
                                },
                                children: o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(l, {
                                    children: c(`p`, {
                                      style: {
                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `var(--token-34a5c68a-d574-4093-a29b-c3acb58a97e3, rgb(51, 51, 51))`,
                                      },
                                      children: [
                                        `With over 15 years of expertise in business management, hospitality, events, and marketing, Mohammad Shafeeq is the visionary behind Shahi Caterers. His journey began at 19, and by 2017, he had expanded into venue bookings, destination weddings, and luxury catering—driven by a passion for curating world-class fine dining experiences. Recognized as the "Debutante Business of the Year" by Economic Times in 2018, he has managed bookings for over 2,500 venues and collaborated with esteemed luxury hotel chains, including Taj-IHCL, Hyatt, Marriott International, Hilton, Accor, ITC, and Leela Hotels.`,
                                        c(`span`, {
                                          style: {
                                            "--framer-text-color": `rgb(102, 102, 102)`,
                                          },
                                          children: [o(`br`, {}), o(`br`, {})],
                                        }),
                                        `Shafeeq's vision blends grassroots authenticity with premium cuisines, ensuring every plate delights with authentic flavors and meticulous attention to detail. His expertise in managing high-profile events ensures impeccable execution, elevating every celebration with timeless elegance. Committed to redefining hospitality, he continuously enhances and simplifies experiences for clients and partners alike. Beyond his professional pursuits, he is passionate about travel, connecting with inspiring individuals, and embracing fitness and adventure sports.`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-8d7uog`,
                                  "data-framer-name": `Founder Name`,
                                  fonts: [`FS;Montserrat-variable`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          ],
                        }),
                        c(P, {
                          animate: H,
                          className: `framer-1f5kn9p`,
                          "data-framer-appear-id": `1f5kn9p`,
                          "data-framer-name": `Image`,
                          initial: Le,
                          optimized: !0,
                          children: [
                            o(v, {
                              breakpoint: T,
                              overrides: {
                                C9tpTcJrY: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    pixelHeight: 2816,
                                    pixelWidth: 1804,
                                    positionX: `center`,
                                    positionY: `top`,
                                    sizes: `calc((${S?.width || `100vw`} - 64px) * 0.8)`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shafeeq_Mama_rfhlyy.jpg`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/Shafeeq_Mama_rfhlyy.jpg 656w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/Shafeeq_Mama_rfhlyy.jpg 1312w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shafeeq_Mama_rfhlyy.jpg 1804w`,
                                  },
                                },
                                ipclDTqxD: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: C(
                                      (S?.y || 0) + 0 + 2623.6 + 200 + 0 + 0
                                    ),
                                    pixelHeight: 2816,
                                    pixelWidth: 1804,
                                    positionX: `center`,
                                    positionY: `top`,
                                    sizes: `calc((${S?.width || `100vw`} - 240px) * 0.28)`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shafeeq_Mama_rfhlyy.jpg`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/Shafeeq_Mama_rfhlyy.jpg 656w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/Shafeeq_Mama_rfhlyy.jpg 1312w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shafeeq_Mama_rfhlyy.jpg 1804w`,
                                  },
                                },
                                Nz0RXJHRH: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: C(
                                      (S?.y || 0) + 0 + 2623.6 + 200 + 0 + 0
                                    ),
                                    pixelHeight: 2816,
                                    pixelWidth: 1804,
                                    positionX: `center`,
                                    positionY: `top`,
                                    sizes: `calc((${S?.width || `100vw`} - 360px) * 0.28)`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shafeeq_Mama_rfhlyy.jpg`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/Shafeeq_Mama_rfhlyy.jpg 656w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/Shafeeq_Mama_rfhlyy.jpg 1312w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shafeeq_Mama_rfhlyy.jpg 1804w`,
                                  },
                                },
                                TlatadeZ0: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    pixelHeight: 2816,
                                    pixelWidth: 1804,
                                    positionX: `center`,
                                    positionY: `top`,
                                    sizes: `calc((${S?.width || `100vw`} - 160px) * 0.7)`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shafeeq_Mama_rfhlyy.jpg`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/Shafeeq_Mama_rfhlyy.jpg 656w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/Shafeeq_Mama_rfhlyy.jpg 1312w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shafeeq_Mama_rfhlyy.jpg 1804w`,
                                  },
                                },
                              },
                              children: o(g, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: C(
                                    (S?.y || 0) + 0 + 2623.6 + 200 + 0 + 0
                                  ),
                                  pixelHeight: 2816,
                                  pixelWidth: 1804,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `calc((${S?.width || `100vw`} - 320px) * 0.28)`,
                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shafeeq_Mama_rfhlyy.jpg`,
                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/Shafeeq_Mama_rfhlyy.jpg 656w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/Shafeeq_Mama_rfhlyy.jpg 1312w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shafeeq_Mama_rfhlyy.jpg 1804w`,
                                },
                                className: `framer-1qzoe6s`,
                                "data-framer-name": `Founder Image`,
                              }),
                            }),
                            c(`div`, {
                              className: `framer-18d5u4j`,
                              "data-framer-name": `Container`,
                              children: [
                                o(`div`, {
                                  className: `framer-o62f1o`,
                                  "data-framer-name": `Decorative Element`,
                                }),
                                o(`div`, {
                                  className: `framer-1u19hle`,
                                  "data-framer-name": `Decorative Element`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    j() &&
                      o(g, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: C((S?.y || 0) + 0 + 3723.6),
                          pixelHeight: 1600,
                          pixelWidth: 3840,
                          sizes: S?.width || `100vw`,
                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png`,
                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 3840w`,
                        },
                        className: `framer-16hmwxm hidden-rkemn2 hidden-4k4wy9`,
                        "data-framer-name": `Contact Us`,
                        id: R,
                        ref: z,
                        children: c(`div`, {
                          className: `framer-1xx5ed2`,
                          "data-framer-name": `Contact Section`,
                          children: [
                            c(`div`, {
                              className: `framer-12lz359`,
                              "data-framer-name": `Contact Container`,
                              children: [
                                c(`div`, {
                                  className: `framer-1hflgi`,
                                  "data-framer-name": `Contact Description Container`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(l, {
                                        children: c(`h1`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                            "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                            "--framer-font-size": `76px`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-color": `var(--token-cdebea94-b97b-4c92-9dd4-447b15482a43, rgb(249, 243, 240))`,
                                          },
                                          children: [
                                            `Book `,
                                            o(`span`, {
                                              style: {
                                                "--framer-text-color": `rgb(0, 0, 0)`,
                                              },
                                              children: o(`br`, {}),
                                            }),
                                            `Your Consultation`,
                                          ],
                                        }),
                                      }),
                                      className: `framer-1lxhn3s`,
                                      "data-framer-name": `Contact Title`,
                                      fonts: [`CUSTOM;Perpetua Regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: c(l, {
                                        children: [
                                          o(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-color": `var(--token-bccae4bf-b1e6-4016-a3e5-fbc00cf9c434, rgb(221, 221, 221))`,
                                            },
                                            children: `Begin your journey with Shahi Caterers—where every celebration is curated to perfection. From luxury catering and bespoke culinary experiences to venue selection and personalized event planning. `,
                                          }),
                                          o(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-color": `rgb(102, 102, 102)`,
                                            },
                                            children: o(`br`, {
                                              className: `trailing-break`,
                                            }),
                                          }),
                                          o(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-color": `var(--token-bccae4bf-b1e6-4016-a3e5-fbc00cf9c434, rgb(221, 221, 221))`,
                                            },
                                            children: `Let’s connect and create something\xA0extraordinary.`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-1fqj1dk`,
                                      "data-framer-name": `Contact Description`,
                                      fonts: [`FS;Montserrat-variable`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                o(`div`, {
                                  className: `framer-lywigo`,
                                  "data-framer-name": `Contact Details Container`,
                                  children: c(`div`, {
                                    className: `framer-1hvxxt`,
                                    "data-framer-name": `Contact Details`,
                                    children: [
                                      c(`div`, {
                                        className: `framer-jvoqgo`,
                                        "data-framer-name": `Contact Info`,
                                        children: [
                                          o(f, {
                                            children: o(p, {
                                              className: `framer-osxmo9-container`,
                                              isAuthoredByUser: !0,
                                              isModuleExternal: !0,
                                              nodeId: `WB0Ce1vJP`,
                                              scopeId: `b_Wa9cjnQ`,
                                              children: o(O, {
                                                color: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                                height: `100%`,
                                                iconSearch: `mail`,
                                                iconSelection: `Calculator`,
                                                id: `WB0Ce1vJP`,
                                                layoutId: `WB0Ce1vJP`,
                                                mirrored: !1,
                                                selectByList: !1,
                                                style: {
                                                  height: `100%`,
                                                  width: `100%`,
                                                },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          o(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(l, {
                                              children: o(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                  "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-variation-axes": `"wght" 300`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-color": `var(--token-19e9d736-de57-449f-9a6c-282ed2a8984f, rgb(233, 221, 204))`,
                                                },
                                                children: o(_, {
                                                  href: `https://wa.me/919502200071`,
                                                  motionChild: !0,
                                                  nodeId: `JOefj6fS2`,
                                                  openInNewTab: !0,
                                                  scopeId: `b_Wa9cjnQ`,
                                                  smoothScroll: !1,
                                                  children: o(d.a, {
                                                    className: `framer-styles-preset-1d1cl26`,
                                                    "data-styles-preset": `Qu7GZfWqZ`,
                                                    children: `shafeeq@shahicaterers.in`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-17k5bzp`,
                                            "data-framer-name": `Heading 5 → Contact Us`,
                                            fonts: [`FS;Montserrat-variable`],
                                            verticalAlignment: `center`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      o(_, {
                                        href: `https://www.instagram.com/bhaimohammadshafeeq/`,
                                        motionChild: !0,
                                        nodeId: `qwASzutul`,
                                        scopeId: `b_Wa9cjnQ`,
                                        children: c(d.a, {
                                          className: `framer-q053q0 framer-15s2a1i`,
                                          "data-framer-name": `Contact Info`,
                                          children: [
                                            o(f, {
                                              children: o(p, {
                                                className: `framer-1qwfbht-container`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                nodeId: `elgQy4GyO`,
                                                scopeId: `b_Wa9cjnQ`,
                                                children: o(O, {
                                                  color: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                                  height: `100%`,
                                                  iconSearch: `inst`,
                                                  iconSelection: `Phone`,
                                                  id: `elgQy4GyO`,
                                                  layoutId: `elgQy4GyO`,
                                                  mirrored: !1,
                                                  selectByList: !1,
                                                  style: {
                                                    height: `100%`,
                                                    width: `100%`,
                                                  },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                            o(y, {
                                              __fromCanvasComponent: !0,
                                              children: o(l, {
                                                children: o(`p`, {
                                                  style: {
                                                    "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                    "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                    "--framer-font-variation-axes": `"wght" 300`,
                                                    "--framer-line-height": `1.6em`,
                                                    "--framer-text-color": `var(--token-19e9d736-de57-449f-9a6c-282ed2a8984f, rgb(233, 221, 204))`,
                                                  },
                                                  children: `shahicaterers.in`,
                                                }),
                                              }),
                                              className: `framer-1wypl7n`,
                                              "data-framer-name": `Heading 5 → Contact Us`,
                                              fonts: [`FS;Montserrat-variable`],
                                              verticalAlignment: `center`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                      c(`div`, {
                                        className: `framer-2ybgah`,
                                        "data-framer-name": `Contact Info`,
                                        children: [
                                          o(b, {
                                            className: `framer-nkpu1h`,
                                            "data-framer-name": `mynaui:location`,
                                            fill: `rgba(0,0,0,1)`,
                                            intrinsicHeight: 24,
                                            intrinsicWidth: 24,
                                            svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5598 20.82C12.3966 20.9372 12.2007 21.0003 11.9998 21.0003C11.7988 21.0003 11.603 20.9372 11.4398 20.82C6.61078 17.378 1.48578 10.298 6.66678 5.182C8.08912 3.78285 10.0046 2.99912 11.9998 3C13.9998 3 15.9188 3.785 17.3328 5.181C22.5138 10.297 17.3888 17.376 12.5598 20.82Z" stroke="#E9DDCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12C12.5304 12 13.0391 11.7893 13.4142 11.4142C13.7893 11.0391 14 10.5304 14 10C14 9.46957 13.7893 8.96086 13.4142 8.58579C13.0391 8.21071 12.5304 8 12 8C11.4696 8 10.9609 8.21071 10.5858 8.58579C10.2107 8.96086 10 9.46957 10 10C10 10.5304 10.2107 11.0391 10.5858 11.4142C10.9609 11.7893 11.4696 12 12 12Z" stroke="#E9DDCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                            withExternalLayout: !0,
                                          }),
                                          o(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(l, {
                                              children: o(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                  "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-variation-axes": `"wght" 300`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-color": `var(--token-19e9d736-de57-449f-9a6c-282ed2a8984f, rgb(233, 221, 204))`,
                                                },
                                                children: `Vijayawada, Andhra Pradesh, India`,
                                              }),
                                            }),
                                            className: `framer-jowu0s`,
                                            "data-framer-name": `Heading 5 → Contact Us`,
                                            fonts: [`FS;Montserrat-variable`],
                                            verticalAlignment: `center`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            o(m, {
                              action: `https://api.framer.com/forms/v1/forms/8c5dcd01-60fe-4b19-abf9-35dc6924e1f0/submit`,
                              className: `framer-ot2l0k`,
                              nodeId: `aPOakAZNM`,
                              children: (e) =>
                                c(a, {
                                  children: [
                                    c(`label`, {
                                      className: `framer-te50xp`,
                                      children: [
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: o(l, {
                                            children: o(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `14px`,
                                                "--framer-letter-spacing": `0.04em`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                              },
                                              children: `Name`,
                                            }),
                                          }),
                                          className: `framer-52dw7l`,
                                          fonts: [`FS;Montserrat-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(h, {
                                          className: `framer-x9i9va`,
                                          inputName: `Name`,
                                          placeholder: `Type here...`,
                                          required: !0,
                                          type: `text`,
                                        }),
                                      ],
                                    }),
                                    c(`label`, {
                                      className: `framer-etrxoi`,
                                      children: [
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: o(l, {
                                            children: o(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `14px`,
                                                "--framer-letter-spacing": `0.04em`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                              },
                                              children: `Email`,
                                            }),
                                          }),
                                          className: `framer-15bcrcy`,
                                          fonts: [`FS;Montserrat-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(h, {
                                          className: `framer-2quto5`,
                                          inputName: `Email`,
                                          placeholder: `Type here...`,
                                          required: !0,
                                          type: `email`,
                                        }),
                                      ],
                                    }),
                                    c(`label`, {
                                      className: `framer-1pjda2y`,
                                      children: [
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: o(l, {
                                            children: o(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `14px`,
                                                "--framer-letter-spacing": `0.04em`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                              },
                                              children: `Mobile`,
                                            }),
                                          }),
                                          className: `framer-1g3vdyn`,
                                          fonts: [`FS;Montserrat-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(h, {
                                          className: `framer-169xn8j`,
                                          inputName: `Mobile`,
                                          placeholder: `Type here...`,
                                          required: !0,
                                          type: `tel`,
                                        }),
                                      ],
                                    }),
                                    c(`label`, {
                                      className: `framer-9xuh1s`,
                                      children: [
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: o(l, {
                                            children: o(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `14px`,
                                                "--framer-letter-spacing": `0.04em`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                              },
                                              children: `Message`,
                                            }),
                                          }),
                                          className: `framer-c89328`,
                                          fonts: [`FS;Montserrat-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        o(h, {
                                          className: `framer-14ivibl`,
                                          inputName: `Message`,
                                          placeholder: `Type here...`,
                                          required: !0,
                                          type: `textarea`,
                                        }),
                                      ],
                                    }),
                                    o(`div`, {
                                      className: `framer-1csnlrg`,
                                      children: o(v, {
                                        breakpoint: T,
                                        overrides: {
                                          ipclDTqxD: {
                                            width: `max((${S?.width || `100vw`} - 240px) * 0.4 - 128px, 1px)`,
                                          },
                                          Nz0RXJHRH: {
                                            width: `max((${S?.width || `100vw`} - 320px) * 0.4 - 128px, 1px)`,
                                          },
                                        },
                                        children: o(f, {
                                          height: 48,
                                          width: `max((${S?.width || `100vw`} - 400px) * 0.4 - 128px, 1px)`,
                                          children: o(p, {
                                            className: `framer-bxa0oo-container`,
                                            isModuleExternal: !0,
                                            nodeId: `YWXBfHwhD`,
                                            scopeId: `b_Wa9cjnQ`,
                                            children: o(D, {
                                              height: `100%`,
                                              id: `YWXBfHwhD`,
                                              layoutId: `YWXBfHwhD`,
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              type: `submit`,
                                              variant: q(
                                                e,
                                                {
                                                  pending: `sxCEZ_HRS`,
                                                  success: `Aynqy9u0S`,
                                                },
                                                `fjL_3fJ5D`
                                              ),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            }),
                          ],
                        }),
                      }),
                    V() &&
                      c(`div`, {
                        className: `framer-8kvwtk hidden-tmsleu hidden-1inth7g hidden-rkemn2 hidden-4k4wy9`,
                        "data-framer-name": `Footer`,
                        id: W,
                        ref: G,
                        children: [
                          o(v, {
                            breakpoint: T,
                            overrides: {
                              Nz0RXJHRH: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 493,
                                  intrinsicWidth: 3528,
                                  loading: C(
                                    (S?.y || 0) + 0 + 4723.6 + 160 + 0
                                  ),
                                  pixelHeight: 493,
                                  pixelWidth: 3528,
                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shahi_gahcl6.png`,
                                },
                              },
                            },
                            children: o(g, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 493,
                                intrinsicWidth: 3528,
                                pixelHeight: 493,
                                pixelWidth: 3528,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shahi_gahcl6.png`,
                              },
                              className: `framer-j9kgv7`,
                              "data-framer-name": `MASORA`,
                              children: o(v, {
                                breakpoint: T,
                                overrides: {
                                  Nz0RXJHRH: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 493,
                                      intrinsicWidth: 3528,
                                      loading: C(
                                        (S?.y || 0) +
                                          0 +
                                          4723.6 +
                                          160 +
                                          0 +
                                          268 -
                                          250
                                      ),
                                      pixelHeight: 493,
                                      pixelWidth: 3528,
                                      src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/Shahi_gahcl6.png`,
                                    },
                                  },
                                },
                                children: o(g, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 493,
                                    intrinsicWidth: 3528,
                                    pixelHeight: 493,
                                    pixelWidth: 3528,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/Shahi_gahcl6.png`,
                                  },
                                  className: `framer-ew0lap`,
                                  "data-framer-name": `MASORA`,
                                }),
                              }),
                            }),
                          }),
                          c(`div`, {
                            className: `framer-kkllzs`,
                            "data-framer-name": `Footer Container`,
                            children: [
                              o(`div`, {
                                className: `framer-2d52s6`,
                                "data-framer-name": `Footer Item`,
                                children: o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(l, {
                                    children: o(`h4`, {
                                      style: {
                                        "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                      },
                                      children: `Copyright@2025`,
                                    }),
                                  }),
                                  className: `framer-amrv9b`,
                                  "data-framer-name": `Footer Text`,
                                  fonts: [`GF;Red Rose-variable-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              o(_, {
                                href: {
                                  hash: `:oyhKFxo98`,
                                  webPageId: `b_Wa9cjnQ`,
                                },
                                motionChild: !0,
                                nodeId: `w7zeUipFc`,
                                openInNewTab: !1,
                                scopeId: `b_Wa9cjnQ`,
                                children: c(d.a, {
                                  className: `framer-6swt45 framer-15s2a1i`,
                                  "data-framer-name": `Footer Item`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(l, {
                                        children: o(`h4`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                            "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-font-variation-axes": `"wght" 400`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                          },
                                          children: `Back to top`,
                                        }),
                                      }),
                                      className: `framer-18u1nr0`,
                                      "data-framer-name": `Footer Text`,
                                      fonts: [`GF;Red Rose-variable-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(f, {
                                      children: o(p, {
                                        className: `framer-1d5rfm1-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `MTlO11uh8`,
                                        scopeId: `b_Wa9cjnQ`,
                                        children: o(O, {
                                          color: `var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60))`,
                                          height: `100%`,
                                          iconSearch: `arrow`,
                                          iconSelection: `ArrowUp`,
                                          id: `MTlO11uh8`,
                                          layoutId: `MTlO11uh8`,
                                          mirrored: !1,
                                          selectByList: !0,
                                          style: {
                                            height: `100%`,
                                            width: `100%`,
                                          },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              o(`div`, {
                                className: `framer-1ujra4g`,
                                "data-framer-name": `Footer Item`,
                                children: o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(l, {
                                    children: o(`h4`, {
                                      style: {
                                        "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                      },
                                      children: `Terms & Conditions`,
                                    }),
                                  }),
                                  className: `framer-tfis4e`,
                                  "data-framer-name": `Footer Text`,
                                  fonts: [`GF;Red Rose-variable-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    K() &&
                      c(`div`, {
                        className: `framer-9gmsq2 hidden-1frjzya hidden-1inth7g hidden-rkemn2 hidden-4k4wy9`,
                        "data-framer-name": `Footer`,
                        id: J,
                        ref: Y,
                        children: [
                          o(g, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 493,
                              intrinsicWidth: 3528,
                              loading: C((S?.y || 0) + 0 + 4723.6 + 160 + 0),
                              pixelHeight: 493,
                              pixelWidth: 3528,
                              src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shahi_gahcl6.png`,
                            },
                            className: `framer-mjd8c7`,
                            "data-framer-name": `MASORA`,
                            children: o(g, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 493,
                                intrinsicWidth: 3528,
                                loading: C(
                                  (S?.y || 0) + 0 + 4723.6 + 160 + 0 + 196 - 250
                                ),
                                pixelHeight: 493,
                                pixelWidth: 3528,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/Shahi_gahcl6.png`,
                              },
                              className: `framer-10hcucc`,
                              "data-framer-name": `MASORA`,
                            }),
                          }),
                          c(`div`, {
                            className: `framer-5e97bf`,
                            "data-framer-name": `Footer Container`,
                            children: [
                              o(`div`, {
                                className: `framer-1r05elo`,
                                "data-framer-name": `Footer Item`,
                                children: o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(l, {
                                    children: o(`h4`, {
                                      style: {
                                        "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                      },
                                      children: `Copyright@2025`,
                                    }),
                                  }),
                                  className: `framer-pbse73`,
                                  "data-framer-name": `Footer Text`,
                                  fonts: [`GF;Red Rose-variable-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              o(_, {
                                href: {
                                  hash: `:oyhKFxo98`,
                                  webPageId: `b_Wa9cjnQ`,
                                },
                                motionChild: !0,
                                nodeId: `OHi5bgI7D`,
                                openInNewTab: !1,
                                scopeId: `b_Wa9cjnQ`,
                                children: c(d.a, {
                                  className: `framer-9zwok8 framer-15s2a1i`,
                                  "data-framer-name": `Footer Item`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(l, {
                                        children: o(`h4`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                            "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-font-variation-axes": `"wght" 400`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                          },
                                          children: `Back to top`,
                                        }),
                                      }),
                                      className: `framer-1xhhydn`,
                                      "data-framer-name": `Footer Text`,
                                      fonts: [`GF;Red Rose-variable-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(f, {
                                      children: o(p, {
                                        className: `framer-12kqe1m-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `r8qqwzp6i`,
                                        scopeId: `b_Wa9cjnQ`,
                                        children: o(O, {
                                          color: `var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60))`,
                                          height: `100%`,
                                          iconSearch: `arrow`,
                                          iconSelection: `ArrowUp`,
                                          id: `r8qqwzp6i`,
                                          layoutId: `r8qqwzp6i`,
                                          mirrored: !1,
                                          selectByList: !0,
                                          style: {
                                            height: `100%`,
                                            width: `100%`,
                                          },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              o(`div`, {
                                className: `framer-8sguv5`,
                                "data-framer-name": `Footer Item`,
                                children: o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(l, {
                                    children: o(`h4`, {
                                      style: {
                                        "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                      },
                                      children: `Terms & Conditions`,
                                    }),
                                  }),
                                  className: `framer-zt3zsx`,
                                  "data-framer-name": `Footer Text`,
                                  fonts: [`GF;Red Rose-variable-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    X() &&
                      c(`div`, {
                        className: `framer-170z5ls hidden-tmsleu hidden-1frjzya hidden-rkemn2 hidden-4k4wy9`,
                        "data-framer-name": `Footer`,
                        id: Z,
                        ref: Q,
                        children: [
                          o(v, {
                            breakpoint: T,
                            overrides: {
                              ipclDTqxD: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 493,
                                  intrinsicWidth: 3528,
                                  loading: C(
                                    (S?.y || 0) + 0 + 4723.6 + 160 + 0
                                  ),
                                  pixelHeight: 493,
                                  pixelWidth: 3528,
                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shahi_gahcl6.png`,
                                },
                              },
                            },
                            children: o(g, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 493,
                                intrinsicWidth: 3528,
                                pixelHeight: 493,
                                pixelWidth: 3528,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shahi_gahcl6.png`,
                              },
                              className: `framer-17nmx0k`,
                              "data-framer-name": `MASORA`,
                              children: o(v, {
                                breakpoint: T,
                                overrides: {
                                  ipclDTqxD: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 493,
                                      intrinsicWidth: 3528,
                                      loading: C(
                                        (S?.y || 0) +
                                          0 +
                                          4723.6 +
                                          160 +
                                          0 +
                                          268 -
                                          254
                                      ),
                                      pixelHeight: 493,
                                      pixelWidth: 3528,
                                      src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/Shahi_gahcl6.png`,
                                    },
                                  },
                                },
                                children: o(g, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 493,
                                    intrinsicWidth: 3528,
                                    pixelHeight: 493,
                                    pixelWidth: 3528,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/Shahi_gahcl6.png`,
                                  },
                                  className: `framer-gyku3p`,
                                  "data-framer-name": `MASORA`,
                                }),
                              }),
                            }),
                          }),
                          c(`div`, {
                            className: `framer-1v1bwrq`,
                            "data-framer-name": `Footer Container`,
                            children: [
                              o(`div`, {
                                className: `framer-1201e6q`,
                                "data-framer-name": `Footer Item`,
                                children: o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(l, {
                                    children: o(`h4`, {
                                      style: {
                                        "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                      },
                                      children: `Copyright@2025`,
                                    }),
                                  }),
                                  className: `framer-qgonhk`,
                                  "data-framer-name": `Footer Text`,
                                  fonts: [`GF;Red Rose-variable-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              o(_, {
                                href: {
                                  hash: `:oyhKFxo98`,
                                  webPageId: `b_Wa9cjnQ`,
                                },
                                motionChild: !0,
                                nodeId: `l4tnTu8gq`,
                                openInNewTab: !1,
                                scopeId: `b_Wa9cjnQ`,
                                children: c(d.a, {
                                  className: `framer-105grz7 framer-15s2a1i`,
                                  "data-framer-name": `Footer Item`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(l, {
                                        children: o(`h4`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                            "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-font-variation-axes": `"wght" 400`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                          },
                                          children: `Back to top`,
                                        }),
                                      }),
                                      className: `framer-c77tap`,
                                      "data-framer-name": `Footer Text`,
                                      fonts: [`GF;Red Rose-variable-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(f, {
                                      children: o(p, {
                                        className: `framer-1bsgkfk-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `l7HPF7d7d`,
                                        scopeId: `b_Wa9cjnQ`,
                                        children: o(O, {
                                          color: `var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60))`,
                                          height: `100%`,
                                          iconSearch: `arrow`,
                                          iconSelection: `ArrowUp`,
                                          id: `l7HPF7d7d`,
                                          layoutId: `l7HPF7d7d`,
                                          mirrored: !1,
                                          selectByList: !0,
                                          style: {
                                            height: `100%`,
                                            width: `100%`,
                                          },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              o(`div`, {
                                className: `framer-6ytj11`,
                                "data-framer-name": `Footer Item`,
                                children: o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(l, {
                                    children: o(`h4`, {
                                      style: {
                                        "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                      },
                                      children: `Terms & Conditions`,
                                    }),
                                  }),
                                  className: `framer-17z16e2`,
                                  "data-framer-name": `Footer Text`,
                                  fonts: [`GF;Red Rose-variable-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    $() &&
                      c(`div`, {
                        className: `framer-1mkb8v0 hidden-tmsleu hidden-1frjzya hidden-1inth7g hidden-4k4wy9`,
                        "data-framer-name": `Footer`,
                        id: Be,
                        ref: Ve,
                        children: [
                          o(g, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 493,
                              intrinsicWidth: 3528,
                              pixelHeight: 493,
                              pixelWidth: 3528,
                              src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shahi_gahcl6.png`,
                            },
                            className: `framer-v0rivi`,
                            "data-framer-name": `MASORA`,
                            children: o(g, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 493,
                                intrinsicWidth: 3528,
                                pixelHeight: 493,
                                pixelWidth: 3528,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/Shahi_gahcl6.png`,
                              },
                              className: `framer-12fhkre`,
                              "data-framer-name": `MASORA`,
                            }),
                          }),
                          c(`div`, {
                            className: `framer-1d746t8`,
                            "data-framer-name": `Footer Container`,
                            children: [
                              o(`div`, {
                                className: `framer-ol8nxt`,
                                "data-framer-name": `Footer Item`,
                                children: o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(l, {
                                    children: o(`h4`, {
                                      style: {
                                        "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                      },
                                      children: `Copyright@2025`,
                                    }),
                                  }),
                                  className: `framer-ugoni7`,
                                  "data-framer-name": `Footer Text`,
                                  fonts: [`GF;Red Rose-variable-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              o(_, {
                                href: {
                                  hash: `:oyhKFxo98`,
                                  webPageId: `b_Wa9cjnQ`,
                                },
                                motionChild: !0,
                                nodeId: `LJ1kY85xq`,
                                openInNewTab: !1,
                                scopeId: `b_Wa9cjnQ`,
                                children: c(d.a, {
                                  className: `framer-lits5p framer-15s2a1i`,
                                  "data-framer-name": `Footer Item`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(l, {
                                        children: o(`h4`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                            "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-font-variation-axes": `"wght" 400`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                          },
                                          children: `Back to top`,
                                        }),
                                      }),
                                      className: `framer-egmddl`,
                                      "data-framer-name": `Footer Text`,
                                      fonts: [`GF;Red Rose-variable-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(f, {
                                      children: o(p, {
                                        className: `framer-1z9wig-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `cNFYBrHxK`,
                                        scopeId: `b_Wa9cjnQ`,
                                        children: o(O, {
                                          color: `var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60))`,
                                          height: `100%`,
                                          iconSearch: `arrow`,
                                          iconSelection: `ArrowUp`,
                                          id: `cNFYBrHxK`,
                                          layoutId: `cNFYBrHxK`,
                                          mirrored: !1,
                                          selectByList: !0,
                                          style: {
                                            height: `100%`,
                                            width: `100%`,
                                          },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              o(`div`, {
                                className: `framer-1jqjb0u`,
                                "data-framer-name": `Footer Item`,
                                children: o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(l, {
                                    children: o(`h4`, {
                                      style: {
                                        "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                      },
                                      children: `Terms & Conditions`,
                                    }),
                                  }),
                                  className: `framer-vvvaml`,
                                  "data-framer-name": `Footer Text`,
                                  fonts: [`GF;Red Rose-variable-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    $() &&
                      o(v, {
                        breakpoint: T,
                        overrides: {
                          TlatadeZ0: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              pixelHeight: 1600,
                              pixelWidth: 3840,
                              sizes: S?.width || `100vw`,
                              src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png`,
                              srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 3840w`,
                            },
                          },
                        },
                        children: o(g, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            pixelHeight: 1600,
                            pixelWidth: 3840,
                            src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png`,
                            srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 3840w`,
                          },
                          className: `framer-wg356u hidden-tmsleu hidden-1frjzya hidden-1inth7g hidden-4k4wy9`,
                          "data-framer-name": `Contact Us`,
                          id: He,
                          ref: Ue,
                          children: c(`div`, {
                            className: `framer-1sxndk7`,
                            "data-framer-name": `Contact Section`,
                            children: [
                              c(`div`, {
                                className: `framer-73zhc4`,
                                "data-framer-name": `Contact Container`,
                                children: [
                                  c(`div`, {
                                    className: `framer-1bgwjk`,
                                    "data-framer-name": `Contact Description Container`,
                                    children: [
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: o(l, {
                                          children: o(`h1`, {
                                            style: {
                                              "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                              "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                              "--framer-font-size": `64px`,
                                              "--framer-line-height": `1.1em`,
                                              "--framer-text-color": `var(--token-cdebea94-b97b-4c92-9dd4-447b15482a43, rgb(249, 243, 240))`,
                                            },
                                            children: `Book Your Consultation`,
                                          }),
                                        }),
                                        className: `framer-uxpr5o`,
                                        "data-framer-name": `Contact Title`,
                                        fonts: [`CUSTOM;Perpetua Regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(y, {
                                        __fromCanvasComponent: !0,
                                        children: c(l, {
                                          children: [
                                            o(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `var(--token-bccae4bf-b1e6-4016-a3e5-fbc00cf9c434, rgb(221, 221, 221))`,
                                              },
                                              children: `Begin your journey with Shahi Caterers—where every celebration is curated to perfection. From luxury catering and bespoke culinary experiences to venue selection and personalized event planning. `,
                                            }),
                                            o(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `rgb(102, 102, 102)`,
                                              },
                                              children: o(`br`, {
                                                className: `trailing-break`,
                                              }),
                                            }),
                                            o(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `var(--token-bccae4bf-b1e6-4016-a3e5-fbc00cf9c434, rgb(221, 221, 221))`,
                                              },
                                              children: `Let’s connect and create something\xA0extraordinary.`,
                                            }),
                                          ],
                                        }),
                                        className: `framer-17f5cz2`,
                                        "data-framer-name": `Contact Description`,
                                        fonts: [`FS;Montserrat-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  o(`div`, {
                                    className: `framer-dda1r7`,
                                    "data-framer-name": `Contact Details Container`,
                                    children: c(`div`, {
                                      className: `framer-171odc5`,
                                      "data-framer-name": `Contact Details`,
                                      children: [
                                        c(`div`, {
                                          className: `framer-cc75lq`,
                                          "data-framer-name": `Contact Info`,
                                          children: [
                                            o(f, {
                                              children: o(p, {
                                                className: `framer-1eefmj2-container`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                nodeId: `JRGyO1D9X`,
                                                scopeId: `b_Wa9cjnQ`,
                                                children: o(O, {
                                                  color: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                                  height: `100%`,
                                                  iconSearch: `mail`,
                                                  iconSelection: `Calculator`,
                                                  id: `JRGyO1D9X`,
                                                  layoutId: `JRGyO1D9X`,
                                                  mirrored: !1,
                                                  selectByList: !1,
                                                  style: {
                                                    height: `100%`,
                                                    width: `100%`,
                                                  },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                            o(y, {
                                              __fromCanvasComponent: !0,
                                              children: o(l, {
                                                children: o(`p`, {
                                                  style: {
                                                    "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                    "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                    "--framer-font-variation-axes": `"wght" 300`,
                                                    "--framer-line-height": `1.6em`,
                                                    "--framer-text-color": `var(--token-19e9d736-de57-449f-9a6c-282ed2a8984f, rgb(233, 221, 204))`,
                                                  },
                                                  children: o(_, {
                                                    href: `https://wa.me/919502200071`,
                                                    motionChild: !0,
                                                    nodeId: `EEE7KQRwG`,
                                                    openInNewTab: !0,
                                                    scopeId: `b_Wa9cjnQ`,
                                                    smoothScroll: !1,
                                                    children: o(d.a, {
                                                      className: `framer-styles-preset-1d1cl26`,
                                                      "data-styles-preset": `Qu7GZfWqZ`,
                                                      children: `shafeeq@shahicaterers.in`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1l8odra`,
                                              "data-framer-name": `Heading 5 → Contact Us`,
                                              fonts: [`FS;Montserrat-variable`],
                                              verticalAlignment: `center`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        o(_, {
                                          href: `https://www.instagram.com/bhaimohammadshafeeq/`,
                                          motionChild: !0,
                                          nodeId: `blH0NoFXk`,
                                          scopeId: `b_Wa9cjnQ`,
                                          children: c(d.a, {
                                            className: `framer-1sukpol framer-15s2a1i`,
                                            "data-framer-name": `Contact Info`,
                                            children: [
                                              o(f, {
                                                children: o(p, {
                                                  className: `framer-1w1pxiy-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `YHvz0xHmW`,
                                                  scopeId: `b_Wa9cjnQ`,
                                                  children: o(O, {
                                                    color: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                                    height: `100%`,
                                                    iconSearch: `inst`,
                                                    iconSelection: `Phone`,
                                                    id: `YHvz0xHmW`,
                                                    layoutId: `YHvz0xHmW`,
                                                    mirrored: !1,
                                                    selectByList: !1,
                                                    style: {
                                                      height: `100%`,
                                                      width: `100%`,
                                                    },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                              o(y, {
                                                __fromCanvasComponent: !0,
                                                children: o(l, {
                                                  children: o(`p`, {
                                                    style: {
                                                      "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                      "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                      "--framer-font-variation-axes": `"wght" 300`,
                                                      "--framer-line-height": `1.6em`,
                                                      "--framer-text-color": `var(--token-19e9d736-de57-449f-9a6c-282ed2a8984f, rgb(233, 221, 204))`,
                                                    },
                                                    children: `shahicaterers.in`,
                                                  }),
                                                }),
                                                className: `framer-15ge7gb`,
                                                "data-framer-name": `Heading 5 → Contact Us`,
                                                fonts: [
                                                  `FS;Montserrat-variable`,
                                                ],
                                                verticalAlignment: `center`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        }),
                                        c(`div`, {
                                          className: `framer-gd9tji`,
                                          "data-framer-name": `Contact Info`,
                                          children: [
                                            o(b, {
                                              className: `framer-1g77ofq`,
                                              "data-framer-name": `mynaui:location`,
                                              fill: `rgba(0,0,0,1)`,
                                              intrinsicHeight: 24,
                                              intrinsicWidth: 24,
                                              svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5598 20.82C12.3966 20.9372 12.2007 21.0003 11.9998 21.0003C11.7988 21.0003 11.603 20.9372 11.4398 20.82C6.61078 17.378 1.48578 10.298 6.66678 5.182C8.08912 3.78285 10.0046 2.99912 11.9998 3C13.9998 3 15.9188 3.785 17.3328 5.181C22.5138 10.297 17.3888 17.376 12.5598 20.82Z" stroke="#E9DDCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12C12.5304 12 13.0391 11.7893 13.4142 11.4142C13.7893 11.0391 14 10.5304 14 10C14 9.46957 13.7893 8.96086 13.4142 8.58579C13.0391 8.21071 12.5304 8 12 8C11.4696 8 10.9609 8.21071 10.5858 8.58579C10.2107 8.96086 10 9.46957 10 10C10 10.5304 10.2107 11.0391 10.5858 11.4142C10.9609 11.7893 11.4696 12 12 12Z" stroke="#E9DDCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            o(y, {
                                              __fromCanvasComponent: !0,
                                              children: o(l, {
                                                children: o(`p`, {
                                                  style: {
                                                    "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                    "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                    "--framer-font-variation-axes": `"wght" 300`,
                                                    "--framer-line-height": `1.6em`,
                                                    "--framer-text-color": `var(--token-19e9d736-de57-449f-9a6c-282ed2a8984f, rgb(233, 221, 204))`,
                                                  },
                                                  children: `Vijayawada, Andhra Pradesh, India`,
                                                }),
                                              }),
                                              className: `framer-ol1a1j`,
                                              "data-framer-name": `Heading 5 → Contact Us`,
                                              fonts: [`FS;Montserrat-variable`],
                                              verticalAlignment: `center`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              o(m, {
                                action: `https://api.framer.com/forms/v1/forms/96258f0b-5235-4800-ac31-a99f24183503/submit`,
                                className: `framer-1ioia0r`,
                                nodeId: `vwb2tQ6Dy`,
                                children: (e) =>
                                  c(a, {
                                    children: [
                                      c(`label`, {
                                        className: `framer-iiplf1`,
                                        children: [
                                          o(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(l, {
                                              children: o(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                  "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-letter-spacing": `0.04em`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                                },
                                                children: `Name`,
                                              }),
                                            }),
                                            className: `framer-1ow5czt`,
                                            fonts: [`FS;Montserrat-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(h, {
                                            className: `framer-1m5pkxc`,
                                            inputName: `Name`,
                                            placeholder: `Type here...`,
                                            required: !0,
                                            type: `text`,
                                          }),
                                        ],
                                      }),
                                      c(`label`, {
                                        className: `framer-148oc6d`,
                                        children: [
                                          o(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(l, {
                                              children: o(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                  "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-letter-spacing": `0.04em`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                                },
                                                children: `Email`,
                                              }),
                                            }),
                                            className: `framer-ot5rfk`,
                                            fonts: [`FS;Montserrat-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(h, {
                                            className: `framer-1utlfao`,
                                            inputName: `Email`,
                                            placeholder: `Type here...`,
                                            required: !0,
                                            type: `email`,
                                          }),
                                        ],
                                      }),
                                      c(`label`, {
                                        className: `framer-jj9eh0`,
                                        children: [
                                          o(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(l, {
                                              children: o(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                  "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-letter-spacing": `0.04em`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                                },
                                                children: `Mobile`,
                                              }),
                                            }),
                                            className: `framer-18zgu59`,
                                            fonts: [`FS;Montserrat-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(h, {
                                            className: `framer-1gpviqs`,
                                            inputName: `Mobile`,
                                            placeholder: `Type here...`,
                                            required: !0,
                                            type: `tel`,
                                          }),
                                        ],
                                      }),
                                      c(`label`, {
                                        className: `framer-1utt5bg`,
                                        children: [
                                          o(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(l, {
                                              children: o(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                  "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-letter-spacing": `0.04em`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                                },
                                                children: `Message`,
                                              }),
                                            }),
                                            className: `framer-jsyucn`,
                                            fonts: [`FS;Montserrat-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(h, {
                                            className: `framer-1mauxye`,
                                            inputName: `Message`,
                                            placeholder: `Type here...`,
                                            required: !0,
                                            type: `textarea`,
                                          }),
                                        ],
                                      }),
                                      o(`div`, {
                                        className: `framer-11eh8rt`,
                                        children: o(v, {
                                          breakpoint: T,
                                          overrides: {
                                            TlatadeZ0: {
                                              width: `max(${S?.width || `100vw`} - 128px, 1px)`,
                                            },
                                          },
                                          children: o(f, {
                                            height: 48,
                                            children: o(p, {
                                              className: `framer-u6tijb-container`,
                                              isModuleExternal: !0,
                                              nodeId: `ORqmoQC8_`,
                                              scopeId: `b_Wa9cjnQ`,
                                              children: o(D, {
                                                height: `100%`,
                                                id: `ORqmoQC8_`,
                                                layoutId: `ORqmoQC8_`,
                                                style: {
                                                  height: `100%`,
                                                  width: `100%`,
                                                },
                                                type: `submit`,
                                                variant: q(
                                                  e,
                                                  {
                                                    pending: `sxCEZ_HRS`,
                                                    success: `Aynqy9u0S`,
                                                  },
                                                  `fjL_3fJ5D`
                                                ),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    We() &&
                      c(`div`, {
                        className: `framer-cxu4hk hidden-tmsleu hidden-1frjzya hidden-1inth7g hidden-rkemn2`,
                        "data-framer-name": `Footer`,
                        id: Ge,
                        ref: Ke,
                        children: [
                          o(g, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 493,
                              intrinsicWidth: 3528,
                              pixelHeight: 493,
                              pixelWidth: 3528,
                              src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Shahi_gahcl6.png`,
                            },
                            className: `framer-yqfqzx`,
                            "data-framer-name": `MASORA`,
                            children: o(g, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 493,
                                intrinsicWidth: 3528,
                                pixelHeight: 493,
                                pixelWidth: 3528,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/Shahi_gahcl6.png`,
                              },
                              className: `framer-153o1z7`,
                              "data-framer-name": `MASORA`,
                            }),
                          }),
                          c(`div`, {
                            className: `framer-xjvoaq`,
                            "data-framer-name": `Footer Container`,
                            children: [
                              o(`div`, {
                                className: `framer-1niuuv0`,
                                "data-framer-name": `Footer Item`,
                                children: o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(l, {
                                    children: o(`h4`, {
                                      style: {
                                        "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                      },
                                      children: `Copyright@2025`,
                                    }),
                                  }),
                                  className: `framer-ce0auf`,
                                  "data-framer-name": `Footer Text`,
                                  fonts: [`GF;Red Rose-variable-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              o(_, {
                                href: {
                                  hash: `:oyhKFxo98`,
                                  webPageId: `b_Wa9cjnQ`,
                                },
                                motionChild: !0,
                                nodeId: `UYJ2Sv67M`,
                                openInNewTab: !1,
                                scopeId: `b_Wa9cjnQ`,
                                children: c(d.a, {
                                  className: `framer-15n7kp5 framer-15s2a1i`,
                                  "data-framer-name": `Footer Item`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(l, {
                                        children: o(`h4`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                            "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                            "--framer-font-size": `18px`,
                                            "--framer-font-variation-axes": `"wght" 400`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                          },
                                          children: `Back to top`,
                                        }),
                                      }),
                                      className: `framer-il81dc`,
                                      "data-framer-name": `Footer Text`,
                                      fonts: [`GF;Red Rose-variable-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(f, {
                                      children: o(p, {
                                        className: `framer-14donnn-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `EXaOOIyy9`,
                                        scopeId: `b_Wa9cjnQ`,
                                        children: o(O, {
                                          color: `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          height: `100%`,
                                          iconSearch: `arrow`,
                                          iconSelection: `ArrowUp`,
                                          id: `EXaOOIyy9`,
                                          layoutId: `EXaOOIyy9`,
                                          mirrored: !1,
                                          selectByList: !0,
                                          style: {
                                            height: `100%`,
                                            width: `100%`,
                                          },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              o(`div`, {
                                className: `framer-19ow3to`,
                                "data-framer-name": `Footer Item`,
                                children: o(y, {
                                  __fromCanvasComponent: !0,
                                  children: o(l, {
                                    children: o(`h4`, {
                                      style: {
                                        "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-73621dfc-4e0d-4473-b542-ff777b89afef, rgb(146, 122, 102))`,
                                      },
                                      children: `Terms & Conditions`,
                                    }),
                                  }),
                                  className: `framer-ebnfbj`,
                                  "data-framer-name": `Footer Text`,
                                  fonts: [`GF;Red Rose-variable-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    We() &&
                      o(v, {
                        breakpoint: T,
                        overrides: {
                          C9tpTcJrY: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              pixelHeight: 1600,
                              pixelWidth: 3840,
                              sizes: S?.width || `100vw`,
                              src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png`,
                              srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 3840w`,
                            },
                          },
                        },
                        children: o(g, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            pixelHeight: 1600,
                            pixelWidth: 3840,
                            src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png`,
                            srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 3840w`,
                          },
                          className: `framer-rbrwki hidden-tmsleu hidden-1frjzya hidden-1inth7g hidden-rkemn2`,
                          "data-framer-name": `Contact Us`,
                          id: qe,
                          ref: Je,
                          children: c(`div`, {
                            className: `framer-lqh03a`,
                            "data-framer-name": `Contact Section`,
                            children: [
                              o(`div`, {
                                className: `framer-jaug02`,
                                "data-framer-name": `Contact Container`,
                                children: c(`div`, {
                                  className: `framer-15h9p2b`,
                                  "data-framer-name": `Contact Description Container`,
                                  children: [
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(l, {
                                        children: c(`h1`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                            "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                            "--framer-font-size": `54px`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-color": `var(--token-cdebea94-b97b-4c92-9dd4-447b15482a43, rgb(249, 243, 240))`,
                                          },
                                          children: [
                                            `Book `,
                                            o(`span`, {
                                              style: {
                                                "--framer-text-color": `rgb(0, 0, 0)`,
                                              },
                                              children: o(`br`, {}),
                                            }),
                                            `Your Consultation`,
                                          ],
                                        }),
                                      }),
                                      className: `framer-yak1ro`,
                                      "data-framer-name": `Contact Title`,
                                      fonts: [`CUSTOM;Perpetua Regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(y, {
                                      __fromCanvasComponent: !0,
                                      children: c(l, {
                                        children: [
                                          o(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-color": `var(--token-bccae4bf-b1e6-4016-a3e5-fbc00cf9c434, rgb(221, 221, 221))`,
                                            },
                                            children: `Begin your journey with Shahi Caterers—where every celebration is curated to perfection. From luxury catering and bespoke culinary experiences to venue selection and personalized event planning. `,
                                          }),
                                          o(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-color": `var(--token-bccae4bf-b1e6-4016-a3e5-fbc00cf9c434, rgb(221, 221, 221))`,
                                            },
                                            children: `Let’s connect and create something\xA0extraordinary.`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-ymq97a`,
                                      "data-framer-name": `Contact Description`,
                                      fonts: [`FS;Montserrat-variable`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                              o(m, {
                                action: `https://api.framer.com/forms/v1/forms/6eed2ac6-12b6-4e44-8621-0da1f89408ef/submit`,
                                className: `framer-paogut`,
                                nodeId: `BbWulwCyI`,
                                children: (e) =>
                                  c(a, {
                                    children: [
                                      c(`label`, {
                                        className: `framer-hjo5ei`,
                                        children: [
                                          o(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(l, {
                                              children: o(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                  "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-letter-spacing": `0.04em`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                                },
                                                children: `Name`,
                                              }),
                                            }),
                                            className: `framer-2mf1y4`,
                                            fonts: [`FS;Montserrat-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(h, {
                                            className: `framer-ugzpom`,
                                            inputName: `Name`,
                                            placeholder: `Type here...`,
                                            required: !0,
                                            type: `text`,
                                          }),
                                        ],
                                      }),
                                      c(`label`, {
                                        className: `framer-1fdqku6`,
                                        children: [
                                          o(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(l, {
                                              children: o(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                  "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-letter-spacing": `0.04em`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                                },
                                                children: `Email`,
                                              }),
                                            }),
                                            className: `framer-1ul1b2k`,
                                            fonts: [`FS;Montserrat-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(h, {
                                            className: `framer-1yq0oj9`,
                                            inputName: `Email`,
                                            placeholder: `Type here...`,
                                            required: !0,
                                            type: `email`,
                                          }),
                                        ],
                                      }),
                                      c(`label`, {
                                        className: `framer-u869fm`,
                                        children: [
                                          o(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(l, {
                                              children: o(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                  "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-letter-spacing": `0.04em`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                                },
                                                children: `Mobile`,
                                              }),
                                            }),
                                            className: `framer-1izihrd`,
                                            fonts: [`FS;Montserrat-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(h, {
                                            className: `framer-1j9kkmf`,
                                            inputName: `Mobile`,
                                            placeholder: `Type here...`,
                                            required: !0,
                                            type: `tel`,
                                          }),
                                        ],
                                      }),
                                      c(`label`, {
                                        className: `framer-6g6386`,
                                        children: [
                                          o(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(l, {
                                              children: o(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                  "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-size": `14px`,
                                                  "--framer-letter-spacing": `0.04em`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, rgb(255, 255, 255))`,
                                                },
                                                children: `Message`,
                                              }),
                                            }),
                                            className: `framer-13oqmjc`,
                                            fonts: [`FS;Montserrat-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          o(h, {
                                            className: `framer-1sm96p6`,
                                            inputName: `Message`,
                                            placeholder: `Type here...`,
                                            required: !0,
                                            type: `textarea`,
                                          }),
                                        ],
                                      }),
                                      o(`div`, {
                                        className: `framer-1h7t0hw`,
                                        children: o(v, {
                                          breakpoint: T,
                                          overrides: {
                                            C9tpTcJrY: {
                                              width: `max(${S?.width || `100vw`} - 64px, 1px)`,
                                            },
                                          },
                                          children: o(f, {
                                            height: 48,
                                            children: o(p, {
                                              className: `framer-fde7h2-container`,
                                              isModuleExternal: !0,
                                              nodeId: `MOevKzYog`,
                                              scopeId: `b_Wa9cjnQ`,
                                              children: o(D, {
                                                height: `100%`,
                                                id: `MOevKzYog`,
                                                layoutId: `MOevKzYog`,
                                                style: {
                                                  height: `100%`,
                                                  width: `100%`,
                                                },
                                                type: `submit`,
                                                variant: q(
                                                  e,
                                                  {
                                                    pending: `sxCEZ_HRS`,
                                                    success: `Aynqy9u0S`,
                                                  },
                                                  `fjL_3fJ5D`
                                                ),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                              }),
                              o(`div`, {
                                className: `framer-50ngei`,
                                "data-framer-name": `Contact Details mob`,
                                children: c(`div`, {
                                  className: `framer-1fzhsez`,
                                  "data-framer-name": `Contact Details`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-19u2h90`,
                                      "data-framer-name": `Contact Info`,
                                      children: [
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: o(l, {
                                            children: o(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `var(--token-19e9d736-de57-449f-9a6c-282ed2a8984f, rgb(233, 221, 204))`,
                                              },
                                              children: `Vijayawada, Andhra Pradesh, India`,
                                            }),
                                          }),
                                          className: `framer-17du9sz`,
                                          "data-framer-name": `Heading 5 → Contact Us`,
                                          fonts: [`FS;Montserrat-variable`],
                                          verticalAlignment: `center`,
                                          withExternalLayout: !0,
                                        }),
                                        o(b, {
                                          className: `framer-ri9xjs`,
                                          "data-framer-name": `mynaui:location`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 24,
                                          intrinsicWidth: 24,
                                          svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5598 20.82C12.3966 20.9372 12.2007 21.0003 11.9998 21.0003C11.7988 21.0003 11.603 20.9372 11.4398 20.82C6.61078 17.378 1.48578 10.298 6.66678 5.182C8.08912 3.78285 10.0046 2.99912 11.9998 3C13.9998 3 15.9188 3.785 17.3328 5.181C22.5138 10.297 17.3888 17.376 12.5598 20.82Z" stroke="#E9DDCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12C12.5304 12 13.0391 11.7893 13.4142 11.4142C13.7893 11.0391 14 10.5304 14 10C14 9.46957 13.7893 8.96086 13.4142 8.58579C13.0391 8.21071 12.5304 8 12 8C11.4696 8 10.9609 8.21071 10.5858 8.58579C10.2107 8.96086 10 9.46957 10 10C10 10.5304 10.2107 11.0391 10.5858 11.4142C10.9609 11.7893 11.4696 12 12 12Z" stroke="#E9DDCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o(_, {
                                      href: `https://www.instagram.com/bhaimohammadshafeeq/`,
                                      motionChild: !0,
                                      nodeId: `Zks99Cwa6`,
                                      scopeId: `b_Wa9cjnQ`,
                                      children: c(d.a, {
                                        className: `framer-vctvwh framer-15s2a1i`,
                                        "data-framer-name": `Contact Info`,
                                        children: [
                                          o(f, {
                                            children: o(p, {
                                              className: `framer-1kr18mz-container`,
                                              isAuthoredByUser: !0,
                                              isModuleExternal: !0,
                                              nodeId: `wtT2thmri`,
                                              scopeId: `b_Wa9cjnQ`,
                                              children: o(O, {
                                                color: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                                height: `100%`,
                                                iconSearch: `inst`,
                                                iconSelection: `Phone`,
                                                id: `wtT2thmri`,
                                                layoutId: `wtT2thmri`,
                                                mirrored: !1,
                                                selectByList: !1,
                                                style: {
                                                  height: `100%`,
                                                  width: `100%`,
                                                },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          o(y, {
                                            __fromCanvasComponent: !0,
                                            children: o(l, {
                                              children: o(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                  "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-variation-axes": `"wght" 300`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-color": `var(--token-19e9d736-de57-449f-9a6c-282ed2a8984f, rgb(233, 221, 204))`,
                                                },
                                                children: `shahicaterers.in`,
                                              }),
                                            }),
                                            className: `framer-3yycv2`,
                                            "data-framer-name": `Heading 5 → Contact Us`,
                                            fonts: [`FS;Montserrat-variable`],
                                            verticalAlignment: `center`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    }),
                                    c(`div`, {
                                      className: `framer-1gsosqg`,
                                      "data-framer-name": `Contact Info`,
                                      children: [
                                        o(f, {
                                          children: o(p, {
                                            className: `framer-n7oj1h-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `qcUGgJUhZ`,
                                            scopeId: `b_Wa9cjnQ`,
                                            children: o(O, {
                                              color: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                              height: `100%`,
                                              iconSearch: `mail`,
                                              iconSelection: `Calculator`,
                                              id: `qcUGgJUhZ`,
                                              layoutId: `qcUGgJUhZ`,
                                              mirrored: !1,
                                              selectByList: !1,
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        o(y, {
                                          __fromCanvasComponent: !0,
                                          children: o(l, {
                                            children: o(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `var(--token-19e9d736-de57-449f-9a6c-282ed2a8984f, rgb(233, 221, 204))`,
                                              },
                                              children: o(_, {
                                                href: `https://wa.me/919502200071`,
                                                motionChild: !0,
                                                nodeId: `M0lUOnwQh`,
                                                openInNewTab: !0,
                                                scopeId: `b_Wa9cjnQ`,
                                                smoothScroll: !1,
                                                children: o(d.a, {
                                                  className: `framer-styles-preset-1d1cl26`,
                                                  "data-styles-preset": `Qu7GZfWqZ`,
                                                  children: `shafeeq@shahicaterers.in`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1uft5oi`,
                                          "data-framer-name": `Heading 5 → Contact Us`,
                                          fonts: [`FS;Montserrat-variable`],
                                          verticalAlignment: `center`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                  ],
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (X = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-zHexW.framer-15s2a1i, .framer-zHexW .framer-15s2a1i { display: block; }`,
        `.framer-zHexW.framer-tmsleu { align-content: center; align-items: center; background-color: var(--token-fee47858-d78f-4901-b99b-95ee17494b2a, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1920px; }`,
        `.framer-zHexW .framer-17c926v-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-zHexW .framer-1xjaihl-container, .framer-zHexW .framer-1npan3-container { flex: none; height: auto; position: sticky; width: 100%; z-index: 7; }`,
        `.framer-zHexW.framer-1m4hyq7 { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        `.framer-zHexW .framer-y3imd { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 104vh; justify-content: space-between; overflow: visible; padding: 140px 200px 140px 200px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-110y1y8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 46%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-zHexW .framer-tqd1hm { flex: none; height: 232px; left: -104px; opacity: 0.65; position: absolute; top: -149px; width: 326px; z-index: 0; }`,
        `.framer-zHexW .framer-1253vnq, .framer-zHexW .framer-1s7nrf9, .framer-zHexW .framer-6g21rl, .framer-zHexW .framer-cf9hxy, .framer-zHexW .framer-1qcvame, .framer-zHexW .framer-14udgbo, .framer-zHexW .framer-20j5nz, .framer-zHexW .framer-5xppgl, .framer-zHexW .framer-1k5x0jw, .framer-zHexW .framer-1mbibbx, .framer-zHexW .framer-1rnm83g, .framer-zHexW .framer-1fgdwwy, .framer-zHexW .framer-rdr4df, .framer-zHexW .framer-8d7uog, .framer-zHexW .framer-1lxhn3s, .framer-zHexW .framer-1fqj1dk, .framer-zHexW .framer-uxpr5o, .framer-zHexW .framer-17f5cz2, .framer-zHexW .framer-yak1ro, .framer-zHexW .framer-ymq97a { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-zHexW .framer-6vosmt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 70vh; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 40%; }`,
        `.framer-zHexW .framer-2hmvxq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-zHexW .framer-aeeg9u, .framer-zHexW .framer-1gn1pz1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 46px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 40px 32px 40px 32px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-zHexW .framer-1kjnm5n { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 46px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 40px 32px 40px 32px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-zHexW .framer-xeo1nr { bottom: -104px; flex: none; height: 194px; left: -96px; opacity: 0.6; overflow: visible; position: absolute; width: 188px; z-index: 1; }`,
        `.framer-zHexW .framer-lij20n { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 186px; flex: none; left: 0px; position: absolute; right: 180px; top: 0px; }`,
        `.framer-zHexW .framer-1payo95 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 186px; flex: none; left: 20px; position: absolute; right: 160px; top: 0px; }`,
        `.framer-zHexW .framer-1v0gnco { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 186px; flex: none; left: 40px; position: absolute; right: 140px; top: 0px; }`,
        `.framer-zHexW .framer-1k3j333 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 186px; flex: none; left: 60px; position: absolute; right: 120px; top: 0px; }`,
        `.framer-zHexW .framer-qskupl { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 186px; flex: none; left: 80px; position: absolute; right: 100px; top: 0px; }`,
        `.framer-zHexW .framer-1orp26b { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 186px; flex: none; left: 100px; position: absolute; right: 80px; top: 0px; }`,
        `.framer-zHexW .framer-uyn2ab { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 186px; flex: none; left: 120px; position: absolute; right: 60px; top: 0px; }`,
        `.framer-zHexW .framer-5xatl6 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 186px; flex: none; left: 140px; position: absolute; right: 40px; top: 0px; }`,
        `.framer-zHexW .framer-ma1bjx { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 186px; flex: none; left: 160px; position: absolute; right: 20px; top: 0px; }`,
        `.framer-zHexW .framer-uorsjq { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 186px; flex: none; left: 180px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-zHexW .framer-1p7d8ov { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 165px; flex: none; left: 0px; position: absolute; right: 180px; top: 21px; }`,
        `.framer-zHexW .framer-9fet29 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 165px; flex: none; left: 20px; position: absolute; right: 160px; top: 21px; }`,
        `.framer-zHexW .framer-1vdymwm { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 165px; flex: none; left: 40px; position: absolute; right: 140px; top: 21px; }`,
        `.framer-zHexW .framer-1l2qonl { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 165px; flex: none; left: 60px; position: absolute; right: 120px; top: 21px; }`,
        `.framer-zHexW .framer-1r43pq8 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 165px; flex: none; left: 80px; position: absolute; right: 100px; top: 21px; }`,
        `.framer-zHexW .framer-voyeyp { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 165px; flex: none; left: 100px; position: absolute; right: 80px; top: 21px; }`,
        `.framer-zHexW .framer-3npsr4 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 165px; flex: none; left: 120px; position: absolute; right: 60px; top: 21px; }`,
        `.framer-zHexW .framer-1hweklu { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 165px; flex: none; left: 140px; position: absolute; right: 40px; top: 21px; }`,
        `.framer-zHexW .framer-grs0ob { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 165px; flex: none; left: 160px; position: absolute; right: 20px; top: 21px; }`,
        `.framer-zHexW .framer-1hhnmjr { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 165px; flex: none; left: 180px; position: absolute; right: 0px; top: 21px; }`,
        `.framer-zHexW .framer-1trvatj { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 144px; flex: none; left: 0px; position: absolute; right: 180px; top: 41px; }`,
        `.framer-zHexW .framer-11wnbdy { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 144px; flex: none; left: 20px; position: absolute; right: 160px; top: 41px; }`,
        `.framer-zHexW .framer-7atqgo { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 144px; flex: none; left: 40px; position: absolute; right: 140px; top: 41px; }`,
        `.framer-zHexW .framer-m61jjj { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 144px; flex: none; left: 60px; position: absolute; right: 120px; top: 41px; }`,
        `.framer-zHexW .framer-107getz { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 144px; flex: none; left: 80px; position: absolute; right: 100px; top: 41px; }`,
        `.framer-zHexW .framer-u4emav { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 144px; flex: none; left: 100px; position: absolute; right: 80px; top: 41px; }`,
        `.framer-zHexW .framer-wcs7qk { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 144px; flex: none; left: 120px; position: absolute; right: 60px; top: 41px; }`,
        `.framer-zHexW .framer-enntdt { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 144px; flex: none; left: 140px; position: absolute; right: 40px; top: 41px; }`,
        `.framer-zHexW .framer-6b0ull { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 144px; flex: none; left: 160px; position: absolute; right: 20px; top: 41px; }`,
        `.framer-zHexW .framer-1o5x791 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 144px; flex: none; left: 180px; position: absolute; right: 0px; top: 41px; }`,
        `.framer-zHexW .framer-bzpqyw { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 124px; flex: none; left: 0px; position: absolute; right: 180px; top: 62px; }`,
        `.framer-zHexW .framer-2k6ks9 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 124px; flex: none; left: 20px; position: absolute; right: 160px; top: 62px; }`,
        `.framer-zHexW .framer-rq3xsy { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 124px; flex: none; left: 40px; position: absolute; right: 140px; top: 62px; }`,
        `.framer-zHexW .framer-13syn6s { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 124px; flex: none; left: 60px; position: absolute; right: 120px; top: 62px; }`,
        `.framer-zHexW .framer-10mqeip { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 124px; flex: none; left: 80px; position: absolute; right: 100px; top: 62px; }`,
        `.framer-zHexW .framer-18asiuz { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 124px; flex: none; left: 100px; position: absolute; right: 80px; top: 62px; }`,
        `.framer-zHexW .framer-12izjhl { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 124px; flex: none; left: 120px; position: absolute; right: 60px; top: 62px; }`,
        `.framer-zHexW .framer-168vmu { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 124px; flex: none; left: 140px; position: absolute; right: 40px; top: 62px; }`,
        `.framer-zHexW .framer-1mf9bzx { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 124px; flex: none; left: 160px; position: absolute; right: 20px; top: 62px; }`,
        `.framer-zHexW .framer-dlob8k { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 124px; flex: none; left: 180px; position: absolute; right: 0px; top: 62px; }`,
        `.framer-zHexW .framer-1orelkv { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 103px; flex: none; left: 0px; position: absolute; right: 180px; top: 82px; }`,
        `.framer-zHexW .framer-1u3tfou { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 103px; flex: none; left: 20px; position: absolute; right: 160px; top: 82px; }`,
        `.framer-zHexW .framer-19kt18q { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 103px; flex: none; left: 40px; position: absolute; right: 140px; top: 82px; }`,
        `.framer-zHexW .framer-7cvifo { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 103px; flex: none; left: 60px; position: absolute; right: 120px; top: 82px; }`,
        `.framer-zHexW .framer-lploi3 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 103px; flex: none; left: 80px; position: absolute; right: 100px; top: 82px; }`,
        `.framer-zHexW .framer-17ztvsj { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 103px; flex: none; left: 100px; position: absolute; right: 80px; top: 82px; }`,
        `.framer-zHexW .framer-1v2n1kh { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 103px; flex: none; left: 120px; position: absolute; right: 60px; top: 82px; }`,
        `.framer-zHexW .framer-1862wsz { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 103px; flex: none; left: 140px; position: absolute; right: 40px; top: 82px; }`,
        `.framer-zHexW .framer-1tabtb3 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 103px; flex: none; left: 160px; position: absolute; right: 20px; top: 82px; }`,
        `.framer-zHexW .framer-177ovkv { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 103px; flex: none; left: 180px; position: absolute; right: 0px; top: 82px; }`,
        `.framer-zHexW .framer-160efmf { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 82px; flex: none; left: 0px; position: absolute; right: 180px; top: 103px; }`,
        `.framer-zHexW .framer-ktpurp { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 82px; flex: none; left: 20px; position: absolute; right: 160px; top: 103px; }`,
        `.framer-zHexW .framer-z0slwi { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 82px; flex: none; left: 40px; position: absolute; right: 140px; top: 103px; }`,
        `.framer-zHexW .framer-fsmtqm { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 82px; flex: none; left: 60px; position: absolute; right: 120px; top: 103px; }`,
        `.framer-zHexW .framer-bwybul { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 82px; flex: none; left: 80px; position: absolute; right: 100px; top: 103px; }`,
        `.framer-zHexW .framer-hk9mvt { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 82px; flex: none; left: 100px; position: absolute; right: 80px; top: 103px; }`,
        `.framer-zHexW .framer-knlvvj { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 82px; flex: none; left: 120px; position: absolute; right: 60px; top: 103px; }`,
        `.framer-zHexW .framer-1q4v7v7 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 82px; flex: none; left: 140px; position: absolute; right: 40px; top: 103px; }`,
        `.framer-zHexW .framer-egyq5d { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 82px; flex: none; left: 160px; position: absolute; right: 20px; top: 103px; }`,
        `.framer-zHexW .framer-1ne5n1h { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 82px; flex: none; left: 180px; position: absolute; right: 0px; top: 103px; }`,
        `.framer-zHexW .framer-3bc86d { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 62px; flex: none; left: 0px; position: absolute; right: 180px; top: 124px; }`,
        `.framer-zHexW .framer-dhmd86 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 41px; flex: none; left: 0px; position: absolute; right: 180px; top: 144px; }`,
        `.framer-zHexW .framer-1prxleh { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 21px; flex: none; left: 0px; position: absolute; right: 180px; top: 165px; }`,
        `.framer-zHexW .framer-1d96neb { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 0px; position: absolute; right: 180px; top: 186px; }`,
        `.framer-zHexW .framer-11gi7jj { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 62px; flex: none; left: 20px; position: absolute; right: 160px; top: 124px; }`,
        `.framer-zHexW .framer-en0755 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 41px; flex: none; left: 20px; position: absolute; right: 160px; top: 144px; }`,
        `.framer-zHexW .framer-aerad9 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 21px; flex: none; left: 20px; position: absolute; right: 160px; top: 165px; }`,
        `.framer-zHexW .framer-jtjxu6 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 20px; position: absolute; right: 160px; top: 186px; }`,
        `.framer-zHexW .framer-jizmbi { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 62px; flex: none; left: 40px; position: absolute; right: 140px; top: 124px; }`,
        `.framer-zHexW .framer-1wj1yg9 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 41px; flex: none; left: 40px; position: absolute; right: 140px; top: 144px; }`,
        `.framer-zHexW .framer-gu1cp7 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 21px; flex: none; left: 40px; position: absolute; right: 140px; top: 165px; }`,
        `.framer-zHexW .framer-okh0gn { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 40px; position: absolute; right: 140px; top: 186px; }`,
        `.framer-zHexW .framer-1gpu6zf { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 62px; flex: none; left: 60px; position: absolute; right: 120px; top: 124px; }`,
        `.framer-zHexW .framer-1lygi00 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 41px; flex: none; left: 60px; position: absolute; right: 120px; top: 144px; }`,
        `.framer-zHexW .framer-hvary9 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 21px; flex: none; left: 60px; position: absolute; right: 120px; top: 165px; }`,
        `.framer-zHexW .framer-5j3mox { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 60px; position: absolute; right: 120px; top: 186px; }`,
        `.framer-zHexW .framer-4y9h24 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 62px; flex: none; left: 80px; position: absolute; right: 100px; top: 124px; }`,
        `.framer-zHexW .framer-1l5mgdx { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 41px; flex: none; left: 80px; position: absolute; right: 100px; top: 144px; }`,
        `.framer-zHexW .framer-v3nlh8 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 21px; flex: none; left: 80px; position: absolute; right: 100px; top: 165px; }`,
        `.framer-zHexW .framer-1jfoze9 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 80px; position: absolute; right: 100px; top: 186px; }`,
        `.framer-zHexW .framer-1l0f6gj { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 62px; flex: none; left: 100px; position: absolute; right: 80px; top: 124px; }`,
        `.framer-zHexW .framer-1qf7bx6 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 41px; flex: none; left: 100px; position: absolute; right: 80px; top: 144px; }`,
        `.framer-zHexW .framer-136v26e { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 21px; flex: none; left: 100px; position: absolute; right: 80px; top: 165px; }`,
        `.framer-zHexW .framer-18q7ntb { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 100px; position: absolute; right: 80px; top: 186px; }`,
        `.framer-zHexW .framer-1cy604n { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 62px; flex: none; left: 120px; position: absolute; right: 60px; top: 124px; }`,
        `.framer-zHexW .framer-1vchqio { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 41px; flex: none; left: 120px; position: absolute; right: 60px; top: 144px; }`,
        `.framer-zHexW .framer-ba0ph0 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 21px; flex: none; left: 120px; position: absolute; right: 60px; top: 165px; }`,
        `.framer-zHexW .framer-17leyvn { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 120px; position: absolute; right: 60px; top: 186px; }`,
        `.framer-zHexW .framer-deyfz { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 62px; flex: none; left: 140px; position: absolute; right: 40px; top: 124px; }`,
        `.framer-zHexW .framer-ybqq5z { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 41px; flex: none; left: 140px; position: absolute; right: 40px; top: 144px; }`,
        `.framer-zHexW .framer-17514hk { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 21px; flex: none; left: 140px; position: absolute; right: 40px; top: 165px; }`,
        `.framer-zHexW .framer-1udvq51 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 140px; position: absolute; right: 40px; top: 186px; }`,
        `.framer-zHexW .framer-vrnor8 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 62px; flex: none; left: 160px; position: absolute; right: 20px; top: 124px; }`,
        `.framer-zHexW .framer-1fjn85p { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 41px; flex: none; left: 160px; position: absolute; right: 20px; top: 144px; }`,
        `.framer-zHexW .framer-4vpdwv { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 21px; flex: none; left: 160px; position: absolute; right: 20px; top: 165px; }`,
        `.framer-zHexW .framer-19nw9bg { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 160px; position: absolute; right: 20px; top: 186px; }`,
        `.framer-zHexW .framer-1p1sdj5 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 62px; flex: none; left: 180px; position: absolute; right: 0px; top: 124px; }`,
        `.framer-zHexW .framer-1fujmvy { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 41px; flex: none; left: 180px; position: absolute; right: 0px; top: 144px; }`,
        `.framer-zHexW .framer-tijuyh { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 21px; flex: none; left: 180px; position: absolute; right: 0px; top: 165px; }`,
        `.framer-zHexW .framer-1f09x7h { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 180px; position: absolute; right: 0px; top: 186px; }`,
        `.framer-zHexW .framer-4h89k7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 140px; height: min-content; justify-content: center; overflow: hidden; padding: 140px 200px 140px 200px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-afqxgq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 70vh; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 32%; }`,
        `.framer-zHexW .framer-56vyve { aspect-ratio: 0.8266832917705735 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 834px); left: -101px; position: absolute; right: -102px; top: -20px; z-index: 1; }`,
        `.framer-zHexW .framer-xo5jd3, .framer-zHexW .framer-ue34o6, .framer-zHexW .framer-1h3bmf8 { align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, rgba(87, 72, 61, 0) 0%, rgba(38, 25, 18, 0.81) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 54px 32px 32px 32px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-zHexW .framer-vh07b9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 46%; }`,
        `.framer-zHexW .framer-u4pbnh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-anb070 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 64vh; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 68%; }`,
        `.framer-zHexW .framer-11vlqq { bottom: -97px; flex: none; height: 804px; left: -110px; position: absolute; right: -83px; z-index: 1; }`,
        `.framer-zHexW .framer-p0unnd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 50vh; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-sql734 { aspect-ratio: 0.8266832917705735 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 835px); left: -101px; position: absolute; right: -102px; top: -20px; z-index: 1; }`,
        `.framer-zHexW .framer-uy48b1 { bottom: 63px; flex: none; height: 220px; opacity: 0.6; overflow: visible; position: absolute; right: -111px; width: 223px; z-index: 1; }`,
        `.framer-zHexW .framer-12zpxpj { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 212px; flex: none; left: 0px; position: absolute; right: 215px; top: 0px; }`,
        `.framer-zHexW .framer-1se79hy { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 212px; flex: none; left: 24px; position: absolute; right: 191px; top: 0px; }`,
        `.framer-zHexW .framer-yxjmjd { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 212px; flex: none; left: 48px; position: absolute; right: 167px; top: 0px; }`,
        `.framer-zHexW .framer-18xdbkw { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 212px; flex: none; left: 72px; position: absolute; right: 143px; top: 0px; }`,
        `.framer-zHexW .framer-dom9lc { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 212px; flex: none; left: 95px; position: absolute; right: 119px; top: 0px; }`,
        `.framer-zHexW .framer-hjg3ur { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 212px; flex: none; left: 119px; position: absolute; right: 95px; top: 0px; }`,
        `.framer-zHexW .framer-wj5wge { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 212px; flex: none; left: 143px; position: absolute; right: 72px; top: 0px; }`,
        `.framer-zHexW .framer-1ucomnd { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 212px; flex: none; left: 167px; position: absolute; right: 48px; top: 0px; }`,
        `.framer-zHexW .framer-1cwjf4d { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 212px; flex: none; left: 191px; position: absolute; right: 24px; top: 0px; }`,
        `.framer-zHexW .framer-r1eyq0 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 212px; flex: none; left: 215px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-zHexW .framer-1nrkl3q { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 188px; flex: none; left: 0px; position: absolute; right: 215px; top: 24px; }`,
        `.framer-zHexW .framer-1tqav7z { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 188px; flex: none; left: 24px; position: absolute; right: 191px; top: 24px; }`,
        `.framer-zHexW .framer-y7pefu { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 188px; flex: none; left: 48px; position: absolute; right: 167px; top: 24px; }`,
        `.framer-zHexW .framer-h0cud6 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 188px; flex: none; left: 72px; position: absolute; right: 143px; top: 24px; }`,
        `.framer-zHexW .framer-1u1cyke { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 188px; flex: none; left: 95px; position: absolute; right: 119px; top: 24px; }`,
        `.framer-zHexW .framer-1nq94dv { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 188px; flex: none; left: 119px; position: absolute; right: 95px; top: 24px; }`,
        `.framer-zHexW .framer-k4ifbs { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 188px; flex: none; left: 143px; position: absolute; right: 72px; top: 24px; }`,
        `.framer-zHexW .framer-1qq4fxh { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 188px; flex: none; left: 167px; position: absolute; right: 48px; top: 24px; }`,
        `.framer-zHexW .framer-yyuvug { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 188px; flex: none; left: 191px; position: absolute; right: 24px; top: 24px; }`,
        `.framer-zHexW .framer-1n9d52z { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 188px; flex: none; left: 215px; position: absolute; right: 0px; top: 24px; }`,
        `.framer-zHexW .framer-10y8vzz { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 164px; flex: none; left: 0px; position: absolute; right: 215px; top: 48px; }`,
        `.framer-zHexW .framer-1g3r424 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 164px; flex: none; left: 24px; position: absolute; right: 191px; top: 48px; }`,
        `.framer-zHexW .framer-1pwhppu { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 164px; flex: none; left: 48px; position: absolute; right: 167px; top: 48px; }`,
        `.framer-zHexW .framer-gkt1ms { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 164px; flex: none; left: 72px; position: absolute; right: 143px; top: 48px; }`,
        `.framer-zHexW .framer-1u0uap0 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 164px; flex: none; left: 95px; position: absolute; right: 119px; top: 48px; }`,
        `.framer-zHexW .framer-1aqpuzx { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 164px; flex: none; left: 119px; position: absolute; right: 95px; top: 48px; }`,
        `.framer-zHexW .framer-p0koxo { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 164px; flex: none; left: 143px; position: absolute; right: 72px; top: 48px; }`,
        `.framer-zHexW .framer-1nals8e { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 164px; flex: none; left: 167px; position: absolute; right: 48px; top: 48px; }`,
        `.framer-zHexW .framer-1mwx0bp { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 164px; flex: none; left: 191px; position: absolute; right: 24px; top: 48px; }`,
        `.framer-zHexW .framer-2cmxjp { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 164px; flex: none; left: 215px; position: absolute; right: 0px; top: 48px; }`,
        `.framer-zHexW .framer-beyci7 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 141px; flex: none; left: 0px; position: absolute; right: 215px; top: 72px; }`,
        `.framer-zHexW .framer-uaqpf2 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 141px; flex: none; left: 24px; position: absolute; right: 191px; top: 72px; }`,
        `.framer-zHexW .framer-1h9u6fy { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 141px; flex: none; left: 48px; position: absolute; right: 167px; top: 72px; }`,
        `.framer-zHexW .framer-1bymljk { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 141px; flex: none; left: 72px; position: absolute; right: 143px; top: 72px; }`,
        `.framer-zHexW .framer-11dltsl { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 141px; flex: none; left: 95px; position: absolute; right: 119px; top: 72px; }`,
        `.framer-zHexW .framer-xub6ep { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 141px; flex: none; left: 119px; position: absolute; right: 95px; top: 72px; }`,
        `.framer-zHexW .framer-1hqhv86 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 141px; flex: none; left: 143px; position: absolute; right: 72px; top: 72px; }`,
        `.framer-zHexW .framer-1b0j3sw { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 141px; flex: none; left: 167px; position: absolute; right: 48px; top: 72px; }`,
        `.framer-zHexW .framer-13c1g8q { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 141px; flex: none; left: 191px; position: absolute; right: 24px; top: 72px; }`,
        `.framer-zHexW .framer-4cunyd { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 141px; flex: none; left: 215px; position: absolute; right: 0px; top: 72px; }`,
        `.framer-zHexW .framer-1rjyv3n { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 117px; flex: none; left: 0px; position: absolute; right: 215px; top: 95px; }`,
        `.framer-zHexW .framer-k9ciol { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 117px; flex: none; left: 24px; position: absolute; right: 191px; top: 95px; }`,
        `.framer-zHexW .framer-1263ihv { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 117px; flex: none; left: 48px; position: absolute; right: 167px; top: 95px; }`,
        `.framer-zHexW .framer-1di79zc { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 117px; flex: none; left: 72px; position: absolute; right: 143px; top: 95px; }`,
        `.framer-zHexW .framer-pml5cd { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 117px; flex: none; left: 95px; position: absolute; right: 119px; top: 95px; }`,
        `.framer-zHexW .framer-1dbvqe2 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 117px; flex: none; left: 119px; position: absolute; right: 95px; top: 95px; }`,
        `.framer-zHexW .framer-ev7qv8 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 117px; flex: none; left: 143px; position: absolute; right: 72px; top: 95px; }`,
        `.framer-zHexW .framer-12zdgp1 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 117px; flex: none; left: 167px; position: absolute; right: 48px; top: 95px; }`,
        `.framer-zHexW .framer-1fj1s9s { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 117px; flex: none; left: 191px; position: absolute; right: 24px; top: 95px; }`,
        `.framer-zHexW .framer-1xwo4uu { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 117px; flex: none; left: 215px; position: absolute; right: 0px; top: 95px; }`,
        `.framer-zHexW .framer-1qwn0ev { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 93px; flex: none; left: 0px; position: absolute; right: 215px; top: 119px; }`,
        `.framer-zHexW .framer-1a1johf { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 93px; flex: none; left: 24px; position: absolute; right: 191px; top: 119px; }`,
        `.framer-zHexW .framer-1bq0ygr { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 93px; flex: none; left: 48px; position: absolute; right: 167px; top: 119px; }`,
        `.framer-zHexW .framer-18p0d57 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 93px; flex: none; left: 72px; position: absolute; right: 143px; top: 119px; }`,
        `.framer-zHexW .framer-1relc74 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 93px; flex: none; left: 95px; position: absolute; right: 119px; top: 119px; }`,
        `.framer-zHexW .framer-1xogk2k { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 93px; flex: none; left: 119px; position: absolute; right: 95px; top: 119px; }`,
        `.framer-zHexW .framer-efjrnk { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 93px; flex: none; left: 143px; position: absolute; right: 72px; top: 119px; }`,
        `.framer-zHexW .framer-ncwgdr { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 93px; flex: none; left: 167px; position: absolute; right: 48px; top: 119px; }`,
        `.framer-zHexW .framer-hxrvxx { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 93px; flex: none; left: 191px; position: absolute; right: 24px; top: 119px; }`,
        `.framer-zHexW .framer-12j4876 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 93px; flex: none; left: 215px; position: absolute; right: 0px; top: 119px; }`,
        `.framer-zHexW .framer-gt5fo5 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 69px; flex: none; left: 0px; position: absolute; right: 215px; top: 143px; }`,
        `.framer-zHexW .framer-o2radx { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 46px; flex: none; left: 0px; position: absolute; right: 215px; top: 166px; }`,
        `.framer-zHexW .framer-10hx8up { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 23px; flex: none; left: 0px; position: absolute; right: 215px; top: 189px; }`,
        `.framer-zHexW .framer-df78j { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 0px; position: absolute; right: 215px; top: 212px; }`,
        `.framer-zHexW .framer-g4q56e { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 69px; flex: none; left: 24px; position: absolute; right: 191px; top: 143px; }`,
        `.framer-zHexW .framer-1kun3fg { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 46px; flex: none; left: 24px; position: absolute; right: 191px; top: 166px; }`,
        `.framer-zHexW .framer-1by1hg8 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 23px; flex: none; left: 24px; position: absolute; right: 191px; top: 189px; }`,
        `.framer-zHexW .framer-1xvktfw { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 24px; position: absolute; right: 191px; top: 212px; }`,
        `.framer-zHexW .framer-11s6yq6 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 69px; flex: none; left: 48px; position: absolute; right: 167px; top: 143px; }`,
        `.framer-zHexW .framer-1qa3is4 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 46px; flex: none; left: 48px; position: absolute; right: 167px; top: 166px; }`,
        `.framer-zHexW .framer-34f3ri { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 23px; flex: none; left: 48px; position: absolute; right: 167px; top: 189px; }`,
        `.framer-zHexW .framer-iamevk { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 48px; position: absolute; right: 167px; top: 212px; }`,
        `.framer-zHexW .framer-8nz6ox { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 69px; flex: none; left: 72px; position: absolute; right: 143px; top: 143px; }`,
        `.framer-zHexW .framer-1eanb4k { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 46px; flex: none; left: 72px; position: absolute; right: 143px; top: 166px; }`,
        `.framer-zHexW .framer-1mdflil { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 23px; flex: none; left: 72px; position: absolute; right: 143px; top: 189px; }`,
        `.framer-zHexW .framer-tzcnis { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 72px; position: absolute; right: 143px; top: 212px; }`,
        `.framer-zHexW .framer-7jctc5 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 69px; flex: none; left: 95px; position: absolute; right: 119px; top: 143px; }`,
        `.framer-zHexW .framer-1kedpg0 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 46px; flex: none; left: 95px; position: absolute; right: 119px; top: 166px; }`,
        `.framer-zHexW .framer-1qtuqur { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 23px; flex: none; left: 95px; position: absolute; right: 119px; top: 189px; }`,
        `.framer-zHexW .framer-1vmkklw { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 95px; position: absolute; right: 119px; top: 212px; }`,
        `.framer-zHexW .framer-gk3i90 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 69px; flex: none; left: 119px; position: absolute; right: 95px; top: 143px; }`,
        `.framer-zHexW .framer-cefhp7 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 46px; flex: none; left: 119px; position: absolute; right: 95px; top: 166px; }`,
        `.framer-zHexW .framer-c00533 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 23px; flex: none; left: 119px; position: absolute; right: 95px; top: 189px; }`,
        `.framer-zHexW .framer-1jk89my { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 119px; position: absolute; right: 95px; top: 212px; }`,
        `.framer-zHexW .framer-ntsi5q { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 69px; flex: none; left: 143px; position: absolute; right: 72px; top: 143px; }`,
        `.framer-zHexW .framer-o381c5 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 46px; flex: none; left: 143px; position: absolute; right: 72px; top: 166px; }`,
        `.framer-zHexW .framer-1rm78fq { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 23px; flex: none; left: 143px; position: absolute; right: 72px; top: 189px; }`,
        `.framer-zHexW .framer-4mcwl8 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 143px; position: absolute; right: 72px; top: 212px; }`,
        `.framer-zHexW .framer-1yfsy13 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 69px; flex: none; left: 167px; position: absolute; right: 48px; top: 143px; }`,
        `.framer-zHexW .framer-9f01qk { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 46px; flex: none; left: 167px; position: absolute; right: 48px; top: 166px; }`,
        `.framer-zHexW .framer-trzxuj { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 23px; flex: none; left: 167px; position: absolute; right: 48px; top: 189px; }`,
        `.framer-zHexW .framer-sb3glf { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 167px; position: absolute; right: 48px; top: 212px; }`,
        `.framer-zHexW .framer-ckdgxq { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 69px; flex: none; left: 191px; position: absolute; right: 24px; top: 143px; }`,
        `.framer-zHexW .framer-9mieen { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 46px; flex: none; left: 191px; position: absolute; right: 24px; top: 166px; }`,
        `.framer-zHexW .framer-9ielyp { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 23px; flex: none; left: 191px; position: absolute; right: 24px; top: 189px; }`,
        `.framer-zHexW .framer-1mgzdqd { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 191px; position: absolute; right: 24px; top: 212px; }`,
        `.framer-zHexW .framer-1uu2bo3 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 69px; flex: none; left: 215px; position: absolute; right: 0px; top: 143px; }`,
        `.framer-zHexW .framer-ve52sf { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 46px; flex: none; left: 215px; position: absolute; right: 0px; top: 166px; }`,
        `.framer-zHexW .framer-1g8xon7 { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 23px; flex: none; left: 215px; position: absolute; right: 0px; top: 189px; }`,
        `.framer-zHexW .framer-6jfc7x { background-color: #e8dccb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; bottom: 0px; flex: none; left: 215px; position: absolute; right: 0px; top: 212px; }`,
        `.framer-zHexW .framer-oee90q { align-content: center; align-items: center; background-color: #f9f3f0; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 110.00000000000001vh; justify-content: space-between; overflow: hidden; padding: 140px 160px 140px 160px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-33dad0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 55%; }`,
        `.framer-zHexW .framer-js7hdx { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-zHexW .framer-1rqvylz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-1f5kn9p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 70vh; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 28%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-zHexW .framer-1qzoe6s { border-top-left-radius: 400px; border-top-right-radius: 400px; flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-18d5u4j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-zHexW .framer-o62f1o { align-content: flex-start; align-items: flex-start; background-color: #927a66; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: 12px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 179px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-zHexW .framer-1u19hle { align-content: flex-start; align-items: flex-start; background-color: #c0906e; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: 12px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 23px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-zHexW .framer-16hmwxm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 116px; height: 100vh; justify-content: center; overflow: hidden; padding: 40px 200px 40px 200px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-zHexW .framer-1xx5ed2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-12lz359 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 46%; }`,
        `.framer-zHexW .framer-1hflgi, .framer-zHexW .framer-1bgwjk, .framer-zHexW .framer-15h9p2b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-lywigo, .framer-zHexW .framer-dda1r7, .framer-zHexW .framer-50ngei { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-1hvxxt, .framer-zHexW .framer-171odc5 { display: grid; flex: none; gap: 30px 16px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-jvoqgo, .framer-zHexW .framer-2ybgah, .framer-zHexW .framer-cc75lq, .framer-zHexW .framer-gd9tji, .framer-zHexW .framer-19u2h90, .framer-zHexW .framer-1gsosqg { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-osxmo9-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 27px); position: relative; width: 24px; }`,
        `.framer-zHexW .framer-17k5bzp, .framer-zHexW .framer-1wypl7n, .framer-zHexW .framer-jowu0s, .framer-zHexW .framer-amrv9b, .framer-zHexW .framer-18u1nr0, .framer-zHexW .framer-tfis4e, .framer-zHexW .framer-pbse73, .framer-zHexW .framer-1xhhydn, .framer-zHexW .framer-zt3zsx, .framer-zHexW .framer-qgonhk, .framer-zHexW .framer-c77tap, .framer-zHexW .framer-17z16e2, .framer-zHexW .framer-ugoni7, .framer-zHexW .framer-egmddl, .framer-zHexW .framer-vvvaml, .framer-zHexW .framer-1l8odra, .framer-zHexW .framer-15ge7gb, .framer-zHexW .framer-ol1a1j, .framer-zHexW .framer-ce0auf, .framer-zHexW .framer-il81dc, .framer-zHexW .framer-ebnfbj, .framer-zHexW .framer-17du9sz, .framer-zHexW .framer-3yycv2, .framer-zHexW .framer-1uft5oi { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-zHexW .framer-q053q0, .framer-zHexW .framer-1sukpol, .framer-zHexW .framer-vctvwh { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-zHexW .framer-1qwfbht-container, .framer-zHexW .framer-nkpu1h, .framer-zHexW .framer-1w1pxiy-container, .framer-zHexW .framer-1g77ofq, .framer-zHexW .framer-ri9xjs, .framer-zHexW .framer-1kr18mz-container { flex: none; height: 24px; position: relative; width: 24px; }`,
        `.framer-zHexW .framer-ot2l0k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px 64px 24px 64px; position: relative; width: 40%; }`,
        `.framer-zHexW .framer-te50xp, .framer-zHexW .framer-etrxoi, .framer-zHexW .framer-1pjda2y, .framer-zHexW .framer-9xuh1s, .framer-zHexW .framer-iiplf1, .framer-zHexW .framer-148oc6d, .framer-zHexW .framer-jj9eh0, .framer-zHexW .framer-1utt5bg, .framer-zHexW .framer-hjo5ei, .framer-zHexW .framer-1fdqku6, .framer-zHexW .framer-u869fm, .framer-zHexW .framer-6g6386 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-52dw7l, .framer-zHexW .framer-15bcrcy, .framer-zHexW .framer-1g3vdyn, .framer-zHexW .framer-c89328, .framer-zHexW .framer-1ow5czt, .framer-zHexW .framer-ot5rfk, .framer-zHexW .framer-18zgu59, .framer-zHexW .framer-jsyucn, .framer-zHexW .framer-2mf1y4, .framer-zHexW .framer-1ul1b2k, .framer-zHexW .framer-1izihrd, .framer-zHexW .framer-13oqmjc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-zHexW .framer-x9i9va, .framer-zHexW .framer-2quto5, .framer-zHexW .framer-169xn8j, .framer-zHexW .framer-1m5pkxc, .framer-zHexW .framer-1utlfao, .framer-zHexW .framer-1gpviqs, .framer-zHexW .framer-ugzpom, .framer-zHexW .framer-1yq0oj9, .framer-zHexW .framer-1j9kkmf { --framer-input-background: rgba(31, 20, 13, 0.2); --framer-input-border-bottom-width: 1px; --framer-input-border-color: #ab7e65; --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 8px; --framer-input-border-radius-bottom-right: 8px; --framer-input-border-radius-top-left: 8px; --framer-input-border-radius-top-right: 8px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-cdebea94-b97b-4c92-9dd4-447b15482a43, #f9f3f0); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-19e9d736-de57-449f-9a6c-282ed2a8984f, #e9ddcc); --framer-input-font-family: "Montserrat"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #b39682; flex: none; height: 44px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-14ivibl, .framer-zHexW .framer-1mauxye, .framer-zHexW .framer-1sm96p6 { --framer-input-background: rgba(31, 20, 13, 0.2); --framer-input-border-bottom-width: 1px; --framer-input-border-color: #ab7e65; --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 8px; --framer-input-border-radius-bottom-right: 8px; --framer-input-border-radius-top-left: 8px; --framer-input-border-radius-top-right: 8px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-cdebea94-b97b-4c92-9dd4-447b15482a43, #f9f3f0); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-19e9d736-de57-449f-9a6c-282ed2a8984f, #e9ddcc); --framer-input-font-family: "Montserrat"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #b39682; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 100px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-1csnlrg, .framer-zHexW .framer-11eh8rt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-bxa0oo-container, .framer-zHexW .framer-u6tijb-container, .framer-zHexW .framer-fde7h2-container { flex: 1 0 0px; height: 48px; position: relative; width: 1px; }`,
        `.framer-zHexW .framer-8kvwtk, .framer-zHexW .framer-9gmsq2 { align-content: center; align-items: center; background-color: #f2ece4; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 140px; height: min-content; justify-content: center; overflow: hidden; padding: 160px 200px 40px 200px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-j9kgv7, .framer-zHexW .framer-17nmx0k, .framer-zHexW .framer-v0rivi, .framer-zHexW .framer-yqfqzx { aspect-ratio: 7.164179104477612 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 28px); overflow: visible; position: relative; width: 96%; z-index: 1; }`,
        `.framer-zHexW .framer-ew0lap { aspect-ratio: 7.164179104477612 / 1; bottom: -18px; flex: none; height: var(--framer-aspect-ratio-supported, 28px); left: -22px; opacity: 0.2; overflow: visible; position: absolute; width: 100%; z-index: 0; }`,
        `.framer-zHexW .framer-kkllzs, .framer-zHexW .framer-1v1bwrq, .framer-zHexW .framer-1d746t8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-2d52s6, .framer-zHexW .framer-1ujra4g, .framer-zHexW .framer-1r05elo, .framer-zHexW .framer-1201e6q, .framer-zHexW .framer-6ytj11, .framer-zHexW .framer-ol8nxt, .framer-zHexW .framer-1jqjb0u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-zHexW .framer-6swt45, .framer-zHexW .framer-105grz7, .framer-zHexW .framer-lits5p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-zHexW .framer-1d5rfm1-container, .framer-zHexW .framer-12kqe1m-container, .framer-zHexW .framer-1bsgkfk-container, .framer-zHexW .framer-1z9wig-container { flex: none; height: 32px; position: relative; width: 32px; }`,
        `.framer-zHexW .framer-mjd8c7 { aspect-ratio: 7.164179104477612 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 155px); overflow: visible; position: relative; width: 73%; z-index: 1; }`,
        `.framer-zHexW .framer-10hcucc { aspect-ratio: 7.164179104477612 / 1; bottom: -18px; flex: none; height: var(--framer-aspect-ratio-supported, 155px); left: -22px; opacity: 0.2; overflow: visible; position: absolute; width: 100%; z-index: 0; }`,
        `.framer-zHexW .framer-5e97bf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1520px; }`,
        `.framer-zHexW .framer-9zwok8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 180px; }`,
        `.framer-zHexW .framer-8sguv5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 228px; }`,
        `.framer-zHexW .framer-170z5ls { align-content: center; align-items: center; background-color: #f2ece4; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 140px; height: min-content; justify-content: center; overflow: hidden; padding: 160px 140px 40px 140px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-gyku3p { aspect-ratio: 7.164179104477612 / 1; bottom: -14px; flex: none; height: var(--framer-aspect-ratio-supported, 28px); left: -19px; opacity: 0.2; overflow: visible; position: absolute; width: 100%; z-index: 0; }`,
        `.framer-zHexW .framer-1mkb8v0 { align-content: center; align-items: center; background-color: #f2ece4; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 140px; height: min-content; justify-content: center; overflow: hidden; padding: 160px 48px 40px 48px; position: relative; width: 810px; }`,
        `.framer-zHexW .framer-12fhkre { aspect-ratio: 7.164179104477612 / 1; bottom: -8px; flex: none; height: var(--framer-aspect-ratio-supported, 28px); left: -11px; opacity: 0.2; overflow: visible; position: absolute; width: 100%; z-index: 0; }`,
        `.framer-zHexW .framer-wg356u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 116px; height: min-content; justify-content: center; overflow: hidden; padding: 64px 64px 80px 64px; position: relative; width: 810px; z-index: 3; }`,
        `.framer-zHexW .framer-1sxndk7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-73zhc4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-1eefmj2-container, .framer-zHexW .framer-n7oj1h-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); position: relative; width: 24px; }`,
        `.framer-zHexW .framer-1ioia0r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-cxu4hk { align-content: center; align-items: center; background-color: #f2ece4; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 80px 32px 40px 32px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-153o1z7 { aspect-ratio: 7.164179104477612 / 1; bottom: -5px; flex: none; height: var(--framer-aspect-ratio-supported, 28px); left: -6px; opacity: 0.2; overflow: visible; position: absolute; width: 100%; z-index: 0; }`,
        `.framer-zHexW .framer-xjvoaq { display: grid; flex: none; gap: 22px 24px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(75px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-1niuuv0 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; justify-self: start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-zHexW .framer-15n7kp5 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; grid-column: span 2; height: min-content; justify-content: center; justify-self: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-zHexW .framer-14donnn-container { flex: none; height: 20px; position: relative; width: 16px; }`,
        `.framer-zHexW .framer-19ow3to { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; justify-self: end; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-zHexW .framer-rbrwki { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 116px; height: min-content; justify-content: center; overflow: hidden; padding: 48px 32px 64px 32px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-zHexW .framer-lqh03a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-jaug02 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-paogut { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-1h7t0hw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-zHexW .framer-1fzhsez { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        ...Ce,
        `@media (min-width: 1660px) and (max-width: 1919px) { .framer-zHexW.framer-tmsleu { width: 1660px; } .framer-zHexW .framer-y3imd, .framer-zHexW .framer-4h89k7 { padding: 140px 160px 140px 160px; } .framer-zHexW .framer-tqd1hm { height: 173px; left: -87px; top: -89px; width: 243px; } .framer-zHexW .framer-56vyve { height: var(--framer-aspect-ratio-supported, 764px); } .framer-zHexW .framer-oee90q { padding: 140px 180px 140px 180px; } .framer-zHexW .framer-16hmwxm { padding: 40px 160px 40px 160px; } .framer-zHexW .framer-j9kgv7, .framer-zHexW .framer-ew0lap { height: var(--framer-aspect-ratio-supported, 169px); }}`,
        `@media (min-width: 1440px) and (max-width: 1659px) { .framer-zHexW.framer-tmsleu { width: 1440px; } .framer-zHexW .framer-y3imd { padding: 120px 100px 120px 100px; } .framer-zHexW .framer-tqd1hm { height: 165px; left: -46px; top: -83px; width: 232px; } .framer-zHexW .framer-4h89k7 { padding: 140px 100px 140px 100px; } .framer-zHexW .framer-56vyve { height: var(--framer-aspect-ratio-supported, 725px); } .framer-zHexW .framer-11vlqq { bottom: -113px; height: unset; top: -42px; } .framer-zHexW .framer-oee90q { padding: 140px 120px 140px 120px; } .framer-zHexW .framer-16hmwxm { padding: 40px 120px 40px 120px; } .framer-zHexW .framer-17nmx0k, .framer-zHexW .framer-gyku3p { height: var(--framer-aspect-ratio-supported, 155px); }}`,
        `@media (min-width: 810px) and (max-width: 1439px) { .framer-zHexW.framer-tmsleu { width: 810px; } .framer-zHexW .framer-17c926v-container { order: 13; width: 0%; } .framer-zHexW .framer-1xjaihl-container { order: 1; } .framer-zHexW .framer-y3imd { flex-direction: column; gap: 64px; height: min-content; justify-content: center; order: 2; padding: 80px 64px 80px 64px; z-index: 0; } .framer-zHexW .framer-110y1y8, .framer-zHexW .framer-33dad0 { width: 100%; } .framer-zHexW .framer-tqd1hm { height: 116px; left: -48px; top: -32px; width: 163px; } .framer-zHexW .framer-6vosmt { height: 40vh; width: 100%; z-index: 2; } .framer-zHexW .framer-xeo1nr { bottom: -32px; z-index: 0; } .framer-zHexW .framer-4h89k7 { gap: 64px; order: 3; padding: 100px 64px 100px 64px; } .framer-zHexW .framer-vh07b9 { flex: 1 0 0px; gap: 40px; width: 1px; } .framer-zHexW .framer-anb070 { height: 50vh; width: 100%; } .framer-zHexW .framer-11vlqq { bottom: -92px; height: unset; left: -26px; right: unset; top: -107px; width: 707px; } .framer-zHexW .framer-sql734 { height: var(--framer-aspect-ratio-supported, 886px); left: -24px; right: -25px; } .framer-zHexW .framer-oee90q { flex-direction: column; gap: 48px; height: min-content; justify-content: center; order: 4; padding: 140px 80px 140px 80px; } .framer-zHexW .framer-1f5kn9p { height: 60vh; width: 70%; } .framer-zHexW .framer-o62f1o, .framer-zHexW .framer-1u19hle { height: 10px; } .framer-zHexW .framer-1mkb8v0 { order: 10; width: 100%; } .framer-zHexW .framer-v0rivi, .framer-zHexW .framer-12fhkre { height: var(--framer-aspect-ratio-supported, 96px); } .framer-zHexW .framer-wg356u { order: 9; width: 100%; } .framer-zHexW .framer-1eefmj2-container { height: var(--framer-aspect-ratio-supported, 27px); }}`,
        `@media (max-width: 809px) { .framer-zHexW.framer-tmsleu { width: 430px; } .framer-zHexW .framer-17c926v-container { order: 13; width: 100%; } .framer-zHexW .framer-1xjaihl-container, .framer-zHexW .framer-1niuuv0 { order: 1; } .framer-zHexW .framer-y3imd { flex-direction: column; gap: 64px; height: min-content; justify-content: center; order: 2; padding: 40px 32px 40px 32px; z-index: 0; } .framer-zHexW .framer-110y1y8 { gap: 24px; width: 100%; } .framer-zHexW .framer-tqd1hm { height: 85px; left: -20px; top: -19px; width: 119px; } .framer-zHexW .framer-6vosmt { height: 44vh; width: 100%; } .framer-zHexW .framer-4h89k7 { gap: 64px; order: 3; padding: 64px 32px 64px 32px; } .framer-zHexW .framer-vh07b9 { flex: 1 0 0px; gap: 40px; width: 1px; z-index: 2; } .framer-zHexW .framer-anb070 { height: 50vh; width: 100%; } .framer-zHexW .framer-11vlqq { bottom: -115px; height: unset; left: -43px; right: -23px; top: -85px; } .framer-zHexW .framer-ue34o6, .framer-zHexW .framer-1h3bmf8 { padding: 54px 24px 24px 24px; } .framer-zHexW .framer-sql734 { height: var(--framer-aspect-ratio-supported, 498px); left: -23px; right: -22px; top: 0px; } .framer-zHexW .framer-oee90q { flex-direction: column; gap: 48px; height: min-content; justify-content: center; order: 4; padding: 80px 32px 80px 32px; } .framer-zHexW .framer-33dad0 { width: 100%; } .framer-zHexW .framer-js7hdx { gap: 12px; } .framer-zHexW .framer-1f5kn9p { height: 54vh; width: 80%; } .framer-zHexW .framer-o62f1o, .framer-zHexW .framer-1u19hle { height: 8px; } .framer-zHexW .framer-cxu4hk { order: 12; } .framer-zHexW .framer-yqfqzx, .framer-zHexW .framer-153o1z7 { height: var(--framer-aspect-ratio-supported, 49px); } .framer-zHexW .framer-15n7kp5, .framer-zHexW .framer-ri9xjs { order: 0; } .framer-zHexW .framer-19ow3to, .framer-zHexW .framer-17du9sz { order: 2; } .framer-zHexW .framer-rbrwki { order: 11; } .framer-zHexW .framer-n7oj1h-container { height: var(--framer-aspect-ratio-supported, 27px); }}`,
      ]),
      (Z = ye(Y, X, `framer-zHexW`)),
      (Z.displayName = `Page`),
      (Z.defaultProps = { height: 4949, width: 1920 }),
      (Q = [
        {
          defaultValue: 100,
          maxValue: 900,
          minValue: 100,
          name: `Weight`,
          tag: `wght`,
        },
      ]),
      ($ = [
        {
          defaultValue: 400,
          maxValue: 700,
          minValue: 300,
          name: `Weight`,
          tag: `wght`,
        },
      ]),
      ce(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Montserrat`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/WQEWGAOT5Y4ZIJZBMK7T5E3FXSE4KGYR/X4SXWKMX6HZVKZLTW363DK6FT6KM35TT/DPVLBFNJ4QU4LALI56JBIEBZHJEBGHQA.woff2`,
                variationAxes: Q,
                weight: `400`,
              },
              {
                family: `Red Rose`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/redrose/v20/QdVISTYiLBjouPgEUajvsfWwDtc3MH8yn_sDdzSsYUVUjg.woff2`,
                weight: `500`,
              },
              {
                family: `Montserrat`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/NZ67QOF3FXYLOR27ABJOZVKKBKNRMKMF/EHBFE55HTLOOJHTZSLD54GSL3EBTAFNQ/DI2GHUWG3WKRXISSCTNDMTWKWZC25UIW.woff2`,
                weight: `400`,
              },
              {
                family: `Red Rose`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/redrose/v20/QdVVSTYiLBjouPgEUbLhkwVoknQx.woff2`,
                variationAxes: $,
                weight: `400`,
              },
            ],
          },
          ...M,
          ...N,
          ...R,
          ...z,
          ...le(we),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Be = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `Framerb_Wa9cjnQ`,
            slots: [],
            annotations: {
              framerResponsiveScreen: ``,
              framerColorSyntax: `true`,
              framerIntrinsicHeight: `4949`,
              framerIntrinsicWidth: `1920`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Nz0RXJHRH":{"layout":["fixed","auto"]},"ipclDTqxD":{"layout":["fixed","auto"]},"TlatadeZ0":{"layout":["fixed","auto"]},"C9tpTcJrY":{"layout":["fixed","auto"]}}}`,
              framerComponentViewportWidth: `true`,
              framerAutoSizeImages: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerContractVersion: `1`,
              framerImmutableVariables: `true`,
              framerScrollSections: `{"oyhKFxo98":{"pattern":":oyhKFxo98","name":"viewport1"},"MC_IqxBgS":{"pattern":":MC_IqxBgS","name":"contact-us"},"L3QkkQFSo":{"pattern":":L3QkkQFSo","name":"footer"},"BV1vIiwc2":{"pattern":":BV1vIiwc2","name":"footer"},"OXQwpmPmo":{"pattern":":OXQwpmPmo","name":"footer"},"MDrXqOFfb":{"pattern":":MDrXqOFfb","name":"footer"},"cJATWqwjt":{"pattern":":cJATWqwjt","name":"contact-us"},"mblVZnJ_X":{"pattern":":mblVZnJ_X","name":"footer"},"CZnsSbsUk":{"pattern":":CZnsSbsUk","name":"contact-us"}}`,
              framerDisplayContentsDiv: `false`,
            },
          },
          Props: {
            type: `tsType`,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
Ve();
export { Be as __FramerMetadata__, Z as default };
//# sourceMappingURL=SiSzqPK_b1wfk5yfbyuPYjY0OXaxtNYaAbloU8I2jbw.xKZAH1cK.mjs.map
