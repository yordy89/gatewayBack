import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static'
import { ContactModule } from './contact/contact.module';
import { MongooseModule } from '@nestjs/mongoose'
import { join } from 'path';

@Module({
  imports: [ContactModule, MongooseModule.forRoot('mongodb://localhost:27017/contact',{
      useNewUrlParser: true
  }), ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','build')
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
