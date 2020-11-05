!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(require('vuetify/lib'), require('@hecate/h-button'), require('@hecate/h-code-mirror'))
        : 'function' == typeof define && define.amd
        ? define(['vuetify/lib', '@hecate/h-button', '@hecate/h-code-mirror'], t)
        : t((e = 'undefined' != typeof globalThis ? globalThis : e || self).Vuetify, e.HButton, e.HCodeMirror);
})(this, function (e, t, o) {
    'use strict';
    function n(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
    }
    var r = n(t),
        a = n(o);
    function i(e, t, o, n, r, a, i, d, l, s) {
        'boolean' != typeof i && ((l = d), (d = i), (i = !1));
        const c = 'function' == typeof o ? o.options : o;
        let h;
        if (
            (e &&
                e.render &&
                ((c.render = e.render),
                (c.staticRenderFns = e.staticRenderFns),
                (c._compiled = !0),
                r && (c.functional = !0)),
            n && (c._scopeId = n),
            a
                ? ((h = function (e) {
                      (e =
                          e ||
                          (this.$vnode && this.$vnode.ssrContext) ||
                          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                          'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                          (e = __VUE_SSR_CONTEXT__),
                          t && t.call(this, l(e)),
                          e && e._registeredComponents && e._registeredComponents.add(a);
                  }),
                  (c._ssrRegister = h))
                : t &&
                  (h = i
                      ? function (e) {
                            t.call(this, s(e, this.$root.$options.shadowRoot));
                        }
                      : function (e) {
                            t.call(this, d(e));
                        }),
            h)
        )
            if (c.functional) {
                const e = c.render;
                c.render = function (t, o) {
                    return h.call(o), e(t, o);
                };
            } else {
                const e = c.beforeCreate;
                c.beforeCreate = e ? [].concat(e, h) : [h];
            }
        return o;
    }
    const d = i(
        {
            render: function () {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o(
                    'v-card',
                    [
                        o(
                            'v-toolbar',
                            { attrs: { dense: '', color: 'blue darken-3', dark: '' } },
                            [
                                o(
                                    'v-btn',
                                    { attrs: { large: '', icon: '' } },
                                    [o('v-icon', [e._v('mdi-volleyball')])],
                                    1
                                ),
                                e._v(' '),
                                o('v-toolbar-title', [e._v('Hecate Code Editor')]),
                                e._v(' '),
                                o('v-spacer'),
                                e._v(' '),
                                o('h-button', { attrs: { icon: '', 'icon-name': 'mdi-lock-reset', tooltip: '重置' } }),
                                e._v(' '),
                                o('v-switch', {
                                    staticClass: 'ml-3',
                                    attrs: {
                                        label: e.readOnlyLabel,
                                        'true-value': !1,
                                        'false-value': !0,
                                        inset: '',
                                        'hide-details': '',
                                    },
                                    model: {
                                        value: e.readOnly,
                                        callback: function (t) {
                                            e.readOnly = t;
                                        },
                                        expression: 'readOnly',
                                    },
                                }),
                                e._v(' '),
                                o('v-select', {
                                    staticClass: 'ml-3',
                                    attrs: {
                                        items: e.themeOptions,
                                        flat: '',
                                        'solo-inverted': '',
                                        'hide-details': '',
                                        dense: '',
                                        label: '请选择主题',
                                        'prepend-inner-icon': 'mdi-theme-light-dark',
                                        'no-data-text': '没有数据',
                                    },
                                    on: { change: e.onThemeChange },
                                }),
                                e._v(' '),
                                o('v-select', {
                                    staticClass: 'ml-3',
                                    attrs: {
                                        items: e.modeOptions,
                                        flat: '',
                                        'solo-inverted': '',
                                        'hide-details': '',
                                        dense: '',
                                        label: '请选择编辑模式',
                                        'prepend-inner-icon': 'mdi-codepen',
                                        'no-data-text': '没有数据',
                                    },
                                    on: { change: e.onModeChange },
                                }),
                                e._v(' '),
                                o('v-btn', { attrs: { icon: '' } }, [o('v-icon', [e._v('mdi-apps')])], 1),
                            ],
                            1
                        ),
                        e._v(' '),
                        o('h-code-mirror', {
                            attrs: { mode: e.codeMirrorMode, theme: e.codeMirrorTheme, 'read-only': e.readOnly },
                            model: {
                                value: e.sourceCode,
                                callback: function (t) {
                                    e.sourceCode = t;
                                },
                                expression: 'sourceCode',
                            },
                        }),
                    ],
                    1
                );
            },
            staticRenderFns: [],
        },
        undefined,
        {
            name: 'HCodeEditor',
            components: {
                HButton: r.default,
                HCodeMirror: a.default,
                VIcon: e.VIcon,
                VBtn: e.VBtn,
                VToolbarTitle: e.VToolbarTitle,
                VSpacer: e.VSpacer,
                VSwitch: e.VSwitch,
                VSelect: e.VSelect,
                VToolbar: e.VToolbar,
                VCard: e.VCard,
            },
            data: () => ({
                modeOptions: [
                    'default',
                    'json',
                    'dockerfile',
                    'html',
                    'http',
                    'javascript',
                    'jsx',
                    'markdown',
                    'powershell',
                    'properties',
                    'python',
                    'sass',
                    'shell',
                    'sql',
                    'css',
                    'xml',
                    'yaml',
                    'vue',
                ],
                themeOptions: [
                    'default',
                    '3024-day',
                    '3024-night',
                    'abcdef',
                    'ambiance',
                    'ayu-dark',
                    'ayu-mirage',
                    'base16-dark',
                    'base16-light',
                    'bespin',
                    'blackboard',
                    'cobalt',
                    'colorforth',
                    'darcula',
                    'dracula',
                    'duotone-dark',
                    'duotone-light',
                    'eclipse',
                    'elegant',
                    'erlang-dark',
                    'gruvbox-dark',
                    'hopscotch',
                    'icecoder',
                    'idea',
                    'isotope',
                    'lesser-dark',
                    'liquibyte',
                    'lucario',
                    'material',
                    'material-darker',
                    'material-palenight',
                    'material-ocean',
                    'mbo',
                    'mdn-like',
                    'midnight',
                    'monokai',
                    'moxer',
                    'neat',
                    'neo',
                    'night',
                    'nord',
                    'oceanic-next',
                    'panda-syntax',
                    'paraiso-dark',
                    'paraiso-light',
                    'pastel-on-dark',
                    'railscasts',
                    'rubyblue',
                    'seti',
                    'shadowfox',
                    'solarized dark',
                    'solarized light',
                    'the-matrix',
                    'tomorrow-night-bright',
                    'tomorrow-night-eighties',
                    'ttcn',
                    'twilight',
                    'vibrant-ink',
                    'xq-dark',
                    'xq-light',
                    'yeti',
                    'yonce',
                    'zenburn',
                ],
                codeMirrorMode: 'default',
                codeMirrorTheme: 'default',
                sourceCode: '',
                readOnly: !1,
            }),
            computed: {
                readOnlyLabel() {
                    return this.readOnly ? '只读' : '编辑';
                },
            },
            methods: {
                switchCodeMirrorMode(e) {
                    switch (e) {
                        case 'json':
                            return 'application/json';
                        case 'html':
                            return 'htmlmixed';
                        default:
                            return e;
                    }
                },
                onModeChange(e) {
                    this.codeMirrorMode = this.switchCodeMirrorMode(e);
                },
                onThemeChange(e) {
                    this.codeMirrorTheme = e;
                },
            },
        },
        undefined,
        false,
        undefined,
        !1,
        void 0,
        void 0,
        void 0
    );
    (d.install = function (e) {
        e.component(d.name, d);
    }),
        null != typeof window && window.Vue && d.install(window.Vue);
});
