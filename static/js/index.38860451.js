(function () {
  var n = {
      4429: function (n, e, o) {
        var t = o(1108);
        t.__esModule && (t = t.default),
          'string' === typeof t && (t = [[n.id, t, '']]),
          t.locals && (n.exports = t.locals);
        var i = o(56).Z;
        i('39c4a1d4', t, !0, { sourceMap: !1, shadowMode: !1 });
      },
      1108: function (n, e, o) {
        'use strict';
        o.r(e);
        var t = o(3481),
          i = o.n(t),
          r = o(2400),
          u = o.n(r),
          a = u()(i());
        a.push([
          n.id,
          '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */',
          '',
        ]),
          (e['default'] = a);
      },
      2378: function (n, e, o) {
        'use strict';
        var t = o(686),
          i =
            (o(752),
            o(3964),
            o(429),
            o(6409),
            o(278),
            o(228),
            o(6265),
            o(4043),
            o(7267),
            o(657)),
          r = {
            keys: function () {
              return [];
            },
          };
        (o.g['________'] = !0),
          delete o.g['________'],
          (o.g.__uniConfig = {
            globalStyle: {
              navigationBarTextStyle: 'black',
              navigationBarTitleText: 'uni-app',
              navigationBarBackgroundColor: '#F8F8F8',
              backgroundColor: '#F8F8F8',
            },
          }),
          (o.g.__uniConfig.compilerVersion = '3.95'),
          (o.g.__uniConfig.darkmode = !1),
          (o.g.__uniConfig.themeConfig = {}),
          (o.g.__uniConfig.uniPlatform = 'h5'),
          (o.g.__uniConfig.appId = ''),
          (o.g.__uniConfig.appName = ''),
          (o.g.__uniConfig.appVersion = '1.0.0'),
          (o.g.__uniConfig.appVersionCode = '100'),
          (o.g.__uniConfig.router = { mode: 'hash', base: '/' }),
          (o.g.__uniConfig.publicPath = '/'),
          (o.g.__uniConfig['async'] = {
            loading: 'AsyncLoading',
            error: 'AsyncError',
            delay: 200,
            timeout: 6e4,
          }),
          (o.g.__uniConfig.debug = !1),
          (o.g.__uniConfig.networkTimeout = {
            request: 6e4,
            connectSocket: 6e4,
            uploadFile: 6e4,
            downloadFile: 6e4,
          }),
          (o.g.__uniConfig.sdkConfigs = {}),
          (o.g.__uniConfig.qqMapKey = void 0),
          (o.g.__uniConfig.googleMapKey = void 0),
          (o.g.__uniConfig.aMapKey = void 0),
          (o.g.__uniConfig.aMapSecurityJsCode = void 0),
          (o.g.__uniConfig.aMapServiceHost = void 0),
          (o.g.__uniConfig.locale = ''),
          (o.g.__uniConfig.fallbackLocale = void 0),
          (o.g.__uniConfig.locales = r.keys().reduce(function (n, e) {
            var o = e.replace(/\.\/(uni-app.)?(.*).json/, '$2'),
              t = r(e);
            return Object.assign(n[o] || (n[o] = {}), t.common || t), n;
          }, {})),
          (o.g.__uniConfig.nvue = { 'flex-direction': 'column' }),
          (o.g.__uniConfig.__webpack_chunk_load__ = o.e),
          i['default'].component('pages-index-index', function (n) {
            var e = {
              component: o
                .e(58)
                .then(
                  function () {
                    return n(o(997));
                  }.bind(null, o)
                )
                ['catch'](o.oe),
              delay: __uniConfig['async'].delay,
              timeout: __uniConfig['async'].timeout,
            };
            return (
              __uniConfig['async']['loading'] &&
                (e.loading = {
                  name: 'SystemAsyncLoading',
                  render: function (n) {
                    return n(__uniConfig['async']['loading']);
                  },
                }),
              __uniConfig['async']['error'] &&
                (e.error = {
                  name: 'SystemAsyncError',
                  render: function (n) {
                    return n(__uniConfig['async']['error']);
                  },
                }),
              e
            );
          }),
          (o.g.__uniRoutes = [
            {
              path: '/',
              alias: '/pages/index/index',
              component: {
                render: function (n) {
                  return n(
                    'Page',
                    {
                      props: Object.assign(
                        { isQuit: !0, isEntry: !0 },
                        __uniConfig.globalStyle,
                        { navigationBarTitleText: 'uni-app' }
                      ),
                    },
                    [n('pages-index-index', { slot: 'page' })]
                  );
                },
              },
              meta: {
                id: 1,
                name: 'pages-index-index',
                isNVue: !1,
                maxWidth: 0,
                pagePath: 'pages/index/index',
                isQuit: !0,
                isEntry: !0,
                windowTop: 44,
              },
            },
            {
              path: '/choose-location',
              component: {
                render: function (n) {
                  return n('Page', { props: { navigationStyle: 'custom' } }, [
                    n('system-choose-location', { slot: 'page' }),
                  ]);
                },
              },
              meta: { name: 'choose-location', pagePath: '/choose-location' },
            },
            {
              path: '/open-location',
              component: {
                render: function (n) {
                  return n('Page', { props: { navigationStyle: 'custom' } }, [
                    n('system-open-location', { slot: 'page' }),
                  ]);
                },
              },
              meta: { name: 'open-location', pagePath: '/open-location' },
            },
          ]),
          o.g.UniApp && new o.g.UniApp();
        o(9526);
        var u,
          a,
          c = function () {
            var n = this,
              e = n.$createElement,
              o = n._self._c || e;
            return o('App', {
              attrs: { keepAliveInclude: n.keepAliveInclude },
            });
          },
          l = [],
          f = {
            onLaunch: function () {
              console.log('App Launch');
            },
            onShow: function () {
              console.log('App Show');
            },
            onHide: function () {
              console.log('App Hide');
            },
          },
          d = f,
          s = (o(4429), o(9453)),
          g = (0, s.Z)(d, c, l, !1, null, null, null, !1, u, a),
          p = g.exports;
        o(2789);
        (i['default'].config.productionTip = !1), (p.mpType = 'app');
        var _ = new i['default']((0, t.Z)({}, p));
        _.$mount();
      },
      2789: function (n, e, o) {
        var t = o(6587)['default'];
        o(228),
          uni.addInterceptor({
            returnValue: function (n) {
              return !n ||
                ('object' !== t(n) && 'function' !== typeof n) ||
                'function' !== typeof n.then
                ? n
                : new Promise(function (e, o) {
                    n.then(function (n) {
                      return n[0] ? o(n[0]) : e(n[1]);
                    });
                  });
            },
          });
      },
    },
    e = {};
  function o(t) {
    var i = e[t];
    if (void 0 !== i) return i.exports;
    var r = (e[t] = { id: t, loaded: !1, exports: {} });
    return n[t].call(r.exports, r, r.exports, o), (r.loaded = !0), r.exports;
  }
  (o.m = n),
    (function () {
      o.amdD = function () {
        throw new Error('define cannot be used indirect');
      };
    })(),
    (function () {
      var n = [];
      o.O = function (e, t, i, r) {
        if (!t) {
          var u = 1 / 0;
          for (f = 0; f < n.length; f++) {
            (t = n[f][0]), (i = n[f][1]), (r = n[f][2]);
            for (var a = !0, c = 0; c < t.length; c++)
              (!1 & r || u >= r) &&
              Object.keys(o.O).every(function (n) {
                return o.O[n](t[c]);
              })
                ? t.splice(c--, 1)
                : ((a = !1), r < u && (u = r));
            if (a) {
              n.splice(f--, 1);
              var l = i();
              void 0 !== l && (e = l);
            }
          }
          return e;
        }
        r = r || 0;
        for (var f = n.length; f > 0 && n[f - 1][2] > r; f--) n[f] = n[f - 1];
        n[f] = [t, i, r];
      };
    })(),
    (function () {
      o.n = function (n) {
        var e =
          n && n.__esModule
            ? function () {
                return n['default'];
              }
            : function () {
                return n;
              };
        return o.d(e, { a: e }), e;
      };
    })(),
    (function () {
      o.d = function (n, e) {
        for (var t in e)
          o.o(e, t) &&
            !o.o(n, t) &&
            Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
      };
    })(),
    (function () {
      (o.f = {}),
        (o.e = function (n) {
          return Promise.all(
            Object.keys(o.f).reduce(function (e, t) {
              return o.f[t](n, e), e;
            }, [])
          );
        });
    })(),
    (function () {
      o.u = function (n) {
        return 'https://louiscklaw.github.io/uniapp-playlist/static/js/pages-index-index.3f868b54.js';
      };
    })(),
    (function () {
      o.g = (function () {
        if ('object' === typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (n) {
          if ('object' === typeof window) return window;
        }
      })();
    })(),
    (function () {
      o.o = function (n, e) {
        return Object.prototype.hasOwnProperty.call(n, e);
      };
    })(),
    (function () {
      var n = {},
        e = 'hello_default-tryout:';
      o.l = function (t, i, r, u) {
        if (n[t]) n[t].push(i);
        else {
          var a, c;
          if (void 0 !== r)
            for (
              var l = document.getElementsByTagName('script'), f = 0;
              f < l.length;
              f++
            ) {
              var d = l[f];
              if (
                d.getAttribute('src') == t ||
                d.getAttribute('data-webpack') == e + r
              ) {
                a = d;
                break;
              }
            }
          a ||
            ((c = !0),
            (a = document.createElement('script')),
            (a.charset = 'utf-8'),
            (a.timeout = 120),
            o.nc && a.setAttribute('nonce', o.nc),
            a.setAttribute('data-webpack', e + r),
            (a.src = t)),
            (n[t] = [i]);
          var s = function (e, o) {
              (a.onerror = a.onload = null), clearTimeout(g);
              var i = n[t];
              if (
                (delete n[t],
                a.parentNode && a.parentNode.removeChild(a),
                i &&
                  i.forEach(function (n) {
                    return n(o);
                  }),
                e)
              )
                return e(o);
            },
            g = setTimeout(
              s.bind(null, void 0, { type: 'timeout', target: a }),
              12e4
            );
          (a.onerror = s.bind(null, a.onerror)),
            (a.onload = s.bind(null, a.onload)),
            c && document.head.appendChild(a);
        }
      };
    })(),
    (function () {
      o.r = function (n) {
        'undefined' !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(n, '__esModule', { value: !0 });
      };
    })(),
    (function () {
      o.nmd = function (n) {
        return (n.paths = []), n.children || (n.children = []), n;
      };
    })(),
    (function () {
      o.p = '/';
    })(),
    (function () {
      var n = { 826: 0 };
      (o.f.j = function (e, t) {
        var i = o.o(n, e) ? n[e] : void 0;
        if (0 !== i)
          if (i) t.push(i[2]);
          else {
            var r = new Promise(function (o, t) {
              i = n[e] = [o, t];
            });
            t.push((i[2] = r));
            var u = o.p + o.u(e),
              a = new Error(),
              c = function (t) {
                if (o.o(n, e) && ((i = n[e]), 0 !== i && (n[e] = void 0), i)) {
                  var r = t && ('load' === t.type ? 'missing' : t.type),
                    u = t && t.target && t.target.src;
                  (a.message =
                    'Loading chunk ' + e + ' failed.\n(' + r + ': ' + u + ')'),
                    (a.name = 'ChunkLoadError'),
                    (a.type = r),
                    (a.request = u),
                    i[1](a);
                }
              };
            o.l(u, c, 'chunk-' + e, e);
          }
      }),
        (o.O.j = function (e) {
          return 0 === n[e];
        });
      var e = function (e, t) {
          var i,
            r,
            u = t[0],
            a = t[1],
            c = t[2],
            l = 0;
          if (
            u.some(function (e) {
              return 0 !== n[e];
            })
          ) {
            for (i in a) o.o(a, i) && (o.m[i] = a[i]);
            if (c) var f = c(o);
          }
          for (e && e(t); l < u.length; l++)
            (r = u[l]), o.o(n, r) && n[r] && n[r][0](), (n[r] = 0);
          return o.O(f);
        },
        t = (self['webpackChunkhello_default_tryout'] =
          self['webpackChunkhello_default_tryout'] || []);
      t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
    })();
  var t = o.O(void 0, [998], function () {
    return o(2378);
  });
  t = o.O(t);
})();
