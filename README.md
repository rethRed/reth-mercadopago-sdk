# reth-mercadopago-sdk

## 📲 Installation 

First time using Mercado Pago? Create your [Mercado Pago account](https://www.mercadopago.com), if you don’t have one already.

1. Install NodeJS SDK for MercadoPago running in command line:
```sh
$ npm install --save mercadopago
```


## 🌟 Getting Started

  Simple usage looks like:

```javascript
var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'YOUR_ACCESS_TOKEN'
});

var preference = {
  items: [
    {
      title: 'Test',
      quantity: 1,
      currency_id: 'ARS',
      unit_price: 10.5
    }
  ]
};

mercadopago.preferences.create(preference)
```
