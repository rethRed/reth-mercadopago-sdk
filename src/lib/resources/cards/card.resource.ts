

import { MercadoPago } from "@/lib/mercado-pago";
import { BaseMercadoPagoResource } from "@/logic/_base-mercado-pago-resouce";
import { CreateCard, UpdateCard } from "./interfaces";

export class CardResource extends BaseMercadoPagoResource {

    constructor(
        mercadoPago: MercadoPago
    ){
        super(mercadoPago)
    }

    async create(data: CreateCard, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "POST",
            path: "/v1/customers/:customer_id/cards",
            headers,
            params: {
                customer_id: data.customer_id
            },
            data
        })
    }

    async find(data: { customerId: string, id: string }, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "GET",
            path: "/v1/customers/:customer_id/cards/:card_id",
            headers,
            params: {
                customer_id: data.customerId,
                card_id: data.id
            }
        })
    }

    async update(data: UpdateCard & { customerId: string, cardId: string }, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "PUT",
            path: "/v1/customers/:customer_id/cards/:card_id",
            headers,
            params: {
                customer_id: data.customerId,
                card_id: data.cardId
            },
            data
        })
    }

    async delete(data: { customerId: string, id: string }, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "GET",
            path: "/v1/customers/:customer_id/cards/:card_id",
            headers,
            params: {
                customer_id: data.customerId,
                card_id: data.id
            }
        })
    }
}

