import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/jwt/jwt.strategy'
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
  controllers: [ProfileController],
  providers: [ProfileService, JwtStrategy],
  exports: [ProfileService]
})
export class ProfileModule {}
