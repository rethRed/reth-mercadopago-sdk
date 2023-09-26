import { MercadoPago } from "@/lib/mercado-pago";
import { CreatePayment } from "./interfaces"
import { BaseMercadoPagoResource } from "../../../logic/_base-mercado-pago-resouce";

export class PaymentResource extends BaseMercadoPagoResource {

    constructor(
        mercadoPago: MercadoPago
    ){
        super(mercadoPago)
    }

    async create(data: CreatePayment, headers?: BaseMercadoPagoResource.Headers)  {
        return await this.requestRoute({
            method: "POST",
            path: "/v1/payments",
            headers,
            data
        })
    }

    async cancel(id: string, headers?: BaseMercadoPagoResource.Headers)  {
        return await this.requestRoute({
            headers,
            method: "PUT",
            path: `/v1/payments/:id`,
            params: {
                id
            },
            data: {
                status: "cancelled"
            }
        })
    }

    async capture(id: string, headers?: BaseMercadoPagoResource.Headers)  {
        return await this.requestRoute({
            headers,
            method: "PUT",
            path: `/v1/payments/:id`,
            params: {
                id,
            },
            data: {
                capture: true
            }
        })
    }

    async capturePatial(props: { id: string, transaction_amount: number }, headers?: BaseMercadoPagoResource.Headers)  {
        return await this.requestRoute({
            headers,
            method: "PUT",
            path: `/v1/payments/:id`,
            params: {
                id: props.id,
            },
            data: {
                capture: true,
                transaction_amount: props.transaction_amount
            }
        })
    }

    async findById(id: string, headers?: BaseMercadoPagoResource.Headers)  {
        return await this.requestRoute({
            headers,
            method: "GET",
            path: `/v1/payments/:id`,
            params: {
                id
            }
        })
    }

    async refund(id: string, headers?: BaseMercadoPagoResource.Headers)  {
        return this.mercadoPago.refundResource.refund(id, headers)
    }

    async refundPartial(props: { id: string, amount: number }, headers?: BaseMercadoPagoResource.Headers)  {
        return this.mercadoPago.refundResource.refundPartial(props, headers)
    }
}

