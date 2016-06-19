# `cardmask`

Taken from [CardJs/CardJs](https://github.com/CardJs/CardJs), but with no jquery or ui code. When you apply a card mask the input is parsed and updated to include spaces, so the card number looks like the physical card. 

```js
// before
"4242424242424242"

// after
"4242 4242 4242 4242"
```

There are more advanced packages that include flipping cards and bundled icons. Adding spaces is simple and should be sufficient to allow the user to visually check their card is correct. 

### Install

I would copy-paste the `index.js` file into your project to avoid the dependency. You can also install from github. 

```
$ npm install --save aj0strow/cardmask
```

### Usage

Add spaces to credit card numbers.

```js
import { applyNumberMask } from "cardmask"

applyNumberMask("42424242")
// "4242 4242"

applyNumberMask("3782822463100")
// "3782 822463 100"
```

Format card expiry.

```js
import { applyExpiryMask } from "cardmask"

applyExpiryMask("1218")
// "12 / 18"

applyExpiryMask("08")
// "08 / "
```

### Credit

MIT License. Credit goes to [CardJS](https://cardjs.co.uk/) and the [TravelDuck](https://travelduck.co/) team for credit card patterns and masks. 
