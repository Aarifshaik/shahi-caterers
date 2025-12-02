import { __esmMin as e } from "./rolldown-runtime.BAw5_7tg.mjs";
import {
  Ga as t,
  X as n,
  Y as r,
  Z as i,
  ae as a,
  fe as o,
  init_jsx_runtime as s,
  init_npm_react_18_2 as c,
  init_npm_react_dom_18_2 as l,
  init_ssg_sandbox_shims as u,
  j as d,
  l as ee,
  navigator as f,
  p,
  pe as m,
  q as h,
  re as g,
  se as _,
  te as v,
  u as y,
  ue as b,
  window as x,
  x as S,
  ye as C,
} from "./react.5yPobhy_.mjs";
import {
  AnimatePresence as w,
  LayoutGroup as te,
  MotionConfigContext as T,
  animate as E,
  frame as D,
  init_framer_motion_5EXT2AMG as O,
  isMotionValue as k,
  mix as A,
  motion as j,
  useInView as ne,
  useMotionValue as re,
  useTransform as M,
  wrap as ie,
} from "./motion.B5kiQUnY.mjs";
import {
  ComponentViewportProvider as N,
  Container as P,
  ControlType as F,
  FormContainer as ae,
  FormPlainTextInput2 as I,
  GeneratedComponentContext as oe,
  Image2 as L,
  Link as R,
  PropertyOverrides2 as z,
  RenderTarget as se,
  ResolveLinks as ce,
  RichText as B,
  SVG as le,
  SmartComponentScopedContainer as ue,
  addFonts as de,
  addPropertyControls as fe,
  cx as V,
  fontStore as pe,
  getFonts as H,
  getFontsFromSharedStyle as U,
  getLoadingLazyAtYPosition as W,
  init_framer_BTRNGHWV as G,
  useActiveVariantCallback as me,
  useComponentViewport as K,
  useCustomCursors as he,
  useHydratedBreakpointVariants as ge,
  useIsInCurrentNavigationTarget as _e,
  useIsOnFramerCanvas as ve,
  useLocaleInfo as ye,
  useMetadata as be,
  useOnVariantChange as xe,
  useOverlayState as Se,
  useRouteElementId as q,
  useRouter as Ce,
  useVariantState as we,
  withCSS as Te,
  withFX as Ee,
  withOptimizedAppearEffect as De,
  withVariantAppearEffect as Oe,
} from "./framer.CK3DUZZB.mjs";
import {
  Ticker as ke,
  init_Ticker as Ae,
  init_index_es as je,
  resize as Me,
} from "./Ticker.DpV_1Tyc.mjs";
import {
  FramerImOhXeRcM as Ne,
  FramerLogBUlavO as Pe,
  Icon as Fe,
  SmoothScroll as Ie,
  className as J,
  className$1 as Le,
  className$2 as Re,
  css as ze,
  css$1 as Be,
  css$2 as Ve,
  fonts as He,
  fonts$1 as Ue,
  fonts$2 as We,
  init_Iconoir as Ge,
  init_ImOhXeRcM as Ke,
  init_JTrlLj3jx as qe,
  init_LogBUlavO as Je,
  init_Qu7GZfWqZ as Ye,
  init_SmoothScroll_Prod as Xe,
  init_kv_coXiBH as Ze,
} from "./Qu7GZfWqZ._gouOARo.mjs";
import { init_q2dk3BipV as Qe, metadata as $e } from "./q2dk3BipV.Bs8D4Tam.mjs";
let et;
  let tt;
  let nt;
  const rt = e(() => {
    (G(),
      pe.loadFonts([`CUSTOM;Perpetua Bold`]),
      (et = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Perpetua Bold`,
              source: `custom`,
              url: `https://framerusercontent.com/assets/jibqgn4LkNo2r4bU3yZMjLzpyAI.woff2`,
            },
          ],
        },
      ]),
      (tt = [
        `.framer-u2qJl .framer-styles-preset-1cedc31:not(.rich-text-wrapper), .framer-u2qJl .framer-styles-preset-1cedc31.rich-text-wrapper h2 { --framer-font-family: "Perpetua Bold", "Perpetua Bold Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 23px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, #eae4dc); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1659px) and (min-width: 810px) { .framer-u2qJl .framer-styles-preset-1cedc31:not(.rich-text-wrapper), .framer-u2qJl .framer-styles-preset-1cedc31.rich-text-wrapper h2 { --framer-font-family: "Perpetua Bold", "Perpetua Bold Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 19px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, #eae4dc); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-u2qJl .framer-styles-preset-1cedc31:not(.rich-text-wrapper), .framer-u2qJl .framer-styles-preset-1cedc31.rich-text-wrapper h2 { --framer-font-family: "Perpetua Bold", "Perpetua Bold Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, #eae4dc); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (nt = `framer-u2qJl`));
  });
function it(e, ...t) {
  const n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
let at;
  let ot;
  let st;
  let ct;
  let lt;
  let ut;
  let dt;
  let ft;
  let pt;
  let mt;
  let ht;
  let gt;
  let _t;
  let Y;
  const vt = e(() => {
    (s(),
      G(),
      O(),
      c(),
      rt(),
      (at = [`zGnj2KIEs`, `h4qnZwXq5`]),
      (ot = `framer-MavX4`),
      (st = { h4qnZwXq5: `framer-v-1yi6ax5`, zGnj2KIEs: `framer-v-15aj9mh` }),
      (ct = (e) => {
        if (typeof e !== `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (lt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ut = (e) =>
        typeof e === `object` && e && typeof e.src === `string`
          ? e
          : typeof e === `string`
            ? { src: e }
            : void 0),
      (dt = ({ value: e, children: t }) => {
        const n = g(T);
          const r = e ?? n.transition;
          const i = _(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(T.Provider, { value: i, children: t });
      }),
      (ft = j.create(S)),
      (pt = { "Variant 1": `zGnj2KIEs`, Mobile: `h4qnZwXq5` }),
      (mt = ({
        events: e,
        height: t,
        id: n,
        location: r,
        locationImage: i,
        padding: a,
        width: o,
        ...s
      }) => ({
        ...s,
        Bkz5swMXb: i ??
          s.Bkz5swMXb ?? {
            alt: ``,
            pixelHeight: 960,
            pixelWidth: 1040,
            src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/95igE6nD9AawHWS6M5c3er7QFpc_aavbqa.png`,
            srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/95igE6nD9AawHWS6M5c3er7QFpc_aavbqa.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/95igE6nD9AawHWS6M5c3er7QFpc_aavbqa.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/95igE6nD9AawHWS6M5c3er7QFpc_aavbqa.png 1040w`,
          },
        diRPtLv9G: r ?? s.diRPtLv9G ?? `Mumbai`,
        SKrmQIE2e: a ?? s.SKrmQIE2e ?? `0px`,
        variant: pt[s.variant] ?? s.variant ?? `zGnj2KIEs`,
        YfNKY4OYV: e ?? s.YfNKY4OYV ?? `Events Catered : 12`,
      })),
      (ht = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (gt = r(function (e, t) {
        const n = m(null);
          const r = t ?? n;
          const i = a();
          const { activeLocale: o, setLocale: s } = ye();
          const c = K();
          const {
            style: l,
            className: u,
            layoutId: d,
            variant: ee,
            Bkz5swMXb: f,
            diRPtLv9G: h,
            YfNKY4OYV: g,
            SKrmQIE2e: _,
            ...v
          } = mt(e);
          const {
            baseVariant: b,
            classNames: x,
            clearLoadingGesture: C,
            gestureHandlers: w,
            gestureVariant: T,
            isLoading: E,
            setGestureState: D,
            setVariant: O,
            variants: k,
          } = we({
            cycleOrder: at,
            defaultVariant: `zGnj2KIEs`,
            ref: r,
            variant: ee,
            variantClassNames: st,
          });
          const A = ht(e, k);
          const ne = [nt];
          const re = V(ot, ...ne);
        return p(te, {
          id: d ?? i,
          children: p(ft, {
            animate: k,
            initial: !1,
            children: p(dt, {
              value: lt,
              children: y(j.div, {
                ...v,
                ...w,
                className: V(re, `framer-15aj9mh`, u, x),
                "data-framer-name": `Variant 1`,
                layoutDependency: A,
                layoutId: `zGnj2KIEs`,
                ref: r,
                style: {
                  "--1jnxdt0": ct(_),
                  backdropFilter: `blur(4px)`,
                  backgroundColor: `rgba(10, 10, 10, 0.01)`,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  WebkitBackdropFilter: `blur(4px)`,
                  ...l,
                },
                ...it({ h4qnZwXq5: { "data-framer-name": `Mobile` } }, b, T),
                children: [
                  p(L, {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      sizes: `calc(${c?.width || `100vw`} - ${_ * 2}px)`,
                      ...ut(f),
                    },
                    className: `framer-1r4czqc`,
                    "data-border": !0,
                    "data-framer-name": `image`,
                    layoutDependency: A,
                    layoutId: `i5dce2ULn`,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgb(255, 255, 255)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      boxShadow: `0px -4px 40px 0px rgba(75, 58, 148, 0.06)`,
                      filter: `brightness(0.88) contrast(1) grayscale(0.26) saturate(0.86)`,
                      WebkitFilter: `brightness(0.88) contrast(1) grayscale(0.26) saturate(0.86)`,
                    },
                    ...it(
                      {
                        h4qnZwXq5: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: W((c?.y || 0) + 0 + 0),
                            sizes: c?.width || `100vw`,
                            ...ut(f),
                          },
                        },
                      },
                      b,
                      T
                    ),
                  }),
                  y(j.div, {
                    className: `framer-1dpmxcd`,
                    "data-framer-name": `Details`,
                    layoutDependency: A,
                    layoutId: `BText6OCH`,
                    style: { backgroundColor: `rgba(18, 18, 18, 0)` },
                    children: [
                      p(B, {
                        __fromCanvasComponent: !0,
                        children: p(S, {
                          children: p(j.h2, {
                            className: `framer-styles-preset-1cedc31`,
                            "data-styles-preset": `Rdqs05mWp`,
                            style: {
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-1of0zx5, var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, rgb(234, 228, 220)))`,
                            },
                            children: `Mumbai`,
                          }),
                        }),
                        className: `framer-1de2knw`,
                        "data-framer-name": `Mumbai`,
                        fonts: [`Inter`],
                        layoutDependency: A,
                        layoutId: `BplKXFRXN`,
                        style: {
                          "--extracted-1of0zx5": `var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, rgb(234, 228, 220))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: h,
                        verticalAlignment: `center`,
                        withExternalLayout: !0,
                      }),
                      p(j.div, {
                        className: `framer-1rwmiif`,
                        "data-framer-name": `Location Details`,
                        layoutDependency: A,
                        layoutId: `ojZfUIbG9`,
                        children: p(B, {
                          __fromCanvasComponent: !0,
                          children: p(S, {
                            children: p(j.p, {
                              style: {
                                "--font-selector": `RlM7TW9udHNlcnJhdC1saWdodA==`,
                                "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                "--framer-font-size": `14px`,
                                "--framer-font-weight": `300`,
                                "--framer-letter-spacing": `0.02em`,
                                "--framer-line-height": `1.4em`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, rgb(234, 228, 220)))`,
                              },
                              children: `Events Catered : 12`,
                            }),
                          }),
                          className: `framer-115gj66`,
                          "data-framer-name": `Mumbai`,
                          fonts: [`FS;Montserrat-light`],
                          layoutDependency: A,
                          layoutId: `HRexxwQFO`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, rgb(234, 228, 220))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: g,
                          verticalAlignment: `center`,
                          withExternalLayout: !0,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (_t = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-MavX4.framer-gugpo3, .framer-MavX4 .framer-gugpo3 { display: block; }`,
        `.framer-MavX4.framer-15aj9mh { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 370px; justify-content: flex-start; overflow: visible; padding: var(--1jnxdt0); position: relative; width: 260px; }`,
        `.framer-MavX4 .framer-1r4czqc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 1px; justify-content: center; overflow: hidden; padding: 20px 32px 28px 32px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MavX4 .framer-1dpmxcd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px; position: relative; width: 100%; }`,
        `.framer-MavX4 .framer-1de2knw, .framer-MavX4 .framer-115gj66 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-MavX4 .framer-1rwmiif { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-MavX4.framer-v-1yi6ax5.framer-15aj9mh { height: 340px; padding: 0px; width: 220px; }`,
        `.framer-MavX4.framer-v-1yi6ax5 .framer-1dpmxcd { padding: 20px; }`,
        ...tt,
        `.framer-MavX4[data-border="true"]::after, .framer-MavX4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (Y = Te(gt, _t, `framer-MavX4`)),
      (Y.displayName = `Location Card`),
      (Y.defaultProps = { height: 370, width: 260 }),
      fe(Y, {
        variant: {
          options: [`zGnj2KIEs`, `h4qnZwXq5`],
          optionTitles: [`Variant 1`, `Mobile`],
          title: `Variant`,
          type: F.Enum,
        },
        Bkz5swMXb: {
          __defaultAssetReference: `data:framer/asset-reference,95igE6nD9AawHWS6M5c3er7QFpc.png?originalFilename=image.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,95igE6nD9AawHWS6M5c3er7QFpc.png?originalFilename=image.png&preferredSize=auto`,
          },
          title: `Location Image`,
          type: F.ResponsiveImage,
        },
        diRPtLv9G: {
          defaultValue: `Mumbai`,
          displayTextArea: !1,
          title: `Location `,
          type: F.String,
        },
        YfNKY4OYV: {
          defaultValue: `Events Catered : 12`,
          displayTextArea: !1,
          title: `Events`,
          type: F.String,
        },
        SKrmQIE2e: { defaultValue: `0px`, title: `Padding`, type: F.Padding },
      }),
      de(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                family: `Montserrat`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/JBAX5LNUCKEVXKRK3ARXNMEMQYQYP6WR/P3OTF2DNFMTAXKSAW4JNN6DPWEDDI5MN/4IO2HK2EZ7GHCZN7I3I4WKBAO7IH72SS.woff2`,
                weight: `300`,
              },
            ],
          },
          ...U(et),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
  let yt;
  let bt;
  let xt;
  let St;
  let Ct;
  const wt = e(() => {
    (G(),
      (yt = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (bt = {
        ...yt,
        borderRadius: 6,
        background: `rgba(136, 85, 255, 0.3)`,
        color: `#85F`,
        border: `1px dashed #85F`,
        flexDirection: `column`,
      }),
      (xt = {
        onClick: { type: F.EventHandler },
        onMouseEnter: { type: F.EventHandler },
        onMouseLeave: { type: F.EventHandler },
      }),
      (St = {
        type: F.Number,
        title: `Font Size`,
        min: 2,
        max: 200,
        step: 1,
        displayStepper: !0,
      }),
      (Ct = {
        font: {
          type: F.Boolean,
          title: `Font`,
          defaultValue: !1,
          disabledTitle: `Default`,
          enabledTitle: `Custom`,
        },
        fontFamily: {
          type: F.String,
          title: `Family`,
          placeholder: `Inter`,
          hidden: ({ font: e }) => !e,
        },
        fontWeight: {
          type: F.Enum,
          title: `Weight`,
          options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          optionTitles: [
            `Thin`,
            `Extra-light`,
            `Light`,
            `Regular`,
            `Medium`,
            `Semi-bold`,
            `Bold`,
            `Extra-bold`,
            `Black`,
          ],
          hidden: ({ font: e }) => !e,
        },
      }));
  });
function Tt(e, t) {
  return Dt(!0, e, t);
}
function Et(e, t) {
  return Dt(!1, e, t);
}
function Dt(e, t, n = !0) {
  const r = _e();
  b(() => {
    n && r === e && t();
  }, [r]);
}
const Ot = e(() => {
    (G(), c());
  });
  const kt = e(() => {
    c();
  });
  const At = e(() => {
    G();
  });
  const jt = e(() => {
    G();
  });
  const Mt = e(() => {
    c();
  });
  const Nt = e(() => {
    G();
  });
  let Pt;
  let Ft;
  const It = e(() => {
    (u(),
      c(),
      (Pt = () => {
        if (f !== void 0) {
          const e = f.userAgent.toLowerCase();
            const t =
              (e.indexOf(`safari`) > -1 ||
                e.indexOf(`framermobile`) > -1 ||
                e.indexOf(`framerx`) > -1) &&
              e.indexOf(`chrome`) < 0;
          return t;
        } else return !1;
      }),
      (Ft = () => _(() => Pt(), [])));
  });
  const Lt = e(() => {
    (c(), jt());
  });
  const Rt = e(() => {
    (c(), G(), jt(), kt());
  });
  const zt = e(() => {
    (G(), c(), wt());
  });
function Bt() {
  const e = _(() => se.current(), []);
  return e;
}
function Vt() {
  const e = _(() => se.current() === se.canvas, []);
  return e;
}
const Ht = e(() => {
    (c(), G());
  });
  const Ut = e(() => {
    c();
  });
function Wt(e) {
  const {
      borderRadius: t,
      isMixedBorderRadius: n,
      topLeftRadius: r,
      topRightRadius: i,
      bottomRightRadius: a,
      bottomLeftRadius: o,
    } = e;
    const s = _(
      () => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`),
      [t, n, r, i, a, o]
    );
  return s;
}
let Gt;
  let Kt;
  const qt = e(() => {
    (c(),
      G(),
      (Gt = {
        borderRadius: {
          title: `Radius`,
          type: F.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [
            `topLeftRadius`,
            `topRightRadius`,
            `bottomRightRadius`,
            `bottomLeftRadius`,
          ],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      (Kt = {
        padding: {
          type: F.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [
            `paddingTop`,
            `paddingRight`,
            `paddingBottom`,
            `paddingLeft`,
          ],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
          title: `Padding`,
        },
      }));
  });
  const Jt = e(() => {
    (wt(),
      Ot(),
      kt(),
      At(),
      jt(),
      Mt(),
      Nt(),
      It(),
      Lt(),
      Rt(),
      zt(),
      Ht(),
      Ut(),
      qt());
  });
function Yt(e) {
  const {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function Xt(e) {
  const t = Yt(e);
  return p(an, { ...t });
}
function Zt(e) {
  const t = _e();
    const n = m(!1);
    const r = m(!1);
    const i = v((t) => {
      if (!e.current) return;
      const n = (t === 1 ? 0.999 : t) * e.current.duration;
        const r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
    const a = v(() => {
      const i = e.current;
      if (!i) return;
      i.preload = `auto`;
      const a =
        i.currentTime > 0 &&
        i.onplaying &&
        !i.paused &&
        !i.ended &&
        i.readyState >= i.HAVE_CURRENT_DATA;
      !a &&
        i &&
        !n.current &&
        t &&
        ((n.current = !0),
        (r.current = !0),
        i
          .play()
          .catch((e) => {})
          .finally(() => (n.current = !1)));
    }, []);
    const o = v(() => {
      !e.current || n.current || (e.current.pause(), (r.current = !1));
    }, []);
  return { play: a, pause: o, setProgress: i, isPlaying: r };
}
function Qt({
  playingProp: e,
  muted: t,
  loop: n,
  playsinline: r,
  controls: i,
}) {
  const [a] = C(() => e);
    const [o, s] = C(!1);
  e !== a && !o && s(!0);
  const c = a && t && n && r && !i && !o;
    let l;
  return ((l = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`), l);
}
function $t(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function en(e) {
  const t = e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [];
  return t.map($t).join(` `);
}
let tn;
  let nn;
  let rn;
  let an;
  let on;
  const sn = e(() => {
    (s(),
      G(),
      O(),
      Jt(),
      c(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((tn ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((nn ||= {})),
      (rn = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (an = n(function (e) {
        const {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: i = !1,
            controls: a = !1,
            playing: o = !0,
            loop: s = !0,
            muted: c = !0,
            playsinline: l = !0,
            restartOnEnter: u = !1,
            objectFit: d = `cover`,
            backgroundColor: ee = `rgba(0,0,0,0)`,
            radius: f = 0,
            volume: h = 25,
            startTime: g = 0,
            poster: v,
            playing: y,
            progress: x,
            onSeeked: S,
            onPause: C,
            onPlay: w,
            onEnd: te,
            onClick: T,
            onMouseEnter: E,
            onMouseLeave: D,
            onMouseDown: O,
            onMouseUp: A,
          } = e;
          const j = m();
          const re = Ft();
          const M = m(null);
          const ie = m(null);
          const N = Vt();
          const P = Bt();
          const F = N || P === se.export;
          const ae = Wt(e);
          const I = F
            ? `no-autoplay`
            : Qt({
                playingProp: y,
                muted: c,
                loop: s,
                playsinline: l,
                controls: a,
              });
          const oe = F ? !0 : ne(j);
          const L = F ? !1 : ne(j, { margin: `10%`, once: !0 });
          const R = g === 100 ? 99.9 : g;
          const { play: z, pause: ce, setProgress: B, isPlaying: le } = Zt(j);
        (b(() => {
          F || (I !== `on-viewport` && (y ? z() : ce()));
        }, [I, y]),
          b(() => {
            F ||
              (oe && y && I !== `no-autoplay` && z(),
              I === `on-viewport` && ce());
          }, [I, oe, y]),
          b(() => {
            !N || v || i || R || !j.current || (j.current.currentTime = 0.01);
          }, [i, v, R]));
        const ue = m(!1);
        (b(() => {
          if (!ue.current) {
            ue.current = !0;
            return;
          }
          const e = k(x) ? x.get() : (x ?? 0) * 0.01;
          B((e ?? 0) || (R ?? 0) / 100);
        }, [R, r, n, x]),
          b(() => {
            if (k(x)) return x.on(`change`, (e) => B(e));
          }, [x]),
          Tt(() => {
            M.current !== null &&
              j.current &&
              ((!ie && s) || !M.current) &&
              z();
          }),
          Et(() => {
            j.current &&
              ((ie.current = j.current.ended),
              (M.current = j.current.paused),
              ce());
          }));
        const de = _(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return r + ``;
        }, [t, r, n, R]);
        (b(() => {
          re && j.current && I === `on-mount` && setTimeout(() => z(), 50);
        }, []),
          b(() => {
            j.current && !c && (j.current.volume = (h ?? 0) / 100);
          }, [h]));
        const fe = () => {
          const e = j.current;
          e &&
            (e.currentTime < 0.3 && R > 0 && B((R ?? 0) * 0.01),
            (le.current ||
              I === `on-mount` ||
              (y && I === `on-viewport` && oe)) &&
              z());
        };
        return p(`video`, {
          onClick: T,
          onMouseEnter: E,
          onMouseLeave: D,
          onMouseDown: O,
          onMouseUp: A,
          src: de,
          loop: s,
          ref: j,
          onSeeked: (e) => S?.(e),
          onPause: (e) => C?.(e),
          onPlay: (e) => w?.(e),
          onEnded: (e) => te?.(e),
          autoPlay:
            le.current || I === `on-mount` || (y && I === `on-viewport` && oe),
          preload: le.current
            ? `auto`
            : F && !v
              ? `metadata`
              : I !== `on-mount` && !L
                ? `none`
                : `metadata`,
          poster:
            i && !r && n === rn
              ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
              : i && v
                ? v
                : void 0,
          onLoadedData: fe,
          controls: a,
          muted: F ? !0 : c,
          playsInline: l,
          style: {
            cursor: T ? `pointer` : `auto`,
            width: `100%`,
            height: `100%`,
            borderRadius: ae,
            display: `block`,
            objectFit: d,
            backgroundColor: ee,
            objectPosition: `50% 50%`,
          },
        });
      })),
      (Xt.displayName = `Video`),
      (on = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      fe(Xt, {
        srcType: {
          type: F.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: F.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: F.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: {
          type: F.Boolean,
          title: `Playing`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        ...Gt,
        posterEnabled: {
          type: F.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: F.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: {
          type: F.Color,
          title: `Background`,
          defaultValue: `rgba(0,0,0,0)`,
        },
        startTime: {
          title: `Start Time`,
          type: F.Number,
          min: 0,
          max: 100,
          step: 0.1,
          unit: `%`,
        },
        loop: {
          type: F.Boolean,
          title: `Loop`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        objectFit: {
          type: F.Enum,
          title: `Fit`,
          options: on,
          optionTitles: on.map(en),
        },
        controls: {
          type: F.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: {
          type: F.Boolean,
          title: `Muted`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        volume: {
          type: F.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: F.EventHandler },
        onSeeked: { type: F.EventHandler },
        onPause: { type: F.EventHandler },
        onPlay: { type: F.EventHandler },
        ...xt,
      }));
  });
  let cn;
  let ln;
  let un;
  const dn = e(() => {
    (G(),
      pe.loadFonts([
        `CUSTOM;Perpetua Regular`,
        `CUSTOM;Perpetua Regular`,
        `CUSTOM;Perpetua Titling MT Light`,
      ]),
      (cn = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Perpetua Regular`,
              source: `custom`,
              url: `https://framerusercontent.com/assets/1iG13iaGG8N9Orw3a8xSD6zoY.woff2`,
            },
            {
              family: `Perpetua Titling MT Light`,
              source: `custom`,
              url: `https://framerusercontent.com/assets/erHglFRaHBl1xEXuEABNCMiv4ek.woff2`,
            },
          ],
        },
      ]),
      (ln = [
        `.framer-XBMNq .framer-styles-preset-ia95en:not(.rich-text-wrapper), .framer-XBMNq .framer-styles-preset-ia95en.rich-text-wrapper h1 { --framer-font-family: "Perpetua Regular", "Perpetua Regular Placeholder", sans-serif; --framer-font-family-bold: "Perpetua Regular", "Perpetua Regular Placeholder", sans-serif; --framer-font-family-italic: "Perpetua Titling MT Light", "Perpetua Titling MT Light Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 76px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }`,
        `@media (max-width: 1659px) and (min-width: 810px) { .framer-XBMNq .framer-styles-preset-ia95en:not(.rich-text-wrapper), .framer-XBMNq .framer-styles-preset-ia95en.rich-text-wrapper h1 { --framer-font-family: "Perpetua Regular", "Perpetua Regular Placeholder", sans-serif; --framer-font-family-bold: "Perpetua Regular", "Perpetua Regular Placeholder", sans-serif; --framer-font-family-italic: "Perpetua Titling MT Light", "Perpetua Titling MT Light Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 62px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-XBMNq .framer-styles-preset-ia95en:not(.rich-text-wrapper), .framer-XBMNq .framer-styles-preset-ia95en.rich-text-wrapper h1 { --framer-font-family: "Perpetua Regular", "Perpetua Regular Placeholder", sans-serif; --framer-font-family-bold: "Perpetua Regular", "Perpetua Regular Placeholder", sans-serif; --framer-font-family-italic: "Perpetua Titling MT Light", "Perpetua Titling MT Light Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 50px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }`,
      ]),
      (un = `framer-XBMNq`));
  });
  let fn;
  let pn;
  let mn;
  let hn;
  const gn = e(() => {
    (G(),
      pe.loadFonts([
        `FS;Montserrat-variable`,
        `FS;Montserrat-variableVF=IndnaHQiIDQwMA==`,
        `FS;Montserrat-variableVF=IndnaHQiIDQwMA==`,
        `FS;Montserrat-variableVF=IndnaHQiIDQwMA==`,
      ]),
      (fn = [
        {
          defaultValue: 100,
          maxValue: 900,
          minValue: 100,
          name: `Weight`,
          tag: `wght`,
        },
      ]),
      (pn = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Montserrat`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/WQEWGAOT5Y4ZIJZBMK7T5E3FXSE4KGYR/X4SXWKMX6HZVKZLTW363DK6FT6KM35TT/DPVLBFNJ4QU4LALI56JBIEBZHJEBGHQA.woff2`,
              variationAxes: fn,
              weight: `400`,
            },
          ],
        },
      ]),
      (mn = [
        `.framer-JhD51 .framer-styles-preset-1yiy8uy:not(.rich-text-wrapper), .framer-JhD51 .framer-styles-preset-1yiy8uy.rich-text-wrapper h5 { --framer-font-family: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-bold: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-bold-italic: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-italic: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1659px) and (min-width: 810px) { .framer-JhD51 .framer-styles-preset-1yiy8uy:not(.rich-text-wrapper), .framer-JhD51 .framer-styles-preset-1yiy8uy.rich-text-wrapper h5 { --framer-font-family: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-bold: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-bold-italic: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-italic: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-JhD51 .framer-styles-preset-1yiy8uy:not(.rich-text-wrapper), .framer-JhD51 .framer-styles-preset-1yiy8uy.rich-text-wrapper h5 { --framer-font-family: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-bold: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-bold-italic: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-italic: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (hn = `framer-JhD51`));
  });
function _n(e, ...t) {
  const n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
let vn;
  let yn;
  let bn;
  let xn;
  let Sn;
  let Cn;
  let wn;
  let Tn;
  let En;
  let Dn;
  let On;
  let kn;
  let An;
  let jn;
  const Mn = e(() => {
    (s(),
      G(),
      O(),
      c(),
      (vn = [
        `uk9X7KD8Y`,
        `TRssFr3M6`,
        `JjXiEhps4`,
        `AVF807GiF`,
        `Brg7LNvES`,
        `ze2JbL2qb`,
        `p6Af4deHz`,
        `easqzHZB0`,
        `htvvayoNd`,
        `WnYHuISJI`,
        `J1R3yFYYv`,
        `Nw1ZXk7WM`,
        `Koqv4ENFE`,
        `ZwfWqI3qz`,
        `waFYYRsFX`,
      ]),
      (yn = `framer-geGIc`),
      (bn = {
        AVF807GiF: `framer-v-19kn0xf`,
        Brg7LNvES: `framer-v-p5ntsp`,
        easqzHZB0: `framer-v-6iz9th`,
        htvvayoNd: `framer-v-1sozl08`,
        J1R3yFYYv: `framer-v-x7dpc5`,
        JjXiEhps4: `framer-v-1i9k8kt`,
        Koqv4ENFE: `framer-v-9wq8hl`,
        Nw1ZXk7WM: `framer-v-1g3uo5j`,
        p6Af4deHz: `framer-v-eeds73`,
        TRssFr3M6: `framer-v-1m7xxi3`,
        uk9X7KD8Y: `framer-v-bexfmq`,
        waFYYRsFX: `framer-v-1pczyg5`,
        WnYHuISJI: `framer-v-1vtkq4d`,
        ze2JbL2qb: `framer-v-1a2x41r`,
        ZwfWqI3qz: `framer-v-il7b5u`,
      }),
      (xn = {
        delay: 0,
        duration: 1.5,
        ease: [0.5, 0, 0.88, 0.77],
        type: `tween`,
      }),
      (Sn = {
        delay: 0,
        duration: 0.5,
        ease: [0.5, 0, 0.88, 0.77],
        type: `tween`,
      }),
      (Cn = (e, t) => `translateX(-50%) ${t}`),
      (wn = ({ value: e, children: t }) => {
        const n = g(T);
          const r = e ?? n.transition;
          const i = _(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(T.Provider, { value: i, children: t });
      }),
      (Tn = j.create(S)),
      (En = {
        "Desktop V1": `uk9X7KD8Y`,
        "Desktop V2": `TRssFr3M6`,
        "Desktop V3": `JjXiEhps4`,
        "Laptop S V1": `p6Af4deHz`,
        "Laptop S V2": `easqzHZB0`,
        "Laptop S V3": `htvvayoNd`,
        "Laptop V1": `AVF807GiF`,
        "Laptop V2": `Brg7LNvES`,
        "Laptop V3": `ze2JbL2qb`,
        "Mob V1": `Koqv4ENFE`,
        "Mob V2": `ZwfWqI3qz`,
        "Mob V3": `waFYYRsFX`,
        "Tablet V1": `WnYHuISJI`,
        "Tablet V2": `J1R3yFYYv`,
        "Tablet V3": `Nw1ZXk7WM`,
      }),
      (Dn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: En[r.variant] ?? r.variant ?? `uk9X7KD8Y`,
      })),
      (On = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (kn = r(function (e, t) {
        const n = m(null);
          const r = t ?? n;
          const i = a();
          const { activeLocale: o, setLocale: s } = ye();
        K();
        const { style: c, className: l, layoutId: u, variant: d, ...ee } = Dn(e);
          const {
            baseVariant: f,
            classNames: h,
            clearLoadingGesture: g,
            gestureHandlers: _,
            gestureVariant: v,
            isLoading: b,
            setGestureState: x,
            setVariant: S,
            variants: C,
          } = we({
            cycleOrder: vn,
            defaultVariant: `uk9X7KD8Y`,
            ref: r,
            variant: d,
            variantClassNames: bn,
          });
          const w = On(e, C);
          const { activeVariantCallback: T, delay: E } = me(f);
          const D = T(async (...e) => {
            await E(() => S(`TRssFr3M6`, !0), 1200);
          });
          const O = T(async (...e) => {
            S(`JjXiEhps4`, !0);
          });
          const k = T(async (...e) => {
            await E(() => S(`Brg7LNvES`, !0), 1200);
          });
          const A = T(async (...e) => {
            S(`ze2JbL2qb`, !0);
          });
          const ne = T(async (...e) => {
            await E(() => S(`easqzHZB0`, !0), 1200);
          });
          const re = T(async (...e) => {
            S(`htvvayoNd`, !0);
          });
          const M = T(async (...e) => {
            await E(() => S(`J1R3yFYYv`, !0), 1200);
          });
          const ie = T(async (...e) => {
            S(`Nw1ZXk7WM`, !0);
          });
          const N = T(async (...e) => {
            await E(() => S(`ZwfWqI3qz`, !0), 1200);
          });
          const P = T(async (...e) => {
            S(`waFYYRsFX`, !0);
          });
        xe(f, {
          AVF807GiF: k,
          Brg7LNvES: A,
          default: D,
          easqzHZB0: re,
          htvvayoNd: void 0,
          J1R3yFYYv: ie,
          JjXiEhps4: void 0,
          Koqv4ENFE: N,
          Nw1ZXk7WM: void 0,
          p6Af4deHz: ne,
          TRssFr3M6: O,
          waFYYRsFX: void 0,
          WnYHuISJI: M,
          ze2JbL2qb: void 0,
          ZwfWqI3qz: P,
        });
        const F = [];
          const ae = V(yn, ...F);
          const I = () =>
            ![
              `p6Af4deHz`,
              `easqzHZB0`,
              `htvvayoNd`,
              `WnYHuISJI`,
              `J1R3yFYYv`,
              `Nw1ZXk7WM`,
              `Koqv4ENFE`,
              `ZwfWqI3qz`,
              `waFYYRsFX`,
            ].includes(f);
          const oe = () =>
            !![
              `p6Af4deHz`,
              `easqzHZB0`,
              `htvvayoNd`,
              `WnYHuISJI`,
              `J1R3yFYYv`,
              `Nw1ZXk7WM`,
              `Koqv4ENFE`,
              `ZwfWqI3qz`,
              `waFYYRsFX`,
            ].includes(f);
        return p(te, {
          id: u ?? i,
          children: p(Tn, {
            animate: C,
            initial: !1,
            children: p(wn, {
              value: xn,
              ..._n(
                {
                  Brg7LNvES: { value: Sn },
                  easqzHZB0: { value: Sn },
                  J1R3yFYYv: { value: Sn },
                  TRssFr3M6: { value: Sn },
                  ZwfWqI3qz: { value: Sn },
                },
                f,
                v
              ),
              children: p(j.div, {
                ...ee,
                ..._,
                className: V(ae, `framer-bexfmq`, l, h),
                "data-framer-name": `Desktop V1`,
                "data-highlight": !0,
                layoutDependency: w,
                layoutId: `uk9X7KD8Y`,
                ref: r,
                style: { ...c },
                ..._n(
                  {
                    AVF807GiF: { "data-framer-name": `Laptop V1` },
                    Brg7LNvES: { "data-framer-name": `Laptop V2` },
                    easqzHZB0: { "data-framer-name": `Laptop S V2` },
                    htvvayoNd: {
                      "data-framer-name": `Laptop S V3`,
                      "data-highlight": void 0,
                    },
                    J1R3yFYYv: { "data-framer-name": `Tablet V2` },
                    JjXiEhps4: {
                      "data-framer-name": `Desktop V3`,
                      "data-highlight": void 0,
                    },
                    Koqv4ENFE: { "data-framer-name": `Mob V1` },
                    Nw1ZXk7WM: {
                      "data-framer-name": `Tablet V3`,
                      "data-highlight": void 0,
                    },
                    p6Af4deHz: { "data-framer-name": `Laptop S V1` },
                    TRssFr3M6: { "data-framer-name": `Desktop V2` },
                    waFYYRsFX: {
                      "data-framer-name": `Mob V3`,
                      "data-highlight": void 0,
                    },
                    WnYHuISJI: { "data-framer-name": `Tablet V1` },
                    ze2JbL2qb: {
                      "data-framer-name": `Laptop V3`,
                      "data-highlight": void 0,
                    },
                    ZwfWqI3qz: { "data-framer-name": `Mob V2` },
                  },
                  f,
                  v
                ),
                children: y(j.div, {
                  className: `framer-7ktki2`,
                  "data-framer-name": `Logo `,
                  layoutDependency: w,
                  layoutId: `tQrtDdr3l`,
                  children: [
                    I() &&
                      p(le, {
                        className: `framer-8o1eeu`,
                        "data-framer-name": `Shahi Caterers Name  Silhoute`,
                        fill: `rgba(0, 0, 0, 0)`,
                        intrinsicHeight: 1080,
                        intrinsicWidth: 1920,
                        layoutDependency: w,
                        layoutId: `JpxzJpEII`,
                        svg: `<svg width="1920" height="1080" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0v1080h1920V0ZM892.749 431.92h5.167v43.065h-5.481c-1.252-11.902-5.585-21.193-12.997-27.875-7.308-6.681-16.547-10.022-27.718-10.022-9.918 0-17.904 2.506-23.96 7.517-6.055 5.011-9.082 11.692-9.082 20.044 0 7.726 2.505 14.773 7.516 21.141 5.012 6.368 15.869 14.564 32.573 24.586 19.418 11.588 32.468 21.715 39.149 30.38 6.682 8.665 10.023 18.583 10.023 29.754 0 14.407-5.116 26.726-15.347 36.957-10.231 10.231-22.55 15.347-36.957 15.347-8.352 0-19.001-2.297-31.946-6.891-5.324-1.879-8.717-2.819-10.179-2.819-3.028 0-5.377 2.349-7.047 7.047h-5.324V570.51h5.324c.104 13.676 4.541 24.638 13.311 32.885 8.874 8.248 19.209 12.372 31.006 12.372 11.171 0 20.097-2.976 26.779-8.926 6.786-5.951 10.179-13.886 10.179-23.803 0-7.413-2.767-14.512-8.3-21.298-5.533-6.786-17.069-15.555-34.608-26.308-14.303-8.874-23.856-15.869-28.658-20.984-4.802-5.116-8.352-10.701-10.649-16.757-2.296-6.159-3.445-12.893-3.445-20.201 0-14.094 4.594-25.525 13.781-34.295 9.291-8.769 21.349-13.154 36.174-13.154 8.143 0 17.017 1.618 26.622 4.855 4.489 1.461 7.621 2.192 9.396 2.192 1.461 0 2.453-.313 2.975-.94.522-.626 1.096-2.035 1.723-4.228ZM670.028 612.791v5.481h64.675v-5.481c-7.516 0-12.997-1.357-16.442-4.071-3.341-2.715-6.577-8.718-9.709-18.009l-53.244-158.164H636.36l-50.738 151.43c-3.863 11.171-7.673 18.531-11.432 22.08-3.758 3.55-9.03 5.795-15.816 6.734v5.481h47.449v-5.481c-9.709-.209-14.564-4.176-14.564-11.901 0-4.176 1.566-10.91 4.698-20.201l12.528-36.801h59.194l16.756 50.894c.94 2.61 1.41 4.959 1.41 7.047 0 7.308-5.272 10.962-15.817 10.962Zm-6.42-80.178H611.93l25.683-77.829 25.995 77.829Zm-174.645-98.031h-43.378l-59.507 144.541-58.724-144.541h-46.51v5.325c9.5 1.566 17.487 5.846 23.96 12.841l-11.119 126.375c-1.253 12.841-3.602 21.401-7.047 25.682-3.341 4.28-8.822 6.942-16.443 7.986v5.481h57.159v-5.481c-15.973-2.923-23.96-12.267-23.96-28.031 0-1.566.052-3.236.157-5.011l10.335-113.221 62.17 151.744h4.854l62.796-151.744 9.709 118.702c.105 1.775.157 3.393.157 4.854 0 7.1-1.462 12.372-4.385 15.817-2.819 3.445-7.725 5.742-14.72 6.89v5.481h66.084v-5.481c-8.038-.731-13.624-3.08-16.756-7.047-3.027-3.967-5.063-11.953-6.107-23.959l-9.239-113.221a59.035 59.035 0 0 1-.157-4.228c0-15.973 6.89-24.116 20.671-24.429v-5.325Zm517.357 22.864c-18.792 18.165-28.188 40.872-28.188 68.12 0 27.248 9.448 50.268 28.348 69.06 18.89 18.792 42.02 28.188 69.37 28.188 27.46 0 50.69-9.396 69.69-28.188 19-18.792 28.5-41.812 28.5-69.06 0-26.726-9.45-49.328-28.35-67.807-18.79-18.479-41.81-27.718-69.06-27.718-28.08 0-51.52 9.135-70.31 27.405Zm19.11 133.578c-12.74-16.599-19.11-38.314-19.11-65.145 0-26.83 6.42-48.336 19.26-64.518 12.95-16.182 30.17-24.273 51.68-24.273 20.25 0 36.75 8.247 49.48 24.742 12.74 16.391 19.11 38.158 19.11 65.302 0 25.264-6.53 46.353-19.58 63.266-12.94 16.912-29.85 25.369-50.73 25.369-20.67 0-37.38-8.248-50.11-24.743Zm280.34-57.785h-14.87v50.425c0 10.857 1.51 18.426 4.54 22.707 3.13 4.28 8.61 6.42 16.44 6.42v5.481h-66.08v-5.481c8.14 0 13.62-2.14 16.44-6.42 2.92-4.281 4.38-11.85 4.38-22.707v-115.1c0-10.857-1.41-18.322-4.22-22.393-2.82-4.176-8.36-6.264-16.6-6.264v-5.325h75.32c18.58 0 33.41 4.542 44.47 13.624 11.17 8.979 16.76 20.463 16.76 34.452 0 22.55-12.63 37.584-37.9 45.1 5.54 3.55 10.91 8.457 16.13 14.721 5.33 6.159 12.27 16.442 20.83 30.849 9.61 15.974 17.12 26.466 22.55 31.477 5.43 4.906 11.07 7.569 16.91 7.986v5.481h-37.58c-7.73-9.396-17.07-23.072-28.03-41.029-11.69-18.896-20.88-30.954-27.56-36.174-6.58-5.22-13.89-7.83-21.93-7.83Zm4.39-91.61h-19.26v83.937h22.55c13.46 0 24.01-3.863 31.63-11.588 7.73-7.726 11.59-17.957 11.59-30.694 0-12.423-4.28-22.445-12.84-30.066-8.46-7.726-19.68-11.589-33.67-11.589Zm275.81 171.162v5.481h64.67v-5.481c-7.52 0-13-1.357-16.44-4.071-3.34-2.715-6.58-8.718-9.71-18.009l-53.24-158.164h-18.95l-50.74 151.43c-3.86 11.171-7.67 18.531-11.43 22.08-3.76 3.55-9.03 5.795-15.82 6.734v5.481h47.45v-5.481c-9.71-.209-14.56-4.176-14.56-11.901 0-4.176 1.56-10.91 4.69-20.201l12.53-36.801h59.2l16.75 50.894c.94 2.61 1.41 4.959 1.41 7.047 0 7.308-5.27 10.962-15.81 10.962Zm-6.43-80.178h-51.67l25.68-77.829 25.99 77.829Z" fill="#F9F3F0"/></svg>`,
                        withExternalLayout: !0,
                      }),
                    oe() &&
                      p(le, {
                        className: `framer-104r8qi`,
                        "data-framer-name": `Shahi Caterers Mob`,
                        fill: `black`,
                        intrinsicHeight: 1392,
                        intrinsicWidth: 754,
                        layoutDependency: w,
                        layoutId: `uG7WPKDs9`,
                        svg: `<svg width="754" height="1392" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M754 1392H0V0h754v1392ZM334.601 652.818c-5.822 0-10.558 1.723-14.206 5.166-3.608 3.444-5.413 7.934-5.413 13.468 0 2.87.452 5.514 1.354 7.933.902 2.378 2.296 4.571 4.182 6.58 1.885 2.009 5.637 4.756 11.253 8.241 6.888 4.223 11.418 7.666 13.591 10.331 2.173 2.665 3.26 5.453 3.26 8.364 0 3.895-1.332 7.011-3.997 9.348-2.624 2.337-6.13 3.505-10.517 3.505-4.632 0-8.692-1.62-12.176-4.858-3.444-3.239-5.186-7.544-5.227-12.915h-2.091v19.496h2.091c.656-1.845 1.578-2.768 2.767-2.768.574 0 1.907.368 3.998 1.106 5.083 1.804 9.265 2.706 12.545 2.706 5.657 0 10.496-2.008 14.513-6.026 4.018-4.018 6.027-8.856 6.027-14.514 0-4.386-1.312-8.281-3.936-11.684-2.624-3.403-7.748-7.38-15.374-11.931-6.56-3.936-10.824-7.154-12.792-9.655-1.968-2.501-2.951-5.268-2.951-8.302 0-3.28 1.188-5.904 3.566-7.872s5.515-2.951 9.41-2.951c4.386 0 8.014 1.312 10.884 3.935 2.911 2.624 4.613 6.273 5.105 10.947h2.152v-16.912h-2.029c-.246.861-.472 1.415-.677 1.661-.205.246-.594.369-1.168.369-.697 0-1.927-.287-3.69-.861-3.772-1.271-7.257-1.907-10.454-1.907Zm88.202 0c-11.029 0-20.233 3.587-27.613 10.762-7.379 7.134-11.069 16.051-11.069 26.752 0 10.7 3.71 19.741 11.131 27.12 7.421 7.38 16.502 11.069 27.243 11.069 10.783 0 19.905-3.689 27.366-11.069 7.462-7.379 11.193-16.42 11.193-27.12 0-10.496-3.71-19.372-11.131-26.629-7.38-7.256-16.42-10.885-27.12-10.885Zm-312.513 1.784v2.09c3.731.615 6.867 2.297 9.409 5.043l-4.366 49.628c-.492 5.043-1.415 8.405-2.768 10.086-1.311 1.681-3.464 2.727-6.457 3.137v2.152h22.447v-2.152c-6.273-1.148-9.409-4.817-9.409-11.008 0-.615.02-1.272.061-1.969l4.059-44.462 24.415 59.591h1.906l24.66-59.591 3.813 46.615c.041.697.061 1.333.061 1.907 0 2.788-.574 4.858-1.722 6.211-1.107 1.353-3.033 2.255-5.78 2.706v2.152h25.951v-2.152c-3.156-.287-5.35-1.21-6.58-2.768-1.189-1.558-1.988-4.694-2.398-9.409l-3.628-44.463a23.32 23.32 0 0 1-.062-1.66c0-6.272 2.706-9.47 8.118-9.594v-2.09h-17.035l-23.369 56.761-23.061-56.761H110.29Zm139.613-.8-19.924 59.469c-1.517 4.386-3.014 7.276-4.49 8.67-1.476 1.394-3.546 2.276-6.211 2.645v2.152h18.634v-2.152c-3.813-.082-5.72-1.64-5.72-4.674 0-1.64.615-4.285 1.845-7.933l4.92-14.453h23.246l6.58 19.988c.369 1.025.554 1.947.554 2.767 0 2.87-2.071 4.305-6.211 4.305v2.152h25.398v-2.152c-2.951 0-5.104-.534-6.457-1.6-1.312-1.066-2.583-3.422-3.813-7.071l-20.909-62.113h-7.442Zm239.331.8v2.09c3.239 0 5.412.821 6.519 2.46 1.107 1.599 1.661 4.531 1.661 8.794v45.201c0 4.264-.575 7.237-1.723 8.917-1.107 1.681-3.259 2.522-6.457 2.522v2.152h25.953v-2.152c-3.075 0-5.228-.841-6.458-2.522-1.188-1.68-1.783-4.653-1.783-8.917v-19.802h5.842c3.157 0 6.027 1.025 8.609 3.075 2.624 2.05 6.233 6.785 10.825 14.206 4.304 7.052 7.974 12.422 11.007 16.112h14.76v-2.152c-2.296-.164-4.51-1.21-6.642-3.137-2.132-1.968-5.084-6.089-8.856-12.361-3.361-5.657-6.088-9.695-8.179-12.114-2.049-2.46-4.161-4.388-6.333-5.782 9.921-2.952 14.881-8.855 14.881-17.711 0-5.493-2.193-10.003-6.58-13.529-4.346-3.567-10.168-5.35-17.466-5.35h-29.58Zm120.366-.8-19.925 59.469c-1.517 4.386-3.014 7.276-4.489 8.67-1.476 1.394-3.547 2.276-6.211 2.645v2.152h18.632v-2.152c-3.812-.082-5.718-1.64-5.718-4.674 0-1.64.614-4.285 1.844-7.933l4.92-14.453h23.246l6.58 19.988c.369 1.025.554 1.947.554 2.767 0 2.87-2.07 4.305-6.211 4.305v2.152h25.399v-2.152c-2.952 0-5.105-.534-6.458-1.6-1.312-1.066-2.583-3.423-3.813-7.071l-20.909-62.113H609.6Zm-186.551 1.784c7.953 0 14.431 3.238 19.432 9.716 5.002 6.436 7.503 14.985 7.503 25.644 0 9.922-2.562 18.204-7.687 24.846-5.084 6.641-11.725 9.962-19.925 9.962-8.118 0-14.677-3.239-19.679-9.717-5.001-6.519-7.502-15.046-7.503-25.582 0-10.536 2.522-18.983 7.565-25.338 5.084-6.354 11.848-9.531 20.294-9.531Zm-162.445 37.513h-20.293l10.085-30.564 10.208 30.564Zm359.697 0h-20.295l10.086-30.564 10.209 30.564Zm-105.791-35.73c5.494 0 9.902 1.517 13.222 4.551 3.362 2.993 5.042 6.929 5.042 11.808 0 5.001-1.517 9.019-4.55 12.053-2.993 3.034-7.134 4.551-12.422 4.551h-8.856v-32.963h7.564Z" fill="#F9F3F0"/></svg>`,
                        transformTemplate: Cn,
                        withExternalLayout: !0,
                        ..._n(
                          {
                            easqzHZB0: { transformTemplate: void 0 },
                            htvvayoNd: { transformTemplate: void 0 },
                            J1R3yFYYv: { transformTemplate: void 0 },
                            Koqv4ENFE: {
                              fill: `rgba(0, 0, 0, 0)`,
                              transformTemplate: void 0,
                            },
                            Nw1ZXk7WM: { transformTemplate: void 0 },
                            p6Af4deHz: {
                              fill: `rgba(0, 0, 0, 0)`,
                              transformTemplate: void 0,
                            },
                            waFYYRsFX: { transformTemplate: void 0 },
                            WnYHuISJI: {
                              fill: `rgba(0, 0, 0, 0)`,
                              transformTemplate: void 0,
                            },
                            ZwfWqI3qz: { transformTemplate: void 0 },
                          },
                          f,
                          v
                        ),
                      }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (An = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-geGIc.framer-130orzc, .framer-geGIc .framer-130orzc { display: block; }`,
        `.framer-geGIc.framer-bexfmq { height: 1020px; overflow: hidden; position: relative; width: 1920px; }`,
        `.framer-geGIc .framer-7ktki2 { flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 100%; }`,
        `.framer-geGIc .framer-8o1eeu { flex: none; height: 1166px; left: calc(50.00000000000002% - 107.96874999999999% / 2); position: absolute; top: calc(50.00000000000002% - 1166px / 2); width: 108%; z-index: 2; }`,
        `.framer-geGIc .framer-104r8qi { aspect-ratio: 0.5416666666666666 / 1; bottom: var(--framer-aspect-ratio-supported, -567px); flex: none; left: 50%; position: absolute; top: -567px; width: 103%; z-index: 2; }`,
        `.framer-geGIc.framer-v-1m7xxi3 .framer-8o1eeu, .framer-geGIc.framer-v-1i9k8kt .framer-8o1eeu, .framer-geGIc.framer-v-p5ntsp .framer-8o1eeu, .framer-geGIc.framer-v-1a2x41r .framer-8o1eeu { height: 81660px; left: calc(-80.88541666666664% - 7559.999999999999% / 2); top: calc(50.00000000000002% - 81660px / 2); width: 7560%; }`,
        `.framer-geGIc.framer-v-19kn0xf.framer-bexfmq, .framer-geGIc.framer-v-p5ntsp.framer-bexfmq, .framer-geGIc.framer-v-1a2x41r.framer-bexfmq { width: 1660px; }`,
        `.framer-geGIc.framer-v-19kn0xf .framer-8o1eeu { height: 1056px; left: calc(50.00000000000002% - 110.96385542168674% / 2); top: calc(50.00000000000002% - 1056px / 2); width: 111%; }`,
        `.framer-geGIc.framer-v-eeds73.framer-bexfmq, .framer-geGIc.framer-v-6iz9th.framer-bexfmq, .framer-geGIc.framer-v-1sozl08.framer-bexfmq { width: 1440px; }`,
        `.framer-geGIc.framer-v-eeds73 .framer-104r8qi { aspect-ratio: unset; bottom: -855px; left: calc(50.00000000000002% - 102.77777777777777% / 2); top: -853px; width: 103%; }`,
        `.framer-geGIc.framer-v-6iz9th .framer-104r8qi { aspect-ratio: unset; bottom: -129590px; left: -71939px; top: -129588px; width: 9784%; }`,
        `.framer-geGIc.framer-v-1sozl08 .framer-104r8qi { aspect-ratio: unset; bottom: unset; height: 260104px; left: -71939px; top: calc(50.00000000000002% - 260104px / 2); width: 9784%; }`,
        `.framer-geGIc.framer-v-1vtkq4d.framer-bexfmq, .framer-geGIc.framer-v-x7dpc5.framer-bexfmq, .framer-geGIc.framer-v-1g3uo5j.framer-bexfmq { width: 810px; }`,
        `.framer-geGIc.framer-v-1vtkq4d .framer-104r8qi { aspect-ratio: unset; bottom: unset; height: 1580px; left: calc(50.00000000000002% - 102.96296296296296% / 2); top: calc(50.00000000000002% - 1580px / 2); }`,
        `.framer-geGIc.framer-v-x7dpc5 .framer-104r8qi { aspect-ratio: unset; bottom: unset; height: 165966px; left: calc(-99.62962962962962% - 8323.888888888889% / 2); top: calc(50.10869565217394% - 165966px / 2); width: 8324%; }`,
        `.framer-geGIc.framer-v-1g3uo5j .framer-104r8qi { aspect-ratio: unset; bottom: unset; height: 165970px; left: calc(-99.53703703703701% - 8324.074074074075% / 2); top: calc(49.89130434782611% - 165970px / 2); width: 8324%; }`,
        `.framer-geGIc.framer-v-9wq8hl.framer-bexfmq, .framer-geGIc.framer-v-il7b5u.framer-bexfmq, .framer-geGIc.framer-v-1pczyg5.framer-bexfmq { height: 890px; width: 390px; }`,
        `.framer-geGIc.framer-v-9wq8hl .framer-104r8qi { aspect-ratio: unset; bottom: unset; height: 930px; left: calc(50.00000000000002% - 118% / 2); top: calc(50.00000000000002% - 930px / 2); width: 118%; }`,
        `.framer-geGIc.framer-v-il7b5u .framer-104r8qi { aspect-ratio: unset; bottom: unset; height: 88351px; left: calc(-142.8205128205128% - 11351.28205128205% / 2); top: calc(50.00000000000002% - 88351px / 2); width: 11351%; }`,
        `.framer-geGIc.framer-v-1pczyg5 .framer-104r8qi { aspect-ratio: unset; bottom: unset; height: 88351px; left: calc(-142.8205128205128% - 11351.28205128205% / 2); top: calc(49.89130434782611% - 88351px / 2); width: 11351%; }`,
      ]),
      (jn = Te(kn, An, `framer-geGIc`)),
      (jn.displayName = `Logo Zoom Animation`),
      (jn.defaultProps = { height: 1020, width: 1920 }),
      fe(jn, {
        variant: {
          options: [
            `uk9X7KD8Y`,
            `TRssFr3M6`,
            `JjXiEhps4`,
            `AVF807GiF`,
            `Brg7LNvES`,
            `ze2JbL2qb`,
            `p6Af4deHz`,
            `easqzHZB0`,
            `htvvayoNd`,
            `WnYHuISJI`,
            `J1R3yFYYv`,
            `Nw1ZXk7WM`,
            `Koqv4ENFE`,
            `ZwfWqI3qz`,
            `waFYYRsFX`,
          ],
          optionTitles: [
            `Desktop V1`,
            `Desktop V2`,
            `Desktop V3`,
            `Laptop V1`,
            `Laptop V2`,
            `Laptop V3`,
            `Laptop S V1`,
            `Laptop S V2`,
            `Laptop S V3`,
            `Tablet V1`,
            `Tablet V2`,
            `Tablet V3`,
            `Mob V1`,
            `Mob V2`,
            `Mob V3`,
          ],
          title: `Variant`,
          type: F.Enum,
        },
      }),
      de(jn, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function Nn(e, ...t) {
  const n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
let Pn;
  let Fn;
  let In;
  let Ln;
  let Rn;
  let zn;
  let Bn;
  let Vn;
  let Hn;
  let Un;
  let Wn;
  let Gn;
  let Kn;
  let qn;
  let Jn;
  let Yn;
  let Xn;
  let Zn;
  let Qn;
  let $n;
  let er;
  let tr;
  let nr;
  let rr;
  let ir;
  let ar;
  let or;
  const sr = e(() => {
    (s(),
      G(),
      O(),
      c(),
      sn(),
      dn(),
      gn(),
      Mn(),
      (Pn = H(Xt)),
      (Fn = De(Ee(ue))),
      (In = De(Ee(B))),
      (Ln = Ee(j.div)),
      (Rn = H(jn)),
      (zn = [
        `MGfdb3dTh`,
        `gvVSDMplL`,
        `K2xik9UcG`,
        `ACBlgkVFB`,
        `yCdisRmDZ`,
        `BV8YPvNSt`,
        `RYrSKWTbp`,
        `bca_tQOB4`,
        `qgVGZRcRt`,
        `moyg1t680`,
      ]),
      (Bn = `framer-NRnRT`),
      (Vn = {
        ACBlgkVFB: `framer-v-lecg0c`,
        bca_tQOB4: `framer-v-1u95hzi`,
        BV8YPvNSt: `framer-v-1dokhhm`,
        gvVSDMplL: `framer-v-uexbug`,
        K2xik9UcG: `framer-v-13mpseo`,
        MGfdb3dTh: `framer-v-1ycycsj`,
        moyg1t680: `framer-v-xwr8zu`,
        qgVGZRcRt: `framer-v-1tirsdb`,
        RYrSKWTbp: `framer-v-lbpqe2`,
        yCdisRmDZ: `framer-v-pc68us`,
      }),
      (Hn = {
        delay: 0,
        duration: 1.5,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Un = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Wn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Un,
        x: 0,
        y: 0,
      }),
      (Gn = {
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
      (Kn = {
        delay: 0,
        duration: 0.1,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (qn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Kn,
        x: 0,
        y: 0,
      }),
      (Jn = (e, t) => `translateY(-50%) ${t}`),
      (Yn = (e, t) => `translateX(-50%) ${t}`),
      (Xn = { bounce: 0.1, delay: 0, duration: 0.4, type: `spring` }),
      (Zn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Xn,
        x: 0,
        y: 0,
      }),
      (Qn = {
        delay: 0,
        duration: 0.8,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      ($n = ({ value: e, children: t }) => {
        const n = g(T);
          const r = e ?? n.transition;
          const i = _(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(T.Provider, { value: i, children: t });
      }),
      (er = j.create(S)),
      (tr = {
        "Desktop V1": `MGfdb3dTh`,
        "Desktop V2": `gvVSDMplL`,
        "Laptop S V1": `yCdisRmDZ`,
        "Laptop S V2": `BV8YPvNSt`,
        "Laptop V1": `K2xik9UcG`,
        "Laptop V2": `ACBlgkVFB`,
        "Mobile V1": `qgVGZRcRt`,
        "Mobile V2": `moyg1t680`,
        "Tablet V1": `RYrSKWTbp`,
        "Tablet V2": `bca_tQOB4`,
      }),
      (nr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: tr[r.variant] ?? r.variant ?? `MGfdb3dTh`,
      })),
      (rr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (ir = r(function (e, t) {
        const n = m(null);
          const r = t ?? n;
          const i = a();
          const { activeLocale: o, setLocale: s } = ye();
          const c = K();
          const { style: l, className: u, layoutId: d, variant: ee, ...f } = nr(e);
          const {
            baseVariant: h,
            classNames: g,
            clearLoadingGesture: _,
            gestureHandlers: v,
            gestureVariant: b,
            isLoading: x,
            setGestureState: C,
            setVariant: w,
            variants: T,
          } = we({
            cycleOrder: zn,
            defaultVariant: `MGfdb3dTh`,
            ref: r,
            variant: ee,
            variantClassNames: Vn,
          });
          const E = rr(e, T);
          const { activeVariantCallback: D, delay: O } = me(h);
          const k = D(async (...e) => {
            await O(() => w(`gvVSDMplL`, !0), 3e3);
          });
          const A = D(async (...e) => {
            await O(() => w(`ACBlgkVFB`, !0), 3e3);
          });
          const ne = D(async (...e) => {
            await O(() => w(`BV8YPvNSt`, !0), 3e3);
          });
          const re = D(async (...e) => {
            await O(() => w(`bca_tQOB4`, !0), 3e3);
          });
          const M = D(async (...e) => {
            await O(() => w(`moyg1t680`, !0), 3e3);
          });
        xe(h, {
          ACBlgkVFB: void 0,
          bca_tQOB4: void 0,
          BV8YPvNSt: void 0,
          default: k,
          gvVSDMplL: void 0,
          K2xik9UcG: A,
          moyg1t680: void 0,
          qgVGZRcRt: M,
          RYrSKWTbp: re,
          yCdisRmDZ: ne,
        });
        const ie = [un, hn];
          const P = V(Bn, ...ie);
          const F = () => h === `moyg1t680`;
          const ae = () => h === `qgVGZRcRt`;
          const I = () =>
            ![
              `gvVSDMplL`,
              `ACBlgkVFB`,
              `BV8YPvNSt`,
              `bca_tQOB4`,
              `moyg1t680`,
            ].includes(h);
        return p(te, {
          id: d ?? i,
          children: p(er, {
            animate: T,
            initial: !1,
            children: p($n, {
              value: Hn,
              children: y(j.div, {
                ...f,
                ...v,
                className: V(P, `framer-1ycycsj`, u, g),
                "data-framer-name": `Desktop V1`,
                "data-highlight": !0,
                layoutDependency: E,
                layoutId: `MGfdb3dTh`,
                ref: r,
                style: { ...l },
                ...Nn(
                  {
                    ACBlgkVFB: {
                      "data-framer-name": `Laptop V2`,
                      "data-highlight": void 0,
                    },
                    bca_tQOB4: {
                      "data-framer-name": `Tablet V2`,
                      "data-highlight": void 0,
                    },
                    BV8YPvNSt: {
                      "data-framer-name": `Laptop S V2`,
                      "data-highlight": void 0,
                    },
                    gvVSDMplL: {
                      "data-framer-name": `Desktop V2`,
                      "data-highlight": void 0,
                    },
                    K2xik9UcG: { "data-framer-name": `Laptop V1` },
                    moyg1t680: {
                      "data-framer-name": `Mobile V2`,
                      "data-highlight": void 0,
                    },
                    qgVGZRcRt: { "data-framer-name": `Mobile V1` },
                    RYrSKWTbp: { "data-framer-name": `Tablet V1` },
                    yCdisRmDZ: { "data-framer-name": `Laptop S V1` },
                  },
                  h,
                  b
                ),
                children: [
                  p(N, {
                    children: p(Fn, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: Wn,
                      className: `framer-1nqrcdx-container`,
                      "data-framer-appear-id": `1nqrcdx`,
                      initial: Gn,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: E,
                      layoutId: `fXQTeJf27-container`,
                      nodeId: `fXQTeJf27`,
                      optimized: !0,
                      rendersWithMotion: !0,
                      scopeId: `iYKfxVwjs`,
                      ...Nn(
                        {
                          ACBlgkVFB: {
                            animate: void 0,
                            initial: void 0,
                            optimized: void 0,
                          },
                          bca_tQOB4: {
                            animate: void 0,
                            initial: void 0,
                            optimized: void 0,
                          },
                          BV8YPvNSt: {
                            animate: void 0,
                            initial: void 0,
                            optimized: void 0,
                          },
                          gvVSDMplL: {
                            animate: void 0,
                            initial: void 0,
                            optimized: void 0,
                          },
                          moyg1t680: {
                            animate: void 0,
                            initial: void 0,
                            optimized: void 0,
                          },
                          qgVGZRcRt: { animate: qn },
                          RYrSKWTbp: { animate: qn },
                        },
                        h,
                        b
                      ),
                      children: p(Xt, {
                        backgroundColor: `rgba(38, 25, 18, 0)`,
                        borderRadius: 0,
                        bottomLeftRadius: 0,
                        bottomRightRadius: 0,
                        controls: !1,
                        height: `100%`,
                        id: `fXQTeJf27`,
                        isMixedBorderRadius: !1,
                        layoutId: `fXQTeJf27`,
                        loop: !0,
                        muted: !0,
                        objectFit: `cover`,
                        playing: !0,
                        poster: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/qj2f8GzLNwkQdw1d21I0HUg_ixghvk.png`,
                        posterEnabled: !0,
                        srcFile: `https://res.cloudinary.com/do05dlmn8/video/upload/v1764584176/video_to_upload_lvtwmh.mp4`,
                        srcType: `Upload`,
                        srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                        startTime: 0,
                        style: { height: `100%`, width: `100%` },
                        topLeftRadius: 0,
                        topRightRadius: 0,
                        volume: 25,
                        width: `100%`,
                        ...Nn(
                          {
                            bca_tQOB4: {
                              srcFile: `https://framerusercontent.com/assets/qn3FgYxDrTj1fUVY5fzm96NJGM.webm`,
                            },
                            moyg1t680: {
                              poster: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/pCYRiBWKfTcY2vR0czivXp_g1cscx.png`,
                              srcFile: `https://framerusercontent.com/assets/qn3FgYxDrTj1fUVY5fzm96NJGM.webm`,
                            },
                            qgVGZRcRt: {
                              poster: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/pCYRiBWKfTcY2vR0czivXp_g1cscx.png`,
                              srcFile: `https://framerusercontent.com/assets/qn3FgYxDrTj1fUVY5fzm96NJGM.webm`,
                            },
                            RYrSKWTbp: {
                              srcFile: `https://framerusercontent.com/assets/qn3FgYxDrTj1fUVY5fzm96NJGM.webm`,
                            },
                          },
                          h,
                          b
                        ),
                      }),
                    }),
                  }),
                  p(j.div, {
                    className: `framer-mtl588`,
                    "data-framer-name": `Overlay`,
                    layoutDependency: E,
                    layoutId: `CXjqPbuQi`,
                    style: {
                      backgroundColor: `var(--token-7d84f817-da6d-47fc-8662-c0a473c16949, rgb(39, 31, 25))`,
                      opacity: 0.3,
                    },
                  }),
                  y(Ln, {
                    className: `framer-1ejccu1`,
                    "data-framer-name": `Header`,
                    layoutDependency: E,
                    layoutId: `umkLIdw6j`,
                    style: { opacity: 0 },
                    variants: {
                      ACBlgkVFB: { opacity: 1 },
                      bca_tQOB4: { opacity: 1 },
                      BV8YPvNSt: { opacity: 1 },
                      gvVSDMplL: { opacity: 1 },
                      moyg1t680: { opacity: 1 },
                    },
                    ...Nn(
                      {
                        ACBlgkVFB: {
                          __framer__adjustPosition: !1,
                          __framer__offset: 0,
                          __framer__parallaxTransformEnabled: !0,
                          __framer__speed: 120,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                        },
                        bca_tQOB4: {
                          __framer__adjustPosition: !1,
                          __framer__offset: 0,
                          __framer__parallaxTransformEnabled: !0,
                          __framer__speed: 120,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          transformTemplate: Jn,
                        },
                        BV8YPvNSt: {
                          __framer__adjustPosition: !1,
                          __framer__offset: 0,
                          __framer__parallaxTransformEnabled: !0,
                          __framer__speed: 120,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                        },
                        gvVSDMplL: {
                          __framer__adjustPosition: !1,
                          __framer__offset: 0,
                          __framer__parallaxTransformEnabled: !0,
                          __framer__speed: 120,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                        },
                        moyg1t680: {
                          __framer__adjustPosition: !1,
                          __framer__offset: 0,
                          __framer__parallaxTransformEnabled: !0,
                          __framer__speed: 120,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          transformTemplate: Yn,
                        },
                        RYrSKWTbp: { transformTemplate: Jn },
                      },
                      h,
                      b
                    ),
                    children: [
                      y(j.div, {
                        className: `framer-y7gbcy`,
                        layoutDependency: E,
                        layoutId: `p6pgeb5Qv`,
                        children: [
                          p($n, {
                            value: Qn,
                            children: p(In, {
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: Zn,
                              children: p(S, {
                                children: p(j.h1, {
                                  className: `framer-styles-preset-ia95en`,
                                  "data-styles-preset": `NiHse0e8B`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-gdpscs, var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255)))`,
                                  },
                                  children: `Beyond Taste, Experience`,
                                }),
                              }),
                              className: `framer-im9lp9`,
                              "data-framer-appear-id": `im9lp9`,
                              fonts: [`Inter`],
                              initial: Gn,
                              layoutDependency: E,
                              layoutId: `q4zFu8Zvd`,
                              optimized: !0,
                              style: {
                                "--extracted-gdpscs": `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                textShadow: `0px 4px 12px rgba(0, 0, 0, 0.16)`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Nn(
                                {
                                  moyg1t680: {
                                    children: p(S, {
                                      children: p(j.h1, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `36px`,
                                          "--framer-line-height": `1.1em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-gdpscs, var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255)))`,
                                        },
                                        children: `Beyond Taste, Experience`,
                                      }),
                                    }),
                                    fonts: [`CUSTOM;Perpetua Regular`],
                                  },
                                  qgVGZRcRt: {
                                    animate: void 0,
                                    initial: void 0,
                                    optimized: void 0,
                                  },
                                  RYrSKWTbp: {
                                    animate: void 0,
                                    initial: void 0,
                                    optimized: void 0,
                                  },
                                },
                                h,
                                b
                              ),
                            }),
                          }),
                          p(j.div, {
                            className: `framer-1gdd3gk`,
                            "data-framer-name": `Hero Description Container`,
                            layoutDependency: E,
                            layoutId: `W4Y24rrHS`,
                            children: p(In, {
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: Zn,
                              children: p(S, {
                                children: p(j.h5, {
                                  className: `framer-styles-preset-1yiy8uy`,
                                  "data-styles-preset": `Sjy3iPp5m`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255)))`,
                                  },
                                  children: `Crafting unforgettable gastronomic experiences with impeccable service, redefining culinary curation for the world’s most exclusive celebrations.`,
                                }),
                              }),
                              className: `framer-102ce5a`,
                              "data-framer-appear-id": `102ce5a`,
                              fonts: [`Inter`],
                              initial: Gn,
                              layoutDependency: E,
                              layoutId: `HERYOaFF7`,
                              optimized: !0,
                              style: {
                                "--extracted-1lwpl3i": `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                textShadow: `0px 4px 12px rgba(0, 0, 0, 0.16)`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Nn(
                                {
                                  moyg1t680: {
                                    children: p(S, {
                                      children: p(j.h5, {
                                        className: `framer-styles-preset-1yiy8uy`,
                                        "data-styles-preset": `Sjy3iPp5m`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255)))`,
                                        },
                                        children: `Crafting unforgettable gastronomic experiences for the world’s most exclusive\xA0celebrations.`,
                                      }),
                                    }),
                                  },
                                  qgVGZRcRt: {
                                    animate: void 0,
                                    children: p(S, {
                                      children: p(j.h5, {
                                        className: `framer-styles-preset-1yiy8uy`,
                                        "data-styles-preset": `Sjy3iPp5m`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255)))`,
                                        },
                                        children: `Crafting unforgettable gastronomic experiences for the world’s most exclusive\xA0celebrations.`,
                                      }),
                                    }),
                                    initial: void 0,
                                    optimized: void 0,
                                  },
                                  RYrSKWTbp: {
                                    animate: void 0,
                                    initial: void 0,
                                    optimized: void 0,
                                  },
                                },
                                h,
                                b
                              ),
                            }),
                          }),
                        ],
                      }),
                      F() &&
                        p(L, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 497,
                            intrinsicWidth: 1246,
                            pixelHeight: 497,
                            pixelWidth: 1246,
                            src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png`,
                            srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 1246w`,
                          },
                          className: `framer-ll9p0f`,
                          "data-framer-name": `Logo Light`,
                          layoutDependency: E,
                          layoutId: `IrbSWJ4Gr`,
                          ...Nn(
                            {
                              moyg1t680: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 497,
                                  intrinsicWidth: 1246,
                                  loading: W((c?.y || 0) + 300 + 0 + 0),
                                  pixelHeight: 497,
                                  pixelWidth: 1246,
                                  sizes: `calc((${c?.width || `100vw`} - 52px) * 0.6391)`,
                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png`,
                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 1246w`,
                                },
                              },
                            },
                            h,
                            b
                          ),
                        }),
                      ae() &&
                        p(L, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 497,
                            intrinsicWidth: 1246,
                            pixelHeight: 497,
                            pixelWidth: 1246,
                            src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png`,
                            srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 1246w`,
                          },
                          className: `framer-xjjc2t`,
                          "data-framer-name": `Logo Light`,
                          layoutDependency: E,
                          layoutId: `sZIrUFnDL`,
                          ...Nn(
                            {
                              qgVGZRcRt: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 497,
                                  intrinsicWidth: 1246,
                                  loading: W((c?.y || 0) + 280 + 0 + 0),
                                  pixelHeight: 497,
                                  pixelWidth: 1246,
                                  sizes: `216px`,
                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png`,
                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 1246w`,
                                },
                              },
                            },
                            h,
                            b
                          ),
                        }),
                    ],
                  }),
                  I() &&
                    p(N, {
                      height: 1e3,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + -1,
                      ...Nn(
                        {
                          qgVGZRcRt: {
                            y:
                              (c?.y || 0) +
                              ((c?.height || 900) * 0.5000000000000002 - 500),
                          },
                        },
                        h,
                        b
                      ),
                      children: p(ue, {
                        className: `framer-1jw3tjw-container`,
                        layoutDependency: E,
                        layoutId: `GPlj8I0Fx-container`,
                        nodeId: `GPlj8I0Fx`,
                        rendersWithMotion: !0,
                        scopeId: `iYKfxVwjs`,
                        children: p(jn, {
                          height: `100%`,
                          id: `GPlj8I0Fx`,
                          layoutId: `GPlj8I0Fx`,
                          style: { height: `100%`, width: `100%` },
                          variant: `uk9X7KD8Y`,
                          width: `100%`,
                          ...Nn(
                            {
                              K2xik9UcG: { variant: `AVF807GiF` },
                              qgVGZRcRt: { variant: `Koqv4ENFE` },
                              RYrSKWTbp: { variant: `WnYHuISJI` },
                              yCdisRmDZ: { variant: `p6Af4deHz` },
                            },
                            h,
                            b
                          ),
                        }),
                      }),
                    }),
                ],
              }),
            }),
          }),
        });
      })),
      (ar = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-NRnRT.framer-17cvvvw, .framer-NRnRT .framer-17cvvvw { display: block; }`,
        `.framer-NRnRT.framer-1ycycsj { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1920px; }`,
        `.framer-NRnRT .framer-1nqrcdx-container { flex: none; height: calc(var(--framer-viewport-height, 100vh) * 1); position: relative; width: 100%; z-index: 1; }`,
        `.framer-NRnRT .framer-mtl588 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); mix-blend-mode: overlay; overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 2; }`,
        `.framer-NRnRT .framer-1ejccu1 { align-content: center; align-items: center; bottom: 320px; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 32px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; width: 100%; z-index: 3; }`,
        `.framer-NRnRT .framer-y7gbcy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NRnRT .framer-im9lp9, .framer-NRnRT .framer-102ce5a { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NRnRT .framer-1gdd3gk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 50%; }`,
        `.framer-NRnRT .framer-ll9p0f { aspect-ratio: 2.507042253521127 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 80px); overflow: visible; position: relative; width: 64%; }`,
        `.framer-NRnRT .framer-xjjc2t { aspect-ratio: 2.507042253521127 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 86px); overflow: visible; position: relative; width: 216px; }`,
        `.framer-NRnRT .framer-1jw3tjw-container { flex: none; height: calc(var(--framer-viewport-height, 100vh) * 1); left: calc(50.00000000000002% - 100% / 2); position: absolute; top: -1px; width: 100%; z-index: 4; }`,
        `.framer-NRnRT.framer-v-uexbug .framer-1nqrcdx-container, .framer-NRnRT.framer-v-lecg0c .framer-1nqrcdx-container, .framer-NRnRT.framer-v-1dokhhm .framer-1nqrcdx-container, .framer-NRnRT.framer-v-1u95hzi .framer-1nqrcdx-container, .framer-NRnRT.framer-v-1tirsdb .framer-xjjc2t, .framer-NRnRT.framer-v-xwr8zu .framer-1nqrcdx-container { order: 0; }`,
        `.framer-NRnRT.framer-v-uexbug .framer-mtl588, .framer-NRnRT.framer-v-lecg0c .framer-mtl588, .framer-NRnRT.framer-v-1dokhhm .framer-mtl588, .framer-NRnRT.framer-v-1u95hzi .framer-mtl588 { order: 3; }`,
        `.framer-NRnRT.framer-v-uexbug .framer-1ejccu1, .framer-NRnRT.framer-v-lecg0c .framer-1ejccu1, .framer-NRnRT.framer-v-1dokhhm .framer-1ejccu1 { bottom: 280px; order: 2; }`,
        `.framer-NRnRT.framer-v-13mpseo.framer-1ycycsj, .framer-NRnRT.framer-v-lecg0c.framer-1ycycsj, .framer-NRnRT.framer-v-pc68us.framer-1ycycsj, .framer-NRnRT.framer-v-1dokhhm.framer-1ycycsj { width: 1660px; }`,
        `.framer-NRnRT.framer-v-13mpseo .framer-1ejccu1, .framer-NRnRT.framer-v-pc68us .framer-1ejccu1 { bottom: 280px; }`,
        `.framer-NRnRT.framer-v-lbpqe2.framer-1ycycsj, .framer-NRnRT.framer-v-1u95hzi.framer-1ycycsj { width: 810px; }`,
        `.framer-NRnRT.framer-v-lbpqe2 .framer-1ejccu1 { bottom: unset; top: 50%; }`,
        `.framer-NRnRT.framer-v-lbpqe2 .framer-1gdd3gk, .framer-NRnRT.framer-v-1u95hzi .framer-1gdd3gk { width: 70%; }`,
        `.framer-NRnRT.framer-v-1u95hzi .framer-1ejccu1 { bottom: unset; order: 2; padding: 0px 48px 0px 48px; top: 52%; }`,
        `.framer-NRnRT.framer-v-1tirsdb.framer-1ycycsj { height: 900px; overflow: hidden; width: 390px; }`,
        `.framer-NRnRT.framer-v-1tirsdb .framer-1ejccu1 { bottom: unset; gap: 40px 32px; padding: 0px 32px 0px 32px; top: 280px; }`,
        `.framer-NRnRT.framer-v-1tirsdb .framer-y7gbcy { order: 2; }`,
        `.framer-NRnRT.framer-v-1tirsdb .framer-1gdd3gk { width: 90%; }`,
        `.framer-NRnRT.framer-v-1tirsdb .framer-1jw3tjw-container { top: calc(50.00000000000002% - 100vh / 2); }`,
        `.framer-NRnRT.framer-v-xwr8zu.framer-1ycycsj { height: 900px; width: 390px; }`,
        `.framer-NRnRT.framer-v-xwr8zu .framer-mtl588 { left: 0px; order: 3; top: 0px; }`,
        `.framer-NRnRT.framer-v-xwr8zu .framer-1ejccu1 { bottom: unset; gap: 64px 32px; justify-content: flex-start; left: 50%; order: 2; padding: 0px 26px 0px 26px; top: 300px; }`,
        `.framer-NRnRT.framer-v-xwr8zu .framer-y7gbcy { gap: 24px; order: 2; }`,
        `.framer-NRnRT.framer-v-xwr8zu .framer-1gdd3gk { width: 96%; }`,
        `.framer-NRnRT.framer-v-xwr8zu .framer-ll9p0f { height: var(--framer-aspect-ratio-supported, 86px); order: 0; }`,
        ...ln,
        ...mn,
      ]),
      (or = Te(ir, ar, `framer-NRnRT`)),
      (or.displayName = `Banner 3`),
      (or.defaultProps = { height: 920, width: 1920 }),
      fe(or, {
        variant: {
          options: [
            `MGfdb3dTh`,
            `gvVSDMplL`,
            `K2xik9UcG`,
            `ACBlgkVFB`,
            `yCdisRmDZ`,
            `BV8YPvNSt`,
            `RYrSKWTbp`,
            `bca_tQOB4`,
            `qgVGZRcRt`,
            `moyg1t680`,
          ],
          optionTitles: [
            `Desktop V1`,
            `Desktop V2`,
            `Laptop V1`,
            `Laptop V2`,
            `Laptop S V1`,
            `Laptop S V2`,
            `Tablet V1`,
            `Tablet V2`,
            `Mobile V1`,
            `Mobile V2`,
          ],
          title: `Variant`,
          type: F.Enum,
        },
      }),
      de(
        or,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                family: `Perpetua Regular`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/1iG13iaGG8N9Orw3a8xSD6zoY.woff2`,
              },
            ],
          },
          ...Pn,
          ...Rn,
          ...U(cn),
          ...U(pn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
  const cr = e(() => {
    (wt(),
      Ot(),
      kt(),
      At(),
      jt(),
      Mt(),
      Nt(),
      It(),
      Lt(),
      Rt(),
      zt(),
      Ht(),
      Ut(),
      qt());
  });
function lr({ type: e, url: t, html: n }) {
  return e === `url` && t
    ? p(dr, { url: t })
    : e === `html` && n
      ? p(pr, { html: n })
      : p(ur, {});
}
function ur() {
  return p(`div`, {
    style: { ...bt, overflow: `hidden` },
    children: p(`div`, {
      style: yr,
      children: `To embed a website or widget, add it to the properties\xA0panel.`,
    }),
  });
}
function dr({ url: e }) {
  /[a-z]+:\/\//.test(e) || (e = `https://` + e);
  const t = Vt();
    const [n, r] = C(t ? void 0 : !1);
  if (
    (b(() => {
      if (!t) return;
      let n = !0;
      r(void 0);
      async function i() {
        const t = await fetch(
          `https://api.framer.com/functions/check-iframe-url?url=` +
            encodeURIComponent(e)
        );
        if (t.status == 200) {
          const { isBlocked: e } = await t.json();
          n && r(e);
        } else {
          const e = await t.text();
          console.error(e);
          const n = Error(`This site can’t be reached.`);
          r(n);
        }
      }
      return (
        i().catch((e) => {
          (console.error(e), r(e));
        }),
        () => {
          n = !1;
        }
      );
    }, [e]),
    !e.startsWith(`https://`))
  )
    return p(gr, { message: `Unsupported protocol.` });
  if (n === void 0) return p(hr, {});
  if (n instanceof Error) return p(gr, { message: n.message });
  if (n === !0) {
    const t = `Can't embed ${e} due to its content security policy.`;
    return p(gr, { message: t });
  }
  return p(`iframe`, {
    src: e,
    style: _r,
    loading: `lazy`,
    fetchPriority: t ? `low` : `auto`,
    referrerPolicy: `no-referrer`,
    sandbox: fr(t),
  });
}
function fr(e) {
  const t = [`allow-same-origin`, `allow-scripts`];
  return (
    e ||
      t.push(
        `allow-downloads`,
        `allow-forms`,
        `allow-modals`,
        `allow-orientation-lock`,
        `allow-pointer-lock`,
        `allow-popups`,
        `allow-popups-to-escape-sandbox`,
        `allow-presentation`,
        `allow-storage-access-by-user-activation`,
        `allow-top-navigation-by-user-activation`
      ),
    t.join(` `)
  );
}
function pr({ html: e }) {
  const t = m();
    const n = e.includes(`<\/script>`);
  return (
    b(() => {
      if (!n) return;
      const r = t.current;
      return (
        (r.innerHTML = e),
        mr(r),
        () => {
          r.innerHTML = ``;
        }
      );
    }, [e, n]),
    p(`div`, {
      ref: t,
      style: vr,
      dangerouslySetInnerHTML: n ? void 0 : { __html: e },
    })
  );
}
function mr(e) {
  if (e instanceof Element && e.tagName === `SCRIPT`) {
    const t = document.createElement(`script`);
    t.text = e.innerHTML;
    for (const { name: n, value: r } of e.attributes) t.setAttribute(n, r);
    e.parentElement.replaceChild(t, e);
  } else for (const t of e.childNodes) mr(t);
}
function hr() {
  return p(`div`, {
    className: `framerInternalUI-componentPlaceholder`,
    style: { ...yt, overflow: `hidden` },
    children: p(`div`, { style: yr, children: `Loading…` }),
  });
}
function gr({ message: e }) {
  return p(`div`, {
    className: `framerInternalUI-errorPlaceholder`,
    style: { ...yt, overflow: `hidden` },
    children: y(`div`, { style: yr, children: [`Error: `, e] }),
  });
}
let _r;
  let vr;
  let yr;
  const br = e(() => {
    (s(),
      c(),
      G(),
      cr(),
      fe(lr, {
        type: {
          type: F.Enum,
          defaultValue: `url`,
          displaySegmentedControl: !0,
          options: [`url`, `html`],
          optionTitles: [`URL`, `HTML`],
        },
        url: {
          title: `URL`,
          type: F.String,
          description: `Some websites don’t support embedding.`,
          hidden(e) {
            return e.type !== `url`;
          },
        },
        html: {
          title: `HTML`,
          displayTextArea: !0,
          type: F.String,
          hidden(e) {
            return e.type !== `html`;
          },
        },
      }),
      (_r = { width: `100%`, height: `100%`, border: `none` }),
      (vr = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (yr = { textAlign: `center`, minWidth: 140 }));
  });
function xr(e, ...t) {
  const n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
let Sr;
  let Cr;
  let wr;
  let Tr;
  let Er;
  let Dr;
  let Or;
  let kr;
  let Ar;
  let jr;
  let Mr;
  const Nr = e(() => {
    (s(),
      G(),
      O(),
      c(),
      qe(),
      (Sr = { aO7OwrE3e: { hover: !0 } }),
      (Cr = `framer-nYAHn`),
      (wr = { aO7OwrE3e: `framer-v-1wvkegy` }),
      (Tr = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Er = ({ value: e, children: t }) => {
        const n = g(T);
          const r = e ?? n.transition;
          const i = _(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(T.Provider, { value: i, children: t });
      }),
      (Dr = j.create(S)),
      (Or = ({ buttonText: e, height: t, id: n, link: r, width: i, ...a }) => ({
        ...a,
        cBqkcF_By: r ?? a.cBqkcF_By,
        yMI7gvbA0: e ?? a.yMI7gvbA0 ?? `Know More`,
      })),
      (kr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Ar = r(function (e, t) {
        const n = m(null);
          const r = t ?? n;
          const i = a();
          const { activeLocale: o, setLocale: s } = ye();
        K();
        const {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            yMI7gvbA0: ee,
            cBqkcF_By: f,
            ...h
          } = Or(e);
          const {
            baseVariant: g,
            classNames: _,
            clearLoadingGesture: v,
            gestureHandlers: y,
            gestureVariant: b,
            isLoading: x,
            setGestureState: C,
            setVariant: w,
            variants: T,
          } = we({
            defaultVariant: `aO7OwrE3e`,
            enabledGestures: Sr,
            ref: r,
            variant: d,
            variantClassNames: wr,
          });
          const E = kr(e, T);
          const D = [Re];
          const O = V(Cr, ...D);
        return p(te, {
          id: u ?? i,
          children: p(Dr, {
            animate: T,
            initial: !1,
            children: p(Er, {
              value: Tr,
              children: p(R, {
                href: f,
                motionChild: !0,
                nodeId: `aO7OwrE3e`,
                openInNewTab: !1,
                scopeId: `J5MrwO4uq`,
                children: p(j.a, {
                  ...h,
                  ...y,
                  className: `${V(O, `framer-1wvkegy`, l, _)} framer-75plx1`,
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: E,
                  layoutId: `aO7OwrE3e`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `0.3px`,
                    "--border-color": `var(--token-3a5fdfe3-6144-4218-ac3d-615571dccec3, rgb(192, 144, 110))`,
                    "--border-left-width": `0.3px`,
                    "--border-right-width": `0.3px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0.3px`,
                    backgroundColor: `var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, rgb(249, 243, 240))`,
                    ...c,
                  },
                  variants: {
                    "aO7OwrE3e-hover": {
                      "--border-color": `var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36))`,
                      backgroundColor: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                    },
                  },
                  ...xr(
                    { "aO7OwrE3e-hover": { "data-framer-name": void 0 } },
                    g,
                    b
                  ),
                  children: p(B, {
                    __fromCanvasComponent: !0,
                    children: p(S, {
                      children: p(j.p, {
                        className: `framer-styles-preset-33k92k`,
                        "data-styles-preset": `JTrlLj3jx`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6740672-e51a-4a94-8ab3-ba42a8aca3cb, rgb(140, 95, 69)))`,
                        },
                        children: `Know More`,
                      }),
                    }),
                    className: `framer-l2bo0r`,
                    "data-framer-name": `View Details`,
                    fonts: [`Inter`],
                    layoutDependency: E,
                    layoutId: `VIH45epOj`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-e6740672-e51a-4a94-8ab3-ba42a8aca3cb, rgb(140, 95, 69))`,
                      "--framer-paragraph-spacing": `0px`,
                    },
                    text: ee,
                    variants: {
                      "aO7OwrE3e-hover": {
                        "--extracted-r6o4lv": `var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...xr(
                      {
                        "aO7OwrE3e-hover": {
                          children: p(S, {
                            children: p(j.p, {
                              className: `framer-styles-preset-33k92k`,
                              "data-styles-preset": `JTrlLj3jx`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36)))`,
                              },
                              children: `Know More`,
                            }),
                          }),
                        },
                      },
                      g,
                      b
                    ),
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (jr = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-nYAHn.framer-75plx1, .framer-nYAHn .framer-75plx1 { display: block; }`,
        `.framer-nYAHn.framer-1wvkegy { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px 20px 8px 20px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-nYAHn .framer-l2bo0r { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...Ve,
        `.framer-nYAHn[data-border="true"]::after, .framer-nYAHn [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (Mr = Te(Ar, jr, `framer-nYAHn`)),
      (Mr.displayName = `Button`),
      (Mr.defaultProps = { height: 45, width: 142 }),
      fe(Mr, {
        yMI7gvbA0: {
          defaultValue: `Know More`,
          displayTextArea: !1,
          title: `Button Text`,
          type: F.String,
        },
        cBqkcF_By: { title: `Link`, type: F.Link },
      }),
      de(
        Mr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...U(We),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
  let Pr;
  let Fr;
  let Ir;
  let Lr;
  const Rr = e(() => {
    (G(),
      pe.loadFonts([
        `GF;Red Rose-variable-regular`,
        `GF;Red Rose-variable-regularVF=IndnaHQiIDQwMA==`,
        `GF;Red Rose-variable-regularVF=IndnaHQiIDQwMA==`,
        `GF;Red Rose-variable-regularVF=IndnaHQiIDQwMA==`,
      ]),
      (Pr = [
        {
          defaultValue: 400,
          maxValue: 700,
          minValue: 300,
          name: `Weight`,
          tag: `wght`,
        },
      ]),
      (Fr = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Red Rose`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/redrose/v20/QdVVSTYiLBjouPgEUbLhkwVoknQx.woff2`,
              variationAxes: Pr,
              weight: `400`,
            },
          ],
        },
      ]),
      (Ir = [
        `.framer-isbMr .framer-styles-preset-1fzla5r:not(.rich-text-wrapper), .framer-isbMr .framer-styles-preset-1fzla5r.rich-text-wrapper h4 { --framer-font-family: "Red Rose Variable", sans-serif; --framer-font-family-bold: "Red Rose Variable", sans-serif; --framer-font-family-bold-italic: "Red Rose Variable", sans-serif; --framer-font-family-italic: "Red Rose Variable", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1659px) and (min-width: 810px) { .framer-isbMr .framer-styles-preset-1fzla5r:not(.rich-text-wrapper), .framer-isbMr .framer-styles-preset-1fzla5r.rich-text-wrapper h4 { --framer-font-family: "Red Rose Variable", sans-serif; --framer-font-family-bold: "Red Rose Variable", sans-serif; --framer-font-family-bold-italic: "Red Rose Variable", sans-serif; --framer-font-family-italic: "Red Rose Variable", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-isbMr .framer-styles-preset-1fzla5r:not(.rich-text-wrapper), .framer-isbMr .framer-styles-preset-1fzla5r.rich-text-wrapper h4 { --framer-font-family: "Red Rose Variable", sans-serif; --framer-font-family-bold: "Red Rose Variable", sans-serif; --framer-font-family-bold-italic: "Red Rose Variable", sans-serif; --framer-font-family-italic: "Red Rose Variable", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Lr = `framer-isbMr`));
  });
function zr(e, ...t) {
  const n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
let Br;
  let Vr;
  let Hr;
  let Ur;
  let Wr;
  let Gr;
  let Kr;
  let qr;
  let Jr;
  let Yr;
  let Xr;
  let Zr;
  const Qr = e(() => {
    (s(),
      G(),
      O(),
      c(),
      Ze(),
      Rr(),
      (Br = [`wFK9ue_9d`, `HguE_4xPZ`]),
      (Vr = `framer-NMaCh`),
      (Hr = { HguE_4xPZ: `framer-v-xzb5fj`, wFK9ue_9d: `framer-v-1wxjas6` }),
      (Ur = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Wr = ({ value: e, children: t }) => {
        const n = g(T);
          const r = e ?? n.transition;
          const i = _(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(T.Provider, { value: i, children: t });
      }),
      (Gr = j.create(S)),
      (Kr = { "Variant 1": `wFK9ue_9d`, "Variant 2": `HguE_4xPZ` }),
      (qr = ({
        event: e,
        height: t,
        id: n,
        testimonial: r,
        user: i,
        width: a,
        ...o
      }) => ({
        ...o,
        adoyeSvgI:
          r ??
          o.adoyeSvgI ??
          `For high profile events - weddings, corporates and private parties in Mumbai, Delhi and metro cities. For high profile events - weddings, corporates and private parties in Mumbai, Delhi and metro cities. or high profile events - weddings, corporates and private parties in Mumbai, Delhi and metro cities.`,
        mwd1PhJAI: e ?? o.mwd1PhJAI ?? `Wedding`,
        variant: Kr[o.variant] ?? o.variant ?? `wFK9ue_9d`,
        zuF80UG9A: i ?? o.zuF80UG9A ?? `- Rahul Bhide`,
      })),
      (Jr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Yr = r(function (e, t) {
        const n = m(null);
          const r = t ?? n;
          const i = a();
          const { activeLocale: o, setLocale: s } = ye();
        K();
        const {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            adoyeSvgI: ee,
            zuF80UG9A: f,
            mwd1PhJAI: h,
            ...g
          } = qr(e);
          const {
            baseVariant: _,
            classNames: v,
            clearLoadingGesture: b,
            gestureHandlers: x,
            gestureVariant: C,
            isLoading: w,
            setGestureState: T,
            setVariant: E,
            variants: D,
          } = we({
            cycleOrder: Br,
            defaultVariant: `wFK9ue_9d`,
            ref: r,
            variant: d,
            variantClassNames: Hr,
          });
          const O = Jr(e, D);
          const k = [Le, Lr];
          const A = V(Vr, ...k);
        return p(te, {
          id: u ?? i,
          children: p(Gr, {
            animate: D,
            initial: !1,
            children: p(Wr, {
              value: Ur,
              children: p(j.div, {
                ...g,
                ...x,
                className: V(A, `framer-1wxjas6`, l, v),
                "data-framer-name": `Variant 1`,
                layoutDependency: O,
                layoutId: `wFK9ue_9d`,
                ref: r,
                style: { backgroundColor: `rgb(234, 228, 220)`, ...c },
                ...zr({ HguE_4xPZ: { "data-framer-name": `Variant 2` } }, _, C),
                children: y(j.div, {
                  className: `framer-1erf747`,
                  "data-framer-name": `Testimonial Item`,
                  layoutDependency: O,
                  layoutId: `ilL5mLCzN`,
                  style: { filter: `none`, WebkitFilter: `none` },
                  variants: {
                    HguE_4xPZ: {
                      filter: `blur(2px)`,
                      WebkitFilter: `blur(2px)`,
                    },
                  },
                  children: [
                    p(le, {
                      className: `framer-5smusi`,
                      "data-framer-name": `Quotes`,
                      layout: `position`,
                      layoutDependency: O,
                      layoutId: `YELEDH7za`,
                      opacity: 1,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 40"><path d="M 13.433 15.966 C 12.839 15.966 12.269 16.056 11.702 16.139 C 11.886 15.521 12.075 14.893 12.379 14.328 C 12.682 13.508 13.156 12.797 13.627 12.081 C 14.021 11.306 14.716 10.782 15.228 10.119 C 15.763 9.474 16.493 9.045 17.07 8.51 C 17.637 7.951 18.38 7.671 18.971 7.277 C 19.589 6.923 20.127 6.532 20.702 6.345 L 22.137 5.754 L 23.4 5.23 L 22.108 0.069 L 20.519 0.453 C 20.01 0.581 19.39 0.73 18.684 0.908 C 17.962 1.041 17.193 1.406 16.335 1.739 C 15.489 2.117 14.509 2.373 13.598 2.98 C 12.682 3.56 11.625 4.045 10.693 4.822 C 9.79 5.624 8.701 6.319 7.897 7.339 C 7.018 8.292 6.15 9.293 5.477 10.433 C 4.697 11.519 4.167 12.712 3.607 13.892 C 3.102 15.071 2.694 16.277 2.361 17.449 C 1.73 19.798 1.448 22.029 1.339 23.938 C 1.248 25.85 1.302 27.44 1.413 28.59 C 1.453 29.133 1.528 29.66 1.581 30.025 L 1.648 30.473 L 1.717 30.457 C 2.191 32.669 3.281 34.702 4.862 36.32 C 6.442 37.939 8.449 39.077 10.649 39.603 C 12.85 40.128 15.154 40.02 17.296 39.291 C 19.438 38.562 21.329 37.241 22.752 35.482 C 24.174 33.723 25.069 31.597 25.334 29.35 C 25.599 27.103 25.222 24.827 24.247 22.785 C 23.272 20.744 21.739 19.02 19.825 17.813 C 17.912 16.606 15.695 15.966 13.433 15.966 Z M 42.723 15.966 C 42.129 15.966 41.56 16.056 40.992 16.139 C 41.176 15.521 41.365 14.893 41.669 14.328 C 41.972 13.508 42.446 12.797 42.918 12.081 C 43.312 11.306 44.007 10.782 44.518 10.119 C 45.053 9.474 45.783 9.045 46.36 8.51 C 46.928 7.951 47.671 7.671 48.262 7.277 C 48.879 6.923 49.417 6.532 49.992 6.345 L 51.428 5.754 L 52.69 5.23 L 51.398 0.069 L 49.809 0.453 C 49.3 0.581 48.68 0.73 47.974 0.908 C 47.253 1.041 46.483 1.406 45.626 1.739 C 44.781 2.12 43.799 2.373 42.888 2.982 C 41.972 3.563 40.915 4.047 39.983 4.825 C 39.081 5.626 37.991 6.321 37.187 7.339 C 36.309 8.292 35.441 9.293 34.767 10.433 C 33.987 11.519 33.457 12.712 32.898 13.892 C 32.392 15.071 31.984 16.277 31.651 17.449 C 31.02 19.798 30.738 22.029 30.629 23.938 C 30.538 25.85 30.592 27.44 30.704 28.59 C 30.743 29.133 30.818 29.66 30.871 30.025 L 30.938 30.473 L 31.007 30.457 C 31.481 32.669 32.571 34.702 34.152 36.32 C 35.732 37.939 37.739 39.077 39.94 39.603 C 42.14 40.128 44.445 40.02 46.586 39.291 C 48.728 38.562 50.619 37.241 52.042 35.482 C 53.464 33.723 54.359 31.597 54.624 29.35 C 54.889 27.103 54.512 24.827 53.537 22.785 C 52.562 20.744 51.029 19.02 49.115 17.813 C 47.202 16.606 44.986 15.966 42.723 15.966 Z" fill="var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102)) /* {&quot;name&quot;:&quot;Tan 300&quot;} */"></path></svg>`,
                      svgContentId: 11626094539,
                      withExternalLayout: !0,
                    }),
                    y(j.div, {
                      className: `framer-8w5jft`,
                      "data-framer-name": `Testimonial Description Container`,
                      layoutDependency: O,
                      layoutId: `RYnHmOR5T`,
                      children: [
                        p(B, {
                          __fromCanvasComponent: !0,
                          children: p(S, {
                            children: p(j.p, {
                              className: `framer-styles-preset-1g29qxt`,
                              "data-styles-preset": `kv_coXiBH`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36)))`,
                              },
                              children: `For high profile events - weddings, corporates and private parties in Mumbai, Delhi and metro cities. For high profile events - weddings, corporates and private parties in Mumbai, Delhi and metro cities. or high profile events - weddings, corporates and private parties in Mumbai, Delhi and metro cities.`,
                            }),
                          }),
                          className: `framer-1gm5nxu`,
                          "data-framer-name": `Testimonial Description`,
                          fonts: [`Inter`],
                          layoutDependency: O,
                          layoutId: `x3ai7UpVG`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: ee,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        y(j.div, {
                          className: `framer-1f8n102`,
                          "data-framer-name": `Testimonial Details`,
                          layoutDependency: O,
                          layoutId: `eYn6sh3Ya`,
                          children: [
                            p(B, {
                              __fromCanvasComponent: !0,
                              children: p(S, {
                                children: p(j.h4, {
                                  className: `framer-styles-preset-1fzla5r`,
                                  "data-styles-preset": `NNuZZq6MZ`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60)))`,
                                  },
                                  children: `- Rahul Bhide`,
                                }),
                              }),
                              className: `framer-1rxsq8p`,
                              "data-framer-name": `Reviewer Name`,
                              fonts: [`Inter`],
                              layoutDependency: O,
                              layoutId: `r4GqCHlV6`,
                              style: {
                                "--extracted-1eung3n": `var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: f,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            p(B, {
                              __fromCanvasComponent: !0,
                              children: p(S, {
                                children: p(j.p, {
                                  className: `framer-styles-preset-1g29qxt`,
                                  "data-styles-preset": `kv_coXiBH`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102)))`,
                                  },
                                  children: `Wedding`,
                                }),
                              }),
                              className: `framer-1tli924`,
                              "data-framer-name": `Review Text`,
                              fonts: [`Inter`],
                              layoutDependency: O,
                              layoutId: `RUHe2jXr_`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: h,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Xr = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-NMaCh.framer-1n9cys4, .framer-NMaCh .framer-1n9cys4 { display: block; }`,
        `.framer-NMaCh.framer-1wxjas6 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 620px; justify-content: center; overflow: visible; padding: 100px 48px 100px 48px; position: relative; width: 620px; }`,
        `.framer-NMaCh .framer-1erf747 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NMaCh .framer-5smusi { flex: none; height: 40px; position: relative; width: 56px; }`,
        `.framer-NMaCh .framer-8w5jft { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 27px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NMaCh .framer-1gm5nxu, .framer-NMaCh .framer-1rxsq8p { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-NMaCh .framer-1f8n102 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-NMaCh .framer-1tli924 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 496px; word-break: break-word; word-wrap: break-word; }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-NMaCh.framer-1wxjas6, .framer-NMaCh .framer-1erf747, .framer-NMaCh .framer-8w5jft, .framer-NMaCh .framer-1f8n102 { gap: 0px; } .framer-NMaCh.framer-1wxjas6 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-NMaCh.framer-1wxjas6 > :first-child, .framer-NMaCh .framer-1erf747 > :first-child, .framer-NMaCh .framer-8w5jft > :first-child, .framer-NMaCh .framer-1f8n102 > :first-child { margin-top: 0px; } .framer-NMaCh.framer-1wxjas6 > :last-child, .framer-NMaCh .framer-1erf747 > :last-child, .framer-NMaCh .framer-8w5jft > :last-child, .framer-NMaCh .framer-1f8n102 > :last-child { margin-bottom: 0px; } .framer-NMaCh .framer-1erf747 > * { margin: 0px; margin-bottom: calc(46px / 2); margin-top: calc(46px / 2); } .framer-NMaCh .framer-8w5jft > * { margin: 0px; margin-bottom: calc(27px / 2); margin-top: calc(27px / 2); } .framer-NMaCh .framer-1f8n102 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }`,
        ...Be,
        ...Ir,
      ]),
      (Zr = Te(Yr, Xr, `framer-NMaCh`)),
      (Zr.displayName = `Testimonial Card`),
      (Zr.defaultProps = { height: 620, width: 620 }),
      fe(Zr, {
        variant: {
          options: [`wFK9ue_9d`, `HguE_4xPZ`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: F.Enum,
        },
        adoyeSvgI: {
          defaultValue: `For high profile events - weddings, corporates and private parties in Mumbai, Delhi and metro cities. For high profile events - weddings, corporates and private parties in Mumbai, Delhi and metro cities. or high profile events - weddings, corporates and private parties in Mumbai, Delhi and metro cities.`,
          displayTextArea: !0,
          title: `Testimonial`,
          type: F.String,
        },
        zuF80UG9A: {
          defaultValue: `- Rahul Bhide`,
          displayTextArea: !1,
          title: `User`,
          type: F.String,
        },
        mwd1PhJAI: {
          defaultValue: `Wedding`,
          displayTextArea: !1,
          title: `Event`,
          type: F.String,
        },
      }),
      de(
        Zr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...U(Ue),
          ...U(Fr),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function $r() {
  if (!ei()) return;
  const [e, t] = C(!document.hidden);
  return (
    b(() => {
      const e = () => t(!document.hidden);
      return (
        document.addEventListener(`visibilitychange`, e, !1),
        () => {
          document.removeEventListener(`visibilitychange`, e);
        }
      );
    }, []),
    e
  );
}
let ei;
  const ti = e(() => {
    (c(), (ei = () => typeof document === `object`));
  });
function ni(e, t) {
  let n;
    let r = e.current;
  if (
    (Object.defineProperty(e, `current`, {
      get() {
        return r;
      },
      set(e) {
        if (((r = e), e === null)) {
          t.abort();
          return;
        }
        n?.(e);
      },
      configurable: !0,
    }),
    r)
  )
    return r;
  const i = new Promise((e, r) => {
    ((n = e), t.signal.addEventListener(`abort`, r));
  }).catch(() => {});
  return i;
}
function X(e) {
  const {
      slots: t = [],
      startFrom: n,
      direction: r,
      effectsOptions: a,
      autoPlayControl: s,
      dragControl: c,
      alignment: l,
      gap: u,
      padding: ee,
      paddingPerSide: f,
      paddingTop: h,
      paddingRight: g,
      paddingBottom: S,
      paddingLeft: w,
      itemAmount: te,
      fadeOptions: T,
      intervalControl: O,
      transitionControl: k,
      arrowOptions: A,
      borderRadius: N,
      progressOptions: P,
      style: F,
    } = e;
    const {
      effectsOpacity: ae,
      effectsScale: I,
      effectsRotate: oe,
      effectsPerspective: L,
      effectsHover: R,
      playOffscreen: z,
    } = a;
    const {
      fadeContent: ce,
      overflow: B,
      fadeWidth: le,
      fadeInset: ue,
      fadeAlpha: de,
    } = T;
    const {
      showMouseControls: fe,
      arrowSize: V,
      arrowRadius: pe,
      arrowFill: H,
      leftArrow: U,
      rightArrow: W,
      arrowShouldSpace: G = !0,
      arrowShouldFadeIn: me = !1,
      arrowPosition: K,
      arrowPadding: he,
      arrowGap: ge,
      arrowPaddingTop: _e,
      arrowPaddingRight: ve,
      arrowPaddingBottom: ye,
      arrowPaddingLeft: be,
    } = A;
    const {
      showProgressDots: xe,
      dotSize: Se,
      dotsInset: q,
      dotsRadius: Ce,
      dotsPadding: we,
      dotsGap: Te,
      dotsFill: Ee,
      dotsBackground: De,
      dotsActiveOpacity: Oe,
      dotsOpacity: ke,
      dotsBlur: Ae,
    } = P;
    const je = f ? `${h}px ${g}px ${S}px ${w}px` : `${ee}px`;
    const Ne = se.current() === se.canvas;
    const Pe = t.filter(Boolean);
    const Fe = d.count(Pe);
    const Ie = Fe > 0;
    const J = r === `left` || r === `right`;
    const Le = r === `right` || r === `bottom`;
  if (!Ie)
    return y(`section`, {
      style: ai,
      children: [
        p(`div`, { style: oi, children: `⭐️` }),
        p(`p`, { style: si, children: `Connect to Content` }),
        p(`p`, {
          style: ci,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  const Re = m(null);
    const ze = _(() => [{ current: null }, { current: null }], [Pe]);
    const Be = m(void 0);
    const [Ve, He] = C({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    });
    const [Ue, We] = C(!1);
    const [Ge, Ke] = C(s);
    const [qe, Je] = C(!1);
    const [Ye, Xe] = C(!1);
    let Ze = [];
    let Qe = 4;
  Ne && (Qe = 1);
  const $e = v(() => {
      if (!Re.current) return;
      const e = ze[0].current;
        const t = ze[1].current;
        const n = J ? Re.current.offsetWidth : Re.current.offsetHeight;
        const r = e ? (J ? e.offsetLeft : e.offsetTop) : 0;
        const i = t
          ? J
            ? t.offsetLeft + t.offsetWidth
            : t.offsetTop + t.offsetHeight
          : 0;
        const a = i - r + u;
        const o = e ? (J ? e.offsetWidth : e.offsetHeight) : 0;
        const s = e ? e.offsetWidth : 0;
        const c = e ? e.offsetHeight : 0;
        const l = J
          ? Math.max(
              document.documentElement.clientWidth || 0,
              x.innerWidth || 0,
              Re.current.offsetWidth
            )
          : Math.max(
              document.documentElement.clientHeight || 0,
              x.innerHeight || 0,
              Re.current.offsetHeight
            );
      He({
        parent: n,
        children: a,
        item: o,
        itemWidth: s,
        itemHeight: c,
        viewportLength: l,
      });
    }, []);
    const et = v(async () => {
      const e = new AbortController();
        const [t, n] = ze;
      if (!Ne && (!t.current || !n.current))
        try {
          await Promise.all([ni(t, e), Fe > 1 ? ni(n, e) : !0]);
        } catch {
          e.abort();
        }
      D.read($e, !1, !0);
    }, [$e]);
  o(() => {
    et();
  }, [te]);
  const tt = m(!0);
  (b(
    () =>
      Me(Re.current, ({ contentSize: e }) => {
        (!tt.current && (e.width || e.height) && (et(), i(() => Xe(!0))),
          (tt.current = !1));
      }),
    []
  ),
    b(() => {
      if (Ye) {
        const e = setTimeout(() => i(() => Xe(!1)), 500);
        return () => clearTimeout(e);
      }
    }, [Ye]));
  const nt = Pe?.length;
    const rt = Ne ? 0 : Ve?.children;
    const it = Ve?.item + u;
    const at = n * it;
    const [ot, st] = C(n + nt);
    const [ct, lt] = C(!1);
  Ne && ot !== n && st(n);
  const ut = m(null);
    const dt = ne(ut);
    const ft = $r() && dt;
    const pt = Le ? 1 : -1;
    const mt = re(rt);
    const ht = J ? -n * (Ve?.itemWidth + u) : -n * (Ve?.itemHeight + u);
    const gt = () => pt * ot * it;
    const _t = Ne
      ? 0
      : M(mt, (e) => {
          const t = ie(-rt, -rt * 2, e);
          return isNaN(t) ? 0 : t;
        });
    const Y = ie(0, nt, ot);
    const vt = ie(0, -nt, ot);
  o(() => {
    Ve?.children !== null && !tt.current && Ye && mt.set(gt());
  }, [Ve, rt, pt, at, ot, it, Ye]);
  const yt = () => {
      Ne ||
        !Ie ||
        !Ve.parent ||
        ct ||
        (mt.get() !== gt() && E(mt, gt(), k),
        s &&
          Ge &&
          (z || ft) &&
          (Be.current = setTimeout(() => {
            (i(() => st((e) => e + 1)), yt());
          }, O * 1e3)));
    };
    const bt = (e, t = !1) => {
      Le
        ? t
          ? i(() => st((t) => t - e))
          : st((t) => t - e)
        : t
          ? i(() => st((t) => t + e))
          : st((t) => t + e);
    };
    const xt = (e) => {
      const t = ie(0, nt, ot);
        const n = ie(0, -nt, ot);
        const r = e - t;
        const a = e - Math.abs(n);
      i(Le ? () => st((e) => e - a) : () => st((e) => e + r));
    };
    const St = () => {
      i(() => lt(!0));
    };
    const Ct = (e, { offset: t, velocity: n }) => {
      i(() => lt(!1));
      const r = J ? t.x : t.y;
        const a = J ? n.x : n.y;
        const o = r < -Ve.item / 2;
        const s = r > Ve.item / 2;
        const c = Math.abs(r);
        const l = Math.round(c / Ve.item);
        const u = l === 0 ? 1 : l;
      a > 200
        ? bt(-u, !0)
        : a < -200
          ? bt(u, !0)
          : (o && bt(l, !0), s && bt(-l, !0));
    };
  b(() => {
    if (!(!ft || Ye || Fe <= 1))
      return (yt(), () => Be.current && clearTimeout(Be.current));
  }, [Ze, ft, Ye]);
  let wt = 0;
    const Tt = `calc(${100 / te}% - ${u}px + ${u / te}px)`;
  for (let e = 0; e < Qe; e++)
    Ze = Ze.concat(
      d.map(Pe, (t, n) => {
        let r;
        return (
          e === 0 &&
            (n === 0 ? (r = ze[0]) : n === Pe.length - 1 && (r = ze[1])),
          p(
            fi,
            {
              ref: r,
              slideKey: e + n + `lg`,
              index: e,
              width: J && te > 1 ? Tt : `100%`,
              height: J ? `100%` : te > 1 ? Tt : `100%`,
              size: Ve,
              child: t,
              numChildren: Pe?.length,
              wrappedValue: _t,
              childCounter: wt++,
              gap: u,
              isCanvas: Ne,
              isHorizontal: J,
              effectsOpacity: ae,
              effectsScale: I,
              effectsRotate: oe,
              children: e + n,
            },
            e + n + `lg`
          )
        );
      })
    );
  const Et = J ? `to right` : `to bottom`;
    const Dt = le / 2;
    const Ot = 100 - le / 2;
    const kt = di(ue, 0, Dt);
    const At = 100 - ue;
    const jt = `linear-gradient(${Et}, rgba(0, 0, 0, ${de}) ${kt}%, rgba(0, 0, 0, 1) ${Dt}%, rgba(0, 0, 0, 1) ${Ot}%, rgba(0, 0, 0, ${de}) ${At}%)`;
    const Mt = [];
    const Nt = {};
  if (xe) {
    for (let e = 0; e < Pe?.length; e++)
      Mt.push(
        p(
          pi,
          {
            dotStyle: { ...hi, width: Se, height: Se, backgroundColor: Ee },
            buttonStyle: li,
            selectedOpacity: Oe,
            opacity: ke,
            onClick: () => xt(e),
            wrappedIndex: Y,
            wrappedIndexInverted: vt,
            total: nt,
            index: e,
            gap: Te,
            padding: we,
            isHorizontal: J,
            isInverted: Le,
          },
          e
        )
      );
    Ae > 0 && (Nt.backdropFilter = Nt.WebkitBackdropFilter = `blur(${Ae}px)`);
  }
  const Pt = c
      ? {
          drag: J ? `x` : `y`,
          onDragStart: St,
          onDragEnd: Ct,
          dragDirectionLock: !0,
          values: { x: mt, y: mt },
          dragMomentum: !1,
        }
      : {};
    const Ft = K === `top-left` || K === `top-mid` || K === `top-right`;
    const It = K === `bottom-left` || K === `bottom-mid` || K === `bottom-right`;
    const Lt = K === `top-left` || K === `bottom-left`;
    const Rt = K === `top-right` || K === `bottom-right`;
    const zt = K === `top-mid` || K === `bottom-mid` || K === `auto`;
  return y(`section`, {
    style: {
      ...ii,
      padding: je,
      WebkitMaskImage: ce ? jt : void 0,
      maskImage: ce ? jt : void 0,
      opacity: Ve?.item === null ? ri : 1,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (We(!0), R || Ke(!1));
    },
    onMouseLeave: () => {
      (We(!1), R || Ke(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), i(() => Je(!0)));
    },
    onMouseUp: () => i(() => Je(!1)),
    ref: ut,
    children: [
      p(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: B ? `visible` : `hidden`,
          borderRadius: N,
          userSelect: `none`,
          perspective: Ne ? `none` : L,
        },
        children: p(j.ul, {
          ref: Re,
          ...Pt,
          style: {
            ...ii,
            gap: u,
            placeItems: l,
            x: J ? (Ne ? ht : _t) : 0,
            y: J ? 0 : Ne ? ht : _t,
            flexDirection: J ? `row` : `column`,
            transformStyle: oe !== 0 && !Ne ? `preserve-3d` : void 0,
            cursor: c ? (qe ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...F,
          },
          children: Ze,
        }),
      }),
      y(`fieldset`, {
        style: { ...ui },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          y(j.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: J ? `row` : `column`,
              justifyContent: G ? `space-between` : `center`,
              gap: G ? `unset` : ge,
              opacity: me ? ri : 1,
              alignItems: `center`,
              inset: he,
              top: G ? he : Ft ? _e : `unset`,
              left: G ? he : Lt ? be : zt ? 0 : `unset`,
              right: G ? he : Rt ? ve : zt ? 0 : `unset`,
              bottom: G ? he : It ? ye : `unset`,
            },
            animate: me && { opacity: Ue ? 1 : ri },
            transition: k,
            children: [
              p(j.button, {
                type: `button`,
                style: {
                  ...li,
                  backgroundColor: H,
                  width: V,
                  height: V,
                  borderRadius: pe,
                  rotate: J ? 0 : 90,
                  display: fe ? `block` : `none`,
                  pointerEvents: `auto`,
                },
                onClick: () => bt(-1, !0),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: p(`img`, {
                  decoding: `async`,
                  width: V,
                  height: V,
                  src:
                    U ||
                    `https://raw.githubusercontent.com/Aarifshaik/tmpShahi/refs/heads/main/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
                  alt: `Back Arrow`,
                }),
              }),
              p(j.button, {
                type: `button`,
                style: {
                  ...li,
                  backgroundColor: H,
                  width: V,
                  height: V,
                  borderRadius: pe,
                  rotate: J ? 0 : 90,
                  display: fe ? `block` : `none`,
                  pointerEvents: `auto`,
                },
                onClick: () => bt(1, !0),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: p(`img`, {
                  decoding: `async`,
                  width: V,
                  height: V,
                  src:
                    W ||
                    `https://raw.githubusercontent.com/Aarifshaik/tmpShahi/refs/heads/main/11KSGbIZoRSg4pjdnUoif6MKHI.svg`,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Mt.length > 1
            ? p(`div`, {
                style: {
                  ...mi,
                  left: J ? `50%` : q,
                  top: J ? `unset` : `50%`,
                  transform: J ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: J ? `row` : `column`,
                  bottom: J ? q : `unset`,
                  borderRadius: Ce,
                  backgroundColor: De,
                  userSelect: `none`,
                  ...Nt,
                },
                children: Mt,
              })
            : null,
        ],
      }),
    ],
  });
}
let ri;
  let ii;
  let ai;
  let oi;
  let si;
  let ci;
  let li;
  let ui;
  let di;
  let fi;
  let pi;
  let mi;
  let hi;
  const gi = e(() => {
    (u(),
      s(),
      je(),
      G(),
      O(),
      c(),
      ti(),
      (ri = 0.001),
      (X.defaultProps = {
        direction: `left`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
          playOffscreen: !1,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: {
          fadeContent: !1,
          overflow: !1,
          fadeWidth: 25,
          fadeAlpha: 0,
          fadeInset: 0,
        },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showProgressDots: !0 },
      }),
      fe(X, {
        slots: {
          type: F.Array,
          title: `Content`,
          control: { type: F.ComponentInstance },
        },
        direction: {
          type: F.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [
            `direction-left`,
            `direction-right`,
            `direction-up`,
            `direction-down`,
          ],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: X.defaultProps.direction,
        },
        autoPlayControl: {
          type: F.Boolean,
          title: `Auto Play`,
          defaultValue: !0,
        },
        intervalControl: {
          type: F.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: F.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: F.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: X.defaultProps.startFrom,
        },
        effectsOptions: {
          type: F.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: F.Number,
              title: `Opacity`,
              defaultValue: X.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: F.Number,
              title: `Scale`,
              defaultValue: X.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: F.Number,
              title: `Perspective`,
              defaultValue: X.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: F.Number,
              title: `Rotate`,
              defaultValue: X.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: F.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: X.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: F.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: X.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        alignment: {
          type: F.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        itemAmount: {
          type: F.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: X.defaultProps.itemAmount,
        },
        gap: { type: F.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: F.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [
            `paddingTop`,
            `paddingRight`,
            `paddingBottom`,
            `paddingLeft`,
          ],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: F.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: F.Transition,
          defaultValue: X.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: F.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: F.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: F.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: F.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: F.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: F.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        arrowOptions: {
          type: F.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: F.Boolean,
              title: `Show`,
              defaultValue: X.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: F.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: X.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: {
              type: F.Image,
              title: `Previous`,
              hidden: (e) => !e.showMouseControls,
            },
            rightArrow: {
              type: F.Image,
              title: `Next`,
              hidden: (e) => !e.showMouseControls,
            },
            arrowSize: {
              type: F.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: X.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: F.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: F.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: F.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: X.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: F.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: F.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: F.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: F.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: F.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: F.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: F.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: F.Object,
          title: `Dots`,
          controls: {
            showProgressDots: {
              type: F.Boolean,
              title: `Show`,
              defaultValue: !1,
            },
            dotSize: {
              type: F.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: F.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: F.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: F.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: F.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: F.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: F.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: F.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: F.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: F.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
      }),
      (ii = {
        display: `flex`,
        flexDirection: `row`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (ai = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (oi = { fontSize: 32, marginBottom: 10 }),
      (si = {
        margin: 0,
        marginBottom: 10,
        fontWeight: 600,
        textAlign: `center`,
      }),
      (ci = {
        margin: 0,
        opacity: 0.7,
        maxWidth: 180,
        lineHeight: 1.5,
        textAlign: `center`,
      }),
      (li = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (ui = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (di = (e, t, n) => Math.min(Math.max(e, t), n)),
      (fi = n(
        r(function (e, t) {
          const {
              slideKey: n,
              width: r,
              height: i,
              child: a,
              size: o,
              gap: s,
              wrappedValue: c,
              numChildren: l,
              childCounter: u,
              isCanvas: d,
              effects: ee,
              effectsOpacity: f,
              effectsScale: g,
              effectsRotate: _,
              isHorizontal: v,
              isLast: y,
              index: x,
            } = e;
            const S = m();
            const C = (o?.item + s) * u;
            const w = [-o?.item, 0, o?.parent - o?.item + s, o?.parent].map(
              (e) => e - C
            );
            const T = !d && M(c, w, [-_, 0, 0, _]);
            const E = !d && M(c, w, [_, 0, 0, -_]);
            const D = !d && M(c, w, [f, 1, 1, f]);
            const O = !d && M(c, w, [g, 1, 1, g]);
            const k = !d && M(c, w, [1, 1, 0, 0]);
            const j = !d && M(c, (e) => e >= w[1] && e <= w[2]);
          b(() => {
            if (j)
              return j.on(`change`, (e) => {
                const n = t?.current ?? S.current;
                n?.setAttribute(`aria-hidden`, !e);
              });
          }, []);
          const ne = d
              ? `visible`
              : M(
                  c,
                  [
                    w[0] - o.viewportLength,
                    A(w[1], w[2], 0.5),
                    w[3] + o.viewportLength,
                  ],
                  [`hidden`, `visible`, `hidden`]
                );
            const re = n + `child`;
          return p(te, {
            inherit: `id`,
            id: re,
            children: p(`li`, {
              style: { display: `contents` },
              "aria-hidden": x !== 0,
              children: h(a, {
                ref: t ?? S,
                key: re,
                style: {
                  ...a.props?.style,
                  flexShrink: 0,
                  userSelect: `none`,
                  width: r,
                  height: i,
                  opacity: D,
                  scale: O,
                  originX: v ? k : 0.5,
                  originY: v ? 0.5 : k,
                  rotateY: v ? T : 0,
                  rotateX: v ? 0 : E,
                  visibility: ne,
                },
                layoutId: a.props.layoutId
                  ? a.props.layoutId + `-original-` + x
                  : void 0,
              }),
            }),
          });
        })
      )),
      (pi = n(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        wrappedIndexInverted: a,
        dotStyle: o,
        buttonStyle: s,
        gap: c,
        padding: l,
        isHorizontal: u,
        isInverted: d,
        ...ee
      }) {
        let f = i === r;
        d && (f = Math.abs(a) === r);
        const m = c / 2;
          const h = !u && r > 0 ? m : l;
          const g = !u && r !== n - 1 ? m : l;
          const _ = u && r !== n - 1 ? m : l;
          const v = u && r > 0 ? m : l;
        return p(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...ee,
          style: { ...s, padding: `${h}px ${_}px ${g}px ${v}px` },
          children: p(j.div, {
            style: { ...o },
            initial: !1,
            animate: { opacity: f ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (mi = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (hi = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }));
  });
  let _i;
  let vi;
  let yi;
  const bi = e(() => {
    (G(),
      pe.loadFonts([`GF;Red Rose-regular`]),
      (_i = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Red Rose`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/redrose/v20/QdVISTYiLBjouPgEUajvsfWwDtc3MH8yrfsDdzSsYUVUjg.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (vi = [
        `.framer-f6Wgf .framer-styles-preset-ydxqne:not(.rich-text-wrapper), .framer-f6Wgf .framer-styles-preset-ydxqne.rich-text-wrapper h4 { --framer-font-family: "Red Rose", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1659px) and (min-width: 810px) { .framer-f6Wgf .framer-styles-preset-ydxqne:not(.rich-text-wrapper), .framer-f6Wgf .framer-styles-preset-ydxqne.rich-text-wrapper h4 { --framer-font-family: "Red Rose", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-f6Wgf .framer-styles-preset-ydxqne:not(.rich-text-wrapper), .framer-f6Wgf .framer-styles-preset-ydxqne.rich-text-wrapper h4 { --framer-font-family: "Red Rose", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (yi = `framer-f6Wgf`));
  });
function xi(e, ...t) {
  const n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
let Si;
  let Ci;
  let wi;
  let Ti;
  let Ei;
  let Di;
  let Oi;
  let ki;
  let Ai;
  let ji;
  let Mi;
  let Ni;
  let Pi;
  let Fi;
  let Ii;
  const Li = e(() => {
    (s(),
      G(),
      O(),
      c(),
      bi(),
      (Si = [`ttpssSEbb`, `Gdtuh9NIJ`, `qAWEesNsF`, `xpVTigcuR`]),
      (Ci = `framer-XhPQQ`),
      (wi = {
        Gdtuh9NIJ: `framer-v-mimd5v`,
        qAWEesNsF: `framer-v-1xvyxo7`,
        ttpssSEbb: `framer-v-1stk04b`,
        xpVTigcuR: `framer-v-twlbw2`,
      }),
      (Ti = {
        delay: 0,
        duration: 0.5,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Ei = (e) => {
        if (typeof e !== `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Di = (e) =>
        typeof e === `object` && e && typeof e.src === `string`
          ? e
          : typeof e === `string`
            ? { src: e }
            : void 0),
      (Oi = ({ value: e, children: t }) => {
        const n = g(T);
          const r = e ?? n.transition;
          const i = _(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(T.Provider, { value: i, children: t });
      }),
      (ki = j.create(S)),
      (Ai = {
        "Mob V1": `qAWEesNsF`,
        "Mob V2": `xpVTigcuR`,
        "Variant 1": `ttpssSEbb`,
        "Variant 2": `Gdtuh9NIJ`,
      }),
      (ji = ({
        backgroundColor: e,
        backgroundColorDark: t,
        description: n,
        fontSize: r,
        fontSizeV2: i,
        gap: a,
        height: o,
        id: s,
        offerMedia: c,
        padding2: l,
        srNumber: u,
        title: d,
        width: ee,
        ...f
      }) => ({
        ...f,
        CMmZ8SiPK: u ?? f.CMmZ8SiPK ?? `03`,
        H8h3xY8B3: i ?? f.H8h3xY8B3 ?? 39,
        I0ZRB622A: a ?? f.I0ZRB622A ?? 16,
        KNrnJuRJA: r ?? f.KNrnJuRJA ?? 40,
        lUuU9bonr: d ?? f.lUuU9bonr ?? `Venue Bookings`,
        pT3cdu49U:
          t ??
          f.pT3cdu49U ??
          `var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36))`,
        uRowj4sYX: l ?? f.uRowj4sYX ?? `26px 200px 40px 200px`,
        variant: Ai[f.variant] ?? f.variant ?? `ttpssSEbb`,
        xj2uxgqvR: c ??
          f.xj2uxgqvR ?? {
            alt: ``,
            pixelHeight: 1404,
            pixelWidth: 880,
            src: `https://framerusercontent.com/images/x8h066kK4xA3pq5nZQs4PaGPmA.png`,
            srcSet: `https://framerusercontent.com/images/x8h066kK4xA3pq5nZQs4PaGPmA.png?scale-down-to=1024 641w,https://framerusercontent.com/images/x8h066kK4xA3pq5nZQs4PaGPmA.png 880w`,
          },
        yGo9ss2ls:
          n ??
          f.yGo9ss2ls ??
          `We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event. `,
        YyR3FcsgW:
          e ??
          f.YyR3FcsgW ??
          `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
      })),
      (Mi = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Ni = r(function (e, t) {
        const n = m(null);
          const r = t ?? n;
          const i = a();
          const { activeLocale: o, setLocale: s } = ye();
          const c = K();
          const {
            style: l,
            className: u,
            layoutId: d,
            variant: ee,
            xj2uxgqvR: f,
            lUuU9bonr: h,
            yGo9ss2ls: g,
            CMmZ8SiPK: _,
            YyR3FcsgW: v,
            uRowj4sYX: b,
            pT3cdu49U: x,
            KNrnJuRJA: C,
            H8h3xY8B3: w,
            I0ZRB622A: T,
            ...E
          } = ji(e);
          const {
            baseVariant: D,
            classNames: O,
            clearLoadingGesture: k,
            gestureHandlers: A,
            gestureVariant: ne,
            isLoading: re,
            setGestureState: M,
            setVariant: ie,
            variants: N,
          } = we({
            cycleOrder: Si,
            defaultVariant: `ttpssSEbb`,
            ref: r,
            variant: ee,
            variantClassNames: wi,
          });
          const P = Mi(e, N);
          const F = [yi];
          const ae = V(Ci, ...F);
        return p(te, {
          id: d ?? i,
          children: p(ki, {
            animate: N,
            initial: !1,
            children: p(Oi, {
              value: Ti,
              children: p(j.div, {
                ...E,
                ...A,
                className: V(ae, `framer-1stk04b`, u, O),
                "data-framer-name": `Variant 1`,
                layoutDependency: P,
                layoutId: `ttpssSEbb`,
                ref: r,
                style: {
                  backgroundColor: `rgba(0, 0, 0, 0)`,
                  boxShadow: `none`,
                  ...l,
                },
                variants: {
                  Gdtuh9NIJ: {
                    backgroundColor: x,
                    boxShadow: `0px -6px 16px 0px rgba(0, 0, 0, 0.06)`,
                  },
                  qAWEesNsF: {
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    boxShadow: `none`,
                  },
                  xpVTigcuR: {
                    backgroundColor: x,
                    boxShadow: `0px -6px 16px 0px rgba(0, 0, 0, 0.06)`,
                  },
                },
                ...xi(
                  {
                    Gdtuh9NIJ: { "data-framer-name": `Variant 2` },
                    qAWEesNsF: { "data-framer-name": `Mob V1` },
                    xpVTigcuR: { "data-framer-name": `Mob V2` },
                  },
                  D,
                  ne
                ),
                children: y(j.div, {
                  className: `framer-yocom6`,
                  "data-framer-name": `Main`,
                  layoutDependency: P,
                  layoutId: `Pew8KGGkz`,
                  style: { "--1a8ny78": Ei(b), backgroundColor: v },
                  variants: {
                    Gdtuh9NIJ: { backgroundColor: x },
                    xpVTigcuR: { backgroundColor: x },
                  },
                  children: [
                    y(j.div, {
                      className: `framer-1dumr7c`,
                      "data-framer-name": `Offer`,
                      layoutDependency: P,
                      layoutId: `x7m10RfLf`,
                      style: {
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      },
                      children: [
                        y(j.div, {
                          className: `framer-1tej7af`,
                          "data-framer-name": `Header`,
                          layoutDependency: P,
                          layoutId: `L_U71qnWX`,
                          style: { "--cu3ghw": Ei(T) },
                          children: [
                            p(B, {
                              __fromCanvasComponent: !0,
                              children: p(S, {
                                children: p(j.p, {
                                  style: {
                                    "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                    "--framer-font-family": `"Red Rose", sans-serif`,
                                    "--framer-font-size": `calc(var(--variable-reference-KNrnJuRJA-cUupbw1io) * 1px)`,
                                    "--framer-font-weight": `700`,
                                    "--framer-letter-spacing": `0.02em`,
                                    "--framer-line-height": `90%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102)))`,
                                  },
                                  children: `03`,
                                }),
                              }),
                              className: `framer-131v2di`,
                              "data-framer-name": `Offering Number`,
                              fonts: [`GF;Red Rose-700`],
                              layoutDependency: P,
                              layoutId: `OYTQskVbY`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                "--framer-paragraph-spacing": `0px`,
                                "--variable-reference-H8h3xY8B3-cUupbw1io": w,
                                "--variable-reference-KNrnJuRJA-cUupbw1io": C,
                                opacity: 1,
                              },
                              text: _,
                              variants: {
                                Gdtuh9NIJ: {
                                  "--extracted-r6o4lv": `var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, rgb(234, 228, 220))`,
                                  "--variable-reference-H8h3xY8B3-cUupbw1io": w,
                                  opacity: 0.8,
                                },
                                qAWEesNsF: { opacity: 1 },
                                xpVTigcuR: {
                                  "--extracted-r6o4lv": `var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, rgb(234, 228, 220))`,
                                  opacity: 0.8,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...xi(
                                {
                                  Gdtuh9NIJ: {
                                    children: p(S, {
                                      children: p(j.p, {
                                        style: {
                                          "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                          "--framer-font-family": `"Red Rose", sans-serif`,
                                          "--framer-font-size": `calc(var(--variable-reference-H8h3xY8B3-cUupbw1io) * 1px)`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `90%`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, rgb(234, 228, 220)))`,
                                        },
                                        children: `03`,
                                      }),
                                    }),
                                    fonts: [`GF;Red Rose-500`],
                                  },
                                  qAWEesNsF: {
                                    children: p(S, {
                                      children: p(j.p, {
                                        style: {
                                          "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                          "--framer-font-family": `"Red Rose", sans-serif`,
                                          "--framer-font-size": `28px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `90%`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102)))`,
                                        },
                                        children: `03`,
                                      }),
                                    }),
                                  },
                                  xpVTigcuR: {
                                    children: p(S, {
                                      children: p(j.p, {
                                        style: {
                                          "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                          "--framer-font-family": `"Red Rose", sans-serif`,
                                          "--framer-font-size": `28px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.02em`,
                                          "--framer-line-height": `90%`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, rgb(234, 228, 220)))`,
                                        },
                                        children: `03`,
                                      }),
                                    }),
                                    fonts: [`GF;Red Rose-500`],
                                  },
                                },
                                D,
                                ne
                              ),
                            }),
                            p(B, {
                              __fromCanvasComponent: !0,
                              children: p(S, {
                                children: p(j.h4, {
                                  className: `framer-styles-preset-ydxqne`,
                                  "data-styles-preset": `Ovc4sItiw`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36)))`,
                                  },
                                  children: `Venue Bookings`,
                                }),
                              }),
                              className: `framer-19kjned`,
                              "data-framer-name": `Title`,
                              fonts: [`Inter`],
                              layoutDependency: P,
                              layoutId: `E92HwpPsn`,
                              style: {
                                "--extracted-1eung3n": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                "--framer-paragraph-spacing": `0px`,
                                opacity: 1,
                              },
                              text: h,
                              variants: {
                                Gdtuh9NIJ: {
                                  "--extracted-1eung3n": `var(--token-63ed7ac4-dbf4-44ba-83a1-845cc61bacd5, rgb(234, 228, 220))`,
                                  opacity: 0.9,
                                },
                                qAWEesNsF: { opacity: 1 },
                                xpVTigcuR: {
                                  "--extracted-1eung3n": `var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, rgb(234, 228, 220))`,
                                  opacity: 0.9,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...xi(
                                {
                                  Gdtuh9NIJ: {
                                    children: p(S, {
                                      children: p(j.h4, {
                                        className: `framer-styles-preset-ydxqne`,
                                        "data-styles-preset": `Ovc4sItiw`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-1eung3n, var(--token-63ed7ac4-dbf4-44ba-83a1-845cc61bacd5, rgb(234, 228, 220)))`,
                                        },
                                        children: `Venue Bookings`,
                                      }),
                                    }),
                                  },
                                  xpVTigcuR: {
                                    children: p(S, {
                                      children: p(j.h4, {
                                        className: `framer-styles-preset-ydxqne`,
                                        "data-styles-preset": `Ovc4sItiw`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-1eung3n, var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, rgb(234, 228, 220)))`,
                                        },
                                        children: `Venue Bookings`,
                                      }),
                                    }),
                                  },
                                },
                                D,
                                ne
                              ),
                            }),
                          ],
                        }),
                        p(j.div, {
                          className: `framer-1xl8kzo`,
                          "data-framer-name": `Offering Description Container`,
                          layoutDependency: P,
                          layoutId: `D60M92uMk`,
                          children: p(B, {
                            __fromCanvasComponent: !0,
                            children: p(S, {
                              children: p(j.p, {
                                style: {
                                  "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                  "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 300)`,
                                  "--framer-line-height": `1.6em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fcf7a7a1-7606-41a6-9def-cc628a424c0e, rgb(18, 18, 18)))`,
                                },
                                children: `We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event. `,
                              }),
                            }),
                            className: `framer-1wx4tzf`,
                            "data-framer-name": `Offering Details`,
                            fonts: [`FS;Montserrat-variable`],
                            layoutDependency: P,
                            layoutId: `P3NM9qOOY`,
                            style: {
                              "--extracted-2gg91v": `"wght" 300`,
                              "--extracted-r6o4lv": `var(--token-fcf7a7a1-7606-41a6-9def-cc628a424c0e, rgb(18, 18, 18))`,
                              "--framer-paragraph-spacing": `0px`,
                              opacity: 1,
                            },
                            text: g,
                            variants: {
                              Gdtuh9NIJ: {
                                "--extracted-r6o4lv": `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                                opacity: 0.8,
                              },
                              qAWEesNsF: { opacity: 1 },
                              xpVTigcuR: {
                                "--extracted-r6o4lv": `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                                opacity: 0.8,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...xi(
                              {
                                Gdtuh9NIJ: {
                                  children: p(S, {
                                    children: p(j.p, {
                                      style: {
                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 300)`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255)))`,
                                      },
                                      children: `We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event. `,
                                    }),
                                  }),
                                },
                                qAWEesNsF: {
                                  children: p(S, {
                                    children: p(j.p, {
                                      style: {
                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                        "--framer-font-size": `14px`,
                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 300)`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fcf7a7a1-7606-41a6-9def-cc628a424c0e, rgb(18, 18, 18)))`,
                                      },
                                      children: `We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event. `,
                                    }),
                                  }),
                                },
                                xpVTigcuR: {
                                  children: p(S, {
                                    children: p(j.p, {
                                      style: {
                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                        "--framer-font-size": `14px`,
                                        "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 300)`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255)))`,
                                      },
                                      children: `We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event. `,
                                    }),
                                  }),
                                },
                              },
                              D,
                              ne
                            ),
                          }),
                        }),
                      ],
                    }),
                    p(L, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        sizes: `calc((${c?.width || `100vw`} - ${b * 2}px) / 4)`,
                        ...Di(f),
                      },
                      className: `framer-oqlhk7`,
                      "data-framer-name": `image main`,
                      layoutDependency: P,
                      layoutId: `sGDS2CQOQ`,
                      style: {
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                        filter: `brightness(1.1) saturate(0.7)`,
                        WebkitFilter: `brightness(1.1) saturate(0.7)`,
                      },
                      ...xi(
                        {
                          qAWEesNsF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: W((c?.y || 0) + 0 + 0 + 24 + 284),
                              sizes: `calc(${c?.width || `100vw`} - 48px)`,
                              ...Di(f),
                            },
                          },
                          xpVTigcuR: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: W((c?.y || 0) + 0 + 0 + 24 + 284),
                              sizes: `calc(${c?.width || `100vw`} - 48px)`,
                              ...Di(f),
                            },
                          },
                        },
                        D,
                        ne
                      ),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Pi = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-XhPQQ.framer-1gn2z7n, .framer-XhPQQ .framer-1gn2z7n { display: block; }`,
        `.framer-XhPQQ.framer-1stk04b { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1920px; }`,
        `.framer-XhPQQ .framer-yocom6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: var(--1a8ny78); position: relative; width: 100%; }`,
        `.framer-XhPQQ .framer-1dumr7c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 60%; }`,
        `.framer-XhPQQ .framer-1tej7af { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: var(--cu3ghw); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XhPQQ .framer-131v2di { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 66px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-XhPQQ .framer-19kjned { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-XhPQQ .framer-1xl8kzo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 10px; position: relative; width: 100%; }`,
        `.framer-XhPQQ .framer-1wx4tzf { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-XhPQQ .framer-oqlhk7 { flex: none; height: 220px; overflow: hidden; position: relative; width: 25%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-XhPQQ.framer-v-mimd5v .framer-yocom6 { height: 286px; order: 0; }`,
        `.framer-XhPQQ.framer-v-mimd5v .framer-1dumr7c { gap: 18px; order: 0; }`,
        `.framer-XhPQQ.framer-v-mimd5v .framer-oqlhk7 { order: 1; z-index: 1; }`,
        `.framer-XhPQQ.framer-v-1xvyxo7.framer-1stk04b, .framer-XhPQQ.framer-v-twlbw2.framer-1stk04b { width: 390px; }`,
        `.framer-XhPQQ.framer-v-1xvyxo7 .framer-yocom6 { flex-direction: column; gap: 24px; justify-content: flex-start; padding: 24px 24px 40px 24px; }`,
        `.framer-XhPQQ.framer-v-1xvyxo7 .framer-1dumr7c { gap: 10px; width: 100%; }`,
        `.framer-XhPQQ.framer-v-1xvyxo7 .framer-1tej7af, .framer-XhPQQ.framer-v-twlbw2 .framer-1tej7af { gap: 12px; }`,
        `.framer-XhPQQ.framer-v-1xvyxo7 .framer-131v2di, .framer-XhPQQ.framer-v-twlbw2 .framer-131v2di { width: 40px; }`,
        `.framer-XhPQQ.framer-v-1xvyxo7 .framer-1xl8kzo, .framer-XhPQQ.framer-v-twlbw2 .framer-1xl8kzo { padding: 6px; }`,
        `.framer-XhPQQ.framer-v-1xvyxo7 .framer-oqlhk7 { width: 100%; }`,
        `.framer-XhPQQ.framer-v-twlbw2 .framer-yocom6 { flex-direction: column; gap: 24px; justify-content: flex-start; order: 0; padding: 24px 24px 40px 24px; }`,
        `.framer-XhPQQ.framer-v-twlbw2 .framer-1dumr7c { gap: 10px; order: 0; width: 100%; }`,
        `.framer-XhPQQ.framer-v-twlbw2 .framer-oqlhk7 { order: 1; width: 100%; z-index: 1; }`,
        ...vi,
      ]),
      (Fi = Te(Ni, Pi, `framer-XhPQQ`)),
      (Fi.displayName = `Offering Item`),
      (Fi.defaultProps = { height: 286, width: 1920 }),
      fe(Fi, {
        variant: {
          options: [`ttpssSEbb`, `Gdtuh9NIJ`, `qAWEesNsF`, `xpVTigcuR`],
          optionTitles: [`Variant 1`, `Variant 2`, `Mob V1`, `Mob V2`],
          title: `Variant`,
          type: F.Enum,
        },
        xj2uxgqvR: {
          __defaultAssetReference: `data:framer/asset-reference,x8h066kK4xA3pq5nZQs4PaGPmA.png?originalFilename=image.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,x8h066kK4xA3pq5nZQs4PaGPmA.png?originalFilename=image.png&preferredSize=auto`,
          },
          title: `Offer Media`,
          type: F.ResponsiveImage,
        },
        lUuU9bonr: {
          defaultValue: `Venue Bookings`,
          displayTextArea: !1,
          title: `Title`,
          type: F.String,
        },
        yGo9ss2ls: {
          defaultValue: `We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event.  We help book premium venues in India and global destinations, ensuring the perfect setting for your event. `,
          displayTextArea: !0,
          title: `Description`,
          type: F.String,
        },
        CMmZ8SiPK: {
          defaultValue: `03`,
          displayTextArea: !1,
          title: `Sr. Number`,
          type: F.String,
        },
        YyR3FcsgW: {
          defaultValue: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204)) /* {"name":"Brown 200"} */`,
          title: `Background Color`,
          type: F.Color,
        },
        uRowj4sYX: {
          defaultValue: `26px 200px 40px 200px`,
          title: `Padding 2`,
          type: F.Padding,
        },
        pT3cdu49U: {
          defaultValue: `var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36)) /* {"name":"Brown 500"} */`,
          title: `Background Color Dark`,
          type: F.Color,
        },
        KNrnJuRJA: { defaultValue: 40, title: `Font Size`, type: F.Number },
        H8h3xY8B3: { defaultValue: 39, title: `Font Size v2`, type: F.Number },
        I0ZRB622A: { defaultValue: 16, min: 0, title: `Gap`, type: F.Number },
      }),
      (Ii = [
        {
          defaultValue: 100,
          maxValue: 900,
          minValue: 100,
          name: `Weight`,
          tag: `wght`,
        },
      ]),
      de(
        Fi,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Red Rose`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/redrose/v20/QdVISTYiLBjouPgEUajvsfWwDtc3MH8ySvwDdzSsYUVUjg.woff2`,
                weight: `700`,
              },
              {
                family: `Red Rose`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/redrose/v20/QdVISTYiLBjouPgEUajvsfWwDtc3MH8yn_sDdzSsYUVUjg.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                family: `Montserrat`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/WQEWGAOT5Y4ZIJZBMK7T5E3FXSE4KGYR/X4SXWKMX6HZVKZLTW363DK6FT6KM35TT/DPVLBFNJ4QU4LALI56JBIEBZHJEBGHQA.woff2`,
                variationAxes: Ii,
                weight: `400`,
              },
            ],
          },
          ...U(_i),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
  let Ri;
  let zi;
  let Bi;
  const Vi = e(() => {
    (G(),
      pe.loadFonts([
        `CUSTOM;Perpetua Regular`,
        `Inter-Black`,
        `Inter-BlackItalic`,
        `Inter-BoldItalic`,
      ]),
      (Ri = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Perpetua Regular`,
              source: `custom`,
              url: `https://framerusercontent.com/assets/dsn8PWiynQoCKaC6MtbaPJCKs.woff2`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/jn4BtSPLlS0NDp1KiFAtFKiiY0o.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/g0c8vEViiXNlKAgI4Ymmk3Ig.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (zi = [
        `.framer-HmlrE .framer-styles-preset-1dty7ms:not(.rich-text-wrapper), .framer-HmlrE .framer-styles-preset-1dty7ms.rich-text-wrapper h3 { --framer-font-family: "Perpetua Regular", "Perpetua Regular Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 44px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1659px) and (min-width: 810px) { .framer-HmlrE .framer-styles-preset-1dty7ms:not(.rich-text-wrapper), .framer-HmlrE .framer-styles-preset-1dty7ms.rich-text-wrapper h3 { --framer-font-family: "Perpetua Regular", "Perpetua Regular Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 34px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-HmlrE .framer-styles-preset-1dty7ms:not(.rich-text-wrapper), .framer-HmlrE .framer-styles-preset-1dty7ms.rich-text-wrapper h3 { --framer-font-family: "Perpetua Regular", "Perpetua Regular Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Bi = `framer-HmlrE`));
  });
  let Hi;
  let Ui;
  let Wi;
  const Gi = e(() => {
    (G(),
      pe.loadFonts([`CUSTOM;Perpetua Regular`]),
      (Hi = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Perpetua Regular`,
              source: `custom`,
              url: `https://framerusercontent.com/assets/dsn8PWiynQoCKaC6MtbaPJCKs.woff2`,
            },
          ],
        },
      ]),
      (Ui = [
        `.framer-iHBud .framer-styles-preset-h4ei15:not(.rich-text-wrapper), .framer-iHBud .framer-styles-preset-h4ei15.rich-text-wrapper h2 { --framer-font-family: "Perpetua Regular", "Perpetua Regular Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 64px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1659px) and (min-width: 810px) { .framer-iHBud .framer-styles-preset-h4ei15:not(.rich-text-wrapper), .framer-iHBud .framer-styles-preset-h4ei15.rich-text-wrapper h2 { --framer-font-family: "Perpetua Regular", "Perpetua Regular Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 54px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-iHBud .framer-styles-preset-h4ei15:not(.rich-text-wrapper), .framer-iHBud .framer-styles-preset-h4ei15.rich-text-wrapper h2 { --framer-font-family: "Perpetua Regular", "Perpetua Regular Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Wi = `framer-iHBud`));
  });
function Ki(e, ...t) {
  const n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
let qi;
  let Ji;
  let Yi;
  let Xi;
  let Zi;
  let Qi;
  let $i;
  let ea;
  let ta;
  let na;
  let ra;
  let ia;
  let aa;
  let oa;
  let sa;
  let ca;
  const la = e(() => {
    (s(),
      G(),
      O(),
      c(),
      Vi(),
      Gi(),
      (qi = [`WTGNoWhF_`, `QPZCYWAXl`, `T9Rel4hcx`, `cZol92GKY`]),
      (Ji = `framer-CdcfU`),
      (Yi = {
        cZol92GKY: `framer-v-17l1era`,
        QPZCYWAXl: `framer-v-18tokr1`,
        T9Rel4hcx: `framer-v-h3fgch`,
        WTGNoWhF_: `framer-v-38t1dj`,
      }),
      (Xi = (e) => {
        if (typeof e !== `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Zi = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Qi = ({ value: e, children: t }) => {
        const n = g(T);
          const r = e ?? n.transition;
          const i = _(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(T.Provider, { value: i, children: t });
      }),
      ($i = j.create(S)),
      (ea = { Horizontal: `row`, Vertical: `column` }),
      (ta = {
        "Space Around": `space-around`,
        "Space Between": `space-between`,
        "Space Evenly": `space-evenly`,
        Center: `center`,
        End: `flex-end`,
        Start: `flex-start`,
      }),
      (na = {
        "Mob V1": `T9Rel4hcx`,
        "Mob V2": `cZol92GKY`,
        "Variant 1": `WTGNoWhF_`,
        "Variant 2": `QPZCYWAXl`,
      }),
      (ra = ({
        direction: e,
        distribute: t,
        gap: n,
        height: r,
        id: i,
        padding: a,
        padding2: o,
        width: s,
        ...c
      }) => ({
        ...c,
        buwrOy0Pr: a ?? c.buwrOy0Pr ?? `16px 200px 64px 200px`,
        DHXMnt3hw: ea[e] ?? e ?? c.DHXMnt3hw ?? `row`,
        dlBRJuex7: ta[t] ?? t ?? c.dlBRJuex7 ?? `space-between`,
        hPTwISuF_: n ?? c.hPTwISuF_ ?? 40,
        sjz0EtqeS: o ?? c.sjz0EtqeS ?? `24px 200px 40px 200px`,
        variant: na[c.variant] ?? c.variant ?? `WTGNoWhF_`,
      })),
      (ia = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (aa = r(function (e, t) {
        const n = m(null);
          const r = t ?? n;
          const i = a();
          const { activeLocale: o, setLocale: s } = ye();
        K();
        const {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            buwrOy0Pr: ee,
            sjz0EtqeS: f,
            DHXMnt3hw: h,
            dlBRJuex7: g,
            hPTwISuF_: _,
            ...v
          } = ra(e);
          const {
            baseVariant: b,
            classNames: x,
            clearLoadingGesture: C,
            gestureHandlers: w,
            gestureVariant: T,
            isLoading: E,
            setGestureState: D,
            setVariant: O,
            variants: k,
          } = we({
            cycleOrder: qi,
            defaultVariant: `WTGNoWhF_`,
            ref: r,
            variant: d,
            variantClassNames: Yi,
          });
          const A = ia(e, k);
          const ne = [Wi, Bi];
          const re = V(Ji, ...ne);
          const M = () => b !== `QPZCYWAXl`;
        return p(te, {
          id: u ?? i,
          children: p($i, {
            animate: k,
            initial: !1,
            children: p(Qi, {
              value: Zi,
              children: p(j.div, {
                ...v,
                ...w,
                className: V(re, `framer-38t1dj`, l, x),
                "data-framer-name": `Variant 1`,
                layoutDependency: A,
                layoutId: `WTGNoWhF_`,
                ref: r,
                style: {
                  "--a28cpc": Xi(f),
                  "--t2jtjc": Xi(ee),
                  backgroundColor: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                  ...c,
                },
                variants: {
                  cZol92GKY: { backgroundColor: `rgb(71, 48, 33)` },
                  QPZCYWAXl: { backgroundColor: `rgb(71, 48, 33)` },
                },
                ...Ki(
                  {
                    cZol92GKY: { "data-framer-name": `Mob V2` },
                    QPZCYWAXl: { "data-framer-name": `Variant 2` },
                    T9Rel4hcx: { "data-framer-name": `Mob V1` },
                  },
                  b,
                  T
                ),
                children: y(j.div, {
                  className: `framer-1lgisxk`,
                  "data-framer-name": `Offering Description Container`,
                  layoutDependency: A,
                  layoutId: `vWiW_rXqN`,
                  style: {
                    "--1vik3ls": h === `column` ? void 0 : `1 0 0px`,
                    "--1vvrpt8": g,
                    "--1w68gxm": h,
                    "--v3ozbp": Xi(_),
                    "--xrz1pm": h === `column` ? `100%` : `1px`,
                  },
                  children: [
                    p(B, {
                      __fromCanvasComponent: !0,
                      children: p(S, {
                        children: p(j.h2, {
                          className: `framer-styles-preset-h4ei15`,
                          "data-styles-preset": `qurIUv5_4`,
                          style: {
                            "--framer-text-color": `var(--extracted-1of0zx5, var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36)))`,
                          },
                          children: `Our Signature Offerings`,
                        }),
                      }),
                      className: `framer-hau4ej`,
                      "data-framer-name": `Offering Description`,
                      fonts: [`Inter`],
                      layoutDependency: A,
                      layoutId: `pOWaYvz0q`,
                      style: {
                        "--extracted-1of0zx5": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                        "--framer-paragraph-spacing": `0px`,
                        opacity: 1,
                      },
                      variants: {
                        cZol92GKY: {
                          "--extracted-a0htzi": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                          opacity: 0.89,
                        },
                        QPZCYWAXl: {
                          "--extracted-a0htzi": `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                          opacity: 0.89,
                        },
                        T9Rel4hcx: {
                          "--extracted-a0htzi": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                          opacity: 1,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Ki(
                        {
                          cZol92GKY: {
                            children: p(S, {
                              children: p(j.h3, {
                                className: `framer-styles-preset-1dty7ms`,
                                "data-styles-preset": `il5gkhNo4`,
                                style: {
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240)))`,
                                },
                                children: `Our Signature Offerings`,
                              }),
                            }),
                          },
                          QPZCYWAXl: {
                            children: p(S, {
                              children: p(j.h3, {
                                className: `framer-styles-preset-1dty7ms`,
                                "data-styles-preset": `il5gkhNo4`,
                                style: {
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255)))`,
                                },
                                children: `Our Signature Offerings`,
                              }),
                            }),
                          },
                          T9Rel4hcx: {
                            children: p(S, {
                              children: p(j.h3, {
                                className: `framer-styles-preset-1dty7ms`,
                                "data-styles-preset": `il5gkhNo4`,
                                style: {
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36)))`,
                                },
                                children: `Our Signature Offerings`,
                              }),
                            }),
                          },
                        },
                        b,
                        T
                      ),
                    }),
                    M() &&
                      p(B, {
                        __fromCanvasComponent: !0,
                        children: p(S, {
                          children: p(j.p, {
                            style: {
                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                              "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 300)`,
                              "--framer-line-height": `1.6em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0fd98781-3a67-4b0a-af65-4aa7f42eb7ce, rgb(20, 15, 12)))`,
                            },
                            children: `Indulge in bespoke culinary, artistry and seamless event experiences, designed to elevate every celebration with sophistication and excellence.`,
                          }),
                        }),
                        className: `framer-a5ov0l`,
                        "data-framer-name": `Offering Details`,
                        fonts: [`FS;Montserrat-variable`],
                        layoutDependency: A,
                        layoutId: `ct9YAqMav`,
                        style: {
                          "--extracted-2gg91v": `"wght" 300`,
                          "--extracted-r6o4lv": `var(--token-0fd98781-3a67-4b0a-af65-4aa7f42eb7ce, rgb(20, 15, 12))`,
                          "--framer-paragraph-spacing": `0px`,
                          opacity: 1,
                        },
                        variants: { cZol92GKY: { opacity: 0 } },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (oa = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-CdcfU.framer-pkvjd9, .framer-CdcfU .framer-pkvjd9 { display: block; }`,
        `.framer-CdcfU.framer-38t1dj { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 21px; height: min-content; justify-content: center; overflow: visible; padding: var(--t2jtjc); position: relative; width: 1920px; }`,
        `.framer-CdcfU .framer-1lgisxk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: var(--1w68gxm); flex-wrap: nowrap; gap: var(--v3ozbp); height: min-content; justify-content: var(--1vvrpt8); overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-CdcfU .framer-hau4ej, .framer-CdcfU .framer-a5ov0l { flex: var(--1vik3ls); height: auto; position: relative; white-space: pre-wrap; width: var(--xrz1pm); word-break: break-word; word-wrap: break-word; }`,
        `.framer-CdcfU.framer-v-18tokr1.framer-38t1dj { align-content: flex-start; align-items: flex-start; height: 157px; padding: var(--a28cpc); }`,
        `.framer-CdcfU.framer-v-18tokr1 .framer-1lgisxk { padding: 0px 0px 0px 10px; }`,
        `.framer-CdcfU.framer-v-h3fgch.framer-38t1dj { padding: 32px; width: 390px; }`,
        `.framer-CdcfU.framer-v-h3fgch .framer-1lgisxk, .framer-CdcfU.framer-v-17l1era .framer-1lgisxk { flex-direction: column; gap: 16px; justify-content: flex-start; }`,
        `.framer-CdcfU.framer-v-h3fgch .framer-hau4ej, .framer-CdcfU.framer-v-h3fgch .framer-a5ov0l, .framer-CdcfU.framer-v-17l1era .framer-hau4ej, .framer-CdcfU.framer-v-17l1era .framer-a5ov0l { flex: none; width: 100%; }`,
        `.framer-CdcfU.framer-v-17l1era.framer-38t1dj { align-content: flex-start; align-items: flex-start; gap: 20px; padding: 32px; width: 390px; }`,
        ...Ui,
        ...zi,
      ]),
      (sa = Te(aa, oa, `framer-CdcfU`)),
      (sa.displayName = `Offering Header`),
      (sa.defaultProps = { height: 157, width: 1920 }),
      fe(sa, {
        variant: {
          options: [`WTGNoWhF_`, `QPZCYWAXl`, `T9Rel4hcx`, `cZol92GKY`],
          optionTitles: [`Variant 1`, `Variant 2`, `Mob V1`, `Mob V2`],
          title: `Variant`,
          type: F.Enum,
        },
        buwrOy0Pr: {
          defaultValue: `16px 200px 64px 200px`,
          title: `Padding`,
          type: F.Padding,
        },
        sjz0EtqeS: {
          defaultValue: `24px 200px 40px 200px`,
          title: `Padding 2`,
          type: F.Padding,
        },
        DHXMnt3hw: {
          defaultValue: `row`,
          displaySegmentedControl: !0,
          optionIcons: [`direction-horizontal`, `direction-vertical`],
          options: [`row`, `column`],
          optionTitles: [`Horizontal`, `Vertical`],
          title: `Direction`,
          type: F.Enum,
        },
        dlBRJuex7: {
          defaultValue: `space-between`,
          options: [
            `flex-start`,
            `center`,
            `flex-end`,
            `space-between`,
            `space-around`,
            `space-evenly`,
          ],
          optionTitles: [
            `Start`,
            `Center`,
            `End`,
            `Space Between`,
            `Space Around`,
            `Space Evenly`,
          ],
          title: `Distribute`,
          type: F.Enum,
        },
        hPTwISuF_: { defaultValue: 40, min: 0, title: `Gap`, type: F.Number },
      }),
      (ca = [
        {
          defaultValue: 100,
          maxValue: 900,
          minValue: 100,
          name: `Weight`,
          tag: `wght`,
        },
      ]),
      de(
        sa,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                family: `Montserrat`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/WQEWGAOT5Y4ZIJZBMK7T5E3FXSE4KGYR/X4SXWKMX6HZVKZLTW363DK6FT6KM35TT/DPVLBFNJ4QU4LALI56JBIEBZHJEBGHQA.woff2`,
                variationAxes: ca,
                weight: `400`,
              },
            ],
          },
          ...U(Hi),
          ...U(Ri),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
  let ua;
  let da;
  let fa;
  let pa;
  let ma;
  let ha;
  let ga;
  let Z;
  let _a;
  let va;
  let ya;
  let ba;
  let xa;
  let Sa;
  let Ca;
  let wa;
  let Ta;
  let Ea;
  let Da;
  let Oa;
  let ka;
  let Aa;
  let ja;
  let Ma;
  let Na;
  let Pa;
  let Fa;
  let Ia;
  let La;
  let Ra;
  let za;
  let Ba;
  let Q;
  let Va;
  let Ha;
  let Ua;
  let Wa;
  let Ga;
  let Ka;
  let $;
  let qa;
  let Ja;
  let Ya;
  let Xa;
  let Za;
  let Qa;
  let $a;
  let eo;
  let to;
  let no;
  let ro;
  let io;
  let ao;
  let oo;
  let so;
  const co = e(() => {
    (s(),
      G(),
      O(),
      c(),
      l(),
      Ae(),
      vt(),
      sr(),
      br(),
      Nr(),
      Qr(),
      Je(),
      Xe(),
      Ge(),
      gi(),
      Li(),
      Ke(),
      la(),
      Ye(),
      Qe(),
      (ua = H(Ie)),
      (da = H(Ne)),
      (fa = Oe(Ne)),
      (pa = De(P)),
      (ma = H(or)),
      (ha = H(Mr)),
      (ga = De(j.div)),
      (Z = Ee(L)),
      (_a = Ee(j.div)),
      (va = H(sa)),
      (ya = Oe(sa)),
      (ba = H(Fi)),
      (xa = Oe(Fi)),
      (Sa = H(Y)),
      (Ca = H(X)),
      (wa = H(lr)),
      (Ta = H(ke)),
      (Ea = H(Zr)),
      (Da = H(Fe)),
      (Oa = H(Pe)),
      (ka = {
        dZS61v7lZ: `(min-width: 1366px) and (max-width: 1659.98px)`,
        hBNTufln9: `(max-width: 809.98px)`,
        jIFZ85Jgy: `(min-width: 810px) and (max-width: 1365.98px)`,
        LiSfdOU15: `(min-width: 1660px) and (max-width: 1919.98px)`,
        ws6H7JGeR: `(min-width: 1920px)`,
      }),
      (Aa = () => typeof document < `u`),
      (ja = `framer-JGDAB`),
      (Ma = {
        dZS61v7lZ: `framer-v-1vl5jtp`,
        hBNTufln9: `framer-v-13dj5pp`,
        jIFZ85Jgy: `framer-v-jeceav`,
        LiSfdOU15: `framer-v-vdx7iz`,
        ws6H7JGeR: `framer-v-1i8942i`,
      }),
      (Na = {
        delay: 3,
        duration: 0.6,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Pa = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Na,
        x: 0,
        y: 0,
      }),
      (Fa = {
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
      (Ia = () =>
        document.querySelector(`#template-overlay`) ??
        document.querySelector(`#overlay`) ??
        document.body),
      (La = ({ children: e, blockDocumentScrolling: t, enabled: n = !0 }) => {
        const [r, i] = Se({ blockDocumentScrolling: t });
        return e({
          hide: () => i(!1),
          show: () => i(!0),
          toggle: () => i(!r),
          visible: n && r,
        });
      }),
      (Ra = {
        delay: 0,
        duration: 0.7,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (za = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ra,
        x: 0,
        y: 0,
      }),
      (Ba = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Q = (e, t) => {
        if (!(!e || typeof e !== `object`)) return { ...e, alt: t };
      }),
      (Va = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (Ha = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Va,
        x: 0,
        y: 0,
      }),
      (Ua = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 16,
      }),
      (Wa = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.3,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Ga = { delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ka = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.3,
        skewX: 0,
        skewY: 0,
        transition: Ga,
        x: 0,
        y: 0,
      }),
      ($ = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (qa = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: $,
        x: 0,
        y: 0,
      }),
      (Ja = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.6,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 16,
      }),
      (Ya = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.6,
        skewX: 0,
        skewY: 0,
        transition: $,
        x: 0,
        y: 16,
      }),
      (Xa = (e, t, n) => {
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
      (Za = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Qa = {
        delay: 0,
        duration: 0.6,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      ($a = ({ value: e }) => {
        const t = ve();
        return t
          ? null
          : p(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            });
      }),
      (eo = {
        "Desktop 2": `LiSfdOU15`,
        Desktop: `ws6H7JGeR`,
        Laptop: `dZS61v7lZ`,
        Phone: `hBNTufln9`,
        Tablet: `jIFZ85Jgy`,
      }),
      (to = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: eo[r.variant] ?? r.variant ?? `ws6H7JGeR`,
      })),
      (no = r(function (e, n) {
        const r = m(null);
          const i = n ?? r;
          const o = a();
          const { activeLocale: s, setLocale: c } = ye();
          const l = K();
          const { style: u, className: d, layoutId: f, variant: h, ...g } = to(e);
          const v = _(() => $e(void 0, s), [void 0, s]);
        be(v);
        const [b, x] = ge(h, ka, !1);
          const { activeVariantCallback: C, delay: T } = me(void 0);
          const E = ({ overlay: e, loadMore: t }) =>
            C(async (...t) => {
              e.toggle();
            });
          const D = [J];
          const O = V(ja, ...D);
          const k = () => (Aa() ? ![`jIFZ85Jgy`, `hBNTufln9`].includes(b) : !0);
          const A = q(`s3WMO8M4V`);
        Ce();
        const ne = m(null);
          const re = () => !!(!Aa() || [`jIFZ85Jgy`, `hBNTufln9`].includes(b));
          const M = q(`D40sWs3lC`);
          const ie = m(null);
          const F = m(null);
          const se = q(`JxIQAQa2s`);
          const ue = m(null);
          const de = () => !Aa() || b === `jIFZ85Jgy`;
          const fe = q(`ne2lpUwVx`);
          const pe = m(null);
          const H = q(`K0LRjcQFn`);
          const U = () => (Aa() ? b !== `hBNTufln9` : !0);
          const G = q(`K6rmaSrnp`);
          const _e = m(null);
          const ve = q(`haRYq660O`);
          const xe = m(null);
          const Se = q(`VNr_OVG1t`);
          const we = m(null);
          const Te = q(`ZEGJhNfTk`);
          const Ee = m(null);
          const De = q(`asHKOU9VK`);
          const Oe = m(null);
          const Ae = q(`cWq8E8N32`);
          const je = m(null);
          const Me = q(`xMnl_Zm6f`);
          const Le = m(null);
          const Re = q(`gXgBojMP3`);
          const ze = m(null);
          const Be = q(`svp6JP1aG`);
          const Ve = m(null);
          const He = q(`L9PjcGOZ9`);
          const Ue = m(null);
          const We = () => !Aa() || b === `hBNTufln9`;
          const Ge = q(`Y7uwoUJZU`);
          const Ke = m(null);
          const qe = q(`IDQiTArAF`);
          const Je = m(null);
          const Ye = q(`t06iz6Ee5`);
          const Xe = m(null);
        return (
          he({}),
          p(oe.Provider, {
            value: { primaryVariantId: `ws6H7JGeR`, variantClassNames: Ma },
            children: y(te, {
              id: f ?? o,
              children: [
                p($a, {
                  value: `html body { background: var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240)); }`,
                }),
                y(j.div, {
                  ...g,
                  className: V(O, `framer-1i8942i`, d),
                  ref: i,
                  style: { ...u },
                  children: [
                    p(N, {
                      children: p(P, {
                        className: `framer-mlzsu7-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `rLBamiHuN`,
                        scopeId: `q2dk3BipV`,
                        children: p(z, {
                          breakpoint: b,
                          overrides: {
                            hBNTufln9: { style: { width: `100%` } },
                            jIFZ85Jgy: { style: { width: `100%` } },
                          },
                          children: p(Ie, {
                            height: `100%`,
                            id: `rLBamiHuN`,
                            intensity: 24,
                            layoutId: `rLBamiHuN`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    y(`div`, {
                      className: `framer-jeuir`,
                      "data-framer-name": `Navbar`,
                      children: [
                        k() &&
                          p(ce, {
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
                              p(N, {
                                height: 100,
                                width: l?.width || `100vw`,
                                y: (l?.y || 0) + 0 + 200 + 0 + 0,
                                children: p(P, {
                                  className: `framer-bmo76t-container hidden-jeceav hidden-13dj5pp`,
                                  id: A,
                                  nodeId: `s3WMO8M4V`,
                                  ref: ne,
                                  scopeId: `q2dk3BipV`,
                                  children: p(z, {
                                    breakpoint: b,
                                    overrides: {
                                      dZS61v7lZ: {
                                        EWWB4AZmK: e[10],
                                        gsQx14FRC: e[9],
                                        leYVePuI9: e[8],
                                        rvnUxmeBE: e[11],
                                      },
                                      LiSfdOU15: {
                                        EWWB4AZmK: e[6],
                                        gsQx14FRC: e[5],
                                        leYVePuI9: e[4],
                                        rvnUxmeBE: e[7],
                                      },
                                    },
                                    children: p(Ne, {
                                      Don9rPm4t: `CULINARY EXPERTISE`,
                                      EWWB4AZmK: e[2],
                                      gsQx14FRC: e[1],
                                      height: `100%`,
                                      id: `s3WMO8M4V`,
                                      layoutId: `s3WMO8M4V`,
                                      leYVePuI9: e[0],
                                      R9rVfKm5A: `CONTACT US`,
                                      rvnUxmeBE: e[3],
                                      style: { width: `100%` },
                                      tXGFQVaIt: `OUR SERVICES`,
                                      variant: `jr2HRS0Hp`,
                                      width: `100%`,
                                      XCOyJnKTR: 1,
                                      Y7ZoV_ppK: `ABOUT US`,
                                    }),
                                  }),
                                }),
                              }),
                          }),
                        re() &&
                          p(La, {
                            blockDocumentScrolling: !0,
                            children: (e) =>
                              p(ee, {
                                children: p(ce, {
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
                                        hash: `:t06iz6Ee5`,
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
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          height: 100,
                                          width: l?.width || `100vw`,
                                        },
                                        jIFZ85Jgy: {
                                          height: 100,
                                          width: l?.width || `100vw`,
                                        },
                                      },
                                      children: p(N, {
                                        children: p(z, {
                                          breakpoint: b,
                                          overrides: {
                                            hBNTufln9: {
                                              animate: Pa,
                                              initial: Fa,
                                              optimized: !0,
                                            },
                                            jIFZ85Jgy: {
                                              animate: Pa,
                                              initial: Fa,
                                              optimized: !0,
                                            },
                                          },
                                          children: y(pa, {
                                            className: `framer-y45if6-container hidden-1i8942i hidden-vdx7iz hidden-1vl5jtp`,
                                            "data-framer-appear-id": `y45if6`,
                                            "data-framer-name": `Navbar mob`,
                                            id: M,
                                            name: `Navbar mob`,
                                            nodeId: `D40sWs3lC`,
                                            ref: F,
                                            rendersWithMotion: !0,
                                            scopeId: `q2dk3BipV`,
                                            children: [
                                              p(z, {
                                                breakpoint: b,
                                                overrides: {
                                                  hBNTufln9: {
                                                    __framer__variantAppearEffectEnabled:
                                                      void 0,
                                                    EWWB4AZmK: n[10],
                                                    gsQx14FRC: n[9],
                                                    leYVePuI9: n[8],
                                                    rvnUxmeBE: n[11],
                                                    variant: e.visible
                                                      ? `XP2pQwNGw`
                                                      : `ynOSTAML_`,
                                                    XCOyJnKTR: 0,
                                                  },
                                                  jIFZ85Jgy: {
                                                    __framer__variantAppearEffectEnabled:
                                                      void 0,
                                                    EWWB4AZmK: n[6],
                                                    gsQx14FRC: n[5],
                                                    leYVePuI9: n[4],
                                                    rvnUxmeBE: n[7],
                                                    variant: e.visible
                                                      ? `UdWuXaj4b`
                                                      : `ynOSTAML_`,
                                                    XCOyJnKTR: 0,
                                                  },
                                                },
                                                children: p(fa, {
                                                  __framer__animateOnce: !1,
                                                  __framer__targets: [
                                                    {
                                                      ref: ie,
                                                      target: `mZjSGfIVU`,
                                                    },
                                                  ],
                                                  __framer__threshold: 0,
                                                  __framer__variantAppearEffectEnabled:
                                                    !0,
                                                  Don9rPm4t: `CULINARY EXPERTISE`,
                                                  EWWB4AZmK: n[2],
                                                  gsQx14FRC: n[1],
                                                  height: `100%`,
                                                  id: `D40sWs3lC`,
                                                  layoutId: `D40sWs3lC`,
                                                  leYVePuI9: n[0],
                                                  name: `Navbar mob`,
                                                  nbpUZHzLI: E({ overlay: e }),
                                                  R9rVfKm5A: `CONTACT US`,
                                                  rvnUxmeBE: n[3],
                                                  style: { width: `100%` },
                                                  tXGFQVaIt: `OUR SERVICES`,
                                                  variant: `DKRFDhAEy`,
                                                  width: `100%`,
                                                  XCOyJnKTR: 1,
                                                  Y7ZoV_ppK: `ABOUT US`,
                                                }),
                                              }),
                                              p(w, {
                                                children:
                                                  e.visible &&
                                                  p(ee, {
                                                    children: t(
                                                      p(S, {
                                                        children: p(
                                                          j.div,
                                                          {
                                                            animate: {
                                                              opacity: 1,
                                                              transition: {
                                                                delay: 0,
                                                                duration: 0,
                                                                ease: [
                                                                  0.5, 0, 0.88,
                                                                  0.77,
                                                                ],
                                                                type: `tween`,
                                                              },
                                                            },
                                                            className: V(
                                                              O,
                                                              `framer-1wo18ir`
                                                            ),
                                                            "data-framer-portal-id":
                                                              M,
                                                            exit: {
                                                              opacity: 0,
                                                              transition: {
                                                                delay: 0,
                                                                duration: 0,
                                                                ease: [
                                                                  0.12, 0.23,
                                                                  0.5, 1,
                                                                ],
                                                                type: `tween`,
                                                              },
                                                            },
                                                            initial: {
                                                              opacity: 0,
                                                            },
                                                            onTap: () =>
                                                              e.hide(),
                                                          },
                                                          `JNriMoY4z`
                                                        ),
                                                      }),
                                                      Ia()
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
                          }),
                      ],
                    }),
                    p(z, {
                      breakpoint: b,
                      overrides: {
                        hBNTufln9: { y: void 0 },
                        jIFZ85Jgy: { y: void 0 },
                      },
                      children: p(N, {
                        height: 1e3,
                        width: l?.width || `100vw`,
                        y: (l?.y || 0) + 0 + 201,
                        children: p(P, {
                          className: `framer-55jmcl-container`,
                          id: se,
                          isModuleExternal: !0,
                          nodeId: `JxIQAQa2s`,
                          ref: ue,
                          scopeId: `q2dk3BipV`,
                          children: p(z, {
                            breakpoint: b,
                            overrides: {
                              dZS61v7lZ: { variant: `yCdisRmDZ` },
                              hBNTufln9: { variant: `qgVGZRcRt` },
                              jIFZ85Jgy: { variant: `RYrSKWTbp` },
                              LiSfdOU15: { variant: `K2xik9UcG` },
                            },
                            children: p(or, {
                              height: `100%`,
                              id: `JxIQAQa2s`,
                              layoutId: `JxIQAQa2s`,
                              style: { height: `100%`, width: `100%` },
                              variant: `MGfdb3dTh`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    de() &&
                      y(`div`, {
                        className: `framer-1sdlfdi hidden-1i8942i hidden-vdx7iz hidden-1vl5jtp hidden-13dj5pp`,
                        "data-framer-name": `About Us Mob`,
                        id: fe,
                        ref: pe,
                        children: [
                          y(`div`, {
                            className: `framer-1yczrc4`,
                            "data-framer-name": `Content`,
                            children: [
                              p(B, {
                                __fromCanvasComponent: !0,
                                children: p(S, {
                                  children: p(`h1`, {
                                    style: {
                                      "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                      "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                      "--framer-font-size": `44px`,
                                      "--framer-line-height": `1.1em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-e2fbaae8-635b-49f1-8bd6-85dbe1bd5ca4, rgb(140, 95, 69))`,
                                    },
                                    children: `Redefining Gourmet Experiences, One Event At A Time`,
                                  }),
                                }),
                                className: `framer-1hvktpf`,
                                "data-framer-name": `Title`,
                                fonts: [`CUSTOM;Perpetua Regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              p(ce, {
                                links: [
                                  {
                                    href: { webPageId: `b_Wa9cjnQ` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `b_Wa9cjnQ` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  p(N, {
                                    height: 45,
                                    children: p(P, {
                                      className: `framer-1jati2o-container`,
                                      isModuleExternal: !0,
                                      nodeId: `HRwUskhdk`,
                                      scopeId: `q2dk3BipV`,
                                      children: p(z, {
                                        breakpoint: b,
                                        overrides: {
                                          jIFZ85Jgy: { cBqkcF_By: e[1] },
                                        },
                                        children: p(Mr, {
                                          cBqkcF_By: e[0],
                                          height: `100%`,
                                          id: `HRwUskhdk`,
                                          layoutId: `HRwUskhdk`,
                                          width: `100%`,
                                          yMI7gvbA0: `Know More`,
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                              p(`div`, {
                                className: `framer-3prfxm`,
                                "data-framer-name": `Description`,
                                children: p(B, {
                                  __fromCanvasComponent: !0,
                                  children: p(S, {
                                    children: p(`p`, {
                                      style: {
                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                        "--framer-font-size": `14px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-cd1ee3ce-ef9a-4b26-b11d-8b484d1c7885, rgb(39, 31, 25))`,
                                      },
                                      children: `Shahi Caterers is a premier luxury catering and culinary curator, crafting bespoke gastronomic experiences for luxury events across India and international destinations. With a passion for world-class flavors and culinary storytelling, we transform every occasion into an unforgettable masterpiece.`,
                                    }),
                                  }),
                                  className: `framer-1obtatt`,
                                  "data-framer-name": `Description`,
                                  fonts: [`FS;Montserrat-variable`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          p(`div`, {
                            className: `framer-gta1yo`,
                            "data-framer-name": `Image`,
                            children: p(z, {
                              breakpoint: b,
                              overrides: {
                                jIFZ85Jgy: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    pixelHeight: 803,
                                    pixelWidth: 537,
                                    sizes: `calc((${l?.width || `100vw`} - 96px) * 0.38)`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png 537w`,
                                  },
                                },
                              },
                              children: p(L, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  pixelHeight: 803,
                                  pixelWidth: 537,
                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png`,
                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png 537w`,
                                },
                                className: `framer-1krmph1`,
                                "data-framer-name": `Image`,
                                children: p(`div`, {
                                  className: `framer-2qlu2x`,
                                  "data-border": !0,
                                  "data-framer-name": `Border`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    k() &&
                      y(`div`, {
                        className: `framer-ohxpz7 hidden-jeceav hidden-13dj5pp`,
                        "data-framer-name": `About Us`,
                        id: H,
                        ref: ie,
                        children: [
                          y(`div`, {
                            className: `framer-1mvkl7t`,
                            "data-framer-name": `Content`,
                            children: [
                              p(z, {
                                breakpoint: b,
                                overrides: {
                                  dZS61v7lZ: {
                                    children: p(S, {
                                      children: p(`h1`, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `62px`,
                                          "--framer-line-height": `1.1em`,
                                          "--framer-text-color": `var(--token-e6740672-e51a-4a94-8ab3-ba42a8aca3cb, rgb(140, 95, 69))`,
                                        },
                                        children: `Redefining Gourmet Experiences, One Event At A Time`,
                                      }),
                                    }),
                                  },
                                  LiSfdOU15: {
                                    children: p(S, {
                                      children: y(`h1`, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `74px`,
                                          "--framer-line-height": `1.1em`,
                                          "--framer-text-color": `var(--token-e2fbaae8-635b-49f1-8bd6-85dbe1bd5ca4, rgb(140, 95, 69))`,
                                        },
                                        children: [
                                          `Redefining Gourmet Experiences, One Event`,
                                          p(`br`, {}),
                                          `At A Time`,
                                        ],
                                      }),
                                    }),
                                  },
                                },
                                children: p(B, {
                                  __fromCanvasComponent: !0,
                                  children: p(S, {
                                    children: y(`h1`, {
                                      style: {
                                        "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                        "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                        "--framer-font-size": `76px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-e2fbaae8-635b-49f1-8bd6-85dbe1bd5ca4, rgb(140, 95, 69))`,
                                      },
                                      children: [
                                        `Redefining Gourmet Experiences, One Event`,
                                        p(`br`, {}),
                                        `At A Time`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-1n1kra4`,
                                  "data-framer-name": `Title`,
                                  fonts: [`CUSTOM;Perpetua Regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              p(ga, {
                                animate: za,
                                className: `framer-1m2xpft`,
                                "data-framer-appear-id": `1m2xpft`,
                                "data-framer-name": `Description`,
                                initial: Ba,
                                optimized: !0,
                                children: p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    dZS61v7lZ: {
                                      children: p(S, {
                                        children: p(`p`, {
                                          style: {
                                            "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                            "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                            "--framer-font-variation-axes": `"wght" 400`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-color": `var(--token-cd1ee3ce-ef9a-4b26-b11d-8b484d1c7885, rgb(39, 31, 25))`,
                                          },
                                          children: `Shahi Caterers is a premier luxury catering and culinary curator, crafting bespoke gastronomic experiences for luxury events across India and international destinations. With a passion for world-class flavors and culinary storytelling, we transform every occasion into an unforgettable masterpiece.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: p(B, {
                                    __fromCanvasComponent: !0,
                                    children: p(S, {
                                      children: p(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                          "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-font-variation-axes": `"wght" 400`,
                                          "--framer-line-height": `1.6em`,
                                          "--framer-text-color": `var(--token-cd1ee3ce-ef9a-4b26-b11d-8b484d1c7885, rgb(39, 31, 25))`,
                                        },
                                        children: `Shahi Caterers is a premier luxury catering and culinary curator, crafting bespoke gastronomic experiences for luxury events across India and international destinations. With a passion for world-class flavors and culinary storytelling, we transform every occasion into an unforgettable masterpiece.`,
                                      }),
                                    }),
                                    className: `framer-1yiapit`,
                                    "data-framer-name": `Description`,
                                    fonts: [`FS;Montserrat-variable`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                              p(ce, {
                                links: [
                                  {
                                    href: { webPageId: `b_Wa9cjnQ` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `b_Wa9cjnQ` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `b_Wa9cjnQ` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  p(z, {
                                    breakpoint: b,
                                    overrides: {
                                      dZS61v7lZ: {
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          1201 +
                                          269.4 +
                                          40 +
                                          292.2,
                                      },
                                      LiSfdOU15: {
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          1201 +
                                          316.8 +
                                          40 +
                                          321.4,
                                      },
                                    },
                                    children: p(N, {
                                      height: 45,
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        1201 +
                                        335.7 +
                                        40 +
                                        323.6,
                                      children: p(P, {
                                        className: `framer-13e9v9u-container`,
                                        isModuleExternal: !0,
                                        nodeId: `XiELO2FrA`,
                                        scopeId: `q2dk3BipV`,
                                        children: p(z, {
                                          breakpoint: b,
                                          overrides: {
                                            dZS61v7lZ: { cBqkcF_By: e[2] },
                                            LiSfdOU15: { cBqkcF_By: e[1] },
                                          },
                                          children: p(Mr, {
                                            cBqkcF_By: e[0],
                                            height: `100%`,
                                            id: `XiELO2FrA`,
                                            layoutId: `XiELO2FrA`,
                                            width: `100%`,
                                            yMI7gvbA0: `Know More`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          p(`div`, {
                            className: `framer-1gbi7ng`,
                            "data-framer-name": `Image`,
                            children: p(z, {
                              breakpoint: b,
                              overrides: {
                                dZS61v7lZ: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: W(
                                      (l?.y || 0) + 0 + 1201 + 175.12 + 0
                                    ),
                                    pixelHeight: 803,
                                    pixelWidth: 537,
                                    sizes: `calc((${l?.width || `100vw`} - 240px) * 0.336)`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png 537w`,
                                  },
                                },
                                LiSfdOU15: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: W(
                                      (l?.y || 0) + 0 + 1201 + 203.2 + 0
                                    ),
                                    pixelHeight: 803,
                                    pixelWidth: 537,
                                    sizes: `calc((${l?.width || `100vw`} - 320px) * 0.3)`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png 537w`,
                                  },
                                },
                              },
                              children: p(Z, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 104,
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1.1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onScroll`,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: W((l?.y || 0) + 0 + 1201 + 172 + 0),
                                  pixelHeight: 803,
                                  pixelWidth: 537,
                                  sizes: `calc((${l?.width || `100vw`} - 400px) * 0.3)`,
                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png`,
                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png 537w`,
                                },
                                className: `framer-15lzvjq`,
                                "data-framer-name": `Image`,
                                children: p(`div`, {
                                  className: `framer-1eqe4qi`,
                                  "data-border": !0,
                                  "data-framer-name": `Border`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    p(`section`, {
                      className: `framer-way5k9`,
                      "data-framer-name": `Overlap Detailing`,
                      children: y(`div`, {
                        className: `framer-kz1z3n`,
                        "data-framer-name": `Cards`,
                        children: [
                          U() &&
                            p(z, {
                              breakpoint: b,
                              overrides: {
                                jIFZ85Jgy: {
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: -40,
                                      },
                                    },
                                  ],
                                },
                              },
                              children: p(_a, {
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -100,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-mntd8i hidden-13dj5pp`,
                                "data-framer-name": `1`,
                              }),
                            }),
                          p(z, {
                            breakpoint: b,
                            overrides: {
                              hBNTufln9: {
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -40,
                                    },
                                  },
                                ],
                              },
                              jIFZ85Jgy: {
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -80,
                                    },
                                  },
                                ],
                              },
                            },
                            children: p(_a, {
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: -120,
                                  },
                                },
                              ],
                              __framer__transformTrigger: `onInView`,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1xyviwv`,
                              "data-framer-name": `2`,
                            }),
                          }),
                          p(z, {
                            breakpoint: b,
                            overrides: {
                              hBNTufln9: {
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -80,
                                    },
                                  },
                                ],
                              },
                              jIFZ85Jgy: {
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -120,
                                    },
                                  },
                                ],
                              },
                            },
                            children: p(_a, {
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: -180,
                                  },
                                },
                              ],
                              __framer__transformTrigger: `onInView`,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1031y9q`,
                              "data-framer-name": `3`,
                            }),
                          }),
                          p(z, {
                            breakpoint: b,
                            overrides: {
                              hBNTufln9: {
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -60,
                                    },
                                  },
                                ],
                              },
                              jIFZ85Jgy: {
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -80,
                                    },
                                  },
                                ],
                              },
                            },
                            children: p(_a, {
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: -120,
                                  },
                                },
                              ],
                              __framer__transformTrigger: `onInView`,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-uxf091`,
                              "data-framer-name": `4`,
                            }),
                          }),
                          U() &&
                            p(z, {
                              breakpoint: b,
                              overrides: {
                                jIFZ85Jgy: {
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: -40,
                                      },
                                    },
                                  ],
                                },
                              },
                              children: p(_a, {
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: -100,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onInView`,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-bxnzrv hidden-13dj5pp`,
                                "data-framer-name": `5`,
                              }),
                            }),
                        ],
                      }),
                    }),
                    y(`div`, {
                      className: `framer-11pjof5`,
                      "data-framer-name": `Signature Offerings`,
                      id: G,
                      ref: _e,
                      children: [
                        p(`div`, {
                          className: `framer-1jvew2k`,
                          "data-framer-name": `Header`,
                          children: p(z, {
                            breakpoint: b,
                            overrides: {
                              dZS61v7lZ: {
                                y: (l?.y || 0) + 0 + 2121 + 40 + 0 + 0 + 0,
                              },
                              hBNTufln9: { y: void 0 },
                              jIFZ85Jgy: { y: void 0 },
                            },
                            children: p(N, {
                              height: 157,
                              width: l?.width || `100vw`,
                              y: (l?.y || 0) + 0 + 2221 + 40 + 0 + 0 + 0,
                              children: p(P, {
                                className: `framer-1kzyj6n-container`,
                                id: ve,
                                nodeId: `haRYq660O`,
                                ref: xe,
                                rendersWithMotion: !0,
                                scopeId: `q2dk3BipV`,
                                children: p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    dZS61v7lZ: {
                                      buwrOy0Pr: `16px 120px 64px 120px`,
                                      sjz0EtqeS: `16px 120px 64px 120px`,
                                    },
                                    hBNTufln9: {
                                      __framer__targets: [
                                        { ref: xe, target: `cZol92GKY` },
                                      ],
                                      buwrOy0Pr: `32px 32px 32px 32px`,
                                      DHXMnt3hw: `column`,
                                      dlBRJuex7: `flex-start`,
                                      hPTwISuF_: 24,
                                      sjz0EtqeS: `24px 32px 32px 32px`,
                                      variant: `T9Rel4hcx`,
                                    },
                                    jIFZ85Jgy: {
                                      buwrOy0Pr: `16px 56px 64px 56px`,
                                      sjz0EtqeS: `16px 56px 64px 56px`,
                                    },
                                    LiSfdOU15: {
                                      buwrOy0Pr: `16px 160px 64px 160px`,
                                      sjz0EtqeS: `16px 160px 64px 160px`,
                                    },
                                  },
                                  children: p(ya, {
                                    __framer__animateOnce: !1,
                                    __framer__targets: [
                                      { ref: xe, target: `QPZCYWAXl` },
                                    ],
                                    __framer__threshold: 0,
                                    __framer__variantAppearEffectEnabled: !0,
                                    buwrOy0Pr: `16px 200px 64px 200px`,
                                    DHXMnt3hw: `row`,
                                    dlBRJuex7: `space-between`,
                                    height: `100%`,
                                    hPTwISuF_: 40,
                                    id: `haRYq660O`,
                                    layoutId: `haRYq660O`,
                                    sjz0EtqeS: `16px 200px 64px 200px`,
                                    style: { width: `100%` },
                                    variant: `WTGNoWhF_`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        y(`div`, {
                          className: `framer-xuq8qt`,
                          "data-framer-name": `Step 1`,
                          children: [
                            p(`div`, {
                              className: `framer-1gsht2q`,
                              "data-framer-name": `Spacer`,
                              id: Se,
                              ref: we,
                            }),
                            p(z, {
                              breakpoint: b,
                              overrides: {
                                dZS61v7lZ: {
                                  y: (l?.y || 0) + 0 + 2121 + 40 + 157 + 0 + 0,
                                },
                                hBNTufln9: { y: void 0 },
                                jIFZ85Jgy: { y: void 0 },
                              },
                              children: p(N, {
                                height: 286,
                                width: l?.width || `100vw`,
                                y: (l?.y || 0) + 0 + 2221 + 40 + 157 + 0 + 0,
                                children: p(P, {
                                  className: `framer-klclpr-container`,
                                  nodeId: `Ex3F6LCfo`,
                                  rendersWithMotion: !0,
                                  scopeId: `q2dk3BipV`,
                                  children: p(z, {
                                    breakpoint: b,
                                    overrides: {
                                      dZS61v7lZ: {
                                        uRowj4sYX: `26px 120px 40px 120px`,
                                      },
                                      hBNTufln9: {
                                        __framer__targets: [
                                          { ref: we, target: `xpVTigcuR` },
                                        ],
                                        variant: `qAWEesNsF`,
                                      },
                                      jIFZ85Jgy: {
                                        uRowj4sYX: `26px 48px 40px 48px`,
                                      },
                                      LiSfdOU15: {
                                        uRowj4sYX: `26px 160px 40px 160px`,
                                      },
                                    },
                                    children: p(xa, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: we, target: `Gdtuh9NIJ` },
                                      ],
                                      __framer__threshold: 0,
                                      __framer__variantAppearEffectEnabled: !0,
                                      CMmZ8SiPK: `01`,
                                      H8h3xY8B3: 39,
                                      height: `100%`,
                                      I0ZRB622A: 16,
                                      id: `Ex3F6LCfo`,
                                      KNrnJuRJA: 40,
                                      layoutId: `Ex3F6LCfo`,
                                      lUuU9bonr: `Bespoke Culinary Curation `,
                                      pT3cdu49U: `rgb(77, 51, 36)`,
                                      style: { width: `100%` },
                                      uRowj4sYX: `26px 200px 40px 200px`,
                                      variant: `ttpssSEbb`,
                                      width: `100%`,
                                      xj2uxgqvR: Q(
                                        {
                                          pixelHeight: 832,
                                          pixelWidth: 1216,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/5zO5Ao4I2zivGDB1JU8ZrX0I_tkld2y.png`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/5zO5Ao4I2zivGDB1JU8ZrX0I_tkld2y.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/5zO5Ao4I2zivGDB1JU8ZrX0I_tkld2y.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/5zO5Ao4I2zivGDB1JU8ZrX0I_tkld2y.png 1216w`,
                                        },
                                        ``
                                      ),
                                      yGo9ss2ls: `Shahi Caterers offers luxury catering and bespoke culinary curation for high-profile weddings, corporate galas, and private celebrations across Andhra Pradesh.Shahi Caterers, As a trusted name in Vijayawada, we focus on serving delicious food and providing reliable service. We build menus around exactly what you want, ensuring your event feels special and tastes amazing.`,
                                      YyR3FcsgW: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        y(`div`, {
                          className: `framer-1lcvjw2`,
                          "data-framer-name": `Step 2`,
                          children: [
                            p(`div`, {
                              className: `framer-6iixk1`,
                              "data-framer-name": `Spacer`,
                              id: Te,
                              ref: Ee,
                            }),
                            p(z, {
                              breakpoint: b,
                              overrides: {
                                dZS61v7lZ: {
                                  y: (l?.y || 0) + 0 + 2121 + 40 + 443 + 0 + 0,
                                },
                                hBNTufln9: { y: void 0 },
                                jIFZ85Jgy: { y: void 0 },
                              },
                              children: p(N, {
                                height: 286,
                                width: l?.width || `100vw`,
                                y: (l?.y || 0) + 0 + 2221 + 40 + 443 + 0 + 0,
                                children: p(P, {
                                  className: `framer-1jjhdg6-container`,
                                  nodeId: `nVbuvwBG9`,
                                  rendersWithMotion: !0,
                                  scopeId: `q2dk3BipV`,
                                  children: p(z, {
                                    breakpoint: b,
                                    overrides: {
                                      dZS61v7lZ: {
                                        uRowj4sYX: `26px 120px 40px 120px`,
                                      },
                                      hBNTufln9: {
                                        __framer__targets: [
                                          { ref: Ee, target: `xpVTigcuR` },
                                        ],
                                        variant: `qAWEesNsF`,
                                      },
                                      jIFZ85Jgy: {
                                        uRowj4sYX: `26px 48px 40px 48px`,
                                      },
                                      LiSfdOU15: {
                                        uRowj4sYX: `26px 160px 40px 160px`,
                                      },
                                    },
                                    children: p(xa, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: Ee, target: `Gdtuh9NIJ` },
                                      ],
                                      __framer__threshold: 0,
                                      __framer__variantAppearEffectEnabled: !0,
                                      CMmZ8SiPK: `02`,
                                      H8h3xY8B3: 39,
                                      height: `100%`,
                                      I0ZRB622A: 16,
                                      id: `nVbuvwBG9`,
                                      KNrnJuRJA: 40,
                                      layoutId: `nVbuvwBG9`,
                                      lUuU9bonr: `Destination Weddings & Events`,
                                      pT3cdu49U: `rgb(82, 57, 43)`,
                                      style: { width: `100%` },
                                      uRowj4sYX: `26px 200px 40px 200px`,
                                      variant: `ttpssSEbb`,
                                      width: `100%`,
                                      xj2uxgqvR: Q(
                                        {
                                          pixelHeight: 832,
                                          pixelWidth: 1216,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/8xuy5R0HtXLGW7nBipopmTZLXrs_veaezn.png`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/8xuy5R0HtXLGW7nBipopmTZLXrs_veaezn.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/8xuy5R0HtXLGW7nBipopmTZLXrs_veaezn.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/8xuy5R0HtXLGW7nBipopmTZLXrs_veaezn.png 1216w`,
                                        },
                                        ``
                                      ),
                                      yGo9ss2ls: `From destination weddings at scenic resorts to big celebrations in Hyderabad or Bangalore, we travel where you need us. Shahi Caterers manages the entire dining experience, bringing delicious menus and professional service to your chosen location, so you can enjoy your special day without worry.`,
                                      YyR3FcsgW: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        y(`div`, {
                          className: `framer-udogzf`,
                          "data-framer-name": `Step 3`,
                          children: [
                            p(`div`, {
                              className: `framer-1f9b3ij`,
                              "data-framer-name": `Spacer`,
                              id: De,
                              ref: Oe,
                            }),
                            p(z, {
                              breakpoint: b,
                              overrides: {
                                dZS61v7lZ: {
                                  y: (l?.y || 0) + 0 + 2121 + 40 + 729 + 0 + 0,
                                },
                                hBNTufln9: { y: void 0 },
                                jIFZ85Jgy: { y: void 0 },
                              },
                              children: p(N, {
                                height: 286,
                                width: l?.width || `100vw`,
                                y: (l?.y || 0) + 0 + 2221 + 40 + 729 + 0 + 0,
                                children: p(P, {
                                  className: `framer-1cul3u3-container`,
                                  id: Ae,
                                  nodeId: `cWq8E8N32`,
                                  ref: je,
                                  rendersWithMotion: !0,
                                  scopeId: `q2dk3BipV`,
                                  children: p(z, {
                                    breakpoint: b,
                                    overrides: {
                                      dZS61v7lZ: {
                                        uRowj4sYX: `26px 120px 40px 120px`,
                                      },
                                      hBNTufln9: {
                                        __framer__targets: [
                                          { ref: Oe, target: `xpVTigcuR` },
                                        ],
                                        H8h3xY8B3: 35,
                                        I0ZRB622A: 4,
                                        KNrnJuRJA: 36,
                                        uRowj4sYX: `16px 32px 40px 32px`,
                                        variant: `qAWEesNsF`,
                                      },
                                      jIFZ85Jgy: {
                                        H8h3xY8B3: 35,
                                        I0ZRB622A: 8,
                                        KNrnJuRJA: 36,
                                        uRowj4sYX: `28px 48px 40px 48px`,
                                      },
                                      LiSfdOU15: {
                                        uRowj4sYX: `26px 160px 40px 160px`,
                                      },
                                    },
                                    children: p(xa, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: Oe, target: `Gdtuh9NIJ` },
                                      ],
                                      __framer__threshold: 0,
                                      __framer__variantAppearEffectEnabled: !0,
                                      CMmZ8SiPK: `03`,
                                      H8h3xY8B3: 39,
                                      height: `100%`,
                                      I0ZRB622A: 16,
                                      id: `cWq8E8N32`,
                                      KNrnJuRJA: 40,
                                      layoutId: `cWq8E8N32`,
                                      lUuU9bonr: `Venue Bookings`,
                                      pT3cdu49U: `rgb(87, 63, 50)`,
                                      style: { width: `100%` },
                                      uRowj4sYX: `26px 200px 40px 200px`,
                                      variant: `ttpssSEbb`,
                                      width: `100%`,
                                      xj2uxgqvR: Q(
                                        {
                                          pixelHeight: 500,
                                          pixelWidth: 900,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_900/v1/bCNIbIe89Nck9yWanrvCURJrAI_wqmjgs.png`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_900/v1/bCNIbIe89Nck9yWanrvCURJrAI_wqmjgs.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_900/v1/bCNIbIe89Nck9yWanrvCURJrAI_wqmjgs.png 900w`,
                                        },
                                        ``
                                      ),
                                      yGo9ss2ls: `Shahi Caterers assists with premium venue bookings for luxury events across India and global destinations. From palatial resorts and 5-star hotels to private estates, we ensure the perfect setting that complements our culinary curation services. As gourmet catering experts, we align ambiance and taste, offering a seamless experience from venue selection to event execution.`,
                                      YyR3FcsgW: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        y(`div`, {
                          className: `framer-sb1v5p`,
                          "data-framer-name": `Step 4`,
                          children: [
                            p(`div`, {
                              className: `framer-1uhhqtd`,
                              "data-framer-name": `Spacer`,
                              id: Me,
                              ref: Le,
                            }),
                            p(z, {
                              breakpoint: b,
                              overrides: {
                                dZS61v7lZ: {
                                  y: (l?.y || 0) + 0 + 2121 + 40 + 1015 + 0 + 0,
                                },
                                hBNTufln9: { y: void 0 },
                                jIFZ85Jgy: { y: void 0 },
                              },
                              children: p(N, {
                                height: 286,
                                width: l?.width || `100vw`,
                                y: (l?.y || 0) + 0 + 2221 + 40 + 1015 + 0 + 0,
                                children: p(P, {
                                  className: `framer-14y72hl-container`,
                                  nodeId: `neYdG1XPl`,
                                  rendersWithMotion: !0,
                                  scopeId: `q2dk3BipV`,
                                  children: p(z, {
                                    breakpoint: b,
                                    overrides: {
                                      dZS61v7lZ: {
                                        uRowj4sYX: `26px 120px 40px 120px`,
                                      },
                                      hBNTufln9: {
                                        __framer__targets: [
                                          { ref: Le, target: `xpVTigcuR` },
                                        ],
                                        variant: `qAWEesNsF`,
                                      },
                                      jIFZ85Jgy: {
                                        uRowj4sYX: `26px 48px 40px 48px`,
                                      },
                                      LiSfdOU15: {
                                        uRowj4sYX: `26px 160px 40px 160px`,
                                      },
                                    },
                                    children: p(xa, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: Le, target: `Gdtuh9NIJ` },
                                      ],
                                      __framer__threshold: 0,
                                      __framer__variantAppearEffectEnabled: !0,
                                      CMmZ8SiPK: `04`,
                                      H8h3xY8B3: 39,
                                      height: `100%`,
                                      I0ZRB622A: 16,
                                      id: `neYdG1XPl`,
                                      KNrnJuRJA: 40,
                                      layoutId: `neYdG1XPl`,
                                      lUuU9bonr: `Tie-Ups with 5-Star Hotels & Luxury Event Spaces`,
                                      pT3cdu49U: `rgb(92, 69, 56)`,
                                      style: { width: `100%` },
                                      uRowj4sYX: `26px 200px 40px 200px`,
                                      variant: `ttpssSEbb`,
                                      width: `100%`,
                                      xj2uxgqvR: Q(
                                        {
                                          pixelHeight: 3264,
                                          pixelWidth: 5824,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_5824/v1/5tpMweoVwv3S3nCar4MGaxl4_kffksw.jpg`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_5824/v1/5tpMweoVwv3S3nCar4MGaxl4_kffksw.jpg 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_5824/v1/5tpMweoVwv3S3nCar4MGaxl4_kffksw.jpg 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_5824/v1/5tpMweoVwv3S3nCar4MGaxl4_kffksw.jpg 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_5824/v1/5tpMweoVwv3S3nCar4MGaxl4_kffksw.jpg 4096w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_5824/v1/5tpMweoVwv3S3nCar4MGaxl4_kffksw.jpg 5824w`,
                                        },
                                        ``
                                      ),
                                      yGo9ss2ls: `With tie-ups at top 5-star hotels and elite event spaces, Shahi Caterers delivers customised luxury catering offerings including live chaat bars, artisan mithai counters, and curated chai lounges. These specialised culinary activations are designed to elevate the guest experience through immersive gourmet offerings tailored to high-end celebrations.`,
                                      YyR3FcsgW: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        y(`div`, {
                          className: `framer-r9a579`,
                          "data-framer-name": `Step 5`,
                          children: [
                            p(`div`, {
                              className: `framer-u1watq`,
                              "data-framer-name": `Spacer`,
                              id: Re,
                              ref: ze,
                            }),
                            p(z, {
                              breakpoint: b,
                              overrides: {
                                dZS61v7lZ: {
                                  y: (l?.y || 0) + 0 + 2121 + 40 + 1301 + 0 + 0,
                                },
                                hBNTufln9: { y: void 0 },
                                jIFZ85Jgy: { y: void 0 },
                              },
                              children: p(N, {
                                height: 286,
                                width: l?.width || `100vw`,
                                y: (l?.y || 0) + 0 + 2221 + 40 + 1301 + 0 + 0,
                                children: p(P, {
                                  className: `framer-1n8uf13-container`,
                                  nodeId: `Zqz4CcooG`,
                                  rendersWithMotion: !0,
                                  scopeId: `q2dk3BipV`,
                                  children: p(z, {
                                    breakpoint: b,
                                    overrides: {
                                      dZS61v7lZ: {
                                        uRowj4sYX: `26px 120px 40px 120px`,
                                      },
                                      hBNTufln9: {
                                        __framer__targets: [
                                          { ref: ze, target: `xpVTigcuR` },
                                        ],
                                        variant: `qAWEesNsF`,
                                      },
                                      jIFZ85Jgy: {
                                        uRowj4sYX: `26px 48px 40px 48px`,
                                      },
                                      LiSfdOU15: {
                                        uRowj4sYX: `26px 160px 40px 160px`,
                                      },
                                    },
                                    children: p(xa, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: ze, target: `Gdtuh9NIJ` },
                                      ],
                                      __framer__threshold: 0,
                                      __framer__variantAppearEffectEnabled: !0,
                                      CMmZ8SiPK: `05`,
                                      H8h3xY8B3: 39,
                                      height: `100%`,
                                      I0ZRB622A: 16,
                                      id: `Zqz4CcooG`,
                                      KNrnJuRJA: 40,
                                      layoutId: `Zqz4CcooG`,
                                      lUuU9bonr: `Artisan Mithai & Gourmet Sweets`,
                                      pT3cdu49U: `rgb(97, 75, 62)`,
                                      style: { width: `100%` },
                                      uRowj4sYX: `26px 200px 40px 200px`,
                                      variant: `ttpssSEbb`,
                                      width: `100%`,
                                      xj2uxgqvR: Q(
                                        {
                                          pixelHeight: 832,
                                          pixelWidth: 1216,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/QfYLC8WpowYr6uWn2WbZpqbX7YM_arklcd.png`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/QfYLC8WpowYr6uWn2WbZpqbX7YM_arklcd.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/QfYLC8WpowYr6uWn2WbZpqbX7YM_arklcd.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/QfYLC8WpowYr6uWn2WbZpqbX7YM_arklcd.png 1216w`,
                                        },
                                        ``
                                      ),
                                      yGo9ss2ls: `Shahi Caterers offers a premium supply chain of artisan mithai and gourmet Indian sweets for 5-star hotels, luxury events, and HNI clientele across India. Handcrafted by master karigars, our desserts blend tradition with refinement—making us one of India’s preferred luxury mithai curators. Each creation is rooted in heritage and elevated with a modern culinary twist.`,
                                      YyR3FcsgW: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        y(`div`, {
                          className: `framer-k6729c`,
                          "data-framer-name": `Step 6`,
                          children: [
                            p(`div`, {
                              className: `framer-r4ieuh`,
                              "data-framer-name": `Spacer`,
                              id: Be,
                              ref: Ve,
                            }),
                            p(z, {
                              breakpoint: b,
                              overrides: {
                                dZS61v7lZ: {
                                  y: (l?.y || 0) + 0 + 2121 + 40 + 1587 + 0 + 0,
                                },
                                hBNTufln9: { y: void 0 },
                                jIFZ85Jgy: { y: void 0 },
                              },
                              children: p(N, {
                                height: 286,
                                width: l?.width || `100vw`,
                                y: (l?.y || 0) + 0 + 2221 + 40 + 1587 + 0 + 0,
                                children: p(P, {
                                  className: `framer-uawq42-container`,
                                  nodeId: `G6V575TVN`,
                                  scopeId: `q2dk3BipV`,
                                  children: p(z, {
                                    breakpoint: b,
                                    overrides: {
                                      dZS61v7lZ: {
                                        uRowj4sYX: `32px 120px 160px 120px`,
                                      },
                                      hBNTufln9: { variant: `qAWEesNsF` },
                                      jIFZ85Jgy: {
                                        uRowj4sYX: `32px 48px 160px 48px`,
                                      },
                                      LiSfdOU15: {
                                        uRowj4sYX: `32px 160px 160px 160px`,
                                      },
                                    },
                                    children: p(Fi, {
                                      CMmZ8SiPK: `06`,
                                      H8h3xY8B3: 39,
                                      height: `100%`,
                                      I0ZRB622A: 16,
                                      id: `G6V575TVN`,
                                      KNrnJuRJA: 40,
                                      layoutId: `G6V575TVN`,
                                      lUuU9bonr: `Tailored Menus`,
                                      pT3cdu49U: `rgb(102, 81, 68)`,
                                      style: { width: `100%` },
                                      uRowj4sYX: `32px 200px 160px 200px`,
                                      variant: `ttpssSEbb`,
                                      width: `100%`,
                                      xj2uxgqvR: Q(
                                        {
                                          pixelHeight: 832,
                                          pixelWidth: 1216,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/oyGMbHd5I94tQhUr5fBtK7ZcXV4_g2j7lk.png`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/oyGMbHd5I94tQhUr5fBtK7ZcXV4_g2j7lk.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/oyGMbHd5I94tQhUr5fBtK7ZcXV4_g2j7lk.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1216/v1/oyGMbHd5I94tQhUr5fBtK7ZcXV4_g2j7lk.png 1216w`,
                                        },
                                        ``
                                      ),
                                      yGo9ss2ls: `From farm-to-table cuisine and globally inspired dishes to vegan and gluten-free options, Shahi Caterers’s tailored menus are designed to reflect the essence of your event. Whether you're planning a cultural celebration or a themed gala, our culinary team delivers a bespoke dining journey that reflects your taste and story.`,
                                      YyR3FcsgW: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    y(`div`, {
                      className: `framer-1qx9c76`,
                      "data-framer-name": `Culinary Expertise`,
                      id: He,
                      ref: Ue,
                      children: [
                        p(z, {
                          breakpoint: b,
                          overrides: {
                            hBNTufln9: {
                              animate: void 0,
                              initial: void 0,
                              optimized: void 0,
                            },
                            jIFZ85Jgy: {
                              animate: void 0,
                              initial: void 0,
                              optimized: void 0,
                            },
                          },
                          children: y(ga, {
                            animate: Ha,
                            className: `framer-1syjrys`,
                            "data-framer-appear-id": `1syjrys`,
                            "data-framer-name": `Culinary Expertise Container`,
                            initial: Ua,
                            optimized: !0,
                            children: [
                              p(z, {
                                breakpoint: b,
                                overrides: {
                                  dZS61v7lZ: {
                                    children: p(S, {
                                      children: p(`h2`, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `56px`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                                        },
                                        children: `Our Culinary Expertise`,
                                      }),
                                    }),
                                  },
                                  hBNTufln9: {
                                    children: p(S, {
                                      children: p(`h2`, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `40px`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                                        },
                                        children: `Our Culinary Expertise`,
                                      }),
                                    }),
                                  },
                                  jIFZ85Jgy: {
                                    children: p(S, {
                                      children: p(`h2`, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `48px`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                                        },
                                        children: `Our Culinary Expertise`,
                                      }),
                                    }),
                                  },
                                },
                                children: p(B, {
                                  __fromCanvasComponent: !0,
                                  children: p(S, {
                                    children: p(`h2`, {
                                      style: {
                                        "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                        "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                        "--framer-font-size": `64px`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                                      },
                                      children: `Our Culinary Expertise`,
                                    }),
                                  }),
                                  className: `framer-169kvxv`,
                                  "data-framer-name": `Culinary Expertise Title`,
                                  fonts: [`CUSTOM;Perpetua Regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              p(z, {
                                breakpoint: b,
                                overrides: {
                                  hBNTufln9: {
                                    children: p(S, {
                                      children: p(`h5`, {
                                        style: {
                                          "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                          "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                          "--framer-font-variation-axes": `"wght" 400`,
                                          "--framer-line-height": `1.6em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-547c5a6a-9461-4593-9fdb-4708b2ee5b6d, rgb(221, 221, 221))`,
                                        },
                                        children: `Experience a curated blend of traditional heritage and modern innovation, delivering the finest global  and Indian flavours to your plate.`,
                                      }),
                                    }),
                                  },
                                },
                                children: p(B, {
                                  __fromCanvasComponent: !0,
                                  children: p(S, {
                                    children: p(`h5`, {
                                      style: {
                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-547c5a6a-9461-4593-9fdb-4708b2ee5b6d, rgb(221, 221, 221))`,
                                      },
                                      children: `Experience a curated blend of traditional heritage and modern innovation, delivering the finest global  and Indian flavours to your plate.`,
                                    }),
                                  }),
                                  className: `framer-w63nf8`,
                                  "data-framer-name": `Culinary Expertise Description`,
                                  fonts: [`FS;Montserrat-variable`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                        y(`div`, {
                          className: `framer-ttk9i3`,
                          "data-framer-name": `Main`,
                          children: [
                            y(`div`, {
                              className: `framer-1ahc48j`,
                              "data-framer-name": `Culinary Expertise Card`,
                              children: [
                                y(`div`, {
                                  className: `framer-1morupl`,
                                  "data-framer-name": `Content`,
                                  children: [
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        dZS61v7lZ: {
                                          children: p(S, {
                                            children: p(`h1`, {
                                              style: {
                                                "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `64px`,
                                                "--framer-line-height": `1.1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `India on a Platter`,
                                            }),
                                          }),
                                        },
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`h1`, {
                                              style: {
                                                "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `50px`,
                                                "--framer-line-height": `1.1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `India on a Platter`,
                                            }),
                                          }),
                                        },
                                        jIFZ85Jgy: {
                                          children: p(S, {
                                            children: p(`h1`, {
                                              style: {
                                                "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `60px`,
                                                "--framer-line-height": `1.1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `India on a Platter`,
                                            }),
                                          }),
                                        },
                                        LiSfdOU15: {
                                          children: p(S, {
                                            children: p(`h1`, {
                                              style: {
                                                "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `72px`,
                                                "--framer-line-height": `1.1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `India on a Platter`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`h1`, {
                                            style: {
                                              "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                              "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                              "--framer-font-size": `76px`,
                                              "--framer-line-height": `1.1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                            },
                                            children: `India on a Platter`,
                                          }),
                                        }),
                                        className: `framer-1x3y4by`,
                                        "data-framer-name": `India on a Platter`,
                                        fonts: [`CUSTOM;Perpetua Regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    p(`div`, {
                                      className: `framer-zmg4he`,
                                      "data-framer-name": `Description`,
                                      children: p(z, {
                                        breakpoint: b,
                                        overrides: {
                                          hBNTufln9: {
                                            children: p(S, {
                                              children: p(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                                  "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-size": `18px`,
                                                  "--framer-font-variation-axes": `"wght" 400`,
                                                  "--framer-letter-spacing": `-0.02em`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                                },
                                                children: `North Indian, Punjabi, Rajasthani, Gujarati, Himachali, Mughlai, Awadhi, Wazwan, South Indian and Modern Indian inspired by Indian Accent`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: p(B, {
                                          __fromCanvasComponent: !0,
                                          children: p(S, {
                                            children: p(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `22px`,
                                                "--framer-font-variation-axes": `"wght" 400`,
                                                "--framer-letter-spacing": `-0.02em`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `North Indian, Punjabi, Rajasthani, Gujarati, Himachali, Mughlai, Awadhi, Wazwan, South Indian and Modern Indian inspired by Indian Accent`,
                                            }),
                                          }),
                                          className: `framer-1iu5l8y`,
                                          "data-framer-name": `North Indian, Punjabi, Rajasthani, Gujarati, Himachali, Mughlai, Awadhi, Wazwan, South Indian and Modern Indian inspired by Indian Accent`,
                                          fonts: [`FS;Montserrat-variable`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    dZS61v7lZ: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: W(
                                          (l?.y || 0) +
                                            0 +
                                            4034 +
                                            0 +
                                            260.4 +
                                            0 +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 2019,
                                        pixelWidth: 3022,
                                        sizes: l?.width || `100vw`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 3022w`,
                                      },
                                    },
                                    hBNTufln9: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 2019,
                                        pixelWidth: 3022,
                                        sizes: l?.width || `100vw`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 3022w`,
                                      },
                                    },
                                    jIFZ85Jgy: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 2019,
                                        pixelWidth: 3022,
                                        sizes: l?.width || `100vw`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 3022w`,
                                      },
                                    },
                                  },
                                  children: p(Z, {
                                    __framer__animate: { transition: Ga },
                                    __framer__animateOnce: !1,
                                    __framer__enter: Wa,
                                    __framer__exit: Ka,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: W(
                                        (l?.y || 0) +
                                          0 +
                                          4134 +
                                          0 +
                                          270 +
                                          0 +
                                          0 +
                                          0
                                      ),
                                      pixelHeight: 2019,
                                      pixelWidth: 3022,
                                      sizes: l?.width || `100vw`,
                                      src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png`,
                                      srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3022/v1/cEra6tetiR1eVxYUDCShFUq2p4_kvlaie.png 3022w`,
                                    },
                                    className: `framer-1wzre4b`,
                                    "data-framer-name": `Image`,
                                  }),
                                }),
                              ],
                            }),
                            y(`div`, {
                              className: `framer-172ftnk`,
                              "data-framer-name": `Culinary Expertise Card`,
                              children: [
                                y(`div`, {
                                  className: `framer-mp700k`,
                                  "data-framer-name": `Content`,
                                  children: [
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        dZS61v7lZ: {
                                          children: p(S, {
                                            children: p(`h1`, {
                                              style: {
                                                "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `64px`,
                                                "--framer-line-height": `1.1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `Flavors Without Borders`,
                                            }),
                                          }),
                                        },
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`h1`, {
                                              style: {
                                                "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `50px`,
                                                "--framer-line-height": `1.1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `Flavors Without Borders`,
                                            }),
                                          }),
                                        },
                                        jIFZ85Jgy: {
                                          children: p(S, {
                                            children: p(`h1`, {
                                              style: {
                                                "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `60px`,
                                                "--framer-line-height": `1.1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `Flavors Without Borders`,
                                            }),
                                          }),
                                        },
                                        LiSfdOU15: {
                                          children: p(S, {
                                            children: p(`h1`, {
                                              style: {
                                                "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `72px`,
                                                "--framer-line-height": `1.1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `Flavors Without Borders`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`h1`, {
                                            style: {
                                              "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                              "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                              "--framer-font-size": `76px`,
                                              "--framer-line-height": `1.1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                            },
                                            children: `Flavors Without Borders`,
                                          }),
                                        }),
                                        className: `framer-5xlis5`,
                                        "data-framer-name": `India on a Platter`,
                                        fonts: [`CUSTOM;Perpetua Regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    p(`div`, {
                                      className: `framer-oxvxnw`,
                                      "data-framer-name": `Description`,
                                      children: p(z, {
                                        breakpoint: b,
                                        overrides: {
                                          hBNTufln9: {
                                            children: p(S, {
                                              children: p(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                                  "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-size": `15px`,
                                                  "--framer-font-variation-axes": `"wght" 400`,
                                                  "--framer-letter-spacing": `-0.02em`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                                },
                                                children: ` Italian, Greek, French, Spanish, Japanese, Chinese, Thai, Korean, Lebanese, Turkish, Persian, Contemporary American, Mexican and more`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: p(B, {
                                          __fromCanvasComponent: !0,
                                          children: p(S, {
                                            children: p(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `22px`,
                                                "--framer-font-variation-axes": `"wght" 400`,
                                                "--framer-letter-spacing": `-0.02em`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: ` Italian, Greek, French, Spanish, Japanese, Chinese, Thai, Korean, Lebanese, Turkish, Persian, Contemporary American, Mexican and more`,
                                            }),
                                          }),
                                          className: `framer-1mubld9`,
                                          "data-framer-name": `North Indian, Punjabi, Rajasthani, Gujarati, Himachali, Mughlai, Awadhi, Wazwan, South Indian and Modern Indian inspired by Indian Accent`,
                                          fonts: [`FS;Montserrat-variable`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    dZS61v7lZ: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: W(
                                          (l?.y || 0) +
                                            0 +
                                            4034 +
                                            0 +
                                            260.4 +
                                            0 +
                                            1060 +
                                            0
                                        ),
                                        pixelHeight: 1e3,
                                        pixelWidth: 2e3,
                                        sizes: l?.width || `100vw`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg 2000w`,
                                      },
                                    },
                                    hBNTufln9: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 1e3,
                                        pixelWidth: 2e3,
                                        sizes: l?.width || `100vw`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg 2000w`,
                                      },
                                    },
                                    jIFZ85Jgy: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 1e3,
                                        pixelWidth: 2e3,
                                        sizes: l?.width || `100vw`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg 2000w`,
                                      },
                                    },
                                  },
                                  children: p(Z, {
                                    __framer__animate: { transition: Ga },
                                    __framer__animateOnce: !1,
                                    __framer__enter: Wa,
                                    __framer__exit: Ka,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: W(
                                        (l?.y || 0) +
                                          0 +
                                          4134 +
                                          0 +
                                          270 +
                                          0 +
                                          1060 +
                                          0
                                      ),
                                      pixelHeight: 1e3,
                                      pixelWidth: 2e3,
                                      sizes: l?.width || `100vw`,
                                      src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg`,
                                      srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2000/v1/G0XvDn9gkzvGzWyP0EH9faSODfU_p0kxij.jpg 2000w`,
                                    },
                                    className: `framer-1rmtdi3`,
                                    "data-framer-name": `Image`,
                                  }),
                                }),
                              ],
                            }),
                            y(`div`, {
                              className: `framer-18usn9l`,
                              "data-framer-name": `Culinary Expertise Card`,
                              children: [
                                y(`div`, {
                                  className: `framer-oxsog8`,
                                  "data-framer-name": `Content`,
                                  children: [
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        dZS61v7lZ: {
                                          children: p(S, {
                                            children: p(`h1`, {
                                              style: {
                                                "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `64px`,
                                                "--framer-line-height": `1.1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `The Chaat Experience`,
                                            }),
                                          }),
                                        },
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`h1`, {
                                              style: {
                                                "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `50px`,
                                                "--framer-line-height": `1.1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `The Chaat Experience`,
                                            }),
                                          }),
                                        },
                                        jIFZ85Jgy: {
                                          children: p(S, {
                                            children: p(`h1`, {
                                              style: {
                                                "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `60px`,
                                                "--framer-line-height": `1.1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `The Chaat Experience`,
                                            }),
                                          }),
                                        },
                                        LiSfdOU15: {
                                          children: p(S, {
                                            children: p(`h1`, {
                                              style: {
                                                "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                "--framer-font-size": `72px`,
                                                "--framer-line-height": `1.1em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `The Chaat Experience`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`h1`, {
                                            style: {
                                              "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                              "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                              "--framer-font-size": `76px`,
                                              "--framer-line-height": `1.1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                            },
                                            children: `The Chaat Experience`,
                                          }),
                                        }),
                                        className: `framer-kmd583`,
                                        "data-framer-name": `India on a Platter`,
                                        fonts: [`CUSTOM;Perpetua Regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    p(`div`, {
                                      className: `framer-3gfqud`,
                                      "data-framer-name": `Description`,
                                      children: p(z, {
                                        breakpoint: b,
                                        overrides: {
                                          hBNTufln9: {
                                            children: p(S, {
                                              children: p(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                                  "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-size": `15px`,
                                                  "--framer-font-variation-axes": `"wght" 400`,
                                                  "--framer-letter-spacing": `-0.02em`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                                },
                                                children: `Street food classics from Haridwar, Benaras, Agra, Delhi, Kolkata, Mumbai, Gujrat, Indore and Bihar bringing authentic regional flavors`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: p(B, {
                                          __fromCanvasComponent: !0,
                                          children: p(S, {
                                            children: p(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `22px`,
                                                "--framer-font-variation-axes": `"wght" 400`,
                                                "--framer-letter-spacing": `-0.02em`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                              },
                                              children: `Street food classics from Haridwar, Benaras, Agra, Delhi, Kolkata, Mumbai, Gujrat, Indore and Bihar bringing authentic regional flavors`,
                                            }),
                                          }),
                                          className: `framer-63w6yv`,
                                          "data-framer-name": `North Indian, Punjabi, Rajasthani, Gujarati, Himachali, Mughlai, Awadhi, Wazwan, South Indian and Modern Indian inspired by Indian Accent`,
                                          fonts: [`FS;Montserrat-variable`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    dZS61v7lZ: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: W(
                                          (l?.y || 0) +
                                            0 +
                                            4034 +
                                            0 +
                                            260.4 +
                                            0 +
                                            2120 +
                                            0
                                        ),
                                        pixelHeight: 1664,
                                        pixelWidth: 2944,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: l?.width || `100vw`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 2944w`,
                                      },
                                    },
                                    hBNTufln9: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 1664,
                                        pixelWidth: 2944,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: l?.width || `100vw`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 2944w`,
                                      },
                                    },
                                    jIFZ85Jgy: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        pixelHeight: 1664,
                                        pixelWidth: 2944,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: l?.width || `100vw`,
                                        src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png`,
                                        srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 2944w`,
                                      },
                                    },
                                  },
                                  children: p(Z, {
                                    __framer__animate: { transition: Ga },
                                    __framer__animateOnce: !1,
                                    __framer__enter: Wa,
                                    __framer__exit: Ka,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: W(
                                        (l?.y || 0) +
                                          0 +
                                          4134 +
                                          0 +
                                          270 +
                                          0 +
                                          2120 +
                                          0
                                      ),
                                      pixelHeight: 1664,
                                      pixelWidth: 2944,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: l?.width || `100vw`,
                                      src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png`,
                                      srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2944/v1/zCeQXfvsVrppbxWpYfoK1alHfFM_q5b3zc.png 2944w`,
                                    },
                                    className: `framer-1827y7i`,
                                    "data-framer-name": `Image`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    y(`div`, {
                      className: `framer-hstt8c`,
                      "data-framer-name": `Serving the world`,
                      children: [
                        p(`div`, {
                          className: `framer-1bt8wkg`,
                          "data-framer-name": `Spacer`,
                        }),
                        y(`div`, {
                          className: `framer-1wwup1o`,
                          "data-framer-name": `Serving the world`,
                          children: [
                            y(`div`, {
                              className: `framer-1oftuy8`,
                              "data-framer-name": `Serving Excellence Container`,
                              children: [
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    hBNTufln9: {
                                      children: p(S, {
                                        children: p(`h2`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                            "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                            "--framer-font-size": `40px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-63ed7ac4-dbf4-44ba-83a1-845cc61bacd5, rgb(234, 228, 220))`,
                                          },
                                          children: `Serving the World with Culinary Excellence`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: p(B, {
                                    __fromCanvasComponent: !0,
                                    children: p(S, {
                                      children: p(`h2`, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `64px`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-63ed7ac4-dbf4-44ba-83a1-845cc61bacd5, rgb(234, 228, 220))`,
                                        },
                                        children: `Serving the World with Culinary Excellence`,
                                      }),
                                    }),
                                    className: `framer-1xnk4yy`,
                                    "data-framer-name": `Serving Excellence Title`,
                                    fonts: [`CUSTOM;Perpetua Regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    hBNTufln9: {
                                      children: p(S, {
                                        children: p(`p`, {
                                          style: {
                                            "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                            "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                            "--framer-font-size": `14px`,
                                            "--framer-font-variation-axes": `"wght" 300`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-6d669f0b-2ca7-4efe-9846-40d1ec233495, rgb(136, 136, 136))`,
                                          },
                                          children: `Shahi Caterers delivers world-class culinary experiences and seamless venue bookings for luxury weddings and private events at elite destinations worldwide.`,
                                        }),
                                      }),
                                    },
                                    jIFZ85Jgy: {
                                      children: p(S, {
                                        children: p(`p`, {
                                          style: {
                                            "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                            "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                            "--framer-font-size": `15px`,
                                            "--framer-font-variation-axes": `"wght" 300`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-6d669f0b-2ca7-4efe-9846-40d1ec233495, rgb(136, 136, 136))`,
                                          },
                                          children: `Shahi Caterers delivers world-class culinary experiences and seamless venue bookings for luxury weddings and private events at elite destinations worldwide.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: p(B, {
                                    __fromCanvasComponent: !0,
                                    children: p(S, {
                                      children: y(`p`, {
                                        style: {
                                          "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                          "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                          "--framer-font-variation-axes": `"wght" 300`,
                                          "--framer-line-height": `1.6em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-f1026590-f81b-47de-a41f-321030e5db01, rgb(136, 136, 136))`,
                                        },
                                        children: [
                                          `Shahi Caterers delivers world-class culinary experiences and seamless venue bookings for luxury weddings and`,
                                          p(`span`, {
                                            style: {
                                              "--framer-text-color": `rgb(102, 102, 102)`,
                                            },
                                            children: p(`br`, {}),
                                          }),
                                          ` private events at elite destinations worldwide.`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-ell6tn`,
                                    "data-framer-name": `Serving Excellence Title`,
                                    fonts: [`FS;Montserrat-variable`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            We() &&
                              p(N, {
                                children: p(P, {
                                  className: `framer-6mqozl-container hidden-1i8942i hidden-vdx7iz hidden-1vl5jtp hidden-jeceav`,
                                  "data-framer-name": `Slideshow mob`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  name: `Slideshow mob`,
                                  nodeId: `FlGsgh79S`,
                                  scopeId: `q2dk3BipV`,
                                  children: p(X, {
                                    alignment: `center`,
                                    arrowOptions: {
                                      arrowFill: `rgba(0, 0, 0, 0.08)`,
                                      arrowGap: 48,
                                      arrowPadding: -100,
                                      arrowPaddingBottom: -12,
                                      arrowPaddingLeft: 0,
                                      arrowPaddingRight: 0,
                                      arrowPaddingTop: 0,
                                      arrowPosition: `bottom-mid`,
                                      arrowRadius: 40,
                                      arrowShouldFadeIn: !1,
                                      arrowShouldSpace: !1,
                                      arrowSize: 32,
                                      showMouseControls: !1,
                                    },
                                    autoPlayControl: !0,
                                    borderRadius: 0,
                                    direction: `left`,
                                    dragControl: !0,
                                    effectsOptions: {
                                      effectsHover: !0,
                                      effectsOpacity: 0.08,
                                      effectsPerspective: 800,
                                      effectsRotate: 0,
                                      effectsScale: 0.2,
                                      playOffscreen: !1,
                                    },
                                    fadeOptions: {
                                      fadeAlpha: 0,
                                      fadeContent: !1,
                                      fadeInset: 1,
                                      fadeWidth: 0,
                                      overflow: !0,
                                    },
                                    gap: 40,
                                    height: `100%`,
                                    id: `FlGsgh79S`,
                                    intervalControl: 3,
                                    itemAmount: 1,
                                    layoutId: `FlGsgh79S`,
                                    name: `Slideshow mob`,
                                    padding: 0,
                                    paddingBottom: 0,
                                    paddingLeft: 0,
                                    paddingPerSide: !1,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    progressOptions: {
                                      dotsActiveOpacity: 1,
                                      dotsBackground: `rgba(0, 0, 0, 0.2)`,
                                      dotsBlur: 0,
                                      dotsFill: `rgb(255, 255, 255)`,
                                      dotsGap: 10,
                                      dotsInset: 10,
                                      dotSize: 10,
                                      dotsOpacity: 0.5,
                                      dotsPadding: 10,
                                      dotsRadius: 50,
                                      showProgressDots: !1,
                                    },
                                    slots: [
                                      p(N, {
                                        height: 370,
                                        width: `260px`,
                                        children: p(P, {
                                          className: `framer-1qbb59h-container`,
                                          inComponentSlot: !0,
                                          isModuleExternal: !0,
                                          nodeId: `EGrPbOJP1`,
                                          rendersWithMotion: !0,
                                          scopeId: `q2dk3BipV`,
                                          children: p(Y, {
                                            diRPtLv9G: `MUMBAI`,
                                            height: `100%`,
                                            id: `EGrPbOJP1`,
                                            layoutId: `EGrPbOJP1`,
                                            SKrmQIE2e: `40px 8px 0px 8px`,
                                            style: { width: `100%` },
                                            variant: `h4qnZwXq5`,
                                            width: `100%`,
                                            YfNKY4OYV: `Events Catered : 29`,
                                          }),
                                        }),
                                      }),
                                      p(N, {
                                        height: 370,
                                        width: `260px`,
                                        children: p(P, {
                                          className: `framer-kcctj0-container`,
                                          inComponentSlot: !0,
                                          isModuleExternal: !0,
                                          nodeId: `eMM_jlFwZ`,
                                          rendersWithMotion: !0,
                                          scopeId: `q2dk3BipV`,
                                          children: p(Y, {
                                            Bkz5swMXb: Q(
                                              {
                                                pixelHeight: 5326,
                                                pixelWidth: 8e3,
                                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2046/v1/DVw6cMZfMHNUt3KaHjY8jYV98_n4mmwy.jpg`,
                                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/DVw6cMZfMHNUt3KaHjY8jYV98_n4mmwy.jpg 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/DVw6cMZfMHNUt3KaHjY8jYV98_n4mmwy.jpg 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/DVw6cMZfMHNUt3KaHjY8jYV98_n4mmwy.jpg 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_4096/v1/DVw6cMZfMHNUt3KaHjY8jYV98_n4mmwy.jpg 4096w,https://res.cloudinary.com/do05dlmn8/image/upload/v1/DVw6cMZfMHNUt3KaHjY8jYV98_n4mmwy.jpg 8000w`,
                                              },
                                              ``
                                            ),
                                            diRPtLv9G: `DELHI & NCR`,
                                            height: `100%`,
                                            id: `eMM_jlFwZ`,
                                            layoutId: `eMM_jlFwZ`,
                                            SKrmQIE2e: `0px 0px 40px 0px`,
                                            style: { width: `100%` },
                                            variant: `h4qnZwXq5`,
                                            width: `100%`,
                                            YfNKY4OYV: `Events Catered : 14`,
                                          }),
                                        }),
                                      }),
                                      p(N, {
                                        height: 370,
                                        width: `260px`,
                                        children: p(P, {
                                          className: `framer-f7uczf-container`,
                                          "data-framer-name": `3`,
                                          inComponentSlot: !0,
                                          isModuleExternal: !0,
                                          name: `3`,
                                          nodeId: `dXD3EYWwW`,
                                          rendersWithMotion: !0,
                                          scopeId: `q2dk3BipV`,
                                          children: p(Y, {
                                            Bkz5swMXb: Q(
                                              {
                                                pixelHeight: 1067,
                                                pixelWidth: 1600,
                                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1600/v1/TeUaEv9rguk71IjCPSuAUicJiaI_reavci.png`,
                                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1600/v1/TeUaEv9rguk71IjCPSuAUicJiaI_reavci.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1600/v1/TeUaEv9rguk71IjCPSuAUicJiaI_reavci.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1600/v1/TeUaEv9rguk71IjCPSuAUicJiaI_reavci.png 1600w`,
                                              },
                                              ``
                                            ),
                                            diRPtLv9G: `BANGALURU`,
                                            height: `100%`,
                                            id: `dXD3EYWwW`,
                                            layoutId: `dXD3EYWwW`,
                                            name: `3`,
                                            SKrmQIE2e: `0px 0px 40px 0px`,
                                            style: { width: `100%` },
                                            variant: `h4qnZwXq5`,
                                            width: `100%`,
                                            YfNKY4OYV: `Events Catered : 5`,
                                          }),
                                        }),
                                      }),
                                      p(N, {
                                        height: 370,
                                        width: `260px`,
                                        children: p(P, {
                                          className: `framer-1g1o1e0-container`,
                                          inComponentSlot: !0,
                                          isModuleExternal: !0,
                                          nodeId: `Fn5Gnu9sX`,
                                          rendersWithMotion: !0,
                                          scopeId: `q2dk3BipV`,
                                          children: p(Y, {
                                            Bkz5swMXb: Q(
                                              {
                                                pixelHeight: 800,
                                                pixelWidth: 1200,
                                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/9NJ1unSEFj2eIocD27OrVwm9jQ_a3miru.png`,
                                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/9NJ1unSEFj2eIocD27OrVwm9jQ_a3miru.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/9NJ1unSEFj2eIocD27OrVwm9jQ_a3miru.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/9NJ1unSEFj2eIocD27OrVwm9jQ_a3miru.png 1200w`,
                                              },
                                              ``
                                            ),
                                            diRPtLv9G: `RAJASTHAN`,
                                            height: `100%`,
                                            id: `Fn5Gnu9sX`,
                                            layoutId: `Fn5Gnu9sX`,
                                            SKrmQIE2e: `0px 0px 40px 0px`,
                                            style: { width: `100%` },
                                            variant: `h4qnZwXq5`,
                                            width: `100%`,
                                            YfNKY4OYV: `Events Catered : 23`,
                                          }),
                                        }),
                                      }),
                                      p(N, {
                                        height: 370,
                                        width: `260px`,
                                        children: p(P, {
                                          className: `framer-18ajwsy-container`,
                                          "data-framer-name": `Dubai`,
                                          inComponentSlot: !0,
                                          isModuleExternal: !0,
                                          name: `Dubai`,
                                          nodeId: `AMQoq5_hU`,
                                          rendersWithMotion: !0,
                                          scopeId: `q2dk3BipV`,
                                          children: p(Y, {
                                            Bkz5swMXb: Q(
                                              {
                                                pixelHeight: 896,
                                                pixelWidth: 1152,
                                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/vyqXlJy9JcN0BK0PXNEG0HXEk_rd4nrs.png`,
                                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/vyqXlJy9JcN0BK0PXNEG0HXEk_rd4nrs.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/vyqXlJy9JcN0BK0PXNEG0HXEk_rd4nrs.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/vyqXlJy9JcN0BK0PXNEG0HXEk_rd4nrs.png 1152w`,
                                              },
                                              ``
                                            ),
                                            diRPtLv9G: `UAE`,
                                            height: `100%`,
                                            id: `AMQoq5_hU`,
                                            layoutId: `AMQoq5_hU`,
                                            name: `Dubai`,
                                            SKrmQIE2e: `40px 8px 0px 8px`,
                                            style: { width: `100%` },
                                            variant: `h4qnZwXq5`,
                                            width: `100%`,
                                            YfNKY4OYV: `Events Catered : 9`,
                                          }),
                                        }),
                                      }),
                                      p(N, {
                                        height: 370,
                                        width: `260px`,
                                        children: p(P, {
                                          className: `framer-qnq1uz-container`,
                                          inComponentSlot: !0,
                                          isModuleExternal: !0,
                                          nodeId: `mLCzNCDmq`,
                                          rendersWithMotion: !0,
                                          scopeId: `q2dk3BipV`,
                                          children: p(Y, {
                                            Bkz5swMXb: Q(
                                              {
                                                pixelHeight: 896,
                                                pixelWidth: 1152,
                                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/aA9aCzx5IJNmf63sP90AbSgW4M_kmqgwb.png`,
                                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/aA9aCzx5IJNmf63sP90AbSgW4M_kmqgwb.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/aA9aCzx5IJNmf63sP90AbSgW4M_kmqgwb.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/aA9aCzx5IJNmf63sP90AbSgW4M_kmqgwb.png 1152w`,
                                              },
                                              ``
                                            ),
                                            diRPtLv9G: `THAILAND`,
                                            height: `100%`,
                                            id: `mLCzNCDmq`,
                                            layoutId: `mLCzNCDmq`,
                                            SKrmQIE2e: `0px 0px 40px 0px`,
                                            style: { width: `100%` },
                                            variant: `h4qnZwXq5`,
                                            width: `100%`,
                                            YfNKY4OYV: `Events Catered : 11`,
                                          }),
                                        }),
                                      }),
                                      p(N, {
                                        height: 370,
                                        width: `260px`,
                                        children: p(P, {
                                          className: `framer-ywc489-container`,
                                          inComponentSlot: !0,
                                          isModuleExternal: !0,
                                          nodeId: `cvTOr9_EK`,
                                          rendersWithMotion: !0,
                                          scopeId: `q2dk3BipV`,
                                          children: p(Y, {
                                            Bkz5swMXb: Q(
                                              {
                                                pixelHeight: 896,
                                                pixelWidth: 1152,
                                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/v3o4ZqOHPU0aHMVLZdMS4HB2BH8_iyb7jl.png`,
                                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/v3o4ZqOHPU0aHMVLZdMS4HB2BH8_iyb7jl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/v3o4ZqOHPU0aHMVLZdMS4HB2BH8_iyb7jl.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/v3o4ZqOHPU0aHMVLZdMS4HB2BH8_iyb7jl.png 1152w`,
                                              },
                                              ``
                                            ),
                                            diRPtLv9G: `SRI LANKA`,
                                            height: `100%`,
                                            id: `cvTOr9_EK`,
                                            layoutId: `cvTOr9_EK`,
                                            SKrmQIE2e: `40px 8px 0px 8px`,
                                            style: { width: `100%` },
                                            variant: `h4qnZwXq5`,
                                            width: `100%`,
                                            YfNKY4OYV: `Events Catered : 3`,
                                          }),
                                        }),
                                      }),
                                      p(N, {
                                        height: 370,
                                        width: `260px`,
                                        children: p(P, {
                                          className: `framer-1dsfl6v-container`,
                                          inComponentSlot: !0,
                                          isModuleExternal: !0,
                                          nodeId: `O07G6BFgW`,
                                          rendersWithMotion: !0,
                                          scopeId: `q2dk3BipV`,
                                          children: p(Y, {
                                            Bkz5swMXb: Q(
                                              {
                                                pixelHeight: 1001,
                                                pixelWidth: 1500,
                                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1500/v1/Nwn08V2rqVxcnFBlG97lVB3Iw_jc0e8p.png`,
                                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1500/v1/Nwn08V2rqVxcnFBlG97lVB3Iw_jc0e8p.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1500/v1/Nwn08V2rqVxcnFBlG97lVB3Iw_jc0e8p.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1500/v1/Nwn08V2rqVxcnFBlG97lVB3Iw_jc0e8p.png 1500w`,
                                              },
                                              ``
                                            ),
                                            diRPtLv9G: `GOA`,
                                            height: `100%`,
                                            id: `O07G6BFgW`,
                                            layoutId: `O07G6BFgW`,
                                            SKrmQIE2e: `40px 8px 0px 8px`,
                                            style: { width: `100%` },
                                            variant: `h4qnZwXq5`,
                                            width: `100%`,
                                            YfNKY4OYV: `Events Catered : 17`,
                                          }),
                                        }),
                                      }),
                                      p(N, {
                                        height: 370,
                                        width: `260px`,
                                        children: p(P, {
                                          className: `framer-exf0bq-container`,
                                          inComponentSlot: !0,
                                          isModuleExternal: !0,
                                          nodeId: `cu43iP48m`,
                                          rendersWithMotion: !0,
                                          scopeId: `q2dk3BipV`,
                                          children: p(Y, {
                                            Bkz5swMXb: Q(
                                              {
                                                pixelHeight: 800,
                                                pixelWidth: 1200,
                                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/hfjndgjkIQhh1zpzTXLUtN0LwM_dlhtbh.png`,
                                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/hfjndgjkIQhh1zpzTXLUtN0LwM_dlhtbh.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/hfjndgjkIQhh1zpzTXLUtN0LwM_dlhtbh.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/hfjndgjkIQhh1zpzTXLUtN0LwM_dlhtbh.png 1200w`,
                                              },
                                              ``
                                            ),
                                            diRPtLv9G: `KERALA`,
                                            height: `100%`,
                                            id: `cu43iP48m`,
                                            layoutId: `cu43iP48m`,
                                            SKrmQIE2e: `0px 0px 40px 0px`,
                                            style: { width: `100%` },
                                            variant: `h4qnZwXq5`,
                                            width: `100%`,
                                            YfNKY4OYV: `Events Catered : 3`,
                                          }),
                                        }),
                                      }),
                                      p(N, {
                                        height: 370,
                                        width: `260px`,
                                        children: p(P, {
                                          className: `framer-22zrrk-container`,
                                          inComponentSlot: !0,
                                          isModuleExternal: !0,
                                          nodeId: `WNXO0QSR2`,
                                          rendersWithMotion: !0,
                                          scopeId: `q2dk3BipV`,
                                          children: p(Y, {
                                            Bkz5swMXb: Q(
                                              {
                                                pixelHeight: 1280,
                                                pixelWidth: 1920,
                                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1920/v1/MMiAHIicLAinVtKhTV577r3I7ok_kttnmf.png`,
                                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1920/v1/MMiAHIicLAinVtKhTV577r3I7ok_kttnmf.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1920/v1/MMiAHIicLAinVtKhTV577r3I7ok_kttnmf.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1920/v1/MMiAHIicLAinVtKhTV577r3I7ok_kttnmf.png 1920w`,
                                              },
                                              ``
                                            ),
                                            diRPtLv9G: `KOLKATA`,
                                            height: `100%`,
                                            id: `WNXO0QSR2`,
                                            layoutId: `WNXO0QSR2`,
                                            SKrmQIE2e: `40px 8px 0px 8px`,
                                            style: { width: `100%` },
                                            variant: `h4qnZwXq5`,
                                            width: `100%`,
                                            YfNKY4OYV: `Events Catered : 11`,
                                          }),
                                        }),
                                      }),
                                    ],
                                    startFrom: 0,
                                    style: { height: `100%`, width: `100%` },
                                    transitionControl: {
                                      delay: 0,
                                      duration: 1.3,
                                      ease: [0.44, 0, 0.56, 1],
                                      type: `tween`,
                                    },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            y(j.div, {
                              className: `framer-ngf80m`,
                              "data-framer-name": `Globe`,
                              style: { originX: 0, z: -500 },
                              children: [
                                p(`div`, { className: `framer-1mnwurk` }),
                                p(N, {
                                  children: p(P, {
                                    className: `framer-x2d3fu-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `VBZuD0hYd`,
                                    scopeId: `q2dk3BipV`,
                                    children: p(lr, {
                                      height: `100%`,
                                      html: `<iframe src='' frameborder='0' width='100%' height='100%'></iframe>`,
                                      id: `VBZuD0hYd`,
                                      layoutId: `VBZuD0hYd`,
                                      style: { height: `100%`, width: `100%` },
                                      type: `url`,
                                      url: ``,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            U() &&
                              p(N, {
                                children: p(P, {
                                  className: `framer-1dthgu2-container hidden-13dj5pp`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: `iucTWyF9u`,
                                  scopeId: `q2dk3BipV`,
                                  children: p(z, {
                                    breakpoint: b,
                                    overrides: {
                                      dZS61v7lZ: {
                                        gap: 90,
                                        padding: 48,
                                        paddingBottom: 48,
                                        paddingLeft: 48,
                                        paddingPerSide: !1,
                                        paddingRight: 48,
                                        paddingTop: 48,
                                      },
                                      jIFZ85Jgy: { gap: 40, itemAmount: 2 },
                                      LiSfdOU15: {
                                        gap: 140,
                                        paddingLeft: 80,
                                        paddingRight: 80,
                                      },
                                    },
                                    children: p(X, {
                                      alignment: `center`,
                                      arrowOptions: {
                                        arrowFill: `rgba(0, 0, 0, 0.08)`,
                                        arrowGap: 64,
                                        arrowPadding: -100,
                                        arrowPaddingBottom: -48,
                                        arrowPaddingLeft: 0,
                                        arrowPaddingRight: 0,
                                        arrowPaddingTop: 0,
                                        arrowPosition: `bottom-mid`,
                                        arrowRadius: 40,
                                        arrowShouldFadeIn: !0,
                                        arrowShouldSpace: !0,
                                        arrowSize: 48,
                                        showMouseControls: !0,
                                      },
                                      autoPlayControl: !0,
                                      borderRadius: 0,
                                      direction: `left`,
                                      dragControl: !0,
                                      effectsOptions: {
                                        effectsHover: !0,
                                        effectsOpacity: 0.08,
                                        effectsPerspective: 800,
                                        effectsRotate: 0,
                                        effectsScale: 0.2,
                                        playOffscreen: !1,
                                      },
                                      fadeOptions: {
                                        fadeAlpha: 0,
                                        fadeContent: !1,
                                        fadeInset: 1,
                                        fadeWidth: 0,
                                        overflow: !0,
                                      },
                                      gap: 164,
                                      height: `100%`,
                                      id: `iucTWyF9u`,
                                      intervalControl: 3,
                                      itemAmount: 3,
                                      layoutId: `iucTWyF9u`,
                                      padding: 64,
                                      paddingBottom: 64,
                                      paddingLeft: 64,
                                      paddingPerSide: !0,
                                      paddingRight: 64,
                                      paddingTop: 64,
                                      progressOptions: {
                                        dotsActiveOpacity: 1,
                                        dotsBackground: `rgba(0, 0, 0, 0.2)`,
                                        dotsBlur: 0,
                                        dotsFill: `rgb(255, 255, 255)`,
                                        dotsGap: 10,
                                        dotsInset: 10,
                                        dotSize: 10,
                                        dotsOpacity: 0.5,
                                        dotsPadding: 10,
                                        dotsRadius: 50,
                                        showProgressDots: !1,
                                      },
                                      slots: [
                                        p(N, {
                                          height: 370,
                                          width: `260px`,
                                          children: p(P, {
                                            className: `framer-18lfpd5-container`,
                                            inComponentSlot: !0,
                                            isModuleExternal: !0,
                                            nodeId: `XQsPpUQez`,
                                            rendersWithMotion: !0,
                                            scopeId: `q2dk3BipV`,
                                            children: p(Y, {
                                              Bkz5swMXb: Q(
                                                {
                                                  pixelHeight: 896,
                                                  pixelWidth: 1152,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/aA9aCzx5IJNmf63sP90AbSgW4M_kmqgwb.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/aA9aCzx5IJNmf63sP90AbSgW4M_kmqgwb.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/aA9aCzx5IJNmf63sP90AbSgW4M_kmqgwb.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/aA9aCzx5IJNmf63sP90AbSgW4M_kmqgwb.png 1152w`,
                                                },
                                                ``
                                              ),
                                              diRPtLv9G: `THAILAND`,
                                              height: `100%`,
                                              id: `XQsPpUQez`,
                                              layoutId: `XQsPpUQez`,
                                              SKrmQIE2e: `0px 0px 40px 0px`,
                                              style: { width: `100%` },
                                              variant: `zGnj2KIEs`,
                                              width: `100%`,
                                              YfNKY4OYV: `Events Catered : 11`,
                                            }),
                                          }),
                                        }),
                                        p(N, {
                                          height: 370,
                                          width: `260px`,
                                          children: p(P, {
                                            className: `framer-j0seob-container`,
                                            inComponentSlot: !0,
                                            isModuleExternal: !0,
                                            nodeId: `GVKl9OHiL`,
                                            rendersWithMotion: !0,
                                            scopeId: `q2dk3BipV`,
                                            children: p(Y, {
                                              Bkz5swMXb: Q(
                                                {
                                                  pixelHeight: 896,
                                                  pixelWidth: 1152,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/v3o4ZqOHPU0aHMVLZdMS4HB2BH8_iyb7jl.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/v3o4ZqOHPU0aHMVLZdMS4HB2BH8_iyb7jl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/v3o4ZqOHPU0aHMVLZdMS4HB2BH8_iyb7jl.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/v3o4ZqOHPU0aHMVLZdMS4HB2BH8_iyb7jl.png 1152w`,
                                                },
                                                ``
                                              ),
                                              diRPtLv9G: `SRI LANKA`,
                                              height: `100%`,
                                              id: `GVKl9OHiL`,
                                              layoutId: `GVKl9OHiL`,
                                              SKrmQIE2e: `40px 8px 0px 8px`,
                                              style: { width: `100%` },
                                              variant: `zGnj2KIEs`,
                                              width: `100%`,
                                              YfNKY4OYV: `Events Catered : 3`,
                                            }),
                                          }),
                                        }),
                                        p(N, {
                                          height: 370,
                                          width: `260px`,
                                          children: p(P, {
                                            className: `framer-1growrk-container`,
                                            "data-framer-name": `3`,
                                            inComponentSlot: !0,
                                            isModuleExternal: !0,
                                            name: `3`,
                                            nodeId: `G6XT82tbE`,
                                            rendersWithMotion: !0,
                                            scopeId: `q2dk3BipV`,
                                            children: p(Y, {
                                              Bkz5swMXb: Q(
                                                {
                                                  pixelHeight: 1067,
                                                  pixelWidth: 1600,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1600/v1/TeUaEv9rguk71IjCPSuAUicJiaI_reavci.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1600/v1/TeUaEv9rguk71IjCPSuAUicJiaI_reavci.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1600/v1/TeUaEv9rguk71IjCPSuAUicJiaI_reavci.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1600/v1/TeUaEv9rguk71IjCPSuAUicJiaI_reavci.png 1600w`,
                                                },
                                                ``
                                              ),
                                              diRPtLv9G: `BANGALURU`,
                                              height: `100%`,
                                              id: `G6XT82tbE`,
                                              layoutId: `G6XT82tbE`,
                                              name: `3`,
                                              SKrmQIE2e: `0px 0px 40px 0px`,
                                              style: { width: `100%` },
                                              variant: `zGnj2KIEs`,
                                              width: `100%`,
                                              YfNKY4OYV: `Events Catered : 5`,
                                            }),
                                          }),
                                        }),
                                        p(N, {
                                          height: 370,
                                          width: `260px`,
                                          children: p(P, {
                                            className: `framer-x2nqxc-container`,
                                            inComponentSlot: !0,
                                            isModuleExternal: !0,
                                            nodeId: `oL6cePzrP`,
                                            rendersWithMotion: !0,
                                            scopeId: `q2dk3BipV`,
                                            children: p(Y, {
                                              Bkz5swMXb: Q(
                                                {
                                                  pixelHeight: 896,
                                                  pixelWidth: 1152,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/vyqXlJy9JcN0BK0PXNEG0HXEk_rd4nrs.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/vyqXlJy9JcN0BK0PXNEG0HXEk_rd4nrs.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/vyqXlJy9JcN0BK0PXNEG0HXEk_rd4nrs.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1152/v1/vyqXlJy9JcN0BK0PXNEG0HXEk_rd4nrs.png 1152w`,
                                                },
                                                ``
                                              ),
                                              diRPtLv9G: `UAE`,
                                              height: `100%`,
                                              id: `oL6cePzrP`,
                                              layoutId: `oL6cePzrP`,
                                              SKrmQIE2e: `40px 8px 0px 8px`,
                                              style: { width: `100%` },
                                              variant: `zGnj2KIEs`,
                                              width: `100%`,
                                              YfNKY4OYV: `Events Catered : 9`,
                                            }),
                                          }),
                                        }),
                                        p(N, {
                                          height: 370,
                                          width: `260px`,
                                          children: p(P, {
                                            className: `framer-1tjh3x3-container`,
                                            inComponentSlot: !0,
                                            isModuleExternal: !0,
                                            nodeId: `DnXkCPirY`,
                                            rendersWithMotion: !0,
                                            scopeId: `q2dk3BipV`,
                                            children: p(Y, {
                                              Bkz5swMXb: Q(
                                                {
                                                  pixelHeight: 800,
                                                  pixelWidth: 1200,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/9NJ1unSEFj2eIocD27OrVwm9jQ_a3miru.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/9NJ1unSEFj2eIocD27OrVwm9jQ_a3miru.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/9NJ1unSEFj2eIocD27OrVwm9jQ_a3miru.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/9NJ1unSEFj2eIocD27OrVwm9jQ_a3miru.png 1200w`,
                                                },
                                                ``
                                              ),
                                              diRPtLv9G: `RAJASTHAN`,
                                              height: `100%`,
                                              id: `DnXkCPirY`,
                                              layoutId: `DnXkCPirY`,
                                              SKrmQIE2e: `0px 0px 40px 0px`,
                                              style: { width: `100%` },
                                              variant: `zGnj2KIEs`,
                                              width: `100%`,
                                              YfNKY4OYV: `Events Catered : 23`,
                                            }),
                                          }),
                                        }),
                                        p(N, {
                                          height: 370,
                                          width: `260px`,
                                          children: p(P, {
                                            className: `framer-ymeeet-container`,
                                            inComponentSlot: !0,
                                            isModuleExternal: !0,
                                            nodeId: `yHAud0zwC`,
                                            rendersWithMotion: !0,
                                            scopeId: `q2dk3BipV`,
                                            children: p(Y, {
                                              Bkz5swMXb: Q(
                                                {
                                                  pixelHeight: 1001,
                                                  pixelWidth: 1500,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1500/v1/Nwn08V2rqVxcnFBlG97lVB3Iw_jc0e8p.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1500/v1/Nwn08V2rqVxcnFBlG97lVB3Iw_jc0e8p.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1500/v1/Nwn08V2rqVxcnFBlG97lVB3Iw_jc0e8p.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1500/v1/Nwn08V2rqVxcnFBlG97lVB3Iw_jc0e8p.png 1500w`,
                                                },
                                                ``
                                              ),
                                              diRPtLv9G: `GOA`,
                                              height: `100%`,
                                              id: `yHAud0zwC`,
                                              layoutId: `yHAud0zwC`,
                                              SKrmQIE2e: `40px 8px 0px 8px`,
                                              style: { width: `100%` },
                                              variant: `zGnj2KIEs`,
                                              width: `100%`,
                                              YfNKY4OYV: `Events Catered : 17`,
                                            }),
                                          }),
                                        }),
                                        p(N, {
                                          height: 370,
                                          width: `260px`,
                                          children: p(P, {
                                            className: `framer-b98q0p-container`,
                                            inComponentSlot: !0,
                                            isModuleExternal: !0,
                                            nodeId: `L1Hd9BrJ5`,
                                            rendersWithMotion: !0,
                                            scopeId: `q2dk3BipV`,
                                            children: p(Y, {
                                              Bkz5swMXb: Q(
                                                {
                                                  pixelHeight: 800,
                                                  pixelWidth: 1200,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/hfjndgjkIQhh1zpzTXLUtN0LwM_dlhtbh.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/hfjndgjkIQhh1zpzTXLUtN0LwM_dlhtbh.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/hfjndgjkIQhh1zpzTXLUtN0LwM_dlhtbh.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/hfjndgjkIQhh1zpzTXLUtN0LwM_dlhtbh.png 1200w`,
                                                },
                                                ``
                                              ),
                                              diRPtLv9G: `KERALA`,
                                              height: `100%`,
                                              id: `L1Hd9BrJ5`,
                                              layoutId: `L1Hd9BrJ5`,
                                              SKrmQIE2e: `0px 0px 40px 0px`,
                                              style: { width: `100%` },
                                              variant: `zGnj2KIEs`,
                                              width: `100%`,
                                              YfNKY4OYV: `Events Catered : 3`,
                                            }),
                                          }),
                                        }),
                                        p(N, {
                                          height: 370,
                                          width: `260px`,
                                          children: p(P, {
                                            className: `framer-f0od3x-container`,
                                            inComponentSlot: !0,
                                            isModuleExternal: !0,
                                            nodeId: `kLKHDuUU_`,
                                            rendersWithMotion: !0,
                                            scopeId: `q2dk3BipV`,
                                            children: p(Y, {
                                              diRPtLv9G: `MUMBAI`,
                                              height: `100%`,
                                              id: `kLKHDuUU_`,
                                              layoutId: `kLKHDuUU_`,
                                              SKrmQIE2e: `40px 8px 0px 8px`,
                                              style: { width: `100%` },
                                              variant: `zGnj2KIEs`,
                                              width: `100%`,
                                              YfNKY4OYV: `Events Catered : 29`,
                                            }),
                                          }),
                                        }),
                                        p(N, {
                                          height: 370,
                                          width: `260px`,
                                          children: p(P, {
                                            className: `framer-10l70hj-container`,
                                            inComponentSlot: !0,
                                            isModuleExternal: !0,
                                            nodeId: `YyJR2lSdR`,
                                            rendersWithMotion: !0,
                                            scopeId: `q2dk3BipV`,
                                            children: p(Y, {
                                              Bkz5swMXb: Q(
                                                {
                                                  pixelHeight: 5326,
                                                  pixelWidth: 8e3,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/v1/DVw6cMZfMHNUt3KaHjY8jYV98_n4mmwy.jpg`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1/DVw6cMZfMHNUt3KaHjY8jYV98_n4mmwy.jpg 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1/DVw6cMZfMHNUt3KaHjY8jYV98_n4mmwy.jpg 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/DVw6cMZfMHNUt3KaHjY8jYV98_n4mmwy.jpg 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_4096/v1/DVw6cMZfMHNUt3KaHjY8jYV98_n4mmwy.jpg 4096w,https://res.cloudinary.com/do05dlmn8/image/upload/v1/DVw6cMZfMHNUt3KaHjY8jYV98_n4mmwy.jpg 8000w`,
                                                },
                                                ``
                                              ),
                                              diRPtLv9G: `DELHI & NCR`,
                                              height: `100%`,
                                              id: `YyJR2lSdR`,
                                              layoutId: `YyJR2lSdR`,
                                              SKrmQIE2e: `0px 0px 40px 0px`,
                                              style: { width: `100%` },
                                              variant: `zGnj2KIEs`,
                                              width: `100%`,
                                              YfNKY4OYV: `Events Catered : 14`,
                                            }),
                                          }),
                                        }),
                                        p(N, {
                                          height: 370,
                                          width: `260px`,
                                          children: p(P, {
                                            className: `framer-1ckhzpc-container`,
                                            inComponentSlot: !0,
                                            isModuleExternal: !0,
                                            nodeId: `r2yM7_I2Y`,
                                            rendersWithMotion: !0,
                                            scopeId: `q2dk3BipV`,
                                            children: p(Y, {
                                              Bkz5swMXb: Q(
                                                {
                                                  pixelHeight: 1280,
                                                  pixelWidth: 1920,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1920/v1/MMiAHIicLAinVtKhTV577r3I7ok_kttnmf.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1920/v1/MMiAHIicLAinVtKhTV577r3I7ok_kttnmf.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1920/v1/MMiAHIicLAinVtKhTV577r3I7ok_kttnmf.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1920/v1/MMiAHIicLAinVtKhTV577r3I7ok_kttnmf.png 1920w`,
                                                },
                                                ``
                                              ),
                                              diRPtLv9G: `KOLKATA`,
                                              height: `100%`,
                                              id: `r2yM7_I2Y`,
                                              layoutId: `r2yM7_I2Y`,
                                              SKrmQIE2e: `40px 8px 0px 8px`,
                                              style: { width: `100%` },
                                              variant: `zGnj2KIEs`,
                                              width: `100%`,
                                              YfNKY4OYV: `Events Catered : 11`,
                                            }),
                                          }),
                                        }),
                                      ],
                                      startFrom: 0,
                                      style: { height: `100%`, width: `100%` },
                                      transitionControl: {
                                        bounce: 0.2,
                                        delay: 0,
                                        duration: 1,
                                        type: `spring`,
                                      },
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                          ],
                        }),
                        U() &&
                          p(`div`, {
                            className: `framer-1fu6dlk hidden-13dj5pp`,
                            "data-framer-name": `Spacer`,
                          }),
                        p(`section`, {
                          className: `framer-i6g5a7`,
                          "data-framer-name": `Overlap Detailing`,
                          children: y(`div`, {
                            className: `framer-duqq5`,
                            "data-framer-name": `Cards`,
                            children: [
                              U() &&
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    dZS61v7lZ: {
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: -60,
                                          },
                                        },
                                      ],
                                    },
                                    jIFZ85Jgy: {
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: -40,
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  children: p(_a, {
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -100,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onInView`,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-r29ukf hidden-13dj5pp`,
                                    "data-framer-name": `1`,
                                  }),
                                }),
                              p(z, {
                                breakpoint: b,
                                overrides: {
                                  dZS61v7lZ: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -90,
                                        },
                                      },
                                    ],
                                  },
                                  hBNTufln9: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -40,
                                        },
                                      },
                                    ],
                                  },
                                  jIFZ85Jgy: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -64,
                                        },
                                      },
                                    ],
                                  },
                                },
                                children: p(_a, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: -120,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onInView`,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1oh0zmx`,
                                  "data-framer-name": `2`,
                                }),
                              }),
                              p(z, {
                                breakpoint: b,
                                overrides: {
                                  dZS61v7lZ: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -120,
                                        },
                                      },
                                    ],
                                  },
                                  hBNTufln9: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -64,
                                        },
                                      },
                                    ],
                                  },
                                  jIFZ85Jgy: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -100,
                                        },
                                      },
                                    ],
                                  },
                                },
                                children: p(_a, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: -180,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onInView`,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-o2mrhs`,
                                  "data-framer-name": `3`,
                                }),
                              }),
                              p(z, {
                                breakpoint: b,
                                overrides: {
                                  dZS61v7lZ: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -90,
                                        },
                                      },
                                    ],
                                  },
                                  hBNTufln9: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -40,
                                        },
                                      },
                                    ],
                                  },
                                  jIFZ85Jgy: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -64,
                                        },
                                      },
                                    ],
                                  },
                                },
                                children: p(_a, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: -120,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onInView`,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-64nghq`,
                                  "data-framer-name": `4`,
                                }),
                              }),
                              U() &&
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    dZS61v7lZ: {
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: -60,
                                          },
                                        },
                                      ],
                                    },
                                    jIFZ85Jgy: {
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: -40,
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  children: p(_a, {
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -100,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onInView`,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1qmta8h hidden-13dj5pp`,
                                    "data-framer-name": `5`,
                                  }),
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    y(`div`, {
                      className: `framer-14vnvwk`,
                      "data-framer-name": `Signature Approach`,
                      children: [
                        y(`div`, {
                          className: `framer-d5nhr7`,
                          "data-framer-name": `Header`,
                          children: [
                            p(z, {
                              breakpoint: b,
                              overrides: {
                                dZS61v7lZ: {
                                  children: p(S, {
                                    children: y(`h1`, {
                                      style: {
                                        "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                        "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                        "--framer-font-size": `64px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                      },
                                      children: [
                                        `Shahi Caterers’s `,
                                        p(`span`, {
                                          style: {
                                            "--framer-text-color": `rgb(0, 0, 0)`,
                                          },
                                          children: p(`br`, {}),
                                        }),
                                        `Signature Approach `,
                                        p(`span`, {
                                          style: {
                                            "--framer-text-color": `rgb(0, 0, 0)`,
                                          },
                                          children: p(`br`, {}),
                                        }),
                                        `To Unforgettable `,
                                        p(`span`, {
                                          style: {
                                            "--framer-text-color": `rgb(0, 0, 0)`,
                                          },
                                          children: p(`br`, {}),
                                        }),
                                        `Events`,
                                      ],
                                    }),
                                  }),
                                },
                                hBNTufln9: {
                                  children: p(S, {
                                    children: p(`h1`, {
                                      style: {
                                        "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                        "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                        "--framer-font-size": `50px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36))`,
                                      },
                                      children: `Shahi Caterers’s Signature Approach To Unforgettable Events`,
                                    }),
                                  }),
                                },
                                jIFZ85Jgy: {
                                  children: p(S, {
                                    children: p(`h1`, {
                                      style: {
                                        "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                        "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                        "--framer-font-size": `60px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36))`,
                                      },
                                      children: `Shahi Caterers’s Signature Approach To Unforgettable Events`,
                                    }),
                                  }),
                                },
                                LiSfdOU15: {
                                  children: p(S, {
                                    children: y(`h1`, {
                                      style: {
                                        "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                        "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                        "--framer-font-size": `72px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                      },
                                      children: [
                                        `Shahi Caterers’s `,
                                        p(`span`, {
                                          style: {
                                            "--framer-text-color": `rgb(0, 0, 0)`,
                                          },
                                          children: p(`br`, {}),
                                        }),
                                        `Signature Approach `,
                                        p(`span`, {
                                          style: {
                                            "--framer-text-color": `rgb(0, 0, 0)`,
                                          },
                                          children: p(`br`, {}),
                                        }),
                                        `To Unforgettable `,
                                        p(`span`, {
                                          style: {
                                            "--framer-text-color": `rgb(0, 0, 0)`,
                                          },
                                          children: p(`br`, {}),
                                        }),
                                        `Events`,
                                      ],
                                    }),
                                  }),
                                },
                              },
                              children: p(B, {
                                __fromCanvasComponent: !0,
                                children: p(S, {
                                  children: y(`h1`, {
                                    style: {
                                      "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                      "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                      "--framer-font-size": `76px`,
                                      "--framer-line-height": `1.1em`,
                                      "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                    },
                                    children: [
                                      `Shahi Caterers’s `,
                                      p(`span`, {
                                        style: {
                                          "--framer-text-color": `rgb(0, 0, 0)`,
                                        },
                                        children: p(`br`, {}),
                                      }),
                                      `Signature Approach `,
                                      p(`span`, {
                                        style: {
                                          "--framer-text-color": `rgb(0, 0, 0)`,
                                        },
                                        children: p(`br`, {}),
                                      }),
                                      `To Unforgettable `,
                                      p(`span`, {
                                        style: {
                                          "--framer-text-color": `rgb(0, 0, 0)`,
                                        },
                                        children: p(`br`, {}),
                                      }),
                                      `Events`,
                                    ],
                                  }),
                                }),
                                className: `framer-ec8v1e`,
                                "data-framer-name": `Signature Approach Title`,
                                fonts: [`CUSTOM;Perpetua Regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            p(z, {
                              breakpoint: b,
                              overrides: {
                                hBNTufln9: {
                                  children: p(S, {
                                    children: p(`p`, {
                                      style: {
                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                      },
                                      children: `Our meticulous process ensures every event is flawlessly executed, blending culinary artistry with seamless service for an unparalleled luxury experience.`,
                                    }),
                                  }),
                                },
                              },
                              children: p(B, {
                                __fromCanvasComponent: !0,
                                children: p(S, {
                                  children: p(`p`, {
                                    style: {
                                      "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                      "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                      "--framer-font-size": `18px`,
                                      "--framer-font-variation-axes": `"wght" 400`,
                                      "--framer-line-height": `1.6em`,
                                      "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                    },
                                    children: `Our meticulous process ensures every event is flawlessly executed, blending culinary artistry with seamless service for an unparalleled luxury experience.`,
                                  }),
                                }),
                                className: `framer-opxne6`,
                                "data-framer-name": `Signature Approach Description`,
                                fonts: [`FS;Montserrat-variable`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        y(`div`, {
                          className: `framer-aew7ak`,
                          "data-framer-name": `Process Container`,
                          children: [
                            y(`div`, {
                              className: `framer-7kmt7b`,
                              "data-framer-name": `Process Step`,
                              children: [
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    hBNTufln9: {
                                      children: p(S, {
                                        children: p(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `42px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          },
                                          children: `01`,
                                        }),
                                      }),
                                    },
                                    jIFZ85Jgy: {
                                      children: p(S, {
                                        children: p(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `46px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          },
                                          children: `01`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: p(B, {
                                    __fromCanvasComponent: !0,
                                    children: p(S, {
                                      children: p(`h3`, {
                                        style: {
                                          "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                          "--framer-font-family": `"Red Rose", sans-serif`,
                                          "--framer-font-size": `50px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-0f9c3003-8577-40ef-a001-ccbb14e45f6e, rgb(146, 122, 102))`,
                                        },
                                        children: `01`,
                                      }),
                                    }),
                                    className: `framer-mo69is`,
                                    "data-framer-name": `Step Number`,
                                    fonts: [`GF;Red Rose-700`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                y(`div`, {
                                  className: `framer-98l4fh`,
                                  "data-framer-name": `Step Description Container`,
                                  children: [
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-size": `18px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                              },
                                              children: `Initial Inquiry & Consultation`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`h3`, {
                                            style: {
                                              "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                              "--framer-font-family": `"Red Rose", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                            },
                                            children: `Initial Inquiry & Consultation`,
                                          }),
                                        }),
                                        className: `framer-cg8pgc`,
                                        "data-framer-name": `Step Title`,
                                        fonts: [`GF;Red Rose-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `15px`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                              },
                                              children: `We receive your inquiry via call, email, or website, gather key event details, budget and schedule a consultation to understand your vision, preferences, and expectations.`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                            },
                                            children: `We receive your inquiry via call, email, or website, gather key event details, budget and schedule a consultation to understand your vision, preferences, and expectations.`,
                                          }),
                                        }),
                                        className: `framer-1915qw4`,
                                        "data-framer-name": `Step Details`,
                                        fonts: [`FS;Montserrat-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            y(`div`, {
                              className: `framer-8j40di`,
                              "data-framer-name": `Process Step`,
                              children: [
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    hBNTufln9: {
                                      children: p(S, {
                                        children: p(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `42px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          },
                                          children: `02`,
                                        }),
                                      }),
                                    },
                                    jIFZ85Jgy: {
                                      children: p(S, {
                                        children: p(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `46px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          },
                                          children: `02`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: p(B, {
                                    __fromCanvasComponent: !0,
                                    children: p(S, {
                                      children: p(`h3`, {
                                        style: {
                                          "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                          "--framer-font-family": `"Red Rose", sans-serif`,
                                          "--framer-font-size": `50px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-0f9c3003-8577-40ef-a001-ccbb14e45f6e, rgb(146, 122, 102))`,
                                        },
                                        children: `02`,
                                      }),
                                    }),
                                    className: `framer-75fzs6`,
                                    "data-framer-name": `Step Number`,
                                    fonts: [`GF;Red Rose-700`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                y(`div`, {
                                  className: `framer-1uelfd7`,
                                  "data-framer-name": `Step Description Container`,
                                  children: [
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-size": `18px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                              },
                                              children: `Proposal & Custom Menu Curation`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`h3`, {
                                            style: {
                                              "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                              "--framer-font-family": `"Red Rose", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                            },
                                            children: `Proposal & Custom Menu Curation`,
                                          }),
                                        }),
                                        className: `framer-cp0dta`,
                                        "data-framer-name": `Step Title`,
                                        fonts: [`GF;Red Rose-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `15px`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                              },
                                              children: `A tailored proposal is crafted with curated menus, pricing, and service details. We offer recommendations and refine the plan based on your feedback.`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                            },
                                            children: `A tailored proposal is crafted with curated menus, pricing, and service details. We offer recommendations and refine the plan based on your feedback.`,
                                          }),
                                        }),
                                        className: `framer-4gspr9`,
                                        "data-framer-name": `Step Details`,
                                        fonts: [`FS;Montserrat-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            y(`div`, {
                              className: `framer-zj5cz4`,
                              "data-framer-name": `Process Step`,
                              children: [
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    hBNTufln9: {
                                      children: p(S, {
                                        children: p(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `42px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          },
                                          children: `03`,
                                        }),
                                      }),
                                    },
                                    jIFZ85Jgy: {
                                      children: p(S, {
                                        children: p(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `46px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          },
                                          children: `03`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: p(B, {
                                    __fromCanvasComponent: !0,
                                    children: p(S, {
                                      children: p(`h3`, {
                                        style: {
                                          "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                          "--framer-font-family": `"Red Rose", sans-serif`,
                                          "--framer-font-size": `50px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-0f9c3003-8577-40ef-a001-ccbb14e45f6e, rgb(146, 122, 102))`,
                                        },
                                        children: `03`,
                                      }),
                                    }),
                                    className: `framer-6dn5eu`,
                                    "data-framer-name": `Step Number`,
                                    fonts: [`GF;Red Rose-700`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                p(`div`, {
                                  className: `framer-18scim3`,
                                  "data-framer-name": `Step Description Container`,
                                  children: y(`div`, {
                                    className: `framer-8kuq67`,
                                    "data-framer-name": `Step Description Container`,
                                    children: [
                                      p(z, {
                                        breakpoint: b,
                                        overrides: {
                                          hBNTufln9: {
                                            children: p(S, {
                                              children: p(`h3`, {
                                                style: {
                                                  "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                  "--framer-font-family": `"Red Rose", sans-serif`,
                                                  "--framer-font-size": `18px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                                },
                                                children: `Tasting & Finalization`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: p(B, {
                                          __fromCanvasComponent: !0,
                                          children: p(S, {
                                            children: p(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                              },
                                              children: `Tasting & Finalization`,
                                            }),
                                          }),
                                          className: `framer-6sknrb`,
                                          "data-framer-name": `Step Title`,
                                          fonts: [`GF;Red Rose-500`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      p(z, {
                                        breakpoint: b,
                                        overrides: {
                                          hBNTufln9: {
                                            children: p(S, {
                                              children: p(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                  "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-size": `15px`,
                                                  "--framer-font-variation-axes": `"wght" 300`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                                },
                                                children: `A tasting is arranged (if applicable) to ensure every dish aligns with your taste. Flavors, presentation, and portions are adjusted before finalizing the menu and services.`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: p(B, {
                                          __fromCanvasComponent: !0,
                                          children: p(S, {
                                            children: p(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                              },
                                              children: `A tasting is arranged (if applicable) to ensure every dish aligns with your taste. Flavors, presentation, and portions are adjusted before finalizing the menu and services.`,
                                            }),
                                          }),
                                          className: `framer-1b8by8t`,
                                          "data-framer-name": `Step Details`,
                                          fonts: [`FS;Montserrat-variable`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            y(`div`, {
                              className: `framer-189wyss`,
                              "data-framer-name": `Process Step`,
                              children: [
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    hBNTufln9: {
                                      children: p(S, {
                                        children: p(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `42px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          },
                                          children: `04`,
                                        }),
                                      }),
                                    },
                                    jIFZ85Jgy: {
                                      children: p(S, {
                                        children: p(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `46px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          },
                                          children: `04`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: p(B, {
                                    __fromCanvasComponent: !0,
                                    children: p(S, {
                                      children: p(`h3`, {
                                        style: {
                                          "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                          "--framer-font-family": `"Red Rose", sans-serif`,
                                          "--framer-font-size": `50px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-0f9c3003-8577-40ef-a001-ccbb14e45f6e, rgb(146, 122, 102))`,
                                        },
                                        children: `04`,
                                      }),
                                    }),
                                    className: `framer-e5pkrl`,
                                    "data-framer-name": `Step Number`,
                                    fonts: [`GF;Red Rose-700`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                y(`div`, {
                                  className: `framer-pu82u0`,
                                  "data-framer-name": `Step Description Container`,
                                  children: [
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-size": `18px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                              },
                                              children: `Contract & Booking Confirmation`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`h3`, {
                                            style: {
                                              "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                              "--framer-font-family": `"Red Rose", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                            },
                                            children: `Contract & Booking Confirmation`,
                                          }),
                                        }),
                                        className: `framer-z5zj7n`,
                                        "data-framer-name": `Step Title`,
                                        fonts: [`GF;Red Rose-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `15px`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                              },
                                              children: `We share a detailed contract, secure the date with a deposit, and assign a dedicated event manager for seamless coordination.`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                            },
                                            children: `We share a detailed contract, secure the date with a deposit, and assign a dedicated event manager for seamless coordination.`,
                                          }),
                                        }),
                                        className: `framer-1ap8fyy`,
                                        "data-framer-name": `Step Details`,
                                        fonts: [`FS;Montserrat-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            y(`div`, {
                              className: `framer-zv3ek9`,
                              "data-framer-name": `Process Step`,
                              children: [
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    hBNTufln9: {
                                      children: p(S, {
                                        children: p(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `42px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          },
                                          children: `05`,
                                        }),
                                      }),
                                    },
                                    jIFZ85Jgy: {
                                      children: p(S, {
                                        children: p(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `46px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          },
                                          children: `05`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: p(B, {
                                    __fromCanvasComponent: !0,
                                    children: p(S, {
                                      children: p(`h3`, {
                                        style: {
                                          "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                          "--framer-font-family": `"Red Rose", sans-serif`,
                                          "--framer-font-size": `50px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-0f9c3003-8577-40ef-a001-ccbb14e45f6e, rgb(146, 122, 102))`,
                                        },
                                        children: `05`,
                                      }),
                                    }),
                                    className: `framer-1a86e2g`,
                                    "data-framer-name": `Step Number`,
                                    fonts: [`GF;Red Rose-700`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                y(`div`, {
                                  className: `framer-86pmkx`,
                                  "data-framer-name": `Step Description Container`,
                                  children: [
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-size": `18px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                              },
                                              children: `Pre-Event Coordination`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`h3`, {
                                            style: {
                                              "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                              "--framer-font-family": `"Red Rose", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                            },
                                            children: `Pre-Event Coordination`,
                                          }),
                                        }),
                                        className: `framer-n235g`,
                                        "data-framer-name": `Step Title`,
                                        fonts: [`GF;Red Rose-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `15px`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                              },
                                              children: `Our team conducts a venue visit if needed, finalizes staffing and setup details, and works closely with vendors to ensure flawless execution.`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                            },
                                            children: `Our team conducts a venue visit if needed, finalizes staffing and setup details, and works closely with vendors to ensure flawless execution.`,
                                          }),
                                        }),
                                        className: `framer-15tlgpz`,
                                        "data-framer-name": `Step Details`,
                                        fonts: [`FS;Montserrat-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            y(`div`, {
                              className: `framer-16ouuem`,
                              "data-framer-name": `Process Step`,
                              children: [
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    hBNTufln9: {
                                      children: p(S, {
                                        children: p(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `42px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          },
                                          children: `06`,
                                        }),
                                      }),
                                    },
                                    jIFZ85Jgy: {
                                      children: p(S, {
                                        children: p(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                            "--framer-font-family": `"Red Rose", sans-serif`,
                                            "--framer-font-size": `46px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          },
                                          children: `06`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: p(B, {
                                    __fromCanvasComponent: !0,
                                    children: p(S, {
                                      children: p(`h3`, {
                                        style: {
                                          "--font-selector": `R0Y7UmVkIFJvc2UtNzAw`,
                                          "--framer-font-family": `"Red Rose", sans-serif`,
                                          "--framer-font-size": `50px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-0f9c3003-8577-40ef-a001-ccbb14e45f6e, rgb(146, 122, 102))`,
                                        },
                                        children: `06`,
                                      }),
                                    }),
                                    className: `framer-1f8joj0`,
                                    "data-framer-name": `Step Number`,
                                    fonts: [`GF;Red Rose-700`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                y(`div`, {
                                  className: `framer-rb8tur`,
                                  "data-framer-name": `Step Description Container`,
                                  children: [
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-size": `18px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                              },
                                              children: `Event Execution & Follow-Up `,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`h3`, {
                                            style: {
                                              "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                              "--framer-font-family": `"Red Rose", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, rgb(76, 51, 36))`,
                                            },
                                            children: `Event Execution & Follow-Up `,
                                          }),
                                        }),
                                        className: `framer-1whiu5i`,
                                        "data-framer-name": `Step Title`,
                                        fonts: [`GF;Red Rose-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `15px`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                              },
                                              children: `On the event day, we deliver impeccable catering with real-time coordination. Post-event, we gather feedback and nurture the relationship for future collaborations.`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-color": `var(--token-04e764c4-bea6-4958-9691-8a41e4db03f3, rgb(86, 71, 60))`,
                                            },
                                            children: `On the event day, we deliver impeccable catering with real-time coordination. Post-event, we gather feedback and nurture the relationship for future collaborations.`,
                                          }),
                                        }),
                                        className: `framer-k4oper`,
                                        "data-framer-name": `Step Details`,
                                        fonts: [`FS;Montserrat-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    p(z, {
                      breakpoint: b,
                      overrides: {
                        dZS61v7lZ: {
                          background: {
                            alt: ``,
                            fit: `stretch`,
                            loading: W((l?.y || 0) + 0 + 10768.4),
                            pixelHeight: 1030,
                            pixelWidth: 3840,
                            positionX: `center`,
                            positionY: `center`,
                            sizes: l?.width || `100vw`,
                            src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png`,
                            srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 3840w`,
                          },
                        },
                        hBNTufln9: {
                          background: {
                            alt: ``,
                            fit: `stretch`,
                            pixelHeight: 1030,
                            pixelWidth: 3840,
                            positionX: `center`,
                            positionY: `center`,
                            sizes: l?.width || `100vw`,
                            src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png`,
                            srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 3840w`,
                          },
                        },
                        jIFZ85Jgy: {
                          background: {
                            alt: ``,
                            fit: `stretch`,
                            pixelHeight: 1030,
                            pixelWidth: 3840,
                            positionX: `center`,
                            positionY: `center`,
                            sizes: l?.width || `100vw`,
                            src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png`,
                            srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 3840w`,
                          },
                        },
                        LiSfdOU15: {
                          background: {
                            alt: ``,
                            fit: `stretch`,
                            loading: W((l?.y || 0) + 0 + 10998),
                            pixelHeight: 1030,
                            pixelWidth: 3840,
                            positionX: `center`,
                            positionY: `center`,
                            sizes: l?.width || `100vw`,
                            src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png`,
                            srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 3840w`,
                          },
                        },
                      },
                      children: p(L, {
                        background: {
                          alt: ``,
                          fit: `stretch`,
                          loading: W((l?.y || 0) + 0 + 10994),
                          pixelHeight: 1030,
                          pixelWidth: 3840,
                          positionX: `center`,
                          positionY: `center`,
                          sizes: l?.width || `100vw`,
                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png`,
                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/4MAJc1g2LIjpUJyos7whBscEkaI_jzobdq.png 3840w`,
                        },
                        className: `framer-18w06ol`,
                        "data-framer-name": `USPs`,
                        children: y(`div`, {
                          className: `framer-1roelpp`,
                          "data-framer-name": `Values Container`,
                          children: [
                            y(ga, {
                              animate: qa,
                              className: `framer-1lbdint`,
                              "data-framer-appear-id": `1lbdint`,
                              "data-framer-name": `Value Item`,
                              initial: Fa,
                              optimized: !0,
                              children: [
                                p(`div`, {
                                  className: `framer-1kus204`,
                                  "data-framer-name": `Value Icon`,
                                  children: p(le, {
                                    className: `framer-1r3ilo8`,
                                    "data-framer-name": `food-tray`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 46,
                                    intrinsicWidth: 52,
                                    svg: `<svg width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.8753 35H48.142C48.382 33.6667 48.542 32.3334 48.542 31C48.542 19.9867 40.6486 10.7867 30.1953 8.76005C30.8086 7.88005 31.2087 6.81337 31.2087 5.66671C31.2087 2.73337 28.8087 0.333374 25.8753 0.333374C22.942 0.333374 20.542 2.73337 20.542 5.66671C20.542 6.81337 20.9153 7.88005 21.5553 8.76005C11.1287 10.7867 3.20866 19.9867 3.20866 31C3.20866 32.3334 3.36864 33.6667 3.60864 35H1.87533C1.12866 35 0.541992 35.5867 0.541992 36.3334V40.3334C0.541992 43.2667 2.94199 45.6667 5.87533 45.6667H45.8753C48.8087 45.6667 51.2087 43.2667 51.2087 40.3334V36.3334C51.2087 35.5867 50.622 35 49.8753 35ZM23.2087 5.66671C23.2087 4.20004 24.4087 3.00004 25.8753 3.00004C27.342 3.00004 28.542 4.20004 28.542 5.66671C28.542 7.13337 27.342 8.33337 25.8753 8.33337C24.4087 8.33337 23.2087 7.13337 23.2087 5.66671ZM5.87533 31C5.87533 19.96 14.8353 11 25.8753 11C36.9153 11 45.8753 19.96 45.8753 31C45.8753 32.3334 45.7153 33.6667 45.4486 35H6.32865C6.06199 33.6667 5.90198 32.3334 5.90198 31H5.87533ZM48.542 40.3334C48.542 41.8 47.342 43 45.8753 43H5.87533C4.40866 43 3.20866 41.8 3.20866 40.3334V37.6667H48.542V40.3334ZM37.8753 22.3067C38.2753 22.9201 38.062 23.7467 37.4486 24.1467C37.2353 24.28 36.9953 24.36 36.7553 24.36C36.302 24.36 35.8753 24.1467 35.6353 23.7201C34.1687 21.3467 31.3686 19.5334 28.3553 19C27.6353 18.8667 27.1553 18.1734 27.262 17.4534C27.3953 16.7334 28.0887 16.2267 28.8087 16.36C32.5953 17.0267 36.0086 19.2401 37.902 22.3067H37.8753Z" fill="#F8E1C5"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                y(`div`, {
                                  className: `framer-1oatcf2`,
                                  "data-framer-name": `Value Description Container`,
                                  children: [
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                                              },
                                              children: `Exquisite Curation`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`h3`, {
                                            style: {
                                              "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                              "--framer-font-family": `"Red Rose", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                                            },
                                            children: `Exquisite Curation`,
                                          }),
                                        }),
                                        className: `framer-o4lewr`,
                                        "data-framer-name": `Value Title`,
                                        fonts: [`GF;Red Rose-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `13px`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-547c5a6a-9461-4593-9fdb-4708b2ee5b6d, rgb(221, 221, 221))`,
                                              },
                                              children: `Bespoke menus crafted with artistry and innovation`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-547c5a6a-9461-4593-9fdb-4708b2ee5b6d, rgb(221, 221, 221))`,
                                            },
                                            children: `Bespoke menus crafted with artistry and innovation`,
                                          }),
                                        }),
                                        className: `framer-c2swyh`,
                                        "data-framer-name": `Value Details`,
                                        fonts: [`FS;Montserrat-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            y(ga, {
                              animate: qa,
                              className: `framer-15jfnd1`,
                              "data-framer-appear-id": `15jfnd1`,
                              "data-framer-name": `Value Item`,
                              initial: Fa,
                              optimized: !0,
                              children: [
                                p(`div`, {
                                  className: `framer-kbqm20`,
                                  "data-framer-name": `Value Icon`,
                                  children: p(le, {
                                    className: `framer-jkceqa`,
                                    "data-framer-name": `crown-alt`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 49,
                                    intrinsicWidth: 51,
                                    svg: `<svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.0993 13.1359C47.5739 12.0373 45.5793 11.9999 44.014 13.0426L37.838 17.16C37.5233 17.3706 37.1446 17.4266 36.7872 17.3279C36.4246 17.2266 36.1366 16.984 35.9739 16.6426L29.6539 3.2266C28.9099 1.64527 27.3633 0.666626 25.6167 0.666626C25.6167 0.666626 25.6166 0.666626 25.6139 0.666626C23.8672 0.666626 22.3206 1.65064 21.5766 3.23197L15.2726 16.6426C15.1126 16.984 14.8247 17.2266 14.462 17.3279C14.0994 17.4293 13.7286 17.3706 13.4113 17.16L7.23531 13.0426C5.66998 11.9999 3.67536 12.0373 2.15003 13.1359C0.624694 14.2346 -0.0393695 16.1173 0.451297 17.9146L5.29928 36.6666C5.90728 39.0213 8.02998 40.6666 10.4646 40.6666H40.7846C43.2166 40.6666 45.3392 39.0213 45.9472 36.6693L50.7926 17.9333C51.2886 16.1173 50.6246 14.2346 49.0993 13.1359ZM48.2166 17.2479L43.366 36.0026C43.062 37.1786 42.0006 38.0026 40.7846 38.0026H10.4646C9.24864 38.0026 8.18726 37.1813 7.88326 36.0026L3.02991 17.232C2.72591 16.1173 3.47536 15.472 3.71269 15.3013C3.86202 15.192 4.25938 14.9493 4.77405 14.9493C5.07005 14.9493 5.40594 15.0293 5.75794 15.264L11.934 19.3813C12.8887 20.016 14.0699 20.208 15.1766 19.8986C16.2832 19.592 17.198 18.8186 17.686 17.7786L23.99 4.36796C24.294 3.72263 24.8992 3.33598 25.6139 3.33598C26.3286 3.33598 26.9367 3.72263 27.2407 4.36796L33.5607 17.784C34.0513 18.8213 34.9633 19.5947 36.07 19.9013C37.1713 20.208 38.358 20.0213 39.3126 19.384L45.4886 15.2666C46.4512 14.6266 47.3019 15.1333 47.5366 15.304C47.7766 15.472 48.5259 16.1146 48.2166 17.2479ZM44.2913 47.3333C44.2913 48.0693 43.694 48.6666 42.958 48.6666H8.2913C7.5553 48.6666 6.95797 48.0693 6.95797 47.3333C6.95797 46.5973 7.5553 46 8.2913 46H42.958C43.694 46 44.2913 46.5973 44.2913 47.3333Z" fill="#F8E1C5"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                y(`div`, {
                                  className: `framer-4mairz`,
                                  "data-framer-name": `Value Description Container`,
                                  children: [
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                                              },
                                              children: `Legacy of Perfection`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`h3`, {
                                            style: {
                                              "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                              "--framer-font-family": `"Red Rose", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                                            },
                                            children: `Legacy of Perfection`,
                                          }),
                                        }),
                                        className: `framer-1ofrbyc`,
                                        "data-framer-name": `Value Title`,
                                        fonts: [`GF;Red Rose-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `13px`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-547c5a6a-9461-4593-9fdb-4708b2ee5b6d, rgb(221, 221, 221))`,
                                              },
                                              children: `Redefining luxury catering with impeccable execution`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-547c5a6a-9461-4593-9fdb-4708b2ee5b6d, rgb(221, 221, 221))`,
                                            },
                                            children: `Redefining luxury catering with impeccable execution`,
                                          }),
                                        }),
                                        className: `framer-qh5zx4`,
                                        "data-framer-name": `Value Details`,
                                        fonts: [`FS;Montserrat-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            y(ga, {
                              animate: qa,
                              className: `framer-nih0zx`,
                              "data-framer-appear-id": `nih0zx`,
                              "data-framer-name": `Value Item`,
                              initial: Fa,
                              optimized: !0,
                              children: [
                                p(`div`, {
                                  className: `framer-w81gr`,
                                  "data-framer-name": `Value Icon`,
                                  children: p(le, {
                                    className: `framer-17rjcn4`,
                                    "data-framer-name": `star`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 49,
                                    intrinsicWidth: 51,
                                    svg: `<svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.4923 22.3919C50.591 21.3226 50.9832 19.752 50.5112 18.2933C50.0365 16.832 48.7966 15.7867 47.2739 15.568L35.3217 13.84C34.8871 13.776 34.5085 13.5066 34.3165 13.112L29.1378 2.66667C28.4232 1.22933 26.9831 0.335938 25.3777 0.335938C23.7724 0.335938 22.3296 1.22933 21.6176 2.66667L16.4393 13.1147C16.2473 13.5067 15.8684 13.7786 15.4337 13.8426L3.4819 15.5706C1.95923 15.792 0.719261 16.8347 0.244594 18.2961C-0.227406 19.7547 0.164482 21.3254 1.26315 22.3947L9.90573 30.7814C10.2204 31.0881 10.3645 31.528 10.2898 31.96L8.31393 43.4294C8.04193 45.008 8.68167 46.576 9.97767 47.5226C11.2763 48.4693 12.9726 48.5973 14.3966 47.848L24.7563 42.4266C25.1456 42.2213 25.6153 42.2239 26.0073 42.4266L36.3751 47.8534C36.9911 48.176 37.6577 48.3359 38.3217 48.3359C39.1911 48.3359 40.0525 48.064 40.7885 47.528C42.0845 46.584 42.7217 45.0186 42.4497 43.4399L40.4738 31.9653C40.3991 31.5307 40.5405 31.0907 40.8605 30.784L49.4923 22.3919ZM37.8364 32.4106L39.8123 43.888C39.9136 44.4667 39.6871 45.0213 39.2098 45.368C38.7271 45.72 38.1244 45.76 37.5991 45.488L27.2312 40.0614C26.6499 39.7574 26.0099 39.6053 25.3725 39.6053C24.7352 39.6053 24.0951 39.7574 23.5138 40.0614L13.1538 45.4827C12.6231 45.7601 12.0178 45.7146 11.5405 45.3626C11.0605 45.0133 10.8337 44.4586 10.935 43.8773L12.9113 32.408C13.1326 31.104 12.7004 29.7786 11.7537 28.8639L3.11113 20.4774C2.74046 20.1174 2.61259 19.6081 2.77259 19.1147C2.93526 18.6214 3.33767 18.2801 3.85234 18.2054L15.8045 16.4774C17.1085 16.288 18.2364 15.472 18.8204 14.2933L23.9991 3.84798C24.5245 2.78665 26.2124 2.78665 26.7378 3.84798L31.9165 14.2907C32.5005 15.4694 33.6284 16.288 34.9324 16.4774L46.8846 18.2054C47.3992 18.2801 47.8043 18.6214 47.9643 19.1147C48.1243 19.6081 47.9965 20.1147 47.6232 20.4774L38.9858 28.8639C38.0471 29.7813 37.6151 31.1066 37.8364 32.4106Z" fill="#F8E1C5"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                y(`div`, {
                                  className: `framer-6np7wl`,
                                  "data-framer-name": `Value Description Container`,
                                  children: [
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                                              },
                                              children: `Unparalleled Service`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`h3`, {
                                            style: {
                                              "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                              "--framer-font-family": `"Red Rose", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                                            },
                                            children: `Unparalleled Service`,
                                          }),
                                        }),
                                        className: `framer-nhr00z`,
                                        "data-framer-name": `Value Title`,
                                        fonts: [`GF;Red Rose-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `13px`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-547c5a6a-9461-4593-9fdb-4708b2ee5b6d, rgb(221, 221, 221))`,
                                              },
                                              children: `Luxury hospitality tailored to perfection for every client`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-547c5a6a-9461-4593-9fdb-4708b2ee5b6d, rgb(221, 221, 221))`,
                                            },
                                            children: `Luxury hospitality tailored to perfection for every client`,
                                          }),
                                        }),
                                        className: `framer-hlxt33`,
                                        "data-framer-name": `Value Details`,
                                        fonts: [`FS;Montserrat-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            y(ga, {
                              animate: qa,
                              className: `framer-ouk267`,
                              "data-framer-appear-id": `ouk267`,
                              "data-framer-name": `Value Item`,
                              initial: Fa,
                              optimized: !0,
                              children: [
                                p(`div`, {
                                  className: `framer-hambji`,
                                  "data-framer-name": `Value Icon`,
                                  children: p(le, {
                                    className: `framer-qnzy35`,
                                    "data-framer-name": `globe-earth`,
                                    fill: `rgba(0,0,0,1)`,
                                    intrinsicHeight: 56,
                                    intrinsicWidth: 57,
                                    svg: `<svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.0233 30.0107C56.0713 29.344 56.1247 28.6773 56.1247 28C56.1247 18.2373 51.0954 9.63736 43.498 4.62402C43.4527 4.59469 43.41 4.56534 43.362 4.54134C40.6153 2.74934 37.5381 1.43203 34.2394 0.693359C34.1888 0.674693 34.1354 0.666654 34.082 0.65332C32.1594 0.234654 30.1674 0 28.1221 0C12.6821 0 0.12207 12.56 0.12207 28C0.12207 43.44 12.6821 56 28.1221 56C30.2714 56 32.3567 55.7333 34.3674 55.2747C34.546 55.2667 34.7113 55.2186 34.8687 55.144C46.3647 52.2826 55.0634 42.3253 56.0127 30.1947C56.0154 30.1333 56.0286 30.072 56.0233 30.0107ZM53.458 28C53.458 28.2747 53.426 28.5386 53.418 28.8106C52.1246 28.9786 50.7647 29.6373 49.826 30.6987C49.6793 30.864 49.5861 30.9094 49.5674 30.912C49.5274 30.912 48.4634 30.84 46.0394 26.3707C44.2207 23.016 45.0127 21.3067 46.0181 19.1414C46.3434 18.4374 46.6688 17.7307 46.9061 16.992C47.4528 15.3734 47.0207 12.7813 46.2767 10.3653C50.7114 14.9306 53.458 21.1467 53.458 28ZM2.79134 28C2.79134 25.68 3.13007 23.44 3.7194 21.304C5.37807 29.7334 11.3779 32.784 14.5513 34.384C15.2499 34.736 16.0846 35.1334 16.21 35.1654C16.4526 36.2054 16.426 36.784 16.3753 37.84C16.3353 38.6987 16.2847 39.7654 16.3647 41.4294C16.5061 44.3414 18.8874 45.584 20.8021 46.584C22.0528 47.2373 23.2367 47.856 23.8927 48.8267C24.3381 49.464 24.6606 51.2826 24.3833 53.0293C12.186 51.208 2.79134 40.6933 2.79134 28ZM27.0366 53.2773C27.354 51.056 27.0101 48.6267 26.0874 47.312C25.0634 45.8 23.4554 44.96 22.034 44.2187C20.154 43.2373 19.09 42.6187 19.026 41.2987C18.9514 39.7547 18.9993 38.76 19.0366 37.9626C19.09 36.8426 19.13 35.9574 18.8047 34.5574C18.5354 33.408 17.3673 32.8187 15.7513 32.0027C11.954 30.088 5.64198 26.888 5.95931 15.7573C10.282 7.95999 18.594 2.66398 28.1247 2.66398C29.5353 2.66398 30.9086 2.80798 32.258 3.03198C31.866 4.13865 30.8047 5.06935 29.7487 5.41602C24.69 7.07468 24.6366 11.5067 24.5993 14.7414C24.5646 17.624 24.3967 18.4933 23.3514 18.7093C22.9834 18.768 21.81 18.1387 21.1807 17.7947C19.8607 17.0773 18.4874 16.3333 17.2048 16.6453C16.1488 16.8933 14.8021 17.9227 14.3861 19.336C14.1807 20.0294 14.042 21.408 15.4046 22.8187C16.5326 23.9867 16.5833 24.544 16.666 25.392C16.722 25.976 16.7913 26.6986 17.1807 27.5946C18.5113 30.5306 22.3486 30.448 25.1406 30.1307C28.066 29.768 28.9513 29.6534 30.722 31.4987C31.41 32.216 31.7886 33.0747 32.1886 33.9814C32.8686 35.5307 33.7193 37.4613 36.3486 37.7653C38.5833 38.0426 40.45 38.7866 41.1034 39.6613C41.322 39.952 41.3914 40.24 41.3301 40.5894C41.1514 41.648 40.0261 42.7174 38.7194 43.9574C36.5834 45.9867 33.9859 48.5014 33.1619 52.8214C31.5326 53.152 29.8499 53.328 28.1273 53.328C27.7566 53.3333 27.3993 53.2933 27.0366 53.2773ZM36.1113 52.024C37.0153 49.2933 38.866 47.5013 40.554 45.896C42.1354 44.392 43.6314 42.9734 43.9567 41.0374C44.1354 39.9707 43.8873 38.944 43.2367 38.072C41.6527 35.9467 38.1194 35.3013 36.6634 35.1226C35.6261 35.0026 35.3166 34.4853 34.626 32.9146C34.1726 31.8853 33.6606 30.7173 32.6419 29.656C29.9433 26.848 27.898 27.104 24.8206 27.488C21.81 27.832 20.058 27.4986 19.6126 26.5146C19.3993 26.0266 19.3621 25.6373 19.3167 25.144C19.2181 24.104 19.0953 22.808 17.3193 20.9707C16.8313 20.4667 16.9113 20.1867 16.938 20.0933C17.0607 19.6667 17.6047 19.2933 17.8101 19.2427C18.1567 19.2027 19.2553 19.784 19.9033 20.1387C21.2153 20.8533 22.5594 21.5947 23.8874 21.3227C27.194 20.64 27.234 17.3867 27.266 14.7734C27.3086 11.1894 27.5514 8.9413 30.5807 7.9493C32.4234 7.34663 34.2687 5.71197 34.874 3.60531C37.3647 4.29597 39.7006 5.34937 41.8206 6.71737C43.1646 8.69337 44.994 14.3147 44.3753 16.152C44.1647 16.8027 43.8793 17.4107 43.5967 18.016C42.49 20.4027 41.234 23.1066 43.6927 27.64C45.834 31.5866 47.4953 33.36 49.25 33.56C49.3487 33.5706 49.4526 33.5787 49.5646 33.5787C50.2046 33.5787 51.034 33.3546 51.8206 32.4666C52.2233 32.0106 52.7221 31.7253 53.1781 31.5627C51.8154 41.16 45.082 49.032 36.1113 52.024Z" fill="#F8E1C5"/>
</svg>
`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                y(`div`, {
                                  className: `framer-pjqv9g`,
                                  "data-framer-name": `Value Description Container`,
                                  children: [
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`h3`, {
                                              style: {
                                                "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                                "--framer-font-family": `"Red Rose", sans-serif`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                                              },
                                              children: `Global Expertise`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`h3`, {
                                            style: {
                                              "--font-selector": `R0Y7UmVkIFJvc2UtNTAw`,
                                              "--framer-font-family": `"Red Rose", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                                            },
                                            children: `Global Expertise`,
                                          }),
                                        }),
                                        className: `framer-1xjsbnb`,
                                        "data-framer-name": `Value Title`,
                                        fonts: [`GF;Red Rose-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          children: p(S, {
                                            children: p(`p`, {
                                              style: {
                                                "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                "--framer-font-size": `13px`,
                                                "--framer-font-variation-axes": `"wght" 300`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-547c5a6a-9461-4593-9fdb-4708b2ee5b6d, rgb(221, 221, 221))`,
                                              },
                                              children: `A fusion of the world’s finest culinary traditions and expertise`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: p(B, {
                                        __fromCanvasComponent: !0,
                                        children: p(S, {
                                          children: p(`p`, {
                                            style: {
                                              "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                              "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                              "--framer-font-variation-axes": `"wght" 300`,
                                              "--framer-line-height": `1.6em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-547c5a6a-9461-4593-9fdb-4708b2ee5b6d, rgb(221, 221, 221))`,
                                            },
                                            children: `A fusion of the world’s finest culinary traditions and expertise`,
                                          }),
                                        }),
                                        className: `framer-p2t8l4`,
                                        "data-framer-name": `Value Details`,
                                        fonts: [`FS;Montserrat-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    y(`div`, {
                      className: `framer-ntlm5a`,
                      "data-framer-name": `Venues`,
                      children: [
                        p(le, {
                          className: `framer-dxrfmr`,
                          "data-framer-name": `Bg Strip`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 231,
                          intrinsicWidth: 1920,
                          svg: `<svg width="1920" height="231" viewBox="0 0 1920 231" fill="none" xmlns="http://www.w3.org/2000/svg">
<g style="mix-blend-mode:plus-darker">
<path d="M0 0H1920V231H0V0Z" fill="#BC8461" fill-opacity="0.1"/>
</g>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                        y(`div`, {
                          className: `framer-2psaca`,
                          children: [
                            y(`div`, {
                              className: `framer-o9fwrs`,
                              "data-framer-name": `Venue Expertise Container`,
                              children: [
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    dZS61v7lZ: {
                                      children: p(S, {
                                        children: p(`h2`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                            "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                            "--framer-font-size": `54px`,
                                            "--framer-text-color": `var(--token-e2fbaae8-635b-49f1-8bd6-85dbe1bd5ca4, rgb(140, 95, 69))`,
                                          },
                                          children: `Venue & Destination Expertise`,
                                        }),
                                      }),
                                    },
                                    hBNTufln9: {
                                      children: p(S, {
                                        children: y(`h2`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                            "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                            "--framer-font-size": `40px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-e6740672-e51a-4a94-8ab3-ba42a8aca3cb, rgb(140, 95, 69))`,
                                          },
                                          children: [
                                            `Venue & `,
                                            p(`span`, {
                                              style: {
                                                "--framer-text-color": `rgb(0, 0, 0)`,
                                              },
                                              children: p(`br`, {}),
                                            }),
                                            `Destination Expertise`,
                                          ],
                                        }),
                                      }),
                                    },
                                    jIFZ85Jgy: {
                                      children: p(S, {
                                        children: p(`h2`, {
                                          style: {
                                            "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                            "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                            "--framer-font-size": `54px`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-e6740672-e51a-4a94-8ab3-ba42a8aca3cb, rgb(140, 95, 69))`,
                                          },
                                          children: `Venue & Destination Expertise`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: p(B, {
                                    __fromCanvasComponent: !0,
                                    children: p(S, {
                                      children: p(`h2`, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `64px`,
                                          "--framer-text-color": `var(--token-e2fbaae8-635b-49f1-8bd6-85dbe1bd5ca4, rgb(140, 95, 69))`,
                                        },
                                        children: `Venue & Destination Expertise`,
                                      }),
                                    }),
                                    className: `framer-125oxwf`,
                                    "data-framer-name": `Venue Expertise Title`,
                                    fonts: [`CUSTOM;Perpetua Regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                p(z, {
                                  breakpoint: b,
                                  overrides: {
                                    hBNTufln9: {
                                      children: p(S, {
                                        children: p(`h5`, {
                                          style: {
                                            "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                            "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                            "--framer-font-size": `15px`,
                                            "--framer-font-variation-axes": `"wght" 400`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-3edca8f2-8946-4631-963e-8cc21b723ced, rgb(85, 85, 85))`,
                                          },
                                          children: `We collaborate with prestigious venues in India and global destinations, offering our clients expert planning, luxury catering and venue bookings for destination weddings and elite events.`,
                                        }),
                                      }),
                                    },
                                    jIFZ85Jgy: {
                                      children: p(S, {
                                        children: p(`h5`, {
                                          style: {
                                            "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                            "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                            "--framer-font-variation-axes": `"wght" 400`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-3edca8f2-8946-4631-963e-8cc21b723ced, rgb(85, 85, 85))`,
                                          },
                                          children: `We collaborate with prestigious venues in India and global destinations, offering our clients expert planning, luxury catering and venue bookings for destination weddings and elite events.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: p(B, {
                                    __fromCanvasComponent: !0,
                                    children: p(S, {
                                      children: p(`h5`, {
                                        style: {
                                          "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                          "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-font-variation-axes": `"wght" 400`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-631f4057-2278-40e0-b6c3-0ff45f0a6edb, rgb(85, 85, 85))`,
                                        },
                                        children: `We collaborate with prestigious venues in India and global destinations, offering our clients expert planning, luxury catering and venue bookings for destination weddings and elite events.`,
                                      }),
                                    }),
                                    className: `framer-1glm5tr`,
                                    "data-framer-name": `Venue Expertise Description`,
                                    fonts: [`FS;Montserrat-variable`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            y(`div`, {
                              className: `framer-3wpq5h`,
                              children: [
                                U() &&
                                  p(N, {
                                    children: p(P, {
                                      className: `framer-4wb2gy-container hidden-13dj5pp`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `XlvOArUUN`,
                                      scopeId: `q2dk3BipV`,
                                      children: p(ke, {
                                        alignment: `center`,
                                        direction: `left`,
                                        fadeOptions: {
                                          fadeAlpha: 0.3,
                                          fadeContent: !0,
                                          fadeInset: 0,
                                          fadeWidth: 25,
                                          overflow: !1,
                                        },
                                        gap: 0,
                                        height: `100%`,
                                        hoverFactor: 0.9,
                                        id: `XlvOArUUN`,
                                        layoutId: `XlvOArUUN`,
                                        padding: 10,
                                        paddingBottom: 10,
                                        paddingLeft: 10,
                                        paddingPerSide: !1,
                                        paddingRight: 10,
                                        paddingTop: 10,
                                        sizingOptions: {
                                          heightType: !0,
                                          widthType: !0,
                                        },
                                        slots: [
                                          y(j.div, {
                                            className: `framer-1xx3yt0`,
                                            "data-framer-name": `Hotel Logos`,
                                            children: [
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 436,
                                                  pixelWidth: 628,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `121.4404px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_628/v1/LgRuFFgMrVpUNXrSln1eqQ1nBI_hand5j.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_628/v1/LgRuFFgMrVpUNXrSln1eqQ1nBI_hand5j.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_628/v1/LgRuFFgMrVpUNXrSln1eqQ1nBI_hand5j.png 628w`,
                                                },
                                                className: `framer-mzzryq`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 436,
                                                  pixelWidth: 624,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `120.5667px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_624/v1/NWozwXWya2cZAWOLtD2572nncgY_ua9fhl.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_624/v1/NWozwXWya2cZAWOLtD2572nncgY_ua9fhl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_624/v1/NWozwXWya2cZAWOLtD2572nncgY_ua9fhl.png 624w`,
                                                },
                                                className: `framer-zxpyu5`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 308,
                                                  pixelWidth: 880,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `170.366px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_880/v1/zVkLzxzY9CwWPyM17MQVk8Oul8_qxy7r6.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_880/v1/zVkLzxzY9CwWPyM17MQVk8Oul8_qxy7r6.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_880/v1/zVkLzxzY9CwWPyM17MQVk8Oul8_qxy7r6.png 880w`,
                                                },
                                                className: `framer-1h1qbm6`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 440,
                                                  pixelWidth: 624,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `120.5667px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_624/v1/e0gyEAJP0ZH3Lk7jrWLZHzsgfBQ_p5frio.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_624/v1/e0gyEAJP0ZH3Lk7jrWLZHzsgfBQ_p5frio.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_624/v1/e0gyEAJP0ZH3Lk7jrWLZHzsgfBQ_p5frio.png 624w`,
                                                },
                                                className: `framer-155hsh2`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 192,
                                                  pixelWidth: 604,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `116.1983px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_604/v1/vO68x8hypSiEKAfIG4xaZA7Eg_q8eclp.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_604/v1/vO68x8hypSiEKAfIG4xaZA7Eg_q8eclp.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_604/v1/vO68x8hypSiEKAfIG4xaZA7Eg_q8eclp.png 604w`,
                                                },
                                                className: `framer-1vn3e9w`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 0.8,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 436,
                                                  pixelWidth: 784,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `152.0189px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_784/v1/VjbJ85FHKz610gkSGbcu7THT10_j4xf6v.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_784/v1/VjbJ85FHKz610gkSGbcu7THT10_j4xf6v.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_784/v1/VjbJ85FHKz610gkSGbcu7THT10_j4xf6v.png 784w`,
                                                },
                                                className: `framer-1bio6jr`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 0.53,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 436,
                                                  pixelWidth: 572,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `110.0826px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_572/v1/aUlCuemw7E24C0kBpBx3wxy4saI_v01uxz.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_572/v1/aUlCuemw7E24C0kBpBx3wxy4saI_v01uxz.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_572/v1/aUlCuemw7E24C0kBpBx3wxy4saI_v01uxz.png 572w`,
                                                },
                                                className: `framer-lfmfwv`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1336,
                                                  pixelWidth: 3784,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `202.6919px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3784/v1/vSn4TqFj80MzaKeVV3I7HTaiMM_de22xq.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3784/v1/vSn4TqFj80MzaKeVV3I7HTaiMM_de22xq.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3784/v1/vSn4TqFj80MzaKeVV3I7HTaiMM_de22xq.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3784/v1/vSn4TqFj80MzaKeVV3I7HTaiMM_de22xq.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3784/v1/vSn4TqFj80MzaKeVV3I7HTaiMM_de22xq.png 3784w`,
                                                },
                                                className: `framer-1l46e4l`,
                                                "data-framer-name": `image 1610`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 908,
                                                  pixelWidth: 3316,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `224.5336px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3316/v1/Ce4nVgILNfkzPbWDVL7nUNlRRo_u9r1uh.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3316/v1/Ce4nVgILNfkzPbWDVL7nUNlRRo_u9r1uh.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3316/v1/Ce4nVgILNfkzPbWDVL7nUNlRRo_u9r1uh.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3316/v1/Ce4nVgILNfkzPbWDVL7nUNlRRo_u9r1uh.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3316/v1/Ce4nVgILNfkzPbWDVL7nUNlRRo_u9r1uh.png 3316w`,
                                                },
                                                className: `framer-1c99ep`,
                                                "data-framer-name": `image 1611`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1140,
                                                  pixelWidth: 2824,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `189.5868px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2824/v1/ED604P38z5kHbofU53F8ZRMvU84_rlaj4j.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2824/v1/ED604P38z5kHbofU53F8ZRMvU84_rlaj4j.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2824/v1/ED604P38z5kHbofU53F8ZRMvU84_rlaj4j.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2824/v1/ED604P38z5kHbofU53F8ZRMvU84_rlaj4j.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2824/v1/ED604P38z5kHbofU53F8ZRMvU84_rlaj4j.png 2824w`,
                                                },
                                                className: `framer-gwbaw1`,
                                                "data-framer-name": `image 1612`,
                                              }),
                                            ],
                                          }),
                                        ],
                                        speed: 30,
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                We() &&
                                  p(N, {
                                    children: p(P, {
                                      className: `framer-1fjugep-container hidden-1i8942i hidden-vdx7iz hidden-1vl5jtp hidden-jeceav`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `zIt42QMHe`,
                                      scopeId: `q2dk3BipV`,
                                      children: p(ke, {
                                        alignment: `center`,
                                        direction: `right`,
                                        fadeOptions: {
                                          fadeAlpha: 0,
                                          fadeContent: !1,
                                          fadeInset: 0,
                                          fadeWidth: 0,
                                          overflow: !1,
                                        },
                                        gap: 0,
                                        height: `100%`,
                                        hoverFactor: 0.9,
                                        id: `zIt42QMHe`,
                                        layoutId: `zIt42QMHe`,
                                        padding: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 0,
                                        paddingPerSide: !1,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        sizingOptions: {
                                          heightType: !0,
                                          widthType: !0,
                                        },
                                        slots: [
                                          y(j.div, {
                                            className: `framer-zt8ep9`,
                                            "data-framer-name": `Hotel Logos 2`,
                                            children: [
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  pixelHeight: 920,
                                                  pixelWidth: 920,
                                                  sizes: `83.9979px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_920/v1/venzXoX0k6xEAAzUtmN7cPngYEM_vhdcoy.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_920/v1/venzXoX0k6xEAAzUtmN7cPngYEM_vhdcoy.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_920/v1/venzXoX0k6xEAAzUtmN7cPngYEM_vhdcoy.png 920w`,
                                                },
                                                className: `framer-jnys8g`,
                                                "data-framer-name": `image 1602`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1360,
                                                  pixelWidth: 2864,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `98.6063px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2864/v1/GoUQhScmubFdAgc2vRqNmnxiS4_ujdwlp.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2864/v1/GoUQhScmubFdAgc2vRqNmnxiS4_ujdwlp.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2864/v1/GoUQhScmubFdAgc2vRqNmnxiS4_ujdwlp.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2864/v1/GoUQhScmubFdAgc2vRqNmnxiS4_ujdwlp.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2864/v1/GoUQhScmubFdAgc2vRqNmnxiS4_ujdwlp.png 2864w`,
                                                },
                                                className: `framer-1mq0r8t`,
                                                "data-framer-name": `image 1599`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 969,
                                                  pixelWidth: 3600,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `163.1264px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3600/v1/jvpqV5JRFwRkrJnYpcJBrhHeQpo_f2oeag.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3600/v1/jvpqV5JRFwRkrJnYpcJBrhHeQpo_f2oeag.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3600/v1/jvpqV5JRFwRkrJnYpcJBrhHeQpo_f2oeag.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3600/v1/jvpqV5JRFwRkrJnYpcJBrhHeQpo_f2oeag.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3600/v1/jvpqV5JRFwRkrJnYpcJBrhHeQpo_f2oeag.png 3600w`,
                                                },
                                                className: `framer-117t3wh`,
                                                "data-framer-name": `image 1601`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  pixelHeight: 558,
                                                  pixelWidth: 1200,
                                                  sizes: `129.0403px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/XKLrPAeaT62vLncBUrM2jvIJmJ8_y5mpms.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/XKLrPAeaT62vLncBUrM2jvIJmJ8_y5mpms.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/XKLrPAeaT62vLncBUrM2jvIJmJ8_y5mpms.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/XKLrPAeaT62vLncBUrM2jvIJmJ8_y5mpms.png 1200w`,
                                                },
                                                className: `framer-18f51j`,
                                                "data-framer-name": `image 1603`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1432,
                                                  pixelWidth: 2048,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `79px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/4RTbLLPtMglzbgMtL4otOUyng4_jwvnev.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/4RTbLLPtMglzbgMtL4otOUyng4_jwvnev.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/4RTbLLPtMglzbgMtL4otOUyng4_jwvnev.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/4RTbLLPtMglzbgMtL4otOUyng4_jwvnev.png 2048w`,
                                                },
                                                className: `framer-2neme3`,
                                                "data-framer-name": `589a46f65aa6293a4aac48b4 1`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1264,
                                                  pixelWidth: 2732,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `110px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2732/v1/oeVt9s1VlfW9OtNP81eumHU70A_akkpss.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2732/v1/oeVt9s1VlfW9OtNP81eumHU70A_akkpss.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2732/v1/oeVt9s1VlfW9OtNP81eumHU70A_akkpss.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2732/v1/oeVt9s1VlfW9OtNP81eumHU70A_akkpss.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2732/v1/oeVt9s1VlfW9OtNP81eumHU70A_akkpss.png 2732w`,
                                                },
                                                className: `framer-gregrn`,
                                                "data-framer-name": `image 1604`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1208,
                                                  pixelWidth: 3088,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `105.9104px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3088/v1/1BaiqXhCRc337UOUiR6rObHVc_w2lk7l.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3088/v1/1BaiqXhCRc337UOUiR6rObHVc_w2lk7l.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3088/v1/1BaiqXhCRc337UOUiR6rObHVc_w2lk7l.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3088/v1/1BaiqXhCRc337UOUiR6rObHVc_w2lk7l.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3088/v1/1BaiqXhCRc337UOUiR6rObHVc_w2lk7l.png 3088w`,
                                                },
                                                className: `framer-1ncu2ac`,
                                                "data-framer-name": `image 1606`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 888,
                                                  pixelWidth: 3748,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `127.8229px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3748/v1/QCxDgxYoXmbceCdsgOLrxVDixM_zz9nxz.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3748/v1/QCxDgxYoXmbceCdsgOLrxVDixM_zz9nxz.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3748/v1/QCxDgxYoXmbceCdsgOLrxVDixM_zz9nxz.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3748/v1/QCxDgxYoXmbceCdsgOLrxVDixM_zz9nxz.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3748/v1/QCxDgxYoXmbceCdsgOLrxVDixM_zz9nxz.png 3748w`,
                                                },
                                                className: `framer-mdx3ky`,
                                                "data-framer-name": `image 1607`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1536,
                                                  pixelWidth: 3976,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `143px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3976/v1/JV2w1Ew3PGnMQvoh6gob10Xls_cnd73u.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3976/v1/JV2w1Ew3PGnMQvoh6gob10Xls_cnd73u.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3976/v1/JV2w1Ew3PGnMQvoh6gob10Xls_cnd73u.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3976/v1/JV2w1Ew3PGnMQvoh6gob10Xls_cnd73u.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3976/v1/JV2w1Ew3PGnMQvoh6gob10Xls_cnd73u.png 3976w`,
                                                },
                                                className: `framer-2isjzq`,
                                                "data-framer-name": `image 1608`,
                                              }),
                                            ],
                                          }),
                                        ],
                                        speed: 30,
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                We() &&
                                  p(N, {
                                    children: p(P, {
                                      className: `framer-1llos2c-container hidden-1i8942i hidden-vdx7iz hidden-1vl5jtp hidden-jeceav`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `DZJNdCIM3`,
                                      scopeId: `q2dk3BipV`,
                                      children: p(ke, {
                                        alignment: `center`,
                                        direction: `left`,
                                        fadeOptions: {
                                          fadeAlpha: 0,
                                          fadeContent: !1,
                                          fadeInset: 0,
                                          fadeWidth: 0,
                                          overflow: !1,
                                        },
                                        gap: 0,
                                        height: `100%`,
                                        hoverFactor: 0.9,
                                        id: `DZJNdCIM3`,
                                        layoutId: `DZJNdCIM3`,
                                        padding: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 0,
                                        paddingPerSide: !1,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        sizingOptions: {
                                          heightType: !0,
                                          widthType: !0,
                                        },
                                        slots: [
                                          y(j.div, {
                                            className: `framer-1vlkwd`,
                                            "data-framer-name": `Hotel Logos`,
                                            children: [
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 436,
                                                  pixelWidth: 628,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `102.2583px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_628/v1/LgRuFFgMrVpUNXrSln1eqQ1nBI_hand5j.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_628/v1/LgRuFFgMrVpUNXrSln1eqQ1nBI_hand5j.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_628/v1/LgRuFFgMrVpUNXrSln1eqQ1nBI_hand5j.png 628w`,
                                                },
                                                className: `framer-11pmkm9`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 436,
                                                  pixelWidth: 624,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `117px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_624/v1/NWozwXWya2cZAWOLtD2572nncgY_ua9fhl.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_624/v1/NWozwXWya2cZAWOLtD2572nncgY_ua9fhl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_624/v1/NWozwXWya2cZAWOLtD2572nncgY_ua9fhl.png 624w`,
                                                },
                                                className: `framer-x6s4l8`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 308,
                                                  pixelWidth: 880,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `143.6486px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_880/v1/zVkLzxzY9CwWPyM17MQVk8Oul8_qxy7r6.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_880/v1/zVkLzxzY9CwWPyM17MQVk8Oul8_qxy7r6.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_880/v1/zVkLzxzY9CwWPyM17MQVk8Oul8_qxy7r6.png 880w`,
                                                },
                                                className: `framer-1gd06nw`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 440,
                                                  pixelWidth: 624,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `108.3451px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_624/v1/e0gyEAJP0ZH3Lk7jrWLZHzsgfBQ_p5frio.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_624/v1/e0gyEAJP0ZH3Lk7jrWLZHzsgfBQ_p5frio.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_624/v1/e0gyEAJP0ZH3Lk7jrWLZHzsgfBQ_p5frio.png 624w`,
                                                },
                                                className: `framer-y9x8pc`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 192,
                                                  pixelWidth: 604,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `98.6063px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_604/v1/vO68x8hypSiEKAfIG4xaZA7Eg_q8eclp.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_604/v1/vO68x8hypSiEKAfIG4xaZA7Eg_q8eclp.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_604/v1/vO68x8hypSiEKAfIG4xaZA7Eg_q8eclp.png 604w`,
                                                },
                                                className: `framer-1swl92u`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 0.8,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 436,
                                                  pixelWidth: 784,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `138.7792px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_784/v1/VjbJ85FHKz610gkSGbcu7THT10_j4xf6v.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_784/v1/VjbJ85FHKz610gkSGbcu7THT10_j4xf6v.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_784/v1/VjbJ85FHKz610gkSGbcu7THT10_j4xf6v.png 784w`,
                                                },
                                                className: `framer-1dft76f`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(Z, {
                                                __framer__animate: {
                                                  transition: $,
                                                },
                                                __framer__animateOnce: !1,
                                                __framer__enter: Ja,
                                                __framer__exit: Ya,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0.5,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 0.53,
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 436,
                                                  pixelWidth: 572,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `92.5194px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_572/v1/aUlCuemw7E24C0kBpBx3wxy4saI_v01uxz.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_572/v1/aUlCuemw7E24C0kBpBx3wxy4saI_v01uxz.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_572/v1/aUlCuemw7E24C0kBpBx3wxy4saI_v01uxz.png 572w`,
                                                },
                                                className: `framer-1u7uv4h`,
                                                "data-framer-name": `Gallery Image`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1336,
                                                  pixelWidth: 3784,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `170.4306px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3784/v1/vSn4TqFj80MzaKeVV3I7HTaiMM_de22xq.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3784/v1/vSn4TqFj80MzaKeVV3I7HTaiMM_de22xq.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3784/v1/vSn4TqFj80MzaKeVV3I7HTaiMM_de22xq.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3784/v1/vSn4TqFj80MzaKeVV3I7HTaiMM_de22xq.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3784/v1/vSn4TqFj80MzaKeVV3I7HTaiMM_de22xq.png 3784w`,
                                                },
                                                className: `framer-1w1okbl`,
                                                "data-framer-name": `image 1610`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 908,
                                                  pixelWidth: 3316,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `189.9083px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3316/v1/Ce4nVgILNfkzPbWDVL7nUNlRRo_u9r1uh.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3316/v1/Ce4nVgILNfkzPbWDVL7nUNlRRo_u9r1uh.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3316/v1/Ce4nVgILNfkzPbWDVL7nUNlRRo_u9r1uh.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3316/v1/Ce4nVgILNfkzPbWDVL7nUNlRRo_u9r1uh.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3316/v1/Ce4nVgILNfkzPbWDVL7nUNlRRo_u9r1uh.png 3316w`,
                                                },
                                                className: `framer-1yixkvx`,
                                                "data-framer-name": `image 1611`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1140,
                                                  pixelWidth: 2824,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `160.6917px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2824/v1/ED604P38z5kHbofU53F8ZRMvU84_rlaj4j.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2824/v1/ED604P38z5kHbofU53F8ZRMvU84_rlaj4j.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2824/v1/ED604P38z5kHbofU53F8ZRMvU84_rlaj4j.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2824/v1/ED604P38z5kHbofU53F8ZRMvU84_rlaj4j.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2824/v1/ED604P38z5kHbofU53F8ZRMvU84_rlaj4j.png 2824w`,
                                                },
                                                className: `framer-1q2fakz`,
                                                "data-framer-name": `image 1612`,
                                              }),
                                            ],
                                          }),
                                        ],
                                        speed: 30,
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                U() &&
                                  p(N, {
                                    children: p(P, {
                                      className: `framer-mkwf10-container hidden-13dj5pp`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `GuYhxRfjI`,
                                      scopeId: `q2dk3BipV`,
                                      children: p(ke, {
                                        alignment: `center`,
                                        direction: `right`,
                                        fadeOptions: {
                                          fadeAlpha: 0.3,
                                          fadeContent: !0,
                                          fadeInset: 0,
                                          fadeWidth: 25,
                                          overflow: !1,
                                        },
                                        gap: 0,
                                        height: `100%`,
                                        hoverFactor: 0.9,
                                        id: `GuYhxRfjI`,
                                        layoutId: `GuYhxRfjI`,
                                        padding: 10,
                                        paddingBottom: 10,
                                        paddingLeft: 10,
                                        paddingPerSide: !1,
                                        paddingRight: 10,
                                        paddingTop: 10,
                                        sizingOptions: {
                                          heightType: !0,
                                          widthType: !0,
                                        },
                                        slots: [
                                          y(j.div, {
                                            className: `framer-x703aq`,
                                            "data-framer-name": `Hotel Logos 2`,
                                            children: [
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  pixelHeight: 920,
                                                  pixelWidth: 920,
                                                  sizes: `93.4829px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_920/v1/venzXoX0k6xEAAzUtmN7cPngYEM_vhdcoy.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_920/v1/venzXoX0k6xEAAzUtmN7cPngYEM_vhdcoy.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_920/v1/venzXoX0k6xEAAzUtmN7cPngYEM_vhdcoy.png 920w`,
                                                },
                                                className: `framer-u839zp`,
                                                "data-framer-name": `image 1602`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1360,
                                                  pixelWidth: 2864,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `115.3247px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2864/v1/GoUQhScmubFdAgc2vRqNmnxiS4_ujdwlp.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2864/v1/GoUQhScmubFdAgc2vRqNmnxiS4_ujdwlp.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2864/v1/GoUQhScmubFdAgc2vRqNmnxiS4_ujdwlp.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2864/v1/GoUQhScmubFdAgc2vRqNmnxiS4_ujdwlp.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2864/v1/GoUQhScmubFdAgc2vRqNmnxiS4_ujdwlp.png 2864w`,
                                                },
                                                className: `framer-19ynuzt`,
                                                "data-framer-name": `image 1599`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 969,
                                                  pixelWidth: 3600,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `193.9551px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3600/v1/jvpqV5JRFwRkrJnYpcJBrhHeQpo_f2oeag.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3600/v1/jvpqV5JRFwRkrJnYpcJBrhHeQpo_f2oeag.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3600/v1/jvpqV5JRFwRkrJnYpcJBrhHeQpo_f2oeag.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3600/v1/jvpqV5JRFwRkrJnYpcJBrhHeQpo_f2oeag.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3600/v1/jvpqV5JRFwRkrJnYpcJBrhHeQpo_f2oeag.png 3600w`,
                                                },
                                                className: `framer-zasun6`,
                                                "data-framer-name": `image 1601`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  pixelHeight: 558,
                                                  pixelWidth: 1200,
                                                  sizes: `139.7875px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/XKLrPAeaT62vLncBUrM2jvIJmJ8_y5mpms.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/XKLrPAeaT62vLncBUrM2jvIJmJ8_y5mpms.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/XKLrPAeaT62vLncBUrM2jvIJmJ8_y5mpms.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1200/v1/XKLrPAeaT62vLncBUrM2jvIJmJ8_y5mpms.png 1200w`,
                                                },
                                                className: `framer-13jc7m2`,
                                                "data-framer-name": `image 1603`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1432,
                                                  pixelWidth: 2048,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `82.9988px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/4RTbLLPtMglzbgMtL4otOUyng4_jwvnev.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/4RTbLLPtMglzbgMtL4otOUyng4_jwvnev.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/4RTbLLPtMglzbgMtL4otOUyng4_jwvnev.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2048/v1/4RTbLLPtMglzbgMtL4otOUyng4_jwvnev.png 2048w`,
                                                },
                                                className: `framer-z5snf9`,
                                                "data-framer-name": `589a46f65aa6293a4aac48b4 1`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1264,
                                                  pixelWidth: 2732,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `110.9563px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2732/v1/oeVt9s1VlfW9OtNP81eumHU70A_akkpss.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2732/v1/oeVt9s1VlfW9OtNP81eumHU70A_akkpss.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2732/v1/oeVt9s1VlfW9OtNP81eumHU70A_akkpss.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2732/v1/oeVt9s1VlfW9OtNP81eumHU70A_akkpss.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2732/v1/oeVt9s1VlfW9OtNP81eumHU70A_akkpss.png 2732w`,
                                                },
                                                className: `framer-1vuu6t`,
                                                "data-framer-name": `image 1604`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1208,
                                                  pixelWidth: 3088,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `124.0614px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3088/v1/1BaiqXhCRc337UOUiR6rObHVc_w2lk7l.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3088/v1/1BaiqXhCRc337UOUiR6rObHVc_w2lk7l.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3088/v1/1BaiqXhCRc337UOUiR6rObHVc_w2lk7l.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3088/v1/1BaiqXhCRc337UOUiR6rObHVc_w2lk7l.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3088/v1/1BaiqXhCRc337UOUiR6rObHVc_w2lk7l.png 3088w`,
                                                },
                                                className: `framer-1aybyo2`,
                                                "data-framer-name": `image 1606`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 888,
                                                  pixelWidth: 3748,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `152.0189px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3748/v1/QCxDgxYoXmbceCdsgOLrxVDixM_zz9nxz.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3748/v1/QCxDgxYoXmbceCdsgOLrxVDixM_zz9nxz.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3748/v1/QCxDgxYoXmbceCdsgOLrxVDixM_zz9nxz.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3748/v1/QCxDgxYoXmbceCdsgOLrxVDixM_zz9nxz.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3748/v1/QCxDgxYoXmbceCdsgOLrxVDixM_zz9nxz.png 3748w`,
                                                },
                                                className: `framer-1pjg8k1`,
                                                "data-framer-name": `image 1607`,
                                              }),
                                              p(L, {
                                                background: {
                                                  alt: ``,
                                                  fit: `stretch`,
                                                  pixelHeight: 1536,
                                                  pixelWidth: 3976,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `159.8819px`,
                                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3976/v1/JV2w1Ew3PGnMQvoh6gob10Xls_cnd73u.png`,
                                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3976/v1/JV2w1Ew3PGnMQvoh6gob10Xls_cnd73u.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3976/v1/JV2w1Ew3PGnMQvoh6gob10Xls_cnd73u.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3976/v1/JV2w1Ew3PGnMQvoh6gob10Xls_cnd73u.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3976/v1/JV2w1Ew3PGnMQvoh6gob10Xls_cnd73u.png 3976w`,
                                                },
                                                className: `framer-12b3krn`,
                                                "data-framer-name": `image 1608`,
                                              }),
                                            ],
                                          }),
                                        ],
                                        speed: 30,
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
                          ],
                        }),
                        k() &&
                          p(z, {
                            breakpoint: b,
                            overrides: {
                              dZS61v7lZ: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  loading: W((l?.y || 0) + 0 + 11215 + 160),
                                  pixelHeight: 3108,
                                  pixelWidth: 2976,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `calc(${l?.width || `100vw`} * 0.38)`,
                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2976/v1/YGeuI6uZKvjpmrVvgFsfLQ81X4_gptdps.png`,
                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2976/v1/YGeuI6uZKvjpmrVvgFsfLQ81X4_gptdps.png 980w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2976/v1/YGeuI6uZKvjpmrVvgFsfLQ81X4_gptdps.png 1961w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2976/v1/YGeuI6uZKvjpmrVvgFsfLQ81X4_gptdps.png 2976w`,
                                },
                              },
                              LiSfdOU15: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  loading: W((l?.y || 0) + 0 + 11476.6 + 200),
                                  pixelHeight: 3108,
                                  pixelWidth: 2976,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `calc(${l?.width || `100vw`} * 0.3573)`,
                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2976/v1/YGeuI6uZKvjpmrVvgFsfLQ81X4_gptdps.png`,
                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2976/v1/YGeuI6uZKvjpmrVvgFsfLQ81X4_gptdps.png 980w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2976/v1/YGeuI6uZKvjpmrVvgFsfLQ81X4_gptdps.png 1961w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2976/v1/YGeuI6uZKvjpmrVvgFsfLQ81X4_gptdps.png 2976w`,
                                },
                              },
                            },
                            children: p(L, {
                              background: {
                                alt: ``,
                                fit: `fit`,
                                loading: W((l?.y || 0) + 0 + 11549.6 + 200),
                                pixelHeight: 3108,
                                pixelWidth: 2976,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `calc(${l?.width || `100vw`} * 0.3573)`,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2976/v1/YGeuI6uZKvjpmrVvgFsfLQ81X4_gptdps.png`,
                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2976/v1/YGeuI6uZKvjpmrVvgFsfLQ81X4_gptdps.png 980w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2976/v1/YGeuI6uZKvjpmrVvgFsfLQ81X4_gptdps.png 1961w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_2976/v1/YGeuI6uZKvjpmrVvgFsfLQ81X4_gptdps.png 2976w`,
                              },
                              className: `framer-1ui92ix hidden-jeceav hidden-13dj5pp`,
                              "data-framer-name": `image`,
                              children: p(le, {
                                className: `framer-en0rrm`,
                                "data-framer-name": `Subtract`,
                                opacity: 1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 0.999 765"><path d="M 0.521 765 L 0.999 765 L 0.999 739.335 L 0.521 739.335 C 0.252 739.335 0.035 579.575 0.035 382.5 C 0.035 185.425 0.252 25.665 0.521 25.665 L 0.999 25.665 L 0.999 0 L 0.521 0 C 0.233 0 0 171.251 0 382.5 C 0 593.749 0.233 765 0.521 765 Z" fill="rgba(255,255,255,0.5)"></path></svg>`,
                                svgContentId: 8598331652,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                      ],
                    }),
                    y(`div`, {
                      className: `framer-p0df82`,
                      children: [
                        y(`div`, {
                          className: `framer-d1mn6`,
                          "data-framer-name": `Testimonials`,
                          children: [
                            p(`div`, {
                              className: `framer-f2jm8v`,
                              "data-framer-name": `Header`,
                              children: p(z, {
                                breakpoint: b,
                                overrides: {
                                  dZS61v7lZ: {
                                    children: p(S, {
                                      children: y(`h2`, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `54px`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-e2fbaae8-635b-49f1-8bd6-85dbe1bd5ca4, rgb(140, 95, 69))`,
                                        },
                                        children: [
                                          `Take A Look At What Our `,
                                          p(`span`, {
                                            style: {
                                              "--framer-text-color": `rgb(0, 0, 0)`,
                                            },
                                            children: p(`br`, {}),
                                          }),
                                          `Clients Say About Us`,
                                        ],
                                      }),
                                    }),
                                  },
                                  hBNTufln9: {
                                    children: p(S, {
                                      children: y(`h2`, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `40px`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-e6740672-e51a-4a94-8ab3-ba42a8aca3cb, rgb(140, 95, 69))`,
                                        },
                                        children: [
                                          `Take A Look At `,
                                          p(`span`, {
                                            style: {
                                              "--framer-text-color": `rgb(0, 0, 0)`,
                                            },
                                            children: p(`br`, {}),
                                          }),
                                          `What Our Clients Say About Us`,
                                        ],
                                      }),
                                    }),
                                  },
                                  jIFZ85Jgy: {
                                    children: p(S, {
                                      children: y(`h2`, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `48px`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-e2fbaae8-635b-49f1-8bd6-85dbe1bd5ca4, rgb(140, 95, 69))`,
                                        },
                                        children: [
                                          `Take A Look At What Our `,
                                          p(`span`, {
                                            style: {
                                              "--framer-text-color": `rgb(0, 0, 0)`,
                                            },
                                            children: p(`br`, {}),
                                          }),
                                          `Clients Say About Us`,
                                        ],
                                      }),
                                    }),
                                  },
                                  LiSfdOU15: {
                                    children: p(S, {
                                      children: y(`h2`, {
                                        style: {
                                          "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                          "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                          "--framer-font-size": `64px`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-e6740672-e51a-4a94-8ab3-ba42a8aca3cb, rgb(140, 95, 69))`,
                                        },
                                        children: [
                                          `Take A Look At What Our`,
                                          p(`span`, {
                                            style: {
                                              "--framer-text-color": `rgb(0, 0, 0)`,
                                            },
                                            children: p(`br`, {}),
                                          }),
                                          `Clients Say About Us`,
                                        ],
                                      }),
                                    }),
                                  },
                                },
                                children: p(B, {
                                  __fromCanvasComponent: !0,
                                  children: p(S, {
                                    children: y(`h2`, {
                                      style: {
                                        "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                        "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                        "--framer-font-size": `64px`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-e2fbaae8-635b-49f1-8bd6-85dbe1bd5ca4, rgb(140, 95, 69))`,
                                      },
                                      children: [
                                        `Take A Look At What Our `,
                                        p(`span`, {
                                          style: {
                                            "--framer-text-color": `rgb(0, 0, 0)`,
                                          },
                                          children: p(`br`, {}),
                                        }),
                                        `Clients Say About Us`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-znazxj`,
                                  "data-framer-name": `Testimonials Title`,
                                  fonts: [`CUSTOM;Perpetua Regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            y(`div`, {
                              className: `framer-1c8o3uh`,
                              children: [
                                p(`div`, {
                                  className: `framer-2lkz7b`,
                                  children: p(`div`, {
                                    className: `framer-vis24p`,
                                    "data-framer-name": `Elipse top`,
                                  }),
                                }),
                                p(N, {
                                  children: p(P, {
                                    className: `framer-15urluc-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `plILnb2Sm`,
                                    scopeId: `q2dk3BipV`,
                                    children: p(z, {
                                      breakpoint: b,
                                      overrides: {
                                        hBNTufln9: {
                                          intervalControl: 4,
                                          itemAmount: 1,
                                        },
                                        jIFZ85Jgy: {
                                          effectsOptions: {
                                            effectsHover: !1,
                                            effectsOpacity: 1,
                                            effectsPerspective: 1200,
                                            effectsRotate: 0,
                                            effectsScale: 1,
                                            playOffscreen: !1,
                                          },
                                          itemAmount: 2,
                                          startFrom: 1,
                                        },
                                      },
                                      children: p(X, {
                                        alignment: `center`,
                                        arrowOptions: {
                                          arrowFill: `rgba(0, 0, 0, 0.2)`,
                                          arrowGap: 10,
                                          arrowPadding: 20,
                                          arrowPaddingBottom: 0,
                                          arrowPaddingLeft: 0,
                                          arrowPaddingRight: 0,
                                          arrowPaddingTop: 0,
                                          arrowPosition: `auto`,
                                          arrowRadius: 40,
                                          arrowShouldFadeIn: !1,
                                          arrowShouldSpace: !0,
                                          arrowSize: 40,
                                          showMouseControls: !1,
                                        },
                                        autoPlayControl: !0,
                                        borderRadius: 0,
                                        direction: `left`,
                                        dragControl: !0,
                                        effectsOptions: {
                                          effectsHover: !1,
                                          effectsOpacity: 0.9,
                                          effectsPerspective: 1200,
                                          effectsRotate: 0,
                                          effectsScale: 1,
                                          playOffscreen: !1,
                                        },
                                        fadeOptions: {
                                          fadeAlpha: 0,
                                          fadeContent: !1,
                                          fadeInset: 0,
                                          fadeWidth: 25,
                                          overflow: !1,
                                        },
                                        gap: 2,
                                        height: `100%`,
                                        id: `plILnb2Sm`,
                                        intervalControl: 3,
                                        itemAmount: 3,
                                        layoutId: `plILnb2Sm`,
                                        padding: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 0,
                                        paddingPerSide: !1,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        progressOptions: {
                                          dotsActiveOpacity: 1,
                                          dotsBackground: `rgba(0, 0, 0, 0.2)`,
                                          dotsBlur: 0,
                                          dotsFill: `rgb(255, 255, 255)`,
                                          dotsGap: 10,
                                          dotsInset: 10,
                                          dotSize: 10,
                                          dotsOpacity: 0.5,
                                          dotsPadding: 10,
                                          dotsRadius: 50,
                                          showProgressDots: !1,
                                        },
                                        slots: [
                                          p(N, {
                                            height: 620,
                                            width: `636px`,
                                            children: p(P, {
                                              className: `framer-hfiobk-container`,
                                              inComponentSlot: !0,
                                              isModuleExternal: !0,
                                              nodeId: `TiULX50IF`,
                                              rendersWithMotion: !0,
                                              scopeId: `q2dk3BipV`,
                                              children: p(Zr, {
                                                adoyeSvgI: `"Shafeeq didn’t just cater our wedding— his team made every guest feel like family. Their warmth, attention to detail, and exquisite cuisine created an unforgettable experience. We couldn’t have asked for more!"`,
                                                height: `100%`,
                                                id: `TiULX50IF`,
                                                layoutId: `TiULX50IF`,
                                                mwd1PhJAI: ` `,
                                                style: { width: `100%` },
                                                variant: `wFK9ue_9d`,
                                                width: `100%`,
                                                zuF80UG9A: `– Rohit & Priya Mehta`,
                                              }),
                                            }),
                                          }),
                                          p(N, {
                                            height: 620,
                                            width: `636px`,
                                            children: p(P, {
                                              className: `framer-pt03c8-container`,
                                              inComponentSlot: !0,
                                              isModuleExternal: !0,
                                              nodeId: `cM_DsWfst`,
                                              rendersWithMotion: !0,
                                              scopeId: `q2dk3BipV`,
                                              children: p(Zr, {
                                                adoyeSvgI: `"It’s not just about extraordinary food; it’s about heartfelt hospitality. Shahi Caterers’s team ensured every guest felt valued and celebrated, making our wedding a beautiful blend of warmth, love, and luxury."`,
                                                height: `100%`,
                                                id: `cM_DsWfst`,
                                                layoutId: `cM_DsWfst`,
                                                mwd1PhJAI: ` `,
                                                style: { width: `100%` },
                                                variant: `wFK9ue_9d`,
                                                width: `100%`,
                                                zuF80UG9A: `– Tanya & Karan Bansal`,
                                              }),
                                            }),
                                          }),
                                          p(N, {
                                            height: 620,
                                            width: `636px`,
                                            children: p(P, {
                                              className: `framer-v74jpv-container`,
                                              inComponentSlot: !0,
                                              isModuleExternal: !0,
                                              nodeId: `ee8sa_c2z`,
                                              rendersWithMotion: !0,
                                              scopeId: `q2dk3BipV`,
                                              children: p(Zr, {
                                                adoyeSvgI: `"From the moment we connected with Shafeeq, we knew we were in good hands. His team made our guests feel like royalty while treating them with the warmth of family. It was an experience beyond catering—it was pure hospitality at its finest!"`,
                                                height: `100%`,
                                                id: `ee8sa_c2z`,
                                                layoutId: `ee8sa_c2z`,
                                                mwd1PhJAI: ` `,
                                                style: { width: `100%` },
                                                variant: `wFK9ue_9d`,
                                                width: `100%`,
                                                zuF80UG9A: `– Ananya & Pankaj Aggarwal`,
                                              }),
                                            }),
                                          }),
                                          p(N, {
                                            height: 620,
                                            width: `636px`,
                                            children: p(P, {
                                              className: `framer-15zm1j9-container`,
                                              inComponentSlot: !0,
                                              isModuleExternal: !0,
                                              nodeId: `lxkDVe9Xj`,
                                              rendersWithMotion: !0,
                                              scopeId: `q2dk3BipV`,
                                              children: p(Zr, {
                                                adoyeSvgI: `Shahi Caterers transformed our celebration into a royal affair—not just with their stunning cuisine but with their hospitality. The authentic Indian sweets were an added delight!`,
                                                height: `100%`,
                                                id: `lxkDVe9Xj`,
                                                layoutId: `lxkDVe9Xj`,
                                                mwd1PhJAI: ` `,
                                                style: { width: `100%` },
                                                variant: `wFK9ue_9d`,
                                                width: `100%`,
                                                zuF80UG9A: `– Natasha & Vikram Malhotra`,
                                              }),
                                            }),
                                          }),
                                          p(N, {
                                            height: 620,
                                            width: `636px`,
                                            children: p(P, {
                                              className: `framer-1i1thi0-container`,
                                              inComponentSlot: !0,
                                              isModuleExternal: !0,
                                              nodeId: `AbBOq2GNd`,
                                              rendersWithMotion: !0,
                                              scopeId: `q2dk3BipV`,
                                              children: p(Zr, {
                                                adoyeSvgI: `"Entrusting Shafeeq with our luxury event was the best decision—we experienced an unmatched catering experience with a custom menu, flawless service, and great presentation that left a lasting impression!"`,
                                                height: `100%`,
                                                id: `AbBOq2GNd`,
                                                layoutId: `AbBOq2GNd`,
                                                mwd1PhJAI: ` `,
                                                style: { width: `100%` },
                                                variant: `wFK9ue_9d`,
                                                width: `100%`,
                                                zuF80UG9A: `– Puja & Sanjeev Goel`,
                                              }),
                                            }),
                                          }),
                                          p(N, {
                                            height: 620,
                                            width: `636px`,
                                            children: p(P, {
                                              className: `framer-1b6guvu-container`,
                                              inComponentSlot: !0,
                                              isModuleExternal: !0,
                                              nodeId: `tG8VktLlZ`,
                                              rendersWithMotion: !0,
                                              scopeId: `q2dk3BipV`,
                                              children: p(Zr, {
                                                adoyeSvgI: `"Hosting a high-profile event requires perfection, and Shahi Caterers’s team delivered beyond expectations. The international and Indian cuisine selection was impeccable, and the service was flawless. Truly world-class!"`,
                                                height: `100%`,
                                                id: `tG8VktLlZ`,
                                                layoutId: `tG8VktLlZ`,
                                                mwd1PhJAI: ` `,
                                                style: { width: `100%` },
                                                variant: `wFK9ue_9d`,
                                                width: `100%`,
                                                zuF80UG9A: `– Ritu & Ajay Verma`,
                                              }),
                                            }),
                                          }),
                                        ],
                                        startFrom: 0,
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        transitionControl: {
                                          delay: 0,
                                          duration: 0.6,
                                          ease: [0, 0, 1, 1],
                                          type: `tween`,
                                        },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                k() &&
                                  p(`div`, {
                                    className: `framer-f3vt2a hidden-jeceav hidden-13dj5pp`,
                                    "data-framer-name": `Left blur`,
                                  }),
                                k() &&
                                  p(`div`, {
                                    className: `framer-u9ma6n hidden-jeceav hidden-13dj5pp`,
                                    "data-framer-name": `Right blur`,
                                  }),
                                p(`div`, {
                                  className: `framer-1ow0ljx`,
                                  children: p(`div`, {
                                    className: `framer-16ubj6`,
                                    "data-framer-name": `Elipse bottom`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        p(z, {
                          breakpoint: b,
                          overrides: {
                            dZS61v7lZ: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: W(
                                  (l?.y || 0) + 0 + 12144 + 0 + 1108.8
                                ),
                                pixelHeight: 1600,
                                pixelWidth: 3840,
                                sizes: l?.width || `100vw`,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png`,
                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 3840w`,
                              },
                            },
                            hBNTufln9: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 1600,
                                pixelWidth: 3840,
                                sizes: l?.width || `100vw`,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png`,
                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 3840w`,
                              },
                            },
                            jIFZ85Jgy: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 1600,
                                pixelWidth: 3840,
                                sizes: l?.width || `100vw`,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png`,
                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 3840w`,
                              },
                            },
                            LiSfdOU15: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: W(
                                  (l?.y || 0) + 0 + 12553.6 + 0 + 1170.8
                                ),
                                pixelHeight: 1600,
                                pixelWidth: 3840,
                                sizes: l?.width || `100vw`,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png`,
                                srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 3840w`,
                              },
                            },
                          },
                          children: p(L, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: W(
                                (l?.y || 0) + 0 + 12626.6 + 0 + 1220.8
                              ),
                              pixelHeight: 1600,
                              pixelWidth: 3840,
                              sizes: l?.width || `100vw`,
                              src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png`,
                              srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3840/v1/MCzAlkymcAByQIT0OuDiF9Ti3k_ylvhnl.png 3840w`,
                            },
                            className: `framer-cgwn2l`,
                            "data-framer-name": `Contact Us`,
                            id: Ge,
                            ref: Ke,
                            children: y(`div`, {
                              className: `framer-zxgjk3`,
                              "data-framer-name": `Contact Section`,
                              children: [
                                y(`div`, {
                                  className: `framer-1wsgbk5`,
                                  "data-framer-name": `Contact Container`,
                                  children: [
                                    y(`div`, {
                                      className: `framer-t6bsww`,
                                      "data-framer-name": `Contact Description Container`,
                                      children: [
                                        p(z, {
                                          breakpoint: b,
                                          overrides: {
                                            hBNTufln9: {
                                              children: p(S, {
                                                children: y(`h1`, {
                                                  style: {
                                                    "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                    "--framer-font-size": `50px`,
                                                    "--framer-line-height": `1.1em`,
                                                    "--framer-text-color": `var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, rgb(249, 243, 240))`,
                                                  },
                                                  children: [
                                                    `Book `,
                                                    p(`span`, {
                                                      style: {
                                                        "--framer-text-color": `rgb(0, 0, 0)`,
                                                      },
                                                      children: p(`br`, {}),
                                                    }),
                                                    `Your Consultation`,
                                                  ],
                                                }),
                                              }),
                                            },
                                            jIFZ85Jgy: {
                                              children: p(S, {
                                                children: p(`h1`, {
                                                  style: {
                                                    "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                    "--framer-font-size": `62px`,
                                                    "--framer-line-height": `1.1em`,
                                                    "--framer-text-color": `var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, rgb(249, 243, 240))`,
                                                  },
                                                  children: `Book Your Consultation`,
                                                }),
                                              }),
                                            },
                                            LiSfdOU15: {
                                              children: p(S, {
                                                children: y(`h1`, {
                                                  style: {
                                                    "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                    "--framer-font-size": `76px`,
                                                    "--framer-line-height": `1.1em`,
                                                    "--framer-text-color": `var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, rgb(249, 243, 240))`,
                                                  },
                                                  children: [
                                                    `Book `,
                                                    p(`span`, {
                                                      style: {
                                                        "--framer-text-color": `rgb(0, 0, 0)`,
                                                      },
                                                      children: p(`br`, {}),
                                                    }),
                                                    `Your Consultation`,
                                                  ],
                                                }),
                                              }),
                                            },
                                          },
                                          children: p(B, {
                                            __fromCanvasComponent: !0,
                                            children: p(S, {
                                              children: y(`h1`, {
                                                style: {
                                                  "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                                  "--framer-font-size": `76px`,
                                                  "--framer-line-height": `1.1em`,
                                                  "--framer-text-color": `var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, rgb(249, 243, 240))`,
                                                },
                                                children: [
                                                  `Book `,
                                                  p(`span`, {
                                                    style: {
                                                      "--framer-text-color": `rgb(0, 0, 0)`,
                                                    },
                                                    children: p(`br`, {}),
                                                  }),
                                                  `Your Consultation`,
                                                ],
                                              }),
                                            }),
                                            className: `framer-1ptdx5h`,
                                            "data-framer-name": `Contact Title`,
                                            fonts: [`CUSTOM;Perpetua Regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        p(z, {
                                          breakpoint: b,
                                          overrides: {
                                            hBNTufln9: {
                                              children: y(S, {
                                                children: [
                                                  p(`p`, {
                                                    style: {
                                                      "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                      "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                      "--framer-font-size": `13px`,
                                                      "--framer-font-variation-axes": `"wght" 300`,
                                                      "--framer-line-height": `1.6em`,
                                                      "--framer-text-color": `var(--token-9a8ef716-577e-4c26-974d-ae66a5b997e7, rgb(221, 221, 221))`,
                                                    },
                                                    children: `Begin your journey with Shahi Caterers—where every celebration is curated to perfection. From luxury catering and bespoke culinary experiences to venue selection and personalized event planning, our team crafts unforgettable moments tailored to your vision.`,
                                                  }),
                                                  p(`p`, {
                                                    style: {
                                                      "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                      "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                      "--framer-font-size": `13px`,
                                                      "--framer-font-variation-axes": `"wght" 300`,
                                                      "--framer-line-height": `1.6em`,
                                                      "--framer-text-color": `var(--token-9a8ef716-577e-4c26-974d-ae66a5b997e7, rgb(221, 221, 221))`,
                                                    },
                                                    children: `Let’s connect and create something extraordinary.`,
                                                  }),
                                                ],
                                              }),
                                            },
                                          },
                                          children: p(B, {
                                            __fromCanvasComponent: !0,
                                            children: p(S, {
                                              children: y(`p`, {
                                                style: {
                                                  "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                  "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                  "--framer-font-variation-axes": `"wght" 300`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-color": `var(--token-547c5a6a-9461-4593-9fdb-4708b2ee5b6d, rgb(221, 221, 221))`,
                                                },
                                                children: [
                                                  `Begin your journey with Shahi Caterers—where every celebration is curated to perfection. From luxury catering and bespoke culinary experiences to venue selection and personalized event planning, our team crafts unforgettable moments tailored to your vision.`,
                                                  y(`span`, {
                                                    style: {
                                                      "--framer-text-color": `rgb(102, 102, 102)`,
                                                    },
                                                    children: [
                                                      p(`br`, {}),
                                                      p(`br`, {}),
                                                    ],
                                                  }),
                                                  `Let’s connect and create something extraordinary.`,
                                                ],
                                              }),
                                            }),
                                            className: `framer-18aec7e`,
                                            "data-framer-name": `Contact Description`,
                                            fonts: [`FS;Montserrat-variable`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    U() &&
                                      p(`div`, {
                                        className: `framer-wxz345 hidden-13dj5pp`,
                                        "data-framer-name": `Contact Details Container`,
                                        children: y(`div`, {
                                          className: `framer-1y2gtt1`,
                                          "data-framer-name": `Contact Details`,
                                          children: [
                                            y(`div`, {
                                              className: `framer-1yf5d4g`,
                                              "data-framer-name": `Contact Info`,
                                              children: [
                                                p(N, {
                                                  children: p(P, {
                                                    className: `framer-bflys5-container`,
                                                    isAuthoredByUser: !0,
                                                    isModuleExternal: !0,
                                                    nodeId: `f14JifwWB`,
                                                    scopeId: `q2dk3BipV`,
                                                    children: p(Fe, {
                                                      color: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                                      height: `100%`,
                                                      iconSearch: `mail`,
                                                      iconSelection: `Calculator`,
                                                      id: `f14JifwWB`,
                                                      layoutId: `f14JifwWB`,
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
                                                p(B, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(S, {
                                                    children: p(`p`, {
                                                      style: {
                                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                        "--framer-font-variation-axes": `"wght" 300`,
                                                        "--framer-line-height": `1.6em`,
                                                        "--framer-text-color": `var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, rgb(233, 221, 204))`,
                                                      },
                                                      children: p(R, {
                                                        href: `https://wa.me/919502200071`,
                                                        motionChild: !0,
                                                        nodeId: `plrVUq59B`,
                                                        openInNewTab: !0,
                                                        relValues: [],
                                                        scopeId: `q2dk3BipV`,
                                                        smoothScroll: !1,
                                                        children: p(j.a, {
                                                          className: `framer-styles-preset-1d1cl26`,
                                                          "data-styles-preset": `Qu7GZfWqZ`,
                                                          children: `shafeeq@shahicaterers.in`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  className: `framer-1g5vntq`,
                                                  "data-framer-name": `Heading 5 → Contact Us`,
                                                  fonts: [
                                                    `FS;Montserrat-variable`,
                                                  ],
                                                  verticalAlignment: `center`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            y(`div`, {
                                              className: `framer-113l0rh`,
                                              "data-framer-name": `Contact Info`,
                                              children: [
                                                p(N, {
                                                  children: p(P, {
                                                    className: `framer-10hzyuf-container`,
                                                    isAuthoredByUser: !0,
                                                    isModuleExternal: !0,
                                                    nodeId: `RuCsKAQM3`,
                                                    scopeId: `q2dk3BipV`,
                                                    children: p(Fe, {
                                                      color: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                                      height: `100%`,
                                                      iconSearch: `telephone`,
                                                      iconSelection: `Phone`,
                                                      id: `RuCsKAQM3`,
                                                      layoutId: `RuCsKAQM3`,
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
                                                p(B, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(S, {
                                                    children: y(`p`, {
                                                      style: {
                                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                        "--framer-font-variation-axes": `"wght" 300`,
                                                        "--framer-line-height": `1.6em`,
                                                        "--framer-text-color": `var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, rgb(233, 221, 204))`,
                                                      },
                                                      children: [
                                                        p(R, {
                                                          href: `9502200071`,
                                                          motionChild: !0,
                                                          nodeId: `va6lvvCHJ`,
                                                          openInNewTab: !0,
                                                          preserveParams: !1,
                                                          relValues: [],
                                                          scopeId: `q2dk3BipV`,
                                                          smoothScroll: !1,
                                                          children: p(j.a, {
                                                            className: `framer-styles-preset-1d1cl26`,
                                                            "data-styles-preset": `Qu7GZfWqZ`,
                                                            children: `7`,
                                                          }),
                                                        }),
                                                        `7380 12838`,
                                                      ],
                                                    }),
                                                  }),
                                                  className: `framer-zzk2av`,
                                                  "data-framer-name": `Heading 5 → Contact Us`,
                                                  fonts: [
                                                    `FS;Montserrat-variable`,
                                                  ],
                                                  verticalAlignment: `center`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            p(R, {
                                              href: `https://www.instagram.com/bhaimohammadshafeeq/`,
                                              motionChild: !0,
                                              nodeId: `pOwvDJYvp`,
                                              scopeId: `q2dk3BipV`,
                                              children: y(j.a, {
                                                className: `framer-m2wcvy framer-1se72pe`,
                                                "data-framer-name": `Contact Info`,
                                                children: [
                                                  p(N, {
                                                    children: p(P, {
                                                      className: `framer-109llrn-container`,
                                                      isAuthoredByUser: !0,
                                                      isModuleExternal: !0,
                                                      nodeId: `gKxJ5KMMa`,
                                                      scopeId: `q2dk3BipV`,
                                                      children: p(Fe, {
                                                        color: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                                        height: `100%`,
                                                        iconSearch: `inst`,
                                                        iconSelection: `Phone`,
                                                        id: `gKxJ5KMMa`,
                                                        layoutId: `gKxJ5KMMa`,
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
                                                  p(B, {
                                                    __fromCanvasComponent: !0,
                                                    children: p(S, {
                                                      children: p(`p`, {
                                                        style: {
                                                          "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                          "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                          "--framer-font-variation-axes": `"wght" 300`,
                                                          "--framer-line-height": `1.6em`,
                                                          "--framer-text-color": `var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, rgb(233, 221, 204))`,
                                                        },
                                                        children: `shahicaterers.in`,
                                                      }),
                                                    }),
                                                    className: `framer-j3byxw`,
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
                                            y(`div`, {
                                              className: `framer-zq5pnd`,
                                              "data-framer-name": `Contact Info`,
                                              children: [
                                                p(le, {
                                                  className: `framer-1bq1dig`,
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
                                                p(B, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(S, {
                                                    children: p(`p`, {
                                                      style: {
                                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                        "--framer-font-variation-axes": `"wght" 300`,
                                                        "--framer-line-height": `1.6em`,
                                                        "--framer-text-color": `var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, rgb(233, 221, 204))`,
                                                      },
                                                      children: `Vijayawada, Andhra Pradesh, India`,
                                                    }),
                                                  }),
                                                  className: `framer-oatrr8`,
                                                  "data-framer-name": `Heading 5 → Contact Us`,
                                                  fonts: [
                                                    `FS;Montserrat-variable`,
                                                  ],
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
                                p(ae, {
                                  action: `https://api.framer.com/forms/v1/forms/50708242-5fc4-4547-9476-173ba72dbb8b/submit`,
                                  className: `framer-1vr42wp`,
                                  nodeId: `U724oPmaF`,
                                  children: (e) =>
                                    y(ee, {
                                      children: [
                                        y(`label`, {
                                          className: `framer-e2cmes`,
                                          children: [
                                            p(B, {
                                              __fromCanvasComponent: !0,
                                              children: p(S, {
                                                children: p(`p`, {
                                                  style: {
                                                    "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                    "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `0.04em`,
                                                    "--framer-line-height": `1.6em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Name`,
                                                }),
                                              }),
                                              className: `framer-5anslh`,
                                              fonts: [`FS;Montserrat-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            p(I, {
                                              className: `framer-1sb155`,
                                              inputName: `Name`,
                                              placeholder: `Type here...`,
                                              required: !0,
                                              type: `text`,
                                            }),
                                          ],
                                        }),
                                        y(`label`, {
                                          className: `framer-kktj95`,
                                          children: [
                                            p(B, {
                                              __fromCanvasComponent: !0,
                                              children: p(S, {
                                                children: p(`p`, {
                                                  style: {
                                                    "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                    "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `0.04em`,
                                                    "--framer-line-height": `1.6em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Email`,
                                                }),
                                              }),
                                              className: `framer-1x88mfw`,
                                              fonts: [`FS;Montserrat-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            p(I, {
                                              className: `framer-1yyfpk8`,
                                              inputName: `Email`,
                                              placeholder: `Type here...`,
                                              required: !0,
                                              type: `email`,
                                            }),
                                          ],
                                        }),
                                        y(`label`, {
                                          className: `framer-8lchka`,
                                          children: [
                                            p(B, {
                                              __fromCanvasComponent: !0,
                                              children: p(S, {
                                                children: p(`p`, {
                                                  style: {
                                                    "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                    "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `0.04em`,
                                                    "--framer-line-height": `1.6em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Mobile`,
                                                }),
                                              }),
                                              className: `framer-1x61dqd`,
                                              fonts: [`FS;Montserrat-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            p(I, {
                                              className: `framer-4oh0i7`,
                                              inputName: `Mobile`,
                                              placeholder: `Type here...`,
                                              required: !0,
                                              type: `tel`,
                                            }),
                                          ],
                                        }),
                                        y(`label`, {
                                          className: `framer-ytw3s`,
                                          children: [
                                            p(B, {
                                              __fromCanvasComponent: !0,
                                              children: p(S, {
                                                children: p(`p`, {
                                                  style: {
                                                    "--font-selector": `RlM7TW9udHNlcnJhdC1yZWd1bGFy`,
                                                    "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `0.04em`,
                                                    "--framer-line-height": `1.6em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Message`,
                                                }),
                                              }),
                                              className: `framer-g2b78i`,
                                              fonts: [`FS;Montserrat-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            p(I, {
                                              className: `framer-x7f9xp`,
                                              inputName: `Message`,
                                              placeholder: `Type here...`,
                                              required: !0,
                                              type: `textarea`,
                                            }),
                                          ],
                                        }),
                                        p(`div`, {
                                          className: `framer-1sgd1i`,
                                          children: p(z, {
                                            breakpoint: b,
                                            overrides: {
                                              dZS61v7lZ: {
                                                width: `max((${l?.width || `100vw`} - 240px) * 0.4 - 128px, 1px)`,
                                              },
                                              hBNTufln9: {
                                                width: `max(${l?.width || `100vw`} - 64px, 1px)`,
                                              },
                                              jIFZ85Jgy: {
                                                width: `max(${l?.width || `100vw`} - 128px, 1px)`,
                                              },
                                              LiSfdOU15: {
                                                width: `max((${l?.width || `100vw`} - 320px) * 0.4 - 128px, 1px)`,
                                              },
                                            },
                                            children: p(N, {
                                              height: 48,
                                              width: `max((${l?.width || `100vw`} - 400px) * 0.4 - 128px, 1px)`,
                                              children: p(P, {
                                                className: `framer-1utuz62-container`,
                                                isModuleExternal: !0,
                                                nodeId: `tk1Vlf73A`,
                                                scopeId: `q2dk3BipV`,
                                                children: p(Pe, {
                                                  height: `100%`,
                                                  id: `tk1Vlf73A`,
                                                  layoutId: `tk1Vlf73A`,
                                                  style: {
                                                    height: `100%`,
                                                    width: `100%`,
                                                  },
                                                  type: `submit`,
                                                  variant: Xa(
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
                                We() &&
                                  p(`div`, {
                                    className: `framer-rvjju2 hidden-1i8942i hidden-vdx7iz hidden-1vl5jtp hidden-jeceav`,
                                    "data-framer-name": `Contact Details mob`,
                                    children: y(`div`, {
                                      className: `framer-m87gzc`,
                                      "data-framer-name": `Contact Details`,
                                      children: [
                                        U() &&
                                          y(`div`, {
                                            className: `framer-u86yp0 hidden-13dj5pp`,
                                            "data-framer-name": `Contact Info`,
                                            children: [
                                              p(N, {
                                                children: p(P, {
                                                  className: `framer-vcwmei-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `ay2SkApcC`,
                                                  scopeId: `q2dk3BipV`,
                                                  children: p(Fe, {
                                                    color: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                                    height: `100%`,
                                                    iconSearch: `phone`,
                                                    iconSelection: `Phone`,
                                                    id: `ay2SkApcC`,
                                                    layoutId: `ay2SkApcC`,
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
                                              p(B, {
                                                __fromCanvasComponent: !0,
                                                children: p(S, {
                                                  children: p(`p`, {
                                                    style: {
                                                      "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                      "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                      "--framer-font-variation-axes": `"wght" 300`,
                                                      "--framer-line-height": `1.6em`,
                                                      "--framer-text-color": `var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, rgb(233, 221, 204))`,
                                                    },
                                                    children: p(R, {
                                                      href: `+91 95022 00071`,
                                                      motionChild: !0,
                                                      nodeId: `UYQHtlMxB`,
                                                      openInNewTab: !0,
                                                      relValues: [],
                                                      scopeId: `q2dk3BipV`,
                                                      smoothScroll: !1,
                                                      children: p(j.a, {
                                                        className: `framer-styles-preset-1d1cl26`,
                                                        "data-styles-preset": `Qu7GZfWqZ`,
                                                        children: `+91 95022 00071`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                className: `framer-1i33qhy`,
                                                "data-framer-name": `Heading 5 → Contact Us`,
                                                fonts: [
                                                  `FS;Montserrat-variable`,
                                                ],
                                                verticalAlignment: `center`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        y(`div`, {
                                          className: `framer-1w6m3uq`,
                                          "data-framer-name": `Contact Info`,
                                          children: [
                                            p(N, {
                                              children: p(P, {
                                                className: `framer-5ellvk-container`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                nodeId: `uqHjMX82G`,
                                                scopeId: `q2dk3BipV`,
                                                children: p(Fe, {
                                                  color: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                                  height: `100%`,
                                                  iconSearch: `phone`,
                                                  iconSelection: `Calculator`,
                                                  id: `uqHjMX82G`,
                                                  layoutId: `uqHjMX82G`,
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
                                            p(B, {
                                              __fromCanvasComponent: !0,
                                              children: p(S, {
                                                children: p(`p`, {
                                                  style: {
                                                    "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                    "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                    "--framer-font-variation-axes": `"wght" 300`,
                                                    "--framer-line-height": `1.6em`,
                                                    "--framer-text-color": `var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, rgb(233, 221, 204))`,
                                                  },
                                                  children: p(R, {
                                                    href: `tel:9502200071`,
                                                    motionChild: !0,
                                                    nodeId: `GhY2eLihU`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `q2dk3BipV`,
                                                    smoothScroll: !1,
                                                    children: p(j.a, {
                                                      className: `framer-styles-preset-1d1cl26`,
                                                      "data-styles-preset": `Qu7GZfWqZ`,
                                                      children: `95022 00071`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-kmlfwu`,
                                              "data-framer-name": `Heading 5 → Contact Us`,
                                              fonts: [`FS;Montserrat-variable`],
                                              verticalAlignment: `center`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        y(`div`, {
                                          className: `framer-1tdn6qs`,
                                          "data-framer-name": `Contact Info`,
                                          children: [
                                            p(B, {
                                              __fromCanvasComponent: !0,
                                              children: p(S, {
                                                children: p(`p`, {
                                                  style: {
                                                    "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                    "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                    "--framer-font-variation-axes": `"wght" 300`,
                                                    "--framer-line-height": `1.6em`,
                                                    "--framer-text-color": `var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, rgb(233, 221, 204))`,
                                                  },
                                                  children: `Vijayawada, Andhra Pradesh, India`,
                                                }),
                                              }),
                                              className: `framer-122jgm2`,
                                              "data-framer-name": `Heading 5 → Contact Us`,
                                              fonts: [`FS;Montserrat-variable`],
                                              verticalAlignment: `center`,
                                              withExternalLayout: !0,
                                            }),
                                            p(le, {
                                              className: `framer-1slifpw`,
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
                                        p(R, {
                                          href: `https://www.instagram.com/bhaimohammadshafeeq/`,
                                          motionChild: !0,
                                          nodeId: `C8OjIHgHj`,
                                          scopeId: `q2dk3BipV`,
                                          children: y(j.a, {
                                            className: `framer-bau8p5 framer-1se72pe`,
                                            "data-framer-name": `Contact Info`,
                                            children: [
                                              p(N, {
                                                children: p(P, {
                                                  className: `framer-1erg2zq-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `RowJqSIDc`,
                                                  scopeId: `q2dk3BipV`,
                                                  children: p(Fe, {
                                                    color: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                                    height: `100%`,
                                                    iconSearch: `inst`,
                                                    iconSelection: `Phone`,
                                                    id: `RowJqSIDc`,
                                                    layoutId: `RowJqSIDc`,
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
                                              p(B, {
                                                __fromCanvasComponent: !0,
                                                children: p(S, {
                                                  children: p(`p`, {
                                                    style: {
                                                      "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                      "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                      "--framer-font-variation-axes": `"wght" 300`,
                                                      "--framer-line-height": `1.6em`,
                                                      "--framer-text-color": `var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, rgb(233, 221, 204))`,
                                                    },
                                                    children: `shahicaterers.in`,
                                                  }),
                                                }),
                                                className: `framer-1b62gry`,
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
                                        y(`div`, {
                                          className: `framer-sw7qn2`,
                                          "data-framer-name": `Contact Info`,
                                          children: [
                                            p(N, {
                                              children: p(P, {
                                                className: `framer-1v0xky1-container`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                nodeId: `NOcSGYaM1`,
                                                scopeId: `q2dk3BipV`,
                                                children: p(Fe, {
                                                  color: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                                                  height: `100%`,
                                                  iconSearch: `mail`,
                                                  iconSelection: `Calculator`,
                                                  id: `NOcSGYaM1`,
                                                  layoutId: `NOcSGYaM1`,
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
                                            p(B, {
                                              __fromCanvasComponent: !0,
                                              children: p(S, {
                                                children: p(`p`, {
                                                  style: {
                                                    "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURNd01BPT0=`,
                                                    "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                                    "--framer-font-variation-axes": `"wght" 300`,
                                                    "--framer-line-height": `1.6em`,
                                                    "--framer-text-color": `var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, rgb(233, 221, 204))`,
                                                  },
                                                  children: p(R, {
                                                    href: `https://wa.me/919502200071`,
                                                    motionChild: !0,
                                                    nodeId: `nWSfhF8aU`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `q2dk3BipV`,
                                                    smoothScroll: !1,
                                                    children: p(j.a, {
                                                      className: `framer-styles-preset-1d1cl26`,
                                                      "data-styles-preset": `Qu7GZfWqZ`,
                                                      children: `shafeeq@shahicaterers.in`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-bs3r7x`,
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
                    y(`div`, {
                      className: `framer-iapov8`,
                      "data-framer-name": `Footer`,
                      id: qe,
                      ref: Je,
                      children: [
                        p(z, {
                          breakpoint: b,
                          overrides: {
                            dZS61v7lZ: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 493,
                                intrinsicWidth: 3528,
                                loading: W((l?.y || 0) + 0 + 14272.8 + 160 + 0),
                                pixelHeight: 493,
                                pixelWidth: 3528,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3528/v1/Shahi_gahcl6.png`,
                              },
                            },
                            hBNTufln9: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 493,
                                intrinsicWidth: 3528,
                                pixelHeight: 493,
                                pixelWidth: 3528,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3528/v1/Shahi_gahcl6.png`,
                              },
                            },
                            jIFZ85Jgy: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 493,
                                intrinsicWidth: 3528,
                                pixelHeight: 493,
                                pixelWidth: 3528,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3528/v1/Shahi_gahcl6.png`,
                              },
                            },
                            LiSfdOU15: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 493,
                                intrinsicWidth: 3528,
                                loading: W((l?.y || 0) + 0 + 14764.4 + 160 + 0),
                                pixelHeight: 493,
                                pixelWidth: 3528,
                                src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3528/v1/Shahi_gahcl6.png`,
                              },
                            },
                          },
                          children: p(Z, {
                            __framer__animate: { transition: Qa },
                            __framer__animateOnce: !0,
                            __framer__enter: Za,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__targets: [{ ref: Je, target: `animate` }],
                            __framer__threshold: 1,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 493,
                              intrinsicWidth: 3528,
                              loading: W((l?.y || 0) + 0 + 14847.4 + 160 + 0),
                              pixelHeight: 493,
                              pixelWidth: 3528,
                              src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3528/v1/Shahi_gahcl6.png`,
                            },
                            className: `framer-iralmo`,
                            "data-framer-name": `MASORA`,
                            children: p(z, {
                              breakpoint: b,
                              overrides: {
                                dZS61v7lZ: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 493,
                                    intrinsicWidth: 3528,
                                    loading: W(
                                      (l?.y || 0) +
                                        0 +
                                        14272.8 +
                                        160 +
                                        0 +
                                        268 -
                                        254
                                    ),
                                    pixelHeight: 493,
                                    pixelWidth: 3528,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3528/v1/Shahi_gahcl6.png`,
                                  },
                                },
                                hBNTufln9: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 493,
                                    intrinsicWidth: 3528,
                                    pixelHeight: 493,
                                    pixelWidth: 3528,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3528/v1/Shahi_gahcl6.png`,
                                  },
                                },
                                jIFZ85Jgy: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 493,
                                    intrinsicWidth: 3528,
                                    pixelHeight: 493,
                                    pixelWidth: 3528,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3528/v1/Shahi_gahcl6.png`,
                                  },
                                },
                                LiSfdOU15: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 493,
                                    intrinsicWidth: 3528,
                                    loading: W(
                                      (l?.y || 0) +
                                        0 +
                                        14764.4 +
                                        160 +
                                        0 +
                                        268 -
                                        250
                                    ),
                                    pixelHeight: 493,
                                    pixelWidth: 3528,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3528/v1/Shahi_gahcl6.png`,
                                  },
                                },
                              },
                              children: p(L, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 493,
                                  intrinsicWidth: 3528,
                                  loading: W(
                                    (l?.y || 0) +
                                      0 +
                                      14847.4 +
                                      160 +
                                      0 +
                                      268 -
                                      250
                                  ),
                                  pixelHeight: 493,
                                  pixelWidth: 3528,
                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_3528/v1/Shahi_gahcl6.png`,
                                },
                                className: `framer-1df4m74`,
                                "data-framer-name": `MASORA`,
                              }),
                            }),
                          }),
                        }),
                        y(`div`, {
                          className: `framer-1yh3al5`,
                          "data-framer-name": `Footer Container`,
                          children: [
                            p(`div`, {
                              className: `framer-e53263`,
                              "data-framer-name": `Footer Item`,
                              children: p(z, {
                                breakpoint: b,
                                overrides: {
                                  hBNTufln9: {
                                    children: p(S, {
                                      children: p(`h4`, {
                                        style: {
                                          "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                          "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-font-variation-axes": `"wght" 400`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `var(--token-0f9c3003-8577-40ef-a001-ccbb14e45f6e, rgb(146, 122, 102))`,
                                        },
                                        children: `Copyright@2025`,
                                      }),
                                    }),
                                  },
                                },
                                children: p(B, {
                                  __fromCanvasComponent: !0,
                                  children: p(S, {
                                    children: p(`h4`, {
                                      style: {
                                        "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-0f9c3003-8577-40ef-a001-ccbb14e45f6e, rgb(146, 122, 102))`,
                                      },
                                      children: `Copyright@2025`,
                                    }),
                                  }),
                                  className: `framer-1l7g8n1`,
                                  "data-framer-name": `Footer Text`,
                                  fonts: [`GF;Red Rose-variable-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            p(R, {
                              href: {
                                hash: `:JxIQAQa2s`,
                                webPageId: `q2dk3BipV`,
                              },
                              motionChild: !0,
                              nodeId: `gDdlTLxRe`,
                              openInNewTab: !1,
                              scopeId: `q2dk3BipV`,
                              smoothScroll: !0,
                              children: y(j.a, {
                                className: `framer-h3nxq2 framer-1se72pe`,
                                "data-framer-name": `Footer Item`,
                                children: [
                                  p(z, {
                                    breakpoint: b,
                                    overrides: {
                                      hBNTufln9: {
                                        children: p(S, {
                                          children: p(`h4`, {
                                            style: {
                                              "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                              "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                              "--framer-font-size": `18px`,
                                              "--framer-font-variation-axes": `"wght" 400`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--token-0f9c3003-8577-40ef-a001-ccbb14e45f6e, rgb(146, 122, 102))`,
                                            },
                                            children: `Back to top`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: p(B, {
                                      __fromCanvasComponent: !0,
                                      children: p(S, {
                                        children: p(`h4`, {
                                          style: {
                                            "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                            "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-font-variation-axes": `"wght" 400`,
                                            "--framer-line-height": `1.4em`,
                                            "--framer-text-color": `var(--token-0f9c3003-8577-40ef-a001-ccbb14e45f6e, rgb(146, 122, 102))`,
                                          },
                                          children: `Back to top`,
                                        }),
                                      }),
                                      className: `framer-yhnus2`,
                                      "data-framer-name": `Footer Text`,
                                      fonts: [`GF;Red Rose-variable-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  p(N, {
                                    children: p(P, {
                                      className: `framer-svffmz-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `Ry6pWjvpA`,
                                      scopeId: `q2dk3BipV`,
                                      children: p(z, {
                                        breakpoint: b,
                                        overrides: {
                                          hBNTufln9: {
                                            color: `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                          },
                                        },
                                        children: p(Fe, {
                                          color: `var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60))`,
                                          height: `100%`,
                                          iconSearch: `arrow`,
                                          iconSelection: `ArrowUp`,
                                          id: `Ry6pWjvpA`,
                                          layoutId: `Ry6pWjvpA`,
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
                                  }),
                                ],
                              }),
                            }),
                            p(`div`, {
                              className: `framer-mg6w9s`,
                              "data-framer-name": `Footer Item`,
                              children: p(z, {
                                breakpoint: b,
                                overrides: {
                                  hBNTufln9: {
                                    children: p(S, {
                                      children: p(`h4`, {
                                        style: {
                                          "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                          "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-font-variation-axes": `"wght" 400`,
                                          "--framer-line-height": `1.4em`,
                                          "--framer-text-color": `var(--token-0f9c3003-8577-40ef-a001-ccbb14e45f6e, rgb(146, 122, 102))`,
                                        },
                                        children: `Terms & Conditions`,
                                      }),
                                    }),
                                  },
                                },
                                children: p(B, {
                                  __fromCanvasComponent: !0,
                                  children: p(S, {
                                    children: p(`h4`, {
                                      style: {
                                        "--font-selector": `R0Y7UmVkIFJvc2UtdmFyaWFibGUtcmVndWxhclZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Red Rose Variable", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-0f9c3003-8577-40ef-a001-ccbb14e45f6e, rgb(146, 122, 102))`,
                                      },
                                      children: `Terms & Conditions`,
                                    }),
                                  }),
                                  className: `framer-1qbgcgf`,
                                  "data-framer-name": `Footer Text`,
                                  fonts: [`GF;Red Rose-variable-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    We() &&
                      y(`div`, {
                        className: `framer-de8uv1 hidden-1i8942i hidden-vdx7iz hidden-1vl5jtp hidden-jeceav`,
                        "data-framer-name": `About Us mob`,
                        id: Ye,
                        ref: Xe,
                        children: [
                          y(`div`, {
                            className: `framer-1svk4xt`,
                            "data-framer-name": `Content`,
                            children: [
                              p(B, {
                                __fromCanvasComponent: !0,
                                children: p(S, {
                                  children: p(`h1`, {
                                    style: {
                                      "--font-selector": `Q1VTVE9NO1BlcnBldHVhIFJlZ3VsYXI=`,
                                      "--framer-font-family": `"Perpetua Regular", "Perpetua Regular Placeholder", sans-serif`,
                                      "--framer-font-size": `42px`,
                                      "--framer-line-height": `1.1em`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-e2fbaae8-635b-49f1-8bd6-85dbe1bd5ca4, rgb(140, 95, 69))`,
                                    },
                                    children: `Redefining Gourmet Experiences, One Event At A Time`,
                                  }),
                                }),
                                className: `framer-mwlfoy`,
                                "data-framer-name": `Title`,
                                fonts: [`CUSTOM;Perpetua Regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              p(ce, {
                                links: [
                                  {
                                    href: { webPageId: `b_Wa9cjnQ` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `b_Wa9cjnQ` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  p(N, {
                                    height: 45,
                                    children: p(P, {
                                      className: `framer-16ceqp9-container`,
                                      isModuleExternal: !0,
                                      nodeId: `r2hEXOzfE`,
                                      scopeId: `q2dk3BipV`,
                                      children: p(z, {
                                        breakpoint: b,
                                        overrides: {
                                          hBNTufln9: { cBqkcF_By: e[1] },
                                        },
                                        children: p(Mr, {
                                          cBqkcF_By: e[0],
                                          height: `100%`,
                                          id: `r2hEXOzfE`,
                                          layoutId: `r2hEXOzfE`,
                                          width: `100%`,
                                          yMI7gvbA0: `Know More`,
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                              p(`div`, {
                                className: `framer-vob3b1`,
                                "data-framer-name": `Description`,
                                children: p(B, {
                                  __fromCanvasComponent: !0,
                                  children: p(S, {
                                    children: p(`p`, {
                                      style: {
                                        "--font-selector": `RlM7TW9udHNlcnJhdC12YXJpYWJsZVZGPUluZG5hSFFpSURRd01BPT0=`,
                                        "--framer-font-family": `"Montserrat Variable", "Montserrat Placeholder", sans-serif`,
                                        "--framer-font-size": `15px`,
                                        "--framer-font-variation-axes": `"wght" 400`,
                                        "--framer-line-height": `1.6em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-cd1ee3ce-ef9a-4b26-b11d-8b484d1c7885, rgb(39, 31, 25))`,
                                      },
                                      children: `Shahi Caterers is a premier luxury catering and culinary curator, crafting bespoke gastronomic experiences for luxury events across India and international destinations. With a passion for world-class flavors and culinary storytelling, we transform every occasion into an unforgettable masterpiece.`,
                                    }),
                                  }),
                                  className: `framer-1ug2a07`,
                                  "data-framer-name": `Description`,
                                  fonts: [`FS;Montserrat-variable`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          p(`div`, {
                            className: `framer-1h7d0ot`,
                            "data-framer-name": `Image`,
                            children: p(z, {
                              breakpoint: b,
                              overrides: {
                                hBNTufln9: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    pixelHeight: 803,
                                    pixelWidth: 537,
                                    sizes: `calc((${l?.width || `100vw`} - 48px) * 0.88)`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png 537w`,
                                  },
                                },
                              },
                              children: p(L, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  pixelHeight: 803,
                                  pixelWidth: 537,
                                  src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png`,
                                  srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_537/v1/M7xJyo7ywNm78RA4sDpO6MC14U_uukpvs.png 537w`,
                                },
                                className: `framer-1az7bgg`,
                                "data-framer-name": `Image`,
                                children: p(`div`, {
                                  className: `framer-1tyxsxc`,
                                  "data-border": !0,
                                  "data-framer-name": `Border`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
                p(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (ro = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-JGDAB.framer-1se72pe, .framer-JGDAB .framer-1se72pe { display: block; }`,
        `.framer-JGDAB.framer-1i8942i { align-content: center; align-items: center; background-color: var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, #f9f3f0); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1920px; }`,
        `.framer-JGDAB .framer-mlzsu7-container, .framer-JGDAB .framer-1jati2o-container, .framer-JGDAB .framer-13e9v9u-container, .framer-JGDAB .framer-16ceqp9-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-JGDAB .framer-jeuir { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 10; }`,
        `.framer-JGDAB .framer-bmo76t-container, .framer-JGDAB .framer-y45if6-container { flex: none; height: auto; position: relative; width: 100%; z-index: 10; }`,
        `.framer-JGDAB.framer-1wo18ir { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        `.framer-JGDAB .framer-55jmcl-container { flex: none; height: 100vh; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1sdlfdi { align-content: center; align-items: center; background-color: var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, #f9f3f0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: 100vh; justify-content: flex-start; overflow: hidden; padding: 64px 48px 0px 48px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1yczrc4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px 0px 0px 0px; position: relative; width: 48%; }`,
        `.framer-JGDAB .framer-1hvktpf, .framer-JGDAB .framer-1obtatt, .framer-JGDAB .framer-1n1kra4, .framer-JGDAB .framer-1yiapit, .framer-JGDAB .framer-169kvxv, .framer-JGDAB .framer-w63nf8, .framer-JGDAB .framer-1xnk4yy, .framer-JGDAB .framer-ell6tn, .framer-JGDAB .framer-ec8v1e, .framer-JGDAB .framer-cg8pgc, .framer-JGDAB .framer-1915qw4, .framer-JGDAB .framer-cp0dta, .framer-JGDAB .framer-4gspr9, .framer-JGDAB .framer-6sknrb, .framer-JGDAB .framer-1b8by8t, .framer-JGDAB .framer-z5zj7n, .framer-JGDAB .framer-1ap8fyy, .framer-JGDAB .framer-n235g, .framer-JGDAB .framer-15tlgpz, .framer-JGDAB .framer-1whiu5i, .framer-JGDAB .framer-k4oper, .framer-JGDAB .framer-o4lewr, .framer-JGDAB .framer-c2swyh, .framer-JGDAB .framer-1ofrbyc, .framer-JGDAB .framer-qh5zx4, .framer-JGDAB .framer-nhr00z, .framer-JGDAB .framer-hlxt33, .framer-JGDAB .framer-1xjsbnb, .framer-JGDAB .framer-p2t8l4, .framer-JGDAB .framer-125oxwf, .framer-JGDAB .framer-1glm5tr, .framer-JGDAB .framer-znazxj, .framer-JGDAB .framer-1ptdx5h, .framer-JGDAB .framer-18aec7e, .framer-JGDAB .framer-mwlfoy, .framer-JGDAB .framer-1ug2a07 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JGDAB .framer-3prfxm, .framer-JGDAB .framer-vob3b1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-gta1yo { align-content: flex-start; align-items: flex-start; border-top-left-radius: 400px; border-top-right-radius: 400px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 400px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 38%; z-index: 1; }`,
        `.framer-JGDAB .framer-1krmph1 { -webkit-filter: brightness(1) contrast(1.01) saturate(1) sepia(0.01); align-content: flex-start; align-items: flex-start; border-top-left-radius: 800px; border-top-right-radius: 800px; display: flex; filter: brightness(1) contrast(1.01) saturate(1) sepia(0.01); flex: none; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: 430px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-2qlu2x { --border-bottom-width: 7px; --border-color: #f9f3f0; --border-left-width: 7px; --border-right-width: 7px; --border-style: solid; --border-top-width: 7px; border-top-left-radius: 800px; border-top-right-radius: 800px; bottom: -20px; flex: none; gap: 46px; height: 386px; overflow: visible; position: absolute; right: -37px; width: 36%; z-index: 1; }`,
        `.framer-JGDAB .framer-ohxpz7 { align-content: center; align-items: center; background-color: var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, #f9f3f0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 200px; height: 100vh; justify-content: center; overflow: hidden; padding: 80px 200px 0px 200px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1mvkl7t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px 0px 0px 0px; position: relative; width: 44%; }`,
        `.framer-JGDAB .framer-1m2xpft { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-JGDAB .framer-1gbi7ng { align-content: flex-start; align-items: flex-start; border-top-left-radius: 400px; border-top-right-radius: 400px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 80%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 30%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-JGDAB .framer-15lzvjq { -webkit-filter: brightness(1) contrast(1.01) saturate(1) sepia(0.01); align-content: flex-start; align-items: flex-start; aspect-ratio: 0.6688227684346701 / 1; display: flex; filter: brightness(1) contrast(1.01) saturate(1) sepia(0.01); flex: none; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: var(--framer-aspect-ratio-supported, 682px); justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1eqe4qi { --border-bottom-width: 15px; --border-color: #f9f3f0; --border-left-width: 15px; --border-right-width: 15px; --border-style: solid; --border-top-width: 15px; align-content: center; align-items: center; border-top-left-radius: 800px; border-top-right-radius: 800px; bottom: -183px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 46px; height: 637px; justify-content: flex-start; overflow: hidden; padding: 40px 32px 40px 32px; position: absolute; right: -159px; width: 319px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-JGDAB .framer-way5k9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 20px; justify-content: flex-start; overflow: visible; padding: 120px 0px 0px 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-JGDAB .framer-kz1z3n, .framer-JGDAB .framer-duqq5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0.5px; height: 800px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-mntd8i, .framer-JGDAB .framer-1xyviwv, .framer-JGDAB .framer-1031y9q, .framer-JGDAB .framer-uxf091, .framer-JGDAB .framer-bxnzrv, .framer-JGDAB .framer-r29ukf, .framer-JGDAB .framer-1oh0zmx, .framer-JGDAB .framer-o2mrhs, .framer-JGDAB .framer-64nghq, .framer-JGDAB .framer-1qmta8h { background-color: var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, #e9ddcc); flex: none; height: 100%; overflow: visible; position: relative; width: 20%; }`,
        `.framer-JGDAB .framer-11pjof5 { align-content: center; align-items: center; background-color: var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, #e9ddcc); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 40px 0px 0px 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-JGDAB .framer-1jvew2k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-1kzyj6n-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-xuq8qt { align-content: center; align-items: center; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 80px; width: 100%; z-index: 2; }`,
        `.framer-JGDAB .framer-1gsht2q { background-color: rgba(255, 255, 255, 0); bottom: 286px; flex: none; height: 90px; left: 0px; overflow: hidden; position: absolute; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-klclpr-container { flex: none; height: auto; position: relative; width: 100%; z-index: 2; }`,
        `.framer-JGDAB .framer-1lcvjw2 { align-content: center; align-items: center; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 160px; width: 100%; z-index: 2; }`,
        `.framer-JGDAB .framer-6iixk1 { background-color: rgba(255, 255, 255, 0); bottom: 286px; flex: none; height: 176px; left: 0px; overflow: hidden; position: absolute; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-1jjhdg6-container { flex: none; height: auto; position: relative; width: 100%; z-index: 3; }`,
        `.framer-JGDAB .framer-udogzf { align-content: center; align-items: center; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 240px; width: 100%; z-index: 2; }`,
        `.framer-JGDAB .framer-1f9b3ij { background-color: rgba(255, 255, 255, 0); bottom: 286px; flex: none; height: 264px; left: 0px; overflow: hidden; position: absolute; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-1cul3u3-container { flex: none; height: auto; position: relative; width: 100%; z-index: 4; }`,
        `.framer-JGDAB .framer-sb1v5p { align-content: center; align-items: center; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 320px; width: 100%; z-index: 2; }`,
        `.framer-JGDAB .framer-1uhhqtd { background-color: rgba(255, 255, 255, 0); bottom: 286px; flex: none; height: 352px; left: 0px; overflow: hidden; position: absolute; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-14y72hl-container { flex: none; height: auto; position: relative; width: 100%; z-index: 5; }`,
        `.framer-JGDAB .framer-r9a579 { align-content: center; align-items: center; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 400px; width: 100%; z-index: 2; }`,
        `.framer-JGDAB .framer-u1watq { background-color: rgba(255, 255, 255, 0); bottom: 286px; flex: none; height: 440px; left: 0px; overflow: hidden; position: absolute; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-1n8uf13-container { flex: none; height: auto; position: relative; width: 100%; z-index: 6; }`,
        `.framer-JGDAB .framer-k6729c { align-content: center; align-items: center; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 480px; width: 100%; z-index: 2; }`,
        `.framer-JGDAB .framer-r4ieuh { background-color: rgba(255, 255, 255, 0); bottom: 286px; flex: none; height: 528px; left: 0px; overflow: hidden; position: absolute; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-uawq42-container { flex: none; height: auto; position: relative; width: 100%; z-index: 7; }`,
        `.framer-JGDAB .framer-1qx9c76 { align-content: center; align-items: center; background-color: var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, #4c3324); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-JGDAB .framer-1syjrys { align-content: flex-start; align-items: flex-start; background-color: var(--token-dc9c062d-3be7-4ce0-9d4c-b7ae7b646dce, #4c3324); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 64px 40px 80px 40px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-JGDAB .framer-ttk9i3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-1ahc48j, .framer-JGDAB .framer-172ftnk, .framer-JGDAB .framer-18usn9l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 106vh; justify-content: flex-start; overflow: hidden; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-1morupl, .framer-JGDAB .framer-mp700k, .framer-JGDAB .framer-oxsog8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 340px 80px 0px 80px; position: relative; width: 64%; z-index: 2; }`,
        `.framer-JGDAB .framer-1x3y4by, .framer-JGDAB .framer-5xlis5, .framer-JGDAB .framer-kmd583 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; text-shadow: 0px 2px 16px rgba(0, 0, 0, 0.5); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JGDAB .framer-zmg4he, .framer-JGDAB .framer-oxvxnw, .framer-JGDAB .framer-3gfqud { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1iu5l8y, .framer-JGDAB .framer-1mubld9, .framer-JGDAB .framer-63w6yv { --framer-paragraph-spacing: 0px; -webkit-backdrop-filter: blur(2px); backdrop-filter: blur(2px); flex: none; height: auto; position: relative; text-shadow: 0px 2px 16px rgba(0, 0, 0, 0.85); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JGDAB .framer-1wzre4b { -webkit-filter: brightness(0.93) grayscale(0.08) hue-rotate(0deg) saturate(0.85) sepia(0.08); filter: brightness(0.93) grayscale(0.08) hue-rotate(0deg) saturate(0.85) sepia(0.08); flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-1rmtdi3 { -webkit-filter: brightness(0.92) grayscale(0) saturate(1) sepia(0.01); filter: brightness(0.92) grayscale(0) saturate(1) sepia(0.01); flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-1827y7i { -webkit-filter: brightness(0.9) grayscale(0.14) saturate(0.85) sepia(0.12); filter: brightness(0.9) grayscale(0.14) saturate(0.85) sepia(0.12); flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-hstt8c { align-content: center; align-items: center; background-color: #050403; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1bt8wkg { background-color: #050403; flex: none; height: 100px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1wwup1o { align-content: center; align-items: center; background-color: #050403; cursor: grab; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 100vh; justify-content: flex-start; overflow: hidden; padding: 180px 160px 120px 160px; position: relative; width: 100%; z-index: 5; }`,
        `.framer-JGDAB .framer-1oftuy8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 72%; z-index: 3; }`,
        `.framer-JGDAB .framer-6mqozl-container { cursor: ew-resize; flex: none; height: 385px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-JGDAB .framer-1qbb59h-container, .framer-JGDAB .framer-kcctj0-container, .framer-JGDAB .framer-f7uczf-container, .framer-JGDAB .framer-1g1o1e0-container, .framer-JGDAB .framer-18ajwsy-container, .framer-JGDAB .framer-qnq1uz-container, .framer-JGDAB .framer-ywc489-container, .framer-JGDAB .framer-1dsfl6v-container, .framer-JGDAB .framer-exf0bq-container, .framer-JGDAB .framer-22zrrk-container, .framer-JGDAB .framer-18lfpd5-container, .framer-JGDAB .framer-j0seob-container, .framer-JGDAB .framer-1growrk-container, .framer-JGDAB .framer-x2nqxc-container, .framer-JGDAB .framer-1tjh3x3-container, .framer-JGDAB .framer-ymeeet-container, .framer-JGDAB .framer-b98q0p-container, .framer-JGDAB .framer-f0od3x-container, .framer-JGDAB .framer-10l70hj-container, .framer-JGDAB .framer-1ckhzpc-container { height: auto; position: relative; width: 260px; }`,
        `.framer-JGDAB .framer-ngf80m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 836px; justify-content: center; left: calc(46.66666666666669% - 91.66666666666666% / 2); overflow: hidden; padding: 0px; position: absolute; top: 0px; transform-style: preserve-3d; width: 92%; z-index: 0; }`,
        `.framer-JGDAB .framer-1mnwurk { background: linear-gradient(180deg, rgba(5, 4, 3, 0) 0%, rgb(5, 4, 3) 100%); bottom: 0px; flex: none; height: 511px; left: calc(50.00000000000002% - 116.47727272727273% / 2); overflow: hidden; position: absolute; width: 116%; z-index: 1; }`,
        `.framer-JGDAB .framer-x2d3fu-container { flex: none; height: 139%; position: relative; width: 139%; z-index: 0; }`,
        `.framer-JGDAB .framer-1dthgu2-container { flex: none; height: 440px; position: relative; width: 85%; z-index: 3; }`,
        `.framer-JGDAB .framer-1fu6dlk { background-color: #050403; flex: none; height: 40px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-i6g5a7 { align-content: center; align-items: center; background-color: #050403; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 100px; justify-content: flex-start; overflow: visible; padding: 100px 0px 0px 0px; position: relative; width: 100%; z-index: 5; }`,
        `.framer-JGDAB .framer-14vnvwk { align-content: flex-start; align-items: flex-start; background-color: var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, #e9ddcc); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 120px 220px 120px 220px; position: relative; width: 100%; z-index: 5; }`,
        `.framer-JGDAB .framer-d5nhr7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: 100vh; justify-content: center; overflow: visible; padding: 80px 100px 100px 0px; position: sticky; top: 0px; width: 1px; z-index: 1; }`,
        `.framer-JGDAB .framer-opxne6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 72%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JGDAB .framer-aew7ak { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 190vh; justify-content: space-between; overflow: hidden; padding: 160px 0px 160px 0px; position: relative; width: 1px; }`,
        `.framer-JGDAB .framer-7kmt7b, .framer-JGDAB .framer-8j40di, .framer-JGDAB .framer-zj5cz4, .framer-JGDAB .framer-189wyss, .framer-JGDAB .framer-zv3ek9, .framer-JGDAB .framer-16ouuem { align-content: center; align-items: center; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px 24px 30px 30px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-mo69is, .framer-JGDAB .framer-75fzs6, .framer-JGDAB .framer-6dn5eu, .framer-JGDAB .framer-e5pkrl, .framer-JGDAB .framer-1a86e2g, .framer-JGDAB .framer-1f8joj0 { --framer-paragraph-spacing: 0px; flex: none; height: auto; opacity: 0.9; position: relative; white-space: pre-wrap; width: 80px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JGDAB .framer-98l4fh, .framer-JGDAB .framer-1uelfd7, .framer-JGDAB .framer-18scim3, .framer-JGDAB .framer-86pmkx, .framer-JGDAB .framer-rb8tur { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-JGDAB .framer-8kuq67 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-pu82u0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 118px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-JGDAB .framer-18w06ol { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1roelpp { display: grid; flex: none; gap: 84px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px 140px 0px 140px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1lbdint, .framer-JGDAB .framer-15jfnd1, .framer-JGDAB .framer-nih0zx, .framer-JGDAB .framer-ouk267 { align-content: center; align-items: center; align-self: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; justify-self: center; overflow: hidden; padding: 24px 0px 24px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-JGDAB .framer-1kus204, .framer-JGDAB .framer-kbqm20, .framer-JGDAB .framer-w81gr, .framer-JGDAB .framer-hambji { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 64px); overflow: visible; position: relative; width: 64px; }`,
        `.framer-JGDAB .framer-1r3ilo8 { bottom: 10px; flex: none; left: 6px; position: absolute; right: 7px; top: 9px; }`,
        `.framer-JGDAB .framer-1oatcf2, .framer-JGDAB .framer-4mairz, .framer-JGDAB .framer-6np7wl, .framer-JGDAB .framer-pjqv9g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-jkceqa { bottom: 10px; flex: none; left: 6px; position: absolute; right: 7px; top: 6px; }`,
        `.framer-JGDAB .framer-17rjcn4 { bottom: 7px; flex: none; left: 7px; position: absolute; right: 7px; top: 9px; }`,
        `.framer-JGDAB .framer-qnzy35 { bottom: 4px; flex: none; left: 3px; position: absolute; right: 4px; top: 4px; }`,
        `.framer-JGDAB .framer-ntlm5a { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 200px 0px 160px 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-dxrfmr { flex: none; height: 205px; left: 0px; position: absolute; top: calc(54.01662049861498% - 205px / 2); width: 100%; z-index: 0; }`,
        `.framer-JGDAB .framer-2psaca { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 40px 0px 160px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-JGDAB .framer-o9fwrs { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-3wpq5h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-4wb2gy-container, .framer-JGDAB .framer-mkwf10-container { flex: none; height: 200px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1xx3yt0, .framer-JGDAB .framer-x703aq { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 88px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 32px 0px 32px; position: relative; width: min-content; }`,
        `.framer-JGDAB .framer-mzzryq { aspect-ratio: 1.4403669724770642 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 84px); position: relative; width: 121px; }`,
        `.framer-JGDAB .framer-zxpyu5 { aspect-ratio: 1.4311926605504588 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 84px); position: relative; width: 121px; }`,
        `.framer-JGDAB .framer-1h1qbm6 { aspect-ratio: 2.857142857142857 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 60px); position: relative; width: 170px; }`,
        `.framer-JGDAB .framer-155hsh2 { aspect-ratio: 1.4181818181818182 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 85px); position: relative; width: 121px; }`,
        `.framer-JGDAB .framer-1vn3e9w { aspect-ratio: 3.14960622904224 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 37px); position: relative; width: 116px; }`,
        `.framer-JGDAB .framer-1bio6jr { aspect-ratio: 1.798165137614679 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 85px); opacity: 0.8; position: relative; width: 152px; }`,
        `.framer-JGDAB .framer-lfmfwv { aspect-ratio: 1.311926605504587 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 84px); opacity: 0.53; position: relative; width: 110px; }`,
        `.framer-JGDAB .framer-1l46e4l { aspect-ratio: 2.8323353293413174 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 72px); position: relative; width: 203px; }`,
        `.framer-JGDAB .framer-1c99ep { aspect-ratio: 3.649122868340446 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 62px); position: relative; width: 225px; }`,
        `.framer-JGDAB .framer-gwbaw1 { aspect-ratio: 2.4771929824561405 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 77px); position: relative; width: 190px; }`,
        `.framer-JGDAB .framer-1fjugep-container, .framer-JGDAB .framer-1llos2c-container { flex: none; height: 120px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-zt8ep9, .framer-JGDAB .framer-1vlkwd { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: min-content; }`,
        `.framer-JGDAB .framer-jnys8g { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 1.4110429675619678 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 60px); opacity: 0.6; position: relative; width: 84px; }`,
        `.framer-JGDAB .framer-1mq0r8t { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 2.1058823529411765 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 47px); opacity: 0.6; position: relative; width: 99px; }`,
        `.framer-JGDAB .framer-117t3wh { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 3.7151702786377707 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 44px); opacity: 0.6; position: relative; width: 163px; }`,
        `.framer-JGDAB .framer-18f51j { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 2.1488833746898264 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 60px); opacity: 0.6; position: relative; width: 129px; }`,
        `.framer-JGDAB .framer-2neme3 { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 1.4281729586297573 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 55px); opacity: 0.6; position: relative; width: 79px; }`,
        `.framer-JGDAB .framer-gregrn { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 2.161392405063291 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 51px); opacity: 0.6; position: relative; width: 110px; }`,
        `.framer-JGDAB .framer-1ncu2ac { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 2.556291390728477 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 41px); opacity: 0.6; position: relative; width: 106px; }`,
        `.framer-JGDAB .framer-mdx3ky { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 4.2207207207207205 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 30px); opacity: 0.6; position: relative; width: 128px; }`,
        `.framer-JGDAB .framer-2isjzq { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 2.5885416666666665 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 55px); opacity: 0.8; position: relative; width: 143px; }`,
        `.framer-JGDAB .framer-11pmkm9 { aspect-ratio: 1.4403669724770642 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 71px); position: relative; width: 102px; }`,
        `.framer-JGDAB .framer-x6s4l8 { aspect-ratio: 1.4311926605504588 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 82px); position: relative; width: 117px; }`,
        `.framer-JGDAB .framer-1gd06nw { aspect-ratio: 2.857142857142857 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 51px); position: relative; width: 144px; }`,
        `.framer-JGDAB .framer-y9x8pc { aspect-ratio: 1.4181818181818182 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 77px); position: relative; width: 108px; }`,
        `.framer-JGDAB .framer-1swl92u { aspect-ratio: 3.14960622904224 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); position: relative; width: 99px; }`,
        `.framer-JGDAB .framer-1dft76f { aspect-ratio: 1.798165137614679 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 77px); opacity: 0.8; position: relative; width: 139px; }`,
        `.framer-JGDAB .framer-1u7uv4h { aspect-ratio: 1.311926605504587 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 71px); opacity: 0.53; position: relative; width: 93px; }`,
        `.framer-JGDAB .framer-1w1okbl { aspect-ratio: 2.8323353293413174 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 60px); position: relative; width: 170px; }`,
        `.framer-JGDAB .framer-1yixkvx { aspect-ratio: 3.649122868340446 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 52px); position: relative; width: 190px; }`,
        `.framer-JGDAB .framer-1q2fakz { aspect-ratio: 2.4771929824561405 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 65px); position: relative; width: 161px; }`,
        `.framer-JGDAB .framer-u839zp { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 1.4110429675619678 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 67px); opacity: 0.6; position: relative; width: 93px; }`,
        `.framer-JGDAB .framer-19ynuzt { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 2.1058823529411765 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 55px); opacity: 0.6; position: relative; width: 115px; }`,
        `.framer-JGDAB .framer-zasun6 { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 3.7151702786377707 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 52px); opacity: 0.6; position: relative; width: 194px; }`,
        `.framer-JGDAB .framer-13jc7m2 { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 2.1488833746898264 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 65px); opacity: 0.6; position: relative; width: 140px; }`,
        `.framer-JGDAB .framer-z5snf9 { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 1.4281729586297573 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 58px); opacity: 0.6; position: relative; width: 83px; }`,
        `.framer-JGDAB .framer-1vuu6t { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 2.161392405063291 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 52px); opacity: 0.6; position: relative; width: 111px; }`,
        `.framer-JGDAB .framer-1aybyo2 { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 2.556291390728477 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 49px); opacity: 0.6; position: relative; width: 124px; }`,
        `.framer-JGDAB .framer-1pjg8k1 { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 4.2207207207207205 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 36px); opacity: 0.6; position: relative; width: 152px; }`,
        `.framer-JGDAB .framer-12b3krn { -webkit-filter: brightness(2) grayscale(1); aspect-ratio: 2.5885416666666665 / 1; filter: brightness(2) grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 62px); opacity: 0.8; position: relative; width: 160px; }`,
        `.framer-JGDAB .framer-1ui92ix { aspect-ratio: 0.9555555555555556 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 718px); position: relative; width: 36%; z-index: 2; }`,
        `.framer-JGDAB .framer-en0rrm { flex: none; height: 765px; left: calc(49.86301369863016% - 99.86301369863013% / 2); position: absolute; top: calc(50.06553079947578% - 765px / 2); width: 100%; }`,
        `.framer-JGDAB .framer-p0df82 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-d1mn6 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 120px 0px 400px 0px; position: sticky; top: -80px; width: 100%; z-index: 1; }`,
        `.framer-JGDAB .framer-f2jm8v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 300px 0px 300px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-JGDAB .framer-1c8o3uh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 624px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-2lkz7b, .framer-JGDAB .framer-1ow0ljx { flex: none; height: 90px; overflow: visible; position: relative; width: 100%; z-index: 2; }`,
        `.framer-JGDAB .framer-vis24p { background-color: var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, #ffffff); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; bottom: -82px; flex: none; left: -63px; position: absolute; top: -41px; width: 107%; }`,
        `.framer-JGDAB .framer-15urluc-container { flex: none; height: 600px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-JGDAB .framer-hfiobk-container, .framer-JGDAB .framer-pt03c8-container, .framer-JGDAB .framer-v74jpv-container, .framer-JGDAB .framer-15zm1j9-container, .framer-JGDAB .framer-1i1thi0-container, .framer-JGDAB .framer-1b6guvu-container { height: auto; position: relative; width: 636px; }`,
        `.framer-JGDAB .framer-f3vt2a { -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px); background-color: rgba(235, 229, 221, 0.05); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 32%; z-index: 1; }`,
        `.framer-JGDAB .framer-u9ma6n { -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px); background-color: rgba(235, 229, 221, 0.05); bottom: 0px; flex: none; overflow: hidden; position: absolute; right: 0px; top: 0px; width: 32%; z-index: 1; }`,
        `.framer-JGDAB .framer-16ubj6 { background-color: var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, #ffffff); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; bottom: -41px; flex: none; left: -63px; position: absolute; top: -82px; width: 107%; }`,
        `.framer-JGDAB .framer-cgwn2l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 116px; height: 100vh; justify-content: center; overflow: hidden; padding: 40px 200px 40px 200px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-JGDAB .framer-zxgjk3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1wsgbk5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 46%; }`,
        `.framer-JGDAB .framer-t6bsww { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-wxz345 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1y2gtt1, .framer-JGDAB .framer-m87gzc { display: grid; flex: none; gap: 30px 16px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1yf5d4g, .framer-JGDAB .framer-113l0rh, .framer-JGDAB .framer-zq5pnd, .framer-JGDAB .framer-1w6m3uq, .framer-JGDAB .framer-1tdn6qs, .framer-JGDAB .framer-sw7qn2 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-bflys5-container, .framer-JGDAB .framer-10hzyuf-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 27px); position: relative; width: 24px; }`,
        `.framer-JGDAB .framer-1g5vntq, .framer-JGDAB .framer-zzk2av, .framer-JGDAB .framer-j3byxw, .framer-JGDAB .framer-oatrr8, .framer-JGDAB .framer-1i33qhy, .framer-JGDAB .framer-kmlfwu, .framer-JGDAB .framer-122jgm2, .framer-JGDAB .framer-1b62gry, .framer-JGDAB .framer-bs3r7x, .framer-JGDAB .framer-1l7g8n1, .framer-JGDAB .framer-yhnus2, .framer-JGDAB .framer-1qbgcgf { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-JGDAB .framer-m2wcvy, .framer-JGDAB .framer-bau8p5 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-JGDAB .framer-109llrn-container, .framer-JGDAB .framer-1bq1dig, .framer-JGDAB .framer-1slifpw, .framer-JGDAB .framer-1erg2zq-container { flex: none; height: 24px; position: relative; width: 24px; }`,
        `.framer-JGDAB .framer-1vr42wp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px 64px 24px 64px; position: relative; width: 40%; }`,
        `.framer-JGDAB .framer-e2cmes, .framer-JGDAB .framer-kktj95, .framer-JGDAB .framer-8lchka, .framer-JGDAB .framer-ytw3s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-5anslh, .framer-JGDAB .framer-1x88mfw, .framer-JGDAB .framer-1x61dqd, .framer-JGDAB .framer-g2b78i { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-JGDAB .framer-1sb155, .framer-JGDAB .framer-1yyfpk8, .framer-JGDAB .framer-4oh0i7 { --framer-input-background: rgba(31, 20, 13, 0.2); --framer-input-border-bottom-width: 1px; --framer-input-border-color: #ab7e65; --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 8px; --framer-input-border-radius-bottom-right: 8px; --framer-input-border-radius-top-left: 8px; --framer-input-border-radius-top-right: 8px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, #f9f3f0); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, #e9ddcc); --framer-input-font-family: "Montserrat"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #b39682; flex: none; height: 44px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-x7f9xp { --framer-input-background: rgba(31, 20, 13, 0.2); --framer-input-border-bottom-width: 1px; --framer-input-border-color: #ab7e65; --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 8px; --framer-input-border-radius-bottom-right: 8px; --framer-input-border-radius-top-left: 8px; --framer-input-border-radius-top-right: 8px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, #f9f3f0); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, #e9ddcc); --framer-input-font-family: "Montserrat"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #b39682; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 100px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1sgd1i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1utuz62-container { flex: 1 0 0px; height: 48px; position: relative; width: 1px; }`,
        `.framer-JGDAB .framer-rvjju2 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-JGDAB .framer-u86yp0 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-vcwmei-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 26px); position: relative; width: 22px; }`,
        `.framer-JGDAB .framer-5ellvk-container, .framer-JGDAB .framer-1v0xky1-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); position: relative; width: 24px; }`,
        `.framer-JGDAB .framer-iapov8 { align-content: center; align-items: center; background-color: #f2ece4; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 140px; height: min-content; justify-content: center; overflow: hidden; padding: 160px 200px 40px 200px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-iralmo { aspect-ratio: 7.164179104477612 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 204px); overflow: visible; position: relative; width: 96%; z-index: 1; }`,
        `.framer-JGDAB .framer-1df4m74 { aspect-ratio: 7.164179104477612 / 1; bottom: -18px; flex: none; height: var(--framer-aspect-ratio-supported, 204px); left: -22px; opacity: 0.2; overflow: visible; position: absolute; width: 100%; z-index: 0; }`,
        `.framer-JGDAB .framer-1yh3al5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-e53263 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-JGDAB .framer-h3nxq2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 180px; }`,
        `.framer-JGDAB .framer-svffmz-container { flex: none; height: 32px; position: relative; width: 32px; }`,
        `.framer-JGDAB .framer-mg6w9s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 228px; }`,
        `.framer-JGDAB .framer-de8uv1 { align-content: center; align-items: center; background-color: var(--token-6f311e15-2147-431a-a6ad-970bc1053cba, #f9f3f0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 64px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1svk4xt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px 0px 0px 0px; position: relative; width: 94%; }`,
        `.framer-JGDAB .framer-1h7d0ot { align-content: flex-start; align-items: flex-start; border-top-left-radius: 400px; border-top-right-radius: 400px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 400px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 88%; z-index: 1; }`,
        `.framer-JGDAB .framer-1az7bgg { -webkit-filter: brightness(1) contrast(1.01) saturate(1) sepia(0.01); align-content: flex-start; align-items: flex-start; border-top-left-radius: 800px; border-top-right-radius: 800px; display: flex; filter: brightness(1) contrast(1.01) saturate(1) sepia(0.01); flex: none; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: 502px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JGDAB .framer-1tyxsxc { --border-bottom-width: 7px; --border-color: #f9f3f0; --border-left-width: 7px; --border-right-width: 7px; --border-style: solid; --border-top-width: 7px; border-top-left-radius: 800px; border-top-right-radius: 800px; bottom: 60px; flex: none; gap: 46px; height: 307px; overflow: visible; position: absolute; right: -37px; width: 36%; z-index: 1; }`,
        ...ze,
        `.framer-JGDAB[data-border="true"]::after, .framer-JGDAB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        `@media (min-width: 1660px) and (max-width: 1919.98px) { .framer-JGDAB.framer-1i8942i { width: 1660px; } .framer-JGDAB .framer-mlzsu7-container, .framer-JGDAB .framer-1ahc48j { order: 0; } .framer-JGDAB .framer-jeuir, .framer-JGDAB .framer-172ftnk { order: 1; } .framer-JGDAB .framer-55jmcl-container, .framer-JGDAB .framer-18usn9l { order: 2; } .framer-JGDAB .framer-ohxpz7 { order: 4; padding: 40px 160px 0px 160px; } .framer-JGDAB .framer-1mvkl7t { width: 49%; } .framer-JGDAB .framer-1gbi7ng { height: 66%; } .framer-JGDAB .framer-15lzvjq { height: var(--framer-aspect-ratio-supported, 601px); } .framer-JGDAB .framer-1eqe4qi { --border-bottom-width: 12px; --border-left-width: 12px; --border-right-width: 12px; --border-top-width: 12px; bottom: -195px; right: -199px; } .framer-JGDAB .framer-way5k9 { order: 5; } .framer-JGDAB .framer-11pjof5 { order: 6; } .framer-JGDAB .framer-1qx9c76 { order: 7; } .framer-JGDAB .framer-hstt8c { order: 8; } .framer-JGDAB .framer-1bt8wkg { overflow: visible; } .framer-JGDAB .framer-1wwup1o { padding: 140px 160px 140px 160px; } .framer-JGDAB .framer-x2d3fu-container { height: 1212px; width: 110%; } .framer-JGDAB .framer-1dthgu2-container { width: 86%; } .framer-JGDAB .framer-1fu6dlk { height: 64px; } .framer-JGDAB .framer-14vnvwk { order: 9; padding: 100px 160px 120px 160px; } .framer-JGDAB .framer-opxne6 { width: 90%; } .framer-JGDAB .framer-aew7ak { padding: 100px 0px 160px 0px; } .framer-JGDAB .framer-18w06ol { order: 10; padding: 80px 0px 90px 0px; } .framer-JGDAB .framer-1kus204, .framer-JGDAB .framer-kbqm20, .framer-JGDAB .framer-w81gr, .framer-JGDAB .framer-hambji { height: var(--framer-aspect-ratio-supported, 56px); width: 56px; } .framer-JGDAB .framer-ntlm5a { order: 11; } .framer-JGDAB .framer-dxrfmr { bottom: 355px; top: unset; } .framer-JGDAB .framer-2psaca { padding: 0px 40px 0px 120px; } .framer-JGDAB .framer-1ui92ix { height: var(--framer-aspect-ratio-supported, 621px); } .framer-JGDAB .framer-p0df82 { order: 12; } .framer-JGDAB .framer-d1mn6 { padding: 120px 0px 350px 0px; } .framer-JGDAB .framer-vis24p { bottom: -82px; left: -327px; top: -104px; width: 139%; } .framer-JGDAB .framer-u9ma6n { width: 32%; } .framer-JGDAB .framer-16ubj6 { bottom: -108px; left: -339px; top: -81px; width: 141%; } .framer-JGDAB .framer-cgwn2l { height: 104vh; padding: 40px 160px 40px 160px; } .framer-JGDAB .framer-1wsgbk5 { width: 50%; } .framer-JGDAB .framer-iapov8 { order: 13; } .framer-JGDAB .framer-iralmo, .framer-JGDAB .framer-1df4m74 { height: var(--framer-aspect-ratio-supported, 169px); } .framer-JGDAB .framer-h3nxq2, .framer-JGDAB .framer-mg6w9s { width: min-content; }}`,
        `@media (min-width: 1366px) and (max-width: 1659.98px) { .framer-JGDAB.framer-1i8942i { width: 1366px; } .framer-JGDAB .framer-ohxpz7 { height: 90vh; padding: 16px 120px 0px 120px; } .framer-JGDAB .framer-1mvkl7t { width: 52%; } .framer-JGDAB .framer-1gbi7ng { height: 64%; width: 32%; } .framer-JGDAB .framer-15lzvjq { height: var(--framer-aspect-ratio-supported, 566px); width: 105%; } .framer-JGDAB .framer-1eqe4qi { --border-bottom-width: 8px; --border-left-width: 8px; --border-right-width: 8px; --border-top-width: 8px; bottom: -132px; height: 529px; right: -156px; width: 265px; } .framer-JGDAB .framer-1morupl, .framer-JGDAB .framer-mp700k, .framer-JGDAB .framer-oxsog8 { padding: 260px 80px 0px 80px; width: 72%; } .framer-JGDAB .framer-1wwup1o { padding: 160px; } .framer-JGDAB .framer-1mnwurk { left: -1px; width: 110%; } .framer-JGDAB .framer-x2d3fu-container { height: 1188px; width: 116%; } .framer-JGDAB .framer-1dthgu2-container { width: 96%; } .framer-JGDAB .framer-1fu6dlk { height: 64px; } .framer-JGDAB .framer-14vnvwk { padding: 80px 120px 120px 120px; } .framer-JGDAB .framer-opxne6 { width: 80%; } .framer-JGDAB .framer-aew7ak { height: 180vh; padding: 80px 0px 120px 0px; } .framer-JGDAB .framer-18w06ol { padding: 64px 0px 80px 0px; } .framer-JGDAB .framer-1kus204, .framer-JGDAB .framer-kbqm20, .framer-JGDAB .framer-w81gr, .framer-JGDAB .framer-hambji { height: var(--framer-aspect-ratio-supported, 52px); width: 52px; } .framer-JGDAB .framer-ntlm5a { padding: 160px 0px 120px 0px; } .framer-JGDAB .framer-dxrfmr { bottom: 292px; height: 190px; top: unset; } .framer-JGDAB .framer-2psaca { padding: 0px 40px 0px 80px; } .framer-JGDAB .framer-4wb2gy-container, .framer-JGDAB .framer-mkwf10-container { height: 180px; } .framer-JGDAB .framer-1ui92ix { height: var(--framer-aspect-ratio-supported, 544px); width: 38%; } .framer-JGDAB .framer-d1mn6 { padding: 120px 0px 300px 0px; } .framer-JGDAB .framer-vis24p { bottom: -82px; left: -545px; top: -172px; width: 180%; } .framer-JGDAB .framer-16ubj6 { bottom: -158px; left: -487px; top: -82px; width: 171%; } .framer-JGDAB .framer-cgwn2l { height: 102vh; padding: 40px 120px 40px 120px; } .framer-JGDAB .framer-iapov8 { padding: 160px 140px 40px 140px; } .framer-JGDAB .framer-iralmo { height: var(--framer-aspect-ratio-supported, 146px); } .framer-JGDAB .framer-1df4m74 { bottom: -14px; height: var(--framer-aspect-ratio-supported, 146px); left: -19px; } .framer-JGDAB .framer-h3nxq2, .framer-JGDAB .framer-mg6w9s { width: min-content; }}`,
        `@media (min-width: 810px) and (max-width: 1365.98px) { .framer-JGDAB.framer-1i8942i { overflow: hidden; width: 810px; } .framer-JGDAB .framer-mlzsu7-container { width: 0%; } .framer-JGDAB .framer-y45if6-container { will-change: var(--framer-will-change-effect-override, transform); } .framer-JGDAB.framer-1wo18ir, .framer-JGDAB .framer-55jmcl-container { z-index: 3; } .framer-JGDAB .framer-1hvktpf, .framer-JGDAB .framer-1obtatt { order: 0; } .framer-JGDAB .framer-1jati2o-container { order: 2; } .framer-JGDAB .framer-3prfxm { order: 1; } .framer-JGDAB .framer-way5k9 { height: 100px; padding: 140px 0px 0px 0px; } .framer-JGDAB .framer-1syjrys { overflow: hidden; padding: 64px 48px 80px 48px; will-change: unset; } .framer-JGDAB .framer-1ahc48j, .framer-JGDAB .framer-172ftnk, .framer-JGDAB .framer-18usn9l { height: 100vh; } .framer-JGDAB .framer-1morupl, .framer-JGDAB .framer-mp700k, .framer-JGDAB .framer-oxsog8 { padding: 360px 40px 0px 40px; width: 88%; } .framer-JGDAB .framer-1wwup1o { gap: 64px; justify-content: center; padding: 180px 48px 120px 48px; } .framer-JGDAB .framer-1oftuy8 { width: 80%; } .framer-JGDAB .framer-ngf80m { display: block; left: unset; padding: unset; right: -8px; top: 24px; width: 100%; } .framer-JGDAB .framer-1mnwurk { height: 562px; left: calc(49.93834771886562% - 100.12330456226881% / 2); width: 100%; } .framer-JGDAB .framer-x2d3fu-container { bottom: -127px; height: unset; left: calc(45.00616522811347% - 99.75339087546239% / 2); position: absolute; top: -176px; width: 100%; } .framer-JGDAB .framer-1dthgu2-container { height: 400px; width: 100%; } .framer-JGDAB .framer-14vnvwk { flex-direction: column; gap: 32px; justify-content: flex-start; overflow: hidden; padding: 64px 48px 64px 48px; } .framer-JGDAB .framer-d5nhr7 { flex: none; gap: 32px; height: min-content; padding: 0px; position: relative; top: unset; width: 100%; } .framer-JGDAB .framer-opxne6, .framer-JGDAB .framer-1wsgbk5 { width: 100%; } .framer-JGDAB .framer-aew7ak { flex: none; gap: 40px; height: min-content; justify-content: center; padding: 40px 0px 40px 0px; width: 100%; } .framer-JGDAB .framer-7kmt7b, .framer-JGDAB .framer-8j40di, .framer-JGDAB .framer-zj5cz4, .framer-JGDAB .framer-189wyss, .framer-JGDAB .framer-zv3ek9, .framer-JGDAB .framer-16ouuem { overflow: hidden; padding: 24px 40px 24px 0px; will-change: var(--framer-will-change-override, transform); } .framer-JGDAB .framer-mo69is, .framer-JGDAB .framer-75fzs6, .framer-JGDAB .framer-6dn5eu, .framer-JGDAB .framer-e5pkrl, .framer-JGDAB .framer-1a86e2g, .framer-JGDAB .framer-1f8joj0 { width: 72px; } .framer-JGDAB .framer-18w06ol { padding: 80px 0px 80px 0px; } .framer-JGDAB .framer-1roelpp { gap: 64px; grid-template-columns: repeat(2, minmax(50px, 1fr)); overflow: hidden; padding: 0px 48px 0px 48px; } .framer-JGDAB .framer-ntlm5a { flex-direction: column; padding: 120px 0px 80px 0px; } .framer-JGDAB .framer-dxrfmr { bottom: 276px; top: unset; } .framer-JGDAB .framer-2psaca { flex: none; padding: 0px 40px 0px 48px; width: 100%; } .framer-JGDAB .framer-o9fwrs { justify-content: center; padding: 16px; } .framer-JGDAB .framer-p0df82 { overflow: hidden; } .framer-JGDAB .framer-d1mn6 { overflow: hidden; padding: 80px 0px 80px 0px; } .framer-JGDAB .framer-f2jm8v { padding: 0px 48px 0px 48px; } .framer-JGDAB .framer-vis24p { bottom: -81px; left: -356px; top: -176px; width: 188%; } .framer-JGDAB .framer-16ubj6 { bottom: -171px; left: -348px; top: -82px; width: 186%; } .framer-JGDAB .framer-cgwn2l { height: min-content; padding: 64px 64px 80px 64px; } .framer-JGDAB .framer-zxgjk3 { flex: none; flex-direction: column; gap: 64px; height: min-content; justify-content: center; } .framer-JGDAB .framer-1vr42wp { padding: 0px; width: 100%; } .framer-JGDAB .framer-iapov8 { padding: 160px 48px 40px 48px; } .framer-JGDAB .framer-iralmo { height: var(--framer-aspect-ratio-supported, 96px); } .framer-JGDAB .framer-1df4m74 { bottom: -8px; height: var(--framer-aspect-ratio-supported, 96px); left: -11px; } .framer-JGDAB .framer-h3nxq2, .framer-JGDAB .framer-mg6w9s { width: min-content; }}`,
        `@media (max-width: 809.98px) { .framer-JGDAB.framer-1i8942i { width: 430px; } .framer-JGDAB .framer-mlzsu7-container { order: 0; width: 100%; } .framer-JGDAB .framer-jeuir, .framer-JGDAB .framer-6mqozl-container, .framer-JGDAB .framer-1llos2c-container, .framer-JGDAB .framer-122jgm2, .framer-JGDAB .framer-sw7qn2, .framer-JGDAB .framer-vob3b1, .framer-JGDAB .framer-1h7d0ot { order: 1; } .framer-JGDAB .framer-y45if6-container { will-change: var(--framer-will-change-effect-override, transform); } .framer-JGDAB.framer-1wo18ir { z-index: 2; } .framer-JGDAB .framer-55jmcl-container { order: 2; z-index: 2; } .framer-JGDAB .framer-way5k9 { order: 6; overflow: hidden; } .framer-JGDAB .framer-1xyviwv, .framer-JGDAB .framer-1031y9q, .framer-JGDAB .framer-uxf091, .framer-JGDAB .framer-1oh0zmx, .framer-JGDAB .framer-o2mrhs, .framer-JGDAB .framer-64nghq { flex: 1 0 0px; width: 1px; } .framer-JGDAB .framer-11pjof5 { order: 7; } .framer-JGDAB .framer-1gsht2q { bottom: unset; height: 80px; top: -80px; } .framer-JGDAB .framer-1lcvjw2 { top: 150px; } .framer-JGDAB .framer-6iixk1 { bottom: unset; top: -176px; } .framer-JGDAB .framer-udogzf { top: 220px; } .framer-JGDAB .framer-1f9b3ij { bottom: unset; top: -264px; } .framer-JGDAB .framer-sb1v5p { top: 290px; } .framer-JGDAB .framer-1uhhqtd { bottom: unset; top: -352px; } .framer-JGDAB .framer-r9a579 { top: 370px; } .framer-JGDAB .framer-u1watq { bottom: unset; top: -440px; } .framer-JGDAB .framer-k6729c { position: relative; top: unset; } .framer-JGDAB .framer-r4ieuh { bottom: unset; top: -528px; } .framer-JGDAB .framer-1qx9c76 { order: 8; } .framer-JGDAB .framer-1syjrys { padding: 64px 24px 64px 24px; will-change: unset; } .framer-JGDAB .framer-1ahc48j, .framer-JGDAB .framer-172ftnk, .framer-JGDAB .framer-18usn9l { height: 100vh; } .framer-JGDAB .framer-1morupl, .framer-JGDAB .framer-mp700k, .framer-JGDAB .framer-oxsog8 { padding: 260px 24px 0px 24px; width: 94%; } .framer-JGDAB .framer-zmg4he, .framer-JGDAB .framer-oxvxnw, .framer-JGDAB .framer-3gfqud { padding: 24px 8px 24px 8px; } .framer-JGDAB .framer-hstt8c { order: 9; } .framer-JGDAB .framer-1bt8wkg { height: 80px; } .framer-JGDAB .framer-1wwup1o { gap: 48px; height: 102vh; justify-content: center; padding: 180px 40px 120px 40px; } .framer-JGDAB .framer-1oftuy8 { order: 0; width: 98%; } .framer-JGDAB .framer-ngf80m { display: block; height: 613px; left: unset; order: 2; padding: unset; right: -1px; width: 99%; } .framer-JGDAB .framer-1mnwurk { bottom: -75px; height: 363px; left: 0px; width: 100%; } .framer-JGDAB .framer-x2d3fu-container { bottom: -108px; height: unset; left: -11px; position: absolute; top: -70px; width: 102%; } .framer-JGDAB .framer-i6g5a7 { height: 60px; padding: 80px 0px 0px 0px; } .framer-JGDAB .framer-14vnvwk { flex-direction: column; gap: 32px; justify-content: flex-start; order: 10; padding: 64px 24px 64px 24px; } .framer-JGDAB .framer-d5nhr7 { flex: none; gap: 32px; height: min-content; padding: 0px 8px 0px 8px; position: relative; top: unset; width: 100%; } .framer-JGDAB .framer-opxne6 { width: 100%; } .framer-JGDAB .framer-aew7ak { flex: none; gap: 0px; height: min-content; justify-content: center; padding: 0px; width: 100%; } .framer-JGDAB .framer-7kmt7b, .framer-JGDAB .framer-8j40di, .framer-JGDAB .framer-zj5cz4, .framer-JGDAB .framer-189wyss, .framer-JGDAB .framer-zv3ek9, .framer-JGDAB .framer-16ouuem { gap: 16px; padding: 24px 0px 24px 0px; } .framer-JGDAB .framer-mo69is, .framer-JGDAB .framer-75fzs6, .framer-JGDAB .framer-6dn5eu, .framer-JGDAB .framer-e5pkrl, .framer-JGDAB .framer-1a86e2g, .framer-JGDAB .framer-1f8joj0 { width: 60px; } .framer-JGDAB .framer-pu82u0 { height: min-content; } .framer-JGDAB .framer-18w06ol { order: 11; padding: 40px 0px 40px 0px; } .framer-JGDAB .framer-1roelpp { gap: 24px 28px; grid-template-columns: repeat(2, minmax(50px, 1fr)); padding: 0px 28px 0px 28px; } .framer-JGDAB .framer-1lbdint, .framer-JGDAB .framer-15jfnd1, .framer-JGDAB .framer-nih0zx { gap: 16px; padding: 8px 0px 8px 0px; } .framer-JGDAB .framer-1kus204, .framer-JGDAB .framer-kbqm20, .framer-JGDAB .framer-w81gr, .framer-JGDAB .framer-hambji { height: var(--framer-aspect-ratio-supported, 48px); width: 48px; } .framer-JGDAB .framer-1oatcf2, .framer-JGDAB .framer-4mairz, .framer-JGDAB .framer-6np7wl, .framer-JGDAB .framer-pjqv9g { gap: 12px; } .framer-JGDAB .framer-ouk267 { gap: 16px; overflow: visible; padding: 8px 0px 8px 0px; } .framer-JGDAB .framer-1xjsbnb { width: 151px; } .framer-JGDAB .framer-p2t8l4 { width: 113%; } .framer-JGDAB .framer-ntlm5a { flex-direction: column; order: 12; padding: 80px 0px 20px 0px; } .framer-JGDAB .framer-dxrfmr { height: 111px; order: 0; top: 393px; } .framer-JGDAB .framer-2psaca { flex: none; gap: 40px; order: 1; padding: 0px 24px 0px 24px; width: 100%; } .framer-JGDAB .framer-o9fwrs { justify-content: center; padding: 8px; } .framer-JGDAB .framer-1fjugep-container, .framer-JGDAB .framer-1w6m3uq, .framer-JGDAB .framer-16ceqp9-container { order: 2; } .framer-JGDAB .framer-p0df82 { order: 13; overflow: hidden; } .framer-JGDAB .framer-d1mn6 { background-color: var(--token-65975183-42fb-404f-a721-c7878619061d, #ffffff); height: 100vh; padding: 0px; } .framer-JGDAB .framer-f2jm8v { background-color: var(--token-65975183-42fb-404f-a721-c7878619061d, #ffffff); overflow: hidden; padding: 0px 32px 0px 32px; z-index: 3; } .framer-JGDAB .framer-1c8o3uh { background-color: var(--token-65975183-42fb-404f-a721-c7878619061d, #ffffff); height: 448px; justify-content: flex-end; } .framer-JGDAB .framer-2lkz7b { height: 4px; } .framer-JGDAB .framer-vis24p { bottom: -114px; height: 105px; left: calc(50.00000000000002% - 181.62790697674419% / 2); top: unset; width: 182%; } .framer-JGDAB .framer-15urluc-container { height: 500px; } .framer-JGDAB .framer-1ow0ljx { height: 12px; } .framer-JGDAB .framer-16ubj6 { bottom: -34px; left: calc(50.23255813953491% - 139.53488372093022% / 2); top: -18px; width: 140%; } .framer-JGDAB .framer-cgwn2l { height: min-content; padding: 48px 32px 64px 32px; } .framer-JGDAB .framer-zxgjk3 { flex: none; flex-direction: column; gap: 40px; height: min-content; justify-content: center; } .framer-JGDAB .framer-1wsgbk5 { gap: 32px; width: 100%; } .framer-JGDAB .framer-1vr42wp { gap: 16px; padding: 0px; width: 100%; } .framer-JGDAB .framer-1sgd1i { padding: 12px 0px 0px 0px; } .framer-JGDAB .framer-rvjju2 { flex: none; width: 100%; } .framer-JGDAB .framer-m87gzc { gap: 16px 16px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-JGDAB .framer-5ellvk-container, .framer-JGDAB .framer-1v0xky1-container { height: var(--framer-aspect-ratio-supported, 27px); } .framer-JGDAB .framer-1tdn6qs { order: 4; } .framer-JGDAB .framer-1slifpw, .framer-JGDAB .framer-1svk4xt, .framer-JGDAB .framer-mwlfoy { order: 0; } .framer-JGDAB .framer-bau8p5 { order: 3; } .framer-JGDAB .framer-iapov8 { gap: 80px; order: 14; padding: 80px 32px 40px 32px; } .framer-JGDAB .framer-iralmo { height: var(--framer-aspect-ratio-supported, 50px); } .framer-JGDAB .framer-1df4m74 { bottom: -5px; height: var(--framer-aspect-ratio-supported, 50px); left: -6px; } .framer-JGDAB .framer-1yh3al5 { align-content: unset; align-items: unset; display: grid; gap: 22px 24px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(75px, 1fr)); grid-template-rows: repeat(2, min-content); justify-content: center; } .framer-JGDAB .framer-e53263 { align-self: start; gap: 0px; justify-content: center; justify-self: start; order: 1; } .framer-JGDAB .framer-h3nxq2 { align-self: start; gap: 8px; grid-column: span 2; justify-content: center; justify-self: center; order: 0; width: min-content; } .framer-JGDAB .framer-svffmz-container { height: 20px; width: 16px; } .framer-JGDAB .framer-mg6w9s { align-self: start; gap: 0px; justify-content: center; justify-self: end; order: 2; width: min-content; } .framer-JGDAB .framer-de8uv1 { order: 5; }}`,
      ]),
      (io = Te(no, ro, `framer-JGDAB`)),
      (io.displayName = `Page`),
      (io.defaultProps = { height: 14593.5, width: 1920 }),
      (ao = [
        {
          defaultValue: 100,
          maxValue: 900,
          minValue: 100,
          name: `Weight`,
          tag: `wght`,
        },
      ]),
      (oo = [
        {
          defaultValue: 400,
          maxValue: 700,
          minValue: 300,
          name: `Weight`,
          tag: `wght`,
        },
      ]),
      de(
        io,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Perpetua Regular`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/dsn8PWiynQoCKaC6MtbaPJCKs.woff2`,
              },
              {
                family: `Montserrat`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/WQEWGAOT5Y4ZIJZBMK7T5E3FXSE4KGYR/X4SXWKMX6HZVKZLTW363DK6FT6KM35TT/DPVLBFNJ4QU4LALI56JBIEBZHJEBGHQA.woff2`,
                variationAxes: ao,
                weight: `400`,
              },
              {
                family: `Red Rose`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/redrose/v24/QdVISTYiLBjouPgEUajvsfWwDtc3MH8ySvwDdzSsYUVUjg.woff2`,
                weight: `700`,
              },
              {
                family: `Red Rose`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/redrose/v24/QdVISTYiLBjouPgEUajvsfWwDtc3MH8yn_sDdzSsYUVUjg.woff2`,
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
                url: `https://fonts.gstatic.com/s/redrose/v24/QdVVSTYiLBjouPgEUbLhkwVoknQx.woff2`,
                variationAxes: oo,
                weight: `400`,
              },
            ],
          },
          ...ua,
          ...da,
          ...ma,
          ...ha,
          ...va,
          ...ba,
          ...Sa,
          ...Ca,
          ...wa,
          ...Ta,
          ...Ea,
          ...Da,
          ...Oa,
          ...U(He),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (so = {
        exports: {
          Props: {
            type: `tsType`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `reactComponent`,
            name: `Framerq2dk3BipV`,
            slots: [],
            annotations: {
              framerAutoSizeImages: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"LiSfdOU15":{"layout":["fixed","auto"]},"dZS61v7lZ":{"layout":["fixed","auto"]},"jIFZ85Jgy":{"layout":["fixed","auto"]},"hBNTufln9":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicWidth: `1920`,
              framerResponsiveScreen: ``,
              framerContractVersion: `1`,
              framerColorSyntax: `true`,
              framerIntrinsicHeight: `14593.5`,
              framerScrollSections: `{"s3WMO8M4V":{"pattern":":s3WMO8M4V","name":"top-nav"},"D40sWs3lC":{"pattern":":D40sWs3lC","name":"top-nav"},"JxIQAQa2s":{"pattern":":JxIQAQa2s","name":"banner"},"ne2lpUwVx":{"pattern":":ne2lpUwVx","name":"about-us-mob"},"K0LRjcQFn":{"pattern":":K0LRjcQFn","name":"about-us"},"K6rmaSrnp":{"pattern":":K6rmaSrnp","name":"our-services"},"haRYq660O":{"pattern":":haRYq660O","name":"offer-1"},"VNr_OVG1t":{"pattern":":VNr_OVG1t","name":"offer-trigger-2"},"ZEGJhNfTk":{"pattern":":ZEGJhNfTk","name":"offer-trigger-3"},"asHKOU9VK":{"pattern":":asHKOU9VK","name":"offer-trigger-4"},"cWq8E8N32":{"pattern":":cWq8E8N32","name":"offer-4"},"xMnl_Zm6f":{"pattern":":xMnl_Zm6f","name":"offer-trigger-5"},"gXgBojMP3":{"pattern":":gXgBojMP3","name":"offer-trigger-6"},"svp6JP1aG":{"pattern":":svp6JP1aG","name":"offer-trigger-7"},"L9PjcGOZ9":{"pattern":":L9PjcGOZ9","name":"culinary-expertise"},"Y7uwoUJZU":{"pattern":":Y7uwoUJZU","name":"contact-us"},"IDQiTArAF":{"pattern":":IDQiTArAF","name":"footer"},"t06iz6Ee5":{"pattern":":t06iz6Ee5","name":"about-us-mob-2"}}`,
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
              framerAcceptsLayoutTemplate: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
co();
export { so as __FramerMetadata__, io as default };
//# sourceMappingURL=FOee_JJW28bhwDVI0sX0Xj9RtHawy-q0I-s9JzSggNQ.DVOWeA5_.mjs.map
