import { MercadoPago } from "@/lib/mercado-pago";
import { BaseMercadoPagoResource } from "../_base-mercado-pago-resouce";

export class RefundResource extends BaseMercadoPagoResource {

    constructor(
        mercadoPago: MercadoPago
    ){
        super(mercadoPago)
    }

    async refund(id: string, headers?: BaseMercadoPagoResource.Headers)  {
        return await this.requestRoute({
            headers,
            method: "POST",
            path: `/payments/:id/refunds`,
            params: {
                id
            }
        })
    }

    async refundPartial(props: { id: string, amount: number }, headers?: BaseMercadoPagoResource.Headers)  {
        return await this.requestRoute({
            headers,
            method: "POST",
            path: `/payments/:id/refunds`,
            params: {
                id: props.id,
            },
            data: {
                amount: props.amount
            }
        })
    }

}
