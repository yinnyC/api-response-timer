# 📋 js-obj-printer

[![NPM version](https://img.shields.io/npm/v/tocsify.svg?style=flat)](https://www.npmjs.com/package/js-obj-printer) [![NPM downloads](https://img.shields.io/npm/dm/tocsify.svg?style=flat)](https://www.npmjs.com/package/js-obj-printer) [![Build Status](https://img.shields.io/travis/droxey/tocsify.svg?style=flat)](https://www.npmjs.com/package/js-obj-printer)

📋 npm module that **print out the JavaScript objects in strings** based and display in the inspect console or terminal window!

## Features

* Efficiently check if the response object is valid.
* If the response object is null, will print out `The object is Null`

## Installation

Install locally for any project:

```bash
npm i tocsify js-obj-printer
```

## Usage
js-obj-printer provides the `resDateLogger` method. To apply the method, you can require it:

```javascript
const { resDateLogger } = require('js-obj-printer')
```

Next, you just need to pass in the Javascript object

Example:

```javascript
resDateLogger(res.data)
```