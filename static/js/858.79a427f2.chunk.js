"use strict";(self.webpackChunkcrypto_tracker=self.webpackChunkcrypto_tracker||[]).push([[858],{858:(e,t,r)=>{r.d(t,{mN:()=>Se});var s=r(43),a=e=>"checkbox"===e.type,i=e=>e instanceof Date,n=e=>null==e;const o=e=>"object"===typeof e;var l=e=>!n(e)&&!Array.isArray(e)&&o(e)&&!i(e),u=e=>l(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,d=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),c=e=>{const t=e.constructor&&e.constructor.prototype;return l(t)&&t.hasOwnProperty("isPrototypeOf")},f="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document;function y(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(f&&(e instanceof Blob||e instanceof FileList)||!r&&!l(e))return e;if(t=r?[]:{},r||c(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=y(e[r]));else t=e}return t}var m=e=>Array.isArray(e)?e.filter(Boolean):[],v=e=>void 0===e,h=(e,t,r)=>{if(!t||!l(e))return r;const s=m(t.split(/[,[\].]+?/)).reduce(((e,t)=>n(e)?e:e[t]),e);return v(s)||s===e?v(e[t])?r:e[t]:s},g=e=>"boolean"===typeof e,b=e=>/^\w*$/.test(e),p=e=>m(e.replace(/["|']|\]/g,"").split(/\.|\[/)),_=(e,t,r)=>{let s=-1;const a=b(t)?[t]:p(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=l(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}if("__proto__"===t)return;e[t]=i,e=e[t]}return e};const V={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},A={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},F="max",w="min",S="maxLength",x="minLength",k="pattern",D="required",O="validate";s.createContext(null);var E=function(e,t,r){let s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t._proxyFormState[a]!==A.all&&(t._proxyFormState[a]=!s||A.all),r&&(r[a]=!0),e[a]}});return a},C=e=>l(e)&&!Object.keys(e).length,T=(e,t,r,s)=>{r(e);const{name:a,...i}=e;return C(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find((e=>t[e]===(!s||A.all)))},U=e=>Array.isArray(e)?e:[e];function j(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var N=e=>"string"===typeof e,L=(e,t,r,s,a)=>N(e)?(s&&t.watch.add(e),h(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),h(r,e)))):(s&&(t.watchAll=!0),r);var B=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},M=e=>({isOnSubmit:!e||e===A.onSubmit,isOnBlur:e===A.onBlur,isOnChange:e===A.onChange,isOnAll:e===A.all,isOnTouch:e===A.onTouched}),q=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));const P=(e,t,r,s)=>{for(const a of r||Object.keys(e)){const r=h(e,a);if(r){const{_f:e,...i}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!s)return!0;if(e.ref&&t(e.ref,e.name)&&!s)return!0;if(P(i,t))break}else if(l(i)&&P(i,t))break}}};var R=(e,t,r)=>{const s=U(h(e,r));return _(s,"root",t[r]),_(e,r,s),e},I=e=>"file"===e.type,H=e=>"function"===typeof e,$=e=>{if(!f)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},W=e=>N(e),G=e=>"radio"===e.type,z=e=>e instanceof RegExp;const J={value:!1,isValid:!1},K={value:!0,isValid:!0};var Q=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!v(e[0].attributes.value)?v(e[0].value)||""===e[0].value?K:{value:e[0].value,isValid:!0}:K:J}return J};const X={isValid:!1,value:null};var Y=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),X):X;function Z(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"validate";if(W(e)||Array.isArray(e)&&e.every(W)||g(e)&&!e)return{type:r,message:W(e)?e:"",ref:t}}var ee=e=>l(e)&&!z(e)?e:{value:e,message:""},te=async(e,t,r,s,i)=>{const{ref:o,refs:u,required:d,maxLength:c,minLength:f,min:y,max:m,pattern:b,validate:p,name:_,valueAsNumber:V,mount:A,disabled:E}=e._f,T=h(t,_);if(!A||E)return{};const U=u?u[0]:o,j=e=>{s&&U.reportValidity&&(U.setCustomValidity(g(e)?"":e||""),U.reportValidity())},L={},M=G(o),q=a(o),P=M||q,R=(V||I(o))&&v(o.value)&&v(T)||$(o)&&""===o.value||""===T||Array.isArray(T)&&!T.length,J=B.bind(null,_,r,L),K=function(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:S,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:x;const i=e?t:r;L[_]={type:e?s:a,message:i,ref:o,...J(e?s:a,i)}};if(i?!Array.isArray(T)||!T.length:d&&(!P&&(R||n(T))||g(T)&&!T||q&&!Q(u).isValid||M&&!Y(u).isValid)){const{value:e,message:t}=W(d)?{value:!!d,message:d}:ee(d);if(e&&(L[_]={type:D,message:t,ref:U,...J(D,t)},!r))return j(t),L}if(!R&&(!n(y)||!n(m))){let e,t;const s=ee(m),a=ee(y);if(n(T)||isNaN(T)){const r=o.valueAsDate||new Date(T),i=e=>new Date((new Date).toDateString()+" "+e),n="time"==o.type,l="week"==o.type;N(s.value)&&T&&(e=n?i(T)>i(s.value):l?T>s.value:r>new Date(s.value)),N(a.value)&&T&&(t=n?i(T)<i(a.value):l?T<a.value:r<new Date(a.value))}else{const r=o.valueAsNumber||(T?+T:T);n(s.value)||(e=r>s.value),n(a.value)||(t=r<a.value)}if((e||t)&&(K(!!e,s.message,a.message,F,w),!r))return j(L[_].message),L}if((c||f)&&!R&&(N(T)||i&&Array.isArray(T))){const e=ee(c),t=ee(f),s=!n(e.value)&&T.length>+e.value,a=!n(t.value)&&T.length<+t.value;if((s||a)&&(K(s,e.message,t.message),!r))return j(L[_].message),L}if(b&&!R&&N(T)){const{value:e,message:t}=ee(b);if(z(e)&&!T.match(e)&&(L[_]={type:k,message:t,ref:o,...J(k,t)},!r))return j(t),L}if(p)if(H(p)){const e=Z(await p(T,t),U);if(e&&(L[_]={...e,...J(O,e.message)},!r))return j(e.message),L}else if(l(p)){let e={};for(const s in p){if(!C(e)&&!r)break;const a=Z(await p[s](T,t),U,s);a&&(e={...a,...J(s,a.message)},j(a.message),r&&(L[_]=e))}if(!C(e)&&(L[_]={ref:U,...e},!r))return L}return j(!0),L};function re(e,t){const r=Array.isArray(t)?t:b(t)?[t]:p(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=v(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,i=r[a];return s&&delete s[i],0!==a&&(l(s)&&C(s)||Array.isArray(s)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!v(e[t]))return!1;return!0}(s))&&re(e,r.slice(0,-1)),e}var se=()=>{let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}},ae=e=>n(e)||!o(e);function ie(e,t){if(ae(e)||ae(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||l(r)&&l(e)||Array.isArray(r)&&Array.isArray(e)?!ie(r,e):r!==e)return!1}}return!0}var ne=e=>"select-multiple"===e.type,oe=e=>G(e)||a(e),le=e=>$(e)&&e.isConnected,ue=e=>{for(const t in e)if(H(e[t]))return!0;return!1};function de(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=Array.isArray(e);if(l(e)||r)for(const s in e)Array.isArray(e[s])||l(e[s])&&!ue(e[s])?(t[s]=Array.isArray(e[s])?[]:{},de(e[s],t[s])):n(e[s])||(t[s]=!0);return t}function ce(e,t,r){const s=Array.isArray(e);if(l(e)||s)for(const a in e)Array.isArray(e[a])||l(e[a])&&!ue(e[a])?v(t)||ae(r[a])?r[a]=Array.isArray(e[a])?de(e[a],[]):{...de(e[a])}:ce(e[a],n(t)?{}:t[a],r[a]):r[a]=!ie(e[a],t[a]);return r}var fe=(e,t)=>ce(e,t,de(t)),ye=(e,t)=>{let{valueAsNumber:r,valueAsDate:s,setValueAs:a}=t;return v(e)?e:r?""===e?NaN:e?+e:e:s&&N(e)?new Date(e):a?a(e):e};function me(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return I(t)?t.files:G(t)?Y(e.refs).value:ne(t)?[...t.selectedOptions].map((e=>{let{value:t}=e;return t})):a(t)?Q(e.refs).value:ye(v(t.value)?e.ref.value:t.value,e)}var ve=(e,t,r,s)=>{const a={};for(const i of e){const e=h(t,i);e&&_(a,i,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},he=e=>v(e)?e:z(e)?e.source:l(e)?z(e.value)?e.value.source:e.value:e;const ge="AsyncFunction";var be=e=>(!e||!e.validate)&&!!(H(e.validate)&&e.validate.constructor.name===ge||l(e.validate)&&Object.values(e.validate).find((e=>e.constructor.name===ge))),pe=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function _e(e,t,r){const s=h(e,r);if(s||b(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=h(t,s),n=h(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var Ve=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e),Ae=(e,t)=>!m(h(e,t)).length&&re(e,t);const Fe={mode:A.onSubmit,reValidateMode:A.onChange,shouldFocusError:!0};function we(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r={...Fe,...t},s={submitCount:0,isDirty:!1,isLoading:H(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},o={},c=(l(r.defaultValues)||l(r.values))&&y(r.defaultValues||r.values)||{},b=r.shouldUnregister?{}:y(c),p={action:!1,mount:!1,watch:!1},F={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w=0;const S={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:se(),array:se(),state:se()},k=M(r.mode),D=M(r.reValidateMode),O=r.criteriaMode===A.all,E=async e=>{if(!r.disabled&&(S.isValid||e)){const e=r.resolver?C((await G()).errors):await z(o,!0);e!==s.isValid&&x.state.next({isValid:e})}},T=(e,t)=>{r.disabled||!S.isValidating&&!S.validatingFields||((e||Array.from(F.mount)).forEach((e=>{e&&(t?_(s.validatingFields,e,t):re(s.validatingFields,e))})),x.state.next({validatingFields:s.validatingFields,isValidating:!C(s.validatingFields)}))},j=(e,t,r,s)=>{const a=h(o,e);if(a){const i=h(b,e,v(r)?h(c,e):r);v(i)||s&&s.defaultChecked||t?_(b,e,t?i:me(a._f)):Q(e,i),p.mount&&E()}},B=(e,t,a,i,n)=>{let l=!1,u=!1;const d={name:e};if(!r.disabled){const r=!!(h(o,e)&&h(o,e)._f&&h(o,e)._f.disabled);if(!a||i){S.isDirty&&(u=s.isDirty,s.isDirty=d.isDirty=J(),l=u!==d.isDirty);const a=r||ie(h(c,e),t);u=!(r||!h(s.dirtyFields,e)),a||r?re(s.dirtyFields,e):_(s.dirtyFields,e,!0),d.dirtyFields=s.dirtyFields,l=l||S.dirtyFields&&u!==!a}if(a){const t=h(s.touchedFields,e);t||(_(s.touchedFields,e,a),d.touchedFields=s.touchedFields,l=l||S.touchedFields&&t!==a)}l&&n&&x.state.next(d)}return l?d:{}},W=(r,a,i,n)=>{const o=h(s.errors,r),l=S.isValid&&g(a)&&s.isValid!==a;var u;if(t.delayError&&i?(u=()=>((e,t)=>{_(s.errors,e,t),x.state.next({errors:s.errors})})(r,i),e=e=>{clearTimeout(w),w=setTimeout(u,e)},e(t.delayError)):(clearTimeout(w),e=null,i?_(s.errors,r,i):re(s.errors,r)),(i?!ie(o,i):o)||!C(n)||l){const e={...n,...l&&g(a)?{isValid:a}:{},errors:s.errors,name:r};s={...s,...e},x.state.next(e)}},G=async e=>{T(e,!0);const t=await r.resolver(b,r.context,ve(e||F.mount,o,r.criteriaMode,r.shouldUseNativeValidation));return T(e),t},z=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{valid:!0};for(const i in e){const n=e[i];if(n){const{_f:e,...o}=n;if(e){const o=F.array.has(e.name),l=n._f&&be(n._f);l&&S.validatingFields&&T([i],!0);const u=await te(n,b,O,r.shouldUseNativeValidation&&!t,o);if(l&&S.validatingFields&&T([i]),u[e.name]&&(a.valid=!1,t))break;!t&&(h(u,e.name)?o?R(s.errors,u,e.name):_(s.errors,e.name,u[e.name]):re(s.errors,e.name))}!C(o)&&await z(o,t,a)}}return a.valid},J=(e,t)=>!r.disabled&&(e&&t&&_(b,e,t),!ie(ue(),c)),K=(e,t,r)=>L(e,F,{...p.mount?b:v(t)?c:N(e)?{[e]:t}:t},r,t),Q=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=h(o,e);let i=t;if(s){const r=s._f;r&&(!r.disabled&&_(b,e,ye(t,r)),i=$(r.ref)&&n(t)?"":t,ne(r.ref)?[...r.ref.options].forEach((e=>e.selected=i.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value))):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach((e=>e.checked=e.value===i)):I(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||x.values.next({name:e,values:{...b}})))}(r.shouldDirty||r.shouldTouch)&&B(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ae(e)},X=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,u=h(o,n);(F.array.has(e)||l(a)||u&&!u._f)&&!i(a)?X(n,a,r):Q(n,a,r)}},Y=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=h(o,e),i=F.array.has(e),l=y(t);_(b,e,l),i?(x.array.next({name:e,values:{...b}}),(S.isDirty||S.dirtyFields)&&r.shouldDirty&&x.state.next({name:e,dirtyFields:fe(c,b),isDirty:J(e,l)})):!a||a._f||n(l)?Q(e,l,r):X(e,l,r),q(e,F)&&x.state.next({...s}),x.values.next({name:p.mount?e:void 0,values:{...b}})},Z=async a=>{p.mount=!0;const n=a.target;let l=n.name,d=!0;const c=h(o,l),f=e=>{d=Number.isNaN(e)||i(e)&&isNaN(e.getTime())||ie(e,h(b,l,e))};if(c){let i,y;const m=n.type?me(c._f):u(a),v=a.type===V.BLUR||a.type===V.FOCUS_OUT,g=!pe(c._f)&&!r.resolver&&!h(s.errors,l)&&!c._f.deps||Ve(v,h(s.touchedFields,l),s.isSubmitted,D,k),p=q(l,F,v);_(b,l,m),v?(c._f.onBlur&&c._f.onBlur(a),e&&e(0)):c._f.onChange&&c._f.onChange(a);const A=B(l,m,v,!1),w=!C(A)||p;if(!v&&x.values.next({name:l,type:a.type,values:{...b}}),g)return S.isValid&&("onBlur"===t.mode?v&&E():E()),w&&x.state.next({name:l,...p?{}:A});if(!v&&p&&x.state.next({...s}),r.resolver){const{errors:e}=await G([l]);if(f(m),d){const t=_e(s.errors,o,l),r=_e(e,o,t.name||l);i=r.error,l=r.name,y=C(e)}}else T([l],!0),i=(await te(c,b,O,r.shouldUseNativeValidation))[l],T([l]),f(m),d&&(i?y=!1:S.isValid&&(y=await z(o,!0)));d&&(c._f.deps&&ae(c._f.deps),W(l,y,i,A))}},ee=(e,t)=>{if(h(s.errors,t)&&e.focus)return e.focus(),1},ae=async function(e){let t,a,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=U(e);if(r.resolver){const r=await(async e=>{const{errors:t}=await G(e);if(e)for(const r of e){const e=h(t,r);e?_(s.errors,r,e):re(s.errors,r)}else s.errors=t;return t})(v(e)?e:n);t=C(r),a=e?!n.some((e=>h(r,e))):t}else e?(a=(await Promise.all(n.map((async e=>{const t=h(o,e);return await z(t&&t._f?{[e]:t}:t)})))).every(Boolean),(a||s.isValid)&&E()):a=t=await z(o);return x.state.next({...!N(e)||S.isValid&&t!==s.isValid?{}:{name:e},...r.resolver||!e?{isValid:t}:{},errors:s.errors}),i.shouldFocus&&!a&&P(o,ee,e?n:F.mount),a},ue=e=>{const t={...p.mount?b:c};return v(e)?t:N(e)?h(t,e):e.map((e=>h(t,e)))},de=(e,t)=>({invalid:!!h((t||s).errors,e),isDirty:!!h((t||s).dirtyFields,e),error:h((t||s).errors,e),isValidating:!!h(s.validatingFields,e),isTouched:!!h((t||s).touchedFields,e)}),ce=(e,t,r)=>{const a=(h(o,e,{_f:{}})._f||{}).ref,i=h(s.errors,e)||{},{ref:n,message:l,type:u,...d}=i;_(s.errors,e,{...d,...t,ref:a}),x.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},ge=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(const a of e?U(e):F.mount)F.mount.delete(a),F.array.delete(a),t.keepValue||(re(o,a),re(b,a)),!t.keepError&&re(s.errors,a),!t.keepDirty&&re(s.dirtyFields,a),!t.keepTouched&&re(s.touchedFields,a),!t.keepIsValidating&&re(s.validatingFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&re(c,a);x.values.next({values:{...b}}),x.state.next({...s,...t.keepDirty?{isDirty:J()}:{}}),!t.keepIsValid&&E()},we=e=>{let{disabled:t,name:r,field:s,fields:a,value:i}=e;if(g(t)&&p.mount||t){const e=t?void 0:v(i)?me(s?s._f:h(a,r)._f):i;_(b,r,e),B(r,e,!1,!1,!0)}},Se=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=h(o,e);const a=g(t.disabled)||g(r.disabled);return _(o,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),F.mount.add(e),s?we({field:s,disabled:g(t.disabled)?t.disabled:r.disabled,name:e,value:t.value}):j(e,!0,t.value),{...a?{disabled:t.disabled||r.disabled}:{},...r.progressive?{required:!!t.required,min:he(t.min),max:he(t.max),minLength:he(t.minLength),maxLength:he(t.maxLength),pattern:he(t.pattern)}:{},name:e,onChange:Z,onBlur:Z,ref:a=>{if(a){Se(e,t),s=h(o,e);const r=v(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,i=oe(r),n=s._f.refs||[];if(i?n.find((e=>e===r)):r===s._f.ref)return;_(o,e,{_f:{...s._f,...i?{refs:[...n.filter(le),r,...Array.isArray(h(c,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),j(e,!1,void 0,r)}else s=h(o,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!d(F.array,e)||!p.action)&&F.unMount.add(e)}}},xe=()=>r.shouldFocusError&&P(o,ee,F.mount),ke=(e,t)=>async a=>{let i;if(a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist()),r.disabled)return void(t&&await t({...s.errors},a));let n=y(b);if(x.state.next({isSubmitting:!0}),r.resolver){const{errors:e,values:t}=await G();s.errors=e,n=t}else await z(o);if(re(s.errors,"root"),C(s.errors)){x.state.next({errors:{}});try{await e(n,a)}catch(l){i=l}}else t&&await t({...s.errors},a),xe(),setTimeout(xe);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:C(s.errors)&&!i,submitCount:s.submitCount+1,errors:s.errors}),i)throw i},De=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=e?y(e):c,i=y(a),n=C(e),l=n?c:i;if(r.keepDefaultValues||(c=a),!r.keepValues){if(r.keepDirtyValues){const e=new Set([...F.mount,...Object.keys(fe(c,b))]);for(const t of Array.from(e))h(s.dirtyFields,t)?_(l,t,h(b,t)):Y(t,h(l,t))}else{if(f&&v(e))for(const e of F.mount){const t=h(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if($(e)){const t=e.closest("form");if(t){t.reset();break}}}}o={}}b=t.shouldUnregister?r.keepDefaultValues?y(c):{}:y(l),x.array.next({values:{...l}}),x.values.next({values:{...l}})}F={mount:r.keepDirtyValues?F.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},p.mount=!S.isValid||!!r.keepIsValid||!!r.keepDirtyValues,p.watch=!!t.shouldUnregister,x.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:!n&&(r.keepDirty?s.isDirty:!(!r.keepDefaultValues||ie(e,c))),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:n?{}:r.keepDirtyValues?r.keepDefaultValues&&b?fe(c,b):s.dirtyFields:r.keepDefaultValues&&e?fe(c,e):r.keepDirty?s.dirtyFields:{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&s.isSubmitSuccessful,isSubmitting:!1})},Oe=(e,t)=>De(H(e)?e(b):e,t);return{control:{register:Se,unregister:ge,getFieldState:de,handleSubmit:ke,setError:ce,_executeSchema:G,_getWatch:K,_getDirty:J,_updateValid:E,_removeUnmounted:()=>{for(const e of F.unMount){const t=h(o,e);t&&(t._f.refs?t._f.refs.every((e=>!le(e))):!le(t._f.ref))&&ge(e)}F.unMount=new Set},_updateFieldArray:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],l=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(i&&a&&!r.disabled){if(p.action=!0,l&&Array.isArray(h(o,e))){const t=a(h(o,e),i.argA,i.argB);n&&_(o,e,t)}if(l&&Array.isArray(h(s.errors,e))){const t=a(h(s.errors,e),i.argA,i.argB);n&&_(s.errors,e,t),Ae(s.errors,e)}if(S.touchedFields&&l&&Array.isArray(h(s.touchedFields,e))){const t=a(h(s.touchedFields,e),i.argA,i.argB);n&&_(s.touchedFields,e,t)}S.dirtyFields&&(s.dirtyFields=fe(c,b)),x.state.next({name:e,isDirty:J(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else _(b,e,t)},_updateDisabledField:we,_getFieldArray:e=>m(h(p.mount?b:c,e,t.shouldUnregister?h(c,e,[]):[])),_reset:De,_resetDefaultValues:()=>H(r.defaultValues)&&r.defaultValues().then((e=>{Oe(e,r.resetOptions),x.state.next({isLoading:!1})})),_updateFormState:e=>{s={...s,...e}},_disableForm:e=>{g(e)&&(x.state.next({disabled:e}),P(o,((t,r)=>{const s=h(o,r);s&&(t.disabled=s._f.disabled||e,Array.isArray(s._f.refs)&&s._f.refs.forEach((t=>{t.disabled=s._f.disabled||e})))}),0,!1))},_subjects:x,_proxyFormState:S,_setErrors:e=>{s.errors=e,x.state.next({errors:s.errors,isValid:!1})},get _fields(){return o},get _formValues(){return b},get _state(){return p},set _state(e){p=e},get _defaultValues(){return c},get _names(){return F},set _names(e){F=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:ae,register:Se,handleSubmit:ke,watch:(e,t)=>H(e)?x.values.subscribe({next:r=>e(K(void 0,t),r)}):K(e,t,!0),setValue:Y,getValues:ue,reset:Oe,resetField:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h(o,e)&&(v(t.defaultValue)?Y(e,y(h(c,e))):(Y(e,t.defaultValue),_(c,e,y(t.defaultValue))),t.keepTouched||re(s.touchedFields,e),t.keepDirty||(re(s.dirtyFields,e),s.isDirty=t.defaultValue?J(e,y(h(c,e))):J()),t.keepError||(re(s.errors,e),S.isValid&&E()),x.state.next({...s}))},clearErrors:e=>{e&&U(e).forEach((e=>re(s.errors,e))),x.state.next({errors:e?s.errors:{}})},unregister:ge,setError:ce,setFocus:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=h(o,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&H(e.select)&&e.select())}},getFieldState:de}}function Se(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=s.useRef(),r=s.useRef(),[a,i]=s.useState({isDirty:!1,isValidating:!1,isLoading:H(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:H(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...we(e),formState:a});const n=t.current.control;return n._options=e,j({subject:n._subjects.state,next:e=>{T(e,n._proxyFormState,n._updateFormState,!0)&&i({...n._formState})}}),s.useEffect((()=>n._disableForm(e.disabled)),[n,e.disabled]),s.useEffect((()=>{if(n._proxyFormState.isDirty){const e=n._getDirty();e!==a.isDirty&&n._subjects.state.next({isDirty:e})}}),[n,a.isDirty]),s.useEffect((()=>{e.values&&!ie(e.values,r.current)?(n._reset(e.values,n._options.resetOptions),r.current=e.values,i((e=>({...e})))):n._resetDefaultValues()}),[e.values,n]),s.useEffect((()=>{e.errors&&n._setErrors(e.errors)}),[e.errors,n]),s.useEffect((()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()})),s.useEffect((()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})}),[e.shouldUnregister,n]),t.current.formState=E(a,n),t.current}}}]);
//# sourceMappingURL=858.79a427f2.chunk.js.map