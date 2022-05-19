import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { GatewayService } from './gateway/gateway.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private gatewayService: GatewayService) {}
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload): void {
    this.gatewayService.save(payload.name, payload.text);
    this.server.emit('msgToClient', payload);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
