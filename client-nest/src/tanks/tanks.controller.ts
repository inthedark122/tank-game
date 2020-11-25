import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UpdateTankDto } from './tank.dto';
import { Tank } from './tank.entity';
import { TanksService } from './tanks.service';

@Controller('api/tanks')
export class TanksController {
  constructor(private readonly tanksService: TanksService) {}

  @Get()
  getTanks(): Promise<Tank[]> {
    return this.tanksService.findAll();
  }

  @Post(':tankId')
  updateTank(
    @Param('tankId') tankId: number,
    @Body() tank: UpdateTankDto,
  ): Promise<Tank> {
    if (tankId) {
      return this.tanksService.updateOne(tankId, tank);
    }
  }
}
