import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyContController } from './my-cont/my-cont.controller';

@Module({
  imports: [],
  controllers: [AppController, MyContController],
  providers: [AppService],
})
export class AppModule {}
