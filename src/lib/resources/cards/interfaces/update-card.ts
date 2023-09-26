export type UpdateCard = {
    expiration_month?: number
    expiration_year?: number
    ["cardholder.name"]?: string
    ["cardholder.identification"]?: string
    token?: string
}