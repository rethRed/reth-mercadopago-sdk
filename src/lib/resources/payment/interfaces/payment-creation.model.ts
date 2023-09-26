
export type PaymentCreationModel = {
    [key: string]: any
    id: number
    point_of_interaction: {
        type: "PIX",
        application_data: {
          name: string,
          version: string
        },
        transaction_data: {
          qr_code_base64: string
          qr_code: string
          ticket_url: string
        }
    }
}
