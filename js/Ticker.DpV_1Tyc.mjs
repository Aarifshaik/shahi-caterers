import { __esmMin as e } from "./rolldown-runtime.BAw5_7tg.mjs";
import {
  fe as t,
  init_jsx_runtime as n,
  init_npm_react_18_2 as r,
  init_ssg_sandbox_shims as i,
  j as a,
  p as o,
  pe as s,
  q as c,
  se as l,
  te as u,
  u as d,
  ue as f,
  window as p,
  ye as m,
} from "./react.5yPobhy_.mjs";
import {
  LayoutGroup as h,
  frame as g,
  init_framer_motion_5EXT2AMG as _,
  motion as ee,
  useInView as te,
  useMotionValue as v,
  useReducedMotion as y,
  useTransform as ne,
} from "./motion.B5kiQUnY.mjs";
import {
  ControlType as b,
  RenderTarget as re,
  addPropertyControls as ie,
  init_framer_BTRNGHWV as ae,
} from "./framer.CK3DUZZB.mjs";
function x(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var S,
  C,
  w = e(() => {
    ((S = (e) => e), (C = { ms: (e) => 1e3 * e, s: (e) => e / 1e3 }));
  });
function oe(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = E(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > D && ++s < se);
  return o;
}
function T(e, t, n, r) {
  if (e === t && n === r) return S;
  let i = (t) => oe(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : E(i(e), t, r));
}
var E,
  D,
  se,
  ce = e(() => {
    (w(), (E = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e), (D = 1e-7), (se = 12));
  }),
  le,
  ue = e(() => {
    (ce(),
      (le = {
        ease: T(0.25, 0.1, 0.25, 1),
        "ease-in": T(0.42, 0, 1, 1),
        "ease-in-out": T(0.42, 0, 0.58, 1),
        "ease-out": T(0, 0, 0.58, 1),
      }));
  });
function O(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  }
  return n;
}
var k = e(() => {}),
  A,
  de,
  j,
  M,
  N = e(() => {
    ((A = {}),
      Object.defineProperty(A, `__esModule`, { value: !0 }),
      (A.warning = function () {}),
      (A.invariant = function () {}),
      (de = A.__esModule),
      (j = A.warning),
      (M = A.invariant));
  });
