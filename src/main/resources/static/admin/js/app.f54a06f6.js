(function (o) {
    function t(t) {
        for (var a, r, i = t[0], c = t[1], d = t[2], u = 0, m = []; u < i.length; u++) r = i[u], Object.prototype.hasOwnProperty.call(n, r) && n[r] && m.push(n[r][0]), n[r] = 0;
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (o[a] = c[a]);
        l && l(t);
        while (m.length) m.shift()();
        return s.push.apply(s, d || []), e()
    }

    function e() {
        for (var o, t = 0; t < s.length; t++) {
            for (var e = s[t], a = !0, i = 1; i < e.length; i++) {
                var c = e[i];
                0 !== n[c] && (a = !1)
            }
            a && (s.splice(t--, 1), o = r(r.s = e[0]))
        }
        return o
    }

    var a = {}, n = {app: 0}, s = [];

    function r(t) {
        if (a[t]) return a[t].exports;
        var e = a[t] = {i: t, l: !1, exports: {}};
        return o[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports
    }

    r.m = o, r.c = a, r.d = function (o, t, e) {
        r.o(o, t) || Object.defineProperty(o, t, {enumerable: !0, get: e})
    }, r.r = function (o) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(o, "__esModule", {value: !0})
    }, r.t = function (o, t) {
        if (1 & t && (o = r(o)), 8 & t) return o;
        if (4 & t && "object" === typeof o && o && o.__esModule) return o;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
            enumerable: !0,
            value: o
        }), 2 & t && "string" != typeof o) for (var a in o) r.d(e, a, function (t) {
            return o[t]
        }.bind(null, a));
        return e
    }, r.n = function (o) {
        var t = o && o.__esModule ? function () {
            return o["default"]
        } : function () {
            return o
        };
        return r.d(t, "a", t), t
    }, r.o = function (o, t) {
        return Object.prototype.hasOwnProperty.call(o, t)
    }, r.p = "/order/admin/";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [], c = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var d = 0; d < i.length; d++) t(i[d]);
    var l = c;
    s.push([0, "chunk-vendors"]), e()
})({
    0: function (o, t, e) {
        o.exports = e("56d7")
    }, 4678: function (o, t, e) {
        var a = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function n(o) {
            var t = s(o);
            return e(t)
        }

        function s(o) {
            if (!e.o(a, o)) {
                var t = new Error("Cannot find module '" + o + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return a[o]
        }

        n.keys = function () {
            return Object.keys(a)
        }, n.resolve = s, o.exports = n, n.id = "4678"
    }, "56d7": function (o, t, e) {
        "use strict";
        e.r(t);
        e("a4d3"), e("e01a"), e("b636"), e("dc8d"), e("efe9"), e("d28b"), e("2a1b"), e("80e0"), e("6b9e"), e("197b"), e("2351"), e("8172"), e("944a"), e("81b8"), e("99af"), e("a874"), e("a623"), e("cb29"), e("4de4"), e("7db0"), e("c740"), e("0481"), e("5db7"), e("4160"), e("a630"), e("caad"), e("c975"), e("e260"), e("a15b"), e("baa5"), e("d81d"), e("5ded"), e("13d5"), e("f4dd"), e("fb6a"), e("45fc"), e("f785"), e("a434"), e("4069"), e("73d9"), e("c19f"), e("82da"), e("ace4"), e("b420"), e("efec"), e("b56e"), e("b0c0"), e("0c47"), e("4ec9"), e("5327"), e("79a8"), e("9ff9"), e("3ea3"), e("40d9"), e("ff9c"), e("0ac8"), e("f664"), e("4057"), e("bc01"), e("6b93"), e("ca21"), e("90d7"), e("2af1"), e("0261"), e("7898"), e("23dc"), e("b65f"), e("a9e3"), e("35b3"), e("f00c"), e("8ba4"), e("9129"), e("583b"), e("aff5"), e("e6e1"), e("c35a"), e("25eb"), e("b680"), e("cca6"), e("12a8"), e("e71b"), e("4fad"), e("dca8"), e("c1f9"), e("e439"), e("dbb4"), e("7039"), e("3410"), e("2b19"), e("c906"), e("e21d"), e("e43e"), e("b64b"), e("bf96"), e("5bf7"), e("cee8"), e("af93"), e("131a"), e("d3b7"), e("07ac"), e("e6cf"),e("a79d"),e("a6fd"),e("4ae1"),e("3f3a"),e("ac16"),e("5d41"),e("9e4a"),e("7f78"),e("c760"),e("db96"),e("1bf2"),e("d6dd"),e("7ed3"),e("8b9a"),e("4d63"),e("ac1f"),e("5377"),e("25f0"),e("6062"),e("f5b2"),e("8a79"),e("f6d6"),e("2532"),e("3ca3"),e("466d"),e("843c"),e("4d90"),e("d80f"),e("38cf"),e("5319"),e("841c"),e("1276"),e("2ca0"),e("498a"),e("1e25"),e("eee7"),e("18a5"),e("1393"),e("04d3"),e("cc71"),e("c7cd"),e("9767"),e("1913"),e("c5d0"),e("9911"),e("c96a"),e("2315"),e("4c53"),e("664f"),e("cfc3"),e("4a9b"),e("fd87"),e("8b09"),e("143c"),e("5cc6"),e("8a59"),e("84c3"),e("fb2c"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("20bf"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ec97"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("10d1"),e("1fe2"),e("159b"),e("ddb0"),e("130f"),e("9f96"),e("4795"),e("2b3d"),e("bf19"),e("9861");
        var a = e("2b0e"), n = function () {
                var o = this, t = o.$createElement, e = o._self._c || t;
                return e("router-view")
            }, s = [], r = e("2877"), i = {}, c = Object(r["a"])(i, n, s, !1, null, null, null), d = c.exports,
            l = e("8c4f"), u = function () {
                var o = this, t = o.$createElement, e = o._self._c || t;
                return e("div", {
                    staticClass: "ke-fs-admin-portal",
                    class: o.portalCls
                }, [e("div", {staticClass: "ke-fs-admin-portal-sidebar"}, [e("a", {
                    staticClass: "ke-fs-admin-logo",
                    attrs: {href: "#"}
                }, [o._v(" " + o._s(o.collapsed ? "点" : "点餐管理") + " ")]), e("div", {staticClass: "ke-fs-admin-portal-sidebar__navs"}, [e("a-menu", {
                    attrs: {
                        mode: "inline",
                        theme: "dark",
                        inlineCollapsed: o.collapsed
                    }
                }, [e("a-sub-menu", [e("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e("a-icon", {attrs: {type: "container"}}), e("span", [o._v("菜品管理")])], 1), e("a-menu-item", [e("router-link", {attrs: {to: "./foodsMgr"}}, [e("a-icon", {attrs: {type: "coffee"}}), e("span", [o._v("菜单管理")])], 1)], 1), e("a-menu-item", [e("router-link", {attrs: {to: "./comboMgr"}}, [e("a-icon", {attrs: {type: "apartment"}}), e("span", [o._v("套餐管理")])], 1)], 1), e("a-menu-item", [e("router-link", {attrs: {to: "./currentCombo"}}, [e("a-icon", {attrs: {type: "carry-out"}}), e("span", [o._v("当前套餐")])], 1)], 1), e("a-menu-item", [e("router-link", {attrs: {to: "./comboStar"}}, [e("a-icon", {attrs: {type: "star"}}), e("span", [o._v("星级评分")])], 1)], 1)], 1), e("a-sub-menu", [e("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e("a-icon", {attrs: {type: "message"}}), e("span", [o._v("点评管理")])], 1), e("a-menu-item", [e("router-link", {attrs: {to: "./comboPerson"}}, [e("a-icon", {attrs: {type: "user"}}), e("span", [o._v("点评人员")])], 1)], 1), e("a-menu-item", [e("router-link", {
                    attrs: {
                        to: {
                            path: "/comboTop",
                            query: {type: 1}
                        }
                    }
                }, [e("a-icon", {attrs: {type: "smile"}}), e("span", [o._v("喜欢菜品Top10")])], 1)], 1), e("a-menu-item", [e("router-link", {attrs: {to: "./comboTop?type=2"}}, [e("a-icon", {attrs: {type: "frown"}}), e("span", [o._v("差评菜品Top10")])], 1)], 1)], 1), e("a-sub-menu", [e("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e("a-icon", {attrs: {type: "ordered-list"}}), e("span", [o._v("订单管理")])], 1), e("a-menu-item", [e("router-link", {attrs: {to: "./todayOrders"}}, [e("a-icon", {attrs: {type: "profile"}}), e("span", [o._v("当日订单统计")])], 1)], 1), e("a-menu-item", [e("router-link", {attrs: {to: "./historyOrders"}}, [e("a-icon", {attrs: {type: "history"}}), e("span", [o._v("历史订单统计")])], 1)], 1)], 1)], 1)], 1)]), e("div", {staticClass: "ke-fs-admin-portal-main"}, [e("div", {staticClass: "ke-fs-admin-portal-main__header"}, [e("a-button", {on: {click: o._foldMenu}}, [o.collapsed ? e("a-icon", {attrs: {type: "menu-unfold"}}) : e("a-icon", {attrs: {type: "menu-fold"}})], 1)], 1), e("div", {staticClass: "ke-fs-admin-portal-main__content"}, [o.title.length > 0 ? e("a-page-header", {attrs: {title: o.title}}) : o._e(), e("router-view")], 1)])])
            }, m = [], f = {
                data: function () {
                    return {collapsed: !1, title: "当日订单统计"}
                }, computed: {
                    portalCls: function () {
                        return {folded: this.collapsed}
                    }
                }, methods: {
                    _foldMenu: function () {
                        this.collapsed = !this.collapsed
                    }
                }, created: function () {
                    var o = this;
                    this.$router.beforeEach((function (t, e, a) {
                        o.title = t.meta.name || "", "/comboTop" == t.path && (o.title = ("1" == t.query.type ? "喜欢" : "差评") + o.title), a()
                    }))
                }
            }, p = f, b = Object(r["a"])(p, u, m, !1, null, null, null), g = b.exports, h = function () {
                var o = this, t = o.$createElement, e = o._self._c || t;
                return e("div", {staticClass: "ke-fs-admin-portal-main__content__inner"}, [e("div", {staticClass: "ke-fs-box"}, [e("a-row", {
                    staticClass: "ke-fs-mg-b",
                    attrs: {gutter: 16}
                }, [e("a-col", {attrs: {span: 8}}, [e("a-input-search", {
                    attrs: {placeholder: "请输入菜品名称..."},
                    on: {search: o._search}
                })], 1), e("a-col", {
                    staticClass: "ke-fs-ta-r",
                    attrs: {span: 8, offset: 8}
                }, [e("a-button", {
                    attrs: {type: "primary"},
                    on: {click: o._newFoods}
                }, [e("a-icon", {attrs: {type: "plus"}}), e("span", [o._v("新增菜品")])], 1)], 1)], 1), e("a-row", {attrs: {gutter: 16}}, [e("a-col", {attrs: {span: 24}}, [e("a-table", {
                    attrs: {
                        rowKey: "id",
                        columns: o.columns,
                        dataSource: o.goods,
                        loading: o.loading,
                        pagination: o.pagination
                    }, on: {change: o._onPageChange}, scopedSlots: o._u([{
                        key: "type", fn: function (t) {
                            return e("span", {}, [o._v(o._s(o.types[t]))])
                        }
                    }, {
                        key: "status", fn: function (t) {
                            return [1 == t ? e("a-tag", {attrs: {color: "green"}}, [o._v("启用")]) : e("a-tag", {attrs: {color: "red"}}, [o._v("禁用")])]
                        }
                    }, {
                        key: "img", fn: function (o) {
                            return e("span", {staticClass: "foods-cover"}, [e("img", {attrs: {src: "../common/download?fileName=" + o}})])
                        }
                    }, {
                        key: "actions", fn: function (t) {
                            return e("div", {staticClass: "foods-action"}, [e("a-button", {
                                attrs: {
                                    size: "small",
                                    icon: "edit"
                                }, on: {
                                    click: function (e) {
                                        return o._modifyFoodsById(t)
                                    }
                                }
                            }), e("a-popconfirm", {
                                attrs: {title: "是否确认删除当前菜品?"}, on: {
                                    confirm: function (e) {
                                        return o._removeFoodsById(t)
                                    }
                                }
                            }, [e("a-button", {attrs: {type: "danger", size: "small", icon: "delete"}})], 1)], 1)
                        }
                    }])
                })], 1)], 1)], 1), e("a-modal", {
                    attrs: {
                        title: "编辑",
                        width: 680,
                        visible: o.isShowEditor,
                        footer: null,
                        destroyOnClose: ""
                    }, on: {
                        cancel: function (t) {
                            o.isShowEditor = !1
                        }
                    }
                }, [e("FoodsEditor", {attrs: {foodsId: o.edtFoodsId}, on: {success: o._onSaveFoodsSuccess}})], 1)], 1)
            }, _ = [], v = e("5530"), y = e("bc3a"), k = e.n(y), j = e("4328"), C = e.n(j), I = k.a.create({
                baseURL: "/order/",
                timeout: 2e4,
                headers: {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"},
                responseType: "json"
            });

        function S(o) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return I.post(o, C.a.stringify(t))
        }

        function w(o) {
            return S(null == o.id ? "/dc/goods/add" : "/dc/goods/mod", o)
        }

        function x(o) {
            return S("/dc/goods/del", {id: o})
        }

        function N(o) {
            return S("/dc/goods/find", {id: o})
        }

        function q(o, t, e) {
            return S("/dc/goods/list", {goodsName: o, pageNum: t, pageSize: e})
        }

        I.interceptors.request.use((function (o) {
            var t = window.localStorage ? window.localStorage.getItem("uid") : window.___fsAppUID___;
            return o.headers["uid"] = t, o
        })), I.interceptors.response.use((function (o) {
            return 200 === o.status ? 0 === o.data.code ? Promise.resolve(o.data.data || {}) : Promise.reject(o.data.msg || "未知错误!") : Promise.reject(o)
        }), (function (o) {
            var t;
            if (o && o.response) switch (o.response.status) {
                case 400:
                    t = "错误的请求!";
                    break;
                case 401:
                    t = "未认证,请重新认证!";
                    break;
                case 403:
                    t = "拒绝访问!";
                    break;
                case 404:
                    t = "请求错误,未找到该资源!";
                    break;
                case 405:
                    t = "请求方法未允许!";
                    break;
                case 408:
                    t = "请求超时!";
                    break;
                case 500:
                    t = "服务器内部错误!";
                    break;
                default:
                    t = "连接错误".concat(o.response.status)
            } else t = o || "未知错误!";
            return Promise.reject(t)
        }));
        var O = function () {
                var o = this, t = o.$createElement, e = o._self._c || t;
                return e("a-form-model", {
                    ref: "form",
                    attrs: {
                        layout: "horizontal",
                        model: o.item,
                        rules: o.rules,
                        labelCol: {span: 6},
                        wrapperCol: {span: 12}
                    }
                }, [e("a-spin", {attrs: {spinning: o.querying}}, [o.hasError ? e("a-alert", {
                    staticClass: "ke-fs-mg-b",
                    attrs: {type: "error", message: o.errorMsg}
                }) : o._e(), e("a-form-model-item", {
                    staticStyle: {"margin-bottom": "0px"},
                    attrs: {label: "菜品图片"}
                }, [e("a-input", {
                    attrs: {type: "hidden"}, model: {
                        value: o.item.goodsImg, callback: function (t) {
                            o.$set(o.item, "goodsImg", t)
                        }, expression: "item.goodsImg"
                    }
                }), e("a-upload", {
                    attrs: {
                        name: "file",
                        accept: "image/*",
                        action: "../common/upload?uid=1",
                        listType: "picture-card",
                        "show-upload-list": !1
                    }, on: {change: o._onGoodsImgUpload}
                }, [o.item.goodsImg && o.item.goodsImg.length > 0 ? e("img", {
                    attrs: {
                        src: "../common/download?fileName=" + o.item.goodsImg + "&uid=1",
                        alt: "菜品封面"
                    }
                }) : e("div", [e("a-icon", {attrs: {type: o.uploading ? "loading" : "plus"}}), e("div", {staticClass: "ant-upload-text"}, [o._v("上传")])], 1)])], 1), e("a-form-model-item", {
                    attrs: {
                        label: "菜品名称",
                        prop: "goodsName",
                        required: ""
                    }
                }, [e("a-input", {
                    attrs: {placeholder: "请输入菜品名称"}, model: {
                        value: o.item.goodsName, callback: function (t) {
                            o.$set(o.item, "goodsName", t)
                        }, expression: "item.goodsName"
                    }
                })], 1), e("a-form-model-item", {
                    attrs: {
                        label: "菜品分类",
                        required: ""
                    }
                }, [e("a-select", {
                    attrs: {placeholder: "请选择菜品分类"},
                    model: {
                        value: o.item.goodsType, callback: function (t) {
                            o.$set(o.item, "goodsType", t)
                        }, expression: "item.goodsType"
                    }
                }, [e("a-select-opt-group", {attrs: {label: "简餐"}}, [e("a-select-option", {attrs: {value: "1"}}, [o._v("主菜")]), e("a-select-option", {attrs: {value: "2"}}, [o._v("辅菜")]), e("a-select-option", {attrs: {value: "3"}}, [o._v("小菜")]), e("a-select-option", {attrs: {value: "4"}}, [o._v("例汤")])], 1), e("a-select-opt-group", {attrs: {label: "面食"}}, [e("a-select-option", {attrs: {value: "5"}}, [o._v("面条")])], 1), e("a-select-opt-group", {attrs: {label: "特色"}}, [e("a-select-option", {attrs: {value: "6"}}, [o._v("美食")])], 1)], 1)], 1), e("a-form-model-item", {attrs: {label: "菜品说明"}}, [e("a-textarea", {
                    attrs: {
                        placeholder: "请输入菜品描述",
                        rows: 3,
                        allowClear: ""
                    }, model: {
                        value: o.item.goodsDesc, callback: function (t) {
                            o.$set(o.item, "goodsDesc", t)
                        }, expression: "item.goodsDesc"
                    }
                })], 1), e("a-form-model-item", {
                    attrs: {
                        "wrapper-col": {
                            span: 12,
                            offset: 6
                        }
                    }
                }, [e("a-button", {
                    attrs: {type: "primary", loading: o.loading},
                    on: {click: o._submitForm}
                }, [o._v("保 存")])], 1)], 1)], 1)
            }, $ = [], T = {
                props: {foodsId: {type: Number, default: null}}, data: function () {
                    return {
                        item: {id: null, goodsName: "", goodsType: "1", goodsDesc: "", goodsImg: "", status: "1"},
                        rules: {goodsName: [{required: !0, message: "菜品名称不能为空!", trigger: "blur"}]},
                        uploading: !1,
                        loading: !1,
                        hasError: !1,
                        querying: !1,
                        errorMsg: null
                    }
                }, methods: {
                    _submitForm: function () {
                        var o = this;
                        this.$refs.form.validate((function (t) {
                            return t && o._saveGoods(), t
                        }))
                    }, _onGoodsImgUpload: function (o) {
                        var t = o.file.status;
                        "uploading" === t ? this.uploading = !0 : "done" === t ? (this.item.goodsImg = o.file.response.fileName, this.uploading = !1, console.log(this.item.goodsImg)) : "error" === t && this.$message.error("上传图片失败!")
                    }, _saveGoods: function () {
                        var o = this;
                        this.loading = !0, this.hasError = !1, w(this.item).then((function () {
                            o.loading = !1, o.$emit("success")
                        })).catch((function (t) {
                            o.loading = !1, o.hasError = !0, o.errorMsg = "保存失败,原因:".concat(t)
                        }))
                    }, _queryFoodsById: function (o) {
                        var t = this;
                        this.querying = !0, N(o).then((function (o) {
                            t.item = o, t.querying = !1
                        })).catch((function (o) {
                            return t.$emit("fail", o)
                        }))
                    }
                }, created: function () {
                    this.foodsId && this._queryFoodsById(this.foodsId)
                }
            }, E = T, L = Object(r["a"])(E, O, $, !1, null, null, null), z = L.exports,
            D = {1: "主菜", 2: "辅菜", 3: "小菜", 4: "例汤", 5: "面条"}, G = {
                components: {FoodsEditor: z}, data: function () {
                    return {
                        columns: [{title: "菜品名称", dataIndex: "goodsName"}, {
                            title: "菜品分类",
                            dataIndex: "goodsType",
                            scopedSlots: {customRender: "type"}
                        }, {title: "菜品图片", dataIndex: "goodsImg", scopedSlots: {customRender: "img"}}, {
                            title: "菜品状态",
                            dataIndex: "status",
                            scopedSlots: {customRender: "status"}
                        }, {title: "菜品描述", dataIndex: "goodsDesc"}, {
                            title: "操作",
                            dataIndex: "id",
                            scopedSlots: {customRender: "actions"}
                        }],
                        pagination: {pageSize: 10},
                        types: D,
                        goods: [],
                        loading: !1,
                        isShowEditor: !1,
                        edtFoodsId: null,
                        pageNo: 1
                    }
                }, methods: {
                    _search: function (o) {
                        this.pageNo = 1, this._queryFoodsList(o)
                    }, _onPageChange: function (o) {
                        this.pageNo = o.current, this._queryFoodsList()
                    }, _newFoods: function () {
                        this.edtFoodsId = null, this.isShowEditor = !0
                    }, _modifyFoodsById: function (o) {
                        this.edtFoodsId = o, this.isShowEditor = !0
                    }, _removeFoodsById: function (o) {
                        var t = this;
                        x(o).then((function () {
                            t.$message.success("删除成功!"), t._queryFoodsList()
                        })).catch((function (o) {
                            return t.$message.erro("删除失败,原因:".concat(o))
                        }))
                    }, _onSaveFoodsSuccess: function () {
                        this.isShowEditor = !1, this.$message.success("保存成功!"), this._queryFoodsList()
                    }, _queryFoodsList: function () {
                        var o = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        this.loading = !0, q(t, this.pageNo, this.pagination.pageSize).then((function (t) {
                            o.loading = !1, o.goods = t["rows"] || [];
                            var e = Object(v["a"])({}, o.paginatio);
                            e.total = t["total"] || 0, o.pagination = e
                        })).catch((function (t) {
                            o.loading = !1, o.$message.error("查询菜品失败,原因:".concat(t))
                        }))
                    }
                }, created: function () {
                    this._queryFoodsList(null)
                }
            }, R = G, F = Object(r["a"])(R, h, _, !1, null, null, null), M = F.exports, P = function () {
                var o = this, t = o.$createElement, e = o._self._c || t;
                return e("div", {staticClass: "ke-fs-admin-portal-main__content__inner"}, [e("div", {staticClass: "ke-fs-box"}, [e("a-row", {
                    staticClass: "ke-fs-mg-b",
                    attrs: {gutter: 16}
                }, [e("a-col", {attrs: {span: 8}}, [e("a-input-search", {
                    attrs: {placeholder: "请输入套餐名称..."},
                    on: {search: o._search}
                })], 1), e("a-col", {
                    staticClass: "ke-fs-ta-r",
                    attrs: {span: 8, offset: 8}
                }, [e("a-dropdown", [e("a-menu", {
                    attrs: {slot: "overlay"},
                    on: {click: o._onMenuClick},
                    slot: "overlay"
                }, [e("a-menu-item", {key: "1"}, [o._v("新增商务简餐")]), e("a-menu-item", {key: "2"}, [o._v("新增精美面食")]), e("a-menu-item", {key: "3"}, [o._v("新增特色美食")])], 1), e("a-button", [e("a-icon", {attrs: {type: "plus"}}), e("span", [o._v("新增")]), e("a-icon", {attrs: {type: "down"}})], 1)], 1)], 1)], 1), e("a-row", {attrs: {gutter: 16}}, [e("a-col", {attrs: {span: 24}}, [e("a-table", {
                    attrs: {
                        rowKey: "id",
                        columns: o.columns,
                        dataSource: o.comboList,
                        loading: o.loading,
                        pagination: o.pagination
                    }, on: {change: o._onPageChange}, scopedSlots: o._u([{
                        key: "type", fn: function (t) {
                            return e("span", {}, [o._v(" " + o._s("1" == t ? "商务简餐" : "2" == t ? "精美面食" : "特色美食") + " ")])
                        }
                    }, {
                        key: "status", fn: function (t) {
                            return [1 == t ? e("a-tag", {attrs: {color: "green"}}, [o._v("启用")]) : e("a-tag", {attrs: {color: "red"}}, [o._v("禁用")])]
                        }
                    }, {
                        key: "img", fn: function (o) {
                            return e("span", {staticClass: "combo-cover"}, [e("img", {attrs: {src: "../common/download?fileName=" + o}})])
                        }
                    }, {
                        key: "goods", fn: function (t) {
                            return e("div", {staticClass: "combo-goods"}, o._l(t, (function (t) {
                                return e("span", {key: t.id}, [o._v(o._s(t.goodsName))])
                            })), 0)
                        }
                    }, {
                        key: "actions", fn: function (t, a) {
                            return e("div", {staticClass: "combo-action"}, [e("a-button", {
                                attrs: {
                                    size: "small",
                                    icon: "edit"
                                }, on: {
                                    click: function (e) {
                                        return o._modifyCombo(t)
                                    }
                                }
                            }), e("a-popconfirm", {
                                attrs: {title: "是否确认删除当前套餐?"}, on: {
                                    confirm: function (e) {
                                        return o._removeComboById(t)
                                    }
                                }
                            }, [e("a-button", {
                                attrs: {
                                    type: "danger",
                                    size: "small",
                                    icon: "delete"
                                }
                            })], 1), "2" == a.status ? e("a-button", {
                                attrs: {size: "small", type: "primary"},
                                on: {
                                    click: function (e) {
                                        return o._updateComboStatus(t, "1")
                                    }
                                }
                            }, [o._v("启用")]) : e("a-button", {
                                attrs: {size: "small", type: "danger"},
                                on: {
                                    click: function (e) {
                                        return o._updateComboStatus(t, "2")
                                    }
                                }
                            }, [o._v("禁用")])], 1)
                        }
                    }])
                })], 1)], 1)], 1), e("a-modal", {
                    attrs: {
                        title: "编辑",
                        width: 680,
                        visible: o.isShowEditor,
                        footer: null,
                        destroyOnClose: ""
                    }, on: {
                        cancel: function (t) {
                            o.isShowEditor = !1
                        }
                    }
                }, [e("ComboEditor", {
                    attrs: {comboId: o.edtComboId, type: o.comboType},
                    on: {success: o._onSaveComboSuccess, fail: o._onShowDialogFial}
                })], 1)], 1)
            }, Y = [];

        function U(o, t) {
            return S(null == o.id ? "/dc/combo/add" : "/dc/combo/mod", Object(v["a"])(Object(v["a"])({}, o), {}, {goodIds: t}))
        }

        function K(o) {
            return S("/dc/combo/find", {id: o})
        }

        function B(o) {
            return S("/dc/goods/list", {comboType: o, pageSize: 500})
        }

        function A(o, t, e) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                n = a ? {comboName: o, pageNum: t, pageSize: e, status: a} : {comboName: o, pageNum: t, pageSize: e};
            return S("/dc/combo/query", n)
        }

        function J(o, t) {
            return S("/dc/combo/upStatus", {comboId: o, status: t})
        }

        function V() {
            return S("/dc/order/getOrderPersonCnt")
        }

        function H(o) {
            return S("/dc/order/getOrderScore", {type: o, num: 10})
        }

        function Q(o, t) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
            return S("/dc/order/query", {comboId: o, pageNum: t, pageSize: e})
        }

        function W(o, t, e) {
            return S("/dc/order/query", {userId: o, pageNum: t, pageSize: e})
        }

        function X(o) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return S("dc/order/getUserEveCountList", {pageNum: o, pageSize: t})
        }

        var Z = function () {
            var o = this, t = o.$createElement, e = o._self._c || t;
            return e("a-form-model", {
                ref: "form",
                attrs: {
                    layout: "horizontal",
                    model: o.combo,
                    rules: o.rules,
                    labelCol: {span: 6},
                    wrapperCol: {span: 12}
                }
            }, [e("a-spin", {attrs: {spinning: o.querying}}, [o.hasError ? e("a-alert", {
                staticClass: "ke-fs-mg-b",
                attrs: {type: "error", message: o.errorMsg}
            }) : o._e(), e("a-form-model-item", {
                staticStyle: {"margin-bottom": "0px"},
                attrs: {label: "套餐图片"}
            }, [e("a-input", {
                attrs: {type: "hidden"}, model: {
                    value: o.combo.comboImg, callback: function (t) {
                        o.$set(o.combo, "comboImg", t)
                    }, expression: "combo.comboImg"
                }
            }), e("a-upload", {
                attrs: {
                    name: "file",
                    accept: "image/*",
                    action: "../common/upload",
                    listType: "picture-card",
                    "show-upload-list": !1
                }, on: {change: o._onCommboImgUpload}
            }, [o.combo.comboImg && o.combo.comboImg.length > 0 ? e("img", {
                attrs: {
                    src: "../common/download?fileName=" + o.combo.comboImg,
                    alt: "套餐封面"
                }
            }) : e("div", [e("a-icon", {attrs: {type: o.uploading ? "loading" : "plus"}}), e("div", {staticClass: "ant-upload-text"}, [o._v("上传")])], 1)])], 1), e("a-form-model-item", {
                attrs: {
                    label: "套餐名称",
                    prop: "comboName",
                    required: ""
                }
            }, [e("a-input", {
                attrs: {placeholder: "请输入套餐名称"},
                model: {
                    value: o.combo.comboName, callback: function (t) {
                        o.$set(o.combo, "comboName", t)
                    }, expression: "combo.comboName"
                }
            })], 1), e("a-form-model-item", {
                attrs: {
                    label: "套餐编码",
                    prop: "comboCode",
                    required: ""
                }
            }, [e("a-input", {
                attrs: {placeholder: "请输入套餐编码"},
                model: {
                    value: o.combo.comboCode, callback: function (t) {
                        o.$set(o.combo, "comboCode", t)
                    }, expression: "combo.comboCode"
                }
            })], 1), e("a-form-model-item", {
                ref: "goodsIds",
                attrs: {label: "套餐菜品", prop: "goodsIds", required: ""}
            }, [e("a-input", {
                attrs: {type: "hidden"}, model: {
                    value: o.combo.goodsIds, callback: function (t) {
                        o.$set(o.combo, "goodsIds", t)
                    }, expression: "combo.goodsIds"
                }
            }), "3" == o.combo.comboType ? e("a-select", {
                attrs: {mode: "multiple", placeholder: "请选择"},
                on: {change: o._onTsGoodsChange},
                model: {
                    value: o.tsGoods, callback: function (t) {
                        o.tsGoods = t
                    }, expression: "tsGoods"
                }
            }, o._l(o.pkGoods, (function (t) {
                return e("a-select-option", {key: "pkg_" + t.value, attrs: {value: t.value}}, [o._v(o._s(t.label))])
            })), 1) : [e("a-select", {
                attrs: {placeholder: "请选择主食"},
                model: {
                    value: o.combo.goodsIds, callback: function (t) {
                        o.$set(o.combo, "goodsIds", t)
                    }, expression: "combo.goodsIds"
                }
            }, o._l(o.pkGoods, (function (t) {
                return e("a-select-option", {key: "pkg_" + t.value, attrs: {value: t.value}}, [o._v(o._s(t.label))])
            })), 1), "1" == o.combo.comboType ? e("a-select", {
                attrs: {mode: "multiple", placeholder: "请选择"},
                model: {
                    value: o.otherGoods, callback: function (t) {
                        o.otherGoods = t
                    }, expression: "otherGoods"
                }
            }, o._l(o.otGoods, (function (t) {
                return e("a-select-opt-group", {
                    key: "otg_" + t.value,
                    attrs: {label: t.label}
                }, o._l(t.goods, (function (t) {
                    return e("a-select-option", {
                        key: "otg_goods_" + t.value,
                        attrs: {value: t.value}
                    }, [o._v(o._s(t.label))])
                })), 1)
            })), 1) : o._e()]], 2), e("a-form-model-item", {
                attrs: {
                    label: "套餐描述",
                    prop: "comboDesc"
                }
            }, [e("a-textarea", {
                attrs: {placeholder: "请输入套餐描述", rows: 3, allowClear: ""},
                model: {
                    value: o.combo.comboDesc, callback: function (t) {
                        o.$set(o.combo, "comboDesc", t)
                    }, expression: "combo.comboDesc"
                }
            })], 1), e("a-form-model-item", {
                attrs: {
                    label: "厨师照片",
                    prop: "cookImg"
                }
            }, [e("a-input", {
                attrs: {type: "hidden"}, model: {
                    value: o.combo.cookImg, callback: function (t) {
                        o.$set(o.combo, "cookImg", t)
                    }, expression: "combo.cookImg"
                }
            }), e("a-upload", {
                attrs: {
                    name: "file",
                    accept: "image/*",
                    action: "../common/upload",
                    listType: "picture-card",
                    "show-upload-list": !1
                }, on: {change: o._onCookImgUpload}
            }, [o.combo.cookImg && o.combo.cookImg.length > 0 ? e("img", {
                attrs: {
                    src: "../common/download?fileName=" + o.combo.cookImg,
                    alt: "厨师照片"
                }
            }) : e("div", [e("a-icon", {attrs: {type: o.uploading ? "loading" : "plus"}}), e("div", {staticClass: "ant-upload-text"}, [o._v("上传")])], 1)])], 1), e("a-form-model-item", {
                attrs: {
                    label: "厨师名称",
                    prop: "cookName"
                }
            }, [e("a-input", {
                attrs: {placeholder: "请输入厨师名称"}, model: {
                    value: o.combo.cookName, callback: function (t) {
                        o.$set(o.combo, "cookName", t)
                    }, expression: "combo.cookName"
                }
            })], 1), e("a-form-model-item", {
                attrs: {
                    "wrapper-col": {
                        span: 12,
                        offset: 6
                    }
                }
            }, [e("a-button", {
                attrs: {type: "primary", loading: o.loading},
                on: {click: o._submitForm}
            }, [o._v("保 存")])], 1)], 1)], 1)
        }, oo = [], to = e("2909"), eo = {1: "主菜", 2: "辅菜", 3: "小菜", 4: "例汤", 5: "面条", 6: "特色美食"}, ao = {
            props: {comboId: {type: Number, default: null}, type: {type: String, default: "1"}}, data: function () {
                return {
                    rules: {
                        comboName: [{required: !0, message: "套餐名称不能为空!", trigger: "blur"}],
                        comboCode: [{required: !0, message: "套餐编码不能为空!", trigger: "blur"}],
                        goodsIds: [{required: !0, message: "套餐菜品不能为空!", trigger: ["change", "blur"]}]
                    },
                    combo: {
                        id: null,
                        comboName: "",
                        comboCode: "",
                        comboDesc: "",
                        comboImg: "",
                        comboType: "1",
                        cookImg: "",
                        cookName: "",
                        goodsIds: "",
                        status: 2
                    },
                    tsGoods: [],
                    otherGoods: [],
                    loading: !1,
                    querying: !1,
                    uploading: !1,
                    hasError: !1,
                    errorMsg: "",
                    pkGoods: [],
                    otGoods: []
                }
            }, methods: {
                _onTsGoodsChange: function (o) {
                    this.combo.goodsIds = o.join(","), this.$refs.goodsIds.onFieldChange()
                }, _submitForm: function () {
                    var o = this;
                    this.$refs.form.validate((function (t) {
                        return t && o._saveCombo(), t
                    }))
                }, _saveCombo: function () {
                    var o = this, t = [this.combo.goodsIds].concat(Object(to["a"])(this.otherGoods)).join(","),
                        e = Object(v["a"])({}, this.combo);
                    delete e["goodsIds"], this.loading = !0, this.hasError = !1, U(e, t).then((function () {
                        o.loading = !1, o.$emit("success")
                    })).catch((function (t) {
                        o.loading = !1, o.hasError = !0, o.errorMsg = "保存失败,原因:".concat(t)
                    }))
                }, _loadCombo: function (o) {
                    var t = this;
                    return new Promise((function (e, a) {
                        K(o).then((function (o) {
                            var a = o.id, n = o.comboName, s = o.comboCode, r = o.comboDesc, i = o.comboImg,
                                c = o.comboType, d = o.cookImg, l = void 0 === d ? "" : d, u = o.cookName,
                                m = void 0 === u ? "" : u, f = o.status, p = o.goods;
                            if (t.querying = !1, t.combo = {
                                id: a,
                                comboName: n,
                                comboCode: s,
                                comboDesc: r,
                                comboImg: i,
                                comboType: c,
                                cookImg: l,
                                cookName: m,
                                status: f
                            }, p && p.length > 0) if ("1" == c) {
                                var b = p.filter((function (o) {
                                    return "1" == o.goodsType
                                }));
                                t.combo.goodsIds = b.length > 0 ? b[0].id : "";
                                var g = p.filter((function (o) {
                                    return "1" != o.goodsType
                                }));
                                t.otherGoods = g.map((function (o) {
                                    return o.id
                                }))
                            } else "3" == c ? (t.pkGoods = p, t.tsGoods = p.map((function (o) {
                                return o.id
                            })), t.combo.goodsIds = t.tsGoods.join(",")) : t.combo.goodsIds = p[0].id;
                            e()
                        })).catch((function (o) {
                            return a(o)
                        }))
                    }))
                }, _queryComboGoods: function (o) {
                    var t = this, e = "1" == o, a = "3" == o;
                    B(o).then((function (o) {
                        var n = (o["rows"] || []).reduce((function (o, t) {
                            return o[t.goodsType] || (o[t.goodsType] = {
                                label: eo[t.goodsType] || "未知",
                                value: t.goodsType,
                                goods: []
                            }), o[t.goodsType].goods.push({label: t.goodsName, value: t.id}), o
                        }), {}), s = n[e ? "1" : a ? "6" : "5"] || {};
                        t.pkGoods = s.goods || [], e && (delete n["1"], t.otGoods = Object.keys(n).map((function (o) {
                            return n[o]
                        }))), t.querying = !1
                    })).catch((function (o) {
                        return t.$emit("fail", o)
                    }))
                }, _onCommboImgUpload: function (o) {
                    var t = o.file.status;
                    "uploading" === t ? this.uploading = !0 : "done" === t ? (this.combo.comboImg = o.file.response.fileName, this.uploading = !1) : "error" === t && this.$message.error("上传图片失败!")
                }, _onCookImgUpload: function (o) {
                    var t = o.file.status;
                    "uploading" === t ? this.uploading = !0 : "done" === t ? (this.combo.cookImg = o.file.response.fileName, this.uploading = !1) : "error" === t && this.$message.error("上传图片失败!")
                }, _initEditorOnUpdate: function (o) {
                    var t = this;
                    this._loadCombo(o).then((function () {
                        return t._queryComboGoods(t.combo.comboType)
                    })).catch((function (o) {
                        return t.$emit("fail", o)
                    }))
                }, _initEditorOnCreate: function (o) {
                    this.combo.comboType = o, this._queryComboGoods(o)
                }
            }, created: function () {
                this.querying = !0, this.comboId ? this._initEditorOnUpdate(this.comboId) : this._initEditorOnCreate(this.type)
            }
        }, no = ao, so = Object(r["a"])(no, Z, oo, !1, null, null, null), ro = so.exports, io = {
            components: {ComboEditor: ro}, data: function () {
                return {
                    columns: [{title: "套餐名称", dataIndex: "comboName"}, {
                        title: "套餐编码",
                        dataIndex: "comboCode"
                    }, {title: "套餐类型A", dataIndex: "comboType", scopedSlots: {customRender: "type"}}, {
                        title: "套餐图片",
                        dataIndex: "comboImg",
                        scopedSlots: {customRender: "img"}
                    }, {title: "包涵菜品", dataIndex: "goods", scopedSlots: {customRender: "goods"}}, {
                        title: "套餐状态",
                        dataIndex: "status",
                        scopedSlots: {customRender: "status"}
                    }, {title: "操作", dataIndex: "id", scopedSlots: {customRender: "actions"}}],
                    comboList: [],
                    pagination: {pageSize: 10},
                    loading: !1,
                    isShowEditor: !1,
                    edtComboId: null,
                    comboType: null,
                    pageNo: 1
                }
            }, methods: {
                _search: function (o) {
                    this.pageNo = 1, this._queryComboList(o)
                }, _newCombo: function (o) {
                    this.comboType = o, this.edtComboId = null, this.isShowEditor = !0
                }, _modifyCombo: function (o) {
                    this.edtComboId = o, this.comboType = null, this.isShowEditor = !0
                }, _removeComboById: function (o) {
                    console.log("disabled:" + o)
                }, _onSaveComboSuccess: function () {
                    this.isShowEditor = !1, this.$message.success("保存成功!"), this._queryComboList()
                }, _onShowDialogFial: function (o) {
                    this.isShowEditor = !1, this.$message.error("编辑套餐失败,原因:" + o)
                }, _onPageChange: function (o) {
                    var t = o.current;
                    this.pageNo = t, this._queryComboList()
                }, _onMenuClick: function (o) {
                    var t = o.key;
                    this._newCombo(t)
                }, _queryComboList: function (o) {
                    var t = this;
                    this.loading = !0, A(o, this.pageNo, this.pagination.pageSize).then((function (o) {
                        t.loading = !1, t.comboList = o["rows"] || [];
                        var e = Object(v["a"])({}, t.pagination);
                        e.total = o["total"] || 0, t.pagination = e, console.log(t.comboList)
                    })).catch((function (o) {
                        t.loading = !1, t.$message.error("查询套餐失败,原因:".concat(o))
                    }))
                }, _updateComboStatus: function (o, t) {
                    var e = this;
                    J(o, t).then((function () {
                        var a = e.comboList.findIndex((function (t) {
                            return t.id == o
                        }));
                        -1 != a && (e.comboList[a].status = t), e.$message.success("更新套餐状态成功!")
                    })).catch((function (o) {
                        e.$message.error("更改套餐状态失败,原因:" + o)
                    }))
                }
            }, created: function () {
                this._queryComboList()
            }
        }, co = io, lo = Object(r["a"])(co, P, Y, !1, null, null, null), uo = lo.exports, mo = function () {
            var o = this, t = o.$createElement, e = o._self._c || t;
            return e("div", {staticClass: "ke-fs-admin-portal-main__content__inner"}, [e("div", {staticClass: "ke-fs-box"}, [e("a-row", {
                staticClass: "ke-fs-mg-b",
                attrs: {gutter: 16}
            }, [e("a-col", {attrs: {span: 8}}, [e("a-input-search", {
                attrs: {placeholder: "请输入套餐名称..."},
                on: {search: o._search}
            })], 1)], 1), e("a-row", {attrs: {gutter: 16}}, [e("a-col", {attrs: {span: 24}}, [e("a-table", {
                attrs: {
                    rowKey: "id",
                    columns: o.columns,
                    dataSource: o.comboList,
                    loading: o.loading,
                    pagination: o.pagination
                }, on: {change: o._onPageChange}, scopedSlots: o._u([{
                    key: "type", fn: function (t) {
                        return e("span", {}, [o._v(" " + o._s("1" == t ? "商务简餐" : "2" == t ? "精美面食" : "特色美食") + " ")])
                    }
                }, {
                    key: "status", fn: function (t) {
                        return [1 == t ? e("a-tag", {attrs: {color: "green"}}, [o._v("启用")]) : e("a-tag", {attrs: {color: "red"}}, [o._v("禁用")])]
                    }
                }, {
                    key: "img", fn: function (o) {
                        return e("span", {staticClass: "combo-cover"}, [e("img", {attrs: {src: "../common/download?fileName=" + o}})])
                    }
                }, {
                    key: "goods", fn: function (t) {
                        return e("div", {staticClass: "combo-goods"}, o._l(t, (function (t) {
                            return e("span", {key: t.id}, [o._v(o._s(t.goodsName))])
                        })), 0)
                    }
                }])
            })], 1)], 1)], 1)])
        }, fo = [], po = {
            data: function () {
                return {
                    columns: [{title: "套餐名称", dataIndex: "comboName"}, {
                        title: "套餐编码",
                        dataIndex: "comboCode"
                    }, {title: "套餐类型A", dataIndex: "comboType", scopedSlots: {customRender: "type"}}, {
                        title: "套餐图片",
                        dataIndex: "comboImg",
                        scopedSlots: {customRender: "img"}
                    }, {title: "包涵菜品", dataIndex: "goods", scopedSlots: {customRender: "goods"}}, {
                        title: "套餐状态",
                        dataIndex: "status",
                        scopedSlots: {customRender: "status"}
                    }], comboList: [], pagination: {pageSize: 10}, loading: !1, pageNo: 1
                }
            }, methods: {
                _search: function (o) {
                    this.pageNo = 1, this._queryComboList(o)
                }, _onPageChange: function (o) {
                    var t = o.current;
                    this.pageNo = t, this._queryComboList()
                }, _queryComboList: function (o) {
                    var t = this;
                    this.loading = !0, A(o, this.pageNo, this.pagination.pageSize, "1").then((function (o) {
                        t.loading = !1, t.comboList = o["rows"] || [];
                        var e = Object(v["a"])({}, t.pagination);
                        e.total = o["total"] || 0, t.pagination = e, console.log(t.comboList)
                    })).catch((function (o) {
                        t.loading = !1, t.$message.error("查询套餐失败,原因:".concat(o))
                    }))
                }
            }, created: function () {
                this._queryComboList()
            }
        }, bo = po, go = Object(r["a"])(bo, mo, fo, !1, null, null, null), ho = go.exports, _o = function () {
            var o = this, t = o.$createElement, e = o._self._c || t;
            return e("div", {staticClass: "ke-fs-admin-portal-main__content__inner"}, [e("div", {staticClass: "ke-fs-box"}, [e("a-row", {attrs: {gutter: 16}}, [e("a-col", {attrs: {span: 24}}, [e("a-table", {
                attrs: {rowKey: "id", columns: o.columns, dataSource: o.comboList, loading: o.loading, pagination: !1},
                scopedSlots: o._u([{
                    key: "type", fn: function (t) {
                        return e("span", {}, [o._v(" " + o._s("1" == t ? "商务简餐" : "2" == t ? "精美面食" : "特色美食") + " ")])
                    }
                }, {
                    key: "img", fn: function (o) {
                        return e("span", {staticClass: "combo-cover"}, [e("img", {attrs: {src: "../common/download?fileName=" + o}})])
                    }
                }, {
                    key: "avg", fn: function (t) {
                        return e("span", {
                            staticClass: "combo-star",
                            class: {hight: t > 3}
                        }, [o._v(" " + o._s(Math.floor(10 * t) / 10) + " ")])
                    }
                }, {
                    key: "cook", fn: function (t, a) {
                        return e("p", {staticClass: "combo-cook"}, [a.cook_name || a.cook_img ? [e("img", {attrs: {src: "../common/download?fileName=" + t}}), e("span", [o._v(o._s(a.cook_name || ""))])] : e("span", {staticClass: "empty"}, [o._v("无")])], 2)
                    }
                }, {
                    key: "goods", fn: function (t, a) {
                        return e("div", {staticClass: "combo-goods"}, [a.goods && a.goods.length > 0 ? o._l(a.goods, (function (t) {
                            return e("span", {key: t}, [o._v(o._s(t))])
                        })) : e("a-button", {
                            attrs: {size: "small", loading: !0 === a.loading},
                            on: {
                                click: function (e) {
                                    return o._loadComboGoods(t, a)
                                }
                            }
                        }, [o._v("查看")])], 2)
                    }
                }, {
                    key: "action", fn: function (t, a) {
                        return e("a-button", {
                            attrs: {size: "small", type: "primary"}, on: {
                                click: function (t) {
                                    return o._showCommboComments(a.id)
                                }
                            }
                        }, [o._v("详情")])
                    }
                }])
            })], 1)], 1)], 1), e("a-modal", {
                attrs: {
                    title: "评分详情",
                    width: 680,
                    visible: o.isShowEditor,
                    footer: null,
                    destroyOnClose: ""
                }, on: {
                    cancel: function (t) {
                        o.isShowEditor = !1
                    }
                }
            }, [e("ComboComments", {attrs: {comboId: o.comboId}})], 1)], 1)
        }, vo = [], yo = function () {
            var o = this, t = o.$createElement, e = o._self._c || t;
            return e("a-table", {
                attrs: {
                    rowKey: "id",
                    columns: o.columns,
                    dataSource: o.comboList,
                    loading: o.loading,
                    pagination: o.pagination
                }, on: {change: o._onPageChange}, scopedSlots: o._u([{
                    key: "score", fn: function (t) {
                        return e("span", {}, [o._v(o._s(t || "0"))])
                    }
                }, {
                    key: "desc", fn: function (t) {
                        return e("span", {}, [o._v(o._s(t || "默认评价."))])
                    }
                }])
            })
        }, ko = [], jo = {
            props: {comboId: {type: [Number, String], required: !0}}, data: function () {
                return {
                    columns: [{title: "套餐名称", dataIndex: "comboName"}, {
                        title: "套餐编码",
                        dataIndex: "comboCode"
                    }, {title: "评分", dataIndex: "eveScore", scopedSlots: {customRender: "score"}}, {
                        title: "评价",
                        dataIndex: "eveDesc",
                        scopedSlots: {customRender: "desc"}
                    }, {title: "评价时间", dataIndex: "orderDate"}],
                    comboList: [],
                    pagination: {pageSize: 10},
                    loading: !1,
                    pageNo: 1
                }
            }, methods: {
                _onPageChange: function (o) {
                    var t = o.current;
                    this.pageNo = t, this._queryComboList()
                }, _queryComboComments: function (o) {
                    var t = this;
                    this.loading = !0, Q(o).then((function (o) {
                        t.loading = !1, t.comboList = o["rows"] || [];
                        var e = Object(v["a"])({}, t.pagination);
                        e.total = o["total"] || 0, t.pagination = e
                    })).catch((function (o) {
                        t.loading = !1, t.$message.error("查询评价失败,原因:".concat(o))
                    }))
                }
            }, created: function () {
                this._queryComboComments(this.comboId)
            }
        }, Co = jo, Io = Object(r["a"])(Co, yo, ko, !1, null, null, null), So = Io.exports, wo = {
            components: {ComboComments: So}, data: function () {
                return {
                    columns: [{title: "套餐名称", dataIndex: "combo_name"}, {
                        title: "套餐类型",
                        dataIndex: "combo_type",
                        scopedSlots: {customRender: "type"}
                    }, {title: "套餐图片", dataIndex: "combo_img", scopedSlots: {customRender: "img"}}, {
                        title: "厨师",
                        dataIndex: "cook_img",
                        scopedSlots: {customRender: "cook"}
                    }, {title: "平均评分", dataIndex: "avg", scopedSlots: {customRender: "avg"}}, {
                        title: "评分人数",
                        dataIndex: "cnt"
                    }, {title: "菜品详情", dataIndex: "id", scopedSlots: {customRender: "goods"}}, {
                        title: "查看详情",
                        dataIndex: "idx",
                        scopedSlots: {customRender: "action"}
                    }], comboList: [], loading: !1, isShowEditor: !1, comboId: null
                }
            }, methods: {
                _queryComboStar: function () {
                    var o = this;
                    this.loading = !0, V().then((function (t) {
                        o.loading = !1, o.comboList = (t || []).map((function (o) {
                            return o.loading = !1, o.goods = [], o
                        }))
                    })).catch((function (t) {
                        o.loading = !1, o.$message.error("查询星级评分失败,原因:".concat(t))
                    }))
                }, _loadComboGoods: function (o, t) {
                    var e = this;
                    t.loading = !0, K(o).then((function (o) {
                        t.loading = !1, t.goods = (o["goods"] || []).map((function (o) {
                            return o.goodsName
                        }))
                    })).catch((function (o) {
                        e.$message.error("获取套餐菜品列表失败,原因:".concat(o))
                    }))
                }, _showCommboComments: function (o) {
                    this.comboId = o, this.isShowEditor = !0
                }
            }, created: function () {
                this._queryComboStar()
            }
        }, xo = wo, No = Object(r["a"])(xo, _o, vo, !1, null, null, null), qo = No.exports, Oo = function () {
            var o = this, t = o.$createElement, e = o._self._c || t;
            return e("div", {staticClass: "ke-fs-admin-portal-main__content__inner"}, [e("div", {staticClass: "ke-fs-box"}, [e("a-row", {attrs: {gutter: 16}}, [e("a-col", {attrs: {span: 24}}, [e("a-table", {
                attrs: {
                    rowKey: "user_id",
                    columns: o.columns,
                    dataSource: o.comboList,
                    loading: o.loading,
                    pagination: o.pagination
                }, scopedSlots: o._u([{
                    key: "type", fn: function (t) {
                        return e("span", {}, [o._v(" " + o._s("1" == t ? "商务简餐" : "2" == t ? "精美面食" : "特色美食") + " ")])
                    }
                }, {
                    key: "img", fn: function (o) {
                        return e("span", {staticClass: "combo-cover"}, [e("img", {attrs: {src: "../common/download?fileName=" + o}})])
                    }
                }, {
                    key: "name", fn: function (t, a) {
                        return e("span", {}, [o._v(" " + o._s(t && t.length > 0 ? t : "用户" + a.user_id) + " ")])
                    }
                }, {
                    key: "cnt", fn: function (t) {
                        return e("span", {}, [o._v(o._s(t) + "次")])
                    }
                }, {
                    key: "action", fn: function (t) {
                        return e("a-button", {
                            attrs: {size: "small", type: "primary"}, on: {
                                click: function (e) {
                                    return o._showComments(t)
                                }
                            }
                        }, [o._v("详情")])
                    }
                }])
            })], 1)], 1)], 1), e("a-modal", {
                attrs: {
                    title: "评价详情",
                    width: 680,
                    visible: o.isShowEditor,
                    footer: null,
                    destroyOnClose: ""
                }, on: {
                    cancel: function (t) {
                        o.isShowEditor = !1
                    }
                }
            }, [e("PersonComments", {attrs: {userId: o.userId}})], 1)], 1)
        }, $o = [], To = function () {
            var o = this, t = o.$createElement, e = o._self._c || t;
            return e("a-table", {
                attrs: {
                    rowKey: "id",
                    columns: o.columns,
                    dataSource: o.comboList,
                    loading: o.loading,
                    pagination: o.pagination
                }, on: {change: o._onPageChange}, scopedSlots: o._u([{
                    key: "score", fn: function (t) {
                        return e("span", {}, [o._v(o._s(t || "0"))])
                    }
                }, {
                    key: "desc", fn: function (t) {
                        return e("span", {}, [o._v(o._s(t || "默认评价."))])
                    }
                }])
            })
        }, Eo = [], Lo = {
            props: {userId: {type: [Number, String], required: !0}}, data: function () {
                return {
                    columns: [{title: "套餐名称", dataIndex: "comboName"}, {
                        title: "套餐编码",
                        dataIndex: "comboCode"
                    }, {title: "评分", dataIndex: "eveScore", scopedSlots: {customRender: "score"}}, {
                        title: "评价",
                        dataIndex: "eveDesc",
                        scopedSlots: {customRender: "desc"}
                    }, {title: "评价时间", dataIndex: "orderDate"}],
                    comboList: [],
                    pagination: {pageSize: 10},
                    loading: !1,
                    pageNo: 1
                }
            }, methods: {
                _onPageChange: function (o) {
                    var t = o.current;
                    this.pageNo = t, this._queryComboComments()
                }, _queryComboComments: function (o) {
                    var t = this;
                    this.loading = !0, console.log(W), W(o).then((function (o) {
                        t.loading = !1, t.comboList = o["rows"] || [];
                        var e = Object(v["a"])({}, t.pagination);
                        e.total = o["total"] || 0, t.pagination = e
                    })).catch((function (o) {
                        t.loading = !1, t.$message.error("查询评价失败,原因:".concat(o))
                    }))
                }
            }, created: function () {
                this._queryComboComments(this.userId)
            }
        }, zo = Lo, Do = Object(r["a"])(zo, To, Eo, !1, null, null, null), Go = Do.exports, Ro = {
            components: {PersonComments: Go}, data: function () {
                return {
                    columns: [{
                        title: "用户名称",
                        dataIndex: "user_name",
                        scopedSlots: {customRender: "name"}
                    }, {title: "评分次数", dataIndex: "cnt", scopedSlots: {customRender: "cnt"}}, {
                        title: "操作",
                        dataIndex: "user_id",
                        scopedSlots: {customRender: "action"}
                    }],
                    pagination: {pageSize: 10},
                    pageNo: 1,
                    comboList: [],
                    loading: !1,
                    isShowEditor: !1,
                    userId: null
                }
            }, methods: {
                _onPageChange: function (o) {
                    var t = o.current;
                    this.pageNo = t, this._queryComboStar()
                }, _queryComboStar: function () {
                    var o = this;
                    this.loading = !0, X(this.pageNo).then((function (t) {
                        o.loading = !1, o.comboList = t["rows"] || [];
                        var e = Object(v["a"])({}, o.pagination);
                        e.total = t["total"] || 0, o.pagination = e
                    })).catch((function (t) {
                        o.loading = !1, o.$message.error("查询星级评分失败,原因:".concat(t))
                    }))
                }, _showComments: function (o) {
                    this.userId = o, this.isShowEditor = !0
                }
            }, created: function () {
                this._queryComboStar()
            }
        }, Fo = Ro, Mo = Object(r["a"])(Fo, Oo, $o, !1, null, null, null), Po = Mo.exports, Yo = function () {
            var o = this, t = o.$createElement, e = o._self._c || t;
            return e("div", {staticClass: "ke-fs-admin-portal-main__content__inner"}, [e("div", {staticClass: "ke-fs-box"}, [e("a-row", {attrs: {gutter: 16}}, [e("a-col", {attrs: {span: 24}}, [e("a-table", {
                attrs: {
                    rowKey: "id",
                    columns: o.columns,
                    dataSource: o.comboList,
                    loading: o.loading,
                    pagination: !1
                }, scopedSlots: o._u([{
                    key: "index", fn: function (t) {
                        return e("span", {staticClass: "combo-index", class: {good: o.isGoodTop10}}, [o._v(o._s(t))])
                    }
                }, {
                    key: "avg", fn: function (t) {
                        return e("span", {
                            staticClass: "combo-star",
                            class: {hight: t > 3}
                        }, [o._v(" " + o._s(Math.floor(10 * t) / 10) + " ")])
                    }
                }])
            })], 1)], 1)], 1)])
        }, Uo = [], Ko = {
            data: function () {
                return {
                    columns: [{
                        title: "排名",
                        dataIndex: "index",
                        scopedSlots: {customRender: "index"}
                    }, {title: "菜品名称", dataIndex: "goods_name"}, {
                        title: "菜品评分",
                        dataIndex: "avg",
                        scopedSlots: {customRender: "avg"}
                    }], comboList: [], loading: !1
                }
            }, watch: {
                $route: function () {
                    this._queryComboTopTen(this.$router.currentRoute.query.type)
                }
            }, methods: {
                _queryComboTopTen: function (o) {
                    var t = this;
                    this.isGoodTop10 = "1" == o, this.loading = !0, H(o).then((function (o) {
                        t.loading = !1;
                        var e = o || [];
                        t.comboList = e.map((function (o, t) {
                            return o["index"] = t + 1, o
                        }))
                    })).catch((function (o) {
                        t.loading = !1, t.$message.error("查询Top10失败,原因:".concat(o))
                    }))
                }
            }, created: function () {
                this._queryComboTopTen(this.$router.currentRoute.query.type)
            }
        }, Bo = Ko, Ao = Object(r["a"])(Bo, Yo, Uo, !1, null, null, null), Jo = Ao.exports, Vo = function () {
            var o = this, t = o.$createElement, e = o._self._c || t;
            return e("div", {staticClass: "ke-fs-admin-portal-main__content__inner"}, [e("div", {staticClass: "ke-fs-box"}, [e("a-row", [o.comboList && o.comboList.length > 0 ? e("a-col", {attrs: {span: 24}}, [e("a", {
                staticStyle: {
                    float: "right",
                    "margin-bottom": "16px"
                }, attrs: {href: "../dc/comboCount/export?startDate=" + o.date + "&endDate=" + o.date, target: "_blank"}
            }, [e("a-icon", {attrs: {type: "file-excel"}}), e("span", [o._v("倒出数据")])], 1)]) : o._e()], 1), e("a-row", {attrs: {gutter: 16}}, [e("a-col", {attrs: {span: 24}}, [e("a-table", {
                attrs: {
                    rowKey: "id",
                    columns: o.columns,
                    dataSource: o.comboList,
                    loading: o.loading,
                    pagination: !1
                }, scopedSlots: o._u([{
                    key: "cook", fn: function (t) {
                        return e("span", {}, [o._v(" " + o._s(t || "无") + " ")])
                    }
                }, {
                    key: "img", fn: function (o) {
                        return e("span", {staticClass: "combo-cover"}, [e("img", {attrs: {src: "../common/download?fileName=" + o}})])
                    }
                }])
            })], 1)], 1)], 1)])
        }, Ho = [], Qo = e("c1df"), Wo = e.n(Qo);

        function Xo(o) {
            return S("/dc/comboCount/list", {startDate: o, endDate: o})
        }

        function Zo(o) {
            return S("/dc/comboCount/list", {startDate: o, endDate: o})
        }

        var ot = {
            data: function () {
                return {
                    columns: [{title: "菜名名称", dataIndex: "goodsName"}, {
                        title: "厨师名称",
                        dataIndex: "cookName",
                        scopedSlots: {customRender: "cook"}
                    }, {title: "下单数", dataIndex: "cnt"}], comboList: [], loading: !1, date: null
                }
            }, methods: {
                _queryOrders: function (o) {
                    var t = this;
                    this.date = o, this.loading = !0, Xo(o).then((function (o) {
                        t.loading = !1, t.comboList = (o || []).sort((function (o, t) {
                            return o.count - t.count
                        }))
                    })).catch((function (o) {
                        t.loading = !1, t.$message.error("查询今日订单详情失败,原因:".concat(o))
                    }))
                }
            }, created: function () {
                this._queryOrders(Wo()(Date.now()).format("YYYY-MM-DD"))
            }
        }, tt = ot, et = Object(r["a"])(tt, Vo, Ho, !1, null, null, null), at = et.exports, nt = function () {
            var o = this, t = o.$createElement, e = o._self._c || t;
            return e("div", {staticClass: "ke-fs-admin-portal-main__content__inner"}, [e("div", {staticClass: "ke-fs-box"}, [e("a-row", {
                staticClass: "ke-fs-mg-b",
                attrs: {gutter: 16}
            }, [e("a-col", {attrs: {span: 8}}, [e("a-date-picker", {
                on: {change: o._search},
                model: {
                    value: o.end, callback: function (t) {
                        o.end = t
                    }, expression: "end"
                }
            })], 1), e("a-col", {attrs: {span: 16}}, [o.comboList.length > 0 ? e("a", {
                staticStyle: {
                    float: "right",
                    "margin-bottom": "16px"
                },
                attrs: {
                    href: "../dc/comboCount/export?startDate=" + o.endString + "&endDate=" + o.endString,
                    target: "_blank"
                }
            }, [e("a-icon", {attrs: {type: "file-excel"}}), e("span", [o._v("倒出数据")])], 1) : o._e()])], 1), e("a-row", {attrs: {gutter: 16}}, [e("a-col", {attrs: {span: 24}}, [e("a-table", {
                attrs: {
                    rowKey: "id",
                    columns: o.columns,
                    dataSource: o.comboList,
                    loading: o.loading,
                    pagination: !1
                }, scopedSlots: o._u([{
                    key: "cook", fn: function (t) {
                        return e("span", {}, [o._v(" " + o._s(t || "无") + " ")])
                    }
                }, {
                    key: "img", fn: function (o) {
                        return e("span", {staticClass: "combo-cover"}, [e("img", {attrs: {src: "../common/download?fileName=" + o}})])
                    }
                }])
            })], 1)], 1)], 1)])
        }, st = [], rt = {
            data: function () {
                return {
                    columns: [{title: "菜名名称", dataIndex: "goodsName"}, {
                        title: "厨师名称",
                        dataIndex: "cookName",
                        scopedSlots: {customRender: "cook"}
                    }, {title: "下单数", dataIndex: "cnt"}],
                    defaultValue: null,
                    comboList: [],
                    loading: !1,
                    pageNo: 1,
                    end: null
                }
            }, computed: {
                endString: {
                    get: function () {
                        return this.end.format("YYYY-MM-DD")
                    }
                }
            }, methods: {
                _search: function (o) {
                    this._queryOrders(o.format("YYYY-MM-DD"))
                }, _queryOrders: function (o) {
                    var t = this;
                    this.loading = !0, Zo(o).then((function (o) {
                        t.loading = !1, t.comboList = (o || []).sort((function (o, t) {
                            return o.count - t.count
                        }))
                    })).catch((function (o) {
                        t.loading = !1, t.$message.error("查询今日订单详情失败,原因:".concat(o))
                    }))
                }, _onPageChange: function (o) {
                    var t = o.current;
                    this.pageNo = t, this._queryOrders(this.end.format("YYYY-MM-DD"))
                }
            }, created: function () {
                var o = Date.now(), t = new Date(o - 864e5), e = Wo()(t);
                this.end = e, this._queryOrders(this.end.format("YYYY-MM-DD"))
            }
        }, it = rt, ct = Object(r["a"])(it, nt, st, !1, null, null, null), dt = ct.exports;
        a["a"].use(l["a"]);
        var lt = [{
            path: "/",
            component: g,
            children: [{path: "/foodsMgr", component: M, meta: {name: "菜品管理"}}, {
                path: "/comboMgr",
                component: uo,
                meta: {name: "套餐管理"}
            }, {path: "/currentCombo", component: ho, meta: {name: "当前套餐"}}, {
                path: "/comboStar",
                component: qo,
                meta: {name: "星级评分"}
            }, {path: "/comboPerson", component: Po, meta: {name: "点评人员"}}, {
                path: "/comboTop",
                component: Jo,
                meta: {name: "菜品Top10"}
            }, {path: "/comboTop?type=2", component: Jo, meta: {name: "菜品Top10"}}, {
                path: "/todayOrders",
                component: at,
                meta: {name: "当日订单统计"}
            }, {path: "/historyOrders", component: dt, meta: {name: "历史订单统计"}}, {path: "", redirect: "/todayOrders"}]
        }], ut = new l["a"]({routes: lt}), mt = ut, ft = e("f23d");
        e("96cf"), e("202f"), e("6e0c");
        a["a"].use(ft["a"]), a["a"].config.productionTip = !1, new a["a"]({
            router: mt, render: function (o) {
                return o(d)
            }
        }).$mount("#app")
    }, "6e0c": function (o, t, e) {
    }
});
//# sourceMappingURL=app.f54a06f6.js.map