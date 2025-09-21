import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './configs/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { importModule } from './configs/import.config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }), TypeOrmModule.forRoot(databaseConfig()),
  ...importModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