function P(e, t, n) {
  let r = Math.max(t - I, 0);
  return x(n - e(r), t - r);
}
function F(e, t, n) {
  return (e < t && n >= t) || (e > t && n <= t);
}
function fe(e) {
  let t,
    n = B,
    r = e(0),
    i = [r.current];
  for (; !r.done && n < V; )
    ((r = e(n)), i.push(r.done ? r.target : r.current), t === void 0 && r.hasReachedTarget && (t = n), (n += B));
  let a = n - B;
  return (i.length === 1 && i.push(r.current), { keyframes: i, duration: a / 1e3, overshootDuration: (t ?? a) / 1e3 });
}
var I,
  L,
  R,
  z,
  pe,
  B,
  V,
  H = e(() => {
    (w(),
      (I = 5),
      (L = { stiffness: 100, damping: 10, mass: 1 }),
      (R = (e = L.stiffness, t = L.damping, n = L.mass) => t / (2 * Math.sqrt(e * n))),
      (z = ({
        stiffness: e = L.stiffness,
        damping: t = L.damping,
        mass: n = L.mass,
        from: r = 0,
        to: i = 1,
        velocity: a = 0,
        restSpeed: o = 2,
        restDistance: s = 0.5,
      } = {}) => {
        a = a ? C.s(a) : 0;
        let c = { done: !1, hasReachedTarget: !1, current: r, target: i },
          l = i - r,
          u = Math.sqrt(e / n) / 1e3,
          d = R(e, t, n),
          f;
        if (d < 1) {
          let e = u * Math.sqrt(1 - d * d);
          f = (t) => i - Math.exp(-d * u * t) * (((d * u * l - a) / e) * Math.sin(e * t) + l * Math.cos(e * t));
        } else f = (e) => i - Math.exp(-u * e) * (l + (u * l - a) * e);
        return (e) => {
          c.current = f(e);
          let t = e === 0 ? a : P(f, e, c.current),
            n = Math.abs(t) <= o,
            l = Math.abs(i - c.current) <= s;
          return ((c.done = n && l), (c.hasReachedTarget = F(r, i, c.current)), c);
        };
      }),
      (pe = ({
        from: e = 0,
        velocity: t = 0,
        power: n = 0.8,
        decay: r = 0.325,
        bounceDamping: i,
        bounceStiffness: a,
        changeTarget: o,
        min: s,
        max: c,
        restDistance: l = 0.5,
        restSpeed: u,
      }) => {
        r = C.ms(r);
        let d = { hasReachedTarget: !1, done: !1, current: e, target: e },
          f = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
          p = (e) => (s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c),
          m = n * t,
          h = e + m,
          g = o === void 0 ? h : o(h);
        ((d.target = g), g !== h && (m = g - e));
        let _ = (e) => -m * Math.exp(-e / r),
          ee = (e) => g + _(e),
          te = (e) => {
            let t = _(e),
              n = ee(e);
            ((d.done = Math.abs(t) <= l), (d.current = d.done ? g : n));
          },
          v,
          y,
          ne = (e) => {
            f(d.current) &&
              ((v = e),
              (y = z({
                from: d.current,
                to: p(d.current),
                velocity: P(ee, e, d.current),
                damping: i,
                stiffness: a,
                restDistance: l,
                restSpeed: u,
              })));
          };
        return (
          ne(0),
          (e) => {
            let t = !1;
            return (
              !y && v === void 0 && ((t = !0), te(e), ne(e)),
              v !== void 0 && e > v
                ? ((d.hasReachedTarget = !0), y(e - v))
                : ((d.hasReachedTarget = !1), !t && te(e), d)
            );
          }
        );
      }),
      (B = 10),
      (V = 1e4));
  });
