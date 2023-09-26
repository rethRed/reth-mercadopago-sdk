import * as mercadopago from "mercadopago";
import { MercadoPago } from "./lib/mercado-pago";
import "dotenv/config"
const mercadoPago = MercadoPago.createInstance({
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!
})


if(mercadoPago.isSuccess()){

    const exec = async () => {
        const response = await mercadoPago.value.customer.search({
            
        }, { idempotency: "1233" })
        if(response.isFailure()) return console.log(response.value)        
        
        console.log("🚀 ~ file: index.ts:15 ~ exec ~ response:", response.value.results)
    }
    exec()

}//dfdsdfsdcfd
