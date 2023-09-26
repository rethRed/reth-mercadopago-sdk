
export type CreatePayment = {
    additionalProperties?: boolean, // Fails if an extra param is added to the model
    payer: {
          entity_type?: 'individual' | 'association'
          type?: 'customer' | 'registered' | 'guest'
          id?: string
          email: string
          identification?: {
              type?: "CPF" | "CNPJ" | "CUIT" | "CUIL" | "DNI" | "CURP" | "RFC" | "CC" | "RUT" | "CI"
              number?: string
          },
          phone?: {
            area_code: number
            number: string
            extension?: string
          },
          first_name?: string
          last_name?: string
    },
    binary_mode?: boolean
    external_reference?: string
    description?: string
    metadata?: any
    transaction_amount: number
    coupon_amount?: number
    campaign_id?: number
    coupon_code?: string
    differential_pricing_id?: number
    application_fee?: number
    capture?: boolean
    payment_method_id: "pix" | "account_money" | "debin_transfer" | "ted" | "cvu" 
    issuer_id?: string
    token?: string
    statement_descriptor?: string
    installments: number
    notification_url?: string
    callback_url?: string
    additional_info?: {
        ip_address?: string
        items?: {
            id?: string
            title?: string
            description?: string
            picture_url?: string
            category_id?: string
            quantity?: number
            unit_price?: number
            type?: string
            event_date?: string
            warranty?: boolean
            category_descriptor?: {
                passenger?: {
                    first_name?: string
                    last_name?: string
                }
                route?: {
                    departure?: string
                    destination?: string
                    departure_date_time?: string
                    arrival_date_time?: string
                    company?: string
                }
            }
          }[]
        payer?: {
              first_name?: string
              last_name?: string
              phone?: {
                area_code?: string
                number?: string
              },
              address?: {
                  zip_code?: string
                  street_name?: string
                  street_number: number
                
              },
              registration_date?: string
              is_prime_user?: string
              is_first_purchase_online?: string
              last_purchase?: string
              authentication_type?:  "Gmail" | "Facebook" | "Native web" | "Other"
          },
        shipments?: {
            receiver_address?: {
                zip_code?: string
                state_name?: string
                city_name?: string
                street_name?: string
                street_number?: number
                floor?: number
                apartment?: string
            }
            width?: number
            height?: number
            express_shipment?: string
            pick_up_on_seller?: string
        }
  
  
    }
}
    
