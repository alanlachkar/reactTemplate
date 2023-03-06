'use strict';
(self.webpackChunkcrqt_skeleton = self.webpackChunkcrqt_skeleton || []).push([
  [179],
  {
    575: (e, n, t) => {
      var l = t(294),
        a = t(745),
        r = t(655),
        c = t(250),
        o = t(184),
        i = t.n(o);
      const u = 'HomePage_fixedNavigation_vkgzJ',
        s = 'HomePage_fixedMain_HDLSD',
        m = 'HomePage_mainContainer_aumiY',
        d = 'HomePage_subMain1_gLhbg',
        f = 'HomePage_subMain2_R9HvI';
      function h() {
        var e = '/home/runner/work/reactTemplate/reactTemplate/src/utils/enums/enums.ts',
          n = new Function('return this')(),
          t = '__coverage__',
          l = n[t] || (n[t] = {});
        (l[e] && 'fcdbc5d3b71cc554f32f97b31ca5f35ae6ad34de' === l[e].hash) ||
          (l[e] = {
            path: '/home/runner/work/reactTemplate/reactTemplate/src/utils/enums/enums.ts',
            statementMap: {},
            fnMap: {},
            branchMap: {},
            s: {},
            f: {},
            b: {},
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'fcdbc5d3b71cc554f32f97b31ca5f35ae6ad34de'
          });
        var a = l[e];
        return (
          (h = function () {
            return a;
          }),
          a
        );
      }
      var p;
      h(),
        (function (e) {
          (e.TOP_NAV = 'topNav'),
            (e.TOP_FIXED_NAV = 'topFixedNav'),
            (e.SIDE_NAV = 'sideFixedNav');
        })(p || (p = {}));
      var b = t(893);
      function v() {
        var e =
            '/home/runner/work/reactTemplate/reactTemplate/src/pages/HomePage/HomePage.tsx',
          n = new Function('return this')(),
          t = '__coverage__',
          l = n[t] || (n[t] = {});
        (l[e] && '5e653a3119ba59a2759d5033fde2cbc8f24a0895' === l[e].hash) ||
          (l[e] = {
            path: '/home/runner/work/reactTemplate/reactTemplate/src/pages/HomePage/HomePage.tsx',
            statementMap: {
              0: { start: { line: 9, column: 17 }, end: { line: 41, column: 1 } },
              1: { start: { line: 10, column: 32 }, end: { line: 10, column: 61 } },
              2: { start: { line: 11, column: 2 }, end: { line: 40, column: 4 } }
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: { start: { line: 9, column: 17 }, end: { line: 9, column: 18 } },
                loc: { start: { line: 9, column: 23 }, end: { line: 41, column: 1 } },
                line: 9
              }
            },
            branchMap: {
              0: {
                loc: { start: { line: 16, column: 10 }, end: { line: 18, column: 23 } },
                type: 'cond-expr',
                locations: [
                  { start: { line: 17, column: 14 }, end: { line: 17, column: 36 } },
                  { start: { line: 18, column: 14 }, end: { line: 18, column: 23 } }
                ],
                line: 16
              },
              1: {
                loc: { start: { line: 31, column: 10 }, end: { line: 33, column: 34 } },
                type: 'cond-expr',
                locations: [
                  { start: { line: 32, column: 14 }, end: { line: 32, column: 64 } },
                  { start: { line: 33, column: 14 }, end: { line: 33, column: 34 } }
                ],
                line: 31
              }
            },
            s: { 0: 0, 1: 0, 2: 0 },
            f: { 0: 0 },
            b: { 0: [0, 0], 1: [0, 0] },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '5e653a3119ba59a2759d5033fde2cbc8f24a0895'
          });
        var a = l[e];
        return (
          (v = function () {
            return a;
          }),
          a
        );
      }
      function g(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null != t) {
              var l,
                a,
                r,
                c,
                o = [],
                i = !0,
                u = !1;
              try {
                if (((r = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  i = !1;
                } else
                  for (
                    ;
                    !(i = (l = r.call(t)).done) && (o.push(l.value), o.length !== n);
                    i = !0
                  );
              } catch (e) {
                (u = !0), (a = e);
              } finally {
                try {
                  if (!i && null != t.return && ((c = t.return()), Object(c) !== c))
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return o;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ('string' == typeof e) return _(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === t && e.constructor && (t = e.constructor.name);
            if ('Map' === t || 'Set' === t) return Array.from(e);
            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
              return _(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, l = new Array(n); t < n; t++) l[t] = e[t];
        return l;
      }
      v(), v().s[0]++;
      const y = function () {
          v().f[0]++;
          var e = g((v().s[1]++, (0, c.bx)()), 2),
            n = e[0];
          e[1];
          return (
            v().s[2]++,
            (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)('header', {
                  className:
                    n === p.TOP_FIXED_NAV ? (v().b[0][0]++, u) : void v().b[0][1]++,
                  style: {
                    gridArea: 'nav',
                    backgroundColor: 'var(--success-color)',
                    color: 'var(--primary-text)'
                  },
                  children: 'Navigation'
                }),
                (0, b.jsxs)('main', {
                  className:
                    n === p.TOP_FIXED_NAV
                      ? (v().b[1][0]++, i()(s, m))
                      : (v().b[1][1]++, m),
                  children: [
                    (0, b.jsx)('div', { className: d, children: 'Main 1' }),
                    (0, b.jsx)('div', { className: f, children: 'Main 2' })
                  ]
                })
              ]
            })
          );
        },
        x = { themeButton: 'ThemeChanger_themeButton_j5pWg' };
      function T() {
        var e =
            '/home/runner/work/reactTemplate/reactTemplate/src/components/ThemeChanger/ThemeChanger.tsx',
          n = new Function('return this')(),
          t = '__coverage__',
          l = n[t] || (n[t] = {});
        (l[e] && '46947d2d15f38b84d7093fe46ef16ef268a8e29d' === l[e].hash) ||
          (l[e] = {
            path: '/home/runner/work/reactTemplate/reactTemplate/src/components/ThemeChanger/ThemeChanger.tsx',
            statementMap: {
              0: { start: { line: 7, column: 28 }, end: { line: 7, column: 70 } },
              1: { start: { line: 8, column: 24 }, end: { line: 14, column: 3 } },
              2: { start: { line: 9, column: 4 }, end: { line: 13, column: 7 } },
              3: { start: { line: 10, column: 24 }, end: { line: 10, column: 46 } },
              4: { start: { line: 11, column: 6 }, end: { line: 11, column: 58 } },
              5: { start: { line: 12, column: 6 }, end: { line: 12, column: 23 } },
              6: { start: { line: 15, column: 2 }, end: { line: 23, column: 4 } },
              7: { start: { line: 30, column: 33 }, end: { line: 40, column: 1 } },
              8: { start: { line: 32, column: 20 }, end: { line: 32, column: 60 } },
              9: { start: { line: 33, column: 2 }, end: { line: 38, column: 3 } },
              10: { start: { line: 34, column: 4 }, end: { line: 34, column: 30 } },
              11: { start: { line: 36, column: 4 }, end: { line: 36, column: 42 } },
              12: { start: { line: 37, column: 4 }, end: { line: 37, column: 28 } },
              13: { start: { line: 39, column: 2 }, end: { line: 39, column: 23 } },
              14: { start: { line: 47, column: 21 }, end: { line: 61, column: 1 } },
              15: { start: { line: 49, column: 2 }, end: { line: 59, column: 3 } },
              16: { start: { line: 51, column: 6 }, end: { line: 51, column: 25 } },
              17: { start: { line: 52, column: 6 }, end: { line: 52, column: 12 } },
              18: { start: { line: 54, column: 6 }, end: { line: 54, column: 26 } },
              19: { start: { line: 55, column: 6 }, end: { line: 55, column: 12 } },
              20: { start: { line: 57, column: 6 }, end: { line: 57, column: 26 } },
              21: { start: { line: 58, column: 6 }, end: { line: 58, column: 12 } },
              22: { start: { line: 60, column: 2 }, end: { line: 60, column: 19 } }
            },
            fnMap: {
              0: {
                name: 'ThemeChanger',
                decl: { start: { line: 6, column: 9 }, end: { line: 6, column: 21 } },
                loc: { start: { line: 6, column: 24 }, end: { line: 24, column: 1 } },
                line: 6
              },
              1: {
                name: '(anonymous_1)',
                decl: { start: { line: 8, column: 24 }, end: { line: 8, column: 25 } },
                loc: { start: { line: 8, column: 36 }, end: { line: 14, column: 3 } },
                line: 8
              },
              2: {
                name: '(anonymous_2)',
                decl: { start: { line: 9, column: 13 }, end: { line: 9, column: 14 } },
                loc: { start: { line: 9, column: 27 }, end: { line: 13, column: 5 } },
                line: 9
              },
              3: {
                name: '(anonymous_3)',
                decl: { start: { line: 30, column: 33 }, end: { line: 30, column: 34 } },
                loc: { start: { line: 30, column: 47 }, end: { line: 40, column: 1 } },
                line: 30
              },
              4: {
                name: '(anonymous_4)',
                decl: { start: { line: 47, column: 21 }, end: { line: 47, column: 22 } },
                loc: { start: { line: 47, column: 48 }, end: { line: 61, column: 1 } },
                line: 47
              }
            },
            branchMap: {
              0: {
                loc: { start: { line: 33, column: 2 }, end: { line: 38, column: 3 } },
                type: 'if',
                locations: [
                  { start: { line: 33, column: 2 }, end: { line: 38, column: 3 } },
                  { start: { line: 35, column: 9 }, end: { line: 38, column: 3 } }
                ],
                line: 33
              },
              1: {
                loc: { start: { line: 49, column: 2 }, end: { line: 59, column: 3 } },
                type: 'switch',
                locations: [
                  { start: { line: 50, column: 4 }, end: { line: 52, column: 12 } },
                  { start: { line: 53, column: 4 }, end: { line: 55, column: 12 } },
                  { start: { line: 56, column: 4 }, end: { line: 58, column: 12 } }
                ],
                line: 49
              }
            },
            s: {
              0: 0,
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
              8: 0,
              9: 0,
              10: 0,
              11: 0,
              12: 0,
              13: 0,
              14: 0,
              15: 0,
              16: 0,
              17: 0,
              18: 0,
              19: 0,
              20: 0,
              21: 0,
              22: 0
            },
            f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
            b: { 0: [0, 0], 1: [0, 0, 0] },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '46947d2d15f38b84d7093fe46ef16ef268a8e29d'
          });
        var a = l[e];
        return (
          (T = function () {
            return a;
          }),
          a
        );
      }
      function j(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null != t) {
              var l,
                a,
                r,
                c,
                o = [],
                i = !0,
                u = !1;
              try {
                if (((r = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  i = !1;
                } else
                  for (
                    ;
                    !(i = (l = r.call(t)).done) && (o.push(l.value), o.length !== n);
                    i = !0
                  );
              } catch (e) {
                (u = !0), (a = e);
              } finally {
                try {
                  if (!i && null != t.return && ((c = t.return()), Object(c) !== c))
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return o;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ('string' == typeof e) return S(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === t && e.constructor && (t = e.constructor.name);
            if ('Map' === t || 'Set' === t) return Array.from(e);
            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
              return S(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function S(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, l = new Array(n); t < n; t++) l[t] = e[t];
        return l;
      }
      T(), T().s[7]++;
      var w = function () {
        var e;
        T().f[3]++;
        var n = (T().s[8]++, document.body.getAttribute('data-theme'));
        return (
          T().s[9]++,
          n
            ? (T().b[0][0]++, T().s[10]++, (e = n))
            : (T().b[0][1]++,
              T().s[11]++,
              (document.body.dataset.theme = 'light'),
              T().s[12]++,
              (e = 'light')),
          T().s[13]++,
          e
        );
      };
      T().s[14]++;
      var M = function (e) {
        var n;
        switch ((T().f[4]++, T().s[15]++, e)) {
          case 'light':
            T().b[1][0]++, T().s[16]++, (n = 'dark'), T().s[17]++;
            break;
          case 'dark':
            T().b[1][1]++, T().s[18]++, (n = 'light'), T().s[19]++;
            break;
          default:
            T().b[1][2]++, T().s[20]++, (n = 'light'), T().s[21]++;
        }
        return T().s[22]++, n;
      };
      const N = function () {
          T().f[0]++;
          var e = j((T().s[0]++, (0, l.useState)(w)), 2),
            n = e[0],
            t = e[1];
          return (
            T().s[1]++,
            T().s[6]++,
            (0, b.jsxs)('button', {
              'data-testid': 'theme-button',
              className: x.themeButton,
              onClick: function () {
                T().f[1]++,
                  T().s[2]++,
                  t(function (e) {
                    T().f[2]++;
                    var n = (T().s[3]++, M(e));
                    return (
                      T().s[4]++,
                      document.body.setAttribute('data-theme', n),
                      T().s[5]++,
                      n
                    );
                  });
              },
              children: ['Change to ', M(n), ' mode']
            })
          );
        },
        A = 'SelectTemplate_navigationStyles_HJXBB';
      function k() {
        var e =
            '/home/runner/work/reactTemplate/reactTemplate/src/components/SelectTemplate/SelectTemplate.tsx',
          n = new Function('return this')(),
          t = '__coverage__',
          l = n[t] || (n[t] = {});
        (l[e] && 'ed2a05225b517fe6a9372dbd9a0721a1595caee0' === l[e].hash) ||
          (l[e] = {
            path: '/home/runner/work/reactTemplate/reactTemplate/src/components/SelectTemplate/SelectTemplate.tsx',
            statementMap: {
              0: { start: { line: 13, column: 35 }, end: { line: 17, column: 1 } },
              1: { start: { line: 25, column: 23 }, end: { line: 50, column: 1 } },
              2: { start: { line: 26, column: 63 }, end: { line: 26, column: 68 } },
              3: { start: { line: 28, column: 2 }, end: { line: 49, column: 4 } },
              4: { start: { line: 36, column: 10 }, end: { line: 36, column: 73 } },
              5: { start: { line: 40, column: 10 }, end: { line: 44, column: 12 } }
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: { start: { line: 25, column: 23 }, end: { line: 25, column: 24 } },
                loc: { start: { line: 25, column: 60 }, end: { line: 50, column: 1 } },
                line: 25
              },
              1: {
                name: '(anonymous_1)',
                decl: { start: { line: 35, column: 18 }, end: { line: 35, column: 19 } },
                loc: { start: { line: 36, column: 10 }, end: { line: 36, column: 73 } },
                line: 36
              },
              2: {
                name: '(anonymous_2)',
                decl: { start: { line: 39, column: 21 }, end: { line: 39, column: 22 } },
                loc: { start: { line: 39, column: 50 }, end: { line: 45, column: 9 } },
                line: 39
              }
            },
            branchMap: {
              0: {
                loc: { start: { line: 36, column: 10 }, end: { line: 36, column: 73 } },
                type: 'cond-expr',
                locations: [
                  { start: { line: 36, column: 27 }, end: { line: 36, column: 61 } },
                  { start: { line: 36, column: 64 }, end: { line: 36, column: 73 } }
                ],
                line: 36
              }
            },
            s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
            f: { 0: 0, 1: 0, 2: 0 },
            b: { 0: [0, 0] },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'ed2a05225b517fe6a9372dbd9a0721a1595caee0'
          });
        var a = l[e];
        return (
          (k = function () {
            return a;
          }),
          a
        );
      }
      k();
      var P =
        (k().s[0]++,
        [
          { value: p.TOP_NAV, text: 'Top navigation' },
          { value: p.TOP_FIXED_NAV, text: 'Top fixed navigation' },
          { value: p.SIDE_NAV, text: 'Side Fixed navigation' }
        ]);
      k().s[1]++;
      const O = function (e) {
          k().f[0]++;
          var n = (k().s[2]++, e),
            t = n.selectedValue,
            l = n.onChangeSelect;
          n.isFixedNavigation;
          return (
            k().s[3]++,
            (0, b.jsxs)('div', {
              className: A,
              children: [
                (0, b.jsx)('label', {
                  htmlFor: 'template-select',
                  children: 'Choose a template:'
                }),
                (0, b.jsx)('select', {
                  name: 'templates',
                  id: 'template-select',
                  value: t,
                  onChange: function (e) {
                    return (
                      k().f[1]++,
                      k().s[4]++,
                      l ? (k().b[0][0]++, l(e.target.value)) : void k().b[0][1]++
                    );
                  },
                  children: P.map(function (e) {
                    return (
                      k().f[2]++,
                      k().s[5]++,
                      (0, b.jsx)('option', { value: e.value, children: e.text }, e.value)
                    );
                  })
                }),
                (0, b.jsx)('p', { 'data-testid': 'template-select-value', children: t })
              ]
            })
          );
        },
        F = 'MainPage_topBarNavigation_MK9zf',
        E = 'MainPage_topFixedBarNavigation_Efk9n',
        I = 'MainPage_sideBarNavigation_jLoH_',
        C = 'MainPage_textForDemo_UgOAb',
        D = 'MainPage_headerForDemo_Y6yDG';
      function V() {
        var e =
            '/home/runner/work/reactTemplate/reactTemplate/src/pages/MainPage/MainPage.tsx',
          n = new Function('return this')(),
          t = '__coverage__',
          l = n[t] || (n[t] = {});
        (l[e] && '6fb6b30c7d9396baac71d80e5aab8ab7ffac9f2f' === l[e].hash) ||
          (l[e] = {
            path: '/home/runner/work/reactTemplate/reactTemplate/src/pages/MainPage/MainPage.tsx',
            statementMap: {
              0: { start: { line: 12, column: 17 }, end: { line: 32, column: 1 } },
              1: { start: { line: 13, column: 52 }, end: { line: 15, column: 3 } },
              2: { start: { line: 16, column: 34 }, end: { line: 18, column: 3 } },
              3: { start: { line: 17, column: 4 }, end: { line: 17, column: 35 } },
              4: { start: { line: 20, column: 2 }, end: { line: 31, column: 4 } },
              5: { start: { line: 39, column: 26 }, end: { line: 63, column: 1 } },
              6: { start: { line: 40, column: 57 }, end: { line: 40, column: 62 } },
              7: { start: { line: 41, column: 2 }, end: { line: 62, column: 4 } },
              8: { start: { line: 55, column: 12 }, end: { line: 55, column: 58 } },
              9: { start: { line: 70, column: 25 }, end: { line: 87, column: 1 } },
              10: { start: { line: 72, column: 2 }, end: { line: 85, column: 3 } },
              11: { start: { line: 74, column: 6 }, end: { line: 74, column: 46 } },
              12: { start: { line: 75, column: 6 }, end: { line: 75, column: 12 } },
              13: { start: { line: 77, column: 6 }, end: { line: 77, column: 51 } },
              14: { start: { line: 78, column: 6 }, end: { line: 78, column: 12 } },
              15: { start: { line: 80, column: 6 }, end: { line: 80, column: 47 } },
              16: { start: { line: 81, column: 6 }, end: { line: 81, column: 12 } },
              17: { start: { line: 83, column: 6 }, end: { line: 83, column: 32 } },
              18: { start: { line: 84, column: 6 }, end: { line: 84, column: 12 } },
              19: { start: { line: 86, column: 2 }, end: { line: 86, column: 23 } }
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: { start: { line: 12, column: 17 }, end: { line: 12, column: 18 } },
                loc: { start: { line: 12, column: 36 }, end: { line: 32, column: 1 } },
                line: 12
              },
              1: {
                name: '(anonymous_1)',
                decl: { start: { line: 16, column: 34 }, end: { line: 16, column: 35 } },
                loc: { start: { line: 16, column: 65 }, end: { line: 18, column: 3 } },
                line: 16
              },
              2: {
                name: '(anonymous_2)',
                decl: { start: { line: 39, column: 26 }, end: { line: 39, column: 27 } },
                loc: { start: { line: 39, column: 79 }, end: { line: 63, column: 1 } },
                line: 39
              },
              3: {
                name: '(anonymous_3)',
                decl: { start: { line: 54, column: 26 }, end: { line: 54, column: 27 } },
                loc: { start: { line: 55, column: 12 }, end: { line: 55, column: 58 } },
                line: 55
              },
              4: {
                name: '(anonymous_4)',
                decl: { start: { line: 70, column: 25 }, end: { line: 70, column: 26 } },
                loc: { start: { line: 70, column: 59 }, end: { line: 87, column: 1 } },
                line: 70
              }
            },
            branchMap: {
              0: {
                loc: { start: { line: 72, column: 2 }, end: { line: 85, column: 3 } },
                type: 'switch',
                locations: [
                  { start: { line: 73, column: 4 }, end: { line: 75, column: 12 } },
                  { start: { line: 76, column: 4 }, end: { line: 78, column: 12 } },
                  { start: { line: 79, column: 4 }, end: { line: 81, column: 12 } },
                  { start: { line: 82, column: 4 }, end: { line: 84, column: 12 } }
                ],
                line: 72
              }
            },
            s: {
              0: 0,
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
              8: 0,
              9: 0,
              10: 0,
              11: 0,
              12: 0,
              13: 0,
              14: 0,
              15: 0,
              16: 0,
              17: 0,
              18: 0,
              19: 0
            },
            f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
            b: { 0: [0, 0, 0, 0] },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '6fb6b30c7d9396baac71d80e5aab8ab7ffac9f2f'
          });
        var a = l[e];
        return (
          (V = function () {
            return a;
          }),
          a
        );
      }
      function H(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null != t) {
              var l,
                a,
                r,
                c,
                o = [],
                i = !0,
                u = !1;
              try {
                if (((r = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  i = !1;
                } else
                  for (
                    ;
                    !(i = (l = r.call(t)).done) && (o.push(l.value), o.length !== n);
                    i = !0
                  );
              } catch (e) {
                (u = !0), (a = e);
              } finally {
                try {
                  if (!i && null != t.return && ((c = t.return()), Object(c) !== c))
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return o;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ('string' == typeof e) return B(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === t && e.constructor && (t = e.constructor.name);
            if ('Map' === t || 'Set' === t) return Array.from(e);
            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
              return B(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function B(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, l = new Array(n); t < n; t++) l[t] = e[t];
        return l;
      }
      V(), V().s[0]++;
      V().s[5]++;
      var X = function (e) {
        V().f[2]++;
        var n = (V().s[6]++, e),
          t = n.selectNavTemplate,
          l = n.handleSelectNavTemplate;
        return (
          V().s[7]++,
          (0, b.jsx)(b.Fragment, {
            children: (0, b.jsxs)('header', {
              className: D,
              children: [
                (0, b.jsxs)('div', {
                  children: [
                    (0, b.jsx)('p', {
                      className: C,
                      children: 'This line is here only for demonstration purpose'
                    }),
                    (0, b.jsx)('p', {
                      className: C,
                      children:
                        "Don't hesitate to scroll down to check the layout's behavior"
                    })
                  ]
                }),
                (0, b.jsx)(O, {
                  isFixedNavigation: t === p.TOP_FIXED_NAV,
                  onChangeSelect: function (e) {
                    return V().f[3]++, V().s[8]++, l(e);
                  },
                  selectedValue: t
                }),
                (0, b.jsx)(N, {})
              ]
            })
          })
        );
      };
      V().s[9]++;
      var U = function (e) {
        var n;
        switch ((V().f[4]++, V().s[10]++, e)) {
          case p.TOP_NAV:
            V().b[0][0]++, V().s[11]++, (n = F), V().s[12]++;
            break;
          case p.TOP_FIXED_NAV:
            V().b[0][1]++, V().s[13]++, (n = E), V().s[14]++;
            break;
          case p.SIDE_NAV:
            V().b[0][2]++, V().s[15]++, (n = I), V().s[16]++;
            break;
          default:
            V().b[0][3]++, V().s[17]++, (n = void 0), V().s[18]++;
        }
        return V().s[19]++, n;
      };
      const L = function () {
        V().f[0]++;
        var e = H((V().s[1]++, (0, l.useState)(p.TOP_NAV)), 2),
          n = e[0],
          t = e[1];
        V().s[2]++;
        var a = function (e) {
          V().f[1]++, V().s[3]++, t(e);
        };
        return (
          V().s[4]++,
          (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(X, { selectNavTemplate: n, handleSelectNavTemplate: a }),
              (0, b.jsx)('div', {
                className: U(n),
                children: (0, b.jsx)(c.j3, { context: [n, a] })
              })
            ]
          })
        );
      };
      function G() {
        var e =
            '/home/runner/work/reactTemplate/reactTemplate/src/pages/ErrorPage/ErrorPage.tsx',
          n = new Function('return this')(),
          t = '__coverage__',
          l = n[t] || (n[t] = {});
        (l[e] && 'c7ffe39daa5c052b581c39d73f841f4751b2086c' === l[e].hash) ||
          (l[e] = {
            path: '/home/runner/work/reactTemplate/reactTemplate/src/pages/ErrorPage/ErrorPage.tsx',
            statementMap: {
              0: { start: { line: 8, column: 18 }, end: { line: 22, column: 1 } },
              1: { start: { line: 9, column: 16 }, end: { line: 9, column: 31 } },
              2: { start: { line: 10, column: 2 }, end: { line: 21, column: 4 } }
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: { start: { line: 8, column: 18 }, end: { line: 8, column: 19 } },
                loc: { start: { line: 8, column: 24 }, end: { line: 22, column: 1 } },
                line: 8
              }
            },
            branchMap: {
              0: {
                loc: { start: { line: 15, column: 12 }, end: { line: 15, column: 47 } },
                type: 'binary-expr',
                locations: [
                  { start: { line: 15, column: 12 }, end: { line: 15, column: 29 } },
                  { start: { line: 15, column: 33 }, end: { line: 15, column: 47 } }
                ],
                line: 15
              }
            },
            s: { 0: 0, 1: 0, 2: 0 },
            f: { 0: 0 },
            b: { 0: [0, 0] },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'c7ffe39daa5c052b581c39d73f841f4751b2086c'
          });
        var a = l[e];
        return (
          (G = function () {
            return a;
          }),
          a
        );
      }
      G(), G().s[0]++;
      const $ = function () {
        G().f[0]++;
        var e = (G().s[1]++, (0, c.lk)());
        return (
          G().s[2]++,
          (0, b.jsxs)('div', {
            id: 'error-page',
            children: [
              (0, b.jsx)('h1', { children: 'Oops!' }),
              (0, b.jsx)('p', { children: 'Sorry, an unexpected error has occurred.' }),
              (0, b.jsx)('p', {
                children: (0, b.jsx)('i', {
                  children:
                    (G().b[0][0]++,
                    (null == e ? void 0 : e.statusText) ||
                      (G().b[0][1]++, null == e ? void 0 : e.message))
                })
              }),
              (0, b.jsx)('p', {
                children: (0, b.jsx)(r.rU, { to: '/', children: 'Go to the home page' })
              })
            ]
          })
        );
      };
      function q() {
        var e = '/home/runner/work/reactTemplate/reactTemplate/src/index.tsx',
          n = new Function('return this')(),
          t = '__coverage__',
          l = n[t] || (n[t] = {});
        (l[e] && '00f3787b4bacee7df18f02fd76afd8378150e1fd' === l[e].hash) ||
          (l[e] = {
            path: '/home/runner/work/reactTemplate/reactTemplate/src/index.tsx',
            statementMap: {
              0: { start: { line: 15, column: 15 }, end: { line: 22, column: 2 } },
              1: { start: { line: 24, column: 13 }, end: { line: 24, column: 70 } },
              2: { start: { line: 26, column: 0 }, end: { line: 30, column: 2 } }
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0 },
            f: {},
            b: {},
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '00f3787b4bacee7df18f02fd76afd8378150e1fd'
          });
        var a = l[e];
        return (
          (q = function () {
            return a;
          }),
          a
        );
      }
      q();
      var z =
          (q().s[0]++,
          (0, r.cP)([
            {
              path: '/',
              element: (0, b.jsx)(L, {}),
              errorElement: (0, b.jsx)($, {}),
              children: [{ index: !0, element: (0, b.jsx)(y, {}) }]
            }
          ])),
        J = (q().s[1]++, (0, a.s)(document.getElementById('app')));
      q().s[2]++,
        J.render(
          (0, b.jsx)(l.StrictMode, {
            children: (0, b.jsx)(c.pG, {
              router: z,
              fallbackElement: (0, b.jsx)('p', { children: 'Loading...' })
            })
          })
        );
    }
  },
  (e) => {
    e.O(0, [216], () => {
      return (n = 575), e((e.s = n));
      var n;
    });
    e.O();
  }
]);
