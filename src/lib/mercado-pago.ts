import { Either, MercadoPagoError, failure, success } from "@/logic";
import { InvalidCredentialsError } from "./_errors";


export class MercadoPago {
    
    host: string = "https://api.mercadopago.com";

    private constructor(
        private readonly props: MercadoPago.Props
    ){}

    static createInstance(input: MercadoPago.Props): Either<MercadoPagoError, MercadoPago> {

        if ((input.clientId !== undefined && input.clientSecret === undefined)
        || (input.clientId === undefined && input.clientSecret !== undefined)) {
            return failure( new InvalidCredentialsError("You must provide both clientId and clientSecret"))
        }

        const mercadoPago = new MercadoPago(input)

        return success(mercadoPago)
    }

    get accessToken() {
        return this.props.accessToken;
    }

    get clientId() {
        return this.props.clientId;
    }

    get clientSecret() {
        return this.props.clientSecret;
    }

    isSandbox() {
        return this.props.sandbox;
    }

    getBaseUrl() {
        return `http://${this.host}/v1`;
    }



}

export namespace MercadoPago {
    
    export type Props = {
        accessToken: string;
        clientId?: string
        clientSecret?: string
        sandbox?: boolean
    }
}
