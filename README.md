# reth-mercadopago-sdk

## 📲 Installation 

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

## 🌟 Logic

  Each operation will yield one of two outcomes: a MercadoPagoError in the event of an error, or the desired value in case of a   
  successful operation.

```javascript
const payment = await mercadoPago.value.payment.create()
if(payment.isFailure()) console.log("operation failed")
if(payment.isSuccess()) console.log("operation succeeded")
```
  

