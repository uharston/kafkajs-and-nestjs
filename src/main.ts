import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { BROKER1, CLIENTID } from './constants';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: CLIENTID,
          brokers: [BROKER1],
        },
        // consumer: {
        //   groupId: 'myCont-consumer',
        // },
      },
    },
  );

  app.listen(() => Logger.log('Microservice is listening', 'Bootstrap'));
}
Logger.log('Bootstrap start....', 'Bootstrap');
bootstrap();
