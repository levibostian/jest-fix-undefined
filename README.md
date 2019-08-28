[![npm version](https://img.shields.io/npm/v/jest-fix-undefined.svg?style=flat-square)](https://www.npmjs.org/package/jest-fix-undefined)
[![Build Status](https://travis-ci.com/levibostian/jest-fix-undefined.svg?branch=master)](https://travis-ci.com/levibostian/jest-fix-undefined)
[![install size](https://packagephobia.now.sh/badge?p=jest-fix-undefined)](https://packagephobia.now.sh/result?p=jest-fix-undefined)

# jest-fix-undefined

References for Jest that are not packaged by default to solve the, "ReferenceError: Request is not defined" error. 

## What problem is this solving? 

If you have a Typescript project (have not tested on Javascript, same problem may exist) that uses Jest and you try to use the following objects in your test functions:

* Nodejs `Request`
* Nodejs `Response`
* Nodejs `Headers`

You will receive an error message from Jest: *ReferenceError: Request is not defined*. 

According to [this Jest issue](https://github.com/facebook/jest/issues/7007#issuecomment-423137366), this is a known limitation of Jest that you need to fix yourself. After reading [this issue](https://github.com/jefflau/jest-fetch-mock/issues/13), this gave me some ideas on a fix for the Jest error message about _____ is not defined. 

Personally, I am not a fan of randomly importing a npm module as a hack to fix issues. I knew that I would see this code, `import 'isomorphic-fetch'`, in my Jest tests sometime in the future and wonder what on Earth that was there for. Also, adding `isomorphic-fetch` would cause bloat when I only need it for some references. 

So instead, I decided to create my own hack. Create a repo dedicated to fixing this Jest undefined issue. A repo that is dedicated to fixing this issue while staying as slim as possible. 

## Getting started 

* `npm install --save-dev jest-fix-undefined`
* Then, add `import "jest-fix-undefined"` to the top of your Jest test files. 
* The "ReferenceError: _______ is not defined" error should now be gone when running tests! 

## Author

* Levi Bostian - [GitHub](https://github.com/levibostian), [Twitter](https://twitter.com/levibostian), [Website/blog](http://levibostian.com)

![Levi Bostian image](https://gravatar.com/avatar/22355580305146b21508c74ff6b44bc5?s=250)

## Contribute

jest-fix-undefined is open for pull requests. Check out the [list of issues](https://github.com/levibostian/jest-fix-undefined/issues) for tasks I am planning on working on. Check them out if you wish to contribute in that way.

**Want to add to jest-fix-undefined?** Before you decide to take a bunch of time and add functionality to the module, please, [create an issue](https://github.com/levibostian/jest-fix-undefined/issues/new) stating what you wish to add. This might save you some time in case your purpose does not fit well in the use cases of jest-fix-undefined. 

If you find more types that throw `ReferenceError` by Jest, feel free to add them to this library and create a pull request! In order to make a pull request, you must add tests showing that `ReferenceError` is indeed thrown by Jest when trying to use it and that by using this library, it is fixed. 

## License

jest-fix-undefined is available under the MIT license. See the LICENSE file for more info.