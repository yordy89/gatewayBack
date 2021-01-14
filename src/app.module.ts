import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static'
import { GatewayModule } from './gateway/gateway.module';
import { MongooseModule } from '@nestjs/mongoose'
import { join } from 'path';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [GatewayModule, MongooseModule.forRoot('mongodb://localhost:27017/contact',{
      useNewUrlParser: true
  }), ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','build')
  }), DeviceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
