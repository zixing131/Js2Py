// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.14-2-3
description: Object.keys returns the standard built-in Array (Array overridden)
includes: [runTestCase.js]
---*/

function testcase() {
  function Array() { }

  var o = { x: 1, y: 2};

  var a = Object.keys(o);

  var s = Object.prototype.toString.call(a);
  if (s === '[object Array]') {
    return true;
  }
 }
runTestCase(testcase);
