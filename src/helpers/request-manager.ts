import { Either, MercadoPagoError, failure, success } from "@/logic";
import { getAxiosInstance } from "./axios";
import { BaseMercadoPagoResource } from "@/lib/resources/_base-mercado-pago-resouce";


export class RequestManager {

    static async requestRoute(params: RequestManager.RequestRouteParams): Promise<Either<MercadoPagoError, any>> {
        const axiosInstance = getAxiosInstance()
        const { path, method, data, headers, params: requestParams, accessToken, baseUrl } = params;

        const formatedPath = path.replace(/:([^\/]+)/g, (match, paramName) => {
            if(requestParams?.hasOwnProperty(paramName)) {
                return requestParams[paramName]
            }
            return match
        })

        const response = await axiosInstance({
            method,
            url: `${baseUrl}/${formatedPath}`,
            data,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "X-Idempotency-Key": headers?.idempotency,
                ...headers?.headers,
            }
        })
        if(response.status >= 200 && response.status < 300) {
            return success(response.data)
        }

        let code = 0
        if(Array.isArray(response.data?.cause)) {
            code = response.data?.cause[0]?.code
        }

        return failure(new MercadoPagoError({
            status: response.status,
            code,
            message: response.data.message,
            aditionalInfo: response.data
        }))
    }
}

export namespace RequestManager {

    export type RequestRouteParams = {
        baseUrl: string;
        accessToken: string;
        params?: {
            [key: string]: string;
        }
        headers?: BaseMercadoPagoResource.Headers;
        path: string;
        method: "GET" | "POST" | "PUT" | "DELETE";
        data?: any;
    }
}
