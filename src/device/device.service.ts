import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gateway } from 'src/gateway/interface/gateway.interface';
import { DeviceDTO } from './dto/device.dto';
import { Device } from './interface/device.interface';

@Injectable()
export class DeviceService {
    constructor(
        @InjectModel('Device') private readonly deviceModel: Model<Device>,
        @InjectModel('Gateway') private readonly gatewayModel: Model<Gateway>
    ) { }

    async createDevice(deviceDTO: DeviceDTO, gatewayId: string): Promise<Device> {
        const device = new this.deviceModel(deviceDTO)
        const deviceCreated = await device.save()

        await this.gatewayModel.findByIdAndUpdate(gatewayId, {
            $push: { deviceList: deviceCreated._id }
        },
            { new: true }
        )

        return deviceCreated;
    }

    async deleteDevice(deviceId: string): Promise<Device> {
        const device = await this.deviceModel.findByIdAndDelete(deviceId)
        return device
    }

    async updateDevice(deviceId: string, deviceDTO: DeviceDTO): Promise<Device> {
        const device = await this.deviceModel.findByIdAndUpdate(deviceId, deviceDTO, { new: true })
        return device
    }

    async getDevices(devices: Device[], device: Device): Promise<Device[]> {
        return await devices.filter((c: Device) => c._id === device._id)
    }

    async getAllDevices(): Promise<Device[]> {
        return await this.deviceModel.find();
    }
}
