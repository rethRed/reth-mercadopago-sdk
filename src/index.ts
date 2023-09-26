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
        }, { idempotency: "12243243" })
        if(response.isFailure()) return console.log(response.value)        

        const preference = await mercadoPago.value.preferences.findById(response.value.id)
        console.log("🚀 ~ file: index.ts:24 ~ exec ~ preference:", preference.value)
    }
    exec()

}//dfdsdfsd
