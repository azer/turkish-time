## turkish-time

Parses times written in simple Turkish to unix time. Based on [english-time](http://github.com/azer/english-time).

```js
time = require('turkish-time')

time('314 milisaniye')
// => 314

time('5 dakika 15 saniye')
// => 315000

time('1 saat, 5 dakika ve 15 Saniye')
// => 3915000

time('2sa 15d 15s')
// => 3915000

time('3 hafta, 5 gün, 6 saat')
// => 2268000000

time('3h, 5g 6sa')
// => 2268000000
```

Usage Example: [http://requirebin.com/embed?gist=6680955](http://requirebin.com/embed?gist=6680955)

## Install

```bash
$ npm install turkish-time
```

<a name="ref" />
## List of Recognized Unit Aliases

**Milliseconds**

* ms
* milisaniye
* milisaniyeler

**Second(s)**

* s
* sn
* saniye
* saniyeler

**Minute(s)**

* d
* dk
* dakika
* dakikalar

**Hour(s)**

* sa
* saat
* saatler

**Day(s)**

* g
* gün
* günler
* gun
* gunler

**Week(s)**

* h
* hafta
* haftalar
