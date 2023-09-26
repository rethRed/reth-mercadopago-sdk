import { Either, MercadoPagoError } from "@/logic";
import { MercadoPago } from "../mercado-pago";
import { RequestManager, getAxiosInstance } from "@/helpers";

export class BaseMercadoPagoResource {

    constructor(
        protected readonly mercadoPago: MercadoPago
    ){}

    protected async requestRoute(params: BaseMercadoPagoResource.RequestRouteParams): Promise<Either<MercadoPagoError, any>> {
        const reponse = await RequestManager.requestRoute({
            baseUrl: this.mercadoPago.getBaseUrl(),
            accessToken: this.mercadoPago.accessToken,
            ...params
        })
        return reponse;
    }
}

export namespace BaseMercadoPagoResource {

    export type RequestRouteParams = {
        path: string;
        method: "GET" | "POST" | "PUT" | "DELETE";
        params?: {
            [key: string]: string;
        }
        headers?: Headers;
        data?: any;
    }
    

    export type Headers = {
        idempotency?: string;
        headers?: {
            [key: string]: string;
        }
    }
}