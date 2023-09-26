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
const mercadoPago = MercadoPago.createInstance({
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!
})
if(mercadoPago.isFailure()) return mercadoPago.value

const payment = await mercadoPago.value.payment.create({
    transaction_amount: 10,
    installments: 1,
    payer: {
        email: "client_mail@gmail.com"
    },
    payment_method_id: "pix"
})

if(payment.isFailure()) return payment.value
return payment.value
```
