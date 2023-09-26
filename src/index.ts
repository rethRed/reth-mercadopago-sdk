import * as mercadopago from "mercadopago";
import { MercadoPago } from "./lib/mercado-pago";
import "dotenv/config"
const mercadoPago = MercadoPago.createInstance({
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!
})

const customerId = "1492078960-wWjrZ8uDuNsu1Y"

if(mercadoPago.isSuccess()){

    const exec = async () => {
         const update = await mercadoPago.value.customer.cards.create({
            customer_id: customerId,
            token: "ff8080814c11e237014c1ff593b57b4d"
        }, { idempotency: "1233" })
         console.log("🚀 ~ file: index.ts:17 ~ exec ~ update:", update.value)

        // const response = await mercadoPago.value.customer.findById("1492078960-wWjrZ8uDuNsu1Y", { idempotency: "1233" })
        // if(response.isFailure()) return console.log(response.value)        
        
        // console.log("🚀 ~ file: index.ts:15 ~ exec ~ response:", response.value)
    }
    exec()

}//dfdsdfsdcfdd
