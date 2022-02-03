import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('microservice2')
  async microservice1(data) {
    console.log(data);
    return data;
  }
}
