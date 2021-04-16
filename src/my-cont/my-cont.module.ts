import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BROKER1, CLIENTID, MY_CONT_SERVICE } from 'src/constants';
import { MyContController } from './my-cont.controller';

@Module({
  imports: [MyContModule],
  controllers: [MyContController],
})
export class MyContModule {}
