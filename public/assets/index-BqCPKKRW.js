function vh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Fo =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function pl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Gv(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var yh = { exports: {} },
  ml = {},
  gh = { exports: {} },
  me = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var No = Symbol.for("react.element"),
  Xv = Symbol.for("react.portal"),
  Jv = Symbol.for("react.fragment"),
  Zv = Symbol.for("react.strict_mode"),
  ey = Symbol.for("react.profiler"),
  ty = Symbol.for("react.provider"),
  ny = Symbol.for("react.context"),
  ry = Symbol.for("react.forward_ref"),
  iy = Symbol.for("react.suspense"),
  oy = Symbol.for("react.memo"),
  ay = Symbol.for("react.lazy"),
  nd = Symbol.iterator;
function ly(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nd && e[nd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var wh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xh = Object.assign,
  Sh = {};
function Ci(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sh),
    (this.updater = n || wh);
}
Ci.prototype.isReactComponent = {};
Ci.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ci.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bh() {}
bh.prototype = Ci.prototype;
function Vu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sh),
    (this.updater = n || wh);
}
var Ku = (Vu.prototype = new bh());
Ku.constructor = Vu;
xh(Ku, Ci.prototype);
Ku.isPureReactComponent = !0;
var rd = Array.isArray,
  Eh = Object.prototype.hasOwnProperty,
  Yu = { current: null },
  Ch = { key: !0, ref: !0, __self: !0, __source: !0 };
function _h(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Eh.call(t, r) && !Ch.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: No,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: Yu.current,
  };
}
function sy(e, t) {
  return {
    $$typeof: No,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === No;
}
function uy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var id = /\/+/g;
function Hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? uy("" + e.key)
    : t.toString(36);
}
function sa(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case No:
          case Xv:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + Hl(a, 0) : r),
      rd(i)
        ? ((n = ""),
          e != null && (n = e.replace(id, "$&/") + "/"),
          sa(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Gu(i) &&
            (i = sy(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(id, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), rd(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var s = r + Hl(o, l);
      a += sa(o, t, n, s, i);
    }
  else if (((s = ly(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Hl(o, l++)), (a += sa(o, t, n, s, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Uo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    sa(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function cy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Et = { current: null },
  ua = { transition: null },
  dy = {
    ReactCurrentDispatcher: Et,
    ReactCurrentBatchConfig: ua,
    ReactCurrentOwner: Yu,
  };
function kh() {
  throw Error("act(...) is not supported in production builds of React.");
}
me.Children = {
  map: Uo,
  forEach: function (e, t, n) {
    Uo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Uo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Uo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
me.Component = Ci;
me.Fragment = Jv;
me.Profiler = ey;
me.PureComponent = Vu;
me.StrictMode = Zv;
me.Suspense = iy;
me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dy;
me.act = kh;
me.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = xh({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = Yu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      Eh.call(t, s) &&
        !Ch.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: No, type: e.type, key: i, ref: o, props: r, _owner: a };
};
me.createContext = function (e) {
  return (
    (e = {
      $$typeof: ny,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ty, _context: e }),
    (e.Consumer = e)
  );
};
me.createElement = _h;
me.createFactory = function (e) {
  var t = _h.bind(null, e);
  return (t.type = e), t;
};
me.createRef = function () {
  return { current: null };
};
me.forwardRef = function (e) {
  return { $$typeof: ry, render: e };
};
me.isValidElement = Gu;
me.lazy = function (e) {
  return { $$typeof: ay, _payload: { _status: -1, _result: e }, _init: cy };
};
me.memo = function (e, t) {
  return { $$typeof: oy, type: e, compare: t === void 0 ? null : t };
};
me.startTransition = function (e) {
  var t = ua.transition;
  ua.transition = {};
  try {
    e();
  } finally {
    ua.transition = t;
  }
};
me.unstable_act = kh;
me.useCallback = function (e, t) {
  return Et.current.useCallback(e, t);
};
me.useContext = function (e) {
  return Et.current.useContext(e);
};
me.useDebugValue = function () {};
me.useDeferredValue = function (e) {
  return Et.current.useDeferredValue(e);
};
me.useEffect = function (e, t) {
  return Et.current.useEffect(e, t);
};
me.useId = function () {
  return Et.current.useId();
};
me.useImperativeHandle = function (e, t, n) {
  return Et.current.useImperativeHandle(e, t, n);
};
me.useInsertionEffect = function (e, t) {
  return Et.current.useInsertionEffect(e, t);
};
me.useLayoutEffect = function (e, t) {
  return Et.current.useLayoutEffect(e, t);
};
me.useMemo = function (e, t) {
  return Et.current.useMemo(e, t);
};
me.useReducer = function (e, t, n) {
  return Et.current.useReducer(e, t, n);
};
me.useRef = function (e) {
  return Et.current.useRef(e);
};
me.useState = function (e) {
  return Et.current.useState(e);
};
me.useSyncExternalStore = function (e, t, n) {
  return Et.current.useSyncExternalStore(e, t, n);
};
me.useTransition = function () {
  return Et.current.useTransition();
};
me.version = "18.3.1";
gh.exports = me;
var N = gh.exports;
const I = pl(N),
  fy = vh({ __proto__: null, default: I }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hy = N,
  py = Symbol.for("react.element"),
  my = Symbol.for("react.fragment"),
  vy = Object.prototype.hasOwnProperty,
  yy = hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oh(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) vy.call(t, r) && !gy.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: py,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: yy.current,
  };
}
ml.Fragment = my;
ml.jsx = Oh;
ml.jsxs = Oh;
yh.exports = ml;
var c = yh.exports,
  Ls = {},
  Ph = { exports: {} },
  Ht = {},
  jh = { exports: {} },
  Nh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, B) {
    var Q = T.length;
    T.push(B);
    e: for (; 0 < Q; ) {
      var Y = (Q - 1) >>> 1,
        V = T[Y];
      if (0 < i(V, B)) (T[Y] = B), (T[Q] = V), (Q = Y);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var B = T[0],
      Q = T.pop();
    if (Q !== B) {
      T[0] = Q;
      e: for (var Y = 0, V = T.length, se = V >>> 1; Y < se; ) {
        var re = 2 * (Y + 1) - 1,
          ye = T[re],
          ue = re + 1,
          Je = T[ue];
        if (0 > i(ye, Q))
          ue < V && 0 > i(Je, ye)
            ? ((T[Y] = Je), (T[ue] = Q), (Y = ue))
            : ((T[Y] = ye), (T[re] = Q), (Y = re));
        else if (ue < V && 0 > i(Je, Q)) (T[Y] = Je), (T[ue] = Q), (Y = ue);
        else break e;
      }
    }
    return B;
  }
  function i(T, B) {
    var Q = T.sortIndex - B.sortIndex;
    return Q !== 0 ? Q : T.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    d = 1,
    f = null,
    p = 3,
    g = !1,
    y = !1,
    w = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var B = n(u); B !== null; ) {
      if (B.callback === null) r(u);
      else if (B.startTime <= T)
        r(u), (B.sortIndex = B.expirationTime), t(s, B);
      else break;
      B = n(u);
    }
  }
  function C(T) {
    if (((w = !1), m(T), !y))
      if (n(s) !== null) (y = !0), Z(O);
      else {
        var B = n(u);
        B !== null && we(C, B.startTime - T);
      }
  }
  function O(T, B) {
    (y = !1), w && ((w = !1), v(L), (L = -1)), (g = !0);
    var Q = p;
    try {
      for (
        m(B), f = n(s);
        f !== null && (!(f.expirationTime > B) || (T && !D()));

      ) {
        var Y = f.callback;
        if (typeof Y == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var V = Y(f.expirationTime <= B);
          (B = e.unstable_now()),
            typeof V == "function" ? (f.callback = V) : f === n(s) && r(s),
            m(B);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var se = !0;
      else {
        var re = n(u);
        re !== null && we(C, re.startTime - B), (se = !1);
      }
      return se;
    } finally {
      (f = null), (p = Q), (g = !1);
    }
  }
  var P = !1,
    x = null,
    L = -1,
    j = 5,
    _ = -1;
  function D() {
    return !(e.unstable_now() - _ < j);
  }
  function U() {
    if (x !== null) {
      var T = e.unstable_now();
      _ = T;
      var B = !0;
      try {
        B = x(!0, T);
      } finally {
        B ? $() : ((P = !1), (x = null));
      }
    } else P = !1;
  }
  var $;
  if (typeof h == "function")
    $ = function () {
      h(U);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      H = M.port2;
    (M.port1.onmessage = U),
      ($ = function () {
        H.postMessage(null);
      });
  } else
    $ = function () {
      E(U, 0);
    };
  function Z(T) {
    (x = T), P || ((P = !0), $());
  }
  function we(T, B) {
    L = E(function () {
      T(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Z(O));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (j = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (T) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = p;
      }
      var Q = p;
      p = B;
      try {
        return T();
      } finally {
        p = Q;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, B) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var Q = p;
      p = T;
      try {
        return B();
      } finally {
        p = Q;
      }
    }),
    (e.unstable_scheduleCallback = function (T, B, Q) {
      var Y = e.unstable_now();
      switch (
        (typeof Q == "object" && Q !== null
          ? ((Q = Q.delay), (Q = typeof Q == "number" && 0 < Q ? Y + Q : Y))
          : (Q = Y),
        T)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = Q + V),
        (T = {
          id: d++,
          callback: B,
          priorityLevel: T,
          startTime: Q,
          expirationTime: V,
          sortIndex: -1,
        }),
        Q > Y
          ? ((T.sortIndex = Q),
            t(u, T),
            n(s) === null &&
              T === n(u) &&
              (w ? (v(L), (L = -1)) : (w = !0), we(C, Q - Y)))
          : ((T.sortIndex = V), t(s, T), y || g || ((y = !0), Z(O))),
        T
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (T) {
      var B = p;
      return function () {
        var Q = p;
        p = B;
        try {
          return T.apply(this, arguments);
        } finally {
          p = Q;
        }
      };
    });
})(Nh);
jh.exports = Nh;
var wy = jh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xy = N,
  Ut = wy;
function z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Th = new Set(),
  uo = {};
function Ir(e, t) {
  ci(e, t), ci(e + "Capture", t);
}
function ci(e, t) {
  for (uo[e] = t, e = 0; e < t.length; e++) Th.add(t[e]);
}
var Dn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ms = Object.prototype.hasOwnProperty,
  Sy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  od = {},
  ad = {};
function by(e) {
  return Ms.call(ad, e)
    ? !0
    : Ms.call(od, e)
    ? !1
    : Sy.test(e)
    ? (ad[e] = !0)
    : ((od[e] = !0), !1);
}
function Ey(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Cy(e, t, n, r) {
  if (t === null || typeof t > "u" || Ey(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ct(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var ct = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ct[e] = new Ct(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ct[t] = new Ct(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ct[e] = new Ct(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ct[e] = new Ct(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ct[e] = new Ct(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ct[e] = new Ct(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ct[e] = new Ct(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ct[e] = new Ct(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ct[e] = new Ct(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xu = /[\-:]([a-z])/g;
function Ju(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xu, Ju);
    ct[t] = new Ct(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xu, Ju);
    ct[t] = new Ct(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Xu, Ju);
  ct[t] = new Ct(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ct[e] = new Ct(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ct.xlinkHref = new Ct(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ct[e] = new Ct(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zu(e, t, n, r) {
  var i = ct.hasOwnProperty(t) ? ct[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Cy(t, n, i, r) && (n = null),
    r || i === null
      ? by(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Fn = xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $o = Symbol.for("react.element"),
  Br = Symbol.for("react.portal"),
  Qr = Symbol.for("react.fragment"),
  ec = Symbol.for("react.strict_mode"),
  Ds = Symbol.for("react.profiler"),
  Rh = Symbol.for("react.provider"),
  Lh = Symbol.for("react.context"),
  tc = Symbol.for("react.forward_ref"),
  Is = Symbol.for("react.suspense"),
  zs = Symbol.for("react.suspense_list"),
  nc = Symbol.for("react.memo"),
  Gn = Symbol.for("react.lazy"),
  Mh = Symbol.for("react.offscreen"),
  ld = Symbol.iterator;
function Mi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ld && e[ld]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var He = Object.assign,
  Bl;
function Ki(e) {
  if (Bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bl = (t && t[1]) || "";
    }
  return (
    `
` +
    Bl +
    e
  );
}
var Ql = !1;
function Wl(e, t) {
  if (!e || Ql) return "";
  Ql = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          l = o.length - 1;
        1 <= a && 0 <= l && i[a] !== o[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (i[a] !== o[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || i[a] !== o[l])) {
                var s =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Ql = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ki(e) : "";
}
function _y(e) {
  switch (e.tag) {
    case 5:
      return Ki(e.type);
    case 16:
      return Ki("Lazy");
    case 13:
      return Ki("Suspense");
    case 19:
      return Ki("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wl(e.type, !1)), e;
    case 11:
      return (e = Wl(e.type.render, !1)), e;
    case 1:
      return (e = Wl(e.type, !0)), e;
    default:
      return "";
  }
}
function As(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qr:
      return "Fragment";
    case Br:
      return "Portal";
    case Ds:
      return "Profiler";
    case ec:
      return "StrictMode";
    case Is:
      return "Suspense";
    case zs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Lh:
        return (e.displayName || "Context") + ".Consumer";
      case Rh:
        return (e._context.displayName || "Context") + ".Provider";
      case tc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case nc:
        return (
          (t = e.displayName || null), t !== null ? t : As(e.type) || "Memo"
        );
      case Gn:
        (t = e._payload), (e = e._init);
        try {
          return As(e(t));
        } catch {}
    }
  return null;
}
function ky(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return As(t);
    case 8:
      return t === ec ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function fr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Dh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Oy(e) {
  var t = Dh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ho(e) {
  e._valueTracker || (e._valueTracker = Oy(e));
}
function Ih(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Dh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function _a(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fs(e, t) {
  var n = t.checked;
  return He({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function sd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = fr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function zh(e, t) {
  (t = t.checked), t != null && Zu(e, "checked", t, !1);
}
function Us(e, t) {
  zh(e, t);
  var n = fr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? $s(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && $s(e, t.type, fr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ud(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function $s(e, t, n) {
  (t !== "number" || _a(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yi = Array.isArray;
function ni(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + fr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return He({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function cd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(z(92));
      if (Yi(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: fr(n) };
}
function Ah(e, t) {
  var n = fr(t.value),
    r = fr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function dd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Bo,
  Uh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Bo = Bo || document.createElement("div"),
          Bo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Bo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function co(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ji = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Py = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ji).forEach(function (e) {
  Py.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ji[t] = Ji[e]);
  });
});
function $h(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ji.hasOwnProperty(e) && Ji[e])
    ? ("" + t).trim()
    : t + "px";
}
function Hh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = $h(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var jy = He(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Qs(e, t) {
  if (t) {
    if (jy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function Ws(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var qs = null;
function rc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Vs = null,
  ri = null,
  ii = null;
function fd(e) {
  if ((e = Lo(e))) {
    if (typeof Vs != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = xl(t)), Vs(e.stateNode, e.type, t));
  }
}
function Bh(e) {
  ri ? (ii ? ii.push(e) : (ii = [e])) : (ri = e);
}
function Qh() {
  if (ri) {
    var e = ri,
      t = ii;
    if (((ii = ri = null), fd(e), t)) for (e = 0; e < t.length; e++) fd(t[e]);
  }
}
function Wh(e, t) {
  return e(t);
}
function qh() {}
var ql = !1;
function Vh(e, t, n) {
  if (ql) return e(t, n);
  ql = !0;
  try {
    return Wh(e, t, n);
  } finally {
    (ql = !1), (ri !== null || ii !== null) && (qh(), Qh());
  }
}
function fo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(z(231, t, typeof n));
  return n;
}
var Ks = !1;
if (Dn)
  try {
    var Di = {};
    Object.defineProperty(Di, "passive", {
      get: function () {
        Ks = !0;
      },
    }),
      window.addEventListener("test", Di, Di),
      window.removeEventListener("test", Di, Di);
  } catch {
    Ks = !1;
  }
function Ny(e, t, n, r, i, o, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Zi = !1,
  ka = null,
  Oa = !1,
  Ys = null,
  Ty = {
    onError: function (e) {
      (Zi = !0), (ka = e);
    },
  };
function Ry(e, t, n, r, i, o, a, l, s) {
  (Zi = !1), (ka = null), Ny.apply(Ty, arguments);
}
function Ly(e, t, n, r, i, o, a, l, s) {
  if ((Ry.apply(this, arguments), Zi)) {
    if (Zi) {
      var u = ka;
      (Zi = !1), (ka = null);
    } else throw Error(z(198));
    Oa || ((Oa = !0), (Ys = u));
  }
}
function zr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Kh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function hd(e) {
  if (zr(e) !== e) throw Error(z(188));
}
function My(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = zr(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return hd(i), e;
        if (o === r) return hd(i), t;
        o = o.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var a = !1, l = i.child; l; ) {
        if (l === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function Yh(e) {
  return (e = My(e)), e !== null ? Gh(e) : null;
}
function Gh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xh = Ut.unstable_scheduleCallback,
  pd = Ut.unstable_cancelCallback,
  Dy = Ut.unstable_shouldYield,
  Iy = Ut.unstable_requestPaint,
  Ke = Ut.unstable_now,
  zy = Ut.unstable_getCurrentPriorityLevel,
  ic = Ut.unstable_ImmediatePriority,
  Jh = Ut.unstable_UserBlockingPriority,
  Pa = Ut.unstable_NormalPriority,
  Ay = Ut.unstable_LowPriority,
  Zh = Ut.unstable_IdlePriority,
  vl = null,
  bn = null;
function Fy(e) {
  if (bn && typeof bn.onCommitFiberRoot == "function")
    try {
      bn.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pn = Math.clz32 ? Math.clz32 : Hy,
  Uy = Math.log,
  $y = Math.LN2;
function Hy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Uy(e) / $y) | 0)) | 0;
}
var Qo = 64,
  Wo = 4194304;
function Gi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ja(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~i;
    l !== 0 ? (r = Gi(l)) : ((o &= a), o !== 0 && (r = Gi(o)));
  } else (a = n & ~i), a !== 0 ? (r = Gi(a)) : o !== 0 && (r = Gi(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - pn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function By(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - pn(o),
      l = 1 << a,
      s = i[a];
    s === -1
      ? (!(l & n) || l & r) && (i[a] = By(l, t))
      : s <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Gs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ep() {
  var e = Qo;
  return (Qo <<= 1), !(Qo & 4194240) && (Qo = 64), e;
}
function Vl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function To(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pn(t)),
    (e[t] = n);
}
function Wy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - pn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function oc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var be = 0;
function tp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var np,
  ac,
  rp,
  ip,
  op,
  Xs = !1,
  qo = [],
  ir = null,
  or = null,
  ar = null,
  ho = new Map(),
  po = new Map(),
  er = [],
  qy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function md(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ir = null;
      break;
    case "dragenter":
    case "dragleave":
      or = null;
      break;
    case "mouseover":
    case "mouseout":
      ar = null;
      break;
    case "pointerover":
    case "pointerout":
      ho.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      po.delete(t.pointerId);
  }
}
function Ii(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Lo(t)), t !== null && ac(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Vy(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (ir = Ii(ir, e, t, n, r, i)), !0;
    case "dragenter":
      return (or = Ii(or, e, t, n, r, i)), !0;
    case "mouseover":
      return (ar = Ii(ar, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return ho.set(o, Ii(ho.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), po.set(o, Ii(po.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ap(e) {
  var t = Sr(e.target);
  if (t !== null) {
    var n = zr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Kh(n)), t !== null)) {
          (e.blockedOn = t),
            op(e.priority, function () {
              rp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ca(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Js(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (qs = r), n.target.dispatchEvent(r), (qs = null);
    } else return (t = Lo(n)), t !== null && ac(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function vd(e, t, n) {
  ca(e) && n.delete(t);
}
function Ky() {
  (Xs = !1),
    ir !== null && ca(ir) && (ir = null),
    or !== null && ca(or) && (or = null),
    ar !== null && ca(ar) && (ar = null),
    ho.forEach(vd),
    po.forEach(vd);
}
function zi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Xs ||
      ((Xs = !0),
      Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority, Ky)));
}
function mo(e) {
  function t(i) {
    return zi(i, e);
  }
  if (0 < qo.length) {
    zi(qo[0], e);
    for (var n = 1; n < qo.length; n++) {
      var r = qo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ir !== null && zi(ir, e),
      or !== null && zi(or, e),
      ar !== null && zi(ar, e),
      ho.forEach(t),
      po.forEach(t),
      n = 0;
    n < er.length;
    n++
  )
    (r = er[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < er.length && ((n = er[0]), n.blockedOn === null); )
    ap(n), n.blockedOn === null && er.shift();
}
var oi = Fn.ReactCurrentBatchConfig,
  Na = !0;
function Yy(e, t, n, r) {
  var i = be,
    o = oi.transition;
  oi.transition = null;
  try {
    (be = 1), lc(e, t, n, r);
  } finally {
    (be = i), (oi.transition = o);
  }
}
function Gy(e, t, n, r) {
  var i = be,
    o = oi.transition;
  oi.transition = null;
  try {
    (be = 4), lc(e, t, n, r);
  } finally {
    (be = i), (oi.transition = o);
  }
}
function lc(e, t, n, r) {
  if (Na) {
    var i = Js(e, t, n, r);
    if (i === null) rs(e, t, r, Ta, n), md(e, r);
    else if (Vy(i, e, t, n, r)) r.stopPropagation();
    else if ((md(e, r), t & 4 && -1 < qy.indexOf(e))) {
      for (; i !== null; ) {
        var o = Lo(i);
        if (
          (o !== null && np(o),
          (o = Js(e, t, n, r)),
          o === null && rs(e, t, r, Ta, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else rs(e, t, r, null, n);
  }
}
var Ta = null;
function Js(e, t, n, r) {
  if (((Ta = null), (e = rc(r)), (e = Sr(e)), e !== null))
    if (((t = zr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Kh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ta = e), null;
}
function lp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (zy()) {
        case ic:
          return 1;
        case Jh:
          return 4;
        case Pa:
        case Ay:
          return 16;
        case Zh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nr = null,
  sc = null,
  da = null;
function sp() {
  if (da) return da;
  var e,
    t = sc,
    n = t.length,
    r,
    i = "value" in nr ? nr.value : nr.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (da = i.slice(e, 1 < r ? 1 - r : void 0));
}
function fa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Vo() {
  return !0;
}
function yd() {
  return !1;
}
function Bt(e) {
  function t(n, r, i, o, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Vo
        : yd),
      (this.isPropagationStopped = yd),
      this
    );
  }
  return (
    He(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Vo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Vo));
      },
      persist: function () {},
      isPersistent: Vo,
    }),
    t
  );
}
var _i = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  uc = Bt(_i),
  Ro = He({}, _i, { view: 0, detail: 0 }),
  Xy = Bt(Ro),
  Kl,
  Yl,
  Ai,
  yl = He({}, Ro, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: cc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ai &&
            (Ai && e.type === "mousemove"
              ? ((Kl = e.screenX - Ai.screenX), (Yl = e.screenY - Ai.screenY))
              : (Yl = Kl = 0),
            (Ai = e)),
          Kl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yl;
    },
  }),
  gd = Bt(yl),
  Jy = He({}, yl, { dataTransfer: 0 }),
  Zy = Bt(Jy),
  eg = He({}, Ro, { relatedTarget: 0 }),
  Gl = Bt(eg),
  tg = He({}, _i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ng = Bt(tg),
  rg = He({}, _i, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ig = Bt(rg),
  og = He({}, _i, { data: 0 }),
  wd = Bt(og),
  ag = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  lg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  sg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ug(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sg[e]) ? !!t[e] : !1;
}
function cc() {
  return ug;
}
var cg = He({}, Ro, {
    key: function (e) {
      if (e.key) {
        var t = ag[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = fa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? lg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cc,
    charCode: function (e) {
      return e.type === "keypress" ? fa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? fa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  dg = Bt(cg),
  fg = He({}, yl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  xd = Bt(fg),
  hg = He({}, Ro, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cc,
  }),
  pg = Bt(hg),
  mg = He({}, _i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vg = Bt(mg),
  yg = He({}, yl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  gg = Bt(yg),
  wg = [9, 13, 27, 32],
  dc = Dn && "CompositionEvent" in window,
  eo = null;
Dn && "documentMode" in document && (eo = document.documentMode);
var xg = Dn && "TextEvent" in window && !eo,
  up = Dn && (!dc || (eo && 8 < eo && 11 >= eo)),
  Sd = " ",
  bd = !1;
function cp(e, t) {
  switch (e) {
    case "keyup":
      return wg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function dp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wr = !1;
function Sg(e, t) {
  switch (e) {
    case "compositionend":
      return dp(t);
    case "keypress":
      return t.which !== 32 ? null : ((bd = !0), Sd);
    case "textInput":
      return (e = t.data), e === Sd && bd ? null : e;
    default:
      return null;
  }
}
function bg(e, t) {
  if (Wr)
    return e === "compositionend" || (!dc && cp(e, t))
      ? ((e = sp()), (da = sc = nr = null), (Wr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return up && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Eg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ed(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Eg[e.type] : t === "textarea";
}
function fp(e, t, n, r) {
  Bh(r),
    (t = Ra(t, "onChange")),
    0 < t.length &&
      ((n = new uc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var to = null,
  vo = null;
function Cg(e) {
  Ep(e, 0);
}
function gl(e) {
  var t = Kr(e);
  if (Ih(t)) return e;
}
function _g(e, t) {
  if (e === "change") return t;
}
var hp = !1;
if (Dn) {
  var Xl;
  if (Dn) {
    var Jl = "oninput" in document;
    if (!Jl) {
      var Cd = document.createElement("div");
      Cd.setAttribute("oninput", "return;"),
        (Jl = typeof Cd.oninput == "function");
    }
    Xl = Jl;
  } else Xl = !1;
  hp = Xl && (!document.documentMode || 9 < document.documentMode);
}
function _d() {
  to && (to.detachEvent("onpropertychange", pp), (vo = to = null));
}
function pp(e) {
  if (e.propertyName === "value" && gl(vo)) {
    var t = [];
    fp(t, vo, e, rc(e)), Vh(Cg, t);
  }
}
function kg(e, t, n) {
  e === "focusin"
    ? (_d(), (to = t), (vo = n), to.attachEvent("onpropertychange", pp))
    : e === "focusout" && _d();
}
function Og(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gl(vo);
}
function Pg(e, t) {
  if (e === "click") return gl(t);
}
function jg(e, t) {
  if (e === "input" || e === "change") return gl(t);
}
function Ng(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vn = typeof Object.is == "function" ? Object.is : Ng;
function yo(e, t) {
  if (vn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ms.call(t, i) || !vn(e[i], t[i])) return !1;
  }
  return !0;
}
function kd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Od(e, t) {
  var n = kd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = kd(n);
  }
}
function mp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? mp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function vp() {
  for (var e = window, t = _a(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = _a(e.document);
  }
  return t;
}
function fc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Tg(e) {
  var t = vp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    mp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Od(n, o));
        var a = Od(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Rg = Dn && "documentMode" in document && 11 >= document.documentMode,
  qr = null,
  Zs = null,
  no = null,
  eu = !1;
function Pd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  eu ||
    qr == null ||
    qr !== _a(r) ||
    ((r = qr),
    "selectionStart" in r && fc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (no && yo(no, r)) ||
      ((no = r),
      (r = Ra(Zs, "onSelect")),
      0 < r.length &&
        ((t = new uc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = qr))));
}
function Ko(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vr = {
    animationend: Ko("Animation", "AnimationEnd"),
    animationiteration: Ko("Animation", "AnimationIteration"),
    animationstart: Ko("Animation", "AnimationStart"),
    transitionend: Ko("Transition", "TransitionEnd"),
  },
  Zl = {},
  yp = {};
Dn &&
  ((yp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vr.animationend.animation,
    delete Vr.animationiteration.animation,
    delete Vr.animationstart.animation),
  "TransitionEvent" in window || delete Vr.transitionend.transition);
function wl(e) {
  if (Zl[e]) return Zl[e];
  if (!Vr[e]) return e;
  var t = Vr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in yp) return (Zl[e] = t[n]);
  return e;
}
var gp = wl("animationend"),
  wp = wl("animationiteration"),
  xp = wl("animationstart"),
  Sp = wl("transitionend"),
  bp = new Map(),
  jd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pr(e, t) {
  bp.set(e, t), Ir(t, [e]);
}
for (var es = 0; es < jd.length; es++) {
  var ts = jd[es],
    Lg = ts.toLowerCase(),
    Mg = ts[0].toUpperCase() + ts.slice(1);
  pr(Lg, "on" + Mg);
}
pr(gp, "onAnimationEnd");
pr(wp, "onAnimationIteration");
pr(xp, "onAnimationStart");
pr("dblclick", "onDoubleClick");
pr("focusin", "onFocus");
pr("focusout", "onBlur");
pr(Sp, "onTransitionEnd");
ci("onMouseEnter", ["mouseout", "mouseover"]);
ci("onMouseLeave", ["mouseout", "mouseover"]);
ci("onPointerEnter", ["pointerout", "pointerover"]);
ci("onPointerLeave", ["pointerout", "pointerover"]);
Ir(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ir(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ir(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ir(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ir(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Xi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Dg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));
function Nd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ly(r, t, void 0, e), (e.currentTarget = null);
}
function Ep(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== o && i.isPropagationStopped())) break e;
          Nd(i, l, u), (o = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          Nd(i, l, u), (o = s);
        }
    }
  }
  if (Oa) throw ((e = Ys), (Oa = !1), (Ys = null), e);
}
function je(e, t) {
  var n = t[ou];
  n === void 0 && (n = t[ou] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Cp(t, e, 2, !1), n.add(r));
}
function ns(e, t, n) {
  var r = 0;
  t && (r |= 4), Cp(n, e, r, t);
}
var Yo = "_reactListening" + Math.random().toString(36).slice(2);
function go(e) {
  if (!e[Yo]) {
    (e[Yo] = !0),
      Th.forEach(function (n) {
        n !== "selectionchange" && (Dg.has(n) || ns(n, !1, e), ns(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yo] || ((t[Yo] = !0), ns("selectionchange", !1, t));
  }
}
function Cp(e, t, n, r) {
  switch (lp(t)) {
    case 1:
      var i = Yy;
      break;
    case 4:
      i = Gy;
      break;
    default:
      i = lc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ks ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function rs(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Sr(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = o = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Vh(function () {
    var u = o,
      d = rc(n),
      f = [];
    e: {
      var p = bp.get(e);
      if (p !== void 0) {
        var g = uc,
          y = e;
        switch (e) {
          case "keypress":
            if (fa(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = dg;
            break;
          case "focusin":
            (y = "focus"), (g = Gl);
            break;
          case "focusout":
            (y = "blur"), (g = Gl);
            break;
          case "beforeblur":
          case "afterblur":
            g = Gl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = gd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Zy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = pg;
            break;
          case gp:
          case wp:
          case xp:
            g = ng;
            break;
          case Sp:
            g = vg;
            break;
          case "scroll":
            g = Xy;
            break;
          case "wheel":
            g = gg;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = ig;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = xd;
        }
        var w = (t & 4) !== 0,
          E = !w && e === "scroll",
          v = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var C = m.stateNode;
          if (
            (m.tag === 5 &&
              C !== null &&
              ((m = C),
              v !== null && ((C = fo(h, v)), C != null && w.push(wo(h, C, m)))),
            E)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((p = new g(p, y, null, n, d)), f.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== qs &&
            (y = n.relatedTarget || n.fromElement) &&
            (Sr(y) || y[In]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Sr(y) : null),
              y !== null &&
                ((E = zr(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((w = gd),
            (C = "onMouseLeave"),
            (v = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = xd),
              (C = "onPointerLeave"),
              (v = "onPointerEnter"),
              (h = "pointer")),
            (E = g == null ? p : Kr(g)),
            (m = y == null ? p : Kr(y)),
            (p = new w(C, h + "leave", g, n, d)),
            (p.target = E),
            (p.relatedTarget = m),
            (C = null),
            Sr(d) === u &&
              ((w = new w(v, h + "enter", y, n, d)),
              (w.target = m),
              (w.relatedTarget = E),
              (C = w)),
            (E = C),
            g && y)
          )
            t: {
              for (w = g, v = y, h = 0, m = w; m; m = $r(m)) h++;
              for (m = 0, C = v; C; C = $r(C)) m++;
              for (; 0 < h - m; ) (w = $r(w)), h--;
              for (; 0 < m - h; ) (v = $r(v)), m--;
              for (; h--; ) {
                if (w === v || (v !== null && w === v.alternate)) break t;
                (w = $r(w)), (v = $r(v));
              }
              w = null;
            }
          else w = null;
          g !== null && Td(f, p, g, w, !1),
            y !== null && E !== null && Td(f, E, y, w, !0);
        }
      }
      e: {
        if (
          ((p = u ? Kr(u) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var O = _g;
        else if (Ed(p))
          if (hp) O = jg;
          else {
            O = Og;
            var P = kg;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (O = Pg);
        if (O && (O = O(e, u))) {
          fp(f, O, n, d);
          break e;
        }
        P && P(e, p, u),
          e === "focusout" &&
            (P = p._wrapperState) &&
            P.controlled &&
            p.type === "number" &&
            $s(p, "number", p.value);
      }
      switch (((P = u ? Kr(u) : window), e)) {
        case "focusin":
          (Ed(P) || P.contentEditable === "true") &&
            ((qr = P), (Zs = u), (no = null));
          break;
        case "focusout":
          no = Zs = qr = null;
          break;
        case "mousedown":
          eu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (eu = !1), Pd(f, n, d);
          break;
        case "selectionchange":
          if (Rg) break;
        case "keydown":
        case "keyup":
          Pd(f, n, d);
      }
      var x;
      if (dc)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Wr
          ? cp(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (up &&
          n.locale !== "ko" &&
          (Wr || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Wr && (x = sp())
            : ((nr = d),
              (sc = "value" in nr ? nr.value : nr.textContent),
              (Wr = !0))),
        (P = Ra(u, L)),
        0 < P.length &&
          ((L = new wd(L, e, null, n, d)),
          f.push({ event: L, listeners: P }),
          x ? (L.data = x) : ((x = dp(n)), x !== null && (L.data = x)))),
        (x = xg ? Sg(e, n) : bg(e, n)) &&
          ((u = Ra(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new wd("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = x)));
    }
    Ep(f, t);
  });
}
function wo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ra(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = fo(e, n)),
      o != null && r.unshift(wo(e, o, i)),
      (o = fo(e, t)),
      o != null && r.push(wo(e, o, i))),
      (e = e.return);
  }
  return r;
}
function $r(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Td(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((s = fo(n, o)), s != null && a.unshift(wo(n, s, l)))
        : i || ((s = fo(n, o)), s != null && a.push(wo(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Ig = /\r\n?/g,
  zg = /\u0000|\uFFFD/g;
function Rd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ig,
      `
`
    )
    .replace(zg, "");
}
function Go(e, t, n) {
  if (((t = Rd(t)), Rd(e) !== t && n)) throw Error(z(425));
}
function La() {}
var tu = null,
  nu = null;
function ru(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var iu = typeof setTimeout == "function" ? setTimeout : void 0,
  Ag = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ld = typeof Promise == "function" ? Promise : void 0,
  Fg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ld < "u"
      ? function (e) {
          return Ld.resolve(null).then(e).catch(Ug);
        }
      : iu;
function Ug(e) {
  setTimeout(function () {
    throw e;
  });
}
function is(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), mo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  mo(t);
}
function lr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Md(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ki = Math.random().toString(36).slice(2),
  Sn = "__reactFiber$" + ki,
  xo = "__reactProps$" + ki,
  In = "__reactContainer$" + ki,
  ou = "__reactEvents$" + ki,
  $g = "__reactListeners$" + ki,
  Hg = "__reactHandles$" + ki;
function Sr(e) {
  var t = e[Sn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[In] || n[Sn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Md(e); e !== null; ) {
          if ((n = e[Sn])) return n;
          e = Md(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Lo(e) {
  return (
    (e = e[Sn] || e[In]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Kr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function xl(e) {
  return e[xo] || null;
}
var au = [],
  Yr = -1;
function mr(e) {
  return { current: e };
}
function Ne(e) {
  0 > Yr || ((e.current = au[Yr]), (au[Yr] = null), Yr--);
}
function ke(e, t) {
  Yr++, (au[Yr] = e.current), (e.current = t);
}
var hr = {},
  mt = mr(hr),
  Tt = mr(!1),
  jr = hr;
function di(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Rt(e) {
  return (e = e.childContextTypes), e != null;
}
function Ma() {
  Ne(Tt), Ne(mt);
}
function Dd(e, t, n) {
  if (mt.current !== hr) throw Error(z(168));
  ke(mt, t), ke(Tt, n);
}
function _p(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(z(108, ky(e) || "Unknown", i));
  return He({}, n, r);
}
function Da(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || hr),
    (jr = mt.current),
    ke(mt, e),
    ke(Tt, Tt.current),
    !0
  );
}
function Id(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n
    ? ((e = _p(e, t, jr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ne(Tt),
      Ne(mt),
      ke(mt, e))
    : Ne(Tt),
    ke(Tt, n);
}
var Nn = null,
  Sl = !1,
  os = !1;
function kp(e) {
  Nn === null ? (Nn = [e]) : Nn.push(e);
}
function Bg(e) {
  (Sl = !0), kp(e);
}
function vr() {
  if (!os && Nn !== null) {
    os = !0;
    var e = 0,
      t = be;
    try {
      var n = Nn;
      for (be = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Nn = null), (Sl = !1);
    } catch (i) {
      throw (Nn !== null && (Nn = Nn.slice(e + 1)), Xh(ic, vr), i);
    } finally {
      (be = t), (os = !1);
    }
  }
  return null;
}
var Gr = [],
  Xr = 0,
  Ia = null,
  za = 0,
  qt = [],
  Vt = 0,
  Nr = null,
  Tn = 1,
  Rn = "";
function gr(e, t) {
  (Gr[Xr++] = za), (Gr[Xr++] = Ia), (Ia = e), (za = t);
}
function Op(e, t, n) {
  (qt[Vt++] = Tn), (qt[Vt++] = Rn), (qt[Vt++] = Nr), (Nr = e);
  var r = Tn;
  e = Rn;
  var i = 32 - pn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - pn(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (Tn = (1 << (32 - pn(t) + i)) | (n << i) | r),
      (Rn = o + e);
  } else (Tn = (1 << o) | (n << i) | r), (Rn = e);
}
function hc(e) {
  e.return !== null && (gr(e, 1), Op(e, 1, 0));
}
function pc(e) {
  for (; e === Ia; )
    (Ia = Gr[--Xr]), (Gr[Xr] = null), (za = Gr[--Xr]), (Gr[Xr] = null);
  for (; e === Nr; )
    (Nr = qt[--Vt]),
      (qt[Vt] = null),
      (Rn = qt[--Vt]),
      (qt[Vt] = null),
      (Tn = qt[--Vt]),
      (qt[Vt] = null);
}
var Ft = null,
  At = null,
  De = !1,
  hn = null;
function Pp(e, t) {
  var n = Yt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function zd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ft = e), (At = lr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ft = e), (At = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Nr !== null ? { id: Tn, overflow: Rn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Yt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ft = e),
            (At = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function lu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function su(e) {
  if (De) {
    var t = At;
    if (t) {
      var n = t;
      if (!zd(e, t)) {
        if (lu(e)) throw Error(z(418));
        t = lr(n.nextSibling);
        var r = Ft;
        t && zd(e, t)
          ? Pp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (De = !1), (Ft = e));
      }
    } else {
      if (lu(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (De = !1), (Ft = e);
    }
  }
}
function Ad(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ft = e;
}
function Xo(e) {
  if (e !== Ft) return !1;
  if (!De) return Ad(e), (De = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ru(e.type, e.memoizedProps))),
    t && (t = At))
  ) {
    if (lu(e)) throw (jp(), Error(z(418)));
    for (; t; ) Pp(e, t), (t = lr(t.nextSibling));
  }
  if ((Ad(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              At = lr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      At = null;
    }
  } else At = Ft ? lr(e.stateNode.nextSibling) : null;
  return !0;
}
function jp() {
  for (var e = At; e; ) e = lr(e.nextSibling);
}
function fi() {
  (At = Ft = null), (De = !1);
}
function mc(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
var Qg = Fn.ReactCurrentBatchConfig;
function Fi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var l = i.refs;
            a === null ? delete l[o] : (l[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function Jo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Fd(e) {
  var t = e._init;
  return t(e._payload);
}
function Np(e) {
  function t(v, h) {
    if (e) {
      var m = v.deletions;
      m === null ? ((v.deletions = [h]), (v.flags |= 16)) : m.push(h);
    }
  }
  function n(v, h) {
    if (!e) return null;
    for (; h !== null; ) t(v, h), (h = h.sibling);
    return null;
  }
  function r(v, h) {
    for (v = new Map(); h !== null; )
      h.key !== null ? v.set(h.key, h) : v.set(h.index, h), (h = h.sibling);
    return v;
  }
  function i(v, h) {
    return (v = dr(v, h)), (v.index = 0), (v.sibling = null), v;
  }
  function o(v, h, m) {
    return (
      (v.index = m),
      e
        ? ((m = v.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((v.flags |= 2), h) : m)
            : ((v.flags |= 2), h))
        : ((v.flags |= 1048576), h)
    );
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function l(v, h, m, C) {
    return h === null || h.tag !== 6
      ? ((h = fs(m, v.mode, C)), (h.return = v), h)
      : ((h = i(h, m)), (h.return = v), h);
  }
  function s(v, h, m, C) {
    var O = m.type;
    return O === Qr
      ? d(v, h, m.props.children, C, m.key)
      : h !== null &&
        (h.elementType === O ||
          (typeof O == "object" &&
            O !== null &&
            O.$$typeof === Gn &&
            Fd(O) === h.type))
      ? ((C = i(h, m.props)), (C.ref = Fi(v, h, m)), (C.return = v), C)
      : ((C = wa(m.type, m.key, m.props, null, v.mode, C)),
        (C.ref = Fi(v, h, m)),
        (C.return = v),
        C);
  }
  function u(v, h, m, C) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = hs(m, v.mode, C)), (h.return = v), h)
      : ((h = i(h, m.children || [])), (h.return = v), h);
  }
  function d(v, h, m, C, O) {
    return h === null || h.tag !== 7
      ? ((h = Pr(m, v.mode, C, O)), (h.return = v), h)
      : ((h = i(h, m)), (h.return = v), h);
  }
  function f(v, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = fs("" + h, v.mode, m)), (h.return = v), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case $o:
          return (
            (m = wa(h.type, h.key, h.props, null, v.mode, m)),
            (m.ref = Fi(v, null, h)),
            (m.return = v),
            m
          );
        case Br:
          return (h = hs(h, v.mode, m)), (h.return = v), h;
        case Gn:
          var C = h._init;
          return f(v, C(h._payload), m);
      }
      if (Yi(h) || Mi(h))
        return (h = Pr(h, v.mode, m, null)), (h.return = v), h;
      Jo(v, h);
    }
    return null;
  }
  function p(v, h, m, C) {
    var O = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return O !== null ? null : l(v, h, "" + m, C);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case $o:
          return m.key === O ? s(v, h, m, C) : null;
        case Br:
          return m.key === O ? u(v, h, m, C) : null;
        case Gn:
          return (O = m._init), p(v, h, O(m._payload), C);
      }
      if (Yi(m) || Mi(m)) return O !== null ? null : d(v, h, m, C, null);
      Jo(v, m);
    }
    return null;
  }
  function g(v, h, m, C, O) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (v = v.get(m) || null), l(h, v, "" + C, O);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case $o:
          return (v = v.get(C.key === null ? m : C.key) || null), s(h, v, C, O);
        case Br:
          return (v = v.get(C.key === null ? m : C.key) || null), u(h, v, C, O);
        case Gn:
          var P = C._init;
          return g(v, h, m, P(C._payload), O);
      }
      if (Yi(C) || Mi(C)) return (v = v.get(m) || null), d(h, v, C, O, null);
      Jo(h, C);
    }
    return null;
  }
  function y(v, h, m, C) {
    for (
      var O = null, P = null, x = h, L = (h = 0), j = null;
      x !== null && L < m.length;
      L++
    ) {
      x.index > L ? ((j = x), (x = null)) : (j = x.sibling);
      var _ = p(v, x, m[L], C);
      if (_ === null) {
        x === null && (x = j);
        break;
      }
      e && x && _.alternate === null && t(v, x),
        (h = o(_, h, L)),
        P === null ? (O = _) : (P.sibling = _),
        (P = _),
        (x = j);
    }
    if (L === m.length) return n(v, x), De && gr(v, L), O;
    if (x === null) {
      for (; L < m.length; L++)
        (x = f(v, m[L], C)),
          x !== null &&
            ((h = o(x, h, L)), P === null ? (O = x) : (P.sibling = x), (P = x));
      return De && gr(v, L), O;
    }
    for (x = r(v, x); L < m.length; L++)
      (j = g(x, v, L, m[L], C)),
        j !== null &&
          (e && j.alternate !== null && x.delete(j.key === null ? L : j.key),
          (h = o(j, h, L)),
          P === null ? (O = j) : (P.sibling = j),
          (P = j));
    return (
      e &&
        x.forEach(function (D) {
          return t(v, D);
        }),
      De && gr(v, L),
      O
    );
  }
  function w(v, h, m, C) {
    var O = Mi(m);
    if (typeof O != "function") throw Error(z(150));
    if (((m = O.call(m)), m == null)) throw Error(z(151));
    for (
      var P = (O = null), x = h, L = (h = 0), j = null, _ = m.next();
      x !== null && !_.done;
      L++, _ = m.next()
    ) {
      x.index > L ? ((j = x), (x = null)) : (j = x.sibling);
      var D = p(v, x, _.value, C);
      if (D === null) {
        x === null && (x = j);
        break;
      }
      e && x && D.alternate === null && t(v, x),
        (h = o(D, h, L)),
        P === null ? (O = D) : (P.sibling = D),
        (P = D),
        (x = j);
    }
    if (_.done) return n(v, x), De && gr(v, L), O;
    if (x === null) {
      for (; !_.done; L++, _ = m.next())
        (_ = f(v, _.value, C)),
          _ !== null &&
            ((h = o(_, h, L)), P === null ? (O = _) : (P.sibling = _), (P = _));
      return De && gr(v, L), O;
    }
    for (x = r(v, x); !_.done; L++, _ = m.next())
      (_ = g(x, v, L, _.value, C)),
        _ !== null &&
          (e && _.alternate !== null && x.delete(_.key === null ? L : _.key),
          (h = o(_, h, L)),
          P === null ? (O = _) : (P.sibling = _),
          (P = _));
    return (
      e &&
        x.forEach(function (U) {
          return t(v, U);
        }),
      De && gr(v, L),
      O
    );
  }
  function E(v, h, m, C) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Qr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case $o:
          e: {
            for (var O = m.key, P = h; P !== null; ) {
              if (P.key === O) {
                if (((O = m.type), O === Qr)) {
                  if (P.tag === 7) {
                    n(v, P.sibling),
                      (h = i(P, m.props.children)),
                      (h.return = v),
                      (v = h);
                    break e;
                  }
                } else if (
                  P.elementType === O ||
                  (typeof O == "object" &&
                    O !== null &&
                    O.$$typeof === Gn &&
                    Fd(O) === P.type)
                ) {
                  n(v, P.sibling),
                    (h = i(P, m.props)),
                    (h.ref = Fi(v, P, m)),
                    (h.return = v),
                    (v = h);
                  break e;
                }
                n(v, P);
                break;
              } else t(v, P);
              P = P.sibling;
            }
            m.type === Qr
              ? ((h = Pr(m.props.children, v.mode, C, m.key)),
                (h.return = v),
                (v = h))
              : ((C = wa(m.type, m.key, m.props, null, v.mode, C)),
                (C.ref = Fi(v, h, m)),
                (C.return = v),
                (v = C));
          }
          return a(v);
        case Br:
          e: {
            for (P = m.key; h !== null; ) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(v, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = v),
                    (v = h);
                  break e;
                } else {
                  n(v, h);
                  break;
                }
              else t(v, h);
              h = h.sibling;
            }
            (h = hs(m, v.mode, C)), (h.return = v), (v = h);
          }
          return a(v);
        case Gn:
          return (P = m._init), E(v, h, P(m._payload), C);
      }
      if (Yi(m)) return y(v, h, m, C);
      if (Mi(m)) return w(v, h, m, C);
      Jo(v, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(v, h.sibling), (h = i(h, m)), (h.return = v), (v = h))
          : (n(v, h), (h = fs(m, v.mode, C)), (h.return = v), (v = h)),
        a(v))
      : n(v, h);
  }
  return E;
}
var hi = Np(!0),
  Tp = Np(!1),
  Aa = mr(null),
  Fa = null,
  Jr = null,
  vc = null;
function yc() {
  vc = Jr = Fa = null;
}
function gc(e) {
  var t = Aa.current;
  Ne(Aa), (e._currentValue = t);
}
function uu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ai(e, t) {
  (Fa = e),
    (vc = Jr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Nt = !0), (e.firstContext = null));
}
function Xt(e) {
  var t = e._currentValue;
  if (vc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jr === null)) {
      if (Fa === null) throw Error(z(308));
      (Jr = e), (Fa.dependencies = { lanes: 0, firstContext: e });
    } else Jr = Jr.next = e;
  return t;
}
var br = null;
function wc(e) {
  br === null ? (br = [e]) : br.push(e);
}
function Rp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), wc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    zn(e, r)
  );
}
function zn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Xn = !1;
function xc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Lp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ln(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ge & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      zn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), wc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    zn(e, n)
  );
}
function ha(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), oc(e, n);
  }
}
function Ud(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ua(e, t, n, r) {
  var i = e.updateQueue;
  Xn = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (o = u) : (a.next = u), (a = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== a &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var f = i.baseState;
    (a = 0), (d = u = s = null), (l = o);
    do {
      var p = l.lane,
        g = l.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            w = l;
          switch (((p = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                f = y.call(g, f, p);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (p = typeof y == "function" ? y.call(g, f, p) : y),
                p == null)
              )
                break e;
              f = He({}, f, p);
              break e;
            case 2:
              Xn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [l]) : p.push(l));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = g), (s = f)) : (d = d.next = g),
          (a |= p);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (p = l),
          (l = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (s = f),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Rr |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function $d(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(z(191, i));
        i.call(r);
      }
    }
}
var Mo = {},
  En = mr(Mo),
  So = mr(Mo),
  bo = mr(Mo);
function Er(e) {
  if (e === Mo) throw Error(z(174));
  return e;
}
function Sc(e, t) {
  switch ((ke(bo, t), ke(So, e), ke(En, Mo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Bs(t, e));
  }
  Ne(En), ke(En, t);
}
function pi() {
  Ne(En), Ne(So), Ne(bo);
}
function Mp(e) {
  Er(bo.current);
  var t = Er(En.current),
    n = Bs(t, e.type);
  t !== n && (ke(So, e), ke(En, n));
}
function bc(e) {
  So.current === e && (Ne(En), Ne(So));
}
var Ue = mr(0);
function $a(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var as = [];
function Ec() {
  for (var e = 0; e < as.length; e++)
    as[e]._workInProgressVersionPrimary = null;
  as.length = 0;
}
var pa = Fn.ReactCurrentDispatcher,
  ls = Fn.ReactCurrentBatchConfig,
  Tr = 0,
  $e = null,
  nt = null,
  it = null,
  Ha = !1,
  ro = !1,
  Eo = 0,
  Wg = 0;
function ft() {
  throw Error(z(321));
}
function Cc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!vn(e[n], t[n])) return !1;
  return !0;
}
function _c(e, t, n, r, i, o) {
  if (
    ((Tr = o),
    ($e = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (pa.current = e === null || e.memoizedState === null ? Yg : Gg),
    (e = n(r, i)),
    ro)
  ) {
    o = 0;
    do {
      if (((ro = !1), (Eo = 0), 25 <= o)) throw Error(z(301));
      (o += 1),
        (it = nt = null),
        (t.updateQueue = null),
        (pa.current = Xg),
        (e = n(r, i));
    } while (ro);
  }
  if (
    ((pa.current = Ba),
    (t = nt !== null && nt.next !== null),
    (Tr = 0),
    (it = nt = $e = null),
    (Ha = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function kc() {
  var e = Eo !== 0;
  return (Eo = 0), e;
}
function xn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return it === null ? ($e.memoizedState = it = e) : (it = it.next = e), it;
}
function Jt() {
  if (nt === null) {
    var e = $e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = nt.next;
  var t = it === null ? $e.memoizedState : it.next;
  if (t !== null) (it = t), (nt = e);
  else {
    if (e === null) throw Error(z(310));
    (nt = e),
      (e = {
        memoizedState: nt.memoizedState,
        baseState: nt.baseState,
        baseQueue: nt.baseQueue,
        queue: nt.queue,
        next: null,
      }),
      it === null ? ($e.memoizedState = it = e) : (it = it.next = e);
  }
  return it;
}
function Co(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ss(e) {
  var t = Jt(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = nt,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      u = o;
    do {
      var d = u.lane;
      if ((Tr & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = f), (a = r)) : (s = s.next = f),
          ($e.lanes |= d),
          (Rr |= d);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (a = r) : (s.next = l),
      vn(r, t.memoizedState) || (Nt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), ($e.lanes |= o), (Rr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function us(e) {
  var t = Jt(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    vn(o, t.memoizedState) || (Nt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Dp() {}
function Ip(e, t) {
  var n = $e,
    r = Jt(),
    i = t(),
    o = !vn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Nt = !0)),
    (r = r.queue),
    Oc(Fp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (it !== null && it.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      _o(9, Ap.bind(null, n, r, i, t), void 0, null),
      ot === null)
    )
      throw Error(z(349));
    Tr & 30 || zp(n, t, i);
  }
  return i;
}
function zp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = $e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($e.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ap(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Up(t) && $p(e);
}
function Fp(e, t, n) {
  return n(function () {
    Up(t) && $p(e);
  });
}
function Up(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vn(e, n);
  } catch {
    return !0;
  }
}
function $p(e) {
  var t = zn(e, 1);
  t !== null && mn(t, e, 1, -1);
}
function Hd(e) {
  var t = xn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Co,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Kg.bind(null, $e, e)),
    [t.memoizedState, e]
  );
}
function _o(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = $e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($e.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Hp() {
  return Jt().memoizedState;
}
function ma(e, t, n, r) {
  var i = xn();
  ($e.flags |= e),
    (i.memoizedState = _o(1 | t, n, void 0, r === void 0 ? null : r));
}
function bl(e, t, n, r) {
  var i = Jt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (nt !== null) {
    var a = nt.memoizedState;
    if (((o = a.destroy), r !== null && Cc(r, a.deps))) {
      i.memoizedState = _o(t, n, o, r);
      return;
    }
  }
  ($e.flags |= e), (i.memoizedState = _o(1 | t, n, o, r));
}
function Bd(e, t) {
  return ma(8390656, 8, e, t);
}
function Oc(e, t) {
  return bl(2048, 8, e, t);
}
function Bp(e, t) {
  return bl(4, 2, e, t);
}
function Qp(e, t) {
  return bl(4, 4, e, t);
}
function Wp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function qp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bl(4, 4, Wp.bind(null, t, e), n)
  );
}
function Pc() {}
function Vp(e, t) {
  var n = Jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Kp(e, t) {
  var n = Jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Yp(e, t, n) {
  return Tr & 21
    ? (vn(n, t) || ((n = ep()), ($e.lanes |= n), (Rr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Nt = !0)), (e.memoizedState = n));
}
function qg(e, t) {
  var n = be;
  (be = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ls.transition;
  ls.transition = {};
  try {
    e(!1), t();
  } finally {
    (be = n), (ls.transition = r);
  }
}
function Gp() {
  return Jt().memoizedState;
}
function Vg(e, t, n) {
  var r = cr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Xp(e))
  )
    Jp(t, n);
  else if (((n = Rp(e, t, n, r)), n !== null)) {
    var i = St();
    mn(n, e, r, i), Zp(n, t, r);
  }
}
function Kg(e, t, n) {
  var r = cr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xp(e)) Jp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = o(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), vn(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), wc(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Rp(e, t, i, r)),
      n !== null && ((i = St()), mn(n, e, r, i), Zp(n, t, r));
  }
}
function Xp(e) {
  var t = e.alternate;
  return e === $e || (t !== null && t === $e);
}
function Jp(e, t) {
  ro = Ha = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Zp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), oc(e, n);
  }
}
var Ba = {
    readContext: Xt,
    useCallback: ft,
    useContext: ft,
    useEffect: ft,
    useImperativeHandle: ft,
    useInsertionEffect: ft,
    useLayoutEffect: ft,
    useMemo: ft,
    useReducer: ft,
    useRef: ft,
    useState: ft,
    useDebugValue: ft,
    useDeferredValue: ft,
    useTransition: ft,
    useMutableSource: ft,
    useSyncExternalStore: ft,
    useId: ft,
    unstable_isNewReconciler: !1,
  },
  Yg = {
    readContext: Xt,
    useCallback: function (e, t) {
      return (xn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Xt,
    useEffect: Bd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ma(4194308, 4, Wp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ma(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ma(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = xn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = xn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Vg.bind(null, $e, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = xn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Hd,
    useDebugValue: Pc,
    useDeferredValue: function (e) {
      return (xn().memoizedState = e);
    },
    useTransition: function () {
      var e = Hd(!1),
        t = e[0];
      return (e = qg.bind(null, e[1])), (xn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $e,
        i = xn();
      if (De) {
        if (n === void 0) throw Error(z(407));
        n = n();
      } else {
        if (((n = t()), ot === null)) throw Error(z(349));
        Tr & 30 || zp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Bd(Fp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        _o(9, Ap.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = xn(),
        t = ot.identifierPrefix;
      if (De) {
        var n = Rn,
          r = Tn;
        (n = (r & ~(1 << (32 - pn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Eo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Wg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gg = {
    readContext: Xt,
    useCallback: Vp,
    useContext: Xt,
    useEffect: Oc,
    useImperativeHandle: qp,
    useInsertionEffect: Bp,
    useLayoutEffect: Qp,
    useMemo: Kp,
    useReducer: ss,
    useRef: Hp,
    useState: function () {
      return ss(Co);
    },
    useDebugValue: Pc,
    useDeferredValue: function (e) {
      var t = Jt();
      return Yp(t, nt.memoizedState, e);
    },
    useTransition: function () {
      var e = ss(Co)[0],
        t = Jt().memoizedState;
      return [e, t];
    },
    useMutableSource: Dp,
    useSyncExternalStore: Ip,
    useId: Gp,
    unstable_isNewReconciler: !1,
  },
  Xg = {
    readContext: Xt,
    useCallback: Vp,
    useContext: Xt,
    useEffect: Oc,
    useImperativeHandle: qp,
    useInsertionEffect: Bp,
    useLayoutEffect: Qp,
    useMemo: Kp,
    useReducer: us,
    useRef: Hp,
    useState: function () {
      return us(Co);
    },
    useDebugValue: Pc,
    useDeferredValue: function (e) {
      var t = Jt();
      return nt === null ? (t.memoizedState = e) : Yp(t, nt.memoizedState, e);
    },
    useTransition: function () {
      var e = us(Co)[0],
        t = Jt().memoizedState;
      return [e, t];
    },
    useMutableSource: Dp,
    useSyncExternalStore: Ip,
    useId: Gp,
    unstable_isNewReconciler: !1,
  };
function cn(e, t) {
  if (e && e.defaultProps) {
    (t = He({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function cu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : He({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var El = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? zr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = St(),
      i = cr(e),
      o = Ln(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = sr(e, o, i)),
      t !== null && (mn(t, e, i, r), ha(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = St(),
      i = cr(e),
      o = Ln(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = sr(e, o, i)),
      t !== null && (mn(t, e, i, r), ha(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = St(),
      r = cr(e),
      i = Ln(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = sr(e, i, r)),
      t !== null && (mn(t, e, r, n), ha(t, e, r));
  },
};
function Qd(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !yo(n, r) || !yo(i, o)
      : !0
  );
}
function em(e, t, n) {
  var r = !1,
    i = hr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Xt(o))
      : ((i = Rt(t) ? jr : mt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? di(e, i) : hr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = El),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Wd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null);
}
function du(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), xc(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Xt(o))
    : ((o = Rt(t) ? jr : mt.current), (i.context = di(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (cu(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && El.enqueueReplaceState(i, i.state, null),
      Ua(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function mi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += _y(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function cs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function fu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jg = typeof WeakMap == "function" ? WeakMap : Map;
function tm(e, t, n) {
  (n = Ln(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Wa || ((Wa = !0), (bu = r)), fu(e, t);
    }),
    n
  );
}
function nm(e, t, n) {
  (n = Ln(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        fu(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        fu(e, t),
          typeof r != "function" &&
            (ur === null ? (ur = new Set([this])) : ur.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function qd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = f0.bind(null, e, t, n)), t.then(e, e));
}
function Vd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Kd(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ln(-1, 1)), (t.tag = 2), sr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Zg = Fn.ReactCurrentOwner,
  Nt = !1;
function wt(e, t, n, r) {
  t.child = e === null ? Tp(t, null, n, r) : hi(t, e.child, n, r);
}
function Yd(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    ai(t, i),
    (r = _c(e, t, n, r, o, i)),
    (n = kc()),
    e !== null && !Nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        An(e, t, i))
      : (De && n && hc(t), (t.flags |= 1), wt(e, t, r, i), t.child)
  );
}
function Gd(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ic(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), rm(e, t, o, r, i))
      : ((e = wa(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : yo), n(a, r) && e.ref === t.ref)
    )
      return An(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = dr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function rm(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (yo(o, r) && e.ref === t.ref)
      if (((Nt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Nt = !0);
      else return (t.lanes = e.lanes), An(e, t, i);
  }
  return hu(e, t, n, r, i);
}
function im(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ke(ei, zt),
        (zt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ke(ei, zt),
          (zt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ke(ei, zt),
        (zt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ke(ei, zt),
      (zt |= r);
  return wt(e, t, i, n), t.child;
}
function om(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function hu(e, t, n, r, i) {
  var o = Rt(n) ? jr : mt.current;
  return (
    (o = di(t, o)),
    ai(t, i),
    (n = _c(e, t, n, r, o, i)),
    (r = kc()),
    e !== null && !Nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        An(e, t, i))
      : (De && r && hc(t), (t.flags |= 1), wt(e, t, n, i), t.child)
  );
}
function Xd(e, t, n, r, i) {
  if (Rt(n)) {
    var o = !0;
    Da(t);
  } else o = !1;
  if ((ai(t, i), t.stateNode === null))
    va(e, t), em(t, n, r), du(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Xt(u))
      : ((u = Rt(n) ? jr : mt.current), (u = di(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || s !== u) && Wd(t, a, r, u)),
      (Xn = !1);
    var p = t.memoizedState;
    (a.state = p),
      Ua(t, r, a, i),
      (s = t.memoizedState),
      l !== r || p !== s || Tt.current || Xn
        ? (typeof d == "function" && (cu(t, n, d, r), (s = t.memoizedState)),
          (l = Xn || Qd(t, n, l, r, p, s, u))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Lp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : cn(t.type, l)),
      (a.props = u),
      (f = t.pendingProps),
      (p = a.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Xt(s))
        : ((s = Rt(n) ? jr : mt.current), (s = di(t, s)));
    var g = n.getDerivedStateFromProps;
    (d =
      typeof g == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== f || p !== s) && Wd(t, a, r, s)),
      (Xn = !1),
      (p = t.memoizedState),
      (a.state = p),
      Ua(t, r, a, i);
    var y = t.memoizedState;
    l !== f || p !== y || Tt.current || Xn
      ? (typeof g == "function" && (cu(t, n, g, r), (y = t.memoizedState)),
        (u = Xn || Qd(t, n, u, r, p, y, s) || !1)
          ? (d ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, y, s),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, y, s)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return pu(e, t, n, r, o, i);
}
function pu(e, t, n, r, i, o) {
  om(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && Id(t, n, !1), An(e, t, o);
  (r = t.stateNode), (Zg.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = hi(t, e.child, null, o)), (t.child = hi(t, null, l, o)))
      : wt(e, t, l, o),
    (t.memoizedState = r.state),
    i && Id(t, n, !0),
    t.child
  );
}
function am(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Dd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Dd(e, t.context, !1),
    Sc(e, t.containerInfo);
}
function Jd(e, t, n, r, i) {
  return fi(), mc(i), (t.flags |= 256), wt(e, t, n, r), t.child;
}
var mu = { dehydrated: null, treeContext: null, retryLane: 0 };
function vu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lm(e, t, n) {
  var r = t.pendingProps,
    i = Ue.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ke(Ue, i & 1),
    e === null)
  )
    return (
      su(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = kl(a, r, 0, null)),
              (e = Pr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = vu(n)),
              (t.memoizedState = mu),
              e)
            : jc(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return e0(e, t, a, r, l, i, n);
  if (o) {
    (o = r.fallback), (a = t.mode), (i = e.child), (l = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dr(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = dr(l, o)) : ((o = Pr(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? vu(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = mu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dr(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function jc(e, t) {
  return (
    (t = kl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zo(e, t, n, r) {
  return (
    r !== null && mc(r),
    hi(t, e.child, null, n),
    (e = jc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function e0(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = cs(Error(z(422)))), Zo(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = kl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Pr(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && hi(t, e.child, null, a),
        (t.child.memoizedState = vu(a)),
        (t.memoizedState = mu),
        o);
  if (!(t.mode & 1)) return Zo(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(z(419))), (r = cs(o, r, void 0)), Zo(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), Nt || l)) {
    if (((r = ot), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), zn(e, i), mn(r, e, i, -1));
    }
    return Dc(), (r = cs(Error(z(421)))), Zo(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = h0.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (At = lr(i.nextSibling)),
      (Ft = t),
      (De = !0),
      (hn = null),
      e !== null &&
        ((qt[Vt++] = Tn),
        (qt[Vt++] = Rn),
        (qt[Vt++] = Nr),
        (Tn = e.id),
        (Rn = e.overflow),
        (Nr = t)),
      (t = jc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), uu(e.return, t, n);
}
function ds(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function sm(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((wt(e, t, r.children, n), (r = Ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zd(e, n, t);
        else if (e.tag === 19) Zd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ke(Ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && $a(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ds(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && $a(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ds(t, !0, n, null, o);
        break;
      case "together":
        ds(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function va(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function An(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Rr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function t0(e, t, n) {
  switch (t.tag) {
    case 3:
      am(t), fi();
      break;
    case 5:
      Mp(t);
      break;
    case 1:
      Rt(t.type) && Da(t);
      break;
    case 4:
      Sc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ke(Aa, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ke(Ue, Ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? lm(e, t, n)
          : (ke(Ue, Ue.current & 1),
            (e = An(e, t, n)),
            e !== null ? e.sibling : null);
      ke(Ue, Ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ke(Ue, Ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), im(e, t, n);
  }
  return An(e, t, n);
}
var um, yu, cm, dm;
um = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
yu = function () {};
cm = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Er(En.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Fs(e, i)), (r = Fs(e, r)), (o = []);
        break;
      case "select":
        (i = He({}, i, { value: void 0 })),
          (r = He({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Hs(e, i)), (r = Hs(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = La);
    }
    Qs(n, r);
    var a;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (uo.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (o || (o = []), o.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (o = o || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (uo.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && je("scroll", e),
                  o || l === s || (o = []))
                : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
dm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ui(e, t) {
  if (!De)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ht(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function n0(e, t, n) {
  var r = t.pendingProps;
  switch ((pc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ht(t), null;
    case 1:
      return Rt(t.type) && Ma(), ht(t), null;
    case 3:
      return (
        (r = t.stateNode),
        pi(),
        Ne(Tt),
        Ne(mt),
        Ec(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), hn !== null && (_u(hn), (hn = null)))),
        yu(e, t),
        ht(t),
        null
      );
    case 5:
      bc(t);
      var i = Er(bo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        cm(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return ht(t), null;
        }
        if (((e = Er(En.current)), Xo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Sn] = t), (r[xo] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              je("cancel", r), je("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              je("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Xi.length; i++) je(Xi[i], r);
              break;
            case "source":
              je("error", r);
              break;
            case "img":
            case "image":
            case "link":
              je("error", r), je("load", r);
              break;
            case "details":
              je("toggle", r);
              break;
            case "input":
              sd(r, o), je("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                je("invalid", r);
              break;
            case "textarea":
              cd(r, o), je("invalid", r);
          }
          Qs(n, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var l = o[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Go(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Go(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : uo.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  je("scroll", r);
            }
          switch (n) {
            case "input":
              Ho(r), ud(r, o, !0);
              break;
            case "textarea":
              Ho(r), dd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = La);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Sn] = t),
            (e[xo] = r),
            um(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Ws(n, r)), n)) {
              case "dialog":
                je("cancel", e), je("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                je("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Xi.length; i++) je(Xi[i], e);
                i = r;
                break;
              case "source":
                je("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                je("error", e), je("load", e), (i = r);
                break;
              case "details":
                je("toggle", e), (i = r);
                break;
              case "input":
                sd(e, r), (i = Fs(e, r)), je("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = He({}, r, { value: void 0 })),
                  je("invalid", e);
                break;
              case "textarea":
                cd(e, r), (i = Hs(e, r)), je("invalid", e);
                break;
              default:
                i = r;
            }
            Qs(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var s = l[o];
                o === "style"
                  ? Hh(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Uh(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && co(e, s)
                    : typeof s == "number" && co(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (uo.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && je("scroll", e)
                      : s != null && Zu(e, o, s, a));
              }
            switch (n) {
              case "input":
                Ho(e), ud(e, r, !1);
                break;
              case "textarea":
                Ho(e), dd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? ni(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      ni(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = La);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ht(t), null;
    case 6:
      if (e && t.stateNode != null) dm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (((n = Er(bo.current)), Er(En.current), Xo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Sn] = t),
            (o = r.nodeValue !== n) && ((e = Ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                Go(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Go(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Sn] = t),
            (t.stateNode = r);
      }
      return ht(t), null;
    case 13:
      if (
        (Ne(Ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (De && At !== null && t.mode & 1 && !(t.flags & 128))
          jp(), fi(), (t.flags |= 98560), (o = !1);
        else if (((o = Xo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(z(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(z(317));
            o[Sn] = t;
          } else
            fi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ht(t), (o = !1);
        } else hn !== null && (_u(hn), (hn = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ue.current & 1 ? rt === 0 && (rt = 3) : Dc())),
          t.updateQueue !== null && (t.flags |= 4),
          ht(t),
          null);
    case 4:
      return (
        pi(), yu(e, t), e === null && go(t.stateNode.containerInfo), ht(t), null
      );
    case 10:
      return gc(t.type._context), ht(t), null;
    case 17:
      return Rt(t.type) && Ma(), ht(t), null;
    case 19:
      if ((Ne(Ue), (o = t.memoizedState), o === null)) return ht(t), null;
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) Ui(o, !1);
        else {
          if (rt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = $a(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Ui(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ke(Ue, (Ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ke() > vi &&
            ((t.flags |= 128), (r = !0), Ui(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = $a(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ui(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !De)
            )
              return ht(t), null;
          } else
            2 * Ke() - o.renderingStartTime > vi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ui(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ke()),
          (t.sibling = null),
          (n = Ue.current),
          ke(Ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (ht(t), null);
    case 22:
    case 23:
      return (
        Mc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? zt & 1073741824 && (ht(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ht(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function r0(e, t) {
  switch ((pc(t), t.tag)) {
    case 1:
      return (
        Rt(t.type) && Ma(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        pi(),
        Ne(Tt),
        Ne(mt),
        Ec(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bc(t), null;
    case 13:
      if (
        (Ne(Ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(z(340));
        fi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ne(Ue), null;
    case 4:
      return pi(), null;
    case 10:
      return gc(t.type._context), null;
    case 22:
    case 23:
      return Mc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ea = !1,
  pt = !1,
  i0 = typeof WeakSet == "function" ? WeakSet : Set,
  X = null;
function Zr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Qe(e, t, r);
      }
    else n.current = null;
}
function gu(e, t, n) {
  try {
    n();
  } catch (r) {
    Qe(e, t, r);
  }
}
var ef = !1;
function o0(e, t) {
  if (((tu = Na), (e = vp()), fc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            d = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = a + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (s = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (p = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++u === i && (l = a),
                p === o && ++d === r && (s = a),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = g;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (nu = { focusedElem: e, selectionRange: n }, Na = !1, X = t; X !== null; )
    if (((t = X), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (X = e);
    else
      for (; X !== null; ) {
        t = X;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    E = y.memoizedState,
                    v = t.stateNode,
                    h = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : cn(t.type, w),
                      E
                    );
                  v.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (C) {
          Qe(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (X = e);
          break;
        }
        X = t.return;
      }
  return (y = ef), (ef = !1), y;
}
function io(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && gu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Cl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function wu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function fm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), fm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Sn], delete t[xo], delete t[ou], delete t[$g], delete t[Hg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function hm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function xu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = La));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xu(e, t, n), e = e.sibling; e !== null; ) xu(e, t, n), (e = e.sibling);
}
function Su(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Su(e, t, n), e = e.sibling; e !== null; ) Su(e, t, n), (e = e.sibling);
}
var lt = null,
  dn = !1;
function Kn(e, t, n) {
  for (n = n.child; n !== null; ) pm(e, t, n), (n = n.sibling);
}
function pm(e, t, n) {
  if (bn && typeof bn.onCommitFiberUnmount == "function")
    try {
      bn.onCommitFiberUnmount(vl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pt || Zr(n, t);
    case 6:
      var r = lt,
        i = dn;
      (lt = null),
        Kn(e, t, n),
        (lt = r),
        (dn = i),
        lt !== null &&
          (dn
            ? ((e = lt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : lt.removeChild(n.stateNode));
      break;
    case 18:
      lt !== null &&
        (dn
          ? ((e = lt),
            (n = n.stateNode),
            e.nodeType === 8
              ? is(e.parentNode, n)
              : e.nodeType === 1 && is(e, n),
            mo(e))
          : is(lt, n.stateNode));
      break;
    case 4:
      (r = lt),
        (i = dn),
        (lt = n.stateNode.containerInfo),
        (dn = !0),
        Kn(e, t, n),
        (lt = r),
        (dn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && gu(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      Kn(e, t, n);
      break;
    case 1:
      if (
        !pt &&
        (Zr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Qe(n, t, l);
        }
      Kn(e, t, n);
      break;
    case 21:
      Kn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pt = (r = pt) || n.memoizedState !== null), Kn(e, t, n), (pt = r))
        : Kn(e, t, n);
      break;
    default:
      Kn(e, t, n);
  }
}
function nf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new i0()),
      t.forEach(function (r) {
        var i = p0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ln(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (lt = l.stateNode), (dn = !1);
              break e;
            case 3:
              (lt = l.stateNode.containerInfo), (dn = !0);
              break e;
            case 4:
              (lt = l.stateNode.containerInfo), (dn = !0);
              break e;
          }
          l = l.return;
        }
        if (lt === null) throw Error(z(160));
        pm(o, a, i), (lt = null), (dn = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        Qe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) mm(t, e), (t = t.sibling);
}
function mm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ln(t, e), wn(e), r & 4)) {
        try {
          io(3, e, e.return), Cl(3, e);
        } catch (w) {
          Qe(e, e.return, w);
        }
        try {
          io(5, e, e.return);
        } catch (w) {
          Qe(e, e.return, w);
        }
      }
      break;
    case 1:
      ln(t, e), wn(e), r & 512 && n !== null && Zr(n, n.return);
      break;
    case 5:
      if (
        (ln(t, e),
        wn(e),
        r & 512 && n !== null && Zr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          co(i, "");
        } catch (w) {
          Qe(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && zh(i, o),
              Ws(l, a);
            var u = Ws(l, o);
            for (a = 0; a < s.length; a += 2) {
              var d = s[a],
                f = s[a + 1];
              d === "style"
                ? Hh(i, f)
                : d === "dangerouslySetInnerHTML"
                ? Uh(i, f)
                : d === "children"
                ? co(i, f)
                : Zu(i, d, f, u);
            }
            switch (l) {
              case "input":
                Us(i, o);
                break;
              case "textarea":
                Ah(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? ni(i, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ni(i, !!o.multiple, o.defaultValue, !0)
                      : ni(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[xo] = o;
          } catch (w) {
            Qe(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((ln(t, e), wn(e), r & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (w) {
          Qe(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (ln(t, e), wn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          mo(t.containerInfo);
        } catch (w) {
          Qe(e, e.return, w);
        }
      break;
    case 4:
      ln(t, e), wn(e);
      break;
    case 13:
      ln(t, e),
        wn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Rc = Ke())),
        r & 4 && nf(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pt = (u = pt) || d), ln(t, e), (pt = u)) : ln(t, e),
        wn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (X = e, d = e.child; d !== null; ) {
            for (f = X = d; X !== null; ) {
              switch (((p = X), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  io(4, p, p.return);
                  break;
                case 1:
                  Zr(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      Qe(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Zr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    of(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (X = g)) : of(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (s = f.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = $h("display", a)));
              } catch (w) {
                Qe(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (w) {
                Qe(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ln(t, e), wn(e), r & 4 && nf(e);
      break;
    case 21:
      break;
    default:
      ln(t, e), wn(e);
  }
}
function wn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (co(i, ""), (r.flags &= -33));
          var o = tf(e);
          Su(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = tf(e);
          xu(e, l, a);
          break;
        default:
          throw Error(z(161));
      }
    } catch (s) {
      Qe(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function a0(e, t, n) {
  (X = e), vm(e);
}
function vm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; X !== null; ) {
    var i = X,
      o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || ea;
      if (!a) {
        var l = i.alternate,
          s = (l !== null && l.memoizedState !== null) || pt;
        l = ea;
        var u = pt;
        if (((ea = a), (pt = s) && !u))
          for (X = i; X !== null; )
            (a = X),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? af(i)
                : s !== null
                ? ((s.return = a), (X = s))
                : af(i);
        for (; o !== null; ) (X = o), vm(o), (o = o.sibling);
        (X = i), (ea = l), (pt = u);
      }
      rf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (X = o)) : rf(e);
  }
}
function rf(e) {
  for (; X !== null; ) {
    var t = X;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pt || Cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : cn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && $d(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                $d(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && mo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
        pt || (t.flags & 512 && wu(t));
      } catch (p) {
        Qe(t, t.return, p);
      }
    }
    if (t === e) {
      X = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (X = n);
      break;
    }
    X = t.return;
  }
}
function of(e) {
  for (; X !== null; ) {
    var t = X;
    if (t === e) {
      X = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (X = n);
      break;
    }
    X = t.return;
  }
}
function af(e) {
  for (; X !== null; ) {
    var t = X;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cl(4, t);
          } catch (s) {
            Qe(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Qe(t, i, s);
            }
          }
          var o = t.return;
          try {
            wu(t);
          } catch (s) {
            Qe(t, o, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            wu(t);
          } catch (s) {
            Qe(t, a, s);
          }
      }
    } catch (s) {
      Qe(t, t.return, s);
    }
    if (t === e) {
      X = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (X = l);
      break;
    }
    X = t.return;
  }
}
var l0 = Math.ceil,
  Qa = Fn.ReactCurrentDispatcher,
  Nc = Fn.ReactCurrentOwner,
  Gt = Fn.ReactCurrentBatchConfig,
  ge = 0,
  ot = null,
  Xe = null,
  ut = 0,
  zt = 0,
  ei = mr(0),
  rt = 0,
  ko = null,
  Rr = 0,
  _l = 0,
  Tc = 0,
  oo = null,
  Pt = null,
  Rc = 0,
  vi = 1 / 0,
  jn = null,
  Wa = !1,
  bu = null,
  ur = null,
  ta = !1,
  rr = null,
  qa = 0,
  ao = 0,
  Eu = null,
  ya = -1,
  ga = 0;
function St() {
  return ge & 6 ? Ke() : ya !== -1 ? ya : (ya = Ke());
}
function cr(e) {
  return e.mode & 1
    ? ge & 2 && ut !== 0
      ? ut & -ut
      : Qg.transition !== null
      ? (ga === 0 && (ga = ep()), ga)
      : ((e = be),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lp(e.type))),
        e)
    : 1;
}
function mn(e, t, n, r) {
  if (50 < ao) throw ((ao = 0), (Eu = null), Error(z(185)));
  To(e, n, r),
    (!(ge & 2) || e !== ot) &&
      (e === ot && (!(ge & 2) && (_l |= n), rt === 4 && tr(e, ut)),
      Lt(e, r),
      n === 1 && ge === 0 && !(t.mode & 1) && ((vi = Ke() + 500), Sl && vr()));
}
function Lt(e, t) {
  var n = e.callbackNode;
  Qy(e, t);
  var r = ja(e, e === ot ? ut : 0);
  if (r === 0)
    n !== null && pd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && pd(n), t === 1))
      e.tag === 0 ? Bg(lf.bind(null, e)) : kp(lf.bind(null, e)),
        Fg(function () {
          !(ge & 6) && vr();
        }),
        (n = null);
    else {
      switch (tp(r)) {
        case 1:
          n = ic;
          break;
        case 4:
          n = Jh;
          break;
        case 16:
          n = Pa;
          break;
        case 536870912:
          n = Zh;
          break;
        default:
          n = Pa;
      }
      n = Cm(n, ym.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ym(e, t) {
  if (((ya = -1), (ga = 0), ge & 6)) throw Error(z(327));
  var n = e.callbackNode;
  if (li() && e.callbackNode !== n) return null;
  var r = ja(e, e === ot ? ut : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Va(e, r);
  else {
    t = r;
    var i = ge;
    ge |= 2;
    var o = wm();
    (ot !== e || ut !== t) && ((jn = null), (vi = Ke() + 500), Or(e, t));
    do
      try {
        c0();
        break;
      } catch (l) {
        gm(e, l);
      }
    while (!0);
    yc(),
      (Qa.current = o),
      (ge = i),
      Xe !== null ? (t = 0) : ((ot = null), (ut = 0), (t = rt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Gs(e)), i !== 0 && ((r = i), (t = Cu(e, i)))), t === 1)
    )
      throw ((n = ko), Or(e, 0), tr(e, r), Lt(e, Ke()), n);
    if (t === 6) tr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !s0(i) &&
          ((t = Va(e, r)),
          t === 2 && ((o = Gs(e)), o !== 0 && ((r = o), (t = Cu(e, o)))),
          t === 1))
      )
        throw ((n = ko), Or(e, 0), tr(e, r), Lt(e, Ke()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          wr(e, Pt, jn);
          break;
        case 3:
          if (
            (tr(e, r), (r & 130023424) === r && ((t = Rc + 500 - Ke()), 10 < t))
          ) {
            if (ja(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              St(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = iu(wr.bind(null, e, Pt, jn), t);
            break;
          }
          wr(e, Pt, jn);
          break;
        case 4:
          if ((tr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - pn(r);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ke() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * l0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = iu(wr.bind(null, e, Pt, jn), r);
            break;
          }
          wr(e, Pt, jn);
          break;
        case 5:
          wr(e, Pt, jn);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Lt(e, Ke()), e.callbackNode === n ? ym.bind(null, e) : null;
}
function Cu(e, t) {
  var n = oo;
  return (
    e.current.memoizedState.isDehydrated && (Or(e, t).flags |= 256),
    (e = Va(e, t)),
    e !== 2 && ((t = Pt), (Pt = n), t !== null && _u(t)),
    e
  );
}
function _u(e) {
  Pt === null ? (Pt = e) : Pt.push.apply(Pt, e);
}
function s0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!vn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tr(e, t) {
  for (
    t &= ~Tc,
      t &= ~_l,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - pn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function lf(e) {
  if (ge & 6) throw Error(z(327));
  li();
  var t = ja(e, 0);
  if (!(t & 1)) return Lt(e, Ke()), null;
  var n = Va(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Gs(e);
    r !== 0 && ((t = r), (n = Cu(e, r)));
  }
  if (n === 1) throw ((n = ko), Or(e, 0), tr(e, t), Lt(e, Ke()), n);
  if (n === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wr(e, Pt, jn),
    Lt(e, Ke()),
    null
  );
}
function Lc(e, t) {
  var n = ge;
  ge |= 1;
  try {
    return e(t);
  } finally {
    (ge = n), ge === 0 && ((vi = Ke() + 500), Sl && vr());
  }
}
function Lr(e) {
  rr !== null && rr.tag === 0 && !(ge & 6) && li();
  var t = ge;
  ge |= 1;
  var n = Gt.transition,
    r = be;
  try {
    if (((Gt.transition = null), (be = 1), e)) return e();
  } finally {
    (be = r), (Gt.transition = n), (ge = t), !(ge & 6) && vr();
  }
}
function Mc() {
  (zt = ei.current), Ne(ei);
}
function Or(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ag(n)), Xe !== null))
    for (n = Xe.return; n !== null; ) {
      var r = n;
      switch ((pc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ma();
          break;
        case 3:
          pi(), Ne(Tt), Ne(mt), Ec();
          break;
        case 5:
          bc(r);
          break;
        case 4:
          pi();
          break;
        case 13:
          Ne(Ue);
          break;
        case 19:
          Ne(Ue);
          break;
        case 10:
          gc(r.type._context);
          break;
        case 22:
        case 23:
          Mc();
      }
      n = n.return;
    }
  if (
    ((ot = e),
    (Xe = e = dr(e.current, null)),
    (ut = zt = t),
    (rt = 0),
    (ko = null),
    (Tc = _l = Rr = 0),
    (Pt = oo = null),
    br !== null)
  ) {
    for (t = 0; t < br.length; t++)
      if (((n = br[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (r.next = a);
        }
        n.pending = r;
      }
    br = null;
  }
  return e;
}
function gm(e, t) {
  do {
    var n = Xe;
    try {
      if ((yc(), (pa.current = Ba), Ha)) {
        for (var r = $e.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ha = !1;
      }
      if (
        ((Tr = 0),
        (it = nt = $e = null),
        (ro = !1),
        (Eo = 0),
        (Nc.current = null),
        n === null || n.return === null)
      ) {
        (rt = 1), (ko = t), (Xe = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
          l = n,
          s = t;
        if (
          ((t = ut),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = Vd(a);
          if (g !== null) {
            (g.flags &= -257),
              Kd(g, a, l, o, t),
              g.mode & 1 && qd(o, u, t),
              (t = g),
              (s = u);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              qd(o, u, t), Dc();
              break e;
            }
            s = Error(z(426));
          }
        } else if (De && l.mode & 1) {
          var E = Vd(a);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Kd(E, a, l, o, t),
              mc(mi(s, l));
            break e;
          }
        }
        (o = s = mi(s, l)),
          rt !== 4 && (rt = 2),
          oo === null ? (oo = [o]) : oo.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var v = tm(o, s, t);
              Ud(o, v);
              break e;
            case 1:
              l = s;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (ur === null || !ur.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var C = nm(o, l, t);
                Ud(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Sm(n);
    } catch (O) {
      (t = O), Xe === n && n !== null && (Xe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function wm() {
  var e = Qa.current;
  return (Qa.current = Ba), e === null ? Ba : e;
}
function Dc() {
  (rt === 0 || rt === 3 || rt === 2) && (rt = 4),
    ot === null || (!(Rr & 268435455) && !(_l & 268435455)) || tr(ot, ut);
}
function Va(e, t) {
  var n = ge;
  ge |= 2;
  var r = wm();
  (ot !== e || ut !== t) && ((jn = null), Or(e, t));
  do
    try {
      u0();
      break;
    } catch (i) {
      gm(e, i);
    }
  while (!0);
  if ((yc(), (ge = n), (Qa.current = r), Xe !== null)) throw Error(z(261));
  return (ot = null), (ut = 0), rt;
}
function u0() {
  for (; Xe !== null; ) xm(Xe);
}
function c0() {
  for (; Xe !== null && !Dy(); ) xm(Xe);
}
function xm(e) {
  var t = Em(e.alternate, e, zt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sm(e) : (Xe = t),
    (Nc.current = null);
}
function Sm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = r0(n, t)), n !== null)) {
        (n.flags &= 32767), (Xe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (rt = 6), (Xe = null);
        return;
      }
    } else if (((n = n0(n, t, zt)), n !== null)) {
      Xe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Xe = t;
      return;
    }
    Xe = t = e;
  } while (t !== null);
  rt === 0 && (rt = 5);
}
function wr(e, t, n) {
  var r = be,
    i = Gt.transition;
  try {
    (Gt.transition = null), (be = 1), d0(e, t, n, r);
  } finally {
    (Gt.transition = i), (be = r);
  }
  return null;
}
function d0(e, t, n, r) {
  do li();
  while (rr !== null);
  if (ge & 6) throw Error(z(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Wy(e, o),
    e === ot && ((Xe = ot = null), (ut = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ta ||
      ((ta = !0),
      Cm(Pa, function () {
        return li(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Gt.transition), (Gt.transition = null);
    var a = be;
    be = 1;
    var l = ge;
    (ge |= 4),
      (Nc.current = null),
      o0(e, n),
      mm(n, e),
      Tg(nu),
      (Na = !!tu),
      (nu = tu = null),
      (e.current = n),
      a0(n),
      Iy(),
      (ge = l),
      (be = a),
      (Gt.transition = o);
  } else e.current = n;
  if (
    (ta && ((ta = !1), (rr = e), (qa = i)),
    (o = e.pendingLanes),
    o === 0 && (ur = null),
    Fy(n.stateNode),
    Lt(e, Ke()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Wa) throw ((Wa = !1), (e = bu), (bu = null), e);
  return (
    qa & 1 && e.tag !== 0 && li(),
    (o = e.pendingLanes),
    o & 1 ? (e === Eu ? ao++ : ((ao = 0), (Eu = e))) : (ao = 0),
    vr(),
    null
  );
}
function li() {
  if (rr !== null) {
    var e = tp(qa),
      t = Gt.transition,
      n = be;
    try {
      if (((Gt.transition = null), (be = 16 > e ? 16 : e), rr === null))
        var r = !1;
      else {
        if (((e = rr), (rr = null), (qa = 0), ge & 6)) throw Error(z(331));
        var i = ge;
        for (ge |= 4, X = e.current; X !== null; ) {
          var o = X,
            a = o.child;
          if (X.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (X = u; X !== null; ) {
                  var d = X;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      io(8, d, o);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (X = f);
                  else
                    for (; X !== null; ) {
                      d = X;
                      var p = d.sibling,
                        g = d.return;
                      if ((fm(d), d === u)) {
                        X = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (X = p);
                        break;
                      }
                      X = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var E = w.sibling;
                    (w.sibling = null), (w = E);
                  } while (w !== null);
                }
              }
              X = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (X = a);
          else
            e: for (; X !== null; ) {
              if (((o = X), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    io(9, o, o.return);
                }
              var v = o.sibling;
              if (v !== null) {
                (v.return = o.return), (X = v);
                break e;
              }
              X = o.return;
            }
        }
        var h = e.current;
        for (X = h; X !== null; ) {
          a = X;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (X = m);
          else
            e: for (a = h; X !== null; ) {
              if (((l = X), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, l);
                  }
                } catch (O) {
                  Qe(l, l.return, O);
                }
              if (l === a) {
                X = null;
                break e;
              }
              var C = l.sibling;
              if (C !== null) {
                (C.return = l.return), (X = C);
                break e;
              }
              X = l.return;
            }
        }
        if (
          ((ge = i), vr(), bn && typeof bn.onPostCommitFiberRoot == "function")
        )
          try {
            bn.onPostCommitFiberRoot(vl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (be = n), (Gt.transition = t);
    }
  }
  return !1;
}
function sf(e, t, n) {
  (t = mi(n, t)),
    (t = tm(e, t, 1)),
    (e = sr(e, t, 1)),
    (t = St()),
    e !== null && (To(e, 1, t), Lt(e, t));
}
function Qe(e, t, n) {
  if (e.tag === 3) sf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        sf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ur === null || !ur.has(r)))
        ) {
          (e = mi(n, e)),
            (e = nm(t, e, 1)),
            (t = sr(t, e, 1)),
            (e = St()),
            t !== null && (To(t, 1, e), Lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function f0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = St()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ot === e &&
      (ut & n) === n &&
      (rt === 4 || (rt === 3 && (ut & 130023424) === ut && 500 > Ke() - Rc)
        ? Or(e, 0)
        : (Tc |= n)),
    Lt(e, t);
}
function bm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Wo), (Wo <<= 1), !(Wo & 130023424) && (Wo = 4194304))
      : (t = 1));
  var n = St();
  (e = zn(e, t)), e !== null && (To(e, t, n), Lt(e, n));
}
function h0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bm(e, n);
}
function p0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  r !== null && r.delete(t), bm(e, n);
}
var Em;
Em = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Tt.current) Nt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Nt = !1), t0(e, t, n);
      Nt = !!(e.flags & 131072);
    }
  else (Nt = !1), De && t.flags & 1048576 && Op(t, za, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      va(e, t), (e = t.pendingProps);
      var i = di(t, mt.current);
      ai(t, n), (i = _c(null, t, r, e, i, n));
      var o = kc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Rt(r) ? ((o = !0), Da(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            xc(t),
            (i.updater = El),
            (t.stateNode = i),
            (i._reactInternals = t),
            du(t, r, e, n),
            (t = pu(null, t, r, !0, o, n)))
          : ((t.tag = 0), De && o && hc(t), wt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (va(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = v0(r)),
          (e = cn(r, e)),
          i)
        ) {
          case 0:
            t = hu(null, t, r, e, n);
            break e;
          case 1:
            t = Xd(null, t, r, e, n);
            break e;
          case 11:
            t = Yd(null, t, r, e, n);
            break e;
          case 14:
            t = Gd(null, t, r, cn(r.type, e), n);
            break e;
        }
        throw Error(z(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : cn(r, i)),
        hu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : cn(r, i)),
        Xd(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((am(t), e === null)) throw Error(z(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Lp(e, t),
          Ua(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = mi(Error(z(423)), t)), (t = Jd(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = mi(Error(z(424)), t)), (t = Jd(e, t, r, n, i));
            break e;
          } else
            for (
              At = lr(t.stateNode.containerInfo.firstChild),
                Ft = t,
                De = !0,
                hn = null,
                n = Tp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((fi(), r === i)) {
            t = An(e, t, n);
            break e;
          }
          wt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Mp(t),
        e === null && su(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        ru(r, i) ? (a = null) : o !== null && ru(r, o) && (t.flags |= 32),
        om(e, t),
        wt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && su(t), null;
    case 13:
      return lm(e, t, n);
    case 4:
      return (
        Sc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hi(t, null, r, n)) : wt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : cn(r, i)),
        Yd(e, t, r, i, n)
      );
    case 7:
      return wt(e, t, t.pendingProps, n), t.child;
    case 8:
      return wt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return wt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          ke(Aa, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (vn(o.value, a)) {
            if (o.children === i.children && !Tt.current) {
              t = An(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                a = o.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ln(-1, n & -n)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      uu(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(z(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  uu(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        wt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ai(t, n),
        (i = Xt(i)),
        (r = r(i)),
        (t.flags |= 1),
        wt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = cn(r, t.pendingProps)),
        (i = cn(r.type, i)),
        Gd(e, t, r, i, n)
      );
    case 15:
      return rm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : cn(r, i)),
        va(e, t),
        (t.tag = 1),
        Rt(r) ? ((e = !0), Da(t)) : (e = !1),
        ai(t, n),
        em(t, r, i),
        du(t, r, i, n),
        pu(null, t, r, !0, e, n)
      );
    case 19:
      return sm(e, t, n);
    case 22:
      return im(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function Cm(e, t) {
  return Xh(e, t);
}
function m0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Yt(e, t, n, r) {
  return new m0(e, t, n, r);
}
function Ic(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function v0(e) {
  if (typeof e == "function") return Ic(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === tc)) return 11;
    if (e === nc) return 14;
  }
  return 2;
}
function dr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Yt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function wa(e, t, n, r, i, o) {
  var a = 2;
  if (((r = e), typeof e == "function")) Ic(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Qr:
        return Pr(n.children, i, o, t);
      case ec:
        (a = 8), (i |= 8);
        break;
      case Ds:
        return (
          (e = Yt(12, n, t, i | 2)), (e.elementType = Ds), (e.lanes = o), e
        );
      case Is:
        return (e = Yt(13, n, t, i)), (e.elementType = Is), (e.lanes = o), e;
      case zs:
        return (e = Yt(19, n, t, i)), (e.elementType = zs), (e.lanes = o), e;
      case Mh:
        return kl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rh:
              a = 10;
              break e;
            case Lh:
              a = 9;
              break e;
            case tc:
              a = 11;
              break e;
            case nc:
              a = 14;
              break e;
            case Gn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Yt(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Pr(e, t, n, r) {
  return (e = Yt(7, e, r, t)), (e.lanes = n), e;
}
function kl(e, t, n, r) {
  return (
    (e = Yt(22, e, r, t)),
    (e.elementType = Mh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fs(e, t, n) {
  return (e = Yt(6, e, null, t)), (e.lanes = n), e;
}
function hs(e, t, n) {
  return (
    (t = Yt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function y0(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Vl(0)),
    (this.expirationTimes = Vl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Vl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function zc(e, t, n, r, i, o, a, l, s) {
  return (
    (e = new y0(e, t, n, l, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Yt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xc(o),
    e
  );
}
function g0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Br,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function _m(e) {
  if (!e) return hr;
  e = e._reactInternals;
  e: {
    if (zr(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Rt(n)) return _p(e, n, t);
  }
  return t;
}
function km(e, t, n, r, i, o, a, l, s) {
  return (
    (e = zc(n, r, !0, e, i, o, a, l, s)),
    (e.context = _m(null)),
    (n = e.current),
    (r = St()),
    (i = cr(n)),
    (o = Ln(r, i)),
    (o.callback = t ?? null),
    sr(n, o, i),
    (e.current.lanes = i),
    To(e, i, r),
    Lt(e, r),
    e
  );
}
function Ol(e, t, n, r) {
  var i = t.current,
    o = St(),
    a = cr(i);
  return (
    (n = _m(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ln(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sr(i, t, a)),
    e !== null && (mn(e, i, a, o), ha(e, i, a)),
    a
  );
}
function Ka(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function uf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ac(e, t) {
  uf(e, t), (e = e.alternate) && uf(e, t);
}
function w0() {
  return null;
}
var Om =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Fc(e) {
  this._internalRoot = e;
}
Pl.prototype.render = Fc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  Ol(e, t, null, null);
};
Pl.prototype.unmount = Fc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lr(function () {
      Ol(null, e, null, null);
    }),
      (t[In] = null);
  }
};
function Pl(e) {
  this._internalRoot = e;
}
Pl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ip();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < er.length && t !== 0 && t < er[n].priority; n++);
    er.splice(n, 0, e), n === 0 && ap(e);
  }
};
function Uc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function cf() {}
function x0(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Ka(a);
        o.call(u);
      };
    }
    var a = km(t, r, e, 0, null, !1, !1, "", cf);
    return (
      (e._reactRootContainer = a),
      (e[In] = a.current),
      go(e.nodeType === 8 ? e.parentNode : e),
      Lr(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Ka(s);
      l.call(u);
    };
  }
  var s = zc(e, 0, !1, null, null, !1, !1, "", cf);
  return (
    (e._reactRootContainer = s),
    (e[In] = s.current),
    go(e.nodeType === 8 ? e.parentNode : e),
    Lr(function () {
      Ol(t, s, n, r);
    }),
    s
  );
}
function Nl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var s = Ka(a);
        l.call(s);
      };
    }
    Ol(t, a, e, i);
  } else a = x0(n, t, e, i, r);
  return Ka(a);
}
np = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gi(t.pendingLanes);
        n !== 0 &&
          (oc(t, n | 1), Lt(t, Ke()), !(ge & 6) && ((vi = Ke() + 500), vr()));
      }
      break;
    case 13:
      Lr(function () {
        var r = zn(e, 1);
        if (r !== null) {
          var i = St();
          mn(r, e, 1, i);
        }
      }),
        Ac(e, 1);
  }
};
ac = function (e) {
  if (e.tag === 13) {
    var t = zn(e, 134217728);
    if (t !== null) {
      var n = St();
      mn(t, e, 134217728, n);
    }
    Ac(e, 134217728);
  }
};
rp = function (e) {
  if (e.tag === 13) {
    var t = cr(e),
      n = zn(e, t);
    if (n !== null) {
      var r = St();
      mn(n, e, t, r);
    }
    Ac(e, t);
  }
};
ip = function () {
  return be;
};
op = function (e, t) {
  var n = be;
  try {
    return (be = e), t();
  } finally {
    be = n;
  }
};
Vs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Us(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = xl(r);
            if (!i) throw Error(z(90));
            Ih(r), Us(r, i);
          }
        }
      }
      break;
    case "textarea":
      Ah(e, n);
      break;
    case "select":
      (t = n.value), t != null && ni(e, !!n.multiple, t, !1);
  }
};
Wh = Lc;
qh = Lr;
var S0 = { usingClientEntryPoint: !1, Events: [Lo, Kr, xl, Bh, Qh, Lc] },
  $i = {
    findFiberByHostInstance: Sr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  b0 = {
    bundleType: $i.bundleType,
    version: $i.version,
    rendererPackageName: $i.rendererPackageName,
    rendererConfig: $i.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Fn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Yh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $i.findFiberByHostInstance || w0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!na.isDisabled && na.supportsFiber)
    try {
      (vl = na.inject(b0)), (bn = na);
    } catch {}
}
Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = S0;
Ht.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Uc(t)) throw Error(z(200));
  return g0(e, t, null, n);
};
Ht.createRoot = function (e, t) {
  if (!Uc(e)) throw Error(z(299));
  var n = !1,
    r = "",
    i = Om;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = zc(e, 1, !1, null, null, n, !1, r, i)),
    (e[In] = t.current),
    go(e.nodeType === 8 ? e.parentNode : e),
    new Fc(t)
  );
};
Ht.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return (e = Yh(t)), (e = e === null ? null : e.stateNode), e;
};
Ht.flushSync = function (e) {
  return Lr(e);
};
Ht.hydrate = function (e, t, n) {
  if (!jl(t)) throw Error(z(200));
  return Nl(null, e, t, !0, n);
};
Ht.hydrateRoot = function (e, t, n) {
  if (!Uc(e)) throw Error(z(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    a = Om;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = km(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[In] = t.current),
    go(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Pl(t);
};
Ht.render = function (e, t, n) {
  if (!jl(t)) throw Error(z(200));
  return Nl(null, e, t, !1, n);
};
Ht.unmountComponentAtNode = function (e) {
  if (!jl(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (Lr(function () {
        Nl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[In] = null);
        });
      }),
      !0)
    : !1;
};
Ht.unstable_batchedUpdates = Lc;
Ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!jl(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return Nl(e, t, n, !1, r);
};
Ht.version = "18.3.1-next-f1338f8080-20240426";
function Pm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pm);
    } catch (e) {
      console.error(e);
    }
}
Pm(), (Ph.exports = Ht);
var $c = Ph.exports;
const Hc = pl($c),
  E0 = vh({ __proto__: null, default: Hc }, [$c]);
var df = $c;
(Ls.createRoot = df.createRoot), (Ls.hydrateRoot = df.hydrateRoot);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fe() {
  return (
    (Fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fe.apply(this, arguments)
  );
}
var Ge;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ge || (Ge = {}));
const ff = "popstate";
function C0(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: a, hash: l } = r.location;
    return Oo(
      "",
      { pathname: o, search: a, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Mr(i);
  }
  return k0(t, n, null, e);
}
function pe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function yi(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function _0() {
  return Math.random().toString(36).substr(2, 8);
}
function hf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Oo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Fe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? yr(t) : t,
      { state: n, key: (t && t.key) || r || _0() }
    )
  );
}
function Mr(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function yr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function k0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    l = Ge.Pop,
    s = null,
    u = d();
  u == null && ((u = 0), a.replaceState(Fe({}, a.state, { idx: u }), ""));
  function d() {
    return (a.state || { idx: null }).idx;
  }
  function f() {
    l = Ge.Pop;
    let E = d(),
      v = E == null ? null : E - u;
    (u = E), s && s({ action: l, location: w.location, delta: v });
  }
  function p(E, v) {
    l = Ge.Push;
    let h = Oo(w.location, E, v);
    u = d() + 1;
    let m = hf(h, u),
      C = w.createHref(h);
    try {
      a.pushState(m, "", C);
    } catch (O) {
      if (O instanceof DOMException && O.name === "DataCloneError") throw O;
      i.location.assign(C);
    }
    o && s && s({ action: l, location: w.location, delta: 1 });
  }
  function g(E, v) {
    l = Ge.Replace;
    let h = Oo(w.location, E, v);
    u = d();
    let m = hf(h, u),
      C = w.createHref(h);
    a.replaceState(m, "", C),
      o && s && s({ action: l, location: w.location, delta: 0 });
  }
  function y(E) {
    let v = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof E == "string" ? E : Mr(E);
    return (
      (h = h.replace(/ $/, "%20")),
      pe(
        v,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, v)
    );
  }
  let w = {
    get action() {
      return l;
    },
    get location() {
      return e(i, a);
    },
    listen(E) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(ff, f),
        (s = E),
        () => {
          i.removeEventListener(ff, f), (s = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: y,
    encodeLocation(E) {
      let v = y(E);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: p,
    replace: g,
    go(E) {
      return a.go(E);
    },
  };
  return w;
}
var Le;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Le || (Le = {}));
const O0 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function P0(e) {
  return e.index === !0;
}
function ku(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let a = [...n, o],
        l = typeof i.id == "string" ? i.id : a.join("-");
      if (
        (pe(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        pe(
          !r[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        P0(i))
      ) {
        let s = Fe({}, i, t(i), { id: l });
        return (r[l] = s), s;
      } else {
        let s = Fe({}, i, t(i), { id: l, children: void 0 });
        return (
          (r[l] = s), i.children && (s.children = ku(i.children, t, a, r)), s
        );
      }
    })
  );
}
function ti(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? yr(t) : t,
    i = Oi(r.pathname || "/", n);
  if (i == null) return null;
  let o = jm(e);
  N0(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let s = H0(i);
    a = F0(o[l], s);
  }
  return a;
}
function j0(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function jm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, a, l) => {
    let s = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (pe(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Mn([r, s.relativePath]),
      d = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (pe(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      jm(o.children, t, d, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: z0(u, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, a) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, a);
      else for (let s of Nm(o.path)) i(o, a, s);
    }),
    t
  );
}
function Nm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let a = Nm(r.join("/")),
    l = [];
  return (
    l.push(...a.map((s) => (s === "" ? o : [o, s].join("/")))),
    i && l.push(...a),
    l.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function N0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : A0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const T0 = /^:[\w-]+$/,
  R0 = 3,
  L0 = 2,
  M0 = 1,
  D0 = 10,
  I0 = -2,
  pf = (e) => e === "*";
function z0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(pf) && (r += I0),
    t && (r += L0),
    n
      .filter((i) => !pf(i))
      .reduce((i, o) => i + (T0.test(o) ? R0 : o === "" ? M0 : D0), r)
  );
}
function A0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function F0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      s = a === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      d = U0(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let f = l.route;
    o.push({
      params: r,
      pathname: Mn([i, d.pathname]),
      pathnameBase: W0(Mn([i, d.pathnameBase])),
      route: f,
    }),
      d.pathnameBase !== "/" && (i = Mn([i, d.pathnameBase]));
  }
  return o;
}
function U0(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = $0(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    a = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let { paramName: p, isOptional: g } = d;
      if (p === "*") {
        let w = l[f] || "";
        a = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const y = l[f];
      return (
        g && !y ? (u[p] = void 0) : (u[p] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function $0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    yi(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, l, s) => (
            r.push({ paramName: l, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function H0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      yi(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Oi(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function B0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? yr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Q0(n, t)) : t,
    search: q0(r),
    hash: V0(i),
  };
}
function Q0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ps(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Tm(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Bc(e, t) {
  let n = Tm(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Qc(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = yr(e))
    : ((i = Fe({}, e)),
      pe(
        !i.pathname || !i.pathname.includes("?"),
        ps("?", "pathname", "search", i)
      ),
      pe(
        !i.pathname || !i.pathname.includes("#"),
        ps("#", "pathname", "hash", i)
      ),
      pe(!i.search || !i.search.includes("#"), ps("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    a = o ? "/" : i.pathname,
    l;
  if (a == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && a.startsWith("..")) {
      let p = a.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      i.pathname = p.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let s = B0(i, l),
    u = a && a !== "/" && a.endsWith("/"),
    d = (o || a === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || d) && (s.pathname += "/"), s;
}
const Mn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  W0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  q0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  V0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Wc {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function qc(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Rm = ["post", "put", "patch", "delete"],
  K0 = new Set(Rm),
  Y0 = ["get", ...Rm],
  G0 = new Set(Y0),
  X0 = new Set([301, 302, 303, 307, 308]),
  J0 = new Set([307, 308]),
  ms = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Z0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Hi = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Vc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ew = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Lm = "remix-router-transitions";
function tw(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  pe(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let b = e.detectErrorBoundary;
    i = (k) => ({ hasErrorBoundary: b(k) });
  } else i = ew;
  let o = {},
    a = ku(e.routes, i, void 0, o),
    l,
    s = e.basename || "/",
    u = e.unstable_dataStrategy || ow,
    d = Fe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    f = null,
    p = new Set(),
    g = null,
    y = null,
    w = null,
    E = e.hydrationData != null,
    v = ti(a, e.history.location, s),
    h = null;
  if (v == null) {
    let b = Wt(404, { pathname: e.history.location.pathname }),
      { matches: k, route: R } = Cf(a);
    (v = k), (h = { [R.id]: b });
  }
  let m,
    C = v.some((b) => b.route.lazy),
    O = v.some((b) => b.route.loader);
  if (C) m = !1;
  else if (!O) m = !0;
  else if (d.v7_partialHydration) {
    let b = e.hydrationData ? e.hydrationData.loaderData : null,
      k = e.hydrationData ? e.hydrationData.errors : null,
      R = (A) =>
        A.route.loader
          ? typeof A.route.loader == "function" && A.route.loader.hydrate === !0
            ? !1
            : (b && b[A.route.id] !== void 0) || (k && k[A.route.id] !== void 0)
          : !0;
    if (k) {
      let A = v.findIndex((K) => k[K.route.id] !== void 0);
      m = v.slice(0, A + 1).every(R);
    } else m = v.every(R);
  } else m = e.hydrationData != null;
  let P,
    x = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: v,
      initialized: m,
      navigation: ms,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || h,
      fetchers: new Map(),
      blockers: new Map(),
    },
    L = Ge.Pop,
    j = !1,
    _,
    D = !1,
    U = new Map(),
    $ = null,
    M = !1,
    H = !1,
    Z = [],
    we = [],
    T = new Map(),
    B = 0,
    Q = -1,
    Y = new Map(),
    V = new Set(),
    se = new Map(),
    re = new Map(),
    ye = new Set(),
    ue = new Map(),
    Je = new Map(),
    _t = !1;
  function _n() {
    if (
      ((f = e.history.listen((b) => {
        let { action: k, location: R, delta: A } = b;
        if (_t) {
          _t = !1;
          return;
        }
        yi(
          Je.size === 0 || A != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let K = yt({
          currentLocation: x.location,
          nextLocation: R,
          historyAction: k,
        });
        if (K && A != null) {
          (_t = !0),
            e.history.go(A * -1),
            Se(K, {
              state: "blocked",
              location: R,
              proceed() {
                Se(K, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: R,
                }),
                  e.history.go(A);
              },
              reset() {
                let oe = new Map(x.blockers);
                oe.set(K, Hi), Ee({ blockers: oe });
              },
            });
          return;
        }
        return Ze(k, R);
      })),
      n)
    ) {
      yw(t, U);
      let b = () => gw(t, U);
      t.addEventListener("pagehide", b),
        ($ = () => t.removeEventListener("pagehide", b));
    }
    return x.initialized || Ze(Ge.Pop, x.location, { initialHydration: !0 }), P;
  }
  function en() {
    f && f(),
      $ && $(),
      p.clear(),
      _ && _.abort(),
      x.fetchers.forEach((b, k) => gn(k)),
      x.blockers.forEach((b, k) => Te(k));
  }
  function tn(b) {
    return p.add(b), () => p.delete(b);
  }
  function Ee(b, k) {
    k === void 0 && (k = {}), (x = Fe({}, x, b));
    let R = [],
      A = [];
    d.v7_fetcherPersist &&
      x.fetchers.forEach((K, oe) => {
        K.state === "idle" && (ye.has(oe) ? A.push(oe) : R.push(oe));
      }),
      [...p].forEach((K) =>
        K(x, {
          deletedFetchers: A,
          unstable_viewTransitionOpts: k.viewTransitionOpts,
          unstable_flushSync: k.flushSync === !0,
        })
      ),
      d.v7_fetcherPersist &&
        (R.forEach((K) => x.fetchers.delete(K)), A.forEach((K) => gn(K)));
  }
  function nn(b, k, R) {
    var A, K;
    let { flushSync: oe } = R === void 0 ? {} : R,
      J =
        x.actionData != null &&
        x.navigation.formMethod != null &&
        fn(x.navigation.formMethod) &&
        x.navigation.state === "loading" &&
        ((A = b.state) == null ? void 0 : A._isRedirect) !== !0,
      G;
    k.actionData
      ? Object.keys(k.actionData).length > 0
        ? (G = k.actionData)
        : (G = null)
      : J
      ? (G = x.actionData)
      : (G = null);
    let ae = k.loaderData
        ? bf(x.loaderData, k.loaderData, k.matches || [], k.errors)
        : x.loaderData,
      ie = x.blockers;
    ie.size > 0 && ((ie = new Map(ie)), ie.forEach((ee, Ce) => ie.set(Ce, Hi)));
    let tt =
      j === !0 ||
      (x.navigation.formMethod != null &&
        fn(x.navigation.formMethod) &&
        ((K = b.state) == null ? void 0 : K._isRedirect) !== !0);
    l && ((a = l), (l = void 0)),
      M ||
        L === Ge.Pop ||
        (L === Ge.Push
          ? e.history.push(b, b.state)
          : L === Ge.Replace && e.history.replace(b, b.state));
    let Ye;
    if (L === Ge.Pop) {
      let ee = U.get(x.location.pathname);
      ee && ee.has(b.pathname)
        ? (Ye = { currentLocation: x.location, nextLocation: b })
        : U.has(b.pathname) &&
          (Ye = { currentLocation: b, nextLocation: x.location });
    } else if (D) {
      let ee = U.get(x.location.pathname);
      ee
        ? ee.add(b.pathname)
        : ((ee = new Set([b.pathname])), U.set(x.location.pathname, ee)),
        (Ye = { currentLocation: x.location, nextLocation: b });
    }
    Ee(
      Fe({}, k, {
        actionData: G,
        loaderData: ae,
        historyAction: L,
        location: b,
        initialized: !0,
        navigation: ms,
        revalidation: "idle",
        restoreScrollPosition: Ti(b, k.matches || x.matches),
        preventScrollReset: tt,
        blockers: ie,
      }),
      { viewTransitionOpts: Ye, flushSync: oe === !0 }
    ),
      (L = Ge.Pop),
      (j = !1),
      (D = !1),
      (M = !1),
      (H = !1),
      (Z = []),
      (we = []);
  }
  async function $n(b, k) {
    if (typeof b == "number") {
      e.history.go(b);
      return;
    }
    let R = Ou(
        x.location,
        x.matches,
        s,
        d.v7_prependBasename,
        b,
        d.v7_relativeSplatPath,
        k == null ? void 0 : k.fromRouteId,
        k == null ? void 0 : k.relative
      ),
      {
        path: A,
        submission: K,
        error: oe,
      } = mf(d.v7_normalizeFormMethod, !1, R, k),
      J = x.location,
      G = Oo(x.location, A, k && k.state);
    G = Fe({}, G, e.history.encodeLocation(G));
    let ae = k && k.replace != null ? k.replace : void 0,
      ie = Ge.Push;
    ae === !0
      ? (ie = Ge.Replace)
      : ae === !1 ||
        (K != null &&
          fn(K.formMethod) &&
          K.formAction === x.location.pathname + x.location.search &&
          (ie = Ge.Replace));
    let tt =
        k && "preventScrollReset" in k ? k.preventScrollReset === !0 : void 0,
      Ye = (k && k.unstable_flushSync) === !0,
      ee = yt({ currentLocation: J, nextLocation: G, historyAction: ie });
    if (ee) {
      Se(ee, {
        state: "blocked",
        location: G,
        proceed() {
          Se(ee, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: G,
          }),
            $n(b, k);
        },
        reset() {
          let Ce = new Map(x.blockers);
          Ce.set(ee, Hi), Ee({ blockers: Ce });
        },
      });
      return;
    }
    return await Ze(ie, G, {
      submission: K,
      pendingError: oe,
      preventScrollReset: tt,
      replace: k && k.replace,
      enableViewTransition: k && k.unstable_viewTransition,
      flushSync: Ye,
    });
  }
  function We() {
    if (
      (Dt(),
      Ee({ revalidation: "loading" }),
      x.navigation.state !== "submitting")
    ) {
      if (x.navigation.state === "idle") {
        Ze(x.historyAction, x.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Ze(L || x.historyAction, x.navigation.location, {
        overrideNavigation: x.navigation,
      });
    }
  }
  async function Ze(b, k, R) {
    _ && _.abort(),
      (_ = null),
      (L = b),
      (M = (R && R.startUninterruptedRevalidation) === !0),
      $l(x.location, x.matches),
      (j = (R && R.preventScrollReset) === !0),
      (D = (R && R.enableViewTransition) === !0);
    let A = l || a,
      K = R && R.overrideNavigation,
      oe = ti(A, k, s),
      J = (R && R.flushSync) === !0;
    if (!oe) {
      let ee = Wt(404, { pathname: k.pathname }),
        { matches: Ce, route: Ve } = Cf(A);
      dt(),
        nn(
          k,
          { matches: Ce, loaderData: {}, errors: { [Ve.id]: ee } },
          { flushSync: J }
        );
      return;
    }
    if (
      x.initialized &&
      !H &&
      dw(x.location, k) &&
      !(R && R.submission && fn(R.submission.formMethod))
    ) {
      nn(k, { matches: oe }, { flushSync: J });
      return;
    }
    _ = new AbortController();
    let G = Hr(e.history, k, _.signal, R && R.submission),
      ae;
    if (R && R.pendingError)
      ae = [lo(oe).route.id, { type: Le.error, error: R.pendingError }];
    else if (R && R.submission && fn(R.submission.formMethod)) {
      let ee = await Hn(G, k, R.submission, oe, {
        replace: R.replace,
        flushSync: J,
      });
      if (ee.shortCircuited) return;
      (ae = ee.pendingActionResult),
        (K = vs(k, R.submission)),
        (J = !1),
        (G = Hr(e.history, G.url, G.signal));
    }
    let {
      shortCircuited: ie,
      loaderData: tt,
      errors: Ye,
    } = await Ur(
      G,
      k,
      oe,
      K,
      R && R.submission,
      R && R.fetcherSubmission,
      R && R.replace,
      R && R.initialHydration === !0,
      J,
      ae
    );
    ie ||
      ((_ = null),
      nn(k, Fe({ matches: oe }, Ef(ae), { loaderData: tt, errors: Ye })));
  }
  async function Hn(b, k, R, A, K) {
    K === void 0 && (K = {}), Dt();
    let oe = mw(k, R);
    Ee({ navigation: oe }, { flushSync: K.flushSync === !0 });
    let J,
      G = ju(A, k);
    if (!G.route.action && !G.route.lazy)
      J = {
        type: Le.error,
        error: Wt(405, {
          method: b.method,
          pathname: k.pathname,
          routeId: G.route.id,
        }),
      };
    else if (((J = (await et("action", b, [G], A))[0]), b.signal.aborted))
      return { shortCircuited: !0 };
    if (_r(J)) {
      let ae;
      return (
        K && K.replace != null
          ? (ae = K.replace)
          : (ae =
              wf(J.response.headers.get("Location"), new URL(b.url), s) ===
              x.location.pathname + x.location.search),
        await vt(b, J, { submission: R, replace: ae }),
        { shortCircuited: !0 }
      );
    }
    if (Cr(J)) throw Wt(400, { type: "defer-action" });
    if (Kt(J)) {
      let ae = lo(A, G.route.id);
      return (
        (K && K.replace) !== !0 && (L = Ge.Push),
        { pendingActionResult: [ae.route.id, J] }
      );
    }
    return { pendingActionResult: [G.route.id, J] };
  }
  async function Ur(b, k, R, A, K, oe, J, G, ae, ie) {
    let tt = A || vs(k, K),
      Ye = K || oe || Of(tt),
      ee = l || a,
      [Ce, Ve] = vf(
        e.history,
        x,
        R,
        Ye,
        k,
        d.v7_partialHydration && G === !0,
        d.unstable_skipActionErrorRevalidation,
        H,
        Z,
        we,
        ye,
        se,
        V,
        ee,
        s,
        ie
      );
    if (
      (dt(
        (le) =>
          !(R && R.some((Pe) => Pe.route.id === le)) ||
          (Ce && Ce.some((Pe) => Pe.route.id === le))
      ),
      (Q = ++B),
      Ce.length === 0 && Ve.length === 0)
    ) {
      let le = rn();
      return (
        nn(
          k,
          Fe(
            {
              matches: R,
              loaderData: {},
              errors: ie && Kt(ie[1]) ? { [ie[0]]: ie[1].error } : null,
            },
            Ef(ie),
            le ? { fetchers: new Map(x.fetchers) } : {}
          ),
          { flushSync: ae }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!M && (!d.v7_partialHydration || !G)) {
      Ve.forEach((Pe) => {
        let ze = x.fetchers.get(Pe.key),
          xe = Bi(void 0, ze ? ze.data : void 0);
        x.fetchers.set(Pe.key, xe);
      });
      let le;
      ie && !Kt(ie[1])
        ? (le = { [ie[0]]: ie[1].data })
        : x.actionData &&
          (Object.keys(x.actionData).length === 0
            ? (le = null)
            : (le = x.actionData)),
        Ee(
          Fe(
            { navigation: tt },
            le !== void 0 ? { actionData: le } : {},
            Ve.length > 0 ? { fetchers: new Map(x.fetchers) } : {}
          ),
          { flushSync: ae }
        );
    }
    Ve.forEach((le) => {
      T.has(le.key) && at(le.key),
        le.controller && T.set(le.key, le.controller);
    });
    let Wn = () => Ve.forEach((le) => at(le.key));
    _ && _.signal.addEventListener("abort", Wn);
    let { loaderResults: an, fetcherResults: qn } = await Qt(
      x.matches,
      R,
      Ce,
      Ve,
      b
    );
    if (b.signal.aborted) return { shortCircuited: !0 };
    _ && _.signal.removeEventListener("abort", Wn),
      Ve.forEach((le) => T.delete(le.key));
    let S = _f([...an, ...qn]);
    if (S) {
      if (S.idx >= Ce.length) {
        let le = Ve[S.idx - Ce.length].key;
        V.add(le);
      }
      return await vt(b, S.result, { replace: J }), { shortCircuited: !0 };
    }
    let { loaderData: q, errors: F } = Sf(x, R, Ce, an, ie, Ve, qn, ue);
    ue.forEach((le, Pe) => {
      le.subscribe((ze) => {
        (ze || le.done) && ue.delete(Pe);
      });
    }),
      d.v7_partialHydration &&
        G &&
        x.errors &&
        Object.entries(x.errors)
          .filter((le) => {
            let [Pe] = le;
            return !Ce.some((ze) => ze.route.id === Pe);
          })
          .forEach((le) => {
            let [Pe, ze] = le;
            F = Object.assign(F || {}, { [Pe]: ze });
          });
    let ve = rn(),
      Be = Pn(Q),
      _e = ve || Be || Ve.length > 0;
    return Fe(
      { loaderData: q, errors: F },
      _e ? { fetchers: new Map(x.fetchers) } : {}
    );
  }
  function kn(b, k, R, A) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    T.has(b) && at(b);
    let K = (A && A.unstable_flushSync) === !0,
      oe = l || a,
      J = Ou(
        x.location,
        x.matches,
        s,
        d.v7_prependBasename,
        R,
        d.v7_relativeSplatPath,
        k,
        A == null ? void 0 : A.relative
      ),
      G = ti(oe, J, s);
    if (!G) {
      yn(b, k, Wt(404, { pathname: J }), { flushSync: K });
      return;
    }
    let {
      path: ae,
      submission: ie,
      error: tt,
    } = mf(d.v7_normalizeFormMethod, !0, J, A);
    if (tt) {
      yn(b, k, tt, { flushSync: K });
      return;
    }
    let Ye = ju(G, ae);
    if (((j = (A && A.preventScrollReset) === !0), ie && fn(ie.formMethod))) {
      Ni(b, k, ae, Ye, G, K, ie);
      return;
    }
    se.set(b, { routeId: k, path: ae }), Bn(b, k, ae, Ye, G, K, ie);
  }
  async function Ni(b, k, R, A, K, oe, J) {
    if ((Dt(), se.delete(b), !A.route.action && !A.route.lazy)) {
      let xe = Wt(405, { method: J.formMethod, pathname: R, routeId: k });
      yn(b, k, xe, { flushSync: oe });
      return;
    }
    let G = x.fetchers.get(b);
    kt(b, vw(J, G), { flushSync: oe });
    let ae = new AbortController(),
      ie = Hr(e.history, R, ae.signal, J);
    T.set(b, ae);
    let tt = B,
      ee = (await et("action", ie, [A], K))[0];
    if (ie.signal.aborted) {
      T.get(b) === ae && T.delete(b);
      return;
    }
    if (d.v7_fetcherPersist && ye.has(b)) {
      if (_r(ee) || Kt(ee)) {
        kt(b, Yn(void 0));
        return;
      }
    } else {
      if (_r(ee))
        if ((T.delete(b), Q > tt)) {
          kt(b, Yn(void 0));
          return;
        } else
          return V.add(b), kt(b, Bi(J)), vt(ie, ee, { fetcherSubmission: J });
      if (Kt(ee)) {
        yn(b, k, ee.error);
        return;
      }
    }
    if (Cr(ee)) throw Wt(400, { type: "defer-action" });
    let Ce = x.navigation.location || x.location,
      Ve = Hr(e.history, Ce, ae.signal),
      Wn = l || a,
      an =
        x.navigation.state !== "idle"
          ? ti(Wn, x.navigation.location, s)
          : x.matches;
    pe(an, "Didn't find any matches after fetcher action");
    let qn = ++B;
    Y.set(b, qn);
    let S = Bi(J, ee.data);
    x.fetchers.set(b, S);
    let [q, F] = vf(
      e.history,
      x,
      an,
      J,
      Ce,
      !1,
      d.unstable_skipActionErrorRevalidation,
      H,
      Z,
      we,
      ye,
      se,
      V,
      Wn,
      s,
      [A.route.id, ee]
    );
    F.filter((xe) => xe.key !== b).forEach((xe) => {
      let Vn = xe.key,
        Li = x.fetchers.get(Vn),
        Yv = Bi(void 0, Li ? Li.data : void 0);
      x.fetchers.set(Vn, Yv),
        T.has(Vn) && at(Vn),
        xe.controller && T.set(Vn, xe.controller);
    }),
      Ee({ fetchers: new Map(x.fetchers) });
    let ve = () => F.forEach((xe) => at(xe.key));
    ae.signal.addEventListener("abort", ve);
    let { loaderResults: Be, fetcherResults: _e } = await Qt(
      x.matches,
      an,
      q,
      F,
      Ve
    );
    if (ae.signal.aborted) return;
    ae.signal.removeEventListener("abort", ve),
      Y.delete(b),
      T.delete(b),
      F.forEach((xe) => T.delete(xe.key));
    let le = _f([...Be, ..._e]);
    if (le) {
      if (le.idx >= q.length) {
        let xe = F[le.idx - q.length].key;
        V.add(xe);
      }
      return vt(Ve, le.result);
    }
    let { loaderData: Pe, errors: ze } = Sf(
      x,
      x.matches,
      q,
      Be,
      void 0,
      F,
      _e,
      ue
    );
    if (x.fetchers.has(b)) {
      let xe = Yn(ee.data);
      x.fetchers.set(b, xe);
    }
    Pn(qn),
      x.navigation.state === "loading" && qn > Q
        ? (pe(L, "Expected pending action"),
          _ && _.abort(),
          nn(x.navigation.location, {
            matches: an,
            loaderData: Pe,
            errors: ze,
            fetchers: new Map(x.fetchers),
          }))
        : (Ee({
            errors: ze,
            loaderData: bf(x.loaderData, Pe, an, ze),
            fetchers: new Map(x.fetchers),
          }),
          (H = !1));
  }
  async function Bn(b, k, R, A, K, oe, J) {
    let G = x.fetchers.get(b);
    kt(b, Bi(J, G ? G.data : void 0), { flushSync: oe });
    let ae = new AbortController(),
      ie = Hr(e.history, R, ae.signal);
    T.set(b, ae);
    let tt = B,
      ee = (await et("loader", ie, [A], K))[0];
    if (
      (Cr(ee) && (ee = (await zm(ee, ie.signal, !0)) || ee),
      T.get(b) === ae && T.delete(b),
      !ie.signal.aborted)
    ) {
      if (ye.has(b)) {
        kt(b, Yn(void 0));
        return;
      }
      if (_r(ee))
        if (Q > tt) {
          kt(b, Yn(void 0));
          return;
        } else {
          V.add(b), await vt(ie, ee);
          return;
        }
      if (Kt(ee)) {
        yn(b, k, ee.error);
        return;
      }
      pe(!Cr(ee), "Unhandled fetcher deferred data"), kt(b, Yn(ee.data));
    }
  }
  async function vt(b, k, R) {
    let {
      submission: A,
      fetcherSubmission: K,
      replace: oe,
    } = R === void 0 ? {} : R;
    k.response.headers.has("X-Remix-Revalidate") && (H = !0);
    let J = k.response.headers.get("Location");
    pe(J, "Expected a Location header on the redirect Response"),
      (J = wf(J, new URL(b.url), s));
    let G = Oo(x.location, J, { _isRedirect: !0 });
    if (n) {
      let Ce = !1;
      if (k.response.headers.has("X-Remix-Reload-Document")) Ce = !0;
      else if (Vc.test(J)) {
        const Ve = e.history.createURL(J);
        Ce = Ve.origin !== t.location.origin || Oi(Ve.pathname, s) == null;
      }
      if (Ce) {
        oe ? t.location.replace(J) : t.location.assign(J);
        return;
      }
    }
    _ = null;
    let ae = oe === !0 ? Ge.Replace : Ge.Push,
      { formMethod: ie, formAction: tt, formEncType: Ye } = x.navigation;
    !A && !K && ie && tt && Ye && (A = Of(x.navigation));
    let ee = A || K;
    if (J0.has(k.response.status) && ee && fn(ee.formMethod))
      await Ze(ae, G, {
        submission: Fe({}, ee, { formAction: J }),
        preventScrollReset: j,
      });
    else {
      let Ce = vs(G, A);
      await Ze(ae, G, {
        overrideNavigation: Ce,
        fetcherSubmission: K,
        preventScrollReset: j,
      });
    }
  }
  async function et(b, k, R, A) {
    try {
      let K = await aw(u, b, k, R, A, o, i);
      return await Promise.all(
        K.map((oe, J) => {
          if (fw(oe)) {
            let G = oe.result;
            return {
              type: Le.redirect,
              response: uw(G, k, R[J].route.id, A, s, d.v7_relativeSplatPath),
            };
          }
          return sw(oe);
        })
      );
    } catch (K) {
      return R.map(() => ({ type: Le.error, error: K }));
    }
  }
  async function Qt(b, k, R, A, K) {
    let [oe, ...J] = await Promise.all([
      R.length ? et("loader", K, R, k) : [],
      ...A.map((G) => {
        if (G.matches && G.match && G.controller) {
          let ae = Hr(e.history, G.path, G.controller.signal);
          return et("loader", ae, [G.match], G.matches).then((ie) => ie[0]);
        } else
          return Promise.resolve({
            type: Le.error,
            error: Wt(404, { pathname: G.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        kf(
          b,
          R,
          oe,
          oe.map(() => K.signal),
          !1,
          x.loaderData
        ),
        kf(
          b,
          A.map((G) => G.match),
          J,
          A.map((G) => (G.controller ? G.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: oe, fetcherResults: J }
    );
  }
  function Dt() {
    (H = !0),
      Z.push(...dt()),
      se.forEach((b, k) => {
        T.has(k) && (we.push(k), at(k));
      });
  }
  function kt(b, k, R) {
    R === void 0 && (R = {}),
      x.fetchers.set(b, k),
      Ee(
        { fetchers: new Map(x.fetchers) },
        { flushSync: (R && R.flushSync) === !0 }
      );
  }
  function yn(b, k, R, A) {
    A === void 0 && (A = {});
    let K = lo(x.matches, k);
    gn(b),
      Ee(
        { errors: { [K.route.id]: R }, fetchers: new Map(x.fetchers) },
        { flushSync: (A && A.flushSync) === !0 }
      );
  }
  function On(b) {
    return (
      d.v7_fetcherPersist &&
        (re.set(b, (re.get(b) || 0) + 1), ye.has(b) && ye.delete(b)),
      x.fetchers.get(b) || Z0
    );
  }
  function gn(b) {
    let k = x.fetchers.get(b);
    T.has(b) && !(k && k.state === "loading" && Y.has(b)) && at(b),
      se.delete(b),
      Y.delete(b),
      V.delete(b),
      ye.delete(b),
      x.fetchers.delete(b);
  }
  function Qn(b) {
    if (d.v7_fetcherPersist) {
      let k = (re.get(b) || 0) - 1;
      k <= 0 ? (re.delete(b), ye.add(b)) : re.set(b, k);
    } else gn(b);
    Ee({ fetchers: new Map(x.fetchers) });
  }
  function at(b) {
    let k = T.get(b);
    pe(k, "Expected fetch controller: " + b), k.abort(), T.delete(b);
  }
  function qe(b) {
    for (let k of b) {
      let R = On(k),
        A = Yn(R.data);
      x.fetchers.set(k, A);
    }
  }
  function rn() {
    let b = [],
      k = !1;
    for (let R of V) {
      let A = x.fetchers.get(R);
      pe(A, "Expected fetcher: " + R),
        A.state === "loading" && (V.delete(R), b.push(R), (k = !0));
    }
    return qe(b), k;
  }
  function Pn(b) {
    let k = [];
    for (let [R, A] of Y)
      if (A < b) {
        let K = x.fetchers.get(R);
        pe(K, "Expected fetcher: " + R),
          K.state === "loading" && (at(R), Y.delete(R), k.push(R));
      }
    return qe(k), k.length > 0;
  }
  function ne(b, k) {
    let R = x.blockers.get(b) || Hi;
    return Je.get(b) !== k && Je.set(b, k), R;
  }
  function Te(b) {
    x.blockers.delete(b), Je.delete(b);
  }
  function Se(b, k) {
    let R = x.blockers.get(b) || Hi;
    pe(
      (R.state === "unblocked" && k.state === "blocked") ||
        (R.state === "blocked" && k.state === "blocked") ||
        (R.state === "blocked" && k.state === "proceeding") ||
        (R.state === "blocked" && k.state === "unblocked") ||
        (R.state === "proceeding" && k.state === "unblocked"),
      "Invalid blocker state transition: " + R.state + " -> " + k.state
    );
    let A = new Map(x.blockers);
    A.set(b, k), Ee({ blockers: A });
  }
  function yt(b) {
    let { currentLocation: k, nextLocation: R, historyAction: A } = b;
    if (Je.size === 0) return;
    Je.size > 1 && yi(!1, "A router only supports one blocker at a time");
    let K = Array.from(Je.entries()),
      [oe, J] = K[K.length - 1],
      G = x.blockers.get(oe);
    if (
      !(G && G.state === "proceeding") &&
      J({ currentLocation: k, nextLocation: R, historyAction: A })
    )
      return oe;
  }
  function dt(b) {
    let k = [];
    return (
      ue.forEach((R, A) => {
        (!b || b(A)) && (R.cancel(), k.push(A), ue.delete(A));
      }),
      k
    );
  }
  function Oe(b, k, R) {
    if (((g = b), (w = k), (y = R || null), !E && x.navigation === ms)) {
      E = !0;
      let A = Ti(x.location, x.matches);
      A != null && Ee({ restoreScrollPosition: A });
    }
    return () => {
      (g = null), (w = null), (y = null);
    };
  }
  function on(b, k) {
    return (
      (y &&
        y(
          b,
          k.map((A) => j0(A, x.loaderData))
        )) ||
      b.key
    );
  }
  function $l(b, k) {
    if (g && w) {
      let R = on(b, k);
      g[R] = w();
    }
  }
  function Ti(b, k) {
    if (g) {
      let R = on(b, k),
        A = g[R];
      if (typeof A == "number") return A;
    }
    return null;
  }
  function Ri(b) {
    (o = {}), (l = ku(b, i, void 0, o));
  }
  return (
    (P = {
      get basename() {
        return s;
      },
      get future() {
        return d;
      },
      get state() {
        return x;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: _n,
      subscribe: tn,
      enableScrollRestoration: Oe,
      navigate: $n,
      fetch: kn,
      revalidate: We,
      createHref: (b) => e.history.createHref(b),
      encodeLocation: (b) => e.history.encodeLocation(b),
      getFetcher: On,
      deleteFetcher: Qn,
      dispose: en,
      getBlocker: ne,
      deleteBlocker: Te,
      _internalFetchControllers: T,
      _internalActiveDeferreds: ue,
      _internalSetRoutes: Ri,
    }),
    P
  );
}
function nw(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Ou(e, t, n, r, i, o, a, l) {
  let s, u;
  if (a) {
    s = [];
    for (let f of t)
      if ((s.push(f), f.route.id === a)) {
        u = f;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let d = Qc(i || ".", Bc(s, o), Oi(e.pathname, n) || e.pathname, l === "path");
  return (
    i == null && ((d.search = e.search), (d.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      u &&
      u.route.index &&
      !Kc(d.search) &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (d.pathname = d.pathname === "/" ? n : Mn([n, d.pathname])),
    Mr(d)
  );
}
function mf(e, t, n, r) {
  if (!r || !nw(r)) return { path: n };
  if (r.formMethod && !pw(r.formMethod))
    return { path: n, error: Wt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: Wt(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    a = e ? o.toUpperCase() : o.toLowerCase(),
    l = Dm(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!fn(a)) return i();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((g, y) => {
              let [w, E] = y;
              return (
                "" +
                g +
                w +
                "=" +
                E +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: l,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!fn(a)) return i();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: l,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  pe(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, u;
  if (r.formData) (s = Pu(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = Pu(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = xf(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = xf(s));
    } catch {
      return i();
    }
  let d = {
    formMethod: a,
    formAction: l,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (fn(d.formMethod)) return { path: n, submission: d };
  let f = yr(n);
  return (
    t && f.search && Kc(f.search) && s.append("index", ""),
    (f.search = "?" + s),
    { path: Mr(f), submission: d }
  );
}
function rw(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function vf(e, t, n, r, i, o, a, l, s, u, d, f, p, g, y, w) {
  let E = w ? (Kt(w[1]) ? w[1].error : w[1].data) : void 0,
    v = e.createURL(t.location),
    h = e.createURL(i),
    m = w && Kt(w[1]) ? w[0] : void 0,
    C = m ? rw(n, m) : n,
    O = w ? w[1].statusCode : void 0,
    P = a && O && O >= 400,
    x = C.filter((j, _) => {
      let { route: D } = j;
      if (D.lazy) return !0;
      if (D.loader == null) return !1;
      if (o)
        return typeof D.loader != "function" || D.loader.hydrate
          ? !0
          : t.loaderData[D.id] === void 0 &&
              (!t.errors || t.errors[D.id] === void 0);
      if (iw(t.loaderData, t.matches[_], j) || s.some((M) => M === j.route.id))
        return !0;
      let U = t.matches[_],
        $ = j;
      return yf(
        j,
        Fe(
          {
            currentUrl: v,
            currentParams: U.params,
            nextUrl: h,
            nextParams: $.params,
          },
          r,
          {
            actionResult: E,
            unstable_actionStatus: O,
            defaultShouldRevalidate: P
              ? !1
              : l ||
                v.pathname + v.search === h.pathname + h.search ||
                v.search !== h.search ||
                Mm(U, $),
          }
        )
      );
    }),
    L = [];
  return (
    f.forEach((j, _) => {
      if (o || !n.some((H) => H.route.id === j.routeId) || d.has(_)) return;
      let D = ti(g, j.path, y);
      if (!D) {
        L.push({
          key: _,
          routeId: j.routeId,
          path: j.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let U = t.fetchers.get(_),
        $ = ju(D, j.path),
        M = !1;
      p.has(_)
        ? (M = !1)
        : u.includes(_)
        ? (M = !0)
        : U && U.state !== "idle" && U.data === void 0
        ? (M = l)
        : (M = yf(
            $,
            Fe(
              {
                currentUrl: v,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: h,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: E,
                unstable_actionStatus: O,
                defaultShouldRevalidate: P ? !1 : l,
              }
            )
          )),
        M &&
          L.push({
            key: _,
            routeId: j.routeId,
            path: j.path,
            matches: D,
            match: $,
            controller: new AbortController(),
          });
    }),
    [x, L]
  );
}
function iw(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function Mm(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function yf(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function gf(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  pe(i, "No route found in manifest");
  let o = {};
  for (let a in r) {
    let s = i[a] !== void 0 && a !== "hasErrorBoundary";
    yi(
      !s,
      'Route "' +
        i.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !s && !O0.has(a) && (o[a] = r[a]);
  }
  Object.assign(i, o), Object.assign(i, Fe({}, t(i), { lazy: void 0 }));
}
function ow(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function aw(e, t, n, r, i, o, a, l) {
  let s = r.reduce((f, p) => f.add(p.route.id), new Set()),
    u = new Set(),
    d = await e({
      matches: i.map((f) => {
        let p = s.has(f.route.id);
        return Fe({}, f, {
          shouldLoad: p,
          resolve: (y) => (
            u.add(f.route.id),
            p
              ? lw(t, n, f, o, a, y, l)
              : Promise.resolve({ type: Le.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: i[0].params,
      context: l,
    });
  return (
    i.forEach((f) =>
      pe(
        u.has(f.route.id),
        '`match.resolve()` was not called for route id "' +
          f.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    d.filter((f, p) => s.has(i[p].route.id))
  );
}
async function lw(e, t, n, r, i, o, a) {
  let l,
    s,
    u = (d) => {
      let f,
        p = new Promise((w, E) => (f = E));
      (s = () => f()), t.signal.addEventListener("abort", s);
      let g = (w) =>
          typeof d != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : d(
                { request: t, params: n.params, context: a },
                ...(w !== void 0 ? [w] : [])
              ),
        y;
      return (
        o
          ? (y = o((w) => g(w)))
          : (y = (async () => {
              try {
                return { type: "data", result: await g() };
              } catch (w) {
                return { type: "error", result: w };
              }
            })()),
        Promise.race([y, p])
      );
    };
  try {
    let d = n.route[e];
    if (n.route.lazy)
      if (d) {
        let f,
          [p] = await Promise.all([
            u(d).catch((g) => {
              f = g;
            }),
            gf(n.route, i, r),
          ]);
        if (f !== void 0) throw f;
        l = p;
      } else if ((await gf(n.route, i, r), (d = n.route[e]), d)) l = await u(d);
      else if (e === "action") {
        let f = new URL(t.url),
          p = f.pathname + f.search;
        throw Wt(405, { method: t.method, pathname: p, routeId: n.route.id });
      } else return { type: Le.data, result: void 0 };
    else if (d) l = await u(d);
    else {
      let f = new URL(t.url),
        p = f.pathname + f.search;
      throw Wt(404, { pathname: p });
    }
    pe(
      l.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (d) {
    return { type: Le.error, result: d };
  } finally {
    s && t.signal.removeEventListener("abort", s);
  }
  return l;
}
async function sw(e) {
  let { result: t, type: n, status: r } = e;
  if (Im(t)) {
    let a;
    try {
      let l = t.headers.get("Content-Type");
      l && /\bapplication\/json\b/.test(l)
        ? t.body == null
          ? (a = null)
          : (a = await t.json())
        : (a = await t.text());
    } catch (l) {
      return { type: Le.error, error: l };
    }
    return n === Le.error
      ? {
          type: Le.error,
          error: new Wc(t.status, t.statusText, a),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: Le.data, data: a, statusCode: t.status, headers: t.headers };
  }
  if (n === Le.error)
    return { type: Le.error, error: t, statusCode: qc(t) ? t.status : r };
  if (hw(t)) {
    var i, o;
    return {
      type: Le.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: Le.data, data: t, statusCode: r };
}
function uw(e, t, n, r, i, o) {
  let a = e.headers.get("Location");
  if (
    (pe(
      a,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Vc.test(a))
  ) {
    let l = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
    (a = Ou(new URL(t.url), l, i, !0, a, o)), e.headers.set("Location", a);
  }
  return e;
}
function wf(e, t, n) {
  if (Vc.test(e)) {
    let r = e,
      i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      o = Oi(i.pathname, n) != null;
    if (i.origin === t.origin && o) return i.pathname + i.search + i.hash;
  }
  return e;
}
function Hr(e, t, n, r) {
  let i = e.createURL(Dm(t)).toString(),
    o = { signal: n };
  if (r && fn(r.formMethod)) {
    let { formMethod: a, formEncType: l } = r;
    (o.method = a.toUpperCase()),
      l === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": l })),
          (o.body = JSON.stringify(r.json)))
        : l === "text/plain"
        ? (o.body = r.text)
        : l === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = Pu(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function Pu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function xf(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function cw(e, t, n, r, i, o) {
  let a = {},
    l = null,
    s,
    u = !1,
    d = {},
    f = r && Kt(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((p, g) => {
      let y = t[g].route.id;
      if (
        (pe(!_r(p), "Cannot handle redirect results in processLoaderData"),
        Kt(p))
      ) {
        let w = p.error;
        f !== void 0 && ((w = f), (f = void 0)), (l = l || {});
        {
          let E = lo(e, y);
          l[E.route.id] == null && (l[E.route.id] = w);
        }
        (a[y] = void 0),
          u || ((u = !0), (s = qc(p.error) ? p.error.status : 500)),
          p.headers && (d[y] = p.headers);
      } else
        Cr(p)
          ? (i.set(y, p.deferredData),
            (a[y] = p.deferredData.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !u &&
              (s = p.statusCode),
            p.headers && (d[y] = p.headers))
          : ((a[y] = p.data),
            p.statusCode && p.statusCode !== 200 && !u && (s = p.statusCode),
            p.headers && (d[y] = p.headers));
    }),
    f !== void 0 && r && ((l = { [r[0]]: f }), (a[r[0]] = void 0)),
    { loaderData: a, errors: l, statusCode: s || 200, loaderHeaders: d }
  );
}
function Sf(e, t, n, r, i, o, a, l) {
  let { loaderData: s, errors: u } = cw(t, n, r, i, l);
  for (let d = 0; d < o.length; d++) {
    let { key: f, match: p, controller: g } = o[d];
    pe(
      a !== void 0 && a[d] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = a[d];
    if (!(g && g.signal.aborted))
      if (Kt(y)) {
        let w = lo(e.matches, p == null ? void 0 : p.route.id);
        (u && u[w.route.id]) || (u = Fe({}, u, { [w.route.id]: y.error })),
          e.fetchers.delete(f);
      } else if (_r(y)) pe(!1, "Unhandled fetcher revalidation redirect");
      else if (Cr(y)) pe(!1, "Unhandled fetcher deferred data");
      else {
        let w = Yn(y.data);
        e.fetchers.set(f, w);
      }
  }
  return { loaderData: s, errors: u };
}
function bf(e, t, n, r) {
  let i = Fe({}, t);
  for (let o of n) {
    let a = o.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (i[a] = t[a])
        : e[a] !== void 0 && o.route.loader && (i[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return i;
}
function Ef(e) {
  return e
    ? Kt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function lo(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Cf(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Wt(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i && n && r
          ? (l =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (l = "defer() is not supported in actions")
          : o === "invalid-body" && (l = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        i && n && r
          ? (l =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Wc(e || 500, a, new Error(l), !0)
  );
}
function _f(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (_r(n)) return { result: n, idx: t };
  }
}
function Dm(e) {
  let t = typeof e == "string" ? yr(e) : e;
  return Mr(Fe({}, t, { hash: "" }));
}
function dw(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function fw(e) {
  return Im(e.result) && X0.has(e.result.status);
}
function Cr(e) {
  return e.type === Le.deferred;
}
function Kt(e) {
  return e.type === Le.error;
}
function _r(e) {
  return (e && e.type) === Le.redirect;
}
function hw(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Im(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function pw(e) {
  return G0.has(e.toLowerCase());
}
function fn(e) {
  return K0.has(e.toLowerCase());
}
async function kf(e, t, n, r, i, o) {
  for (let a = 0; a < n.length; a++) {
    let l = n[a],
      s = t[a];
    if (!s) continue;
    let u = e.find((f) => f.route.id === s.route.id),
      d = u != null && !Mm(u, s) && (o && o[s.route.id]) !== void 0;
    if (Cr(l) && (i || d)) {
      let f = r[a];
      pe(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await zm(l, f, i).then((p) => {
          p && (n[a] = p || n[a]);
        });
    }
  }
}
async function zm(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Le.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Le.error, error: i };
      }
    return { type: Le.data, data: e.deferredData.data };
  }
}
function Kc(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function ju(e, t) {
  let n = typeof t == "string" ? yr(t).search : t.search;
  if (e[e.length - 1].route.index && Kc(n || "")) return e[e.length - 1];
  let r = Tm(e);
  return r[r.length - 1];
}
function Of(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: a,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function vs(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function mw(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Bi(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function vw(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Yn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function yw(e, t) {
  try {
    let n = e.sessionStorage.getItem(Lm);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {}
}
function gw(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(Lm, JSON.stringify(n));
    } catch (r) {
      yi(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ya() {
  return (
    (Ya = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ya.apply(this, arguments)
  );
}
const Tl = N.createContext(null),
  Am = N.createContext(null),
  Ar = N.createContext(null),
  Yc = N.createContext(null),
  Un = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fm = N.createContext(null);
function ww(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Do() || pe(!1);
  let { basename: r, navigator: i } = N.useContext(Ar),
    { hash: o, pathname: a, search: l } = $m(e, { relative: n }),
    s = a;
  return (
    r !== "/" && (s = a === "/" ? r : Mn([r, a])),
    i.createHref({ pathname: s, search: l, hash: o })
  );
}
function Do() {
  return N.useContext(Yc) != null;
}
function Rl() {
  return Do() || pe(!1), N.useContext(Yc).location;
}
function Um(e) {
  N.useContext(Ar).static || N.useLayoutEffect(e);
}
function Io() {
  let { isDataRoute: e } = N.useContext(Un);
  return e ? Lw() : xw();
}
function xw() {
  Do() || pe(!1);
  let e = N.useContext(Tl),
    { basename: t, future: n, navigator: r } = N.useContext(Ar),
    { matches: i } = N.useContext(Un),
    { pathname: o } = Rl(),
    a = JSON.stringify(Bc(i, n.v7_relativeSplatPath)),
    l = N.useRef(!1);
  return (
    Um(() => {
      l.current = !0;
    }),
    N.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Qc(u, JSON.parse(a), o, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Mn([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, a, o, e]
    )
  );
}
const Sw = N.createContext(null);
function bw(e) {
  let t = N.useContext(Un).outlet;
  return t && N.createElement(Sw.Provider, { value: e }, t);
}
function Ll() {
  let { matches: e } = N.useContext(Un),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function $m(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = N.useContext(Ar),
    { matches: i } = N.useContext(Un),
    { pathname: o } = Rl(),
    a = JSON.stringify(Bc(i, r.v7_relativeSplatPath));
  return N.useMemo(() => Qc(e, JSON.parse(a), o, n === "path"), [e, a, o, n]);
}
function Ew(e, t, n, r) {
  Do() || pe(!1);
  let { navigator: i } = N.useContext(Ar),
    { matches: o } = N.useContext(Un),
    a = o[o.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let s = a ? a.pathnameBase : "/";
  a && a.route;
  let u = Rl(),
    d;
  d = u;
  let f = d.pathname || "/",
    p = f;
  if (s !== "/") {
    let w = s.replace(/^\//, "").split("/");
    p = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let g = ti(e, { pathname: p });
  return Pw(
    g &&
      g.map((w) =>
        Object.assign({}, w, {
          params: Object.assign({}, l, w.params),
          pathname: Mn([
            s,
            i.encodeLocation
              ? i.encodeLocation(w.pathname).pathname
              : w.pathname,
          ]),
          pathnameBase:
            w.pathnameBase === "/"
              ? s
              : Mn([
                  s,
                  i.encodeLocation
                    ? i.encodeLocation(w.pathnameBase).pathname
                    : w.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
}
function Cw() {
  let e = Rw(),
    t = qc(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: i }, n) : null,
    null
  );
}
const _w = N.createElement(Cw, null);
class kw extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          Un.Provider,
          { value: this.props.routeContext },
          N.createElement(Fm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Ow(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = N.useContext(Tl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(Un.Provider, { value: t }, r)
  );
}
function Pw(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let a = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let d = a.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    );
    d >= 0 || pe(!1), (a = a.slice(0, Math.min(a.length, d + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < a.length; d++) {
      let f = a[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: p, errors: g } = n,
          y =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!g || g[f.route.id] === void 0);
        if (f.route.lazy || y) {
          (s = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((d, f, p) => {
    let g,
      y = !1,
      w = null,
      E = null;
    n &&
      ((g = l && f.route.id ? l[f.route.id] : void 0),
      (w = f.route.errorElement || _w),
      s &&
        (u < 0 && p === 0
          ? ((y = !0), (E = null))
          : u === p &&
            ((y = !0), (E = f.route.hydrateFallbackElement || null))));
    let v = t.concat(a.slice(0, p + 1)),
      h = () => {
        let m;
        return (
          g
            ? (m = w)
            : y
            ? (m = E)
            : f.route.Component
            ? (m = N.createElement(f.route.Component, null))
            : f.route.element
            ? (m = f.route.element)
            : (m = d),
          N.createElement(Ow, {
            match: f,
            routeContext: { outlet: d, matches: v, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? N.createElement(kw, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: h(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Hm = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Hm || {}),
  Ga = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ga || {});
function jw(e) {
  let t = N.useContext(Tl);
  return t || pe(!1), t;
}
function Nw(e) {
  let t = N.useContext(Am);
  return t || pe(!1), t;
}
function Tw(e) {
  let t = N.useContext(Un);
  return t || pe(!1), t;
}
function Bm(e) {
  let t = Tw(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || pe(!1), n.route.id;
}
function Rw() {
  var e;
  let t = N.useContext(Fm),
    n = Nw(Ga.UseRouteError),
    r = Bm(Ga.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Lw() {
  let { router: e } = jw(Hm.UseNavigateStable),
    t = Bm(Ga.UseNavigateStable),
    n = N.useRef(!1);
  return (
    Um(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Ya({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Mw(e) {
  return bw(e.context);
}
function Dw(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ge.Pop,
    navigator: o,
    static: a = !1,
    future: l,
  } = e;
  Do() && pe(!1);
  let s = t.replace(/^\/*/, "/"),
    u = N.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: a,
        future: Ya({ v7_relativeSplatPath: !1 }, l),
      }),
      [s, l, o, a]
    );
  typeof r == "string" && (r = yr(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: p = "",
      state: g = null,
      key: y = "default",
    } = r,
    w = N.useMemo(() => {
      let E = Oi(d, s);
      return E == null
        ? null
        : {
            location: { pathname: E, search: f, hash: p, state: g, key: y },
            navigationType: i,
          };
    }, [s, d, f, p, g, y, i]);
  return w == null
    ? null
    : N.createElement(
        Ar.Provider,
        { value: u },
        N.createElement(Yc.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
function Iw(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: N.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: N.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: N.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Po() {
  return (
    (Po = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Po.apply(this, arguments)
  );
}
function zw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Aw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Fw(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Aw(e);
}
const Uw = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  $w = "6";
try {
  window.__reactRouterVersion = $w;
} catch {}
function Hw(e, t) {
  return tw({
    basename: void 0,
    future: Po({}, void 0, { v7_prependBasename: !0 }),
    history: C0({ window: void 0 }),
    hydrationData: Bw(),
    routes: e,
    mapRouteProperties: Iw,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function Bw() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Po({}, t, { errors: Qw(t.errors) })), t;
}
function Qw(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Wc(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let a = new o(i.message);
            (a.stack = ""), (n[r] = a);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const Ww = N.createContext({ isTransitioning: !1 }),
  qw = N.createContext(new Map()),
  Vw = "startTransition",
  Pf = fy[Vw],
  Kw = "flushSync",
  jf = E0[Kw];
function Yw(e) {
  Pf ? Pf(e) : e();
}
function Qi(e) {
  jf ? jf(e) : e();
}
class Gw {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function Xw(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = N.useState(n.state),
    [a, l] = N.useState(),
    [s, u] = N.useState({ isTransitioning: !1 }),
    [d, f] = N.useState(),
    [p, g] = N.useState(),
    [y, w] = N.useState(),
    E = N.useRef(new Map()),
    { v7_startTransition: v } = r || {},
    h = N.useCallback(
      (x) => {
        v ? Yw(x) : x();
      },
      [v]
    ),
    m = N.useCallback(
      (x, L) => {
        let {
          deletedFetchers: j,
          unstable_flushSync: _,
          unstable_viewTransitionOpts: D,
        } = L;
        j.forEach(($) => E.current.delete($)),
          x.fetchers.forEach(($, M) => {
            $.data !== void 0 && E.current.set(M, $.data);
          });
        let U =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!D || U) {
          _ ? Qi(() => o(x)) : h(() => o(x));
          return;
        }
        if (_) {
          Qi(() => {
            p && (d && d.resolve(), p.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: D.currentLocation,
                nextLocation: D.nextLocation,
              });
          });
          let $ = n.window.document.startViewTransition(() => {
            Qi(() => o(x));
          });
          $.finished.finally(() => {
            Qi(() => {
              f(void 0), g(void 0), l(void 0), u({ isTransitioning: !1 });
            });
          }),
            Qi(() => g($));
          return;
        }
        p
          ? (d && d.resolve(),
            p.skipTransition(),
            w({
              state: x,
              currentLocation: D.currentLocation,
              nextLocation: D.nextLocation,
            }))
          : (l(x),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: D.currentLocation,
              nextLocation: D.nextLocation,
            }));
      },
      [n.window, p, d, E, h]
    );
  N.useLayoutEffect(() => n.subscribe(m), [n, m]),
    N.useEffect(() => {
      s.isTransitioning && !s.flushSync && f(new Gw());
    }, [s]),
    N.useEffect(() => {
      if (d && a && n.window) {
        let x = a,
          L = d.promise,
          j = n.window.document.startViewTransition(async () => {
            h(() => o(x)), await L;
          });
        j.finished.finally(() => {
          f(void 0), g(void 0), l(void 0), u({ isTransitioning: !1 });
        }),
          g(j);
      }
    }, [h, a, d, n.window]),
    N.useEffect(() => {
      d && a && i.location.key === a.location.key && d.resolve();
    }, [d, p, i.location, a]),
    N.useEffect(() => {
      !s.isTransitioning &&
        y &&
        (l(y.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        w(void 0));
    }, [s.isTransitioning, y]),
    N.useEffect(() => {}, []);
  let C = N.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (x) => n.navigate(x),
        push: (x, L, j) =>
          n.navigate(x, {
            state: L,
            preventScrollReset: j == null ? void 0 : j.preventScrollReset,
          }),
        replace: (x, L, j) =>
          n.navigate(x, {
            replace: !0,
            state: L,
            preventScrollReset: j == null ? void 0 : j.preventScrollReset,
          }),
      }),
      [n]
    ),
    O = n.basename || "/",
    P = N.useMemo(
      () => ({ router: n, navigator: C, static: !1, basename: O }),
      [n, C, O]
    );
  return N.createElement(
    N.Fragment,
    null,
    N.createElement(
      Tl.Provider,
      { value: P },
      N.createElement(
        Am.Provider,
        { value: i },
        N.createElement(
          qw.Provider,
          { value: E.current },
          N.createElement(
            Ww.Provider,
            { value: s },
            N.createElement(
              Dw,
              {
                basename: O,
                location: i.location,
                navigationType: i.historyAction,
                navigator: C,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              i.initialized || n.future.v7_partialHydration
                ? N.createElement(Jw, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function Jw(e) {
  let { routes: t, future: n, state: r } = e;
  return Ew(t, void 0, r, n);
}
const Zw =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  e1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  xt = N.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: a,
        state: l,
        target: s,
        to: u,
        preventScrollReset: d,
        unstable_viewTransition: f,
      } = t,
      p = zw(t, Uw),
      { basename: g } = N.useContext(Ar),
      y,
      w = !1;
    if (typeof u == "string" && e1.test(u) && ((y = u), Zw))
      try {
        let m = new URL(window.location.href),
          C = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          O = Oi(C.pathname, g);
        C.origin === m.origin && O != null
          ? (u = O + C.search + C.hash)
          : (w = !0);
      } catch {}
    let E = ww(u, { relative: i }),
      v = t1(u, {
        replace: a,
        state: l,
        target: s,
        preventScrollReset: d,
        relative: i,
        unstable_viewTransition: f,
      });
    function h(m) {
      r && r(m), m.defaultPrevented || v(m);
    }
    return N.createElement(
      "a",
      Po({}, p, { href: y || E, onClick: w || o ? r : h, ref: n, target: s })
    );
  });
var Nf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Nf || (Nf = {}));
var Tf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Tf || (Tf = {}));
function t1(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: a,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    s = Io(),
    u = Rl(),
    d = $m(e, { relative: a });
  return N.useCallback(
    (f) => {
      if (Fw(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : Mr(u) === Mr(d);
        s(e, {
          replace: p,
          state: i,
          preventScrollReset: o,
          relative: a,
          unstable_viewTransition: l,
        });
      }
    },
    [u, s, d, r, i, n, e, o, a, l]
  );
}
function Nu(e, t) {
  return (
    (Nu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Nu(e, t)
  );
}
function Pi(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Nu(e, t);
}
var ji = (function () {
  function e() {
    this.listeners = [];
  }
  var t = e.prototype;
  return (
    (t.subscribe = function (r) {
      var i = this,
        o = r || function () {};
      return (
        this.listeners.push(o),
        this.onSubscribe(),
        function () {
          (i.listeners = i.listeners.filter(function (a) {
            return a !== o;
          })),
            i.onUnsubscribe();
        }
      );
    }),
    (t.hasListeners = function () {
      return this.listeners.length > 0;
    }),
    (t.onSubscribe = function () {}),
    (t.onUnsubscribe = function () {}),
    e
  );
})();
function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ce.apply(this, arguments)
  );
}
var Xa = typeof window > "u";
function st() {}
function n1(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Tu(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Ja(e) {
  return Array.isArray(e) ? e : [e];
}
function Qm(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function xa(e, t, n) {
  return zo(e)
    ? typeof t == "function"
      ? ce({}, n, { queryKey: e, queryFn: t })
      : ce({}, t, { queryKey: e })
    : e;
}
function r1(e, t, n) {
  return zo(e)
    ? typeof t == "function"
      ? ce({}, n, { mutationKey: e, mutationFn: t })
      : ce({}, t, { mutationKey: e })
    : typeof e == "function"
    ? ce({}, t, { mutationFn: e })
    : ce({}, e);
}
function Jn(e, t, n) {
  return zo(e) ? [ce({}, t, { queryKey: e }), n] : [e || {}, t];
}
function i1(e, t) {
  if ((e === !0 && t === !0) || (e == null && t == null)) return "all";
  if (e === !1 && t === !1) return "none";
  var n = e ?? !t;
  return n ? "active" : "inactive";
}
function Rf(e, t) {
  var n = e.active,
    r = e.exact,
    i = e.fetching,
    o = e.inactive,
    a = e.predicate,
    l = e.queryKey,
    s = e.stale;
  if (zo(l)) {
    if (r) {
      if (t.queryHash !== Gc(l, t.options)) return !1;
    } else if (!Za(t.queryKey, l)) return !1;
  }
  var u = i1(n, o);
  if (u === "none") return !1;
  if (u !== "all") {
    var d = t.isActive();
    if ((u === "active" && !d) || (u === "inactive" && d)) return !1;
  }
  return !(
    (typeof s == "boolean" && t.isStale() !== s) ||
    (typeof i == "boolean" && t.isFetching() !== i) ||
    (a && !a(t))
  );
}
function Lf(e, t) {
  var n = e.exact,
    r = e.fetching,
    i = e.predicate,
    o = e.mutationKey;
  if (zo(o)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (kr(t.options.mutationKey) !== kr(o)) return !1;
    } else if (!Za(t.options.mutationKey, o)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (i && !i(t))
  );
}
function Gc(e, t) {
  var n = (t == null ? void 0 : t.queryKeyHashFn) || kr;
  return n(e);
}
function kr(e) {
  var t = Ja(e);
  return o1(t);
}
function o1(e) {
  return JSON.stringify(e, function (t, n) {
    return Ru(n)
      ? Object.keys(n)
          .sort()
          .reduce(function (r, i) {
            return (r[i] = n[i]), r;
          }, {})
      : n;
  });
}
function Za(e, t) {
  return Wm(Ja(e), Ja(t));
}
function Wm(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some(function (n) {
        return !Wm(e[n], t[n]);
      })
    : !1;
}
function el(e, t) {
  if (e === t) return e;
  var n = Array.isArray(e) && Array.isArray(t);
  if (n || (Ru(e) && Ru(t))) {
    for (
      var r = n ? e.length : Object.keys(e).length,
        i = n ? t : Object.keys(t),
        o = i.length,
        a = n ? [] : {},
        l = 0,
        s = 0;
      s < o;
      s++
    ) {
      var u = n ? s : i[s];
      (a[u] = el(e[u], t[u])), a[u] === e[u] && l++;
    }
    return r === o && l === r ? e : a;
  }
  return t;
}
function a1(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (var n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Ru(e) {
  if (!Mf(e)) return !1;
  var t = e.constructor;
  if (typeof t > "u") return !0;
  var n = t.prototype;
  return !(!Mf(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Mf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function zo(e) {
  return typeof e == "string" || Array.isArray(e);
}
function l1(e) {
  return new Promise(function (t) {
    setTimeout(t, e);
  });
}
function Df(e) {
  Promise.resolve()
    .then(e)
    .catch(function (t) {
      return setTimeout(function () {
        throw t;
      });
    });
}
function qm() {
  if (typeof AbortController == "function") return new AbortController();
}
var s1 = (function (e) {
    Pi(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var o;
          if (!Xa && (o = window) != null && o.addEventListener) {
            var a = function () {
              return i();
            };
            return (
              window.addEventListener("visibilitychange", a, !1),
              window.addEventListener("focus", a, !1),
              function () {
                window.removeEventListener("visibilitychange", a),
                  window.removeEventListener("focus", a);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var o,
          a = this;
        (this.setup = i),
          (o = this.cleanup) == null || o.call(this),
          (this.cleanup = i(function (l) {
            typeof l == "boolean" ? a.setFocused(l) : a.onFocus();
          }));
      }),
      (n.setFocused = function (i) {
        (this.focused = i), i && this.onFocus();
      }),
      (n.onFocus = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isFocused = function () {
        return typeof this.focused == "boolean"
          ? this.focused
          : typeof document > "u"
          ? !0
          : [void 0, "visible", "prerender"].includes(document.visibilityState);
      }),
      t
    );
  })(ji),
  so = new s1(),
  u1 = (function (e) {
    Pi(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var o;
          if (!Xa && (o = window) != null && o.addEventListener) {
            var a = function () {
              return i();
            };
            return (
              window.addEventListener("online", a, !1),
              window.addEventListener("offline", a, !1),
              function () {
                window.removeEventListener("online", a),
                  window.removeEventListener("offline", a);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var o,
          a = this;
        (this.setup = i),
          (o = this.cleanup) == null || o.call(this),
          (this.cleanup = i(function (l) {
            typeof l == "boolean" ? a.setOnline(l) : a.onOnline();
          }));
      }),
      (n.setOnline = function (i) {
        (this.online = i), i && this.onOnline();
      }),
      (n.onOnline = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isOnline = function () {
        return typeof this.online == "boolean"
          ? this.online
          : typeof navigator > "u" || typeof navigator.onLine > "u"
          ? !0
          : navigator.onLine;
      }),
      t
    );
  })(ji),
  Sa = new u1();
function c1(e) {
  return Math.min(1e3 * Math.pow(2, e), 3e4);
}
function tl(e) {
  return typeof (e == null ? void 0 : e.cancel) == "function";
}
var Vm = function (t) {
  (this.revert = t == null ? void 0 : t.revert),
    (this.silent = t == null ? void 0 : t.silent);
};
function ba(e) {
  return e instanceof Vm;
}
var Km = function (t) {
    var n = this,
      r = !1,
      i,
      o,
      a,
      l;
    (this.abort = t.abort),
      (this.cancel = function (p) {
        return i == null ? void 0 : i(p);
      }),
      (this.cancelRetry = function () {
        r = !0;
      }),
      (this.continueRetry = function () {
        r = !1;
      }),
      (this.continue = function () {
        return o == null ? void 0 : o();
      }),
      (this.failureCount = 0),
      (this.isPaused = !1),
      (this.isResolved = !1),
      (this.isTransportCancelable = !1),
      (this.promise = new Promise(function (p, g) {
        (a = p), (l = g);
      }));
    var s = function (g) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onSuccess == null || t.onSuccess(g),
          o == null || o(),
          a(g));
      },
      u = function (g) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onError == null || t.onError(g),
          o == null || o(),
          l(g));
      },
      d = function () {
        return new Promise(function (g) {
          (o = g), (n.isPaused = !0), t.onPause == null || t.onPause();
        }).then(function () {
          (o = void 0),
            (n.isPaused = !1),
            t.onContinue == null || t.onContinue();
        });
      },
      f = function p() {
        if (!n.isResolved) {
          var g;
          try {
            g = t.fn();
          } catch (y) {
            g = Promise.reject(y);
          }
          (i = function (w) {
            if (
              !n.isResolved &&
              (u(new Vm(w)), n.abort == null || n.abort(), tl(g))
            )
              try {
                g.cancel();
              } catch {}
          }),
            (n.isTransportCancelable = tl(g)),
            Promise.resolve(g)
              .then(s)
              .catch(function (y) {
                var w, E;
                if (!n.isResolved) {
                  var v = (w = t.retry) != null ? w : 3,
                    h = (E = t.retryDelay) != null ? E : c1,
                    m = typeof h == "function" ? h(n.failureCount, y) : h,
                    C =
                      v === !0 ||
                      (typeof v == "number" && n.failureCount < v) ||
                      (typeof v == "function" && v(n.failureCount, y));
                  if (r || !C) {
                    u(y);
                    return;
                  }
                  n.failureCount++,
                    t.onFail == null || t.onFail(n.failureCount, y),
                    l1(m)
                      .then(function () {
                        if (!so.isFocused() || !Sa.isOnline()) return d();
                      })
                      .then(function () {
                        r ? u(y) : p();
                      });
                }
              });
        }
      };
    f();
  },
  d1 = (function () {
    function e() {
      (this.queue = []),
        (this.transactions = 0),
        (this.notifyFn = function (n) {
          n();
        }),
        (this.batchNotifyFn = function (n) {
          n();
        });
    }
    var t = e.prototype;
    return (
      (t.batch = function (r) {
        var i;
        this.transactions++;
        try {
          i = r();
        } finally {
          this.transactions--, this.transactions || this.flush();
        }
        return i;
      }),
      (t.schedule = function (r) {
        var i = this;
        this.transactions
          ? this.queue.push(r)
          : Df(function () {
              i.notifyFn(r);
            });
      }),
      (t.batchCalls = function (r) {
        var i = this;
        return function () {
          for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++)
            a[l] = arguments[l];
          i.schedule(function () {
            r.apply(void 0, a);
          });
        };
      }),
      (t.flush = function () {
        var r = this,
          i = this.queue;
        (this.queue = []),
          i.length &&
            Df(function () {
              r.batchNotifyFn(function () {
                i.forEach(function (o) {
                  r.notifyFn(o);
                });
              });
            });
      }),
      (t.setNotifyFunction = function (r) {
        this.notifyFn = r;
      }),
      (t.setBatchNotifyFunction = function (r) {
        this.batchNotifyFn = r;
      }),
      e
    );
  })(),
  Me = new d1(),
  Ym = console;
function nl() {
  return Ym;
}
function f1(e) {
  Ym = e;
}
var h1 = (function () {
    function e(n) {
      (this.abortSignalConsumed = !1),
        (this.hadObservers = !1),
        (this.defaultOptions = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.cache = n.cache),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.initialState = n.state || this.getDefaultState(this.options)),
        (this.state = this.initialState),
        (this.meta = n.meta),
        this.scheduleGc();
    }
    var t = e.prototype;
    return (
      (t.setOptions = function (r) {
        var i;
        (this.options = ce({}, this.defaultOptions, r)),
          (this.meta = r == null ? void 0 : r.meta),
          (this.cacheTime = Math.max(
            this.cacheTime || 0,
            (i = this.options.cacheTime) != null ? i : 5 * 60 * 1e3
          ));
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.scheduleGc = function () {
        var r = this;
        this.clearGcTimeout(),
          Tu(this.cacheTime) &&
            (this.gcTimeout = setTimeout(function () {
              r.optionalRemove();
            }, this.cacheTime));
      }),
      (t.clearGcTimeout = function () {
        this.gcTimeout &&
          (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
      }),
      (t.optionalRemove = function () {
        this.observers.length ||
          (this.state.isFetching
            ? this.hadObservers && this.scheduleGc()
            : this.cache.remove(this));
      }),
      (t.setData = function (r, i) {
        var o,
          a,
          l = this.state.data,
          s = n1(r, l);
        return (
          (o = (a = this.options).isDataEqual) != null && o.call(a, l, s)
            ? (s = l)
            : this.options.structuralSharing !== !1 && (s = el(l, s)),
          this.dispatch({
            data: s,
            type: "success",
            dataUpdatedAt: i == null ? void 0 : i.updatedAt,
          }),
          s
        );
      }),
      (t.setState = function (r, i) {
        this.dispatch({ type: "setState", state: r, setStateOptions: i });
      }),
      (t.cancel = function (r) {
        var i,
          o = this.promise;
        return (
          (i = this.retryer) == null || i.cancel(r),
          o ? o.then(st).catch(st) : Promise.resolve()
        );
      }),
      (t.destroy = function () {
        this.clearGcTimeout(), this.cancel({ silent: !0 });
      }),
      (t.reset = function () {
        this.destroy(), this.setState(this.initialState);
      }),
      (t.isActive = function () {
        return this.observers.some(function (r) {
          return r.options.enabled !== !1;
        });
      }),
      (t.isFetching = function () {
        return this.state.isFetching;
      }),
      (t.isStale = function () {
        return (
          this.state.isInvalidated ||
          !this.state.dataUpdatedAt ||
          this.observers.some(function (r) {
            return r.getCurrentResult().isStale;
          })
        );
      }),
      (t.isStaleByTime = function (r) {
        return (
          r === void 0 && (r = 0),
          this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !Qm(this.state.dataUpdatedAt, r)
        );
      }),
      (t.onFocus = function () {
        var r,
          i = this.observers.find(function (o) {
            return o.shouldFetchOnWindowFocus();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.onOnline = function () {
        var r,
          i = this.observers.find(function (o) {
            return o.shouldFetchOnReconnect();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 &&
          (this.observers.push(r),
          (this.hadObservers = !0),
          this.clearGcTimeout(),
          this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: r,
          }));
      }),
      (t.removeObserver = function (r) {
        this.observers.indexOf(r) !== -1 &&
          ((this.observers = this.observers.filter(function (i) {
            return i !== r;
          })),
          this.observers.length ||
            (this.retryer &&
              (this.retryer.isTransportCancelable || this.abortSignalConsumed
                ? this.retryer.cancel({ revert: !0 })
                : this.retryer.cancelRetry()),
            this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
          this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: r,
          }));
      }),
      (t.getObserversCount = function () {
        return this.observers.length;
      }),
      (t.invalidate = function () {
        this.state.isInvalidated || this.dispatch({ type: "invalidate" });
      }),
      (t.fetch = function (r, i) {
        var o = this,
          a,
          l,
          s;
        if (this.state.isFetching) {
          if (this.state.dataUpdatedAt && i != null && i.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (this.promise) {
            var u;
            return (
              (u = this.retryer) == null || u.continueRetry(), this.promise
            );
          }
        }
        if ((r && this.setOptions(r), !this.options.queryFn)) {
          var d = this.observers.find(function (h) {
            return h.options.queryFn;
          });
          d && this.setOptions(d.options);
        }
        var f = Ja(this.queryKey),
          p = qm(),
          g = { queryKey: f, pageParam: void 0, meta: this.meta };
        Object.defineProperty(g, "signal", {
          enumerable: !0,
          get: function () {
            if (p) return (o.abortSignalConsumed = !0), p.signal;
          },
        });
        var y = function () {
            return o.options.queryFn
              ? ((o.abortSignalConsumed = !1), o.options.queryFn(g))
              : Promise.reject("Missing queryFn");
          },
          w = {
            fetchOptions: i,
            options: this.options,
            queryKey: f,
            state: this.state,
            fetchFn: y,
            meta: this.meta,
          };
        if ((a = this.options.behavior) != null && a.onFetch) {
          var E;
          (E = this.options.behavior) == null || E.onFetch(w);
        }
        if (
          ((this.revertState = this.state),
          !this.state.isFetching ||
            this.state.fetchMeta !==
              ((l = w.fetchOptions) == null ? void 0 : l.meta))
        ) {
          var v;
          this.dispatch({
            type: "fetch",
            meta: (v = w.fetchOptions) == null ? void 0 : v.meta,
          });
        }
        return (
          (this.retryer = new Km({
            fn: w.fetchFn,
            abort: p == null || (s = p.abort) == null ? void 0 : s.bind(p),
            onSuccess: function (m) {
              o.setData(m),
                o.cache.config.onSuccess == null ||
                  o.cache.config.onSuccess(m, o),
                o.cacheTime === 0 && o.optionalRemove();
            },
            onError: function (m) {
              (ba(m) && m.silent) || o.dispatch({ type: "error", error: m }),
                ba(m) ||
                  (o.cache.config.onError == null ||
                    o.cache.config.onError(m, o),
                  nl().error(m)),
                o.cacheTime === 0 && o.optionalRemove();
            },
            onFail: function () {
              o.dispatch({ type: "failed" });
            },
            onPause: function () {
              o.dispatch({ type: "pause" });
            },
            onContinue: function () {
              o.dispatch({ type: "continue" });
            },
            retry: w.options.retry,
            retryDelay: w.options.retryDelay,
          })),
          (this.promise = this.retryer.promise),
          this.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = this.reducer(this.state, r)),
          Me.batch(function () {
            i.observers.forEach(function (o) {
              o.onQueryUpdate(r);
            }),
              i.cache.notify({ query: i, type: "queryUpdated", action: r });
          });
      }),
      (t.getDefaultState = function (r) {
        var i =
            typeof r.initialData == "function"
              ? r.initialData()
              : r.initialData,
          o = typeof r.initialData < "u",
          a = o
            ? typeof r.initialDataUpdatedAt == "function"
              ? r.initialDataUpdatedAt()
              : r.initialDataUpdatedAt
            : 0,
          l = typeof i < "u";
        return {
          data: i,
          dataUpdateCount: 0,
          dataUpdatedAt: l ? a ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchMeta: null,
          isFetching: !1,
          isInvalidated: !1,
          isPaused: !1,
          status: l ? "success" : "idle",
        };
      }),
      (t.reducer = function (r, i) {
        var o, a;
        switch (i.type) {
          case "failed":
            return ce({}, r, { fetchFailureCount: r.fetchFailureCount + 1 });
          case "pause":
            return ce({}, r, { isPaused: !0 });
          case "continue":
            return ce({}, r, { isPaused: !1 });
          case "fetch":
            return ce(
              {},
              r,
              {
                fetchFailureCount: 0,
                fetchMeta: (o = i.meta) != null ? o : null,
                isFetching: !0,
                isPaused: !1,
              },
              !r.dataUpdatedAt && { error: null, status: "loading" }
            );
          case "success":
            return ce({}, r, {
              data: i.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: (a = i.dataUpdatedAt) != null ? a : Date.now(),
              error: null,
              fetchFailureCount: 0,
              isFetching: !1,
              isInvalidated: !1,
              isPaused: !1,
              status: "success",
            });
          case "error":
            var l = i.error;
            return ba(l) && l.revert && this.revertState
              ? ce({}, this.revertState)
              : ce({}, r, {
                  error: l,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  isFetching: !1,
                  isPaused: !1,
                  status: "error",
                });
          case "invalidate":
            return ce({}, r, { isInvalidated: !0 });
          case "setState":
            return ce({}, r, i.state);
          default:
            return r;
        }
      }),
      e
    );
  })(),
  p1 = (function (e) {
    Pi(t, e);
    function t(r) {
      var i;
      return (
        (i = e.call(this) || this),
        (i.config = r || {}),
        (i.queries = []),
        (i.queriesMap = {}),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.build = function (i, o, a) {
        var l,
          s = o.queryKey,
          u = (l = o.queryHash) != null ? l : Gc(s, o),
          d = this.get(u);
        return (
          d ||
            ((d = new h1({
              cache: this,
              queryKey: s,
              queryHash: u,
              options: i.defaultQueryOptions(o),
              state: a,
              defaultOptions: i.getQueryDefaults(s),
              meta: o.meta,
            })),
            this.add(d)),
          d
        );
      }),
      (n.add = function (i) {
        this.queriesMap[i.queryHash] ||
          ((this.queriesMap[i.queryHash] = i),
          this.queries.push(i),
          this.notify({ type: "queryAdded", query: i }));
      }),
      (n.remove = function (i) {
        var o = this.queriesMap[i.queryHash];
        o &&
          (i.destroy(),
          (this.queries = this.queries.filter(function (a) {
            return a !== i;
          })),
          o === i && delete this.queriesMap[i.queryHash],
          this.notify({ type: "queryRemoved", query: i }));
      }),
      (n.clear = function () {
        var i = this;
        Me.batch(function () {
          i.queries.forEach(function (o) {
            i.remove(o);
          });
        });
      }),
      (n.get = function (i) {
        return this.queriesMap[i];
      }),
      (n.getAll = function () {
        return this.queries;
      }),
      (n.find = function (i, o) {
        var a = Jn(i, o),
          l = a[0];
        return (
          typeof l.exact > "u" && (l.exact = !0),
          this.queries.find(function (s) {
            return Rf(l, s);
          })
        );
      }),
      (n.findAll = function (i, o) {
        var a = Jn(i, o),
          l = a[0];
        return Object.keys(l).length > 0
          ? this.queries.filter(function (s) {
              return Rf(l, s);
            })
          : this.queries;
      }),
      (n.notify = function (i) {
        var o = this;
        Me.batch(function () {
          o.listeners.forEach(function (a) {
            a(i);
          });
        });
      }),
      (n.onFocus = function () {
        var i = this;
        Me.batch(function () {
          i.queries.forEach(function (o) {
            o.onFocus();
          });
        });
      }),
      (n.onOnline = function () {
        var i = this;
        Me.batch(function () {
          i.queries.forEach(function (o) {
            o.onOnline();
          });
        });
      }),
      t
    );
  })(ji),
  m1 = (function () {
    function e(n) {
      (this.options = ce({}, n.defaultOptions, n.options)),
        (this.mutationId = n.mutationId),
        (this.mutationCache = n.mutationCache),
        (this.observers = []),
        (this.state = n.state || Gm()),
        (this.meta = n.meta);
    }
    var t = e.prototype;
    return (
      (t.setState = function (r) {
        this.dispatch({ type: "setState", state: r });
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 && this.observers.push(r);
      }),
      (t.removeObserver = function (r) {
        this.observers = this.observers.filter(function (i) {
          return i !== r;
        });
      }),
      (t.cancel = function () {
        return this.retryer
          ? (this.retryer.cancel(), this.retryer.promise.then(st).catch(st))
          : Promise.resolve();
      }),
      (t.continue = function () {
        return this.retryer
          ? (this.retryer.continue(), this.retryer.promise)
          : this.execute();
      }),
      (t.execute = function () {
        var r = this,
          i,
          o = this.state.status === "loading",
          a = Promise.resolve();
        return (
          o ||
            (this.dispatch({
              type: "loading",
              variables: this.options.variables,
            }),
            (a = a
              .then(function () {
                r.mutationCache.config.onMutate == null ||
                  r.mutationCache.config.onMutate(r.state.variables, r);
              })
              .then(function () {
                return r.options.onMutate == null
                  ? void 0
                  : r.options.onMutate(r.state.variables);
              })
              .then(function (l) {
                l !== r.state.context &&
                  r.dispatch({
                    type: "loading",
                    context: l,
                    variables: r.state.variables,
                  });
              }))),
          a
            .then(function () {
              return r.executeMutation();
            })
            .then(function (l) {
              (i = l),
                r.mutationCache.config.onSuccess == null ||
                  r.mutationCache.config.onSuccess(
                    i,
                    r.state.variables,
                    r.state.context,
                    r
                  );
            })
            .then(function () {
              return r.options.onSuccess == null
                ? void 0
                : r.options.onSuccess(i, r.state.variables, r.state.context);
            })
            .then(function () {
              return r.options.onSettled == null
                ? void 0
                : r.options.onSettled(
                    i,
                    null,
                    r.state.variables,
                    r.state.context
                  );
            })
            .then(function () {
              return r.dispatch({ type: "success", data: i }), i;
            })
            .catch(function (l) {
              return (
                r.mutationCache.config.onError == null ||
                  r.mutationCache.config.onError(
                    l,
                    r.state.variables,
                    r.state.context,
                    r
                  ),
                nl().error(l),
                Promise.resolve()
                  .then(function () {
                    return r.options.onError == null
                      ? void 0
                      : r.options.onError(
                          l,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    return r.options.onSettled == null
                      ? void 0
                      : r.options.onSettled(
                          void 0,
                          l,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    throw (r.dispatch({ type: "error", error: l }), l);
                  })
              );
            })
        );
      }),
      (t.executeMutation = function () {
        var r = this,
          i;
        return (
          (this.retryer = new Km({
            fn: function () {
              return r.options.mutationFn
                ? r.options.mutationFn(r.state.variables)
                : Promise.reject("No mutationFn found");
            },
            onFail: function () {
              r.dispatch({ type: "failed" });
            },
            onPause: function () {
              r.dispatch({ type: "pause" });
            },
            onContinue: function () {
              r.dispatch({ type: "continue" });
            },
            retry: (i = this.options.retry) != null ? i : 0,
            retryDelay: this.options.retryDelay,
          })),
          this.retryer.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = v1(this.state, r)),
          Me.batch(function () {
            i.observers.forEach(function (o) {
              o.onMutationUpdate(r);
            }),
              i.mutationCache.notify(i);
          });
      }),
      e
    );
  })();
function Gm() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
function v1(e, t) {
  switch (t.type) {
    case "failed":
      return ce({}, e, { failureCount: e.failureCount + 1 });
    case "pause":
      return ce({}, e, { isPaused: !0 });
    case "continue":
      return ce({}, e, { isPaused: !1 });
    case "loading":
      return ce({}, e, {
        context: t.context,
        data: void 0,
        error: null,
        isPaused: !1,
        status: "loading",
        variables: t.variables,
      });
    case "success":
      return ce({}, e, {
        data: t.data,
        error: null,
        status: "success",
        isPaused: !1,
      });
    case "error":
      return ce({}, e, {
        data: void 0,
        error: t.error,
        failureCount: e.failureCount + 1,
        isPaused: !1,
        status: "error",
      });
    case "setState":
      return ce({}, e, t.state);
    default:
      return e;
  }
}
var y1 = (function (e) {
  Pi(t, e);
  function t(r) {
    var i;
    return (
      (i = e.call(this) || this),
      (i.config = r || {}),
      (i.mutations = []),
      (i.mutationId = 0),
      i
    );
  }
  var n = t.prototype;
  return (
    (n.build = function (i, o, a) {
      var l = new m1({
        mutationCache: this,
        mutationId: ++this.mutationId,
        options: i.defaultMutationOptions(o),
        state: a,
        defaultOptions: o.mutationKey
          ? i.getMutationDefaults(o.mutationKey)
          : void 0,
        meta: o.meta,
      });
      return this.add(l), l;
    }),
    (n.add = function (i) {
      this.mutations.push(i), this.notify(i);
    }),
    (n.remove = function (i) {
      (this.mutations = this.mutations.filter(function (o) {
        return o !== i;
      })),
        i.cancel(),
        this.notify(i);
    }),
    (n.clear = function () {
      var i = this;
      Me.batch(function () {
        i.mutations.forEach(function (o) {
          i.remove(o);
        });
      });
    }),
    (n.getAll = function () {
      return this.mutations;
    }),
    (n.find = function (i) {
      return (
        typeof i.exact > "u" && (i.exact = !0),
        this.mutations.find(function (o) {
          return Lf(i, o);
        })
      );
    }),
    (n.findAll = function (i) {
      return this.mutations.filter(function (o) {
        return Lf(i, o);
      });
    }),
    (n.notify = function (i) {
      var o = this;
      Me.batch(function () {
        o.listeners.forEach(function (a) {
          a(i);
        });
      });
    }),
    (n.onFocus = function () {
      this.resumePausedMutations();
    }),
    (n.onOnline = function () {
      this.resumePausedMutations();
    }),
    (n.resumePausedMutations = function () {
      var i = this.mutations.filter(function (o) {
        return o.state.isPaused;
      });
      return Me.batch(function () {
        return i.reduce(function (o, a) {
          return o.then(function () {
            return a.continue().catch(st);
          });
        }, Promise.resolve());
      });
    }),
    t
  );
})(ji);
function g1() {
  return {
    onFetch: function (t) {
      t.fetchFn = function () {
        var n,
          r,
          i,
          o,
          a,
          l,
          s =
            (n = t.fetchOptions) == null || (r = n.meta) == null
              ? void 0
              : r.refetchPage,
          u =
            (i = t.fetchOptions) == null || (o = i.meta) == null
              ? void 0
              : o.fetchMore,
          d = u == null ? void 0 : u.pageParam,
          f = (u == null ? void 0 : u.direction) === "forward",
          p = (u == null ? void 0 : u.direction) === "backward",
          g = ((a = t.state.data) == null ? void 0 : a.pages) || [],
          y = ((l = t.state.data) == null ? void 0 : l.pageParams) || [],
          w = qm(),
          E = w == null ? void 0 : w.signal,
          v = y,
          h = !1,
          m =
            t.options.queryFn ||
            function () {
              return Promise.reject("Missing queryFn");
            },
          C = function (M, H, Z, we) {
            return (
              (v = we ? [H].concat(v) : [].concat(v, [H])),
              we ? [Z].concat(M) : [].concat(M, [Z])
            );
          },
          O = function (M, H, Z, we) {
            if (h) return Promise.reject("Cancelled");
            if (typeof Z > "u" && !H && M.length) return Promise.resolve(M);
            var T = {
                queryKey: t.queryKey,
                signal: E,
                pageParam: Z,
                meta: t.meta,
              },
              B = m(T),
              Q = Promise.resolve(B).then(function (V) {
                return C(M, Z, V, we);
              });
            if (tl(B)) {
              var Y = Q;
              Y.cancel = B.cancel;
            }
            return Q;
          },
          P;
        if (!g.length) P = O([]);
        else if (f) {
          var x = typeof d < "u",
            L = x ? d : If(t.options, g);
          P = O(g, x, L);
        } else if (p) {
          var j = typeof d < "u",
            _ = j ? d : w1(t.options, g);
          P = O(g, j, _, !0);
        } else
          (function () {
            v = [];
            var $ = typeof t.options.getNextPageParam > "u",
              M = s && g[0] ? s(g[0], 0, g) : !0;
            P = M ? O([], $, y[0]) : Promise.resolve(C([], y[0], g[0]));
            for (
              var H = function (T) {
                  P = P.then(function (B) {
                    var Q = s && g[T] ? s(g[T], T, g) : !0;
                    if (Q) {
                      var Y = $ ? y[T] : If(t.options, B);
                      return O(B, $, Y);
                    }
                    return Promise.resolve(C(B, y[T], g[T]));
                  });
                },
                Z = 1;
              Z < g.length;
              Z++
            )
              H(Z);
          })();
        var D = P.then(function ($) {
            return { pages: $, pageParams: v };
          }),
          U = D;
        return (
          (U.cancel = function () {
            (h = !0), w == null || w.abort(), tl(P) && P.cancel();
          }),
          D
        );
      };
    },
  };
}
function If(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function w1(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
var x1 = (function () {
    function e(n) {
      n === void 0 && (n = {}),
        (this.queryCache = n.queryCache || new p1()),
        (this.mutationCache = n.mutationCache || new y1()),
        (this.defaultOptions = n.defaultOptions || {}),
        (this.queryDefaults = []),
        (this.mutationDefaults = []);
    }
    var t = e.prototype;
    return (
      (t.mount = function () {
        var r = this;
        (this.unsubscribeFocus = so.subscribe(function () {
          so.isFocused() &&
            Sa.isOnline() &&
            (r.mutationCache.onFocus(), r.queryCache.onFocus());
        })),
          (this.unsubscribeOnline = Sa.subscribe(function () {
            so.isFocused() &&
              Sa.isOnline() &&
              (r.mutationCache.onOnline(), r.queryCache.onOnline());
          }));
      }),
      (t.unmount = function () {
        var r, i;
        (r = this.unsubscribeFocus) == null || r.call(this),
          (i = this.unsubscribeOnline) == null || i.call(this);
      }),
      (t.isFetching = function (r, i) {
        var o = Jn(r, i),
          a = o[0];
        return (a.fetching = !0), this.queryCache.findAll(a).length;
      }),
      (t.isMutating = function (r) {
        return this.mutationCache.findAll(ce({}, r, { fetching: !0 })).length;
      }),
      (t.getQueryData = function (r, i) {
        var o;
        return (o = this.queryCache.find(r, i)) == null ? void 0 : o.state.data;
      }),
      (t.getQueriesData = function (r) {
        return this.getQueryCache()
          .findAll(r)
          .map(function (i) {
            var o = i.queryKey,
              a = i.state,
              l = a.data;
            return [o, l];
          });
      }),
      (t.setQueryData = function (r, i, o) {
        var a = xa(r),
          l = this.defaultQueryOptions(a);
        return this.queryCache.build(this, l).setData(i, o);
      }),
      (t.setQueriesData = function (r, i, o) {
        var a = this;
        return Me.batch(function () {
          return a
            .getQueryCache()
            .findAll(r)
            .map(function (l) {
              var s = l.queryKey;
              return [s, a.setQueryData(s, i, o)];
            });
        });
      }),
      (t.getQueryState = function (r, i) {
        var o;
        return (o = this.queryCache.find(r, i)) == null ? void 0 : o.state;
      }),
      (t.removeQueries = function (r, i) {
        var o = Jn(r, i),
          a = o[0],
          l = this.queryCache;
        Me.batch(function () {
          l.findAll(a).forEach(function (s) {
            l.remove(s);
          });
        });
      }),
      (t.resetQueries = function (r, i, o) {
        var a = this,
          l = Jn(r, i, o),
          s = l[0],
          u = l[1],
          d = this.queryCache,
          f = ce({}, s, { active: !0 });
        return Me.batch(function () {
          return (
            d.findAll(s).forEach(function (p) {
              p.reset();
            }),
            a.refetchQueries(f, u)
          );
        });
      }),
      (t.cancelQueries = function (r, i, o) {
        var a = this,
          l = Jn(r, i, o),
          s = l[0],
          u = l[1],
          d = u === void 0 ? {} : u;
        typeof d.revert > "u" && (d.revert = !0);
        var f = Me.batch(function () {
          return a.queryCache.findAll(s).map(function (p) {
            return p.cancel(d);
          });
        });
        return Promise.all(f).then(st).catch(st);
      }),
      (t.invalidateQueries = function (r, i, o) {
        var a,
          l,
          s,
          u = this,
          d = Jn(r, i, o),
          f = d[0],
          p = d[1],
          g = ce({}, f, {
            active:
              (a = (l = f.refetchActive) != null ? l : f.active) != null
                ? a
                : !0,
            inactive: (s = f.refetchInactive) != null ? s : !1,
          });
        return Me.batch(function () {
          return (
            u.queryCache.findAll(f).forEach(function (y) {
              y.invalidate();
            }),
            u.refetchQueries(g, p)
          );
        });
      }),
      (t.refetchQueries = function (r, i, o) {
        var a = this,
          l = Jn(r, i, o),
          s = l[0],
          u = l[1],
          d = Me.batch(function () {
            return a.queryCache.findAll(s).map(function (p) {
              return p.fetch(
                void 0,
                ce({}, u, {
                  meta: { refetchPage: s == null ? void 0 : s.refetchPage },
                })
              );
            });
          }),
          f = Promise.all(d).then(st);
        return (u != null && u.throwOnError) || (f = f.catch(st)), f;
      }),
      (t.fetchQuery = function (r, i, o) {
        var a = xa(r, i, o),
          l = this.defaultQueryOptions(a);
        typeof l.retry > "u" && (l.retry = !1);
        var s = this.queryCache.build(this, l);
        return s.isStaleByTime(l.staleTime)
          ? s.fetch(l)
          : Promise.resolve(s.state.data);
      }),
      (t.prefetchQuery = function (r, i, o) {
        return this.fetchQuery(r, i, o).then(st).catch(st);
      }),
      (t.fetchInfiniteQuery = function (r, i, o) {
        var a = xa(r, i, o);
        return (a.behavior = g1()), this.fetchQuery(a);
      }),
      (t.prefetchInfiniteQuery = function (r, i, o) {
        return this.fetchInfiniteQuery(r, i, o).then(st).catch(st);
      }),
      (t.cancelMutations = function () {
        var r = this,
          i = Me.batch(function () {
            return r.mutationCache.getAll().map(function (o) {
              return o.cancel();
            });
          });
        return Promise.all(i).then(st).catch(st);
      }),
      (t.resumePausedMutations = function () {
        return this.getMutationCache().resumePausedMutations();
      }),
      (t.executeMutation = function (r) {
        return this.mutationCache.build(this, r).execute();
      }),
      (t.getQueryCache = function () {
        return this.queryCache;
      }),
      (t.getMutationCache = function () {
        return this.mutationCache;
      }),
      (t.getDefaultOptions = function () {
        return this.defaultOptions;
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.setQueryDefaults = function (r, i) {
        var o = this.queryDefaults.find(function (a) {
          return kr(r) === kr(a.queryKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.queryDefaults.push({ queryKey: r, defaultOptions: i });
      }),
      (t.getQueryDefaults = function (r) {
        var i;
        return r
          ? (i = this.queryDefaults.find(function (o) {
              return Za(r, o.queryKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.setMutationDefaults = function (r, i) {
        var o = this.mutationDefaults.find(function (a) {
          return kr(r) === kr(a.mutationKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.mutationDefaults.push({ mutationKey: r, defaultOptions: i });
      }),
      (t.getMutationDefaults = function (r) {
        var i;
        return r
          ? (i = this.mutationDefaults.find(function (o) {
              return Za(r, o.mutationKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.defaultQueryOptions = function (r) {
        if (r != null && r._defaulted) return r;
        var i = ce(
          {},
          this.defaultOptions.queries,
          this.getQueryDefaults(r == null ? void 0 : r.queryKey),
          r,
          { _defaulted: !0 }
        );
        return (
          !i.queryHash && i.queryKey && (i.queryHash = Gc(i.queryKey, i)), i
        );
      }),
      (t.defaultQueryObserverOptions = function (r) {
        return this.defaultQueryOptions(r);
      }),
      (t.defaultMutationOptions = function (r) {
        return r != null && r._defaulted
          ? r
          : ce(
              {},
              this.defaultOptions.mutations,
              this.getMutationDefaults(r == null ? void 0 : r.mutationKey),
              r,
              { _defaulted: !0 }
            );
      }),
      (t.clear = function () {
        this.queryCache.clear(), this.mutationCache.clear();
      }),
      e
    );
  })(),
  S1 = (function (e) {
    Pi(t, e);
    function t(r, i) {
      var o;
      return (
        (o = e.call(this) || this),
        (o.client = r),
        (o.options = i),
        (o.trackedProps = []),
        (o.selectError = null),
        o.bindMethods(),
        o.setOptions(i),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.bindMethods = function () {
        (this.remove = this.remove.bind(this)),
          (this.refetch = this.refetch.bind(this));
      }),
      (n.onSubscribe = function () {
        this.listeners.length === 1 &&
          (this.currentQuery.addObserver(this),
          zf(this.currentQuery, this.options) && this.executeFetch(),
          this.updateTimers());
      }),
      (n.onUnsubscribe = function () {
        this.listeners.length || this.destroy();
      }),
      (n.shouldFetchOnReconnect = function () {
        return Lu(
          this.currentQuery,
          this.options,
          this.options.refetchOnReconnect
        );
      }),
      (n.shouldFetchOnWindowFocus = function () {
        return Lu(
          this.currentQuery,
          this.options,
          this.options.refetchOnWindowFocus
        );
      }),
      (n.destroy = function () {
        (this.listeners = []),
          this.clearTimers(),
          this.currentQuery.removeObserver(this);
      }),
      (n.setOptions = function (i, o) {
        var a = this.options,
          l = this.currentQuery;
        if (
          ((this.options = this.client.defaultQueryObserverOptions(i)),
          typeof this.options.enabled < "u" &&
            typeof this.options.enabled != "boolean")
        )
          throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = a.queryKey),
          this.updateQuery();
        var s = this.hasListeners();
        s && Af(this.currentQuery, l, this.options, a) && this.executeFetch(),
          this.updateResult(o),
          s &&
            (this.currentQuery !== l ||
              this.options.enabled !== a.enabled ||
              this.options.staleTime !== a.staleTime) &&
            this.updateStaleTimeout();
        var u = this.computeRefetchInterval();
        s &&
          (this.currentQuery !== l ||
            this.options.enabled !== a.enabled ||
            u !== this.currentRefetchInterval) &&
          this.updateRefetchInterval(u);
      }),
      (n.getOptimisticResult = function (i) {
        var o = this.client.defaultQueryObserverOptions(i),
          a = this.client.getQueryCache().build(this.client, o);
        return this.createResult(a, o);
      }),
      (n.getCurrentResult = function () {
        return this.currentResult;
      }),
      (n.trackResult = function (i, o) {
        var a = this,
          l = {},
          s = function (d) {
            a.trackedProps.includes(d) || a.trackedProps.push(d);
          };
        return (
          Object.keys(i).forEach(function (u) {
            Object.defineProperty(l, u, {
              configurable: !1,
              enumerable: !0,
              get: function () {
                return s(u), i[u];
              },
            });
          }),
          (o.useErrorBoundary || o.suspense) && s("error"),
          l
        );
      }),
      (n.getNextResult = function (i) {
        var o = this;
        return new Promise(function (a, l) {
          var s = o.subscribe(function (u) {
            u.isFetching ||
              (s(),
              u.isError && i != null && i.throwOnError ? l(u.error) : a(u));
          });
        });
      }),
      (n.getCurrentQuery = function () {
        return this.currentQuery;
      }),
      (n.remove = function () {
        this.client.getQueryCache().remove(this.currentQuery);
      }),
      (n.refetch = function (i) {
        return this.fetch(
          ce({}, i, {
            meta: { refetchPage: i == null ? void 0 : i.refetchPage },
          })
        );
      }),
      (n.fetchOptimistic = function (i) {
        var o = this,
          a = this.client.defaultQueryObserverOptions(i),
          l = this.client.getQueryCache().build(this.client, a);
        return l.fetch().then(function () {
          return o.createResult(l, a);
        });
      }),
      (n.fetch = function (i) {
        var o = this;
        return this.executeFetch(i).then(function () {
          return o.updateResult(), o.currentResult;
        });
      }),
      (n.executeFetch = function (i) {
        this.updateQuery();
        var o = this.currentQuery.fetch(this.options, i);
        return (i != null && i.throwOnError) || (o = o.catch(st)), o;
      }),
      (n.updateStaleTimeout = function () {
        var i = this;
        if (
          (this.clearStaleTimeout(),
          !(Xa || this.currentResult.isStale || !Tu(this.options.staleTime)))
        ) {
          var o = Qm(this.currentResult.dataUpdatedAt, this.options.staleTime),
            a = o + 1;
          this.staleTimeoutId = setTimeout(function () {
            i.currentResult.isStale || i.updateResult();
          }, a);
        }
      }),
      (n.computeRefetchInterval = function () {
        var i;
        return typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(
              this.currentResult.data,
              this.currentQuery
            )
          : (i = this.options.refetchInterval) != null
          ? i
          : !1;
      }),
      (n.updateRefetchInterval = function (i) {
        var o = this;
        this.clearRefetchInterval(),
          (this.currentRefetchInterval = i),
          !(
            Xa ||
            this.options.enabled === !1 ||
            !Tu(this.currentRefetchInterval) ||
            this.currentRefetchInterval === 0
          ) &&
            (this.refetchIntervalId = setInterval(function () {
              (o.options.refetchIntervalInBackground || so.isFocused()) &&
                o.executeFetch();
            }, this.currentRefetchInterval));
      }),
      (n.updateTimers = function () {
        this.updateStaleTimeout(),
          this.updateRefetchInterval(this.computeRefetchInterval());
      }),
      (n.clearTimers = function () {
        this.clearStaleTimeout(), this.clearRefetchInterval();
      }),
      (n.clearStaleTimeout = function () {
        this.staleTimeoutId &&
          (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
      }),
      (n.clearRefetchInterval = function () {
        this.refetchIntervalId &&
          (clearInterval(this.refetchIntervalId),
          (this.refetchIntervalId = void 0));
      }),
      (n.createResult = function (i, o) {
        var a = this.currentQuery,
          l = this.options,
          s = this.currentResult,
          u = this.currentResultState,
          d = this.currentResultOptions,
          f = i !== a,
          p = f ? i.state : this.currentQueryInitialState,
          g = f ? this.currentResult : this.previousQueryResult,
          y = i.state,
          w = y.dataUpdatedAt,
          E = y.error,
          v = y.errorUpdatedAt,
          h = y.isFetching,
          m = y.status,
          C = !1,
          O = !1,
          P;
        if (o.optimisticResults) {
          var x = this.hasListeners(),
            L = !x && zf(i, o),
            j = x && Af(i, a, o, l);
          (L || j) && ((h = !0), w || (m = "loading"));
        }
        if (
          o.keepPreviousData &&
          !y.dataUpdateCount &&
          g != null &&
          g.isSuccess &&
          m !== "error"
        )
          (P = g.data), (w = g.dataUpdatedAt), (m = g.status), (C = !0);
        else if (o.select && typeof y.data < "u")
          if (
            s &&
            y.data === (u == null ? void 0 : u.data) &&
            o.select === this.selectFn
          )
            P = this.selectResult;
          else
            try {
              (this.selectFn = o.select),
                (P = o.select(y.data)),
                o.structuralSharing !== !1 &&
                  (P = el(s == null ? void 0 : s.data, P)),
                (this.selectResult = P),
                (this.selectError = null);
            } catch (U) {
              nl().error(U), (this.selectError = U);
            }
        else P = y.data;
        if (
          typeof o.placeholderData < "u" &&
          typeof P > "u" &&
          (m === "loading" || m === "idle")
        ) {
          var _;
          if (
            s != null &&
            s.isPlaceholderData &&
            o.placeholderData === (d == null ? void 0 : d.placeholderData)
          )
            _ = s.data;
          else if (
            ((_ =
              typeof o.placeholderData == "function"
                ? o.placeholderData()
                : o.placeholderData),
            o.select && typeof _ < "u")
          )
            try {
              (_ = o.select(_)),
                o.structuralSharing !== !1 &&
                  (_ = el(s == null ? void 0 : s.data, _)),
                (this.selectError = null);
            } catch (U) {
              nl().error(U), (this.selectError = U);
            }
          typeof _ < "u" && ((m = "success"), (P = _), (O = !0));
        }
        this.selectError &&
          ((E = this.selectError),
          (P = this.selectResult),
          (v = Date.now()),
          (m = "error"));
        var D = {
          status: m,
          isLoading: m === "loading",
          isSuccess: m === "success",
          isError: m === "error",
          isIdle: m === "idle",
          data: P,
          dataUpdatedAt: w,
          error: E,
          errorUpdatedAt: v,
          failureCount: y.fetchFailureCount,
          errorUpdateCount: y.errorUpdateCount,
          isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
          isFetchedAfterMount:
            y.dataUpdateCount > p.dataUpdateCount ||
            y.errorUpdateCount > p.errorUpdateCount,
          isFetching: h,
          isRefetching: h && m !== "loading",
          isLoadingError: m === "error" && y.dataUpdatedAt === 0,
          isPlaceholderData: O,
          isPreviousData: C,
          isRefetchError: m === "error" && y.dataUpdatedAt !== 0,
          isStale: Xc(i, o),
          refetch: this.refetch,
          remove: this.remove,
        };
        return D;
      }),
      (n.shouldNotifyListeners = function (i, o) {
        if (!o) return !0;
        var a = this.options,
          l = a.notifyOnChangeProps,
          s = a.notifyOnChangePropsExclusions;
        if ((!l && !s) || (l === "tracked" && !this.trackedProps.length))
          return !0;
        var u = l === "tracked" ? this.trackedProps : l;
        return Object.keys(i).some(function (d) {
          var f = d,
            p = i[f] !== o[f],
            g =
              u == null
                ? void 0
                : u.some(function (w) {
                    return w === d;
                  }),
            y =
              s == null
                ? void 0
                : s.some(function (w) {
                    return w === d;
                  });
          return p && !y && (!u || g);
        });
      }),
      (n.updateResult = function (i) {
        var o = this.currentResult;
        if (
          ((this.currentResult = this.createResult(
            this.currentQuery,
            this.options
          )),
          (this.currentResultState = this.currentQuery.state),
          (this.currentResultOptions = this.options),
          !a1(this.currentResult, o))
        ) {
          var a = { cache: !0 };
          (i == null ? void 0 : i.listeners) !== !1 &&
            this.shouldNotifyListeners(this.currentResult, o) &&
            (a.listeners = !0),
            this.notify(ce({}, a, i));
        }
      }),
      (n.updateQuery = function () {
        var i = this.client.getQueryCache().build(this.client, this.options);
        if (i !== this.currentQuery) {
          var o = this.currentQuery;
          (this.currentQuery = i),
            (this.currentQueryInitialState = i.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() &&
              (o == null || o.removeObserver(this), i.addObserver(this));
        }
      }),
      (n.onQueryUpdate = function (i) {
        var o = {};
        i.type === "success"
          ? (o.onSuccess = !0)
          : i.type === "error" && !ba(i.error) && (o.onError = !0),
          this.updateResult(o),
          this.hasListeners() && this.updateTimers();
      }),
      (n.notify = function (i) {
        var o = this;
        Me.batch(function () {
          i.onSuccess
            ? (o.options.onSuccess == null ||
                o.options.onSuccess(o.currentResult.data),
              o.options.onSettled == null ||
                o.options.onSettled(o.currentResult.data, null))
            : i.onError &&
              (o.options.onError == null ||
                o.options.onError(o.currentResult.error),
              o.options.onSettled == null ||
                o.options.onSettled(void 0, o.currentResult.error)),
            i.listeners &&
              o.listeners.forEach(function (a) {
                a(o.currentResult);
              }),
            i.cache &&
              o.client
                .getQueryCache()
                .notify({
                  query: o.currentQuery,
                  type: "observerResultsUpdated",
                });
        });
      }),
      t
    );
  })(ji);
function b1(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function zf(e, t) {
  return b1(e, t) || (e.state.dataUpdatedAt > 0 && Lu(e, t, t.refetchOnMount));
}
function Lu(e, t, n) {
  if (t.enabled !== !1) {
    var r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && Xc(e, t));
  }
  return !1;
}
function Af(e, t, n, r) {
  return (
    n.enabled !== !1 &&
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    Xc(e, n)
  );
}
function Xc(e, t) {
  return e.isStaleByTime(t.staleTime);
}
var E1 = (function (e) {
    Pi(t, e);
    function t(r, i) {
      var o;
      return (
        (o = e.call(this) || this),
        (o.client = r),
        o.setOptions(i),
        o.bindMethods(),
        o.updateResult(),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.bindMethods = function () {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }),
      (n.setOptions = function (i) {
        this.options = this.client.defaultMutationOptions(i);
      }),
      (n.onUnsubscribe = function () {
        if (!this.listeners.length) {
          var i;
          (i = this.currentMutation) == null || i.removeObserver(this);
        }
      }),
      (n.onMutationUpdate = function (i) {
        this.updateResult();
        var o = { listeners: !0 };
        i.type === "success"
          ? (o.onSuccess = !0)
          : i.type === "error" && (o.onError = !0),
          this.notify(o);
      }),
      (n.getCurrentResult = function () {
        return this.currentResult;
      }),
      (n.reset = function () {
        (this.currentMutation = void 0),
          this.updateResult(),
          this.notify({ listeners: !0 });
      }),
      (n.mutate = function (i, o) {
        return (
          (this.mutateOptions = o),
          this.currentMutation && this.currentMutation.removeObserver(this),
          (this.currentMutation = this.client
            .getMutationCache()
            .build(
              this.client,
              ce({}, this.options, {
                variables: typeof i < "u" ? i : this.options.variables,
              })
            )),
          this.currentMutation.addObserver(this),
          this.currentMutation.execute()
        );
      }),
      (n.updateResult = function () {
        var i = this.currentMutation ? this.currentMutation.state : Gm(),
          o = ce({}, i, {
            isLoading: i.status === "loading",
            isSuccess: i.status === "success",
            isError: i.status === "error",
            isIdle: i.status === "idle",
            mutate: this.mutate,
            reset: this.reset,
          });
        this.currentResult = o;
      }),
      (n.notify = function (i) {
        var o = this;
        Me.batch(function () {
          o.mutateOptions &&
            (i.onSuccess
              ? (o.mutateOptions.onSuccess == null ||
                  o.mutateOptions.onSuccess(
                    o.currentResult.data,
                    o.currentResult.variables,
                    o.currentResult.context
                  ),
                o.mutateOptions.onSettled == null ||
                  o.mutateOptions.onSettled(
                    o.currentResult.data,
                    null,
                    o.currentResult.variables,
                    o.currentResult.context
                  ))
              : i.onError &&
                (o.mutateOptions.onError == null ||
                  o.mutateOptions.onError(
                    o.currentResult.error,
                    o.currentResult.variables,
                    o.currentResult.context
                  ),
                o.mutateOptions.onSettled == null ||
                  o.mutateOptions.onSettled(
                    void 0,
                    o.currentResult.error,
                    o.currentResult.variables,
                    o.currentResult.context
                  ))),
            i.listeners &&
              o.listeners.forEach(function (a) {
                a(o.currentResult);
              });
        });
      }),
      t
    );
  })(ji),
  C1 = Hc.unstable_batchedUpdates;
Me.setBatchNotifyFunction(C1);
var _1 = console;
f1(_1);
var Ff = I.createContext(void 0),
  Xm = I.createContext(!1);
function Jm(e) {
  return e && typeof window < "u"
    ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Ff),
      window.ReactQueryClientContext)
    : Ff;
}
var Zm = function () {
    var t = I.useContext(Jm(I.useContext(Xm)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  k1 = function (t) {
    var n = t.client,
      r = t.contextSharing,
      i = r === void 0 ? !1 : r,
      o = t.children;
    I.useEffect(
      function () {
        return (
          n.mount(),
          function () {
            n.unmount();
          }
        );
      },
      [n]
    );
    var a = Jm(i);
    return I.createElement(
      Xm.Provider,
      { value: i },
      I.createElement(a.Provider, { value: n }, o)
    );
  };
function O1() {
  var e = !1;
  return {
    clearReset: function () {
      e = !1;
    },
    reset: function () {
      e = !0;
    },
    isReset: function () {
      return e;
    },
  };
}
var P1 = I.createContext(O1()),
  j1 = function () {
    return I.useContext(P1);
  };
function ev(e, t, n) {
  return typeof t == "function"
    ? t.apply(void 0, n)
    : typeof t == "boolean"
    ? t
    : !!e;
}
function Jc(e, t, n) {
  var r = I.useRef(!1),
    i = I.useState(0),
    o = i[1],
    a = r1(e, t, n),
    l = Zm(),
    s = I.useRef();
  s.current ? s.current.setOptions(a) : (s.current = new E1(l, a));
  var u = s.current.getCurrentResult();
  I.useEffect(function () {
    r.current = !0;
    var f = s.current.subscribe(
      Me.batchCalls(function () {
        r.current &&
          o(function (p) {
            return p + 1;
          });
      })
    );
    return function () {
      (r.current = !1), f();
    };
  }, []);
  var d = I.useCallback(function (f, p) {
    s.current.mutate(f, p).catch(st);
  }, []);
  if (u.error && ev(void 0, s.current.options.useErrorBoundary, [u.error]))
    throw u.error;
  return ce({}, u, { mutate: d, mutateAsync: u.mutate });
}
function N1(e, t) {
  var n = I.useRef(!1),
    r = I.useState(0),
    i = r[1],
    o = Zm(),
    a = j1(),
    l = o.defaultQueryObserverOptions(e);
  (l.optimisticResults = !0),
    l.onError && (l.onError = Me.batchCalls(l.onError)),
    l.onSuccess && (l.onSuccess = Me.batchCalls(l.onSuccess)),
    l.onSettled && (l.onSettled = Me.batchCalls(l.onSettled)),
    l.suspense &&
      (typeof l.staleTime != "number" && (l.staleTime = 1e3),
      l.cacheTime === 0 && (l.cacheTime = 1)),
    (l.suspense || l.useErrorBoundary) &&
      (a.isReset() || (l.retryOnMount = !1));
  var s = I.useState(function () {
      return new t(o, l);
    }),
    u = s[0],
    d = u.getOptimisticResult(l);
  if (
    (I.useEffect(
      function () {
        (n.current = !0), a.clearReset();
        var f = u.subscribe(
          Me.batchCalls(function () {
            n.current &&
              i(function (p) {
                return p + 1;
              });
          })
        );
        return (
          u.updateResult(),
          function () {
            (n.current = !1), f();
          }
        );
      },
      [a, u]
    ),
    I.useEffect(
      function () {
        u.setOptions(l, { listeners: !1 });
      },
      [l, u]
    ),
    l.suspense && d.isLoading)
  )
    throw u
      .fetchOptimistic(l)
      .then(function (f) {
        var p = f.data;
        l.onSuccess == null || l.onSuccess(p),
          l.onSettled == null || l.onSettled(p, null);
      })
      .catch(function (f) {
        a.clearReset(),
          l.onError == null || l.onError(f),
          l.onSettled == null || l.onSettled(void 0, f);
      });
  if (
    d.isError &&
    !a.isReset() &&
    !d.isFetching &&
    ev(l.suspense, l.useErrorBoundary, [d.error, u.getCurrentQuery()])
  )
    throw d.error;
  return l.notifyOnChangeProps === "tracked" && (d = u.trackResult(d, l)), d;
}
function Fr(e, t, n) {
  var r = xa(e, t, n);
  return N1(r, S1);
}
function T1() {
  return (
    (document.title = "Talgtna | عنا"),
    c.jsx("div", {
      className: "mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8",
      children: c.jsxs("div", {
        className: "space-y-4",
        children: [
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            open: !0,
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "الهدف ؟",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children:
                  "هدفنا هو إرضاء العملاء وتوفير لكم افضل المنتجات بارخص الاسعار",
              }),
            ],
          }),
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "النشاط ؟ ",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children: "بيع المنتجات المجمدات",
              }),
            ],
          }),
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "رسالة للمستخدم ؟ ",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children:
                  "نشكركم علي حسن تعاونكم معنا ونرجو ان نكون عند حسن ظنكم",
              }),
            ],
          }),
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "تنوع المنتجات ؟ ",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children:
                  'يوفر "تلاجتنا" تشكيلة واسعة من المجمدات بمختلف الأنواع والنكهات، مما يتيح للعملاء اختيار ما يفضلونه وفقًا لذوقهم الشخصي.',
              }),
            ],
          }),
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "الجودة ؟ ",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children:
                  'تهتم "تلاجتنا" بتقديم المنتجات ذات الجودة العالية، حيث يتم اختيار المكونات باهتمام واتباع معايير صارمة .',
              }),
            ],
          }),
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "ملائمة للذوق الشخصي ؟",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children:
                  'ييوفر "تلاجتنا" تشكيله كبيره وواسعه ومختلفه من المنتجات ويخدم هذا الاختلاف العميل بحيث يجد كل عميل ما يناسب ذوقه الشخصي',
              }),
            ],
          }),
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "خدمة التوصيل ؟",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children:
                  'يوفر "تلاجتنا" خدمة توصيل سريعة وموثوقة، مما يوفر الوقت والجهد للعملاء ويتيح لهم الاستمتاع بالمجمدات في أي وقت.',
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var tv = {},
  nv = {},
  Ml = {},
  rv = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = {
    animating: !1,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: !1,
    edgeDragged: !1,
    initialized: !1,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: !1,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: !1,
    swiping: !1,
    touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0,
  };
  e.default = t;
})(rv);
var R1 = "Expected a function",
  Uf = NaN,
  L1 = "[object Symbol]",
  M1 = /^\s+|\s+$/g,
  D1 = /^[-+]0x[0-9a-f]+$/i,
  I1 = /^0b[01]+$/i,
  z1 = /^0o[0-7]+$/i,
  A1 = parseInt,
  F1 = typeof Fo == "object" && Fo && Fo.Object === Object && Fo,
  U1 = typeof self == "object" && self && self.Object === Object && self,
  $1 = F1 || U1 || Function("return this")(),
  H1 = Object.prototype,
  B1 = H1.toString,
  Q1 = Math.max,
  W1 = Math.min,
  ys = function () {
    return $1.Date.now();
  };
function q1(e, t, n) {
  var r,
    i,
    o,
    a,
    l,
    s,
    u = 0,
    d = !1,
    f = !1,
    p = !0;
  if (typeof e != "function") throw new TypeError(R1);
  (t = $f(t) || 0),
    Mu(n) &&
      ((d = !!n.leading),
      (f = "maxWait" in n),
      (o = f ? Q1($f(n.maxWait) || 0, t) : o),
      (p = "trailing" in n ? !!n.trailing : p));
  function g(P) {
    var x = r,
      L = i;
    return (r = i = void 0), (u = P), (a = e.apply(L, x)), a;
  }
  function y(P) {
    return (u = P), (l = setTimeout(v, t)), d ? g(P) : a;
  }
  function w(P) {
    var x = P - s,
      L = P - u,
      j = t - x;
    return f ? W1(j, o - L) : j;
  }
  function E(P) {
    var x = P - s,
      L = P - u;
    return s === void 0 || x >= t || x < 0 || (f && L >= o);
  }
  function v() {
    var P = ys();
    if (E(P)) return h(P);
    l = setTimeout(v, w(P));
  }
  function h(P) {
    return (l = void 0), p && r ? g(P) : ((r = i = void 0), a);
  }
  function m() {
    l !== void 0 && clearTimeout(l), (u = 0), (r = s = i = l = void 0);
  }
  function C() {
    return l === void 0 ? a : h(ys());
  }
  function O() {
    var P = ys(),
      x = E(P);
    if (((r = arguments), (i = this), (s = P), x)) {
      if (l === void 0) return y(s);
      if (f) return (l = setTimeout(v, t)), g(s);
    }
    return l === void 0 && (l = setTimeout(v, t)), a;
  }
  return (O.cancel = m), (O.flush = C), O;
}
function Mu(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function V1(e) {
  return !!e && typeof e == "object";
}
function K1(e) {
  return typeof e == "symbol" || (V1(e) && B1.call(e) == L1);
}
function $f(e) {
  if (typeof e == "number") return e;
  if (K1(e)) return Uf;
  if (Mu(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Mu(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(M1, "");
  var n = I1.test(e);
  return n || z1.test(e) ? A1(e.slice(2), n ? 2 : 8) : D1.test(e) ? Uf : +e;
}
var Y1 = q1,
  iv = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (o) {
          var a = typeof o;
          if (a === "string" || a === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var l = n.apply(null, o);
              l && r.push(l);
            }
          } else if (a === "object") {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes("[native code]")
            ) {
              r.push(o.toString());
              continue;
            }
            for (var s in o) t.call(o, s) && o[s] && r.push(s);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(iv);
var Dl = iv.exports,
  W = {},
  Zc = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(N);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var r = {
    accessibility: !0,
    adaptiveHeight: !1,
    afterChange: null,
    appendDots: function (o) {
      return t.default.createElement("ul", { style: { display: "block" } }, o);
    },
    arrows: !0,
    autoplay: !1,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: !1,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function (o) {
      return t.default.createElement("button", null, o + 1);
    },
    dots: !1,
    dotsClass: "slick-dots",
    draggable: !0,
    easing: "linear",
    edgeFriction: 0.35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: !1,
    pauseOnFocus: !1,
    pauseOnHover: !0,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: !0,
    swipeEvent: null,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    waitForAnimate: !0,
    asNavFor: null,
  };
  e.default = r;
})(Zc);
Object.defineProperty(W, "__esModule", { value: !0 });
W.checkSpecKeys =
  W.checkNavigable =
  W.changeSlide =
  W.canUseDOM =
  W.canGoNext =
    void 0;
W.clamp = av;
W.extractObject = void 0;
W.filterSettings = cx;
W.validSettings =
  W.swipeStart =
  W.swipeMove =
  W.swipeEnd =
  W.slidesOnRight =
  W.slidesOnLeft =
  W.slideHandler =
  W.siblingDirection =
  W.safePreventDefault =
  W.lazyStartIndex =
  W.lazySlidesOnRight =
  W.lazySlidesOnLeft =
  W.lazyEndIndex =
  W.keyHandler =
  W.initializedState =
  W.getWidth =
  W.getTrackLeft =
  W.getTrackCSS =
  W.getTrackAnimateCSS =
  W.getTotalSlides =
  W.getSwipeDirection =
  W.getSlideCount =
  W.getRequiredLazySlides =
  W.getPreClones =
  W.getPostClones =
  W.getOnDemandLazySlides =
  W.getNavigableIndexes =
  W.getHeight =
    void 0;
var G1 = ov(N),
  X1 = ov(Zc);
function ov(e) {
  return e && e.__esModule ? e : { default: e };
}
function jo(e) {
  "@babel/helpers - typeof";
  return (
    (jo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jo(e)
  );
}
function Hf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hf(Object(n), !0).forEach(function (r) {
          J1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Hf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function J1(e, t, n) {
  return (
    (t = Z1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Z1(e) {
  var t = ex(e, "string");
  return jo(t) == "symbol" ? t : String(t);
}
function ex(e, t) {
  if (jo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (jo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function av(e, t, n) {
  return Math.max(t, Math.min(e, n));
}
var si = (W.safePreventDefault = function (t) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(t._reactName) || t.preventDefault();
  }),
  lv = (W.getOnDemandLazySlides = function (t) {
    for (var n = [], r = sv(t), i = uv(t), o = r; o < i; o++)
      t.lazyLoadedList.indexOf(o) < 0 && n.push(o);
    return n;
  });
W.getRequiredLazySlides = function (t) {
  for (var n = [], r = sv(t), i = uv(t), o = r; o < i; o++) n.push(o);
  return n;
};
var sv = (W.lazyStartIndex = function (t) {
    return t.currentSlide - tx(t);
  }),
  uv = (W.lazyEndIndex = function (t) {
    return t.currentSlide + nx(t);
  }),
  tx = (W.lazySlidesOnLeft = function (t) {
    return t.centerMode
      ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : 0;
  }),
  nx = (W.lazySlidesOnRight = function (t) {
    return t.centerMode
      ? Math.floor((t.slidesToShow - 1) / 2) +
          1 +
          (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : t.slidesToShow;
  }),
  Du = (W.getWidth = function (t) {
    return (t && t.offsetWidth) || 0;
  }),
  cv = (W.getHeight = function (t) {
    return (t && t.offsetHeight) || 0;
  }),
  dv = (W.getSwipeDirection = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r,
      i,
      o,
      a;
    return (
      (r = t.startX - t.curX),
      (i = t.startY - t.curY),
      (o = Math.atan2(i, r)),
      (a = Math.round((o * 180) / Math.PI)),
      a < 0 && (a = 360 - Math.abs(a)),
      (a <= 45 && a >= 0) || (a <= 360 && a >= 315)
        ? "left"
        : a >= 135 && a <= 225
        ? "right"
        : n === !0
        ? a >= 35 && a <= 135
          ? "up"
          : "down"
        : "vertical"
    );
  }),
  fv = (W.canGoNext = function (t) {
    var n = !0;
    return (
      t.infinite ||
        (((t.centerMode && t.currentSlide >= t.slideCount - 1) ||
          t.slideCount <= t.slidesToShow ||
          t.currentSlide >= t.slideCount - t.slidesToShow) &&
          (n = !1)),
      n
    );
  });
W.extractObject = function (t, n) {
  var r = {};
  return (
    n.forEach(function (i) {
      return (r[i] = t[i]);
    }),
    r
  );
};
W.initializedState = function (t) {
  var n = G1.default.Children.count(t.children),
    r = t.listRef,
    i = Math.ceil(Du(r)),
    o = t.trackRef && t.trackRef.node,
    a = Math.ceil(Du(o)),
    l;
  if (t.vertical) l = i;
  else {
    var s = t.centerMode && parseInt(t.centerPadding) * 2;
    typeof t.centerPadding == "string" &&
      t.centerPadding.slice(-1) === "%" &&
      (s *= i / 100),
      (l = Math.ceil((i - s) / t.slidesToShow));
  }
  var u = r && cv(r.querySelector('[data-index="0"]')),
    d = u * t.slidesToShow,
    f = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
  t.rtl && t.currentSlide === void 0 && (f = n - 1 - t.initialSlide);
  var p = t.lazyLoadedList || [],
    g = lv(Re(Re({}, t), {}, { currentSlide: f, lazyLoadedList: p }));
  p = p.concat(g);
  var y = {
    slideCount: n,
    slideWidth: l,
    listWidth: i,
    trackWidth: a,
    currentSlide: f,
    slideHeight: u,
    listHeight: d,
    lazyLoadedList: p,
  };
  return t.autoplaying === null && t.autoplay && (y.autoplaying = "playing"), y;
};
W.slideHandler = function (t) {
  var n = t.waitForAnimate,
    r = t.animating,
    i = t.fade,
    o = t.infinite,
    a = t.index,
    l = t.slideCount,
    s = t.lazyLoad,
    u = t.currentSlide,
    d = t.centerMode,
    f = t.slidesToScroll,
    p = t.slidesToShow,
    g = t.useCSS,
    y = t.lazyLoadedList;
  if (n && r) return {};
  var w = a,
    E,
    v,
    h,
    m = {},
    C = {},
    O = o ? a : av(a, 0, l - 1);
  if (i) {
    if (!o && (a < 0 || a >= l)) return {};
    a < 0 ? (w = a + l) : a >= l && (w = a - l),
      s && y.indexOf(w) < 0 && (y = y.concat(w)),
      (m = {
        animating: !0,
        currentSlide: w,
        lazyLoadedList: y,
        targetSlide: w,
      }),
      (C = { animating: !1, targetSlide: w });
  } else
    (E = w),
      w < 0
        ? ((E = w + l), o ? l % f !== 0 && (E = l - (l % f)) : (E = 0))
        : !fv(t) && w > u
        ? (w = E = u)
        : d && w >= l
        ? ((w = o ? l : l - 1), (E = o ? 0 : l - 1))
        : w >= l && ((E = w - l), o ? l % f !== 0 && (E = 0) : (E = l - p)),
      !o && w + p >= l && (E = l - p),
      (v = il(Re(Re({}, t), {}, { slideIndex: w }))),
      (h = il(Re(Re({}, t), {}, { slideIndex: E }))),
      o || (v === h && (w = E), (v = h)),
      s && (y = y.concat(lv(Re(Re({}, t), {}, { currentSlide: w })))),
      g
        ? ((m = {
            animating: !0,
            currentSlide: E,
            trackStyle: hv(Re(Re({}, t), {}, { left: v })),
            lazyLoadedList: y,
            targetSlide: O,
          }),
          (C = {
            animating: !1,
            currentSlide: E,
            trackStyle: rl(Re(Re({}, t), {}, { left: h })),
            swipeLeft: null,
            targetSlide: O,
          }))
        : (m = {
            currentSlide: E,
            trackStyle: rl(Re(Re({}, t), {}, { left: h })),
            lazyLoadedList: y,
            targetSlide: O,
          });
  return { state: m, nextState: C };
};
W.changeSlide = function (t, n) {
  var r,
    i,
    o,
    a,
    l,
    s = t.slidesToScroll,
    u = t.slidesToShow,
    d = t.slideCount,
    f = t.currentSlide,
    p = t.targetSlide,
    g = t.lazyLoad,
    y = t.infinite;
  if (((a = d % s !== 0), (r = a ? 0 : (d - f) % s), n.message === "previous"))
    (o = r === 0 ? s : u - r),
      (l = f - o),
      g && !y && ((i = f - o), (l = i === -1 ? d - 1 : i)),
      y || (l = p - s);
  else if (n.message === "next")
    (o = r === 0 ? s : r),
      (l = f + o),
      g && !y && (l = ((f + s) % d) + r),
      y || (l = p + s);
  else if (n.message === "dots") l = n.index * n.slidesToScroll;
  else if (n.message === "children") {
    if (((l = n.index), y)) {
      var w = ax(Re(Re({}, t), {}, { targetSlide: l }));
      l > n.currentSlide && w === "left"
        ? (l = l - d)
        : l < n.currentSlide && w === "right" && (l = l + d);
    }
  } else n.message === "index" && (l = Number(n.index));
  return l;
};
W.keyHandler = function (t, n, r) {
  return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n
    ? ""
    : t.keyCode === 37
    ? r
      ? "next"
      : "previous"
    : t.keyCode === 39
    ? r
      ? "previous"
      : "next"
    : "";
};
W.swipeStart = function (t, n, r) {
  return (
    t.target.tagName === "IMG" && si(t),
    !n || (!r && t.type.indexOf("mouse") !== -1)
      ? ""
      : {
          dragging: !0,
          touchObject: {
            startX: t.touches ? t.touches[0].pageX : t.clientX,
            startY: t.touches ? t.touches[0].pageY : t.clientY,
            curX: t.touches ? t.touches[0].pageX : t.clientX,
            curY: t.touches ? t.touches[0].pageY : t.clientY,
          },
        }
  );
};
W.swipeMove = function (t, n) {
  var r = n.scrolling,
    i = n.animating,
    o = n.vertical,
    a = n.swipeToSlide,
    l = n.verticalSwiping,
    s = n.rtl,
    u = n.currentSlide,
    d = n.edgeFriction,
    f = n.edgeDragged,
    p = n.onEdge,
    g = n.swiped,
    y = n.swiping,
    w = n.slideCount,
    E = n.slidesToScroll,
    v = n.infinite,
    h = n.touchObject,
    m = n.swipeEvent,
    C = n.listHeight,
    O = n.listWidth;
  if (!r) {
    if (i) return si(t);
    o && a && l && si(t);
    var P,
      x = {},
      L = il(n);
    (h.curX = t.touches ? t.touches[0].pageX : t.clientX),
      (h.curY = t.touches ? t.touches[0].pageY : t.clientY),
      (h.swipeLength = Math.round(Math.sqrt(Math.pow(h.curX - h.startX, 2))));
    var j = Math.round(Math.sqrt(Math.pow(h.curY - h.startY, 2)));
    if (!l && !y && j > 10) return { scrolling: !0 };
    l && (h.swipeLength = j);
    var _ = (s ? -1 : 1) * (h.curX > h.startX ? 1 : -1);
    l && (_ = h.curY > h.startY ? 1 : -1);
    var D = Math.ceil(w / E),
      U = dv(n.touchObject, l),
      $ = h.swipeLength;
    return (
      v ||
        (((u === 0 && (U === "right" || U === "down")) ||
          (u + 1 >= D && (U === "left" || U === "up")) ||
          (!fv(n) && (U === "left" || U === "up"))) &&
          (($ = h.swipeLength * d),
          f === !1 && p && (p(U), (x.edgeDragged = !0)))),
      !g && m && (m(U), (x.swiped = !0)),
      o ? (P = L + $ * (C / O) * _) : s ? (P = L - $ * _) : (P = L + $ * _),
      l && (P = L + $ * _),
      (x = Re(
        Re({}, x),
        {},
        {
          touchObject: h,
          swipeLeft: P,
          trackStyle: rl(Re(Re({}, n), {}, { left: P })),
        }
      )),
      Math.abs(h.curX - h.startX) < Math.abs(h.curY - h.startY) * 0.8 ||
        (h.swipeLength > 10 && ((x.swiping = !0), si(t))),
      x
    );
  }
};
W.swipeEnd = function (t, n) {
  var r = n.dragging,
    i = n.swipe,
    o = n.touchObject,
    a = n.listWidth,
    l = n.touchThreshold,
    s = n.verticalSwiping,
    u = n.listHeight,
    d = n.swipeToSlide,
    f = n.scrolling,
    p = n.onSwipe,
    g = n.targetSlide,
    y = n.currentSlide,
    w = n.infinite;
  if (!r) return i && si(t), {};
  var E = s ? u / l : a / l,
    v = dv(o, s),
    h = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {},
    };
  if (f || !o.swipeLength) return h;
  if (o.swipeLength > E) {
    si(t), p && p(v);
    var m,
      C,
      O = w ? y : g;
    switch (v) {
      case "left":
      case "up":
        (C = O + Qf(n)), (m = d ? Bf(n, C) : C), (h.currentDirection = 0);
        break;
      case "right":
      case "down":
        (C = O - Qf(n)), (m = d ? Bf(n, C) : C), (h.currentDirection = 1);
        break;
      default:
        m = O;
    }
    h.triggerSlideHandler = m;
  } else {
    var P = il(n);
    h.trackStyle = hv(Re(Re({}, n), {}, { left: P }));
  }
  return h;
};
var rx = (W.getNavigableIndexes = function (t) {
    for (
      var n = t.infinite ? t.slideCount * 2 : t.slideCount,
        r = t.infinite ? t.slidesToShow * -1 : 0,
        i = t.infinite ? t.slidesToShow * -1 : 0,
        o = [];
      r < n;

    )
      o.push(r),
        (r = i + t.slidesToScroll),
        (i += Math.min(t.slidesToScroll, t.slidesToShow));
    return o;
  }),
  Bf = (W.checkNavigable = function (t, n) {
    var r = rx(t),
      i = 0;
    if (n > r[r.length - 1]) n = r[r.length - 1];
    else
      for (var o in r) {
        if (n < r[o]) {
          n = i;
          break;
        }
        i = r[o];
      }
    return n;
  }),
  Qf = (W.getSlideCount = function (t) {
    var n = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
    if (t.swipeToSlide) {
      var r,
        i = t.listRef,
        o = (i.querySelectorAll && i.querySelectorAll(".slick-slide")) || [];
      if (
        (Array.from(o).every(function (s) {
          if (t.vertical) {
            if (s.offsetTop + cv(s) / 2 > t.swipeLeft * -1) return (r = s), !1;
          } else if (s.offsetLeft - n + Du(s) / 2 > t.swipeLeft * -1) return (r = s), !1;
          return !0;
        }),
        !r)
      )
        return 0;
      var a = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide,
        l = Math.abs(r.dataset.index - a) || 1;
      return l;
    } else return t.slidesToScroll;
  }),
  ed = (W.checkSpecKeys = function (t, n) {
    return n.reduce(function (r, i) {
      return r && t.hasOwnProperty(i);
    }, !0)
      ? null
      : console.error("Keys Missing:", t);
  }),
  rl = (W.getTrackCSS = function (t) {
    ed(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
    ]);
    var n,
      r,
      i = t.slideCount + 2 * t.slidesToShow;
    t.vertical ? (r = i * t.slideHeight) : (n = ox(t) * t.slideWidth);
    var o = { opacity: 1, transition: "", WebkitTransition: "" };
    if (t.useTransform) {
      var a = t.vertical
          ? "translate3d(0px, " + t.left + "px, 0px)"
          : "translate3d(" + t.left + "px, 0px, 0px)",
        l = t.vertical
          ? "translate3d(0px, " + t.left + "px, 0px)"
          : "translate3d(" + t.left + "px, 0px, 0px)",
        s = t.vertical
          ? "translateY(" + t.left + "px)"
          : "translateX(" + t.left + "px)";
      o = Re(
        Re({}, o),
        {},
        { WebkitTransform: a, transform: l, msTransform: s }
      );
    } else t.vertical ? (o.top = t.left) : (o.left = t.left);
    return (
      t.fade && (o = { opacity: 1 }),
      n && (o.width = n),
      r && (o.height = r),
      window &&
        !window.addEventListener &&
        window.attachEvent &&
        (t.vertical
          ? (o.marginTop = t.left + "px")
          : (o.marginLeft = t.left + "px")),
      o
    );
  }),
  hv = (W.getTrackAnimateCSS = function (t) {
    ed(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
      "speed",
      "cssEase",
    ]);
    var n = rl(t);
    return (
      t.useTransform
        ? ((n.WebkitTransition =
            "-webkit-transform " + t.speed + "ms " + t.cssEase),
          (n.transition = "transform " + t.speed + "ms " + t.cssEase))
        : t.vertical
        ? (n.transition = "top " + t.speed + "ms " + t.cssEase)
        : (n.transition = "left " + t.speed + "ms " + t.cssEase),
      n
    );
  }),
  il = (W.getTrackLeft = function (t) {
    if (t.unslick) return 0;
    ed(t, [
      "slideIndex",
      "trackRef",
      "infinite",
      "centerMode",
      "slideCount",
      "slidesToShow",
      "slidesToScroll",
      "slideWidth",
      "listWidth",
      "variableWidth",
      "slideHeight",
    ]);
    var n = t.slideIndex,
      r = t.trackRef,
      i = t.infinite,
      o = t.centerMode,
      a = t.slideCount,
      l = t.slidesToShow,
      s = t.slidesToScroll,
      u = t.slideWidth,
      d = t.listWidth,
      f = t.variableWidth,
      p = t.slideHeight,
      g = t.fade,
      y = t.vertical,
      w = 0,
      E,
      v,
      h = 0;
    if (g || t.slideCount === 1) return 0;
    var m = 0;
    if (
      (i
        ? ((m = -Ea(t)),
          a % s !== 0 && n + s > a && (m = -(n > a ? l - (n - a) : a % s)),
          o && (m += parseInt(l / 2)))
        : (a % s !== 0 && n + s > a && (m = l - (a % s)),
          o && (m = parseInt(l / 2))),
      (w = m * u),
      (h = m * p),
      y ? (E = n * p * -1 + h) : (E = n * u * -1 + w),
      f === !0)
    ) {
      var C,
        O = r && r.node;
      if (
        ((C = n + Ea(t)),
        (v = O && O.childNodes[C]),
        (E = v ? v.offsetLeft * -1 : 0),
        o === !0)
      ) {
        (C = i ? n + Ea(t) : n), (v = O && O.children[C]), (E = 0);
        for (var P = 0; P < C; P++)
          E -= O && O.children[P] && O.children[P].offsetWidth;
        (E -= parseInt(t.centerPadding)), (E += v && (d - v.offsetWidth) / 2);
      }
    }
    return E;
  }),
  Ea = (W.getPreClones = function (t) {
    return t.unslick || !t.infinite
      ? 0
      : t.variableWidth
      ? t.slideCount
      : t.slidesToShow + (t.centerMode ? 1 : 0);
  }),
  ix = (W.getPostClones = function (t) {
    return t.unslick || !t.infinite ? 0 : t.slideCount;
  }),
  ox = (W.getTotalSlides = function (t) {
    return t.slideCount === 1 ? 1 : Ea(t) + t.slideCount + ix(t);
  }),
  ax = (W.siblingDirection = function (t) {
    return t.targetSlide > t.currentSlide
      ? t.targetSlide > t.currentSlide + lx(t)
        ? "left"
        : "right"
      : t.targetSlide < t.currentSlide - sx(t)
      ? "right"
      : "left";
  }),
  lx = (W.slidesOnRight = function (t) {
    var n = t.slidesToShow,
      r = t.centerMode,
      i = t.rtl,
      o = t.centerPadding;
    if (r) {
      var a = (n - 1) / 2 + 1;
      return parseInt(o) > 0 && (a += 1), i && n % 2 === 0 && (a += 1), a;
    }
    return i ? 0 : n - 1;
  }),
  sx = (W.slidesOnLeft = function (t) {
    var n = t.slidesToShow,
      r = t.centerMode,
      i = t.rtl,
      o = t.centerPadding;
    if (r) {
      var a = (n - 1) / 2 + 1;
      return parseInt(o) > 0 && (a += 1), !i && n % 2 === 0 && (a += 1), a;
    }
    return i ? n - 1 : 0;
  });
W.canUseDOM = function () {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
};
var ux = (W.validSettings = Object.keys(X1.default));
function cx(e) {
  return ux.reduce(function (t, n) {
    return e.hasOwnProperty(n) && (t[n] = e[n]), t;
  }, {});
}
var Il = {};
Object.defineProperty(Il, "__esModule", { value: !0 });
Il.Track = void 0;
var Zn = pv(N),
  gs = pv(Dl),
  ws = W;
function pv(e) {
  return e && e.__esModule ? e : { default: e };
}
function gi(e) {
  "@babel/helpers - typeof";
  return (
    (gi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    gi(e)
  );
}
function Iu() {
  return (
    (Iu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Iu.apply(this, arguments)
  );
}
function dx(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fx(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, vv(r.key), r);
  }
}
function hx(e, t, n) {
  return (
    t && fx(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function px(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && zu(e, t);
}
function zu(e, t) {
  return (
    (zu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    zu(e, t)
  );
}
function mx(e) {
  var t = mv();
  return function () {
    var r = ol(e),
      i;
    if (t) {
      var o = ol(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return vx(this, i);
  };
}
function vx(e, t) {
  if (t && (gi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Au(e);
}
function Au(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function mv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (mv = function () {
    return !!e;
  })();
}
function ol(e) {
  return (
    (ol = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    ol(e)
  );
}
function Wf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wf(Object(n), !0).forEach(function (r) {
          Fu(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Wf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Fu(e, t, n) {
  return (
    (t = vv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function vv(e) {
  var t = yx(e, "string");
  return gi(t) == "symbol" ? t : String(t);
}
function yx(e, t) {
  if (gi(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (gi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xs = function (t) {
    var n, r, i, o, a;
    t.rtl ? (a = t.slideCount - 1 - t.index) : (a = t.index),
      (i = a < 0 || a >= t.slideCount),
      t.centerMode
        ? ((o = Math.floor(t.slidesToShow / 2)),
          (r = (a - t.currentSlide) % t.slideCount === 0),
          a > t.currentSlide - o - 1 && a <= t.currentSlide + o && (n = !0))
        : (n = t.currentSlide <= a && a < t.currentSlide + t.slidesToShow);
    var l;
    t.targetSlide < 0
      ? (l = t.targetSlide + t.slideCount)
      : t.targetSlide >= t.slideCount
      ? (l = t.targetSlide - t.slideCount)
      : (l = t.targetSlide);
    var s = a === l;
    return {
      "slick-slide": !0,
      "slick-active": n,
      "slick-center": r,
      "slick-cloned": i,
      "slick-current": s,
    };
  },
  gx = function (t) {
    var n = {};
    return (
      (t.variableWidth === void 0 || t.variableWidth === !1) &&
        (n.width = t.slideWidth),
      t.fade &&
        ((n.position = "relative"),
        t.vertical
          ? (n.top = -t.index * parseInt(t.slideHeight))
          : (n.left = -t.index * parseInt(t.slideWidth)),
        (n.opacity = t.currentSlide === t.index ? 1 : 0),
        (n.zIndex = t.currentSlide === t.index ? 999 : 998),
        t.useCSS &&
          (n.transition =
            "opacity " +
            t.speed +
            "ms " +
            t.cssEase +
            ", visibility " +
            t.speed +
            "ms " +
            t.cssEase)),
      n
    );
  },
  Ss = function (t, n) {
    return t.key || n;
  },
  wx = function (t) {
    var n,
      r = [],
      i = [],
      o = [],
      a = Zn.default.Children.count(t.children),
      l = (0, ws.lazyStartIndex)(t),
      s = (0, ws.lazyEndIndex)(t);
    return (
      Zn.default.Children.forEach(t.children, function (u, d) {
        var f,
          p = {
            message: "children",
            index: d,
            slidesToScroll: t.slidesToScroll,
            currentSlide: t.currentSlide,
          };
        !t.lazyLoad || (t.lazyLoad && t.lazyLoadedList.indexOf(d) >= 0)
          ? (f = u)
          : (f = Zn.default.createElement("div", null));
        var g = gx(Ot(Ot({}, t), {}, { index: d })),
          y = f.props.className || "",
          w = xs(Ot(Ot({}, t), {}, { index: d }));
        if (
          (r.push(
            Zn.default.cloneElement(f, {
              key: "original" + Ss(f, d),
              "data-index": d,
              className: (0, gs.default)(w, y),
              tabIndex: "-1",
              "aria-hidden": !w["slick-active"],
              style: Ot(Ot({ outline: "none" }, f.props.style || {}), g),
              onClick: function (h) {
                f.props && f.props.onClick && f.props.onClick(h),
                  t.focusOnSelect && t.focusOnSelect(p);
              },
            })
          ),
          t.infinite && t.fade === !1)
        ) {
          var E = a - d;
          E <= (0, ws.getPreClones)(t) &&
            ((n = -E),
            n >= l && (f = u),
            (w = xs(Ot(Ot({}, t), {}, { index: n }))),
            i.push(
              Zn.default.cloneElement(f, {
                key: "precloned" + Ss(f, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, gs.default)(w, y),
                "aria-hidden": !w["slick-active"],
                style: Ot(Ot({}, f.props.style || {}), g),
                onClick: function (h) {
                  f.props && f.props.onClick && f.props.onClick(h),
                    t.focusOnSelect && t.focusOnSelect(p);
                },
              })
            )),
            (n = a + d),
            n < s && (f = u),
            (w = xs(Ot(Ot({}, t), {}, { index: n }))),
            o.push(
              Zn.default.cloneElement(f, {
                key: "postcloned" + Ss(f, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, gs.default)(w, y),
                "aria-hidden": !w["slick-active"],
                style: Ot(Ot({}, f.props.style || {}), g),
                onClick: function (h) {
                  f.props && f.props.onClick && f.props.onClick(h),
                    t.focusOnSelect && t.focusOnSelect(p);
                },
              })
            );
        }
      }),
      t.rtl ? i.concat(r, o).reverse() : i.concat(r, o)
    );
  };
Il.Track = (function (e) {
  px(n, e);
  var t = mx(n);
  function n() {
    var r;
    dx(this, n);
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(o))),
      Fu(Au(r), "node", null),
      Fu(Au(r), "handleRef", function (l) {
        r.node = l;
      }),
      r
    );
  }
  return (
    hx(n, [
      {
        key: "render",
        value: function () {
          var i = wx(this.props),
            o = this.props,
            a = o.onMouseEnter,
            l = o.onMouseOver,
            s = o.onMouseLeave,
            u = { onMouseEnter: a, onMouseOver: l, onMouseLeave: s };
          return Zn.default.createElement(
            "div",
            Iu(
              {
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle,
              },
              u
            ),
            i
          );
        },
      },
    ]),
    n
  );
})(Zn.default.PureComponent);
var zl = {};
function wi(e) {
  "@babel/helpers - typeof";
  return (
    (wi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    wi(e)
  );
}
Object.defineProperty(zl, "__esModule", { value: !0 });
zl.Dots = void 0;
var ra = yv(N),
  xx = yv(Dl),
  qf = W;
function yv(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Sx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vf(Object(n), !0).forEach(function (r) {
          bx(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Vf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function bx(e, t, n) {
  return (
    (t = gv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ex(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cx(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, gv(r.key), r);
  }
}
function _x(e, t, n) {
  return (
    t && Cx(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function gv(e) {
  var t = kx(e, "string");
  return wi(t) == "symbol" ? t : String(t);
}
function kx(e, t) {
  if (wi(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (wi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ox(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Uu(e, t);
}
function Uu(e, t) {
  return (
    (Uu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Uu(e, t)
  );
}
function Px(e) {
  var t = wv();
  return function () {
    var r = al(e),
      i;
    if (t) {
      var o = al(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return jx(this, i);
  };
}
function jx(e, t) {
  if (t && (wi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Nx(e);
}
function Nx(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function wv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (wv = function () {
    return !!e;
  })();
}
function al(e) {
  return (
    (al = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    al(e)
  );
}
var Tx = function (t) {
  var n;
  return (
    t.infinite
      ? (n = Math.ceil(t.slideCount / t.slidesToScroll))
      : (n = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1),
    n
  );
};
zl.Dots = (function (e) {
  Ox(n, e);
  var t = Px(n);
  function n() {
    return Ex(this, n), t.apply(this, arguments);
  }
  return (
    _x(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o.preventDefault(), this.props.clickHandler(i);
        },
      },
      {
        key: "render",
        value: function () {
          for (
            var i = this.props,
              o = i.onMouseEnter,
              a = i.onMouseOver,
              l = i.onMouseLeave,
              s = i.infinite,
              u = i.slidesToScroll,
              d = i.slidesToShow,
              f = i.slideCount,
              p = i.currentSlide,
              g = Tx({
                slideCount: f,
                slidesToScroll: u,
                slidesToShow: d,
                infinite: s,
              }),
              y = { onMouseEnter: o, onMouseOver: a, onMouseLeave: l },
              w = [],
              E = 0;
            E < g;
            E++
          ) {
            var v = (E + 1) * u - 1,
              h = s ? v : (0, qf.clamp)(v, 0, f - 1),
              m = h - (u - 1),
              C = s ? m : (0, qf.clamp)(m, 0, f - 1),
              O = (0, xx.default)({
                "slick-active": s ? p >= C && p <= h : p === C,
              }),
              P = {
                message: "dots",
                index: E,
                slidesToScroll: u,
                currentSlide: p,
              },
              x = this.clickHandler.bind(this, P);
            w = w.concat(
              ra.default.createElement(
                "li",
                { key: E, className: O },
                ra.default.cloneElement(this.props.customPaging(E), {
                  onClick: x,
                })
              )
            );
          }
          return ra.default.cloneElement(
            this.props.appendDots(w),
            Sx({ className: this.props.dotsClass }, y)
          );
        },
      },
    ]),
    n
  );
})(ra.default.PureComponent);
var xi = {};
function Si(e) {
  "@babel/helpers - typeof";
  return (
    (Si =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Si(e)
  );
}
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.PrevArrow = xi.NextArrow = void 0;
var ui = Sv(N),
  xv = Sv(Dl),
  Rx = W;
function Sv(e) {
  return e && e.__esModule ? e : { default: e };
}
function ll() {
  return (
    (ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ll.apply(this, arguments)
  );
}
function Kf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function sl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kf(Object(n), !0).forEach(function (r) {
          Lx(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Kf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Lx(e, t, n) {
  return (
    (t = Cv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function bv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mx(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Cv(r.key), r);
  }
}
function Ev(e, t, n) {
  return (
    t && Mx(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Cv(e) {
  var t = Dx(e, "string");
  return Si(t) == "symbol" ? t : String(t);
}
function Dx(e, t) {
  if (Si(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Si(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _v(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && $u(e, t);
}
function $u(e, t) {
  return (
    ($u = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    $u(e, t)
  );
}
function kv(e) {
  var t = Ov();
  return function () {
    var r = ul(e),
      i;
    if (t) {
      var o = ul(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return Ix(this, i);
  };
}
function Ix(e, t) {
  if (t && (Si(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return zx(e);
}
function zx(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Ov() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Ov = function () {
    return !!e;
  })();
}
function ul(e) {
  return (
    (ul = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    ul(e)
  );
}
xi.PrevArrow = (function (e) {
  _v(n, e);
  var t = kv(n);
  function n() {
    return bv(this, n), t.apply(this, arguments);
  }
  return (
    Ev(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o && o.preventDefault(), this.props.clickHandler(i, o);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-prev": !0 },
            o = this.clickHandler.bind(this, { message: "previous" });
          !this.props.infinite &&
            (this.props.currentSlide === 0 ||
              this.props.slideCount <= this.props.slidesToShow) &&
            ((i["slick-disabled"] = !0), (o = null));
          var a = {
              key: "0",
              "data-role": "none",
              className: (0, xv.default)(i),
              style: { display: "block" },
              onClick: o,
            },
            l = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            s;
          return (
            this.props.prevArrow
              ? (s = ui.default.cloneElement(
                  this.props.prevArrow,
                  sl(sl({}, a), l)
                ))
              : (s = ui.default.createElement(
                  "button",
                  ll({ key: "0", type: "button" }, a),
                  " ",
                  "Previous"
                )),
            s
          );
        },
      },
    ]),
    n
  );
})(ui.default.PureComponent);
xi.NextArrow = (function (e) {
  _v(n, e);
  var t = kv(n);
  function n() {
    return bv(this, n), t.apply(this, arguments);
  }
  return (
    Ev(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o && o.preventDefault(), this.props.clickHandler(i, o);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-next": !0 },
            o = this.clickHandler.bind(this, { message: "next" });
          (0, Rx.canGoNext)(this.props) ||
            ((i["slick-disabled"] = !0), (o = null));
          var a = {
              key: "1",
              "data-role": "none",
              className: (0, xv.default)(i),
              style: { display: "block" },
              onClick: o,
            },
            l = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            s;
          return (
            this.props.nextArrow
              ? (s = ui.default.cloneElement(
                  this.props.nextArrow,
                  sl(sl({}, a), l)
                ))
              : (s = ui.default.createElement(
                  "button",
                  ll({ key: "1", type: "button" }, a),
                  " ",
                  "Next"
                )),
            s
          );
        },
      },
    ]),
    n
  );
})(ui.default.PureComponent);
var Pv = (function () {
    if (typeof Map < "u") return Map;
    function e(t, n) {
      var r = -1;
      return (
        t.some(function (i, o) {
          return i[0] === n ? ((r = o), !0) : !1;
        }),
        r
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            i = this.__entries__[r];
          return i && i[1];
        }),
        (t.prototype.set = function (n, r) {
          var i = e(this.__entries__, n);
          ~i ? (this.__entries__[i][1] = r) : this.__entries__.push([n, r]);
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            i = e(r, n);
          ~i && r.splice(i, 1);
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null);
          for (var i = 0, o = this.__entries__; i < o.length; i++) {
            var a = o[i];
            n.call(r, a[1], a[0]);
          }
        }),
        t
      );
    })();
  })(),
  Hu =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  cl = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
      ? self
      : typeof window < "u" && window.Math === Math
      ? window
      : Function("return this")();
  })(),
  Ax = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(cl)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  Fx = 2;
function Ux(e, t) {
  var n = !1,
    r = !1,
    i = 0;
  function o() {
    n && ((n = !1), e()), r && l();
  }
  function a() {
    Ax(o);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - i < Fx) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(a, t);
    i = s;
  }
  return l;
}
var $x = 20,
  Hx = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  Bx = typeof MutationObserver < "u",
  Qx = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = Ux(this.refresh.bind(this), $x));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !Hu ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          Bx
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !Hu ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? "" : n,
          i = Hx.some(function (o) {
            return !!~r.indexOf(o);
          });
        i && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  jv = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n];
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  bi = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || cl;
  },
  Nv = Al(0, 0, 0, 0);
function dl(e) {
  return parseFloat(e) || 0;
}
function Yf(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, i) {
    var o = e["border-" + i + "-width"];
    return r + dl(o);
  }, 0);
}
function Wx(e) {
  for (
    var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t;
    r < i.length;
    r++
  ) {
    var o = i[r],
      a = e["padding-" + o];
    n[o] = dl(a);
  }
  return n;
}
function qx(e) {
  var t = e.getBBox();
  return Al(0, 0, t.width, t.height);
}
function Vx(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return Nv;
  var r = bi(e).getComputedStyle(e),
    i = Wx(r),
    o = i.left + i.right,
    a = i.top + i.bottom,
    l = dl(r.width),
    s = dl(r.height);
  if (
    (r.boxSizing === "border-box" &&
      (Math.round(l + o) !== t && (l -= Yf(r, "left", "right") + o),
      Math.round(s + a) !== n && (s -= Yf(r, "top", "bottom") + a)),
    !Yx(e))
  ) {
    var u = Math.round(l + o) - t,
      d = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(d) !== 1 && (s -= d);
  }
  return Al(i.left, i.top, l, s);
}
var Kx = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (e) {
        return e instanceof bi(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof bi(e).SVGElement && typeof e.getBBox == "function";
      };
})();
function Yx(e) {
  return e === bi(e).document.documentElement;
}
function Gx(e) {
  return Hu ? (Kx(e) ? qx(e) : Vx(e)) : Nv;
}
function Xx(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    i = e.height,
    o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    a = Object.create(o.prototype);
  return (
    jv(a, {
      x: t,
      y: n,
      width: r,
      height: i,
      top: n,
      right: t + r,
      bottom: i + n,
      left: t,
    }),
    a
  );
}
function Al(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var Jx = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = Al(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = Gx(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  Zx = (function () {
    function e(t, n) {
      var r = Xx(n);
      jv(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  eS = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Pv()),
        typeof t != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof bi(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new Jx(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof bi(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new Zx(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  Tv = typeof WeakMap < "u" ? new WeakMap() : new Pv(),
  Rv = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Qx.getInstance(),
        r = new eS(t, n, this);
      Tv.set(this, r);
    }
    return e;
  })();
["observe", "unobserve", "disconnect"].forEach(function (e) {
  Rv.prototype[e] = function () {
    var t;
    return (t = Tv.get(this))[e].apply(t, arguments);
  };
});
var tS = (function () {
  return typeof cl.ResizeObserver < "u" ? cl.ResizeObserver : Rv;
})();
const nS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: tS },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  rS = Gv(nS);
Object.defineProperty(Ml, "__esModule", { value: !0 });
Ml.InnerSlider = void 0;
var gt = Ao(N),
  iS = Ao(rv),
  oS = Ao(Y1),
  aS = Ao(Dl),
  Ae = W,
  lS = Il,
  sS = zl,
  Gf = xi,
  uS = Ao(rS);
function Ao(e) {
  return e && e.__esModule ? e : { default: e };
}
function Dr(e) {
  "@babel/helpers - typeof";
  return (
    (Dr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Dr(e)
  );
}
function fl() {
  return (
    (fl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fl.apply(this, arguments)
  );
}
function cS(e, t) {
  if (e == null) return {};
  var n = dS(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function dS(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Xf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xf(Object(n), !0).forEach(function (r) {
          he(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Xf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function fS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hS(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Mv(r.key), r);
  }
}
function pS(e, t, n) {
  return (
    t && hS(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function mS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Bu(e, t);
}
function Bu(e, t) {
  return (
    (Bu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Bu(e, t)
  );
}
function vS(e) {
  var t = Lv();
  return function () {
    var r = hl(e),
      i;
    if (t) {
      var o = hl(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return yS(this, i);
  };
}
function yS(e, t) {
  if (t && (Dr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return fe(e);
}
function fe(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Lv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Lv = function () {
    return !!e;
  })();
}
function hl(e) {
  return (
    (hl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    hl(e)
  );
}
function he(e, t, n) {
  return (
    (t = Mv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Mv(e) {
  var t = gS(e, "string");
  return Dr(t) == "symbol" ? t : String(t);
}
function gS(e, t) {
  if (Dr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Dr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
Ml.InnerSlider = (function (e) {
  mS(n, e);
  var t = vS(n);
  function n(r) {
    var i;
    fS(this, n),
      (i = t.call(this, r)),
      he(fe(i), "listRefHandler", function (a) {
        return (i.list = a);
      }),
      he(fe(i), "trackRefHandler", function (a) {
        return (i.track = a);
      }),
      he(fe(i), "adaptHeight", function () {
        if (i.props.adaptiveHeight && i.list) {
          var a = i.list.querySelector(
            '[data-index="'.concat(i.state.currentSlide, '"]')
          );
          i.list.style.height = (0, Ae.getHeight)(a) + "px";
        }
      }),
      he(fe(i), "componentDidMount", function () {
        if ((i.props.onInit && i.props.onInit(), i.props.lazyLoad)) {
          var a = (0, Ae.getOnDemandLazySlides)(te(te({}, i.props), i.state));
          a.length > 0 &&
            (i.setState(function (s) {
              return { lazyLoadedList: s.lazyLoadedList.concat(a) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(a));
        }
        var l = te({ listRef: i.list, trackRef: i.track }, i.props);
        i.updateState(l, !0, function () {
          i.adaptHeight(), i.props.autoplay && i.autoPlay("update");
        }),
          i.props.lazyLoad === "progressive" &&
            (i.lazyLoadTimer = setInterval(i.progressiveLazyLoad, 1e3)),
          (i.ro = new uS.default(function () {
            i.state.animating
              ? (i.onWindowResized(!1),
                i.callbackTimers.push(
                  setTimeout(function () {
                    return i.onWindowResized();
                  }, i.props.speed)
                ))
              : i.onWindowResized();
          })),
          i.ro.observe(i.list),
          document.querySelectorAll &&
            Array.prototype.forEach.call(
              document.querySelectorAll(".slick-slide"),
              function (s) {
                (s.onfocus = i.props.pauseOnFocus ? i.onSlideFocus : null),
                  (s.onblur = i.props.pauseOnFocus ? i.onSlideBlur : null);
              }
            ),
          window.addEventListener
            ? window.addEventListener("resize", i.onWindowResized)
            : window.attachEvent("onresize", i.onWindowResized);
      }),
      he(fe(i), "componentWillUnmount", function () {
        i.animationEndCallback && clearTimeout(i.animationEndCallback),
          i.lazyLoadTimer && clearInterval(i.lazyLoadTimer),
          i.callbackTimers.length &&
            (i.callbackTimers.forEach(function (a) {
              return clearTimeout(a);
            }),
            (i.callbackTimers = [])),
          window.addEventListener
            ? window.removeEventListener("resize", i.onWindowResized)
            : window.detachEvent("onresize", i.onWindowResized),
          i.autoplayTimer && clearInterval(i.autoplayTimer),
          i.ro.disconnect();
      }),
      he(fe(i), "componentDidUpdate", function (a) {
        if (
          (i.checkImagesLoad(),
          i.props.onReInit && i.props.onReInit(),
          i.props.lazyLoad)
        ) {
          var l = (0, Ae.getOnDemandLazySlides)(te(te({}, i.props), i.state));
          l.length > 0 &&
            (i.setState(function (d) {
              return { lazyLoadedList: d.lazyLoadedList.concat(l) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(l));
        }
        i.adaptHeight();
        var s = te(
            te({ listRef: i.list, trackRef: i.track }, i.props),
            i.state
          ),
          u = i.didPropsChange(a);
        u &&
          i.updateState(s, u, function () {
            i.state.currentSlide >=
              gt.default.Children.count(i.props.children) &&
              i.changeSlide({
                message: "index",
                index:
                  gt.default.Children.count(i.props.children) -
                  i.props.slidesToShow,
                currentSlide: i.state.currentSlide,
              }),
              i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          });
      }),
      he(fe(i), "onWindowResized", function (a) {
        i.debouncedResize && i.debouncedResize.cancel(),
          (i.debouncedResize = (0, oS.default)(function () {
            return i.resizeWindow(a);
          }, 50)),
          i.debouncedResize();
      }),
      he(fe(i), "resizeWindow", function () {
        var a =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
          l = !!(i.track && i.track.node);
        if (l) {
          var s = te(
            te({ listRef: i.list, trackRef: i.track }, i.props),
            i.state
          );
          i.updateState(s, a, function () {
            i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          }),
            i.setState({ animating: !1 }),
            clearTimeout(i.animationEndCallback),
            delete i.animationEndCallback;
        }
      }),
      he(fe(i), "updateState", function (a, l, s) {
        var u = (0, Ae.initializedState)(a);
        a = te(te(te({}, a), u), {}, { slideIndex: u.currentSlide });
        var d = (0, Ae.getTrackLeft)(a);
        a = te(te({}, a), {}, { left: d });
        var f = (0, Ae.getTrackCSS)(a);
        (l ||
          gt.default.Children.count(i.props.children) !==
            gt.default.Children.count(a.children)) &&
          (u.trackStyle = f),
          i.setState(u, s);
      }),
      he(fe(i), "ssrInit", function () {
        if (i.props.variableWidth) {
          var a = 0,
            l = 0,
            s = [],
            u = (0, Ae.getPreClones)(
              te(
                te(te({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            ),
            d = (0, Ae.getPostClones)(
              te(
                te(te({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            );
          i.props.children.forEach(function (x) {
            s.push(x.props.style.width), (a += x.props.style.width);
          });
          for (var f = 0; f < u; f++)
            (l += s[s.length - 1 - f]), (a += s[s.length - 1 - f]);
          for (var p = 0; p < d; p++) a += s[p];
          for (var g = 0; g < i.state.currentSlide; g++) l += s[g];
          var y = { width: a + "px", left: -l + "px" };
          if (i.props.centerMode) {
            var w = "".concat(s[i.state.currentSlide], "px");
            y.left = "calc("
              .concat(y.left, " + (100% - ")
              .concat(w, ") / 2 ) ");
          }
          return { trackStyle: y };
        }
        var E = gt.default.Children.count(i.props.children),
          v = te(te(te({}, i.props), i.state), {}, { slideCount: E }),
          h = (0, Ae.getPreClones)(v) + (0, Ae.getPostClones)(v) + E,
          m = (100 / i.props.slidesToShow) * h,
          C = 100 / h,
          O = (-C * ((0, Ae.getPreClones)(v) + i.state.currentSlide) * m) / 100;
        i.props.centerMode && (O += (100 - (C * m) / 100) / 2);
        var P = { width: m + "%", left: O + "%" };
        return { slideWidth: C + "%", trackStyle: P };
      }),
      he(fe(i), "checkImagesLoad", function () {
        var a =
            (i.list &&
              i.list.querySelectorAll &&
              i.list.querySelectorAll(".slick-slide img")) ||
            [],
          l = a.length,
          s = 0;
        Array.prototype.forEach.call(a, function (u) {
          var d = function () {
            return ++s && s >= l && i.onWindowResized();
          };
          if (!u.onclick)
            u.onclick = function () {
              return u.parentNode.focus();
            };
          else {
            var f = u.onclick;
            u.onclick = function (p) {
              f(p), u.parentNode.focus();
            };
          }
          u.onload ||
            (i.props.lazyLoad
              ? (u.onload = function () {
                  i.adaptHeight(),
                    i.callbackTimers.push(
                      setTimeout(i.onWindowResized, i.props.speed)
                    );
                })
              : ((u.onload = d),
                (u.onerror = function () {
                  d(), i.props.onLazyLoadError && i.props.onLazyLoadError();
                })));
        });
      }),
      he(fe(i), "progressiveLazyLoad", function () {
        for (
          var a = [],
            l = te(te({}, i.props), i.state),
            s = i.state.currentSlide;
          s < i.state.slideCount + (0, Ae.getPostClones)(l);
          s++
        )
          if (i.state.lazyLoadedList.indexOf(s) < 0) {
            a.push(s);
            break;
          }
        for (
          var u = i.state.currentSlide - 1;
          u >= -(0, Ae.getPreClones)(l);
          u--
        )
          if (i.state.lazyLoadedList.indexOf(u) < 0) {
            a.push(u);
            break;
          }
        a.length > 0
          ? (i.setState(function (d) {
              return { lazyLoadedList: d.lazyLoadedList.concat(a) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(a))
          : i.lazyLoadTimer &&
            (clearInterval(i.lazyLoadTimer), delete i.lazyLoadTimer);
      }),
      he(fe(i), "slideHandler", function (a) {
        var l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          s = i.props,
          u = s.asNavFor,
          d = s.beforeChange,
          f = s.onLazyLoad,
          p = s.speed,
          g = s.afterChange,
          y = i.state.currentSlide,
          w = (0, Ae.slideHandler)(
            te(
              te(te({ index: a }, i.props), i.state),
              {},
              { trackRef: i.track, useCSS: i.props.useCSS && !l }
            )
          ),
          E = w.state,
          v = w.nextState;
        if (E) {
          d && d(y, E.currentSlide);
          var h = E.lazyLoadedList.filter(function (m) {
            return i.state.lazyLoadedList.indexOf(m) < 0;
          });
          f && h.length > 0 && f(h),
            !i.props.waitForAnimate &&
              i.animationEndCallback &&
              (clearTimeout(i.animationEndCallback),
              g && g(y),
              delete i.animationEndCallback),
            i.setState(E, function () {
              u &&
                i.asNavForIndex !== a &&
                ((i.asNavForIndex = a), u.innerSlider.slideHandler(a)),
                v &&
                  (i.animationEndCallback = setTimeout(function () {
                    var m = v.animating,
                      C = cS(v, ["animating"]);
                    i.setState(C, function () {
                      i.callbackTimers.push(
                        setTimeout(function () {
                          return i.setState({ animating: m });
                        }, 10)
                      ),
                        g && g(E.currentSlide),
                        delete i.animationEndCallback;
                    });
                  }, p));
            });
        }
      }),
      he(fe(i), "changeSlide", function (a) {
        var l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          s = te(te({}, i.props), i.state),
          u = (0, Ae.changeSlide)(s, a);
        if (
          !(u !== 0 && !u) &&
          (l === !0 ? i.slideHandler(u, l) : i.slideHandler(u),
          i.props.autoplay && i.autoPlay("update"),
          i.props.focusOnSelect)
        ) {
          var d = i.list.querySelectorAll(".slick-current");
          d[0] && d[0].focus();
        }
      }),
      he(fe(i), "clickHandler", function (a) {
        i.clickable === !1 && (a.stopPropagation(), a.preventDefault()),
          (i.clickable = !0);
      }),
      he(fe(i), "keyHandler", function (a) {
        var l = (0, Ae.keyHandler)(a, i.props.accessibility, i.props.rtl);
        l !== "" && i.changeSlide({ message: l });
      }),
      he(fe(i), "selectHandler", function (a) {
        i.changeSlide(a);
      }),
      he(fe(i), "disableBodyScroll", function () {
        var a = function (s) {
          (s = s || window.event),
            s.preventDefault && s.preventDefault(),
            (s.returnValue = !1);
        };
        window.ontouchmove = a;
      }),
      he(fe(i), "enableBodyScroll", function () {
        window.ontouchmove = null;
      }),
      he(fe(i), "swipeStart", function (a) {
        i.props.verticalSwiping && i.disableBodyScroll();
        var l = (0, Ae.swipeStart)(a, i.props.swipe, i.props.draggable);
        l !== "" && i.setState(l);
      }),
      he(fe(i), "swipeMove", function (a) {
        var l = (0, Ae.swipeMove)(
          a,
          te(
            te(te({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        l && (l.swiping && (i.clickable = !1), i.setState(l));
      }),
      he(fe(i), "swipeEnd", function (a) {
        var l = (0, Ae.swipeEnd)(
          a,
          te(
            te(te({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        if (l) {
          var s = l.triggerSlideHandler;
          delete l.triggerSlideHandler,
            i.setState(l),
            s !== void 0 &&
              (i.slideHandler(s),
              i.props.verticalSwiping && i.enableBodyScroll());
        }
      }),
      he(fe(i), "touchEnd", function (a) {
        i.swipeEnd(a), (i.clickable = !0);
      }),
      he(fe(i), "slickPrev", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "previous" });
          }, 0)
        );
      }),
      he(fe(i), "slickNext", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "next" });
          }, 0)
        );
      }),
      he(fe(i), "slickGoTo", function (a) {
        var l =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (((a = Number(a)), isNaN(a))) return "";
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide(
              {
                message: "index",
                index: a,
                currentSlide: i.state.currentSlide,
              },
              l
            );
          }, 0)
        );
      }),
      he(fe(i), "play", function () {
        var a;
        if (i.props.rtl) a = i.state.currentSlide - i.props.slidesToScroll;
        else if ((0, Ae.canGoNext)(te(te({}, i.props), i.state)))
          a = i.state.currentSlide + i.props.slidesToScroll;
        else return !1;
        i.slideHandler(a);
      }),
      he(fe(i), "autoPlay", function (a) {
        i.autoplayTimer && clearInterval(i.autoplayTimer);
        var l = i.state.autoplaying;
        if (a === "update") {
          if (l === "hovered" || l === "focused" || l === "paused") return;
        } else if (a === "leave") {
          if (l === "paused" || l === "focused") return;
        } else if (a === "blur" && (l === "paused" || l === "hovered")) return;
        (i.autoplayTimer = setInterval(i.play, i.props.autoplaySpeed + 50)),
          i.setState({ autoplaying: "playing" });
      }),
      he(fe(i), "pause", function (a) {
        i.autoplayTimer &&
          (clearInterval(i.autoplayTimer), (i.autoplayTimer = null));
        var l = i.state.autoplaying;
        a === "paused"
          ? i.setState({ autoplaying: "paused" })
          : a === "focused"
          ? (l === "hovered" || l === "playing") &&
            i.setState({ autoplaying: "focused" })
          : l === "playing" && i.setState({ autoplaying: "hovered" });
      }),
      he(fe(i), "onDotsOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      he(fe(i), "onDotsLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      he(fe(i), "onTrackOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      he(fe(i), "onTrackLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      he(fe(i), "onSlideFocus", function () {
        return i.props.autoplay && i.pause("focused");
      }),
      he(fe(i), "onSlideBlur", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "focused" &&
          i.autoPlay("blur")
        );
      }),
      he(fe(i), "render", function () {
        var a = (0, aS.default)("slick-slider", i.props.className, {
            "slick-vertical": i.props.vertical,
            "slick-initialized": !0,
          }),
          l = te(te({}, i.props), i.state),
          s = (0, Ae.extractObject)(l, [
            "fade",
            "cssEase",
            "speed",
            "infinite",
            "centerMode",
            "focusOnSelect",
            "currentSlide",
            "lazyLoad",
            "lazyLoadedList",
            "rtl",
            "slideWidth",
            "slideHeight",
            "listHeight",
            "vertical",
            "slidesToShow",
            "slidesToScroll",
            "slideCount",
            "trackStyle",
            "variableWidth",
            "unslick",
            "centerPadding",
            "targetSlide",
            "useCSS",
          ]),
          u = i.props.pauseOnHover;
        s = te(
          te({}, s),
          {},
          {
            onMouseEnter: u ? i.onTrackOver : null,
            onMouseLeave: u ? i.onTrackLeave : null,
            onMouseOver: u ? i.onTrackOver : null,
            focusOnSelect:
              i.props.focusOnSelect && i.clickable ? i.selectHandler : null,
          }
        );
        var d;
        if (i.props.dots === !0 && i.state.slideCount >= i.props.slidesToShow) {
          var f = (0, Ae.extractObject)(l, [
              "dotsClass",
              "slideCount",
              "slidesToShow",
              "currentSlide",
              "slidesToScroll",
              "clickHandler",
              "children",
              "customPaging",
              "infinite",
              "appendDots",
            ]),
            p = i.props.pauseOnDotsHover;
          (f = te(
            te({}, f),
            {},
            {
              clickHandler: i.changeSlide,
              onMouseEnter: p ? i.onDotsLeave : null,
              onMouseOver: p ? i.onDotsOver : null,
              onMouseLeave: p ? i.onDotsLeave : null,
            }
          )),
            (d = gt.default.createElement(sS.Dots, f));
        }
        var g,
          y,
          w = (0, Ae.extractObject)(l, [
            "infinite",
            "centerMode",
            "currentSlide",
            "slideCount",
            "slidesToShow",
            "prevArrow",
            "nextArrow",
          ]);
        (w.clickHandler = i.changeSlide),
          i.props.arrows &&
            ((g = gt.default.createElement(Gf.PrevArrow, w)),
            (y = gt.default.createElement(Gf.NextArrow, w)));
        var E = null;
        i.props.vertical && (E = { height: i.state.listHeight });
        var v = null;
        i.props.vertical === !1
          ? i.props.centerMode === !0 &&
            (v = { padding: "0px " + i.props.centerPadding })
          : i.props.centerMode === !0 &&
            (v = { padding: i.props.centerPadding + " 0px" });
        var h = te(te({}, E), v),
          m = i.props.touchMove,
          C = {
            className: "slick-list",
            style: h,
            onClick: i.clickHandler,
            onMouseDown: m ? i.swipeStart : null,
            onMouseMove: i.state.dragging && m ? i.swipeMove : null,
            onMouseUp: m ? i.swipeEnd : null,
            onMouseLeave: i.state.dragging && m ? i.swipeEnd : null,
            onTouchStart: m ? i.swipeStart : null,
            onTouchMove: i.state.dragging && m ? i.swipeMove : null,
            onTouchEnd: m ? i.touchEnd : null,
            onTouchCancel: i.state.dragging && m ? i.swipeEnd : null,
            onKeyDown: i.props.accessibility ? i.keyHandler : null,
          },
          O = { className: a, dir: "ltr", style: i.props.style };
        return (
          i.props.unslick &&
            ((C = { className: "slick-list" }), (O = { className: a })),
          gt.default.createElement(
            "div",
            O,
            i.props.unslick ? "" : g,
            gt.default.createElement(
              "div",
              fl({ ref: i.listRefHandler }, C),
              gt.default.createElement(
                lS.Track,
                fl({ ref: i.trackRefHandler }, s),
                i.props.children
              )
            ),
            i.props.unslick ? "" : y,
            i.props.unslick ? "" : d
          )
        );
      }),
      (i.list = null),
      (i.track = null),
      (i.state = te(
        te({}, iS.default),
        {},
        {
          currentSlide: i.props.initialSlide,
          targetSlide: i.props.initialSlide ? i.props.initialSlide : 0,
          slideCount: gt.default.Children.count(i.props.children),
        }
      )),
      (i.callbackTimers = []),
      (i.clickable = !0),
      (i.debouncedResize = null);
    var o = i.ssrInit();
    return (i.state = te(te({}, i.state), o)), i;
  }
  return (
    pS(n, [
      {
        key: "didPropsChange",
        value: function (i) {
          for (
            var o = !1, a = 0, l = Object.keys(this.props);
            a < l.length;
            a++
          ) {
            var s = l[a];
            if (!i.hasOwnProperty(s)) {
              o = !0;
              break;
            }
            if (
              !(
                Dr(i[s]) === "object" ||
                typeof i[s] == "function" ||
                isNaN(i[s])
              ) &&
              i[s] !== this.props[s]
            ) {
              o = !0;
              break;
            }
          }
          return (
            o ||
            gt.default.Children.count(this.props.children) !==
              gt.default.Children.count(i.children)
          );
        },
      },
    ]),
    n
  );
})(gt.default.Component);
var wS = function (e) {
    return e
      .replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      })
      .toLowerCase();
  },
  xS = wS,
  SS = xS,
  bS = function (e) {
    var t = /[height|width]$/;
    return t.test(e);
  },
  Jf = function (e) {
    var t = "",
      n = Object.keys(e);
    return (
      n.forEach(function (r, i) {
        var o = e[r];
        (r = SS(r)),
          bS(r) && typeof o == "number" && (o = o + "px"),
          o === !0
            ? (t += r)
            : o === !1
            ? (t += "not " + r)
            : (t += "(" + r + ": " + o + ")"),
          i < n.length - 1 && (t += " and ");
      }),
      t
    );
  },
  ES = function (e) {
    var t = "";
    return typeof e == "string"
      ? e
      : e instanceof Array
      ? (e.forEach(function (n, r) {
          (t += Jf(n)), r < e.length - 1 && (t += ", ");
        }),
        t)
      : Jf(e);
  },
  CS = ES,
  bs,
  Zf;
function _S() {
  if (Zf) return bs;
  Zf = 1;
  function e(t) {
    (this.options = t), !t.deferSetup && this.setup();
  }
  return (
    (e.prototype = {
      constructor: e,
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0);
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match();
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (t) {
        return this.options === t || this.options.match === t;
      },
    }),
    (bs = e),
    bs
  );
}
var Es, eh;
function Dv() {
  if (eh) return Es;
  eh = 1;
  function e(r, i) {
    var o = 0,
      a = r.length,
      l;
    for (o; o < a && ((l = i(r[o], o)), l !== !1); o++);
  }
  function t(r) {
    return Object.prototype.toString.apply(r) === "[object Array]";
  }
  function n(r) {
    return typeof r == "function";
  }
  return (Es = { isFunction: n, isArray: t, each: e }), Es;
}
var Cs, th;
function kS() {
  if (th) return Cs;
  th = 1;
  var e = _S(),
    t = Dv().each;
  function n(r, i) {
    (this.query = r),
      (this.isUnconditional = i),
      (this.handlers = []),
      (this.mql = window.matchMedia(r));
    var o = this;
    (this.listener = function (a) {
      (o.mql = a.currentTarget || a), o.assess();
    }),
      this.mql.addListener(this.listener);
  }
  return (
    (n.prototype = {
      constuctor: n,
      addHandler: function (r) {
        var i = new e(r);
        this.handlers.push(i), this.matches() && i.on();
      },
      removeHandler: function (r) {
        var i = this.handlers;
        t(i, function (o, a) {
          if (o.equals(r)) return o.destroy(), !i.splice(a, 1);
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        t(this.handlers, function (r) {
          r.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0);
      },
      assess: function () {
        var r = this.matches() ? "on" : "off";
        t(this.handlers, function (i) {
          i[r]();
        });
      },
    }),
    (Cs = n),
    Cs
  );
}
var _s, nh;
function OS() {
  if (nh) return _s;
  nh = 1;
  var e = kS(),
    t = Dv(),
    n = t.each,
    r = t.isFunction,
    i = t.isArray;
  function o() {
    if (!window.matchMedia)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill"
      );
    (this.queries = {}),
      (this.browserIsIncapable = !window.matchMedia("only all").matches);
  }
  return (
    (o.prototype = {
      constructor: o,
      register: function (a, l, s) {
        var u = this.queries,
          d = s && this.browserIsIncapable;
        return (
          u[a] || (u[a] = new e(a, d)),
          r(l) && (l = { match: l }),
          i(l) || (l = [l]),
          n(l, function (f) {
            r(f) && (f = { match: f }), u[a].addHandler(f);
          }),
          this
        );
      },
      unregister: function (a, l) {
        var s = this.queries[a];
        return (
          s && (l ? s.removeHandler(l) : (s.clear(), delete this.queries[a])),
          this
        );
      },
    }),
    (_s = o),
    _s
  );
}
var ks, rh;
function PS() {
  if (rh) return ks;
  rh = 1;
  var e = OS();
  return (ks = new e()), ks;
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = a(N),
    n = Ml,
    r = a(CS),
    i = a(Zc),
    o = W;
  function a(j) {
    return j && j.__esModule ? j : { default: j };
  }
  function l(j) {
    "@babel/helpers - typeof";
    return (
      (l =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (_) {
              return typeof _;
            }
          : function (_) {
              return _ &&
                typeof Symbol == "function" &&
                _.constructor === Symbol &&
                _ !== Symbol.prototype
                ? "symbol"
                : typeof _;
            }),
      l(j)
    );
  }
  function s() {
    return (
      (s = Object.assign
        ? Object.assign.bind()
        : function (j) {
            for (var _ = 1; _ < arguments.length; _++) {
              var D = arguments[_];
              for (var U in D)
                Object.prototype.hasOwnProperty.call(D, U) && (j[U] = D[U]);
            }
            return j;
          }),
      s.apply(this, arguments)
    );
  }
  function u(j, _) {
    var D = Object.keys(j);
    if (Object.getOwnPropertySymbols) {
      var U = Object.getOwnPropertySymbols(j);
      _ &&
        (U = U.filter(function ($) {
          return Object.getOwnPropertyDescriptor(j, $).enumerable;
        })),
        D.push.apply(D, U);
    }
    return D;
  }
  function d(j) {
    for (var _ = 1; _ < arguments.length; _++) {
      var D = arguments[_] != null ? arguments[_] : {};
      _ % 2
        ? u(Object(D), !0).forEach(function (U) {
            O(j, U, D[U]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(D))
        : u(Object(D)).forEach(function (U) {
            Object.defineProperty(j, U, Object.getOwnPropertyDescriptor(D, U));
          });
    }
    return j;
  }
  function f(j, _) {
    if (!(j instanceof _))
      throw new TypeError("Cannot call a class as a function");
  }
  function p(j, _) {
    for (var D = 0; D < _.length; D++) {
      var U = _[D];
      (U.enumerable = U.enumerable || !1),
        (U.configurable = !0),
        "value" in U && (U.writable = !0),
        Object.defineProperty(j, P(U.key), U);
    }
  }
  function g(j, _, D) {
    return (
      _ && p(j.prototype, _),
      Object.defineProperty(j, "prototype", { writable: !1 }),
      j
    );
  }
  function y(j, _) {
    if (typeof _ != "function" && _ !== null)
      throw new TypeError("Super expression must either be null or a function");
    (j.prototype = Object.create(_ && _.prototype, {
      constructor: { value: j, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(j, "prototype", { writable: !1 }),
      _ && w(j, _);
  }
  function w(j, _) {
    return (
      (w = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (U, $) {
            return (U.__proto__ = $), U;
          }),
      w(j, _)
    );
  }
  function E(j) {
    var _ = m();
    return function () {
      var U = C(j),
        $;
      if (_) {
        var M = C(this).constructor;
        $ = Reflect.construct(U, arguments, M);
      } else $ = U.apply(this, arguments);
      return v(this, $);
    };
  }
  function v(j, _) {
    if (_ && (l(_) === "object" || typeof _ == "function")) return _;
    if (_ !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return h(j);
  }
  function h(j) {
    if (j === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return j;
  }
  function m() {
    try {
      var j = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
    } catch {}
    return (m = function () {
      return !!j;
    })();
  }
  function C(j) {
    return (
      (C = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (D) {
            return D.__proto__ || Object.getPrototypeOf(D);
          }),
      C(j)
    );
  }
  function O(j, _, D) {
    return (
      (_ = P(_)),
      _ in j
        ? Object.defineProperty(j, _, {
            value: D,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (j[_] = D),
      j
    );
  }
  function P(j) {
    var _ = x(j, "string");
    return l(_) == "symbol" ? _ : String(_);
  }
  function x(j, _) {
    if (l(j) != "object" || !j) return j;
    var D = j[Symbol.toPrimitive];
    if (D !== void 0) {
      var U = D.call(j, _ || "default");
      if (l(U) != "object") return U;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (_ === "string" ? String : Number)(j);
  }
  var L = (0, o.canUseDOM)() && PS();
  e.default = (function (j) {
    y(D, j);
    var _ = E(D);
    function D(U) {
      var $;
      return (
        f(this, D),
        ($ = _.call(this, U)),
        O(h($), "innerSliderRefHandler", function (M) {
          return ($.innerSlider = M);
        }),
        O(h($), "slickPrev", function () {
          return $.innerSlider.slickPrev();
        }),
        O(h($), "slickNext", function () {
          return $.innerSlider.slickNext();
        }),
        O(h($), "slickGoTo", function (M) {
          var H =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return $.innerSlider.slickGoTo(M, H);
        }),
        O(h($), "slickPause", function () {
          return $.innerSlider.pause("paused");
        }),
        O(h($), "slickPlay", function () {
          return $.innerSlider.autoPlay("play");
        }),
        ($.state = { breakpoint: null }),
        ($._responsiveMediaHandlers = []),
        $
      );
    }
    return (
      g(D, [
        {
          key: "media",
          value: function ($, M) {
            L.register($, M),
              this._responsiveMediaHandlers.push({ query: $, handler: M });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var $ = this;
            if (this.props.responsive) {
              var M = this.props.responsive.map(function (Z) {
                return Z.breakpoint;
              });
              M.sort(function (Z, we) {
                return Z - we;
              }),
                M.forEach(function (Z, we) {
                  var T;
                  we === 0
                    ? (T = (0, r.default)({ minWidth: 0, maxWidth: Z }))
                    : (T = (0, r.default)({
                        minWidth: M[we - 1] + 1,
                        maxWidth: Z,
                      })),
                    (0, o.canUseDOM)() &&
                      $.media(T, function () {
                        $.setState({ breakpoint: Z });
                      });
                });
              var H = (0, r.default)({ minWidth: M.slice(-1)[0] });
              (0, o.canUseDOM)() &&
                this.media(H, function () {
                  $.setState({ breakpoint: null });
                });
            }
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this._responsiveMediaHandlers.forEach(function ($) {
              L.unregister($.query, $.handler);
            });
          },
        },
        {
          key: "render",
          value: function () {
            var $ = this,
              M,
              H;
            this.state.breakpoint
              ? ((H = this.props.responsive.filter(function (ye) {
                  return ye.breakpoint === $.state.breakpoint;
                })),
                (M =
                  H[0].settings === "unslick"
                    ? "unslick"
                    : d(d(d({}, i.default), this.props), H[0].settings)))
              : (M = d(d({}, i.default), this.props)),
              M.centerMode && (M.slidesToScroll > 1, (M.slidesToScroll = 1)),
              M.fade &&
                (M.slidesToShow > 1,
                M.slidesToScroll > 1,
                (M.slidesToShow = 1),
                (M.slidesToScroll = 1));
            var Z = t.default.Children.toArray(this.props.children);
            (Z = Z.filter(function (ye) {
              return typeof ye == "string" ? !!ye.trim() : !!ye;
            })),
              M.variableWidth &&
                (M.rows > 1 || M.slidesPerRow > 1) &&
                (console.warn(
                  "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
                ),
                (M.variableWidth = !1));
            for (
              var we = [], T = null, B = 0;
              B < Z.length;
              B += M.rows * M.slidesPerRow
            ) {
              for (
                var Q = [], Y = B;
                Y < B + M.rows * M.slidesPerRow;
                Y += M.slidesPerRow
              ) {
                for (
                  var V = [], se = Y;
                  se < Y + M.slidesPerRow &&
                  (M.variableWidth &&
                    Z[se].props.style &&
                    (T = Z[se].props.style.width),
                  !(se >= Z.length));
                  se += 1
                )
                  V.push(
                    t.default.cloneElement(Z[se], {
                      key: 100 * B + 10 * Y + se,
                      tabIndex: -1,
                      style: {
                        width: "".concat(100 / M.slidesPerRow, "%"),
                        display: "inline-block",
                      },
                    })
                  );
                Q.push(t.default.createElement("div", { key: 10 * B + Y }, V));
              }
              M.variableWidth
                ? we.push(
                    t.default.createElement(
                      "div",
                      { key: B, style: { width: T } },
                      Q
                    )
                  )
                : we.push(t.default.createElement("div", { key: B }, Q));
            }
            if (M === "unslick") {
              var re = "regular slider " + (this.props.className || "");
              return t.default.createElement("div", { className: re }, Z);
            } else
              we.length <= M.slidesToShow && !M.infinite && (M.unslick = !0);
            return t.default.createElement(
              n.InnerSlider,
              s(
                { style: this.props.style, ref: this.innerSliderRefHandler },
                (0, o.filterSettings)(M)
              ),
              we
            );
          },
        },
      ]),
      D
    );
  })(t.default.Component);
})(nv);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(nv);
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.default = t.default;
})(tv);
const jS = pl(tv),
  Cn = "https://talgtna-backend.onrender.com/api",
  Fl = "https://talgtna-backend.onrender.com/";
function Iv({ offers: e }) {
  const [t, n] = N.useState(window.innerWidth);
  window.addEventListener("resize", () => {
    n(window.innerWidth);
  });
  const r = {
    dots: !0,
    infinite: !0,
    speed: 500,
    slidesToShow: t > 1023 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 4e3,
    cssEase: "linear",
    arrows: !1,
  };
  return c.jsx("div", {
    className: "w-[95%] mx-auto my-6",
    children: c.jsx(jS, {
      ...r,
      children: e.map((i) =>
        c.jsx(
          xt,
          {
            to: i.product ? `/product/${i.product}` : `/company/${i.company}`,
            className: "w-full h-44 sm:h-56 md:h-72 pl-1 pr-1",
            children: c.jsx("img", {
              src: Fl + i.image,
              alt: i.product ? "" : `${i.company}`,
              className: "w-full h-full object-fit rounded shadow-md",
            }),
          },
          i.id
        )
      ),
    }),
  });
}
function zv(e) {
  return c.jsx(
    xt,
    {
      to: `/category/${e.name}`,
      className: "bg-primary text-white px-3 py-3 rounded-md",
      children: c.jsx("p", {
        className: "whitespace-nowrap",
        children: e.name,
      }),
    },
    e.id
  );
}
var NS = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const ih = (e) => {
    let t;
    const n = new Set(),
      r = (d, f) => {
        const p = typeof d == "function" ? d(t) : d;
        if (!Object.is(p, t)) {
          const g = t;
          (t =
            f ?? (typeof p != "object" || p === null)
              ? p
              : Object.assign({}, t, p)),
            n.forEach((y) => y(t, g));
        }
      },
      i = () => t,
      s = {
        setState: r,
        getState: i,
        getInitialState: () => u,
        subscribe: (d) => (n.add(d), () => n.delete(d)),
        destroy: () => {
          (NS ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
            ),
            n.clear();
        },
      },
      u = (t = e(r, i, s));
    return s;
  },
  TS = (e) => (e ? ih(e) : ih);
var Av = { exports: {} },
  Fv = {},
  Uv = { exports: {} },
  $v = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ei = N;
function RS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var LS = typeof Object.is == "function" ? Object.is : RS,
  MS = Ei.useState,
  DS = Ei.useEffect,
  IS = Ei.useLayoutEffect,
  zS = Ei.useDebugValue;
function AS(e, t) {
  var n = t(),
    r = MS({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    IS(
      function () {
        (i.value = n), (i.getSnapshot = t), Os(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    DS(
      function () {
        return (
          Os(i) && o({ inst: i }),
          e(function () {
            Os(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    zS(n),
    n
  );
}
function Os(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !LS(e, n);
  } catch {
    return !0;
  }
}
function FS(e, t) {
  return t();
}
var US =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? FS
    : AS;
$v.useSyncExternalStore =
  Ei.useSyncExternalStore !== void 0 ? Ei.useSyncExternalStore : US;
Uv.exports = $v;
var $S = Uv.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ul = N,
  HS = $S;
function BS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var QS = typeof Object.is == "function" ? Object.is : BS,
  WS = HS.useSyncExternalStore,
  qS = Ul.useRef,
  VS = Ul.useEffect,
  KS = Ul.useMemo,
  YS = Ul.useDebugValue;
Fv.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = qS(null);
  if (o.current === null) {
    var a = { hasValue: !1, value: null };
    o.current = a;
  } else a = o.current;
  o = KS(
    function () {
      function s(g) {
        if (!u) {
          if (((u = !0), (d = g), (g = r(g)), i !== void 0 && a.hasValue)) {
            var y = a.value;
            if (i(y, g)) return (f = y);
          }
          return (f = g);
        }
        if (((y = f), QS(d, g))) return y;
        var w = r(g);
        return i !== void 0 && i(y, w) ? y : ((d = g), (f = w));
      }
      var u = !1,
        d,
        f,
        p = n === void 0 ? null : n;
      return [
        function () {
          return s(t());
        },
        p === null
          ? void 0
          : function () {
              return s(p());
            },
      ];
    },
    [t, n, r, i]
  );
  var l = WS(e, o[0], o[1]);
  return (
    VS(
      function () {
        (a.hasValue = !0), (a.value = l);
      },
      [l]
    ),
    YS(l),
    l
  );
};
Av.exports = Fv;
var GS = Av.exports;
const XS = pl(GS);
var Hv = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: JS } = I,
  { useSyncExternalStoreWithSelector: ZS } = XS;
let oh = !1;
const eb = (e) => e;
function tb(e, t = eb, n) {
  (Hv ? "production" : void 0) !== "production" &&
    n &&
    !oh &&
    (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    ),
    (oh = !0));
  const r = ZS(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return JS(r), r;
}
const ah = (e) => {
    (Hv ? "production" : void 0) !== "production" &&
      typeof e != "function" &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    const t = typeof e == "function" ? TS(e) : e,
      n = (r, i) => tb(t, r, i);
    return Object.assign(n, t), n;
  },
  Bv = (e) => (e ? ah(e) : ah),
  Ie = Bv((e) => ({
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    discount: {},
    setCart: () => {
      e((t) =>
        localStorage.getItem("cart")
          ? { cart: t.cart }
          : ((t.cart = []),
            localStorage.setItem("cart", JSON.stringify(t.cart)),
            { cart: t.cart })
      );
    },
    setDiscount: (t, n) => {
      e(
        (r) => ((r.discount = { code: t, value: n }), { discount: r.discount })
      );
    },
    addToCart: (t) => {
      e((n) => {
        if (!n.cart.find((i) => i.id === t.id)) {
          const i = [...n.cart, { ...t }];
          return localStorage.setItem("cart", JSON.stringify(i)), { cart: i };
        }
        return { cart: n.cart };
      });
    },
    incrementQuantity: (t) => {
      e((n) => {
        if (n.cart.find((i) => i.id === t)) {
          const i = n.cart.map((o) =>
            o.id === t && o.quantity < 20
              ? { ...o, quantity: o.quantity + 1 }
              : o
          );
          return localStorage.setItem("cart", JSON.stringify(i)), { cart: i };
        }
        return { cart: n.cart };
      });
    },
    decrementQuantity: (t) => {
      e((n) => {
        if (n.cart.find((i) => i.id === t)) {
          const i = n.cart.map((o) =>
            o.id === t && o.quantity > 1
              ? { ...o, quantity: o.quantity - 1 }
              : o
          );
          return localStorage.setItem("cart", JSON.stringify(i)), { cart: i };
        }
        return { cart: n.cart };
      });
    },
    removeFromCart: (t) => {
      e((n) => {
        const r = n.cart.filter((i) => i.id !== t);
        return localStorage.setItem("cart", JSON.stringify(r)), { cart: r };
      });
    },
    getTotalQuantity: () =>
      Ie.getState().cart.reduce((r, i) => r + i.quantity, 0),
    clearCart: () => {
      e(() => (localStorage.setItem("cart", JSON.stringify([])), { cart: [] }));
    },
  })),
  Mt = Bv((e) => ({
    isAuthenticated: !1,
    token: "",
    isLogedIn: () => {
      e((t) => {
        const n = localStorage.getItem("token");
        return n && ((t.isAuthenticated = !0), (t.token = n)), t;
      });
    },
    login: (t) => {
      e(
        (n) => (
          localStorage.setItem("token", t),
          (n.isAuthenticated = !0),
          (n.token = t),
          n
        )
      );
    },
    logout: () => {
      e(
        (t) => (
          localStorage.removeItem("token"),
          (t.isAuthenticated = !1),
          (t.token = ""),
          t
        )
      );
    },
  }));
var {
    entries: Qv,
    setPrototypeOf: lh,
    isFrozen: nb,
    getPrototypeOf: rb,
    getOwnPropertyDescriptor: ib,
  } = Object,
  { freeze: bt, seal: Zt, create: Wv } = Object,
  { apply: Qu, construct: Wu } = typeof Reflect < "u" && Reflect;
bt ||
  (bt = function (e) {
    return e;
  });
Zt ||
  (Zt = function (e) {
    return e;
  });
Qu ||
  (Qu = function (e, t, n) {
    return e.apply(t, n);
  });
Wu ||
  (Wu = function (e, t) {
    return new e(...t);
  });
var ia = $t(Array.prototype.forEach),
  sh = $t(Array.prototype.pop),
  Wi = $t(Array.prototype.push),
  Ca = $t(String.prototype.toLowerCase),
  Ps = $t(String.prototype.toString),
  uh = $t(String.prototype.match),
  qi = $t(String.prototype.replace),
  ob = $t(String.prototype.indexOf),
  ab = $t(String.prototype.trim),
  sn = $t(Object.prototype.hasOwnProperty),
  It = $t(RegExp.prototype.test),
  Vi = lb(TypeError);
function $t(e) {
  return function (t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i];
    return Qu(e, t, r);
  };
}
function lb(e) {
  return function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Wu(e, n);
  };
}
function de(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ca;
  lh && lh(e, null);
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      let o = n(i);
      o !== i && (nb(t) || (t[r] = o), (i = o));
    }
    e[i] = !0;
  }
  return e;
}
function sb(e) {
  for (let t = 0; t < e.length; t++) sn(e, t) || (e[t] = null);
  return e;
}
function xr(e) {
  let t = Wv(null);
  for (let [n, r] of Qv(e))
    sn(e, n) &&
      (Array.isArray(r)
        ? (t[n] = sb(r))
        : r && typeof r == "object" && r.constructor === Object
        ? (t[n] = xr(r))
        : (t[n] = r));
  return t;
}
function oa(e, t) {
  for (; e !== null; ) {
    let r = ib(e, t);
    if (r) {
      if (r.get) return $t(r.get);
      if (typeof r.value == "function") return $t(r.value);
    }
    e = rb(e);
  }
  function n() {
    return null;
  }
  return n;
}
var ch = bt([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
  ]),
  js = bt([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern",
  ]),
  Ns = bt([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
  ]),
  ub = bt([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use",
  ]),
  Ts = bt([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts",
  ]),
  cb = bt([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none",
  ]),
  dh = bt(["#text"]),
  fh = bt([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "pattern",
    "placeholder",
    "playsinline",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "xmlns",
    "slot",
  ]),
  Rs = bt([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan",
  ]),
  hh = bt([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnsalign",
    "columnlines",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lspace",
    "lquote",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns",
  ]),
  aa = bt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  db = Zt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  fb = Zt(/<%[\w\W]*|[\w\W]*%>/gm),
  hb = Zt(/\${[\w\W]*}/gm),
  pb = Zt(/^data-[\-\w.\u00B7-\uFFFF]/),
  mb = Zt(/^aria-[\-\w]+$/),
  qv = Zt(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  ),
  vb = Zt(/^(?:\w+script|data):/i),
  yb = Zt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  Vv = Zt(/^html$/i),
  gb = Zt(/^[a-z][a-z\d]*(-[a-z\d]+)+$/i),
  ph = Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: db,
    ERB_EXPR: fb,
    TMPLIT_EXPR: hb,
    DATA_ATTR: pb,
    ARIA_ATTR: mb,
    IS_ALLOWED_URI: qv,
    IS_SCRIPT_OR_DATA: vb,
    ATTR_WHITESPACE: yb,
    DOCTYPE_NAME: Vv,
    CUSTOM_ELEMENT: gb,
  }),
  wb = function () {
    return typeof window > "u" ? null : window;
  },
  xb = function (e, t) {
    if (typeof e != "object" || typeof e.createPolicy != "function")
      return null;
    let n = null,
      r = "data-tt-policy-suffix";
    t && t.hasAttribute(r) && (n = t.getAttribute(r));
    let i = "dompurify" + (n ? "#" + n : "");
    try {
      return e.createPolicy(i, {
        createHTML(o) {
          return o;
        },
        createScriptURL(o) {
          return o;
        },
      });
    } catch {
      return (
        console.warn("TrustedTypes policy " + i + " could not be created."),
        null
      );
    }
  };
function Kv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wb(),
    t = (S) => Kv(S);
  if (
    ((t.version = "3.0.10"),
    (t.removed = []),
    !e || !e.document || e.document.nodeType !== 9)
  )
    return (t.isSupported = !1), t;
  let { document: n } = e,
    r = n,
    i = r.currentScript,
    {
      DocumentFragment: o,
      HTMLTemplateElement: a,
      Node: l,
      Element: s,
      NodeFilter: u,
      NamedNodeMap: d = e.NamedNodeMap || e.MozNamedAttrMap,
      HTMLFormElement: f,
      DOMParser: p,
      trustedTypes: g,
    } = e,
    y = s.prototype,
    w = oa(y, "cloneNode"),
    E = oa(y, "nextSibling"),
    v = oa(y, "childNodes"),
    h = oa(y, "parentNode");
  if (typeof a == "function") {
    let S = n.createElement("template");
    S.content && S.content.ownerDocument && (n = S.content.ownerDocument);
  }
  let m,
    C = "",
    {
      implementation: O,
      createNodeIterator: P,
      createDocumentFragment: x,
      getElementsByTagName: L,
    } = n,
    { importNode: j } = r,
    _ = {};
  t.isSupported =
    typeof Qv == "function" &&
    typeof h == "function" &&
    O &&
    O.createHTMLDocument !== void 0;
  let {
      MUSTACHE_EXPR: D,
      ERB_EXPR: U,
      TMPLIT_EXPR: $,
      DATA_ATTR: M,
      ARIA_ATTR: H,
      IS_SCRIPT_OR_DATA: Z,
      ATTR_WHITESPACE: we,
      CUSTOM_ELEMENT: T,
    } = ph,
    { IS_ALLOWED_URI: B } = ph,
    Q = null,
    Y = de({}, [...ch, ...js, ...Ns, ...Ts, ...dh]),
    V = null,
    se = de({}, [...fh, ...Rs, ...hh, ...aa]),
    re = Object.seal(
      Wv(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1,
        },
      })
    ),
    ye = null,
    ue = null,
    Je = !0,
    _t = !0,
    _n = !1,
    en = !0,
    tn = !1,
    Ee = !1,
    nn = !1,
    $n = !1,
    We = !1,
    Ze = !1,
    Hn = !1,
    Ur = !0,
    kn = !1,
    Ni = "user-content-",
    Bn = !0,
    vt = !1,
    et = {},
    Qt = null,
    Dt = de({}, [
      "annotation-xml",
      "audio",
      "colgroup",
      "desc",
      "foreignobject",
      "head",
      "iframe",
      "math",
      "mi",
      "mn",
      "mo",
      "ms",
      "mtext",
      "noembed",
      "noframes",
      "noscript",
      "plaintext",
      "script",
      "style",
      "svg",
      "template",
      "thead",
      "title",
      "video",
      "xmp",
    ]),
    kt = null,
    yn = de({}, ["audio", "video", "img", "source", "image", "track"]),
    On = null,
    gn = de({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns",
    ]),
    Qn = "http://www.w3.org/1998/Math/MathML",
    at = "http://www.w3.org/2000/svg",
    qe = "http://www.w3.org/1999/xhtml",
    rn = qe,
    Pn = !1,
    ne = null,
    Te = de({}, [Qn, at, qe], Ps),
    Se = null,
    yt = ["application/xhtml+xml", "text/html"],
    dt = "text/html",
    Oe = null,
    on = null,
    $l = n.createElement("form"),
    Ti = function (S) {
      return S instanceof RegExp || S instanceof Function;
    },
    Ri = function () {
      let S =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(on && on === S)) {
        if (
          ((!S || typeof S != "object") && (S = {}),
          (S = xr(S)),
          (Se =
            yt.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? dt : S.PARSER_MEDIA_TYPE),
          (Oe = Se === "application/xhtml+xml" ? Ps : Ca),
          (Q = sn(S, "ALLOWED_TAGS") ? de({}, S.ALLOWED_TAGS, Oe) : Y),
          (V = sn(S, "ALLOWED_ATTR") ? de({}, S.ALLOWED_ATTR, Oe) : se),
          (ne = sn(S, "ALLOWED_NAMESPACES")
            ? de({}, S.ALLOWED_NAMESPACES, Ps)
            : Te),
          (On = sn(S, "ADD_URI_SAFE_ATTR")
            ? de(xr(gn), S.ADD_URI_SAFE_ATTR, Oe)
            : gn),
          (kt = sn(S, "ADD_DATA_URI_TAGS")
            ? de(xr(yn), S.ADD_DATA_URI_TAGS, Oe)
            : yn),
          (Qt = sn(S, "FORBID_CONTENTS") ? de({}, S.FORBID_CONTENTS, Oe) : Dt),
          (ye = sn(S, "FORBID_TAGS") ? de({}, S.FORBID_TAGS, Oe) : {}),
          (ue = sn(S, "FORBID_ATTR") ? de({}, S.FORBID_ATTR, Oe) : {}),
          (et = sn(S, "USE_PROFILES") ? S.USE_PROFILES : !1),
          (Je = S.ALLOW_ARIA_ATTR !== !1),
          (_t = S.ALLOW_DATA_ATTR !== !1),
          (_n = S.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (en = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
          (tn = S.SAFE_FOR_TEMPLATES || !1),
          (Ee = S.WHOLE_DOCUMENT || !1),
          (We = S.RETURN_DOM || !1),
          (Ze = S.RETURN_DOM_FRAGMENT || !1),
          (Hn = S.RETURN_TRUSTED_TYPE || !1),
          ($n = S.FORCE_BODY || !1),
          (Ur = S.SANITIZE_DOM !== !1),
          (kn = S.SANITIZE_NAMED_PROPS || !1),
          (Bn = S.KEEP_CONTENT !== !1),
          (vt = S.IN_PLACE || !1),
          (B = S.ALLOWED_URI_REGEXP || qv),
          (rn = S.NAMESPACE || qe),
          (re = S.CUSTOM_ELEMENT_HANDLING || {}),
          S.CUSTOM_ELEMENT_HANDLING &&
            Ti(S.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
            (re.tagNameCheck = S.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          S.CUSTOM_ELEMENT_HANDLING &&
            Ti(S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
            (re.attributeNameCheck =
              S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          S.CUSTOM_ELEMENT_HANDLING &&
            typeof S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ==
              "boolean" &&
            (re.allowCustomizedBuiltInElements =
              S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          tn && (_t = !1),
          Ze && (We = !0),
          et &&
            ((Q = de({}, dh)),
            (V = []),
            et.html === !0 && (de(Q, ch), de(V, fh)),
            et.svg === !0 && (de(Q, js), de(V, Rs), de(V, aa)),
            et.svgFilters === !0 && (de(Q, Ns), de(V, Rs), de(V, aa)),
            et.mathMl === !0 && (de(Q, Ts), de(V, hh), de(V, aa))),
          S.ADD_TAGS && (Q === Y && (Q = xr(Q)), de(Q, S.ADD_TAGS, Oe)),
          S.ADD_ATTR && (V === se && (V = xr(V)), de(V, S.ADD_ATTR, Oe)),
          S.ADD_URI_SAFE_ATTR && de(On, S.ADD_URI_SAFE_ATTR, Oe),
          S.FORBID_CONTENTS &&
            (Qt === Dt && (Qt = xr(Qt)), de(Qt, S.FORBID_CONTENTS, Oe)),
          Bn && (Q["#text"] = !0),
          Ee && de(Q, ["html", "head", "body"]),
          Q.table && (de(Q, ["tbody"]), delete ye.tbody),
          S.TRUSTED_TYPES_POLICY)
        ) {
          if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw Vi(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
            );
          if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw Vi(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
            );
          (m = S.TRUSTED_TYPES_POLICY), (C = m.createHTML(""));
        } else
          m === void 0 && (m = xb(g, i)),
            m !== null && typeof C == "string" && (C = m.createHTML(""));
        bt && bt(S), (on = S);
      }
    },
    b = de({}, ["mi", "mo", "mn", "ms", "mtext"]),
    k = de({}, ["foreignobject", "desc", "title", "annotation-xml"]),
    R = de({}, ["title", "style", "font", "a", "script"]),
    A = de({}, [...js, ...Ns, ...ub]),
    K = de({}, [...Ts, ...cb]),
    oe = function (S) {
      let q = h(S);
      (!q || !q.tagName) && (q = { namespaceURI: rn, tagName: "template" });
      let F = Ca(S.tagName),
        ve = Ca(q.tagName);
      return ne[S.namespaceURI]
        ? S.namespaceURI === at
          ? q.namespaceURI === qe
            ? F === "svg"
            : q.namespaceURI === Qn
            ? F === "svg" && (ve === "annotation-xml" || b[ve])
            : !!A[F]
          : S.namespaceURI === Qn
          ? q.namespaceURI === qe
            ? F === "math"
            : q.namespaceURI === at
            ? F === "math" && k[ve]
            : !!K[F]
          : S.namespaceURI === qe
          ? (q.namespaceURI === at && !k[ve]) ||
            (q.namespaceURI === Qn && !b[ve])
            ? !1
            : !K[F] && (R[F] || !A[F])
          : !!(Se === "application/xhtml+xml" && ne[S.namespaceURI])
        : !1;
    },
    J = function (S) {
      Wi(t.removed, { element: S });
      try {
        S.parentNode.removeChild(S);
      } catch {
        S.remove();
      }
    },
    G = function (S, q) {
      try {
        Wi(t.removed, { attribute: q.getAttributeNode(S), from: q });
      } catch {
        Wi(t.removed, { attribute: null, from: q });
      }
      if ((q.removeAttribute(S), S === "is" && !V[S]))
        if (We || Ze)
          try {
            J(q);
          } catch {}
        else
          try {
            q.setAttribute(S, "");
          } catch {}
    },
    ae = function (S) {
      let q = null,
        F = null;
      if ($n) S = "<remove></remove>" + S;
      else {
        let _e = uh(S, /^[\r\n\t ]+/);
        F = _e && _e[0];
      }
      Se === "application/xhtml+xml" &&
        rn === qe &&
        (S =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          S +
          "</body></html>");
      let ve = m ? m.createHTML(S) : S;
      if (rn === qe)
        try {
          q = new p().parseFromString(ve, Se);
        } catch {}
      if (!q || !q.documentElement) {
        q = O.createDocument(rn, "template", null);
        try {
          q.documentElement.innerHTML = Pn ? C : ve;
        } catch {}
      }
      let Be = q.body || q.documentElement;
      return (
        S &&
          F &&
          Be.insertBefore(n.createTextNode(F), Be.childNodes[0] || null),
        rn === qe
          ? L.call(q, Ee ? "html" : "body")[0]
          : Ee
          ? q.documentElement
          : Be
      );
    },
    ie = function (S) {
      return P.call(
        S.ownerDocument || S,
        S,
        u.SHOW_ELEMENT |
          u.SHOW_COMMENT |
          u.SHOW_TEXT |
          u.SHOW_PROCESSING_INSTRUCTION,
        null
      );
    },
    tt = function (S) {
      return (
        S instanceof f &&
        (typeof S.nodeName != "string" ||
          typeof S.textContent != "string" ||
          typeof S.removeChild != "function" ||
          !(S.attributes instanceof d) ||
          typeof S.removeAttribute != "function" ||
          typeof S.setAttribute != "function" ||
          typeof S.namespaceURI != "string" ||
          typeof S.insertBefore != "function" ||
          typeof S.hasChildNodes != "function")
      );
    },
    Ye = function (S) {
      return typeof l == "function" && S instanceof l;
    },
    ee = function (S, q, F) {
      _[S] &&
        ia(_[S], (ve) => {
          ve.call(t, q, F, on);
        });
    },
    Ce = function (S) {
      let q = null;
      if ((ee("beforeSanitizeElements", S, null), tt(S))) return J(S), !0;
      let F = Oe(S.nodeName);
      if (
        (ee("uponSanitizeElement", S, { tagName: F, allowedTags: Q }),
        S.hasChildNodes() &&
          !Ye(S.firstElementChild) &&
          It(/<[/\w]/g, S.innerHTML) &&
          It(/<[/\w]/g, S.textContent))
      )
        return J(S), !0;
      if (!Q[F] || ye[F]) {
        if (
          !ye[F] &&
          Wn(F) &&
          ((re.tagNameCheck instanceof RegExp && It(re.tagNameCheck, F)) ||
            (re.tagNameCheck instanceof Function && re.tagNameCheck(F)))
        )
          return !1;
        if (Bn && !Qt[F]) {
          let ve = h(S) || S.parentNode,
            Be = v(S) || S.childNodes;
          if (Be && ve) {
            let _e = Be.length;
            for (let le = _e - 1; le >= 0; --le)
              ve.insertBefore(w(Be[le], !0), E(S));
          }
        }
        return J(S), !0;
      }
      return (S instanceof s && !oe(S)) ||
        ((F === "noscript" || F === "noembed" || F === "noframes") &&
          It(/<\/no(script|embed|frames)/i, S.innerHTML))
        ? (J(S), !0)
        : (tn &&
            S.nodeType === 3 &&
            ((q = S.textContent),
            ia([D, U, $], (ve) => {
              q = qi(q, ve, " ");
            }),
            S.textContent !== q &&
              (Wi(t.removed, { element: S.cloneNode() }), (S.textContent = q))),
          ee("afterSanitizeElements", S, null),
          !1);
    },
    Ve = function (S, q, F) {
      if (Ur && (q === "id" || q === "name") && (F in n || F in $l)) return !1;
      if (!(_t && !ue[q] && It(M, q)) && !(Je && It(H, q))) {
        if (!V[q] || ue[q]) {
          if (
            !(
              (Wn(S) &&
                ((re.tagNameCheck instanceof RegExp &&
                  It(re.tagNameCheck, S)) ||
                  (re.tagNameCheck instanceof Function &&
                    re.tagNameCheck(S))) &&
                ((re.attributeNameCheck instanceof RegExp &&
                  It(re.attributeNameCheck, q)) ||
                  (re.attributeNameCheck instanceof Function &&
                    re.attributeNameCheck(q)))) ||
              (q === "is" &&
                re.allowCustomizedBuiltInElements &&
                ((re.tagNameCheck instanceof RegExp &&
                  It(re.tagNameCheck, F)) ||
                  (re.tagNameCheck instanceof Function && re.tagNameCheck(F))))
            )
          )
            return !1;
        } else if (
          !On[q] &&
          !It(B, qi(F, we, "")) &&
          !(
            (q === "src" || q === "xlink:href" || q === "href") &&
            S !== "script" &&
            ob(F, "data:") === 0 &&
            kt[S]
          ) &&
          !(_n && !It(Z, qi(F, we, ""))) &&
          F
        )
          return !1;
      }
      return !0;
    },
    Wn = function (S) {
      return S !== "annotation-xml" && uh(S, T);
    },
    an = function (S) {
      ee("beforeSanitizeAttributes", S, null);
      let { attributes: q } = S;
      if (!q) return;
      let F = {
          attrName: "",
          attrValue: "",
          keepAttr: !0,
          allowedAttributes: V,
        },
        ve = q.length;
      for (; ve--; ) {
        let Be = q[ve],
          { name: _e, namespaceURI: le, value: Pe } = Be,
          ze = Oe(_e),
          xe = _e === "value" ? Pe : ab(Pe);
        if (
          ((F.attrName = ze),
          (F.attrValue = xe),
          (F.keepAttr = !0),
          (F.forceKeepAttr = void 0),
          ee("uponSanitizeAttribute", S, F),
          (xe = F.attrValue),
          F.forceKeepAttr || (G(_e, S), !F.keepAttr))
        )
          continue;
        if (!en && It(/\/>/i, xe)) {
          G(_e, S);
          continue;
        }
        tn &&
          ia([D, U, $], (Li) => {
            xe = qi(xe, Li, " ");
          });
        let Vn = Oe(S.nodeName);
        if (Ve(Vn, ze, xe)) {
          if (
            (kn && (ze === "id" || ze === "name") && (G(_e, S), (xe = Ni + xe)),
            m &&
              typeof g == "object" &&
              typeof g.getAttributeType == "function" &&
              !le)
          )
            switch (g.getAttributeType(Vn, ze)) {
              case "TrustedHTML": {
                xe = m.createHTML(xe);
                break;
              }
              case "TrustedScriptURL": {
                xe = m.createScriptURL(xe);
                break;
              }
            }
          try {
            le ? S.setAttributeNS(le, _e, xe) : S.setAttribute(_e, xe),
              sh(t.removed);
          } catch {}
        }
      }
      ee("afterSanitizeAttributes", S, null);
    },
    qn = function S(q) {
      let F = null,
        ve = ie(q);
      for (ee("beforeSanitizeShadowDOM", q, null); (F = ve.nextNode()); )
        ee("uponSanitizeShadowNode", F, null),
          !Ce(F) && (F.content instanceof o && S(F.content), an(F));
      ee("afterSanitizeShadowDOM", q, null);
    };
  return (
    (t.sanitize = function (S) {
      let q =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        F = null,
        ve = null,
        Be = null,
        _e = null;
      if (((Pn = !S), Pn && (S = "<!-->"), typeof S != "string" && !Ye(S)))
        if (typeof S.toString == "function") {
          if (((S = S.toString()), typeof S != "string"))
            throw Vi("dirty is not a string, aborting");
        } else throw Vi("toString is not a function");
      if (!t.isSupported) return S;
      if (
        (nn || Ri(q), (t.removed = []), typeof S == "string" && (vt = !1), vt)
      ) {
        if (S.nodeName) {
          let ze = Oe(S.nodeName);
          if (!Q[ze] || ye[ze])
            throw Vi("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (S instanceof l)
        (F = ae("<!---->")),
          (ve = F.ownerDocument.importNode(S, !0)),
          (ve.nodeType === 1 && ve.nodeName === "BODY") ||
          ve.nodeName === "HTML"
            ? (F = ve)
            : F.appendChild(ve);
      else {
        if (!We && !tn && !Ee && S.indexOf("<") === -1)
          return m && Hn ? m.createHTML(S) : S;
        if (((F = ae(S)), !F)) return We ? null : Hn ? C : "";
      }
      F && $n && J(F.firstChild);
      let le = ie(vt ? S : F);
      for (; (Be = le.nextNode()); )
        Ce(Be) || (Be.content instanceof o && qn(Be.content), an(Be));
      if (vt) return S;
      if (We) {
        if (Ze)
          for (_e = x.call(F.ownerDocument); F.firstChild; )
            _e.appendChild(F.firstChild);
        else _e = F;
        return (
          (V.shadowroot || V.shadowrootmode) && (_e = j.call(r, _e, !0)), _e
        );
      }
      let Pe = Ee ? F.outerHTML : F.innerHTML;
      return (
        Ee &&
          Q["!doctype"] &&
          F.ownerDocument &&
          F.ownerDocument.doctype &&
          F.ownerDocument.doctype.name &&
          It(Vv, F.ownerDocument.doctype.name) &&
          (Pe =
            "<!DOCTYPE " +
            F.ownerDocument.doctype.name +
            `>
` +
            Pe),
        tn &&
          ia([D, U, $], (ze) => {
            Pe = qi(Pe, ze, " ");
          }),
        m && Hn ? m.createHTML(Pe) : Pe
      );
    }),
    (t.setConfig = function () {
      let S =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Ri(S), (nn = !0);
    }),
    (t.clearConfig = function () {
      (on = null), (nn = !1);
    }),
    (t.isValidAttribute = function (S, q, F) {
      on || Ri({});
      let ve = Oe(S),
        Be = Oe(q);
      return Ve(ve, Be, F);
    }),
    (t.addHook = function (S, q) {
      typeof q == "function" && ((_[S] = _[S] || []), Wi(_[S], q));
    }),
    (t.removeHook = function (S) {
      if (_[S]) return sh(_[S]);
    }),
    (t.removeHooks = function (S) {
      _[S] && (_[S] = []);
    }),
    (t.removeAllHooks = function () {
      _ = {};
    }),
    t
  );
}
var Sb = Kv(),
  bb = (e) => {
    switch (e) {
      case "success":
        return _b;
      case "info":
        return Ob;
      case "warning":
        return kb;
      case "error":
        return Pb;
      default:
        return null;
    }
  },
  Eb = Array(12).fill(0),
  Cb = ({ visible: e }) =>
    I.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": e },
      I.createElement(
        "div",
        { className: "sonner-spinner" },
        Eb.map((t, n) =>
          I.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  _b = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  kb = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  Ob = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  Pb = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  jb = () => {
    let [e, t] = I.useState(!1);
    return (
      I.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  qu = 1,
  Nb = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            i =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : qu++,
            o = this.toasts.find((l) => l.id === i),
            a = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            o
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === i
                    ? (this.publish({ ...l, ...e, id: i, title: n }),
                      { ...l, ...e, id: i, dismissible: a, title: n })
                    : l
                ))
              : this.addToast({ title: n, ...r, dismissible: a, id: i }),
            i
          );
        }),
        (this.dismiss = (e) => (
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            i = n !== void 0;
          return (
            r
              .then((o) => {
                if (o && typeof o.ok == "boolean" && !o.ok) {
                  i = !1;
                  let a =
                      typeof t.error == "function"
                        ? t.error(`HTTP error! status: ${o.status}`)
                        : t.error,
                    l =
                      typeof t.description == "function"
                        ? t.description(`HTTP error! status: ${o.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: a,
                    description: l,
                  });
                } else if (t.success !== void 0) {
                  i = !1;
                  let a =
                      typeof t.success == "function" ? t.success(o) : t.success,
                    l =
                      typeof t.description == "function"
                        ? t.description(o)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: a,
                    description: l,
                  });
                }
              })
              .catch((o) => {
                if (t.error !== void 0) {
                  i = !1;
                  let a = typeof t.error == "function" ? t.error(o) : t.error,
                    l =
                      typeof t.description == "function"
                        ? t.description(o)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: a,
                    description: l,
                  });
                }
              })
              .finally(() => {
                var o;
                i && (this.dismiss(n), (n = void 0)),
                  (o = t.finally) == null || o.call(t);
              }),
            n
          );
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || qu++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  un = new Nb(),
  Tb = (e, t) => {
    let n = (t == null ? void 0 : t.id) || qu++;
    return un.addToast({ title: e, ...t, id: n }), n;
  },
  Rb = Tb,
  jt = Object.assign(Rb, {
    success: un.success,
    info: un.info,
    warning: un.warning,
    error: un.error,
    custom: un.custom,
    message: un.message,
    promise: un.promise,
    dismiss: un.dismiss,
    loading: un.loading,
  });
function Lb(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
Lb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function la(e) {
  return e.label !== void 0 && typeof e.onClick == "function";
}
var Mb = 3,
  Db = "32px",
  Ib = 4e3,
  zb = 356,
  Ab = 14,
  Fb = 20,
  Ub = 200;
function $b(...e) {
  return e.filter(Boolean).join(" ");
}
var Hb = (e) => {
  var t, n, r, i, o, a, l;
  let {
      invert: s,
      toast: u,
      unstyled: d,
      interacting: f,
      setHeights: p,
      visibleToasts: g,
      heights: y,
      index: w,
      toasts: E,
      expanded: v,
      removeToast: h,
      closeButton: m,
      style: C,
      cancelButtonStyle: O,
      actionButtonStyle: P,
      className: x = "",
      descriptionClassName: L = "",
      duration: j,
      position: _,
      gap: D,
      loadingIcon: U,
      expandByDefault: $,
      classNames: M,
      icons: H,
      closeButtonAriaLabel: Z = "Close toast",
      pauseWhenPageIsHidden: we,
      cn: T,
    } = e,
    [B, Q] = I.useState(!1),
    [Y, V] = I.useState(!1),
    [se, re] = I.useState(!1),
    [ye, ue] = I.useState(!1),
    [Je, _t] = I.useState(0),
    [_n, en] = I.useState(0),
    tn = I.useRef(null),
    Ee = I.useRef(null),
    nn = w === 0,
    $n = w + 1 <= g,
    We = u.type,
    Ze = u.dismissible !== !1,
    Hn = u.className || "",
    Ur = u.descriptionClassName || "",
    kn = I.useMemo(
      () => y.findIndex((ne) => ne.toastId === u.id) || 0,
      [y, u.id]
    ),
    Ni = I.useMemo(() => {
      var ne;
      return (ne = u.closeButton) != null ? ne : m;
    }, [u.closeButton, m]),
    Bn = I.useMemo(() => u.duration || j || Ib, [u.duration, j]),
    vt = I.useRef(0),
    et = I.useRef(0),
    Qt = I.useRef(0),
    Dt = I.useRef(null),
    [kt, yn] = _.split("-"),
    On = I.useMemo(
      () => y.reduce((ne, Te, Se) => (Se >= kn ? ne : ne + Te.height), 0),
      [y, kn]
    ),
    gn = jb(),
    Qn = u.invert || s,
    at = We === "loading";
  (et.current = I.useMemo(() => kn * D + On, [kn, On])),
    I.useEffect(() => {
      Q(!0);
    }, []),
    I.useLayoutEffect(() => {
      if (!B) return;
      let ne = Ee.current,
        Te = ne.style.height;
      ne.style.height = "auto";
      let Se = ne.getBoundingClientRect().height;
      (ne.style.height = Te),
        en(Se),
        p((yt) =>
          yt.find((dt) => dt.toastId === u.id)
            ? yt.map((dt) => (dt.toastId === u.id ? { ...dt, height: Se } : dt))
            : [{ toastId: u.id, height: Se, position: u.position }, ...yt]
        );
    }, [B, u.title, u.description, p, u.id]);
  let qe = I.useCallback(() => {
    V(!0),
      _t(et.current),
      p((ne) => ne.filter((Te) => Te.toastId !== u.id)),
      setTimeout(() => {
        h(u);
      }, Ub);
  }, [u, h, p, et]);
  I.useEffect(() => {
    if (
      (u.promise && We === "loading") ||
      u.duration === 1 / 0 ||
      u.type === "loading"
    )
      return;
    let ne,
      Te = Bn;
    return (
      v || f || (we && gn)
        ? (() => {
            if (Qt.current < vt.current) {
              let Se = new Date().getTime() - vt.current;
              Te = Te - Se;
            }
            Qt.current = new Date().getTime();
          })()
        : Te !== 1 / 0 &&
          ((vt.current = new Date().getTime()),
          (ne = setTimeout(() => {
            var Se;
            (Se = u.onAutoClose) == null || Se.call(u, u), qe();
          }, Te))),
      () => clearTimeout(ne)
    );
  }, [v, f, $, u, Bn, qe, u.promise, We, we, gn]),
    I.useEffect(() => {
      let ne = Ee.current;
      if (ne) {
        let Te = ne.getBoundingClientRect().height;
        return (
          en(Te),
          p((Se) => [
            { toastId: u.id, height: Te, position: u.position },
            ...Se,
          ]),
          () => p((Se) => Se.filter((yt) => yt.toastId !== u.id))
        );
      }
    }, [p, u.id]),
    I.useEffect(() => {
      u.delete && qe();
    }, [qe, u.delete]);
  function rn() {
    return H != null && H.loading
      ? I.createElement(
          "div",
          { className: "sonner-loader", "data-visible": We === "loading" },
          H.loading
        )
      : U
      ? I.createElement(
          "div",
          { className: "sonner-loader", "data-visible": We === "loading" },
          U
        )
      : I.createElement(Cb, { visible: We === "loading" });
  }
  function Pn(ne) {
    return { __html: Sb.sanitize(ne) };
  }
  return I.createElement(
    "li",
    {
      "aria-live": u.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: Ee,
      className: T(
        x,
        Hn,
        M == null ? void 0 : M.toast,
        (t = u == null ? void 0 : u.classNames) == null ? void 0 : t.toast,
        M == null ? void 0 : M.default,
        M == null ? void 0 : M[We],
        (n = u == null ? void 0 : u.classNames) == null ? void 0 : n[We]
      ),
      "data-sonner-toast": "",
      "data-styled": !(u.jsx || u.unstyled || d),
      "data-mounted": B,
      "data-promise": !!u.promise,
      "data-removed": Y,
      "data-visible": $n,
      "data-y-position": kt,
      "data-x-position": yn,
      "data-index": w,
      "data-front": nn,
      "data-swiping": se,
      "data-dismissible": Ze,
      "data-type": We,
      "data-invert": Qn,
      "data-swipe-out": ye,
      "data-expanded": !!(v || ($ && B)),
      style: {
        "--index": w,
        "--toasts-before": w,
        "--z-index": E.length - w,
        "--offset": `${Y ? Je : et.current}px`,
        "--initial-height": $ ? "auto" : `${_n}px`,
        ...C,
        ...u.style,
      },
      onPointerDown: (ne) => {
        at ||
          !Ze ||
          ((tn.current = new Date()),
          _t(et.current),
          ne.target.setPointerCapture(ne.pointerId),
          ne.target.tagName !== "BUTTON" &&
            (re(!0), (Dt.current = { x: ne.clientX, y: ne.clientY })));
      },
      onPointerUp: () => {
        var ne, Te, Se, yt;
        if (ye || !Ze) return;
        Dt.current = null;
        let dt = Number(
            ((ne = Ee.current) == null
              ? void 0
              : ne.style
                  .getPropertyValue("--swipe-amount")
                  .replace("px", "")) || 0
          ),
          Oe =
            new Date().getTime() -
            ((Te = tn.current) == null ? void 0 : Te.getTime()),
          on = Math.abs(dt) / Oe;
        if (Math.abs(dt) >= Fb || on > 0.11) {
          _t(et.current),
            (Se = u.onDismiss) == null || Se.call(u, u),
            qe(),
            ue(!0);
          return;
        }
        (yt = Ee.current) == null ||
          yt.style.setProperty("--swipe-amount", "0px"),
          re(!1);
      },
      onPointerMove: (ne) => {
        var Te;
        if (!Dt.current || !Ze) return;
        let Se = ne.clientY - Dt.current.y,
          yt = ne.clientX - Dt.current.x,
          dt = (kt === "top" ? Math.min : Math.max)(0, Se),
          Oe = ne.pointerType === "touch" ? 10 : 2;
        Math.abs(dt) > Oe
          ? (Te = Ee.current) == null ||
            Te.style.setProperty("--swipe-amount", `${Se}px`)
          : Math.abs(yt) > Oe && (Dt.current = null);
      },
    },
    Ni && !u.jsx
      ? I.createElement(
          "button",
          {
            "aria-label": Z,
            "data-disabled": at,
            "data-close-button": !0,
            onClick:
              at || !Ze
                ? () => {}
                : () => {
                    var ne;
                    qe(), (ne = u.onDismiss) == null || ne.call(u, u);
                  },
            className: T(
              M == null ? void 0 : M.closeButton,
              (r = u == null ? void 0 : u.classNames) == null
                ? void 0
                : r.closeButton
            ),
          },
          I.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            I.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            I.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          )
        )
      : null,
    u.jsx || I.isValidElement(u.title)
      ? u.jsx || u.title
      : I.createElement(
          I.Fragment,
          null,
          We || u.icon || u.promise
            ? I.createElement(
                "div",
                { "data-icon": "", className: T(M == null ? void 0 : M.icon) },
                u.promise || (u.type === "loading" && !u.icon)
                  ? u.icon || rn()
                  : null,
                u.type !== "loading"
                  ? u.icon || (H == null ? void 0 : H[We]) || bb(We)
                  : null
              )
            : null,
          I.createElement(
            "div",
            {
              "data-content": "",
              className: T(M == null ? void 0 : M.content),
            },
            I.createElement("div", {
              "data-title": "",
              className: T(
                M == null ? void 0 : M.title,
                (i = u == null ? void 0 : u.classNames) == null
                  ? void 0
                  : i.title
              ),
              dangerouslySetInnerHTML: Pn(u.title),
            }),
            u.description
              ? I.createElement("div", {
                  "data-description": "",
                  className: T(
                    L,
                    Ur,
                    M == null ? void 0 : M.description,
                    (o = u == null ? void 0 : u.classNames) == null
                      ? void 0
                      : o.description
                  ),
                  dangerouslySetInnerHTML: Pn(u.description),
                })
              : null
          ),
          I.isValidElement(u.cancel)
            ? u.cancel
            : u.cancel && la(u.cancel)
            ? I.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: u.cancelButtonStyle || O,
                  onClick: (ne) => {
                    la(u.cancel) && Ze && (qe(), u.cancel.onClick(ne));
                  },
                  className: T(
                    M == null ? void 0 : M.cancelButton,
                    (a = u == null ? void 0 : u.classNames) == null
                      ? void 0
                      : a.cancelButton
                  ),
                },
                u.cancel.label
              )
            : null,
          I.isValidElement(u.action)
            ? u.action
            : u.action && la(u.action)
            ? I.createElement(
                "button",
                {
                  "data-button": "",
                  style: u.actionButtonStyle || P,
                  onClick: (ne) => {
                    la(u.action) &&
                      (u.action.onClick(ne), !ne.defaultPrevented && qe());
                  },
                  className: T(
                    M == null ? void 0 : M.actionButton,
                    (l = u == null ? void 0 : u.classNames) == null
                      ? void 0
                      : l.actionButton
                  ),
                },
                u.action.label
              )
            : null
        )
  );
};
function mh() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
var Bb = (e) => {
  let {
      invert: t,
      position: n = "bottom-right",
      hotkey: r = ["altKey", "KeyT"],
      expand: i,
      closeButton: o,
      className: a,
      offset: l,
      theme: s = "light",
      richColors: u,
      duration: d,
      style: f,
      visibleToasts: p = Mb,
      toastOptions: g,
      dir: y = mh(),
      gap: w = Ab,
      loadingIcon: E,
      icons: v,
      containerAriaLabel: h = "Notifications",
      pauseWhenPageIsHidden: m,
      cn: C = $b,
    } = e,
    [O, P] = I.useState([]),
    x = I.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(O.filter((Y) => Y.position).map((Y) => Y.position))
          )
        ),
      [O, n]
    ),
    [L, j] = I.useState([]),
    [_, D] = I.useState(!1),
    [U, $] = I.useState(!1),
    [M, H] = I.useState(
      s !== "system"
        ? s
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    Z = I.useRef(null),
    we = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    T = I.useRef(null),
    B = I.useRef(!1),
    Q = I.useCallback(
      (Y) => P((V) => V.filter(({ id: se }) => se !== Y.id)),
      []
    );
  return (
    I.useEffect(
      () =>
        un.subscribe((Y) => {
          if (Y.dismiss) {
            P((V) =>
              V.map((se) => (se.id === Y.id ? { ...se, delete: !0 } : se))
            );
            return;
          }
          setTimeout(() => {
            Hc.flushSync(() => {
              P((V) => {
                let se = V.findIndex((re) => re.id === Y.id);
                return se !== -1
                  ? [...V.slice(0, se), { ...V[se], ...Y }, ...V.slice(se + 1)]
                  : [Y, ...V];
              });
            });
          });
        }),
      []
    ),
    I.useEffect(() => {
      if (s !== "system") {
        H(s);
        return;
      }
      s === "system" &&
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? H("dark")
          : H("light")),
        typeof window < "u" &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches: Y }) => {
              H(Y ? "dark" : "light");
            });
    }, [s]),
    I.useEffect(() => {
      O.length <= 1 && D(!1);
    }, [O]),
    I.useEffect(() => {
      let Y = (V) => {
        var se, re;
        r.every((ye) => V[ye] || V.code === ye) &&
          (D(!0), (se = Z.current) == null || se.focus()),
          V.code === "Escape" &&
            (document.activeElement === Z.current ||
              ((re = Z.current) != null &&
                re.contains(document.activeElement))) &&
            D(!1);
      };
      return (
        document.addEventListener("keydown", Y),
        () => document.removeEventListener("keydown", Y)
      );
    }, [r]),
    I.useEffect(() => {
      if (Z.current)
        return () => {
          T.current &&
            (T.current.focus({ preventScroll: !0 }),
            (T.current = null),
            (B.current = !1));
        };
    }, [Z.current]),
    O.length
      ? I.createElement(
          "section",
          { "aria-label": `${h} ${we}`, tabIndex: -1 },
          x.map((Y, V) => {
            var se;
            let [re, ye] = Y.split("-");
            return I.createElement(
              "ol",
              {
                key: Y,
                dir: y === "auto" ? mh() : y,
                tabIndex: -1,
                ref: Z,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": M,
                "data-rich-colors": u,
                "data-y-position": re,
                "data-x-position": ye,
                style: {
                  "--front-toast-height": `${
                    ((se = L[0]) == null ? void 0 : se.height) || 0
                  }px`,
                  "--offset": typeof l == "number" ? `${l}px` : l || Db,
                  "--width": `${zb}px`,
                  "--gap": `${w}px`,
                  ...f,
                },
                onBlur: (ue) => {
                  B.current &&
                    !ue.currentTarget.contains(ue.relatedTarget) &&
                    ((B.current = !1),
                    T.current &&
                      (T.current.focus({ preventScroll: !0 }),
                      (T.current = null)));
                },
                onFocus: (ue) => {
                  (ue.target instanceof HTMLElement &&
                    ue.target.dataset.dismissible === "false") ||
                    B.current ||
                    ((B.current = !0), (T.current = ue.relatedTarget));
                },
                onMouseEnter: () => D(!0),
                onMouseMove: () => D(!0),
                onMouseLeave: () => {
                  U || D(!1);
                },
                onPointerDown: (ue) => {
                  (ue.target instanceof HTMLElement &&
                    ue.target.dataset.dismissible === "false") ||
                    $(!0);
                },
                onPointerUp: () => $(!1),
              },
              O.filter(
                (ue) => (!ue.position && V === 0) || ue.position === Y
              ).map((ue, Je) => {
                var _t, _n;
                return I.createElement(Hb, {
                  key: ue.id,
                  icons: v,
                  index: Je,
                  toast: ue,
                  duration:
                    (_t = g == null ? void 0 : g.duration) != null ? _t : d,
                  className: g == null ? void 0 : g.className,
                  descriptionClassName:
                    g == null ? void 0 : g.descriptionClassName,
                  invert: t,
                  visibleToasts: p,
                  closeButton:
                    (_n = g == null ? void 0 : g.closeButton) != null ? _n : o,
                  interacting: U,
                  position: Y,
                  style: g == null ? void 0 : g.style,
                  unstyled: g == null ? void 0 : g.unstyled,
                  classNames: g == null ? void 0 : g.classNames,
                  cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                  actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                  removeToast: Q,
                  toasts: O.filter((en) => en.position == ue.position),
                  heights: L.filter((en) => en.position == ue.position),
                  setHeights: j,
                  expandByDefault: i,
                  gap: w,
                  loadingIcon: E,
                  expanded: _,
                  pauseWhenPageIsHidden: m,
                  cn: C,
                });
              })
            );
          })
        )
      : null
  );
};
/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.0.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.10/LICENSE *)
*/ function td({ product: e, isFavorite: t }) {
  const n = Mt((h) => h.isAuthenticated),
    r = Mt((h) => h.token),
    i = Ie((h) => h.cart),
    [o, a] = N.useState(!1),
    l = Ie((h) => h.addToCart),
    s = Ie((h) => h.incrementQuantity),
    u = Ie((h) => h.decrementQuantity),
    [d, f] = N.useState(1),
    p = Ie((h) => h.getTotalQuantity()),
    g = Jc(
      async (h) => {
        const m = await fetch(`${Cn}/user/fav`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(h),
        });
        m.ok || jt.error("فشلت في الإضافة إلى المفضلة"),
          (await m.json()).success
            ? jt.success("تمت الإضافة إلى المفضلة بنجاح")
            : jt.error("المنتج موجود بالفعل في المفضلة");
      },
      {
        onError: () => {
          jt.error("فشلت في الإضافة إلى المفضلة");
        },
      }
    ),
    y = () => {
      n
        ? g.mutate({ user: r, product: w.id })
        : jt.error("يجب عليك تسجيل الدخول");
    };
  N.useEffect(() => {
    const h = i.find((m) => m.id === e.id);
    h && (a(!0), f(h.quantity));
  }, [i, e.id, p]);
  const w = {
      id: e.id,
      quantity: d,
      name: e.name,
      image: e.image,
      price: e.price,
    },
    E = () => {
      d < 20 && f(d + 1), s(e.id);
    },
    v = () => {
      d > 1 && f(d - 1), u(e.id);
    };
  return e.available === 0
    ? null
    : c.jsxs(
        "div",
        {
          className:
            "block rounded-lg p-4 shadow-lg bg-white shadow-orange-100 relative",
          children: [
            c.jsx(xt, {
              to: `/products/${e.id}`,
              children: c.jsx("img", {
                alt: e.name,
                src: Fl + e.image,
                className: "h-56 w-full rounded-md object-cover",
              }),
            }),
            c.jsx(xt, {
              to: `/products/${e.id}`,
              children: c.jsx("div", {
                className: "mt-2",
                children: c.jsxs("dl", {
                  children: [
                    e.offer > 0
                      ? c.jsxs(c.Fragment, {
                          children: [
                            c.jsxs("div", {
                              children: [
                                c.jsx("dt", {
                                  className: "sr-only",
                                  children: "Price",
                                }),
                                c.jsxs("dd", {
                                  className:
                                    "text-sm text-gray-500 line-through",
                                  children: [e.price + e.offer, " ج"],
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("dt", {
                                  className: "sr-only",
                                  children: "Offer Price",
                                }),
                                c.jsxs("dd", {
                                  className: "text-sm text-primary font-bold",
                                  children: [e.price, " ج"],
                                }),
                              ],
                            }),
                          ],
                        })
                      : c.jsxs("div", {
                          children: [
                            c.jsx("dt", {
                              className: "sr-only",
                              children: "Price",
                            }),
                            c.jsxs("dd", {
                              className: "text-sm text-primary",
                              children: [e.price, " ج"],
                            }),
                          ],
                        }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("dt", {
                          className: "sr-only",
                          children: "Product Name",
                        }),
                        c.jsx("dd", {
                          className: "font-medium",
                          children: e.name,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            c.jsxs("div", {
              className:
                "buttons absolute top-5 left-5 flex flex-col text-primary text-3xl gap-2 md:gap-5",
              children: [
                c.jsx("button", {
                  id: "addBtn",
                  onClick: () => l(w),
                  className: `${
                    o ? "hidden" : "flex"
                  } bg-white p-2 rounded shadow z-50x`,
                  children: c.jsx("i", { className: "bx bx-cart-add" }),
                }),
                c.jsxs("div", {
                  className: `inCart ${
                    o ? "flex" : "hidden"
                  } bg-white p-1 flex-col items-center rounded shadow gap-2`,
                  children: [
                    c.jsx("button", {
                      onClick: E,
                      className:
                        "text-lg border border-primary rounded-lg cursor-pointer grid place-items-center w-full h-8",
                      children: c.jsx("i", { className: "bx bx-plus" }),
                    }),
                    c.jsx("p", { className: "Quantity text-lg", children: d }),
                    c.jsx("button", {
                      onClick: v,
                      className:
                        "text-lg border border-primary rounded-lg cursor-pointer grid place-items-center w-full h-8",
                      children: c.jsx("i", { className: "bx bx-minus" }),
                    }),
                  ],
                }),
                n && !t
                  ? c.jsx("button", {
                      onClick: y,
                      id: "addToFav",
                      className: "bg-white p-2 rounded shadow",
                      children: c.jsx("i", { className: "bx bxs-heart" }),
                    })
                  : null,
              ],
            }),
          ],
        },
        e.id
      );
}
function Qb() {
  const { name: e } = Ll(),
    {
      isLoading: t,
      error: n,
      data: r,
      refetch: i,
    } = Fr({
      queryKey: ["category", { name: e }],
      queryFn: () => fetch(`${Cn}/category/${e}`).then((s) => s.json()),
      enabled: !1,
    });
  if (
    ((document.title = `Talgtna | ${e}`),
    N.useEffect(() => {
      i();
    }, [e, i]),
    t)
  )
    return c.jsx("p", { children: "Loading..." });
  if (n)
    return c.jsxs("p", { children: ["An error has occurred: ", n.message] });
  const o = (r == null ? void 0 : r.offers) ?? [],
    a = (r == null ? void 0 : r.categories) ?? [],
    l = (r == null ? void 0 : r.products) ?? [];
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(Iv, { offers: o }),
      c.jsx("div", {
        className: "w-full overflow-x-scroll grid place-items-center",
        children: c.jsx("div", {
          className:
            "categories w-full flex items-center gap-2 md:gap-5 px-2 md:px-5 my-3 justify-center",
          children: a.map((s) => c.jsx(zv, { ...s }, s.id)),
        }),
      }),
      c.jsx("div", {
        className:
          "products grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5",
        children: l.map((s) => c.jsx(td, { product: s, isFavorite: !1 }, s.id)),
      }),
    ],
  });
}
function Wb({ product: e }) {
  const t = Ie((i) => i.removeFromCart),
    n = Ie((i) => i.incrementQuantity),
    r = Ie((i) => i.decrementQuantity);
  return c.jsx(c.Fragment, {
    children: c.jsxs("li", {
      className: "flex items-center gap-4",
      id: "cartItem",
      children: [
        c.jsx("img", {
          id: "itemImage",
          src: Fl + e.image,
          alt: e.name,
          className: "w-16 h-16 rounded object-cover",
        }),
        c.jsx("div", {
          children: c.jsx("h3", {
            className: "text-sm text-gray-900",
            id: "itemName",
            children: e.name.length > 35 ? e.name.slice(0, 35) + "..." : e.name,
          }),
        }),
        c.jsxs("div", {
          className: "flex flex-1 items-center justify-end gap-2",
          children: [
            c.jsxs("div", {
              className:
                "buttons flex flex-col md:flex-row border border-primary w-11 md:w-32 items-center justify-between h-auto md:h-9 rounded gap-2 md:gap-5",
              children: [
                c.jsx("button", {
                  onClick: () => {
                    n(e.id);
                  },
                  id: "incQuantityBtn",
                  className:
                    "w-full text-xl grid place-items-center cursor-pointer h-full duration-300 hover:bg-primary hover:text-white transition ease-in-out",
                  children: c.jsx("i", { className: "bx bx-plus" }),
                }),
                c.jsx("p", {
                  className: "Quantity text-lg",
                  children: e.quantity,
                }),
                c.jsx("button", {
                  onClick: () => {
                    r(e.id);
                  },
                  id: "decQuantityBtn",
                  className:
                    "w-full text-xl grid place-items-center cursor-pointer h-full duration-300 hover:bg-primary hover:text-white transition ease-in-out",
                  children: c.jsx("i", { className: "bx bx-minus" }),
                }),
              ],
            }),
            c.jsxs("button", {
              onClick: () => {
                t(e.id);
              },
              id: "removeFromCart",
              className:
                "text-gray-600 border border-primary grid place-items-center rounded px-3 h-9 transition hover:text-red-600",
              children: [
                c.jsx("span", {
                  className: "sr-only",
                  children: "Remove item",
                }),
                c.jsx("i", { className: "bx bx-trash" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const qb = "/assets/cart-BuiO4yb9.png";
function Vb() {
  const e = Ie((s) => s.cart),
    t = Ie((s) => s.getTotalQuantity()),
    [n, r] = N.useState(0),
    i = Ie((s) => s.discount),
    o = n + 25,
    a = i.value,
    l = o - a;
  return (
    (document.title = "Talgtna | السلة"),
    N.useEffect(() => {
      r(e.reduce((s, u) => s + u.price * u.quantity, 0));
    }, [e, t]),
    c.jsx(c.Fragment, {
      children: c.jsxs("div", {
        className:
          "mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-white my-4 rounded shadow-lg",
        children: [
          c.jsxs("div", {
            id: "EmptyCart",
            className: `w-full ${t > 0 ? "hidden" : "grid"} place-items-center`,
            children: [
              c.jsx("img", {
                src: qb,
                alt: "Empty Cart",
                className: "max-h-80 max-w-80 w-full",
              }),
              c.jsx("div", {
                className:
                  "inset-x-0 bottom-10 flex flex-col items-center justify-center",
                children: c.jsx("a", {
                  href: "/",
                  className: "bg-primary text-white px-4 py-2 rounded-full",
                  children: "اذهب للتسوق",
                }),
              }),
            ],
          }),
          c.jsxs("div", {
            className: `mx-auto max-w-3xl ${t > 0 ? "" : "hidden"}`,
            children: [
              c.jsx("header", {
                className: "text-center",
                children: c.jsx("h1", {
                  className: "text-xl font-bold text-gray-900 sm:text-3xl",
                  children: "سلة التسوق",
                }),
              }),
              c.jsxs("div", {
                className: "mt-8",
                children: [
                  c.jsx("ul", {
                    className: "space-y-4",
                    id: "cartContainer",
                    children: e.map((s) => c.jsx(Wb, { product: s }, s.id)),
                  }),
                  c.jsx("div", {
                    id: "checkout",
                    className:
                      "mt-8 flex justify-start border-t border-gray-100 pt-8",
                    children: c.jsxs("div", {
                      className: "w-screen max-w-lg space-y-4",
                      children: [
                        c.jsxs("dl", {
                          className: "space-y-0.5 text-sm text-gray-700",
                          children: [
                            c.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                c.jsx("dt", { children: "المجموع الفرعي" }),
                                c.jsxs("dd", {
                                  id: "subtotal",
                                  children: [n, " ج.م"],
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                c.jsx("dt", { children: "توصيل" }),
                                c.jsx("dd", { children: "25 ج.م" }),
                              ],
                            }),
                            a &&
                              c.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  c.jsx("dt", { children: "خصم" }),
                                  c.jsxs("dd", {
                                    id: "discountValue",
                                    children: [a, " ج.م"],
                                  }),
                                ],
                              }),
                            c.jsxs("div", {
                              className:
                                "flex justify-between !text-base font-medium",
                              children: [
                                c.jsx("dt", { children: "إجمالي" }),
                                c.jsxs("dd", {
                                  id: "total",
                                  children: [a ? l : o, " ج.م"],
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsx("div", {
                          className: "flex justify-start",
                          children: c.jsx(xt, {
                            to: "/order",
                            className:
                              "block rounded bg-primary px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600",
                            children: "اطلب الان",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function Kb() {
  return (
    (document.title = "Talgtna | الشكوي"),
    c.jsxs("div", {
      className:
        "my-10 mx-auto rounded-md shadow-md w-[95%] md:w-[80%] h-screen flex flex-col items-center justify-center gap-5 bg-white",
      children: [
        c.jsx("h1", {
          className: "text-2xl md:text-3xl font-bold text-primary mb-10",
          children: "سياسة التوصيل والاسترجاع",
        }),
        c.jsx("p", {
          children:
            "1. اكتب رسالتك من خلال البرنامج (تواصل معنا) عند وجود اي خطأ في الطلب او شكوه",
        }),
        c.jsx("p", { children: "2. احضار اصل فاتورة الشراء" }),
        c.jsx("p", { children: "3. توافر المنتج موضوع الشكوي" }),
        c.jsx("p", {
          children: "4. ان يكون طلب الاسترجاع خلال 24 ساعه من تاريخ الطلب",
        }),
        c.jsx("p", {
          children:
            "5. اني يكون تم حفظ المنتج بالطريقة الصحيحة لأن الشركة تخلي مسؤوليتها عن سوء التخزين",
        }),
        c.jsx("h1", {
          className: "text-2xl md:text-3xl font-bold text-primary mb-10",
          children: "نشكركم على حسن تعاونكم معنا",
        }),
      ],
    })
  );
}
function Yb() {
  const [e, t] = N.useState(""),
    [n, r] = N.useState(""),
    [i, o] = N.useState(""),
    [a, l] = N.useState(""),
    s = Jc(
      (document.title = "Talgtna | تواصل معنا"),
      async (d) => {
        const f = await fetch(`${Cn}/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(d),
        });
        t(""),
          r(""),
          o(""),
          l(""),
          f.ok || jt.error("فشل في إرسال الرسالة"),
          jt.promise(f.json(), {
            loading: "ارسال رسالة...",
            success: "تم إرسال الرسالة بنجاح",
            error: "فشل في إرسال الرسالة",
          });
      },
      {
        onError: () => {
          jt.error("فشل في إرسال الرسالة");
        },
      }
    ),
    u = () => {
      s.mutate({ name: e, email: n, phone: i, message: a });
    };
  return c.jsx("div", {
    className: "mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8",
    children: c.jsxs("div", {
      className: "grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5",
      children: [
        c.jsxs("div", {
          className: "lg:col-span-2 lg:py-12",
          children: [
            c.jsx("p", {
              className: "max-w-xl text-lg",
              children:
                "وفي الوقت نفسه، فإن حقيقة استقلالنا التام عن الشركة المصنعة وعن سيطرة المجموعة الأخرى تمنحك الثقة في أننا سنوصي فقط بما هو مناسب لك.",
            }),
            c.jsx("div", {
              className: "mt-8",
              children: c.jsx("a", {
                href: "tel:01212158465",
                className: "text-2xl font-bold text-primary hover:underline",
                children: "01212158465",
              }),
            }),
          ],
        }),
        c.jsx("div", {
          className: "rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12",
          children: c.jsxs("div", {
            id: "contactForm",
            className: "space-y-4",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    className: "sr-only",
                    htmlFor: "name",
                    children: "الاسم",
                  }),
                  c.jsx("input", {
                    className:
                      "w-full rounded-lg border border-primary p-3 text-sm",
                    placeholder: "الاسم",
                    type: "text",
                    required: !0,
                    id: "name",
                    onChange: (d) => t(d.target.value),
                    value: e,
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "email",
                        children: "البريد الالكتروني",
                      }),
                      c.jsx("input", {
                        className:
                          "w-full rounded-lg border border-primary p-3 text-sm",
                        placeholder: "البريد الالكتروني",
                        type: "email",
                        required: !0,
                        id: "email",
                        onChange: (d) => r(d.target.value),
                        value: n,
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "phone",
                        children: "رقم الهاتف",
                      }),
                      c.jsx("input", {
                        dir: "rtl",
                        className:
                          "w-full rounded-lg border border-primary p-3 text-sm",
                        placeholder: "رقم الهاتف",
                        required: !0,
                        type: "tel",
                        id: "phone",
                        onChange: (d) => o(d.target.value),
                        value: i,
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    className: "sr-only",
                    htmlFor: "message",
                    children: "الرسالة",
                  }),
                  c.jsx("textarea", {
                    className:
                      "w-full rounded-lg border border-primary p-3 text-sm",
                    placeholder: "الرسالة",
                    required: !0,
                    id: "message",
                    onChange: (d) => l(d.target.value),
                    value: a,
                  }),
                ],
              }),
              c.jsx("div", {
                className: "mt-4",
                children: c.jsxs("button", {
                  type: "submit",
                  onClick: u,
                  className:
                    "w-full rounded-lg bg-primary px-5 py-3 font-medium text-white sm:w-auto flex justify-center items-center gap-5 duration-300 transition-all border hover:border-primary hover:bg-white hover:text-primary",
                  children: [
                    c.jsx("p", { children: "ارسال" }),
                    c.jsx("i", { className: "bx bx-send rotate-180 text-xl" }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Gb() {
  const e = Mt((l) => l.token),
    t = Mt((l) => l.isAuthenticated),
    n = Io();
  t || (jt.error("يجب عليك تسجيل الدخول"), n("/"));
  const {
    isLoading: r,
    error: i,
    data: o,
  } = Fr("favorites", () =>
    fetch(`${Cn}/user/favorites`, {
      headers: { Authorization: `Bearer ${e}` },
    }).then((l) => l.json())
  );
  document.title = "Talgtna | المفضلات";
  const a = (o == null ? void 0 : o.products) ?? [];
  return (
    console.log(a),
    r
      ? c.jsx("p", { children: "Loading..." })
      : i
      ? c.jsxs("p", { children: ["An error has occurred: ", i.message] })
      : c.jsx("div", {
          className:
            "products my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5",
          children: a.map((l) =>
            c.jsx(td, { product: l, isFavorite: !0 }, l.id)
          ),
        })
  );
}
function Xb(e) {
  return e.soon === 1
    ? null
    : c.jsxs(
        xt,
        {
          to: `/company/${e.name}`,
          className: "bg-white h-auto shadow-md rounded-md w-full",
          children: [
            c.jsx("img", {
              src: Fl + e.image,
              alt: e.name,
              className: "w-full h-[115px] rounded-md",
            }),
            c.jsx("p", {
              className: "text-center my-1 text-primary",
              children: e.name,
            }),
          ],
        },
        e.id
      );
}
function Jb() {
  const {
      isLoading: e,
      error: t,
      data: n,
    } = Fr("home", () => fetch(`${Cn}`).then((a) => a.json())),
    r = (n == null ? void 0 : n.categories) ?? [],
    i = (n == null ? void 0 : n.companies) ?? [],
    o = (n == null ? void 0 : n.offers) ?? [];
  return e
    ? c.jsx("p", { children: "Loading..." })
    : t
    ? c.jsxs("p", { children: ["An error has occurred: ", t.message] })
    : c.jsxs(c.Fragment, {
        children: [
          c.jsx(Iv, { offers: o }),
          c.jsx("div", {
            className: "w-full overflow-x-scroll grid place-items-center",
            children: c.jsx("div", {
              className:
                "categories w-full flex items-center gap-2 md:gap-5 px-2 md:px-5 my-3 justify-center",
              children: r.map((a) => c.jsx(zv, { ...a }, a.id)),
            }),
          }),
          c.jsx("div", {
            className:
              "companies my-6 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5 px-2 md:px-5 place-items-center",
            children: i.map((a) => c.jsx(Xb, { ...a }, a.id)),
          }),
        ],
      });
}
function Zb() {
  const e = Ie((H) => H.cart),
    t = Mt((H) => H.isAuthenticated),
    n = Mt((H) => H.token),
    r = Mt((H) => H.login),
    i = Ie((H) => H.getTotalQuantity()),
    o = Ie((H) => H.clearCart),
    [a, l] = N.useState(0),
    [s, u] = N.useState(""),
    [d, f] = N.useState(""),
    [p, g] = N.useState(""),
    [y, w] = N.useState(""),
    [E, v] = N.useState(""),
    [h, m] = N.useState(""),
    [C, O] = N.useState(""),
    [P, x] = N.useState(""),
    L = Io(),
    j = Ie((H) => H.discount),
    _ = a + 25,
    D = j.value,
    U = _ - D;
  document.title = "Talgtna | الطلب";
  const $ = Jc(
    async (H) => {
      const Z = await fetch(`${Cn}/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(H),
      });
      return (
        u(""),
        g(""),
        f(""),
        m(""),
        O(""),
        v(""),
        w(""),
        x(""),
        Z.ok || jt.error("فشل في الطلب"),
        Z.json()
      );
    },
    {
      onError: () => {
        jt.error("فشل في الطلب");
      },
      onSuccess: (H) => {
        o(),
          r(H.token),
          L("/ordersuccess/" + H.order),
          jt.success("تم إرسال الطلب بنجاح");
      },
    }
  );
  N.useEffect(() => {
    l(e.reduce((H, Z) => H + Z.price * Z.quantity, 0));
  }, [e, i]);
  const M = () => {
    const H = j ? { code: j.code, value: j.value } : { code: "", value: 0 };
    let Z = {};
    t
      ? (Z = {
          user: n,
          phone: d,
          spare_phone: p,
          city: y,
          street: E,
          building: h,
          floor: C,
          method: P,
          cart: e,
          discount: H,
        })
      : (Z = {
          name: s,
          phone: d,
          spare_phone: p,
          city: y,
          street: E,
          building: h,
          floor: C,
          method: P,
          cart: e,
          discount: { code: "", value: 0 },
        }),
      $.mutate(Z);
  };
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx("section", {
        className: "grid place-items-center py-7",
        children: c.jsxs("div", {
          id: "checkout",
          className:
            "mb-8 flex flex-col w-[95%] md:w-4/5 justify-end bg-white p-8 lg:p-12 rounded shadow",
          children: [
            c.jsx("div", {
              className: "w-full",
              children: c.jsxs("dl", {
                className: "space-y-0.5 text-sm text-gray-700",
                children: [
                  c.jsxs("div", {
                    className: "flex justify-between",
                    children: [
                      c.jsx("dt", { children: "المجموع الفرعي" }),
                      c.jsxs("dd", { id: "subtotal", children: [a, " ج.م"] }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "flex justify-between",
                    children: [
                      c.jsx("dt", { children: "توصيل" }),
                      c.jsx("dd", { children: "25 ج.م" }),
                    ],
                  }),
                  D &&
                    c.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        c.jsx("dt", { children: "خصم" }),
                        c.jsxs("dd", {
                          id: "discountValue",
                          children: [D, " ج.م"],
                        }),
                      ],
                    }),
                  c.jsxs("div", {
                    className: "flex justify-between !text-base font-medium",
                    children: [
                      c.jsx("dt", { children: "إجمالي" }),
                      c.jsxs("dd", {
                        id: "total",
                        children: [D ? U : _, " ج.م"],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsxs("form", {
              id: "couponForm",
              className: "hidden w-full mt-8  grid-cols-3 gap-4",
              children: [
                c.jsx("input", {
                  type: "text",
                  name: "coupon",
                  id: "coupon",
                  placeholder: "كود الخصم",
                  className:
                    "rounded-lg border border-primary h-9 p-3 col-span-2",
                }),
                c.jsx("button", {
                  className: "rounded-lg bg-primary text-white h-9 px-4",
                  type: "submit",
                  children: "تأكيد",
                }),
              ],
            }),
          ],
        }),
      }),
      c.jsx("section", {
        className: "grid place-items-center py-7",
        children: c.jsx("div", {
          className:
            "rounded-lg bg-white w-[95%] md:w-4/5 p-8 shadow-lg lg:col-span-3 lg:p-12",
          children: c.jsxs("form", {
            id: "orderForm",
            onSubmit: (H) => {
              H.preventDefault(), M();
            },
            className: "space-y-4",
            children: [
              t
                ? null
                : c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "name",
                        children: "الاسم",
                      }),
                      c.jsx("input", {
                        className:
                          "w-full rounded-lg p-3 text-sm border border-primary",
                        placeholder: "الاسم",
                        type: "text",
                        id: "name",
                        required: !0,
                        onChange: (H) => u(H.target.value),
                        value: s,
                      }),
                    ],
                  }),
              c.jsxs("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "phone",
                        children: "رقم الهاتف",
                      }),
                      c.jsx("input", {
                        className:
                          "w-full rounded-lg border border-primary p-3 text-sm text-end",
                        placeholder: "رقم الهاتف",
                        type: "tel",
                        id: "phone",
                        required: !0,
                        onChange: (H) => f(H.target.value),
                        value: d,
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "spare_phone",
                        children: "رقم هاتف احتياطي",
                      }),
                      c.jsx("input", {
                        className:
                          "w-full rounded-lg border border-primary p-3 text-sm text-end",
                        placeholder: "رقم هاتف احتياطي",
                        type: "tel",
                        id: "spare_phone",
                        required: !0,
                        onChange: (H) => g(H.target.value),
                        value: p,
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "street",
                        children: "شارع",
                      }),
                      c.jsx("input", {
                        className:
                          "w-full rounded-lg border border-primary p-3 text-sm text-start",
                        placeholder: "شارع",
                        type: "text",
                        id: "street",
                        required: !0,
                        onChange: (H) => v(H.target.value),
                        value: E,
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "مبنى",
                        children: "عماره",
                      }),
                      c.jsx("input", {
                        className:
                          "w-full rounded-lg border border-primary p-3 text-sm text-start",
                        placeholder: "عماره",
                        type: "text",
                        id: "building",
                        required: !0,
                        onChange: (H) => m(H.target.value),
                        value: h,
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    className: "sr-only",
                    htmlFor: "floor",
                    children: "طابق",
                  }),
                  c.jsx("input", {
                    className:
                      "w-full rounded-lg p-3 text-sm border border-primary",
                    placeholder: "طابق",
                    type: "text",
                    id: "floor",
                    required: !0,
                    onChange: (H) => O(H.target.value),
                    value: C,
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        htmlFor: "cities",
                        className: "block text-sm font-medium text-gray-900",
                        children: "المدن",
                      }),
                      c.jsxs("select", {
                        required: !0,
                        id: "cities",
                        onChange: (H) => w(H.target.value),
                        value: y,
                        className:
                          "mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm",
                        children: [
                          c.jsx("option", {
                            value: "",
                            children: "أختر المدينه",
                          }),
                          c.jsx("option", {
                            value: "الشروق",
                            children: "الشروق",
                          }),
                          c.jsx("option", { value: "بدر", children: "بدر" }),
                          c.jsx("option", {
                            value: "مدينتي",
                            children: "مدينتي",
                          }),
                          c.jsx("option", {
                            value: "المستقبل",
                            children: "المستقبل",
                          }),
                          c.jsx("option", {
                            value: "كمبوند البروج",
                            children: "كمبوند البروج",
                          }),
                          c.jsx("option", {
                            value: "العبور",
                            children: "العبور",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        htmlFor: "payment",
                        className: "block text-sm font-medium text-gray-900",
                        children: "طريقة الدفع",
                      }),
                      c.jsxs("select", {
                        name: "method",
                        required: !0,
                        id: "payment",
                        onChange: (H) => x(H.target.value),
                        value: P,
                        className:
                          "mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm",
                        children: [
                          c.jsx("option", {
                            value: "",
                            children: "اختار طريقة الدفع",
                          }),
                          c.jsx("option", {
                            value: "cash_on_delivery",
                            children: "الدفع عند الاستلام",
                          }),
                          c.jsx("option", {
                            value: "creditcard_on_delivery",
                            children: "بالكارت عند الاستلام",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsx("div", {
                className: "mt-4",
                children: c.jsx("button", {
                  type: "submit",
                  className:
                    "inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-white sm:w-auto",
                  children: "اطلب الان",
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function eE({ order: e }) {
  const t = JSON.parse(e.discount),
    n = () => e.products.reduce((r, i) => r + i.price * i.quantity, 0);
  return c.jsx("div", {
    className:
      " w-11/12 md:w-4/5 flow-root shadow-lg bg-white rounded-lg border border-gray-100 py-3 mx-5 sm:mx-14",
    children: c.jsxs("dl", {
      className: "-my-3 divide-gray-100 text-sm",
      children: [
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "رقم الطلب",
            }),
            c.jsx("dd", {
              className: "text-gray-700 sm:col-span-2",
              children: e.id.substring(0, 8),
            }),
          ],
        }),
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "تاريخ الطلب",
            }),
            c.jsx("dd", {
              dir: "ltr",
              className: "text-gray-700 text-end sm:col-span-2",
              children: new Date(e.date).toLocaleString("en-US", {
                timeZone: "Africa/Cairo",
              }),
            }),
          ],
        }),
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "طريقة الدفع",
            }),
            c.jsx("dd", {
              className: "text-gray-700 sm:col-span-2 capitalize",
              children:
                e.method === "creditcard_on_delivery" ? "Credit Card" : "Cash",
            }),
          ],
        }),
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "منتجات الطلب",
            }),
            c.jsx("dd", {
              className: "text-gray-700 sm:col-span-2",
              children: c.jsxs("table", {
                className: "w-full",
                children: [
                  c.jsx("thead", {
                    children: c.jsxs("tr", {
                      className: "grid grid-cols-4",
                      children: [
                        c.jsx("th", { children: "منتج" }),
                        c.jsx("th", { children: "سعر" }),
                        c.jsx("th", { children: "كمية" }),
                        c.jsx("th", { children: "المجموع" }),
                      ],
                    }),
                  }),
                  c.jsx("tbody", {
                    className: "divide-y",
                    children: e.products.map((r) =>
                      c.jsxs(
                        "tr",
                        {
                          className: "grid grid-cols-4 place-items-center",
                          children: [
                            c.jsx("td", {
                              className: "text-center sm:hidden",
                              children:
                                r.name.length <= 20
                                  ? r.name
                                  : r.name.substring(0, 18) + "...",
                            }),
                            c.jsx("td", {
                              className: "text-center hidden sm:block",
                              children: r.name,
                            }),
                            c.jsx("td", {
                              className: "text-center",
                              children: r.price,
                            }),
                            c.jsx("td", {
                              className: "text-center",
                              children: r.quantity,
                            }),
                            c.jsx("td", {
                              className: "text-center",
                              children: r.quantity * r.price,
                            }),
                          ],
                        },
                        r.id
                      )
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "إجمالي الطلب",
            }),
            t.code !== ""
              ? c.jsxs("dd", {
                  className: "text-gray-700 sm:col-span-2",
                  children: [n() - t.value, " ج.م"],
                })
              : c.jsxs("dd", {
                  className: "text-gray-700 sm:col-span-2",
                  children: [n(), " ج.م"],
                }),
          ],
        }),
        t.code !== ""
          ? c.jsxs("div", {
              className:
                "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
              children: [
                c.jsx("dt", {
                  className: "font-bold  text-primary",
                  children: "قسيمة",
                }),
                c.jsx("dd", {
                  className: "text-gray-700 sm:col-span-2",
                  children: t.code,
                }),
              ],
            })
          : null,
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "الطلب مدفوع",
            }),
            c.jsx("dd", {
              className: "text-gray-700 sm:col-span-2 capitalize",
              children: e.paid == 1 ? "نعم" : "لا",
            }),
          ],
        }),
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "تم تسليم الطلب",
            }),
            c.jsx("dd", {
              className: "text-gray-700 sm:col-span-2 capitalize",
              children: e.delivered == 1 ? "نعم" : "لا",
            }),
          ],
        }),
      ],
    }),
  });
}
function tE() {
  const e = Mt((a) => a.token),
    t = Mt((a) => a.isAuthenticated),
    n = Io();
  t || (jt.error("يجب عليك تسجيل الدخول"), n("/"));
  const {
    isLoading: r,
    error: i,
    data: o,
  } = Fr("favorites", () =>
    fetch(`${Cn}/order/history`, {
      headers: { Authorization: `Bearer ${e}` },
    }).then((a) => a.json())
  );
  return r
    ? c.jsx("p", { children: "Loading..." })
    : i
    ? c.jsxs("p", { children: ["An error has occurred: ", i.message] })
    : ((document.title = "Talgtna | سجل الطلبات"),
      (o == null ? void 0 : o.orders.length) == 0
        ? c.jsx("div", {
            className: "w-full h-screen grid place-items-center",
            children: c.jsxs("div", {
              className:
                "bg-white w-11/12 md:w-5/6 shadow-md rounded px-8 pt-6 pb-8 mb-4 grid place-items-center",
              children: [
                c.jsx("i", {
                  className: "bx bxs-package text-primary text-[200px]",
                }),
                c.jsx("p", {
                  className: "text-center text-primary",
                  children: "لا يوجد طلبات",
                }),
              ],
            }),
          })
        : c.jsx("div", {
            className: "w-full h-auto grid place-items-center my-7 gap-5",
            children:
              o == null
                ? void 0
                : o.orders.map((a) => c.jsx(eE, { order: a }, a.id)),
          }));
}
function nE() {
  const { order: e } = Ll();
  return (
    (document.title = `Talgtna | رقم الطلب ${e}`),
    c.jsx("div", {
      className:
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[90vh] grid place-items-center",
      children: c.jsx("article", {
        className: "rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8",
        children: c.jsxs("div", {
          className: "flex items-center sm:gap-8",
          children: [
            c.jsx("div", {
              className:
                "hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-primary",
              "aria-hidden": "true",
              children: c.jsx("i", {
                className: "text-primary",
                children: "تم",
              }),
            }),
            c.jsx("div", {
              children: c.jsx("h3", {
                className: "mt-4 text-lg font-medium sm:text-xl",
                children: c.jsxs("a", {
                  className: "hover:underline",
                  children: ["تم إنشاء الطلب بنجاح رقم الطلب هو ( ", e, " )"],
                }),
              }),
            }),
          ],
        }),
      }),
    })
  );
}
function rE() {
  const { id: e } = Ll(),
    t = Mt((E) => E.isAuthenticated),
    n = Ie((E) => E.cart),
    r = Ie((E) => E.addToCart),
    i = Ie((E) => E.incrementQuantity),
    o = Ie((E) => E.decrementQuantity),
    [a, l] = N.useState(1),
    s = Ie((E) => E.getTotalQuantity());
  N.useEffect(() => {
    const E = parseInt(e),
      v = n.find((h) => h.id === E);
    v && l(v.quantity);
  }, [n, e, s]);
  const u = () => {
      const E = parseInt(e);
      n.find((h) => h.id === E) && i(y.id), a < 20 && l(a + 1);
    },
    d = () => {
      const E = parseInt(e);
      n.find((h) => h.id === E) && o(y.id), a > 1 && l(a - 1);
    },
    {
      isLoading: f,
      error: p,
      data: g,
    } = Fr("home", () => fetch(`${Cn}/products/${e}`).then((E) => E.json()));
  if (f) return c.jsx("p", { children: "Loading..." });
  if (p)
    return c.jsxs("p", { children: ["An error has occurred: ", p.message] });
  const y = (g == null ? void 0 : g.product) ?? {};
  document.title = `Talgtna | ${y.name}`;
  const w = {
    id: y.id,
    quantity: a,
    name: y.name,
    image: y.image,
    price: y.price,
  };
  return c.jsx("div", {
    className: "grid place-items-center ",
    children: c.jsxs(
      "div",
      {
        className:
          "product relative w-11/12 md:w-10/12 my-5 rounded p-2 shadow bg-white grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 place-items-center",
        children: [
          c.jsxs("section", {
            id: "productDitails",
            className: "flex flex-col gap-2 md:gap-5",
            children: [
              c.jsx("h1", {
                className: "text-2xl text-primary",
                children: y.name,
              }),
              c.jsx("p", {
                className: "text-gray-400",
                children: y.description,
              }),
              y.offer > 0
                ? c.jsxs(c.Fragment, {
                    children: [
                      c.jsxs("p", {
                        className: "line-through text-gray-500",
                        children: [y.price + y.offer, " ج"],
                      }),
                      c.jsxs("p", {
                        className: "text-primary font-bold",
                        children: [y.price, " ج"],
                      }),
                    ],
                  })
                : c.jsxs("p", { children: [y.price, " ج"] }),
              c.jsxs("div", {
                className: "cart grid gap-2 md:gap-5",
                children: [
                  c.jsxs("div", {
                    className:
                      "buttons flex border border-primary w-full md:w-64 items-center justify-between h-9 rounded gap-2 md:gap-5",
                    children: [
                      c.jsx("button", {
                        onClick: u,
                        className:
                          "w-full text-xl grid place-items-center cursor-pointer h-full duration-300 hover:bg-primary hover:text-white transition ease-in-out",
                        children: c.jsx("i", { className: "bx bx-plus" }),
                      }),
                      c.jsx("p", { className: "Quantity", children: a }),
                      c.jsx("button", {
                        onClick: d,
                        className:
                          "w-full text-xl grid place-items-center cursor-pointer h-full duration-300 hover:bg-primary hover:text-white transition ease-in-out",
                        children: c.jsx("i", { className: "bx bx-minus" }),
                      }),
                    ],
                  }),
                  c.jsx("button", {
                    onClick: () => r(w),
                    className:
                      "w-full md:w-64 h-9 rounded bg-primary text-white",
                    children: "اضافة الى السلة",
                  }),
                  t
                    ? c.jsx("button", {
                        className:
                          "absolute top-0 left-0 w-11 h-11 bg-primary text-white rounded grid place-items-center shadow-xl",
                        children: c.jsx("i", {
                          className: "bx bx-heart text-xl",
                        }),
                      })
                    : null,
                ],
              }),
            ],
          }),
          c.jsx("section", {
            id: "productImage ",
            className:
              "grid place-items-center w-full row-start-1 md:col-start-2",
            children: c.jsx("img", {
              src: `https://talgtna-backend.onrender.com${y.image}`,
              alt: y.name,
              className: "w-full md:w-[398px] rounded shadow",
            }),
          }),
        ],
      },
      y.id
    ),
  });
}
function iE() {
  const { name: e } = Ll(),
    {
      isLoading: t,
      error: n,
      data: r,
    } = Fr("company", () => fetch(`${Cn}/company/${e}`).then((a) => a.json()));
  if (((document.title = `Talgtna | ${e}`), t))
    return c.jsx("p", { children: "Loading..." });
  if (n)
    return c.jsxs("p", { children: ["An error has occurred: ", n.message] });
  const i = (r == null ? void 0 : r.company) ?? {},
    o = (r == null ? void 0 : r.products) ?? [];
  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs("div", {
        className:
          "company my-3 flex flex-col sm:flex-row gap-5 bg-white rounded shadow",
        children: [
          c.jsx("img", {
            src: `https://talgtna-backend.onrender.com${i.image}`,
            alt: i.name,
            className: "rounded w-full md:w-[225px] shadow",
          }),
          c.jsx("h1", {
            className: "text-2xl font-bold mt-3 text-primary text-center",
            children: i.name,
          }),
        ],
      }),
      c.jsx("div", {
        className:
          "products grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5",
        children: o.map((a) => c.jsx(td, { product: a, isFavorite: !1 }, a.id)),
      }),
    ],
  });
}
function oE({ coupon: e }) {
  const t = Ie((n) => n.setDiscount);
  return c.jsxs("div", {
    className: "w-11/12 md:w-5/6 relative",
    children: [
      c.jsxs("div", {
        className:
          "bg-white shadow-md h-32 rounded mb-4 grid place-items-center grid-cols-3 grid-rows-1",
        children: [
          c.jsx("div", {
            className:
              "body col-span-2 bg-primary w-full h-full grid place-items-center",
            children: c.jsx("h1", {
              className: "text-white text-center",
              children: e.code,
            }),
          }),
          c.jsxs("h1", {
            className: "col-span-1 rotate-90",
            children: [e.value, " EGP"],
          }),
        ],
      }),
      c.jsx("button", {
        onClick: () => t(e.code, e.value),
        className:
          "bg-primary text-white absolute h-10 w-24 rounded -top-10 left-0 cursor-pointer",
        children: "استخدام",
      }),
    ],
  });
}
function aE() {
  document.title = "Talgtna | كوبونات";
  const e = Mt((l) => l.token),
    t = Mt((l) => l.isAuthenticated),
    n = Io();
  t || (jt.error("يجب عليك تسجيل الدخول"), n("/"));
  const {
    isLoading: r,
    error: i,
    data: o,
  } = Fr("coupons", () =>
    fetch(`${Cn}/user/coupons`, {
      headers: { Authorization: `Bearer ${e}` },
    }).then((l) => l.json())
  );
  if (r) return c.jsx("p", { children: "Loading..." });
  if (i)
    return c.jsxs("p", { children: ["An error has occurred: ", i.message] });
  if ((o == null ? void 0 : o.coupons.length) == 0)
    return c.jsx("div", {
      className: "w-full h-screen grid place-items-center",
      children: c.jsxs("div", {
        className:
          "bg-white w-11/12 md:w-5/6 shadow-md rounded px-8 pt-6 pb-8 mb-4 grid place-items-center",
        children: [
          c.jsx("i", { className: "bx bxs-package text-primary text-[200px]" }),
          c.jsx("p", {
            className: "text-center text-primary",
            children: "لا يوجد كوبونات",
          }),
        ],
      }),
    });
  const a = o == null ? void 0 : o.coupons;
  return c.jsx("div", {
    className: "w-full h-screen grid place-items-center my-5",
    children: a == null ? void 0 : a.map((l) => c.jsx(oE, { coupon: l })),
  });
}
const lE = "/assets/logo-DQXFXrsM.png";
function sE() {
  const [e, t] = N.useState(!1),
    n = Mt((i) => i.isAuthenticated),
    r = Ie((i) => i.getTotalQuantity());
  return c.jsxs("nav", {
    className:
      "relative h-14 w-full bg-white shadow-sm flex items-center justify-between px-2 md:px-6 gap-5",
    children: [
      c.jsxs("div", {
        className: "firstSection flex gap-2 h-full items-center",
        children: [
          c.jsx("button", {
            id: "menuBtn",
            onClick: () => t(!e),
            children: c.jsx("i", { className: "bx bx-menu text-3xl" }),
          }),
          c.jsxs(xt, {
            to: "/cart",
            className: "cart relative",
            children: [
              c.jsx("span", {
                id: "cartQuantity",
                className: `${
                  r > 0 ? "block" : "hidden"
                } absolute bg-primary text-white p-1 rounded -top-2 -right-2`,
                children: r,
              }),
              c.jsx("i", { className: "bx bx-cart-alt text-3xl" }),
              c.jsx("p", {
                className: "text-3xl sr-only",
                children: "سلة الشراء",
              }),
            ],
          }),
          n
            ? c.jsxs(xt, {
                to: "/favorites",
                className: "login",
                children: [
                  c.jsx("i", { className: "bx bx-heart text-3xl" }),
                  c.jsx("p", {
                    className: "text-3xl sr-only",
                    children: "المفضلة",
                  }),
                ],
              })
            : null,
        ],
      }),
      c.jsxs("form", {
        action: "/search",
        className: "relative w-[60%]",
        children: [
          c.jsx("input", {
            type: "search",
            name: "query",
            placeholder: "ابحث عن منتجاتك ...",
            className:
              "w-full h-full border border-primary rounded-md px-3 py-1",
          }),
          c.jsx("button", {
            type: "submit",
            className:
              "absolute bg-primary top-1/2 -translate-y-1/2 w-11 left-0 h-full rounded-l-md",
            children: c.jsx("i", {
              className: "bx bx-search text-3xl text-white",
            }),
          }),
        ],
      }),
      c.jsx("div", {
        className: "thirdSection",
        children: c.jsx(xt, {
          to: "/",
          className: "logo",
          children: c.jsx("img", { src: lE, alt: "logo", className: "w-12" }),
        }),
      }),
      c.jsxs("div", {
        className: `menu absolute bg-white h-[90vh] w-[250px] top-[105%] rounded shadow-xl z-50 right-0 flex flex-col gap-4 p-4 duration-300 transition-all ${
          e ? "translate-x-0" : " translate-x-[250px]"
        }`,
        children: [
          n
            ? c.jsx(xt, {
                to: "/coupons",
                className:
                  "w-full py-2 duration-300 hover:bg-primary hover:pr-1 hover:text-white rounded",
                children: "القسائم",
              })
            : null,
          c.jsx(xt, {
            to: "/",
            className:
              "w-full py-2 duration-300 hover:bg-primary hover:pr-1 hover:text-white rounded",
            children: "الصفحة الرئيسية",
          }),
          n
            ? c.jsx(xt, {
                to: "/order/history",
                className:
                  "w-full py-2 duration-300 hover:bg-primary hover:pr-1 hover:text-white rounded",
                children: "سجل الطلبات",
              })
            : null,
          c.jsx(xt, {
            to: "/contact",
            className:
              "w-full py-2 duration-300 hover:bg-primary hover:pr-1 hover:text-white rounded",
            children: "أتصل بنا",
          }),
          c.jsx(xt, {
            to: "/about",
            className:
              "w-full py-2 duration-300 hover:bg-primary hover:pr-1 hover:text-white rounded",
            children: "معلومات عنا",
          }),
          c.jsx(xt, {
            to: "/complaint",
            className:
              "w-full py-2 duration-300 hover:bg-primary hover:pr-1 hover:text-white rounded",
            children: "الشكوي",
          }),
        ],
      }),
    ],
  });
}
const uE = new x1();
function cE() {
  return c.jsxs(c.Fragment, { children: [c.jsx(sE, {}), c.jsx(Mw, {})] });
}
const dE = Hw([
  {
    path: "/",
    element: c.jsx(cE, {}),
    children: [
      { index: !0, element: c.jsx(Jb, {}) },
      { path: "company/:name", element: c.jsx(iE, {}) },
      { path: "category/:name", element: c.jsx(Qb, {}) },
      { path: "contact", element: c.jsx(Yb, {}) },
      { path: "about", element: c.jsx(T1, {}) },
      { path: "complaint", element: c.jsx(Kb, {}) },
      { path: "products/:id", element: c.jsx(rE, {}) },
      { path: "order", element: c.jsx(Zb, {}) },
      { path: "ordersuccess/:order", element: c.jsx(nE, {}) },
      { path: "order/history", element: c.jsx(tE, {}) },
      { path: "favorites", element: c.jsx(Gb, {}) },
      { path: "coupons", element: c.jsx(aE, {}) },
      { path: "cart", element: c.jsx(Vb, {}) },
    ],
  },
]);
function fE() {
  const e = Ie((n) => n.setCart),
    t = Mt((n) => n.isLogedIn);
  return (
    e(),
    t(),
    c.jsxs(k1, {
      client: uE,
      children: [
        c.jsx(Bb, { position: "bottom-right", expand: !1, richColors: !0 }),
        c.jsx(Xw, { router: dE }),
      ],
    })
  );
}
Ls.createRoot(document.getElementById("root")).render(c.jsx(fE, {}));
