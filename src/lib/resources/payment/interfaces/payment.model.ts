import { CurrencyNames, Identification, PaymentMethods, PaymentStatus, PaymentTypes, StatusDetail } from "@/interfaces"

export type PaymentModel = {
    id: number,
    date_created: string,
    date_approved: string,
    date_last_updated: string,
    money_release_date: string,
    payment_method_id: PaymentMethods
    payment_type_id: PaymentTypes
    status: PaymentStatus
    status_detail: StatusDetail
    currency_id: CurrencyNames
    description: string,
    collector_id: number,
    payer: {
        id: number,
        email: string,
        identification: {
            type: Identification
            number: number
        },
        type?: 'customer' | 'registered' | 'guest'
    },
    metadata?: any,
    additional_info?: any,
    transaction_amount: number,
    transaction_amount_refunded: number,
    coupon_amount: number,
    transaction_details: any,
    installments: number,
    card: {}
}