import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GatewaySchema } from 'src/gateway/schema/gateway.schema';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { DeviceSchema } from './schema/device.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Device', schema: DeviceSchema },
    { name: 'Gateway', schema: GatewaySchema}
])],
  controllers: [DeviceController],
  providers: [DeviceService]
})
export class DeviceModule {}
