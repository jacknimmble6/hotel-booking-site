/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelsModule } from './hotels/hotels.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StripeModule } from './stripe/stripe.module';
import { OrdersModule } from './orders/orders.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EmailController } from './email.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.local.env',
    }),
    MongooseModule.forRoot(
      'mongodb+srv://jacknimmble:nimmble67@cluster0.ooglnnq.mongodb.net/?retryWrites=true&w=majority',
    ),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        auth: {
          user: 'apikey',
          pass: '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',
        },
      },
      preview: true,
      template: {
        dir: join(__dirname, 'mails'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
      
    }),
    StripeModule.forRoot('sk_test_51IiVCyGIYilrPRlMF83KgmWqfIr7pzIiHQmvFCok57ZahWFjvoNxGNnki0pLua5Q8Jh4eaKn9nYmxOaRarffBQyV00fkfRLLjU', { apiVersion: '2022-11-15' }),
    HotelsModule,
    AuthModule,
    UsersModule,
    OrdersModule,
  ],
  controllers: [AppController, EmailController],
  providers: [AppService],
})
export class AppModule {}
