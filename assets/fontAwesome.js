window.FontAwesomeCdnConfig = {
    autoA11y: {
        enabled: false,
    },
    asyncLoading: {
        enabled: false,
    },
    reporting: {
        enabled: false,
    },
    useUrl: 'use.fontawesome.com',
    faCdnUrl: 'https://cdn.fontawesome.com:443',
    code: '840a321d95',
};
!(function() {
    function a(a) {
        let b;
    let c = [];
        const d = document;
    const e = d.documentElement.doScroll;
        let f = 'DOMContentLoaded';
        let g = (e ? /^loaded|^c/ : /^loaded|^i|^c/).test(d.readyState);
        g ||
      d.addEventListener(
          f,
          (b = function() {
              for (d.removeEventListener(f, b), g = 1; (b = c.shift()); ) b();
          })
      ),
        g ? setTimeout(a, 0) : c.push(a);
    }
    function b(a, b) {
        let c = !1;
        return (
            a.split(',').forEach(function(a) {
                const d = new RegExp(
                    a
                        .trim()
                        .replace('.', '\\.')
                        .replace('*', '(.*)')
                );
                b.match(d) && (c = !0);
            }),
            c
        );
    }
    function c(a) {
        typeof MutationObserver !== 'undefined' &&
      new MutationObserver(a).observe(document, { childList: !0, subtree: !0 });
    }
    function d(a) {
        let b;
        let c;
        let d;
        let e;
        (a = a || 'fa'),
        (b = document.querySelectorAll(`.${a}`)),
        Array.prototype.forEach.call(b, function(a) {
            (c = a.getAttribute('title')),
            a.setAttribute('aria-hidden', 'true'),
            (d = a.nextElementSibling
                ? !a.nextElementSibling.classList.contains('sr-only')
                : !0),
            c &&
            d &&
            ((e = document.createElement('span')),
            (e.innerHTML = c),
            e.classList.add('sr-only'),
            a.parentNode.insertBefore(e, a.nextSibling));
        });
    }
    !(function() {
    function a(a) {
            l.push(a), l.length == 1 && k();
        }
        function b() {
            for (; l.length; ) l[0](), l.shift();
        }
        function c(a) {
            (this.a = m), (this.b = void 0), (this.f = []);
            const b = this;
            try {
                a(
                    function(a) {
                        f(b, a);
                    },
                    function(a) {
                        g(b, a);
                    }
                );
            }
 catch (c) {
                g(b, c);
            }
        }
        function d(a) {
            return new c(function(b, c) {
                c(a);
            });
        }
        function e(a) {
            return new c(function(b) {
                b(a);
            });
        }
        function f(a, b) {
            if (a.a == m) {
                if (b == a) throw new TypeError();
                let c = !1;
                try {
                    const d = b && b.then;
                    if (b != null && typeof b === 'object' && typeof d === 'function')
                        return void d.call(
                            b,
                            function(b) {
                                c || f(a, b), (c = !0);
                            },
                            function(b) {
                                c || g(a, b), (c = !0);
                            }
                        );
                }
 catch (e) {
                    return void (c || g(a, e));
                }
                (a.a = 0), (a.b = b), h(a);
            }
        }
        function g(a, b) {
            if (a.a == m) {
                if (b == a) throw new TypeError();
                (a.a = 1), (a.b = b), h(a);
            }
        }
        function h(b) {
            a(function() {
                if (b.a != m)
                    for (; b.f.length; ) {
                        var a = b.f.shift();
            var c = a[0];
                        var d = a[1];
                        const e = a[2];
            var a = a[3];
                        try {
                            0 == b.a
                                ? e(typeof c === 'function' ? c.call(void 0, b.b) : b.b)
                                : b.a == 1 &&
                  (typeof d === 'function' ? e(d.call(void 0, b.b)) : a(b.b));
                        }
 catch (f) {
                            a(f);
                        }
                    }
            });
        }
        function i(a) {
            return new c(function(b, c) {
                function d(c) {
                    return function(d) {
                        (g[c] = d), (f += 1), f == a.length && b(g);
                    };
                }
                var f = 0;
                var g = [];
                0 == a.length && b(g);
                for (let h = 0; h < a.length; h += 1) e(a[h]).c(d(h), c);
            });
        }
        function j(a) {
            return new c(function(b, c) {
                for (let d = 0; d < a.length; d += 1) e(a[d]).c(b, c);
            });
        }
        let k;
        var l = [];
        k = function() {
            setTimeout(b);
        };
        var m = 2;
        (c.prototype.g = function(a) {
            return this.c(void 0, a);
        }),
        (c.prototype.c = function(a, b) {
            const d = this;
            return new c(function(c, e) {
                d.f.push([a, b, c, e]), h(d);
            });
        }),
        window.Promise ||
        ((window.Promise = c),
        (window.Promise.resolve = e),
        (window.Promise.reject = d),
        (window.Promise.race = j),
        (window.Promise.all = i),
        (window.Promise.prototype.then = c.prototype.c),
        (window.Promise.prototype.catch = c.prototype.g));
    })(),
    (function() {
        function a(a) {
            this.el = a;
            for (
                let b = a.className.replace(/^\s+|\s+$/g, '').split(/\s+/), c = 0;
                c < b.length;
                c++
            )
                d.call(this, b[c]);
        }
        function b(a, b, c) {
            Object.defineProperty
                ? Object.defineProperty(a, b, { get: c })
                : a.__defineGetter__(b, c);
        }
        if (
            !(
                typeof window.Element === 'undefined' ||
          'classList' in document.documentElement
            )
        ) {
            const c = Array.prototype;
            var d = c.push;
            const e = c.splice;
            var f = c.join;
            (a.prototype = {
                add: function(a) {
                    this.contains(a) ||
              (d.call(this, a), (this.el.className = this.toString()));
                },
                contains(a) {
            return this.el.className.indexOf(a) != -1;
          },
                item: function(a) {
                    return this[a] || null;
                },
                remove(a) {
            if (this.contains(a)) {
              for (var b = 0; b < this.length && this[b] != a; b++);
              e.call(this, b, 1), (this.el.className = this.toString());
            }
          },
                toString: function() {
                    return f.call(this, ' ');
                },
                toggle(a) {
            return (
              this.contains(a) ? this.remove(a) : this.add(a), this.contains(a)
            );
          },
            }),
            (window.DOMTokenList = a),
            b(Element.prototype, 'classList', function() {
                return new a(this);
            });
        }
    })();
    const e = function(a, b, c) {
        function d(a) {
            return g.body
                ? a()
                : void setTimeout(function() {
                    d(a);
                });
        }
        function e() {
            h.addEventListener && h.removeEventListener('load', e),
        (h.media = c || 'all');
    }
        let f;
        var g = window.document;
        var h = g.createElement('link');
        if (b) f = b;
    else {
            const i = (g.body || g.getElementsByTagName('head')[0]).childNodes;
      f = i[i.length - 1];
        }
    const j = g.styleSheets;
    (h.rel = 'stylesheet'),
      (h.href = a),
        (h.media = 'only x'),
      d(function() {
            f.parentNode.insertBefore(h, b ? f : f.nextSibling);
      });
        var k = function(a) {
      for (let b = h.href, c = j.length; c--; ) if (j[c].href === b) return a();
      setTimeout(function() {
                k(a);
            });
        };
        return (
      h.addEventListener && h.addEventListener('load', e),
      (h.onloadcssdefined = k),
            k(e),
            h
        );
    };
    let f = null;
    !(function() {
        function a(a, b) {
            document.addEventListener
                ? a.addEventListener('scroll', b, !1)
                : a.attachEvent('scroll', b);
        }
        function b(a) {
            document.body
                ? a()
                : document.addEventListener
                    ? document.addEventListener('DOMContentLoaded', function b() {
                        document.removeEventListener('DOMContentLoaded', b), a();
                    })
                    : document.attachEvent('onreadystatechange', function c() {
                        (document.readyState != 'interactive' &&
              document.readyState != 'complete') ||
              (document.detachEvent('onreadystatechange', c), a());
                    });
        }
        function c(a) {
            (this.a = document.createElement('div')),
            this.a.setAttribute('aria-hidden', 'true'),
            this.a.appendChild(document.createTextNode(a)),
            (this.b = document.createElement('span')),
            (this.c = document.createElement('span')),
            (this.h = document.createElement('span')),
            (this.f = document.createElement('span')),
            (this.g = -1),
            (this.b.style.cssText =
          'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'),
            (this.c.style.cssText =
          'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'),
            (this.f.style.cssText =
          'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'),
            (this.h.style.cssText =
          'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;'),
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c);
        }
        function d(a, b) {
            a.a.style.cssText = `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:${b};`;
        }
        function e(a) {
            const b = a.a.offsetWidth;
      const c = b + 100;
            return (
                (a.f.style.width = `${c}px`),
                (a.c.scrollLeft = c),
                (a.b.scrollLeft = a.b.scrollWidth + 100),
                a.g !== b ? ((a.g = b), !0) : !1
            );
        }
        function g(b, c) {
            function d() {
                const a = f;
                e(a) && a.a.parentNode && c(a.g);
            }
            var f = b;
            a(b.b, d), a(b.c, d), e(b);
        }
        function h(a, b) {
            const c = b || {};
            (this.family = a),
            (this.style = c.style || 'normal'),
            (this.weight = c.weight || 'normal'),
            (this.stretch = c.stretch || 'normal');
        }
        function i() {
            if (l === null) {
                const a = document.createElement('div');
                try {
                    a.style.font = 'condensed 100px sans-serif';
                }
 catch (b) {}
                l = a.style.font !== '';
            }
            return l;
        }
        function j(a, b) {
            return [a.style, a.weight, i() ? a.stretch : '', '100px', b].join(' ');
        }
        let k = null;
        var l = null;
        let m = null;
        (h.prototype.load = function(a, e) {
            const f = this;
            const h = a || 'BESbswy';
            const i = e || 3e3;
            const l = new Date().getTime();
            return new Promise(function(a, e) {
                if ((m === null && (m = !!window.FontFace), m)) {
                    const n = new Promise(function(a, b) {
            function c() {
                            new Date().getTime() - l >= i
                ? b()
                                : document.fonts.load(j(f, f.family), h).then(
                                    function(b) {
                                        b.length >= 1 ? a() : setTimeout(c, 25);
                    },
                                    function() {
                                        b();
                                    }
                                );
                        }
                        c();
                    });
                    const o = new Promise(function(a, b) {
            setTimeout(b, i);
          });
                    Promise.race([o, n]).then(
                        function() {
                            a(f);
                        },
                        function() {
                            e(f);
                        }
                    );
                }
 else
                    b(function() {
                        function b() {
                            let b;
                            (b =
                (q != -1 && r != -1) ||
                (q != -1 && s != -1) ||
                (r != -1 && s != -1)) &&
                ((b = q != r && q != s && r != s) ||
                  (k === null &&
                    ((b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                        window.navigator.userAgent
                    )),
                    (k =
                      !!b &&
                      (parseInt(b[1], 10) < 536 ||
                        (parseInt(b[1], 10) === 536 &&
                          parseInt(b[2], 10) <= 11)))),
                  (b =
                    k &&
                    ((q == t && r == t && s == t) ||
                      (q == u && r == u && s == u) ||
                      (q == v && r == v && s == v)))),
                (b = !b)),
                            b &&
                  (w.parentNode && w.parentNode.removeChild(w),
                  clearTimeout(x),
                  a(f));
                        }
                        function m() {
                            if (new Date().getTime() - l >= i)
                                w.parentNode && w.parentNode.removeChild(w), e(f);
                            else {
                                const a = document.hidden;
                                (!0 !== a && void 0 !== a) ||
                  ((q = n.a.offsetWidth),
                  (r = o.a.offsetWidth),
                  (s = p.a.offsetWidth),
                  b()),
                                (x = setTimeout(m, 50));
                            }
                        }
                        var n = new c(h);
                        var o = new c(h);
            var p = new c(h);
                        var q = -1;
            var r = -1;
                        var s = -1;
                        var t = -1;
            var u = -1;
                        var v = -1;
            var w = document.createElement('div');
            var x = 0;
                        (w.dir = 'ltr'),
                        d(n, j(f, 'sans-serif')),
                        d(o, j(f, 'serif')),
                        d(p, j(f, 'monospace')),
                        w.appendChild(n.a),
                        w.appendChild(o.a),
                        w.appendChild(p.a),
                        document.body.appendChild(w),
                        (t = n.a.offsetWidth),
                        (u = o.a.offsetWidth),
                        (v = p.a.offsetWidth),
                        m(),
                        g(n, function(a) {
                            (q = a), b();
                        }),
                        d(n, j(f, `"${f.family}",sans-serif`)),
                        g(o, function(a) {
                            (r = a), b();
                        }),
                        d(o, j(f, `"${f.family}",serif`)),
                        g(p, function(a) {
                            (s = a), b();
                        }),
                        d(p, j(f, `"${f.family}",monospace`));
                    });
            });
        }),
        (f = h);
    })();
    const g = {
    observe: function(a, b) {
            for (
        var c = b.prefix,
                    d = function(a) {
                        const b = a.weight ? `-${a.weight}` : '';
            const d = a.style ? `-${a.style}` : '';
                        const e = a.className ? `-${a.className}` : '';
                        const g = a.className ? `-${a.className}${b}${d}` : '';
                        const h = document.getElementsByTagName('html')[0].classList;
            const i = function(a) {
                            h.add(`${c + e}-${a}`), h.add(`${c + g}-${a}`);
            };
                        const j = function(a) {
                            h.remove(`${c + e}-${a}`), h.remove(`${c + g}-${a}`);
            };
                        i('loading'),
                        new f(a.familyName).load(a.testString).then(
                function() {
                                i('ready'), j('loading');
                },
                            function() {
                                i('failed'), j('loading');
                }
                        );
                    },
                    e = 0;
        e < a.length;
        e++
      )
                d(a[e]);
    },
  };
    const h = {
        load(a) {
      const b = document.createElement('link');
      (b.href = a),
        (b.media = 'all'),
        (b.rel = 'stylesheet'),
        document.getElementsByTagName('head')[0].appendChild(b);
        },
        loadAsync(a) {
      e(a);
        },
    };
    const i = {
    load(a) {
      const b = document.createElement('script');
      const c = document.scripts[0];
      (b.src = a), c.parentNode.appendChild(b);
    },
  };
    try {
        if (window.FontAwesomeCdnConfig) {
            const j = window.FontAwesomeCdnConfig;
            const k = j.useUrl;
      const l = j.faCdnUrl;
            const m = j.code;
            const n = 'FontAwesome';
            const o = 'fa';
            const p = '';
      const q = d.bind(d, 'fa');
      const r = function() {};
            j.autoA11y.enabled && (a(q), c(q)),
            j.reporting.enabled &&
          b(j.reporting.domains, location.host) &&
          i.load(`${l}/js/stats.js`),
            (cssUrl = `https://${k}/${m}.css`),
            new f(n).load(p).then(function() {
                const a = (window.FontAwesomeHooks || {}).loaded || r;
                a();
            }, r),
            j.asyncLoading.enabled ? h.loadAsync(cssUrl) : h.load(cssUrl),
            g.observe([{ familyName: n, testString: p }], {
                prefix: `${o}-events-icons`,
            });
        }
    }
 catch (s) {}
})();
