"use strict";var g=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var m=g(function(M,c){"use strict";var h=require("@stdlib/ndarray-base-assert-is-read-only"),f=require("@stdlib/assert-is-array-like-object"),d=require("@stdlib/assert-is-plain-object"),w=require("@stdlib/assert-is-ndarray-like"),y=require("@stdlib/assert-is-boolean").isPrimitive,p=require("@stdlib/assert-is-multi-slice"),q=require("@stdlib/assert-has-own-property"),b=require("@stdlib/slice-multi"),S=require("@stdlib/slice-base-args2multislice"),E=require("@stdlib/ndarray-shape"),O=require("@stdlib/ndarray-base-slice"),T=require("@stdlib/ndarray-base-fill"),o=require("@stdlib/string-format");function j(e,a,s){var n,i,t,u,l,v,r;if(u={strict:!0},i=arguments.length,!w(e))throw new TypeError(o("invalid argument. First argument must be an ndarray. Value: `%s`.",e));if(h(e))throw new Error("invalid argument. Cannot write to a read-only array.");if(d(arguments[i-1])){if(i-=1,n=arguments[i],q(n,"strict")){if(!y(n.strict))throw new TypeError(o("invalid option. `%s` option must be a boolean. Option: `%s`.","strict",n.strict));u.strict=n.strict}if(l=E(e),i===2&&l.length>0)throw new RangeError(o("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",l.join(","),0))}if(p(s)){if(v=s,i>3)throw new Error("invalid invocation. Too many arguments.")}else{if(f(s)){if(t=s,i>3)throw new Error("invalid invocation. Too many arguments.")}else for(t=[],r=2;r<i;r++)t.push(arguments[r]);try{v=S(t)}catch(k){for(r=0;r<t.length;r++)try{new b(t[r])}catch(A){throw new TypeError(o("invalid argument. Slice arguments must be either a Slice, integer, null, or undefined. Value: `%s`.",String(t[r])))}}}return T(O(e,v,u.strict,!0),a),e}c.exports=j});var P=m();module.exports=P;
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
