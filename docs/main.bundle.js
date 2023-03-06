'use strict';
(self.webpackChunkcrqt_skeleton = self.webpackChunkcrqt_skeleton || []).push([
  [179],
  {
    575: (n, e, l) => {
      var t = l(294),
        a = l(745),
        c = l(655),
        r = l(250),
        o = l(184),
        i = l.n(o);
      const s = 'HomePage_fixedNavigation_vkgzJ',
        u = 'HomePage_fixedMain_HDLSD',
        m = 'HomePage_mainContainer_aumiY',
        d = 'HomePage_subMain1_gLhbg',
        f = 'HomePage_subMain2_R9HvI';
      function h() {
        var n =
            'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\utils\\enums\\enums.ts',
          e = new Function('return this')(),
          l = '__coverage__',
          t = e[l] || (e[l] = {});
        (t[n] && '136e7ebf61d466d8d40d692911d2640f17c620ab' === t[n].hash) ||
          (t[n] = {
            path: 'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\utils\\enums\\enums.ts',
            statementMap: {},
            fnMap: {},
            branchMap: {},
            s: {},
            f: {},
            b: {},
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '136e7ebf61d466d8d40d692911d2640f17c620ab'
          });
        var a = t[n];
        return (
          (h = function () {
            return a;
          }),
          a
        );
      }
      var p;
      h(),
        (function (n) {
          (n.TOP_NAV = 'topNav'),
            (n.TOP_FIXED_NAV = 'topFixedNav'),
            (n.SIDE_NAV = 'sideFixedNav');
        })(p || (p = {}));
      var b = l(893);
      function v() {
        var n =
            'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\pages\\HomePage\\HomePage.tsx',
          e = new Function('return this')(),
          l = '__coverage__',
          t = e[l] || (e[l] = {});
        (t[n] && '4c7142245402dd708a9e025bedb6a83566981da1' === t[n].hash) ||
          (t[n] = {
            path: 'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\pages\\HomePage\\HomePage.tsx',
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
            hash: '4c7142245402dd708a9e025bedb6a83566981da1'
          });
        var a = t[n];
        return (
          (v = function () {
            return a;
          }),
          a
        );
      }
      function _(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var l =
              null == n
                ? null
                : ('undefined' != typeof Symbol && n[Symbol.iterator]) || n['@@iterator'];
            if (null != l) {
              var t,
                a,
                c,
                r,
                o = [],
                i = !0,
                s = !1;
              try {
                if (((c = (l = l.call(n)).next), 0 === e)) {
                  if (Object(l) !== l) return;
                  i = !1;
                } else
                  for (
                    ;
                    !(i = (t = c.call(l)).done) && (o.push(t.value), o.length !== e);
                    i = !0
                  );
              } catch (n) {
                (s = !0), (a = n);
              } finally {
                try {
                  if (!i && null != l.return && ((r = l.return()), Object(r) !== r))
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return o;
            }
          })(n, e) ||
          (function (n, e) {
            if (!n) return;
            if ('string' == typeof n) return g(n, e);
            var l = Object.prototype.toString.call(n).slice(8, -1);
            'Object' === l && n.constructor && (l = n.constructor.name);
            if ('Map' === l || 'Set' === l) return Array.from(n);
            if ('Arguments' === l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
              return g(n, e);
          })(n, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function g(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var l = 0, t = new Array(e); l < e; l++) t[l] = n[l];
        return t;
      }
      v(), v().s[0]++;
      const y = function () {
          v().f[0]++;
          var n = _((v().s[1]++, (0, r.bx)()), 2),
            e = n[0];
          n[1];
          return (
            v().s[2]++,
            (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)('header', {
                  className:
                    e === p.TOP_FIXED_NAV ? (v().b[0][0]++, s) : void v().b[0][1]++,
                  style: {
                    gridArea: 'nav',
                    backgroundColor: 'var(--success-color)',
                    color: 'var(--primary-text)'
                  },
                  children: 'Navigation'
                }),
                (0, b.jsxs)('main', {
                  className:
                    e === p.TOP_FIXED_NAV
                      ? (v().b[1][0]++, i()(u, m))
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
      function j() {
        var n =
            'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\components\\ThemeChanger\\ThemeChanger.tsx',
          e = new Function('return this')(),
          l = '__coverage__',
          t = e[l] || (e[l] = {});
        (t[n] && 'b50aff0a58769a473b2aaf5516b1cb76c83c4f6d' === t[n].hash) ||
          (t[n] = {
            path: 'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\components\\ThemeChanger\\ThemeChanger.tsx',
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
            hash: 'b50aff0a58769a473b2aaf5516b1cb76c83c4f6d'
          });
        var a = t[n];
        return (
          (j = function () {
            return a;
          }),
          a
        );
      }
      function A(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var l =
              null == n
                ? null
                : ('undefined' != typeof Symbol && n[Symbol.iterator]) || n['@@iterator'];
            if (null != l) {
              var t,
                a,
                c,
                r,
                o = [],
                i = !0,
                s = !1;
              try {
                if (((c = (l = l.call(n)).next), 0 === e)) {
                  if (Object(l) !== l) return;
                  i = !1;
                } else
                  for (
                    ;
                    !(i = (t = c.call(l)).done) && (o.push(t.value), o.length !== e);
                    i = !0
                  );
              } catch (n) {
                (s = !0), (a = n);
              } finally {
                try {
                  if (!i && null != l.return && ((r = l.return()), Object(r) !== r))
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return o;
            }
          })(n, e) ||
          (function (n, e) {
            if (!n) return;
            if ('string' == typeof n) return T(n, e);
            var l = Object.prototype.toString.call(n).slice(8, -1);
            'Object' === l && n.constructor && (l = n.constructor.name);
            if ('Map' === l || 'Set' === l) return Array.from(n);
            if ('Arguments' === l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
              return T(n, e);
          })(n, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function T(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var l = 0, t = new Array(e); l < e; l++) t[l] = n[l];
        return t;
      }
      j(), j().s[7]++;
      var D = function () {
        var n;
        j().f[3]++;
        var e = (j().s[8]++, document.body.getAttribute('data-theme'));
        return (
          j().s[9]++,
          e
            ? (j().b[0][0]++, j().s[10]++, (n = e))
            : (j().b[0][1]++,
              j().s[11]++,
              (document.body.dataset.theme = 'light'),
              j().s[12]++,
              (n = 'light')),
          j().s[13]++,
          n
        );
      };
      j().s[14]++;
      var S = function (n) {
        var e;
        switch ((j().f[4]++, j().s[15]++, n)) {
          case 'light':
            j().b[1][0]++, j().s[16]++, (e = 'dark'), j().s[17]++;
            break;
          case 'dark':
            j().b[1][1]++, j().s[18]++, (e = 'light'), j().s[19]++;
            break;
          default:
            j().b[1][2]++, j().s[20]++, (e = 'light'), j().s[21]++;
        }
        return j().s[22]++, e;
      };
      const M = function () {
          j().f[0]++;
          var n = A((j().s[0]++, (0, t.useState)(D)), 2),
            e = n[0],
            l = n[1];
          return (
            j().s[1]++,
            j().s[6]++,
            (0, b.jsxs)('button', {
              'data-testid': 'theme-button',
              className: x.themeButton,
              onClick: function () {
                j().f[1]++,
                  j().s[2]++,
                  l(function (n) {
                    j().f[2]++;
                    var e = (j().s[3]++, S(n));
                    return (
                      j().s[4]++,
                      document.body.setAttribute('data-theme', e),
                      j().s[5]++,
                      e
                    );
                  });
              },
              children: ['Change to ', S(e), ' mode']
            })
          );
        },
        N = 'SelectTemplate_navigationStyles_HJXBB';
      function C() {
        var n =
            'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\components\\SelectTemplate\\SelectTemplate.tsx',
          e = new Function('return this')(),
          l = '__coverage__',
          t = e[l] || (e[l] = {});
        (t[n] && '073f4655001f0ffd13564e0e3cfd82578d5e5651' === t[n].hash) ||
          (t[n] = {
            path: 'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\components\\SelectTemplate\\SelectTemplate.tsx',
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
            hash: '073f4655001f0ffd13564e0e3cfd82578d5e5651'
          });
        var a = t[n];
        return (
          (C = function () {
            return a;
          }),
          a
        );
      }
      C();
      var P =
        (C().s[0]++,
        [
          { value: p.TOP_NAV, text: 'Top navigation' },
          { value: p.TOP_FIXED_NAV, text: 'Top fixed navigation' },
          { value: p.SIDE_NAV, text: 'Side Fixed navigation' }
        ]);
      C().s[1]++;
      const w = function (n) {
          C().f[0]++;
          var e = (C().s[2]++, n),
            l = e.selectedValue,
            t = e.onChangeSelect;
          e.isFixedNavigation;
          return (
            C().s[3]++,
            (0, b.jsxs)('div', {
              className: N,
              children: [
                (0, b.jsx)('label', {
                  htmlFor: 'template-select',
                  children: 'Choose a template:'
                }),
                (0, b.jsx)('select', {
                  name: 'templates',
                  id: 'template-select',
                  value: l,
                  onChange: function (n) {
                    return (
                      C().f[1]++,
                      C().s[4]++,
                      t ? (C().b[0][0]++, t(n.target.value)) : void C().b[0][1]++
                    );
                  },
                  children: P.map(function (n) {
                    return (
                      C().f[2]++,
                      C().s[5]++,
                      (0, b.jsx)('option', { value: n.value, children: n.text }, n.value)
                    );
                  })
                }),
                (0, b.jsx)('p', { 'data-testid': 'template-select-value', children: l })
              ]
            })
          );
        },
        O = 'MainPage_topBarNavigation_MK9zf',
        F = 'MainPage_topFixedBarNavigation_Efk9n',
        k = 'MainPage_sideBarNavigation_jLoH_',
        E = 'MainPage_textForDemo_UgOAb',
        I = 'MainPage_headerForDemo_Y6yDG';
      function U() {
        var n =
            'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\pages\\MainPage\\MainPage.tsx',
          e = new Function('return this')(),
          l = '__coverage__',
          t = e[l] || (e[l] = {});
        (t[n] && 'bbf828353f5474bc358fe45921bb51615f20d44d' === t[n].hash) ||
          (t[n] = {
            path: 'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\pages\\MainPage\\MainPage.tsx',
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
            hash: 'bbf828353f5474bc358fe45921bb51615f20d44d'
          });
        var a = t[n];
        return (
          (U = function () {
            return a;
          }),
          a
        );
      }
      function V(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var l =
              null == n
                ? null
                : ('undefined' != typeof Symbol && n[Symbol.iterator]) || n['@@iterator'];
            if (null != l) {
              var t,
                a,
                c,
                r,
                o = [],
                i = !0,
                s = !1;
              try {
                if (((c = (l = l.call(n)).next), 0 === e)) {
                  if (Object(l) !== l) return;
                  i = !1;
                } else
                  for (
                    ;
                    !(i = (t = c.call(l)).done) && (o.push(t.value), o.length !== e);
                    i = !0
                  );
              } catch (n) {
                (s = !0), (a = n);
              } finally {
                try {
                  if (!i && null != l.return && ((r = l.return()), Object(r) !== r))
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return o;
            }
          })(n, e) ||
          (function (n, e) {
            if (!n) return;
            if ('string' == typeof n) return H(n, e);
            var l = Object.prototype.toString.call(n).slice(8, -1);
            'Object' === l && n.constructor && (l = n.constructor.name);
            if ('Map' === l || 'Set' === l) return Array.from(n);
            if ('Arguments' === l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
              return H(n, e);
          })(n, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function H(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var l = 0, t = new Array(e); l < e; l++) t[l] = n[l];
        return t;
      }
      U(), U().s[0]++;
      U().s[5]++;
      var B = function (n) {
        U().f[2]++;
        var e = (U().s[6]++, n),
          l = e.selectNavTemplate,
          t = e.handleSelectNavTemplate;
        return (
          U().s[7]++,
          (0, b.jsx)(b.Fragment, {
            children: (0, b.jsxs)('header', {
              className: I,
              children: [
                (0, b.jsxs)('div', {
                  children: [
                    (0, b.jsx)('p', {
                      className: E,
                      children: 'This line is here only for demonstration purpose'
                    }),
                    (0, b.jsx)('p', {
                      className: E,
                      children:
                        "Don't hesitate to scroll down to check the layout's behavior"
                    })
                  ]
                }),
                (0, b.jsx)(w, {
                  isFixedNavigation: l === p.TOP_FIXED_NAV,
                  onChangeSelect: function (n) {
                    return U().f[3]++, U().s[8]++, t(n);
                  },
                  selectedValue: l
                }),
                (0, b.jsx)(M, {})
              ]
            })
          })
        );
      };
      U().s[9]++;
      var X = function (n) {
        var e;
        switch ((U().f[4]++, U().s[10]++, n)) {
          case p.TOP_NAV:
            U().b[0][0]++, U().s[11]++, (e = O), U().s[12]++;
            break;
          case p.TOP_FIXED_NAV:
            U().b[0][1]++, U().s[13]++, (e = F), U().s[14]++;
            break;
          case p.SIDE_NAV:
            U().b[0][2]++, U().s[15]++, (e = k), U().s[16]++;
            break;
          default:
            U().b[0][3]++, U().s[17]++, (e = void 0), U().s[18]++;
        }
        return U().s[19]++, e;
      };
      const L = function () {
        U().f[0]++;
        var n = V((U().s[1]++, (0, t.useState)(p.TOP_NAV)), 2),
          e = n[0],
          l = n[1];
        U().s[2]++;
        var a = function (n) {
          U().f[1]++, U().s[3]++, l(n);
        };
        return (
          U().s[4]++,
          (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(B, { selectNavTemplate: e, handleSelectNavTemplate: a }),
              (0, b.jsx)('div', {
                className: X(e),
                children: (0, b.jsx)(r.j3, { context: [e, a] })
              })
            ]
          })
        );
      };
      function G() {
        var n =
            'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\pages\\ErrorPage\\ErrorPage.tsx',
          e = new Function('return this')(),
          l = '__coverage__',
          t = e[l] || (e[l] = {});
        (t[n] && 'e3b9c784c7d5f5c9b446e99f182b43f9bc6a0d65' === t[n].hash) ||
          (t[n] = {
            path: 'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\pages\\ErrorPage\\ErrorPage.tsx',
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
            hash: 'e3b9c784c7d5f5c9b446e99f182b43f9bc6a0d65'
          });
        var a = t[n];
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
        var n = (G().s[1]++, (0, r.lk)());
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
                    (null == n ? void 0 : n.statusText) ||
                      (G().b[0][1]++, null == n ? void 0 : n.message))
                })
              }),
              (0, b.jsx)('p', {
                children: (0, b.jsx)(c.rU, { to: '/', children: 'Go to the home page' })
              })
            ]
          })
        );
      };
      function q() {
        var n =
            'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\index.tsx',
          e = new Function('return this')(),
          l = '__coverage__',
          t = e[l] || (e[l] = {});
        (t[n] && 'a345fcb68f14f9cfeaca02bab540e6e4d2c62509' === t[n].hash) ||
          (t[n] = {
            path: 'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\reactTemplate\\src\\index.tsx',
            statementMap: {
              0: { start: { line: 10, column: 15 }, end: { line: 17, column: 2 } },
              1: { start: { line: 19, column: 13 }, end: { line: 19, column: 70 } },
              2: { start: { line: 21, column: 0 }, end: { line: 25, column: 2 } }
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0 },
            f: {},
            b: {},
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'a345fcb68f14f9cfeaca02bab540e6e4d2c62509'
          });
        var a = t[n];
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
          (0, c.aj)([
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
          (0, b.jsx)(t.StrictMode, {
            children: (0, b.jsx)(r.pG, {
              router: z,
              fallbackElement: (0, b.jsx)('p', { children: 'Loading...' })
            })
          })
        );
    }
  },
  (n) => {
    n.O(0, [216], () => {
      return (e = 575), n((n.s = e));
      var e;
    });
    n.O();
  }
]);
