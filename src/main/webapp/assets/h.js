(function () {
    var h = {}, mt = {}, c = {
        id: "31589adaafcdee0269f5b28ec8ac344c",
        dm: ["kechenggezi.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [],
        icon: '/hmt/icon/21|gif|20|20',
        ctrk: false,
        align: -1,
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 0,
        vcard: 0,
        qiao: 0,
        lxb: 0,
        conv: 0,
        med: 0,
        cvcc: '',
        cvcf: [],
        apps: ''
    };
    var q = void 0, r = !0, s = null, t = !1;
    mt.i = {};
    mt.i.Ba = /msie (\d+\.\d+)/i.test(navigator.userAgent);
    mt.i.za = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : q;
    mt.i.cookieEnabled = navigator.cookieEnabled;
    mt.i.javaEnabled = navigator.javaEnabled();
    mt.i.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
    mt.i.Da = (window.screen.width || 0) + "x" + (window.screen.height || 0);
    mt.i.colorDepth = window.screen.colorDepth || 0;
    mt.cookie = {};
    mt.cookie.set = function (a, d, f) {
        var e;
        f.H && (e = new Date, e.setTime(e.getTime() + f.H));
        document.cookie = a + "=" + d + (f.domain ? "; domain=" + f.domain : "") + (f.path ? "; path=" + f.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (f.Za ? "; secure" : "")
    };
    mt.cookie.get = function (a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : s
    };
    mt.p = {};
    mt.p.ma = function (a) {
        return document.getElementById(a)
    };
    mt.p.Ta = function (a, d) {
        for (d = d.toUpperCase(); (a = a.parentNode) && 1 == a.nodeType;)if (a.tagName == d)return a;
        return s
    };
    (mt.p.X = function () {
        function a() {
            if (!a.B) {
                a.B = r;
                for (var d = 0, f = e.length; d < f; d++)e[d]()
            }
        }

        function d() {
            try {
                document.documentElement.doScroll("left")
            } catch (e) {
                setTimeout(d, 1);
                return
            }
            a()
        }

        var f = t, e = [], k;
        document.addEventListener ? k = function () {
            document.removeEventListener("DOMContentLoaded", k, t);
            a()
        } : document.attachEvent && (k = function () {
                "complete" === document.readyState && (document.detachEvent("onreadystatechange", k), a())
            });
        (function () {
            if (!f)if (f = r, "complete" === document.readyState) a.B = r; else if (document.addEventListener) document.addEventListener("DOMContentLoaded",
                k, t), window.addEventListener("load", a, t); else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", k);
                window.attachEvent("onload", a);
                var e = t;
                try {
                    e = window.frameElement == s
                } catch (n) {
                }
                document.documentElement.doScroll && e && d()
            }
        })();
        return function (d) {
            a.B ? d() : e.push(d)
        }
    }()).B = t;
    mt.event = {};
    mt.event.c = function (a, d, f) {
        a.attachEvent ? a.attachEvent("on" + d, function (e) {
            f.call(a, e)
        }) : a.addEventListener && a.addEventListener(d, f, t)
    };
    mt.event.preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = t
    };
    mt.j = {};
    mt.j.parse = function () {
        return (new Function('return (" + source + ")'))()
    };
    mt.j.stringify = function () {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var d = f[a];
                if (d)return d;
                d = a.charCodeAt();
                return "\\u00" + Math.floor(d / 16).toString(16) + (d % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function d(a) {
            return 10 > a ? "0" + a : a
        }

        var f = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (e) {
            switch (typeof e) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "string":
                    return a(e);
                case "boolean":
                    return String(e);
                default:
                    if (e === s)return "null";
                    if (e instanceof Array) {
                        var f = ["["], l = e.length, n, p, g;
                        for (p = 0; p < l; p++)switch (g = e[p], typeof g) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                n && f.push(","), f.push(mt.j.stringify(g)), n = 1
                        }
                        f.push("]");
                        return f.join("")
                    }
                    if (e instanceof Date)return '"' + e.getFullYear() + "-" + d(e.getMonth() + 1) + "-" + d(e.getDate()) + "T" + d(e.getHours()) + ":" + d(e.getMinutes()) + ":" + d(e.getSeconds()) + '"';
                    n = ["{"];
                    p = mt.j.stringify;
                    for (l in e)if (Object.prototype.hasOwnProperty.call(e, l))switch (g =
                        e[l], typeof g) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            f && n.push(","), f = 1, n.push(p(l) + ":" + p(g))
                    }
                    n.push("}");
                    return n.join("")
            }
        }
    }();
    mt.lang = {};
    mt.lang.d = function (a, d) {
        return "[object " + d + "]" === {}.toString.call(a)
    };
    mt.lang.Wa = function (a) {
        return mt.lang.d(a, "Number") && isFinite(a)
    };
    mt.lang.Ya = function (a) {
        return mt.lang.d(a, "String")
    };
    mt.localStorage = {};
    mt.localStorage.F = function () {
        if (!mt.localStorage.g)try {
            mt.localStorage.g = document.createElement("input"), mt.localStorage.g.type = "hidden", mt.localStorage.g.style.display = "none", mt.localStorage.g.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g)
        } catch (a) {
            return t
        }
        return r
    };
    mt.localStorage.set = function (a, d, f) {
        var e = new Date;
        e.setTime(e.getTime() + f || 31536E6);
        try {
            window.localStorage ? (d = e.getTime() + "|" + d, window.localStorage.setItem(a, d)) : mt.localStorage.F() && (mt.localStorage.g.expires = e.toUTCString(), mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.setAttribute(a, d), mt.localStorage.g.save(document.location.hostname))
        } catch (k) {
        }
    };
    mt.localStorage.get = function (a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var d = a.indexOf("|"), f = a.substring(0, d) - 0;
                if (f && f > (new Date).getTime())return a.substring(d + 1)
            }
        } else if (mt.localStorage.F())try {
            return mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.getAttribute(a)
        } catch (e) {
        }
        return s
    };
    mt.localStorage.remove = function (a) {
        if (window.localStorage) window.localStorage.removeItem(a); else if (mt.localStorage.F())try {
            mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.removeAttribute(a), mt.localStorage.g.save(document.location.hostname)
        } catch (d) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (a, d) {
        if (window.sessionStorage)try {
            window.sessionStorage.setItem(a, d)
        } catch (f) {
        }
    };
    mt.sessionStorage.get = function (a) {
        return window.sessionStorage ? window.sessionStorage.getItem(a) : s
    };
    mt.sessionStorage.remove = function (a) {
        window.sessionStorage && window.sessionStorage.removeItem(a)
    };
    mt.Y = {};
    mt.Y.log = function (a, d) {
        var f = new Image, e = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[e] = f;
        f.onload = f.onerror = f.onabort = function () {
            f.onload = f.onerror = f.onabort = s;
            f = window[e] = s;
            d && d(a)
        };
        f.src = a
    };
    mt.D = {};
    mt.D.ra = function () {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var d = navigator.plugins["Shockwave Flash"];
            d && d.description && (a = d.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject)try {
            if (d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (a = d.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (f) {
        }
        return a
    };
    mt.D.ea = function (a, d, f, e, k) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + f + '" height="' + e + '"><param name="movie" value="' + d + '" /><param name="flashvars" value="' + (k || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + f + '" height="' + e + '" src="' + d + '" flashvars="' + (k || "") + '" allowscriptaccess="always" /></object>'
    };
    mt.url = {};
    mt.url.f = function (a, d) {
        var f = a.match(RegExp("(^|&|\\?|#)(" + d + ")=([^&#]*)(&|$|#)", ""));
        return f ? f[3] : s
    };
    mt.url.Va = function (a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : s
    };
    mt.url.oa = function (a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : s
    };
    mt.url.S = function (a) {
        return (a = mt.url.oa(a)) ? a.replace(/:\d+$/, "") : a
    };
    mt.url.Ua = function (a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : s
    };
    (function () {
        function a() {
            for (var a = t, f = document.getElementsByTagName("script"), e = f.length, e = 100 < e ? 100 : e,
                     k = 0; k < e; k++) {
                var l = f[k].src;
                if (l && 0 === l.indexOf("https://hm.baidu.com/h")) {
                    a = r;
                    break
                }
            }
            return a
        }

        return h.la = a
    })();
    var A = h.la;
    h.s = {
        ya: "http://tongji.baidu.com/hm-web/welcome/ico",
        W: "hm.baidu.com/hm.gif",
        ba: "baidu.com",
        va: "hmmd",
        wa: "hmpl",
        Ma: "utm_medium",
        ua: "hmkw",
        Oa: "utm_term",
        sa: "hmci",
        La: "utm_content",
        xa: "hmsr",
        Na: "utm_source",
        ta: "hmcu",
        Ka: "utm_campaign",
        o: 0,
        k: Math.round(+new Date / 1E3),
        Q: Math.round(+new Date / 1E3) % 65535,
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        L: A() || "https:" === document.location.protocol ? "https:" : "http:",
        Xa: 0,
        Qa: 6E5,
        Ra: 10,
        Sa: 1024,
        Pa: 1,
        M: 2147483647,
        Z: "cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api sn ct u tt".split(" ")
    };
    (function () {
        var a = {
            m: {}, c: function (a, f) {
                this.m[a] = this.m[a] || [];
                this.m[a].push(f)
            }, w: function (a, f) {
                this.m[a] = this.m[a] || [];
                for (var e = this.m[a].length, k = 0; k < e; k++)this.m[a][k](f)
            }
        };
        return h.z = a
    })();
    (function () {
        function a(a, e) {
            var k = document.createElement("script");
            k.charset = "utf-8";
            d.d(e, "Function") && (k.readyState ? k.onreadystatechange = function () {
                if ("loaded" === k.readyState || "complete" === k.readyState) k.onreadystatechange = s, e()
            } : k.onload = function () {
                e()
            });
            k.src = a;
            var l = document.getElementsByTagName("script")[0];
            l.parentNode.insertBefore(k, l)
        }

        var d = mt.lang;
        return h.load = a
    })();
    (function () {
        var a = h.s, d = mt.D, f = {
            init: function () {
                if ("" !== c.icon) {
                    var e;
                    e = c.icon.split("|");
                    var f = a.ya + "?s=" + c.id,
                        l = ("http:" == a.protocol ? "http://eiv" : "https://bs") + ".baidu.com" + e[0] + "." + e[1];
                    switch (e[1]) {
                        case "swf":
                            e = d.ea("HolmesIcon" + a.k, l, e[2], e[3], "s=" + f);
                            break;
                        case "gif":
                            e = '<a href="' + f + '" target="_blank"><img border="0" src="' + l + '" width="' + e[2] + '" height="' + e[3] + '"></a>';
                            break;
                        default:
                            e = '<a href="' + f + '" target="_blank">' + e[0] + "</a>"
                    }
                    document.write(e)
                }
            }
        };
        h.z.c("pv-b", f.init);
        return f
    })();
    (function () {
        function a() {
            return function () {
                h.b.a.nv = 0;
                h.b.a.st = 4;
                h.b.a.et = 3;
                h.b.a.ep = h.G.pa() + "," + h.G.na();
                h.b.h()
            }
        }

        function d() {
            clearTimeout(y);
            var a;
            x && (a = "visible" == document[x]);
            z && (a = !document[z]);
            p = "undefined" == typeof a ? r : a;
            if ((!n || !g) && p && b) v = r, m = +new Date; else if (n && g && (!p || !b)) v = t, u += +new Date - m;
            n = p;
            g = b;
            y = setTimeout(d, 100)
        }

        function f(b) {
            var a = document, m = "";
            if (b in a) m = b; else for (var u = ["webkit", "ms", "moz", "o"], e = 0; e < u.length; e++) {
                var d = u[e] + b.charAt(0).toUpperCase() + b.slice(1);
                if (d in a) {
                    m =
                        d;
                    break
                }
            }
            return m
        }

        function e(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) b = "focus" == a.type || "focusin" == a.type ? r : t, d()
        }

        var k = mt.event, l = h.z, n = r, p = r, g = r, b = r, w = +new Date, m = w, u = 0, v = r,
            x = f("visibilityState"), z = f("hidden"), y;
        d();
        (function () {
            var b = x.replace(/[vV]isibilityState/, "visibilitychange");
            k.c(document, b, d);
            k.c(window, "pageshow", d);
            k.c(window, "pagehide", d);
            "object" == typeof document.onfocusin ? (k.c(document, "focusin", e), k.c(document, "focusout", e)) : (k.c(window, "focus", e),
                k.c(window, "blur", e))
        })();
        h.G = {
            pa: function () {
                return +new Date - w
            }, na: function () {
                return v ? +new Date - m + u : u
            }
        };
        l.c("pv-b", function () {
            k.c(window, "unload", a())
        });
        return h.G
    })();
    (function () {
        var a = mt.lang, d = h.s, f = h.load, e = {
            Aa: function (e) {
                if ((window._dxt === q || a.d(window._dxt, "Array")) && "undefined" !== typeof h.b) {
                    var l = h.b.I();
                    f([d.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(l)].join(""), e)
                }
            }, Ja: function (e) {
                if (a.d(e, "String") || a.d(e, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", e])
            }
        };
        return h.fa = e
    })();
    (function () {
        function a(b, a, m, e) {
            if (!(b === q || a === q || e === q)) {
                if ("" === b)return [a, m, e].join("*");
                b = String(b).split("!");
                for (var d, f = t, g = 0; g < b.length; g++)if (d = b[g].split("*"), String(a) === d[0]) {
                    d[1] = m;
                    d[2] = e;
                    b[g] = d.join("*");
                    f = r;
                    break
                }
                f || b.push([a, m, e].join("*"));
                return b.join("!")
            }
        }

        function d(b) {
            for (var a in b)if ({}.hasOwnProperty.call(b, a)) {
                var m = b[a];
                e.d(m, "Object") || e.d(m, "Array") ? d(m) : b[a] = String(m)
            }
        }

        function f(b) {
            return b.replace ? b.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : b
        }

        var e =
            mt.lang, k = mt.j, l = h.s, n = h.z, p = h.fa, g = {
            r: [], C: 0, U: t, l: {P: "", page: ""}, init: function () {
                g.e = 0;
                n.c("pv-b", function () {
                    g.ga();
                    g.ia()
                });
                n.c("pv-d", function () {
                    g.ka();
                    g.l.page = ""
                });
                n.c("stag-b", function () {
                    h.b.a.api = g.e || g.C ? g.e + "_" + g.C : "";
                    h.b.a.ct = [decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), g.l.P, g.l.page].join("!")
                });
                n.c("stag-d", function () {
                    h.b.a.api = 0;
                    g.e = 0;
                    g.C = 0
                })
            }, ga: function () {
                var b = window._hmt || [];
                if (!b || e.d(b, "Array")) window._hmt = {
                    id: c.id, cmd: {}, push: function () {
                        for (var b = window._hmt, a = 0; a < arguments.length; a++) {
                            var d =
                                arguments[a];
                            e.d(d, "Array") && (b.cmd[b.id].push(d), "_setAccount" === d[0] && (1 < d.length && /^[0-9a-f]{32}$/.test(d[1])) && (d = d[1], b.id = d, b.cmd[d] = b.cmd[d] || []))
                        }
                    }
                }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, b)
            }, ia: function () {
                var b = window._hmt;
                if (b && b.cmd && b.cmd[c.id])for (var a = b.cmd[c.id], m = /^_track(Event|MobConv|Order|RTEvent)$/,
                                                       d = 0, e = a.length; d < e; d++) {
                    var f = a[d];
                    m.test(f[0]) ? g.r.push(f) : g.N(f)
                }
                b.cmd[c.id] = {push: g.N}
            }, ka: function () {
                if (0 < g.r.length)for (var b = 0, a = g.r.length; b < a; b++)g.N(g.r[b]);
                g.r = s
            }, N: function (b) {
                var a = b[0];
                if (g.hasOwnProperty(a) && e.d(g[a], "Function")) g[a](b)
            }, _setAccount: function (b) {
                1 < b.length && /^[0-9a-f]{32}$/.test(b[1]) && (g.e |= 1)
            }, _setAutoPageview: function (b) {
                if (1 < b.length && (b = b[1], t === b || r === b)) g.e |= 2, h.b.T = b
            }, _trackPageview: function (b) {
                if (1 < b.length && b[1].charAt && "/" === b[1].charAt(0)) {
                    g.e |= 4;
                    h.b.a.et = 0;
                    h.b.a.ep = "";
                    h.b.J ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.J = r;
                    var a = h.b.a.u, m = h.b.a.su;
                    h.b.a.u = l.protocol + "//" + document.location.host + b[1];
                    g.U || (h.b.a.su = document.location.href);
                    h.b.h();
                    h.b.a.u = a;
                    h.b.a.su = m
                }
            }, _trackEvent: function (b) {
                2 < b.length && (g.e |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = f(b[1]) + "*" + f(b[2]) + (b[3] ? "*" + f(b[3]) : "") + (b[4] ? "*" + f(b[4]) : ""), h.b.h())
            }, _setCustomVar: function (b) {
                if (!(4 > b.length)) {
                    var a = b[1], m = b[4] || 3;
                    if (0 < a && 6 > a && 0 < m && 4 > m) {
                        g.C++;
                        for (var d = (h.b.a.cv || "*").split("!"), e = d.length; e < a - 1; e++)d.push("*");
                        d[a - 1] = m + "*" + f(b[2]) + "*" + f(b[3]);
                        h.b.a.cv = d.join("!");
                        b = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                        "" !== b ? h.b.setData("Hm_cv_" +
                            c.id, encodeURIComponent(b), c.age) : h.b.Ca("Hm_cv_" + c.id)
                    }
                }
            }, _setUserTag: function (b) {
                if (!(3 > b.length)) {
                    var d = f(b[1]);
                    b = f(b[2]);
                    if (d !== q && b !== q) {
                        var m = decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), m = a(m, d, 1, b);
                        h.b.setData("Hm_ct_" + c.id, encodeURIComponent(m), c.age)
                    }
                }
            }, _setVisitTag: function (b) {
                if (!(3 > b.length)) {
                    var d = f(b[1]);
                    b = f(b[2]);
                    if (d !== q && b !== q) {
                        var m = g.l.P, m = a(m, d, 2, b);
                        g.l.P = m
                    }
                }
            }, _setPageTag: function (b) {
                if (!(3 > b.length)) {
                    var d = f(b[1]);
                    b = f(b[2]);
                    if (d !== q && b !== q) {
                        var m = g.l.page, m = a(m, d, 3, b);
                        g.l.page = m
                    }
                }
            }, _setReferrerOverride: function (b) {
                1 < b.length && (h.b.a.su = b[1].charAt && "/" === b[1].charAt(0) ? l.protocol + "//" + window.location.host + b[1] : b[1], g.U = r)
            }, _trackOrder: function (b) {
                b = b[1];
                e.d(b, "Object") && (d(b), g.e |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = k.stringify(b), h.b.h())
            }, _trackMobConv: function (b) {
                if (b = {
                        webim: 1,
                        tel: 2,
                        map: 3,
                        sms: 4,
                        callback: 5,
                        share: 6
                    }[b[1]]) g.e |= 32, h.b.a.et = 93, h.b.a.ep = b, h.b.h()
            }, _trackRTPageview: function (b) {
                b = b[1];
                e.d(b, "Object") && (d(b), b = k.stringify(b), 512 >= encodeURIComponent(b).length &&
                (g.e |= 64, h.b.a.rt = b))
            }, _trackRTEvent: function (b) {
                b = b[1];
                if (e.d(b, "Object")) {
                    d(b);
                    b = encodeURIComponent(k.stringify(b));
                    var a = function (a) {
                        var b = h.b.a.rt;
                        g.e |= 128;
                        h.b.a.et = 90;
                        h.b.a.rt = a;
                        h.b.h();
                        h.b.a.rt = b
                    }, m = b.length;
                    if (900 >= m) a.call(this, b); else for (var m = Math.ceil(m / 900),
                                                                 f = "block|" + Math.round(Math.random() * l.M).toString(16) + "|" + m + "|",
                                                                 v = [],
                                                                 x = 0; x < m; x++)v.push(x), v.push(b.substring(900 * x, 900 * x + 900)), a.call(this, f + v.join("|")), v = []
                }
            }, _setUserId: function (a) {
                a = a[1];
                p.Aa();
                p.Ja(a)
            }
        };
        g.init();
        h.ca = g;
        return h.ca
    })();
    (function () {
        function a() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = r, this.a = {}, this.T = r, this.J = t, this.init())
        }

        var d = mt.url, f = mt.Y, e = mt.D, k = mt.lang, l = mt.cookie, n = mt.i, p = mt.localStorage,
            g = mt.sessionStorage, b = h.s, w = h.z;
        a.prototype = {
            K: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            }, V: function (a, b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, A: function (a) {
                for (var b = 0; b < c.dm.length; b++)if (-1 <
                    c.dm[b].indexOf("/")) {
                    if (this.V(a, c.dm[b]))return r
                } else {
                    var e = d.S(a);
                    if (e && this.K(e, c.dm[b]))return r
                }
                return t
            }, I: function () {
                for (var a = document.location.hostname, b = 0,
                         d = c.dm.length; b < d; b++)if (this.K(a, c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
                return a
            }, R: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.V(document.location.href, d))return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            }, qa: function () {
                if (!document.referrer)return b.k - b.o > c.vdur ? 1 : 4;
                var a =
                    t;
                this.A(document.referrer) && this.A(document.location.href) ? a = r : (a = d.S(document.referrer), a = this.K(a || "", document.location.hostname));
                return a ? b.k - b.o > c.vdur ? 1 : 4 : 3
            }, getData: function (a) {
                try {
                    return l.get(a) || g.get(a) || p.get(a)
                } catch (b) {
                }
            }, setData: function (a, b, d) {
                try {
                    l.set(a, b, {domain: this.I(), path: this.R(), H: d}), d ? p.set(a, b, d) : g.set(a, b)
                } catch (e) {
                }
            }, Ca: function (a) {
                try {
                    l.set(a, "", {domain: this.I(), path: this.R(), H: -1}), g.remove(a), p.remove(a)
                } catch (b) {
                }
            }, Ha: function () {
                var a, d, e, f, g;
                b.o = this.getData("Hm_lpvt_" +
                        c.id) || 0;
                13 === b.o.length && (b.o = Math.round(b.o / 1E3));
                d = this.qa();
                a = 4 !== d ? 1 : 0;
                if (e = this.getData("Hm_lvt_" + c.id)) {
                    f = e.split(",");
                    for (g = f.length - 1; 0 <= g; g--)13 === f[g].length && (f[g] = "" + Math.round(f[g] / 1E3));
                    for (; 2592E3 < b.k - f[0];)f.shift();
                    g = 4 > f.length ? 2 : 3;
                    for (1 === a && f.push(b.k); 4 < f.length;)f.shift();
                    e = f.join(",");
                    f = f[f.length - 1]
                } else e = b.k, f = "", g = 1;
                this.setData("Hm_lvt_" + c.id, e, c.age);
                this.setData("Hm_lpvt_" + c.id, b.k);
                e = b.k === this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
                if (0 === c.nv && this.A(document.location.href) &&
                    ("" === document.referrer || this.A(document.referrer))) a = 0, d = 4;
                this.a.nv = a;
                this.a.st = d;
                this.a.cc = e;
                this.a.lt = f;
                this.a.lv = g
            }, Ga: function () {
                for (var a = [], d = this.a.et, e = 0, f = b.Z.length; e < f; e++) {
                    var g = b.Z[e], k = this.a[g];
                    "undefined" !== typeof k && "" !== k && ("tt" !== g || "tt" === g && 0 === d) && ("ct" !== g || "ct" === g && 0 === d) && a.push(g + "=" + encodeURIComponent(k))
                }
                switch (d) {
                    case 0:
                        a.push("sn=" + b.Q);
                        this.a.rt && a.push("rt=" + encodeURIComponent(this.a.rt));
                        break;
                    case 3:
                        a.push("sn=" + b.Q);
                        break;
                    case 90:
                        this.a.rt && a.push("rt=" + this.a.rt)
                }
                return a.join("&")
            },
            Ia: function () {
                this.Ha();
                this.a.si = c.id;
                this.a.su = document.referrer;
                this.a.ds = n.Da;
                this.a.cl = n.colorDepth + "-bit";
                this.a.ln = String(n.language).toLowerCase();
                this.a.ja = n.javaEnabled ? 1 : 0;
                this.a.ck = n.cookieEnabled ? 1 : 0;
                this.a.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.a.fl = e.ra();
                this.a.v = "1.2.14";
                this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
                this.a.tt = document.title || "";
                var a = document.location.href;
                this.a.cm = d.f(a, b.va) || "";
                this.a.cp = d.f(a, b.wa) || d.f(a, b.Ma) || "";
                this.a.cw = d.f(a, b.ua) || d.f(a,
                        b.Oa) || "";
                this.a.ci = d.f(a, b.sa) || d.f(a, b.La) || "";
                this.a.cf = d.f(a, b.xa) || d.f(a, b.Na) || "";
                this.a.cu = d.f(a, b.ta) || d.f(a, b.Ka) || ""
            }, init: function () {
                try {
                    this.Ia(), 0 === this.a.nv ? this.Fa() : this.O(".*"), h.b = this, this.da(), w.w("pv-b"), this.Ea()
                } catch (a) {
                    var d = [];
                    d.push("si=" + c.id);
                    d.push("n=" + encodeURIComponent(a.name));
                    d.push("m=" + encodeURIComponent(a.message));
                    d.push("r=" + encodeURIComponent(document.referrer));
                    f.log(b.L + "//" + b.W + "?" + d.join("&"))
                }
            }, Ea: function () {
                function a() {
                    w.w("pv-d")
                }

                this.T ? (this.J = r,
                    this.a.et = 0, this.a.ep = "", this.h(a)) : a()
            }, h: function (a) {
                var d = this;
                d.a.rnd = Math.round(Math.random() * b.M);
                w.w("stag-b");
                var e = b.L + "//" + b.W + "?" + d.Ga();
                w.w("stag-d");
                d.aa(e);
                f.log(e, function (b) {
                    d.O(b);
                    k.d(a, "Function") && a.call(d)
                })
            }, da: function () {
                var a = document.location.hash.substring(1), e = RegExp(c.id), f = -1 < document.referrer.indexOf(b.ba),
                    g = d.f(a, "jn"), k = /^heatlink$|^select$/.test(g);
                a && (e.test(a) && f && k) && (this.a.rnd = Math.round(Math.random() * b.M), a = document.createElement("script"), a.setAttribute("type",
                    "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", b.protocol + "//" + c.js + g + ".js?" + this.a.rnd), g = document.getElementsByTagName("script")[0], g.parentNode.insertBefore(a, g))
            }, aa: function (a) {
                var b = g.get("Hm_unsent_" + c.id) || "",
                    d = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href),
                    b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
                g.set("Hm_unsent_" + c.id, b)
            }, O: function (a) {
                var b = g.get("Hm_unsent_" + c.id) || "";
                b && (a = encodeURIComponent(a.replace(/^https?:\/\//, "")),
                    a = RegExp(a.replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), (b = b.replace(a, "").replace(/,$/, "")) ? g.set("Hm_unsent_" + c.id, b) : g.remove("Hm_unsent_" + c.id))
            }, Fa: function () {
                var a = this, d = g.get("Hm_unsent_" + c.id);
                if (d)for (var d = d.split(","), e = function (d) {
                    f.log(b.L + "//" + decodeURIComponent(d), function (b) {
                        a.O(b)
                    })
                }, k = 0, l = d.length; k < l; k++)e(d[k])
            }
        };
        return new a
    })();
    (function () {
        var a = mt.p, d = mt.event, f = mt.url, e = mt.j;
        try {
            if (window.performance && performance.timing && "undefined" !== typeof h.b) {
                var k = +new Date, l = function (a) {
                    var d = performance.timing, e = d[a + "Start"] ? d[a + "Start"] : 0;
                    a = d[a + "End"] ? d[a + "End"] : 0;
                    return {start: e, end: a, value: 0 < a - e ? a - e : 0}
                }, n = s;
                a.X(function () {
                    n = +new Date
                });
                var p = function () {
                    var a, d, g;
                    g = l("navigation");
                    d = l("request");
                    g = {
                        netAll: d.start - g.start,
                        netDns: l("domainLookup").value,
                        netTcp: l("connect").value,
                        srv: l("response").start - d.start,
                        dom: performance.timing.domInteractive -
                        performance.timing.fetchStart,
                        loadEvent: l("loadEvent").end - g.start
                    };
                    a = document.referrer;
                    var p = a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/) || [], v = s;
                    d = s;
                    if ("www.baidu.com" === p[2] || "m.baidu.com" === p[2]) v = f.f(a, "qid"), d = f.f(a, "click_t");
                    a = v;
                    g.qid = a != s ? a : "";
                    d != s ? (g.bdDom = n ? n - d : 0, g.bdRun = k - d, g.bdDef = l("navigation").start - d) : (g.bdDom = 0, g.bdRun = 0, g.bdDef = 0);
                    h.b.a.et = 87;
                    h.b.a.ep = e.stringify(g);
                    h.b.h()
                };
                d.c(window, "load", function () {
                    setTimeout(p, 500)
                })
            }
        } catch (g) {
        }
    })();
    (function () {
        var a = mt.i, d = mt.lang, f = mt.event, e = mt.j;
        if ("undefined" !== typeof h.b && (c.med || (!a.Ba || 7 < a.za) && c.cvcc)) {
            var k, l, n, p, g = function (a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b--;)d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }, b = function (a, b) {
                for (var d in a)if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === t)return t
            }, w = function (a, b) {
                var f = {};
                f.n = k;
                f.t = "clk";
                f.v = a;
                if (b) {
                    var g = b.getAttribute("href"), l = b.getAttribute("onclick") ? "" + b.getAttribute("onclick") : s,
                        m = b.getAttribute("id") || "";
                    n.test(g) ? (f.sn = "mediate",
                        f.snv = g) : d.d(l, "String") && n.test(l) && (f.sn = "wrap", f.snv = l);
                    f.id = m
                }
                h.b.a.et = 86;
                h.b.a.ep = e.stringify(f);
                h.b.h();
                for (f = +new Date; 400 >= +new Date - f;);
            };
            if (c.med) l = "/zoosnet", k = "swt", n = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, p = {
                click: function () {
                    for (var a = [], b = g(document.getElementsByTagName("a")),
                             b = [].concat.apply(b, g(document.getElementsByTagName("area"))),
                             b = [].concat.apply(b, g(document.getElementsByTagName("img"))), d, e, f = 0,
                             k = b.length; f < k; f++)d = b[f], e = d.getAttribute("onclick"),
                        d = d.getAttribute("href"), (n.test(e) || n.test(d)) && a.push(b[f]);
                    return a
                }
            }; else if (c.cvcc) {
                l = "/other-comm";
                k = "other";
                n = c.cvcc.q || q;
                var m = c.cvcc.id || q;
                p = {
                    click: function () {
                        for (var a = [], b = g(document.getElementsByTagName("a")),
                                 b = [].concat.apply(b, g(document.getElementsByTagName("area"))),
                                 b = [].concat.apply(b, g(document.getElementsByTagName("img"))), d, e, f, k = 0,
                                 l = b.length; k < l; k++)d = b[k], n !== q ? (e = d.getAttribute("onclick"), f = d.getAttribute("href"), m ? (d = d.getAttribute("id"), (n.test(e) || n.test(f) || m.test(d)) &&
                        a.push(b[k])) : (n.test(e) || n.test(f)) && a.push(b[k])) : m !== q && (d = d.getAttribute("id"), m.test(d) && a.push(b[k]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof p && "undefined" !== typeof n) {
                var u;
                l += /\/$/.test(l) ? "" : "/";
                var v = function (a, b) {
                    if (u === b)return w(l + a, b), t;
                    if (d.d(b, "Array") || d.d(b, "NodeList"))for (var e = 0,
                                                                       f = b.length; e < f; e++)if (u === b[e])return w(l + a + "/" + (e + 1), b[e]), t
                };
                f.c(document, "mousedown", function (a) {
                    a = a || window.event;
                    u = a.target || a.srcElement;
                    var e = {};
                    for (b(p, function (a, b) {
                        e[a] = d.d(b, "Function") ? b() : document.getElementById(b)
                    }); u &&
                         u !== document && b(e, v) !== t;)u = u.parentNode
                })
            }
        }
    })();
    (function () {
        var a = mt.p, d = mt.lang, f = mt.event, e = mt.j;
        if ("undefined" !== typeof h.b && d.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var k = {
                $: function () {
                    for (var d = c.cvcf.length, e,
                             p = 0; p < d; p++)(e = a.ma(decodeURIComponent(c.cvcf[p]))) && f.c(e, "click", k.ha())
                }, ha: function () {
                    return function () {
                        h.b.a.et = 86;
                        var a = {n: "form", t: "clk"};
                        a.id = this.id;
                        h.b.a.ep = e.stringify(a);
                        h.b.h()
                    }
                }
            };
            a.X(function () {
                k.$()
            })
        }
    })();
    (function () {
        var a = mt.event, d = mt.j;
        if (c.med && "undefined" !== typeof h.b) {
            var f = +new Date, e = {n: "anti", sb: 0, kb: 0, clk: 0}, k = function () {
                h.b.a.et = 86;
                h.b.a.ep = d.stringify(e);
                h.b.h()
            };
            a.c(document, "click", function () {
                e.clk++
            });
            a.c(document, "keyup", function () {
                e.kb = 1
            });
            a.c(window, "scroll", function () {
                e.sb++
            });
            a.c(window, "unload", function () {
                e.t = +new Date - f;
                k()
            });
            a.c(window, "load", function () {
                setTimeout(k, 5E3)
            })
        }
    })();
})();
