(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{535:function(module,exports,__webpack_require__){__webpack_require__(536),__webpack_require__(690),__webpack_require__(961),__webpack_require__(901),__webpack_require__(963),__webpack_require__(964),module.exports=__webpack_require__(965)},602:function(module,exports){},690:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__(82).c.setConfig({previewTabs:{canvas:null,"storybook/docs/panel":{index:1,hidden:!1},"storybook/actions/panel":{disabled:!0,hidden:!0}},options:{showNav:!0,showPanel:!0,panelPosition:"bottom"}})},957:function(module,exports,__webpack_require__){var api=__webpack_require__(958),content=__webpack_require__(959);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},959:function(module,exports,__webpack_require__){(exports=__webpack_require__(960)(!1)).push([module.i,".e-storybook-addon {\n\tpadding: 30px;\n}\n\n.e-storybook-addon__section {\n\tmargin-bottom: 30px;\n}\n\npre code {\n\tpadding: 15px;\n\tborder-radius: 5px;\n\tbackground-color: lightgrey;\n}",""]),module.exports=exports},963:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(82),types=__webpack_require__(245),addon_panel=__webpack_require__(482),dist_esm=__webpack_require__(22);__webpack_require__(23),__webpack_require__(5),__webpack_require__(9),__webpack_require__(72),__webpack_require__(957);function Usage(props){var UsageSection=function UsageSection(innerProps){return react_default.a.createElement("section",{className:"e-storybook-addon__section"},innerProps.children)};return react_default.a.createElement("main",{className:"e-storybook-addon"},react_default.a.createElement(UsageSection,null,props.import&&react_default.a.createElement("pre",null,react_default.a.createElement("code",null,props.import))),function getExamples(){if(props.examples)return react_default.a.createElement(UsageSection,null,props.examples.map((function(example,index){return react_default.a.createElement("div",{className:"e-storybook-addon__example",key:index},react_default.a.createElement("h2",null,example.title),react_default.a.createElement("p",null,example.description),react_default.a.createElement("pre",null,react_default.a.createElement("code",null,example.code.trim())))})))}())}var PANEL_ID="".concat("usage","/panel");esm.c.register("usage",(function(api){esm.c.add(PANEL_ID,{type:types.b.PANEL,title:"Usage",render:function render(_ref){var active=_ref.active,key=_ref.key;return react_default.a.createElement(addon_panel.a,{active:active,key:key},function getUsage(){var usageParams=Object(dist_esm.i)("usage");return react_default.a.createElement(Usage,usageParams)}())}})}))}},[[535,2,3]]]);