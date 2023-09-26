
export class MercadoPagoError extends Error {
    
    aditionalInfo?: any
    status: number;
    code: number

    constructor({ message, aditionalInfo, status, code }: MercadoPagoError.Input) {
        super(message ?? "Unknown error");
        this.name = this.constructor.name;
        this.aditionalInfo = aditionalInfo
        this.status = status ?? 500
        this.code = code ?? 0
    }

}

export namespace MercadoPagoError {

    export type Input = {
        message?: string;
        aditionalInfo?: any;
        status?: number;
        code?: number
    }
}