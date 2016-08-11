micro-require
===================
[![npm version](https://badge.fury.io/js/micro-require.svg)](https://badge.fury.io/js/vanilla-juice) [![npm](https://img.shields.io/npm/dt/micro-require.svg?maxAge=2592000)](https://github.com/keyserfaty/micro-require)

**micro-require** is a small require library to be used in libraries and pure js projects.

----------


Installation
-------------

    npm install --save micro-require


Usage
-------------

Use the `require` word to import one or more modules/files:

```javascript
(function() {
  // one file
  require('myFile.js', function (err) {
    if (err) return;
    // rest of the code..
  });

  // multiple files
  require(['myFile1.js', 'myFile.js2'], function (err) {
    if (err) return;
    // rest of the code..
  });
})();
```

Inspiration
-------------
- [**Why web modules?** from require.js](http://requirejs.org/docs/why.html)
- [**JavaScript Patterns** - Build Better Applications with Coding and Design Patterns](http://shop.oreilly.com/product/9780596806767.do)
