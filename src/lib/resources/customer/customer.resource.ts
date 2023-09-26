

import { MercadoPago } from "@/lib/mercado-pago";
import { BaseMercadoPagoResource } from "@/logic/_base-mercado-pago-resouce";
import { CreateCustomer, UpdateCustomer } from "./interfaces";

export class CustomerResource extends BaseMercadoPagoResource {

    constructor(
        mercadoPago: MercadoPago
    ){
        super(mercadoPago)
    }

    async create(data: CreateCustomer, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "POST",
            path: "/v1/customers",
            headers,
            data
        })
    }


}
