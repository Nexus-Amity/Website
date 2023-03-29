/*! For license information please see npm.luge.js.LICENSE.txt */
"use strict";
(self.webpackChunkaw_starter_wp = self.webpackChunkaw_starter_wp || []).push([
  [413],
  {
    207: (e, t, s) => {
      var i = new (class {
        constructor() {
          this.events = [];
        }
        on(e, t, s, i = !1) {
          (this.events[e] || (this.events[e] = [])).push({
            cb: t,
            context: s,
            once: i,
          });
        }
        once(e, t, s) {
          this.on(e, t, s, !0);
        }
        emit(e) {
          const t = this,
            s = [].slice.call(arguments, 1);
          this.events[e] &&
            this.events[e].forEach((i, r) => {
              i.cb.apply(i.context, s), i.once && delete t.events[e][r];
            });
        }
        off(e, t) {
          const s = this;
          this.events[e] &&
            this.events[e].forEach((i, r) => {
              i.cb === t && delete s.events[e][r];
            });
        }
      })();
      class r {
        static isArray(e) {
          return e && "object" == typeof e && Array.isArray(e);
        }
        static isObject(e) {
          return e && "object" == typeof e && !Array.isArray(e);
        }
        static isString(e) {
          return e && "string" == typeof e;
        }
        static mergeDeep(e, t) {
          const s = Object.assign({}, e);
          return (
            r.isObject(e) &&
              r.isObject(t) &&
              Object.keys(t).forEach((i) => {
                r.isObject(t[i])
                  ? i in e
                    ? r.isObject(e[i]) && r.isObject(t[i])
                      ? (s[i] = r.mergeDeep(e[i], t[i]))
                      : (s[i] = t[i])
                    : Object.assign(s, { [i]: t[i] })
                  : Object.assign(s, { [i]: t[i] });
              }),
            s
          );
        }
        static toCamelCase(e) {
          return r.isString(e)
            ? e
                .replace(/(?:^\w|[A-Z]|\b\w)/g, (e, t) =>
                  0 === t ? e.toLowerCase() : e.toUpperCase()
                )
                .replace(/\W+/g, "")
            : e;
        }
        static toUpperCamelCase(e) {
          return r.isString(e)
            ? (e = r.toCamelCase(e)).charAt(0).toUpperCase() + e.slice(1)
            : e;
        }
        static isInPage(e) {
          return e !== document.body && document.body.contains(e);
        }
      }
      var n = new (class {
        constructor() {
          (this.eventsName = [
            "siteInit",
            "pageInit",
            "siteLoad",
            "pageLoad",
            "siteIn",
            "pageIn",
            "reveal",
            "pageFetch",
            "pageOut",
            "pageCreate",
            "pageKill",
            "siteReload",
          ]),
            (this.events = {}),
            this.eventsName.forEach((e) => {
              this.events[e] = { callbacks: [], done: 0 };
            }),
            (this.cycles = {
              load: {
                events: [
                  "siteInit",
                  "pageInit",
                  ["siteLoad", "pageLoad"],
                  "siteIn",
                  "pageIn",
                  "reveal",
                ],
              },
              reload: { events: ["pageOut", "siteReload"] },
              transition: {
                events: [
                  ["pageFetch", "pageOut"],
                  "pageCreate",
                  "pageKill",
                  "pageInit",
                  "pageLoad",
                  "pageIn",
                  "reveal",
                ],
              },
              refresh: {
                events: [
                  "pageKill",
                  "pageInit",
                  "pageLoad",
                  "pageIn",
                  "reveal",
                ],
              },
            }),
            (this.debug = !1);
        }
        cycle(e) {
          if (this.cycles[e]) {
            (this.cycles[e].current = 0),
              this.debug && console.log("Start cycle: " + e);
            for (const e in this.events) this.events[e].done = 0;
            this.proceed(e);
          }
        }
        proceed(e) {
          const t = this.cycles[e].events,
            s = this.cycles[e].current;
          if (s < t.length) {
            const i = t[s];
            Array.isArray(i)
              ? i.forEach((t) => {
                  this.do(e, t);
                })
              : this.do(e, i);
          } else this.debug && console.log(e + " cycle ended");
        }
        next(e) {
          const t = this,
            s = this.cycles[e].events,
            i = this.cycles[e].current;
          if (i < s.length) {
            const r = s[i];
            let n = !0,
              o = [];
            (o = "string" == typeof r ? Array(r) : r),
              o.length > 1 &&
                o.forEach((e) => {
                  (0 === t.events[e].done ||
                    t.events[e].done < t.events[e].callbacks.length) &&
                    (n = !1);
                }),
              n &&
                (this.cycles[e].current++,
                requestAnimationFrame(this.proceed.bind(this, e)));
          }
        }
        add(e, t, s = 10, i = null) {
          this.events[e] &&
            this.events[e].callbacks.push({
              callback: t,
              position: s,
              cycle: i,
            });
        }
        remove(e, t, s = null) {
          const i = this;
          this.events[e] &&
            this.events[e].callbacks.forEach((r, n) => {
              r.callback === t &&
                r.cycle === s &&
                delete i.events[e].callbacks[n];
            });
        }
        do(e, t) {
          (this.events[t].done = 0),
            this.events[t].callbacks.length > 0
              ? (this.debug &&
                  console.log("Do event: " + t + " (" + e + " cycle)"),
                i.emit(r.toCamelCase("before-" + t)),
                this.events[t].callbacks
                  .sort((e, t) => e.position - t.position)
                  .forEach((s) => {
                    null === s.cycle || s.cycle === e
                      ? s.callback(() => this.done(e, t))
                      : this.done(e, t);
                  }))
              : this.done(e, t);
        }
        done(e, t) {
          this.events[t].done++,
            this.debug &&
              console.log(
                "Done event: " +
                  t +
                  " " +
                  this.events[t].done +
                  "/" +
                  this.events[t].callbacks.length +
                  " (" +
                  e +
                  " cycle)"
              ),
            i.emit(r.toCamelCase("after-" + t)),
            this.events[t].done >= this.events[t].callbacks.length &&
              this.next(e, t);
        }
        enableDebug(e = !0) {
          this.debug = e;
        }
      })();
      const o = {
          "Amazon Silk": "amazon_silk",
          "Android Browser": "android",
          Bada: "bada",
          BlackBerry: "blackberry",
          Chrome: "chrome",
          Chromium: "chromium",
          Electron: "electron",
          Epiphany: "epiphany",
          Firefox: "firefox",
          Focus: "focus",
          Generic: "generic",
          "Google Search": "google_search",
          Googlebot: "googlebot",
          "Internet Explorer": "ie",
          "K-Meleon": "k_meleon",
          Maxthon: "maxthon",
          "Microsoft Edge": "edge",
          "MZ Browser": "mz",
          "NAVER Whale Browser": "naver",
          Opera: "opera",
          "Opera Coast": "opera_coast",
          PhantomJS: "phantomjs",
          Puffin: "puffin",
          QupZilla: "qupzilla",
          QQ: "qq",
          QQLite: "qqlite",
          Safari: "safari",
          Sailfish: "sailfish",
          "Samsung Internet for Android": "samsung_internet",
          SeaMonkey: "seamonkey",
          Sleipnir: "sleipnir",
          Swing: "swing",
          Tizen: "tizen",
          "UC Browser": "uc",
          Vivaldi: "vivaldi",
          "WebOS Browser": "webos",
          WeChat: "wechat",
          "Yandex Browser": "yandex",
          Roku: "roku",
        },
        a = {
          amazon_silk: "Amazon Silk",
          android: "Android Browser",
          bada: "Bada",
          blackberry: "BlackBerry",
          chrome: "Chrome",
          chromium: "Chromium",
          electron: "Electron",
          epiphany: "Epiphany",
          firefox: "Firefox",
          focus: "Focus",
          generic: "Generic",
          googlebot: "Googlebot",
          google_search: "Google Search",
          ie: "Internet Explorer",
          k_meleon: "K-Meleon",
          maxthon: "Maxthon",
          edge: "Microsoft Edge",
          mz: "MZ Browser",
          naver: "NAVER Whale Browser",
          opera: "Opera",
          opera_coast: "Opera Coast",
          phantomjs: "PhantomJS",
          puffin: "Puffin",
          qupzilla: "QupZilla",
          qq: "QQ Browser",
          qqlite: "QQ Browser Lite",
          safari: "Safari",
          sailfish: "Sailfish",
          samsung_internet: "Samsung Internet for Android",
          seamonkey: "SeaMonkey",
          sleipnir: "Sleipnir",
          swing: "Swing",
          tizen: "Tizen",
          uc: "UC Browser",
          vivaldi: "Vivaldi",
          webos: "WebOS Browser",
          wechat: "WeChat",
          yandex: "Yandex Browser",
        },
        l = {
          tablet: "tablet",
          mobile: "mobile",
          desktop: "desktop",
          tv: "tv",
        },
        c = {
          WindowsPhone: "Windows Phone",
          Windows: "Windows",
          MacOS: "macOS",
          iOS: "iOS",
          Android: "Android",
          WebOS: "WebOS",
          BlackBerry: "BlackBerry",
          Bada: "Bada",
          Tizen: "Tizen",
          Linux: "Linux",
          ChromeOS: "Chrome OS",
          PlayStation4: "PlayStation 4",
          Roku: "Roku",
        },
        d = {
          EdgeHTML: "EdgeHTML",
          Blink: "Blink",
          Trident: "Trident",
          Presto: "Presto",
          Gecko: "Gecko",
          WebKit: "WebKit",
        };
      class h {
        static getFirstMatch(e, t) {
          const s = t.match(e);
          return (s && s.length > 0 && s[1]) || "";
        }
        static getSecondMatch(e, t) {
          const s = t.match(e);
          return (s && s.length > 1 && s[2]) || "";
        }
        static matchAndReturnConst(e, t, s) {
          if (e.test(t)) return s;
        }
        static getWindowsVersionName(e) {
          switch (e) {
            case "NT":
              return "NT";
            case "XP":
            case "NT 5.1":
              return "XP";
            case "NT 5.0":
              return "2000";
            case "NT 5.2":
              return "2003";
            case "NT 6.0":
              return "Vista";
            case "NT 6.1":
              return "7";
            case "NT 6.2":
              return "8";
            case "NT 6.3":
              return "8.1";
            case "NT 10.0":
              return "10";
            default:
              return;
          }
        }
        static getMacOSVersionName(e) {
          const t = e
            .split(".")
            .splice(0, 2)
            .map((e) => parseInt(e, 10) || 0);
          if ((t.push(0), 10 === t[0]))
            switch (t[1]) {
              case 5:
                return "Leopard";
              case 6:
                return "Snow Leopard";
              case 7:
                return "Lion";
              case 8:
                return "Mountain Lion";
              case 9:
                return "Mavericks";
              case 10:
                return "Yosemite";
              case 11:
                return "El Capitan";
              case 12:
                return "Sierra";
              case 13:
                return "High Sierra";
              case 14:
                return "Mojave";
              case 15:
                return "Catalina";
              default:
                return;
            }
        }
        static getAndroidVersionName(e) {
          const t = e
            .split(".")
            .splice(0, 2)
            .map((e) => parseInt(e, 10) || 0);
          if ((t.push(0), !(1 === t[0] && t[1] < 5)))
            return 1 === t[0] && t[1] < 6
              ? "Cupcake"
              : 1 === t[0] && t[1] >= 6
              ? "Donut"
              : 2 === t[0] && t[1] < 2
              ? "Eclair"
              : 2 === t[0] && 2 === t[1]
              ? "Froyo"
              : 2 === t[0] && t[1] > 2
              ? "Gingerbread"
              : 3 === t[0]
              ? "Honeycomb"
              : 4 === t[0] && t[1] < 1
              ? "Ice Cream Sandwich"
              : 4 === t[0] && t[1] < 4
              ? "Jelly Bean"
              : 4 === t[0] && t[1] >= 4
              ? "KitKat"
              : 5 === t[0]
              ? "Lollipop"
              : 6 === t[0]
              ? "Marshmallow"
              : 7 === t[0]
              ? "Nougat"
              : 8 === t[0]
              ? "Oreo"
              : 9 === t[0]
              ? "Pie"
              : void 0;
        }
        static getVersionPrecision(e) {
          return e.split(".").length;
        }
        static compareVersions(e, t, s = !1) {
          const i = h.getVersionPrecision(e),
            r = h.getVersionPrecision(t);
          let n = Math.max(i, r),
            o = 0;
          const a = h.map([e, t], (e) => {
            const t = n - h.getVersionPrecision(e),
              s = e + new Array(t + 1).join(".0");
            return h
              .map(s.split("."), (e) => new Array(20 - e.length).join("0") + e)
              .reverse();
          });
          for (s && (o = n - Math.min(i, r)), n -= 1; n >= o; ) {
            if (a[0][n] > a[1][n]) return 1;
            if (a[0][n] === a[1][n]) {
              if (n === o) return 0;
              n -= 1;
            } else if (a[0][n] < a[1][n]) return -1;
          }
        }
        static map(e, t) {
          const s = [];
          let i;
          if (Array.prototype.map) return Array.prototype.map.call(e, t);
          for (i = 0; i < e.length; i += 1) s.push(t(e[i]));
          return s;
        }
        static find(e, t) {
          let s, i;
          if (Array.prototype.find) return Array.prototype.find.call(e, t);
          for (s = 0, i = e.length; s < i; s += 1) {
            const i = e[s];
            if (t(i, s)) return i;
          }
        }
        static assign(e, ...t) {
          const s = e;
          let i, r;
          if (Object.assign) return Object.assign(e, ...t);
          for (i = 0, r = t.length; i < r; i += 1) {
            const e = t[i];
            "object" == typeof e &&
              null !== e &&
              Object.keys(e).forEach((t) => {
                s[t] = e[t];
              });
          }
          return e;
        }
        static getBrowserAlias(e) {
          return o[e];
        }
        static getBrowserTypeByAlias(e) {
          return a[e] || "";
        }
      }
      const u = /version\/(\d+(\.?_?\d+)+)/i,
        p = [
          {
            test: [/googlebot/i],
            describe(e) {
              const t = { name: "Googlebot" },
                s =
                  h.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) ||
                  h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/opera/i],
            describe(e) {
              const t = { name: "Opera" },
                s =
                  h.getFirstMatch(u, e) ||
                  h.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/opr\/|opios/i],
            describe(e) {
              const t = { name: "Opera" },
                s =
                  h.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) ||
                  h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/SamsungBrowser/i],
            describe(e) {
              const t = { name: "Samsung Internet for Android" },
                s =
                  h.getFirstMatch(u, e) ||
                  h.getFirstMatch(
                    /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                    e
                  );
              return s && (t.version = s), t;
            },
          },
          {
            test: [/Whale/i],
            describe(e) {
              const t = { name: "NAVER Whale Browser" },
                s =
                  h.getFirstMatch(u, e) ||
                  h.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/MZBrowser/i],
            describe(e) {
              const t = { name: "MZ Browser" },
                s =
                  h.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) ||
                  h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/focus/i],
            describe(e) {
              const t = { name: "Focus" },
                s =
                  h.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) ||
                  h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/swing/i],
            describe(e) {
              const t = { name: "Swing" },
                s =
                  h.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) ||
                  h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/coast/i],
            describe(e) {
              const t = { name: "Opera Coast" },
                s =
                  h.getFirstMatch(u, e) ||
                  h.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/opt\/\d+(?:.?_?\d+)+/i],
            describe(e) {
              const t = { name: "Opera Touch" },
                s =
                  h.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                  h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/yabrowser/i],
            describe(e) {
              const t = { name: "Yandex Browser" },
                s =
                  h.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                  h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/ucbrowser/i],
            describe(e) {
              const t = { name: "UC Browser" },
                s =
                  h.getFirstMatch(u, e) ||
                  h.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/Maxthon|mxios/i],
            describe(e) {
              const t = { name: "Maxthon" },
                s =
                  h.getFirstMatch(u, e) ||
                  h.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/epiphany/i],
            describe(e) {
              const t = { name: "Epiphany" },
                s =
                  h.getFirstMatch(u, e) ||
                  h.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/puffin/i],
            describe(e) {
              const t = { name: "Puffin" },
                s =
                  h.getFirstMatch(u, e) ||
                  h.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/sleipnir/i],
            describe(e) {
              const t = { name: "Sleipnir" },
                s =
                  h.getFirstMatch(u, e) ||
                  h.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/k-meleon/i],
            describe(e) {
              const t = { name: "K-Meleon" },
                s =
                  h.getFirstMatch(u, e) ||
                  h.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/micromessenger/i],
            describe(e) {
              const t = { name: "WeChat" },
                s =
                  h.getFirstMatch(
                    /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                    e
                  ) || h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/qqbrowser/i],
            describe(e) {
              const t = {
                  name: /qqbrowserlite/i.test(e)
                    ? "QQ Browser Lite"
                    : "QQ Browser",
                },
                s =
                  h.getFirstMatch(
                    /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                    e
                  ) || h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/msie|trident/i],
            describe(e) {
              const t = { name: "Internet Explorer" },
                s = h.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/\sedg\//i],
            describe(e) {
              const t = { name: "Microsoft Edge" },
                s = h.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/edg([ea]|ios)/i],
            describe(e) {
              const t = { name: "Microsoft Edge" },
                s = h.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/vivaldi/i],
            describe(e) {
              const t = { name: "Vivaldi" },
                s = h.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/seamonkey/i],
            describe(e) {
              const t = { name: "SeaMonkey" },
                s = h.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/sailfish/i],
            describe(e) {
              const t = { name: "Sailfish" },
                s = h.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/silk/i],
            describe(e) {
              const t = { name: "Amazon Silk" },
                s = h.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/phantom/i],
            describe(e) {
              const t = { name: "PhantomJS" },
                s = h.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/slimerjs/i],
            describe(e) {
              const t = { name: "SlimerJS" },
                s = h.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe(e) {
              const t = { name: "BlackBerry" },
                s =
                  h.getFirstMatch(u, e) ||
                  h.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/(web|hpw)[o0]s/i],
            describe(e) {
              const t = { name: "WebOS Browser" },
                s =
                  h.getFirstMatch(u, e) ||
                  h.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/bada/i],
            describe(e) {
              const t = { name: "Bada" },
                s = h.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/tizen/i],
            describe(e) {
              const t = { name: "Tizen" },
                s =
                  h.getFirstMatch(
                    /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                    e
                  ) || h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/qupzilla/i],
            describe(e) {
              const t = { name: "QupZilla" },
                s =
                  h.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                  h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/firefox|iceweasel|fxios/i],
            describe(e) {
              const t = { name: "Firefox" },
                s = h.getFirstMatch(
                  /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                  e
                );
              return s && (t.version = s), t;
            },
          },
          {
            test: [/electron/i],
            describe(e) {
              const t = { name: "Electron" },
                s = h.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/MiuiBrowser/i],
            describe(e) {
              const t = { name: "Miui" },
                s = h.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/chromium/i],
            describe(e) {
              const t = { name: "Chromium" },
                s =
                  h.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) ||
                  h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/chrome|crios|crmo/i],
            describe(e) {
              const t = { name: "Chrome" },
                s = h.getFirstMatch(
                  /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                  e
                );
              return s && (t.version = s), t;
            },
          },
          {
            test: [/GSA/i],
            describe(e) {
              const t = { name: "Google Search" },
                s = h.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test(e) {
              const t = !e.test(/like android/i),
                s = e.test(/android/i);
              return t && s;
            },
            describe(e) {
              const t = { name: "Android Browser" },
                s = h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/playstation 4/i],
            describe(e) {
              const t = { name: "PlayStation 4" },
                s = h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/safari|applewebkit/i],
            describe(e) {
              const t = { name: "Safari" },
                s = h.getFirstMatch(u, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/.*/i],
            describe(e) {
              const t =
                -1 !== e.search("\\(")
                  ? /^(.*)\/(.*)[ \t]\((.*)/
                  : /^(.*)\/(.*) /;
              return {
                name: h.getFirstMatch(t, e),
                version: h.getSecondMatch(t, e),
              };
            },
          },
        ];
      var g = [
          {
            test: [/Roku\/DVP/],
            describe(e) {
              const t = h.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
              return { name: c.Roku, version: t };
            },
          },
          {
            test: [/windows phone/i],
            describe(e) {
              const t = h.getFirstMatch(
                /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                e
              );
              return { name: c.WindowsPhone, version: t };
            },
          },
          {
            test: [/windows /i],
            describe(e) {
              const t = h.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                s = h.getWindowsVersionName(t);
              return { name: c.Windows, version: t, versionName: s };
            },
          },
          {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe(e) {
              const t = { name: c.iOS },
                s = h.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/macintosh/i],
            describe(e) {
              const t = h
                  .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e)
                  .replace(/[_\s]/g, "."),
                s = h.getMacOSVersionName(t),
                i = { name: c.MacOS, version: t };
              return s && (i.versionName = s), i;
            },
          },
          {
            test: [/(ipod|iphone|ipad)/i],
            describe(e) {
              const t = h
                .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e)
                .replace(/[_\s]/g, ".");
              return { name: c.iOS, version: t };
            },
          },
          {
            test(e) {
              const t = !e.test(/like android/i),
                s = e.test(/android/i);
              return t && s;
            },
            describe(e) {
              const t = h.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                s = h.getAndroidVersionName(t),
                i = { name: c.Android, version: t };
              return s && (i.versionName = s), i;
            },
          },
          {
            test: [/(web|hpw)[o0]s/i],
            describe(e) {
              const t = h.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                s = { name: c.WebOS };
              return t && t.length && (s.version = t), s;
            },
          },
          {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe(e) {
              const t =
                h.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) ||
                h.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) ||
                h.getFirstMatch(/\bbb(\d+)/i, e);
              return { name: c.BlackBerry, version: t };
            },
          },
          {
            test: [/bada/i],
            describe(e) {
              const t = h.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
              return { name: c.Bada, version: t };
            },
          },
          {
            test: [/tizen/i],
            describe(e) {
              const t = h.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
              return { name: c.Tizen, version: t };
            },
          },
          { test: [/linux/i], describe: () => ({ name: c.Linux }) },
          { test: [/CrOS/], describe: () => ({ name: c.ChromeOS }) },
          {
            test: [/PlayStation 4/],
            describe(e) {
              const t = h.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
              return { name: c.PlayStation4, version: t };
            },
          },
        ],
        m = [
          {
            test: [/googlebot/i],
            describe: () => ({ type: "bot", vendor: "Google" }),
          },
          {
            test: [/huawei/i],
            describe(e) {
              const t = h.getFirstMatch(/(can-l01)/i, e) && "Nova",
                s = { type: l.mobile, vendor: "Huawei" };
              return t && (s.model = t), s;
            },
          },
          {
            test: [/nexus\s*(?:7|8|9|10).*/i],
            describe: () => ({ type: l.tablet, vendor: "Nexus" }),
          },
          {
            test: [/ipad/i],
            describe: () => ({
              type: l.tablet,
              vendor: "Apple",
              model: "iPad",
            }),
          },
          {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe: () => ({
              type: l.tablet,
              vendor: "Apple",
              model: "iPad",
            }),
          },
          {
            test: [/kftt build/i],
            describe: () => ({
              type: l.tablet,
              vendor: "Amazon",
              model: "Kindle Fire HD 7",
            }),
          },
          {
            test: [/silk/i],
            describe: () => ({ type: l.tablet, vendor: "Amazon" }),
          },
          { test: [/tablet(?! pc)/i], describe: () => ({ type: l.tablet }) },
          {
            test(e) {
              const t = e.test(/ipod|iphone/i),
                s = e.test(/like (ipod|iphone)/i);
              return t && !s;
            },
            describe(e) {
              const t = h.getFirstMatch(/(ipod|iphone)/i, e);
              return { type: l.mobile, vendor: "Apple", model: t };
            },
          },
          {
            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
            describe: () => ({ type: l.mobile, vendor: "Nexus" }),
          },
          { test: [/[^-]mobi/i], describe: () => ({ type: l.mobile }) },
          {
            test: (e) => "blackberry" === e.getBrowserName(!0),
            describe: () => ({ type: l.mobile, vendor: "BlackBerry" }),
          },
          {
            test: (e) => "bada" === e.getBrowserName(!0),
            describe: () => ({ type: l.mobile }),
          },
          {
            test: (e) => "windows phone" === e.getBrowserName(),
            describe: () => ({ type: l.mobile, vendor: "Microsoft" }),
          },
          {
            test(e) {
              const t = Number(String(e.getOSVersion()).split(".")[0]);
              return "android" === e.getOSName(!0) && t >= 3;
            },
            describe: () => ({ type: l.tablet }),
          },
          {
            test: (e) => "android" === e.getOSName(!0),
            describe: () => ({ type: l.mobile }),
          },
          {
            test: (e) => "macos" === e.getOSName(!0),
            describe: () => ({ type: l.desktop, vendor: "Apple" }),
          },
          {
            test: (e) => "windows" === e.getOSName(!0),
            describe: () => ({ type: l.desktop }),
          },
          {
            test: (e) => "linux" === e.getOSName(!0),
            describe: () => ({ type: l.desktop }),
          },
          {
            test: (e) => "playstation 4" === e.getOSName(!0),
            describe: () => ({ type: l.tv }),
          },
          {
            test: (e) => "roku" === e.getOSName(!0),
            describe: () => ({ type: l.tv }),
          },
        ],
        f = [
          {
            test: (e) => "microsoft edge" === e.getBrowserName(!0),
            describe(e) {
              if (/\sedg\//i.test(e)) return { name: d.Blink };
              const t = h.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
              return { name: d.EdgeHTML, version: t };
            },
          },
          {
            test: [/trident/i],
            describe(e) {
              const t = { name: d.Trident },
                s = h.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: (e) => e.test(/presto/i),
            describe(e) {
              const t = { name: d.Presto },
                s = h.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test(e) {
              const t = e.test(/gecko/i),
                s = e.test(/like gecko/i);
              return t && !s;
            },
            describe(e) {
              const t = { name: d.Gecko },
                s = h.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
          {
            test: [/(apple)?webkit\/537\.36/i],
            describe: () => ({ name: d.Blink }),
          },
          {
            test: [/(apple)?webkit/i],
            describe(e) {
              const t = { name: d.WebKit },
                s = h.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
              return s && (t.version = s), t;
            },
          },
        ];
      class b {
        constructor(e, t = !1) {
          if (null == e || "" === e)
            throw new Error("UserAgent parameter can't be empty");
          (this._ua = e), (this.parsedResult = {}), !0 !== t && this.parse();
        }
        getUA() {
          return this._ua;
        }
        test(e) {
          return e.test(this._ua);
        }
        parseBrowser() {
          this.parsedResult.browser = {};
          const e = h.find(p, (e) => {
            if ("function" == typeof e.test) return e.test(this);
            if (e.test instanceof Array)
              return e.test.some((e) => this.test(e));
            throw new Error("Browser's test function is not valid");
          });
          return (
            e && (this.parsedResult.browser = e.describe(this.getUA())),
            this.parsedResult.browser
          );
        }
        getBrowser() {
          return this.parsedResult.browser
            ? this.parsedResult.browser
            : this.parseBrowser();
        }
        getBrowserName(e) {
          return e
            ? String(this.getBrowser().name).toLowerCase() || ""
            : this.getBrowser().name || "";
        }
        getBrowserVersion() {
          return this.getBrowser().version;
        }
        getOS() {
          return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
        }
        parseOS() {
          this.parsedResult.os = {};
          const e = h.find(g, (e) => {
            if ("function" == typeof e.test) return e.test(this);
            if (e.test instanceof Array)
              return e.test.some((e) => this.test(e));
            throw new Error("Browser's test function is not valid");
          });
          return (
            e && (this.parsedResult.os = e.describe(this.getUA())),
            this.parsedResult.os
          );
        }
        getOSName(e) {
          const { name: t } = this.getOS();
          return e ? String(t).toLowerCase() || "" : t || "";
        }
        getOSVersion() {
          return this.getOS().version;
        }
        getPlatform() {
          return this.parsedResult.platform
            ? this.parsedResult.platform
            : this.parsePlatform();
        }
        getPlatformType(e = !1) {
          const { type: t } = this.getPlatform();
          return e ? String(t).toLowerCase() || "" : t || "";
        }
        parsePlatform() {
          this.parsedResult.platform = {};
          const e = h.find(m, (e) => {
            if ("function" == typeof e.test) return e.test(this);
            if (e.test instanceof Array)
              return e.test.some((e) => this.test(e));
            throw new Error("Browser's test function is not valid");
          });
          return (
            e && (this.parsedResult.platform = e.describe(this.getUA())),
            this.parsedResult.platform
          );
        }
        getEngine() {
          return this.parsedResult.engine
            ? this.parsedResult.engine
            : this.parseEngine();
        }
        getEngineName(e) {
          return e
            ? String(this.getEngine().name).toLowerCase() || ""
            : this.getEngine().name || "";
        }
        parseEngine() {
          this.parsedResult.engine = {};
          const e = h.find(f, (e) => {
            if ("function" == typeof e.test) return e.test(this);
            if (e.test instanceof Array)
              return e.test.some((e) => this.test(e));
            throw new Error("Browser's test function is not valid");
          });
          return (
            e && (this.parsedResult.engine = e.describe(this.getUA())),
            this.parsedResult.engine
          );
        }
        parse() {
          return (
            this.parseBrowser(),
            this.parseOS(),
            this.parsePlatform(),
            this.parseEngine(),
            this
          );
        }
        getResult() {
          return h.assign({}, this.parsedResult);
        }
        satisfies(e) {
          const t = {};
          let s = 0;
          const i = {};
          let r = 0;
          if (
            (Object.keys(e).forEach((n) => {
              const o = e[n];
              "string" == typeof o
                ? ((i[n] = o), (r += 1))
                : "object" == typeof o && ((t[n] = o), (s += 1));
            }),
            s > 0)
          ) {
            const e = Object.keys(t),
              s = h.find(e, (e) => this.isOS(e));
            if (s) {
              const e = this.satisfies(t[s]);
              if (void 0 !== e) return e;
            }
            const i = h.find(e, (e) => this.isPlatform(e));
            if (i) {
              const e = this.satisfies(t[i]);
              if (void 0 !== e) return e;
            }
          }
          if (r > 0) {
            const e = Object.keys(i),
              t = h.find(e, (e) => this.isBrowser(e, !0));
            if (void 0 !== t) return this.compareVersion(i[t]);
          }
        }
        isBrowser(e, t = !1) {
          const s = this.getBrowserName().toLowerCase();
          let i = e.toLowerCase();
          const r = h.getBrowserTypeByAlias(i);
          return t && r && (i = r.toLowerCase()), i === s;
        }
        compareVersion(e) {
          let t = [0],
            s = e,
            i = !1;
          const r = this.getBrowserVersion();
          if ("string" == typeof r)
            return (
              ">" === e[0] || "<" === e[0]
                ? ((s = e.substr(1)),
                  "=" === e[1] ? ((i = !0), (s = e.substr(2))) : (t = []),
                  ">" === e[0] ? t.push(1) : t.push(-1))
                : "=" === e[0]
                ? (s = e.substr(1))
                : "~" === e[0] && ((i = !0), (s = e.substr(1))),
              t.indexOf(h.compareVersions(r, s, i)) > -1
            );
        }
        isOS(e) {
          return this.getOSName(!0) === String(e).toLowerCase();
        }
        isPlatform(e) {
          return this.getPlatformType(!0) === String(e).toLowerCase();
        }
        isEngine(e) {
          return this.getEngineName(!0) === String(e).toLowerCase();
        }
        is(e, t = !1) {
          return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
        }
        some(e = []) {
          return e.some((e) => this.is(e));
        }
      }
      var y = new (class {
          constructor() {
            (this.settings = {
              cursor: {
                disabled: ["tablet", "mobile"],
                inertia: 1,
                trailLength: 10,
              },
              intersection: { threshold: 0.3 },
              lottie: { renderer: "svg", subFrame: !0 },
              mouse: { inertia: 0.1 },
              parallax: { inertia: 0.1 },
              preloader: { duration: 0 },
              reveal: { stagger: 0.1, threshold: 0.15 },
              scroll: { inertia: 0.1 },
              smooth: {
                disabled: ["tablet", "mobile", { safari: "<=12" }],
                inertia: 0.1,
              },
              sticky: { disabled: ["tablet", "mobile"] },
              ticker: { external: !1 },
              transition: { reload: !1 },
            }),
              (this.timeouts = { resizeThrottle: null, scrollEnd: null }),
              (this.windowWidth = 1),
              (this.windowHeight = 1),
              (this.clientWidth = 1),
              (window.scrollTop = window.scrollY),
              (window.unifiedScrollTop = window.scrollTop),
              (window.maxScrollTop = 1),
              (window.scrollProgress = 0),
              (this.previousScrollTop = window.scrollY),
              (this.isScrolling = !1),
              (window.mouseX = -1),
              (window.mouseY = -1),
              (window.mouseLastScrollTop = 0),
              (window.browser = class {
                static getParser(e, t = !1) {
                  if ("string" != typeof e)
                    throw new Error("UserAgent should be a string");
                  return new b(e, t);
                }
                static parse(e) {
                  return new b(e).getResult();
                }
                static get BROWSER_MAP() {
                  return a;
                }
                static get ENGINE_MAP() {
                  return d;
                }
                static get OS_MAP() {
                  return c;
                }
                static get PLATFORMS_MAP() {
                  return l;
                }
              }.getParser(window.navigator.userAgent)),
              document.documentElement.classList.add(
                "is-" + window.browser.getPlatformType()
              ),
              (window.browser.is("mobile") || window.browser.is("tablet")) &&
                document.documentElement.classList.add("is-handheld"),
              window.browser.is("Safari") &&
                (document.documentElement.classList.add("is-safari"),
                document.documentElement.classList.add(
                  "is-safari-" + window.browser.getBrowserVersion()
                )),
              n.add("siteInit", this.siteInit.bind(this), 999),
              this.bindEvents();
          }
          setSettings(e) {
            this.settings = r.mergeDeep(this.settings, e);
          }
          siteInit(e) {
            this.setCSSProperties(), this.scrollHandler(), e();
          }
          bindEvents() {
            window.addEventListener("mousemove", this.mouseHandler.bind(this), {
              passive: !0,
            }),
              window.addEventListener("resize", this.resizeThrottle.bind(this)),
              window.addEventListener("scroll", this.scrollHandler.bind(this), {
                passive: !0,
              });
          }
          mouseHandler(e) {
            const t = e.pageX,
              s = e.pageY - window.scrollTop;
            (window.mouseX = t), (window.mouseY = s), i.emit("mouseMove", e);
          }
          resizeThrottle() {
            clearTimeout(this.timeouts.resizeThrottle),
              (this.timeouts.resizeThrottle = setTimeout(
                this.resizeHandler.bind(this),
                200
              ));
          }
          resizeHandler() {
            this.setCSSProperties(), i.emit("resize");
          }
          setCSSProperties() {
            const e = window.innerWidth;
            this.windowWidth !== e &&
              ((this.windowWidth = e),
              (this.clientWidth = document.body.clientWidth));
            const t = window.innerHeight;
            this.windowHeight !== t &&
              ((this.windowHeight = t),
              (this.clientHeight = document.body.clientHeight)),
              requestAnimationFrame(() => {
                document.documentElement.style.setProperty(
                  "--vw",
                  0.01 * this.windowWidth + "px"
                ),
                  document.documentElement.style.setProperty(
                    "--cw",
                    0.01 * this.clientWidth + "px"
                  ),
                  document.documentElement.style.setProperty(
                    "--vh",
                    0.01 * this.windowHeight + "px"
                  ),
                  document.documentElement.style.setProperty(
                    "--ch",
                    0.01 * this.clientHeight + "px"
                  );
              });
          }
          scrollHandler() {
            (window.scrollTop = window.scrollY),
              this.isScrolling || this.scrollStart(),
              clearTimeout(this.timeouts.scrollEnd),
              (this.timeouts.scrollEnd = setTimeout(
                this.scrollEnd.bind(this),
                200
              )),
              (this.previousScrollTop = window.scrollTop),
              (window.scrollProgress = window.scrollTop / window.maxScrollTop),
              window.hasSmoothScroll ||
                ((window.unifiedScrollTop = window.scrollTop),
                i.emit("scroll"));
          }
          scrollStart() {
            (this.isScrolling = !0),
              document.documentElement.classList.add("is-scrolling"),
              i.emit("scrollStart");
          }
          scrollEnd() {
            (this.isScrolling = !1),
              document.documentElement.classList.remove("is-scrolling"),
              i.emit("scrollEnd");
          }
        })(),
        w = new (class {
          constructor() {
            (this.elements = []), n.add("siteInit", this.init.bind(this), 20);
          }
          init(e) {
            this.createObserver(), e();
          }
          createObserver() {
            this.observer = new IntersectionObserver(
              this.intersectionCallback.bind(this),
              { threshold: [y.settings.intersection.threshold] }
            );
          }
          intersectionCallback(e) {
            e.forEach((e) => {
              const t = e.target;
              let s = "in";
              e.isIntersecting ||
                (s = e.boundingClientRect.y <= 0 ? "above" : "under"),
                t.luge.viewport.position !== s &&
                  ((t.luge.viewport.position = s),
                  t.dispatchEvent(new CustomEvent("viewportintersect")),
                  t.dispatchEvent(new CustomEvent("viewport" + s)),
                  "in" === s
                    ? t.dispatchEvent(new CustomEvent("viewportin"))
                    : t.dispatchEvent(new CustomEvent("viewportout")));
            });
          }
          add(e) {
            this.observer.observe(e),
              (e.luge || (e.luge = {})) &&
                (e.luge = r.mergeDeep(e.luge, {
                  viewport: { position: "out" },
                }));
          }
          remove(e) {
            this.observer.unobserve(e);
          }
        })(),
        v =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== s.g
            ? s.g
            : "undefined" != typeof self
            ? self
            : {},
        E = function (e) {
          return e && e.Math == Math && e;
        },
        S =
          E("object" == typeof globalThis && globalThis) ||
          E("object" == typeof window && window) ||
          E("object" == typeof self && self) ||
          E("object" == typeof v && v) ||
          (function () {
            return this;
          })() ||
          Function("return this")(),
        T = {},
        x = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        },
        A = !x(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        }),
        k = {},
        P = {}.propertyIsEnumerable,
        M = Object.getOwnPropertyDescriptor,
        O = M && !P.call({ 1: 2 }, 1);
      k.f = O
        ? function (e) {
            var t = M(this, e);
            return !!t && t.enumerable;
          }
        : P;
      var B = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        },
        L = {}.toString,
        C = "".split,
        F = function (e) {
          if (null == e) throw TypeError("Can't call method on " + e);
          return e;
        },
        I = x(function () {
          return !Object("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" ==
                (function (e) {
                  return L.call(e).slice(8, -1);
                })(e)
                ? C.call(e, "")
                : Object(e);
            }
          : Object,
        _ = F,
        R = function (e) {
          return I(_(e));
        },
        H = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        },
        N = H,
        j = function (e, t) {
          if (!N(e)) return e;
          var s, i;
          if (t && "function" == typeof (s = e.toString) && !N((i = s.call(e))))
            return i;
          if ("function" == typeof (s = e.valueOf) && !N((i = s.call(e))))
            return i;
          if (
            !t &&
            "function" == typeof (s = e.toString) &&
            !N((i = s.call(e)))
          )
            return i;
          throw TypeError("Can't convert object to primitive value");
        },
        q = F,
        z = {}.hasOwnProperty,
        D =
          Object.hasOwn ||
          function (e, t) {
            return z.call(
              (function (e) {
                return Object(q(e));
              })(e),
              t
            );
          },
        K = H,
        V = S.document,
        U = K(V) && K(V.createElement),
        W =
          !A &&
          !x(function () {
            return (
              7 !=
              Object.defineProperty(U ? V.createElement("div") : {}, "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          }),
        Y = A,
        X = k,
        G = B,
        Q = R,
        $ = j,
        Z = D,
        J = W,
        ee = Object.getOwnPropertyDescriptor;
      T.f = Y
        ? ee
        : function (e, t) {
            if (((e = Q(e)), (t = $(t, !0)), J))
              try {
                return ee(e, t);
              } catch (e) {}
            if (Z(e, t)) return G(!X.f.call(e, t), e[t]);
          };
      var te = {},
        se = H,
        ie = function (e) {
          if (!se(e)) throw TypeError(String(e) + " is not an object");
          return e;
        },
        re = A,
        ne = W,
        oe = ie,
        ae = j,
        le = Object.defineProperty;
      te.f = re
        ? le
        : function (e, t, s) {
            if ((oe(e), (t = ae(t, !0)), oe(s), ne))
              try {
                return le(e, t, s);
              } catch (e) {}
            if ("get" in s || "set" in s)
              throw TypeError("Accessors not supported");
            return "value" in s && (e[t] = s.value), e;
          };
      var ce = te,
        de = B,
        he = A
          ? function (e, t, s) {
              return ce.f(e, t, de(1, s));
            }
          : function (e, t, s) {
              return (e[t] = s), e;
            },
        ue = { exports: {} },
        pe = S,
        ge = he,
        me = function (e, t) {
          try {
            ge(pe, e, t);
          } catch (s) {
            pe[e] = t;
          }
          return t;
        },
        fe = me,
        be = S["__core-js_shared__"] || fe("__core-js_shared__", {}),
        ye = be,
        we = Function.toString;
      "function" != typeof ye.inspectSource &&
        (ye.inspectSource = function (e) {
          return we.call(e);
        });
      var ve = ye.inspectSource,
        Ee = ve,
        Se = S.WeakMap,
        Te = "function" == typeof Se && /native code/.test(Ee(Se)),
        xe = { exports: {} },
        Ae = be;
      (xe.exports = function (e, t) {
        return Ae[e] || (Ae[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.15.2",
        mode: "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
      });
      var ke,
        Pe,
        Me,
        Oe = 0,
        Be = Math.random(),
        Le = (0, xe.exports)("keys"),
        Ce = {},
        Fe = Te,
        Ie = H,
        _e = he,
        Re = D,
        He = be,
        Ne = Ce,
        je = S.WeakMap;
      if (Fe || He.state) {
        var qe = He.state || (He.state = new je()),
          ze = qe.get,
          De = qe.has,
          Ke = qe.set;
        (ke = function (e, t) {
          if (De.call(qe, e)) throw new TypeError("Object already initialized");
          return (t.facade = e), Ke.call(qe, e, t), t;
        }),
          (Pe = function (e) {
            return ze.call(qe, e) || {};
          }),
          (Me = function (e) {
            return De.call(qe, e);
          });
      } else {
        var Ve = (function (e) {
          return (
            Le[e] ||
            (Le[e] = (function (e) {
              return "Symbol(" + String(e) + ")_" + (++Oe + Be).toString(36);
            })(e))
          );
        })("state");
        (Ne[Ve] = !0),
          (ke = function (e, t) {
            if (Re(e, Ve)) throw new TypeError("Object already initialized");
            return (t.facade = e), _e(e, Ve, t), t;
          }),
          (Pe = function (e) {
            return Re(e, Ve) ? e[Ve] : {};
          }),
          (Me = function (e) {
            return Re(e, Ve);
          });
      }
      var Ue = {
          set: ke,
          get: Pe,
          has: Me,
          enforce: function (e) {
            return Me(e) ? Pe(e) : ke(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var s;
              if (!Ie(t) || (s = Pe(t)).type !== e)
                throw TypeError("Incompatible receiver, " + e + " required");
              return s;
            };
          },
        },
        We = S,
        Ye = he,
        Xe = D,
        Ge = me,
        Qe = ve,
        $e = Ue.get,
        Ze = Ue.enforce,
        Je = String(String).split("String");
      (ue.exports = function (e, t, s, i) {
        var r,
          n = !!i && !!i.unsafe,
          o = !!i && !!i.enumerable,
          a = !!i && !!i.noTargetGet;
        "function" == typeof s &&
          ("string" != typeof t || Xe(s, "name") || Ye(s, "name", t),
          (r = Ze(s)).source ||
            (r.source = Je.join("string" == typeof t ? t : ""))),
          e !== We
            ? (n ? !a && e[t] && (o = !0) : delete e[t],
              o ? (e[t] = s) : Ye(e, t, s))
            : o
            ? (e[t] = s)
            : Ge(t, s);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && $e(this).source) || Qe(this);
      });
      var et = S,
        tt = S,
        st = function (e) {
          return "function" == typeof e ? e : void 0;
        },
        it = {},
        rt = Math.ceil,
        nt = Math.floor,
        ot = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? nt : rt)(e);
        },
        at = ot,
        lt = Math.min,
        ct = ot,
        dt = Math.max,
        ht = Math.min,
        ut = R,
        pt = function (e) {
          return function (t, s, i) {
            var r,
              n = ut(t),
              o = (function (e) {
                return e > 0 ? lt(at(e), 9007199254740991) : 0;
              })(n.length),
              a = (function (e, t) {
                var s = ct(e);
                return s < 0 ? dt(s + t, 0) : ht(s, t);
              })(i, o);
            if (e && s != s) {
              for (; o > a; ) if ((r = n[a++]) != r) return !0;
            } else
              for (; o > a; a++)
                if ((e || a in n) && n[a] === s) return e || a || 0;
            return !e && -1;
          };
        },
        gt = { includes: pt(!0), indexOf: pt(!1) },
        mt = D,
        ft = R,
        bt = gt.indexOf,
        yt = Ce,
        wt = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ].concat("length", "prototype");
      it.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return (function (e, t) {
            var s,
              i = ft(e),
              r = 0,
              n = [];
            for (s in i) !mt(yt, s) && mt(i, s) && n.push(s);
            for (; t.length > r; )
              mt(i, (s = t[r++])) && (~bt(n, s) || n.push(s));
            return n;
          })(e, wt);
        };
      var vt = {};
      vt.f = Object.getOwnPropertySymbols;
      var Et = it,
        St = vt,
        Tt = ie,
        xt =
          (function (e, t) {
            return arguments.length < 2
              ? st(et[e]) || st(tt[e])
              : (et[e] && et[e][t]) || (tt[e] && tt[e][t]);
          })("Reflect", "ownKeys") ||
          function (e) {
            var t = Et.f(Tt(e)),
              s = St.f;
            return s ? t.concat(s(e)) : t;
          },
        At = D,
        kt = xt,
        Pt = T,
        Mt = te,
        Ot = x,
        Bt = /#|\.prototype\./,
        Lt = function (e, t) {
          var s = Ft[Ct(e)];
          return s == _t || (s != It && ("function" == typeof t ? Ot(t) : !!t));
        },
        Ct = (Lt.normalize = function (e) {
          return String(e).replace(Bt, ".").toLowerCase();
        }),
        Ft = (Lt.data = {}),
        It = (Lt.NATIVE = "N"),
        _t = (Lt.POLYFILL = "P"),
        Rt = Lt,
        Ht = S,
        Nt = T.f,
        jt = he,
        qt = ue.exports,
        zt = me,
        Dt = function (e, t) {
          for (var s = kt(t), i = Mt.f, r = Pt.f, n = 0; n < s.length; n++) {
            var o = s[n];
            At(e, o) || i(e, o, r(t, o));
          }
        },
        Kt = Rt,
        Vt = Math.min,
        Ut = Math.max;
      !(function (e, t) {
        var s,
          i,
          r,
          n,
          o,
          a = e.target,
          l = e.global,
          c = e.stat;
        if ((s = l ? Ht : c ? Ht[a] || zt(a, {}) : (Ht[a] || {}).prototype))
          for (i in t) {
            if (
              ((n = t[i]),
              (r = e.noTargetGet ? (o = Nt(s, i)) && o.value : s[i]),
              !Kt(l ? i : a + (c ? "." : "#") + i, e.forced) && void 0 !== r)
            ) {
              if (typeof n == typeof r) continue;
              Dt(n, r);
            }
            (e.sham || (r && r.sham)) && jt(n, "sham", !0), qt(s, i, n, e);
          }
      })(
        { target: "Math", stat: !0 },
        {
          clamp: function (e, t, s) {
            return Vt(s, Ut(t, e));
          },
        }
      );
      var Wt = new (class {
          constructor() {
            (this.callbacks = []),
              (this.onceCallbacks = []),
              y.settings.ticker.external ||
                ((this.fps = 60),
                (this.fpsInterval = 1e3 / this.fps),
                (this.lastTickTime = null),
                requestAnimationFrame(this.tick.bind(this)));
          }
          add(e, t) {
            let s = !1;
            this.callbacks.forEach((i) => {
              i.cb === e && i.context === t && (s = !0);
            }),
              s || this.callbacks.push({ cb: e, context: t });
          }
          remove(e, t) {
            const s = this;
            this.callbacks.forEach((i, r) => {
              i.cb === e && i.context === t && delete s.callbacks[r];
            });
          }
          nextTick(e, t) {
            this.onceCallbacks.push({ cb: e, context: t });
          }
          tick(e) {
            const t = this,
              s = e - this.lastTickTime;
            s > this.fpsInterval &&
              (this.callbacks.forEach((t) => {
                t.cb.apply(t.context, [e]);
              }),
              this.onceCallbacks.forEach((s, i) => {
                s.cb.apply(s.context, [e]), delete t.onceCallbacks[i];
              }),
              (this.lastTickTime = e - (s % this.fpsInterval))),
              y.settings.ticker.external ||
                requestAnimationFrame(this.tick.bind(this));
          }
        })(),
        Yt = new (class {
          constructor() {
            (this.elements = []),
              (this.elementsToBound = []),
              n.add("pageKill", this.pageKill.bind(this)),
              n.add("pageInit", this.init.bind(this), 20),
              Wt.add(this.tick, this),
              this.bindEvents();
          }
          bindEvents() {
            i.on("mouseMove", this.mouseHandler, this),
              i.on("resize", this.resizeHandler, this),
              i.on("update", this.updateHandler, this);
          }
          pageKill(e) {
            (this.elements = []), (this.elementsToBound = []), e();
          }
          init(e) {
            this.getBoundingThrottle(), e();
          }
          resizeHandler() {
            this.getBoundingThrottle();
          }
          updateHandler() {
            Wt.nextTick(() => {
              this.getBoundingThrottle();
            }, this);
          }
          mouseHandler() {
            const e = this;
            this.elements.forEach((t) => {
              e.setElementPosition(t);
            }),
              (window.mouseLastScrollTop = window.scrollTop);
          }
          getBoundingThrottle() {
            this.elements.forEach((e) => {
              this.elementsToBound.includes(e) || this.elementsToBound.push(e);
            }),
              Wt.nextTick(this.getBounding.bind(this));
          }
          getBounding() {
            this.elementsToBound.forEach((e) => {
              this.setElementBounding(e), this.setElementPosition(e);
            }),
              (this.elementsToBound = []);
          }
          setElementBounding(e) {
            const t = e.getAttribute("style");
            e.setAttribute("style", "");
            const s = e.getBoundingClientRect(),
              i = {
                anchor: { x: s.left, y: s.top + window.unifiedScrollTop },
                width: e.offsetWidth,
                height: e.offsetHeight,
              };
            (e.luge || (e.luge = {})) && (e.luge = r.mergeDeep(e.luge, i)),
              e.setAttribute("style", t);
          }
          setElementPosition(e) {
            if (e.luge && e.luge.anchor) {
              const t = {
                x: window.mouseX - e.luge.anchor.x,
                y: window.mouseY - e.luge.anchor.y + window.unifiedScrollTop,
              };
              (t.progressX = Math.clamp(t.x / e.luge.width, 0, 1)),
                (t.progressY = Math.clamp(t.y / e.luge.height, 0, 1)),
                (e.luge.mouse = r.mergeDeep(e.luge.mouse, t));
            }
          }
          add(e) {
            this.elements.includes(e) ||
              (this.elementsToBound.includes(e) || this.elementsToBound.push(e),
              this.elements.push(e));
          }
          remove(e) {
            this.elements.includes(e) &&
              this.elements.splice(this.elements.indexOf(e), 1),
              this.elementsToBound.includes(e) &&
                this.elementsToBound.splice(this.elementsToBound.indexOf(e), 1);
          }
          tick() {
            const e = this;
            0 != window.scrollTop - window.mouseLastScrollTop &&
              this.elements.forEach((t) => {
                e.setElementPosition(t);
              });
          }
        })(),
        Xt = new (class {
          constructor() {
            (this.elements = []),
              (this.elementsToBound = []),
              (this.elementsToCheck = []),
              this.setMaxScrollTop(),
              n.add("pageKill", this.pageKill.bind(this)),
              n.add("pageInit", this.init.bind(this), 20),
              this.bindEvents();
          }
          bindEvents() {
            i.on("resize", this.resizeHandler, this),
              i.on("scroll", this.scrollHandler, this),
              i.on("update", this.updateHandler, this);
          }
          pageKill(e) {
            (this.elements = []),
              (this.elementsToBound = []),
              (this.elementsToCheck = []),
              e();
          }
          init(e) {
            this.getBoundingThrottle(), this.checkElementsThrottle(), e();
          }
          resizeHandler() {
            this.getBoundingThrottle(), this.checkElementsThrottle();
          }
          scrollHandler() {
            this.checkElementsThrottle();
          }
          updateHandler() {
            Wt.nextTick(() => {
              this.getBoundingThrottle(), this.checkElementsThrottle();
            }, this);
          }
          setMaxScrollTop() {
            window.maxScrollTop =
              Math.max(
                document.body ? document.body.scrollHeight : 0,
                document.body ? document.body.offsetHeight : 0,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
              ) - window.innerHeight;
          }
          getBoundingThrottle() {
            this.setMaxScrollTop(),
              this.elements.forEach((e) => {
                this.elementsToBound.includes(e) ||
                  ((e.scrollProgress = 0), this.elementsToBound.push(e));
              }),
              Wt.nextTick(this.getBounding.bind(this));
          }
          getBounding() {
            this.elementsToBound.forEach((e) => {
              this.setElementBounding(e);
            }),
              (this.elementsToBound = []);
          }
          setElementBounding(e) {
            const t = e.getAttribute("style");
            e.setAttribute("style", "");
            const s = e.getBoundingClientRect();
            (e.scrollStart =
              s.top + window.unifiedScrollTop - window.innerHeight),
              (e.scrollEnd =
                e.scrollStart + e.clientHeight + window.innerHeight),
              (e.scrollEnd = Math.min(e.scrollEnd, window.maxScrollTop)),
              (e.scrollMiddle =
                e.scrollStart + (e.scrollEnd - e.scrollStart) / 2),
              e.setAttribute("style", t);
          }
          checkElementsThrottle() {
            this.elements.forEach((e) => {
              this.elementsToCheck.includes(e) || this.elementsToCheck.push(e);
            }),
              Wt.nextTick(this.checkElements.bind(this));
          }
          checkElements() {
            this.elementsToCheck.forEach((e) => {
              this.checkElement(e);
            }),
              (this.elementsToCheck = []);
          }
          checkElement(e) {
            const t = window.unifiedScrollTop;
            let s = "",
              i = Math.min(
                Math.max(
                  (t - e.scrollStart) / (e.scrollEnd - e.scrollStart),
                  0
                ),
                1
              );
            isNaN(i) && (i = 0),
              (s =
                i <= 0
                  ? "under"
                  : i >= 1 && e.scrollEnd < window.maxScrollTop
                  ? "above"
                  : "in"),
              (e.scrollProgress = i),
              e.viewportPosition !== s
                ? ((e.viewportPosition = s),
                  e.dispatchEvent(new CustomEvent("viewportintersect")),
                  e.dispatchEvent(new CustomEvent("viewport" + s)),
                  "in" !== s && e.dispatchEvent(new CustomEvent("viewportout")),
                  e.dispatchEvent(new CustomEvent("scrollprogress")))
                : i > 0 &&
                  i < 1 &&
                  e.dispatchEvent(new CustomEvent("scrollprogress"));
          }
          add(e) {
            this.elements.includes(e) ||
              ((e.scrollProgress = 0),
              this.elementsToBound.includes(e) ||
                (this.elementsToBound.push(e), this.elementsToCheck.push(e)),
              this.elements.push(e));
          }
          remove(e) {
            this.elements.includes(e) &&
              this.elements.splice(this.elements.indexOf(e), 1),
              this.elementsToBound.includes(e) &&
                this.elementsToBound.splice(this.elementsToBound.indexOf(e), 1),
              this.elementsToCheck.includes(e) &&
                this.elementsToCheck.splice(this.elementsToCheck.indexOf(e), 1);
          }
        })();
      class Gt {
        constructor(e) {
          (this.pluginSlug = e),
            n.add("siteInit", this.beforeInit.bind(this), 5);
        }
        beforeInit(e) {
          (this.isDisabled = this.disabled()),
            this.isDisabled
              ? document.documentElement.classList.add(
                  "lg-" + this.pluginSlug + "-disabled"
                )
              : this.init(),
            e();
        }
        init() {
          this.setAttributes();
        }
        disabled() {
          let e = !1;
          return (
            void 0 !== y.settings[this.pluginSlug] &&
              void 0 !== y.settings[this.pluginSlug].disabled &&
              (e = y.settings[this.pluginSlug].disabled),
            r.isString(e)
              ? (e = window.browser.is(e, !0))
              : r.isArray(e)
              ? (e = e.some((e) =>
                  r.isString(e)
                    ? window.browser.is(e, !0)
                    : !!r.isObject(e) && window.browser.satisfies(e)
                ))
              : r.isObject(e) && (e = window.browser.satisfies(e)),
            e
          );
        }
        setAttributes() {
          this.pluginAttributes = {};
        }
        getAttributes(e) {
          const t = this.pluginAttributes,
            s = {};
          for (const i in t) {
            const n = t[i];
            let o = "lg-" + this.pluginSlug;
            "root" !== i && (o += "-" + i), (o = r.toCamelCase(o));
            const a = e.dataset[o];
            let l, c, d;
            "object" == typeof n ? ((l = n[0]), (d = n[1])) : (l = n),
              (c =
                void 0 === a && void 0 !== d
                  ? l(d)
                  : (void 0 !== a || l !== Boolean) &&
                    (void 0 !== a
                      ? l === Boolean
                        ? "false" !== a
                        : l(a)
                      : void 0)),
              (s[i] = c);
          }
          return (e.luge || (e.luge = {})) && (e.luge[this.pluginSlug] = s), s;
        }
      }
      new (class extends Gt {
        constructor() {
          super("cursor"),
            (this.cursors = []),
            (this.pointers = []),
            (this.trails = []),
            (this.hoverTags = ["a", "button", "input"]);
        }
        init() {
          super.init(),
            n.add("pageInit", this.pageInit.bind(this)),
            Wt.add(this.tick, this),
            this.bindEvents();
        }
        setAttributes() {
          this.pluginAttributes = {
            root: String,
            inertia: [Number, y.settings.cursor.inertia],
            length: [Number, y.settings.cursor.trailLength],
            hide: Boolean,
          };
        }
        bindEvents() {
          document.documentElement.addEventListener(
            "mouseenter",
            this.hoverHandler.bind(this),
            { capture: !0, passive: !0 }
          ),
            document.documentElement.addEventListener(
              "mouseleave",
              this.hoverHandler.bind(this),
              { capture: !0, passive: !0 }
            );
        }
        pageInit(e) {
          const t = this,
            s = document.querySelectorAll("[data-lg-cursor]:not(.lg-cursor)");
          s.length > 0 &&
            s.forEach((e) => {
              const s = this.getAttributes(e);
              s.hide &&
                document.documentElement.classList.add("lg-cursor-hide"),
                e.querySelectorAll("[data-lg-cursor-pointer").forEach((e) => {
                  (e.luge = {
                    cursor: {
                      position: { x: 0, y: 0 },
                      smoothPosition: { x: 0, y: 0 },
                    },
                  }),
                    e.hasAttribute("data-lg-cursor-inertia")
                      ? (e.luge.cursor.inertia = Number(
                          e.getAttribute("data-lg-cursor-inertia")
                        ))
                      : (e.luge.cursor.inertia = s.inertia),
                    e.classList.add("lg-cursor-pointer"),
                    t.pointers.push(e);
                }),
                e.querySelectorAll("[data-lg-cursor-trail").forEach((e) => {
                  const i = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "svg"
                    ),
                    r = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "path"
                    );
                  i.appendChild(r),
                    e.appendChild(i),
                    (e.luge = {
                      cursor: {
                        position: { x: 0, y: 0 },
                        smoothPosition: { x: 0, y: 0 },
                        points: [],
                        path: r,
                      },
                    }),
                    e.hasAttribute("data-lg-cursor-inertia")
                      ? (e.luge.cursor.inertia = Number(
                          e.getAttribute("data-lg-cursor-inertia")
                        ))
                      : (e.luge.cursor.inertia = s.inertia),
                    e.hasAttribute("data-lg-cursor-length")
                      ? (e.luge.cursor.length = Number(
                          e.getAttribute("data-lg-cursor-length")
                        ))
                      : (e.luge.cursor.length = s.length),
                    e.classList.add("lg-cursor-trail"),
                    t.trails.push(e);
                }),
                e.classList.add("lg-cursor"),
                this.cursors.push(e);
            }),
            e();
        }
        hoverHandler(e) {
          const t = e.target,
            s = t.tagName.toLowerCase(),
            i = t.getAttribute("data-lg-hover");
          let r = null;
          (this.hoverTags.includes(s) || null !== i) &&
            (r = "mouseenter" === e.type),
            null !== r &&
              this.cursors.forEach((e) => {
                e.classList.toggle("lg-cursor--hover", r),
                  null !== i &&
                    "" !== i &&
                    e.classList.toggle("lg-cursor--hover--" + i, r);
              });
        }
        tick(e) {
          this.pointers.forEach((e) => {
            const t = e.luge.cursor.position,
              s = e.luge.cursor.smoothPosition;
            (t.x = window.mouseX),
              (t.y = window.mouseY),
              (s.x += (t.x - s.x) * e.luge.cursor.inertia),
              (s.y += (t.y - s.y) * e.luge.cursor.inertia),
              (e.style.transform =
                "translate3d(" + s.x + "px, " + s.y + "px, 0)");
          }),
            this.trails.forEach((e) => {
              const t = e.luge.cursor.position,
                s = e.luge.cursor.smoothPosition;
              if (
                ((t.x = window.mouseX),
                (t.y = window.mouseY),
                -1 !== window.mouseX)
              ) {
                (s.x += (t.x - s.x) * e.luge.cursor.inertia),
                  (s.y += (t.y - s.y) * e.luge.cursor.inertia);
                const i = e.luge.cursor.points,
                  r = { x: s.x, y: s.y };
                i.push(r), i.length > e.luge.cursor.length && i.shift();
                let n = "",
                  o = 0;
                const a = (e, t) => {
                    const s = t.x - e.x,
                      i = t.y - e.y;
                    return {
                      length: Math.sqrt(Math.pow(s, 2) + Math.pow(i, 2)),
                      angle: Math.atan2(i, s),
                    };
                  },
                  l = (e, t, s, i) => {
                    const r = a(t || e, s || e);
                    o += r.length;
                    const n = r.angle + (i ? Math.PI : 0),
                      l = 0.2 * r.length;
                    return [e.x + Math.cos(n) * l, e.y + Math.sin(n) * l];
                  };
                (n = ((e, t) =>
                  `${e.reduce(
                    (e, t, s, i) =>
                      0 === s
                        ? `M ${t.x},${t.y}`
                        : `${e} ${((e, t, s) => {
                            const [i, r] = l(s[t - 1], s[t - 2], e),
                              [n, o] = l(e, s[t - 1], s[t + 1], !0);
                            return `C ${i},${r} ${n},${o} ${e.x},${e.y}`;
                          })(t, s, i)}`,
                    ""
                  )}`)(i)),
                  e.luge.cursor.path.setAttribute("d", n),
                  e.style.setProperty("--length", o);
              }
            });
        }
      })(),
        new (class extends Gt {
          constructor() {
            super("intersection"),
              (this.listeners = {
                onViewportIntersect: this.onViewportIntersect.bind(this),
              });
          }
          init() {
            super.init(),
              (this.elements = []),
              n.add("pageInit", this.pageInit.bind(this)),
              n.add("pageKill", this.pageKill.bind(this)),
              this.bindEvents();
          }
          setAttributes() {
            this.pluginAttributes = { root: String, class: String };
          }
          bindEvents() {
            i.on("update", this.updateHandler, this);
          }
          updateHandler() {
            this.addElements();
          }
          pageInit(e) {
            this.addElements(), e();
          }
          addElements() {
            const e = document.querySelectorAll("[data-lg-intersection]"),
              t = this;
            e.forEach((e) => {
              t.addElement(e);
            });
          }
          addElement(e) {
            this.elements.includes(e) ||
              (this.getAttributes(e),
              w.add(e),
              e.addEventListener(
                "viewportintersect",
                this.listeners.onViewportIntersect
              ),
              this.elements.push(e));
          }
          removeElement(e) {
            this.elements.includes(e) &&
              (w.remove(e),
              e.removeEventListener(
                "viewportintersect",
                this.listeners.onViewportIntersect
              ),
              this.elements.splice(this.elements.indexOf(e), 1));
          }
          pageKill(e) {
            const t = this;
            this.elements.forEach((e) => {
              t.removeElement(e);
            }),
              e();
          }
          onViewportIntersect(e) {
            const t = e.target,
              s = t.luge.viewport.position,
              i =
                !!t.luge.intersection.class &&
                t.luge.intersection.class.split(" ");
            t.classList.remove(
              "is-in",
              "is-out",
              "is-out-top",
              "is-out-bottom"
            ),
              "in" === s
                ? (t.classList.add("is-in"),
                  i && document.documentElement.classList.add(...i))
                : (i && document.documentElement.classList.remove(...i),
                  "above" === s
                    ? t.classList.add("is-out", "is-out-top")
                    : t.classList.add("is-out", "is-out-bottom"));
          }
        })(),
        new (class extends Gt {
          constructor() {
            super("lottie"),
              (this.elements = []),
              (this.doneLoad = null),
              (this.onViewportIntersect = this.onViewportIntersect.bind(this)),
              (this.onScrollProgress = this.onScrollProgress.bind(this));
          }
          init() {
            super.init(),
              "object" == typeof lottie &&
                (n.add("pageInit", this.pageInit.bind(this)),
                n.add("pageLoad", this.pageLoad.bind(this)),
                n.add("pageKill", this.pageKill.bind(this)),
                n.add("reveal", this.reveal.bind(this))),
              this.bindEvents();
          }
          setAttributes() {
            this.pluginAttributes = {
              root: String,
              autoplay: Boolean,
              scroll: Boolean,
              loop: Boolean,
              loopFrame: [Number, 0],
              reverse: Boolean,
              required: Boolean,
              force: Boolean,
              renderer: [String, y.settings.lottie.renderer],
              subframe: [Boolean, y.settings.lottie.subFrame],
            };
          }
          bindEvents() {
            i.on("update", this.updateHandler, this);
          }
          updateHandler() {
            this.addElements(), this.reveal(() => {});
          }
          pageLoad(e) {
            let t = !1;
            this.elements.length > 0 &&
              this.elements.forEach((e) => {
                e.luge.lottie.required && !e.player.isLoaded && (t = !0);
              }),
              t ? (this.doneLoad = e) : e();
          }
          pageInit(e) {
            this.addElements(), e();
          }
          addElements() {
            const e = this;
            (this.elements = document.querySelectorAll("[data-lg-lottie]")),
              (this.toAutoplay = []),
              (this.toLoad = 0),
              (this.requireds = 0),
              this.elements.forEach((t) => {
                t.player ||
                  (Xt.add(t),
                  e.initPlayer(t),
                  t.addEventListener("revealin", e.play),
                  t.addEventListener(
                    "viewportintersect",
                    e.onViewportIntersect
                  ));
              });
          }
          pageKill(e) {
            const t = this;
            let s = [];
            const i = document.querySelector("[data-lg-page] + [data-lg-page]");
            (s = i ? i.querySelectorAll("[data-lg-lottie]") : this.elements),
              s.forEach((e) => {
                e.removeEventListener("revealin", t.play),
                  e.removeEventListener(
                    "viewportintersect",
                    t.onViewportIntersect
                  ),
                  e.hasAttribute("data-lg-lottie-scroll") &&
                    e.removeEventListener("scrollprogress", t.onScrollProgress),
                  e.player && (e.player.destroy(), delete e.player);
              }),
              e();
          }
          reveal(e) {
            this.toAutoplay.forEach((e) => {
              "in" === e.viewportPosition && e.play();
            }),
              e();
          }
          onViewportIntersect(e) {
            const t = e.target;
            t.luge.lottie.force ||
              ("in" === t.viewportPosition
                ? t.player.isPaused &&
                  (t.player.scrollPaused ||
                    t.hasAttribute("data-lg-lottie-autoplay")) &&
                  ((t.player.scrollPaused = !1), t.play())
                : t.player.isPaused ||
                  ((t.player.scrollPaused = !0), t.pause()));
          }
          initPlayer(e) {
            const t = this;
            this.toLoad++;
            const s = this.getAttributes(e);
            (e.player = lottie.loadAnimation({
              container: e,
              renderer: s.renderer,
              loop: s.loop && !s.reverse,
              autoplay: !1,
              path: s.root,
            })),
              void 0 !== s.subframe && e.player.setSubframe(s.subframe),
              e.classList.add("lg-lottie"),
              this.setPlayerStateClasses(e, !1),
              s.autoplay && this.toAutoplay.push(e),
              s.required && this.requireds++,
              s.scroll
                ? e.addEventListener("scrollprogress", this.onScrollProgress)
                : s.loop &&
                  e.player.addEventListener("enterFrame", function () {
                    if (e.player.totalFrames > 0) {
                      const i = Math.round(e.player.currentFrame);
                      1 === e.player.playDirection
                        ? i === e.player.totalFrames - 1 &&
                          (e.player.pause(),
                          s.reverse
                            ? Wt.nextTick(() => {
                                e.player.setDirection(-1),
                                  e.player.goToAndPlay(
                                    e.player.totalFrames,
                                    !0
                                  ),
                                  t.setPlayerStateClasses(e, "backward");
                              }, this)
                            : Wt.nextTick(() => {
                                e.player.goToAndPlay(s.loopFrame, !0);
                              }, this))
                        : i === s.loopFrame &&
                          (e.player.pause(),
                          Wt.nextTick(() => {
                            e.player.setDirection(1),
                              e.player.goToAndPlay(s.loopFrame, !0),
                              t.setPlayerStateClasses(e, "forward");
                          }, this));
                    }
                  }),
              (e.play = this.play.bind(this, e)),
              (e.pause = this.pause.bind(this, e)),
              (e.stop = this.stop.bind(this, e)),
              e.player.addEventListener(
                "DOMLoaded",
                () => {
                  e.classList.add("is-loaded"), t.playerLoaded(s.required);
                },
                { once: !0 }
              );
          }
          setPlayerStateClasses(e, t) {
            e.classList.remove(
              "is-playing",
              "is-playing-forward",
              "is-playing-backward",
              "is-paused"
            ),
              t
                ? (e.classList.add("is-playing"),
                  "backward" === t
                    ? e.classList.add("is-playing-backward")
                    : e.classList.add("is-playing-forward"))
                : e.classList.add("is-paused");
          }
          playerLoaded(e = !1) {
            this.toLoad--,
              e && this.requireds--,
              0 === this.requireds &&
                "function" == typeof this.doneLoad &&
                (this.doneLoad(), (this.doneLoad = null)),
              0 === this.toLoad &&
                Wt.nextTick(() => {
                  i.emit("resize");
                });
          }
          play(e) {
            e &&
              e.player &&
              (e.player.play(), this.setPlayerStateClasses(e, "forward"));
          }
          pause(e) {
            e &&
              e.player &&
              (e.player.pause(), this.setPlayerStateClasses(e, !1));
          }
          stop(e) {
            e &&
              e.player &&
              (e.player.stop(), this.setPlayerStateClasses(e, !1));
          }
          onScrollProgress(e) {
            const t = e.target;
            t.player.goToAndStop(t.player.totalFrames * t.scrollProgress, !0);
          }
        })(),
        new (class extends Gt {
          constructor() {
            super("mouse"),
              (this.elements = []),
              (this.mouse = { x: window.mouseX, y: window.mouseY }),
              (window.mouseSpeed = 0);
          }
          init() {
            super.init(),
              n.add("pageInit", this.pageInit.bind(this)),
              n.add("pageKill", this.pageKill.bind(this)),
              Wt.add(this.tick, this),
              this.getMouseMovement(),
              this.bindEvents();
          }
          setAttributes() {
            this.pluginAttributes = {
              root: String,
              inertia: [String, y.settings.mouse.inertia],
            };
          }
          getAttributes(e) {
            const t = super.getAttributes(e);
            if (t.inertia) {
              const e = t.inertia.match(
                /\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m
              );
              (t.inertia = e
                ? Number(e[1]) + (Number(e[2]) - Number(e[1])) * Math.random()
                : Number(t.inertia)),
                (t.inertia = Math.max(Math.min(t.inertia, 0.99), 0));
            }
            return t;
          }
          bindEvents() {
            i.on("update", this.updateHandler, this);
          }
          updateHandler() {
            this.addElements();
          }
          pageInit(e) {
            this.addElements(), e();
          }
          addElements() {
            const e = document.querySelectorAll("[data-lg-mouse]"),
              t = this;
            e.forEach((e) => {
              t.addElement(e);
            });
          }
          addElement(e) {
            this.elements.includes(e) ||
              (this.getAttributes(e),
              Yt.add(e),
              (e.luge.mouse.smoothX = 0),
              (e.luge.mouse.smoothY = 0),
              (e.luge.mouse.smoothProgressX = 0),
              (e.luge.mouse.smoothProgressY = 0),
              this.elements.push(e));
          }
          removeElement(e) {
            this.elements.includes(e) &&
              this.elements.splice(this.elements.indexOf(e), 1);
          }
          pageKill(e) {
            const t = this;
            this.elements.forEach((e) => {
              t.removeElement(e);
            }),
              e();
          }
          getMouseMovement() {
            const e = this.mouse.x - window.mouseX,
              t = this.mouse.y - window.mouseY,
              s = Math.hypot(e, t);
            if (
              ((window.mouseSpeed += 0.5 * (s - window.mouseSpeed)),
              window.mouseSpeed < 0.001 && (window.mouseSpeed = 0),
              s > 1)
            ) {
              const s = Math.atan2(t, e) * (180 / Math.PI) + 180;
              (window.mouseAngle = s),
                (window.mouseDirection =
                  s >= 45 && s < 135
                    ? "down"
                    : s >= 135 && s < 225
                    ? "left"
                    : s >= 225 && s < 315
                    ? "up"
                    : "right");
            }
            (this.mouse = { x: window.mouseX, y: window.mouseY }),
              setTimeout(this.getMouseMovement.bind(this), 20);
          }
          tick() {
            this.elements.forEach((e) => {
              const t = e.luge.mouse;
              if (t.x)
                if (t.inertia) {
                  (t.smoothX += (t.x - t.smoothX) * t.inertia),
                    (t.smoothY += (t.y - t.smoothY) * t.inertia),
                    (t.smoothProgressX +=
                      (t.progressX - t.smoothProgressX) * t.inertia),
                    (t.smoothProgressY +=
                      (t.progressY - t.smoothProgressY) * t.inertia),
                    e.style.setProperty("--mouse-x", t.smoothX),
                    e.style.setProperty("--mouse-y", t.smoothY),
                    e.style.setProperty(
                      "--mouse-progress-x",
                      t.smoothProgressX
                    ),
                    e.style.setProperty(
                      "--mouse-progress-y",
                      t.smoothProgressY
                    );
                  const s = Math.round(1e3 * (t.x - t.smoothX)) / 1e3,
                    i = Math.round(1e3 * (t.y - t.smoothY)) / 1e3;
                  e.style.setProperty("--abs-diff-x", Math.abs(s)),
                    e.style.setProperty("--diff-x", s),
                    e.style.setProperty("--abs-diff-y", Math.abs(i)),
                    e.style.setProperty("--diff-y", i);
                } else
                  e.style.setProperty("--mouse-x", t.x),
                    e.style.setProperty("--mouse-y", t.y),
                    e.style.setProperty("--mouse-progress-x", t.progressX),
                    e.style.setProperty("--mouse-progress-y", t.progressY);
            });
          }
        })(),
        new (class extends Gt {
          constructor() {
            super("parallax"),
              (this.elements = []),
              (this.onScrollProgress = this.onScrollProgress.bind(this));
          }
          init() {
            super.init(),
              n.add("pageInit", this.pageInit.bind(this)),
              n.add("pageKill", this.pageKill.bind(this)),
              Wt.add(this.tick, this),
              this.bindEvents();
          }
          setAttributes() {
            this.pluginAttributes = {
              root: String,
              disable: String,
              amplitude: [String, 1],
              anchor: String,
              inertia: [String, y.settings.parallax.inertia],
            };
          }
          getAttributes(e) {
            const t = super.getAttributes(e);
            if (t.amplitude) {
              const e = t.amplitude.match(
                /\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m
              );
              t.amplitude = e
                ? Number(e[1]) + (Number(e[2]) - Number(e[1])) * Math.random()
                : Number(t.amplitude);
            }
            return t;
          }
          bindEvents() {
            i.on("update", this.updateHandler, this);
          }
          updateHandler() {
            this.addElements();
          }
          pageInit(e) {
            this.addElements(), e();
          }
          pageKill(e) {
            const t = this;
            this.elements.forEach((e) => {
              t.removeElement(e);
            }),
              e();
          }
          addElements() {
            document.querySelectorAll("[data-lg-parallax]").forEach((e) => {
              const t = this.getAttributes(e).disable;
              let s = !0;
              t &&
                (("desktop" === t && window.browser.is("desktop")) ||
                  ("handheld" === t && !window.browser.is("desktop")) ||
                  ("mobile" === t && window.browser.is("mobile")) ||
                  ("tablet" === t && window.browser.is("tablet"))) &&
                (s = !1),
                s && this.addElement(e);
            });
          }
          addElement(e) {
            this.elements.includes(e) ||
              (Xt.add(e),
              e.addEventListener("scrollprogress", this.onScrollProgress),
              "child" === e.luge.parallax.root &&
                ((e.style.overflow = "hidden"),
                (e.luge.parallax.child = e.firstElementChild)),
              (e.luge.parallax.movement = 0),
              (e.luge.parallax.smoothMovement = 0),
              this.elements.push(e),
              this.moveElement(e));
          }
          removeElement(e) {
            e.removeEventListener("scrollprogress", this.onScrollProgress),
              this.elements.includes(e) &&
                this.elements.splice(this.elements.indexOf(e), 1);
          }
          onScrollProgress(e) {
            this.moveElement(e.target);
          }
          moveElement(e) {
            let t = 1 - 2 * e.scrollProgress;
            "bottom" === e.luge.parallax.anchor
              ? (t += 1)
              : "top" === e.luge.parallax.anchor && (t -= 1),
              "child" === e.luge.parallax.root
                ? (e.luge.parallax.movement = 5 * e.luge.parallax.amplitude * t)
                : (e.luge.parallax.movement =
                    (e.clientHeight * t * e.luge.parallax.amplitude) / 2);
          }
          tick() {
            this.elements.forEach((e) => {
              (e.luge.parallax.smoothMovement +=
                (e.luge.parallax.movement - e.luge.parallax.smoothMovement) *
                e.luge.parallax.inertia),
                "child" === e.luge.parallax.root && e.luge.parallax.child
                  ? (e.luge.parallax.child.style.transform =
                      "translate3d(0, " +
                      e.luge.parallax.smoothMovement +
                      "%, 0) scale(1." +
                      String(Math.abs(e.luge.parallax.amplitude)).replace(
                        ".",
                        ""
                      ) +
                      ")")
                  : (e.style.transform =
                      "translate3d(0, " +
                      e.luge.parallax.smoothMovement +
                      "px, 0)");
            });
          }
        })();
      var Qt = new (class extends Gt {
          constructor() {
            super("preloader"),
              (this.intro = !1),
              (this.playerIn = !1),
              (this.startTime = Date.now()),
              (this.doneLoad = null);
          }
          init() {
            super.init(),
              (this.el = document.querySelector("[data-lg-preloader]")),
              this.el &&
                ((this.attributes = this.getAttributes(this.el)),
                this.el.classList.add(
                  "lg-preloader",
                  "lg-preloader--" + this.attributes.root
                ),
                this.initLottie(),
                n.add("siteIn", this.siteIn.bind(this))),
              n.add("pageLoad", this.pageLoad.bind(this));
          }
          setAttributes() {
            this.pluginAttributes = {
              root: [String, ""],
              duration: [Number, y.settings.preloader.duration],
              in: String,
              reverse: Boolean,
            };
          }
          pageLoad(e) {
            this.attributes &&
            "lottie" === this.attributes.root &&
            "object" == typeof lottie
              ? (this.doneLoad = e)
              : e();
          }
          siteIn(e) {
            const t = (Date.now() - this.startTime) / 1e3,
              s = this.attributes.duration - t;
            if (s <= 0) {
              const t = this.clear.bind(this, e);
              if (this.playerIn)
                this.playerIn.play(),
                  this.playerIn.addEventListener("complete", t, { once: !0 });
              else if ("function" == typeof this.intro)
                this.intro(e, this.remove.bind(this));
              else {
                const e = window
                  .getComputedStyle(this.el)
                  .getPropertyValue("transition-duration");
                "" !== e && "0s" !== e
                  ? (this.el.addEventListener("transitionend", t, { once: !0 }),
                    this.el.classList.add("is-hidden"))
                  : t();
              }
            } else setTimeout(this.siteIn.bind(this, e), 1e3 * s);
          }
          clear(e) {
            this.playerIn && this.playerIn.destroy(), this.remove(), e();
          }
          remove(e) {
            this.el.parentNode.removeChild(this.el), (this.el = null);
          }
          add(e) {
            this.intro = e;
          }
          initLottie() {
            const e = this;
            if (
              "lottie" === this.attributes.root &&
              "object" == typeof lottie
            ) {
              const t = this.attributes.in;
              let s = !1;
              t &&
                ((s = lottie.loadAnimation({
                  container: this.el,
                  renderer: "svg",
                  loop: !1,
                  autoplay: !1,
                  path: t,
                  rendererSettings: { preserveAspectRatio: "none" },
                })),
                this.attributes.reverse && s.setDirection(-1)),
                s.addEventListener(
                  "DOMLoaded",
                  () => {
                    e.attributes.reverse &&
                      s.goToAndStop(s.totalFrames - 1, !0),
                      e.el.setAttribute("style", ""),
                      "function" == typeof e.doneLoad &&
                        (e.doneLoad(), (e.doneLoad = null));
                  },
                  { once: !0 }
                ),
                (this.playerIn = s);
            }
          }
        })(),
        $t = new (class extends Gt {
          constructor() {
            super("reveal"),
              (this.elements = []),
              (this.toRevealIn = []),
              (this.toRevealOut = []),
              (this.reveals = { in: {}, out: {} }),
              (this.canReveal = !1),
              (this.onScrollProgress = this.onScrollProgress.bind(this));
          }
          init() {
            super.init(),
              n.add("pageInit", this.pageInit.bind(this), 11),
              n.add("pageKill", this.pageKill.bind(this)),
              n.add("reveal", this.reveal.bind(this)),
              this.bindEvents();
          }
          setAttributes() {
            super.setAttributes(),
              (this.pluginAttributes = {
                root: String,
                stagger: String,
                multiple: Boolean,
                delay: [Number, 0],
              });
          }
          getAttributes(e) {
            const t = super.getAttributes(e);
            return (
              void 0 !== t.stagger && "" === t.stagger
                ? (t.stagger = y.settings.reveal.stagger)
                : void 0 === t.stagger && (t.stagger = !1),
              t
            );
          }
          bindEvents() {
            i.on("resize", this.resizeHandler, this),
              i.on("scroll", this.scrollHandler, this),
              i.on("update", this.updateHandler, this);
          }
          pageInit(e) {
            this.addElements(), e();
          }
          addElements() {
            const e = document.querySelectorAll(
                "[data-lg-reveal]:not([data-lg-reveal-manual])"
              ),
              t = this;
            e.forEach((e) => {
              t.addElement(e);
            });
          }
          addElement(e) {
            if (!this.elements.includes(e)) {
              const t = this.getAttributes(e);
              if (!t.stagger && null !== e.closest("[data-lg-reveal-stagger]"))
                return;
              Xt.add(e),
                e.addEventListener("scrollprogress", this.onScrollProgress);
              const s = t.root;
              (e.luge.reveal.name = r.toCamelCase(s)),
                (e.luge.reveal.delay = 1e3 * t.delay),
                t.stagger
                  ? Array.from(e.children).forEach((e) => {
                      const t = e.dataset.lgReveal;
                      (e.style.transition = "none"),
                        Wt.nextTick(() => {
                          e.style.transition = "";
                        }),
                        e.classList.add("lg-reveal", "is-out"),
                        (t || s) &&
                          e.classList.add("lg-reveal--" + (null != t ? t : s)),
                        (e.dataset.lgRevealChild = ""),
                        (e.luge || (e.luge = {})) &&
                          (e.luge.reveal = { isRevealed: !1 });
                    })
                  : ((e.style.transition = "none"),
                    Wt.nextTick(() => {
                      e.style.transition = "";
                    }),
                    e.classList.add("lg-reveal", "is-out"),
                    s && e.classList.add("lg-reveal--" + s)),
                this.elements.push(e);
            }
          }
          removeElement(e) {
            e.removeEventListener("scrollprogress", this.onScrollProgress),
              this.elements.includes(e) &&
                this.elements.splice(this.elements.indexOf(e), 1);
          }
          pageKill(e) {
            const t = this;
            (this.canReveal = !1),
              this.elements.forEach((e) => {
                t.removeElement(e);
              }),
              e();
          }
          onScrollProgress(e) {
            const t = e.target,
              s = y.settings.reveal.threshold;
            t.scrollProgress >= s &&
            t.scrollProgress <= 1 - s &&
            !t.luge.reveal.isRevealed
              ? (this.toRevealOut.includes(t) &&
                  this.toRevealOut.splice(this.toRevealOut.indexOf(t), 1),
                this.toRevealIn.includes(t) || this.toRevealIn.push(t))
              : (t.scrollProgress < s || t.scrollProgress > 1 - s) &&
                t.luge.reveal.isRevealed &&
                (this.toRevealIn.includes(t) &&
                  this.toRevealIn.splice(this.toRevealIn.indexOf(t), 1),
                this.toRevealOut.includes(t) || this.toRevealOut.push(t));
          }
          reveal(e) {
            (this.canReveal = !0),
              this.elements.forEach((e) => {
                e.scrollStart < 0 &&
                  (this.toRevealIn.includes(e) || this.toRevealIn.push(e));
              }),
              this.revealElements(),
              e();
          }
          resizeHandler() {
            this.revealElements();
          }
          scrollHandler() {
            this.revealElements();
          }
          updateHandler() {
            this.addElements(), this.revealElements();
          }
          revealElements() {
            const e = this;
            if (this.canReveal) {
              let t = 0;
              this.toRevealIn.forEach((s) => {
                const i = r.toCamelCase(s.luge.reveal.root);
                (t += s.luge.reveal.delay),
                  setTimeout(function () {
                    e.revealCallback(s, i, "in"),
                      s.luge.reveal.stagger
                        ? Array.from(s.children).forEach((t, n) => {
                            const o = r.toCamelCase(t.dataset.lgReveal);
                            setTimeout(() => {
                              (o || i) &&
                                e.revealCallback(t, null != o ? o : i, "in"),
                                e.setRevealClasses(t, "is-in");
                            }, n * s.luge.reveal.stagger * 1e3);
                          })
                        : e.setRevealClasses(s, "is-in");
                  }, t),
                  (t += 1e3 * y.settings.reveal.stagger),
                  s.luge.reveal.multiple || e.removeElement(s);
              }),
                this.toRevealOut.forEach((t) => {
                  const s = r.toCamelCase(t.luge.reveal.root);
                  void 0 !== t.luge.reveal.isRevealed &&
                    e.revealCallback(t, s, "out");
                  let i = "";
                  (i =
                    t.scrollProgress > 0.5
                      ? "is-out is-out-top"
                      : "is-out is-out-bottom"),
                    t.luge.reveal.stagger
                      ? Array.from(t.children).forEach((n, o) => {
                          const a = r.toCamelCase(n.dataset.lgReveal);
                          setTimeout(() => {
                            (a || s) &&
                              e.revealCallback(n, null != a ? a : s, "out"),
                              e.setRevealClasses(n, i);
                          }, o * t.luge.reveal.stagger * 1e3);
                        })
                      : e.setRevealClasses(t, i);
                }),
                (this.toRevealIn = []),
                (this.toRevealOut = []);
            }
          }
          setRevealClasses(e, t) {
            (t = t.split(" ")),
              e.classList.remove(
                "is-in",
                "is-out",
                "is-out-top",
                "is-out-bottom"
              ),
              t.forEach((t) => {
                e.classList.add(t);
              });
          }
          revealCallback(e, t, s) {
            e.dispatchEvent(new CustomEvent("reveal" + s)),
              (e.luge.reveal.isRevealed = "in" === s),
              "function" == typeof this.reveals[s][t]
                ? this.reveals[s][t](e)
                : "function" == typeof e["onreveal" + s] && e["onreveal" + s]();
          }
          add(e, t, s) {
            this.reveals[e] &&
              ((t = r.toCamelCase(t)),
              this.reveals[e][t]
                ? console.log(
                    "Reveal animation named " + t + " already exists."
                  )
                : (this.reveals[e][t] = s));
          }
        })();
      new (class extends Gt {
        constructor() {
          super("scroll"),
            (this.elements = []),
            (this.allowedProperties = [
              "opacity",
              "background-x",
              "background-y",
            ]),
            (this.transformProperties = [
              "x",
              "y",
              "z",
              "translate3d",
              "rotate",
              "rotateX",
              "rotateY",
              "rotateZ",
              "scale",
              "scaleX",
              "scaleY",
              "scaleZ",
            ]),
            (this.presets = {
              "background-x": { "background-x": ["0%", "100%"] },
              "background-y": { "background-y": ["0%", "100%"] },
            }),
            (this.onScrollProgress = this.onScrollProgress.bind(this));
        }
        init() {
          super.init(),
            n.add("pageInit", this.pageInit.bind(this)),
            n.add("pageKill", this.pageKill.bind(this)),
            Wt.add(this.tick, this),
            this.bindEvents();
        }
        setAttributes() {
          this.pluginAttributes = {
            root: String,
            yoyo: Boolean,
            inertia: [String, y.settings.scroll.inertia],
            animate: String,
          };
        }
        getAttributes(e) {
          const t = super.getAttributes(e);
          if (t.inertia) {
            const e = t.inertia.match(
              /\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m
            );
            (t.inertia = e
              ? Number(e[1]) + (Number(e[2]) - Number(e[1])) * Math.random()
              : Number(t.inertia)),
              (t.inertia = Math.max(Math.min(t.inertia, 0.99), 0));
          }
          return t;
        }
        bindEvents() {
          i.on("update", this.updateHandler, this);
        }
        updateHandler() {
          this.addElements();
        }
        pageInit(e) {
          this.addElements(), e();
        }
        addElements() {
          const e = document.querySelectorAll("[data-lg-scroll]"),
            t = this;
          e.forEach((e) => {
            t.addElement(e);
          });
        }
        addElement(e) {
          if (!this.elements.includes(e)) {
            const t = this.getAttributes(e);
            Xt.add(e),
              e.addEventListener("scrollprogress", this.onScrollProgress);
            const s = {};
            (s.smoothProgress =
              void 0 !== e.scrollProgress ? e.scrollProgress : 0),
              (s.yoyo = t.yoyo),
              (s.inertia = t.inertia);
            let i = !1;
            if (
              (void 0 !== t.animate
                ? (i = JSON.parse(t.animate.replace(/'/g, '"')))
                : this.presets[t.root] && (i = this.presets[t.root]),
              i)
            ) {
              const e = {};
              for (const t in i)
                if (
                  this.allowedProperties.includes(t) ||
                  this.transformProperties.includes(t)
                ) {
                  const s = i[t];
                  let r = String(s[0]),
                    n = String(s[1]),
                    o = r.match(/\d+([a-zA-Z%]+)/m);
                  o ? (o = o[1]) : 0 === t.indexOf("rotate") && (o = "deg"),
                    (r = Number(r.replace(o, ""))),
                    (n = Number(n.replace(o, "")));
                  let a = t;
                  "background-x" === t
                    ? (a = "background-position-x")
                    : "background-y" === t && (a = "background-position-y"),
                    (e[a] = { from: r, to: n, current: r, unit: o });
                }
              s.properties = e;
            }
            (e.luge.scroll.animation = s), this.elements.push(e);
          }
        }
        removeElement(e) {
          e.removeEventListener("scrollprogress", this.onScrollProgress),
            this.elements.includes(e) &&
              this.elements.splice(this.elements.indexOf(e), 1);
        }
        pageKill(e) {
          const t = this;
          this.elements.forEach((e) => {
            t.removeElement(e);
          }),
            e();
        }
        onScrollProgress(e) {
          e.target.luge.scroll.animation.atDest = !1;
        }
        tick() {
          for (const e of this.elements) {
            if (e.luge.scroll.animation.atDest) continue;
            let t = e.scrollProgress;
            if (
              (e.luge.scroll.yoyo && (t = 1 - Math.abs(1 - 2 * t)),
              (e.luge.scroll.animation.smoothProgress +=
                (t - e.luge.scroll.animation.smoothProgress) *
                (1 - e.luge.scroll.inertia)),
              e.luge.scroll.animation.properties)
            ) {
              const t = {};
              for (const [s, i] of Object.entries(
                e.luge.scroll.animation.properties
              ))
                (i.current =
                  i.from +
                  (i.to - i.from) * e.luge.scroll.animation.smoothProgress),
                  ["x", "y", "z"].includes(s)
                    ? (t.translate3d || (t.translate3d = {})) &&
                      (t.translate3d[s] = i.current + i.unit)
                    : (t[s] = i.current + i.unit);
              const s = [];
              for (const [e, i] of Object.entries(t))
                if (this.transformProperties.includes(e)) {
                  if ("object" == typeof i)
                    if ("translate3d" === e) {
                      const e = Object.assign({ x: 0, y: 0, z: 0 }, i);
                      i.string = e.x + ", " + e.y + ", " + e.z;
                    } else i.string = Object.values(i).join(", ");
                  s.push(e + "(" + ("object" != typeof i ? i : i.string) + ")");
                }
              const i = {},
                r = [];
              s.length > 0 &&
                ((i.transform = s.join(" ")), r.push("transform"));
              for (const [e, s] of Object.entries(t))
                this.transformProperties.includes(e) || ((i[e] = s), r.push(e));
              for (const [t, s] of Object.entries(i)) e.style.setProperty(t, s);
              e.style.setProperty("will-change", r.join(", "));
            } else {
              const t =
                Math.round(
                  1e3 *
                    (e.scrollProgress - e.luge.scroll.animation.smoothProgress)
                ) / 1e3;
              e.style.setProperty(
                "--progress",
                e.luge.scroll.animation.smoothProgress
              ),
                e.style.setProperty("--abs-diff", Math.abs(t)),
                e.style.setProperty("--diff", t);
            }
            Math.abs(t - e.luge.scroll.animation.smoothProgress) < 1e-4 &&
              (e.luge.scroll.animation.atDest = !0);
          }
        }
      })(),
        new (class extends Gt {
          constructor() {
            super("smooth"),
              (this.containers = null),
              (window.hasSmoothScroll = !1),
              (window.smoothScrollTop = 0),
              (window.smoothScrollProgress = 0);
          }
          init() {
            super.init(),
              n.add("pageInit", this.pageInit.bind(this)),
              n.add("pageKill", this.pageKill.bind(this)),
              this.bindEvents();
          }
          bindEvents() {
            i.on("resize", this.resizeHandler, this),
              i.on("update", this.updateHandler, this);
          }
          pageInit(e) {
            const t = document.querySelectorAll("[data-lg-smooth]");
            t.length > 0
              ? ((window.smoothScrollTop = window.scrollTop),
                (window.unifiedScrollTop = window.smoothScrollTop),
                (window.hasSmoothScroll = !0),
                document.documentElement.classList.add("has-smooth-scroll"),
                (this.containers = Array.from(t).map((e) => ({
                  el: e,
                  bounding: e.getBoundingClientRect(),
                }))),
                Wt.add(this.tick, this))
              : ((window.smoothScrollTop = 0),
                (window.unifiedScrollTop = window.scrollTop),
                (window.hasSmoothScroll = !1),
                document.documentElement.classList.remove("has-smooth-scroll"),
                (this.containers = null),
                Wt.remove(this.tick, this)),
              this.resizeHandler(),
              e();
          }
          pageKill(e) {
            (this.containers = null), e();
          }
          resizeHandler() {
            this.setBounding();
          }
          updateHandler() {
            this.setBounding();
          }
          setBounding() {
            this.containers &&
              (this.containers.forEach(function (e) {
                e.el.removeAttribute("style");
              }),
              this.containers.forEach(function (e) {
                const t = e.el.parentNode;
                (e.bounding = e.el.getBoundingClientRect()),
                  (t.style.height =
                    e.bounding.bottom + window.scrollTop + "px"),
                  (e.el.style.position = "fixed"),
                  (e.el.style.transform =
                    "translate3d(0, -" + window.smoothScrollTop + "px, 0)"),
                  (e.el.style.left = 0),
                  (e.el.style.width = "100%"),
                  (e.el.style.willChange = "transform");
              }));
          }
          tick() {
            if (window.smoothScrollTop !== window.scrollTop) {
              window.smoothScrollTop = Math.max(
                window.smoothScrollTop +
                  (window.scrollTop - window.smoothScrollTop) *
                    y.settings.smooth.inertia,
                0
              );
              const e = window.smoothScrollTop - window.scrollTop;
              e > -0.1 &&
                e < 0.1 &&
                (window.smoothScrollTop = window.scrollTop),
                this.containers &&
                  this.containers.forEach(function (e) {
                    e.el.style.transform =
                      "translate3d(0, -" + window.smoothScrollTop + "px, 0)";
                  }),
                window.hasSmoothScroll &&
                  ((window.unifiedScrollTop = window.smoothScrollTop),
                  (window.smoothScrollProgress =
                    window.smoothScrollTop / window.maxScrollTop),
                  i.emit("scroll"));
            }
          }
        })(),
        new (class extends Gt {
          constructor() {
            super("sticky"), (this.elements = []);
          }
          init() {
            super.init(),
              n.add("pageInit", this.pageInit.bind(this)),
              n.add("pageKill", this.pageKill.bind(this)),
              this.bindEvents();
          }
          setAttributes() {
            this.pluginAttributes = { root: String };
          }
          bindEvents() {
            i.on("resize", this.resizeHandler, this),
              i.on("scroll", this.scrollHandler, this),
              i.on("update", this.updateHandler, this);
          }
          pageInit(e) {
            this.addElements(), this.resizeHandler(), e();
          }
          addElements() {
            const e = document.querySelectorAll("[data-lg-sticky]");
            e.length > 0 &&
              e.forEach((e) => {
                const t = this.getAttributes(e);
                this.elements.push({ el: e, position: t.root });
              });
          }
          pageKill(e) {
            (this.elements = []), e();
          }
          resizeHandler() {
            this.setBounding(), this.checkElements();
          }
          scrollHandler() {
            this.checkElements();
          }
          updateHandler() {
            this.addElements(), this.resizeHandler();
          }
          setBounding() {
            if (this.elements) {
              const e = window.unifiedScrollTop;
              this.elements.forEach(function (t) {
                (t.el.style.top = ""), (t.el.style.transform = "");
                const s = t.el.getBoundingClientRect();
                if ("bottom" === t.position) {
                  let i = Math.ceil(window.innerHeight - (s.bottom + e)) + 1;
                  (i = Math.max(i, 0)),
                    (t.el.style.top = i + "px"),
                    (t.start = s.bottom + i + e - window.innerHeight),
                    (t.maxGap =
                      t.el.parentNode.offsetHeight - t.el.offsetHeight - i);
                } else "top" === t.position ? ((t.start = s.top + e), (t.maxGap = t.el.parentNode.offsetHeight - t.el.offsetHeight)) : ((t.start = s.top + e - (window.innerHeight - t.el.offsetHeight) / 2), (t.maxGap = t.el.parentNode.offsetHeight - t.el.offsetHeight));
              });
            }
          }
          checkElements() {
            if (this.elements) {
              const e = window.unifiedScrollTop;
              this.elements.forEach(function (t) {
                if (e >= t.start) {
                  const s = Math.min(e - t.start, t.maxGap);
                  (t.el.style.transform = "translate3d(0, " + s + "px, 0)"),
                    s === t.maxGap
                      ? t.el.setAttribute(
                          "data-lg-sticky-state",
                          "is-fixed is-fixed--bottom"
                        )
                      : t.el.setAttribute("data-lg-sticky-state", "is-moving");
                } else e < t.start && ((t.el.style.transform = "translate3d(0, 0, 0)"), t.el.setAttribute("data-lg-sticky-state", "is-fixed is-fixed--top"));
              });
            }
          }
        })();
      var Zt =
          ("undefined" != typeof globalThis && globalThis) ||
          ("undefined" != typeof self && self) ||
          (void 0 !== Zt && Zt),
        Jt = "URLSearchParams" in Zt,
        es = "Symbol" in Zt && "iterator" in Symbol,
        ts =
          "FileReader" in Zt &&
          "Blob" in Zt &&
          (function () {
            try {
              return new Blob(), !0;
            } catch (e) {
              return !1;
            }
          })(),
        ss = "FormData" in Zt,
        is = "ArrayBuffer" in Zt;
      if (is)
        var rs = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          ns =
            ArrayBuffer.isView ||
            function (e) {
              return e && rs.indexOf(Object.prototype.toString.call(e)) > -1;
            };
      function os(e) {
        if (
          ("string" != typeof e && (e = String(e)),
          /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
        )
          throw new TypeError(
            'Invalid character in header field name: "' + e + '"'
          );
        return e.toLowerCase();
      }
      function as(e) {
        return "string" != typeof e && (e = String(e)), e;
      }
      function ls(e) {
        var t = {
          next: function () {
            var t = e.shift();
            return { done: void 0 === t, value: t };
          },
        };
        return (
          es &&
            (t[Symbol.iterator] = function () {
              return t;
            }),
          t
        );
      }
      function cs(e) {
        (this.map = {}),
          e instanceof cs
            ? e.forEach(function (e, t) {
                this.append(t, e);
              }, this)
            : Array.isArray(e)
            ? e.forEach(function (e) {
                this.append(e[0], e[1]);
              }, this)
            : e &&
              Object.getOwnPropertyNames(e).forEach(function (t) {
                this.append(t, e[t]);
              }, this);
      }
      function ds(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0;
      }
      function hs(e) {
        return new Promise(function (t, s) {
          (e.onload = function () {
            t(e.result);
          }),
            (e.onerror = function () {
              s(e.error);
            });
        });
      }
      function us(e) {
        var t = new FileReader(),
          s = hs(t);
        return t.readAsArrayBuffer(e), s;
      }
      function ps(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
      }
      function gs() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (e) {
            var t;
            (this.bodyUsed = this.bodyUsed),
              (this._bodyInit = e),
              e
                ? "string" == typeof e
                  ? (this._bodyText = e)
                  : ts && Blob.prototype.isPrototypeOf(e)
                  ? (this._bodyBlob = e)
                  : ss && FormData.prototype.isPrototypeOf(e)
                  ? (this._bodyFormData = e)
                  : Jt && URLSearchParams.prototype.isPrototypeOf(e)
                  ? (this._bodyText = e.toString())
                  : is && ts && (t = e) && DataView.prototype.isPrototypeOf(t)
                  ? ((this._bodyArrayBuffer = ps(e.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : is && (ArrayBuffer.prototype.isPrototypeOf(e) || ns(e))
                  ? (this._bodyArrayBuffer = ps(e))
                  : (this._bodyText = e = Object.prototype.toString.call(e))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                ("string" == typeof e
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : Jt &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          ts &&
            ((this.blob = function () {
              var e = ds(this);
              if (e) return e;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? ds(this) ||
                    (ArrayBuffer.isView(this._bodyArrayBuffer)
                      ? Promise.resolve(
                          this._bodyArrayBuffer.buffer.slice(
                            this._bodyArrayBuffer.byteOffset,
                            this._bodyArrayBuffer.byteOffset +
                              this._bodyArrayBuffer.byteLength
                          )
                        )
                      : Promise.resolve(this._bodyArrayBuffer))
                : this.blob().then(us);
            })),
          (this.text = function () {
            var e,
              t,
              s,
              i = ds(this);
            if (i) return i;
            if (this._bodyBlob)
              return (
                (e = this._bodyBlob),
                (s = hs((t = new FileReader()))),
                t.readAsText(e),
                s
              );
            if (this._bodyArrayBuffer)
              return Promise.resolve(
                (function (e) {
                  for (
                    var t = new Uint8Array(e), s = new Array(t.length), i = 0;
                    i < t.length;
                    i++
                  )
                    s[i] = String.fromCharCode(t[i]);
                  return s.join("");
                })(this._bodyArrayBuffer)
              );
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          ss &&
            (this.formData = function () {
              return this.text().then(bs);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      (cs.prototype.append = function (e, t) {
        (e = os(e)), (t = as(t));
        var s = this.map[e];
        this.map[e] = s ? s + ", " + t : t;
      }),
        (cs.prototype.delete = function (e) {
          delete this.map[os(e)];
        }),
        (cs.prototype.get = function (e) {
          return (e = os(e)), this.has(e) ? this.map[e] : null;
        }),
        (cs.prototype.has = function (e) {
          return this.map.hasOwnProperty(os(e));
        }),
        (cs.prototype.set = function (e, t) {
          this.map[os(e)] = as(t);
        }),
        (cs.prototype.forEach = function (e, t) {
          for (var s in this.map)
            this.map.hasOwnProperty(s) && e.call(t, this.map[s], s, this);
        }),
        (cs.prototype.keys = function () {
          var e = [];
          return (
            this.forEach(function (t, s) {
              e.push(s);
            }),
            ls(e)
          );
        }),
        (cs.prototype.values = function () {
          var e = [];
          return (
            this.forEach(function (t) {
              e.push(t);
            }),
            ls(e)
          );
        }),
        (cs.prototype.entries = function () {
          var e = [];
          return (
            this.forEach(function (t, s) {
              e.push([s, t]);
            }),
            ls(e)
          );
        }),
        es && (cs.prototype[Symbol.iterator] = cs.prototype.entries);
      var ms = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function fs(e, t) {
        if (!(this instanceof fs))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        var s,
          i,
          r = (t = t || {}).body;
        if (e instanceof fs) {
          if (e.bodyUsed) throw new TypeError("Already read");
          (this.url = e.url),
            (this.credentials = e.credentials),
            t.headers || (this.headers = new cs(e.headers)),
            (this.method = e.method),
            (this.mode = e.mode),
            (this.signal = e.signal),
            r || null == e._bodyInit || ((r = e._bodyInit), (e.bodyUsed = !0));
        } else this.url = String(e);
        if (
          ((this.credentials =
            t.credentials || this.credentials || "same-origin"),
          (!t.headers && this.headers) || (this.headers = new cs(t.headers)),
          (this.method =
            ((i = (s = t.method || this.method || "GET").toUpperCase()),
            ms.indexOf(i) > -1 ? i : s)),
          (this.mode = t.mode || this.mode || null),
          (this.signal = t.signal || this.signal),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && r)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        if (
          (this._initBody(r),
          !(
            ("GET" !== this.method && "HEAD" !== this.method) ||
            ("no-store" !== t.cache && "no-cache" !== t.cache)
          ))
        ) {
          var n = /([?&])_=[^&]*/;
          n.test(this.url)
            ? (this.url = this.url.replace(n, "$1_=" + new Date().getTime()))
            : (this.url +=
                (/\?/.test(this.url) ? "&" : "?") +
                "_=" +
                new Date().getTime());
        }
      }
      function bs(e) {
        var t = new FormData();
        return (
          e
            .trim()
            .split("&")
            .forEach(function (e) {
              if (e) {
                var s = e.split("="),
                  i = s.shift().replace(/\+/g, " "),
                  r = s.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(i), decodeURIComponent(r));
              }
            }),
          t
        );
      }
      function ys(e, t) {
        if (!(this instanceof ys))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        t || (t = {}),
          (this.type = "default"),
          (this.status = void 0 === t.status ? 200 : t.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = void 0 === t.statusText ? "" : "" + t.statusText),
          (this.headers = new cs(t.headers)),
          (this.url = t.url || ""),
          this._initBody(e);
      }
      (fs.prototype.clone = function () {
        return new fs(this, { body: this._bodyInit });
      }),
        gs.call(fs.prototype),
        gs.call(ys.prototype),
        (ys.prototype.clone = function () {
          return new ys(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new cs(this.headers),
            url: this.url,
          });
        }),
        (ys.error = function () {
          var e = new ys(null, { status: 0, statusText: "" });
          return (e.type = "error"), e;
        });
      var ws = [301, 302, 303, 307, 308];
      ys.redirect = function (e, t) {
        if (-1 === ws.indexOf(t)) throw new RangeError("Invalid status code");
        return new ys(null, { status: t, headers: { location: e } });
      };
      var vs = Zt.DOMException;
      try {
        new vs();
      } catch (i) {
        ((vs = function (e, t) {
          (this.message = e), (this.name = t);
          var s = Error(e);
          this.stack = s.stack;
        }).prototype = Object.create(Error.prototype)),
          (vs.prototype.constructor = vs);
      }
      function Es(e, t) {
        return new Promise(function (s, i) {
          var r = new fs(e, t);
          if (r.signal && r.signal.aborted)
            return i(new vs("Aborted", "AbortError"));
          var n = new XMLHttpRequest();
          function o() {
            n.abort();
          }
          (n.onload = function () {
            var e,
              t,
              i = {
                status: n.status,
                statusText: n.statusText,
                headers:
                  ((e = n.getAllResponseHeaders() || ""),
                  (t = new cs()),
                  e
                    .replace(/\r?\n[\t ]+/g, " ")
                    .split("\r")
                    .map(function (e) {
                      return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e;
                    })
                    .forEach(function (e) {
                      var s = e.split(":"),
                        i = s.shift().trim();
                      if (i) {
                        var r = s.join(":").trim();
                        t.append(i, r);
                      }
                    }),
                  t),
              };
            i.url =
              "responseURL" in n
                ? n.responseURL
                : i.headers.get("X-Request-URL");
            var r = "response" in n ? n.response : n.responseText;
            setTimeout(function () {
              s(new ys(r, i));
            }, 0);
          }),
            (n.onerror = function () {
              setTimeout(function () {
                i(new TypeError("Network request failed"));
              }, 0);
            }),
            (n.ontimeout = function () {
              setTimeout(function () {
                i(new TypeError("Network request failed"));
              }, 0);
            }),
            (n.onabort = function () {
              setTimeout(function () {
                i(new vs("Aborted", "AbortError"));
              }, 0);
            }),
            n.open(
              r.method,
              (function (e) {
                try {
                  return "" === e && Zt.location.href ? Zt.location.href : e;
                } catch (t) {
                  return e;
                }
              })(r.url),
              !0
            ),
            "include" === r.credentials
              ? (n.withCredentials = !0)
              : "omit" === r.credentials && (n.withCredentials = !1),
            "responseType" in n &&
              (ts
                ? (n.responseType = "blob")
                : is &&
                  r.headers.get("Content-Type") &&
                  -1 !==
                    r.headers
                      .get("Content-Type")
                      .indexOf("application/octet-stream") &&
                  (n.responseType = "arraybuffer")),
            !t || "object" != typeof t.headers || t.headers instanceof cs
              ? r.headers.forEach(function (e, t) {
                  n.setRequestHeader(t, e);
                })
              : Object.getOwnPropertyNames(t.headers).forEach(function (e) {
                  n.setRequestHeader(e, as(t.headers[e]));
                }),
            r.signal &&
              (r.signal.addEventListener("abort", o),
              (n.onreadystatechange = function () {
                4 === n.readyState && r.signal.removeEventListener("abort", o);
              })),
            n.send(void 0 === r._bodyInit ? null : r._bodyInit);
        });
      }
      (Es.polyfill = !0),
        Zt.fetch ||
          ((Zt.fetch = Es),
          (Zt.Headers = cs),
          (Zt.Request = fs),
          (Zt.Response = ys));
      var Ss = new (class extends Gt {
        constructor() {
          super("transition"),
            (this.url = window.location.href),
            (this.pathname = window.location.pathname),
            (this.pageFetched = null),
            (this.currentPage = null),
            (this.reload = y.settings.transition.reload),
            (this.prevScrollTop = 0),
            (this.newScrollTop = 0),
            (this.transitions = { in: {}, out: {} }),
            (this.listeners = { linkHandler: this.linkHandler.bind(this) });
        }
        init() {
          (this.currentPage = document.querySelector("[data-lg-page]")),
            this.currentPage &&
              (this.reload =
                !!this.currentPage.hasAttribute("data-lg-reload") ||
                y.settings.transition.reload),
            this.initLoader(),
            this.reload ||
              window.addEventListener(
                "popstate",
                this.historyStateChanged.bind(this)
              ),
            n.add("pageInit", this.pageInit.bind(this)),
            n.add("pageFetch", this.pageFetch.bind(this)),
            n.add("pageOut", this.pageOut.bind(this)),
            n.add("pageIn", this.pageIn.bind(this), 10, "transition"),
            n.add("pageCreate", this.pageCreate.bind(this)),
            n.add("pageKill", this.pageKill.bind(this), 999, "transition");
        }
        bindLinksEvent() {
          document.querySelector("[data-lg-page]") &&
            document.querySelectorAll("a").forEach((e) => {
              e.addEventListener("click", this.listeners.linkHandler);
            });
        }
        unbindLinksEvent() {
          document.querySelectorAll("a").forEach((e) => {
            e.removeEventListener("click", this.listeners.linkHandler);
          });
        }
        linkHandler(e) {
          const t = e.currentTarget,
            s = t.getAttribute("href");
          if (
            s &&
            0 !== s.indexOf("#") &&
            0 !== s.indexOf("tel") &&
            0 !== s.indexOf("mailto") &&
            !t.closest("#wpadminbar") &&
            "disabled" !== t.getAttribute("data-lg-transition") &&
            "_blank" !== t.getAttribute("target") &&
            (0 === s.indexOf(window.location.origin) ||
              0 === s.indexOf("/") ||
              -1 === s.indexOf("/"))
          ) {
            if ((e.preventDefault(), window.location.href === s)) return;
            this.navigateTo(s), history.pushState(null, null, this.url);
          }
        }
        navigateTo(e) {
          if (((this.url = e), this.reload)) {
            const t = document.createElement("link");
            (t.rel = "prefetch"),
              (t.href = e),
              document.head.appendChild(t),
              n.add("siteReload", (t) => {
                window.location = e;
              }),
              n.cycle("reload");
          } else n.cycle("transition");
        }
        pageInit(e) {
          this.bindLinksEvent(), e();
        }
        initLoader() {
          const e = document.querySelector("[data-lg-loader]");
          if (
            (e &&
              ((e.style.transition = "none"),
              e.classList.add(
                "lg-loader",
                "lg-loader--" + e.getAttribute("data-lg-loader")
              ),
              Wt.nextTick(() => {
                e.style.transition = "";
              })),
            e &&
              "lottie" === e.getAttribute("data-lg-loader") &&
              "object" == typeof lottie)
          ) {
            const t = e.getAttribute("data-lg-loader-out");
            let s = !1,
              i = e.getAttribute("data-lg-loader-in"),
              r = !1;
            t &&
              (s = lottie.loadAnimation({
                container: e,
                renderer: "svg",
                loop: !1,
                autoplay: !1,
                path: t,
                rendererSettings: { preserveAspectRatio: "none" },
              })),
              "reverse" === i && (i = t),
              i &&
                ((r = lottie.loadAnimation({
                  container: e,
                  renderer: "svg",
                  loop: !1,
                  autoplay: !1,
                  path: i,
                  rendererSettings: { preserveAspectRatio: "none" },
                })),
                i === t && r.setDirection(-1)),
              (e.playerOut = s),
              (e.playerIn = r);
          }
        }
        pageFetch(e) {
          const t = this;
          this.url &&
            fetch(this.url, { credentials: "include" })
              .then(function (e) {
                return e.text();
              })
              .then(function (s) {
                (t.pageFetched = s), e();
              });
        }
        pageCreate(e) {
          const t = new DOMParser().parseFromString(
              this.pageFetched,
              "text/html"
            ),
            s = t.querySelector("[data-lg-page]");
          if (s) {
            {
              this.currentPage.insertAdjacentElement("beforebegin", s),
                (s.style.opacity = 0),
                (this.currentPage.style.opacity = 0),
                (this.currentPage.style.position = "absolute"),
                (this.currentPage.style.top = 0),
                (this.currentPage.style.left = "-999em"),
                (this.currentPage.style.width = "100%"),
                (document.querySelector("body").className =
                  t.querySelector("body").className),
                document
                  .querySelectorAll(
                    'meta[name="description"], meta[name="keywords"], meta[property="og:image"]'
                  )
                  .forEach((e) => {
                    e.parentNode.removeChild(e);
                  }),
                t
                  .querySelectorAll(
                    'meta[name="description"], meta[name="keywords"], meta[property="og:image"]'
                  )
                  .forEach((e) => {
                    document
                      .querySelector("head title")
                      .insertAdjacentElement("afterend", e);
                  });
              const e = document.querySelector("head title"),
                i = t.querySelector("head title");
              e && i && (e.innerText = i.innerText);
            }
            window.scroll({
              top: this.newScrollTop,
              left: 0,
              behavior: "instant",
            }),
              (window.scrollTop = 0),
              (window.smoothScrollTop = 0),
              (window.unifiedScrollTop = 0),
              (this.prevScrollTop = 0),
              (this.newScrollTop = 0),
              i.emit("pageTransition", t),
              e();
          } else window.location = this.url;
        }
        pageKill(e) {
          const t = this.currentPage;
          t.parentNode.removeChild(t),
            (this.currentPage = document.querySelector("[data-lg-page]")),
            (this.reload =
              !!this.currentPage.hasAttribute("data-lg-reload") ||
              y.settings.transition.reload),
            e();
        }
        pageOut(e) {
          const t = this,
            s = document.querySelector("[data-lg-page]");
          if (s) {
            const i = r.toCamelCase(s.getAttribute("data-lg-page"));
            let n = !1;
            if (
              ("function" == typeof this.transitions.out[i]
                ? (n = this.transitions.out[i])
                : "function" == typeof s.onpageout
                ? (n = s.onpageout)
                : "function" == typeof this.transitions.out.default &&
                  (n = this.transitions.out.default),
              n)
            )
              n(s, e);
            else {
              const s = document.querySelector("[data-lg-loader]");
              if (s) {
                if (s.playerOut)
                  s.playerOut.stop(),
                    (s.playerOut.renderer.svgElement.style.opacity = 1),
                    s.playerOut.play(),
                    s.playerOut.addEventListener(
                      "complete",
                      () => {
                        t.reload ||
                          (s.playerOut.renderer.svgElement.style.opacity = ""),
                          e();
                      },
                      { once: !0 }
                    );
                else {
                  const t = window
                    .getComputedStyle(
                      document.querySelector("[data-lg-loader]")
                    )
                    .getPropertyValue("transition-duration");
                  "" !== t && "0s" !== t
                    ? s.addEventListener("transitionend", e, { once: !0 })
                    : e();
                }
                s.classList.add("is-visible");
              } else e();
            }
          } else e();
          this.unbindLinksEvent.bind(this);
        }
        pageIn(e) {
          const t = document.querySelector("[data-lg-page]");
          if (t) {
            const s = r.toCamelCase(t.getAttribute("data-lg-page"));
            let i = !1;
            if (
              ((t.style.opacity = ""),
              "function" == typeof this.transitions.in[s]
                ? (i = this.transitions.in[s])
                : "function" == typeof t.onpagein
                ? (i = t.onpagein)
                : "function" == typeof this.transitions.in.default &&
                  (i = this.transitions.in.default),
              i)
            )
              i(t, e);
            else {
              const t = document.querySelector("[data-lg-loader]");
              if (t && t.classList.contains("is-visible"))
                if (t.playerIn)
                  t.playerIn.stop(),
                    (t.playerIn.renderer.svgElement.style.opacity = 1),
                    "reverse" === t.getAttribute("data-lg-loader-in")
                      ? t.playerIn.goToAndPlay(t.playerIn.totalFrames, !0)
                      : t.playerIn.play(),
                    t.playerIn.addEventListener(
                      "complete",
                      () => {
                        (t.playerIn.renderer.svgElement.style.opacity = ""),
                          t.classList.remove("is-visible"),
                          e();
                      },
                      { once: !0 }
                    );
                else {
                  const s = window
                    .getComputedStyle(
                      document.querySelector("[data-lg-loader]")
                    )
                    .getPropertyValue("transition-duration");
                  "" !== s && "0s" !== s
                    ? t.addEventListener("transitionend", e, { once: !0 })
                    : e(),
                    t.classList.remove("is-visible");
                }
              else e();
            }
          } else e();
        }
        historyStateChanged() {
          new URL(this.url).pathname !== window.location.pathname &&
            ((this.prevScrollTop = window.scrollY),
            Wt.nextTick(() => {
              (this.newScrollTop = window.scrollY),
                window.scroll({
                  top: this.prevScrollTop,
                  left: 0,
                  behavior: "instant",
                });
            }),
            this.navigateTo(window.location.href));
        }
        add(e, t = "default", s) {
          this.transitions[e] &&
            ((t = r.toCamelCase(t)),
            this.transitions[e][t]
              ? console.log(
                  "Transition animation for " + t + " page already exists."
                )
              : (this.transitions[e][t] = s));
        }
      })();
      const Ts = {
        cursor: {},
        emitter: {
          emit: i.emit.bind(i),
          off: i.off.bind(i),
          on: i.on.bind(i),
          once: i.once.bind(i),
        },
        viewportobserver: { add: w.add.bind(w), remove: w.remove.bind(w) },
        lifecycle: {
          add: n.add.bind(n),
          refresh: n.cycle.bind(n, "refresh"),
          remove: n.remove.bind(n),
          debug: n.enableDebug.bind(n),
        },
        mouseobserver: { add: Yt.add.bind(Yt), remove: Yt.remove.bind(Yt) },
        preloader: { add: Qt.add.bind(Qt) },
        reveal: { add: $t.add.bind($t) },
        scrollobserver: { add: Xt.add.bind(Xt), remove: Xt.remove.bind(Xt) },
        ticker: {
          add: Wt.add.bind(Wt),
          nextTick: Wt.nextTick.bind(Wt),
          remove: Wt.remove.bind(Wt),
          tick: Wt.tick.bind(Wt),
        },
        transition: { add: Ss.add.bind(Ss) },
        settings: y.setSettings.bind(y),
      };
      (window.luge = Ts),
        "loading" === document.readyState
          ? document.addEventListener(
              "DOMContentLoaded",
              n.cycle.bind(n, "load"),
              { once: !0 }
            )
          : Wt.nextTick(() => {
              n.cycle("load");
            }, null);
      const xs =
        "background-color: #00FFE5; color: black; font: 400 1em monospace; padding: 0.5em 0; ";
      console.log(
        "%c powered by %cluge%c / 0.6.4-beta %c > https://luge.cool ",
        xs,
        "background-color: #00FFE5; color: black; font: 400 1em monospace; padding: 0.5em 0; font-weight: bold; ",
        xs,
        "color: black; font: 400 1em monospace; padding: 0.5em 0; "
      );
    },
  },
]);
