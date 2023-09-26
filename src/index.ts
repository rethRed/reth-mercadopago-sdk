import * as mercadopago from "mercadopago";
import { MercadoPago } from "./lib/mercado-pago";
import "dotenv/config"
const mercadoPago = MercadoPago.createInstance({
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!
})

if(mercadoPago.isSuccess()){

    const exec = async () => {
        const response = await mercadoPago.value.preferences.create({
            items: [{
                id: "1",
                unit_price: 1,
                quantity: 1,
                title: `Assinatura `,
                currency_id: "BRL"
            }],
            external_reference: "paymentRefernece.value"
        }, { idempotency: "1233" })
        if(response.isFailure()) return console.log(response.value)        

         const resposne =await mercadoPago.value.preferences.update({
            id: response.value.id,
            items: [{
                id: "1",
                unit_price: 1,
                quantity: 1,
                title: `Assinatura 1231241244`,
                currency_id: "BRL"
            }],

         })
         if(resposne.isFailure()) return console.log(resposne.value)


        const preference = await mercadoPago.value.preferences.findById(response.value.id)
        console.log("🚀 ~ file: index.ts:24 ~ exec ~ preference:", preference.value)
    }
    //exec()

}//dfdsdfsdcf
