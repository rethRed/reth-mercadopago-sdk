import * as mercadopago from "mercadopago";
import { MercadoPago } from "./lib/mercado-pago";
import "dotenv/config"

const mercadoPago = MercadoPago.createInstance({
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!
})


if(mercadoPago.isSuccess()){

    const exec = async () => {
        const response = await mercadoPago.value.payment.create({
            transaction_amount: 10,
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
        }, { idempotency: "2" })
    }
    //exec()

}//d
