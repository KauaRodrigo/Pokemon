import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PokemonModule, ConfigModule.forRoot({
    envFilePath: '../.env'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
