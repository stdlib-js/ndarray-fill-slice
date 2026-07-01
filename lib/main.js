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

'use strict';

// MODULES //

var isReadOnly = require( '@stdlib/ndarray-base-assert-is-read-only' );
var isArrayLikeObject = require( '@stdlib/assert-is-array-like-object' );
var isPlainObject = require( '@stdlib/assert-is-plain-object' );
var isndarrayLike = require( '@stdlib/assert-is-ndarray-like' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var isMultiSlice = require( '@stdlib/assert-is-multi-slice' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var MultiSlice = require( '@stdlib/slice-multi' );
var args2multislice = require( '@stdlib/slice-base-args2multislice' );
var getShape = require( '@stdlib/ndarray-shape' );
var slice = require( '@stdlib/ndarray-base-slice' );
var base = require( '@stdlib/ndarray-base-fill' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// MAIN //

/**
* Fills an input ndarray view with a specified value.
*
* @param {ndarray} x - input ndarray
* @param {*} value - fill value
* @param {...*} s - slice arguments
* @param {Options} [options] - options
* @param {boolean} [options.strict] - boolean indicating whether to enforce strict bounds checking
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} second argument cannot be safely cast to the input ndarray data type
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} number of slice dimensions must match the number of output array dimensions
* @throws {Error} too many arguments
* @throws {Error} cannot write to a read-only ndarray
* @returns {ndarray} input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray-zeros' );
* var MultiSlice = require( '@stdlib/slice-multi' );
* var Slice = require( '@stdlib/slice-ctor' );
* var ndarray2array = require( '@stdlib/ndarray-to-array' );
*
* var x = zeros( [ 3, 4 ], {
*     'dtype': 'float64'
* });
*
* // Define the fill region:
* var s0 = new Slice( 1, 3 );
* var s1 = new Slice( 2, 4 );
* var s = new MultiSlice( s0, s1 );
*
* // Fill a slice with a scalar value:
* var y = fillSlice( x, 5.0, s );
* // returns <ndarray>
*
* var bool = ( y === x );
* // returns true
*
* var arr = ndarray2array( x );
* // returns [ [ 0, 0, 0, 0 ], [ 0, 0, 5, 5 ], [ 0, 0, 5, 5 ] ]
*/
function fillSlice( x, value, s ) {
	var options;
	var nargs;
	var args;
	var opts;
	var sh;
	var S;
	var i;

	opts = {
		'strict': true
	};
	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'null4f', x ) );
	}
	if ( isReadOnly( x ) ) {
		throw new Error( format('nullEs') );
	}
	if ( isPlainObject( arguments[ nargs-1 ] ) ) {
		nargs -= 1;
		options = arguments[ nargs ];
		if ( hasOwnProp( options, 'strict' ) ) {
			if ( !isBoolean( options.strict ) ) {
				throw new TypeError( format( 'null2o', 'strict', options.strict ) );
			}
			opts.strict = options.strict;
		}
		sh = getShape( x );
		if ( nargs === 2 && sh.length > 0 ) {
			throw new RangeError( format( 'nullEt', sh.join( ',' ), 0 ) );
		}
	}
	if ( isMultiSlice( s ) ) {
		S = s;
		if ( nargs > 3 ) {
			throw new Error( format('null0m') );
		}
	} else {
		if ( isArrayLikeObject( s ) ) {
			args = s;
			if ( nargs > 3 ) {
				throw new Error( format('null0m') );
			}
		} else {
			args = [];
			for ( i = 2; i < nargs; i++ ) {
				args.push( arguments[ i ] );
			}
		}
		try {
			S = args2multislice( args );
		} catch ( err ) { // eslint-disable-line no-unused-vars
			// Search for the first offending value...
			for ( i = 0; i < args.length; i++ ) {
				try {
					new MultiSlice( args[ i ] ); // eslint-disable-line no-new
				} catch ( err ) { // eslint-disable-line no-unused-vars
					throw new TypeError( format( 'nullEu', String( args[ i ] ) ) );
				}
			}
		}
	}
	base( slice( x, S, opts.strict, true ), value );
	return x;
}


// EXPORTS //

module.exports = fillSlice;
