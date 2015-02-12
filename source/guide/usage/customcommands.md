name: customcommands
category: usage
tags: guide
index: 1
title: WebdriverIO - Custom Commands
---

Custom Commands
===============

If you want to extend the client with your own set of commands there is a method
called `addCommand` available from the client object. The following example shows
how to add a new command that returns the current url and title as one result.

```js
client.addCommand("getUrlAndTitle", function(customVar, cb) {
    this.url(function(err,urlResult) {
        this.getTitle(function(err,titleResult) {
            var specialResult = {url: urlResult.value, title: titleResult};
            cb(err,specialResult);
            console.log(customVar); // "a custom variable"
        })
    });
});
```

After you added a command it is available for your instance.

```js
client
    .init()
    .url('http://www.github.com')
    .getUrlAndTitle('a custom variable',function(err,result){
        assert.equal(null, err)
        assert.strictEqual(result.url,'https://github.com/');
        assert.strictEqual(result.title,'GitHub · Build software better, together.');
    })
    .end();
```

**Note:** the last parameter is always a callback function. It gets added when you
call the method and it ensures that the queue continues once your command finishes
(otherwise the queue stops). The easiest way to grab the callback is using the `arguments`
variable like in the example below. Depending on how many arguments gets passed to
the function the callback will be always at the last position.

```js
client.addCommand('method', function(paramA, paramB, paramC) {
    // make sure to grab the right parameter for the callback
    var callback = arguments[arguments.length - 1];
    
    // ...
    callback();
});

// no matter with how many parameters the method gets called the command
// always calls the given callback function
client
    .method(1,2,3)
    .method(1,2)
    .method(1);
```
    
