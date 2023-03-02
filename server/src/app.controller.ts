import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';
import { Response } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getDailyPokemon(@Res() res: Response) {
    let pokemon = {
      name: '',
      height: 0,
      weight: 0,
      generation: 0,
      type1: '',
      type2: '' ,   
      frontSprite: '',
      backSprite: ''
    }

    const number = Math.floor(Math.random() * 1009)

    const daily = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}/`).then((req) => {
      delete req.data.moves
      delete req.data.abilities      
      pokemon.name = req.data.name
      pokemon.height = req.data.height
      pokemon.weight = req.data.weight
      pokemon.type1 = req.data.types[0].type.name
      pokemon.type2 = req.data.types[1]?.type.name
      pokemon.frontSprite = req.data.sprites.front_default
      pokemon.backSprite = req.data.sprites.back_default
      return pokemon
    })

    res.send(daily)
    return daily
  }
}
