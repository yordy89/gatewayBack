import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { GatewayDTO } from './dto/gateway.dto'
import { Gateway } from './interface/gateway.interface'

@Injectable()
export class GatewayService {
    constructor(@InjectModel('Gateway') private readonly gatewayModel: Model<Gateway>) { }

    async createGateway(gatewayDTO: GatewayDTO): Promise<Gateway> {
        const gateway = new this.gatewayModel(gatewayDTO)
        return await gateway.save()
    }

    async deleteGateway(gatewayId: string): Promise<Gateway> {
        const gateway = await this.gatewayModel.findByIdAndDelete(gatewayId)
        return gateway
    }

    async updateGateway(gatewayId: string, gatewayDTO: GatewayDTO): Promise<Gateway> {
        const gateway = await this.gatewayModel.findByIdAndUpdate(gatewayId, gatewayDTO, { new: true })
        return gateway
    }

    async getAllGateways(): Promise<Gateway[]> {
        return await this.gatewayModel.find().populate("deviceList");
    }

    async getGatewayById(gatewayId: string): Promise<Gateway> {
        return await this.gatewayModel.findById(gatewayId).populate("deviceList");
    }
}
