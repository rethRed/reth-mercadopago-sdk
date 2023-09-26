import { Either, MercadoPagoError, failure, success } from "@/logic";
import { InvalidCredentialsError } from "./_errors";
import { 
    CustomerResource,
    MerchantOrderResource,
    PaymentResource, 
    PreferencesResource, 
    RefundResource 
} from "./resources";
import { CardResource } from "./resources/cards/card.resource";

export class MercadoPago {
    
    host: string = "https://api.mercadopago.com";

    payment: PaymentResource
    refundResource: RefundResource
    preferences: PreferencesResource
    customer: CustomerResource
    card: CardResource
    merchantOrder: MerchantOrderResource

    private constructor(
        private readonly props: MercadoPago.Props
    ){
        this.payment = new PaymentResource(this)
        this.refundResource = new RefundResource(this)
        this.preferences = new PreferencesResource(this)
        this.customer = new CustomerResource(this)
        this.card = new CardResource(this)
        this.merchantOrder = new MerchantOrderResource(this)
    }

    static createInstance(input: MercadoPago.Props): Either<MercadoPagoError, Omit<MercadoPago, 
    "accessToken" | "clientId"| "clientSecret" | "isSandbox" | "getBaseUrl" | "host" | "refundResource">> {

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
        return `${this.host}`;
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
