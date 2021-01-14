import { Controller, Get, Post, Delete, Put, Param, Res, Body, NotFoundException, HttpStatus } from '@nestjs/common';
import { GatewayService } from './gateway.service'
import { GatewayDTO } from './dto/gateway.dto'

@Controller('gateway')
export class GatewayController {
    constructor(private gatewayService: GatewayService) { }

    @Get()
    async getAllGateways() {
        return this.gatewayService.getAllGateways();
    }

    @Get('/:gatewayId')
    async getGatewayById(@Param('gatewayId') gatewayId: string) {
        return await this.gatewayService.getGatewayById(gatewayId);
    }
    @Post()
    async createGateway(@Res() res, @Body() gatewayDTO: GatewayDTO) {
        const gateway = await this.gatewayService.createGateway(gatewayDTO)
        if (!gateway) throw new NotFoundException('Gateway could not be added')
        return res.status(HttpStatus.OK).json(gateway)
    }

    @Delete('/:gatewayId')
    async deleteGateway(@Res() res, @Param('gatewayId') gatewayId) {
        const gateway = await this.gatewayService.deleteGateway(gatewayId)
        if (!gateway) throw new NotFoundException('Gateway could not be removed')
        return res.status(HttpStatus.OK).json(gateway)
    }

    @Put('/:gatewayId')
    async updateGateway(@Res() res, @Body() gatewayDTO: GatewayDTO, @Param('gatewayId') gatewayId) {
        const gateway = await this.gatewayService.updateGateway(gatewayId, gatewayDTO)
        if (!gateway) throw new NotFoundException('Gateway could not be updated')
        return res.status(HttpStatus.OK).json(gateway)
    }

}
