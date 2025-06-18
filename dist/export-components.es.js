var ei = Object.defineProperty;
var ti = (e, t, r) => t in e ? ei(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ot = (e, t, r) => ti(e, typeof t != "symbol" ? t + "" : t, r);
import * as M from "react";
import Xe, { createContext as ri, useReducer as ni, useContext as oi, isValidElement as At, cloneElement as It, Children as ii } from "react";
import { useSelector as ai, useDispatch as si, Provider as ci } from "react-redux";
import { useNavigate as Jn, BrowserRouter as ui, Link as Xr, Routes as li, Route as Jr } from "react-router-dom";
import fi from "@emotion/styled";
import { ThemeContext as di, keyframes as yt, css as Qn } from "@emotion/react";
function pi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tt = { exports: {} }, it = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function hi() {
  if (Qr) return it;
  Qr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      i = {};
      for (var s in o)
        s !== "key" && (i[s] = o[s]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return it.Fragment = t, it.jsx = r, it.jsxs = r, it;
}
var at = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function mi() {
  return Zr || (Zr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === c ? null : h.displayName || h.name || null;
      if (typeof h == "string") return h;
      switch (h) {
        case l:
          return "Fragment";
        case T:
          return "Profiler";
        case x:
          return "StrictMode";
        case g:
          return "Suspense";
        case N:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case w:
            return "Portal";
          case O:
            return (h.displayName || "Context") + ".Provider";
          case $:
            return (h._context.displayName || "Context") + ".Consumer";
          case E:
            var S = h.render;
            return h = h.displayName, h || (h = S.displayName || S.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case W:
            return S = h.displayName || null, S !== null ? S : e(h.type) || "Memo";
          case F:
            S = h._payload, h = h._init;
            try {
              return e(h(S));
            } catch {
            }
        }
      return null;
    }
    function t(h) {
      return "" + h;
    }
    function r(h) {
      try {
        t(h);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var R = S.error, k = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return R.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), t(h);
      }
    }
    function n(h) {
      if (h === l) return "<>";
      if (typeof h == "object" && h !== null && h.$$typeof === F)
        return "<...>";
      try {
        var S = e(h);
        return S ? "<" + S + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var h = C.A;
      return h === null ? null : h.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(h) {
      if (P.call(h, "key")) {
        var S = Object.getOwnPropertyDescriptor(h, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return h.key !== void 0;
    }
    function s(h, S) {
      function R() {
        re || (re = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: R,
        configurable: !0
      });
    }
    function u() {
      var h = e(this.type);
      return X[h] || (X[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function f(h, S, R, k, I, B, V, z) {
      return R = B.ref, h = {
        $$typeof: b,
        type: h,
        key: S,
        props: B,
        _owner: I
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(h, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(h, "ref", { enumerable: !1, value: null }), h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(h, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(h, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.defineProperty(h, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function d(h, S, R, k, I, B, V, z) {
      var D = S.children;
      if (D !== void 0)
        if (k)
          if (A(D)) {
            for (k = 0; k < D.length; k++)
              p(D[k]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(D);
      if (P.call(S, "key")) {
        D = e(h);
        var Y = Object.keys(S).filter(function(le) {
          return le !== "key";
        });
        k = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", ne[D + k] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          D,
          Y,
          D
        ), ne[D + k] = !0);
      }
      if (D = null, R !== void 0 && (r(R), D = "" + R), a(S) && (r(S.key), D = "" + S.key), "key" in S) {
        R = {};
        for (var G in S)
          G !== "key" && (R[G] = S[G]);
      } else R = S;
      return D && s(
        R,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), f(
        h,
        D,
        B,
        I,
        o(),
        R,
        V,
        z
      );
    }
    function p(h) {
      typeof h == "object" && h !== null && h.$$typeof === b && h._store && (h._store.validated = 1);
    }
    var y = Xe, b = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), O = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), c = Symbol.for("react.client.reference"), C = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, A = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(h) {
        return h();
      }
    };
    var re, X = {}, ie = y["react-stack-bottom-frame"].bind(
      y,
      i
    )(), de = q(n(i)), ne = {};
    at.Fragment = l, at.jsx = function(h, S, R, k, I) {
      var B = 1e4 > C.recentlyCreatedOwnerStacks++;
      return d(
        h,
        S,
        R,
        !1,
        k,
        I,
        B ? Error("react-stack-top-frame") : ie,
        B ? q(n(h)) : de
      );
    }, at.jsxs = function(h, S, R, k, I) {
      var B = 1e4 > C.recentlyCreatedOwnerStacks++;
      return d(
        h,
        S,
        R,
        !0,
        k,
        I,
        B ? Error("react-stack-top-frame") : ie,
        B ? q(n(h)) : de
      );
    };
  }()), at;
}
var en;
function yi() {
  return en || (en = 1, process.env.NODE_ENV === "production" ? Tt.exports = hi() : Tt.exports = mi()), Tt.exports;
}
var j = yi();
function Ie(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function gi(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var bi = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function vi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ei = /[A-Z]|^ms/g, wi = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Zn = function(t) {
  return t.charCodeAt(1) === 45;
}, tn = function(t) {
  return t != null && typeof t != "boolean";
}, cr = /* @__PURE__ */ vi(function(e) {
  return Zn(e) ? e : e.replace(Ei, "-$&").toLowerCase();
}), rn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(wi, function(n, o, i) {
          return Ae = {
            name: o,
            styles: i,
            next: Ae
          }, o;
        });
  }
  return bi[t] !== 1 && !Zn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function jt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ae = {
          name: o.name,
          styles: o.styles,
          next: Ae
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ae = {
              name: a.name,
              styles: a.styles,
              next: Ae
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return Si(e, t, r);
    }
  }
  var u = r;
  return u;
}
function Si(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += jt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        tn(s) && (n += cr(i) + ":" + rn(i, s) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var u = 0; u < a.length; u++)
          tn(a[u]) && (n += cr(i) + ":" + rn(i, a[u]) + ";");
      else {
        var f = jt(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += cr(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var nn = /label:\s*([^\s;{]+)\s*(;|$)/g, Ae;
function xi(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ae = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += jt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += jt(r, t, e[s]), n) {
      var u = i;
      o += u[s];
    }
  nn.lastIndex = 0;
  for (var f = "", d; (d = nn.exec(o)) !== null; )
    f += "-" + d[1];
  var p = gi(o) + f;
  return {
    name: p,
    styles: o,
    next: Ae
  };
}
var Ct = { exports: {} }, _t = { exports: {} }, K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function Ti() {
  if (on) return K;
  on = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function O(g) {
    if (typeof g == "object" && g !== null) {
      var N = g.$$typeof;
      switch (N) {
        case t:
          switch (g = g.type, g) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case d:
                case w:
                case b:
                case a:
                  return g;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function E(g) {
    return O(g) === f;
  }
  return K.AsyncMode = u, K.ConcurrentMode = f, K.ContextConsumer = s, K.ContextProvider = a, K.Element = t, K.ForwardRef = d, K.Fragment = n, K.Lazy = w, K.Memo = b, K.Portal = r, K.Profiler = i, K.StrictMode = o, K.Suspense = p, K.isAsyncMode = function(g) {
    return E(g) || O(g) === u;
  }, K.isConcurrentMode = E, K.isContextConsumer = function(g) {
    return O(g) === s;
  }, K.isContextProvider = function(g) {
    return O(g) === a;
  }, K.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, K.isForwardRef = function(g) {
    return O(g) === d;
  }, K.isFragment = function(g) {
    return O(g) === n;
  }, K.isLazy = function(g) {
    return O(g) === w;
  }, K.isMemo = function(g) {
    return O(g) === b;
  }, K.isPortal = function(g) {
    return O(g) === r;
  }, K.isProfiler = function(g) {
    return O(g) === i;
  }, K.isStrictMode = function(g) {
    return O(g) === o;
  }, K.isSuspense = function(g) {
    return O(g) === p;
  }, K.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === f || g === i || g === o || g === p || g === y || typeof g == "object" && g !== null && (g.$$typeof === w || g.$$typeof === b || g.$$typeof === a || g.$$typeof === s || g.$$typeof === d || g.$$typeof === x || g.$$typeof === T || g.$$typeof === $ || g.$$typeof === l);
  }, K.typeOf = O, K;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function Ci() {
  return an || (an = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function O(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === n || _ === f || _ === i || _ === o || _ === p || _ === y || typeof _ == "object" && _ !== null && (_.$$typeof === w || _.$$typeof === b || _.$$typeof === a || _.$$typeof === s || _.$$typeof === d || _.$$typeof === x || _.$$typeof === T || _.$$typeof === $ || _.$$typeof === l);
    }
    function E(_) {
      if (typeof _ == "object" && _ !== null) {
        var ve = _.$$typeof;
        switch (ve) {
          case t:
            var Pe = _.type;
            switch (Pe) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case p:
                return Pe;
              default:
                var St = Pe && Pe.$$typeof;
                switch (St) {
                  case s:
                  case d:
                  case w:
                  case b:
                  case a:
                    return St;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var g = u, N = f, W = s, F = a, L = t, c = d, C = n, P = w, A = b, q = r, re = i, X = o, ie = p, de = !1;
    function ne(_) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(_) || E(_) === u;
    }
    function h(_) {
      return E(_) === f;
    }
    function S(_) {
      return E(_) === s;
    }
    function R(_) {
      return E(_) === a;
    }
    function k(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function I(_) {
      return E(_) === d;
    }
    function B(_) {
      return E(_) === n;
    }
    function V(_) {
      return E(_) === w;
    }
    function z(_) {
      return E(_) === b;
    }
    function D(_) {
      return E(_) === r;
    }
    function Y(_) {
      return E(_) === i;
    }
    function G(_) {
      return E(_) === o;
    }
    function le(_) {
      return E(_) === p;
    }
    H.AsyncMode = g, H.ConcurrentMode = N, H.ContextConsumer = W, H.ContextProvider = F, H.Element = L, H.ForwardRef = c, H.Fragment = C, H.Lazy = P, H.Memo = A, H.Portal = q, H.Profiler = re, H.StrictMode = X, H.Suspense = ie, H.isAsyncMode = ne, H.isConcurrentMode = h, H.isContextConsumer = S, H.isContextProvider = R, H.isElement = k, H.isForwardRef = I, H.isFragment = B, H.isLazy = V, H.isMemo = z, H.isPortal = D, H.isProfiler = Y, H.isStrictMode = G, H.isSuspense = le, H.isValidElementType = O, H.typeOf = E;
  }()), H;
}
var sn;
function eo() {
  return sn || (sn = 1, process.env.NODE_ENV === "production" ? _t.exports = Ti() : _t.exports = Ci()), _t.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ur, cn;
function _i() {
  if (cn) return ur;
  cn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ur = o() ? Object.assign : function(i, a) {
    for (var s, u = n(i), f, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var p in s)
        t.call(s, p) && (u[p] = s[p]);
      if (e) {
        f = e(s);
        for (var y = 0; y < f.length; y++)
          r.call(s, f[y]) && (u[f[y]] = s[f[y]]);
      }
    }
    return u;
  }, ur;
}
var lr, un;
function Dr() {
  if (un) return lr;
  un = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lr = e, lr;
}
var fr, ln;
function to() {
  return ln || (ln = 1, fr = Function.call.bind(Object.prototype.hasOwnProperty)), fr;
}
var dr, fn;
function Oi() {
  if (fn) return dr;
  fn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Dr(), r = {}, n = /* @__PURE__ */ to();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var p;
          try {
            if (typeof i[d] != "function") {
              var y = Error(
                (u || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            p = i[d](a, d, u, s, null, t);
          } catch (w) {
            p = w;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var b = f ? f() : "";
            e(
              "Failed " + s + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, dr = o, dr;
}
var pr, dn;
function Ri() {
  if (dn) return pr;
  dn = 1;
  var e = eo(), t = _i(), r = /* @__PURE__ */ Dr(), n = /* @__PURE__ */ to(), o = /* @__PURE__ */ Oi(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return pr = function(s, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(h) {
      var S = h && (f && h[f] || h[d]);
      if (typeof S == "function")
        return S;
    }
    var y = "<<anonymous>>", b = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: $(),
      arrayOf: O,
      element: E(),
      elementType: g(),
      instanceOf: N,
      node: c(),
      objectOf: F,
      oneOf: W,
      oneOfType: L,
      shape: P,
      exact: A
    };
    function w(h, S) {
      return h === S ? h !== 0 || 1 / h === 1 / S : h !== h && S !== S;
    }
    function l(h, S) {
      this.message = h, this.data = S && typeof S == "object" ? S : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function x(h) {
      if (process.env.NODE_ENV !== "production")
        var S = {}, R = 0;
      function k(B, V, z, D, Y, G, le) {
        if (D = D || y, G = G || z, le !== r) {
          if (u) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = D + ":" + z;
            !S[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + D + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), S[ve] = !0, R++);
          }
        }
        return V[z] == null ? B ? V[z] === null ? new l("The " + Y + " `" + G + "` is marked as required " + ("in `" + D + "`, but its value is `null`.")) : new l("The " + Y + " `" + G + "` is marked as required in " + ("`" + D + "`, but its value is `undefined`.")) : null : h(V, z, D, Y, G);
      }
      var I = k.bind(null, !1);
      return I.isRequired = k.bind(null, !0), I;
    }
    function T(h) {
      function S(R, k, I, B, V, z) {
        var D = R[k], Y = X(D);
        if (Y !== h) {
          var G = ie(D);
          return new l(
            "Invalid " + B + " `" + V + "` of type " + ("`" + G + "` supplied to `" + I + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return x(S);
    }
    function $() {
      return x(a);
    }
    function O(h) {
      function S(R, k, I, B, V) {
        if (typeof h != "function")
          return new l("Property `" + V + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var z = R[k];
        if (!Array.isArray(z)) {
          var D = X(z);
          return new l("Invalid " + B + " `" + V + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected an array."));
        }
        for (var Y = 0; Y < z.length; Y++) {
          var G = h(z, Y, I, B, V + "[" + Y + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return x(S);
    }
    function E() {
      function h(S, R, k, I, B) {
        var V = S[R];
        if (!s(V)) {
          var z = X(V);
          return new l("Invalid " + I + " `" + B + "` of type " + ("`" + z + "` supplied to `" + k + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(h);
    }
    function g() {
      function h(S, R, k, I, B) {
        var V = S[R];
        if (!e.isValidElementType(V)) {
          var z = X(V);
          return new l("Invalid " + I + " `" + B + "` of type " + ("`" + z + "` supplied to `" + k + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(h);
    }
    function N(h) {
      function S(R, k, I, B, V) {
        if (!(R[k] instanceof h)) {
          var z = h.name || y, D = ne(R[k]);
          return new l("Invalid " + B + " `" + V + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected ") + ("instance of `" + z + "`."));
        }
        return null;
      }
      return x(S);
    }
    function W(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function S(R, k, I, B, V) {
        for (var z = R[k], D = 0; D < h.length; D++)
          if (w(z, h[D]))
            return null;
        var Y = JSON.stringify(h, function(le, _) {
          var ve = ie(_);
          return ve === "symbol" ? String(_) : _;
        });
        return new l("Invalid " + B + " `" + V + "` of value `" + String(z) + "` " + ("supplied to `" + I + "`, expected one of " + Y + "."));
      }
      return x(S);
    }
    function F(h) {
      function S(R, k, I, B, V) {
        if (typeof h != "function")
          return new l("Property `" + V + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var z = R[k], D = X(z);
        if (D !== "object")
          return new l("Invalid " + B + " `" + V + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected an object."));
        for (var Y in z)
          if (n(z, Y)) {
            var G = h(z, Y, I, B, V + "." + Y, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return x(S);
    }
    function L(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var S = 0; S < h.length; S++) {
        var R = h[S];
        if (typeof R != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(R) + " at index " + S + "."
          ), a;
      }
      function k(I, B, V, z, D) {
        for (var Y = [], G = 0; G < h.length; G++) {
          var le = h[G], _ = le(I, B, V, z, D, r);
          if (_ == null)
            return null;
          _.data && n(_.data, "expectedType") && Y.push(_.data.expectedType);
        }
        var ve = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new l("Invalid " + z + " `" + D + "` supplied to " + ("`" + V + "`" + ve + "."));
      }
      return x(k);
    }
    function c() {
      function h(S, R, k, I, B) {
        return q(S[R]) ? null : new l("Invalid " + I + " `" + B + "` supplied to " + ("`" + k + "`, expected a ReactNode."));
      }
      return x(h);
    }
    function C(h, S, R, k, I) {
      return new l(
        (h || "React class") + ": " + S + " type `" + R + "." + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function P(h) {
      function S(R, k, I, B, V) {
        var z = R[k], D = X(z);
        if (D !== "object")
          return new l("Invalid " + B + " `" + V + "` of type `" + D + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var Y in h) {
          var G = h[Y];
          if (typeof G != "function")
            return C(I, B, V, Y, ie(G));
          var le = G(z, Y, I, B, V + "." + Y, r);
          if (le)
            return le;
        }
        return null;
      }
      return x(S);
    }
    function A(h) {
      function S(R, k, I, B, V) {
        var z = R[k], D = X(z);
        if (D !== "object")
          return new l("Invalid " + B + " `" + V + "` of type `" + D + "` " + ("supplied to `" + I + "`, expected `object`."));
        var Y = t({}, R[k], h);
        for (var G in Y) {
          var le = h[G];
          if (n(h, G) && typeof le != "function")
            return C(I, B, V, G, ie(le));
          if (!le)
            return new l(
              "Invalid " + B + " `" + V + "` key `" + G + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(R[k], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var _ = le(z, G, I, B, V + "." + G, r);
          if (_)
            return _;
        }
        return null;
      }
      return x(S);
    }
    function q(h) {
      switch (typeof h) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !h;
        case "object":
          if (Array.isArray(h))
            return h.every(q);
          if (h === null || s(h))
            return !0;
          var S = p(h);
          if (S) {
            var R = S.call(h), k;
            if (S !== h.entries) {
              for (; !(k = R.next()).done; )
                if (!q(k.value))
                  return !1;
            } else
              for (; !(k = R.next()).done; ) {
                var I = k.value;
                if (I && !q(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(h, S) {
      return h === "symbol" ? !0 : S ? S["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && S instanceof Symbol : !1;
    }
    function X(h) {
      var S = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : re(S, h) ? "symbol" : S;
    }
    function ie(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var S = X(h);
      if (S === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return S;
    }
    function de(h) {
      var S = ie(h);
      switch (S) {
        case "array":
        case "object":
          return "an " + S;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + S;
        default:
          return S;
      }
    }
    function ne(h) {
      return !h.constructor || !h.constructor.name ? y : h.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, pr;
}
var hr, pn;
function Ni() {
  if (pn) return hr;
  pn = 1;
  var e = /* @__PURE__ */ Dr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, hr = function() {
    function n(a, s, u, f, d, p) {
      if (p !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, hr;
}
var hn;
function Pi() {
  if (hn) return Ct.exports;
  if (hn = 1, process.env.NODE_ENV !== "production") {
    var e = eo(), t = !0;
    Ct.exports = /* @__PURE__ */ Ri()(e.isElement, t);
  } else
    Ct.exports = /* @__PURE__ */ Ni()();
  return Ct.exports;
}
var $i = /* @__PURE__ */ Pi();
const m = /* @__PURE__ */ pi($i);
/**
 * @mui/styled-engine v7.1.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ro(e, t) {
  const r = fi(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function ki(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const mn = [];
function yn(e) {
  return mn[0] = e, xi(mn);
}
var Ot = { exports: {} }, J = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function Ai() {
  if (gn) return J;
  gn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
  function w(l) {
    if (typeof l == "object" && l !== null) {
      var x = l.$$typeof;
      switch (x) {
        case e:
          switch (l = l.type, l) {
            case r:
            case o:
            case n:
            case u:
            case f:
            case y:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case a:
                case s:
                case p:
                case d:
                  return l;
                case i:
                  return l;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return J.ContextConsumer = i, J.ContextProvider = a, J.Element = e, J.ForwardRef = s, J.Fragment = r, J.Lazy = p, J.Memo = d, J.Portal = t, J.Profiler = o, J.StrictMode = n, J.Suspense = u, J.SuspenseList = f, J.isContextConsumer = function(l) {
    return w(l) === i;
  }, J.isContextProvider = function(l) {
    return w(l) === a;
  }, J.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, J.isForwardRef = function(l) {
    return w(l) === s;
  }, J.isFragment = function(l) {
    return w(l) === r;
  }, J.isLazy = function(l) {
    return w(l) === p;
  }, J.isMemo = function(l) {
    return w(l) === d;
  }, J.isPortal = function(l) {
    return w(l) === t;
  }, J.isProfiler = function(l) {
    return w(l) === o;
  }, J.isStrictMode = function(l) {
    return w(l) === n;
  }, J.isSuspense = function(l) {
    return w(l) === u;
  }, J.isSuspenseList = function(l) {
    return w(l) === f;
  }, J.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === o || l === n || l === u || l === f || typeof l == "object" && l !== null && (l.$$typeof === p || l.$$typeof === d || l.$$typeof === a || l.$$typeof === i || l.$$typeof === s || l.$$typeof === b || l.getModuleId !== void 0);
  }, J.typeOf = w, J;
}
var Q = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function Ii() {
  return bn || (bn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var x = l.$$typeof;
        switch (x) {
          case t:
            switch (l = l.type, l) {
              case n:
              case i:
              case o:
              case f:
              case d:
              case b:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case s:
                  case u:
                  case y:
                  case p:
                    return l;
                  case a:
                    return l;
                  default:
                    return x;
                }
            }
          case r:
            return x;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.for("react.view_transition"), w = Symbol.for("react.client.reference");
    Q.ContextConsumer = a, Q.ContextProvider = s, Q.Element = t, Q.ForwardRef = u, Q.Fragment = n, Q.Lazy = y, Q.Memo = p, Q.Portal = r, Q.Profiler = i, Q.StrictMode = o, Q.Suspense = f, Q.SuspenseList = d, Q.isContextConsumer = function(l) {
      return e(l) === a;
    }, Q.isContextProvider = function(l) {
      return e(l) === s;
    }, Q.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }, Q.isForwardRef = function(l) {
      return e(l) === u;
    }, Q.isFragment = function(l) {
      return e(l) === n;
    }, Q.isLazy = function(l) {
      return e(l) === y;
    }, Q.isMemo = function(l) {
      return e(l) === p;
    }, Q.isPortal = function(l) {
      return e(l) === r;
    }, Q.isProfiler = function(l) {
      return e(l) === i;
    }, Q.isStrictMode = function(l) {
      return e(l) === o;
    }, Q.isSuspense = function(l) {
      return e(l) === f;
    }, Q.isSuspenseList = function(l) {
      return e(l) === d;
    }, Q.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === i || l === o || l === f || l === d || typeof l == "object" && l !== null && (l.$$typeof === y || l.$$typeof === p || l.$$typeof === s || l.$$typeof === a || l.$$typeof === u || l.$$typeof === w || l.getModuleId !== void 0);
    }, Q.typeOf = e;
  }()), Q;
}
var vn;
function Di() {
  return vn || (vn = 1, process.env.NODE_ENV === "production" ? Ot.exports = /* @__PURE__ */ Ai() : Ot.exports = /* @__PURE__ */ Ii()), Ot.exports;
}
var Bt = /* @__PURE__ */ Di();
function Ce(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function no(e) {
  if (/* @__PURE__ */ M.isValidElement(e) || Bt.isValidElementType(e) || !Ce(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = no(e[r]);
  }), t;
}
function ye(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ce(e) && Ce(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ M.isValidElement(t[o]) || Bt.isValidElementType(t[o]) ? n[o] = t[o] : Ce(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ce(e[o]) ? n[o] = ye(e[o], t[o], r) : r.clone ? n[o] = Ce(t[o]) ? no(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const Mi = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function ji(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = Mi(t), a = Object.keys(i);
  function s(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function u(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - n / 100}${r})`;
  }
  function f(y, b) {
    const w = a.indexOf(b);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(w !== -1 && typeof t[a[w]] == "number" ? t[a[w]] : b) - n / 100}${r})`;
  }
  function d(y) {
    return a.indexOf(y) + 1 < a.length ? f(y, a[a.indexOf(y) + 1]) : s(y);
  }
  function p(y) {
    const b = a.indexOf(y);
    return b === 0 ? s(a[1]) : b === a.length - 1 ? u(a[b]) : f(y, a[a.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: u,
    between: f,
    only: d,
    not: p,
    unit: r,
    ...o
  };
}
function Bi(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, s;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((s = o.match(i)) == null ? void 0 : s[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Vi(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function zi(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ie(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Fi(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const u = t(e.breakpoints.not(...s), a);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Li = {
  borderRadius: 4
}, Me = process.env.NODE_ENV !== "production" ? m.oneOfType([m.number, m.string, m.object, m.array]) : {};
function ft(e, t) {
  return t ? ye(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Gt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, En = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Gt[e]}px)`
}, Wi = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Gt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Re(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || En;
    return t.reduce((a, s, u) => (a[i.up(i.keys[u])] = r(t[u]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || En;
    return Object.keys(t).reduce((a, s) => {
      if (Vi(i.keys, s)) {
        const u = zi(n.containerQueries ? n : Wi, s);
        u && (a[u] = r(t[s], s));
      } else if (Object.keys(i.values || Gt).includes(s)) {
        const u = i.up(s);
        a[u] = r(t[s], s);
      } else {
        const u = s;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Ui(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Yi(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function ce(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ie(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function qt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Vt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = qt(e, r) || n, t && (o = t(o, n, e)), o;
}
function ue(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], u = a.theme, f = qt(u, n) || {};
    return Re(a, s, (p) => {
      let y = Vt(f, o, p);
      return p === y && typeof p == "string" && (y = Vt(f, o, `${t}${p === "default" ? "" : ce(p)}`, p)), r === !1 ? y : {
        [r]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Me
  } : {}, i.filterProps = [t], i;
}
function Gi(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const qi = {
  m: "margin",
  p: "padding"
}, Ki = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, wn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Hi = Gi((e) => {
  if (e.length > 2)
    if (wn[e])
      e = wn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = qi[t], o = Ki[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Kt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ht = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Xi = [...Kt, ...Ht];
function gt(e, t, r, n) {
  const o = qt(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : typeof s == "string" && s.startsWith("var(") ? `calc(-1 * ${s})` : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Mr(e) {
  return gt(e, "spacing", 8, "spacing");
}
function bt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Ji(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = bt(t, r), n), {});
}
function Qi(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Hi(r), i = Ji(o, n), a = e[r];
  return Re(e, a, i);
}
function oo(e, t) {
  const r = Mr(e.theme);
  return Object.keys(e).map((n) => Qi(e, t, n, r)).reduce(ft, {});
}
function ae(e) {
  return oo(e, Kt);
}
ae.propTypes = process.env.NODE_ENV !== "production" ? Kt.reduce((e, t) => (e[t] = Me, e), {}) : {};
ae.filterProps = Kt;
function se(e) {
  return oo(e, Ht);
}
se.propTypes = process.env.NODE_ENV !== "production" ? Ht.reduce((e, t) => (e[t] = Me, e), {}) : {};
se.filterProps = Ht;
process.env.NODE_ENV !== "production" && Xi.reduce((e, t) => (e[t] = Me, e), {});
function io(e = 8, t = Mr({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Xt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? ft(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function we(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Se(e, t) {
  return ue({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Zi = Se("border", we), ea = Se("borderTop", we), ta = Se("borderRight", we), ra = Se("borderBottom", we), na = Se("borderLeft", we), oa = Se("borderColor"), ia = Se("borderTopColor"), aa = Se("borderRightColor"), sa = Se("borderBottomColor"), ca = Se("borderLeftColor"), ua = Se("outline", we), la = Se("outlineColor"), Jt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = gt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: bt(t, n)
    });
    return Re(e, e.borderRadius, r);
  }
  return null;
};
Jt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Me
} : {};
Jt.filterProps = ["borderRadius"];
Xt(Zi, ea, ta, ra, na, oa, ia, aa, sa, ca, Jt, ua, la);
const Qt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = gt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: bt(t, n)
    });
    return Re(e, e.gap, r);
  }
  return null;
};
Qt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Me
} : {};
Qt.filterProps = ["gap"];
const Zt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = gt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: bt(t, n)
    });
    return Re(e, e.columnGap, r);
  }
  return null;
};
Zt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Me
} : {};
Zt.filterProps = ["columnGap"];
const er = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = gt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: bt(t, n)
    });
    return Re(e, e.rowGap, r);
  }
  return null;
};
er.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Me
} : {};
er.filterProps = ["rowGap"];
const fa = ue({
  prop: "gridColumn"
}), da = ue({
  prop: "gridRow"
}), pa = ue({
  prop: "gridAutoFlow"
}), ha = ue({
  prop: "gridAutoColumns"
}), ma = ue({
  prop: "gridAutoRows"
}), ya = ue({
  prop: "gridTemplateColumns"
}), ga = ue({
  prop: "gridTemplateRows"
}), ba = ue({
  prop: "gridTemplateAreas"
}), va = ue({
  prop: "gridArea"
});
Xt(Qt, Zt, er, fa, da, pa, ha, ma, ya, ga, ba, va);
function Qe(e, t) {
  return t === "grey" ? t : e;
}
const Ea = ue({
  prop: "color",
  themeKey: "palette",
  transform: Qe
}), wa = ue({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Qe
}), Sa = ue({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Qe
});
Xt(Ea, wa, Sa);
function me(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const xa = ue({
  prop: "width",
  transform: me
}), jr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, u;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || Gt[r];
      return n ? ((u = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : u.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: me(r)
      };
    };
    return Re(e, e.maxWidth, t);
  }
  return null;
};
jr.filterProps = ["maxWidth"];
const Ta = ue({
  prop: "minWidth",
  transform: me
}), Ca = ue({
  prop: "height",
  transform: me
}), _a = ue({
  prop: "maxHeight",
  transform: me
}), Oa = ue({
  prop: "minHeight",
  transform: me
});
ue({
  prop: "size",
  cssProperty: "width",
  transform: me
});
ue({
  prop: "size",
  cssProperty: "height",
  transform: me
});
const Ra = ue({
  prop: "boxSizing"
});
Xt(xa, jr, Ta, Ca, _a, Oa, Ra);
const vt = {
  // borders
  border: {
    themeKey: "borders",
    transform: we
  },
  borderTop: {
    themeKey: "borders",
    transform: we
  },
  borderRight: {
    themeKey: "borders",
    transform: we
  },
  borderBottom: {
    themeKey: "borders",
    transform: we
  },
  borderLeft: {
    themeKey: "borders",
    transform: we
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: we
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Jt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Qe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Qe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Qe
  },
  // spacing
  p: {
    style: se
  },
  pt: {
    style: se
  },
  pr: {
    style: se
  },
  pb: {
    style: se
  },
  pl: {
    style: se
  },
  px: {
    style: se
  },
  py: {
    style: se
  },
  padding: {
    style: se
  },
  paddingTop: {
    style: se
  },
  paddingRight: {
    style: se
  },
  paddingBottom: {
    style: se
  },
  paddingLeft: {
    style: se
  },
  paddingX: {
    style: se
  },
  paddingY: {
    style: se
  },
  paddingInline: {
    style: se
  },
  paddingInlineStart: {
    style: se
  },
  paddingInlineEnd: {
    style: se
  },
  paddingBlock: {
    style: se
  },
  paddingBlockStart: {
    style: se
  },
  paddingBlockEnd: {
    style: se
  },
  m: {
    style: ae
  },
  mt: {
    style: ae
  },
  mr: {
    style: ae
  },
  mb: {
    style: ae
  },
  ml: {
    style: ae
  },
  mx: {
    style: ae
  },
  my: {
    style: ae
  },
  margin: {
    style: ae
  },
  marginTop: {
    style: ae
  },
  marginRight: {
    style: ae
  },
  marginBottom: {
    style: ae
  },
  marginLeft: {
    style: ae
  },
  marginX: {
    style: ae
  },
  marginY: {
    style: ae
  },
  marginInline: {
    style: ae
  },
  marginInlineStart: {
    style: ae
  },
  marginInlineEnd: {
    style: ae
  },
  marginBlock: {
    style: ae
  },
  marginBlockStart: {
    style: ae
  },
  marginBlockEnd: {
    style: ae
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Qt
  },
  rowGap: {
    style: er
  },
  columnGap: {
    style: Zt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: me
  },
  maxWidth: {
    style: jr
  },
  minWidth: {
    transform: me
  },
  height: {
    transform: me
  },
  maxHeight: {
    transform: me
  },
  minHeight: {
    transform: me
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Na(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Pa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $a() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, s = i[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: f,
      transform: d,
      style: p
    } = s;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const y = qt(o, f) || {};
    return p ? p(a) : Re(a, n, (w) => {
      let l = Vt(y, d, w);
      return w === l && typeof w == "string" && (l = Vt(y, d, `${r}${w === "default" ? "" : ce(w)}`, w)), u === !1 ? l : {
        [u]: l
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? vt;
    function a(s) {
      let u = s;
      if (typeof s == "function")
        u = s(o);
      else if (typeof s != "object")
        return s;
      if (!u)
        return null;
      const f = Ui(o.breakpoints), d = Object.keys(f);
      let p = f;
      return Object.keys(u).forEach((y) => {
        const b = Pa(u[y], o);
        if (b != null)
          if (typeof b == "object")
            if (i[y])
              p = ft(p, e(y, b, o, i));
            else {
              const w = Re({
                theme: o
              }, b, (l) => ({
                [y]: l
              }));
              Na(w, b) ? p[y] = t({
                sx: b,
                theme: o
              }) : p = ft(p, w);
            }
          else
            p = ft(p, e(y, b, o, i));
      }), Bi(o, Yi(d, p));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const Fe = $a();
Fe.filterProps = ["sx"];
function ka(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Br(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = ji(r), u = io(o);
  let f = ye({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: u,
    shape: {
      ...Li,
      ...i
    }
  }, a);
  return f = Fi(f), f.applyStyles = ka, f = t.reduce((d, p) => ye(d, p), f), f.unstable_sxConfig = {
    ...vt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, f.unstable_sx = function(p) {
    return Fe({
      sx: p,
      theme: this
    });
  }, f;
}
function Aa(e) {
  return Object.keys(e).length === 0;
}
function Ia(e = null) {
  const t = M.useContext(di);
  return !t || Aa(t) ? e : t;
}
const Da = Br();
function Ma(e = Da) {
  return Ia(e);
}
const ja = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? vt;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function ao(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = ja(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...a) => {
    const s = t(...a);
    return Ce(s) ? {
      ...n,
      ...s
    } : n;
  } : i = {
    ...n,
    ...t
  }, {
    ...o,
    sx: i
  };
}
const Sn = (e) => e, Ba = () => {
  let e = Sn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Sn;
    }
  };
}, so = Ba();
function co(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = co(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function pe() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = co(e)) && (n && (n += " "), n += t);
  return n;
}
function Va(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = ro("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(Fe);
  return /* @__PURE__ */ M.forwardRef(function(u, f) {
    const d = Ma(r), {
      className: p,
      component: y = "div",
      ...b
    } = ao(u);
    return /* @__PURE__ */ j.jsx(i, {
      as: y,
      ref: f,
      className: pe(p, o ? o(n) : n),
      theme: t && d[t] || d,
      ...b
    });
  });
}
const za = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function tt(e, t, r = "Mui") {
  const n = za[t];
  return n ? `${r}-${n}` : `${so.generate(e)}-${t}`;
}
function rt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = tt(e, o, r);
  }), n;
}
function uo(e, t = "") {
  return e.displayName || e.name || t;
}
function xn(e, t, r) {
  const n = uo(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Fa(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return uo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Bt.ForwardRef:
          return xn(e, e.render, "ForwardRef");
        case Bt.Memo:
          return xn(e, e.type, "memo");
        default:
          return;
      }
  }
}
function lo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: yn(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = yn(o.style));
  }), n;
}
const La = Br();
function mr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Wa(e) {
  return e ? (t, r) => r[e] : null;
}
function Ua(e, t, r) {
  e.theme = Ka(e.theme) ? r : e.theme[t] || e.theme;
}
function Dt(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => Dt(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return fo(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function fo(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const s in a.props)
        if (e[s] !== a.props[s] && ((o = e.ownerState) == null ? void 0 : o[s]) !== a.props[s])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function Ya(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = La,
    rootShouldForwardProp: n = mr,
    slotShouldForwardProp: o = mr
  } = e;
  function i(s) {
    Ua(s, t, r);
  }
  return (s, u = {}) => {
    ki(s, (g) => g.filter((N) => N !== Fe));
    const {
      name: f,
      slot: d,
      skipVariantsResolver: p,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = Wa(po(d)),
      ...w
    } = u, l = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), x = y || !1;
    let T = mr;
    d === "Root" || d === "root" ? T = n : d ? T = o : Ha(s) && (T = void 0);
    const $ = ro(s, {
      shouldForwardProp: T,
      label: qa(f, d),
      ...w
    }), O = (g) => {
      if (g.__emotion_real === g)
        return g;
      if (typeof g == "function")
        return function(W) {
          return Dt(W, g);
        };
      if (Ce(g)) {
        const N = lo(g);
        return N.variants ? function(F) {
          return Dt(F, N);
        } : N.style;
      }
      return g;
    }, E = (...g) => {
      const N = [], W = g.map(O), F = [];
      if (N.push(i), f && b && F.push(function(P) {
        var X, ie;
        const q = (ie = (X = P.theme.components) == null ? void 0 : X[f]) == null ? void 0 : ie.styleOverrides;
        if (!q)
          return null;
        const re = {};
        for (const de in q)
          re[de] = Dt(P, q[de]);
        return b(P, re);
      }), f && !l && F.push(function(P) {
        var re, X;
        const A = P.theme, q = (X = (re = A == null ? void 0 : A.components) == null ? void 0 : re[f]) == null ? void 0 : X.variants;
        return q ? fo(P, q) : null;
      }), x || F.push(Fe), Array.isArray(W[0])) {
        const C = W.shift(), P = new Array(N.length).fill(""), A = new Array(F.length).fill("");
        let q;
        q = [...P, ...C, ...A], q.raw = [...P, ...C.raw, ...A], N.unshift(q);
      }
      const L = [...N, ...W, ...F], c = $(...L);
      return s.muiName && (c.muiName = s.muiName), process.env.NODE_ENV !== "production" && (c.displayName = Ga(f, d, s)), c;
    };
    return $.withConfig && (E.withConfig = $.withConfig), E;
  };
}
function Ga(e, t, r) {
  return e ? `${e}${ce(t || "")}` : `Styled(${Fa(r)})`;
}
function qa(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${po(t || "Root")}`), r;
}
function Ka(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ha(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function po(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function zt(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const s in i)
            if (Object.prototype.hasOwnProperty.call(i, s)) {
              const u = s;
              r[o][u] = zt(i[u], a[u]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
const Xa = typeof window < "u" ? M.useLayoutEffect : M.useEffect;
function Ja(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Vr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Ja(e, t, r);
}
function Qa(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function De(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return De(Qa(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ie(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ie(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Za = (e) => {
  const t = De(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, ct = (e, t) => {
  try {
    return Za(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function tr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function ho(e) {
  e = De(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, d = (f + r / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let s = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", u.push(t[3])), tr({
    type: s,
    values: u
  });
}
function wr(e) {
  e = De(e);
  let t = e.type === "hsl" || e.type === "hsla" ? De(ho(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Tn(e, t) {
  const r = wr(e), n = wr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function He(e, t) {
  return e = De(e), t = Vr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, tr(e);
}
function Rt(e, t, r) {
  try {
    return He(e, t);
  } catch {
    return e;
  }
}
function zr(e, t) {
  if (e = De(e), t = Vr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return tr(e);
}
function Z(e, t, r) {
  try {
    return zr(e, t);
  } catch {
    return e;
  }
}
function Fr(e, t) {
  if (e = De(e), t = Vr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return tr(e);
}
function ee(e, t, r) {
  try {
    return Fr(e, t);
  } catch {
    return e;
  }
}
function es(e, t = 0.15) {
  return wr(e) > 0.5 ? zr(e, t) : Fr(e, t);
}
function Nt(e, t, r) {
  try {
    return es(e, t);
  } catch {
    return e;
  }
}
const ts = /* @__PURE__ */ M.createContext(void 0);
process.env.NODE_ENV !== "production" && (m.node, m.object);
function rs(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? zt(o.defaultProps, n) : !o.styleOverrides && !o.variants ? zt(o, n) : n;
}
function ns({
  props: e,
  name: t
}) {
  const r = M.useContext(ts);
  return rs({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Cn = {
  theme: void 0
};
function os(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Cn.theme = o.theme, i = lo(e(Cn)), t = i, r = o.theme), i;
  };
}
function is(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const _n = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, as = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, u]) => {
      (!r || r && !r([...i, s])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...i, s], Array.isArray(u) ? [...a, s] : a) : t([...i, s], u, a));
    });
  }
  n(e);
}, ss = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function yr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return as(
    e,
    (s, u, f) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(s, u))) {
        const d = `--${r ? `${r}-` : ""}${s.join("-")}`, p = ss(s, u);
        Object.assign(o, {
          [d]: p
        }), _n(i, s, `var(${d})`, f), _n(a, s, `var(${d}, ${p})`, f);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function cs(e, t = {}) {
  const {
    getSelector: r = x,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: s = "light",
    ...u
  } = e, {
    vars: f,
    css: d,
    varsWithDefaults: p
  } = yr(u, t);
  let y = p;
  const b = {}, {
    [s]: w,
    ...l
  } = i;
  if (Object.entries(l || {}).forEach(([O, E]) => {
    const {
      vars: g,
      css: N,
      varsWithDefaults: W
    } = yr(E, t);
    y = ye(y, W), b[O] = {
      css: N,
      vars: g
    };
  }), w) {
    const {
      css: O,
      vars: E,
      varsWithDefaults: g
    } = yr(w, t);
    y = ye(y, g), b[s] = {
      css: O,
      vars: E
    };
  }
  function x(O, E) {
    var N, W;
    let g = o;
    if (o === "class" && (g = ".%s"), o === "data" && (g = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (g = `[${o}="%s"]`), O) {
      if (g === "media")
        return e.defaultColorScheme === O ? ":root" : {
          [`@media (prefers-color-scheme: ${((W = (N = i[O]) == null ? void 0 : N.palette) == null ? void 0 : W.mode) || O})`]: {
            ":root": E
          }
        };
      if (g)
        return e.defaultColorScheme === O ? `:root, ${g.replace("%s", String(O))}` : g.replace("%s", String(O));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let O = {
        ...f
      };
      return Object.entries(b).forEach(([, {
        vars: E
      }]) => {
        O = ye(O, E);
      }), O;
    },
    generateStyleSheets: () => {
      var F, L;
      const O = [], E = e.defaultColorScheme || "light";
      function g(c, C) {
        Object.keys(C).length && O.push(typeof c == "string" ? {
          [c]: {
            ...C
          }
        } : c);
      }
      g(r(void 0, {
        ...d
      }), d);
      const {
        [E]: N,
        ...W
      } = b;
      if (N) {
        const {
          css: c
        } = N, C = (L = (F = i[E]) == null ? void 0 : F.palette) == null ? void 0 : L.mode, P = !n && C ? {
          colorScheme: C,
          ...c
        } : {
          ...c
        };
        g(r(E, {
          ...P
        }), P);
      }
      return Object.entries(W).forEach(([c, {
        css: C
      }]) => {
        var q, re;
        const P = (re = (q = i[c]) == null ? void 0 : q.palette) == null ? void 0 : re.mode, A = !n && P ? {
          colorScheme: P,
          ...C
        } : {
          ...C
        };
        g(r(c, {
          ...A
        }), A);
      }), O;
    }
  };
}
function us(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function rr(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", s = !0;
    for (let u = 0; u < i.length; u += 1) {
      const f = i[u];
      f && (a += (s === !0 ? "" : " ") + t(f), s = !1, r && r[f] && (a += " " + r[f]));
    }
    n[o] = a;
  }
  return n;
}
const mo = "$$material", pt = {
  black: "#000",
  white: "#fff"
}, ls = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ue = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ye = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, st = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ge = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, qe = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ke = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function yo() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: pt.white,
      default: pt.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const fs = yo();
function go() {
  return {
    text: {
      primary: pt.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: pt.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const On = go();
function Rn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Fr(e.main, o) : t === "dark" && (e.dark = zr(e.main, i)));
}
function ds(e = "light") {
  return e === "dark" ? {
    main: Ge[200],
    light: Ge[50],
    dark: Ge[400]
  } : {
    main: Ge[700],
    light: Ge[400],
    dark: Ge[800]
  };
}
function ps(e = "light") {
  return e === "dark" ? {
    main: Ue[200],
    light: Ue[50],
    dark: Ue[400]
  } : {
    main: Ue[500],
    light: Ue[300],
    dark: Ue[700]
  };
}
function hs(e = "light") {
  return e === "dark" ? {
    main: Ye[500],
    light: Ye[300],
    dark: Ye[700]
  } : {
    main: Ye[700],
    light: Ye[400],
    dark: Ye[800]
  };
}
function ms(e = "light") {
  return e === "dark" ? {
    main: qe[400],
    light: qe[300],
    dark: qe[700]
  } : {
    main: qe[700],
    light: qe[500],
    dark: qe[900]
  };
}
function ys(e = "light") {
  return e === "dark" ? {
    main: Ke[400],
    light: Ke[300],
    dark: Ke[700]
  } : {
    main: Ke[800],
    light: Ke[500],
    dark: Ke[900]
  };
}
function gs(e = "light") {
  return e === "dark" ? {
    main: st[400],
    light: st[300],
    dark: st[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: st[500],
    dark: st[900]
  };
}
function Lr(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || ds(t), a = e.secondary || ps(t), s = e.error || hs(t), u = e.info || ms(t), f = e.success || ys(t), d = e.warning || gs(t);
  function p(l) {
    const x = Tn(l, On.text.primary) >= r ? On.text.primary : fs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Tn(l, x);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${x} on ${l}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return x;
  }
  const y = ({
    color: l,
    name: x,
    mainShade: T = 500,
    lightShade: $ = 300,
    darkShade: O = 700
  }) => {
    if (l = {
      ...l
    }, !l.main && l[T] && (l.main = l[T]), !l.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : Ie(11, x ? ` (${x})` : "", T));
    if (typeof l.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(l.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ie(12, x ? ` (${x})` : "", JSON.stringify(l.main)));
    return Rn(l, "light", $, n), Rn(l, "dark", O, n), l.contrastText || (l.contrastText = p(l.main)), l;
  };
  let b;
  return t === "light" ? b = yo() : t === "dark" && (b = go()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ye({
    // A collection of common colors.
    common: {
      ...pt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: ls,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...b
  }, o);
}
function bs(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function vs(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Es(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Nn = {
  textTransform: "uppercase"
}, Pn = '"Roboto", "Helvetica", "Arial", sans-serif';
function ws(e, t) {
  const {
    fontFamily: r = Pn,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: d,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, b = d || ((x) => `${x / u * y}rem`), w = (x, T, $, O, E) => ({
    fontFamily: r,
    fontWeight: x,
    fontSize: b(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: $,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Pn ? {
      letterSpacing: `${Es(O / T)}em`
    } : {},
    ...E,
    ...f
  }), l = {
    h1: w(o, 96, 1.167, -1.5),
    h2: w(o, 60, 1.2, -0.5),
    h3: w(i, 48, 1.167, 0),
    h4: w(i, 34, 1.235, 0.25),
    h5: w(i, 24, 1.334, 0),
    h6: w(a, 20, 1.6, 0.15),
    subtitle1: w(i, 16, 1.75, 0.15),
    subtitle2: w(a, 14, 1.57, 0.1),
    body1: w(i, 16, 1.5, 0.15),
    body2: w(i, 14, 1.43, 0.15),
    button: w(a, 14, 1.75, 0.4, Nn),
    caption: w(i, 12, 1.66, 0.4),
    overline: w(i, 12, 2.66, 1, Nn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ye({
    htmlFontSize: u,
    pxToRem: b,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...l
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Ss = 0.2, xs = 0.14, Ts = 0.12;
function oe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ss})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${xs})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ts})`].join(",");
}
const Cs = ["none", oe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), oe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), oe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), oe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), oe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), oe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), oe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), oe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), oe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), oe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), oe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), oe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), oe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), oe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), oe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), oe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), oe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), oe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), oe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), oe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), oe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), oe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), oe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), oe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], _s = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Os = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function $n(e) {
  return `${Math.round(e)}ms`;
}
function Rs(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Ns(e) {
  const t = {
    ..._s,
    ...e.easing
  }, r = {
    ...Os,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Rs,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: u = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const d = (y) => typeof y == "string", p = (y) => !Number.isNaN(parseFloat(y));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(s) || console.error('MUI: Argument "easing" must be a string.'), !p(u) && !d(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : $n(a)} ${s} ${typeof u == "string" ? u : $n(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Ps = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function $s(e) {
  return Ce(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function bo(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !$s(s) || a.startsWith("unstable_") ? delete n[a] : Ce(s) && (n[a] = {
        ...s
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Sr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: u,
    ...f
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Ie(20));
  const d = Lr(i), p = Br(e);
  let y = ye(p, {
    mixins: vs(p.breakpoints, n),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Cs.slice(),
    typography: ws(d, s),
    transitions: Ns(a),
    zIndex: {
      ...Ps
    }
  });
  if (y = ye(y, f), y = t.reduce((b, w) => ye(b, w), y), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], w = (l, x) => {
      let T;
      for (T in l) {
        const $ = l[T];
        if (b.includes(T) && Object.keys($).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const O = tt("", T);
            console.error([`MUI: The \`${x}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(l, null, 2), "", `Instead, you need to use the '&.${O}' syntax:`, JSON.stringify({
              root: {
                [`&.${O}`]: $
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          l[T] = {};
        }
      }
    };
    Object.keys(y.components).forEach((l) => {
      const x = y.components[l].styleOverrides;
      x && l.startsWith("Mui") && w(x, l);
    });
  }
  return y.unstable_sxConfig = {
    ...vt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, y.unstable_sx = function(w) {
    return Fe({
      sx: w,
      theme: this
    });
  }, y.toRuntimeSource = bo, y;
}
function ks(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const As = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = ks(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function vo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Eo(e) {
  return e === "dark" ? As : [];
}
function Is(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = Lr(t);
  return {
    palette: i,
    opacity: {
      ...vo(i.mode),
      ...r
    },
    overlays: n || Eo(i.mode),
    ...o
  };
}
function Ds(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ms = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], js = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Ms(e.cssVarPrefix).forEach((s) => {
        a[s] = r[s], delete r[s];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function Bs(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function v(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function ut(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : ho(e);
}
function _e(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ct(ut(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Vs(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Te = (e) => {
  try {
    return e();
  } catch {
  }
}, zs = (e = "mui") => is(e);
function gr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Is({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = Sr({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...vo(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Eo(o)
  }, a;
}
function Fs(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Ds,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...f
  } = e, d = Object.keys(r)[0], p = n || (r.light && d !== "light" ? "light" : d), y = zs(i), {
    [p]: b,
    light: w,
    dark: l,
    ...x
  } = r, T = {
    ...x
  };
  let $ = b;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && ($ = !0), !$)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Ie(21, p));
  const O = gr(T, $, f, p);
  w && !T.light && gr(T, w, void 0, "light"), l && !T.dark && gr(T, l, void 0, "dark");
  let E = {
    defaultColorScheme: p,
    ...O,
    cssVarPrefix: i,
    colorSchemeSelector: s,
    rootSelector: u,
    getCssVar: y,
    colorSchemes: T,
    font: {
      ...bs(O.typography),
      ...O.font
    },
    spacing: Vs(f.spacing)
  };
  Object.keys(E.colorSchemes).forEach((L) => {
    const c = E.colorSchemes[L].palette, C = (P) => {
      const A = P.split("-"), q = A[1], re = A[2];
      return y(P, c[q][re]);
    };
    if (c.mode === "light" && (v(c.common, "background", "#fff"), v(c.common, "onBackground", "#000")), c.mode === "dark" && (v(c.common, "background", "#000"), v(c.common, "onBackground", "#fff")), Bs(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      v(c.Alert, "errorColor", Z(c.error.light, 0.6)), v(c.Alert, "infoColor", Z(c.info.light, 0.6)), v(c.Alert, "successColor", Z(c.success.light, 0.6)), v(c.Alert, "warningColor", Z(c.warning.light, 0.6)), v(c.Alert, "errorFilledBg", C("palette-error-main")), v(c.Alert, "infoFilledBg", C("palette-info-main")), v(c.Alert, "successFilledBg", C("palette-success-main")), v(c.Alert, "warningFilledBg", C("palette-warning-main")), v(c.Alert, "errorFilledColor", Te(() => c.getContrastText(c.error.main))), v(c.Alert, "infoFilledColor", Te(() => c.getContrastText(c.info.main))), v(c.Alert, "successFilledColor", Te(() => c.getContrastText(c.success.main))), v(c.Alert, "warningFilledColor", Te(() => c.getContrastText(c.warning.main))), v(c.Alert, "errorStandardBg", ee(c.error.light, 0.9)), v(c.Alert, "infoStandardBg", ee(c.info.light, 0.9)), v(c.Alert, "successStandardBg", ee(c.success.light, 0.9)), v(c.Alert, "warningStandardBg", ee(c.warning.light, 0.9)), v(c.Alert, "errorIconColor", C("palette-error-main")), v(c.Alert, "infoIconColor", C("palette-info-main")), v(c.Alert, "successIconColor", C("palette-success-main")), v(c.Alert, "warningIconColor", C("palette-warning-main")), v(c.AppBar, "defaultBg", C("palette-grey-100")), v(c.Avatar, "defaultBg", C("palette-grey-400")), v(c.Button, "inheritContainedBg", C("palette-grey-300")), v(c.Button, "inheritContainedHoverBg", C("palette-grey-A100")), v(c.Chip, "defaultBorder", C("palette-grey-400")), v(c.Chip, "defaultAvatarColor", C("palette-grey-700")), v(c.Chip, "defaultIconColor", C("palette-grey-700")), v(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(c.LinearProgress, "primaryBg", ee(c.primary.main, 0.62)), v(c.LinearProgress, "secondaryBg", ee(c.secondary.main, 0.62)), v(c.LinearProgress, "errorBg", ee(c.error.main, 0.62)), v(c.LinearProgress, "infoBg", ee(c.info.main, 0.62)), v(c.LinearProgress, "successBg", ee(c.success.main, 0.62)), v(c.LinearProgress, "warningBg", ee(c.warning.main, 0.62)), v(c.Skeleton, "bg", `rgba(${C("palette-text-primaryChannel")} / 0.11)`), v(c.Slider, "primaryTrack", ee(c.primary.main, 0.62)), v(c.Slider, "secondaryTrack", ee(c.secondary.main, 0.62)), v(c.Slider, "errorTrack", ee(c.error.main, 0.62)), v(c.Slider, "infoTrack", ee(c.info.main, 0.62)), v(c.Slider, "successTrack", ee(c.success.main, 0.62)), v(c.Slider, "warningTrack", ee(c.warning.main, 0.62));
      const P = Nt(c.background.default, 0.8);
      v(c.SnackbarContent, "bg", P), v(c.SnackbarContent, "color", Te(() => c.getContrastText(P))), v(c.SpeedDialAction, "fabHoverBg", Nt(c.background.paper, 0.15)), v(c.StepConnector, "border", C("palette-grey-400")), v(c.StepContent, "border", C("palette-grey-400")), v(c.Switch, "defaultColor", C("palette-common-white")), v(c.Switch, "defaultDisabledColor", C("palette-grey-100")), v(c.Switch, "primaryDisabledColor", ee(c.primary.main, 0.62)), v(c.Switch, "secondaryDisabledColor", ee(c.secondary.main, 0.62)), v(c.Switch, "errorDisabledColor", ee(c.error.main, 0.62)), v(c.Switch, "infoDisabledColor", ee(c.info.main, 0.62)), v(c.Switch, "successDisabledColor", ee(c.success.main, 0.62)), v(c.Switch, "warningDisabledColor", ee(c.warning.main, 0.62)), v(c.TableCell, "border", ee(Rt(c.divider, 1), 0.88)), v(c.Tooltip, "bg", Rt(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      v(c.Alert, "errorColor", ee(c.error.light, 0.6)), v(c.Alert, "infoColor", ee(c.info.light, 0.6)), v(c.Alert, "successColor", ee(c.success.light, 0.6)), v(c.Alert, "warningColor", ee(c.warning.light, 0.6)), v(c.Alert, "errorFilledBg", C("palette-error-dark")), v(c.Alert, "infoFilledBg", C("palette-info-dark")), v(c.Alert, "successFilledBg", C("palette-success-dark")), v(c.Alert, "warningFilledBg", C("palette-warning-dark")), v(c.Alert, "errorFilledColor", Te(() => c.getContrastText(c.error.dark))), v(c.Alert, "infoFilledColor", Te(() => c.getContrastText(c.info.dark))), v(c.Alert, "successFilledColor", Te(() => c.getContrastText(c.success.dark))), v(c.Alert, "warningFilledColor", Te(() => c.getContrastText(c.warning.dark))), v(c.Alert, "errorStandardBg", Z(c.error.light, 0.9)), v(c.Alert, "infoStandardBg", Z(c.info.light, 0.9)), v(c.Alert, "successStandardBg", Z(c.success.light, 0.9)), v(c.Alert, "warningStandardBg", Z(c.warning.light, 0.9)), v(c.Alert, "errorIconColor", C("palette-error-main")), v(c.Alert, "infoIconColor", C("palette-info-main")), v(c.Alert, "successIconColor", C("palette-success-main")), v(c.Alert, "warningIconColor", C("palette-warning-main")), v(c.AppBar, "defaultBg", C("palette-grey-900")), v(c.AppBar, "darkBg", C("palette-background-paper")), v(c.AppBar, "darkColor", C("palette-text-primary")), v(c.Avatar, "defaultBg", C("palette-grey-600")), v(c.Button, "inheritContainedBg", C("palette-grey-800")), v(c.Button, "inheritContainedHoverBg", C("palette-grey-700")), v(c.Chip, "defaultBorder", C("palette-grey-700")), v(c.Chip, "defaultAvatarColor", C("palette-grey-300")), v(c.Chip, "defaultIconColor", C("palette-grey-300")), v(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(c.LinearProgress, "primaryBg", Z(c.primary.main, 0.5)), v(c.LinearProgress, "secondaryBg", Z(c.secondary.main, 0.5)), v(c.LinearProgress, "errorBg", Z(c.error.main, 0.5)), v(c.LinearProgress, "infoBg", Z(c.info.main, 0.5)), v(c.LinearProgress, "successBg", Z(c.success.main, 0.5)), v(c.LinearProgress, "warningBg", Z(c.warning.main, 0.5)), v(c.Skeleton, "bg", `rgba(${C("palette-text-primaryChannel")} / 0.13)`), v(c.Slider, "primaryTrack", Z(c.primary.main, 0.5)), v(c.Slider, "secondaryTrack", Z(c.secondary.main, 0.5)), v(c.Slider, "errorTrack", Z(c.error.main, 0.5)), v(c.Slider, "infoTrack", Z(c.info.main, 0.5)), v(c.Slider, "successTrack", Z(c.success.main, 0.5)), v(c.Slider, "warningTrack", Z(c.warning.main, 0.5));
      const P = Nt(c.background.default, 0.98);
      v(c.SnackbarContent, "bg", P), v(c.SnackbarContent, "color", Te(() => c.getContrastText(P))), v(c.SpeedDialAction, "fabHoverBg", Nt(c.background.paper, 0.15)), v(c.StepConnector, "border", C("palette-grey-600")), v(c.StepContent, "border", C("palette-grey-600")), v(c.Switch, "defaultColor", C("palette-grey-300")), v(c.Switch, "defaultDisabledColor", C("palette-grey-600")), v(c.Switch, "primaryDisabledColor", Z(c.primary.main, 0.55)), v(c.Switch, "secondaryDisabledColor", Z(c.secondary.main, 0.55)), v(c.Switch, "errorDisabledColor", Z(c.error.main, 0.55)), v(c.Switch, "infoDisabledColor", Z(c.info.main, 0.55)), v(c.Switch, "successDisabledColor", Z(c.success.main, 0.55)), v(c.Switch, "warningDisabledColor", Z(c.warning.main, 0.55)), v(c.TableCell, "border", Z(Rt(c.divider, 1), 0.68)), v(c.Tooltip, "bg", Rt(c.grey[700], 0.92));
    }
    _e(c.background, "default"), _e(c.background, "paper"), _e(c.common, "background"), _e(c.common, "onBackground"), _e(c, "divider"), Object.keys(c).forEach((P) => {
      const A = c[P];
      P !== "tonalOffset" && A && typeof A == "object" && (A.main && v(c[P], "mainChannel", ct(ut(A.main))), A.light && v(c[P], "lightChannel", ct(ut(A.light))), A.dark && v(c[P], "darkChannel", ct(ut(A.dark))), A.contrastText && v(c[P], "contrastTextChannel", ct(ut(A.contrastText))), P === "text" && (_e(c[P], "primary"), _e(c[P], "secondary")), P === "action" && (A.active && _e(c[P], "active"), A.selected && _e(c[P], "selected")));
    });
  }), E = t.reduce((L, c) => ye(L, c), E);
  const g = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: js(E)
  }, {
    vars: N,
    generateThemeVars: W,
    generateStyleSheets: F
  } = cs(E, g);
  return E.vars = N, Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([L, c]) => {
    E[L] = c;
  }), E.generateThemeVars = W, E.generateStyleSheets = F, E.generateSpacing = function() {
    return io(f.spacing, Mr(this));
  }, E.getColorSchemeSelector = us(s), E.spacing = E.generateSpacing(), E.shouldSkipGeneratingVar = a, E.unstable_sxConfig = {
    ...vt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, E.unstable_sx = function(c) {
    return Fe({
      sx: c,
      theme: this
    });
  }, E.toRuntimeSource = bo, E;
}
function kn(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Lr({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function wo(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, s = i || "light", u = o == null ? void 0 : o[s], f = {
    ...o,
    ...r ? {
      [s]: {
        ...typeof u != "boolean" && u,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Sr(e, ...t);
    let d = r;
    "palette" in e || f[s] && (f[s] !== !0 ? d = f[s].palette : s === "dark" && (d = {
      mode: "dark"
    }));
    const p = Sr({
      ...e,
      palette: d
    }, ...t);
    return p.defaultColorScheme = s, p.colorSchemes = f, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: p.palette
    }, kn(p, "dark", f.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: p.palette
    }, kn(p, "light", f.light)), p;
  }
  return !r && !("light" in f) && s === "light" && (f.light = !0), Fs({
    ...a,
    colorSchemes: f,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Ls = wo();
function Ws(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const So = (e) => Ws(e) && e !== "classes", xe = Ya({
  themeId: mo,
  defaultTheme: Ls,
  rootShouldForwardProp: So
}), Us = rt("MuiBox", ["root"]), Ys = wo(), Ze = Va({
  themeId: mo,
  defaultTheme: Ys,
  defaultClassName: Us.root,
  generateClassName: so.generate
});
process.env.NODE_ENV !== "production" && (Ze.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: m.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object])
});
function fe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Gs = typeof Symbol == "function" && Symbol.observable || "@@observable", An = Gs, br = () => Math.random().toString(36).substring(7).split("").join("."), qs = {
  INIT: `@@redux/INIT${/* @__PURE__ */ br()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ br()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${br()}`
}, ze = qs;
function Et(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Ks(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (Js(e))
    return "date";
  if (Xs(e))
    return "error";
  const r = Hs(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Hs(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Xs(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Js(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function ke(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Ks(e)), t;
}
function xo(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? fe(2) : `Expected the root reducer to be a function. Instead, received: '${ke(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? fe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? fe(1) : `Expected the enhancer to be a function. Instead, received: '${ke(r)}'`);
    return r(xo)(e, t);
  }
  let n = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, u = !1;
  function f() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((x, T) => {
      a.set(T, x);
    }));
  }
  function d() {
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? fe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function p(x) {
    if (typeof x != "function")
      throw new Error(process.env.NODE_ENV === "production" ? fe(4) : `Expected the listener to be a function. Instead, received: '${ke(x)}'`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? fe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let T = !0;
    f();
    const $ = s++;
    return a.set($, x), function() {
      if (T) {
        if (u)
          throw new Error(process.env.NODE_ENV === "production" ? fe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        T = !1, f(), a.delete($), i = null;
      }
    };
  }
  function y(x) {
    if (!Et(x))
      throw new Error(process.env.NODE_ENV === "production" ? fe(7) : `Actions must be plain objects. Instead, the actual type was: '${ke(x)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof x.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? fe(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof x.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? fe(17) : `Action "type" property must be a string. Instead, the actual type was: '${ke(x.type)}'. Value was: '${x.type}' (stringified)`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? fe(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, o = n(o, x);
    } finally {
      u = !1;
    }
    return (i = a).forEach(($) => {
      $();
    }), x;
  }
  function b(x) {
    if (typeof x != "function")
      throw new Error(process.env.NODE_ENV === "production" ? fe(10) : `Expected the nextReducer to be a function. Instead, received: '${ke(x)}`);
    n = x, y({
      type: ze.REPLACE
    });
  }
  function w() {
    const x = p;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(T) {
        if (typeof T != "object" || T === null)
          throw new Error(process.env.NODE_ENV === "production" ? fe(11) : `Expected the observer to be an object. Instead, received: '${ke(T)}'`);
        function $() {
          const E = T;
          E.next && E.next(d());
        }
        return $(), {
          unsubscribe: x($)
        };
      },
      [An]() {
        return this;
      }
    };
  }
  return y({
    type: ze.INIT
  }), {
    dispatch: y,
    subscribe: p,
    getState: d,
    replaceReducer: b,
    [An]: w
  };
}
function In(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Qs(e, t, r, n) {
  const o = Object.keys(t), i = r && r.type === ze.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Et(e))
    return `The ${i} has unexpected type of "${ke(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const a = Object.keys(e).filter((s) => !t.hasOwnProperty(s) && !n[s]);
  if (a.forEach((s) => {
    n[s] = !0;
  }), !(r && r.type === ze.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${i}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function Zs(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: ze.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? fe(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: ze.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? fe(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${ze.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function ec(e) {
  const t = Object.keys(e), r = {};
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    process.env.NODE_ENV !== "production" && typeof e[s] > "u" && In(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (r[s] = e[s]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let i;
  try {
    Zs(r);
  } catch (a) {
    i = a;
  }
  return function(s = {}, u) {
    if (i)
      throw i;
    if (process.env.NODE_ENV !== "production") {
      const p = Qs(s, r, u, o);
      p && In(p);
    }
    let f = !1;
    const d = {};
    for (let p = 0; p < n.length; p++) {
      const y = n[p], b = r[y], w = s[y], l = b(w, u);
      if (typeof l > "u") {
        const x = u && u.type;
        throw new Error(process.env.NODE_ENV === "production" ? fe(14) : `When called with an action of type ${x ? `"${String(x)}"` : "(unknown type)"}, the slice reducer for key "${y}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      d[y] = l, f = f || l !== w;
    }
    return f = f || n.length !== Object.keys(s).length, f ? d : s;
  };
}
function Ft(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function tc(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? fe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (u, ...f) => i(u, ...f)
    }, s = e.map((u) => u(a));
    return i = Ft(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function To(e) {
  return Et(e) && "type" in e && typeof e.type == "string";
}
var Co = Symbol.for("immer-nothing"), Dn = Symbol.for("immer-draftable"), ge = Symbol.for("immer-state"), rc = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function he(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = rc[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var et = Object.getPrototypeOf;
function Le(e) {
  return !!e && !!e[ge];
}
function Ne(e) {
  var t;
  return e ? _o(e) || Array.isArray(e) || !!e[Dn] || !!((t = e.constructor) != null && t[Dn]) || or(e) || ir(e) : !1;
}
var nc = Object.prototype.constructor.toString();
function _o(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = et(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === nc;
}
function Lt(e, t) {
  nr(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function nr(e) {
  const t = e[ge];
  return t ? t.type_ : Array.isArray(e) ? 1 : or(e) ? 2 : ir(e) ? 3 : 0;
}
function xr(e, t) {
  return nr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Oo(e, t, r) {
  const n = nr(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function oc(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function or(e) {
  return e instanceof Map;
}
function ir(e) {
  return e instanceof Set;
}
function Be(e) {
  return e.copy_ || e.base_;
}
function Tr(e, t) {
  if (or(e))
    return new Map(e);
  if (ir(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = _o(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[ge];
    let o = Reflect.ownKeys(n);
    for (let i = 0; i < o.length; i++) {
      const a = o[i], s = n[a];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: e[a]
      });
    }
    return Object.create(et(e), n);
  } else {
    const n = et(e);
    if (n !== null && r)
      return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function Wr(e, t = !1) {
  return ar(e) || Le(e) || !Ne(e) || (nr(e) > 1 && (e.set = e.add = e.clear = e.delete = ic), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => Wr(n, !0))), e;
}
function ic() {
  he(2);
}
function ar(e) {
  return Object.isFrozen(e);
}
var ac = {};
function We(e) {
  const t = ac[e];
  return t || he(0, e), t;
}
var ht;
function Ro() {
  return ht;
}
function sc(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Mn(e, t) {
  t && (We("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Cr(e) {
  _r(e), e.drafts_.forEach(cc), e.drafts_ = null;
}
function _r(e) {
  e === ht && (ht = e.parent_);
}
function jn(e) {
  return ht = sc(ht, e);
}
function cc(e) {
  const t = e[ge];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Bn(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[ge].modified_ && (Cr(t), he(4)), Ne(e) && (e = Wt(t, e), t.parent_ || Ut(t, e)), t.patches_ && We("Patches").generateReplacementPatches_(
    r[ge].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Wt(t, r, []), Cr(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Co ? e : void 0;
}
function Wt(e, t, r) {
  if (ar(t))
    return t;
  const n = t[ge];
  if (!n)
    return Lt(
      t,
      (o, i) => Vn(e, n, t, o, i, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return Ut(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let i = o, a = !1;
    n.type_ === 3 && (i = new Set(o), o.clear(), a = !0), Lt(
      i,
      (s, u) => Vn(e, n, o, s, u, r, a)
    ), Ut(e, o, !1), r && e.patches_ && We("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function Vn(e, t, r, n, o, i, a) {
  if (process.env.NODE_ENV !== "production" && o === r && he(5), Le(o)) {
    const s = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !xr(t.assigned_, n) ? i.concat(n) : void 0, u = Wt(e, o, s);
    if (Oo(r, n, u), Le(u))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else a && r.add(o);
  if (Ne(o) && !ar(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Wt(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && Ut(e, o);
  }
}
function Ut(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Wr(t, r);
}
function uc(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Ro(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = n, i = Ur;
  r && (o = [n], i = mt);
  const { revoke: a, proxy: s } = Proxy.revocable(o, i);
  return n.draft_ = s, n.revoke_ = a, s;
}
var Ur = {
  get(e, t) {
    if (t === ge)
      return e;
    const r = Be(e);
    if (!xr(r, t))
      return lc(e, r, t);
    const n = r[t];
    return e.finalized_ || !Ne(n) ? n : n === vr(e.base_, t) ? (Er(e), e.copy_[t] = Rr(n, e)) : n;
  },
  has(e, t) {
    return t in Be(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Be(e));
  },
  set(e, t, r) {
    const n = No(Be(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = vr(Be(e), t), i = o == null ? void 0 : o[ge];
      if (i && i.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (oc(r, o) && (r !== void 0 || xr(e.base_, t)))
        return !0;
      Er(e), Or(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return vr(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Er(e), Or(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Be(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    he(11);
  },
  getPrototypeOf(e) {
    return et(e.base_);
  },
  setPrototypeOf() {
    he(12);
  }
}, mt = {};
Lt(Ur, (e, t) => {
  mt[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
mt.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && he(13), mt.set.call(this, e, t, void 0);
};
mt.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && he(14), Ur.set.call(this, e[0], t, r, e[0]);
};
function vr(e, t) {
  const r = e[ge];
  return (r ? Be(r) : e)[t];
}
function lc(e, t, r) {
  var o;
  const n = No(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function No(e, t) {
  if (!(t in e))
    return;
  let r = et(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = et(r);
  }
}
function Or(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Or(e.parent_));
}
function Er(e) {
  e.copy_ || (e.copy_ = Tr(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var fc = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const i = r;
        r = t;
        const a = this;
        return function(u = i, ...f) {
          return a.produce(u, (d) => r.call(this, d, ...f));
        };
      }
      typeof r != "function" && he(6), n !== void 0 && typeof n != "function" && he(7);
      let o;
      if (Ne(t)) {
        const i = jn(this), a = Rr(t, void 0);
        let s = !0;
        try {
          o = r(a), s = !1;
        } finally {
          s ? Cr(i) : _r(i);
        }
        return Mn(i, n), Bn(o, i);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === Co && (o = void 0), this.autoFreeze_ && Wr(o, !0), n) {
          const i = [], a = [];
          We("Patches").generateReplacementPatches_(t, o, i, a), n(i, a);
        }
        return o;
      } else
        he(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (a, ...s) => this.produceWithPatches(a, (u) => t(u, ...s));
      let n, o;
      return [this.produce(t, r, (a, s) => {
        n = a, o = s;
      }), n, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Ne(e) || he(8), Le(e) && (e = dc(e));
    const t = jn(this), r = Rr(e, void 0);
    return r[ge].isManual_ = !0, _r(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[ge];
    (!r || !r.isManual_) && he(9);
    const { scope_: n } = r;
    return Mn(n, t), Bn(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const o = t[r];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = We("Patches").applyPatches_;
    return Le(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function Rr(e, t) {
  const r = or(e) ? We("MapSet").proxyMap_(e, t) : ir(e) ? We("MapSet").proxySet_(e, t) : uc(e, t);
  return (t ? t.scope_ : Ro()).drafts_.push(r), r;
}
function dc(e) {
  return Le(e) || he(10, e), Po(e);
}
function Po(e) {
  if (!Ne(e) || ar(e))
    return e;
  const t = e[ge];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Tr(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Tr(e, !0);
  return Lt(r, (n, o) => {
    Oo(r, n, Po(o));
  }), t && (t.finalized_ = !1), r;
}
var be = new fc(), $o = be.produce;
be.produceWithPatches.bind(
  be
);
be.setAutoFreeze.bind(be);
be.setUseStrictShallowCopy.bind(be);
be.applyPatches.bind(be);
be.createDraft.bind(be);
be.finishDraft.bind(be);
function ko(e) {
  return ({ dispatch: r, getState: n }) => (o) => (i) => typeof i == "function" ? i(r, n, e) : o(i);
}
var pc = ko(), hc = ko, mc = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ft : Ft.apply(null, arguments);
}, yc = (e) => e && typeof e.match == "function";
function zn(e, t) {
  function r(...n) {
    if (t) {
      let o = t(...n);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? te(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => To(n) && n.type === e, r;
}
function gc(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  yc(e);
}
function bc(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function vc(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = gc
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(bc(n.type)), r(n));
}
function Ao(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const o = Date.now();
      try {
        return n();
      } finally {
        const i = Date.now();
        r += i - o;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Io = class lt extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, lt.prototype);
  }
  static get [Symbol.species]() {
    return lt;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new lt(...t[0].concat(this)) : new lt(...t.concat(this));
  }
};
function Fn(e) {
  return Ne(e) ? $o(e, () => {
  }) : e;
}
function Pt(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function Ec(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function wc(e, t, r) {
  const n = Do(e, t, r);
  return {
    detectMutations() {
      return Mo(e, t, n, r);
    }
  };
}
function Do(e, t = [], r, n = "", o = /* @__PURE__ */ new Set()) {
  const i = {
    value: r
  };
  if (!e(r) && !o.has(r)) {
    o.add(r), i.children = {};
    for (const a in r) {
      const s = n ? n + "." + a : a;
      t.length && t.indexOf(s) !== -1 || (i.children[a] = Do(e, t, r[a], s));
    }
  }
  return i;
}
function Mo(e, t = [], r, n, o = !1, i = "") {
  const a = r ? r.value : void 0, s = a === n;
  if (o && !s && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: i
    };
  if (e(a) || e(n))
    return {
      wasMutated: !1
    };
  const u = {};
  for (let d in r.children)
    u[d] = !0;
  for (let d in n)
    u[d] = !0;
  const f = t.length > 0;
  for (let d in u) {
    const p = i ? i + "." + d : d;
    if (f && t.some((w) => w instanceof RegExp ? w.test(p) : p === w))
      continue;
    const y = Mo(e, t, r.children[d], n[d], s, p);
    if (y.wasMutated)
      return y;
  }
  return {
    wasMutated: !1
  };
}
function Sc(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(s, u, f, d) {
      return JSON.stringify(s, r(u, d), f);
    }, r = function(s, u) {
      let f = [], d = [];
      return u || (u = function(p, y) {
        return f[0] === y ? "[Circular ~]" : "[Circular ~." + d.slice(0, f.indexOf(y)).join(".") + "]";
      }), function(p, y) {
        if (f.length > 0) {
          var b = f.indexOf(this);
          ~b ? f.splice(b + 1) : f.push(this), ~b ? d.splice(b, 1 / 0, p) : d.push(p), ~f.indexOf(y) && (y = u.call(this, p, y));
        } else f.push(y);
        return s == null ? y : s.call(this, p, y);
      };
    }, {
      isImmutable: n = Ec,
      ignoredPaths: o,
      warnAfter: i = 32
    } = e;
    const a = wc.bind(null, n, o);
    return ({
      getState: s
    }) => {
      let u = s(), f = a(u), d;
      return (p) => (y) => {
        const b = Ao(i, "ImmutableStateInvariantMiddleware");
        b.measureTime(() => {
          if (u = s(), d = f.detectMutations(), f = a(u), d.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? te(19) : `A state mutation was detected between dispatches, in the path '${d.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const w = p(y);
        return b.measureTime(() => {
          if (u = s(), d = f.detectMutations(), f = a(u), d.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? te(20) : `A state mutation was detected inside a dispatch, in the path: ${d.path || ""}. Take a look at the reducer(s) handling the action ${t(y)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), b.warnIfExceeded(), w;
      };
    };
  }
}
function jo(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Et(e);
}
function Nr(e, t = "", r = jo, n, o = [], i) {
  let a;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || i != null && i.has(e)) return !1;
  const s = n != null ? n(e) : Object.entries(e), u = o.length > 0;
  for (const [f, d] of s) {
    const p = t ? t + "." + f : f;
    if (!(u && o.some((b) => b instanceof RegExp ? b.test(p) : p === b))) {
      if (!r(d))
        return {
          keyPath: p,
          value: d
        };
      if (typeof d == "object" && (a = Nr(d, p, r, n, o, i), a))
        return a;
    }
  }
  return i && Bo(e) && i.add(e), !1;
}
function Bo(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Bo(t))
      return !1;
  return !0;
}
function xc(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = jo,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: i = [],
      warnAfter: a = 32,
      ignoreState: s = !1,
      ignoreActions: u = !1,
      disableCache: f = !1
    } = e, d = !f && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (p) => (y) => (b) => {
      if (!To(b))
        return y(b);
      const w = y(b), l = Ao(a, "SerializableStateInvariantMiddleware");
      return !u && !(n.length && n.indexOf(b.type) !== -1) && l.measureTime(() => {
        const x = Nr(b, "", t, r, o, d);
        if (x) {
          const {
            keyPath: T,
            value: $
          } = x;
          console.error(`A non-serializable value was detected in an action, in the path: \`${T}\`. Value:`, $, `
Take a look at the logic that dispatched this action: `, b, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), s || (l.measureTime(() => {
        const x = p.getState(), T = Nr(x, "", t, r, i, d);
        if (T) {
          const {
            keyPath: $,
            value: O
          } = T;
          console.error(`A non-serializable value was detected in the state, in the path: \`${$}\`. Value:`, O, `
Take a look at the reducer(s) handling this action type: ${b.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), l.warnIfExceeded()), w;
    };
  }
}
function $t(e) {
  return typeof e == "boolean";
}
var Tc = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let a = new Io();
  if (r && ($t(r) ? a.push(pc) : a.push(hc(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let s = {};
      $t(n) || (s = n), a.unshift(Sc(s));
    }
    if (o) {
      let s = {};
      $t(o) || (s = o), a.push(xc(s));
    }
    if (i) {
      let s = {};
      $t(i) || (s = i), a.unshift(vc(s));
    }
  }
  return a;
}, Cc = "RTK_autoBatch", Ln = (e) => (t) => {
  setTimeout(t, e);
}, _c = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let o = !0, i = !1, a = !1;
  const s = /* @__PURE__ */ new Set(), u = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Ln(10)
  ) : e.type === "callback" ? e.queueNotification : Ln(e.timeout), f = () => {
    a = !1, i && (i = !1, s.forEach((d) => d()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(d) {
      const p = () => o && d(), y = n.subscribe(p);
      return s.add(d), () => {
        y(), s.delete(d);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(d) {
      var p;
      try {
        return o = !((p = d == null ? void 0 : d.meta) != null && p[Cc]), i = !o, i && (a || (a = !0, u(f))), n.dispatch(d);
      } finally {
        o = !0;
      }
    }
  });
}, Oc = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let o = new Io(e);
  return n && o.push(_c(typeof n == "object" ? n : void 0)), o;
};
function Rc(e) {
  const t = Tc(), {
    reducer: r = void 0,
    middleware: n,
    devTools: o = !0,
    duplicateMiddlewareCheck: i = !0,
    preloadedState: a = void 0,
    enhancers: s = void 0
  } = e || {};
  let u;
  if (typeof r == "function")
    u = r;
  else if (Et(r))
    u = ec(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? te(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? te(2) : "`middleware` field must be a callback");
  let f;
  if (typeof n == "function") {
    if (f = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(f))
      throw new Error(process.env.NODE_ENV === "production" ? te(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    f = t();
  if (process.env.NODE_ENV !== "production" && f.some((l) => typeof l != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? te(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && i) {
    let l = /* @__PURE__ */ new Set();
    f.forEach((x) => {
      if (l.has(x))
        throw new Error(process.env.NODE_ENV === "production" ? te(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      l.add(x);
    });
  }
  let d = Ft;
  o && (d = mc({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const p = tc(...f), y = Oc(p);
  if (process.env.NODE_ENV !== "production" && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? te(5) : "`enhancers` field must be a callback");
  let b = typeof s == "function" ? s(y) : y();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(b))
    throw new Error(process.env.NODE_ENV === "production" ? te(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && b.some((l) => typeof l != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? te(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && f.length && !b.includes(p) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const w = d(...b);
  return xo(u, a, w);
}
function Vo(e) {
  const t = {}, r = [];
  let n;
  const o = {
    addCase(i, a) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? te(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? te(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const s = typeof i == "string" ? i : i.type;
      if (!s)
        throw new Error(process.env.NODE_ENV === "production" ? te(28) : "`builder.addCase` cannot be called with an empty action type");
      if (s in t)
        throw new Error(process.env.NODE_ENV === "production" ? te(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${s}'`);
      return t[s] = a, o;
    },
    addMatcher(i, a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? te(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: i,
        reducer: a
      }), o;
    },
    addDefaultCase(i) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? te(31) : "`builder.addDefaultCase` can only be called once");
      return n = i, o;
    }
  };
  return e(o), [t, r, n];
}
function Nc(e) {
  return typeof e == "function";
}
function Pc(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? te(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = Vo(t), i;
  if (Nc(e))
    i = () => Fn(e());
  else {
    const s = Fn(e);
    i = () => s;
  }
  function a(s = i(), u) {
    let f = [r[u.type], ...n.filter(({
      matcher: d
    }) => d(u)).map(({
      reducer: d
    }) => d)];
    return f.filter((d) => !!d).length === 0 && (f = [o]), f.reduce((d, p) => {
      if (p)
        if (Le(d)) {
          const b = p(d, u);
          return b === void 0 ? d : b;
        } else {
          if (Ne(d))
            return $o(d, (y) => p(y, u));
          {
            const y = p(d, u);
            if (y === void 0) {
              if (d === null)
                return d;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return y;
          }
        }
      return d;
    }, s);
  }
  return a.getInitialState = i, a;
}
var $c = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function kc(e, t) {
  return `${e}/${t}`;
}
function Ac({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[$c];
  return function(o) {
    const {
      name: i,
      reducerPath: a = i
    } = o;
    if (!i)
      throw new Error(process.env.NODE_ENV === "production" ? te(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const s = (typeof o.reducers == "function" ? o.reducers(Mc()) : o.reducers) || {}, u = Object.keys(s), f = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, d = {
      addCase(E, g) {
        const N = typeof E == "string" ? E : E.type;
        if (!N)
          throw new Error(process.env.NODE_ENV === "production" ? te(12) : "`context.addCase` cannot be called with an empty action type");
        if (N in f.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? te(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + N);
        return f.sliceCaseReducersByType[N] = g, d;
      },
      addMatcher(E, g) {
        return f.sliceMatchers.push({
          matcher: E,
          reducer: g
        }), d;
      },
      exposeAction(E, g) {
        return f.actionCreators[E] = g, d;
      },
      exposeCaseReducer(E, g) {
        return f.sliceCaseReducersByName[E] = g, d;
      }
    };
    u.forEach((E) => {
      const g = s[E], N = {
        reducerName: E,
        type: kc(i, E),
        createNotation: typeof o.reducers == "function"
      };
      Bc(g) ? zc(N, g, d, t) : jc(N, g, d);
    });
    function p() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? te(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [E = {}, g = [], N = void 0] = typeof o.extraReducers == "function" ? Vo(o.extraReducers) : [o.extraReducers], W = {
        ...E,
        ...f.sliceCaseReducersByType
      };
      return Pc(o.initialState, (F) => {
        for (let L in W)
          F.addCase(L, W[L]);
        for (let L of f.sliceMatchers)
          F.addMatcher(L.matcher, L.reducer);
        for (let L of g)
          F.addMatcher(L.matcher, L.reducer);
        N && F.addDefaultCase(N);
      });
    }
    const y = (E) => E, b = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new WeakMap();
    let l;
    function x(E, g) {
      return l || (l = p()), l(E, g);
    }
    function T() {
      return l || (l = p()), l.getInitialState();
    }
    function $(E, g = !1) {
      function N(F) {
        let L = F[E];
        if (typeof L > "u") {
          if (g)
            L = Pt(w, N, T);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? te(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return L;
      }
      function W(F = y) {
        const L = Pt(b, g, () => /* @__PURE__ */ new WeakMap());
        return Pt(L, F, () => {
          const c = {};
          for (const [C, P] of Object.entries(o.selectors ?? {}))
            c[C] = Ic(P, F, () => Pt(w, F, T), g);
          return c;
        });
      }
      return {
        reducerPath: E,
        getSelectors: W,
        get selectors() {
          return W(N);
        },
        selectSlice: N
      };
    }
    const O = {
      name: i,
      reducer: x,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: T,
      ...$(a),
      injectInto(E, {
        reducerPath: g,
        ...N
      } = {}) {
        const W = g ?? a;
        return E.inject({
          reducerPath: W,
          reducer: x
        }, N), {
          ...O,
          ...$(W, !0)
        };
      }
    };
    return O;
  };
}
function Ic(e, t, r, n) {
  function o(i, ...a) {
    let s = t(i);
    if (typeof s > "u") {
      if (n)
        s = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? te(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(s, ...a);
  }
  return o.unwrapped = e, o;
}
var Dc = /* @__PURE__ */ Ac();
function Mc() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function jc({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let i, a;
  if ("reducer" in n) {
    if (r && !Vc(n))
      throw new Error(process.env.NODE_ENV === "production" ? te(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    i = n.reducer, a = n.prepare;
  } else
    i = n;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, a ? zn(e, a) : zn(e));
}
function Bc(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Vc(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function zc({
  type: e,
  reducerName: t
}, r, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? te(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: i,
    fulfilled: a,
    pending: s,
    rejected: u,
    settled: f,
    options: d
  } = r, p = o(e, i, d);
  n.exposeAction(t, p), a && n.addCase(p.fulfilled, a), s && n.addCase(p.pending, s), u && n.addCase(p.rejected, u), f && n.addMatcher(p.settled, f), n.exposeCaseReducer(t, {
    fulfilled: a || kt,
    pending: s || kt,
    rejected: u || kt,
    settled: f || kt
  });
}
function kt() {
}
function te(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const Fc = { value: 0 }, zo = Dc({
  name: "counter",
  initialState: Fc,
  reducers: {
    increment: (e) => {
      e.value += 1;
    },
    decrement: (e) => {
      e.value -= 1;
    },
    set: (e, t) => {
      e.value = t.payload;
    }
  }
}), { increment: Lc, decrement: Wc, set: el } = zo.actions, Uc = zo.reducer, Yc = Rc({
  reducer: {
    counter: Uc
  }
}), Fo = ri(void 0);
function Gc(e, t) {
  switch (t.type) {
    case "toggle":
      return { on: !e.on };
    default:
      return e;
  }
}
function qc({ children: e }) {
  const [t, r] = ni(Gc, { on: !1 });
  return /* @__PURE__ */ j.jsx(Fo.Provider, { value: { state: t, dispatch: r }, children: e });
}
function Kc() {
  const e = oi(Fo);
  if (!e) throw new Error("useToggle must be used within ToggleProvider");
  return e;
}
function Hc() {
  return ao;
}
const sr = os;
process.env.NODE_ENV !== "production" && (m.node, m.object.isRequired);
function wt(e) {
  return ns(e);
}
let Wn = 0;
function Xc(e) {
  const [t, r] = M.useState(e), n = e || t;
  return M.useEffect(() => {
    t == null && (Wn += 1, r(`mui-${Wn}`));
  }, [t]), n;
}
const Jc = {
  ...M
}, Un = Jc.useId;
function Qc(e) {
  if (Un !== void 0) {
    const t = Un();
    return e ?? t;
  }
  return Xc(e);
}
function Mt(e) {
  const t = M.useRef(e);
  return Xa(() => {
    t.current = e;
  }), M.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Yn(...e) {
  const t = M.useRef(void 0), r = M.useCallback((n) => {
    const o = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const a = i, s = a(n);
        return typeof s == "function" ? s : () => {
          a(null);
        };
      }
      return i.current = n, () => {
        i.current = null;
      };
    });
    return () => {
      o.forEach((i) => i == null ? void 0 : i());
    };
  }, e);
  return M.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
const Zc = m.oneOfType([m.func, m.object]);
function Lo(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function eu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function tu(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof i == "function" && !eu(i) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ru = Lo(m.elementType, tu);
function Gn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const qn = {};
function Wo(e, t) {
  const r = M.useRef(qn);
  return r.current === qn && (r.current = e(t)), r;
}
class Yt {
  constructor() {
    ot(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Yt();
  }
  static use() {
    const t = Wo(Yt.create).current, [r, n] = M.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, M.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = ou(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function nu() {
  return Yt.use();
}
function ou() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Pr() {
  return Pr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pr.apply(null, arguments);
}
function iu(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function $r(e, t) {
  return $r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, $r(e, t);
}
function au(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, $r(e, t);
}
const Kn = Xe.createContext(null);
function su(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yr(e, t) {
  var r = function(i) {
    return t && At(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ii.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function cu(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, s = {};
  for (var u in t) {
    if (n[u])
      for (a = 0; a < n[u].length; a++) {
        var f = n[u][a];
        s[n[u][a]] = r(f);
      }
    s[u] = r(u);
  }
  for (a = 0; a < o.length; a++)
    s[o[a]] = r(o[a]);
  return s;
}
function Ve(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function uu(e, t) {
  return Yr(e.children, function(r) {
    return It(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Ve(r, "appear", e),
      enter: Ve(r, "enter", e),
      exit: Ve(r, "exit", e)
    });
  });
}
function lu(e, t, r) {
  var n = Yr(e.children), o = cu(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (At(a)) {
      var s = i in t, u = i in n, f = t[i], d = At(f) && !f.props.in;
      u && (!s || d) ? o[i] = It(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Ve(a, "exit", e),
        enter: Ve(a, "enter", e)
      }) : !u && s && !d ? o[i] = It(a, {
        in: !1
      }) : u && s && At(f) && (o[i] = It(a, {
        onExited: r.bind(null, a),
        in: f.props.in,
        exit: Ve(a, "exit", e),
        enter: Ve(a, "enter", e)
      }));
    }
  }), o;
}
var fu = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, du = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Gr = /* @__PURE__ */ function(e) {
  au(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(su(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, s = i.handleExited, u = i.firstRender;
    return {
      children: u ? uu(o, s) : lu(o, a, s),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = Yr(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var u = Pr({}, s.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = iu(o, ["component", "childFactory"]), u = this.state.contextValue, f = fu(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ Xe.createElement(Kn.Provider, {
      value: u
    }, f) : /* @__PURE__ */ Xe.createElement(Kn.Provider, {
      value: u
    }, /* @__PURE__ */ Xe.createElement(i, s, f));
  }, t;
}(Xe.Component);
Gr.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: m.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: m.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: m.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: m.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: m.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: m.func
} : {};
Gr.defaultProps = du;
const pu = [];
function hu(e) {
  M.useEffect(e, pu);
}
class qr {
  constructor() {
    ot(this, "currentId", null);
    ot(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    ot(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new qr();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function mu() {
  const e = Wo(qr.create).current;
  return hu(e.disposeEffect), e;
}
function Uo(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: u,
    timeout: f
  } = e, [d, p] = M.useState(!1), y = pe(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), b = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, w = pe(r.child, d && r.childLeaving, n && r.childPulsate);
  return !s && !d && p(!0), M.useEffect(() => {
    if (!s && u != null) {
      const l = setTimeout(u, f);
      return () => {
        clearTimeout(l);
      };
    }
  }, [u, s, f]), /* @__PURE__ */ j.jsx("span", {
    className: y,
    style: b,
    children: /* @__PURE__ */ j.jsx("span", {
      className: w
    })
  });
}
process.env.NODE_ENV !== "production" && (Uo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object.isRequired,
  className: m.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: m.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: m.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: m.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: m.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: m.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: m.number,
  /**
   * exit delay
   */
  timeout: m.number.isRequired
});
const Ee = rt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), kr = 550, yu = 80, gu = yt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, bu = yt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, vu = yt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Eu = xe("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), wu = xe(Uo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ee.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${gu};
    animation-duration: ${kr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Ee.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Ee.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ee.childLeaving} {
    opacity: 0;
    animation-name: ${bu};
    animation-duration: ${kr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Ee.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${vu};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Yo = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = wt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...s
  } = n, [u, f] = M.useState([]), d = M.useRef(0), p = M.useRef(null);
  M.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [u]);
  const y = M.useRef(!1), b = mu(), w = M.useRef(null), l = M.useRef(null), x = M.useCallback((E) => {
    const {
      pulsate: g,
      rippleX: N,
      rippleY: W,
      rippleSize: F,
      cb: L
    } = E;
    f((c) => [...c, /* @__PURE__ */ j.jsx(wu, {
      classes: {
        ripple: pe(i.ripple, Ee.ripple),
        rippleVisible: pe(i.rippleVisible, Ee.rippleVisible),
        ripplePulsate: pe(i.ripplePulsate, Ee.ripplePulsate),
        child: pe(i.child, Ee.child),
        childLeaving: pe(i.childLeaving, Ee.childLeaving),
        childPulsate: pe(i.childPulsate, Ee.childPulsate)
      },
      timeout: kr,
      pulsate: g,
      rippleX: N,
      rippleY: W,
      rippleSize: F
    }, d.current)]), d.current += 1, p.current = L;
  }, [i]), T = M.useCallback((E = {}, g = {}, N = () => {
  }) => {
    const {
      pulsate: W = !1,
      center: F = o || g.pulsate,
      fakeElement: L = !1
      // For test purposes
    } = g;
    if ((E == null ? void 0 : E.type) === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (y.current = !0);
    const c = L ? null : l.current, C = c ? c.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let P, A, q;
    if (F || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      P = Math.round(C.width / 2), A = Math.round(C.height / 2);
    else {
      const {
        clientX: re,
        clientY: X
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      P = Math.round(re - C.left), A = Math.round(X - C.top);
    }
    if (F)
      q = Math.sqrt((2 * C.width ** 2 + C.height ** 2) / 3), q % 2 === 0 && (q += 1);
    else {
      const re = Math.max(Math.abs((c ? c.clientWidth : 0) - P), P) * 2 + 2, X = Math.max(Math.abs((c ? c.clientHeight : 0) - A), A) * 2 + 2;
      q = Math.sqrt(re ** 2 + X ** 2);
    }
    E != null && E.touches ? w.current === null && (w.current = () => {
      x({
        pulsate: W,
        rippleX: P,
        rippleY: A,
        rippleSize: q,
        cb: N
      });
    }, b.start(yu, () => {
      w.current && (w.current(), w.current = null);
    })) : x({
      pulsate: W,
      rippleX: P,
      rippleY: A,
      rippleSize: q,
      cb: N
    });
  }, [o, x, b]), $ = M.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), O = M.useCallback((E, g) => {
    if (b.clear(), (E == null ? void 0 : E.type) === "touchend" && w.current) {
      w.current(), w.current = null, b.start(0, () => {
        O(E, g);
      });
      return;
    }
    w.current = null, f((N) => N.length > 0 ? N.slice(1) : N), p.current = g;
  }, [b]);
  return M.useImperativeHandle(r, () => ({
    pulsate: $,
    start: T,
    stop: O
  }), [$, T, O]), /* @__PURE__ */ j.jsx(Eu, {
    className: pe(Ee.root, i.root, a),
    ref: l,
    ...s,
    children: /* @__PURE__ */ j.jsx(Gr, {
      component: null,
      exit: !0,
      children: u
    })
  });
});
process.env.NODE_ENV !== "production" && (Yo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: m.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string
});
function Su(e) {
  return tt("MuiButtonBase", e);
}
const xu = rt("MuiButtonBase", ["root", "disabled", "focusVisible"]), Tu = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = rr({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Su, o);
  return r && n && (a.root += ` ${n}`), a;
}, Cu = xe("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${xu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Go = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = wt({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: u = "button",
    disabled: f = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: y = !1,
    focusVisibleClassName: b,
    LinkComponent: w = "a",
    onBlur: l,
    onClick: x,
    onContextMenu: T,
    onDragLeave: $,
    onFocus: O,
    onFocusVisible: E,
    onKeyDown: g,
    onKeyUp: N,
    onMouseDown: W,
    onMouseLeave: F,
    onMouseUp: L,
    onTouchEnd: c,
    onTouchMove: C,
    onTouchStart: P,
    tabIndex: A = 0,
    TouchRippleProps: q,
    touchRippleRef: re,
    type: X,
    ...ie
  } = n, de = M.useRef(null), ne = nu(), h = Yn(ne.ref, re), [S, R] = M.useState(!1);
  f && S && R(!1), M.useImperativeHandle(o, () => ({
    focusVisible: () => {
      R(!0), de.current.focus();
    }
  }), []);
  const k = ne.shouldMount && !d && !f;
  M.useEffect(() => {
    S && y && !d && ne.pulsate();
  }, [d, y, S, ne]);
  const I = Oe(ne, "start", W, p), B = Oe(ne, "stop", T, p), V = Oe(ne, "stop", $, p), z = Oe(ne, "stop", L, p), D = Oe(ne, "stop", (U) => {
    S && U.preventDefault(), F && F(U);
  }, p), Y = Oe(ne, "start", P, p), G = Oe(ne, "stop", c, p), le = Oe(ne, "stop", C, p), _ = Oe(ne, "stop", (U) => {
    Gn(U.target) || R(!1), l && l(U);
  }, !1), ve = Mt((U) => {
    de.current || (de.current = U.currentTarget), Gn(U.target) && (R(!0), E && E(U)), O && O(U);
  }), Pe = () => {
    const U = de.current;
    return u && u !== "button" && !(U.tagName === "A" && U.href);
  }, St = Mt((U) => {
    y && !U.repeat && S && U.key === " " && ne.stop(U, () => {
      ne.start(U);
    }), U.target === U.currentTarget && Pe() && U.key === " " && U.preventDefault(), g && g(U), U.target === U.currentTarget && Pe() && U.key === "Enter" && !f && (U.preventDefault(), x && x(U));
  }), Jo = Mt((U) => {
    y && U.key === " " && S && !U.defaultPrevented && ne.stop(U, () => {
      ne.pulsate(U);
    }), N && N(U), x && U.target === U.currentTarget && Pe() && U.key === " " && !U.defaultPrevented && x(U);
  });
  let xt = u;
  xt === "button" && (ie.href || ie.to) && (xt = w);
  const nt = {};
  xt === "button" ? (nt.type = X === void 0 ? "button" : X, nt.disabled = f) : (!ie.href && !ie.to && (nt.role = "button"), f && (nt["aria-disabled"] = f));
  const Qo = Yn(r, de), Hr = {
    ...n,
    centerRipple: i,
    component: u,
    disabled: f,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: y,
    tabIndex: A,
    focusVisible: S
  }, Zo = Tu(Hr);
  return /* @__PURE__ */ j.jsxs(Cu, {
    as: xt,
    className: pe(Zo.root, s),
    ownerState: Hr,
    onBlur: _,
    onClick: x,
    onContextMenu: B,
    onFocus: ve,
    onKeyDown: St,
    onKeyUp: Jo,
    onMouseDown: I,
    onMouseLeave: D,
    onMouseUp: z,
    onDragLeave: V,
    onTouchEnd: G,
    onTouchMove: le,
    onTouchStart: Y,
    ref: Qo,
    tabIndex: f ? -1 : A,
    type: X,
    ...nt,
    ...ie,
    children: [a, k ? /* @__PURE__ */ j.jsx(Yo, {
      ref: h,
      center: i,
      ...q
    }) : null]
  });
});
function Oe(e, t, r, n = !1) {
  return Mt((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (Go.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Zc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: m.bool,
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ru,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: m.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: m.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: m.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: m.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: m.string,
  /**
   * @ignore
   */
  href: m.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: m.elementType,
  /**
   * @ignore
   */
  onBlur: m.func,
  /**
   * @ignore
   */
  onClick: m.func,
  /**
   * @ignore
   */
  onContextMenu: m.func,
  /**
   * @ignore
   */
  onDragLeave: m.func,
  /**
   * @ignore
   */
  onFocus: m.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: m.func,
  /**
   * @ignore
   */
  onKeyDown: m.func,
  /**
   * @ignore
   */
  onKeyUp: m.func,
  /**
   * @ignore
   */
  onMouseDown: m.func,
  /**
   * @ignore
   */
  onMouseLeave: m.func,
  /**
   * @ignore
   */
  onMouseUp: m.func,
  /**
   * @ignore
   */
  onTouchEnd: m.func,
  /**
   * @ignore
   */
  onTouchMove: m.func,
  /**
   * @ignore
   */
  onTouchStart: m.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * @default 0
   */
  tabIndex: m.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: m.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: m.oneOfType([m.func, m.shape({
    current: m.shape({
      pulsate: m.func.isRequired,
      start: m.func.isRequired,
      stop: m.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: m.oneOfType([m.oneOf(["button", "reset", "submit"]), m.string])
});
function _u(e) {
  return typeof e.main == "string";
}
function Ou(e, t = []) {
  if (!_u(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Kr(e = []) {
  return ([, t]) => t && Ou(t, e);
}
function Ru(e) {
  return tt("MuiCircularProgress", e);
}
rt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const $e = 44, Ar = yt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Ir = yt`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, Nu = typeof Ar != "string" ? Qn`
        animation: ${Ar} 1.4s linear infinite;
      ` : null, Pu = typeof Ir != "string" ? Qn`
        animation: ${Ir} 1.4s ease-in-out infinite;
      ` : null, $u = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${ce(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ce(r)}`, o && "circleDisableShrink"]
  };
  return rr(i, Ru, t);
}, ku = xe("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${ce(r.color)}`]];
  }
})(sr(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: Nu || {
      animation: `${Ar} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Kr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Au = xe("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), Iu = xe("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${ce(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(sr(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: Pu || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Ir} 1.4s ease-in-out infinite`
    }
  }]
}))), qo = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = wt({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: a = !1,
    size: s = 40,
    style: u,
    thickness: f = 3.6,
    value: d = 0,
    variant: p = "indeterminate",
    ...y
  } = n, b = {
    ...n,
    color: i,
    disableShrink: a,
    size: s,
    thickness: f,
    value: d,
    variant: p
  }, w = $u(b), l = {}, x = {}, T = {};
  if (p === "determinate") {
    const $ = 2 * Math.PI * (($e - f) / 2);
    l.strokeDasharray = $.toFixed(3), T["aria-valuenow"] = Math.round(d), l.strokeDashoffset = `${((100 - d) / 100 * $).toFixed(3)}px`, x.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ j.jsx(ku, {
    className: pe(w.root, o),
    style: {
      width: s,
      height: s,
      ...x,
      ...u
    },
    ownerState: b,
    ref: r,
    role: "progressbar",
    ...T,
    ...y,
    children: /* @__PURE__ */ j.jsx(Au, {
      className: w.svg,
      ownerState: b,
      viewBox: `${$e / 2} ${$e / 2} ${$e} ${$e}`,
      children: /* @__PURE__ */ j.jsx(Iu, {
        className: w.circle,
        style: l,
        ownerState: b,
        cx: $e,
        cy: $e,
        r: ($e - f) / 2,
        fill: "none",
        strokeWidth: f
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (qo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: m.oneOfType([m.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), m.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Lo(m.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: m.oneOfType([m.number, m.string]),
  /**
   * @ignore
   */
  style: m.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: m.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: m.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: m.oneOf(["determinate", "indeterminate"])
});
function Du(e) {
  return tt("MuiButton", e);
}
const je = rt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Ko = /* @__PURE__ */ M.createContext({});
process.env.NODE_ENV !== "production" && (Ko.displayName = "ButtonGroupContext");
const Ho = /* @__PURE__ */ M.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ho.displayName = "ButtonGroupButtonContext");
const Mu = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    loading: a,
    loadingPosition: s,
    classes: u
  } = e, f = {
    root: ["root", a && "loading", i, `${i}${ce(t)}`, `size${ce(o)}`, `${i}Size${ce(o)}`, `color${ce(t)}`, r && "disableElevation", n && "fullWidth", a && `loadingPosition${ce(s)}`],
    startIcon: ["icon", "startIcon", `iconSize${ce(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${ce(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = rr(f, Du, u);
  return {
    ...u,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, Xo = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], ju = xe(Go, {
  shouldForwardProp: (e) => So(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${ce(r.color)}`], t[`size${ce(r.size)}`], t[`${r.variant}Size${ce(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(sr(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${je.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${je.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${je.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${je.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Kr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : He(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${je.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${je.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${je.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Bu = xe("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${ce(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...Xo]
})), Vu = xe("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${ce(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...Xo]
})), zu = xe("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), Hn = xe("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Je = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = M.useContext(Ko), o = M.useContext(Ho), i = zt(n, t), a = wt({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: u = "primary",
    component: f = "button",
    className: d,
    disabled: p = !1,
    disableElevation: y = !1,
    disableFocusRipple: b = !1,
    endIcon: w,
    focusVisibleClassName: l,
    fullWidth: x = !1,
    id: T,
    loading: $ = null,
    loadingIndicator: O,
    loadingPosition: E = "center",
    size: g = "medium",
    startIcon: N,
    type: W,
    variant: F = "text",
    ...L
  } = a, c = Qc(T), C = O ?? /* @__PURE__ */ j.jsx(qo, {
    "aria-labelledby": c,
    color: "inherit",
    size: 16
  }), P = {
    ...a,
    color: u,
    component: f,
    disabled: p,
    disableElevation: y,
    disableFocusRipple: b,
    fullWidth: x,
    loading: $,
    loadingIndicator: C,
    loadingPosition: E,
    size: g,
    type: W,
    variant: F
  }, A = Mu(P), q = (N || $ && E === "start") && /* @__PURE__ */ j.jsx(Bu, {
    className: A.startIcon,
    ownerState: P,
    children: N || /* @__PURE__ */ j.jsx(Hn, {
      className: A.loadingIconPlaceholder,
      ownerState: P
    })
  }), re = (w || $ && E === "end") && /* @__PURE__ */ j.jsx(Vu, {
    className: A.endIcon,
    ownerState: P,
    children: w || /* @__PURE__ */ j.jsx(Hn, {
      className: A.loadingIconPlaceholder,
      ownerState: P
    })
  }), X = o || "", ie = typeof $ == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ j.jsx("span", {
      className: A.loadingWrapper,
      style: {
        display: "contents"
      },
      children: $ && /* @__PURE__ */ j.jsx(zu, {
        className: A.loadingIndicator,
        ownerState: P,
        children: C
      })
    })
  ) : null;
  return /* @__PURE__ */ j.jsxs(ju, {
    ownerState: P,
    className: pe(n.className, A.root, d, X),
    component: f,
    disabled: p || $,
    focusRipple: !b,
    focusVisibleClassName: pe(A.focusVisible, l),
    ref: r,
    type: W,
    id: $ ? c : T,
    ...L,
    classes: A,
    children: [q, E !== "end" && ie, s, E === "end" && ie, re]
  });
});
process.env.NODE_ENV !== "production" && (Je.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: m.oneOfType([m.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), m.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: m.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: m.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: m.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: m.bool,
  /**
   * Element placed after the children.
   */
  endIcon: m.node,
  /**
   * @ignore
   */
  focusVisibleClassName: m.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: m.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: m.string,
  /**
   * @ignore
   */
  id: m.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: m.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: m.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: m.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: m.oneOfType([m.oneOf(["small", "medium", "large"]), m.string]),
  /**
   * Element placed before the children.
   */
  startIcon: m.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * @ignore
   */
  type: m.oneOfType([m.oneOf(["button", "reset", "submit"]), m.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: m.oneOfType([m.oneOf(["contained", "outlined", "text"]), m.string])
});
function Fu(e) {
  return tt("MuiTypography", e);
}
rt("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Lu = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Wu = Hc(), Uu = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, e.align !== "inherit" && `align${ce(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return rr(s, Fu, a);
}, Yu = xe("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${ce(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(sr(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([r, n]) => r !== "inherit" && n && typeof n == "object").map(([r, n]) => ({
      props: {
        variant: r
      },
      style: n
    })), ...Object.entries(e.palette).filter(Kr()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({
      props: {
        color: `text${ce(r)}`
      },
      style: {
        color: (e.vars || e).palette.text[r]
      }
    })), {
      props: ({
        ownerState: r
      }) => r.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), Xn = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, dt = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const {
    color: n,
    ...o
  } = wt({
    props: t,
    name: "MuiTypography"
  }), i = !Lu[n], a = Wu({
    ...o,
    ...i && {
      color: n
    }
  }), {
    align: s = "inherit",
    className: u,
    component: f,
    gutterBottom: d = !1,
    noWrap: p = !1,
    paragraph: y = !1,
    variant: b = "body1",
    variantMapping: w = Xn,
    ...l
  } = a, x = {
    ...a,
    align: s,
    color: n,
    className: u,
    component: f,
    gutterBottom: d,
    noWrap: p,
    paragraph: y,
    variant: b,
    variantMapping: w
  }, T = f || (y ? "p" : w[b] || Xn[b]) || "span", $ = Uu(x);
  return /* @__PURE__ */ j.jsx(Yu, {
    as: T,
    ref: r,
    className: pe($.root, u),
    ...l,
    ownerState: x,
    style: {
      ...s !== "inherit" && {
        "--Typography-textAlign": s
      },
      ...l.style
    }
  });
});
process.env.NODE_ENV !== "production" && (dt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: m.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: m.oneOfType([m.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), m.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: m.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: m.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: m.bool,
  /**
   * @ignore
   */
  style: m.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: m.oneOfType([m.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), m.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: m.object
});
function Gu() {
  const e = Jn(), t = ai((i) => i.counter.value), r = si(), { state: n, dispatch: o } = Kc();
  return /* @__PURE__ */ j.jsxs(Ze, { children: [
    /* @__PURE__ */ j.jsx(dt, { variant: "h4", children: "Home" }),
    /* @__PURE__ */ j.jsxs(dt, { children: [
      "Redux Counter: ",
      t
    ] }),
    /* @__PURE__ */ j.jsx(Je, { onClick: () => r(Lc()), variant: "contained", children: "Increment" }),
    /* @__PURE__ */ j.jsx(Je, { onClick: () => r(Wc()), variant: "outlined", children: "Decrement" }),
    /* @__PURE__ */ j.jsxs(Ze, { mt: 2, children: [
      /* @__PURE__ */ j.jsxs(dt, { children: [
        "Custom Context Toggle: ",
        n.on ? "ON" : "OFF"
      ] }),
      /* @__PURE__ */ j.jsx(
        Je,
        {
          onClick: () => o({ type: "toggle" }),
          variant: "contained",
          children: "Toggle"
        }
      )
    ] }),
    /* @__PURE__ */ j.jsx(Ze, { mt: 2, children: /* @__PURE__ */ j.jsx(Je, { onClick: () => e("/about"), children: "Go to About" }) })
  ] });
}
function qu() {
  const e = Jn();
  return /* @__PURE__ */ j.jsxs(Ze, { children: [
    /* @__PURE__ */ j.jsx(dt, { variant: "h4", children: "About" }),
    /* @__PURE__ */ j.jsx(Je, { onClick: () => e("/"), children: "Go Home" })
  ] });
}
function tl() {
  return /* @__PURE__ */ j.jsx(ci, { store: Yc, children: /* @__PURE__ */ j.jsx(qc, { children: /* @__PURE__ */ j.jsx(ui, { children: /* @__PURE__ */ j.jsxs(Ze, { p: 2, children: [
    /* @__PURE__ */ j.jsxs("nav", { children: [
      /* @__PURE__ */ j.jsx(Xr, { to: "/", children: "Home" }),
      " | ",
      /* @__PURE__ */ j.jsx(Xr, { to: "/about", children: "About" })
    ] }),
    /* @__PURE__ */ j.jsxs(li, { children: [
      /* @__PURE__ */ j.jsx(Jr, { path: "/", element: /* @__PURE__ */ j.jsx(Gu, {}) }),
      /* @__PURE__ */ j.jsx(Jr, { path: "/about", element: /* @__PURE__ */ j.jsx(qu, {}) })
    ] })
  ] }) }) }) });
}
export {
  tl as MyFeatureComponent
};
