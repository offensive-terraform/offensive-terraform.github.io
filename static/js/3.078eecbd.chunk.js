(this["webpackJsonpoffensive-terrraform.github.io"]=this["webpackJsonpoffensive-terrraform.github.io"]||[]).push([[3],{99:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(86),a=n(55),i=n(37),l=n.n(i),h=n(1),u=n(3),s=n(5),d=n(85),f=h.default.a.withConfig({displayName:"StyledAnchor",componentId:"sc-1rp7lwl-0"})(["box-sizing:border-box;"," color:",";"," text-decoration:",";cursor:pointer;"," "," "," "," "," ",""],(function(e){return function(e){if(e.size){var t=e.size||"medium",n=e.theme.text[t];return Object(h.css)(["font-size:",";line-height:",";"],n.size,n.height)}return Object(h.css)(["font-size:inherit;line-height:inherit;"])}(e)}),(function(e){return Object(s.c)(e.colorProp||e.theme.anchor.color,e.theme)}),(function(e){return e.theme.anchor.fontWeight&&"font-weight: "+e.theme.anchor.fontWeight+";"}),(function(e){return e.hasIcon?"none":e.theme.anchor.textDecoration}),d.f,(function(e){return!e.disabled&&e.theme.anchor.hover&&Object(h.css)(["&:hover{"," "," ","}"],e.theme.anchor.hover.textDecoration&&"text-decoration: "+e.theme.anchor.hover.textDecoration+";",e.theme.anchor.hover.fontWeight&&"font-weight: "+e.theme.anchor.hover.fontWeight+";",e.theme.anchor.hover.extend)}),(function(e){return e.hasIcon&&!e.hasLabel&&"\n    padding: "+e.theme.global.edgeSize.small+";\n  "}),(function(e){return e.disabled&&"\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n"}),(function(e){return e.focus&&Object(d.e)()}),(function(e){return e.theme.anchor.extend}));function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}f.defaultProps={},Object.setPrototypeOf(f.defaultProps,u.a);var p=Object(r.forwardRef)((function(e,t){var n=e.a11yTitle,c=e.children,i=e.color,l=e.disabled,d=e.href,p=e.icon,b=e.label,g=e.onBlur,k=e.onClick,x=e.onFocus,v=e.reverse,y=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["a11yTitle","children","color","disabled","href","icon","label","onBlur","onClick","onFocus","reverse"]),O=Object(r.useContext)(h.ThemeContext)||u.a.theme,j=Object(r.useState)(),B=j[0],C=j[1];Object(r.useEffect)((function(){(p||b)&&c&&console.warn("Anchor should not have children if icon or label is provided")}),[c,p,b]);var w=p;p&&!p.props.color&&(w=Object(r.cloneElement)(p,{color:Object(s.c)(i||O.anchor.color,O)}));var P=v?b:w,E=v?w:b;return o.a.createElement(f,m({},y,{ref:t,"aria-label":n,colorProp:i,disabled:l,hasIcon:!!p,focus:B,hasLabel:b,reverse:v,href:l?void 0:d,onClick:l?void 0:k,onFocus:function(e){C(!0),x&&x(e)},onBlur:function(e){C(!1),g&&g(e)}}),P&&E?o.a.createElement(a.a,{as:"span",direction:"row",align:"center",gap:"small",style:{display:"inline-flex"}},P,E):P||E||c)}));p.displayName="Anchor";var b=p;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this,t=this.props,n=t.path,r=t.method,c=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["path","method"]);return o.a.createElement(b,g({},c,{href:n,onClick:function(t){var o=e.props.onClick,c=e.context.router;if(t){var a=t.ctrlKey||t.metaKey;if(a)return}if(c&&(t.preventDefault(),(c.history||c)[r](n)),o){for(var i=arguments.length,l=new Array(i>1?i-1:0),h=1;h<i;h++)l[h-1]=arguments[h];o.apply(void 0,[t].concat(l))}}}))},r}(r.Component);k(x,"contextTypes",{router:l.a.shape({}).isRequired}),k(x,"defaultProps",{method:"push"});var v=x,y=n(96),O=n(92),j=n(18),B=o.a.createContext({useFormField:function(e){return{error:e.error,info:e.info}},useFormInput:function(e,t,n){var o=Object(r.useState)(void 0!==t?t:n),c=o[0],a=o[1];return[void 0!==t?t:c,function(e){void 0!==n&&a(e)}]}}),C=Object(h.css)([":hover input:not([disabled]) + div,:hover input:not([disabled]) + span{border-color:",";}"],(function(e){return Object(s.c)(e.theme.checkBox.hover.border.color,e.theme)})),w=h.default.svg.withConfig({displayName:"StyledCheckBox__StyledCheckBoxIcon",componentId:"sc-1dbk5ju-0"})(["box-sizing:border-box;stroke-width:",";stroke:",";width:",";height:",";",";"],(function(e){return e.theme.checkBox.check.thickness}),(function(e){return Object(s.c)(e.theme.checkBox.color||"control",e.theme)}),(function(e){return e.theme.checkBox.icon.size||e.theme.checkBox.size}),(function(e){return e.theme.checkBox.icon.size||e.theme.checkBox.size}),(function(e){return e.theme.checkBox.icon.extend}));w.defaultProps={},Object.setPrototypeOf(w.defaultProps,u.a);var P=h.default.label.withConfig({displayName:"StyledCheckBox__StyledCheckBoxContainer",componentId:"sc-1dbk5ju-1"})(["display:flex;flex-direction:row;align-items:center;user-select:none;width:fit-content;"," "," "," ",""],(function(e){return e.disabled&&"\n  opacity: 0.5;\n  cursor: default;\n"}),(function(e){return!e.disabled&&"cursor: pointer;"}),(function(e){return e.theme.checkBox.hover.border.color&&C}),(function(e){return e.theme.checkBox.extend}));P.defaultProps={},Object.setPrototypeOf(P.defaultProps,u.a);var E=h.default.input.withConfig({displayName:"StyledCheckBox__StyledCheckBoxInput",componentId:"sc-1dbk5ju-2"})(["opacity:0;-moz-appearance:none;width:0;height:0;margin:0;",":checked + span > span{left:calc( "," - "," );background:",";}"],(function(e){return!e.disabled&&"cursor: pointer;"}),(function(e){return e.theme.checkBox.toggle.size}),(function(e){return e.theme.checkBox.size}),(function(e){return Object(s.c)(e.theme.checkBox.color||"control",e.theme)}));E.defaultProps={},Object.setPrototypeOf(E.defaultProps,u.a);var z=h.default.div.withConfig({displayName:"StyledCheckBox__StyledCheckBoxBox",componentId:"sc-1dbk5ju-3"})(["",";",";"],(function(e){return e.focus&&Object(d.e)()}),(function(e){return e.theme.checkBox.check.extend}));z.defaultProps={},Object.setPrototypeOf(z.defaultProps,u.a);var S=h.default.span.withConfig({displayName:"StyledCheckBox__StyledCheckBoxToggle",componentId:"sc-1dbk5ju-4"})(["box-sizing:border-box;vertical-align:middle;display:inline-block;width:",";height:",";border:"," solid;border-color:",";border-radius:",";background-color:",";",";",";"],(function(e){return e.theme.checkBox.toggle.size}),(function(e){return e.theme.checkBox.size}),(function(e){return e.theme.checkBox.border.width}),(function(e){return Object(s.c)(e.theme.checkBox.border.color,e.theme)}),(function(e){return e.theme.checkBox.toggle.radius}),(function(e){return e.theme.checkBox.toggle.background?Object(s.c)(e.theme.checkBox.toggle.background,e.theme):"transparent"}),(function(e){return e.focus&&Object(d.e)()}),(function(e){return e.theme.checkBox.toggle.extend}));S.defaultProps={},Object.setPrototypeOf(S.defaultProps,u.a);var _=h.default.span.withConfig({displayName:"StyledCheckBox__StyledCheckBoxKnob",componentId:"sc-1dbk5ju-5"})(["box-sizing:border-box;position:relative;display:inherit;top:-",";left:-",";transition:all 0.3s;width:",";height:",";background:",";border-radius:",";",";"],(function(e){return e.theme.checkBox.border.width}),(function(e){return e.theme.checkBox.border.width}),(function(e){return e.theme.checkBox.size}),(function(e){return e.theme.checkBox.size}),(function(e){return Object(s.c)(e.theme.checkBox.toggle.color[e.theme.dark?"dark":"light"],e.theme)}),(function(e){return e.theme.checkBox.toggle.radius}),(function(e){return e.theme.checkBox.toggle.knob.extend}));_.defaultProps={},Object.setPrototypeOf(_.defaultProps,u.a);var I=h.default.div.withConfig({displayName:"StyledCheckBox",componentId:"sc-1dbk5ju-6"})(["flex-shrink:0;"]);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}I.defaultProps={},Object.setPrototypeOf(I.defaultProps,u.a);var F=function(e){"checkbox"!==e.target.type&&e.stopPropagation()},T=Object(r.forwardRef)((function(e,t){var n,c=e.a11yTitle,i=e.checked,l=e.disabled,d=e.focus,f=e.id,m=e.label,p=e.name,b=e.onBlur,g=e.onChange,k=e.onFocus,x=e.reverse,v=e.toggle,y=e.indeterminate,O=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["a11yTitle","checked","disabled","focus","id","label","name","onBlur","onChange","onFocus","reverse","toggle","indeterminate"]),C=Object(r.useContext)(h.ThemeContext)||u.a.theme,T=Object(r.useContext)(B).useFormInput(p,i,!1),N=T[0],M=T[1],A=Object(r.useState)(d),R=A[0],W=A[1];Object(r.useEffect)((function(){return W(d)}),[d]),Object(r.useEffect)((function(){i&&y&&console.warn('Checkbox cannot be "checked" and "indeterminate" at the same time.'),v&&y&&console.warn('Checkbox of type toggle does not have "indeterminate" state.')}),[i,v,y]);var D,K={checked:N,disabled:l,focus:R,reverse:x,toggle:v,indeterminate:y};l&&N&&(D=o.a.createElement("input",{name:p,type:"hidden",value:"true"}));var J=C.checkBox.icons,Y=J.checked,q=J.indeterminate,G=Object(s.c)(C.checkBox.border.color,C);N&&(G=Object(s.c)(C.checkBox.color||"control",C));var H=v?o.a.createElement(S,K,o.a.createElement(_,K)):o.a.createElement(z,L({as:a.a,align:"center",justify:"center",width:C.checkBox.size,height:C.checkBox.size,border:{size:C.checkBox.border.width,color:G},round:C.checkBox.check.radius},K),!y&&N&&(Y?o.a.createElement(Y,{theme:C,as:w}):o.a.createElement(w,L({theme:C,viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet"},K),o.a.createElement("path",{fill:"none",d:"M6,11.3 L10.3,16 L18,6.2"}))),!N&&y&&(q?o.a.createElement(q,{theme:C,as:w}):o.a.createElement(w,L({theme:C,viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet"},K),o.a.createElement("path",{fill:"none",d:"M6,12 L18,12"})))),Q=x?"left":"right",U=o.a.createElement(I,L({as:a.a,align:"center",justify:"center",margin:m&&(n={},n[Q]=C.checkBox.gap||"small",n)},K),o.a.createElement(E,L({},O,{ref:t,type:"checkbox"},Object(j.c)({id:f,name:p,checked:N,disabled:l}),K,{onFocus:function(e){W(!0),k&&k(e)},onBlur:function(e){W(!1),b&&b(e)},onChange:function(e){M(e.target.checked),g&&g(e)}})),H,D),V="string"===typeof m?o.a.createElement("span",null,m):m,X=x?V:U,Z=x?U:V;return o.a.createElement(P,L({"aria-label":c,reverse:x},Object(j.c)({htmlFor:f,disabled:l}),{checked:N,onClick:F},K),X,Z)}));T.displayName="CheckBox";var N=T,M=n(16);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var R=function(e){return o.a.createElement(M.a,A({viewBox:"0 0 24 24",a11yTitle:"Cloud"},e),o.a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M18,17 L18,18 C18,21 16,22 13,22 L11,22 C8,22 6,21 6,18 L6,17 C3.23857625,17 1,14.7614237 1,12 C1,9.23857625 3.23857625,7 6,7 L12,7 M6,7 L6,6 C6,3 8,2 11,2 L13,2 C16,2 18,3 18,6 L18,7 C20.7614237,7 23,9.23857625 23,12 C23,14.7614237 20.7614237,17 18,17 L12,17"}))};t.default=function(e){var t=o.a.useContext(c.a),n=e.themeChecked,r=e.onThemeChange;return o.a.createElement(a.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",width:"xlarge",alignSelf:"center",gap:"medium",pad:{left:"medium",right:"small",vertical:"small"}},e),o.a.createElement(v,{path:"/",icon:o.a.createElement(R,{size:"large"}),label:"small"!==t&&o.a.createElement(y.a,{size:"xlarge"},"Offensive Terraform")}),o.a.createElement(a.a,{direction:"row",gap:"small"},o.a.createElement(O.a,{plain:!0,href:"https://registry.terraform.io/namespaces/offensive-terraform",target:"_blank",rel:"noreferrer"},(function(e){var t=e.hover;return o.a.createElement(a.a,{pad:{vertical:"small",horizontal:"medium"},round:"xlarge",background:t?"active":"control"},o.a.createElement(y.a,null,"Modules"))})),o.a.createElement(N,{toggle:!0,checked:n,onChange:function(){r(!n)}})))}}}]);
//# sourceMappingURL=3.078eecbd.chunk.js.map