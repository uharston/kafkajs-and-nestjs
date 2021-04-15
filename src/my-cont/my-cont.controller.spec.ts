import { Test, TestingModule } from '@nestjs/testing';
import { MyContController } from './my-cont.controller';

describe('MyContController', () => {
  let controller: MyContController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyContController],
    }).compile();

    controller = module.get<MyContController>(MyContController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
