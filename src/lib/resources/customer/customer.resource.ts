

import { MercadoPago } from "@/lib/mercado-pago";
import { BaseMercadoPagoResource } from "@/logic/_base-mercado-pago-resouce";
import { CreateCustomer, SearchCustomer, UpdateCustomer } from "./interfaces";
import { CardResource } from "../cards/card.resource";

export class CustomerResource extends BaseMercadoPagoResource {

    cards: CardResource

    constructor(
        mercadoPago: MercadoPago
    ){
        super(mercadoPago)
        this.cards = mercadoPago.card
    }

    async create(data: CreateCustomer, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "POST",
            path: "/v1/customers",
            headers,
            data
        })
    }

    async search(data: SearchCustomer, headers?: BaseMercadoPagoResource.Headers) { 
        return await this.requestRoute({
            method: "GET",
            path: `/v1/customers/search`,
            headers,
            data
        })
    }

    async findById(id: string, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "GET",
            path: "/v1/customers/:id",
            headers,
            params: {
                id
            }
        })
    }

    async update(data: UpdateCustomer & { id: string }, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "PUT",
            path: "/v1/customers/:id",
            headers,
            params: {
                id: data.id
            },
            data
        })
    }
}

