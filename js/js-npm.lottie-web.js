(self.webpackChunkaw_starter_wp = self.webpackChunkaw_starter_wp || []).push([
  [516],
  {
    234: (t, e, s) => {
      var i, a;
      "undefined" != typeof navigator &&
        ((a = window || {}),
        void 0 ===
          (i = function () {
            return (function (t) {
              "use strict";
              var e,
                s = "",
                i = -999999,
                a = !1,
                r = !0,
                n = "",
                h = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                o = Math.pow,
                l = Math.sqrt,
                p = Math.floor,
                f = (Math.max, Math.min),
                m = {};
              (function () {
                var t,
                  e = [
                    "abs",
                    "acos",
                    "acosh",
                    "asin",
                    "asinh",
                    "atan",
                    "atanh",
                    "atan2",
                    "ceil",
                    "cbrt",
                    "expm1",
                    "clz32",
                    "cos",
                    "cosh",
                    "exp",
                    "floor",
                    "fround",
                    "hypot",
                    "imul",
                    "log",
                    "log1p",
                    "log2",
                    "log10",
                    "max",
                    "min",
                    "pow",
                    "random",
                    "round",
                    "sign",
                    "sin",
                    "sinh",
                    "sqrt",
                    "tan",
                    "tanh",
                    "trunc",
                    "E",
                    "LN10",
                    "LN2",
                    "LOG10E",
                    "LOG2E",
                    "PI",
                    "SQRT1_2",
                    "SQRT2",
                  ],
                  s = e.length;
                for (t = 0; t < s; t += 1) m[e[t]] = Math[e[t]];
              })(),
                (m.random = Math.random),
                (m.abs = function (t) {
                  if ("object" == typeof t && t.length) {
                    var e,
                      s = I(t.length),
                      i = t.length;
                    for (e = 0; e < i; e += 1) s[e] = Math.abs(t[e]);
                    return s;
                  }
                  return Math.abs(t);
                });
              var d = 150,
                c = Math.PI / 180,
                u = 0.5519;
              function g(t) {
                t && Math.round;
              }
              function y(t, e, s, i) {
                (this.type = t),
                  (this.currentTime = e),
                  (this.totalTime = s),
                  (this.direction = i < 0 ? -1 : 1);
              }
              function v(t, e) {
                (this.type = t), (this.direction = e < 0 ? -1 : 1);
              }
              function b(t, e, s, i) {
                (this.type = t),
                  (this.currentLoop = s),
                  (this.totalLoops = e),
                  (this.direction = i < 0 ? -1 : 1);
              }
              function _(t, e, s) {
                (this.type = t), (this.firstFrame = e), (this.totalFrames = s);
              }
              function k(t, e) {
                (this.type = t), (this.target = e);
              }
              function A(t, e) {
                (this.type = "renderFrameError"),
                  (this.nativeError = t),
                  (this.currentTime = e);
              }
              function P(t) {
                (this.type = "configError"), (this.nativeError = t);
              }
              g(!1);
              var C,
                S =
                  ((C = 0),
                  function () {
                    return n + "__lottie_element_" + (C += 1);
                  });
              function D(t, e, s) {
                var i, a, r, n, h, o, l, p;
                switch (
                  ((o = s * (1 - e)),
                  (l = s * (1 - (h = 6 * t - (n = Math.floor(6 * t))) * e)),
                  (p = s * (1 - (1 - h) * e)),
                  n % 6)
                ) {
                  case 0:
                    (i = s), (a = p), (r = o);
                    break;
                  case 1:
                    (i = l), (a = s), (r = o);
                    break;
                  case 2:
                    (i = o), (a = s), (r = p);
                    break;
                  case 3:
                    (i = o), (a = l), (r = s);
                    break;
                  case 4:
                    (i = p), (a = o), (r = s);
                    break;
                  case 5:
                    (i = s), (a = o), (r = l);
                }
                return [i, a, r];
              }
              function x(t, e, s) {
                var i,
                  a = Math.max(t, e, s),
                  r = Math.min(t, e, s),
                  n = a - r,
                  h = 0 === a ? 0 : n / a,
                  o = a / 255;
                switch (a) {
                  case r:
                    i = 0;
                    break;
                  case t:
                    (i = e - s + n * (e < s ? 6 : 0)), (i /= 6 * n);
                    break;
                  case e:
                    (i = s - t + 2 * n), (i /= 6 * n);
                    break;
                  case s:
                    (i = t - e + 4 * n), (i /= 6 * n);
                }
                return [i, h, o];
              }
              function F(t, e) {
                var s = x(255 * t[0], 255 * t[1], 255 * t[2]);
                return (
                  (s[1] += e),
                  s[1] > 1 ? (s[1] = 1) : s[1] <= 0 && (s[1] = 0),
                  D(s[0], s[1], s[2])
                );
              }
              function M(t, e) {
                var s = x(255 * t[0], 255 * t[1], 255 * t[2]);
                return (
                  (s[2] += e),
                  s[2] > 1 ? (s[2] = 1) : s[2] < 0 && (s[2] = 0),
                  D(s[0], s[1], s[2])
                );
              }
              function w(t, e) {
                var s = x(255 * t[0], 255 * t[1], 255 * t[2]);
                return (
                  (s[0] += e / 360),
                  s[0] > 1 ? (s[0] -= 1) : s[0] < 0 && (s[0] += 1),
                  D(s[0], s[1], s[2])
                );
              }
              !(function () {
                var t,
                  e,
                  s = [];
                for (t = 0; t < 256; t += 1)
                  (e = t.toString(16)), (s[t] = 1 === e.length ? "0" + e : e);
              })();
              function E() {}
              E.prototype = {
                triggerEvent: function (t, e) {
                  if (this._cbs[t])
                    for (var s = this._cbs[t], i = 0; i < s.length; i += 1)
                      s[i](e);
                },
                addEventListener: function (t, e) {
                  return (
                    this._cbs[t] || (this._cbs[t] = []),
                    this._cbs[t].push(e),
                    function () {
                      this.removeEventListener(t, e);
                    }.bind(this)
                  );
                },
                removeEventListener: function (t, e) {
                  if (e) {
                    if (this._cbs[t]) {
                      for (var s = 0, i = this._cbs[t].length; s < i; )
                        this._cbs[t][s] === e &&
                          (this._cbs[t].splice(s, 1), (s -= 1), (i -= 1)),
                          (s += 1);
                      this._cbs[t].length || (this._cbs[t] = null);
                    }
                  } else this._cbs[t] = null;
                },
              };
              var T = (function () {
                function t(t, e) {
                  var s,
                    i = 0,
                    a = [];
                  switch (t) {
                    case "int16":
                    case "uint8c":
                      s = 1;
                      break;
                    default:
                      s = 1.1;
                  }
                  for (i = 0; i < e; i += 1) a.push(s);
                  return a;
                }
                return "function" == typeof Uint8ClampedArray &&
                  "function" == typeof Float32Array
                  ? function (e, s) {
                      return "float32" === e
                        ? new Float32Array(s)
                        : "int16" === e
                        ? new Int16Array(s)
                        : "uint8c" === e
                        ? new Uint8ClampedArray(s)
                        : t(e, s);
                    }
                  : t;
              })();
              function I(t) {
                return Array.apply(null, { length: t });
              }
              function L(t) {
                return document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  t
                );
              }
              function V(t) {
                return document.createElement(t);
              }
              function R() {}
              R.prototype = {
                addDynamicProperty: function (t) {
                  -1 === this.dynamicProperties.indexOf(t) &&
                    (this.dynamicProperties.push(t),
                    this.container.addDynamicProperty(this),
                    (this._isAnimated = !0));
                },
                iterateDynamicProperties: function () {
                  var t;
                  this._mdf = !1;
                  var e = this.dynamicProperties.length;
                  for (t = 0; t < e; t += 1)
                    this.dynamicProperties[t].getValue(),
                      this.dynamicProperties[t]._mdf && (this._mdf = !0);
                },
                initDynamicPropertyContainer: function (t) {
                  (this.container = t),
                    (this.dynamicProperties = []),
                    (this._mdf = !1),
                    (this._isAnimated = !1);
                },
              };
              var z,
                N =
                  ((z = {
                    0: "source-over",
                    1: "multiply",
                    2: "screen",
                    3: "overlay",
                    4: "darken",
                    5: "lighten",
                    6: "color-dodge",
                    7: "color-burn",
                    8: "hard-light",
                    9: "soft-light",
                    10: "difference",
                    11: "exclusion",
                    12: "hue",
                    13: "saturation",
                    14: "color",
                    15: "luminosity",
                  }),
                  function (t) {
                    return z[t] || "";
                  }),
                O = { 1: "butt", 2: "round", 3: "square" },
                B = { 1: "miter", 2: "round", 3: "bevel" },
                q = (function () {
                  var t = Math.cos,
                    e = Math.sin,
                    s = Math.tan,
                    i = Math.round;
                  function a() {
                    return (
                      (this.props[0] = 1),
                      (this.props[1] = 0),
                      (this.props[2] = 0),
                      (this.props[3] = 0),
                      (this.props[4] = 0),
                      (this.props[5] = 1),
                      (this.props[6] = 0),
                      (this.props[7] = 0),
                      (this.props[8] = 0),
                      (this.props[9] = 0),
                      (this.props[10] = 1),
                      (this.props[11] = 0),
                      (this.props[12] = 0),
                      (this.props[13] = 0),
                      (this.props[14] = 0),
                      (this.props[15] = 1),
                      this
                    );
                  }
                  function r(s) {
                    if (0 === s) return this;
                    var i = t(s),
                      a = e(s);
                    return this._t(
                      i,
                      -a,
                      0,
                      0,
                      a,
                      i,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1
                    );
                  }
                  function n(s) {
                    if (0 === s) return this;
                    var i = t(s),
                      a = e(s);
                    return this._t(
                      1,
                      0,
                      0,
                      0,
                      0,
                      i,
                      -a,
                      0,
                      0,
                      a,
                      i,
                      0,
                      0,
                      0,
                      0,
                      1
                    );
                  }
                  function h(s) {
                    if (0 === s) return this;
                    var i = t(s),
                      a = e(s);
                    return this._t(
                      i,
                      0,
                      a,
                      0,
                      0,
                      1,
                      0,
                      0,
                      -a,
                      0,
                      i,
                      0,
                      0,
                      0,
                      0,
                      1
                    );
                  }
                  function o(s) {
                    if (0 === s) return this;
                    var i = t(s),
                      a = e(s);
                    return this._t(
                      i,
                      -a,
                      0,
                      0,
                      a,
                      i,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1
                    );
                  }
                  function l(t, e) {
                    return this._t(1, e, t, 1, 0, 0);
                  }
                  function p(t, e) {
                    return this.shear(s(t), s(e));
                  }
                  function f(i, a) {
                    var r = t(a),
                      n = e(a);
                    return this._t(
                      r,
                      n,
                      0,
                      0,
                      -n,
                      r,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1
                    )
                      ._t(1, 0, 0, 0, s(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                      ._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                  }
                  function m(t, e, s) {
                    return (
                      s || 0 === s || (s = 1),
                      1 === t && 1 === e && 1 === s
                        ? this
                        : this._t(
                            t,
                            0,
                            0,
                            0,
                            0,
                            e,
                            0,
                            0,
                            0,
                            0,
                            s,
                            0,
                            0,
                            0,
                            0,
                            1
                          )
                    );
                  }
                  function d(t, e, s, i, a, r, n, h, o, l, p, f, m, d, c, u) {
                    return (
                      (this.props[0] = t),
                      (this.props[1] = e),
                      (this.props[2] = s),
                      (this.props[3] = i),
                      (this.props[4] = a),
                      (this.props[5] = r),
                      (this.props[6] = n),
                      (this.props[7] = h),
                      (this.props[8] = o),
                      (this.props[9] = l),
                      (this.props[10] = p),
                      (this.props[11] = f),
                      (this.props[12] = m),
                      (this.props[13] = d),
                      (this.props[14] = c),
                      (this.props[15] = u),
                      this
                    );
                  }
                  function c(t, e, s) {
                    return (
                      (s = s || 0),
                      0 !== t || 0 !== e || 0 !== s
                        ? this._t(
                            1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            t,
                            e,
                            s,
                            1
                          )
                        : this
                    );
                  }
                  function u(t, e, s, i, a, r, n, h, o, l, p, f, m, d, c, u) {
                    var g = this.props;
                    if (
                      1 === t &&
                      0 === e &&
                      0 === s &&
                      0 === i &&
                      0 === a &&
                      1 === r &&
                      0 === n &&
                      0 === h &&
                      0 === o &&
                      0 === l &&
                      1 === p &&
                      0 === f
                    )
                      return (
                        (g[12] = g[12] * t + g[15] * m),
                        (g[13] = g[13] * r + g[15] * d),
                        (g[14] = g[14] * p + g[15] * c),
                        (g[15] *= u),
                        (this._identityCalculated = !1),
                        this
                      );
                    var y = g[0],
                      v = g[1],
                      b = g[2],
                      _ = g[3],
                      k = g[4],
                      A = g[5],
                      P = g[6],
                      C = g[7],
                      S = g[8],
                      D = g[9],
                      x = g[10],
                      F = g[11],
                      M = g[12],
                      w = g[13],
                      E = g[14],
                      T = g[15];
                    return (
                      (g[0] = y * t + v * a + b * o + _ * m),
                      (g[1] = y * e + v * r + b * l + _ * d),
                      (g[2] = y * s + v * n + b * p + _ * c),
                      (g[3] = y * i + v * h + b * f + _ * u),
                      (g[4] = k * t + A * a + P * o + C * m),
                      (g[5] = k * e + A * r + P * l + C * d),
                      (g[6] = k * s + A * n + P * p + C * c),
                      (g[7] = k * i + A * h + P * f + C * u),
                      (g[8] = S * t + D * a + x * o + F * m),
                      (g[9] = S * e + D * r + x * l + F * d),
                      (g[10] = S * s + D * n + x * p + F * c),
                      (g[11] = S * i + D * h + x * f + F * u),
                      (g[12] = M * t + w * a + E * o + T * m),
                      (g[13] = M * e + w * r + E * l + T * d),
                      (g[14] = M * s + w * n + E * p + T * c),
                      (g[15] = M * i + w * h + E * f + T * u),
                      (this._identityCalculated = !1),
                      this
                    );
                  }
                  function g() {
                    return (
                      this._identityCalculated ||
                        ((this._identity = !(
                          1 !== this.props[0] ||
                          0 !== this.props[1] ||
                          0 !== this.props[2] ||
                          0 !== this.props[3] ||
                          0 !== this.props[4] ||
                          1 !== this.props[5] ||
                          0 !== this.props[6] ||
                          0 !== this.props[7] ||
                          0 !== this.props[8] ||
                          0 !== this.props[9] ||
                          1 !== this.props[10] ||
                          0 !== this.props[11] ||
                          0 !== this.props[12] ||
                          0 !== this.props[13] ||
                          0 !== this.props[14] ||
                          1 !== this.props[15]
                        )),
                        (this._identityCalculated = !0)),
                      this._identity
                    );
                  }
                  function y(t) {
                    for (var e = 0; e < 16; ) {
                      if (t.props[e] !== this.props[e]) return !1;
                      e += 1;
                    }
                    return !0;
                  }
                  function v(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                    return t;
                  }
                  function b(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) this.props[e] = t[e];
                  }
                  function _(t, e, s) {
                    return {
                      x:
                        t * this.props[0] +
                        e * this.props[4] +
                        s * this.props[8] +
                        this.props[12],
                      y:
                        t * this.props[1] +
                        e * this.props[5] +
                        s * this.props[9] +
                        this.props[13],
                      z:
                        t * this.props[2] +
                        e * this.props[6] +
                        s * this.props[10] +
                        this.props[14],
                    };
                  }
                  function k(t, e, s) {
                    return (
                      t * this.props[0] +
                      e * this.props[4] +
                      s * this.props[8] +
                      this.props[12]
                    );
                  }
                  function A(t, e, s) {
                    return (
                      t * this.props[1] +
                      e * this.props[5] +
                      s * this.props[9] +
                      this.props[13]
                    );
                  }
                  function P(t, e, s) {
                    return (
                      t * this.props[2] +
                      e * this.props[6] +
                      s * this.props[10] +
                      this.props[14]
                    );
                  }
                  function C() {
                    var t =
                        this.props[0] * this.props[5] -
                        this.props[1] * this.props[4],
                      e = this.props[5] / t,
                      s = -this.props[1] / t,
                      i = -this.props[4] / t,
                      a = this.props[0] / t,
                      r =
                        (this.props[4] * this.props[13] -
                          this.props[5] * this.props[12]) /
                        t,
                      n =
                        -(
                          this.props[0] * this.props[13] -
                          this.props[1] * this.props[12]
                        ) / t,
                      h = new q();
                    return (
                      (h.props[0] = e),
                      (h.props[1] = s),
                      (h.props[4] = i),
                      (h.props[5] = a),
                      (h.props[12] = r),
                      (h.props[13] = n),
                      h
                    );
                  }
                  function S(t) {
                    return this.getInverseMatrix().applyToPointArray(
                      t[0],
                      t[1],
                      t[2] || 0
                    );
                  }
                  function D(t) {
                    var e,
                      s = t.length,
                      i = [];
                    for (e = 0; e < s; e += 1) i[e] = S(t[e]);
                    return i;
                  }
                  function x(t, e, s) {
                    var i = T("float32", 6);
                    if (this.isIdentity())
                      (i[0] = t[0]),
                        (i[1] = t[1]),
                        (i[2] = e[0]),
                        (i[3] = e[1]),
                        (i[4] = s[0]),
                        (i[5] = s[1]);
                    else {
                      var a = this.props[0],
                        r = this.props[1],
                        n = this.props[4],
                        h = this.props[5],
                        o = this.props[12],
                        l = this.props[13];
                      (i[0] = t[0] * a + t[1] * n + o),
                        (i[1] = t[0] * r + t[1] * h + l),
                        (i[2] = e[0] * a + e[1] * n + o),
                        (i[3] = e[0] * r + e[1] * h + l),
                        (i[4] = s[0] * a + s[1] * n + o),
                        (i[5] = s[0] * r + s[1] * h + l);
                    }
                    return i;
                  }
                  function F(t, e, s) {
                    return this.isIdentity()
                      ? [t, e, s]
                      : [
                          t * this.props[0] +
                            e * this.props[4] +
                            s * this.props[8] +
                            this.props[12],
                          t * this.props[1] +
                            e * this.props[5] +
                            s * this.props[9] +
                            this.props[13],
                          t * this.props[2] +
                            e * this.props[6] +
                            s * this.props[10] +
                            this.props[14],
                        ];
                  }
                  function M(t, e) {
                    if (this.isIdentity()) return t + "," + e;
                    var s = this.props;
                    return (
                      Math.round(100 * (t * s[0] + e * s[4] + s[12])) / 100 +
                      "," +
                      Math.round(100 * (t * s[1] + e * s[5] + s[13])) / 100
                    );
                  }
                  function w() {
                    for (var t = 0, e = this.props, s = "matrix3d("; t < 16; )
                      (s += i(1e4 * e[t]) / 1e4),
                        (s += 15 === t ? ")" : ","),
                        (t += 1);
                    return s;
                  }
                  function E(t) {
                    return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0)
                      ? i(1e4 * t) / 1e4
                      : t;
                  }
                  function I() {
                    var t = this.props;
                    return (
                      "matrix(" +
                      E(t[0]) +
                      "," +
                      E(t[1]) +
                      "," +
                      E(t[4]) +
                      "," +
                      E(t[5]) +
                      "," +
                      E(t[12]) +
                      "," +
                      E(t[13]) +
                      ")"
                    );
                  }
                  return function () {
                    (this.reset = a),
                      (this.rotate = r),
                      (this.rotateX = n),
                      (this.rotateY = h),
                      (this.rotateZ = o),
                      (this.skew = p),
                      (this.skewFromAxis = f),
                      (this.shear = l),
                      (this.scale = m),
                      (this.setTransform = d),
                      (this.translate = c),
                      (this.transform = u),
                      (this.applyToPoint = _),
                      (this.applyToX = k),
                      (this.applyToY = A),
                      (this.applyToZ = P),
                      (this.applyToPointArray = F),
                      (this.applyToTriplePoints = x),
                      (this.applyToPointStringified = M),
                      (this.toCSS = w),
                      (this.to2dCSS = I),
                      (this.clone = v),
                      (this.cloneFromProps = b),
                      (this.equals = y),
                      (this.inversePoints = D),
                      (this.inversePoint = S),
                      (this.getInverseMatrix = C),
                      (this._t = this.transform),
                      (this.isIdentity = g),
                      (this._identity = !0),
                      (this._identityCalculated = !1),
                      (this.props = T("float32", 16)),
                      this.reset();
                  };
                })();
              !(function (t, e) {
                var s,
                  i = this,
                  a = 256,
                  r = e.pow(a, 6),
                  n = e.pow(2, 52),
                  h = 2 * n,
                  o = 255;
                function l(t) {
                  var e,
                    s = t.length,
                    i = this,
                    r = 0,
                    n = (i.i = i.j = 0),
                    h = (i.S = []);
                  for (s || (t = [s++]); r < a; ) h[r] = r++;
                  for (r = 0; r < a; r++)
                    (h[r] = h[(n = o & (n + t[r % s] + (e = h[r])))]),
                      (h[n] = e);
                  i.g = function (t) {
                    for (var e, s = 0, r = i.i, n = i.j, h = i.S; t--; )
                      (e = h[(r = o & (r + 1))]),
                        (s =
                          s * a +
                          h[o & ((h[r] = h[(n = o & (n + e))]) + (h[n] = e))]);
                    return (i.i = r), (i.j = n), s;
                  };
                }
                function p(t, e) {
                  return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
                }
                function f(t, e) {
                  var s,
                    i = [],
                    a = typeof t;
                  if (e && "object" == a)
                    for (s in t)
                      try {
                        i.push(f(t[s], e - 1));
                      } catch (t) {}
                  return i.length ? i : "string" == a ? t : t + "\0";
                }
                function m(t, e) {
                  for (var s, i = t + "", a = 0; a < i.length; )
                    e[o & a] = o & ((s ^= 19 * e[o & a]) + i.charCodeAt(a++));
                  return d(e);
                }
                function d(t) {
                  return String.fromCharCode.apply(0, t);
                }
                (e.seedrandom = function (o, c, u) {
                  var g = [],
                    y = m(
                      f(
                        (c = !0 === c ? { entropy: !0 } : c || {}).entropy
                          ? [o, d(t)]
                          : null === o
                          ? (function () {
                              try {
                                s;
                                var e = new Uint8Array(a);
                                return (
                                  (i.crypto || i.msCrypto).getRandomValues(e),
                                  d(e)
                                );
                              } catch (e) {
                                var r = i.navigator,
                                  n = r && r.plugins;
                                return [+new Date(), i, n, i.screen, d(t)];
                              }
                            })()
                          : o,
                        3
                      ),
                      g
                    ),
                    v = new l(g),
                    b = function () {
                      for (var t = v.g(6), e = r, s = 0; t < n; )
                        (t = (t + s) * a), (e *= a), (s = v.g(1));
                      for (; t >= h; ) (t /= 2), (e /= 2), (s >>>= 1);
                      return (t + s) / e;
                    };
                  return (
                    (b.int32 = function () {
                      return 0 | v.g(4);
                    }),
                    (b.quick = function () {
                      return v.g(4) / 4294967296;
                    }),
                    (b.double = b),
                    m(d(v.S), t),
                    (
                      c.pass ||
                      u ||
                      function (t, s, i, a) {
                        return (
                          a &&
                            (a.S && p(a, v),
                            (t.state = function () {
                              return p(v, {});
                            })),
                          i ? ((e.random = t), s) : t
                        );
                      }
                    )(b, y, "global" in c ? c.global : this == e, c.state)
                  );
                }),
                  m(e.random(), t);
              })([], m);
              var j = (function () {
                var t = {
                    getBezierEasing: function (t, s, i, a, r) {
                      var n =
                        r ||
                        ("bez_" + t + "_" + s + "_" + i + "_" + a).replace(
                          /\./g,
                          "p"
                        );
                      if (e[n]) return e[n];
                      var h = new l([t, s, i, a]);
                      return (e[n] = h), h;
                    },
                  },
                  e = {};
                var s = 0.1,
                  i = "function" == typeof Float32Array;
                function a(t, e) {
                  return 1 - 3 * e + 3 * t;
                }
                function r(t, e) {
                  return 3 * e - 6 * t;
                }
                function n(t) {
                  return 3 * t;
                }
                function h(t, e, s) {
                  return ((a(e, s) * t + r(e, s)) * t + n(e)) * t;
                }
                function o(t, e, s) {
                  return 3 * a(e, s) * t * t + 2 * r(e, s) * t + n(e);
                }
                function l(t) {
                  (this._p = t),
                    (this._mSampleValues = i
                      ? new Float32Array(11)
                      : new Array(11)),
                    (this._precomputed = !1),
                    (this.get = this.get.bind(this));
                }
                return (
                  (l.prototype = {
                    get: function (t) {
                      var e = this._p[0],
                        s = this._p[1],
                        i = this._p[2],
                        a = this._p[3];
                      return (
                        this._precomputed || this._precompute(),
                        e === s && i === a
                          ? t
                          : 0 === t
                          ? 0
                          : 1 === t
                          ? 1
                          : h(this._getTForX(t), s, a)
                      );
                    },
                    _precompute: function () {
                      var t = this._p[0],
                        e = this._p[1],
                        s = this._p[2],
                        i = this._p[3];
                      (this._precomputed = !0),
                        (t === e && s === i) || this._calcSampleValues();
                    },
                    _calcSampleValues: function () {
                      for (
                        var t = this._p[0], e = this._p[2], i = 0;
                        i < 11;
                        ++i
                      )
                        this._mSampleValues[i] = h(i * s, t, e);
                    },
                    _getTForX: function (t) {
                      for (
                        var e = this._p[0],
                          i = this._p[2],
                          a = this._mSampleValues,
                          r = 0,
                          n = 1;
                        10 !== n && a[n] <= t;
                        ++n
                      )
                        r += s;
                      var l = r + ((t - a[--n]) / (a[n + 1] - a[n])) * s,
                        p = o(l, e, i);
                      return p >= 0.001
                        ? (function (t, e, s, i) {
                            for (var a = 0; a < 4; ++a) {
                              var r = o(e, s, i);
                              if (0 === r) return e;
                              e -= (h(e, s, i) - t) / r;
                            }
                            return e;
                          })(t, l, e, i)
                        : 0 === p
                        ? l
                        : (function (t, e, s, i, a) {
                            var r,
                              n,
                              o = 0;
                            do {
                              (r = h((n = e + (s - e) / 2), i, a) - t) > 0
                                ? (s = n)
                                : (e = n);
                            } while (Math.abs(r) > 1e-7 && ++o < 10);
                            return n;
                          })(t, r, r + s, e, i);
                    },
                  }),
                  t
                );
              })();
              function W(t, e) {
                var s,
                  i,
                  a = t.length;
                for (s = 0; s < a; s += 1)
                  for (var r in (i = t[s].prototype))
                    Object.prototype.hasOwnProperty.call(i, r) &&
                      (e.prototype[r] = i[r]);
              }
              !(function () {
                for (
                  var e = 0, s = ["ms", "moz", "webkit", "o"], i = 0;
                  i < s.length && !t.requestAnimationFrame;
                  ++i
                )
                  (t.requestAnimationFrame = t[s[i] + "RequestAnimationFrame"]),
                    (t.cancelAnimationFrame =
                      t[s[i] + "CancelAnimationFrame"] ||
                      t[s[i] + "CancelRequestAnimationFrame"]);
                t.requestAnimationFrame ||
                  (t.requestAnimationFrame = function (t) {
                    var s = new Date().getTime(),
                      i = Math.max(0, 16 - (s - e)),
                      a = setTimeout(function () {
                        t(s + i);
                      }, i);
                    return (e = s + i), a;
                  }),
                  t.cancelAnimationFrame ||
                    (t.cancelAnimationFrame = function (t) {
                      clearTimeout(t);
                    });
              })();
              var G = (function () {
                  var t = Math;
                  function e(t, e, s, i, a, r) {
                    var n = t * i + e * a + s * r - a * i - r * t - s * e;
                    return n > -0.001 && n < 0.001;
                  }
                  var s = function (t, e, s, i) {
                    var a,
                      r,
                      n,
                      h,
                      p,
                      f,
                      m = d,
                      c = 0,
                      u = [],
                      g = [],
                      y = St.newElement();
                    for (n = s.length, a = 0; a < m; a += 1) {
                      for (p = a / (m - 1), f = 0, r = 0; r < n; r += 1)
                        (h =
                          o(1 - p, 3) * t[r] +
                          3 * o(1 - p, 2) * p * s[r] +
                          3 * (1 - p) * o(p, 2) * i[r] +
                          o(p, 3) * e[r]),
                          (u[r] = h),
                          null !== g[r] && (f += o(u[r] - g[r], 2)),
                          (g[r] = u[r]);
                      f && (c += f = l(f)),
                        (y.percents[a] = p),
                        (y.lengths[a] = c);
                    }
                    return (y.addedLength = c), y;
                  };
                  function i(t) {
                    (this.segmentLength = 0), (this.points = new Array(t));
                  }
                  function a(t, e) {
                    (this.partialLength = t), (this.point = e);
                  }
                  var r,
                    n =
                      ((r = {}),
                      function (t, s, n, h) {
                        var p = (
                          t[0] +
                          "_" +
                          t[1] +
                          "_" +
                          s[0] +
                          "_" +
                          s[1] +
                          "_" +
                          n[0] +
                          "_" +
                          n[1] +
                          "_" +
                          h[0] +
                          "_" +
                          h[1]
                        ).replace(/\./g, "p");
                        if (!r[p]) {
                          var f,
                            m,
                            c,
                            u,
                            g,
                            y,
                            v,
                            b = d,
                            _ = 0,
                            k = null;
                          2 === t.length &&
                            (t[0] !== s[0] || t[1] !== s[1]) &&
                            e(
                              t[0],
                              t[1],
                              s[0],
                              s[1],
                              t[0] + n[0],
                              t[1] + n[1]
                            ) &&
                            e(
                              t[0],
                              t[1],
                              s[0],
                              s[1],
                              s[0] + h[0],
                              s[1] + h[1]
                            ) &&
                            (b = 2);
                          var A = new i(b);
                          for (c = n.length, f = 0; f < b; f += 1) {
                            for (
                              v = I(c), g = f / (b - 1), y = 0, m = 0;
                              m < c;
                              m += 1
                            )
                              (u =
                                o(1 - g, 3) * t[m] +
                                3 * o(1 - g, 2) * g * (t[m] + n[m]) +
                                3 * (1 - g) * o(g, 2) * (s[m] + h[m]) +
                                o(g, 3) * s[m]),
                                (v[m] = u),
                                null !== k && (y += o(v[m] - k[m], 2));
                            (_ += y = l(y)),
                              (A.points[f] = new a(y, v)),
                              (k = v);
                          }
                          (A.segmentLength = _), (r[p] = A);
                        }
                        return r[p];
                      });
                  function h(t, e) {
                    var s = e.percents,
                      i = e.lengths,
                      a = s.length,
                      r = p((a - 1) * t),
                      n = t * e.addedLength,
                      h = 0;
                    if (r === a - 1 || 0 === r || n === i[r]) return s[r];
                    for (var o = i[r] > n ? -1 : 1, l = !0; l; )
                      if (
                        (i[r] <= n && i[r + 1] > n
                          ? ((h = (n - i[r]) / (i[r + 1] - i[r])), (l = !1))
                          : (r += o),
                        r < 0 || r >= a - 1)
                      ) {
                        if (r === a - 1) return s[r];
                        l = !1;
                      }
                    return s[r] + (s[r + 1] - s[r]) * h;
                  }
                  var f = T("float32", 8);
                  return {
                    getSegmentsLength: function (t) {
                      var e,
                        i = Ct.newElement(),
                        a = t.c,
                        r = t.v,
                        n = t.o,
                        h = t.i,
                        o = t._length,
                        l = i.lengths,
                        p = 0;
                      for (e = 0; e < o - 1; e += 1)
                        (l[e] = s(r[e], r[e + 1], n[e], h[e + 1])),
                          (p += l[e].addedLength);
                      return (
                        a &&
                          o &&
                          ((l[e] = s(r[e], r[0], n[e], h[0])),
                          (p += l[e].addedLength)),
                        (i.totalLength = p),
                        i
                      );
                    },
                    getNewSegment: function (e, s, i, a, r, n, o) {
                      r < 0 ? (r = 0) : r > 1 && (r = 1);
                      var l,
                        p = h(r, o),
                        m = h((n = n > 1 ? 1 : n), o),
                        d = e.length,
                        c = 1 - p,
                        u = 1 - m,
                        g = c * c * c,
                        y = p * c * c * 3,
                        v = p * p * c * 3,
                        b = p * p * p,
                        _ = c * c * u,
                        k = p * c * u + c * p * u + c * c * m,
                        A = p * p * u + c * p * m + p * c * m,
                        P = p * p * m,
                        C = c * u * u,
                        S = p * u * u + c * m * u + c * u * m,
                        D = p * m * u + c * m * m + p * u * m,
                        x = p * m * m,
                        F = u * u * u,
                        M = m * u * u + u * m * u + u * u * m,
                        w = m * m * u + u * m * m + m * u * m,
                        E = m * m * m;
                      for (l = 0; l < d; l += 1)
                        (f[4 * l] =
                          t.round(
                            1e3 * (g * e[l] + y * i[l] + v * a[l] + b * s[l])
                          ) / 1e3),
                          (f[4 * l + 1] =
                            t.round(
                              1e3 * (_ * e[l] + k * i[l] + A * a[l] + P * s[l])
                            ) / 1e3),
                          (f[4 * l + 2] =
                            t.round(
                              1e3 * (C * e[l] + S * i[l] + D * a[l] + x * s[l])
                            ) / 1e3),
                          (f[4 * l + 3] =
                            t.round(
                              1e3 * (F * e[l] + M * i[l] + w * a[l] + E * s[l])
                            ) / 1e3);
                      return f;
                    },
                    getPointInSegment: function (e, s, i, a, r, n) {
                      var o = h(r, n),
                        l = 1 - o;
                      return [
                        t.round(
                          1e3 *
                            (l * l * l * e[0] +
                              (o * l * l + l * o * l + l * l * o) * i[0] +
                              (o * o * l + l * o * o + o * l * o) * a[0] +
                              o * o * o * s[0])
                        ) / 1e3,
                        t.round(
                          1e3 *
                            (l * l * l * e[1] +
                              (o * l * l + l * o * l + l * l * o) * i[1] +
                              (o * o * l + l * o * o + o * l * o) * a[1] +
                              o * o * o * s[1])
                        ) / 1e3,
                      ];
                    },
                    buildBezierData: n,
                    pointOnLine2D: e,
                    pointOnLine3D: function (s, i, a, r, n, h, o, l, p) {
                      if (0 === a && 0 === h && 0 === p)
                        return e(s, i, r, n, o, l);
                      var f,
                        m = t.sqrt(
                          t.pow(r - s, 2) + t.pow(n - i, 2) + t.pow(h - a, 2)
                        ),
                        d = t.sqrt(
                          t.pow(o - s, 2) + t.pow(l - i, 2) + t.pow(p - a, 2)
                        ),
                        c = t.sqrt(
                          t.pow(o - r, 2) + t.pow(l - n, 2) + t.pow(p - h, 2)
                        );
                      return (
                        (f =
                          m > d
                            ? m > c
                              ? m - d - c
                              : c - d - m
                            : c > d
                            ? c - d - m
                            : d - m - c) > -1e-4 && f < 1e-4
                      );
                    },
                  };
                })(),
                H = (function () {
                  var e,
                    s,
                    i = 1,
                    r = [],
                    n = {
                      onmessage: function () {},
                      postMessage: function (t) {
                        e({ data: t });
                      },
                    },
                    h = {
                      postMessage: function (t) {
                        n.onmessage({ data: t });
                      },
                    };
                  function o() {
                    s ||
                      ((s = (function (s) {
                        if (t.Worker && t.Blob && a) {
                          var i = new Blob(
                              [
                                "var _workerSelf = self; self.onmessage = ",
                                s.toString(),
                              ],
                              { type: "text/javascript" }
                            ),
                            r = URL.createObjectURL(i);
                          return new Worker(r);
                        }
                        return (e = s), n;
                      })(function (t) {
                        if (
                          (h.dataManager ||
                            (h.dataManager = (function () {
                              function t(a, r) {
                                var n,
                                  h,
                                  o,
                                  l,
                                  p,
                                  f,
                                  m,
                                  d = a.length;
                                for (h = 0; h < d; h += 1)
                                  if ("ks" in (n = a[h]) && !n.completed) {
                                    if (
                                      ((n.completed = !0),
                                      n.tt && (a[h - 1].td = n.tt),
                                      n.hasMask)
                                    ) {
                                      var c = n.masksProperties;
                                      for (l = c.length, o = 0; o < l; o += 1)
                                        if (c[o].pt.k.i) i(c[o].pt.k);
                                        else
                                          for (
                                            f = c[o].pt.k.length, p = 0;
                                            p < f;
                                            p += 1
                                          )
                                            c[o].pt.k[p].s &&
                                              i(c[o].pt.k[p].s[0]),
                                              c[o].pt.k[p].e &&
                                                i(c[o].pt.k[p].e[0]);
                                    }
                                    0 === n.ty
                                      ? ((n.layers = e(n.refId, r)),
                                        t(n.layers, r))
                                      : 4 === n.ty
                                      ? s(n.shapes)
                                      : 5 === n.ty &&
                                        (0 !== (m = n).t.a.length ||
                                          "m" in m.t.p ||
                                          (m.singleShape = !0));
                                  }
                              }
                              function e(t, e) {
                                for (var s = 0, i = e.length; s < i; ) {
                                  if (e[s].id === t)
                                    return e[s].layers.__used
                                      ? JSON.parse(JSON.stringify(e[s].layers))
                                      : ((e[s].layers.__used = !0),
                                        e[s].layers);
                                  s += 1;
                                }
                                return null;
                              }
                              function s(t) {
                                var e, a, r;
                                for (e = t.length - 1; e >= 0; e -= 1)
                                  if ("sh" === t[e].ty)
                                    if (t[e].ks.k.i) i(t[e].ks.k);
                                    else
                                      for (
                                        r = t[e].ks.k.length, a = 0;
                                        a < r;
                                        a += 1
                                      )
                                        t[e].ks.k[a].s && i(t[e].ks.k[a].s[0]),
                                          t[e].ks.k[a].e &&
                                            i(t[e].ks.k[a].e[0]);
                                  else "gr" === t[e].ty && s(t[e].it);
                              }
                              function i(t) {
                                var e,
                                  s = t.i.length;
                                for (e = 0; e < s; e += 1)
                                  (t.i[e][0] += t.v[e][0]),
                                    (t.i[e][1] += t.v[e][1]),
                                    (t.o[e][0] += t.v[e][0]),
                                    (t.o[e][1] += t.v[e][1]);
                              }
                              function a(t, e) {
                                var s = e ? e.split(".") : [100, 100, 100];
                                return (
                                  t[0] > s[0] ||
                                  (!(s[0] > t[0]) &&
                                    (t[1] > s[1] ||
                                      (!(s[1] > t[1]) &&
                                        (t[2] > s[2] ||
                                          (!(s[2] > t[2]) && null)))))
                                );
                              }
                              var r,
                                n = (function () {
                                  var t = [4, 4, 14];
                                  function e(t) {
                                    var e,
                                      s,
                                      i,
                                      a = t.length;
                                    for (e = 0; e < a; e += 1)
                                      5 === t[e].ty &&
                                        ((s = t[e]),
                                        (i = void 0),
                                        (i = s.t.d),
                                        (s.t.d = { k: [{ s: i, t: 0 }] }));
                                  }
                                  return function (s) {
                                    if (a(t, s.v) && (e(s.layers), s.assets)) {
                                      var i,
                                        r = s.assets.length;
                                      for (i = 0; i < r; i += 1)
                                        s.assets[i].layers &&
                                          e(s.assets[i].layers);
                                    }
                                  };
                                })(),
                                h =
                                  ((r = [4, 7, 99]),
                                  function (t) {
                                    if (t.chars && !a(r, t.v)) {
                                      var e,
                                        s,
                                        n,
                                        h,
                                        o,
                                        l = t.chars.length;
                                      for (e = 0; e < l; e += 1)
                                        if (
                                          t.chars[e].data &&
                                          t.chars[e].data.shapes
                                        )
                                          for (
                                            n = (o =
                                              t.chars[e].data.shapes[0].it)
                                              .length,
                                              s = 0;
                                            s < n;
                                            s += 1
                                          )
                                            (h = o[s].ks.k).__converted ||
                                              (i(o[s].ks.k),
                                              (h.__converted = !0));
                                    }
                                  }),
                                o = (function () {
                                  var t = [5, 7, 15];
                                  function e(t) {
                                    var e,
                                      s,
                                      i,
                                      a = t.length;
                                    for (e = 0; e < a; e += 1)
                                      5 === t[e].ty &&
                                        ((s = t[e]),
                                        (i = void 0),
                                        "number" == typeof (i = s.t.p).a &&
                                          (i.a = { a: 0, k: i.a }),
                                        "number" == typeof i.p &&
                                          (i.p = { a: 0, k: i.p }),
                                        "number" == typeof i.r &&
                                          (i.r = { a: 0, k: i.r }));
                                  }
                                  return function (s) {
                                    if (a(t, s.v) && (e(s.layers), s.assets)) {
                                      var i,
                                        r = s.assets.length;
                                      for (i = 0; i < r; i += 1)
                                        s.assets[i].layers &&
                                          e(s.assets[i].layers);
                                    }
                                  };
                                })(),
                                l = (function () {
                                  var t = [4, 1, 9];
                                  function e(t) {
                                    var s,
                                      i,
                                      a,
                                      r = t.length;
                                    for (s = 0; s < r; s += 1)
                                      if ("gr" === t[s].ty) e(t[s].it);
                                      else if (
                                        "fl" === t[s].ty ||
                                        "st" === t[s].ty
                                      )
                                        if (t[s].c.k && t[s].c.k[0].i)
                                          for (
                                            a = t[s].c.k.length, i = 0;
                                            i < a;
                                            i += 1
                                          )
                                            t[s].c.k[i].s &&
                                              ((t[s].c.k[i].s[0] /= 255),
                                              (t[s].c.k[i].s[1] /= 255),
                                              (t[s].c.k[i].s[2] /= 255),
                                              (t[s].c.k[i].s[3] /= 255)),
                                              t[s].c.k[i].e &&
                                                ((t[s].c.k[i].e[0] /= 255),
                                                (t[s].c.k[i].e[1] /= 255),
                                                (t[s].c.k[i].e[2] /= 255),
                                                (t[s].c.k[i].e[3] /= 255));
                                        else
                                          (t[s].c.k[0] /= 255),
                                            (t[s].c.k[1] /= 255),
                                            (t[s].c.k[2] /= 255),
                                            (t[s].c.k[3] /= 255);
                                  }
                                  function s(t) {
                                    var s,
                                      i = t.length;
                                    for (s = 0; s < i; s += 1)
                                      4 === t[s].ty && e(t[s].shapes);
                                  }
                                  return function (e) {
                                    if (a(t, e.v) && (s(e.layers), e.assets)) {
                                      var i,
                                        r = e.assets.length;
                                      for (i = 0; i < r; i += 1)
                                        e.assets[i].layers &&
                                          s(e.assets[i].layers);
                                    }
                                  };
                                })(),
                                p = (function () {
                                  var t = [4, 4, 18];
                                  function e(t) {
                                    var s, i, a;
                                    for (s = t.length - 1; s >= 0; s -= 1)
                                      if ("sh" === t[s].ty)
                                        if (t[s].ks.k.i)
                                          t[s].ks.k.c = t[s].closed;
                                        else
                                          for (
                                            a = t[s].ks.k.length, i = 0;
                                            i < a;
                                            i += 1
                                          )
                                            t[s].ks.k[i].s &&
                                              (t[s].ks.k[i].s[0].c =
                                                t[s].closed),
                                              t[s].ks.k[i].e &&
                                                (t[s].ks.k[i].e[0].c =
                                                  t[s].closed);
                                      else "gr" === t[s].ty && e(t[s].it);
                                  }
                                  function s(t) {
                                    var s,
                                      i,
                                      a,
                                      r,
                                      n,
                                      h,
                                      o = t.length;
                                    for (i = 0; i < o; i += 1) {
                                      if ((s = t[i]).hasMask) {
                                        var l = s.masksProperties;
                                        for (r = l.length, a = 0; a < r; a += 1)
                                          if (l[a].pt.k.i)
                                            l[a].pt.k.c = l[a].cl;
                                          else
                                            for (
                                              h = l[a].pt.k.length, n = 0;
                                              n < h;
                                              n += 1
                                            )
                                              l[a].pt.k[n].s &&
                                                (l[a].pt.k[n].s[0].c = l[a].cl),
                                                l[a].pt.k[n].e &&
                                                  (l[a].pt.k[n].e[0].c =
                                                    l[a].cl);
                                      }
                                      4 === s.ty && e(s.shapes);
                                    }
                                  }
                                  return function (e) {
                                    if (a(t, e.v) && (s(e.layers), e.assets)) {
                                      var i,
                                        r = e.assets.length;
                                      for (i = 0; i < r; i += 1)
                                        e.assets[i].layers &&
                                          s(e.assets[i].layers);
                                    }
                                  };
                                })(),
                                f = {
                                  completeData: function (e) {
                                    e.__complete ||
                                      (l(e),
                                      n(e),
                                      h(e),
                                      o(e),
                                      p(e),
                                      t(e.layers, e.assets),
                                      (e.__complete = !0));
                                  },
                                };
                              return (
                                (f.checkColors = l),
                                (f.checkChars = h),
                                (f.checkPathProperties = o),
                                (f.checkShapes = p),
                                (f.completeLayers = t),
                                f
                              );
                            })()),
                          h.assetLoader ||
                            (h.assetLoader = (function () {
                              function t(t) {
                                var e = t.getResponseHeader("content-type");
                                return (e &&
                                  "json" === t.responseType &&
                                  -1 !== e.indexOf("json")) ||
                                  (t.response && "object" == typeof t.response)
                                  ? t.response
                                  : t.response && "string" == typeof t.response
                                  ? JSON.parse(t.response)
                                  : t.responseText
                                  ? JSON.parse(t.responseText)
                                  : null;
                              }
                              return {
                                load: function (e, s, i, a) {
                                  var r,
                                    n = new XMLHttpRequest();
                                  try {
                                    n.responseType = "json";
                                  } catch (t) {}
                                  n.onreadystatechange = function () {
                                    if (4 === n.readyState)
                                      if (200 === n.status) (r = t(n)), i(r);
                                      else
                                        try {
                                          (r = t(n)), i(r);
                                        } catch (t) {
                                          a && a(t);
                                        }
                                  };
                                  try {
                                    n.open("GET", e, !0);
                                  } catch (t) {
                                    n.open("GET", s + "/" + e, !0);
                                  }
                                  n.send();
                                },
                              };
                            })()),
                          "loadAnimation" === t.data.type)
                        )
                          h.assetLoader.load(
                            t.data.path,
                            t.data.fullPath,
                            function (e) {
                              h.dataManager.completeData(e),
                                h.postMessage({
                                  id: t.data.id,
                                  payload: e,
                                  status: "success",
                                });
                            },
                            function () {
                              h.postMessage({ id: t.data.id, status: "error" });
                            }
                          );
                        else if ("complete" === t.data.type) {
                          var e = t.data.animation;
                          h.dataManager.completeData(e),
                            h.postMessage({
                              id: t.data.id,
                              payload: e,
                              status: "success",
                            });
                        } else
                          "loadData" === t.data.type &&
                            h.assetLoader.load(
                              t.data.path,
                              t.data.fullPath,
                              function (e) {
                                h.postMessage({
                                  id: t.data.id,
                                  payload: e,
                                  status: "success",
                                });
                              },
                              function () {
                                h.postMessage({
                                  id: t.data.id,
                                  status: "error",
                                });
                              }
                            );
                      })),
                      (s.onmessage = function (t) {
                        var e = t.data,
                          s = e.id,
                          i = r[s];
                        (r[s] = null),
                          "success" === e.status
                            ? i.onComplete(e.payload)
                            : i.onError && i.onError();
                      }));
                  }
                  function l(t, e) {
                    var s = "processId_" + (i += 1);
                    return (r[s] = { onComplete: t, onError: e }), s;
                  }
                  return {
                    loadAnimation: function (e, i, a) {
                      o();
                      var r = l(i, a);
                      s.postMessage({
                        type: "loadAnimation",
                        path: e,
                        fullPath: t.location.origin + t.location.pathname,
                        id: r,
                      });
                    },
                    loadData: function (e, i, a) {
                      o();
                      var r = l(i, a);
                      s.postMessage({
                        type: "loadData",
                        path: e,
                        fullPath: t.location.origin + t.location.pathname,
                        id: r,
                      });
                    },
                    completeAnimation: function (t, e, i) {
                      o();
                      var a = l(e, i);
                      s.postMessage({ type: "complete", animation: t, id: a });
                    },
                  };
                })();
              function X(t) {
                for (
                  var e = t.fStyle ? t.fStyle.split(" ") : [],
                    s = "normal",
                    i = "normal",
                    a = e.length,
                    r = 0;
                  r < a;
                  r += 1
                )
                  switch (e[r].toLowerCase()) {
                    case "italic":
                      i = "italic";
                      break;
                    case "bold":
                      s = "700";
                      break;
                    case "black":
                      s = "900";
                      break;
                    case "medium":
                      s = "500";
                      break;
                    case "regular":
                    case "normal":
                      s = "400";
                      break;
                    case "light":
                    case "thin":
                      s = "200";
                  }
                return { style: i, weight: t.fWeight || s };
              }
              var Y = (function () {
                  var t = { w: 0, size: 0, shapes: [] },
                    e = [];
                  e = e.concat([
                    2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367,
                    2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377,
                    2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390,
                    2391, 2402, 2403,
                  ]);
                  var s = [
                      "d83cdffb",
                      "d83cdffc",
                      "d83cdffd",
                      "d83cdffe",
                      "d83cdfff",
                    ],
                    i = [65039, 8205];
                  function a(t, e) {
                    var s = V("span");
                    s.setAttribute("aria-hidden", !0), (s.style.fontFamily = e);
                    var i = V("span");
                    (i.innerText = "giItT1WQy@!-/#"),
                      (s.style.position = "absolute"),
                      (s.style.left = "-10000px"),
                      (s.style.top = "-10000px"),
                      (s.style.fontSize = "300px"),
                      (s.style.fontVariant = "normal"),
                      (s.style.fontStyle = "normal"),
                      (s.style.fontWeight = "normal"),
                      (s.style.letterSpacing = "0"),
                      s.appendChild(i),
                      document.body.appendChild(s);
                    var a = i.offsetWidth;
                    return (
                      (i.style.fontFamily =
                        (function (t) {
                          var e,
                            s = t.split(","),
                            i = s.length,
                            a = [];
                          for (e = 0; e < i; e += 1)
                            "sans-serif" !== s[e] &&
                              "monospace" !== s[e] &&
                              a.push(s[e]);
                          return a.join(",");
                        })(t) +
                        ", " +
                        e),
                      { node: i, w: a, parent: s }
                    );
                  }
                  function r(t, e) {
                    var s = L("text");
                    s.style.fontSize = "100px";
                    var i = X(e);
                    return (
                      s.setAttribute("font-family", e.fFamily),
                      s.setAttribute("font-style", i.style),
                      s.setAttribute("font-weight", i.weight),
                      (s.textContent = "1"),
                      e.fClass
                        ? ((s.style.fontFamily = "inherit"),
                          s.setAttribute("class", e.fClass))
                        : (s.style.fontFamily = e.fFamily),
                      t.appendChild(s),
                      (V("canvas").getContext("2d").font =
                        e.fWeight + " " + e.fStyle + " 100px " + e.fFamily),
                      s
                    );
                  }
                  var n = function () {
                    (this.fonts = []),
                      (this.chars = null),
                      (this.typekitLoaded = 0),
                      (this.isLoaded = !1),
                      (this._warned = !1),
                      (this.initTime = Date.now()),
                      (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
                      (this.checkLoadedFontsBinded =
                        this.checkLoadedFonts.bind(this));
                  };
                  return (
                    (n.isModifier = function (t, e) {
                      var i = t.toString(16) + e.toString(16);
                      return -1 !== s.indexOf(i);
                    }),
                    (n.isZeroWidthJoiner = function (t, e) {
                      return e ? t === i[0] && e === i[1] : t === i[1];
                    }),
                    (n.isCombinedCharacter = function (t) {
                      return -1 !== e.indexOf(t);
                    }),
                    (n.prototype = {
                      addChars: function (t) {
                        if (t) {
                          var e;
                          this.chars || (this.chars = []);
                          var s,
                            i,
                            a = t.length,
                            r = this.chars.length;
                          for (e = 0; e < a; e += 1) {
                            for (s = 0, i = !1; s < r; )
                              this.chars[s].style === t[e].style &&
                                this.chars[s].fFamily === t[e].fFamily &&
                                this.chars[s].ch === t[e].ch &&
                                (i = !0),
                                (s += 1);
                            i || (this.chars.push(t[e]), (r += 1));
                          }
                        }
                      },
                      addFonts: function (t, e) {
                        if (t) {
                          if (this.chars)
                            return (
                              (this.isLoaded = !0), void (this.fonts = t.list)
                            );
                          var s,
                            i = t.list,
                            n = i.length,
                            h = n;
                          for (s = 0; s < n; s += 1) {
                            var o,
                              l,
                              p = !0;
                            if (
                              ((i[s].loaded = !1),
                              (i[s].monoCase = a(i[s].fFamily, "monospace")),
                              (i[s].sansCase = a(i[s].fFamily, "sans-serif")),
                              i[s].fPath)
                            ) {
                              if ("p" === i[s].fOrigin || 3 === i[s].origin) {
                                if (
                                  ((o = document.querySelectorAll(
                                    'style[f-forigin="p"][f-family="' +
                                      i[s].fFamily +
                                      '"], style[f-origin="3"][f-family="' +
                                      i[s].fFamily +
                                      '"]'
                                  )).length > 0 && (p = !1),
                                  p)
                                ) {
                                  var f = V("style");
                                  f.setAttribute("f-forigin", i[s].fOrigin),
                                    f.setAttribute("f-origin", i[s].origin),
                                    f.setAttribute("f-family", i[s].fFamily),
                                    (f.type = "text/css"),
                                    (f.innerText =
                                      "@font-face {font-family: " +
                                      i[s].fFamily +
                                      "; font-style: normal; src: url('" +
                                      i[s].fPath +
                                      "');}"),
                                    e.appendChild(f);
                                }
                              } else if (
                                "g" === i[s].fOrigin ||
                                1 === i[s].origin
                              ) {
                                for (
                                  o = document.querySelectorAll(
                                    'link[f-forigin="g"], link[f-origin="1"]'
                                  ),
                                    l = 0;
                                  l < o.length;
                                  l += 1
                                )
                                  -1 !== o[l].href.indexOf(i[s].fPath) &&
                                    (p = !1);
                                if (p) {
                                  var m = V("link");
                                  m.setAttribute("f-forigin", i[s].fOrigin),
                                    m.setAttribute("f-origin", i[s].origin),
                                    (m.type = "text/css"),
                                    (m.rel = "stylesheet"),
                                    (m.href = i[s].fPath),
                                    document.body.appendChild(m);
                                }
                              } else if (
                                "t" === i[s].fOrigin ||
                                2 === i[s].origin
                              ) {
                                for (
                                  o = document.querySelectorAll(
                                    'script[f-forigin="t"], script[f-origin="2"]'
                                  ),
                                    l = 0;
                                  l < o.length;
                                  l += 1
                                )
                                  i[s].fPath === o[l].src && (p = !1);
                                if (p) {
                                  var d = V("link");
                                  d.setAttribute("f-forigin", i[s].fOrigin),
                                    d.setAttribute("f-origin", i[s].origin),
                                    d.setAttribute("rel", "stylesheet"),
                                    d.setAttribute("href", i[s].fPath),
                                    e.appendChild(d);
                                }
                              }
                            } else (i[s].loaded = !0), (h -= 1);
                            (i[s].helper = r(e, i[s])),
                              (i[s].cache = {}),
                              this.fonts.push(i[s]);
                          }
                          0 === h
                            ? (this.isLoaded = !0)
                            : setTimeout(this.checkLoadedFonts.bind(this), 100);
                        } else this.isLoaded = !0;
                      },
                      getCharData: function (e, s, i) {
                        for (var a = 0, r = this.chars.length; a < r; ) {
                          if (
                            this.chars[a].ch === e &&
                            this.chars[a].style === s &&
                            this.chars[a].fFamily === i
                          )
                            return this.chars[a];
                          a += 1;
                        }
                        return (
                          (("string" == typeof e && 13 !== e.charCodeAt(0)) ||
                            !e) &&
                            console &&
                            console.warn &&
                            !this._warned &&
                            ((this._warned = !0),
                            console.warn(
                              "Missing character from exported characters list: ",
                              e,
                              s,
                              i
                            )),
                          t
                        );
                      },
                      getFontByName: function (t) {
                        for (var e = 0, s = this.fonts.length; e < s; ) {
                          if (this.fonts[e].fName === t) return this.fonts[e];
                          e += 1;
                        }
                        return this.fonts[0];
                      },
                      measureText: function (t, e, s) {
                        var i = this.getFontByName(e),
                          a = t.charCodeAt(0);
                        if (!i.cache[a + 1]) {
                          var r = i.helper;
                          if (" " === t) {
                            r.textContent = "|" + t + "|";
                            var n = r.getComputedTextLength();
                            r.textContent = "||";
                            var h = r.getComputedTextLength();
                            i.cache[a + 1] = (n - h) / 100;
                          } else
                            (r.textContent = t),
                              (i.cache[a + 1] =
                                r.getComputedTextLength() / 100);
                        }
                        return i.cache[a + 1] * s;
                      },
                      checkLoadedFonts: function () {
                        var t,
                          e,
                          s,
                          i = this.fonts.length,
                          a = i;
                        for (t = 0; t < i; t += 1)
                          this.fonts[t].loaded
                            ? (a -= 1)
                            : "n" === this.fonts[t].fOrigin ||
                              0 === this.fonts[t].origin
                            ? (this.fonts[t].loaded = !0)
                            : ((e = this.fonts[t].monoCase.node),
                              (s = this.fonts[t].monoCase.w),
                              e.offsetWidth !== s
                                ? ((a -= 1), (this.fonts[t].loaded = !0))
                                : ((e = this.fonts[t].sansCase.node),
                                  (s = this.fonts[t].sansCase.w),
                                  e.offsetWidth !== s &&
                                    ((a -= 1), (this.fonts[t].loaded = !0))),
                              this.fonts[t].loaded &&
                                (this.fonts[
                                  t
                                ].sansCase.parent.parentNode.removeChild(
                                  this.fonts[t].sansCase.parent
                                ),
                                this.fonts[
                                  t
                                ].monoCase.parent.parentNode.removeChild(
                                  this.fonts[t].monoCase.parent
                                )));
                        0 !== a && Date.now() - this.initTime < 5e3
                          ? setTimeout(this.checkLoadedFontsBinded, 20)
                          : setTimeout(this.setIsLoadedBinded, 10);
                      },
                      setIsLoaded: function () {
                        this.isLoaded = !0;
                      },
                    }),
                    n
                  );
                })(),
                J = (function () {
                  var t = i,
                    e = Math.abs;
                  function s(t, e) {
                    var s,
                      i = this.offsetTime;
                    "multidimensional" === this.propType &&
                      (s = T("float32", this.pv.length));
                    for (
                      var r,
                        n,
                        h,
                        o,
                        l,
                        p,
                        f,
                        m,
                        d,
                        u = e.lastIndex,
                        g = u,
                        y = this.keyframes.length - 1,
                        v = !0;
                      v;

                    ) {
                      if (
                        ((r = this.keyframes[g]),
                        (n = this.keyframes[g + 1]),
                        g === y - 1 && t >= n.t - i)
                      ) {
                        r.h && (r = n), (u = 0);
                        break;
                      }
                      if (n.t - i > t) {
                        u = g;
                        break;
                      }
                      g < y - 1 ? (g += 1) : ((u = 0), (v = !1));
                    }
                    h = this.keyframesMetadata[g] || {};
                    var b,
                      _,
                      k,
                      A,
                      P,
                      C,
                      S,
                      D,
                      x,
                      F,
                      M,
                      w,
                      E,
                      I,
                      L,
                      V,
                      R,
                      z,
                      N = n.t - i,
                      O = r.t - i;
                    if (r.to) {
                      h.bezierData ||
                        (h.bezierData = G.buildBezierData(
                          r.s,
                          n.s || r.e,
                          r.to,
                          r.ti
                        ));
                      var B = h.bezierData;
                      if (t >= N || t < O) {
                        var q = t >= N ? B.points.length - 1 : 0;
                        for (l = B.points[q].point.length, o = 0; o < l; o += 1)
                          s[o] = B.points[q].point[o];
                      } else {
                        h.__fnct
                          ? (d = h.__fnct)
                          : ((d = j.getBezierEasing(
                              r.o.x,
                              r.o.y,
                              r.i.x,
                              r.i.y,
                              r.n
                            ).get),
                            (h.__fnct = d)),
                          (p = d((t - O) / (N - O)));
                        var W,
                          H = B.segmentLength * p,
                          X =
                            e.lastFrame < t && e._lastKeyframeIndex === g
                              ? e._lastAddedLength
                              : 0;
                        for (
                          m =
                            e.lastFrame < t && e._lastKeyframeIndex === g
                              ? e._lastPoint
                              : 0,
                            v = !0,
                            f = B.points.length;
                          v;

                        ) {
                          if (
                            ((X += B.points[m].partialLength),
                            0 === H || 0 === p || m === B.points.length - 1)
                          ) {
                            for (
                              l = B.points[m].point.length, o = 0;
                              o < l;
                              o += 1
                            )
                              s[o] = B.points[m].point[o];
                            break;
                          }
                          if (H >= X && H < X + B.points[m + 1].partialLength) {
                            for (
                              W = (H - X) / B.points[m + 1].partialLength,
                                l = B.points[m].point.length,
                                o = 0;
                              o < l;
                              o += 1
                            )
                              s[o] =
                                B.points[m].point[o] +
                                (B.points[m + 1].point[o] -
                                  B.points[m].point[o]) *
                                  W;
                            break;
                          }
                          m < f - 1 ? (m += 1) : (v = !1);
                        }
                        (e._lastPoint = m),
                          (e._lastAddedLength = X - B.points[m].partialLength),
                          (e._lastKeyframeIndex = g);
                      }
                    } else {
                      var Y, J, K, U, Z;
                      if (
                        ((y = r.s.length),
                        (b = n.s || r.e),
                        this.sh && 1 !== r.h)
                      )
                        t >= N
                          ? ((s[0] = b[0]), (s[1] = b[1]), (s[2] = b[2]))
                          : t <= O
                          ? ((s[0] = r.s[0]), (s[1] = r.s[1]), (s[2] = r.s[2]))
                          : (function (t, e) {
                              var s = e[0],
                                i = e[1],
                                a = e[2],
                                r = e[3],
                                n = Math.atan2(
                                  2 * i * r - 2 * s * a,
                                  1 - 2 * i * i - 2 * a * a
                                ),
                                h = Math.asin(2 * s * i + 2 * a * r),
                                o = Math.atan2(
                                  2 * s * r - 2 * i * a,
                                  1 - 2 * s * s - 2 * a * a
                                );
                              (t[0] = n / c), (t[1] = h / c), (t[2] = o / c);
                            })(
                              s,
                              ((_ = a(r.s)),
                              (k = a(b)),
                              (A = (t - O) / (N - O)),
                              (F = []),
                              (M = _[0]),
                              (w = _[1]),
                              (E = _[2]),
                              (I = _[3]),
                              (L = k[0]),
                              (V = k[1]),
                              (R = k[2]),
                              (z = k[3]),
                              (C = M * L + w * V + E * R + I * z) < 0 &&
                                ((C = -C),
                                (L = -L),
                                (V = -V),
                                (R = -R),
                                (z = -z)),
                              1 - C > 1e-6
                                ? ((P = Math.acos(C)),
                                  (S = Math.sin(P)),
                                  (D = Math.sin((1 - A) * P) / S),
                                  (x = Math.sin(A * P) / S))
                                : ((D = 1 - A), (x = A)),
                              (F[0] = D * M + x * L),
                              (F[1] = D * w + x * V),
                              (F[2] = D * E + x * R),
                              (F[3] = D * I + x * z),
                              F)
                            );
                      else
                        for (g = 0; g < y; g += 1)
                          1 !== r.h &&
                            (t >= N
                              ? (p = 1)
                              : t < O
                              ? (p = 0)
                              : (r.o.x.constructor === Array
                                  ? (h.__fnct || (h.__fnct = []),
                                    h.__fnct[g]
                                      ? (d = h.__fnct[g])
                                      : ((Y =
                                          void 0 === r.o.x[g]
                                            ? r.o.x[0]
                                            : r.o.x[g]),
                                        (J =
                                          void 0 === r.o.y[g]
                                            ? r.o.y[0]
                                            : r.o.y[g]),
                                        (K =
                                          void 0 === r.i.x[g]
                                            ? r.i.x[0]
                                            : r.i.x[g]),
                                        (U =
                                          void 0 === r.i.y[g]
                                            ? r.i.y[0]
                                            : r.i.y[g]),
                                        (d = j.getBezierEasing(Y, J, K, U).get),
                                        (h.__fnct[g] = d)))
                                  : h.__fnct
                                  ? (d = h.__fnct)
                                  : ((Y = r.o.x),
                                    (J = r.o.y),
                                    (K = r.i.x),
                                    (U = r.i.y),
                                    (d = j.getBezierEasing(Y, J, K, U).get),
                                    (r.keyframeMetadata = d)),
                                (p = d((t - O) / (N - O))))),
                            (b = n.s || r.e),
                            (Z =
                              1 === r.h
                                ? r.s[g]
                                : r.s[g] + (b[g] - r.s[g]) * p),
                            "multidimensional" === this.propType
                              ? (s[g] = Z)
                              : (s = Z);
                    }
                    return (e.lastIndex = u), s;
                  }
                  function a(t) {
                    var e = t[0] * c,
                      s = t[1] * c,
                      i = t[2] * c,
                      a = Math.cos(e / 2),
                      r = Math.cos(s / 2),
                      n = Math.cos(i / 2),
                      h = Math.sin(e / 2),
                      o = Math.sin(s / 2),
                      l = Math.sin(i / 2);
                    return [
                      h * o * n + a * r * l,
                      h * r * n + a * o * l,
                      a * o * n - h * r * l,
                      a * r * n - h * o * l,
                    ];
                  }
                  function r() {
                    var e = this.comp.renderedFrame - this.offsetTime,
                      s = this.keyframes[0].t - this.offsetTime,
                      i =
                        this.keyframes[this.keyframes.length - 1].t -
                        this.offsetTime;
                    if (
                      !(
                        e === this._caching.lastFrame ||
                        (this._caching.lastFrame !== t &&
                          ((this._caching.lastFrame >= i && e >= i) ||
                            (this._caching.lastFrame < s && e < s)))
                      )
                    ) {
                      this._caching.lastFrame >= e &&
                        ((this._caching._lastKeyframeIndex = -1),
                        (this._caching.lastIndex = 0));
                      var a = this.interpolateValue(e, this._caching);
                      this.pv = a;
                    }
                    return (this._caching.lastFrame = e), this.pv;
                  }
                  function n(t) {
                    var s;
                    if ("unidimensional" === this.propType)
                      (s = t * this.mult),
                        e(this.v - s) > 1e-5 &&
                          ((this.v = s), (this._mdf = !0));
                    else
                      for (var i = 0, a = this.v.length; i < a; )
                        (s = t[i] * this.mult),
                          e(this.v[i] - s) > 1e-5 &&
                            ((this.v[i] = s), (this._mdf = !0)),
                          (i += 1);
                  }
                  function h() {
                    if (
                      this.elem.globalData.frameId !== this.frameId &&
                      this.effectsSequence.length
                    )
                      if (this.lock) this.setVValue(this.pv);
                      else {
                        var t;
                        (this.lock = !0), (this._mdf = this._isFirstFrame);
                        var e = this.effectsSequence.length,
                          s = this.kf ? this.pv : this.data.k;
                        for (t = 0; t < e; t += 1)
                          s = this.effectsSequence[t](s);
                        this.setVValue(s),
                          (this._isFirstFrame = !1),
                          (this.lock = !1),
                          (this.frameId = this.elem.globalData.frameId);
                      }
                  }
                  function o(t) {
                    this.effectsSequence.push(t),
                      this.container.addDynamicProperty(this);
                  }
                  function l(t, e, s, i) {
                    (this.propType = "unidimensional"),
                      (this.mult = s || 1),
                      (this.data = e),
                      (this.v = s ? e.k * s : e.k),
                      (this.pv = e.k),
                      (this._mdf = !1),
                      (this.elem = t),
                      (this.container = i),
                      (this.comp = t.comp),
                      (this.k = !1),
                      (this.kf = !1),
                      (this.vel = 0),
                      (this.effectsSequence = []),
                      (this._isFirstFrame = !0),
                      (this.getValue = h),
                      (this.setVValue = n),
                      (this.addEffect = o);
                  }
                  function p(t, e, s, i) {
                    var a;
                    (this.propType = "multidimensional"),
                      (this.mult = s || 1),
                      (this.data = e),
                      (this._mdf = !1),
                      (this.elem = t),
                      (this.container = i),
                      (this.comp = t.comp),
                      (this.k = !1),
                      (this.kf = !1),
                      (this.frameId = -1);
                    var r = e.k.length;
                    for (
                      this.v = T("float32", r),
                        this.pv = T("float32", r),
                        this.vel = T("float32", r),
                        a = 0;
                      a < r;
                      a += 1
                    )
                      (this.v[a] = e.k[a] * this.mult), (this.pv[a] = e.k[a]);
                    (this._isFirstFrame = !0),
                      (this.effectsSequence = []),
                      (this.getValue = h),
                      (this.setVValue = n),
                      (this.addEffect = o);
                  }
                  function f(e, i, a, l) {
                    (this.propType = "unidimensional"),
                      (this.keyframes = i.k),
                      (this.keyframesMetadata = []),
                      (this.offsetTime = e.data.st),
                      (this.frameId = -1),
                      (this._caching = {
                        lastFrame: t,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1,
                      }),
                      (this.k = !0),
                      (this.kf = !0),
                      (this.data = i),
                      (this.mult = a || 1),
                      (this.elem = e),
                      (this.container = l),
                      (this.comp = e.comp),
                      (this.v = t),
                      (this.pv = t),
                      (this._isFirstFrame = !0),
                      (this.getValue = h),
                      (this.setVValue = n),
                      (this.interpolateValue = s),
                      (this.effectsSequence = [r.bind(this)]),
                      (this.addEffect = o);
                  }
                  function m(e, i, a, l) {
                    var p;
                    this.propType = "multidimensional";
                    var f,
                      m,
                      d,
                      c,
                      u = i.k.length;
                    for (p = 0; p < u - 1; p += 1)
                      i.k[p].to &&
                        i.k[p].s &&
                        i.k[p + 1] &&
                        i.k[p + 1].s &&
                        ((f = i.k[p].s),
                        (m = i.k[p + 1].s),
                        (d = i.k[p].to),
                        (c = i.k[p].ti),
                        ((2 === f.length &&
                          (f[0] !== m[0] || f[1] !== m[1]) &&
                          G.pointOnLine2D(
                            f[0],
                            f[1],
                            m[0],
                            m[1],
                            f[0] + d[0],
                            f[1] + d[1]
                          ) &&
                          G.pointOnLine2D(
                            f[0],
                            f[1],
                            m[0],
                            m[1],
                            m[0] + c[0],
                            m[1] + c[1]
                          )) ||
                          (3 === f.length &&
                            (f[0] !== m[0] || f[1] !== m[1] || f[2] !== m[2]) &&
                            G.pointOnLine3D(
                              f[0],
                              f[1],
                              f[2],
                              m[0],
                              m[1],
                              m[2],
                              f[0] + d[0],
                              f[1] + d[1],
                              f[2] + d[2]
                            ) &&
                            G.pointOnLine3D(
                              f[0],
                              f[1],
                              f[2],
                              m[0],
                              m[1],
                              m[2],
                              m[0] + c[0],
                              m[1] + c[1],
                              m[2] + c[2]
                            ))) &&
                          ((i.k[p].to = null), (i.k[p].ti = null)),
                        f[0] === m[0] &&
                          f[1] === m[1] &&
                          0 === d[0] &&
                          0 === d[1] &&
                          0 === c[0] &&
                          0 === c[1] &&
                          (2 === f.length ||
                            (f[2] === m[2] && 0 === d[2] && 0 === c[2])) &&
                          ((i.k[p].to = null), (i.k[p].ti = null)));
                    (this.effectsSequence = [r.bind(this)]),
                      (this.data = i),
                      (this.keyframes = i.k),
                      (this.keyframesMetadata = []),
                      (this.offsetTime = e.data.st),
                      (this.k = !0),
                      (this.kf = !0),
                      (this._isFirstFrame = !0),
                      (this.mult = a || 1),
                      (this.elem = e),
                      (this.container = l),
                      (this.comp = e.comp),
                      (this.getValue = h),
                      (this.setVValue = n),
                      (this.interpolateValue = s),
                      (this.frameId = -1);
                    var g = i.k[0].s.length;
                    for (
                      this.v = T("float32", g),
                        this.pv = T("float32", g),
                        p = 0;
                      p < g;
                      p += 1
                    )
                      (this.v[p] = t), (this.pv[p] = t);
                    (this._caching = {
                      lastFrame: t,
                      lastIndex: 0,
                      value: T("float32", g),
                    }),
                      (this.addEffect = o);
                  }
                  return {
                    getProp: function (t, e, s, i, a) {
                      var r;
                      if (e.k.length)
                        if ("number" == typeof e.k[0]) r = new p(t, e, i, a);
                        else
                          switch (s) {
                            case 0:
                              r = new f(t, e, i, a);
                              break;
                            case 1:
                              r = new m(t, e, i, a);
                          }
                      else r = new l(t, e, i, a);
                      return (
                        r.effectsSequence.length && a.addDynamicProperty(r), r
                      );
                    },
                  };
                })(),
                K = (function () {
                  var t = [0, 0];
                  function e(t, e, s) {
                    if (
                      ((this.elem = t),
                      (this.frameId = -1),
                      (this.propType = "transform"),
                      (this.data = e),
                      (this.v = new q()),
                      (this.pre = new q()),
                      (this.appliedTransformations = 0),
                      this.initDynamicPropertyContainer(s || t),
                      e.p && e.p.s
                        ? ((this.px = J.getProp(t, e.p.x, 0, 0, this)),
                          (this.py = J.getProp(t, e.p.y, 0, 0, this)),
                          e.p.z && (this.pz = J.getProp(t, e.p.z, 0, 0, this)))
                        : (this.p = J.getProp(
                            t,
                            e.p || { k: [0, 0, 0] },
                            1,
                            0,
                            this
                          )),
                      e.rx)
                    ) {
                      if (
                        ((this.rx = J.getProp(t, e.rx, 0, c, this)),
                        (this.ry = J.getProp(t, e.ry, 0, c, this)),
                        (this.rz = J.getProp(t, e.rz, 0, c, this)),
                        e.or.k[0].ti)
                      ) {
                        var i,
                          a = e.or.k.length;
                        for (i = 0; i < a; i += 1)
                          (e.or.k[i].to = null), (e.or.k[i].ti = null);
                      }
                      (this.or = J.getProp(t, e.or, 1, c, this)),
                        (this.or.sh = !0);
                    } else this.r = J.getProp(t, e.r || { k: 0 }, 0, c, this);
                    e.sk &&
                      ((this.sk = J.getProp(t, e.sk, 0, c, this)),
                      (this.sa = J.getProp(t, e.sa, 0, c, this))),
                      (this.a = J.getProp(
                        t,
                        e.a || { k: [0, 0, 0] },
                        1,
                        0,
                        this
                      )),
                      (this.s = J.getProp(
                        t,
                        e.s || { k: [100, 100, 100] },
                        1,
                        0.01,
                        this
                      )),
                      e.o
                        ? (this.o = J.getProp(t, e.o, 0, 0.01, t))
                        : (this.o = { _mdf: !1, v: 1 }),
                      (this._isDirty = !0),
                      this.dynamicProperties.length || this.getValue(!0);
                  }
                  return (
                    (e.prototype = {
                      applyToMatrix: function (t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(),
                          (this._mdf = this._mdf || e),
                          this.a &&
                            t.translate(
                              -this.a.v[0],
                              -this.a.v[1],
                              this.a.v[2]
                            ),
                          this.s &&
                            t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                          this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                          this.r
                            ? t.rotate(-this.r.v)
                            : t
                                .rotateZ(-this.rz.v)
                                .rotateY(this.ry.v)
                                .rotateX(this.rx.v)
                                .rotateZ(-this.or.v[2])
                                .rotateY(this.or.v[1])
                                .rotateX(this.or.v[0]),
                          this.data.p.s
                            ? this.data.p.z
                              ? t.translate(this.px.v, this.py.v, -this.pz.v)
                              : t.translate(this.px.v, this.py.v, 0)
                            : t.translate(
                                this.p.v[0],
                                this.p.v[1],
                                -this.p.v[2]
                              );
                      },
                      getValue: function (e) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                          if (
                            (this._isDirty &&
                              (this.precalculateMatrix(), (this._isDirty = !1)),
                            this.iterateDynamicProperties(),
                            this._mdf || e)
                          ) {
                            var s;
                            if (
                              (this.v.cloneFromProps(this.pre.props),
                              this.appliedTransformations < 1 &&
                                this.v.translate(
                                  -this.a.v[0],
                                  -this.a.v[1],
                                  this.a.v[2]
                                ),
                              this.appliedTransformations < 2 &&
                                this.v.scale(
                                  this.s.v[0],
                                  this.s.v[1],
                                  this.s.v[2]
                                ),
                              this.sk &&
                                this.appliedTransformations < 3 &&
                                this.v.skewFromAxis(-this.sk.v, this.sa.v),
                              this.r && this.appliedTransformations < 4
                                ? this.v.rotate(-this.r.v)
                                : !this.r &&
                                  this.appliedTransformations < 4 &&
                                  this.v
                                    .rotateZ(-this.rz.v)
                                    .rotateY(this.ry.v)
                                    .rotateX(this.rx.v)
                                    .rotateZ(-this.or.v[2])
                                    .rotateY(this.or.v[1])
                                    .rotateX(this.or.v[0]),
                              this.autoOriented)
                            ) {
                              var i, a;
                              if (
                                ((s = this.elem.globalData.frameRate),
                                this.p &&
                                  this.p.keyframes &&
                                  this.p.getValueAtTime)
                              )
                                this.p._caching.lastFrame + this.p.offsetTime <=
                                this.p.keyframes[0].t
                                  ? ((i = this.p.getValueAtTime(
                                      (this.p.keyframes[0].t + 0.01) / s,
                                      0
                                    )),
                                    (a = this.p.getValueAtTime(
                                      this.p.keyframes[0].t / s,
                                      0
                                    )))
                                  : this.p._caching.lastFrame +
                                      this.p.offsetTime >=
                                    this.p.keyframes[
                                      this.p.keyframes.length - 1
                                    ].t
                                  ? ((i = this.p.getValueAtTime(
                                      this.p.keyframes[
                                        this.p.keyframes.length - 1
                                      ].t / s,
                                      0
                                    )),
                                    (a = this.p.getValueAtTime(
                                      (this.p.keyframes[
                                        this.p.keyframes.length - 1
                                      ].t -
                                        0.05) /
                                        s,
                                      0
                                    )))
                                  : ((i = this.p.pv),
                                    (a = this.p.getValueAtTime(
                                      (this.p._caching.lastFrame +
                                        this.p.offsetTime -
                                        0.01) /
                                        s,
                                      this.p.offsetTime
                                    )));
                              else if (
                                this.px &&
                                this.px.keyframes &&
                                this.py.keyframes &&
                                this.px.getValueAtTime &&
                                this.py.getValueAtTime
                              ) {
                                (i = []), (a = []);
                                var r = this.px,
                                  n = this.py;
                                r._caching.lastFrame + r.offsetTime <=
                                r.keyframes[0].t
                                  ? ((i[0] = r.getValueAtTime(
                                      (r.keyframes[0].t + 0.01) / s,
                                      0
                                    )),
                                    (i[1] = n.getValueAtTime(
                                      (n.keyframes[0].t + 0.01) / s,
                                      0
                                    )),
                                    (a[0] = r.getValueAtTime(
                                      r.keyframes[0].t / s,
                                      0
                                    )),
                                    (a[1] = n.getValueAtTime(
                                      n.keyframes[0].t / s,
                                      0
                                    )))
                                  : r._caching.lastFrame + r.offsetTime >=
                                    r.keyframes[r.keyframes.length - 1].t
                                  ? ((i[0] = r.getValueAtTime(
                                      r.keyframes[r.keyframes.length - 1].t / s,
                                      0
                                    )),
                                    (i[1] = n.getValueAtTime(
                                      n.keyframes[n.keyframes.length - 1].t / s,
                                      0
                                    )),
                                    (a[0] = r.getValueAtTime(
                                      (r.keyframes[r.keyframes.length - 1].t -
                                        0.01) /
                                        s,
                                      0
                                    )),
                                    (a[1] = n.getValueAtTime(
                                      (n.keyframes[n.keyframes.length - 1].t -
                                        0.01) /
                                        s,
                                      0
                                    )))
                                  : ((i = [r.pv, n.pv]),
                                    (a[0] = r.getValueAtTime(
                                      (r._caching.lastFrame +
                                        r.offsetTime -
                                        0.01) /
                                        s,
                                      r.offsetTime
                                    )),
                                    (a[1] = n.getValueAtTime(
                                      (n._caching.lastFrame +
                                        n.offsetTime -
                                        0.01) /
                                        s,
                                      n.offsetTime
                                    )));
                              } else i = a = t;
                              this.v.rotate(
                                -Math.atan2(i[1] - a[1], i[0] - a[0])
                              );
                            }
                            this.data.p && this.data.p.s
                              ? this.data.p.z
                                ? this.v.translate(
                                    this.px.v,
                                    this.py.v,
                                    -this.pz.v
                                  )
                                : this.v.translate(this.px.v, this.py.v, 0)
                              : this.v.translate(
                                  this.p.v[0],
                                  this.p.v[1],
                                  -this.p.v[2]
                                );
                          }
                          this.frameId = this.elem.globalData.frameId;
                        }
                      },
                      precalculateMatrix: function () {
                        if (
                          !this.a.k &&
                          (this.pre.translate(
                            -this.a.v[0],
                            -this.a.v[1],
                            this.a.v[2]
                          ),
                          (this.appliedTransformations = 1),
                          !this.s.effectsSequence.length)
                        ) {
                          if (
                            (this.pre.scale(
                              this.s.v[0],
                              this.s.v[1],
                              this.s.v[2]
                            ),
                            (this.appliedTransformations = 2),
                            this.sk)
                          ) {
                            if (
                              this.sk.effectsSequence.length ||
                              this.sa.effectsSequence.length
                            )
                              return;
                            this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                              (this.appliedTransformations = 3);
                          }
                          this.r
                            ? this.r.effectsSequence.length ||
                              (this.pre.rotate(-this.r.v),
                              (this.appliedTransformations = 4))
                            : this.rz.effectsSequence.length ||
                              this.ry.effectsSequence.length ||
                              this.rx.effectsSequence.length ||
                              this.or.effectsSequence.length ||
                              (this.pre
                                .rotateZ(-this.rz.v)
                                .rotateY(this.ry.v)
                                .rotateX(this.rx.v)
                                .rotateZ(-this.or.v[2])
                                .rotateY(this.or.v[1])
                                .rotateX(this.or.v[0]),
                              (this.appliedTransformations = 4));
                        }
                      },
                      autoOrient: function () {},
                    }),
                    W([R], e),
                    (e.prototype.addDynamicProperty = function (t) {
                      this._addDynamicProperty(t),
                        this.elem.addDynamicProperty(t),
                        (this._isDirty = !0);
                    }),
                    (e.prototype._addDynamicProperty =
                      R.prototype.addDynamicProperty),
                    {
                      getTransformProperty: function (t, s, i) {
                        return new e(t, s, i);
                      },
                    }
                  );
                })();
              function U() {
                (this.c = !1),
                  (this._length = 0),
                  (this._maxLength = 8),
                  (this.v = I(this._maxLength)),
                  (this.o = I(this._maxLength)),
                  (this.i = I(this._maxLength));
              }
              (U.prototype.setPathData = function (t, e) {
                (this.c = t), this.setLength(e);
                for (var s = 0; s < e; )
                  (this.v[s] = kt.newElement()),
                    (this.o[s] = kt.newElement()),
                    (this.i[s] = kt.newElement()),
                    (s += 1);
              }),
                (U.prototype.setLength = function (t) {
                  for (; this._maxLength < t; ) this.doubleArrayLength();
                  this._length = t;
                }),
                (U.prototype.doubleArrayLength = function () {
                  (this.v = this.v.concat(I(this._maxLength))),
                    (this.i = this.i.concat(I(this._maxLength))),
                    (this.o = this.o.concat(I(this._maxLength))),
                    (this._maxLength *= 2);
                }),
                (U.prototype.setXYAt = function (t, e, s, i, a) {
                  var r;
                  switch (
                    ((this._length = Math.max(this._length, i + 1)),
                    this._length >= this._maxLength && this.doubleArrayLength(),
                    s)
                  ) {
                    case "v":
                      r = this.v;
                      break;
                    case "i":
                      r = this.i;
                      break;
                    case "o":
                      r = this.o;
                      break;
                    default:
                      r = [];
                  }
                  (!r[i] || (r[i] && !a)) && (r[i] = kt.newElement()),
                    (r[i][0] = t),
                    (r[i][1] = e);
                }),
                (U.prototype.setTripleAt = function (t, e, s, i, a, r, n, h) {
                  this.setXYAt(t, e, "v", n, h),
                    this.setXYAt(s, i, "o", n, h),
                    this.setXYAt(a, r, "i", n, h);
                }),
                (U.prototype.reverse = function () {
                  var t = new U();
                  t.setPathData(this.c, this._length);
                  var e = this.v,
                    s = this.o,
                    i = this.i,
                    a = 0;
                  this.c &&
                    (t.setTripleAt(
                      e[0][0],
                      e[0][1],
                      i[0][0],
                      i[0][1],
                      s[0][0],
                      s[0][1],
                      0,
                      !1
                    ),
                    (a = 1));
                  var r,
                    n = this._length - 1,
                    h = this._length;
                  for (r = a; r < h; r += 1)
                    t.setTripleAt(
                      e[n][0],
                      e[n][1],
                      i[n][0],
                      i[n][1],
                      s[n][0],
                      s[n][1],
                      r,
                      !1
                    ),
                      (n -= 1);
                  return t;
                });
              var Z = (function () {
                  var t = -999999;
                  function e(t, e, s) {
                    var i,
                      a,
                      r,
                      n,
                      h,
                      o,
                      l,
                      p,
                      f,
                      m = s.lastIndex,
                      d = this.keyframes;
                    if (t < d[0].t - this.offsetTime)
                      (i = d[0].s[0]), (r = !0), (m = 0);
                    else if (t >= d[d.length - 1].t - this.offsetTime)
                      (i = d[d.length - 1].s
                        ? d[d.length - 1].s[0]
                        : d[d.length - 2].e[0]),
                        (r = !0);
                    else {
                      for (
                        var c, u, g, y = m, v = d.length - 1, b = !0;
                        b &&
                        ((c = d[y]), !((u = d[y + 1]).t - this.offsetTime > t));

                      )
                        y < v - 1 ? (y += 1) : (b = !1);
                      if (
                        ((g = this.keyframesMetadata[y] || {}),
                        (m = y),
                        !(r = 1 === c.h))
                      ) {
                        if (t >= u.t - this.offsetTime) p = 1;
                        else if (t < c.t - this.offsetTime) p = 0;
                        else {
                          var _;
                          g.__fnct
                            ? (_ = g.__fnct)
                            : ((_ = j.getBezierEasing(
                                c.o.x,
                                c.o.y,
                                c.i.x,
                                c.i.y
                              ).get),
                              (g.__fnct = _)),
                            (p = _(
                              (t - (c.t - this.offsetTime)) /
                                (u.t -
                                  this.offsetTime -
                                  (c.t - this.offsetTime))
                            ));
                        }
                        a = u.s ? u.s[0] : c.e[0];
                      }
                      i = c.s[0];
                    }
                    for (
                      o = e._length, l = i.i[0].length, s.lastIndex = m, n = 0;
                      n < o;
                      n += 1
                    )
                      for (h = 0; h < l; h += 1)
                        (f = r
                          ? i.i[n][h]
                          : i.i[n][h] + (a.i[n][h] - i.i[n][h]) * p),
                          (e.i[n][h] = f),
                          (f = r
                            ? i.o[n][h]
                            : i.o[n][h] + (a.o[n][h] - i.o[n][h]) * p),
                          (e.o[n][h] = f),
                          (f = r
                            ? i.v[n][h]
                            : i.v[n][h] + (a.v[n][h] - i.v[n][h]) * p),
                          (e.v[n][h] = f);
                  }
                  function s() {
                    var e = this.comp.renderedFrame - this.offsetTime,
                      s = this.keyframes[0].t - this.offsetTime,
                      i =
                        this.keyframes[this.keyframes.length - 1].t -
                        this.offsetTime,
                      a = this._caching.lastFrame;
                    return (
                      (a !== t && ((a < s && e < s) || (a > i && e > i))) ||
                        ((this._caching.lastIndex =
                          a < e ? this._caching.lastIndex : 0),
                        this.interpolateShape(e, this.pv, this._caching)),
                      (this._caching.lastFrame = e),
                      this.pv
                    );
                  }
                  function i() {
                    this.paths = this.localShapeCollection;
                  }
                  function a(t) {
                    (function (t, e) {
                      if (t._length !== e._length || t.c !== e.c) return !1;
                      var s,
                        i = t._length;
                      for (s = 0; s < i; s += 1)
                        if (
                          t.v[s][0] !== e.v[s][0] ||
                          t.v[s][1] !== e.v[s][1] ||
                          t.o[s][0] !== e.o[s][0] ||
                          t.o[s][1] !== e.o[s][1] ||
                          t.i[s][0] !== e.i[s][0] ||
                          t.i[s][1] !== e.i[s][1]
                        )
                          return !1;
                      return !0;
                    })(this.v, t) ||
                      ((this.v = At.clone(t)),
                      this.localShapeCollection.releaseShapes(),
                      this.localShapeCollection.addShape(this.v),
                      (this._mdf = !0),
                      (this.paths = this.localShapeCollection));
                  }
                  function r() {
                    if (this.elem.globalData.frameId !== this.frameId)
                      if (this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                          var t, e;
                          (this.lock = !0),
                            (this._mdf = !1),
                            (t = this.kf
                              ? this.pv
                              : this.data.ks
                              ? this.data.ks.k
                              : this.data.pt.k);
                          var s = this.effectsSequence.length;
                          for (e = 0; e < s; e += 1)
                            t = this.effectsSequence[e](t);
                          this.setVValue(t),
                            (this.lock = !1),
                            (this.frameId = this.elem.globalData.frameId);
                        }
                      else this._mdf = !1;
                  }
                  function n(t, e, s) {
                    (this.propType = "shape"),
                      (this.comp = t.comp),
                      (this.container = t),
                      (this.elem = t),
                      (this.data = e),
                      (this.k = !1),
                      (this.kf = !1),
                      (this._mdf = !1);
                    var a = 3 === s ? e.pt.k : e.ks.k;
                    (this.v = At.clone(a)),
                      (this.pv = At.clone(this.v)),
                      (this.localShapeCollection = Pt.newShapeCollection()),
                      (this.paths = this.localShapeCollection),
                      this.paths.addShape(this.v),
                      (this.reset = i),
                      (this.effectsSequence = []);
                  }
                  function h(t) {
                    this.effectsSequence.push(t),
                      this.container.addDynamicProperty(this);
                  }
                  function o(e, a, r) {
                    (this.propType = "shape"),
                      (this.comp = e.comp),
                      (this.elem = e),
                      (this.container = e),
                      (this.offsetTime = e.data.st),
                      (this.keyframes = 3 === r ? a.pt.k : a.ks.k),
                      (this.keyframesMetadata = []),
                      (this.k = !0),
                      (this.kf = !0);
                    var n = this.keyframes[0].s[0].i.length;
                    (this.v = At.newElement()),
                      this.v.setPathData(this.keyframes[0].s[0].c, n),
                      (this.pv = At.clone(this.v)),
                      (this.localShapeCollection = Pt.newShapeCollection()),
                      (this.paths = this.localShapeCollection),
                      this.paths.addShape(this.v),
                      (this.lastFrame = t),
                      (this.reset = i),
                      (this._caching = { lastFrame: t, lastIndex: 0 }),
                      (this.effectsSequence = [s.bind(this)]);
                  }
                  (n.prototype.interpolateShape = e),
                    (n.prototype.getValue = r),
                    (n.prototype.setVValue = a),
                    (n.prototype.addEffect = h),
                    (o.prototype.getValue = r),
                    (o.prototype.interpolateShape = e),
                    (o.prototype.setVValue = a),
                    (o.prototype.addEffect = h);
                  var l = (function () {
                      var t = u;
                      function e(t, e) {
                        (this.v = At.newElement()),
                          this.v.setPathData(!0, 4),
                          (this.localShapeCollection = Pt.newShapeCollection()),
                          (this.paths = this.localShapeCollection),
                          this.localShapeCollection.addShape(this.v),
                          (this.d = e.d),
                          (this.elem = t),
                          (this.comp = t.comp),
                          (this.frameId = -1),
                          this.initDynamicPropertyContainer(t),
                          (this.p = J.getProp(t, e.p, 1, 0, this)),
                          (this.s = J.getProp(t, e.s, 1, 0, this)),
                          this.dynamicProperties.length
                            ? (this.k = !0)
                            : ((this.k = !1), this.convertEllToPath());
                      }
                      return (
                        (e.prototype = {
                          reset: i,
                          getValue: function () {
                            this.elem.globalData.frameId !== this.frameId &&
                              ((this.frameId = this.elem.globalData.frameId),
                              this.iterateDynamicProperties(),
                              this._mdf && this.convertEllToPath());
                          },
                          convertEllToPath: function () {
                            var e = this.p.v[0],
                              s = this.p.v[1],
                              i = this.s.v[0] / 2,
                              a = this.s.v[1] / 2,
                              r = 3 !== this.d,
                              n = this.v;
                            (n.v[0][0] = e),
                              (n.v[0][1] = s - a),
                              (n.v[1][0] = r ? e + i : e - i),
                              (n.v[1][1] = s),
                              (n.v[2][0] = e),
                              (n.v[2][1] = s + a),
                              (n.v[3][0] = r ? e - i : e + i),
                              (n.v[3][1] = s),
                              (n.i[0][0] = r ? e - i * t : e + i * t),
                              (n.i[0][1] = s - a),
                              (n.i[1][0] = r ? e + i : e - i),
                              (n.i[1][1] = s - a * t),
                              (n.i[2][0] = r ? e + i * t : e - i * t),
                              (n.i[2][1] = s + a),
                              (n.i[3][0] = r ? e - i : e + i),
                              (n.i[3][1] = s + a * t),
                              (n.o[0][0] = r ? e + i * t : e - i * t),
                              (n.o[0][1] = s - a),
                              (n.o[1][0] = r ? e + i : e - i),
                              (n.o[1][1] = s + a * t),
                              (n.o[2][0] = r ? e - i * t : e + i * t),
                              (n.o[2][1] = s + a),
                              (n.o[3][0] = r ? e - i : e + i),
                              (n.o[3][1] = s - a * t);
                          },
                        }),
                        W([R], e),
                        e
                      );
                    })(),
                    p = (function () {
                      function t(t, e) {
                        (this.v = At.newElement()),
                          this.v.setPathData(!0, 0),
                          (this.elem = t),
                          (this.comp = t.comp),
                          (this.data = e),
                          (this.frameId = -1),
                          (this.d = e.d),
                          this.initDynamicPropertyContainer(t),
                          1 === e.sy
                            ? ((this.ir = J.getProp(t, e.ir, 0, 0, this)),
                              (this.is = J.getProp(t, e.is, 0, 0.01, this)),
                              (this.convertToPath = this.convertStarToPath))
                            : (this.convertToPath = this.convertPolygonToPath),
                          (this.pt = J.getProp(t, e.pt, 0, 0, this)),
                          (this.p = J.getProp(t, e.p, 1, 0, this)),
                          (this.r = J.getProp(t, e.r, 0, c, this)),
                          (this.or = J.getProp(t, e.or, 0, 0, this)),
                          (this.os = J.getProp(t, e.os, 0, 0.01, this)),
                          (this.localShapeCollection = Pt.newShapeCollection()),
                          this.localShapeCollection.addShape(this.v),
                          (this.paths = this.localShapeCollection),
                          this.dynamicProperties.length
                            ? (this.k = !0)
                            : ((this.k = !1), this.convertToPath());
                      }
                      return (
                        (t.prototype = {
                          reset: i,
                          getValue: function () {
                            this.elem.globalData.frameId !== this.frameId &&
                              ((this.frameId = this.elem.globalData.frameId),
                              this.iterateDynamicProperties(),
                              this._mdf && this.convertToPath());
                          },
                          convertStarToPath: function () {
                            var t,
                              e,
                              s,
                              i,
                              a = 2 * Math.floor(this.pt.v),
                              r = (2 * Math.PI) / a,
                              n = !0,
                              h = this.or.v,
                              o = this.ir.v,
                              l = this.os.v,
                              p = this.is.v,
                              f = (2 * Math.PI * h) / (2 * a),
                              m = (2 * Math.PI * o) / (2 * a),
                              d = -Math.PI / 2;
                            d += this.r.v;
                            var c = 3 === this.data.d ? -1 : 1;
                            for (this.v._length = 0, t = 0; t < a; t += 1) {
                              (s = n ? l : p), (i = n ? f : m);
                              var u = (e = n ? h : o) * Math.cos(d),
                                g = e * Math.sin(d),
                                y =
                                  0 === u && 0 === g
                                    ? 0
                                    : g / Math.sqrt(u * u + g * g),
                                v =
                                  0 === u && 0 === g
                                    ? 0
                                    : -u / Math.sqrt(u * u + g * g);
                              (u += +this.p.v[0]),
                                (g += +this.p.v[1]),
                                this.v.setTripleAt(
                                  u,
                                  g,
                                  u - y * i * s * c,
                                  g - v * i * s * c,
                                  u + y * i * s * c,
                                  g + v * i * s * c,
                                  t,
                                  !0
                                ),
                                (n = !n),
                                (d += r * c);
                            }
                          },
                          convertPolygonToPath: function () {
                            var t,
                              e = Math.floor(this.pt.v),
                              s = (2 * Math.PI) / e,
                              i = this.or.v,
                              a = this.os.v,
                              r = (2 * Math.PI * i) / (4 * e),
                              n = 0.5 * -Math.PI,
                              h = 3 === this.data.d ? -1 : 1;
                            for (
                              n += this.r.v, this.v._length = 0, t = 0;
                              t < e;
                              t += 1
                            ) {
                              var o = i * Math.cos(n),
                                l = i * Math.sin(n),
                                p =
                                  0 === o && 0 === l
                                    ? 0
                                    : l / Math.sqrt(o * o + l * l),
                                f =
                                  0 === o && 0 === l
                                    ? 0
                                    : -o / Math.sqrt(o * o + l * l);
                              (o += +this.p.v[0]),
                                (l += +this.p.v[1]),
                                this.v.setTripleAt(
                                  o,
                                  l,
                                  o - p * r * a * h,
                                  l - f * r * a * h,
                                  o + p * r * a * h,
                                  l + f * r * a * h,
                                  t,
                                  !0
                                ),
                                (n += s * h);
                            }
                            (this.paths.length = 0), (this.paths[0] = this.v);
                          },
                        }),
                        W([R], t),
                        t
                      );
                    })(),
                    m = (function () {
                      function t(t, e) {
                        (this.v = At.newElement()),
                          (this.v.c = !0),
                          (this.localShapeCollection = Pt.newShapeCollection()),
                          this.localShapeCollection.addShape(this.v),
                          (this.paths = this.localShapeCollection),
                          (this.elem = t),
                          (this.comp = t.comp),
                          (this.frameId = -1),
                          (this.d = e.d),
                          this.initDynamicPropertyContainer(t),
                          (this.p = J.getProp(t, e.p, 1, 0, this)),
                          (this.s = J.getProp(t, e.s, 1, 0, this)),
                          (this.r = J.getProp(t, e.r, 0, 0, this)),
                          this.dynamicProperties.length
                            ? (this.k = !0)
                            : ((this.k = !1), this.convertRectToPath());
                      }
                      return (
                        (t.prototype = {
                          convertRectToPath: function () {
                            var t = this.p.v[0],
                              e = this.p.v[1],
                              s = this.s.v[0] / 2,
                              i = this.s.v[1] / 2,
                              a = f(s, i, this.r.v),
                              r = a * (1 - u);
                            (this.v._length = 0),
                              2 === this.d || 1 === this.d
                                ? (this.v.setTripleAt(
                                    t + s,
                                    e - i + a,
                                    t + s,
                                    e - i + a,
                                    t + s,
                                    e - i + r,
                                    0,
                                    !0
                                  ),
                                  this.v.setTripleAt(
                                    t + s,
                                    e + i - a,
                                    t + s,
                                    e + i - r,
                                    t + s,
                                    e + i - a,
                                    1,
                                    !0
                                  ),
                                  0 !== a
                                    ? (this.v.setTripleAt(
                                        t + s - a,
                                        e + i,
                                        t + s - a,
                                        e + i,
                                        t + s - r,
                                        e + i,
                                        2,
                                        !0
                                      ),
                                      this.v.setTripleAt(
                                        t - s + a,
                                        e + i,
                                        t - s + r,
                                        e + i,
                                        t - s + a,
                                        e + i,
                                        3,
                                        !0
                                      ),
                                      this.v.setTripleAt(
                                        t - s,
                                        e + i - a,
                                        t - s,
                                        e + i - a,
                                        t - s,
                                        e + i - r,
                                        4,
                                        !0
                                      ),
                                      this.v.setTripleAt(
                                        t - s,
                                        e - i + a,
                                        t - s,
                                        e - i + r,
                                        t - s,
                                        e - i + a,
                                        5,
                                        !0
                                      ),
                                      this.v.setTripleAt(
                                        t - s + a,
                                        e - i,
                                        t - s + a,
                                        e - i,
                                        t - s + r,
                                        e - i,
                                        6,
                                        !0
                                      ),
                                      this.v.setTripleAt(
                                        t + s - a,
                                        e - i,
                                        t + s - r,
                                        e - i,
                                        t + s - a,
                                        e - i,
                                        7,
                                        !0
                                      ))
                                    : (this.v.setTripleAt(
                                        t - s,
                                        e + i,
                                        t - s + r,
                                        e + i,
                                        t - s,
                                        e + i,
                                        2
                                      ),
                                      this.v.setTripleAt(
                                        t - s,
                                        e - i,
                                        t - s,
                                        e - i + r,
                                        t - s,
                                        e - i,
                                        3
                                      )))
                                : (this.v.setTripleAt(
                                    t + s,
                                    e - i + a,
                                    t + s,
                                    e - i + r,
                                    t + s,
                                    e - i + a,
                                    0,
                                    !0
                                  ),
                                  0 !== a
                                    ? (this.v.setTripleAt(
                                        t + s - a,
                                        e - i,
                                        t + s - a,
                                        e - i,
                                        t + s - r,
                                        e - i,
                                        1,
                                        !0
                                      ),
                                      this.v.setTripleAt(
                                        t - s + a,
                                        e - i,
                                        t - s + r,
                                        e - i,
                                        t - s + a,
                                        e - i,
                                        2,
                                        !0
                                      ),
                                      this.v.setTripleAt(
                                        t - s,
                                        e - i + a,
                                        t - s,
                                        e - i + a,
                                        t - s,
                                        e - i + r,
                                        3,
                                        !0
                                      ),
                                      this.v.setTripleAt(
                                        t - s,
                                        e + i - a,
                                        t - s,
                                        e + i - r,
                                        t - s,
                                        e + i - a,
                                        4,
                                        !0
                                      ),
                                      this.v.setTripleAt(
                                        t - s + a,
                                        e + i,
                                        t - s + a,
                                        e + i,
                                        t - s + r,
                                        e + i,
                                        5,
                                        !0
                                      ),
                                      this.v.setTripleAt(
                                        t + s - a,
                                        e + i,
                                        t + s - r,
                                        e + i,
                                        t + s - a,
                                        e + i,
                                        6,
                                        !0
                                      ),
                                      this.v.setTripleAt(
                                        t + s,
                                        e + i - a,
                                        t + s,
                                        e + i - a,
                                        t + s,
                                        e + i - r,
                                        7,
                                        !0
                                      ))
                                    : (this.v.setTripleAt(
                                        t - s,
                                        e - i,
                                        t - s + r,
                                        e - i,
                                        t - s,
                                        e - i,
                                        1,
                                        !0
                                      ),
                                      this.v.setTripleAt(
                                        t - s,
                                        e + i,
                                        t - s,
                                        e + i - r,
                                        t - s,
                                        e + i,
                                        2,
                                        !0
                                      ),
                                      this.v.setTripleAt(
                                        t + s,
                                        e + i,
                                        t + s - r,
                                        e + i,
                                        t + s,
                                        e + i,
                                        3,
                                        !0
                                      )));
                          },
                          getValue: function () {
                            this.elem.globalData.frameId !== this.frameId &&
                              ((this.frameId = this.elem.globalData.frameId),
                              this.iterateDynamicProperties(),
                              this._mdf && this.convertRectToPath());
                          },
                          reset: i,
                        }),
                        W([R], t),
                        t
                      );
                    })();
                  var d = {
                    getShapeProp: function (t, e, s) {
                      var i;
                      return (
                        3 === s || 4 === s
                          ? (i = (3 === s ? e.pt : e.ks).k.length
                              ? new o(t, e, s)
                              : new n(t, e, s))
                          : 5 === s
                          ? (i = new m(t, e))
                          : 6 === s
                          ? (i = new l(t, e))
                          : 7 === s && (i = new p(t, e)),
                        i.k && t.addDynamicProperty(i),
                        i
                      );
                    },
                    getConstructorFunction: function () {
                      return n;
                    },
                    getKeyframedConstructorFunction: function () {
                      return o;
                    },
                  };
                  return d;
                })(),
                Q = (function () {
                  var t = {},
                    e = {};
                  return (
                    (t.registerModifier = function (t, s) {
                      e[t] || (e[t] = s);
                    }),
                    (t.getModifier = function (t, s, i) {
                      return new e[t](s, i);
                    }),
                    t
                  );
                })();
              function $() {}
              function tt() {}
              function et() {}
              function st() {}
              function it() {}
              function at() {
                (this._length = 0),
                  (this._maxLength = 4),
                  (this.shapes = I(this._maxLength));
              }
              function rt(t, e, s, i) {
                var a;
                (this.elem = t),
                  (this.frameId = -1),
                  (this.dataProps = I(e.length)),
                  (this.renderer = s),
                  (this.k = !1),
                  (this.dashStr = ""),
                  (this.dashArray = T("float32", e.length ? e.length - 1 : 0)),
                  (this.dashoffset = T("float32", 1)),
                  this.initDynamicPropertyContainer(i);
                var r,
                  n = e.length || 0;
                for (a = 0; a < n; a += 1)
                  (r = J.getProp(t, e[a].v, 0, 0, this)),
                    (this.k = r.k || this.k),
                    (this.dataProps[a] = { n: e[a].n, p: r });
                this.k || this.getValue(!0), (this._isAnimated = this.k);
              }
              function nt(t, e, s) {
                (this.data = e), (this.c = T("uint8c", 4 * e.p));
                var i = e.k.k[0].s
                  ? e.k.k[0].s.length - 4 * e.p
                  : e.k.k.length - 4 * e.p;
                (this.o = T("float32", i)),
                  (this._cmdf = !1),
                  (this._omdf = !1),
                  (this._collapsable = this.checkCollapsable()),
                  (this._hasOpacity = i),
                  this.initDynamicPropertyContainer(s),
                  (this.prop = J.getProp(t, e.k, 1, null, this)),
                  (this.k = this.prop.k),
                  this.getValue(!0);
              }
              ($.prototype.initModifierProperties = function () {}),
                ($.prototype.addShapeToModifier = function () {}),
                ($.prototype.addShape = function (t) {
                  if (!this.closed) {
                    t.sh.container.addDynamicProperty(t.sh);
                    var e = {
                      shape: t.sh,
                      data: t,
                      localShapeCollection: Pt.newShapeCollection(),
                    };
                    this.shapes.push(e),
                      this.addShapeToModifier(e),
                      this._isAnimated && t.setAsAnimated();
                  }
                }),
                ($.prototype.init = function (t, e) {
                  (this.shapes = []),
                    (this.elem = t),
                    this.initDynamicPropertyContainer(t),
                    this.initModifierProperties(t, e),
                    (this.frameId = i),
                    (this.closed = !1),
                    (this.k = !1),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : this.getValue(!0);
                }),
                ($.prototype.processKeys = function () {
                  this.elem.globalData.frameId !== this.frameId &&
                    ((this.frameId = this.elem.globalData.frameId),
                    this.iterateDynamicProperties());
                }),
                W([R], $),
                W([$], tt),
                (tt.prototype.initModifierProperties = function (t, e) {
                  (this.s = J.getProp(t, e.s, 0, 0.01, this)),
                    (this.e = J.getProp(t, e.e, 0, 0.01, this)),
                    (this.o = J.getProp(t, e.o, 0, 0, this)),
                    (this.sValue = 0),
                    (this.eValue = 0),
                    (this.getValue = this.processKeys),
                    (this.m = e.m),
                    (this._isAnimated =
                      !!this.s.effectsSequence.length ||
                      !!this.e.effectsSequence.length ||
                      !!this.o.effectsSequence.length);
                }),
                (tt.prototype.addShapeToModifier = function (t) {
                  t.pathsData = [];
                }),
                (tt.prototype.calculateShapeEdges = function (t, e, s, i, a) {
                  var r = [];
                  e <= 1
                    ? r.push({ s: t, e })
                    : t >= 1
                    ? r.push({ s: t - 1, e: e - 1 })
                    : (r.push({ s: t, e: 1 }), r.push({ s: 0, e: e - 1 }));
                  var n,
                    h,
                    o = [],
                    l = r.length;
                  for (n = 0; n < l; n += 1) {
                    var p, f;
                    (h = r[n]).e * a < i ||
                      h.s * a > i + s ||
                      ((p = h.s * a <= i ? 0 : (h.s * a - i) / s),
                      (f = h.e * a >= i + s ? 1 : (h.e * a - i) / s),
                      o.push([p, f]));
                  }
                  return o.length || o.push([0, 0]), o;
                }),
                (tt.prototype.releasePathsData = function (t) {
                  var e,
                    s = t.length;
                  for (e = 0; e < s; e += 1) Ct.release(t[e]);
                  return (t.length = 0), t;
                }),
                (tt.prototype.processShapes = function (t) {
                  var e, s, i, a;
                  if (this._mdf || t) {
                    var r = (this.o.v % 360) / 360;
                    if (
                      (r < 0 && (r += 1),
                      (e =
                        this.s.v > 1
                          ? 1 + r
                          : this.s.v < 0
                          ? 0 + r
                          : this.s.v + r) >
                        (s =
                          this.e.v > 1
                            ? 1 + r
                            : this.e.v < 0
                            ? 0 + r
                            : this.e.v + r))
                    ) {
                      var n = e;
                      (e = s), (s = n);
                    }
                    (e = 1e-4 * Math.round(1e4 * e)),
                      (s = 1e-4 * Math.round(1e4 * s)),
                      (this.sValue = e),
                      (this.eValue = s);
                  } else (e = this.sValue), (s = this.eValue);
                  var h,
                    o,
                    l,
                    p,
                    f,
                    m = this.shapes.length,
                    d = 0;
                  if (s === e)
                    for (a = 0; a < m; a += 1)
                      this.shapes[a].localShapeCollection.releaseShapes(),
                        (this.shapes[a].shape._mdf = !0),
                        (this.shapes[a].shape.paths =
                          this.shapes[a].localShapeCollection),
                        this._mdf && (this.shapes[a].pathsData.length = 0);
                  else if ((1 === s && 0 === e) || (0 === s && 1 === e)) {
                    if (this._mdf)
                      for (a = 0; a < m; a += 1)
                        (this.shapes[a].pathsData.length = 0),
                          (this.shapes[a].shape._mdf = !0);
                  } else {
                    var c,
                      u,
                      g = [];
                    for (a = 0; a < m; a += 1)
                      if (
                        (c = this.shapes[a]).shape._mdf ||
                        this._mdf ||
                        t ||
                        2 === this.m
                      ) {
                        if (
                          ((o = (i = c.shape.paths)._length),
                          (f = 0),
                          !c.shape._mdf && c.pathsData.length)
                        )
                          f = c.totalShapeLength;
                        else {
                          for (
                            l = this.releasePathsData(c.pathsData), h = 0;
                            h < o;
                            h += 1
                          )
                            (p = G.getSegmentsLength(i.shapes[h])),
                              l.push(p),
                              (f += p.totalLength);
                          (c.totalShapeLength = f), (c.pathsData = l);
                        }
                        (d += f), (c.shape._mdf = !0);
                      } else c.shape.paths = c.localShapeCollection;
                    var y,
                      v = e,
                      b = s,
                      _ = 0;
                    for (a = m - 1; a >= 0; a -= 1)
                      if ((c = this.shapes[a]).shape._mdf) {
                        for (
                          (u = c.localShapeCollection).releaseShapes(),
                            2 === this.m && m > 1
                              ? ((y = this.calculateShapeEdges(
                                  e,
                                  s,
                                  c.totalShapeLength,
                                  _,
                                  d
                                )),
                                (_ += c.totalShapeLength))
                              : (y = [[v, b]]),
                            o = y.length,
                            h = 0;
                          h < o;
                          h += 1
                        ) {
                          (v = y[h][0]),
                            (b = y[h][1]),
                            (g.length = 0),
                            b <= 1
                              ? g.push({
                                  s: c.totalShapeLength * v,
                                  e: c.totalShapeLength * b,
                                })
                              : v >= 1
                              ? g.push({
                                  s: c.totalShapeLength * (v - 1),
                                  e: c.totalShapeLength * (b - 1),
                                })
                              : (g.push({
                                  s: c.totalShapeLength * v,
                                  e: c.totalShapeLength,
                                }),
                                g.push({
                                  s: 0,
                                  e: c.totalShapeLength * (b - 1),
                                }));
                          var k = this.addShapes(c, g[0]);
                          if (g[0].s !== g[0].e) {
                            if (g.length > 1)
                              if (
                                c.shape.paths.shapes[c.shape.paths._length - 1]
                                  .c
                              ) {
                                var A = k.pop();
                                this.addPaths(k, u),
                                  (k = this.addShapes(c, g[1], A));
                              } else
                                this.addPaths(k, u),
                                  (k = this.addShapes(c, g[1]));
                            this.addPaths(k, u);
                          }
                        }
                        c.shape.paths = u;
                      }
                  }
                }),
                (tt.prototype.addPaths = function (t, e) {
                  var s,
                    i = t.length;
                  for (s = 0; s < i; s += 1) e.addShape(t[s]);
                }),
                (tt.prototype.addSegment = function (t, e, s, i, a, r, n) {
                  a.setXYAt(e[0], e[1], "o", r),
                    a.setXYAt(s[0], s[1], "i", r + 1),
                    n && a.setXYAt(t[0], t[1], "v", r),
                    a.setXYAt(i[0], i[1], "v", r + 1);
                }),
                (tt.prototype.addSegmentFromArray = function (t, e, s, i) {
                  e.setXYAt(t[1], t[5], "o", s),
                    e.setXYAt(t[2], t[6], "i", s + 1),
                    i && e.setXYAt(t[0], t[4], "v", s),
                    e.setXYAt(t[3], t[7], "v", s + 1);
                }),
                (tt.prototype.addShapes = function (t, e, s) {
                  var i,
                    a,
                    r,
                    n,
                    h,
                    o,
                    l,
                    p,
                    f = t.pathsData,
                    m = t.shape.paths.shapes,
                    d = t.shape.paths._length,
                    c = 0,
                    u = [],
                    g = !0;
                  for (
                    s
                      ? ((h = s._length), (p = s._length))
                      : ((s = At.newElement()), (h = 0), (p = 0)),
                      u.push(s),
                      i = 0;
                    i < d;
                    i += 1
                  ) {
                    for (
                      o = f[i].lengths,
                        s.c = m[i].c,
                        r = m[i].c ? o.length : o.length + 1,
                        a = 1;
                      a < r;
                      a += 1
                    )
                      if (c + (n = o[a - 1]).addedLength < e.s)
                        (c += n.addedLength), (s.c = !1);
                      else {
                        if (c > e.e) {
                          s.c = !1;
                          break;
                        }
                        e.s <= c && e.e >= c + n.addedLength
                          ? (this.addSegment(
                              m[i].v[a - 1],
                              m[i].o[a - 1],
                              m[i].i[a],
                              m[i].v[a],
                              s,
                              h,
                              g
                            ),
                            (g = !1))
                          : ((l = G.getNewSegment(
                              m[i].v[a - 1],
                              m[i].v[a],
                              m[i].o[a - 1],
                              m[i].i[a],
                              (e.s - c) / n.addedLength,
                              (e.e - c) / n.addedLength,
                              o[a - 1]
                            )),
                            this.addSegmentFromArray(l, s, h, g),
                            (g = !1),
                            (s.c = !1)),
                          (c += n.addedLength),
                          (h += 1);
                      }
                    if (m[i].c && o.length) {
                      if (((n = o[a - 1]), c <= e.e)) {
                        var y = o[a - 1].addedLength;
                        e.s <= c && e.e >= c + y
                          ? (this.addSegment(
                              m[i].v[a - 1],
                              m[i].o[a - 1],
                              m[i].i[0],
                              m[i].v[0],
                              s,
                              h,
                              g
                            ),
                            (g = !1))
                          : ((l = G.getNewSegment(
                              m[i].v[a - 1],
                              m[i].v[0],
                              m[i].o[a - 1],
                              m[i].i[0],
                              (e.s - c) / y,
                              (e.e - c) / y,
                              o[a - 1]
                            )),
                            this.addSegmentFromArray(l, s, h, g),
                            (g = !1),
                            (s.c = !1));
                      } else s.c = !1;
                      (c += n.addedLength), (h += 1);
                    }
                    if (
                      (s._length &&
                        (s.setXYAt(s.v[p][0], s.v[p][1], "i", p),
                        s.setXYAt(
                          s.v[s._length - 1][0],
                          s.v[s._length - 1][1],
                          "o",
                          s._length - 1
                        )),
                      c > e.e)
                    )
                      break;
                    i < d - 1 &&
                      ((s = At.newElement()), (g = !0), u.push(s), (h = 0));
                  }
                  return u;
                }),
                Q.registerModifier("tm", tt),
                W([$], et),
                (et.prototype.initModifierProperties = function (t, e) {
                  (this.getValue = this.processKeys),
                    (this.rd = J.getProp(t, e.r, 0, null, this)),
                    (this._isAnimated = !!this.rd.effectsSequence.length);
                }),
                (et.prototype.processPath = function (t, e) {
                  var s,
                    i = At.newElement();
                  i.c = t.c;
                  var a,
                    r,
                    n,
                    h,
                    o,
                    l,
                    p,
                    f,
                    m,
                    d,
                    c,
                    g,
                    y = t._length,
                    v = 0;
                  for (s = 0; s < y; s += 1)
                    (a = t.v[s]),
                      (n = t.o[s]),
                      (r = t.i[s]),
                      a[0] === n[0] &&
                      a[1] === n[1] &&
                      a[0] === r[0] &&
                      a[1] === r[1]
                        ? (0 !== s && s !== y - 1) || t.c
                          ? ((h = 0 === s ? t.v[y - 1] : t.v[s - 1]),
                            (l = (o = Math.sqrt(
                              Math.pow(a[0] - h[0], 2) +
                                Math.pow(a[1] - h[1], 2)
                            ))
                              ? Math.min(o / 2, e) / o
                              : 0),
                            (p = c = a[0] + (h[0] - a[0]) * l),
                            (f = g = a[1] - (a[1] - h[1]) * l),
                            (m = p - (p - a[0]) * u),
                            (d = f - (f - a[1]) * u),
                            i.setTripleAt(p, f, m, d, c, g, v),
                            (v += 1),
                            (h = s === y - 1 ? t.v[0] : t.v[s + 1]),
                            (l = (o = Math.sqrt(
                              Math.pow(a[0] - h[0], 2) +
                                Math.pow(a[1] - h[1], 2)
                            ))
                              ? Math.min(o / 2, e) / o
                              : 0),
                            (p = m = a[0] + (h[0] - a[0]) * l),
                            (f = d = a[1] + (h[1] - a[1]) * l),
                            (c = p - (p - a[0]) * u),
                            (g = f - (f - a[1]) * u),
                            i.setTripleAt(p, f, m, d, c, g, v),
                            (v += 1))
                          : (i.setTripleAt(
                              a[0],
                              a[1],
                              n[0],
                              n[1],
                              r[0],
                              r[1],
                              v
                            ),
                            (v += 1))
                        : (i.setTripleAt(
                            t.v[s][0],
                            t.v[s][1],
                            t.o[s][0],
                            t.o[s][1],
                            t.i[s][0],
                            t.i[s][1],
                            v
                          ),
                          (v += 1));
                  return i;
                }),
                (et.prototype.processShapes = function (t) {
                  var e,
                    s,
                    i,
                    a,
                    r,
                    n,
                    h = this.shapes.length,
                    o = this.rd.v;
                  if (0 !== o)
                    for (s = 0; s < h; s += 1) {
                      if (
                        ((n = (r = this.shapes[s]).localShapeCollection),
                        r.shape._mdf || this._mdf || t)
                      )
                        for (
                          n.releaseShapes(),
                            r.shape._mdf = !0,
                            e = r.shape.paths.shapes,
                            a = r.shape.paths._length,
                            i = 0;
                          i < a;
                          i += 1
                        )
                          n.addShape(this.processPath(e[i], o));
                      r.shape.paths = r.localShapeCollection;
                    }
                  this.dynamicProperties.length || (this._mdf = !1);
                }),
                Q.registerModifier("rd", et),
                W([$], st),
                (st.prototype.initModifierProperties = function (t, e) {
                  (this.getValue = this.processKeys),
                    (this.amount = J.getProp(t, e.a, 0, null, this)),
                    (this._isAnimated = !!this.amount.effectsSequence.length);
                }),
                (st.prototype.processPath = function (t, e) {
                  var s = e / 100,
                    i = [0, 0],
                    a = t._length,
                    r = 0;
                  for (r = 0; r < a; r += 1)
                    (i[0] += t.v[r][0]), (i[1] += t.v[r][1]);
                  (i[0] /= a), (i[1] /= a);
                  var n,
                    h,
                    o,
                    l,
                    p,
                    f,
                    m = At.newElement();
                  for (m.c = t.c, r = 0; r < a; r += 1)
                    (n = t.v[r][0] + (i[0] - t.v[r][0]) * s),
                      (h = t.v[r][1] + (i[1] - t.v[r][1]) * s),
                      (o = t.o[r][0] + (i[0] - t.o[r][0]) * -s),
                      (l = t.o[r][1] + (i[1] - t.o[r][1]) * -s),
                      (p = t.i[r][0] + (i[0] - t.i[r][0]) * -s),
                      (f = t.i[r][1] + (i[1] - t.i[r][1]) * -s),
                      m.setTripleAt(n, h, o, l, p, f, r);
                  return m;
                }),
                (st.prototype.processShapes = function (t) {
                  var e,
                    s,
                    i,
                    a,
                    r,
                    n,
                    h = this.shapes.length,
                    o = this.amount.v;
                  if (0 !== o)
                    for (s = 0; s < h; s += 1) {
                      if (
                        ((n = (r = this.shapes[s]).localShapeCollection),
                        r.shape._mdf || this._mdf || t)
                      )
                        for (
                          n.releaseShapes(),
                            r.shape._mdf = !0,
                            e = r.shape.paths.shapes,
                            a = r.shape.paths._length,
                            i = 0;
                          i < a;
                          i += 1
                        )
                          n.addShape(this.processPath(e[i], o));
                      r.shape.paths = r.localShapeCollection;
                    }
                  this.dynamicProperties.length || (this._mdf = !1);
                }),
                Q.registerModifier("pb", st),
                W([$], it),
                (it.prototype.initModifierProperties = function (t, e) {
                  (this.getValue = this.processKeys),
                    (this.c = J.getProp(t, e.c, 0, null, this)),
                    (this.o = J.getProp(t, e.o, 0, null, this)),
                    (this.tr = K.getTransformProperty(t, e.tr, this)),
                    (this.so = J.getProp(t, e.tr.so, 0, 0.01, this)),
                    (this.eo = J.getProp(t, e.tr.eo, 0, 0.01, this)),
                    (this.data = e),
                    this.dynamicProperties.length || this.getValue(!0),
                    (this._isAnimated = !!this.dynamicProperties.length),
                    (this.pMatrix = new q()),
                    (this.rMatrix = new q()),
                    (this.sMatrix = new q()),
                    (this.tMatrix = new q()),
                    (this.matrix = new q());
                }),
                (it.prototype.applyTransforms = function (t, e, s, i, a, r) {
                  var n = r ? -1 : 1,
                    h = i.s.v[0] + (1 - i.s.v[0]) * (1 - a),
                    o = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
                  t.translate(i.p.v[0] * n * a, i.p.v[1] * n * a, i.p.v[2]),
                    e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
                    e.rotate(-i.r.v * n * a),
                    e.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
                    s.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
                    s.scale(r ? 1 / h : h, r ? 1 / o : o),
                    s.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
                }),
                (it.prototype.init = function (t, e, s, i) {
                  for (
                    this.elem = t,
                      this.arr = e,
                      this.pos = s,
                      this.elemsData = i,
                      this._currentCopies = 0,
                      this._elements = [],
                      this._groups = [],
                      this.frameId = -1,
                      this.initDynamicPropertyContainer(t),
                      this.initModifierProperties(t, e[s]);
                    s > 0;

                  )
                    (s -= 1), this._elements.unshift(e[s]);
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : this.getValue(!0);
                }),
                (it.prototype.resetElements = function (t) {
                  var e,
                    s = t.length;
                  for (e = 0; e < s; e += 1)
                    (t[e]._processed = !1),
                      "gr" === t[e].ty && this.resetElements(t[e].it);
                }),
                (it.prototype.cloneElements = function (t) {
                  var e = JSON.parse(JSON.stringify(t));
                  return this.resetElements(e), e;
                }),
                (it.prototype.changeGroupRender = function (t, e) {
                  var s,
                    i = t.length;
                  for (s = 0; s < i; s += 1)
                    (t[s]._render = e),
                      "gr" === t[s].ty && this.changeGroupRender(t[s].it, e);
                }),
                (it.prototype.processShapes = function (t) {
                  var e,
                    s,
                    i,
                    a,
                    r,
                    n = !1;
                  if (this._mdf || t) {
                    var h,
                      o = Math.ceil(this.c.v);
                    if (this._groups.length < o) {
                      for (; this._groups.length < o; ) {
                        var l = {
                          it: this.cloneElements(this._elements),
                          ty: "gr",
                        };
                        l.it.push({
                          a: { a: 0, ix: 1, k: [0, 0] },
                          nm: "Transform",
                          o: { a: 0, ix: 7, k: 100 },
                          p: { a: 0, ix: 2, k: [0, 0] },
                          r: {
                            a: 1,
                            ix: 6,
                            k: [
                              { s: 0, e: 0, t: 0 },
                              { s: 0, e: 0, t: 1 },
                            ],
                          },
                          s: { a: 0, ix: 3, k: [100, 100] },
                          sa: { a: 0, ix: 5, k: 0 },
                          sk: { a: 0, ix: 4, k: 0 },
                          ty: "tr",
                        }),
                          this.arr.splice(0, 0, l),
                          this._groups.splice(0, 0, l),
                          (this._currentCopies += 1);
                      }
                      this.elem.reloadShapes(), (n = !0);
                    }
                    for (r = 0, i = 0; i <= this._groups.length - 1; i += 1) {
                      if (
                        ((h = r < o),
                        (this._groups[i]._render = h),
                        this.changeGroupRender(this._groups[i].it, h),
                        !h)
                      ) {
                        var p = this.elemsData[i].it,
                          f = p[p.length - 1];
                        0 !== f.transform.op.v
                          ? ((f.transform.op._mdf = !0), (f.transform.op.v = 0))
                          : (f.transform.op._mdf = !1);
                      }
                      r += 1;
                    }
                    this._currentCopies = o;
                    var m = this.o.v,
                      d = m % 1,
                      c = m > 0 ? Math.floor(m) : Math.ceil(m),
                      u = this.pMatrix.props,
                      g = this.rMatrix.props,
                      y = this.sMatrix.props;
                    this.pMatrix.reset(),
                      this.rMatrix.reset(),
                      this.sMatrix.reset(),
                      this.tMatrix.reset(),
                      this.matrix.reset();
                    var v,
                      b,
                      _ = 0;
                    if (m > 0) {
                      for (; _ < c; )
                        this.applyTransforms(
                          this.pMatrix,
                          this.rMatrix,
                          this.sMatrix,
                          this.tr,
                          1,
                          !1
                        ),
                          (_ += 1);
                      d &&
                        (this.applyTransforms(
                          this.pMatrix,
                          this.rMatrix,
                          this.sMatrix,
                          this.tr,
                          d,
                          !1
                        ),
                        (_ += d));
                    } else if (m < 0) {
                      for (; _ > c; )
                        this.applyTransforms(
                          this.pMatrix,
                          this.rMatrix,
                          this.sMatrix,
                          this.tr,
                          1,
                          !0
                        ),
                          (_ -= 1);
                      d &&
                        (this.applyTransforms(
                          this.pMatrix,
                          this.rMatrix,
                          this.sMatrix,
                          this.tr,
                          -d,
                          !0
                        ),
                        (_ -= d));
                    }
                    for (
                      i = 1 === this.data.m ? 0 : this._currentCopies - 1,
                        a = 1 === this.data.m ? 1 : -1,
                        r = this._currentCopies;
                      r;

                    ) {
                      if (
                        ((b = (s = (e = this.elemsData[i].it)[e.length - 1]
                          .transform.mProps.v.props).length),
                        (e[e.length - 1].transform.mProps._mdf = !0),
                        (e[e.length - 1].transform.op._mdf = !0),
                        (e[e.length - 1].transform.op.v =
                          1 === this._currentCopies
                            ? this.so.v
                            : this.so.v +
                              (this.eo.v - this.so.v) *
                                (i / (this._currentCopies - 1))),
                        0 !== _)
                      ) {
                        for (
                          ((0 !== i && 1 === a) ||
                            (i !== this._currentCopies - 1 && -1 === a)) &&
                            this.applyTransforms(
                              this.pMatrix,
                              this.rMatrix,
                              this.sMatrix,
                              this.tr,
                              1,
                              !1
                            ),
                            this.matrix.transform(
                              g[0],
                              g[1],
                              g[2],
                              g[3],
                              g[4],
                              g[5],
                              g[6],
                              g[7],
                              g[8],
                              g[9],
                              g[10],
                              g[11],
                              g[12],
                              g[13],
                              g[14],
                              g[15]
                            ),
                            this.matrix.transform(
                              y[0],
                              y[1],
                              y[2],
                              y[3],
                              y[4],
                              y[5],
                              y[6],
                              y[7],
                              y[8],
                              y[9],
                              y[10],
                              y[11],
                              y[12],
                              y[13],
                              y[14],
                              y[15]
                            ),
                            this.matrix.transform(
                              u[0],
                              u[1],
                              u[2],
                              u[3],
                              u[4],
                              u[5],
                              u[6],
                              u[7],
                              u[8],
                              u[9],
                              u[10],
                              u[11],
                              u[12],
                              u[13],
                              u[14],
                              u[15]
                            ),
                            v = 0;
                          v < b;
                          v += 1
                        )
                          s[v] = this.matrix.props[v];
                        this.matrix.reset();
                      } else
                        for (this.matrix.reset(), v = 0; v < b; v += 1)
                          s[v] = this.matrix.props[v];
                      (_ += 1), (r -= 1), (i += a);
                    }
                  } else
                    for (r = this._currentCopies, i = 0, a = 1; r; )
                      (s = (e = this.elemsData[i].it)[e.length - 1].transform
                        .mProps.v.props),
                        (e[e.length - 1].transform.mProps._mdf = !1),
                        (e[e.length - 1].transform.op._mdf = !1),
                        (r -= 1),
                        (i += a);
                  return n;
                }),
                (it.prototype.addShape = function () {}),
                Q.registerModifier("rp", it),
                (at.prototype.addShape = function (t) {
                  this._length === this._maxLength &&
                    ((this.shapes = this.shapes.concat(I(this._maxLength))),
                    (this._maxLength *= 2)),
                    (this.shapes[this._length] = t),
                    (this._length += 1);
                }),
                (at.prototype.releaseShapes = function () {
                  var t;
                  for (t = 0; t < this._length; t += 1)
                    At.release(this.shapes[t]);
                  this._length = 0;
                }),
                (rt.prototype.getValue = function (t) {
                  if (
                    (this.elem.globalData.frameId !== this.frameId || t) &&
                    ((this.frameId = this.elem.globalData.frameId),
                    this.iterateDynamicProperties(),
                    (this._mdf = this._mdf || t),
                    this._mdf)
                  ) {
                    var e = 0,
                      s = this.dataProps.length;
                    for (
                      "svg" === this.renderer && (this.dashStr = ""), e = 0;
                      e < s;
                      e += 1
                    )
                      "o" !== this.dataProps[e].n
                        ? "svg" === this.renderer
                          ? (this.dashStr += " " + this.dataProps[e].p.v)
                          : (this.dashArray[e] = this.dataProps[e].p.v)
                        : (this.dashoffset[0] = this.dataProps[e].p.v);
                  }
                }),
                W([R], rt),
                (nt.prototype.comparePoints = function (t, e) {
                  for (var s = 0, i = this.o.length / 2; s < i; ) {
                    if (Math.abs(t[4 * s] - t[4 * e + 2 * s]) > 0.01) return !1;
                    s += 1;
                  }
                  return !0;
                }),
                (nt.prototype.checkCollapsable = function () {
                  if (this.o.length / 2 != this.c.length / 4) return !1;
                  if (this.data.k.k[0].s)
                    for (var t = 0, e = this.data.k.k.length; t < e; ) {
                      if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                        return !1;
                      t += 1;
                    }
                  else if (!this.comparePoints(this.data.k.k, this.data.p))
                    return !1;
                  return !0;
                }),
                (nt.prototype.getValue = function (t) {
                  if (
                    (this.prop.getValue(),
                    (this._mdf = !1),
                    (this._cmdf = !1),
                    (this._omdf = !1),
                    this.prop._mdf || t)
                  ) {
                    var e,
                      s,
                      i,
                      a = 4 * this.data.p;
                    for (e = 0; e < a; e += 1)
                      (s = e % 4 == 0 ? 100 : 255),
                        (i = Math.round(this.prop.v[e] * s)),
                        this.c[e] !== i && ((this.c[e] = i), (this._cmdf = !t));
                    if (this.o.length)
                      for (
                        a = this.prop.v.length, e = 4 * this.data.p;
                        e < a;
                        e += 1
                      )
                        (s = e % 2 == 0 ? 100 : 1),
                          (i =
                            e % 2 == 0
                              ? Math.round(100 * this.prop.v[e])
                              : this.prop.v[e]),
                          this.o[e - 4 * this.data.p] !== i &&
                            ((this.o[e - 4 * this.data.p] = i),
                            (this._omdf = !t));
                    this._mdf = !t;
                  }
                }),
                W([R], nt);
              var ht,
                ot = function (t, e, s, i) {
                  if (0 === e) return "";
                  var a,
                    r = t.o,
                    n = t.i,
                    h = t.v,
                    o = " M" + i.applyToPointStringified(h[0][0], h[0][1]);
                  for (a = 1; a < e; a += 1)
                    o +=
                      " C" +
                      i.applyToPointStringified(r[a - 1][0], r[a - 1][1]) +
                      " " +
                      i.applyToPointStringified(n[a][0], n[a][1]) +
                      " " +
                      i.applyToPointStringified(h[a][0], h[a][1]);
                  return (
                    s &&
                      e &&
                      ((o +=
                        " C" +
                        i.applyToPointStringified(r[a - 1][0], r[a - 1][1]) +
                        " " +
                        i.applyToPointStringified(n[0][0], n[0][1]) +
                        " " +
                        i.applyToPointStringified(h[0][0], h[0][1])),
                      (o += "z")),
                    o
                  );
                },
                lt = (function () {
                  function t(t) {
                    (this.audios = []),
                      (this.audioFactory = t),
                      (this._volume = 1),
                      (this._isMuted = !1);
                  }
                  return (
                    (t.prototype = {
                      addAudio: function (t) {
                        this.audios.push(t);
                      },
                      pause: function () {
                        var t,
                          e = this.audios.length;
                        for (t = 0; t < e; t += 1) this.audios[t].pause();
                      },
                      resume: function () {
                        var t,
                          e = this.audios.length;
                        for (t = 0; t < e; t += 1) this.audios[t].resume();
                      },
                      setRate: function (t) {
                        var e,
                          s = this.audios.length;
                        for (e = 0; e < s; e += 1) this.audios[e].setRate(t);
                      },
                      createAudio: function (t) {
                        return this.audioFactory
                          ? this.audioFactory(t)
                          : Howl
                          ? new Howl({ src: [t] })
                          : {
                              isPlaying: !1,
                              play: function () {
                                this.isPlaying = !0;
                              },
                              seek: function () {
                                this.isPlaying = !1;
                              },
                              playing: function () {},
                              rate: function () {},
                              setVolume: function () {},
                            };
                      },
                      setAudioFactory: function (t) {
                        this.audioFactory = t;
                      },
                      setVolume: function (t) {
                        (this._volume = t), this._updateVolume();
                      },
                      mute: function () {
                        (this._isMuted = !0), this._updateVolume();
                      },
                      unmute: function () {
                        (this._isMuted = !1), this._updateVolume();
                      },
                      getVolume: function () {
                        return this._volume;
                      },
                      _updateVolume: function () {
                        var t,
                          e = this.audios.length;
                        for (t = 0; t < e; t += 1)
                          this.audios[t].volume(
                            this._volume * (this._isMuted ? 0 : 1)
                          );
                      },
                    }),
                    function () {
                      return new t();
                    }
                  );
                })(),
                pt = (function () {
                  var t = (function () {
                    var t = V("canvas");
                    (t.width = 1), (t.height = 1);
                    var e = t.getContext("2d");
                    return (
                      (e.fillStyle = "rgba(0,0,0,0)"), e.fillRect(0, 0, 1, 1), t
                    );
                  })();
                  function e() {
                    (this.loadedAssets += 1),
                      this.loadedAssets === this.totalImages &&
                        this.loadedFootagesCount === this.totalFootages &&
                        this.imagesLoadedCb &&
                        this.imagesLoadedCb(null);
                  }
                  function s() {
                    (this.loadedFootagesCount += 1),
                      this.loadedAssets === this.totalImages &&
                        this.loadedFootagesCount === this.totalFootages &&
                        this.imagesLoadedCb &&
                        this.imagesLoadedCb(null);
                  }
                  function i(t, e, s) {
                    var i = "";
                    if (t.e) i = t.p;
                    else if (e) {
                      var a = t.p;
                      -1 !== a.indexOf("images/") && (a = a.split("/")[1]),
                        (i = e + a);
                    } else (i = s), (i += t.u ? t.u : ""), (i += t.p);
                    return i;
                  }
                  function a(t) {
                    var e = 0,
                      s = setInterval(
                        function () {
                          (t.getBBox().width || e > 500) &&
                            (this._imageLoaded(), clearInterval(s)),
                            (e += 1);
                        }.bind(this),
                        50
                      );
                  }
                  function r(t) {
                    var e = { assetData: t },
                      s = i(t, this.assetsPath, this.path);
                    return (
                      H.loadData(
                        s,
                        function (t) {
                          (e.img = t), this._footageLoaded();
                        }.bind(this),
                        function () {
                          (e.img = {}), this._footageLoaded();
                        }.bind(this)
                      ),
                      e
                    );
                  }
                  function n() {
                    (this._imageLoaded = e.bind(this)),
                      (this._footageLoaded = s.bind(this)),
                      (this.testImageLoaded = a.bind(this)),
                      (this.createFootageData = r.bind(this)),
                      (this.assetsPath = ""),
                      (this.path = ""),
                      (this.totalImages = 0),
                      (this.totalFootages = 0),
                      (this.loadedAssets = 0),
                      (this.loadedFootagesCount = 0),
                      (this.imagesLoadedCb = null),
                      (this.images = []);
                  }
                  return (
                    (n.prototype = {
                      loadAssets: function (t, e) {
                        var s;
                        this.imagesLoadedCb = e;
                        var i = t.length;
                        for (s = 0; s < i; s += 1)
                          t[s].layers ||
                            (t[s].t && "seq" !== t[s].t
                              ? 3 === t[s].t &&
                                ((this.totalFootages += 1),
                                this.images.push(this.createFootageData(t[s])))
                              : ((this.totalImages += 1),
                                this.images.push(this._createImageData(t[s]))));
                      },
                      setAssetsPath: function (t) {
                        this.assetsPath = t || "";
                      },
                      setPath: function (t) {
                        this.path = t || "";
                      },
                      loadedImages: function () {
                        return this.totalImages === this.loadedAssets;
                      },
                      loadedFootages: function () {
                        return this.totalFootages === this.loadedFootagesCount;
                      },
                      destroy: function () {
                        (this.imagesLoadedCb = null), (this.images.length = 0);
                      },
                      getAsset: function (t) {
                        for (var e = 0, s = this.images.length; e < s; ) {
                          if (this.images[e].assetData === t)
                            return this.images[e].img;
                          e += 1;
                        }
                        return null;
                      },
                      createImgData: function (e) {
                        var s = i(e, this.assetsPath, this.path),
                          a = V("img");
                        (a.crossOrigin = "anonymous"),
                          a.addEventListener("load", this._imageLoaded, !1),
                          a.addEventListener(
                            "error",
                            function () {
                              (r.img = t), this._imageLoaded();
                            }.bind(this),
                            !1
                          ),
                          (a.src = s);
                        var r = { img: a, assetData: e };
                        return r;
                      },
                      createImageData: function (e) {
                        var s = i(e, this.assetsPath, this.path),
                          a = L("image");
                        h
                          ? this.testImageLoaded(a)
                          : a.addEventListener("load", this._imageLoaded, !1),
                          a.addEventListener(
                            "error",
                            function () {
                              (r.img = t), this._imageLoaded();
                            }.bind(this),
                            !1
                          ),
                          a.setAttributeNS(
                            "http://www.w3.org/1999/xlink",
                            "href",
                            s
                          ),
                          this._elementHelper.append
                            ? this._elementHelper.append(a)
                            : this._elementHelper.appendChild(a);
                        var r = { img: a, assetData: e };
                        return r;
                      },
                      imageLoaded: e,
                      footageLoaded: s,
                      setCacheType: function (t, e) {
                        "svg" === t
                          ? ((this._elementHelper = e),
                            (this._createImageData =
                              this.createImageData.bind(this)))
                          : (this._createImageData =
                              this.createImgData.bind(this));
                      },
                    }),
                    n
                  );
                })(),
                ft =
                  ((ht = { maskType: !0 }),
                  (/MSIE 10/i.test(navigator.userAgent) ||
                    /MSIE 9/i.test(navigator.userAgent) ||
                    /rv:11.0/i.test(navigator.userAgent) ||
                    /Edge\/\d./i.test(navigator.userAgent)) &&
                    (ht.maskType = !1),
                  ht),
                mt = (function () {
                  var t = {};
                  return (
                    (t.createFilter = function (t, e) {
                      var s = L("filter");
                      return (
                        s.setAttribute("id", t),
                        !0 !== e &&
                          (s.setAttribute("filterUnits", "objectBoundingBox"),
                          s.setAttribute("x", "0%"),
                          s.setAttribute("y", "0%"),
                          s.setAttribute("width", "100%"),
                          s.setAttribute("height", "100%")),
                        s
                      );
                    }),
                    (t.createAlphaToLuminanceFilter = function () {
                      var t = L("feColorMatrix");
                      return (
                        t.setAttribute("type", "matrix"),
                        t.setAttribute("color-interpolation-filters", "sRGB"),
                        t.setAttribute(
                          "values",
                          "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"
                        ),
                        t
                      );
                    }),
                    t
                  );
                })();
              function dt(t, e, s) {
                (this._isFirstFrame = !0),
                  (this._hasMaskedPath = !1),
                  (this._frameId = -1),
                  (this._textData = t),
                  (this._renderType = e),
                  (this._elem = s),
                  (this._animatorsData = I(this._textData.a.length)),
                  (this._pathData = {}),
                  (this._moreOptions = { alignment: {} }),
                  (this.renderedLetters = []),
                  (this.lettersChangedFlag = !1),
                  this.initDynamicPropertyContainer(s);
              }
              function ct(t, e, s) {
                var i = { propType: !1 },
                  a = J.getProp,
                  r = e.a;
                (this.a = {
                  r: r.r ? a(t, r.r, 0, c, s) : i,
                  rx: r.rx ? a(t, r.rx, 0, c, s) : i,
                  ry: r.ry ? a(t, r.ry, 0, c, s) : i,
                  sk: r.sk ? a(t, r.sk, 0, c, s) : i,
                  sa: r.sa ? a(t, r.sa, 0, c, s) : i,
                  s: r.s ? a(t, r.s, 1, 0.01, s) : i,
                  a: r.a ? a(t, r.a, 1, 0, s) : i,
                  o: r.o ? a(t, r.o, 0, 0.01, s) : i,
                  p: r.p ? a(t, r.p, 1, 0, s) : i,
                  sw: r.sw ? a(t, r.sw, 0, 0, s) : i,
                  sc: r.sc ? a(t, r.sc, 1, 0, s) : i,
                  fc: r.fc ? a(t, r.fc, 1, 0, s) : i,
                  fh: r.fh ? a(t, r.fh, 0, 0, s) : i,
                  fs: r.fs ? a(t, r.fs, 0, 0.01, s) : i,
                  fb: r.fb ? a(t, r.fb, 0, 0.01, s) : i,
                  t: r.t ? a(t, r.t, 0, 0, s) : i,
                }),
                  (this.s = vt.getTextSelectorProp(t, e.s, s)),
                  (this.s.t = e.s.t);
              }
              function ut(t, e, s, i, a, r) {
                (this.o = t),
                  (this.sw = e),
                  (this.sc = s),
                  (this.fc = i),
                  (this.m = a),
                  (this.p = r),
                  (this._mdf = {
                    o: !0,
                    sw: !!e,
                    sc: !!s,
                    fc: !!i,
                    m: !0,
                    p: !0,
                  });
              }
              function gt(t, e) {
                (this._frameId = i),
                  (this.pv = ""),
                  (this.v = ""),
                  (this.kf = !1),
                  (this._isFirstFrame = !0),
                  (this._mdf = !1),
                  (this.data = e),
                  (this.elem = t),
                  (this.comp = this.elem.comp),
                  (this.keysIndex = 0),
                  (this.canResize = !1),
                  (this.minimumFontSize = 1),
                  (this.effectsSequence = []),
                  (this.currentData = {
                    ascent: 0,
                    boxWidth: this.defaultBoxWidth,
                    f: "",
                    fStyle: "",
                    fWeight: "",
                    fc: "",
                    j: "",
                    justifyOffset: "",
                    l: [],
                    lh: 0,
                    lineWidths: [],
                    ls: "",
                    of: "",
                    s: "",
                    sc: "",
                    sw: 0,
                    t: 0,
                    tr: 0,
                    sz: 0,
                    ps: null,
                    fillColorAnim: !1,
                    strokeColorAnim: !1,
                    strokeWidthAnim: !1,
                    yOffset: 0,
                    finalSize: 0,
                    finalText: [],
                    finalLineHeight: 0,
                    __complete: !1,
                  }),
                  this.copyData(this.currentData, this.data.d.k[0].s),
                  this.searchProperty() ||
                    this.completeTextData(this.currentData);
              }
              (dt.prototype.searchProperties = function () {
                var t,
                  e,
                  s = this._textData.a.length,
                  i = J.getProp;
                for (t = 0; t < s; t += 1)
                  (e = this._textData.a[t]),
                    (this._animatorsData[t] = new ct(this._elem, e, this));
                this._textData.p && "m" in this._textData.p
                  ? ((this._pathData = {
                      a: i(this._elem, this._textData.p.a, 0, 0, this),
                      f: i(this._elem, this._textData.p.f, 0, 0, this),
                      l: i(this._elem, this._textData.p.l, 0, 0, this),
                      r: i(this._elem, this._textData.p.r, 0, 0, this),
                      p: i(this._elem, this._textData.p.p, 0, 0, this),
                      m: this._elem.maskManager.getMaskProperty(
                        this._textData.p.m
                      ),
                    }),
                    (this._hasMaskedPath = !0))
                  : (this._hasMaskedPath = !1),
                  (this._moreOptions.alignment = i(
                    this._elem,
                    this._textData.m.a,
                    1,
                    0,
                    this
                  ));
              }),
                (dt.prototype.getMeasures = function (t, e) {
                  if (
                    ((this.lettersChangedFlag = e),
                    this._mdf ||
                      this._isFirstFrame ||
                      e ||
                      (this._hasMaskedPath && this._pathData.m._mdf))
                  ) {
                    this._isFirstFrame = !1;
                    var s,
                      i,
                      a,
                      r,
                      n,
                      h,
                      o,
                      l,
                      p,
                      f,
                      m,
                      d,
                      c,
                      u,
                      g,
                      y,
                      v,
                      b,
                      _,
                      k = this._moreOptions.alignment.v,
                      A = this._animatorsData,
                      P = this._textData,
                      C = this.mHelper,
                      S = this._renderType,
                      D = this.renderedLetters.length,
                      x = t.l;
                    if (this._hasMaskedPath) {
                      if (
                        ((_ = this._pathData.m),
                        !this._pathData.n || this._pathData._mdf)
                      ) {
                        var E,
                          T = _.v;
                        for (
                          this._pathData.r.v && (T = T.reverse()),
                            n = { tLength: 0, segments: [] },
                            r = T._length - 1,
                            y = 0,
                            a = 0;
                          a < r;
                          a += 1
                        )
                          (E = G.buildBezierData(
                            T.v[a],
                            T.v[a + 1],
                            [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]],
                            [
                              T.i[a + 1][0] - T.v[a + 1][0],
                              T.i[a + 1][1] - T.v[a + 1][1],
                            ]
                          )),
                            (n.tLength += E.segmentLength),
                            n.segments.push(E),
                            (y += E.segmentLength);
                        (a = r),
                          _.v.c &&
                            ((E = G.buildBezierData(
                              T.v[a],
                              T.v[0],
                              [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]],
                              [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]
                            )),
                            (n.tLength += E.segmentLength),
                            n.segments.push(E),
                            (y += E.segmentLength)),
                          (this._pathData.pi = n);
                      }
                      if (
                        ((n = this._pathData.pi),
                        (h = this._pathData.f.v),
                        (m = 0),
                        (f = 1),
                        (l = 0),
                        (p = !0),
                        (u = n.segments),
                        h < 0 && _.v.c)
                      )
                        for (
                          n.tLength < Math.abs(h) &&
                            (h = -Math.abs(h) % n.tLength),
                            f = (c = u[(m = u.length - 1)].points).length - 1;
                          h < 0;

                        )
                          (h += c[f].partialLength),
                            (f -= 1) < 0 &&
                              (f = (c = u[(m -= 1)].points).length - 1);
                      (d = (c = u[m].points)[f - 1]),
                        (g = (o = c[f]).partialLength);
                    }
                    (r = x.length), (s = 0), (i = 0);
                    var I,
                      L,
                      V,
                      R,
                      z,
                      N = 1.2 * t.finalSize * 0.714,
                      O = !0;
                    V = A.length;
                    var B,
                      q,
                      j,
                      W,
                      H,
                      X,
                      Y,
                      J,
                      K,
                      U,
                      Z,
                      Q,
                      $ = -1,
                      tt = h,
                      et = m,
                      st = f,
                      it = -1,
                      at = "",
                      rt = this.defaultPropsArray;
                    if (2 === t.j || 1 === t.j) {
                      var nt = 0,
                        ht = 0,
                        ot = 2 === t.j ? -0.5 : -1,
                        lt = 0,
                        pt = !0;
                      for (a = 0; a < r; a += 1)
                        if (x[a].n) {
                          for (nt && (nt += ht); lt < a; )
                            (x[lt].animatorJustifyOffset = nt), (lt += 1);
                          (nt = 0), (pt = !0);
                        } else {
                          for (L = 0; L < V; L += 1)
                            (I = A[L].a).t.propType &&
                              (pt && 2 === t.j && (ht += I.t.v * ot),
                              (z = A[L].s.getMult(
                                x[a].anIndexes[L],
                                P.a[L].s.totalChars
                              )).length
                                ? (nt += I.t.v * z[0] * ot)
                                : (nt += I.t.v * z * ot));
                          pt = !1;
                        }
                      for (nt && (nt += ht); lt < a; )
                        (x[lt].animatorJustifyOffset = nt), (lt += 1);
                    }
                    for (a = 0; a < r; a += 1) {
                      if ((C.reset(), (W = 1), x[a].n))
                        (s = 0),
                          (i += t.yOffset),
                          (i += O ? 1 : 0),
                          (h = tt),
                          (O = !1),
                          this._hasMaskedPath &&
                            ((f = st),
                            (d = (c = u[(m = et)].points)[f - 1]),
                            (g = (o = c[f]).partialLength),
                            (l = 0)),
                          (at = ""),
                          (Z = ""),
                          (K = ""),
                          (Q = ""),
                          (rt = this.defaultPropsArray);
                      else {
                        if (this._hasMaskedPath) {
                          if (it !== x[a].line) {
                            switch (t.j) {
                              case 1:
                                h += y - t.lineWidths[x[a].line];
                                break;
                              case 2:
                                h += (y - t.lineWidths[x[a].line]) / 2;
                            }
                            it = x[a].line;
                          }
                          $ !== x[a].ind &&
                            (x[$] && (h += x[$].extra),
                            (h += x[a].an / 2),
                            ($ = x[a].ind)),
                            (h += k[0] * x[a].an * 0.005);
                          var ft = 0;
                          for (L = 0; L < V; L += 1)
                            (I = A[L].a).p.propType &&
                              ((z = A[L].s.getMult(
                                x[a].anIndexes[L],
                                P.a[L].s.totalChars
                              )).length
                                ? (ft += I.p.v[0] * z[0])
                                : (ft += I.p.v[0] * z)),
                              I.a.propType &&
                                ((z = A[L].s.getMult(
                                  x[a].anIndexes[L],
                                  P.a[L].s.totalChars
                                )).length
                                  ? (ft += I.a.v[0] * z[0])
                                  : (ft += I.a.v[0] * z));
                          for (
                            p = !0,
                              this._pathData.a.v &&
                                ((h =
                                  0.5 * x[0].an +
                                  ((y -
                                    this._pathData.f.v -
                                    0.5 * x[0].an -
                                    0.5 * x[x.length - 1].an) *
                                    $) /
                                    (r - 1)),
                                (h += this._pathData.f.v));
                            p;

                          )
                            l + g >= h + ft || !c
                              ? ((v = (h + ft - l) / o.partialLength),
                                (q =
                                  d.point[0] + (o.point[0] - d.point[0]) * v),
                                (j =
                                  d.point[1] + (o.point[1] - d.point[1]) * v),
                                C.translate(
                                  -k[0] * x[a].an * 0.005,
                                  -k[1] * N * 0.01
                                ),
                                (p = !1))
                              : c &&
                                ((l += o.partialLength),
                                (f += 1) >= c.length &&
                                  ((f = 0),
                                  u[(m += 1)]
                                    ? (c = u[m].points)
                                    : _.v.c
                                    ? ((f = 0), (c = u[(m = 0)].points))
                                    : ((l -= o.partialLength), (c = null))),
                                c && ((d = o), (g = (o = c[f]).partialLength)));
                          (B = x[a].an / 2 - x[a].add), C.translate(-B, 0, 0);
                        } else
                          (B = x[a].an / 2 - x[a].add),
                            C.translate(-B, 0, 0),
                            C.translate(
                              -k[0] * x[a].an * 0.005,
                              -k[1] * N * 0.01,
                              0
                            );
                        for (L = 0; L < V; L += 1)
                          (I = A[L].a).t.propType &&
                            ((z = A[L].s.getMult(
                              x[a].anIndexes[L],
                              P.a[L].s.totalChars
                            )),
                            (0 === s && 0 === t.j) ||
                              (this._hasMaskedPath
                                ? z.length
                                  ? (h += I.t.v * z[0])
                                  : (h += I.t.v * z)
                                : z.length
                                ? (s += I.t.v * z[0])
                                : (s += I.t.v * z)));
                        for (
                          t.strokeWidthAnim && (X = t.sw || 0),
                            t.strokeColorAnim &&
                              (H = t.sc
                                ? [t.sc[0], t.sc[1], t.sc[2]]
                                : [0, 0, 0]),
                            t.fillColorAnim &&
                              t.fc &&
                              (Y = [t.fc[0], t.fc[1], t.fc[2]]),
                            L = 0;
                          L < V;
                          L += 1
                        )
                          (I = A[L].a).a.propType &&
                            ((z = A[L].s.getMult(
                              x[a].anIndexes[L],
                              P.a[L].s.totalChars
                            )).length
                              ? C.translate(
                                  -I.a.v[0] * z[0],
                                  -I.a.v[1] * z[1],
                                  I.a.v[2] * z[2]
                                )
                              : C.translate(
                                  -I.a.v[0] * z,
                                  -I.a.v[1] * z,
                                  I.a.v[2] * z
                                ));
                        for (L = 0; L < V; L += 1)
                          (I = A[L].a).s.propType &&
                            ((z = A[L].s.getMult(
                              x[a].anIndexes[L],
                              P.a[L].s.totalChars
                            )).length
                              ? C.scale(
                                  1 + (I.s.v[0] - 1) * z[0],
                                  1 + (I.s.v[1] - 1) * z[1],
                                  1
                                )
                              : C.scale(
                                  1 + (I.s.v[0] - 1) * z,
                                  1 + (I.s.v[1] - 1) * z,
                                  1
                                ));
                        for (L = 0; L < V; L += 1) {
                          if (
                            ((I = A[L].a),
                            (z = A[L].s.getMult(
                              x[a].anIndexes[L],
                              P.a[L].s.totalChars
                            )),
                            I.sk.propType &&
                              (z.length
                                ? C.skewFromAxis(-I.sk.v * z[0], I.sa.v * z[1])
                                : C.skewFromAxis(-I.sk.v * z, I.sa.v * z)),
                            I.r.propType &&
                              (z.length
                                ? C.rotateZ(-I.r.v * z[2])
                                : C.rotateZ(-I.r.v * z)),
                            I.ry.propType &&
                              (z.length
                                ? C.rotateY(I.ry.v * z[1])
                                : C.rotateY(I.ry.v * z)),
                            I.rx.propType &&
                              (z.length
                                ? C.rotateX(I.rx.v * z[0])
                                : C.rotateX(I.rx.v * z)),
                            I.o.propType &&
                              (z.length
                                ? (W += (I.o.v * z[0] - W) * z[0])
                                : (W += (I.o.v * z - W) * z)),
                            t.strokeWidthAnim &&
                              I.sw.propType &&
                              (z.length
                                ? (X += I.sw.v * z[0])
                                : (X += I.sw.v * z)),
                            t.strokeColorAnim && I.sc.propType)
                          )
                            for (J = 0; J < 3; J += 1)
                              z.length
                                ? (H[J] += (I.sc.v[J] - H[J]) * z[0])
                                : (H[J] += (I.sc.v[J] - H[J]) * z);
                          if (t.fillColorAnim && t.fc) {
                            if (I.fc.propType)
                              for (J = 0; J < 3; J += 1)
                                z.length
                                  ? (Y[J] += (I.fc.v[J] - Y[J]) * z[0])
                                  : (Y[J] += (I.fc.v[J] - Y[J]) * z);
                            I.fh.propType &&
                              (Y = z.length
                                ? w(Y, I.fh.v * z[0])
                                : w(Y, I.fh.v * z)),
                              I.fs.propType &&
                                (Y = z.length
                                  ? F(Y, I.fs.v * z[0])
                                  : F(Y, I.fs.v * z)),
                              I.fb.propType &&
                                (Y = z.length
                                  ? M(Y, I.fb.v * z[0])
                                  : M(Y, I.fb.v * z));
                          }
                        }
                        for (L = 0; L < V; L += 1)
                          (I = A[L].a).p.propType &&
                            ((z = A[L].s.getMult(
                              x[a].anIndexes[L],
                              P.a[L].s.totalChars
                            )),
                            this._hasMaskedPath
                              ? z.length
                                ? C.translate(
                                    0,
                                    I.p.v[1] * z[0],
                                    -I.p.v[2] * z[1]
                                  )
                                : C.translate(0, I.p.v[1] * z, -I.p.v[2] * z)
                              : z.length
                              ? C.translate(
                                  I.p.v[0] * z[0],
                                  I.p.v[1] * z[1],
                                  -I.p.v[2] * z[2]
                                )
                              : C.translate(
                                  I.p.v[0] * z,
                                  I.p.v[1] * z,
                                  -I.p.v[2] * z
                                ));
                        if (
                          (t.strokeWidthAnim && (K = X < 0 ? 0 : X),
                          t.strokeColorAnim &&
                            (U =
                              "rgb(" +
                              Math.round(255 * H[0]) +
                              "," +
                              Math.round(255 * H[1]) +
                              "," +
                              Math.round(255 * H[2]) +
                              ")"),
                          t.fillColorAnim &&
                            t.fc &&
                            (Z =
                              "rgb(" +
                              Math.round(255 * Y[0]) +
                              "," +
                              Math.round(255 * Y[1]) +
                              "," +
                              Math.round(255 * Y[2]) +
                              ")"),
                          this._hasMaskedPath)
                        ) {
                          if (
                            (C.translate(0, -t.ls),
                            C.translate(0, k[1] * N * 0.01 + i, 0),
                            this._pathData.p.v)
                          ) {
                            b =
                              (o.point[1] - d.point[1]) /
                              (o.point[0] - d.point[0]);
                            var mt = (180 * Math.atan(b)) / Math.PI;
                            o.point[0] < d.point[0] && (mt += 180),
                              C.rotate((-mt * Math.PI) / 180);
                          }
                          C.translate(q, j, 0),
                            (h -= k[0] * x[a].an * 0.005),
                            x[a + 1] &&
                              $ !== x[a + 1].ind &&
                              ((h += x[a].an / 2),
                              (h += 0.001 * t.tr * t.finalSize));
                        } else {
                          switch (
                            (C.translate(s, i, 0),
                            t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                            t.j)
                          ) {
                            case 1:
                              C.translate(
                                x[a].animatorJustifyOffset +
                                  t.justifyOffset +
                                  (t.boxWidth - t.lineWidths[x[a].line]),
                                0,
                                0
                              );
                              break;
                            case 2:
                              C.translate(
                                x[a].animatorJustifyOffset +
                                  t.justifyOffset +
                                  (t.boxWidth - t.lineWidths[x[a].line]) / 2,
                                0,
                                0
                              );
                          }
                          C.translate(0, -t.ls),
                            C.translate(B, 0, 0),
                            C.translate(
                              k[0] * x[a].an * 0.005,
                              k[1] * N * 0.01,
                              0
                            ),
                            (s += x[a].l + 0.001 * t.tr * t.finalSize);
                        }
                        "html" === S
                          ? (at = C.toCSS())
                          : "svg" === S
                          ? (at = C.to2dCSS())
                          : (rt = [
                              C.props[0],
                              C.props[1],
                              C.props[2],
                              C.props[3],
                              C.props[4],
                              C.props[5],
                              C.props[6],
                              C.props[7],
                              C.props[8],
                              C.props[9],
                              C.props[10],
                              C.props[11],
                              C.props[12],
                              C.props[13],
                              C.props[14],
                              C.props[15],
                            ]),
                          (Q = W);
                      }
                      D <= a
                        ? ((R = new ut(Q, K, U, Z, at, rt)),
                          this.renderedLetters.push(R),
                          (D += 1),
                          (this.lettersChangedFlag = !0))
                        : ((R = this.renderedLetters[a]),
                          (this.lettersChangedFlag =
                            R.update(Q, K, U, Z, at, rt) ||
                            this.lettersChangedFlag));
                    }
                  }
                }),
                (dt.prototype.getValue = function () {
                  this._elem.globalData.frameId !== this._frameId &&
                    ((this._frameId = this._elem.globalData.frameId),
                    this.iterateDynamicProperties());
                }),
                (dt.prototype.mHelper = new q()),
                (dt.prototype.defaultPropsArray = []),
                W([R], dt),
                (ut.prototype.update = function (t, e, s, i, a, r) {
                  (this._mdf.o = !1),
                    (this._mdf.sw = !1),
                    (this._mdf.sc = !1),
                    (this._mdf.fc = !1),
                    (this._mdf.m = !1),
                    (this._mdf.p = !1);
                  var n = !1;
                  return (
                    this.o !== t &&
                      ((this.o = t), (this._mdf.o = !0), (n = !0)),
                    this.sw !== e &&
                      ((this.sw = e), (this._mdf.sw = !0), (n = !0)),
                    this.sc !== s &&
                      ((this.sc = s), (this._mdf.sc = !0), (n = !0)),
                    this.fc !== i &&
                      ((this.fc = i), (this._mdf.fc = !0), (n = !0)),
                    this.m !== a &&
                      ((this.m = a), (this._mdf.m = !0), (n = !0)),
                    !r.length ||
                      (this.p[0] === r[0] &&
                        this.p[1] === r[1] &&
                        this.p[4] === r[4] &&
                        this.p[5] === r[5] &&
                        this.p[12] === r[12] &&
                        this.p[13] === r[13]) ||
                      ((this.p = r), (this._mdf.p = !0), (n = !0)),
                    n
                  );
                }),
                (gt.prototype.defaultBoxWidth = [0, 0]),
                (gt.prototype.copyData = function (t, e) {
                  for (var s in e)
                    Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                  return t;
                }),
                (gt.prototype.setCurrentData = function (t) {
                  t.__complete || this.completeTextData(t),
                    (this.currentData = t),
                    (this.currentData.boxWidth =
                      this.currentData.boxWidth || this.defaultBoxWidth),
                    (this._mdf = !0);
                }),
                (gt.prototype.searchProperty = function () {
                  return this.searchKeyframes();
                }),
                (gt.prototype.searchKeyframes = function () {
                  return (
                    (this.kf = this.data.d.k.length > 1),
                    this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
                    this.kf
                  );
                }),
                (gt.prototype.addEffect = function (t) {
                  this.effectsSequence.push(t),
                    this.elem.addDynamicProperty(this);
                }),
                (gt.prototype.getValue = function (t) {
                  if (
                    (this.elem.globalData.frameId !== this.frameId &&
                      this.effectsSequence.length) ||
                    t
                  ) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var e = this.currentData,
                      s = this.keysIndex;
                    if (this.lock) this.setCurrentData(this.currentData);
                    else {
                      var i;
                      (this.lock = !0), (this._mdf = !1);
                      var a = this.effectsSequence.length,
                        r = t || this.data.d.k[this.keysIndex].s;
                      for (i = 0; i < a; i += 1)
                        r =
                          s !== this.keysIndex
                            ? this.effectsSequence[i](r, r.t)
                            : this.effectsSequence[i](this.currentData, r.t);
                      e !== r && this.setCurrentData(r),
                        (this.v = this.currentData),
                        (this.pv = this.v),
                        (this.lock = !1),
                        (this.frameId = this.elem.globalData.frameId);
                    }
                  }
                }),
                (gt.prototype.getKeyframeValue = function () {
                  for (
                    var t = this.data.d.k,
                      e = this.elem.comp.renderedFrame,
                      s = 0,
                      i = t.length;
                    s <= i - 1 && !(s === i - 1 || t[s + 1].t > e);

                  )
                    s += 1;
                  return (
                    this.keysIndex !== s && (this.keysIndex = s),
                    this.data.d.k[this.keysIndex].s
                  );
                }),
                (gt.prototype.buildFinalText = function (t) {
                  for (var e, s, i = [], a = 0, r = t.length, n = !1; a < r; )
                    (e = t.charCodeAt(a)),
                      Y.isCombinedCharacter(e)
                        ? (i[i.length - 1] += t.charAt(a))
                        : e >= 55296 && e <= 56319
                        ? (s = t.charCodeAt(a + 1)) >= 56320 && s <= 57343
                          ? (n || Y.isModifier(e, s)
                              ? ((i[i.length - 1] += t.substr(a, 2)), (n = !1))
                              : i.push(t.substr(a, 2)),
                            (a += 1))
                          : i.push(t.charAt(a))
                        : e > 56319
                        ? ((s = t.charCodeAt(a + 1)),
                          Y.isZeroWidthJoiner(e, s)
                            ? ((n = !0),
                              (i[i.length - 1] += t.substr(a, 2)),
                              (a += 1))
                            : i.push(t.charAt(a)))
                        : Y.isZeroWidthJoiner(e)
                        ? ((i[i.length - 1] += t.charAt(a)), (n = !0))
                        : i.push(t.charAt(a)),
                      (a += 1);
                  return i;
                }),
                (gt.prototype.completeTextData = function (t) {
                  t.__complete = !0;
                  var e,
                    s,
                    i,
                    a,
                    r,
                    n,
                    h,
                    o = this.elem.globalData.fontManager,
                    l = this.data,
                    p = [],
                    f = 0,
                    m = l.m.g,
                    d = 0,
                    c = 0,
                    u = 0,
                    g = [],
                    y = 0,
                    v = 0,
                    b = o.getFontByName(t.f),
                    _ = 0,
                    k = X(b);
                  (t.fWeight = k.weight),
                    (t.fStyle = k.style),
                    (t.finalSize = t.s),
                    (t.finalText = this.buildFinalText(t.t)),
                    (s = t.finalText.length),
                    (t.finalLineHeight = t.lh);
                  var A,
                    P = (t.tr / 1e3) * t.finalSize;
                  if (t.sz)
                    for (var C, S, D = !0, x = t.sz[0], F = t.sz[1]; D; ) {
                      (C = 0),
                        (y = 0),
                        (s = (S = this.buildFinalText(t.t)).length),
                        (P = (t.tr / 1e3) * t.finalSize);
                      var M = -1;
                      for (e = 0; e < s; e += 1)
                        (A = S[e].charCodeAt(0)),
                          (i = !1),
                          " " === S[e]
                            ? (M = e)
                            : (13 !== A && 3 !== A) ||
                              ((y = 0),
                              (i = !0),
                              (C += t.finalLineHeight || 1.2 * t.finalSize)),
                          o.chars
                            ? ((h = o.getCharData(S[e], b.fStyle, b.fFamily)),
                              (_ = i ? 0 : (h.w * t.finalSize) / 100))
                            : (_ = o.measureText(S[e], t.f, t.finalSize)),
                          y + _ > x && " " !== S[e]
                            ? (-1 === M ? (s += 1) : (e = M),
                              (C += t.finalLineHeight || 1.2 * t.finalSize),
                              S.splice(e, M === e ? 1 : 0, "\r"),
                              (M = -1),
                              (y = 0))
                            : ((y += _), (y += P));
                      (C += (b.ascent * t.finalSize) / 100),
                        this.canResize &&
                        t.finalSize > this.minimumFontSize &&
                        F < C
                          ? ((t.finalSize -= 1),
                            (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                          : ((t.finalText = S),
                            (s = t.finalText.length),
                            (D = !1));
                    }
                  (y = -P), (_ = 0);
                  var w,
                    E = 0;
                  for (e = 0; e < s; e += 1)
                    if (
                      ((i = !1),
                      13 === (A = (w = t.finalText[e]).charCodeAt(0)) || 3 === A
                        ? ((E = 0),
                          g.push(y),
                          (v = y > v ? y : v),
                          (y = -2 * P),
                          (a = ""),
                          (i = !0),
                          (u += 1))
                        : (a = w),
                      o.chars
                        ? ((h = o.getCharData(
                            w,
                            b.fStyle,
                            o.getFontByName(t.f).fFamily
                          )),
                          (_ = i ? 0 : (h.w * t.finalSize) / 100))
                        : (_ = o.measureText(a, t.f, t.finalSize)),
                      " " === w ? (E += _ + P) : ((y += _ + P + E), (E = 0)),
                      p.push({
                        l: _,
                        an: _,
                        add: d,
                        n: i,
                        anIndexes: [],
                        val: a,
                        line: u,
                        animatorJustifyOffset: 0,
                      }),
                      2 == m)
                    ) {
                      if (((d += _), "" === a || " " === a || e === s - 1)) {
                        for (("" !== a && " " !== a) || (d -= _); c <= e; )
                          (p[c].an = d),
                            (p[c].ind = f),
                            (p[c].extra = _),
                            (c += 1);
                        (f += 1), (d = 0);
                      }
                    } else if (3 == m) {
                      if (((d += _), "" === a || e === s - 1)) {
                        for ("" === a && (d -= _); c <= e; )
                          (p[c].an = d),
                            (p[c].ind = f),
                            (p[c].extra = _),
                            (c += 1);
                        (d = 0), (f += 1);
                      }
                    } else (p[f].ind = f), (p[f].extra = 0), (f += 1);
                  if (((t.l = p), (v = y > v ? y : v), g.push(y), t.sz))
                    (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
                  else
                    switch (((t.boxWidth = v), t.j)) {
                      case 1:
                        t.justifyOffset = -t.boxWidth;
                        break;
                      case 2:
                        t.justifyOffset = -t.boxWidth / 2;
                        break;
                      default:
                        t.justifyOffset = 0;
                    }
                  t.lineWidths = g;
                  var T,
                    I,
                    L,
                    V,
                    R = l.a;
                  n = R.length;
                  var z = [];
                  for (r = 0; r < n; r += 1) {
                    for (
                      (T = R[r]).a.sc && (t.strokeColorAnim = !0),
                        T.a.sw && (t.strokeWidthAnim = !0),
                        (T.a.fc || T.a.fh || T.a.fs || T.a.fb) &&
                          (t.fillColorAnim = !0),
                        V = 0,
                        L = T.s.b,
                        e = 0;
                      e < s;
                      e += 1
                    )
                      ((I = p[e]).anIndexes[r] = V),
                        ((1 == L && "" !== I.val) ||
                          (2 == L && "" !== I.val && " " !== I.val) ||
                          (3 == L && (I.n || " " == I.val || e == s - 1)) ||
                          (4 == L && (I.n || e == s - 1))) &&
                          (1 === T.s.rn && z.push(V), (V += 1));
                    l.a[r].s.totalChars = V;
                    var N,
                      O = -1;
                    if (1 === T.s.rn)
                      for (e = 0; e < s; e += 1)
                        O != (I = p[e]).anIndexes[r] &&
                          ((O = I.anIndexes[r]),
                          (N = z.splice(
                            Math.floor(Math.random() * z.length),
                            1
                          )[0])),
                          (I.anIndexes[r] = N);
                  }
                  (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
                    (t.ls = t.ls || 0),
                    (t.ascent = (b.ascent * t.finalSize) / 100);
                }),
                (gt.prototype.updateDocumentData = function (t, e) {
                  e = void 0 === e ? this.keysIndex : e;
                  var s = this.copyData({}, this.data.d.k[e].s);
                  (s = this.copyData(s, t)),
                    (this.data.d.k[e].s = s),
                    this.recalculate(e),
                    this.elem.addDynamicProperty(this);
                }),
                (gt.prototype.recalculate = function (t) {
                  var e = this.data.d.k[t].s;
                  (e.__complete = !1),
                    (this.keysIndex = 0),
                    (this._isFirstFrame = !0),
                    this.getValue(e);
                }),
                (gt.prototype.canResizeFont = function (t) {
                  (this.canResize = t),
                    this.recalculate(this.keysIndex),
                    this.elem.addDynamicProperty(this);
                }),
                (gt.prototype.setMinimumFontSize = function (t) {
                  (this.minimumFontSize = Math.floor(t) || 1),
                    this.recalculate(this.keysIndex),
                    this.elem.addDynamicProperty(this);
                });
              var yt,
                vt = (function () {
                  var t = Math.max,
                    e = Math.min,
                    s = Math.floor;
                  function i(t, e) {
                    (this._currentTextLength = -1),
                      (this.k = !1),
                      (this.data = e),
                      (this.elem = t),
                      (this.comp = t.comp),
                      (this.finalS = 0),
                      (this.finalE = 0),
                      this.initDynamicPropertyContainer(t),
                      (this.s = J.getProp(t, e.s || { k: 0 }, 0, 0, this)),
                      (this.e =
                        "e" in e ? J.getProp(t, e.e, 0, 0, this) : { v: 100 }),
                      (this.o = J.getProp(t, e.o || { k: 0 }, 0, 0, this)),
                      (this.xe = J.getProp(t, e.xe || { k: 0 }, 0, 0, this)),
                      (this.ne = J.getProp(t, e.ne || { k: 0 }, 0, 0, this)),
                      (this.sm = J.getProp(t, e.sm || { k: 100 }, 0, 0, this)),
                      (this.a = J.getProp(t, e.a, 0, 0.01, this)),
                      this.dynamicProperties.length || this.getValue();
                  }
                  return (
                    (i.prototype = {
                      getMult: function (i) {
                        this._currentTextLength !==
                          this.elem.textProperty.currentData.l.length &&
                          this.getValue();
                        var a = 0,
                          r = 0,
                          n = 1,
                          h = 1;
                        this.ne.v > 0
                          ? (a = this.ne.v / 100)
                          : (r = -this.ne.v / 100),
                          this.xe.v > 0
                            ? (n = 1 - this.xe.v / 100)
                            : (h = 1 + this.xe.v / 100);
                        var o = j.getBezierEasing(a, r, n, h).get,
                          l = 0,
                          p = this.finalS,
                          f = this.finalE,
                          m = this.data.sh;
                        if (2 === m)
                          l = o(
                            (l =
                              f === p
                                ? i >= f
                                  ? 1
                                  : 0
                                : t(0, e(0.5 / (f - p) + (i - p) / (f - p), 1)))
                          );
                        else if (3 === m)
                          l = o(
                            (l =
                              f === p
                                ? i >= f
                                  ? 0
                                  : 1
                                : 1 -
                                  t(0, e(0.5 / (f - p) + (i - p) / (f - p), 1)))
                          );
                        else if (4 === m)
                          f === p
                            ? (l = 0)
                            : (l = t(
                                0,
                                e(0.5 / (f - p) + (i - p) / (f - p), 1)
                              )) < 0.5
                            ? (l *= 2)
                            : (l = 1 - 2 * (l - 0.5)),
                            (l = o(l));
                        else if (5 === m) {
                          if (f === p) l = 0;
                          else {
                            var d = f - p,
                              c = -d / 2 + (i = e(t(0, i + 0.5 - p), f - p)),
                              u = d / 2;
                            l = Math.sqrt(1 - (c * c) / (u * u));
                          }
                          l = o(l);
                        } else
                          6 === m
                            ? (f === p
                                ? (l = 0)
                                : ((i = e(t(0, i + 0.5 - p), f - p)),
                                  (l =
                                    (1 +
                                      Math.cos(
                                        Math.PI + (2 * Math.PI * i) / (f - p)
                                      )) /
                                    2)),
                              (l = o(l)))
                            : (i >= s(p) &&
                                (l = t(
                                  0,
                                  e(i - p < 0 ? e(f, 1) - (p - i) : f - i, 1)
                                )),
                              (l = o(l)));
                        if (100 !== this.sm.v) {
                          var g = 0.01 * this.sm.v;
                          0 === g && (g = 1e-8);
                          var y = 0.5 - 0.5 * g;
                          l < y ? (l = 0) : (l = (l - y) / g) > 1 && (l = 1);
                        }
                        return l * this.a.v;
                      },
                      getValue: function (t) {
                        this.iterateDynamicProperties(),
                          (this._mdf = t || this._mdf),
                          (this._currentTextLength =
                            this.elem.textProperty.currentData.l.length || 0),
                          t &&
                            2 === this.data.r &&
                            (this.e.v = this._currentTextLength);
                        var e =
                            2 === this.data.r ? 1 : 100 / this.data.totalChars,
                          s = this.o.v / e,
                          i = this.s.v / e + s,
                          a = this.e.v / e + s;
                        if (i > a) {
                          var r = i;
                          (i = a), (a = r);
                        }
                        (this.finalS = i), (this.finalE = a);
                      },
                    }),
                    W([R], i),
                    {
                      getTextSelectorProp: function (t, e, s) {
                        return new i(t, e, s);
                      },
                    }
                  );
                })(),
                bt = function (t, e, s) {
                  var i = 0,
                    a = t,
                    r = I(a);
                  return {
                    newElement: function () {
                      return i ? r[(i -= 1)] : e();
                    },
                    release: function (t) {
                      i === a && ((r = _t.double(r)), (a *= 2)),
                        s && s(t),
                        (r[i] = t),
                        (i += 1);
                    },
                  };
                },
                _t = {
                  double: function (t) {
                    return t.concat(I(t.length));
                  },
                },
                kt = bt(8, function () {
                  return T("float32", 2);
                }),
                At =
                  (((yt = bt(
                    4,
                    function () {
                      return new U();
                    },
                    function (t) {
                      var e,
                        s = t._length;
                      for (e = 0; e < s; e += 1)
                        kt.release(t.v[e]),
                          kt.release(t.i[e]),
                          kt.release(t.o[e]),
                          (t.v[e] = null),
                          (t.i[e] = null),
                          (t.o[e] = null);
                      (t._length = 0), (t.c = !1);
                    }
                  )).clone = function (t) {
                    var e,
                      s = yt.newElement(),
                      i = void 0 === t._length ? t.v.length : t._length;
                    for (s.setLength(i), s.c = t.c, e = 0; e < i; e += 1)
                      s.setTripleAt(
                        t.v[e][0],
                        t.v[e][1],
                        t.o[e][0],
                        t.o[e][1],
                        t.i[e][0],
                        t.i[e][1],
                        e
                      );
                    return s;
                  }),
                  yt),
                Pt = (function () {
                  var t = {
                      newShapeCollection: function () {
                        return e ? i[(e -= 1)] : new at();
                      },
                      release: function (t) {
                        var a,
                          r = t._length;
                        for (a = 0; a < r; a += 1) At.release(t.shapes[a]);
                        (t._length = 0),
                          e === s && ((i = _t.double(i)), (s *= 2)),
                          (i[e] = t),
                          (e += 1);
                      },
                    },
                    e = 0,
                    s = 4,
                    i = I(s);
                  return t;
                })(),
                Ct = bt(
                  8,
                  function () {
                    return { lengths: [], totalLength: 0 };
                  },
                  function (t) {
                    var e,
                      s = t.lengths.length;
                    for (e = 0; e < s; e += 1) St.release(t.lengths[e]);
                    t.lengths.length = 0;
                  }
                ),
                St = bt(8, function () {
                  return {
                    addedLength: 0,
                    percents: T("float32", d),
                    lengths: T("float32", d),
                  };
                }),
                Dt = (function () {
                  function t(t) {
                    for (
                      var e, s = t.split("\r\n"), i = {}, a = 0, r = 0;
                      r < s.length;
                      r += 1
                    )
                      2 === (e = s[r].split(":")).length &&
                        ((i[e[0]] = e[1].trim()), (a += 1));
                    if (0 === a) throw new Error();
                    return i;
                  }
                  return function (e) {
                    for (var s = [], i = 0; i < e.length; i += 1) {
                      var a = e[i],
                        r = { time: a.tm, duration: a.dr };
                      try {
                        r.payload = JSON.parse(e[i].cm);
                      } catch (s) {
                        try {
                          r.payload = t(e[i].cm);
                        } catch (t) {
                          r.payload = { name: e[i] };
                        }
                      }
                      s.push(r);
                    }
                    return s;
                  };
                })();
              function xt() {}
              function Ft(t, e) {
                (this.animationItem = t),
                  (this.layers = null),
                  (this.renderedFrame = -1),
                  (this.svgElement = L("svg"));
                var s = "";
                if (e && e.title) {
                  var i = L("title"),
                    a = S();
                  i.setAttribute("id", a),
                    (i.textContent = e.title),
                    this.svgElement.appendChild(i),
                    (s += a);
                }
                if (e && e.description) {
                  var r = L("desc"),
                    n = S();
                  r.setAttribute("id", n),
                    (r.textContent = e.description),
                    this.svgElement.appendChild(r),
                    (s += " " + n);
                }
                s && this.svgElement.setAttribute("aria-labelledby", s);
                var h = L("defs");
                this.svgElement.appendChild(h);
                var o = L("g");
                this.svgElement.appendChild(o),
                  (this.layerElement = o),
                  (this.renderConfig = {
                    preserveAspectRatio:
                      (e && e.preserveAspectRatio) || "xMidYMid meet",
                    imagePreserveAspectRatio:
                      (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                    contentVisibility: (e && e.contentVisibility) || "visible",
                    progressiveLoad: (e && e.progressiveLoad) || !1,
                    hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                    viewBoxOnly: (e && e.viewBoxOnly) || !1,
                    viewBoxSize: (e && e.viewBoxSize) || !1,
                    className: (e && e.className) || "",
                    id: (e && e.id) || "",
                    focusable: e && e.focusable,
                    filterSize: {
                      width:
                        (e && e.filterSize && e.filterSize.width) || "100%",
                      height:
                        (e && e.filterSize && e.filterSize.height) || "100%",
                      x: (e && e.filterSize && e.filterSize.x) || "0%",
                      y: (e && e.filterSize && e.filterSize.y) || "0%",
                    },
                  }),
                  (this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: h,
                    renderConfig: this.renderConfig,
                  }),
                  (this.elements = []),
                  (this.pendingElements = []),
                  (this.destroyed = !1),
                  (this.rendererType = "svg");
              }
              function Mt(t, e, i) {
                (this.data = t),
                  (this.element = e),
                  (this.globalData = i),
                  (this.storedData = []),
                  (this.masksProperties = this.data.masksProperties || []),
                  (this.maskElement = null);
                var a,
                  r,
                  n = this.globalData.defs,
                  h = this.masksProperties ? this.masksProperties.length : 0;
                (this.viewData = I(h)), (this.solidPath = "");
                var o,
                  l,
                  p,
                  f,
                  m,
                  d,
                  c = this.masksProperties,
                  u = 0,
                  g = [],
                  y = S(),
                  v = "clipPath",
                  b = "clip-path";
                for (a = 0; a < h; a += 1)
                  if (
                    ((("a" !== c[a].mode && "n" !== c[a].mode) ||
                      c[a].inv ||
                      100 !== c[a].o.k ||
                      c[a].o.x) &&
                      ((v = "mask"), (b = "mask")),
                    ("s" !== c[a].mode && "i" !== c[a].mode) || 0 !== u
                      ? (p = null)
                      : ((p = L("rect")).setAttribute("fill", "#ffffff"),
                        p.setAttribute("width", this.element.comp.data.w || 0),
                        p.setAttribute("height", this.element.comp.data.h || 0),
                        g.push(p)),
                    (r = L("path")),
                    "n" === c[a].mode)
                  )
                    (this.viewData[a] = {
                      op: J.getProp(
                        this.element,
                        c[a].o,
                        0,
                        0.01,
                        this.element
                      ),
                      prop: Z.getShapeProp(this.element, c[a], 3),
                      elem: r,
                      lastPath: "",
                    }),
                      n.appendChild(r);
                  else {
                    var _;
                    if (
                      ((u += 1),
                      r.setAttribute(
                        "fill",
                        "s" === c[a].mode ? "#000000" : "#ffffff"
                      ),
                      r.setAttribute("clip-rule", "nonzero"),
                      0 !== c[a].x.k
                        ? ((v = "mask"),
                          (b = "mask"),
                          (d = J.getProp(
                            this.element,
                            c[a].x,
                            0,
                            null,
                            this.element
                          )),
                          (_ = S()),
                          (f = L("filter")).setAttribute("id", _),
                          (m = L("feMorphology")).setAttribute(
                            "operator",
                            "erode"
                          ),
                          m.setAttribute("in", "SourceGraphic"),
                          m.setAttribute("radius", "0"),
                          f.appendChild(m),
                          n.appendChild(f),
                          r.setAttribute(
                            "stroke",
                            "s" === c[a].mode ? "#000000" : "#ffffff"
                          ))
                        : ((m = null), (d = null)),
                      (this.storedData[a] = {
                        elem: r,
                        x: d,
                        expan: m,
                        lastPath: "",
                        lastOperator: "",
                        filterId: _,
                        lastRadius: 0,
                      }),
                      "i" === c[a].mode)
                    ) {
                      l = g.length;
                      var k = L("g");
                      for (o = 0; o < l; o += 1) k.appendChild(g[o]);
                      var A = L("mask");
                      A.setAttribute("mask-type", "alpha"),
                        A.setAttribute("id", y + "_" + u),
                        A.appendChild(r),
                        n.appendChild(A),
                        k.setAttribute(
                          "mask",
                          "url(" + s + "#" + y + "_" + u + ")"
                        ),
                        (g.length = 0),
                        g.push(k);
                    } else g.push(r);
                    c[a].inv &&
                      !this.solidPath &&
                      (this.solidPath = this.createLayerSolidPath()),
                      (this.viewData[a] = {
                        elem: r,
                        lastPath: "",
                        op: J.getProp(
                          this.element,
                          c[a].o,
                          0,
                          0.01,
                          this.element
                        ),
                        prop: Z.getShapeProp(this.element, c[a], 3),
                        invRect: p,
                      }),
                      this.viewData[a].prop.k ||
                        this.drawPath(
                          c[a],
                          this.viewData[a].prop.v,
                          this.viewData[a]
                        );
                  }
                for (
                  this.maskElement = L(v), h = g.length, a = 0;
                  a < h;
                  a += 1
                )
                  this.maskElement.appendChild(g[a]);
                u > 0 &&
                  (this.maskElement.setAttribute("id", y),
                  this.element.maskedElement.setAttribute(
                    b,
                    "url(" + s + "#" + y + ")"
                  ),
                  n.appendChild(this.maskElement)),
                  this.viewData.length &&
                    this.element.addRenderableComponent(this);
              }
              function wt() {}
              function Et() {}
              function Tt() {}
              function It() {}
              function Lt() {}
              function Vt(t, e) {
                (this.elem = t), (this.pos = e);
              }
              function Rt(t, e) {
                (this.data = t),
                  (this.type = t.ty),
                  (this.d = ""),
                  (this.lvl = e),
                  (this._mdf = !1),
                  (this.closed = !0 === t.hd),
                  (this.pElem = L("path")),
                  (this.msElem = null);
              }
              function zt(t, e, s) {
                (this.caches = []),
                  (this.styles = []),
                  (this.transformers = t),
                  (this.lStr = ""),
                  (this.sh = s),
                  (this.lvl = e),
                  (this._isAnimated = !!s.k);
                for (var i = 0, a = t.length; i < a; ) {
                  if (t[i].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break;
                  }
                  i += 1;
                }
              }
              function Nt(t, e, s) {
                (this.transform = { mProps: t, op: e, container: s }),
                  (this.elements = []),
                  (this._isAnimated =
                    this.transform.mProps.dynamicProperties.length ||
                    this.transform.op.effectsSequence.length);
              }
              function Ot(t, e, s) {
                this.initDynamicPropertyContainer(t),
                  (this.getValue = this.iterateDynamicProperties),
                  (this.o = J.getProp(t, e.o, 0, 0.01, this)),
                  (this.w = J.getProp(t, e.w, 0, null, this)),
                  (this.d = new rt(t, e.d || {}, "svg", this)),
                  (this.c = J.getProp(t, e.c, 1, 255, this)),
                  (this.style = s),
                  (this._isAnimated = !!this._isAnimated);
              }
              function Bt(t, e, s) {
                this.initDynamicPropertyContainer(t),
                  (this.getValue = this.iterateDynamicProperties),
                  (this.o = J.getProp(t, e.o, 0, 0.01, this)),
                  (this.c = J.getProp(t, e.c, 1, 255, this)),
                  (this.style = s);
              }
              function qt(t, e, s) {
                this.initDynamicPropertyContainer(t),
                  (this.getValue = this.iterateDynamicProperties),
                  this.initGradientData(t, e, s);
              }
              function jt(t, e, s) {
                this.initDynamicPropertyContainer(t),
                  (this.getValue = this.iterateDynamicProperties),
                  (this.w = J.getProp(t, e.w, 0, null, this)),
                  (this.d = new rt(t, e.d || {}, "svg", this)),
                  this.initGradientData(t, e, s),
                  (this._isAnimated = !!this._isAnimated);
              }
              function Wt() {
                (this.it = []), (this.prevViewData = []), (this.gr = L("g"));
              }
              (xt.prototype.checkLayers = function (t) {
                var e,
                  s,
                  i = this.layers.length;
                for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1)
                  this.elements[e] ||
                    ((s = this.layers[e]).ip - s.st <= t - this.layers[e].st &&
                      s.op - s.st > t - this.layers[e].st &&
                      this.buildItem(e)),
                    (this.completeLayers =
                      !!this.elements[e] && this.completeLayers);
                this.checkPendingElements();
              }),
                (xt.prototype.createItem = function (t) {
                  switch (t.ty) {
                    case 2:
                      return this.createImage(t);
                    case 0:
                      return this.createComp(t);
                    case 1:
                      return this.createSolid(t);
                    case 3:
                    default:
                      return this.createNull(t);
                    case 4:
                      return this.createShape(t);
                    case 5:
                      return this.createText(t);
                    case 6:
                      return this.createAudio(t);
                    case 13:
                      return this.createCamera(t);
                    case 15:
                      return this.createFootage(t);
                  }
                }),
                (xt.prototype.createCamera = function () {
                  throw new Error(
                    "You're using a 3d camera. Try the html renderer."
                  );
                }),
                (xt.prototype.createAudio = function (t) {
                  return new $t(t, this.globalData, this);
                }),
                (xt.prototype.createFootage = function (t) {
                  return new FootageElement(t, this.globalData, this);
                }),
                (xt.prototype.buildAllItems = function () {
                  var t,
                    e = this.layers.length;
                  for (t = 0; t < e; t += 1) this.buildItem(t);
                  this.checkPendingElements();
                }),
                (xt.prototype.includeLayers = function (t) {
                  var e;
                  this.completeLayers = !1;
                  var s,
                    i = t.length,
                    a = this.layers.length;
                  for (e = 0; e < i; e += 1)
                    for (s = 0; s < a; ) {
                      if (this.layers[s].id === t[e].id) {
                        this.layers[s] = t[e];
                        break;
                      }
                      s += 1;
                    }
                }),
                (xt.prototype.setProjectInterface = function (t) {
                  this.globalData.projectInterface = t;
                }),
                (xt.prototype.initItems = function () {
                  this.globalData.progressiveLoad || this.buildAllItems();
                }),
                (xt.prototype.buildElementParenting = function (t, e, s) {
                  for (
                    var i = this.elements, a = this.layers, r = 0, n = a.length;
                    r < n;

                  )
                    a[r].ind == e &&
                      (i[r] && !0 !== i[r]
                        ? (s.push(i[r]),
                          i[r].setAsParent(),
                          void 0 !== a[r].parent
                            ? this.buildElementParenting(t, a[r].parent, s)
                            : t.setHierarchy(s))
                        : (this.buildItem(r), this.addPendingElement(t))),
                      (r += 1);
                }),
                (xt.prototype.addPendingElement = function (t) {
                  this.pendingElements.push(t);
                }),
                (xt.prototype.searchExtraCompositions = function (t) {
                  var e,
                    s = t.length;
                  for (e = 0; e < s; e += 1)
                    if (t[e].xt) {
                      var i = this.createComp(t[e]);
                      i.initExpressions(),
                        this.globalData.projectInterface.registerComposition(i);
                    }
                }),
                (xt.prototype.setupGlobalData = function (t, e) {
                  (this.globalData.fontManager = new Y()),
                    this.globalData.fontManager.addChars(t.chars),
                    this.globalData.fontManager.addFonts(t.fonts, e),
                    (this.globalData.getAssetData =
                      this.animationItem.getAssetData.bind(this.animationItem)),
                    (this.globalData.getAssetsPath =
                      this.animationItem.getAssetsPath.bind(
                        this.animationItem
                      )),
                    (this.globalData.imageLoader =
                      this.animationItem.imagePreloader),
                    (this.globalData.audioController =
                      this.animationItem.audioController),
                    (this.globalData.frameId = 0),
                    (this.globalData.frameRate = t.fr),
                    (this.globalData.nm = t.nm),
                    (this.globalData.compSize = { w: t.w, h: t.h });
                }),
                W([xt], Ft),
                (Ft.prototype.createNull = function (t) {
                  return new Xt(t, this.globalData, this);
                }),
                (Ft.prototype.createShape = function (t) {
                  return new se(t, this.globalData, this);
                }),
                (Ft.prototype.createText = function (t) {
                  return new ee(t, this.globalData, this);
                }),
                (Ft.prototype.createImage = function (t) {
                  return new Zt(t, this.globalData, this);
                }),
                (Ft.prototype.createComp = function (t) {
                  return new te(t, this.globalData, this);
                }),
                (Ft.prototype.createSolid = function (t) {
                  return new Qt(t, this.globalData, this);
                }),
                (Ft.prototype.configAnimation = function (t) {
                  this.svgElement.setAttribute(
                    "xmlns",
                    "http://www.w3.org/2000/svg"
                  ),
                    this.renderConfig.viewBoxSize
                      ? this.svgElement.setAttribute(
                          "viewBox",
                          this.renderConfig.viewBoxSize
                        )
                      : this.svgElement.setAttribute(
                          "viewBox",
                          "0 0 " + t.w + " " + t.h
                        ),
                    this.renderConfig.viewBoxOnly ||
                      (this.svgElement.setAttribute("width", t.w),
                      this.svgElement.setAttribute("height", t.h),
                      (this.svgElement.style.width = "100%"),
                      (this.svgElement.style.height = "100%"),
                      (this.svgElement.style.transform = "translate3d(0,0,0)"),
                      (this.svgElement.style.contentVisibility =
                        this.renderConfig.contentVisibility)),
                    this.renderConfig.className &&
                      this.svgElement.setAttribute(
                        "class",
                        this.renderConfig.className
                      ),
                    this.renderConfig.id &&
                      this.svgElement.setAttribute("id", this.renderConfig.id),
                    void 0 !== this.renderConfig.focusable &&
                      this.svgElement.setAttribute(
                        "focusable",
                        this.renderConfig.focusable
                      ),
                    this.svgElement.setAttribute(
                      "preserveAspectRatio",
                      this.renderConfig.preserveAspectRatio
                    ),
                    this.animationItem.wrapper.appendChild(this.svgElement);
                  var e = this.globalData.defs;
                  this.setupGlobalData(t, e),
                    (this.globalData.progressiveLoad =
                      this.renderConfig.progressiveLoad),
                    (this.data = t);
                  var i = L("clipPath"),
                    a = L("rect");
                  a.setAttribute("width", t.w),
                    a.setAttribute("height", t.h),
                    a.setAttribute("x", 0),
                    a.setAttribute("y", 0);
                  var r = S();
                  i.setAttribute("id", r),
                    i.appendChild(a),
                    this.layerElement.setAttribute(
                      "clip-path",
                      "url(" + s + "#" + r + ")"
                    ),
                    e.appendChild(i),
                    (this.layers = t.layers),
                    (this.elements = I(t.layers.length));
                }),
                (Ft.prototype.destroy = function () {
                  var t;
                  this.animationItem.wrapper &&
                    (this.animationItem.wrapper.innerText = ""),
                    (this.layerElement = null),
                    (this.globalData.defs = null);
                  var e = this.layers ? this.layers.length : 0;
                  for (t = 0; t < e; t += 1)
                    this.elements[t] && this.elements[t].destroy();
                  (this.elements.length = 0),
                    (this.destroyed = !0),
                    (this.animationItem = null);
                }),
                (Ft.prototype.updateContainerSize = function () {}),
                (Ft.prototype.buildItem = function (t) {
                  var s = this.elements;
                  if (!s[t] && 99 !== this.layers[t].ty) {
                    s[t] = !0;
                    var i = this.createItem(this.layers[t]);
                    (s[t] = i),
                      e &&
                        (0 === this.layers[t].ty &&
                          this.globalData.projectInterface.registerComposition(
                            i
                          ),
                        i.initExpressions()),
                      this.appendElementInPos(i, t),
                      this.layers[t].tt &&
                        (this.elements[t - 1] && !0 !== this.elements[t - 1]
                          ? i.setMatte(s[t - 1].layerId)
                          : (this.buildItem(t - 1), this.addPendingElement(i)));
                  }
                }),
                (Ft.prototype.checkPendingElements = function () {
                  for (; this.pendingElements.length; ) {
                    var t = this.pendingElements.pop();
                    if ((t.checkParenting(), t.data.tt))
                      for (var e = 0, s = this.elements.length; e < s; ) {
                        if (this.elements[e] === t) {
                          t.setMatte(this.elements[e - 1].layerId);
                          break;
                        }
                        e += 1;
                      }
                  }
                }),
                (Ft.prototype.renderFrame = function (t) {
                  if (this.renderedFrame !== t && !this.destroyed) {
                    var e;
                    null === t
                      ? (t = this.renderedFrame)
                      : (this.renderedFrame = t),
                      (this.globalData.frameNum = t),
                      (this.globalData.frameId += 1),
                      (this.globalData.projectInterface.currentFrame = t),
                      (this.globalData._mdf = !1);
                    var s = this.layers.length;
                    for (
                      this.completeLayers || this.checkLayers(t), e = s - 1;
                      e >= 0;
                      e -= 1
                    )
                      (this.completeLayers || this.elements[e]) &&
                        this.elements[e].prepareFrame(t - this.layers[e].st);
                    if (this.globalData._mdf)
                      for (e = 0; e < s; e += 1)
                        (this.completeLayers || this.elements[e]) &&
                          this.elements[e].renderFrame();
                  }
                }),
                (Ft.prototype.appendElementInPos = function (t, e) {
                  var s = t.getBaseElement();
                  if (s) {
                    for (var i, a = 0; a < e; )
                      this.elements[a] &&
                        !0 !== this.elements[a] &&
                        this.elements[a].getBaseElement() &&
                        (i = this.elements[a].getBaseElement()),
                        (a += 1);
                    i
                      ? this.layerElement.insertBefore(s, i)
                      : this.layerElement.appendChild(s);
                  }
                }),
                (Ft.prototype.hide = function () {
                  this.layerElement.style.display = "none";
                }),
                (Ft.prototype.show = function () {
                  this.layerElement.style.display = "block";
                }),
                (Mt.prototype.getMaskProperty = function (t) {
                  return this.viewData[t].prop;
                }),
                (Mt.prototype.renderFrame = function (t) {
                  var e,
                    i = this.element.finalTransform.mat,
                    a = this.masksProperties.length;
                  for (e = 0; e < a; e += 1)
                    if (
                      ((this.viewData[e].prop._mdf || t) &&
                        this.drawPath(
                          this.masksProperties[e],
                          this.viewData[e].prop.v,
                          this.viewData[e]
                        ),
                      (this.viewData[e].op._mdf || t) &&
                        this.viewData[e].elem.setAttribute(
                          "fill-opacity",
                          this.viewData[e].op.v
                        ),
                      "n" !== this.masksProperties[e].mode &&
                        (this.viewData[e].invRect &&
                          (this.element.finalTransform.mProp._mdf || t) &&
                          this.viewData[e].invRect.setAttribute(
                            "transform",
                            i.getInverseMatrix().to2dCSS()
                          ),
                        this.storedData[e].x &&
                          (this.storedData[e].x._mdf || t)))
                    ) {
                      var r = this.storedData[e].expan;
                      this.storedData[e].x.v < 0
                        ? ("erode" !== this.storedData[e].lastOperator &&
                            ((this.storedData[e].lastOperator = "erode"),
                            this.storedData[e].elem.setAttribute(
                              "filter",
                              "url(" +
                                s +
                                "#" +
                                this.storedData[e].filterId +
                                ")"
                            )),
                          r.setAttribute("radius", -this.storedData[e].x.v))
                        : ("dilate" !== this.storedData[e].lastOperator &&
                            ((this.storedData[e].lastOperator = "dilate"),
                            this.storedData[e].elem.setAttribute(
                              "filter",
                              null
                            )),
                          this.storedData[e].elem.setAttribute(
                            "stroke-width",
                            2 * this.storedData[e].x.v
                          ));
                    }
                }),
                (Mt.prototype.getMaskelement = function () {
                  return this.maskElement;
                }),
                (Mt.prototype.createLayerSolidPath = function () {
                  var t = "M0,0 ";
                  return (
                    (t += " h" + this.globalData.compSize.w),
                    (t += " v" + this.globalData.compSize.h),
                    (t += " h-" + this.globalData.compSize.w) +
                      " v-" +
                      this.globalData.compSize.h +
                      " "
                  );
                }),
                (Mt.prototype.drawPath = function (t, e, s) {
                  var i,
                    a,
                    r = " M" + e.v[0][0] + "," + e.v[0][1];
                  for (a = e._length, i = 1; i < a; i += 1)
                    r +=
                      " C" +
                      e.o[i - 1][0] +
                      "," +
                      e.o[i - 1][1] +
                      " " +
                      e.i[i][0] +
                      "," +
                      e.i[i][1] +
                      " " +
                      e.v[i][0] +
                      "," +
                      e.v[i][1];
                  if (
                    (e.c &&
                      a > 1 &&
                      (r +=
                        " C" +
                        e.o[i - 1][0] +
                        "," +
                        e.o[i - 1][1] +
                        " " +
                        e.i[0][0] +
                        "," +
                        e.i[0][1] +
                        " " +
                        e.v[0][0] +
                        "," +
                        e.v[0][1]),
                    s.lastPath !== r)
                  ) {
                    var n = "";
                    s.elem &&
                      (e.c && (n = t.inv ? this.solidPath + r : r),
                      s.elem.setAttribute("d", n)),
                      (s.lastPath = r);
                  }
                }),
                (Mt.prototype.destroy = function () {
                  (this.element = null),
                    (this.globalData = null),
                    (this.maskElement = null),
                    (this.data = null),
                    (this.masksProperties = null);
                }),
                (wt.prototype = {
                  initHierarchy: function () {
                    (this.hierarchy = []),
                      (this._isParent = !1),
                      this.checkParenting();
                  },
                  setHierarchy: function (t) {
                    this.hierarchy = t;
                  },
                  setAsParent: function () {
                    this._isParent = !0;
                  },
                  checkParenting: function () {
                    void 0 !== this.data.parent &&
                      this.comp.buildElementParenting(
                        this,
                        this.data.parent,
                        []
                      );
                  },
                }),
                (Et.prototype = {
                  initFrame: function () {
                    (this._isFirstFrame = !1),
                      (this.dynamicProperties = []),
                      (this._mdf = !1);
                  },
                  prepareProperties: function (t, e) {
                    var s,
                      i = this.dynamicProperties.length;
                    for (s = 0; s < i; s += 1)
                      (e ||
                        (this._isParent &&
                          "transform" ===
                            this.dynamicProperties[s].propType)) &&
                        (this.dynamicProperties[s].getValue(),
                        this.dynamicProperties[s]._mdf &&
                          ((this.globalData._mdf = !0), (this._mdf = !0)));
                  },
                  addDynamicProperty: function (t) {
                    -1 === this.dynamicProperties.indexOf(t) &&
                      this.dynamicProperties.push(t);
                  },
                }),
                (Tt.prototype = {
                  initTransform: function () {
                    (this.finalTransform = {
                      mProp: this.data.ks
                        ? K.getTransformProperty(this, this.data.ks, this)
                        : { o: 0 },
                      _matMdf: !1,
                      _opMdf: !1,
                      mat: new q(),
                    }),
                      this.data.ao &&
                        (this.finalTransform.mProp.autoOriented = !0),
                      this.data.ty;
                  },
                  renderTransform: function () {
                    if (
                      ((this.finalTransform._opMdf =
                        this.finalTransform.mProp.o._mdf || this._isFirstFrame),
                      (this.finalTransform._matMdf =
                        this.finalTransform.mProp._mdf || this._isFirstFrame),
                      this.hierarchy)
                    ) {
                      var t,
                        e = this.finalTransform.mat,
                        s = 0,
                        i = this.hierarchy.length;
                      if (!this.finalTransform._matMdf)
                        for (; s < i; ) {
                          if (this.hierarchy[s].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = !0;
                            break;
                          }
                          s += 1;
                        }
                      if (this.finalTransform._matMdf)
                        for (
                          t = this.finalTransform.mProp.v.props,
                            e.cloneFromProps(t),
                            s = 0;
                          s < i;
                          s += 1
                        )
                          (t = this.hierarchy[s].finalTransform.mProp.v.props),
                            e.transform(
                              t[0],
                              t[1],
                              t[2],
                              t[3],
                              t[4],
                              t[5],
                              t[6],
                              t[7],
                              t[8],
                              t[9],
                              t[10],
                              t[11],
                              t[12],
                              t[13],
                              t[14],
                              t[15]
                            );
                    }
                  },
                  globalToLocal: function (t) {
                    var e = [];
                    e.push(this.finalTransform);
                    for (var s, i = !0, a = this.comp; i; )
                      a.finalTransform
                        ? (a.data.hasMask && e.splice(0, 0, a.finalTransform),
                          (a = a.comp))
                        : (i = !1);
                    var r,
                      n = e.length;
                    for (s = 0; s < n; s += 1)
                      (r = e[s].mat.applyToPointArray(0, 0, 0)),
                        (t = [t[0] - r[0], t[1] - r[1], 0]);
                    return t;
                  },
                  mHelper: new q(),
                }),
                (It.prototype = {
                  initRenderable: function () {
                    (this.isInRange = !1),
                      (this.hidden = !1),
                      (this.isTransparent = !1),
                      (this.renderableComponents = []);
                  },
                  addRenderableComponent: function (t) {
                    -1 === this.renderableComponents.indexOf(t) &&
                      this.renderableComponents.push(t);
                  },
                  removeRenderableComponent: function (t) {
                    -1 !== this.renderableComponents.indexOf(t) &&
                      this.renderableComponents.splice(
                        this.renderableComponents.indexOf(t),
                        1
                      );
                  },
                  prepareRenderableFrame: function (t) {
                    this.checkLayerLimits(t);
                  },
                  checkTransparency: function () {
                    this.finalTransform.mProp.o.v <= 0
                      ? !this.isTransparent &&
                        this.globalData.renderConfig.hideOnTransparent &&
                        ((this.isTransparent = !0), this.hide())
                      : this.isTransparent &&
                        ((this.isTransparent = !1), this.show());
                  },
                  checkLayerLimits: function (t) {
                    this.data.ip - this.data.st <= t &&
                    this.data.op - this.data.st > t
                      ? !0 !== this.isInRange &&
                        ((this.globalData._mdf = !0),
                        (this._mdf = !0),
                        (this.isInRange = !0),
                        this.show())
                      : !1 !== this.isInRange &&
                        ((this.globalData._mdf = !0),
                        (this.isInRange = !1),
                        this.hide());
                  },
                  renderRenderable: function () {
                    var t,
                      e = this.renderableComponents.length;
                    for (t = 0; t < e; t += 1)
                      this.renderableComponents[t].renderFrame(
                        this._isFirstFrame
                      );
                  },
                  sourceRectAtTime: function () {
                    return { top: 0, left: 0, width: 100, height: 100 };
                  },
                  getLayerSize: function () {
                    return 5 === this.data.ty
                      ? {
                          w: this.data.textData.width,
                          h: this.data.textData.height,
                        }
                      : { w: this.data.width, h: this.data.height };
                  },
                }),
                W(
                  [
                    It,
                    (function (t) {
                      function e() {}
                      return (e.prototype = t), e;
                    })({
                      initElement: function (t, e, s) {
                        this.initFrame(),
                          this.initBaseData(t, e, s),
                          this.initTransform(t, e, s),
                          this.initHierarchy(),
                          this.initRenderable(),
                          this.initRendererElement(),
                          this.createContainerElements(),
                          this.createRenderableComponents(),
                          this.createContent(),
                          this.hide();
                      },
                      hide: function () {
                        this.hidden ||
                          (this.isInRange && !this.isTransparent) ||
                          (((
                            this.baseElement || this.layerElement
                          ).style.display = "none"),
                          (this.hidden = !0));
                      },
                      show: function () {
                        this.isInRange &&
                          !this.isTransparent &&
                          (this.data.hd ||
                            ((
                              this.baseElement || this.layerElement
                            ).style.display = "block"),
                          (this.hidden = !1),
                          (this._isFirstFrame = !0));
                      },
                      renderFrame: function () {
                        this.data.hd ||
                          this.hidden ||
                          (this.renderTransform(),
                          this.renderRenderable(),
                          this.renderElement(),
                          this.renderInnerContent(),
                          this._isFirstFrame && (this._isFirstFrame = !1));
                      },
                      renderInnerContent: function () {},
                      prepareFrame: function (t) {
                        (this._mdf = !1),
                          this.prepareRenderableFrame(t),
                          this.prepareProperties(t, this.isInRange),
                          this.checkTransparency();
                      },
                      destroy: function () {
                        (this.innerElem = null), this.destroyBaseElement();
                      },
                    }),
                  ],
                  Lt
                ),
                (Rt.prototype.reset = function () {
                  (this.d = ""), (this._mdf = !1);
                }),
                (zt.prototype.setAsAnimated = function () {
                  this._isAnimated = !0;
                }),
                W([R], Ot),
                W([R], Bt),
                (qt.prototype.initGradientData = function (t, e, s) {
                  (this.o = J.getProp(t, e.o, 0, 0.01, this)),
                    (this.s = J.getProp(t, e.s, 1, null, this)),
                    (this.e = J.getProp(t, e.e, 1, null, this)),
                    (this.h = J.getProp(t, e.h || { k: 0 }, 0, 0.01, this)),
                    (this.a = J.getProp(t, e.a || { k: 0 }, 0, c, this)),
                    (this.g = new nt(t, e.g, this)),
                    (this.style = s),
                    (this.stops = []),
                    this.setGradientData(s.pElem, e),
                    this.setGradientOpacity(e, s),
                    (this._isAnimated = !!this._isAnimated);
                }),
                (qt.prototype.setGradientData = function (t, e) {
                  var i = S(),
                    a = L(1 === e.t ? "linearGradient" : "radialGradient");
                  a.setAttribute("id", i),
                    a.setAttribute("spreadMethod", "pad"),
                    a.setAttribute("gradientUnits", "userSpaceOnUse");
                  var r,
                    n,
                    h,
                    o = [];
                  for (h = 4 * e.g.p, n = 0; n < h; n += 4)
                    (r = L("stop")), a.appendChild(r), o.push(r);
                  t.setAttribute(
                    "gf" === e.ty ? "fill" : "stroke",
                    "url(" + s + "#" + i + ")"
                  ),
                    (this.gf = a),
                    (this.cst = o);
                }),
                (qt.prototype.setGradientOpacity = function (t, e) {
                  if (this.g._hasOpacity && !this.g._collapsable) {
                    var i,
                      a,
                      r,
                      n = L("mask"),
                      h = L("path");
                    n.appendChild(h);
                    var o = S(),
                      l = S();
                    n.setAttribute("id", l);
                    var p = L(1 === t.t ? "linearGradient" : "radialGradient");
                    p.setAttribute("id", o),
                      p.setAttribute("spreadMethod", "pad"),
                      p.setAttribute("gradientUnits", "userSpaceOnUse"),
                      (r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length);
                    var f = this.stops;
                    for (a = 4 * t.g.p; a < r; a += 2)
                      (i = L("stop")).setAttribute(
                        "stop-color",
                        "rgb(255,255,255)"
                      ),
                        p.appendChild(i),
                        f.push(i);
                    h.setAttribute(
                      "gf" === t.ty ? "fill" : "stroke",
                      "url(" + s + "#" + o + ")"
                    ),
                      "gs" === t.ty &&
                        (h.setAttribute("stroke-linecap", O[t.lc || 2]),
                        h.setAttribute("stroke-linejoin", B[t.lj || 2]),
                        1 === t.lj &&
                          h.setAttribute("stroke-miterlimit", t.ml)),
                      (this.of = p),
                      (this.ms = n),
                      (this.ost = f),
                      (this.maskId = l),
                      (e.msElem = h);
                  }
                }),
                W([R], qt),
                W([qt, R], jt);
              var Gt = (function () {
                var t = new q(),
                  e = new q();
                function s(t, e, s) {
                  (s || e.transform.op._mdf) &&
                    e.transform.container.setAttribute(
                      "opacity",
                      e.transform.op.v
                    ),
                    (s || e.transform.mProps._mdf) &&
                      e.transform.container.setAttribute(
                        "transform",
                        e.transform.mProps.v.to2dCSS()
                      );
                }
                function i(s, i, a) {
                  var r,
                    n,
                    h,
                    o,
                    l,
                    p,
                    f,
                    m,
                    d,
                    c,
                    u,
                    g = i.styles.length,
                    y = i.lvl;
                  for (p = 0; p < g; p += 1) {
                    if (((o = i.sh._mdf || a), i.styles[p].lvl < y)) {
                      for (
                        m = e.reset(),
                          c = y - i.styles[p].lvl,
                          u = i.transformers.length - 1;
                        !o && c > 0;

                      )
                        (o = i.transformers[u].mProps._mdf || o),
                          (c -= 1),
                          (u -= 1);
                      if (o)
                        for (
                          c = y - i.styles[p].lvl,
                            u = i.transformers.length - 1;
                          c > 0;

                        )
                          (d = i.transformers[u].mProps.v.props),
                            m.transform(
                              d[0],
                              d[1],
                              d[2],
                              d[3],
                              d[4],
                              d[5],
                              d[6],
                              d[7],
                              d[8],
                              d[9],
                              d[10],
                              d[11],
                              d[12],
                              d[13],
                              d[14],
                              d[15]
                            ),
                            (c -= 1),
                            (u -= 1);
                    } else m = t;
                    if (((n = (f = i.sh.paths)._length), o)) {
                      for (h = "", r = 0; r < n; r += 1)
                        (l = f.shapes[r]) &&
                          l._length &&
                          (h += ot(l, l._length, l.c, m));
                      i.caches[p] = h;
                    } else h = i.caches[p];
                    (i.styles[p].d += !0 === s.hd ? "" : h),
                      (i.styles[p]._mdf = o || i.styles[p]._mdf);
                  }
                }
                function a(t, e, s) {
                  var i = e.style;
                  (e.c._mdf || s) &&
                    i.pElem.setAttribute(
                      "fill",
                      "rgb(" +
                        p(e.c.v[0]) +
                        "," +
                        p(e.c.v[1]) +
                        "," +
                        p(e.c.v[2]) +
                        ")"
                    ),
                    (e.o._mdf || s) &&
                      i.pElem.setAttribute("fill-opacity", e.o.v);
                }
                function r(t, e, s) {
                  n(t, e, s), h(0, e, s);
                }
                function n(t, e, s) {
                  var i,
                    a,
                    r,
                    n,
                    h,
                    o = e.gf,
                    l = e.g._hasOpacity,
                    p = e.s.v,
                    f = e.e.v;
                  if (e.o._mdf || s) {
                    var m = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                    e.style.pElem.setAttribute(m, e.o.v);
                  }
                  if (e.s._mdf || s) {
                    var d = 1 === t.t ? "x1" : "cx",
                      c = "x1" === d ? "y1" : "cy";
                    o.setAttribute(d, p[0]),
                      o.setAttribute(c, p[1]),
                      l &&
                        !e.g._collapsable &&
                        (e.of.setAttribute(d, p[0]),
                        e.of.setAttribute(c, p[1]));
                  }
                  if (e.g._cmdf || s) {
                    i = e.cst;
                    var u = e.g.c;
                    for (r = i.length, a = 0; a < r; a += 1)
                      (n = i[a]).setAttribute("offset", u[4 * a] + "%"),
                        n.setAttribute(
                          "stop-color",
                          "rgb(" +
                            u[4 * a + 1] +
                            "," +
                            u[4 * a + 2] +
                            "," +
                            u[4 * a + 3] +
                            ")"
                        );
                  }
                  if (l && (e.g._omdf || s)) {
                    var g = e.g.o;
                    for (
                      r = (i = e.g._collapsable ? e.cst : e.ost).length, a = 0;
                      a < r;
                      a += 1
                    )
                      (n = i[a]),
                        e.g._collapsable ||
                          n.setAttribute("offset", g[2 * a] + "%"),
                        n.setAttribute("stop-opacity", g[2 * a + 1]);
                  }
                  if (1 === t.t)
                    (e.e._mdf || s) &&
                      (o.setAttribute("x2", f[0]),
                      o.setAttribute("y2", f[1]),
                      l &&
                        !e.g._collapsable &&
                        (e.of.setAttribute("x2", f[0]),
                        e.of.setAttribute("y2", f[1])));
                  else if (
                    ((e.s._mdf || e.e._mdf || s) &&
                      ((h = Math.sqrt(
                        Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)
                      )),
                      o.setAttribute("r", h),
                      l && !e.g._collapsable && e.of.setAttribute("r", h)),
                    e.e._mdf || e.h._mdf || e.a._mdf || s)
                  ) {
                    h ||
                      (h = Math.sqrt(
                        Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)
                      ));
                    var y = Math.atan2(f[1] - p[1], f[0] - p[0]),
                      v = e.h.v;
                    v >= 1 ? (v = 0.99) : v <= -1 && (v = -0.99);
                    var b = h * v,
                      _ = Math.cos(y + e.a.v) * b + p[0],
                      k = Math.sin(y + e.a.v) * b + p[1];
                    o.setAttribute("fx", _),
                      o.setAttribute("fy", k),
                      l &&
                        !e.g._collapsable &&
                        (e.of.setAttribute("fx", _),
                        e.of.setAttribute("fy", k));
                  }
                }
                function h(t, e, s) {
                  var i = e.style,
                    a = e.d;
                  a &&
                    (a._mdf || s) &&
                    a.dashStr &&
                    (i.pElem.setAttribute("stroke-dasharray", a.dashStr),
                    i.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])),
                    e.c &&
                      (e.c._mdf || s) &&
                      i.pElem.setAttribute(
                        "stroke",
                        "rgb(" +
                          p(e.c.v[0]) +
                          "," +
                          p(e.c.v[1]) +
                          "," +
                          p(e.c.v[2]) +
                          ")"
                      ),
                    (e.o._mdf || s) &&
                      i.pElem.setAttribute("stroke-opacity", e.o.v),
                    (e.w._mdf || s) &&
                      (i.pElem.setAttribute("stroke-width", e.w.v),
                      i.msElem && i.msElem.setAttribute("stroke-width", e.w.v));
                }
                return {
                  createRenderFunction: function (t) {
                    switch (t.ty) {
                      case "fl":
                        return a;
                      case "gf":
                        return n;
                      case "gs":
                        return r;
                      case "st":
                        return h;
                      case "sh":
                      case "el":
                      case "rc":
                      case "sr":
                        return i;
                      case "tr":
                        return s;
                      default:
                        return null;
                    }
                  },
                };
              })();
              function Ht() {}
              function Xt(t, e, s) {
                this.initFrame(),
                  this.initBaseData(t, e, s),
                  this.initFrame(),
                  this.initTransform(t, e, s),
                  this.initHierarchy();
              }
              function Yt() {}
              function Jt() {}
              function Kt() {}
              function Ut() {}
              function Zt(t, e, s) {
                (this.assetData = e.getAssetData(t.refId)),
                  this.initElement(t, e, s),
                  (this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h,
                  });
              }
              function Qt(t, e, s) {
                this.initElement(t, e, s);
              }
              function $t(t, e, s) {
                this.initFrame(),
                  this.initRenderable(),
                  (this.assetData = e.getAssetData(t.refId)),
                  this.initBaseData(t, e, s),
                  (this._isPlaying = !1),
                  (this._canPlay = !1);
                var i = this.globalData.getAssetsPath(this.assetData);
                (this.audio = this.globalData.audioController.createAudio(i)),
                  (this._currentTime = 0),
                  this.globalData.audioController.addAudio(this),
                  (this.tm = t.tm
                    ? J.getProp(this, t.tm, 0, e.frameRate, this)
                    : { _placeholder: !0 });
              }
              function te(t, e, s) {
                (this.layers = t.layers),
                  (this.supports3d = !0),
                  (this.completeLayers = !1),
                  (this.pendingElements = []),
                  (this.elements = this.layers ? I(this.layers.length) : []),
                  this.initElement(t, e, s),
                  (this.tm = t.tm
                    ? J.getProp(this, t.tm, 0, e.frameRate, this)
                    : { _placeholder: !0 });
              }
              function ee(t, e, s) {
                (this.textSpans = []),
                  (this.renderType = "svg"),
                  this.initElement(t, e, s);
              }
              function se(t, e, s) {
                (this.shapes = []),
                  (this.shapesData = t.shapes),
                  (this.stylesList = []),
                  (this.shapeModifiers = []),
                  (this.itemsData = []),
                  (this.processedElements = []),
                  (this.animatedContents = []),
                  this.initElement(t, e, s),
                  (this.prevViewData = []);
              }
              function ie(t, e) {
                (this.initialized = !1),
                  (this.filterManager = e),
                  (this.elem = t),
                  (this.paths = []);
              }
              function ae(t, e) {
                this.filterManager = e;
                var s = this.filterManager.effectElements,
                  i = L("feComponentTransfer");
                (s[10].p.k ||
                  0 !== s[10].p.v ||
                  s[11].p.k ||
                  1 !== s[11].p.v ||
                  s[12].p.k ||
                  1 !== s[12].p.v ||
                  s[13].p.k ||
                  0 !== s[13].p.v ||
                  s[14].p.k ||
                  1 !== s[14].p.v) &&
                  (this.feFuncR = this.createFeFunc("feFuncR", i)),
                  (s[17].p.k ||
                    0 !== s[17].p.v ||
                    s[18].p.k ||
                    1 !== s[18].p.v ||
                    s[19].p.k ||
                    1 !== s[19].p.v ||
                    s[20].p.k ||
                    0 !== s[20].p.v ||
                    s[21].p.k ||
                    1 !== s[21].p.v) &&
                    (this.feFuncG = this.createFeFunc("feFuncG", i)),
                  (s[24].p.k ||
                    0 !== s[24].p.v ||
                    s[25].p.k ||
                    1 !== s[25].p.v ||
                    s[26].p.k ||
                    1 !== s[26].p.v ||
                    s[27].p.k ||
                    0 !== s[27].p.v ||
                    s[28].p.k ||
                    1 !== s[28].p.v) &&
                    (this.feFuncB = this.createFeFunc("feFuncB", i)),
                  (s[31].p.k ||
                    0 !== s[31].p.v ||
                    s[32].p.k ||
                    1 !== s[32].p.v ||
                    s[33].p.k ||
                    1 !== s[33].p.v ||
                    s[34].p.k ||
                    0 !== s[34].p.v ||
                    s[35].p.k ||
                    1 !== s[35].p.v) &&
                    (this.feFuncA = this.createFeFunc("feFuncA", i)),
                  (this.feFuncR ||
                    this.feFuncG ||
                    this.feFuncB ||
                    this.feFuncA) &&
                    (i.setAttribute("color-interpolation-filters", "sRGB"),
                    t.appendChild(i),
                    (i = L("feComponentTransfer"))),
                  (s[3].p.k ||
                    0 !== s[3].p.v ||
                    s[4].p.k ||
                    1 !== s[4].p.v ||
                    s[5].p.k ||
                    1 !== s[5].p.v ||
                    s[6].p.k ||
                    0 !== s[6].p.v ||
                    s[7].p.k ||
                    1 !== s[7].p.v) &&
                    (i.setAttribute("color-interpolation-filters", "sRGB"),
                    t.appendChild(i),
                    (this.feFuncRComposed = this.createFeFunc("feFuncR", i)),
                    (this.feFuncGComposed = this.createFeFunc("feFuncG", i)),
                    (this.feFuncBComposed = this.createFeFunc("feFuncB", i)));
              }
              (Ht.prototype = {
                checkMasks: function () {
                  if (!this.data.hasMask) return !1;
                  for (
                    var t = 0, e = this.data.masksProperties.length;
                    t < e;

                  ) {
                    if (
                      "n" !== this.data.masksProperties[t].mode &&
                      !1 !== this.data.masksProperties[t].cl
                    )
                      return !0;
                    t += 1;
                  }
                  return !1;
                },
                initExpressions: function () {
                  (this.layerInterface = LayerExpressionInterface(this)),
                    this.data.hasMask &&
                      this.maskManager &&
                      this.layerInterface.registerMaskInterface(
                        this.maskManager
                      );
                  var t = EffectsExpressionInterface.createEffectsInterface(
                    this,
                    this.layerInterface
                  );
                  this.layerInterface.registerEffectsInterface(t),
                    0 === this.data.ty || this.data.xt
                      ? (this.compInterface = CompExpressionInterface(this))
                      : 4 === this.data.ty
                      ? ((this.layerInterface.shapeInterface =
                          ShapeExpressionInterface(
                            this.shapesData,
                            this.itemsData,
                            this.layerInterface
                          )),
                        (this.layerInterface.content =
                          this.layerInterface.shapeInterface))
                      : 5 === this.data.ty &&
                        ((this.layerInterface.textInterface =
                          TextExpressionInterface(this)),
                        (this.layerInterface.text =
                          this.layerInterface.textInterface));
                },
                setBlendMode: function () {
                  var t = N(this.data.bm);
                  (this.baseElement || this.layerElement).style[
                    "mix-blend-mode"
                  ] = t;
                },
                initBaseData: function (t, e, s) {
                  (this.globalData = e),
                    (this.comp = s),
                    (this.data = t),
                    (this.layerId = S()),
                    this.data.sr || (this.data.sr = 1),
                    (this.effectsManager = new pe(
                      this.data,
                      this,
                      this.dynamicProperties
                    ));
                },
                getType: function () {
                  return this.type;
                },
                sourceRectAtTime: function () {},
              }),
                (Xt.prototype.prepareFrame = function (t) {
                  this.prepareProperties(t, !0);
                }),
                (Xt.prototype.renderFrame = function () {}),
                (Xt.prototype.getBaseElement = function () {
                  return null;
                }),
                (Xt.prototype.destroy = function () {}),
                (Xt.prototype.sourceRectAtTime = function () {}),
                (Xt.prototype.hide = function () {}),
                W([Ht, Tt, wt, Et], Xt),
                (Yt.prototype = {
                  initRendererElement: function () {
                    this.layerElement = L("g");
                  },
                  createContainerElements: function () {
                    (this.matteElement = L("g")),
                      (this.transformedElement = this.layerElement),
                      (this.maskedElement = this.layerElement),
                      (this._sizeChanged = !1);
                    var t,
                      e,
                      i,
                      a = null;
                    if (this.data.td) {
                      if (3 == this.data.td || 1 == this.data.td) {
                        var r = L("mask");
                        r.setAttribute("id", this.layerId),
                          r.setAttribute(
                            "mask-type",
                            3 == this.data.td ? "luminance" : "alpha"
                          ),
                          r.appendChild(this.layerElement),
                          (a = r),
                          this.globalData.defs.appendChild(r),
                          ft.maskType ||
                            1 != this.data.td ||
                            (r.setAttribute("mask-type", "luminance"),
                            (t = S()),
                            (e = mt.createFilter(t)),
                            this.globalData.defs.appendChild(e),
                            e.appendChild(mt.createAlphaToLuminanceFilter()),
                            (i = L("g")).appendChild(this.layerElement),
                            (a = i),
                            r.appendChild(i),
                            i.setAttribute(
                              "filter",
                              "url(" + s + "#" + t + ")"
                            ));
                      } else if (2 == this.data.td) {
                        var n = L("mask");
                        n.setAttribute("id", this.layerId),
                          n.setAttribute("mask-type", "alpha");
                        var h = L("g");
                        n.appendChild(h), (t = S()), (e = mt.createFilter(t));
                        var o = L("feComponentTransfer");
                        o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                        var l = L("feFuncA");
                        l.setAttribute("type", "table"),
                          l.setAttribute("tableValues", "1.0 0.0"),
                          o.appendChild(l),
                          this.globalData.defs.appendChild(e);
                        var p = L("rect");
                        p.setAttribute("width", this.comp.data.w),
                          p.setAttribute("height", this.comp.data.h),
                          p.setAttribute("x", "0"),
                          p.setAttribute("y", "0"),
                          p.setAttribute("fill", "#ffffff"),
                          p.setAttribute("opacity", "0"),
                          h.setAttribute("filter", "url(" + s + "#" + t + ")"),
                          h.appendChild(p),
                          h.appendChild(this.layerElement),
                          (a = h),
                          ft.maskType ||
                            (n.setAttribute("mask-type", "luminance"),
                            e.appendChild(mt.createAlphaToLuminanceFilter()),
                            (i = L("g")),
                            h.appendChild(p),
                            i.appendChild(this.layerElement),
                            (a = i),
                            h.appendChild(i)),
                          this.globalData.defs.appendChild(n);
                      }
                    } else
                      this.data.tt
                        ? (this.matteElement.appendChild(this.layerElement),
                          (a = this.matteElement),
                          (this.baseElement = this.matteElement))
                        : (this.baseElement = this.layerElement);
                    if (
                      (this.data.ln &&
                        this.layerElement.setAttribute("id", this.data.ln),
                      this.data.cl &&
                        this.layerElement.setAttribute("class", this.data.cl),
                      0 === this.data.ty && !this.data.hd)
                    ) {
                      var f = L("clipPath"),
                        m = L("path");
                      m.setAttribute(
                        "d",
                        "M0,0 L" +
                          this.data.w +
                          ",0 L" +
                          this.data.w +
                          "," +
                          this.data.h +
                          " L0," +
                          this.data.h +
                          "z"
                      );
                      var d = S();
                      if (
                        (f.setAttribute("id", d),
                        f.appendChild(m),
                        this.globalData.defs.appendChild(f),
                        this.checkMasks())
                      ) {
                        var c = L("g");
                        c.setAttribute("clip-path", "url(" + s + "#" + d + ")"),
                          c.appendChild(this.layerElement),
                          (this.transformedElement = c),
                          a
                            ? a.appendChild(this.transformedElement)
                            : (this.baseElement = this.transformedElement);
                      } else
                        this.layerElement.setAttribute(
                          "clip-path",
                          "url(" + s + "#" + d + ")"
                        );
                    }
                    0 !== this.data.bm && this.setBlendMode();
                  },
                  renderElement: function () {
                    this.finalTransform._matMdf &&
                      this.transformedElement.setAttribute(
                        "transform",
                        this.finalTransform.mat.to2dCSS()
                      ),
                      this.finalTransform._opMdf &&
                        this.transformedElement.setAttribute(
                          "opacity",
                          this.finalTransform.mProp.o.v
                        );
                  },
                  destroyBaseElement: function () {
                    (this.layerElement = null),
                      (this.matteElement = null),
                      this.maskManager.destroy();
                  },
                  getBaseElement: function () {
                    return this.data.hd ? null : this.baseElement;
                  },
                  createRenderableComponents: function () {
                    (this.maskManager = new Mt(
                      this.data,
                      this,
                      this.globalData
                    )),
                      (this.renderableEffectsManager = new he(this));
                  },
                  setMatte: function (t) {
                    this.matteElement &&
                      this.matteElement.setAttribute(
                        "mask",
                        "url(" + s + "#" + t + ")"
                      );
                  },
                }),
                (Jt.prototype = {
                  addShapeToModifiers: function (t) {
                    var e,
                      s = this.shapeModifiers.length;
                    for (e = 0; e < s; e += 1)
                      this.shapeModifiers[e].addShape(t);
                  },
                  isShapeInAnimatedModifiers: function (t) {
                    for (var e = this.shapeModifiers.length; 0 < e; )
                      if (this.shapeModifiers[0].isAnimatedWithShape(t))
                        return !0;
                    return !1;
                  },
                  renderModifiers: function () {
                    if (this.shapeModifiers.length) {
                      var t,
                        e = this.shapes.length;
                      for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                      for (
                        t = (e = this.shapeModifiers.length) - 1;
                        t >= 0 &&
                        !this.shapeModifiers[t].processShapes(
                          this._isFirstFrame
                        );
                        t -= 1
                      );
                    }
                  },
                  searchProcessedElement: function (t) {
                    for (
                      var e = this.processedElements, s = 0, i = e.length;
                      s < i;

                    ) {
                      if (e[s].elem === t) return e[s].pos;
                      s += 1;
                    }
                    return 0;
                  },
                  addProcessedElement: function (t, e) {
                    for (var s = this.processedElements, i = s.length; i; )
                      if (s[(i -= 1)].elem === t) return void (s[i].pos = e);
                    s.push(new Vt(t, e));
                  },
                  prepareFrame: function (t) {
                    this.prepareRenderableFrame(t),
                      this.prepareProperties(t, this.isInRange);
                  },
                }),
                (Kt.prototype.initElement = function (t, e, s) {
                  (this.lettersChangedFlag = !0),
                    this.initFrame(),
                    this.initBaseData(t, e, s),
                    (this.textProperty = new gt(
                      this,
                      t.t,
                      this.dynamicProperties
                    )),
                    (this.textAnimator = new dt(t.t, this.renderType, this)),
                    this.initTransform(t, e, s),
                    this.initHierarchy(),
                    this.initRenderable(),
                    this.initRendererElement(),
                    this.createContainerElements(),
                    this.createRenderableComponents(),
                    this.createContent(),
                    this.hide(),
                    this.textAnimator.searchProperties(this.dynamicProperties);
                }),
                (Kt.prototype.prepareFrame = function (t) {
                  (this._mdf = !1),
                    this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange),
                    (this.textProperty._mdf ||
                      this.textProperty._isFirstFrame) &&
                      (this.buildNewText(),
                      (this.textProperty._isFirstFrame = !1),
                      (this.textProperty._mdf = !1));
                }),
                (Kt.prototype.createPathShape = function (t, e) {
                  var s,
                    i,
                    a = e.length,
                    r = "";
                  for (s = 0; s < a; s += 1)
                    (i = e[s].ks.k), (r += ot(i, i.i.length, !0, t));
                  return r;
                }),
                (Kt.prototype.updateDocumentData = function (t, e) {
                  this.textProperty.updateDocumentData(t, e);
                }),
                (Kt.prototype.canResizeFont = function (t) {
                  this.textProperty.canResizeFont(t);
                }),
                (Kt.prototype.setMinimumFontSize = function (t) {
                  this.textProperty.setMinimumFontSize(t);
                }),
                (Kt.prototype.applyTextPropertiesToMatrix = function (
                  t,
                  e,
                  s,
                  i,
                  a
                ) {
                  switch (
                    (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                    e.translate(0, -t.ls, 0),
                    t.j)
                  ) {
                    case 1:
                      e.translate(
                        t.justifyOffset + (t.boxWidth - t.lineWidths[s]),
                        0,
                        0
                      );
                      break;
                    case 2:
                      e.translate(
                        t.justifyOffset + (t.boxWidth - t.lineWidths[s]) / 2,
                        0,
                        0
                      );
                  }
                  e.translate(i, a, 0);
                }),
                (Kt.prototype.buildColor = function (t) {
                  return (
                    "rgb(" +
                    Math.round(255 * t[0]) +
                    "," +
                    Math.round(255 * t[1]) +
                    "," +
                    Math.round(255 * t[2]) +
                    ")"
                  );
                }),
                (Kt.prototype.emptyProp = new ut()),
                (Kt.prototype.destroy = function () {}),
                W([Ht, Tt, wt, Et, Lt], Ut),
                (Ut.prototype.initElement = function (t, e, s) {
                  this.initFrame(),
                    this.initBaseData(t, e, s),
                    this.initTransform(t, e, s),
                    this.initRenderable(),
                    this.initHierarchy(),
                    this.initRendererElement(),
                    this.createContainerElements(),
                    this.createRenderableComponents(),
                    (!this.data.xt && e.progressiveLoad) ||
                      this.buildAllItems(),
                    this.hide();
                }),
                (Ut.prototype.prepareFrame = function (t) {
                  if (
                    ((this._mdf = !1),
                    this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange),
                    this.isInRange || this.data.xt)
                  ) {
                    if (this.tm._placeholder)
                      this.renderedFrame = t / this.data.sr;
                    else {
                      var e = this.tm.v;
                      e === this.data.op && (e = this.data.op - 1),
                        (this.renderedFrame = e);
                    }
                    var s,
                      i = this.elements.length;
                    for (
                      this.completeLayers ||
                        this.checkLayers(this.renderedFrame),
                        s = i - 1;
                      s >= 0;
                      s -= 1
                    )
                      (this.completeLayers || this.elements[s]) &&
                        (this.elements[s].prepareFrame(
                          this.renderedFrame - this.layers[s].st
                        ),
                        this.elements[s]._mdf && (this._mdf = !0));
                  }
                }),
                (Ut.prototype.renderInnerContent = function () {
                  var t,
                    e = this.layers.length;
                  for (t = 0; t < e; t += 1)
                    (this.completeLayers || this.elements[t]) &&
                      this.elements[t].renderFrame();
                }),
                (Ut.prototype.setElements = function (t) {
                  this.elements = t;
                }),
                (Ut.prototype.getElements = function () {
                  return this.elements;
                }),
                (Ut.prototype.destroyElements = function () {
                  var t,
                    e = this.layers.length;
                  for (t = 0; t < e; t += 1)
                    this.elements[t] && this.elements[t].destroy();
                }),
                (Ut.prototype.destroy = function () {
                  this.destroyElements(), this.destroyBaseElement();
                }),
                W([Ht, Tt, Yt, wt, Et, Lt], Zt),
                (Zt.prototype.createContent = function () {
                  var t = this.globalData.getAssetsPath(this.assetData);
                  (this.innerElem = L("image")),
                    this.innerElem.setAttribute(
                      "width",
                      this.assetData.w + "px"
                    ),
                    this.innerElem.setAttribute(
                      "height",
                      this.assetData.h + "px"
                    ),
                    this.innerElem.setAttribute(
                      "preserveAspectRatio",
                      this.assetData.pr ||
                        this.globalData.renderConfig.imagePreserveAspectRatio
                    ),
                    this.innerElem.setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      "href",
                      t
                    ),
                    this.layerElement.appendChild(this.innerElem);
                }),
                (Zt.prototype.sourceRectAtTime = function () {
                  return this.sourceRect;
                }),
                W([Zt], Qt),
                (Qt.prototype.createContent = function () {
                  var t = L("rect");
                  t.setAttribute("width", this.data.sw),
                    t.setAttribute("height", this.data.sh),
                    t.setAttribute("fill", this.data.sc),
                    this.layerElement.appendChild(t);
                }),
                ($t.prototype.prepareFrame = function (t) {
                  if (
                    (this.prepareRenderableFrame(t, !0),
                    this.prepareProperties(t, !0),
                    this.tm._placeholder)
                  )
                    this._currentTime = t / this.data.sr;
                  else {
                    var e = this.tm.v;
                    this._currentTime = e;
                  }
                }),
                W([It, Ht, Et], $t),
                ($t.prototype.renderFrame = function () {
                  this.isInRange &&
                    this._canPlay &&
                    (this._isPlaying
                      ? (!this.audio.playing() ||
                          Math.abs(
                            this._currentTime / this.globalData.frameRate -
                              this.audio.seek()
                          ) > 0.1) &&
                        this.audio.seek(
                          this._currentTime / this.globalData.frameRate
                        )
                      : (this.audio.play(),
                        this.audio.seek(
                          this._currentTime / this.globalData.frameRate
                        ),
                        (this._isPlaying = !0)));
                }),
                ($t.prototype.show = function () {}),
                ($t.prototype.hide = function () {
                  this.audio.pause(), (this._isPlaying = !1);
                }),
                ($t.prototype.pause = function () {
                  this.audio.pause(),
                    (this._isPlaying = !1),
                    (this._canPlay = !1);
                }),
                ($t.prototype.resume = function () {
                  this._canPlay = !0;
                }),
                ($t.prototype.setRate = function (t) {
                  this.audio.rate(t);
                }),
                ($t.prototype.volume = function (t) {
                  this.audio.volume(t);
                }),
                ($t.prototype.getBaseElement = function () {
                  return null;
                }),
                ($t.prototype.destroy = function () {}),
                ($t.prototype.sourceRectAtTime = function () {}),
                ($t.prototype.initExpressions = function () {}),
                W([Ft, Ut, Yt], te),
                W([Ht, Tt, Yt, wt, Et, Lt, Kt], ee),
                (ee.prototype.createContent = function () {
                  this.data.singleShape &&
                    !this.globalData.fontManager.chars &&
                    (this.textContainer = L("text"));
                }),
                (ee.prototype.buildTextContents = function (t) {
                  for (var e = 0, s = t.length, i = [], a = ""; e < s; )
                    t[e] === String.fromCharCode(13) ||
                    t[e] === String.fromCharCode(3)
                      ? (i.push(a), (a = ""))
                      : (a += t[e]),
                      (e += 1);
                  return i.push(a), i;
                }),
                (ee.prototype.buildNewText = function () {
                  var t,
                    e,
                    s = this.textProperty.currentData;
                  (this.renderedLetters = I(s ? s.l.length : 0)),
                    s.fc
                      ? this.layerElement.setAttribute(
                          "fill",
                          this.buildColor(s.fc)
                        )
                      : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
                    s.sc &&
                      (this.layerElement.setAttribute(
                        "stroke",
                        this.buildColor(s.sc)
                      ),
                      this.layerElement.setAttribute("stroke-width", s.sw)),
                    this.layerElement.setAttribute("font-size", s.finalSize);
                  var i = this.globalData.fontManager.getFontByName(s.f);
                  if (i.fClass)
                    this.layerElement.setAttribute("class", i.fClass);
                  else {
                    this.layerElement.setAttribute("font-family", i.fFamily);
                    var a = s.fWeight,
                      r = s.fStyle;
                    this.layerElement.setAttribute("font-style", r),
                      this.layerElement.setAttribute("font-weight", a);
                  }
                  this.layerElement.setAttribute("aria-label", s.t);
                  var n,
                    h = s.l || [],
                    o = !!this.globalData.fontManager.chars;
                  e = h.length;
                  var l,
                    p = this.mHelper,
                    f = "",
                    m = this.data.singleShape,
                    d = 0,
                    c = 0,
                    u = !0,
                    g = 0.001 * s.tr * s.finalSize;
                  if (!m || o || s.sz) {
                    var y,
                      v,
                      b = this.textSpans.length;
                    for (t = 0; t < e; t += 1)
                      (o && m && 0 !== t) ||
                        ((n =
                          b > t ? this.textSpans[t] : L(o ? "path" : "text")),
                        b <= t &&
                          (n.setAttribute("stroke-linecap", "butt"),
                          n.setAttribute("stroke-linejoin", "round"),
                          n.setAttribute("stroke-miterlimit", "4"),
                          (this.textSpans[t] = n),
                          this.layerElement.appendChild(n)),
                        (n.style.display = "inherit")),
                        p.reset(),
                        p.scale(s.finalSize / 100, s.finalSize / 100),
                        m &&
                          (h[t].n &&
                            ((d = -g),
                            (c += s.yOffset),
                            (c += u ? 1 : 0),
                            (u = !1)),
                          this.applyTextPropertiesToMatrix(
                            s,
                            p,
                            h[t].line,
                            d,
                            c
                          ),
                          (d += h[t].l || 0),
                          (d += g)),
                        o
                          ? ((l = (y =
                              ((v = this.globalData.fontManager.getCharData(
                                s.finalText[t],
                                i.fStyle,
                                this.globalData.fontManager.getFontByName(s.f)
                                  .fFamily
                              )) &&
                                v.data) ||
                              {}).shapes
                              ? y.shapes[0].it
                              : []),
                            m
                              ? (f += this.createPathShape(p, l))
                              : n.setAttribute("d", this.createPathShape(p, l)))
                          : (m &&
                              n.setAttribute(
                                "transform",
                                "translate(" +
                                  p.props[12] +
                                  "," +
                                  p.props[13] +
                                  ")"
                              ),
                            (n.textContent = h[t].val),
                            n.setAttributeNS(
                              "http://www.w3.org/XML/1998/namespace",
                              "xml:space",
                              "preserve"
                            ));
                    m && n && n.setAttribute("d", f);
                  } else {
                    var _ = this.textContainer,
                      k = "start";
                    switch (s.j) {
                      case 1:
                        k = "end";
                        break;
                      case 2:
                        k = "middle";
                        break;
                      default:
                        k = "start";
                    }
                    _.setAttribute("text-anchor", k),
                      _.setAttribute("letter-spacing", g);
                    var A = this.buildTextContents(s.finalText);
                    for (
                      e = A.length, c = s.ps ? s.ps[1] + s.ascent : 0, t = 0;
                      t < e;
                      t += 1
                    )
                      ((n = this.textSpans[t] || L("tspan")).textContent =
                        A[t]),
                        n.setAttribute("x", 0),
                        n.setAttribute("y", c),
                        (n.style.display = "inherit"),
                        _.appendChild(n),
                        (this.textSpans[t] = n),
                        (c += s.finalLineHeight);
                    this.layerElement.appendChild(_);
                  }
                  for (; t < this.textSpans.length; )
                    (this.textSpans[t].style.display = "none"), (t += 1);
                  this._sizeChanged = !0;
                }),
                (ee.prototype.sourceRectAtTime = function () {
                  if (
                    (this.prepareFrame(this.comp.renderedFrame - this.data.st),
                    this.renderInnerContent(),
                    this._sizeChanged)
                  ) {
                    this._sizeChanged = !1;
                    var t = this.layerElement.getBBox();
                    this.bbox = {
                      top: t.y,
                      left: t.x,
                      width: t.width,
                      height: t.height,
                    };
                  }
                  return this.bbox;
                }),
                (ee.prototype.renderInnerContent = function () {
                  if (
                    !this.data.singleShape &&
                    (this.textAnimator.getMeasures(
                      this.textProperty.currentData,
                      this.lettersChangedFlag
                    ),
                    this.lettersChangedFlag ||
                      this.textAnimator.lettersChangedFlag)
                  ) {
                    var t, e;
                    this._sizeChanged = !0;
                    var s,
                      i,
                      a = this.textAnimator.renderedLetters,
                      r = this.textProperty.currentData.l;
                    for (e = r.length, t = 0; t < e; t += 1)
                      r[t].n ||
                        ((s = a[t]),
                        (i = this.textSpans[t]),
                        s._mdf.m && i.setAttribute("transform", s.m),
                        s._mdf.o && i.setAttribute("opacity", s.o),
                        s._mdf.sw && i.setAttribute("stroke-width", s.sw),
                        s._mdf.sc && i.setAttribute("stroke", s.sc),
                        s._mdf.fc && i.setAttribute("fill", s.fc));
                  }
                }),
                W([Ht, Tt, Yt, Jt, wt, Et, Lt], se),
                (se.prototype.initSecondaryElement = function () {}),
                (se.prototype.identityMatrix = new q()),
                (se.prototype.buildExpressionInterface = function () {}),
                (se.prototype.createContent = function () {
                  this.searchShapes(
                    this.shapesData,
                    this.itemsData,
                    this.prevViewData,
                    this.layerElement,
                    0,
                    [],
                    !0
                  ),
                    this.filterUniqueShapes();
                }),
                (se.prototype.filterUniqueShapes = function () {
                  var t,
                    e,
                    s,
                    i,
                    a = this.shapes.length,
                    r = this.stylesList.length,
                    n = [],
                    h = !1;
                  for (s = 0; s < r; s += 1) {
                    for (
                      i = this.stylesList[s], h = !1, n.length = 0, t = 0;
                      t < a;
                      t += 1
                    )
                      -1 !== (e = this.shapes[t]).styles.indexOf(i) &&
                        (n.push(e), (h = e._isAnimated || h));
                    n.length > 1 && h && this.setShapesAsAnimated(n);
                  }
                }),
                (se.prototype.setShapesAsAnimated = function (t) {
                  var e,
                    s = t.length;
                  for (e = 0; e < s; e += 1) t[e].setAsAnimated();
                }),
                (se.prototype.createStyleElement = function (t, e) {
                  var i,
                    a = new Rt(t, e),
                    r = a.pElem;
                  return (
                    "st" === t.ty
                      ? (i = new Ot(this, t, a))
                      : "fl" === t.ty
                      ? (i = new Bt(this, t, a))
                      : ("gf" !== t.ty && "gs" !== t.ty) ||
                        ((i = new ("gf" === t.ty ? qt : jt)(this, t, a)),
                        this.globalData.defs.appendChild(i.gf),
                        i.maskId &&
                          (this.globalData.defs.appendChild(i.ms),
                          this.globalData.defs.appendChild(i.of),
                          r.setAttribute(
                            "mask",
                            "url(" + s + "#" + i.maskId + ")"
                          ))),
                    ("st" !== t.ty && "gs" !== t.ty) ||
                      (r.setAttribute("stroke-linecap", O[t.lc || 2]),
                      r.setAttribute("stroke-linejoin", B[t.lj || 2]),
                      r.setAttribute("fill-opacity", "0"),
                      1 === t.lj && r.setAttribute("stroke-miterlimit", t.ml)),
                    2 === t.r && r.setAttribute("fill-rule", "evenodd"),
                    t.ln && r.setAttribute("id", t.ln),
                    t.cl && r.setAttribute("class", t.cl),
                    t.bm && (r.style["mix-blend-mode"] = N(t.bm)),
                    this.stylesList.push(a),
                    this.addToAnimatedContents(t, i),
                    i
                  );
                }),
                (se.prototype.createGroupElement = function (t) {
                  var e = new Wt();
                  return (
                    t.ln && e.gr.setAttribute("id", t.ln),
                    t.cl && e.gr.setAttribute("class", t.cl),
                    t.bm && (e.gr.style["mix-blend-mode"] = N(t.bm)),
                    e
                  );
                }),
                (se.prototype.createTransformElement = function (t, e) {
                  var s = K.getTransformProperty(this, t, this),
                    i = new Nt(s, s.o, e);
                  return this.addToAnimatedContents(t, i), i;
                }),
                (se.prototype.createShapeElement = function (t, e, s) {
                  var i = 4;
                  "rc" === t.ty
                    ? (i = 5)
                    : "el" === t.ty
                    ? (i = 6)
                    : "sr" === t.ty && (i = 7);
                  var a = new zt(e, s, Z.getShapeProp(this, t, i, this));
                  return (
                    this.shapes.push(a),
                    this.addShapeToModifiers(a),
                    this.addToAnimatedContents(t, a),
                    a
                  );
                }),
                (se.prototype.addToAnimatedContents = function (t, e) {
                  for (var s = 0, i = this.animatedContents.length; s < i; ) {
                    if (this.animatedContents[s].element === e) return;
                    s += 1;
                  }
                  this.animatedContents.push({
                    fn: Gt.createRenderFunction(t),
                    element: e,
                    data: t,
                  });
                }),
                (se.prototype.setElementStyles = function (t) {
                  var e,
                    s = t.styles,
                    i = this.stylesList.length;
                  for (e = 0; e < i; e += 1)
                    this.stylesList[e].closed || s.push(this.stylesList[e]);
                }),
                (se.prototype.reloadShapes = function () {
                  var t;
                  this._isFirstFrame = !0;
                  var e = this.itemsData.length;
                  for (t = 0; t < e; t += 1)
                    this.prevViewData[t] = this.itemsData[t];
                  for (
                    this.searchShapes(
                      this.shapesData,
                      this.itemsData,
                      this.prevViewData,
                      this.layerElement,
                      0,
                      [],
                      !0
                    ),
                      this.filterUniqueShapes(),
                      e = this.dynamicProperties.length,
                      t = 0;
                    t < e;
                    t += 1
                  )
                    this.dynamicProperties[t].getValue();
                  this.renderModifiers();
                }),
                (se.prototype.searchShapes = function (t, e, s, i, a, r, n) {
                  var h,
                    o,
                    l,
                    p,
                    f,
                    m,
                    d = [].concat(r),
                    c = t.length - 1,
                    u = [],
                    g = [];
                  for (h = c; h >= 0; h -= 1) {
                    if (
                      ((m = this.searchProcessedElement(t[h]))
                        ? (e[h] = s[m - 1])
                        : (t[h]._render = n),
                      "fl" === t[h].ty ||
                        "st" === t[h].ty ||
                        "gf" === t[h].ty ||
                        "gs" === t[h].ty)
                    )
                      m
                        ? (e[h].style.closed = !1)
                        : (e[h] = this.createStyleElement(t[h], a)),
                        t[h]._render &&
                          e[h].style.pElem.parentNode !== i &&
                          i.appendChild(e[h].style.pElem),
                        u.push(e[h].style);
                    else if ("gr" === t[h].ty) {
                      if (m)
                        for (l = e[h].it.length, o = 0; o < l; o += 1)
                          e[h].prevViewData[o] = e[h].it[o];
                      else e[h] = this.createGroupElement(t[h]);
                      this.searchShapes(
                        t[h].it,
                        e[h].it,
                        e[h].prevViewData,
                        e[h].gr,
                        a + 1,
                        d,
                        n
                      ),
                        t[h]._render &&
                          e[h].gr.parentNode !== i &&
                          i.appendChild(e[h].gr);
                    } else
                      "tr" === t[h].ty
                        ? (m || (e[h] = this.createTransformElement(t[h], i)),
                          (p = e[h].transform),
                          d.push(p))
                        : "sh" === t[h].ty ||
                          "rc" === t[h].ty ||
                          "el" === t[h].ty ||
                          "sr" === t[h].ty
                        ? (m || (e[h] = this.createShapeElement(t[h], d, a)),
                          this.setElementStyles(e[h]))
                        : "tm" === t[h].ty ||
                          "rd" === t[h].ty ||
                          "ms" === t[h].ty ||
                          "pb" === t[h].ty
                        ? (m
                            ? ((f = e[h]).closed = !1)
                            : ((f = Q.getModifier(t[h].ty)).init(this, t[h]),
                              (e[h] = f),
                              this.shapeModifiers.push(f)),
                          g.push(f))
                        : "rp" === t[h].ty &&
                          (m
                            ? ((f = e[h]).closed = !0)
                            : ((f = Q.getModifier(t[h].ty)),
                              (e[h] = f),
                              f.init(this, t, h, e),
                              this.shapeModifiers.push(f),
                              (n = !1)),
                          g.push(f));
                    this.addProcessedElement(t[h], h + 1);
                  }
                  for (c = u.length, h = 0; h < c; h += 1) u[h].closed = !0;
                  for (c = g.length, h = 0; h < c; h += 1) g[h].closed = !0;
                }),
                (se.prototype.renderInnerContent = function () {
                  var t;
                  this.renderModifiers();
                  var e = this.stylesList.length;
                  for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                  for (this.renderShape(), t = 0; t < e; t += 1)
                    (this.stylesList[t]._mdf || this._isFirstFrame) &&
                      (this.stylesList[t].msElem &&
                        (this.stylesList[t].msElem.setAttribute(
                          "d",
                          this.stylesList[t].d
                        ),
                        (this.stylesList[t].d = "M0 0" + this.stylesList[t].d)),
                      this.stylesList[t].pElem.setAttribute(
                        "d",
                        this.stylesList[t].d || "M0 0"
                      ));
                }),
                (se.prototype.renderShape = function () {
                  var t,
                    e,
                    s = this.animatedContents.length;
                  for (t = 0; t < s; t += 1)
                    (e = this.animatedContents[t]),
                      (this._isFirstFrame || e.element._isAnimated) &&
                        !0 !== e.data &&
                        e.fn(e.data, e.element, this._isFirstFrame);
                }),
                (se.prototype.destroy = function () {
                  this.destroyBaseElement(),
                    (this.shapesData = null),
                    (this.itemsData = null);
                }),
                (ie.prototype.initialize = function () {
                  var t,
                    e,
                    i,
                    a,
                    r =
                      this.elem.layerElement.children ||
                      this.elem.layerElement.childNodes;
                  for (
                    1 === this.filterManager.effectElements[1].p.v
                      ? ((a = this.elem.maskManager.masksProperties.length),
                        (i = 0))
                      : (a =
                          1 +
                          (i = this.filterManager.effectElements[0].p.v - 1)),
                      (e = L("g")).setAttribute("fill", "none"),
                      e.setAttribute("stroke-linecap", "round"),
                      e.setAttribute("stroke-dashoffset", 1);
                    i < a;
                    i += 1
                  )
                    (t = L("path")),
                      e.appendChild(t),
                      this.paths.push({ p: t, m: i });
                  if (3 === this.filterManager.effectElements[10].p.v) {
                    var n = L("mask"),
                      h = S();
                    n.setAttribute("id", h),
                      n.setAttribute("mask-type", "alpha"),
                      n.appendChild(e),
                      this.elem.globalData.defs.appendChild(n);
                    var o = L("g");
                    for (
                      o.setAttribute("mask", "url(" + s + "#" + h + ")");
                      r[0];

                    )
                      o.appendChild(r[0]);
                    this.elem.layerElement.appendChild(o),
                      (this.masker = n),
                      e.setAttribute("stroke", "#fff");
                  } else if (
                    1 === this.filterManager.effectElements[10].p.v ||
                    2 === this.filterManager.effectElements[10].p.v
                  ) {
                    if (2 === this.filterManager.effectElements[10].p.v)
                      for (
                        r =
                          this.elem.layerElement.children ||
                          this.elem.layerElement.childNodes;
                        r.length;

                      )
                        this.elem.layerElement.removeChild(r[0]);
                    this.elem.layerElement.appendChild(e),
                      this.elem.layerElement.removeAttribute("mask"),
                      e.setAttribute("stroke", "#fff");
                  }
                  (this.initialized = !0), (this.pathMasker = e);
                }),
                (ie.prototype.renderFrame = function (t) {
                  var e;
                  this.initialized || this.initialize();
                  var s,
                    i,
                    a = this.paths.length;
                  for (e = 0; e < a; e += 1)
                    if (
                      -1 !== this.paths[e].m &&
                      ((s = this.elem.maskManager.viewData[this.paths[e].m]),
                      (i = this.paths[e].p),
                      (t || this.filterManager._mdf || s.prop._mdf) &&
                        i.setAttribute("d", s.lastPath),
                      t ||
                        this.filterManager.effectElements[9].p._mdf ||
                        this.filterManager.effectElements[4].p._mdf ||
                        this.filterManager.effectElements[7].p._mdf ||
                        this.filterManager.effectElements[8].p._mdf ||
                        s.prop._mdf)
                    ) {
                      var r;
                      if (
                        0 !== this.filterManager.effectElements[7].p.v ||
                        100 !== this.filterManager.effectElements[8].p.v
                      ) {
                        var n =
                            0.01 *
                            Math.min(
                              this.filterManager.effectElements[7].p.v,
                              this.filterManager.effectElements[8].p.v
                            ),
                          h =
                            0.01 *
                            Math.max(
                              this.filterManager.effectElements[7].p.v,
                              this.filterManager.effectElements[8].p.v
                            ),
                          o = i.getTotalLength();
                        r = "0 0 0 " + o * n + " ";
                        var l,
                          f = o * (h - n),
                          m =
                            1 +
                            2 *
                              this.filterManager.effectElements[4].p.v *
                              this.filterManager.effectElements[9].p.v *
                              0.01,
                          d = Math.floor(f / m);
                        for (l = 0; l < d; l += 1)
                          r +=
                            "1 " +
                            2 *
                              this.filterManager.effectElements[4].p.v *
                              this.filterManager.effectElements[9].p.v *
                              0.01 +
                            " ";
                        r += "0 " + 10 * o + " 0 0";
                      } else
                        r =
                          "1 " +
                          2 *
                            this.filterManager.effectElements[4].p.v *
                            this.filterManager.effectElements[9].p.v *
                            0.01;
                      i.setAttribute("stroke-dasharray", r);
                    }
                  if (
                    ((t || this.filterManager.effectElements[4].p._mdf) &&
                      this.pathMasker.setAttribute(
                        "stroke-width",
                        2 * this.filterManager.effectElements[4].p.v
                      ),
                    (t || this.filterManager.effectElements[6].p._mdf) &&
                      this.pathMasker.setAttribute(
                        "opacity",
                        this.filterManager.effectElements[6].p.v
                      ),
                    (1 === this.filterManager.effectElements[10].p.v ||
                      2 === this.filterManager.effectElements[10].p.v) &&
                      (t || this.filterManager.effectElements[3].p._mdf))
                  ) {
                    var c = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute(
                      "stroke",
                      "rgb(" +
                        p(255 * c[0]) +
                        "," +
                        p(255 * c[1]) +
                        "," +
                        p(255 * c[2]) +
                        ")"
                    );
                  }
                }),
                (ae.prototype.createFeFunc = function (t, e) {
                  var s = L(t);
                  return s.setAttribute("type", "table"), e.appendChild(s), s;
                }),
                (ae.prototype.getTableValue = function (t, e, s, i, a) {
                  for (
                    var r,
                      n,
                      h = 0,
                      o = Math.min(t, e),
                      l = Math.max(t, e),
                      p = Array.call(null, { length: 256 }),
                      f = 0,
                      m = a - i,
                      d = e - t;
                    h <= 256;

                  )
                    (n =
                      (r = h / 256) <= o
                        ? d < 0
                          ? a
                          : i
                        : r >= l
                        ? d < 0
                          ? i
                          : a
                        : i + m * Math.pow((r - t) / d, 1 / s)),
                      (p[f] = n),
                      (f += 1),
                      (h += 256 / 255);
                  return p.join(" ");
                }),
                (ae.prototype.renderFrame = function (t) {
                  if (t || this.filterManager._mdf) {
                    var e,
                      s = this.filterManager.effectElements;
                    this.feFuncRComposed &&
                      (t ||
                        s[3].p._mdf ||
                        s[4].p._mdf ||
                        s[5].p._mdf ||
                        s[6].p._mdf ||
                        s[7].p._mdf) &&
                      ((e = this.getTableValue(
                        s[3].p.v,
                        s[4].p.v,
                        s[5].p.v,
                        s[6].p.v,
                        s[7].p.v
                      )),
                      this.feFuncRComposed.setAttribute("tableValues", e),
                      this.feFuncGComposed.setAttribute("tableValues", e),
                      this.feFuncBComposed.setAttribute("tableValues", e)),
                      this.feFuncR &&
                        (t ||
                          s[10].p._mdf ||
                          s[11].p._mdf ||
                          s[12].p._mdf ||
                          s[13].p._mdf ||
                          s[14].p._mdf) &&
                        ((e = this.getTableValue(
                          s[10].p.v,
                          s[11].p.v,
                          s[12].p.v,
                          s[13].p.v,
                          s[14].p.v
                        )),
                        this.feFuncR.setAttribute("tableValues", e)),
                      this.feFuncG &&
                        (t ||
                          s[17].p._mdf ||
                          s[18].p._mdf ||
                          s[19].p._mdf ||
                          s[20].p._mdf ||
                          s[21].p._mdf) &&
                        ((e = this.getTableValue(
                          s[17].p.v,
                          s[18].p.v,
                          s[19].p.v,
                          s[20].p.v,
                          s[21].p.v
                        )),
                        this.feFuncG.setAttribute("tableValues", e)),
                      this.feFuncB &&
                        (t ||
                          s[24].p._mdf ||
                          s[25].p._mdf ||
                          s[26].p._mdf ||
                          s[27].p._mdf ||
                          s[28].p._mdf) &&
                        ((e = this.getTableValue(
                          s[24].p.v,
                          s[25].p.v,
                          s[26].p.v,
                          s[27].p.v,
                          s[28].p.v
                        )),
                        this.feFuncB.setAttribute("tableValues", e)),
                      this.feFuncA &&
                        (t ||
                          s[31].p._mdf ||
                          s[32].p._mdf ||
                          s[33].p._mdf ||
                          s[34].p._mdf ||
                          s[35].p._mdf) &&
                        ((e = this.getTableValue(
                          s[31].p.v,
                          s[32].p.v,
                          s[33].p.v,
                          s[34].p.v,
                          s[35].p.v
                        )),
                        this.feFuncA.setAttribute("tableValues", e));
                  }
                });
              var re = [];
              function ne(t, e, s) {
                (this.initialized = !1),
                  (this.filterManager = e),
                  (this.filterElem = t),
                  (this.elem = s),
                  (s.matteElement = L("g")),
                  s.matteElement.appendChild(s.layerElement),
                  s.matteElement.appendChild(s.transformedElement),
                  (s.baseElement = s.matteElement);
              }
              function he() {}
              (ne.prototype.findSymbol = function (t) {
                for (var e = 0, s = re.length; e < s; ) {
                  if (re[e] === t) return re[e];
                  e += 1;
                }
                return null;
              }),
                (ne.prototype.replaceInParent = function (t, e) {
                  var s = t.layerElement.parentNode;
                  if (s) {
                    for (
                      var i, a = s.children, r = 0, n = a.length;
                      r < n && a[r] !== t.layerElement;

                    )
                      r += 1;
                    r <= n - 2 && (i = a[r + 1]);
                    var h = L("use");
                    h.setAttribute("href", "#" + e),
                      i ? s.insertBefore(h, i) : s.appendChild(h);
                  }
                }),
                (ne.prototype.setElementAsMask = function (t, e) {
                  if (!this.findSymbol(e)) {
                    var s = S(),
                      i = L("mask");
                    i.setAttribute("id", e.layerId),
                      i.setAttribute("mask-type", "alpha"),
                      re.push(e);
                    var a = t.globalData.defs;
                    a.appendChild(i);
                    var r = L("symbol");
                    r.setAttribute("id", s),
                      this.replaceInParent(e, s),
                      r.appendChild(e.layerElement),
                      a.appendChild(r);
                    var n = L("use");
                    n.setAttribute("href", "#" + s),
                      i.appendChild(n),
                      (e.data.hd = !1),
                      e.show();
                  }
                  t.setMatte(e.layerId);
                }),
                (ne.prototype.initialize = function () {
                  for (
                    var t = this.filterManager.effectElements[0].p.v,
                      e = this.elem.comp.elements,
                      s = 0,
                      i = e.length;
                    s < i;

                  )
                    e[s] &&
                      e[s].data.ind === t &&
                      this.setElementAsMask(this.elem, e[s]),
                      (s += 1);
                  this.initialized = !0;
                }),
                (ne.prototype.renderFrame = function () {
                  this.initialized || this.initialize();
                });
              var oe = (function () {
                  var e = {},
                    s = [],
                    i = 0,
                    a = 0,
                    r = 0,
                    n = !0,
                    h = !1;
                  function o(t) {
                    for (var e = 0, i = t.target; e < a; )
                      s[e].animation === i &&
                        (s.splice(e, 1), (e -= 1), (a -= 1), i.isPaused || f()),
                        (e += 1);
                  }
                  function l(t, e) {
                    if (!t) return null;
                    for (var i = 0; i < a; ) {
                      if (s[i].elem === t && null !== s[i].elem)
                        return s[i].animation;
                      i += 1;
                    }
                    var r = new le();
                    return m(r, t), r.setData(t, e), r;
                  }
                  function p() {
                    (r += 1), u();
                  }
                  function f() {
                    r -= 1;
                  }
                  function m(t, e) {
                    t.addEventListener("destroy", o),
                      t.addEventListener("_active", p),
                      t.addEventListener("_idle", f),
                      s.push({ elem: e, animation: t }),
                      (a += 1);
                  }
                  function d(e) {
                    var o,
                      l = e - i;
                    for (o = 0; o < a; o += 1) s[o].animation.advanceTime(l);
                    (i = e), r && !h ? t.requestAnimationFrame(d) : (n = !0);
                  }
                  function c(e) {
                    (i = e), t.requestAnimationFrame(d);
                  }
                  function u() {
                    !h && r && n && (t.requestAnimationFrame(c), (n = !1));
                  }
                  return (
                    (e.registerAnimation = l),
                    (e.loadAnimation = function (t) {
                      var e = new le();
                      return m(e, null), e.setParams(t), e;
                    }),
                    (e.setSpeed = function (t, e) {
                      var i;
                      for (i = 0; i < a; i += 1) s[i].animation.setSpeed(t, e);
                    }),
                    (e.setDirection = function (t, e) {
                      var i;
                      for (i = 0; i < a; i += 1)
                        s[i].animation.setDirection(t, e);
                    }),
                    (e.play = function (t) {
                      var e;
                      for (e = 0; e < a; e += 1) s[e].animation.play(t);
                    }),
                    (e.pause = function (t) {
                      var e;
                      for (e = 0; e < a; e += 1) s[e].animation.pause(t);
                    }),
                    (e.stop = function (t) {
                      var e;
                      for (e = 0; e < a; e += 1) s[e].animation.stop(t);
                    }),
                    (e.togglePause = function (t) {
                      var e;
                      for (e = 0; e < a; e += 1) s[e].animation.togglePause(t);
                    }),
                    (e.searchAnimations = function (t, e, s) {
                      var i,
                        a = [].concat(
                          [].slice.call(
                            document.getElementsByClassName("lottie")
                          ),
                          [].slice.call(
                            document.getElementsByClassName("bodymovin")
                          )
                        ),
                        r = a.length;
                      for (i = 0; i < r; i += 1)
                        s && a[i].setAttribute("data-bm-type", s), l(a[i], t);
                      if (e && 0 === r) {
                        s || (s = "svg");
                        var n = document.getElementsByTagName("body")[0];
                        n.innerText = "";
                        var h = V("div");
                        (h.style.width = "100%"),
                          (h.style.height = "100%"),
                          h.setAttribute("data-bm-type", s),
                          n.appendChild(h),
                          l(h, t);
                      }
                    }),
                    (e.resize = function () {
                      var t;
                      for (t = 0; t < a; t += 1) s[t].animation.resize();
                    }),
                    (e.goToAndStop = function (t, e, i) {
                      var r;
                      for (r = 0; r < a; r += 1)
                        s[r].animation.goToAndStop(t, e, i);
                    }),
                    (e.destroy = function (t) {
                      var e;
                      for (e = a - 1; e >= 0; e -= 1) s[e].animation.destroy(t);
                    }),
                    (e.freeze = function () {
                      h = !0;
                    }),
                    (e.unfreeze = function () {
                      (h = !1), u();
                    }),
                    (e.setVolume = function (t, e) {
                      var i;
                      for (i = 0; i < a; i += 1) s[i].animation.setVolume(t, e);
                    }),
                    (e.mute = function (t) {
                      var e;
                      for (e = 0; e < a; e += 1) s[e].animation.mute(t);
                    }),
                    (e.unmute = function (t) {
                      var e;
                      for (e = 0; e < a; e += 1) s[e].animation.unmute(t);
                    }),
                    (e.getRegisteredAnimations = function () {
                      var t,
                        e = s.length,
                        i = [];
                      for (t = 0; t < e; t += 1) i.push(s[t].animation);
                      return i;
                    }),
                    e
                  );
                })(),
                le = function () {
                  (this._cbs = []),
                    (this.name = ""),
                    (this.path = ""),
                    (this.isLoaded = !1),
                    (this.currentFrame = 0),
                    (this.currentRawFrame = 0),
                    (this.firstFrame = 0),
                    (this.totalFrames = 0),
                    (this.frameRate = 0),
                    (this.frameMult = 0),
                    (this.playSpeed = 1),
                    (this.playDirection = 1),
                    (this.playCount = 0),
                    (this.animationData = {}),
                    (this.assets = []),
                    (this.isPaused = !0),
                    (this.autoplay = !1),
                    (this.loop = !0),
                    (this.renderer = null),
                    (this.animationID = S()),
                    (this.assetsPath = ""),
                    (this.timeCompleted = 0),
                    (this.segmentPos = 0),
                    (this.isSubframeEnabled = r),
                    (this.segments = []),
                    (this._idle = !0),
                    (this._completedLoop = !1),
                    (this.projectInterface = {}),
                    (this.imagePreloader = new pt()),
                    (this.audioController = lt()),
                    (this.markers = []),
                    (this.configAnimation = this.configAnimation.bind(this)),
                    (this.onSetupError = this.onSetupError.bind(this)),
                    (this.onSegmentComplete =
                      this.onSegmentComplete.bind(this));
                };
              function pe() {
                this.effectElements = [];
              }
              W([E], le),
                (le.prototype.setParams = function (t) {
                  (t.wrapper || t.container) &&
                    (this.wrapper = t.wrapper || t.container);
                  var e = "svg";
                  switch (
                    (t.animType
                      ? (e = t.animType)
                      : t.renderer && (e = t.renderer),
                    e)
                  ) {
                    case "canvas":
                      this.renderer = new CanvasRenderer(
                        this,
                        t.rendererSettings
                      );
                      break;
                    case "svg":
                      this.renderer = new Ft(this, t.rendererSettings);
                      break;
                    default:
                      this.renderer = new HybridRenderer(
                        this,
                        t.rendererSettings
                      );
                  }
                  this.imagePreloader.setCacheType(
                    e,
                    this.renderer.globalData.defs
                  ),
                    this.renderer.setProjectInterface(this.projectInterface),
                    (this.animType = e),
                    "" === t.loop ||
                    null === t.loop ||
                    void 0 === t.loop ||
                    !0 === t.loop
                      ? (this.loop = !0)
                      : !1 === t.loop
                      ? (this.loop = !1)
                      : (this.loop = parseInt(t.loop, 10)),
                    (this.autoplay = !("autoplay" in t) || t.autoplay),
                    (this.name = t.name ? t.name : ""),
                    (this.autoloadSegments =
                      !Object.prototype.hasOwnProperty.call(
                        t,
                        "autoloadSegments"
                      ) || t.autoloadSegments),
                    (this.assetsPath = t.assetsPath),
                    (this.initialSegment = t.initialSegment),
                    t.audioFactory &&
                      this.audioController.setAudioFactory(t.audioFactory),
                    t.animationData
                      ? this.setupAnimation(t.animationData)
                      : t.path &&
                        (-1 !== t.path.lastIndexOf("\\")
                          ? (this.path = t.path.substr(
                              0,
                              t.path.lastIndexOf("\\") + 1
                            ))
                          : (this.path = t.path.substr(
                              0,
                              t.path.lastIndexOf("/") + 1
                            )),
                        (this.fileName = t.path.substr(
                          t.path.lastIndexOf("/") + 1
                        )),
                        (this.fileName = this.fileName.substr(
                          0,
                          this.fileName.lastIndexOf(".json")
                        )),
                        H.loadAnimation(
                          t.path,
                          this.configAnimation,
                          this.onSetupError
                        ));
                }),
                (le.prototype.onSetupError = function () {
                  this.trigger("data_failed");
                }),
                (le.prototype.setupAnimation = function (t) {
                  H.completeAnimation(t, this.configAnimation);
                }),
                (le.prototype.setData = function (t, e) {
                  e && "object" != typeof e && (e = JSON.parse(e));
                  var s = { wrapper: t, animationData: e },
                    i = t.attributes;
                  (s.path = i.getNamedItem("data-animation-path")
                    ? i.getNamedItem("data-animation-path").value
                    : i.getNamedItem("data-bm-path")
                    ? i.getNamedItem("data-bm-path").value
                    : i.getNamedItem("bm-path")
                    ? i.getNamedItem("bm-path").value
                    : ""),
                    (s.animType = i.getNamedItem("data-anim-type")
                      ? i.getNamedItem("data-anim-type").value
                      : i.getNamedItem("data-bm-type")
                      ? i.getNamedItem("data-bm-type").value
                      : i.getNamedItem("bm-type")
                      ? i.getNamedItem("bm-type").value
                      : i.getNamedItem("data-bm-renderer")
                      ? i.getNamedItem("data-bm-renderer").value
                      : i.getNamedItem("bm-renderer")
                      ? i.getNamedItem("bm-renderer").value
                      : "canvas");
                  var a = i.getNamedItem("data-anim-loop")
                    ? i.getNamedItem("data-anim-loop").value
                    : i.getNamedItem("data-bm-loop")
                    ? i.getNamedItem("data-bm-loop").value
                    : i.getNamedItem("bm-loop")
                    ? i.getNamedItem("bm-loop").value
                    : "";
                  "false" === a
                    ? (s.loop = !1)
                    : "true" === a
                    ? (s.loop = !0)
                    : "" !== a && (s.loop = parseInt(a, 10));
                  var r = i.getNamedItem("data-anim-autoplay")
                    ? i.getNamedItem("data-anim-autoplay").value
                    : i.getNamedItem("data-bm-autoplay")
                    ? i.getNamedItem("data-bm-autoplay").value
                    : !i.getNamedItem("bm-autoplay") ||
                      i.getNamedItem("bm-autoplay").value;
                  (s.autoplay = "false" !== r),
                    (s.name = i.getNamedItem("data-name")
                      ? i.getNamedItem("data-name").value
                      : i.getNamedItem("data-bm-name")
                      ? i.getNamedItem("data-bm-name").value
                      : i.getNamedItem("bm-name")
                      ? i.getNamedItem("bm-name").value
                      : ""),
                    "false" ===
                      (i.getNamedItem("data-anim-prerender")
                        ? i.getNamedItem("data-anim-prerender").value
                        : i.getNamedItem("data-bm-prerender")
                        ? i.getNamedItem("data-bm-prerender").value
                        : i.getNamedItem("bm-prerender")
                        ? i.getNamedItem("bm-prerender").value
                        : "") && (s.prerender = !1),
                    this.setParams(s);
                }),
                (le.prototype.includeLayers = function (t) {
                  t.op > this.animationData.op &&
                    ((this.animationData.op = t.op),
                    (this.totalFrames = Math.floor(
                      t.op - this.animationData.ip
                    )));
                  var e,
                    s,
                    i = this.animationData.layers,
                    a = i.length,
                    r = t.layers,
                    n = r.length;
                  for (s = 0; s < n; s += 1)
                    for (e = 0; e < a; ) {
                      if (i[e].id === r[s].id) {
                        i[e] = r[s];
                        break;
                      }
                      e += 1;
                    }
                  if (
                    ((t.chars || t.fonts) &&
                      (this.renderer.globalData.fontManager.addChars(t.chars),
                      this.renderer.globalData.fontManager.addFonts(
                        t.fonts,
                        this.renderer.globalData.defs
                      )),
                    t.assets)
                  )
                    for (a = t.assets.length, e = 0; e < a; e += 1)
                      this.animationData.assets.push(t.assets[e]);
                  (this.animationData.__complete = !1),
                    H.completeAnimation(
                      this.animationData,
                      this.onSegmentComplete
                    );
                }),
                (le.prototype.onSegmentComplete = function (t) {
                  (this.animationData = t),
                    e && e.initExpressions(this),
                    this.loadNextSegment();
                }),
                (le.prototype.loadNextSegment = function () {
                  var t = this.animationData.segments;
                  if (!t || 0 === t.length || !this.autoloadSegments)
                    return (
                      this.trigger("data_ready"),
                      void (this.timeCompleted = this.totalFrames)
                    );
                  var e = t.shift();
                  this.timeCompleted = e.time * this.frameRate;
                  var s =
                    this.path + this.fileName + "_" + this.segmentPos + ".json";
                  (this.segmentPos += 1),
                    H.loadData(
                      s,
                      this.includeLayers.bind(this),
                      function () {
                        this.trigger("data_failed");
                      }.bind(this)
                    );
                }),
                (le.prototype.loadSegments = function () {
                  this.animationData.segments ||
                    (this.timeCompleted = this.totalFrames),
                    this.loadNextSegment();
                }),
                (le.prototype.imagesLoaded = function () {
                  this.trigger("loaded_images"), this.checkLoaded();
                }),
                (le.prototype.preloadImages = function () {
                  this.imagePreloader.setAssetsPath(this.assetsPath),
                    this.imagePreloader.setPath(this.path),
                    this.imagePreloader.loadAssets(
                      this.animationData.assets,
                      this.imagesLoaded.bind(this)
                    );
                }),
                (le.prototype.configAnimation = function (t) {
                  if (this.renderer)
                    try {
                      (this.animationData = t),
                        this.initialSegment
                          ? ((this.totalFrames = Math.floor(
                              this.initialSegment[1] - this.initialSegment[0]
                            )),
                            (this.firstFrame = Math.round(
                              this.initialSegment[0]
                            )))
                          : ((this.totalFrames = Math.floor(
                              this.animationData.op - this.animationData.ip
                            )),
                            (this.firstFrame = Math.round(
                              this.animationData.ip
                            ))),
                        this.renderer.configAnimation(t),
                        t.assets || (t.assets = []),
                        (this.assets = this.animationData.assets),
                        (this.frameRate = this.animationData.fr),
                        (this.frameMult = this.animationData.fr / 1e3),
                        this.renderer.searchExtraCompositions(t.assets),
                        (this.markers = Dt(t.markers || [])),
                        this.trigger("config_ready"),
                        this.preloadImages(),
                        this.loadSegments(),
                        this.updaFrameModifier(),
                        this.waitForFontsLoaded(),
                        this.isPaused && this.audioController.pause();
                    } catch (t) {
                      this.triggerConfigError(t);
                    }
                }),
                (le.prototype.waitForFontsLoaded = function () {
                  this.renderer &&
                    (this.renderer.globalData.fontManager.isLoaded
                      ? this.checkLoaded()
                      : setTimeout(this.waitForFontsLoaded.bind(this), 20));
                }),
                (le.prototype.checkLoaded = function () {
                  !this.isLoaded &&
                    this.renderer.globalData.fontManager.isLoaded &&
                    (this.imagePreloader.loadedImages() ||
                      "canvas" !== this.renderer.rendererType) &&
                    this.imagePreloader.loadedFootages() &&
                    ((this.isLoaded = !0),
                    e && e.initExpressions(this),
                    this.renderer.initItems(),
                    setTimeout(
                      function () {
                        this.trigger("DOMLoaded");
                      }.bind(this),
                      0
                    ),
                    this.gotoFrame(),
                    this.autoplay && this.play());
                }),
                (le.prototype.resize = function () {
                  this.renderer.updateContainerSize();
                }),
                (le.prototype.setSubframe = function (t) {
                  this.isSubframeEnabled = !!t;
                }),
                (le.prototype.gotoFrame = function () {
                  (this.currentFrame = this.isSubframeEnabled
                    ? this.currentRawFrame
                    : ~~this.currentRawFrame),
                    this.timeCompleted !== this.totalFrames &&
                      this.currentFrame > this.timeCompleted &&
                      (this.currentFrame = this.timeCompleted),
                    this.trigger("enterFrame"),
                    this.renderFrame(),
                    this.trigger("drawnFrame");
                }),
                (le.prototype.renderFrame = function () {
                  if (!1 !== this.isLoaded && this.renderer)
                    try {
                      this.renderer.renderFrame(
                        this.currentFrame + this.firstFrame
                      );
                    } catch (t) {
                      this.triggerRenderFrameError(t);
                    }
                }),
                (le.prototype.play = function (t) {
                  (t && this.name !== t) ||
                    (!0 === this.isPaused &&
                      ((this.isPaused = !1),
                      this.audioController.resume(),
                      this._idle &&
                        ((this._idle = !1), this.trigger("_active"))));
                }),
                (le.prototype.pause = function (t) {
                  (t && this.name !== t) ||
                    (!1 === this.isPaused &&
                      ((this.isPaused = !0),
                      (this._idle = !0),
                      this.trigger("_idle"),
                      this.audioController.pause()));
                }),
                (le.prototype.togglePause = function (t) {
                  (t && this.name !== t) ||
                    (!0 === this.isPaused ? this.play() : this.pause());
                }),
                (le.prototype.stop = function (t) {
                  (t && this.name !== t) ||
                    (this.pause(),
                    (this.playCount = 0),
                    (this._completedLoop = !1),
                    this.setCurrentRawFrameValue(0));
                }),
                (le.prototype.getMarkerData = function (t) {
                  for (var e, s = 0; s < this.markers.length; s += 1)
                    if ((e = this.markers[s]).payload && e.payload.name === t)
                      return e;
                  return null;
                }),
                (le.prototype.goToAndStop = function (t, e, s) {
                  if (!s || this.name === s) {
                    var i = Number(t);
                    if (isNaN(i)) {
                      var a = this.getMarkerData(t);
                      a && this.goToAndStop(a.time, !0);
                    } else
                      e
                        ? this.setCurrentRawFrameValue(t)
                        : this.setCurrentRawFrameValue(t * this.frameModifier);
                    this.pause();
                  }
                }),
                (le.prototype.goToAndPlay = function (t, e, s) {
                  if (!s || this.name === s) {
                    var i = Number(t);
                    if (isNaN(i)) {
                      var a = this.getMarkerData(t);
                      a &&
                        (a.duration
                          ? this.playSegments([a.time, a.time + a.duration], !0)
                          : this.goToAndStop(a.time, !0));
                    } else this.goToAndStop(i, e, s);
                    this.play();
                  }
                }),
                (le.prototype.advanceTime = function (t) {
                  if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                    var e = this.currentRawFrame + t * this.frameModifier,
                      s = !1;
                    e >= this.totalFrames - 1 && this.frameModifier > 0
                      ? this.loop && this.playCount !== this.loop
                        ? e >= this.totalFrames
                          ? ((this.playCount += 1),
                            this.checkSegments(e % this.totalFrames) ||
                              (this.setCurrentRawFrameValue(
                                e % this.totalFrames
                              ),
                              (this._completedLoop = !0),
                              this.trigger("loopComplete")))
                          : this.setCurrentRawFrameValue(e)
                        : this.checkSegments(
                            e > this.totalFrames ? e % this.totalFrames : 0
                          ) || ((s = !0), (e = this.totalFrames - 1))
                      : e < 0
                      ? this.checkSegments(e % this.totalFrames) ||
                        (!this.loop ||
                        (this.playCount-- <= 0 && !0 !== this.loop)
                          ? ((s = !0), (e = 0))
                          : (this.setCurrentRawFrameValue(
                              this.totalFrames + (e % this.totalFrames)
                            ),
                            this._completedLoop
                              ? this.trigger("loopComplete")
                              : (this._completedLoop = !0)))
                      : this.setCurrentRawFrameValue(e),
                      s &&
                        (this.setCurrentRawFrameValue(e),
                        this.pause(),
                        this.trigger("complete"));
                  }
                }),
                (le.prototype.adjustSegment = function (t, e) {
                  (this.playCount = 0),
                    t[1] < t[0]
                      ? (this.frameModifier > 0 &&
                          (this.playSpeed < 0
                            ? this.setSpeed(-this.playSpeed)
                            : this.setDirection(-1)),
                        (this.totalFrames = t[0] - t[1]),
                        (this.timeCompleted = this.totalFrames),
                        (this.firstFrame = t[1]),
                        this.setCurrentRawFrameValue(
                          this.totalFrames - 0.001 - e
                        ))
                      : t[1] > t[0] &&
                        (this.frameModifier < 0 &&
                          (this.playSpeed < 0
                            ? this.setSpeed(-this.playSpeed)
                            : this.setDirection(1)),
                        (this.totalFrames = t[1] - t[0]),
                        (this.timeCompleted = this.totalFrames),
                        (this.firstFrame = t[0]),
                        this.setCurrentRawFrameValue(0.001 + e)),
                    this.trigger("segmentStart");
                }),
                (le.prototype.setSegment = function (t, e) {
                  var s = -1;
                  this.isPaused &&
                    (this.currentRawFrame + this.firstFrame < t
                      ? (s = t)
                      : this.currentRawFrame + this.firstFrame > e &&
                        (s = e - t)),
                    (this.firstFrame = t),
                    (this.totalFrames = e - t),
                    (this.timeCompleted = this.totalFrames),
                    -1 !== s && this.goToAndStop(s, !0);
                }),
                (le.prototype.playSegments = function (t, e) {
                  if (
                    (e && (this.segments.length = 0), "object" == typeof t[0])
                  ) {
                    var s,
                      i = t.length;
                    for (s = 0; s < i; s += 1) this.segments.push(t[s]);
                  } else this.segments.push(t);
                  this.segments.length &&
                    e &&
                    this.adjustSegment(this.segments.shift(), 0),
                    this.isPaused && this.play();
                }),
                (le.prototype.resetSegments = function (t) {
                  (this.segments.length = 0),
                    this.segments.push([
                      this.animationData.ip,
                      this.animationData.op,
                    ]),
                    t && this.checkSegments(0);
                }),
                (le.prototype.checkSegments = function (t) {
                  return (
                    !!this.segments.length &&
                    (this.adjustSegment(this.segments.shift(), t), !0)
                  );
                }),
                (le.prototype.destroy = function (t) {
                  (t && this.name !== t) ||
                    !this.renderer ||
                    (this.renderer.destroy(),
                    this.imagePreloader.destroy(),
                    this.trigger("destroy"),
                    (this._cbs = null),
                    (this.onEnterFrame = null),
                    (this.onLoopComplete = null),
                    (this.onComplete = null),
                    (this.onSegmentStart = null),
                    (this.onDestroy = null),
                    (this.renderer = null),
                    (this.renderer = null),
                    (this.imagePreloader = null),
                    (this.projectInterface = null));
                }),
                (le.prototype.setCurrentRawFrameValue = function (t) {
                  (this.currentRawFrame = t), this.gotoFrame();
                }),
                (le.prototype.setSpeed = function (t) {
                  (this.playSpeed = t), this.updaFrameModifier();
                }),
                (le.prototype.setDirection = function (t) {
                  (this.playDirection = t < 0 ? -1 : 1),
                    this.updaFrameModifier();
                }),
                (le.prototype.setVolume = function (t, e) {
                  (e && this.name !== e) || this.audioController.setVolume(t);
                }),
                (le.prototype.getVolume = function () {
                  return this.audioController.getVolume();
                }),
                (le.prototype.mute = function (t) {
                  (t && this.name !== t) || this.audioController.mute();
                }),
                (le.prototype.unmute = function (t) {
                  (t && this.name !== t) || this.audioController.unmute();
                }),
                (le.prototype.updaFrameModifier = function () {
                  (this.frameModifier =
                    this.frameMult * this.playSpeed * this.playDirection),
                    this.audioController.setRate(
                      this.playSpeed * this.playDirection
                    );
                }),
                (le.prototype.getPath = function () {
                  return this.path;
                }),
                (le.prototype.getAssetsPath = function (t) {
                  var e = "";
                  if (t.e) e = t.p;
                  else if (this.assetsPath) {
                    var s = t.p;
                    -1 !== s.indexOf("images/") && (s = s.split("/")[1]),
                      (e = this.assetsPath + s);
                  } else (e = this.path), (e += t.u ? t.u : ""), (e += t.p);
                  return e;
                }),
                (le.prototype.getAssetData = function (t) {
                  for (var e = 0, s = this.assets.length; e < s; ) {
                    if (t === this.assets[e].id) return this.assets[e];
                    e += 1;
                  }
                  return null;
                }),
                (le.prototype.hide = function () {
                  this.renderer.hide();
                }),
                (le.prototype.show = function () {
                  this.renderer.show();
                }),
                (le.prototype.getDuration = function (t) {
                  return t
                    ? this.totalFrames
                    : this.totalFrames / this.frameRate;
                }),
                (le.prototype.trigger = function (t) {
                  if (this._cbs && this._cbs[t])
                    switch (t) {
                      case "enterFrame":
                      case "drawnFrame":
                        this.triggerEvent(
                          t,
                          new y(
                            t,
                            this.currentFrame,
                            this.totalFrames,
                            this.frameModifier
                          )
                        );
                        break;
                      case "loopComplete":
                        this.triggerEvent(
                          t,
                          new b(t, this.loop, this.playCount, this.frameMult)
                        );
                        break;
                      case "complete":
                        this.triggerEvent(t, new v(t, this.frameMult));
                        break;
                      case "segmentStart":
                        this.triggerEvent(
                          t,
                          new _(t, this.firstFrame, this.totalFrames)
                        );
                        break;
                      case "destroy":
                        this.triggerEvent(t, new k(t, this));
                        break;
                      default:
                        this.triggerEvent(t);
                    }
                  "enterFrame" === t &&
                    this.onEnterFrame &&
                    this.onEnterFrame.call(
                      this,
                      new y(
                        t,
                        this.currentFrame,
                        this.totalFrames,
                        this.frameMult
                      )
                    ),
                    "loopComplete" === t &&
                      this.onLoopComplete &&
                      this.onLoopComplete.call(
                        this,
                        new b(t, this.loop, this.playCount, this.frameMult)
                      ),
                    "complete" === t &&
                      this.onComplete &&
                      this.onComplete.call(this, new v(t, this.frameMult)),
                    "segmentStart" === t &&
                      this.onSegmentStart &&
                      this.onSegmentStart.call(
                        this,
                        new _(t, this.firstFrame, this.totalFrames)
                      ),
                    "destroy" === t &&
                      this.onDestroy &&
                      this.onDestroy.call(this, new k(t, this));
                }),
                (le.prototype.triggerRenderFrameError = function (t) {
                  var e = new A(t, this.currentFrame);
                  this.triggerEvent("error", e),
                    this.onError && this.onError.call(this, e);
                }),
                (le.prototype.triggerConfigError = function (t) {
                  var e = new P(t, this.currentFrame);
                  this.triggerEvent("error", e),
                    this.onError && this.onError.call(this, e);
                });
              var fe = {};
              function me() {
                !0 === ce
                  ? oe.searchAnimations(ue, ce, ge)
                  : oe.searchAnimations();
              }
              (fe.play = oe.play),
                (fe.pause = oe.pause),
                (fe.setLocationHref = function (t) {
                  s = t;
                }),
                (fe.togglePause = oe.togglePause),
                (fe.setSpeed = oe.setSpeed),
                (fe.setDirection = oe.setDirection),
                (fe.stop = oe.stop),
                (fe.searchAnimations = me),
                (fe.registerAnimation = oe.registerAnimation),
                (fe.loadAnimation = function (t) {
                  return (
                    !0 === ce && (t.animationData = JSON.parse(ue)),
                    oe.loadAnimation(t)
                  );
                }),
                (fe.setSubframeRendering = function (t) {
                  r = t;
                }),
                (fe.resize = oe.resize),
                (fe.goToAndStop = oe.goToAndStop),
                (fe.destroy = oe.destroy),
                (fe.setQuality = function (t) {
                  if ("string" == typeof t)
                    switch (t) {
                      case "high":
                        d = 200;
                        break;
                      default:
                      case "medium":
                        d = 50;
                        break;
                      case "low":
                        d = 10;
                    }
                  else !isNaN(t) && t > 1 && (d = t);
                  g(!(d >= 50));
                }),
                (fe.inBrowser = function () {
                  return "undefined" != typeof navigator;
                }),
                (fe.installPlugin = function (t, s) {
                  "expressions" === t && (e = s);
                }),
                (fe.freeze = oe.freeze),
                (fe.unfreeze = oe.unfreeze),
                (fe.setVolume = oe.setVolume),
                (fe.mute = oe.mute),
                (fe.unmute = oe.unmute),
                (fe.getRegisteredAnimations = oe.getRegisteredAnimations),
                (fe.useWebWorker = function (t) {
                  a = t;
                }),
                (fe.setIDPrefix = function (t) {
                  n = t;
                }),
                (fe.__getFactory = function (t) {
                  switch (t) {
                    case "propertyFactory":
                      return J;
                    case "shapePropertyFactory":
                      return Z;
                    case "matrix":
                      return q;
                    default:
                      return null;
                  }
                }),
                (fe.version = "5.8.1");
              var de,
                ce = "__[STANDALONE]__",
                ue = "__[ANIMATIONDATA]__",
                ge = "";
              if (ce) {
                var ye = document.getElementsByTagName("script"),
                  ve = ye[ye.length - 1] || { src: "" };
                (de = ve.src.replace(/^[^\?]+\??/, "")),
                  (ge = (function (t) {
                    for (var e = de.split("&"), s = 0; s < e.length; s += 1) {
                      var i = e[s].split("=");
                      if (decodeURIComponent(i[0]) == t)
                        return decodeURIComponent(i[1]);
                    }
                    return null;
                  })("renderer"));
              }
              var be = setInterval(function () {
                "complete" === document.readyState && (clearInterval(be), me());
              }, 100);
              return fe;
            })(a);
          }.call(e, s, e, t)) || (t.exports = i));
    },
  },
]);
