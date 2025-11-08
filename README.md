# Keyword Extractor API

Keyword Extractor is a simple tool for extracting keywords from a web page. It returns the keywords and the frequency of each keyword.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Javascript Wrapper for the [Keyword Extractor API](https://apiverve.com/marketplace/keywordextractor)

---

## Installation

Using npm:
```shell
npm install @apiverve/keywordextractor
```

Using yarn:
```shell
yarn add @apiverve/keywordextractor
```

---

## Configuration

Before using the Keyword Extractor API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart)

The Keyword Extractor API documentation is found here: [https://docs.apiverve.com/ref/keywordextractor](https://docs.apiverve.com/ref/keywordextractor).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const keywordextractorAPI = require('@apiverve/keywordextractor');
const api = new keywordextractorAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  "url": "https://en.wikipedia.org/wiki/Email_address"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  "url": "https://en.wikipedia.org/wiki/Email_address"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  "url": "https://en.wikipedia.org/wiki/Email_address"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "url": "https://en.wikipedia.org/wiki/Email_address",
    "keywords": {
      "email": 91,
      "address": 61,
      "mail": 53,
      "domain": 34,
      "addresses": 34,
      "characters": 27,
      "retrieved": 27,
      "internet": 17,
      "message": 15,
      "validation": 12,
      "mailbox": 12,
      "errata": 12,
      "allowed": 12,
      "messages": 11,
      "systems": 10,
      "ietf": 10,
      "names": 10,
      "user": 10,
      "protocol": 10,
      "internationalized": 9,
      "solid": 9,
      "account": 8,
      "addressing": 8,
      "host": 8,
      "simple": 8,
      "transfer": 8,
      "mailboxes": 8,
      "character": 8,
      "quoted": 8,
      "additional": 7,
      "syntax": 7,
      "verification": 7,
      "form": 7,
      "format": 7,
      "klensin": 7,
      "july": 6,
      "tools": 6,
      "valid": 6,
      "internationalization": 6,
      "group": 6,
      "system": 6,
      "services": 6,
      "case": 6,
      "smtp": 6,
      "ascii": 6,
      "backslash": 6,
      "servers": 6,
      "server": 6,
      "original": 6,
      "archived": 6
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2025 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
