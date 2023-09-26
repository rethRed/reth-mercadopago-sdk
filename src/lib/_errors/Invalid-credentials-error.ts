import { MercadoPagoError } from "@/logic";

export class InvalidCredentialsError extends MercadoPagoError {
    constructor(message: string) {
        super({
            message,
            status: 400
        })
    }
}