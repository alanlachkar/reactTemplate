'use strict';
(self.webpackChunkcrqt_skeleton = self.webpackChunkcrqt_skeleton || []).push([
  [179],
  {
    575: (n, e, l) => {
      var t = l(294),
        a = l(745),
        c = l(655),
        o = l(250),
        r = l(184),
        i = l.n(r);
      const s = 'HomePage_mainContainer_aumiY';
      function u() {
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
          (u = function () {
            return a;
          }),
          a
        );
      }
      var m;
      u(),
        (function (n) {
          (n.TOP_NAV = 'topNav'),
            (n.TOP_FIXED_NAV = 'topFixedNav'),
            (n.SIDE_NAV = 'sideFixedNav');
        })(m || (m = {}));
      var d = l(893);
      function f() {
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
          (f = function () {
            return a;
          }),
          a
        );
      }
      function h(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var l = 0, t = new Array(e); l < e; l++) t[l] = n[l];
        return t;
      }
      f(), f().s[0]++;
      const p = function () {
          f().f[0]++;
          var n,
            e,
            l =
              (f().s[1]++,
              (n = (0, o.bx)()),
              (e = 2),
              (function (n) {
                if (Array.isArray(n)) return n;
              })(n) ||
                (function (n, e) {
                  var l =
                    null == n
                      ? null
                      : ('undefined' != typeof Symbol && n[Symbol.iterator]) ||
                        n['@@iterator'];
                  if (null != l) {
                    var t,
                      a,
                      c,
                      o,
                      r = [],
                      i = !0,
                      s = !1;
                    try {
                      if (((c = (l = l.call(n)).next), 0 === e)) {
                        if (Object(l) !== l) return;
                        i = !1;
                      } else
                        for (
                          ;
                          !(i = (t = c.call(l)).done) &&
                          (r.push(t.value), r.length !== e);
                          i = !0
                        );
                    } catch (n) {
                      (s = !0), (a = n);
                    } finally {
                      try {
                        if (!i && null != l.return && ((o = l.return()), Object(o) !== o))
                          return;
                      } finally {
                        if (s) throw a;
                      }
                    }
                    return r;
                  }
                })(n, e) ||
                (function (n, e) {
                  if (n) {
                    if ('string' == typeof n) return h(n, e);
                    var l = Object.prototype.toString.call(n).slice(8, -1);
                    return (
                      'Object' === l && n.constructor && (l = n.constructor.name),
                      'Map' === l || 'Set' === l
                        ? Array.from(n)
                        : 'Arguments' === l ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
                        ? h(n, e)
                        : void 0
                    );
                  }
                })(n, e) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                })()),
            t = l[0];
          return (
            l[1],
            f().s[2]++,
            (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)('header', {
                  className:
                    t === m.TOP_FIXED_NAV
                      ? (f().b[0][0]++, 'HomePage_fixedNavigation_vkgzJ')
                      : void f().b[0][1]++,
                  style: {
                    gridArea: 'nav',
                    backgroundColor: 'var(--success-color)',
                    color: 'var(--primary-text)'
                  },
                  children: 'Navigation'
                }),
                (0, d.jsxs)('main', {
                  className:
                    t === m.TOP_FIXED_NAV
                      ? (f().b[1][0]++, i()('HomePage_fixedMain_HDLSD', s))
                      : (f().b[1][1]++, s),
                  children: [
                    (0, d.jsx)('div', {
                      className: 'HomePage_subMain1_gLhbg',
                      children: 'Main 1'
                    }),
                    (0, d.jsx)('div', {
                      className: 'HomePage_subMain2_R9HvI',
                      children: 'Main 2'
                    })
                  ]
                })
              ]
            })
          );
        },
        b = 'ThemeChanger_themeButton_j5pWg';
      function v() {
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
          (v = function () {
            return a;
          }),
          a
        );
      }
      function _(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var l = 0, t = new Array(e); l < e; l++) t[l] = n[l];
        return t;
      }
      v(), v().s[7]++;
      var g = function () {
        var n;
        v().f[3]++;
        var e = (v().s[8]++, document.body.getAttribute('data-theme'));
        return (
          v().s[9]++,
          e
            ? (v().b[0][0]++, v().s[10]++, (n = e))
            : (v().b[0][1]++,
              v().s[11]++,
              (document.body.dataset.theme = 'light'),
              v().s[12]++,
              (n = 'light')),
          v().s[13]++,
          n
        );
      };
      v().s[14]++;
      var y = function (n) {
        var e;
        switch ((v().f[4]++, v().s[15]++, n)) {
          case 'light':
            v().b[1][0]++, v().s[16]++, (e = 'dark'), v().s[17]++;
            break;
          case 'dark':
            v().b[1][1]++, v().s[18]++, (e = 'light'), v().s[19]++;
            break;
          default:
            v().b[1][2]++, v().s[20]++, (e = 'light'), v().s[21]++;
        }
        return v().s[22]++, e;
      };
      const x = function () {
        v().f[0]++;
        var n,
          e,
          l =
            (v().s[0]++,
            (n = (0, t.useState)(g)),
            (e = 2),
            (function (n) {
              if (Array.isArray(n)) return n;
            })(n) ||
              (function (n, e) {
                var l =
                  null == n
                    ? null
                    : ('undefined' != typeof Symbol && n[Symbol.iterator]) ||
                      n['@@iterator'];
                if (null != l) {
                  var t,
                    a,
                    c,
                    o,
                    r = [],
                    i = !0,
                    s = !1;
                  try {
                    if (((c = (l = l.call(n)).next), 0 === e)) {
                      if (Object(l) !== l) return;
                      i = !1;
                    } else
                      for (
                        ;
                        !(i = (t = c.call(l)).done) && (r.push(t.value), r.length !== e);
                        i = !0
                      );
                  } catch (n) {
                    (s = !0), (a = n);
                  } finally {
                    try {
                      if (!i && null != l.return && ((o = l.return()), Object(o) !== o))
                        return;
                    } finally {
                      if (s) throw a;
                    }
                  }
                  return r;
                }
              })(n, e) ||
              (function (n, e) {
                if (n) {
                  if ('string' == typeof n) return _(n, e);
                  var l = Object.prototype.toString.call(n).slice(8, -1);
                  return (
                    'Object' === l && n.constructor && (l = n.constructor.name),
                    'Map' === l || 'Set' === l
                      ? Array.from(n)
                      : 'Arguments' === l ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
                      ? _(n, e)
                      : void 0
                  );
                }
              })(n, e) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              })()),
          a = l[0],
          c = l[1];
        return (
          v().s[1]++,
          v().s[6]++,
          (0, d.jsxs)('button', {
            'data-testid': 'theme-button',
            className: b,
            onClick: function () {
              v().f[1]++,
                v().s[2]++,
                c(function (n) {
                  v().f[2]++;
                  var e = (v().s[3]++, y(n));
                  return (
                    v().s[4]++, document.body.setAttribute('data-theme', e), v().s[5]++, e
                  );
                });
            },
            children: ['Change to ', y(a), ' mode']
          })
        );
      };
      function j() {
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
          (j = function () {
            return a;
          }),
          a
        );
      }
      j();
      var A =
        (j().s[0]++,
        [
          { value: m.TOP_NAV, text: 'Top navigation' },
          { value: m.TOP_FIXED_NAV, text: 'Top fixed navigation' },
          { value: m.SIDE_NAV, text: 'Side Fixed navigation' }
        ]);
      j().s[1]++;
      const T = function (n) {
          j().f[0]++;
          var e = (j().s[2]++, n),
            l = e.selectedValue,
            t = e.onChangeSelect;
          return (
            e.isFixedNavigation,
            j().s[3]++,
            (0, d.jsxs)('div', {
              className: 'SelectTemplate_navigationStyles_HJXBB',
              children: [
                (0, d.jsx)('label', {
                  htmlFor: 'template-select',
                  children: 'Choose a template:'
                }),
                (0, d.jsx)('select', {
                  name: 'templates',
                  id: 'template-select',
                  value: l,
                  onChange: function (n) {
                    return (
                      j().f[1]++,
                      j().s[4]++,
                      t ? (j().b[0][0]++, t(n.target.value)) : void j().b[0][1]++
                    );
                  },
                  children: A.map(function (n) {
                    return (
                      j().f[2]++,
                      j().s[5]++,
                      (0, d.jsx)('option', { value: n.value, children: n.text }, n.value)
                    );
                  })
                }),
                (0, d.jsx)('p', { 'data-testid': 'template-select-value', children: l })
              ]
            })
          );
        },
        D = 'MainPage_textForDemo_UgOAb';
      function S() {
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
          (S = function () {
            return a;
          }),
          a
        );
      }
      function M(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var l = 0, t = new Array(e); l < e; l++) t[l] = n[l];
        return t;
      }
      S(), S().s[0]++, S().s[5]++;
      var N = function (n) {
        S().f[2]++;
        var e = (S().s[6]++, n),
          l = e.selectNavTemplate,
          t = e.handleSelectNavTemplate;
        return (
          S().s[7]++,
          (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)('header', {
              className: 'MainPage_headerForDemo_Y6yDG',
              children: [
                (0, d.jsxs)('div', {
                  children: [
                    (0, d.jsx)('p', {
                      className: D,
                      children: 'This line is here only for demonstration purpose'
                    }),
                    (0, d.jsx)('p', {
                      className: D,
                      children:
                        "Don't hesitate to scroll down to check the layout's behavior"
                    })
                  ]
                }),
                (0, d.jsx)(T, {
                  isFixedNavigation: l === m.TOP_FIXED_NAV,
                  onChangeSelect: function (n) {
                    return S().f[3]++, S().s[8]++, t(n);
                  },
                  selectedValue: l
                }),
                (0, d.jsx)(x, {})
              ]
            })
          })
        );
      };
      S().s[9]++;
      var C = function (n) {
        var e;
        switch ((S().f[4]++, S().s[10]++, n)) {
          case m.TOP_NAV:
            S().b[0][0]++,
              S().s[11]++,
              (e = 'MainPage_topBarNavigation_MK9zf'),
              S().s[12]++;
            break;
          case m.TOP_FIXED_NAV:
            S().b[0][1]++,
              S().s[13]++,
              (e = 'MainPage_topFixedBarNavigation_Efk9n'),
              S().s[14]++;
            break;
          case m.SIDE_NAV:
            S().b[0][2]++,
              S().s[15]++,
              (e = 'MainPage_sideBarNavigation_jLoH_'),
              S().s[16]++;
            break;
          default:
            S().b[0][3]++, S().s[17]++, (e = void 0), S().s[18]++;
        }
        return S().s[19]++, e;
      };
      const P = function () {
        S().f[0]++;
        var n,
          e,
          l =
            (S().s[1]++,
            (n = (0, t.useState)(m.TOP_NAV)),
            (e = 2),
            (function (n) {
              if (Array.isArray(n)) return n;
            })(n) ||
              (function (n, e) {
                var l =
                  null == n
                    ? null
                    : ('undefined' != typeof Symbol && n[Symbol.iterator]) ||
                      n['@@iterator'];
                if (null != l) {
                  var t,
                    a,
                    c,
                    o,
                    r = [],
                    i = !0,
                    s = !1;
                  try {
                    if (((c = (l = l.call(n)).next), 0 === e)) {
                      if (Object(l) !== l) return;
                      i = !1;
                    } else
                      for (
                        ;
                        !(i = (t = c.call(l)).done) && (r.push(t.value), r.length !== e);
                        i = !0
                      );
                  } catch (n) {
                    (s = !0), (a = n);
                  } finally {
                    try {
                      if (!i && null != l.return && ((o = l.return()), Object(o) !== o))
                        return;
                    } finally {
                      if (s) throw a;
                    }
                  }
                  return r;
                }
              })(n, e) ||
              (function (n, e) {
                if (n) {
                  if ('string' == typeof n) return M(n, e);
                  var l = Object.prototype.toString.call(n).slice(8, -1);
                  return (
                    'Object' === l && n.constructor && (l = n.constructor.name),
                    'Map' === l || 'Set' === l
                      ? Array.from(n)
                      : 'Arguments' === l ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
                      ? M(n, e)
                      : void 0
                  );
                }
              })(n, e) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              })()),
          a = l[0],
          c = l[1];
        S().s[2]++;
        var r = function (n) {
          S().f[1]++, S().s[3]++, c(n);
        };
        return (
          S().s[4]++,
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)(N, { selectNavTemplate: a, handleSelectNavTemplate: r }),
              (0, d.jsx)('div', {
                className: C(a),
                children: (0, d.jsx)(o.j3, { context: [a, r] })
              })
            ]
          })
        );
      };
      function w() {
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
          (w = function () {
            return a;
          }),
          a
        );
      }
      w(), w().s[0]++;
      const O = function () {
        w().f[0]++;
        var n = (w().s[1]++, (0, o.lk)());
        return (
          w().s[2]++,
          (0, d.jsxs)('div', {
            id: 'error-page',
            children: [
              (0, d.jsx)('h1', { children: 'Oops!' }),
              (0, d.jsx)('p', { children: 'Sorry, an unexpected error has occurred.' }),
              (0, d.jsx)('p', {
                children: (0, d.jsx)('i', {
                  children:
                    (w().b[0][0]++,
                    (null == n ? void 0 : n.statusText) ||
                      (w().b[0][1]++, null == n ? void 0 : n.message))
                })
              }),
              (0, d.jsx)('p', {
                children: (0, d.jsx)(c.rU, { to: '/', children: 'Go to the home page' })
              })
            ]
          })
        );
      };
      function F() {
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
          (F = function () {
            return a;
          }),
          a
        );
      }
      F();
      var k =
          (F().s[0]++,
          (0, c.aj)([
            {
              path: '/',
              element: (0, d.jsx)(P, {}),
              errorElement: (0, d.jsx)(O, {}),
              children: [{ index: !0, element: (0, d.jsx)(p, {}) }]
            }
          ])),
        E = (F().s[1]++, (0, a.s)(document.getElementById('app')));
      F().s[2]++,
        E.render(
          (0, d.jsx)(t.StrictMode, {
            children: (0, d.jsx)(o.pG, {
              router: k,
              fallbackElement: (0, d.jsx)('p', { children: 'Loading...' })
            })
          })
        );
    }
  },
  (n) => {
    n.O(0, [216], () => (575, n((n.s = 575)))), n.O();
  }
]);
