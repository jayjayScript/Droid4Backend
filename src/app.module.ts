import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';;
import { SeedModule } from './seed/seed.module';
import { ProfileModule } from './profile/profile.module';
import { config } from 'dotenv';
import { TransactionModule } from './transaction/transaction.module';
config()

@Module({
  imports: [
    ConfigModule.forRoot(), // ✅ Load .env
    MongooseModule.forRoot(process.env.MONGODB_URI || ''), SeedModule, ProfileModule, TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
