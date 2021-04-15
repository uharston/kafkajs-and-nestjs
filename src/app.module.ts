import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BROKER1, BROKER2, CLIENTID, CLIENT_NAME } from './constants';
import { MyContController } from './my-cont/my-cont.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: CLIENT_NAME,
        transport: Transport.KAFKA,

        options: {
          client: {
            clientId: CLIENTID,
            brokers: [BROKER1],
          },
          // consumer: {
          //   groupId: 'hero-consumer',
          // },
        },
      },
    ]),
  ],
  controllers: [AppController, MyContController],
  providers: [AppService],
})
export class AppModule {}
