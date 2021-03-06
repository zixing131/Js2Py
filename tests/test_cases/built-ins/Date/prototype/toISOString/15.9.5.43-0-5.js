// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.9.5.43-0-5
description: >
    Date.prototype.toISOString - The returned string is the UTC time
    zone(0)
includes: [runTestCase.js]
---*/

function testcase() {
        var dateStr = (new Date()).toISOString();
        return dateStr[dateStr.length - 1] === "Z";
    }
runTestCase(testcase);
