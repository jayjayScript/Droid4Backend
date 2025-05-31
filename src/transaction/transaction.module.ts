import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { UserModule } from 'src/schema/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/jwt/jwt.strategy';

@Module({
  imports: [
    UserModule,
    TransactionModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET!, // store securely!
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [TransactionController],
  providers: [TransactionService, JwtStrategy],
})
export class TransactionModule { }
