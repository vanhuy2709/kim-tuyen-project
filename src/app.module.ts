import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { BrandModule } from './brand/brand.module';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),

    ConfigModule.forRoot({
      isGlobal: true
    }),

    UsersModule,
    AuthModule,
    BlogModule,
    ContactModule,
    BrandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
