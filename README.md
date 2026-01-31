<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# fillSlice

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill an input [`ndarray`][@stdlib/ndarray/ctor] view with a specified value.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import fillSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-fill-slice@v0.1.0-deno/mod.js';
```

#### fillSlice( x, value, ...s\[, options] )

Fills an input [`ndarray`][@stdlib/ndarray/ctor] view with a specified value.

```javascript
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@deno/mod.js';
import MultiSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@deno/mod.js';
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';

var x = zeros( [ 3, 4 ], {
    'dtype': 'float64'
});

// Define the fill region:
var s0 = new Slice( 1, 3 );
var s1 = new Slice( 2, 4 );
var s = new MultiSlice( s0, s1 );

// Fill the region with a scalar value:
var y = fillSlice( x, 5.0, s );
// returns <ndarray>

var bool = ( y === x );
// returns true

var arr = ndarray2array( x );
// returns [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 5.0, 5.0 ], [ 0.0, 0.0, 5.0, 5.0 ] ]
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor].
-   **value**: fill value.
-   **s**: a [`MultiSlice`][@stdlib/slice/multi] instance, an array of slice arguments, or slice arguments as separate arguments.
-   **options**: function options.

The function supports three (mutually exclusive) means for providing slice arguments:

1.  providing a single [`MultiSlice`][@stdlib/slice/multi] instance.
2.  providing a single array of slice arguments.
3.  providing slice arguments as separate arguments.

The following example demonstrates each invocation style achieving equivalent results.

```javascript
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@deno/mod.js';
import MultiSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@deno/mod.js';
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';

var opts = {
    'dtype': 'float64'
};

// 1. Using a MultiSlice:
var x = zeros( [ 3, 4 ], opts );

var s0 = new Slice( 1, 3 );
var s1 = new Slice( 2, 4 );
var s = new MultiSlice( s0, s1 );

var out = fillSlice( x, 5.0, s );
// returns <ndarray>

var arr = ndarray2array( out );
// returns [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 5.0, 5.0 ], [ 0.0, 0.0, 5.0, 5.0 ] ]

// 2. Using an array of slice arguments:
x = zeros( [ 3, 4 ], opts );

out = fillSlice( x, 6.0, [ s0, s1 ] );
// returns <ndarray>

arr = ndarray2array( out );
// returns [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 6.0, 6.0 ], [ 0.0, 0.0, 6.0, 6.0 ] ]

// 3. Providing separate arguments:
x = zeros( [ 3, 4 ], opts );

out = fillSlice( x, 7.0, s0, s1 );
// returns <ndarray>

arr = ndarray2array( out );
// returns [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 7.0, 7.0 ], [ 0.0, 0.0, 7.0, 7.0 ] ]
```

The function supports the following options:

-   **strict**: boolean indicating whether to enforce strict bounds checking.

By default, the function throws an error when provided a slice which exceeds array bounds. To ignore slice indices exceeding array bounds, set the `strict` option to `false`.

```javascript
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@deno/mod.js';
import MultiSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@deno/mod.js';
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';

var x = zeros( [ 3, 4 ], {
    'dtype': 'float64'
});

// Define the fill region:
var s0 = new Slice( 1, null, 1 );
var s1 = new Slice( 10, 20, 1 );
var s = new MultiSlice( s0, s1 );

// Fill the region with a scalar value:
var y = fillSlice( x, 5.0, s, {
    'strict': false
});
// returns <ndarray>

var arr = ndarray2array( x );
// returns [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0, 0.0 ] ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An input [`ndarray`][@stdlib/ndarray/ctor] **must** be writable. If provided a **read-only** [`ndarray`][@stdlib/ndarray/ctor], the function throws an error.
-   A **slice argument** must be either a [`Slice`][@stdlib/slice/ctor], an integer, `null`, or `undefined`.
-   If a fill value is a number and `x` has a complex [data type][@stdlib/ndarray/dtypes], the function fills an input [`ndarray`][@stdlib/ndarray/ctor] with a complex number whose real component equals the provided fill `value` and whose imaginary component is zero.
-   A fill value must be able to safely cast to the input [`ndarray`][@stdlib/ndarray/ctor] [data type][@stdlib/ndarray/dtypes]. Fill values having floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., a scalar double-precision floating-point number can be used to fill a `'float32'` input [`ndarray`][@stdlib/ndarray/ctor]).
-   The function **mutates** the input [`ndarray`][@stdlib/ndarray/ctor].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@deno/mod.js';
import MultiSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@deno/mod.js';
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import fillSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-fill-slice@v0.1.0-deno/mod.js';

// Create a zero-filled ndarray:
var x = zeros( [ 2, 3, 4 ], {
    'dtype': 'generic'
});
console.log( ndarray2array( x ) );

// Specify the fill region:
var s0 = new Slice( 1, 2 );
var s1 = new Slice( null, null );
var s2 = new Slice( 2, 4 );
var s = new MultiSlice( s0, s1, s2 );

// Fill a slice with a scalar value:
fillSlice( x, 10.0, s );
console.log( ndarray2array( x ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-fill-slice.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-fill-slice

[test-image]: https://github.com/stdlib-js/ndarray-fill-slice/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/ndarray-fill-slice/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-fill-slice/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-fill-slice?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-fill-slice.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-fill-slice/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-fill-slice/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-fill-slice/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-fill-slice/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-fill-slice/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-fill-slice/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-fill-slice/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-fill-slice/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-fill-slice/main/LICENSE

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice-multi/tree/deno

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice-ctor/tree/deno

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/deno

</section>

<!-- /.links -->
