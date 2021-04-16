import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BROKER1, CLIENTID, MY_CONT_SERVICE } from 'src/constants';
import { MyContController } from './my-cont.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MY_CONT_SERVICE,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: CLIENTID,
            brokers: [BROKER1],
          },
          consumer: {
            groupId: 'myCont-consumer',
          },
        },
      },
    ]),
    MyContModule,
  ],
  controllers: [MyContController],
})
export class MyContModule {}
