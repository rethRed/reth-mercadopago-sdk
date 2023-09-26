

import { MercadoPago } from "@/lib/mercado-pago";
import { BaseMercadoPagoResource } from "@/logic/_base-mercado-pago-resouce";
import { CreatePreference } from "./interfaces";

export class PreferencesResource extends BaseMercadoPagoResource {

    constructor(
        mercadoPago: MercadoPago
    ){
        super(mercadoPago)
    }

    async create(data: CreatePreference, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "POST",
            path: "/checkout/preferences",
            headers,
            data
        })
    }

    async findById(id: string, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "GET",
            path: `/checkout/preferences/${id}`,
            headers
        })
    }

}
