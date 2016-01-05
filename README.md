[webdriver.io](http://webdriver.io)
===================================

> Official website of the WebdriverIO project

## Requirements

To deploy the website to the server, you will need the following dependencies installed on the machine

- [NodeJS](http://nodejs.org/download/)
- [SASS](http://sass-lang.com/install) (`gem install sass`)
- [Compass](http://compass-style.org/install/) (`gem install compass`)
- [Hexo v3.1](http://hexo.io/) (`npm install hexo-cli -g`)
- [YUI compressor](http://www.andrew-kirkpatrick.com/2013/06/yahoo-yui-compressor-on-mac-os-x-terminal/) (`brew install yuicompressor`)

## Deployment

To generate the markdown pages and static files run the following command:

```sh
$ npm run build
$ hexo deploy
```

It installs all dependencies, generates the markdown files from the current WebdriverIO version on NPM, renders all templates
to static html files and generates and minifies assets. All necessary files should be located in a single directory called `public`.
Last but not least let the domain point to this directory. That's it.
