> errors runing `npm run unit` with these errors   
> but `npm run dev` is ok  
> os: Windows 10 | npm: 3.10.10 | node: 7.3.0 

```
"C:\Program Files (x86)\JetBrains\WebStorm 2016.2\bin\runnerw.exe" "C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run unit

> test-vue@1.0.0 unit C:\Users\hzfanxianwei\workspace\webstorm\testVue
> cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run

(node:464) DeprecationWarning: `DEBUG_FD` is deprecated. Override `debug.log` if you want to use a different log function (https://git.io/vMUyr)
05 02 2017 19:24:09.397:INFO [karma]: Karma v1.4.1 server started at http://0.0.0.0:9876/
05 02 2017 19:24:09.399:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
05 02 2017 19:24:09.413:INFO [launcher]: Starting browser PhantomJS
05 02 2017 19:24:12.291:INFO [PhantomJS 2.1.1 (Windows 8 0.0.0)]: Connected on socket d13kE354Neuo_nEjAAAA with id 40470048
05 02 2017 19:24:12.459:WARN [web-server]: 404: /v2/58970a841100006218c0ddbf
PhantomJS 2.1.1 (Windows 8 0.0.0) INFO LOG: 'You are running Vue in development mode.
Make sure to turn on production mode when deploying for production.
See more tips at https://vuejs.org/guide/deployment.html'
LOG LOG: 'test work: ---------===============------------------'
LOG LOG: 'error: ---------=============----------', Error{config: Object{adapter: function xhrAdapter(config) { ... }, transformRequest: Object{0: ...}, transformResponse: Object{0: ...}, timeout: 0, xsrfCookieName: 'XSRF-TOKEN', xsrfHeaderName: 'X-XSRF-TOKEN', maxContentLength: -1, validateStatus: function validateStatus(status) { ... }, headers: Object{Accept: ...}, method: 'get', url: '/v2/58970a841100006218c0ddbf', data: undefined}, response: Object{data: 'NOT FOUND', status: 404, statusText: 'Not Found', headers: Object{connection: ..., date: ..., transfer-encoding: ...}, config: Object{adapter: ..., transformRequest: ..., transformResponse: ..., timeout: ..., xsrfCookieName: ..., xsrfHeaderName: ..., maxContentLength: ..., validateStatus: ..., headers: ..., method: ..., url: ..., data: ...}, request: Object{readyState: ..., timeout: ..., onloadend: ..., withCredentials: ..., onloadstart: ..., status: ..., ontimeout: ..., onabort: ..., upload: ..., onreadystatechange: ..., responseType: ..., response: ..., responseXML: ..., onload: ..., onerror: ..., statusText: ..., onprogress: ..., responseText: ...}}}

  Hello.vue
    √get data correct

PhantomJS 2.1.1 (Windows 8 0.0.0): Executed 1 of 1 SUCCESS (0.009 secs / 0.021 secs)
TOTAL: 1 SUCCESS


=============================== Coverage summary ===============================
Statements   : 40% ( 2/5 )
Branches     : 100% ( 0/0 )
Functions    : 0% ( 0/1 )
Lines        : 40% ( 2/5 )
================================================================================

Process finished with exit code 0
```