function U(e, t) {
  var n;
  return (
    typeof e == `string`
      ? t
        ? ((n = t[e]) ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function W(e) {
  let t = new WeakMap();
  return (n = {}) => {
    let r = new Map(),
      i = (t = 0, i = 100, a = 0, o = !1) => {
        let s = `${t}-${i}-${a}-${o}`;
        return (
          r.has(s) ||
            r.set(
              s,
              e(
                Object.assign(
                  { from: t, to: i, velocity: a, restSpeed: o ? 0.05 : 2, restDistance: o ? 0.01 : 0.5 },
                  n,
                ),
              ),
            ),
          r.get(s)
        );
      },
      a = (e) => (t.has(e) || t.set(e, fe(e)), t.get(e));
    return {
      createAnimation: (e, t, n, r, o) => {
        var s, c;
        let l,
          u = e.length,
          d = n && u <= 2 && e.every(Me);
        if (d) {
          let n = e[u - 1],
            d = u === 1 ? null : e[0],
            f = 0,
            p = 0,
            m = o?.generator;
          if (m) {
            let { animation: t, generatorStartTime: n } = o,
              r = t?.startTime || n || 0,
              i = t?.currentTime || performance.now() - r,
              a = m(i).current;
            ((p = (s = d) ?? a), (u === 1 || (u === 2 && e[0] === null)) && (f = P((e) => m(e).current, i, a)));
          } else p = (c = d) ?? parseFloat(t());
          let h = i(p, n, f, r?.includes(`scale`)),
            g = a(h);
          ((l = Object.assign(Object.assign({}, g), { easing: `linear` })),
            o && ((o.generator = h), (o.generatorStartTime = performance.now())));
        } else {
          let e = a(i(0, 100));
          l = { easing: `ease`, duration: e.overshootDuration };
        }
        return l;
      },
    };
  };
}
function me(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = U(e),
    o = new WeakMap(),
    s = (e) => {
      e.forEach((e) => {
        let n = o.get(e.target);
        if (e.isIntersecting !== !!n)
          if (e.isIntersecting) {
            let n = t(e);
            typeof n == `function` ? o.set(e.target, n) : c.unobserve(e.target);
          } else n && (n(e), o.delete(e.target));
      });
    },
    c = new IntersectionObserver(s, { root: n, rootMargin: r, threshold: typeof i == `number` ? i : Fe[i] });
  return (a.forEach((e) => c.observe(e)), () => c.disconnect());
}
function G(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e ? e.getBBox() : { width: e.offsetWidth, height: e.offsetHeight };
}
function K({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = X.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return G(e, n);
        },
      });
    });
}
function he(e) {
  e.forEach(K);
}
function ge() {
  typeof ResizeObserver < `u` && (Z = new ResizeObserver(he));
}
function _e(e, t) {
  Z || ge();
  let n = U(e);
  return (
    n.forEach((e) => {
      let n = X.get(e);
      (n || ((n = new Set()), X.set(e, n)), n.add(t), Z?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = X.get(e);
        (n?.delete(t), (n != null && n.size) || Z == null || Z.unobserve(e));
      });
    }
  );
}
function q() {
  (($ = () => {
    let e = { width: p.innerWidth, height: p.innerHeight },
      t = { target: p, size: e, contentSize: e };
    Q.forEach((e) => e(t));
  }),
    p.addEventListener(`resize`, $));
}
function ve(e) {
  return (
    Q.add(e),
    $ || q(),
    () => {
      (Q.delete(e), !Q.size && $ && ($ = void 0));
    }
  );
}
function ye(e, t) {
  return typeof e == `function` ? ve(e) : _e(e, t);
}
function J(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function be(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var xe,
  Se,
  Y,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  X,
  Z,
  Q,
  $,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He = e(() => {
    for (let e in (i(),
    w(),
    ue(),
    k(),
    N(),
    H(),
    (xe = [``, `X`, `Y`, `Z`]),
    (Se = [`translate`, `scale`, `rotate`, `skew`]),
    (Y = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
    (Ce = {
      translate: { syntax: `<length-percentage>`, initialValue: `0px`, toDefaultUnit: (e) => e + `px` },
      rotate: Y,
      scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: S },
      skew: Y,
    }),
    (we = new Map()),
    (Te = (e) => `--motion-${e}`),
    (Ee = [`x`, `y`, `z`]),
    Se.forEach((e) => {
      xe.forEach((t) => {
        (Ee.push(e + t), we.set(Te(e + t), Ce[e]));
      });
    }),
    (De = new Set(Ee)),
    (Oe = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
    (ke = {
      cssRegisterProperty: () => typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
      partialKeyframes: () => {
        try {
          Oe({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      },
      finished: () => !!Oe({ opacity: [0, 1] }).finished,
    }),
    (Ae = {}),
    (je = {}),
    ke))
      je[e] = () => (Ae[e] === void 0 && (Ae[e] = ke[e]()), Ae[e]);
    ((Me = (e) => typeof e != `string`),
      (Ne = W(z)),
      (Pe = W(pe)),
      (Fe = { any: 0, all: 1 }),
      (X = new WeakMap()),
      (Q = new Set()),
      (Ie = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r,
            a = O(r, [`once`]);
          return me(
            e,
            (r) => {
              if ((t(), be(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), be(e, `viewleave`, t));
                };
            },
            a,
          );
        },
      }),
      (Le = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), J(e, t, r));
      }),
      (Re = {
        isActive: (e) => !!e.hover,
        subscribe: (e, { enable: t, disable: n }) => {
          let r = Le(e, `hoverstart`, t),
            i = Le(e, `hoverend`, n);
          return (
            e.addEventListener(`pointerenter`, r),
            e.addEventListener(`pointerleave`, i),
            () => {
              (e.removeEventListener(`pointerenter`, r), e.removeEventListener(`pointerleave`, i));
            }
          );
        },
      }),
      (ze = {
        isActive: (e) => !!e.press,
        subscribe: (e, { enable: t, disable: n }) => {
          let r = (t) => {
              (n(), J(e, `pressend`, t), p.removeEventListener(`pointerup`, r));
            },
            i = (n) => {
              (t(), J(e, `pressstart`, n), p.addEventListener(`pointerup`, r));
            };
          return (
            e.addEventListener(`pointerdown`, i),
            () => {
              (e.removeEventListener(`pointerdown`, i), p.removeEventListener(`pointerup`, r));
            }
          );
        },
      }),
      (Be = { inView: Ie, hover: Re, press: ze }),
      (Ve = [`initial`, `animate`, ...Object.keys(Be), `exit`]));
  });
function Ue(e) {
  let {
      slots: n = [],
      gap: r,
      padding: i,
      paddingPerSide: p,
      paddingTop: _,
      paddingRight: b,
      paddingBottom: ie,
      paddingLeft: ae,
      speed: x,
      hoverFactor: S,
      direction: C,
      alignment: w,
      sizingOptions: oe,
      fadeOptions: T,
      style: E,
    } = e,
    { fadeContent: D, overflow: se, fadeWidth: ce, fadeInset: le, fadeAlpha: ue } = T,
    { widthType: O, heightType: k } = oe,
    A = p ? `${_}px ${b}px ${ie}px ${ae}px` : `${i}px`,
    de = re.current(),
    j = de === re.canvas || de === re.export,
    M = n.filter(Boolean),
    N = a.count(M),
    P = N > 0;
  C === !0 && (C = `left`);
  let F = C === `left` || C === `right`,
    fe = v(0),
    I = Ge[C];
  ne(fe, I);
  let L = s(null),
    R = l(() => [{ current: null }, { current: null }], []),
    [z, pe] = m({ parent: null, children: null }),
    B = null,
    V = [],
    H = 0,
    U = 0;
  (j && ((H = N ? Math.floor(10 / N) : 0), (U = 1)),
    !j && P && z.parent && ((H = Math.round((z.parent / z.children) * 2) + 1), (H = Math.min(H, We)), (U = 1)));
  let W = u(() => {
      if (P && L.current) {
        let e = F ? L.current.offsetWidth : L.current.offsetHeight,
          t = R[0].current ? (F ? R[0].current.offsetLeft : R[0].current.offsetTop) : 0,
          n = R[1].current
            ? F
              ? R[1].current.offsetLeft + R[1].current.offsetWidth
              : R[1].current.offsetTop + R[1].current.offsetHeight
            : 0,
          i = n - t + r;
        pe({ parent: e, children: i });
      }
    }, []),
    me = j ? { contentVisibility: `auto` } : {};
  if (P) {
    if (!j) {
      let e = s(!0);
      t(
        () => (
          g.read(W, !1, !0),
          ye(L.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && g.read(W, !1, !0), (e.current = !1));
          })
        ),
        [],
      );
    }
    B = a.map(M, (e, t) => {
      let n;
      (t === 0 && (n = R[0]), t === M.length - 1 && (n = R[1]));
      let r = { width: O ? e.props?.width : `100%`, height: k ? e.props?.height : `100%` };
      return o(h, {
        inherit: `id`,
        children: o(`li`, {
          ref: n,
          style: r,
          children: c(
            e,
            {
              style: { ...e.props?.style, ...r, flexShrink: 0, ...me },
              layoutId: e.props.layoutId ? e.props.layoutId + `-original-` + t : void 0,
            },
            e.props?.children,
          ),
        }),
      });
    });
  }
  let G = j ? !0 : te(L);
  if (!j)
    for (let e = 0; e < H; e++)
      V = V.concat(
        a.map(M, (t, n) => {
          let r = {
            width: O ? t.props?.width : `100%`,
            height: k ? t.props?.height : `100%`,
            willChange: G ? `transform` : void 0,
          };
          return o(
            h,
            {
              inherit: `id`,
              children: o(
                `li`,
                {
                  style: r,
                  "aria-hidden": !0,
                  children: c(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: O ? t.props?.width : `100%`,
                        height: k ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...me,
                      },
                      layoutId: t.props.layoutId ? t.props.layoutId + `-dupe-` + e : void 0,
                    },
                    t.props?.children,
                  ),
                },
                e + `li` + n,
              ),
            },
            e + `lg` + n,
          );
        }),
      );
  let K = z.children + z.children * Math.round(z.parent / z.children);
  (s(null), s(null), s(0));
  let he = s(!1),
    ge = y(),
    _e = s(null),
    q = s(null);
  if (!j) {
    f(() => {
      if (!(ge || !K || !x))
        return (
          (q.current = _e.current.animate(
            { transform: [I(0), I(K)] },
            { duration: (Math.abs(K) / x) * 1e3, iterations: 1 / 0, easing: `linear` },
          )),
          () => q.current.cancel()
        );
    }, [S, K, x]);
    let e = u(() => {
      if (!q.current) return;
      let e = document.hidden;
      G && !e && q.current.playState === `paused`
        ? q.current.play()
        : (!G || e) && q.current.playState === `running` && q.current.pause();
    }, [G]);
    (f(() => {
      e();
    }, [G, S, K, x]),
      f(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e],
      ));
  }
  let ve = F ? `to right` : `to bottom`,
    J = ce / 2,
    be = 100 - ce / 2,
    xe = Ze(le, 0, J),
    Se = 100 - le,
    Y = `linear-gradient(${ve}, rgba(0, 0, 0, ${ue}) ${xe}%, rgba(0, 0, 0, 1) ${J}%, rgba(0, 0, 0, 1) ${be}%, rgba(0, 0, 0, ${ue}) ${Se}%)`;
  return P
    ? o(`section`, {
        style: {
          ...Ke,
          opacity: U,
          WebkitMaskImage: D ? Y : void 0,
          maskImage: D ? Y : void 0,
          overflow: se ? `visible` : `hidden`,
          padding: A,
        },
        ref: L,
        children: d(ee.ul, {
          ref: _e,
          style: {
            ...Ke,
            gap: r,
            top: C === `bottom` && Qe(K) ? -K : void 0,
            left: C === `right` && Qe(K) ? -K : void 0,
            placeItems: w,
            position: `relative`,
            flexDirection: F ? `row` : `column`,
            ...E,
            willChange: j || !G ? `auto` : `transform`,
            transform: I(0),
          },
          onMouseEnter: () => {
            ((he.current = !0), q.current && (q.current.playbackRate = S));
          },
          onMouseLeave: () => {
            ((he.current = !1), q.current && (q.current.playbackRate = 1));
          },
          children: [B, V],
        }),
      })
    : d(`section`, {
        style: qe,
        children: [
          o(`div`, { style: Je, children: `✨` }),
          o(`p`, { style: Ye, children: `Connect to Content` }),
          o(`p`, { style: Xe, children: `Add layers or components to infinitely loop on your page.` }),
        ],
      });
}
var We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e = e(() => {
    (n(),
      r(),
      ae(),
      _(),
      He(),
      (We = 100),
      (Ge = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (Ue.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: { fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        direction: !0,
      }),
      ie(Ue, {
        slots: { type: b.Array, title: `Children`, control: { type: b.ComponentInstance } },
        speed: {
          type: b.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: b.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: b.Enum,
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
        gap: { type: b.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: b.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: b.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: b.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: b.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: b.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: b.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: b.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: b.Number,
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
              type: b.Number,
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
              type: b.Number,
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
        hoverFactor: {
          type: b.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Ke = {
        display: `flex`,
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
      (qe = {
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
      (Je = { fontSize: 32, marginBottom: 10 }),
      (Ye = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Xe = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: `center` }),
      (Ze = (e, t, n) => Math.min(Math.max(e, t), n)),
      (Qe = (e) => typeof e == `number` && !isNaN(e)));
  });
export { Ue as Ticker, $e as init_Ticker, He as init_index_es, ye as resize };
//# sourceMappingURL=Ticker.DpV_1Tyc.mjs.map
