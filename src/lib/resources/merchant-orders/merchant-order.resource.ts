

import { MercadoPago } from "@/lib/mercado-pago";
import { BaseMercadoPagoResource } from "@/logic/_base-mercado-pago-resouce";
import { CreateMerchantOrder, UpdateMerchantOrder } from "./interfaces";

export class MerchantOrderResource extends BaseMercadoPagoResource {

    constructor(
        mercadoPago: MercadoPago
    ){
        super(mercadoPago)
    }

    async create(data: CreateMerchantOrder, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "POST",
            path: "/merchant_orders",
            headers,
            data
        })
    }

    async findById(id: number, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "GET",
            path: "/merchant_orders/:id",
            headers,
            params: {
                id
            }
        })
    }

    async update(data: UpdateMerchantOrder & { id: number }, headers?: BaseMercadoPagoResource.Headers) {
        return await this.requestRoute({
            method: "PUT",
            path: "/merchant_orders/:id",
            headers,
            params: {
                id: data.id
            },
            data
        })
    }

  
}

