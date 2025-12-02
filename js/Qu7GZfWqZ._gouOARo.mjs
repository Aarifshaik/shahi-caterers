import { __esmMin as e } from "./rolldown-runtime.BAw5_7tg.mjs";
import {
  Y as t,
  ae as n,
  init_jsx_runtime as r,
  init_npm_react_18_2 as i,
  init_ssg_sandbox_shims as a,
  l as o,
  npm_react_18_2_exports as s,
  p as c,
  pe as l,
  re as u,
  se as d,
  u as f,
  ue as p,
  window as m,
  x as h,
  ye as g,
} from "./react.5yPobhy_.mjs";
import {
  AnimatePresence as _,
  LayoutGroup as v,
  MotionConfigContext as y,
  init_framer_motion_5EXT2AMG as b,
  motion as x,
} from "./motion.B5kiQUnY.mjs";
import {
  ComponentViewportProvider as S,
  ControlType as C,
  Floating as ee,
  Image2 as te,
  Link as w,
  RenderTarget as T,
  RichText as E,
  SmartComponentScopedContainer as D,
  addFonts as O,
  addPropertyControls as k,
  cx as A,
  fontStore as j,
  getFonts as M,
  getFontsFromSharedStyle as N,
  getLoadingLazyAtYPosition as P,
  init_framer_BTRNGHWV as F,
  useActiveVariantCallback as ne,
  useComponentViewport as re,
  useLocaleInfo as ie,
  useOnVariantChange as ae,
  useOverlayState as oe,
  useVariantState as se,
  withCSS as I,
  withFX as ce,
} from "./framer.CK3DUZZB.mjs";
var le,
  ue,
  L,
  de = e(() => {
    (F(),
      j.loadFonts([
        `FS;Montserrat-semibold`,
        `FS;Montserrat-black`,
        `FS;Montserrat-black italic`,
        `FS;Montserrat-semibold italic`,
      ]),
      (le = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Montserrat`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/DELXRVKO253LHPYOBD6KD7EW3TJKXCXF/L6SILXET3P727LN5N75LL5PG77IET2IT/6DP3DAT2N5LSQGN5ISPRN63WPP32A54A.woff2`,
              weight: `600`,
            },
            {
              family: `Montserrat`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/M2RQDXLDLQ2S4ZZ66VQTDSO3OSHWKVY7/JAIF7WXHMOCSPDMQNJH4MHWPR2PHW2YE/C5NBF6PXS6YLHRF7TAQGFAEBX23GMCRA.woff2`,
              weight: `900`,
            },
            {
              family: `Montserrat`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/XJQZ5FAAHWM4Y24NF2Z7WYOSV6YPTE5O/EO2YIKJILBXPJTK6LHM7BXB3WCNBRFIW/3ITIUZWY6HV7DWK4WDWMNDJF4FUBLRZN.woff2`,
              weight: `900`,
            },
            {
              family: `Montserrat`,
              source: `fontshare`,
              style: `italic`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/NHQSXRPK2WZQNSVXVPHNEWQTX6ASEI3T/LQUMI7WZAOIVAXJCVJ7ABTISRT4ZYBQO/SOTTHSMCKKCT5M6IOCQJ5LOSJSXCUBMQ.woff2`,
              weight: `600`,
            },
          ],
        },
      ]),
      (ue = [
        `.framer-NVyRc .framer-styles-preset-33k92k:not(.rich-text-wrapper), .framer-NVyRc .framer-styles-preset-33k92k.rich-text-wrapper p { --framer-font-family: "Montserrat", "Montserrat Placeholder", sans-serif; --framer-font-family-bold: "Montserrat", sans-serif; --framer-font-family-bold-italic: "Montserrat", sans-serif; --framer-font-family-italic: "Montserrat", "Montserrat Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1659px) and (min-width: 810px) { .framer-NVyRc .framer-styles-preset-33k92k:not(.rich-text-wrapper), .framer-NVyRc .framer-styles-preset-33k92k.rich-text-wrapper p { --framer-font-family: "Montserrat", "Montserrat Placeholder", sans-serif; --framer-font-family-bold: "Montserrat", sans-serif; --framer-font-family-bold-italic: "Montserrat", sans-serif; --framer-font-family-italic: "Montserrat", "Montserrat Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-NVyRc .framer-styles-preset-33k92k:not(.rich-text-wrapper), .framer-NVyRc .framer-styles-preset-33k92k.rich-text-wrapper p { --framer-font-family: "Montserrat", "Montserrat Placeholder", sans-serif; --framer-font-family-bold: "Montserrat", sans-serif; --framer-font-family-bold-italic: "Montserrat", sans-serif; --framer-font-family-italic: "Montserrat", "Montserrat Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (L = `framer-NVyRc`));
  }),
  R,
  z,
  B,
  V,
  H = e(() => {
    (F(),
      j.loadFonts([
        `FS;Montserrat-variable`,
        `FS;Montserrat-variableVF=IndnaHQiIDMwMA==`,
        `FS;Montserrat-variableVF=IndnaHQiIDMwMA==`,
        `FS;Montserrat-variableVF=IndnaHQiIDMwMA==`,
      ]),
      (R = [{ defaultValue: 100, maxValue: 900, minValue: 100, name: `Weight`, tag: `wght` }]),
      (z = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Montserrat`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/WQEWGAOT5Y4ZIJZBMK7T5E3FXSE4KGYR/X4SXWKMX6HZVKZLTW363DK6FT6KM35TT/DPVLBFNJ4QU4LALI56JBIEBZHJEBGHQA.woff2`,
              variationAxes: R,
              weight: `400`,
            },
          ],
        },
      ]),
      (B = [
        `.framer-DDHw9 .framer-styles-preset-1g29qxt:not(.rich-text-wrapper), .framer-DDHw9 .framer-styles-preset-1g29qxt.rich-text-wrapper p { --framer-font-family: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-bold: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-bold-italic: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-italic: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 300; --framer-font-variation-axes-bold: "wght" 300; --framer-font-variation-axes-bold-italic: "wght" 300; --framer-font-variation-axes-italic: "wght" 300; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1659px) and (min-width: 810px) { .framer-DDHw9 .framer-styles-preset-1g29qxt:not(.rich-text-wrapper), .framer-DDHw9 .framer-styles-preset-1g29qxt.rich-text-wrapper p { --framer-font-family: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-bold: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-bold-italic: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-italic: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 300; --framer-font-variation-axes-bold: "wght" 300; --framer-font-variation-axes-bold-italic: "wght" 300; --framer-font-variation-axes-italic: "wght" 300; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-DDHw9 .framer-styles-preset-1g29qxt:not(.rich-text-wrapper), .framer-DDHw9 .framer-styles-preset-1g29qxt.rich-text-wrapper p { --framer-font-family: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-bold: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-bold-italic: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-family-italic: "Montserrat Variable", "Montserrat Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 300; --framer-font-variation-axes-bold: "wght" 300; --framer-font-variation-axes-bold-italic: "wght" 300; --framer-font-variation-axes-italic: "wght" 300; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 8px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (V = `framer-DDHw9`));
  });
function U(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  W,
  Se,
  Ce,
  we,
  Te,
  Ee,
  G,
  De = e(() => {
    (r(),
      F(),
      b(),
      i(),
      de(),
      H(),
      (fe = ce(x.div)),
      (pe = { fjL_3fJ5D: { hover: !0, pressed: !0 } }),
      (me = [`fjL_3fJ5D`, `sxCEZ_HRS`, `PivlsmUvT`, `Aynqy9u0S`, `Bd34uQ2yQ`]),
      (he = `framer-eOREd`),
      (ge = {
        Aynqy9u0S: `framer-v-q19hal`,
        Bd34uQ2yQ: `framer-v-143gzj5`,
        fjL_3fJ5D: `framer-v-1kk3e2s`,
        PivlsmUvT: `framer-v-jrum0l`,
        sxCEZ_HRS: `framer-v-fkirjo`,
      }),
      (_e = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ve = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (ye = { opacity: 1, rotate: 360, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 }),
      (be = (e, t) => `translateX(-50%) ${t}`),
      (xe = ({ value: e, children: t }) => {
        let n = u(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (W = x.create(h)),
      (Se = {
        Default: `fjL_3fJ5D`,
        Disabled: `PivlsmUvT`,
        Error: `Bd34uQ2yQ`,
        Loading: `sxCEZ_HRS`,
        Success: `Aynqy9u0S`,
      }),
      (Ce = ({ height: e, id: t, width: n, ...r }) => ({ ...r, variant: Se[r.variant] ?? r.variant ?? `fjL_3fJ5D` })),
      (we = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Te = t(function (e, t) {
        let r = l(null),
          i = t ?? r,
          a = n(),
          { activeLocale: o, setLocale: s } = ie();
        re();
        let { style: u, className: d, layoutId: p, variant: m, ...g } = Ce(e),
          {
            baseVariant: _,
            classNames: y,
            clearLoadingGesture: b,
            gestureHandlers: S,
            gestureVariant: C,
            isLoading: ee,
            setGestureState: te,
            setVariant: w,
            variants: T,
          } = se({
            cycleOrder: me,
            defaultVariant: `fjL_3fJ5D`,
            enabledGestures: pe,
            ref: i,
            variant: m,
            variantClassNames: ge,
          }),
          D = we(e, T),
          O = [L, V],
          k = A(he, ...O),
          j = () => _ !== `sxCEZ_HRS`,
          M = () => _ === `sxCEZ_HRS`;
        return c(v, {
          id: p ?? a,
          children: c(W, {
            animate: T,
            initial: !1,
            children: c(xe, {
              value: _e,
              children: f(x.button, {
                ...g,
                ...S,
                className: A(k, `framer-1kk3e2s`, d, y),
                "data-framer-name": `Default`,
                "data-reset": `button`,
                layoutDependency: D,
                layoutId: `fjL_3fJ5D`,
                ref: i,
                style: {
                  backgroundColor: `var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, rgb(233, 221, 204))`,
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  opacity: 1,
                  ...u,
                },
                variants: {
                  "fjL_3fJ5D-hover": {
                    backgroundColor: `var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, rgb(249, 243, 240))`,
                    opacity: 1,
                  },
                  "fjL_3fJ5D-pressed": {
                    backgroundColor: `var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, rgb(249, 243, 240))`,
                    opacity: 1,
                  },
                  Aynqy9u0S: { opacity: 1 },
                  Bd34uQ2yQ: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                  PivlsmUvT: { opacity: 0.5 },
                },
                ...U(
                  {
                    "fjL_3fJ5D-hover": { "data-framer-name": void 0 },
                    "fjL_3fJ5D-pressed": { "data-framer-name": void 0 },
                    Aynqy9u0S: { "data-framer-name": `Success` },
                    Bd34uQ2yQ: { "data-framer-name": `Error` },
                    PivlsmUvT: { "data-framer-name": `Disabled` },
                    sxCEZ_HRS: { "data-framer-name": `Loading` },
                  },
                  _,
                  C,
                ),
                children: [
                  j() &&
                    c(E, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: c(x.p, {
                          className: `framer-styles-preset-33k92k`,
                          "data-styles-preset": `JTrlLj3jx`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36)))`,
                          },
                          children: `Submit`,
                        }),
                      }),
                      className: `framer-1e3iwwe`,
                      fonts: [`Inter`],
                      layoutDependency: D,
                      layoutId: `Cn2Uar1bC`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      variants: {
                        "fjL_3fJ5D-pressed": {
                          "--extracted-r6o4lv": `var(--token-e6740672-e51a-4a94-8ab3-ba42a8aca3cb, rgb(140, 95, 69))`,
                        },
                        Bd34uQ2yQ: { "--extracted-r6o4lv": `rgb(250, 62, 62)` },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...U(
                        {
                          "fjL_3fJ5D-pressed": {
                            children: c(h, {
                              children: c(x.p, {
                                className: `framer-styles-preset-33k92k`,
                                "data-styles-preset": `JTrlLj3jx`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6740672-e51a-4a94-8ab3-ba42a8aca3cb, rgb(140, 95, 69)))`,
                                },
                                children: `Submit`,
                              }),
                            }),
                          },
                          Aynqy9u0S: {
                            children: c(h, {
                              children: c(x.p, {
                                className: `framer-styles-preset-33k92k`,
                                "data-styles-preset": `JTrlLj3jx`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36)))`,
                                },
                                children: `Thank you`,
                              }),
                            }),
                          },
                          Bd34uQ2yQ: {
                            children: c(h, {
                              children: c(x.p, {
                                className: `framer-styles-preset-1g29qxt`,
                                "data-styles-preset": `kv_coXiBH`,
                                style: { "--framer-text-color": `var(--extracted-r6o4lv, rgb(250, 62, 62))` },
                                children: `Something went wrong`,
                              }),
                            }),
                          },
                        },
                        _,
                        C,
                      ),
                    }),
                  M() &&
                    c(x.div, {
                      className: `framer-wbeshb`,
                      "data-framer-name": `Spinner`,
                      layoutDependency: D,
                      layoutId: `xVVvYoAuq`,
                      style: {
                        mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                        WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                      },
                      children: c(fe, {
                        __framer__loop: ye,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: `loop`,
                        __framer__loopTransition: ve,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-18ceho9`,
                        "data-framer-name": `Conic`,
                        layoutDependency: D,
                        layoutId: `ob_8fwcMI`,
                        style: {
                          background: `conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)`,
                          backgroundColor: `rgb(68, 204, 255)`,
                          mask: `none`,
                          WebkitMask: `none`,
                        },
                        variants: {
                          sxCEZ_HRS: {
                            background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                            WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                          },
                        },
                        children: c(x.div, {
                          className: `framer-1t2yfok`,
                          "data-framer-name": `Rounding`,
                          layoutDependency: D,
                          layoutId: `AOzTYmvLp`,
                          style: {
                            backgroundColor: `rgb(255, 255, 255)`,
                            borderBottomLeftRadius: 1,
                            borderBottomRightRadius: 1,
                            borderTopLeftRadius: 1,
                            borderTopRightRadius: 1,
                          },
                          transformTemplate: be,
                        }),
                      }),
                    }),
                ],
              }),
            }),
          }),
        });
      })),
      (Ee = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-eOREd.framer-gi7qik, .framer-eOREd .framer-gi7qik { display: block; }`,
        `.framer-eOREd.framer-1kk3e2s { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 240px; }`,
        `.framer-eOREd .framer-1e3iwwe { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
        `.framer-eOREd .framer-wbeshb { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
        `.framer-eOREd .framer-18ceho9 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
        `.framer-eOREd .framer-1t2yfok { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
        `.framer-eOREd.framer-v-fkirjo.framer-1kk3e2s, .framer-eOREd.framer-v-jrum0l.framer-1kk3e2s, .framer-eOREd.framer-v-q19hal.framer-1kk3e2s, .framer-eOREd.framer-v-143gzj5.framer-1kk3e2s { cursor: unset; }`,
        `.framer-eOREd.framer-v-fkirjo .framer-18ceho9 { overflow: hidden; }`,
        ...ue,
        ...B,
      ]),
      (G = I(Te, Ee, `framer-eOREd`)),
      (G.displayName = `Button 3`),
      (G.defaultProps = { height: 48, width: 240 }),
      k(G, {
        variant: {
          options: [`fjL_3fJ5D`, `sxCEZ_HRS`, `PivlsmUvT`, `Aynqy9u0S`, `Bd34uQ2yQ`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: C.Enum,
        },
      }),
      O(
        G,
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
          ...N(le),
          ...N(z),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function Oe(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe = e(() => {
    (a(),
      (ke = class {
        constructor() {
          ((this.isRunning = !1),
            (this.value = 0),
            (this.from = 0),
            (this.to = 0),
            (this.duration = 0),
            (this.currentTime = 0));
        }
        advance(e) {
          var t;
          if (!this.isRunning) return;
          let n = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let t = Oe(0, this.currentTime / this.duration, 1);
            n = t >= 1;
            let r = n ? 1 : this.easing(t);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = (function (e, t, n, r) {
                  return (function (e, t, n) {
                    return (1 - n) * e + n * t;
                  })(e, t, 1 - Math.exp(-n * r));
                })(this.value, this.to, 60 * this.lerp, e)),
                Math.round(this.value) === this.to && ((this.value = this.to), (n = !0)))
              : ((this.value = this.to), (n = !0));
          (n && this.stop(), (t = this.onUpdate) == null || t.call(this, this.value, n));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (Ae = class {
        constructor({ wrapper: e, content: t, autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.width = 0),
            (this.height = 0),
            (this.scrollWidth = 0),
            (this.scrollHeight = 0),
            (this.resize = () => {
              (this.onWrapperResize(), this.onContentResize());
            }),
            (this.onWrapperResize = () => {
              this.wrapper === m
                ? ((this.width = m.innerWidth), (this.height = m.innerHeight))
                : this.wrapper instanceof HTMLElement &&
                  ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
            }),
            (this.onContentResize = () => {
              this.wrapper === m
                ? ((this.scrollHeight = this.content.scrollHeight), (this.scrollWidth = this.content.scrollWidth))
                : this.wrapper instanceof HTMLElement &&
                  ((this.scrollHeight = this.wrapper.scrollHeight), (this.scrollWidth = this.wrapper.scrollWidth));
            }),
            (this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  (clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t)));
                };
              })(this.resize, r)),
              this.wrapper === m
                ? m.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          var e, t;
          ((e = this.wrapperResizeObserver) == null || e.disconnect(),
            (t = this.contentResizeObserver) == null || t.disconnect(),
            m.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (je = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          var n;
          return (
            ((n = this.events[e]) != null && n.push(t)) || (this.events[e] = [t]),
            () => {
              var n;
              this.events[e] = (n = this.events[e])?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          var n;
          this.events[e] = (n = this.events[e])?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (Me = 100 / 6),
      (Ne = class {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
          ((this.lastDelta = { x: 0, y: 0 }),
            (this.windowWidth = 0),
            (this.windowHeight = 0),
            (this.onTouchStart = (e) => {
              let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
              ((this.touchStart.x = t),
                (this.touchStart.y = n),
                (this.lastDelta = { x: 0, y: 0 }),
                this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
            }),
            (this.onTouchMove = (e) => {
              var t, n, r, i;
              let { clientX: a, clientY: o } = e.targetTouches ? e.targetTouches[0] : e,
                s = -(a - ((n = (t = this.touchStart)?.x) ?? 0)) * this.touchMultiplier,
                c = -(o - ((i = (r = this.touchStart)?.y) ?? 0)) * this.touchMultiplier;
              ((this.touchStart.x = a),
                (this.touchStart.y = o),
                (this.lastDelta = { x: s, y: c }),
                this.emitter.emit(`scroll`, { deltaX: s, deltaY: c, event: e }));
            }),
            (this.onTouchEnd = (e) => {
              this.emitter.emit(`scroll`, { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: e });
            }),
            (this.onWheel = (e) => {
              let { deltaX: t, deltaY: n, deltaMode: r } = e;
              ((t *= r === 1 ? Me : r === 2 ? this.windowWidth : 1),
                (n *= r === 1 ? Me : r === 2 ? this.windowHeight : 1),
                (t *= this.wheelMultiplier),
                (n *= this.wheelMultiplier),
                this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
            }),
            (this.onWindowResize = () => {
              ((this.windowWidth = m.innerWidth), (this.windowHeight = m.innerHeight));
            }),
            (this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new je()),
            m.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            m.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel),
            this.element.removeEventListener(`touchstart`, this.onTouchStart),
            this.element.removeEventListener(`touchmove`, this.onTouchMove),
            this.element.removeEventListener(`touchend`, this.onTouchEnd));
        }
      }),
      (Pe = class {
        constructor({
          wrapper: e = m,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: r = n,
          smoothWheel: i = !0,
          syncTouch: a = !1,
          syncTouchLerp: o = 0.075,
          touchInertiaMultiplier: s = 35,
          duration: c,
          easing: l = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: u = 0.1,
          infinite: d = !1,
          orientation: f = `vertical`,
          gestureOrientation: p = `vertical`,
          touchMultiplier: h = 1,
          wheelMultiplier: g = 1,
          autoResize: _ = !0,
          prevent: v,
          virtualScroll: y,
          __experimental__naiveDimensions: b = !1,
        } = {}) {
          ((this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.userData = {}),
            (this.lastVelocity = 0),
            (this.velocity = 0),
            (this.direction = 0),
            (this.onPointerDown = (e) => {
              e.button === 1 && this.reset();
            }),
            (this.onVirtualScroll = (e) => {
              if (typeof this.options.virtualScroll == `function` && !1 === this.options.virtualScroll(e)) return;
              let { deltaX: t, deltaY: n, event: r } = e;
              if ((this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }), r.ctrlKey)) return;
              let i = r.type.includes(`touch`),
                a = r.type.includes(`wheel`);
              if (
                ((this.isTouching = r.type === `touchstart` || r.type === `touchmove`),
                this.options.syncTouch && i && r.type === `touchstart` && !this.isStopped && !this.isLocked)
              )
                return void this.reset();
              let o = t === 0 && n === 0,
                s =
                  (this.options.gestureOrientation === `vertical` && n === 0) ||
                  (this.options.gestureOrientation === `horizontal` && t === 0);
              if (o || s) return;
              let c = r.composedPath();
              c = c.slice(0, c.indexOf(this.rootElement));
              let l = this.options.prevent;
              if (
                c.find((e) => {
                  var t, n, r, o, s;
                  return (
                    e instanceof Element &&
                    ((typeof l == `function` && l?.(e)) ||
                      (t = e.hasAttribute)?.call(e, `data-lenis-prevent`) ||
                      (i && (n = e.hasAttribute)?.call(e, `data-lenis-prevent-touch`)) ||
                      (a && (r = e.hasAttribute)?.call(e, `data-lenis-prevent-wheel`)) ||
                      ((o = e.classList)?.contains(`lenis`) && !(s = e.classList)?.contains(`lenis-stopped`)))
                  );
                })
              )
                return;
              if (this.isStopped || this.isLocked) return void r.preventDefault();
              if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a)))
                return ((this.isScrolling = `native`), void this.animate.stop());
              r.preventDefault();
              let u = n;
              this.options.gestureOrientation === `both`
                ? (u = Math.abs(n) > Math.abs(t) ? n : t)
                : this.options.gestureOrientation === `horizontal` && (u = t);
              let d = i && this.options.syncTouch,
                f = i && r.type === `touchend` && Math.abs(u) > 5;
              (f && (u = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + u,
                  Object.assign(
                    { programmatic: !1 },
                    d
                      ? { lerp: f ? this.options.syncTouchLerp : 1 }
                      : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing },
                  ),
                ));
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (!1 === this.isScrolling || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity), (this.velocity = 0), (this.isScrolling = !1), this.emit());
                    }, 400)));
              }
            }),
            (m.lenisVersion = `1.1.9`),
            (e && e !== document.documentElement && e !== document.body) || (e = m),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: r,
              smoothWheel: i,
              syncTouch: a,
              syncTouchLerp: o,
              touchInertiaMultiplier: s,
              duration: c,
              easing: l,
              lerp: u,
              infinite: d,
              gestureOrientation: p,
              orientation: f,
              touchMultiplier: h,
              wheelMultiplier: g,
              autoResize: _,
              prevent: v,
              virtualScroll: y,
              __experimental__naiveDimensions: b,
            }),
            (this.animate = new ke()),
            (this.emitter = new je()),
            (this.dimensions = new Ae({ wrapper: e, content: t, autoResize: _ })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown, !1),
            (this.virtualScroll = new Ne(r, { touchMultiplier: h, wheelMultiplier: g })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName());
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          ((this.time = e), this.animate.advance(0.001 * t));
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: i = this.options.duration,
            easing: a = this.options.easing,
            lerp: o = this.options.lerp,
            onStart: s,
            onComplete: c,
            force: l = !1,
            programmatic: u = !0,
            userData: d = {},
          } = {},
        ) {
          if ((!this.isStopped && !this.isLocked) || l) {
            if (typeof e == `string` && [`top`, `left`, `start`].includes(e)) e = 0;
            else if (typeof e == `string` && [`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e instanceof HTMLElement && e != null && e.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== m) {
                  let e = this.rootElement.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (
              typeof e == `number` &&
              ((e += t),
              (e = Math.round(e)),
              this.options.infinite
                ? u && (this.targetScroll = this.animatedScroll = this.scroll)
                : (e = Oe(0, e, this.limit)),
              e !== this.targetScroll)
            ) {
              if (((this.userData = d), n))
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  c?.(this),
                  void (this.userData = {})
                );
              (u || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: i,
                  easing: a,
                  lerp: o,
                  onStart: () => {
                    (r && (this.isLocked = !0), (this.isScrolling = `smooth`), s?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      u && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        c?.(this),
                        (this.userData = {}),
                        this.preventNextNativeScrollEvent()));
                  },
                }));
            }
          }
        }
        preventNextNativeScrollEvent() {
          ((this.__preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              delete this.__preventNextNativeScrollEvent;
            }));
        }
        get rootElement() {
          return this.options.wrapper === m ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e && ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e && ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, ``).trim();
        }
      }));
  });
function Ie(e) {
  let { intensity: t } = e,
    n = l(null);
  return (
    p(() => {
      n.current && n.current.scrollTo(0, { immediate: !0 });
    }, [n]),
    p(() => {
      let e = document.getElementById(`overlay`);
      if (e) {
        let t = () => {
            let t = m.getComputedStyle(document.documentElement),
              n = t.overflow === `hidden`;
            n && e.setAttribute(`data-lenis-prevent`, `true`);
          },
          n = new MutationObserver((e) => {
            for (let n of e) n.type === `attributes` && n.attributeName === `style` && t();
          });
        return (
          n.observe(document.documentElement, { attributes: !0, attributeFilter: [`style`] }),
          t(),
          () => {
            n.disconnect();
          }
        );
      }
    }, []),
    p(() => {
      let e = document.getElementsByTagName(`*`);
      for (let t = 0; t < e.length; t++) {
        let n = e[t],
          r = m.getComputedStyle(n);
        r.getPropertyValue(`overflow`) === `auto` && n.setAttribute(`data-lenis-prevent`, `true`);
      }
    }, []),
    p(() => {
      n.current = new Pe({ duration: t / 10 });
      let e = (t) => {
        n.current && (n.current.raf(t), requestAnimationFrame(e));
      };
      return (
        requestAnimationFrame(e),
        () => {
          n.current &&= (n.current.destroy(), null);
        }
      );
    }, []),
    p(() => {
      let e = document.createElement(`style`);
      return (
        (e.textContent = `
html.lenis {
height: auto;
}
.lenis.lenis-smooth {

scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {

overscroll-behavior: contain;
}
.lenis.lenis-stopped {

overflow: hidden;
}
.lenis.lenis-scrolling iframe {

pointer-events: none;
}
`),
        document.head.appendChild(e),
        () => {
          document.head.removeChild(e);
        }
      );
    }, []),
    p(() => {
      let e = [...document.querySelectorAll(`a[href]`)]
          .filter((e) => e.href.includes(`#`))
          .map((e) => {
            let t = `#${e.href.split(`#`).pop()}`,
              n = decodeURIComponent(t),
              r = 0,
              i = document.querySelector(n);
            return (
              i && (r = parseInt(m.getComputedStyle(i).scrollMarginTop)),
              { href: t, scrollMargin: r, anchorElement: e }
            );
          }),
        t = (e, t, r) => {
          (e.preventDefault(), n.current.scrollTo(t, { offset: -r }));
        },
        r = e.map(
          ({ href: e, scrollMargin: n }) =>
            (r) =>
              t(r, e, n),
        );
      return (
        e.forEach(({ anchorElement: e }, t) => {
          e.addEventListener(`click`, r[t]);
        }),
        () => {
          e.forEach(({ anchorElement: e }, t) => {
            e.removeEventListener(`click`, r[t]);
          });
        }
      );
    }, [n]),
    c(o, {})
  );
}
var Le = e(() => {
    (a(),
      r(),
      F(),
      Fe(),
      i(),
      (Ie.displayName = `Smooth Scroll`),
      k(Ie, {
        intensity: {
          title: `Intensity`,
          type: C.Number,
          defaultValue: 10,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  Re,
  ze,
  Be,
  Ve = e(() => {
    (r(),
      i(),
      (Re = { width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }),
      (ze = {
        ...Re,
        borderRadius: 6,
        background: `rgba(149, 149, 149, 0.1)`,
        border: `1px dashed rgba(149, 149, 149, 0.15)`,
        color: `#a5a5a5`,
        flexDirection: `column`,
      }),
      (Be = t((e, t) => c(`div`, { style: ze, ref: t }))));
  }),
  He,
  Ue,
  We = e(() => {
    Ue = (e) => {
      if (!He) {
        let t = function (t, n) {
          return e.createElement(
            `svg`,
            {
              width: `100%`,
              height: `1.5em`,
              strokeWidth: 1.5,
              viewBox: `0 0 24 24`,
              fill: `none`,
              xmlns: `http://www.w3.org/2000/svg`,
              color: `currentColor`,
              ref: n,
              ...t,
            },
            e.createElement(`path`, {
              d: `M3 9.5L12 4l9 5.5M19 13v6.4a.6.6 0 01-.6.6H5.6a.6.6 0 01-.6-.6V13`,
              stroke: `currentColor`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
          );
        };
        He = e.forwardRef(t);
      }
      return He;
    };
  });
function Ge(e, t, n = ``, r, i) {
  let a = d(() => {
      if (n == null || n?.length === 0) return null;
      let t = n.toLowerCase().replace(/-|\s/g, ``);
      var r;
      let a = (r = i[t]) ?? qe(e, t);
      return a;
    }, [r, n]),
    o = t ? r : a;
  return o;
}
var Ke,
  qe,
  Je = e(() => {
    (i(),
      F(),
      (Ke = {
        onClick: { type: C.EventHandler },
        onMouseDown: { type: C.EventHandler },
        onMouseUp: { type: C.EventHandler },
        onMouseEnter: { type: C.EventHandler },
        onMouseLeave: { type: C.EventHandler },
      }),
      (qe = (e, t) => e.find((e) => e.toLowerCase().includes(t))));
  });
function K(e) {
  let {
      color: t,
      selectByList: n,
      iconSearch: r,
      iconSelection: i,
      onClick: a,
      onMouseDown: o,
      onMouseUp: u,
      onMouseEnter: d,
      onMouseLeave: f,
      mirrored: m,
    } = e,
    h = l(!1),
    _ = Ge(Ye, n, r, i, Ze),
    [v, y] = g(_ === `Home` ? Ue(s) : null);
  async function b() {
    try {
      // let e = `${Xe}${_}.js@0.0.11`,
      let e = `../assets/icons/${_}.js`,
        t = await import(e);
      h.current && y(t.default(s));
    } catch {
      h.current && y(null);
    }
  }
  p(
    () => (
      (h.current = !0),
      b(),
      () => {
        h.current = !1;
      }
    ),
    [_],
  );
  let x = T.current() === T.canvas,
    S = x ? c(Be, {}) : null;
  return c(`div`, {
    style: { display: `contents` },
    onClick: a,
    onMouseEnter: d,
    onMouseLeave: f,
    onMouseDown: o,
    onMouseUp: u,
    children: v
      ? c(v, {
          size: `100$%`,
          style: { width: `100%`, height: `100%`, transform: m ? `scale(-1, 1)` : void 0 },
          color: t,
        })
      : S,
  });
}
var Ye,
  Xe,
  Ze,
  Qe = e(() => {
    (r(),
      i(),
      F(),
      Ve(),
      We(),
      Je(),
      (Ye =
        `Accessibility.AccessibilitySign.AccessibilityTech.Activity.AddCircledOutline.AddDatabaseScript.AddFolder.AddFrame.AddHexagon.AddKeyframe.AddKeyframeAlt.AddKeyframes.AddLens.AddPage.AddPinAlt.AddSelection.AddSquare.AddToCart.AddUser.Airplane.AirplaneHelix.AirplaneHelix45Deg.AirplaneOff.AirplaneRotation.Airplay.Alarm.Album.AlbumCarousel.AlbumList.AlbumOpen.AlignBottomBox.AlignCenter.AlignJustify.AlignLeft.AlignLeftBox.AlignRight.AlignRightBox.AlignTopBox.Antenna.AntennaOff.AntennaSignal.AppNotification.Apple.AppleHalf.AppleHalfAlt.AppleImac2021.AppleImac2021Side.AppleSwift.ArSymbol.Archery.Archive.AreaSearch.ArrowArchery.ArrowDown.ArrowDownCircled.ArrowLeft.ArrowLeftCircled.ArrowRight.ArrowRightCircled.ArrowSeparate.ArrowUnion.ArrowUnionVertical.ArrowUp.ArrowUpCircled.Asana.Attachment.AutoFlash.Bag.BasketBall.BasketBallAlt.BasketballField.Battery25.Battery50.Battery75.BatteryCharging.BatteryEmpty.BatteryFull.BatteryIndicator.BatteryWarning.BeachBag.BeachBagBig.Bell.BellNotification.BellOff.Bicycle.Bin.BinAdd.BinFull.BinHalf.BinMinus.Bluetooth.Bold.BoldSquareOutline.BookmarkCircled.BookmarkEmpty.BorderBl.BorderBottom.BorderBr.BorderInner.BorderLeft.BorderOut.BorderRight.BorderTl.BorderTop.BorderTr.BounceLeft.BounceRight.BowlingBall.Box.BoxIso.BoxingGlove.BubbleDownload.BubbleError.BubbleIncome.BubbleOutcome.BubbleSearch.BubbleStar.BubbleUpload.BubbleWarning.Building.BusOutline.BusStop.Calculator.Calendar.Camera.Cancel.CarOutline.Cart.CartAlt.Cash.Cell4X4.CenterAlign.ChatAdd.ChatBubble.ChatBubbleCheck.ChatBubbleCheck1.ChatBubbleEmpty.ChatBubbleError.ChatBubbleQuestion.ChatBubbleTranslate.ChatBubbleWarning.ChatLines.ChatRemove.Check.CheckCircledOutline.Chocolate.Chromecast.ChromecastActive.Church.ChurchAlt.CinemaOld.Circle.City.ClockOutline.Closet.Cloud.CloudBookAlt.CloudCheck.CloudDesync.CloudDownload.CloudError.CloudSunny.CloudSync.CloudUpload.Code.Codepen.Coin.CollageFrame.Collapse.ColorFilter.ColorPicker.ColorPickerEmpty.Combine.CompactDisc.Compress.CompressLines.Computer.ControlSlider.Copy.Copyright.CornerBottomLeft.CornerBottomRight.CornerTopLeft.CornerTopRight.Cpu.CpuWarning.CrackedEgg.CreativeCommons.CreditCard.CreditCard2.Crop.CropRotateBl.CropRotateBr.CropRotateTl.CropRotateTr.Css3.CursorPointer.Cut.CutAlt.Cycling.DashFlag.Dashboard.DashboardDots.DashboardSpeed.DataTransferBoth.DataTransferCheck.DataTransferDown.DataTransferUp.DataTransferWarning.DatabaseBackup.DatabaseExport.DatabaseMonitor.DatabaseRestore.DatabaseScript.DatabaseSettings.DatabaseStar.DatabaseStats.Db.DbCheck.DbError.DbSearch.DbStar.DbWarning.DeCompress.DeleteCircledOutline.DesignPencil.Dialpad.Display4K.DivideSelection1.DivideSelection2.DocSearch.DocSearchAlt.DocStar.DocStarAlt.Dollar.DomoticIssue.Donate.DoubleCheck.DownRoundArrow.Download.DragHandGesture.Drawer.Dribbble.Droplet.DropletHalf.EaseIn.EaseInControlPoint.EaseInOut.EaseOut.EaseOutControlPoint.Edit.EditPencil.Egg.Eject.ElectronicsChip.Emoji.EmojiBall.EmojiBlinkLeft.EmojiBlinkRight.EmojiLookBottom.EmojiLookLeft.EmojiLookRight.EmojiLookTop.EmojiQuite.EmojiReally.EmojiSad.EmojiSatisfied.EmojiSingLeft.EmojiSingLeftNote.EmojiSingRight.EmojiSingRightNote.EmojiSurprise.EmojiSurpriseAlt.EmojiTalkingAngry.EmojiTalkingHappy.EmojiThinkLeft.EmojiThinkRight.EmptyPage.Enlarge.EnlargeRoundArrow.Euro.EuroSquare.EvCharge.EvChargeAlt.EvPlug.EvPlugCharging.EvPlugError.EvStation.Exclude.Expand.ExpandLines.EyeAlt.EyeClose.EyeEmpty.EyeOff.FaceId.Facebook.FacebookSquared.Farm.FastArrowDown.FastArrowDownBox.FastArrowLeft.FastArrowLeftBox.FastArrowRight.FastArrowRightBox.FastArrowTop.FastArrowUpBox.FastBottomCircle.FastLeftCircle.FastRightCircle.FastTopCircle.Female.Figma.FileNotFound.Filter.FilterAlt.Finder.Fingerprint.FingerprintCircled.FingerprintCircledOk.FingerprintPhone.FingerprintScan.FingerprintSquared.Fishing.Flare.Flash.FlashOff.Flip.FlipReverse.Flower.Fog.Folder.FolderAlert.FontSize.Football.FootballBall.ForwardOutline.Frame.FrameAlt.FrameAltEmpty.FrameSelect.FrameSimple.FrameTool.Fridge.Fx.Garage.Gas.GasTank.GasTankDrop.Gift.GitBranch.GitCommit.GitHub.GitHubOutline.GitLabFull.GitMerge.GlassEmpty.GlassHalf.GlassHalfAlt.Glasses.Golf.Google.GoogleCircled.GoogleDocs.GoogleDrive.GoogleDriveCheck.GoogleDriveSync.GoogleDriveWarning.GoogleHome.GoogleOne.Gps.GraphDown.GraphUp.GridAdd.GridMinus.GridRemove.Group.Gym.HalfMoon.HandBrake.Handbag.HardDrive.Hat.Hd.Hdr.Headset.HeadsetCharge.HeadsetHelp.HeadsetIssue.HealthShield.Healthcare.Heart.HeavyRain.Heptagon.HerSlips.HesaWarningOutline.Hexagon.HexagonAlt.HighPriority.HistoricShield.HistoricShieldAlt.Home.HomeAlt.HomeAltSlim.HomeAltSlimHoriz.HomeHospital.HomeSimple.HomeSimpleDoor.HomeUser.Hospital.HospitalSign.Hourglass.Html5.Iconoir.Import.Industry.InfoEmpty.InputField.InputSearch.Instagram.Intersect.IntersectAlt.IosSettings.IrisScan.Italic.ItalicSquareOutline.Journal.JournalPage.KeyAlt.KeyAltBack.KeyAltMinus.KeyAltPlus.KeyAltRemove.Keyframe.KeyframeAlignCenter.KeyframePosition.Keyframes.KeyframesCouple.LabelOutline.Lamp.Language.Laptop.LaptopCharging.LaptopFix.LaptopIssue.LargeSuitcase.LayoutLeft.LayoutRight.Leaderboard.LeaderboardStar.LeftRoundArrow.Lens.Lifebelt.LightBulb.LightBulbOff.LightBulbOn.LineSpace.Linear.Link.LinkedIn.List.LoadActionFloppy.Lock.LockKey.LogDenied.LogIn.LogOut.LongArrowDownLeft.LongArrowDownRight.LongArrowLeftDown.LongArrowLeftUp.LongArrowRightDown.LongArrowRightUp.LongArrowRightUp1.LongArrowUpLeft.LongArrowUpRight.LotOfCash.MacControlKey.MacDock.MacOptionKey.MacOsWindow.Mail.MailOpened.Male.Map.MapIssue.MapsArrow.MapsArrowDiagonal.MapsArrowIssue.MapsGoStraight.MapsTurnBack.MapsTurnLeft.MapsTurnRight.MaskSquare.Maximize.Medal.Medal1St.Medium.Megaphone.Menu.MenuScale.Message.MessageAlert.MessageText.Metro.Mic.MicAdd.MicCheck.MicMute.MicRemove.MicSpeaking.MicWarning.Minus.Minus1.MinusHexagon.MinusPinAlt.MinusSquare.MissingFont.ModernTv.ModernTv4K.MoneySquare.MoonSat.MoreHoriz.MoreVert.MouseButtonLeft.MouseButtonRight.MouseScrollWheel.MoveDown.MoveLeft.MoveRight.MoveRuler.MoveUp.Movie.MultiBubble.MultiMacOsWindow.MultiWindow.MultiplePages.MultiplePagesAdd.MultiplePagesDelete.MultiplePagesEmpty.MultiplePagesRemove.Music1.Music1Add.Music2.Music2Add.NavArrowDown.NavArrowLeft.NavArrowRight.NavArrowUp.Navigator.NavigatorAlt.Network.NetworkAlt.NetworkLeft.NetworkRight.NoBattery.NoCoin.NoCreditCard.NoLock.NoSmoking.Notes.Octagon.OilIndustry.OpenInBrowser.OpenInWindow.OpenVpn.OrangeHalf.OrangeSlice.OrangeSliceAlt.Page.PageFlip.PageSearch.PageStar.Palette.PanoramaEnlarge.PanoramaReduce.Pants.PantsAlt.PasswordCursor.PasswordError.PasswordPass.PauseOutline.PcMouse.PenConnectBluetooth.PenConnectWifi.PenTablet.PenTabletConnectUsb.PenTabletConnectWifi.Pentagon.Percentage.PercentageRound.PercentageSquare.PharmacyCircledCross.PharmacySquaredCross.Phone.PhoneAdd.PhoneDelete.PhoneDisabled.PhoneIncome.PhoneOutcome.PhonePaused.PhoneRemove.Pin.PinAlt.PizzaSlice.Planet.PlanetAlt.PlanetSat.PlayOutline.Playlist.PlaylistAdd.PlaylistPlay.PlugTypeA.PlugTypeC.PlugTypeG.PlugTypeL.Plus.Pocket.Position.PositionAlign.Pound.PrecisionTool.Printer.PrinterAlt.PrintingPage.PriorityDown.PriorityUp.ProfileCircled.Prohibition.QuestionMark.QuestionMarkCircle.Rain.ReceiveDollars.ReceiveEuros.ReceivePounds.ReceiveYens.Redo.RedoAction.RedoCircle.Reduce.ReduceRoundArrow.Refresh.RefreshCircular.RefreshDouble.ReminderHandGesture.RemoveDatabaseScript.RemoveEmpty.RemoveFolder.RemoveFrame.RemoveFromCart.RemoveKeyframe.RemoveKeyframeAlt.RemoveKeyframes.RemovePage.RemovePinAlt.RemoveSelection.RemoveSquare.RemoveUser.Repeat.RepeatOnce.ReportColumns.Reports.RewindOutline.Rhombus.RightRoundArrow.Rings.RotateCameraLeft.RotateCameraRight.RssFeed.RssFeedSquared.Ruler.RulerAdd.RulerCombine.RulerRemove.Running.Sandals.SaveActionFloppy.SaveFloppyDisk.ScaleFrameEnlarge.ScaleFrameReduce.Scanning.Scarf.Scissor.ScissorAlt.SeaAndSun.SeaWaves.Search.SearchFont.SecurityPass.Selection.SelectiveTool.SendDollars.SendEuros.SendPounds.SendYens.Server.ServerConnection.Settings.SettingsCloud.SettingsProfiles.ShareAndroid.ShareIos.Shield.ShieldAdd.ShieldAlert.ShieldAlt.ShieldBroken.ShieldCheck.ShieldCross.ShieldDownload.ShieldEye.ShieldLoading.ShieldMinus.ShieldQuestion.ShieldSearch.ShieldUpload.Shop.ShopAlt.ShoppingBag.ShoppingBagAdd.ShoppingBagAlt.ShoppingBagArrowDown.ShoppingBagArrowUp.ShoppingBagCheck.ShoppingBagIssue.ShoppingBagRemove.ShoppingCode.ShoppingCodeCheck.ShoppingCodeError.ShortPants.ShortPantsAlt.Shuffle.SimpleCart.SingleTapGesture.Skateboard.Skateboarding.SkipNextOutline.SkipPrevOutline.SmallShop.SmallShopAlt.SmartphoneDevice.Smoking.Snow.SnowFlake.Soap.SoccerBall.SortDown.SortUp.SoundHigh.SoundLow.SoundMin.SoundOff.SpockHandGesture.Square.StarDashed.StarHalfDashed.StarOutline.StatDown.StatUp.StatsReport.StatsSquareDown.StatsSquareUp.Stretching.StyleBorder.Substract.Suggestion.SunLight.Swimming.SwipeDownGesture.SwipeLeftGesture.SwipeRightGesture.SwipeUpGesture.SwitchOffOutline.SwitchOnOutline.SystemRestart.SystemShut.Table.Table2Columns.TableRows.Telegram.TelegramCircled.TennisBall.TennisBallAlt.TerminalOutline.TerminalSimple.Text.TextAlt.TextSize.ThreeStars.Thunderstorm.TikTok.Timer.TimerOff.Tower.TowerCheck.TowerNoAccess.TowerWarning.Trademark.TrainOutline.Tram.TransitionBottom.TransitionLeft.TransitionRight.TransitionTop.Translate.Trash.Treadmill.Trekking.Trello.Triangle.TriangleFlag.TriangleFlagCircle.TriangleFlagFull.Trophy.Tunnel.Tv.TvFix.TvIssue.Twitter.TwitterVerifiedBadge.Type.UmbrellaFull.Underline.Undo.UndoAction.UndoCircle.Union.UnionAlt.UnionHorizAlt.Unity.Unity5.UpRoundArrow.Upload.UploadSquareOutline.Usb.User.UserBag.UserCart.UserCircleAlt.UserScan.UserSquareAlt.VerifiedBadge.VerifiedUser.VideoCamera.VideoCameraOff.ViewColumns2.ViewColumns3.ViewGrid.ViewStructureDown.ViewStructureUp.Voice.VoiceCircled.VoiceCircledLock.VoiceError.VoiceOk.VoicePhone.VoiceScan.VoiceSquared.VrSymbol.Waist.Walking.WarningSquareOutline.WebWindow.WebWindowClose.Weight.WeightAlt.WhiteFlag.Wifi.WifiIssue.WifiOff.WifiSignalNone.Wind.WrapText.Wristwatch.Yen.YenSquare.Yoga.YouTube.ZoomIn.ZoomOut`.split(
          `.`,
        )),
      (Xe = `../assets/final_logic/iconoir-icons/`),
      (Ze = Ye.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (K.displayName = `Iconoir`),
      (K.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `Home`,
        iconSearch: `Home`,
        color: `#66F`,
        selectByList: !0,
        mirrored: !1,
      }),
      k(K, {
        selectByList: {
          type: C.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: K.defaultProps.selectByList,
        },
        iconSelection: {
          type: C.Enum,
          options: Ye,
          defaultValue: K.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Iconoir site](https://iconoir.com/)`,
        },
        iconSearch: {
          type: C.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        mirrored: { type: C.Boolean, enabledTitle: `Yes`, disabledTitle: `No`, defaultValue: K.defaultProps.mirrored },
        color: { type: C.Color, title: `Color`, defaultValue: K.defaultProps.color },
        ...Ke,
      }));
  });
function $e(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  q,
  ft = e(() => {
    (r(),
      F(),
      b(),
      i(),
      (et = [`KRnww_NON`, `BwRQHAH2h`]),
      (tt = `framer-1Chey`),
      (nt = { BwRQHAH2h: `framer-v-1jc0dsw`, KRnww_NON: `framer-v-cgassc` }),
      (rt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (it = (e, t) => `translate(-50%, -50%) ${t}`),
      (at = ({ value: e, children: t }) => {
        let n = u(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (ot = x.create(h)),
      (st = { Minus: `BwRQHAH2h`, Plus: `KRnww_NON` }),
      (ct = ({ height: e, icon: t, id: n, tap: r, width: i, ...a }) => ({
        ...a,
        lDFHSVYS5: r ?? a.lDFHSVYS5,
        UUeagajn8: t ?? a.UUeagajn8 ?? `var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36))`,
        variant: st[a.variant] ?? a.variant ?? `KRnww_NON`,
      })),
      (lt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ut = t(function (e, t) {
        let r = l(null),
          i = t ?? r,
          a = n(),
          { activeLocale: o, setLocale: s } = ie();
        re();
        let { style: u, className: d, layoutId: p, variant: m, lDFHSVYS5: h, UUeagajn8: g, ..._ } = ct(e),
          {
            baseVariant: y,
            classNames: b,
            clearLoadingGesture: S,
            gestureHandlers: C,
            gestureVariant: ee,
            isLoading: te,
            setGestureState: w,
            setVariant: T,
            variants: E,
          } = se({ cycleOrder: et, defaultVariant: `KRnww_NON`, ref: i, variant: m, variantClassNames: nt }),
          D = lt(e, E),
          { activeVariantCallback: O, delay: k } = ne(y),
          j = O(async (...e) => {
            if ((w({ isPressed: !1 }), h)) {
              let t = await h(...e);
              if (t === !1) return !1;
            }
          }),
          M = [],
          N = A(tt, ...M);
        return c(v, {
          id: p ?? a,
          children: c(ot, {
            animate: E,
            initial: !1,
            children: c(at, {
              value: rt,
              children: c(x.div, {
                ..._,
                ...C,
                className: A(N, `framer-cgassc`, d, b),
                "data-framer-name": `Plus`,
                "data-highlight": !0,
                layoutDependency: D,
                layoutId: `KRnww_NON`,
                onTap: j,
                ref: i,
                style: { ...u },
                ...$e({ BwRQHAH2h: { "data-framer-name": `Minus` } }, y, ee),
                children: f(x.div, {
                  className: `framer-1u4gqh4`,
                  "data-framer-name": `SVG`,
                  layoutDependency: D,
                  layoutId: `RzWsfnS4K`,
                  transformTemplate: it,
                  children: [
                    c(x.div, {
                      className: `framer-vhbgpm`,
                      "data-framer-name": `Line`,
                      layoutDependency: D,
                      layoutId: `FHdFiWloI`,
                      style: { backgroundColor: g, rotate: 0 },
                      variants: {
                        BwRQHAH2h: {
                          backgroundColor: `var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36))`,
                          rotate: 90,
                        },
                      },
                    }),
                    c(x.div, {
                      className: `framer-dy0ljb`,
                      "data-framer-name": `Line`,
                      layoutDependency: D,
                      layoutId: `whYvEZMgV`,
                      style: { backgroundColor: g, rotate: -90 },
                      variants: {
                        BwRQHAH2h: {
                          backgroundColor: `var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36))`,
                          rotate: 90,
                        },
                      },
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (dt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-1Chey.framer-1cnlyzv, .framer-1Chey .framer-1cnlyzv { display: block; }`,
        `.framer-1Chey.framer-cgassc { cursor: pointer; height: 20px; overflow: hidden; position: relative; width: 20px; }`,
        `.framer-1Chey .framer-1u4gqh4 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; overflow: hidden; position: absolute; top: 50%; width: 16px; }`,
        `.framer-1Chey .framer-vhbgpm, .framer-1Chey .framer-dy0ljb { bottom: 0px; flex: none; left: calc(50.00000000000002% - 2px / 2); overflow: hidden; position: absolute; top: 0px; width: 2px; }`,
      ]),
      (q = I(ut, dt, `framer-1Chey`)),
      (q.displayName = `Nav/Icon`),
      (q.defaultProps = { height: 20, width: 20 }),
      k(q, {
        variant: {
          options: [`KRnww_NON`, `BwRQHAH2h`],
          optionTitles: [`Plus`, `Minus`],
          title: `Variant`,
          type: C.Enum,
        },
        lDFHSVYS5: { title: `Tap`, type: C.EventHandler },
        UUeagajn8: {
          defaultValue: `var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36)) /* {"name":"Brown 500"} */`,
          title: `icon`,
          type: C.Color,
        },
      }),
      O(q, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  pt,
  mt,
  ht = e(() => {
    mt = (e) => {
      if (!pt) {
        let t = e.forwardRef(({ color: t = `currentColor`, size: n = 24, ...r }, i) =>
          e.createElement(
            `svg`,
            {
              ref: i,
              xmlns: `http://www.w3.org/2000/svg`,
              width: n,
              height: n,
              viewBox: `0 0 24 24`,
              fill: `none`,
              stroke: t,
              strokeWidth: `2`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              ...r,
            },
            e.createElement(`path`, { d: `M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z` }),
            e.createElement(`polyline`, { points: `9 22 9 12 15 12 15 22` }),
          ),
        );
        ((t.displayName = `Home`), (pt = t));
      }
      return pt;
    };
  });
function J(e) {
  let {
    color: t,
    selectByList: n,
    iconSearch: r,
    iconSelection: i,
    onClick: a,
    onMouseDown: o,
    onMouseUp: u,
    onMouseEnter: d,
    onMouseLeave: f,
    mirrored: m,
  } = e;
  l(!1);
  let h = Ge(Y, n, r, i, vt),
    [_, v] = g(h === `Home` ? mt(s) : null);
  async function y() {
    let e = !0;
    try {
      let t = `${gt}${h}.js@0.0.29`,
        n = await import(t);
      e && v(n.default(s));
    } catch (t) {
      (console.log(t), e && v(null));
    }
    return () => {
      e = !1;
    };
  }
  p(() => {
    y();
  }, [h]);
  let b = T.current() === T.canvas,
    x = b ? c(Be, {}) : null;
  return c(`div`, {
    style: { display: `contents` },
    onClick: a,
    onMouseEnter: d,
    onMouseLeave: f,
    onMouseDown: o,
    onMouseUp: u,
    children: _
      ? c(_, { style: { width: `100%`, height: `100%`, transform: m ? `scale(-1, 1)` : void 0 }, color: t })
      : x,
  });
}
var Y,
  gt,
  _t,
  vt,
  yt = e(() => {
    (r(),
      i(),
      F(),
      Ve(),
      ht(),
      Je(),
      (Y =
        `activity.airplay.alert-circle.alert-octagon.alert-triangle.align-center.align-justify.align-left.align-right.anchor.aperture.archive.arrow-down.arrow-down-circle.arrow-down-left.arrow-down-right.arrow-left.arrow-left-circle.arrow-right.arrow-right-circle.arrow-up.arrow-up-circle.arrow-up-left.arrow-up-right.at-sign.award.bar-chart.bar-chart-2.battery.battery-charging.bell.bell-off.bluetooth.bold.book.book-open.bookmark.box.briefcase.calendar.camera.camera-off.cast.check.check-circle.check-square.chevron-down.chevron-left.chevron-right.chevron-up.chevrons-down.chevrons-left.chevrons-right.chevrons-up.chrome.circle.clipboard.clock.cloud.cloud-drizzle.cloud-lightning.cloud-off.cloud-rain.cloud-snow.code.codepen.codesandbox.coffee.columns.command.compass.copy.corner-down-left.corner-down-right.corner-left-down.corner-left-up.corner-right-down.corner-right-up.corner-up-left.corner-up-right.cpu.credit-card.crop.crosshair.database.delete.disc.divide.divide-circle.divide-square.dollar-sign.download.download-cloud.dribbble.droplet.edit.edit-2.edit-3.external-link.eye.eye-off.facebook.fast-forward.feather.figma.file.file-minus.file-plus.file-text.film.filter.flag.folder.folder-minus.folder-plus.framer.frown.gift.git-branch.git-commit.git-merge.git-pull-request.github.gitlab.globe.grid.hard-drive.hash.headphones.heart.help-circle.hexagon.home.image.inbox.info.instagram.italic.key.layers.layout.life-buoy.link.link-2.linkedin.list.loader.lock.log-in.log-out.mail.map.map-pin.maximize.maximize-2.meh.menu.message-circle.message-square.mic.mic-off.minimize.minimize-2.minus.minus-circle.minus-square.monitor.moon.more-horizontal.more-vertical.mouse-pointer.move.music.navigation.navigation-2.octagon.package.paperclip.pause.pause-circle.pen-tool.percent.phone.phone-call.phone-forwarded.phone-incoming.phone-missed.phone-off.phone-outgoing.pie-chart.play.play-circle.plus.plus-circle.plus-square.pocket.power.printer.radio.refresh-ccw.refresh-cw.repeat.rewind.rotate-ccw.rotate-cw.rss.save.scissors.search.send.server.settings.share.share-2.shield.shield-off.shopping-bag.shopping-cart.shuffle.sidebar.skip-back.skip-forward.slack.slash.sliders.smartphone.smile.speaker.square.star.stop-circle.sun.sunrise.sunset.tablet.tag.target.terminal.thermometer.thumbs-down.thumbs-up.toggle-left.toggle-right.tool.trash.trash-2.trello.trending-down.trending-up.triangle.truck.tv.twitch.twitter.type.umbrella.underline.unlock.upload.upload-cloud.user.user-check.user-minus.user-plus.user-x.users.video.video-off.voicemail.volume.volume-1.volume-2.volume-x.watch.wifi.wifi-off.wind.x.x-circle.x-octagon.x-square.youtube.zap.zap-off.zoom-in.zoom-out`.split(
          `.`,
        )),
      (gt = `../assets/final_logic/feather-icons/`),
      (_t = Y.map((e) => e.charAt(0).toUpperCase() + e.slice(1))),
      (vt = Y.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (J.displayName = `Feather`),
      (J.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `home`,
        iconSearch: `Home`,
        color: `#66F`,
        selectByList: !0,
        mirrored: !1,
      }),
      k(J, {
        selectByList: {
          type: C.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: J.defaultProps.selectByList,
        },
        iconSelection: {
          type: C.Enum,
          options: Y,
          optionTitles: _t,
          defaultValue: J.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Feather site](https://feathericons.com/)`,
        },
        iconSearch: {
          type: C.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        mirrored: { type: C.Boolean, enabledTitle: `Yes`, disabledTitle: `No`, defaultValue: J.defaultProps.mirrored },
        color: { type: C.Color, title: `Color`, defaultValue: J.defaultProps.color },
        ...Ke,
      }));
  });
function bt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  X,
  jt = e(() => {
    (r(),
      F(),
      b(),
      i(),
      (xt = { tfXrXk1lv: { hover: !0 } }),
      (St = `framer-4nR8t`),
      (Ct = { tfXrXk1lv: `framer-v-rbmw3z` }),
      (wt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Tt = ({ value: e, children: t }) => {
        let n = u(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (Et = x.create(h)),
      (Dt = ({ colorDefault: e, colorHower: t, height: n, id: r, link: i, menuTitle: a, width: o, ...s }) => ({
        ...s,
        dZBaOQ4Q4: e ?? s.dZBaOQ4Q4 ?? `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
        Ipvis9t3k: a ?? s.Ipvis9t3k ?? `ORIGINAL`,
        LpZQLKgCy: t ?? s.LpZQLKgCy ?? `var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60))`,
        nVyspJRcv: i ?? s.nVyspJRcv,
      })),
      (Ot = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (kt = t(function (e, t) {
        let r = l(null),
          i = t ?? r,
          a = n(),
          { activeLocale: o, setLocale: s } = ie();
        re();
        let {
            style: u,
            className: d,
            layoutId: f,
            variant: p,
            nVyspJRcv: m,
            Ipvis9t3k: g,
            dZBaOQ4Q4: _,
            LpZQLKgCy: y,
            ...b
          } = Dt(e),
          {
            baseVariant: S,
            classNames: C,
            clearLoadingGesture: ee,
            gestureHandlers: te,
            gestureVariant: T,
            isLoading: D,
            setGestureState: O,
            setVariant: k,
            variants: j,
          } = se({ defaultVariant: `tfXrXk1lv`, enabledGestures: xt, ref: i, variant: p, variantClassNames: Ct }),
          M = Ot(e, j),
          N = [],
          P = A(St, ...N);
        return c(v, {
          id: f ?? a,
          children: c(Et, {
            animate: j,
            initial: !1,
            children: c(Tt, {
              value: wt,
              children: c(w, {
                href: m,
                motionChild: !0,
                nodeId: `tfXrXk1lv`,
                scopeId: `Kc2u9mGnG`,
                smoothScroll: !0,
                children: c(x.a, {
                  ...b,
                  ...te,
                  className: `${A(P, `framer-rbmw3z`, d, C)} framer-8gbrgy`,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: M,
                  layoutId: `tfXrXk1lv`,
                  ref: i,
                  style: { ...u },
                  ...bt({ "tfXrXk1lv-hover": { "data-framer-name": void 0 } }, S, T),
                  children: c(x.div, {
                    className: `framer-65aepq`,
                    "data-framer-name": `Title + Icon`,
                    layoutDependency: M,
                    layoutId: `a8OBNyIMy`,
                    children: c(E, {
                      __fromCanvasComponent: !0,
                      children: c(h, {
                        children: c(x.p, {
                          style: {
                            "--font-selector": `RlM7TW9udHNlcnJhdC1tZWRpdW0=`,
                            "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                            "--framer-font-size": `14px`,
                            "--framer-font-weight": `500`,
                            "--framer-letter-spacing": `0.04em`,
                            "--framer-line-height": `1.6em`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-dZBaOQ4Q4-Kc2u9mGnG))`,
                          },
                          children: `ORIGINAL`,
                        }),
                      }),
                      className: `framer-1k7jzpg`,
                      fonts: [`FS;Montserrat-medium`],
                      layoutDependency: M,
                      layoutId: `WT76M3oYt`,
                      style: {
                        "--extracted-r6o4lv": `var(--variable-reference-dZBaOQ4Q4-Kc2u9mGnG)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        "--framer-paragraph-spacing": `0px`,
                        "--variable-reference-dZBaOQ4Q4-Kc2u9mGnG": _,
                        "--variable-reference-LpZQLKgCy-Kc2u9mGnG": y,
                      },
                      text: g,
                      variants: {
                        "tfXrXk1lv-hover": {
                          "--extracted-r6o4lv": `var(--variable-reference-LpZQLKgCy-Kc2u9mGnG)`,
                          "--variable-reference-LpZQLKgCy-Kc2u9mGnG": y,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...bt(
                        {
                          "tfXrXk1lv-hover": {
                            children: c(h, {
                              children: c(x.p, {
                                style: {
                                  "--font-selector": `RlM7TW9udHNlcnJhdC1zZW1pYm9sZA==`,
                                  "--framer-font-family": `"Montserrat", "Montserrat Placeholder", sans-serif`,
                                  "--framer-font-size": `14px`,
                                  "--framer-font-weight": `600`,
                                  "--framer-letter-spacing": `0.04em`,
                                  "--framer-line-height": `1.6em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-LpZQLKgCy-Kc2u9mGnG))`,
                                },
                                children: `ORIGINAL`,
                              }),
                            }),
                            fonts: [`FS;Montserrat-semibold`],
                          },
                        },
                        S,
                        T,
                      ),
                    }),
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (At = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-4nR8t.framer-8gbrgy, .framer-4nR8t .framer-8gbrgy { display: block; }`,
        `.framer-4nR8t.framer-rbmw3z { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px 24px 20px 24px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-4nR8t .framer-65aepq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-4nR8t .framer-1k7jzpg { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
      ]),
      (X = I(kt, At, `framer-4nR8t`)),
      (X.displayName = `Menu Item`),
      (X.defaultProps = { height: 62, width: 124 }),
      k(X, {
        nVyspJRcv: { title: `Link`, type: C.Link },
        Ipvis9t3k: { defaultValue: `ORIGINAL`, displayTextArea: !1, title: `Menu Title`, type: C.String },
        dZBaOQ4Q4: {
          defaultValue: `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
          title: `Color Default`,
          type: C.Color,
        },
        LpZQLKgCy: {
          defaultValue: `var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60))`,
          title: `Color Hower`,
          type: C.Color,
        },
      }),
      O(
        X,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Montserrat`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/G3U4AIP7I5YYMBY4PZ5BNYEWWVH7G7QB/WED2HATCWTE6B4XVIFFTI3EALCE4D6PD/GDZ4LVIJF6WODYKVZK6E2737DCDQPEMZ.woff2`,
                weight: `500`,
              },
              {
                family: `Montserrat`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/DELXRVKO253LHPYOBD6KD7EW3TJKXCXF/L6SILXET3P727LN5N75LL5PG77IET2IT/6DP3DAT2N5LSQGN5ISPRN63WPP32A54A.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Q,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  $,
  en = e(() => {
    (r(),
      F(),
      b(),
      i(),
      ft(),
      yt(),
      jt(),
      (Mt = M(J)),
      (Nt = M(q)),
      (Pt = ce(x.div)),
      (Ft = M(X)),
      (It = [`ZD3Yxe0Uv`, `UdWuXaj4b`, `jr2HRS0Hp`, `d5kqZPzLo`, `ynOSTAML_`, `DKRFDhAEy`, `coeWLBEnn`, `XP2pQwNGw`]),
      (Lt = `framer-KkVNX`),
      (Rt = {
        coeWLBEnn: `framer-v-18a8xjk`,
        d5kqZPzLo: `framer-v-13u4sfm`,
        DKRFDhAEy: `framer-v-1khrigm`,
        jr2HRS0Hp: `framer-v-ltwzxm`,
        UdWuXaj4b: `framer-v-5z2pm7`,
        XP2pQwNGw: `framer-v-u28w5u`,
        ynOSTAML_: `framer-v-121gzut`,
        ZD3Yxe0Uv: `framer-v-1ylcsx2`,
      }),
      (zt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Q = { duration: 0, type: `tween` }),
      (Bt = { delay: 0, duration: 1, ease: [0.5, 0, 0.88, 0.77], type: `tween` }),
      (Vt = { delay: 0, duration: 0.6, ease: [0.5, 0, 0.88, 0.77], type: `tween` }),
      (Ht = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ut = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ht,
        x: 0,
        y: 0,
      }),
      (Wt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ht,
        x: 0,
        y: 0,
      }),
      (Gt = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 }),
      (Kt = ({ children: e, blockDocumentScrolling: t, enabled: n = !0 }) => {
        let [r, i] = oe({ blockDocumentScrolling: t });
        return e({ hide: () => i(!1), show: () => i(!0), toggle: () => i(!r), visible: n && r });
      }),
      (qt = ({ value: e, children: t }) => {
        let n = u(y),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return c(y.Provider, { value: i, children: t });
      }),
      (Jt = x.create(h)),
      (Yt = {
        "mOB oPEN - aBT": `XP2pQwNGw`,
        "Mobile Banner": `ynOSTAML_`,
        "Mobile On Start": `DKRFDhAEy`,
        "Mobile Open": `UdWuXaj4b`,
        "On Start": `jr2HRS0Hp`,
        Banner: `d5kqZPzLo`,
        Desktop: `ZD3Yxe0Uv`,
        Mobile: `coeWLBEnn`,
      }),
      (Xt = ({
        click: e,
        height: t,
        hover: n,
        id: r,
        link1: i,
        link2: a,
        link3: o,
        link4: s,
        menuTitle1: c,
        menuTitle2: l,
        menuTitle3: u,
        menuTitle4: d,
        opacity: f,
        width: p,
        ...m
      }) => ({
        ...m,
        Don9rPm4t: u ?? m.Don9rPm4t ?? `ORIGINAL`,
        EWWB4AZmK: o ?? m.EWWB4AZmK,
        gsQx14FRC: a ?? m.gsQx14FRC,
        leYVePuI9: i ?? m.leYVePuI9,
        nbpUZHzLI: e ?? m.nbpUZHzLI,
        R9rVfKm5A: d ?? m.R9rVfKm5A ?? `ORIGINAL`,
        rvnUxmeBE: s ?? m.rvnUxmeBE,
        tXGFQVaIt: l ?? m.tXGFQVaIt ?? `ORIGINAL`,
        variant: Yt[m.variant] ?? m.variant ?? `ZD3Yxe0Uv`,
        XCOyJnKTR: f ?? m.XCOyJnKTR ?? 1,
        Y7ZoV_ppK: c ?? m.Y7ZoV_ppK ?? `ORIGINAL`,
        zIUK6AEbl: n ?? m.zIUK6AEbl,
      })),
      (Zt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qt = t(function (e, t) {
        let r = l(null),
          i = t ?? r,
          a = n(),
          { activeLocale: s, setLocale: u } = ie(),
          d = re(),
          {
            style: p,
            className: m,
            layoutId: h,
            variant: g,
            Y7ZoV_ppK: y,
            leYVePuI9: b,
            gsQx14FRC: C,
            tXGFQVaIt: T,
            EWWB4AZmK: E,
            Don9rPm4t: O,
            rvnUxmeBE: k,
            R9rVfKm5A: j,
            XCOyJnKTR: M,
            zIUK6AEbl: N,
            nbpUZHzLI: F,
            ...oe
          } = Xt(e),
          {
            baseVariant: I,
            classNames: ce,
            clearLoadingGesture: le,
            gestureHandlers: ue,
            gestureVariant: L,
            isLoading: de,
            setGestureState: R,
            setVariant: z,
            variants: B,
          } = se({ cycleOrder: It, defaultVariant: `ZD3Yxe0Uv`, ref: i, variant: g, variantClassNames: Rt }),
          V = Zt(e, B),
          { activeVariantCallback: H, delay: U } = ne(I),
          fe = H(async (...e) => {
            if ((R({ isPressed: !1 }), F)) {
              let t = await F(...e);
              if (t === !1) return !1;
            }
          }),
          pe = H(async (...e) => {
            if ((R({ isHovered: !0 }), N)) {
              let t = await N(...e);
              if (t === !1) return !1;
            }
          }),
          me = H(async (...e) => {
            await U(() => z(`d5kqZPzLo`, !0), 3e3);
          }),
          he = H(async (...e) => {
            await U(() => z(`ynOSTAML_`, !0), 3200);
          }),
          ge = H(async (...e) => {
            z(`UdWuXaj4b`);
          }),
          _e = H(async (...e) => {
            z(`XP2pQwNGw`);
          }),
          ve = ({ overlay: e, loadMore: t }) =>
            H(async (...t) => {
              e.show();
            }),
          ye = H(async (...e) => {
            z(`ynOSTAML_`);
          }),
          be = H(async (...e) => {
            z(`coeWLBEnn`);
          });
        ae(I, { DKRFDhAEy: he, jr2HRS0Hp: me });
        let xe = [],
          W = A(Lt, ...xe),
          Se = () => !![`UdWuXaj4b`, `ynOSTAML_`, `DKRFDhAEy`, `coeWLBEnn`, `XP2pQwNGw`].includes(I),
          Ce = () => !![`ynOSTAML_`, `coeWLBEnn`].includes(I),
          we = () => !![`UdWuXaj4b`, `XP2pQwNGw`].includes(I),
          Te = l(null),
          Ee = () => ![`UdWuXaj4b`, `XP2pQwNGw`].includes(I),
          G = l(null),
          De = () => ![`ynOSTAML_`, `DKRFDhAEy`, `coeWLBEnn`].includes(I),
          Oe = () => ![`UdWuXaj4b`, `d5kqZPzLo`, `XP2pQwNGw`].includes(I),
          ke = () => I === `d5kqZPzLo`;
        return c(v, {
          id: h ?? a,
          children: c(Jt, {
            animate: B,
            initial: !1,
            children: c(qt, {
              value: zt,
              ...Z(
                {
                  coeWLBEnn: { value: Q },
                  d5kqZPzLo: { value: Vt },
                  jr2HRS0Hp: { value: Bt },
                  UdWuXaj4b: { value: Q },
                  XP2pQwNGw: { value: Q },
                  ynOSTAML_: { value: Q },
                },
                I,
                L,
              ),
              children: c(x.div, {
                ...oe,
                ...ue,
                className: A(W, `framer-1ylcsx2`, m, ce),
                "data-framer-name": `Desktop`,
                "data-highlight": !0,
                layoutDependency: V,
                layoutId: `ZD3Yxe0Uv`,
                onMouseEnter: pe,
                onTap: fe,
                ref: i,
                style: {
                  background: `linear-gradient(180deg, var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255)) 0%, var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255)) 100%)`,
                  backgroundColor: `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                  opacity: 1,
                  ...p,
                },
                variants: {
                  coeWLBEnn: { opacity: 1 },
                  d5kqZPzLo: {
                    background: `linear-gradient(180deg, rgba(20, 15, 12, 0.49) 0%, rgba(38, 25, 18, 0) 100%)`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    opacity: 1,
                  },
                  DKRFDhAEy: {
                    background: `linear-gradient(180deg, rgba(20, 15, 12, 0.49) 0%, rgba(38, 25, 18, 0) 100%)`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    opacity: 0,
                  },
                  jr2HRS0Hp: { backgroundColor: `rgba(0, 0, 0, 0)`, opacity: 0 },
                  UdWuXaj4b: {
                    background: `linear-gradient(180deg, var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, rgb(249, 243, 240)) 0%, var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, rgb(249, 243, 240)) 100%)`,
                    backgroundColor: `var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, rgb(249, 243, 240))`,
                  },
                  XP2pQwNGw: {
                    background: `linear-gradient(180deg, var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, rgb(249, 243, 240)) 0%, var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, rgb(249, 243, 240)) 100%)`,
                    backgroundColor: `var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, rgb(249, 243, 240))`,
                    opacity: 1,
                  },
                  ynOSTAML_: {
                    background: `linear-gradient(180deg, rgba(20, 15, 12, 0.49) 0%, rgba(38, 25, 18, 0) 100%)`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    opacity: 1,
                  },
                },
                ...Z(
                  {
                    coeWLBEnn: { "data-framer-name": `Mobile` },
                    d5kqZPzLo: { "data-framer-name": `Banner` },
                    DKRFDhAEy: { "data-framer-name": `Mobile On Start` },
                    jr2HRS0Hp: { "data-framer-name": `On Start` },
                    UdWuXaj4b: { "data-framer-name": `Mobile Open` },
                    XP2pQwNGw: { "data-framer-name": `mOB oPEN - aBT` },
                    ynOSTAML_: { "data-framer-name": `Mobile Banner` },
                  },
                  I,
                  L,
                ),
                children: c(x.div, {
                  className: `framer-ff73sw`,
                  layoutDependency: V,
                  layoutId: `ri42B0Q3X`,
                  style: { backgroundColor: `rgba(0, 0, 0, 0)`, boxShadow: `none` },
                  variants: {
                    XP2pQwNGw: {
                      backgroundColor: `var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, rgb(249, 243, 240))`,
                      boxShadow: `0px 0.5573343114665477px 0.5573343114665477px -0.375px rgba(0, 0, 0, 0.08), 0px 1.6901543001731625px 1.6901543001731625px -0.75px rgba(0, 0, 0, 0.09), 0px 4.467857465039123px 4.467857465039123px -1.125px rgba(0, 0, 0, 0.11), 0px 14px 14px -1.5px rgba(0, 0, 0, 0.18)`,
                    },
                  },
                  children: f(x.div, {
                    className: `framer-c4owiz`,
                    "data-framer-name": `Content`,
                    layoutDependency: V,
                    layoutId: `RtsBbYBQE`,
                    children: [
                      Se() &&
                        f(x.div, {
                          className: `framer-5p6kb4`,
                          "data-framer-name": `Logo + Burger`,
                          layoutDependency: V,
                          layoutId: `Ei1Tdhrdd`,
                          style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                          variants: {
                            coeWLBEnn: {
                              backgroundColor: `var(--token-65975183-42fb-404f-a721-c7878619061d, rgb(255, 255, 255))`,
                            },
                            XP2pQwNGw: { backgroundColor: `rgba(0, 0, 0, 0)` },
                          },
                          children: [
                            c(x.div, {
                              className: `framer-4m7f0o`,
                              "data-framer-name": `Logo`,
                              layoutDependency: V,
                              layoutId: `nLfE9ijtE`,
                              children: c(w, {
                                motionChild: !0,
                                nodeId: `tlP3bj9T4`,
                                scopeId: `ImOhXeRcM`,
                                ...Z(
                                  {
                                    coeWLBEnn: { href: { webPageId: `q2dk3BipV` } },
                                    UdWuXaj4b: { href: { webPageId: `q2dk3BipV` } },
                                    XP2pQwNGw: { href: { webPageId: `q2dk3BipV` } },
                                  },
                                  I,
                                  L,
                                ),
                                children: c(te, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 528,
                                    intrinsicWidth: 3014,
                                    pixelHeight: 528,
                                    pixelWidth: 3014,
                                    sizes: `228px`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 3014w`,
                                  },
                                  className: `framer-1v02tzf framer-1x2qjc5`,
                                  "data-framer-name": `Masorra Logo_Full_Brown`,
                                  layoutDependency: V,
                                  layoutId: `tlP3bj9T4`,
                                  style: { filter: `none`, opacity: 1, WebkitFilter: `none` },
                                  variants: {
                                    coeWLBEnn: { filter: `none`, opacity: 1, WebkitFilter: `none` },
                                    DKRFDhAEy: { filter: `none`, opacity: M, WebkitFilter: `none` },
                                    XP2pQwNGw: { filter: `none`, opacity: 1, WebkitFilter: `none` },
                                    ynOSTAML_: {
                                      filter: `brightness(1.65) contrast(0.65)`,
                                      opacity: M,
                                      WebkitFilter: `brightness(1.65) contrast(0.65)`,
                                    },
                                  },
                                  ...Z(
                                    {
                                      coeWLBEnn: {
                                        as: `a`,
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 528,
                                          intrinsicWidth: 3014,
                                          loading: P((d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 16 + 0),
                                          pixelHeight: 528,
                                          pixelWidth: 3014,
                                          sizes: `228.3333px`,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 3014w`,
                                        },
                                      },
                                      DKRFDhAEy: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 528,
                                          intrinsicWidth: 3014,
                                          loading: P((d?.y || 0) + (d?.height || 80) - 80 + 0 + 0 + 0 + 0 + 16 + 0),
                                          pixelHeight: 528,
                                          pixelWidth: 3014,
                                          sizes: `228px`,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 3014w`,
                                        },
                                      },
                                      UdWuXaj4b: {
                                        as: `a`,
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 528,
                                          intrinsicWidth: 3014,
                                          loading: P((d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 16 + 0),
                                          pixelHeight: 528,
                                          pixelWidth: 3014,
                                          sizes: `228.3333px`,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 3014w`,
                                        },
                                      },
                                      XP2pQwNGw: {
                                        as: `a`,
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 528,
                                          intrinsicWidth: 3014,
                                          loading: P((d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 16 + 0),
                                          pixelHeight: 528,
                                          pixelWidth: 3014,
                                          sizes: `228.3333px`,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 3014w`,
                                        },
                                      },
                                      ynOSTAML_: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 528,
                                          intrinsicWidth: 3014,
                                          loading: P((d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 16 + 0),
                                          pixelHeight: 528,
                                          pixelWidth: 3014,
                                          sizes: `228px`,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 2048w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Side_LogoTrans_fqdh4y.png 3014w`,
                                        },
                                      },
                                    },
                                    I,
                                    L,
                                  ),
                                }),
                              }),
                            }),
                            Ce() &&
                              c(S, {
                                children: c(D, {
                                  className: `framer-10t0wws-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: V,
                                  layoutId: `M4MfAAXiA-container`,
                                  nodeId: `M4MfAAXiA`,
                                  rendersWithMotion: !0,
                                  scopeId: `ImOhXeRcM`,
                                  children: c(J, {
                                    color: `var(--token-b9016f17-d07d-4333-9ddc-7e997c26a662, rgb(234, 228, 220))`,
                                    height: `100%`,
                                    iconSearch: `menu`,
                                    iconSelection: `edit`,
                                    id: `M4MfAAXiA`,
                                    layoutId: `M4MfAAXiA`,
                                    mirrored: !1,
                                    onClick: ge,
                                    selectByList: !1,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                    ...Z(
                                      {
                                        coeWLBEnn: {
                                          color: `var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60))`,
                                          onClick: _e,
                                        },
                                      },
                                      I,
                                      L,
                                    ),
                                  }),
                                }),
                              }),
                            we() &&
                              c(Kt, {
                                blockDocumentScrolling: !1,
                                enabled: Ee(),
                                children: (e) =>
                                  c(o, {
                                    children: c(S, {
                                      ...Z(
                                        {
                                          UdWuXaj4b: {
                                            height: 20,
                                            width: `20px`,
                                            y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 26,
                                          },
                                          XP2pQwNGw: {
                                            height: 20,
                                            width: `20px`,
                                            y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 26,
                                          },
                                        },
                                        I,
                                        L,
                                      ),
                                      children: f(D, {
                                        className: `framer-1ynbukn-container`,
                                        id: `${h}-1ynbukn`,
                                        isModuleExternal: !0,
                                        layoutDependency: V,
                                        layoutId: `eiHRRpZZZ-container`,
                                        nodeId: `eiHRRpZZZ`,
                                        ref: Te,
                                        rendersWithMotion: !0,
                                        scopeId: `ImOhXeRcM`,
                                        children: [
                                          c(q, {
                                            height: `100%`,
                                            id: `eiHRRpZZZ`,
                                            layoutId: `eiHRRpZZZ`,
                                            lDFHSVYS5: ve({ overlay: e }),
                                            style: { height: `100%`, width: `100%` },
                                            UUeagajn8: `var(--token-f28dc405-1d2b-40ef-8007-2d628d14859c, rgb(76, 51, 36))`,
                                            variant: `BwRQHAH2h`,
                                            width: `100%`,
                                            ...Z({ UdWuXaj4b: { lDFHSVYS5: ye }, XP2pQwNGw: { lDFHSVYS5: be } }, I, L),
                                          }),
                                          Ee() &&
                                            c(_, {
                                              children:
                                                e.visible &&
                                                c(ee, {
                                                  alignment: `center`,
                                                  anchorRef: Te,
                                                  className: A(W, ce),
                                                  collisionDetection: !0,
                                                  collisionDetectionPadding: 20,
                                                  "data-framer-portal-id": `${h}-1ynbukn`,
                                                  offsetX: 0,
                                                  offsetY: 10,
                                                  onDismiss: e.hide,
                                                  placement: `bottom`,
                                                  safeArea: !0,
                                                  zIndex: 11,
                                                  children: c(Pt, {
                                                    __perspectiveFX: !1,
                                                    __smartComponentFX: !0,
                                                    __targetOpacity: 1,
                                                    animate: Wt,
                                                    className: `framer-be5fjl`,
                                                    exit: Ut,
                                                    initial: Gt,
                                                    layoutDependency: V,
                                                    layoutId: `Tjkf345kK`,
                                                    ref: G,
                                                    role: `dialog`,
                                                    style: {
                                                      backgroundColor: `rgb(255, 255, 255)`,
                                                      borderBottomLeftRadius: 10,
                                                      borderBottomRightRadius: 10,
                                                      borderTopLeftRadius: 10,
                                                      borderTopRightRadius: 10,
                                                      boxShadow: `0px 10px 20px 0px rgba(0, 0, 0, 0.05)`,
                                                    },
                                                  }),
                                                }),
                                            }),
                                        ],
                                      }),
                                    }),
                                  }),
                              }),
                          ],
                        }),
                      De() &&
                        f(x.div, {
                          className: `framer-192psov`,
                          layoutDependency: V,
                          layoutId: `D1SrNi61h`,
                          children: [
                            c(S, {
                              height: 48,
                              width: `180px`,
                              y: (d?.y || 0) + (d?.height || 100) - 80 + 0 + 0 + 8 + 0 + 16,
                              ...Z(
                                {
                                  UdWuXaj4b: {
                                    width: d?.width || `100vw`,
                                    y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80 + 0 + 0,
                                  },
                                  XP2pQwNGw: {
                                    width: d?.width || `100vw`,
                                    y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80 + 0 + 0,
                                  },
                                },
                                I,
                                L,
                              ),
                              children: c(D, {
                                className: `framer-1posnd9-container`,
                                layoutDependency: V,
                                layoutId: `Bzojj85fo-container`,
                                nodeId: `Bzojj85fo`,
                                rendersWithMotion: !0,
                                scopeId: `ImOhXeRcM`,
                                children: c(X, {
                                  dZBaOQ4Q4: `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                  height: `100%`,
                                  id: `Bzojj85fo`,
                                  Ipvis9t3k: y,
                                  layoutId: `Bzojj85fo`,
                                  LpZQLKgCy: `var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60))`,
                                  nVyspJRcv: b,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                  ...Z(
                                    {
                                      d5kqZPzLo: {
                                        dZBaOQ4Q4: `var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, rgb(233, 221, 204))`,
                                        LpZQLKgCy: `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                      },
                                    },
                                    I,
                                    L,
                                  ),
                                }),
                              }),
                            }),
                            c(S, {
                              height: 48,
                              width: `180px`,
                              y: (d?.y || 0) + (d?.height || 100) - 80 + 0 + 0 + 8 + 0 + 16,
                              ...Z(
                                {
                                  UdWuXaj4b: {
                                    width: d?.width || `100vw`,
                                    y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80 + 0 + 72,
                                  },
                                  XP2pQwNGw: {
                                    width: d?.width || `100vw`,
                                    y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80 + 0 + 72,
                                  },
                                },
                                I,
                                L,
                              ),
                              children: c(D, {
                                className: `framer-ip570b-container`,
                                layoutDependency: V,
                                layoutId: `Cs9EdJ0DG-container`,
                                nodeId: `Cs9EdJ0DG`,
                                rendersWithMotion: !0,
                                scopeId: `ImOhXeRcM`,
                                children: c(X, {
                                  dZBaOQ4Q4: `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                  height: `100%`,
                                  id: `Cs9EdJ0DG`,
                                  Ipvis9t3k: T,
                                  layoutId: `Cs9EdJ0DG`,
                                  LpZQLKgCy: `var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60))`,
                                  nVyspJRcv: C,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                  ...Z(
                                    {
                                      d5kqZPzLo: {
                                        dZBaOQ4Q4: `var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, rgb(233, 221, 204))`,
                                        LpZQLKgCy: `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                      },
                                    },
                                    I,
                                    L,
                                  ),
                                }),
                              }),
                            }),
                            Oe() &&
                              c(w, {
                                href: { webPageId: `q2dk3BipV` },
                                motionChild: !0,
                                nodeId: `Ze6Rzwit_`,
                                openInNewTab: !1,
                                scopeId: `ImOhXeRcM`,
                                children: c(te, {
                                  as: `a`,
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    intrinsicHeight: 528,
                                    intrinsicWidth: 3014,
                                    loading: P((d?.y || 0) + (d?.height || 100) - 80 + 0 + 0 + 8 + 0 + 0),
                                    pixelHeight: 497,
                                    pixelWidth: 1246,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `228px`,
                                    
                                    // 👇 1. Main Source (Best Quality, Auto Format)
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1764576407/zfExNiXHAgbqTZv8mJ0Aj5KDGg_ddomj4.png`,
                                    
                                    // 👇 2. SrcSet (Generating 3 exact sizes on the fly)
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_512/v1764576407/zfExNiXHAgbqTZv8mJ0Aj5KDGg_ddomj4.png 512w,
                                            https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1024/v1764576407/zfExNiXHAgbqTZv8mJ0Aj5KDGg_ddomj4.png 1024w,
                                            https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto,w_1246/v1764576407/zfExNiXHAgbqTZv8mJ0Aj5KDGg_ddomj4.png 1246w`,
                                    },
                                  className: `framer-1b3d747 framer-1x2qjc5`,
                                  "data-framer-name": `Masorra Logo_Full_Brown`,
                                  layoutDependency: V,
                                  layoutId: `Ze6Rzwit_`,
                                }),
                              }),
                            ke() &&
                              c(w, {
                                href: { webPageId: `RkzIpqXph` },
                                motionChild: !0,
                                nodeId: `xepOTZr5r`,
                                scopeId: `ImOhXeRcM`,
                                children: c(te, {
                                  as: `a`,
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    intrinsicHeight: 528,
                                    intrinsicWidth: 3014,
                                    pixelHeight: 497,
                                    pixelWidth: 1246,
                                    positionX: `center`,
                                    positionY: `center`,
                                    src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png`,
                                    srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 1246w`,
                                  },
                                  className: `framer-je7634 framer-1x2qjc5`,
                                  "data-framer-name": `Masorra Logo_Full_Brown`,
                                  layoutDependency: V,
                                  layoutId: `xepOTZr5r`,
                                  ...Z(
                                    {
                                      d5kqZPzLo: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          intrinsicHeight: 528,
                                          intrinsicWidth: 3014,
                                          loading: P((d?.y || 0) + (d?.height || 100) - 80 + 0 + 0 + 8 + 0 + 0),
                                          pixelHeight: 497,
                                          pixelWidth: 1246,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `228px`,
                                          src: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png`,
                                          srcSet: `https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 512w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 1024w,https://res.cloudinary.com/do05dlmn8/image/upload/f_auto,q_auto/v1/Gemini_Shahi_Final_Compressed_sjotuz.png 1246w`,
                                        },
                                      },
                                    },
                                    I,
                                    L,
                                  ),
                                }),
                              }),
                            c(S, {
                              height: 48,
                              width: `180px`,
                              y: (d?.y || 0) + (d?.height || 100) - 80 + 0 + 0 + 8 + 0 + 16,
                              ...Z(
                                {
                                  UdWuXaj4b: {
                                    width: d?.width || `100vw`,
                                    y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80 + 0 + 144,
                                  },
                                  XP2pQwNGw: {
                                    width: d?.width || `100vw`,
                                    y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80 + 0 + 144,
                                  },
                                },
                                I,
                                L,
                              ),
                              children: c(D, {
                                className: `framer-d7ia58-container`,
                                layoutDependency: V,
                                layoutId: `usHDeorn7-container`,
                                nodeId: `usHDeorn7`,
                                rendersWithMotion: !0,
                                scopeId: `ImOhXeRcM`,
                                children: c(X, {
                                  dZBaOQ4Q4: `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                  height: `100%`,
                                  id: `usHDeorn7`,
                                  Ipvis9t3k: O,
                                  layoutId: `usHDeorn7`,
                                  LpZQLKgCy: `var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60))`,
                                  nVyspJRcv: E,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                  ...Z(
                                    {
                                      d5kqZPzLo: {
                                        dZBaOQ4Q4: `var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, rgb(233, 221, 204))`,
                                        LpZQLKgCy: `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                      },
                                    },
                                    I,
                                    L,
                                  ),
                                }),
                              }),
                            }),
                            c(S, {
                              height: 48,
                              width: `180px`,
                              y: (d?.y || 0) + (d?.height || 100) - 80 + 0 + 0 + 8 + 0 + 16,
                              ...Z(
                                {
                                  UdWuXaj4b: {
                                    width: d?.width || `100vw`,
                                    y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80 + 0 + 216,
                                  },
                                  XP2pQwNGw: {
                                    width: d?.width || `100vw`,
                                    y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80 + 0 + 216,
                                  },
                                },
                                I,
                                L,
                              ),
                              children: c(D, {
                                className: `framer-if188j-container`,
                                layoutDependency: V,
                                layoutId: `k98r8REmR-container`,
                                nodeId: `k98r8REmR`,
                                rendersWithMotion: !0,
                                scopeId: `ImOhXeRcM`,
                                children: c(X, {
                                  dZBaOQ4Q4: `var(--token-b7fe9ff7-831e-4f25-9761-0ed04d694d36, rgb(146, 122, 102))`,
                                  height: `100%`,
                                  id: `k98r8REmR`,
                                  Ipvis9t3k: j,
                                  layoutId: `k98r8REmR`,
                                  LpZQLKgCy: `var(--token-3db64dce-57f3-49c8-84d0-5286216c7ab9, rgb(86, 71, 60))`,
                                  nVyspJRcv: k,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                  ...Z(
                                    {
                                      d5kqZPzLo: {
                                        dZBaOQ4Q4: `var(--token-de4e9f38-5ec7-4df7-9d3d-0d3875578401, rgb(233, 221, 204))`,
                                        LpZQLKgCy: `var(--token-9f9cec1c-524d-4ed6-a3e9-4d2906d9c185, rgb(255, 255, 255))`,
                                      },
                                    },
                                    I,
                                    L,
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      ($t = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-KkVNX.framer-1x2qjc5, .framer-KkVNX .framer-1x2qjc5 { display: block; }`,
        `.framer-KkVNX.framer-1ylcsx2 { cursor: pointer; gap: 0px; height: 100px; overflow: visible; position: relative; width: 1440px; }`,
        `.framer-KkVNX .framer-ff73sw { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 80px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; width: 100%; }`,
        `.framer-KkVNX .framer-c4owiz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; max-width: 100%; overflow: visible; padding: 0px 100px 0px 100px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-KkVNX .framer-5p6kb4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-KkVNX .framer-4m7f0o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-KkVNX .framer-1v02tzf { aspect-ratio: 5.708333333333333 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: visible; position: relative; width: 228px; }`,
        `.framer-KkVNX .framer-10t0wws-container { flex: none; height: 24px; position: relative; width: 24px; }`,
        `.framer-KkVNX .framer-1ynbukn-container { flex: none; height: 20px; position: relative; width: 20px; }`,
        `.framer-KkVNX .framer-be5fjl { height: 150px; overflow: hidden; position: relative; width: 200px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-KkVNX .framer-192psov { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-KkVNX .framer-1posnd9-container, .framer-KkVNX .framer-ip570b-container, .framer-KkVNX .framer-d7ia58-container, .framer-KkVNX .framer-if188j-container { flex: none; height: 48px; position: relative; width: 180px; }`,
        `.framer-KkVNX .framer-1b3d747, .framer-KkVNX .framer-je7634 { flex: none; height: 64px; overflow: visible; position: relative; text-decoration: none; width: 228px; }`,
        `.framer-KkVNX.framer-v-5z2pm7.framer-1ylcsx2, .framer-KkVNX.framer-v-18a8xjk.framer-1ylcsx2, .framer-KkVNX.framer-v-u28w5u.framer-1ylcsx2 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: flex-start; padding: 0px; width: 390px; }`,
        `.framer-KkVNX.framer-v-5z2pm7 .framer-ff73sw, .framer-KkVNX.framer-v-u28w5u .framer-ff73sw { bottom: unset; height: 362px; justify-content: flex-start; left: unset; position: relative; }`,
        `.framer-KkVNX.framer-v-5z2pm7 .framer-c4owiz, .framer-KkVNX.framer-v-u28w5u .framer-c4owiz { flex: none; flex-direction: column; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 0px 16px 0px; }`,
        `.framer-KkVNX.framer-v-5z2pm7 .framer-5p6kb4, .framer-KkVNX.framer-v-18a8xjk .framer-5p6kb4, .framer-KkVNX.framer-v-u28w5u .framer-5p6kb4 { gap: unset; justify-content: space-between; padding: 16px 24px 24px 24px; width: 100%; }`,
        `.framer-KkVNX.framer-v-5z2pm7 .framer-4m7f0o, .framer-KkVNX.framer-v-1khrigm .framer-4m7f0o, .framer-KkVNX.framer-v-18a8xjk .framer-4m7f0o, .framer-KkVNX.framer-v-u28w5u .framer-4m7f0o { flex-direction: row; justify-content: flex-start; }`,
        `.framer-KkVNX.framer-v-5z2pm7 .framer-1v02tzf, .framer-KkVNX.framer-v-18a8xjk .framer-1v02tzf, .framer-KkVNX.framer-v-u28w5u .framer-1v02tzf { text-decoration: none; width: 228px; }`,
        `.framer-KkVNX.framer-v-5z2pm7 .framer-192psov, .framer-KkVNX.framer-v-u28w5u .framer-192psov { align-content: flex-start; align-items: flex-start; flex-direction: column; width: 100%; }`,
        `.framer-KkVNX.framer-v-5z2pm7 .framer-1posnd9-container, .framer-KkVNX.framer-v-5z2pm7 .framer-ip570b-container, .framer-KkVNX.framer-v-5z2pm7 .framer-d7ia58-container, .framer-KkVNX.framer-v-5z2pm7 .framer-if188j-container, .framer-KkVNX.framer-v-u28w5u .framer-1posnd9-container, .framer-KkVNX.framer-v-u28w5u .framer-ip570b-container, .framer-KkVNX.framer-v-u28w5u .framer-d7ia58-container, .framer-KkVNX.framer-v-u28w5u .framer-if188j-container { width: 100%; }`,
        `.framer-KkVNX.framer-v-121gzut.framer-1ylcsx2 { height: 80px; width: 390px; }`,
        `.framer-KkVNX.framer-v-121gzut .framer-ff73sw { height: unset; justify-content: flex-start; top: 0px; }`,
        `.framer-KkVNX.framer-v-121gzut .framer-c4owiz { flex: none; flex-direction: column; gap: 0px; height: 80px; justify-content: flex-start; padding: 0px; }`,
        `.framer-KkVNX.framer-v-121gzut .framer-5p6kb4, .framer-KkVNX.framer-v-1khrigm .framer-5p6kb4 { gap: unset; height: 80px; justify-content: space-between; padding: 16px 24px 24px 24px; width: 100%; }`,
        `.framer-KkVNX.framer-v-121gzut .framer-4m7f0o { flex-direction: row; justify-content: flex-start; order: 0; }`,
        `.framer-KkVNX.framer-v-121gzut .framer-1v02tzf, .framer-KkVNX.framer-v-1khrigm .framer-1v02tzf { aspect-ratio: unset; height: 40px; }`,
        `.framer-KkVNX.framer-v-121gzut .framer-10t0wws-container { order: 1; }`,
        `.framer-KkVNX.framer-v-1khrigm.framer-1ylcsx2 { height: 80px; overflow: hidden; width: 390px; }`,
        `.framer-KkVNX.framer-v-1khrigm .framer-c4owiz { flex: none; flex-direction: column; gap: 0px; height: 80px; padding: 0px; }`,
        `.framer-KkVNX.framer-v-18a8xjk .framer-ff73sw { bottom: unset; height: min-content; justify-content: flex-start; left: unset; position: relative; }`,
        `.framer-KkVNX.framer-v-18a8xjk .framer-c4owiz { flex: none; flex-direction: column; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; }`,
      ]),
      ($ = I(Qt, $t, `framer-KkVNX`)),
      ($.displayName = `Nav/Navbar`),
      ($.defaultProps = { height: 100, width: 1440 }),
      k($, {
        variant: {
          options: [
            `ZD3Yxe0Uv`,
            `UdWuXaj4b`,
            `jr2HRS0Hp`,
            `d5kqZPzLo`,
            `ynOSTAML_`,
            `DKRFDhAEy`,
            `coeWLBEnn`,
            `XP2pQwNGw`,
          ],
          optionTitles: [
            `Desktop`,
            `Mobile Open`,
            `On Start`,
            `Banner`,
            `Mobile Banner`,
            `Mobile On Start`,
            `Mobile`,
            `mOB oPEN - aBT`,
          ],
          title: `Variant`,
          type: C.Enum,
        },
        Y7ZoV_ppK: { defaultValue: `ORIGINAL`, displayTextArea: !1, title: `Menu Title 1`, type: C.String },
        leYVePuI9: { title: `Link 1`, type: C.Link },
        gsQx14FRC: { title: `Link 2`, type: C.Link },
        tXGFQVaIt: { defaultValue: `ORIGINAL`, displayTextArea: !1, title: `Menu Title 2`, type: C.String },
        EWWB4AZmK: { title: `Link 3`, type: C.Link },
        Don9rPm4t: { defaultValue: `ORIGINAL`, displayTextArea: !1, title: `Menu Title 3`, type: C.String },
        rvnUxmeBE: { title: `Link 4`, type: C.Link },
        R9rVfKm5A: { defaultValue: `ORIGINAL`, displayTextArea: !1, title: `Menu Title 4`, type: C.String },
        XCOyJnKTR: { defaultValue: 1, max: 1, min: 0, step: 0.01, title: `Opacity`, type: C.Number },
        zIUK6AEbl: { title: `Hover`, type: C.EventHandler },
        nbpUZHzLI: { title: `Click`, type: C.EventHandler },
      }),
      O($, [{ explicitInter: !0, fonts: [] }, ...Mt, ...Nt, ...Ft], { supportsExplicitInterCodegen: !0 }));
  }),
  tn,
  nn,
  rn,
  an = e(() => {
    (F(),
      j.loadFonts([]),
      (tn = [{ explicitInter: !0, fonts: [] }]),
      (nn = [
        `.framer-9xgqC .framer-styles-preset-1d1cl26:not(.rich-text-wrapper), .framer-9xgqC .framer-styles-preset-1d1cl26.rich-text-wrapper a { --framer-link-current-text-decoration: none; --framer-link-hover-text-color: var(--token-78a945e6-b740-41ea-bfeb-9b2b3be8a5dc, #f9f3f0); --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-fddfefc0-59ca-420f-8731-f49a4984a56d, #e9ddcc); --framer-link-text-decoration: none; }`,
      ]),
      (rn = `framer-9xgqC`));
  });
export {
  $ as FramerImOhXeRcM,
  G as FramerLogBUlavO,
  K as Icon,
  Ie as SmoothScroll,
  rn as className,
  V as className$1,
  L as className$2,
  nn as css,
  B as css$1,
  ue as css$2,
  tn as fonts,
  z as fonts$1,
  le as fonts$2,
  Qe as init_Iconoir,
  en as init_ImOhXeRcM,
  de as init_JTrlLj3jx,
  De as init_LogBUlavO,
  an as init_Qu7GZfWqZ,
  Le as init_SmoothScroll_Prod,
  H as init_kv_coXiBH,
};
//# sourceMappingURL=Qu7GZfWqZ._gouOARo.mjs.map
