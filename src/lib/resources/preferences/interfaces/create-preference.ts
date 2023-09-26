export type CreatePreference = {

    items: {
        id: string
        title: string
        unit_price: number
        quantity: number
        description?: string
        picture_url?: string
        category_id?: string
        currency_id?: "ARS" | "BRL" | "CLP" | "COP" | "PEN" | "UYU" | "MXN"
    }[]
    tracks?: {
        type: "google_ad" | "facebook_ad"
        values: any | string
    }[]
    metadata?: any
    payer?: {
        name?: string
        surname?: string
        email?: string
        phone?: {
            area_code?: string
            number?: number
            identification?: {
                type?: string
                number?: string
            },
            address?: string
            zip_code?: string
            street_name?: string
            street_number?: number
        }
        date_created?: string
    },

    statement_descriptor?: string
    payment_methods?: {
        excluded_payment_methods: {
            id: string[]
        }
        excluded_payment_types: {
            id: string[]
        }
        default_installments?: number
        installments?: number
        default_payment_method_id?: number
    },
    shipments?: {
        mode?: 'custom' | 'me2' | 'not_specified'
        local_pickup?: boolean
        dimensions?: string
        default_shipping_method?: number
        free_methods?: {
            id?: number
        }[]
        cost?: number
        free_shipping?: boolean
        receiver_address?: {
            zip_code?: string
            street_name?: string
            city_name?: string
            state_name?: string
            street_number: number
            floor?: string
            apartment?: string
        }

    },
    back_urls?: {
        success?: string
        pending?: string
        failure?: string
    },
    notification_url?: string
    mode?: 'regular_payment' | 'money_transfer'
    additional_info?: string
    auto_return?: 'approved' | 'all'
    external_reference?: string
    expires?: boolean
    expiration_date_from?: string
    expiration_date_to?: string
    collector_id?: number
    client_id?: number
    marketplace?: string
    marketplace_fee?: number
    differential_pricing?: {
        id?: number
    },
    taxes?: {
        type: 'IVA' | 'INC'
        value: number
    }[]

    binary_mode?: boolean

};
