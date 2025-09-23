# is-even-core

A true zero-dependency replacement for the archived [`is-even`](https://www.npmjs.com/package/is-even) package.

- `is-even` was archived on September 13, 2019 and is now read-only.
- `is-even-core` provides the same functionality in a single file with **no external dependencies**.
- `is-even-core` is JS and TS able
- `is-even-core` also supports CommonJS and ES Module build
- Guarantees 0 runtime dependencies

## Install

`npm install --save is-even-core`

## Usage

Using CommonJS require

```javascript
const isEven = require("is-even-core");

isEven(0); // true
isEven(1); // false
isEven(2); // true
isEven("3"); // false
isEven("4"); //true
```

Using ES Module import

```javascript
import isEven from "is-even-core";

console.log(isEven(0)); // true
console.log(isEven(1)); // false
console.log(isEven(2)); // true
console.log(isEven("3")); // false
console.log(isEven("4")); // true
```

## Why 0 Dependency?

0 dependencies mean:

- Smaller install size
- Faster installs
- Lower security risk surface

## Why make a newer version of `is-even`?

I wanted to see a true-zero dependency version of a package with 100k weekly downloads and wanted to build upon it with simple added changes like dual building for esm and cjs.
