# redux-saga-beginner-tutorial

Based on redux-saga-beginner-tutorial

# Instructions

Install dependencies, start the application and check the console in the browser.


The error in Firefox is:

```
uncaught at rootSaga
 at rootSaga
 at takeEveryHelper
 at incrementAsync
 incrementAsync$@http://172.22.50.31:9966/build.js:27046:1
tryCatch@http://172.22.50.31:9966/build.js:166:37
invoke@http://172.22.50.31:9966/build.js:434:22
defineIteratorMethods/</prototype[method]@http://172.22.50.31:9966/build.js:199:16

// Plus stack trace
```

while in Chrome is:

```
uncaught at rootSaga
 at rootSaga
 at takeEveryHelper
 at incrementAsync
 TypeError: Cannot read property 'b' of undefined
    at incrementAsync$ (http://172.22.50.31:9966/build.js:27046:24)
    at tryCatch (http://172.22.50.31:9966/build.js:166:40)
    at GeneratorFunctionPrototype.invoke [as _invoke] (http://172.22.50.31:9966/build.js:434:22)
    at GeneratorFunctionPrototype.prototype.(anonymous function) [as next] (http://172.22.50.31:9966/build.js:199:21)
    at next (http://172.22.50.31:9966/build.js:25231:27)
```

The Firefox error misses ` TypeError: Cannot read property 'b' of undefined`
