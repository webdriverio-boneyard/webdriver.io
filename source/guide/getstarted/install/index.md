name: install
category: getstarted
tags: guide
index: 0
---

# Install

You will need to have [Node.js](http://nodejs.org/) and [NPM](https://www.npmjs.org/) installed on your machine.
Check out the project website for more instruction. After that you can download WebdriverIO via NPM:
github or use NPM.

```sh
$ npm install webdriverio
```

## Set up your Selenium environment

To start with Selenium you have to run a selenium standalone server on your machine. You will get the newest
version [here](http://docs.seleniumhq.org/download/). Just download the jar file somewhere on your system.
After that start your terminal and execute the file via

```sh
$ java -jar /your/download/directory/selenium-server-standalone-2.42.2.jar
```

The standalone server comes with some integrated drivers (for Firefox, Opera and Safari) which enhance your
installed browser to get navigated through the server by the JSONWire protocol.

## Setup Chromedriver

[Chromedriver](https://sites.google.com/a/chromium.org/chromedriver/home) is a standalone server which
implements WebDriver's wire protocol for Chromium. It is being developed by members of the Chromium and
WebDriver teams. For running Chrome browser tests on your local machine you need to download ChromeDriver
from the project website and make it available on your machine by setting the PATH to the ChromeDriver
executable.