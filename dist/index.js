"use strict";var g=function(e,t){return function(){try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}}};var m=g(function(M,c){"use strict";var h=require("@stdlib/ndarray-base-assert-is-read-only"),f=require("@stdlib/assert-is-array-like-object"),d=require("@stdlib/assert-is-plain-object"),w=require("@stdlib/assert-is-ndarray-like"),y=require("@stdlib/assert-is-boolean").isPrimitive,p=require("@stdlib/assert-is-multi-slice"),q=require("@stdlib/assert-has-own-property"),b=require("@stdlib/slice-multi"),S=require("@stdlib/slice-base-args2multislice"),E=require("@stdlib/ndarray-shape"),O=require("@stdlib/ndarray-base-slice"),T=require("@stdlib/ndarray-base-fill"),o=require("@stdlib/string-format");function j(e,t,n){var s,i,a,u,l,v,r;if(u={strict:!0},i=arguments.length,!w(e))throw new TypeError(o("invalid argument. First argument must be an ndarray. Value: `%s`.",e));if(h(e))throw new Error("invalid argument. Cannot write to a read-only array.");if(d(arguments[i-1])){if(i-=1,s=arguments[i],q(s,"strict")){if(!y(s.strict))throw new TypeError(o("invalid option. `%s` option must be a boolean. Option: `%s`.","strict",s.strict));u.strict=s.strict}if(l=E(e),i===2&&l.length>0)throw new RangeError(o("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",l.join(","),0))}if(p(n)){if(v=n,i>3)throw new Error("invalid invocation. Too many arguments.")}else{if(f(n)){if(a=n,i>3)throw new Error("invalid invocation. Too many arguments.")}else for(a=[],r=2;r<i;r++)a.push(arguments[r]);try{v=S(a)}catch(k){for(r=0;r<a.length;r++)try{new b(a[r])}catch(A){throw new TypeError(o("invalid argument. Slice arguments must be either a Slice, integer, null, or undefined. Value: `%s`.",String(a[r])))}}}return T(O(e,v,u.strict,!0),t),e}c.exports=j});var P=m();module.exports=P;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
