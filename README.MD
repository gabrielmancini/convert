to install
---

use node > 8

```
npm i
npm link
```

to run
---

```
convert -u https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt -f ./test.txt
```

help
---

```
grab and transform the log:

  Usage: convert [options]


  Options:

    -V, --version      output the version number
    -u, --url [type]   Url from log
    -f, --file [type]  file name
    -h, --help         output usage information

```

for debug
---

```
NODE_DEBUG=convert
```

for test
---

```
npm test
```
