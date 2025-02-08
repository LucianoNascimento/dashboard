import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: 'http://localhost:3000', // Permitir requisições apenas do frontend
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // Permitir envio de cookies
    });

    const port = process.env.PORT ?? 3001;
    await app.listen(port);
}

bootstrap();
