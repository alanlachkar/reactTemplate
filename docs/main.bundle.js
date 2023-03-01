'use strict';
(self.webpackChunkcrqt_skeleton = self.webpackChunkcrqt_skeleton || []).push([
  [179],
  {
    372: (e, n, t) => {
      var l = t(294),
        a = t(745),
        r = t(655),
        c = t(250);
      const o = 'HomePage_fixedNavigation_vkgzJ',
        i = 'HomePage_fixedMain_HDLSD';
      function s() {
        var e =
            'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\queryReactTemplate\\src\\utils\\enums\\enums.ts',
          n = new Function('return this')(),
          t = '__coverage__',
          l = n[t] || (n[t] = {});
        (l[e] && 'c3d90ccb36444d044466a120cddd05c7cf542568' === l[e].hash) ||
          (l[e] = {
            path: 'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\queryReactTemplate\\src\\utils\\enums\\enums.ts',
            statementMap: {},
            fnMap: {},
            branchMap: {},
            s: {},
            f: {},
            b: {},
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'c3d90ccb36444d044466a120cddd05c7cf542568'
          });
        var a = l[e];
        return (
          (s = function () {
            return a;
          }),
          a
        );
      }
      var u;
      s(),
        (function (e) {
          (e.TOP_NAV = 'topNav'),
            (e.TOP_FIXED_NAV = 'topFixedNav'),
            (e.SIDE_NAV = 'sideFixedNav');
        })(u || (u = {}));
      var m = t(893);
      function d() {
        var e =
            'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\queryReactTemplate\\src\\pages\\HomePage\\HomePage.tsx',
          n = new Function('return this')(),
          t = '__coverage__',
          l = n[t] || (n[t] = {});
        (l[e] && 'ed158a4fc6fa31ae42bce117391602da5610dd19' === l[e].hash) ||
          (l[e] = {
            path: 'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\queryReactTemplate\\src\\pages\\HomePage\\HomePage.tsx',
            statementMap: {
              0: { start: { line: 8, column: 17 }, end: { line: 27, column: 1 } },
              1: { start: { line: 9, column: 32 }, end: { line: 9, column: 61 } },
              2: { start: { line: 10, column: 2 }, end: { line: 26, column: 4 } }
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: { start: { line: 8, column: 17 }, end: { line: 8, column: 18 } },
                loc: { start: { line: 8, column: 23 }, end: { line: 27, column: 1 } },
                line: 8
              }
            },
            branchMap: {
              0: {
                loc: { start: { line: 13, column: 19 }, end: { line: 13, column: 89 } },
                type: 'binary-expr',
                locations: [
                  { start: { line: 13, column: 19 }, end: { line: 13, column: 63 } },
                  { start: { line: 13, column: 67 }, end: { line: 13, column: 89 } }
                ],
                line: 13
              },
              1: {
                loc: { start: { line: 19, column: 19 }, end: { line: 19, column: 83 } },
                type: 'binary-expr',
                locations: [
                  { start: { line: 19, column: 19 }, end: { line: 19, column: 63 } },
                  { start: { line: 19, column: 67 }, end: { line: 19, column: 83 } }
                ],
                line: 19
              }
            },
            s: { 0: 0, 1: 0, 2: 0 },
            f: { 0: 0 },
            b: { 0: [0, 0], 1: [0, 0] },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'ed158a4fc6fa31ae42bce117391602da5610dd19'
          });
        var a = l[e];
        return (
          (d = function () {
            return a;
          }),
          a
        );
      }
      function f(e, n) {
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
                s = !1;
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
                (s = !0), (a = e);
              } finally {
                try {
                  if (!i && null != t.return && ((c = t.return()), Object(c) !== c))
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return o;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ('string' == typeof e) return p(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === t && e.constructor && (t = e.constructor.name);
            if ('Map' === t || 'Set' === t) return Array.from(e);
            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
              return p(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function p(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, l = new Array(n); t < n; t++) l[t] = e[t];
        return l;
      }
      d(), d().s[0]++;
      const h = function () {
          d().f[0]++;
          var e = f((d().s[1]++, (0, c.bx)()), 2),
            n = e[0];
          e[1];
          return (
            d().s[2]++,
            (0, m.jsxs)(m.Fragment, {
              children: [
                (0, m.jsx)('header', {
                  className: (d().b[0][0]++, n === u.TOP_FIXED_NAV && (d().b[0][1]++, o)),
                  style: { gridArea: 'nav', backgroundColor: 'green' },
                  children: 'Navigation'
                }),
                (0, m.jsxs)('main', {
                  className: (d().b[1][0]++, n === u.TOP_FIXED_NAV && (d().b[1][1]++, i)),
                  style: { gridArea: 'main', display: 'flex', height: '1200px' },
                  children: [
                    (0, m.jsx)('div', {
                      style: { backgroundColor: 'violet', flexGrow: 1 },
                      children: 'Main 1'
                    }),
                    (0, m.jsx)('div', {
                      style: { backgroundColor: 'yellow', flexGrow: 1 },
                      children: 'Main 2'
                    })
                  ]
                })
              ]
            })
          );
        },
        b = 'SelectTemplate_fixedNavigationStyle_k_8Bn',
        v = 'SelectTemplate_navigationStyles_HJXBB';
      function _() {
        var e =
            'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\queryReactTemplate\\src\\components\\SelectTemplate\\SelectTemplate.tsx',
          n = new Function('return this')(),
          t = '__coverage__',
          l = n[t] || (n[t] = {});
        (l[e] && '4da13f54b789338134f17f1bdf04ffb992887d2c' === l[e].hash) ||
          (l[e] = {
            path: 'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\queryReactTemplate\\src\\components\\SelectTemplate\\SelectTemplate.tsx',
            statementMap: {
              0: { start: { line: 13, column: 35 }, end: { line: 17, column: 1 } },
              1: { start: { line: 25, column: 23 }, end: { line: 54, column: 1 } },
              2: { start: { line: 26, column: 63 }, end: { line: 26, column: 68 } },
              3: { start: { line: 28, column: 2 }, end: { line: 53, column: 4 } },
              4: { start: { line: 40, column: 10 }, end: { line: 40, column: 73 } },
              5: { start: { line: 44, column: 10 }, end: { line: 48, column: 12 } }
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: { start: { line: 25, column: 23 }, end: { line: 25, column: 24 } },
                loc: { start: { line: 25, column: 60 }, end: { line: 54, column: 1 } },
                line: 25
              },
              1: {
                name: '(anonymous_1)',
                decl: { start: { line: 39, column: 18 }, end: { line: 39, column: 19 } },
                loc: { start: { line: 40, column: 10 }, end: { line: 40, column: 73 } },
                line: 40
              },
              2: {
                name: '(anonymous_2)',
                decl: { start: { line: 43, column: 21 }, end: { line: 43, column: 22 } },
                loc: { start: { line: 43, column: 50 }, end: { line: 49, column: 9 } },
                line: 43
              }
            },
            branchMap: {
              0: {
                loc: { start: { line: 31, column: 8 }, end: { line: 31, column: 81 } },
                type: 'cond-expr',
                locations: [
                  { start: { line: 31, column: 28 }, end: { line: 31, column: 55 } },
                  { start: { line: 31, column: 58 }, end: { line: 31, column: 81 } }
                ],
                line: 31
              },
              1: {
                loc: { start: { line: 40, column: 10 }, end: { line: 40, column: 73 } },
                type: 'cond-expr',
                locations: [
                  { start: { line: 40, column: 27 }, end: { line: 40, column: 61 } },
                  { start: { line: 40, column: 64 }, end: { line: 40, column: 73 } }
                ],
                line: 40
              }
            },
            s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
            f: { 0: 0, 1: 0, 2: 0 },
            b: { 0: [0, 0], 1: [0, 0] },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '4da13f54b789338134f17f1bdf04ffb992887d2c'
          });
        var a = l[e];
        return (
          (_ = function () {
            return a;
          }),
          a
        );
      }
      _();
      var g =
        (_().s[0]++,
        [
          { value: u.TOP_NAV, text: 'Top navigation' },
          { value: u.TOP_FIXED_NAV, text: 'Top fixed navigation' },
          { value: u.SIDE_NAV, text: 'Side Fixed navigation' }
        ]);
      _().s[1]++;
      const y = function (e) {
          _().f[0]++;
          var n = (_().s[2]++, e),
            t = n.selectedValue,
            l = n.onChangeSelect,
            a = n.isFixedNavigation;
          return (
            _().s[3]++,
            (0, m.jsxs)('div', {
              className: a ? (_().b[0][0]++, b) : (_().b[0][1]++, v),
              children: [
                (0, m.jsx)('label', {
                  htmlFor: 'template-select',
                  children: 'Choose a template:'
                }),
                (0, m.jsx)('select', {
                  name: 'templates',
                  id: 'template-select',
                  value: t,
                  onChange: function (e) {
                    return (
                      _().f[1]++,
                      _().s[4]++,
                      l ? (_().b[1][0]++, l(e.target.value)) : void _().b[1][1]++
                    );
                  },
                  children: g.map(function (e) {
                    return (
                      _().f[2]++,
                      _().s[5]++,
                      (0, m.jsx)('option', { value: e.value, children: e.text }, e.value)
                    );
                  })
                }),
                (0, m.jsx)('p', { 'data-testid': 'template-select-value', children: t })
              ]
            })
          );
        },
        x = 'MainPage_topBarNavigation_MK9zf',
        j = 'MainPage_topFixedBarNavigation_Efk9n',
        A = 'MainPage_sideBarNavigation_jLoH_';
      function D() {
        var e =
            'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\queryReactTemplate\\src\\pages\\MainPage\\MainPage.tsx',
          n = new Function('return this')(),
          t = '__coverage__',
          l = n[t] || (n[t] = {});
        (l[e] && '5f37ea3fbe533a096adb1f396d7ecc74e9942f73' === l[e].hash) ||
          (l[e] = {
            path: 'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\queryReactTemplate\\src\\pages\\MainPage\\MainPage.tsx',
            statementMap: {
              0: { start: { line: 11, column: 17 }, end: { line: 29, column: 1 } },
              1: { start: { line: 12, column: 50 }, end: { line: 12, column: 88 } },
              2: { start: { line: 14, column: 2 }, end: { line: 28, column: 4 } },
              3: { start: { line: 23, column: 10 }, end: { line: 23, column: 52 } },
              4: { start: { line: 31, column: 25 }, end: { line: 48, column: 1 } },
              5: { start: { line: 33, column: 2 }, end: { line: 46, column: 3 } },
              6: { start: { line: 35, column: 6 }, end: { line: 35, column: 46 } },
              7: { start: { line: 36, column: 6 }, end: { line: 36, column: 12 } },
              8: { start: { line: 38, column: 6 }, end: { line: 38, column: 51 } },
              9: { start: { line: 39, column: 6 }, end: { line: 39, column: 12 } },
              10: { start: { line: 41, column: 6 }, end: { line: 41, column: 47 } },
              11: { start: { line: 42, column: 6 }, end: { line: 42, column: 12 } },
              12: { start: { line: 44, column: 6 }, end: { line: 44, column: 32 } },
              13: { start: { line: 45, column: 6 }, end: { line: 45, column: 12 } },
              14: { start: { line: 47, column: 2 }, end: { line: 47, column: 23 } }
            },
            fnMap: {
              0: {
                name: '(anonymous_0)',
                decl: { start: { line: 11, column: 17 }, end: { line: 11, column: 18 } },
                loc: { start: { line: 11, column: 36 }, end: { line: 29, column: 1 } },
                line: 11
              },
              1: {
                name: '(anonymous_1)',
                decl: { start: { line: 22, column: 24 }, end: { line: 22, column: 25 } },
                loc: { start: { line: 23, column: 10 }, end: { line: 23, column: 52 } },
                line: 23
              },
              2: {
                name: '(anonymous_2)',
                decl: { start: { line: 31, column: 25 }, end: { line: 31, column: 26 } },
                loc: { start: { line: 31, column: 53 }, end: { line: 48, column: 1 } },
                line: 31
              }
            },
            branchMap: {
              0: {
                loc: { start: { line: 33, column: 2 }, end: { line: 46, column: 3 } },
                type: 'switch',
                locations: [
                  { start: { line: 34, column: 4 }, end: { line: 36, column: 12 } },
                  { start: { line: 37, column: 4 }, end: { line: 39, column: 12 } },
                  { start: { line: 40, column: 4 }, end: { line: 42, column: 12 } },
                  { start: { line: 43, column: 4 }, end: { line: 45, column: 12 } }
                ],
                line: 33
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
              14: 0
            },
            f: { 0: 0, 1: 0, 2: 0 },
            b: { 0: [0, 0, 0, 0] },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '5f37ea3fbe533a096adb1f396d7ecc74e9942f73'
          });
        var a = l[e];
        return (
          (D = function () {
            return a;
          }),
          a
        );
      }
      function S(e, n) {
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
                s = !1;
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
                (s = !0), (a = e);
              } finally {
                try {
                  if (!i && null != t.return && ((c = t.return()), Object(c) !== c))
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return o;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ('string' == typeof e) return T(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === t && e.constructor && (t = e.constructor.name);
            if ('Map' === t || 'Set' === t) return Array.from(e);
            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
              return T(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function T(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, l = new Array(n); t < n; t++) l[t] = e[t];
        return l;
      }
      D(), D().s[0]++;
      D().s[4]++;
      var M = function (e) {
        var n;
        switch ((D().f[2]++, D().s[5]++, e)) {
          case u.TOP_NAV:
            D().b[0][0]++, D().s[6]++, (n = x), D().s[7]++;
            break;
          case u.TOP_FIXED_NAV:
            D().b[0][1]++, D().s[8]++, (n = j), D().s[9]++;
            break;
          case u.SIDE_NAV:
            D().b[0][2]++, D().s[10]++, (n = A), D().s[11]++;
            break;
          default:
            D().b[0][3]++, D().s[12]++, (n = void 0), D().s[13]++;
        }
        return D().s[14]++, n;
      };
      const N = function () {
        D().f[0]++;
        var e = S((D().s[1]++, (0, l.useState)(u.TOP_NAV)), 2),
          n = e[0],
          t = e[1];
        return (
          D().s[2]++,
          (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)('div', {
                className: M(n),
                children: (0, m.jsx)(c.j3, { context: [n, t] })
              }),
              (0, m.jsx)(y, {
                isFixedNavigation: n === u.TOP_FIXED_NAV,
                onChangeSelect: function (e) {
                  return D().f[1]++, D().s[3]++, t(e);
                },
                selectedValue: n
              })
            ]
          })
        );
      };
      function P() {
        var e =
            'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\queryReactTemplate\\src\\pages\\ErrorPage\\ErrorPage.tsx',
          n = new Function('return this')(),
          t = '__coverage__',
          l = n[t] || (n[t] = {});
        (l[e] && 'd20e49663d5603d8b98a0bcac4771f3eb009be85' === l[e].hash) ||
          (l[e] = {
            path: 'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\queryReactTemplate\\src\\pages\\ErrorPage\\ErrorPage.tsx',
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
            hash: 'd20e49663d5603d8b98a0bcac4771f3eb009be85'
          });
        var a = l[e];
        return (
          (P = function () {
            return a;
          }),
          a
        );
      }
      P(), P().s[0]++;
      const C = function () {
        P().f[0]++;
        var e = (P().s[1]++, (0, c.lk)());
        return (
          P().s[2]++,
          (0, m.jsxs)('div', {
            id: 'error-page',
            children: [
              (0, m.jsx)('h1', { children: 'Oops!' }),
              (0, m.jsx)('p', { children: 'Sorry, an unexpected error has occurred.' }),
              (0, m.jsx)('p', {
                children: (0, m.jsx)('i', {
                  children:
                    (P().b[0][0]++,
                    (null == e ? void 0 : e.statusText) ||
                      (P().b[0][1]++, null == e ? void 0 : e.message))
                })
              }),
              (0, m.jsx)('p', {
                children: (0, m.jsx)(r.rU, { to: '/', children: 'Go to the home page' })
              })
            ]
          })
        );
      };
      function w() {
        var e =
            'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\queryReactTemplate\\src\\index.tsx',
          n = new Function('return this')(),
          t = '__coverage__',
          l = n[t] || (n[t] = {});
        (l[e] && 'b6a0c35c05dc45054aed0490866667a3e2047475' === l[e].hash) ||
          (l[e] = {
            path: 'C:\\Users\\alanl\\Documents\\Documents_Alan\\development\\queryReactTemplate\\src\\index.tsx',
            statementMap: {
              0: { start: { line: 10, column: 15 }, end: { line: 20, column: 1 } },
              1: { start: { line: 22, column: 13 }, end: { line: 22, column: 70 } },
              2: { start: { line: 24, column: 0 }, end: { line: 28, column: 2 } }
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0 },
            f: {},
            b: {},
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'b6a0c35c05dc45054aed0490866667a3e2047475'
          });
        var a = l[e];
        return (
          (w = function () {
            return a;
          }),
          a
        );
      }
      w();
      var F =
          (w().s[0]++,
          (0, r.aj)(
            [
              {
                path: '/',
                element: (0, m.jsx)(N, {}),
                errorElement: (0, m.jsx)(C, {}),
                children: [{ index: !0, element: (0, m.jsx)(h, {}) }]
              }
            ],
            { basename: '/reactTemplate' }
          )),
        O = (w().s[1]++, (0, a.s)(document.getElementById('app')));
      w().s[2]++,
        O.render(
          (0, m.jsx)(l.StrictMode, {
            children: (0, m.jsx)(c.pG, {
              router: F,
              fallbackElement: (0, m.jsx)('p', { children: 'Loading...' })
            })
          })
        );
    }
  },
  (e) => {
    e.O(0, [216], () => {
      return (n = 372), e((e.s = n));
      var n;
    });
    e.O();
  }
]);
