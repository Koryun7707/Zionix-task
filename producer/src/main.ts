import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'users',
        protoPath: join(__dirname, '../../proto/users.proto'),
        url: '0.0.0.0:5000',
      },
    },
  );
  await app.listen();
  console.log('Producer gRPC service is listening on port 5000');
}
bootstrap();
