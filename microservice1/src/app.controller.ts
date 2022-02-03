import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('MICROSERVICE2') private client: ClientProxy) {}

  @MessagePattern('microservice1')
  async microservice1(data) {
    console.log(data);
    return this.client.send('microservice2', data);
  }
}
