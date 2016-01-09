[webdriver.io](http://webdriver.io)
===================================

> Official website of the WebdriverIO project

## Requirements

To deploy the website to the server, you will need the following dependencies installed on the machine

- [NodeJS](http://nodejs.org/download/)
- [SASS](http://sass-lang.com/install) (`gem install sass`)
- [Compass](http://compass-style.org/install/) (`gem install compass`)
- [Hexo v3.1](http://hexo.io/) (`npm install hexo-cli -g`)
- [YUI compressor](http://www.andrew-kirkpatrick.com/2013/06/yahoo-yui-compressor-on-mac-os-x-terminal/) (`brew install yuicompressor`) - only required for deployment

## Setup

First download the repository:

```sh
$ git clone git@github.com:webdriverio/webdriver.io.git
```

Next install dependencies:

```sh
$ npm install -g hexo-cli
$ npm install
```

Now grab the documentation content from the main repository

```sh
$ hexo wdio getDocs
```

and generate the assets using Compass

```sh
$ hexo wdio compass
```

That's it. You can now run the server with:

```sh
$ hexo server
```

## Deployment

To generate the markdown pages and static files run the following command:

```sh
$ npm run build
$ hexo deploy
```

It installs all dependencies, generates the markdown files from the current WebdriverIO version on NPM, renders all templates
to static html files and generates and minifies assets. All necessary files should be located in a single directory called `public`.
Last but not least let the domain point to this directory. That's it.

## Trouble Shooting

### When I start the server I get a 404 page `Cannot GET /`
Make sure you have the documentation content copied into the source directory. We keep all documentation
within the main repository ([github.com/webdriverio/webdriverio](https://github.com/webdriverio/webdriverio/docs)). Just run `hexo wdio getDocs` and restart the server.
