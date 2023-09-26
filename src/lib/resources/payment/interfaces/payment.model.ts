export type PaymentModel = {
    id: number,
    date_created: string,
    date_approved: string,
    date_last_updated: string,
    money_release_date: string,
    payment_method_id: "pix" | "account_money" | "debin_transfer" | "cvu" | "pse",
    payment_type_id: "account_money" | "ticket" | "bank_transfer" | "atm" | "credit_card" | "debit_card" | "prepaid_card" | "digital_currency" | "digital_wallet" | "voucher_card" | "crypto_transfer",
    status: "pending" | "approved" | "authorized" | "in_process" | "in_mediation" | "rejected" | "cancelled" | "refunded" | "charged_back",
    status_detail: "accredited" | "pending_contingency" | "pending_review_manual" | "cc_rejected_bad_filled_date" | "cc_rejected_bad_filled_other" | "cc_rejected_bad_filled_security_code" | "cc_rejected_blacklist" | "cc_rejected_call_for_authorize" | "cc_rejected_card_disabled" | "cc_rejected_duplicated_payment" | "cc_rejected_high_risk" | "cc_rejected_insufficient_amount" | "cc_rejected_invalid_installments" | "cc_rejected_max_attempts" | "cc_rejected_other_reason",
    currency_id: "ARS" | "BRL" | "CLP" | "MXN" | "COP" | "PEN" | "UYU" | "VES" | "MCN" | "BTC" | "USD" | "USDP" | "DCE" | "ETH" | "FDI" | "CDB",
    description: string,
    collector_id: number,
    payer: {
        id: number,
        email: string,
        identification: {
            type: "CPF" | "CNPJ" | "CUIT" | "CUIL" | "DNI" | "CURP" | "RFC" | "CC" | "RUT" | "CI",
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