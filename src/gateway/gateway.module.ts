import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { MongooseModule } from '@nestjs/mongoose'
import { GatewaySchema } from './schema/gateway.schema'

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'Gateway', schema: GatewaySchema }
    ])],
    controllers: [GatewayController],
    providers: [GatewayService]
})
export class GatewayModule { }
