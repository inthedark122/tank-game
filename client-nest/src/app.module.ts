import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tank } from './tanks/tank.entity';
import { TanksModule } from './tanks/tanks.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'tmp/test.db',
      entities: [Tank],
    }),
    TanksModule,
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
