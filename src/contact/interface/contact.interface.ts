import { Document } from 'mongoose'

export interface Contact extends Document {
    name: string
    address: string
    phoneNumber: number
    email: string
}