import { Document } from 'mongoose'

export interface Gateway extends Document {
    name: string
    ipv4Address: string
}