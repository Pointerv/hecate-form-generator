!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("core-js/modules/es.function.name.js"),require("@babel/runtime-corejs3/helpers/esm/typeof"),require("vuetify/lib"),require("vue-codemirror"),require("codemirror/lib/codemirror.css"),require("codemirror/theme/material-darker.css"),require("codemirror/mode/css/css.js"),require("codemirror/mode/dockerfile/dockerfile.js"),require("codemirror/mode/htmlmixed/htmlmixed.js"),require("codemirror/mode/http/http.js"),require("codemirror/mode/javascript/javascript.js"),require("codemirror/mode/jsx/jsx.js"),require("codemirror/mode/markdown/markdown.js"),require("codemirror/mode/powershell/powershell.js"),require("codemirror/mode/properties/properties.js"),require("codemirror/mode/python/python.js"),require("codemirror/mode/sass/sass.js"),require("codemirror/mode/shell/shell.js"),require("codemirror/mode/sql/sql.js"),require("codemirror/mode/vue/vue.js"),require("codemirror/mode/xml/xml.js"),require("codemirror/mode/yaml/yaml.js"),require("codemirror/addon/hint/show-hint.css"),require("codemirror/addon/hint/show-hint.js"),require("codemirror/addon/hint/css-hint.js"),require("codemirror/addon/hint/html-hint.js"),require("codemirror/addon/hint/javascript-hint.js"),require("codemirror/addon/hint/sql-hint.js"),require("codemirror/addon/hint/xml-hint.js"),require("codemirror/addon/hint/anyword-hint.js"),require("script-loader!jsonlint"),require("codemirror/addon/lint/lint.css"),require("codemirror/addon/lint/lint.js"),require("codemirror/addon/lint/json-lint.js"),require("codemirror/addon/lint/css-lint.js"),require("codemirror/addon/lint/html-lint.js"),require("codemirror/addon/lint/javascript-lint.js"),require("codemirror/addon/lint/yaml-lint.js"),require("codemirror/addon/fold/foldcode.js"),require("codemirror/addon/fold/foldgutter.js"),require("codemirror/addon/fold/foldgutter.css"),require("codemirror/addon/fold/brace-fold.js"),require("codemirror/addon/fold/xml-fold.js"),require("codemirror/addon/fold/comment-fold.js"),require("codemirror/addon/fold/markdown-fold.js"),require("codemirror/addon/fold/indent-fold.js"),require("codemirror/addon/edit/closebrackets.js"),require("codemirror/addon/edit/closetag.js"),require("codemirror/addon/edit/continuelist.js"),require("codemirror/addon/edit/matchbrackets.js"),require("codemirror/addon/edit/matchtags.js"),require("codemirror/addon/search/match-highlighter.js"),require("codemirror/addon/search/jump-to-line.js"),require("codemirror/addon/search/matchesonscrollbar.css"),require("codemirror/addon/search/matchesonscrollbar.js"),require("codemirror/addon/search/search.js"),require("codemirror/addon/search/searchcursor.js"),require("codemirror/addon/dialog/dialog.js"),require("codemirror/addon/dialog/dialog.css"),require("codemirror/addon/selection/active-line.js"),require("codemirror/addon/selection/mark-selection.js"),require("codemirror/addon/display/autorefresh.js"),require("vue-runtime-helpers/dist/normalize-component.mjs"),require("jshint"),require("csslint"),require("jsonlint")):"function"==typeof define&&define.amd?define(["exports","core-js/modules/es.function.name.js","@babel/runtime-corejs3/helpers/esm/typeof","vuetify/lib","vue-codemirror","codemirror/lib/codemirror.css","codemirror/theme/material-darker.css","codemirror/mode/css/css.js","codemirror/mode/dockerfile/dockerfile.js","codemirror/mode/htmlmixed/htmlmixed.js","codemirror/mode/http/http.js","codemirror/mode/javascript/javascript.js","codemirror/mode/jsx/jsx.js","codemirror/mode/markdown/markdown.js","codemirror/mode/powershell/powershell.js","codemirror/mode/properties/properties.js","codemirror/mode/python/python.js","codemirror/mode/sass/sass.js","codemirror/mode/shell/shell.js","codemirror/mode/sql/sql.js","codemirror/mode/vue/vue.js","codemirror/mode/xml/xml.js","codemirror/mode/yaml/yaml.js","codemirror/addon/hint/show-hint.css","codemirror/addon/hint/show-hint.js","codemirror/addon/hint/css-hint.js","codemirror/addon/hint/html-hint.js","codemirror/addon/hint/javascript-hint.js","codemirror/addon/hint/sql-hint.js","codemirror/addon/hint/xml-hint.js","codemirror/addon/hint/anyword-hint.js","script-loader!jsonlint","codemirror/addon/lint/lint.css","codemirror/addon/lint/lint.js","codemirror/addon/lint/json-lint.js","codemirror/addon/lint/css-lint.js","codemirror/addon/lint/html-lint.js","codemirror/addon/lint/javascript-lint.js","codemirror/addon/lint/yaml-lint.js","codemirror/addon/fold/foldcode.js","codemirror/addon/fold/foldgutter.js","codemirror/addon/fold/foldgutter.css","codemirror/addon/fold/brace-fold.js","codemirror/addon/fold/xml-fold.js","codemirror/addon/fold/comment-fold.js","codemirror/addon/fold/markdown-fold.js","codemirror/addon/fold/indent-fold.js","codemirror/addon/edit/closebrackets.js","codemirror/addon/edit/closetag.js","codemirror/addon/edit/continuelist.js","codemirror/addon/edit/matchbrackets.js","codemirror/addon/edit/matchtags.js","codemirror/addon/search/match-highlighter.js","codemirror/addon/search/jump-to-line.js","codemirror/addon/search/matchesonscrollbar.css","codemirror/addon/search/matchesonscrollbar.js","codemirror/addon/search/search.js","codemirror/addon/search/searchcursor.js","codemirror/addon/dialog/dialog.js","codemirror/addon/dialog/dialog.css","codemirror/addon/selection/active-line.js","codemirror/addon/selection/mark-selection.js","codemirror/addon/display/autorefresh.js","vue-runtime-helpers/dist/normalize-component.mjs","jshint","csslint","jsonlint"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).main={},null,r._typeof,r.Vuetify,r.vueCodemirror,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,r.__vue_normalize__,r.jshint,r.csslint,r.jsonlint)}(this,(function(r,e,o,d,i,n,s,l,t,c,m,a,u,h,j,f,p,q,y,g,v,w,b,k,x,C,S,T,M,_,O,$,H,z,L,B,I,N,R,V,W,J,A,D,E,F,G,K,P,U,Q,X,Y,Z,rr,er,or,dr,ir,nr,sr,lr,tr,cr,mr,ar,ur){"use strict";function hr(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var jr=hr(o),fr=hr(cr),pr=hr(ar),qr={name:"HCodeMirror",components:{codemirror:i.codemirror},props:{value:{type:String,default:"",required:!0},theme:{type:String,default:"default"},mode:{type:String,default:"default"},readOnly:{type:Boolean,default:!1}},data:function(){return{sourceCode:""}},computed:{currentMode:function(){return this.mode&&"default"!=this.mode?this.mode:"application/json"},currentTheme:function(){var r=this.theme&&"default"!=this.theme?this.theme:"material-darker";return require("codemirror/theme/"+r+".css"),r},options:function(){return{mode:this.currentMode,theme:this.currentTheme,indentUnit:4,smartIndent:!1,tabSize:4,indentWithTabs:!0,extraKeys:{Ctrl:"autocomplete"},lineWrapping:!0,lineNumbers:!0,gutters:["CodeMirror-lint-markers","CodeMirror-linenumbers","CodeMirror-foldgutter"],readOnly:this.readOnly,showCursorWhenSelecting:!0,autofocus:!0,dragDrop:!0,spellcheck:!0,autocorrect:!0,matchBrackets:!0,autoCloseBrackets:!0,matchTags:{bothTags:!0},autoCloseTags:!0,foldGutter:!0,highlightSelectionMatches:{minChars:2,style:"matchhighlight",trim:!0,showToken:!1},lint:!0,styleSelectedText:!0,styleActiveLine:!0,hintOptions:{completeSingle:!1}}},currentCodeMirror:function(){return this.$refs.editor.codemirror}},created:function(){},watch:{value:{handler:function(r,e){this.sourceCode=r},immediate:!0},sourceCode:{handler:function(r,e){this.$emit("input",r)}},mode:{handler:function(r,e){this.resetLint()}}},methods:{resetLint:function(){var r=this;this.$refs.editor.codemirror.setOption("lint",!1),this.$nextTick((function(){r.$refs.editor.codemirror.setOption("lint",!0)}))},onReady:function(r){r.on("keypress",(function(){r.showHint({completeSingle:!1})}))}}},yr=fr.default({render:function(){var r=this,e=r.$createElement;return(r._self._c||e)("codemirror",{ref:"editor",attrs:{options:r.options},on:{ready:r.onReady},model:{value:r.sourceCode,callback:function(e){r.sourceCode=e},expression:"sourceCode"}})},staticRenderFns:[]},undefined,qr,undefined,false,undefined,!1,void 0,void 0,void 0);window.JSHINT=mr.JSHINT,window.CSSLint=pr.default,window.jsonlint=ur.parser,yr.install=function(r){r.component(yr.name,yr)},null!=("undefined"==typeof window?"undefined":jr.default(window))&&window.Vue&&yr.install(window.Vue),r.HCodeMirror=yr,Object.defineProperty(r,"__esModule",{value:!0})}));
