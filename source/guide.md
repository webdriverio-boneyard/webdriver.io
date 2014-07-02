layout: guide
---

# Developer Guide

Welcome to the WebdriverIO documentation. It will help you to get started fast. If you run into problems you can
find help and answers in our [Google Group](https://groups.google.com/forum/#!forum/wdjs) or you can hit me on
[Twitter](https://twitter.com/webdriverjs). The following will give you a short step by step introductio to get
your first WebdriverIO script up and running.

Lets suppose you've [Node.js](http://nodejs.org/) and Java already installed. First thing we need to do is to
start a selenium server that executes all selenium commands within the browser. To do so we create an example
folder first:

** 1. Create a simple test folder**
```sh
$ mkdir webdriverjs-test && cd webdriverjs-test
```

Then let's download the current [selenium standalone server](http://docs.seleniumhq.org/download/) version:

** 2. Download selenium standalone server**
```sh
$ curl -O http://selenium-release.storage.googleapis.com/2.42/selenium-server-standalone-2.42.2.jar
```

Start the server by executing the following:

** 3. Start selenium standalone server**
```sh
$ java -jar selenium-server-standalone-2.42.2.jar
```

Keep this running in the background and open a new terminal window. Next step is to download WebdriverIO via
NPM:

** 4. Download webdriverjs**
```sh
$ npm install webdriverjs
```

** 5. Create a test file (test.js) with the following content**
```js
var webdriverjs = require('webdriverjs');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

webdriverjs
    .remote(options)
    .init()
    .url('http://www.google.com')
    .title(function(err, res) {
        console.log('Title was: ' + res.value);
    })
    .end();
```

** 6. Run your test file**
```sh
$ node test.js
```

this should output the following:

```sh
Title was: Google
```