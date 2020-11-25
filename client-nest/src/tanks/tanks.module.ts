import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tank } from './tank.entity';
import { TanksController } from './tanks.controller';
import { TanksService } from './tanks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tank])],
  providers: [TanksService],
  controllers: [TanksController],
})
export class TanksModule {}
