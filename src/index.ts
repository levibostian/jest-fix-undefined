// This file does indeed make jest tests pass. However, if you install @types/node-fetch, the typescript compiler will complain that this file and the typings do not align. So, I am not installing the typings and instead relying on the jest tests to indicate everything is working. 

// @ts-ignore
import nodeFetch from 'node-fetch'

declare global {
  namespace NodeJS {
    interface Global {
      Response: Response
      Headers: Headers
      Request: Request       
    }
  }
}

global.Response = nodeFetch.Response
global.Headers = nodeFetch.Headers
global.Request = nodeFetch.Request