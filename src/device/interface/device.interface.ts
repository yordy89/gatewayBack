import { Document } from 'mongoose'

export interface Device extends Document {
    vemdor: string
    status: boolean
}