export type UpdateMerchantOrder = {
    items?: {
        id?: string
        category_id?: string
        currency_id?: "ARS" | "BRL" | "CLP" | "COP" | "PEN" | "UYU" | "MXN"
        description?: string
        picture_url?: string
        quantity?: number
        unit_price?: number
        title?: string
    }[]
    payer?: {
        id?: number
        email?: string
        nickname?: string
    }
    additional_info?: string
    application_id?: string
    external_reference?: string
    marketplace?: string
    notification_url?: string
    preference_id?: string
    site_id?: "MLA" | "MLB" | "MLM" | "MLC" | "MLU" | "MCO" | "MPE"
    sponsor_id?: number
}