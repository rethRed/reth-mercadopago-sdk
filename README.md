# reth-mercadopago-sdk

## 📲 Installation 

1. Install NodeJS SDK for MercadoPago running in command line:
```sh
$ npm i @rethred/mercadopago-sdk
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

  You can check if the operation was successfull or not by calling the methods:
```javascript
const payment = await mercadoPago.value.payment.create()
if(payment.isFailure()) console.log("operation failed")
if(payment.isSuccess()) console.log("operation succeeded")
```
Definition of MercadoPagoError:
```javascript
class MercadoPagoError {
  message: string;
  aditionalInfo: any;
  status: number;
  code: number | string
}
```
response if successfull:
```javascript
const response =  {
  id: string
  payment_method_id: string
  // ...
}
```

  Keep in mind the responses are not typed, so you will have to look at the documentation to consult what each operation will return.

