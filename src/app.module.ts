import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyContModule } from './my-cont/my-cont.module';

@Module({
  imports: [MyContModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
