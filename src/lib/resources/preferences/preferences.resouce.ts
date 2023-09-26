

import { MercadoPago } from "@/lib/mercado-pago";
import { BaseMercadoPagoResource } from "@/logic/_base-mercado-pago-resouce";
import { CreatePreference, UpdatePreference } from "./interfaces";

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
            path: `/checkout/preferences/:id`,
            params: {
                id
            },
            headers
        })
    }

    async update( data: UpdatePreference & { id: string }, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "PUT",
            path: `/checkout/preferences/:id`,
            params: {
                id: data.id
            },
            headers,
            data
        })
    }
}
