import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('my-cont')
export class MyContController {
  @MessagePattern('__hello_kafka_topic')
  sayHello(data) {
    console.log(data);
    return data.value;
  }
}
