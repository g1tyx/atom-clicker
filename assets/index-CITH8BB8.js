const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/browserAll-Dk8nsIpz.js",
      "assets/webworkerAll-sOxMhRmM.js",
      "assets/colorToUniform-qd8IkZwA.js",
      "assets/WebGPURenderer-D3kmfamk.js",
      "assets/SharedSystems-CWv73Smb.js",
      "assets/WebGLRenderer-Cla3n4iy.js",
    ])
) => i.map((i) => d[i]);
var qo = Object.defineProperty;
var Ko = (s, t, e) =>
  t in s
    ? qo(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (s[t] = e);
var ni = (s, t, e) => Ko(s, typeof t != "symbol" ? t + "" : t, e);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList")
        for (const a of r.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && i(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(n) {
    const r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function i(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = e(n);
    fetch(n.href, r);
  }
})();
function Y() {}
const Ys = (s) => s;
function ua(s) {
  return s();
}
function zn() {
  return Object.create(null);
}
function Kt(s) {
  s.forEach(ua);
}
function De(s) {
  return typeof s == "function";
}
function Mt(s, t) {
  return s != s
    ? t == t
    : s !== t || (s && typeof s == "object") || typeof s == "function";
}
let xs;
function Dn(s, t) {
  return s === t
    ? !0
    : (xs || (xs = document.createElement("a")), (xs.href = t), s === xs.href);
}
function Zo(s) {
  return Object.keys(s).length === 0;
}
function hn(s, ...t) {
  if (s == null) {
    for (const i of t) i(void 0);
    return Y;
  }
  const e = s.subscribe(...t);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function Ht(s) {
  let t;
  return hn(s, (e) => (t = e))(), t;
}
function ut(s, t, e) {
  s.$$.on_destroy.push(hn(t, e));
}
function da(s, t, e) {
  return s.set(e), t;
}
const fa = typeof window < "u";
let cn = fa ? () => window.performance.now() : () => Date.now(),
  un = fa ? (s) => requestAnimationFrame(s) : Y;
const Ee = new Set();
function pa(s) {
  Ee.forEach((t) => {
    t.c(s) || (Ee.delete(t), t.f());
  }),
    Ee.size !== 0 && un(pa);
}
function dn(s) {
  let t;
  return (
    Ee.size === 0 && un(pa),
    {
      promise: new Promise((e) => {
        Ee.add((t = { c: s, f: e }));
      }),
      abort() {
        Ee.delete(t);
      },
    }
  );
}
const Qo =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function P(s, t) {
  s.appendChild(t);
}
function ma(s) {
  if (!s) return document;
  const t = s.getRootNode ? s.getRootNode() : s.ownerDocument;
  return t && t.host ? t : s.ownerDocument;
}
function Jo(s) {
  const t = M("style");
  return (t.textContent = "/* empty */"), tl(ma(s), t), t.sheet;
}
function tl(s, t) {
  return P(s.head || s, t), t.sheet;
}
function B(s, t, e) {
  s.insertBefore(t, e || null);
}
function I(s) {
  s.parentNode && s.parentNode.removeChild(s);
}
function Ue(s, t) {
  for (let e = 0; e < s.length; e += 1) s[e] && s[e].d(t);
}
function M(s) {
  return document.createElement(s);
}
function Q(s) {
  return document.createTextNode(s);
}
function O() {
  return Q(" ");
}
function ga() {
  return Q("");
}
function qt(s, t, e, i) {
  return s.addEventListener(t, e, i), () => s.removeEventListener(t, e, i);
}
function S(s, t, e) {
  e == null
    ? s.removeAttribute(t)
    : s.getAttribute(t) !== e && s.setAttribute(t, e);
}
function el(s) {
  return Array.from(s.childNodes);
}
function vt(s, t) {
  (t = "" + t), s.data !== t && (s.data = t);
}
function At(s, t, e, i) {
  e == null ? s.style.removeProperty(t) : s.style.setProperty(t, e, "");
}
function dt(s, t, e) {
  s.classList.toggle(t, !!e);
}
function sl(s, t, { bubbles: e = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(s, { detail: t, bubbles: e, cancelable: i });
}
const Gs = new Map();
let Os = 0;
function il(s) {
  let t = 5381,
    e = s.length;
  for (; e--; ) t = ((t << 5) - t) ^ s.charCodeAt(e);
  return t >>> 0;
}
function nl(s, t) {
  const e = { stylesheet: Jo(t), rules: {} };
  return Gs.set(s, e), e;
}
function zs(s, t, e, i, n, r, a, o = 0) {
  const l = 16.666 / i;
  let h = `{
`;
  for (let m = 0; m <= 1; m += l) {
    const _ = t + (e - t) * r(m);
    h +=
      m * 100 +
      `%{${a(_, 1 - _)}}
`;
  }
  const c =
      h +
      `100% {${a(e, 1 - e)}}
}`,
    u = `__svelte_${il(c)}_${o}`,
    d = ma(s),
    { stylesheet: f, rules: p } = Gs.get(d) || nl(d, s);
  p[u] ||
    ((p[u] = !0), f.insertRule(`@keyframes ${u} ${c}`, f.cssRules.length));
  const g = s.style.animation || "";
  return (
    (s.style.animation = `${
      g ? `${g}, ` : ""
    }${u} ${i}ms linear ${n}ms 1 both`),
    (Os += 1),
    u
  );
}
function Ds(s, t) {
  const e = (s.style.animation || "").split(", "),
    i = e.filter(
      t ? (r) => r.indexOf(t) < 0 : (r) => r.indexOf("__svelte") === -1
    ),
    n = e.length - i.length;
  n && ((s.style.animation = i.join(", ")), (Os -= n), Os || rl());
}
function rl() {
  un(() => {
    Os ||
      (Gs.forEach((s) => {
        const { ownerNode: t } = s.stylesheet;
        t && I(t);
      }),
      Gs.clear());
  });
}
let hs;
function ns(s) {
  hs = s;
}
function _a() {
  if (!hs) throw new Error("Function called outside component initialization");
  return hs;
}
function fn(s) {
  _a().$$.on_mount.push(s);
}
function Xs(s) {
  _a().$$.on_destroy.push(s);
}
const Pe = [],
  Un = [];
let Ie = [];
const Nn = [],
  al = Promise.resolve();
let Gi = !1;
function ol() {
  Gi || ((Gi = !0), al.then(ya));
}
function Nt(s) {
  Ie.push(s);
}
const ri = new Set();
let ve = 0;
function ya() {
  if (ve !== 0) return;
  const s = hs;
  do {
    try {
      for (; ve < Pe.length; ) {
        const t = Pe[ve];
        ve++, ns(t), ll(t.$$);
      }
    } catch (t) {
      throw ((Pe.length = 0), (ve = 0), t);
    }
    for (ns(null), Pe.length = 0, ve = 0; Un.length; ) Un.pop()();
    for (let t = 0; t < Ie.length; t += 1) {
      const e = Ie[t];
      ri.has(e) || (ri.add(e), e());
    }
    Ie.length = 0;
  } while (Pe.length);
  for (; Nn.length; ) Nn.pop()();
  (Gi = !1), ri.clear(), ns(s);
}
function ll(s) {
  if (s.fragment !== null) {
    s.update(), Kt(s.before_update);
    const t = s.dirty;
    (s.dirty = [-1]),
      s.fragment && s.fragment.p(s.ctx, t),
      s.after_update.forEach(Nt);
  }
}
function hl(s) {
  const t = [],
    e = [];
  Ie.forEach((i) => (s.indexOf(i) === -1 ? t.push(i) : e.push(i))),
    e.forEach((i) => i()),
    (Ie = t);
}
let Xe;
function pn() {
  return (
    Xe ||
      ((Xe = Promise.resolve()),
      Xe.then(() => {
        Xe = null;
      })),
    Xe
  );
}
function me(s, t, e) {
  s.dispatchEvent(sl(`${t ? "intro" : "outro"}${e}`));
}
const Fs = new Set();
let Dt;
function ge() {
  Dt = { r: 0, c: [], p: Dt };
}
function _e() {
  Dt.r || Kt(Dt.c), (Dt = Dt.p);
}
function H(s, t) {
  s && s.i && (Fs.delete(s), s.i(t));
}
function q(s, t, e, i) {
  if (s && s.o) {
    if (Fs.has(s)) return;
    Fs.add(s),
      Dt.c.push(() => {
        Fs.delete(s), i && (e && s.d(1), i());
      }),
      s.o(t);
  } else i && i();
}
const mn = { duration: 0 };
function cl(s, t, e) {
  const i = { direction: "in" };
  let n = t(s, e, i),
    r = !1,
    a,
    o,
    l = 0;
  function h() {
    a && Ds(s, a);
  }
  function c() {
    const {
      delay: d = 0,
      duration: f = 300,
      easing: p = Ys,
      tick: g = Y,
      css: m,
    } = n || mn;
    m && (a = zs(s, 0, 1, f, d, p, m, l++)), g(0, 1);
    const _ = cn() + d,
      y = _ + f;
    o && o.abort(),
      (r = !0),
      Nt(() => me(s, !0, "start")),
      (o = dn((x) => {
        if (r) {
          if (x >= y) return g(1, 0), me(s, !0, "end"), h(), (r = !1);
          if (x >= _) {
            const b = p((x - _) / f);
            g(b, 1 - b);
          }
        }
        return r;
      }));
  }
  let u = !1;
  return {
    start() {
      u || ((u = !0), Ds(s), De(n) ? ((n = n(i)), pn().then(c)) : c());
    },
    invalidate() {
      u = !1;
    },
    end() {
      r && (h(), (r = !1));
    },
  };
}
function ul(s, t, e) {
  const i = { direction: "out" };
  let n = t(s, e, i),
    r = !0,
    a;
  const o = Dt;
  o.r += 1;
  let l;
  function h() {
    const {
      delay: c = 0,
      duration: u = 300,
      easing: d = Ys,
      tick: f = Y,
      css: p,
    } = n || mn;
    p && (a = zs(s, 1, 0, u, c, d, p));
    const g = cn() + c,
      m = g + u;
    Nt(() => me(s, !1, "start")),
      "inert" in s && ((l = s.inert), (s.inert = !0)),
      dn((_) => {
        if (r) {
          if (_ >= m) return f(0, 1), me(s, !1, "end"), --o.r || Kt(o.c), !1;
          if (_ >= g) {
            const y = d((_ - g) / u);
            f(1 - y, y);
          }
        }
        return r;
      });
  }
  return (
    De(n)
      ? pn().then(() => {
          (n = n(i)), h();
        })
      : h(),
    {
      end(c) {
        c && "inert" in s && (s.inert = l),
          c && n.tick && n.tick(1, 0),
          r && (a && Ds(s, a), (r = !1));
      },
    }
  );
}
function Re(s, t, e, i) {
  let r = t(s, e, { direction: "both" }),
    a = i ? 0 : 1,
    o = null,
    l = null,
    h = null,
    c;
  function u() {
    h && Ds(s, h);
  }
  function d(p, g) {
    const m = p.b - a;
    return (
      (g *= Math.abs(m)),
      {
        a,
        b: p.b,
        d: m,
        duration: g,
        start: p.start,
        end: p.start + g,
        group: p.group,
      }
    );
  }
  function f(p) {
    const {
        delay: g = 0,
        duration: m = 300,
        easing: _ = Ys,
        tick: y = Y,
        css: x,
      } = r || mn,
      b = { start: cn() + g, b: p };
    p || ((b.group = Dt), (Dt.r += 1)),
      "inert" in s &&
        (p ? c !== void 0 && (s.inert = c) : ((c = s.inert), (s.inert = !0))),
      o || l
        ? (l = b)
        : (x && (u(), (h = zs(s, a, p, m, g, _, x))),
          p && y(0, 1),
          (o = d(b, m)),
          Nt(() => me(s, p, "start")),
          dn((C) => {
            if (
              (l &&
                C > l.start &&
                ((o = d(l, m)),
                (l = null),
                me(s, o.b, "start"),
                x && (u(), (h = zs(s, a, o.b, o.duration, 0, _, r.css)))),
              o)
            ) {
              if (C >= o.end)
                y((a = o.b), 1 - a),
                  me(s, o.b, "end"),
                  l || (o.b ? u() : --o.group.r || Kt(o.group.c)),
                  (o = null);
              else if (C >= o.start) {
                const F = C - o.start;
                (a = o.a + o.d * _(F / o.duration)), y(a, 1 - a);
              }
            }
            return !!(o || l);
          }));
  }
  return {
    run(p) {
      De(r)
        ? pn().then(() => {
            (r = r({ direction: p ? "in" : "out" })), f(p);
          })
        : f(p);
    },
    end() {
      u(), (o = l = null);
    },
  };
}
function kt(s) {
  return (s == null ? void 0 : s.length) !== void 0 ? s : Array.from(s);
}
function Bt(s) {
  s && s.c();
}
function St(s, t, e) {
  const { fragment: i, after_update: n } = s.$$;
  i && i.m(t, e),
    Nt(() => {
      const r = s.$$.on_mount.map(ua).filter(De);
      s.$$.on_destroy ? s.$$.on_destroy.push(...r) : Kt(r),
        (s.$$.on_mount = []);
    }),
    n.forEach(Nt);
}
function Ct(s, t) {
  const e = s.$$;
  e.fragment !== null &&
    (hl(e.after_update),
    Kt(e.on_destroy),
    e.fragment && e.fragment.d(t),
    (e.on_destroy = e.fragment = null),
    (e.ctx = []));
}
function dl(s, t) {
  s.$$.dirty[0] === -1 && (Pe.push(s), ol(), s.$$.dirty.fill(0)),
    (s.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function Ft(s, t, e, i, n, r, a = null, o = [-1]) {
  const l = hs;
  ns(s);
  const h = (s.$$ = {
    fragment: null,
    ctx: [],
    props: r,
    update: Y,
    not_equal: n,
    bound: zn(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    callbacks: zn(),
    dirty: o,
    skip_bound: !1,
    root: t.target || l.$$.root,
  });
  a && a(h.root);
  let c = !1;
  if (
    ((h.ctx = e
      ? e(s, t.props || {}, (u, d, ...f) => {
          const p = f.length ? f[0] : d;
          return (
            h.ctx &&
              n(h.ctx[u], (h.ctx[u] = p)) &&
              (!h.skip_bound && h.bound[u] && h.bound[u](p), c && dl(s, u)),
            d
          );
        })
      : []),
    h.update(),
    (c = !0),
    Kt(h.before_update),
    (h.fragment = i ? i(h.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const u = el(t.target);
      h.fragment && h.fragment.l(u), u.forEach(I);
    } else h.fragment && h.fragment.c();
    t.intro && H(s.$$.fragment), St(s, t.target, t.anchor), ya();
  }
  ns(l);
}
class Rt {
  constructor() {
    ni(this, "$$");
    ni(this, "$$set");
  }
  $destroy() {
    Ct(this, 1), (this.$destroy = Y);
  }
  $on(t, e) {
    if (!De(e)) return Y;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      i.push(e),
      () => {
        const n = i.indexOf(e);
        n !== -1 && i.splice(n, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !Zo(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const fl = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(fl);
const pl = "modulepreload",
  ml = function (s) {
    return "/" + s;
  },
  Wn = {},
  Us = function (t, e, i) {
    let n = Promise.resolve();
    if (e && e.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        o =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      n = Promise.allSettled(
        e.map((l) => {
          if (((l = ml(l)), l in Wn)) return;
          Wn[l] = !0;
          const h = l.endsWith(".css"),
            c = h ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const u = document.createElement("link");
          if (
            ((u.rel = h ? "stylesheet" : pl),
            h || (u.as = "script"),
            (u.crossOrigin = ""),
            (u.href = l),
            o && u.setAttribute("nonce", o),
            document.head.appendChild(u),
            h)
          )
            return new Promise((d, f) => {
              u.addEventListener("load", d),
                u.addEventListener("error", () =>
                  f(new Error(`Unable to preload CSS for ${l}`))
                );
            });
        })
      );
    }
    function r(a) {
      const o = new Event("vite:preloadError", { cancelable: !0 });
      if (((o.payload = a), window.dispatchEvent(o), !o.defaultPrevented))
        throw a;
    }
    return n.then((a) => {
      for (const o of a || []) o.status === "rejected" && r(o.reason);
      return t().catch(r);
    });
  };
var L = ((s) => (
  (s.Application = "application"),
  (s.WebGLPipes = "webgl-pipes"),
  (s.WebGLPipesAdaptor = "webgl-pipes-adaptor"),
  (s.WebGLSystem = "webgl-system"),
  (s.WebGPUPipes = "webgpu-pipes"),
  (s.WebGPUPipesAdaptor = "webgpu-pipes-adaptor"),
  (s.WebGPUSystem = "webgpu-system"),
  (s.CanvasSystem = "canvas-system"),
  (s.CanvasPipesAdaptor = "canvas-pipes-adaptor"),
  (s.CanvasPipes = "canvas-pipes"),
  (s.Asset = "asset"),
  (s.LoadParser = "load-parser"),
  (s.ResolveParser = "resolve-parser"),
  (s.CacheParser = "cache-parser"),
  (s.DetectionParser = "detection-parser"),
  (s.MaskEffect = "mask-effect"),
  (s.BlendMode = "blend-mode"),
  (s.TextureSource = "texture-source"),
  (s.Environment = "environment"),
  (s.ShapeBuilder = "shape-builder"),
  (s.Batcher = "batcher"),
  s
))(L || {});
const Oi = (s) => {
    if (typeof s == "function" || (typeof s == "object" && s.extension)) {
      if (!s.extension)
        throw new Error("Extension class must have an extension object");
      s = {
        ...(typeof s.extension != "object"
          ? { type: s.extension }
          : s.extension),
        ref: s,
      };
    }
    if (typeof s == "object") s = { ...s };
    else throw new Error("Invalid extension type");
    return typeof s.type == "string" && (s.type = [s.type]), s;
  },
  bs = (s, t) => Oi(s).priority ?? t,
  mt = {
    _addHandlers: {},
    _removeHandlers: {},
    _queue: {},
    remove(...s) {
      return (
        s.map(Oi).forEach((t) => {
          t.type.forEach((e) => {
            var i, n;
            return (n = (i = this._removeHandlers)[e]) == null
              ? void 0
              : n.call(i, t);
          });
        }),
        this
      );
    },
    add(...s) {
      return (
        s.map(Oi).forEach((t) => {
          t.type.forEach((e) => {
            var r, a;
            const i = this._addHandlers,
              n = this._queue;
            i[e]
              ? (a = i[e]) == null || a.call(i, t)
              : ((n[e] = n[e] || []), (r = n[e]) == null || r.push(t));
          });
        }),
        this
      );
    },
    handle(s, t, e) {
      var a;
      const i = this._addHandlers,
        n = this._removeHandlers;
      if (i[s] || n[s])
        throw new Error(`Extension type ${s} already has a handler`);
      (i[s] = t), (n[s] = e);
      const r = this._queue;
      return (
        r[s] && ((a = r[s]) == null || a.forEach((o) => t(o)), delete r[s]),
        this
      );
    },
    handleByMap(s, t) {
      return this.handle(
        s,
        (e) => {
          e.name && (t[e.name] = e.ref);
        },
        (e) => {
          e.name && delete t[e.name];
        }
      );
    },
    handleByNamedList(s, t, e = -1) {
      return this.handle(
        s,
        (i) => {
          t.findIndex((r) => r.name === i.name) >= 0 ||
            (t.push({ name: i.name, value: i.ref }),
            t.sort((r, a) => bs(a.value, e) - bs(r.value, e)));
        },
        (i) => {
          const n = t.findIndex((r) => r.name === i.name);
          n !== -1 && t.splice(n, 1);
        }
      );
    },
    handleByList(s, t, e = -1) {
      return this.handle(
        s,
        (i) => {
          t.includes(i.ref) ||
            (t.push(i.ref), t.sort((n, r) => bs(r, e) - bs(n, e)));
        },
        (i) => {
          const n = t.indexOf(i.ref);
          n !== -1 && t.splice(n, 1);
        }
      );
    },
  },
  gl = {
    extension: { type: L.Environment, name: "browser", priority: -1 },
    test: () => !0,
    load: async () => {
      await Us(
        () => import("./browserAll-Dk8nsIpz.js"),
        __vite__mapDeps([0, 1, 2])
      );
    },
  },
  _l = {
    extension: { type: L.Environment, name: "webworker", priority: 0 },
    test: () => typeof self < "u" && self.WorkerGlobalScope !== void 0,
    load: async () => {
      await Us(
        () => import("./webworkerAll-sOxMhRmM.js"),
        __vite__mapDeps([1, 2])
      );
    },
  };
class _t {
  constructor(t, e, i) {
    (this._x = e || 0), (this._y = i || 0), (this._observer = t);
  }
  clone(t) {
    return new _t(t ?? this._observer, this._x, this._y);
  }
  set(t = 0, e = t) {
    return (
      (this._x !== t || this._y !== e) &&
        ((this._x = t), (this._y = e), this._observer._onUpdate(this)),
      this
    );
  }
  copyFrom(t) {
    return (
      (this._x !== t.x || this._y !== t.y) &&
        ((this._x = t.x), (this._y = t.y), this._observer._onUpdate(this)),
      this
    );
  }
  copyTo(t) {
    return t.set(this._x, this._y), t;
  }
  equals(t) {
    return t.x === this._x && t.y === this._y;
  }
  toString() {
    return `[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x !== t && ((this._x = t), this._observer._onUpdate(this));
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y !== t && ((this._y = t), this._observer._onUpdate(this));
  }
}
function gn(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var xa = { exports: {} };
(function (s) {
  var t = Object.prototype.hasOwnProperty,
    e = "~";
  function i() {}
  Object.create &&
    ((i.prototype = Object.create(null)), new i().__proto__ || (e = !1));
  function n(l, h, c) {
    (this.fn = l), (this.context = h), (this.once = c || !1);
  }
  function r(l, h, c, u, d) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var f = new n(c, u || l, d),
      p = e ? e + h : h;
    return (
      l._events[p]
        ? l._events[p].fn
          ? (l._events[p] = [l._events[p], f])
          : l._events[p].push(f)
        : ((l._events[p] = f), l._eventsCount++),
      l
    );
  }
  function a(l, h) {
    --l._eventsCount === 0 ? (l._events = new i()) : delete l._events[h];
  }
  function o() {
    (this._events = new i()), (this._eventsCount = 0);
  }
  (o.prototype.eventNames = function () {
    var h = [],
      c,
      u;
    if (this._eventsCount === 0) return h;
    for (u in (c = this._events)) t.call(c, u) && h.push(e ? u.slice(1) : u);
    return Object.getOwnPropertySymbols
      ? h.concat(Object.getOwnPropertySymbols(c))
      : h;
  }),
    (o.prototype.listeners = function (h) {
      var c = e ? e + h : h,
        u = this._events[c];
      if (!u) return [];
      if (u.fn) return [u.fn];
      for (var d = 0, f = u.length, p = new Array(f); d < f; d++)
        p[d] = u[d].fn;
      return p;
    }),
    (o.prototype.listenerCount = function (h) {
      var c = e ? e + h : h,
        u = this._events[c];
      return u ? (u.fn ? 1 : u.length) : 0;
    }),
    (o.prototype.emit = function (h, c, u, d, f, p) {
      var g = e ? e + h : h;
      if (!this._events[g]) return !1;
      var m = this._events[g],
        _ = arguments.length,
        y,
        x;
      if (m.fn) {
        switch ((m.once && this.removeListener(h, m.fn, void 0, !0), _)) {
          case 1:
            return m.fn.call(m.context), !0;
          case 2:
            return m.fn.call(m.context, c), !0;
          case 3:
            return m.fn.call(m.context, c, u), !0;
          case 4:
            return m.fn.call(m.context, c, u, d), !0;
          case 5:
            return m.fn.call(m.context, c, u, d, f), !0;
          case 6:
            return m.fn.call(m.context, c, u, d, f, p), !0;
        }
        for (x = 1, y = new Array(_ - 1); x < _; x++) y[x - 1] = arguments[x];
        m.fn.apply(m.context, y);
      } else {
        var b = m.length,
          C;
        for (x = 0; x < b; x++)
          switch (
            (m[x].once && this.removeListener(h, m[x].fn, void 0, !0), _)
          ) {
            case 1:
              m[x].fn.call(m[x].context);
              break;
            case 2:
              m[x].fn.call(m[x].context, c);
              break;
            case 3:
              m[x].fn.call(m[x].context, c, u);
              break;
            case 4:
              m[x].fn.call(m[x].context, c, u, d);
              break;
            default:
              if (!y)
                for (C = 1, y = new Array(_ - 1); C < _; C++)
                  y[C - 1] = arguments[C];
              m[x].fn.apply(m[x].context, y);
          }
      }
      return !0;
    }),
    (o.prototype.on = function (h, c, u) {
      return r(this, h, c, u, !1);
    }),
    (o.prototype.once = function (h, c, u) {
      return r(this, h, c, u, !0);
    }),
    (o.prototype.removeListener = function (h, c, u, d) {
      var f = e ? e + h : h;
      if (!this._events[f]) return this;
      if (!c) return a(this, f), this;
      var p = this._events[f];
      if (p.fn)
        p.fn === c && (!d || p.once) && (!u || p.context === u) && a(this, f);
      else {
        for (var g = 0, m = [], _ = p.length; g < _; g++)
          (p[g].fn !== c || (d && !p[g].once) || (u && p[g].context !== u)) &&
            m.push(p[g]);
        m.length ? (this._events[f] = m.length === 1 ? m[0] : m) : a(this, f);
      }
      return this;
    }),
    (o.prototype.removeAllListeners = function (h) {
      var c;
      return (
        h
          ? ((c = e ? e + h : h), this._events[c] && a(this, c))
          : ((this._events = new i()), (this._eventsCount = 0)),
        this
      );
    }),
    (o.prototype.off = o.prototype.removeListener),
    (o.prototype.addListener = o.prototype.on),
    (o.prefixed = e),
    (o.EventEmitter = o),
    (s.exports = o);
})(xa);
var yl = xa.exports;
const Lt = gn(yl),
  xl = Math.PI * 2,
  bl = 180 / Math.PI,
  wl = Math.PI / 180;
class ft {
  constructor(t = 0, e = 0) {
    (this.x = 0), (this.y = 0), (this.x = t), (this.y = e);
  }
  clone() {
    return new ft(this.x, this.y);
  }
  copyFrom(t) {
    return this.set(t.x, t.y), this;
  }
  copyTo(t) {
    return t.set(this.x, this.y), t;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  set(t = 0, e = t) {
    return (this.x = t), (this.y = e), this;
  }
  toString() {
    return `[pixi.js/math:Point x=${this.x} y=${this.y}]`;
  }
  static get shared() {
    return (ai.x = 0), (ai.y = 0), ai;
  }
}
const ai = new ft();
class j {
  constructor(t = 1, e = 0, i = 0, n = 1, r = 0, a = 0) {
    (this.array = null),
      (this.a = t),
      (this.b = e),
      (this.c = i),
      (this.d = n),
      (this.tx = r),
      (this.ty = a);
  }
  fromArray(t) {
    (this.a = t[0]),
      (this.b = t[1]),
      (this.c = t[3]),
      (this.d = t[4]),
      (this.tx = t[2]),
      (this.ty = t[5]);
  }
  set(t, e, i, n, r, a) {
    return (
      (this.a = t),
      (this.b = e),
      (this.c = i),
      (this.d = n),
      (this.tx = r),
      (this.ty = a),
      this
    );
  }
  toArray(t, e) {
    this.array || (this.array = new Float32Array(9));
    const i = e || this.array;
    return (
      t
        ? ((i[0] = this.a),
          (i[1] = this.b),
          (i[2] = 0),
          (i[3] = this.c),
          (i[4] = this.d),
          (i[5] = 0),
          (i[6] = this.tx),
          (i[7] = this.ty),
          (i[8] = 1))
        : ((i[0] = this.a),
          (i[1] = this.c),
          (i[2] = this.tx),
          (i[3] = this.b),
          (i[4] = this.d),
          (i[5] = this.ty),
          (i[6] = 0),
          (i[7] = 0),
          (i[8] = 1)),
      i
    );
  }
  apply(t, e) {
    e = e || new ft();
    const i = t.x,
      n = t.y;
    return (
      (e.x = this.a * i + this.c * n + this.tx),
      (e.y = this.b * i + this.d * n + this.ty),
      e
    );
  }
  applyInverse(t, e) {
    e = e || new ft();
    const i = this.a,
      n = this.b,
      r = this.c,
      a = this.d,
      o = this.tx,
      l = this.ty,
      h = 1 / (i * a + r * -n),
      c = t.x,
      u = t.y;
    return (
      (e.x = a * h * c + -r * h * u + (l * r - o * a) * h),
      (e.y = i * h * u + -n * h * c + (-l * i + o * n) * h),
      e
    );
  }
  translate(t, e) {
    return (this.tx += t), (this.ty += e), this;
  }
  scale(t, e) {
    return (
      (this.a *= t),
      (this.d *= e),
      (this.c *= t),
      (this.b *= e),
      (this.tx *= t),
      (this.ty *= e),
      this
    );
  }
  rotate(t) {
    const e = Math.cos(t),
      i = Math.sin(t),
      n = this.a,
      r = this.c,
      a = this.tx;
    return (
      (this.a = n * e - this.b * i),
      (this.b = n * i + this.b * e),
      (this.c = r * e - this.d * i),
      (this.d = r * i + this.d * e),
      (this.tx = a * e - this.ty * i),
      (this.ty = a * i + this.ty * e),
      this
    );
  }
  append(t) {
    const e = this.a,
      i = this.b,
      n = this.c,
      r = this.d;
    return (
      (this.a = t.a * e + t.b * n),
      (this.b = t.a * i + t.b * r),
      (this.c = t.c * e + t.d * n),
      (this.d = t.c * i + t.d * r),
      (this.tx = t.tx * e + t.ty * n + this.tx),
      (this.ty = t.tx * i + t.ty * r + this.ty),
      this
    );
  }
  appendFrom(t, e) {
    const i = t.a,
      n = t.b,
      r = t.c,
      a = t.d,
      o = t.tx,
      l = t.ty,
      h = e.a,
      c = e.b,
      u = e.c,
      d = e.d;
    return (
      (this.a = i * h + n * u),
      (this.b = i * c + n * d),
      (this.c = r * h + a * u),
      (this.d = r * c + a * d),
      (this.tx = o * h + l * u + e.tx),
      (this.ty = o * c + l * d + e.ty),
      this
    );
  }
  setTransform(t, e, i, n, r, a, o, l, h) {
    return (
      (this.a = Math.cos(o + h) * r),
      (this.b = Math.sin(o + h) * r),
      (this.c = -Math.sin(o - l) * a),
      (this.d = Math.cos(o - l) * a),
      (this.tx = t - (i * this.a + n * this.c)),
      (this.ty = e - (i * this.b + n * this.d)),
      this
    );
  }
  prepend(t) {
    const e = this.tx;
    if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
      const i = this.a,
        n = this.c;
      (this.a = i * t.a + this.b * t.c),
        (this.b = i * t.b + this.b * t.d),
        (this.c = n * t.a + this.d * t.c),
        (this.d = n * t.b + this.d * t.d);
    }
    return (
      (this.tx = e * t.a + this.ty * t.c + t.tx),
      (this.ty = e * t.b + this.ty * t.d + t.ty),
      this
    );
  }
  decompose(t) {
    const e = this.a,
      i = this.b,
      n = this.c,
      r = this.d,
      a = t.pivot,
      o = -Math.atan2(-n, r),
      l = Math.atan2(i, e),
      h = Math.abs(o + l);
    return (
      h < 1e-5 || Math.abs(xl - h) < 1e-5
        ? ((t.rotation = l), (t.skew.x = t.skew.y = 0))
        : ((t.rotation = 0), (t.skew.x = o), (t.skew.y = l)),
      (t.scale.x = Math.sqrt(e * e + i * i)),
      (t.scale.y = Math.sqrt(n * n + r * r)),
      (t.position.x = this.tx + (a.x * e + a.y * n)),
      (t.position.y = this.ty + (a.x * i + a.y * r)),
      t
    );
  }
  invert() {
    const t = this.a,
      e = this.b,
      i = this.c,
      n = this.d,
      r = this.tx,
      a = t * n - e * i;
    return (
      (this.a = n / a),
      (this.b = -e / a),
      (this.c = -i / a),
      (this.d = t / a),
      (this.tx = (i * this.ty - n * r) / a),
      (this.ty = -(t * this.ty - e * r) / a),
      this
    );
  }
  isIdentity() {
    return (
      this.a === 1 &&
      this.b === 0 &&
      this.c === 0 &&
      this.d === 1 &&
      this.tx === 0 &&
      this.ty === 0
    );
  }
  identity() {
    return (
      (this.a = 1),
      (this.b = 0),
      (this.c = 0),
      (this.d = 1),
      (this.tx = 0),
      (this.ty = 0),
      this
    );
  }
  clone() {
    const t = new j();
    return (
      (t.a = this.a),
      (t.b = this.b),
      (t.c = this.c),
      (t.d = this.d),
      (t.tx = this.tx),
      (t.ty = this.ty),
      t
    );
  }
  copyTo(t) {
    return (
      (t.a = this.a),
      (t.b = this.b),
      (t.c = this.c),
      (t.d = this.d),
      (t.tx = this.tx),
      (t.ty = this.ty),
      t
    );
  }
  copyFrom(t) {
    return (
      (this.a = t.a),
      (this.b = t.b),
      (this.c = t.c),
      (this.d = t.d),
      (this.tx = t.tx),
      (this.ty = t.ty),
      this
    );
  }
  equals(t) {
    return (
      t.a === this.a &&
      t.b === this.b &&
      t.c === this.c &&
      t.d === this.d &&
      t.tx === this.tx &&
      t.ty === this.ty
    );
  }
  toString() {
    return `[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
  }
  static get IDENTITY() {
    return Al.identity();
  }
  static get shared() {
    return vl.identity();
  }
}
const vl = new j(),
  Al = new j(),
  le = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
  he = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
  ce = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
  ue = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
  zi = [],
  ba = [],
  ws = Math.sign;
function Sl() {
  for (let s = 0; s < 16; s++) {
    const t = [];
    zi.push(t);
    for (let e = 0; e < 16; e++) {
      const i = ws(le[s] * le[e] + ce[s] * he[e]),
        n = ws(he[s] * le[e] + ue[s] * he[e]),
        r = ws(le[s] * ce[e] + ce[s] * ue[e]),
        a = ws(he[s] * ce[e] + ue[s] * ue[e]);
      for (let o = 0; o < 16; o++)
        if (le[o] === i && he[o] === n && ce[o] === r && ue[o] === a) {
          t.push(o);
          break;
        }
    }
  }
  for (let s = 0; s < 16; s++) {
    const t = new j();
    t.set(le[s], he[s], ce[s], ue[s], 0, 0), ba.push(t);
  }
}
Sl();
const K = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MAIN_DIAGONAL: 10,
    MIRROR_HORIZONTAL: 12,
    REVERSE_DIAGONAL: 14,
    uX: (s) => le[s],
    uY: (s) => he[s],
    vX: (s) => ce[s],
    vY: (s) => ue[s],
    inv: (s) => (s & 8 ? s & 15 : -s & 7),
    add: (s, t) => zi[s][t],
    sub: (s, t) => zi[s][K.inv(t)],
    rotate180: (s) => s ^ 4,
    isVertical: (s) => (s & 3) === 2,
    byDirection: (s, t) =>
      Math.abs(s) * 2 <= Math.abs(t)
        ? t >= 0
          ? K.S
          : K.N
        : Math.abs(t) * 2 <= Math.abs(s)
        ? s > 0
          ? K.E
          : K.W
        : t > 0
        ? s > 0
          ? K.SE
          : K.SW
        : s > 0
        ? K.NE
        : K.NW,
    matrixAppendRotationInv: (s, t, e = 0, i = 0) => {
      const n = ba[K.inv(t)];
      (n.tx = e), (n.ty = i), s.append(n);
    },
  },
  vs = [new ft(), new ft(), new ft(), new ft()];
class ot {
  constructor(t = 0, e = 0, i = 0, n = 0) {
    (this.type = "rectangle"),
      (this.x = Number(t)),
      (this.y = Number(e)),
      (this.width = Number(i)),
      (this.height = Number(n));
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  isEmpty() {
    return this.left === this.right || this.top === this.bottom;
  }
  static get EMPTY() {
    return new ot(0, 0, 0, 0);
  }
  clone() {
    return new ot(this.x, this.y, this.width, this.height);
  }
  copyFromBounds(t) {
    return (
      (this.x = t.minX),
      (this.y = t.minY),
      (this.width = t.maxX - t.minX),
      (this.height = t.maxY - t.minY),
      this
    );
  }
  copyFrom(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.width = t.width),
      (this.height = t.height),
      this
    );
  }
  copyTo(t) {
    return t.copyFrom(this), t;
  }
  contains(t, e) {
    return this.width <= 0 || this.height <= 0
      ? !1
      : t >= this.x &&
          t < this.x + this.width &&
          e >= this.y &&
          e < this.y + this.height;
  }
  strokeContains(t, e, i) {
    const { width: n, height: r } = this;
    if (n <= 0 || r <= 0) return !1;
    const a = this.x,
      o = this.y,
      l = a - i / 2,
      h = a + n + i / 2,
      c = o - i / 2,
      u = o + r + i / 2,
      d = a + i / 2,
      f = a + n - i / 2,
      p = o + i / 2,
      g = o + r - i / 2;
    return (
      t >= l &&
      t <= h &&
      e >= c &&
      e <= u &&
      !(t > d && t < f && e > p && e < g)
    );
  }
  intersects(t, e) {
    if (!e) {
      const T = this.x < t.x ? t.x : this.x;
      if ((this.right > t.right ? t.right : this.right) <= T) return !1;
      const A = this.y < t.y ? t.y : this.y;
      return (this.bottom > t.bottom ? t.bottom : this.bottom) > A;
    }
    const i = this.left,
      n = this.right,
      r = this.top,
      a = this.bottom;
    if (n <= i || a <= r) return !1;
    const o = vs[0].set(t.left, t.top),
      l = vs[1].set(t.left, t.bottom),
      h = vs[2].set(t.right, t.top),
      c = vs[3].set(t.right, t.bottom);
    if (h.x <= o.x || l.y <= o.y) return !1;
    const u = Math.sign(e.a * e.d - e.b * e.c);
    if (
      u === 0 ||
      (e.apply(o, o),
      e.apply(l, l),
      e.apply(h, h),
      e.apply(c, c),
      Math.max(o.x, l.x, h.x, c.x) <= i ||
        Math.min(o.x, l.x, h.x, c.x) >= n ||
        Math.max(o.y, l.y, h.y, c.y) <= r ||
        Math.min(o.y, l.y, h.y, c.y) >= a)
    )
      return !1;
    const d = u * (l.y - o.y),
      f = u * (o.x - l.x),
      p = d * i + f * r,
      g = d * n + f * r,
      m = d * i + f * a,
      _ = d * n + f * a;
    if (
      Math.max(p, g, m, _) <= d * o.x + f * o.y ||
      Math.min(p, g, m, _) >= d * c.x + f * c.y
    )
      return !1;
    const y = u * (o.y - h.y),
      x = u * (h.x - o.x),
      b = y * i + x * r,
      C = y * n + x * r,
      F = y * i + x * a,
      k = y * n + x * a;
    return !(
      Math.max(b, C, F, k) <= y * o.x + x * o.y ||
      Math.min(b, C, F, k) >= y * c.x + x * c.y
    );
  }
  pad(t = 0, e = t) {
    return (
      (this.x -= t),
      (this.y -= e),
      (this.width += t * 2),
      (this.height += e * 2),
      this
    );
  }
  fit(t) {
    const e = Math.max(this.x, t.x),
      i = Math.min(this.x + this.width, t.x + t.width),
      n = Math.max(this.y, t.y),
      r = Math.min(this.y + this.height, t.y + t.height);
    return (
      (this.x = e),
      (this.width = Math.max(i - e, 0)),
      (this.y = n),
      (this.height = Math.max(r - n, 0)),
      this
    );
  }
  ceil(t = 1, e = 0.001) {
    const i = Math.ceil((this.x + this.width - e) * t) / t,
      n = Math.ceil((this.y + this.height - e) * t) / t;
    return (
      (this.x = Math.floor((this.x + e) * t) / t),
      (this.y = Math.floor((this.y + e) * t) / t),
      (this.width = i - this.x),
      (this.height = n - this.y),
      this
    );
  }
  enlarge(t) {
    const e = Math.min(this.x, t.x),
      i = Math.max(this.x + this.width, t.x + t.width),
      n = Math.min(this.y, t.y),
      r = Math.max(this.y + this.height, t.y + t.height);
    return (
      (this.x = e),
      (this.width = i - e),
      (this.y = n),
      (this.height = r - n),
      this
    );
  }
  getBounds(t) {
    return (t = t || new ot()), t.copyFrom(this), t;
  }
  toString() {
    return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
  }
}
const oi = { default: -1 };
function lt(s = "default") {
  return oi[s] === void 0 && (oi[s] = -1), ++oi[s];
}
const Vn = {},
  it = "8.0.0",
  Cl = "8.3.4";
function et(s, t, e = 3) {
  if (Vn[t]) return;
  let i = new Error().stack;
  typeof i > "u"
    ? console.warn(
        "PixiJS Deprecation Warning: ",
        `${t}
Deprecated since v${s}`
      )
    : ((i = i
        .split(
          `
`
        )
        .splice(e).join(`
`)),
      console.groupCollapsed
        ? (console.groupCollapsed(
            "%cPixiJS Deprecation Warning: %c%s",
            "color:#614108;background:#fffbe6",
            "font-weight:normal;color:#614108;background:#fffbe6",
            `${t}
Deprecated since v${s}`
          ),
          console.warn(i),
          console.groupEnd())
        : (console.warn(
            "PixiJS Deprecation Warning: ",
            `${t}
Deprecated since v${s}`
          ),
          console.warn(i))),
    (Vn[t] = !0);
}
const wa = () => {};
function Hn(s) {
  return (
    (s += s === 0 ? 1 : 0),
    --s,
    (s |= s >>> 1),
    (s |= s >>> 2),
    (s |= s >>> 4),
    (s |= s >>> 8),
    (s |= s >>> 16),
    s + 1
  );
}
function jn(s) {
  return !(s & (s - 1)) && !!s;
}
function Pl(s) {
  const t = {};
  for (const e in s) s[e] !== void 0 && (t[e] = s[e]);
  return t;
}
const Yn = Object.create(null);
function kl(s) {
  const t = Yn[s];
  return t === void 0 && (Yn[s] = lt("resource")), t;
}
const va = class Aa extends Lt {
  constructor(t = {}) {
    super(),
      (this._resourceType = "textureSampler"),
      (this._touched = 0),
      (this._maxAnisotropy = 1),
      (this.destroyed = !1),
      (t = { ...Aa.defaultOptions, ...t }),
      (this.addressMode = t.addressMode),
      (this.addressModeU = t.addressModeU ?? this.addressModeU),
      (this.addressModeV = t.addressModeV ?? this.addressModeV),
      (this.addressModeW = t.addressModeW ?? this.addressModeW),
      (this.scaleMode = t.scaleMode),
      (this.magFilter = t.magFilter ?? this.magFilter),
      (this.minFilter = t.minFilter ?? this.minFilter),
      (this.mipmapFilter = t.mipmapFilter ?? this.mipmapFilter),
      (this.lodMinClamp = t.lodMinClamp),
      (this.lodMaxClamp = t.lodMaxClamp),
      (this.compare = t.compare),
      (this.maxAnisotropy = t.maxAnisotropy ?? 1);
  }
  set addressMode(t) {
    (this.addressModeU = t), (this.addressModeV = t), (this.addressModeW = t);
  }
  get addressMode() {
    return this.addressModeU;
  }
  set wrapMode(t) {
    et(it, "TextureStyle.wrapMode is now TextureStyle.addressMode"),
      (this.addressMode = t);
  }
  get wrapMode() {
    return this.addressMode;
  }
  set scaleMode(t) {
    (this.magFilter = t), (this.minFilter = t), (this.mipmapFilter = t);
  }
  get scaleMode() {
    return this.magFilter;
  }
  set maxAnisotropy(t) {
    (this._maxAnisotropy = Math.min(t, 16)),
      this._maxAnisotropy > 1 && (this.scaleMode = "linear");
  }
  get maxAnisotropy() {
    return this._maxAnisotropy;
  }
  get _resourceId() {
    return this._sharedResourceId || this._generateResourceId();
  }
  update() {
    this.emit("change", this), (this._sharedResourceId = null);
  }
  _generateResourceId() {
    const t = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;
    return (this._sharedResourceId = kl(t)), this._resourceId;
  }
  destroy() {
    (this.destroyed = !0),
      this.emit("destroy", this),
      this.emit("change", this),
      this.removeAllListeners();
  }
};
va.defaultOptions = { addressMode: "clamp-to-edge", scaleMode: "linear" };
let Ml = va;
const Sa = class Ca extends Lt {
  constructor(t = {}) {
    super(),
      (this.options = t),
      (this.uid = lt("textureSource")),
      (this._resourceType = "textureSource"),
      (this._resourceId = lt("resource")),
      (this.uploadMethodId = "unknown"),
      (this._resolution = 1),
      (this.pixelWidth = 1),
      (this.pixelHeight = 1),
      (this.width = 1),
      (this.height = 1),
      (this.sampleCount = 1),
      (this.mipLevelCount = 1),
      (this.autoGenerateMipmaps = !1),
      (this.format = "rgba8unorm"),
      (this.dimension = "2d"),
      (this.antialias = !1),
      (this._touched = 0),
      (this._batchTick = -1),
      (this._textureBindLocation = -1),
      (t = { ...Ca.defaultOptions, ...t }),
      (this.label = t.label ?? ""),
      (this.resource = t.resource),
      (this.autoGarbageCollect = t.autoGarbageCollect),
      (this._resolution = t.resolution),
      t.width
        ? (this.pixelWidth = t.width * this._resolution)
        : (this.pixelWidth = this.resource ? this.resourceWidth ?? 1 : 1),
      t.height
        ? (this.pixelHeight = t.height * this._resolution)
        : (this.pixelHeight = this.resource ? this.resourceHeight ?? 1 : 1),
      (this.width = this.pixelWidth / this._resolution),
      (this.height = this.pixelHeight / this._resolution),
      (this.format = t.format),
      (this.dimension = t.dimensions),
      (this.mipLevelCount = t.mipLevelCount),
      (this.autoGenerateMipmaps = t.autoGenerateMipmaps),
      (this.sampleCount = t.sampleCount),
      (this.antialias = t.antialias),
      (this.alphaMode = t.alphaMode),
      (this.style = new Ml(Pl(t))),
      (this.destroyed = !1),
      this._refreshPOT();
  }
  get source() {
    return this;
  }
  get style() {
    return this._style;
  }
  set style(t) {
    var e, i;
    this.style !== t &&
      ((e = this._style) == null || e.off("change", this._onStyleChange, this),
      (this._style = t),
      (i = this._style) == null || i.on("change", this._onStyleChange, this),
      this._onStyleChange());
  }
  get addressMode() {
    return this._style.addressMode;
  }
  set addressMode(t) {
    this._style.addressMode = t;
  }
  get repeatMode() {
    return this._style.addressMode;
  }
  set repeatMode(t) {
    this._style.addressMode = t;
  }
  get magFilter() {
    return this._style.magFilter;
  }
  set magFilter(t) {
    this._style.magFilter = t;
  }
  get minFilter() {
    return this._style.minFilter;
  }
  set minFilter(t) {
    this._style.minFilter = t;
  }
  get mipmapFilter() {
    return this._style.mipmapFilter;
  }
  set mipmapFilter(t) {
    this._style.mipmapFilter = t;
  }
  get lodMinClamp() {
    return this._style.lodMinClamp;
  }
  set lodMinClamp(t) {
    this._style.lodMinClamp = t;
  }
  get lodMaxClamp() {
    return this._style.lodMaxClamp;
  }
  set lodMaxClamp(t) {
    this._style.lodMaxClamp = t;
  }
  _onStyleChange() {
    this.emit("styleChange", this);
  }
  update() {
    if (this.resource) {
      const t = this._resolution;
      if (this.resize(this.resourceWidth / t, this.resourceHeight / t)) return;
    }
    this.emit("update", this);
  }
  destroy() {
    (this.destroyed = !0),
      this.emit("destroy", this),
      this.emit("change", this),
      this._style && (this._style.destroy(), (this._style = null)),
      (this.uploadMethodId = null),
      (this.resource = null),
      this.removeAllListeners();
  }
  unload() {
    (this._resourceId = lt("resource")),
      this.emit("change", this),
      this.emit("unload", this);
  }
  get resourceWidth() {
    const { resource: t } = this;
    return t.naturalWidth || t.videoWidth || t.displayWidth || t.width;
  }
  get resourceHeight() {
    const { resource: t } = this;
    return t.naturalHeight || t.videoHeight || t.displayHeight || t.height;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    this._resolution !== t &&
      ((this._resolution = t),
      (this.width = this.pixelWidth / t),
      (this.height = this.pixelHeight / t));
  }
  resize(t, e, i) {
    (i = i || this._resolution), (t = t || this.width), (e = e || this.height);
    const n = Math.round(t * i),
      r = Math.round(e * i);
    return (
      (this.width = n / i),
      (this.height = r / i),
      (this._resolution = i),
      this.pixelWidth === n && this.pixelHeight === r
        ? !1
        : (this._refreshPOT(),
          (this.pixelWidth = n),
          (this.pixelHeight = r),
          this.emit("resize", this),
          (this._resourceId = lt("resource")),
          this.emit("change", this),
          !0)
    );
  }
  updateMipmaps() {
    this.autoGenerateMipmaps &&
      this.mipLevelCount > 1 &&
      this.emit("updateMipmaps", this);
  }
  set wrapMode(t) {
    this._style.wrapMode = t;
  }
  get wrapMode() {
    return this._style.wrapMode;
  }
  set scaleMode(t) {
    this._style.scaleMode = t;
  }
  get scaleMode() {
    return this._style.scaleMode;
  }
  _refreshPOT() {
    this.isPowerOfTwo = jn(this.pixelWidth) && jn(this.pixelHeight);
  }
  static test(t) {
    throw new Error("Unimplemented");
  }
};
Sa.defaultOptions = {
  resolution: 1,
  format: "bgra8unorm",
  alphaMode: "premultiply-alpha-on-upload",
  dimensions: "2d",
  mipLevelCount: 1,
  autoGenerateMipmaps: !1,
  sampleCount: 1,
  antialias: !1,
  autoGarbageCollect: !1,
};
let Zt = Sa;
class _n extends Zt {
  constructor(t) {
    const e = t.resource || new Float32Array(t.width * t.height * 4);
    let i = t.format;
    i ||
      (e instanceof Float32Array
        ? (i = "rgba32float")
        : e instanceof Int32Array || e instanceof Uint32Array
        ? (i = "rgba32uint")
        : e instanceof Int16Array || e instanceof Uint16Array
        ? (i = "rgba16uint")
        : (e instanceof Int8Array, (i = "bgra8unorm"))),
      super({ ...t, resource: e, format: i }),
      (this.uploadMethodId = "buffer");
  }
  static test(t) {
    return (
      t instanceof Int8Array ||
      t instanceof Uint8Array ||
      t instanceof Uint8ClampedArray ||
      t instanceof Int16Array ||
      t instanceof Uint16Array ||
      t instanceof Int32Array ||
      t instanceof Uint32Array ||
      t instanceof Float32Array
    );
  }
}
_n.extension = L.TextureSource;
const Xn = new j();
class Tl {
  constructor(t, e) {
    (this.mapCoord = new j()),
      (this.uClampFrame = new Float32Array(4)),
      (this.uClampOffset = new Float32Array(2)),
      (this._textureID = -1),
      (this._updateID = 0),
      (this.clampOffset = 0),
      typeof e > "u"
        ? (this.clampMargin = t.width < 10 ? 0 : 0.5)
        : (this.clampMargin = e),
      (this.isSimple = !1),
      (this.texture = t);
  }
  get texture() {
    return this._texture;
  }
  set texture(t) {
    var e;
    this.texture !== t &&
      ((e = this._texture) == null ||
        e.removeListener("update", this.update, this),
      (this._texture = t),
      this._texture.addListener("update", this.update, this),
      this.update());
  }
  multiplyUvs(t, e) {
    e === void 0 && (e = t);
    const i = this.mapCoord;
    for (let n = 0; n < t.length; n += 2) {
      const r = t[n],
        a = t[n + 1];
      (e[n] = r * i.a + a * i.c + i.tx), (e[n + 1] = r * i.b + a * i.d + i.ty);
    }
    return e;
  }
  update() {
    const t = this._texture;
    this._updateID++;
    const e = t.uvs;
    this.mapCoord.set(
      e.x1 - e.x0,
      e.y1 - e.y0,
      e.x3 - e.x0,
      e.y3 - e.y0,
      e.x0,
      e.y0
    );
    const i = t.orig,
      n = t.trim;
    n &&
      (Xn.set(
        i.width / n.width,
        0,
        0,
        i.height / n.height,
        -n.x / n.width,
        -n.y / n.height
      ),
      this.mapCoord.append(Xn));
    const r = t.source,
      a = this.uClampFrame,
      o = this.clampMargin / r._resolution,
      l = this.clampOffset / r._resolution;
    return (
      (a[0] = (t.frame.x + o + l) / r.width),
      (a[1] = (t.frame.y + o + l) / r.height),
      (a[2] = (t.frame.x + t.frame.width - o + l) / r.width),
      (a[3] = (t.frame.y + t.frame.height - o + l) / r.height),
      (this.uClampOffset[0] = this.clampOffset / r.pixelWidth),
      (this.uClampOffset[1] = this.clampOffset / r.pixelHeight),
      (this.isSimple =
        t.frame.width === r.width &&
        t.frame.height === r.height &&
        t.rotate === 0),
      !0
    );
  }
}
class W extends Lt {
  constructor({
    source: t,
    label: e,
    frame: i,
    orig: n,
    trim: r,
    defaultAnchor: a,
    defaultBorders: o,
    rotate: l,
    dynamic: h,
  } = {}) {
    if (
      (super(),
      (this.uid = lt("texture")),
      (this.uvs = { x0: 0, y0: 0, x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0 }),
      (this.frame = new ot()),
      (this.noFrame = !1),
      (this.dynamic = !1),
      (this.isTexture = !0),
      (this.label = e),
      (this.source = (t == null ? void 0 : t.source) ?? new Zt()),
      (this.noFrame = !i),
      i)
    )
      this.frame.copyFrom(i);
    else {
      const { width: c, height: u } = this._source;
      (this.frame.width = c), (this.frame.height = u);
    }
    (this.orig = n || this.frame),
      (this.trim = r),
      (this.rotate = l ?? 0),
      (this.defaultAnchor = a),
      (this.defaultBorders = o),
      (this.destroyed = !1),
      (this.dynamic = h || !1),
      this.updateUvs();
  }
  set source(t) {
    this._source && this._source.off("resize", this.update, this),
      (this._source = t),
      t.on("resize", this.update, this),
      this.emit("update", this);
  }
  get source() {
    return this._source;
  }
  get textureMatrix() {
    return (
      this._textureMatrix || (this._textureMatrix = new Tl(this)),
      this._textureMatrix
    );
  }
  get width() {
    return this.orig.width;
  }
  get height() {
    return this.orig.height;
  }
  updateUvs() {
    const { uvs: t, frame: e } = this,
      { width: i, height: n } = this._source,
      r = e.x / i,
      a = e.y / n,
      o = e.width / i,
      l = e.height / n;
    let h = this.rotate;
    if (h) {
      const c = o / 2,
        u = l / 2,
        d = r + c,
        f = a + u;
      (h = K.add(h, K.NW)),
        (t.x0 = d + c * K.uX(h)),
        (t.y0 = f + u * K.uY(h)),
        (h = K.add(h, 2)),
        (t.x1 = d + c * K.uX(h)),
        (t.y1 = f + u * K.uY(h)),
        (h = K.add(h, 2)),
        (t.x2 = d + c * K.uX(h)),
        (t.y2 = f + u * K.uY(h)),
        (h = K.add(h, 2)),
        (t.x3 = d + c * K.uX(h)),
        (t.y3 = f + u * K.uY(h));
    } else
      (t.x0 = r),
        (t.y0 = a),
        (t.x1 = r + o),
        (t.y1 = a),
        (t.x2 = r + o),
        (t.y2 = a + l),
        (t.x3 = r),
        (t.y3 = a + l);
  }
  destroy(t = !1) {
    this._source && t && (this._source.destroy(), (this._source = null)),
      (this._textureMatrix = null),
      (this.destroyed = !0),
      this.emit("destroy", this),
      this.removeAllListeners();
  }
  update() {
    this.noFrame &&
      ((this.frame.width = this._source.width),
      (this.frame.height = this._source.height)),
      this.updateUvs(),
      this.emit("update", this);
  }
  get baseTexture() {
    return et(it, "Texture.baseTexture is now Texture.source"), this._source;
  }
}
W.EMPTY = new W({ label: "EMPTY", source: new Zt({ label: "EMPTY" }) });
W.EMPTY.destroy = wa;
W.WHITE = new W({
  source: new _n({
    resource: new Uint8Array([255, 255, 255, 255]),
    width: 1,
    height: 1,
    alphaMode: "premultiply-alpha-on-upload",
    label: "WHITE",
  }),
  label: "WHITE",
});
W.WHITE.destroy = wa;
function El(s, t, e, i) {
  const { width: n, height: r } = e.orig,
    a = e.trim;
  if (a) {
    const o = a.width,
      l = a.height;
    (s.minX = a.x - t._x * n - i),
      (s.maxX = s.minX + o),
      (s.minY = a.y - t._y * r - i),
      (s.maxY = s.minY + l);
  } else
    (s.minX = -t._x * n - i),
      (s.maxX = s.minX + n),
      (s.minY = -t._y * r - i),
      (s.maxY = s.minY + r);
}
const qn = new j();
class Wt {
  constructor(t = 1 / 0, e = 1 / 0, i = -1 / 0, n = -1 / 0) {
    (this.minX = 1 / 0),
      (this.minY = 1 / 0),
      (this.maxX = -1 / 0),
      (this.maxY = -1 / 0),
      (this.matrix = qn),
      (this.minX = t),
      (this.minY = e),
      (this.maxX = i),
      (this.maxY = n);
  }
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY;
  }
  get rectangle() {
    this._rectangle || (this._rectangle = new ot());
    const t = this._rectangle;
    return (
      this.minX > this.maxX || this.minY > this.maxY
        ? ((t.x = 0), (t.y = 0), (t.width = 0), (t.height = 0))
        : t.copyFromBounds(this),
      t
    );
  }
  clear() {
    return (
      (this.minX = 1 / 0),
      (this.minY = 1 / 0),
      (this.maxX = -1 / 0),
      (this.maxY = -1 / 0),
      (this.matrix = qn),
      this
    );
  }
  set(t, e, i, n) {
    (this.minX = t), (this.minY = e), (this.maxX = i), (this.maxY = n);
  }
  addFrame(t, e, i, n, r) {
    r || (r = this.matrix);
    const a = r.a,
      o = r.b,
      l = r.c,
      h = r.d,
      c = r.tx,
      u = r.ty;
    let d = this.minX,
      f = this.minY,
      p = this.maxX,
      g = this.maxY,
      m = a * t + l * e + c,
      _ = o * t + h * e + u;
    m < d && (d = m),
      _ < f && (f = _),
      m > p && (p = m),
      _ > g && (g = _),
      (m = a * i + l * e + c),
      (_ = o * i + h * e + u),
      m < d && (d = m),
      _ < f && (f = _),
      m > p && (p = m),
      _ > g && (g = _),
      (m = a * t + l * n + c),
      (_ = o * t + h * n + u),
      m < d && (d = m),
      _ < f && (f = _),
      m > p && (p = m),
      _ > g && (g = _),
      (m = a * i + l * n + c),
      (_ = o * i + h * n + u),
      m < d && (d = m),
      _ < f && (f = _),
      m > p && (p = m),
      _ > g && (g = _),
      (this.minX = d),
      (this.minY = f),
      (this.maxX = p),
      (this.maxY = g);
  }
  addRect(t, e) {
    this.addFrame(t.x, t.y, t.x + t.width, t.y + t.height, e);
  }
  addBounds(t, e) {
    this.addFrame(t.minX, t.minY, t.maxX, t.maxY, e);
  }
  addBoundsMask(t) {
    (this.minX = this.minX > t.minX ? this.minX : t.minX),
      (this.minY = this.minY > t.minY ? this.minY : t.minY),
      (this.maxX = this.maxX < t.maxX ? this.maxX : t.maxX),
      (this.maxY = this.maxY < t.maxY ? this.maxY : t.maxY);
  }
  applyMatrix(t) {
    const e = this.minX,
      i = this.minY,
      n = this.maxX,
      r = this.maxY,
      { a, b: o, c: l, d: h, tx: c, ty: u } = t;
    let d = a * e + l * i + c,
      f = o * e + h * i + u;
    (this.minX = d),
      (this.minY = f),
      (this.maxX = d),
      (this.maxY = f),
      (d = a * n + l * i + c),
      (f = o * n + h * i + u),
      (this.minX = d < this.minX ? d : this.minX),
      (this.minY = f < this.minY ? f : this.minY),
      (this.maxX = d > this.maxX ? d : this.maxX),
      (this.maxY = f > this.maxY ? f : this.maxY),
      (d = a * e + l * r + c),
      (f = o * e + h * r + u),
      (this.minX = d < this.minX ? d : this.minX),
      (this.minY = f < this.minY ? f : this.minY),
      (this.maxX = d > this.maxX ? d : this.maxX),
      (this.maxY = f > this.maxY ? f : this.maxY),
      (d = a * n + l * r + c),
      (f = o * n + h * r + u),
      (this.minX = d < this.minX ? d : this.minX),
      (this.minY = f < this.minY ? f : this.minY),
      (this.maxX = d > this.maxX ? d : this.maxX),
      (this.maxY = f > this.maxY ? f : this.maxY);
  }
  fit(t) {
    return (
      this.minX < t.left && (this.minX = t.left),
      this.maxX > t.right && (this.maxX = t.right),
      this.minY < t.top && (this.minY = t.top),
      this.maxY > t.bottom && (this.maxY = t.bottom),
      this
    );
  }
  fitBounds(t, e, i, n) {
    return (
      this.minX < t && (this.minX = t),
      this.maxX > e && (this.maxX = e),
      this.minY < i && (this.minY = i),
      this.maxY > n && (this.maxY = n),
      this
    );
  }
  pad(t, e = t) {
    return (
      (this.minX -= t),
      (this.maxX += t),
      (this.minY -= e),
      (this.maxY += e),
      this
    );
  }
  ceil() {
    return (
      (this.minX = Math.floor(this.minX)),
      (this.minY = Math.floor(this.minY)),
      (this.maxX = Math.ceil(this.maxX)),
      (this.maxY = Math.ceil(this.maxY)),
      this
    );
  }
  clone() {
    return new Wt(this.minX, this.minY, this.maxX, this.maxY);
  }
  scale(t, e = t) {
    return (
      (this.minX *= t),
      (this.minY *= e),
      (this.maxX *= t),
      (this.maxY *= e),
      this
    );
  }
  get x() {
    return this.minX;
  }
  set x(t) {
    const e = this.maxX - this.minX;
    (this.minX = t), (this.maxX = t + e);
  }
  get y() {
    return this.minY;
  }
  set y(t) {
    const e = this.maxY - this.minY;
    (this.minY = t), (this.maxY = t + e);
  }
  get width() {
    return this.maxX - this.minX;
  }
  set width(t) {
    this.maxX = this.minX + t;
  }
  get height() {
    return this.maxY - this.minY;
  }
  set height(t) {
    this.maxY = this.minY + t;
  }
  get left() {
    return this.minX;
  }
  get right() {
    return this.maxX;
  }
  get top() {
    return this.minY;
  }
  get bottom() {
    return this.maxY;
  }
  get isPositive() {
    return this.maxX - this.minX > 0 && this.maxY - this.minY > 0;
  }
  get isValid() {
    return this.minX + this.minY !== 1 / 0;
  }
  addVertexData(t, e, i, n) {
    let r = this.minX,
      a = this.minY,
      o = this.maxX,
      l = this.maxY;
    n || (n = this.matrix);
    const h = n.a,
      c = n.b,
      u = n.c,
      d = n.d,
      f = n.tx,
      p = n.ty;
    for (let g = e; g < i; g += 2) {
      const m = t[g],
        _ = t[g + 1],
        y = h * m + u * _ + f,
        x = c * m + d * _ + p;
      (r = y < r ? y : r),
        (a = x < a ? x : a),
        (o = y > o ? y : o),
        (l = x > l ? x : l);
    }
    (this.minX = r), (this.minY = a), (this.maxX = o), (this.maxY = l);
  }
  containsPoint(t, e) {
    return this.minX <= t && this.minY <= e && this.maxX >= t && this.maxY >= e;
  }
  toString() {
    return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`;
  }
}
var Il = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
  Vt = function (s) {
    return typeof s == "string" ? s.length > 0 : typeof s == "number";
  },
  ct = function (s, t, e) {
    return (
      t === void 0 && (t = 0),
      e === void 0 && (e = Math.pow(10, t)),
      Math.round(e * s) / e + 0
    );
  },
  Pt = function (s, t, e) {
    return (
      t === void 0 && (t = 0),
      e === void 0 && (e = 1),
      s > e ? e : s > t ? s : t
    );
  },
  Pa = function (s) {
    return (s = isFinite(s) ? s % 360 : 0) > 0 ? s : s + 360;
  },
  Kn = function (s) {
    return {
      r: Pt(s.r, 0, 255),
      g: Pt(s.g, 0, 255),
      b: Pt(s.b, 0, 255),
      a: Pt(s.a),
    };
  },
  li = function (s) {
    return { r: ct(s.r), g: ct(s.g), b: ct(s.b), a: ct(s.a, 3) };
  },
  Bl = /^#([0-9a-f]{3,8})$/i,
  As = function (s) {
    var t = s.toString(16);
    return t.length < 2 ? "0" + t : t;
  },
  ka = function (s) {
    var t = s.r,
      e = s.g,
      i = s.b,
      n = s.a,
      r = Math.max(t, e, i),
      a = r - Math.min(t, e, i),
      o = a
        ? r === t
          ? (e - i) / a
          : r === e
          ? 2 + (i - t) / a
          : 4 + (t - e) / a
        : 0;
    return {
      h: 60 * (o < 0 ? o + 6 : o),
      s: r ? (a / r) * 100 : 0,
      v: (r / 255) * 100,
      a: n,
    };
  },
  Ma = function (s) {
    var t = s.h,
      e = s.s,
      i = s.v,
      n = s.a;
    (t = (t / 360) * 6), (e /= 100), (i /= 100);
    var r = Math.floor(t),
      a = i * (1 - e),
      o = i * (1 - (t - r) * e),
      l = i * (1 - (1 - t + r) * e),
      h = r % 6;
    return {
      r: 255 * [i, o, a, a, l, i][h],
      g: 255 * [l, i, i, o, a, a][h],
      b: 255 * [a, a, l, i, i, o][h],
      a: n,
    };
  },
  Zn = function (s) {
    return { h: Pa(s.h), s: Pt(s.s, 0, 100), l: Pt(s.l, 0, 100), a: Pt(s.a) };
  },
  Qn = function (s) {
    return { h: ct(s.h), s: ct(s.s), l: ct(s.l), a: ct(s.a, 3) };
  },
  Jn = function (s) {
    return Ma(
      ((e = (t = s).s),
      {
        h: t.h,
        s:
          (e *= ((i = t.l) < 50 ? i : 100 - i) / 100) > 0
            ? ((2 * e) / (i + e)) * 100
            : 0,
        v: i + e,
        a: t.a,
      })
    );
    var t, e, i;
  },
  rs = function (s) {
    return {
      h: (t = ka(s)).h,
      s:
        (n = ((200 - (e = t.s)) * (i = t.v)) / 100) > 0 && n < 200
          ? ((e * i) / 100 / (n <= 100 ? n : 200 - n)) * 100
          : 0,
      l: n / 2,
      a: t.a,
    };
    var t, e, i, n;
  },
  Fl =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  Rl =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  Ll =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  $l =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  Di = {
    string: [
      [
        function (s) {
          var t = Bl.exec(s);
          return t
            ? (s = t[1]).length <= 4
              ? {
                  r: parseInt(s[0] + s[0], 16),
                  g: parseInt(s[1] + s[1], 16),
                  b: parseInt(s[2] + s[2], 16),
                  a:
                    s.length === 4 ? ct(parseInt(s[3] + s[3], 16) / 255, 2) : 1,
                }
              : s.length === 6 || s.length === 8
              ? {
                  r: parseInt(s.substr(0, 2), 16),
                  g: parseInt(s.substr(2, 2), 16),
                  b: parseInt(s.substr(4, 2), 16),
                  a:
                    s.length === 8
                      ? ct(parseInt(s.substr(6, 2), 16) / 255, 2)
                      : 1,
                }
              : null
            : null;
        },
        "hex",
      ],
      [
        function (s) {
          var t = Ll.exec(s) || $l.exec(s);
          return t
            ? t[2] !== t[4] || t[4] !== t[6]
              ? null
              : Kn({
                  r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                  g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                  b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                  a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                })
            : null;
        },
        "rgb",
      ],
      [
        function (s) {
          var t = Fl.exec(s) || Rl.exec(s);
          if (!t) return null;
          var e,
            i,
            n = Zn({
              h:
                ((e = t[1]),
                (i = t[2]),
                i === void 0 && (i = "deg"),
                Number(e) * (Il[i] || 1)),
              s: Number(t[3]),
              l: Number(t[4]),
              a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
            });
          return Jn(n);
        },
        "hsl",
      ],
    ],
    object: [
      [
        function (s) {
          var t = s.r,
            e = s.g,
            i = s.b,
            n = s.a,
            r = n === void 0 ? 1 : n;
          return Vt(t) && Vt(e) && Vt(i)
            ? Kn({ r: Number(t), g: Number(e), b: Number(i), a: Number(r) })
            : null;
        },
        "rgb",
      ],
      [
        function (s) {
          var t = s.h,
            e = s.s,
            i = s.l,
            n = s.a,
            r = n === void 0 ? 1 : n;
          if (!Vt(t) || !Vt(e) || !Vt(i)) return null;
          var a = Zn({
            h: Number(t),
            s: Number(e),
            l: Number(i),
            a: Number(r),
          });
          return Jn(a);
        },
        "hsl",
      ],
      [
        function (s) {
          var t = s.h,
            e = s.s,
            i = s.v,
            n = s.a,
            r = n === void 0 ? 1 : n;
          if (!Vt(t) || !Vt(e) || !Vt(i)) return null;
          var a = (function (o) {
            return {
              h: Pa(o.h),
              s: Pt(o.s, 0, 100),
              v: Pt(o.v, 0, 100),
              a: Pt(o.a),
            };
          })({ h: Number(t), s: Number(e), v: Number(i), a: Number(r) });
          return Ma(a);
        },
        "hsv",
      ],
    ],
  },
  tr = function (s, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e][0](s);
      if (i) return [i, t[e][1]];
    }
    return [null, void 0];
  },
  Gl = function (s) {
    return typeof s == "string"
      ? tr(s.trim(), Di.string)
      : typeof s == "object" && s !== null
      ? tr(s, Di.object)
      : [null, void 0];
  },
  hi = function (s, t) {
    var e = rs(s);
    return { h: e.h, s: Pt(e.s + 100 * t, 0, 100), l: e.l, a: e.a };
  },
  ci = function (s) {
    return (299 * s.r + 587 * s.g + 114 * s.b) / 1e3 / 255;
  },
  er = function (s, t) {
    var e = rs(s);
    return { h: e.h, s: e.s, l: Pt(e.l + 100 * t, 0, 100), a: e.a };
  },
  Ui = (function () {
    function s(t) {
      (this.parsed = Gl(t)[0]),
        (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 });
    }
    return (
      (s.prototype.isValid = function () {
        return this.parsed !== null;
      }),
      (s.prototype.brightness = function () {
        return ct(ci(this.rgba), 2);
      }),
      (s.prototype.isDark = function () {
        return ci(this.rgba) < 0.5;
      }),
      (s.prototype.isLight = function () {
        return ci(this.rgba) >= 0.5;
      }),
      (s.prototype.toHex = function () {
        return (
          (t = li(this.rgba)),
          (e = t.r),
          (i = t.g),
          (n = t.b),
          (a = (r = t.a) < 1 ? As(ct(255 * r)) : ""),
          "#" + As(e) + As(i) + As(n) + a
        );
        var t, e, i, n, r, a;
      }),
      (s.prototype.toRgb = function () {
        return li(this.rgba);
      }),
      (s.prototype.toRgbString = function () {
        return (
          (t = li(this.rgba)),
          (e = t.r),
          (i = t.g),
          (n = t.b),
          (r = t.a) < 1
            ? "rgba(" + e + ", " + i + ", " + n + ", " + r + ")"
            : "rgb(" + e + ", " + i + ", " + n + ")"
        );
        var t, e, i, n, r;
      }),
      (s.prototype.toHsl = function () {
        return Qn(rs(this.rgba));
      }),
      (s.prototype.toHslString = function () {
        return (
          (t = Qn(rs(this.rgba))),
          (e = t.h),
          (i = t.s),
          (n = t.l),
          (r = t.a) < 1
            ? "hsla(" + e + ", " + i + "%, " + n + "%, " + r + ")"
            : "hsl(" + e + ", " + i + "%, " + n + "%)"
        );
        var t, e, i, n, r;
      }),
      (s.prototype.toHsv = function () {
        return (
          (t = ka(this.rgba)),
          { h: ct(t.h), s: ct(t.s), v: ct(t.v), a: ct(t.a, 3) }
        );
        var t;
      }),
      (s.prototype.invert = function () {
        return Ot({
          r: 255 - (t = this.rgba).r,
          g: 255 - t.g,
          b: 255 - t.b,
          a: t.a,
        });
        var t;
      }),
      (s.prototype.saturate = function (t) {
        return t === void 0 && (t = 0.1), Ot(hi(this.rgba, t));
      }),
      (s.prototype.desaturate = function (t) {
        return t === void 0 && (t = 0.1), Ot(hi(this.rgba, -t));
      }),
      (s.prototype.grayscale = function () {
        return Ot(hi(this.rgba, -1));
      }),
      (s.prototype.lighten = function (t) {
        return t === void 0 && (t = 0.1), Ot(er(this.rgba, t));
      }),
      (s.prototype.darken = function (t) {
        return t === void 0 && (t = 0.1), Ot(er(this.rgba, -t));
      }),
      (s.prototype.rotate = function (t) {
        return t === void 0 && (t = 15), this.hue(this.hue() + t);
      }),
      (s.prototype.alpha = function (t) {
        return typeof t == "number"
          ? Ot({ r: (e = this.rgba).r, g: e.g, b: e.b, a: t })
          : ct(this.rgba.a, 3);
        var e;
      }),
      (s.prototype.hue = function (t) {
        var e = rs(this.rgba);
        return typeof t == "number"
          ? Ot({ h: t, s: e.s, l: e.l, a: e.a })
          : ct(e.h);
      }),
      (s.prototype.isEqual = function (t) {
        return this.toHex() === Ot(t).toHex();
      }),
      s
    );
  })(),
  Ot = function (s) {
    return s instanceof Ui ? s : new Ui(s);
  },
  sr = [],
  Ol = function (s) {
    s.forEach(function (t) {
      sr.indexOf(t) < 0 && (t(Ui, Di), sr.push(t));
    });
  };
function zl(s, t) {
  var e = {
      white: "#ffffff",
      bisque: "#ffe4c4",
      blue: "#0000ff",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      azure: "#f0ffff",
      whitesmoke: "#f5f5f5",
      papayawhip: "#ffefd5",
      plum: "#dda0dd",
      blanchedalmond: "#ffebcd",
      black: "#000000",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gainsboro: "#dcdcdc",
      cornsilk: "#fff8dc",
      cornflowerblue: "#6495ed",
      burlywood: "#deb887",
      aquamarine: "#7fffd4",
      beige: "#f5f5dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkkhaki: "#bdb76b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      peachpuff: "#ffdab9",
      darkmagenta: "#8b008b",
      darkred: "#8b0000",
      darkorchid: "#9932cc",
      darkorange: "#ff8c00",
      darkslateblue: "#483d8b",
      gray: "#808080",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      wheat: "#f5deb3",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      ghostwhite: "#f8f8ff",
      darkviolet: "#9400d3",
      magenta: "#ff00ff",
      green: "#008000",
      dodgerblue: "#1e90ff",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      blueviolet: "#8a2be2",
      forestgreen: "#228b22",
      lawngreen: "#7cfc00",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      fuchsia: "#ff00ff",
      brown: "#a52a2a",
      maroon: "#800000",
      mediumblue: "#0000cd",
      lightcoral: "#f08080",
      darkturquoise: "#00ced1",
      lightcyan: "#e0ffff",
      ivory: "#fffff0",
      lightyellow: "#ffffe0",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      linen: "#faf0e6",
      mediumaquamarine: "#66cdaa",
      lemonchiffon: "#fffacd",
      lime: "#00ff00",
      khaki: "#f0e68c",
      mediumseagreen: "#3cb371",
      limegreen: "#32cd32",
      mediumspringgreen: "#00fa9a",
      lightskyblue: "#87cefa",
      lightblue: "#add8e6",
      midnightblue: "#191970",
      lightpink: "#ffb6c1",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      mintcream: "#f5fffa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      navajowhite: "#ffdead",
      navy: "#000080",
      mediumvioletred: "#c71585",
      powderblue: "#b0e0e6",
      palegoldenrod: "#eee8aa",
      oldlace: "#fdf5e6",
      paleturquoise: "#afeeee",
      mediumturquoise: "#48d1cc",
      mediumorchid: "#ba55d3",
      rebeccapurple: "#663399",
      lightsteelblue: "#b0c4de",
      mediumslateblue: "#7b68ee",
      thistle: "#d8bfd8",
      tan: "#d2b48c",
      orchid: "#da70d6",
      mediumpurple: "#9370db",
      purple: "#800080",
      pink: "#ffc0cb",
      skyblue: "#87ceeb",
      springgreen: "#00ff7f",
      palegreen: "#98fb98",
      red: "#ff0000",
      yellow: "#ffff00",
      slateblue: "#6a5acd",
      lavenderblush: "#fff0f5",
      peru: "#cd853f",
      palevioletred: "#db7093",
      violet: "#ee82ee",
      teal: "#008080",
      slategray: "#708090",
      slategrey: "#708090",
      aliceblue: "#f0f8ff",
      darkseagreen: "#8fbc8f",
      darkolivegreen: "#556b2f",
      greenyellow: "#adff2f",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      tomato: "#ff6347",
      silver: "#c0c0c0",
      sienna: "#a0522d",
      lavender: "#e6e6fa",
      lightgreen: "#90ee90",
      orange: "#ffa500",
      orangered: "#ff4500",
      steelblue: "#4682b4",
      royalblue: "#4169e1",
      turquoise: "#40e0d0",
      yellowgreen: "#9acd32",
      salmon: "#fa8072",
      saddlebrown: "#8b4513",
      sandybrown: "#f4a460",
      rosybrown: "#bc8f8f",
      darksalmon: "#e9967a",
      lightgoldenrodyellow: "#fafad2",
      snow: "#fffafa",
      lightgrey: "#d3d3d3",
      lightgray: "#d3d3d3",
      dimgray: "#696969",
      dimgrey: "#696969",
      olivedrab: "#6b8e23",
      olive: "#808000",
    },
    i = {};
  for (var n in e) i[e[n]] = n;
  var r = {};
  (s.prototype.toName = function (a) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
      return "transparent";
    var o,
      l,
      h = i[this.toHex()];
    if (h) return h;
    if (a != null && a.closest) {
      var c = this.toRgb(),
        u = 1 / 0,
        d = "black";
      if (!r.length) for (var f in e) r[f] = new s(e[f]).toRgb();
      for (var p in e) {
        var g =
          ((o = c),
          (l = r[p]),
          Math.pow(o.r - l.r, 2) +
            Math.pow(o.g - l.g, 2) +
            Math.pow(o.b - l.b, 2));
        g < u && ((u = g), (d = p));
      }
      return d;
    }
  }),
    t.string.push([
      function (a) {
        var o = a.toLowerCase(),
          l = o === "transparent" ? "#0000" : e[o];
        return l ? new s(l).toRgb() : null;
      },
      "name",
    ]);
}
Ol([zl]);
const Le = class Je {
  constructor(t = 16777215) {
    (this._value = null),
      (this._components = new Float32Array(4)),
      this._components.fill(1),
      (this._int = 16777215),
      (this.value = t);
  }
  get red() {
    return this._components[0];
  }
  get green() {
    return this._components[1];
  }
  get blue() {
    return this._components[2];
  }
  get alpha() {
    return this._components[3];
  }
  setValue(t) {
    return (this.value = t), this;
  }
  set value(t) {
    if (t instanceof Je)
      (this._value = this._cloneSource(t._value)),
        (this._int = t._int),
        this._components.set(t._components);
    else {
      if (t === null) throw new Error("Cannot set Color#value to null");
      (this._value === null || !this._isSourceEqual(this._value, t)) &&
        ((this._value = this._cloneSource(t)), this._normalize(this._value));
    }
  }
  get value() {
    return this._value;
  }
  _cloneSource(t) {
    return typeof t == "string" ||
      typeof t == "number" ||
      t instanceof Number ||
      t === null
      ? t
      : Array.isArray(t) || ArrayBuffer.isView(t)
      ? t.slice(0)
      : typeof t == "object" && t !== null
      ? { ...t }
      : t;
  }
  _isSourceEqual(t, e) {
    const i = typeof t;
    if (i !== typeof e) return !1;
    if (i === "number" || i === "string" || t instanceof Number) return t === e;
    if (
      (Array.isArray(t) && Array.isArray(e)) ||
      (ArrayBuffer.isView(t) && ArrayBuffer.isView(e))
    )
      return t.length !== e.length ? !1 : t.every((r, a) => r === e[a]);
    if (t !== null && e !== null) {
      const r = Object.keys(t),
        a = Object.keys(e);
      return r.length !== a.length ? !1 : r.every((o) => t[o] === e[o]);
    }
    return t === e;
  }
  toRgba() {
    const [t, e, i, n] = this._components;
    return { r: t, g: e, b: i, a: n };
  }
  toRgb() {
    const [t, e, i] = this._components;
    return { r: t, g: e, b: i };
  }
  toRgbaString() {
    const [t, e, i] = this.toUint8RgbArray();
    return `rgba(${t},${e},${i},${this.alpha})`;
  }
  toUint8RgbArray(t) {
    const [e, i, n] = this._components;
    return (
      this._arrayRgb || (this._arrayRgb = []),
      (t = t || this._arrayRgb),
      (t[0] = Math.round(e * 255)),
      (t[1] = Math.round(i * 255)),
      (t[2] = Math.round(n * 255)),
      t
    );
  }
  toArray(t) {
    this._arrayRgba || (this._arrayRgba = []), (t = t || this._arrayRgba);
    const [e, i, n, r] = this._components;
    return (t[0] = e), (t[1] = i), (t[2] = n), (t[3] = r), t;
  }
  toRgbArray(t) {
    this._arrayRgb || (this._arrayRgb = []), (t = t || this._arrayRgb);
    const [e, i, n] = this._components;
    return (t[0] = e), (t[1] = i), (t[2] = n), t;
  }
  toNumber() {
    return this._int;
  }
  toBgrNumber() {
    const [t, e, i] = this.toUint8RgbArray();
    return (i << 16) + (e << 8) + t;
  }
  toLittleEndianNumber() {
    const t = this._int;
    return (t >> 16) + (t & 65280) + ((t & 255) << 16);
  }
  multiply(t) {
    const [e, i, n, r] = Je._temp.setValue(t)._components;
    return (
      (this._components[0] *= e),
      (this._components[1] *= i),
      (this._components[2] *= n),
      (this._components[3] *= r),
      this._refreshInt(),
      (this._value = null),
      this
    );
  }
  premultiply(t, e = !0) {
    return (
      e &&
        ((this._components[0] *= t),
        (this._components[1] *= t),
        (this._components[2] *= t)),
      (this._components[3] = t),
      this._refreshInt(),
      (this._value = null),
      this
    );
  }
  toPremultiplied(t, e = !0) {
    if (t === 1) return (255 << 24) + this._int;
    if (t === 0) return e ? 0 : this._int;
    let i = (this._int >> 16) & 255,
      n = (this._int >> 8) & 255,
      r = this._int & 255;
    return (
      e &&
        ((i = (i * t + 0.5) | 0),
        (n = (n * t + 0.5) | 0),
        (r = (r * t + 0.5) | 0)),
      ((t * 255) << 24) + (i << 16) + (n << 8) + r
    );
  }
  toHex() {
    const t = this._int.toString(16);
    return `#${"000000".substring(0, 6 - t.length) + t}`;
  }
  toHexa() {
    const e = Math.round(this._components[3] * 255).toString(16);
    return this.toHex() + "00".substring(0, 2 - e.length) + e;
  }
  setAlpha(t) {
    return (this._components[3] = this._clamp(t)), this;
  }
  _normalize(t) {
    let e, i, n, r;
    if (
      (typeof t == "number" || t instanceof Number) &&
      t >= 0 &&
      t <= 16777215
    ) {
      const a = t;
      (e = ((a >> 16) & 255) / 255),
        (i = ((a >> 8) & 255) / 255),
        (n = (a & 255) / 255),
        (r = 1);
    } else if (
      (Array.isArray(t) || t instanceof Float32Array) &&
      t.length >= 3 &&
      t.length <= 4
    )
      (t = this._clamp(t)), ([e, i, n, r = 1] = t);
    else if (
      (t instanceof Uint8Array || t instanceof Uint8ClampedArray) &&
      t.length >= 3 &&
      t.length <= 4
    )
      (t = this._clamp(t, 0, 255)),
        ([e, i, n, r = 255] = t),
        (e /= 255),
        (i /= 255),
        (n /= 255),
        (r /= 255);
    else if (typeof t == "string" || typeof t == "object") {
      if (typeof t == "string") {
        const o = Je.HEX_PATTERN.exec(t);
        o && (t = `#${o[2]}`);
      }
      const a = Ot(t);
      a.isValid() &&
        (({ r: e, g: i, b: n, a: r } = a.rgba),
        (e /= 255),
        (i /= 255),
        (n /= 255));
    }
    if (e !== void 0)
      (this._components[0] = e),
        (this._components[1] = i),
        (this._components[2] = n),
        (this._components[3] = r),
        this._refreshInt();
    else throw new Error(`Unable to convert color ${t}`);
  }
  _refreshInt() {
    this._clamp(this._components);
    const [t, e, i] = this._components;
    this._int = ((t * 255) << 16) + ((e * 255) << 8) + ((i * 255) | 0);
  }
  _clamp(t, e = 0, i = 1) {
    return typeof t == "number"
      ? Math.min(Math.max(t, e), i)
      : (t.forEach((n, r) => {
          t[r] = Math.min(Math.max(n, e), i);
        }),
        t);
  }
  static isColorLike(t) {
    return (
      typeof t == "number" ||
      typeof t == "string" ||
      t instanceof Number ||
      t instanceof Je ||
      Array.isArray(t) ||
      t instanceof Uint8Array ||
      t instanceof Uint8ClampedArray ||
      t instanceof Float32Array ||
      (t.r !== void 0 && t.g !== void 0 && t.b !== void 0) ||
      (t.r !== void 0 && t.g !== void 0 && t.b !== void 0 && t.a !== void 0) ||
      (t.h !== void 0 && t.s !== void 0 && t.l !== void 0) ||
      (t.h !== void 0 && t.s !== void 0 && t.l !== void 0 && t.a !== void 0) ||
      (t.h !== void 0 && t.s !== void 0 && t.v !== void 0) ||
      (t.h !== void 0 && t.s !== void 0 && t.v !== void 0 && t.a !== void 0)
    );
  }
};
Le.shared = new Le();
Le._temp = new Le();
Le.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let nt = Le;
const Dl = { cullArea: null, cullable: !1, cullableChildren: !0 };
class yn {
  constructor(t, e) {
    (this._pool = []),
      (this._count = 0),
      (this._index = 0),
      (this._classType = t),
      e && this.prepopulate(e);
  }
  prepopulate(t) {
    for (let e = 0; e < t; e++)
      this._pool[this._index++] = new this._classType();
    this._count += t;
  }
  get(t) {
    var i;
    let e;
    return (
      this._index > 0
        ? (e = this._pool[--this._index])
        : (e = new this._classType()),
      (i = e.init) == null || i.call(e, t),
      e
    );
  }
  return(t) {
    var e;
    (e = t.reset) == null || e.call(t), (this._pool[this._index++] = t);
  }
  get totalSize() {
    return this._count;
  }
  get totalFree() {
    return this._index;
  }
  get totalUsed() {
    return this._count - this._index;
  }
  clear() {
    (this._pool.length = 0), (this._index = 0);
  }
}
class Ul {
  constructor() {
    this._poolsByClass = new Map();
  }
  prepopulate(t, e) {
    this.getPool(t).prepopulate(e);
  }
  get(t, e) {
    return this.getPool(t).get(e);
  }
  return(t) {
    this.getPool(t.constructor).return(t);
  }
  getPool(t) {
    return (
      this._poolsByClass.has(t) || this._poolsByClass.set(t, new yn(t)),
      this._poolsByClass.get(t)
    );
  }
  stats() {
    const t = {};
    return (
      this._poolsByClass.forEach((e) => {
        const i = t[e._classType.name]
          ? e._classType.name + e._classType.ID
          : e._classType.name;
        t[i] = { free: e.totalFree, used: e.totalUsed, size: e.totalSize };
      }),
      t
    );
  }
}
const Yt = new Ul();
function Nl(s, t, e) {
  const i = s.length;
  let n;
  if (t >= i || e === 0) return;
  e = t + e > i ? i - t : e;
  const r = i - e;
  for (n = t; n < r; ++n) s[n] = s[n + e];
  s.length = r;
}
const Wl = {
  allowChildren: !0,
  removeChildren(s = 0, t) {
    const e = t ?? this.children.length,
      i = e - s,
      n = [];
    if (i > 0 && i <= e) {
      for (let a = e - 1; a >= s; a--) {
        const o = this.children[a];
        o && (n.push(o), (o.parent = null));
      }
      Nl(this.children, s, e);
      const r = this.renderGroup || this.parentRenderGroup;
      r && r.removeChildren(n);
      for (let a = 0; a < n.length; ++a)
        this.emit("childRemoved", n[a], this, a), n[a].emit("removed", this);
      return n;
    } else if (i === 0 && this.children.length === 0) return n;
    throw new RangeError(
      "removeChildren: numeric values are outside the acceptable range."
    );
  },
  removeChildAt(s) {
    const t = this.getChildAt(s);
    return this.removeChild(t);
  },
  getChildAt(s) {
    if (s < 0 || s >= this.children.length)
      throw new Error(`getChildAt: Index (${s}) does not exist.`);
    return this.children[s];
  },
  setChildIndex(s, t) {
    if (t < 0 || t >= this.children.length)
      throw new Error(
        `The index ${t} supplied is out of bounds ${this.children.length}`
      );
    this.getChildIndex(s), this.addChildAt(s, t);
  },
  getChildIndex(s) {
    const t = this.children.indexOf(s);
    if (t === -1)
      throw new Error("The supplied Container must be a child of the caller");
    return t;
  },
  addChildAt(s, t) {
    this.allowChildren ||
      et(
        it,
        "addChildAt: Only Containers will be allowed to add children in v8.0.0"
      );
    const { children: e } = this;
    if (t < 0 || t > e.length)
      throw new Error(
        `${s}addChildAt: The index ${t} supplied is out of bounds ${e.length}`
      );
    if (s.parent) {
      const n = s.parent.children.indexOf(s);
      if (s.parent === this && n === t) return s;
      n !== -1 && s.parent.children.splice(n, 1);
    }
    t === e.length ? e.push(s) : e.splice(t, 0, s),
      (s.parent = this),
      (s.didChange = !0),
      (s._updateFlags = 15);
    const i = this.renderGroup || this.parentRenderGroup;
    return (
      i && i.addChild(s),
      this.sortableChildren && (this.sortDirty = !0),
      this.emit("childAdded", s, this, t),
      s.emit("added", this),
      s
    );
  },
  swapChildren(s, t) {
    if (s === t) return;
    const e = this.getChildIndex(s),
      i = this.getChildIndex(t);
    (this.children[e] = t), (this.children[i] = s);
    const n = this.renderGroup || this.parentRenderGroup;
    n && (n.structureDidChange = !0), this._didContainerChangeTick++;
  },
  removeFromParent() {
    var s;
    (s = this.parent) == null || s.removeChild(this);
  },
  reparentChild(...s) {
    return s.length === 1
      ? this.reparentChildAt(s[0], this.children.length)
      : (s.forEach((t) => this.reparentChildAt(t, this.children.length)), s[0]);
  },
  reparentChildAt(s, t) {
    if (s.parent === this) return this.setChildIndex(s, t), s;
    const e = s.worldTransform.clone();
    s.removeFromParent(), this.addChildAt(s, t);
    const i = this.worldTransform.clone();
    return i.invert(), e.prepend(i), s.setFromMatrix(e), s;
  },
};
class ir {
  constructor() {
    (this.pipe = "filter"), (this.priority = 1);
  }
  destroy() {
    for (let t = 0; t < this.filters.length; t++) this.filters[t].destroy();
    (this.filters = null), (this.filterArea = null);
  }
}
class Vl {
  constructor() {
    (this._effectClasses = []), (this._tests = []), (this._initialized = !1);
  }
  init() {
    this._initialized ||
      ((this._initialized = !0),
      this._effectClasses.forEach((t) => {
        this.add({ test: t.test, maskClass: t });
      }));
  }
  add(t) {
    this._tests.push(t);
  }
  getMaskEffect(t) {
    this._initialized || this.init();
    for (let e = 0; e < this._tests.length; e++) {
      const i = this._tests[e];
      if (i.test(t)) return Yt.get(i.maskClass, t);
    }
    return t;
  }
  returnMaskEffect(t) {
    Yt.return(t);
  }
}
const Ni = new Vl();
mt.handleByList(L.MaskEffect, Ni._effectClasses);
const Hl = {
    _maskEffect: null,
    _maskOptions: { inverse: !1 },
    _filterEffect: null,
    effects: [],
    addEffect(s) {
      if (this.effects.indexOf(s) !== -1) return;
      this.effects.push(s),
        this.effects.sort((i, n) => i.priority - n.priority);
      const e = this.renderGroup || this.parentRenderGroup;
      e && (e.structureDidChange = !0), this._updateIsSimple();
    },
    removeEffect(s) {
      const t = this.effects.indexOf(s);
      t !== -1 &&
        (this.effects.splice(t, 1),
        this.parentRenderGroup &&
          (this.parentRenderGroup.structureDidChange = !0),
        this._updateIsSimple());
    },
    set mask(s) {
      const t = this._maskEffect;
      (t == null ? void 0 : t.mask) !== s &&
        (t &&
          (this.removeEffect(t),
          Ni.returnMaskEffect(t),
          (this._maskEffect = null)),
        s != null &&
          ((this._maskEffect = Ni.getMaskEffect(s)),
          this.addEffect(this._maskEffect)));
    },
    setMask(s) {
      (this._maskOptions = { ...this._maskOptions, ...s }),
        s.mask && (this.mask = s.mask);
    },
    get mask() {
      var s;
      return (s = this._maskEffect) == null ? void 0 : s.mask;
    },
    set filters(s) {
      var r;
      !Array.isArray(s) && s && (s = [s]);
      const t = this._filterEffect || (this._filterEffect = new ir());
      s = s;
      const e = (s == null ? void 0 : s.length) > 0,
        i = ((r = t.filters) == null ? void 0 : r.length) > 0,
        n = e !== i;
      (s = Array.isArray(s) ? s.slice(0) : s),
        (t.filters = Object.freeze(s)),
        n &&
          (e
            ? this.addEffect(t)
            : (this.removeEffect(t), (t.filters = s ?? null)));
    },
    get filters() {
      var s;
      return (s = this._filterEffect) == null ? void 0 : s.filters;
    },
    set filterArea(s) {
      this._filterEffect || (this._filterEffect = new ir()),
        (this._filterEffect.filterArea = s);
    },
    get filterArea() {
      var s;
      return (s = this._filterEffect) == null ? void 0 : s.filterArea;
    },
  },
  jl = {
    label: null,
    get name() {
      return (
        et(
          it,
          "Container.name property has been removed, use Container.label instead"
        ),
        this.label
      );
    },
    set name(s) {
      et(
        it,
        "Container.name property has been removed, use Container.label instead"
      ),
        (this.label = s);
    },
    getChildByName(s, t = !1) {
      return this.getChildByLabel(s, t);
    },
    getChildByLabel(s, t = !1) {
      const e = this.children;
      for (let i = 0; i < e.length; i++) {
        const n = e[i];
        if (n.label === s || (s instanceof RegExp && s.test(n.label))) return n;
      }
      if (t)
        for (let i = 0; i < e.length; i++) {
          const r = e[i].getChildByLabel(s, !0);
          if (r) return r;
        }
      return null;
    },
    getChildrenByLabel(s, t = !1, e = []) {
      const i = this.children;
      for (let n = 0; n < i.length; n++) {
        const r = i[n];
        (r.label === s || (s instanceof RegExp && s.test(r.label))) &&
          e.push(r);
      }
      if (t)
        for (let n = 0; n < i.length; n++) i[n].getChildrenByLabel(s, !0, e);
      return e;
    },
  },
  Xt = new yn(j),
  $e = new yn(Wt);
function Ta(s, t, e) {
  e.clear();
  let i, n;
  return (
    s.parent
      ? t
        ? (i = s.parent.worldTransform)
        : ((n = Xt.get().identity()), (i = Ns(s, n)))
      : (i = j.IDENTITY),
    Ea(s, e, i, t),
    n && Xt.return(n),
    e.isValid || e.set(0, 0, 0, 0),
    e
  );
}
function Ea(s, t, e, i) {
  var o, l;
  if (!s.visible || !s.measurable) return;
  let n;
  i
    ? (n = s.worldTransform)
    : (s.updateLocalTransform(),
      (n = Xt.get()),
      n.appendFrom(s.localTransform, e));
  const r = t,
    a = !!s.effects.length;
  if ((a && (t = $e.get().clear()), s.boundsArea)) t.addRect(s.boundsArea, n);
  else {
    s.addBounds && ((t.matrix = n), s.addBounds(t));
    for (let h = 0; h < s.children.length; h++) Ea(s.children[h], t, n, i);
  }
  if (a) {
    for (let h = 0; h < s.effects.length; h++)
      (l = (o = s.effects[h]).addBounds) == null || l.call(o, t);
    r.addBounds(t, j.IDENTITY), $e.return(t);
  }
  i || Xt.return(n);
}
function Ns(s, t) {
  const e = s.parent;
  return (
    e && (Ns(e, t), e.updateLocalTransform(), t.append(e.localTransform)), t
  );
}
let ui = 0;
const nr = 500;
function rt(...s) {
  ui !== nr &&
    (ui++,
    ui === nr
      ? console.warn(
          "PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."
        )
      : console.warn("PixiJS Warning: ", ...s));
}
function Ia(s, t, e) {
  return (
    t.clear(),
    e || (e = j.IDENTITY),
    Ba(s, t, e, s, !0),
    t.isValid || t.set(0, 0, 0, 0),
    t
  );
}
function Ba(s, t, e, i, n) {
  var l, h;
  let r;
  if (n) (r = Xt.get()), (r = e.copyTo(r));
  else {
    if (!s.visible || !s.measurable) return;
    s.updateLocalTransform();
    const c = s.localTransform;
    (r = Xt.get()), r.appendFrom(c, e);
  }
  const a = t,
    o = !!s.effects.length;
  if ((o && (t = $e.get().clear()), s.boundsArea)) t.addRect(s.boundsArea, r);
  else {
    s.renderPipeId && ((t.matrix = r), s.addBounds(t));
    const c = s.children;
    for (let u = 0; u < c.length; u++) Ba(c[u], t, r, i, !1);
  }
  if (o) {
    for (let c = 0; c < s.effects.length; c++)
      (h = (l = s.effects[c]).addLocalBounds) == null || h.call(l, t, i);
    a.addBounds(t, j.IDENTITY), $e.return(t);
  }
  Xt.return(r);
}
function Fa(s, t) {
  const e = s.children;
  for (let i = 0; i < e.length; i++) {
    const n = e[i],
      r = n.uid,
      a =
        ((n._didViewChangeTick & 65535) << 16) |
        (n._didContainerChangeTick & 65535),
      o = t.index;
    (t.data[o] !== r || t.data[o + 1] !== a) &&
      ((t.data[t.index] = r), (t.data[t.index + 1] = a), (t.didChange = !0)),
      (t.index = o + 2),
      n.children.length && Fa(n, t);
  }
  return t.didChange;
}
const Yl = new j(),
  Xl = {
    _localBoundsCacheId: -1,
    _localBoundsCacheData: null,
    _setWidth(s, t) {
      const e = Math.sign(this.scale.x) || 1;
      t !== 0 ? (this.scale.x = (s / t) * e) : (this.scale.x = e);
    },
    _setHeight(s, t) {
      const e = Math.sign(this.scale.y) || 1;
      t !== 0 ? (this.scale.y = (s / t) * e) : (this.scale.y = e);
    },
    getLocalBounds() {
      this._localBoundsCacheData ||
        (this._localBoundsCacheData = {
          data: [],
          index: 1,
          didChange: !1,
          localBounds: new Wt(),
        });
      const s = this._localBoundsCacheData;
      return (
        (s.index = 1),
        (s.didChange = !1),
        s.data[0] !== this._didViewChangeTick &&
          ((s.didChange = !0), (s.data[0] = this._didViewChangeTick)),
        Fa(this, s),
        s.didChange && Ia(this, s.localBounds, Yl),
        s.localBounds
      );
    },
    getBounds(s, t) {
      return Ta(this, s, t || new Wt());
    },
  },
  ql = {
    _onRender: null,
    set onRender(s) {
      const t = this.renderGroup || this.parentRenderGroup;
      if (!s) {
        this._onRender && (t == null || t.removeOnRender(this)),
          (this._onRender = null);
        return;
      }
      this._onRender || t == null || t.addOnRender(this), (this._onRender = s);
    },
    get onRender() {
      return this._onRender;
    },
  },
  Kl = {
    _zIndex: 0,
    sortDirty: !1,
    sortableChildren: !1,
    get zIndex() {
      return this._zIndex;
    },
    set zIndex(s) {
      this._zIndex !== s && ((this._zIndex = s), this.depthOfChildModified());
    },
    depthOfChildModified() {
      this.parent &&
        ((this.parent.sortableChildren = !0), (this.parent.sortDirty = !0)),
        this.parentRenderGroup &&
          (this.parentRenderGroup.structureDidChange = !0);
    },
    sortChildren() {
      this.sortDirty && ((this.sortDirty = !1), this.children.sort(Zl));
    },
  };
function Zl(s, t) {
  return s._zIndex - t._zIndex;
}
const Ql = {
  getGlobalPosition(s = new ft(), t = !1) {
    return (
      this.parent
        ? this.parent.toGlobal(this._position, s, t)
        : ((s.x = this._position.x), (s.y = this._position.y)),
      s
    );
  },
  toGlobal(s, t, e = !1) {
    if (!e) {
      this.updateLocalTransform();
      const i = Ns(this, new j());
      return i.append(this.localTransform), i.apply(s, t);
    }
    return this.worldTransform.apply(s, t);
  },
  toLocal(s, t, e, i) {
    if ((t && (s = t.toGlobal(s, e, i)), !i)) {
      this.updateLocalTransform();
      const n = Ns(this, new j());
      return n.append(this.localTransform), n.applyInverse(s, e);
    }
    return this.worldTransform.applyInverse(s, e);
  },
};
let Jl = 0;
class Ra {
  constructor() {
    (this.uid = lt("instructionSet")),
      (this.instructions = []),
      (this.instructionSize = 0),
      (this.renderables = []),
      (this.tick = 0);
  }
  reset() {
    (this.instructionSize = 0), (this.tick = Jl++);
  }
  add(t) {
    this.instructions[this.instructionSize++] = t;
  }
  log() {
    (this.instructions.length = this.instructionSize),
      console.table(this.instructions, ["type", "action"]);
  }
}
class th {
  constructor() {
    (this.renderPipeId = "renderGroup"),
      (this.root = null),
      (this.canBundle = !1),
      (this.renderGroupParent = null),
      (this.renderGroupChildren = []),
      (this.worldTransform = new j()),
      (this.worldColorAlpha = 4294967295),
      (this.worldColor = 16777215),
      (this.worldAlpha = 1),
      (this.childrenToUpdate = Object.create(null)),
      (this.updateTick = 0),
      (this.childrenRenderablesToUpdate = { list: [], index: 0 }),
      (this.structureDidChange = !0),
      (this.instructionSet = new Ra()),
      (this._onRenderContainers = []);
  }
  init(t) {
    (this.root = t), t._onRender && this.addOnRender(t), (t.didChange = !0);
    const e = t.children;
    for (let i = 0; i < e.length; i++) this.addChild(e[i]);
  }
  reset() {
    this.renderGroupChildren.length = 0;
    for (const t in this.childrenToUpdate) {
      const e = this.childrenToUpdate[t];
      e.list.fill(null), (e.index = 0);
    }
    (this.childrenRenderablesToUpdate.index = 0),
      this.childrenRenderablesToUpdate.list.fill(null),
      (this.root = null),
      (this.updateTick = 0),
      (this.structureDidChange = !0),
      (this._onRenderContainers.length = 0),
      (this.renderGroupParent = null);
  }
  get localTransform() {
    return this.root.localTransform;
  }
  addRenderGroupChild(t) {
    t.renderGroupParent && t.renderGroupParent._removeRenderGroupChild(t),
      (t.renderGroupParent = this),
      this.renderGroupChildren.push(t);
  }
  _removeRenderGroupChild(t) {
    const e = this.renderGroupChildren.indexOf(t);
    e > -1 && this.renderGroupChildren.splice(e, 1),
      (t.renderGroupParent = null);
  }
  addChild(t) {
    if (
      ((this.structureDidChange = !0),
      (t.parentRenderGroup = this),
      (t.updateTick = -1),
      t.parent === this.root
        ? (t.relativeRenderGroupDepth = 1)
        : (t.relativeRenderGroupDepth = t.parent.relativeRenderGroupDepth + 1),
      (t.didChange = !0),
      this.onChildUpdate(t),
      t.renderGroup)
    ) {
      this.addRenderGroupChild(t.renderGroup);
      return;
    }
    t._onRender && this.addOnRender(t);
    const e = t.children;
    for (let i = 0; i < e.length; i++) this.addChild(e[i]);
  }
  removeChild(t) {
    if (
      ((this.structureDidChange = !0),
      t._onRender && (t.renderGroup || this.removeOnRender(t)),
      (t.parentRenderGroup = null),
      t.renderGroup)
    ) {
      this._removeRenderGroupChild(t.renderGroup);
      return;
    }
    const e = t.children;
    for (let i = 0; i < e.length; i++) this.removeChild(e[i]);
  }
  removeChildren(t) {
    for (let e = 0; e < t.length; e++) this.removeChild(t[e]);
  }
  onChildUpdate(t) {
    let e = this.childrenToUpdate[t.relativeRenderGroupDepth];
    e ||
      (e = this.childrenToUpdate[t.relativeRenderGroupDepth] =
        { index: 0, list: [] }),
      (e.list[e.index++] = t);
  }
  updateRenderable(t) {
    t.globalDisplayStatus < 7 ||
      (this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),
      (t.didViewUpdate = !1));
  }
  onChildViewUpdate(t) {
    this.childrenRenderablesToUpdate.list[
      this.childrenRenderablesToUpdate.index++
    ] = t;
  }
  get isRenderable() {
    return this.root.localDisplayStatus === 7 && this.worldAlpha > 0;
  }
  addOnRender(t) {
    this._onRenderContainers.push(t);
  }
  removeOnRender(t) {
    this._onRenderContainers.splice(this._onRenderContainers.indexOf(t), 1);
  }
  runOnRender() {
    for (let t = 0; t < this._onRenderContainers.length; t++)
      this._onRenderContainers[t]._onRender();
  }
  destroy() {
    (this.renderGroupParent = null),
      (this.root = null),
      (this.childrenRenderablesToUpdate = null),
      (this.childrenToUpdate = null),
      (this.renderGroupChildren = null),
      (this._onRenderContainers = null),
      (this.instructionSet = null);
  }
  getChildren(t = []) {
    const e = this.root.children;
    for (let i = 0; i < e.length; i++) this._getChildren(e[i], t);
    return t;
  }
  _getChildren(t, e = []) {
    if ((e.push(t), t.renderGroup)) return e;
    const i = t.children;
    for (let n = 0; n < i.length; n++) this._getChildren(i[n], e);
    return e;
  }
}
function eh(s, t, e = {}) {
  for (const i in t) !e[i] && t[i] !== void 0 && (s[i] = t[i]);
}
const di = new _t(null),
  fi = new _t(null),
  pi = new _t(null, 1, 1),
  rr = 1,
  sh = 2,
  mi = 4;
class gt extends Lt {
  constructor(t = {}) {
    var e, i;
    super(),
      (this.uid = lt("renderable")),
      (this._updateFlags = 15),
      (this.renderGroup = null),
      (this.parentRenderGroup = null),
      (this.parentRenderGroupIndex = 0),
      (this.didChange = !1),
      (this.didViewUpdate = !1),
      (this.relativeRenderGroupDepth = 0),
      (this.children = []),
      (this.parent = null),
      (this.includeInBuild = !0),
      (this.measurable = !0),
      (this.isSimple = !0),
      (this.updateTick = -1),
      (this.localTransform = new j()),
      (this.relativeGroupTransform = new j()),
      (this.groupTransform = this.relativeGroupTransform),
      (this.destroyed = !1),
      (this._position = new _t(this, 0, 0)),
      (this._scale = pi),
      (this._pivot = fi),
      (this._skew = di),
      (this._cx = 1),
      (this._sx = 0),
      (this._cy = 0),
      (this._sy = 1),
      (this._rotation = 0),
      (this.localColor = 16777215),
      (this.localAlpha = 1),
      (this.groupAlpha = 1),
      (this.groupColor = 16777215),
      (this.groupColorAlpha = 4294967295),
      (this.localBlendMode = "inherit"),
      (this.groupBlendMode = "normal"),
      (this.localDisplayStatus = 7),
      (this.globalDisplayStatus = 7),
      (this._didContainerChangeTick = 0),
      (this._didViewChangeTick = 0),
      (this._didLocalTransformChangeId = -1),
      (this.effects = []),
      eh(this, t, { children: !0, parent: !0, effects: !0 }),
      (e = t.children) == null || e.forEach((n) => this.addChild(n)),
      (i = t.parent) == null || i.addChild(this);
  }
  static mixin(t) {
    Object.defineProperties(gt.prototype, Object.getOwnPropertyDescriptors(t));
  }
  set _didChangeId(t) {
    (this._didViewChangeTick = (t >> 12) & 4095),
      (this._didContainerChangeTick = t & 4095);
  }
  get _didChangeId() {
    return (
      (this._didContainerChangeTick & 4095) |
      ((this._didViewChangeTick & 4095) << 12)
    );
  }
  addChild(...t) {
    if (
      (this.allowChildren ||
        et(
          it,
          "addChild: Only Containers will be allowed to add children in v8.0.0"
        ),
      t.length > 1)
    ) {
      for (let n = 0; n < t.length; n++) this.addChild(t[n]);
      return t[0];
    }
    const e = t[0];
    if (e.parent === this)
      return (
        this.children.splice(this.children.indexOf(e), 1),
        this.children.push(e),
        this.parentRenderGroup &&
          (this.parentRenderGroup.structureDidChange = !0),
        e
      );
    e.parent && e.parent.removeChild(e),
      this.children.push(e),
      this.sortableChildren && (this.sortDirty = !0),
      (e.parent = this),
      (e.didChange = !0),
      (e._updateFlags = 15);
    const i = this.renderGroup || this.parentRenderGroup;
    return (
      i && i.addChild(e),
      this.emit("childAdded", e, this, this.children.length - 1),
      e.emit("added", this),
      this._didViewChangeTick++,
      e._zIndex !== 0 && e.depthOfChildModified(),
      e
    );
  }
  removeChild(...t) {
    if (t.length > 1) {
      for (let n = 0; n < t.length; n++) this.removeChild(t[n]);
      return t[0];
    }
    const e = t[0],
      i = this.children.indexOf(e);
    return (
      i > -1 &&
        (this._didViewChangeTick++,
        this.children.splice(i, 1),
        this.renderGroup
          ? this.renderGroup.removeChild(e)
          : this.parentRenderGroup && this.parentRenderGroup.removeChild(e),
        (e.parent = null),
        this.emit("childRemoved", e, this, i),
        e.emit("removed", this)),
      e
    );
  }
  _onUpdate(t) {
    t && t === this._skew && this._updateSkew(),
      this._didContainerChangeTick++,
      !this.didChange &&
        ((this.didChange = !0),
        this.parentRenderGroup && this.parentRenderGroup.onChildUpdate(this));
  }
  set isRenderGroup(t) {
    !!this.renderGroup !== t &&
      (t ? this.enableRenderGroup() : this.disableRenderGroup());
  }
  get isRenderGroup() {
    return !!this.renderGroup;
  }
  enableRenderGroup() {
    if (this.renderGroup) return;
    const t = this.parentRenderGroup;
    t == null || t.removeChild(this),
      (this.renderGroup = Yt.get(th, this)),
      (this.groupTransform = j.IDENTITY),
      t == null || t.addChild(this),
      this._updateIsSimple();
  }
  disableRenderGroup() {
    if (!this.renderGroup) return;
    const t = this.parentRenderGroup;
    t == null || t.removeChild(this),
      Yt.return(this.renderGroup),
      (this.renderGroup = null),
      (this.groupTransform = this.relativeGroupTransform),
      t == null || t.addChild(this),
      this._updateIsSimple();
  }
  _updateIsSimple() {
    this.isSimple = !this.renderGroup && this.effects.length === 0;
  }
  get worldTransform() {
    return (
      this._worldTransform || (this._worldTransform = new j()),
      this.renderGroup
        ? this._worldTransform.copyFrom(this.renderGroup.worldTransform)
        : this.parentRenderGroup &&
          this._worldTransform.appendFrom(
            this.relativeGroupTransform,
            this.parentRenderGroup.worldTransform
          ),
      this._worldTransform
    );
  }
  get x() {
    return this._position.x;
  }
  set x(t) {
    this._position.x = t;
  }
  get y() {
    return this._position.y;
  }
  set y(t) {
    this._position.y = t;
  }
  get position() {
    return this._position;
  }
  set position(t) {
    this._position.copyFrom(t);
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(t) {
    this._rotation !== t && ((this._rotation = t), this._onUpdate(this._skew));
  }
  get angle() {
    return this.rotation * bl;
  }
  set angle(t) {
    this.rotation = t * wl;
  }
  get pivot() {
    return (
      this._pivot === fi && (this._pivot = new _t(this, 0, 0)), this._pivot
    );
  }
  set pivot(t) {
    this._pivot === fi && (this._pivot = new _t(this, 0, 0)),
      typeof t == "number" ? this._pivot.set(t) : this._pivot.copyFrom(t);
  }
  get skew() {
    return this._skew === di && (this._skew = new _t(this, 0, 0)), this._skew;
  }
  set skew(t) {
    this._skew === di && (this._skew = new _t(this, 0, 0)),
      this._skew.copyFrom(t);
  }
  get scale() {
    return (
      this._scale === pi && (this._scale = new _t(this, 1, 1)), this._scale
    );
  }
  set scale(t) {
    this._scale === pi && (this._scale = new _t(this, 0, 0)),
      typeof t == "number" ? this._scale.set(t) : this._scale.copyFrom(t);
  }
  get width() {
    return Math.abs(this.scale.x * this.getLocalBounds().width);
  }
  set width(t) {
    const e = this.getLocalBounds().width;
    this._setWidth(t, e);
  }
  get height() {
    return Math.abs(this.scale.y * this.getLocalBounds().height);
  }
  set height(t) {
    const e = this.getLocalBounds().height;
    this._setHeight(t, e);
  }
  getSize(t) {
    t || (t = {});
    const e = this.getLocalBounds();
    return (
      (t.width = Math.abs(this.scale.x * e.width)),
      (t.height = Math.abs(this.scale.y * e.height)),
      t
    );
  }
  setSize(t, e) {
    const i = this.getLocalBounds();
    typeof t == "object"
      ? ((e = t.height ?? t.width), (t = t.width))
      : e ?? (e = t),
      t !== void 0 && this._setWidth(t, i.width),
      e !== void 0 && this._setHeight(e, i.height);
  }
  _updateSkew() {
    const t = this._rotation,
      e = this._skew;
    (this._cx = Math.cos(t + e._y)),
      (this._sx = Math.sin(t + e._y)),
      (this._cy = -Math.sin(t - e._x)),
      (this._sy = Math.cos(t - e._x));
  }
  updateTransform(t) {
    return (
      this.position.set(
        typeof t.x == "number" ? t.x : this.position.x,
        typeof t.y == "number" ? t.y : this.position.y
      ),
      this.scale.set(
        typeof t.scaleX == "number" ? t.scaleX || 1 : this.scale.x,
        typeof t.scaleY == "number" ? t.scaleY || 1 : this.scale.y
      ),
      (this.rotation =
        typeof t.rotation == "number" ? t.rotation : this.rotation),
      this.skew.set(
        typeof t.skewX == "number" ? t.skewX : this.skew.x,
        typeof t.skewY == "number" ? t.skewY : this.skew.y
      ),
      this.pivot.set(
        typeof t.pivotX == "number" ? t.pivotX : this.pivot.x,
        typeof t.pivotY == "number" ? t.pivotY : this.pivot.y
      ),
      this
    );
  }
  setFromMatrix(t) {
    t.decompose(this);
  }
  updateLocalTransform() {
    const t = this._didContainerChangeTick;
    if (this._didLocalTransformChangeId === t) return;
    this._didLocalTransformChangeId = t;
    const e = this.localTransform,
      i = this._scale,
      n = this._pivot,
      r = this._position,
      a = i._x,
      o = i._y,
      l = n._x,
      h = n._y;
    (e.a = this._cx * a),
      (e.b = this._sx * a),
      (e.c = this._cy * o),
      (e.d = this._sy * o),
      (e.tx = r._x - (l * e.a + h * e.c)),
      (e.ty = r._y - (l * e.b + h * e.d));
  }
  set alpha(t) {
    t !== this.localAlpha &&
      ((this.localAlpha = t), (this._updateFlags |= rr), this._onUpdate());
  }
  get alpha() {
    return this.localAlpha;
  }
  set tint(t) {
    const i = nt.shared.setValue(t ?? 16777215).toBgrNumber();
    i !== this.localColor &&
      ((this.localColor = i), (this._updateFlags |= rr), this._onUpdate());
  }
  get tint() {
    const t = this.localColor;
    return ((t & 255) << 16) + (t & 65280) + ((t >> 16) & 255);
  }
  set blendMode(t) {
    this.localBlendMode !== t &&
      (this.parentRenderGroup &&
        (this.parentRenderGroup.structureDidChange = !0),
      (this._updateFlags |= sh),
      (this.localBlendMode = t),
      this._onUpdate());
  }
  get blendMode() {
    return this.localBlendMode;
  }
  get visible() {
    return !!(this.localDisplayStatus & 2);
  }
  set visible(t) {
    const e = t ? 2 : 0;
    (this.localDisplayStatus & 2) !== e &&
      (this.parentRenderGroup &&
        (this.parentRenderGroup.structureDidChange = !0),
      (this._updateFlags |= mi),
      (this.localDisplayStatus ^= 2),
      this._onUpdate());
  }
  get culled() {
    return !(this.localDisplayStatus & 4);
  }
  set culled(t) {
    const e = t ? 0 : 4;
    (this.localDisplayStatus & 4) !== e &&
      (this.parentRenderGroup &&
        (this.parentRenderGroup.structureDidChange = !0),
      (this._updateFlags |= mi),
      (this.localDisplayStatus ^= 4),
      this._onUpdate());
  }
  get renderable() {
    return !!(this.localDisplayStatus & 1);
  }
  set renderable(t) {
    const e = t ? 1 : 0;
    (this.localDisplayStatus & 1) !== e &&
      ((this._updateFlags |= mi),
      (this.localDisplayStatus ^= 1),
      this.parentRenderGroup &&
        (this.parentRenderGroup.structureDidChange = !0),
      this._onUpdate());
  }
  get isRenderable() {
    return this.localDisplayStatus === 7 && this.groupAlpha > 0;
  }
  destroy(t = !1) {
    var n;
    if (this.destroyed) return;
    this.destroyed = !0;
    let e;
    if (
      (this.children.length &&
        (e = this.removeChildren(0, this.children.length)),
      this.removeFromParent(),
      (this.parent = null),
      (this._maskEffect = null),
      (this._filterEffect = null),
      (this.effects = null),
      (this._position = null),
      (this._scale = null),
      (this._pivot = null),
      (this._skew = null),
      this.emit("destroyed", this),
      this.removeAllListeners(),
      (typeof t == "boolean" ? t : t == null ? void 0 : t.children) && e)
    )
      for (let r = 0; r < e.length; ++r) e[r].destroy(t);
    (n = this.renderGroup) == null || n.destroy(), (this.renderGroup = null);
  }
}
gt.mixin(Wl);
gt.mixin(Ql);
gt.mixin(ql);
gt.mixin(Xl);
gt.mixin(Hl);
gt.mixin(jl);
gt.mixin(Kl);
gt.mixin(Dl);
class La extends gt {
  constructor() {
    super(...arguments),
      (this.canBundle = !0),
      (this.allowChildren = !1),
      (this._roundPixels = 0),
      (this._lastUsed = 0),
      (this._lastInstructionTick = -1),
      (this._bounds = new Wt(0, 1, 0, 0)),
      (this._boundsDirty = !0);
  }
  _updateBounds() {}
  get roundPixels() {
    return !!this._roundPixels;
  }
  set roundPixels(t) {
    this._roundPixels = t ? 1 : 0;
  }
  containsPoint(t) {
    const e = this.bounds,
      { x: i, y: n } = t;
    return i >= e.minX && i <= e.maxX && n >= e.minY && n <= e.maxY;
  }
  onViewUpdate() {
    if ((this._didViewChangeTick++, this.didViewUpdate)) return;
    this.didViewUpdate = !0;
    const t = this.renderGroup || this.parentRenderGroup;
    t && t.onChildViewUpdate(this);
  }
  destroy(t) {
    super.destroy(t), (this._bounds = null);
  }
}
class Ge extends La {
  constructor(t = W.EMPTY) {
    t instanceof W && (t = { texture: t });
    const {
      texture: e = W.EMPTY,
      anchor: i,
      roundPixels: n,
      width: r,
      height: a,
      ...o
    } = t;
    super({ label: "Sprite", ...o }),
      (this.renderPipeId = "sprite"),
      (this.batched = !0),
      (this._sourceBounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }),
      (this._sourceBoundsDirty = !0),
      (this._anchor = new _t({
        _onUpdate: () => {
          this.onViewUpdate();
        },
      })),
      i
        ? (this.anchor = i)
        : e.defaultAnchor && (this.anchor = e.defaultAnchor),
      (this.texture = e),
      (this.allowChildren = !1),
      (this.roundPixels = n ?? !1),
      r !== void 0 && (this.width = r),
      a !== void 0 && (this.height = a);
  }
  static from(t, e = !1) {
    return t instanceof W ? new Ge(t) : new Ge(W.from(t, e));
  }
  set texture(t) {
    t || (t = W.EMPTY);
    const e = this._texture;
    e !== t &&
      (e && e.dynamic && e.off("update", this.onViewUpdate, this),
      t.dynamic && t.on("update", this.onViewUpdate, this),
      (this._texture = t),
      this._width && this._setWidth(this._width, this._texture.orig.width),
      this._height && this._setHeight(this._height, this._texture.orig.height),
      this.onViewUpdate());
  }
  get texture() {
    return this._texture;
  }
  get bounds() {
    return (
      this._boundsDirty && (this._updateBounds(), (this._boundsDirty = !1)),
      this._bounds
    );
  }
  get sourceBounds() {
    return (
      this._sourceBoundsDirty &&
        (this._updateSourceBounds(), (this._sourceBoundsDirty = !1)),
      this._sourceBounds
    );
  }
  containsPoint(t) {
    const e = this.sourceBounds;
    return t.x >= e.maxX && t.x <= e.minX && t.y >= e.maxY && t.y <= e.minY;
  }
  addBounds(t) {
    const e = this._texture.trim ? this.sourceBounds : this.bounds;
    t.addFrame(e.minX, e.minY, e.maxX, e.maxY);
  }
  onViewUpdate() {
    (this._sourceBoundsDirty = this._boundsDirty = !0), super.onViewUpdate();
  }
  _updateBounds() {
    El(this._bounds, this._anchor, this._texture, 0);
  }
  _updateSourceBounds() {
    const t = this._anchor,
      e = this._texture,
      i = this._sourceBounds,
      { width: n, height: r } = e.orig;
    (i.maxX = -t._x * n),
      (i.minX = i.maxX + n),
      (i.maxY = -t._y * r),
      (i.minY = i.maxY + r);
  }
  destroy(t = !1) {
    if (
      (super.destroy(t),
      typeof t == "boolean" ? t : t == null ? void 0 : t.texture)
    ) {
      const i =
        typeof t == "boolean" ? t : t == null ? void 0 : t.textureSource;
      this._texture.destroy(i);
    }
    (this._texture = null),
      (this._bounds = null),
      (this._sourceBounds = null),
      (this._anchor = null);
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(t) {
    typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t);
  }
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(t) {
    this._setWidth(t, this._texture.orig.width), (this._width = t);
  }
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(t) {
    this._setHeight(t, this._texture.orig.height), (this._height = t);
  }
  getSize(t) {
    return (
      t || (t = {}),
      (t.width = Math.abs(this.scale.x) * this._texture.orig.width),
      (t.height = Math.abs(this.scale.y) * this._texture.orig.height),
      t
    );
  }
  setSize(t, e) {
    typeof t == "object"
      ? ((e = t.height ?? t.width), (t = t.width))
      : e ?? (e = t),
      t !== void 0 && this._setWidth(t, this._texture.orig.width),
      e !== void 0 && this._setHeight(e, this._texture.orig.height);
  }
}
const ih = new Wt();
function $a(s, t, e) {
  const i = ih;
  (s.measurable = !0), Ta(s, e, i), t.addBoundsMask(i), (s.measurable = !1);
}
function Ga(s, t, e) {
  const i = $e.get();
  s.measurable = !0;
  const n = Xt.get().identity(),
    r = Oa(s, e, n);
  Ia(s, i, r),
    (s.measurable = !1),
    t.addBoundsMask(i),
    Xt.return(n),
    $e.return(i);
}
function Oa(s, t, e) {
  return s
    ? (s !== t &&
        (Oa(s.parent, t, e),
        s.updateLocalTransform(),
        e.append(s.localTransform)),
      e)
    : (rt("Mask bounds, renderable is not inside the root container"), e);
}
class za {
  constructor(t) {
    (this.priority = 0),
      (this.inverse = !1),
      (this.pipe = "alphaMask"),
      t != null && t.mask && this.init(t.mask);
  }
  init(t) {
    (this.mask = t),
      (this.renderMaskToTexture = !(t instanceof Ge)),
      (this.mask.renderable = this.renderMaskToTexture),
      (this.mask.includeInBuild = !this.renderMaskToTexture),
      (this.mask.measurable = !1);
  }
  reset() {
    (this.mask.measurable = !0), (this.mask = null);
  }
  addBounds(t, e) {
    this.inverse || $a(this.mask, t, e);
  }
  addLocalBounds(t, e) {
    Ga(this.mask, t, e);
  }
  containsPoint(t, e) {
    const i = this.mask;
    return e(i, t);
  }
  destroy() {
    this.reset();
  }
  static test(t) {
    return t instanceof Ge;
  }
}
za.extension = L.MaskEffect;
class Da {
  constructor(t) {
    (this.priority = 0),
      (this.pipe = "colorMask"),
      t != null && t.mask && this.init(t.mask);
  }
  init(t) {
    this.mask = t;
  }
  destroy() {}
  static test(t) {
    return typeof t == "number";
  }
}
Da.extension = L.MaskEffect;
class Ua {
  constructor(t) {
    (this.priority = 0),
      (this.pipe = "stencilMask"),
      t != null && t.mask && this.init(t.mask);
  }
  init(t) {
    (this.mask = t),
      (this.mask.includeInBuild = !1),
      (this.mask.measurable = !1);
  }
  reset() {
    (this.mask.measurable = !0),
      (this.mask.includeInBuild = !0),
      (this.mask = null);
  }
  addBounds(t, e) {
    $a(this.mask, t, e);
  }
  addLocalBounds(t, e) {
    Ga(this.mask, t, e);
  }
  containsPoint(t, e) {
    const i = this.mask;
    return e(i, t);
  }
  destroy() {
    this.reset();
  }
  static test(t) {
    return t instanceof gt;
  }
}
Ua.extension = L.MaskEffect;
const nh = {
  createCanvas: (s, t) => {
    const e = document.createElement("canvas");
    return (e.width = s), (e.height = t), e;
  },
  getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
  getWebGLRenderingContext: () => WebGLRenderingContext,
  getNavigator: () => navigator,
  getBaseUrl: () => document.baseURI ?? window.location.href,
  getFontFaceSet: () => document.fonts,
  fetch: (s, t) => fetch(s, t),
  parseXML: (s) => new DOMParser().parseFromString(s, "text/xml"),
};
let ar = nh;
const tt = {
  get() {
    return ar;
  },
  set(s) {
    ar = s;
  },
};
class Na extends Zt {
  constructor(t) {
    t.resource || (t.resource = tt.get().createCanvas()),
      t.width ||
        ((t.width = t.resource.width),
        t.autoDensity || (t.width /= t.resolution)),
      t.height ||
        ((t.height = t.resource.height),
        t.autoDensity || (t.height /= t.resolution)),
      super(t),
      (this.uploadMethodId = "image"),
      (this.autoDensity = t.autoDensity);
    const e = t.resource;
    (this.pixelWidth !== e.width || this.pixelWidth !== e.height) &&
      this.resizeCanvas(),
      (this.transparent = !!t.transparent);
  }
  resizeCanvas() {
    this.autoDensity &&
      ((this.resource.style.width = `${this.width}px`),
      (this.resource.style.height = `${this.height}px`)),
      (this.resource.width !== this.pixelWidth ||
        this.resource.height !== this.pixelHeight) &&
        ((this.resource.width = this.pixelWidth),
        (this.resource.height = this.pixelHeight));
  }
  resize(t = this.width, e = this.height, i = this._resolution) {
    const n = super.resize(t, e, i);
    return n && this.resizeCanvas(), n;
  }
  static test(t) {
    return (
      (globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement) ||
      (globalThis.OffscreenCanvas && t instanceof OffscreenCanvas)
    );
  }
  get context2D() {
    return (
      this._context2D || (this._context2D = this.resource.getContext("2d"))
    );
  }
}
Na.extension = L.TextureSource;
class Ne extends Zt {
  constructor(t) {
    if (
      t.resource &&
      globalThis.HTMLImageElement &&
      t.resource instanceof HTMLImageElement
    ) {
      const e = tt.get().createCanvas(t.resource.width, t.resource.height);
      e
        .getContext("2d")
        .drawImage(t.resource, 0, 0, t.resource.width, t.resource.height),
        (t.resource = e),
        rt(
          "ImageSource: Image element passed, converting to canvas. Use CanvasSource instead."
        );
    }
    super(t), (this.uploadMethodId = "image"), (this.autoGarbageCollect = !0);
  }
  static test(t) {
    return (
      (globalThis.HTMLImageElement && t instanceof HTMLImageElement) ||
      (typeof ImageBitmap < "u" && t instanceof ImageBitmap) ||
      (globalThis.VideoFrame && t instanceof VideoFrame)
    );
  }
}
Ne.extension = L.TextureSource;
var Wi = ((s) => (
  (s[(s.INTERACTION = 50)] = "INTERACTION"),
  (s[(s.HIGH = 25)] = "HIGH"),
  (s[(s.NORMAL = 0)] = "NORMAL"),
  (s[(s.LOW = -25)] = "LOW"),
  (s[(s.UTILITY = -50)] = "UTILITY"),
  s
))(Wi || {});
class gi {
  constructor(t, e = null, i = 0, n = !1) {
    (this.next = null),
      (this.previous = null),
      (this._destroyed = !1),
      (this._fn = t),
      (this._context = e),
      (this.priority = i),
      (this._once = n);
  }
  match(t, e = null) {
    return this._fn === t && this._context === e;
  }
  emit(t) {
    this._fn && (this._context ? this._fn.call(this._context, t) : this._fn(t));
    const e = this.next;
    return (
      this._once && this.destroy(!0), this._destroyed && (this.next = null), e
    );
  }
  connect(t) {
    (this.previous = t),
      t.next && (t.next.previous = this),
      (this.next = t.next),
      (t.next = this);
  }
  destroy(t = !1) {
    (this._destroyed = !0),
      (this._fn = null),
      (this._context = null),
      this.previous && (this.previous.next = this.next),
      this.next && (this.next.previous = this.previous);
    const e = this.next;
    return (this.next = t ? null : e), (this.previous = null), e;
  }
}
const Wa = class bt {
  constructor() {
    (this.autoStart = !1),
      (this.deltaTime = 1),
      (this.lastTime = -1),
      (this.speed = 1),
      (this.started = !1),
      (this._requestId = null),
      (this._maxElapsedMS = 100),
      (this._minElapsedMS = 0),
      (this._protected = !1),
      (this._lastFrame = -1),
      (this._head = new gi(null, null, 1 / 0)),
      (this.deltaMS = 1 / bt.targetFPMS),
      (this.elapsedMS = 1 / bt.targetFPMS),
      (this._tick = (t) => {
        (this._requestId = null),
          this.started &&
            (this.update(t),
            this.started &&
              this._requestId === null &&
              this._head.next &&
              (this._requestId = requestAnimationFrame(this._tick)));
      });
  }
  _requestIfNeeded() {
    this._requestId === null &&
      this._head.next &&
      ((this.lastTime = performance.now()),
      (this._lastFrame = this.lastTime),
      (this._requestId = requestAnimationFrame(this._tick)));
  }
  _cancelIfNeeded() {
    this._requestId !== null &&
      (cancelAnimationFrame(this._requestId), (this._requestId = null));
  }
  _startIfPossible() {
    this.started ? this._requestIfNeeded() : this.autoStart && this.start();
  }
  add(t, e, i = Wi.NORMAL) {
    return this._addListener(new gi(t, e, i));
  }
  addOnce(t, e, i = Wi.NORMAL) {
    return this._addListener(new gi(t, e, i, !0));
  }
  _addListener(t) {
    let e = this._head.next,
      i = this._head;
    if (!e) t.connect(i);
    else {
      for (; e; ) {
        if (t.priority > e.priority) {
          t.connect(i);
          break;
        }
        (i = e), (e = e.next);
      }
      t.previous || t.connect(i);
    }
    return this._startIfPossible(), this;
  }
  remove(t, e) {
    let i = this._head.next;
    for (; i; ) i.match(t, e) ? (i = i.destroy()) : (i = i.next);
    return this._head.next || this._cancelIfNeeded(), this;
  }
  get count() {
    if (!this._head) return 0;
    let t = 0,
      e = this._head;
    for (; (e = e.next); ) t++;
    return t;
  }
  start() {
    this.started || ((this.started = !0), this._requestIfNeeded());
  }
  stop() {
    this.started && ((this.started = !1), this._cancelIfNeeded());
  }
  destroy() {
    if (!this._protected) {
      this.stop();
      let t = this._head.next;
      for (; t; ) t = t.destroy(!0);
      this._head.destroy(), (this._head = null);
    }
  }
  update(t = performance.now()) {
    let e;
    if (t > this.lastTime) {
      if (
        ((e = this.elapsedMS = t - this.lastTime),
        e > this._maxElapsedMS && (e = this._maxElapsedMS),
        (e *= this.speed),
        this._minElapsedMS)
      ) {
        const r = (t - this._lastFrame) | 0;
        if (r < this._minElapsedMS) return;
        this._lastFrame = t - (r % this._minElapsedMS);
      }
      (this.deltaMS = e), (this.deltaTime = this.deltaMS * bt.targetFPMS);
      const i = this._head;
      let n = i.next;
      for (; n; ) n = n.emit(this);
      i.next || this._cancelIfNeeded();
    } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
    this.lastTime = t;
  }
  get FPS() {
    return 1e3 / this.elapsedMS;
  }
  get minFPS() {
    return 1e3 / this._maxElapsedMS;
  }
  set minFPS(t) {
    const e = Math.min(this.maxFPS, t),
      i = Math.min(Math.max(0, e) / 1e3, bt.targetFPMS);
    this._maxElapsedMS = 1 / i;
  }
  get maxFPS() {
    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
  }
  set maxFPS(t) {
    if (t === 0) this._minElapsedMS = 0;
    else {
      const e = Math.max(this.minFPS, t);
      this._minElapsedMS = 1 / (e / 1e3);
    }
  }
  static get shared() {
    if (!bt._shared) {
      const t = (bt._shared = new bt());
      (t.autoStart = !0), (t._protected = !0);
    }
    return bt._shared;
  }
  static get system() {
    if (!bt._system) {
      const t = (bt._system = new bt());
      (t.autoStart = !0), (t._protected = !0);
    }
    return bt._system;
  }
};
Wa.targetFPMS = 0.06;
let Ss = Wa,
  _i;
async function Va() {
  return (
    _i ??
      (_i = (async () => {
        var a;
        const t = document.createElement("canvas").getContext("webgl");
        if (!t) return "premultiply-alpha-on-upload";
        const e = await new Promise((o) => {
          const l = document.createElement("video");
          (l.onloadeddata = () => o(l)),
            (l.onerror = () => o(null)),
            (l.autoplay = !1),
            (l.crossOrigin = "anonymous"),
            (l.preload = "auto"),
            (l.src =
              "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM="),
            l.load();
        });
        if (!e) return "premultiply-alpha-on-upload";
        const i = t.createTexture();
        t.bindTexture(t.TEXTURE_2D, i);
        const n = t.createFramebuffer();
        t.bindFramebuffer(t.FRAMEBUFFER, n),
          t.framebufferTexture2D(
            t.FRAMEBUFFER,
            t.COLOR_ATTACHMENT0,
            t.TEXTURE_2D,
            i,
            0
          ),
          t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
          t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE),
          t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);
        const r = new Uint8Array(4);
        return (
          t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, r),
          t.deleteFramebuffer(n),
          t.deleteTexture(i),
          (a = t.getExtension("WEBGL_lose_context")) == null || a.loseContext(),
          r[0] <= r[3] ? "premultiplied-alpha" : "premultiply-alpha-on-upload"
        );
      })()),
    _i
  );
}
const qs = class Ha extends Zt {
  constructor(t) {
    super(t),
      (this.isReady = !1),
      (this.uploadMethodId = "video"),
      (t = { ...Ha.defaultOptions, ...t }),
      (this._autoUpdate = !0),
      (this._isConnectedToTicker = !1),
      (this._updateFPS = t.updateFPS || 0),
      (this._msToNextUpdate = 0),
      (this.autoPlay = t.autoPlay !== !1),
      (this.alphaMode = t.alphaMode ?? "premultiply-alpha-on-upload"),
      (this._videoFrameRequestCallback =
        this._videoFrameRequestCallback.bind(this)),
      (this._videoFrameRequestCallbackHandle = null),
      (this._load = null),
      (this._resolve = null),
      (this._reject = null),
      (this._onCanPlay = this._onCanPlay.bind(this)),
      (this._onCanPlayThrough = this._onCanPlayThrough.bind(this)),
      (this._onError = this._onError.bind(this)),
      (this._onPlayStart = this._onPlayStart.bind(this)),
      (this._onPlayStop = this._onPlayStop.bind(this)),
      (this._onSeeked = this._onSeeked.bind(this)),
      t.autoLoad !== !1 && this.load();
  }
  updateFrame() {
    if (!this.destroyed) {
      if (this._updateFPS) {
        const t = Ss.shared.elapsedMS * this.resource.playbackRate;
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - t);
      }
      (!this._updateFPS || this._msToNextUpdate <= 0) &&
        (this._msToNextUpdate = this._updateFPS
          ? Math.floor(1e3 / this._updateFPS)
          : 0),
        this.isValid && this.update();
    }
  }
  _videoFrameRequestCallback() {
    this.updateFrame(),
      this.destroyed
        ? (this._videoFrameRequestCallbackHandle = null)
        : (this._videoFrameRequestCallbackHandle =
            this.resource.requestVideoFrameCallback(
              this._videoFrameRequestCallback
            ));
  }
  get isValid() {
    return !!this.resource.videoWidth && !!this.resource.videoHeight;
  }
  async load() {
    if (this._load) return this._load;
    const t = this.resource,
      e = this.options;
    return (
      (t.readyState === t.HAVE_ENOUGH_DATA ||
        t.readyState === t.HAVE_FUTURE_DATA) &&
        t.width &&
        t.height &&
        (t.complete = !0),
      t.addEventListener("play", this._onPlayStart),
      t.addEventListener("pause", this._onPlayStop),
      t.addEventListener("seeked", this._onSeeked),
      this._isSourceReady()
        ? this._mediaReady()
        : (e.preload || t.addEventListener("canplay", this._onCanPlay),
          t.addEventListener("canplaythrough", this._onCanPlayThrough),
          t.addEventListener("error", this._onError, !0)),
      (this.alphaMode = await Va()),
      (this._load = new Promise((i, n) => {
        this.isValid
          ? i(this)
          : ((this._resolve = i),
            (this._reject = n),
            e.preloadTimeoutMs !== void 0 &&
              (this._preloadTimeout = setTimeout(() => {
                this._onError(
                  new ErrorEvent(
                    `Preload exceeded timeout of ${e.preloadTimeoutMs}ms`
                  )
                );
              })),
            t.load());
      })),
      this._load
    );
  }
  _onError(t) {
    this.resource.removeEventListener("error", this._onError, !0),
      this.emit("error", t),
      this._reject &&
        (this._reject(t), (this._reject = null), (this._resolve = null));
  }
  _isSourcePlaying() {
    const t = this.resource;
    return !t.paused && !t.ended;
  }
  _isSourceReady() {
    return this.resource.readyState > 2;
  }
  _onPlayStart() {
    this.isValid || this._mediaReady(), this._configureAutoUpdate();
  }
  _onPlayStop() {
    this._configureAutoUpdate();
  }
  _onSeeked() {
    this._autoUpdate &&
      !this._isSourcePlaying() &&
      ((this._msToNextUpdate = 0),
      this.updateFrame(),
      (this._msToNextUpdate = 0));
  }
  _onCanPlay() {
    this.resource.removeEventListener("canplay", this._onCanPlay),
      this._mediaReady();
  }
  _onCanPlayThrough() {
    this.resource.removeEventListener("canplaythrough", this._onCanPlay),
      this._preloadTimeout &&
        (clearTimeout(this._preloadTimeout), (this._preloadTimeout = void 0)),
      this._mediaReady();
  }
  _mediaReady() {
    const t = this.resource;
    this.isValid &&
      ((this.isReady = !0), this.resize(t.videoWidth, t.videoHeight)),
      (this._msToNextUpdate = 0),
      this.updateFrame(),
      (this._msToNextUpdate = 0),
      this._resolve &&
        (this._resolve(this), (this._resolve = null), (this._reject = null)),
      this._isSourcePlaying()
        ? this._onPlayStart()
        : this.autoPlay && this.resource.play();
  }
  destroy() {
    this._configureAutoUpdate();
    const t = this.resource;
    t &&
      (t.removeEventListener("play", this._onPlayStart),
      t.removeEventListener("pause", this._onPlayStop),
      t.removeEventListener("seeked", this._onSeeked),
      t.removeEventListener("canplay", this._onCanPlay),
      t.removeEventListener("canplaythrough", this._onCanPlayThrough),
      t.removeEventListener("error", this._onError, !0),
      t.pause(),
      (t.src = ""),
      t.load()),
      super.destroy();
  }
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(t) {
    t !== this._autoUpdate &&
      ((this._autoUpdate = t), this._configureAutoUpdate());
  }
  get updateFPS() {
    return this._updateFPS;
  }
  set updateFPS(t) {
    t !== this._updateFPS &&
      ((this._updateFPS = t), this._configureAutoUpdate());
  }
  _configureAutoUpdate() {
    this._autoUpdate && this._isSourcePlaying()
      ? !this._updateFPS && this.resource.requestVideoFrameCallback
        ? (this._isConnectedToTicker &&
            (Ss.shared.remove(this.updateFrame, this),
            (this._isConnectedToTicker = !1),
            (this._msToNextUpdate = 0)),
          this._videoFrameRequestCallbackHandle === null &&
            (this._videoFrameRequestCallbackHandle =
              this.resource.requestVideoFrameCallback(
                this._videoFrameRequestCallback
              )))
        : (this._videoFrameRequestCallbackHandle !== null &&
            (this.resource.cancelVideoFrameCallback(
              this._videoFrameRequestCallbackHandle
            ),
            (this._videoFrameRequestCallbackHandle = null)),
          this._isConnectedToTicker ||
            (Ss.shared.add(this.updateFrame, this),
            (this._isConnectedToTicker = !0),
            (this._msToNextUpdate = 0)))
      : (this._videoFrameRequestCallbackHandle !== null &&
          (this.resource.cancelVideoFrameCallback(
            this._videoFrameRequestCallbackHandle
          ),
          (this._videoFrameRequestCallbackHandle = null)),
        this._isConnectedToTicker &&
          (Ss.shared.remove(this.updateFrame, this),
          (this._isConnectedToTicker = !1),
          (this._msToNextUpdate = 0)));
  }
  static test(t) {
    return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement;
  }
};
qs.extension = L.TextureSource;
qs.defaultOptions = {
  ...Zt.defaultOptions,
  autoLoad: !0,
  autoPlay: !0,
  updateFPS: 0,
  crossorigin: !0,
  loop: !1,
  muted: !0,
  playsinline: !0,
  preload: !1,
};
qs.MIME_TYPES = { ogv: "video/ogg", mov: "video/quicktime", m4v: "video/mp4" };
let Rs = qs;
const It = (s, t, e = !1) => (
  Array.isArray(s) || (s = [s]),
  t ? s.map((i) => (typeof i == "string" || e ? t(i) : i)) : s
);
class rh {
  constructor() {
    (this._parsers = []),
      (this._cache = new Map()),
      (this._cacheMap = new Map());
  }
  reset() {
    this._cacheMap.clear(), this._cache.clear();
  }
  has(t) {
    return this._cache.has(t);
  }
  get(t) {
    const e = this._cache.get(t);
    return e || rt(`[Assets] Asset id ${t} was not found in the Cache`), e;
  }
  set(t, e) {
    const i = It(t);
    let n;
    for (let l = 0; l < this.parsers.length; l++) {
      const h = this.parsers[l];
      if (h.test(e)) {
        n = h.getCacheableAssets(i, e);
        break;
      }
    }
    const r = new Map(Object.entries(n || {}));
    n ||
      i.forEach((l) => {
        r.set(l, e);
      });
    const a = [...r.keys()],
      o = { cacheKeys: a, keys: i };
    i.forEach((l) => {
      this._cacheMap.set(l, o);
    }),
      a.forEach((l) => {
        const h = n ? n[l] : e;
        this._cache.has(l) &&
          this._cache.get(l) !== h &&
          rt("[Cache] already has key:", l),
          this._cache.set(l, r.get(l));
      });
  }
  remove(t) {
    if (!this._cacheMap.has(t)) {
      rt(`[Assets] Asset id ${t} was not found in the Cache`);
      return;
    }
    const e = this._cacheMap.get(t);
    e.cacheKeys.forEach((n) => {
      this._cache.delete(n);
    }),
      e.keys.forEach((n) => {
        this._cacheMap.delete(n);
      });
  }
  get parsers() {
    return this._parsers;
  }
}
const J = new rh(),
  Vi = [];
mt.handleByList(L.TextureSource, Vi);
function ja(s = {}) {
  const t = s && s.resource,
    e = t ? s.resource : s,
    i = t ? s : { resource: s };
  for (let n = 0; n < Vi.length; n++) {
    const r = Vi[n];
    if (r.test(e)) return new r(i);
  }
  throw new Error(`Could not find a source type for resource: ${i.resource}`);
}
function ah(s = {}, t = !1) {
  const e = s && s.resource,
    i = e ? s.resource : s,
    n = e ? s : { resource: s };
  if (!t && J.has(i)) return J.get(i);
  const r = new W({ source: ja(n) });
  return (
    r.on("destroy", () => {
      J.has(i) && J.remove(i);
    }),
    t || J.set(i, r),
    r
  );
}
function oh(s, t = !1) {
  return typeof s == "string"
    ? J.get(s)
    : s instanceof Zt
    ? new W({ source: s })
    : ah(s, t);
}
W.from = oh;
Zt.from = ja;
mt.add(za, Da, Ua, Rs, Ne, Na, _n);
var ee = ((s) => (
  (s[(s.Low = 0)] = "Low"),
  (s[(s.Normal = 1)] = "Normal"),
  (s[(s.High = 2)] = "High"),
  s
))(ee || {});
function Tt(s) {
  if (typeof s != "string")
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(s)}`);
}
function qe(s) {
  return s.split("?")[0].split("#")[0];
}
function lh(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function hh(s, t, e) {
  return s.replace(new RegExp(lh(t), "g"), e);
}
function ch(s, t) {
  let e = "",
    i = 0,
    n = -1,
    r = 0,
    a = -1;
  for (let o = 0; o <= s.length; ++o) {
    if (o < s.length) a = s.charCodeAt(o);
    else {
      if (a === 47) break;
      a = 47;
    }
    if (a === 47) {
      if (!(n === o - 1 || r === 1))
        if (n !== o - 1 && r === 2) {
          if (
            e.length < 2 ||
            i !== 2 ||
            e.charCodeAt(e.length - 1) !== 46 ||
            e.charCodeAt(e.length - 2) !== 46
          ) {
            if (e.length > 2) {
              const l = e.lastIndexOf("/");
              if (l !== e.length - 1) {
                l === -1
                  ? ((e = ""), (i = 0))
                  : ((e = e.slice(0, l)),
                    (i = e.length - 1 - e.lastIndexOf("/"))),
                  (n = o),
                  (r = 0);
                continue;
              }
            } else if (e.length === 2 || e.length === 1) {
              (e = ""), (i = 0), (n = o), (r = 0);
              continue;
            }
          }
        } else
          e.length > 0
            ? (e += `/${s.slice(n + 1, o)}`)
            : (e = s.slice(n + 1, o)),
            (i = o - n - 1);
      (n = o), (r = 0);
    } else a === 46 && r !== -1 ? ++r : (r = -1);
  }
  return e;
}
const wt = {
  toPosix(s) {
    return hh(s, "\\", "/");
  },
  isUrl(s) {
    return /^https?:/.test(this.toPosix(s));
  },
  isDataUrl(s) {
    return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(
      s
    );
  },
  isBlobUrl(s) {
    return s.startsWith("blob:");
  },
  hasProtocol(s) {
    return /^[^/:]+:/.test(this.toPosix(s));
  },
  getProtocol(s) {
    Tt(s), (s = this.toPosix(s));
    const t = /^file:\/\/\//.exec(s);
    if (t) return t[0];
    const e = /^[^/:]+:\/{0,2}/.exec(s);
    return e ? e[0] : "";
  },
  toAbsolute(s, t, e) {
    if ((Tt(s), this.isDataUrl(s) || this.isBlobUrl(s))) return s;
    const i = qe(this.toPosix(t ?? tt.get().getBaseUrl())),
      n = qe(this.toPosix(e ?? this.rootname(i)));
    return (
      (s = this.toPosix(s)),
      s.startsWith("/")
        ? wt.join(n, s.slice(1))
        : this.isAbsolute(s)
        ? s
        : this.join(i, s)
    );
  },
  normalize(s) {
    if ((Tt(s), s.length === 0)) return ".";
    if (this.isDataUrl(s) || this.isBlobUrl(s)) return s;
    s = this.toPosix(s);
    let t = "";
    const e = s.startsWith("/");
    this.hasProtocol(s) && ((t = this.rootname(s)), (s = s.slice(t.length)));
    const i = s.endsWith("/");
    return (s = ch(s)), s.length > 0 && i && (s += "/"), e ? `/${s}` : t + s;
  },
  isAbsolute(s) {
    return (
      Tt(s), (s = this.toPosix(s)), this.hasProtocol(s) ? !0 : s.startsWith("/")
    );
  },
  join(...s) {
    if (s.length === 0) return ".";
    let t;
    for (let e = 0; e < s.length; ++e) {
      const i = s[e];
      if ((Tt(i), i.length > 0))
        if (t === void 0) t = i;
        else {
          const n = s[e - 1] ?? "";
          this.joinExtensions.includes(this.extname(n).toLowerCase())
            ? (t += `/../${i}`)
            : (t += `/${i}`);
        }
    }
    return t === void 0 ? "." : this.normalize(t);
  },
  dirname(s) {
    if ((Tt(s), s.length === 0)) return ".";
    s = this.toPosix(s);
    let t = s.charCodeAt(0);
    const e = t === 47;
    let i = -1,
      n = !0;
    const r = this.getProtocol(s),
      a = s;
    s = s.slice(r.length);
    for (let o = s.length - 1; o >= 1; --o)
      if (((t = s.charCodeAt(o)), t === 47)) {
        if (!n) {
          i = o;
          break;
        }
      } else n = !1;
    return i === -1
      ? e
        ? "/"
        : this.isUrl(a)
        ? r + s
        : r
      : e && i === 1
      ? "//"
      : r + s.slice(0, i);
  },
  rootname(s) {
    Tt(s), (s = this.toPosix(s));
    let t = "";
    if (
      (s.startsWith("/") ? (t = "/") : (t = this.getProtocol(s)), this.isUrl(s))
    ) {
      const e = s.indexOf("/", t.length);
      e !== -1 ? (t = s.slice(0, e)) : (t = s), t.endsWith("/") || (t += "/");
    }
    return t;
  },
  basename(s, t) {
    Tt(s), t && Tt(t), (s = qe(this.toPosix(s)));
    let e = 0,
      i = -1,
      n = !0,
      r;
    if (t !== void 0 && t.length > 0 && t.length <= s.length) {
      if (t.length === s.length && t === s) return "";
      let a = t.length - 1,
        o = -1;
      for (r = s.length - 1; r >= 0; --r) {
        const l = s.charCodeAt(r);
        if (l === 47) {
          if (!n) {
            e = r + 1;
            break;
          }
        } else
          o === -1 && ((n = !1), (o = r + 1)),
            a >= 0 &&
              (l === t.charCodeAt(a)
                ? --a === -1 && (i = r)
                : ((a = -1), (i = o)));
      }
      return e === i ? (i = o) : i === -1 && (i = s.length), s.slice(e, i);
    }
    for (r = s.length - 1; r >= 0; --r)
      if (s.charCodeAt(r) === 47) {
        if (!n) {
          e = r + 1;
          break;
        }
      } else i === -1 && ((n = !1), (i = r + 1));
    return i === -1 ? "" : s.slice(e, i);
  },
  extname(s) {
    Tt(s), (s = qe(this.toPosix(s)));
    let t = -1,
      e = 0,
      i = -1,
      n = !0,
      r = 0;
    for (let a = s.length - 1; a >= 0; --a) {
      const o = s.charCodeAt(a);
      if (o === 47) {
        if (!n) {
          e = a + 1;
          break;
        }
        continue;
      }
      i === -1 && ((n = !1), (i = a + 1)),
        o === 46
          ? t === -1
            ? (t = a)
            : r !== 1 && (r = 1)
          : t !== -1 && (r = -1);
    }
    return t === -1 ||
      i === -1 ||
      r === 0 ||
      (r === 1 && t === i - 1 && t === e + 1)
      ? ""
      : s.slice(t, i);
  },
  parse(s) {
    Tt(s);
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (s.length === 0) return t;
    s = qe(this.toPosix(s));
    let e = s.charCodeAt(0);
    const i = this.isAbsolute(s);
    let n;
    (t.root = this.rootname(s)), i || this.hasProtocol(s) ? (n = 1) : (n = 0);
    let r = -1,
      a = 0,
      o = -1,
      l = !0,
      h = s.length - 1,
      c = 0;
    for (; h >= n; --h) {
      if (((e = s.charCodeAt(h)), e === 47)) {
        if (!l) {
          a = h + 1;
          break;
        }
        continue;
      }
      o === -1 && ((l = !1), (o = h + 1)),
        e === 46
          ? r === -1
            ? (r = h)
            : c !== 1 && (c = 1)
          : r !== -1 && (c = -1);
    }
    return (
      r === -1 || o === -1 || c === 0 || (c === 1 && r === o - 1 && r === a + 1)
        ? o !== -1 &&
          (a === 0 && i
            ? (t.base = t.name = s.slice(1, o))
            : (t.base = t.name = s.slice(a, o)))
        : (a === 0 && i
            ? ((t.name = s.slice(1, r)), (t.base = s.slice(1, o)))
            : ((t.name = s.slice(a, r)), (t.base = s.slice(a, o))),
          (t.ext = s.slice(r, o))),
      (t.dir = this.dirname(s)),
      t
    );
  },
  sep: "/",
  delimiter: ":",
  joinExtensions: [".html"],
};
function Ya(s, t, e, i, n) {
  const r = t[e];
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    e < t.length - 1
      ? Ya(s.replace(i[e], o), t, e + 1, i, n)
      : n.push(s.replace(i[e], o));
  }
}
function uh(s) {
  const t = /\{(.*?)\}/g,
    e = s.match(t),
    i = [];
  if (e) {
    const n = [];
    e.forEach((r) => {
      const a = r.substring(1, r.length - 1).split(",");
      n.push(a);
    }),
      Ya(s, n, 0, e, i);
  } else i.push(s);
  return i;
}
const Ws = (s) => !Array.isArray(s);
class We {
  constructor() {
    (this._defaultBundleIdentifierOptions = {
      connector: "-",
      createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`,
      extractAssetIdFromBundle: (t, e) =>
        e.replace(`${t}${this._bundleIdConnector}`, ""),
    }),
      (this._bundleIdConnector =
        this._defaultBundleIdentifierOptions.connector),
      (this._createBundleAssetId =
        this._defaultBundleIdentifierOptions.createBundleAssetId),
      (this._extractAssetIdFromBundle =
        this._defaultBundleIdentifierOptions.extractAssetIdFromBundle),
      (this._assetMap = {}),
      (this._preferredOrder = []),
      (this._parsers = []),
      (this._resolverHash = {}),
      (this._bundles = {});
  }
  setBundleIdentifier(t) {
    if (
      ((this._bundleIdConnector = t.connector ?? this._bundleIdConnector),
      (this._createBundleAssetId =
        t.createBundleAssetId ?? this._createBundleAssetId),
      (this._extractAssetIdFromBundle =
        t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle),
      this._extractAssetIdFromBundle(
        "foo",
        this._createBundleAssetId("foo", "bar")
      ) !== "bar")
    )
      throw new Error(
        "[Resolver] GenerateBundleAssetId are not working correctly"
      );
  }
  prefer(...t) {
    t.forEach((e) => {
      this._preferredOrder.push(e),
        e.priority || (e.priority = Object.keys(e.params));
    }),
      (this._resolverHash = {});
  }
  set basePath(t) {
    this._basePath = t;
  }
  get basePath() {
    return this._basePath;
  }
  set rootPath(t) {
    this._rootPath = t;
  }
  get rootPath() {
    return this._rootPath;
  }
  get parsers() {
    return this._parsers;
  }
  reset() {
    this.setBundleIdentifier(this._defaultBundleIdentifierOptions),
      (this._assetMap = {}),
      (this._preferredOrder = []),
      (this._resolverHash = {}),
      (this._rootPath = null),
      (this._basePath = null),
      (this._manifest = null),
      (this._bundles = {}),
      (this._defaultSearchParams = null);
  }
  setDefaultSearchParams(t) {
    if (typeof t == "string") this._defaultSearchParams = t;
    else {
      const e = t;
      this._defaultSearchParams = Object.keys(e)
        .map((i) => `${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`)
        .join("&");
    }
  }
  getAlias(t) {
    const { alias: e, src: i } = t;
    return It(
      e || i,
      (r) =>
        typeof r == "string"
          ? r
          : Array.isArray(r)
          ? r.map((a) => (a == null ? void 0 : a.src) ?? a)
          : r != null && r.src
          ? r.src
          : r,
      !0
    );
  }
  addManifest(t) {
    this._manifest &&
      rt("[Resolver] Manifest already exists, this will be overwritten"),
      (this._manifest = t),
      t.bundles.forEach((e) => {
        this.addBundle(e.name, e.assets);
      });
  }
  addBundle(t, e) {
    const i = [];
    let n = e;
    Array.isArray(e) ||
      (n = Object.entries(e).map(([r, a]) =>
        typeof a == "string" || Array.isArray(a)
          ? { alias: r, src: a }
          : { alias: r, ...a }
      )),
      n.forEach((r) => {
        const a = r.src,
          o = r.alias;
        let l;
        if (typeof o == "string") {
          const h = this._createBundleAssetId(t, o);
          i.push(h), (l = [o, h]);
        } else {
          const h = o.map((c) => this._createBundleAssetId(t, c));
          i.push(...h), (l = [...o, ...h]);
        }
        this.add({ ...r, alias: l, src: a });
      }),
      (this._bundles[t] = i);
  }
  add(t) {
    const e = [];
    Array.isArray(t) ? e.push(...t) : e.push(t);
    let i;
    (i = (r) => {
      this.hasKey(r) && rt(`[Resolver] already has key: ${r} overwriting`);
    }),
      It(e).forEach((r) => {
        const { src: a } = r;
        let { data: o, format: l, loadParser: h } = r;
        const c = It(a).map((f) =>
            typeof f == "string" ? uh(f) : Array.isArray(f) ? f : [f]
          ),
          u = this.getAlias(r);
        Array.isArray(u) ? u.forEach(i) : i(u);
        const d = [];
        c.forEach((f) => {
          f.forEach((p) => {
            let g = {};
            if (typeof p != "object") {
              g.src = p;
              for (let m = 0; m < this._parsers.length; m++) {
                const _ = this._parsers[m];
                if (_.test(p)) {
                  g = _.parse(p);
                  break;
                }
              }
            } else
              (o = p.data ?? o),
                (l = p.format ?? l),
                (h = p.loadParser ?? h),
                (g = { ...g, ...p });
            if (!u)
              throw new Error(
                `[Resolver] alias is undefined for this asset: ${g.src}`
              );
            (g = this._buildResolvedAsset(g, {
              aliases: u,
              data: o,
              format: l,
              loadParser: h,
            })),
              d.push(g);
          });
        }),
          u.forEach((f) => {
            this._assetMap[f] = d;
          });
      });
  }
  resolveBundle(t) {
    const e = Ws(t);
    t = It(t);
    const i = {};
    return (
      t.forEach((n) => {
        const r = this._bundles[n];
        if (r) {
          const a = this.resolve(r),
            o = {};
          for (const l in a) {
            const h = a[l];
            o[this._extractAssetIdFromBundle(n, l)] = h;
          }
          i[n] = o;
        }
      }),
      e ? i[t[0]] : i
    );
  }
  resolveUrl(t) {
    const e = this.resolve(t);
    if (typeof t != "string") {
      const i = {};
      for (const n in e) i[n] = e[n].src;
      return i;
    }
    return e.src;
  }
  resolve(t) {
    const e = Ws(t);
    t = It(t);
    const i = {};
    return (
      t.forEach((n) => {
        if (!this._resolverHash[n])
          if (this._assetMap[n]) {
            let r = this._assetMap[n];
            const a = this._getPreferredOrder(r);
            a == null ||
              a.priority.forEach((o) => {
                a.params[o].forEach((l) => {
                  const h = r.filter((c) => (c[o] ? c[o] === l : !1));
                  h.length && (r = h);
                });
              }),
              (this._resolverHash[n] = r[0]);
          } else
            this._resolverHash[n] = this._buildResolvedAsset(
              { alias: [n], src: n },
              {}
            );
        i[n] = this._resolverHash[n];
      }),
      e ? i[t[0]] : i
    );
  }
  hasKey(t) {
    return !!this._assetMap[t];
  }
  hasBundle(t) {
    return !!this._bundles[t];
  }
  _getPreferredOrder(t) {
    for (let e = 0; e < t.length; e++) {
      const i = t[0],
        n = this._preferredOrder.find((r) =>
          r.params.format.includes(i.format)
        );
      if (n) return n;
    }
    return this._preferredOrder[0];
  }
  _appendDefaultSearchParams(t) {
    if (!this._defaultSearchParams) return t;
    const e = /\?/.test(t) ? "&" : "?";
    return `${t}${e}${this._defaultSearchParams}`;
  }
  _buildResolvedAsset(t, e) {
    const { aliases: i, data: n, loadParser: r, format: a } = e;
    return (
      (this._basePath || this._rootPath) &&
        (t.src = wt.toAbsolute(t.src, this._basePath, this._rootPath)),
      (t.alias = i ?? t.alias ?? [t.src]),
      (t.src = this._appendDefaultSearchParams(t.src)),
      (t.data = { ...(n || {}), ...t.data }),
      (t.loadParser = r ?? t.loadParser),
      (t.format = a ?? t.format ?? dh(t.src)),
      t
    );
  }
}
We.RETINA_PREFIX = /@([0-9\.]+)x/;
function dh(s) {
  return s.split(".").pop().split("?").shift().split("#").shift();
}
const Hi = (s, t) => {
    const e = t.split("?")[1];
    return e && (s += `?${e}`), s;
  },
  Xa = class ts {
    constructor(t, e) {
      (this.linkedSheets = []),
        (this._texture = t instanceof W ? t : null),
        (this.textureSource = t.source),
        (this.textures = {}),
        (this.animations = {}),
        (this.data = e);
      const i = parseFloat(e.meta.scale);
      i
        ? ((this.resolution = i), (t.source.resolution = this.resolution))
        : (this.resolution = t.source._resolution),
        (this._frames = this.data.frames),
        (this._frameKeys = Object.keys(this._frames)),
        (this._batchIndex = 0),
        (this._callback = null);
    }
    parse() {
      return new Promise((t) => {
        (this._callback = t),
          (this._batchIndex = 0),
          this._frameKeys.length <= ts.BATCH_SIZE
            ? (this._processFrames(0),
              this._processAnimations(),
              this._parseComplete())
            : this._nextBatch();
      });
    }
    _processFrames(t) {
      let e = t;
      const i = ts.BATCH_SIZE;
      for (; e - t < i && e < this._frameKeys.length; ) {
        const n = this._frameKeys[e],
          r = this._frames[n],
          a = r.frame;
        if (a) {
          let o = null,
            l = null;
          const h = r.trimmed !== !1 && r.sourceSize ? r.sourceSize : r.frame,
            c = new ot(
              0,
              0,
              Math.floor(h.w) / this.resolution,
              Math.floor(h.h) / this.resolution
            );
          r.rotated
            ? (o = new ot(
                Math.floor(a.x) / this.resolution,
                Math.floor(a.y) / this.resolution,
                Math.floor(a.h) / this.resolution,
                Math.floor(a.w) / this.resolution
              ))
            : (o = new ot(
                Math.floor(a.x) / this.resolution,
                Math.floor(a.y) / this.resolution,
                Math.floor(a.w) / this.resolution,
                Math.floor(a.h) / this.resolution
              )),
            r.trimmed !== !1 &&
              r.spriteSourceSize &&
              (l = new ot(
                Math.floor(r.spriteSourceSize.x) / this.resolution,
                Math.floor(r.spriteSourceSize.y) / this.resolution,
                Math.floor(a.w) / this.resolution,
                Math.floor(a.h) / this.resolution
              )),
            (this.textures[n] = new W({
              source: this.textureSource,
              frame: o,
              orig: c,
              trim: l,
              rotate: r.rotated ? 2 : 0,
              defaultAnchor: r.anchor,
              defaultBorders: r.borders,
              label: n.toString(),
            }));
        }
        e++;
      }
    }
    _processAnimations() {
      const t = this.data.animations || {};
      for (const e in t) {
        this.animations[e] = [];
        for (let i = 0; i < t[e].length; i++) {
          const n = t[e][i];
          this.animations[e].push(this.textures[n]);
        }
      }
    }
    _parseComplete() {
      const t = this._callback;
      (this._callback = null),
        (this._batchIndex = 0),
        t.call(this, this.textures);
    }
    _nextBatch() {
      this._processFrames(this._batchIndex * ts.BATCH_SIZE),
        this._batchIndex++,
        setTimeout(() => {
          this._batchIndex * ts.BATCH_SIZE < this._frameKeys.length
            ? this._nextBatch()
            : (this._processAnimations(), this._parseComplete());
        }, 0);
    }
    destroy(t = !1) {
      var e;
      for (const i in this.textures) this.textures[i].destroy();
      (this._frames = null),
        (this._frameKeys = null),
        (this.data = null),
        (this.textures = null),
        t &&
          ((e = this._texture) == null || e.destroy(),
          this.textureSource.destroy()),
        (this._texture = null),
        (this.textureSource = null),
        (this.linkedSheets = []);
    }
  };
Xa.BATCH_SIZE = 1e3;
let or = Xa;
const fh = [
  "jpg",
  "png",
  "jpeg",
  "avif",
  "webp",
  "basis",
  "etc2",
  "bc7",
  "bc6h",
  "bc5",
  "bc4",
  "bc3",
  "bc2",
  "bc1",
  "eac",
  "astc",
];
function qa(s, t, e) {
  const i = {};
  if (
    (s.forEach((n) => {
      i[n] = t;
    }),
    Object.keys(t.textures).forEach((n) => {
      i[n] = t.textures[n];
    }),
    !e)
  ) {
    const n = wt.dirname(s[0]);
    t.linkedSheets.forEach((r, a) => {
      const o = qa([`${n}/${t.data.meta.related_multi_packs[a]}`], r, !0);
      Object.assign(i, o);
    });
  }
  return i;
}
const ph = {
  extension: L.Asset,
  cache: {
    test: (s) => s instanceof or,
    getCacheableAssets: (s, t) => qa(s, t, !1),
  },
  resolver: {
    extension: { type: L.ResolveParser, name: "resolveSpritesheet" },
    test: (s) => {
      const e = s.split("?")[0].split("."),
        i = e.pop(),
        n = e.pop();
      return i === "json" && fh.includes(n);
    },
    parse: (s) => {
      var e;
      const t = s.split(".");
      return {
        resolution: parseFloat(
          ((e = We.RETINA_PREFIX.exec(s)) == null ? void 0 : e[1]) ?? "1"
        ),
        format: t[t.length - 2],
        src: s,
      };
    },
  },
  loader: {
    name: "spritesheetLoader",
    extension: {
      type: L.LoadParser,
      priority: ee.Normal,
      name: "spritesheetLoader",
    },
    async testParse(s, t) {
      return wt.extname(t.src).toLowerCase() === ".json" && !!s.frames;
    },
    async parse(s, t, e) {
      var h, c;
      const { texture: i, imageFilename: n } =
        (t == null ? void 0 : t.data) ?? {};
      let r = wt.dirname(t.src);
      r && r.lastIndexOf("/") !== r.length - 1 && (r += "/");
      let a;
      if (i instanceof W) a = i;
      else {
        const u = Hi(r + (n ?? s.meta.image), t.src);
        a = (await e.load([u]))[u];
      }
      const o = new or(a.source, s);
      await o.parse();
      const l =
        (h = s == null ? void 0 : s.meta) == null
          ? void 0
          : h.related_multi_packs;
      if (Array.isArray(l)) {
        const u = [];
        for (const f of l) {
          if (typeof f != "string") continue;
          let p = r + f;
          ((c = t.data) != null && c.ignoreMultiPack) ||
            ((p = Hi(p, t.src)),
            u.push(e.load({ src: p, data: { ignoreMultiPack: !0 } })));
        }
        const d = await Promise.all(u);
        (o.linkedSheets = d),
          d.forEach((f) => {
            f.linkedSheets = [o].concat(o.linkedSheets.filter((p) => p !== f));
          });
      }
      return o;
    },
    async unload(s, t, e) {
      await e.unload(s.textureSource._sourceOrigin), s.destroy(!1);
    },
  },
};
mt.add(ph);
const yi = Object.create(null),
  lr = Object.create(null);
function xn(s, t) {
  let e = lr[s];
  return (
    e === void 0 && (yi[t] === void 0 && (yi[t] = 1), (lr[s] = e = yi[t]++)), e
  );
}
let Ae;
function Ka() {
  return (
    (!Ae || (Ae != null && Ae.isContextLost())) &&
      (Ae = tt.get().createCanvas().getContext("webgl", {})),
    Ae
  );
}
let Cs;
function mh() {
  if (!Cs) {
    Cs = "mediump";
    const s = Ka();
    s &&
      s.getShaderPrecisionFormat &&
      (Cs = s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT)
        .precision
        ? "highp"
        : "mediump");
  }
  return Cs;
}
function gh(s, t, e) {
  return t
    ? s
    : e
    ? ((s = s.replace("out vec4 finalColor;", "")),
      `
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${s}
        `)
    : `
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${s}
        `;
}
function _h(s, t, e) {
  const i = e ? t.maxSupportedFragmentPrecision : t.maxSupportedVertexPrecision;
  if (s.substring(0, 9) !== "precision") {
    let n = e ? t.requestedFragmentPrecision : t.requestedVertexPrecision;
    return (
      n === "highp" && i !== "highp" && (n = "mediump"),
      `precision ${n} float;
${s}`
    );
  } else if (i !== "highp" && s.substring(0, 15) === "precision highp")
    return s.replace("precision highp", "precision mediump");
  return s;
}
function yh(s, t) {
  return t
    ? `#version 300 es
${s}`
    : s;
}
const xh = {},
  bh = {};
function wh(s, { name: t = "pixi-program" }, e = !0) {
  (t = t.replace(/\s+/g, "-")), (t += e ? "-fragment" : "-vertex");
  const i = e ? xh : bh;
  return (
    i[t] ? (i[t]++, (t += `-${i[t]}`)) : (i[t] = 1),
    s.indexOf("#define SHADER_NAME") !== -1
      ? s
      : `${`#define SHADER_NAME ${t}`}
${s}`
  );
}
function vh(s, t) {
  return t ? s.replace("#version 300 es", "") : s;
}
const xi = {
    stripVersion: vh,
    ensurePrecision: _h,
    addProgramDefines: gh,
    setProgramName: wh,
    insertVersion: yh,
  },
  bi = Object.create(null),
  Za = class ji {
    constructor(t) {
      t = { ...ji.defaultOptions, ...t };
      const e = t.fragment.indexOf("#version 300 es") !== -1,
        i = {
          stripVersion: e,
          ensurePrecision: {
            requestedFragmentPrecision: t.preferredFragmentPrecision,
            requestedVertexPrecision: t.preferredVertexPrecision,
            maxSupportedVertexPrecision: "highp",
            maxSupportedFragmentPrecision: mh(),
          },
          setProgramName: { name: t.name },
          addProgramDefines: e,
          insertVersion: e,
        };
      let n = t.fragment,
        r = t.vertex;
      Object.keys(xi).forEach((a) => {
        const o = i[a];
        (n = xi[a](n, o, !0)), (r = xi[a](r, o, !1));
      }),
        (this.fragment = n),
        (this.vertex = r),
        (this._key = xn(`${this.vertex}:${this.fragment}`, "gl-program"));
    }
    destroy() {
      (this.fragment = null),
        (this.vertex = null),
        (this._attributeData = null),
        (this._uniformData = null),
        (this._uniformBlockData = null),
        (this.transformFeedbackVaryings = null);
    }
    static from(t) {
      const e = `${t.vertex}:${t.fragment}`;
      return bi[e] || (bi[e] = new ji(t)), bi[e];
    }
  };
Za.defaultOptions = {
  preferredVertexPrecision: "highp",
  preferredFragmentPrecision: "mediump",
};
let Qa = Za;
const hr = {
  uint8x2: { size: 2, stride: 2, normalised: !1 },
  uint8x4: { size: 4, stride: 4, normalised: !1 },
  sint8x2: { size: 2, stride: 2, normalised: !1 },
  sint8x4: { size: 4, stride: 4, normalised: !1 },
  unorm8x2: { size: 2, stride: 2, normalised: !0 },
  unorm8x4: { size: 4, stride: 4, normalised: !0 },
  snorm8x2: { size: 2, stride: 2, normalised: !0 },
  snorm8x4: { size: 4, stride: 4, normalised: !0 },
  uint16x2: { size: 2, stride: 4, normalised: !1 },
  uint16x4: { size: 4, stride: 8, normalised: !1 },
  sint16x2: { size: 2, stride: 4, normalised: !1 },
  sint16x4: { size: 4, stride: 8, normalised: !1 },
  unorm16x2: { size: 2, stride: 4, normalised: !0 },
  unorm16x4: { size: 4, stride: 8, normalised: !0 },
  snorm16x2: { size: 2, stride: 4, normalised: !0 },
  snorm16x4: { size: 4, stride: 8, normalised: !0 },
  float16x2: { size: 2, stride: 4, normalised: !1 },
  float16x4: { size: 4, stride: 8, normalised: !1 },
  float32: { size: 1, stride: 4, normalised: !1 },
  float32x2: { size: 2, stride: 8, normalised: !1 },
  float32x3: { size: 3, stride: 12, normalised: !1 },
  float32x4: { size: 4, stride: 16, normalised: !1 },
  uint32: { size: 1, stride: 4, normalised: !1 },
  uint32x2: { size: 2, stride: 8, normalised: !1 },
  uint32x3: { size: 3, stride: 12, normalised: !1 },
  uint32x4: { size: 4, stride: 16, normalised: !1 },
  sint32: { size: 1, stride: 4, normalised: !1 },
  sint32x2: { size: 2, stride: 8, normalised: !1 },
  sint32x3: { size: 3, stride: 12, normalised: !1 },
  sint32x4: { size: 4, stride: 16, normalised: !1 },
};
function Ah(s) {
  return hr[s] ?? hr.float32;
}
const Sh = {
  f32: "float32",
  "vec2<f32>": "float32x2",
  "vec3<f32>": "float32x3",
  "vec4<f32>": "float32x4",
  vec2f: "float32x2",
  vec3f: "float32x3",
  vec4f: "float32x4",
  i32: "sint32",
  "vec2<i32>": "sint32x2",
  "vec3<i32>": "sint32x3",
  "vec4<i32>": "sint32x4",
  u32: "uint32",
  "vec2<u32>": "uint32x2",
  "vec3<u32>": "uint32x3",
  "vec4<u32>": "uint32x4",
  bool: "uint32",
  "vec2<bool>": "uint32x2",
  "vec3<bool>": "uint32x3",
  "vec4<bool>": "uint32x4",
};
function Ch({ source: s, entryPoint: t }) {
  const e = {},
    i = s.indexOf(`fn ${t}`);
  if (i !== -1) {
    const n = s.indexOf("->", i);
    if (n !== -1) {
      const r = s.substring(i, n),
        a =
          /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;
      let o;
      for (; (o = a.exec(r)) !== null; ) {
        const l = Sh[o[3]] ?? "float32";
        e[o[2]] = {
          location: parseInt(o[1], 10),
          format: l,
          stride: Ah(l).stride,
          offset: 0,
          instance: !1,
          start: 0,
        };
      }
    }
  }
  return e;
}
function wi(s) {
  var u, d;
  const t = /(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,
    e = /@group\((\d+)\)/,
    i = /@binding\((\d+)\)/,
    n = /var(<[^>]+>)? (\w+)/,
    r = /:\s*(\w+)/,
    a = /struct\s+(\w+)\s*{([^}]+)}/g,
    o = /(\w+)\s*:\s*([\w\<\>]+)/g,
    l = /struct\s+(\w+)/,
    h =
      (u = s.match(t)) == null
        ? void 0
        : u.map((f) => ({
            group: parseInt(f.match(e)[1], 10),
            binding: parseInt(f.match(i)[1], 10),
            name: f.match(n)[2],
            isUniform: f.match(n)[1] === "<uniform>",
            type: f.match(r)[1],
          }));
  if (!h) return { groups: [], structs: [] };
  const c =
    ((d = s.match(a)) == null
      ? void 0
      : d
          .map((f) => {
            const p = f.match(l)[1],
              g = f.match(o).reduce((m, _) => {
                const [y, x] = _.split(":");
                return (m[y.trim()] = x.trim()), m;
              }, {});
            return g ? { name: p, members: g } : null;
          })
          .filter(({ name: f }) => h.some((p) => p.type === f))) ?? [];
  return { groups: h, structs: c };
}
var es = ((s) => (
  (s[(s.VERTEX = 1)] = "VERTEX"),
  (s[(s.FRAGMENT = 2)] = "FRAGMENT"),
  (s[(s.COMPUTE = 4)] = "COMPUTE"),
  s
))(es || {});
function Ph({ groups: s }) {
  const t = [];
  for (let e = 0; e < s.length; e++) {
    const i = s[e];
    t[i.group] || (t[i.group] = []),
      i.isUniform
        ? t[i.group].push({
            binding: i.binding,
            visibility: es.VERTEX | es.FRAGMENT,
            buffer: { type: "uniform" },
          })
        : i.type === "sampler"
        ? t[i.group].push({
            binding: i.binding,
            visibility: es.FRAGMENT,
            sampler: { type: "filtering" },
          })
        : i.type === "texture_2d" &&
          t[i.group].push({
            binding: i.binding,
            visibility: es.FRAGMENT,
            texture: {
              sampleType: "float",
              viewDimension: "2d",
              multisampled: !1,
            },
          });
  }
  return t;
}
function kh({ groups: s }) {
  const t = [];
  for (let e = 0; e < s.length; e++) {
    const i = s[e];
    t[i.group] || (t[i.group] = {}), (t[i.group][i.name] = i.binding);
  }
  return t;
}
function Mh(s, t) {
  const e = new Set(),
    i = new Set(),
    n = [...s.structs, ...t.structs].filter((a) =>
      e.has(a.name) ? !1 : (e.add(a.name), !0)
    ),
    r = [...s.groups, ...t.groups].filter((a) => {
      const o = `${a.name}-${a.binding}`;
      return i.has(o) ? !1 : (i.add(o), !0);
    });
  return { structs: n, groups: r };
}
const vi = Object.create(null);
class Ks {
  constructor(t) {
    var o, l;
    (this._layoutKey = 0), (this._attributeLocationsKey = 0);
    const { fragment: e, vertex: i, layout: n, gpuLayout: r, name: a } = t;
    if (
      ((this.name = a),
      (this.fragment = e),
      (this.vertex = i),
      e.source === i.source)
    ) {
      const h = wi(e.source);
      this.structsAndGroups = h;
    } else {
      const h = wi(i.source),
        c = wi(e.source);
      this.structsAndGroups = Mh(h, c);
    }
    (this.layout = n ?? kh(this.structsAndGroups)),
      (this.gpuLayout = r ?? Ph(this.structsAndGroups)),
      (this.autoAssignGlobalUniforms =
        ((o = this.layout[0]) == null ? void 0 : o.globalUniforms) !== void 0),
      (this.autoAssignLocalUniforms =
        ((l = this.layout[1]) == null ? void 0 : l.localUniforms) !== void 0),
      this._generateProgramKey();
  }
  _generateProgramKey() {
    const { vertex: t, fragment: e } = this,
      i = t.source + e.source + t.entryPoint + e.entryPoint;
    this._layoutKey = xn(i, "program");
  }
  get attributeData() {
    return (
      this._attributeData ?? (this._attributeData = Ch(this.vertex)),
      this._attributeData
    );
  }
  destroy() {
    (this.gpuLayout = null),
      (this.layout = null),
      (this.structsAndGroups = null),
      (this.fragment = null),
      (this.vertex = null);
  }
  static from(t) {
    const e = `${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;
    return vi[e] || (vi[e] = new Ks(t)), vi[e];
  }
}
const Ja = [
    "f32",
    "i32",
    "vec2<f32>",
    "vec3<f32>",
    "vec4<f32>",
    "mat2x2<f32>",
    "mat3x3<f32>",
    "mat4x4<f32>",
    "mat3x2<f32>",
    "mat4x2<f32>",
    "mat2x3<f32>",
    "mat4x3<f32>",
    "mat2x4<f32>",
    "mat3x4<f32>",
  ],
  Th = Ja.reduce((s, t) => ((s[t] = !0), s), {});
function Eh(s, t) {
  switch (s) {
    case "f32":
      return 0;
    case "vec2<f32>":
      return new Float32Array(2 * t);
    case "vec3<f32>":
      return new Float32Array(3 * t);
    case "vec4<f32>":
      return new Float32Array(4 * t);
    case "mat2x2<f32>":
      return new Float32Array([1, 0, 0, 1]);
    case "mat3x3<f32>":
      return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4x4<f32>":
      return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  return null;
}
const to = class eo {
  constructor(t, e) {
    (this._touched = 0),
      (this.uid = lt("uniform")),
      (this._resourceType = "uniformGroup"),
      (this._resourceId = lt("resource")),
      (this.isUniformGroup = !0),
      (this._dirtyId = 0),
      (this.destroyed = !1),
      (e = { ...eo.defaultOptions, ...e }),
      (this.uniformStructures = t);
    const i = {};
    for (const n in t) {
      const r = t[n];
      if (((r.name = n), (r.size = r.size ?? 1), !Th[r.type]))
        throw new Error(
          `Uniform type ${
            r.type
          } is not supported. Supported uniform types are: ${Ja.join(", ")}`
        );
      r.value ?? (r.value = Eh(r.type, r.size)), (i[n] = r.value);
    }
    (this.uniforms = i),
      (this._dirtyId = 1),
      (this.ubo = e.ubo),
      (this.isStatic = e.isStatic),
      (this._signature = xn(
        Object.keys(i)
          .map((n) => `${n}-${t[n].type}`)
          .join("-"),
        "uniform-group"
      ));
  }
  update() {
    this._dirtyId++;
  }
};
to.defaultOptions = { ubo: !1, isStatic: !1 };
let so = to;
class Ls {
  constructor(t) {
    (this.resources = Object.create(null)), (this._dirty = !0);
    let e = 0;
    for (const i in t) {
      const n = t[i];
      this.setResource(n, e++);
    }
    this._updateKey();
  }
  _updateKey() {
    if (!this._dirty) return;
    this._dirty = !1;
    const t = [];
    let e = 0;
    for (const i in this.resources) t[e++] = this.resources[i]._resourceId;
    this._key = t.join("|");
  }
  setResource(t, e) {
    var n, r;
    const i = this.resources[e];
    t !== i &&
      (i &&
        ((n = t.off) == null ||
          n.call(t, "change", this.onResourceChange, this)),
      (r = t.on) == null || r.call(t, "change", this.onResourceChange, this),
      (this.resources[e] = t),
      (this._dirty = !0));
  }
  getResource(t) {
    return this.resources[t];
  }
  _touch(t) {
    const e = this.resources;
    for (const i in e) e[i]._touched = t;
  }
  destroy() {
    var e;
    const t = this.resources;
    for (const i in t) {
      const n = t[i];
      (e = n.off) == null || e.call(n, "change", this.onResourceChange, this);
    }
    this.resources = null;
  }
  onResourceChange(t) {
    if (((this._dirty = !0), t.destroyed)) {
      const e = this.resources;
      for (const i in e) e[i] === t && (e[i] = null);
    } else this._updateKey();
  }
}
var Yi = ((s) => (
  (s[(s.WEBGL = 1)] = "WEBGL"),
  (s[(s.WEBGPU = 2)] = "WEBGPU"),
  (s[(s.BOTH = 3)] = "BOTH"),
  s
))(Yi || {});
class bn extends Lt {
  constructor(t) {
    super(),
      (this._uniformBindMap = Object.create(null)),
      (this._ownedBindGroups = []);
    let {
      gpuProgram: e,
      glProgram: i,
      groups: n,
      resources: r,
      compatibleRenderers: a,
      groupMap: o,
    } = t;
    (this.gpuProgram = e),
      (this.glProgram = i),
      a === void 0 && ((a = 0), e && (a |= Yi.WEBGPU), i && (a |= Yi.WEBGL)),
      (this.compatibleRenderers = a);
    const l = {};
    if ((!r && !n && (r = {}), r && n))
      throw new Error("[Shader] Cannot have both resources and groups");
    if (!e && n && !o)
      throw new Error(
        "[Shader] No group map or WebGPU shader provided - consider using resources instead."
      );
    if (!e && n && o)
      for (const h in o)
        for (const c in o[h]) {
          const u = o[h][c];
          l[u] = { group: h, binding: c, name: u };
        }
    else if (e && n && !o) {
      const h = e.structsAndGroups.groups;
      (o = {}),
        h.forEach((c) => {
          (o[c.group] = o[c.group] || {}),
            (o[c.group][c.binding] = c.name),
            (l[c.name] = c);
        });
    } else if (r) {
      (n = {}),
        (o = {}),
        e &&
          e.structsAndGroups.groups.forEach((u) => {
            (o[u.group] = o[u.group] || {}),
              (o[u.group][u.binding] = u.name),
              (l[u.name] = u);
          });
      let h = 0;
      for (const c in r)
        l[c] ||
          (n[99] || ((n[99] = new Ls()), this._ownedBindGroups.push(n[99])),
          (l[c] = { group: 99, binding: h, name: c }),
          (o[99] = o[99] || {}),
          (o[99][h] = c),
          h++);
      for (const c in r) {
        const u = c;
        let d = r[c];
        !d.source && !d._resourceType && (d = new so(d));
        const f = l[u];
        f &&
          (n[f.group] ||
            ((n[f.group] = new Ls()), this._ownedBindGroups.push(n[f.group])),
          n[f.group].setResource(d, f.binding));
      }
    }
    (this.groups = n),
      (this._uniformBindMap = o),
      (this.resources = this._buildResourceAccessor(n, l));
  }
  addResource(t, e, i) {
    var n, r;
    (n = this._uniformBindMap)[e] || (n[e] = {}),
      (r = this._uniformBindMap[e])[i] || (r[i] = t),
      this.groups[e] ||
        ((this.groups[e] = new Ls()),
        this._ownedBindGroups.push(this.groups[e]));
  }
  _buildResourceAccessor(t, e) {
    const i = {};
    for (const n in e) {
      const r = e[n];
      Object.defineProperty(i, r.name, {
        get() {
          return t[r.group].getResource(r.binding);
        },
        set(a) {
          t[r.group].setResource(a, r.binding);
        },
      });
    }
    return i;
  }
  destroy(t = !1) {
    var e, i;
    this.emit("destroy", this),
      t &&
        ((e = this.gpuProgram) == null || e.destroy(),
        (i = this.glProgram) == null || i.destroy()),
      (this.gpuProgram = null),
      (this.glProgram = null),
      this.removeAllListeners(),
      (this._uniformBindMap = null),
      this._ownedBindGroups.forEach((n) => {
        n.destroy();
      }),
      (this._ownedBindGroups = null),
      (this.resources = null),
      (this.groups = null);
  }
  static from(t) {
    const { gpu: e, gl: i, ...n } = t;
    let r, a;
    return (
      e && (r = Ks.from(e)),
      i && (a = Qa.from(i)),
      new bn({ gpuProgram: r, glProgram: a, ...n })
    );
  }
}
const Xi = [];
mt.handleByNamedList(L.Environment, Xi);
async function Ih(s) {
  if (!s)
    for (let t = 0; t < Xi.length; t++) {
      const e = Xi[t];
      if (e.value.test()) {
        await e.value.load();
        return;
      }
    }
}
let Ke;
function Bh() {
  if (typeof Ke == "boolean") return Ke;
  try {
    Ke =
      new Function(
        "param1",
        "param2",
        "param3",
        "return param1[param2] === param3;"
      )({ a: "b" }, "a", "b") === !0;
  } catch {
    Ke = !1;
  }
  return Ke;
}
var wn = { exports: {} };
wn.exports = Zs;
wn.exports.default = Zs;
function Zs(s, t, e) {
  e = e || 2;
  var i = t && t.length,
    n = i ? t[0] * e : s.length,
    r = io(s, 0, n, e, !0),
    a = [];
  if (!r || r.next === r.prev) return a;
  var o, l, h, c, u, d, f;
  if ((i && (r = Gh(s, t, r, e)), s.length > 80 * e)) {
    (o = h = s[0]), (l = c = s[1]);
    for (var p = e; p < n; p += e)
      (u = s[p]),
        (d = s[p + 1]),
        u < o && (o = u),
        d < l && (l = d),
        u > h && (h = u),
        d > c && (c = d);
    (f = Math.max(h - o, c - l)), (f = f !== 0 ? 32767 / f : 0);
  }
  return cs(r, a, e, o, l, f, 0), a;
}
function io(s, t, e, i, n) {
  var r, a;
  if (n === Zi(s, t, e, i) > 0)
    for (r = t; r < e; r += i) a = cr(r, s[r], s[r + 1], a);
  else for (r = e - i; r >= t; r -= i) a = cr(r, s[r], s[r + 1], a);
  return a && Qs(a, a.next) && (ds(a), (a = a.next)), a;
}
function ye(s, t) {
  if (!s) return s;
  t || (t = s);
  var e = s,
    i;
  do
    if (
      ((i = !1), !e.steiner && (Qs(e, e.next) || Z(e.prev, e, e.next) === 0))
    ) {
      if ((ds(e), (e = t = e.prev), e === e.next)) break;
      i = !0;
    } else e = e.next;
  while (i || e !== t);
  return t;
}
function cs(s, t, e, i, n, r, a) {
  if (s) {
    !a && r && Nh(s, i, n, r);
    for (var o = s, l, h; s.prev !== s.next; ) {
      if (((l = s.prev), (h = s.next), r ? Rh(s, i, n, r) : Fh(s))) {
        t.push((l.i / e) | 0),
          t.push((s.i / e) | 0),
          t.push((h.i / e) | 0),
          ds(s),
          (s = h.next),
          (o = h.next);
        continue;
      }
      if (((s = h), s === o)) {
        a
          ? a === 1
            ? ((s = Lh(ye(s), t, e)), cs(s, t, e, i, n, r, 2))
            : a === 2 && $h(s, t, e, i, n, r)
          : cs(ye(s), t, e, i, n, r, 1);
        break;
      }
    }
  }
}
function Fh(s) {
  var t = s.prev,
    e = s,
    i = s.next;
  if (Z(t, e, i) >= 0) return !1;
  for (
    var n = t.x,
      r = e.x,
      a = i.x,
      o = t.y,
      l = e.y,
      h = i.y,
      c = n < r ? (n < a ? n : a) : r < a ? r : a,
      u = o < l ? (o < h ? o : h) : l < h ? l : h,
      d = n > r ? (n > a ? n : a) : r > a ? r : a,
      f = o > l ? (o > h ? o : h) : l > h ? l : h,
      p = i.next;
    p !== t;

  ) {
    if (
      p.x >= c &&
      p.x <= d &&
      p.y >= u &&
      p.y <= f &&
      Me(n, o, r, l, a, h, p.x, p.y) &&
      Z(p.prev, p, p.next) >= 0
    )
      return !1;
    p = p.next;
  }
  return !0;
}
function Rh(s, t, e, i) {
  var n = s.prev,
    r = s,
    a = s.next;
  if (Z(n, r, a) >= 0) return !1;
  for (
    var o = n.x,
      l = r.x,
      h = a.x,
      c = n.y,
      u = r.y,
      d = a.y,
      f = o < l ? (o < h ? o : h) : l < h ? l : h,
      p = c < u ? (c < d ? c : d) : u < d ? u : d,
      g = o > l ? (o > h ? o : h) : l > h ? l : h,
      m = c > u ? (c > d ? c : d) : u > d ? u : d,
      _ = qi(f, p, t, e, i),
      y = qi(g, m, t, e, i),
      x = s.prevZ,
      b = s.nextZ;
    x && x.z >= _ && b && b.z <= y;

  ) {
    if (
      (x.x >= f &&
        x.x <= g &&
        x.y >= p &&
        x.y <= m &&
        x !== n &&
        x !== a &&
        Me(o, c, l, u, h, d, x.x, x.y) &&
        Z(x.prev, x, x.next) >= 0) ||
      ((x = x.prevZ),
      b.x >= f &&
        b.x <= g &&
        b.y >= p &&
        b.y <= m &&
        b !== n &&
        b !== a &&
        Me(o, c, l, u, h, d, b.x, b.y) &&
        Z(b.prev, b, b.next) >= 0)
    )
      return !1;
    b = b.nextZ;
  }
  for (; x && x.z >= _; ) {
    if (
      x.x >= f &&
      x.x <= g &&
      x.y >= p &&
      x.y <= m &&
      x !== n &&
      x !== a &&
      Me(o, c, l, u, h, d, x.x, x.y) &&
      Z(x.prev, x, x.next) >= 0
    )
      return !1;
    x = x.prevZ;
  }
  for (; b && b.z <= y; ) {
    if (
      b.x >= f &&
      b.x <= g &&
      b.y >= p &&
      b.y <= m &&
      b !== n &&
      b !== a &&
      Me(o, c, l, u, h, d, b.x, b.y) &&
      Z(b.prev, b, b.next) >= 0
    )
      return !1;
    b = b.nextZ;
  }
  return !0;
}
function Lh(s, t, e) {
  var i = s;
  do {
    var n = i.prev,
      r = i.next.next;
    !Qs(n, r) &&
      no(n, i, i.next, r) &&
      us(n, r) &&
      us(r, n) &&
      (t.push((n.i / e) | 0),
      t.push((i.i / e) | 0),
      t.push((r.i / e) | 0),
      ds(i),
      ds(i.next),
      (i = s = r)),
      (i = i.next);
  } while (i !== s);
  return ye(i);
}
function $h(s, t, e, i, n, r) {
  var a = s;
  do {
    for (var o = a.next.next; o !== a.prev; ) {
      if (a.i !== o.i && Hh(a, o)) {
        var l = ro(a, o);
        (a = ye(a, a.next)),
          (l = ye(l, l.next)),
          cs(a, t, e, i, n, r, 0),
          cs(l, t, e, i, n, r, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== s);
}
function Gh(s, t, e, i) {
  var n = [],
    r,
    a,
    o,
    l,
    h;
  for (r = 0, a = t.length; r < a; r++)
    (o = t[r] * i),
      (l = r < a - 1 ? t[r + 1] * i : s.length),
      (h = io(s, o, l, i, !1)),
      h === h.next && (h.steiner = !0),
      n.push(Vh(h));
  for (n.sort(Oh), r = 0; r < n.length; r++) e = zh(n[r], e);
  return e;
}
function Oh(s, t) {
  return s.x - t.x;
}
function zh(s, t) {
  var e = Dh(s, t);
  if (!e) return t;
  var i = ro(e, s);
  return ye(i, i.next), ye(e, e.next);
}
function Dh(s, t) {
  var e = t,
    i = s.x,
    n = s.y,
    r = -1 / 0,
    a;
  do {
    if (n <= e.y && n >= e.next.y && e.next.y !== e.y) {
      var o = e.x + ((n - e.y) * (e.next.x - e.x)) / (e.next.y - e.y);
      if (
        o <= i &&
        o > r &&
        ((r = o), (a = e.x < e.next.x ? e : e.next), o === i)
      )
        return a;
    }
    e = e.next;
  } while (e !== t);
  if (!a) return null;
  var l = a,
    h = a.x,
    c = a.y,
    u = 1 / 0,
    d;
  e = a;
  do
    i >= e.x &&
      e.x >= h &&
      i !== e.x &&
      Me(n < c ? i : r, n, h, c, n < c ? r : i, n, e.x, e.y) &&
      ((d = Math.abs(n - e.y) / (i - e.x)),
      us(e, s) &&
        (d < u || (d === u && (e.x > a.x || (e.x === a.x && Uh(a, e))))) &&
        ((a = e), (u = d))),
      (e = e.next);
  while (e !== l);
  return a;
}
function Uh(s, t) {
  return Z(s.prev, s, t.prev) < 0 && Z(t.next, s, s.next) < 0;
}
function Nh(s, t, e, i) {
  var n = s;
  do
    n.z === 0 && (n.z = qi(n.x, n.y, t, e, i)),
      (n.prevZ = n.prev),
      (n.nextZ = n.next),
      (n = n.next);
  while (n !== s);
  (n.prevZ.nextZ = null), (n.prevZ = null), Wh(n);
}
function Wh(s) {
  var t,
    e,
    i,
    n,
    r,
    a,
    o,
    l,
    h = 1;
  do {
    for (e = s, s = null, r = null, a = 0; e; ) {
      for (a++, i = e, o = 0, t = 0; t < h && (o++, (i = i.nextZ), !!i); t++);
      for (l = h; o > 0 || (l > 0 && i); )
        o !== 0 && (l === 0 || !i || e.z <= i.z)
          ? ((n = e), (e = e.nextZ), o--)
          : ((n = i), (i = i.nextZ), l--),
          r ? (r.nextZ = n) : (s = n),
          (n.prevZ = r),
          (r = n);
      e = i;
    }
    (r.nextZ = null), (h *= 2);
  } while (a > 1);
  return s;
}
function qi(s, t, e, i, n) {
  return (
    (s = ((s - e) * n) | 0),
    (t = ((t - i) * n) | 0),
    (s = (s | (s << 8)) & 16711935),
    (s = (s | (s << 4)) & 252645135),
    (s = (s | (s << 2)) & 858993459),
    (s = (s | (s << 1)) & 1431655765),
    (t = (t | (t << 8)) & 16711935),
    (t = (t | (t << 4)) & 252645135),
    (t = (t | (t << 2)) & 858993459),
    (t = (t | (t << 1)) & 1431655765),
    s | (t << 1)
  );
}
function Vh(s) {
  var t = s,
    e = s;
  do (t.x < e.x || (t.x === e.x && t.y < e.y)) && (e = t), (t = t.next);
  while (t !== s);
  return e;
}
function Me(s, t, e, i, n, r, a, o) {
  return (
    (n - a) * (t - o) >= (s - a) * (r - o) &&
    (s - a) * (i - o) >= (e - a) * (t - o) &&
    (e - a) * (r - o) >= (n - a) * (i - o)
  );
}
function Hh(s, t) {
  return (
    s.next.i !== t.i &&
    s.prev.i !== t.i &&
    !jh(s, t) &&
    ((us(s, t) &&
      us(t, s) &&
      Yh(s, t) &&
      (Z(s.prev, s, t.prev) || Z(s, t.prev, t))) ||
      (Qs(s, t) && Z(s.prev, s, s.next) > 0 && Z(t.prev, t, t.next) > 0))
  );
}
function Z(s, t, e) {
  return (t.y - s.y) * (e.x - t.x) - (t.x - s.x) * (e.y - t.y);
}
function Qs(s, t) {
  return s.x === t.x && s.y === t.y;
}
function no(s, t, e, i) {
  var n = ks(Z(s, t, e)),
    r = ks(Z(s, t, i)),
    a = ks(Z(e, i, s)),
    o = ks(Z(e, i, t));
  return !!(
    (n !== r && a !== o) ||
    (n === 0 && Ps(s, e, t)) ||
    (r === 0 && Ps(s, i, t)) ||
    (a === 0 && Ps(e, s, i)) ||
    (o === 0 && Ps(e, t, i))
  );
}
function Ps(s, t, e) {
  return (
    t.x <= Math.max(s.x, e.x) &&
    t.x >= Math.min(s.x, e.x) &&
    t.y <= Math.max(s.y, e.y) &&
    t.y >= Math.min(s.y, e.y)
  );
}
function ks(s) {
  return s > 0 ? 1 : s < 0 ? -1 : 0;
}
function jh(s, t) {
  var e = s;
  do {
    if (
      e.i !== s.i &&
      e.next.i !== s.i &&
      e.i !== t.i &&
      e.next.i !== t.i &&
      no(e, e.next, s, t)
    )
      return !0;
    e = e.next;
  } while (e !== s);
  return !1;
}
function us(s, t) {
  return Z(s.prev, s, s.next) < 0
    ? Z(s, t, s.next) >= 0 && Z(s, s.prev, t) >= 0
    : Z(s, t, s.prev) < 0 || Z(s, s.next, t) < 0;
}
function Yh(s, t) {
  var e = s,
    i = !1,
    n = (s.x + t.x) / 2,
    r = (s.y + t.y) / 2;
  do
    e.y > r != e.next.y > r &&
      e.next.y !== e.y &&
      n < ((e.next.x - e.x) * (r - e.y)) / (e.next.y - e.y) + e.x &&
      (i = !i),
      (e = e.next);
  while (e !== s);
  return i;
}
function ro(s, t) {
  var e = new Ki(s.i, s.x, s.y),
    i = new Ki(t.i, t.x, t.y),
    n = s.next,
    r = t.prev;
  return (
    (s.next = t),
    (t.prev = s),
    (e.next = n),
    (n.prev = e),
    (i.next = e),
    (e.prev = i),
    (r.next = i),
    (i.prev = r),
    i
  );
}
function cr(s, t, e, i) {
  var n = new Ki(s, t, e);
  return (
    i
      ? ((n.next = i.next), (n.prev = i), (i.next.prev = n), (i.next = n))
      : ((n.prev = n), (n.next = n)),
    n
  );
}
function ds(s) {
  (s.next.prev = s.prev),
    (s.prev.next = s.next),
    s.prevZ && (s.prevZ.nextZ = s.nextZ),
    s.nextZ && (s.nextZ.prevZ = s.prevZ);
}
function Ki(s, t, e) {
  (this.i = s),
    (this.x = t),
    (this.y = e),
    (this.prev = null),
    (this.next = null),
    (this.z = 0),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}
Zs.deviation = function (s, t, e, i) {
  var n = t && t.length,
    r = n ? t[0] * e : s.length,
    a = Math.abs(Zi(s, 0, r, e));
  if (n)
    for (var o = 0, l = t.length; o < l; o++) {
      var h = t[o] * e,
        c = o < l - 1 ? t[o + 1] * e : s.length;
      a -= Math.abs(Zi(s, h, c, e));
    }
  var u = 0;
  for (o = 0; o < i.length; o += 3) {
    var d = i[o] * e,
      f = i[o + 1] * e,
      p = i[o + 2] * e;
    u += Math.abs(
      (s[d] - s[p]) * (s[f + 1] - s[d + 1]) -
        (s[d] - s[f]) * (s[p + 1] - s[d + 1])
    );
  }
  return a === 0 && u === 0 ? 0 : Math.abs((u - a) / a);
};
function Zi(s, t, e, i) {
  for (var n = 0, r = t, a = e - i; r < e; r += i)
    (n += (s[a] - s[r]) * (s[r + 1] + s[a + 1])), (a = r);
  return n;
}
Zs.flatten = function (s) {
  for (
    var t = s[0][0].length,
      e = { vertices: [], holes: [], dimensions: t },
      i = 0,
      n = 0;
    n < s.length;
    n++
  ) {
    for (var r = 0; r < s[n].length; r++)
      for (var a = 0; a < t; a++) e.vertices.push(s[n][r][a]);
    n > 0 && ((i += s[n - 1].length), e.holes.push(i));
  }
  return e;
};
var Xh = wn.exports;
const qh = gn(Xh);
var ao = ((s) => (
  (s[(s.NONE = 0)] = "NONE"),
  (s[(s.COLOR = 16384)] = "COLOR"),
  (s[(s.STENCIL = 1024)] = "STENCIL"),
  (s[(s.DEPTH = 256)] = "DEPTH"),
  (s[(s.COLOR_DEPTH = 16640)] = "COLOR_DEPTH"),
  (s[(s.COLOR_STENCIL = 17408)] = "COLOR_STENCIL"),
  (s[(s.DEPTH_STENCIL = 1280)] = "DEPTH_STENCIL"),
  (s[(s.ALL = 17664)] = "ALL"),
  s
))(ao || {});
class Kh {
  constructor(t) {
    (this.items = []), (this._name = t);
  }
  emit(t, e, i, n, r, a, o, l) {
    const { name: h, items: c } = this;
    for (let u = 0, d = c.length; u < d; u++) c[u][h](t, e, i, n, r, a, o, l);
    return this;
  }
  add(t) {
    return t[this._name] && (this.remove(t), this.items.push(t)), this;
  }
  remove(t) {
    const e = this.items.indexOf(t);
    return e !== -1 && this.items.splice(e, 1), this;
  }
  contains(t) {
    return this.items.indexOf(t) !== -1;
  }
  removeAll() {
    return (this.items.length = 0), this;
  }
  destroy() {
    this.removeAll(), (this.items = null), (this._name = null);
  }
  get empty() {
    return this.items.length === 0;
  }
  get name() {
    return this._name;
  }
}
const Zh = [
    "init",
    "destroy",
    "contextChange",
    "resolutionChange",
    "reset",
    "renderEnd",
    "renderStart",
    "render",
    "update",
    "postrender",
    "prerender",
  ],
  oo = class lo extends Lt {
    constructor(t) {
      super(),
        (this.runners = Object.create(null)),
        (this.renderPipes = Object.create(null)),
        (this._initOptions = {}),
        (this._systemsHash = Object.create(null)),
        (this.type = t.type),
        (this.name = t.name),
        (this.config = t);
      const e = [...Zh, ...(this.config.runners ?? [])];
      this._addRunners(...e), this._unsafeEvalCheck();
    }
    async init(t = {}) {
      const e = t.skipExtensionImports === !0 ? !0 : t.manageImports === !1;
      await Ih(e),
        this._addSystems(this.config.systems),
        this._addPipes(this.config.renderPipes, this.config.renderPipeAdaptors);
      for (const i in this._systemsHash)
        t = { ...this._systemsHash[i].constructor.defaultOptions, ...t };
      (t = { ...lo.defaultOptions, ...t }),
        (this._roundPixels = t.roundPixels ? 1 : 0);
      for (let i = 0; i < this.runners.init.items.length; i++)
        await this.runners.init.items[i].init(t);
      this._initOptions = t;
    }
    render(t, e) {
      let i = t;
      if (
        (i instanceof gt &&
          ((i = { container: i }),
          e &&
            (et(
              it,
              "passing a second argument is deprecated, please use render options instead"
            ),
            (i.target = e.renderTexture))),
        i.target || (i.target = this.view.renderTarget),
        i.target === this.view.renderTarget &&
          ((this._lastObjectRendered = i.container),
          (i.clearColor = this.background.colorRgba)),
        i.clearColor)
      ) {
        const n = Array.isArray(i.clearColor) && i.clearColor.length === 4;
        i.clearColor = n
          ? i.clearColor
          : nt.shared.setValue(i.clearColor).toArray();
      }
      i.transform ||
        (i.container.updateLocalTransform(),
        (i.transform = i.container.localTransform)),
        this.runners.prerender.emit(i),
        this.runners.renderStart.emit(i),
        this.runners.render.emit(i),
        this.runners.renderEnd.emit(i),
        this.runners.postrender.emit(i);
    }
    resize(t, e, i) {
      const n = this.view.resolution;
      this.view.resize(t, e, i),
        this.emit(
          "resize",
          this.view.screen.width,
          this.view.screen.height,
          this.view.resolution
        ),
        i !== void 0 && i !== n && this.runners.resolutionChange.emit(i);
    }
    clear(t = {}) {
      const e = this;
      t.target || (t.target = e.renderTarget.renderTarget),
        t.clearColor || (t.clearColor = this.background.colorRgba),
        t.clear ?? (t.clear = ao.ALL);
      const { clear: i, clearColor: n, target: r } = t;
      nt.shared.setValue(n ?? this.background.colorRgba),
        e.renderTarget.clear(r, i, nt.shared.toArray());
    }
    get resolution() {
      return this.view.resolution;
    }
    set resolution(t) {
      (this.view.resolution = t), this.runners.resolutionChange.emit(t);
    }
    get width() {
      return this.view.texture.frame.width;
    }
    get height() {
      return this.view.texture.frame.height;
    }
    get canvas() {
      return this.view.canvas;
    }
    get lastObjectRendered() {
      return this._lastObjectRendered;
    }
    get renderingToScreen() {
      return this.renderTarget.renderingToScreen;
    }
    get screen() {
      return this.view.screen;
    }
    _addRunners(...t) {
      t.forEach((e) => {
        this.runners[e] = new Kh(e);
      });
    }
    _addSystems(t) {
      let e;
      for (e in t) {
        const i = t[e];
        this._addSystem(i.value, i.name);
      }
    }
    _addSystem(t, e) {
      const i = new t(this);
      if (this[e]) throw new Error(`Whoops! The name "${e}" is already in use`);
      (this[e] = i), (this._systemsHash[e] = i);
      for (const n in this.runners) this.runners[n].add(i);
      return this;
    }
    _addPipes(t, e) {
      const i = e.reduce((n, r) => ((n[r.name] = r.value), n), {});
      t.forEach((n) => {
        const r = n.value,
          a = n.name,
          o = i[a];
        this.renderPipes[a] = new r(this, o ? new o() : null);
      });
    }
    destroy(t = !1) {
      this.runners.destroy.items.reverse(),
        this.runners.destroy.emit(t),
        Object.values(this.runners).forEach((e) => {
          e.destroy();
        }),
        (this._systemsHash = null),
        (this.renderPipes = null);
    }
    generateTexture(t) {
      return this.textureGenerator.generateTexture(t);
    }
    get roundPixels() {
      return !!this._roundPixels;
    }
    _unsafeEvalCheck() {
      if (!Bh())
        throw new Error(
          "Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support."
        );
    }
  };
oo.defaultOptions = {
  resolution: 1,
  failIfMajorPerformanceCaveat: !1,
  roundPixels: !1,
};
let ho = oo,
  Ms;
function Qh(s) {
  return (
    Ms !== void 0 ||
      (Ms = (() => {
        var e;
        const t = {
          stencil: !0,
          failIfMajorPerformanceCaveat:
            s ?? ho.defaultOptions.failIfMajorPerformanceCaveat,
        };
        try {
          if (!tt.get().getWebGLRenderingContext()) return !1;
          let n = tt.get().createCanvas().getContext("webgl", t);
          const r = !!(
            (e = n == null ? void 0 : n.getContextAttributes()) != null &&
            e.stencil
          );
          if (n) {
            const a = n.getExtension("WEBGL_lose_context");
            a && a.loseContext();
          }
          return (n = null), r;
        } catch {
          return !1;
        }
      })()),
    Ms
  );
}
let Ts;
async function Jh(s = {}) {
  return (
    Ts !== void 0 ||
      (Ts = await (async () => {
        const t = tt.get().getNavigator().gpu;
        if (!t) return !1;
        try {
          return await (await t.requestAdapter(s)).requestDevice(), !0;
        } catch {
          return !1;
        }
      })()),
    Ts
  );
}
const ur = ["webgl", "webgpu", "canvas"];
async function tc(s) {
  let t = [];
  s.preference
    ? (t.push(s.preference),
      ur.forEach((r) => {
        r !== s.preference && t.push(r);
      }))
    : (t = ur.slice());
  let e,
    i = {};
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    if (a === "webgpu" && (await Jh())) {
      const { WebGPURenderer: o } = await Us(async () => {
        const { WebGPURenderer: l } = await import(
          "./WebGPURenderer-D3kmfamk.js"
        );
        return { WebGPURenderer: l };
      }, __vite__mapDeps([3, 2, 4]));
      (e = o), (i = { ...s, ...s.webgpu });
      break;
    } else if (
      a === "webgl" &&
      Qh(
        s.failIfMajorPerformanceCaveat ??
          ho.defaultOptions.failIfMajorPerformanceCaveat
      )
    ) {
      const { WebGLRenderer: o } = await Us(async () => {
        const { WebGLRenderer: l } = await import(
          "./WebGLRenderer-Cla3n4iy.js"
        );
        return { WebGLRenderer: l };
      }, __vite__mapDeps([5, 2, 4]));
      (e = o), (i = { ...s, ...s.webgl });
      break;
    } else if (a === "canvas")
      throw (
        ((i = { ...s }), new Error("CanvasRenderer is not yet implemented"))
      );
  }
  if ((delete i.webgpu, delete i.webgl, !e))
    throw new Error("No available renderer for the current environment");
  const n = new e();
  return await n.init(i), n;
}
const co = "8.5.2";
class uo {
  static init() {
    var t;
    (t = globalThis.__PIXI_APP_INIT__) == null || t.call(globalThis, this, co);
  }
  static destroy() {}
}
uo.extension = L.Application;
class ec {
  constructor(t) {
    this._renderer = t;
  }
  init() {
    var t;
    (t = globalThis.__PIXI_RENDERER_INIT__) == null ||
      t.call(globalThis, this._renderer, co);
  }
  destroy() {
    this._renderer = null;
  }
}
ec.extension = {
  type: [L.WebGLSystem, L.WebGPUSystem],
  name: "initHook",
  priority: -10,
};
const fo = class Qi {
  constructor(...t) {
    (this.stage = new gt()),
      t[0] !== void 0 &&
        et(
          it,
          "Application constructor options are deprecated, please use Application.init() instead."
        );
  }
  async init(t) {
    (t = { ...t }),
      (this.renderer = await tc(t)),
      Qi._plugins.forEach((e) => {
        e.init.call(this, t);
      });
  }
  render() {
    this.renderer.render({ container: this.stage });
  }
  get canvas() {
    return this.renderer.canvas;
  }
  get view() {
    return (
      et(
        it,
        "Application.view is deprecated, please use Application.canvas instead."
      ),
      this.renderer.canvas
    );
  }
  get screen() {
    return this.renderer.screen;
  }
  destroy(t = !1, e = !1) {
    const i = Qi._plugins.slice(0);
    i.reverse(),
      i.forEach((n) => {
        n.destroy.call(this);
      }),
      this.stage.destroy(e),
      (this.stage = null),
      this.renderer.destroy(t),
      (this.renderer = null);
  }
};
fo._plugins = [];
let po = fo;
mt.handleByList(L.Application, po._plugins);
mt.add(uo);
class mo extends Lt {
  constructor() {
    super(...arguments),
      (this.chars = Object.create(null)),
      (this.lineHeight = 0),
      (this.fontFamily = ""),
      (this.fontMetrics = { fontSize: 0, ascent: 0, descent: 0 }),
      (this.baseLineOffset = 0),
      (this.distanceField = { type: "none", range: 0 }),
      (this.pages = []),
      (this.applyFillAsTint = !0),
      (this.baseMeasurementFontSize = 100),
      (this.baseRenderedFontSize = 100);
  }
  get font() {
    return (
      et(
        it,
        "BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."
      ),
      this.fontFamily
    );
  }
  get pageTextures() {
    return (
      et(
        it,
        "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."
      ),
      this.pages
    );
  }
  get size() {
    return (
      et(
        it,
        "BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."
      ),
      this.fontMetrics.fontSize
    );
  }
  get distanceFieldRange() {
    return (
      et(
        it,
        "BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."
      ),
      this.distanceField.range
    );
  }
  get distanceFieldType() {
    return (
      et(
        it,
        "BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."
      ),
      this.distanceField.type
    );
  }
  destroy(t = !1) {
    var e;
    this.emit("destroy", this), this.removeAllListeners();
    for (const i in this.chars)
      (e = this.chars[i].texture) == null || e.destroy();
    (this.chars = null),
      t &&
        (this.pages.forEach((i) => i.texture.destroy(!0)), (this.pages = null));
  }
}
const go = class Ji {
  constructor(t, e, i, n) {
    (this.uid = lt("fillGradient")),
      (this.type = "linear"),
      (this.gradientStops = []),
      (this._styleKey = null),
      (this.x0 = t),
      (this.y0 = e),
      (this.x1 = i),
      (this.y1 = n);
  }
  addColorStop(t, e) {
    return (
      this.gradientStops.push({
        offset: t,
        color: nt.shared.setValue(e).toHexa(),
      }),
      (this._styleKey = null),
      this
    );
  }
  buildLinearGradient() {
    const t = Ji.defaultTextureSize,
      { gradientStops: e } = this,
      i = tt.get().createCanvas();
    (i.width = t), (i.height = t);
    const n = i.getContext("2d"),
      r = n.createLinearGradient(0, 0, Ji.defaultTextureSize, 1);
    for (let g = 0; g < e.length; g++) {
      const m = e[g];
      r.addColorStop(m.offset, m.color);
    }
    (n.fillStyle = r),
      n.fillRect(0, 0, t, t),
      (this.texture = new W({
        source: new Ne({
          resource: i,
          addressModeU: "clamp-to-edge",
          addressModeV: "repeat",
        }),
      }));
    const { x0: a, y0: o, x1: l, y1: h } = this,
      c = new j(),
      u = l - a,
      d = h - o,
      f = Math.sqrt(u * u + d * d),
      p = Math.atan2(d, u);
    c.translate(-a, -o),
      c.scale(1 / t, 1 / t),
      c.rotate(-p),
      c.scale(256 / f, 1),
      (this.transform = c),
      (this._styleKey = null);
  }
  get styleKey() {
    if (this._styleKey) return this._styleKey;
    const t = this.gradientStops.map((n) => `${n.offset}-${n.color}`).join("-"),
      e = this.texture.uid,
      i = this.transform.toArray().join("-");
    return `fill-gradient-${this.uid}-${t}-${e}-${i}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`;
  }
};
go.defaultTextureSize = 256;
let fs = go;
const dr = {
  repeat: { addressModeU: "repeat", addressModeV: "repeat" },
  "repeat-x": { addressModeU: "repeat", addressModeV: "clamp-to-edge" },
  "repeat-y": { addressModeU: "clamp-to-edge", addressModeV: "repeat" },
  "no-repeat": { addressModeU: "clamp-to-edge", addressModeV: "clamp-to-edge" },
};
class Js {
  constructor(t, e) {
    (this.uid = lt("fillPattern")),
      (this.transform = new j()),
      (this._styleKey = null),
      (this.texture = t),
      this.transform.scale(1 / t.frame.width, 1 / t.frame.height),
      e &&
        ((t.source.style.addressModeU = dr[e].addressModeU),
        (t.source.style.addressModeV = dr[e].addressModeV));
  }
  setTransform(t) {
    const e = this.texture;
    this.transform.copyFrom(t),
      this.transform.invert(),
      this.transform.scale(1 / e.frame.width, 1 / e.frame.height),
      (this._styleKey = null);
  }
  get styleKey() {
    return this._styleKey
      ? this._styleKey
      : ((this._styleKey = `fill-pattern-${this.uid}-${
          this.texture.uid
        }-${this.transform.toArray().join("-")}`),
        this._styleKey);
  }
}
var sc = nc,
  Ai = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
  ic = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
function nc(s) {
  var t = [];
  return (
    s.replace(ic, function (e, i, n) {
      var r = i.toLowerCase();
      for (
        n = ac(n),
          r == "m" &&
            n.length > 2 &&
            (t.push([i].concat(n.splice(0, 2))),
            (r = "l"),
            (i = i == "m" ? "l" : "L"));
        ;

      ) {
        if (n.length == Ai[r]) return n.unshift(i), t.push(n);
        if (n.length < Ai[r]) throw new Error("malformed path data");
        t.push([i].concat(n.splice(0, Ai[r])));
      }
    }),
    t
  );
}
var rc = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
function ac(s) {
  var t = s.match(rc);
  return t ? t.map(Number) : [];
}
const oc = gn(sc);
function lc(s, t) {
  const e = oc(s),
    i = [];
  let n = null,
    r = 0,
    a = 0;
  for (let o = 0; o < e.length; o++) {
    const l = e[o],
      h = l[0],
      c = l;
    switch (h) {
      case "M":
        (r = c[1]), (a = c[2]), t.moveTo(r, a);
        break;
      case "m":
        (r += c[1]), (a += c[2]), t.moveTo(r, a);
        break;
      case "H":
        (r = c[1]), t.lineTo(r, a);
        break;
      case "h":
        (r += c[1]), t.lineTo(r, a);
        break;
      case "V":
        (a = c[1]), t.lineTo(r, a);
        break;
      case "v":
        (a += c[1]), t.lineTo(r, a);
        break;
      case "L":
        (r = c[1]), (a = c[2]), t.lineTo(r, a);
        break;
      case "l":
        (r += c[1]), (a += c[2]), t.lineTo(r, a);
        break;
      case "C":
        (r = c[5]), (a = c[6]), t.bezierCurveTo(c[1], c[2], c[3], c[4], r, a);
        break;
      case "c":
        t.bezierCurveTo(
          r + c[1],
          a + c[2],
          r + c[3],
          a + c[4],
          r + c[5],
          a + c[6]
        ),
          (r += c[5]),
          (a += c[6]);
        break;
      case "S":
        (r = c[3]), (a = c[4]), t.bezierCurveToShort(c[1], c[2], r, a);
        break;
      case "s":
        t.bezierCurveToShort(r + c[1], a + c[2], r + c[3], a + c[4]),
          (r += c[3]),
          (a += c[4]);
        break;
      case "Q":
        (r = c[3]), (a = c[4]), t.quadraticCurveTo(c[1], c[2], r, a);
        break;
      case "q":
        t.quadraticCurveTo(r + c[1], a + c[2], r + c[3], a + c[4]),
          (r += c[3]),
          (a += c[4]);
        break;
      case "T":
        (r = c[1]), (a = c[2]), t.quadraticCurveToShort(r, a);
        break;
      case "t":
        (r += c[1]), (a += c[2]), t.quadraticCurveToShort(r, a);
        break;
      case "A":
        (r = c[6]), (a = c[7]), t.arcToSvg(c[1], c[2], c[3], c[4], c[5], r, a);
        break;
      case "a":
        (r += c[6]),
          (a += c[7]),
          t.arcToSvg(c[1], c[2], c[3], c[4], c[5], r, a);
        break;
      case "Z":
      case "z":
        t.closePath(),
          i.length > 0 &&
            ((n = i.pop()),
            n ? ((r = n.startX), (a = n.startY)) : ((r = 0), (a = 0))),
          (n = null);
        break;
      default:
        rt(`Unknown SVG path command: ${h}`);
    }
    h !== "Z" &&
      h !== "z" &&
      n === null &&
      ((n = { startX: r, startY: a }), i.push(n));
  }
  return t;
}
class vn {
  constructor(t = 0, e = 0, i = 0) {
    (this.type = "circle"), (this.x = t), (this.y = e), (this.radius = i);
  }
  clone() {
    return new vn(this.x, this.y, this.radius);
  }
  contains(t, e) {
    if (this.radius <= 0) return !1;
    const i = this.radius * this.radius;
    let n = this.x - t,
      r = this.y - e;
    return (n *= n), (r *= r), n + r <= i;
  }
  strokeContains(t, e, i) {
    if (this.radius === 0) return !1;
    const n = this.x - t,
      r = this.y - e,
      a = this.radius,
      o = i / 2,
      l = Math.sqrt(n * n + r * r);
    return l < a + o && l > a - o;
  }
  getBounds(t) {
    return (
      (t = t || new ot()),
      (t.x = this.x - this.radius),
      (t.y = this.y - this.radius),
      (t.width = this.radius * 2),
      (t.height = this.radius * 2),
      t
    );
  }
  copyFrom(t) {
    return (this.x = t.x), (this.y = t.y), (this.radius = t.radius), this;
  }
  copyTo(t) {
    return t.copyFrom(this), t;
  }
  toString() {
    return `[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
  }
}
class An {
  constructor(t = 0, e = 0, i = 0, n = 0) {
    (this.type = "ellipse"),
      (this.x = t),
      (this.y = e),
      (this.halfWidth = i),
      (this.halfHeight = n);
  }
  clone() {
    return new An(this.x, this.y, this.halfWidth, this.halfHeight);
  }
  contains(t, e) {
    if (this.halfWidth <= 0 || this.halfHeight <= 0) return !1;
    let i = (t - this.x) / this.halfWidth,
      n = (e - this.y) / this.halfHeight;
    return (i *= i), (n *= n), i + n <= 1;
  }
  strokeContains(t, e, i) {
    const { halfWidth: n, halfHeight: r } = this;
    if (n <= 0 || r <= 0) return !1;
    const a = i / 2,
      o = n - a,
      l = r - a,
      h = n + a,
      c = r + a,
      u = t - this.x,
      d = e - this.y,
      f = (u * u) / (o * o) + (d * d) / (l * l),
      p = (u * u) / (h * h) + (d * d) / (c * c);
    return f > 1 && p <= 1;
  }
  getBounds(t) {
    return (
      (t = t || new ot()),
      (t.x = this.x - this.halfWidth),
      (t.y = this.y - this.halfHeight),
      (t.width = this.halfWidth * 2),
      (t.height = this.halfHeight * 2),
      t
    );
  }
  copyFrom(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.halfWidth = t.halfWidth),
      (this.halfHeight = t.halfHeight),
      this
    );
  }
  copyTo(t) {
    return t.copyFrom(this), t;
  }
  toString() {
    return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`;
  }
}
function hc(s, t, e, i, n, r) {
  const a = s - e,
    o = t - i,
    l = n - e,
    h = r - i,
    c = a * l + o * h,
    u = l * l + h * h;
  let d = -1;
  u !== 0 && (d = c / u);
  let f, p;
  d < 0
    ? ((f = e), (p = i))
    : d > 1
    ? ((f = n), (p = r))
    : ((f = e + d * l), (p = i + d * h));
  const g = s - f,
    m = t - p;
  return g * g + m * m;
}
class as {
  constructor(...t) {
    this.type = "polygon";
    let e = Array.isArray(t[0]) ? t[0] : t;
    if (typeof e[0] != "number") {
      const i = [];
      for (let n = 0, r = e.length; n < r; n++) i.push(e[n].x, e[n].y);
      e = i;
    }
    (this.points = e), (this.closePath = !0);
  }
  clone() {
    const t = this.points.slice(),
      e = new as(t);
    return (e.closePath = this.closePath), e;
  }
  contains(t, e) {
    let i = !1;
    const n = this.points.length / 2;
    for (let r = 0, a = n - 1; r < n; a = r++) {
      const o = this.points[r * 2],
        l = this.points[r * 2 + 1],
        h = this.points[a * 2],
        c = this.points[a * 2 + 1];
      l > e != c > e && t < (h - o) * ((e - l) / (c - l)) + o && (i = !i);
    }
    return i;
  }
  strokeContains(t, e, i) {
    const n = i / 2,
      r = n * n,
      { points: a } = this,
      o = a.length - (this.closePath ? 0 : 2);
    for (let l = 0; l < o; l += 2) {
      const h = a[l],
        c = a[l + 1],
        u = a[(l + 2) % a.length],
        d = a[(l + 3) % a.length];
      if (hc(t, e, h, c, u, d) <= r) return !0;
    }
    return !1;
  }
  getBounds(t) {
    t = t || new ot();
    const e = this.points;
    let i = 1 / 0,
      n = -1 / 0,
      r = 1 / 0,
      a = -1 / 0;
    for (let o = 0, l = e.length; o < l; o += 2) {
      const h = e[o],
        c = e[o + 1];
      (i = h < i ? h : i),
        (n = h > n ? h : n),
        (r = c < r ? c : r),
        (a = c > a ? c : a);
    }
    return (t.x = i), (t.width = n - i), (t.y = r), (t.height = a - r), t;
  }
  copyFrom(t) {
    return (
      (this.points = t.points.slice()), (this.closePath = t.closePath), this
    );
  }
  copyTo(t) {
    return t.copyFrom(this), t;
  }
  toString() {
    return `[pixi.js/math:PolygoncloseStroke=${
      this.closePath
    }points=${this.points.reduce((t, e) => `${t}, ${e}`, "")}]`;
  }
  get lastX() {
    return this.points[this.points.length - 2];
  }
  get lastY() {
    return this.points[this.points.length - 1];
  }
  get x() {
    return this.points[this.points.length - 2];
  }
  get y() {
    return this.points[this.points.length - 1];
  }
}
const Es = (s, t, e, i, n, r) => {
  const a = s - e,
    o = t - i,
    l = Math.sqrt(a * a + o * o);
  return l >= n - r && l <= n + r;
};
class Sn {
  constructor(t = 0, e = 0, i = 0, n = 0, r = 20) {
    (this.type = "roundedRectangle"),
      (this.x = t),
      (this.y = e),
      (this.width = i),
      (this.height = n),
      (this.radius = r);
  }
  getBounds(t) {
    return (
      (t = t || new ot()),
      (t.x = this.x),
      (t.y = this.y),
      (t.width = this.width),
      (t.height = this.height),
      t
    );
  }
  clone() {
    return new Sn(this.x, this.y, this.width, this.height, this.radius);
  }
  copyFrom(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.width = t.width),
      (this.height = t.height),
      this
    );
  }
  copyTo(t) {
    return t.copyFrom(this), t;
  }
  contains(t, e) {
    if (this.width <= 0 || this.height <= 0) return !1;
    if (
      t >= this.x &&
      t <= this.x + this.width &&
      e >= this.y &&
      e <= this.y + this.height
    ) {
      const i = Math.max(
        0,
        Math.min(this.radius, Math.min(this.width, this.height) / 2)
      );
      if (
        (e >= this.y + i && e <= this.y + this.height - i) ||
        (t >= this.x + i && t <= this.x + this.width - i)
      )
        return !0;
      let n = t - (this.x + i),
        r = e - (this.y + i);
      const a = i * i;
      if (
        n * n + r * r <= a ||
        ((n = t - (this.x + this.width - i)), n * n + r * r <= a) ||
        ((r = e - (this.y + this.height - i)), n * n + r * r <= a) ||
        ((n = t - (this.x + i)), n * n + r * r <= a)
      )
        return !0;
    }
    return !1;
  }
  strokeContains(t, e, i) {
    const { x: n, y: r, width: a, height: o, radius: l } = this,
      h = i / 2,
      c = n + l,
      u = r + l,
      d = a - l * 2,
      f = o - l * 2,
      p = n + a,
      g = r + o;
    return (((t >= n - h && t <= n + h) || (t >= p - h && t <= p + h)) &&
      e >= u &&
      e <= u + f) ||
      (((e >= r - h && e <= r + h) || (e >= g - h && e <= g + h)) &&
        t >= c &&
        t <= c + d)
      ? !0
      : (t < c && e < u && Es(t, e, c, u, l, h)) ||
          (t > p - l && e < u && Es(t, e, p - l, u, l, h)) ||
          (t > p - l && e > g - l && Es(t, e, p - l, g - l, l, h)) ||
          (t < c && e > g - l && Es(t, e, c, g - l, l, h));
  }
  toString() {
    return `[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
  }
}
const cc = [
  "precision mediump float;",
  "void main(void){",
  "float test = 0.1;",
  "%forloop%",
  "gl_FragColor = vec4(0.0);",
  "}",
].join(`
`);
function uc(s) {
  let t = "";
  for (let e = 0; e < s; ++e)
    e > 0 &&
      (t += `
else `),
      e < s - 1 && (t += `if(test == ${e}.0){}`);
  return t;
}
function dc(s, t) {
  if (s === 0)
    throw new Error(
      "Invalid value of `0` passed to `checkMaxIfStatementsInShader`"
    );
  const e = t.createShader(t.FRAGMENT_SHADER);
  try {
    for (;;) {
      const i = cc.replace(/%forloop%/gi, uc(s));
      if (
        (t.shaderSource(e, i),
        t.compileShader(e),
        !t.getShaderParameter(e, t.COMPILE_STATUS))
      )
        s = (s / 2) | 0;
      else break;
    }
  } finally {
    t.deleteShader(e);
  }
  return s;
}
let Se = null;
function _o() {
  var t;
  if (Se) return Se;
  const s = Ka();
  return (
    (Se = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS)),
    (Se = dc(Se, s)),
    (t = s.getExtension("WEBGL_lose_context")) == null || t.loseContext(),
    Se
  );
}
const yo = {};
function fc(s, t) {
  let e = 2166136261;
  for (let i = 0; i < t; i++)
    (e ^= s[i].uid), (e = Math.imul(e, 16777619)), (e >>>= 0);
  return yo[e] || pc(s, t, e);
}
let Si = 0;
function pc(s, t, e) {
  const i = {};
  let n = 0;
  Si || (Si = _o());
  for (let a = 0; a < Si; a++) {
    const o = a < t ? s[a] : W.EMPTY.source;
    (i[n++] = o.source), (i[n++] = o.style);
  }
  const r = new Ls(i);
  return (yo[e] = r), r;
}
class fr {
  constructor(t) {
    typeof t == "number"
      ? (this.rawBinaryData = new ArrayBuffer(t))
      : t instanceof Uint8Array
      ? (this.rawBinaryData = t.buffer)
      : (this.rawBinaryData = t),
      (this.uint32View = new Uint32Array(this.rawBinaryData)),
      (this.float32View = new Float32Array(this.rawBinaryData)),
      (this.size = this.rawBinaryData.byteLength);
  }
  get int8View() {
    return (
      this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)),
      this._int8View
    );
  }
  get uint8View() {
    return (
      this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)),
      this._uint8View
    );
  }
  get int16View() {
    return (
      this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)),
      this._int16View
    );
  }
  get int32View() {
    return (
      this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)),
      this._int32View
    );
  }
  get float64View() {
    return (
      this._float64Array ||
        (this._float64Array = new Float64Array(this.rawBinaryData)),
      this._float64Array
    );
  }
  get bigUint64View() {
    return (
      this._bigUint64Array ||
        (this._bigUint64Array = new BigUint64Array(this.rawBinaryData)),
      this._bigUint64Array
    );
  }
  view(t) {
    return this[`${t}View`];
  }
  destroy() {
    (this.rawBinaryData = null),
      (this._int8View = null),
      (this._uint8View = null),
      (this._int16View = null),
      (this.uint16View = null),
      (this._int32View = null),
      (this.uint32View = null),
      (this.float32View = null);
  }
  static sizeOf(t) {
    switch (t) {
      case "int8":
      case "uint8":
        return 1;
      case "int16":
      case "uint16":
        return 2;
      case "int32":
      case "uint32":
      case "float32":
        return 4;
      default:
        throw new Error(`${t} isn't a valid view type`);
    }
  }
}
function pr(s, t) {
  const e = (s.byteLength / 8) | 0,
    i = new Float64Array(s, 0, e);
  new Float64Array(t, 0, e).set(i);
  const r = s.byteLength - e * 8;
  if (r > 0) {
    const a = new Uint8Array(s, e * 8, r);
    new Uint8Array(t, e * 8, r).set(a);
  }
}
const mc = { normal: "normal-npm", add: "add-npm", screen: "screen-npm" };
var gc = ((s) => (
  (s[(s.DISABLED = 0)] = "DISABLED"),
  (s[(s.RENDERING_MASK_ADD = 1)] = "RENDERING_MASK_ADD"),
  (s[(s.MASK_ACTIVE = 2)] = "MASK_ACTIVE"),
  (s[(s.INVERSE_MASK_ACTIVE = 3)] = "INVERSE_MASK_ACTIVE"),
  (s[(s.RENDERING_MASK_REMOVE = 4)] = "RENDERING_MASK_REMOVE"),
  (s[(s.NONE = 5)] = "NONE"),
  s
))(gc || {});
function mr(s, t) {
  return (t.alphaMode === "no-premultiply-alpha" && mc[s]) || s;
}
class _c {
  constructor() {
    (this.ids = Object.create(null)), (this.textures = []), (this.count = 0);
  }
  clear() {
    for (let t = 0; t < this.count; t++) {
      const e = this.textures[t];
      (this.textures[t] = null), (this.ids[e.uid] = null);
    }
    this.count = 0;
  }
}
class yc {
  constructor() {
    (this.renderPipeId = "batch"),
      (this.action = "startBatch"),
      (this.start = 0),
      (this.size = 0),
      (this.textures = new _c()),
      (this.blendMode = "normal"),
      (this.canBundle = !0);
  }
  destroy() {
    (this.textures = null),
      (this.gpuBindGroup = null),
      (this.bindGroup = null),
      (this.batcher = null);
  }
}
const xo = [];
let tn = 0;
function gr() {
  return tn > 0 ? xo[--tn] : new yc();
}
function _r(s) {
  xo[tn++] = s;
}
let Ze = 0;
const bo = class $s {
  constructor(t = {}) {
    (this.uid = lt("batcher")),
      (this.dirty = !0),
      (this.batchIndex = 0),
      (this.batches = []),
      (this._elements = []),
      ($s.defaultOptions.maxTextures = $s.defaultOptions.maxTextures ?? _o()),
      (t = { ...$s.defaultOptions, ...t });
    const {
      maxTextures: e,
      attributesInitialSize: i,
      indicesInitialSize: n,
    } = t;
    (this.attributeBuffer = new fr(i * 4)),
      (this.indexBuffer = new Uint16Array(n)),
      (this.maxTextures = e);
  }
  begin() {
    (this.elementSize = 0),
      (this.elementStart = 0),
      (this.indexSize = 0),
      (this.attributeSize = 0);
    for (let t = 0; t < this.batchIndex; t++) _r(this.batches[t]);
    (this.batchIndex = 0),
      (this._batchIndexStart = 0),
      (this._batchIndexSize = 0),
      (this.dirty = !0);
  }
  add(t) {
    (this._elements[this.elementSize++] = t),
      (t._indexStart = this.indexSize),
      (t._attributeStart = this.attributeSize),
      (t._batcher = this),
      (this.indexSize += t.indexSize),
      (this.attributeSize += t.attributeSize * this.vertexSize);
  }
  checkAndUpdateTexture(t, e) {
    const i = t._batch.textures.ids[e._source.uid];
    return !i && i !== 0 ? !1 : ((t._textureId = i), (t.texture = e), !0);
  }
  updateElement(t) {
    this.dirty = !0;
    const e = this.attributeBuffer;
    t.packAsQuad
      ? this.packQuadAttributes(
          t,
          e.float32View,
          e.uint32View,
          t._attributeStart,
          t._textureId
        )
      : this.packAttributes(
          t,
          e.float32View,
          e.uint32View,
          t._attributeStart,
          t._textureId
        );
  }
  break(t) {
    const e = this._elements;
    if (!e[this.elementStart]) return;
    let i = gr(),
      n = i.textures;
    n.clear();
    const r = e[this.elementStart];
    let a = mr(r.blendMode, r.texture._source);
    this.attributeSize * 4 > this.attributeBuffer.size &&
      this._resizeAttributeBuffer(this.attributeSize * 4),
      this.indexSize > this.indexBuffer.length &&
        this._resizeIndexBuffer(this.indexSize);
    const o = this.attributeBuffer.float32View,
      l = this.attributeBuffer.uint32View,
      h = this.indexBuffer;
    let c = this._batchIndexSize,
      u = this._batchIndexStart,
      d = "startBatch";
    const f = this.maxTextures;
    for (let p = this.elementStart; p < this.elementSize; ++p) {
      const g = e[p];
      e[p] = null;
      const _ = g.texture._source,
        y = mr(g.blendMode, _),
        x = a !== y;
      if (_._batchTick === Ze && !x) {
        (g._textureId = _._textureBindLocation),
          (c += g.indexSize),
          g.packAsQuad
            ? (this.packQuadAttributes(
                g,
                o,
                l,
                g._attributeStart,
                g._textureId
              ),
              this.packQuadIndex(
                h,
                g._indexStart,
                g._attributeStart / this.vertexSize
              ))
            : (this.packAttributes(g, o, l, g._attributeStart, g._textureId),
              this.packIndex(
                g,
                h,
                g._indexStart,
                g._attributeStart / this.vertexSize
              )),
          (g._batch = i);
        continue;
      }
      (_._batchTick = Ze),
        (n.count >= f || x) &&
          (this._finishBatch(i, u, c - u, n, a, t, d),
          (d = "renderBatch"),
          (u = c),
          (a = y),
          (i = gr()),
          (n = i.textures),
          n.clear(),
          ++Ze),
        (g._textureId = _._textureBindLocation = n.count),
        (n.ids[_.uid] = n.count),
        (n.textures[n.count++] = _),
        (g._batch = i),
        (c += g.indexSize),
        g.packAsQuad
          ? (this.packQuadAttributes(g, o, l, g._attributeStart, g._textureId),
            this.packQuadIndex(
              h,
              g._indexStart,
              g._attributeStart / this.vertexSize
            ))
          : (this.packAttributes(g, o, l, g._attributeStart, g._textureId),
            this.packIndex(
              g,
              h,
              g._indexStart,
              g._attributeStart / this.vertexSize
            ));
    }
    n.count > 0 && (this._finishBatch(i, u, c - u, n, a, t, d), (u = c), ++Ze),
      (this.elementStart = this.elementSize),
      (this._batchIndexStart = u),
      (this._batchIndexSize = c);
  }
  _finishBatch(t, e, i, n, r, a, o) {
    (t.gpuBindGroup = null),
      (t.bindGroup = null),
      (t.action = o),
      (t.batcher = this),
      (t.textures = n),
      (t.blendMode = r),
      (t.start = e),
      (t.size = i),
      ++Ze,
      (this.batches[this.batchIndex++] = t),
      a.add(t);
  }
  finish(t) {
    this.break(t);
  }
  ensureAttributeBuffer(t) {
    t * 4 <= this.attributeBuffer.size || this._resizeAttributeBuffer(t * 4);
  }
  ensureIndexBuffer(t) {
    t <= this.indexBuffer.length || this._resizeIndexBuffer(t);
  }
  _resizeAttributeBuffer(t) {
    const e = Math.max(t, this.attributeBuffer.size * 2),
      i = new fr(e);
    pr(this.attributeBuffer.rawBinaryData, i.rawBinaryData),
      (this.attributeBuffer = i);
  }
  _resizeIndexBuffer(t) {
    const e = this.indexBuffer;
    let i = Math.max(t, e.length * 1.5);
    i += i % 2;
    const n = i > 65535 ? new Uint32Array(i) : new Uint16Array(i);
    if (n.BYTES_PER_ELEMENT !== e.BYTES_PER_ELEMENT)
      for (let r = 0; r < e.length; r++) n[r] = e[r];
    else pr(e.buffer, n.buffer);
    this.indexBuffer = n;
  }
  packQuadIndex(t, e, i) {
    (t[e] = i + 0),
      (t[e + 1] = i + 1),
      (t[e + 2] = i + 2),
      (t[e + 3] = i + 0),
      (t[e + 4] = i + 2),
      (t[e + 5] = i + 3);
  }
  packIndex(t, e, i, n) {
    const r = t.indices,
      a = t.indexSize,
      o = t.indexOffset,
      l = t.attributeOffset;
    for (let h = 0; h < a; h++) e[i++] = n + r[h + o] - l;
  }
  destroy() {
    for (let t = 0; t < this.batches.length; t++) _r(this.batches[t]);
    this.batches = null;
    for (let t = 0; t < this._elements.length; t++)
      this._elements[t]._batch = null;
    (this._elements = null),
      (this.indexBuffer = null),
      this.attributeBuffer.destroy(),
      (this.attributeBuffer = null);
  }
};
bo.defaultOptions = {
  maxTextures: null,
  attributesInitialSize: 4,
  indicesInitialSize: 6,
};
let xc = bo;
var yt = ((s) => (
  (s[(s.MAP_READ = 1)] = "MAP_READ"),
  (s[(s.MAP_WRITE = 2)] = "MAP_WRITE"),
  (s[(s.COPY_SRC = 4)] = "COPY_SRC"),
  (s[(s.COPY_DST = 8)] = "COPY_DST"),
  (s[(s.INDEX = 16)] = "INDEX"),
  (s[(s.VERTEX = 32)] = "VERTEX"),
  (s[(s.UNIFORM = 64)] = "UNIFORM"),
  (s[(s.STORAGE = 128)] = "STORAGE"),
  (s[(s.INDIRECT = 256)] = "INDIRECT"),
  (s[(s.QUERY_RESOLVE = 512)] = "QUERY_RESOLVE"),
  (s[(s.STATIC = 1024)] = "STATIC"),
  s
))(yt || {});
class ps extends Lt {
  constructor(t) {
    let { data: e, size: i } = t;
    const { usage: n, label: r, shrinkToFit: a } = t;
    super(),
      (this.uid = lt("buffer")),
      (this._resourceType = "buffer"),
      (this._resourceId = lt("resource")),
      (this._touched = 0),
      (this._updateID = 1),
      (this.shrinkToFit = !0),
      (this.destroyed = !1),
      e instanceof Array && (e = new Float32Array(e)),
      (this._data = e),
      (i = i ?? (e == null ? void 0 : e.byteLength));
    const o = !!e;
    (this.descriptor = { size: i, usage: n, mappedAtCreation: o, label: r }),
      (this.shrinkToFit = a ?? !0);
  }
  get data() {
    return this._data;
  }
  set data(t) {
    this.setDataWithSize(t, t.length, !0);
  }
  get static() {
    return !!(this.descriptor.usage & yt.STATIC);
  }
  set static(t) {
    t
      ? (this.descriptor.usage |= yt.STATIC)
      : (this.descriptor.usage &= ~yt.STATIC);
  }
  setDataWithSize(t, e, i) {
    if (
      (this._updateID++,
      (this._updateSize = e * t.BYTES_PER_ELEMENT),
      this._data === t)
    ) {
      i && this.emit("update", this);
      return;
    }
    const n = this._data;
    if (((this._data = t), n.length !== t.length)) {
      !this.shrinkToFit && t.byteLength < n.byteLength
        ? i && this.emit("update", this)
        : ((this.descriptor.size = t.byteLength),
          (this._resourceId = lt("resource")),
          this.emit("change", this));
      return;
    }
    i && this.emit("update", this);
  }
  update(t) {
    (this._updateSize = t ?? this._updateSize),
      this._updateID++,
      this.emit("update", this);
  }
  destroy() {
    (this.destroyed = !0),
      this.emit("destroy", this),
      this.emit("change", this),
      (this._data = null),
      (this.descriptor = null),
      this.removeAllListeners();
  }
}
function wo(s, t) {
  if (!(s instanceof ps)) {
    let e = t ? yt.INDEX : yt.VERTEX;
    s instanceof Array &&
      (t
        ? ((s = new Uint32Array(s)), (e = yt.INDEX | yt.COPY_DST))
        : ((s = new Float32Array(s)), (e = yt.VERTEX | yt.COPY_DST))),
      (s = new ps({
        data: s,
        label: t ? "index-mesh-buffer" : "vertex-mesh-buffer",
        usage: e,
      }));
  }
  return s;
}
function bc(s, t, e) {
  const i = s.getAttribute(t);
  if (!i) return (e.minX = 0), (e.minY = 0), (e.maxX = 0), (e.maxY = 0), e;
  const n = i.buffer.data;
  let r = 1 / 0,
    a = 1 / 0,
    o = -1 / 0,
    l = -1 / 0;
  const h = n.BYTES_PER_ELEMENT,
    c = (i.offset || 0) / h,
    u = (i.stride || 2 * 4) / h;
  for (let d = c; d < n.length; d += u) {
    const f = n[d],
      p = n[d + 1];
    f > o && (o = f), p > l && (l = p), f < r && (r = f), p < a && (a = p);
  }
  return (e.minX = r), (e.minY = a), (e.maxX = o), (e.maxY = l), e;
}
function wc(s) {
  return (
    (s instanceof ps || Array.isArray(s) || s.BYTES_PER_ELEMENT) &&
      (s = { buffer: s }),
    (s.buffer = wo(s.buffer, !1)),
    s
  );
}
class vc extends Lt {
  constructor(t = {}) {
    super(),
      (this.uid = lt("geometry")),
      (this._layoutKey = 0),
      (this.instanceCount = 1),
      (this._bounds = new Wt()),
      (this._boundsDirty = !0);
    const { attributes: e, indexBuffer: i, topology: n } = t;
    if (((this.buffers = []), (this.attributes = {}), e))
      for (const r in e) this.addAttribute(r, e[r]);
    (this.instanceCount = t.instanceCount || 1),
      i && this.addIndex(i),
      (this.topology = n || "triangle-list");
  }
  onBufferUpdate() {
    (this._boundsDirty = !0), this.emit("update", this);
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  getIndex() {
    return this.indexBuffer;
  }
  getBuffer(t) {
    return this.getAttribute(t).buffer;
  }
  getSize() {
    for (const t in this.attributes) {
      const e = this.attributes[t];
      return e.buffer.data.length / (e.stride / 4 || e.size);
    }
    return 0;
  }
  addAttribute(t, e) {
    const i = wc(e);
    this.buffers.indexOf(i.buffer) === -1 &&
      (this.buffers.push(i.buffer),
      i.buffer.on("update", this.onBufferUpdate, this),
      i.buffer.on("change", this.onBufferUpdate, this)),
      (this.attributes[t] = i);
  }
  addIndex(t) {
    (this.indexBuffer = wo(t, !0)), this.buffers.push(this.indexBuffer);
  }
  get bounds() {
    return this._boundsDirty
      ? ((this._boundsDirty = !1), bc(this, "aPosition", this._bounds))
      : this._bounds;
  }
  destroy(t = !1) {
    this.emit("destroy", this),
      this.removeAllListeners(),
      t && this.buffers.forEach((e) => e.destroy()),
      (this.attributes = null),
      (this.buffers = null),
      (this.indexBuffer = null),
      (this._bounds = null);
  }
}
const Ac = new Float32Array(1),
  Sc = new Uint32Array(1);
class Cc extends vc {
  constructor() {
    const e = new ps({
        data: Ac,
        label: "attribute-batch-buffer",
        usage: yt.VERTEX | yt.COPY_DST,
        shrinkToFit: !1,
      }),
      i = new ps({
        data: Sc,
        label: "index-batch-buffer",
        usage: yt.INDEX | yt.COPY_DST,
        shrinkToFit: !1,
      }),
      n = 6 * 4;
    super({
      attributes: {
        aPosition: { buffer: e, format: "float32x2", stride: n, offset: 0 },
        aUV: { buffer: e, format: "float32x2", stride: n, offset: 2 * 4 },
        aColor: { buffer: e, format: "unorm8x4", stride: n, offset: 4 * 4 },
        aTextureIdAndRound: {
          buffer: e,
          format: "uint16x2",
          stride: n,
          offset: 5 * 4,
        },
      },
      indexBuffer: i,
    });
  }
}
function yr(s, t, e) {
  if (s)
    for (const i in s) {
      const n = i.toLocaleLowerCase(),
        r = t[n];
      if (r) {
        let a = s[i];
        i === "header" &&
          (a = a
            .replace(/@in\s+[^;]+;\s*/g, "")
            .replace(/@out\s+[^;]+;\s*/g, "")),
          e && r.push(`//----${e}----//`),
          r.push(a);
      } else rt(`${i} placement hook does not exist in shader`);
    }
}
const Pc = /\{\{(.*?)\}\}/g;
function xr(s) {
  var i;
  const t = {};
  return (
    (
      ((i = s.match(Pc)) == null
        ? void 0
        : i.map((n) => n.replace(/[{()}]/g, ""))) ?? []
    ).forEach((n) => {
      t[n] = [];
    }),
    t
  );
}
function br(s, t) {
  let e;
  const i = /@in\s+([^;]+);/g;
  for (; (e = i.exec(s)) !== null; ) t.push(e[1]);
}
function wr(s, t, e = !1) {
  const i = [];
  br(t, i),
    s.forEach((o) => {
      o.header && br(o.header, i);
    });
  const n = i;
  e && n.sort();
  const r = n.map((o, l) => `       @location(${l}) ${o},`).join(`
`);
  let a = t.replace(/@in\s+[^;]+;\s*/g, "");
  return (
    (a = a.replace(
      "{{in}}",
      `
${r}
`
    )),
    a
  );
}
function vr(s, t) {
  let e;
  const i = /@out\s+([^;]+);/g;
  for (; (e = i.exec(s)) !== null; ) t.push(e[1]);
}
function kc(s) {
  const e = /\b(\w+)\s*:/g.exec(s);
  return e ? e[1] : "";
}
function Mc(s) {
  const t = /@.*?\s+/g;
  return s.replace(t, "");
}
function Tc(s, t) {
  const e = [];
  vr(t, e),
    s.forEach((l) => {
      l.header && vr(l.header, e);
    });
  let i = 0;
  const n = e
      .sort()
      .map((l) => (l.indexOf("builtin") > -1 ? l : `@location(${i++}) ${l}`))
      .join(`,
`),
    r = e.sort().map((l) => `       var ${Mc(l)};`).join(`
`),
    a = `return VSOutput(
                ${e.sort().map((l) => ` ${kc(l)}`).join(`,
`)});`;
  let o = t.replace(/@out\s+[^;]+;\s*/g, "");
  return (
    (o = o.replace(
      "{{struct}}",
      `
${n}
`
    )),
    (o = o.replace(
      "{{start}}",
      `
${r}
`
    )),
    (o = o.replace(
      "{{return}}",
      `
${a}
`
    )),
    o
  );
}
function Ar(s, t) {
  let e = s;
  for (const i in t) {
    const n = t[i];
    n.join(`
`).length
      ? (e = e.replace(
          `{{${i}}}`,
          `//-----${i} START-----//
${n.join(`
`)}
//----${i} FINISH----//`
        ))
      : (e = e.replace(`{{${i}}}`, ""));
  }
  return e;
}
const Qt = Object.create(null),
  Ci = new Map();
let Ec = 0;
function Ic({ template: s, bits: t }) {
  const e = vo(s, t);
  if (Qt[e]) return Qt[e];
  const { vertex: i, fragment: n } = Fc(s, t);
  return (Qt[e] = Ao(i, n, t)), Qt[e];
}
function Bc({ template: s, bits: t }) {
  const e = vo(s, t);
  return Qt[e] || (Qt[e] = Ao(s.vertex, s.fragment, t)), Qt[e];
}
function Fc(s, t) {
  const e = t.map((a) => a.vertex).filter((a) => !!a),
    i = t.map((a) => a.fragment).filter((a) => !!a);
  let n = wr(e, s.vertex, !0);
  n = Tc(e, n);
  const r = wr(i, s.fragment, !0);
  return { vertex: n, fragment: r };
}
function vo(s, t) {
  return (
    t
      .map((e) => (Ci.has(e) || Ci.set(e, Ec++), Ci.get(e)))
      .sort((e, i) => e - i)
      .join("-") +
    s.vertex +
    s.fragment
  );
}
function Ao(s, t, e) {
  const i = xr(s),
    n = xr(t);
  return (
    e.forEach((r) => {
      yr(r.vertex, i, r.name), yr(r.fragment, n, r.name);
    }),
    { vertex: Ar(s, i), fragment: Ar(t, n) }
  );
}
const Rc = `
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,
  Lc = `
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,
  $c = `
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,
  Gc = `
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
        
        {{end}}
    }
`,
  Oc = {
    name: "global-uniforms-bit",
    vertex: {
      header: `
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `,
    },
  },
  zc = {
    name: "global-uniforms-bit",
    vertex: {
      header: `
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `,
    },
  };
function Dc({ bits: s, name: t }) {
  const e = Ic({ template: { fragment: Lc, vertex: Rc }, bits: [Oc, ...s] });
  return Ks.from({
    name: t,
    vertex: { source: e.vertex, entryPoint: "main" },
    fragment: { source: e.fragment, entryPoint: "main" },
  });
}
function Uc({ bits: s, name: t }) {
  return new Qa({
    name: t,
    ...Bc({ template: { vertex: $c, fragment: Gc }, bits: [zc, ...s] }),
  });
}
const Nc = {
    name: "color-bit",
    vertex: {
      header: `
            @in aColor: vec4<f32>;
        `,
      main: `
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `,
    },
  },
  Wc = {
    name: "color-bit",
    vertex: {
      header: `
            in vec4 aColor;
        `,
      main: `
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `,
    },
  },
  Pi = {};
function Vc(s) {
  const t = [];
  if (s === 1)
    t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),
      t.push("@group(1) @binding(1) var textureSampler1: sampler;");
  else {
    let e = 0;
    for (let i = 0; i < s; i++)
      t.push(
        `@group(1) @binding(${e++}) var textureSource${i + 1}: texture_2d<f32>;`
      ),
        t.push(
          `@group(1) @binding(${e++}) var textureSampler${i + 1}: sampler;`
        );
  }
  return t.join(`
`);
}
function Hc(s) {
  const t = [];
  if (s === 1)
    t.push(
      "outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);"
    );
  else {
    t.push("switch vTextureId {");
    for (let e = 0; e < s; e++)
      e === s - 1 ? t.push("  default:{") : t.push(`  case ${e}:{`),
        t.push(
          `      outColor = textureSampleGrad(textureSource${
            e + 1
          }, textureSampler${e + 1}, vUV, uvDx, uvDy);`
        ),
        t.push("      break;}");
    t.push("}");
  }
  return t.join(`
`);
}
function jc(s) {
  return (
    Pi[s] ||
      (Pi[s] = {
        name: "texture-batch-bit",
        vertex: {
          header: `
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,
          main: `
                vTextureId = aTextureIdAndRound.y;
            `,
          end: `
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `,
        },
        fragment: {
          header: `
                @in @interpolate(flat) vTextureId: u32;

                ${Vc(s)}
            `,
          main: `
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${Hc(s)}
            `,
        },
      }),
    Pi[s]
  );
}
const ki = {};
function Yc(s) {
  const t = [];
  for (let e = 0; e < s; e++)
    e > 0 && t.push("else"),
      e < s - 1 && t.push(`if(vTextureId < ${e}.5)`),
      t.push("{"),
      t.push(`	outColor = texture(uTextures[${e}], vUV);`),
      t.push("}");
  return t.join(`
`);
}
function Xc(s) {
  return (
    ki[s] ||
      (ki[s] = {
        name: "texture-batch-bit",
        vertex: {
          header: `
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,
          main: `
                vTextureId = aTextureIdAndRound.y;
            `,
          end: `
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `,
        },
        fragment: {
          header: `
                in float vTextureId;

                uniform sampler2D uTextures[${s}];

            `,
          main: `

                ${Yc(s)}
            `,
        },
      }),
    ki[s]
  );
}
const qc = {
    name: "round-pixels-bit",
    vertex: {
      header: `
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `,
    },
  },
  Kc = {
    name: "round-pixels-bit",
    vertex: {
      header: `   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `,
    },
  },
  Sr = {};
function Zc(s) {
  let t = Sr[s];
  if (t) return t;
  const e = new Int32Array(s);
  for (let i = 0; i < s; i++) e[i] = i;
  return (
    (t = Sr[s] =
      new so(
        { uTextures: { value: e, type: "i32", size: s } },
        { isStatic: !0 }
      )),
    t
  );
}
class Qc extends bn {
  constructor(t) {
    const e = Uc({ name: "batch", bits: [Wc, Xc(t), Kc] }),
      i = Dc({ name: "batch", bits: [Nc, jc(t), qc] });
    super({ glProgram: e, gpuProgram: i, resources: { batchSamplers: Zc(t) } });
  }
}
let Cr = null;
const So = class Co extends xc {
  constructor() {
    super(...arguments),
      (this.geometry = new Cc()),
      (this.shader = Cr || (Cr = new Qc(this.maxTextures))),
      (this.name = Co.extension.name),
      (this.vertexSize = 6);
  }
  packAttributes(t, e, i, n, r) {
    const a = (r << 16) | (t.roundPixels & 65535),
      o = t.transform,
      l = o.a,
      h = o.b,
      c = o.c,
      u = o.d,
      d = o.tx,
      f = o.ty,
      { positions: p, uvs: g } = t,
      m = t.color,
      _ = t.attributeOffset,
      y = _ + t.attributeSize;
    for (let x = _; x < y; x++) {
      const b = x * 2,
        C = p[b],
        F = p[b + 1];
      (e[n++] = l * C + c * F + d),
        (e[n++] = u * F + h * C + f),
        (e[n++] = g[b]),
        (e[n++] = g[b + 1]),
        (i[n++] = m),
        (i[n++] = a);
    }
  }
  packQuadAttributes(t, e, i, n, r) {
    const a = t.texture,
      o = t.transform,
      l = o.a,
      h = o.b,
      c = o.c,
      u = o.d,
      d = o.tx,
      f = o.ty,
      p = t.bounds,
      g = p.maxX,
      m = p.minX,
      _ = p.maxY,
      y = p.minY,
      x = a.uvs,
      b = t.color,
      C = (r << 16) | (t.roundPixels & 65535);
    (e[n + 0] = l * m + c * y + d),
      (e[n + 1] = u * y + h * m + f),
      (e[n + 2] = x.x0),
      (e[n + 3] = x.y0),
      (i[n + 4] = b),
      (i[n + 5] = C),
      (e[n + 6] = l * g + c * y + d),
      (e[n + 7] = u * y + h * g + f),
      (e[n + 8] = x.x1),
      (e[n + 9] = x.y1),
      (i[n + 10] = b),
      (i[n + 11] = C),
      (e[n + 12] = l * g + c * _ + d),
      (e[n + 13] = u * _ + h * g + f),
      (e[n + 14] = x.x2),
      (e[n + 15] = x.y2),
      (i[n + 16] = b),
      (i[n + 17] = C),
      (e[n + 18] = l * m + c * _ + d),
      (e[n + 19] = u * _ + h * m + f),
      (e[n + 20] = x.x3),
      (e[n + 21] = x.y3),
      (i[n + 22] = b),
      (i[n + 23] = C);
  }
};
So.extension = { type: [L.Batcher], name: "default" };
let Jc = So;
function tu(s, t, e, i, n, r, a, o = null) {
  let l = 0;
  (e *= t), (n *= r);
  const h = o.a,
    c = o.b,
    u = o.c,
    d = o.d,
    f = o.tx,
    p = o.ty;
  for (; l < a; ) {
    const g = s[e],
      m = s[e + 1];
    (i[n] = h * g + u * m + f),
      (i[n + 1] = c * g + d * m + p),
      (n += r),
      (e += t),
      l++;
  }
}
function eu(s, t, e, i) {
  let n = 0;
  for (t *= e; n < i; ) (s[t] = 0), (s[t + 1] = 0), (t += e), n++;
}
function Po(s, t, e, i, n) {
  const r = t.a,
    a = t.b,
    o = t.c,
    l = t.d,
    h = t.tx,
    c = t.ty;
  (e = e || 0), (i = i || 2), (n = n || s.length / i - e);
  let u = e * i;
  for (let d = 0; d < n; d++) {
    const f = s[u],
      p = s[u + 1];
    (s[u] = r * f + o * p + h), (s[u + 1] = a * f + l * p + c), (u += i);
  }
}
function su(s, t) {
  if (s === 16777215 || !t) return t;
  if (t === 16777215 || !s) return s;
  const e = (s >> 16) & 255,
    i = (s >> 8) & 255,
    n = s & 255,
    r = (t >> 16) & 255,
    a = (t >> 8) & 255,
    o = t & 255,
    l = (e * r) / 255,
    h = (i * a) / 255,
    c = (n * o) / 255;
  return (l << 16) + (h << 8) + c;
}
const iu = new j();
class ko {
  constructor() {
    (this.packAsQuad = !1),
      (this.batcherName = "default"),
      (this.applyTransform = !0),
      (this.roundPixels = 0),
      (this._batcher = null),
      (this._batch = null);
  }
  get uvs() {
    return this.geometryData.uvs;
  }
  get positions() {
    return this.geometryData.vertices;
  }
  get indices() {
    return this.geometryData.indices;
  }
  get blendMode() {
    return this.applyTransform ? this.renderable.groupBlendMode : "normal";
  }
  get color() {
    const t = this.baseColor,
      e = (t >> 16) | (t & 65280) | ((t & 255) << 16),
      i = this.renderable;
    return i
      ? su(e, i.groupColor) + ((this.alpha * i.groupAlpha * 255) << 24)
      : e + ((this.alpha * 255) << 24);
  }
  get transform() {
    var t;
    return ((t = this.renderable) == null ? void 0 : t.groupTransform) || iu;
  }
  copyTo(t) {
    (t.indexOffset = this.indexOffset),
      (t.indexSize = this.indexSize),
      (t.attributeOffset = this.attributeOffset),
      (t.attributeSize = this.attributeSize),
      (t.baseColor = this.baseColor),
      (t.alpha = this.alpha),
      (t.texture = this.texture),
      (t.geometryData = this.geometryData);
  }
  reset() {
    (this.applyTransform = !0), (this.renderable = null);
  }
}
const ms = {
    extension: { type: L.ShapeBuilder, name: "circle" },
    build(s, t) {
      let e, i, n, r, a, o;
      if (s.type === "circle") {
        const b = s;
        (e = b.x), (i = b.y), (a = o = b.radius), (n = r = 0);
      } else if (s.type === "ellipse") {
        const b = s;
        (e = b.x),
          (i = b.y),
          (a = b.halfWidth),
          (o = b.halfHeight),
          (n = r = 0);
      } else {
        const b = s,
          C = b.width / 2,
          F = b.height / 2;
        (e = b.x + C),
          (i = b.y + F),
          (a = o = Math.max(0, Math.min(b.radius, Math.min(C, F)))),
          (n = C - a),
          (r = F - o);
      }
      if (!(a >= 0 && o >= 0 && n >= 0 && r >= 0)) return t;
      const l = Math.ceil(2.3 * Math.sqrt(a + o)),
        h = l * 8 + (n ? 4 : 0) + (r ? 4 : 0);
      if (h === 0) return t;
      if (l === 0)
        return (
          (t[0] = t[6] = e + n),
          (t[1] = t[3] = i + r),
          (t[2] = t[4] = e - n),
          (t[5] = t[7] = i - r),
          t
        );
      let c = 0,
        u = l * 4 + (n ? 2 : 0) + 2,
        d = u,
        f = h,
        p = n + a,
        g = r,
        m = e + p,
        _ = e - p,
        y = i + g;
      if (((t[c++] = m), (t[c++] = y), (t[--u] = y), (t[--u] = _), r)) {
        const b = i - g;
        (t[d++] = _), (t[d++] = b), (t[--f] = b), (t[--f] = m);
      }
      for (let b = 1; b < l; b++) {
        const C = (Math.PI / 2) * (b / l),
          F = n + Math.cos(C) * a,
          k = r + Math.sin(C) * o,
          T = e + F,
          w = e - F,
          A = i + k,
          N = i - k;
        (t[c++] = T),
          (t[c++] = A),
          (t[--u] = A),
          (t[--u] = w),
          (t[d++] = w),
          (t[d++] = N),
          (t[--f] = N),
          (t[--f] = T);
      }
      (p = n), (g = r + o), (m = e + p), (_ = e - p), (y = i + g);
      const x = i - g;
      return (
        (t[c++] = m),
        (t[c++] = y),
        (t[--f] = x),
        (t[--f] = m),
        n && ((t[c++] = _), (t[c++] = y), (t[--f] = x), (t[--f] = _)),
        t
      );
    },
    triangulate(s, t, e, i, n, r) {
      if (s.length === 0) return;
      let a = 0,
        o = 0;
      for (let c = 0; c < s.length; c += 2) (a += s[c]), (o += s[c + 1]);
      (a /= s.length / 2), (o /= s.length / 2);
      let l = i;
      (t[l * e] = a), (t[l * e + 1] = o);
      const h = l++;
      for (let c = 0; c < s.length; c += 2)
        (t[l * e] = s[c]),
          (t[l * e + 1] = s[c + 1]),
          c > 0 && ((n[r++] = l), (n[r++] = h), (n[r++] = l - 1)),
          l++;
      (n[r++] = h + 1), (n[r++] = h), (n[r++] = l - 1);
    },
  },
  nu = { ...ms, extension: { ...ms.extension, name: "ellipse" } },
  ru = { ...ms, extension: { ...ms.extension, name: "roundedRectangle" } },
  au = 1e-4,
  Pr = 1e-4;
function ou(s) {
  const t = s.length;
  if (t < 6) return 1;
  let e = 0;
  for (let i = 0, n = s[t - 2], r = s[t - 1]; i < t; i += 2) {
    const a = s[i],
      o = s[i + 1];
    (e += (a - n) * (o + r)), (n = a), (r = o);
  }
  return e < 0 ? -1 : 1;
}
function kr(s, t, e, i, n, r, a, o) {
  const l = s - e * n,
    h = t - i * n,
    c = s + e * r,
    u = t + i * r;
  let d, f;
  a ? ((d = i), (f = -e)) : ((d = -i), (f = e));
  const p = l + d,
    g = h + f,
    m = c + d,
    _ = u + f;
  return o.push(p, g), o.push(m, _), 2;
}
function oe(s, t, e, i, n, r, a, o) {
  const l = e - s,
    h = i - t;
  let c = Math.atan2(l, h),
    u = Math.atan2(n - s, r - t);
  o && c < u ? (c += Math.PI * 2) : !o && c > u && (u += Math.PI * 2);
  let d = c;
  const f = u - c,
    p = Math.abs(f),
    g = Math.sqrt(l * l + h * h),
    m = (((15 * p * Math.sqrt(g)) / Math.PI) >> 0) + 1,
    _ = f / m;
  if (((d += _), o)) {
    a.push(s, t), a.push(e, i);
    for (let y = 1, x = d; y < m; y++, x += _)
      a.push(s, t), a.push(s + Math.sin(x) * g, t + Math.cos(x) * g);
    a.push(s, t), a.push(n, r);
  } else {
    a.push(e, i), a.push(s, t);
    for (let y = 1, x = d; y < m; y++, x += _)
      a.push(s + Math.sin(x) * g, t + Math.cos(x) * g), a.push(s, t);
    a.push(n, r), a.push(s, t);
  }
  return m * 2;
}
function lu(s, t, e, i, n, r, a, o, l) {
  const h = au;
  if (s.length === 0) return;
  const c = t;
  let u = c.alignment;
  if (t.alignment !== 0.5) {
    let X = ou(s);
    u = (u - 0.5) * X + 0.5;
  }
  const d = new ft(s[0], s[1]),
    f = new ft(s[s.length - 2], s[s.length - 1]),
    p = i,
    g = Math.abs(d.x - f.x) < h && Math.abs(d.y - f.y) < h;
  if (p) {
    (s = s.slice()),
      g && (s.pop(), s.pop(), f.set(s[s.length - 2], s[s.length - 1]));
    const X = (d.x + f.x) * 0.5,
      xt = (f.y + d.y) * 0.5;
    s.unshift(X, xt), s.push(X, xt);
  }
  const m = n,
    _ = s.length / 2;
  let y = s.length;
  const x = m.length / 2,
    b = c.width / 2,
    C = b * b,
    F = c.miterLimit * c.miterLimit;
  let k = s[0],
    T = s[1],
    w = s[2],
    A = s[3],
    N = 0,
    at = 0,
    E = -(T - A),
    v = k - w,
    G = 0,
    V = 0,
    st = Math.sqrt(E * E + v * v);
  (E /= st), (v /= st), (E *= b), (v *= b);
  const we = u,
    $ = (1 - we) * 2,
    D = we * 2;
  p ||
    (c.cap === "round"
      ? (y +=
          oe(
            k - E * ($ - D) * 0.5,
            T - v * ($ - D) * 0.5,
            k - E * $,
            T - v * $,
            k + E * D,
            T + v * D,
            m,
            !0
          ) + 2)
      : c.cap === "square" && (y += kr(k, T, E, v, $, D, !0, m))),
    m.push(k - E * $, T - v * $),
    m.push(k + E * D, T + v * D);
  for (let X = 1; X < _ - 1; ++X) {
    (k = s[(X - 1) * 2]),
      (T = s[(X - 1) * 2 + 1]),
      (w = s[X * 2]),
      (A = s[X * 2 + 1]),
      (N = s[(X + 1) * 2]),
      (at = s[(X + 1) * 2 + 1]),
      (E = -(T - A)),
      (v = k - w),
      (st = Math.sqrt(E * E + v * v)),
      (E /= st),
      (v /= st),
      (E *= b),
      (v *= b),
      (G = -(A - at)),
      (V = w - N),
      (st = Math.sqrt(G * G + V * V)),
      (G /= st),
      (V /= st),
      (G *= b),
      (V *= b);
    const xt = w - k,
      z = T - A,
      U = w - N,
      je = at - A,
      Ln = xt * U + z * je,
      gs = z * U - je * xt,
      Ye = gs < 0;
    if (Math.abs(gs) < 0.001 * Math.abs(Ln)) {
      m.push(w - E * $, A - v * $),
        m.push(w + E * D, A + v * D),
        Ln >= 0 &&
          (c.join === "round"
            ? (y +=
                oe(w, A, w - E * $, A - v * $, w - G * $, A - V * $, m, !1) + 4)
            : (y += 2),
          m.push(w - G * D, A - V * D),
          m.push(w + G * $, A + V * $));
      continue;
    }
    const $n = (-E + k) * (-v + A) - (-E + w) * (-v + T),
      Gn = (-G + N) * (-V + A) - (-G + w) * (-V + at),
      _s = (xt * Gn - U * $n) / gs,
      ys = (je * $n - z * Gn) / gs,
      ii = (_s - w) * (_s - w) + (ys - A) * (ys - A),
      ie = w + (_s - w) * $,
      ne = A + (ys - A) * $,
      re = w - (_s - w) * D,
      ae = A - (ys - A) * D,
      Yo = Math.min(xt * xt + z * z, U * U + je * je),
      On = Ye ? $ : D,
      Xo = Yo + On * On * C;
    ii <= Xo
      ? c.join === "bevel" || ii / C > F
        ? (Ye
            ? (m.push(ie, ne),
              m.push(w + E * D, A + v * D),
              m.push(ie, ne),
              m.push(w + G * D, A + V * D))
            : (m.push(w - E * $, A - v * $),
              m.push(re, ae),
              m.push(w - G * $, A - V * $),
              m.push(re, ae)),
          (y += 2))
        : c.join === "round"
        ? Ye
          ? (m.push(ie, ne),
            m.push(w + E * D, A + v * D),
            (y +=
              oe(w, A, w + E * D, A + v * D, w + G * D, A + V * D, m, !0) + 4),
            m.push(ie, ne),
            m.push(w + G * D, A + V * D))
          : (m.push(w - E * $, A - v * $),
            m.push(re, ae),
            (y +=
              oe(w, A, w - E * $, A - v * $, w - G * $, A - V * $, m, !1) + 4),
            m.push(w - G * $, A - V * $),
            m.push(re, ae))
        : (m.push(ie, ne), m.push(re, ae))
      : (m.push(w - E * $, A - v * $),
        m.push(w + E * D, A + v * D),
        c.join === "round"
          ? Ye
            ? (y +=
                oe(w, A, w + E * D, A + v * D, w + G * D, A + V * D, m, !0) + 2)
            : (y +=
                oe(w, A, w - E * $, A - v * $, w - G * $, A - V * $, m, !1) + 2)
          : c.join === "miter" &&
            ii / C <= F &&
            (Ye
              ? (m.push(re, ae), m.push(re, ae))
              : (m.push(ie, ne), m.push(ie, ne)),
            (y += 2)),
        m.push(w - G * $, A - V * $),
        m.push(w + G * D, A + V * D),
        (y += 2));
  }
  (k = s[(_ - 2) * 2]),
    (T = s[(_ - 2) * 2 + 1]),
    (w = s[(_ - 1) * 2]),
    (A = s[(_ - 1) * 2 + 1]),
    (E = -(T - A)),
    (v = k - w),
    (st = Math.sqrt(E * E + v * v)),
    (E /= st),
    (v /= st),
    (E *= b),
    (v *= b),
    m.push(w - E * $, A - v * $),
    m.push(w + E * D, A + v * D),
    p ||
      (c.cap === "round"
        ? (y +=
            oe(
              w - E * ($ - D) * 0.5,
              A - v * ($ - D) * 0.5,
              w - E * $,
              A - v * $,
              w + E * D,
              A + v * D,
              m,
              !1
            ) + 2)
        : c.cap === "square" && (y += kr(w, A, E, v, $, D, !1, m)));
  const se = Pr * Pr;
  for (let X = x; X < y + x - 2; ++X)
    (k = m[X * 2]),
      (T = m[X * 2 + 1]),
      (w = m[(X + 1) * 2]),
      (A = m[(X + 1) * 2 + 1]),
      (N = m[(X + 2) * 2]),
      (at = m[(X + 2) * 2 + 1]),
      !(Math.abs(k * (A - at) + w * (at - T) + N * (T - A)) < se) &&
        o.push(X, X + 1, X + 2);
}
function Mo(s, t, e, i, n, r, a) {
  const o = qh(s, t, 2);
  if (!o) return;
  for (let h = 0; h < o.length; h += 3)
    (r[a++] = o[h] + n), (r[a++] = o[h + 1] + n), (r[a++] = o[h + 2] + n);
  let l = n * i;
  for (let h = 0; h < s.length; h += 2)
    (e[l] = s[h]), (e[l + 1] = s[h + 1]), (l += i);
}
const hu = [],
  cu = {
    extension: { type: L.ShapeBuilder, name: "polygon" },
    build(s, t) {
      for (let e = 0; e < s.points.length; e++) t[e] = s.points[e];
      return t;
    },
    triangulate(s, t, e, i, n, r) {
      Mo(s, hu, t, e, i, n, r);
    },
  },
  uu = {
    extension: { type: L.ShapeBuilder, name: "rectangle" },
    build(s, t) {
      const e = s,
        i = e.x,
        n = e.y,
        r = e.width,
        a = e.height;
      return (
        r >= 0 &&
          a >= 0 &&
          ((t[0] = i),
          (t[1] = n),
          (t[2] = i + r),
          (t[3] = n),
          (t[4] = i + r),
          (t[5] = n + a),
          (t[6] = i),
          (t[7] = n + a)),
        t
      );
    },
    triangulate(s, t, e, i, n, r) {
      let a = 0;
      (i *= e),
        (t[i + a] = s[0]),
        (t[i + a + 1] = s[1]),
        (a += e),
        (t[i + a] = s[2]),
        (t[i + a + 1] = s[3]),
        (a += e),
        (t[i + a] = s[6]),
        (t[i + a + 1] = s[7]),
        (a += e),
        (t[i + a] = s[4]),
        (t[i + a + 1] = s[5]),
        (a += e);
      const o = i / e;
      (n[r++] = o),
        (n[r++] = o + 1),
        (n[r++] = o + 2),
        (n[r++] = o + 1),
        (n[r++] = o + 3),
        (n[r++] = o + 2);
    },
  },
  du = {
    extension: { type: L.ShapeBuilder, name: "triangle" },
    build(s, t) {
      return (
        (t[0] = s.x),
        (t[1] = s.y),
        (t[2] = s.x2),
        (t[3] = s.y2),
        (t[4] = s.x3),
        (t[5] = s.y3),
        t
      );
    },
    triangulate(s, t, e, i, n, r) {
      let a = 0;
      (i *= e),
        (t[i + a] = s[0]),
        (t[i + a + 1] = s[1]),
        (a += e),
        (t[i + a] = s[2]),
        (t[i + a + 1] = s[3]),
        (a += e),
        (t[i + a] = s[4]),
        (t[i + a + 1] = s[5]);
      const o = i / e;
      (n[r++] = o), (n[r++] = o + 1), (n[r++] = o + 2);
    },
  },
  ti = {};
mt.handleByMap(L.ShapeBuilder, ti);
mt.add(uu, cu, du, ms, nu, ru);
const fu = new ot();
function pu(s, t) {
  const { geometryData: e, batches: i } = t;
  (i.length = 0),
    (e.indices.length = 0),
    (e.vertices.length = 0),
    (e.uvs.length = 0);
  for (let n = 0; n < s.instructions.length; n++) {
    const r = s.instructions[n];
    if (r.action === "texture") mu(r.data, i, e);
    else if (r.action === "fill" || r.action === "stroke") {
      const a = r.action === "stroke",
        o = r.data.path.shapePath,
        l = r.data.style,
        h = r.data.hole;
      a && h && Mr(h.shapePath, l, null, !0, i, e), Mr(o, l, h, a, i, e);
    }
  }
}
function mu(s, t, e) {
  const { vertices: i, uvs: n, indices: r } = e,
    a = r.length,
    o = i.length / 2,
    l = [],
    h = ti.rectangle,
    c = fu,
    u = s.image;
  (c.x = s.dx), (c.y = s.dy), (c.width = s.dw), (c.height = s.dh);
  const d = s.transform;
  h.build(c, l), d && Po(l, d), h.triangulate(l, i, 2, o, r, a);
  const f = u.uvs;
  n.push(f.x0, f.y0, f.x1, f.y1, f.x3, f.y3, f.x2, f.y2);
  const p = Yt.get(ko);
  (p.indexOffset = a),
    (p.indexSize = r.length - a),
    (p.attributeOffset = o),
    (p.attributeSize = i.length / 2 - o),
    (p.baseColor = s.style),
    (p.alpha = s.alpha),
    (p.texture = u),
    (p.geometryData = e),
    t.push(p);
}
function Mr(s, t, e, i, n, r) {
  const { vertices: a, uvs: o, indices: l } = r,
    h = s.shapePrimitives.length - 1;
  s.shapePrimitives.forEach(({ shape: c, transform: u }, d) => {
    const f = l.length,
      p = a.length / 2,
      g = [],
      m = ti[c.type];
    if ((m.build(c, g), u && Po(g, u), i)) {
      const b = c.closePath ?? !0;
      lu(g, t, !1, b, a, 2, p, l);
    } else if (e && h === d) {
      h !== 0 &&
        console.warn("[Pixi Graphics] only the last shape have be cut out");
      const b = [],
        C = g.slice();
      gu(e.shapePath).forEach((k) => {
        b.push(C.length / 2), C.push(...k);
      }),
        Mo(C, b, a, 2, p, l, f);
    } else m.triangulate(g, a, 2, p, l, f);
    const _ = o.length / 2,
      y = t.texture;
    if (y !== W.WHITE) {
      const b = t.matrix;
      b &&
        (u && b.append(u.clone().invert()),
        tu(a, 2, p, o, _, 2, a.length / 2 - p, b));
    } else eu(o, _, 2, a.length / 2 - p);
    const x = Yt.get(ko);
    (x.indexOffset = f),
      (x.indexSize = l.length - f),
      (x.attributeOffset = p),
      (x.attributeSize = a.length / 2 - p),
      (x.baseColor = t.color),
      (x.alpha = t.alpha),
      (x.texture = y),
      (x.geometryData = r),
      n.push(x);
  });
}
function gu(s) {
  if (!s) return [];
  const t = s.shapePrimitives,
    e = [];
  for (let i = 0; i < t.length; i++) {
    const n = t[i].shape,
      r = [];
    ti[n.type].build(n, r), e.push(r);
  }
  return e;
}
class _u {
  constructor() {
    (this.batches = []),
      (this.geometryData = { vertices: [], uvs: [], indices: [] });
  }
}
class yu {
  constructor() {
    (this.batcher = new Jc()), (this.instructions = new Ra());
  }
  init() {
    this.instructions.reset();
  }
  get geometry() {
    return (
      et(
        Cl,
        "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."
      ),
      this.batcher.geometry
    );
  }
}
const Cn = class en {
  constructor(t) {
    (this._gpuContextHash = {}),
      (this._graphicsDataContextHash = Object.create(null)),
      t.renderableGC.addManagedHash(this, "_gpuContextHash"),
      t.renderableGC.addManagedHash(this, "_graphicsDataContextHash");
  }
  init(t) {
    en.defaultOptions.bezierSmoothness =
      (t == null ? void 0 : t.bezierSmoothness) ??
      en.defaultOptions.bezierSmoothness;
  }
  getContextRenderData(t) {
    return (
      this._graphicsDataContextHash[t.uid] || this._initContextRenderData(t)
    );
  }
  updateGpuContext(t) {
    let e = this._gpuContextHash[t.uid] || this._initContext(t);
    if (t.dirty) {
      e ? this._cleanGraphicsContextData(t) : (e = this._initContext(t)),
        pu(t, e);
      const i = t.batchMode;
      t.customShader || i === "no-batch"
        ? (e.isBatchable = !1)
        : i === "auto" &&
          (e.isBatchable = e.geometryData.vertices.length < 400),
        (t.dirty = !1);
    }
    return e;
  }
  getGpuContext(t) {
    return this._gpuContextHash[t.uid] || this._initContext(t);
  }
  _initContextRenderData(t) {
    const e = Yt.get(yu),
      { batches: i, geometryData: n } = this._gpuContextHash[t.uid],
      r = n.vertices.length,
      a = n.indices.length;
    for (let c = 0; c < i.length; c++) i[c].applyTransform = !1;
    const o = e.batcher;
    o.ensureAttributeBuffer(r), o.ensureIndexBuffer(a), o.begin();
    for (let c = 0; c < i.length; c++) {
      const u = i[c];
      o.add(u);
    }
    o.finish(e.instructions);
    const l = o.geometry;
    l.indexBuffer.setDataWithSize(o.indexBuffer, o.indexSize, !0),
      l.buffers[0].setDataWithSize(
        o.attributeBuffer.float32View,
        o.attributeSize,
        !0
      );
    const h = o.batches;
    for (let c = 0; c < h.length; c++) {
      const u = h[c];
      u.bindGroup = fc(u.textures.textures, u.textures.count);
    }
    return (this._graphicsDataContextHash[t.uid] = e), e;
  }
  _initContext(t) {
    const e = new _u();
    return (
      (e.context = t),
      (this._gpuContextHash[t.uid] = e),
      t.on("destroy", this.onGraphicsContextDestroy, this),
      this._gpuContextHash[t.uid]
    );
  }
  onGraphicsContextDestroy(t) {
    this._cleanGraphicsContextData(t),
      t.off("destroy", this.onGraphicsContextDestroy, this),
      (this._gpuContextHash[t.uid] = null);
  }
  _cleanGraphicsContextData(t) {
    const e = this._gpuContextHash[t.uid];
    e.isBatchable ||
      (this._graphicsDataContextHash[t.uid] &&
        (Yt.return(this.getContextRenderData(t)),
        (this._graphicsDataContextHash[t.uid] = null))),
      e.batches &&
        e.batches.forEach((i) => {
          Yt.return(i);
        });
  }
  destroy() {
    for (const t in this._gpuContextHash)
      this._gpuContextHash[t] &&
        this.onGraphicsContextDestroy(this._gpuContextHash[t].context);
  }
};
Cn.extension = {
  type: [L.WebGLSystem, L.WebGPUSystem, L.CanvasSystem],
  name: "graphicsContext",
};
Cn.defaultOptions = { bezierSmoothness: 0.5 };
let To = Cn;
const xu = 8,
  Is = 11920929e-14,
  bu = 1;
function Eo(s, t, e, i, n, r, a, o, l, h) {
  const u = Math.min(
    0.99,
    Math.max(0, h ?? To.defaultOptions.bezierSmoothness)
  );
  let d = (bu - u) / 1;
  return (d *= d), wu(t, e, i, n, r, a, o, l, s, d), s;
}
function wu(s, t, e, i, n, r, a, o, l, h) {
  sn(s, t, e, i, n, r, a, o, l, h, 0), l.push(a, o);
}
function sn(s, t, e, i, n, r, a, o, l, h, c) {
  if (c > xu) return;
  const u = (s + e) / 2,
    d = (t + i) / 2,
    f = (e + n) / 2,
    p = (i + r) / 2,
    g = (n + a) / 2,
    m = (r + o) / 2,
    _ = (u + f) / 2,
    y = (d + p) / 2,
    x = (f + g) / 2,
    b = (p + m) / 2,
    C = (_ + x) / 2,
    F = (y + b) / 2;
  if (c > 0) {
    let k = a - s,
      T = o - t;
    const w = Math.abs((e - a) * T - (i - o) * k),
      A = Math.abs((n - a) * T - (r - o) * k);
    if (w > Is && A > Is) {
      if ((w + A) * (w + A) <= h * (k * k + T * T)) {
        l.push(C, F);
        return;
      }
    } else if (w > Is) {
      if (w * w <= h * (k * k + T * T)) {
        l.push(C, F);
        return;
      }
    } else if (A > Is) {
      if (A * A <= h * (k * k + T * T)) {
        l.push(C, F);
        return;
      }
    } else if (
      ((k = C - (s + a) / 2), (T = F - (t + o) / 2), k * k + T * T <= h)
    ) {
      l.push(C, F);
      return;
    }
  }
  sn(s, t, u, d, _, y, C, F, l, h, c + 1),
    sn(C, F, x, b, g, m, a, o, l, h, c + 1);
}
const vu = 8,
  Au = 11920929e-14,
  Su = 1;
function Cu(s, t, e, i, n, r, a, o) {
  const h = Math.min(
    0.99,
    Math.max(0, o ?? To.defaultOptions.bezierSmoothness)
  );
  let c = (Su - h) / 1;
  return (c *= c), Pu(t, e, i, n, r, a, s, c), s;
}
function Pu(s, t, e, i, n, r, a, o) {
  nn(a, s, t, e, i, n, r, o, 0), a.push(n, r);
}
function nn(s, t, e, i, n, r, a, o, l) {
  if (l > vu) return;
  const h = (t + i) / 2,
    c = (e + n) / 2,
    u = (i + r) / 2,
    d = (n + a) / 2,
    f = (h + u) / 2,
    p = (c + d) / 2;
  let g = r - t,
    m = a - e;
  const _ = Math.abs((i - r) * m - (n - a) * g);
  if (_ > Au) {
    if (_ * _ <= o * (g * g + m * m)) {
      s.push(f, p);
      return;
    }
  } else if (
    ((g = f - (t + r) / 2), (m = p - (e + a) / 2), g * g + m * m <= o)
  ) {
    s.push(f, p);
    return;
  }
  nn(s, t, e, h, c, f, p, o, l + 1), nn(s, f, p, u, d, r, a, o, l + 1);
}
function Io(s, t, e, i, n, r, a, o) {
  let l = Math.abs(n - r);
  ((!a && n > r) || (a && r > n)) && (l = 2 * Math.PI - l),
    (o = o || Math.max(6, Math.floor(6 * Math.pow(i, 1 / 3) * (l / Math.PI)))),
    (o = Math.max(o, 3));
  let h = l / o,
    c = n;
  h *= a ? -1 : 1;
  for (let u = 0; u < o + 1; u++) {
    const d = Math.cos(c),
      f = Math.sin(c),
      p = t + d * i,
      g = e + f * i;
    s.push(p, g), (c += h);
  }
}
function ku(s, t, e, i, n, r) {
  const a = s[s.length - 2],
    l = s[s.length - 1] - e,
    h = a - t,
    c = n - e,
    u = i - t,
    d = Math.abs(l * u - h * c);
  if (d < 1e-8 || r === 0) {
    (s[s.length - 2] !== t || s[s.length - 1] !== e) && s.push(t, e);
    return;
  }
  const f = l * l + h * h,
    p = c * c + u * u,
    g = l * c + h * u,
    m = (r * Math.sqrt(f)) / d,
    _ = (r * Math.sqrt(p)) / d,
    y = (m * g) / f,
    x = (_ * g) / p,
    b = m * u + _ * h,
    C = m * c + _ * l,
    F = h * (_ + y),
    k = l * (_ + y),
    T = u * (m + x),
    w = c * (m + x),
    A = Math.atan2(k - C, F - b),
    N = Math.atan2(w - C, T - b);
  Io(s, b + t, C + e, r, A, N, h * c > u * l);
}
const os = Math.PI * 2,
  Mi = { centerX: 0, centerY: 0, ang1: 0, ang2: 0 },
  Ti = ({ x: s, y: t }, e, i, n, r, a, o, l) => {
    (s *= e), (t *= i);
    const h = n * s - r * t,
      c = r * s + n * t;
    return (l.x = h + a), (l.y = c + o), l;
  };
function Mu(s, t) {
  const e =
      t === -1.5707963267948966
        ? -0.551915024494
        : 1.3333333333333333 * Math.tan(t / 4),
    i = t === 1.5707963267948966 ? 0.551915024494 : e,
    n = Math.cos(s),
    r = Math.sin(s),
    a = Math.cos(s + t),
    o = Math.sin(s + t);
  return [
    { x: n - r * i, y: r + n * i },
    { x: a + o * i, y: o - a * i },
    { x: a, y: o },
  ];
}
const Tr = (s, t, e, i) => {
    const n = s * i - t * e < 0 ? -1 : 1;
    let r = s * e + t * i;
    return r > 1 && (r = 1), r < -1 && (r = -1), n * Math.acos(r);
  },
  Tu = (s, t, e, i, n, r, a, o, l, h, c, u, d) => {
    const f = Math.pow(n, 2),
      p = Math.pow(r, 2),
      g = Math.pow(c, 2),
      m = Math.pow(u, 2);
    let _ = f * p - f * m - p * g;
    _ < 0 && (_ = 0),
      (_ /= f * m + p * g),
      (_ = Math.sqrt(_) * (a === o ? -1 : 1));
    const y = ((_ * n) / r) * u,
      x = ((_ * -r) / n) * c,
      b = h * y - l * x + (s + e) / 2,
      C = l * y + h * x + (t + i) / 2,
      F = (c - y) / n,
      k = (u - x) / r,
      T = (-c - y) / n,
      w = (-u - x) / r,
      A = Tr(1, 0, F, k);
    let N = Tr(F, k, T, w);
    o === 0 && N > 0 && (N -= os),
      o === 1 && N < 0 && (N += os),
      (d.centerX = b),
      (d.centerY = C),
      (d.ang1 = A),
      (d.ang2 = N);
  };
function Eu(s, t, e, i, n, r, a, o = 0, l = 0, h = 0) {
  if (r === 0 || a === 0) return;
  const c = Math.sin((o * os) / 360),
    u = Math.cos((o * os) / 360),
    d = (u * (t - i)) / 2 + (c * (e - n)) / 2,
    f = (-c * (t - i)) / 2 + (u * (e - n)) / 2;
  if (d === 0 && f === 0) return;
  (r = Math.abs(r)), (a = Math.abs(a));
  const p = Math.pow(d, 2) / Math.pow(r, 2) + Math.pow(f, 2) / Math.pow(a, 2);
  p > 1 && ((r *= Math.sqrt(p)), (a *= Math.sqrt(p))),
    Tu(t, e, i, n, r, a, l, h, c, u, d, f, Mi);
  let { ang1: g, ang2: m } = Mi;
  const { centerX: _, centerY: y } = Mi;
  let x = Math.abs(m) / (os / 4);
  Math.abs(1 - x) < 1e-7 && (x = 1);
  const b = Math.max(Math.ceil(x), 1);
  m /= b;
  let C = s[s.length - 2],
    F = s[s.length - 1];
  const k = { x: 0, y: 0 };
  for (let T = 0; T < b; T++) {
    const w = Mu(g, m),
      { x: A, y: N } = Ti(w[0], r, a, u, c, _, y, k),
      { x: at, y: E } = Ti(w[1], r, a, u, c, _, y, k),
      { x: v, y: G } = Ti(w[2], r, a, u, c, _, y, k);
    Eo(s, C, F, A, N, at, E, v, G), (C = v), (F = G), (g += m);
  }
}
function Iu(s, t, e) {
  const i = (a, o) => {
      const l = o.x - a.x,
        h = o.y - a.y,
        c = Math.sqrt(l * l + h * h),
        u = l / c,
        d = h / c;
      return { len: c, nx: u, ny: d };
    },
    n = (a, o) => {
      a === 0 ? s.moveTo(o.x, o.y) : s.lineTo(o.x, o.y);
    };
  let r = t[t.length - 1];
  for (let a = 0; a < t.length; a++) {
    const o = t[a % t.length],
      l = o.radius ?? e;
    if (l <= 0) {
      n(a, o), (r = o);
      continue;
    }
    const h = t[(a + 1) % t.length],
      c = i(o, r),
      u = i(o, h);
    if (c.len < 1e-4 || u.len < 1e-4) {
      n(a, o), (r = o);
      continue;
    }
    let d = Math.asin(c.nx * u.ny - c.ny * u.nx),
      f = 1,
      p = !1;
    c.nx * u.nx - c.ny * -u.ny < 0
      ? d < 0
        ? (d = Math.PI + d)
        : ((d = Math.PI - d), (f = -1), (p = !0))
      : d > 0 && ((f = -1), (p = !0));
    const g = d / 2;
    let m,
      _ = Math.abs((Math.cos(g) * l) / Math.sin(g));
    _ > Math.min(c.len / 2, u.len / 2)
      ? ((_ = Math.min(c.len / 2, u.len / 2)),
        (m = Math.abs((_ * Math.sin(g)) / Math.cos(g))))
      : (m = l);
    const y = o.x + u.nx * _ + -u.ny * m * f,
      x = o.y + u.ny * _ + u.nx * m * f,
      b = Math.atan2(c.ny, c.nx) + (Math.PI / 2) * f,
      C = Math.atan2(u.ny, u.nx) - (Math.PI / 2) * f;
    a === 0 && s.moveTo(y + Math.cos(b) * m, x + Math.sin(b) * m),
      s.arc(y, x, m, b, C, p),
      (r = o);
  }
}
function Bu(s, t, e, i) {
  const n = (o, l) => Math.sqrt((o.x - l.x) ** 2 + (o.y - l.y) ** 2),
    r = (o, l, h) => ({ x: o.x + (l.x - o.x) * h, y: o.y + (l.y - o.y) * h }),
    a = t.length;
  for (let o = 0; o < a; o++) {
    const l = t[(o + 1) % a],
      h = l.radius ?? e;
    if (h <= 0) {
      o === 0 ? s.moveTo(l.x, l.y) : s.lineTo(l.x, l.y);
      continue;
    }
    const c = t[o],
      u = t[(o + 2) % a],
      d = n(c, l);
    let f;
    if (d < 1e-4) f = l;
    else {
      const m = Math.min(d / 2, h);
      f = r(l, c, m / d);
    }
    const p = n(u, l);
    let g;
    if (p < 1e-4) g = l;
    else {
      const m = Math.min(p / 2, h);
      g = r(l, u, m / p);
    }
    o === 0 ? s.moveTo(f.x, f.y) : s.lineTo(f.x, f.y),
      s.quadraticCurveTo(l.x, l.y, g.x, g.y, i);
  }
}
const Fu = new ot();
class Ru {
  constructor(t) {
    (this.shapePrimitives = []),
      (this._currentPoly = null),
      (this._bounds = new Wt()),
      (this._graphicsPath2D = t);
  }
  moveTo(t, e) {
    return this.startPoly(t, e), this;
  }
  lineTo(t, e) {
    this._ensurePoly();
    const i = this._currentPoly.points,
      n = i[i.length - 2],
      r = i[i.length - 1];
    return (n !== t || r !== e) && i.push(t, e), this;
  }
  arc(t, e, i, n, r, a) {
    this._ensurePoly(!1);
    const o = this._currentPoly.points;
    return Io(o, t, e, i, n, r, a), this;
  }
  arcTo(t, e, i, n, r) {
    this._ensurePoly();
    const a = this._currentPoly.points;
    return ku(a, t, e, i, n, r), this;
  }
  arcToSvg(t, e, i, n, r, a, o) {
    const l = this._currentPoly.points;
    return (
      Eu(
        l,
        this._currentPoly.lastX,
        this._currentPoly.lastY,
        a,
        o,
        t,
        e,
        i,
        n,
        r
      ),
      this
    );
  }
  bezierCurveTo(t, e, i, n, r, a, o) {
    this._ensurePoly();
    const l = this._currentPoly;
    return (
      Eo(this._currentPoly.points, l.lastX, l.lastY, t, e, i, n, r, a, o), this
    );
  }
  quadraticCurveTo(t, e, i, n, r) {
    this._ensurePoly();
    const a = this._currentPoly;
    return Cu(this._currentPoly.points, a.lastX, a.lastY, t, e, i, n, r), this;
  }
  closePath() {
    return this.endPoly(!0), this;
  }
  addPath(t, e) {
    this.endPoly(), e && !e.isIdentity() && ((t = t.clone(!0)), t.transform(e));
    for (let i = 0; i < t.instructions.length; i++) {
      const n = t.instructions[i];
      this[n.action](...n.data);
    }
    return this;
  }
  finish(t = !1) {
    this.endPoly(t);
  }
  rect(t, e, i, n, r) {
    return this.drawShape(new ot(t, e, i, n), r), this;
  }
  circle(t, e, i, n) {
    return this.drawShape(new vn(t, e, i), n), this;
  }
  poly(t, e, i) {
    const n = new as(t);
    return (n.closePath = e), this.drawShape(n, i), this;
  }
  regularPoly(t, e, i, n, r = 0, a) {
    n = Math.max(n | 0, 3);
    const o = (-1 * Math.PI) / 2 + r,
      l = (Math.PI * 2) / n,
      h = [];
    for (let c = 0; c < n; c++) {
      const u = c * l + o;
      h.push(t + i * Math.cos(u), e + i * Math.sin(u));
    }
    return this.poly(h, !0, a), this;
  }
  roundPoly(t, e, i, n, r, a = 0, o) {
    if (((n = Math.max(n | 0, 3)), r <= 0))
      return this.regularPoly(t, e, i, n, a);
    const l = i * Math.sin(Math.PI / n) - 0.001;
    r = Math.min(r, l);
    const h = (-1 * Math.PI) / 2 + a,
      c = (Math.PI * 2) / n,
      u = ((n - 2) * Math.PI) / n / 2;
    for (let d = 0; d < n; d++) {
      const f = d * c + h,
        p = t + i * Math.cos(f),
        g = e + i * Math.sin(f),
        m = f + Math.PI + u,
        _ = f - Math.PI - u,
        y = p + r * Math.cos(m),
        x = g + r * Math.sin(m),
        b = p + r * Math.cos(_),
        C = g + r * Math.sin(_);
      d === 0 ? this.moveTo(y, x) : this.lineTo(y, x),
        this.quadraticCurveTo(p, g, b, C, o);
    }
    return this.closePath();
  }
  roundShape(t, e, i = !1, n) {
    return t.length < 3
      ? this
      : (i ? Bu(this, t, e, n) : Iu(this, t, e), this.closePath());
  }
  filletRect(t, e, i, n, r) {
    if (r === 0) return this.rect(t, e, i, n);
    const a = Math.min(i, n) / 2,
      o = Math.min(a, Math.max(-a, r)),
      l = t + i,
      h = e + n,
      c = o < 0 ? -o : 0,
      u = Math.abs(o);
    return this.moveTo(t, e + u)
      .arcTo(t + c, e + c, t + u, e, u)
      .lineTo(l - u, e)
      .arcTo(l - c, e + c, l, e + u, u)
      .lineTo(l, h - u)
      .arcTo(l - c, h - c, t + i - u, h, u)
      .lineTo(t + u, h)
      .arcTo(t + c, h - c, t, h - u, u)
      .closePath();
  }
  chamferRect(t, e, i, n, r, a) {
    if (r <= 0) return this.rect(t, e, i, n);
    const o = Math.min(r, Math.min(i, n) / 2),
      l = t + i,
      h = e + n,
      c = [
        t + o,
        e,
        l - o,
        e,
        l,
        e + o,
        l,
        h - o,
        l - o,
        h,
        t + o,
        h,
        t,
        h - o,
        t,
        e + o,
      ];
    for (let u = c.length - 1; u >= 2; u -= 2)
      c[u] === c[u - 2] && c[u - 1] === c[u - 3] && c.splice(u - 1, 2);
    return this.poly(c, !0, a);
  }
  ellipse(t, e, i, n, r) {
    return this.drawShape(new An(t, e, i, n), r), this;
  }
  roundRect(t, e, i, n, r, a) {
    return this.drawShape(new Sn(t, e, i, n, r), a), this;
  }
  drawShape(t, e) {
    return (
      this.endPoly(),
      this.shapePrimitives.push({ shape: t, transform: e }),
      this
    );
  }
  startPoly(t, e) {
    let i = this._currentPoly;
    return (
      i && this.endPoly(),
      (i = new as()),
      i.points.push(t, e),
      (this._currentPoly = i),
      this
    );
  }
  endPoly(t = !1) {
    const e = this._currentPoly;
    return (
      e &&
        e.points.length > 2 &&
        ((e.closePath = t), this.shapePrimitives.push({ shape: e })),
      (this._currentPoly = null),
      this
    );
  }
  _ensurePoly(t = !0) {
    if (!this._currentPoly && ((this._currentPoly = new as()), t)) {
      const e = this.shapePrimitives[this.shapePrimitives.length - 1];
      if (e) {
        let i = e.shape.x,
          n = e.shape.y;
        if (e.transform && !e.transform.isIdentity()) {
          const r = e.transform,
            a = i;
          (i = r.a * i + r.c * n + r.tx), (n = r.b * a + r.d * n + r.ty);
        }
        this._currentPoly.points.push(i, n);
      } else this._currentPoly.points.push(0, 0);
    }
  }
  buildPath() {
    const t = this._graphicsPath2D;
    (this.shapePrimitives.length = 0), (this._currentPoly = null);
    for (let e = 0; e < t.instructions.length; e++) {
      const i = t.instructions[e];
      this[i.action](...i.data);
    }
    this.finish();
  }
  get bounds() {
    const t = this._bounds;
    t.clear();
    const e = this.shapePrimitives;
    for (let i = 0; i < e.length; i++) {
      const n = e[i],
        r = n.shape.getBounds(Fu);
      n.transform ? t.addRect(r, n.transform) : t.addRect(r);
    }
    return t;
  }
}
class Oe {
  constructor(t) {
    (this.instructions = []),
      (this.uid = lt("graphicsPath")),
      (this._dirty = !0),
      typeof t == "string"
        ? lc(t, this)
        : (this.instructions = (t == null ? void 0 : t.slice()) ?? []);
  }
  get shapePath() {
    return (
      this._shapePath || (this._shapePath = new Ru(this)),
      this._dirty && ((this._dirty = !1), this._shapePath.buildPath()),
      this._shapePath
    );
  }
  addPath(t, e) {
    return (
      (t = t.clone()),
      this.instructions.push({ action: "addPath", data: [t, e] }),
      (this._dirty = !0),
      this
    );
  }
  arc(...t) {
    return (
      this.instructions.push({ action: "arc", data: t }),
      (this._dirty = !0),
      this
    );
  }
  arcTo(...t) {
    return (
      this.instructions.push({ action: "arcTo", data: t }),
      (this._dirty = !0),
      this
    );
  }
  arcToSvg(...t) {
    return (
      this.instructions.push({ action: "arcToSvg", data: t }),
      (this._dirty = !0),
      this
    );
  }
  bezierCurveTo(...t) {
    return (
      this.instructions.push({ action: "bezierCurveTo", data: t }),
      (this._dirty = !0),
      this
    );
  }
  bezierCurveToShort(t, e, i, n, r) {
    const a = this.instructions[this.instructions.length - 1],
      o = this.getLastPoint(ft.shared);
    let l = 0,
      h = 0;
    if (!a || a.action !== "bezierCurveTo") (l = o.x), (h = o.y);
    else {
      (l = a.data[2]), (h = a.data[3]);
      const c = o.x,
        u = o.y;
      (l = c + (c - l)), (h = u + (u - h));
    }
    return (
      this.instructions.push({
        action: "bezierCurveTo",
        data: [l, h, t, e, i, n, r],
      }),
      (this._dirty = !0),
      this
    );
  }
  closePath() {
    return (
      this.instructions.push({ action: "closePath", data: [] }),
      (this._dirty = !0),
      this
    );
  }
  ellipse(...t) {
    return (
      this.instructions.push({ action: "ellipse", data: t }),
      (this._dirty = !0),
      this
    );
  }
  lineTo(...t) {
    return (
      this.instructions.push({ action: "lineTo", data: t }),
      (this._dirty = !0),
      this
    );
  }
  moveTo(...t) {
    return this.instructions.push({ action: "moveTo", data: t }), this;
  }
  quadraticCurveTo(...t) {
    return (
      this.instructions.push({ action: "quadraticCurveTo", data: t }),
      (this._dirty = !0),
      this
    );
  }
  quadraticCurveToShort(t, e, i) {
    const n = this.instructions[this.instructions.length - 1],
      r = this.getLastPoint(ft.shared);
    let a = 0,
      o = 0;
    if (!n || n.action !== "quadraticCurveTo") (a = r.x), (o = r.y);
    else {
      (a = n.data[0]), (o = n.data[1]);
      const l = r.x,
        h = r.y;
      (a = l + (l - a)), (o = h + (h - o));
    }
    return (
      this.instructions.push({
        action: "quadraticCurveTo",
        data: [a, o, t, e, i],
      }),
      (this._dirty = !0),
      this
    );
  }
  rect(t, e, i, n, r) {
    return (
      this.instructions.push({ action: "rect", data: [t, e, i, n, r] }),
      (this._dirty = !0),
      this
    );
  }
  circle(t, e, i, n) {
    return (
      this.instructions.push({ action: "circle", data: [t, e, i, n] }),
      (this._dirty = !0),
      this
    );
  }
  roundRect(...t) {
    return (
      this.instructions.push({ action: "roundRect", data: t }),
      (this._dirty = !0),
      this
    );
  }
  poly(...t) {
    return (
      this.instructions.push({ action: "poly", data: t }),
      (this._dirty = !0),
      this
    );
  }
  regularPoly(...t) {
    return (
      this.instructions.push({ action: "regularPoly", data: t }),
      (this._dirty = !0),
      this
    );
  }
  roundPoly(...t) {
    return (
      this.instructions.push({ action: "roundPoly", data: t }),
      (this._dirty = !0),
      this
    );
  }
  roundShape(...t) {
    return (
      this.instructions.push({ action: "roundShape", data: t }),
      (this._dirty = !0),
      this
    );
  }
  filletRect(...t) {
    return (
      this.instructions.push({ action: "filletRect", data: t }),
      (this._dirty = !0),
      this
    );
  }
  chamferRect(...t) {
    return (
      this.instructions.push({ action: "chamferRect", data: t }),
      (this._dirty = !0),
      this
    );
  }
  star(t, e, i, n, r, a, o) {
    r = r || n / 2;
    const l = (-1 * Math.PI) / 2 + a,
      h = i * 2,
      c = (Math.PI * 2) / h,
      u = [];
    for (let d = 0; d < h; d++) {
      const f = d % 2 ? r : n,
        p = d * c + l;
      u.push(t + f * Math.cos(p), e + f * Math.sin(p));
    }
    return this.poly(u, !0, o), this;
  }
  clone(t = !1) {
    const e = new Oe();
    if (!t) e.instructions = this.instructions.slice();
    else
      for (let i = 0; i < this.instructions.length; i++) {
        const n = this.instructions[i];
        e.instructions.push({ action: n.action, data: n.data.slice() });
      }
    return e;
  }
  clear() {
    return (this.instructions.length = 0), (this._dirty = !0), this;
  }
  transform(t) {
    if (t.isIdentity()) return this;
    const e = t.a,
      i = t.b,
      n = t.c,
      r = t.d,
      a = t.tx,
      o = t.ty;
    let l = 0,
      h = 0,
      c = 0,
      u = 0,
      d = 0,
      f = 0,
      p = 0,
      g = 0;
    for (let m = 0; m < this.instructions.length; m++) {
      const _ = this.instructions[m],
        y = _.data;
      switch (_.action) {
        case "moveTo":
        case "lineTo":
          (l = y[0]),
            (h = y[1]),
            (y[0] = e * l + n * h + a),
            (y[1] = i * l + r * h + o);
          break;
        case "bezierCurveTo":
          (c = y[0]),
            (u = y[1]),
            (d = y[2]),
            (f = y[3]),
            (l = y[4]),
            (h = y[5]),
            (y[0] = e * c + n * u + a),
            (y[1] = i * c + r * u + o),
            (y[2] = e * d + n * f + a),
            (y[3] = i * d + r * f + o),
            (y[4] = e * l + n * h + a),
            (y[5] = i * l + r * h + o);
          break;
        case "quadraticCurveTo":
          (c = y[0]),
            (u = y[1]),
            (l = y[2]),
            (h = y[3]),
            (y[0] = e * c + n * u + a),
            (y[1] = i * c + r * u + o),
            (y[2] = e * l + n * h + a),
            (y[3] = i * l + r * h + o);
          break;
        case "arcToSvg":
          (l = y[5]),
            (h = y[6]),
            (p = y[0]),
            (g = y[1]),
            (y[0] = e * p + n * g),
            (y[1] = i * p + r * g),
            (y[5] = e * l + n * h + a),
            (y[6] = i * l + r * h + o);
          break;
        case "circle":
          y[4] = Qe(y[3], t);
          break;
        case "rect":
          y[4] = Qe(y[4], t);
          break;
        case "ellipse":
          y[8] = Qe(y[8], t);
          break;
        case "roundRect":
          y[5] = Qe(y[5], t);
          break;
        case "addPath":
          y[0].transform(t);
          break;
        case "poly":
          y[2] = Qe(y[2], t);
          break;
        default:
          rt("unknown transform action", _.action);
          break;
      }
    }
    return (this._dirty = !0), this;
  }
  get bounds() {
    return this.shapePath.bounds;
  }
  getLastPoint(t) {
    let e = this.instructions.length - 1,
      i = this.instructions[e];
    if (!i) return (t.x = 0), (t.y = 0), t;
    for (; i.action === "closePath"; ) {
      if ((e--, e < 0)) return (t.x = 0), (t.y = 0), t;
      i = this.instructions[e];
    }
    switch (i.action) {
      case "moveTo":
      case "lineTo":
        (t.x = i.data[0]), (t.y = i.data[1]);
        break;
      case "quadraticCurveTo":
        (t.x = i.data[2]), (t.y = i.data[3]);
        break;
      case "bezierCurveTo":
        (t.x = i.data[4]), (t.y = i.data[5]);
        break;
      case "arc":
      case "arcToSvg":
        (t.x = i.data[5]), (t.y = i.data[6]);
        break;
      case "addPath":
        i.data[0].getLastPoint(t);
        break;
    }
    return t;
  }
}
function Qe(s, t) {
  return s ? s.prepend(t) : t.clone();
}
function Lu(s, t) {
  if (typeof s == "string") {
    const i = document.createElement("div");
    (i.innerHTML = s.trim()), (s = i.querySelector("svg"));
  }
  const e = { context: t, path: new Oe() };
  return Bo(s, e, null, null), t;
}
function Bo(s, t, e, i) {
  const n = s.children,
    { fillStyle: r, strokeStyle: a } = $u(s);
  r && e ? (e = { ...e, ...r }) : r && (e = r),
    a && i ? (i = { ...i, ...a }) : a && (i = a),
    (t.context.fillStyle = e),
    (t.context.strokeStyle = i);
  let o, l, h, c, u, d, f, p, g, m, _, y, x, b, C, F, k;
  switch (s.nodeName.toLowerCase()) {
    case "path":
      (b = s.getAttribute("d")),
        (C = new Oe(b)),
        t.context.path(C),
        e && t.context.fill(),
        i && t.context.stroke();
      break;
    case "circle":
      (f = ht(s, "cx", 0)),
        (p = ht(s, "cy", 0)),
        (g = ht(s, "r", 0)),
        t.context.ellipse(f, p, g, g),
        e && t.context.fill(),
        i && t.context.stroke();
      break;
    case "rect":
      (o = ht(s, "x", 0)),
        (l = ht(s, "y", 0)),
        (F = ht(s, "width", 0)),
        (k = ht(s, "height", 0)),
        (m = ht(s, "rx", 0)),
        (_ = ht(s, "ry", 0)),
        m || _
          ? t.context.roundRect(o, l, F, k, m || _)
          : t.context.rect(o, l, F, k),
        e && t.context.fill(),
        i && t.context.stroke();
      break;
    case "ellipse":
      (f = ht(s, "cx", 0)),
        (p = ht(s, "cy", 0)),
        (m = ht(s, "rx", 0)),
        (_ = ht(s, "ry", 0)),
        t.context.beginPath(),
        t.context.ellipse(f, p, m, _),
        e && t.context.fill(),
        i && t.context.stroke();
      break;
    case "line":
      (h = ht(s, "x1", 0)),
        (c = ht(s, "y1", 0)),
        (u = ht(s, "x2", 0)),
        (d = ht(s, "y2", 0)),
        t.context.beginPath(),
        t.context.moveTo(h, c),
        t.context.lineTo(u, d),
        i && t.context.stroke();
      break;
    case "polygon":
      (x = s.getAttribute("points")),
        (y = x.match(/\d+/g).map((T) => parseInt(T, 10))),
        t.context.poly(y, !0),
        e && t.context.fill(),
        i && t.context.stroke();
      break;
    case "polyline":
      (x = s.getAttribute("points")),
        (y = x.match(/\d+/g).map((T) => parseInt(T, 10))),
        t.context.poly(y, !1),
        i && t.context.stroke();
      break;
    case "g":
    case "svg":
      break;
    default: {
      console.info(`[SVG parser] <${s.nodeName}> elements unsupported`);
      break;
    }
  }
  for (let T = 0; T < n.length; T++) Bo(n[T], t, e, i);
}
function ht(s, t, e) {
  const i = s.getAttribute(t);
  return i ? Number(i) : e;
}
function $u(s) {
  const t = s.getAttribute("style"),
    e = {},
    i = {};
  let n = !1,
    r = !1;
  if (t) {
    const a = t.split(";");
    for (let o = 0; o < a.length; o++) {
      const l = a[o],
        [h, c] = l.split(":");
      switch (h) {
        case "stroke":
          c !== "none" &&
            ((e.color = nt.shared.setValue(c).toNumber()), (r = !0));
          break;
        case "stroke-width":
          e.width = Number(c);
          break;
        case "fill":
          c !== "none" &&
            ((n = !0), (i.color = nt.shared.setValue(c).toNumber()));
          break;
        case "fill-opacity":
          i.alpha = Number(c);
          break;
        case "stroke-opacity":
          e.alpha = Number(c);
          break;
        case "opacity":
          (i.alpha = Number(c)), (e.alpha = Number(c));
          break;
      }
    }
  } else {
    const a = s.getAttribute("stroke");
    a &&
      a !== "none" &&
      ((r = !0),
      (e.color = nt.shared.setValue(a).toNumber()),
      (e.width = ht(s, "stroke-width", 1)));
    const o = s.getAttribute("fill");
    o &&
      o !== "none" &&
      ((n = !0), (i.color = nt.shared.setValue(o).toNumber()));
  }
  return { strokeStyle: r ? e : null, fillStyle: n ? i : null };
}
function Gu(s) {
  return nt.isColorLike(s);
}
function Er(s) {
  return s instanceof Js;
}
function Ir(s) {
  return s instanceof fs;
}
function Ou(s, t, e) {
  const i = nt.shared.setValue(t ?? 0);
  return (
    (s.color = i.toNumber()),
    (s.alpha = i.alpha === 1 ? e.alpha : i.alpha),
    (s.texture = W.WHITE),
    { ...e, ...s }
  );
}
function Br(s, t, e) {
  return (
    (s.fill = t),
    (s.color = 16777215),
    (s.texture = t.texture),
    (s.matrix = t.transform),
    { ...e, ...s }
  );
}
function Fr(s, t, e) {
  return (
    t.buildLinearGradient(),
    (s.fill = t),
    (s.color = 16777215),
    (s.texture = t.texture),
    (s.matrix = t.transform),
    { ...e, ...s }
  );
}
function zu(s, t) {
  var n;
  const e = { ...t, ...s };
  if (e.texture) {
    if (e.texture !== W.WHITE) {
      const a = ((n = e.matrix) == null ? void 0 : n.invert()) || new j();
      a.translate(e.texture.frame.x, e.texture.frame.y),
        a.scale(1 / e.texture.source.width, 1 / e.texture.source.height),
        (e.matrix = a);
    }
    const r = e.texture.source.style;
    r.addressMode === "clamp-to-edge" &&
      ((r.addressMode = "repeat"), r.update());
  }
  const i = nt.shared.setValue(e.color);
  return (
    (e.alpha *= i.alpha),
    (e.color = i.toNumber()),
    (e.matrix = e.matrix ? e.matrix.clone() : null),
    e
  );
}
function pe(s, t) {
  if (s == null) return null;
  const e = {},
    i = s;
  return Gu(s)
    ? Ou(e, s, t)
    : Er(s)
    ? Br(e, s, t)
    : Ir(s)
    ? Fr(e, s, t)
    : i.fill && Er(i.fill)
    ? Br(i, i.fill, t)
    : i.fill && Ir(i.fill)
    ? Fr(i, i.fill, t)
    : zu(i, t);
}
function Vs(s, t) {
  const { width: e, alignment: i, miterLimit: n, cap: r, join: a, ...o } = t,
    l = pe(s, o);
  return l
    ? { width: e, alignment: i, miterLimit: n, cap: r, join: a, ...l }
    : null;
}
const Du = new ft(),
  Rr = new j(),
  Pn = class zt extends Lt {
    constructor() {
      super(...arguments),
        (this.uid = lt("graphicsContext")),
        (this.dirty = !0),
        (this.batchMode = "auto"),
        (this.instructions = []),
        (this._activePath = new Oe()),
        (this._transform = new j()),
        (this._fillStyle = { ...zt.defaultFillStyle }),
        (this._strokeStyle = { ...zt.defaultStrokeStyle }),
        (this._stateStack = []),
        (this._tick = 0),
        (this._bounds = new Wt()),
        (this._boundsDirty = !0);
    }
    clone() {
      const t = new zt();
      return (
        (t.batchMode = this.batchMode),
        (t.instructions = this.instructions.slice()),
        (t._activePath = this._activePath.clone()),
        (t._transform = this._transform.clone()),
        (t._fillStyle = { ...this._fillStyle }),
        (t._strokeStyle = { ...this._strokeStyle }),
        (t._stateStack = this._stateStack.slice()),
        (t._bounds = this._bounds.clone()),
        (t._boundsDirty = !0),
        t
      );
    }
    get fillStyle() {
      return this._fillStyle;
    }
    set fillStyle(t) {
      this._fillStyle = pe(t, zt.defaultFillStyle);
    }
    get strokeStyle() {
      return this._strokeStyle;
    }
    set strokeStyle(t) {
      this._strokeStyle = Vs(t, zt.defaultStrokeStyle);
    }
    setFillStyle(t) {
      return (this._fillStyle = pe(t, zt.defaultFillStyle)), this;
    }
    setStrokeStyle(t) {
      return (this._strokeStyle = pe(t, zt.defaultStrokeStyle)), this;
    }
    texture(t, e, i, n, r, a) {
      return (
        this.instructions.push({
          action: "texture",
          data: {
            image: t,
            dx: i || 0,
            dy: n || 0,
            dw: r || t.frame.width,
            dh: a || t.frame.height,
            transform: this._transform.clone(),
            alpha: this._fillStyle.alpha,
            style: e ? nt.shared.setValue(e).toNumber() : 16777215,
          },
        }),
        this.onUpdate(),
        this
      );
    }
    beginPath() {
      return (this._activePath = new Oe()), this;
    }
    fill(t, e) {
      let i;
      const n = this.instructions[this.instructions.length - 1];
      return (
        this._tick === 0 && n && n.action === "stroke"
          ? (i = n.data.path)
          : (i = this._activePath.clone()),
        i
          ? (t != null &&
              (e !== void 0 &&
                typeof t == "number" &&
                (et(
                  it,
                  "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"
                ),
                (t = { color: t, alpha: e })),
              (this._fillStyle = pe(t, zt.defaultFillStyle))),
            this.instructions.push({
              action: "fill",
              data: { style: this.fillStyle, path: i },
            }),
            this.onUpdate(),
            this._initNextPathLocation(),
            (this._tick = 0),
            this)
          : this
      );
    }
    _initNextPathLocation() {
      const { x: t, y: e } = this._activePath.getLastPoint(ft.shared);
      this._activePath.clear(), this._activePath.moveTo(t, e);
    }
    stroke(t) {
      let e;
      const i = this.instructions[this.instructions.length - 1];
      return (
        this._tick === 0 && i && i.action === "fill"
          ? (e = i.data.path)
          : (e = this._activePath.clone()),
        e
          ? (t != null && (this._strokeStyle = Vs(t, zt.defaultStrokeStyle)),
            this.instructions.push({
              action: "stroke",
              data: { style: this.strokeStyle, path: e },
            }),
            this.onUpdate(),
            this._initNextPathLocation(),
            (this._tick = 0),
            this)
          : this
      );
    }
    cut() {
      for (let t = 0; t < 2; t++) {
        const e = this.instructions[this.instructions.length - 1 - t],
          i = this._activePath.clone();
        if (e && (e.action === "stroke" || e.action === "fill"))
          if (e.data.hole) e.data.hole.addPath(i);
          else {
            e.data.hole = i;
            break;
          }
      }
      return this._initNextPathLocation(), this;
    }
    arc(t, e, i, n, r, a) {
      this._tick++;
      const o = this._transform;
      return (
        this._activePath.arc(
          o.a * t + o.c * e + o.tx,
          o.b * t + o.d * e + o.ty,
          i,
          n,
          r,
          a
        ),
        this
      );
    }
    arcTo(t, e, i, n, r) {
      this._tick++;
      const a = this._transform;
      return (
        this._activePath.arcTo(
          a.a * t + a.c * e + a.tx,
          a.b * t + a.d * e + a.ty,
          a.a * i + a.c * n + a.tx,
          a.b * i + a.d * n + a.ty,
          r
        ),
        this
      );
    }
    arcToSvg(t, e, i, n, r, a, o) {
      this._tick++;
      const l = this._transform;
      return (
        this._activePath.arcToSvg(
          t,
          e,
          i,
          n,
          r,
          l.a * a + l.c * o + l.tx,
          l.b * a + l.d * o + l.ty
        ),
        this
      );
    }
    bezierCurveTo(t, e, i, n, r, a, o) {
      this._tick++;
      const l = this._transform;
      return (
        this._activePath.bezierCurveTo(
          l.a * t + l.c * e + l.tx,
          l.b * t + l.d * e + l.ty,
          l.a * i + l.c * n + l.tx,
          l.b * i + l.d * n + l.ty,
          l.a * r + l.c * a + l.tx,
          l.b * r + l.d * a + l.ty,
          o
        ),
        this
      );
    }
    closePath() {
      var t;
      return (
        this._tick++, (t = this._activePath) == null || t.closePath(), this
      );
    }
    ellipse(t, e, i, n) {
      return (
        this._tick++,
        this._activePath.ellipse(t, e, i, n, this._transform.clone()),
        this
      );
    }
    circle(t, e, i) {
      return (
        this._tick++,
        this._activePath.circle(t, e, i, this._transform.clone()),
        this
      );
    }
    path(t) {
      return (
        this._tick++, this._activePath.addPath(t, this._transform.clone()), this
      );
    }
    lineTo(t, e) {
      this._tick++;
      const i = this._transform;
      return (
        this._activePath.lineTo(
          i.a * t + i.c * e + i.tx,
          i.b * t + i.d * e + i.ty
        ),
        this
      );
    }
    moveTo(t, e) {
      this._tick++;
      const i = this._transform,
        n = this._activePath.instructions,
        r = i.a * t + i.c * e + i.tx,
        a = i.b * t + i.d * e + i.ty;
      return n.length === 1 && n[0].action === "moveTo"
        ? ((n[0].data[0] = r), (n[0].data[1] = a), this)
        : (this._activePath.moveTo(r, a), this);
    }
    quadraticCurveTo(t, e, i, n, r) {
      this._tick++;
      const a = this._transform;
      return (
        this._activePath.quadraticCurveTo(
          a.a * t + a.c * e + a.tx,
          a.b * t + a.d * e + a.ty,
          a.a * i + a.c * n + a.tx,
          a.b * i + a.d * n + a.ty,
          r
        ),
        this
      );
    }
    rect(t, e, i, n) {
      return (
        this._tick++,
        this._activePath.rect(t, e, i, n, this._transform.clone()),
        this
      );
    }
    roundRect(t, e, i, n, r) {
      return (
        this._tick++,
        this._activePath.roundRect(t, e, i, n, r, this._transform.clone()),
        this
      );
    }
    poly(t, e) {
      return (
        this._tick++, this._activePath.poly(t, e, this._transform.clone()), this
      );
    }
    regularPoly(t, e, i, n, r = 0, a) {
      return this._tick++, this._activePath.regularPoly(t, e, i, n, r, a), this;
    }
    roundPoly(t, e, i, n, r, a) {
      return this._tick++, this._activePath.roundPoly(t, e, i, n, r, a), this;
    }
    roundShape(t, e, i, n) {
      return this._tick++, this._activePath.roundShape(t, e, i, n), this;
    }
    filletRect(t, e, i, n, r) {
      return this._tick++, this._activePath.filletRect(t, e, i, n, r), this;
    }
    chamferRect(t, e, i, n, r, a) {
      return this._tick++, this._activePath.chamferRect(t, e, i, n, r, a), this;
    }
    star(t, e, i, n, r = 0, a = 0) {
      return (
        this._tick++,
        this._activePath.star(t, e, i, n, r, a, this._transform.clone()),
        this
      );
    }
    svg(t) {
      return this._tick++, Lu(t, this), this;
    }
    restore() {
      const t = this._stateStack.pop();
      return (
        t &&
          ((this._transform = t.transform),
          (this._fillStyle = t.fillStyle),
          (this._strokeStyle = t.strokeStyle)),
        this
      );
    }
    save() {
      return (
        this._stateStack.push({
          transform: this._transform.clone(),
          fillStyle: { ...this._fillStyle },
          strokeStyle: { ...this._strokeStyle },
        }),
        this
      );
    }
    getTransform() {
      return this._transform;
    }
    resetTransform() {
      return this._transform.identity(), this;
    }
    rotate(t) {
      return this._transform.rotate(t), this;
    }
    scale(t, e = t) {
      return this._transform.scale(t, e), this;
    }
    setTransform(t, e, i, n, r, a) {
      return t instanceof j
        ? (this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty), this)
        : (this._transform.set(t, e, i, n, r, a), this);
    }
    transform(t, e, i, n, r, a) {
      return t instanceof j
        ? (this._transform.append(t), this)
        : (Rr.set(t, e, i, n, r, a), this._transform.append(Rr), this);
    }
    translate(t, e = t) {
      return this._transform.translate(t, e), this;
    }
    clear() {
      return (
        this._activePath.clear(),
        (this.instructions.length = 0),
        this.resetTransform(),
        this.onUpdate(),
        this
      );
    }
    onUpdate() {
      this.dirty ||
        (this.emit("update", this, 16),
        (this.dirty = !0),
        (this._boundsDirty = !0));
    }
    get bounds() {
      if (!this._boundsDirty) return this._bounds;
      const t = this._bounds;
      t.clear();
      for (let e = 0; e < this.instructions.length; e++) {
        const i = this.instructions[e],
          n = i.action;
        if (n === "fill") {
          const r = i.data;
          t.addBounds(r.path.bounds);
        } else if (n === "texture") {
          const r = i.data;
          t.addFrame(r.dx, r.dy, r.dx + r.dw, r.dy + r.dh, r.transform);
        }
        if (n === "stroke") {
          const r = i.data,
            a = r.style.width / 2,
            o = r.path.bounds;
          t.addFrame(o.minX - a, o.minY - a, o.maxX + a, o.maxY + a);
        }
      }
      return t;
    }
    containsPoint(t) {
      var n;
      if (!this.bounds.containsPoint(t.x, t.y)) return !1;
      const e = this.instructions;
      let i = !1;
      for (let r = 0; r < e.length; r++) {
        const a = e[r],
          o = a.data,
          l = o.path;
        if (!a.action || !l) continue;
        const h = o.style,
          c = l.shapePath.shapePrimitives;
        for (let u = 0; u < c.length; u++) {
          const d = c[u].shape;
          if (!h || !d) continue;
          const f = c[u].transform,
            p = f ? f.applyInverse(t, Du) : t;
          a.action === "fill"
            ? (i = d.contains(p.x, p.y))
            : (i = d.strokeContains(p.x, p.y, h.width));
          const g = o.hole;
          if (g) {
            const m = (n = g.shapePath) == null ? void 0 : n.shapePrimitives;
            if (m)
              for (let _ = 0; _ < m.length; _++)
                m[_].shape.contains(p.x, p.y) && (i = !1);
          }
          if (i) return !0;
        }
      }
      return i;
    }
    destroy(t = !1) {
      if (
        ((this._stateStack.length = 0),
        (this._transform = null),
        this.emit("destroy", this),
        this.removeAllListeners(),
        typeof t == "boolean" ? t : t == null ? void 0 : t.texture)
      ) {
        const i =
          typeof t == "boolean" ? t : t == null ? void 0 : t.textureSource;
        this._fillStyle.texture && this._fillStyle.texture.destroy(i),
          this._strokeStyle.texture && this._strokeStyle.texture.destroy(i);
      }
      (this._fillStyle = null),
        (this._strokeStyle = null),
        (this.instructions = null),
        (this._activePath = null),
        (this._bounds = null),
        (this._stateStack = null),
        (this.customShader = null),
        (this._transform = null);
    }
  };
Pn.defaultFillStyle = {
  color: 16777215,
  alpha: 1,
  texture: W.WHITE,
  matrix: null,
  fill: null,
};
Pn.defaultStrokeStyle = {
  width: 1,
  color: 16777215,
  alpha: 1,
  alignment: 0.5,
  miterLimit: 10,
  cap: "butt",
  join: "miter",
  texture: W.WHITE,
  matrix: null,
  fill: null,
};
let de = Pn;
const Lr = [
  "align",
  "breakWords",
  "cssOverrides",
  "fontVariant",
  "fontWeight",
  "leading",
  "letterSpacing",
  "lineHeight",
  "padding",
  "textBaseline",
  "trim",
  "whiteSpace",
  "wordWrap",
  "wordWrapWidth",
  "fontFamily",
  "fontStyle",
  "fontSize",
];
function Uu(s) {
  const t = [];
  let e = 0;
  for (let i = 0; i < Lr.length; i++) {
    const n = `_${Lr[i]}`;
    t[e++] = s[n];
  }
  return (
    (e = Fo(s._fill, t, e)),
    (e = Nu(s._stroke, t, e)),
    (e = Wu(s.dropShadow, t, e)),
    t.join("-")
  );
}
function Fo(s, t, e) {
  var i;
  return (
    s &&
      ((t[e++] = s.color),
      (t[e++] = s.alpha),
      (t[e++] = (i = s.fill) == null ? void 0 : i.styleKey)),
    e
  );
}
function Nu(s, t, e) {
  return (
    s &&
      ((e = Fo(s, t, e)),
      (t[e++] = s.width),
      (t[e++] = s.alignment),
      (t[e++] = s.cap),
      (t[e++] = s.join),
      (t[e++] = s.miterLimit)),
    e
  );
}
function Wu(s, t, e) {
  return (
    s &&
      ((t[e++] = s.alpha),
      (t[e++] = s.angle),
      (t[e++] = s.blur),
      (t[e++] = s.distance),
      (t[e++] = nt.shared.setValue(s.color).toNumber())),
    e
  );
}
const kn = class ke extends Lt {
  constructor(t = {}) {
    super(), Vu(t);
    const e = { ...ke.defaultTextStyle, ...t };
    for (const i in e) {
      const n = i;
      this[n] = e[i];
    }
    this.update();
  }
  get align() {
    return this._align;
  }
  set align(t) {
    (this._align = t), this.update();
  }
  get breakWords() {
    return this._breakWords;
  }
  set breakWords(t) {
    (this._breakWords = t), this.update();
  }
  get dropShadow() {
    return this._dropShadow;
  }
  set dropShadow(t) {
    t !== null && typeof t == "object"
      ? (this._dropShadow = this._createProxy({
          ...ke.defaultDropShadow,
          ...t,
        }))
      : (this._dropShadow = t
          ? this._createProxy({ ...ke.defaultDropShadow })
          : null),
      this.update();
  }
  get fontFamily() {
    return this._fontFamily;
  }
  set fontFamily(t) {
    (this._fontFamily = t), this.update();
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(t) {
    typeof t == "string"
      ? (this._fontSize = parseInt(t, 10))
      : (this._fontSize = t),
      this.update();
  }
  get fontStyle() {
    return this._fontStyle;
  }
  set fontStyle(t) {
    (this._fontStyle = t.toLowerCase()), this.update();
  }
  get fontVariant() {
    return this._fontVariant;
  }
  set fontVariant(t) {
    (this._fontVariant = t), this.update();
  }
  get fontWeight() {
    return this._fontWeight;
  }
  set fontWeight(t) {
    (this._fontWeight = t), this.update();
  }
  get leading() {
    return this._leading;
  }
  set leading(t) {
    (this._leading = t), this.update();
  }
  get letterSpacing() {
    return this._letterSpacing;
  }
  set letterSpacing(t) {
    (this._letterSpacing = t), this.update();
  }
  get lineHeight() {
    return this._lineHeight;
  }
  set lineHeight(t) {
    (this._lineHeight = t), this.update();
  }
  get padding() {
    return this._padding;
  }
  set padding(t) {
    (this._padding = t), this.update();
  }
  get trim() {
    return this._trim;
  }
  set trim(t) {
    (this._trim = t), this.update();
  }
  get textBaseline() {
    return this._textBaseline;
  }
  set textBaseline(t) {
    (this._textBaseline = t), this.update();
  }
  get whiteSpace() {
    return this._whiteSpace;
  }
  set whiteSpace(t) {
    (this._whiteSpace = t), this.update();
  }
  get wordWrap() {
    return this._wordWrap;
  }
  set wordWrap(t) {
    (this._wordWrap = t), this.update();
  }
  get wordWrapWidth() {
    return this._wordWrapWidth;
  }
  set wordWrapWidth(t) {
    (this._wordWrapWidth = t), this.update();
  }
  get fill() {
    return this._originalFill;
  }
  set fill(t) {
    t !== this._originalFill &&
      ((this._originalFill = t),
      this._isFillStyle(t) &&
        (this._originalFill = this._createProxy(
          { ...de.defaultFillStyle, ...t },
          () => {
            this._fill = pe({ ...this._originalFill }, de.defaultFillStyle);
          }
        )),
      (this._fill = pe(t === 0 ? "black" : t, de.defaultFillStyle)),
      this.update());
  }
  get stroke() {
    return this._originalStroke;
  }
  set stroke(t) {
    t !== this._originalStroke &&
      ((this._originalStroke = t),
      this._isFillStyle(t) &&
        (this._originalStroke = this._createProxy(
          { ...de.defaultStrokeStyle, ...t },
          () => {
            this._stroke = Vs(
              { ...this._originalStroke },
              de.defaultStrokeStyle
            );
          }
        )),
      (this._stroke = Vs(t, de.defaultStrokeStyle)),
      this.update());
  }
  _generateKey() {
    return (this._styleKey = Uu(this)), this._styleKey;
  }
  update() {
    (this._styleKey = null), this.emit("update", this);
  }
  reset() {
    const t = ke.defaultTextStyle;
    for (const e in t) this[e] = t[e];
  }
  get styleKey() {
    return this._styleKey || this._generateKey();
  }
  clone() {
    return new ke({
      align: this.align,
      breakWords: this.breakWords,
      dropShadow: this._dropShadow ? { ...this._dropShadow } : null,
      fill: this._fill,
      fontFamily: this.fontFamily,
      fontSize: this.fontSize,
      fontStyle: this.fontStyle,
      fontVariant: this.fontVariant,
      fontWeight: this.fontWeight,
      leading: this.leading,
      letterSpacing: this.letterSpacing,
      lineHeight: this.lineHeight,
      padding: this.padding,
      stroke: this._stroke,
      textBaseline: this.textBaseline,
      whiteSpace: this.whiteSpace,
      wordWrap: this.wordWrap,
      wordWrapWidth: this.wordWrapWidth,
    });
  }
  destroy(t = !1) {
    var i, n, r, a;
    if (
      (this.removeAllListeners(),
      typeof t == "boolean" ? t : t == null ? void 0 : t.texture)
    ) {
      const o =
        typeof t == "boolean" ? t : t == null ? void 0 : t.textureSource;
      (i = this._fill) != null && i.texture && this._fill.texture.destroy(o),
        (n = this._originalFill) != null &&
          n.texture &&
          this._originalFill.texture.destroy(o),
        (r = this._stroke) != null &&
          r.texture &&
          this._stroke.texture.destroy(o),
        (a = this._originalStroke) != null &&
          a.texture &&
          this._originalStroke.texture.destroy(o);
    }
    (this._fill = null),
      (this._stroke = null),
      (this.dropShadow = null),
      (this._originalStroke = null),
      (this._originalFill = null);
  }
  _createProxy(t, e) {
    return new Proxy(t, {
      set: (i, n, r) => ((i[n] = r), e == null || e(n, r), this.update(), !0),
    });
  }
  _isFillStyle(t) {
    return (
      (t ?? null) !== null &&
      !(nt.isColorLike(t) || t instanceof fs || t instanceof Js)
    );
  }
};
kn.defaultDropShadow = {
  alpha: 1,
  angle: Math.PI / 6,
  blur: 0,
  color: "black",
  distance: 5,
};
kn.defaultTextStyle = {
  align: "left",
  breakWords: !1,
  dropShadow: null,
  fill: "black",
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  leading: 0,
  letterSpacing: 0,
  lineHeight: 0,
  padding: 0,
  stroke: null,
  textBaseline: "alphabetic",
  trim: !1,
  whiteSpace: "pre",
  wordWrap: !1,
  wordWrapWidth: 100,
};
let xe = kn;
function Vu(s) {
  const t = s;
  if (typeof t.dropShadow == "boolean" && t.dropShadow) {
    const e = xe.defaultDropShadow;
    s.dropShadow = {
      alpha: t.dropShadowAlpha ?? e.alpha,
      angle: t.dropShadowAngle ?? e.angle,
      blur: t.dropShadowBlur ?? e.blur,
      color: t.dropShadowColor ?? e.color,
      distance: t.dropShadowDistance ?? e.distance,
    };
  }
  if (t.strokeThickness !== void 0) {
    et(it, "strokeThickness is now a part of stroke");
    const e = t.stroke;
    let i = {};
    if (nt.isColorLike(e)) i.color = e;
    else if (e instanceof fs || e instanceof Js) i.fill = e;
    else if (
      Object.hasOwnProperty.call(e, "color") ||
      Object.hasOwnProperty.call(e, "fill")
    )
      i = e;
    else throw new Error("Invalid stroke value.");
    s.stroke = { ...i, width: t.strokeThickness };
  }
  if (Array.isArray(t.fillGradientStops)) {
    et(it, "gradient fill is now a fill pattern: `new FillGradient(...)`");
    let e;
    s.fontSize == null
      ? (s.fontSize = xe.defaultTextStyle.fontSize)
      : typeof s.fontSize == "string"
      ? (e = parseInt(s.fontSize, 10))
      : (e = s.fontSize);
    const i = new fs(0, 0, 0, e * 1.7),
      n = t.fillGradientStops.map((r) => nt.shared.setValue(r).toNumber());
    n.forEach((r, a) => {
      const o = a / (n.length - 1);
      i.addColorStop(o, r);
    }),
      (s.fill = { fill: i });
  }
}
class Hu {
  constructor(t) {
    (this._canvasPool = Object.create(null)),
      (this.canvasOptions = t || {}),
      (this.enableFullScreen = !1);
  }
  _createCanvasAndContext(t, e) {
    const i = tt.get().createCanvas();
    (i.width = t), (i.height = e);
    const n = i.getContext("2d");
    return { canvas: i, context: n };
  }
  getOptimalCanvasAndContext(t, e, i = 1) {
    (t = Math.ceil(t * i - 1e-6)),
      (e = Math.ceil(e * i - 1e-6)),
      (t = Hn(t)),
      (e = Hn(e));
    const n = (t << 17) + (e << 1);
    this._canvasPool[n] || (this._canvasPool[n] = []);
    let r = this._canvasPool[n].pop();
    return r || (r = this._createCanvasAndContext(t, e)), r;
  }
  returnCanvasAndContext(t) {
    const e = t.canvas,
      { width: i, height: n } = e,
      r = (i << 17) + (n << 1);
    t.context.clearRect(0, 0, i, n), this._canvasPool[r].push(t);
  }
  clear() {
    this._canvasPool = {};
  }
}
const $r = new Hu(),
  ju = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"];
function rn(s) {
  const t = typeof s.fontSize == "number" ? `${s.fontSize}px` : s.fontSize;
  let e = s.fontFamily;
  Array.isArray(s.fontFamily) || (e = s.fontFamily.split(","));
  for (let i = e.length - 1; i >= 0; i--) {
    let n = e[i].trim();
    !/([\"\'])[^\'\"]+\1/.test(n) && !ju.includes(n) && (n = `"${n}"`),
      (e[i] = n);
  }
  return `${s.fontStyle} ${s.fontVariant} ${s.fontWeight} ${t} ${e.join(",")}`;
}
const Ei = { willReadFrequently: !0 },
  $t = class R {
    static get experimentalLetterSpacingSupported() {
      let t = R._experimentalLetterSpacingSupported;
      if (t !== void 0) {
        const e = tt.get().getCanvasRenderingContext2D().prototype;
        t = R._experimentalLetterSpacingSupported =
          "letterSpacing" in e || "textLetterSpacing" in e;
      }
      return t;
    }
    constructor(t, e, i, n, r, a, o, l, h) {
      (this.text = t),
        (this.style = e),
        (this.width = i),
        (this.height = n),
        (this.lines = r),
        (this.lineWidths = a),
        (this.lineHeight = o),
        (this.maxLineWidth = l),
        (this.fontProperties = h);
    }
    static measureText(t = " ", e, i = R._canvas, n = e.wordWrap) {
      var y;
      const r = `${t}:${e.styleKey}`;
      if (R._measurementCache[r]) return R._measurementCache[r];
      const a = rn(e),
        o = R.measureFont(a);
      o.fontSize === 0 && ((o.fontSize = e.fontSize), (o.ascent = e.fontSize));
      const l = R.__context;
      l.font = a;
      const c = (n ? R._wordWrap(t, e, i) : t).split(/(?:\r\n|\r|\n)/),
        u = new Array(c.length);
      let d = 0;
      for (let x = 0; x < c.length; x++) {
        const b = R._measureText(c[x], e.letterSpacing, l);
        (u[x] = b), (d = Math.max(d, b));
      }
      const f = ((y = e._stroke) == null ? void 0 : y.width) || 0;
      let p = d + f;
      e.dropShadow && (p += e.dropShadow.distance);
      const g = e.lineHeight || o.fontSize;
      let m = Math.max(g, o.fontSize + f) + (c.length - 1) * (g + e.leading);
      return (
        e.dropShadow && (m += e.dropShadow.distance),
        new R(t, e, p, m, c, u, g + e.leading, d, o)
      );
    }
    static _measureText(t, e, i) {
      let n = !1;
      R.experimentalLetterSpacingSupported &&
        (R.experimentalLetterSpacing
          ? ((i.letterSpacing = `${e}px`),
            (i.textLetterSpacing = `${e}px`),
            (n = !0))
          : ((i.letterSpacing = "0px"), (i.textLetterSpacing = "0px")));
      const r = i.measureText(t);
      let a = r.width;
      const o = -r.actualBoundingBoxLeft;
      let h = r.actualBoundingBoxRight - o;
      if (a > 0)
        if (n) (a -= e), (h -= e);
        else {
          const c = (R.graphemeSegmenter(t).length - 1) * e;
          (a += c), (h += c);
        }
      return Math.max(a, h);
    }
    static _wordWrap(t, e, i = R._canvas) {
      const n = i.getContext("2d", Ei);
      let r = 0,
        a = "",
        o = "";
      const l = Object.create(null),
        { letterSpacing: h, whiteSpace: c } = e,
        u = R._collapseSpaces(c),
        d = R._collapseNewlines(c);
      let f = !u;
      const p = e.wordWrapWidth + h,
        g = R._tokenize(t);
      for (let m = 0; m < g.length; m++) {
        let _ = g[m];
        if (R._isNewline(_)) {
          if (!d) {
            (o += R._addLine(a)), (f = !u), (a = ""), (r = 0);
            continue;
          }
          _ = " ";
        }
        if (u) {
          const x = R.isBreakingSpace(_),
            b = R.isBreakingSpace(a[a.length - 1]);
          if (x && b) continue;
        }
        const y = R._getFromCache(_, h, l, n);
        if (y > p)
          if (
            (a !== "" && ((o += R._addLine(a)), (a = ""), (r = 0)),
            R.canBreakWords(_, e.breakWords))
          ) {
            const x = R.wordWrapSplit(_);
            for (let b = 0; b < x.length; b++) {
              let C = x[b],
                F = C,
                k = 1;
              for (; x[b + k]; ) {
                const w = x[b + k];
                if (!R.canBreakChars(F, w, _, b, e.breakWords)) C += w;
                else break;
                (F = w), k++;
              }
              b += k - 1;
              const T = R._getFromCache(C, h, l, n);
              T + r > p && ((o += R._addLine(a)), (f = !1), (a = ""), (r = 0)),
                (a += C),
                (r += T);
            }
          } else {
            a.length > 0 && ((o += R._addLine(a)), (a = ""), (r = 0));
            const x = m === g.length - 1;
            (o += R._addLine(_, !x)), (f = !1), (a = ""), (r = 0);
          }
        else
          y + r > p && ((f = !1), (o += R._addLine(a)), (a = ""), (r = 0)),
            (a.length > 0 || !R.isBreakingSpace(_) || f) &&
              ((a += _), (r += y));
      }
      return (o += R._addLine(a, !1)), o;
    }
    static _addLine(t, e = !0) {
      return (
        (t = R._trimRight(t)),
        (t = e
          ? `${t}
`
          : t),
        t
      );
    }
    static _getFromCache(t, e, i, n) {
      let r = i[t];
      return (
        typeof r != "number" && ((r = R._measureText(t, e, n) + e), (i[t] = r)),
        r
      );
    }
    static _collapseSpaces(t) {
      return t === "normal" || t === "pre-line";
    }
    static _collapseNewlines(t) {
      return t === "normal";
    }
    static _trimRight(t) {
      if (typeof t != "string") return "";
      for (let e = t.length - 1; e >= 0; e--) {
        const i = t[e];
        if (!R.isBreakingSpace(i)) break;
        t = t.slice(0, -1);
      }
      return t;
    }
    static _isNewline(t) {
      return typeof t != "string" ? !1 : R._newlines.includes(t.charCodeAt(0));
    }
    static isBreakingSpace(t, e) {
      return typeof t != "string"
        ? !1
        : R._breakingSpaces.includes(t.charCodeAt(0));
    }
    static _tokenize(t) {
      const e = [];
      let i = "";
      if (typeof t != "string") return e;
      for (let n = 0; n < t.length; n++) {
        const r = t[n],
          a = t[n + 1];
        if (R.isBreakingSpace(r, a) || R._isNewline(r)) {
          i !== "" && (e.push(i), (i = "")), e.push(r);
          continue;
        }
        i += r;
      }
      return i !== "" && e.push(i), e;
    }
    static canBreakWords(t, e) {
      return e;
    }
    static canBreakChars(t, e, i, n, r) {
      return !0;
    }
    static wordWrapSplit(t) {
      return R.graphemeSegmenter(t);
    }
    static measureFont(t) {
      if (R._fonts[t]) return R._fonts[t];
      const e = R._context;
      e.font = t;
      const i = e.measureText(R.METRICS_STRING + R.BASELINE_SYMBOL),
        n = {
          ascent: i.actualBoundingBoxAscent,
          descent: i.actualBoundingBoxDescent,
          fontSize: i.actualBoundingBoxAscent + i.actualBoundingBoxDescent,
        };
      return (R._fonts[t] = n), n;
    }
    static clearMetrics(t = "") {
      t ? delete R._fonts[t] : (R._fonts = {});
    }
    static get _canvas() {
      if (!R.__canvas) {
        let t;
        try {
          const e = new OffscreenCanvas(0, 0),
            i = e.getContext("2d", Ei);
          if (i != null && i.measureText) return (R.__canvas = e), e;
          t = tt.get().createCanvas();
        } catch {
          t = tt.get().createCanvas();
        }
        (t.width = t.height = 10), (R.__canvas = t);
      }
      return R.__canvas;
    }
    static get _context() {
      return (
        R.__context || (R.__context = R._canvas.getContext("2d", Ei)),
        R.__context
      );
    }
  };
$t.METRICS_STRING = "|ÉqÅ";
$t.BASELINE_SYMBOL = "M";
$t.BASELINE_MULTIPLIER = 1.4;
$t.HEIGHT_MULTIPLIER = 2;
$t.graphemeSegmenter = (() => {
  if (typeof (Intl == null ? void 0 : Intl.Segmenter) == "function") {
    const s = new Intl.Segmenter();
    return (t) => [...s.segment(t)].map((e) => e.segment);
  }
  return (s) => [...s];
})();
$t.experimentalLetterSpacing = !1;
$t._fonts = {};
$t._newlines = [10, 13];
$t._breakingSpaces = [
  9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287,
  12288,
];
$t._measurementCache = {};
let an = $t;
function Gr(s, t) {
  if (s.texture === W.WHITE && !s.fill)
    return nt.shared
      .setValue(s.color)
      .setAlpha(s.alpha ?? 1)
      .toHexa();
  if (s.fill) {
    if (s.fill instanceof Js) {
      const e = s.fill,
        i = t.createPattern(e.texture.source.resource, "repeat"),
        n = e.transform.copyTo(j.shared);
      return (
        n.scale(e.texture.frame.width, e.texture.frame.height),
        i.setTransform(n),
        i
      );
    } else if (s.fill instanceof fs) {
      const e = s.fill;
      if (e.type === "linear") {
        const i = t.createLinearGradient(e.x0, e.y0, e.x1, e.y1);
        return (
          e.gradientStops.forEach((n) => {
            i.addColorStop(n.offset, nt.shared.setValue(n.color).toHex());
          }),
          i
        );
      }
    }
  } else {
    const e = t.createPattern(s.texture.source.resource, "repeat"),
      i = s.matrix.copyTo(j.shared);
    return (
      i.scale(s.texture.frame.width, s.texture.frame.height),
      e.setTransform(i),
      e
    );
  }
  return rt("FillStyle not recognised", s), "red";
}
function Ro(s) {
  if (s === "") return [];
  typeof s == "string" && (s = [s]);
  const t = [];
  for (let e = 0, i = s.length; e < i; e++) {
    const n = s[e];
    if (Array.isArray(n)) {
      if (n.length !== 2)
        throw new Error(
          `[BitmapFont]: Invalid character range length, expecting 2 got ${n.length}.`
        );
      if (n[0].length === 0 || n[1].length === 0)
        throw new Error("[BitmapFont]: Invalid character delimiter.");
      const r = n[0].charCodeAt(0),
        a = n[1].charCodeAt(0);
      if (a < r) throw new Error("[BitmapFont]: Invalid character range.");
      for (let o = r, l = a; o <= l; o++) t.push(String.fromCharCode(o));
    } else t.push(...Array.from(n));
  }
  if (t.length === 0)
    throw new Error("[BitmapFont]: Empty set when resolving characters.");
  return t;
}
const Lo = class $o extends mo {
  constructor(t) {
    super(),
      (this.resolution = 1),
      (this.pages = []),
      (this._padding = 0),
      (this._measureCache = Object.create(null)),
      (this._currentChars = []),
      (this._currentX = 0),
      (this._currentY = 0),
      (this._currentPageIndex = -1),
      (this._skipKerning = !1);
    const e = { ...$o.defaultOptions, ...t };
    (this._textureSize = e.textureSize), (this._mipmap = e.mipmap);
    const i = e.style.clone();
    e.overrideFill &&
      ((i._fill.color = 16777215),
      (i._fill.alpha = 1),
      (i._fill.texture = W.WHITE),
      (i._fill.fill = null)),
      (this.applyFillAsTint = e.overrideFill);
    const n = i.fontSize;
    i.fontSize = this.baseMeasurementFontSize;
    const r = rn(i);
    e.overrideSize
      ? i._stroke && (i._stroke.width *= this.baseRenderedFontSize / n)
      : (i.fontSize = this.baseRenderedFontSize = n),
      (this._style = i),
      (this._skipKerning = e.skipKerning ?? !1),
      (this.resolution = e.resolution ?? 1),
      (this._padding = e.padding ?? 4),
      (this.fontMetrics = an.measureFont(r)),
      (this.lineHeight =
        i.lineHeight || this.fontMetrics.fontSize || i.fontSize);
  }
  ensureCharacters(t) {
    var p, g;
    const e = Ro(t)
      .filter((m) => !this._currentChars.includes(m))
      .filter((m, _, y) => y.indexOf(m) === _);
    if (!e.length) return;
    this._currentChars = [...this._currentChars, ...e];
    let i;
    this._currentPageIndex === -1
      ? (i = this._nextPage())
      : (i = this.pages[this._currentPageIndex]);
    let { canvas: n, context: r } = i.canvasAndContext,
      a = i.texture.source;
    const o = this._style;
    let l = this._currentX,
      h = this._currentY;
    const c = this.baseRenderedFontSize / this.baseMeasurementFontSize,
      u = this._padding * c;
    let d = 0,
      f = !1;
    for (let m = 0; m < e.length; m++) {
      const _ = e[m],
        y = an.measureText(_, o, n, !1),
        x = Math.ceil((o.fontStyle === "italic" ? 2 : 1) * y.width);
      y.lineHeight = y.height;
      const b = y.width * c,
        C = y.height * c,
        F = x + u * 2,
        k = C + u * 2;
      if (
        ((f = !1),
        _ !==
          `
` &&
          _ !== "\r" &&
          _ !== "	" &&
          _ !== " " &&
          ((f = !0), (d = Math.ceil(Math.max(k, d)))),
        l + F > this._textureSize &&
          ((h += d), (d = k), (l = 0), h + d > this._textureSize))
      ) {
        a.update();
        const w = this._nextPage();
        (n = w.canvasAndContext.canvas),
          (r = w.canvasAndContext.context),
          (a = w.texture.source),
          (h = 0);
      }
      const T =
        b / c -
        (((p = o.dropShadow) == null ? void 0 : p.distance) ?? 0) -
        (((g = o._stroke) == null ? void 0 : g.width) ?? 0);
      if (
        ((this.chars[_] = {
          id: _.codePointAt(0),
          xOffset: -this._padding,
          yOffset: -this._padding,
          xAdvance: T,
          kerning: {},
        }),
        f)
      ) {
        this._drawGlyph(r, y, l + u, h + u, c, o);
        const w = a.width * c,
          A = a.height * c,
          N = new ot(
            (l / w) * a.width,
            (h / A) * a.height,
            (F / w) * a.width,
            (k / A) * a.height
          );
        (this.chars[_].texture = new W({ source: a, frame: N })),
          (l += Math.ceil(F));
      }
    }
    a.update(),
      (this._currentX = l),
      (this._currentY = h),
      this._skipKerning && this._applyKerning(e, r);
  }
  get pageTextures() {
    return (
      et(
        it,
        "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."
      ),
      this.pages
    );
  }
  _applyKerning(t, e) {
    const i = this._measureCache;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      for (let a = 0; a < this._currentChars.length; a++) {
        const o = this._currentChars[a];
        let l = i[r];
        l || (l = i[r] = e.measureText(r).width);
        let h = i[o];
        h || (h = i[o] = e.measureText(o).width);
        let c = e.measureText(r + o).width,
          u = c - (l + h);
        u && (this.chars[r].kerning[o] = u),
          (c = e.measureText(r + o).width),
          (u = c - (l + h)),
          u && (this.chars[o].kerning[r] = u);
      }
    }
  }
  _nextPage() {
    this._currentPageIndex++;
    const t = this.resolution,
      e = $r.getOptimalCanvasAndContext(
        this._textureSize,
        this._textureSize,
        t
      );
    this._setupContext(e.context, this._style, t);
    const i = t * (this.baseRenderedFontSize / this.baseMeasurementFontSize),
      n = new W({
        source: new Ne({
          resource: e.canvas,
          resolution: i,
          alphaMode: "premultiply-alpha-on-upload",
          autoGenerateMipmaps: this._mipmap,
        }),
      }),
      r = { canvasAndContext: e, texture: n };
    return (this.pages[this._currentPageIndex] = r), r;
  }
  _setupContext(t, e, i) {
    (e.fontSize = this.baseRenderedFontSize),
      t.scale(i, i),
      (t.font = rn(e)),
      (e.fontSize = this.baseMeasurementFontSize),
      (t.textBaseline = e.textBaseline);
    const n = e._stroke,
      r = (n == null ? void 0 : n.width) ?? 0;
    if (
      (n &&
        ((t.lineWidth = r),
        (t.lineJoin = n.join),
        (t.miterLimit = n.miterLimit),
        (t.strokeStyle = Gr(n, t))),
      e._fill && (t.fillStyle = Gr(e._fill, t)),
      e.dropShadow)
    ) {
      const a = e.dropShadow,
        o = nt.shared.setValue(a.color).toArray(),
        l = a.blur * i,
        h = a.distance * i;
      (t.shadowColor = `rgba(${o[0] * 255},${o[1] * 255},${o[2] * 255},${
        a.alpha
      })`),
        (t.shadowBlur = l),
        (t.shadowOffsetX = Math.cos(a.angle) * h),
        (t.shadowOffsetY = Math.sin(a.angle) * h);
    } else
      (t.shadowColor = "black"),
        (t.shadowBlur = 0),
        (t.shadowOffsetX = 0),
        (t.shadowOffsetY = 0);
  }
  _drawGlyph(t, e, i, n, r, a) {
    const o = e.text,
      l = e.fontProperties,
      h = a._stroke,
      c = ((h == null ? void 0 : h.width) ?? 0) * r,
      u = i + c / 2,
      d = n - c / 2,
      f = l.descent * r,
      p = e.lineHeight * r;
    a.stroke && c && t.strokeText(o, u, d + p - f),
      a._fill && t.fillText(o, u, d + p - f);
  }
  destroy() {
    super.destroy();
    for (let t = 0; t < this.pages.length; t++) {
      const { canvasAndContext: e, texture: i } = this.pages[t];
      $r.returnCanvasAndContext(e), i.destroy(!0);
    }
    this.pages = null;
  }
};
Lo.defaultOptions = { textureSize: 512, style: new xe(), mipmap: !0 };
let Or = Lo;
function Yu(s, t, e, i) {
  const n = {
    width: 0,
    height: 0,
    offsetY: 0,
    scale: t.fontSize / e.baseMeasurementFontSize,
    lines: [
      {
        width: 0,
        charPositions: [],
        spaceWidth: 0,
        spacesIndex: [],
        chars: [],
      },
    ],
  };
  n.offsetY = e.baseLineOffset;
  let r = n.lines[0],
    a = null,
    o = !0;
  const l = {
      spaceWord: !1,
      width: 0,
      start: 0,
      index: 0,
      positions: [],
      chars: [],
    },
    h = (p) => {
      const g = r.width;
      for (let m = 0; m < l.index; m++) {
        const _ = p.positions[m];
        r.chars.push(p.chars[m]), r.charPositions.push(_ + g);
      }
      (r.width += p.width),
        (o = !1),
        (l.width = 0),
        (l.index = 0),
        (l.chars.length = 0);
    },
    c = () => {
      let p = r.chars.length - 1;
      if (i) {
        let g = r.chars[p];
        for (; g === " "; )
          (r.width -= e.chars[g].xAdvance), (g = r.chars[--p]);
      }
      (n.width = Math.max(n.width, r.width)),
        (r = {
          width: 0,
          charPositions: [],
          chars: [],
          spaceWidth: 0,
          spacesIndex: [],
        }),
        (o = !0),
        n.lines.push(r),
        (n.height += e.lineHeight);
    },
    u = e.baseMeasurementFontSize / t.fontSize,
    d = t.letterSpacing * u,
    f = t.wordWrapWidth * u;
  for (let p = 0; p < s.length + 1; p++) {
    let g;
    const m = p === s.length;
    m || (g = s[p]);
    const _ = e.chars[g] || e.chars[" "];
    if (
      /(?:\s)/.test(g) ||
      g === "\r" ||
      g ===
        `
` ||
      m
    ) {
      if (
        (!o && t.wordWrap && r.width + l.width - d > f
          ? (c(), h(l), m || r.charPositions.push(0))
          : ((l.start = r.width), h(l), m || r.charPositions.push(0)),
        g === "\r" ||
          g ===
            `
`)
      )
        r.width !== 0 && c();
      else if (!m) {
        const C = _.xAdvance + (_.kerning[a] || 0) + d;
        (r.width += C),
          (r.spaceWidth = C),
          r.spacesIndex.push(r.charPositions.length),
          r.chars.push(g);
      }
    } else {
      const b = _.kerning[a] || 0,
        C = _.xAdvance + b + d;
      (l.positions[l.index++] = l.width + b), l.chars.push(g), (l.width += C);
    }
    a = g;
  }
  return (
    c(),
    t.align === "center"
      ? Xu(n)
      : t.align === "right"
      ? qu(n)
      : t.align === "justify" && Ku(n),
    n
  );
}
function Xu(s) {
  for (let t = 0; t < s.lines.length; t++) {
    const e = s.lines[t],
      i = s.width / 2 - e.width / 2;
    for (let n = 0; n < e.charPositions.length; n++) e.charPositions[n] += i;
  }
}
function qu(s) {
  for (let t = 0; t < s.lines.length; t++) {
    const e = s.lines[t],
      i = s.width - e.width;
    for (let n = 0; n < e.charPositions.length; n++) e.charPositions[n] += i;
  }
}
function Ku(s) {
  const t = s.width;
  for (let e = 0; e < s.lines.length; e++) {
    const i = s.lines[e];
    let n = 0,
      r = i.spacesIndex[n++],
      a = 0;
    const o = i.spacesIndex.length,
      h = (t - i.width) / o;
    for (let c = 0; c < i.charPositions.length; c++)
      c === r && ((r = i.spacesIndex[n++]), (a += h)),
        (i.charPositions[c] += a);
  }
}
let Bs = 0;
class Zu {
  constructor() {
    (this.ALPHA = [["a", "z"], ["A", "Z"], " "]),
      (this.NUMERIC = [["0", "9"]]),
      (this.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "]),
      (this.ASCII = [[" ", "~"]]),
      (this.defaultOptions = {
        chars: this.ALPHANUMERIC,
        resolution: 1,
        padding: 4,
        skipKerning: !1,
      });
  }
  getFont(t, e) {
    var a;
    let i = `${e.fontFamily}-bitmap`,
      n = !0;
    if (e._fill.fill && !e._stroke) (i += e._fill.fill.styleKey), (n = !1);
    else if (e._stroke || e.dropShadow) {
      let o = e.styleKey;
      (o = o.substring(0, o.lastIndexOf("-"))), (i = `${o}-bitmap`), (n = !1);
    }
    if (!J.has(i)) {
      const o = new Or({
        style: e,
        overrideFill: n,
        overrideSize: !0,
        ...this.defaultOptions,
      });
      Bs++,
        Bs > 50 &&
          rt(
            "BitmapText",
            `You have dynamically created ${Bs} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``
          ),
        o.once("destroy", () => {
          Bs--, J.remove(i);
        }),
        J.set(i, o);
    }
    const r = J.get(i);
    return (a = r.ensureCharacters) == null || a.call(r, t), r;
  }
  getLayout(t, e, i = !0) {
    const n = this.getFont(t, e);
    return Yu([...t], e, n, i);
  }
  measureText(t, e, i = !0) {
    return this.getLayout(t, e, i);
  }
  install(...t) {
    var h, c, u, d;
    let e = t[0];
    typeof e == "string" &&
      ((e = {
        name: e,
        style: t[1],
        chars: (h = t[2]) == null ? void 0 : h.chars,
        resolution: (c = t[2]) == null ? void 0 : c.resolution,
        padding: (u = t[2]) == null ? void 0 : u.padding,
        skipKerning: (d = t[2]) == null ? void 0 : d.skipKerning,
      }),
      et(
        it,
        "BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"
      ));
    const i = e == null ? void 0 : e.name;
    if (!i) throw new Error("[BitmapFontManager] Property `name` is required.");
    e = { ...this.defaultOptions, ...e };
    const n = e.style,
      r = n instanceof xe ? n : new xe(n),
      a = r._fill.fill !== null && r._fill.fill !== void 0,
      o = new Or({
        style: r,
        overrideFill: a,
        skipKerning: e.skipKerning,
        padding: e.padding,
        resolution: e.resolution,
        overrideSize: !1,
      }),
      l = Ro(e.chars);
    return (
      o.ensureCharacters(l.join("")),
      J.set(`${i}-bitmap`, o),
      o.once("destroy", () => J.remove(`${i}-bitmap`)),
      o
    );
  }
  uninstall(t) {
    const e = `${t}-bitmap`,
      i = J.get(e);
    i && i.destroy();
  }
}
const zr = new Zu();
class Go extends mo {
  constructor(t, e) {
    super();
    const { textures: i, data: n } = t;
    Object.keys(n.pages).forEach((r) => {
      const a = n.pages[parseInt(r, 10)],
        o = i[a.id];
      this.pages.push({ texture: o });
    }),
      Object.keys(n.chars).forEach((r) => {
        const a = n.chars[r],
          { frame: o, source: l } = i[a.page],
          h = new ot(a.x + o.x, a.y + o.y, a.width, a.height),
          c = new W({ source: l, frame: h });
        this.chars[r] = {
          id: r.codePointAt(0),
          xOffset: a.xOffset,
          yOffset: a.yOffset,
          xAdvance: a.xAdvance,
          kerning: a.kerning ?? {},
          texture: c,
        };
      }),
      (this.baseRenderedFontSize = n.fontSize),
      (this.baseMeasurementFontSize = n.fontSize),
      (this.fontMetrics = { ascent: 0, descent: 0, fontSize: n.fontSize }),
      (this.baseLineOffset = n.baseLineOffset),
      (this.lineHeight = n.lineHeight),
      (this.fontFamily = n.fontFamily),
      (this.distanceField = n.distanceField ?? { type: "none", range: 0 }),
      (this.url = e);
  }
  destroy() {
    super.destroy();
    for (let t = 0; t < this.pages.length; t++) {
      const { texture: e } = this.pages[t];
      e.destroy(!0);
    }
    this.pages = null;
  }
  static install(t) {
    zr.install(t);
  }
  static uninstall(t) {
    zr.uninstall(t);
  }
}
const Ii = {
    test(s) {
      return typeof s == "string" && s.startsWith("info face=");
    },
    parse(s) {
      const t = s.match(/^[a-z]+\s+.+$/gm),
        e = {
          info: [],
          common: [],
          page: [],
          char: [],
          chars: [],
          kerning: [],
          kernings: [],
          distanceField: [],
        };
      for (const u in t) {
        const d = t[u].match(/^[a-z]+/gm)[0],
          f = t[u].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
          p = {};
        for (const g in f) {
          const m = f[g].split("="),
            _ = m[0],
            y = m[1].replace(/"/gm, ""),
            x = parseFloat(y),
            b = isNaN(x) ? y : x;
          p[_] = b;
        }
        e[d].push(p);
      }
      const i = {
          chars: {},
          pages: [],
          lineHeight: 0,
          fontSize: 0,
          fontFamily: "",
          distanceField: null,
          baseLineOffset: 0,
        },
        [n] = e.info,
        [r] = e.common,
        [a] = e.distanceField ?? [];
      a &&
        (i.distanceField = {
          range: parseInt(a.distanceRange, 10),
          type: a.fieldType,
        }),
        (i.fontSize = parseInt(n.size, 10)),
        (i.fontFamily = n.face),
        (i.lineHeight = parseInt(r.lineHeight, 10));
      const o = e.page;
      for (let u = 0; u < o.length; u++)
        i.pages.push({ id: parseInt(o[u].id, 10) || 0, file: o[u].file });
      const l = {};
      i.baseLineOffset = i.lineHeight - parseInt(r.base, 10);
      const h = e.char;
      for (let u = 0; u < h.length; u++) {
        const d = h[u],
          f = parseInt(d.id, 10);
        let p = d.letter ?? d.char ?? String.fromCharCode(f);
        p === "space" && (p = " "),
          (l[f] = p),
          (i.chars[p] = {
            id: f,
            page: parseInt(d.page, 10) || 0,
            x: parseInt(d.x, 10),
            y: parseInt(d.y, 10),
            width: parseInt(d.width, 10),
            height: parseInt(d.height, 10),
            xOffset: parseInt(d.xoffset, 10),
            yOffset: parseInt(d.yoffset, 10),
            xAdvance: parseInt(d.xadvance, 10),
            kerning: {},
          });
      }
      const c = e.kerning || [];
      for (let u = 0; u < c.length; u++) {
        const d = parseInt(c[u].first, 10),
          f = parseInt(c[u].second, 10),
          p = parseInt(c[u].amount, 10);
        i.chars[l[f]].kerning[l[d]] = p;
      }
      return i;
    },
  },
  Dr = {
    test(s) {
      const t = s;
      return (
        typeof t != "string" &&
        "getElementsByTagName" in t &&
        t.getElementsByTagName("page").length &&
        t.getElementsByTagName("info")[0].getAttribute("face") !== null
      );
    },
    parse(s) {
      const t = {
          chars: {},
          pages: [],
          lineHeight: 0,
          fontSize: 0,
          fontFamily: "",
          distanceField: null,
          baseLineOffset: 0,
        },
        e = s.getElementsByTagName("info")[0],
        i = s.getElementsByTagName("common")[0],
        n = s.getElementsByTagName("distanceField")[0];
      n &&
        (t.distanceField = {
          type: n.getAttribute("fieldType"),
          range: parseInt(n.getAttribute("distanceRange"), 10),
        });
      const r = s.getElementsByTagName("page"),
        a = s.getElementsByTagName("char"),
        o = s.getElementsByTagName("kerning");
      (t.fontSize = parseInt(e.getAttribute("size"), 10)),
        (t.fontFamily = e.getAttribute("face")),
        (t.lineHeight = parseInt(i.getAttribute("lineHeight"), 10));
      for (let h = 0; h < r.length; h++)
        t.pages.push({
          id: parseInt(r[h].getAttribute("id"), 10) || 0,
          file: r[h].getAttribute("file"),
        });
      const l = {};
      t.baseLineOffset = t.lineHeight - parseInt(i.getAttribute("base"), 10);
      for (let h = 0; h < a.length; h++) {
        const c = a[h],
          u = parseInt(c.getAttribute("id"), 10);
        let d =
          c.getAttribute("letter") ??
          c.getAttribute("char") ??
          String.fromCharCode(u);
        d === "space" && (d = " "),
          (l[u] = d),
          (t.chars[d] = {
            id: u,
            page: parseInt(c.getAttribute("page"), 10) || 0,
            x: parseInt(c.getAttribute("x"), 10),
            y: parseInt(c.getAttribute("y"), 10),
            width: parseInt(c.getAttribute("width"), 10),
            height: parseInt(c.getAttribute("height"), 10),
            xOffset: parseInt(c.getAttribute("xoffset"), 10),
            yOffset: parseInt(c.getAttribute("yoffset"), 10),
            xAdvance: parseInt(c.getAttribute("xadvance"), 10),
            kerning: {},
          });
      }
      for (let h = 0; h < o.length; h++) {
        const c = parseInt(o[h].getAttribute("first"), 10),
          u = parseInt(o[h].getAttribute("second"), 10),
          d = parseInt(o[h].getAttribute("amount"), 10);
        t.chars[l[u]].kerning[l[c]] = d;
      }
      return t;
    },
  },
  Ur = {
    test(s) {
      return typeof s == "string" && s.includes("<font>")
        ? Dr.test(tt.get().parseXML(s))
        : !1;
    },
    parse(s) {
      return Dr.parse(tt.get().parseXML(s));
    },
  },
  Qu = [".xml", ".fnt"],
  Ju = {
    extension: { type: L.CacheParser, name: "cacheBitmapFont" },
    test: (s) => s instanceof Go,
    getCacheableAssets(s, t) {
      const e = {};
      return (
        s.forEach((i) => {
          (e[i] = t), (e[`${i}-bitmap`] = t);
        }),
        (e[`${t.fontFamily}-bitmap`] = t),
        e
      );
    },
  },
  td = {
    extension: { type: L.LoadParser, priority: ee.Normal },
    name: "loadBitmapFont",
    test(s) {
      return Qu.includes(wt.extname(s).toLowerCase());
    },
    async testParse(s) {
      return Ii.test(s) || Ur.test(s);
    },
    async parse(s, t, e) {
      const i = Ii.test(s) ? Ii.parse(s) : Ur.parse(s),
        { src: n } = t,
        { pages: r } = i,
        a = [],
        o = i.distanceField
          ? {
              scaleMode: "linear",
              alphaMode: "premultiply-alpha-on-upload",
              autoGenerateMipmaps: !1,
              resolution: 1,
            }
          : {};
      for (let u = 0; u < r.length; ++u) {
        const d = r[u].file;
        let f = wt.join(wt.dirname(n), d);
        (f = Hi(f, n)), a.push({ src: f, data: o });
      }
      const l = await e.load(a),
        h = a.map((u) => l[u.src]);
      return new Go({ data: i, textures: h }, n);
    },
    async load(s, t) {
      return await (await tt.get().fetch(s)).text();
    },
    async unload(s, t, e) {
      await Promise.all(
        s.pages.map((i) => e.unload(i.texture.source._sourceOrigin))
      ),
        s.destroy();
    },
  };
class ed {
  constructor(t, e = !1) {
    (this._loader = t),
      (this._assetList = []),
      (this._isLoading = !1),
      (this._maxConcurrent = 1),
      (this.verbose = e);
  }
  add(t) {
    t.forEach((e) => {
      this._assetList.push(e);
    }),
      this.verbose &&
        console.log("[BackgroundLoader] assets: ", this._assetList),
      this._isActive && !this._isLoading && this._next();
  }
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = !0;
      const t = [],
        e = Math.min(this._assetList.length, this._maxConcurrent);
      for (let i = 0; i < e; i++) t.push(this._assetList.pop());
      await this._loader.load(t), (this._isLoading = !1), this._next();
    }
  }
  get active() {
    return this._isActive;
  }
  set active(t) {
    this._isActive !== t &&
      ((this._isActive = t), t && !this._isLoading && this._next());
  }
}
const sd = {
  extension: { type: L.CacheParser, name: "cacheTextureArray" },
  test: (s) => Array.isArray(s) && s.every((t) => t instanceof W),
  getCacheableAssets: (s, t) => {
    const e = {};
    return (
      s.forEach((i) => {
        t.forEach((n, r) => {
          e[i + (r === 0 ? "" : r + 1)] = n;
        });
      }),
      e
    );
  },
};
async function Oo(s) {
  if ("Image" in globalThis)
    return new Promise((t) => {
      const e = new Image();
      (e.onload = () => {
        t(!0);
      }),
        (e.onerror = () => {
          t(!1);
        }),
        (e.src = s);
    });
  if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
    try {
      const t = await (await fetch(s)).blob();
      await createImageBitmap(t);
    } catch {
      return !1;
    }
    return !0;
  }
  return !1;
}
const id = {
    extension: { type: L.DetectionParser, priority: 1 },
    test: async () =>
      Oo(
        "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
      ),
    add: async (s) => [...s, "avif"],
    remove: async (s) => s.filter((t) => t !== "avif"),
  },
  Nr = ["png", "jpg", "jpeg"],
  nd = {
    extension: { type: L.DetectionParser, priority: -1 },
    test: () => Promise.resolve(!0),
    add: async (s) => [...s, ...Nr],
    remove: async (s) => s.filter((t) => !Nr.includes(t)),
  },
  rd =
    "WorkerGlobalScope" in globalThis &&
    globalThis instanceof globalThis.WorkerGlobalScope;
function Mn(s) {
  return rd ? !1 : document.createElement("video").canPlayType(s) !== "";
}
const ad = {
    extension: { type: L.DetectionParser, priority: 0 },
    test: async () => Mn("video/mp4"),
    add: async (s) => [...s, "mp4", "m4v"],
    remove: async (s) => s.filter((t) => t !== "mp4" && t !== "m4v"),
  },
  od = {
    extension: { type: L.DetectionParser, priority: 0 },
    test: async () => Mn("video/ogg"),
    add: async (s) => [...s, "ogv"],
    remove: async (s) => s.filter((t) => t !== "ogv"),
  },
  ld = {
    extension: { type: L.DetectionParser, priority: 0 },
    test: async () => Mn("video/webm"),
    add: async (s) => [...s, "webm"],
    remove: async (s) => s.filter((t) => t !== "webm"),
  },
  hd = {
    extension: { type: L.DetectionParser, priority: 0 },
    test: async () =>
      Oo(
        "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
      ),
    add: async (s) => [...s, "webp"],
    remove: async (s) => s.filter((t) => t !== "webp"),
  };
class cd {
  constructor() {
    (this._parsers = []),
      (this._parsersValidated = !1),
      (this.parsers = new Proxy(this._parsers, {
        set: (t, e, i) => ((this._parsersValidated = !1), (t[e] = i), !0),
      })),
      (this.promiseCache = {});
  }
  reset() {
    (this._parsersValidated = !1), (this.promiseCache = {});
  }
  _getLoadPromiseAndParser(t, e) {
    const i = { promise: null, parser: null };
    return (
      (i.promise = (async () => {
        var a, o;
        let n = null,
          r = null;
        if (
          (e.loadParser &&
            ((r = this._parserHash[e.loadParser]),
            r ||
              rt(
                `[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`
              )),
          !r)
        ) {
          for (let l = 0; l < this.parsers.length; l++) {
            const h = this.parsers[l];
            if (h.load && (a = h.test) != null && a.call(h, t, e, this)) {
              r = h;
              break;
            }
          }
          if (!r)
            return (
              rt(
                `[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`
              ),
              null
            );
        }
        (n = await r.load(t, e, this)), (i.parser = r);
        for (let l = 0; l < this.parsers.length; l++) {
          const h = this.parsers[l];
          h.parse &&
            h.parse &&
            (await ((o = h.testParse) == null
              ? void 0
              : o.call(h, n, e, this))) &&
            ((n = (await h.parse(n, e, this)) || n), (i.parser = h));
        }
        return n;
      })()),
      i
    );
  }
  async load(t, e) {
    this._parsersValidated || this._validateParsers();
    let i = 0;
    const n = {},
      r = Ws(t),
      a = It(t, (h) => ({ alias: [h], src: h, data: {} })),
      o = a.length,
      l = a.map(async (h) => {
        const c = wt.toAbsolute(h.src);
        if (!n[h.src])
          try {
            this.promiseCache[c] ||
              (this.promiseCache[c] = this._getLoadPromiseAndParser(c, h)),
              (n[h.src] = await this.promiseCache[c].promise),
              e && e(++i / o);
          } catch (u) {
            throw (
              (delete this.promiseCache[c],
              delete n[h.src],
              new Error(`[Loader.load] Failed to load ${c}.
${u}`))
            );
          }
      });
    return await Promise.all(l), r ? n[a[0].src] : n;
  }
  async unload(t) {
    const i = It(t, (n) => ({ alias: [n], src: n })).map(async (n) => {
      var o, l;
      const r = wt.toAbsolute(n.src),
        a = this.promiseCache[r];
      if (a) {
        const h = await a.promise;
        delete this.promiseCache[r],
          await ((l = (o = a.parser) == null ? void 0 : o.unload) == null
            ? void 0
            : l.call(o, h, n, this));
      }
    });
    await Promise.all(i);
  }
  _validateParsers() {
    (this._parsersValidated = !0),
      (this._parserHash = this._parsers
        .filter((t) => t.name)
        .reduce(
          (t, e) => (
            e.name
              ? t[e.name] && rt(`[Assets] loadParser name conflict "${e.name}"`)
              : rt("[Assets] loadParser should have a name"),
            { ...t, [e.name]: e }
          ),
          {}
        ));
  }
}
function Ve(s, t) {
  if (Array.isArray(t)) {
    for (const e of t) if (s.startsWith(`data:${e}`)) return !0;
    return !1;
  }
  return s.startsWith(`data:${t}`);
}
function He(s, t) {
  const e = s.split("?")[0],
    i = wt.extname(e).toLowerCase();
  return Array.isArray(t) ? t.includes(i) : i === t;
}
const ud = ".json",
  dd = "application/json",
  fd = {
    extension: { type: L.LoadParser, priority: ee.Low },
    name: "loadJson",
    test(s) {
      return Ve(s, dd) || He(s, ud);
    },
    async load(s) {
      return await (await tt.get().fetch(s)).json();
    },
  },
  pd = ".txt",
  md = "text/plain",
  gd = {
    name: "loadTxt",
    extension: { type: L.LoadParser, priority: ee.Low, name: "loadTxt" },
    test(s) {
      return Ve(s, md) || He(s, pd);
    },
    async load(s) {
      return await (await tt.get().fetch(s)).text();
    },
  },
  _d = [
    "normal",
    "bold",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  yd = [".ttf", ".otf", ".woff", ".woff2"],
  xd = ["font/ttf", "font/otf", "font/woff", "font/woff2"],
  bd = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function wd(s) {
  const t = wt.extname(s),
    n = wt
      .basename(s, t)
      .replace(/(-|_)/g, " ")
      .toLowerCase()
      .split(" ")
      .map((o) => o.charAt(0).toUpperCase() + o.slice(1));
  let r = n.length > 0;
  for (const o of n)
    if (!o.match(bd)) {
      r = !1;
      break;
    }
  let a = n.join(" ");
  return r || (a = `"${a.replace(/[\\"]/g, "\\$&")}"`), a;
}
const vd = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function Ad(s) {
  return vd.test(s) ? s : encodeURI(s);
}
const Sd = {
  extension: { type: L.LoadParser, priority: ee.Low },
  name: "loadWebFont",
  test(s) {
    return Ve(s, xd) || He(s, yd);
  },
  async load(s, t) {
    var i, n, r;
    const e = tt.get().getFontFaceSet();
    if (e) {
      const a = [],
        o = ((i = t.data) == null ? void 0 : i.family) ?? wd(s),
        l = ((r = (n = t.data) == null ? void 0 : n.weights) == null
          ? void 0
          : r.filter((c) => _d.includes(c))) ?? ["normal"],
        h = t.data ?? {};
      for (let c = 0; c < l.length; c++) {
        const u = l[c],
          d = new FontFace(o, `url(${Ad(s)})`, { ...h, weight: u });
        await d.load(), e.add(d), a.push(d);
      }
      return (
        J.set(`${o}-and-url`, { url: s, fontFaces: a }),
        a.length === 1 ? a[0] : a
      );
    }
    return (
      rt("[loadWebFont] FontFace API is not supported. Skipping loading font"),
      null
    );
  },
  unload(s) {
    (Array.isArray(s) ? s : [s]).forEach((t) => {
      J.remove(t.family), tt.get().getFontFaceSet().delete(t);
    });
  },
};
function Tn(s, t = 1) {
  var i;
  const e = (i = We.RETINA_PREFIX) == null ? void 0 : i.exec(s);
  return e ? parseFloat(e[1]) : t;
}
function En(s, t, e) {
  (s.label = e), (s._sourceOrigin = e);
  const i = new W({ source: s, label: e }),
    n = () => {
      delete t.promiseCache[e], J.has(e) && J.remove(e);
    };
  return (
    i.source.once("destroy", () => {
      t.promiseCache[e] &&
        (rt(
          "[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."
        ),
        n());
    }),
    i.once("destroy", () => {
      s.destroyed ||
        (rt(
          "[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."
        ),
        n());
    }),
    i
  );
}
const Cd = ".svg",
  Pd = "image/svg+xml",
  kd = {
    extension: { type: L.LoadParser, priority: ee.Low, name: "loadSVG" },
    name: "loadSVG",
    config: { crossOrigin: "anonymous", parseAsGraphicsContext: !1 },
    test(s) {
      return Ve(s, Pd) || He(s, Cd);
    },
    async load(s, t, e) {
      return t.data.parseAsGraphicsContext ?? this.config.parseAsGraphicsContext
        ? Td(s)
        : Md(s, t, e, this.config.crossOrigin);
    },
    unload(s) {
      s.destroy(!0);
    },
  };
async function Md(s, t, e, i) {
  var m, _, y;
  const r = await (await tt.get().fetch(s)).blob(),
    a = URL.createObjectURL(r),
    o = new Image();
  (o.src = a), (o.crossOrigin = i), await o.decode(), URL.revokeObjectURL(a);
  const l = document.createElement("canvas"),
    h = l.getContext("2d"),
    c = ((m = t.data) == null ? void 0 : m.resolution) || Tn(s),
    u = ((_ = t.data) == null ? void 0 : _.width) ?? o.width,
    d = ((y = t.data) == null ? void 0 : y.height) ?? o.height;
  (l.width = u * c), (l.height = d * c), h.drawImage(o, 0, 0, u * c, d * c);
  const { parseAsGraphicsContext: f, ...p } = t.data,
    g = new Ne({
      resource: l,
      alphaMode: "premultiply-alpha-on-upload",
      resolution: c,
      ...p,
    });
  return En(g, e, s);
}
async function Td(s) {
  const e = await (await tt.get().fetch(s)).text(),
    i = new de();
  return i.svg(e), i;
}
const Ed = `(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;
let Be = null,
  on = class {
    constructor() {
      Be ||
        (Be = URL.createObjectURL(
          new Blob([Ed], { type: "application/javascript" })
        )),
        (this.worker = new Worker(Be));
    }
  };
on.revokeObjectURL = function () {
  Be && (URL.revokeObjectURL(Be), (Be = null));
};
const Id = `(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;
let Fe = null;
class zo {
  constructor() {
    Fe ||
      (Fe = URL.createObjectURL(
        new Blob([Id], { type: "application/javascript" })
      )),
      (this.worker = new Worker(Fe));
  }
}
zo.revokeObjectURL = function () {
  Fe && (URL.revokeObjectURL(Fe), (Fe = null));
};
let Wr = 0,
  Bi;
class Bd {
  constructor() {
    (this._initialized = !1),
      (this._createdWorkers = 0),
      (this._workerPool = []),
      (this._queue = []),
      (this._resolveHash = {});
  }
  isImageBitmapSupported() {
    return this._isImageBitmapSupported !== void 0
      ? this._isImageBitmapSupported
      : ((this._isImageBitmapSupported = new Promise((t) => {
          const { worker: e } = new on();
          e.addEventListener("message", (i) => {
            e.terminate(), on.revokeObjectURL(), t(i.data);
          });
        })),
        this._isImageBitmapSupported);
  }
  loadImageBitmap(t, e) {
    var i;
    return this._run("loadImageBitmap", [
      t,
      (i = e == null ? void 0 : e.data) == null ? void 0 : i.alphaMode,
    ]);
  }
  async _initWorkers() {
    this._initialized || (this._initialized = !0);
  }
  _getWorker() {
    Bi === void 0 && (Bi = navigator.hardwareConcurrency || 4);
    let t = this._workerPool.pop();
    return (
      !t &&
        this._createdWorkers < Bi &&
        (this._createdWorkers++,
        (t = new zo().worker),
        t.addEventListener("message", (e) => {
          this._complete(e.data), this._returnWorker(e.target), this._next();
        })),
      t
    );
  }
  _returnWorker(t) {
    this._workerPool.push(t);
  }
  _complete(t) {
    t.error !== void 0
      ? this._resolveHash[t.uuid].reject(t.error)
      : this._resolveHash[t.uuid].resolve(t.data),
      (this._resolveHash[t.uuid] = null);
  }
  async _run(t, e) {
    await this._initWorkers();
    const i = new Promise((n, r) => {
      this._queue.push({ id: t, arguments: e, resolve: n, reject: r });
    });
    return this._next(), i;
  }
  _next() {
    if (!this._queue.length) return;
    const t = this._getWorker();
    if (!t) return;
    const e = this._queue.pop(),
      i = e.id;
    (this._resolveHash[Wr] = { resolve: e.resolve, reject: e.reject }),
      t.postMessage({ data: e.arguments, uuid: Wr++, id: i });
  }
}
const Vr = new Bd(),
  Fd = [".jpeg", ".jpg", ".png", ".webp", ".avif"],
  Rd = ["image/jpeg", "image/png", "image/webp", "image/avif"];
async function Ld(s, t) {
  var n;
  const e = await tt.get().fetch(s);
  if (!e.ok)
    throw new Error(
      `[loadImageBitmap] Failed to fetch ${s}: ${e.status} ${e.statusText}`
    );
  const i = await e.blob();
  return ((n = t == null ? void 0 : t.data) == null ? void 0 : n.alphaMode) ===
    "premultiplied-alpha"
    ? createImageBitmap(i, { premultiplyAlpha: "none" })
    : createImageBitmap(i);
}
const Do = {
    name: "loadTextures",
    extension: { type: L.LoadParser, priority: ee.High, name: "loadTextures" },
    config: {
      preferWorkers: !0,
      preferCreateImageBitmap: !0,
      crossOrigin: "anonymous",
    },
    test(s) {
      return Ve(s, Rd) || He(s, Fd);
    },
    async load(s, t, e) {
      var r;
      let i = null;
      globalThis.createImageBitmap && this.config.preferCreateImageBitmap
        ? this.config.preferWorkers && (await Vr.isImageBitmapSupported())
          ? (i = await Vr.loadImageBitmap(s, t))
          : (i = await Ld(s, t))
        : (i = await new Promise((a) => {
            (i = new Image()),
              (i.crossOrigin = this.config.crossOrigin),
              (i.src = s),
              i.complete
                ? a(i)
                : (i.onload = () => {
                    a(i);
                  });
          }));
      const n = new Ne({
        resource: i,
        alphaMode: "premultiply-alpha-on-upload",
        resolution: ((r = t.data) == null ? void 0 : r.resolution) || Tn(s),
        ...t.data,
      });
      return En(n, e, s);
    },
    unload(s) {
      s.destroy(!0);
    },
  },
  Uo = [".mp4", ".m4v", ".webm", ".ogg", ".ogv", ".h264", ".avi", ".mov"],
  $d = Uo.map((s) => `video/${s.substring(1)}`);
function Gd(s, t, e) {
  e === void 0 && !t.startsWith("data:")
    ? (s.crossOrigin = zd(t))
    : e !== !1 && (s.crossOrigin = typeof e == "string" ? e : "anonymous");
}
function Od(s) {
  return new Promise((t, e) => {
    s.addEventListener("canplaythrough", i),
      s.addEventListener("error", n),
      s.load();
    function i() {
      r(), t();
    }
    function n(a) {
      r(), e(a);
    }
    function r() {
      s.removeEventListener("canplaythrough", i),
        s.removeEventListener("error", n);
    }
  });
}
function zd(s, t = globalThis.location) {
  if (s.startsWith("data:")) return "";
  t = t || globalThis.location;
  const e = new URL(s, document.baseURI);
  return e.hostname !== t.hostname ||
    e.port !== t.port ||
    e.protocol !== t.protocol
    ? "anonymous"
    : "";
}
const Dd = {
    name: "loadVideo",
    extension: { type: L.LoadParser, name: "loadVideo" },
    test(s) {
      const t = Ve(s, $d),
        e = He(s, Uo);
      return t || e;
    },
    async load(s, t, e) {
      var l, h;
      const i = {
          ...Rs.defaultOptions,
          resolution: ((l = t.data) == null ? void 0 : l.resolution) || Tn(s),
          alphaMode:
            ((h = t.data) == null ? void 0 : h.alphaMode) || (await Va()),
          ...t.data,
        },
        n = document.createElement("video"),
        r = {
          preload: i.autoLoad !== !1 ? "auto" : void 0,
          "webkit-playsinline": i.playsinline !== !1 ? "" : void 0,
          playsinline: i.playsinline !== !1 ? "" : void 0,
          muted: i.muted === !0 ? "" : void 0,
          loop: i.loop === !0 ? "" : void 0,
          autoplay: i.autoPlay !== !1 ? "" : void 0,
        };
      Object.keys(r).forEach((c) => {
        const u = r[c];
        u !== void 0 && n.setAttribute(c, u);
      }),
        i.muted === !0 && (n.muted = !0),
        Gd(n, s, i.crossorigin);
      const a = document.createElement("source");
      let o;
      if (s.startsWith("data:")) o = s.slice(5, s.indexOf(";"));
      else if (!s.startsWith("blob:")) {
        const c = s
          .split("?")[0]
          .slice(s.lastIndexOf(".") + 1)
          .toLowerCase();
        o = Rs.MIME_TYPES[c] || `video/${c}`;
      }
      return (
        (a.src = s),
        o && (a.type = o),
        new Promise((c) => {
          const u = async () => {
            const d = new Rs({ ...i, resource: n });
            n.removeEventListener("canplay", u),
              t.data.preload && (await Od(n)),
              c(En(d, e, s));
          };
          n.addEventListener("canplay", u), n.appendChild(a);
        })
      );
    },
    unload(s) {
      s.destroy(!0);
    },
  },
  No = {
    extension: { type: L.ResolveParser, name: "resolveTexture" },
    test: Do.test,
    parse: (s) => {
      var t;
      return {
        resolution: parseFloat(
          ((t = We.RETINA_PREFIX.exec(s)) == null ? void 0 : t[1]) ?? "1"
        ),
        format: s.split(".").pop(),
        src: s,
      };
    },
  },
  Ud = {
    extension: { type: L.ResolveParser, priority: -2, name: "resolveJson" },
    test: (s) => We.RETINA_PREFIX.test(s) && s.endsWith(".json"),
    parse: No.parse,
  };
class Nd {
  constructor() {
    (this._detections = []),
      (this._initialized = !1),
      (this.resolver = new We()),
      (this.loader = new cd()),
      (this.cache = J),
      (this._backgroundLoader = new ed(this.loader)),
      (this._backgroundLoader.active = !0),
      this.reset();
  }
  async init(t = {}) {
    var r, a;
    if (this._initialized) {
      rt(
        "[Assets]AssetManager already initialized, did you load before calling this Assets.init()?"
      );
      return;
    }
    if (
      ((this._initialized = !0),
      t.defaultSearchParams &&
        this.resolver.setDefaultSearchParams(t.defaultSearchParams),
      t.basePath && (this.resolver.basePath = t.basePath),
      t.bundleIdentifier &&
        this.resolver.setBundleIdentifier(t.bundleIdentifier),
      t.manifest)
    ) {
      let o = t.manifest;
      typeof o == "string" && (o = await this.load(o)),
        this.resolver.addManifest(o);
    }
    const e = ((r = t.texturePreference) == null ? void 0 : r.resolution) ?? 1,
      i = typeof e == "number" ? [e] : e,
      n = await this._detectFormats({
        preferredFormats: (a = t.texturePreference) == null ? void 0 : a.format,
        skipDetections: t.skipDetections,
        detections: this._detections,
      });
    this.resolver.prefer({ params: { format: n, resolution: i } }),
      t.preferences && this.setPreferences(t.preferences);
  }
  add(t) {
    this.resolver.add(t);
  }
  async load(t, e) {
    this._initialized || (await this.init());
    const i = Ws(t),
      n = It(t).map((o) => {
        if (typeof o != "string") {
          const l = this.resolver.getAlias(o);
          return (
            l.some((h) => !this.resolver.hasKey(h)) && this.add(o),
            Array.isArray(l) ? l[0] : l
          );
        }
        return this.resolver.hasKey(o) || this.add({ alias: o, src: o }), o;
      }),
      r = this.resolver.resolve(n),
      a = await this._mapLoadToResolve(r, e);
    return i ? a[n[0]] : a;
  }
  addBundle(t, e) {
    this.resolver.addBundle(t, e);
  }
  async loadBundle(t, e) {
    this._initialized || (await this.init());
    let i = !1;
    typeof t == "string" && ((i = !0), (t = [t]));
    const n = this.resolver.resolveBundle(t),
      r = {},
      a = Object.keys(n);
    let o = 0,
      l = 0;
    const h = () => {
        e == null || e(++o / l);
      },
      c = a.map((u) => {
        const d = n[u];
        return (
          (l += Object.keys(d).length),
          this._mapLoadToResolve(d, h).then((f) => {
            r[u] = f;
          })
        );
      });
    return await Promise.all(c), i ? r[t[0]] : r;
  }
  async backgroundLoad(t) {
    this._initialized || (await this.init()), typeof t == "string" && (t = [t]);
    const e = this.resolver.resolve(t);
    this._backgroundLoader.add(Object.values(e));
  }
  async backgroundLoadBundle(t) {
    this._initialized || (await this.init()), typeof t == "string" && (t = [t]);
    const e = this.resolver.resolveBundle(t);
    Object.values(e).forEach((i) => {
      this._backgroundLoader.add(Object.values(i));
    });
  }
  reset() {
    this.resolver.reset(),
      this.loader.reset(),
      this.cache.reset(),
      (this._initialized = !1);
  }
  get(t) {
    if (typeof t == "string") return J.get(t);
    const e = {};
    for (let i = 0; i < t.length; i++) e[i] = J.get(t[i]);
    return e;
  }
  async _mapLoadToResolve(t, e) {
    const i = [...new Set(Object.values(t))];
    this._backgroundLoader.active = !1;
    const n = await this.loader.load(i, e);
    this._backgroundLoader.active = !0;
    const r = {};
    return (
      i.forEach((a) => {
        const o = n[a.src],
          l = [a.src];
        a.alias && l.push(...a.alias),
          l.forEach((h) => {
            r[h] = o;
          }),
          J.set(l, o);
      }),
      r
    );
  }
  async unload(t) {
    this._initialized || (await this.init());
    const e = It(t).map((n) => (typeof n != "string" ? n.src : n)),
      i = this.resolver.resolve(e);
    await this._unloadFromResolved(i);
  }
  async unloadBundle(t) {
    this._initialized || (await this.init()), (t = It(t));
    const e = this.resolver.resolveBundle(t),
      i = Object.keys(e).map((n) => this._unloadFromResolved(e[n]));
    await Promise.all(i);
  }
  async _unloadFromResolved(t) {
    const e = Object.values(t);
    e.forEach((i) => {
      J.remove(i.src);
    }),
      await this.loader.unload(e);
  }
  async _detectFormats(t) {
    let e = [];
    t.preferredFormats &&
      (e = Array.isArray(t.preferredFormats)
        ? t.preferredFormats
        : [t.preferredFormats]);
    for (const i of t.detections)
      t.skipDetections || (await i.test())
        ? (e = await i.add(e))
        : t.skipDetections || (e = await i.remove(e));
    return (e = e.filter((i, n) => e.indexOf(i) === n)), e;
  }
  get detections() {
    return this._detections;
  }
  setPreferences(t) {
    this.loader.parsers.forEach((e) => {
      e.config &&
        Object.keys(e.config)
          .filter((i) => i in t)
          .forEach((i) => {
            e.config[i] = t[i];
          });
    });
  }
}
const ss = new Nd();
mt.handleByList(L.LoadParser, ss.loader.parsers)
  .handleByList(L.ResolveParser, ss.resolver.parsers)
  .handleByList(L.CacheParser, ss.cache.parsers)
  .handleByList(L.DetectionParser, ss.detections);
mt.add(sd, nd, id, hd, ad, od, ld, fd, gd, Sd, kd, Do, Dd, td, Ju, No, Ud);
const Hr = {
  loader: L.LoadParser,
  resolver: L.ResolveParser,
  cache: L.CacheParser,
  detection: L.DetectionParser,
};
mt.handle(
  L.Asset,
  (s) => {
    const t = s.ref;
    Object.entries(Hr)
      .filter(([e]) => !!t[e])
      .forEach(([e, i]) =>
        mt.add(Object.assign(t[e], { extension: t[e].extension ?? i }))
      );
  },
  (s) => {
    const t = s.ref;
    Object.keys(Hr)
      .filter((e) => !!t[e])
      .forEach((e) => mt.remove(t[e]));
  }
);
class Wd extends La {
  constructor(t, e) {
    const {
      text: i,
      resolution: n,
      style: r,
      anchor: a,
      width: o,
      height: l,
      roundPixels: h,
      ...c
    } = t;
    super({ ...c }),
      (this.batched = !0),
      (this._resolution = null),
      (this._autoResolution = !0),
      (this._didTextUpdate = !0),
      (this._styleClass = e),
      (this.text = i ?? ""),
      (this.style = r),
      (this.resolution = n ?? null),
      (this.allowChildren = !1),
      (this._anchor = new _t({
        _onUpdate: () => {
          this.onViewUpdate();
        },
      })),
      a && (this.anchor = a),
      (this.roundPixels = h ?? !1),
      o !== void 0 && (this.width = o),
      l !== void 0 && (this.height = l);
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(t) {
    typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t);
  }
  set text(t) {
    (t = t.toString()),
      this._text !== t && ((this._text = t), this.onViewUpdate());
  }
  get text() {
    return this._text;
  }
  set resolution(t) {
    (this._autoResolution = t === null),
      (this._resolution = t),
      this.onViewUpdate();
  }
  get resolution() {
    return this._resolution;
  }
  get style() {
    return this._style;
  }
  set style(t) {
    var e;
    (t = t || {}),
      (e = this._style) == null || e.off("update", this.onViewUpdate, this),
      t instanceof this._styleClass
        ? (this._style = t)
        : (this._style = new this._styleClass(t)),
      this._style.on("update", this.onViewUpdate, this),
      this.onViewUpdate();
  }
  get bounds() {
    return (
      this._boundsDirty && (this._updateBounds(), (this._boundsDirty = !1)),
      this._bounds
    );
  }
  get width() {
    return Math.abs(this.scale.x) * this.bounds.width;
  }
  set width(t) {
    this._setWidth(t, this.bounds.width);
  }
  get height() {
    return Math.abs(this.scale.y) * this.bounds.height;
  }
  set height(t) {
    this._setHeight(t, this.bounds.height);
  }
  getSize(t) {
    return (
      t || (t = {}),
      (t.width = Math.abs(this.scale.x) * this.bounds.width),
      (t.height = Math.abs(this.scale.y) * this.bounds.height),
      t
    );
  }
  setSize(t, e) {
    typeof t == "object"
      ? ((e = t.height ?? t.width), (t = t.width))
      : e ?? (e = t),
      t !== void 0 && this._setWidth(t, this.bounds.width),
      e !== void 0 && this._setHeight(e, this.bounds.height);
  }
  addBounds(t) {
    const e = this.bounds;
    t.addFrame(e.minX, e.minY, e.maxX, e.maxY);
  }
  containsPoint(t) {
    const e = this.bounds.width,
      i = this.bounds.height,
      n = -e * this.anchor.x;
    let r = 0;
    return (
      t.x >= n &&
      t.x <= n + e &&
      ((r = -i * this.anchor.y), t.y >= r && t.y <= r + i)
    );
  }
  onViewUpdate() {
    (this._boundsDirty = !0),
      this.didViewUpdate || (this._didTextUpdate = !0),
      super.onViewUpdate();
  }
  _getKey() {
    return `${this.text}:${this._style.styleKey}:${this._resolution}`;
  }
  destroy(t = !1) {
    super.destroy(t),
      (this.owner = null),
      (this._bounds = null),
      (this._anchor = null),
      (typeof t == "boolean" ? t : t != null && t.style) &&
        this._style.destroy(t),
      (this._style = null),
      (this._text = null);
  }
}
function Vd(s, t) {
  let e = s[0] ?? {};
  return (
    (typeof e == "string" || s[1]) &&
      (et(it, `use new ${t}({ text: "hi!", style }) instead`),
      (e = { text: e, style: s[1] })),
    e
  );
}
class Hd extends Wd {
  constructor(...t) {
    const e = Vd(t, "Text");
    super(e, xe), (this.renderPipeId = "text");
  }
  _updateBounds() {
    const t = this._bounds,
      e = this._anchor,
      i = an.measureText(this._text, this._style),
      { width: n, height: r } = i;
    (t.minX = -e._x * n),
      (t.maxX = t.minX + n),
      (t.minY = -e._y * r),
      (t.maxY = t.minY + r);
  }
}
mt.add(gl, _l);
function jd(s) {
  let t, e, i, n, r;
  return {
    c() {
      (t = M("script")),
        (i = M("script")),
        (i.innerHTML = ""),
        (r = M("script")),
        (r.textContent = `window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());

		gtag('config', 'G-9M6JETNYJ5');`),
        (t.defer = !0),
        Dn(
          t.src,
          (e = "https://static.cloudflareinsights.com/beacon.min.js")
        ) || S(t, "src", e),
        S(t, "data-cf-beacon", s[0]),
        (i.async = !0),
        Dn(
          i.src,
          (n = "https://www.googleta132xxdadgmanager.com/gtag/js?id=G-9M6JETNYJ5")
        ) || S(i, "src", n);
    },
    m(a, o) {
      P(document.head, t), P(document.head, i), P(document.head, r);
    },
    p: Y,
    i: Y,
    o: Y,
    d(a) {
      I(t), I(i), I(r);
    },
  };
}
function Yd(s) {
  return [{ token: "e8f7ea160f464f118b12dc2a395614d5" }];
}
class Xd extends Rt {
  constructor(t) {
    super(), Ft(this, t, Yd, jd, Mt, {});
  }
}
function qd(s) {
  let t,
    e,
    i,
    n,
    r,
    a,
    o,
    l,
    h,
    c,
    u,
    d,
    f,
    p,
    g,
    m,
    _,
    y,
    x,
    b,
    C,
    F,
    k,
    T,
    w,
    A,
    N,
    at,
    E,
    v,
    G,
    V,
    st,
    we,
    $,
    D,
    se,
    X,
    xt;
  return {
    c() {
      (t = M("meta")),
        (e = O()),
        (i = M("meta")),
        (n = O()),
        (r = M("meta")),
        (a = O()),
        (o = M("meta")),
        (l = O()),
        (h = M("meta")),
        (c = O()),
        (u = M("meta")),
        (d = O()),
        (f = M("link")),
        (p = O()),
        (g = M("meta")),
        (m = O()),
        (_ = M("meta")),
        (y = O()),
        (x = M("meta")),
        (b = O()),
        (C = M("meta")),
        (F = O()),
        (k = M("meta")),
        (T = O()),
        (w = M("meta")),
        (A = O()),
        (N = M("meta")),
        (at = O()),
        (E = M("meta")),
        (v = O()),
        (G = M("meta")),
        (V = O()),
        (st = M("meta")),
        (we = O()),
        ($ = M("meta")),
        (D = O()),
        (se = M("meta")),
        (X = O()),
        (xt = M("title")),
        (xt.textContent = `${Ri}`),
        S(t, "lang", "en"),
        S(i, "name", "description"),
        S(i, "content", Li),
        S(r, "name", "keywords"),
        S(r, "content", "clicker,incremental,game,atoms"),
        S(o, "name", "author"),
        S(o, "content", jr),
        S(h, "name", "viewport"),
        S(h, "content", "width=device-width, initial-scale=1.0"),
        S(u, "name", "theme-color"),
        S(u, "content", "#4a90e2"),
        S(f, "rel", "icon"),
        S(f, "type", "image/png"),
        S(f, "href", "/atom.png"),
        S(g, "property", "og:title"),
        S(g, "content", Ri),
        S(_, "property", "og:description"),
        S(_, "content", Li),
        S(x, "property", "og:image"),
        S(x, "content", "/atom.png"),
        S(C, "property", "og:url"),
        S(C, "content", Fi),
        S(k, "property", "og:type"),
        S(k, "content", "website"),
        S(w, "name", "twitter:card"),
        S(w, "content", "summary"),
        S(N, "name", "twitter:creator"),
        S(N, "content", jr),
        S(E, "name", "twitter:site"),
        S(E, "content", Fi),
        S(G, "name", "twitter:title"),
        S(G, "content", Ri),
        S(st, "name", "twitter:description"),
        S(st, "content", Li),
        S($, "name", "twitter:image"),
        S($, "content", "/atom.png"),
        S(se, "name", "canonical"),
        S(se, "content", Fi);
    },
    m(z, U) {
      B(z, t, U),
        B(z, e, U),
        B(z, i, U),
        B(z, n, U),
        B(z, r, U),
        B(z, a, U),
        B(z, o, U),
        B(z, l, U),
        B(z, h, U),
        B(z, c, U),
        B(z, u, U),
        B(z, d, U),
        B(z, f, U),
        B(z, p, U),
        B(z, g, U),
        B(z, m, U),
        B(z, _, U),
        B(z, y, U),
        B(z, x, U),
        B(z, b, U),
        B(z, C, U),
        B(z, F, U),
        B(z, k, U),
        B(z, T, U),
        B(z, w, U),
        B(z, A, U),
        B(z, N, U),
        B(z, at, U),
        B(z, E, U),
        B(z, v, U),
        B(z, G, U),
        B(z, V, U),
        B(z, st, U),
        B(z, we, U),
        B(z, $, U),
        B(z, D, U),
        B(z, se, U),
        B(z, X, U),
        B(z, xt, U);
    },
    p: Y,
    i: Y,
    o: Y,
    d(z) {
      z &&
        (I(t),
        I(e),
        I(i),
        I(n),
        I(r),
        I(a),
        I(o),
        I(l),
        I(h),
        I(c),
        I(u),
        I(d),
        I(f),
        I(p),
        I(g),
        I(m),
        I(_),
        I(y),
        I(x),
        I(b),
        I(C),
        I(F),
        I(k),
        I(T),
        I(w),
        I(A),
        I(N),
        I(at),
        I(E),
        I(v),
        I(G),
        I(V),
        I(st),
        I(we),
        I($),
        I(D),
        I(se),
        I(X),
        I(xt));
    },
  };
}
const Fi = "https://atom-clicker.ayfri.com",
  Ri = "Atom Clicker",
  jr = "Ayfri",
  Li = "A simple clicker/incremental game around atoms.";
class Kd extends Rt {
  constructor(t) {
    super(), Ft(this, t, null, qd, Mt, {});
  }
}
const Ce = [];
function Zd(s, t) {
  return { subscribe: Gt(s, t).subscribe };
}
function Gt(s, t = Y) {
  let e;
  const i = new Set();
  function n(o) {
    if (Mt(s, o) && ((s = o), e)) {
      const l = !Ce.length;
      for (const h of i) h[1](), Ce.push(h, s);
      if (l) {
        for (let h = 0; h < Ce.length; h += 2) Ce[h][0](Ce[h + 1]);
        Ce.length = 0;
      }
    }
  }
  function r(o) {
    n(o(s));
  }
  function a(o, l = Y) {
    const h = [o, l];
    return (
      i.add(h),
      i.size === 1 && (e = t(n, r) || Y),
      o(s),
      () => {
        i.delete(h), i.size === 0 && e && (e(), (e = null));
      }
    );
  }
  return { set: n, update: r, subscribe: a };
}
function be(s, t, e) {
  const i = !Array.isArray(s),
    n = i ? [s] : s;
  if (!n.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const r = t.length < 2;
  return Zd(e, (a, o) => {
    let l = !1;
    const h = [];
    let c = 0,
      u = Y;
    const d = () => {
        if (c) return;
        u();
        const p = t(i ? h[0] : h, a, o);
        r ? a(p) : (u = De(p) ? p : Y);
      },
      f = n.map((p, g) =>
        hn(
          p,
          (m) => {
            (h[g] = m), (c &= ~(1 << g)), l && d();
          },
          () => {
            c |= 1 << g;
          }
        )
      );
    return (
      (l = !0),
      d(),
      function () {
        Kt(f), u(), (l = !1);
      }
    );
  });
}
let Wo = Gt([]);
const ln = Gt(null);
function Qd(s, t, e) {
  let i;
  ut(s, ln, (a) => e(1, (i = a)));
  let n;
  const r = (a) => {
    Wo.update((o) => {
      let l = [...o];
      return (
        (l = l.filter((h) => {
          var c;
          return (
            h.sprite.parent || n.addChild(h.sprite),
            (c = h.update) == null || c.call(h, h, a),
            !h.sprite.destroyed
          );
        })),
        l
      );
    });
  };
  return (
    fn(async () => {
      const a = new po();
      await a.init({
        backgroundAlpha: 0,
        antialias: !0,
        resizeTo: document.body,
      }),
        document.body.appendChild(a.canvas);
      const l = await new Promise((h) =>
        requestAnimationFrame((c) =>
          requestAnimationFrame((u) => h(1e3 / (u - c)))
        )
      );
      a.ticker.add((h) => r(h.deltaTime)),
        (a.ticker.minFPS = Math.round(l)),
        (n = new gt({ isRenderGroup: !0 })),
        a.stage.addChild(n),
        da(ln, (i = a), i);
    }),
    Xs(() => {
      i.ticker.remove((a) => r(a.deltaTime)),
        document.body.removeChild(i.canvas),
        i.destroy();
    }),
    []
  );
}
class Jd extends Rt {
  constructor(t) {
    super(), Ft(this, t, Qd, null, Mt, {});
  }
}
let In = Gt([]);
function tf(s) {
  In.update((t) => [...t, s]), setTimeout(() => Vo(s.id), s.duration);
}
function Vo(s) {
  In.update((t) => t.filter((e) => e.id !== s));
}
function ef(s, t, e = 1e4) {
  tf({
    id: Date.now() + Math.floor(Math.random() * 1e5),
    title: s,
    message: t,
    duration: e,
    type: "info",
  });
}
function te(s, { delay: t = 0, duration: e = 400, easing: i = Ys } = {}) {
  const n = +getComputedStyle(s).opacity;
  return { delay: t, duration: e, easing: i, css: (r) => `opacity: ${r * n}` };
}
function Yr(s, t, e) {
  const i = s.slice();
  return (i[2] = t[e]), i;
}
function Xr(s) {
  let t,
    e,
    i,
    n = s[2].title + "",
    r,
    a,
    o,
    l,
    h,
    c = s[2].message + "",
    u,
    d,
    f,
    p,
    g;
  function m() {
    return s[1](s[2]);
  }
  return {
    c() {
      (t = M("div")),
        (e = M("div")),
        (i = M("h3")),
        (r = Q(n)),
        (a = O()),
        (o = M("button")),
        (o.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg>'),
        (l = O()),
        (h = M("p")),
        (u = O()),
        S(i, "class", "svelte-w5bbcy"),
        S(o, "class", "close svelte-w5bbcy"),
        S(e, "class", "top svelte-w5bbcy"),
        S(h, "class", "svelte-w5bbcy"),
        S(t, "class", "toast svelte-w5bbcy"),
        dt(t, "type", s[2].type);
    },
    m(_, y) {
      B(_, t, y),
        P(t, e),
        P(e, i),
        P(i, r),
        P(e, a),
        P(e, o),
        P(t, l),
        P(t, h),
        (h.innerHTML = c),
        P(t, u),
        (f = !0),
        p || ((g = qt(o, "click", m)), (p = !0));
    },
    p(_, y) {
      (s = _),
        (!f || y & 1) && n !== (n = s[2].title + "") && vt(r, n),
        (!f || y & 1) && c !== (c = s[2].message + "") && (h.innerHTML = c),
        (!f || y & 1) && dt(t, "type", s[2].type);
    },
    i(_) {
      f ||
        (_ &&
          Nt(() => {
            f && (d || (d = Re(t, te, { duration: 400 }, !0)), d.run(1));
          }),
        (f = !0));
    },
    o(_) {
      _ && (d || (d = Re(t, te, { duration: 400 }, !1)), d.run(0)), (f = !1);
    },
    d(_) {
      _ && I(t), _ && d && d.end(), (p = !1), g();
    },
  };
}
function sf(s) {
  let t,
    e,
    i = kt(s[0]),
    n = [];
  for (let a = 0; a < i.length; a += 1) n[a] = Xr(Yr(s, i, a));
  const r = (a) =>
    q(n[a], 1, 1, () => {
      n[a] = null;
    });
  return {
    c() {
      t = M("div");
      for (let a = 0; a < n.length; a += 1) n[a].c();
      S(t, "class", "toaster svelte-w5bbcy");
    },
    m(a, o) {
      B(a, t, o);
      for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(t, null);
      e = !0;
    },
    p(a, [o]) {
      if (o & 1) {
        i = kt(a[0]);
        let l;
        for (l = 0; l < i.length; l += 1) {
          const h = Yr(a, i, l);
          n[l]
            ? (n[l].p(h, o), H(n[l], 1))
            : ((n[l] = Xr(h)), n[l].c(), H(n[l], 1), n[l].m(t, null));
        }
        for (ge(), l = i.length; l < n.length; l += 1) r(l);
        _e();
      }
    },
    i(a) {
      if (!e) {
        for (let o = 0; o < i.length; o += 1) H(n[o]);
        e = !0;
      }
    },
    o(a) {
      n = n.filter(Boolean);
      for (let o = 0; o < n.length; o += 1) q(n[o]);
      e = !1;
    },
    d(a) {
      a && I(t), Ue(n, a);
    },
  };
}
function nf(s, t, e) {
  let i;
  return ut(s, In, (r) => e(0, (i = r))), [i, (r) => Vo(r.id)];
}
class rf extends Rt {
  constructor(t) {
    super(), Ft(this, t, nf, sf, Mt, {});
  }
}
const af = 1.12,
  qr = [
    "",
    "K",
    "M",
    "B",
    "T",
    "Qa",
    "Qi",
    "Sx",
    "Sp",
    "Oc",
    "No",
    "Dc",
    "UDc",
    "DDc",
    "TDc",
    "QaDc",
    "QiDc",
    "SxDc",
    "SpDc",
    "OcDc",
    "NoDc",
    "Vg",
    "UVg",
    "DVg",
    "TVg",
    "QaVg",
    "QiVg",
    "SxVg",
    "SpVg",
    "OcVg",
    "NoVg",
    "Tg",
    "UTg",
    "DTg",
    "TTg",
    "QaTg",
    "QiTg",
    "SxTg",
    "SpTg",
    "OcTg",
    "NoTg",
    "Qag",
    "UQag",
    "DQag",
    "TQag",
  ];
function pt(s) {
  if (!Number.isFinite(s)) throw new Error("Le nombre doit être fini.");
  const t = Math.abs(s),
    e = s < 0 ? "-" : "";
  if (t < 1e3) return `${s}`;
  const i = Math.floor(Math.log(t) / Math.log(1e3)),
    n = Math.min(i, qr.length - 1),
    r = qr[n],
    a = s / Math.pow(1e3, n);
  return `${e}${a.toFixed(2)}${r}`;
}
function of(s) {
  return (
    [
      "double",
      "triple",
      "quadruple",
      "quintuple",
      "sextuple",
      "septuple",
      "octuple",
      "nonuple",
      "decuple",
    ][s - 2] || `${s}x`
  );
}
function lf(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function hf(s, t) {
  return Math.random() * (t - s) + s;
}
const Jt = {
    molecule: { cost: 20, rate: 0.1, name: "Molecule" },
    crystal: { cost: 100, rate: 2, name: "Crystal" },
    nanostructure: { cost: 1e3, rate: 8, name: "Nanostructure" },
    microorganism: { cost: 1e4, rate: 47, name: "Micro-organism" },
    rock: { cost: 1e5, rate: 260, name: "Rock" },
    planet: { cost: 1e6, rate: 1400, name: "Planet" },
    star: { cost: 1e7, rate: 7800, name: "Star" },
    neutronStar: { cost: 1e8, rate: 44e3, name: "Neutron Star" },
    blackHole: { cost: 1e9, rate: 26e4, name: "Black Hole" },
  },
  Hs = Object.keys(Jt),
  cf = [
    {
      id: "first_atom",
      name: "Baby Steps",
      description: "Click your first atom",
      hidden: !1,
      condition: (s) => s.atoms >= 1,
    },
    {
      id: "secret_achievement",
      name: "Have more than 100 buildings",
      description: "A mysterious achievement",
      hidden: !0,
      condition: (s) =>
        Object.values(s.buildings).reduce((e, i) => e + i.count, 0) >= 100,
    },
  ];
function uf(s) {
  const t = Jt[s].name;
  function e(i, n, r = `Own ${n} ${t} buildings`) {
    return {
      id: `${n}_${s}`,
      name: `${i} ${t}`,
      description: r,
      hidden: !1,
      condition: (a) => a.buildings[s] !== void 0 && a.buildings[s].count >= n,
    };
  }
  return [
    e("One", 1, `Buy your first ${t} building`),
    e("Ten", 10),
    e("Fifty", 50),
    e("Hundred", 100),
    e("Two hundred", 200),
    e("Three hundred", 300),
    e("Five hundred", 500),
  ];
}
function df() {
  function s(t) {
    return {
      id: `total_${t}`,
      name: `${t} Buildings`,
      description: `Own a total of ${t} buildings`,
      hidden: !1,
      condition: (e) =>
        Object.values(e.buildings).reduce((n, r) => n + r.count, 0) >= t,
    };
  }
  return [
    100, 150, 200, 250, 300, 400, 500, 600, 800, 1e3, 1500, 2e3, 2500, 3e3,
  ].map(s);
}
function ff() {
  function s(e) {
    const i = pt(e);
    return {
      id: `aps_${i.toLowerCase()}`,
      name: `${i} Atoms per Second`,
      description: `Produce ${i} atoms per second`,
      hidden: !1,
      condition: () => Ht(si) >= e,
    };
  }
  return Array(10)
    .fill(0)
    .map((e, i) => 10 ** (i * 2) * 10)
    .map(s);
}
function pf() {
  function s(t) {
    return {
      id: `clicks_${t}`,
      name: `${pt(t)} Clicks`,
      description: `Click ${pt(t)} times`,
      hidden: !1,
      condition: (e) => e.totalClicks >= t,
    };
  }
  return [
    1, 100, 500, 1e3, 5e3, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6, 1e7, 5e7, 1e8,
  ].map(s);
}
const mf = [...Hs.map(uf).flat(), ...df(), ...ff(), ...pf(), ...cf],
  js = Object.fromEntries(mf.map((s) => [s.id, s])),
  gf = [];
function _f(s) {
  const t = Jt[s],
    e = [];
  for (let i = 1; i <= 12; i++) {
    const n = `${s.toLowerCase()}_${i}`,
      r = 1 + Math.ceil(i / 5);
    e.push({
      id: n,
      name: `${t.name} Boost ${i}`,
      description: `${lf(of(r))} ${t.name} production`,
      cost: t.cost * 2 ** (i * 2),
      type: "building",
      target: s,
      value: r,
    });
  }
  return e;
}
function yf() {
  const s = [];
  for (let t = 1; t <= 12; t++) {
    const e = `click_power_mul_${t}`;
    s.push({
      id: e,
      name: `Click Power ${t}`,
      description: "Double click power",
      cost: 10 * 2 ** (t * 4),
      type: "click_mul",
      target: "click",
      value: 2,
    });
  }
  for (let t = 1; t <= 5; t++) {
    const e = `click_power_val_${t}`,
      i = Math.ceil(10 ** t / 10);
    s.push({
      id: e,
      name: `Click Value ${t}`,
      description: `Add ${pt(i)} atoms per click`,
      cost: 10 ** (t * 2) / 2,
      type: "click_val",
      value: i,
    });
  }
  for (let t = 1; t <= 5; t++) {
    const e = `click_power_aps_${t}`;
    s.push({
      id: e,
      name: `Global Click Power ${t}`,
      description: `Gain ${t}% of your Atoms per second per click`,
      cost: 1e3 * 2 ** (t * 7),
      type: "click_aps",
      value: t / 100,
    });
  }
  return s;
}
function xf() {
  const s = [];
  for (let t = 1; t <= 50; t++) {
    const e = Math.ceil(t / 5) * 5,
      i = `global_boost_${t}`;
    s.push({
      id: i,
      name: `Global Boost ${t}`,
      description: `Increase all production by ${e}%`,
      cost: 10 ** (t * 2) * (t / 8),
      type: "global",
      value: 1 + e / 100,
    });
  }
  return s;
}
const bf = [...gf, ...Hs.map(_f).flat(), ...yf(), ...xf()],
  ze = Object.fromEntries(bf.map((s) => [s.id, s])),
  Bn = "atomic-clicker-save";
function wf() {
  try {
    const s = localStorage.getItem(Bn);
    if (s) {
      const t = Af(JSON.parse(s));
      if (vf(t)) return t;
    }
  } catch (s) {
    console.error("Failed to load saved game:", s);
  }
  return null;
}
function vf(s) {
  return s
    ? [
        ["achievements", Array.isArray],
        ["activePowerUps", Array.isArray],
        ["atoms", (e) => typeof e == "number"],
        ["buildings", (e) => typeof e == "object"],
        ["lastSave", (e) => typeof e == "number"],
        ["totalClicks", (e) => typeof e == "number"],
        ["upgrades", Array.isArray],
      ].every(([e, i]) => e in s && i(s[e]))
    : !1;
}
function Af(s) {
  if (!("buildings" in s)) return s;
  const t = Object.entries(s.buildings).reduce(
    (e, [i, n]) => ((e[i] = { ...n, unlocked: !0 }), e),
    {}
  );
  return { ...s, buildings: t };
}
const is = Gt([]),
  fe = Gt([]),
  jt = Gt(0),
  Et = Gt({}),
  $i = Gt(Date.now()),
  ls = Gt(0),
  Te = Gt([]),
  ei = be(Te, (s) =>
    Object.keys(ze)
      .filter((t) => s.includes(t))
      .map((t) => ze[t])
  ),
  Fn = be(fe, (s) => s.reduce((t, e) => t * e.multiplier, 1)),
  Rn = be(ei, (s) =>
    s.filter((e) => e.type === "global").reduce((e, i) => e * i.value, 1)
  ),
  Ho = be(fe, (s) => s.length > 0),
  si = be(
    [Et, ei, Rn, Fn],
    ([s, t, e, i]) =>
      Object.entries(s).reduce((r, [a, o]) => {
        const l = t
          .filter((h) => h.type === "building" && h.target === a)
          .reduce((h, c) => h * c.value, 1);
        return r + o.count * o.rate * l;
      }, 0) *
      e *
      i
  ),
  Sf = be([ei, si, Rn, Fn], ([s, t, e, i]) => {
    const r = s
        .filter((u) => u.type === "click_mul")
        .reduce((u, d) => u * d.value, 1),
      o = s
        .filter((u) => u.type === "click_aps")
        .reduce((u, d) => u + d.value, 0),
      l = t * o;
    return (
      (s
        .filter((u) => u.type === "click_val")
        .reduce((u, d) => u + d.value, 1) *
        r +
        l) *
      e *
      i
    );
  }),
  Cf = be([Et, ei, Rn, Fn], ([s, t, e, i]) =>
    Object.entries(s).reduce((n, [r, a]) => {
      let o = 0;
      if (a) {
        const h = t
          .filter((c) => c.type === "building" && c.target === r)
          .reduce((c, u) => c * u.value, 1);
        o = a.count * a.rate * h;
      }
      return (o *= e * i), { ...n, [r]: o };
    }, {})
  ),
  Ut = {
    initialize() {
      const s = wf();
      s &&
        (is.set(s.achievements.filter((t) => t in js)),
        fe.set(s.activePowerUps),
        jt.set(s.atoms),
        Et.set(s.buildings),
        $i.set(s.lastSave),
        ls.set(s.totalClicks),
        Te.set(s.upgrades.filter((t) => t in ze)),
        this.save()),
        setInterval(() => {
          const t = this.getCurrentState();
          Object.entries(js).forEach(([e, i]) => {
            !t.achievements.includes(e) &&
              i.condition(t) &&
              (is.update((n) => [...n, e]), ef("Achievement unlocked", i.name));
          });
        }, 1e3);
    },
    getCurrentState() {
      return {
        achievements: Ht(is),
        activePowerUps: Ht(fe),
        atoms: Ht(jt),
        buildings: Ht(Et),
        lastSave: Ht($i),
        totalClicks: Ht(ls),
        upgrades: Ht(Te),
      };
    },
    addAtoms(s) {
      jt.update((t) => t + s);
    },
    purchaseBuilding(s) {
      const t = this.getCurrentState(),
        e = Jt[s],
        i = t.buildings[s] ?? {
          cost: e.cost,
          rate: e.rate,
          count: 0,
          unlocked: !0,
        };
      t.atoms < i.cost ||
        (jt.update((n) => n - i.cost),
        Et.update((n) => ({
          ...n,
          [s]: {
            ...i,
            cost: Math.round(i.cost * af),
            rate: i.rate,
            count: i.count + 1,
          },
        })));
    },
    unlockBuilding(s) {
      s in Ht(Et) ||
        Et.update((t) => ({
          ...t,
          [s]: { cost: Jt[s].cost, rate: Jt[s].rate, count: 0, unlocked: !0 },
        }));
    },
    purchaseUpgrade(s) {
      const t = this.getCurrentState(),
        e = ze[s];
      !t.upgrades.includes(s) &&
        t.atoms >= e.cost &&
        (jt.update((n) => n - e.cost), Te.update((n) => [...n, s]));
    },
    addPowerUp(s) {
      fe.update((t) => [...t, s]);
    },
    removePowerUp(s) {
      fe.update((t) => t.filter((e) => e.id !== s));
    },
    reset() {
      is.set([]),
        fe.set([]),
        jt.set(0),
        Et.set({}),
        $i.set(Date.now()),
        ls.set(0),
        Te.set([]);
    },
    save() {
      const s = this.getCurrentState();
      localStorage.setItem(Bn, JSON.stringify(s));
    },
  };
function Kr(s) {
  let t, e, i, n, r;
  return {
    c() {
      (t = M("div")),
        S(t, "class", "power-up bonus-atom svelte-k0smid"),
        At(t, "left", s[0] + "px"),
        At(t, "top", s[1] + "px");
    },
    m(a, o) {
      B(a, t, o),
        (i = !0),
        n || ((r = qt(t, "click", s[5], { once: !0 })), (n = !0));
    },
    p(a, o) {
      (!i || o & 1) && At(t, "left", a[0] + "px"),
        (!i || o & 2) && At(t, "top", a[1] + "px");
    },
    i(a) {
      i ||
        (a &&
          Nt(() => {
            i && (e || (e = Re(t, te, { duration: 1e3 }, !0)), e.run(1));
          }),
        (i = !0));
    },
    o(a) {
      a && (e || (e = Re(t, te, { duration: 1e3 }, !1)), e.run(0)), (i = !1);
    },
    d(a) {
      a && I(t), a && e && e.end(), (n = !1), r();
    },
  };
}
function Zr(s) {
  let t,
    e = s[4].description + "",
    i,
    n,
    r,
    a;
  return {
    c() {
      (t = M("p")),
        (i = Q(e)),
        S(t, "class", "bonus-message svelte-k0smid"),
        At(t, "left", s[0] + "px"),
        At(t, "top", s[1] + "px");
    },
    m(o, l) {
      B(o, t, l), P(t, i), (a = !0);
    },
    p(o, l) {
      (!a || l & 1) && At(t, "left", o[0] + "px"),
        (!a || l & 2) && At(t, "top", o[1] + "px");
    },
    i(o) {
      a ||
        (o &&
          Nt(() => {
            a && (r && r.end(1), (n = cl(t, te, { duration: 100 })), n.start());
          }),
        (a = !0));
    },
    o(o) {
      n && n.invalidate(), o && (r = ul(t, te, { duration: 400 })), (a = !1);
    },
    d(o) {
      o && I(t), o && r && r.end();
    },
  };
}
function Pf(s) {
  let t,
    e,
    i = s[2] && Kr(s),
    n = s[3] && Zr(s);
  return {
    c() {
      i && i.c(), (t = O()), n && n.c(), (e = ga());
    },
    m(r, a) {
      i && i.m(r, a), B(r, t, a), n && n.m(r, a), B(r, e, a);
    },
    p(r, [a]) {
      r[2]
        ? i
          ? (i.p(r, a), a & 4 && H(i, 1))
          : ((i = Kr(r)), i.c(), H(i, 1), i.m(t.parentNode, t))
        : i &&
          (ge(),
          q(i, 1, 1, () => {
            i = null;
          }),
          _e()),
        r[3]
          ? n
            ? (n.p(r, a), a & 8 && H(n, 1))
            : ((n = Zr(r)), n.c(), H(n, 1), n.m(e.parentNode, e))
          : n &&
            (ge(),
            q(n, 1, 1, () => {
              n = null;
            }),
            _e());
    },
    i(r) {
      H(i), H(n);
    },
    o(r) {
      q(i), q(n);
    },
    d(r) {
      r && (I(t), I(e)), i && i.d(r), n && n.d(r);
    },
  };
}
function kf(s, t, e) {
  let i = {
      description: "Double atoms per second for 10 seconds",
      duration: 1e4,
      id: Date.now().toString(),
      multiplier: 2,
      name: "Double Atoms",
      startTime: Date.now(),
    },
    n = 0,
    r = 0,
    a = !1,
    o = !1;
  function l() {
    e(0, (n = Math.random() * (window.innerWidth - 100 * 2) + 100)),
      e(1, (r = Math.random() * (window.innerHeight - 100 * 2) + 100)),
      e(2, (a = !0)),
      setTimeout(() => e(2, (a = !1)), 3e4);
  }
  function h() {
    e(2, (a = !1)),
      e(3, (o = !0)),
      Ut.addPowerUp(i),
      setTimeout(() => Ut.removePowerUp(i.id), i.duration),
      setTimeout(() => e(3, (o = !1)), 3e3);
  }
  function c() {
    u = setTimeout(() => {
      l(), c();
    }, hf(18e4, 3e5));
  }
  let u;
  return fn(c), Xs(() => clearTimeout(u)), [n, r, a, o, i, h];
}
class Mf extends Rt {
  constructor(t) {
    super(), Ft(this, t, kf, Pf, Mt, {});
  }
}
function Qr(s, t, e) {
  const i = s.slice();
  return (i[2] = t[e]), i;
}
function Jr(s) {
  let t,
    e,
    i,
    n = (s[2].hidden && !s[2].unlocked ? "???" : s[2].name) + "",
    r,
    a,
    o,
    l = (s[2].hidden && !s[2].unlocked ? "???" : s[2].description) + "",
    h,
    c;
  return {
    c() {
      (t = M("div")),
        (e = M("div")),
        (i = M("h3")),
        (r = Q(n)),
        (a = O()),
        (o = M("p")),
        (h = Q(l)),
        (c = O()),
        S(i, "class", "svelte-11uf4eo"),
        S(o, "class", "svelte-11uf4eo"),
        S(e, "class", "info svelte-11uf4eo"),
        S(t, "class", "achievement svelte-11uf4eo"),
        dt(t, "locked", !s[2].unlocked);
    },
    m(u, d) {
      B(u, t, d), P(t, e), P(e, i), P(i, r), P(e, a), P(e, o), P(o, h), P(t, c);
    },
    p(u, d) {
      d & 1 &&
        n !== (n = (u[2].hidden && !u[2].unlocked ? "???" : u[2].name) + "") &&
        vt(r, n),
        d & 1 &&
          l !==
            (l =
              (u[2].hidden && !u[2].unlocked ? "???" : u[2].description) +
              "") &&
          vt(h, l),
        d & 1 && dt(t, "locked", !u[2].unlocked);
    },
    d(u) {
      u && I(t);
    },
  };
}
function Tf(s) {
  let t,
    e,
    i,
    n,
    r = kt(s[0]),
    a = [];
  for (let o = 0; o < r.length; o += 1) a[o] = Jr(Qr(s, r, o));
  return {
    c() {
      (t = M("div")),
        (e = M("h2")),
        (e.textContent = "Achievements"),
        (i = O()),
        (n = M("div"));
      for (let o = 0; o < a.length; o += 1) a[o].c();
      S(n, "class", "achievement-grid svelte-11uf4eo"),
        S(t, "class", "achievements svelte-11uf4eo");
    },
    m(o, l) {
      B(o, t, l), P(t, e), P(t, i), P(t, n);
      for (let h = 0; h < a.length; h += 1) a[h] && a[h].m(n, null);
    },
    p(o, [l]) {
      if (l & 1) {
        r = kt(o[0]);
        let h;
        for (h = 0; h < r.length; h += 1) {
          const c = Qr(o, r, h);
          a[h] ? a[h].p(c, l) : ((a[h] = Jr(c)), a[h].c(), a[h].m(n, null));
        }
        for (; h < a.length; h += 1) a[h].d(1);
        a.length = r.length;
      }
    },
    i: Y,
    o: Y,
    d(o) {
      o && I(t), Ue(a, o);
    },
  };
}
function Ef(s, t, e) {
  let i, n;
  return (
    ut(s, is, (r) => e(1, (n = r))),
    (s.$$.update = () => {
      s.$$.dirty & 2 &&
        e(
          0,
          (i = Object.entries(js).map(([r, a]) => ({
            ...a,
            unlocked: n.includes(r),
          })))
        );
    }),
    [i, n]
  );
}
class If extends Rt {
  constructor(t) {
    super(), Ft(this, t, Ef, Tf, Mt, {});
  }
}
const Bf = async (s, t) => {
    const e = await ss.load("atom.png"),
      i = new Ge({
        texture: e,
        anchor: 0.5,
        alpha: 0.8,
        scale: 0.2,
        x: s,
        y: t + document.documentElement.scrollTop,
        rotation: Math.random() * Math.PI * 2,
      });
    return {
      sprite: i,
      speedX: (1 + Math.random() * 0.5) * Math.cos(i.rotation),
      speedY: (1 + Math.random() * 0.5) * Math.sin(i.rotation),
      update: (n, r) => {
        (i.x += n.speedX * r),
          (i.y += n.speedY * r),
          (i.scale.x -= 0.001 * r),
          (i.scale.y -= 0.001 * r),
          (i.alpha -= 0.01 * r),
          (i.alpha <= 0 || i.scale.x <= 0) && i.destroy();
      },
    };
  },
  Ff = new xe({ fontWeight: "bold", fill: "white" }),
  Rf = (s, t, e) => {
    const i = new Hd({
      anchor: 0.5,
      scale: 0.5,
      x: s,
      y: t + document.documentElement.scrollTop,
      text: e,
      style: Ff,
    });
    return (
      (i.zIndex = 1),
      {
        sprite: i,
        speedY: -1.5,
        update: (n, r) => {
          (i.y += n.speedY * r),
            (i.alpha -= 0.015 * r),
            i.alpha <= 0 && i.destroy();
        },
      }
    );
  };
function ta(s, t, e) {
  const i = s.slice();
  (i[8] = t[e]), (i[11] = e);
  const n = i[1][i[8]];
  return (i[9] = n), i;
}
function ea(s, t, e) {
  const i = s.slice();
  return (i[12] = t[e]), (i[14] = e), i;
}
function sa(s) {
  let t,
    e = kt(new Array(s[9].count)),
    i = [];
  for (let n = 0; n < e.length; n += 1) i[n] = ia(ea(s, e, n));
  return {
    c() {
      t = M("div");
      for (let n = 0; n < i.length; n += 1) i[n].c();
      S(t, "class", "electron-shell svelte-nnmjgj"),
        At(t, "--line", s[11]),
        At(t, "--count", s[9].count);
    },
    m(n, r) {
      B(n, t, r);
      for (let a = 0; a < i.length; a += 1) i[a] && i[a].m(t, null);
    },
    p(n, r) {
      if (r & 2) {
        e = kt(new Array(n[9].count));
        let a;
        for (a = 0; a < e.length; a += 1) {
          const o = ea(n, e, a);
          i[a] ? i[a].p(o, r) : ((i[a] = ia(o)), i[a].c(), i[a].m(t, null));
        }
        for (; a < i.length; a += 1) i[a].d(1);
        i.length = e.length;
      }
      r & 2 && At(t, "--count", n[9].count);
    },
    d(n) {
      n && I(t), Ue(i, n);
    },
  };
}
function ia(s) {
  let t;
  return {
    c() {
      (t = M("div")),
        S(t, "class", "electron svelte-nnmjgj"),
        At(t, "--i", s[14]);
    },
    m(e, i) {
      B(e, t, i);
    },
    p: Y,
    d(e) {
      e && I(t);
    },
  };
}
function na(s) {
  let t,
    e = s[9] && s[9].count > 0 && sa(s);
  return {
    c() {
      e && e.c(), (t = ga());
    },
    m(i, n) {
      e && e.m(i, n), B(i, t, n);
    },
    p(i, n) {
      i[9] && i[9].count > 0
        ? e
          ? e.p(i, n)
          : ((e = sa(i)), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null));
    },
    d(i) {
      i && I(t), e && e.d(i);
    },
  };
}
function Lf(s) {
  let t,
    e,
    i,
    n,
    r,
    a = kt(Hs.filter(s[3])),
    o = [];
  for (let l = 0; l < a.length; l += 1) o[l] = na(ta(s, a, l));
  return {
    c() {
      t = M("div");
      for (let l = 0; l < o.length; l += 1) o[l].c();
      (e = O()),
        (i = M("div")),
        S(i, "class", "nucleus svelte-nnmjgj"),
        S(t, "class", "atom svelte-nnmjgj"),
        dt(t, "bonus", s[0]);
    },
    m(l, h) {
      B(l, t, h);
      for (let c = 0; c < o.length; c += 1) o[c] && o[c].m(t, null);
      P(t, e), P(t, i), n || ((r = qt(t, "click", s[4])), (n = !0));
    },
    p(l, [h]) {
      if (h & 2) {
        a = kt(Hs.filter(l[3]));
        let c;
        for (c = 0; c < a.length; c += 1) {
          const u = ta(l, a, c);
          o[c] ? o[c].p(u, h) : ((o[c] = na(u)), o[c].c(), o[c].m(t, e));
        }
        for (; c < o.length; c += 1) o[c].d(1);
        o.length = a.length;
      }
      h & 1 && dt(t, "bonus", l[0]);
    },
    i: Y,
    o: Y,
    d(l) {
      l && I(t), Ue(o, l), (n = !1), r();
    },
  };
}
function $f(s, t, e) {
  let i, n, r, a;
  ut(s, Sf, (u) => e(5, (i = u))),
    ut(s, ls, (u) => e(6, (n = u))),
    ut(s, Ho, (u) => e(0, (r = u))),
    ut(s, Et, (u) => e(1, (a = u)));
  let o;
  async function l(u) {
    Ut.addAtoms(i), da(ls, n++, n);
    const d = [];
    d.push(
      Rf(
        u.clientX + Math.random() * 10,
        u.clientY + Math.random() * 10,
        `+${pt(i)}`
      )
    );
    for (let f = 0; f < 5; f++)
      d.push(
        await Bf(u.clientX + Math.random() * 10, u.clientY + Math.random() * 10)
      );
    Wo.update((f) => [...f, ...d]);
  }
  return (
    Xs(() => clearInterval(o)),
    [r, a, l, (u) => u in a, async (u) => await l(u)]
  );
}
class Gf extends Rt {
  constructor(t) {
    super(), Ft(this, t, $f, Lf, Mt, {});
  }
}
function ra(s, t, e) {
  var l;
  const i = s.slice();
  (i[10] = t[e][0]), (i[11] = t[e][1]), (i[17] = e);
  const n = i[0][i[10]];
  i[12] = n;
  const r = i[1] < (((l = i[12]) == null ? void 0 : l.cost) ?? i[11].cost);
  i[13] = r;
  const a = i[2].some(function (...c) {
    return s[8](i[10], ...c);
  });
  i[14] = a;
  const o = i[2].slice(1).some(function (...c) {
    return s[9](i[10], ...c);
  });
  return (i[15] = o), i;
}
function aa(s) {
  var at, E;
  let t,
    e,
    i,
    n = (s[14] ? "???" : s[11].name) + "",
    r,
    a,
    o = (at = s[12]) != null && at.count ? `(${s[12].count})` : "",
    l,
    h,
    c,
    u,
    d = pt(s[3][s[10]] ?? s[11].rate) + "",
    f,
    p,
    g,
    m,
    _,
    y = pt(((E = s[12]) == null ? void 0 : E.cost) ?? s[11].cost) + "",
    x,
    b,
    C,
    F,
    k,
    T,
    w,
    A;
  function N() {
    return s[7](s[13], s[10]);
  }
  return {
    c() {
      (t = M("div")),
        (e = M("div")),
        (i = M("h3")),
        (r = Q(n)),
        (a = O()),
        (l = Q(o)),
        (h = O()),
        (c = M("p")),
        (u = Q("Producing: ")),
        (f = Q(d)),
        (p = Q(" atoms/s")),
        (g = O()),
        (m = M("div")),
        (_ = Q("Cost: ")),
        (x = Q(y)),
        (b = Q(" atoms")),
        (C = O()),
        S(i, "class", "svelte-bqhy43"),
        S(c, "class", "svelte-bqhy43"),
        S(e, "class", "info svelte-bqhy43"),
        S(m, "class", "cost svelte-bqhy43"),
        S(t, "class", "building svelte-bqhy43"),
        (t.hidden = F = s[15]),
        dt(t, "disabled", s[13]);
    },
    m(v, G) {
      B(v, t, G),
        P(t, e),
        P(e, i),
        P(i, r),
        P(i, a),
        P(i, l),
        P(e, h),
        P(e, c),
        P(c, u),
        P(c, f),
        P(c, p),
        P(t, g),
        P(t, m),
        P(m, _),
        P(m, x),
        P(m, b),
        P(t, C),
        (T = !0),
        w || ((A = qt(t, "click", N)), (w = !0));
    },
    p(v, G) {
      var V, st;
      (s = v),
        (!T || G & 4) &&
          n !== (n = (s[14] ? "???" : s[11].name) + "") &&
          vt(r, n),
        (!T || G & 1) &&
          o !==
            (o = (V = s[12]) != null && V.count ? `(${s[12].count})` : "") &&
          vt(l, o),
        (!T || G & 8) &&
          d !== (d = pt(s[3][s[10]] ?? s[11].rate) + "") &&
          vt(f, d),
        (!T || G & 1) &&
          y !==
            (y =
              pt(((st = s[12]) == null ? void 0 : st.cost) ?? s[11].cost) +
              "") &&
          vt(x, y),
        (!T || (G & 4 && F !== (F = s[15]))) && (t.hidden = F),
        (!T || G & 19) && dt(t, "disabled", s[13]);
    },
    i(v) {
      T ||
        (v &&
          Nt(() => {
            T && (k || (k = Re(t, te, {}, !0)), k.run(1));
          }),
        (T = !0));
    },
    o(v) {
      v && (k || (k = Re(t, te, {}, !1)), k.run(0)), (T = !1);
    },
    d(v) {
      v && I(t), v && k && k.end(), (w = !1), A();
    },
  };
}
function Of(s) {
  let t,
    e,
    i,
    n,
    r = kt(s[4]),
    a = [];
  for (let l = 0; l < r.length; l += 1) a[l] = aa(ra(s, r, l));
  const o = (l) =>
    q(a[l], 1, 1, () => {
      a[l] = null;
    });
  return {
    c() {
      (t = M("div")), (e = M("h2")), (e.textContent = "Buildings"), (i = O());
      for (let l = 0; l < a.length; l += 1) a[l].c();
      S(t, "class", "buildings svelte-bqhy43");
    },
    m(l, h) {
      B(l, t, h), P(t, e), P(t, i);
      for (let c = 0; c < a.length; c += 1) a[c] && a[c].m(t, null);
      n = !0;
    },
    p(l, [h]) {
      if (h & 31) {
        r = kt(l[4]);
        let c;
        for (c = 0; c < r.length; c += 1) {
          const u = ra(l, r, c);
          a[c]
            ? (a[c].p(u, h), H(a[c], 1))
            : ((a[c] = aa(u)), a[c].c(), H(a[c], 1), a[c].m(t, null));
        }
        for (ge(), c = r.length; c < a.length; c += 1) o(c);
        _e();
      }
    },
    i(l) {
      if (!n) {
        for (let h = 0; h < r.length; h += 1) H(a[h]);
        n = !0;
      }
    },
    o(l) {
      a = a.filter(Boolean);
      for (let h = 0; h < a.length; h += 1) q(a[h]);
      n = !1;
    },
    d(l) {
      l && I(t), Ue(a, l);
    },
  };
}
function zf(s, t, e) {
  let i, n, r, a, o, l;
  ut(s, Et, (f) => e(0, (a = f))),
    ut(s, jt, (f) => e(1, (o = f))),
    ut(s, Cf, (f) => e(3, (l = f)));
  const h = Object.entries(Jt),
    c = (f, p) => {
      f || Ut.purchaseBuilding(p);
    },
    u = (f, [p]) => p === f,
    d = (f, [p]) => p === f;
  return (
    (s.$$.update = () => {
      s.$$.dirty & 3 &&
        e(
          5,
          (i = h.filter(([f, p]) => {
            var g;
            return o < (((g = a[f]) == null ? void 0 : g.cost) ?? p.cost);
          }))
        ),
        s.$$.dirty & 1 &&
          e(6, (n = Object.entries(a).filter(([, { unlocked: f }]) => f))),
        s.$$.dirty & 96 &&
          e(
            2,
            (r = h.filter(
              ([f]) =>
                n.map((p) => p[0]).indexOf(f) === -1 &&
                i.map((p) => p[0]).indexOf(f) !== -1
            ))
          ),
        s.$$.dirty & 96 &&
          h
            .filter(
              ([f]) =>
                n.map((p) => p[0]).indexOf(f) === -1 &&
                i.map((p) => p[0]).indexOf(f) === -1
            )
            .forEach(([f]) => {
              Ut.unlockBuilding(f);
            });
    }),
    [a, o, r, l, h, i, n, c, u, d]
  );
}
class jo extends Rt {
  constructor(t) {
    super(), Ft(this, t, zf, Of, Mt, {});
  }
}
function Df(s) {
  let t,
    e,
    i,
    n = pt(s[1]) + "",
    r,
    a,
    o,
    l,
    h,
    c,
    u = pt(s[2]) + "",
    d,
    f;
  return {
    c() {
      (t = M("div")),
        (e = M("div")),
        (i = M("span")),
        (r = Q(n)),
        (a = O()),
        (o = M("span")),
        (o.textContent = "atoms"),
        (l = O()),
        (h = M("div")),
        (c = M("span")),
        (d = Q(u)),
        (f = Q(" atoms per second")),
        S(i, "class", "value svelte-1h5dn56"),
        S(o, "class", "label svelte-1h5dn56"),
        S(e, "class", "atoms svelte-1h5dn56"),
        S(c, "class", "rate-value svelte-1h5dn56"),
        S(h, "class", "rate svelte-1h5dn56"),
        S(t, "class", "counter svelte-1h5dn56"),
        dt(t, "bonus", s[0]);
    },
    m(p, g) {
      B(p, t, g),
        P(t, e),
        P(e, i),
        P(i, r),
        P(e, a),
        P(e, o),
        P(t, l),
        P(t, h),
        P(h, c),
        P(c, d),
        P(h, f);
    },
    p(p, [g]) {
      g & 2 && n !== (n = pt(p[1]) + "") && vt(r, n),
        g & 4 && u !== (u = pt(p[2]) + "") && vt(d, u),
        g & 1 && dt(t, "bonus", p[0]);
    },
    i: Y,
    o: Y,
    d(p) {
      p && I(t);
    },
  };
}
function Uf(s, t, e) {
  let i, n, r;
  return (
    ut(s, Ho, (a) => e(0, (i = a))),
    ut(s, jt, (a) => e(1, (n = a))),
    ut(s, si, (a) => e(2, (r = a))),
    [i, n, r]
  );
}
class Nf extends Rt {
  constructor(t) {
    super(), Ft(this, t, Uf, Df, Mt, {});
  }
}
function oa(s, t, e) {
  const i = s.slice();
  i[6] = t[e];
  const n = i[1] < i[6].cost;
  return (i[7] = n), i;
}
function la(s) {
  let t,
    e,
    i = s[6].name + "",
    n,
    r,
    a,
    o = s[6].description + "",
    l,
    h,
    c,
    u,
    d = pt(s[6].cost) + "",
    f,
    p,
    g,
    m,
    _;
  function y() {
    return s[5](s[7], s[6]);
  }
  return {
    c() {
      (t = M("div")),
        (e = M("h3")),
        (n = Q(i)),
        (r = O()),
        (a = M("p")),
        (l = Q(o)),
        (h = O()),
        (c = M("div")),
        (u = Q("Cost: ")),
        (f = Q(d)),
        (p = Q(" atoms")),
        (g = O()),
        S(e, "class", "svelte-znulpe"),
        S(a, "class", "svelte-znulpe"),
        S(c, "class", "cost svelte-znulpe"),
        S(t, "class", "upgrade svelte-znulpe"),
        dt(t, "disabled", s[7]);
    },
    m(x, b) {
      B(x, t, b),
        P(t, e),
        P(e, n),
        P(t, r),
        P(t, a),
        P(a, l),
        P(t, h),
        P(t, c),
        P(c, u),
        P(c, f),
        P(c, p),
        P(t, g),
        m || ((_ = qt(t, "click", y)), (m = !0));
    },
    p(x, b) {
      (s = x),
        b & 1 && i !== (i = s[6].name + "") && vt(n, i),
        b & 1 && o !== (o = s[6].description + "") && vt(l, o),
        b & 1 && d !== (d = pt(s[6].cost) + "") && vt(f, d),
        b & 3 && dt(t, "disabled", s[7]);
    },
    d(x) {
      x && I(t), (m = !1), _();
    },
  };
}
function Wf(s) {
  let t,
    e,
    i,
    n,
    r = kt(s[0]),
    a = [];
  for (let o = 0; o < r.length; o += 1) a[o] = la(oa(s, r, o));
  return {
    c() {
      (t = M("div")),
        (e = M("h2")),
        (e.textContent = "Upgrades"),
        (i = O()),
        (n = M("div"));
      for (let o = 0; o < a.length; o += 1) a[o].c();
      S(n, "class", "upgrade-grid svelte-znulpe"),
        S(t, "class", "upgrades svelte-znulpe");
    },
    m(o, l) {
      B(o, t, l), P(t, e), P(t, i), P(t, n);
      for (let h = 0; h < a.length; h += 1) a[h] && a[h].m(n, null);
    },
    p(o, [l]) {
      if (l & 3) {
        r = kt(o[0]);
        let h;
        for (h = 0; h < r.length; h += 1) {
          const c = oa(o, r, h);
          a[h] ? a[h].p(c, l) : ((a[h] = la(c)), a[h].c(), a[h].m(n, null));
        }
        for (; h < a.length; h += 1) a[h].d(1);
        a.length = r.length;
      }
    },
    i: Y,
    o: Y,
    d(o) {
      o && I(t), Ue(a, o);
    },
  };
}
function Vf(s, t, e) {
  let i, n, r, a, o;
  ut(s, Te, (h) => e(3, (r = h))),
    ut(s, Et, (h) => e(4, (a = h))),
    ut(s, jt, (h) => e(1, (o = h)));
  const l = (h, c) => {
    h || Ut.purchaseUpgrade(c.id);
  };
  return (
    (s.$$.update = () => {
      s.$$.dirty & 24 &&
        e(
          2,
          (i = Object.values(ze)
            .filter((h) => {
              var c;
              return h.type === "building" &&
                (((c = a[h.target]) == null ? void 0 : c.count) ?? 0) < 1
                ? !1
                : !r.includes(h.id);
            })
            .sort((h, c) => h.cost - c.cost))
        ),
        s.$$.dirty & 4 && e(0, (n = i.slice(0, 10)));
    }),
    [n, o, i, r, a, l]
  );
}
class Hf extends Rt {
  constructor(t) {
    super(), Ft(this, t, Vf, Wf, Mt, {});
  }
}
function jf() {
  (window.ACHIEVEMENTS = js),
    (window.BUILDINGS = Jt),
    (window.UPGRADES = ze),
    (window.gameManager = Ut);
}
const { window: Yf } = Qo;
function Xf(s) {
  let t, e, i, n, r, a, o, l, h, c, u, d, f, p, g, m, _, y, x, b, C, F, k, T;
  (t = new rf({})), (i = new Mf({}));
  let w = s[1] && ha(s);
  const A = [Qf, Zf, Kf],
    N = [];
  function at(v, G) {
    return v[0] === "upgrades"
      ? 0
      : v[0] === "achievements"
      ? 1
      : v[0] === "buildings"
      ? 2
      : -1;
  }
  ~(p = at(s)) && (g = N[p] = A[p](s)), (y = new Nf({})), (b = new Gf({}));
  let E = !s[1] && ca();
  return {
    c() {
      Bt(t.$$.fragment),
        (e = O()),
        Bt(i.$$.fragment),
        (n = O()),
        (r = M("div")),
        (a = M("div")),
        (o = M("div")),
        (l = M("button")),
        (l.textContent = "Upgrades"),
        (h = O()),
        (c = M("button")),
        (c.textContent = "Achievements"),
        (u = O()),
        w && w.c(),
        (d = O()),
        (f = M("div")),
        g && g.c(),
        (m = O()),
        (_ = M("div")),
        Bt(y.$$.fragment),
        (x = O()),
        Bt(b.$$.fragment),
        (C = O()),
        E && E.c(),
        S(l, "class", "svelte-cszu9w"),
        dt(l, "active", s[0] === "upgrades"),
        S(c, "class", "svelte-cszu9w"),
        dt(c, "active", s[0] === "achievements"),
        S(o, "class", "tabs svelte-cszu9w"),
        S(f, "class", "tab-content svelte-cszu9w"),
        S(a, "class", "left-panel svelte-cszu9w"),
        S(_, "class", "central-area svelte-cszu9w"),
        S(r, "class", "game-container svelte-cszu9w");
    },
    m(v, G) {
      St(t, v, G),
        B(v, e, G),
        St(i, v, G),
        B(v, n, G),
        B(v, r, G),
        P(r, a),
        P(a, o),
        P(o, l),
        P(o, h),
        P(o, c),
        P(o, u),
        w && w.m(o, null),
        P(a, d),
        P(a, f),
        ~p && N[p].m(f, null),
        P(r, m),
        P(r, _),
        St(y, _, null),
        P(_, x),
        St(b, _, null),
        P(r, C),
        E && E.m(r, null),
        (F = !0),
        k || ((T = [qt(l, "click", s[4]), qt(c, "click", s[5])]), (k = !0));
    },
    p(v, G) {
      (!F || G & 1) && dt(l, "active", v[0] === "upgrades"),
        (!F || G & 1) && dt(c, "active", v[0] === "achievements"),
        v[1]
          ? w
            ? w.p(v, G)
            : ((w = ha(v)), w.c(), w.m(o, null))
          : w && (w.d(1), (w = null));
      let V = p;
      (p = at(v)),
        p !== V &&
          (g &&
            (ge(),
            q(N[V], 1, 1, () => {
              N[V] = null;
            }),
            _e()),
          ~p
            ? ((g = N[p]),
              g || ((g = N[p] = A[p](v)), g.c()),
              H(g, 1),
              g.m(f, null))
            : (g = null)),
        v[1]
          ? E &&
            (ge(),
            q(E, 1, 1, () => {
              E = null;
            }),
            _e())
          : E
          ? G & 2 && H(E, 1)
          : ((E = ca()), E.c(), H(E, 1), E.m(r, null));
    },
    i(v) {
      F ||
        (H(t.$$.fragment, v),
        H(i.$$.fragment, v),
        H(g),
        H(y.$$.fragment, v),
        H(b.$$.fragment, v),
        H(E),
        (F = !0));
    },
    o(v) {
      q(t.$$.fragment, v),
        q(i.$$.fragment, v),
        q(g),
        q(y.$$.fragment, v),
        q(b.$$.fragment, v),
        q(E),
        (F = !1);
    },
    d(v) {
      v && (I(e), I(n), I(r)),
        Ct(t, v),
        Ct(i, v),
        w && w.d(),
        ~p && N[p].d(),
        Ct(y),
        Ct(b),
        E && E.d(),
        (k = !1),
        Kt(T);
    },
  };
}
function qf(s) {
  let t;
  return {
    c() {
      (t = M("h1")),
        (t.textContent = "Loading..."),
        S(t, "class", "loading svelte-cszu9w");
    },
    m(e, i) {
      B(e, t, i);
    },
    p: Y,
    i: Y,
    o: Y,
    d(e) {
      e && I(t);
    },
  };
}
function ha(s) {
  let t, e, i;
  return {
    c() {
      (t = M("button")),
        (t.textContent = "Buildings"),
        S(t, "class", "svelte-cszu9w"),
        dt(t, "active", s[0] === "buildings");
    },
    m(n, r) {
      B(n, t, r), e || ((i = qt(t, "click", s[6])), (e = !0));
    },
    p(n, r) {
      r & 1 && dt(t, "active", n[0] === "buildings");
    },
    d(n) {
      n && I(t), (e = !1), i();
    },
  };
}
function Kf(s) {
  let t, e;
  return (
    (t = new jo({})),
    {
      c() {
        Bt(t.$$.fragment);
      },
      m(i, n) {
        St(t, i, n), (e = !0);
      },
      i(i) {
        e || (H(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        q(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Ct(t, i);
      },
    }
  );
}
function Zf(s) {
  let t, e;
  return (
    (t = new If({})),
    {
      c() {
        Bt(t.$$.fragment);
      },
      m(i, n) {
        St(t, i, n), (e = !0);
      },
      i(i) {
        e || (H(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        q(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Ct(t, i);
      },
    }
  );
}
function Qf(s) {
  let t, e;
  return (
    (t = new Hf({})),
    {
      c() {
        Bt(t.$$.fragment);
      },
      m(i, n) {
        St(t, i, n), (e = !0);
      },
      i(i) {
        e || (H(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        q(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Ct(t, i);
      },
    }
  );
}
function ca(s) {
  let t, e;
  return (
    (t = new jo({})),
    {
      c() {
        Bt(t.$$.fragment);
      },
      m(i, n) {
        St(t, i, n), (e = !0);
      },
      i(i) {
        e || (H(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        q(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        Ct(t, i);
      },
    }
  );
}
function Jf(s) {
  let t, e, i, n, r, a, o, l, h, c, u, d;
  (t = new Xd({})), (i = new Kd({})), (a = new Jd({}));
  const f = [qf, Xf],
    p = [];
  function g(m, _) {
    return m[2] === null ? 0 : 1;
  }
  return (
    (l = g(s)),
    (h = p[l] = f[l](s)),
    {
      c() {
        Bt(t.$$.fragment),
          (e = O()),
          Bt(i.$$.fragment),
          (n = O()),
          (r = M("main")),
          Bt(a.$$.fragment),
          (o = O()),
          h.c(),
          S(r, "class", "svelte-cszu9w");
      },
      m(m, _) {
        St(t, m, _),
          B(m, e, _),
          St(i, document.head, null),
          B(m, n, _),
          B(m, r, _),
          St(a, r, null),
          P(r, o),
          p[l].m(r, null),
          (c = !0),
          u || ((d = qt(Yf, "resize", s[3])), (u = !0));
      },
      p(m, [_]) {
        let y = l;
        (l = g(m)),
          l === y
            ? p[l].p(m, _)
            : (ge(),
              q(p[y], 1, 1, () => {
                p[y] = null;
              }),
              _e(),
              (h = p[l]),
              h ? h.p(m, _) : ((h = p[l] = f[l](m)), h.c()),
              H(h, 1),
              h.m(r, null));
      },
      i(m) {
        c ||
          (H(t.$$.fragment, m),
          H(i.$$.fragment, m),
          H(a.$$.fragment, m),
          H(h),
          (c = !0));
      },
      o(m) {
        q(t.$$.fragment, m),
          q(i.$$.fragment, m),
          q(a.$$.fragment, m),
          q(h),
          (c = !1);
      },
      d(m) {
        m && (I(e), I(n), I(r)),
          Ct(t, m),
          Ct(i),
          Ct(a),
          p[l].d(),
          (u = !1),
          d();
      },
    }
  );
}
const tp = 1e3;
function ep(s, t, e) {
  let i, n;
  ut(s, ln, (f) => e(2, (i = f))), ut(s, si, (f) => e(8, (n = f)));
  let r = "upgrades",
    a,
    o = !1;
  function l(f) {
    Ut.addAtoms((n * f.deltaMS) / 1e3);
  }
  fn(async () => {
    for (
      e(1, (o = window.innerWidth <= 900)), Ut.initialize();
      !i || !(i != null && i.ticker);

    )
      await new Promise((f) => setTimeout(f, 100));
    i.ticker.add(l),
      jf(),
      (a = setInterval(() => {
        try {
          localStorage.setItem(Bn, JSON.stringify(Ut.getCurrentState()));
        } catch (f) {
          console.error("Failed to save game:", f);
        }
      }, tp));
  }),
    Xs(() => {
      a && clearInterval(a);
    });
  const h = () => {
      e(1, (o = window.innerWidth <= 900));
    },
    c = () => e(0, (r = "upgrades")),
    u = () => e(0, (r = "achievements")),
    d = () => e(0, (r = "buildings"));
  return (
    (s.$$.update = () => {
      s.$$.dirty & 7 &&
        o &&
        r &&
        i != null &&
        i.stage &&
        (i == null || i.queueResize());
    }),
    [r, o, i, h, c, u, d]
  );
}
class sp extends Rt {
  constructor(t) {
    super(), Ft(this, t, ep, Jf, Mt, {});
  }
}
new sp({ target: document.getElementById("app") });
export {
  et as $,
  ho as A,
  yt as B,
  gt as C,
  tt as D,
  L as E,
  Ta as F,
  Ks as G,
  Wt as H,
  ir as I,
  Ge as J,
  Ah as K,
  Bh as L,
  j as M,
  lt as N,
  ot as O,
  ft as P,
  Kh as Q,
  Yi as R,
  gc as S,
  Zt as T,
  Wi as U,
  rr as V,
  sh as W,
  mi as X,
  nt as Y,
  Ia as Z,
  co as _,
  W as a,
  it as a0,
  ec as a1,
  vc as a2,
  Uc as a3,
  Wc as a4,
  Xc as a5,
  Kc as a6,
  Zc as a7,
  $e as a8,
  La as a9,
  de as aa,
  xe as ab,
  Uu as ac,
  ko as ad,
  mr as ae,
  fr as af,
  Ml as ag,
  zr as ah,
  Yu as ai,
  J as aj,
  El as ak,
  an as al,
  rn as am,
  Gr as an,
  To as ao,
  Ss as b,
  Lt as c,
  ps as d,
  mt as e,
  pr as f,
  fc as g,
  Ls as h,
  xn as i,
  ao as j,
  Na as k,
  so as l,
  $r as m,
  Hn as n,
  Dc as o,
  Nc as p,
  jc as q,
  Nl as r,
  _o as s,
  qc as t,
  bn as u,
  Qa as v,
  rt as w,
  Tl as x,
  Jc as y,
  Yt as z,
};
