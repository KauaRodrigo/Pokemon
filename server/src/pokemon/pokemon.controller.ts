import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get(':filtro')
  findAll(@Param('filtro') filter: string) {
    return this.pokemonService.findAll(filter);
  }

  @Get()
  findOne(@Query('filter') filter: string) {
    return this.pokemonService.findOne(filter);
  }

}
