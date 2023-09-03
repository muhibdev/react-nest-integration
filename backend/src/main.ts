import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();


  const SwaggerConfig = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, SwaggerConfig, {
    operationIdFactory: (controllerKey: string, methodKey: string) => {
      const controller = controllerKey.replace('Controller', '');
      return `${controller}_${methodKey}`;
    },
  });

  SwaggerModule.setup('swagger', app, document, {
    jsonDocumentUrl: '/swagger-json',
  });

  await app.listen(5000);
}
bootstrap();
