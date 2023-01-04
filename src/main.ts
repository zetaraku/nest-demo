import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addSecurity('csrf', { type: 'apiKey', in: 'header', name: 'X-Csrf-Token' })
    .addSecurity('recaptcha', { type: 'apiKey', in: 'header', name: 'X-Recaptcha-Token' })
    .addSecurityRequirements('csrf')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
