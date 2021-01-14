import { Controller, Get, Post, Delete, Put, Param, Res, Body, NotFoundException, HttpStatus } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceDTO } from './dto/device.dto';

@Controller('device')
export class DeviceController {
  constructor( private deviceService: DeviceService){}

  @Get()
  async getAllDevices() {
      return this.deviceService.getAllDevices();
  }
  @Post(':gatewayId')
  async createDevice(@Res() res, @Param('gatewayId') gatewayId: string, @Body() deviceDTO: DeviceDTO) {
      const device = await this.deviceService.createDevice(deviceDTO, gatewayId)
      if (!device) throw new NotFoundException('Device could not be added')
      return res.status(HttpStatus.OK).json(device)
  }

  @Delete('/:deviceId')
  async deleteDevice(@Res() res, @Param('deviceId') deviceId) {
      const device = await this.deviceService.deleteDevice(deviceId)
      if (!device) throw new NotFoundException('Could not remove device')
      return res.status(HttpStatus.OK).json(device)
  }

  @Put('/:deviceId')
  async updateDevice(@Res() res, @Body() deviceDTO: DeviceDTO, @Param('deviceId') deviceId) {
      const device = await this.deviceService.updateDevice(deviceId, deviceDTO)
      if (!device) throw new NotFoundException('Could not update device')
      return res.status(HttpStatus.OK).json(device)
  }

}
