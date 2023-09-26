import * as mercadopago from "mercadopago";
import { MercadoPago } from "./lib/mercado-pago";
import "dotenv/config"
const mercadoPago = MercadoPago.createInstance({
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!
})


if(mercadoPago.isSuccess()){

    const exec = async () => {
        const response = await mercadoPago.value.payment.create({
            transaction_amount: 1,
            installments: 1,
            payment_method_id: "pix",
            payer: {
                email: "any_mail@gmail.com",
            },
            additional_info: {
                payer: {
                    authentication_type: "Gmail"
                }
            }
        }, { idempotency: "12243" })
        if(response.isFailure()) return console.log(response.value)        
        //onsole.log("🚀 ~ file: index.ts:26 ~ exec ~ response:", response.value.point_of_interaction)
        mercadoPago.value.payment.
        const res = await mercadoPago.value.payment.refundPartial({
            id: response.value.id,
            amount: 0.50
        })
        console.log("🚀 ~ file: index.ts:27 ~ exec ~ res:", res)
    }
    exec()

}//dfd
