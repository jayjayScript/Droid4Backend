import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { JwtAuthGuard } from 'src/common/jwt/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  
  @Get()
  getProfile(@Req() req) {
    // req.user will contain the payload returned by JwtStrategy.validate()
    return this.profileService.getUserProfile(req.user)
  }
}
