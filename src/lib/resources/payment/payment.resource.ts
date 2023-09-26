import { MercadoPago } from "@/lib/mercado-pago";
import { CreatePayment } from "./interfaces"
import { BaseMercadoPagoResource } from "../_base-mercado-pago-resouce";

export class PaymentResource extends BaseMercadoPagoResource {

    constructor(
        mercadoPago: MercadoPago
    ){
        super(mercadoPago)
    }

    async create(data: CreatePayment, headers?: BaseMercadoPagoResource.Headers)  {
        return await this.requestRoute({
            method: "POST",
            path: "/payments",
            headers,
            data
        })
    }
}

