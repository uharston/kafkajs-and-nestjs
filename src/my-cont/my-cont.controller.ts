import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';
import { MY_CONT_SERVICE } from 'src/constants';

@Controller('my-cont')
export class MyContController implements OnModuleInit {
  constructor(@Inject(MY_CONT_SERVICE) private client: ClientKafka) {}
  async onModuleInit() {
    this.client.subscribeToResponseOf('__consumer_offsets');
    await this.client.connect();
  }

  // @MessagePattern('say hello')
  sayHello() {
    console.log(this.client);
    return 'hello';
  }
}
