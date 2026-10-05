"use strict";var b=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}}};var q=b(function(R,p){"use strict";var c=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,w=require("@stdlib/assert-is-plain-object"),o=require("@stdlib/assert-has-own-property"),E=require("@stdlib/assert-is-nonnegative-integer-array").primitives,T=require("@stdlib/assert-is-empty-collection"),D=require("@stdlib/array-base-assert-contains").factory,h=require("@stdlib/ndarray-base-shape2strides"),O=require("@stdlib/ndarray-base-buffer"),P=require("@stdlib/ndarray-base-numel"),N=require("@stdlib/ndarray-base-fill"),_=require("@stdlib/ndarray-ctor"),g=require("@stdlib/ndarray-defaults"),j=require("@stdlib/ndarray-dtypes"),A=require("@stdlib/array-base-join"),l=require("@stdlib/string-format"),m=g.get("dtypes.boolean"),f=g.get("order"),y=j("boolean_and_generic"),F=D(y);function x(i){var e,r,t,d,n,s,u,v,a;if(n={},arguments.length>1){if(e=arguments[1],!w(e))throw new TypeError(l("invalid argument. Options argument must be an object. Value: `%s`.",e));if(o(e,"dtype")){if(r=e.dtype,!F(r))throw new TypeError(l('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"dtype",A(y,'", "'),r))}else r=m;o(e,"order")?t=e.order:t=f,o(e,"mode")&&(n.mode=e.mode),o(e,"submode")&&(n.submode=e.submode),o(e,"readonly")&&(n.readonly=e.readonly)}else r=m,t=f;if(c(i))a=[i];else if(E(i)||T(i))a=i;else throw new TypeError(l("invalid argument. First argument must be either a nonnegative integer or an array of nonnegative integers. Value: `%s`.",i));return d=a.length,d>0?(s=P(a),v=h(a,t)):(s=1,v=[0]),u=new _(r,O(r,s),a,v,0,t,n),N(u,!0),u}p.exports=x});var I=q();module.exports=I;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
