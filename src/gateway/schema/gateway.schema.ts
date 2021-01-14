import { Schema } from 'mongoose'

export const GatewaySchema = new Schema({
    name: { type: String, required: true },
    ipv4Address: { type: String, required: true },
    deviceList: [{ type: Schema.Types.ObjectId, ref: 'Device' }],
})