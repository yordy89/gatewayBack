import { Schema } from 'mongoose'

export const DeviceSchema = new Schema({
    vendor: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now },
    status: {type: Boolean, required: true, default: true},
    gateway: {type: Schema.Types.ObjectId, ref: 'Gateway'}
})