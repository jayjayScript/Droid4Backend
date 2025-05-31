// src/seed/seed.module.ts
import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv';
import { UserModule } from 'src/schema/user.module';
config()


@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET!, // store securely!
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [SeedController],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule { }

