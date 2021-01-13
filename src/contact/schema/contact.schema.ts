import { Schema } from 'mongoose'

export const ContactSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String, rquired: true }
})