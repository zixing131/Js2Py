// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.4.3-1-87gs
description: >
    Strict - checking 'this' from a global scope (non-strict function
    declaration called by strict Function.prototype.apply(undefined))
flags: [noStrict]
includes: [fnGlobalObject.js]
---*/

function f() { return this===fnGlobalObject();};
if (! ((function () {"use strict"; return f.apply(undefined);})())){
    throw "'this' had incorrect value!";
}
