# Keyword Extractor API - Go Client

Keyword Extractor is a simple tool for extracting keywords from a web page. It returns the keywords and the frequency of each keyword.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Go client for the [Keyword Extractor API](https://apiverve.com/marketplace/keywordextractor?utm_source=go&utm_medium=readme)

---

## Installation

```bash
go get github.com/apiverve/keywordextractor-api/go
```

---

## Configuration

Before using the Keyword Extractor API client, you need to obtain your API key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=go&utm_medium=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=go&utm_medium=readme)

The Keyword Extractor API documentation is found here: [https://docs.apiverve.com/ref/keywordextractor](https://docs.apiverve.com/ref/keywordextractor?utm_source=go&utm_medium=readme)

---

## Usage

```go
package main

import (
    "fmt"
    "log"

    "github.com/apiverve/keywordextractor-api/go"
)

func main() {
    // Create a new client
    client := keywordextractor.NewClient("YOUR_API_KEY")

    // Set up parameters
    params := map[string]interface{}{
        "url": "https://en.wikipedia.org/wiki/Email_address"
    }

    // Make the request
    response, err := client.Execute(params)
    if err != nil {
        log.Fatal(err)
    }

    fmt.Printf("Status: %s\n", response.Status)
    fmt.Printf("Data: %+v\n", response.Data)
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

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=go&utm_medium=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=go&utm_medium=readme), [Privacy Policy](https://apiverve.com/privacy?utm_source=go&utm_medium=readme), and [Refund Policy](https://apiverve.com/refund?utm_source=go&utm_medium=readme).

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
