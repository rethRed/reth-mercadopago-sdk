import { Either, MercadoPagoError, failure, success } from "@/logic";
import { getAxiosInstance } from "./axios";
import { BaseMercadoPagoResource } from "@/lib/resources/_base-mercado-pago-resouce";


export class RequestManager {

    static async requestRoute(params: RequestManager.RequestRouteParams): Promise<Either<MercadoPagoError, any>> {
        const axiosInstance = getAxiosInstance()
        const { path, method, data } = params;

        const response = await axiosInstance({
            method,
            url: `${params.baseUrl}/${path}`,
            data,
            headers: {
                Authorization: `Bearer ${params.accessToken}`,
                "X-Idempotency-Key": params.headers?.idempotency,
                ...params.headers?.headers,
            }
        })
        if(response.status >= 200 && response.status < 300) {
            return success(response.data)
        }

        return failure(new MercadoPagoError({
            status: response.status,
            code: response.data.cause[0].code,
            message: response.data.message,
            aditionalInfo: response.data
        }))
    }
}

export namespace RequestManager {

    export type RequestRouteParams = {
        baseUrl: string;
        accessToken: string;
        headers?: BaseMercadoPagoResource.Headers;
        path: string;
        method: "GET" | "POST" | "PUT" | "DELETE";
        data?: any;
    }
}
